import styled from "styled-components";

export const List = styled.ul`
    height: 400px;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0 .5em;

    h1 {
        font-size: 2em;
        font-weight: bold;
        padding-bottom: 1em;
    }

    li {
        background-color: #CCC;
        padding: 0.5em;
        margin-bottom: 1em;
        border-radius: .3em;
        box-shadow: 0 2px 3px gray;

        p {
            display: block;
            padding: 0.5em 0;
        }

        .buttons {
            display: flex;
            justify-content: space-between;

            button {
                border: none;
                padding: 1em;
                color: white;
            }

            .hire-button {
                background-color: green;
            }

            .detele-button {
                background-color: red;
            }
        }
    }
`
