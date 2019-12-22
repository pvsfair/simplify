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
    this.state = {
      user: '',
      rooms: [
        {
          id: 0,
          name: 'Miami',
          image: meetings_miami,
        },
        {
          id: 1,
          name: 'Manhattan',
          image: meetings_manhattan,
        },
        {
          id: 2,
          name: 'Costa Rica',
          image: meetings_costaRica,
        },
        {
          id: 3,
          name: 'Cayman',
          image: meetings_cayman,
        },
      ],
    };
  }

  render() {
    const {scroll, greetings, directions, roomList} = styles;

    const roomCards = this.state.rooms.map(room => (
      <RoomCard
        key={room.id}
        imageSrc={room.image}
        title={room.name}
        btnText="Agendar"
        onButtonPress={() => {
          this.props.navigation.navigate('RoomSchedule', room);
        }}
      />
    ));

    return (
      <ScrollView contentContainerStyle={scroll}>
        <Text style={greetings}>Reunião</Text>
        <Text style={directions}>
          Escolha a sala para o agendamento da sua reunião.
        </Text>
        <View style={roomList}>{roomCards}</View>
      </ScrollView>
    );
  }
}
