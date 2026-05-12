import styled from "styled-components";

export const Container = styled.div`
    .carrosel-item {
        padding-right: 10px;
    }

    padding-left: 40px;
`;

export const Title = styled.h2`
    font-size: 32px;
    font-weight: 800;
    color: #9758a6;
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
        background-color: #9758a6;
    }
`;

export const ContainerItem = styled.div`
    background: url('${props => props.urlImg}');
    background-position: center;
    background-size: cover;

    display: flex;
    align-items: center;
    padding: 20px 10px;
    width: 100%;
    height: 250px;
    border-radius: 20px;
    margin: 10px 10px 0;

    p {
        color: #fff;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 10px 30px;
        border-radius: 30px;
        font-size: 22.5px;
        font-weight: bold;
        margin-top: 50px;
    }

    @media (max-width: 768px) {
        p {
            font-size: 18px;
        }
    }
`;