import './SearchBar.css'

const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Find artists, albums, songs and more</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Find artists, albums and more"
            name="s" 
            onChange={}
        />
        <button type="submit">Search</button>
    </form>
);

export default SearchBar;