import {StyleSheet} from 'react-native';

const DailyForecastWeatherStyles = StyleSheet.create({
  container: {flex: 1},
  loaderContainer: {marginTop: '20%'},
  forecastContainer: {marginHorizontal: 16, marginBottom: 16, flexDirection: 'row', alignItems: 'center'},
  forecastSubContainer:{fontSize: 16, color: '#ffffff', fontWeight: '700'}
});

export default DailyForecastWeatherStyles;
