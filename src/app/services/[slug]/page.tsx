"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import { getServiceBySlug, getServices } from "@/lib/firestore";
import { formatGHS } from "@/lib/utils";
import type { Service } from "@/types";

export default function ServiceDetailPage() {
  const params = useParams<{ slug: string }>();
  const [service, setService] = useState<Service | null>(null);
  const [related, setRelated] = useState<Service[]>([]);

  useEffect(() => {
    getServiceBySlug(params.slug).then(setService);
    getServices().then((all) =>
      setRelated(all.filter((s) => s.slug !== params.slug).slice(0, 3))
    );
  }, [params.slug]);

  if (!service) {
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

  return (
    <>
      <Breadcrumb
        title={service.name}
        links={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
        bgImage={
          service.imageUrl ??
          "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1400&q=80"
        }
      />

      <section className="space-top space-bottom">
        <div className="container">
          <div className="row g-5 align-items-start">
            {/* Image */}
            <div className="col-lg-6">
              {service.imageUrl && (
                <div
                  style={{
                    position: "relative",
                    height: 480,
                    borderRadius: 4,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={service.imageUrl}
                    alt={service.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              )}
            </div>

            {/* Info */}
            <div className="col-lg-6">
              <span className="sec-subtitle">Service Detail</span>
              <h1
                style={{
                  fontFamily: "Marcellus, serif",
                  fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                  marginBottom: "1rem",
                }}
              >
                {service.name}
              </h1>

              <div
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  marginBottom: "1.5rem",
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    padding: "0.75rem 1.5rem",
                    background: "#faf8f4",
                    border: "1px solid #e8dfc8",
                    textAlign: "center",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      fontSize: "1.5rem",
                      color: "var(--theme-color)",
                      fontFamily: "Marcellus, serif",
                    }}
                  >
                    {formatGHS(service.price)}
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "#aaa" }}>
                    Price (GHS)
                  </span>
                </div>
                <div
                  style={{
                    padding: "0.75rem 1.5rem",
                    background: "#faf8f4",
                    border: "1px solid #e8dfc8",
                    textAlign: "center",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      fontSize: "1.5rem",
                      color: "var(--theme-color)",
                      fontFamily: "Marcellus, serif",
                    }}
                  >
                    {service.duration}
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "#aaa" }}>
                    Duration
                  </span>
                </div>
              </div>

              <p
                style={{
                  color: "#666",
                  lineHeight: 1.9,
                  fontSize: "1rem",
                  marginBottom: "2rem",
                }}
              >
                {service.description}
              </p>

              <ul
                style={{
                  color: "#666",
                  lineHeight: 2,
                  paddingLeft: "1.25rem",
                  marginBottom: "2rem",
                }}
              >
                <li>Performed by certified wellness professionals</li>
                <li>Natural, ethically sourced products only</li>
                <li>Tailored to your skin type and preferences</li>
                <li>Private, tranquil treatment rooms</li>
              </ul>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/appointment" className="vs-btn">
                  Book This Service
                </Link>
                <Link href="/services" className="vs-btn style2">
                  All Services
                </Link>
              </div>
            </div>
          </div>

          {/* Related Services */}
          {related.length > 0 && (
            <div style={{ marginTop: 80 }}>
              <h3
                style={{
                  fontFamily: "Marcellus, serif",
                  fontSize: "1.75rem",
                  marginBottom: "2rem",
                }}
              >
                Other Services You Might Like
              </h3>
              <div className="row g-4">
                {related.map((s) => (
                  <div className="col-md-4" key={s.id}>
                    <div className="service-card">
                      {s.imageUrl && (
                        <div className="card-img-wrap" style={{ height: 220 }}>
                          <Image
                            src={s.imageUrl}
                            alt={s.name}
                            width={400}
                            height={220}
                            style={{
                              objectFit: "cover",
                              height: "100%",
                              width: "100%",
                            }}
                          />
                        </div>
                      )}
                      <div className="card-body-inner">
                        <h4 className="card-title">{s.name}</h4>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <span className="card-price">
                            {formatGHS(s.price)}
                          </span>
                          <Link
                            href={`/services/${s.slug}`}
                            style={{
                              color: "var(--theme-color)",
                              fontSize: "0.85rem",
                              textDecoration: "none",
                            }}
                          >
                            View →
                          </Link>
                        </div>
                      </div>
                    </div>
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
