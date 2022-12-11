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
  backgroundColor: "#D9D9D9",
  margin:'0 10px',
  height: "58px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default Header;