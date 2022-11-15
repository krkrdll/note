## 初回接続

$ sudo passwd postgres
$ su - postgres
$ psql

## ロールの作成

CREATE ROLE {roll_name} LOGIN CREATEDB PASSWORD '{password}';
{roll_name}: ロール名
{password}: パスワード

## データベースの作成

CREATE DATABASE {database_name} OWNER {owner};
{database_name}: データベース名
{owner}: オーナー

## テーブルの作成

CREATE TABLE {table_name} (column type, ...);
{table_name}: テーブル名

## トラブルシューティング

csvファイルからデータベースにCOPYコマンドでデータインポートする際に以下のエラーが発生する。
"ERROR:  invalid input syntax for integer"


