import { useState, useEffect } from 'react';

const useHttpRequest = (requestUrl, options = {}, sendImmediately = false) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [initiate, setRequestInitiation] = useState(sendImmediately);
  const [params, setparams] = useState(options);
  const [url, setUrl] = useState(requestUrl);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    if (initiate) {
        fetchData();
    }
  }, [url, params]);

  return { data, error, isLoading, setRequestInitiation, setparams, setUrl };
};

export {
    useHttpRequest   
}
