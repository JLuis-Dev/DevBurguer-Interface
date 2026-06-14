import Logo from "../../assets/logo.png";
import { CartItems, CartResume } from "../../components";
import { Container, Banner, Title, Content } from "./style";



export function Cart() {
    return (
        <Container>
            <Banner>
                <img src={Logo} alt="Logo" />
            </Banner>
            <Title>Checkout - Pedido</Title>
            <Content>
                <CartItems/>
                <CartResume/>
            </Content>
        </Container>
    );
}