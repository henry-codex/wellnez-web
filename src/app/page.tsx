"use client";

import Link from "next/link";
import BestSellersCarousel from "@/components/BestSellersCarousel";
import PackageBookingActions from "@/components/PackageBookingActions";

const homeBestSellers = [
  {
    id: "home-safari-max",
    slug: "safari-max",
    title: "Safari Max",
    description: "Nourishing body moisturizer for smooth daily hydration.",
    imageUrl: "/assets/imgnew/beautiful-african-woman-smiling-resting-relaxing-spa-salon.jpg",
    price: 120,
    category: "Beauty",
  },
  {
    id: "home-face-oil",
    slug: "face-oil",
    title: "Face Oil",
    description: "Lightweight facial oil blend for glow and moisture balance.",
    imageUrl: "/assets/imgnew/close-up-portrait-attractive-young-woman-isolated.jpg",
    price: 135,
    category: "Cosmetic",
  },
  {
    id: "home-nail-polish",
    slug: "nail-polish",
    title: "Nail Polish",
    description: "Long-wear salon shade with a glossy finish.",
    imageUrl: "/assets/imgnew/person-enjoying-scalp-massage-spa.jpg",
    price: 95,
    category: "Nails",
  },
  {
    id: "home-hand-cream",
    slug: "hand-cream",
    title: "Hand Creams",
    description: "Shea-rich hand cream to soften and protect dry hands.",
    imageUrl: "/assets/imgnew/beautiful-african-woman-resting-relaxing-spa-resort-with-closed-eyes.jpg",
    price: 88,
    category: "Skincare",
  },
  {
    id: "home-body-scrub",
    slug: "body-scrub",
    title: "Body Scrub",
    description: "Exfoliating scrub with natural grains for silky skin.",
    imageUrl: "/assets/imgnew/young-woman-relaxing-while-taking-bath.jpg",
    price: 110,
    category: "Body Care",
  },
];

