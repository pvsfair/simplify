import api from '../config/api';

export const acceptRequest = async requestId => {
  try {
    const response = await api.post(`/request/accept/${requestId}`);

    const {message, data} = response.data;
    const {user} = data;

    return user;
  } catch (error) {
    console.log(error);
  }
};

export default {acceptRequest};
