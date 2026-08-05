import { LinksApp } from "./module/app/Links/LinksApp.js";
import { WelcomeApp } from "./module/app/Welcome/WelcomeApp.js";
import { WLClockApp } from "./module/app/WLClock/WLClockApp.js";
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

// Initialize apps
let wm = new WindowManager();

const welcomeApp = new WelcomeApp();

const apps = [welcomeApp, new LinksApp(), new WLClockApp()];

for (const app of apps) {
    app.initialize(wm);
}

// Show welcome window
wm.showWindowByID(welcomeApp.appID);