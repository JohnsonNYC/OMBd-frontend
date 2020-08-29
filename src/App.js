import React, { Component } from 'react';
import './App.css';

import SearchBar from './components/searchbar'
import Response from './components/response'

const key = process.env.REACT_APP_API_KEY
class App extends Component {
  state = {
    search: '',
    cart: {},
    movies: []
  }


  //---------FUNCTION & HANDLERS --------------
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  fetchMovies = (event) => {

    fetch(`http://www.omdbapi.com/?s=${event.target.value}&apikey=${key}`)
      .then(resp => resp.json()).then(data => this.setState({ movies: [data] }))

  }



  render() {
    return (
      <div className="App">
        <SearchBar handleChange={this.handleChange} search={this.state.search} fetchMovies={this.fetchMovies} />
        {this.state.search.length !== 0 ?
          <Response movies={this.state.movies} /> : null
        }
      </div>
    );
  }
}

export default App;
