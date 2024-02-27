import Link from 'next/link';
import styled from 'styled-components'

const StyledNav = styled.nav`
    display: flex;
    padding: 30px 90px;
    font-weight: bold;
    top: 0;
    color: var(--black);
    z-index: 5;
    background: transparent;
    position: absolute;
    width: 100%;
    transition: all 0.3s;
    a {
        color: var(--black);
    }
    @media only screen and (max-width: 768px) {
        padding: 20px 10px;
`;

export default function Nav() {
    return(
        <StyledNav>
            <Link href="/" passHref >
            &#8592; Home
            </Link>
        </StyledNav>
    );
}