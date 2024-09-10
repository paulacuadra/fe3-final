import React from 'react'
import Card from '../Components/Card'
import { useEffect, useContext } from 'react'
import axios from 'axios'
import { ContextGlobal } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
 
  const {state, dispatch} = useContext(ContextGlobal);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        dispatch({ type: 'SET_DENTISTS', payload: response.data });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [dispatch]);

  return (
    <main className={state.theme === 'light' ? 'light' : 'dark'} >
      <h1>Home</h1>
      <div className='card-grid'>
      {state.dentists.map(dentist => (
        <Card key={dentist.id} dentist={dentist}/>
      ))}
      </div>
    </main>
  )
}

export default Home