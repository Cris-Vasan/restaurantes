import React from 'react';
import { restaurantsData } from '../restaurantsData';

function Home() {
  return (
    <div className="container">
      <h2>Lista de Restaurantes</h2>
      <div className="restaurant-grid">
        {restaurantsData.map((rest, i) => (
          <div key={i} className="restaurant-card">
            <img src={rest.image} alt={rest.name} />
            <h3>{rest.name}</h3>
            <p>{rest.address}</p>
            <p>{rest.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
