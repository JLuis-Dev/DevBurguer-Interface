import { Container, Content, LogoDev, Navigation, HeaderLink, Options, Profile, LinkContainer, Logout } from "./style";
import { User, ShoppingCart } from '@phosphor-icons/react';
import { useNavigate, useResolvedPath } from "react-router-dom";
import { useUser } from "../../hooks/UserContext";
import Logo from "../../assets/logo.png";

export function Header() {
    const navigate = useNavigate();
    const { logout, userInfo } = useUser();

    const { pathname } = useResolvedPath();

    function logoutUser() {
        logout();
        navigate('/login');
    }
    return (
        <Container>
            <Content>
                <Navigation>
                    <LogoDev>
                        <img src={Logo} alt="" />
                    </LogoDev>

                    <div>
                        <HeaderLink to="/" $isActive={pathname === '/'}>
                            Home
                        </HeaderLink>
                        <hr />
                        <HeaderLink to="/cardapio" $isActive={pathname === '/cardapio'}>
                            Cardápio
                        </HeaderLink>
                    </div>
                </Navigation>
                <Options>
                    <Profile>
                        <User color="#FFF" size={30} />
                        <div>
                            <p>Olá,
                                <span> {userInfo.name} </span>
                            </p>
                        </div>
                        <Logout onClick={logoutUser}>
                            Sair
                        </Logout>
                    </Profile>
                    <LinkContainer>
                        <ShoppingCart color="#FFF" size={24} />
                        <HeaderLink to="/carrinho" $isActive={pathname === '/carrinho'}>
                            Carrinho
                        </HeaderLink>
                    </LinkContainer>
                </Options>
            </Content>
        </Container>
    )
}