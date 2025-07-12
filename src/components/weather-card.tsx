import { useSuspenseQuery } from "@tanstack/react-query";
import { formatDate } from "date-fns";
import { motion } from "motion/react";
import type { ComponentProps } from "react";
import { ANIMATION_DURATION } from "../constants/animation";
import { getWeather } from "../services/open-weather";
import { getImage } from "../utils/get-image";

type WeatherCardProps = {
	city: string;
} & ComponentProps<typeof motion.div>;

export function WeatherCard({ city, ...props }: WeatherCardProps) {
	const { data: weather } = useSuspenseQuery({
		queryKey: ["weather", city],
		queryFn: () => getWeather(city),
	});

	return (
		<motion.div
			key={weather.id}
			layoutId={`weather-card-${city}`}
			className="rounded-4xl px-6 py-4 w-full relative overflow-hidden cursor-pointer"
			whileTap={{
				scale: 0.93,
				transition: { duration: ANIMATION_DURATION, ease: "easeInOut" },
			}}
			transition={{ duration: ANIMATION_DURATION, ease: "easeInOut" }}
			{...props}
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
		</motion.div>
	);
}

export function WeatherCardSkeleton() {
	return (
		<motion.div className="rounded-4xl w-full h-[136px] bg-foreground animate-pulse" />
	);
}
