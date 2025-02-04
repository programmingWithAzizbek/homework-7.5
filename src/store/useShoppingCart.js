import { create } from "zustand";

function createShoppingCart(set) {
  return {
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],

    addToCart: (product) =>
      set((state) => {
        const copied = [...state.cartItems];
        const existingItem = copied.find((item) => item.id == product.id);
        if (existingItem) {
          copied.forEach((item) => {
            if (item.id == product.id) item.quantity += 1;
          });
        } else {
          copied.push({ ...product, quantity: 1 });
        }
        localStorage.setItem("cartItems", JSON.stringify(copied));
        return { cartItems: copied };
      }),

    removeFromCart: (id) =>
      set((state) => {
        const updatedCart = state.cartItems
          .map((item) =>
            item.id == id ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter((item) => item.quantity > 0);
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
        return { cartItems: updatedCart };
      }),

    clearCart: () => {
      localStorage.removeItem("cartItems");
      set({ cartItems: [] });
    },
  };
}

const useShoppingCart = create(createShoppingCart);

export default useShoppingCart;
