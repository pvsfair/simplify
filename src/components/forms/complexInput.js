import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import FloatingLabelInput from '../../components/forms/floatingLabelInput';
import ColapsableInput from './colapsableInput';
import Button from '../button';

import {refund_toggle} from '../../../assets/icons';

const styles = StyleSheet.create({
  modalGreetings: {
    fontFamily: 'Panton Bold',
    color: '#5E6366',
    fontSize: 38,
    lineHeight: 46,
    letterSpacing: -1.5,
  },
  modal: {
    flex: 1,
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
      bankAccountData: {
        bankName: '',
        fullName: '',
        agency: '',
        account: '',
      },
    };
  }

  handleClicked = toOpen => {
    this.setState({modalVisible: toOpen});
  };

  handleSelected = bankAccountData => {
    this.props.onChangeValue(bankAccountData);
    this.setState({
      selectedValue: selected,
    });
  };

  handleCloseModal = () => {
    console.log(this.state.bankAccountData);

    // this.setState({
    //   modalVisible: false,
    // });
    // this.refs.colapsable.handleClick();
  };

  setBankName = bankName => {
    const bankAccountData = this.state.bankAccountData;
    bankAccountData.bankName = bankName;
    this.setState({bankAccountData});
  };

  setFullName = fullName => {
    const bankAccountData = this.state.bankAccountData;
    bankAccountData.fullName = fullName;
    this.setState({bankAccountData});
  };

  setAgency = agency => {
    const bankAccountData = this.state.bankAccountData;
    bankAccountData.agency = agency;
    this.setState({bankAccountData});
  };

  setAccount = account => {
    const bankAccountData = this.state.bankAccountData;
    bankAccountData.account = account;
    this.setState({bankAccountData});
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

    return (
      <View style={{flex: 1, width: '100%'}}>
        <ColapsableInput
          ref="colapsable"
          infoText={infoText}
          icon={refund_toggle}
          label={label}
          onClick={this.handleClicked}
          value={value.toString()}>
          <Modal
            visible={this.state.modalVisible}
            animationType="slide"
            transparent={false}>
            <View style={[modal]}>
              <ScrollView>
                <Text style={[modalGreetings]}>Dados Bancários</Text>

                <FloatingLabelInput
                  label="Nome do Banco"
                  onChangeText={bankName => this.setBankName(bankName)}
                  value={this.state.bankAccountData.bankName}
                />
                <FloatingLabelInput
                  label="Nome Completo"
                  onChangeText={fullName => this.setFullName({fullName})}
                  value={this.state.bankAccountData.fullName}
                />
                <FloatingLabelInput
                  type={'cpf'}
                  label="CPF"
                  onChangeText={cpfValue => this.setState({cpfValue})}
                  value={this.state.cpfValue}
                />
                <FloatingLabelInput
                  label="Agência"
                  onChangeText={agency => this.setAgency({agency})}
                  value={this.state.bankAccountData.agency}
                />
                <FloatingLabelInput
                  label="Conta"
                  onChangeText={account => this.setAccount({account})}
                  value={this.state.bankAccountData.account}
                />
              </ScrollView>
              <Button
                style={{marginTop: 15}}
                onPress={this.handleCloseModal}
                label="Selecionar"
              />
            </View>
          </Modal>
        </ColapsableInput>
      </View>
    );
  }
}
