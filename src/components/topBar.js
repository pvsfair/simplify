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
    justifyContent: 'space-between',
  },
  btnStyle: {},
  imageContainer: {
    height: 30,
    width: 150,
  },
  logo: {
    margin: 0,
    padding: 0,
    flex: 1,
    width: '100%',
  },
  backButtonContainer: {
    marginLeft: 20,
    marginBottom: 10,
    alignSelf: 'center',
    width: 12,
    height: 12,
  },
  backButton: {
    width: 12,
    height: 12,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#fff',
    transform: [{rotate: '135deg'}],
  },
});

const TopBar = props => {
  const {
    container,
    btnStyle,
    imageContainer,
    backButtonContainer,
    backButton,
    logo,
  } = styles;
  const navigation = props?.navigation;
  const shouldRenderBackButton = navigation?.state?.routes?.length > 1;

  return (
    <View style={container}>
      <View style={backButtonContainer}>
        {shouldRenderBackButton && (
          <TouchableOpacity
            onPress={() => {
              // console.log(props.navigation.goBack());
              props.navigation.navigate('Home');
            }}
            style={backButton}></TouchableOpacity>
        )}
      </View>
      <View style={imageContainer}>
        <Image style={logo} source={logo_horizontal} resizeMode="contain" />
      </View>
      <View style={imageContainer}></View>
    </View>
  );
};

export default TopBar;
