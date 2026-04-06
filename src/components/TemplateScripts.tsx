"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    jQuery: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    $: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    WOW: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    UniversalParallax: any;
  }
}

/** Build a Slick options object from a carousel element's data attributes */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function buildSlickOptions($el: any, extraOpts: Record<string, unknown> = {}) {
  const $ = window.jQuery;

  const bool  = (key: string) => $el.data(key) === true || $el.data(key) === "true";
  const px    = (key: string, fallback = "0px") => ($el.data(key) as string | undefined) || fallback;
  const num   = (key: string, fallback: number) => parseInt(($el.data(key) as string | undefined) || String(fallback));

  const slideShow   = num("slide-show", 1);
  const arrows      = bool("arrows");
  const centerMode  = bool("center-mode");
  const fade        = bool("fade");
  const asNavFor    = ($el.data("asnavfor") as string | undefined) || undefined;

  // Center-padding per breakpoint
  const cpDefault = px("center-padding");
  const cpXl      = px("xl-center-padding",  cpDefault);
  const cpMl      = px("ml-center-padding",  cpXl);
  const cpLg      = px("lg-center-padding");
  const cpMd      = px("md-center-padding");
  const cpSm      = px("sm-center-padding");
  const cpXs      = px("xs-center-padding");

  // slidesToShow per breakpoint
  const lgShow = num("lg-slide-show", slideShow);
  const mdShow = num("md-slide-show", 1);

  return {
    slidesToShow : slideShow,
    arrows,
    dots         : false,
    fade,
    centerMode,
    centerPadding: cpDefault,
    asNavFor     : asNavFor || null,
    focusOnSelect: !!asNavFor,       // needed for nav-carousel items to be clickable
    ...extraOpts,
    responsive: [
      // ≥ 1600 uses default (cpDefault)
      { breakpoint: 1600, settings: { slidesToShow: slideShow, centerPadding: cpMl, centerMode } },
      { breakpoint: 1400, settings: { slidesToShow: lgShow,    centerPadding: cpXl, centerMode } },
      { breakpoint: 1200, settings: { slidesToShow: lgShow,    centerPadding: cpLg, centerMode: cpLg !== "0px" } },
      { breakpoint: 992,  settings: { slidesToShow: mdShow,    centerPadding: cpMd, centerMode: cpMd !== "0px" } },
      { breakpoint: 768,  settings: { slidesToShow: 1,         centerPadding: cpSm, centerMode: cpSm !== "0px" } },
      { breakpoint: 576,  settings: { slidesToShow: 1,         centerPadding: cpXs, centerMode: false } },
    ],
  };
}

export default function TemplateScripts() {
  const pathname = usePathname();

  useEffect(() => {
    const init = () => {
      const $ = window.jQuery;
      if (!$) return;

      // ── 1. Destroy existing Slick instances ───────────────────────────────
      $(".vs-carousel.slick-initialized").each(function (this: HTMLElement) {
        try { $(this).slick("unslick"); } catch { /* already gone */ }
      });

      // ── 2. data-bg-src backgrounds ────────────────────────────────────────
      $("[data-bg-src]").each(function (this: HTMLElement) {
        $(this).css("background-image", `url(${$(this).data("bg-src")})`);
      });

      // ── 3. data-parallax-image backgrounds ───────────────────────────────
      $("[data-parallax-image]").each(function (this: HTMLElement) {
        $(this).css({
          "background-image"   : `url(${$(this).data("parallax-image")})`,
          "background-size"    : "cover",
          "background-position": "center",
          position             : "absolute",
          inset                : 0,
          "z-index"            : 0,
        });
      });

      // ── 4. WOW.js ─────────────────────────────────────────────────────────
      if (window.WOW) {
        try {
          $(".wow").removeClass("animated").css("visibility", "");
          new window.WOW({ live: false }).init();
        } catch { /* not ready */ }
      }

      // ── 5. Parallax library ───────────────────────────────────────────────
      if (window.UniversalParallax) {
        try { new window.UniversalParallax().init({ speed: 5 }); } catch { /* not ready */ }
      }

      // ── 6. Hero carousel – special asNavFor pair ──────────────────────────
      //   Must init #herocontent FIRST so #heroimg can reference it via asNavFor.
      //   Add autoplay only to the main image slider, not the label nav.
      const $heroContent = $("#herocontent");
      const $heroImg     = $("#heroimg");

      if ($heroContent.length && $heroImg.length) {
        // Nav labels (herocontent) – no autoplay, focusOnSelect
        if (!$heroContent.hasClass("slick-initialized")) {
          try {
            $heroContent.slick({
              ...buildSlickOptions($heroContent),
              arrows       : false,
              focusOnSelect: true,
              asNavFor     : "#heroimg",
            });
          } catch { /* slick not ready */ }
        }

        // Main image slider – autoplay, synced to #herocontent
        if (!$heroImg.hasClass("slick-initialized")) {
          try {
            $heroImg.slick({
              ...buildSlickOptions($heroImg),
              autoplay     : true,
              autoplaySpeed: 5000,
              arrows       : true,
              asNavFor     : "#herocontent",
            });
          } catch { /* slick not ready */ }
        }
      }

      // ── 7. All other carousels ────────────────────────────────────────────
      $(".vs-carousel").each(function (this: HTMLElement) {
        // Skip the hero pair already handled above
        const id = $(this).attr("id");
        if (id === "heroimg" || id === "herocontent") return;
        if ($(this).hasClass("slick-initialized")) return;

        try {
          $(this).slick(buildSlickOptions($(this)));
        } catch { /* slick not ready */ }
      });

      // ── 8. Mobile menu ────────────────────────────────────────────────────
      $(".vs-menu-toggle")
        .off("click.vstpl")
        .on("click.vstpl", () => $(".vs-menu-wrapper").toggleClass("vs-body-visible"));

      $(".vs-menu-wrapper .vs-menu-toggle")
        .off("click.vstpl2")
        .on("click.vstpl2", () => $(".vs-menu-wrapper").removeClass("vs-body-visible"));

      $(".vs-mobile-menu a")
        .off("click.vstplnav")
        .on("click.vstplnav", () => $(".vs-menu-wrapper").removeClass("vs-body-visible"));

      // ── 9. Sticky header ──────────────────────────────────────────────────
      $(window)
        .off("scroll.vstplsticky")
        .on("scroll.vstplsticky", function () {
          $(window).scrollTop() as number > 100
            ? $(".sticky-active").addClass("sticky")
            : $(".sticky-active").removeClass("sticky");
        });

      // ── 10. Scroll-to-top button ──────────────────────────────────────────
      $(window)
        .off("scroll.vstplscrolltop")
        .on("scroll.vstplscrolltop", function () {
          $(window).scrollTop() as number > 500
            ? $(".scrollToTop").addClass("show")
            : $(".scrollToTop").removeClass("show");
        });

      $(".scrollToTop")
        .off("click.vstplscrolltop")
        .on("click.vstplscrolltop", (e: Event) => {
          e.preventDefault();
          $("html, body").animate({ scrollTop: 0 }, 600);
        });
    };

    // Poll until jQuery + slick are both ready, then init
    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      if (window.jQuery && window.jQuery.fn.slick) {
        clearInterval(interval);
        init();
      } else if (attempts > 40) {
        clearInterval(interval);
        if (window.jQuery) init();
      }
    }, 150);

    return () => clearInterval(interval);
  }, [pathname]);

  return null;
}
