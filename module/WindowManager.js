import { Window } from "./Window.js";

export class WindowManager {
    constructor() {
        this.windows = [];
    }

    registerWindow(element) {
        const window = new Window(element, this)
        this.windows.push(window);
        window.hide();
    }

    requestFocus(windowToFocus) {
        const maxZIndex = this.windows.length;

        for (const window of this.windows) {
            if (window.element.style.zIndex > windowToFocus.element.style.zIndex) {
                window.element.style.zIndex--;
            }
        }
        windowToFocus.element.style.zIndex = maxZIndex;
    }

    showWindowByID(id) {
        for (const window of this.windows) {
            if (window.element.id === id) {
                window.show();
                break;
            }
        }
    }
}