import {isEmpty} from 'lodash';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {Keyboard, Text, TouchableWithoutFeedback, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {getAsyncStorageItem} from '../../AsyncStorage/index';
import {ASYNC_STORAGE_KEYS} from '../../Shared/Constants/index';
import {fetchForeCastAction} from '../../store/Actions/getForecast.action';
import {makeLocationsEmpty} from '../../store/reducers/getLocations.reducer';
import SelectedCityCurrentWeather from '../SelectedCityCurrentWeather/SelectedCityCurrentWeather';
import WeatherSearch from '../WeatherSearch/WeatherSearch';
import DailyForecastList from './Components/DailyForecastList/DailyForecastList';
import {DailyForecastWeatherProps} from './DailyForecastWeather.Models';
import DailyForecastWeatherStyles from './DailyForecastWeather.styles';

const DailyForecastWeather = (props: DailyForecastWeatherProps) => {
  const [isWeatherForeCastLoading, setIsWeatherForeCastLoading] =
    useState(false);
  const dispatch = useDispatch();
  const fetchInitialWeatherForecast = async () => {
    try {
      const previouslySearchedCity = await getAsyncStorageItem(
        ASYNC_STORAGE_KEYS.city,
      );
      const cityName = !isEmpty(previouslySearchedCity)
        ? previouslySearchedCity
        : 'bangalore';
      dispatch(makeLocationsEmpty());
      dispatch(
        fetchForeCastAction({
          cityName,
          days: 5,
        }),
      );
    } catch (e: any) {}
  };

  useEffect(() => {
    fetchInitialWeatherForecast();
  }, []);

  const handleOnPressMainContainer = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleOnPressMainContainer}>
      <View style={DailyForecastWeatherStyles.container}>
        <WeatherSearch />
        {isWeatherForeCastLoading ? (
          <ActivityIndicator
            size={'large'}
            style={{marginTop: '20%'}}
            color={'#ffffff'}
          />
        ) : (
          <View style={{flex: 1}}>
            <SelectedCityCurrentWeather />
            <View style={{marginHorizontal: 16, marginBottom: 16}}>
              <Text style={{fontSize: 16, color: '#ffffff', fontWeight: '700'}}>
                Daily forecast
              </Text>
            </View>
            <DailyForecastList />
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default DailyForecastWeather;
