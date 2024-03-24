# AutoHotkey

PCを新調するにあたり、AutoHotkeyをVer1から2へアップデートした。それに合わせて、レジストリによるリマップ（CapsLock -> 無変換）をせずとも動くように修正。

最も実現したい機能として、移動キーのカスタマイズがある。テキスト入力をしながら頻繁に使用する移動キーがホームポジションからかなり遠い位置にあるのはすごく不便なため、手を動かさなくとも操作できるようにしたい。

割り当てとしては、CapsLockを修飾キーとして、ijklで移動、nでDelete等に割り当てたいと思う。

まずはCapsLockの扱いを変更する。
```
SC03A::Return              ; CapsLock単独キーの無効化
+SC03A::+SC03A             ; Shift + CapsLock -> IME ON/OFF
^SC03A::Send "{CapsLock}"  ; Ctrl + CapsLock -> CapsLock
```

次にijklキーの割り当て。CapsLock + ijklで移動、CapsLock + f + ijklでShiftを押しながらの移動、CapsLock + g + ijklでCtrlを押しながらの移動に割り当て。
```
SC03A & f::Return  ; CapsLock + fの無効化
SC03A & g::Return  ; CapsLock + gの無効化

; 以下iキーの割り当て。jklも同様に割り当てる
SC03A & i:: {
    if GetKeyState("F", "P")
        Send "+{Up}"
    else if GetKeyState("G", "P")
        Send "^{Up}"
    else
        Send "{Up}"
}
```

あとは遠くにあるキーを近くに持ってくるなど。
```
SC03A & m::Send "{BackSpace}"
SC03A & n::Send "{Delete}"
```

上記設定を_base.ahkとして保存、本体となるAutoHotkey.ahkでは_base.ahkをインクルードして使用する。

```AutoHotkey.ahk
#Include "_base.ahk"
```

アプリ毎にキーを割り当てる場合にはHotIfを使用する。下記はEdgeブラウザでCtrl + 左右キーでタブ切り替えの例。
```_edge_exe.ahk
#HotIf WinActive("ahk_exe msedge.exe")
^Left::Send "^+{Tab}"
^Right::Send "^{Tab}"
#HotIf
```

上記アプリごとに作成したファイルも本体にインクルードする。
```AutoHotkey.ahk
#Include "_base.ahk"
#Include "_edge_exe.ahk"
```

## 参考
https://ahkscript.github.io/ja/docs/v2/

