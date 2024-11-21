import { BoxProps } from "./type";
import { Link } from "react-router-dom";

const BoxProduct = ({id, name, price, image} : BoxProps ) => {

    return (
        <Link key={id} to={`/product-screen/${id}`} className="bg-colorGray flex justify-around flex-col h-96 w-80 gap-4 rounded-lg shadow-xl">
            <div className="h-1/2 p-2">
                <img src={image} className="w-full h-full object-contain"/>
            </div>

            <div className="flex flex-col gap-2 p-6">
                <p className="font-bold">{name}</p>
                <p>R$ {price}</p>
            </div>
        </Link>
    )
};

export default BoxProduct;