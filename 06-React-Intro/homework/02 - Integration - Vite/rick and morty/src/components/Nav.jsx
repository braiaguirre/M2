import SearchBar from './SearchBar.jsx';
import {Link, useNavigate} from 'react-router-dom';

let rand = () => (Math.random() * 826).toFixed();

export default function Nav({onSearch, logOut}) {
    const navigate = useNavigate();

    return (
        <>
            <div id="navbar-menu">
                <ul>
                    <li onClick={() => navigate('/home')}>Home</li>
                    <li onClick={() => navigate('/about')}>About</li>
                    <li onClick={logOut}>Logout</li>
                </ul>
                {/* <div><Link to={'/home'}>Home</Link></div>
                <div><Link to={'/about'}>About</Link></div>
                <div><Link to={'/'} onClick={logOut}>Logout</Link></div> */}
            </div>
            <div id="navbar-search">
                <SearchBar onSearch={onSearch} />
            </div>
        </>
    )
}