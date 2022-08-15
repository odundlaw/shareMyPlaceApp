import React from "react";
import axios from "axios";

async function httpClient(url, method, body = null) {
  return axios({ url: url, method, data: body && body });
}

function useFetch() {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const resetErrors = () => {
    setError("");
  };

  const doApiCall = React.useCallback(async (url, method, requestBody) => {
    url = `http://localhost:8080/api/${url}`;
    try {
      setLoading(true);
      const data = await httpClient(url, method, requestBody);
      if (data.status >= 400 || data.status < 200) {
        throw new Error("Unable to Perform The operation");
      }
      return data;
    } catch (err) {
      setError(err.response?.data);
      throw error.response?.data;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    resetErrors,
    doApiCall,
    loading,
    error,
  };
}

export default useFetch;
