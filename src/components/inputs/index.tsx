import { InputProps } from "./type";

const Inputs = ({ label, placeholder, type, htmlForId, register, error }: InputProps) => {

    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={htmlForId}>{label}</label>
            <input
                id={htmlForId}
                placeholder={placeholder}
                type={type}
                className="p-1 text-sm rounded-md"
                {...register(htmlForId)}
            />
            {error && <span className="text-red-500 text-xs">{error}</span>}
        </div>
    );
};

export default Inputs;