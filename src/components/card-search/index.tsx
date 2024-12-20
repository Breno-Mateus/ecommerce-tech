import { CardSearchProps } from "./type";
import products from "../../data/products";
import { Link } from "react-router-dom";

const CardSearch = ({search} : CardSearchProps) => {
    
    const productsSearch = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
    
    return (
        <div className={`${search.length > 2 && productsSearch.length > 0 ? "absolute" : "hidden"} top-[8rem] md:top-[4rem]`}>
            <div className="bg-colorGray rounded-md w-[98%] md:w-[23.75rem] flex flex-col gap-4 items-center p-2 border-[1px] border-colorTextGray">
                {productsSearch.map((product) => 
                    <Link key={product.id} to={`/product-screen/${product.id}`} className="flex gap-4 items-center">
                        <img src={product.image} className="w-[15%]"/>
                        <p>{product.name}</p>
                    </Link>
                )}
            </div>
        </div>
    )
};

export default CardSearch;