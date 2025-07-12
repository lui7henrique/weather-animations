export function WeatherDetailsDescription() {
	return (
		<div className="mt-[94px] mx-6 bg-background/20 backdrop-blur-md px-6 py-4 rounded-[18px]">
			<p>
				Partly cloudy conditions expected around 12:00. Wind gusts are up to 19
				km/h.
			</p>

			<div className="border-b border-white/10 my-4" />

			<div className="flex gap">
				<div className="flex flex-col items-center">
					<span className="font-bold">Now</span>
					<span>Icon</span>
					<span>21°</span>
				</div>
			</div>
		</div>
	);
}
