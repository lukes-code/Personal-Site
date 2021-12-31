import Link from 'next/link';
import styled from 'styled-components'

const StyledFooter = styled.footer`
    background: var(--black);
    color: #fff;
    text-align: center;
    padding: 50px;
    font-size: 25px;
    font-weight: bold;
    div img {
        height: 30px;
        margin: 5px;
    }
`;

export default function Footer() {
    return <StyledFooter>
        <p>CONTACT.</p>
        <div>
            <Link href="https://github.com/lukes-code" target="_blank" passHref>
                <img src="/static/github.png" alt="github" />
            </Link>
            <Link href="https://www.instagram.com/lukes.code/" target="_blank" passHref>
                <img src="/static/instagram.png" alt="instagram" />
            </Link>
        </div>
    </StyledFooter>;
} 