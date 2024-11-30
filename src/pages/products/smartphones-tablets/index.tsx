import Footer from "../../../components/footer";
import Header from "../../../components/header";
import MenuNav from "../../../components/menu-nav";
import SectionProducts from "../../../components/section-products";

const SmartphonesTablets = () => {
    return (
        <div>
            <Header />
            <MenuNav />
            <SectionProducts filterProducts={true} category="Celulares e Tablets"/>
            <Footer />
        </div>
    )
};

export default SmartphonesTablets;