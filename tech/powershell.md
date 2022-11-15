# プロファイル

> $PROFILE
C:\Users\xyz\Documents\PowerShell\Microsoft.PowerShell_profile.ps1

## profile.ps1
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


