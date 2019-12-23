import React from 'react';
import {View, StyleSheet, Image, ImageBackground} from 'react-native';
import {home_bg} from '../../../assets/images';

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  imgContainer: {
    width: '100%',
    height: 80,
  },
  image: {
    alignSelf: 'center',
    flex: 1,
    resizeMode: 'contain',
    margin: 10,
  },
});

const ImageWBG = props => {
  const {bgImage, image, imgContainer} = styles;

  const {bgImageSrc, source, style, imgStyle} = props;
  const bg =
    bgImageSrc == null || bgImageSrc == undefined ? home_bg : bgImageSrc;
  return (
    <View style={[imgContainer, style]}>
      <ImageBackground style={bgImage} resizeMode="contain" source={bg}>
        <Image style={[image, imgStyle]} source={source} />
      </ImageBackground>
    </View>
  );
};

export default ImageWBG;
