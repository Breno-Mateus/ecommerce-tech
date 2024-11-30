import Footer from "../../../components/footer";
import Header from "../../../components/header";
import MenuNav from "../../../components/menu-nav";
import SectionProducts from "../../../components/section-products";

const Notebooks = () => {
    return (
        <div>
            <Header />
            <MenuNav />
            <SectionProducts filterProducts={true} category="notebooks"/>
            <Footer />
        </div>
    )
};

export default Notebooks;