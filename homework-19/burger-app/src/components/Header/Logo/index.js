import styled from "styled-components";
import LogoImg from "./../../../assets/Logo.png";

const Logo = () => {
  return (
    <LogoStyled src = {LogoImg} />
      
  );
};

const LogoStyled = styled.img({
  margin: "0 25px",
  width: "80px",
  height: "87px",
  textAlign: "center"
});

export default Logo;