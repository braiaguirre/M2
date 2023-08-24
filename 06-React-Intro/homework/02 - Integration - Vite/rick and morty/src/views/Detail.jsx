import axios from 'axios';
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';

export default function About() {
    const {id} = useParams();
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({data}) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, []);

    return (
        <div>
            {console.log(character)}
            <h2>Nombre: {character.name}.</h2>
            <h2>Status: {character.status}.</h2>
            <h2>Especie: {character.species}.</h2>
            <h2>Género: {character.gender}.</h2>
            <h2>Origen: {character.origin?.name}.</h2>
            <img src={character.image} alt='imagen' />
      </div>
    )
}