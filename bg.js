const body = document.querySelector("body");
const IMG_NUM = 3;

function paintImg(IMG_NUMBER) {
  const image = new Image();
  image.src = `./images/${IMG_NUMBER}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUM) + 1;
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImg(randomNumber);
}

init();
