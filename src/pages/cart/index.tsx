import Footer from "../../components/footer"
import Header from "../../components/header"
import MenuNav from "../../components/menu-nav"
import {useCart} from "../../store/cart-store"
import { FaTrash } from "react-icons/fa";


const Cart = () => {

    const { products, removeProduct, incrementQuantity }  = useCart()

    return (
        <div>
            <Header />
            <MenuNav />
            {products.length > 0 ? (
                <div>
                    {products.map((listaprodutos) => (
                        <div className="h-screen p-8">
                            <div className="flex flex-col gap-8">
                                <div className="bg-colorGray flex items-center justify-center gap-8 p-8 rounded-md shadow-lg">
                                    <img src={listaprodutos.image} className="h-24"/>
                                    <p>{listaprodutos.name}</p>
                                    <div className="flex gap-2 bg-colorPrimary text-colorSecondary p-2 rounded-md">
                                        <button>-</button>
                                        <p>{listaprodutos.quantity}</p>
                                        <button onClick={() => incrementQuantity(listaprodutos.id)} >+</button>
                                    </div>
                                    <button onClick={() => removeProduct(listaprodutos.id)}><FaTrash /></button>
                                </div>
        
                                <div className="bg-colorGray flex flex-col rounded-md shadow-lg p-8">
                                    <h3>Resumo do pedido</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (<p>Não tem nada!</p>)}
            
            
            <Footer />
        </div>
    )
}

export default Cart