import styled from "styled-components";


const Logo = () => {
  return (
    <LogoStyled>
      Logo
     </LogoStyled>
  );
};

const LogoStyled = styled.div({
  backgroundColor: "#F1F2AE",
  margin: "0 10px",
  width: "181px",
  height: "37px",
  textAlign: "center"
});

export default Logo;