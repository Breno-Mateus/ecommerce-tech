import { Rotate as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo.png";
import { FaMicrophone, FaSearch, FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { useCart } from '../../store/cart-store';
import CartCountIcon from '../cart-count-icon';
import CardSearch from '../card-search';

const HeaderMobile = () => {

    const [isOpen, setOpen] = useState<boolean>(false);
    const [ search, setSearch ] = useState('');
    const { productsCart } = useCart();

    return (
        <header className="md:hidden flex flex-col gap-4">
            <div className='flex items-center justify-between pt-2 pb-4 px-2'>
                <Hamburger toggled={isOpen} toggle={setOpen} size={30}/>
                <Link to="/"><img src={Logo} className='h-12' /></Link>
                {productsCart.length > 0 ? (
                    <div className="flex">
                        <Link to="/cart"><FaShoppingCart className="text-[2rem]"/></Link>
                        <CartCountIcon />
                    </div>
                ) : (
                    <Link to="/cart"><FaShoppingCart className='text-[2rem]'/></Link>
                )}
            </div>
            
            <div className="flex flex-col pb-4 px-2">
                <div className="bg-colorGray flex items-center justify-between p-2 rounded-md gap-2">
                    <FaMicrophone className='text-[1rem]'/>
                    <input type="text" value={search} placeholder="pesquisar" className="bg-transparent focus:outline-none w-[80%]" onChange={(e) => setSearch(e.target.value)}/>
                    <FaSearch className='text-[1rem]'/>
                </div>
                <CardSearch search={search}/>
            </div>

            {isOpen && (
                <div className="fixed bg-colorSecondary h-[100%] w-screen inset-0">
                    <div className="flex flex-col gap-4 p-4 bg-colorGray">
                        <div className="flex justify-end">
                            <Hamburger toggled={isOpen} toggle={setOpen} size={20}/>
                        </div>
        
                        <div className="flex gap-4 items-center">
                            <FaUserCircle className="text-[4rem]"/>
                            <div className="flex flex-col">
                                <p className="font-medium">entre ou cadastre-se</p>
                                <p>tenha tuuudo em um só lugar :)</p>
                            </div>
                        </div>
        
                        <div className="flex gap-2">
                            <button className="bg-colorPrimary text-colorSecondary p-2 rounded-md w-[50%]">entrar</button>
                            <button className="text-colorPrimary p-2 rounded-md w-[50%] border-[1px] border-colorPrimary">cadastrar</button>
                        </div>
                    </div>
        
                    <div className="flex flex-col gap-4 p-4">
                        <div className="border-b-[1px] border-colorTextGray pb-2">
                            <h2 className="font-medium text-xl">Categorias</h2>
                        </div>
                    
                        <div className="flex flex-col gap-2 text-lg">
                            <Link to="/notebooks">Notebooks</Link>
                            <Link to="/perifericos-game">Periféricos de games</Link>
                            <Link to="/smartphones-tablets">Celulares e Tablets</Link>
                            <Link to="/smart-home">Smart Home</Link>
                            <Link to="/equipamento-audio">Equipamentos de áudio</Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
};

export default HeaderMobile;