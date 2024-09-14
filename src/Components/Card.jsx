import { Link } from "react-router-dom";
import { useDentistStates } from "../Context/Context";
import { useEffect } from "react";
import PropTypes from "prop-types"; 

const Card = ({ dentistObject, name, username, id }) => {
  const { dispatch } = useDentistStates();

  useEffect(() => {
    console.log("Card mounted for dentist:", name);
    return () => {
      console.log("Card unmounted");
    };
  }, [name]);

  return (
    <div className="card">
      <Link to={`/Detail/${id}`}>
        <img
          style={{ width: "180px", alignItems: "left" }}
          src="/images/doctor.jpg" 
          alt="Doctor"
        />
        <h2>{username}</h2>
        <h2>{name}</h2>
        <h3>{id}</h3>
      </Link>
      
      {/* Botón para agregar a favoritos */}
      <button
        onClick={() => dispatch({ type: "ADD2Favs", payload: dentistObject })}
        className="favButton"
      >
        Star
      </button>
    </div>
  );
};

// Añadir validaciones de PropTypes
Card.propTypes = {
  dentistObject: PropTypes.object.isRequired, // Propiedad requerida de tipo objeto
  name: PropTypes.string.isRequired,          // Propiedad requerida de tipo string
  username: PropTypes.string.isRequired,      // Propiedad requerida de tipo string
  id: PropTypes.number.isRequired,            // Propiedad requerida de tipo número
};

export default Card;
