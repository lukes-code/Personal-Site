import Link from 'next/link';
import styled from 'styled-components'

const StyledNav = styled.nav`
    display: flex;
    padding: 30px 90px;
    text-transform: uppercase;
    font-weight: bold;
    top: 0;
    color: var(--black);
    z-index: 5;
    background: transparent;
    position: absolute;
    width: 100%;
    img {
        cursor: pointer;
    }
    @media only screen and (max-width: 1900px) {
        padding: 10px 50px;
    }
    @media only screen and (max-width: 768px) {
        padding: 20px;
    }
`;

export default function Nav() {
    return(
        <StyledNav>
            <Link href="/" passHref>
                <img src="/static/logo.png" alt="logo" />
            </Link>
        </StyledNav>
    );
}