import './App.css';
import {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import axios from 'axios';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx'
import About from './views/About.jsx';
import Detail from './views/Detail.jsx';
import Error404 from './views/Error404.jsx';

export default function App() {
   const [characters, setCharacters] = useState([]);
   const [mem, setMem] = useState([]);
   
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
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='*' element={<Error404 />} />
         </Routes>
      </div>
   );
}