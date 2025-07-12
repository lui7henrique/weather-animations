import clear from "../assets/clear.webp";
import cloudy from "../assets/cloudy.webp";
import drizzle from "../assets/drizzle.webp";
import rainy from "../assets/rainy.webp";
import snow from "../assets/snow.webp";
import thunderstorm from "../assets/thunderstorm.webp";
import type { WeatherResponse } from "../types/weather";

export function getImage(weather: WeatherResponse) {
	const weatherType = weather.weather[0].main.toLowerCase();

	if (weatherType.includes("snow")) return snow;
	if (weatherType.includes("thunderstorm")) return thunderstorm;
	if (weatherType.includes("clouds")) return cloudy;
	if (weatherType.includes("rain")) return rainy;
	if (weatherType.includes("drizzle")) return drizzle;

	return clear;
}
