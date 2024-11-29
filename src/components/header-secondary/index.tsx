import { Link } from "react-router-dom";
import Logo from "../../assets/logo-white.svg";

const HeaderSecondary = () => {
    return (
        <header className="bg-colorPrimary flex items-center justify-center p-2">
            <Link to="/"><img src={Logo} className="h-12"/></Link>
        </header>
    )
};

export default HeaderSecondary;