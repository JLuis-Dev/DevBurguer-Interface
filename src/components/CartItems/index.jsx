import { Table } from '../index';
import { useCart } from '../../hooks/CartContext';
import { formatPrice } from '../../utils/formatPrice';
import TrashIcon from '../../assets/trash.svg';
import { ButtonGrup, EmptyCart, ProductImage, ButtonTrash } from './style';



export function CartItems({ ...props }) {
    const { cartProducts, increaseProduct, decreaseProduct, deleteProduct } = useCart();

    // const total = cartProducts.reduce((acc, product) => acc + product.currencyValue * product.quantity, 0);

    return (
        <Table.Root>
            <Table.Header>
                <Table.Tr>
                    <Table.Th></Table.Th>
                    <Table.Th>Itens</Table.Th>
                    <Table.Th>Preço</Table.Th>
                    <Table.Th>Quantidade</Table.Th>
                    <Table.Th>Total</Table.Th>
                    <Table.Th></Table.Th>

                </Table.Tr>
            </Table.Header>
            <Table.Body>
                {cartProducts?.length ?
                    cartProducts.map((product) => (
                        <Table.Tr key={product.id} {...props} >
                            <Table.Td>
                                <ProductImage src={product.url} alt={product.name} />
                            </Table.Td>
                            <Table.Td>{product.name}</Table.Td>
                            <Table.Td>{product.currencyValue}</Table.Td>
                            <Table.Td>
                                <ButtonGrup>

                                    <button onClick={() => decreaseProduct(product.id)}>-</button>
                                    {product.quantity}
                                    <button onClick={() => increaseProduct(product.id)}>+</button>
                                </ButtonGrup>
                            </Table.Td>

                            <Table.Td>
                                <div style={{ fontWeight: 'bold' }}>
                                    {formatPrice(product.quantity * product.price)}
                                </div>
                            </Table.Td>
                            <Table.Td>
                                <ButtonTrash src={TrashIcon} alt="Remover item" 
                                onClick={() => deleteProduct(product.id)}
                                />
                            </Table.Td>
                        </Table.Tr>
                    ))
                    :
                    <EmptyCart>Carrinho vazio</EmptyCart>
                }


            </Table.Body>
        </Table.Root>
    );
}