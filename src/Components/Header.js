import React from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className='header-top-strip py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p className='text-white mb-0'>
                Free shiping over 100$ and free return
              </p>
            </div>
            <div className='col-6'>
              <p className='text-end text-white mb-0'>
                Hotline:{" "}
                <a className='text-white' href='h'>
                  +9035 4345 3433
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='header-upper py-3'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-2'>
              <h2>
                <Link to='/' className='text-white'>
                  Ecosia
                </Link>
              </h2>
            </div>
            <div className='col-5'>
              <div class='input-group'>
                <input
                  type='text'
                  class='form-control p-2'
                  placeholder='Search product here...'
                  aria-label='Search product here...'
                  aria-describedby='basic-addon2'
                />
                <span class='input-group-text p-3' id='basic-addon2'>
                  <BsSearch className='fs-6' />
                </span>
              </div>
            </div>
            <div className='col-5'>
              <div className='header-upper-link d-flex align-items-center justify-content-between'>
                <div>
                  <Link
                    className='d-flex align-items-center text-white gap-10'
                    to=''
                  >
                    <img src='/images/compare.svg' alt='img' />
                    <p className='mb-0'>
                      Compare <br /> Product
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    className='d-flex align-items-center gap-10 text-white gap-10'
                    to=''
                  >
                    <img src='/images/wishlist.svg' alt='img' />
                    <p className='mb-0'>
                      Favourit <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center  text-white gap-10' to=''>
                    <img src='/images/user.svg' alt='img' />
                    <p className='mb-0'>
                      Login <br /> Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    className='d-flex align-items-center gap-10 text-white'
                    to=''
                  >
                    <img src='/images/cart.svg' alt='img' />
                    <div className='d-flex align-items-center flex-column'>
                      <span className='badge bg-white text-dark gap-10'>0</span>
                      <p className="mb-0">$500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
