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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    universalParallax: any;
  }
}

type JQueryLike = NonNullable<typeof window.jQuery>;

function getJQuery(): JQueryLike | null {
  return window.jQuery || window.$ || null;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function buildSlickOptions($el: any, extraOpts: Record<string, unknown> = {}) {
  const bool = (key: string, fallback = false) => {
    const value = $el.data(key);
    if (value === undefined) return fallback;
    return value === true || value === "true" || value === 1;
  };

  const stringValue = (key: string, fallback = "") => {
    const value = $el.data(key);
    return value === undefined || value === null || value === "" ? fallback : String(value);
  };

  const numberValue = (key: string, fallback: number) => {
    const value = $el.data(key);
    if (value === undefined || value === null || value === "") return fallback;
    const parsed = Number(value);
    return Number.isNaN(parsed) ? fallback : parsed;
  };

  const iconClass = (key: string, fallback: string) => {
    const value = stringValue(key, fallback).trim();
    return value || fallback;
  };

  const slideShow = numberValue("slide-show", 1);
  const defaultCenterPadding = stringValue("center-padding", "0px");
  const asNavFor = stringValue("asnavfor", "");
  const prevArrowIcon = iconClass("prev-arrow", "fas fa-chevron-left");
  const nextArrowIcon = iconClass("next-arrow", "fas fa-chevron-right");

  return {
    dots: bool("dots"),
    fade: bool("fade"),
    arrows: bool("arrows"),
    speed: numberValue("speed", 1000),
    asNavFor: asNavFor || undefined,
    autoplay: bool("autoplay", true),
    infinite: bool("infinite", true),
    slidesToShow: slideShow,
    adaptiveHeight: bool("adaptive-height"),
    centerMode: bool("center-mode"),
    centerPadding: defaultCenterPadding,
    focusOnSelect: bool("focuson-select", !!asNavFor),
    pauseOnFocus: bool("pauseon-focus"),
    pauseOnHover: bool("pauseon-hover"),
    variableWidth: bool("variable-width"),
    vertical: bool("vertical"),
    verticalSwiping: bool("vertical"),
    autoplaySpeed: numberValue("autoplay-speed", 8000),
    prevArrow: `<button type="button" class="slick-prev"><i class="${prevArrowIcon}"></i></button>`,
    nextArrow: `<button type="button" class="slick-next"><i class="${nextArrowIcon}"></i></button>`,
    rtl: typeof document !== "undefined" && document.documentElement.getAttribute("dir") === "rtl",
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          arrows: bool("xl-arrows"),
          dots: bool("xl-dots"),
          slidesToShow: numberValue("xl-slide-show", slideShow),
          centerMode: bool("xl-center-mode"),
          centerPadding: stringValue("xl-center-padding", "0"),
        },
      },
      {
        breakpoint: 1400,
        settings: {
          arrows: bool("ml-arrows"),
          dots: bool("ml-dots"),
          slidesToShow: numberValue("ml-slide-show", slideShow),
          centerMode: bool("ml-center-mode"),
          centerPadding: stringValue("ml-center-padding", "0"),
        },
      },
      {
        breakpoint: 1200,
        settings: {
          arrows: bool("lg-arrows"),
          dots: bool("lg-dots"),
          slidesToShow: numberValue("lg-slide-show", slideShow),
          centerMode: bool("lg-center-mode"),
          centerPadding: stringValue("lg-center-padding", "0"),
        },
      },
      {
        breakpoint: 992,
        settings: {
          arrows: bool("md-arrows"),
          dots: bool("md-dots"),
          slidesToShow: numberValue("md-slide-show", 1),
          centerMode: bool("md-center-mode"),
          centerPadding: stringValue("md-center-padding", "0"),
        },
      },
      {
        breakpoint: 767,
        settings: {
          arrows: bool("sm-arrows"),
          dots: bool("sm-dots"),
          slidesToShow: numberValue("sm-slide-show", 1),
          centerMode: bool("sm-center-mode"),
          centerPadding: stringValue("sm-center-padding", "0"),
        },
      },
      {
        breakpoint: 576,
        settings: {
          arrows: bool("xs-arrows"),
          dots: bool("xs-dots"),
          slidesToShow: numberValue("xs-slide-show", 1),
          centerMode: bool("xs-center-mode"),
          centerPadding: stringValue("xs-center-padding", "0"),
        },
      },
    ],
    ...extraOpts,
  };
}

function destroySlickCarousels($: JQueryLike) {
  $(".vs-carousel.slick-initialized").each(function (this: HTMLElement) {
    try {
      $(this).slick("unslick");
    } catch {
      // Ignore partially destroyed instances.
    }
  });
}

