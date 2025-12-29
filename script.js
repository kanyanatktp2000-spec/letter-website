const scenes = [
  "letter.png",
  "letteropen.png",
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
let busy = false;
let musicStarted = false;

/* RAF lock = 1 frame ต่อ 1 action */
let frameLocked = false;

const img = document.getElementById("sceneImage");
const music = document.getElementById("bgm");

function nextScene(e) {
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();

  /* กัน event ซ้อนระดับ system */
  if (frameLocked) return;
  frameLocked = true;

  requestAnimationFrame(() => {
    frameLocked = false;
  });

  if (busy) return;
  if (index >= scenes.length - 1) return;

  busy = true;
  index++;

  const loader = new Image();
  loader.src = "./" + scenes[index];

  loader.onload = () => {
    img.style.opacity = "0";

    setTimeout(() => {
      img.src = loader.src;
      img.style.opacity = "1";

      if (scenes[index] === "letteropen.png" && !musicStarted) {
        music.currentTime = 0.23;
        music.play().catch(() => {});
        musicStarted = true;
      }

      busy = false;
    }, 200);
  };
}

/* ใช้ pointerup อย่างเดียว + passive:false */
document.addEventListener(
  "pointerup",
  nextScene,
  { passive: false }
);
