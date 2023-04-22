/* PROPS
1.Props are read-only. A component cannot change the value of its props. They can only be used for rendering information on the screen.
2. 'this.props.count++' = this type of statement will not work and throw an error.
3. Props get passed into a component, whereas the state is managed within a component.
4. The props object is immutable, while the state is mutable and used to add dynamic information to the component.
 */



import React from "react";
import MovieCard from "./Movie_Card";

class MovieList extends React.Component {

    constructor() {
        super();
        this.state = {
            movies: [
                {
                    title: "The Avengers",
                    plot: "Nick Fury is compelled to launch the Avengers Initiative when Loki poses a threat to planet Earth. His squad of superheroes put their minds together to accomplish the task.",
                    poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
                    price: 149,
                    rating: 8,
                    stars: 0,
                    favBtn: false,
                    isInCart: false
                },

                {
                    title: "The Lion King",
                    plot: "As a cub, Simba is forced to leave the Pride Lands after his father Mufasa is murdered by his wicked uncle, Scar. Years later, he returns as a young lion to reclaim his throne.",
                    poster: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_2_5x/sources/r1/cms/prod/5239/875239-v",
                    price: 249,
                    rating: 8.5,
                    stars: 0,
                    favBtn: false,
                    isInCart: false
                },

                {
                    title: "Top Gun: Maverick",
                    plot: "After more than 30 years of service as one of the Navy's top aviators, Pete MAVERICK Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him. Training a detachment of graduates for a special assignment, Maverick must confront the ghosts of his past and his deepest fears, culminating in a mission that demands the ultimate sacrifice from those who choose to fly it.",
                    poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_FMjpg_UX1000_.jpg",
                    price: 199,
                    rating: 8.3,
                    stars: 0,
                    favBtn: false,
                    isInCart: false
                },

                {
                    title: "RRR",
                    plot: "A fearless revolutionary and an officer in the British force, who once shared a deep bond, decide to join forces and chart out an inspirational path of freedom against the despotic rulers.",
                    poster: "https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
                    price: 199,
                    rating: 7.8,
                    stars: 0,
                    favBtn: false,
                    isInCart: false
                },

                {
                    title: "Mission: Impossible - Fallout",
                    plot: "A group of terrorists plans to detonate three plutonium cores for a simultaneous nuclear attack on different cities. Ethan Hunt, along with his IMF team, sets out to stop the carnage.",
                    poster: "https://upload.wikimedia.org/wikipedia/en/f/ff/MI_%E2%80%93_Fallout.jpg",
                    price: 199,
                    rating: 7.7,
                    stars: 0,
                    favBtn: false,
                    isInCart: false
                },

                {
                    title: "Gaslight",
                    plot: "Misha returns to her royal family estate after 15 years to visit her estranged father, only to find him missing.",
                    poster: "https://image.tmdb.org/t/p/w185/gbLleLzVPPqtAMd5lvhoJhb0uas.jpg",
                    price: 149,
                    rating: 7.8,
                    stars: 0,
                    favBtn: false,
                    isInCart: false
                }
            ],

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

        const { movies } = this.state;

        const movieId = movies.indexOf(movie);

        movies[movieId].isInCart = !movies[movieId].isInCart;

        this.setState({

            movies
        })
    }



    render() {
        return (
            <div className="movie-list">

                {this.state.movies.map((movie) => <MovieCard movie={movie}
                                                             addStars={this.handleIncStars}
                                                             removeStars={this.handleDecStars} 
                                                             toggleFav={this.handleToggleFav}
                                                             toggleCart={this.handleToggleCart} />)}


            </div>
        )
    }
}

export default MovieList;



