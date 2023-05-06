# ビープ音をならないようにする

```/etc/.inputrc
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

# 開発環境の構築

## nvm
https://github.com/nvm-sh/nvm

```
# nvmのインストール
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.38.0/install.sh | bash

# LTSバージョンのインストール
nvm install --lts
```

## phpenv

```
anyenv install phpenv
sudo apt install gcc build-essential pkg-config libxml2-dev libkrb5-dev libssl-dev libsqlite3-dev libbz2-dev libpng-dev libjpeg-dev libonig-dev libreawsdline-dev libtidy-dev libxslt-dev libcurl4-openssl-dev libzip-dev libffi-dev
phpenv install [version]
```

## pyenv

```
pyenv install [version]
```

