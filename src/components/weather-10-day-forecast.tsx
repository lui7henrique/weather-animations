import { Calendar } from "lucide-react";
import { weatherIcons } from "./weather-icons";

const FORECAST = [
	{
		day: "Today",
		min: 20,
		max: 25,
		icon: weatherIcons.clouds,
	},
	{
		day: "Sun",
		min: 20,
		max: 25,
		icon: weatherIcons.clouds,
	},
	{
		day: "Mon",
		min: 20,
		max: 25,
		icon: weatherIcons.clear,
	},
	{
		day: "Tue",
		min: 20,
		max: 25,
		icon: weatherIcons.clear,
	},
	{
		day: "Wed",
		min: 18,
		max: 24,
		icon: weatherIcons.rain,
	},
	{
		day: "Thu",
		min: 19,
		max: 26,
		icon: weatherIcons.clear,
	},
	{
		day: "Fri",
		min: 21,
		max: 27,
		icon: weatherIcons.clouds,
	},
	{
		day: "Sat",
		min: 20,
		max: 25,
		icon: weatherIcons.thunderstorm,
	},
	{
		day: "Sun",
		min: 19,
		max: 24,
		icon: weatherIcons.snow,
	},
	{
		day: "Mon",
		min: 18,
		max: 23,
		icon: weatherIcons.drizzle,
	},
];

export function Weather10DayForecast() {
	return (
		<div className="bg-background/20 backdrop-blur-md px-6 py-4 rounded-[18px] flex flex-col mt-[13px] w-full">
			<div className="flex items-center gap-2 mb-4 text-secondary/70">
				<Calendar className="size-4" />

				<p className="text-sm uppercase font-medium">10-day forecast</p>
			</div>

			<div className="flex flex-col">
				{FORECAST.map((forecast) => (
					<div
						key={forecast.day}
						className="flex items-center gap-8 py-3 border-t border-white/10 w-full"
					>
						<div className="flex items-center gap-2">
							<p className="text-xl font-bold w-[5ch]">{forecast.day}</p>
							<forecast.icon className="size-6" />
						</div>

						<div className="flex items-center gap-2 flex-1">
							<p className="text-xl text-secondary/70">{forecast.min}°</p>

							<div className="relative w-full h-1.5 rounded-full bg-background/10">
								<div className="bg-gradient-to-r from-[#89D5BE] to-[#EDD054] w-1/2 h-full rounded-full absolute top-0 left-0" />
							</div>

							<p className="text-xl">{forecast.max}°</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
