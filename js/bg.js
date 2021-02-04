const body = document.querySelector("body");

const IMG_NUMBER = 3;

function handleImgLoad() {}

function paintImage(imgNumber) {
    const image = new Image();
    const bgImgList = [
        "https://user-images.githubusercontent.com/54533309/106925564-8cf8e380-6753-11eb-85e3-7c8f5a460612.jpg",
        "https://user-images.githubusercontent.com/54533309/106925589-92eec480-6753-11eb-9a2b-e3650044fbd3.jpg",
        "https://user-images.githubusercontent.com/54533309/106925591-93875b00-6753-11eb-8201-210c6662c80b.jpg"
    ]

    image.src = bgImgList[imgNumber];
    image.classList.add("bgImage");
    image.addEventListener("loadend", handleImgLoad);
    body.appendChild(image);
}

function getRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

init();