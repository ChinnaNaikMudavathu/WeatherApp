import {createSlice} from '@reduxjs/toolkit';
import {GET_SELECTED_CITY_WEATHER_FORECAST_REDUCER} from '../Types';

const initialState = {
  city: '',
};

const getSelectedCityReducer = createSlice({
  name: GET_SELECTED_CITY_WEATHER_FORECAST_REDUCER,
  initialState: initialState,
  reducers: {
    updateStoreSelectedCity: (state, action) => {
      return {...state, city: action.payload};
    },
  },
});

export const {updateStoreSelectedCity} = getSelectedCityReducer.actions;

export default getSelectedCityReducer.reducer;
