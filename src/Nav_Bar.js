import React from "react";
import styled from "styled-components";


const Nav = styled.div`
    width:            95vw;
    height:           10vh;
    background-color: rgb(129, 30, 235);
    margin-bottom:    3rem;
    display:          flex;
    justify-content:  space-between;
    align-items:      center;
    padding:          0 2rem 0 2rem;
`;

const Title = styled.div`
    color:     white;
    font-size: 2rem;
`;

const CartIconContainer = styled.div`
    position: relative;
    cursor:   pointer;
`;

const CartImage = styled.img`
    height: 2.5rem;
    width:  2.5rem;
`;

const CartCount = styled.div`
    position:         absolute;
    height:           1.5rem;
    width:            1.5rem;
    border-radius:    50%;
    background-color: ${(props) => props.color};
    text-align:       center;
    top:              -13px;
    left:             25px;
    visibility:       ${(props) => props.show ? "visible" : "hidden"};
    &:                hover{color: yellow};
`;



class NavBar extends React.Component {

    render() {
        return (

            <Nav>

                <Title>Movie Time</Title>

                <CartIconContainer>

                    <CartImage src="https://png.pngtree.com/png-clipart/20190920/original/pngtree-shopping-cart-convenient-icon-png-image_4637407.jpg" />

                    <CartCount color="orange" show={true} >3</CartCount>

                </CartIconContainer>

            </Nav>
        )
    }
}




export default NavBar;

