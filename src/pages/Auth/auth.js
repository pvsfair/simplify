import React, {Component} from 'react';
import {Text, View, CheckBox, StyleSheet} from 'react-native';
import CustomTextInput from '../../components/textInput';
import CustomButton from '../../components/button';

import FloatingLabelInput from '../../components/forms/floatingLabelInput';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
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
    fontSize: 30,
    textAlign: 'left',
  },
  rememberPass: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      cpfValue: '',
      password: '',
    };
  }

  componentDidMount() {
    this.setState({isReady: true});
  }

  login() {
    console.log('Login');
    this.props.navigation.navigate('Home');
  }

  forgotPassword() {
    this.props.navigation.navigate('ForgotPass');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.welcome}>Olá!</Text>
          <Text style={styles.underWelcome}>
            Agora as coisas estão mais Simplify :) para nós da TradeUp
          </Text>
        </View>
        <FloatingLabelInput
          label="CPF"
          onChangeText={cpfValue => this.setState({cpfValue})}
          value={this.state.cpfValue}
        />
        <FloatingLabelInput
          label="Senha"
          onChangeText={password => this.setState({password})}
          value={this.state.password}
          secureTextEntry
        />
        <View style={styles.rememberPass}>
          <CheckBox />
          <Text>Lembrar minha senha</Text>
        </View>
        <CustomButton
          onPress={() => {
            this.login();
          }}
          label="Entrar"
        />
        <CustomButton
          negative
          onPress={() => {
            this.forgotPassword();
          }}
          label="Esqueceu a senha?"
        />
      </View>
    );
  }
}
