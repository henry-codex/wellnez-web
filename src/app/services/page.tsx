import Link from "next/link";
import { getServices } from "@/lib/firestore";
import { formatGHS } from "@/lib/utils";
import { serviceToPackageProduct } from "@/lib/package-to-product";
import PackageBookingActions from "@/components/PackageBookingActions";
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
            backgroundImage: "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
            inset: 0,
            zIndex: 0,
          }}
        ></div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="title-area text-center wow fadeInUp" data-wow-delay="0.2s">
            <span className="sec-subtitle">Experience Smartsale Spa <span className="sec-subtext bg-theme">25 Years</span></span>
            <h2 className="sec-title">Perfect Packages</h2>
          </div>

          <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
            {services.map((svc) => (
              <div className="col-md-6 col-xl-4" key={svc.id}>
                <div className="package-style1 h-100">
                  <div className="package-top" style={{ display: "block" }}>
                    <div className="package-left" style={{ marginBottom: "0.75rem" }}>
                      <p className="package-price">{svc.price}<span className="currency">GHS</span></p>
                      <p className="package-duration">{svc.duration}</p>
                    </div>
                    <h3 className="package-name" style={{ maxWidth: "100%" }}>{svc.name}</h3>
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
                    <PackageBookingActions
                      product={serviceToPackageProduct(svc)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 wow fadeInUp" data-wow-delay="0.35s">
            <div className="table-responsive">
              <table className="table table-bordered align-middle text-center bg-white">
                <thead className="table-dark">
                  <tr>
                    <th className="text-start ps-4">Service</th>
                    <th>Duration</th>
                    <th>Price</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((svc) => (
                    <tr key={`tbl-${svc.id}`}>
                      <td className="text-start ps-4 fw-semibold">{svc.name}</td>
                      <td>{svc.duration}</td>
                      <td className="text-theme fw-bold">{formatGHS(svc.price)}</td>
                      <td>
                        <Link href={`/services/${svc.slug}`} className="vs-btn style3">
                          Check Details
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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

