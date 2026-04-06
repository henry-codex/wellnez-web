"use client";

import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { useCart } from "@/lib/cart-context";
import { formatGHS } from "@/lib/utils";

export default function CartPage() {
  const { items, total, updateQuantity, removeFromCart, clearCart } = useCart();

  return (
    <>
      <Breadcrumb
        title="Your Cart"
        links={[{ label: "Home", href: "/" }, { label: "Cart" }]}
        bgImage="https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=1400&q=80"
      />

      <section className="space-top space-bottom">
        <div className="container">
          {items.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 0" }}>
              <p
                style={{
                  fontSize: "1.2rem",
                  color: "#888",
                  marginBottom: "2rem",
                }}
              >
                Your cart is empty.
              </p>
              <Link href="/products" className="vs-btn">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="row g-5">
              {/* Cart Items */}
              <div className="col-lg-8">
                <table className="cart-table" style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Subtotal</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.product.id}>
                        <td>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "1rem",
                            }}
                          >
                            <div
                              style={{
                                position: "relative",
                                width: 72,
                                height: 72,
                                flexShrink: 0,
                                borderRadius: 2,
                                overflow: "hidden",
                              }}
                            >
                              <Image
                                src={item.product.imageUrl}
                                alt={item.product.title}
                                fill
                                style={{ objectFit: "cover" }}
                              />
                            </div>
                            <div>
                              <Link
                                href={`/products/${item.product.slug}`}
                                style={{
                                  fontFamily: "Marcellus, serif",
                                  color: "#1a1a1a",
                                  textDecoration: "none",
                                  fontSize: "0.95rem",
                                }}
                              >
                                {item.product.title}
                              </Link>
                              {item.product.category && (
                                <span
                                  style={{
                                    display: "block",
                                    fontSize: "0.75rem",
                                    color: "#aaa",
                                  }}
                                >
                                  {item.product.category}
                                </span>
                              )}
                            </div>
                          </div>
                        </td>
                        <td style={{ color: "var(--theme-color)", fontWeight: 600 }}>
                          {formatGHS(item.product.price)}
                        </td>
                        <td>
                          <div style={{ display: "flex", alignItems: "center", border: "1px solid #e0d8cc", width: "fit-content" }}>
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.quantity - 1
                                )
                              }
                              style={{
                                width: 34,
                                height: 36,
                                border: "none",
                                background: "#faf8f4",
                                cursor: "pointer",
                              }}
                            >
                              −
                            </button>
                            <span
                              style={{
                                width: 40,
                                textAlign: "center",
                                fontWeight: 600,
                                fontSize: "0.9rem",
                              }}
                            >
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.quantity + 1
                                )
                              }
                              style={{
                                width: 34,
                                height: 36,
                                border: "none",
                                background: "#faf8f4",
                                cursor: "pointer",
                              }}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td style={{ fontWeight: 600 }}>
                          {formatGHS(item.product.price * item.quantity)}
                        </td>
                        <td>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            style={{
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                              color: "#cc0000",
                              fontSize: "1.1rem",
                            }}
                            title="Remove"
                          >
                            ✕
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div
                  style={{
                    marginTop: "1.5rem",
                    display: "flex",
                    gap: "1rem",
                    flexWrap: "wrap",
                  }}
                >
                  <Link href="/products" className="vs-btn style2">
                    ← Continue Shopping
                  </Link>
                  <button
                    onClick={clearCart}
                    className="vs-btn"
                    style={{ background: "#888" }}
                  >
                    Clear Cart
                  </button>
                </div>
              </div>

              {/* Summary */}
              <div className="col-lg-4">
                <div
                  style={{
                    background: "#faf8f4",
                    border: "1px solid #e8dfc8",
                    padding: "2rem",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "Marcellus, serif",
                      fontSize: "1.4rem",
                      marginBottom: "1.5rem",
                      borderBottom: "1px solid #e8dfc8",
                      paddingBottom: "0.75rem",
                    }}
                  >
                    Order Summary
                  </h3>
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "0.6rem",
                        fontSize: "0.9rem",
                        color: "#666",
                      }}
                    >
                      <span>
                        {item.product.title} × {item.quantity}
                      </span>
                      <span>{formatGHS(item.product.price * item.quantity)}</span>
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
                      fontSize: "1.2rem",
                    }}
                  >
                    <span>Total</span>
                    <span style={{ color: "var(--theme-color)" }}>
                      {formatGHS(total)}
                    </span>
                  </div>
                  <Link
                    href="/checkout"
                    className="vs-btn"
                    style={{
                      display: "block",
                      textAlign: "center",
                      marginTop: "1.5rem",
                      width: "100%",
                    }}
                  >
                    Proceed to Checkout
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
