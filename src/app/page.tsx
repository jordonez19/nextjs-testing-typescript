'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

interface HomeProps {
  apiUrl: string;
}

const Home: React.FC<HomeProps> = ({ apiUrl }) => {
  const [data, setData] = useState<any>({});

  const getData = async () => {
    try {
      let payload = {
        features: [[1, 2, 3], [4, 5, 6], [7, 8, 9]], // Ajusta esto según sea necesario
        k: 3 // Asegúrate de que 'k' sea un valor correcto
      };

      const response = await axios.post(apiUrl, payload);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, [apiUrl]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <h1 style={{
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '1rem'
      }}>
      Resultado: {data.result}</h1>

    </main>
  );
}

export default Home;
