import Cards from '../components/Cards.jsx';

export default function App({characters, onClose}) {
   return (
      <div className='App'>
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
}