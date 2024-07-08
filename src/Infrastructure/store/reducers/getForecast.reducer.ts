import {createSlice} from '@reduxjs/toolkit';
import {fetchForeCastAction} from '../Actions/getForecast.action';
import {GET_FORECAST_REDUCER} from '../Types';

const initialForecastState = {
  forecast: [],
  currentForecast: {},
  isWeatherForeCastLoading: false,
};

export const getForecastReducer = createSlice({
  name: GET_FORECAST_REDUCER,
  initialState: initialForecastState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchForeCastAction?.pending, (state, action) => {
        return {...state, isWeatherForeCastLoading: true};
      })
      .addCase(fetchForeCastAction?.fulfilled, (state, action) => {
        return {
          ...state,
          forecast: action?.payload?.forecast ?? [],
          currentForecast: action?.payload?.currentForecast ?? {},
          isWeatherForeCastLoading: false,
        };
      }).addCase(fetchForeCastAction.rejected, (state, action) => {
        return {...state, forecast: [], currentForecast: {}, isWeatherForeCastLoading: false}
      })
  },
});

export default getForecastReducer.reducer;
