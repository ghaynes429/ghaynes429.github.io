const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// ---------------------
// BACKGROUND
// ---------------------
ctx.fillStyle = "#3a6ea5"; // blue wall
ctx.fillRect(0, 0, 600, 600);

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

// ---------------------
// GLASSES
// ---------------------
ctx.strokeStyle = "black";
ctx.lineWidth = 3;

ctx.strokeRect(230, 220, 60, 40);
ctx.strokeRect(310, 220, 60, 40);

// bridge
ctx.beginPath();
ctx.moveTo(290, 240);
ctx.lineTo(310, 240);
ctx.stroke();

// ---------------------
// NOSE (polygon)
// ---------------------
ctx.fillStyle = "#a56b3f";
ctx.beginPath();
ctx.moveTo(300, 250);
ctx.lineTo(290, 290);
ctx.lineTo(310, 290);
ctx.closePath();
ctx.fill();

// ---------------------
// MOUTH (arc)
// ---------------------
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.arc(300, 300, 30, 0, Math.PI);
ctx.stroke();

// ---------------------
// FACIAL HAIR (mustache)
// ---------------------
ctx.fillStyle = "#111";
ctx.beginPath();
ctx.arc(280, 285, 15, 0, Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(320, 285, 15, 0, Math.PI);
ctx.fill();

// goatee
ctx.beginPath();
ctx.arc(300, 340, 15, 0, Math.PI * 2);
ctx.fill();

// ---------------------
// EARS
// ---------------------

// left ear
ctx.fillStyle = "#b97a57";
ctx.beginPath();
ctx.arc(200, 250, 20, 0, Math.PI * 2);
ctx.fill();

// right ear
ctx.beginPath();
ctx.arc(400, 250, 20, 0, Math.PI * 2);
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
// SHIRT
// ---------------------
ctx.fillStyle = "#ddd";
ctx.fillRect(200, 380, 200, 200);

// sleeves
ctx.fillStyle = "#ccc";

// left sleeve
ctx.beginPath();
ctx.moveTo(200, 380);
ctx.lineTo(150, 500);
ctx.lineTo(200, 500);
ctx.closePath();
ctx.fill();

// right sleeve
ctx.beginPath();
ctx.moveTo(400, 380);
ctx.lineTo(450, 500);
ctx.lineTo(400, 500);
ctx.closePath();
ctx.fill();
