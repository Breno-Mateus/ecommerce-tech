import Header from "../../components/header";
import MenuNav from "../../components/menu-nav";
import CardPromo from "../../components/card-promo";
import Footer from "../../components/footer";
import SectionProducts from "../../components/section-products";
import HeaderMobile from "../../components/header-mobile";
import CardPromoMobile from "../../components/card-promo-mobile";

const Home = () => {
    return (
        <div>
            <HeaderMobile />
            <Header />
            <MenuNav />
            <CardPromoMobile />
            <CardPromo />
            <SectionProducts filterProducts={false} />
            <Footer />
        </div>
    )
}

export default Home