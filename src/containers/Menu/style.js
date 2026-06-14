import styled from "styled-components";
import BanerImage from "../../assets/BanerCardapio.svg";
import Backgrond from "../../assets/Group195.svg";
import { Link } from "react-router-dom";



export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #f0f0f0;
    background: linear-gradient(
        rgba(255,255,255, 0.8),
        rgba(255,255,255, 0.8)
    ),
    url('${Backgrond}');
`;

export const Baner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 480px;
    width: 100%;

    background: url('${BanerImage}') no-repeat;
    background-color: ${(props) => props.theme.mainBlack};
    background-position: center;
    background-size: cover;
    flex-direction: column;
    position: relative;

    h1{
        font-family: 'Road Rage', sans-serif;
        font-size: 80px;
        line-height: 65px;
        font-weight: 400;
        color: #fff;
        position: absolute;
        text-align: center;

        right: 20%;
        top: 30%;

        span {
            display: block;
            color: #fff;
            font-size: 20px;
        }

    }
`;

export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 50px;
`;

export const CategoryButton = styled(Link)`
    display: flex;
    padding: 10px 20px;
    border-radius: 5px;
    color: ${(props) => props.$isActiveCategory ? "#9758a6" : "#696969"}    ;
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
    line-height: 20px;
    border: none;
    border-bottom: ${(props) => props.$isActiveCategory ? "3px solid #9758a6" : "none"};

    &:hover {
        color: #9758a6;
    }
`;

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 50px;
    justify-content: center;
    max-width: 1280px;
    margin: 50px auto;
    
`;


export const ButtonReturn = styled(Link)`
    top: 20px;
    left: 20px;
    background: none;
    border: none;
    color: #9758a6;
    font-size: 14px;
    text-decoration: none;
    padding: 10px 20px;
    cursor: pointer;
    transition: all 0.4s;
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
    font-weight: 700;

    &:hover {
        color: #7d1a96;
    }
`;