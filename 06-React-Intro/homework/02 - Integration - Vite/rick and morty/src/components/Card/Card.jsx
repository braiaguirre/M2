import styles from './Card.module.css'
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

export default function Card(props) {
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();
   const {id, name, status, species, origin, gender, image, onClose} = props;

   const navigateHandler = () => navigate(`/detail/${id}`);

   useEffect(() => {
      setLoading(true);
      setTimeout(() => {
         setLoading(false)
      }, 1500);
   }, []);

   return (
      <div className={`${styles.card} ${styles.backgroundA}`}>
         {loading ? (
               <div className={styles.spinner}></div>
            ) : (
               <>
                  <button onClick={() => onClose(id)}>CLOSE</button>
                  <a onClick={navigateHandler}><h2>{name}</h2></a>
                  <h3><b>Status:</b> {status}</h3>
                  <h3><b>Especie:</b> {species}</h3>
                  <h3><b>Género:</b> {gender}</h3>
                  <h3><b>Origen:</b> {origin}</h3>
                  <img src={image} alt='imagen' onClick={navigateHandler} />
               </>
            )}
      </div>
   );
}
