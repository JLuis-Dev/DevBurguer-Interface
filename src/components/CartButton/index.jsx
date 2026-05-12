import Cart from "../../assets/cart.svg";
import { ContainerButton } from "./style";

export function CartButton({...props}) {
    return (
        <ContainerButton>
            <img src={Cart} alt="Carrinho" />
        </ContainerButton>
    );
}