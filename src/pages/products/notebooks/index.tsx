import Footer from "../../../components/footer";
import Header from "../../../components/header";
import HeaderMobile from "../../../components/header-mobile";
import MenuNav from "../../../components/menu-nav";
import SectionProducts from "../../../components/section-products";

const Notebooks = () => {
    return (
        <div className="flex flex-col min-h-screen justify-between">
            <Header />
            <HeaderMobile />
            <MenuNav />
            <SectionProducts filterProducts={true} category="notebooks"/>
            <Footer />
        </div>
    )
};

export default Notebooks;