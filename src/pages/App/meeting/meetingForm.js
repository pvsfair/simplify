import React, {Component} from 'react';
import {View, ScrollView, Text, StyleSheet, Animated} from 'react-native';

import moment from 'moment';

import ImageWBg from '../../../components/image/imageWithBg';

import Button from '../../../components/button';
import TextInput from '../../../components/forms/longTextInput';
import DateInput from '../../../components/forms/datePicker';
import TimeInput from '../../../components/forms/timePicker';

import {formatDate} from '../../../utils/dateUtils';

const styles = StyleSheet.create({
  scroll: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 0,
    marginHorizontal: 0,
  },
  greetings: {
    marginVertical: 20,
    marginBottom: 0,
    alignSelf: 'flex-start',
    fontFamily: 'Panton Bold',
    fontSize: 26,
    color: '#5E6366',
    lineHeight: 32,
    letterSpacing: -1.5,
    paddingLeft: 15,
  },
});
export default class Meeting extends Component {
  constructor(props) {
    super(props);
    const {navigation} = props;

    this.state = {
      user: '',
      isEdit: navigation.getParam('isEdit', false),
      date: null,
      timeInit: null,
      timeEnd: null,
      people: [],
      reason: '',
    };
  }

  handleFinishForm = () => {
    console.log('Reunião agendada com sucesso :)');
    this.props.navigation.goBack();
  };

  render() {
    const {scroll, greetings} = styles;

    return (
      <View style={{flex: 1}}>
        <ScrollView contentContainerStyle={scroll}>
          <Text style={greetings}>Agendar Reunião</Text>
          <DateInput
            label="Data"
            infoText="Informe a data"
            onChangeDate={date => this.setState({date})}
            value={this.state.date && moment(this.state.date).format('LL')}
          />
          <TimeInput
            label="Hora"
            infoText="Informe o horário"
            onChangeTimes={(timeInit, timeEnd) =>
              this.setState({timeInit, timeEnd})
            }
            valueTime1={formatDate(this.state.timeInit)}
            valueTime2={formatDate(this.state.timeEnd)}
          />
          <TextInput
            label="Participantes"
            infoText="Informe os participantes"
          />
          <TextInput
            label="Motivo"
            infoText="Informe o motivo da reunião"
            onChangeText={reason => this.setState({reason})}
            value={this.state.reason}
          />
        </ScrollView>
        <Button label="Agendar Reunião" onPress={this.handleFinishForm} />
      </View>
    );
  }
}
