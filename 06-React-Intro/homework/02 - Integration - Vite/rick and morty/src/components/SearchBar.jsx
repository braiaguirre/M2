import {useState} from 'react';

export default function SearchBar({onSearch}) {
   const [id, setId] = useState('');

   let changeHandler = (e) => setId(e.target.value);

   return (
      <div>
         <input type='search' onChange={changeHandler} />
         <br />
         <button onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}