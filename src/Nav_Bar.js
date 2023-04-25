// import React from "react";
import styles from './Nav_Bar.module.css'

/** we have change class component into function component as we are no longer having any 'state' here */
function NavBar(props) {

    const { cartCount } = props;

    return (

        <div className={styles.nav}>

            <div className={styles.title}>Movie Time</div>

            <div className={styles.cartIconContainer}>

                <img className={styles.cartImage} src="https://png.pngtree.com/png-clipart/20190920/original/pngtree-shopping-cart-convenient-icon-png-image_4637407.jpg" />

                <div className={styles.cartCount} color="orange" show={true} >{cartCount}</div>

            </div>

        </div>
    )
}



export default NavBar;

