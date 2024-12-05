import Header from "../../components/header";
import MenuNav from "../../components/menu-nav";
import Footer from "../../components/footer";
import { FaShoppingBasket } from "react-icons/fa";
import { useCart } from "../../store/cart-store";
import { useParams } from "react-router-dom";
import products from "../../data/products";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HeaderMobile from "../../components/header-mobile";

const ProductScreen = () => {

    const { id } = useParams();

    const idProduct = Number(id);

    const {addProduct} = useCart();

    const selectedProduct = products.find((product) => product.id === idProduct)!;

    const handleAddProduct = () => {
        addProduct(selectedProduct);
        toast.success(`1 "${selectedProduct.name}" foi adicionado(a) ao carrinho!`, {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    };

    return(
        <div className="flex flex-col min-h-screen justify-between">
            <Header />
            <HeaderMobile />
            <MenuNav />
            <section className="flex flex-col md:flex-row gap-16 md:gap-8 mx-12 md:mx-28 my-12">
                <div className="bg-colorGray flex flex-col p-4 md:p-10 items-center justify-center rounded-lg md:w-[70%] shadow-xl">
                    <img src={selectedProduct?.image} className="w-[20rem] md:w-[70%] h-[15rem] md:h-[70%] object-contain"/>
                </div>

                <div className="bg-colorGray rounded-lg px-4 py-8 md:p-10 flex flex-col justify-around gap-12 md:w-[30%] shadow-xl">
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
            <ToastContainer/>
        </div>
    )
};

export default ProductScreen;