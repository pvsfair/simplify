import React, {Component} from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';

import {
  meetings_cayman,
  meetings_costaRica,
  meetings_manhattan,
  meetings_miami,
} from '../../../../assets/images';

import RoomCard from '../../../components/roomCard';

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
    marginBottom: 0,
    alignSelf: 'flex-start',
    fontFamily: 'Panton Bold',
    fontSize: 38,
    color: '#5E6366',
    lineHeight: 46,
    letterSpacing: -1.5,
  },
  directions: {
    fontFamily: 'Panton Regular',
    color: '#5E6366',
    marginBottom: 15,
  },
  roomList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
export default class Meeting extends Component {
  constructor(props) {
    super(props);
    const {navigation} = props;

    this.state = {
      user: '',
      roomId: navigation.getParam('roomId', -1),
      roomName: navigation.getParam('roomName', 'No Name'),
    };
  }

  render() {
    const {scroll, greetings, directions, roomList} = styles;
    return (
      <ScrollView contentContainerStyle={scroll}>
        <Text style={greetings}>{this.state.roomName}</Text>
        <Text style={directions}>
          Escolha a sala para o agendamento da sua reunião.
        </Text>
        <View style={roomList}>
          <RoomCard imageSrc={meetings_miami} title="Miami" btnText="Agendar" />
          <RoomCard
            imageSrc={meetings_manhattan}
            title="Manhattan"
            btnText="Agendar"
          />
          <RoomCard
            imageSrc={meetings_costaRica}
            title="Costa Rica"
            btnText="Agendar"
          />
          <RoomCard
            imageSrc={meetings_cayman}
            title="Cayman"
            btnText="Agendar"
          />
        </View>
      </ScrollView>
    );
  }
}
