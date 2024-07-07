import {isEmpty} from 'lodash';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ScrollView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import {SearchedCitiesListProps} from './SearchedCitiesList.Models';

import SearchedCitiesListStyles from './SearchedCitiesList.styles';

import EvilIconsIcons from 'react-native-vector-icons/EvilIcons';

import {RootState} from '../../../../store/store';

const SearchedCitiesList = (props: SearchedCitiesListProps) => {
  const {handleOnPressLocation} = props || {locations: []};
  const locations = useSelector(
    (state: RootState) => state?.locations?.locations,
  );
  if (isEmpty(locations)) return null;
  return (
    <View style={SearchedCitiesListStyles.container}>
      <ScrollView>
        {locations.map((city, index) => {
          return (
            <View
              style={
                locations?.length - 1 !== index ? {borderBottomWidth: 0.5} : {}
              }
              key={city.id}>
              <TouchableOpacity
                style={SearchedCitiesListStyles.locationButtonContainer}
                onPress={() => {
                  handleOnPressLocation(city);
                }}>
                <View style={SearchedCitiesListStyles.locationContainer}>
                  <EvilIconsIcons
                    name="location"
                    size={24}
                    color="#ffffff"
                    style={SearchedCitiesListStyles.locationIcon}
                  />
                  <Text
                    style={SearchedCitiesListStyles.locationText}
                    numberOfLines={2}>
                    {city?.name}, {city.country}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default SearchedCitiesList;
