import React, {useContext} from 'react'
import { ContextGlobal } from './utils/global.context';
import { Link } from 'react-router-dom';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    
     <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to="/home">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/favs">Favorites</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button className="button-theme" onClick={toggleTheme}>{state.theme === 'light' ? 'Dark' : 'Light'} theme</button>
    </nav>
    
  )
}

export default Navbar