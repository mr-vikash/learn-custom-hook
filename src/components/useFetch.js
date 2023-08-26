
import { useState,useEffect } from 'react';

const useFetch = (url) => {
    const [data,setData] = useState([]);

  useEffect(()=>{
       async function fetchData() {
      const res = await fetch(url)
      const getRes =  await res.json()
      setData(getRes)
      
    }
    fetchData();
  },[])
  return [data]
}

export default useFetch
