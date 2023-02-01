import { useState } from 'react';

const useApi = (apiFunc, params) => {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const request = async () => {
    setLoading(true);
    const response = await apiFunc(params);
    setLoading(false);

    if (!response.ok) return (setError(true), setErrorMessage(response.data));

    setError(false);
    setData(response.data);
  };

  return { data, errorMessage, error, loading, request };
};

export default useApi;
