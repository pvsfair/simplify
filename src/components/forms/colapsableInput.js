import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

import ImageWBg from '../image/imageWithBg';

import {meetings_bgCircle} from '../../../assets/icons';

const styles = StyleSheet.create({
  allInput: {
    flex: 1,
    width: '100%',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: 'rgba(151, 151, 151, 0.6)',
    marginVertical: 10,
    paddingVertical: 9,
    alignItems: 'flex-start',
  },
  infoRow: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  imgColumn: {
    alignContent: 'flex-start',
    flexBasis: '10%',
    marginLeft: 20,
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
  indicatorColumn: {
    flexBasis: '10%',
  },
  indicator: active => {
    return {
      marginVertical: 10,
      width: 12,
      height: 12,
      borderRightWidth: 1.5,
      borderBottomWidth: 1.5,
      borderColor: 'rgba(151, 151, 151, 0.6);',
      transform: [{rotate: active ? '45deg' : '-45deg'}],
    };
  },
  collapsedInput: {
    width: '95%',
    alignSelf: 'center',
  },
});

export default class ColapsableInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  handleClick = () => {
    if (this.props.onClick !== null && this.props.onClick !== undefined)
      this.props.onClick(!this.state.active);
    this.setState({active: !this.state.active});
  };

  render() {
    const {label, icon, infoText, value} = this.props;
    const {
      allInput,
      infoRow,
      imgColumn,
      infoColumn,
      infoHeader,
      info,
      indicatorColumn,
      indicator,
      collapsedInput,
    } = styles;

    const renderedChildren = () => {
      if (this.state.active) {
        return <View style={[collapsedInput]}>{this.props.children}</View>;
      } else {
        return undefined;
      }
    };

    const rendererInfo = () => {
      if (this.state.active) {
        return undefined;
      } else {
        return (
          <Text style={info}>
            {value == null || value == undefined || value == ''
              ? infoText
              : value}
          </Text>
        );
      }
    };
    return (
      <View style={[allInput]}>
        <TouchableOpacity style={[infoRow]} onPress={this.handleClick}>
          <View style={[imgColumn]}>
            <ImageWBg
              style={{height: 24, flexBasis: 24}}
              imgStyle={{margin: 0, width: 12, height: 12}}
              bgImageSrc={meetings_bgCircle}
              source={icon}
            />
          </View>
          <View style={[infoColumn]}>
            <Text style={infoHeader}>{label}</Text>
            {rendererInfo()}
          </View>
          <View style={[indicatorColumn]}>
            <Text style={[indicator(this.state.active)]}></Text>
          </View>
        </TouchableOpacity>
        {renderedChildren()}
      </View>
    );
  }
}
