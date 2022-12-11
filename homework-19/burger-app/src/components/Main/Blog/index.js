import styled from "styled-components";
import Articles from "./Articles"; 

const Blog = () => {
  const Article = ['Article1', 'Article2', 'Article3', 'Article4'];
    return (
      <BlogStyled>
      <h3>Blog</h3>
      {Article.map((item) => (
        <Articles key={item}>{item}</Articles>
      ))}
      </BlogStyled>
    );
};

const BlogStyled = styled.ul ({
  padding: '50px',
  display: 'flex',
  flexDirection: 'column',
  listStyle: 'none',
  width: '50%',
  textAlign: "center",
  backgroundColor: '#D9D9D9',
});

export default Blog;