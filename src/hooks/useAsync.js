import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchUrl() {
      await axios
        .get(url)
        .then((res) => setData(res.data))
        .then(() => setIsLoading(false))
        .catch((error) => setError(error));
    }
    fetchUrl();
  }, [url]);
  return { data, isLoading, error };
};

export default useFetch;
