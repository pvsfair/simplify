import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import Modal from 'react-native-modal';
import moment from 'moment';

import {
  meetings_bgCircle,
  meetings_calendar2,
  meetings_clock,
  meetings_people,
  meetings_lines,
  refund_card,
  refund_check,
  refund_file,
  refund_money,
  refund_toggle,
  refund_image,
} from '../../../assets/icons';

import CustomButton from '../button';

import ImageWBg from '../image/imageWithBg';

import {
  statusTransformer,
  statusColorTransformer,
  refundTypes,
} from '../../utils/refundHelpers';
import {TouchableHighlight} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cover: {
    backgroundColor: 'rgba(0,0,0,.5)',
    elevation: 7,
  },
  sheet: {
    position: 'absolute',
    top: Dimensions.get('window').height,
    left: 0,
    right: 0,
    height: '100%',
    justifyContent: 'flex-end',
  },
  popup: {
    backgroundColor: '#FFF',
    marginHorizontal: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 80,
  },
  infoTable: {
    flexDirection: 'column',
    marginTop: 20,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  imgColumn: {
    alignContent: 'flex-start',
    flexBasis: '10%',
    marginHorizontal: 10,
  },
  infoColumn: {
    flexBasis: '80%',
  },
  infoHeader: {
    fontFamily: 'Panton Bold',
    color: '#737373',
  },
  info: {
    fontFamily: 'Panton Regular',
    fontSize: 13,
    color: '#919699',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default class App extends React.Component {
  state = {
    animation: new Animated.Value(0),
    refund: null,
    attachmentVisible: false,
  };
  handleOpen = refund => {
    this.setState({refund: refund});
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  handleClose = () => {
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  handleAttachment = visible => {
    this.setState({attachmentVisible: visible});
  };

  render() {
    const screenHeight = Dimensions.get('window').height;

    const backdrop = {
      transform: [
        {
          translateY: this.state.animation.interpolate({
            inputRange: [0, 0.01],
            outputRange: [screenHeight, 0],
            extrapolate: 'clamp',
          }),
        },
      ],
      opacity: this.state.animation.interpolate({
        inputRange: [0.01, 0.5],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      }),
    };

    const slideUp = {
      transform: [
        {
          translateY: this.state.animation.interpolate({
            inputRange: [0.01, 1],
            outputRange: [0, -1 * screenHeight],
            extrapolate: 'clamp',
          }),
        },
      ],
    };

    const {
      cover,
      sheet,
      popup,
      infoTable,
      infoRow,
      imgColumn,
      infoColumn,
      infoHeader,
      info,
      actions,
    } = styles;

    const shouldShowApprovalDate =
      this.state.refund?.approvalDate !== null &&
      this.state.refund?.approvalDate !== undefined;

    const shouldShowReasonNotApprovedText =
      this.state.refund?.reasonNotApproved !== null &&
      this.state.refund?.reasonNotApproved !== undefined;

    let actionsNode = undefined;
    if (this.state.refund?.status == 'MY_REUNION') {
      actionsNode = (
        <View style={actions}>
          <CustomButton style={{width: '45%'}} label="Excluir" secondary />
          <CustomButton style={{width: '45%'}} label="Editar" />
        </View>
      );
    }

    return (
      <Animated.View style={[StyleSheet.absoluteFill, cover, backdrop]}>
        <TouchableOpacity style={{flex: 1}} onPress={this.handleClose} />
        <View style={[sheet]}>
          <Animated.View style={[popup, slideUp]}>
            <View style={[infoTable]}>
              <Text>Filtros</Text>
            </View>
            {actionsNode}
          </Animated.View>
        </View>
      </Animated.View>
    );
  }
}
