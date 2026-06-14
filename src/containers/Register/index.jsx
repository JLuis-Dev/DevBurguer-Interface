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
import { Button } from "../../components/Button";

export default function Register() {
    const navigate = useNavigate();
    const schema = yup
        .object({
            name: yup.string().required('O nome é obrigatório'),
            email: yup.string().email('Digite um email válido').required('O email é obrigatório'),
            password: yup.string().min(6, 'No mínimo 6 dígitos').required('Digite uma senha válida'),
            confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'As senhas devem ser iguais').required('Confirme sua senha'),
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
            const { status } =
                await api.post('/users', {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                },
                    {
                        validateStatus: () => true,
                    },
                );


            if (status === 200 || status === 201) {
                setTimeout(() => {
                    navigate('/login')
                }, 3000)
                toast.success('Usuário criado com sucesso')
            } else if (status === 409) {
                toast.error('Email já cadastrado! Faça login para continuar')
            } else {
                throw new Error();
            }
        } catch (error) {
            toast.error('Falha ao criar usuário, tente novamente')
        }

    };


    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="logo-devburguer" />
            </LeftContainer>

            <RightContainer>
                <Title>

                    <span>Criar conta</span>
                </Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Nome</label>
                        <input type="text" {...register("name")} />
                        <p>{errors.name?.message}</p>
                    </InputContainer>
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
                    <InputContainer>
                        <label>Confirme sua senha</label>
                        <input type="password" {...register("confirmPassword")} />
                        <p>{errors.confirmPassword?.message}</p>
                    </InputContainer>
                    <Button type="submit">Criar Conta</Button>
                </Form>
                <p>Já possui conta? <Link to="/login">Clique aqui.</Link> </p>

            </RightContainer>



        </Container>

    );
}