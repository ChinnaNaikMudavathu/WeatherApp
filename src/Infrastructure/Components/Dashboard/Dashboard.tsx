import * as React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { WeatherBackgroundImage } from '../../../Assets/images/index';
import { DashboardProps } from './Dashboard.Models';

const Dashboard = (props: DashboardProps) => {
  console.log('dash')
  return (
    <View style={{ flex: 1, backgroundColor: 'green', }}>
      <ImageBackground style={{ flex: 1 }} source={WeatherBackgroundImage}>
        
      </ImageBackground>
    </View>
  );
};

export default Dashboard;
