import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Button = props => {
  const {buttonStyle, textStyle} = styles;
  const {onPress, label, style} = props;
  return (
    <View style={style}>
      <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Text style={textStyle}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};
//#B2 45     02 77
const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Panton Bold',
  },
  buttonStyle: {
    height: 40,
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#FF6D2B',
    margin: 4,
    borderRadius: 12,
    shadowColor: '#222',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 6,
    padding: 15,
  },
};

export default Button;
