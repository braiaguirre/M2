import styles from './Card.module.css'
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {addFav, removeFav} from '../../redux/actions.js';
import {useSelector, useDispatch} from 'react-redux';

export default function Card({character, onClose}) {
   const [loading, setLoading] = useState(false);
   const [isFav, setIsFav] = useState(false);
   const myFavorites = useSelector(state => state.myFavorites)
   const dispatch = useDispatch();
   const navigate = useNavigate();

   // NAVIGATE
   const navigateHandler = () => navigate(`/detail/${id}`);

   // SET FAVORITES
   const favoriteHandler = () => {
      if (isFav) {
         setIsFav(false);
         dispatch(removeFav(character.id));
      } else {
         setIsFav(true);
         dispatch(addFav(character));
   }  }
   
   useEffect(() => {
      myFavorites.forEach(fav => {
         if (fav.id === character.id) setIsFav(true);
      });
   }, [myFavorites]);

   // LOADING
   useEffect(() => {
      setLoading(true);
      setTimeout(() => {
         setLoading(false)
      }, 800);
   }, []);

   return (
      <div className={styles.card}>
         {loading ? (
               <div className={styles.spinner}></div>
            ) : (
               <>
                  {/* CARD BUTTONS */}
                  <div>
                     {!isFav ? 
                        <button onClick={favoriteHandler}>
                           <span className='material-symbols-outlined'>favorite</span>
                        </button> : 
                           <button onClick={favoriteHandler}>
                           <span className={`material-symbols-outlined ${styles.isFav}`}>favorite</span>
                        </button>}
                        {onClose ? <button onClick={() => onClose(id)}><span className='material-symbols-outlined'>close</span></button> : <></>}
                  </div>
                  {/* CHARACTER INFO */}
                  <a onClick={navigateHandler}><h2>{character.name}</h2></a>
                  <h3><b>Status:</b> {character.status}</h3>
                  <h3><b>Especie:</b> {character.species}</h3>
                  <h3><b>Género:</b> {character.gender}</h3>
                  <h3><b>Origen:</b> {character.origin?.name}</h3>
                  <img src={character.image} alt='imagen' onClick={navigateHandler} />
               </>
            )}
      </div>
   );
}

// const mapDispatchToProps = (dispatch) => {
//    return {
//       addFav: (character) => dispatch(addFav(character)),
//       removeFav: (id) => dispatch(removeFav(id))
//    }
// }

// const mapStateToProps = (state) => {
//    return {
//       myFavorites: state.myFavorites
//    }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Card);