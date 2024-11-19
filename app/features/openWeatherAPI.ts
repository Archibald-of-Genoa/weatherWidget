import getPosition from "./getPosition";

type OpenWeatherAPIProps = {    
    latitude: number;
    longitude: number;
};

type SimplifiedWeatherData = {
  pressure: number;
  humidity: number;
  wind_speed: number;
  sunrise: number;
  sunset: number;
  temp_celsius: number;
  summary: string;
};

export async function openWeatherAPI(): Promise<SimplifiedWeatherData | undefined> {
    
  const position = await getPosition();
  const params = new URLSearchParams({
    lat: position.latitude.toString(),
    lon: position.longitude.toString(),
    exclude: "minutely,hourly,daily,alerts", 
    appid: process.env.NEXT_PUBLIC_WEATHER_API_KEY || "",
    units: "metric" 
  });

  const url = `${process.env.NEXT_PUBLIC_WEATHER_API_URL}?${params.toString()}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching weather data: ${response.statusText}`);
    }
    const weatherData = await response.json();
    const simplifiedWeatherData: SimplifiedWeatherData = {
      pressure: weatherData.current.pressure,
      humidity: weatherData.current.humidity,
      wind_speed: weatherData.current.wind_speed,
      sunrise: weatherData.current.sunrise,
      sunset: weatherData.current.sunset,
      temp_celsius: weatherData.current.temp,
      summary: weatherData.current.weather[0].description,
    };
    return simplifiedWeatherData;
  } catch (error) {
    console.error("An error occurred while fetching weather data", error);
  }
}