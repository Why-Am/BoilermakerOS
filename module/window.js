export class Window {
    constructor(element, wm) {
        this.element = element;
        this.wm = wm;

        this.initializeWindow();
    }

    makeDraggable() {
        let initialX = 0;
        let initialY = 0;
        let currentX = 0;
        let currentY = 0;

        // Step 6: Define the `startDragging` function to capture the initial mouse position and set up event listeners.
        const startDragging = (e) => {
            e = e || window.event;
            e.preventDefault();
            // Step 7: Get the mouse cursor position at startup.
            initialX = e.clientX;
            initialY = e.clientY;
            // Step 8: Set up event listeners for mouse movement (`elementDrag`) and mouse button release (`closeDragElement`).
            document.onmouseup = stopDragging;
            document.onmousemove = dragElement;
        }

        // Step 9: Define the `elementDrag` function to calculate the new position of the element based on mouse movement.
        const dragElement = (e) => {
            e = e || window.event;
            e.preventDefault();
            // Step 10: Calculate the new cursor position.
            currentX = initialX - e.clientX;
            currentY = initialY - e.clientY;
            initialX = e.clientX;
            initialY = e.clientY;
            // Step 11: Update the element's new position by modifying its `top` and `left` CSS properties.
            this.element.style.top = (this.element.offsetTop - currentY) + "px";
            this.element.style.left = (this.element.offsetLeft - currentX) + "px";
        }

        // Step 12: Define the `stopDragging` function to stop tracking mouse movement by removing the event listeners.
        const stopDragging = () => {
            document.onmouseup = null;
            document.onmousemove = null;
        }

        // Step 3: Check if there is a special header element associated with the draggable element.
        if (document.getElementById(this.element.id + "-header")) {
            // Step 4: If present, assign the `dragMouseDown` function to the header's `onmousedown` event.
            // This allows you to drag the window around by its header.
            document.getElementById(this.element.id + "-header").onmousedown = startDragging;
        } else {
            // Step 5: If not present, assign the function directly to the draggable element's `onmousedown` event.
            // This allows you to drag the window by holding down anywhere on the window.
            this.element.onmousedown = startDragging;
        }

    }

    makeClosable() {
        const closeButton = document.getElementById(this.element.id + "-close");
        if (closeButton) {
            closeButton.addEventListener("click", () => this.hide());
        }
        const openButton = document.getElementById(this.element.id + "-open");
        if (openButton) {
            openButton.addEventListener("click", () => this.show());
        }
    }

    hide() {
        this.element.style.display = "none";
    }

    show() {
        this.element.style.display = "flex";
        this.focusWindow();
    }

    makeFocusable() {
        this.element.addEventListener("mousedown", () => this.focusWindow());
    }

    focusWindow() {
        this.wm.requestFocus(this);
    }

    initializeWindow() {
        this.makeClosable();
        this.makeDraggable();
        this.makeFocusable();
    }
}