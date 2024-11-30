import Footer from "../../../components/footer";
import Header from "../../../components/header";
import MenuNav from "../../../components/menu-nav";
import SectionProducts from "../../../components/section-products";

const PerifericosGame = () => {
    return (
        <div>
            <Header />
            <MenuNav />
            <SectionProducts filterProducts={true} category="Periféricos de games"/>
            <Footer />
        </div>
    )
};

export default PerifericosGame;