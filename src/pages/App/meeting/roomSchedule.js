import React, {Component} from 'react';
import {View, ScrollView, Text, StyleSheet, Animated} from 'react-native';

import ImageWBg from '../../../components/image/imageWithBg';

import Button from '../../../components/button';
import ScheduleItem from '../../../components/scheduleItem';
import PopupBottom from '../../../components/modals/popupMeeting';

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
          startTime: new Date(Date.UTC(2019, 11, 21, 6, 0, 0)),
          status: 'AVAILABLE',
          reason:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vestibulum sollicitudin.',
        },
        {
          id: 1,
          startTime: new Date(Date.UTC(2019, 11, 21, 7, 0, 0)),
          endTime: new Date(Date.UTC(2019, 11, 21, 14, 0, 0)),
          status: 'MY_REUNION',
          reason:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vestibulum sollicitudin.',
        },
        {
          id: 2,
          startTime: new Date(Date.UTC(2019, 11, 21, 14, 0, 0)),
          status: 'AVAILABLE',
          reason:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vestibulum sollicitudin.',
        },
        {
          id: 3,
          startTime: new Date(Date.UTC(2019, 11, 21, 15, 0, 0)),
          status: 'AVAILABLE',
          reason:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vestibulum sollicitudin.',
        },
        {
          id: 4,
          startTime: new Date(Date.UTC(2019, 11, 21, 16, 0, 0)),
          endTime: new Date(Date.UTC(2019, 11, 21, 18, 0, 0)),
          status: 'UNAVAILABLE',
          reason:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vestibulum sollicitudin.',
        },
        {
          id: 5,
          startTime: new Date(Date.UTC(2019, 11, 21, 18, 0, 0)),
          endTime: new Date(Date.UTC(2019, 11, 21, 20, 30, 0)),
          status: 'UNAVAILABLE',
          reason:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vestibulum sollicitudin.',
        },
        {
          id: 6,
          startTime: new Date(Date.UTC(2019, 11, 21, 20, 30, 0)),
          status: 'AVAILABLE',
          reason:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vestibulum sollicitudin.',
        },
        {
          id: 7,
          startTime: new Date(Date.UTC(2019, 11, 21, 21, 0, 0)),
          status: 'AVAILABLE',
          reason:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vestibulum sollicitudin.',
        },
      ],
      animation: new Animated.Value(0),
    };
  }

  itemClicked = item => {
    if (item.status === 'AVAILABLE') {
      // Navigate to other screen
    } else if (item.status === 'MY_REUNION' || item.status === 'UNAVAILABLE') {
      this.refs.popup.handleOpen(item);
    }
  };

  scheduleMeeting = () => {
    this.props.navigation.navigate('MeetingForm', {isEdit: false});
  };

  render() {
    const {
      scroll,
      imageTop,
      greetings,
      roomNameStyle,
      roomImageAndName,
    } = styles;

    const scheduleItems = this.state.schedule.map(item => (
      <ScheduleItem
        key={item.id}
        item={item}
        onPress={() => this.itemClicked(item)}
      />
    ));

    return (
      <View style={{flex: 1}}>
        <View style={roomImageAndName}>
          <ImageWBg style={imageTop} source={this.state.roomImage} />
          <Text style={roomNameStyle}>Sala {this.state.roomName}</Text>
        </View>
        <ScrollView contentContainerStyle={scroll}>
          <Text style={greetings}>Agendamentos do dia</Text>
          {scheduleItems}
        </ScrollView>
        <Button
          label="Agendar Reunião"
          onPress={this.scheduleMeeting}
          style={{width: '85%', alignSelf: 'center', margin: 5}}
        />
        <PopupBottom ref="popup" />
      </View>
    );
  }
}
