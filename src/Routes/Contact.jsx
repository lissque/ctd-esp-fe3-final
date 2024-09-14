import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Want to know more?</h2>
      <p className="contact-description">
        Send us your questions and we will contact you
      </p>
      <Form />
    </div>
  );
};

export default Contact