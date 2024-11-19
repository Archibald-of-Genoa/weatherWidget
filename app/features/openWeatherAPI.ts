import getPosition  from "./getPosition";
import type { Get } from 'type-fest';

type WeatherAPIResponse = {
  current: {
    pressure: number;
    humidity: number;
    wind_speed: number;
    sunrise: number;
    sunset: number;
    temp: number;
    weather: {
      description: string
    }[]
  };
}

type SimplifiedWeatherData = Omit<Get<WeatherAPIResponse, 'current'>, 'weather' | 'temp'> & {
  temp_celsius: number;
  summary: string;
}

export async function openWeatherAPI(): Promise<
  SimplifiedWeatherData | undefined
> {
  if (!process.env.NEXT_PUBLIC_WEATHER_API_KEY) {
    throw new Error("no NEXT_PUBLIC_WEATHER_API_KEY defined");
  }
  if (!process.env.NEXT_PUBLIC_WEATHER_API_URL) {
    throw new Error('no NEXT_PUBLIC_WEATHER_API_URL defined')
  }
  try {
    const { latitude, longitude } = await getPosition();
    console.log(latitude, longitude)
    const params = new URLSearchParams({
      lat: latitude.toString(),
      lon: longitude.toString(),
      exclude: "minutely,hourly,daily,alerts",
      appid: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
      units: "metric",
    });

    const url = `${process.env.NEXT_PUBLIC_WEATHER_API_URL}?${params.toString()}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error fetching weather data: ${response.statusText}`);
      }
      const { current } = await response.json() as WeatherAPIResponse;
      return {
        ...current, 
        ...{
          temp_celsius: current.temp,
          summary: current.weather[0].description,
        }
      };
    } catch (error) {
      console.error("An error occurred while fetching weather data", error);
    }
  } catch (e) {
    console.error(e);
  }
}
