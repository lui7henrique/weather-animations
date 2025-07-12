import { format } from "date-fns";
import clear from "./assets/clear.webp";
import rainy from "./assets/rainy.webp";
import snow from "./assets/snow.webp";

const WEATHERS = [
	{
		id: 1,
		name: "Suzano",
		description: "Cloudy",
		temperature: 20,
		image: clear,
		high: 25,
		low: 15,
	},
	{
		id: 2,
		name: "Caxias do Sul",
		description: "Snow",
		temperature: 20,
		image: snow,
		high: 20,
		low: 10,
	},
	{
		id: 3,
		name: "Fortaleza",
		description: "Rainy",
		temperature: 20,
		image: rainy,
		high: 20,
		low: 10,
	},
];

function App() {
	return (
		<div className="flex flex-col items-center justify-center h-screen bg-background text-primary font-sans">
			<section className="space-y-4 max-w-md mx-auto w-full">
				<h1 className="text-primary text-4xl font-semibold">Weather</h1>

				{WEATHERS.map((weather) => (
					<div
						key={weather.id}
						className="rounded-4xl px-6 py-4 w-full relative overflow-hidden cursor-pointer"
					>
						<img
							src={weather.image}
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
										{format(new Date(), "HH:mm")}
									</p>
								</div>

								<p className="text-primary text-6xl text-shadow-md">
									{weather.temperature}°
								</p>
							</div>

							<div className="flex items-center justify-between">
								<p className="text-secondary text-shadow-sm font-semibold">
									{weather.description}
								</p>

								<p className="text-secondary text-shadow-sm font-semibold">
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
