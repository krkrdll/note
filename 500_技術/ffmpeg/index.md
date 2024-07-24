# tips

## 動画の情報を表示する

```sh
ffprobe -i input.mp4
```

## 動画と音声を結合する

```sh
ffmpeg -i input.mp4 -i input.mp3 -c:v copy -c:a copy -map 0:v:0 -map 1:a:0 output.mp4
```

## 動画フォーマットを変換する

```sh
ffmpeg -i input.mov output.mp4
```

## アルファチャネル付きの動画作成（Top-Bottom）

```sh
ffmpeg -i input.mp4 -vf "split <a>, pad=iw:ih*2 <b>, <a> alphaextract, <b> overlay=0:h" -y output.mp4
```

## 解像度圧縮

```sh
ffmpeg -i input.mp4 -vf scale=960:1270 output.mp4
```

## ビットレート圧縮（crf=0～51）

```sh
ffmpeg -i input.mp4 -crf 24 output.mp4
```

## 解像度、ビットレート圧縮

```sh
ffmpeg -i input.mp4 -vf scale=960:1270 -crf 24 output.mp4
```

## 時間カット（0～secまで）

```sh
ffmpeg -i input.mp4 -t <sec> -c copy output.mp4
```

## 時間カット（sec～最後まで）

```sh
ffmpeg -ss <sec> -i input.mp4 -c copy output.mp4
```

## 音声フォーマット変換

```sh
ffmpeg -i input.mp4 -vn -ac 2 -ar 44100 -ab 256k -acodec libmp3lame -f mp3 output.mp3
```

## 動画から音声抜き出し

```sh
ffmpeg -i input.mp4 -vn -ac 2 -ar 44100 -ab 128k -acodec libvorbis -f ogg output.ogg
```

## 動画から連番画像を書き出す

```sh
ffmpeg -i input.mp4 -vcodec mjpeg -r 30 image_%03d.jpg
```

## 色情報の変換

```sh
ffmpeg -i input.mp4 -colorspace:v "bt709" -color_primaries:v "bt709" -color_trc:v "bt709" -color_range:v "tv" output.mp4
```

## インターレースかプログレッシブかの判別方法

```sh
ffmpeg -t 1 -i input.mp4 -vf idet -an -sn -f null -
```
