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
    margin: 5,
  },
});

const ImageWBG = props => {
  const {bgImage, image, imgContainer} = styles;

  const {bgImageSrc, source, style} = props;
  return (
    <View style={style}>
      <View style={imgContainer}>
        <ImageBackground
          style={bgImage}
          resizeMode="contain"
          source={bgImageSrc | home_bg}>
          <Image style={image} source={source} />
        </ImageBackground>
      </View>
    </View>
  );
};

export default ImageWBG;
