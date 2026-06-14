import styled from "styled-components";

export const Container = styled.div`
    background-color: #fff;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    justify-content: space-between;
    flex-direction: column;

   

    .container-top {
        display: grid;
        grid-gap: 10px 30%;
        grid-template-areas:
        'title title'
        'items items-price'
        'delivery-tax delivery-tax-price';
    }

    .title {
        grid-area: title;
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 20px;
        background-color: #484848;
        color: #fff;
        width: 100%;
        text-align: center;
        padding: 15px;

        border-top-right-radius: 20px;
        border-top-left-radius: 20px;


    }

    .items {
        grid-area: items;
        padding-left: 20px;
    }

    .items-price {
        grid-area: items-price;
        padding-right: 10px;
    }

    .delivery-tax {
        grid-area: delivery-tax;
        padding-left: 20px;
    }

    .delivery-tax-price {
        grid-area: delivery-tax-price;
        padding-right: 10px;
    }

    .container-bottom {
        display: flex;
        justify-content: space-between;
        margin-top: 24px;
        font-size: 20px;
        padding: 20px;
        font-weight: 700;
    }

    *{
        font-weight: 700;
    }

`;