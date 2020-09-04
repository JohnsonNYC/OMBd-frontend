import React, { Component } from 'react';
import './App.css';

import SearchBar from './components/searchbar'
import ResponseContainer from './components/responseContainer'
import NomineeContainer from './components/nomineeContainer'
import Header from './components/header'

const API_KEY = process.env.MY_KEY;
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

  nominate = (movieObj) => {
    if(this.state.cart.length < 5){
      this.setState({ cart: [...this.state.cart, movieObj] })
    }
  }

  remove = (movieObj) => {
    const newArray = this.state.cart.filter((obj) => obj !== movieObj)
    this.setState({ cart: newArray  })
  }

  fetchMovies = (event) => {
    fetch(`http://www.omdbapi.com/?s=${event.target.value}&apikey=109d2481`)
      .then(resp => resp.json()).then(data => this.setState({ movies: [data] }))
  }


  render() {
    return (
      <div className="App">
        <Header/>
        <SearchBar handleChange={this.handleChange} search={this.state.search} fetchMovies={this.fetchMovies} />
        {this.state.search.length !== 0 ?
          <ResponseContainer movies={this.state.movies} nominate={this.nominate} cart={this.state.cart} /> : null
        }
        <NomineeContainer cart={this.state.cart} remove={this.remove}/>
      </div>
    );
  }
}

export default App;
