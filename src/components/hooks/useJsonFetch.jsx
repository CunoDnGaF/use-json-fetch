import { useEffect, useState } from "react";

const useJsonFetch = function(url) {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      getData();
    }, []);
  
    const getData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        setData(await response.json());
        setError(null);
        setLoading(false);
      } catch (e) {
        setError(e.message);
      }
    };
  
    return {data, loading, error};
  }
  
  export default useJsonFetch;