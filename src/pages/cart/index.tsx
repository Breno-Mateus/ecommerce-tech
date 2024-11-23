import Footer from "../../components/footer";
import Header from "../../components/header";
import MenuNav from "../../components/menu-nav";
import {useCart} from "../../store/cart-store";
import { FaTrash } from "react-icons/fa";


const Cart = () => {

    const { productsCart, removeProduct, incrementQuantity, decrementQuantity }  = useCart();

    return (
        <div>
            <Header />
            <MenuNav />
            {productsCart.length > 0 ? (
                <div className="flex flex-col gap-8 p-8">
                    <div className="bg-colorGray flex items-center justify-between gap-8 p-2 rounded-md shadow-lg">
                        <div className="w-[40%] text-center">
                            <p>Produto</p>
                        </div>
                        <p>Quantidade</p>
                        <p className="mr-2">Preço</p>
                    </div>
                    {productsCart.map((listaprodutos) => (
                        <div className="bg-colorGray flex items-center justify-between gap-8 p-8 rounded-md shadow-lg">
                            <img src={listaprodutos.image} className="h-24"/>
                            <p>{listaprodutos.name}</p>
                            <div className="flex gap-2 text-colorSecondary">
                                <div className="flex gap-2 p-2 bg-colorPrimary rounded-md">
                                    <button onClick={() => decrementQuantity(listaprodutos.id)}>-</button>
                                    <p>{listaprodutos.quantity}</p>
                                    <button onClick={() => incrementQuantity(listaprodutos.id)} >+</button>    
                                </div>

                                <div className="bg-colorPrimary p-2 rounded-md flex items-center justify-center text-colorSecondary">
                                    <button onClick={() => removeProduct(listaprodutos.id)}><FaTrash /></button>
                                </div>
                            </div>

                            <div >
                                <p>R$ 2.000</p>
                            </div>
                        </div>
                    ))}

                    <div className="bg-colorGray flex flex-col gap-4 rounded-md shadow-lg p-8">
                        <h3 className="font-bold">Resumo do pedido:</h3>
                        
                        <div className="flex flex-col border-b border-colorPrimary">
                            <div className="flex justify-between">
                                <p>2 produtos</p>
                                <p>R$ 2.000</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-green-700">frete</p>
                                <p className="text-green-700">grátis</p>
                            </div>
                        </div>

                        <div className="flex justify-between border-b border-colorPrimary">
                            <p className="font-bold">Total</p>
                            <p className="font-bold">R$ 2.000</p>
                        </div>

                        <button className="bg-colorPrimary rounded-md text-colorSecondary p-2 hover:bg-opacity-90 w-[20%] flex items-center justify-center gap-6">Continuar</button>
                    </div>
                </div>
            ) : (
            
                <div className="h-screen p-4 flex items-center justify-center">
                    <div className="bg-colorGray flex items-center justify-between gap-8 p-8 rounded-md shadow-lg w-screen">
                        <p>Adicione um produto na sua cesta</p>
                    </div>
                </div>
                
                )}
            
            
            <Footer />
        </div>
    )
}

export default Cart;