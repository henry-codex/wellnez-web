"use client";

import { useState } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { useCart } from "@/lib/cart-context";
import { createOrder } from "@/lib/firestore";
import { formatGHS } from "@/lib/utils";

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    region: "",
    paymentMethod: "pay_on_delivery",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [orderId, setOrderId] = useState("");
  const [errMsg, setErrMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (items.length === 0) return;
    setStatus("loading");
    setErrMsg("");
    try {
      const id = await createOrder({
        customer: {
          name: form.name,
          email: form.email,
          phone: form.phone,
          address: form.address,
          city: form.city,
          region: form.region,
        },
        items: items.map((i) => ({
          productId: i.product.id,
          title: i.product.title,
          price: i.product.price,
          quantity: i.quantity,
        })),
        total,
        status: "pending",
      });
      setOrderId(id);
      setStatus("success");
      clearCart();
    } catch (err: unknown) {
      setStatus("error");
      setErrMsg(
        err instanceof Error ? err.message : "Could not place order. Please try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div
        style={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#faf8f4",
        }}
      >
        <div
          style={{
            background: "#fff",
            border: "1px solid #e8dfc8",
            padding: "3rem 2.5rem",
            textAlign: "center",
            maxWidth: 560,
          }}
        >
          <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>🎉</div>
          <h2
            style={{
              fontFamily: "Marcellus, serif",
              fontSize: "2rem",
              marginBottom: "0.75rem",
            }}
          >
            Order Placed!
          </h2>
          <p style={{ color: "#666", marginBottom: "0.5rem", lineHeight: 1.8 }}>
            Thank you for your order. We will contact you shortly to confirm
            delivery details.
          </p>
          <p
            style={{
              color: "var(--theme-color)",
              fontWeight: 700,
              marginBottom: "2rem",
            }}
          >
            Order ID: {orderId}
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/products" className="vs-btn">
              Continue Shopping
            </Link>
            <Link href="/" className="vs-btn style2">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Breadcrumb
        title="Checkout"
        links={[
          { label: "Home", href: "/" },
          { label: "Cart", href: "/cart" },
          { label: "Checkout" },
        ]}
        bgImage="/assets/img/img2.png"
      />

      <section className="space-top space-bottom">
        <div className="container">
          {items.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 0" }}>
              <p style={{ color: "#888", marginBottom: "1.5rem" }}>
                Your cart is empty.
              </p>
              <Link href="/products" className="vs-btn">
                Shop Now
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="row g-5">
                {/* Billing / Shipping */}
                <div className="col-lg-7">
                  <h3
                    style={{
                      fontFamily: "Marcellus, serif",
                      fontSize: "1.6rem",
                      marginBottom: "1.75rem",
                    }}
                  >
                    Billing &amp; Shipping Details
                  </h3>

                  {status === "error" && (
                    <div className="alert-error">{errMsg}</div>
                  )}

                  <div className="row g-3">
                    <div className="col-12">
                      <input
                        className="form-ctrl"
                        name="name"
                        type="text"
                        placeholder="Full Name *"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        className="form-ctrl"
                        name="email"
                        type="email"
                        placeholder="Email Address *"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        className="form-ctrl"
                        name="phone"
                        type="tel"
                        placeholder="Phone Number *"
                        value={form.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <input
                        className="form-ctrl"
                        name="address"
                        type="text"
                        placeholder="Delivery Address *"
                        value={form.address}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        className="form-ctrl"
                        name="city"
                        type="text"
                        placeholder="City *"
                        value={form.city}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <select
                        className="form-ctrl"
                        name="region"
                        value={form.region}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Region *</option>
                        {[
                          "Greater Accra",
                          "Ashanti",
                          "Western",
                          "Eastern",
                          "Central",
                          "Northern",
                          "Upper East",
                          "Upper West",
                          "Volta",
                          "Brong-Ahafo",
                          "Bono East",
                          "Ahafo",
                          "Savannah",
                          "North East",
                          "Oti",
                          "Western North",
                        ].map((r) => (
                          <option key={r} value={r}>
                            {r}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Payment method */}
                  <h4
                    style={{
                      fontFamily: "Marcellus, serif",
                      marginTop: "2rem",
                      marginBottom: "1rem",
                      fontSize: "1.2rem",
                    }}
                  >
                    Payment Method
                  </h4>
                  {[
                    {
                      value: "pay_on_delivery",
                      label: "Pay on Delivery",
                      desc: "Pay cash when your order arrives.",
                    },
                    {
                      value: "pay_at_salon",
                      label: "Pay at Salon",
                      desc: "Pick up and pay at our Accra location.",
                    },
                    {
                      value: "mobile_money",
                      label: "Mobile Money (MTN / Vodafone / AirtelTigo)",
                      desc: "We will send you payment details after confirming your order.",
                    },
                  ].map((opt) => (
                    <label
                      key={opt.value}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.75rem",
                        padding: "1rem",
                        border: `1px solid ${form.paymentMethod === opt.value ? "var(--theme-color)" : "#e0d8cc"}`,
                        background:
                          form.paymentMethod === opt.value
                            ? "#fdf9f2"
                            : "#faf8f4",
                        marginBottom: "0.75rem",
                        cursor: "pointer",
                      }}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={opt.value}
                        checked={form.paymentMethod === opt.value}
                        onChange={handleChange}
                        style={{ marginTop: "0.15rem" }}
                      />
                      <div>
                        <strong style={{ fontSize: "0.95rem" }}>
                          {opt.label}
                        </strong>
                        <p
                          style={{
                            margin: "0.2rem 0 0",
                            fontSize: "0.83rem",
                            color: "#888",
                          }}
                        >
                          {opt.desc}
                        </p>
                      </div>
                    </label>
                  ))}
                </div>

                {/* Order summary */}
                <div className="col-lg-5">
                  <div
                    style={{
                      background: "#faf8f4",
                      border: "1px solid #e8dfc8",
                      padding: "2rem",
                      position: "sticky",
                      top: 100,
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "Marcellus, serif",
                        fontSize: "1.3rem",
                        marginBottom: "1.5rem",
                        borderBottom: "1px solid #e8dfc8",
                        paddingBottom: "0.75rem",
                      }}
                    >
                      Your Order
                    </h3>
                    {items.map((item) => (
                      <div
                        key={item.product.id}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "0.75rem",
                          fontSize: "0.9rem",
                        }}
                      >
                        <span style={{ color: "#666" }}>
                          {item.product.title}{" "}
                          <strong style={{ color: "#333" }}>
                            × {item.quantity}
                          </strong>
                        </span>
                        <span style={{ fontWeight: 600 }}>
                          {formatGHS(item.product.price * item.quantity)}
                        </span>
                      </div>
                    ))}
                    <div
                      style={{
                        borderTop: "1px solid #e8dfc8",
                        marginTop: "1rem",
                        paddingTop: "1rem",
                        display: "flex",
                        justifyContent: "space-between",
                        fontFamily: "Marcellus, serif",
                        fontSize: "1.25rem",
                        marginBottom: "1.5rem",
                      }}
                    >
                      <span>Total</span>
                      <span style={{ color: "var(--theme-color)" }}>
                        {formatGHS(total)}
                      </span>
                    </div>
                    <button
                      type="submit"
                      className="vs-btn"
                      style={{
                        width: "100%",
                        textAlign: "center",
                        opacity: status === "loading" ? 0.7 : 1,
                      }}
                      disabled={status === "loading"}
                    >
                      {status === "loading" ? "Placing Order…" : "Place Order"}
                    </button>
                    <p
                      style={{
                        fontSize: "0.78rem",
                        color: "#aaa",
                        marginTop: "0.75rem",
                        textAlign: "center",
                      }}
                    >
                      All prices in Ghana Cedis (GH₵)
                    </p>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
