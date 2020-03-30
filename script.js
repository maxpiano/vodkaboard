function playSound(e) {
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);

keys.forEach((key) =>
  key.addEventListener("click", function () {
    let audio = document.querySelector(
      `audio[data-key="${this.getAttribute("data-key")}"]`
    );
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    this.classList.add("playing");
  })
);
