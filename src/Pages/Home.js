import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import BlogCard from "../Components/BlogCard";
import ProductCard from "../Components/ProductCard";

const Home = () => {
  return (
    <>
      {/* home wrapper 1 here */}
      <section className='home-wrapper-1 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-banner position-relative p-2'>
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
                    <p>
                      From $595 or <br /> $54 /month.{" "}
                    </p>
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
                    <p>
                      From $595 or <br /> $54 /month.{" "}
                    </p>
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
                    <p>
                      From $595 or <br /> $54 /month.{" "}
                    </p>
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
                    <p>
                      From $595 or <br /> $54 /month.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* home wrapper 1 end here */}
      {/* home wrapper 2 here */}
      <div className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='services d-flex align-items-center justify-content-between'>
                <div className='d-flex gap-15 align-items-center'>
                  <img src='/images/service.png' alt='services-img' />
                  <div>
                    <h6>Free shopping</h6>
                    <p className='mb-0'>From all order over $100</p>
                  </div>
                </div>
                <div className='d-flex gap-15 align-items-center'>
                  <img src='/images/service-02.png' alt='services-img' />
                  <div>
                    <h6>Daily surpaice offect</h6>
                    <p className='mb-0'>Save money 25% of offer</p>
                  </div>
                </div>
                <div className='d-flex gap-15 align-items-center'>
                  <img src='/images/service-03.png' alt='services-img' />
                  <div>
                    <h6>Supports 24/7</h6>
                    <p className='mb-0'>Shop with an expart</p>
                  </div>
                </div>
                <div className='d-flex gap-15 align-items-center'>
                  <img src='/images/service-04.png' alt='services-img' />
                  <div>
                    <h6>Afordable Prices</h6>
                    <p className='mb-0'>Get faction direct price</p>
                  </div>
                </div>
                <div className='d-flex gap-15 align-items-center'>
                  <img src='/images/service-05.png' alt='services-img' />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className='mb-0'>100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* home wrapper 2 end here */}

      {/* home wrapper 3 here */}
      <section className='home-wrapper-3 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='categories shadow-sm d-flex gap-15 flex-wrap align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-30'>
                  <div>
                    <h5>Headphone</h5>
                    <p>10 items</p>
                  </div>
                  <img src='/images/headphone.jpg' alt='img' />
                </div>
                <div className='d-flex align-items-center gap-30'>
                  <div>
                    <h5>Smart tv</h5>
                    <p>15 items</p>
                  </div>
                  <img src='/images/tv.jpg' alt='img' />
                </div>
                <div className='d-flex align-items-center gap-30'>
                  <div>
                    <h5>Speaker</h5>
                    <p>10 items</p>
                  </div>
                  <img src='/images/speaker.jpg' alt='img' />
                </div>
                <div className='d-flex align-items-center gap-30'>
                  <div>
                    <h5>Camera</h5>
                    <p>10 items</p>
                  </div>
                  <img src='/images/camera.jpg' alt='img' />
                </div>

                <div className='d-flex align-items-center gap-15'>
                  <div>
                    <h5>Accsecories</h5>
                    <p>10 items</p>
                  </div>
                  <img src='/images/acc.jpg' alt='img' />
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <div>
                    <h5>Appliences</h5>
                    <p>10 items</p>
                  </div>
                  <img src='/images/homeapp.jpg' alt='img' />
                </div>
                <div className='d-flex align-items-center gap-30'>
                  <div>
                    <h5>Music</h5>
                    <p>10 items</p>
                  </div>
                  <img src='/images/headphone.jpg' alt='img' />
                </div>
                <div className='d-flex align-items-center gap-30'>
                  <div>
                    <h5>Smart tv</h5>
                    <p>10 items</p>
                  </div>
                  <img src='/images/tv.jpg' alt='img' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* home wrapper 3 end here */}

      {/* marque wrapper */}
      <section className='marque-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='marque-inner-wrapper card-wrapper p-3'>
                <Marquee>
                  {/* Marque  */}
                  <div className='d-flex align-items-center gap-40'>
                    <div>
                      <img src='/images/brand-01.png' alt='brand' />
                    </div>
                    <div>
                      <img src='/images/brand-02.png' alt='brand' />
                    </div>
                    <div>
                      <img src='/images/brand-03.png' alt='brand' />
                    </div>
                    <div>
                      <img src='/images/brand-04.png' alt='brand' />
                    </div>
                    <div>
                      <img src='/images/brand-05.png' alt='brand' />
                    </div>
                    <div>
                      <img src='/images/brand-06.png' alt='brand' />
                    </div>
                    <div>
                      <img src='/images/brand-07.png' alt='brand' />
                    </div>
                    <div>
                      <img src='/images/brand-08.png' alt='brand' />
                    </div>
                  </div>
                  {/* Marque */}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* marque wrapper ends here */}

      {/* Feature wrapper */}
      <section className='blog-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div>
              <h3 className='section-heading'>Features Collections</h3>
            </div>
            <ProductCard
              img='/images/headphone.jpg'
              caption='Hevlles'
              title='Kids Headphone pro..'
              desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, magnam.'
              price='$500'
            />
            <ProductCard
              img='/images/tv.jpg'
              caption='Sony'
              title='Olompyic s10 camera'
              desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, magnam.'
              price='$50'
            />
            <ProductCard
              img='/images/headphone.jpg'
              caption='Icon'
              title='New Blogs For Developers'
              desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, magnam.'
              price='$500'
            />

            <ProductCard
              img='/images/camera.jpg'
              caption='Havles'
              title='New Blogs For Developers'
              desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, magnam.'
              price='$100'
            />
            <ProductCard
              img='/images/speaker.jpg'
              caption='Sony'
              title='New Blogs For Developers'
              desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, magnam.'
              price='$80'
            />
            <ProductCard
              img='/images/acc.jpg'
              caption='Walton'
              title='New Blogs For Developers'
              desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, magnam.'
              price='$10'
            />
          </div>
        </div>
      </section>
      {/* Feature wrapper ends here */}

      {/* blog wrapper */}
      <section className='blog-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <h3 className='section-heading'>Our Latest News</h3>
            <div className='col-3'>
              <BlogCard
                img='/images/blog-1.jpg'
                date='10,June,2023'
                title='New Blogs For Developers'
                desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, magnam.'
              />
            </div>
            <div className='col-3'>
              <BlogCard
                img='/images/blog-1.jpg'
                date='10,June,2023'
                title='New Blogs For Developers'
                desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, magnam.'
              />
            </div>
            <div className='col-3'>
              <BlogCard
                img='/images/blog-1.jpg'
                date='10,June,2023'
                title='New Blogs For Developers'
                desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, magnam.'
              />
            </div>
            <div className='col-3'>
              <BlogCard
                img='/images/blog-1.jpg'
                date='10,June,2023'
                title='New Blogs For Developers'
                desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, magnam.'
              />
            </div>
          </div>
        </div>
      </section>
      {/* blog wrapper ends here */}
    </>
  );
};

export default Home;
