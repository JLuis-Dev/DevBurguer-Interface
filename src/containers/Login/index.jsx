import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


import {
    Container,
    Form,
    InputContainer,
    LeftContainer,
    RightContainer,
    Title,
    Link
} from "./style";
import Logo from "../../assets/logo.png";
import { Button }  from "../../components/Button";

export default function Login() {

    const navigate = useNavigate();

    const schema = yup
        .object({
            email: yup.string().email('Digite um email válido').required('O email é obrigatório'),
            password: yup.string().min(6, 'No mínimo 6 dígitos').required('Digite uma senha válida'),
        })
        .required();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = async (data) => {
        try {
            const { status, data: { token } } =
                await api.post('/sessions', {
                    email: data.email,
                    password: data.password,
                },
                    {
                        validateStatus: () => true,
                    },
                );

            if (status === 200) {
                setTimeout(() => {
                    navigate('/')
                }, 3000)
                toast.success('Seja bem vindo(a)!')
                localStorage.setItem('token', token);
            } else if (status === 400) {
                toast.error('Email ou senha incorretos')
            } else {
                throw new Error();
            }

        } catch (error) {
            toast.error('Falha ao fazer login, tente novamente')
        }

    };


    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="logo-devburguer" />
            </LeftContainer>

            <RightContainer>
                <Title>

                    Olá seja bem vindo ao <span>Dev Burguer!</span>
                    <br />
                    Acesse com seu <span>Login e senha.</span>
                </Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" {...register("email")} />
                        <p>{errors.email?.message}</p>
                    </InputContainer>
                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" {...register("password")} />
                        <p>{errors.password?.message}</p>
                    </InputContainer>
                    <Button type="submit">Entrar</Button>
                </Form>
                <p>Não possui conta? <Link to="/cadastro">Clique aqui.</Link> </p>

            </RightContainer>



        </Container>

    );
}