const homePackages = [
  {
    id: "pkg-midweek-refresh",
    slug: "package-midweek-refresh",
    title: "Midweek Refresh",
    description: "Quick reset package with massage and express facial.",
    imageUrl: "/assets/imgnew/person-enjoying-scalp-massage-spa.jpg",
    price: 350,
    category: "Service Package",
  },
  {
    id: "pkg-relax-glow",
    slug: "package-relax-glow",
    title: "Relax & Glow",
    description: "Full signature massage and deep facial in one package.",
    imageUrl: "/assets/imgnew/beautiful-african-woman-resting-relaxing-spa-resort-with-closed-eyes.jpg",
    price: 650,
    category: "Service Package",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ==============================
          Hero Area
      ============================== */}
      <div className="hero-layout3">
        <div
          className="vs-carousel"
          data-arrows="true"
          data-slide-show="1"
          data-lg-slide-show="1"
          data-center-mode="true"
          data-xl-center-mode="true"
          data-ml-center-mode="true"
          data-lg-center-mode="true"
          data-md-center-mode="true"
          data-center-padding="475px"
          data-xl-center-padding="350px"
          data-ml-center-padding="300px"
          data-lg-center-padding="250px"
          data-md-center-padding="180px"
          data-sm-center-padding="150px"
          data-xs-center-padding="100px"
          id="heroimg"
          data-asnavfor="#herocontent"
        >
          {[
            "/assets/imgnew/beautiful-african-woman-resting-relaxing-spa-resort-with-closed-eyes.jpg",
            "/assets/imgnew/beautiful-african-woman-smiling-resting-relaxing-spa-salon.jpg",
            "/assets/imgnew/person-enjoying-scalp-massage-spa.jpg",
            "/assets/imgnew/young-woman-relaxing-while-taking-bath.jpg",
          ].map((src, i) => (
            <div key={i}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <div className="hero-img"><img src={src} alt="Smartsale Spa" className="w-100" /></div>
            </div>
          ))}
        </div>
        <div className="media-slider">
          <div className="circle-btn">
            <Link href="/services" className="btn-icon"><i className="far fa-arrow-right"></i></Link>
            <div className="btn-text">
              <svg viewBox="0 0 150 150">
                <text><textPath href="#textPath">how to make your glow last all day</textPath></text>
              </svg>
            </div>
          </div>
          <div
            className="vs-carousel"
            data-asnavfor="#heroimg"
            id="herocontent"
            data-slide-show="3"
            data-center-mode="true"
            data-xl-center-mode="true"
            data-ml-center-mode="true"
            data-lg-center-mode="true"
            data-md-center-mode="true"
            data-md-center-padding="120px"
          >
            <div><div className="media-style2"><div className="media-shape"></div><span className="media-label">Spa in Accra</span><p className="media-title">Relaxing Massages</p><div className="media-line"></div></div></div>
            <div><div className="media-style2"><div className="media-shape"></div><span className="media-label">Glow Everyday</span><p className="media-title">Brightening Facials</p><div className="media-line"></div></div></div>
            <div><div className="media-style2"><div className="media-shape"></div><span className="media-label">Calm Space</span><p className="media-title">Smartsale Spa</p><div className="media-line"></div></div></div>
            <div><div className="media-style2"><div className="media-shape"></div><span className="media-label">Ghana Lifestyle</span><p className="media-title">Self-care Rituals</p><div className="media-line"></div></div></div>
          </div>
        </div>
      </div>

      {/* ==============================
          Feature Area
      ============================== */}
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

      {/* ==============================
          Product Area
      ============================== */}
      <section className="space-top">
        <BestSellersCarousel products={homeBestSellers} title="Best Sellers" />
      </section>

      {/* ==============================
          About Area
      ============================== */}
      <section className="overflow-hidden space-top space-extra-bottom bg-gradient-2">
        <div className="shape-mockup jump-reverse-img d-none d-xxl-block" data-top="22%" data-left="-7%">
          <div className="curb-shape1"></div>
        </div>
        <div className="shape-mockup jump-img d-none d-xxxl-block" data-top="17%" data-right="13%">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/img/shape/leaf-1-4.png" alt="shape" />
        </div>
        <div className="container">
          <div className="row gx-55">
            <div className="col-lg-5 col-xxl-auto align-self-center wow fadeInUp" data-wow-delay="0.2s">
              <div className="px-xxl-4 mx-xxl-3 pb-md-4 pb-lg-0">
                <div className="img-box3">
                  <div className="shape-line">
                    <svg viewBox="0 0 442 357">
                      <path className="shape-line" d="M220.6 3C339.98 3 437.1 100.12 437.1 219.5V351.99H440.1V219.5C440.1 160.87 417.27 105.75 375.81 64.29C334.35 22.83 279.23 0 220.6 0C161.97 0 106.85 22.83 65.39 64.29C28.67 101.01 6.57 148.46 2 199.56H5.02C15.12 89.5 107.94 3 220.6 3Z" />
                      <path className="shape-dot" d="M7 198.5C7 200.433 5.433 202 3.5 202C1.567 202 0 200.433 0 198.5C0 196.567 1.567 195 3.5 195C5.433 195 7 196.567 7 198.5Z" />
                      <path className="shape-dot" d="M442 353.5C442 355.433 440.433 357 438.5 357C436.567 357 435 355.433 435 353.5C435 351.567 436.567 350 438.5 350C440.433 350 442 351.567 442 353.5Z" />
                    </svg>
                  </div>
                  <div className="text-shape">
                    <svg viewBox="0 0 408 579">
                      <path id="textboxpath" d="M0 204C0 91.3339 91.3339 0 204 0V0C316.666 0 408 91.3339 408 204V316.879V375C408 487.666 316.666 579 204 579V579C91.3339 579 0 487.666 0 375V204Z"></path>
                      <text><textPath href="#textboxpath" startOffset="810">Smartsale Signature Care</textPath></text>
                    </svg>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <div className="img-1"><img src="/assets/imgnew/young-woman-enjoys-beauty-spa-home-siting-bathrobe.jpg" alt="Smartsale Spa" /></div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <div className="img-2 jump-img"><img src="/assets/img/shape/leaf-1-7.png" alt="about" /></div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-xxl align-self-center wow fadeInUp" data-wow-delay="0.3s">
              <span className="sec-subtitle">Experience Smartsale Spa <span className="sec-subtext">25 Years</span></span>
              <h2 className="sec-title2">DISCOVER A <span className="text-theme">CALM RETREAT</span></h2>
              <p className="quote-text">At Smartsale Spa in Accra, we believe your skin should look healthy and refreshed no matter your lifestyle.</p>
              <div className="row gx-25">
                <div className="col-md-6">
                  <div className="feature-style1">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <div className="vs-icon"><img src="/assets/img/icon/ab-f-2-1.png" alt="icon" /></div>
                    <h3 className="feature-title h5"><Link className="text-inherit" href="/services">Body Treatments</Link></h3>
                    <div className="arrow-shape"><i className="arrow"></i><i className="arrow"></i><i className="arrow"></i><i className="arrow"></i></div>
                    <p className="feature-text">Full-body scrubs and wraps that detoxify, smooth, and deeply hydrate your skin.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="feature-style1">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <div className="vs-icon"><img src="/assets/img/icon/ab-f-2-2.png" alt="icon" /></div>
                    <h3 className="feature-title h5"><Link className="text-inherit" href="/services">Stone Massage</Link></h3>
                    <div className="arrow-shape"><i className="arrow"></i><i className="arrow"></i><i className="arrow"></i><i className="arrow"></i></div>
                    <p className="feature-text">Warm stone therapy to ease muscle tension and help you fully relax after a busy day in Accra.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================
          Gallery Area
      ============================== */}
      <div className="position-relative space-extra-bottom">
        <div className="gallery-shape1"></div>
        <div className="container-fluid">
          <div
            className="row gallery-slider1 vs-carousel"
            data-slide-show="1"
            data-center-mode="true"
            data-xl-center-mode="true"
            data-ml-center-mode="true"
            data-lg-center-mode="true"
            data-md-center-mode="true"
            data-center-padding="477px"
            data-xl-center-padding="320px"
            data-ml-center-padding="200px"
            data-lg-center-padding="150px"
            data-md-center-padding="80px"
          >
            {[
              "/assets/imgnew/beautiful-woman-doing-facial-treatment-home.jpg",
              "/assets/imgnew/portrait-woman-interacting-with-fruits.jpg",
              "/assets/imgnew/portrait-woman-interacting-with-fruits (1).jpg",
              "/assets/imgnew/portrait-woman-interacting-with-fruits (2).jpg",
            ].map((src, i) => (
              <div className="col" key={i}>
                <div className="gallery-style2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <div className="gallery-img"><img src={src} alt="Smartsale Spa gallery" /></div>
                  <div className="circle-btn style2">
                    <Link href="/products" className="btn-icon"><i className="far fa-arrow-right"></i></Link>
                    <div className="btn-text">
                      <svg viewBox="0 0 150 150">
                        <text><textPath href="#textPath">how to make your glow last all day</textPath></text>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="arrows-style1">
            <button data-slick-prev=".gallery-slider1"><i className="arrow"></i>Prev</button>
            <button data-slick-next=".gallery-slider1"><i className="arrow"></i>Next</button>
          </div>
        </div>
      </div>

      {/* ==============================
          Service Area
      ============================== */}
      <section className="space">
        <div className="title-area text-center wow fadeInUp" data-wow-delay="0.2s">
          <span className="sec-subtitle">Our Services</span>
          <h2 className="sec-title">Discover Our Signature Treatments</h2>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="sec-shape mb-5 pb-1"><img src="/assets/img/shape/sec-shape-1.png" alt="shape" /></div>
        </div>
        <div className="service-inner1">
          <div className="shape-mockup jump d-none d-xxl-block" data-top="-25%" data-right="1%">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/img/hero/hero-leaf-5.png" alt="shape" />
          </div>
          <div className="container-xl">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-6 col-lg-5 col-xxl-auto">
                {[
                  { icon: "sr-i-1-1.png", name: "Deep Cleansing Facial", text: "A skin-specific facial that deeply cleanses, exfoliates, and hydrates for a fresh, lasting glow." },
                  { icon: "sr-i-1-2.png", name: "Eye & Brow Care", text: "Gentle care for the eye area plus brow shaping and tinting to frame your face." },
                  { icon: "sr-i-1-3.png", name: "Relaxation Lounge", text: "A calm lounge with herbal tea where you can unwind before and after treatments." },
                ].map((svc, i) => (
                  <div className="service-style1 reverse" key={i}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <div className="vs-icon"><img src={`/assets/img/icon/${svc.icon}`} alt="icon" /></div>
                    <div className="service-content">
                      <h3 className="service-title"><Link href="/services" className="text-inherit">{svc.name}</Link></h3>
                      <p className="service-text">{svc.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col col-xxl-auto text-center d-none d-lg-block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/img/bg/sr-shape-1-1.png" alt="shape" className="mt-n4" />
              </div>
              <div className="col-md-6 col-lg-5 col-xxl-auto">
                {[
                  { icon: "sr-i-1-4.png", name: "Thermal Bath Ritual", text: "Soothing warm baths with aromatherapy oils to relax the body and improve circulation." },
                  { icon: "sr-i-1-5.png", name: "Hot Stone Massage", text: "A deeply relaxing massage using heated stones to loosen tight muscles." },
                  { icon: "sr-i-1-6.png", name: "Hair & Beauty Bar", text: "Wash, blow-dry, and quick beauty touch-ups for special occasions and everyday confidence." },
                ].map((svc, i) => (
                  <div className="service-style1" key={i}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <div className="vs-icon"><img src={`/assets/img/icon/${svc.icon}`} alt="icon" /></div>
                    <div className="service-content">
                      <h3 className="service-title"><Link href="/services" className="text-inherit">{svc.name}</Link></h3>
                      <p className="service-text">{svc.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================
          Price Plan Area
      ============================== */}
      <section className="space-top space-extra-bottom">
        <div className="parallax" data-parallax-image="/assets/img/bg/price-bg-2-1.jpg"></div>
        <div className="container">
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
                    <path id="textboxpath2" d="M0 204C0 91.3339 91.3339 0 204 0V0C316.666 0 408 91.3339 408 204V316.879V375C408 487.666 316.666 579 204 579V579C91.3339 579 0 487.666 0 375V204Z"></path>
                    <text><textPath href="#textboxpath2" startOffset="810">Smartsale Signature Care</textPath></text>
                  </svg>
                </div>
                <div className="img-product">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <Link href="/products"><img src="/assets/imgnew/close-up-portrait-attractive-young-woman-isolated.jpg" alt="Face Vitamin Serum" /></Link>
                  <p className="product-title"><Link href="/products" className="text-inherit">Face Vitamin Serum</Link></p>
                  <p className="product-price">GHS 180.00</p>
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
                  <div className="col-lg-6">
                    <div className="package-style1">
                      <div className="package-top">
                        <div className="package-left">
                          <p className="package-price">350<span className="currency"> GHS</span></p>
                          <p className="package-duration">Midweek Refresh</p>
                        </div>
                        <h3 className="package-name">Midweek Refresh</h3>
                      </div>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <div className="package-shape"><img src="/assets/img/shape/price-shape-2.png" alt="shape" /></div>
                      <div className="package-list">
                        <ul className="list-unstyled">
                          <li><span className="text-title">30-min back &amp; neck massage</span></li>
                          <li>Express facial</li>
                          <li>Complimentary herbal tea</li>
                          <li>Perfect for a quick reset</li>
                        </ul>
                      </div>
                      <div className="package-btn">
                        <PackageBookingActions product={homePackages[0]} />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="package-style1">
                      <div className="package-top">
                        <div className="package-left">
                          <p className="package-price">650<span className="currency"> GHS</span></p>
                          <p className="package-duration">Relax &amp; Glow</p>
                        </div>
                        <h3 className="package-name">Relax &amp; Glow</h3>
                      </div>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <div className="package-shape"><img src="/assets/img/shape/price-shape-2.png" alt="shape" /></div>
                      <div className="package-list">
                        <ul className="list-unstyled">
                          <li><span className="text-title">60-min full body massage</span></li>
                          <li>Deep cleansing facial</li>
                          <li>Use of relaxation lounge</li>
                          <li>Ideal for monthly self-care</li>
                        </ul>
                      </div>
                      <div className="package-btn">
                        <PackageBookingActions product={homePackages[1]} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================
          Testimonial Area
      ============================== */}
      <section className="space-top space-extra-bottom">
        <div className="parallax" data-parallax-image="/assets/img/bg/testi-bg-2-1.jpg"></div>
        <div className="shape-mockup jump-reverse d-none d-xxl-block" data-top="12%" data-right="6%">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/img/shape/leaf-1-1.png" alt="shape" />
        </div>
        <div className="shape-mockup jump d-none d-xxl-block" data-top="35%" data-left="17.5%">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/img/hero/leaf-1-8.png" alt="shape" />
        </div>
        <div className="container">
          <div className="title-area text-center">
            <span className="sec-subtitle">Client Testimonials</span>
            <h2 className="sec-title">What Our Guests Say</h2>
          </div>
          <div className="pb-1px"></div>
          <div className="testi-style2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <span className="vs-icon"><img src="/assets/img/icon/quote-1-1.png" alt="icon" /></span>
            <div className="vs-carousel" data-slide-show="1" data-fade="true" data-arrows="true" data-ml-arrows="true" data-xl-arrows="true" data-lg-arrows="true" data-prev-arrow="fal fa-long-arrow-left" data-next-arrow="fal fa-long-arrow-right">
              <div>
                <p className="testi-text">&ldquo;From the moment I walked in, I felt completely calm. The staff are professional, the space is spotless, and my skin has never looked better. Smartsale is my go-to spa in Accra.&rdquo;</p>
                <div className="arrow-shape"><i className="arrow"></i><i className="arrow"></i><i className="arrow"></i><i className="arrow"></i></div>
                <h3 className="testi-name h5">Abena Mensah</h3>
                <span className="testi-degi">Loyal Client</span>
              </div>
              <div>
                <p className="testi-text">&ldquo;I booked the Relax &amp; Glow package for my birthday and it was the best decision I made. The hot stone massage was incredible and the facial left my skin glowing for days.&rdquo;</p>
                <div className="arrow-shape"><i className="arrow"></i><i className="arrow"></i><i className="arrow"></i><i className="arrow"></i></div>
                <h3 className="testi-name h5">Ama Owusu</h3>
                <span className="testi-degi">Bridal Package Client</span>
              </div>
              <div>
                <p className="testi-text">&ldquo;As someone who works long hours in Accra, the Midweek Refresh package is exactly what I needed. Quick, affordable, and I always leave feeling like a new person.&rdquo;</p>
                <div className="arrow-shape"><i className="arrow"></i><i className="arrow"></i><i className="arrow"></i><i className="arrow"></i></div>
                <h3 className="testi-name h5">Kofi Asante</h3>
                <span className="testi-degi">Regular Guest</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================
          Contact Area
      ============================== */}
      <section className="vs-cart-wrapper space">
        <div className="parallax" data-parallax-image="/assets/img/bg/contact-bg-2-1.jpg"></div>
        <div className="container">
          <div className="row gx-0">
            <div className="col-md-auto wow fadeInUp" data-wow-delay="0.2s">
              <div className="info-box" data-overlay="theme" data-opacity="8">
                <h3 className="sec-title text-uppercase">Our Timing</h3>
                <div className="info-item">
                  <h4 className="info-title">MONDAY - FRIDAY</h4>
                  <p className="info-text">08:00 - 20:00</p>
                </div>
                <div className="info-item">
                  <h4 className="info-title">SATURDAY</h4>
                  <p className="info-text">09:00 - 18:00</p>
                </div>
                <Link href="/contact" className="vs-btn style6"><i className="fal fa-headset"></i>(+233) 24 000 0000</Link>
              </div>
            </div>
            <div className="col wow fadeInUp" data-wow-delay="0.3s">
              <form action="/api/contact" method="POST" className="form-style4">
                <span className="sec-subtitle2">Have a question?</span>
                <h2 className="sec-title text-uppercase">Get in <span className="text-theme">Touch</span></h2>
                <div className="form-group">
                  <input type="text" name="name" placeholder="YOUR NAME*" />
                  <i className="far fa-user-circle"></i>
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="YOUR E-MAIL*" />
                  <i className="fal fa-envelope"></i>
                </div>
                <div className="form-group">
                  <textarea name="message" placeholder="YOUR MESSAGE"></textarea>
                </div>
                <div className="form-group">
                  <button className="vs-btn" type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

