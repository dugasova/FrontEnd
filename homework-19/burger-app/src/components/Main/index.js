import React from "react";
import styled from "styled-components";
import IngredientControl from "./IngredientControl";
import Prices from "./Prices";
import Burger from "./Burger";

class Main extends React.Component {
    constructor() {
        super();
        
        this.state = {
            prices: [
                {name: "Bacon", price: 1.3},
                {name: "Cheese", price: 1.1},
                {name: "Pickle", price: 0.8},
                {name: "Meat", price: 2.1},
                {name: "Tomato", price: 1.5},
                {name: "Salad", price: 1.7},
            ],
            ingredients: ["bacon", "cheese", "pickle", "meat", "tomato", "salad"],
            burgerBuilder: {
                bacon: 0,
                cheese: 0,
                tomato:0,
                salad: 0,
                pickle: 0,
                meat: 0,
            },
        };
    }
    
    render () {
        const {prices, ingredients, burgerBuilder} = this.state;

        return (
            <MainWrapper>
                <Prices allPrices={prices} />
                <Burger  />
                <IngredientControl
                prices={prices}
                ingredients = {ingredients}
                updataBurger = {this.changeIngredientQuantity}
                buergerIngredients = {burgerBuilder}/>
            </MainWrapper>
        )
    }
}

const MainWrapper = styled.div({
    display: "flex",
    flexWrap: "no-wrap",
    jusifyContent: "space-between",
    paddingTop: "50px",
    width: "100%",
    height: "80%",
    alignContent: "center",
})

export default Main;