import styled from "styled-components"

export const Form = styled.form`
    border-style: solid;
    border-color: #000;
    padding: 24px 40px 40px 40px;
    margin: auto;
    margin-top: 5%;
    width: 25%;
    height: 50%;
    
    input{
        width: 100%;
        font-size: 12px;
        margin-bottom: 32px;
        color: #878686;
        border: 1px solid #000;
        padding-bottom: 8px;
        outline: none;
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
            padding: 15px 30px;
            width: 90px;
            height: 20px;
            text-align: center;
            transition: 0.5s;
            background-color: #E16F1C;
            color:#FFF;
            font-size: 1rem;
            font-weight: 300;
            display:flex;
            justify-content: center;
            align-items:center;      
    }
`