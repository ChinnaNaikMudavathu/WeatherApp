import {isEmpty} from 'lodash';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native';
import {Text, View} from 'react-native';
import {SearchedCitiesListProps} from './SearchedCitiesList.Models';
import SearchedCitiesListStyles from './SearchedCitiesList.styles';
import EvilIconsIcons from 'react-native-vector-icons/EvilIcons';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';

const SearchedCitiesList = (props: SearchedCitiesListProps) => {
  const { handleOnPressLocation} = props || {locations: []};
  const locations = useSelector((state: RootState) => state?.locations?.locations);
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
              <TouchableOpacity style={{margin: 16, marginBottom: 8}} onPress={() => {handleOnPressLocation(city)}}>
                <View style={{flexDirection: 'row'}}>
                  <EvilIconsIcons
                    name="location"
                    size={24}
                    color="#ffffff"
                    style={{marginRight: 4}}
                  />
                  <Text style={{fontSize: 20, color: 'black', flex: 1}} numberOfLines={2} >
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
