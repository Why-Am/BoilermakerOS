import { getUserTime } from "../../BottomBarTime.js";
import { App } from "../App.js";

export class WLWeatherApp extends App {
    appID = "wl-weather";
    appName = "WL Weather";
    iconPath = "image/app_icon/WL_Weather.png";
    element = document.getElementById(this.appID);
    temperatureDisplay = document.getElementById(this.appID + "-temperature");
    conditionsDisplay = document.getElementById(this.appID + "-conditions");
    lastUpdatedDisplay = document.getElementById(this.appID + "-last-updated");
    weatherRefreshButton = document.getElementById(this.appID + "-refresh");

    initialize(wm) {
        super.initialize(wm);
        this.getWeather();
        this.weatherRefreshButton.addEventListener("click", () => this.getWeather());
    }

    async getWeather() {
        const latitude = 40.4238;
        const longitude = -86.9213;

        const url =
            `https://api.open-meteo.com/v1/forecast` +
            `?latitude=${latitude}` +
            `&longitude=${longitude}` +
            `&current=temperature_2m,weather_code` +
            `&temperature_unit=fahrenheit`;

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }

            const data = await response.json();

            const temperature = data.current.temperature_2m;
            const weatherCode = data.current.weather_code;

            this.temperatureDisplay.innerText = `${temperature} °F`;
            this.conditionsDisplay.innerText = getWeatherDescription(weatherCode);
        } catch (error) {
            console.error("Could not load weather: " + error);
            this.temperatureDisplay.innerText = "?";
            this.conditionsDisplay.innerText = "Could not load weather.";
        }

        this.lastUpdatedDisplay.innerText = getUserTime();
    }
}

function getWeatherDescription(code) {
    const descriptions = {
        0: "Clear sky",
        1: "Mostly clear",
        2: "Partly cloudy",
        3: "Overcast",
        45: "Foggy",
        48: "Foggy",
        51: "Light drizzle",
        53: "Moderate drizzle",
        55: "Heavy drizzle",
        56: "Light freezing drizzle",
        57: "Heavy freezing drizzle",
        61: "Light rain",
        63: "Moderate rain",
        65: "Heavy rain",
        66: "Light freezing rain",
        67: "Heavy freezing rain",
        71: "Light snow",
        73: "Moderate snow",
        75: "Heavy snow",
        80: "Light rain showers",
        81: "Moderate rain showers",
        82: "Heavy rain showers",
        85: "Light snow showers",
        86: "Heavy snow showers",
        95: "Thunderstorm"
    };

    return descriptions[code] ?? "Unknown conditions";
}