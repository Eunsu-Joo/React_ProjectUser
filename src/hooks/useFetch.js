import { useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchUrl() {
    await axios.get(url).then((res) => {});
  }
};
