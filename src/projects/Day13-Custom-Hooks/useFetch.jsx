import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url, options = {}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const res = await axios.get(url, { ...options });
        const data = res.data;
        console.log(data);
        setFetchedData(data);
        setIsError(null);
        setIsLoading(false);
      } catch (e) {
        console.error(e.message);
        setIsError(`${e}. Some Error Occured`);
        setIsLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { fetchedData, isError, isLoading };
};
export default useFetch;
