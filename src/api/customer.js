import bookingClient from './bookingClient';

const endpoint = 'customers/';

const getCustomers = async () => {
  const response = bookingClient.get(endpoint);
  return response;
};

const createCustomer = async (body) => {
  const response = bookingClient.post(endpoint, body);
  return response;
};

const readCustomer = async (id) => {
  const response = bookingClient.get(`${endpoint}${id}/`);
  return response;
};

const updateCustomer = async (id, body) => {
  const response = bookingClient.put(`${endpoint}${id}/`, body);
  return response;
};

const patchInvoice = async (id, body) => {
  const response = bookingClient.patch(`${endpoint}${id}/`, body);
  return response;
};

const deleteCustomer = async (id) => {
  const response = bookingClient.delete(`${endpoint}${id}/`);
  return response;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  readCustomer,
  getCustomers,
  createCustomer,
  updateCustomer,
  patchInvoice,
  deleteCustomer
};
