import bookingClient from './bookingClient';

const endpoint = 'orders/';

const getOrders = async () => {
  const response = await bookingClient.get(endpoint);
  return response;
};

const createOrder = async (body) => {
  const response = await bookingClient.post(endpoint, body);
  return response;
};

const bookWithTPL = async (body) => {
  const response = await bookingClient.post(`${endpoint}book_with_tpl/`, body);
  return response;
};

const getOrderCategories = async () => {
  const response = await bookingClient.get(`${endpoint}categories/`);
  return response;
};

const createOrderCategory = async (body) => {
  const response = await bookingClient.post(`${endpoint}categories/`, body);
  return response;
};

const updateOrderCategory = async (body) => {
  const response = await bookingClient.put(`${endpoint}categories/`, body);
  return response;
};

const deleteOrderCategory = async () => {
  const response = await bookingClient.delete(`${endpoint}categories/`);
  return response;
};

const generateQuote = async (body) => {
  const response = await bookingClient.post(`${endpoint}generate_quote/`, body);
  return response;
};

const raiseInvoice = async (body) => {
  const response = await bookingClient.post(`${endpoint}raise_invoice/`, body);
  return response;
};

const readOrder = async (id) => {
  const response = await bookingClient.get(`${endpoint}${id}/`);
  return response;
};

const updateOrder = async (id, body) => {
  const response = await bookingClient.put(`${endpoint}${id}/`, body);
  return response;
};

const patchOrder = async (id, body) => {
  const response = await bookingClient.patch(`${endpoint}${id}/`, body);
  return response;
};

const deleteOrder = async (id) => {
  const response = await bookingClient.delete(`${endpoint}${id}/`);
  return response;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder,
  bookWithTPL,
  getOrderCategories,
  createOrderCategory,
  updateOrderCategory,
  deleteOrderCategory,
  generateQuote,
  raiseInvoice,
  readOrder,
  patchOrder
};
