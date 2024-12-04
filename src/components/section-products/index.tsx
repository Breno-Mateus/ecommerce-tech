import products from "../../data/products";
import BoxProduct from "../box-product";
import { sectionProductsProps } from "./type";

const SectionProducts = ({filterProducts, category} : sectionProductsProps) => {

    const filteredProducts = products.filter(product => product.category === category);

    return (
        <section className="mx-12 md:mx-28 my-12">
            <div className="flex gap-10 flex-wrap justify-center">
                {filterProducts === true ? (
                    <>
                        {filteredProducts.map((product) => (
                            <BoxProduct key={product.id} id={product.id} name={product.name} price={product.price} image={product.image}/>
                        ))}
                    </>
                ) : (
                    <>
                        {products.map((product) => (
                            <BoxProduct key={product.id} id={product.id} name={product.name} price={product.price} image={product.image}/>
                        ))}
                    </>
                )}
            </div>
        </section>
    )
};

export default SectionProducts;