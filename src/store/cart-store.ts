import { create } from "zustand";
import { Product } from "../data/products";

export interface cartProduct extends Product {
    quantity: number;
};
interface cart {
    products: cartProduct[];
    addProduct: (produto: cartProduct) => void;
    removeProduct: (id: number) => void;
};

export const useCart = create<cart>((set) => ({
    products: [],
    addProduct: (product) => set((state) => ({
        products: [...state.products, product]
    })),
    removeProduct: (id) => set((state) => ({
        products: state.products.filter((products) => products.id !== id)
    }))
}));