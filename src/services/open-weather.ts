import axios from "axios";
import type { WeatherResponse } from "../types/weather";

const BASE_URL = "https://api.openweathermap.org/data/2.5";
const appid = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

console.log(appid);

const openWeatherApi = axios.create({
	baseURL: BASE_URL,
	params: {
		appid,
	},
});

export async function getWeather(city: string) {
	const { data } = await openWeatherApi.get<WeatherResponse>("/weather", {
		params: {
			q: city,
			units: "metric",
		},
	});

	return data;
}

export async function getForecast(lat: number, lon: number) {
	const { data } = await openWeatherApi.get("/forecast/daily", {
		params: {
			lat,
			lon,
			units: "metric",
		},
	});

	return data;
}
