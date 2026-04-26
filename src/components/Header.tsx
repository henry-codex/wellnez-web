"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function Header() {
  const { items } = useCart();
  const cartCount = items.reduce((s, i) => s + i.quantity, 0);

  return (
    <>
      {/* Mobile menu - vs-menu-wrapper (exact from template) */}
      <div className="vs-menu-wrapper">
        <div className="vs-menu-area text-center">
          <button className="vs-menu-toggle">
            <i className="fal fa-times"></i>
          </button>
          <div className="mobile-logo">
            <Link href="/"             style={{ fontFamily: "serif", fontSize: "22px", fontWeight: 700, color: "var(--theme-color, #9a563a)", textDecoration: "none", letterSpacing: "1px" }}>
              Smartsale
            </Link>
          </div>
          <div className="vs-mobile-menu">
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Service</Link></li>
              <li><Link href="/products">Shop</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Header - header-layout3 (exact from template) */}
      <header className="vs-header header-layout3">
        {/* header-top */}
        <div className="header-top">
          <div className="container">
            <div className="row justify-content-center justify-content-md-between align-items-center">
              <div className="col-auto text-center py-2 py-md-0">
                <div className="header-links style-white">
                  <ul>
                    <li className="d-none d-xxl-inline-block">
                      <i className="far fa-map-marker-alt"></i>14 Independence Ave, Accra, Ghana
                    </li>
                    <li>
                      <i className="far fa-phone-alt"></i>
                      <Link href="tel:+233240000000">(+233) 24 000 0000</Link>
                    </li>
                    <li>
                      <i className="far fa-envelope"></i>
                      <Link href="mailto:hello@smartsale.com">hello@smartsale.com</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-auto d-none d-md-block">
                <div className="social-style1">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="X"
                    title="X"
                  >
                    <span className="x-social-mark">X</span>
                  </a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-google"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* sticky-wrap */}
        <div className="sticky-wrap">
          <div className="sticky-active">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-3 col-6">
                  <div className="header-logo">
                    <Link href="/"             style={{ fontFamily: "serif", fontSize: "26px", fontWeight: 700, color: "var(--theme-color, #9a563a)", textDecoration: "none", letterSpacing: "1px" }}>
                      Smartsale
                    </Link>
                  </div>
                </div>

                <div className="col-lg-6 d-none d-lg-block">
                  <nav className="main-menu menu-style1 text-center">
                    <ul>
                      <li><Link href="/">Home</Link></li>
                      <li><Link href="/services">Service</Link></li>
                      <li><Link href="/products">Shop</Link></li>
                      <li><Link href="/contact">Contact Us</Link></li>
                    </ul>
                  </nav>
                </div>

                <div className="col-lg-3 col-6 d-flex justify-content-end">
                  <div className="header-icons" style={{ flexWrap: "nowrap", gap: "16px" }}>
                    <button className="searchBoxTggler">
                      <i className="far fa-search"></i>
                    </button>
                    {/* Cart icon with badge */}
                    <Link href="/cart" className="header-cart-icon" style={{ position: "relative", marginRight: "12px" }}>
                      <i className="far fa-shopping-cart"></i>
                      {cartCount > 0 && (
                        <span className="cart-badge" style={{
                          position: "absolute", top: "-8px", right: "-8px",
                          background: "var(--theme-color, #c8a97e)",
                          color: "#fff", borderRadius: "50%",
                          width: "18px", height: "18px",
                          fontSize: "11px", display: "flex",
                          alignItems: "center", justifyContent: "center",
                          fontWeight: 700,
                        }}>
                          {cartCount}
                        </span>
                      )}
                    </Link>
                    <Link href="/services" className="vs-btn style2 d-none d-xl-inline-block">
                      Pick Session
                    </Link>
                    <button
                      className="bar-btn sideMenuToggler d-none d-xl-inline-block"
                      type="button"
                      aria-label="Open menu"
                    >
                      <span className="bar"></span>
                      <span className="bar"></span>
                      <span className="bar"></span>
                    </button>
                    <button className="vs-menu-toggle d-inline-block d-lg-none" type="button">
                      <i className="fal fa-bars"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Popup search */}
      <div className="popup-search-box d-none d-lg-block">
        <button className="searchClose"><i className="fal fa-times"></i></button>
        <form action="#">
          <input type="text" className="border-theme" placeholder="What are you looking for" />
          <button type="submit"><i className="fal fa-search"></i></button>
        </form>
      </div>
    </>
  );
}

