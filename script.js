const API = "https://pokeapi.co/api/v2";

/* Listas de exclusivos */
const SHIELD_EXCLUSIVE = [
  "ponyta","rapidash","corsola","appletun","cursola","eiscue",
  "larvitar","pupitar","tyranitar","lotad","lombre","ludicolo",
  "sableye","lunatone","croagunk","toxicroak","solosis","duosion",
  "reuniclus","vullaby","mandibuzz","spritzee","aromatisse",
  "goomy","sliggoo","goodra","oranguru","drampa","heracross",
  "throh","skrelp","dragalge","kabuto","kabutops","lugia",
  "latias","kyogre","gible","gabite","garchomp","palkia",
  "thundurus","zekrom","yveltal","lunala","zamazenta"
];

const SWORD_EXCLUSIVE = [
  "farfetchd","darumaka","darmanitan","flapple","sirfetchd",
  "stonjourner","seedot","nuzleaf","shiftry","mawile","solrock",
  "scraggy","scrafty","gothita","gothorita","gothitelle",
  "rufflet","braviary","deino","zweilous","hydreigon","swirlix",
  "slurpuff","passimian","turtonator","jangmo-o","hakamo-o",
  "kommo-o","pinsir","sawk","clauncher","clawitzer","omanyte",
  "omastar","ho-oh","bagon","shelgon","salamence","latios",
  "groudon","dialga","tornadus","reshiram","xerneas",
  "solgaleo","zacian"
];

const VIOLET_EXCLUSIVE = [
  "misdreavus","mismagius","gulpin","swalot","bagon","shelgon",
  "salamence","clauncher","clawitzer","passimian","dreepy",
  "drakloak","dragapult","eiscue","iron-treads","iron-moth",
  "iron-hands","iron-jugulis","iron-thorns","iron-bundle",
  "iron-valiant","ceruledge","miraidon"
];

const SCARLET_EXCLUSIVE = [
  "larvitar","pupitar","tyranitar","drifloon","drifblim",
  "stunky","skuntank","deino","zweilous","hydreigon",
  "skrelp","dragalge","oranguru","stonjourner","great-tusk",
  "brute-bonnet","sandy-shocks","scream-tail","flutter-mane",
  "slither-wing","roaring-moon","armarouge","koraidon"
];

const EEVEE_EXCLUSIVE = [
  "bellsprout","weepinbell","victreebel","ekans","arbok",
  "koffing","weezing","vulpix","ninetales","meowth","persian",
  "pinsir"
];

const PIKACHU_EXCLUSIVE = [
  "oddish","gloom","vileplume","sandshrew","sandslash",
  "growlithe","arcanine","grimer","muk","scyther",
  "mankey","primeape"
];

const SP_EXCLUSIVE = [
  "caterpie","metapod","butterfree","ekans","arbok",
  "growlithe","arcanine","seel","dewgong","scyther",
  "electabuzz","murkrow","gligar","scizor","elekid",
  "raikou","entei","suicune","ho-oh","seedot","nuzleaf",
  "shiftry","mawile","zangoose","solrock","kecleon",
  "cranidos","rampardos","honchkrow","stunky","skuntank",
  "electivire","gliscor","dialga"
];

const BD_EXCLUSIVE = [
  "weedle","kakuna","beedrill","sandshrew","sandslash",
  "vulpix","ninetales","slowpoke","slowbro","magmar",
  "pinsir","articuno","zapdos","moltres","slowking",
  "misdreavus","teddiursa","ursaring","stantler","magby",
  "lugia","lotad","lombre","ludicolo","sableye","seviper",
  "lunatone","bagon","shelgon","salamence","shieldon",
  "bastiodon","mismagius","glameow","purugly","magmortar",
  "palkia","larvitar","pupitar","tyranitar"
];

