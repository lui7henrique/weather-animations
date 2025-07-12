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
		temp: 23,
	},
	{
		day: "13",
		icon: weatherIcons.clear,
		temp: 24,
	},
	{
		day: "14",
		icon: weatherIcons.clear,
		temp: 22,
	},
	{
		day: "15",
		icon: weatherIcons.clear,
		temp: 20,
	},
	{
		day: "16",
		icon: weatherIcons.clear,
		temp: 19,
	},
	{
		day: "17",
		icon: weatherIcons.clouds,
		temp: 18,
	},
	{
		day: "18",
		icon: weatherIcons.clouds,
		temp: 17,
	},
	{
		day: "19",
		icon: weatherIcons.drizzle,
		temp: 16,
	},
	{
		day: "20",
		icon: weatherIcons.drizzle,
		temp: 18,
	},
	{
		day: "21",
		icon: weatherIcons.clouds,
		temp: 19,
	},
	{
		day: "22",
		icon: weatherIcons.clear,
		temp: 20,
	},
	{
		day: "23",
		icon: weatherIcons.clear,
		temp: 21,
	},
];

export function WeatherDailyForecast() {
	return (
		<div className="w-full">
			<div className="bg-background/20 backdrop-blur-md px-6 py-4 rounded-[18px] flex flex-col overflow-hidden">
				<p>
					Partly cloudy conditions expected around 12:00. Wind gusts are up to
					19 km/h.
				</p>

				<div className="flex gap-10 overflow-x-auto touch-pan-x -mx-6 px-6 -mb-4 pb-4 scrollbar-sm border-t border-white/10 pt-4 mt-4">
					{FORECAST.map((forecast) => (
						<div
							key={forecast.day}
							className="flex flex-col items-center gap-3"
						>
							<span className="font-bold whitespace-nowrap">
								{forecast.day}
							</span>
							<forecast.icon className="size-8" />
							<span className="font-semibold text-xl whitespace-nowrap">
								{forecast.temp}°
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
