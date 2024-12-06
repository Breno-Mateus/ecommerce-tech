import Header from "../../components/header";
import MenuNav from "../../components/menu-nav";
import Footer from "../../components/footer";
import SectionProducts from "../../components/section-products";
import HeaderMobile from "../../components/header-mobile";
import Banner from "../../assets/banner.png"

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen justify-between">
            <HeaderMobile />
            <Header />
            <MenuNav />
            <div><img src={Banner}/></div>
            <SectionProducts filterProducts={false} />
            <Footer />
        </div>
    )
}

export default Home