import Hamburger from 'hamburger-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo.png";
import { FaMicrophone, FaSearch, FaShoppingCart } from 'react-icons/fa';

const HeaderMobile = () => {

    const [isOpen, setOpen] = useState(false);

    const [ search, setSearch ] = useState('');


    return (
        <header className="md:hidden pb-4 px-2 flex flex-col gap-4">
            <div className='flex items-center justify-between pt-2'>
                <Hamburger toggled={isOpen} toggle={setOpen}/>
                <Link to="/"><img src={Logo} className='h-12' /></Link>
                <Link to="/cart"><FaShoppingCart className='text-[2rem]'/></Link>
            </div>

            <div className="bg-colorGray flex items-center justify-between p-2 rounded-md gap-2">
                <FaMicrophone className='text-[1rem]'/>
                <input type="text" value={search} placeholder="pesquisar" className="bg-transparent focus:outline-none w-[80%]" onChange={(e) => setSearch(e.target.value)}/>
                <FaSearch className='text-[1rem]'/>
            </div>
        </header>
    )
};

export default HeaderMobile;