import * as React from 'react';
import {FlatList} from 'react-native';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../store/store';
import {ForeCast} from '../../DailyForecastWeather.Models';
import DailyForecast from '../DailyForecast/DailyForecast';
import {DailyForecastListProps} from './DailyForecastList.Models';
import DailyForecastListStyles from './DailyForecastList.styles';

const DailyForecastList = (props: DailyForecastListProps) => {
  const forecast = useSelector((state: RootState) => state?.forecast?.forecast);
  const renderForeCast = ({item, index}: {item: ForeCast; index: number}) => {
    return (
      <View
        key={item?.day?.condition?.icon + index}
        style={index === 0 ? {marginLeft: 8, marginRight: 8} : {marginRight: 8}}>
        <DailyForecast foreCastInfo={item} />
      </View>
    );
  };
  return (
    <View style={DailyForecastListStyles.container}>
      <FlatList
        data={forecast}
        extraData={forecast}
        keyExtractor={(item, index) => item?.date + index}
        renderItem={renderForeCast}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default DailyForecastList;
