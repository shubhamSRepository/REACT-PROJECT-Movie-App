/* PROPS
1.Props are read-only. A component cannot change the value of its props. They can only be used for rendering information on the screen.
2. 'this.props.count++' = this type of statement will not work and throw an error.
3. Props get passed into a component, whereas the state is managed within a component.
4. The props object is immutable, while the state is mutable and used to add dynamic information to the component.
 */



// import React from "react";
import MovieCard from "./Movie_Card";

/** we have change class component into function component as we are no longer having any 'state' here */
function MovieList(props) {

    const { movies, addStars, removeStars, toggleFav, toggleCart } = props;

    return (
        <div className="movie-list">

            {movies.map((movie) => <MovieCard movie={movie}
                addStars={addStars}
                removeStars={removeStars}
                toggleFav={toggleFav}
                toggleCart={toggleCart}
                key={movie.title}
            />)
            }


        </div>
    )
}

export default MovieList;



