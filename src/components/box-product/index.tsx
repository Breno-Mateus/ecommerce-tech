import { BoxProps } from "./type";
import { Link } from "react-router-dom";

const BoxProduct = ({id, name, price, image} : BoxProps ) => {

    return (
        <div className="bg-colorGray flex justify-around flex-col h-96 w-72 gap-4 rounded-lg shadow-xl">
            <div className="h-1/2 p-2">
                <img src={image} className="w-full h-full object-contain"/>
            </div>

            <div className="flex flex-col gap-6 p-6">
                <p className="font-bold">{name}</p>
                <div className="flex items-center justify-between">
                    <p>R$ {price}</p>
                    <Link key={id} to={`/product-screen/${id}`} className="bg-colorPrimary text-colorSecondary p-2 rounded-md">Comprar</Link>
                </div>
            </div>
        </div>
    )
};

export default BoxProduct;