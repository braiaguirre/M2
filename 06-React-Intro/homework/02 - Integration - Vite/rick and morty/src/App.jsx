import styles from './App.module.css';
import {useState, useEffect} from 'react';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Nav from './components/Nav/Nav.jsx'
import About from './views/About.jsx';
import Detail from './views/Detail/Detail.jsx';
import Home from './views/Home.jsx'
import Error404 from './views/Error404.jsx';
import Login from './views/Login/Login.jsx';
import {Favorites} from './views/Favorites/Favorites.jsx';
document.title = 'Rick And Morty';

export default function App() {
   const [characters, setCharacters] = useState([]);
   const [mem, setMem] = useState([]);
   const [access, setAccess] = useState(true);
   const location = useLocation();
   const EMAIL = 'prueba@gmail.com';
   const PASSWORD = 'prueba12';
   const navigate = useNavigate();

   // LOGIN
   function logIn({email, password}) {
      if (email.toLowerCase() === EMAIL && password === PASSWORD) {
         setAccess(true);
         navigate(`/home`);
      }
   }

   // LOGOUT
   function logOut({email, password}) {
      setAccess(false);
   }

   // ACCESS
   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   
   // GET CHARACTER FROM API
   function onSearch(id) {
      if (id === '') {
         alert('¡Debes ingresar un ID!');
         return;
      }
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

   // CLOSE CARD
   function onClose(id = -1) {
      if (id === -1) setCharacters([]);
      else setCharacters(characters.filter(char => char.id !== Number(id)))
   }

   // APP
   return (
      <>
         {access && <div className={styles.navbar}>
            <Nav onSearch={onSearch} logOut={logOut} onClose={onClose} />
         </div>}
         <>
            {!access && <div className={styles.login}>
               <Routes>
                  <Route path='/' element={<Login logIn={logIn}/>} />
               </Routes>
            </div>}
            {access && <div className={styles.app}>
               <Routes>
                  <Route path='/home' element={<Home characters={characters} onClose={onClose} />} />
                  <Route path='/favorites' element={<Favorites />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/detail/:id' element={<Detail />} />
                  <Route path='*' element={<Error404 />} />
               </Routes>
            </div>}
         </>
      </>
   );
}