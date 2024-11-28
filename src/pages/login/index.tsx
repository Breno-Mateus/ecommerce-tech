import { Link, useNavigate } from "react-router-dom"
import Logo from "../../assets/logo-white.svg"
import Footer from "../../components/footer"
import { useForm } from "react-hook-form"
import { useLogin } from "../../store/login-store";
import { yupResolver } from "@hookform/resolvers/yup";
import Inputs from "../../components/inputs";
import { UserRegisterLogin, userValidationLogin } from "../../schema/userValidationLogin";


const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<UserRegisterLogin>({
        resolver: yupResolver(userValidationLogin)
    });
    
    const { checkUser, loginUser } = useLogin();

    const navigate = useNavigate();


    const onSubmit = (data: UserRegisterLogin) => {
        const isValidUser = checkUser(data.email, data.password);
        
        if (isValidUser) {
            loginUser(data.email, data.password); 
            alert("Login bem-sucedido!");
            navigate("/dashboard");
        } else {
            alert("Email ou senha incorretos!");
        }
    };

    return (
        <div>
            <header className="bg-colorPrimary flex items-center justify-center p-2">
                <Link to="/"><img src={Logo} className="h-12"/></Link>
            </header>
        
            <div className="flex justify-center items-center h-screen">
                <form className="bg-colorGray p-4 flex flex-col justify-center rounded-lg shadow-lg gap-8 w-1/3" onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="font-extrabold text-xl">Login</h2>
                    
                    <p className="text-sm">Digite seus dados de acesso no campo abaixo.</p>
                    
                    <div className="flex flex-col gap-6">
                        <Inputs label="Email" placeholder="Digite seu email" type="email" htmlForId="email" register={register} error={errors.email?.message}/>

                        <Inputs label="Senha" placeholder="Crie sua senha" type="password" htmlForId="password" register={register} error={errors.password?.message}/>
                    </div>

                    <button type="submit" className="bg-colorPrimary rounded-md text-colorSecondary p-2 hover:bg-opacity-90">Entrar</button>

                    <Link to="/register" className="text-sm text-center cursor-pointer">Criar conta</Link>
                </form>
            </div>

            <Footer />
        </div>
    )
}

export default Login;