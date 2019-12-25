import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import ColapsableInput from './colapsableInput';

import {refund_money, meetings_lines} from '../../../assets/icons';

const styles = StyleSheet.create({
  textInputGroupStyle: {
    width: '90%',
    borderColor: '#E3E5E6',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textFixedLeftStyle: {
    fontFamily: 'Panton Regular',
    paddingRight: 7,
    paddingVertical: 2,
    borderRightWidth: 1,
    margin: 0,
    borderColor: '#E3E5E6',
    color: '#C6CACC',
    height: '100%',
    textAlignVertical: 'center',
  },
  textInputStyle: {
    fontFamily: 'Panton Regular',
    padding: 0,
    paddingLeft: 6,
    width: '100%',
    paddingVertical: 2,
  },
});

const Input = props => {
  const {label, infoText, onChangeText, value, icon, textFixedLeft} = props;
  const {textInputGroupStyle, textInputStyle, textFixedLeftStyle} = styles;

  const iconToShow = icon == null || icon == undefined ? meetings_lines : icon;
  const showTextFixedLeft = !(
    textFixedLeft == null || textFixedLeft == undefined
  );
  return (
    <View style={{flex: 1, width: '100%'}}>
      <ColapsableInput
        infoText={infoText}
        icon={iconToShow}
        label={label}
        value={value}>
        <View style={[textInputGroupStyle]}>
          {showTextFixedLeft && (
            <Text style={[textFixedLeftStyle]}>{textFixedLeft}</Text>
          )}
          <TextInput
            style={[textInputStyle]}
            placeholder={infoText}
            onChangeText={onChangeText}
            value={value}
          />
        </View>
      </ColapsableInput>
    </View>
  );
};

export default Input;
