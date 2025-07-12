import { useSuspenseQuery } from "@tanstack/react-query";
import { motion, useAnimate, useDragControls } from "motion/react";
import { getWeather } from "../services/open-weather";
import { cn } from "../utils/cn";
import { getImage } from "../utils/get-image";
import { Weather10DayForecast } from "./weather-10-day-forecast";
import { WeatherDailyForecast } from "./weather-daily-forecast";

type WeatherDetailsProps = {
	city: string;
	onClose: () => void;
};

export default function WeatherDetails({ city, onClose }: WeatherDetailsProps) {
	const { data: weather } = useSuspenseQuery({
		queryKey: ["weather", city],
		queryFn: () => getWeather(city),
	});

	const [scope, animate] = useAnimate();
	const dragControls = useDragControls();

	return (
		<motion.div
			layoutId={`weather-card-${city}`}
			className={cn(
				"fixed inset-0 z-50 mt-24 rounded-t-4xl sm:max-w-md sm:aspect-[9/16] sm:rounded-4xl sm:m-auto overflow-hidden",
			)}
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{
				opacity: 1,
				scale: 1,
				transition: { duration: 0.3, ease: "easeInOut" },
			}}
			exit={{
				y: "100%",
				opacity: 0,
				scale: 0.8,
				transition: { duration: 0.3, ease: "easeInOut" },
			}}
			drag="y"
			dragControls={dragControls}
			dragConstraints={{ top: 0 }}
			onDragEnd={(_, info) => {
				const shouldClose = info.offset.y > 120 || info.velocity.y > 800;
				if (shouldClose) {
					onClose();
				} else {
					animate(
						scope.current,
						{ y: 0 },
						{ type: "spring", stiffness: 300, damping: 30 },
					);
				}
			}}
			ref={scope}
		>
			<img
				src={getImage(weather)}
				alt=""
				className="w-full h-full object-cover absolute top-0 left-0"
			/>

			<motion.div
				className="relative h-full"
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
				<div
					className="absolute top-0 left-0 w-full h-10"
					onPointerDown={(e) => dragControls.start(e)}
				>
					<div className="w-16 h-1 bg-background-muted rounded-full mx-auto mt-2 cursor-grab active:cursor-grabbing" />
				</div>

				<div className="flex flex-col items-center text-primary pb-10 px-6 scrollbar-sm h-full overflow-y-auto overscroll-none">
					<h1 className="text-4xl font-medium text-shadow-md mt-20">
						{weather.name}
					</h1>

					<p className="text-8xl text-shadow-md tabular-nums">
						{weather.main.temp.toFixed(0)}°
					</p>

					<p className="text-secondary text-shadow-sm font-semibold capitalize text-xl">
						{weather.weather[0].description}
					</p>

					<div className="flex items-center gap-2 mb-[94px]">
						<p className="text-secondary text-shadow-sm font-semibold tabular-nums">
							H:{weather.main.temp_max.toFixed(0)}°
						</p>

						<p className="text-secondary text-shadow-sm font-semibold tabular-nums">
							L:{weather.main.temp_min.toFixed(0)}°
						</p>
					</div>

					<WeatherDailyForecast />
					<Weather10DayForecast />
				</div>
			</motion.div>
		</motion.div>
	);
}
