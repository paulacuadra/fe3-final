import { createContext } from "react";
import { useReducer, useEffect, useMemo } from "react";
import axios from "axios";

// Estado inicial
export const initialState = {
  theme: 'light', 
  dentists: [],
  favorites: JSON.parse(localStorage.getItem('favorites')) || []
};

// Función reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DENTISTS":
      return { ...state, dentists: action.payload };  // Actualiza los datos de la API
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };  // Cambia entre temas claro y oscuro
    case "ADD_TO_FAVS":
      const updatedFavs = [...state.favorites, action.payload];
      localStorage.setItem("favorites", JSON.stringify(updatedFavs));  // Guarda los favoritos en localStorage
      return { ...state, favorites: updatedFavs };  // Actualiza los favoritos en el estado global
    case "REMOVE_FROM_FAVS":
      const filteredFavs = state.favorites.filter((fav) => fav.id !== action.payload.id);
      localStorage.setItem("favorites", JSON.stringify(filteredFavs));  // Elimina favoritos de localStorage
      return { ...state, favorites: filteredFavs };  // Actualiza los favoritos en el estado global
    default:
      return state;
  }
};

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Efecto para cargar los datos de la API
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch({ type: "SET_DENTISTS", payload: response.data });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Memoiza el valor del contexto para evitar renders innecesarios
  const contextValue = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};
