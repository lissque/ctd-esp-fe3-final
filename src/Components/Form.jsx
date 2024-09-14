import { useState } from "react"; // Importar useState
import FormResults from "./FormResults";

const Form = () => {
  // Aqui deberan implementar el form completo con sus validaciones
  const [customer, setCustomer] = useState({
    name: "",
    email: ""
  });

  const [renderData, setRenderData] = useState(false);
  const [error, setError] = useState(false);

  const handleChangeName = (event) => {
    setCustomer({ ...customer, name: event.target.value });
  };

  const handleChangeEmail = (event) => {
    setCustomer({ ...customer, email: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const spaceRegex = /\s/;
    
    // Validaciones
    if (
      customer.name.length > 5 &&
      customer.name.charAt(0) !== " " &&
      customer.name.slice(-1) !== " " &&
      spaceRegex.test(customer.name) &&
      emailRegex.test(customer.email)
    ) {
      setRenderData(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      {!renderData ? (
        <form>
          <h4 style={{ textAlign: "left" }}>
            Please, give us your contact details and we will reach out to you!
          </h4>
          <label htmlFor="name">What is your name and last name?</label>
          <input
            type="text"
            id="name"
            value={customer.name}
            onChange={handleChangeName}
          />
          <label htmlFor="email">Which email should we use to contact you?</label>
          <input
            type="text"
            id="email"
            value={customer.email}
            onChange={handleChangeEmail}
          />
          <button onClick={handleSubmit}>Submit</button>
        </form>
      ) : (
        <FormResults name={customer.name} email={customer.email} />
      )}
      {error && (
        <h3 style={{ color: "red", position: "absolute", width: "200px" }}>
          Please, verify the entered information again
        </h3>
      )}
    </div>
  );
};

export default Form;