import Header from "../../components/header";
import MenuNav from "../../components/menu-nav";
import CardPromo from "../../components/card-promo";
import Footer from "../../components/footer";
import SectionProducts from "../../components/section-products";
import HeaderMobile from "../../components/header-mobile";

const Home = () => {
    return (
        <div>
            <HeaderMobile />
            <Header />
            <MenuNav />
            <CardPromo />
            <SectionProducts filterProducts={false} />
            <Footer />
        </div>
    )
}

export default Home