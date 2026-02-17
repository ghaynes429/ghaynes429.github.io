const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// ---------------------
// BACKGROUND
// ---------------------
ctx.fillStyle = "#3a6ea5"; // blue wall
ctx.fillRect(0, 0, 600, 600);

// ---------------------
// CHAIR
// ---------------------
ctx.fillStyle = "#111111";
ctx.fillRect(200, 300, 200, 250); // chair back

// ---------------------
// NECK
// ---------------------
ctx.fillStyle = "#b97a57";
ctx.fillRect(270, 330, 60, 80);

// ---------------------
// FACE
// ---------------------
ctx.beginPath();
ctx.fillStyle = "##b97a57";
ctx.arc(300, 250, 100, 0, Math.PI * 2);
ctx.fill();
