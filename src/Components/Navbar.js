import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { filterProducts } from "../app/reducer/productReducer";

const Navbar = () => {
  const inputRef = useRef("");
  const dispatch = useDispatch();

  const { cartItem, wishItem } = useSelector((state) => state.products);

  const handleSearch = () => {
    dispatch(filterProducts(inputRef.current.value));
  };

  return (
    <div className="bg-white top-0 shadow">
      <nav className="md:mx-24 mx-auto">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-4">
          <div className="pl-4">
            <a
              className="text-[#E34E94] md:text-2xl xl:text-xl no-underline hover:no-underline font-bold"
              href="#link"
            >
              <Link to="/">ICE-SHOP</Link>
            </a>
          </div>
          <div className="ml-44">
            <input
              ref={inputRef}
              type="text"
              name=""
              onChange={handleSearch}
              placeholder="Search here..."
              className="border border-[#E34E94] outline-none rounded py-2.5 px-4 w-96"
            />{" "}
            <button className="ml-2 px-4 py-2.5 bg-[#E34E94] rounded text-md font-semibold text-white hover:bg-[pink]">
              Search
            </button>
          </div>
          <div className="block lg:hidden pr-4">
            <button
              id="nav-toggle"
              className="flex items-center p-1 text-orange-800 hover:text-gray-900"
            >
              <svg
                className="fill-current h-6 w-6"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white z-20"
            id="nav-content"
          >
            <ul className="list-reset lg:flex justify-end flex-1 items-center text-lg uppercase cursor-pointer">
              <Link to="/">
                <li className="mr-3 hover:text-[gray]">
                  <a href="#home" className="inline-block py-2 px-4">
                    Home
                  </a>
                </li>
              </Link>

              <Link to="/cart">
                <li className="mr-3 relative">
                  <a href="#cart" className="inline-block py-2 px-4">
                    <span className="hover:text-[gray] ">Cart</span>{" "}
                    <span className="absolute top-0 ml-1 font-bold text-[#E34E94]">
                      {cartItem.length}
                    </span>
                  </a>
                </li>
              </Link>
              <Link to="/wishlist">
                <li className="mr-3 relative">
                  <a href="#cart" className="inline-block py-2 px-4">
                    <span className="hover:text-[gray] ">Wishlist</span>{" "}
                    <span className="absolute top-0 ml-1 font-bold text-[#E34E94]">
                      {wishItem.length}
                    </span>
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
