import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import styles from './styles';
import Cars from './cars';
import CarItem from '../carItems';
const CarsList = props => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Cars}
        renderItem={({item}) => <CarItem car={item} />}
        decelerationRate={'normal'}
        snapToAlignment={'start'}
        snapToInterval={Dimensions.get ('window').height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CarsList;
