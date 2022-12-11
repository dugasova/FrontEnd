import styled from "styled-components";
import Blog from "./Blog";
import News from "./News";


const Main = () => {
  return (
    <MainStyled>
      <Blog />
      <News />
    </MainStyled>
  );
};
  
const MainStyled = styled.div({
  padding: "0 10px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
export default Main;