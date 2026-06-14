import styled from "styled-components";
import BackgroudLogin from "../../assets/bg.png";
import BackgroundForm from "../../assets/Group195.svg"
import { Link as ReactLink } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    
    `;

export const LeftContainer = styled.div`
background: url('${BackgroudLogin}');
background-size: cover;
background-position: center;

height: 100%;
width: 100%;
max-width: 50%;

display: flex;
align-items: center;
justify-content: center; 
img {
    width: 80%;
}   

`;

export const RightContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    height: 100%;
    width: 100%;
    max-width: 50%;

    background: url('${BackgroundForm}');
    background-color: #1e1e1e;
    background-size: cover;
    background-position: center;

    p {
        color: #fff;
        font-size: 18px;
        font-weight: 800;

        a{
            text-decoration: underline
        }
    }

`;

export const Title = styled.h2`
    font-family: 'Road Rage', sans-serif;
    font-size: 40px;
    color: #fff;
    text-align: center;

    span {
        color: ${(props) => props.theme.purple};
        font-family: 'Road Rage', sans-serif;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    width: 100%;
    max-width: 400px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;

    input {
        width: 100%;
        border: none;
        height: 52px;
        padding: 0 16px;
        border-radius: 5px;
    }

    label {
        font-size: 18px;
        font-weight: 600;
        color: #fff;
    }

    p {
        font-size: 14px;
        line-height: 80%;
        color: #cf3057;
        font-weight: 600;
        height: 10px;
    }
`;

export const Link = styled(ReactLink)`
    color: #fff;
    text-decoration: none;
`;
