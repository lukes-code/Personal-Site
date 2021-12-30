import styled from 'styled-components'

const StyledFooter = styled.footer`
    background: var(--black);
    color: #fff;
    text-align: center;
    padding: 50px;
    
`;

export default function Footer() {
    return <StyledFooter>
        <p>footer</p>
    </StyledFooter>;
} 