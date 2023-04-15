let note = document.querySelector(".nowplaying");
let keys = document.querySelectorAll(".key");
let allButtonKey = document.querySelectorAll(".hints");

window.addEventListener("keydown", function (e) {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!key) return;

  const keyNote = key.getAttribute("data-note");
  note.innerHTML = keyNote;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
});

keys.forEach((item) => {
  item.addEventListener("transitionend", function () {
    this.classList.remove("playing");
  });
});
allButtonKey.forEach((item, index) => {
  item.style = `transition-delay:${index * 50}ms`;
});
