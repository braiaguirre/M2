import {useState} from 'react';
import validation from '../utils/validation.js';

export default function Login({logIn}) {
    const [userData, setUserData] = useState({email: '', password: ''})
    const [errors, setErrors] = useState({});

    function changeHandler(e) {        
        setUserData({...userData, [e.target.name]: e.target.value})
        setErrors(validation(userData));
        console.log(errors)
    }

    function submitHandler(e) {
        e.preventDefault();
        if (!errors.email && !errors.password) logIn(userData);
        else {
            alert('El email o la contraseña son incorrectos');
            return;
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <label>Email:</label>
            <input name="email" value={userData.email} onChange={changeHandler} /> 
            <br />
            <span>{errors.email ? errors.email : ''}</span> 
            <br />
            <label>Password:</label>
            <input type="password" name="password" value={userData.password} onChange={changeHandler} /> 
            <br />
            <span>La contraseña debe tener entre 6 y 10 caracteres, y al menos un número.</span> 
            <br /> <br />
            <button type="submit">Submit</button>
        </form>
    )
}