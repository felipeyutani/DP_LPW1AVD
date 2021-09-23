import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 15px;

    width: 100%;

    ul li {
    text-decoration: none;
    padding: 20px;
    font-family: Verdana;
    display: flex;
    flex-direction: column;
    background: #E2D6FC; 
    }

    button {
    margin-top:30px;
    padding: 10px 60px;
    border: 0;
    background: #E2B1FC; 
    color: #000000;
    font-size: 15px;
    cursor: pointer;
    }
`

export const Form = styled.form`
    width: 150%;
    max-width: 700px;
    margin: 60px auto 0;
    padding: 30px;
    background: #fff;

    display: flex;
    flex-direction: column;

    input {
    margin-bottom: 10px;
    }

    input[type=text] {
    height: 40px;
    border-radius: 4px;
    border: 1px solid #ddd;
    padding: 0 20px;
    font-size: 14px;
    }

    button {
    padding: 10px 20px;
    border: 0;
    background: black;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    }
`
