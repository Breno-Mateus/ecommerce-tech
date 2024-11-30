import Header from "../../components/header";
import MenuNav from "../../components/menu-nav";
import Footer from "../../components/footer";
import { FaShoppingBasket } from "react-icons/fa";
import { useCart } from "../../store/cart-store";
import { useParams } from "react-router-dom";
import products from "../../data/products";
import { Link } from "react-router-dom";

const ProductScreen = () => {

    const { id } = useParams();
    const idProduct = Number(id);

    const {addProduct} = useCart();

    const selectedProduct = products.find((product) => product.id === idProduct)!;

    return(
        <div>
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
            
                    <Link to="/cart"><button onClick={() => addProduct(selectedProduct)} className="bg-colorPrimary rounded-md text-colorSecondary p-2 hover:bg-opacity-90 w-full flex items-center justify-center gap-6"> <FaShoppingBasket /> Comprar</button></Link>
                </div>
            </section>
            <Footer />
        </div>
    )
};

export default ProductScreen;