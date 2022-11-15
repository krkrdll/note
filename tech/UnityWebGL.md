# トライブルシューティング

## ビルドすると下記エラーが発生する

Exception: Unity.IL2CPP.Building.BuilderFailedException

Build completed with a result of 'Failed' in 149 seconds (148898 ms)
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&)

メモリ不足？再実行、Unity再起動、OS再起動すると正常にビルドできるようになる。


下記でメモリ使用量確認できる。
unityInstance.Module.asmLibraryArg.getTotalMemory()

上記でメモリ使用量を確認すると段階的に増加する。
268,434,456 byte
536,870,912 byle

TOTAL_MEMORY: 512 * 1000 * 1000,


<div class="debug" style="position:absolute; top: 20px; right: 20px; font-size: 2em;"></div>

const debug = document.querySelector(".debug");
setInterval(() => {
    const mem = unityInstance.Module.asmLibraryArg.getTotalMemory();
    debug.innerHTML = (mem / 1000 / 1000).toLocaleString() + "MB";
}, 1000);
