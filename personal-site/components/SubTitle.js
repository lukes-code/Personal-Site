import styled from 'styled-components'

const StyledSubTitle = styled.div`
    background: var(--black);
    color: #fff;
    margin: 0 auto;
    padding: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    h2 {
        margin: 0 auto;
        flex: 1;
        max-width: 450px;
    }
    span {
        display: block;
        font-size: 1rem;
    }
`;

export default function SubTitle({ firstLine, secondLine, thirdLine }) {
    return(
        <StyledSubTitle>
            <div>
                <h2>
                    <span>{firstLine}</span>
                    {secondLine}<br />
                    {thirdLine}
                </h2>
            </div>
        </StyledSubTitle>
    );
}