import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
} from 'react-native';
import Frame from './elevatedFrame';
import Button from './button';
import ImageWBg from './image/imageWithBg';

import {home_bg, home_meeting} from '../../assets/images';
import {
  meetings_calendar,
  meetings_eye,
  meetings_person,
} from '../../assets/icons';

import utils from '../utils/dateUtils';

const styles = status =>
  StyleSheet.create({
    container: {
      width: '100%',
      alignItems: 'center',
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 7,
      height: 50,
      minHeight: 50,
      maxHeight: 50,
      overflow: 'hidden',
      marginVertical: 4,
    },
    leftIndicator: {
      backgroundColor: statusColorTransformer[status],
      height: '100%',
      width: 7,
      overflow: 'hidden',
    },
    initHour: {
      fontFamily: 'Panton Regular',
    },
    endHour: {
      fontFamily: 'Panton Regular',
    },
    hours: {
      marginHorizontal: 10,
      flexDirection: 'row',
      width: '38%',
    },
    status: {
      width: '42%',
      color: statusColorTransformer[status],
    },
    icon: {
      width: '10%',
      height: 20,
    },
  });

const statusTransformer = {
  AVAILABLE: 'Disponível',
  MY_REUNION: 'Minhas Reuniões',
  UNAVAILABLE: 'Indisponível',
};

const statusColorTransformer = {
  AVAILABLE: '#0154C6',
  MY_REUNION: '#82C85A',
  UNAVAILABLE: '#FAB932',
};

const statusImageTransformer = {
  AVAILABLE: meetings_calendar,
  MY_REUNION: meetings_person,
  UNAVAILABLE: meetings_eye,
};

const Item = props => {
  const {startTime, endTime, status} = props.item;
  const {onPress} = props;
  const {
    container,
    leftIndicator,
    initHour,
    endHour,
    hours,
    statusStyle = styles(status).status,
    iconStyle = styles(status).icon,
  } = styles(status);

  let endTimeRendered = !(endTime == null || endTime == undefined) ? (
    <Text style={endHour}> às {utils.formatDate(endTime)}</Text>
  ) : (
    undefined
  );

  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={container}>
        <View style={leftIndicator} />
        <View style={hours}>
          <Text style={initHour}>{utils.formatDate(startTime)}</Text>
          {endTimeRendered}
        </View>
        <Text style={statusStyle}>• {statusTransformer[status]}</Text>
        <Image
          style={iconStyle}
          source={statusImageTransformer[status]}
          resizeMode="contain"></Image>
      </View>
    </TouchableNativeFeedback>
  );
};

export default Item;
