import { create } from 'apisauce';

const apiClient = create({
  baseURL: 'https://cors-proxy-server.herokuapp.com/http://booking.aajexpress.org/api/v1/'
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = window.localStorage.getItem('authToken');
  if (!authToken) return;
  request.headers.Authorization = 'Token ' + authToken;
});

export default apiClient;
