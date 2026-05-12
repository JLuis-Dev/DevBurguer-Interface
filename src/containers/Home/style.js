import styled from "styled-components";
import BannerHome from "../../assets/banner-home.svg";
import Backgrond from "../../assets/Group195.svg";


export const Banner = styled.div`
    background: url('${BannerHome}');
    background-position: center;
    background-size: cover;
    height:480px;

    h1 {
        font-family: 'Road Rage', sans-serif;
        font-size: 80px;
        color: #f4f4f4;
        position: absolute;
        right: 20%;
        top: 10%;
    }
`;

export const Container = styled.section`
    background: linear-gradient(
        rgba(255,255,255, 0.8),
        rgba(255,255,255, 0.8)
    ),url('${Backgrond}');
`;

export const Content = styled.div`
    /* padding-bottom: 70px; */
`;