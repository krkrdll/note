456:489733222400=900:


新しいPCが届いた。

サービスタグ 4D5GK24

# SSD換装

購入時のストレージは512GB。別途購入したキオクシアの2TBへ換装。その後、OSインストールしようとしたが問題発生。どうもストレージが認識していない様子。

別のPCに接続する分には認識するのでストレージの故障ではなさそう。

ネットで情報を漁ると、UEFI（BIOS）の設定が影響している模様。
下記ブログにあった情報のままBIOSの設定を変更したところ、正常にSSD認識されるようになった。感謝。
https://ameblo.jp/dolusandayo-u/entry-12787671853.html

1. PC起動中にF2キー連打でUEFIに入る
2. StorageよりSATA/NVMe OperationをRAID OnからAHCI/NVMeに変更
3. 設定保存し再起動

無事SSDが認識するようになったので、OSのインストールを開始。しかし、ここでも問題発生。

インストールメディアはMicrosoft案内の方法で作成していたが、DELLのネットワークドライバ（WiFi）が認識しないことでOSのインストールができない（今はWindowsのインストールにネットワーク接続は必須のよう）。

DELL案内のDell OS Recovery Toolを使用してインストールメディアを作成しようとしたが、こちらはこちらで「この製品に定義されているosイメージはありません」と表示され、インストールメディアが作成できない。

ダメもとで、とWindowsにある回復メディアの作成で作成したところ

Windowsで回復メディアを作成し、無事起動。

# 初期設定

ユーザの作成。初めにローカルユーザとして作成し、その後Microsoftアカウントと連携させる。こうすることでユーザフォルダ（C:\Users）のフォルダ名が任意のフォルダ名にできる。

不要なアプリ削除

Windows Update

# インストールソフト

## Microsoft Storeからインストール
* PowerShell 7
* Ubuntu
* Visual Studio
* Visual Studio Code

## Chocolateyからインストール
* git
* fvm
* ngrok

## インストーラー
* Chrome
* カシミール3D
* ExplorerPatcher
* Android Studio
* Docker Desktop
* Unity Hub
* Studio One
* Melodyne
* DaVinci Resolve
* Steam

## Zip
* Blender
* AIMP
* OBS Studio
* MPC-BE
* 7zip
* AutoHotkey
* CLCL
* Tablacus Explorer
* VOICEVOX
* NEUTRINO(zip)

## AutoHotkey
SC06E::SC01D