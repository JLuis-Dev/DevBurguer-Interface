import { SignOutIcon } from "@phosphor-icons/react";
import { useResolvedPath } from "react-router-dom";

import Logo from "../../assets/logo.png";
import { navLinks } from "./navLinks";
import { Container, NavLinkContainer, NavLink, Footer } from "./style";
import { useUser } from "../../hooks/UserContext";

export function SideNavAdmin() {
    const { logout } = useUser();
    const { pathname } = useResolvedPath();

    return (
        <Container>
            <img src={Logo} alt="Hamburger Logo DevBurguer" />
            <NavLinkContainer>
                {navLinks.map((navLink) => (
                    <NavLink 
                    key={navLink.id} 
                    to={navLink.path}
                    $isActive={pathname === navLink.path}>
                        {navLink.icon}
                        <span>{navLink.label}</span>
                    </NavLink>
                ))}
            </NavLinkContainer>
            <Footer>
                <NavLink to="/login" onClick={logout} >
                    <SignOutIcon />
                    <span>Sair</span>
                </NavLink>
            </Footer>
        </Container>
    )
}