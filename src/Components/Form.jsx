import React, {useState}from "react";



const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({ name: '', email: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    let nameError = '';
    let emailError = '';
    
    // Validar nombre (debe tener más de 5 caracteres)
    if (formData.name.length <= 5) {
      nameError = 'El nombre debe tener más de 5 caracteres';
    }

    // Validar email (formato de email válido)
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      emailError = 'Email no válido';
    }

    // Si hay errores, actualizamos el estado
    if (nameError || emailError) {
      setErrors({ name: nameError, email: emailError });
      return false;
    }

    // Si no hay errores
    setErrors({ name: '', email: '' });
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que se recargue la página
    const isValid = validateForm();

    if (isValid) {
      console.log(formData); // Aquí podrías enviar la data al servidor si fuera necesario
      setIsSubmitted(true);
    }
  };

  return (
    <div className="form-container">
      {isSubmitted ? (
        <p>Gracias {formData.name}, te contactaremos cuando antes vía mail.</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nombre completo</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          
          <button type="submit">Enviar</button>
          {errors.name || errors.email ? (
            <p className="error">Por favor, verifica la información nuevamente.</p>
          ) : null}
        </form>
      )}
    </div>
  );
};

export default Form;
