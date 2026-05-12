import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import { Container, Title, ContainerItem } from './style';
import { api } from '../../services/api';
import { Pagination, Navigation , A11y } from 'swiper/modules';

export function CategoriesCarousel() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function loadCategories() {
            
                const { data } = await api.get('/categores');
                setCategories(data);
        }

        loadCategories();
    }, []);

    const responsive = {
        640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        1024: {
            slidesPerView: 4,
            slidesPerGroup: 2,
        },
    };

    return (
        <Container>
            <Title>Categorias</Title>
            <Swiper
                spaceBetween={20}
                slidesPerView={2}
                loop={true}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Pagination, Navigation, A11y]}
                breakpoints={responsive}
            >
                {categories.map((category) => (
                    <SwiperSlide key={category.id}>
                        <ContainerItem urlImg={category.url}>
                            <p>{category.name}</p>
                        </ContainerItem>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    );
}