import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/lib/cart-context";
import TemplateScripts from "@/components/TemplateScripts";
import WhatsAppChatButton from "@/components/WhatsAppChatButton";

/* eslint-disable @next/next/no-css-tags */

export const metadata: Metadata = {
  title: "Smartsale Spa - Beauty & Wellness in Accra",
  description:
    "Smartsale Spa offers luxury massages, facials, body treatments and wellness products in the heart of Accra, Ghana. Book your appointment today.",
  keywords:
    "spa, wellness, massage, facial, body treatment, Accra, Ghana, beauty salon, smartsale",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/fontawesome.min.css" />
        <link rel="stylesheet" href="/assets/css/slick.min.css" />
        <link rel="stylesheet" href="/assets/css/jquery.datetimepicker.min.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppChatButton />
          <TemplateScripts />
        </CartProvider>

        {/* Scroll to top */}
        <a href="#" className="scrollToTop scroll-btn">
          <i className="far fa-arrow-up"></i>
        </a>

        <Script src="/assets/js/vendor/jquery-3.6.0.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/jquery-ui.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/slick.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/universal-parallax.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/wow.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.datetimepicker.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/imagesloaded.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/isotope.pkgd.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}

