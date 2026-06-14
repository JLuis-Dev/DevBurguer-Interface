import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import { Container, Title } from './style';
import { api } from '../../services/api';
import { Pagination, Navigation, A11y } from 'swiper/modules';
import { CardProduct } from '../CardProduct';
import { formatPrice } from '../../utils/formatPrice';

export function OffersCarousel() {
    const [offers, setOffers] = useState([]);

    const responsive = {
        640: {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        768: {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        1024: {
            slidesPerView: 4,
            slidesPerGroup: 1,
        }

    };


    useEffect(() => {
        async function loadProducts() {

            const { data } = await api.get('/products');
            
            const onlyOffers = data.filter((product) => product.offer).map(product => (
                {currencyValue: formatPrice(product.price), ...product}
            ));

            setOffers(onlyOffers);
        }

        loadProducts();
    }, []);

    return (
        <Container>
            <Title>OFERTAS DO DIA</Title>
            <Swiper
                spaceBetween={20}
                slidesPerView={2}
                loop
                loopFillGroupWithBlank
                navigation
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