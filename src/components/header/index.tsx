import Logo from "../../assets/logo.png"
import { FaMicrophone } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdHeadsetMic } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <header className="flex items-center justify-around p-2">
            <Link to="/"><img src={Logo} className="h-12"/></Link>
            
            <div className="bg-colorGray flex items-center p-2 rounded-md gap-2">
                <FaMicrophone />
                <input type="text" placeholder="pesquisar" className="bg-transparent"/>
                <FaSearch />
            </div>

            <div className="flex items-center gap-4">
                <FaRegHeart className="text-2xl"/>
                <MdHeadsetMic className="text-2xl"/>
                <Link to="/login"><BsPersonFill className="text-2xl"/></Link>
                <Link to="/cart"><FaShoppingCart className="text-2xl"/></Link>
            </div>
        </header>
    )
}

export default Header