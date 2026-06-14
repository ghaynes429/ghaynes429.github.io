const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d")

// Goal post variables
const goalX = 700;
const goalTop = 150;
const goalBottom = 350;

// Draw field
function drawField() {
  ctx.fillStyle = "#2e7d32";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Yard lines
  ctx.strokeStyle = "white";
  for (let i = 50; i < canvas.width; i += 50) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, canvas.height);
    ctx.stroke();
  }

  // Goal post
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
};
drawField();
