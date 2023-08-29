import styles from './Favorites.module.css';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {filterCards, orderCards} from '../../redux/actions.js';
import Card from '../../components/Card/Card.jsx';

export default function Favorites() {
    // const [aux, setAux] = useState(false);
    const [order, setOrder] = useState('N');
    const myFavorites = useSelector(state => state.myFavorites);
    const dispatch = useDispatch();

    // FILTERS
    const filterHandler = (e) => {
        const value = e.target.value;
        dispatch(filterCards({value, order}))
    };
    const orderHandler = (e) => {
        dispatch(orderCards(e.target.value));
        // setAux(!aux);
    }

    return (
        <div className={styles.favorites}>
            <div className={styles.filters}>
                <select onChange={orderHandler}>
                    <option value="N">Sin ordenar</option>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>
            <select onChange={filterHandler}>
                <option value="All">Todos</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
            </select>
            </div>
            <div className={styles.cards}>
                {(myFavorites).map(character=> <Card character={character} key={character.id}/>)}
            </div>
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         myFavorites: state.myFavorites,
//     }
// }

// export default connect(mapStateToProps, null)(Favorites);
