import { useSuspenseQuery } from "@tanstack/react-query";
import { getForecast } from "../services/open-weather";
import { weatherIcons } from "./weather-icons";

const FORECAST = [
	{
		day: "Now",
		icon: weatherIcons.clouds,
		temp: 21,
	},
	{
		day: "12",
		icon: weatherIcons.clear,
		temp: 21,
	},
	{
		day: "13",
		icon: weatherIcons.clear,
		temp: 21,
	},
	{
		day: "14",
		icon: weatherIcons.clear,
		temp: 21,
	},
	{
		day: "15",
		icon: weatherIcons.clear,
		temp: 21,
	},
	{
		day: "16",
		icon: weatherIcons.clear,
		temp: 21,
	},
];

export function WeatherDailyForecast() {
	return (
		<div className="mt-[94px] mx-6 bg-background/20 backdrop-blur-md px-6 py-4 rounded-[18px]">
			<p>
				Partly cloudy conditions expected around 12:00. Wind gusts are up to 19
				km/h.
			</p>

			<div className="border-b border-white/10 my-4" />

			<div className="flex gap-8 overflow-x-auto">
				{FORECAST.map((forecast) => (
					<div key={forecast.day} className="flex flex-col items-center gap-3">
						<span className="font-bold">{forecast.day}</span>
						<forecast.icon className="size-8" />
						<span className="font-semibold text-xl">{forecast.temp}°</span>
					</div>
				))}
			</div>
		</div>
	);
}
