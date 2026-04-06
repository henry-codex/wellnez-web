import Link from "next/link";

interface BreadcrumbProps {
  title: string;
  links: { label: string; href?: string }[];
  bgImage?: string;
}

export default function Breadcrumb({
  title,
  links,
  bgImage = "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1400&q=80",
}: BreadcrumbProps) {
  return (
    <div
      className="breadcumb-wrapper"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        padding: "100px 0 80px",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.55)",
        }}
      />
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="breadcumb-content text-center text-white">
          <h1
            className="breadcumb-title"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontFamily: "Marcellus, serif" }}
          >
            {title}
          </h1>
          <ul
            className="breadcumb-menu"
            style={{
              listStyle: "none",
              padding: 0,
              display: "flex",
              justifyContent: "center",
              gap: "0.5rem",
              marginTop: "1rem",
            }}
          >
            {links.map((l, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: i === links.length - 1 ? "#b89c6e" : "rgba(255,255,255,0.75)",
                }}
              >
                {i > 0 && <span style={{ color: "rgba(255,255,255,0.4)" }}>/</span>}
                {l.href ? (
                  <Link
                    href={l.href}
                    style={{
                      color: "rgba(255,255,255,0.75)",
                      textDecoration: "none",
                    }}
                  >
                    {l.label}
                  </Link>
                ) : (
                  <span>{l.label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
