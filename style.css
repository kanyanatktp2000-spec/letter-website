const scenes = [
  "letter.png",
  "letteropen.png", // เพลงเริ่ม
  "wish.png",
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "last1.png"
];

let index = 0;
let locked = false;
let musicStarted = false;
let lastTap = 0;

const img = document.getElementById("sceneImage");
const music = document.getElementById("bgm");

function goNext(e) {
  e.preventDefault();

  const now = Date.now();

  /* กันแตะรัว / event ซ้อน */
  if (now - lastTap < 500) return;
  lastTap = now;

  if (locked) return;
  if (index >= scenes.length - 1) return;

  locked = true;
  index++;

  const nextImg = new Image();
  nextImg.src = "./" + scenes[index];

  nextImg.onload = () => {
    img.style.opacity = 0;

    setTimeout(() => {
      img.src = nextImg.src;
      img.style.opacity = 1;

      if (scenes[index] === "letteropen.png" && !musicStarted) {
        music.currentTime = 0.23;
        music.play().catch(() => {});
        musicStarted = true;
      }

      locked = false;
    }, 200);
  };
}

/* ใช้ pointerup เท่านั้น */
document.addEventListener("pointerup", goNext);
