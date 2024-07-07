import {StyleSheet} from 'react-native/';

const WeatherSearchStyles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 16,
  },
  searchHeaderContainer: {
    flexDirection: 'row',
    backgroundColor: '#647d8f',
    borderRadius: 34,
    justifyContent: 'space-between',
  },
  search: {
    padding: 16,
    borderRadius: 34,
    color: '#ffffff',
    fontSize: 16,
  },
});

export default WeatherSearchStyles;
