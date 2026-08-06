const splashTextElement = document.getElementById("splash-text");

export function setSplashText() {
    splashTextElement.innerText = `"${splashTexts[getRandomInt(0, splashTexts.length - 1)]}"`;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const splashTexts = [
    "Created by an incoming freshman!",
    "100% Vanilla JS!",
    "linear-gradient(white -30%, var(--purdue-old-gold) 10%, var(--purdue-old-gold) 90%, black 140%)!",
    "🗼 Port: 3000!",
    "MIT Licensed!",
    "Boiler down / Hammer up!",
    "Should've gotten a Macbook instead!",
    "Created for Stardance!",
    "git config core.ignorecase false!",
]