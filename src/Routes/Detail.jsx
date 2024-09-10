import React, {useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const {id}=useParams();
  const [dentist, setDentist]=useState(null);
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => setDentist(response.data));
  }, [id]);

  if (!dentist) return <p>Cargando...</p>;
  return (
    <>
      <h1>Detail Dentist id </h1>
      <h2>{dentist.name}</h2>
      <p>Email: {dentist.email}</p>
      <p>Telefono: {dentist.phone}</p>
      <p>Sitio web: {dentist.website}</p>
      </>
  )
}

export default Detail