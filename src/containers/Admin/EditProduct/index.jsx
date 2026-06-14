import { yupResolver } from '@hookform/resolvers/yup';
import { Image } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

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
import { formatPrice } from '../../../utils/formatPrice';
// import { prerender } from 'react-dom/static';

const schema = yup
    .object({
        name: yup.string().required('Digite o nome do produto'),
        price: yup.number().positive().required('Digite o preço do produto')
            .typeError('Digite um preço valido'),
        category: yup.object().required('Selecione uma categoria'),
        offer: yup.bool(),
    })


export function EditProduct() {
    const [fileName, setFileName] = useState(null);
    const [categories, setCategories] = useState([]);

    const navigate = useNavigate();

    const {
        state: { product },
    } = useLocation()

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

        await toast.promise(api.put(`/products/${product.id}`, productFormData), {
            pending: 'Editando Produto...',
            success: 'Produto editado com sucesso',
            error: 'Falha ao editar produto, tente novamente',
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
                    <Input type="text"
                        {...register('name')}
                        defaultValue={product.name}
                    />
                    <ErroMessage>{errors?.name?.message}</ErroMessage>
                </InputGroup>

                <InputGroup>
                    <Label>Preço</Label>
                    <Input type="number"
                        {...register('price')}
                        defaultValue={product.price} />
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
                        defaultValue={product.category}
                        render={({ field }) => (
                            <Select
                                {...field}
                                options={categories}
                                getOptionLabel={(category) => category.name}
                                getOptionValue={(category) => category._id}
                                placeholder="Categorias"
                                menuPortalTarget={document.body}
                                defaultValue={product.category}
                            />
                        )}

                    />

                    <ErroMessage>{errors?.category?.message}</ErroMessage>

                </InputGroup>

                <InputGroup>
                    <ContainerCheckbox>
                        <input type="checkbox"
                            defaultChecked={product.offer}
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