import axios from "axios";
import type { WeatherResponse } from "../types/weather";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const appid = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

console.log(appid);

const openWeatherApi = axios.create({
	baseURL: BASE_URL,
	params: {
		appid,
	},
});

export async function getWeather(city: string) {
	await new Promise((resolve) => setTimeout(resolve, 10_000));

	const response = await openWeatherApi.get<WeatherResponse>("/", {
		params: {
			q: city,
			units: "metric",
		},
	});

	return response.data;
}
