import { useState } from "react";
import products from "../../data/products";
import BoxProduct from "../box-product";
import { sectionProductsProps } from "./type";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

const SectionProducts = ({filterProducts, category} : sectionProductsProps) => {

    const [page, setPage] = useState(1);

    const filteredProducts = products.filter(product => product.category === category);

    const subarrays = [];

    if(filterProducts === true){
        for (let i = 0; i < filteredProducts.length; i += 9) {
            subarrays.push(filteredProducts.slice(i, i + 9));
        };
    } else {
        for (let i = 0; i < products.length; i += 9) {
            subarrays.push(products.slice(i, i + 9));
        };
    };

    return (
        <section className="mx-12 md:mx-28 my-12 flex flex-col gap-16">

            <div className="flex justify-between items-center border-b-[1px] border-colorGray pb-4 text-xs md:text-base">
                <p>Página {page} de {subarrays.length}</p>
                {filterProducts === true ? (
                    <p>{filteredProducts.length} resultados</p>
                ) : (
                    <p>{products.length} resultados</p>
                )}
                <div className="flex gap-2 md:gap-4">
                    <button disabled={page === 1} onClick={() => setPage(page - 1)}><IoMdArrowDropleft  className={`text-xl ${page === 1 ? "text-colorGray hover:cursor-not-allowed" : "hover:cursor-pointer"}`}/></button>
                    <div className="border-[1px] border-colorTextGray px-2 py-1">
                        <p>{page}</p>
                    </div>
                    <button disabled={subarrays.length === page} onClick={() => setPage(page + 1)}><IoMdArrowDropright className={`text-xl ${subarrays.length === page ? " text-colorGray hover:cursor-not-allowed" : "hover:cursor-pointer"}`}/></button>
                </div>
            </div>

            <div className="flex gap-10 flex-wrap justify-center">
                {subarrays[page - 1].map((product) => (
                    <BoxProduct key={product.id} id={product.id} name={product.name} price={product.price} image={product.image}/>
                ))}
            </div>

            <div className="flex justify-between items-center border-t-[1px] border-colorGray pt-4 text-xs md:text-base">
                <p>Página {page} de {subarrays.length}</p>
                {filterProducts === true ? (
                    <p>{filteredProducts.length} resultados</p>
                ) : (
                    <p>{products.length} resultados</p>
                )}
                <div className="flex gap-2 md:gap-4">
                    <button disabled={page === 1} onClick={() => setPage(page - 1)}><IoMdArrowDropleft  className={`text-xl ${page === 1 ? " text-colorGray hover:cursor-not-allowed" : "hover:cursor-pointer"}`}/></button>
                    <div className="border-[1px] border-colorTextGray px-2 py-1">
                        <p>{page}</p>
                    </div>
                    <button disabled={subarrays.length === page} onClick={() => setPage(page + 1)}><IoMdArrowDropright className={`text-xl ${subarrays.length === page ? " text-colorGray hover:cursor-not-allowed" : "hover:cursor-pointer"}`}/></button>
                </div>
            </div>
        </section>
    )
};

export default SectionProducts;