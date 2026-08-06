const timeDisplay = document.querySelector("#time-display");
const userLocale = navigator.language || navigator.languages[0];
const timeFormatOptions = { timeZoneName: "short" };

function updateTime() {
    const currentTime = getUserTime();
    timeDisplay.innerHTML = currentTime;
}

/**
 * 
 * @returns {string} time
 */
export function getUserTime() {
    return new Date().toLocaleString(userLocale, timeFormatOptions);
}

export function initializeBottomBarTime() {
    setInterval(updateTime, 1000);
}