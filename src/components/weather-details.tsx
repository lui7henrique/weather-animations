import { useSuspenseQuery } from "@tanstack/react-query";
import { motion } from "motion/react";
import { Suspense } from "react";
import { getWeather } from "../services/open-weather";
import { getImage } from "../utils/get-image";
import { WeatherDailyForecast } from "./weather-daily-forecast";

type WeatherDetailsProps = {
	city: string;
	onClose: () => void;
};

export default function WeatherDetails({ city }: WeatherDetailsProps) {
	const { data: weather } = useSuspenseQuery({
		queryKey: ["weather", city],
		queryFn: () => getWeather(city),
	});

	console.log({ weather });

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
				className="w-full h-full object-cover absolute top-0 left-0"
			/>

			<motion.div
				className="relative z-10 flex flex-col items-center text-primary"
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
				<h1 className="text-4xl font-medium text-shadow-md mt-20">
					{weather.name}
				</h1>

				<p className="text-8xl text-shadow-md tabular-nums">
					{weather.main.temp.toFixed(0)}°
				</p>

				<p className="text-secondary text-shadow-sm font-semibold capitalize text-xl">
					{weather.weather[0].description}
				</p>

				<div className="flex items-center gap-2">
					<p className="text-secondary text-shadow-sm font-semibold tabular-nums">
						H:{weather.main.temp_max.toFixed(0)}°
					</p>

					<p className="text-secondary text-shadow-sm font-semibold tabular-nums">
						L:{weather.main.temp_min.toFixed(0)}°
					</p>
				</div>

				<Suspense fallback={<div />}>
					<WeatherDailyForecast />
				</Suspense>
			</motion.div>
		</motion.div>
	);
}
