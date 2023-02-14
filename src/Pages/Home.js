import React from "react";
import Marquee from "react-fast-marquee";
import BlogCard from "../Components/BlogCard";
import ProductCard from "../Components/ProductCard";
import Products from '../Components/Products';

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
                  src='https://img.freepik.com/free-vector/ice-cream-ad-concept_23-2148600190.jpg?w=1060&t=st=1676302413~exp=1676303013~hmac=2fd2a7b326ad66190fb5ff4823183bd6594fe1df1048d1a6c5cd7ece99869a4e'
                  alt='main-img'
                  className='img-fluid rounded-3'
                />
                {/* <div className='main-banner-content'>
                  <h4 className='text-uppercase'>Superchanged for pros</h4>
                  <h5>iPad s13+ Pro</h5>
                  <p>From $595 or $54 /month. </p>
                  <Link className='button' to=''>
                    Buy Now
                  </Link>
                </div> */}
              </div>
            </div>
            <div className='col-6'>
              <div className='d-flex flex-wrap align-items-center justify-content-between'>
                <div className='small-banner position-relative p-2 '>
                  <img
                    src='https://img.freepik.com/free-vector/realistic-ice-cream-ad-template_52683-63815.jpg?w=1060&t=st=1676302497~exp=1676303097~hmac=ea9c91985ba4ffb8dd4042bb8cb7da1a37b8f453327f864cbce09dfcdcc48fe3'
                    alt='main-img'
                    className='img-fluid rounded-3'
                  />
                  
                </div>

                <div className='small-banner position-relative p-2 '>
                  <img
                    src='https://img.freepik.com/free-vector/realistic-ice-cream-ad-background_52683-42900.jpg?w=1060&t=st=1676302595~exp=1676303195~hmac=6b1d36f1b83205261b672654b4c9e227fec87c732f109710d356c9f0a98d4751'
                    alt='main-img'
                    className='img-fluid rounded-3'
                  />
                  
                </div>

                <div className='small-banner position-relative p-2 '>
                  <img
                    src='https://img.freepik.com/free-vector/realistic-vanilla-chocolate-ice-cream-ad_52683-63910.jpg?w=1060&t=st=1676302620~exp=1676303220~hmac=2211a6858fd9e2d5d8132c85112844ccac52b378d58c673e12d97f06fea05fd0'
                    alt='main-img'
                    className='img-fluid rounded-3'
                  />
                  
                </div>

                <div className='small-banner position-relative p-2 '>
                  <img
                    src='https://img.freepik.com/free-vector/realistic-ice-cream-promo_52683-64051.jpg?w=996&t=st=1676302649~exp=1676303249~hmac=2c7aa1429c714ecb478659085f90ab41cecd7b3b8e33926a894bfc0f536e3474'
                    alt='main-img'
                    className='img-fluid rounded-3'
                  />
                  
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
      <Products />
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
              altImg = "/images/speaker.jpg"
            />
            <ProductCard
              img='/images/tv.jpg'
              caption='Sony'
              title='Olompyic s10 camera'
              desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, magnam.'
              price='$50'
              altImg = "/images/speaker.jpg"
            />
            <ProductCard
              img='/images/headphone.jpg'
              caption='Icon'
              title='New Blogs For Developers'
              desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, magnam.'
              price='$500'
              altImg = "/images/speaker.jpg"
            />

            <ProductCard
              img='/images/camera.jpg'
              caption='Havles'
              title='New Blogs For Developers'
              desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, magnam.'
              price='$100'
              altImg = "/images/speaker.jpg"
            />
            <ProductCard
              img='/images/speaker.jpg'
              caption='Sony'
              title='New Blogs For Developers'
              desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, magnam.'
              price='$80'
              altImg = "/images/speaker.jpg"
            />
            <ProductCard
              img='/images/acc.jpg'
              caption='Walton'
              title='New Blogs For Developers'
              desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, magnam.'
              price='$10'
              altImg = "/images/speaker.jpg"
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
