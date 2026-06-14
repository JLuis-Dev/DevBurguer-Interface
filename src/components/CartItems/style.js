import styled from "styled-components";

export const ProductImage = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 16px;
`;
export const ButtonGrup = styled.div`
display: flex;
align-items: center;
gap: 12px;

button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    color: #fff;
    border: none;
    background-color: ${(props) => props.theme.purple};
    border-radius: 5px;
    transition: all 0.4s;

    &:hover {
        background-color: ${(props) => props.theme.secondDarkPurple};
    }
}
`;
export const EmptyCart = styled.p`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    color: #ff3205;
`;

export const ButtonTrash = styled.img`
    height: 20px;
    width: 20px;
    cursor: pointer;
`;