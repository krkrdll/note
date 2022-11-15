# プロジェクトへの追加
> npm i aws-amplify
以下必要に応じて
> npm i aws-amplify-vue

# 初期設定
> amplify configure
> amplify init

# 機能追加

## API追加

> amplify api add

# アップ

> amplify push

## ホスティング
> amplify publish

# 確認

> amplify status

# 削除

> amplify delete

"amplify status" will show you what you've added already and if it's locally configured or deployed
"amplify add <category>" will allow you to add features like user login or a backend API
"amplify push" will build all your local backend resources and provision it in the cloud
“amplify console” to open the Amplify Console and view your project status
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud
