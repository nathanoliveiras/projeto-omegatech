import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    font-family: Arial, Helvetica, sans-serif;
    justify-content: center;
    justify-content: space-around;
    width: 50%;
    margin: 2% auto 0;
    align-items: center;

    h2 {
        font-size: 1.5em;
        font-weight: bold;

        span {
            display: block;
        }
    }

    .vertical-scroll {
        overflow-x: hidden;
        overflow-y: auto;
        width: 100%;
    }
`