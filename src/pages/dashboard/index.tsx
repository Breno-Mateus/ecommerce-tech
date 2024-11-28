import Header from "../../components/header";
import MenuNav from "../../components/menu-nav";
import Footer from "../../components/footer";
import { useLogin } from "../../store/login-store";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";


const Dashboard = () => {

    const { currentUser, logoutUser } = useLogin();

    return (
        <>
            <Header />
            <MenuNav />
            
            <div className="p-12 flex items-center justify-center">
                <div className="bg-colorGray w-[40%] p-8 flex flex-col items-center justify-center gap-12 rounded-xl shadow-lg">

                    <FaUserCircle className="text-[10rem]"/>


                    <div className="flex flex-col gap-8">
                        <div>
                            <p className="font-semibold">Nome completo:</p>
                            <p>{currentUser?.name}</p>
                        </div>
                        
                        <div>
                            <p className="font-semibold">Email cadastrado:</p>
                            <p>{currentUser?.email}</p>
                        </div>
                        
                        <div>
                            <p className="font-semibold">Telefone:</p>
                            <p>{currentUser?.phone}</p>
                        </div>
                        
                        <div>
                            <p className="font-semibold">Endereço de entrega:</p>
                            <p>{currentUser?.street} {currentUser?.number}, {currentUser?.neighborhood} - {currentUser?.cep}</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <Link to="/login" className="underline" onClick={() => logoutUser()}>Trocar de usuário</Link>
                        <Link to="/" className="text-red-700 underline" onClick={() => logoutUser()}>Sair</Link>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
};

export default Dashboard;