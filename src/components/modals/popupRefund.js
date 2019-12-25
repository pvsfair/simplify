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
              <View style={[infoRow]}>
                <View style={[imgColumn]}>
                  <ImageWBg
                    style={{height: 24, flexBasis: 24}}
                    imgStyle={{margin: 'auto', width: 12, height: 12}}
                    bgImageSrc={meetings_bgCircle}
                    source={meetings_calendar2}
                  />
                </View>
                <View style={[infoColumn]}>
                  <Text style={infoHeader}>Data de solicitação</Text>
                  <Text style={info}>
                    {moment(this.state.refund?.refundDate).format('LL')}
                  </Text>
                </View>
              </View>

              {shouldShowApprovalDate && (
                <View style={[infoRow]}>
                  <View style={[imgColumn]}>
                    <ImageWBg
                      style={{height: 24, flexBasis: 24}}
                      imgStyle={{margin: 'auto', width: 12, height: 12}}
                      bgImageSrc={meetings_bgCircle}
                      source={refund_check}
                    />
                  </View>
                  <View style={[infoColumn]}>
                    <Text style={infoHeader}>Data de aprovação</Text>
                    <Text style={info}>
                      {moment(this.state.refund?.refundDate).format('LL')}
                    </Text>
                  </View>
                </View>
              )}

              <View style={[infoRow]}>
                <View style={[imgColumn]}>
                  <ImageWBg
                    style={{height: 24, flexBasis: 24}}
                    imgStyle={{margin: 'auto', width: 12, height: 12}}
                    bgImageSrc={meetings_bgCircle}
                    source={refund_file}
                  />
                </View>
                <View style={[infoColumn]}>
                  <Text style={infoHeader}>Tipo</Text>
                  <Text style={info}>
                    {refundTypes[this.state.refund?.type]}
                  </Text>
                </View>
              </View>

              <View style={[infoRow]}>
                <View style={[imgColumn]}>
                  <ImageWBg
                    style={{height: 24, flexBasis: 24}}
                    imgStyle={{margin: 'auto', width: 12, height: 12}}
                    bgImageSrc={meetings_bgCircle}
                    source={refund_toggle}
                  />
                </View>
                <View style={[infoColumn]}>
                  <Text style={infoHeader}>Status</Text>
                  <Text
                    style={[
                      info,
                      {
                        color:
                          statusColorTransformer[this.state.refund?.status],
                      },
                    ]}>
                    {statusTransformer[this.state.refund?.status]}
                  </Text>
                </View>
              </View>

              {shouldShowReasonNotApprovedText && (
                <View style={[infoRow]}>
                  <View style={[imgColumn]}>
                    <ImageWBg
                      style={{height: 24, flexBasis: 24}}
                      imgStyle={{margin: 'auto', width: 12, height: 12}}
                      bgImageSrc={meetings_bgCircle}
                      source={meetings_lines}
                    />
                  </View>
                  <View style={[infoColumn]}>
                    <Text style={infoHeader}>Motivo de não aprovado</Text>
                    <Text style={info}>
                      {this.state.refund?.reasonNotApproved}
                    </Text>
                  </View>
                </View>
              )}

              <View style={[infoRow]}>
                <View style={[imgColumn]}>
                  <ImageWBg
                    style={{height: 24, flexBasis: 24}}
                    imgStyle={{margin: 'auto', width: 12, height: 12}}
                    bgImageSrc={meetings_bgCircle}
                    source={refund_money}
                  />
                </View>
                <View style={[infoColumn]}>
                  <Text style={infoHeader}>Valor</Text>
                  <Text style={info}>{this.state.refund?.amount}</Text>
                </View>
              </View>

              <View style={[infoRow]}>
                <View style={[imgColumn]}>
                  <ImageWBg
                    style={{height: 24, flexBasis: 24}}
                    imgStyle={{margin: 'auto', width: 12, height: 12}}
                    bgImageSrc={meetings_bgCircle}
                    source={refund_money}
                  />
                </View>
                <View style={[infoColumn]}>
                  <Text style={infoHeader}>Dados Bancários</Text>
                  <View style={info}>
                    <Text style={info}>
                      Nome do Banco:{' '}
                      {this.state.refund?.bankAccountData?.bankName}
                    </Text>
                    <Text style={info}>
                      Nome Completo:{' '}
                      {this.state.refund?.bankAccountData?.fullName}
                    </Text>
                    <Text style={info}>
                      Agência: {this.state.refund?.bankAccountData?.agency}
                    </Text>
                    <Text style={info}>
                      Conta: {this.state.refund?.bankAccountData?.account}
                    </Text>
                  </View>
                </View>
              </View>

              <View style={[infoRow]}>
                <View style={[imgColumn]}>
                  <ImageWBg
                    style={{height: 24, flexBasis: 24}}
                    imgStyle={{margin: 'auto', width: 12, height: 12}}
                    bgImageSrc={meetings_bgCircle}
                    source={meetings_lines}
                  />
                </View>
                <View style={[infoColumn]}>
                  <Text style={infoHeader}>Motivo</Text>
                  <Text style={info}>{this.state.refund?.reason}</Text>
                </View>
              </View>
              <TouchableWithoutFeedback
                onPress={() => {
                  this.handleAttachment(true);
                }}
                style={[infoRow]}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginBottom: 15,
                    justifyContent: 'flex-end',
                  }}>
                  <Image
                    style={{width: 15, height: 15}}
                    resizeMode="contain"
                    source={refund_image}
                  />
                  <Text
                    style={{
                      fontFamily: 'Panton Bold',
                      textDecorationLine: 'underline',
                      color: '#0154C6',
                      marginLeft: 5,
                    }}>
                    Ver anexo
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>

            {actionsNode}
            <Modal
              onBackdropPress={() => {
                this.handleAttachment(!this.state.attachmentVisible);
              }}
              isVisible={this.state.attachmentVisible}
              style={{
                justifyContent: 'center',
                alignSelf: 'auto',
                alignItems: 'center',
              }}>
              <View
                style={{
                  marginTop: 22,
                  justifyContent: 'center',
                  backgroundColor: '#fff',
                  borderRadius: 12,
                  padding: 5,
                  flexDirection: 'row',
                }}>
                <Image
                  style={{height: 400, width: 300}}
                  resizeMode="stretch"
                  source={{uri: this.state.refund?.attachment}}
                />
              </View>
            </Modal>
          </Animated.View>
        </View>
      </Animated.View>
    );
  }
}
