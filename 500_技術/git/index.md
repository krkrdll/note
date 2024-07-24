# 最初のコミット

mainブランチの最初のコミットには空のREADME.mdのみを追加する。README.mdのファイル名は慣例的に大文字とする。

```sh
echo "# Readme" >> README.md
git add README.md
git commit -m "add REAME.md"
git push -u origin main
```

## グローバル設定

```sh
git config --global --edit
```

## ブランチ運用

基本となるブランチと運用方法。

main: 本番用。
develop: 開発用。mainブランチから作成する。
feature: 機能開発用。developブランチから作成する。コミットが1つなら--ff、2つ以上なら--no-ffでdevelopにマージする。
fix: バグ修正用。developブランチから作成する。
hotfix: 緊急バグ修正用。mainブランチから作成する。
release: 本番環境調整用。developブランチから作成し、開発環境と本番環境の差分のみを反映する。

## タグ

```sh
# タグをつける
git tag ver1.0

# タグを削除する
git tag -d ver1.0

# リモートに反映する
git push origin ver1.0

# リモートのタグを削除する
git push origin --delete ver1.0

# 一括でリモートに反映する
git push origin --tags
```

## FAQ

### コミットで変更したファイル名を確認する

```sh
# 直近のコミット
git diff --stat HEAD^

# 指定のコミット
git diff --stat <commit-id>
```

### devブランチを変更するつもりが、間違えてmainブランチで作業していた

変更をStashに退避した後にブランチを切り替え、devブランチでStashのデータを戻す。

```sh
git stash
git checkout dev
git stash pop
```

### コミットを取り消したい

revertする。極力この方法を使用する。

```sh
git revert <commit-id>
```

resetする。コミット履歴をきれいにしたい場合にはこちらを使用する。リモートにプッシュしている場合には極力使用しない。

```sh
git reset --soft @^
git reset --mixed @^
git reset --hard @^
```

### マージを取り消したい

```sh
git reset --hard @^
```

### 別のブランチから特定のファイルを取得したい

```sh
git checkout <対象ブランチ> <取得するファイル>
```

### 特定のコミットからブランチを作成したい

```sh
git checkout -b <作成するブランチ> <コミットID>
```

### featブランチをdevブランチにマージしたらコンフリクトが発生した

devブランチ（変更前）のファイルを採用する。

```sh
git checkout --ours .
```

featブランチ（変更後）のファイルを採用する。

```sh
git checkout --their .
```

### コミットコメントを修正したい

直前のコミットならamendする。

```sh
git commit --amend
```

2世代以上前のコミットならrebaseする。

```sh
git rebase -i @~2
pick 01234567 first commit <- 変更したいコミットのpickをeに変更
pick 01234568 second commit
git commit --amend
git rebase --continue
```

### コミットをまとめたい

rebaseする。

```sh
git rebase -i @~2
pick 01234567 first commit
pick 01234568 second commit <- 直前のコミットと結合したいコミットのpickをfに変更
```

### 変更したファイルのアーカイブを作成したい

ブランチ名のCommitID1からCommitID2の間で変更したファイルをアーカイブする。

```sh
git archive <ブランチ名> `git diff --name-only <CommitID1> <CommitID2> --diff-filter=ACMR` -o archive.zip
```

### ブランチで変更したファイルの一覧を出力したい

```sh
git diff --name-only main...$CURRENT_BRANCH
```

### 巨大なリポジトリをCloneしようとしたらエラーになった

サーバ上のメモリ不足？
shallow cloneする。

```sh
git clone --depth 1 git://***
```

### Git lfs移行

拡張子毎にサイズ集計。

```sh
git lfs migrate info --everything
git lfs migrate import --include="*.mp4,*.wav" --everything
git reflog expire --expire-unreachable=now --all && git gc --prune=now
```

## 参考情報

```sh
$ git
usage: git [--version] [--help] [-C <path>] [-c <name>=<value>]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           <command> [<args>]

These are common Git commands used in various situations:

start a working area (see also: git help tutorial)
   clone             Clone a repository into a new directory
   init              Create an empty Git repository or reinitialize an existing one

work on the current change (see also: git help everyday)
   add               Add file contents to the index
   mv                Move or rename a file, a directory, or a symlink
   restore           Restore working tree files
   rm                Remove files from the working tree and from the index
   sparse-checkout   Initialize and modify the sparse-checkout

examine the history and state (see also: git help revisions)
   bisect            Use binary search to find the commit that introduced a bug
   diff              Show changes between commits, commit and working tree, etc
   grep              Print lines matching a pattern
   log               Show commit logs
   show              Show various types of objects
   status            Show the working tree status

grow, mark and tweak your common history
   branch            List, create, or delete branches
   commit            Record changes to the repository
   merge             Join two or more development histories together
   rebase            Reapply commits on top of another base tip
   reset             Reset current HEAD to the specified state
   switch            Switch branches
   tag               Create, list, delete or verify a tag object signed with GPG

collaborate (see also: git help workflows)
   fetch             Download objects and refs from another repository
   pull              Fetch from and integrate with another repository or a local branch
   push              Update remote refs along with associated objects
```
