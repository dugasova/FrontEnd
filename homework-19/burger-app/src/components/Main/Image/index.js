import styled from "styled-components"
const Image = ({name}) => {
    return (
        <ImageStyled
        src = {require(`../../../assets/ingredients/${name}.svg`)} >

        </ImageStyled>
    );
};

const ImageStyled = styled.img({
    width: "30px",
    height: "30px"
});

export default Image;