import styled from "styled-components";
import Logo from "./Logo";
import Menu from "./Menu";
import Title from "./Title";

const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
      <Title />
      <Menu  />
    </HeaderStyled>
  );
};
  
const HeaderStyled = styled.div({
  background: "linear-gradient(#bc581e, #e27b36)",
  boxShadow: "inset -15px 0 #c15711",
  height: "15vh",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default Header;