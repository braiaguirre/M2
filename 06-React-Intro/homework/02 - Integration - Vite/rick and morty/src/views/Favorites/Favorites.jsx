import styles from './Favorites.module.css';
import {connect} from 'react-redux';
import Card from '../../components/Card/Card.jsx';

function Favorites(props) {
    return (
        <div class={styles.favorites}>
        {(props.myFavorites).map(fav=><Card name={fav.name}
               id={fav.id}
               key={fav.id}
               status={fav.status}
               species={fav.species}
               gender={fav.gender}
               origin={fav.origin?.name}
               image={fav.image} ></Card>)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites);
