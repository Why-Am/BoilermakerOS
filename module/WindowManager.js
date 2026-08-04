import { FOCUSED_WINDOW_LAYER, UNFOCUSED_WINDOW_LAYER } from "./LayerConstants.js";
import { Window } from "./Window.js";

export class WindowManager {
    constructor() {
        this.windows = [];
    }

    registerWindow(element, isShown) {
        const window = new Window(element, this)
        this.windows.push(window);
        if (isShown) {
            window.show();
        } else {
            window.hide();
        }
    }

    requestFocus(window) {
        for (const curWindow of this.windows) {
            curWindow.element.style.zIndex = UNFOCUSED_WINDOW_LAYER;
        }
        window.element.style.zIndex = FOCUSED_WINDOW_LAYER;
    }
}