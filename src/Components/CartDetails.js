import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart, addToWishList } from "../app/reducer/productReducer";
import Navbar from "./Navbar";
// import ImageZoom from "react-medium-image-zoom";

const CartDetails = () => {
  const { product } = useSelector((state) => state.products);
  const { id } = useParams();
  const data = product[id - 1];
  const dispatch = useDispatch();
  const handleAddToCart = (itemId) => {
    dispatch(addToCart(itemId));
  };
  const handleAddToWishlist = (itemId) => {
    dispatch(addToWishList(itemId));
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center  md:flex-row md:mx-28 h-screen place-content-center">
        <div className="md:w-1/3">
          <img
            src={data.img}
            alt={data.heading}
            className="w-full h-80 object-cover"
          />
          {/* <ImageZoom
            image={{
              src: `${data.img}`,
              alt: data.heading,
              className: "img",
              style: { width: "100%" }
            }}
            zoomImage={{
              src: `${data.img}`,
              alt: data.heading
            }}
          /> */}
        </div>
        <div className="md:w-2/3 pl-6">
          <h2 className="text-2xl font-bold">{data.heading}</h2>
          <p className="text-gray-700 mt-2">{data.description}</p>
          <div className="flex items-center mt-4">
            <p className="text-gray-700 mr-2">Qty:</p>
            <input
              type="number"
              value={data.qty}
              className="bg-gray-200 p-2 w-16 text-center"
            />
          </div>
          <div className="flex items-center mt-4">
            <p className="text-gray-700 mr-2">Price:</p>
            <p className="text-gray-700">${data.price}</p>
          </div>
          <div className="space-x-5">
            <button
              className="bg-[#E34E94] text-white py-2 px-4 rounded mt-4 hover:bg-blue-600"
              onClick={() => handleAddToCart(data)}
            >
              Add to Cart
            </button>
            <button
              className="bg-[#E34E94] text-white py-2 px-4 rounded mt-4 hover:bg-blue-600"
              onClick={() => handleAddToWishlist(data)}
            >
              Add to wishlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDetails;
