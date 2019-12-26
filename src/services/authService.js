import api from '../config/api';

const signIn = async (cpf, password) => {
  try {
    const response = await api.post('/signin', {cpf, password});

    const {message, data} = response.data;
    const {user} = data;

    return user;
  } catch (error) {
    console.log(error);
  }
};

const signOut = async (cpf, password) => {
  try {
    const response = await api.post('/signout');
    return response.status == 200;
  } catch (error) {
    console.log(error);
  }
};

const resetPassword = async (cpf, birthDate) => {
  try {
    const response = await api.post('/resetPassword');
    return response.status == 200;
  } catch (error) {
    console.log(error);
  }
};

const changePassword = async (oldPassword, newPassword) => {
  try {
    const response = await api.post('/changePassword', {
      oldPassword,
      newPassword,
    });
    return response.status == 200;
  } catch (error) {
    console.log(error);
  }
};

export default {signIn, signOut, resetPassword, changePassword};
export {signIn, signOut, resetPassword, changePassword};
