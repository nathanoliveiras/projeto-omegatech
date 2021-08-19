import styled from "styled-components"

export const Form = styled.form`
    padding: 24px 40px 40px 40px;
    width: 50%;
    min-height: 300px;
    display: flex;
    flex-flow: column;
    align-items: center;
    
    input{
        width: 100%;
        font-size: 12px;
        margin-bottom: 32px;
        color: #878686;
        border: 1px solid #000;
        padding: 8px;
        outline: none;
        box-sizing: border-box;
    }
    
    p{
        text-align: center;
        font-family: SharpSans,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,
                    Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,
                    Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
        font-size: 1.5rem;
        font-weight: 500;
        margin: 25px 0px;
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