# OSを起動するまで

Raspberry PiからOSを起動するには、まずmicroSDカードにOSをインストールする必要がある。以前は「NOOBS」と言うイメージ書き込みツールを使用していたようだが、現在はRaspberry Pi公式から「Raspberry Pi Imager」がリリースされているのでそちらを使用する。

以下のサイトからRaspberry Pi Imagerをダウンロードし、microSDカードにインストールする。
https://www.raspberrypi.org/downloads/

microSDカードをRaspberry PiにセットするとRaspbian OSが起動する……はずなのだが、No Signalとなりモニターに映像が出力されない。Raspberry Piに付いているACT LED（microSDカードへのアクセスランプ）は点灯しているので映像出力に問題有りと判断。いろいろと接続を見直したところ、モニターに給電する電源系統をRaspberry PiのGPIOからではなく、USB充電器から取るようにしたところ正常に表示された。

# リモート接続できるようにする

Raspberry Piで開発する際、Raspberry Piにモニターやキーボードを接続して、となると結構面倒である。そこでRaspberry Piを別のPCから操作できるようにリモート接続の設定をする。

設定 > Raspberry Piの設定 > インターフェース > SSH: 有効

上記設定だけでも別PCからリモート接続できるようになるが、場合によってはIPアドレスが変わることがあるため、下記の設定を追加してIPアドレスを固定する。

```/etc/dhcpcd.conf
interface wlan0
static address=192.168.1.100
static routes=192.168.1.1
static domain_name_servers=192.168.1.1
```

# LEDをチカチカさせてみる

GPIO信号を制御してLEDをチカチカさせてみる。方法はとても簡単で、下記のスクリプトを作成してPythonで実行するだけ。

```
from gpiozero import LED
from time import sleep

led = LED(3)  // GIPOピン番号

while True:
    led.on()
    sleep(1)
    led.off()
    sleep(1)
```

参考URL: https://gpiozero.readthedocs.io/en/stable/recipes.html

# GPIO

GPIOのピンアサインは`pinout`コマンドで確認できる。

```
$ pinout
J8:
   3V3  (1) (2)  5V
 GPIO2  (3) (4)  5V
 GPIO3  (5) (6)  GND
 GPIO4  (7) (8)  GPIO14
   GND  (9) (10) GPIO15
GPIO17 (11) (12) GPIO18
GPIO27 (13) (14) GND
GPIO22 (15) (16) GPIO23
   3V3 (17) (18) GPIO24
GPIO10 (19) (20) GND
 GPIO9 (21) (22) GPIO25
GPIO11 (23) (24) GPIO8
   GND (25) (26) GPIO7
 GPIO0 (27) (28) GPIO1
 GPIO5 (29) (30) GND
 GPIO6 (31) (32) GPIO12
GPIO13 (33) (34) GND
GPIO19 (35) (36) GPIO16
GPIO26 (37) (38) GPIO20
   GND (39) (40) GPIO21
```

# コマンド集

```
# シャットダウン
$ poweroff

# 再起動
$ reboot
```
