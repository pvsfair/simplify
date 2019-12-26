import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

import moment from 'moment';

import Button from '../../../components/button';
import LongTextInput from '../../../components/forms/longTextInput';
import DateInput from '../../../components/forms/datePicker';
import SelectInput from '../../../components/forms/selectInput';
import TextInput from '../../../components/forms/textInput';
import ComplexInput from '../../../components/forms/complexInput';

import {refundTypes} from '../../../utils/refundHelpers';

import {refund_money} from '../../../../assets/icons';

const Form = props => {
  const {navigation} = props;
  const [isEdit, setIsEdit] = useState(navigation.getParam('isEdit', false));
  const [date, setDate] = useState(new Date());
  const [type, setType] = useState('');
  const [amount, setAmount] = useState('');
  const [bankAccountData, setBankAccountData] = useState({});
  const [reason, setReason] = useState('');

  const {scroll, greetings} = styles;

  const greetingsTexto = isEdit ? 'Editar' : 'Solicitar';

  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={scroll}>
        <Text style={greetings}>{greetingsTexto} Reembolso</Text>
        <DateInput
          label="Data"
          infoText="Informe a data"
          onChangeDate={date => setDate(date)}
          value={moment(date).format('LL')}
        />
        <SelectInput
          label="Tipo"
          infoText="Selecione o tipo"
          options={refundTypes}
          onChangeValue={selected => setType(selected)}
          value={refundTypes[type]}
        />
        <TextInput
          type={'money'}
          label="Valor"
          infoText="Informe o valor"
          textFixedLeft="R$"
          icon={refund_money}
          onChangeText={amount => setAmount(amount)}
          value={amount}
        />
        <ComplexInput
          label="Dados Bancários"
          infoText="Informe os dados bancários para pagamento"
          onChangeText={text => setReason(text)}
          value={bankAccountData}
        />
        <LongTextInput
          label="Motivo"
          infoText="Informe o motivo da solicitação"
          onChangeText={text => setReason(text)}
          value={reason}
        />
      </ScrollView>
      <Button label="Solicitar Reembolso" />
    </View>
  );
};

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
    fontSize: 38,
    color: '#5E6366',
    lineHeight: 46,
    letterSpacing: -1.5,
    paddingLeft: 15,
  },
});

export default Form;
