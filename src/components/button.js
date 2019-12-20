import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = props => {
  const {buttonStyle, textStyle} = styles;
  const {onPress, label} = props;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonStyle: {
    height: 45,
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#38ba7d',
    borderBottomWidth: 6,
    borderBottomColor: '#1e6343',
    borderRightWidth: 6,
    borderRightColor: '#0d4222',
    borderTopWidth: 4,
    borderTopColor: '#68eaad',
    borderLeftWidth: 4,
    borderLeftColor: '#58da9d',
    borderWidth: 1,
    marginTop: 5,
    borderRadius: 15,
  },
};

export default Button;
