"use client";

import Link from "next/link";
import { useState } from "react";
import { saveAppointment } from "@/lib/firestore";
import { FALLBACK_SERVICES } from "@/lib/firestore";

export default function AppointmentPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", date: "", service: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errMsg, setErrMsg] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrMsg("");
    try {
      await saveAppointment({ ...form, time: "" });
      setStatus("success");
      setForm({ name: "", email: "", phone: "", date: "", service: "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      setErrMsg(err instanceof Error ? err.message : "Could not save appointment.");
    }
  }

  return (
    <>
      {/* Breadcrumb – exact from appointment.html */}
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.45)), url(/assets/imgnew/beautiful-african-woman-resting-relaxing-spa-resort-with-closed-eyes.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="container z-index-common">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Appointment</h1>
            <div className="breadcumb-menu-wrap">
              <ul className="breadcumb-menu">
                <li><Link href="/">Home</Link></li>
                <li>Appointment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Appointment Area – form-style2 (exact from appointment.html) */}
      <section className="bg-light-3 space">
        <div className="container">
          <div className="row gx-60">
            <div className="col-xl-5 mb-40 mb-xl-0 pb-20 pb-xl-0 wow fadeInUp" data-wow-delay="0.2s">

              {status === "success" && (
                <div className="alert-success mb-3">
                  ✅ Your appointment request has been submitted! We will confirm within 24 hours.
                </div>
              )}
              {status === "error" && (
                <div className="alert-error mb-3">❌ {errMsg}</div>
              )}

              {/* form-style2 – exact class from appointment.html */}
              <form onSubmit={handleSubmit} className="form-style2 appointment-form">
                <h2 className="form-title">Book Appointment</h2>
                <p className="form-label">Today For Free</p>
                <div className="form-group">
                  <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <input
                    type="date"
                    name="date"
                    className="form-control"
                    placeholder="Select Date"
                    value={form.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>
                <div className="form-group">
                  <select name="service" value={form.service} onChange={handleChange} required>
                    <option disabled hidden value="">Select Subject</option>
                    {FALLBACK_SERVICES.map(s => (
                      <option key={s.id} value={s.name}>{s.name}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <button
                    className="vs-btn"
                    type="submit"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? "Submitting…" : "Make Appointment"}
                  </button>
                </div>
              </form>
            </div>

            <div className="col-xl-7 wow fadeInUp" data-wow-delay="0.3s">
              <div className="row">
                <div className="col-12 mb-5">
                  <h2 className="h3 mb-4 mt-n2">Get Expert Health Consultation</h2>
                  <p className="fs-md font-title mb-4">
                    Our expert therapists are here to help you look and feel your very
                    best. From massages to facials to full-body treatments, we offer a
                    comprehensive range of wellness services tailored to your needs.
                    Book today and experience the SmartSales difference.
                  </p>
                  <div className="row gy-2">
                    <div className="col-auto">
                      <p className="vs-info">
                        <i className="fal fa-envelope"></i>
                        <a href="mailto:hello@smartsales.com" className="text-inherit">hello@smartsales.com</a>
                      </p>
                    </div>
                    <div className="col-auto">
                      <p className="vs-info">
                        <i className="fal fa-phone-alt"></i>
                        <a href="tel:+233240000000" className="text-inherit">+233 24 000 0000</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 mb-30">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=700&q=80"
                    alt="appointment"
                    className="w-100"
                  />
                </div>
                <div className="col-md-5 mb-30">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80"
                    alt="appointment"
                    className="w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing strip (same as appointment.html) */}
      <section className="space" style={{ position: "relative" }}>
        <div className="parallax" style={{
          backgroundImage: "url(/assets/img/bg/price-bg-2-1.jpg)",
          backgroundSize: "cover", backgroundPosition: "center",
          position: "absolute", inset: 0, zIndex: 0,
        }}></div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="row flex-row-reverse gx-55 align-items-center">
            <div className="col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="title-area text-center text-md-start">
                <span className="text-white sec-subtitle">Experience SmartSales <span className="sec-subtext bg-theme">25 Years</span></span>
                <h2 className="text-white sec-title">Perfect Package</h2>
              </div>
              <div className="mt-4">
                <Link href="/pricing" className="vs-btn style3">View All Prices</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="space" style={{ position: "relative" }}>
        <div className="parallax" style={{
          backgroundImage: "url(/assets/img/bg/testi-bg-2-1.jpg)",
          backgroundSize: "cover", backgroundPosition: "center",
          position: "absolute", inset: 0, zIndex: 0,
        }}></div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="title-area text-center">
            <span className="sec-subtitle">client testimonial</span>
            <h2 className="sec-title">SmartSales Customers</h2>
          </div>
          <div className="pb-1px"></div>
          <div className="testi-style2">
            <span className="vs-icon">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/img/icon/quote-1-1.png" alt="icon" />
            </span>
            <div className="vs-carousel" data-slide-show="1" data-fade="true" data-arrows="true" data-prev-arrow="fal fa-long-arrow-left" data-next-arrow="fal fa-long-arrow-right">
              {[
                { text: "Booking was so easy and the service was even better. Highly recommend SmartSales for anyone looking to relax.", name: "Efua Boateng", role: "Customer" },
                { text: "The hot stone massage was incredible. Professional staff and a beautiful environment.", name: "Kofi Mensah", role: "Regular Client" },
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
