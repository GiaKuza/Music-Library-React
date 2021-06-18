import React from 'react';
import './NavBar.css'
import SearchBar from './SearchBar';

function  NavBar(props) {
    return (
        <div className="row row-spacer">
            <div className="col-md-12" style={{padding: 0}}>
                <div>
                    <div className = "titlebar-nav">
                        <h1>Music Library</h1>
                        <SearchBar />
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default NavBar;