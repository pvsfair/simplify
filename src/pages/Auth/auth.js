import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  CheckBox,
  StyleSheet,
  Animated,
  Image,
  ImageBackground,
} from 'react-native';
import CustomButton from '../../components/button';

import FloatingLabelInput from '../../components/forms/floatingLabelInput';

import {logo_splash, logo_wave} from '../../../assets/images';
import {Easing} from 'react-native-reanimated';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    marginTop: 200,
    justifyContent: 'center',
  },
  header: {
    color: 'black',
    justifyContent: 'flex-start',
  },
  underWelcome: {
    fontFamily: 'Panton Regular',
    color: '#333333',
    marginBottom: 5,
    textAlign: 'left',
    width: '64%',
  },
  welcome: {
    fontFamily: 'Panton Bold',
    fontSize: 55,
    lineHeight: 89,
    textAlign: 'left',
    color: '#0154C6',
  },
  rememberPass: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  splashScreen: animation => {
    return {
      backgroundColor: 'blue',
      opacity: animation.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0],
        extrapolate: 'clamp',
      }),
      elevation: 10,
    };
  },
  logo: animation => {
    return {
      width: 200,
      height: 200,
      position: 'absolute',
      elevation: 11,
      alignSelf: 'center',
      top: animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['38%', '2%'],
        extrapolate: 'clamp',
      }),
    };
  },
});

const Main = props => {
  const [isReady, setIsReady] = useState(false);
  const [cpfValue, setCpfValue] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPass, setRememberPass] = useState(false);
  const [animation, setAnimation] = useState(new Animated.Value(0));

  const {splashScreen, logo} = styles;

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(animation, {
        toValue: 1,
        duration: 500,
      }).start();
      setTimeout(() => {
        setIsReady(true);
      }, 550);
    }, 2000);
  }, []);

  login = () => {
    console.log('Login');
    props.navigation.navigate('Home');
  };

  forgotPassword = () => {
    props.navigation.navigate('ForgotPass');
  };
  return (
    <>
      <ImageBackground
        imageStyle={{height: '55%'}}
        style={{flex: 1, justifyDirection: 'flex-start'}}
        source={logo_wave}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.welcome}>Olá!</Text>
            <Text style={styles.underWelcome}>
              Agora as coisas estão mais{' '}
              <Text style={{color: '#0154C6'}}>Simplify :)</Text> para nós da
              TradeUp
            </Text>
          </View>
          <FloatingLabelInput
            type={'cpf'}
            label="CPF"
            onChangeText={setCpfValue}
            value={cpfValue}
          />
          <FloatingLabelInput
            label="Senha"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
          />
          <View style={styles.rememberPass}>
            <CheckBox
              value={rememberPass}
              onValueChange={setRememberPass}
              tintColors={{true: '#0154C6', false: '#0154C6'}}
            />
            <Text>Lembrar minha senha</Text>
          </View>
          <CustomButton onPress={login} label="Entrar" />
          <CustomButton
            negative
            onPress={forgotPassword}
            label="Esqueceu a senha?"
          />
        </View>
      </ImageBackground>
      {!isReady && (
        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            splashScreen(animation),
          ]}></Animated.View>
      )}
      <Animated.View style={[logo(animation), {}]}>
        <Image
          style={{height: '100%', width: '100%'}}
          source={logo_splash}
          resizeMode="contain"
        />
      </Animated.View>
    </>
  );
};

export default Main;
