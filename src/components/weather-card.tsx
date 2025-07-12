import { useSuspenseQuery } from "@tanstack/react-query";
import { formatDate } from "date-fns";

import clear from "../assets/clear.webp";
import cloudy from "../assets/cloudy.webp";
import drizzle from "../assets/drizzle.webp";
import rainy from "../assets/rainy.webp";
import snow from "../assets/snow.webp";
import thunderstorm from "../assets/thunderstorm.webp";

import { getWeather } from "../services/open-weather";
import type { WeatherResponse } from "../types/weather";

type WeatherCardProps = {
	city: string;
};

export function WeatherCard({ city }: WeatherCardProps) {
	const { data: weather } = useSuspenseQuery({
		queryKey: ["weather", city],
		queryFn: () => getWeather(city),
	});

	function getImage(weather: WeatherResponse) {
		const weatherType = weather.weather[0].main.toLowerCase();

		if (weatherType.includes("snow")) return snow;
		if (weatherType.includes("thunderstorm")) return thunderstorm;
		if (weatherType.includes("clouds")) return cloudy;
		if (weatherType.includes("rain")) return rainy;
		if (weatherType.includes("drizzle")) return drizzle;

		return clear;
	}

	return (
		<div
			key={weather.id}
			className="rounded-4xl px-6 py-4 w-full relative overflow-hidden cursor-pointer"
		>
			<img
				src={getImage(weather)}
				alt=""
				className="w-full h-full object-cover absolute top-0 left-0"
			/>

			<div className="relative z-10 flex flex-col gap-5">
				<div className="flex items-center justify-between">
					<div className="">
						<h1 className="text-primary text-2xl font-bold text-shadow-md">
							{weather.name}
						</h1>

						<p className="text-secondary font-semibold">
							{formatDate(new Date(), "HH:mm")}
						</p>
					</div>

					<p className="text-primary text-6xl text-shadow-md">
						{weather.main.temp.toFixed(0)}°
					</p>
				</div>

				<div className="flex items-center justify-between">
					<p className="text-secondary text-shadow-sm font-semibold capitalize">
						{weather.weather[0].description}
					</p>

					<div className="flex items-center gap-2">
						<p className="text-secondary text-shadow-sm font-semibold">
							H:{weather.main.temp_max.toFixed(0)}°
						</p>

						<p className="text-secondary text-shadow-sm font-semibold">
							L:{weather.main.temp_min.toFixed(0)}°
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
