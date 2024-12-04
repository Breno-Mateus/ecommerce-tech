import { Link } from "react-router-dom";
import Promo from "../../assets/promo.png";

const CardPromoMobile = () => {
    return (
        <div className="flex flex-col gap-4 md:hidden p-4 bg-colorGray">
            <div className="flex flex-col gap-4">
                <div>
                    <h1 className="text-2xl font-bold">Notebook Dell Inspiron 15</h1>
                </div>
            
                <div>
                    <p className="line-through">R$ 4.275,99</p>
                    <h1 className="text-2xl font-bold">R$ 3.000</h1>
                    <div className="flex gap-2 items-center">
                        <p>ou</p>
                        <h1 className="text-2xl font-bold">12x</h1>
                        <p>R$ 250,00</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center">
                <img src={Promo} className="h-auto"/>
                <Link key={1} to={`/product-screen/${1}`} className="bg-colorPrimary rounded-md text-colorSecondary p-2 hover:bg-opacity-90 w-[50%] text-center">Comprar</Link> 
            </div>
    
        </div>
    )
};

export default CardPromoMobile;