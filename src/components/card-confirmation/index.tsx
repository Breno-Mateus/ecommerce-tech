import { MdOutlineTaskAlt } from "react-icons/md";
import { cardConfirmationProps } from "./type";

const CardConfirmation = ({name} : cardConfirmationProps) => {
    return (
        <div className="bg-colorSecondary flex items-center fixed z-10 ml-28 mt-4 p-4 w-[20rem] rounded-md">
            <div>
                <p className="font-medium text-sm">1 "{name}" foi adicionado(a) ao carrinho!</p>
            </div>
            
            <MdOutlineTaskAlt className="text-[2.5rem] text-green-600"/>
        </div>
    )
};

export default CardConfirmation;