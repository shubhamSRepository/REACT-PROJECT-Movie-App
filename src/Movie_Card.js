import React from "react";

class MovieCard extends React.Component {


    render() {

        const { title, plot, poster, price, rating, stars, favBtn, isInCart } = this.props.movie;

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

                            <img className="star-minus" onClick={this.decreaseStars} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7tlQyAnOvFlVk6dUduj0rABhaMFwHBV8Sjg&usqp=CAU" />
                            <img className="star-image" src="https://icon-library.com/images/small-star-icon/small-star-icon-17.jpg" />
                            <img className="star-plus" onClick={() => { this.props.addStars(this.props.movie) }} src="https://www.freepnglogos.com/uploads/plus-icon/plus-icon-plus-math-icon-download-icons-9.png" />
                            <span className="star-rating">{stars}</span>

                        </div>


                        {/* first way to do conditional rendening between 'favourite' and 'un-favourite' button */}
                        {favBtn ?
                            <button className="un-favourite-btn" onClick={this.handleFavBtn}>Un-Favourite</button> :
                            <button className="favourite-btn" onClick={this.handleFavBtn}>Favourite</button>
                        }


                        {/* seconde way to do conditional rendening between 'favourite' and 'un-favourite' button */}
                        {/* <button className={favBtn ? "un-favourite-btn" : "favourite-btn"} onClick={this.handleFavBtn}>
                                {favBtn ? "Un-Favourite" : "Favourite"}
                            </button> */}

                        {isInCart ?
                            <button className="removeFromCart-btn" onClick={this.handleAddToCart}>Remove</button> :
                            <button className="addToCart-btn" onClick={this.handleAddToCart}>Add To Cart</button>
                        }

                    </div>

                </div>

            </div>

        )
    }
}

export default MovieCard;