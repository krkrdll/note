# 音声自動再生時に以下のエラーが発生する
Uncaught (in promise) DOMException

クリックなどのユーザアクションを伴わない音声の自動再生は、Chromeのポリシー制約により自動再生されない。
https://developers.google.com/web/updates/2017/09/autoplay-policy-changes

以下の設定を変更することで解決。
chrome://flags/#autoplay-policy
Default -> No user gesture is required.

