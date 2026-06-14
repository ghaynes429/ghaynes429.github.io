const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let myMusic = new sound("panomusic.wav");

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);

  this.play = function () {
    this.sound.play();
  };

  this.stop = function () {
    this.sound.pause();
  };
}

myMusic.play();

// IMAGE
const defenderImg = new Image();
defenderImg.src = "defender.png";

// GAME STATE
let gameState = "menu";

// SCORE
let score = 0;

// PLAYER
let player = {
  x: 80,
  y: canvas.height / 2,
  radius: 12,
  speed: 4
};

// AIM
let angle = 0;
let mouse = { x: 0, y: 0 };

// GAME VARIABLES
let kicked = false;
let ball = null;
let resultMessage = "";
let gameTime = 0;

// GOAL
const goalX = 700;
const goalTop = 150;
const goalBottom = 350;

// INPUT
let keys = {};

// DEFENDERS
let defenders = [];
let spawnTimer = 0;

// SCORE HUD
function drawScore() {
  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.textAlign = "left";
  ctx.fillText("Score: " + score, 20, 30);
}

// FIELD
function drawField() {
  ctx.fillStyle = "#2e7d32";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const endzoneWidth = 100;
  ctx.fillStyle = "#1b5e20";
  ctx.fillRect(canvas.width - endzoneWidth, 0, endzoneWidth, canvas.height);

  ctx.save();
  ctx.fillStyle = "white";
  ctx.font = "bold 40px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  ctx.translate(canvas.width - endzoneWidth / 2, canvas.height / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText("MR JONES", 0, 0);
  ctx.restore();

  ctx.strokeStyle = "white";

  for (let i = 50; i < canvas.width; i += 50) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, canvas.height);
    ctx.stroke();
  }

  // GOAL POSTS
  ctx.strokeStyle = "yellow";
  ctx.lineWidth = 5;

  ctx.beginPath();
  ctx.moveTo(goalX, goalTop);
  ctx.lineTo(goalX, goalBottom);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(goalX, goalTop);
  ctx.lineTo(goalX + 30, goalTop);

  ctx.moveTo(goalX, goalBottom);
  ctx.lineTo(goalX + 30, goalBottom);

  ctx.stroke();

  ctx.lineWidth = 1;
}

// MENU
function drawMenu() {
  ctx.fillStyle = "#1a1a1a";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "white";
  ctx.textAlign = "center";

  ctx.font = "bold 48px Arial";
  ctx.fillText("Welcome Player", canvas.width / 2, 180);

  ctx.font = "20px Arial";
  ctx.fillText("Field Goal Challenge", canvas.width / 2, 230);

  // START BUTTON
  ctx.fillStyle = "#4caf50";
  ctx.fillRect(canvas.width / 2 - 80, 280, 160, 50);

  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.fillText("START", canvas.width / 2, 312);
}

// PLAYER
function drawPlayer() {
  ctx.fillStyle = "red";

  ctx.beginPath();
  ctx.arc(player.x, player.y, player.radius, 0, Math.PI * 2);
  ctx.fill();

  // AIM ARROW
  const length = 40;
  const tipX = player.x + Math.cos(angle) * length;
  const tipY = player.y + Math.sin(angle) * length;

  ctx.strokeStyle = "white";
  ctx.lineWidth = 3;

  ctx.beginPath();
  ctx.moveTo(player.x, player.y);
  ctx.lineTo(tipX, tipY);
  ctx.stroke();
}

// AIM
function updateAim() {
  if (gameState !== "playing") return;

  const dx = mouse.x - player.x;
  const dy = mouse.y - player.y;

  angle = Math.atan2(dy, dx);
}

// PLAYER MOVEMENT
function updatePlayer() {
  if (keys["ArrowUp"] || keys["w"] || keys["W"]) player.y -= player.speed;
  if (keys["ArrowDown"] || keys["s"] || keys["S"]) player.y += player.speed;

  if (player.y < player.radius) player.y = player.radius;
  if (player.y > canvas.height - player.radius)
    player.y = canvas.height - player.radius;
}

// BALL
function drawBall() {
  if (ball) {
    ctx.fillStyle = "brown";

    ctx.beginPath();
    ctx.arc(ball.x, ball.y, 6, 0, Math.PI * 2);
    ctx.fill();
  }
}

function kick() {
  if (!kicked && gameState === "playing") {
    kicked = true;

    const power = 8;

    ball = {
      x: player.x,
      y: player.y,
      vx: Math.cos(angle) * power,
      vy: Math.sin(angle) * power
    };
  }
}

// DEFENDERS
function spawnDefender() {
  const difficulty = 1 + gameTime / 600;

  defenders.push({
    x: canvas.width,
    y: Math.random() * (canvas.height - 120),
    width: 60,
    height: 120,
    speed: Math.min(10, (4 + Math.random() * 2) * difficulty)
  });
}

