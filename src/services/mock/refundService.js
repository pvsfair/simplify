import api from '../config/api';

import {refunds} from './mockData';

export const listRefunds = async () => {
  return refunds;
};

export const getRefund = async refundId => {
  return refunds.find(refund => refund.id == refundId);
};

export const deleteRefund = async refundId => {
  return true;
};

export const createRefund = async refundData => {
  return true;
};

export const editRefund = async (refundId, refundData) => {
  return true;
};

export default {listRefunds, getRefund, deleteRefund, createRefund, editRefund};
