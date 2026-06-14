import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 50px;
    background-color: ${(props) => props.theme.darkPurple};
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 100vw;
    
    p {
        color: #fff;
        font-size: 14px;
        font-weight: 200;
    }
`;