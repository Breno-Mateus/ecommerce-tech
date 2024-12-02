import { CardSearchProps } from "./type";
import products from "../../data/products";

const CardSearch = ({search} : CardSearchProps) => {
    
    const productsSearch = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
    
    return (
        <div className={`${search.length > 2 && productsSearch.length > 0 ? "absolute" : "hidden"} top-[4rem]`}>
            <div className="bg-colorGray rounded-md w-[23.75rem] flex flex-col gap-4 items-center p-2 border-[1px] border-colorTextGray">
                {productsSearch.map((product) => 
                    <div className="flex gap-4 items-center">
                        <img src={product.image} className="w-[15%]"/>
                        <p>{product.name}</p>
                    </div>
                )}
            </div>
        </div>
    )
};

export default CardSearch;