const GAMES = {
  scarlet: {
    name: "Pokémon Scarlet",
    info: "Paldea + Kitakami + Blueberry/Indigo Disk (DLC). Sem os exclusivos de Violet.",
    dex: ["paldea", "kitakami", "blueberry"],
    exclude: VIOLET_EXCLUSIVE
  },

  violet: {
    name: "Pokémon Violet",
    info: "Paldea + Kitakami + Blueberry/Indigo Disk (DLC). Sem os exclusivos de Scarlet.",
    dex: ["paldea", "kitakami", "blueberry"],
    exclude: SCARLET_EXCLUSIVE
  },

  sword: {
    name: "Pokémon Sword",
    info: "Galar + Isle of Armor + Crown Tundra (DLC). Sem os exclusivos de Shield.",
    dex: ["galar", "isle-of-armor", "crown-tundra"],
    exclude: SHIELD_EXCLUSIVE
  },

  shield: {
    name: "Pokémon Shield",
    info: "Galar + Isle of Armor + Crown Tundra (DLC). Sem os exclusivos de Sword.",
    dex: ["galar", "isle-of-armor", "crown-tundra"],
    exclude: SWORD_EXCLUSIVE
  },

  la: {
    name: "Pokémon Legends: Arceus",
    info: "Hisui Pokédex.",
    dex: ["hisui"]
  },

  bd: {
    name: "Pokémon Brilliant Diamond",
    info: "Pokédex regional de Sinnoh. Sem os exclusivos de Shining Pearl.",
    dex: ["original-sinnoh"],
    exclude: SP_EXCLUSIVE
  },

  sp: {
    name: "Pokémon Shining Pearl",
    info: "Pokédex regional de Sinnoh. Sem os exclusivos de Brilliant Diamond.",
    dex: ["original-sinnoh"],
    exclude: BD_EXCLUSIVE
  },

  "letsgo-pikachu": {
    name: "Pokémon Let's Go, Pikachu!",
    info: "Kanto + Meltan/Melmetal. Sem os exclusivos de Let's Go Eevee.",
    dex: ["kanto"],
    exclude: EEVEE_EXCLUSIVE,
    extraIds: [808, 809]
  },

  "letsgo-eevee": {
    name: "Pokémon Let's Go, Eevee!",
    info: "Kanto + Meltan/Melmetal. Sem os exclusivos de Let's Go Pikachu.",
    dex: ["kanto"],
    exclude: PIKACHU_EXCLUSIVE,
    extraIds: [808, 809]
  },

  za: {
    name: "Pokémon Legends: Z-A",
    info: "Lumiose + Hyperspace (Mega Dimension). O jogo possui listas próprias.",
    dex: ["lumiose-city", "hyperspace"]
  }
};

const TYPES = [
  "Normal","Fire","Water","Electric","Grass","Ice",
  "Fighting","Poison","Ground","Flying","Psychic","Bug",
  "Rock","Ghost","Dragon","Dark","Steel","Fairy"
];

const TYPE_COLORS = {
  normal: "#A8A878",
  fire: "#F08030",
  water: "#6890F0",
  electric: "#F8D030",
  grass: "#78C850",
  ice: "#98D8D8",
  fighting: "#C03028",
  poison: "#A040A0",
  ground: "#E0C068",
  flying: "#A890F0",
  psychic: "#F85888",
  bug: "#A8B820",
  rock: "#B8A038",
  ghost: "#705898",
  dragon: "#7038F8",
  dark: "#705848",
  steel: "#B8B8D0",
  fairy: "#EE99AC"
};

const LIGHT_TYPES = new Set([
  "electric",
  "ice",
  "fairy",
  "ground",
  "normal",
  "steel"
]);

function typeColor(t) {
  return TYPE_COLORS[t.toLowerCase()] || "#6b6b8a";
}

function typeTextColor(t) {
  return LIGHT_TYPES.has(t.toLowerCase())
    ? "#1a1a1a"
    : "#ffffff";
}

/* ---------- efeitos sonoros ---------- */

let audioCtx = null;
let soundEnabled = true;

function ctx() {
  if (!audioCtx) {
    audioCtx = new (
      window.AudioContext || window.webkitAudioContext
    )();
  }

  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }

  return audioCtx;
}

function tone(
  freq,
  start,
  dur,
  type = "sine",
  gain = 0.05
) {
  if (!soundEnabled) return;

  const c = ctx();
  const osc = c.createOscillator();
  const g = c.createGain();

  osc.type = type;
  osc.frequency.setValueAtTime(
    freq,
    c.currentTime + start
  );

  g.gain.setValueAtTime(
    gain,
    c.currentTime + start
  );

  g.gain.exponentialRampToValueAtTime(
    0.0001,
    c.currentTime + start + dur
  );

  osc.connect(g).connect(c.destination);

  osc.start(c.currentTime + start);
  osc.stop(c.currentTime + start + dur);
}

function playClick() {
  tone(520, 0, 0.05, "square", 0.03);
}

function playRoll() {
  [0, 0.07, 0.14, 0.21].forEach((t, i) => {
    tone(300 + i * 90, t, 0.08, "square", 0.04);
  });
}

function playReveal() {
  [523, 659, 784, 1047].forEach((f, i) => {
    tone(f, i * 0.09, 0.18, "triangle", 0.05);
  });
}

