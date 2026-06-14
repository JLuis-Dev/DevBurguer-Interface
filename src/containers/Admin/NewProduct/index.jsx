import { yupResolver } from '@hookform/resolvers/yup';
import { Image } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { api } from '../../../services/api';
import {
    Container,
    Form,
    InputGroup,
    Label,
    Input,
    LabelUpload,
    Select,
    SubmitButton,
    ErroMessage,
    ContainerCheckbox,
} from './style';
// import { prerender } from 'react-dom/static';

const schema = yup
    .object({
        name: yup.string().required('Digite o nome do produto'),
        price: yup.number().positive().required('Digite o preço do produto')
            .typeError('Digite um preço valido'),
        category: yup.object().required('Selecione uma categoria'),
        offer: yup.bool(),
        file: yup.mixed()
            .test('required', 'Selecione uma imagem para continuar', (value) => {
                return value && value.length > 0
            }).test('fileSize', 'Carregue arquivos até 5mb', (value) => {
                return value && value.length > 0 && value[0].size <= 5000000
            }).test('type', 'Carregue apenas imagens PNG ou JPEG', (value) => {
                return value && value.length > 0 &&
                    (value[0].type === 'image/png' || value[0].type === 'image/jpeg')
            })
    })


export function NewProduct() {
    const [fileName, setFileName] = useState(null);
    const [categories, setCategories] = useState([]);


    const navigate = useNavigate();

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories');

            setCategories(data);
        }

        loadCategories();
    }, []);
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = async (data) => {
        const productFormData = new FormData();

        productFormData.append('name', data.name);
        productFormData.append('price', data.price);
        productFormData.append('category_id', data.category.id);
        productFormData.append('file', data.file[0]);
        productFormData.append('offer', data.offer);

        await toast.promise(api.post('/products', productFormData), {
            pending: 'Carregando...',
            success: 'Produto cadastrado com sucesso',
            error: 'Falha ao cadastrar produto'
        });

        setTimeout(() => {
            navigate('/admin/produtos');
        }, 3000);
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup>
                    <Label>Nome</Label>
                    <Input type="text" {...register('name')} />
                    <ErroMessage>{errors?.name?.message}</ErroMessage>
                </InputGroup>

                <InputGroup>
                    <Label>Preço</Label>
                    <Input type="number" {...register('price')} />
                    <ErroMessage>{errors?.price?.message}</ErroMessage>
                </InputGroup>


                <InputGroup>
                    <LabelUpload>
                        <Image />
                        <input type="file"
                            {...register('file')}
                            accept="image/png, image/jpeg"
                            onChange={(value) => {
                                setFileName(value.target.files[0]?.name);
                                register('file').onChange(value);
                            }}
                        />
                        {fileName || "Upload do produto"}
                    </LabelUpload>
                    <ErroMessage>{errors?.file?.message}</ErroMessage>
                </InputGroup>

                <InputGroup>
                    <Label>Categoria</Label>
                    <Controller
                        name="category"
                        control={control}
                        render={({ field }) => (
                            <Select
                                {...field}
                                options={categories}
                                getOptionLabel={(category) => category.name}
                                getOptionValue={(category) => category._id}
                                placeholder="Categorias"
                                menuPortalTarget={document.body}
                            />
                        )}

                    />

                    <ErroMessage>{errors?.category?.message}</ErroMessage>

                </InputGroup>

                <InputGroup>
                    <ContainerCheckbox>
                        <input type="checkbox"
                            {...register('offer')}
                        />
                        <Label>Produto em Oferta?</Label>
                    </ContainerCheckbox>
                </InputGroup>

                <SubmitButton type="submit">
                    Adicionar Produto
                </SubmitButton>

            </Form>
        </Container>
    )
}