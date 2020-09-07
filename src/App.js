import React, { Component } from 'react';
import './App.css';

import SearchBar from './components/searchbar'
import ResponseContainer from './components/responseContainer'
import NomineeContainer from './components/nomineeContainer'
import Header from './components/header'

const API_KEY = process.env.REACT_APP_API_KEY;
class App extends Component {
  state = {
    search: '',
    cart: [],
    movies: []
  }

  //---------FUNCTION & HANDLERS --------------
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  fetchMovies = (event) =>{
    fetch(`https://www.omdbapi.com/?s=${event.target.value}&apikey=${API_KEY}`)
      .then(resp => resp.json())
      .then(data => this.setState({ movies: [data] }))
  }

  nominate = (movieObj) => {
    if(this.state.cart.length < 5){
      this.setState({ cart: [...this.state.cart, movieObj] })
    }
  }

  remove = (movieObj) => {
    const newArray = this.state.cart.filter((obj) => obj !== movieObj)
    this.setState({ cart: newArray  })
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <SearchBar handleSubmit={this.handleSubmit} handleChange={this.handleChange} search={this.state.search} fetchMovies={this.fetchMovies} />
        {this.state.search.length !== 0 ?
          <ResponseContainer movies={this.state.movies} nominate={this.nominate} cart={this.state.cart} /> : null
        }
        <NomineeContainer cart={this.state.cart} remove={this.remove}/>
      </div>
    );
  }
}

export default App;
