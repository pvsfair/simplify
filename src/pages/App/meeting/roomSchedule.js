import React, {Component} from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';

import ImageWBg from '../../../components/image/imageWithBg';

import {
  meetings_cayman,
  meetings_costaRica,
  meetings_manhattan,
  meetings_miami,
} from '../../../../assets/images';

import RoomCard from '../../../components/roomCard';
import Button from '../../../components/button';
import ScheduleItem from '../../../components/scheduleItem';

const styles = StyleSheet.create({
  scroll: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 25,
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
  },
  roomImageAndName: {
    shadowColor: '#2b2b2b',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 4,
    padding: 15,
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
      roomId: navigation.getParam('id', -1),
      roomName: navigation.getParam('name', 'No Name'),
      roomImage: navigation.getParam('image'),
      schedule: [
        {
          id: 0,
          startTime: new Date(2019, 21, 12, 6, 0, 0),
          status: 'AVAILABLE',
          icon: '',
        },
        {
          id: 1,
          startTime: new Date(2019, 21, 12, 7, 0, 0),
          endTime: new Date(2019, 21, 12, 14, 0, 0),
          status: 'MY_REUNION',
          icon: '',
        },
        {
          id: 2,
          startTime: new Date(2019, 21, 12, 14, 0, 0),
          status: 'AVAILABLE',
          icon: '',
        },
        {
          id: 3,
          startTime: new Date(2019, 21, 12, 15, 0, 0),
          status: 'UNAVAILABLE',
          icon: '',
        },
      ],
    };
  }

  render() {
    const {
      scroll,
      imageTop,
      greetings,
      roomNameStyle,
      roomImageAndName,
    } = styles;

    const scheduleItems = this.state.schedule.map(item => (
      <ScheduleItem key={item.id} item={item} />
    ));

    return (
      <View>
        <View style={roomImageAndName}>
          <ImageWBg style={imageTop} source={this.state.roomImage} />
          <Text style={roomNameStyle}>Sala {this.state.roomName}</Text>
        </View>
        <ScrollView contentContainerStyle={scroll}>
          <Text style={greetings}>Agendamentos do dia</Text>
          {scheduleItems}
          <Button label="Agendar Reunião" style={{width: '100%'}} />
        </ScrollView>
      </View>
    );
  }
}
