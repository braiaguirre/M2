import styles from './Card.module.css'
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {addFav, removeFav} from '../../redux/actions.js';
import {connect} from 'react-redux';

function Card(props) {
   const {id, name, status, species, origin, gender, image, onClose} = props;
   const [loading, setLoading] = useState(false);
   const [isFav, setIsFav] = useState(false);
   const navigate = useNavigate();

   const favoriteHandler = () => {
      if (isFav) {
         setIsFav(false);
         props.removeFav(id);
      } else {
         setIsFav(true);
         props.addFav(props);
   }  }

   const navigateHandler = () => navigate(`/detail/${id}`);

   useEffect(() => {
      props.myFavorites.forEach(fav => {
         console.log(fav);
         if (fav.id === props.id) setIsFav(true);
      });
   }, [props.myFavorites]);

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

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: () => dispatch(addFav()),
      removeFav: () => dispatch(removeFav())
   }
}

const mapStateToProps = (state) => {
   // console.log(state);
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);