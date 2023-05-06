#!/bin/sh

PROJECT_DIR=~/projects/xrdoor/
PUBLIC_DIR=/var/www/html/xrdoor/

# 検証用CMS連携版確認用
DEV=develop/
rsync -av --delete "${PROJECT_DIR}public/" "${PUBLIC_DIR}${DEV}" --exclude "env.js" --exclude "atcosme-tokyo.html" --exclude "hyper-landscape.html"
