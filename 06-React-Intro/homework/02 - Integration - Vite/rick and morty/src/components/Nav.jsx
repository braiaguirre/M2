import SearchBar from './SearchBar.jsx';
import {useNavigate} from 'react-router-dom';
import styles from './Nav.module.css'

export default function Nav({onSearch, logOut}) {
    const navigate = useNavigate();

    return (
        <>
            <div class={styles.menu}>
                <ul>
                    <li onClick={() => navigate('/home')}>Home</li>
                    <li onClick={() => navigate('/about')}>About</li>
                    <li onClick={logOut}>Logout</li>
                </ul>
            </div>
            <div class={styles.search}>
                <SearchBar onSearch={onSearch} />
            </div>
        </>
    )
}