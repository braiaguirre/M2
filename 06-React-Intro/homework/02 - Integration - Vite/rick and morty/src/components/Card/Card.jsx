import styles from './Card.module.css'
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {addFav, removeFav} from '../../redux/actions.js';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: () => dispatch(addFav()),
      removeFav: () => dispatch(removeFav())
   }
}

const mapStateToProps = (state) => {
   console.log(state);
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);

export function Card(props) {
   const {id, name, status, species, origin, gender, image, onClose, addFav, removeFav, myFavorites} = props;
   const [loading, setLoading] = useState(false);
   const [isFav, setIsFav] = useState(false);
   const navigate = useNavigate();
   
   const favoriteHandler = () => {
      if (isFav) {
         setIsFav(false);
         removeFav(id);
      } else {
         setIsFav(true);
         addFav(props);
   }  }

   const navigateHandler = () => navigate(`/detail/${id}`);

   useEffect(() => {
      myFavorites.forEach(fav => {
         if (fav.id === props.id) setIsFav(true);
      });
   }, [myFavorites]);

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
                  {isFav ? <button onClick={favoriteHandler}>❤️</button> : <button onClick={favoriteHandler}>🤍</button>}
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