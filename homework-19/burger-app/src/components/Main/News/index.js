import styled from "styled-components";
import NewsArt from "./NewsArt"; 
const News = () => {
    const New = ['News1', 'News2', 'News3'];
    return (
    <NewsStyled><h3>News</h3>
        {New.map((item) => (<NewsArt key={item}>{item}</NewsArt>
        ))}
    </NewsStyled>
    );
};
  
const NewsStyled = styled.div({
    width: '30%',
    backgroundColor: "#D9D9D9",
    padding: '30px',
    textAlign: 'center'
});
  
export default News;