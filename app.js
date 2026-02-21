const SOUNDS = [
  // Hotel Mario / CD-i Mario
  { id: "lotsa-spaghetti", label: "I Hope She Made Lotsa Spaghetti!", cat: "cdi", file: "lotsa-spaghetti.mp3" },
  { id: "mama-luigi", label: "Mama Luigi!", cat: "mario", file: "mama-luigi.mp3" },
  { id: "luigi-help", label: "Luigi Screams HELP!", cat: "mario", file: "luigi-help.mp3" },
  { id: "toast", label: "I Wonder What's for Dinner", cat: "cdi", file: "wonder-whats-for-dinner.mp3" },
  { id: "nice-of-the-princess", label: "Nice of the Princess to Invite Us", cat: "cdi", file: "nice-of-the-princess.mp3" },
  { id: "no", label: "NO.", cat: "cdi", file: "no.mp3" },
  { id: "gay-luigi", label: "Gay Luigi?", cat: "cdi", file: "gay-luigi.mp3" },
  { id: "bowser-laugh", label: "Bowser Laugh", cat: "mario", file: "bowser-laugh.mp3" },
  { id: "dear-pesky-plumbers", label: "Dear Pesky Plumbers", cat: "cdi", file: "bowser-clip.mp3" },
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
  { id: "only-link", label: "It Is Written", cat: "zelda", file: "only-link.mp3" },
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
  { id: "yare-yare-daze", label: "Yare Yare Daze (JoJo)", cat: "meme", file: "yare-yare-daze.mp3" },
  { id: "lololol", label: "LOLOLOLOLOL (Arby n Chief)", cat: "meme", file: "lololol.mp3" },
  { id: "wipe-my-ass", label: "I Wipe My Ass With $10 (Arby n Chief)", cat: "meme", file: "wipe-my-ass.mp3" },
  { id: "arby-laugh", label: "Master Chief Laugh (Arby n Chief)", cat: "meme", file: "arby-laugh.mp3" },
  { id: "ur-poor", label: "U Can't Afford Stuff, Ur Poor (Arby n Chief)", cat: "meme", file: "ur-poor.mp3" },
  { id: "fuck-penus-pussy", label: "F**k F**k Penus Penus Pussy Pussy", cat: "meme", file: "fuck-penus-pussy.mp3" },
  { id: "pussy-lonely-island", label: "Pussy (Lonely Island)", cat: "meme", file: "pussy-lonely-island.mp3" },
  { id: "where-the-poop-is", label: "YouTube Is Where the Poop Is", cat: "meme", file: "where-the-poop-is.mp3" },
  { id: "numa-numa", label: "Numa Numa Yay", cat: "meme", file: "numa-numa.mp3" },
  { id: "talking-about-the-penis", label: "We're Gonna Be Talking About the Penis", cat: "meme", file: "talking-about-the-penis.mp3" },
  { id: "philips-cd-earrape", label: "Philips CD Intro Earrape", cat: "meme", file: "philips-cd-earrape.mp3" },
  { id: "dramatic-chipmunk", label: "Dramatic Chipmunk", cat: "meme", file: "dramatic-chipmunk.mp3" },

  // Halo 1
  { id: "mc-death-1", label: "Master Chief Death Noise 1", cat: "halo", file: "mc-death-1.mp3" },
  { id: "mc-death-2", label: "Master Chief Death Noise 2", cat: "halo", file: "mc-death-2.mp3" },
  { id: "mc-death-3", label: "Master Chief Death Noise 3", cat: "halo", file: "mc-death-3.mp3" },
  { id: "mc-death-4", label: "Master Chief Death Noise 4", cat: "halo", file: "mc-death-4.mp3" },
  { id: "mc-death-5", label: "Master Chief Death Noise 5", cat: "halo", file: "mc-death-5.mp3" },
  { id: "mc-death-6", label: "Master Chief Death Noise 6", cat: "halo", file: "mc-death-6.mp3" },
  { id: "mc-death-7", label: "Master Chief Death Noise 7", cat: "halo", file: "mc-death-7.mp3" },
  { id: "mc-death-8", label: "Master Chief Death Noise 8", cat: "halo", file: "mc-death-8.mp3" },
  { id: "mc-death-9", label: "Master Chief Death Noise 9", cat: "halo", file: "mc-death-9.mp3" },
  { id: "mc-death-10", label: "Master Chief Death Noise 10", cat: "halo", file: "mc-death-10.mp3" },

  { id: "elite-wort", label: "Wort Wort Wort!", cat: "halo", file: "elite-wort.mp3" },

  // Halo 2
  { id: "mc2-death-1", label: "Master Chief Death Noise 1", cat: "halo2", file: "mc2-death-1.mp3" },
  { id: "mc2-death-2", label: "Master Chief Death Noise 2", cat: "halo2", file: "mc2-death-2.mp3" },
  { id: "mc2-death-3", label: "Master Chief Death Noise 3", cat: "halo2", file: "mc2-death-3.mp3" },
  { id: "mc2-death-4", label: "Master Chief Death Noise 4", cat: "halo2", file: "mc2-death-4.mp3" },
  { id: "mc2-death-5", label: "Master Chief Death Noise 5", cat: "halo2", file: "mc2-death-5.mp3" },
  { id: "mc2-death-6", label: "Master Chief Death Noise 6", cat: "halo2", file: "mc2-death-6.mp3" },
  { id: "mc2-death-7", label: "Master Chief Death Noise 7", cat: "halo2", file: "mc2-death-7.mp3" },
  { id: "mc2-death-8", label: "Master Chief Death Noise 8", cat: "halo2", file: "mc2-death-8.mp3" },
  { id: "mc2-death-9", label: "Master Chief Death Noise 9", cat: "halo2", file: "mc2-death-9.mp3" },
  { id: "mc2-death-10", label: "Master Chief Death Noise 10", cat: "halo2", file: "mc2-death-10.mp3" },
  { id: "mc2-death-11", label: "Master Chief Death Noise 11", cat: "halo2", file: "mc2-death-11.mp3" },
  { id: "mc2-death-12", label: "Master Chief Death Noise 12", cat: "halo2", file: "mc2-death-12.mp3" },
  { id: "mc2-death-13", label: "Master Chief Death Noise 13", cat: "halo2", file: "mc2-death-13.mp3" },
  { id: "mc2-death-14", label: "Master Chief Death Noise 14", cat: "halo2", file: "mc2-death-14.mp3" },
  { id: "mc2-death-15", label: "Master Chief Death Noise 15", cat: "halo2", file: "mc2-death-15.mp3" },
  { id: "mc2-death-16", label: "Master Chief Death Noise 16", cat: "halo2", file: "mc2-death-16.mp3" },
  { id: "mc2-death-17", label: "Master Chief Death Noise 17", cat: "halo2", file: "mc2-death-17.mp3" },
  { id: "mc2-death-18", label: "Master Chief Death Noise 18", cat: "halo2", file: "mc2-death-18.mp3" },
  { id: "mc2-death-19", label: "Master Chief Death Noise 19", cat: "halo2", file: "mc2-death-19.mp3" },
  { id: "mc2-death-20", label: "Master Chief Death Noise 20", cat: "halo2", file: "mc2-death-20.mp3" },
  { id: "mc2-death-21", label: "Master Chief Death Noise 21", cat: "halo2", file: "mc2-death-21.mp3" },
  { id: "mc2-death-22", label: "Master Chief Death Noise 22", cat: "halo2", file: "mc2-death-22.mp3" },
  { id: "mc2-death-23", label: "Master Chief Death Noise 23", cat: "halo2", file: "mc2-death-23.mp3" },
  { id: "mc2-death-24", label: "Master Chief Death Noise 24", cat: "halo2", file: "mc2-death-24.mp3" },
  { id: "mc2-death-25", label: "Master Chief Death Noise 25", cat: "halo2", file: "mc2-death-25.mp3" },
  { id: "mc2-death-26", label: "Master Chief Death Noise 26", cat: "halo2", file: "mc2-death-26.mp3" },
  { id: "mc2-death-27", label: "Master Chief Death Noise 27", cat: "halo2", file: "mc2-death-27.mp3" },
  { id: "mc2-death-28", label: "Master Chief Death Noise 28", cat: "halo2", file: "mc2-death-28.mp3" },
  { id: "mc2-death-29", label: "Master Chief Death Noise 29", cat: "halo2", file: "mc2-death-29.mp3" },
  { id: "mc2-death-30", label: "Master Chief Death Noise 30", cat: "halo2", file: "mc2-death-30.mp3" },
  { id: "mc2-death-31", label: "Master Chief Death Noise 31", cat: "halo2", file: "mc2-death-31.mp3" },
  { id: "mc2-death-32", label: "Master Chief Death Noise 32", cat: "halo2", file: "mc2-death-32.mp3" },
  { id: "mc2-death-33", label: "Master Chief Death Noise 33", cat: "halo2", file: "mc2-death-33.mp3" },
  { id: "mc2-death-34", label: "Master Chief Death Noise 34", cat: "halo2", file: "mc2-death-34.mp3" },
  { id: "mc2-death-35", label: "Master Chief Death Noise 35", cat: "halo2", file: "mc2-death-35.mp3" },
  { id: "mc2-death-36", label: "Master Chief Death Noise 36", cat: "halo2", file: "mc2-death-36.mp3" },
  { id: "mc2-death-37", label: "Master Chief Death Noise 37", cat: "halo2", file: "mc2-death-37.mp3" },
  { id: "mc2-death-38", label: "Master Chief Death Noise 38", cat: "halo2", file: "mc2-death-38.mp3" },
  { id: "mc2-death-39", label: "Master Chief Death Noise 39", cat: "halo2", file: "mc2-death-39.mp3" },

  // Halo 3
  { id: "arby3-death-1", label: "Arbiter Death Noise 1", cat: "halo3", file: "arby-death-1.mp3" },
  { id: "arby3-death-2", label: "Arbiter Death Noise 2", cat: "halo3", file: "arby-death-2.mp3" },
  { id: "arby3-death-3", label: "Arbiter Death Noise 3", cat: "halo3", file: "arby-death-3.mp3" },
  { id: "arby3-death-4", label: "Arbiter Death Noise 4", cat: "halo3", file: "arby-death-4.mp3" },
  { id: "arby3-death-5", label: "Arbiter Death Noise 5", cat: "halo3", file: "arby-death-5.mp3" },
  { id: "elite3-death-1", label: "Elite Death Noise 1", cat: "halo3", file: "elite-death-1.mp3" },
  { id: "elite3-death-2", label: "Elite Death Noise 2", cat: "halo3", file: "elite-death-2.mp3" },
  { id: "elite3-death-3", label: "Elite Death Noise 3", cat: "halo3", file: "elite-death-3.mp3" },
  { id: "elite3-death-4", label: "Elite Death Noise 4", cat: "halo3", file: "elite-death-4.mp3" },
  { id: "elite3-death-5", label: "Elite Death Noise 5", cat: "halo3", file: "elite-death-5.mp3" },
  { id: "elite3-death-6", label: "Elite Death Noise 6", cat: "halo3", file: "elite-death-6.mp3" },
  { id: "elite3-death-7", label: "Elite Death Noise 7", cat: "halo3", file: "elite-death-7.mp3" },
  { id: "elite3-death-8", label: "Elite Death Noise 8", cat: "halo3", file: "elite-death-8.mp3" },
  { id: "elite3-death-9", label: "Elite Death Noise 9", cat: "halo3", file: "elite-death-9.mp3" },
  { id: "elite3-death-10", label: "Elite Death Noise 10", cat: "halo3", file: "elite-death-10.mp3" },
  { id: "elite3-death-11", label: "Elite Death Noise 11", cat: "halo3", file: "elite-death-11.mp3" },
  { id: "johnson3-death-1", label: "Sgt. Johnson Death Noise 1", cat: "halo3", file: "johnson-death-1.mp3" },
  { id: "johnson3-death-2", label: "Sgt. Johnson Death Noise 2", cat: "halo3", file: "johnson-death-2.mp3" },
  { id: "johnson3-death-3", label: "Sgt. Johnson Death Noise 3", cat: "halo3", file: "johnson-death-3.mp3" },
  { id: "johnson3-death-4", label: "Sgt. Johnson Death Noise 4", cat: "halo3", file: "johnson-death-4.mp3" },
  { id: "johnson3-death-5", label: "Sgt. Johnson Death Noise 5", cat: "halo3", file: "johnson-death-5.mp3" },
  { id: "johnson3-death-6", label: "Sgt. Johnson Death Noise 6", cat: "halo3", file: "johnson-death-6.mp3" },
  { id: "johnson3-death-7", label: "Sgt. Johnson Death Noise 7", cat: "halo3", file: "johnson-death-7.mp3" },

  // Misc / Sound Effects
  { id: "ear-rape", label: "Rick Roll", cat: "misc", file: "ear-rape.mp3" },
  { id: "windows-xp", label: "Windows XP Error", cat: "misc", file: "windows-xp-error.mp3" },
  { id: "mlg-horn", label: "MLG Airhorn", cat: "misc", file: "mlg-airhorn.mp3" },
  { id: "sad-violin", label: "Sad Violin", cat: "misc", file: "sad-violin.mp3" },
  { id: "bruh", label: "Bruh Sound Effect", cat: "misc", file: "bruh.mp3" },
  { id: "oof", label: "Roblox OOF", cat: "misc", file: "oof.mp3" },
];

