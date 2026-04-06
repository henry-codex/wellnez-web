import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#faf8f4",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "8rem",
            fontFamily: "Marcellus, serif",
            color: "var(--theme-color)",
            lineHeight: 1,
            marginBottom: "0",
          }}
        >
          404
        </h1>
        <h2
          style={{
            fontFamily: "Marcellus, serif",
            fontSize: "2rem",
            color: "#1a1a1a",
            marginBottom: "1rem",
          }}
        >
          Page Not Found
        </h2>
        <p style={{ color: "#888", marginBottom: "2rem", maxWidth: 400 }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="vs-btn">
            Back to Home
          </Link>
          <Link href="/contact" className="vs-btn style2">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
