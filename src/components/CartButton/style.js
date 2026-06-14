import styled from "styled-components";



export const ContainerButton = styled.button`
    background-color: ${(props) => props.theme.purple};
    width: 100%;
    height: 40px;
    border: 0;
    border-radius: 7.78px;
    font-size: 30px;    
    cursor: pointer;
    margin-top: 20px;
    transition: all 0.4s;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: ${(props) => props.theme.secondDarkPurple};
    }

    img {
        width: 24px;
        height: 20px;
    }
`;