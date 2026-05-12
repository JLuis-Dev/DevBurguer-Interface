import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import { Container, Title } from './style';
import { api } from '../../services/api';
import { Pagination, Navigation, A11y } from 'swiper/modules';
import { CardProduct } from '../CardProduct';

export function OffersCarousel() {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        async function loadProducts() {

            const { data } = await api.get('/products');
            
            const onlyOffers = data.filter((product) => product.offer);

            setOffers(onlyOffers);
        }

        loadProducts();
    }, []);

    const responsive = {
        640: {
            slidesPerView: 3,
            slidesPerGroup: 2,
        },
        768: {
            slidesPerView: 4,
            slidesPerGroup: 3,
        },
        1024: {
            slidesPerView: 6,
            slidesPerGroup: 2,
        }

    }

    return (
        <Container>
            <Title>OFERTAS DO DIA</Title>
            <Swiper
                spaceBetween={20}
                slidesPerView={2}
                loop={true}
                loopFillGroupWithBlank={true}
                navigation={true}
                modules={[ Pagination, Navigation, A11y]}

                breakpoints={ responsive}
                itemClass='carrosel-item'
            >
                {offers.map((product) => (
                    <SwiperSlide key={product.id}>
                        <CardProduct product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    );
}