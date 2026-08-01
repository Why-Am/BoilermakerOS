import { makeDraggable, closeWindow, openWindow } from "./module/window.js";

const timeDisplay = document.querySelector("#time-display");
const welcomeWindow = document.querySelector("#welcome")
const welcomeWindowClose = document.querySelector("#welcome-close")
const welcomeWindowOpen = document.querySelector("#welcome-open")

function updateTime() {
    const currentTime = new Date().toLocaleString();
    timeDisplay.innerHTML = currentTime;
}

setInterval(updateTime, 1000);

makeDraggable(welcomeWindow);

welcomeWindowClose.addEventListener("click", () => {
    closeWindow(welcomeWindow);
});

welcomeWindowOpen.addEventListener("click", () => {
    openWindow(welcomeWindow);
})