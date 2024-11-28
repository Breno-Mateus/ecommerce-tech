import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import Logo from "../../assets/logo-white.svg";
import { useCart } from "../../store/cart-store";

import { useLogin } from "../../store/login-store";

import { FaPix } from "react-icons/fa6";
import { IoCard } from "react-icons/io5";
import { FaMoneyBill } from "react-icons/fa";
import { useState } from "react";

const Payment = () => {

    const { productsCart, totalCart } = useCart();

    const { currentUser } = useLogin();

    const [ methodPayment, setMethodPayment ] = useState('');
    const [isClicked, setIsClicked] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const HandleMethodPayment = (method: string) => {
        setMethodPayment(method);
        setIsClicked(true);
        setIsButtonDisabled(false);
    };

    const handleTest = () => {
        alert('deu certo');
    };

    return (
        <div>
            <header className="bg-colorPrimary flex items-center justify-center p-2">
                <Link to="/"><img src={Logo} className="h-12"/></Link>
            </header>

            <div className="mx-28 my-12">
                <div className="bg-colorGray flex justify-between p-4 min-h-screen rounded-lg shadow-md">
                    <div className="flex flex-col w-[40%] justify-around">
                        {/*Lista de pedidos*/}
                        <div className="flex flex-col gap-8 h-[40%]">
                            <div className="flex gap-2">
                                <h3 className="font-bold">Seu pedido</h3>
                                <h3 className="text-colorTextGray">{productsCart.reduce((sum, product) => {
                                return sum + product.quantity 
                            }, 0)} item(ns)</h3>
                            </div>

                            <div className="flex flex-col gap-8 overflow-y-scroll h-[55%]">
                                {productsCart.map((product) => (
                                    <div key={product.id} className="flex gap-8">
                                        <div>
                                            <img src={product.image} className="w-44"/>
                                        </div>

                                        <div className="flex flex-col justify-between">
                                            <p>{product.name} - x{product.quantity}</p>
                                            <p>R$ {product.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/*Endereço*/}
                        <div className="flex flex-col gap-8">
                            <h3 className="font-bold">Endereço de entrega</h3>
                            <p>{currentUser?.street} {currentUser?.number}, {currentUser?.neighborhood} - {currentUser?.cep}</p>
                        </div>

                        {/*Pagamento*/}
                        <div className="flex flex-col gap-8">
                            <h3 className="font-bold">Forma de pagamneto</h3>
                            <div className="flex gap-8">
                                <div className="flex flex-col gap-12">
                                    <div className={`${isClicked && methodPayment === 'Pix' ? "text-blue-600" : "text-colorPrimary"} flex gap-4`}>
                                        <FaPix />
                                        <button onClick={() => HandleMethodPayment('Pix')}>Pix</button>
                                    </div>
                                    <div className={`${isClicked && methodPayment === 'Crédito' ? "text-blue-600" : "text-colorPrimary"} flex gap-4`}>
                                        <IoCard />
                                        <button onClick={() => HandleMethodPayment('Crédito')}>Crédito</button>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-12">
                                    <div className={`${isClicked && methodPayment === 'Debito' ? "text-blue-600" : "text-colorPrimary"} flex gap-4`}>
                                        <IoCard />
                                        <button onClick={() => HandleMethodPayment('Debito')}>Debito</button>
                                    </div>

                                    <div className={`${isClicked && methodPayment === 'Dinheiro' ? "text-blue-600" : "text-colorPrimary"} flex gap-4`}>
                                        <FaMoneyBill />
                                        <button onClick={() => HandleMethodPayment('Dinheiro')}>Dinheiro</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-[50%] h-[30%] bg-colorSecondary p-6 flex flex-col gap-4 rounded-md">
                        <div className="flex justify-between">
                            <h1 className="text-xl font-semibold">Total</h1>
                            <h1 className="text-xl font-semibold">R$ {totalCart()}</h1>
                        </div>
                        
                        <div className="flex justify-between">
                            <h1>Desconto</h1>
                            <h1>R$ 0</h1>
                        </div>

                        <div className="flex justify-between">
                            <h1>Itens</h1>
                            <h1>{productsCart.length}</h1>
                        </div>

                        <div className="flex justify-between">
                            <h1>Forma de pagamento</h1>
                            <h1>{methodPayment}</h1>
                        </div>

                        <button onClick={handleTest} disabled={isButtonDisabled} className={`bg-colorPrimary rounded-md text-colorSecondary p-2 ${isButtonDisabled == true ? "bg-opacity-50 hover:cursor-not-allowed" : "bg-opacity-100 hover:cursor-pointer"} w-full flex items-center justify-center gap-6`}>Concluir pedido</button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
};

export default Payment;