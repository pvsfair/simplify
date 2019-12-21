import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import Frame from './elevatedFrame';
import {home_bg, home_meeting} from '../../assets/images';
import Button from './button';
import ImageWBg from './image/imageWithBg';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
  },
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
  rightContent: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Panton Extra Bold',
    fontSize: 20,
    marginVertical: 10,
  },
  button: {
    width: '100%',
  },
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
    button,
  } = styles;

  const {imageSrc, title, btnText, onButtonPress} = props;
  return (
    <View style={{width: '48%'}}>
      <Frame>
        <View style={container}>
          <ImageWBg imageSrc={imageSrc} />
          <View style={rightContent}>
            <Text style={titleStyle}>{title}</Text>
            <Button
              style={button}
              label={btnText}
              onPress={onButtonPress}></Button>
          </View>
        </View>
      </Frame>
    </View>
  );
};

export default Card;
