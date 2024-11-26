import * as Yup from "yup";
import { InferType } from "yup";

export const userValidationRegister = Yup.object().shape({
    fullname: Yup.string()
        .required('Nome completo é obrigatório')
        .min(3, 'O nome deve ter pelo menos 3 caracteres'),
    email: Yup.string()
        .email('Email inválido')
        .required('O Email é obrigatório'),
    phone: Yup.string()
        .required('O Telefone é obrigatório')
        .matches(/^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/, 'Telefone inválido'),
    cep: Yup.string()
        .required('O CEP é obrigatório')
        .matches(/^\d{5}-?\d{3}$/, 'CEP inválido'),
    neighborhood: Yup.string().required('O Bairro é obrigatório'),
    street: Yup.string().required('A Rua é obrigatória'),
    number: Yup.string()
        .required('O número é obrigatório')
        .matches(/^\d+$/, 'O número deve conter apenas dígitos'),
    complement: Yup.string().nullable(),
    password: Yup.string()
        .min(6, "A senha deve ter no mínimo 6 caracteres")
        .required("A senha é obrigatória"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), undefined], "As senhas não coincidem")
        .required("A confirmação de senha é obrigatória"),
});

export type UserRegister = InferType<typeof userValidationRegister>;