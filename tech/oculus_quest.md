# Oculus Quest

## スペック

Display panel: OLED
Display resolution: 1440 x 1600 per eye 72Hz refresh rate
Qualcomm Snapdragon 835 processor
4GB RAM
Weight: 571g (Rift is 470g)

# Oculus Questのapkを作成する

## 環境構築

Asset StoreからOculus Integrationをインストールする。

## Player Settings

* Other Settings
  * Graphics APIsからVulkanを削除
  * Package Nameを変更
  * Minimum API Level: Android4.4（API level 19）以上に変更
* XR Settings
  * Virtual Reality Supportedにチェック
  * Virtual Reality SDKsにOculusを追加

## Sceneの設定

Oculus用カメラAssets/Oculus/VR/Prefabs/OVRCameraRigをHierarchyに追加する。

Hierarchyに追加したOVRCameraRigにアタッチされているOVR ManagerのTarget Devices Element0を"Quest"に変更する。

# Oculusの操作

## 位置リセット

Oculusボタン長押しで位置トラッキングリセット。

# 動画をPCに保存する

ADBで以下のコマンドを実行する。

```
adb pull /sdcard/Oculus/VideoShots/com.oculus.vrshell-20191024-124146.mp4
```

