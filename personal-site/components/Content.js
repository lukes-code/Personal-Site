import styled from 'styled-components'

const StyledDiv = styled.div`
    background: var(--black);
    padding: 50px 30px;
    color: var(--grey);
    p {
        max-width: 700px;
        margin: 0 auto;
    }
`;

export default function Content({ content }) {
    return(
        <StyledDiv>
            <p>{content}</p>
        </StyledDiv>
    );
}