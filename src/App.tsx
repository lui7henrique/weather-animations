import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Suspense, useState } from "react";
import { WeatherCard } from "./components/weather-card";
import WeatherDetails from "./components/weather-details";
import { WeatherInput } from "./components/weather-input";

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

	return (
		<div className="flex flex-col items-center justify-center h-screen text-primary font-sans bg-black">
			<motion.section
				className="space-y-4 max-w-md mx-auto w-full py-10 bg-red-500"
				animate={
					showDetails ? { opacity: 0.2, scale: 0.9 } : { opacity: 1, scale: 1 }
				}
				transition={{ duration: 0.2, ease: "easeInOut" }}
				onClick={() => setShowDetails(true)}
			>
				<h1 className="text-primary text-4xl font-semibold">Weather</h1>

				<WeatherInput />

				{CITIES.map((city) => (
					<Suspense key={city.id} fallback={<div>Loading...</div>}>
						<WeatherCard
							city={city.name}
							onClick={() => {
								setSelectedCity(city.name);
								setShowDetails(true);
							}}
						/>
					</Suspense>
				))}
			</motion.section>

			<AnimatePresence>
				{showDetails && (
					<WeatherDetails
						city={selectedCity}
						onClose={() => setShowDetails(false)}
					/>
				)}
			</AnimatePresence>
		</div>
	);
}
