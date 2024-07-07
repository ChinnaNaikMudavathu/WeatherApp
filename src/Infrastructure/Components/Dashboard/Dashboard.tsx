import * as React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import DailyForecastWeather from '../DailyForecastWeather/DailyForecastWeather';
import {DashboardProps} from './Dashboard.Models';

import DashboardStyles from './Dashboard.styles';
const Dashboard = (props: DashboardProps) => {
  return (
    <View style={DashboardStyles.container}>
      <ImageBackground
        style={DashboardStyles.container}
        source={{
          uri: 'https://img.freepik.com/premium-photo/clouds-rainy-weather-rainy-sky_666008-372.jpg',
        }}>
        <DailyForecastWeather />
      </ImageBackground>
    </View>
  );
};

export default Dashboard;
