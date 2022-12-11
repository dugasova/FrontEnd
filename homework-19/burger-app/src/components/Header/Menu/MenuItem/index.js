import styled from "styled-components";

const MenuItem = ({ children }) => {
  return <MenuItemStyled>{children}</MenuItemStyled>;
};

const MenuItemStyled = styled.li({
  backgroundColor: ' #E7EFD6',
  marginLeft: 10,
  cursor: "pointer",
  width: '56px',
  height: "37px",
  textAlign: "center"
});

export default MenuItem;