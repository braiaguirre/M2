import SearchBar from './SearchBar.jsx';

let rand = () => Math.ceil(Math.random() * 826);

export default function Nav({onSearch}) {
    return (
        <>
            <SearchBar onSearch={onSearch} />
            <button onClick={() => onSearch(rand())}>Aleatorio</button>
        </>
    )
}