function cleanupTemplateState($: JQueryLike) {
  destroySlickCarousels($);

  $(window).off(".vstpl");
  $(document).off(".vstpl");

  $(".scrollToTop").off(".vstpl").removeClass("show");
  $(".vs-menu-toggle, .vs-mobile-menu a, .vs-mean-expand").off(".vstpl");
  $(".searchBoxTggler, .searchClose, .popup-search-box, .popup-search-box form").off(".vstpl");
  $("[data-slick-next], [data-slick-prev]").off(".vstpl");
  $(".accordion-button").off(".vstpl");
  $(".vs-menu-wrapper").removeClass("vs-body-visible");
  $(".popup-search-box").removeClass("show");
  $(".sticky-active").removeClass("active sticky");
  $(".sticky-wrap, .sticky-active").parent().removeClass("will-sticky").css("min-height", "");
}

function initBackgrounds($: JQueryLike) {
  $("[data-bg-src]").each(function (this: HTMLElement) {
    const src = String($(this).attr("data-bg-src") || "");
    if (src) {
      $(this).css("background-image", `url(${src})`);
    }
  });

  $("[data-mask-src]").each(function (this: HTMLElement) {
    const src = String($(this).attr("data-mask-src") || "");
    if (src) {
      $(this).css({
        maskImage: `url(${src})`,
        WebkitMaskImage: `url(${src})`,
      });
    }
  });

  $("[data-parallax-image]").each(function (this: HTMLElement) {
    const src = String($(this).attr("data-parallax-image") || "");
    if (src) {
      $(this).css({
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      });
    }
  });
}

function initShapeMockups($: JQueryLike) {
  $(".shape-mockup").each(function (this: HTMLElement) {
    const $shape = $(this);

    $shape.css({
      top: $shape.attr("data-top") || "",
      right: $shape.attr("data-right") || "",
      bottom: $shape.attr("data-bottom") || "",
      left: $shape.attr("data-left") || "",
    });

    $shape.parent().addClass("shape-mockup-wrap");
  });
}

function initWow($: JQueryLike) {
  if (!window.WOW) {
    $(".wow").css({ visibility: "visible", animationName: "none" });
    return;
  }

  try {
    $(".wow")
      .removeClass("animated wow-animated")
      .css({ visibility: "", animationName: "" });

    new window.WOW({
      boxClass: "wow",
      animateClass: "wow-animated",
      offset: 0,
      mobile: false,
      live: false,
      scrollContainer: null,
      resetAnimation: false,
    }).init();
  } catch {
    $(".wow").css({ visibility: "visible", animationName: "none" });
  }
}

function initParallax() {
  try {
    if (window.UniversalParallax) {
      new window.UniversalParallax().init({ speed: 5 });
      return;
    }

    if (window.universalParallax) {
      new window.universalParallax().init();
    }
  } catch {
    // Parallax is decorative. Ignore failures.
  }
}

function initMobileMenu($: JQueryLike) {
  const wrapper = ".vs-menu-wrapper";
  const bodyVisibleClass = "vs-body-visible";

  $(".vs-mobile-menu li").each(function (this: HTMLElement) {
    const $item = $(this);
    const $subMenu = $item.children("ul");

    if (!$subMenu.length) return;

    $subMenu.addClass("vs-submenu").css("display", "none");
    $item.addClass("vs-item-has-children");

    const $link = $item.children("a").first();
    if ($link.find(".vs-mean-expand").length === 0) {
      $link.append('<span class="vs-mean-expand"></span>');
    }
  });

  $(".vs-menu-toggle, .sideMenuToggler")
    .off("click.vstpl")
    .on("click.vstpl", function (event: Event) {
      event.preventDefault();
      $(wrapper).toggleClass(bodyVisibleClass);
    });

  $(".vs-mobile-menu a")
    .off("click.vstpl")
    .on("click.vstpl", function (this: HTMLElement) {
      const $link = $(this);
      if ($link.next("ul").length === 0) {
        $(wrapper).removeClass(bodyVisibleClass);
      }
    });

  $(".vs-mean-expand")
    .off("click.vstpl")
    .on("click.vstpl", function (this: HTMLElement, event: Event) {
      event.preventDefault();
      event.stopPropagation();

      const $parent = $(this).closest("li");
      const $submenu = $parent.children("ul");

      $parent.toggleClass("vs-active");
      $submenu.stop(true, true).slideToggle(400).toggleClass("vs-open");
    });
}

function initStickyHeader($: JQueryLike) {
  const updateSticky = () => {
    const $menu = $(".sticky-active");
    if (!$menu.length) return;

    const scrollTop = Number($(window).scrollTop() || 0);
    const height = $menu.outerHeight();
    const $parent = $menu.parent();

    if (height) {
      $parent.css("min-height", `${height}px`);
    }

    if (scrollTop > 800) {
      $parent.addClass("will-sticky");
      $menu.addClass("active sticky");
    } else {
      $parent.removeClass("will-sticky").css("min-height", "");
      $menu.removeClass("active sticky");
    }
  };

  $(window).off("scroll.vstplsticky").on("scroll.vstplsticky", updateSticky);
  updateSticky();
}

