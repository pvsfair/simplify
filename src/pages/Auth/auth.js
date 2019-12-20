import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CustomTextInput from '../../components/textInput';
import Button from '../../components/button';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
    textAlign: 'center',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
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

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Test</Text>
        <Text style={styles.instructions}>App to test functionalities</Text>
        <CustomTextInput
          placeholder="CPF"
          onChangeText={cpfValue => this.setState({cpfValue})}
          value={this.state.cpfValue}
        />
        <CustomTextInput
          placeholder="Senha"
          onChangeText={password => this.setState({password})}
          value={this.state.password}
          isSecure={true}
        />
        <Button
          onPress={() => {
            console.log('Login');
          }}
          label="Login"></Button>
        <Button
          onPress={() => {
            this.props.navigation.navigate('App');
          }}
          label="Create Account"></Button>
      </View>
    );
  }
}
