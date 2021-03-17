# データベース操作API

## 機能について
2つの機能を保持しています。  
1.DBにレコードを追加するAPI(Postリクエスト時)  
2.接続した人のIPアドレスを表示するAPI(Getリクエスト時)  

## サンプルURL
https://protected-plains-08935.herokuapp.com/

## 使用物
1.Node.js  
2.Express(Getリクエスト、Postリクエスト取得)  
3.Express-Validation(入力判定)  
4.x-forwarded-for(Herokuのipアドレス取得)  
5.pg(Heroku PostgresDBに接続およびクエリ実行)  
6.dotenv(Heroku PostgresDBの接続情報を環境変数として保持)  
7.ejs(出力結果のHTMLを生成)  

## 使用方法
**1.Herokuを新規登録する。**  
右上から登録できるはず。  
https://jp.heroku.com/free  
  
**2.Heroku PostgresDBのアドオンを追加する。**  
アプリケーションを新規追加し、アドオンを追加する。  
![DBOperation001](https://user-images.githubusercontent.com/78066183/111474086-05998980-876f-11eb-80ab-f62ac36f2bb7.png)

**3.Heroku PostgresDBの接続情報を取得する。**  
![DBOperation002](https://user-images.githubusercontent.com/78066183/111474171-1cd87700-876f-11eb-9202-b45a3d74d3fe.png)

**4.このプロジェクトをクローンする。**  
![DBOperation003](https://user-images.githubusercontent.com/78066183/111474178-1f3ad100-876f-11eb-92ca-a53478820d08.png)

**5.アプリケーションにこのプロジェクトをデプロイする。**  
デプロイは以下参照。  
https://jp.heroku.com/nodejs

**6.環境変数にDBの接続情報を設定する。**  
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

**7.アプリケーションを実行。**  
OpenAppのボタンをクリックすると、URLが取得できる。  
![DBOperation004](https://user-images.githubusercontent.com/78066183/111474181-206bfe00-876f-11eb-97dd-f859c21d0295.png)  
  
ブラウザからアクセスすると、Getリクエストになるため、あなたのネットワークのグローバルIPアドレスが表示される。  
![DBOperation005](https://user-images.githubusercontent.com/78066183/111474183-219d2b00-876f-11eb-902a-5a6ebc5b5fd3.png)  
  
PostmanなどでPostリクエストを送ると、Emailが空では無い場合のみDBにレコードが追加される。  
![DBOperation006](https://user-images.githubusercontent.com/78066183/111474189-22ce5800-876f-11eb-9380-eb95dbb8ce4c.png)  
![DBOperation007](https://user-images.githubusercontent.com/78066183/111474194-23ff8500-876f-11eb-8b55-527f08b72e0e.png)  
  
DBの確認はDBeaverを使っており、DBToolが決まってないなら使用をオススメしたい。  
https://dbeaver.io/  
  
以上。  
