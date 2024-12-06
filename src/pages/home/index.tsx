import Header from "../../components/header";
import MenuNav from "../../components/menu-nav";
import CardPromo from "../../components/card-promo";
import Footer from "../../components/footer";
import SectionProducts from "../../components/section-products";
import HeaderMobile from "../../components/header-mobile";

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen justify-between">
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