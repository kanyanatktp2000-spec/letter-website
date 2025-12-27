const scenes = [
  "letter.png",
  "letteropen.png", // เพลงเริ่มตรงนี้
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
scenes.forEach(name => {
  const i = new Image();
  i.src = "./" + name;
});

/* เปลี่ยนฉาก */
function changeScene(name) {
  isAnimating = true;

  img.classList.remove("show");
  img.classList.add("hide");

  setTimeout(() => {
    img.src = "./" + name;

    img.classList.remove("hide");
    img.classList.add("show");

    setTimeout(() => {
      isAnimating = false;
    }, 800);
  }, 300);
}

/* หน้าแรก */
changeScene(scenes[0]);

/* คลิก */
document.body.addEventListener("click", async () => {
  if (isAnimating) return;
  if (current >= scenes.length - 1) return;

  current++;
  changeScene(scenes[current]);

  if (scenes[current] === "letteropen.png" && !musicStarted) {
    try {
      await music.play();
      music.currentTime = 0.23;
      musicStarted = true;
    } catch (e) {
      console.log(e);
    }
  }
});
