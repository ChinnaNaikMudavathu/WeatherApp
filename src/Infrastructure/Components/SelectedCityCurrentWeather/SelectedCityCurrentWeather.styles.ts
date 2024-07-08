import {StyleSheet} from 'react-native';

const SelectedCityCurrentWeather = StyleSheet.create({
  container: {},
  weatherDetailsContainer: {justifyContent: 'center', alignItems: 'center'},
  selectedCityText: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  selectedCountryText: {fontSize: 18, color: '#c3d1db', fontWeight: '500'},
  weatherConditionImage: {
    width: '45%',
    height: '45%',
    marginBottom: 24,
    borderRadius: 24,
  },
  weatherDetails: {justifyContent: 'center', alignItems: 'center'},
  weatherDetailsOne: {fontSize: 50, color: '#ffffff', fontWeight: 'bold'},
  weatherDetailsTwo: {fontSize: 16, color: '#ffffff', fontWeight: '700'},
  selectedCityWeatherInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 24,
    marginBottom: 0,
  },
  selectedCityWeatherInfoSubOneContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  windIconStyle: {marginRight: 4},
  windStyle: {fontSize: 16, color: '#ffffff', fontWeight: '700'},
  selectedCityWeatherInfoSubTwoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  humidityIcon: {marginRight: 4},
  humidityText: {fontSize: 16, color: '#ffffff', fontWeight: '700'},
  dayContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default SelectedCityCurrentWeather;
