import Link from "next/link";
import { getServices } from "@/lib/firestore";
import { formatGHS } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - Smartsale Spa",
  description: "Explore our full menu of luxury spa services in Accra, Ghana. Priced in Ghana Cedis.",
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      {/* Breadcrumb - exact from service.html */}
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.28),rgba(0,0,0,0.22)), url(/assets/imgnew/person-enjoying-scalp-massage-spa.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container z-index-common">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">
              Our <span className="inner-text">Services</span>
            </h1>
            <div className="breadcumb-menu-wrap">
              <ul className="breadcumb-menu">
                <li><Link href="/">Home</Link></li>
                <li>Our <span className="inner-text">Services</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Service Area - service-style1 (exact from service.html) */}
      <section className="space">
        <div className="service-inner1">
          <div className="container-xl">
            <div className="row justify-content-between align-items-center">
              {/* Left column */}
              <div className="col-md-6 col-lg-5 col-xxl-auto">
                {services.slice(0, 3).map((svc, i) => (
                  <div className="service-style1 reverse" key={svc.id}>
                    <div className="vs-icon">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`/assets/img/icon/sr-i-1-${i + 1}.png`} alt="icon" />
                    </div>
                    <div className="service-content">
                      <h3 className="service-title">
                        <Link href={`/services/${svc.slug}`} className="text-inherit">
                          {svc.name}
                        </Link>
                      </h3>
                      <p className="service-text">{svc.description.slice(0, 70)}...</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Centre image */}
              <div className="col col-xxl-auto text-center d-none d-lg-block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/img/bg/sr-shape-1-1.png" alt="shape" className="mt-n4" />
              </div>

              {/* Right column */}
              <div className="col-md-6 col-lg-5 col-xxl-auto">
                {services.slice(3, 6).map((svc, i) => (
                  <div className="service-style1" key={svc.id}>
                    <div className="vs-icon">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`/assets/img/icon/sr-i-1-${i + 4}.png`} alt="icon" />
                    </div>
                    <div className="service-content">
                      <h3 className="service-title">
                        <Link href={`/services/${svc.slug}`} className="text-inherit">
                          {svc.name}
                        </Link>
                      </h3>
                      <p className="service-text">{svc.description.slice(0, 70)}...</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing section - package-style1 (same as service.html) */}
      <section className="space-top space-extra-bottom" style={{ position: "relative" }}>
        <div
          className="parallax"
          style={{
            backgroundImage: "url(/assets/img/bg/price-bg-2-1.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
            inset: 0,
            zIndex: 0,
          }}
        ></div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="row flex-row-reverse gx-55">
            <div className="col-md-6 col-lg-6 col-xl-4 col-xxl align-self-end mb-40 mb-md-0 wow fadeInUp" data-wow-delay="0.2s">
              <div className="img-box3 style2">
                <div className="shape-line">
                  <svg viewBox="0 0 442 357">
                    <path className="shape-line" d="M220.6 3C339.98 3 437.1 100.12 437.1 219.5V351.99H440.1V219.5C440.1 160.87 417.27 105.75 375.81 64.29C334.35 22.83 279.23 0 220.6 0C161.97 0 106.85 22.83 65.39 64.29C28.67 101.01 6.57 148.46 2 199.56H5.02C15.12 89.5 107.94 3 220.6 3Z" />
                    <path className="shape-dot" d="M7 198.5C7 200.433 5.433 202 3.5 202C1.567 202 0 200.433 0 198.5C0 196.567 1.567 195 3.5 195C5.433 195 7 196.567 7 198.5Z" />
                    <path className="shape-dot" d="M442 353.5C442 355.433 440.433 357 438.5 357C436.567 357 435 355.433 435 353.5C435 351.567 436.567 350 438.5 350C440.433 350 442 351.567 442 353.5Z" />
                  </svg>
                </div>
                <div className="text-shape">
                  <svg viewBox="0 0 408 579">
                    <path id="textboxpathsvc" d="M0 204C0 91.3339 91.3339 0 204 0V0C316.666 0 408 91.3339 408 204V316.879V375C408 487.666 316.666 579 204 579V579C91.3339 579 0 487.666 0 375V204Z"></path>
                    <text><textPath href="#textboxpathsvc" startOffset="810">Smartsale Signature Care</textPath></text>
                  </svg>
                </div>
                <div className="img-product">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/assets/img/about/price-2-1-1.png" alt="product" />
                  <p className="product-title">
                    <Link href="/products" className="text-inherit">face vitamin</Link>
                  </p>
                  <p className="product-price">{formatGHS(services[0]?.price ?? 380)}</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-6 col-xl-8 col-xxl-auto wow fadeInUp" data-wow-delay="0.3s">
              <div className="title-area text-center text-md-start">
                <span className="sec-subtitle">Experience Smartsale Spa <span className="sec-subtext bg-theme">25 Years</span></span>
                <h2 className="sec-title">Perfect Packages</h2>
              </div>
              <div className="price-inner2">
                <div className="row vs-carousel" data-slide-show="2" data-lg-slide-show="1">
                  {services.slice(0, 2).map((svc) => (
                    <div className="col-lg-6" key={svc.id}>
                      <div className="package-style1">
                        <div className="package-top">
                          <div className="package-left">
                            <p className="package-price">{svc.price}<span className="currency">GHS</span></p>
                            <p className="package-duration">{svc.duration}</p>
                          </div>
                          <h3 className="package-name">{svc.name}</h3>
                        </div>
                        <div className="package-shape">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src="/assets/img/shape/price-shape-2.png" alt="shape" />
                        </div>
                        <div className="package-list">
                          <ul className="list-unstyled">
                            <li><span className="text-title">Expert Therapist</span></li>
                            <li>Natural Ingredients</li>
                            <li>Private Room</li>
                            <li>Post-Treatment Advice</li>
                            <li>Complimentary Tea</li>
                          </ul>
                        </div>
                        <div className="package-btn">
                          <Link href="/appointment" className="vs-btn style3">Book Now</Link>
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

      {/* Testimonials (same as service.html) */}
      <section className="space" style={{ position: "relative" }}>
        <div className="parallax" style={{
          backgroundImage: "url(/assets/img/bg/testi-bg-2-1.jpg)",
          backgroundSize: "cover", backgroundPosition: "center",
          position: "absolute", inset: 0, zIndex: 0,
        }}></div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="title-area text-center">
            <span className="sec-subtitle">Client Testimonials</span>
            <h2 className="sec-title">What Our Guests Say</h2>
          </div>
          <div className="pb-1px"></div>
          <div className="testi-style2">
            <span className="vs-icon">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/img/icon/quote-1-1.png" alt="icon" />
            </span>
            <div className="vs-carousel" data-slide-show="1" data-fade="true" data-arrows="true" data-prev-arrow="fal fa-long-arrow-left" data-next-arrow="fal fa-long-arrow-right">
              {[
                { text: "Smartsale has completely transformed how I manage stress. Their hot stone massage is divine - I leave feeling reborn every single time.", name: "Abena Mensah", role: "Regular Client" },
                { text: "The deep tissue massage was incredible. Professional staff and they truly listen to what your body needs.", name: "Kofi Asante", role: "Loyal Customer" },
                { text: "The Radiance Facial completely transformed my skin. Best spa in Accra, hands down.", name: "Ama Owusu", role: "VIP Member" },
              ].map((t, i) => (
                <div key={i}>
                  <p className="testi-text">&ldquo;{t.text}&rdquo;</p>
                  <div className="arrow-shape"><i className="arrow"></i><i className="arrow"></i><i className="arrow"></i><i className="arrow"></i></div>
                  <h3 className="testi-name h5">{t.name}</h3>
                  <span className="testi-degi">{t.role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

