import React, {Component} from 'react';
import {View, ScrollView, Text, StyleSheet, Image} from 'react-native';
import {home_meeting, home_refund, home_money} from '../../../assets/images';

import Card from '../../components/homeCard';

const styles = StyleSheet.create({
  scroll: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 15,
  },
  greetings: {
    marginVertical: 15,
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
      <ScrollView contentContainerStyle={scroll}>
        <Text style={greetings}>Olá, Tudo bem?</Text>
        <Card
          imageSrc={home_meeting}
          title="Reunião"
          description="Agende a sala para alguma reunião importante"
          btnText="Agendar Sala"
          onButtonPress={() => {
            this.props.navigation.navigate('Meeting');
          }}
        />
        <Card
          imageSrc={home_refund}
          title="Reembolso"
          description="Solicite, visualize e revise seus reembolsos"
          btnText="Solicitar Reembolso"
          onButtonPress={() => {
            this.props.navigation.navigate('Profile');
          }}
        />
        <Card
          imageSrc={home_money}
          title="Solicitações"
          description="Visualize as solicitações de reembolso"
          btnText="Aprovar Reembolso"
        />
      </ScrollView>
    );
  }
}
