export type WeatherResponse = {
	coord: Coord;
	weather: Weather[];
	base: string;
	main: Main;
	visibility: number;
	wind: Wind;
	clouds: Clouds;
	dt: number;
	sys: Sys;
	timezone: number;
	id: number;
	name: string;
	cod: number;
};

export type Clouds = {
	all: number;
};

export type Coord = {
	lon: number;
	lat: number;
};

export type Main = {
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
	pressure: number;
	humidity: number;
	sea_level: number;
	grnd_level: number;
};

export type Sys = {
	type: number;
	id: number;
	country: string;
	sunrise: number;
	sunset: number;
};

export type Weather = {
	id: number;
	main: "Thunderstorm" | "Drizzle" | "Rain" | "Snow" | "Clear" | "Clouds";
	description: string;
	icon: string;
};

export type Wind = {
	speed: number;
	deg: number;
};
