import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
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
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 31,
    borderTopWidth: 0.5,
    borderTopColor: 'rgba(151, 151, 151, 0.6);',
    alignItems: 'baseline',
    paddingVertical: 10,
  },
  infoTextDate: {
    fontFamily: 'Panton Bold',
    fontSize: 16,
    lineHeight: 22,
    color: '#737373',
  },
  dateText: {
    fontFamily: 'Panton Regular',
    color: '#979797',
  },
});

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timePickerVisible: false,
      timePicker2Visible: false,
      time1Value: null,
      time2Value: null,
    };
  }

  handleOpen1 = () => {
    this.setState({timePickerVisible: true});
  };
  handleOpen2 = () => {
    this.setState({timePicker2Visible: true});
  };

  handleTimePicker = date => {
    this.props.onChangeTimes(date, this.state.time2Value);
    this.setState({
      timePickerVisible: false,
      time1Value: date,
    });
  };

  handleTimePicker2 = date => {
    this.props.onChangeTimes(this.state.time1Value, date);
    this.setState({
      timePickerVisible: false,
      time2Value: date,
    });
  };

  handleCancel = () => {
    this.setState({
      timePickerVisible: false,
      timePicker2Visible: false,
    });
  };

  render() {
    const {label, infoText, onChangeTimes, valueTime1, valueTime2} = this.props;
    const {main, textInputStyle, dateRow, infoTextDate, dateText} = styles;

    const value =
      valueTime1 == null || valueTime1 == undefined
        ? ''
        : `${valueTime1} às ${valueTime2}`;
    return (
      <View style={{flex: 1, width: '100%'}}>
        <ColapsableInput
          infoText={infoText}
          icon={meetings_clock}
          label={label}
          onClick={() => {}}
          value={value}>
          <TouchableOpacity style={[dateRow]} onPress={this.handleOpen1}>
            <Text style={[infoTextDate]}>Iniciar</Text>
            <Text style={[dateText]}>{valueTime1}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[dateRow, {paddingBottom: 1}]}
            onPress={this.handleOpen2}>
            <Text style={[infoTextDate]}>Encerrar</Text>
            <Text style={[dateText]}>{valueTime2}</Text>
          </TouchableOpacity>
          <DateTimePicker
            isVisible={this.state.timePickerVisible}
            onConfirm={this.handleTimePicker}
            onCancel={this.handleCancel}
            mode={'time'}
            is24Hour={true}
            locale="pt_BR"
          />
          <DateTimePicker
            isVisible={this.state.timePicker2Visible}
            onConfirm={this.handleTimePicker2}
            onCancel={this.handleCancel}
            mode={'time'}
            is24Hour={true}
            locale="pt_BR"
          />
        </ColapsableInput>
      </View>
    );
  }
}
