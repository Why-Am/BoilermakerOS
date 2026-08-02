import { FOCUSED_WINDOW_LAYER, UNFOCUSED_WINDOW_LAYER } from "./LayerConstants.js";
import { Window } from "./Window.js";

export class WindowManager {
    constructor() {
        this.windows = [];
    }

    registerWindow(element) {
        this.windows.push(new Window(element, this));
    }

    requestFocus(window) {
        for (const curWindow of this.windows) {
            curWindow.element.style.zIndex = UNFOCUSED_WINDOW_LAYER;
        }
        window.element.style.zIndex = FOCUSED_WINDOW_LAYER;
    }
}