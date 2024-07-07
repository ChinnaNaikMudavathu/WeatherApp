export interface ForeCastCondition {
    icon: string;
    text: string;
}

export interface CurrentForeCast {
    condition: ForeCastCondition,
    temp_c: number;
    wind_kph: number;
    humidity: number;
    location: { name: string, country: string }
}

export interface ForeCast {
    day: { avghumidity: number; avgtemp_c: number; condition: ForeCastCondition};
    date: string;
}

export interface ForeCastResponse {
    forecastday: ForeCast[]
}

export interface ForeCastProps {
    current: CurrentForeCast;
    forecast: ForeCastResponse;
    location: {name: string; country: string}
}
export interface DailyForecastWeatherProps {
}