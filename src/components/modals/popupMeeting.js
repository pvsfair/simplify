import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Dimensions,
  Image,
} from 'react-native';
import moment from 'moment';

import {
  meetings_bgCircle,
  meetings_calendar2,
  meetings_clock,
  meetings_people,
  meetings_lines,
} from '../../../assets/icons';

import {
  people_carlos,
  people_jessica,
  people_victoria,
} from '../../../assets/images';

import CustomButton from '../button';

import ImageWBg from '../image/imageWithBg';

import utils from '../../utils/dateUtils';

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
  personStyle: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'baseline',
  },
  personPhoto: {
    height: 32,
    width: 32,
    borderRadius: 16,
  },
  personInfo: {
    marginLeft: 10,
    alignSelf: 'flex-start',
  },
  personName: {
    fontFamily: 'Panton Bold',
    color: '#737373',
    fontSize: 14,
    lineHeight: 19,
  },
  personStatus: {
    fontFamily: 'Panton Regular',
    color: '#919699',
    fontSize: 10,
    lineHeight: 14,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default class App extends React.Component {
  state = {
    animation: new Animated.Value(0),
    item: null,
  };
  handleOpen = item => {
    item.people = this.getMeetingPeople(item);
    this.setState({item: item});
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  getMeetingPeople = () => {
    return [
      {
        id: 0,
        name: 'Jéssica Oliveira',
        photo: people_jessica,
        status: 'Organizador',
      },
      {
        id: 1,
        name: 'Victória Antonela',
        photo: people_victoria,
        status: 'Aceito',
      },
      {
        id: 2,
        name: 'Carlos Santos',
        photo: people_carlos,
        status: 'Sem Resposta',
      },
    ];
  };

  handleClose = () => {
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
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
      personStyle,
      personPhoto,
      personInfo,
      personName,
      personStatus,
      actions,
    } = styles;

    const peopleOnMeeting = this.state.item?.people?.map(person => (
      <View>
        <View key={person.id} style={personStyle}>
          <Image style={personPhoto} source={person.photo} />
          <View style={personInfo}>
            <Text style={personName}>{person.name}</Text>
            <Text style={personStatus}>{person.status}</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            borderBottomColor: '#E3E5E6',
            borderBottomWidth: 1,
          }}
        />
      </View>
    ));

    let actionsNode = undefined;
    if (this.state.item?.status == 'MY_REUNION')
      actionsNode = (
        <View style={actions}>
          <CustomButton style={{width: '45%'}} label="Excluir" secondary />
          <CustomButton style={{width: '45%'}} label="Editar" />
        </View>
      );

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
                  <Text style={infoHeader}>Data</Text>
                  <Text style={info}>
                    {moment(this.state.item?.startTime).format('LL')}
                  </Text>
                </View>
              </View>

              <View style={[infoRow]}>
                <View style={[imgColumn]}>
                  <ImageWBg
                    style={{height: 24, flexBasis: 24}}
                    imgStyle={{margin: 'auto', width: 12, height: 12}}
                    bgImageSrc={meetings_bgCircle}
                    source={meetings_clock}
                  />
                </View>
                <View style={[infoColumn]}>
                  <Text style={infoHeader}>Hora</Text>
                  <Text style={info}>
                    {moment(this.state.item?.startTime).format('HH[h]mm')} às{' '}
                    {moment(this.state.item?.endTime).format('HH[h]mm')}
                  </Text>
                </View>
              </View>

              <View style={[infoRow]}>
                <View style={[imgColumn]}>
                  <ImageWBg
                    style={{height: 24, flexBasis: 24}}
                    imgStyle={{margin: 'auto', width: 12, height: 12}}
                    bgImageSrc={meetings_bgCircle}
                    source={meetings_people}
                  />
                </View>
                <View style={[infoColumn]}>
                  <Text style={infoHeader}>Participantes</Text>
                  <View style={info}>{peopleOnMeeting}</View>
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
                  <Text style={info}>{this.state.item?.reason}</Text>
                </View>
              </View>
            </View>
            {actionsNode}
          </Animated.View>
        </View>
      </Animated.View>
    );
  }
}
