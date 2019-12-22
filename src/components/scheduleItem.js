import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import Frame from './elevatedFrame';
import {home_bg, home_meeting} from '../../assets/images';
import Button from './button';
import ImageWBg from './image/imageWithBg';

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
      backgroundColor: stateColorTransformer[status],
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
      flexGrow: 1,
      flexShrink: 0,
      flexBasis: '38%',
    },
    status: {
      flexGrow: 1,
      flexShrink: 0,
      flexBasis: '42%',
      color: stateColorTransformer[status],
    },
    icon: {
      flexGrow: 1,
      flexShrink: 0,
      flexBasis: '20%',
      color: stateColorTransformer[status],
    },
  });
function pad(num, size) {
  return ('000000000' + num).substr(-size);
}
const formatDate = date => {
  return `${pad(date.getHours(), 2)}h${pad(date.getMinutes(), 2)}`;
};

const stateTransformer = {
  AVAILABLE: 'Disponível',
  MY_REUNION: 'Minhas Reuniões',
  UNAVAILABLE: 'Indisponível',
};

const stateColorTransformer = {
  AVAILABLE: '#0154C6',
  MY_REUNION: '#82C85A',
  UNAVAILABLE: '#FAB932',
};

const Item = props => {
  const {startTime, endTime, status, icon} = props.item;
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
    <Text style={endHour}> às {formatDate(endTime)}</Text>
  ) : (
    undefined
  );

  return (
    <View style={container}>
      <View style={leftIndicator} />
      <View style={hours}>
        <Text style={initHour}>{formatDate(startTime)}</Text>
        {endTimeRendered}
      </View>
      <Text style={statusStyle}>• {stateTransformer[status]}</Text>
      <Text style={iconStyle}>aa</Text>
    </View>
  );
};

export default Item;
