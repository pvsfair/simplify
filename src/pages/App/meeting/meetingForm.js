import React, {Component} from 'react';
import {View, ScrollView, Text, StyleSheet, Animated} from 'react-native';

import ImageWBg from '../../../components/image/imageWithBg';

import Button from '../../../components/button';
import TextInput from '../../../components/forms/longTextInput';

const styles = StyleSheet.create({
  scroll: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 0,
    marginHorizontal: 0,
  },
  greetings: {
    marginVertical: 20,
    marginBottom: 0,
    alignSelf: 'flex-start',
    fontFamily: 'Panton Bold',
    fontSize: 26,
    color: '#5E6366',
    lineHeight: 32,
    letterSpacing: -1.5,
    paddingLeft: 15,
  },
  roomImageAndName: {
    shadowColor: '#2b2b2b',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 4,
    backgroundColor: '#fff',
    borderTopColor: '#fff',
    borderTopWidth: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  imageTop: {
    height: 100,
    width: 100,
  },
  roomNameStyle: {
    fontFamily: 'Panton Bold',
    fontSize: 26,
    color: '#444',
  },
});
export default class Meeting extends Component {
  constructor(props) {
    super(props);
    const {navigation} = props;

    this.state = {
      user: '',
      isEdit: navigation.getParam('isEdit', false),
    };
  }

  render() {
    const {scroll, greetings} = styles;

    return (
      <View style={{flex: 1}}>
        <ScrollView contentContainerStyle={scroll}>
          <Text style={greetings}>Agendar Reunião</Text>
          <TextInput label="Data" infoText="Informe a data" />
          <TextInput label="Hora" infoText="Informe o horário" />
          <TextInput
            label="Participantes"
            infoText="Informe os participantes"
          />
          <TextInput label="Motivo" infoText="Informe o motivo da reunião" />
        </ScrollView>
        <Button label="Agendar Reunião" />
      </View>
    );
  }
}
