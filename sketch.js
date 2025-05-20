let jogos = [
  { nome: "FIFA", genero: "Esporte" },
  { nome: "VALORANT", genero: "FPS" },
  { nome: "FREE FIRE", genero: "Battle Royale" },
  { nome: "ROBLOX", genero: "Sandbox" },
  { nome: "GTA", genero: "Ação" },
  { nome: "MORTAL KOMBAT", genero: "Luta" }
];

let coresGenero = {
  "Esporte": "#16a085",
  "FPS": "#e74c3c",
  "Battle Royale": "#f1c40f",
  "Sandbox": "#8e44ad",
  "Ação": "#2980b9",
  "Luta": "#34495e"
};

let emojiGenero = {
  "Esporte": "⚽",
  "FPS": "🔫",
  "Battle Royale": "🎯",
  "Sandbox": "🧱",
  "Ação": "🚗",
  "Luta": "🥊"
};

let jogoAtual = null;

function setup() {
  createCanvas(400, 400);
  let botao = createButton("Recomendar Jogo");
  botao.position(10, 420);
  botao.mousePressed(recomendarJogo);
  textAlign(CENTER, CENTER);
  textSize(24);
}

function draw() {
  if (jogoAtual) {
    background(coresGenero[jogoAtual.genero] || 220);
    textSize(20);
    text("Jogo recomendado:", width / 2, height / 2 - 80);
    textSize(32);
    text(jogoAtual.nome, width / 2, height / 2 - 30);
    textSize(28);
    text(`${emojiGenero[jogoAtual.genero] || ""} ${jogoAtual.genero}`, width / 2, height / 2 + 30);
  } else {
    background(220);
    textSize(24);
    text("Clique no botão para receber uma recomendação!", width / 2, height / 2);
  }
}

function recomendarJogo() {
  let indice = floor(random(jogos.length));
  jogoAtual = jogos[indice];
}
