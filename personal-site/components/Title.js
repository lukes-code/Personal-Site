import styled from 'styled-components'

const StyledTitle = styled.div`
    background: var(--black);
    color: #fff;
    padding: 50px;
    background-image: url('/static/banner.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 2.5rem;
        margin: 0 auto;
        flex: 1;
    }
`;

export default function Title({ title }) {
    return(
        <StyledTitle>
            <p>{title}</p>
        </StyledTitle>
    );
}