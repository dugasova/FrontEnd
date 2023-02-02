import styled from "styled-components";
const SinglePrice = ({singleName, singlePrice}) =>{
    return (
        <SinglePriceStyled>
            {singleName}: {singlePrice}$
        </SinglePriceStyled>
    );
};


const SinglePriceStyled = styled.div({
    textAlign: " center",
    margin:" 20px 20px"
})
export default SinglePrice;