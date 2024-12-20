import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer";
import { useForm } from "react-hook-form";
import Inputs from "../../components/inputs";
import { yupResolver } from "@hookform/resolvers/yup";
import { userValidationRegister, UserRegister } from "../../schema/userValidationRegister";
import { useLogin, userProps } from "../../store/login-store";
import HeaderSecondary from "../../components/header-secondary";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {

    const { addUser } = useLogin();

    const navigate = useNavigate();

    const {register, handleSubmit, formState: {errors}} = useForm<UserRegister>({
        resolver: yupResolver(userValidationRegister)
    });

    const onSubmit = (data: UserRegister) => {
        const userData: userProps = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            cep: data.cep,
            neighborhood: data.neighborhood,
            street: data.street,
            number: data.number,
            complement: data.complement,
            password: data.password,
        };

        addUser(userData);

        toast.success(`Usuário cadastrado com sucesso!`, {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            onClose: () => navigate("/login"),
        });
    };


    return (
        <div className="flex flex-col min-h-screen justify-between">
            <HeaderSecondary />
            <section className="flex justify-center items-center my-12">
                <form className="bg-colorGray p-4 flex flex-col justify-center rounded-lg shadow-lg gap-8 w-[90%] xl:w-[50%]" onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="font-extrabold text-xl">Cadastro de Usuário</h2>

                    <div className="flex flex-col gap-4">
                        <Inputs label="Primeiro Nome*" placeholder="Breno" type="text" htmlForId="name" register={register} error={errors.name?.message}/>

                        <Inputs label="Email*" placeholder="teste@gmail.com" type="email" htmlForId="email" register={register} error={errors.email?.message}/>

                        <Inputs label="Telefone*" placeholder="8490000-0000" type="tel" htmlForId="phone" register={register} error={errors.phone?.message}/>

                        <div className="flex flex-col md:flex-row justify-between gap-4">
                            <Inputs label="CEP*" placeholder="00000-000" type="text" htmlForId="cep" register={register} error={errors.cep?.message}/>
                            <Inputs label="Bairro*" placeholder="Bairro" type="text" htmlForId="neighborhood" register={register} error={errors.neighborhood?.message}/>
                        </div>

                        <div className="flex flex-col md:flex-row justify-between gap-4">
                            <Inputs label="Rua*" placeholder="Rua 02" type="text" htmlForId="street" register={register} error={errors.street?.message}/>
                            <Inputs label="Número*" placeholder="000" type="text" htmlForId="number" register={register} error={errors.number?.message}/>
                        </div>

                        <Inputs label="Complemento" placeholder="apt. 01" type="text" htmlForId="complement" register={register} error={errors.complement?.message}/>

                        <Inputs label="Senha*" placeholder="Crie sua senha" type="password" htmlForId="password" register={register} error={errors.password?.message}/>

                        <Inputs label="Comfirme sua senha*" placeholder="Comfirme sua senha" type="password" htmlForId="confirmPassword" register={register} error={errors.confirmPassword?.message}/>
                    </div>

                    <button type="submit" className="bg-colorPrimary rounded-md text-colorSecondary p-2 hover:bg-opacity-90">Cadastrar</button>
                </form>
            </section>
            <ToastContainer/>
            <Footer />
        </div>
    )
};

export default Register;