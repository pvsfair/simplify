import React, {Component} from 'react';
import {View, Text, StyleSheet, Modal, TouchableOpacity} from 'react-native';

import ColapsableInput from './colapsableInput';
import Button from '../button';

import {refund_toggle} from '../../../assets/icons';

const styles = StyleSheet.create({
  modalGreetings: {
    fontFamily: 'Panton Bold',
    color: '#919699',
  },
  modal: {
    padding: 20,
  },
  optionListStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  optionItemStyle: isSelected => {
    return {
      flexBasis: '32%',
      backgroundColor: isSelected ? '#0154C6' : '#fff',
      paddingVertical: 5,
      borderRadius: 15,
      marginVertical: 4,
      borderWidth: 1,
      borderColor: isSelected ? '#0154C6' : '#C6CACC',
    };
  },
  optionItemTextStyle: isSelected => {
    return {
      fontFamily: 'Panton Bold',
      color: isSelected ? '#fff' : '#919699',
    };
  },
});

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      selectedValue: 'EDUCACAO',
    };
  }

  handleClicked = toOpen => {
    this.setState({modalVisible: toOpen});
  };

  handleSelected = selected => {
    this.props.onChangeValue(selected);
    this.setState({
      selectedValue: selected,
    });
  };

  handleCloseModal = () => {
    this.setState({
      modalVisible: false,
    });
    this.refs.colapsable.handleClick();
  };

  render() {
    const {label, infoText, onChangeDate, value, options} = this.props;
    const {
      modalGreetings,
      modal,
      optionListStyle,
      optionItemStyle,
      optionItemTextStyle,
    } = styles;

    const optionsList = [];
    for (let o in options) {
      //   console.log(o, options[o]);
      const isSelected = this.state.selectedValue === o;
      optionsList.push(
        <TouchableOpacity
          key={o}
          underlayColor="#0154C6"
          style={[optionItemStyle(isSelected), {}]}
          onPressIn={() => {
            this.handleSelected(o);
          }}>
          <Text
            style={[optionItemTextStyle(isSelected), {textAlign: 'center'}]}>
            {options[o]}
          </Text>
        </TouchableOpacity>,
      );
    }
    // console.log(options);

    return (
      <View style={{flex: 1, width: '100%'}}>
        <ColapsableInput
          ref="colapsable"
          infoText={infoText}
          icon={refund_toggle}
          label={label}
          onClick={this.handleClicked}
          value={value}>
          <Modal
            visible={this.state.modalVisible}
            animationType="slide"
            transparent={false}>
            <View style={[modal]}>
              <Text style={[modalGreetings]}>Selectione o tipo</Text>
              <View style={optionListStyle}>{optionsList}</View>
              <Button onPress={this.handleCloseModal} label="Selecionar" />
            </View>
          </Modal>
        </ColapsableInput>
      </View>
    );
  }
}
