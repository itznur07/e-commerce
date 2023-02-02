import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ProductCard = ({ img, caption, title, price }) => {
  return (
    <>
      <div className='col-2'>
        <div className='product-card rounded-2 shadow-sm position-relative'>
          <div className='p-card-img d-flex justify-content-center'>
            <img className='img-fluid' src={img} alt='' />
          </div>
          <div className='p-card-content p-3'>
            <p className='text-uppercase c-c-date'>{caption}</p>
            <h6 className='c-c-title'>{title}</h6>
            <div className='reating-star d-flex align-items-center'>
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
            </div>
            <h6 className='c-c-title mt-3'>{price}</h6>
          </div>
          {/* favourit list */}
          <div className='p-card-wish'>
            <Link to='/'><img src='/images/wish.svg' alt='wish-img'/></Link>
          </div>
          {/* side feature */}
          <div className="p-card-side-feature">
            <Link to=''>
              <img src="/images/prodcompare.svg" alt="" />
            </Link>
            <Link to=''>
              <img src="/images/view.svg" alt="" />
            </Link>
            <Link to=''>
              <img src="/images/add-cart.svg" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
