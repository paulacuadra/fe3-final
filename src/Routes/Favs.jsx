import React, {useContext} from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <div className="grid">
      {state.favorites.length > 0 ? (
        state.favorites.map(dentist => (
          <Card key={dentist.id} dentist={dentist}/>
        ))
      ) : (
        <p>No tienes dentistas en favoritos.</p>
      )}
    </div>
  );
};

export default Favs;
