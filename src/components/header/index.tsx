import Logo from "../../assets/logo.png";
import { FaMicrophone } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdHeadsetMic } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import CartCountIcon from "../cart-count-icon";
import { useCart } from "../../store/cart-store";
import { useLogin } from "../../store/login-store";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import CardSearch from "../../components/card-search";

const Header = () => {

    const { productsCart } = useCart();
    const { currentUser } = useLogin();
    const [ userPanel, setUserPanel ] = useState(false);
    const [ search, setSearch ] = useState('');
    const { id } = useParams();

    const handlePanel = () => {
        if(userPanel === false){
            setUserPanel(true);
        } else {
            setUserPanel(false);
        }
    };

    useEffect(() => {
        setSearch('');
    }, [id]);

    return (
        <header className="flex items-center justify-around p-2 h-16">
            <Link to="/"><img src={Logo} className="h-12"/></Link>
            
            <div className="flex flex-col">
                <div className="bg-colorGray flex items-center p-2 rounded-md gap-2">
                    <FaMicrophone />
                    <input type="text" value={search} placeholder="pesquisar" className="bg-transparent focus:outline-none" onChange={(e) => setSearch(e.target.value)}/>
                    <FaSearch />
                </div>
                <CardSearch search={search}/>
            </div>

            <div className="flex items-center gap-4">
                <FaRegHeart className="text-2xl"/>
                <MdHeadsetMic className="text-2xl"/>

                {currentUser !== null ? (
                    <div className="flex items-end">
                        {userPanel === true ? (
                            <div className="flex flex-col items-center justify-center">
                                <div className="flex">
                                    <BsPersonFill className="text-2xl"/>
                                    <button onClick={handlePanel}><IoIosArrowUp /></button>
                                </div>
                            </div>
                        ): (
                            <>
                                <BsPersonFill className="text-2xl"/>
                                <button onClick={handlePanel}><IoIosArrowDown /></button>
                            </>
                        )}
                        {userPanel === true && (
                            <div className="bg-colorGray h-16 p-2 rounded-md z-10 flex flex-col gap-4 absolute top-[3rem] border-[1px] border-colorTextGray">
                                <p className="text-xs">Olá, <span className="font-semibold">{currentUser.name}</span>!</p>
                                <div className="flex gap-2 items-center justify-center">
                                    <FaCircleUser className="text-[12px]"/>
                                    <Link to="/dashboard" className="text-xs">Meu espaço</Link>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <Link to="/login"><BsPersonFill className="text-2xl"/></Link>
                )}
                        
                {productsCart.length > 0 ? (
                    <div className="flex">
                        <Link to="/cart"><FaShoppingCart className="text-2xl"/></Link>
                        <CartCountIcon />
                    </div>
                ) : (
                    <Link to="/cart"><FaShoppingCart className="text-2xl"/></Link>
                )}
            </div>
        </header>
    )
};

export default Header;