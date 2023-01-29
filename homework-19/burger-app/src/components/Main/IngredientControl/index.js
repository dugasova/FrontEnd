import styled from "styled-components";
import SingleControl from "./SingleControl";

const IngredientControl = (ingredients) => {
    console.log(ingredients)
    return (
        <IngredientControlStyled>
            <h3 className="create">Create your own burg</h3> 
           {
            ingredients.ingredients.map((ingredient) => (
                <SingleControl 
                    quanttity={ingredients.buergerIngredients[ingredient]}
                    key = {ingredient}   
                    ingredient = {ingredient}/>
           ))}
        </IngredientControlStyled>
    );
};

const IngredientControlStyled = styled.div({
    display: 'flex',
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    width: '25%',
});

export default IngredientControl;