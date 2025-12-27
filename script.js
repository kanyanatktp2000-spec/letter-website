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

let current = 0;
let started = false;

const img = document.getElementById("sceneImage");
const music = document.getElementById("bgm");

function nextScene() {
  if (current >= scenes.length - 1) return;

  current++;
  img.style.opacity = 0;

  setTimeout(() => {
    img.src = "./" + scenes[current];
    img.style.opacity = 1;

    // เริ่มเพลงครั้งแรกบนมือถือ
    if (scenes[current] === "letteropen.png" && !started) {
      music.currentTime = 0.23;
      music.play().catch(() => {});
      started = true;
    }
  }, 200);
}

/* รองรับมือถือ */
document.addEventListener("touchstart", nextScene, { once: false });
document.addEventListener("click", nextScene);
