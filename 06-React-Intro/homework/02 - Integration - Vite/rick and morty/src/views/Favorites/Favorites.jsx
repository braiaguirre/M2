import styles from './Favorites.module.css';
import {connect} from 'react-redux';
import Card from '../../components/Card/Card.jsx';

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

function Favorites({myFavorites}) {
    return (
        <div className={styles.favorites}>
            {myFavorites.map(character => <Card props={character} />)}
        </div>
    )
}

export default connect(mapStateToProps, null)(Favorites);
