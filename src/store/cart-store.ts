import { create } from "zustand";
import { Product } from "../data/products";

export interface cartProduct extends Product {
    quantity: number;
};

interface cartState {
    productsCart: cartProduct[];
    addProduct: (product: Product) => void;
    removeProduct: (id: number) => void;
    restartCart: () => void;
    incrementQuantity: (id: number) => void;
    decrementQuantity: (id: number) => void;
    totalProduct: (id: number) => number;
    totalCart: () => number;
};

export const useCart = create<cartState>((set, get) => ({
    productsCart: [],

    addProduct: (product) => set((state) => {
        const existingProduct = state.productsCart.find((item) => item.id === product.id);

        if(existingProduct){
            return{
                productsCart: state.productsCart.map((item) => item.id === product.id
                    ? {...item, quantity: item.quantity + 1}
                    : item
                )
            }
        } else {
            return {
                productsCart: [...state.productsCart, {...product, quantity: 1}]
            }
        }
    }),

    removeProduct: (id) => set((state) => ({
        productsCart: state.productsCart.filter((product) => product.id !== id)
    })),

    restartCart: () => set(() => ({
        productsCart: []
    })),

    incrementQuantity: (id) => set((state) => ({
        productsCart: state.productsCart.map((product) => product.id === id 
            ? {...product, quantity: product.quantity + 1} 
            : product)
    })),
    
    decrementQuantity: (id) => set((state) => {
        const existingProduct = state.productsCart.find((product) => product.id === id);

        if(existingProduct){
            if(existingProduct.quantity === 1){
                return{
                    productsCart: state.productsCart.filter((product) => product.id !== id),
                }
            } else {
                return {
                    productsCart: state.productsCart.map((product) =>
                      product.id === id
                        ? { ...product, quantity: product.quantity - 1 }
                        : product
                    ),
                };
            }
        }

        return { productsCart: [...state.productsCart] };
    }),

    totalProduct: (id) => {
        
        const selectedProduct = get().productsCart.find((product) => product.id === id);

        return selectedProduct ? selectedProduct?.quantity * selectedProduct?.price : 0;
    },

    totalCart: () => {
        const valueTotal = get().productsCart.reduce((sum, product) => sum + (product.quantity * product.price), 0);

        return valueTotal;
    }
}));