import { WindowManager } from "./module/WindowManager.js"

const timeDisplay = document.querySelector("#time-display");
const welcomeWindow = document.querySelector("#welcome");
const linksWindow = document.querySelector("#links")

// Initialize time
function updateTime() {
    const currentTime = new Date().toLocaleString();
    timeDisplay.innerHTML = currentTime;
}

setInterval(updateTime, 1000);

// Initialize wm
let wm = new WindowManager();

wm.registerWindow(welcomeWindow);
wm.registerWindow(linksWindow);