import React, { Component } from 'react';
import '../App.css';

import {Container} from 'reactstrap'
class SearchBar extends Component {


    render() {
        const { handleChange, search, fetchMovies, handleSubmit } = this.props
        return (
            <Container className='search'>
                <form onSubmit={handleSubmit}>
                    <input placeholder='Movie Title' name='search' value={search} onChange={(e) => { handleChange(e)  }} />
                    <input type='submit' value='Submit'/>
                </form>
            </Container>
        );
    }
}


export default SearchBar;