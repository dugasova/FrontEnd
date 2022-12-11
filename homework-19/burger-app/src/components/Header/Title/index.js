import styled from "styled-components";

const Title = () => {
  return <TitleStyled>Burger App</TitleStyled>;
};

const TitleStyled = styled.h1({
  textAlign: "center",
//   flexBasis: "64%",
//   fontFamily: "Nanum Bold",
});

export default Title;