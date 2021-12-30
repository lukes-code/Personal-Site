import styled from 'styled-components'

const StyledHeader = styled.header`
    background: var(--black);
    color: #fff;
    padding: 50px;
    top: 0;
    width: 100%;
    z-index: 1;
    min-height: 500px;
    height: 100vh;
`;

export default function Header() {
    return(
        <StyledHeader>
            <p>Luke.</p>
            <p>Developer.</p>
        </StyledHeader>
    );
}