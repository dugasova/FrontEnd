import styled from "styled-components";

const Title = () => {
  return <TitleStyled>Burgerbuilder App</TitleStyled>;
};

const TitleStyled = styled.h1({
  fontWeight: "700",
  marginLeft: "150px",
  textAlign: "center",
  flexBasis: "64%",
  color: "#3c1414"
});

export default Title;