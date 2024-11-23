import { act, renderHook } from "@testing-library/react";
import { useCart } from "../store/cart-store";
import { Product } from "../data/products";

describe('Cart state management', () => {

    const createProduct = (): Product => ({
        id: 1,
        name: 'Product A',
        price: 100,
        category: 'Category A',
        image: 'image-url',
    });

    afterEach(() => {
        useCart.getState().productsCart = [];
    });

    it('should add a new product to the cart', () => {

        const { result } = renderHook(() => useCart());

        const product = createProduct();

        act(() => {
            result.current.addProduct(product);
        });

        expect(result.current.productsCart).toHaveLength(1);
        expect(result.current.productsCart[0]).toEqual(expect.objectContaining({
            id: 1,
            name: 'Product A',
            price: 100,
            category: 'Category A',
            image: 'image-url',
            quantity: 1,
        }));
    });

    it('should increase the quantity of a product in the cart', () => {

        const { result } = renderHook(() => useCart());

        const product = createProduct();

        act(() => {
            result.current.addProduct(product);
            result.current.incrementQuantity(product.id);
        });

        expect(result.current.productsCart[0]).toEqual(expect.objectContaining({
            id: 1,
            name: 'Product A',
            price: 100,
            category: 'Category A',
            image: 'image-url',
            quantity: 2,
        }));
    });

    it('should decrement the quantity of a product in the cart and remove the product when the quantity reaches zero', () => {
        
        const { result } = renderHook(() => useCart());

        const product = createProduct();

        act(() => {
            result.current.addProduct(product);
            result.current.incrementQuantity(product.id);
            result.current.decrementQuantity(product.id);
        });

        expect(result.current.productsCart[0]).toEqual(expect.objectContaining({
            id: 1,
            name: 'Product A',
            price: 100,
            category: 'Category A',
            image: 'image-url',
            quantity: 1,
        }));

        act(() => {
            result.current.decrementQuantity(product.id);
        });

        expect(result.current.productsCart).toHaveLength(0);
    });

    it('should remove a product from the cart', () => {

        const { result } = renderHook(() => useCart());

        const product = createProduct();

        act(() => {
            result.current.removeProduct(product.id);
        });

        expect(result.current.productsCart).toHaveLength(0);

        act(() => {
            result.current.addProduct(product);
            result.current.removeProduct(product.id);
        });

        expect(result.current.productsCart).toHaveLength(0);
    });

    it('should return the total value (quantity * price) of a single product', () => {
        const { result } = renderHook(() => useCart());

        expect(result.current.totalProduct(1)).toBe(0);

        const product = createProduct();

        act(() => {
            result.current.addProduct(product);
        });

        expect(result.current.totalProduct(product.id)).toBe(100);

        act(() => {
            result.current.incrementQuantity(product.id);
        });

        expect(result.current.totalProduct(product.id)).toBe(200);
    });

    it('should return the total value of the cart', () => {
        const { result } = renderHook(() => useCart());

        expect(result.current.totalCart()).toBe(0);

        const product = createProduct();

        act(() => {
            result.current.addProduct(product);
        });

        expect(result.current.totalCart()).toBe(100);
    });
});