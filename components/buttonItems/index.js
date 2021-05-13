import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const StyleButton = props => {
  const type = props.type;
  const cont = props.content;
  const oP = props.onPress;
  const bkgColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
  const txtColor = type === 'primary' ? '#FFFFFFA6' : '#171A20CC';

  return (
    <View>
      <Pressable
        style={
          (styles.button, {
            backgroundColor: bkgColor,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            height: 40,
            width: '90%',
            marginLeft: '5%',
            marginTop: '4%',
          })
        }
        onPress={() => oP ()}
      >
        <Text style={(styles.text, {color: txtColor})}>{cont}</Text>
      </Pressable>
    </View>
  );
};

export default StyleButton;
