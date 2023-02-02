import styled from "styled-components"
const Button = ({children}) => {
        return (
            <ButtonStyled>{children}</ButtonStyled>
        );
};

const ButtonStyled = styled.button ({
    display: 'inline',
    width: "25px",
    height: "25px",
    cursor: "pointer",
    border: "none",
    borderRadius: "20%",
    backgroundColor: "orange",
    margin: "20px",
    boxShadow: "2px 2px 2px #fff",
});

export default Button;