# ビープ音をならないようにする

```~/.inputrc
set bell-style none
```

## vimカスタム

```.vimrc
set visualbell t_vb=
set number
set tabstop=4
set shiftwidth=4
set expandtab
set smartindent
set cursorline
```

# SSH-AGENTの再利用
ターミナル毎にSSH-AGENTを起動するのは煩わしいので、すでにSSH-AGENTがあればそれを使いまわす。
```.bashrc
SSH_AGENT_FILE=~/.ssh-agent
if [ $(ps -ef | grep [s]sh-agent | wc -l) -eq 0 ]; then
  ssh-agent > $SSH_AGENT_FILE
fi
source $SSH_AGENT_FILE &>/dev/null
```

# 開発環境の構築

## nvm
https://github.com/nvm-sh/nvm

```
# nvmのインストール
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.38.0/install.sh | bash

# LTSバージョンのインストール
nvm install --lts
```

