import Footer from "../../../components/footer";
import Header from "../../../components/header";
import MenuNav from "../../../components/menu-nav";
import SectionProducts from "../../../components/section-products";

const EqupamentosAudio = () => {
    return (
        <div>
            <Header />
            <MenuNav />
            <SectionProducts filterProducts={true} category="Equipamentos de áudio"/>
            <Footer />
        </div>
    )
};

export default EqupamentosAudio;