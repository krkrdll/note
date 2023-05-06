# SSH-AGENTの再利用
ターミナル毎にSSH-AGENTを起動するのは煩わしいので、すでにSSH-AGENTがあればそれを使いまわす。
```.bashrc
SSH_AGENT_FILE=~/.ssh-agent
if [ $(ps -ef | grep [s]sh-agent | wc -l) -eq 0 ]; then
  ssh-agent > $SSH_AGENT_FILE
fi
source $SSH_AGENT_FILE &>/dev/null
```

WSLとWindowsのsshファイル同期
```
rsync -av ~/.ssh/ /mnt/c/Users/xyz/.ssh
```

