import { FieldValues, Path } from "react-hook-form";
import { InputProps } from "./type";

const Inputs = <T extends FieldValues>({ label, placeholder, type, htmlForId, register, error }: InputProps<T>) => {

    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={String(htmlForId)}>{label}</label>
            <input
                id={String(htmlForId)}
                placeholder={placeholder}
                type={type}
                className="p-1 text-sm rounded-md"
                {...register(htmlForId as Path<T>)}
            />
            {error && <span className="text-red-500 text-xs">{error}</span>}
        </div>
    );
};

export default Inputs;