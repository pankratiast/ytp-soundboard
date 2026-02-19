const SOUNDS = [
  // Hotel Mario / CD-i Mario
  { id: "lotsa-spaghetti", label: "I Hope She Made Lotsa Spaghetti!", cat: "cdi", file: "lotsa-spaghetti.mp3" },
  { id: "mama-luigi", label: "Mama Luigi!", cat: "mario", file: "mama-luigi.mp3" },
  { id: "luigi-help", label: "Luigi Screams HELP!", cat: "mario", file: "luigi-help.mp3" },
  { id: "toast", label: "I Wonder What's for Dinner", cat: "cdi", file: "wonder-whats-for-dinner.mp3" },
  { id: "nice-of-the-princess", label: "Nice of the Princess to Invite Us", cat: "cdi", file: "nice-of-the-princess.mp3" },
  { id: "no", label: "NO.", cat: "cdi", file: "no.mp3" },
  { id: "gay-luigi", label: "Gay Luigi?", cat: "cdi", file: "gay-luigi.mp3" },
  { id: "hotel-mario-door", label: "Door Close (Hotel Mario)", cat: "cdi", file: "hotel-mario-door.mp3" },
  { id: "bowser-laugh", label: "Bowser Laugh", cat: "mario", file: "bowser-laugh.mp3" },
  { id: "its-a-football", label: "It's a Football!", cat: "mario", file: "its-a-football.mp3" },
  { id: "all-toasters", label: "All Toasters Toast Toast", cat: "mario", file: "all-toasters-toast-toast.mp3" },
  { id: "too-many-toasters", label: "Too Many Toasters", cat: "mario", file: "too-many-toasters.mp3" },

  // CD-i Zelda
  { id: "mah-boi", label: "Mah Boi", cat: "zelda", file: "mah-boi.mp3" },
  { id: "lamp-oil", label: "Lamp Oil, Rope, Bombs?", cat: "zelda", file: "lamp-oil.mp3" },
  { id: "squadala", label: "Squadala! We're Off!", cat: "zelda", file: "squadala.mp3" },
  { id: "die", label: "YOU MUST DIE!", cat: "zelda", file: "you-must-die.mp3" },
  { id: "or-else-die", label: "Or Else You Will DIE!", cat: "zelda", file: "or-else-you-will-die.mp3" },
  { id: "enough", label: "ENOUGH!", cat: "zelda", file: "enough.mp3" },
  { id: "scrub", label: "Scrub (Zelda CDi)", cat: "zelda", file: "scrub.mp3" },
  { id: "dare-bring-light", label: "You Dare Bring Light to My Lair?!", cat: "zelda", file: "dare-bring-light.mp3" },
  { id: "it-burns", label: "IT BURNS!", cat: "zelda", file: "it-burns.mp3" },
  { id: "cant-give-credit", label: "Sorry Link, I Can't Give Credit", cat: "zelda", file: "cant-give-credit.mp3" },
  { id: "sure-is-boring", label: "Gee, It Sure Is Boring Around Here", cat: "zelda", file: "sure-is-boring.mp3" },
  { id: "only-link", label: "Only Link Can Defeat Ganon", cat: "zelda", file: "only-link.mp3" },
  { id: "king-laugh", label: "King Harkinian Laugh", cat: "zelda", file: "king-laugh.mp3" },
  { id: "balls-inert", label: "The Balls Are Inert (DBZ)", cat: "meme", file: "balls-are-inert.mp3" },
  { id: "wtf-boom", label: "WTF BOOM", cat: "meme", file: "wtf-boom.mp3" },

  // Sonic / Robotnik
  { id: "pingas-short", label: "PINGAS!", cat: "robotnik", file: "pingas.mp3" },
  { id: "pingas", label: "SnooPINGAS Usual I See", cat: "robotnik", file: "snoopingas.mp3" },
  { id: "promotion", label: "PROMOTION!", cat: "robotnik", file: "promotion.mp3" },

  // Classic Memes
  { id: "imma-firin", label: "I'M A' FIRIN' MAH LAZER", cat: "meme", file: "firin-mah-lazer.mp3" },
  { id: "over-9000", label: "IT'S OVER 9000! (DBZ)", cat: "meme", file: "over-9000.mp3" },
  { id: "oh-my-god", label: "OH MY GOD (JoJo)", cat: "meme", file: "oh-my-god.mp3" },
  { id: "za-warudo", label: "ZA WARUDO! (JoJo)", cat: "meme", file: "za-warudo.mp3" },
  { id: "shiza", label: "SHIZAAA! (JoJo)", cat: "meme", file: "shiza.mp3" },
  { id: "lololol", label: "LOLOLOLOLOL (Arby n Chief)", cat: "meme", file: "lololol.mp3" },
  { id: "wipe-my-ass", label: "I Wipe My Ass With $10 (Arby n Chief)", cat: "meme", file: "wipe-my-ass.mp3" },
  { id: "arby-laugh", label: "Arby Laugh (Arby n Chief)", cat: "meme", file: "arby-laugh.mp3" },
  { id: "ur-poor", label: "U Can't Afford Stuff, Ur Poor (Arby n Chief)", cat: "meme", file: "ur-poor.mp3" },
  { id: "fuck-penus-pussy", label: "F**k F**k Penus Penus Pussy Pussy", cat: "meme", file: "fuck-penus-pussy.mp3" },
  { id: "pussy-lonely-island", label: "Pussy (Lonely Island)", cat: "meme", file: "pussy-lonely-island.mp3" },
  { id: "where-the-poop-is", label: "YouTube Is Where the Poop Is", cat: "meme", file: "where-the-poop-is.mp3" },
  { id: "numa-numa", label: "Numa Numa Yay", cat: "meme", file: "numa-numa.mp3" },
  { id: "talking-about-the-penis", label: "We're Gonna Be Talking About the Penis", cat: "meme", file: "talking-about-the-penis.mp3" },
  { id: "dramatic-chipmunk", label: "Dramatic Chipmunk", cat: "meme", file: "dramatic-chipmunk.mp3" },

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

function buildBoard() {
  for (const sound of SOUNDS) {
    const btn = document.createElement("button");
    btn.className = "sound-btn";
    btn.setAttribute("data-cat", sound.cat);
    btn.innerHTML = `${sound.label}<span class="category">${sound.cat}</span>`;

    btn.addEventListener("click", () => {
      playSound(sound.file, btn);
    });

    board.appendChild(btn);
  }
}

buildBoard();
