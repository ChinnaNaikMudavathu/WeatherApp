import * as React from 'react';
import {Image, Text, View} from 'react-native';
import {DailyForecastProps} from './DailyForecast.Models';
import DailyForecastStyles from './DailyForecast.styles';

const DailyForecast = (props: DailyForecastProps) => {
  const {foreCastInfo} = props || {};
  const date = new Date(foreCastInfo?.date);
  const options = { weekday: 'long' };
  const dayName = date.toLocaleDateString('en-in', options)?.split(',')?.[0];
  return (
    <View style={DailyForecastStyles.container}>
      <Image
        style={{width: 35, height: 35, borderRadius: 15}}
        source={{uri: `https:${foreCastInfo?.day?.condition?.icon ?? ''}`}}
      />
      <Text style={{color: '#c3d1db', fontSize: 16, fontWeight: '500'}}>
        {dayName}
      </Text>
      <Text style={{color: '#ffffff', fontSize: 24, fontWeight: 'bold'}}>
        {foreCastInfo?.day?.avgtemp_c ?? 0}&#176;
      </Text>
    </View>
  );
};

export default DailyForecast;
