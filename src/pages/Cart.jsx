import React, { useState } from "react";
import Header from "../components/Header";
import useShoppingCart from "../store/useShoppingCart";

function Cart() {
  const { cartItems, addToCart, removeFromCart, clearCart } = useShoppingCart();
  const [productName, setProductName] = useState("");
  const [productQuantity, setProductQuantity] = useState(1);

  const handleAddProduct = () => {
    if (productName.trim() != "" && productQuantity > 0) {
      addToCart({
        id: Date.now(),
        name: productName,
        quantity: Number(productQuantity),
      });
      setProductName("");
      setProductQuantity(1);
    }
  };

  return (
    <>
      <Header />
      <main>
        <div className="max-w-7xl w-full mx-auto p-5">
          <div className="mb-5">
            <input
              type="text"
              placeholder="Product name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="border px-4 py-2 mr-2 rounded-md dark:border-white dark:text-white"
            />
            <input
              type="number"
              min="1"
              value={productQuantity}
              onChange={(e) => setProductQuantity(e.target.value)}
              className="border px-4 py-2 mr-2 rounded-md dark:border-white dark:text-white"
            />
            <button
              onClick={handleAddProduct}
              className="bg-black text-white px-4 py-2 rounded-md dark:bg-white dark:text-black cursor-pointer"
            >
              Add Product
            </button>
          </div>

          {cartItems.length > 0 ? (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="text-black dark:text-white">
                  {item.name} - {item.quantity}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="border bg-black text-white px-2 mx-2 dark:bg-white dark:text-black rounded-md cursor-pointer"
                  >
                    -
                  </button>
                  <button
                    onClick={() => addToCart(item)}
                    className="border bg-black text-white px-1.5 dark:bg-white dark:text-black rounded-md cursor-pointer"
                  >
                    +
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">Your cart is empty</p>
          )}
          {cartItems.length > 0 && (
            <button
              onClick={clearCart}
              className="mt-3 bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer"
            >
              Clear Cart
            </button>
          )}
        </div>
      </main>
    </>
  );
}

export default Cart;
