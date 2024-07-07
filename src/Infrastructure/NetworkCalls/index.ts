import axios from 'axios';
import {WEATHER_FORECAST_API_KET} from '../Shared/Constants/index';
import {ApiCallProps, GetLocationsProps} from './NetworkCalls.Models';

export const apiCall = async (params: ApiCallProps) => {
  const options = {
    method: params.method,
    url: params?.endpoint ?? '',
  };
  try {
    const apiResponse = await axios.request(options);
    return apiResponse?.data ?? null;
  } catch (e: any) {
    return null;
  }
};

export const weatherForecastEndPoint = (params: GetLocationsProps): string => {
  return `http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_FORECAST_API_KET}&q=${
    params?.cityName ?? ''
  }&days=${params?.days ?? ''}&aqi=no&alerts=no`;
};

export const locationsEndPoint = (params: GetLocationsProps): string => {
  return `http://api.weatherapi.com/v1/search.json?key=${WEATHER_FORECAST_API_KET}&q=${
    params?.cityName ?? ''
  }`;
};
