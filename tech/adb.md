# USBケーブルを接続しないでデバッグする方法

1. AndroidでTCP接続待ち受け状態にする。
   `$ adb tcpip 192.168.*.*:5555`
2. WindowsからAndroidにTCP接続する。
   `$ adb connect 192.168.*.*:5555`

## ADBで接続できなくなった場合の対処方法

1. adb kill-server
2. adb tcpip 5555
3. adb connect (your device ip):5555
