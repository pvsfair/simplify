import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CustomButton from '../../components/button';
import FloatingLabelInput from '../../components/forms/floatingLabelInput';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    padding: 25,
    justifyContent: 'center',
  },
  header: {
    color: 'black',
    justifyContent: 'flex-start',
  },
  underWelcome: {
    color: '#333333',
    marginBottom: 5,
    textAlign: 'left',
  },
  welcome: {
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
    // await Font.loadAsync({
    //   Roboto: require('native-base/Fonts/Roboto.ttf'),
    //   Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    // });
    this.setState({isReady: true});
  }

  resetPassword() {
    console.log('Uma nova senha foi encaminhada para o e-mail cadastrado :)');
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.welcome}>Problemas ao entrar?</Text>
          <Text style={styles.underWelcome}>
            Informe seu CPF e data de nascimento para que possamos enviar nova
            senha para que você possa acessar sua conta
          </Text>
        </View>
        <FloatingLabelInput
          label="CPF"
          onChangeText={cpfValue => this.setState({cpfValue})}
          value={this.state.cpfValue}
        />
        <FloatingLabelInput
          label="Data de Nascimento"
          onChangeText={password => this.setState({password})}
          value={this.state.password}
        />
        <CustomButton
          onPress={() => {
            this.resetPassword();
          }}
          label="Enviar"
        />
      </View>
    );
  }
}
