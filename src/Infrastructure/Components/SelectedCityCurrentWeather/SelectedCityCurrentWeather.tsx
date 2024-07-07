import * as React from 'react';
import {Image, Text, View} from 'react-native';
import {SelectedCityCurrentWeatherProps} from './SelectedCityCurrentWeather.Models';
import SelectedCityCurrentWeatherStyles from './SelectedCityCurrentWeather.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const SelectedCityCurrentWeather = (props: SelectedCityCurrentWeatherProps) => {
  const currentWeatherForeCast = useSelector((state: RootState) => state?.forecast?.currentForecast);
  return (
    <View style={SelectedCityCurrentWeatherStyles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            fontSize: 24,
            color: '#ffffff',
            fontWeight: 'bold',
            marginBottom: 16,
          }}>
          {currentWeatherForeCast?.location?.name ?? ''},{' '}
          <Text style={{fontSize: 18, color: '#c3d1db', fontWeight: '500'}}>
            {currentWeatherForeCast?.location?.country ?? ''}
          </Text>
        </Text>
        <Image
          style={{
            width: '45%',
            height: '45%',
            marginBottom: 24,
            borderRadius: 24,
          }}
          source={{
            uri: `https:${currentWeatherForeCast?.condition?.icon ?? ''}`
          }}
        />
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 50, color: '#ffffff', fontWeight: 'bold'}}>
            {currentWeatherForeCast?.temp_c ?? 0}&#176;
          </Text>
          <Text style={{fontSize: 16, color: '#ffffff', fontWeight: '700'}}>
            {currentWeatherForeCast?.condition?.text}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          margin: 24,
          marginBottom: 0,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FeatherIcon
            name="wind"
            size={16}
            color="#ffffff"
            style={{marginRight: 4}}
          />
          <Text style={{fontSize: 16, color: '#ffffff', fontWeight: '700'}}>
            {currentWeatherForeCast?.wind_kph ?? 0}km
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FeatherIcon
            name="droplet"
            size={16}
            color="#ffffff"
            style={{marginRight: 4}}
          />
          <Text style={{fontSize: 16, color: '#ffffff', fontWeight: '700'}}>
            {currentWeatherForeCast?.humidity ?? 0}%
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicons
            name="sunny-outline"
            size={16}
            color="#ffffff"
            style={{marginRight: 4}}
          />
          <Text style={{fontSize: 16, color: '#ffffff', fontWeight: '700'}}>
            6.06 AM
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SelectedCityCurrentWeather;
