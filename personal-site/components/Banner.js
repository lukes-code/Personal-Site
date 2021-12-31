import styled from 'styled-components'

const StyledBanner = styled.header`
    background: #fff;
    color: var(--black);
    padding: 50px;
    min-height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: color ease 0.5s;
    p {
        font-weight: bold;
        text-transform: uppercase;
        max-width: 700px;
        margin: 0 auto;
        text-align: center;
        font-size: 1.3rem;
        word-spacing: 10px;
    }
    :hover {
        color: var(--red);
    }
`;

export default function Banner() {
    return(
        <StyledBanner>
            <div>
                <p>JAVASCRIPT PHP HTML CSS REACT MYSQL</p>
                <p>SASS NEXT.JS STYLED-COMPONENTS GIT JQUERY</p>
                <p>SMARTY REST XML PHOTOSHOP FIREBASE</p>
                <p>GITHUB FIGMA ADOBE XD SVN PREMIERE PRO</p>
            </div>
        </StyledBanner>
    );
}