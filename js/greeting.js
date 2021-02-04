const userNameForm = document.querySelector(".userNameForm");
const input = userNameForm.querySelector("input");
const greeting = document.querySelector(".greeting");

const USER_LS = "userName";
const SHOWING_CN = "showing";
const HIDING_CN = "hiding";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();

    const userName = input.value;
    saveName(userName);
    paintGreeting(userName);
}

function askForName() {
    userNameForm.classList.add(SHOWING_CN);
    userNameForm.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    userNameForm.classList.remove(SHOWING_CN);
    userNameForm.classList.add(HIDING_CN);

    greeting.classList.remove(HIDING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const userName = localStorage.getItem(USER_LS);
    if (userName === null) {
        askForName();
    } else {
        paintGreeting(userName);
    }
}

function init() {
    loadName();
}

init();