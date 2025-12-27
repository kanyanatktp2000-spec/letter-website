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

let current = 0;
let isAnimating = false;
let musicStarted = false;

const img = document.getElementById("sceneImage");
const music = document.getElementById("bgm");

/* preload รูป */
scenes.forEach(src => {
  const i = new Image();
  i.src = src;
});

/* เปลี่ยนฉาก */
function changeScene(src) {
  isAnimating = true;
  img.classList.remove("show");
  img.classList.add("hide");

  setTimeout(() => {
    img.src = src;
    img.onload = () => {
      img.classList.remove("hide");
      img.classList.add("show");
      setTimeout(() => isAnimating = false, 800);
    };
  }, 300);
}

/* เริ่มหน้าแรก */
changeScene(scenes[0]);

document.body.addEventListener("click", () => {
  if (isAnimating) return;
  if (current >= scenes.length - 1) return;

  current++;
  changeScene(scenes[current]);

  if (scenes[current] === "letteropen.png" && !musicStarted) {
    music.currentTime = 0.23;
    music.play();
    musicStarted = true;
  }
});
