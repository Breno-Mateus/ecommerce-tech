import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Notebooks from "./pages/products/notebooks";
import SmartHome from "./pages/products/smart-home";
import SmartphonesTablets from "./pages/products/smartphones-tablets";
import PerifericosGame from "./pages/products/games-perifericos";
import EqupamentosAudio from "./pages/products/equipamento-audio";
import Login from "./pages/login";
import ProductScreen from "./pages/product-screen";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import Payment from "./pages/payment";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/cart" element={<Cart />}/>
                <Route path="/notebooks" element={<Notebooks />}/>
                <Route path="/equipamento-audio" element={<EqupamentosAudio />}/>
                <Route path="/perifericos-game" element={<PerifericosGame />}/>
                <Route path="/smart-home" element={<SmartHome />}/>
                <Route path="/smartphones-tablets" element={<SmartphonesTablets />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/product-screen/:id" element={<ProductScreen />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path="/payment" element={<Payment />}/>
            </Routes>
        </Router>
    )
};

export default App;