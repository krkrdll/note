# 動画の情報を表示する
ffprobe -i <input>

# 動画フォーマットを変換する
ffmpeg -i <input> <output>

# アルファチャネル付きの動画作成（Top-Bottom）
ffmpeg -i <input> -vf "split <a>, pad=iw:ih*2 <b>, <a> alphaextract, <b> overlay=0:h" -y <output>

# 解像度圧縮
ffmpeg -i <input> -vf scale=960:1270 <output>

# ビットレート圧縮（crf=0～51）
ffmpeg -i <input> -crf 24 <output>

# 解像度、ビットレート圧縮
ffmpeg -i <input> -vf scale=960:1270 -crf 24 <output>

# 時間カット（0～secまで）
ffmpeg -i <input> -t <sec> -c copy <output>

# 時間カット（sec～最後まで）
ffmpeg -ss <sec> -i <input> -c copy <output>

# 音声フォーマット変換
ffmpeg -i <input> -vn -ac 2 -ar 44100 -ab 256k -acodec libmp3lame -f mp3 <output>

# 動画から音声抜き出し
ffmpeg -i <input> -vn -ac 2 -ar 44100 -ab 128k -acodec libvorbis -f ogg <output>

# 動画から連番画像を書き出す
ffmpeg -i <input> -vcodec mjpeg -r 30 image_%03d.jpg

# 色情報の変換
ffmpeg -i <input> -colorspace:v "bt709" -color_primaries:v "bt709" -color_trc:v "bt709" -color_range:v "tv" <output>

# インターレースかプログレッシブかの判別方法
ffmpeg -t 1 -i <input> -vf idet -an -sn -f null -
