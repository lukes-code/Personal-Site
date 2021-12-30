import styled from 'styled-components'

const StyledFooter = styled.footer`
    background: var(--black);
    color: #fff;
    text-align: center;
    padding: 50px;
    font-size: 25px;
    font-weight: bold;
`;

export default function Footer() {
    return <StyledFooter>
        <p>CONTACT.</p>
    </StyledFooter>;
} 