import styles from './Card.module.css'
import {Link, useNavigate} from 'react-router-dom';

export default function Card(props) {
   const navigate = useNavigate();
   const {id, name, status, species, origin, gender, image, onClose} = props;

   const navigateHandler = () => navigate(`/detail/${id}`);

   return (
      <div className={`${styles.card} ${styles.backgroundA}`}>
         <button onClick={() => onClose(id)}>X</button>
         <a onClick={navigateHandler}><h2>{name}</h2></a>
         <h3>Status: {status}</h3>
         <h3>Especie: {species}</h3>
         <h3>Género: {gender}</h3>
         <h3>Origen: {origin}</h3>
         <img src={image} alt='imagen' onClick={navigateHandler} />
         
      </div>
   );
}
