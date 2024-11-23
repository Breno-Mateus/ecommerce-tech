import { useCart } from "../../store/cart-store";

const CartCountIcon = () => {
    
    const { productsCart } = useCart();

    return (
        <div className="bg-red-600 text-colorSecondary rounded-full flex items-center justify-center text-xs p-[5px] h-3">
            {productsCart.length}
        </div>
    )
};

export default CartCountIcon;