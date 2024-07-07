import {createSlice} from '@reduxjs/toolkit';
import {fetchLocationsAction} from '../Actions/getLocations.action';
import {GET_LOCATIONS_REDUCER} from '../Types';

const initialLocationsState = {
  locations: [],
};

export const getLocationsReducer = createSlice({
  name: GET_LOCATIONS_REDUCER,
  initialState: initialLocationsState,
  reducers: {
    makeLocationsEmpty: (state) => {
      return {...state, locations: []};
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchLocationsAction?.fulfilled, (state, action) => {
      return {...state, locations: action?.payload};
    });
  },
});
export const {makeLocationsEmpty } = getLocationsReducer.actions;
export default getLocationsReducer.reducer;
