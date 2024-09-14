import { useEffect } from "react";
import Card from "../Components/Card";
import { useDentistStates } from "../Context/Context";

// Este componente deberá ser estilado como "dark" o "light" dependiendo del tema del Context

const Favs = () => {
  const { state, dispatch } = useDentistStates();

  useEffect(() => {
    localStorage.setItem("FavoritesDentist", JSON.stringify(state.favDentist));
  }, [state]);

  return (
    <main>
      <h1>Dentists Favs</h1>
      <div className="button-container">
        <button onClick={() => dispatch({ type: "ResetFavs" })}>Reset Favorites</button>
      </div>
      <div className="card-grid">
        {state.favDentist.map((dentistObject) => (
          <Card
            key={dentistObject.id}
            name={dentistObject.name}
            username={dentistObject.username}
            id={dentistObject.id}
            dentistObject={dentistObject}
          />
        ))}
      </div>
    </main>
  );
};

export default Favs;
