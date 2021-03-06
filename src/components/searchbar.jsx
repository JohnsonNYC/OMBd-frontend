import React, { Component } from 'react';
import '../App.css';

import {Container} from 'reactstrap'
class SearchBar extends Component {


    render() {
        const { handleChange, search, fetchMovies } = this.props
        return (
            <Container className='search'>
                <form >
                    <input placeholder='Movie Title' name='search' value={search} onChange={(e) => { handleChange(e); fetchMovies(e)  }} />
                </form>
            </Container>
        );
    }
}


export default SearchBar;