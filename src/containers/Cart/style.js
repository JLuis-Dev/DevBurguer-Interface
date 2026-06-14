import styled from "styled-components";
import Texture from "../../assets/bg.png";
import Group from "../../assets/Group195.svg";

export const Container = styled.div`
    width: 100%;
    min-height: 100%;
    background-color: #f0f0f0;
    background: linear-gradient(
        rgba(255,255,255, 0.6),
        rgba(255,255,255, 0.6)
    ), url(${Group}) center;
    min-height: 100vh;
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 30%;
    width: 100%;
    max-width: 1280px;
    padding: 40px;
    margin: 0 auto;
    gap: 40px;
`;

export const Banner = styled.div`
    background: url(${Texture});
    background-color: #1e1e1e;
    display: flex;
    position: relative;
    background-size: cover;
    background-position: center;
    height: 180px;
    align-items: center;
    justify-content: center;
    
    img {
        height: 130px;
    }`
    ;



export const Title = styled.h1`
font-size: 32px;
font-weight: 800;
padding-bottom: 12px;
color: #61a120;
text-align: center;
position: relative;

&::after {
    content: "";
    position: absolute;
    width: 56px;
    height: 4px;
    background-color: ${(props) => props.theme.darkPurple};
    border-radius: 4px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}
`;

export const CartItems = styled.div``;

export const CartResume = styled.div``;