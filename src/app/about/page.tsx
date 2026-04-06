import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Smartsale Spa",
  description: "Learn about Smartsale Spa - our story, values and team in Accra, Ghana.",
};

export default function AboutPage() {
  const specialists = [
    { name: "Akosua Boateng", role: "Founder & CEO", initials: "AB" },
    { name: "Efua Mensah", role: "Manicure Expert", initials: "EM" },
    { name: "Ama Frimpong", role: "Beautician", initials: "AF" },
    { name: "Kwame Asante", role: "Spa Specialist", initials: "KA" },
    { name: "Nana Yaw Ofori", role: "Massage Expert", initials: "NO" },
  ];

  return (
    <>
      {/* Breadcrumb - exact breadcumb-wrapper class from about.html */}
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.28),rgba(0,0,0,0.22)), url(/assets/imgnew/beautiful-african-woman-smiling-resting-relaxing-spa-salon.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container z-index-common">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">About Us</h1>
            <div className="breadcumb-menu-wrap">
              <ul className="breadcumb-menu">
                <li><Link href="/">Home</Link></li>
                <li>About Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* About - exact structure from about.html */}
      <section className="space-top space-extra-bottom">
        <div className="container">
          <div className="row justify-content-between gx-0">
            <div className="col-md-10">
              <span className="sec-subtitle">welcome</span>
              <h2 className="h3 pe-xxl-5 me-xxl-5 mb-md-5 pb-xl-3">
                We think your skin should look and feel refreshed - Nourish
                your outer and inner beauty with our natural, essential
                oil-infused wellness treatments.
              </h2>
            </div>
            <div className="col-auto mb-5 mb-md-0">
              <div className="pt-1 mt-2">
                <div className="circle-btn style2">
                  <Link href="/services" className="btn-icon">
                    <i className="far fa-arrow-right"></i>
                  </Link>
                  <div className="btn-text">
                    <svg viewBox="0 0 150 150">
                      <text>
                        <textPath href="#textPath">
                          discover our top Smartsale treatments
                        </textPath>
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Clean visual block without photos */}
          <div className="about-blank-showcase mb-30 pb-1 wow fadeInUp" data-wow-delay="0.2s">
            <div className="about-blank-showcase-inner">
              <div className="about-pill-row">
                <span className="about-pill">Natural Ingredients</span>
                <span className="about-pill">Luxury Care</span>
                <span className="about-pill">Personalized Rituals</span>
              </div>
              <h3 className="about-blank-title">A Better Wellness Experience, Designed for You</h3>
              <p className="about-blank-text">
                This area is intentionally image-free, keeping your About page clean while preserving a premium look and feel.
                You can drop in visuals later whenever you are ready.
              </p>
              <div className="about-blank-metrics">
                <div className="about-metric-card"><strong>25+</strong><span>Years in Accra</span></div>
                <div className="about-metric-card"><strong>5k+</strong><span>Happy Guests</span></div>
                <div className="about-metric-card"><strong>40+</strong><span>Signature Treatments</span></div>
              </div>
            </div>
          </div>

          <p className="fs-22 font-title text-title mb-4 mb-lg-5">
            We think your skin should look and feel refreshed. Nourish your
            inner and outer beauty with our essential oil-infused treatments.
                Smartsale Spa has been Accra&apos;s premier wellness destination for over
                25 years - offering luxury spa services that draw on both African
                botanical traditions and modern wellness science.
          </p>

          <div className="row justify-content-between">
            <div className="col-xl-4 mb-3 mb-xl-0">
              <h3 className="text-uppercase font-body mt-n1">
                DISCOVER <span className="text-theme">Smartsale</span> Services
              </h3>
              <p>
                Every treatment at Smartsale Spa is tailored to your unique needs by
                our highly trained team of therapists and skincare specialists.
                We source only the finest natural ingredients, many of which are
                grown right here in Ghana.
              </p>
            </div>

            <div className="col-md-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
              <div className="row gx-60">
                <div className="col-auto">
                  <span className="about-number">01</span>
                </div>
                <div className="col">
                  <h4 className="fw-medium fs-26 font-body mt-n1 mb-lg-3 pb-lg-1">
                    Beauty &amp; Wellness Products
                  </h4>
                  <div className="list-style1">
                    <ul className="list-unstyled">
                      <li>Expert Support</li>
                      <li>Natural Ingredients</li>
                      <li>Brand Products</li>
                      <li>Quiet Environment</li>
                      <li>Outstanding Results</li>
                      <li>Popular Services</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
              <div className="row gx-60">
                <div className="col-auto">
                  <span className="about-number">02</span>
                </div>
                <div className="col">
                  <h4 className="fw-medium fs-26 font-body mt-n1 mb-lg-3 pb-lg-1">
                    Popular Skin Treatment
                  </h4>
                  <div className="list-style1">
                    <ul className="list-unstyled">
                      <li>Relax Mind</li>
                      <li>Face Oil Massage</li>
                      <li>Body Massage</li>
                      <li>Hot Stone Massage</li>
                      <li>Outstanding Support</li>
                      <li>Happy Customers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - testi-style2 (same as about.html) */}
      <section className="space-top space-extra-bottom" style={{ position: "relative" }}>
        <div
          className="parallax"
          style={{
            backgroundImage: "url(/assets/img/bg/testi-bg-2-1.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
            inset: 0,
            zIndex: 0,
          }}
        ></div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="title-area text-center">
            <span className="sec-subtitle">client testimonial</span>
                <h2 className="sec-title">What Our Guests Say</h2>
          </div>
          <div className="pb-1px"></div>
          <div className="testi-style2">
            <span className="vs-icon">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/img/icon/quote-1-1.png" alt="icon" />
            </span>
            <div
              className="vs-carousel"
              data-slide-show="1"
              data-fade="true"
              data-arrows="true"
              data-prev-arrow="fal fa-long-arrow-left"
              data-next-arrow="fal fa-long-arrow-right"
            >
              {[
                { text: "Smartsale has completely transformed how I manage stress. Their hot stone massage is divine - I leave feeling reborn every single time.", name: "Abena Mensah", role: "Regular Client" },
                { text: "The deep tissue massage was incredible. Professional staff, beautiful environment, and they truly listen to what your body needs. Highly recommend!", name: "Kofi Asante", role: "Loyal Customer" },
                { text: "From the moment you walk in, you feel the luxury. The Radiance Facial completely transformed my skin. Best spa in Accra, hands down.", name: "Ama Owusu", role: "VIP Member" },
              ].map((t, i) => (
                <div key={i}>
                  <p className="testi-text">&ldquo;{t.text}&rdquo;</p>
                  <div className="arrow-shape">
                    <i className="arrow"></i><i className="arrow"></i>
                    <i className="arrow"></i><i className="arrow"></i>
                  </div>
                  <h3 className="testi-name h5">{t.name}</h3>
                  <span className="testi-degi">{t.role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team - no photos, clean placeholders */}
      <section className="space-top space-extra-bottom">
        <div className="container">
          <div className="title-area text-center wow fadeInUp" data-wow-delay="0.2s">
            <span className="sec-subtitle">our Members</span>
            <h2 className="sec-title">Expert Beauticians</h2>
            <div className="sec-shape">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/img/shape/sec-shape-1.png" alt="shape" />
            </div>
          </div>
          <div
            className="row vs-carousel"
            data-arrows="true"
            data-slide-show="4"
            data-lg-slide-show="3"
            data-md-slide-show="2"
          >
            {specialists.map((m, i) => (
              <div className="col-xl-3" key={i}>
                <div className="team-style1">
                  <div className="team-placeholder" aria-label={`${m.name} profile placeholder`}>
                    <span>{m.initials}</span>
                  </div>
                  <h3 className="team-name h4">{m.name}</h3>
                  <p className="team-degi">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

