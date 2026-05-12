import PropTypes from "prop-types";
import { Container, CardImage } from "./style";
import { CartButton } from "../CartButton";



export function CardProduct({ product }) {

    const price = product.price.
    toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
;

        return (
            <Container>
                <CardImage src={product.url} alt={product.name} />
                <div>
                    <p>{product.name}</p>
                    <strong>{price}</strong>

                </div>
                <CartButton></CartButton>
            </Container>
        );
}

CardProduct.propTypes = {
    product: PropTypes.object,
};