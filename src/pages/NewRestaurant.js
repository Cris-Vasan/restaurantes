import React, { useState } from 'react';

function NewRestaurant() {
  const [form, setForm] = useState({
    name: '',
    description: '',
    address: '',
    image: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('Restaurante agregado (solo simulado)');
    console.log('Datos del restaurante:', form);
  };

  return (
    <div className="container">
      <h2>Nuevo Restaurante</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Nombre" onChange={handleChange} className="form-control mb-2" />
        <input name="description" placeholder="Descripción" onChange={handleChange} className="form-control mb-2" />
        <input name="address" placeholder="Dirección" onChange={handleChange} className="form-control mb-2" />
        <input name="image" placeholder="URL de la Imagen" onChange={handleChange} className="form-control mb-2" />
        <button type="submit" className="btn btn-primary">Guardar</button>
      </form>
    </div>
  );
}

export default NewRestaurant;
