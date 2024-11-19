import BoxProduct from "../../../components/box-product"
import Footer from "../../../components/footer"
import Header from "../../../components/header"
import MenuNav from "../../../components/menu-nav"
import products from "../../../data/products"

const Notebooks = () => {

    const filteredProducts = products.filter(product => product.category === 'notebooks')

    return (
        <div className="">
            <Header />
            <MenuNav />
            <div className="flex p-24 gap-10 flex-wrap justify-center">
                {filteredProducts.map((product) => (
                    <BoxProduct id={product.id} name={product.name} price={product.price} image={product.image}/>
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default Notebooks