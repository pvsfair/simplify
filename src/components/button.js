import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Button = props => {
  const {buttonStyle, textStyle} = styles;
  const {onPress, label, style, secondary} = props;
  return (
    <View style={style}>
      <TouchableOpacity onPress={onPress} style={buttonStyle(!!secondary)}>
        <Text style={textStyle(!!secondary)}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  textStyle: secondary => {
    return {
      alignSelf: 'center',
      color: secondary ? '#FF6D2B' : '#fff',
      fontSize: 14,
      fontFamily: 'Panton Bold',
    };
  },
  buttonStyle: secondary => {
    return {
      height: 40,
      alignSelf: 'stretch',
      justifyContent: 'center',
      backgroundColor: secondary ? '#fff' : '#FF6D2B',
      margin: 4,
      borderWidth: secondary ? 1 : 0,
      borderColor: secondary ? '#FF6D2B' : '#fff',
      borderRadius: 12,
      shadowColor: '#222',
      shadowOffset: {width: 1, height: 2},
      shadowOpacity: 1,
      shadowRadius: 2,
      elevation: 4,
      padding: 15,
    };
  },
};

export default Button;