const board = document.getElementById("board");
const volumeSlider = document.getElementById("volume");
const earrapeSlider = document.getElementById("earrape");
const stopAllBtn = document.getElementById("stop-all");

const activeSources = new Set();

// Web Audio API for real clipping distortion
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const waveshaper = audioCtx.createWaveShaper();
const masterGain = audioCtx.createGain();
const preGain = audioCtx.createGain();
preGain.connect(waveshaper);
waveshaper.connect(masterGain);
masterGain.connect(audioCtx.destination);

// Unlock audio on mobile - must happen on first user touch/click
let audioUnlocked = false;
function unlockAudio() {
  if (audioUnlocked) return;
  audioCtx.resume().then(() => {
    // Play a silent buffer to fully unlock on iOS
    const silentBuf = audioCtx.createBuffer(1, 1, 22050);
    const src = audioCtx.createBufferSource();
    src.buffer = silentBuf;
    src.connect(audioCtx.destination);
    src.start(0);
    audioUnlocked = true;
  });
}
document.addEventListener("touchstart", unlockAudio, { once: true });
document.addEventListener("click", unlockAudio, { once: true });

function makeDistortionCurve(amount) {
  const samples = 44100;
  const curve = new Float32Array(samples);
  for (let i = 0; i < samples; i++) {
    const x = (i * 2) / samples - 1;
    // Hard clipping curve
    curve[i] = Math.max(-1, Math.min(1, x * amount));
  }
  return curve;
}

function updateEarrape() {
  const val = parseFloat(earrapeSlider.value);
  if (val === 0) {
    waveshaper.curve = null;
    preGain.gain.value = 1;
    masterGain.gain.value = 1;
  } else {
    // Drive the signal way too hot into a hard clipper
    preGain.gain.value = 1 + val * 50;
    waveshaper.curve = makeDistortionCurve(1 + val * 20);
    masterGain.gain.value = 1 + val * 3;
  }
}

earrapeSlider.addEventListener("input", updateEarrape);
updateEarrape();

function getVolume() {
  return parseFloat(volumeSlider.value);
}

const activeAudios = new Set();

function playSound(file, btn) {
  const earrapeVal = parseFloat(earrapeSlider.value);
  const audio = new Audio(`sounds/${file}`);
  audio.volume = getVolume();
  activeAudios.add(audio);
  btn.classList.add("playing");

  // Only route through Web Audio when earrape is on
  if (earrapeVal > 0) {
    if (audioCtx.state === "suspended") audioCtx.resume();
    try {
      const source = audioCtx.createMediaElementSource(audio);
      source.connect(preGain);
    } catch (e) {}
  }

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
