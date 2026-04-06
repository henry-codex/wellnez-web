import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us – Wellnez Spa",
  description: "Learn about Wellnez Spa – our story, values and team in Accra, Ghana.",
};

export default function AboutPage() {
  return (
    <>
      {/* Breadcrumb – exact breadcumb-wrapper class from about.html */}
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.45)), url(/assets/imgnew/beautiful-african-woman-smiling-resting-relaxing-spa-salon.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
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

      {/* About – exact structure from about.html */}
      <section className="space-top space-extra-bottom">
        <div className="container">
          <div className="row justify-content-between gx-0">
            <div className="col-md-10">
              <span className="sec-subtitle">welcome</span>
              <h2 className="h3 pe-xxl-5 me-xxl-5 mb-md-5 pb-xl-3">
                We think your skin should look and feel refreshed — Nourish
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
                          discover our top Wellnez treatments
                        </textPath>
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Large about image carousel */}
          <div
            className="vs-carousel mb-30 pb-1 wow fadeInUp"
            data-wow-delay="0.2s"
            data-fade="true"
          >
            {[
              "https://images.unsplash.com/photo-1591604021695-0c69b7c05981?w=1400&q=80",
              "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1400&q=80",
              "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1400&q=80",
            ].map((src, i) => (
              <div key={i}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={`about ${i + 1}`} className="w-100" />
              </div>
            ))}
          </div>

          <p className="fs-22 font-title text-title mb-4 mb-lg-5">
            We think your skin should look and feel refreshed. Nourish your
            inner and outer beauty with our essential oil-infused treatments.
                Wellnez Spa has been Accra&apos;s premier wellness destination for over
                25 years — offering luxury spa services that draw on both African
                botanical traditions and modern wellness science.
          </p>

          <div className="row justify-content-between">
            <div className="col-xl-4 mb-3 mb-xl-0">
              <h3 className="text-uppercase font-body mt-n1">
                DISCOVER <span className="text-theme">Wellnez</span> Services
              </h3>
              <p>
                Every treatment at Wellnez Spa is tailored to your unique needs by
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

      {/* Testimonials – testi-style2 (same as about.html) */}
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
                { text: "SmartSales has completely transformed how I manage stress. Their hot stone massage is divine — I leave feeling reborn every single time.", name: "Abena Mensah", role: "Regular Client" },
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

      {/* Team – team-style1 (same as about.html) */}
      <section className="space-top space-extra-bottom">
        <div className="container">
          <div className="title-area text-center wow fadeInUp" data-wow-delay="0.2s">
            <span className="sec-subtitle">our Members</span>
            <h2 className="sec-title">Expert Beautician</h2>
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
            {[
              { img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80", name: "Akosua Boateng", role: "Founder & CEO" },
              { img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80", name: "Efua Mensah", role: "Manicure Expert" },
              { img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80", name: "Ama Frimpong", role: "Beautician" },
              { img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", name: "Kwame Asante", role: "Spa Specialist" },
              { img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&q=80", name: "Nana Yaw Ofori", role: "Massage Expert" },
            ].map((m, i) => (
              <div className="col-xl-3" key={i}>
                <div className="team-style1">
                  <div className="team-img">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={m.img} alt={m.name} />
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
