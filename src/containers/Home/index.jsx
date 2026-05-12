import { CategoriesCarousel }from "../../components/CategoriesCaruosel";
import { OffersCarousel } from "../../components/OfferCarousel";
import { Banner, Container, Content } from "./style";


export default function Home() {
    return (
        <main>
            <Banner>
                <h1>Bem-vindo(a) !</h1>
            </Banner>

            <Container>
                <Content>
                    <CategoriesCarousel />
                    <OffersCarousel />
                </Content>
            </Container>
        </main>
        
    );
};





