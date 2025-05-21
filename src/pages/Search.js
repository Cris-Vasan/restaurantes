import React, { useState } from 'react';
import { restaurantsData } from '../restaurantsData';

function Search() {
  const [query, setQuery] = useState('');

  const resultados = restaurantsData.filter(rest =>
    rest.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Búsqueda de Restaurantes</h2>
      <input
        type="text"
        placeholder="Buscar por nombre"
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="form-control"
      />

      <div className="restaurant-grid">
        {resultados.length > 0 ? (
          resultados.map((rest, i) => (
            <div key={i} className="restaurant-card">
              <img src={rest.image} alt={rest.name} />
              <h3>{rest.name}</h3>
              <p>{rest.address}</p>
              <p>{rest.description}</p>
            </div>
          ))
        ) : (
          <p style={{ marginTop: '2rem', color: '#777', textAlign: 'center', width: '100%' }}>
            No se encontró ningún restaurante con ese nombre.
          </p>
        )}
      </div>
    </div>
  );
}

export default Search;
