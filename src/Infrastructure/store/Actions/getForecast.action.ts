import {createAsyncThunk} from '@reduxjs/toolkit';
import { ForeCast } from '../../Components/DailyForecastWeather/DailyForecastWeather.Models';
import {apiCall, weatherForecastEndPoint} from '../../NetworkCalls/index';
import {GetLocationsProps} from '../../NetworkCalls/NetworkCalls.Models';
import {API_METHODS} from '../../Shared/Constants/index';
import {GET_FORECAST_ACTION} from '../Types';

export const fetchForeCastAction = createAsyncThunk(GET_FORECAST_ACTION, async (params: GetLocationsProps) => {
    try {
      const forecastData = await apiCall({
        endpoint: weatherForecastEndPoint(params),
        method: API_METHODS.GET,
      });

      const modifiedForCastList =
        forecastData?.forecast?.forecastday?.map((foreCast: ForeCast) => {
          return {
            day: foreCast?.day ?? {},
            date: foreCast?.date ?? '',
          };
        }) ?? [];
      return {
        forecast: modifiedForCastList,
        currentForecast: {
          ...forecastData?.current ?? {},
          location: forecastData?.location ?? {},
        },
      };
    } catch (error: any) {
      return [];
    }
  })
