import Header from "../../components/header"
import MenuNav from "../../components/menu-nav"
import CardPromo from "../../components/card-promo"
import BoxProduct from "../../components/box-product"
import Footer from "../../components/footer"
import products from "../../data/products"

const Home = () => {
    return (
        <div>
            <Header />
            <MenuNav />
            <CardPromo />
            <div className="flex p-24 gap-10 flex-wrap justify-center">
                {products.map((product) => (
                    <BoxProduct id={product.id} name={product.name} price={product.price} image={product.image}/>
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default Home