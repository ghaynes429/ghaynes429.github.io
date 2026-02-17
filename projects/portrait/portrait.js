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
ctx.fillStyle = "#111";
ctx.fillRect(200, 300, 200, 250); // chair back
