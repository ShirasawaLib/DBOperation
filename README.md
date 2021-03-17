# DBOperation

# 機能について
2つの機能を保持しています。
1.DBにレコードを追加するAPI(Postリクエスト時)
2.接続した人のIPアドレスを表示するAPI(Getリクエスト時)

# サンプルURL
https://protected-plains-08935.herokuapp.com/

# 使用物
1.Node.js
2.Express(Getリクエスト、Postリクエスト取得)
3.Express-Validation(入力判定)
4.x-forwarded-for(Herokuのipアドレス取得)
5.pg(Heroku PostgresDBに接続およびクエリ実行)
6.dotenv(Heroku PostgresDBの接続情報を環境変数として保持)
7.ejs(出力結果のHTMLを生成)

# 使用方法
1.Herokuを新規登録する。
右上から登録できるはず。
https://jp.heroku.com/free

2.Heroku PostgresDBのアドオンを追加する。
アプリケーションを新規追加し、アドオンを追加する。
DBOperation001の画像

3.Heroku PostgresDBの接続情報を取得する。
DBOperation002の画像

4.このプロジェクトをクローンする。
DBOperation003の画像

5.アプリケーションにこのプロジェクトをデプロイする。
デプロイは以下参照。
https://jp.heroku.com/nodejs

6.環境変数にDBの接続情報を設定する。
環境変数の追加方法は以下参照。
https://devcenter.heroku.com/ja/articles/config-vars

必要な環境変数は4つ。
・ENV_HOST
ホスト名
・ENV_DB
データベース名
・ENV_USER
ユーザー名
・ENV_PASSWORD
パスワード

7.アプリケーションを実行。
OpenAppのボタンをクリックすると、URLが取得できる。
DBOperation004の画像

ブラウザからアクセスすると、Getリクエストになるため、あなたのネットワークのグローバルIPアドレスが表示される。
DBOperation005の画像

PostmanなどでPostリクエストを送ると、Emailが空では無い場合のみDBにレコードが追加される。
DBOperation006の画像
DBOperation007の画像

DBの確認はDBeaverを使っており、DBToolが決まってないなら使用をオススメしたい。
https://dbeaver.io/

以上。
