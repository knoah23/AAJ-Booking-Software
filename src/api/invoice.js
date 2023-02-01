import bookingClient from './bookingClient';

const endpoint = 'invoices/';

const getInvoices = async () => {
  const response = await bookingClient.get(endpoint);
  return response;
};

const createInvoice = async (body) => {
  const response = await bookingClient.post(endpoint, body);
  return response;
};

const raiseInvoice = async (body) => {
  const response = await bookingClient.post(`${endpoint}raise_invoice/`, body);
  return response;
};

const readInvoice = async (id) => {
  const response = await bookingClient.get(`${endpoint}${id}/`);
  return response;
};

const updateInvoice = async (id, body) => {
  const response = await bookingClient.put(`${endpoint}${id}/`, body);
  return response;
};

const patchInvoice = async (id, body) => {
  const response = await bookingClient.patch(`${endpoint}${id}/`, body);
  return response;
};

const deleteInvoice = async (id) => {
  const response = await bookingClient.delete(`${endpoint}${id}/`);
  return response;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getInvoices,
  createInvoice,
  raiseInvoice,
  readInvoice,
  updateInvoice,
  patchInvoice,
  deleteInvoice
};
