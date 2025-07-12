import { Suspense } from "react";
import { WeatherCard } from "./components/weather-card";
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
	return (
		<div className="flex flex-col items-center justify-center h-screen bg-background text-primary font-sans">
			<section className="space-y-4 max-w-md mx-auto w-full overflow-y-auto py-10">
				<h1 className="text-primary text-4xl font-semibold">Weather</h1>
				<WeatherInput />

				{CITIES.map((city) => (
					<Suspense key={city.id} fallback={<div>Loading...</div>}>
						<WeatherCard city={city.name} />
					</Suspense>
				))}
			</section>
		</div>
	);
}
