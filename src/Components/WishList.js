import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import { FaTrash } from "react-icons/fa";
import { removeFromWishList } from "../app/reducer/productReducer";

const WishList = () => {
  const { wishItem } = useSelector((state) => state.products);

  return (
    <>
      <Navbar />
      <div className="md:mx-28 mt-5">
        <h2 className="text-2xl font-medium mb-6 uppercase">Wish List</h2>
        <div className="flex flex-col justify-center items-center">
          {wishItem.map((item) => (
            <WishItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

// card items
const WishItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleTrash = (itemId) => {
    dispatch(removeFromWishList(itemId));
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

        <button
          onClick={() => handleTrash(item.id)}
          className="mt-4 text-red-600 hover:underline"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default WishList;
