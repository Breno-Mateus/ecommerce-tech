import Footer from "../../../components/footer";
import Header from "../../../components/header";
import HeaderMobile from "../../../components/header-mobile";
import MenuNav from "../../../components/menu-nav";
import SectionProducts from "../../../components/section-products";

const SmartHome = () => {
    return (
        <div>
            <Header />
            <HeaderMobile />
            <MenuNav />
            <SectionProducts filterProducts={true} category="Smart Home"/>
            <Footer />
        </div>
    )
};

export default SmartHome;