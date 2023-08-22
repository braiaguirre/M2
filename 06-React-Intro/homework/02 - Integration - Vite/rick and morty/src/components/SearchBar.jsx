import {useState} from 'react';

export default function SearchBar({onSearch}) {
   const [id, setId] = useState('');

   let handleChange = (e) => setId(e.target.value);

   return (
      <div>
         <input type='search' onChange={handleChange} />
         <button onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}