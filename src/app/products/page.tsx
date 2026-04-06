import Link from "next/link";
import { getProducts } from "@/lib/firestore";
import type { Metadata } from "next";
import BestSellersCarousel from "@/components/BestSellersCarousel";

export const metadata: Metadata = {
  title: "Our Shop - Smartsale Spa",
  description: "Shop natural spa and wellness products from Smartsale Spa. Priced in Ghana Cedis (GHS).",
};

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      {/* Breadcrumb - exact from shop.html */}
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.28),rgba(0,0,0,0.22)), url('/assets/img/img2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container z-index-common">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">
              Our <span className="inner-text">Shop</span>
            </h1>
            <div className="breadcumb-menu-wrap">
              <ul className="breadcumb-menu">
                <li><Link href="/">Home</Link></li>
                <li>Our <span className="inner-text">Shop</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Shop Hero */}
      <section className="shop-hero-section">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <span className="shop-hero-kicker">Curated Wellness Shop</span>
              <h2 className="shop-hero-title">Clean products for glow, calm, and daily care</h2>
              <p className="shop-hero-text">
                Explore Smartsale essentials carefully selected for skincare, body rituals, and aromatherapy.
                Everything here is designed to support your everyday wellness routine.
              </p>
              <div className="shop-hero-actions">
                <Link href="/appointment" className="vs-btn">Book a Treatment</Link>
                <Link href="/services" className="vs-btn style3">Explore Services</Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="shop-hero-visual" aria-hidden="true">
                <div className="shop-hero-blob"></div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/imgnew/beautiful-woman-doing-facial-treatment-home.jpg" alt="Smartsale shop hero" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Area */}
      <section className="space-top space-extra-bottom bg-gradient-1 z-index-common">
        <div className="container">
          <div className="title-area text-center wow fadeInUp" data-wow-delay="0.2s">
            <span className="sec-subtitle">Smartsale skincare</span>
            <h2 className="sec-title">Facials &amp; Body Treatments</h2>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="sec-shape"><img src="/assets/img/shape/sec-shape-1.png" alt="shape" /></div>
          </div>
          <div className="row vs-carousel wow fadeInUp" data-wow-delay="0.3s" data-slide-show="3" data-md-slide-show="2" data-sm-slide-show="1">
            {[
              { icon: "fe-1-1.png", title: "Body Treatments", text: "Deeply relaxing body rituals, exfoliation, and hydration for smooth radiant skin." },
              { icon: "fe-1-2.png", title: "Clean Ingredients", text: "Thoughtfully selected products designed for comfort, glow, and gentle daily care." },
              { icon: "fe-1-3.png", title: "Made Sustainably", text: "Responsible spa care with quality formulas that respect your skin and the environment." },
              { icon: "fe-1-4.png", title: "Skin Treatment", text: "Targeted treatment plans for dullness, dryness, and uneven texture with visible results." },
            ].map((item, i) => (
              <div className="col-lg-4 col-xl-4" key={i}>
                <div className="feature-style2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <div className="vs-icon style2"><img src={`/assets/img/icon/${item.icon}`} alt={item.title} /></div>
                  <h3 className="feature-title h4">{item.title}</h3>
                  <div className="arrow-shape"><i className="arrow"></i><i className="arrow"></i><i className="arrow"></i><i className="arrow"></i></div>
                  <p className="feature-text">{item.text}</p>
                  <Link href="/services" className="link-btn style2">read more</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Slider */}
      <section className="space-top">
        <BestSellersCarousel products={products.slice(0, 8)} title="Best Sellers" />
      </section>

      {/* Product area - vs-product product-style2 (exact from shop.html) */}
      <section
        className="vs-product-wrapper"
        style={{
          backgroundImage: "url(/assets/img/bg/body-bg-1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="outer-wrap3">
          <div className="container">
            <div className="row gx-60">
              <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.2s">
                {/* Sort bar */}
                <div className="vs-sort-bar">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-md-auto">
                      <p className="woocommerce-result-count">
                        Showing {products.length} results
                      </p>
                    </div>
                    <div className="col-md-auto">
                      <form className="woocommerce-ordering">
                        <select name="orderby" className="orderby" aria-label="Shop order">
                          <option value="menu_order">Default Sorting</option>
                          <option value="price">Sort by price: low to high</option>
                          <option value="price-desc">Sort by price: high to low</option>
                        </select>
                      </form>
                    </div>
                  </div>
                </div>

                {/* Product grid - vs-product product-style2 */}
                <div className="row">
                  {products.map((product) => (
                    <div className="col-md-6 col-xl-4 col-lg-4" key={product.id}>
                      <div className="vs-product product-style2">
                        <div className="product-img">
                          <Link href={`/products/${product.slug}`}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={product.imageUrl || "/assets/img/product/p-2-1.png"}
                              alt={product.title}
                              className="w-100"
                            />
                          </Link>
                          <div className="actions">
                            <Link href={`/products/${product.slug}`} className="icon-btn">
                              <i className="far fa-eye"></i>
                            </Link>
                            <Link href="/cart" className="icon-btn">
                              <i className="far fa-shopping-cart"></i>
                            </Link>
                          </div>
                        </div>
                        <div className="product-body">
                          <div className="product-content">
                            <h3 className="product-title">
                              <Link href={`/products/${product.slug}`} className="text-inherit">
                                {product.title}
                              </Link>
                            </h3>
                            <div className="product-category">
                              <Link href="/products">{product.category ?? "Spa"}</Link>
                            </div>
                          </div>
                          <span className="product-price">
                            <span className="currency">GHS</span>
                            {product.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing strip (same as shop.html bottom) */}
      <section className="space" style={{ position: "relative" }}>
        <div className="parallax" style={{
          backgroundImage: "url(/assets/img/bg/price-bg-2-1.jpg)",
          backgroundSize: "cover", backgroundPosition: "center",
          position: "absolute", inset: 0, zIndex: 0,
        }}></div>
        <div className="container text-center" style={{ position: "relative", zIndex: 1 }}>
          <span className="text-white sec-subtitle">Experience Smartsale <span className="sec-subtext bg-theme">25 Years</span></span>
          <h2 className="text-white sec-title">Discover Our Services</h2>
          <div className="mt-4">
            <Link href="/services" className="vs-btn">View Services</Link>
            {" "}
            <Link href="/appointment" className="vs-btn style3">Book Now</Link>
          </div>
        </div>
      </section>
    </>
  );
}

