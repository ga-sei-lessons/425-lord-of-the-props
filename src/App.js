import React, { Component } from 'react'
import Movie from './Movie'

const movies = [
  {
    title: "The Fellowship of the Ring",
    hours: 2,
    mins: 58
  },
  {
    title: "The Two Towers",
    hours: 2,
    mins: 59
  },
  {
    title: "The Return of the King",
    hours: 3,
    mins: 21
  }
]

class App extends Component {
  render() {
    // map movie data into an array of jsx components
    const movieComponents = movies.map((movie, index) => {
      return (
        <Movie 
          // add your key prop -- unique value across the app 
          // unique enough to render efficiently
          key={`Movie-${index}`}
          title={movie.title}
          hours={movie.hours}
          mins={movie.mins}
        />
      )
    })

    // return jsx components
    return (
      <>
        <h1>Hello, Frodo</h1>

        {movieComponents}
      </>
    )
  }
}

export default App