import React, {useState, useEffect} from 'react';
import axios from 'axios';
function useFetch(url) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      // try bloğu içinde denediğimiz komutlardan birinde hata alırsak catch bloğuna düşürecektir.
      const {data: responseData} = await axios.get(url);
      setData(responseData);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {loading, data, error};
}

export default useFetch;