function playError() {
  tone(220, 0, 0.12, "sawtooth", 0.04);
  tone(160, 0.1, 0.18, "sawtooth", 0.04);
}

function playShiny() {
  [784, 988, 1175, 1568, 1976, 1568, 1976, 2349]
    .forEach((f, i) => {
      tone(f, i * 0.09, 0.22, "sine", 0.05);
    });
}

/* ---------- música ---------- */

const MELODY = [
  523.25, 659.25, 783.99, 659.25,
  587.33, 698.46, 880.00, 698.46,
  523.25, 659.25, 783.99, 1046.5,
  783.99, 659.25, 587.33, 523.25
];

const BASS = [
  130.81,
  146.83,
  130.81,
  196.00
];

const STEP_MS = 210;

let musicEnabled = false;
let musicTimer = null;
let musicStep = 0;

function startMusic() {
  if (musicTimer) return;

  musicStep = 0;

  musicTimer = setInterval(() => {
    if (!musicEnabled) return;

    tone(
      MELODY[musicStep % MELODY.length],
      0,
      STEP_MS / 1000 * 0.85,
      "square",
      0.022
    );

    if (musicStep % 4 === 0) {
      tone(
        BASS[(musicStep / 4) % BASS.length],
        0,
        STEP_MS / 1000 * 3.2,
        "triangle",
        0.016
      );
    }

    musicStep++;
  }, STEP_MS);
}

function stopMusic() {
  clearInterval(musicTimer);
  musicTimer = null;
}

/* ---------- shiny ---------- */

const SHINY_CHANCE = 0.05;

function applyShinyChance(list) {
  if (
    Math.random() < SHINY_CHANCE &&
    list.length
  ) {
    const idx = Math.floor(
      Math.random() * list.length
    );

    list[idx] = {
      ...list[idx],
      shiny: true
    };

    return list[idx];
  }

  return null;
}

let shinyToastTimer = null;

function showShinyToast(name) {
  const el = $("shinyToast");

  el.textContent =
    `✨ Um shiny apareceu: ${name.replaceAll("-", " ")}! ✨`;

  el.classList.add("show");

  clearTimeout(shinyToastTimer);

  shinyToastTimer = setTimeout(
    () => el.classList.remove("show"),
    4000
  );
}

/* ---------- elementos ---------- */

const $ = id => document.getElementById(id);

const gameEl = $("game");
const typesEl = $("types");

let mode = "random";
let cache = {};
let lastResult = null;

function slug(s) {
  return s.toLowerCase().replaceAll(" ", "-");
}

function shuffle(a) {
  return [...a].sort(() => Math.random() - 0.5);
}

function uniqueById(a) {
  return [
    ...new Map(
      a.map(x => [x.id, x])
    ).values()
  ];
}

function setStatus(t) {
  $("status").textContent = t;
  $("status").classList.remove("hidden");
  $("status").classList.remove("error");
}

function clearStatus() {
  $("status").classList.add("hidden");
}

/* ---------- jogos ---------- */

for (const [id, g] of Object.entries(GAMES)) {
  const o = document.createElement("option");

  o.value = id;
  o.textContent = g.name;

  gameEl.appendChild(o);
}

/* ---------- tipos ---------- */

for (const t of TYPES) {
  const wrap = document.createElement("div");

  wrap.className = "type-check";

  wrap.style.setProperty(
    "--type-color",
    typeColor(t)
  );

  wrap.style.setProperty(
    "--type-text",
    typeTextColor(t)
  );

  wrap.innerHTML = `
    <input
      id="t-${slug(t)}"
      type="checkbox"
      value="${t}"
    >
    <label for="t-${slug(t)}">${t}</label>
  `;

  wrap
    .querySelector("input")
    .addEventListener("change", playClick);

  typesEl.appendChild(wrap);
}

/* ---------- modos ---------- */

document
  .querySelectorAll(".challenge")
  .forEach(b => {
    b.onclick = () => {
      document
        .querySelectorAll(".challenge")
        .forEach(x =>
          x.classList.remove("active")
        );

      b.classList.add("active");

      mode = b.dataset.mode;

      $("selectedOptions")
        .classList
        .toggle(
          "hidden",
          mode !== "selected"
        );

      playClick();
    };
  });

/* ---------- som ---------- */

const soundBtn = $("soundToggle");

soundBtn.onclick = () => {
  soundEnabled = !soundEnabled;

  soundBtn.textContent =
    soundEnabled ? "🔊" : "🔇";

  soundBtn.setAttribute(
    "aria-pressed",
    String(soundEnabled)
  );

  if (soundEnabled) {
    playClick();
  }
};

