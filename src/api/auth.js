import bookingClient from "./bookingClient";
import orgClient from "./orgClient";

const endpoint = "auth/";

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
  const response = await orgClient.post("o/token/", {
    client_id: "NFkJNIgBCH759xONkNKzHoa6XetgzwHxILB2qxPS",
    client_secret:
      "bfTzH2c9YgmHQxtFLYnntYqwtBJ3WwPZo3fLqDBA7et69g2DU1RaVaRHYdhfX6Mj6Puc7sPW6KyKu9LsVSHv8OJxjTYB3oEs1Rv4a3OR2WTSAJjbbz5d4y10rfzLvChb",
    grant_type: "client_credentials",
    redirect_uri: "http://localhost:3000/",
  });
  return response;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login,
  logout,
  logoutAll,
  getAccountData,
  createAccessToken,
};