function updateDefenders() {
  spawnTimer--;

  const difficulty = 1 + gameTime / 600;

  if (spawnTimer <= 0) {
    spawnDefender();

    spawnTimer = Math.max(20, (60 + Math.random() * 60) / difficulty);
  }

  defenders.forEach(d => {
    d.x -= d.speed;
  });

  defenders = defenders.filter(d => d.x + d.width > 0);
}

function drawDefenders() {
  defenders.forEach(d => {
    ctx.save();

    ctx.translate(d.x + d.width, d.y);
    ctx.scale(-1, 1);

    ctx.drawImage(defenderImg, 0, 0, d.width, d.height);

    ctx.restore();
  });
}

// COLLISION
function checkCollision() {
  if (!ball) return false;

  return defenders.some(d =>
    ball.x > d.x &&
    ball.x < d.x + d.width &&
    ball.y > d.y &&
    ball.y < d.y + d.height
  );
}

// PLAYER HIT
function checkPlayerHit() {
  return defenders.some(d =>
    player.x + player.radius > d.x &&
    player.x - player.radius < d.x + d.width &&
    player.y + player.radius > d.y &&
    player.y - player.radius < d.y + d.height
  );
}

// RESET KICK ONLY
function resetKick() {
  kicked = false;
  ball = null;
}

// BALL UPDATE
function updateBall() {
  if (ball) {
    ball.x += ball.vx;
    ball.y += ball.vy;

    // BLOCKED
    if (checkCollision()) {
      endGame("BLOCKED!");
      return;
    }

    // MISS
    if (
      ball.x <= 0 ||
      ball.x >= canvas.width ||
      ball.y <= 0 ||
      ball.y >= canvas.height
    ) {
      endGame("MISS!");
      return;
    }

    // GOOD KICK
    if (ball.x >= goalX) {
      if (ball.y > goalTop && ball.y < goalBottom) {
        score++;
        resetKick();
      } else {
        endGame("MISS!");
      }
    }
  }
}

// GAME OVER
function endGame(message) {
  gameState = "gameover";
  resultMessage = message;
}

// GAME OVER SCREEN
function drawGameOver() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "white";
  ctx.textAlign = "center";

  ctx.font = "bold 50px Arial";
  ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2 - 50);

  ctx.font = "30px Arial";
  ctx.fillText("Score: " + score, canvas.width / 2, canvas.height / 2);

  ctx.font = "20px Arial";
  ctx.fillText(
    "Press SPACE to restart",
    canvas.width / 2,
    canvas.height / 2 + 50
  );
}

// START GAME
function startGame() {
  gameState = "playing";

  score = 0;

  kicked = false;
  ball = null;
  defenders = [];
  resultMessage = "";
  gameTime = 0;

  player.y = canvas.height / 2;
}

// RESET TO MENU
function resetGame() {
  gameState = "menu";

  kicked = false;
  ball = null;
  defenders = [];
  resultMessage = "";
  gameTime = 0;

  player.y = canvas.height / 2;

  score = 0;
}

// INPUT
document.addEventListener("keydown", e => {
  keys[e.key] = true;

  if (e.code === "Space") {
    if (gameState === "playing") {
      kick();
    } else if (gameState === "gameover") {
      score = 0;
      startGame();
    }
  }
});

document.addEventListener("keyup", e => {
  keys[e.key] = false;
});

// MOUSE AIM
canvas.addEventListener("mousemove", e => {
  const rect = canvas.getBoundingClientRect();

  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
});

// CLICK HANDLER
canvas.addEventListener("click", e => {
  const rect = canvas.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // MENU BUTTON
  if (gameState === "menu") {
    const btnX = canvas.width / 2 - 80;
    const btnY = 280;
    const btnW = 160;
    const btnH = 50;

    if (
      x >= btnX &&
      x <= btnX + btnW &&
      y >= btnY &&
      y <= btnY + btnH
    ) {
      startGame();
    }

    return;
  }

  // CLICK TO KICK
  if (gameState === "playing") {
    kick();
  }
});

// MAIN LOOP
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (gameState === "menu") {
    drawMenu();
  }

  else if (gameState === "playing") {
    drawField();

    gameTime++;

    drawScore();

    updatePlayer();
    updateAim();

    drawPlayer();

    updateDefenders();
    drawDefenders();

    if (checkPlayerHit()) {
      endGame("YOU GOT HIT!");
    }

    updateBall();
    drawBall();
  }

  else if (gameState === "gameover") {
    drawField();
    drawGameOver();
  }

  requestAnimationFrame(gameLoop);
}

gameLoop();


