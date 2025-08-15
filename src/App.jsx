
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import Card from './components/Card';
import './App.css';
import cardsData from './data/cardsData.json';

const App = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de carga asincrónica
    setTimeout(() => {
      setCards(cardsData);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Navbar />
      <Layout>
        {loading ? (
          <p>Cargando tarjetas...</p>
        ) : (
          cards.map((card, index) => (
            <Card key={index} title={card.title} description={card.description} />
          ))
        )}
      </Layout>
    </>
  );
};

export default App;
