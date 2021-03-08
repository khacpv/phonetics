#ffmpeg -i *.m4a -c:v copy -c:a libmp3lame -q:a 4 *.mp3

for i in *.m4a ; do 
    ffmpeg -i "$i" -c:v copy -c:a libmp3lame -q:a 4 "$(basename "${i/.m4a}")".mp3
done
