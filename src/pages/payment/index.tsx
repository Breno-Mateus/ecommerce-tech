import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import { useCart } from "../../store/cart-store";
import { useLogin } from "../../store/login-store";
import { FaPix } from "react-icons/fa6";
import { IoCard } from "react-icons/io5";
import { FaMoneyBill } from "react-icons/fa";
import { useState } from "react";
import HeaderSecondary from "../../components/header-secondary";

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

    return (
        <div className="flex flex-col min-h-screen justify-between">
            <HeaderSecondary />
            <section className="mx-8 xl:mx-28 my-12">
                <div className="bg-colorGray flex flex-col gap-8 md:flex-row md:justify-between p-4 xl:min-h-screen rounded-lg shadow-md">
                    <div className="flex flex-col md:justify-around gap-8 md:w-[40%]">
                        <div className="flex flex-col gap-8 h-[30%]">
                            <div className="flex gap-2">
                                <h3 className="font-bold">Seu pedido</h3>
                                <h3 className="text-colorTextGray">{productsCart.reduce((sum, product) => {
                                return sum + product.quantity 
                            }, 0)} item(ns)</h3>
                            </div>

                            <div className="flex flex-col overflow-y-scroll h-[55%] md:h-[22rem]">
                                {productsCart.map((product) => (
                                    <div key={product.id} className="flex gap-8">
                                        <div className="w-[40%]">
                                            <img src={product.image} className="md:w-44"/>
                                        </div>

                                        <div className="flex flex-col justify-between w-[60%] md:w-auto">
                                            <p>{product.name} - <span className="text-sm">x</span>{product.quantity}</p>
                                            <p>R$ {product.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-8">
                            <h3 className="font-bold">Endereço de entrega</h3>
                            <p>{currentUser?.street} {currentUser?.number}, {currentUser?.neighborhood} - {currentUser?.cep}</p>
                        </div>

                        <div className="flex flex-col gap-8">
                            <h3 className="font-bold">Forma de pagamneto</h3>
                            <div className="flex gap-8">
                                <div className="flex flex-col gap-12">
                                    <div className={`${isClicked && methodPayment === 'Pix' ? "text-blue-600" : "text-colorPrimary"} flex gap-4 items-center`}>
                                        <FaPix />
                                        <button onClick={() => HandleMethodPayment('Pix')}>Pix</button>
                                    </div>
                                    <div className={`${isClicked && methodPayment === 'Crédito' ? "text-blue-600" : "text-colorPrimary"} flex gap-4 items-center`}>
                                        <IoCard />
                                        <button onClick={() => HandleMethodPayment('Crédito')}>Crédito</button>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-12">
                                    <div className={`${isClicked && methodPayment === 'Debito' ? "text-blue-600" : "text-colorPrimary"} flex gap-4 items-center`}>
                                        <IoCard />
                                        <button onClick={() => HandleMethodPayment('Debito')}>Debito</button>
                                    </div>

                                    <div className={`${isClicked && methodPayment === 'Dinheiro' ? "text-blue-600" : "text-colorPrimary"} flex gap-4 items-center`}>
                                        <FaMoneyBill />
                                        <button onClick={() => HandleMethodPayment('Dinheiro')}>Dinheiro</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-[50%] md:h-[30%] bg-colorSecondary p-6 flex flex-col gap-4 rounded-md">
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

                        <Link to="/finished" className={`bg-colorPrimary rounded-md text-colorSecondary p-2 ${isButtonDisabled == true ? "bg-opacity-50 hover:cursor-not-allowed" : "bg-opacity-100 hover:cursor-pointer"} w-full flex items-center justify-center gap-6`}><button disabled={isButtonDisabled}>Concluir pedido</button></Link>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
};

export default Payment;