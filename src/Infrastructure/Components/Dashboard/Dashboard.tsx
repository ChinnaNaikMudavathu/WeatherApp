import * as React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {WeatherBackgroundImage} from '../../../Assets/images/index';
import DailyForecastWeather from '../DailyForecastWeather/DailyForecastWeather';
import {DashboardProps} from './Dashboard.Models';

const Dashboard = (props: DashboardProps) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={{flex: 1}}
        source={{
          uri: 'https://img.freepik.com/premium-photo/clouds-rainy-weather-rainy-sky_666008-372.jpg',
        }}>
        <DailyForecastWeather />
      </ImageBackground>
    </View>
  );
};

export default Dashboard;
