import Header from "../../components/header";
import MenuNav from "../../components/menu-nav";
import Footer from "../../components/footer";
import { FaShoppingBasket } from "react-icons/fa";
import { useCart } from "../../store/cart-store";
import { useParams } from "react-router-dom";
import products from "../../data/products";
import { useState } from "react";
import CardConfirmation from "../../components/card-confirmation";

const ProductScreen = () => {

    const { id } = useParams();
    const idProduct = Number(id);

    const [ message, setMessage ] = useState(false);

    const {addProduct} = useCart();

    const selectedProduct = products.find((product) => product.id === idProduct)!;

    const handleAddProduct = () => {
        addProduct(selectedProduct);
        setMessage(true);
        setTimeout(() => {
            setMessage(false);
        }, 3000);
    };

    return(
        <div>
            {message && <CardConfirmation name={selectedProduct.name}/>}
            <Header />
            <MenuNav />
            <section className="h-screen flex gap-8 mx-28 my-12">
                <div className="bg-colorGray flex flex-col p-10 items-center justify-center rounded-lg w-[70%] shadow-xl">
                    <img src={selectedProduct?.image} className="w-[70%] h-[70%] object-contain"/>
                </div>

                <div className="bg-colorGray rounded-lg p-10 flex flex-col justify-around gap-2 w-[30%] shadow-xl">
                    <div>
                        <p>{selectedProduct?.name}</p>
                    </div>

                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vero quas aliquid recusandae? Possimus, consequuntur? Neque iusto inventore labore officiis. Aperiam nisi eos repellendus? Doloribus esse nostrum facilis maxime iste.</p>
                    </div>

                    <div>
                        <div className="flex gap-2 items-center">
                            <p>por</p>
                            <h1 className="text-2xl font-bold">R$ {selectedProduct?.price}</h1>
                            <p>no pix</p>
                        </div>
                    </div>
            
                    <button onClick={handleAddProduct} className="bg-colorPrimary rounded-md text-colorSecondary p-2 hover:bg-opacity-90 w-full flex items-center justify-center gap-6"> <FaShoppingBasket /> Comprar</button>
                </div>
            </section>
            <Footer />
        </div>
    )
};

export default ProductScreen;