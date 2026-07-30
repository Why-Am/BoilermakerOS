const timeDisplay = document.querySelector("#time-display");

function updateTime() {
    const currentTime = new Date().toLocaleString();
    timeDisplay.innerHTML = currentTime;
}

setInterval(updateTime, 1000);