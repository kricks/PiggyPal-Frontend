import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

interface DataItem {
  name: string;
  id: number;
  created_at: string;
  updated_at: string;
}

const App = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const backend = 'http://localhost:3000/data';
  useEffect(() => {
    const fetchData = async() => {
      try {
        const res = await axios.get(backend);
        setData(res.data);
        console.log('res, ',res.data);
      } catch (error) {
        console.log('error fetching data', error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Data from Backend</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item?.name} - {item?.created_at}</li>
        ))}
      </ul>
    </div>
  );
};
export default App;
