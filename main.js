import { makeDraggable } from "./module/window_dragging.js";

const timeDisplay = document.querySelector("#time-display");

function updateTime() {
    const currentTime = new Date().toLocaleString();
    timeDisplay.innerHTML = currentTime;
}

setInterval(updateTime, 1000);

makeDraggable(document.querySelector(".window"));