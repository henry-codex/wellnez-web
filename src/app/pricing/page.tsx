import Link from "next/link";
import { getServices } from "@/lib/firestore";
import { formatGHS } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing – Wellnez Spa",
  description: "Our transparent spa service pricing in Ghana Cedis (GH₵). No surprises.",
};

export default async function PricingPage() {
  const services = await getServices();

  return (
    <>
      {/* Breadcrumb – exact from price-plan.html */}
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.45)), url(/assets/imgnew/beautiful-woman-doing-facial-treatment-home.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="container z-index-common">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">
              Our <span className="inner-text">Pricing</span>
            </h1>
            <div className="breadcumb-menu-wrap">
              <ul className="breadcumb-menu">
                <li><Link href="/">Home</Link></li>
                <li>Our <span className="inner-text">Pricing</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Price Plan – package-style1 (exact from price-plan.html) */}
      <section
        className="space-top space-extra-bottom"
        style={{
          backgroundImage: "url(/assets/img/bg/price-bg-3-1.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="title-area text-center wow fadeInUp" data-wow-delay="0.2s">
            <span className="sec-subtitle">Wellnez Spa Pricing</span>
            <h2 className="sec-title">Our Exclusive Plan</h2>
            <div className="sec-shape">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/img/shape/sec-shape-1.png" alt="shape" />
            </div>
          </div>

          <div
            className="row vs-carousel wow fadeInUp"
            data-wow-delay="0.3s"
            data-slide-show="3"
            data-lg-slide-show="2"
            data-md-slide-show="2"
          >
            {services.map((svc) => (
              <div className="col-xl-4" key={svc.id}>
                <div className="package-style1">
                  <div className="package-top">
                    <div className="package-left">
                      <p className="package-price">
                        {svc.price}
                        <span className="currency">GHS</span>
                      </p>
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
                      <li>
                        <span className="text-title">{svc.description.slice(0, 40)}…</span>
                      </li>
                      <li>Expert Therapist</li>
                      <li>Private Room</li>
                      <li>Natural Ingredients</li>
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

          {/* Pricing table below the cards */}
          <div className="mt-5 wow fadeInUp" data-wow-delay="0.4s">
            <div className="table-responsive">
              <table className="table table-bordered align-middle text-center bg-white">
                <thead className="table-dark">
                  <tr>
                    <th className="text-start ps-4">Service</th>
                    <th>Duration</th>
                    <th>Price</th>
                    <th>Book</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((svc) => (
                    <tr key={svc.id}>
                      <td className="text-start ps-4 fw-semibold">{svc.name}</td>
                      <td>{svc.duration}</td>
                      <td className="text-theme fw-bold">{formatGHS(svc.price)}</td>
                      <td>
                        <Link href="/appointment" className="vs-btn style3" style={{ padding: "6px 20px", fontSize: "13px" }}>
                          Book
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
    </>
  );
}
