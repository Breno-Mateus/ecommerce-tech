import Footer from "../../components/footer";
import { Link } from "react-router-dom";
import { MdOutlineTaskAlt } from "react-icons/md";
import { useCart } from "../../store/cart-store";
import HeaderSecondary from "../../components/header-secondary";

const Finished = () => {

    const { restartCart } = useCart();

    return (
        <div>
            <HeaderSecondary />

            <div className="h-screen flex items-center justify-center">
                <div className="bg-colorGray w-[30%] h-[40%] flex flex-col items-center justify-center p-4 gap-8 rounded-md shadow-md">
                    <MdOutlineTaskAlt className="text-[4rem] text-green-600"/>
                    <p>O pedido foi finalizado com sucesso!</p>
                    <Link to="/" className="bg-colorPrimary rounded-md text-colorSecondary p-2 hover:bg-opacity-90 w-full flex items-center justify-center gap-6" onClick={() => restartCart()}><button>Confirmar</button></Link>
                </div>
            </div>

            <Footer />
        </div>
    )
};

export default Finished;