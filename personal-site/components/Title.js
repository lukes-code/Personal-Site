import styled from 'styled-components'

const StyledTitle = styled.header`
    background: var(--black);
    color: #fff;
    padding: 50px;
`;

export default function Title({ title }) {
    return(
        <StyledTitle>
            <p>{title}</p>
            <p>Developer.</p>
        </StyledTitle>
    );
}