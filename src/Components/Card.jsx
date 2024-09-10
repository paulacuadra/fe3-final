import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";




const Card = ({ dentist}) => {
  const { state, dispatch } = useContext(ContextGlobal);
  const isFavorite = state.favorites.some(fav => fav.id === dentist.id);

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    if (isFavorite) {
      dispatch({ type: 'REMOVE_FROM_FAVS', payload: dentist });
    } else {
      dispatch({ type: 'ADD_TO_FAVS', payload: dentist });
    }
  }

  return (
    <div className="card">
          <div key={dentist.id}>
          <h2>{dentist.name}</h2>
          <p>{dentist.username}</p>
          <button onClick={addFav} className="favButton">
          {isFavorite ? 'Remove from Fav' : 'Add to Fav'}
        </button>
        <Link to={`/dentist/${dentist.id}`}>Ver detalles</Link>
        </div>          
    </div>
  );
};

export default Card;
