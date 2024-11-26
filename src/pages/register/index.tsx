import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import Logo from "../../assets/logo-white.svg";
import { FieldValues, useForm } from "react-hook-form";
import Inputs from "../../components/inputs";
import { yupResolver } from "@hookform/resolvers/yup";
import { userValidationRegister } from "../../schema/userValidationRegister";

const Register = () => {

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(userValidationRegister)
    });

    const onSubmit = (data: FieldValues) => {
        console.log(data)
    };

    return (
        <div>
            <header className="bg-colorPrimary flex items-center justify-center p-2">
                <Link to="/"><img src={Logo} className="h-12"/></Link>
            </header>

            <div className="flex justify-center items-center p-8">
                <form className="bg-colorGray p-4 flex flex-col justify-center rounded-lg shadow-lg gap-8 w-[50%]" onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="font-extrabold text-xl">Cadastro de Usuário</h2>

                    <div className="flex flex-col gap-4">
                        <Inputs label="Nome Completo*" placeholder="Breno Mateus dos Santos" type="text" htmlForId="fullname" register={register} error={errors.fullname?.message}/>

                        <Inputs label="Email*" placeholder="brenomateus36@gmail.com" type="email" htmlForId="email" register={register} error={errors.email?.message}/>

                        <Inputs label="Telefone*" placeholder="8498602-8083" type="tel" htmlForId="phone" register={register} error={errors.phone?.message}/>

                        <div className="flex justify-between gap-4">
                            <Inputs label="CEP*" placeholder="00000-000" type="text" htmlForId="cep" register={register} error={errors.cep?.message}/>
                            <Inputs label="Bairro*" placeholder="Bairro" type="text" htmlForId="neighborhood" register={register} error={errors.neighborhood?.message}/>
                        </div>

                        <div className="flex justify-between gap-4">
                            <Inputs label="Rua*" placeholder="Rua 02" type="text" htmlForId="street" register={register} error={errors.street?.message}/>
                            <Inputs label="Número*" placeholder="000" type="text" htmlForId="number" register={register} error={errors.number?.message}/>
                        </div>

                        <Inputs label="Complemento" placeholder="apt. 01" type="text" htmlForId="complement" register={register} error={errors.complement?.message}/>

                        <Inputs label="Senha*" placeholder="Crie sua senha" type="password" htmlForId="password" register={register} error={errors.password?.message}/>

                        <Inputs label="Comfirme sua senha*" placeholder="Comfirme sua senha" type="password" htmlForId="confirmPassword" register={register} error={errors.confirmPassword?.message}/>
                    </div>

                    <button type="submit" className="bg-colorPrimary rounded-md text-colorSecondary p-2 hover:bg-opacity-90">Cadastrar</button>
                </form>
            </div>
            
            <Footer />
        </div>
    )
};

export default Register;