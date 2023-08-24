import {useState} from 'react';
import validation from '../utils/validation.js';
import logo from '../assets/logo.png';

export default function Login({logIn}) {
    const [userData, setUserData] = useState({email: '', password: ''})
    const [errors, setErrors] = useState({email: true, password: true});

    function changeHandler(e) {        
        setUserData({...userData, [e.target.name]: e.target.value})
        setErrors(validation(userData));
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
        <section id="login-section">
            <img id="login-section-logo" src={logo} />
            <form onSubmit={submitHandler}>
                {/* <label>Email:</label> */}
                <div>
                    <input name="email" value={userData.email} onChange={changeHandler} placeholder="Email"/> 
                    <span className="material-symbols-outlined" width="20px">{errors.email ? 'close' : 'done'}</span>
                </div>
                <br />
                {/* <label>Password:</label> */}
                <div>
                    <input type="password" name="password" value={userData.password} onChange={changeHandler} placeholder="Password" />
                    <span className="material-symbols-outlined" width="20px">{errors.password ? 'close' : 'done'}</span>
                </div>
                <br /> <br />
                <button type="submit">Login</button>
            </form>
        </section>
    )
}