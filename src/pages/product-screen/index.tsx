import Header from "../../components/header"
import MenuNav from "../../components/menu-nav"
import Footer from "../../components/footer"
import { FaShoppingBasket } from "react-icons/fa"
import Notebook from "../../assets/product1.png"
import { useCart } from "../../store/cart-store"
import { Product } from "../../data/products"
import Smartphones from "../../assets/iphone.png"


const ProductScreen = () => {

    const {adicionarNoCarrinho} = useCart()

    const produtoteste : Product = {
        id: 1,
        name: "Notebook Dell Inspiron 15",
        price: 3500,
        category: "notebooks",
        image: `${Smartphones}`, // Imagem de notebook
    }

    return(
        <div>
            <Header />
            <MenuNav />
            <div className="h-screen flex gap-8 p-8">
                <div className="bg-colorGray flex flex-col p-10 items-center justify-center rounded-lg w-[70%] shadow-xl">
                    <img src={Notebook} className="w-[70%] h-[70%] object-contain"/>
                </div>

                <div className="bg-colorGray rounded-lg p-10 flex flex-col justify-around gap-2 w-[30%] shadow-xl">
                    <div>
                        <p>Notebook Dell Inspiron 15</p>
                    </div>

                    <div>
                        <p className="line-through">R$ 4.275,99</p>
                        <p>R$ 3.000 em 12x de R$ 250</p>
                        <div className="flex gap-2 items-center">
                            <p>ou</p>
                            <h1 className="text-2xl font-bold">R$ 3500</h1>
                            <p>no pix</p>
                        </div>
                    </div>
            
                    <button onClick={() => (adicionarNoCarrinho(produtoteste))} className="bg-colorPrimary rounded-md text-colorSecondary p-2 hover:bg-opacity-90 w-full flex items-center justify-center gap-6"> <FaShoppingBasket /> Comprar</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProductScreen