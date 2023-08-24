import SearchBar from './SearchBar.jsx';
import {Link} from 'react-router-dom';

let rand = () => (Math.random() * 826).toFixed();

export default function Nav({onSearch, logOut}) {

    return (
        <div id='navbar'>
            <Link to={'/home'}>Home</Link>
            <br />
            <Link to={'/about'}>About</Link>
            <br /><br />
            <Link to={'/'} onClick={logOut}>Logout</Link>
            <br /><br />
            <SearchBar onSearch={onSearch} />
            <button onClick={() => onSearch(rand())}>Aleatorio</button>
        </div>
    )
}