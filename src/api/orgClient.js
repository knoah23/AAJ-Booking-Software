import { create } from 'apisauce';

const apiClient = create({
  baseURL: 'https://cors-proxy-server.herokuapp.com/https://management.aajexpress.org/api/v1/'
});

apiClient.addAsyncRequestTransform(async (request) => {
  const accessToken = window.localStorage.getItem('accessToken');
  if (!accessToken) return;
  request.headers.Authorization = 'Bearer ' + accessToken;
});

export default apiClient;
