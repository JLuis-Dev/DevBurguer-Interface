import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;
    cursor: grab;
    margin: 10px;
    padding-bottom: 40px;

    div {
        width: 100%;
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        p{
            font-size: 18px;
            color:#ff8c05;
            line-height: 20px;
            font-weight: 700;
            margin-top: 40px;
        }

        strong {
            font-size: 22px;
            color: #363636;
            font-weight: 800;
            line-height: 20px;
            margin-top: 20px;
        }
    }
`;

export const CardImage = styled.img`
    height: 100px;
    position: absolute;
    top: -50px;

    
`;
