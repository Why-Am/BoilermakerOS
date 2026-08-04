export class App {
    iconPath;
    appID;
    appName;
    element;

    addDesktopIconAndRegisterWithWM(windowManager) {
        this.#addDesktopIcon();
        this.#registerWindowWithWM(windowManager);
    }

    #registerWindowWithWM(windowManager) {
        // Precondition: desktop icon exists
        windowManager.registerWindow(this.element);
    }

    #addDesktopIcon() {
        const desktop = document.querySelector("#desktop-apps")

        const div = document.createElement("div");
        div.setAttribute("class", "desktop-app");
        div.id = this.appID + "-open";

        const img = document.createElement("img");
        img.src = this.iconPath;
        img.setAttribute("class", "app-icon");

        const p = document.createElement("p");
        p.setAttribute("class", "app-title");
        p.innerText = this.appName;

        div.appendChild(img);
        div.appendChild(p);

        desktop.appendChild(div);
    }
}