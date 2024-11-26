import { Link } from "react-router-dom"
import Logo from "../../assets/logo-white.svg"
import Footer from "../../components/footer"
import { FieldValues, useForm } from "react-hook-form"


const Login = () => {

    const {register, handleSubmit, formState: {errors}} = useForm()

    const onSubmit = (data: FieldValues) => {
        console.log(data)
    }

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
                        <div className="flex flex-col">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="email" className="bg-colorSecondary rounded-md p-2" placeholder="Digite seu e-mail" {...register("email", { 
                            required: "O email é obrigatório", 
                            pattern: { value: /^\S+@\S+$/i, message: "Email inválido" } 
                            })}/>
                            {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email.message?.toString()}</p>}
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="senha">Senha</label>
                            <input type="password" id="senha" className="bg-colorSecondary rounded-md p-2" placeholder="Digite sua senha" {...register("senha", {required: "A senha é obrigatório"})}/>
                            {errors.senha && <p className="text-red-600 text-xs mt-1">{errors.senha.message?.toString()}</p>}
                            <a className="text-xs mt-2 underline cursor-pointer">Equeci a senha</a>
                        </div>
                    </div>

                    <button type="submit" className="bg-colorPrimary rounded-md text-colorSecondary p-2 hover:bg-opacity-90">Entrar</button>

                    <Link to="/register" className="text-sm text-center cursor-pointer">Criar conta</Link>
                </form>
            </div>

            <Footer />
        </div>
    )
}

export default Login