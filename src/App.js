import React from "react";
import NavBar from "./Nav_Bar";
import MovieList from "./Movie_List";
import { movies } from "./Movies_Data";



class App extends React.Component {

  constructor() {
    super();
    this.state = {
      movies,
      cartCount: 0
    }

  }


  handleIncStars = (movie) => {

    const { movies } = this.state;

    const movieId = movies.indexOf(movie);

    if (movies[movieId].stars >= 5) {
      return;
    }


    movies[movieId].stars += 0.5;

    this.setState({
      // movies: movies  /* if key and value have same name we can use it only once and it will work fine */

      movies
    })

  }


  handleDecStars = (movie) => {

    const { movies } = this.state;

    const movieId = movies.indexOf(movie);

    if (movies[movieId].stars <= 0) {
      return;
    }


    movies[movieId].stars -= 0.5;

    this.setState({
      // movies: movies  /* if key and value have same name we can use it only once and it will work fine */

      movies
    })

  }


  handleToggleFav = (movie) => {

    const { movies } = this.state;

    const movieId = movies.indexOf(movie);

    movies[movieId].favBtn = !movies[movieId].favBtn;

    this.setState({

      movies
    })
  }


  handleToggleCart = (movie) => {

    let { movies, cartCount } = this.state;

    const movieId = movies.indexOf(movie);

    movies[movieId].isInCart = !movies[movieId].isInCart;

    if (movies[movieId].isInCart) {
      cartCount += 1;
    }
    else {
      cartCount -= 1;
    }

    this.setState({

      movies,
      cartCount
    })
  }



  render() {
    const { movies, cartCount } = this.state;

    return (
      <>

        <NavBar cartCount={cartCount} />

        <MovieList movies={movies}
          addStars={this.handleIncStars}
          removeStars={this.handleDecStars}
          toggleFav={this.handleToggleFav}
          toggleCart={this.handleToggleCart}
        />

      </>
    )
  }
}

export default App;