/* ---------- música ---------- */

const musicBtn = $("musicToggle");

musicBtn.onclick = () => {
  musicEnabled = !musicEnabled;

  musicBtn.textContent =
    musicEnabled ? "🎶" : "🎵";

  musicBtn.title =
    musicEnabled
      ? "Pausar música de fundo"
      : "Tocar música de fundo";

  musicBtn.setAttribute(
    "aria-pressed",
    String(musicEnabled)
  );

  if (musicEnabled) {
    ctx();
    startMusic();
  } else {
    stopMusic();
  }
};

/* ---------- troca de jogo ---------- */

gameEl.onchange = () => {
  $("resultCard").classList.add("hidden");
  clearStatus();
};

/* ---------- PokeAPI ---------- */

async function fetchDex(slugName) {
  const r = await fetch(
    `${API}/pokedex/${slugName}/`
  );

  if (!r.ok) {
    throw new Error(
      `Pokédex "${slugName}" não encontrada na PokeAPI.`
    );
  }

  const data = await r.json();

  return data.pokemon_entries.map(
    e => e.pokemon_species.url
  );
}

/* CORRIGIDO:
   A regex antiga estava quebrada. */

async function fetchSpecies(url) {
  const match = url.match(/\/(\d+)\/?$/);

  if (!match) {
    throw new Error(
      "URL de espécie inválida."
    );
  }

  return fetchSpeciesById(match[1]);
}

async function fetchSpeciesById(id) {
  const r = await fetch(
    `${API}/pokemon/${id}/`
  );

  if (!r.ok) {
    throw new Error(
      "Falha ao carregar Pokémon."
    );
  }

  const p = await r.json();

  const art =
    p.sprites.other?.["official-artwork"];

  return {
    id: p.id,
    name: p.name,

    types: p.types.map(
      x => x.type.name
    ),

    sprite:
      art?.front_default ||
      p.sprites.front_default,

    shinySprite:
      art?.front_shiny ||
      p.sprites.front_shiny ||
      art?.front_default ||
      p.sprites.front_default
  };
}

/* ---------- cache ---------- */

const CACHE_VERSION = "v3";

function cacheKey(id) {
  return `pokechallenge:${CACHE_VERSION}:${id}`;
}

