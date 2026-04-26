"use client";

import Link from "next/link";
import type { Product } from "@/types";

interface PackageBookingActionsProps {
  product: Product;
  primaryClassName?: string;
}

export default function PackageBookingActions({
  product,
  primaryClassName = "vs-btn style3",
}: PackageBookingActionsProps) {
  const detailHref =
    product.category === "Service Package"
      ? `/services/${product.slug.replace(/^package-/, "")}`
      : `/products/${product.slug}`;

  return (
    <div className="booking-flow-actions">
      <Link href={detailHref} className={primaryClassName}>
        Pick Package
      </Link>
      <Link href="/checkout" className="vs-btn style2">
        Checkout
      </Link>
      <Link href={detailHref} className="flow-link">
        Check Details
      </Link>
    </div>
  );
}
