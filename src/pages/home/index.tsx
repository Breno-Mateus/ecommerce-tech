import Header from "../../components/header"
import MenuNav from "../../components/menu-nav"
import CardPromo from "../../components/card-promo"
import Footer from "../../components/footer"
import SectionProducts from "../../components/section-products"

const Home = () => {
    return (
        <div>
            <Header />
            <MenuNav />
            <CardPromo />
            <SectionProducts filterProducts={false} />
            <Footer />
        </div>
    )
}

export default Home