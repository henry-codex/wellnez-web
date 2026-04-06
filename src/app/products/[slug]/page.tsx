"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import { useCart } from "@/lib/cart-context";
import { getProductBySlug, getProducts } from "@/lib/firestore";
import { formatGHS } from "@/lib/utils";
import type { Product } from "@/types";

export default function ProductDetailPage() {
  const params = useParams<{ slug: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [related, setRelated] = useState<Product[]>([]);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    getProductBySlug(params.slug).then(setProduct);
    getProducts().then((all) =>
      setRelated(all.filter((p) => p.slug !== params.slug).slice(0, 4))
    );
  }, [params.slug]);

  if (!product) {
    return (
      <div
        style={{
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ color: "#888" }}>Loading…</p>
      </div>
    );
  }

  function handleAddToCart() {
    if (!product) return;
    addToCart(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  }

  return (
    <>
      <Breadcrumb
        title={product.title}
        links={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: product.title },
        ]}
        bgImage={product.imageUrl}
      />

      {/* ─── Product Detail ─────────────────────────────────── */}
      <section className="space-top space-bottom">
        <div className="container">
          <div className="row g-5 align-items-start">
            {/* Image */}
            <div className="col-lg-6">
              <div
                style={{
                  position: "relative",
                  height: 520,
                  borderRadius: 4,
                  overflow: "hidden",
                }}
              >
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Info */}
            <div className="col-lg-6">
              {product.category && (
                <span
                  style={{
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "var(--theme-color)",
                    display: "block",
                    marginBottom: "0.5rem",
                  }}
                >
                  {product.category}
                </span>
              )}
              <h1
                style={{
                  fontFamily: "Marcellus, serif",
                  fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                  marginBottom: "0.75rem",
                }}
              >
                {product.title}
              </h1>
              <p
                style={{
                  fontSize: "2rem",
                  color: "var(--theme-color)",
                  fontFamily: "Marcellus, serif",
                  marginBottom: "1.25rem",
                }}
              >
                {formatGHS(product.price)}
              </p>
              <p
                style={{
                  color: "#666",
                  lineHeight: 1.9,
                  fontSize: "1rem",
                  marginBottom: "2rem",
                }}
              >
                {product.description}
              </p>

              {/* Quantity */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                <label style={{ fontWeight: 600, minWidth: 70 }}>Qty:</label>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid #e0d8cc",
                  }}
                >
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    style={{
                      width: 40,
                      height: 44,
                      border: "none",
                      background: "#faf8f4",
                      cursor: "pointer",
                      fontSize: "1.2rem",
                    }}
                  >
                    −
                  </button>
                  <span
                    style={{
                      width: 50,
                      textAlign: "center",
                      fontWeight: 600,
                    }}
                  >
                    {qty}
                  </span>
                  <button
                    onClick={() => setQty((q) => q + 1)}
                    style={{
                      width: 40,
                      height: 44,
                      border: "none",
                      background: "#faf8f4",
                      cursor: "pointer",
                      fontSize: "1.2rem",
                    }}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to cart */}
              {added && (
                <div className="alert-success" style={{ marginBottom: "1rem" }}>
                  ✅ Added to cart!{" "}
                  <Link href="/cart" style={{ color: "#155724", fontWeight: 600 }}>
                    View Cart →
                  </Link>
                </div>
              )}
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <button
                  onClick={handleAddToCart}
                  className="vs-btn"
                  style={{ minWidth: 180 }}
                >
                  Add to Cart
                </button>
                <Link href="/cart" className="vs-btn style2">
                  View Cart
                </Link>
              </div>

              {/* Meta */}
              <div
                style={{
                  marginTop: "2rem",
                  padding: "1.25rem",
                  background: "#faf8f4",
                  border: "1px solid #e8dfc8",
                  fontSize: "0.875rem",
                  color: "#888",
                }}
              >
                <p style={{ margin: "0 0 0.4rem" }}>
                  <strong style={{ color: "#555" }}>Currency:</strong> Ghana
                  Cedis (GH₵)
                </p>
                {product.stock !== undefined && (
                  <p style={{ margin: 0 }}>
                    <strong style={{ color: "#555" }}>Availability:</strong>{" "}
                    {product.stock > 0
                      ? `${product.stock} in stock`
                      : "Out of stock"}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* ─── Related Products ───────────────────────────── */}
          {related.length > 0 && (
            <div style={{ marginTop: "80px" }}>
              <h3
                style={{
                  fontFamily: "Marcellus, serif",
                  fontSize: "1.75rem",
                  marginBottom: "2rem",
                }}
              >
                You May Also Like
              </h3>
              <div className="row g-4">
                {related.map((p) => (
                  <div className="col-md-3 col-sm-6" key={p.id}>
                    <Link
                      href={`/products/${p.slug}`}
                      style={{ textDecoration: "none" }}
                    >
                      <div className="product-card">
                        <div className="card-img-wrap" style={{ height: 200 }}>
                          <Image
                            src={p.imageUrl}
                            alt={p.title}
                            width={300}
                            height={200}
                            style={{
                              objectFit: "cover",
                              height: "100%",
                              width: "100%",
                            }}
                          />
                        </div>
                        <div className="card-body-inner">
                          <h4 className="card-title">{p.title}</h4>
                          <p className="card-price">{formatGHS(p.price)}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
