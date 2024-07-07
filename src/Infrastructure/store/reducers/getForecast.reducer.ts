import {createSlice} from '@reduxjs/toolkit';
import {fetchForeCastAction} from '../Actions/getForecast.action';
import {GET_FORECAST_REDUCER} from '../Types';

const initialForecastState = {
  forecast: [],
  currentForecast: {},
};

export const getForecastReducer = createSlice({
  name: GET_FORECAST_REDUCER,
  initialState: initialForecastState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchForeCastAction?.fulfilled, (state, action) => {
      return {
        ...state,
        forecast: action?.payload?.forecast ?? [],
        currentForecast: action?.payload?.currentForecast ?? {},
      };
    });
  },
});

export default getForecastReducer.reducer;
