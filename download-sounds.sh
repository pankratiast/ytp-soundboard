#!/bin/bash
# YTP Soundboard - Sound Downloader
# Uses yt-dlp + ffmpeg to grab clips from YouTube and trim to the good part.
#
# Usage: ./download-sounds.sh
#
# Each entry: download_clip "output-filename" "youtube-url" "start-time" "duration"
# Times are in seconds or HH:MM:SS format.

SOUNDS_DIR="$(dirname "$0")/sounds"
mkdir -p "$SOUNDS_DIR"

download_clip() {
  local name="$1"
  local url="$2"
  local start="$3"
  local duration="$4"
  local outfile="$SOUNDS_DIR/$name.mp3"

  if [ -f "$outfile" ]; then
    echo "SKIP  $name.mp3 (already exists)"
    return
  fi

  echo "GET   $name.mp3 ..."

  # Download, extract audio, trim to the clip we want
  yt-dlp -q --no-warnings \
    -x --audio-format mp3 --audio-quality 5 \
    --postprocessor-args "ffmpeg:-ss $start -t $duration" \
    -o "$SOUNDS_DIR/${name}_temp.%(ext)s" \
    "$url" 2>/dev/null

  # yt-dlp names the file with the temp pattern
  local tmpfile="$SOUNDS_DIR/${name}_temp.mp3"
  if [ -f "$tmpfile" ]; then
    mv "$tmpfile" "$outfile"
    echo "  OK  $name.mp3"
  else
    echo "  FAIL $name.mp3 - download failed, try manually"
  fi
}

# A simpler approach: download full audio then trim with ffmpeg separately
# (more reliable across yt-dlp versions)
grab() {
  local name="$1"
  local url="$2"
  local start="$3"
  local duration="$4"
  local outfile="$SOUNDS_DIR/$name.mp3"

  if [ -f "$outfile" ]; then
    echo "SKIP  $name.mp3 (already exists)"
    return
  fi

  echo "GET   $name.mp3 ..."

  local tmpdir
  tmpdir=$(mktemp -d)

  # Download full audio
  yt-dlp -q --no-warnings \
    -x --audio-format mp3 --audio-quality 5 \
    -o "$tmpdir/full.%(ext)s" \
    "$url" 2>/dev/null

  if [ -f "$tmpdir/full.mp3" ]; then
    # Trim to just the clip
    ffmpeg -y -ss "$start" -t "$duration" -i "$tmpdir/full.mp3" \
      -acodec libmp3lame -q:a 5 "$outfile" 2>/dev/null
    if [ -f "$outfile" ]; then
      echo "  OK  $name.mp3"
    else
      echo "  FAIL $name.mp3 - ffmpeg trim failed"
    fi
  else
    echo "  FAIL $name.mp3 - download failed"
  fi

  rm -rf "$tmpdir"
}

echo "=== YTP Soundboard Downloader ==="
echo "Downloading to: $SOUNDS_DIR"
echo ""

# -------------------------------------------------------
# CD-i / Hotel Mario
# -------------------------------------------------------
# "I hope she made lotsa spaghetti!"
grab "lotsa-spaghetti" "https://www.youtube.com/watch?v=fiVr34QCF_c" "0" "2"

# "I wonder what's for dinner"
grab "wonder-whats-for-dinner" "https://www.youtube.com/watch?v=_mLyl7ECwso" "0" "3"

# "Nice of the princess to invite us over for a picnic, eh Luigi?"
grab "nice-of-the-princess" "https://www.youtube.com/watch?v=9R0kk9upkIA" "0" "5"

# "NO."
grab "no" "https://www.youtube.com/watch?v=oOrAiWAFIlI" "0" "1.5"

# "Gay Luigi?"
grab "gay-luigi" "https://www.youtube.com/watch?v=AtG_N2fkKTs" "0" "3"

# Hotel Mario door closing
grab "hotel-mario-door" "https://www.youtube.com/watch?v=FPxY8lpYAUM" "0" "2"

# -------------------------------------------------------
# Mama Luigi
# -------------------------------------------------------
# "That's Mama Luigi to you, Mario!" - from Super Mario World cartoon
grab "mama-luigi" "https://www.youtube.com/watch?v=FMxIcXkXkik" "0" "6"

# "That's Mama Luigi to you, Mario!"
grab "thats-mama-luigi" "https://www.youtube.com/watch?v=LCl5uyn5K7k" "0" "3"

# -------------------------------------------------------
# CD-i Zelda
# -------------------------------------------------------
# "Mah boi, this peace is what all true warriors strive for"
grab "mah-boi" "https://www.youtube.com/watch?v=FPxY8lpYAUM" "0" "3"

