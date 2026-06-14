import { useEffect, useState } from "react";
import { Container, CategoryMenu, Baner, ProductsContainer, CategoryButton, ButtonReturn } from "./style";
import { api } from "../../services/api";
import { formatPrice } from "../../utils/formatPrice";
import { CardProduct } from "../../components/CardProduct";
import { useNavigate, useLocation } from "react-router-dom";
import { set } from "react-hook-form";
import { ArrowUUpLeftIcon } from "@phosphor-icons/react";

export function Menu() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    
    
    const navigate = useNavigate();
    
    const { search } = useLocation();
    
    const queryParams = new URLSearchParams(search);
    
    

    const [activeCategory, setActiveCategory] = useState(() => {
        const categoryID = +queryParams.get('categoria');

        if (categoryID) {
            return categoryID;
        }

        return 0;
    });

    useEffect(() => {
        async function loadCategories() {

            const { data } = await api.get('/categories');

            const newCategories = [{ id: 0, name: 'Todas' }, ...data]

            setCategories(newCategories);
        }

        async function loadProducts() {

            const { data } = await api.get('/products');

            const newProducts = data
                .map(product => ({
                    currencyValue: formatPrice(product.price),
                    ...product
                }
                ));

            setProducts(newProducts);
        }

        loadCategories();
        loadProducts();
    }, []);

    useEffect(() => {
        if (activeCategory === 0) {
            setFilteredProducts(products);
        } else {
            const newFilteredProducts = products.filter(
                (product) => product.category_id === activeCategory);
            setFilteredProducts(newFilteredProducts);
        }
    }, [products, activeCategory]);


    return (
        <Container>
            <Baner>
                

                <h1>
                    O MELHOR
                    <br />
                    HAMBURBER
                    <br /> ESTÁ AQUI!
                    <span>Esse cardápio está irresistível!</span>
                </h1>
            </Baner>
            <CategoryMenu>
                {categories.map(category => (
                    <CategoryButton 
                    key={category.id}
                    $isActiveCategory={activeCategory === category.id}
                        onClick={() => {
                            navigate(
                                {
                                    pathname: '/cardapio',
                                    search: `?categoria=${category.id}`
                                },
                                {
                                    replace: true,
                                },
                            )
                            setActiveCategory(category.id)
                        }}
                        >

                        {category.name}
                    </CategoryButton>
                ))}

            </CategoryMenu>

            <ProductsContainer>
                {filteredProducts.map(product => (
                    <CardProduct product={product} key={product.id} />
                ))}
            </ProductsContainer>
            <ButtonReturn
                onClick={() => navigate(-1)
                }
                >  Voltar </ButtonReturn>
        </Container>
    );
}