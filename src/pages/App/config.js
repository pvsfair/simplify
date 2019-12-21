import React, {Component} from 'react';
import {View, ScrollView, Text, StyleSheet, Image} from 'react-native';
import {home_meeting, home_refund, home_money} from '../../../assets/images';

import Card from '../../components/homeCard';
import TopBar from '../../components/topBar';

const styles = StyleSheet.create({
  scroll: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 15,
  },
  greetings: {
    marginHorizontal: 15,
    alignSelf: 'flex-start',
    fontFamily: 'Panton Bold',
    fontSize: 38,
    color: '#5E6366',
    lineHeight: 46,
    letterSpacing: -1.5,
  },
});

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
    };
  }

  render() {
    const {scroll, greetings} = styles;
    return (
      <View>
        <TopBar />
        <ScrollView contentContainerStyle={scroll}>
          <Text style={greetings}>Olá, Tudo bem?</Text>
          <Text style={greetings}>Config</Text>
        </ScrollView>
      </View>
    );
  }
}
