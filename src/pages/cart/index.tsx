import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";
import MenuNav from "../../components/menu-nav";
import {useCart} from "../../store/cart-store";
import { FaTrash } from "react-icons/fa";
import { useLogin } from "../../store/login-store";

const Cart = () => {

    const { productsCart, removeProduct, incrementQuantity, decrementQuantity, totalProduct, totalCart, restartCart }  = useCart();

    const { currentUser } = useLogin();

    const handleDisabled = (quantity : number) => {
        return quantity === 1;
    }

    return (
        <div>
            <Header />
            <MenuNav />
            {productsCart.length > 0 ? (
                <section className="flex flex-col gap-8 mx-28 my-12 min-h-screen justify-center">
                    <div className="bg-colorGray flex flex-col gap-8 rounded-md shadow-md p-4">
                        <div className="flex justify-between">
                            <h1 className="font-semibold w-[50%]">Seu carrinho ({productsCart.length})</h1>
                            <h1 className="font-semibold flex justify-center w-[25%]">Quantidade</h1>
                            <h1 className="font-semibold flex justify-end w-[25%]">Preço</h1>
                        </div>

                        {productsCart.map((product) => (
                        <div key={product.id} className={`flex items-center justify-between pb-4 ${productsCart.length > 1 ? "border-b-[1px] border-colorTextGray" : "border-none"}`}>
                            <div className="flex gap-4 w-[50%]">
                                <img src={product.image} className="w-24"/>
                                
                                <div className="flex flex-col gap-2">
                                    <p className="font-semibold text-sm">{product.name}</p>
                                    <p className="text-sm">Unid. R$ {product.price}</p>
                                    <button className="font-semibold text-sm text-red-600 flex gap-2 items-center" onClick={() => removeProduct(product.id)}>Remover <FaTrash /></button>
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-2 w-[25%]">
                                <button onClick={() => decrementQuantity(product.id)} disabled={handleDisabled(product.quantity)} className={`${handleDisabled(product.quantity) === true ? "hover:cursor-not-allowed" : "hover:cursor-pointer"}`}>-</button>
                                <div className="bg-colorSecondary rounded-md p-2 border-[1px] border-colorTextGray">
                                    <p>{product.quantity}</p>
                                </div>
                                <button onClick={() => incrementQuantity(product.id)}>+</button>
                            </div>
                            <div className="w-[25%] flex justify-end">
                                <p>R$ {totalProduct(product.id)}</p>
                            </div>
                        </div>
                        ))}
                        
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <h2 className="font-medium text-xl">Total</h2>
                                    <h1 className="font-bold text-2xl">R$ {totalCart()}</h1>
                                </div>
                                <button className="flex gap-2 items-center text-red-600" onClick={() => restartCart()}>Esvaziar carrinho <FaTrash /></button>
                            </div>
                            <Link to={`${currentUser ? "/payment" : "/login"}`} className="bg-colorPrimary rounded-md text-colorSecondary p-4 h-[50%]">Continuar</Link>
                        </div>
                    </div>
                </section>
            ) : (
                <section className="flex flex-col gap-8 mx-28 my-12 min-h-screen justify-center">
                    <div className="bg-colorGray flex flex-col gap-8 rounded-md shadow-md p-4">
                        <div className="flex justify-between">
                            <h1 className="font-semibold w-[50%]">Seu carrinho ({productsCart.length})</h1>
                            <h1 className="font-semibold flex justify-center w-[25%]">Quantidade</h1>
                            <h1 className="font-semibold flex justify-end w-[25%]">Preço</h1>
                        </div>

                        <div className="flex items-center justify-center p-12">
                            <h1>Ainda não há itens no carrinho!</h1>
                        </div>
                        
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <h2 className="font-medium text-xl">Total</h2>
                                    <h1 className="font-bold text-2xl">R$ {totalCart()}</h1>
                                </div>
                            </div>
                            <button className="bg-colorPrimary rounded-md text-colorSecondary p-4 h-[50%] bg-opacity-50 hover:cursor-not-allowed" disabled={true}>Continuar</button>
                        </div>
                    </div>
                </section>
                )
            }
            <Footer />
        </div>
    )
};

export default Cart;