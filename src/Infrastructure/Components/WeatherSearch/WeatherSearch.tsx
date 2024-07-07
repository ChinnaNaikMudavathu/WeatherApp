import React, {useCallback, useRef, useState} from 'react';
import {View, TextInput} from 'react-native';
import {WeatherSearchProps} from './WeatherSearch.Models';
import WeatherSearchStyles from './WeatherSearch.styles';
import {debounce, isEmpty} from 'lodash';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';

import SearchedCitiesList from './Components/SearchedCitiesList/SearchedCitiesList';

import {LocationProp} from './Components/SearchedCitiesList/SearchedCitiesList.Models';

import {fetchLocationsAction} from '../../store/Actions/getLocations.action';
import {fetchForeCastAction} from '../../store/Actions/getForecast.action';

import {makeLocationsEmpty} from '../../store/reducers/getLocations.reducer';
import {storeAsyncStorageItem} from '../../AsyncStorage/index';
import { ASYNC_STORAGE_KEYS } from '../../Shared/Constants/index';

const WeatherSearch = (props: WeatherSearchProps) => {
  const searWeatherRef = useRef(null);
  const dispatch = useDispatch();

  const handleOnSearchCityForWeather = async (city: string) => {
    if(isEmpty(city)) return null;
    dispatch(fetchLocationsAction({cityName: city}));
  };

  const weatherCityWithDebounce = useCallback(
    debounce(handleOnSearchCityForWeather, 1500),
    [],
  );

  const handleOnPressLocation = async (location: LocationProp) => {
    await storeAsyncStorageItem(ASYNC_STORAGE_KEYS.city, location.name);
    dispatch(makeLocationsEmpty());
    dispatch(
      fetchForeCastAction({
        cityName: location?.name,
        days: 5,
      }),
    );
    searWeatherRef?.current?.clear?.();
  };

  return (
    <View style={WeatherSearchStyles.container}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#647d8f',
          borderRadius: 34,
          justifyContent: 'space-between',
        }}>
        <TextInput
          ref={searWeatherRef}
          placeholder="Search city for weather..."
          placeholderTextColor={'#ffffff'}
          onChangeText={weatherCityWithDebounce}
          style={{
            padding: 16,
            borderRadius: 34,
            color: '#ffffff',
            fontSize: 16,
          }}
        />
        <AntDesignIcon
          color={'#ffffff'}
          size={30}
          onPress={() => {
            searWeatherRef?.current?.clear?.();
            dispatch(makeLocationsEmpty());
          }}
          name={'closecircleo'}
          style={{alignSelf: 'center', marginRight: 6}}
        />
      </View>
      <SearchedCitiesList handleOnPressLocation={handleOnPressLocation} />
    </View>
  );
};

export default WeatherSearch;
