import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import Frame from './elevatedFrame';
import {home_bg, home_meeting} from '../../assets/images';
import Button from '../components/button';
import ImageWBg from './image/imageWithBg';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bgImage: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  imgContainer: {
    width: '35%',
    height: 80,
  },
  image: {
    alignSelf: 'center',
    flex: 1,
    resizeMode: 'contain',
    margin: 5,
  },
  rightContent: {
    width: '65%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  title: {
    fontFamily: 'Panton Bold',
    fontSize: 26,
  },
  description: {
    fontFamily: 'Panton Regular',
    textAlign: 'center',
    fontSize: 10,
    paddingHorizontal: 30,
  },
  button: {},
});

const Card = props => {
  const {
    frame,
    container,
    bgImage,
    rightContent,
    image,
    imgContainer,
    titleStyle = styles.title,
    descriptionStyle = styles.description,
    button,
  } = styles;

  const {imageSrc, title, description, btnText, onButtonPress} = props;
  return (
    <Frame>
      <View style={container}>
        <View style={imgContainer}>
          <ImageWBg source={imageSrc} />
        </View>
        <View style={rightContent}>
          <Text style={titleStyle}>{title}</Text>
          <Text style={descriptionStyle}>{description}</Text>
          <Button
            style={button}
            label={btnText}
            onPress={onButtonPress}></Button>
        </View>
      </View>
    </Frame>
  );
};

export default Card;
