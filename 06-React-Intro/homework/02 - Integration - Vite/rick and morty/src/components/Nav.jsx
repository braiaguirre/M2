import SearchBar from './SearchBar.jsx';
import {Link} from 'react-router-dom';

let rand = () => (Math.random() * 826).toFixed();

export default function Nav({onSearch}) {
    return (
        <>
            <Link to={'/home'}>Home</Link>
            <br />
            <Link to={'/about'}>About</Link>
            <br /><br />
            <SearchBar onSearch={onSearch} />
            <button onClick={() => onSearch(rand())}>Aleatorio</button>
            
        </>
    )
}