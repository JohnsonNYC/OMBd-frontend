import React, { Component } from 'react';
import './App.css';

import SearchBar from './components/searchbar'
import Response from './components/response'

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

  fetchMovies =(event)=>{
    if (event.target.value.length > 3) {
      fetch(`http://www.omdbapi.com/?s=${event.target.value}&apikey=${process.env.REACT_APP_API_KEY}`)
        .then(resp => resp.json()).then(data => this.setState({ movies: [ data] }))
    }
  }



  render() {
    console.log(this.state.movies)
    console.log(this.state.search)
    return (
      <div className="App">
        <SearchBar handleChange={this.handleChange} search={this.state.search} fetchMovies={this.fetchMovies}/>
        {this.state.movies.length !== 0? 
        <Response movies={this.state.movies} />: null}
      </div>
    );
  }
}

export default App;
