import Link from "next/link";

interface BreadcrumbProps {
  title: string;
  links: { label: string; href?: string }[];
  bgImage?: string;
}

export default function Breadcrumb({
  title,
  links,
  bgImage = "/assets/img/img2.png",
}: BreadcrumbProps) {
  return (
    <div
      className="breadcumb-wrapper"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.28),rgba(0,0,0,0.22)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        padding: "100px 0 80px",
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="breadcumb-content text-center text-white">
          <h1
            className="breadcumb-title"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontFamily: "Marcellus, serif", textShadow: "0 2px 12px rgba(0,0,0,0.55)", color: "#fff" }}
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
