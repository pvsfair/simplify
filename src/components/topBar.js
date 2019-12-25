import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {MaterialTopTabBar} from 'react-navigation-tabs';
import {logo_horizontal} from './../../assets/images';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0154C6',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnStyle: {},
  imageContainer: {},
  logo: {
    marginTop: 5,
    height: 30,
  },
});

const TopBar = props => {
  const {container, btnStyle, imageContainer, sim, plify, logo} = styles;
  const {allProps} = props;
  const navigation = allProps?.navigation;
  const shouldRenderBackButton = navigation?.state?.routes?.length > 1;

  return (
    <View style={container}>
      <View style={imageContainer}>
        <Image style={logo} source={logo_horizontal} resizeMode="contain" />
      </View>
    </View>
  );
};

export default TopBar;
