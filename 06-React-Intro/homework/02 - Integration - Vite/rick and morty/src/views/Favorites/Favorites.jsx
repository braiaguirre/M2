import styles from './Favorites.module.css';
import {connect} from 'react-redux';
import Card from '../../components/Card/Card.jsx';

function Favorites({myFavorites}) {
    return (
        <div class={styles.favorites}>
            {(myFavorites).map(character=> <Card character={character} />)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites);
