import api from '../config/api';

export const signIn = async (cpf, password) => {
  return {
    id: 1,
    cpf: '00000009652',
    name: 'Lucas Pechera',
    email: 'lucas.pechera@tradeupgroup.com',
  };
};

export const signOut = async (cpf, password) => {
  return true;
};

export const resetPassword = async (cpf, birthDate) => {
  return true;
};

export const changePassword = async (oldPassword, newPassword) => {
  return true;
};

export default {signIn, signOut, resetPassword, changePassword};
