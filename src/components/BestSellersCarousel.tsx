"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/types";

interface BestSellersCarouselProps {
  products: Product[];
  title?: string;
}

export default function BestSellersCarousel({
  products,
  title = "Best Sellers",
}: BestSellersCarouselProps) {
  const { addToCart } = useCart();
  const [lastAdded, setLastAdded] = useState<string | null>(null);

  function handleAddToCart(product: Product) {
    addToCart(product, 1);
    setLastAdded(product.id);
    setTimeout(() => setLastAdded(null), 1500);
  }

  if (!products.length) return null;

  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-auto">
          <h2 className="sec-title mb-n2">{title}</h2>
        </div>
        <div className="col align-self-end">
          <div className="sec-line pb-1"></div>
        </div>
      </div>
      <div
        className="row vs-carousel"
        data-slide-show="4"
        data-ml-slide-show="3"
        data-lg-slide-show="3"
        data-md-slide-show="2"
        data-sm-slide-show="1"
      >
        {products.map((product) => (
          <div className="col-xl-3" key={product.id}>
            <div className="vs-product product-style1">
              <div className="product-img">
                <Link href={`/products/${product.slug}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-100"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/assets/img/product/p-2-1.png";
                    }}
                  />
                </Link>
                <div className="actions">
                  <button type="button" className="icon-btn" aria-label="Save item">
                    <i className="far fa-heart"></i>
                  </button>
                  <Link
                    href={`/products/${product.slug}`}
                    className="icon-btn"
                    aria-label={`View ${product.title}`}
                  >
                    <i className="far fa-eye"></i>
                  </Link>
                  <button
                    type="button"
                    className="vs-btn style4"
                    onClick={() => handleAddToCart(product)}
                  >
                    {lastAdded === product.id ? "Added" : "Add To Cart"}
                  </button>
                </div>
              </div>
              <div className="product-body">
                <div className="product-content">
                  <h3 className="product-title">
                    <Link className="text-inherit" href={`/products/${product.slug}`}>
                      {product.title}
                    </Link>
                  </h3>
                  <div className="product-category">
                    <Link href="/products">{product.category ?? "Spa"}</Link>
                  </div>
                </div>
                <span className="product-price">GHS {product.price.toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
