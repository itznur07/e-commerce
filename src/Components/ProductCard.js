import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, addToWishList } from "../app/reducer/productReducer";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1000);
  };

  const handleAddToWish = () => {
    dispatch(addToWishList(product));
  };

  return (
    <div className="w-72 h-full rounded overflow-hidden shadow-md m-4">
      <Link to={`/product/${product.id}`}>
        <img
          className="w-full h-48 object-cover"
          src={product.img}
          alt={product.heading}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            {product.heading.slice(0, 23)}
          </div>
          <p className="text-gray-700 text-base">{product.description}</p>
        </div>
      </Link>
      <div className="flex items-center justify-between px-5 py-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          ${product.price}
        </span>
        <button
          onClick={handleAddToCart}
          className="bg-[#E34E94] hover:bg-[pink] text-white font-bold py-2 px-4 rounded"
        >
          Add to Cart
        </button>
        {showToast && (
          <div className="absolute top-0 left-56 z-100 mt-10  p-4 bg-indigo-500 text-white rounded-lg">
            {product.heading.slice(0, 10)} added to cart!
          </div>
        )}
        <span
          onClick={handleAddToWish}
          className="text-xl font-semibold cursor-pointer text-[gray] hover:text-[#E34E94] transition ease-linear duration-200"
        >
          <FaHeart />
        </span>
      </div>
    </div>
  );
};
export default ProductCard;
