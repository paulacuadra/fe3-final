import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => setDentist(response.data));
  }, [id]);

  if (!dentist) return <p>Cargando...</p>;
  return (
    <div className='detail'>
      <div className='detail-card'>
        <h1>{dentist.name}</h1>
        <img src='/images/doctor.jpg'></img>
        <p>Email: {dentist.email}</p>
        <p>Telefono: {dentist.phone}</p>
        <p>Sitio web: {dentist.website}</p>
      </div>
    </div>
  )
}

export default Detail