import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-wrapper footer-layout1">
      {/* footer-top – exact from template */}
      <div className="footer-top">
        <div className="container">
          <div className="row align-items-stretch">
            <div className="col-md-4 d-none d-lg-flex">
              <div className="social-style2">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="col-md-5 col-lg-4">
              <div className="vs-logo">
                <Link href="/">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/assets/img/logo-2.svg" alt="Wellnez" />
                </Link>
              </div>
            </div>
            <div className="col-md-7 col-lg-4">
              <form action="#" className="form-style1">
                <h3 className="form-title">Our newsletter</h3>
                <div className="form-group">
                  <input type="email" placeholder="Enter your email..." />
                  <button className="vs-btn" type="submit">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* widget-area */}
      <div className="widget-area">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">About Wellnez</h3>
                <p className="footer-info">
                  <i className="fal fa-map-marker-alt text-theme me-2"></i>
                  14 Independence Ave, Accra, Ghana <br />
                  <a href="tel:+233240000000" className="text-inherit">
                    <i className="far fa-phone-alt text-theme me-2"></i>+233 24 000 0000
                  </a>
                  <br />
                  <a className="text-inherit" href="mailto:hello@wellnez.com">
                    <i className="fal fa-envelope text-theme me-2"></i>hello@wellnez.com
                  </a>
                </p>
                <h4 className="fs-22 mb-2">Open Hours</h4>
                <p className="footer-time">
                  Monday to Saturday <span className="time">08:00 - 20:00</span>
                </p>
              </div>
            </div>

            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Important Links</h3>
                <div className="menu-all-pages-container footer-menu">
                  <ul className="menu">
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/pricing">Price Plan</Link></li>
                    <li><Link href="/appointment">Appointment</Link></li>
                    <li><Link href="/contact">Contact Us</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Categories</h3>
                <div className="menu-all-pages-container footer-menu">
                  <ul className="menu">
                    <li><Link href="/services">Skincare</Link></li>
                    <li><Link href="/services">Massage</Link></li>
                    <li><Link href="/services">Facials</Link></li>
                    <li><Link href="/products">Hair Care</Link></li>
                    <li><Link href="/products">Bath &amp; Body</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">Shop</h3>
                <div className="menu-all-pages-container footer-menu">
                  <ul className="menu">
                    <li><Link href="/products">All Products</Link></li>
                    <li><Link href="/cart">Shopping Cart</Link></li>
                    <li><Link href="/checkout">Checkout</Link></li>
                    <li><Link href="/pricing">Price Plan</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* copyright-wrap */}
      <div className="copyright-wrap">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-auto text-center">
              <p className="copyright-text">
                Copyright <i className="fal fa-copyright"></i> 2024{" "}
                <Link href="/">Wellnez Spa</Link>. All Rights Reserved.
              </p>
            </div>
            <div className="col-auto d-none d-md-block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/img/widget/cards.png" alt="payment cards" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
