import {StyleSheet} from 'react-native';

const SearchedCitiesListStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 60,
    height: 400,
    zIndex: 1,
    backgroundColor: '#ffffff',
    width: '100%',
    borderRadius: 34,
  },
  locationButtonContainer: {margin: 16, marginBottom: 8},
  locationContainer: {flexDirection: 'row'},
  locationIcon: {marginRight: 4},
  locationText: {fontSize: 20, color: 'black', flex: 1}
});

export default SearchedCitiesListStyles;
