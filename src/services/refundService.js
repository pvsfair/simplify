import api from '../config/api';

const listRefunds = async () => {
  try {
    const response = await api.get('/refund');

    const {message, data} = response.data;

    return data;
  } catch (error) {
    console.log(error);
  }
};

const getRefund = async refundId => {
  try {
    const response = await api.get(`/signin/${refundId}`);

    const {message, data} = response.data;

    return data;
  } catch (error) {
    console.log(error);
  }
};

const deleteRefund = async refundId => {
  try {
    const response = await api.delete(`/signin/${refundId}`);

    return response.status == 200;
  } catch (error) {
    console.log(error);
  }
};

const createRefund = async refundData => {
  try {
    const response = await api.post(`/signin`, {refundData});

    return response.status == 200;
  } catch (error) {
    console.log(error);
  }
};

const editRefund = async (refundId, refundData) => {
  try {
    const response = await api.put(`/signin/${refundId}`, {refundData});

    return response.status == 200;
  } catch (error) {
    console.log(error);
  }
};

export default {listRefunds, getRefund, deleteRefund, createRefund, editRefund};
export {listRefunds, getRefund, deleteRefund, createRefund, editRefund};
