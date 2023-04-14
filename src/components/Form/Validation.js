export function validate(userData) {
    const errors = {};
  
    // Validación de email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
      errors.email = 'Por favor ingrese un email válido';
    } else if (userData.email.length > 35) {
      errors.email = 'El email no puede tener más de 35 caracteres';
    }
  
    // Validación de password
    if (!/\d/.test(userData.password)) {
      errors.password = 'La contraseña debe contener al menos un número';
    } else if (userData.password.length < 6 || userData.password.length > 10) {
      errors.password = 'La contraseña debe tener entre 6 y 10 caracteres';
    }
  
    return errors;
  }
  