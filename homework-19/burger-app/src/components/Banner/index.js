import styled from "styled-components";

const Banner = ()=> {
    return (
        <BannereStyled>
            This is a banner
        </BannereStyled>
    );
    
};

const BannereStyled = styled.div({
    height: '100px',
    marginBottom: '50px',
    marginTop:'50px',
    textAlign: 'center',
    backgroundColor: '#D9D9D9'
});

export default Banner;