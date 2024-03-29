# ビルド手順

## Docker Image作成
docker build https://github.com/microsoft/vscode-vsce.git -t vsce

## パッケージ作成
docker run --rm -it -v .:/workspace vsce package

## 参考
https://github.com/microsoft/vscode-vsce#usage-via-docker
