import styles from './Cards.module.css';
import Card from '../Card/Card.jsx';

export default function Cards({characters, onClose}) {
   return (
      <div className={styles.cards}>
         <div className={styles.helper}>
            <span>¡Add some characters!</span>
            <span className={`material-symbols-outlined ${styles.arrow}`}>switch_access_shortcut</span>
         </div>
         {characters.map(character => 
            <Card character={character} onClose={onClose} key={character.id} />
         )}
      </div>
   );
}