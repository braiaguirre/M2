export default function validation({email, password}) {
    const errors = {};
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,10}$/;

    if (!emailRegex.test(email)) errors.email = 'Debe ingresar un correo válido'
    if (!passwordRegex.test(password)) errors.password = 'La contraseña debe tener entre 6 y 10 caracteres, y al menos un número'

    return errors;
}