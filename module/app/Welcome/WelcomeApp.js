import { App } from "../App.js";

export class WelcomeApp extends App {
    iconPath = "image/app_icon/Welcome.png";
    appID = "welcome";
    appName = "Welcome";
    element = document.getElementById(this.appID);

    initialize(wm) {
        this.addDesktopIconAndRegisterWithWM(wm);
    }
}