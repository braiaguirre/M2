import Cards from '../components/Cards.jsx';

export default function App({characters, onClose}) {
   return (
      <>
         <Cards characters={characters} onClose={onClose} />
      </>
   );
}