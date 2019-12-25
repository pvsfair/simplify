import React, {Component} from 'react';
import {View, Text, StyleSheet, Modal} from 'react-native';
import ColapsableInput from './colapsableInput';

import DateTimePicker from 'react-native-modal-datetime-picker';

import {
  meetings_calendar2,
  meetings_clock,
  meetings_people,
  meetings_lines,
} from '../../../assets/icons';

const styles = StyleSheet.create({
  main: {
    width: '96%',
    shadowColor: '#2b2b2b',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 6,
    padding: 0,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginVertical: 10,
    marginHorizontal: 0,
  },
  textInputStyle: {
    width: '100%',
    borderColor: '#E3E5E6',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
});

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datePickerVisible: false,
      dateValue: '',
    };
  }

  handleClicked = toOpen => {
    this.setState({datePickerVisible: toOpen});
  };

  handleDatePicker = date => {
    this.props.onChangeDate(date);
    this.setState({
      datePickerVisible: false,
      dateValue: date,
    });
    this.refs.colapsable.handleClick();
  };

  handleCancel = () => {
    this.setState({
      datePickerVisible: false,
    });
    this.refs.colapsable.handleClick();
  };

  render() {
    const {label, infoText, onChangeDate, value} = this.props;
    const {main, textInputStyle} = styles;

    return (
      <View style={{flex: 1, width: '100%'}}>
        <ColapsableInput
          ref="colapsable"
          infoText={infoText}
          icon={meetings_calendar2}
          label={label}
          onClick={this.handleClicked}
          value={value}>
          <DateTimePicker
            isVisible={this.state.datePickerVisible}
            onConfirm={this.handleDatePicker}
            onCancel={this.handleCancel}
            mode={'date'}
          />
        </ColapsableInput>
      </View>
    );
  }
}
