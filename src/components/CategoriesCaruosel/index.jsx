import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Title, ContainerItem, CategoryButton } from './style';
import { api } from '../../services/api';
import { Pagination, Navigation, A11y } from 'swiper/modules';

export function CategoriesCarousel() {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        let isMounted = true;

        async function loadCategories() {
            try {
                const { data } = await api.get('/categories');
                if (isMounted) {
                    setCategories(Array.isArray(data) ? data : []);
                }
            } catch (error) {
                console.error('Erro ao carregar categorias:', error);
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        }

        loadCategories();

        return () => {
            isMounted = false;
        };
    }, []);

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
        },
    };

    return (
        <Container>
            <Title>Categorias</Title>

            {isLoading ? (
                <p>Carregando categorias...</p>
            ) : categories.length === 0 ? (
                <p>Nenhuma categoria disponível no momento.</p>
            ) : (
                <Swiper
                    spaceBetween={20}
                    slidesPerView={2}
                    loop
                    pagination={{ clickable: true }}
                    navigation
                    modules={[Pagination, Navigation, A11y]}
                    breakpoints={responsive}
                >
                    {categories.map((category) => (
                        <SwiperSlide key={category.id}>
                            <ContainerItem urlImg={category.url}>
                                <CategoryButton
                                    onClick={() => {
                                        navigate(
                                            {
                                                pathname: '/cardapio',
                                                search: `?categoria=${category.id}`
                                            }
                                        );
                                    }}
                                >
                                    {category.name}
                                </CategoryButton>
                            </ContainerItem>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </Container>
    );
}

// export function CategoriesCarousel() {

//     const [categories, setCategories] = useState([]);

//     useEffect(() => {
//         async function loadCategories() {
//             const response = await api.get('/categories');

//             console.log(response);
//         }

//         loadCategories();
//     }, []);

//     return (
//         <div>
//             <h1>
//                 ok
//             </h1>
//         </div>
//     )
// }  
