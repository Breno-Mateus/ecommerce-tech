import { create } from "zustand"
import { Product } from "../data/products"

interface FuncionalidadesCarrinhoDeCompras {
    produtos: Product[];
    adicionarNoCarrinho: (produto: Product) => void;
    //RemoveDoCarrinho: (produto: Produtos) => void;
}

export const useCart = create<FuncionalidadesCarrinhoDeCompras>((set) => ({
    produtos: [],
    adicionarNoCarrinho: (produto) => set((item) => ({produtos: [...item.produtos, produto]})),
}))