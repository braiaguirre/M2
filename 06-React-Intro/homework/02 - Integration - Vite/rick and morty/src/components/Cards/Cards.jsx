import styles from './Cards.module.css';
import {Card} from '../Card/Card.jsx';

export default function Cards({characters, onClose}) {
   return (
      <div className={styles.cards}>
         {characters.map(character => 
            <Card
               key={character.id}
               id = {character.id}
               name={character.name}
               status={character.status}
               species={character.species}
               gender={character.gender}
               origin={character.origin.name}
               image={character.image}
               onClose={onClose}
            />
         )}
      </div>
   );
}