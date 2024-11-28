import { FieldValues, UseFormRegister } from "react-hook-form";
export interface InputProps<T extends FieldValues> {
    label: string;
    placeholder: string;
    type: string;
    htmlForId: keyof T;
    register: UseFormRegister<T>;
    error?: string;
}