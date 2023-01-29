import styled from "styled-components";

const Burger = () => {
    return (
        <BurgerStyled>
            <h3 className="">Price: 1$</h3>
            <Checkout>Checkout</Checkout>
            <div className="topBurger"/>
            <h2 className="ingredients">add ingredients</h2>
            <div className="bottomBurger"></div>
        </BurgerStyled>
    );
};

const BurgerStyled = styled.div({
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    flexBasis: "50%",
    textAlign: "center",
    background: "linear-gradient(0deg, rgba(151,195,34,0.09287464985994398) 0%, rgba(224,186,16,0.6533963927367823) 0%)",
    borderRadius: "10%"
});

const Checkout = styled.button ({
    marginTop: "20px",
    width: "70px",
    height:"50px",
    border: "none",
    borderRadius: "20%",
    alignItems: "center",
    cursor: "pointer",
    backgroundColor: "orange",
    boxShadow: "2px 2px 2pc #3c1414;"
});

export default Burger;