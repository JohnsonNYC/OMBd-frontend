import React, { Component } from 'react';
import '../App.css';

class SearchBar extends Component {


    render() {
        const { handleChange, search, fetchMovies } = this.props
        return (
            <div className='search'>
                <form>
                    <input placeholder='Movie Title' name='search' value={search} onChange={(e)=> {handleChange(e); fetchMovies(e)}} />
                </form>
            </div>
        );
    }
}


export default SearchBar;