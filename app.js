const express = require('express');
const app = express();
const { body, validationResult } = require('express-validator');
const port = process.env.PORT || 3000;
const ipLogic = require('./logic/ipLogic');

// リクエストをjson形式に変換
app.use(express.json());
app.use(express.urlencoded({
	extended: true
}));

// ViewEngineにejsをセット
app.set('view engine', 'ejs');

// getリクエストした場合、自分のip表示
app.get(
	"/", 
    (req, res) => {
		// クライアントのipアドレス取得
		let ip = ipLogic.getClientIp(req);
		console.log(req);
		res.send(`あなたのIPアドレス⇒ ${ip}`);
	}
);

// postリクエストした場合、emailが渡されていたらDBにInsert
app.post(
	'/',
	// バリデーションルール
	// email必須チェック
	body('email', 'emailは必須項目です。').not().isEmpty(), 
    (req, res) => {
		// バリデーションチェック
		const valiErrors = validationResult(req);
		if (!valiErrors.isEmpty()) {
            // バリデーションエラー
            console.log(valiErrors.array());
			res.render('pages/error.ejs', {
				errorMessage: valiErrors.array(),
			});
		} else {
			// 接続情報定義
			const { Pool } = require('pg');
            require('dotenv').config();

			const pool = new Pool({
				host: process.env.ENV_HOST,
				database: process.env.ENV_DB,
				user: process.env.ENV_USER,
				password: process.env.ENV_PASSWORD,
                port: 5432,
				//ssl: true
				ssl: {
					rejectUnauthorized: false
				}
			});
			// DB接続
			pool.connect((conError, client) => {
				if (conError) {
					// DB接続エラー
                    console.log(conError);
					res.render('pages/error.ejs', {
						errorMessage: [{msg:'DB接続エラーです。'}],
					});
				} else {
					//クエリの定義
					const query = {
						text: 'INSERT INTO read(email,first_name,last_name,company) VALUES($1, $2, $3, $4)',
						values: [req.body.email, req.body.first_name, req.body.last_name, req.body.company
						],
					}

                    // クエリの実行
					client.query(query, (queryError, result) => {
						if (queryError) {
							// クエリ実行エラー
                            console.log(queryError);
							res.render('pages/error.ejs', {
								errorMessage: [{msg:'クエリ実行エラーです。'}],
							});
						} else {
                            // クエリ成功
							console.log('クエリ成功');
							console.log(result);
							res.render('pages/success.ejs');
						}
					});
				}
			});
		}
	}
);

app.listen(port, () => {
	console.log('start');
})
