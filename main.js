import { LinksApp } from "./module/app/Links/LinksApp.js";
import { WelcomeApp } from "./module/app/Welcome/WelcomeApp.js";
import { WLClockApp } from "./module/app/WLClock/WLClockApp.js";
import { WLWeatherApp } from "./module/app/WLWeather/WLWeatherApp.js";
import { initializeBottomBarTime } from "./module/BottomBarTime.js";
import { setSplashText } from "./module/SplashText.js";
import { WindowManager } from "./module/WindowManager.js"

initializeBottomBarTime();
setSplashText();

// Initialize apps
let wm = new WindowManager();

const welcomeApp = new WelcomeApp();

const apps = [welcomeApp, new LinksApp(), new WLClockApp(), new WLWeatherApp()];

for (const app of apps) {
    app.initialize(wm);
}

// Show welcome window
wm.showWindowByID(welcomeApp.appID);