function loadFromLocalStorage(id) {
  try {
    const raw =
      localStorage.getItem(
        cacheKey(id)
      );

    if (!raw) return null;

    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function saveToLocalStorage(id, data) {
  try {
    localStorage.setItem(
      cacheKey(id),
      JSON.stringify(data)
    );
  } catch {
    /* ignora erro de armazenamento */
  }
}

/* ---------- carregar jogo ---------- */

async function loadGame(id) {
  if (cache[id]) {
    return cache[id];
  }

  const fromDisk =
    loadFromLocalStorage(id);

  if (fromDisk) {
    cache[id] = fromDisk;
    return fromDisk;
  }

  const cfg = GAMES[id];

  setStatus(
    `Carregando a lista completa de ${cfg.name}...`
  );

  const urls = (
    await Promise.all(
      cfg.dex.map(fetchDex)
    )
  ).flat();

  const unique = [
    ...new Set(urls)
  ];

  const all = [];
  const chunk = 40;

  for (
    let i = 0;
    i < unique.length;
    i += chunk
  ) {
    const rows = await Promise.all(
      unique
        .slice(i, i + chunk)
        .map(fetchSpecies)
    );

    all.push(...rows);

    setStatus(
      `Carregando Pokémon: ${Math.min(
        i + chunk,
        unique.length
      )}/${unique.length}`
    );
  }

  if (cfg.extraIds?.length) {
    const extras =
      await Promise.all(
        cfg.extraIds.map(
          fetchSpeciesById
        )
      );

    all.push(...extras);
  }

  let data = uniqueById(all);

  if (cfg.exclude?.length) {
    const excludeSet =
      new Set(cfg.exclude);

    data = data.filter(
      p => !excludeSet.has(p.name)
    );
  }

  cache[id] = data;

  saveToLocalStorage(id, data);

  clearStatus();

  return data;
}

/* ---------- seleção ---------- */

function pick6(list) {
  return shuffle(
    uniqueById(list)
  ).slice(0, 6);
}

function pickUpTo(n, list) {
  return shuffle(
    uniqueById(list)
  ).slice(
    0,
    Math.min(n, list.length)
  );
}

function hasType(p, type) {
  return p.types.some(
    t =>
      t.toLowerCase() ===
      type.toLowerCase()
  );
}

/* ---------- render ---------- */

function render(list) {
  $("result").innerHTML = "";

  list.forEach((p, i) => {
    const card =
      document.createElement("article");

    card.className =
      "pokemon" +
      (p.shiny ? " shiny" : "");

    card.style.setProperty(
      "--i",
      i
    );

    card.innerHTML = `
      <span class="num">
        #${String(p.id).padStart(4, "0")} • ${i + 1}
      </span>

      ${
        p.shiny
          ? '<span class="shiny-badge">✨ Shiny</span>'
          : ""
      }

      <img
        src="${p.shiny ? p.shinySprite : p.sprite}"
        alt="${p.name}${p.shiny ? " (shiny)" : ""}"
      >

      <div class="name">
        ${p.name.replaceAll("-", " ")}
      </div>

      <div class="chips">
        ${p.types
          .map(
            t => `
              <span
                class="chip"
                style="
                  background:${typeColor(t)};
                  color:${typeTextColor(t)}
                "
              >
                ${t}
              </span>
            `
          )
          .join("")}
      </div>
    `;

    $("result").appendChild(card);
  });
}

/* ---------- sorteio ---------- */

async function roll() {
  $("roll").disabled = true;

  $("resultCard")
    .classList
    .add("hidden");

  clearTimeout(shinyToastTimer);

  $("shinyToast")
    .classList
    .remove("show");

  playRoll();

  try {
    const list =
      await loadGame(
        gameEl.value
      );

    if (list.length < 6) {
      throw new Error(
        "Esse conjunto de dados tem menos de 6 Pokémon."
      );
    }

    let chosen;
    let title;
    let text;

    /* Aleatório */

    if (mode === "random") {
      chosen = pick6(list);

      title =
        "🎰 6 Pokémon aleatórios";

      text =
        `Sorteados entre ${list.length} Pokémon disponíveis nesta lista.`;
    }

    /* Mono tipo */

    else if (mode === "mono") {
      const type =
        TYPES[
          Math.floor(
            Math.random() *
            TYPES.length
          )
        ];

      const pool =
        list.filter(
          p => hasType(p, type)
        );

      if (pool.length === 0) {
        throw new Error(
          `Não há nenhum Pokémon do tipo ${type} nessa lista.`
        );
      }

      chosen =
        pickUpTo(6, pool);

      title =
        `🌈 Mono ${type}`;

      text =
        pool.length < 6
          ? `Seu desafio: usar Pokémon que tenham o tipo ${type}. Só há ${pool.length} disponíveis nessa lista, então o time saiu com ${pool.length}.`
          : `Seu desafio: usar Pokémon que tenham o tipo ${type}.`;
    }

    /* Tipos selecionados */

    else {
      const selected = [
        ...document.querySelectorAll(
          "#types input:checked"
        )
      ].map(
        x => x.value
      );

      if (!selected.length) {
        throw new Error(
          "Selecione pelo menos um tipo."
        );
      }

      const pool =
        list.filter(
          p =>
            selected.some(
              t => hasType(p, t)
            )
        );

      if (pool.length === 0) {
        throw new Error(
          "Nenhum Pokémon compatível com esses tipos."
        );
      }

      chosen =
        pickUpTo(6, pool);

      title =
        "🎨 Tipos selecionados";

      text =
        pool.length < 6
          ? `Tipos permitidos: ${selected.join(", ")}. Só há ${pool.length} compatíveis; exibindo todos.`
          : `Tipos permitidos: ${selected.join(", ")}.`;
    }

    lastResult = chosen;

    const shinyPick =
      applyShinyChance(chosen);

    $("resultTitle").textContent =
      title;

    $("resultText").textContent =
      text;

    render(chosen);

    $("resultCard")
      .classList
      .remove("hidden");

    $("resultCard").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    if (shinyPick) {
      playShiny();
      showShinyToast(
        shinyPick.name
      );
    } else {
      playReveal();
    }

  } catch (e) {
    $("status").textContent =
      `⚠️ ${e.message}`;

    $("status")
      .classList
      .remove("hidden");

    $("status")
      .classList
      .add("error");

    playError();

    console.error(
      "Erro no Indigo Dex:",
      e
    );

  } finally {
    $("roll").disabled = false;
  }
}

/* ---------- botões ---------- */

$("roll").onclick = roll;
$("again").onclick = roll;

gameEl.dispatchEvent(
  new Event("change")
);