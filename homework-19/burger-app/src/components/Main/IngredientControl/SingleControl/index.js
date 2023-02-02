import styled from "styled-components";
import Image from "../../Image";
import Button from "../../Button";

const SingleControl = ({ingredient, quanttity}) => {
    return (
    <SingleControlStyled>
        <Button action="decrement">-</Button>
        {quanttity}
        <Button action="increment">+</Button>
        <Image name = {ingredient}/>

    </SingleControlStyled>
    );
};
const SingleControlStyled = styled.div ({
    textAlign: 'center',
});

export default SingleControl;