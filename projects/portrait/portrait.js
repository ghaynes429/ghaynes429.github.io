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

// ---------------------
// HAIR
// ---------------------
ctx.fillStyle = "#111";

// top hair
ctx.beginPath();
ctx.arc(300, 180, 110, Math.PI, Math.PI * 2);
ctx.fill();

// left hair thing
ctx.beginPath();
ctx.arc(220, 190, 60, 0, Math.PI * 2);
ctx.fill();

// right hair thing
ctx.beginPath();
ctx.arc(380, 190, 60, 0, Math.PI * 2);
ctx.fill();

// extra hair shapes
ctx.beginPath();
ctx.arc(260, 150, 40, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.arc(340, 150, 40, 0, Math.PI * 2);
ctx.fill();

// ---------------------
// LEFT EYE
// ---------------------
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(260, 240, 20, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(260, 240, 10, 0, Math.PI * 2);
ctx.fill();

// ---------------------
// RIGHT EYE
// ---------------------
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(340, 240, 20, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(340, 240, 10, 0, Math.PI * 2);
ctx.fill();

