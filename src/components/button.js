import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Button = props => {
  const {buttonStyle, negativeButton, secondaryButton, textStyle} = styles;
  const {onPress, label, style, secondary, negative} = props;
  return (
    <>
      {!!negative ? (
        <View style={[negativeButton, style]}>
          <TouchableOpacity
            onPress={onPress}
            style={{alignSelf: 'stretch', borderRadius: 12, padding: 15}}>
            <Text
              style={{
                alignSelf: 'center',
                color: '#2686E5',
                fontSize: 14,
                fontFamily: 'Panton Regular',
              }}>
              {label}
            </Text>
          </TouchableOpacity>
        </View>
      ) : !!secondary ? (
        <View style={[secondaryButton, style]}>
          <TouchableOpacity
            onPress={onPress}
            style={{alignSelf: 'stretch', borderRadius: 12, padding: 15}}>
            <Text style={textStyle(!!secondary)}>{label}</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <LinearGradient
          start={{x: 0.48, y: -0.6}}
          end={{x: 0.52, y: 1.6}}
          colors={['#FFB202', '#FF4577']}
          style={[buttonStyle(!!secondary), style]}>
          <TouchableOpacity
            onPress={onPress}
            style={{alignSelf: 'stretch', borderRadius: 12, padding: 15}}>
            <Text style={textStyle(!!secondary)}>{label}</Text>
          </TouchableOpacity>
        </LinearGradient>
      )}
    </>
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
      margin: 4,
      borderWidth: secondary ? 1 : 0,
      borderColor: secondary ? '#FF6D2B' : '#fff',
      borderRadius: 12,
      shadowColor: '#222',
      shadowOffset: {width: 1, height: 2},
      shadowOpacity: 1,
      shadowRadius: 2,
      elevation: 4,
    };
  },
  secondaryButton: {
    height: 40,
    alignSelf: 'stretch',
    justifyContent: 'center',
    margin: 4,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#FF6D2B',
    borderRadius: 12,
    shadowColor: '#222',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 4,
  },
  negativeButton: {
    height: 40,
    alignSelf: 'stretch',
    justifyContent: 'center',
    margin: 4,
    borderWidth: 0,
  },
};

export default Button;
