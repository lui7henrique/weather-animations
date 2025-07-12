import { format } from "date-fns";
import cloudy from "./assets/cloudy.webp";

const WEATHERS = [
	{
		id: 1,
		name: "Suzano",
		description: "Cloudy",
		temperature: 20,
		image: cloudy,
		high: 25,
		low: 15,
	},
];

function App() {
	return (
		<div className="flex flex-col items-center justify-center h-screen bg-background text-primary font-sans">
			<section className="space-y-4 max-w-md mx-auto w-full">
				{WEATHERS.map((weather) => (
					<div
						key={weather.id}
						className="bg-red-900 rounded-4xl px-6 py-4 w-full relative overflow-hidden"
					>
						<img
							src={weather.image}
							alt=""
							className="w-full h-full object-cover absolute top-0 left-0"
						/>

						<div className="relative z-10 flex flex-col gap-4">
							<div className="flex items-center justify-between">
								<div className="">
									<h1 className="text-primary text-2xl font-bold text-shadow-md">
										{weather.name}
									</h1>

									<p className="text-secondary">
										{format(new Date(), "HH:mm")}
									</p>
								</div>

								<p className="text-primary text-5xl text-shadow-md">
									{weather.temperature}°C
								</p>
							</div>

							<div className="flex items-center justify-between">
								<p className="text-secondary text-shadow-sm font-medium">
									{weather.description}
								</p>

								<p className="text-secondary text-shadow-sm font-medium">
									H:{weather.high}°C / L:{weather.low}°C
								</p>
							</div>
						</div>
					</div>
				))}
			</section>
		</div>
	);
}

export default App;
