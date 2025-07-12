import { AnimatePresence, motion } from "motion/react";
import { Suspense, useEffect, useState } from "react";
import { WeatherCard, WeatherCardSkeleton } from "./components/weather-card";
import WeatherDetails from "./components/weather-details";
import { WeatherInput } from "./components/weather-input";
import { cn } from "./utils/cn";

const CITIES = [
	{
		id: 1,
		name: "New York",
	},
	{
		id: 2,
		name: "São Paulo",
	},
	{
		id: 3,
		name: "Cairo",
	},
];

export function App() {
	const [showDetails, setShowDetails] = useState(false);
	const [selectedCity, setSelectedCity] = useState("");

	useEffect(() => {
		if (showDetails) {
			document.body.style.overflow = "hidden";
			document.body.style.scrollBehavior = "none";

			return () => {
				document.body.style.overflow = "";
				document.body.style.scrollBehavior = "smooth";
			};
		}
	}, [showDetails]);

	return (
		<div className={cn("h-screen")}>
			<motion.section
				className={cn(
					"bg-background text-primary size-full ease-out flex items-center justify-center overflow-hidden",
				)}
			>
				<div className="space-y-4 max-w-md mx-auto w-full py-10 px-6 sm:px-0">
					<h1 className="text-4xl font-semibold">Weather</h1>

					<WeatherInput />

					{CITIES.map((city) => (
						<Suspense key={city.id} fallback={<WeatherCardSkeleton />}>
							<WeatherCard
								city={city.name}
								onClick={() => {
									setSelectedCity(city.name);
									setShowDetails(true);
								}}
							/>
						</Suspense>
					))}
				</div>
			</motion.section>

			<AnimatePresence>
				{showDetails && (
					<>
						<motion.div
							className="fixed inset-0 bg-black/50 z-40"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setShowDetails(false)}
						/>

						<Suspense fallback={<div />}>
							<WeatherDetails
								city={selectedCity}
								onClose={() => setShowDetails(false)}
							/>
						</Suspense>
					</>
				)}
			</AnimatePresence>
		</div>
	);
}
