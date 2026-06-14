import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    padding-left: 40px;
`;

export const Title = styled.h2`
    font-size: 32px;
    font-weight: 800;
    color: ${(props) => props.theme.purple};
    padding-bottom: 12px;
    position: relative;
    text-align: center;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 50px;
        height: 4px;
        background-color: ${(props) => props.theme.purple};
    }
`;

export const ContainerItem = styled.div`
    background: url('${props => props.urlImg}');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 20px 10px;
    width: 100%;
    height: 250px;
    border-radius: 20px;
    margin: 10px 10px 0;


    
`;

export const CategoryButton = styled(Link)`
    color: #fff;
    background-color: rgba(0, 0, 0, 0.55);
    padding: 10px 30px;
    border-radius: 30px;
    font-size: 22.5px;
    font-weight: 800;
    text-decoration: none;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: rgba(0, 0, 0, 0.75);
    }

    @media (max-width: 768px) {
        font-size: 18px;
    }

`;