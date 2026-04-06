"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errMsg, setErrMsg] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Submission failed.");
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      setErrMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <>
      {/* Breadcrumb – exact from contact.html */}
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.28),rgba(0,0,0,0.22)), url(/assets/imgnew/young-woman-enjoys-beauty-spa-home-siting-bathrobe.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container z-index-common">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">
              Contact <span className="inner-text">Us</span>
            </h1>
            <div className="breadcumb-menu-wrap">
              <ul className="breadcumb-menu">
                <li><Link href="/">Home</Link></li>
                <li>Contact <span className="inner-text">Us</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form – exact form-style6 from contact.html */}
      <section className="space">
        <div className="container">
          <div className="row gx-70">
            <div className="col-lg-6 mb-40 mb-lg-0 wow fadeInUp" data-wow-delay="0.2s">
              <div className="text-center text-lg-start">
                <span className="sec-subtitle">Experience</span>
                <h2 className="sec-title3 h1 text-uppercase mb-xxl-2 pb-xxl-1">
                  Get in <span className="text-theme">Touch</span>
                </h2>
                <div className="col-xxl-10 pb-xl-3">
                  <p className="pe-xxl-4">
                    We think your skin should look and feel refreshed. Nourish
                    your outer and inner beauty with our essential wellness
                    services at {" "}
                    <strong>14 Independence Ave, Accra, Ghana</strong>.
                  </p>
                </div>
              </div>

              {status === "success" && (
                <div className="alert-success mb-3">
                  ✅ Thank you! Your message has been received. We&apos;ll be in touch shortly.
                </div>
              )}
              {status === "error" && (
                <div className="alert-error mb-3">❌ {errMsg}</div>
              )}

              {/* form-style6 – exact class from contact.html */}
              <form onSubmit={handleSubmit} className="ajax-contact form-style6">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name*"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email*"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                  >
                    <option value="" disabled hidden>Subject*</option>
                    <option value="Skin Care">Skin Care</option>
                    <option value="Beauty Makeup">Beauty Makeup</option>
                    <option value="Body Massage">Body Massage</option>
                    <option value="Skin Checkup">Skin Checkup</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Message*"
                    value={form.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button
                  className="vs-btn"
                  type="submit"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Sending…" : "Send Message"}
                </button>
              </form>
            </div>

            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.773539348635!2d-0.18697098522875!3d5.603716995935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzYnMTMuNCJOIDDCsDExJzEzLjEiVw!5e0!3m2!1sen!2sgh!4v1600000000000!5m2!1sen!2sgh"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Smartsale Location"
                ></iframe>
              </div>

              {/* contact-table – exact from contact.html */}
              <div className="contact-table">
                <div className="tr">
                  <div className="tb-col">
                    <span className="th">Address :</span>
                    <span className="td">14 Independence Ave, Accra, Ghana</span>
                  </div>
                </div>
                <div className="tr">
                  <div className="tb-col">
                    <span className="th">Phone :</span>
                    <span className="td">
                      <a href="tel:+233240000000">+233 24 000 0000</a>
                    </span>
                  </div>
                </div>
                <div className="tr">
                  <div className="tb-col">
                    <span className="th">Email :</span>
                    <span className="td">
                      <a href="mailto:hello@smartsale.com">hello@smartsale.com</a>
                    </span>
                  </div>
                </div>
                <div className="tr">
                  <div className="tb-col">
                    <span className="th">Open :</span>
                    <span className="td">Mon – Sat: 8:00 AM – 8:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
