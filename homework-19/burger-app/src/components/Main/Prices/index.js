import styled from "styled-components";
import SinglePrice from "./SingglePrice"

const Prices = ({allPrices}) => {
    return (
        <PricesStyled>
          <h3 className="price">Our price</h3>
            <div>
                {allPrices.map((price) => {
                    const {name: productName, price: productPrice} = price;
                    return (
                        <SinglePrice
                        key = {productName + productPrice}
                        singleName = {productName}
                        singlePrice = {productPrice} />
                        );
                    })}
            </div>
        </PricesStyled> 
    )
    
    
}
const PricesStyled = styled.div({
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    width:"25%",
    textAlign: 'center',
    color: "#3c1414"
 
})

export default Prices;