import React from "react";

class MovieCard extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "The Avengers",
            plot: "A superhero movie",
            poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
            price: 199,
            rating: 8.9,
            stars: 0,
            favBtn: false,
            isInCart: false
        }
    }




    addStars = () => {
        if (this.state.stars >= 5) {
            return
        }
        /*we have used arrow function here so that we need not to use 'this.addStars = this.addStars.bind(this)'
         as arrow function uses 'this' of its parents scope*/

        /* form 1 (first method)*/
        // this.setState({
        //     /* 'setState' is inbuilt feature of react. It prevents us from re-rendening the app */
        //     stars: this.state.stars + 0.5
        // })

        /* form 2 (second method) */
        this.setState((prevState) => {
            return {
                stars: prevState.stars + 0.5
            }
        })

    }


    decreaseStars = () => {
        if (this.state.stars <= 0) {
            return
        }
        this.setState((prevState) => {
            return {
                stars: prevState.stars - 0.5
            }
        })

    }


    handleFavBtn = () => {
        this.setState({
            favBtn: !this.state.favBtn
        })
    }


    handleAddToCart = () => {
        this.setState({
            isInCart: !this.state.isInCart
        })
    }



    render() {

        const { title, plot, poster, price, rating, stars, favBtn, isInCart } = this.state;

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
                            <img className="star-plus" onClick={this.addStars} src="https://www.freepnglogos.com/uploads/plus-icon/plus-icon-plus-math-icon-download-icons-9.png" />
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