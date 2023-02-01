import bookingClient from './bookingClient';

const endpoint = 'receipts/';

const getReceipts = async () => {
  const response = await bookingClient.get(endpoint);
  return response;
};

const createReceipt = async (body) => {
  const response = await bookingClient.post(endpoint, body);
  return response;
};

const readReceipt = async (id) => {
  const response = await bookingClient.get(`${endpoint}${id}/`);
  return response;
};

const updateReceipt = async (id, body) => {
  const response = await bookingClient.put(`${endpoint}${id}/`, body);
  return response;
};

const patchReceipt = async (id, body) => {
  const response = await bookingClient.patch(`${endpoint}${id}/`, body);
  return response;
};

const deleteReceipt = async (id) => {
  const response = await bookingClient.delete(`${endpoint}${id}/`);
  return response;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getReceipts,
  createReceipt,
  readReceipt,
  updateReceipt,
  patchReceipt,
  deleteReceipt
};
