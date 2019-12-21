import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    width: '96%',
    shadowColor: '#2b2b2b',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 6,
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginVertical: 10,
    marginHorizontal: 0,
  },
});

const Frame = props => {
  const {main} = styles;
  return <View style={main}>{props.children}</View>;
};

export default Frame;
