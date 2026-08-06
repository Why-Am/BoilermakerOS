import { App } from "../App.js";
import { WindowManager } from "../../WindowManager.js";

export class WLClockApp extends App {
    appID = "wl-clock";
    appName = "WL Clock";
    iconPath = "image/app_icon/WL_Clock.png";
    element = document.getElementById(this.appID);

    timeDisplay = document.getElementById(this.appID + "-time");
    timeOptions = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZone: "America/Indianapolis",
        timeZoneName: "short",
    };
    dateDisplay = document.getElementById(this.appID + "-date");
    dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "America/Indianapolis",
    }

    /**
     * @param {WindowManager} wm 
     */
    initialize(wm) {
        super.initialize(wm);
        setInterval(() => this.updateTime(), 1000);
    }

    updateTime() {
        const now = new Date();
        this.timeDisplay.innerText = now.toLocaleTimeString("en-US", this.timeOptions);
        this.dateDisplay.innerText = now.toLocaleDateString("en-US", this.dateOptions);
    }
}