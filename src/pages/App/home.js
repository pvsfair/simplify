import React, {Component} from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';

import Frame from '../../components/elevatedFrame';

const styles = StyleSheet.create({
  scroll: {
    alignItems: 'center',
    justifyContent: 'center',
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
    const {scroll} = styles;
    return (
      <ScrollView contentContainerStyle={scroll}>
        <Frame>
          <Text>Mainssss</Text>
        </Frame>
        <Frame>
          <Text>Mainssss</Text>
        </Frame>
        <Frame>
          <Text>Mainssss</Text>
        </Frame>
      </ScrollView>
    );
  }
}
