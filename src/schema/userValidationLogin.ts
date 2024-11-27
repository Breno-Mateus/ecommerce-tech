import * as Yup from "yup";
import { InferType } from "yup";

export const userValidationLogin = Yup.object().shape({
    email: Yup.string()
        .email('Email inválido')
        .required('O Email é obrigatório'),
    password: Yup.string()
        .min(6, "A senha deve ter no mínimo 6 caracteres")
        .required("A senha é obrigatória"),
});

export type UserRegisterLogin = InferType<typeof userValidationLogin>;