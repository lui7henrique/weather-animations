import {
	Cloud,
	CloudLightning,
	CloudRain,
	CloudSnow,
	type LucideIcon,
	Sun,
} from "lucide-react";

type WeatherIcons = Record<string, LucideIcon>;

export const weatherIcons: WeatherIcons = {
	clouds: Cloud,
	rain: CloudRain,
	clear: Sun,
	thunderstorm: CloudLightning,
	snow: CloudSnow,
};
