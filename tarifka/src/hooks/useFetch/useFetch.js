import {useState, useEffect} from 'react';
import axios from 'axios';
function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const {data: responseData} = await axios.get(url);
      setData(responseData);
      setLoading(false);
    } catch (err) {
      console.log('HATA');
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {loading, data};
}
export default useFetch;
