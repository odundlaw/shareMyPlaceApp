import React from "react";
import axios from "axios";

function useFetch() {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const doApiCall = React.useCallback(
    async (url, method = "GET", requestBody = null, headers = {}) => {
      url = `http://localhost:8080/api/${url}`;

      try {
        setLoading(true);
        const data = await axios({
          url: url,
          method,
          data: requestBody,
          headers: headers,
          withCredentials: true
        });

        if (data.status >= 400 || data.status < 200) {
          throw new Error("Unable to Perform The operation");
        }
      
        return data;
      } catch (err) {
        setError(err.response?.data);
        throw err.response?.data;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const resetErrors = React.useCallback(() => {
    setError(null);
  }, []);

  return {
    resetErrors,
    doApiCall,
    loading,
    error,
  };
}

export default useFetch;
