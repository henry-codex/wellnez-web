import Link from "next/link";
import { getProducts } from "@/lib/firestore";
import { formatGHS } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Shop – Wellnez Spa",
  description: "Shop natural spa and wellness products from Wellnez Spa. Priced in Ghana Cedis (GH₵).",
};

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      {/* Breadcrumb – exact from shop.html */}
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.45)), url(/assets/imgnew/portrait-woman-interacting-with-fruits (1).jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
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

      {/* Product area – vs-product product-style2 (exact from shop.html) */}
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

                {/* Product grid – vs-product product-style2 */}
                <div className="row">
                  {products.map((product) => (
                    <div className="col-md-6 col-xl-4 col-lg-4" key={product.id}>
                      <div className="vs-product product-style2">
                        <div className="product-img">
                          <Link href={`/products/${product.slug}`}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={product.imageUrl}
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
                            <span className="currency">GH₵</span>
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
          <span className="text-white sec-subtitle">Experience SmartSales <span className="sec-subtext bg-theme">25 Years</span></span>
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
