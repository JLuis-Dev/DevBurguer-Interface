import { ContainerButton } from "./style";

export function Button({ children, onClick, disabled, type = 'button' }) {
    return (
        <ContainerButton type={type} onClick={onClick} disabled={disabled}>
            {children}
        </ContainerButton>
    );
}