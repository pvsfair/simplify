import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    width: '97%',
    margin: 4,
    shadowColor: '#2c2c2c',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 4,
    paddingLeft: 20,
    borderRadius: 6,
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
});

const Frame = props => {
  const {main} = styles;
  return (
    <View style={main}>
      <Text>{props.children}</Text>
    </View>
  );
};

export default Frame;
