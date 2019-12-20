import React, {Component} from 'react';
import {
    StyleSheet,
    TextInput,
} from 'react-native';

const styles = StyleSheet.create({
    textInputStyle:{
        height: 40,
        borderColor: 'gray',
        borderBottomWidth: 1,
        alignSelf: 'stretch',
        marginHorizontal: 15
    }
});

export default class CustomInput extends Component{
    render(){
        const {textInputStyle} = styles;
        const {isSecure} = this.props;
        return (
            <TextInput
                secureTextEntry={isSecure}
                style={textInputStyle}
                placeholder={this.props.placeholder}
                onChangeText={this.props.onChangeText}
                value={this.props.value}
            />
        );
    }
}