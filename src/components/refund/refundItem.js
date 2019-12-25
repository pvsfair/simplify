import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
} from 'react-native';
import moment from 'moment';
import 'moment/min/locales';

import {refund_gray_eye} from '../../../assets/icons';

import {
  statusTransformer,
  statusColorTransformer,
} from '../../utils/refundHelpers';

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
      height: 18,
    },
  });

const Item = props => {
  const {refundDate, status} = props.refund;
  const {onPress} = props;
  const {
    container,
    leftIndicator,
    initHour,
    hours,
    statusStyle = styles(status).status,
    iconStyle = styles(status).icon,
  } = styles(status);

  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={container}>
        <View style={leftIndicator} />
        <View style={hours}>
          <Text style={initHour}>
            {moment(refundDate).format('DD MMM YYYY')}
          </Text>
        </View>
        <Text style={statusStyle}>• {statusTransformer[status]}</Text>
        <Image
          style={iconStyle}
          source={refund_gray_eye}
          resizeMode="contain"></Image>
      </View>
    </TouchableNativeFeedback>
  );
};

export default Item;
