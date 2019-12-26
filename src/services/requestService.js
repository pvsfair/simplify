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

export default {signIn};
export {signIn};
