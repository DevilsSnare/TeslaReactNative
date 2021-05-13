import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import styles from './styles';
import ButtonItem from '../buttonItems';

const carItem = props => {
  const {name, tagline, taglineCTA, image} = props;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline}<Text> {taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonItem
          type="primary"
          content={'Custom Order'}
          onPress={() => {
            console.warn ('Custom Order was pressed!');
          }}
        />
        <ButtonItem
          type="secondary"
          content={'Existing Inventory'}
          onPress={() => {
            console.warn ('Existing Inventory was pressed!');
          }}
        />
      </View>
    </View>
  );
};
export default carItem;
