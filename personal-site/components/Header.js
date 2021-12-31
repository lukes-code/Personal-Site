import Link from 'next/link';
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
    background-image: url('/static/header.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    margin-top: -200px;
    h1 {
        text-transform: uppercase;
        font-size: 5rem;
        padding: 0px;
        margin: 0px;
    }
    button {
        color: #fff;
        background: var(--red);
        border: none;
        padding: 10px 50px;
        font-size: 1.1rem;
        border-radius: 3px;
        cursor: pointer;
    }
    div {
        position: absolute;
        top: 35%;
        left: 5%;
    }
    @media only screen and (max-width: 768px) {
        h1 {
            font-size: 3rem;
        }
        div {
            top: 50%;
        }
    }
`;

export default function Header() {
    return(
        <StyledHeader>
            <div>
                <h1>Luke.</h1>
                <h1>Developer.</h1>
                <Link href="#blog" passHref>
                    <button>Explore</button>
                </Link>
            </div>
        </StyledHeader>
    );
}