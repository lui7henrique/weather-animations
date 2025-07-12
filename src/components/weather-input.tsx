import { Search } from "lucide-react";

export function WeatherInput() {
	return (
		<div className="bg-[#1E1C20] rounded-xl px-3 py-2 flex items-center gap-2 peer opacity-50 cursor-not-allowed">
			<Search className="size-6 text-tertiary" />

			<input
				type="text"
				placeholder="Search for a city"
				className="bg-transparent outline-none placeholder:text-tertiary text-xl disabled:cursor-not-allowed disabled:opacity-50"
				disabled
			/>
		</div>
	);
}