# "Lamp oil, rope, bombs? You want it?"
grab "lamp-oil" "https://www.youtube.com/watch?v=X8HSnP1SiI0" "0" "4"

# "Squadala! We're off!"
grab "squadala" "https://www.youtube.com/watch?v=lZ3fsb3ak1I" "0" "3"

# "YOU MUST DIE!"
grab "you-must-die" "https://www.youtube.com/watch?v=MbsuAbTTsV8" "0" "2"

# "ENOUGH! My ship sails in the morning." / "I wonder what's for dinner"
# The King's footage from CD-i games - "Enough" line is at ~5s in this compilation
grab "enough" "https://www.youtube.com/watch?v=jnFe_HYvITo" "0" "3"

# "After you've scrubbed all the floors in Hyrule"
grab "scrub" "https://www.youtube.com/watch?v=LGL3c-B9-S0" "0" "5"

# -------------------------------------------------------
# Robotnik / Sonic
# -------------------------------------------------------
# "Snooping as usual I see" (PINGAS) - HQ version
grab "snoopingas" "https://www.youtube.com/watch?v=8UmXX21zVms" "0" "6"

# "PROMOTION!" - Robotnik gives himself a promotion
grab "promotion" "https://www.youtube.com/watch?v=Px4ObiZ20sk" "0" "6"

# -------------------------------------------------------
# Classic Memes
# -------------------------------------------------------
# "I'M A FIRIN MAH LAZER" - Shoop da whoop
grab "firin-mah-lazer" "https://www.youtube.com/watch?v=c7r8FKVMRPY" "0" "5"

# "IT'S OVER 9000!" - Vegeta
grab "over-9000" "https://www.youtube.com/watch?v=QsDDXSmGJZA" "0" "4"

# Weegee stare
grab "weegee" "https://www.youtube.com/watch?v=dsGODTySH0E" "0" "3"

# "OH MY GOD" - Joseph Joestar (JoJo's Bizarre Adventure)
grab "oh-my-god" "https://www.youtube.com/watch?v=-cDEnUcf3fA" "0" "4"

# Dramatic chipmunk (actually a prairie dog) - original "Dramatic Look" video
grab "dramatic-chipmunk" "https://www.youtube.com/watch?v=y8Kyi0WNg40" "0" "5"

# NOPE - TF2 Engineer
grab "nope" "https://www.youtube.com/watch?v=gvdf5n-zI14" "0" "3"

# GET OUT - meme sound effect
grab "get-out" "https://www.youtube.com/watch?v=ETo5l_RFgPY" "0" "3"

# WOW - Eddy Wally (for montage parodies)
grab "wow" "https://www.youtube.com/watch?v=Xm_dS-wEFvs" "0" "3"

# -------------------------------------------------------
# Misc / SFX
# -------------------------------------------------------
# Bass boost / ear rape
grab "ear-rape" "https://www.youtube.com/watch?v=wpV-gGA4PSk" "0" "3"

# Windows XP Error
grab "windows-xp-error" "https://www.youtube.com/watch?v=0lhhrUuw2N8" "0" "2"

# MLG Airhorn
grab "mlg-airhorn" "https://www.youtube.com/watch?v=iZzCSk7QRno" "0" "3"

# Sad violin
grab "sad-violin" "https://www.youtube.com/watch?v=7ODcC5z6Ca0" "0" "5"

# Bruh sound effect
grab "bruh" "https://www.youtube.com/watch?v=2ZIpFytCSVc" "0" "2"

# Roblox OOF death sound
grab "oof" "https://www.youtube.com/watch?v=3w-2gUSus34" "0" "2"

# Taco Bell bong
grab "taco-bell" "https://www.youtube.com/watch?v=kLvGB3Ol2p4" "0" "3"

echo ""
echo "=== Done ==="
echo ""
# Show results
total=$(ls -1 "$SOUNDS_DIR"/*.mp3 2>/dev/null | wc -l | tr -d ' ')
echo "$total / 31 sound files downloaded."
echo ""
missing=$(cd "$SOUNDS_DIR" && for f in \
  lotsa-spaghetti mama-luigi thats-mama-luigi wonder-whats-for-dinner \
  nice-of-the-princess no gay-luigi hotel-mario-door mah-boi lamp-oil \
  squadala you-must-die enough scrub snoopingas promotion firin-mah-lazer \
  over-9000 weegee oh-my-god dramatic-chipmunk nope get-out wow ear-rape \
  windows-xp-error mlg-airhorn sad-violin bruh oof taco-bell; do
  [ ! -f "$f.mp3" ] && echo "  - $f.mp3"
done)
if [ -n "$missing" ]; then
  echo "Missing files:"
  echo "$missing"
  echo ""
  echo "For missing files, search myinstants.com or youtube manually."
fi
