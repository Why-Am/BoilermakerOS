import { FOCUSED_WINDOW_LAYER, UNFOCUSED_WINDOW_LAYER } from "./LayerConstants.js";
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

    requestFocus(window) {
        for (const curWindow of this.windows) {
            curWindow.element.style.zIndex = UNFOCUSED_WINDOW_LAYER;
        }
        window.element.style.zIndex = FOCUSED_WINDOW_LAYER;
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