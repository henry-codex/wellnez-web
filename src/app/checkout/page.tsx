"use client";

import { useState } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { useCart } from "@/lib/cart-context";
import { createOrder } from "@/lib/firestore";
import { formatGHS } from "@/lib/utils";

type Coupon = {
  label: string;
  type: "percent" | "fixed";
  value: number;
};

type PaymentMethod = "pay_on_delivery" | "pay_at_salon" | "mobile_money";

type CheckoutForm = {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  region: string;
  paymentMethod: PaymentMethod;
};

const AVAILABLE_COUPONS: Record<string, Coupon> = {
  SAVE10: { label: "10% off", type: "percent", value: 10 },
  WELCOME5: { label: "GHs 5 off", type: "fixed", value: 5 },
  WELLNESS15: { label: "15% off", type: "percent", value: 15 },
};

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const hasServicePackages = items.some(
    (item) => item.product.category === "Service Package"
  );
  const hasPhysicalProducts = items.some(
    (item) => item.product.category !== "Service Package"
  );

  const [form, setForm] = useState<CheckoutForm>({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    region: "",
    paymentMethod: "pay_at_salon",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [orderId, setOrderId] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [couponInput, setCouponInput] = useState("");
  const [appliedCouponCode, setAppliedCouponCode] = useState("");
  const [couponMsg, setCouponMsg] = useState("");
  const [couponErr, setCouponErr] = useState("");

  const appliedCoupon = appliedCouponCode
    ? AVAILABLE_COUPONS[appliedCouponCode]
    : null;
  const discountRaw = appliedCoupon
    ? appliedCoupon.type === "percent"
      ? (total * appliedCoupon.value) / 100
      : appliedCoupon.value
    : 0;
  const discount = Math.min(discountRaw, total);
  const finalTotal = Math.max(0, total - discount);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    if (name === "paymentMethod") {
      setForm((prev) => ({ ...prev, paymentMethod: value as PaymentMethod }));
      return;
    }
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleApplyCoupon() {
    const normalized = couponInput.trim().toUpperCase();
    if (!normalized) {
      setCouponErr("Enter a discount code.");
      setCouponMsg("");
      return;
    }
    const found = AVAILABLE_COUPONS[normalized];
    if (!found) {
      setCouponErr("Invalid code. Try SAVE10, WELCOME5, or WELLNESS15.");
      setCouponMsg("");
      return;
    }
    setAppliedCouponCode(normalized);
    setCouponErr("");
    setCouponMsg(`Applied ${normalized} (${found.label}).`);
  }

  function handleRemoveCoupon() {
    setAppliedCouponCode("");
    setCouponErr("");
    setCouponMsg("Discount removed.");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (items.length === 0) return;
    setStatus("loading");
    setErrMsg("");
    const paymentMethodToSave: PaymentMethod =
      !hasPhysicalProducts && form.paymentMethod === "pay_on_delivery"
        ? "pay_at_salon"
        : form.paymentMethod;
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
        total: finalTotal,
        paymentMethod: paymentMethodToSave,
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
          <div className="booking-journey mb-4">
            <span className="journey-step active">1. Pick Session / Package</span>
            <span className="journey-step active">2. Check Details</span>
            <span className="journey-step active">3. Checkout</span>
          </div>

          {items.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 0" }}>
              <p style={{ color: "#888", marginBottom: "1.5rem" }}>
                Your cart is empty.
              </p>
              <Link href="/services" className="vs-btn">
                Pick Session or Package
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
                    {hasPhysicalProducts
                      ? hasServicePackages
                        ? "Customer, Session & Delivery Details"
                        : "Billing & Delivery Details"
                      : "Customer & Session Details"}
                  </h3>

                  <p style={{ color: "#7a7a7a", marginBottom: "1rem", fontSize: "0.92rem" }}>
                    {hasPhysicalProducts
                      ? "Please provide your delivery address for product orders."
                      : "No delivery is needed for service sessions. We will confirm your booking details by phone or email."}
                  </p>

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
                    {hasPhysicalProducts ? (
                      <>
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
                      </>
                    ) : (
                      <div className="col-12">
                        <div
                          style={{
                            border: "1px solid #e0d8cc",
                            background: "#faf8f4",
                            padding: "0.85rem 1rem",
                            color: "#666",
                            fontSize: "0.9rem",
                          }}
                        >
                          Service sessions do not require a delivery address.
                        </div>
                      </div>
                    )}
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
                  <p style={{ color: "#7a7a7a", marginBottom: "1rem", fontSize: "0.9rem" }}>
                    {hasPhysicalProducts
                      ? "Choose how you want to pay. Mobile Money, pay-at-salon, and pay on delivery are supported."
                      : "Choose how you want to pay for your session. Mobile Money and pay-at-salon are supported."}
                  </p>
                  {[
                    ...(hasPhysicalProducts
                      ? [
                          {
                            value: "pay_on_delivery",
                            label: "Pay on Delivery",
                            desc: "Pay cash when your order arrives.",
                          },
                        ]
                      : []),
                    {
                      value: "pay_at_salon",
                      label: "Pay at Salon",
                      desc: hasPhysicalProducts
                        ? "Pick up and pay at our Accra location."
                        : "Pay when you arrive for your session at our Accra location.",
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
                    <p style={{ color: "#7a7a7a", fontSize: "0.85rem", marginBottom: "0.9rem" }}>
                      {hasPhysicalProducts
                        ? hasServicePackages
                          ? "Mixed order: service sessions and products."
                          : "Product order: delivery details required."
                        : "Service-only order: no delivery required."}
                    </p>
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
                        marginBottom: "1rem",
                      }}
                    >
                      <h4
                        style={{
                          fontFamily: "Marcellus, serif",
                          fontSize: "1rem",
                          marginBottom: "0.7rem",
                        }}
                      >
                        Discount Code
                      </h4>
                      <div style={{ display: "flex", gap: "0.5rem" }}>
                        <input
                          type="text"
                          value={couponInput}
                          onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
                          placeholder="Enter code"
                          style={{
                            flex: 1,
                            border: "1px solid #ddd1be",
                            padding: "0.55rem 0.65rem",
                            fontSize: "0.85rem",
                            textTransform: "uppercase",
                          }}
                        />
                        <button
                          type="button"
                          className="vs-btn style2"
                          style={{ padding: "0.45rem 0.85rem", minWidth: "88px" }}
                          onClick={handleApplyCoupon}
                        >
                          Apply
                        </button>
                      </div>
                      {appliedCoupon && (
                        <button
                          type="button"
                          onClick={handleRemoveCoupon}
                          style={{
                            marginTop: "0.55rem",
                            border: "none",
                            background: "transparent",
                            color: "#8a6d3b",
                            fontSize: "0.82rem",
                            padding: 0,
                          }}
                        >
                          Remove discount
                        </button>
                      )}
                      {couponErr && (
                        <p style={{ margin: "0.5rem 0 0", color: "#cc3a2a", fontSize: "0.8rem" }}>
                          {couponErr}
                        </p>
                      )}
                      {couponMsg && (
                        <p style={{ margin: "0.5rem 0 0", color: "#2d7a35", fontSize: "0.8rem" }}>
                          {couponMsg}
                        </p>
                      )}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "0.4rem",
                        color: "#666",
                        fontSize: "0.92rem",
                      }}
                    >
                      <span>Subtotal</span>
                      <span>{formatGHS(total)}</span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "0.85rem",
                        color: discount > 0 ? "#2d7a35" : "#666",
                        fontSize: "0.92rem",
                      }}
                    >
                      <span>Discount</span>
                      <span>{discount > 0 ? `- ${formatGHS(discount)}` : formatGHS(0)}</span>
                    </div>
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
                        {formatGHS(finalTotal)}
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
