import axios from "axios";
import type { WeatherResponse } from "../types/weather";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const openWeatherApi = axios.create({
	baseURL: BASE_URL,
	params: {
		appid: "fe017193ff86dce749f9e4c7f4f5ff5f",
	},
});

export async function getWeather(city: string) {
	const response = await openWeatherApi.get<WeatherResponse>("/", {
		params: {
			q: city,
			units: "metric",
		},
	});

	return response.data;
}
