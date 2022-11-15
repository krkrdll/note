# 最初のコミット

masterブランチの最初のコミットには空のREADME.mdのみを追加する。README.mdのファイル名は慣例的に大文字とする。

```
echo "# Readme" >> README.md
git add README.md
git commit -m "first commit"
git push -u origin master
```

# グローバル設定
```
git config --global --edit
```

# ブランチ運用

master, dev, feat, hotfix, releaseブランチを使用する。

master: 本番用。
dev: 開発用。masterブランチから作成する。
feat: 機能開発用。devブランチから作成する。コミットが1つなら--ff、2つ以上なら--no-ffでdevにマージする。
hotfix: 緊急修正用。masterブランチから作成する。
release: 本番環境調整用。devブランチから作成し、開発環境と本番環境の差分のみを反映する。

# タグ

```
# タグをつける
git tag ver1.0

# リモートに反映する
git push origin ver1.0

# 一括でリモートに反映する
git push origin --tags
```

# FAQ

## コミットで変更したファイル名を確認する

```
# 直近のコミット
git diff --stat HEAD^

# 指定のコミット
git diff --stat <commit-id>
```

## devブランチを変更するつもりが、間違えてmasterブランチで作業していた

変更をStashに退避した後にブランチを切り替え、devブランチでStashのデータを戻す。

```
git stash
git checkout dev
git stash pop
```

## コミットを取り消したい

revertする。極力この方法を使用する。

```
git revert <commit-id>
```

resetする。コミット履歴をきれいにしたい場合にはこちらを使用する。リモートにプッシュしている場合には極力使用しない。

```
git reset --hard @^
```

## マージを取り消したい

```
git reset --hard @^
```

## 別のブランチから特定のファイルを取得したい

```
git checkout <対象ブランチ> <取得するファイル>
```

## 特定のコミットからブランチを作成したい

```
git checkout <コミットID> -b <作成するブランチ>
```

## devブランチにfeatブランチをマージしたらコンフリクトが発生した

devブランチのファイルを採用する。

```
git checkout --ours .
```

featブランチのファイルを採用する。

```
git checkout --their .
```

## コミットコメントを修正したい

直前のコミットならamendする。

```
git commit --amend
```

2世代以上前のコミットならrebaseする。

```
git rebase -i @~2
pick 01234567 first commit <- 変更したいコミットのpickをeに変更
pick 01234568 second commit
git commit --amend
git rebase --continue
```

## コミットをまとめたい

rebaseする。

```
git rebase -i @~2
pick 01234567 first commit
pick 01234568 second commit <- 直前のコミットと結合したいコミットのpickをfに変更
```

## ブランチで変更したファイルの一覧を出力したい

```
git diff --name-only master...$CURRENT_BRANCH
```

## 巨大なリポジトリをCloneしようとしたらエラーになった

サーバ上のメモリ不足？
shallow cloneする。

```
git clone --depth 1 git://***
```

# 参考情報

```
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
