const timeDisplay = document.querySelector("#time-display");
const userLocale = navigator.language || navigator.languages[0];
const timeFormatOptions = { timeZoneName: "short" };

function updateTime() {
    const currentTime = new Date().toLocaleString(userLocale, timeFormatOptions);
    timeDisplay.innerHTML = currentTime;
}

export function initializeBottomBarTime() {
    setInterval(updateTime, 1000);
}