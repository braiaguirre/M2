// import './App.css';
import styles from './App.module.css';
import {useState, useEffect} from 'react';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Nav from './components/Nav.jsx'
import About from './views/About.jsx';
import Detail from './views/Detail.jsx';
import Home from './views/Home.jsx'
import Error404 from './views/Error404.jsx';
import Login from './views/Login.jsx';

export default function App() {
   const [characters, setCharacters] = useState([]);
   const [mem, setMem] = useState([]);
   const [access, setAccess] = useState(false);
   const location = useLocation();
   const EMAIL = 'prueba@gmail.com';
   const PASSWORD = 'prueba12';
   const navigate = useNavigate();

   function logIn({email, password}) {
      if (email === EMAIL && password === PASSWORD) {
         setAccess(true);
         navigate(`/home`);
      }
   }

   function logOut({email, password}) {
      setAccess(false);
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   
   function onSearch(id) {
      if (mem.includes(id)) {
         alert('¡Ese personaje ya fue agregado!')
         return;
      }

      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
            setMem(id);
         }
         else window.alert('¡No hay personajes con este ID!');
      });
   }

   function onClose(id) {
      setCharacters(characters.filter(char => char.id !== Number(id)))
   }

   return (
      <>
         <div className={styles.navbar}>
            {location.pathname != '*' && access && <Nav onSearch={onSearch} logOut={logOut} />}
         </div>
         <div className={styles.app}>
            <Routes>
               <Route path='/' element={<Login logIn={logIn} />} />
               <Route path='/home' element={<Home characters={characters} onClose={onClose} />} />
               <Route path='/about' element={<About />} />
               <Route path='/detail/:id' element={<Detail />} />
               <Route path='*' element={<Error404 />} />
            </Routes>
         </div>
      </>
   );
}