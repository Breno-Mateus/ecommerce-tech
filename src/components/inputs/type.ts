import { UseFormRegister } from "react-hook-form";
import { UserRegister } from "../../schema/userValidationRegister";
import { UserRegisterLogin } from "../../schema/userValidationLogin";

export interface InputProps {
    label: string;
    placeholder: string;
    type: string;
    htmlForId: keyof UserRegister;
    register: UseFormRegister<UserRegister> | UseFormRegister<UserRegisterLogin>;
    error?: string;
}