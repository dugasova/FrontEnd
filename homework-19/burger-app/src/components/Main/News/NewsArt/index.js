import styled from "styled-components";

const NewsArt = ({ children }) => {
    return <NewsArtStyled>{children}</NewsArtStyled>;
};
  
const NewsArtStyled = styled.li({
    // width: '30xp',
    backgroundColor: '#BDCDF6',
    height:'100px',
    cursor: "pointer",
    marginBottom: '25px',
    listStyle: 'none'
});
  
export default NewsArt;