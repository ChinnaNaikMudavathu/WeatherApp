import * as React from 'react';
import {Image, Text, View} from 'react-native';
import {SelectedCityCurrentWeatherProps} from './SelectedCityCurrentWeather.Models';
import SelectedCityCurrentWeatherStyles from './SelectedCityCurrentWeather.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';

const SelectedCityCurrentWeather = (props: SelectedCityCurrentWeatherProps) => {
  const currentWeatherForeCast = useSelector(
    (state: RootState) => state?.forecast?.currentForecast,
  );
  const forecastUpdatedTime = new Date(currentWeatherForeCast?.last_updated ?? '');
  return (
    <View style={SelectedCityCurrentWeatherStyles.container}>
      <View style={SelectedCityCurrentWeatherStyles.weatherDetailsContainer}>
        <Text style={SelectedCityCurrentWeatherStyles.selectedCityText}>
          {currentWeatherForeCast?.location?.name ?? ''},{' '}
          <Text style={SelectedCityCurrentWeatherStyles.selectedCountryText}>
            {currentWeatherForeCast?.location?.country ?? ''}
          </Text>
        </Text>
        <Image
          style={SelectedCityCurrentWeatherStyles.weatherConditionImage}
          source={{
            uri: `https:${currentWeatherForeCast?.condition?.icon ?? ''}`,
          }}
        />
        <View style={SelectedCityCurrentWeatherStyles.weatherDetails}>
          <Text style={SelectedCityCurrentWeatherStyles.weatherDetailsOne}>
            {currentWeatherForeCast?.temp_c ?? 0}&#176;
          </Text>
          <Text style={SelectedCityCurrentWeatherStyles.weatherDetailsTwo}>
            {currentWeatherForeCast?.condition?.text}
          </Text>
        </View>
      </View>
      <View
        style={SelectedCityCurrentWeatherStyles.selectedCityWeatherInfoContainer}>
        <View
          style={SelectedCityCurrentWeatherStyles.selectedCityWeatherInfoSubOneContainer}>
          <FeatherIcon
            name="wind"
            size={16}
            color="#ffffff"
            style={SelectedCityCurrentWeatherStyles.windIconStyle}
          />
          <Text style={SelectedCityCurrentWeatherStyles.windStyle}>
            {currentWeatherForeCast?.wind_kph ?? 0}km
          </Text>
        </View>
        <View
          style={SelectedCityCurrentWeatherStyles.selectedCityWeatherInfoSubTwoContainer}>
          <FeatherIcon
            name="droplet"
            size={16}
            color="#ffffff"
            style={SelectedCityCurrentWeatherStyles.humidityIcon}
          />
          <Text style={SelectedCityCurrentWeatherStyles.humidityText}>
            {currentWeatherForeCast?.humidity ?? 0}%
          </Text>
        </View>
        <View
          style={SelectedCityCurrentWeatherStyles.dayContainer}>
          <Ionicons
            name="sunny-outline"
            size={16}
            color="#ffffff"
            style={SelectedCityCurrentWeatherStyles.windIconStyle}
          />
          <Text style={SelectedCityCurrentWeatherStyles.windStyle}>
            {`${forecastUpdatedTime.getHours()}:${forecastUpdatedTime.getMinutes()} ${forecastUpdatedTime.getHours()/12 ? 'PM' : 'AM'}`}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SelectedCityCurrentWeather;
