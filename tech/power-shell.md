$ip = wsl hostname -I
$port = 8080
netsh interface portproxy delete v4tov4 listenport=$port
netsh interface portproxy add v4tov4 listenport=$port connectaddress=$ip


# カスタマイズ
以下のファイルを作成する。
%HomePath%\Documents\WindowsPowerShell\profile.ps1

```
function prompt {
  $identity = [Security.Principal.WindowsIdentity]::GetCurrent()
  $principal = [Security.Principal.WindowsPrincipal] $identity
  $adminRole = [Security.Principal.WindowsBuiltInRole]::Administrator

  Write-Host $(if (Test-Path variable:/PSDebugContext) { "[DBG]: " }
    elseif($principal.IsInRole($adminRole)) { "[ADMIN]: " }
    else { "" }) -NoNewLine
  Write-Host $(Get-Location) -ForegroundColor Green -NoNewLine
  return "$ "
}
```

# 参考

(Windows PowerShell のヘルプ)[https://forsenergy.com/ja-jp/windowspowershellhelp/]

