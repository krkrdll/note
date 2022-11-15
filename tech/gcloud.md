# インストール
curl https://sdk.cloud.google.com | bash

# gcloudアップデート
glcoud components update

# ログイン
gcloud auth login

# プロジェクト

## プロジェクト一覧の表示
gcloud projects list

## 現在のプロジェクト情報
gcloud config list

## プロジェクト切り替え
gcloud config set project [project-id]

