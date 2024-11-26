import { UseFormRegister } from "react-hook-form";
import { UserRegister } from "../../schema/userValidationRegister";

export interface InputProps {
    label: string;
    placeholder: string;
    type: string;
    htmlForId: keyof UserRegister;
    register: UseFormRegister<UserRegister>;
    error?: string;
}