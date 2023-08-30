import styles from './Favorites.module.css';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {filterCards, orderCards} from '../../redux/actions.js';
import Card from '../../components/Card/Card.jsx';

export default function Favorites() {
    const [orderFilter, setOrderFilter] = useState('N'); // local state -> order filter
    const [genderFilter, setGenderFilter] = useState('All') // local state - gender filter
    const favs = useSelector(state => state.favs);
    const dispatch = useDispatch();

    // FILTERS
    const filterHandler = (e) => {
        setGenderFilter(e.target.value); // sets new local state
        dispatch(filterCards(e.target.value)); // dispatches gender filter
        if (orderFilter !== 'N') dispatch(orderCards(orderFilter)); // if an order filter is selected, dispatch order filter
    }
    const orderHandler = (e) => {
        setOrderFilter(e.target.value); // sets new local state
        dispatch(orderCards(e.target.value)); // dispatches order filter
        if (genderFilter !== 'All') dispatch(filterCards(genderFilter)); // if a gender filter is selected, dispatch gender filter
    }

    return (
        <div className={styles.favorites}>
            <div className={styles.filters}>
                <select onChange={orderHandler}>
                    <option value="N">No order</option>
                    <option value="A">Ascending</option>
                    <option value="D">Descending</option>
                </select>
                <select onChange={filterHandler}>
                    <option value="All">All characters</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </select>
                <button>Reset filters</button>
            </div>
            <div className={styles.cards}>
                {(favs).map(character=> <Card character={character} key={character.id}/>)}
            </div>
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         favs: state.favs,
//     }
// }

// export default connect(mapStateToProps, null)(Favorites);
