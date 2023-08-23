import './App.css';
import {useState, useEffect} from 'react';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx'
import axios from 'axios';
import {Route, Routes} from 'react-router-dom';

export default function App() {
   const [characters, setCharacters] = useState([]);
   
   function onSearch(id) {
      for (let i = 0; i < characters.length; i++) {
         if (characters[i].id === Number(id)) {
            window.alert('¡Ya está agregado!');
            return;
      }  }

      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) setCharacters((oldChars) => [...oldChars, data]);
         else window.alert('¡No hay personajes con este ID!');
      });
   }

   function onClose(id) {
      setCharacters(characters.filter(char => char.id !== Number(id)))
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
}