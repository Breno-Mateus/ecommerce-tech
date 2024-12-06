import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/footer";
import { useForm } from "react-hook-form";
import { useLogin } from "../../store/login-store";
import { yupResolver } from "@hookform/resolvers/yup";
import Inputs from "../../components/inputs";
import { UserRegisterLogin, userValidationLogin } from "../../schema/userValidationLogin";
import { useCart } from "../../store/cart-store";
import HeaderSecondary from "../../components/header-secondary";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<UserRegisterLogin>({
        resolver: yupResolver(userValidationLogin)
    });
    
    const { checkUser, loginUser } = useLogin();

    const { productsCart } = useCart();

    const navigate = useNavigate();


    const onSubmit = (data: UserRegisterLogin) => {
        const isValidUser = checkUser(data.email, data.password);
        
        if (isValidUser) {
            loginUser(data.email, data.password);
            toast.success(`Login bem-sucedido`, {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                onClose: () => navigate(`${productsCart.length > 0 ? "/payment" : "/dashboard"}`),
            });
        } else {
            toast.error('Email ou senha incorretos!', {
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
        }
    };

    return (
        <div className="flex flex-col min-h-screen justify-between">
            <HeaderSecondary />
            <section className="flex justify-center md:py-20">
                <form className="bg-colorGray p-4 flex flex-col justify-center rounded-lg shadow-lg gap-8 xl:w-1/3" onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="font-extrabold text-xl">Login</h2>
                    
                    <p className="text-sm">Digite seus dados de acesso no campo abaixo.</p>
                    
                    <div className="flex flex-col gap-6">
                        <Inputs label="Email" placeholder="Digite seu email" type="email" htmlForId="email" register={register} error={errors.email?.message}/>

                        <Inputs label="Senha" placeholder="Crie sua senha" type="password" htmlForId="password" register={register} error={errors.password?.message}/>
                    </div>

                    <button type="submit" className="bg-colorPrimary rounded-md text-colorSecondary p-2 hover:bg-opacity-90">Entrar</button>

                    <Link to="/register" className="text-sm text-center cursor-pointer">Criar conta</Link>
                </form>
            </section>
            <ToastContainer/>
            <Footer />
        </div>
    )
}

export default Login;