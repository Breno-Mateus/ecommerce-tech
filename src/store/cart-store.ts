import { create } from "zustand";
import { Product } from "../data/products";

export interface cartProduct extends Product {
    quantity: number;
};
interface cart {
    products: cartProduct[];
    addProduct: (produto: cartProduct) => void;
    removeProduct: (id: number) => void;
    incrementQuantity: (id: number) => void;
};

export const useCart = create<cart>((set) => ({
    products: [],
    addProduct: (product) => set((state) => ({
        products: [...state.products, product]
    })),
    removeProduct: (id) => set((state) => ({
        products: state.products.filter((products) => products.id !== id)
    })),
    incrementQuantity: (id) => set((state) => ({
        products: state.products.map((products) => products.id === id ? {...products, quantity: products.quantity + 1} : products)
    }))
}));