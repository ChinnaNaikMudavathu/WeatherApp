import {createAsyncThunk} from '@reduxjs/toolkit';
import {apiCall, locationsEndPoint} from '../../NetworkCalls/index';
import {GetLocationsProps} from '../../NetworkCalls/NetworkCalls.Models';
import {API_METHODS} from '../../Shared/Constants/index';
import {GET_LOCATIONS_ACTION} from '../Types';

export const fetchLocationsAction = createAsyncThunk(
  GET_LOCATIONS_ACTION,
  async (params: GetLocationsProps) => {
    try {
      const locationsData = await apiCall({
        endpoint: locationsEndPoint(params),
        method: API_METHODS.GET,
      });
      return locationsData;
    } catch (error: any) {
      return [];
    }
  },
);
