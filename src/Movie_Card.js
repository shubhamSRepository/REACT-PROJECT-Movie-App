// import React from "react";

/** we have change class component into function component as we are no longer having any 'state' here */
function MovieCard(props) {

    const { movie, addStars, removeStars, toggleFav, toggleCart } = props;

    const { title, plot, poster, price, rating, stars, favBtn, isInCart } = movie;

    return (

        <div className="movie-card">

            <div className="poster">
                <img src={poster} alt="poster" />.
            </div>

            <div className="details">

                <div className="tittle">{title}</div>
                <div className="plot">{plot}</div>
                <div className="price">Rs. {price}</div>

                <div className="footer">

                    <div className="rating">imdb:&nbsp;{rating}</div>

                    <div className="stars">

                        <img className="star-minus" onClick={() => { removeStars(movie) }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7tlQyAnOvFlVk6dUduj0rABhaMFwHBV8Sjg&usqp=CAU" />
                        <img className="star-image" src="https://icon-library.com/images/small-star-icon/small-star-icon-17.jpg" />
                        <img className="star-plus" onClick={() => { addStars(movie) }} src="https://www.freepnglogos.com/uploads/plus-icon/plus-icon-plus-math-icon-download-icons-9.png" />
                        <span className="star-rating">{stars}</span>

                    </div>


                    {favBtn ?
                        <button className="un-favourite-btn" onClick={() => { toggleFav(movie) }}>Un-Favourite</button> :
                        <button className="favourite-btn" onClick={() => { toggleFav(movie) }}>Favourite</button>
                    }


                    {isInCart ?
                        <button className="removeFromCart-btn" onClick={() => { toggleCart(movie) }}>Remove</button> :
                        <button className="addToCart-btn" onClick={() => { toggleCart(movie) }}>Add To Cart</button>
                    }

                </div>

            </div>

        </div>

    )
}

export default MovieCard;