function initScrollToTop($: JQueryLike) {
  const updateScrollButton = () => {
    const scrollTop = Number($(window).scrollTop() || 0);
    $(".scrollToTop").toggleClass("show", scrollTop > 500);
  };

  $(window).off("scroll.vstplscrolltop").on("scroll.vstplscrolltop", updateScrollButton);
  $(".scrollToTop")
    .off("click.vstplscrolltop")
    .on("click.vstplscrolltop", function (event: Event) {
      event.preventDefault();
      $("html, body").stop(true).animate({ scrollTop: 0 }, 600);
    });

  updateScrollButton();
}

function initSearchPopup($: JQueryLike) {
  $(".searchBoxTggler")
    .off("click.vstpl")
    .on("click.vstpl", function (event: Event) {
      event.preventDefault();
      $(".popup-search-box").addClass("show");
    });

  $(".popup-search-box")
    .off("click.vstpl")
    .on("click.vstpl", function (this: HTMLElement) {
      $(this).removeClass("show");
    });

  $(".popup-search-box form")
    .off("click.vstpl")
    .on("click.vstpl", function (event: Event) {
      event.stopPropagation();
    });

  $(".searchClose")
    .off("click.vstpl")
    .on("click.vstpl", function (event: Event) {
      event.preventDefault();
      $(".popup-search-box").removeClass("show");
    });
}

function initAccordion($: JQueryLike) {
  $(".accordion-button")
    .off("click.vstpl")
    .on("click.vstpl", function (this: HTMLElement) {
      $(this).closest(".accordion-item").toggleClass("active").siblings().removeClass("active");
    });
}

function initDatePickers($: JQueryLike) {
  if (!$.fn.datetimepicker) return;

  $(".dateTime-pick").datetimepicker({
    timepicker: true,
    datepicker: true,
    format: "y-m-d H:i",
    hours12: false,
    step: 30,
  });

  $(".date-pick").datetimepicker({
    timepicker: false,
    datepicker: true,
    format: "m-d-y",
    step: 10,
  });

  $(".time-pick").datetimepicker({
    datepicker: false,
    timepicker: true,
    format: "H:i",
    hours12: false,
    step: 10,
  });
}

function initSlickArrowBindings($: JQueryLike) {
  $("[data-slick-next]")
    .off("click.vstpl")
    .on("click.vstpl", function (this: HTMLElement, event: Event) {
      event.preventDefault();
      const selector = $(this).data("slick-next");
      if (selector && $(selector).hasClass("slick-initialized")) {
        $(selector).slick("slickNext");
      }
    });

  $("[data-slick-prev]")
    .off("click.vstpl")
    .on("click.vstpl", function (this: HTMLElement, event: Event) {
      event.preventDefault();
      const selector = $(this).data("slick-prev");
      if (selector && $(selector).hasClass("slick-initialized")) {
        $(selector).slick("slickPrev");
      }
    });
}

function initCarousels($: JQueryLike) {
  const $heroContent = $("#herocontent");
  const $heroImg = $("#heroimg");

  if ($heroContent.length && !$heroContent.hasClass("slick-initialized")) {
    $heroContent.slick(
      buildSlickOptions($heroContent, {
        arrows: false,
        asNavFor: "#heroimg",
        focusOnSelect: true,
      }),
    );
  }

  if ($heroImg.length && !$heroImg.hasClass("slick-initialized")) {
    $heroImg.slick(
      buildSlickOptions($heroImg, {
        arrows: true,
        asNavFor: "#herocontent",
        autoplay: true,
        autoplaySpeed: 5000,
      }),
    );
  }

  $(".vs-carousel").each(function (this: HTMLElement) {
    const $carousel = $(this);
    const id = $carousel.attr("id");

    if (id === "heroimg" || id === "herocontent") return;
    if ($carousel.hasClass("slick-initialized")) return;

    try {
      $carousel.slick(buildSlickOptions($carousel));
    } catch {
      // Skip if slick is not available for this route yet.
    }
  });

  initSlickArrowBindings($);
}

export default function TemplateScripts() {
  const pathname = usePathname();

  useEffect(() => {
    const runInit = () => {
      const $ = getJQuery();
      if (!$) return false;

      cleanupTemplateState($);
      initBackgrounds($);
      initShapeMockups($);
      initMobileMenu($);
      initStickyHeader($);
      initScrollToTop($);
      initSearchPopup($);
      initAccordion($);
      initDatePickers($);
      initWow($);
      initParallax();

      if ($.fn.slick) {
        initCarousels($);
      }

      return true;
    };

    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      if (runInit()) {
        clearInterval(interval);
      } else if (attempts > 40) {
        clearInterval(interval);
      }
    }, 150);

    return () => {
      clearInterval(interval);

      const $ = getJQuery();
      if ($) {
        cleanupTemplateState($);
      }
    };
  }, [pathname]);

  return null;
}
