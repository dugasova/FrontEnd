import styled from "styled-components";


const Articles = ({ children }) => {
    return <ArticlesStyled>{children}</ArticlesStyled>;
};
  
const ArticlesStyled = styled.li({
    backgroundColor: '#F9D7D7',
    height:'70px',
    cursor: "pointer",
    marginBottom: `17px`,

});
  
export default Articles;
