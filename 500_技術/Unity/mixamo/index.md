# Mixamoアニメーション

## 1

[Mixamo](https://www.mixamo.com/)にログインし、好きなアニメーションを選択する。画面ではIdle。

<img src="images/mixamo.png" alt="">

## 2

DOWNLOADボタンを押し、Formatを"FBX for Unity(.fbx)"、Skinを"With Skin"にしてダウンロードする。

<img src="images/download_settings1.png" width="500" alt="">

## 3

別のアニメーションを選択し、Skinを"Without Skin"[^1]にしたデータをダウンロードする。

[^1]: With Skinでも問題はないが、無駄なデータを含まなくて済む。

<img src="images/download_settings2.png" width="500" alt="">

## 4

ダウンロードした2つのFBXをUnityにインポートし、1つ目のFBXのインポート設定ではRigのAnimation Typeで"Humanoid"、Avatar Definitionで"Create From This Model"を選択、さらにAnimationの"Loop Time"にチェックしてApplyする。

<img src="images/import_settings1.png" width="400" alt="">

## 5

2つ目のFBXでも基本的に蒸気と同じ設定とするが、RigのAvatar Definitionでは"Copy From Other Avatar"を選択し、Sourceに上記で作成されたAvatarを選択する。

<img src="images/import_settings2.png" width="400" alt="">

## 6

上記手順が完了すると下記のようなAnimation Clipが生成される（Y Bot@Idleが2つ目、Y Bot@Walkingが2つ目）。

<img src="images/models.png" width="400" alt="">

## 7

Animator Controllerを作成し、ParametersにFloat型の変数を1つ作成する。さらに2つのStateを追加し画像のように接続する。

<img src="images/animator_controller1.png" width="600" alt="">

## 8

Idle StateのMotionには4項で生成されたAnimation Clipを、Walking StatekのMotionには5項で生成されたAnimation Clipをそれぞれ選択する。

## 9

Idle->WalkingのTransitionではHas Exit Timeのチェックを外し、Conditionsに7項で作成したFloatが0.2以上になったら、という条件を設定する。Waling->Idleの条件はFloatが0.2以下の条件とする。

<img src="images/animator_controller2.png" width="400" alt="">
<img src="images/animator_controller3.png" width="400" alt="">
