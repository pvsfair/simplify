import React, {Component} from 'react';
import {View, StatusBar, TextInput, Animated, Text} from 'react-native';

class FloatingLabelInput extends Component {
  state = {
    isFocused: false,
    animation: new Animated.Value(0),
  };
  componentDidMount() {
    if (
      this.props.value != '' &&
      this.props.value != null &&
      this.props.value != undefined
    ) {
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 150,
      }).start();
    }
  }
  handleFocus = () => {
    this.setState({isFocused: true});
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 200,
    }).start();
  };
  handleBlur = () => {
    if (
      this.props.value != '' &&
      this.props.value != null &&
      this.props.value != undefined
    ) {
      return;
    }
    this.setState({isFocused: false});
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 200,
    }).start();
  };

  render() {
    const {label, ...props} = this.props;
    const {isFocused} = this.state;

    const labelStyle = {
      position: 'absolute',
      left: this.state.animation.interpolate({
        inputRange: [0, 1],
        outputRange: [15, 20],
        extrapolate: 'clamp',
      }),
      top: this.state.animation.interpolate({
        inputRange: [0, 1],
        outputRange: [25, 0],
        extrapolate: 'clamp',
      }),
      fontSize: this.state.animation.interpolate({
        inputRange: [0, 1],
        outputRange: [16, 14],
        extrapolate: 'clamp',
      }),
      color: this.state.animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['#aaa', '#979797'],
        extrapolate: 'clamp',
      }),
      backgroundColor: this.state.animation.interpolate({
        inputRange: [0.6, 1],
        outputRange: ['#fff0', '#ffff'],
        extrapolate: 'clamp',
      }),
      paddingHorizontal: 5,
      padding: 0,
      fontFamily: !isFocused ? 'Panton Regular' : 'Panton Bold',
    }; 
    return (
      <View style={{paddingTop: 12, marginTop: 5}}>
        <Animated.Text style={labelStyle}>{label}</Animated.Text>
        <TextInput
          {...props}
          style={{
            borderRadius: 10,
            paddingHorizontal: 20,
            paddingVertical: 0,
            height: 46,
            color: '#000',
            borderWidth: 1,
            borderColor: '#555',
            elevation: -1,
          }}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          blurOnSubmit
        />
      </View>
    );
  }
}

export default FloatingLabelInput;
