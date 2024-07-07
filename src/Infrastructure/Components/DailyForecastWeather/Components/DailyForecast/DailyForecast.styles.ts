import {StyleSheet} from 'react-native/';

const DailyForecastStyles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#526b7d',
    borderRadius: 16,
  },
  weatherConditionImage: {width: 35, height: 35, borderRadius: 15},
  weatherConditionName: {color: '#c3d1db', fontSize: 16, fontWeight: '500'},
  weatherTemperature: {color: '#ffffff', fontSize: 24, fontWeight: 'bold'}
});

export default DailyForecastStyles;
