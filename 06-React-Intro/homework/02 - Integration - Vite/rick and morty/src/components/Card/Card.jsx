import styles from './Card.module.css'
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {addFav, removeFav} from '../../redux/actions/actions.js';
import {useSelector, useDispatch} from 'react-redux';

export default function Card({character, onClose}) {
   const [loading, setLoading] = useState(false);
   const [isFav, setIsFav] = useState(false);
   const filteredFavs = useSelector(state => state.filteredFavs)
   const dispatch = useDispatch();
   const navigate = useNavigate();

   // NAVIGATE
   const navigateHandler = () => navigate(`/detail/${character.id}`);

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
      filteredFavs.forEach(fav => {
         if (fav.id === character.id) setIsFav(true);
      });
   }, [filteredFavs]);

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
                        {onClose ? <button onClick={() => onClose(character.id)}><span className='material-symbols-outlined'>close</span></button> : <></>}
                  </div>
                  {/* CHARACTER INFO */}
                  <a onClick={navigateHandler}><h2>{character.name}</h2></a>
                  <h3><b>Status:</b> {character.status}</h3>
                  <h3><b>Species:</b> {character.species}</h3>
                  <h3><b>Gender:</b> {character.gender}</h3>
                  <h3><b>Origin:</b> {character.origin?.name}</h3>
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
//       filteredFavs: state.filteredFavs
//    }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Card);