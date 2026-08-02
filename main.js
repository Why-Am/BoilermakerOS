import { initializeWindow, windowState } from "./module/window.js";

const timeDisplay = document.querySelector("#time-display");
const welcomeWindow = document.querySelector("#welcome");
const linksWindow = document.querySelector("#links")

let selectedIcon = undefined;

function updateTime() {
    const currentTime = new Date().toLocaleString();
    timeDisplay.innerHTML = currentTime;
}

setInterval(updateTime, 1000);

initializeWindow(welcomeWindow);
initializeWindow(linksWindow);