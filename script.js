const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ym = 0;
let mining = false;

// Load ảnh Goblin
const goblinImg = new Image();
goblinImg.src = "https://i.ibb.co/4YJ1K4y/goblin.png"; // bạn có thể thay bằng hình goblin riêng của bạn

function drawGoblin() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(goblinImg, canvas.width / 2 - 100, canvas.height / 2 - 100, 200, 200);
}

function animateMining() {
  mining = true;
  let progress = 0;
  const interval = setInterval(() => {
    progress++;
    ym += 1;
    document.getElementById("ymBalance").textContent = ym;
    drawGoblin();
    if (progress >= 10) {
      clearInterval(interval);
      mining = false;
    }
  }, 200);
}

document.getElementById("mineBtn").addEventListener("click", () => {
  if (!mining) animateMining();
});

drawGoblin();
