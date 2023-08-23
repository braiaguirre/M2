import {useRef, useState} from 'react';

export default function SearchBar({onSearch}) {
   const [inputValue, setInputValue] = useState('');
   const inputRef = useRef(null);
   let changeHandler = (e) => setInputValue(e.target.value);
   let clickHandler = () => {
      onSearch(inputValue);
      setInputValue('');
      inputRef.current.focus();
   }

   return (
      <div>
         <input type='search' ref={inputRef} value={inputValue} onChange={changeHandler} />
         <br />
         <button onClick={clickHandler}>Agregar</button>
      </div>
   );
}