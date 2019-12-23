import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import ColapsableInput from './colapsableInput';

import {
  meetings_calendar2,
  meetings_clock,
  meetings_people,
  meetings_lines,
} from '../../../assets/icons';

const styles = StyleSheet.create({
  main: {
    width: '96%',
    shadowColor: '#2b2b2b',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 6,
    padding: 0,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginVertical: 10,
    marginHorizontal: 0,
  },
  textInputStyle: {
    width: '100%',
    borderColor: '#E3E5E6',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
});

const Input = props => {
  const {label, infoText, onChangeText, value} = props;
  const {main, textInputStyle} = styles;

  return (
    <View style={{flex: 1, width: '100%'}}>
      <ColapsableInput
        infoText={infoText}
        icon={meetings_lines}
        label={label}
        value={value}>
        <TextInput
          multiline
          placeholder={infoText}
          onChangeText={onChangeText}
          style={[textInputStyle]}
          value={value}
        />
      </ColapsableInput>
    </View>
  );
};

export default Input;
