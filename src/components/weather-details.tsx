import { useSuspenseQuery } from "@tanstack/react-query";
import { motion } from "motion/react";
import { getWeather } from "../services/open-weather";
import { getImage } from "../utils/get-image";

type WeatherDetailsProps = {
	city: string;
	onClose: () => void;
};

export default function WeatherDetails({ city }: WeatherDetailsProps) {
	const { data: weather } = useSuspenseQuery({
		queryKey: ["weather", city],
		queryFn: () => getWeather(city),
	});

	return (
		<motion.div
			layoutId={`weather-card-${city}`}
			className="fixed inset-0 z-50 max-w-md m-auto rounded-4xl overflow-hidden aspect-[9/16]"
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{
				opacity: 1,
				scale: 1,
				transition: { duration: 0.3, ease: "easeInOut" },
			}}
			exit={{
				opacity: 0,
				scale: 0.8,
				transition: { duration: 0.3, ease: "easeInOut" },
			}}
		>
			<img
				src={getImage(weather)}
				alt=""
				className="w-full h-full object-cover absolute top-0 left-0 opacity-10"
			/>

			<motion.div
				className="relative z-10 p-6 flex flex-col gap-5 text-primary"
				animate={{
					opacity: 1,
					scale: 1,
					transition: { duration: 0.4, ease: "easeInOut" },
				}}
				exit={{
					opacity: 0,
					scale: 0.8,
					transition: { duration: 0.4, ease: "easeInOut" },
				}}
			>
				<h1 className="text-3xl font-bold text-shadow-md">{weather.name}</h1>
				<p className="text-8xl text-shadow-md">
					{weather.main.temp.toFixed(0)}°
				</p>
				<p className="text-secondary text-shadow-sm font-semibold capitalize">
					{weather.weather[0].description}
				</p>
				<div className="flex flex-col gap-2 text-secondary text-shadow-sm font-semibold">
					<p>Feels like: {weather.main.feels_like.toFixed(0)}°</p>
					<p>Humidity: {weather.main.humidity}%</p>
					<p>Wind: {weather.wind.speed} m/s</p>
				</div>
			</motion.div>
		</motion.div>
	);
}
