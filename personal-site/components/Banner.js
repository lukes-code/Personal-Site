import styled from 'styled-components'

const StyledBanner = styled.header`
    background: #fff;
    color: var(--black);
    padding: 50px;
`;

export default function Banner() {
    return(
        <StyledBanner>
            <p></p>
            <p>Skills.</p>
        </StyledBanner>
    );
}