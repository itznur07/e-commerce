import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className='home-wrapper-1 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-banner position-relative p-2 '>
                <img
                  src='/images/main-banner-1.jpg'
                  alt='main-img'
                  className='img-fluid rounded-3'
                />
                <div className='main-banner-content'>
                  <h4 className='text-uppercase'>Superchanged for pros</h4>
                  <h5>iPad s13+ Pro</h5>
                  <p>From $595 or $54 /month. </p>
                  <Link className='button' to=''>
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='d-flex flex-wrap align-items-center justify-content-between'>
                
                <div className='small-banner position-relative p-2 '>
                  <img
                    src='/images/catbanner-01.jpg'
                    alt='main-img'
                    className='img-fluid rounded-3'
                  />
                  <div className='small-banner-content'>
                    <h4 className='text-uppercase'>Best Sales</h4>
                    <h5>Laptops Max</h5>
                    <p>From $595 or <br /> $54 /month. </p>
                  </div>
                </div>

                <div className='small-banner position-relative p-2 '>
                  <img
                    src='/images/catbanner-03.jpg'
                    alt='main-img'
                    className='img-fluid rounded-3'
                  />
                  <div className='small-banner-content'>
                    <h4 className='text-uppercase'>New Arrival</h4>
                    <h5>Buy iPad Air</h5>
                    <p>From $595 or <br /> $54 /month. </p>
                  </div>
                </div>

                <div className='small-banner position-relative p-2 '>
                  <img
                    src='/images/catbanner-02.jpg'
                    alt='main-img'
                    className='img-fluid rounded-3'
                  />
                  <div className='small-banner-content'>
                    <h4 className='text-uppercase'>15% off</h4>
                    <h5>Smartwatch 7</h5>
                    <p>From $595 or <br /> $54 /month. </p>
                  </div>
                </div>

                <div className='small-banner position-relative p-2 '>
                  <img
                    src='/images/catbanner-04.jpg'
                    alt='main-img'
                    className='img-fluid rounded-3'
                  />
                  <div className='small-banner-content'>
                    <h4 className='text-uppercase'>Free Engaving</h4>
                    <h5>Airport Max</h5>
                    <p>From $595 or <br /> $54 /month. </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Home;
