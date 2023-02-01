import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className='py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-5'>
              <div className='footer-top-data d-flex align-items-center gap-30'>
                <img src='/images/newsletter.png' alt='newsletter' />
                <h3 className='mb-0 text-white'>Subscribe for a newsletter</h3>
              </div>
            </div>
            <div className='col-7'>
              <div class='input-group'>
                <input
                  type='text'
                  class='form-control p-1'
                  placeholder='youremail@domain.com'
                  aria-label='youremail@domain.com'
                  aria-describedby='basic-addon2'
                />
                <span
                  class='input-group-text p-2 bg-dark text-white border-0'
                  id='basic-addon2'
                >
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h5 className="text-white mb-4">Contact us</h5>
              <div>
                <address className="text-white fs-6">
                  Hno: 2432, 23- New vill copal <br />
                  mirsarai, chittagong
                </address>
                <a href="434" className="text-white mt-4 d-block mb-3">+9843 4383 243</a>
                <a href="434" className="text-white mt-4 d-block mb-3">example@gamil.com</a>
                <div className="social-link ">
                  <a className="text-white me-2" href="Facebook"><FaFacebook /></a>
                  <a className="text-white me-2" href="Facebook"><FaTwitter /></a>
                  <a className="text-white me-2" href="Facebook"><FaLinkedin /></a>
                  <a className="text-white me-2" href="Facebook"><FaInstagram /></a>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <h5 className="text-white mb-4">Information</h5>
              <div className="footer-link">
                <Link className="text-white py-2 mb-1" to="">Privecy policy</Link>
                <br />
                <Link className="text-white py-2 mb-1" to="">Refound policy</Link>
                <br />
                <Link className="text-white py-2 mb-1" to="">Shopping policy</Link>
                <br />
                <Link className="text-white py-2 mb-1" to="">Terms and services</Link>
              </div>
            </div>
            <div className='col-3'>
              <h5 className="text-white mb-4">Accounts</h5>
              <div className="footer-link">
                <Link className="text-white py-2 mb-1" to="">About us</Link>
                <br />
                <Link className="text-white py-2 mb-1" to="">Faq</Link>
                <br />
                <Link className="text-white py-2 mb-1" to="">Contact</Link>
                <br />
                <Link className="text-white py-2 mb-1" to="">Policy</Link>
              </div>
            </div>
            <div className='col-2'>
              <h5 className="text-white mb-4">Quick Links</h5>
              <div className="footer-link">
                <Link className="text-white py-2 mb-1" to="">Laptop</Link>
                <br />
                <Link className="text-white py-2 mb-1" to="">Headphone</Link>
                <br />
                <Link className="text-white py-2 mb-1" to="">Tablet</Link>
                <br />
                <Link className="text-white py-2 mb-1" to="">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-3 pt-4 '>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center text-white mb-0 font-italic'>
                &copy;2023 Powered by itznur07
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
