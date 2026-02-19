const SOUNDS = [
  // Hotel Mario / CD-i Mario
  { id: "lotsa-spaghetti", label: "I Hope She Made Lotsa Spaghetti!", cat: "cdi", file: "lotsa-spaghetti.mp3" },
  { id: "mama-luigi", label: "Mama Luigi!", cat: "mario", file: "mama-luigi.mp3" },
  { id: "thats-mama-luigi", label: "That's Mama Luigi to You, Mario!", cat: "mario", file: "thats-mama-luigi.mp3" },
  { id: "luigi-help", label: "Luigi Screams HELP!", cat: "mario", file: "luigi-help.mp3" },
  { id: "toast", label: "I Wonder What's for Dinner", cat: "cdi", file: "wonder-whats-for-dinner.mp3" },
  { id: "nice-of-the-princess", label: "Nice of the Princess to Invite Us", cat: "cdi", file: "nice-of-the-princess.mp3" },
  { id: "no", label: "NO.", cat: "cdi", file: "no.mp3" },
  { id: "gay-luigi", label: "Gay Luigi?", cat: "cdi", file: "gay-luigi.mp3" },
  { id: "hotel-mario-door", label: "Door Close (Hotel Mario)", cat: "cdi", file: "hotel-mario-door.mp3" },

  // CD-i Zelda
  { id: "mah-boi", label: "Mah Boi", cat: "zelda", file: "mah-boi.mp3" },
  { id: "lamp-oil", label: "Lamp Oil, Rope, Bombs?", cat: "zelda", file: "lamp-oil.mp3" },
  { id: "squadala", label: "Squadala! We're Off!", cat: "zelda", file: "squadala.mp3" },
  { id: "die", label: "YOU MUST DIE!", cat: "zelda", file: "you-must-die.mp3" },
  { id: "or-else-die", label: "Or Else You Will DIE!", cat: "zelda", file: "or-else-you-will-die.mp3" },
  { id: "enough", label: "ENOUGH!", cat: "zelda", file: "enough.mp3" },
  { id: "scrub", label: "Scrub (Zelda CDi)", cat: "zelda", file: "scrub.mp3" },

  // Sonic / Robotnik
  { id: "pingas-short", label: "PINGAS!", cat: "robotnik", file: "pingas.mp3" },
  { id: "pingas", label: "SnooPINGAS Usual I See", cat: "robotnik", file: "snoopingas.mp3" },
  { id: "promotion", label: "PROMOTION!", cat: "robotnik", file: "promotion.mp3" },

  // Classic Memes
  { id: "imma-firin", label: "I'M A' FIRIN' MAH LAZER", cat: "meme", file: "firin-mah-lazer.mp3" },
  { id: "over-9000", label: "IT'S OVER 9000!", cat: "meme", file: "over-9000.mp3" },
  { id: "weegee", label: "WEEGEE", cat: "meme", file: "weegee.mp3" },
  { id: "oh-my-god", label: "OH MY GOD (JoJo)", cat: "meme", file: "oh-my-god.mp3" },
  { id: "dramatic-chipmunk", label: "Dramatic Chipmunk", cat: "meme", file: "dramatic-chipmunk.mp3" },
  { id: "nope-avi", label: "NOPE (TF2)", cat: "meme", file: "nope.mp3" },
  { id: "get-out", label: "GET OUT OF HERE!", cat: "meme", file: "get-out.mp3" },
  { id: "wow", label: "WOW (Eddy Wally)", cat: "meme", file: "wow.mp3" },

  // Misc / Sound Effects
  { id: "ear-rape", label: "Ear Rape Bass Boost", cat: "misc", file: "ear-rape.mp3" },
  { id: "windows-xp", label: "Windows XP Error", cat: "misc", file: "windows-xp-error.mp3" },
  { id: "mlg-horn", label: "MLG Airhorn", cat: "misc", file: "mlg-airhorn.mp3" },
  { id: "sad-violin", label: "Sad Violin", cat: "misc", file: "sad-violin.mp3" },
  { id: "bruh", label: "Bruh Sound Effect", cat: "misc", file: "bruh.mp3" },
  { id: "oof", label: "Roblox OOF", cat: "misc", file: "oof.mp3" },
  { id: "taco-bell", label: "Taco Bell Bong", cat: "misc", file: "taco-bell.mp3" },
];

const board = document.getElementById("board");
const volumeSlider = document.getElementById("volume");
const stopAllBtn = document.getElementById("stop-all");

const activeAudios = new Set();

function getVolume() {
  return parseFloat(volumeSlider.value);
}

function playSound(file, btn) {
  const audio = new Audio(`sounds/${file}`);
  audio.volume = getVolume();
  activeAudios.add(audio);

  btn.classList.add("playing");
  audio.addEventListener("ended", () => {
    activeAudios.delete(audio);
    btn.classList.remove("playing");
  });
  audio.addEventListener("error", () => {
    activeAudios.delete(audio);
    btn.classList.remove("playing");
  });

  audio.play().catch(() => {
    btn.classList.remove("playing");
    activeAudios.delete(audio);
  });
}

function stopAll() {
  activeAudios.forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  });
  activeAudios.clear();
  document.querySelectorAll(".sound-btn.playing").forEach((btn) => {
    btn.classList.remove("playing");
  });
}

stopAllBtn.addEventListener("click", stopAll);

// Check which sound files exist so we can mark missing ones
async function checkFileExists(url) {
  try {
    const resp = await fetch(url, { method: "HEAD" });
    return resp.ok;
  } catch {
    return false;
  }
}

async function buildBoard() {
  for (const sound of SOUNDS) {
    const btn = document.createElement("button");
    btn.className = "sound-btn";
    btn.setAttribute("data-cat", sound.cat);
    btn.innerHTML = `${sound.label}<span class="category">${sound.cat}</span>`;

    const exists = await checkFileExists(`sounds/${sound.file}`);
    if (!exists) {
      btn.classList.add("missing");
    }

    btn.addEventListener("click", () => {
      if (btn.classList.contains("missing")) return;
      playSound(sound.file, btn);
    });

    board.appendChild(btn);
  }
}

buildBoard();
