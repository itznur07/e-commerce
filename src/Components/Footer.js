import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className='py-5'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-5">
            <div className="footer-top-data d-flex align-items-center gap-30">
              <img src="/images/newsletter.png" alt="newsletter" />
              <h3 className='mb-0 text-white'>Subscribe for a newsletter</h3>
            </div>
          </div>
          <div className="col-7">
          <div class='input-group'>
                <input
                  type='text'
                  class='form-control p-1'
                  placeholder='youremail@domain.com'
                  aria-label='youremail@domain.com'
                  aria-describedby='basic-addon2'
                />
                <span class='input-group-text p-2 bg-dark text-white border-0' id='basic-addon2'>
                  Subscribe
                </span>
              </div>
          </div>
        </div>
      </div>
    </footer>
    <footer></footer>
    <footer className='py-3 pt-5 '>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className='text-center text-white mb-0 font-italic'>&copy;2023 Powered by itznur07</p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer