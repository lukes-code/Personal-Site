import styled from 'styled-components'

const StyledDiv = styled.div`
    background: var(--black);
    text-align: center;
    padding: 50px;
    img {
        width: 450px;
    }
    @media only screen and (max-width: 768px) {
        img {
            max-width: 300px; 
        }
    }
`;

export default function ContentImage({ source, alt }) {
    return(
        <StyledDiv>
          <img src={source} alt={alt} />
        </StyledDiv>
    );
}