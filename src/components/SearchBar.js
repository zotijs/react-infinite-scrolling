import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className="ui segment">
        <form className="ui form">
            <div className="ui search">
                <div className="search-bar ui icon input">
                <input 
                    className="prompt"
                    type="text"
                    placeholder="Search Videos..."
                />
                <i className="search icon" />
                </div>
            </div>
        </form>
    </div>
    );
}

export default SearchBar;