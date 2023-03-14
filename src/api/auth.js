import bookingClient from './bookingClient';
import orgClient from './orgClient';

const endpoint = 'auth/';

const login = async (body) => {
  const response = await bookingClient.post(`${endpoint}login/`, body);
  return response;
};

const logout = async () => {
  const response = await bookingClient.post(`${endpoint}logout/`);
  return response;
};

const logoutAll = async () => {
  const response = await bookingClient.post(`${endpoint}logoutall/`);
  return response;
};

const getAccountData = async (id) => {
  const response = await orgClient.get(`iam/accounts/${id}/account_info/`);
  return response;
};

const createAccessToken = async (clientSecret, clientId) => {
  const response = await orgClient.post('o/token/', {
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: 'client_credentials',
    redirect_uri: 'http://localhost:3000/'
  });
  return response;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login,
  logout,
  logoutAll,
  getAccountData,
  createAccessToken
};
