import Link from 'next/link';
import styled from 'styled-components'

const StyledNav = styled.nav`
    display: flex;
    padding: 30px;
    border-bottom: 3px solid var(--black); 
    text-transform: uppercase;
    font-weight: bold;
    a {
        flex: 1;
    }
`;

export default function Nav() {
    return(
        <StyledNav>
            <Link href="/">Logo</Link>
            <Link href="#">ABOUT</Link>
            <Link href="/blog">BLOG</Link>
            <Link href="#">PORTFOLIO</Link>
        </StyledNav>
    );
}