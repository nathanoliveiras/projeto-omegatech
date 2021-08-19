import styled from "styled-components"

export const Form = styled.form`
    padding: 24px 40px 40px 40px;
    width: 100%;
    height: 400px;
    display: flex;
    flex-flow: column;
    align-items: center;
    box-sizing: border-box;
    
    input, select{
        width: 100%;
        font-size: 12px;
        margin-bottom: 1em;
        color: #878686;
        border: 1px solid #000;
        padding: 8px;
        outline: none;
        box-sizing: border-box;
    }
    
    label {
        padding-top: 1em;
    }

    p{
        text-align: center;
        font-size: 1.5rem;
        font-weight: 500;
        margin: 25px 0px;
    }

    .two-inputs {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
    
    .date {
        width: 45%;
    }

    button{
        border: none;
        padding: 5px 0;
        width: 120px;
        text-align: center;
        color:#FFF;
        font-size: 1rem;
        bottom: 0;
    }

    .blue-button {
        background-color: #3980FF;
    }

    .orange-button {
        background-color: #E16F1C;
    }
`