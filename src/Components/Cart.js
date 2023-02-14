import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./Navbar";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import {
  increaseQty,
  decreaseQty,
  removeFromCart
} from "../app/reducer/productReducer";

const Cart = () => {
  const { cartItem } = useSelector((state) => state.products);
  const totalCost = cartItem.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <>
      <Navbar />
      <div className="md:mx-28 mt-5">
        <h2 className="text-2xl font-medium mb-6 uppercase">Shopping Cart</h2>
        <div className="flex flex-col justify-center items-center">
          {cartItem.map((item) => (
            <CardItem item={item} key={item.id} />
          ))}
        </div>
        <div className="flex justify-end mt-6">
          <p className="font-semibold text-2xl">Total: ${totalCost}</p>
        </div>
      </div>
    </>
  );
};

// card Items

const CardItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrese = (itemId) => {
    dispatch(increaseQty(itemId));
  };

  const handleDecrese = (itemId, qty) => {
    if (qty > 1) {
      dispatch(decreaseQty(itemId));
    }
  };

  const handleRemove = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  return (
    <div className="md:w-full">
      <div className="flex items-center justify-between bg-white shadow p-6 border-top">
        <img
          src={item.img}
          alt={item.heading}
          className="h-24 w-28 object-cover rounded-sm"
        />
        <h3 className="text-lg font-medium mt-4">
          {item.heading.slice(0, 20)}
        </h3>
        <p className="text-gray-600 text-md font-medium mt-2">${item.price}</p>
        <div className="flex items-center mt-4">
          <button
            onClick={() => handleDecrese(item.id, item.qty)}
            className="bg-gray-200 px-3 py-2 rounded-full hover:bg-gray-400"
          >
            <FaMinus />
          </button>
          <p className="px-2">{item.qty}</p>
          <button
            onClick={() => handleIncrese(item.id)}
            className="bg-gray-200 px-3 py-2 rounded-full hover:bg-gray-400"
          >
            <FaPlus />
          </button>
        </div>
        <p className="text-gray-600 text-md font-medium mt-2">
          Total: ${item.price * item.qty}
        </p>
        <button
          onClick={() => handleRemove(item.id)}
          className="mt-4 text-red-600 hover:underline"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default Cart;
