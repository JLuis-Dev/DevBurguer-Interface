import { useContext, createContext, useEffect, useState } from "react";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);

    const putProductOnCart = (product) => {
        const cartIndex = cartProducts.findIndex((pdr) => pdr.id === product.id);

        let newProductInCart = [];
        if (cartIndex >= 0) {
            newProductInCart = cartProducts;

            newProductInCart[cartIndex].quantity =
                newProductInCart[cartIndex].quantity + 1;
        } else {
            product.quantity = 1;
            newProductInCart = [...cartProducts, product];

            setCartProducts(newProductInCart);
        }

        updateLocalStorage(newProductInCart);

    }



    const clearCart = () => {
        setCartProducts([]);
        updateLocalStorage([]);
    };

    const deleteProduct = (productId) => {
        const nerCart = cartProducts.filter((pdr) => pdr.id !== productId);

        setCartProducts(nerCart);

        updateLocalStorage(nerCart);
    };

    const increaseProduct = (productId) => {
        const newCart = cartProducts.map((pdr) => {
            return pdr.id === productId
                ? { ...pdr, quantity: pdr.quantity + 1 }
                : pdr;
        })

        setCartProducts(newCart);

        updateLocalStorage(newCart);

    }

    const decreaseProduct = (productId) => {
        const cartIndex = cartProducts.findIndex((pdr) => pdr.id === productId);

        if (cartProducts[cartIndex].quantity > 1) {
            const newCart = cartProducts.map((pdr) => {
                return pdr.id === productId
                    ? { ...pdr, quantity: pdr.quantity - 1 }
                    : pdr;
            })

            setCartProducts(newCart);

            updateLocalStorage(newCart);
        } else {
            deleteProduct(productId);
        }
    }

    const updateLocalStorage = (products) => {
        localStorage.setItem('devburguer:cartInfo', JSON.stringify(products));
    }

    useEffect(() => {
        const clientCartData = localStorage.getItem('devburguer:cartInfo');

        if (clientCartData) {
            setCartProducts(JSON.parse(clientCartData));
        }
    }, []);



    return (
        <CartContext.Provider
            value={
                {
                    cartProducts,
                    putProductOnCart,
                    clearCart,
                    deleteProduct,
                    increaseProduct,
                    decreaseProduct,
                }
            }
        >
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('useCart must be a valid context');
    }

    return context;
}