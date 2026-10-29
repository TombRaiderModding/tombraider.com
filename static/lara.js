(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4677],
  {
    4448: (e, t, r) => {
      "use strict";
      r.a(e, async (e, a) => {
        try {
          r.d(t, { A: () => f });
          var l = r(2183),
            s = r(75109),
            i = r(36439),
            o = r(15013),
            n = r.n(o),
            c = r(68456),
            d = r(46728),
            u = r.n(d),
            m = r(64171),
            p = r(92642),
            h = r(94536),
            g = e([s, p]);
          function f(e) {
            let { products: t, title: r, description: a, isHome: s } = e,
              [o, c] = (0, i.useState)(null);
            return (0, l.jsxs)("div", {
              className:
                "flex w-full flex-col items-stretch overflow-x-hidden py-10",
              children: [
                (0, l.jsxs)("div", {
                  className: s
                    ? "flex flex-col flex-wrap justify-between self-stretch px-8 pb-12 lg:flex-row lg:px-16"
                    : "flex w-full flex-col flex-wrap justify-between gap-y-8 px-6 pb-8 lg:flex-row lg:items-end lg:px-12 lg:pb-12",
                  children: [
                    s
                      ? (0, l.jsxs)("div", {
                          className:
                            "flex flex-col flex-wrap items-center gap-x-8 gap-y-4 pb-4 lg:flex-row lg:pb-0",
                          children: [
                            (0, l.jsx)("h2", {
                              className:
                                "text-4xl text-black sm:text-5xl lg:text-6xl",
                              children: r,
                            }),
                            (0, l.jsx)(u(), {
                              href: "/products/games",
                              children: (0, l.jsx)(m.A, {
                                variant: "dark",
                                children: "All Games",
                              }),
                            }),
                          ],
                        })
                      : (0, l.jsxs)("div", {
                          className:
                            "flex flex-col gap-y-4 text-center lg:gap-y-1 lg:text-left",
                          children: [
                            (0, l.jsx)("h2", {
                              className:
                                "text-3xl font-medium text-black lg:text-4xl",
                              children: r,
                            }),
                            (0, l.jsx)("p", {
                              className: "text-sm",
                              children: a,
                            }),
                          ],
                        }),
                    t.length > 0 &&
                      (0, l.jsxs)("div", {
                        className: "hidden gap-x-2 lg:flex",
                        children: [
                          (0, l.jsx)(n(), {
                            width: 48,
                            height: 48,
                            alt: "Left arrow",
                            src: "/images/arrow-button-left.svg",
                            className: "mr-2 cursor-pointer",
                            onClick: () => o?.slidePrev(),
                          }),
                          (0, l.jsx)(n(), {
                            width: 48,
                            height: 48,
                            alt: "Right arrow",
                            onClick: () => o?.slideNext(),
                            src: "/images/arrow-button-right.svg",
                            className: "cursor-pointer",
                          }),
                        ],
                      }),
                  ],
                }),
                (0, l.jsx)("div", {
                  className: "px-8 lg:px-16",
                  children: (0, l.jsx)(h.RC, {
                    className: "swiper-show-overflow relative flex w-full",
                    slidesPerView: 1.25,
                    centeredSlides: !0,
                    breakpoints: {
                      640: { slidesPerView: 3, centeredSlides: !1 },
                      1024: { slidesPerView: 5, centeredSlides: !1 },
                    },
                    spaceBetween: 16,
                    rewind: !0,
                    onSwiper: (e) => c(e),
                    children: t.map((e) =>
                      (0, l.jsx)(
                        h.qr,
                        {
                          className: "relative max-w-none shrink-0",
                          style: { width: 300 },
                          children: (0, l.jsx)(x, { product: e }),
                        },
                        e.slug,
                      ),
                    ),
                  }),
                }),
              ],
            });
          }
          function x({ product: e }) {
            return (0, l.jsx)("div", {
              className:
                "group aspect-[2/3] h-auto w-full cursor-pointer shadow-[0_10px_48px_-16px_rgba(0,0,0,1)]",
              children: (0, l.jsxs)(u(), {
                href: `/products/${e.category?.fields.slug}/${e.slug}`,
                children: [
                  (0, l.jsx)(n(), {
                    fill: !0,
                    alt: (0, s.a9f)(e)?.fields.image?.fields.description ?? "",
                    src: `${(0, p._c)((0, s.a9f)(e)?.fields.image?.fields.file?.url)}?fit=fill&w=300&h=450`,
                    className:
                      "absolute top-0 left-0 h-full w-auto object-cover",
                    sizes: "900px",
                  }),
                  (0, l.jsx)(n(), {
                    fill: !0,
                    alt: "game card overlay",
                    src: "/images/vertical-game-card-overlay.webp",
                    className: "object-contain object-[center_175%] opacity-80",
                    sizes: "900px",
                  }),
                  (0, l.jsxs)("div", {
                    className:
                      "absolute bottom-0 h-auto w-full px-4 pb-4 text-white group-hover:bottom-2",
                    style: { transition: "0.4s all ease" },
                    children: [
                      (0, l.jsx)("p", {
                        className: "text-xl font-bold",
                        children: e.title,
                      }),
                      (0, l.jsxs)("div", {
                        className: "relative my-2 h-[3px] w-full",
                        children: [
                          (0, l.jsx)("img", {
                            className:
                              "absolute top-0 left-0 h-full w-full object-fill opacity-100 group-hover:opacity-100",
                            src: "/images/product-divider.svg",
                            alt: "product divider",
                            style: { transition: "all 0.4s ease" },
                          }),
                          (0, l.jsx)("img", {
                            className:
                              "absolute top-0 left-0 h-full w-full object-fill opacity-0 group-hover:opacity-100",
                            alt: "product divider highlighted",
                            src: "/images/product-divider-highlighted.svg",
                            style: { transition: "all 0.4s ease" },
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [
                          (0, l.jsx)("p", {
                            className: "text-sm",
                            children: (0, c.Cp)(e.releaseDate),
                          }),
                          (0, l.jsx)("div", {
                            className: "flex gap-x-2",
                            children: e.ctaButtons?.map((e, t) =>
                              (0, l.jsx)(
                                n(),
                                {
                                  width: 16,
                                  height: 16,
                                  alt: "cta button",
                                  src: (0, p._c)(
                                    e?.fields.ctaButton?.fields.icon?.fields
                                      .file?.url,
                                  ),
                                },
                                e?.sys.id || t,
                              ),
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsx)(n(), {
                    className:
                      "absolute bottom-4 left-4 opacity-0 group-hover:bottom-1 group-hover:left-1 group-hover:opacity-60",
                    width: 24,
                    height: 24,
                    alt: "bottom left bracket",
                    src: "/images/small-bottom-left-bracket.svg",
                    style: { transition: "0.4s all ease" },
                  }),
                  (0, l.jsx)(n(), {
                    className:
                      "absolute right-4 bottom-4 opacity-0 group-hover:right-1 group-hover:bottom-1 group-hover:opacity-60",
                    width: 24,
                    height: 24,
                    alt: "bottom right bracket",
                    src: "/images/small-bottom-right-bracket.svg",
                    style: { transition: "0.4s all ease" },
                  }),
                  (0, l.jsx)(n(), {
                    className:
                      "absolute top-4 left-4 opacity-0 group-hover:top-1 group-hover:left-1 group-hover:opacity-60",
                    width: 24,
                    height: 24,
                    alt: "top left bracket",
                    src: "/images/small-top-left-bracket.svg",
                    style: { transition: "0.4s all ease" },
                  }),
                  (0, l.jsx)(n(), {
                    className:
                      "absolute top-4 right-4 opacity-0 group-hover:top-1 group-hover:right-1 group-hover:opacity-60",
                    width: 24,
                    height: 24,
                    alt: "top right bracket",
                    src: "/images/small-top-right-bracket.svg",
                    style: { transition: "0.4s all ease" },
                  }),
                ],
              }),
            });
          }
          (([s, p] = g.then ? (await g)() : g), a());
        } catch (e) {
          a(e);
        }
      });
    },
    12317: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => i });
      var a = r(2183),
        l = r(46728),
        s = r.n(l);
      let i = ({ href: e, children: t, className: r, ...l }) =>
        "string" == typeof e && e.startsWith("http")
          ? (0, a.jsx)("a", {
              href: e,
              target: "_blank",
              rel: "noopener noreferrer",
              className: r,
              ...l,
              children: t,
            })
          : (0, a.jsx)(s(), { className: r, href: e, ...l, children: t });
    },
    20162: (e, t, r) => {
      "use strict";
      r.a(e, async (e, a) => {
        try {
          r.d(t, { A: () => g });
          var l = r(2183),
            s = r(15013),
            i = r.n(s),
            o = r(46728),
            n = r.n(o),
            c = r(9751),
            d = r(12317),
            u = r(61065),
            m = r(92642),
            p = r(95783),
            h = e([c, m, p]);
          function g({
            websiteSingleton: e,
            navItems: t,
            footerSocialLinks: r,
          }) {
            let { isLoggedIn: a, shopifyUrl: s } = (0, c.u)(),
              o = t.filter(
                (e) => e.showInFooter && !(a && e.hideForLoggedInUsers),
              ),
              h = t.filter(
                (e) => e.showInSubFooter && !(a && e.hideForLoggedInUsers),
              );
            return (0, l.jsxs)("footer", {
              className: "relative w-full bg-black px-8 text-white lg:px-32",
              children: [
                (0, l.jsx)(u.A, { data: (0, p._8)(e, r) }),
                (0, l.jsx)(u.A, { data: (0, p.OU)() }),
                (0, l.jsxs)("div", {
                  className:
                    "flex flex-col items-center justify-center space-y-16 pt-16 pb-16 lg:flex-row lg:items-stretch lg:justify-between lg:space-y-0 lg:pt-32",
                  children: [
                    (0, l.jsx)("div", {
                      children: (0, l.jsx)(i(), {
                        src: (0, m._c)(e.footerLogo?.fields.file?.url),
                        width: 248,
                        height: 248,
                        alt: (0, m._c)(e.footerLogo?.fields.description),
                        className: "w-40",
                      }),
                    }),
                    (0, l.jsxs)("nav", {
                      "aria-label": "Footer",
                      className:
                        "text-darkgray-500 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-lg",
                      children: [
                        o.map((e) => {
                          let t = e.link;
                          return (
                            e.shouldReplaceWithGeneratedShopLink &&
                              s &&
                              (t = s),
                            (0, l.jsx)(
                              n(),
                              { href: t, children: e.name },
                              e.link + e.name,
                            )
                          );
                        }),
                        (0, l.jsx)("span", {
                          id: "accessibilityWidget",
                          className: "cursor-pointer",
                          children: "Accessibility",
                        }),
                        (0, l.jsx)("a", {
                          href: "#",
                          className: "cursor-pointer",
                          onClick: (e) => {
                            (e.preventDefault(),
                              window.__ucCmp?.showSecondLayer());
                          },
                          children:
                            "Do Not Sell or Share My Personal Information",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className:
                    "flex flex-col items-center justify-center space-y-16 pb-16 lg:flex-row lg:items-stretch lg:justify-between lg:space-y-0",
                  children: [
                    (0, l.jsx)("div", {
                      className: "text-darkgray-500 text-center",
                      children: e.footerCopyright,
                    }),
                    (0, l.jsx)("div", {
                      className: "flex items-center space-x-4 text-white",
                      children: r.map((e) =>
                        (0, l.jsx)(
                          d.A,
                          {
                            href: e.link,
                            children: (0, l.jsx)(i(), {
                              src: (0, m._c)(e.icon?.fields.file?.url),
                              alt: e.icon?.fields.description ?? "",
                              width: 20,
                              height: 20,
                            }),
                          },
                          e.link,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, l.jsx)("div", { className: "h-px bg-gray-500" }),
                (0, l.jsxs)("div", {
                  className:
                    "flew-col flex flex-col items-start justify-start gap-x-10 gap-y-10 py-12 text-gray-300 md:justify-between 2xl:flex-row",
                  children: [
                    (0, l.jsx)("p", {
                      className:
                        "text-darkgray-300 max-w-250 text-center text-sm lg:text-left",
                      children: e.footerLegalNotice,
                    }),
                    (0, l.jsx)("nav", {
                      "aria-label": "Legal",
                      className:
                        "text-darkgray-500 flex w-full flex-wrap items-center justify-center gap-x-10 gap-y-2 md:flex-row md:gap-x-10 md:gap-y-0 lg:w-auto lg:justify-start",
                      children: h.map((e) =>
                        (0, l.jsx)(
                          "a",
                          { href: e.link, children: e.name },
                          e.link + e.name,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            });
          }
          (([c, m, p] = h.then ? (await h)() : h), a());
        } catch (e) {
          a(e);
        }
      });
    },
    20561: (e, t, r) => {
      "use strict";
      r.d(t, { I: () => i });
      var a = r(2183);
      r(36439);
      var l = r(15013),
        s = r.n(l);
      function i({ src: e, alt: t, isActive: r = !1, isModal: l = !1 }) {
        return (0, a.jsxs)("div", {
          className: "group relative aspect-square w-full",
          children: [
            (0, a.jsx)("div", {
              className: "relative z-20 aspect-square w-full",
              children: (0, a.jsx)(s(), {
                src: e,
                alt: t,
                fill: !0,
                priority: !0,
                sizes: "(max-width: 1024px) 100vw, 50vw",
                className: "object-contain p-[2%] pt-[2.5%]",
              }),
            }),
            (0, a.jsx)(s(), {
              className:
                "pointer-events-none absolute inset-0 z-30 aspect-square object-cover",
              src: "/images/welcome/paper/square-paper-frame.png",
              alt: "A paper frame around the image",
              priority: !0,
              fill: !0,
              sizes: "(max-width: 1024px) 100vw, 50vw",
            }),
            (0, a.jsx)(s(), {
              className: "absolute inset-0 z-0 aspect-square object-cover",
              src: "/images/welcome/paper/square-paper-background.png",
              alt: "A paper background behind the image",
              priority: !0,
              fill: !0,
              sizes: "(max-width: 1024px) 100vw, 50vw",
            }),
            (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(s(), {
                  className: `
            absolute -left-1.5 -top-1 transition-opacity duration-300
            ${r ? "opacity-100" : "opacity-0"}
            ${!l ? "group-hover:opacity-100" : ""}
          `,
                  width: 24,
                  height: 24,
                  alt: "top left bracket",
                  src: "/images/small-top-left-bracket.svg",
                }),
                (0, a.jsx)(s(), {
                  className: `
            absolute -right-1 -top-1 transition-opacity duration-300
            ${r ? "opacity-100" : "opacity-0"}
            ${!l ? "group-hover:opacity-100" : ""}
          `,
                  width: 24,
                  height: 24,
                  alt: "top right bracket",
                  src: "/images/small-top-right-bracket.svg",
                }),
                (0, a.jsx)(s(), {
                  className: `
            absolute -bottom-1 -left-1 transition-opacity duration-300
            ${r ? "opacity-100" : "opacity-0"}
            ${!l ? "group-hover:opacity-100" : ""}
          `,
                  width: 24,
                  height: 24,
                  alt: "bottom left bracket",
                  src: "/images/small-bottom-left-bracket.svg",
                }),
                (0, a.jsx)(s(), {
                  className: `
            absolute -bottom-1 -right-1.5 transition-opacity duration-300
            ${r ? "opacity-100" : "opacity-0"}
            ${!l ? "group-hover:opacity-100" : ""}
          `,
                  width: 24,
                  height: 24,
                  alt: "bottom right bracket",
                  src: "/images/small-bottom-right-bracket.svg",
                }),
              ],
            }),
          ],
        });
      }
    },
    22238: (e, t, r) => {
      "use strict";
      r.a(e, async (e, a) => {
        try {
          r.d(t, { A: () => g });
          var l = r(2183),
            s = r(36439),
            i = r(94536),
            o = r(15013),
            n = r.n(o),
            c = r(92642),
            d = r(63308),
            u = r(95168),
            m = r(16890),
            p = r(27823),
            h = e([c, u]);
          function g({ slides: e }) {
            let [t, r] = (0, s.useState)(!1),
              [a, o] = (0, s.useState)(e[0]),
              n = (0, s.useRef)(null),
              c = (0, s.useRef)(null),
              h = (0, s.useRef)(null),
              x = (0, s.useRef)(null);
            return (
              (0, s.useEffect)(() => {
                let e = document.body,
                  r = [h.current, x.current];
                return (
                  t
                    ? ((e.style.overflow = "hidden"),
                      (e.style.height = "100vh"),
                      (e.style.touchAction = "none"),
                      r.forEach((e) => {
                        e && p.A.to(e, { opacity: 0, duration: 0.3 });
                      }))
                    : ((e.style.overflow = ""),
                      (e.style.height = ""),
                      (e.style.touchAction = ""),
                      r.forEach((e) => {
                        e && p.A.to(e, { opacity: 1, duration: 0.3 });
                      })),
                  () => {
                    ((e.style.overflow = ""),
                      (e.style.height = ""),
                      (e.style.touchAction = ""));
                  }
                );
              }, [t]),
              (0, m.L)(
                () => {
                  let e = n.current;
                  p.A.timeline({
                    scrollTrigger: { trigger: e, start: "center bottom" },
                  })
                    .fromTo(
                      ".character-slide",
                      { y: 50, opacity: 0 },
                      { y: 0, opacity: 1, stagger: 0.25, ease: "power2.out" },
                    )
                    .fromTo(
                      ".slider-arrow",
                      { opacity: 0 },
                      { opacity: 1, duration: 1 },
                    );
                },
                { scope: n },
              ),
              (0, l.jsxs)("div", {
                ref: n,
                children: [
                  (0, l.jsxs)("div", {
                    className: "relative",
                    children: [
                      (0, l.jsx)("div", {
                        ref: h,
                        className: "slider-arrow",
                        children: (0, l.jsx)("div", {
                          className:
                            "absolute top-1/2 left-4 z-10 hidden size-12 -translate-y-full cursor-pointer items-center justify-center rounded-full border-[1.5px] border-yellow-300 opacity-75 transition hover:opacity-100 md:flex",
                          id: "character-prev",
                          children: (0, l.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            height: "24px",
                            viewBox: "0 -960 960 960",
                            width: "24px",
                            fill: "#FFFFFF",
                            children: (0, l.jsx)("path", {
                              d: "m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z",
                            }),
                          }),
                        }),
                      }),
                      e.length > 0 &&
                        (0, l.jsx)(i.RC, {
                          ref: c,
                          initialSlide: 2 * (e.length >= 3),
                          rewind: !0,
                          spaceBetween: 0,
                          slidesPerView: 1.75,
                          centeredSlides: !0,
                          modules: [d.Vx],
                          navigation: {
                            prevEl: "#character-prev",
                            nextEl: "#character-next",
                          },
                          onSlideChange: (t) => {
                            o(e[t.realIndex]);
                          },
                          breakpoints: {
                            768: { slidesPerView: 3 },
                            1280: { slidesPerView: 5 },
                          },
                          children: e.map((t, s) =>
                            (0, l.jsx)(
                              i.qr,
                              {
                                className: "p-1",
                                children: (0, l.jsx)(f, {
                                  slide: t,
                                  selectedSlide: a,
                                  onClick: () => {
                                    a?.name === e[s].name
                                      ? r(!0)
                                      : (c.current?.swiper?.slideTo(s, 300),
                                        o(e[s]),
                                        setTimeout(() => {
                                          r(!0);
                                        }, 350));
                                  },
                                }),
                              },
                              s,
                            ),
                          ),
                        }),
                      (0, l.jsx)("div", {
                        ref: x,
                        className: "slider-arrow",
                        children: (0, l.jsx)("div", {
                          className:
                            "absolute top-1/2 right-4 z-10 hidden size-12 -translate-y-full cursor-pointer items-center justify-center rounded-full border-[1.5px] border-yellow-300 opacity-75 transition hover:opacity-100 md:flex",
                          id: "character-next",
                          children: (0, l.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            height: "24px",
                            viewBox: "0 -960 960 960",
                            width: "24px",
                            fill: "#FFFFFF",
                            children: (0, l.jsx)("path", {
                              d: "M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z",
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, l.jsx)(u.x, {
                    isOpen: t,
                    onClose: () => r(!1),
                    slide: a,
                  }),
                ],
              })
            );
          }
          function f({ slide: e, selectedSlide: t, onClick: r }) {
            let a =
                e.images && e.images[0]
                  ? (0, c._c)(e.images[0].fields.file?.url)
                  : "",
              s = e.images && e.images[0]?.fields.description,
              i = t?.name === e.name;
            return (0, l.jsx)("article", {
              className:
                "character-slide group relative cursor-pointer p-1 will-change-transform",
              onClick: r,
              children: (0, l.jsxs)("figure", {
                children: [
                  (0, l.jsxs)("div", {
                    className: `relative aspect-[2/3] w-full transition will-change-transform ${i ? "opacity-100" : "scale-90 opacity-50 hover:opacity-100"} `,
                    children: [
                      (0, l.jsx)(n(), {
                        src: a,
                        alt: s ?? "",
                        fill: !0,
                        className:
                          "character-image-mask h-full w-full object-contain",
                      }),
                      (0, l.jsx)(n(), {
                        className: `absolute -top-1 -left-1.5 transition-opacity duration-300 ${i ? "opacity-100" : "opacity-0"}`,
                        width: 24,
                        height: 24,
                        alt: "top left bracket",
                        src: "/images/small-top-left-bracket.svg",
                      }),
                      (0, l.jsx)(n(), {
                        className: `absolute -top-1 -right-1 transition-opacity duration-300 ${i ? "opacity-100" : "opacity-0"}`,
                        width: 24,
                        height: 24,
                        alt: "top right bracket",
                        src: "/images/small-top-right-bracket.svg",
                      }),
                      (0, l.jsx)(n(), {
                        className: `absolute -bottom-1 -left-1 transition-opacity duration-300 ${i ? "opacity-100" : "opacity-0"}`,
                        width: 24,
                        height: 24,
                        alt: "bottom left bracket",
                        src: "/images/small-bottom-left-bracket.svg",
                      }),
                      (0, l.jsx)(n(), {
                        className: `absolute -right-1.5 -bottom-1 transition-opacity duration-300 ${i ? "opacity-100" : "opacity-0"}`,
                        width: 24,
                        height: 24,
                        alt: "bottom right bracket",
                        src: "/images/small-bottom-right-bracket.svg",
                      }),
                    ],
                  }),
                  (0, l.jsxs)("figcaption", {
                    className: `mt-6 flex flex-col items-center transition-opacity duration-300 ${i ? "opacity-100" : "opacity-0 group-hover:opacity-100"} `,
                    children: [
                      (0, l.jsx)("h3", {
                        className:
                          "selected-item-name w-[calc(100%+2rem)] text-center text-[2rem] font-bold text-white",
                        children: e.name,
                      }),
                      (0, l.jsxs)("div", {
                        className: `flex flex-col transition-opacity duration-300 lg:opacity-0 ${i ? "lg:group-hover:opacity-100" : ""}`,
                        children: [
                          (0, l.jsx)("button", {
                            type: "button",
                            className:
                              "p-1 text-sm font-bold hover:text-yellow-300",
                            children: "Learn More",
                          }),
                          (0, l.jsx)("div", {
                            className:
                              "relative h-1 overflow-hidden transition-all delay-100 duration-300 lg:w-0 lg:group-hover:w-full",
                            children: (0, l.jsx)(n(), {
                              width: 80,
                              height: 4,
                              src: "/images/welcome/lines/learn-more-line.png",
                              alt: "A streak of gold underneath the learn more button",
                              className:
                                "absolute bottom-0 left-0 h-full w-full",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            });
          }
          (([c, u] = h.then ? (await h)() : h), a());
        } catch (e) {
          a(e);
        }
      });
    },
    27823: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => d });
      var a = r(41430),
        l = r(16890),
        s = r(23323),
        i = r(93551),
        o = r(3843),
        n = r(4124),
        c = r(12979);
      a.os.registerPlugin(
        l.L,
        s.Flip,
        i.ScrollTrigger,
        o.ScrollToPlugin,
        n.ScrollSmoother,
        c.SplitText,
      );
      let d = a.os;
    },
    28799: (e, t, r) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/lara-croft",
        function () {
          return r(86215);
        },
      ]);
    },
    30815: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => u });
      var a = r(2183),
        l = r(36439),
        s = r(27823),
        i = r(16890),
        o = r(93551),
        n = r.n(o);
      function c({
        products: e,
        activeProduct: t,
        currentText: r,
        uniqueCategories: i,
        currentCategory: o,
        currentSortOrder: n,
        handleProductClick: d,
        onCategoryChange: u,
        onSortOrderChange: m,
      }) {
        let [p, h] = (0, l.useState)(!1),
          g = (0, l.useRef)(null),
          f = (0, l.useRef)(null),
          x = (0, l.useRef)(null),
          y = (0, l.useRef)(null);
        return (
          (0, l.useEffect)(() => {
            !p &&
              g.current &&
              f.current &&
              (g.current.style.width = `${f.current.clientWidth}px`);
          }, [r]),
          (0, a.jsx)("div", {
            ref: g,
            className:
              "fixed bottom-4 right-4 z-50 flex h-[3.75rem] flex-col items-end rounded-[2rem] bg-black",
            children: (0, a.jsxs)("div", {
              className: "flex h-full w-full flex-col items-end text-white",
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "menu-content hidden h-[calc(100%-3.75rem)] w-full shrink flex-col opacity-0",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "shrink-0 p-4 pt-6",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "mb-4",
                          children: [
                            (0, a.jsx)("label", {
                              htmlFor: "category-select",
                              className:
                                "mb-0.5 block text-sm font-medium text-lightgray-500",
                              children: "Filter By",
                            }),
                            (0, a.jsxs)("select", {
                              id: "category-select",
                              value: o,
                              onChange: (e) => u(e.target.value),
                              className:
                                "w-full rounded-lg border-[1.5px] border-white/20 bg-white/10 p-3 text-white",
                              children: [
                                (0, a.jsx)("option", {
                                  value: "all",
                                  children: "All Categories",
                                }),
                                i.map((e) =>
                                  (0, a.jsx)(
                                    "option",
                                    {
                                      value: e,
                                      className: "text-black",
                                      children: e,
                                    },
                                    e,
                                  ),
                                ),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsx)("label", {
                              htmlFor: "sort-select",
                              className:
                                "mb-0.5 block text-sm font-medium text-lightgray-500",
                              children: "Sort By",
                            }),
                            (0, a.jsxs)("select", {
                              id: "sort-select",
                              value: n,
                              onChange: (e) => m(e.target.value),
                              className:
                                "w-full rounded-lg border-[1.5px] border-white/20 bg-white/10 p-3 text-white",
                              children: [
                                (0, a.jsx)("option", {
                                  value: "release desc",
                                  className: "text-black",
                                  children: "Release Date: Newest First",
                                }),
                                (0, a.jsx)("option", {
                                  value: "release asc",
                                  className: "text-black",
                                  children: "Release Date: Oldest First",
                                }),
                                (0, a.jsx)("option", {
                                  value: "fiction desc",
                                  className: "text-black",
                                  children:
                                    "Lara Croft's Adventures: Newest First",
                                }),
                                (0, a.jsx)("option", {
                                  value: "fiction asc",
                                  className: "text-black",
                                  children:
                                    "Lara Croft's Adventures: Oldest First",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "grow overflow-auto px-4 pb-4",
                      children: (0, a.jsx)("ul", {
                        children: e.map((e) => {
                          let r = e.releaseDate,
                            l = r
                              ? new Date(r).getFullYear().toString()
                              : "Unknown";
                          return (0, a.jsxs)(
                            "li",
                            {
                              className: `mb-2 flex cursor-pointer justify-between border-b border-white/20 py-4 font-bold hover:text-yellow-500 ${t?.slug === e.slug ? "text-yellow-500" : ""}`,
                              onClick: () => d(e.slug),
                              children: [
                                e.title,
                                (0, a.jsx)("span", {
                                  className: "text-white/50",
                                  children: l,
                                }),
                              ],
                            },
                            e.slug,
                          );
                        }),
                      }),
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  ref: f,
                  className:
                    "relative z-10 mt-auto flex flex-row items-center justify-end rounded-full bg-black p-2",
                  children: [
                    (0, a.jsx)("a", {
                      ref: y,
                      href: "#characters",
                      onClick: (e) => {
                        e.preventDefault();
                        let t = document.getElementById("characters");
                        t &&
                          s.A.to(window, {
                            duration: 1,
                            scrollTo: { y: t, offsetY: 100 },
                            ease: "power2.inOut",
                          });
                      },
                      className:
                        "absolute -left-12 top-1/2 -z-10 -translate-y-1/2 font-spline-sans-mono uppercase text-black hover:underline",
                      children: "Skip",
                    }),
                    (0, a.jsx)("span", {
                      className:
                        "whitespace-nowrap px-4 font-spline-sans-mono uppercase text-white",
                      children: r,
                    }),
                    (0, a.jsx)("button", {
                      type: "button",
                      onClick: () => {
                        let e = g.current?.querySelector(".menu-content");
                        if (e) {
                          if (p)
                            (y.current?.classList.remove("pointer-events-none"),
                              s.A.timeline()
                                .to(e, { opacity: 0, y: 20, duration: 0.3 })
                                .set(e, { display: "none" })
                                .to(
                                  g.current,
                                  {
                                    height: "3.75rem",
                                    width: f.current?.clientWidth,
                                    duration: 0.5,
                                    ease: "power2.inOut",
                                  },
                                  "<-0.2",
                                ));
                          else {
                            (y.current?.classList.add("pointer-events-none"),
                              (x.current = document.querySelector("header")));
                            let t = x.current?.offsetHeight || 0,
                              r = `${t / 16 + 2}rem`;
                            s.A.timeline()
                              .to(g.current, {
                                height: `calc(100svh - ${r})`,
                                width: "22rem",
                                duration: 0.5,
                                ease: "power2.inOut",
                              })
                              .set(e, { display: "flex" })
                              .to(e, { opacity: 1, y: 0, duration: 0.3 });
                          }
                          h(!p);
                        }
                      },
                      className:
                        "z-10 flex size-11 flex-none cursor-pointer items-center justify-center rounded-full bg-[url('/images/gold-button-texture-1.jpg')] bg-cover transition hover:scale-110",
                      children: (0, a.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        height: "24px",
                        viewBox: "0 -960 960 960",
                        width: "24px",
                        fill: "#000000",
                        className: "flex-none",
                        children: p
                          ? (0, a.jsx)("path", {
                              d: "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z",
                            })
                          : (0, a.jsx)("path", {
                              d: "M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h720v80H120Z",
                            }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      function d({
        sortedGroupKeys: e,
        activeProduct: t,
        currentSortOrder: r,
      }) {
        let l = (() => {
          if (!t) return null;
          if (r.startsWith("fiction")) return t.timelineEra + " Era";
          if (r.startsWith("release")) {
            let e = t.releaseDate;
            return e ? new Date(e).getFullYear().toString() : "Unknown";
          }
          return null;
        })();
        return (0, a.jsxs)("div", {
          className:
            "fixed right-4 top-1/2 z-40 hidden w-40 -translate-y-1/2 gap-3 rounded-lg p-4 text-right font-spline-sans-mono font-medium uppercase tracking-wide text-black/50 xl:flex xl:flex-col xl:items-end",
          children: [
            (0, a.jsx)("ul", {
              children: e.map((e) =>
                (0, a.jsx)(
                  "li",
                  {
                    className: `mb-2 cursor-pointer hover:text-black ${l === e ? "text-black" : ""}`,
                    onClick: () => {
                      let t;
                      (t = document.getElementById(`timeline-group-${e}`)) &&
                        s.A.to(window, {
                          duration: 1,
                          scrollTo: { y: t, offsetY: 100 },
                          ease: "power2.inOut",
                        });
                    },
                    children: e,
                  },
                  e,
                ),
              ),
            }),
            (0, a.jsx)("div", { className: "h-px w-12 bg-black/50" }),
            (0, a.jsx)("button", {
              type: "button",
              className: "text-right uppercase hover:text-black",
              onClick: (e) => {
                e.preventDefault();
                let t = document.getElementById("characters");
                t &&
                  s.A.to(window, {
                    duration: 1,
                    scrollTo: { y: t, offsetY: 100 },
                    ease: "power2.inOut",
                  });
              },
              children: "Explore Characters",
            }),
          ],
        });
      }
      function u({
        products: e,
        uniqueCategories: t,
        currentCategory: r,
        currentSortOrder: o,
        onCategoryChange: m,
        onSortOrderChange: p,
        sortedGroupKeys: h,
      }) {
        let [g, f] = (0, l.useState)(
            e[0]?.releaseDate
              ? new Date(e[0].releaseDate).getFullYear().toString()
              : "Unknown",
          ),
          [x, y] = (0, l.useState)(null),
          w = (0, l.useRef)([]);
        return (
          (0, l.useEffect)(() => {
            x &&
              (function (e) {
                if (o.startsWith("release")) {
                  let t = e.releaseDate;
                  f((t ? new Date(t).getFullYear() : "Unknown").toString());
                } else
                  o.startsWith("fiction") && f(e.timelineEra || "Unknown Era");
              })(x);
          }, [x, o]),
          (0, l.useEffect)(() => {
            (y(null), n().refresh());
          }, [e, r, o]),
          (0, i.L)(
            () => {
              (w.current.forEach((e) => e.kill()), (w.current = []));
              let t = e.map((e) =>
                n().create({
                  trigger: `#timeline-entry-${e.slug}`,
                  start: "top center",
                  end: "bottom center",
                  onEnter: () => {
                    y(e);
                  },
                  onEnterBack: () => {
                    y(e);
                  },
                }),
              );
              return (
                (w.current = t),
                () => {
                  t.forEach((e) => e.kill());
                }
              );
            },
            { dependencies: [e, r, o] },
          ),
          (0, a.jsxs)("div", {
            className: "timeline-controls pointer-events-none opacity-0",
            children: [
              (0, a.jsx)("div", {
                className:
                  "pointer-events-none fixed bottom-0 left-0 right-0 z-40 h-24",
                children: (0, a.jsx)("div", {
                  className: "h-full w-full",
                  style: {
                    background: "linear-gradient(to top, #FFFAE1, transparent)",
                  },
                }),
              }),
              (0, a.jsx)(c, {
                products: e,
                activeProduct: x,
                currentText: g,
                uniqueCategories: t,
                currentCategory: r,
                currentSortOrder: o,
                handleProductClick: (e) => {
                  let t = document.getElementById(`timeline-entry-${e}`);
                  t &&
                    s.A.to(window, {
                      duration: 1,
                      scrollTo: { y: t, offsetY: 100 },
                      ease: "power2.inOut",
                    });
                },
                onCategoryChange: m,
                onSortOrderChange: p,
              }),
              (0, a.jsx)(d, {
                sortedGroupKeys: h,
                activeProduct: x,
                currentSortOrder: o,
              }),
            ],
          })
        );
      }
    },
    41036: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      var a = r(2183),
        l = r(61932),
        s = r(15013),
        i = r.n(s),
        o = r(36439);
      function n(e) {
        let { className: t, children: r, ...s } = e,
          n = (0, o.useRef)(null),
          [c, d] = (0, o.useState)(0);
        return (
          (0, o.useEffect)(() => {
            if (!n.current) return;
            let e = new ResizeObserver(() => {
              d(n.current?.offsetHeight ?? 0);
            });
            return (
              e.observe(n.current),
              () => {
                e.disconnect();
              }
            );
          }, [n]),
          (0, a.jsxs)("div", {
            ref: n,
            className: (0, l.cn)("relative w-full pb-24", t),
            ...s,
            children: [
              r,
              (0, a.jsx)("div", {
                className:
                  "absolute left-0 top-0 -z-20 h-full w-full bg-[url('/images/paper-texture_main_tile(tinyfied).jpg')] bg-repeat",
              }),
              (0, a.jsx)("div", {
                style: { height: c },
                className:
                  "pointer-events-none absolute left-0 top-0 w-full overflow-hidden",
                children: (0, a.jsx)(i(), {
                  src: "/images/paper-graphics_TOP_1(tinyfied).webp",
                  alt: "Paper Top Overlay",
                  width: "0",
                  priority: !0,
                  height: "0",
                  className:
                    "absolute left-0 top-0 -z-20 h-auto w-full object-cover",
                  unoptimized: !0,
                }),
              }),
              c > 1600 &&
                (0, a.jsx)(i(), {
                  src: "/images/paper-graphics_BOTTOM_1(tinyfied).webp",
                  alt: "Paper Bottom Overlay",
                  width: "0",
                  priority: !0,
                  height: "0",
                  className:
                    "absolute bottom-0 left-0 -z-20 h-auto w-full object-cover",
                  unoptimized: !0,
                }),
              (0, a.jsx)("div", {
                style: { backgroundSize: "100% auto" },
                className:
                  "absolute left-0 top-0 -z-20 hidden h-full w-[8vw] max-w-[104px] bg-[url('/images/paper-edge_long(tinyfied).webp')] bg-repeat-y md:block",
              }),
              (0, a.jsx)(i(), {
                src: "/images/footer-transition(tinyfied).webp",
                width: "1920",
                height: "305",
                priority: !0,
                className:
                  "pointer-events-none absolute bottom-0 left-0 z-10 w-full translate-y-1/2 object-cover",
                alt: "footer transition",
                unoptimized: !0,
              }),
            ],
          })
        );
      }
    },
    43699: (e, t, r) => {
      "use strict";
      let a;
      r.d(t, { A: () => A });
      var l = r(36439);
      let s =
          /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,
        i = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,
        o = /\.(m3u8)($|\?)/i,
        n = /\.(mpd)($|\?)/i,
        c = /stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,
        d =
          /(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,
        u = /vimeo\.com\/(?!progressive_redirect).+/,
        m =
          /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,
        p = /open\.spotify\.com\/(\w+)\/(\w+)/i,
        h =
          /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+|(videos?\/|\?video=)\d+)($|\?)/,
        g =
          /tiktok\.com\/(?:player\/v1\/|share\/video\/|@[^/]+\/video\/)([0-9]+)/,
        f = (e, t) => {
          if (Array.isArray(e)) {
            for (let r of e)
              if (("string" == typeof r && f(r, t)) || f(r.src, t)) return !0;
            return !1;
          }
          return t(e);
        },
        x = l.forwardRef((e, t) => {
          let r = s.test(`${e.src}`) ? "audio" : "video";
          return l.createElement(r, { ...e, ref: t }, e.children);
        }),
        y = [
          {
            key: "hls",
            name: "hls.js",
            canPlay: (e) => f(e, (e) => o.test(e)),
            canEnablePIP: () => !0,
            player: (0, l.lazy)(() =>
              Promise.all([r.e(9871), r.e(9629), r.e(2262)]).then(
                r.bind(r, 9673),
              ),
            ),
          },
          {
            key: "dash",
            name: "dash.js",
            canPlay: (e) => f(e, (e) => n.test(e)),
            canEnablePIP: () => !0,
            player: (0, l.lazy)(() =>
              Promise.all([r.e(9629), r.e(6395)]).then(r.bind(r, 85490)),
            ),
          },
          {
            key: "mux",
            name: "Mux",
            canPlay: (e) => c.test(e),
            canEnablePIP: () => !0,
            player: (0, l.lazy)(() =>
              Promise.all([r.e(9871), r.e(9629), r.e(2723)]).then(
                r.bind(r, 19320),
              ),
            ),
          },
          {
            key: "youtube",
            name: "YouTube",
            canPlay: (e) => d.test(e),
            player: (0, l.lazy)(() => r.e(8446).then(r.bind(r, 28439))),
          },
          {
            key: "vimeo",
            name: "Vimeo",
            canPlay: (e) => u.test(e) && !i.test(e) && !o.test(e),
            player: (0, l.lazy)(() => r.e(6173).then(r.bind(r, 51524))),
          },
          {
            key: "wistia",
            name: "Wistia",
            canPlay: (e) => m.test(e),
            canEnablePIP: () => !0,
            player: (0, l.lazy)(() => r.e(9340).then(r.bind(r, 88889))),
          },
          {
            key: "spotify",
            name: "Spotify",
            canPlay: (e) => p.test(e),
            canEnablePIP: () => !1,
            player: (0, l.lazy)(() => r.e(2771).then(r.bind(r, 25666))),
          },
          {
            key: "twitch",
            name: "Twitch",
            canPlay: (e) => h.test(e),
            canEnablePIP: () => !1,
            player: (0, l.lazy)(() => r.e(2042).then(r.bind(r, 63570))),
          },
          {
            key: "tiktok",
            name: "TikTok",
            canPlay: (e) => g.test(e),
            canEnablePIP: () => !1,
            player: (0, l.lazy)(() => r.e(8085).then(r.bind(r, 72287))),
          },
          {
            key: "html",
            name: "html",
            canPlay: (e) => f(e, (e) => s.test(e) || i.test(e)),
            canEnablePIP: () => !0,
            player: x,
          },
        ],
        w = {
          width: "320px",
          height: "180px",
          volume: 1,
          playbackRate: 1,
          previewTabIndex: 0,
          previewAriaLabel: "",
          oEmbedUrl: "https://noembed.com/embed?url={url}",
        },
        b = l.forwardRef((e, t) => {
          let { playing: r, pip: a } = e,
            s = e.activePlayer,
            i = (0, l.useRef)(null),
            o = (0, l.useRef)(!0);
          if (
            ((0, l.useEffect)(() => {
              var t, a;
              i.current &&
                (i.current.paused && !0 === r && i.current.play(),
                i.current.paused || !1 !== r || i.current.pause(),
                (i.current.playbackRate = null != (t = e.playbackRate) ? t : 1),
                (i.current.volume = null != (a = e.volume) ? a : 1));
            }),
            (0, l.useEffect)(() => {
              var e, t, r, l, s;
              if (i.current && globalThis.document) {
                if (a && !document.pictureInPictureElement)
                  try {
                    null == (t = (e = i.current).requestPictureInPicture) ||
                      t.call(e);
                  } catch (e) {}
                if (!a && document.pictureInPictureElement)
                  try {
                    (null == (l = (r = i.current).exitPictureInPicture) ||
                      l.call(r),
                      null == (s = document.exitPictureInPicture) ||
                        s.call(document));
                  } catch (e) {}
              }
            }, [a]),
            !s)
          )
            return null;
          let n = {},
            c = ["onReady", "onStart"];
          for (let t in e)
            t.startsWith("on") && !c.includes(t) && (n[t] = e[t]);
          return l.createElement(
            s,
            {
              ...n,
              style: e.style,
              className: e.className,
              slot: e.slot,
              ref: (0, l.useCallback)(
                (e) => {
                  ((i.current = e),
                    "function" == typeof t
                      ? t(e)
                      : null !== t && (t.current = e));
                },
                [t],
              ),
              src: e.src,
              crossOrigin: e.crossOrigin,
              preload: e.preload,
              controls: e.controls,
              muted: e.muted,
              autoPlay: e.autoPlay,
              loop: e.loop,
              playsInline: e.playsInline,
              disableRemotePlayback: e.disableRemotePlayback,
              config: e.config,
              onLoadStart: (t) => {
                var r, a;
                ((o.current = !0),
                  null == (r = e.onReady) || r.call(e),
                  null == (a = e.onLoadStart) || a.call(e, t));
              },
              onPlay: (t) => {
                var r, a;
                (o.current &&
                  ((o.current = !1), null == (r = e.onStart) || r.call(e, t)),
                  null == (a = e.onPlay) || a.call(e, t));
              },
            },
            e.children,
          );
        });
      b.displayName = "Player";
      let v = (0, l.lazy)(() => r.e(6353).then(r.bind(r, 40640))),
        j = [],
        N = ({ children: e }) => e,
        k = y[y.length - 1];
      var A =
        (((a = l.forwardRef((e, t) => {
          let r = { ...w, ...e },
            {
              src: a,
              slot: s,
              className: i,
              style: o,
              width: n,
              height: c,
              fallback: d,
              wrapper: u,
            } = r,
            [m, p] = (0, l.useState)(!!r.light);
          (0, l.useEffect)(() => {
            r.light ? p(!0) : p(!1);
          }, [r.light]);
          let h = (e) => {
              var t;
              (p(!1), null == (t = r.onClickPreview) || t.call(r, e));
            },
            g = null == u ? N : u,
            f = !1 === d ? N : l.Suspense;
          return l.createElement(
            g,
            { slot: s, className: i, style: { width: n, height: c, ...o } },
            l.createElement(
              f,
              { fallback: d },
              m
                ? ((e) => {
                    if (!e) return null;
                    let {
                      light: t,
                      playIcon: a,
                      previewTabIndex: s,
                      oEmbedUrl: i,
                      previewAriaLabel: o,
                    } = r;
                    return l.createElement(v, {
                      src: e,
                      light: t,
                      playIcon: a,
                      previewTabIndex: s,
                      previewAriaLabel: o,
                      oEmbedUrl: i,
                      onClickPreview: h,
                    });
                  })(a)
                : ((e) => {
                    var a, o;
                    let n = ((e) => {
                      for (let t of [...j, ...y])
                        if (e && t.canPlay(e)) return t;
                      return k || null;
                    })(e);
                    if (!n) return null;
                    let { style: c, width: d, height: u, wrapper: m } = r,
                      p = null == (a = r.config) ? void 0 : a[n.key];
                    return l.createElement(b, {
                      ...r,
                      ref: t,
                      activePlayer: null != (o = n.player) ? o : n,
                      slot: m ? void 0 : s,
                      className: m ? void 0 : i,
                      style: m
                        ? { display: "block", width: "100%", height: "100%" }
                        : { display: "block", width: d, height: u, ...c },
                      config: p,
                    });
                  })(a),
            ),
          );
        })).displayName = "ReactPlayer"),
        (a.addCustomPlayer = (e) => {
          j.push(e);
        }),
        (a.removeCustomPlayers = () => {
          j.length = 0;
        }),
        (a.canPlay = (e) => {
          if (e) {
            for (let t of [...j, ...y]) if (t.canPlay(e)) return !0;
          }
          return !1;
        }),
        (a.canEnablePIP = (e) => {
          var t;
          if (e) {
            for (let r of [...j, ...y])
              if (
                r.canPlay(e) &&
                (null == (t = r.canEnablePIP) ? void 0 : t.call(r))
              )
                return !0;
          }
          return !1;
        }),
        a);
    },
    55872: (e, t, r) => {
      "use strict";
      r.a(e, async (e, a) => {
        try {
          r.d(t, { A: () => g });
          var l = r(2183),
            s = r(36439),
            i = r(27823),
            o = r(12979),
            n = r(16890),
            c = r(15013),
            d = r.n(c),
            u = r(92642),
            m = r(43699),
            p = r(46951),
            h = e([u]);
          u = (h.then ? (await h)() : h)[0];
          let f = p.Ikc({
            effectiveType: p.YjP().optional(),
            saveData: p.zMY().optional(),
          });
          function g({ welcomePage: e }) {
            let [t, r] = (0, s.useState)(!1),
              a = (0, s.useRef)(null),
              c = (0, s.useRef)(null),
              [p, h] = (0, s.useState)(!1),
              [x, y] = (0, s.useState)(!1);
            return (
              (0, s.useEffect)(() => {
                let e = (() => {
                  if (!("u" < typeof navigator))
                    for (let e of [
                      Reflect.get(navigator, "connection"),
                      Reflect.get(navigator, "mozConnection"),
                      Reflect.get(navigator, "webkitConnection"),
                    ]) {
                      let t = f.safeParse(e);
                      if (t.success) return t.data;
                    }
                })();
                if (e) {
                  let { effectiveType: t, saveData: a } = e;
                  ("2g" === t || "3g" === t || a) && r(!0);
                }
              }, []),
              (0, s.useEffect)(() => {
                y(!0);
              }, []),
              (0, n.L)(
                () => {
                  let e = i.A.timeline(),
                    t = new o.SplitText(".hero-text", { type: "chars, words" });
                  (i.A.set(t.chars, {
                    scale: 1.3,
                    x: (e) => 16 * e - 8 * t.chars.length,
                  }),
                    e
                      .to(".hero-cta-container", { opacity: 1, duration: 1 })
                      .to(
                        t.chars,
                        { scale: 1, x: 0, duration: 2, ease: "power2.out" },
                        0,
                      )
                      .to(".hero-cta-container", {
                        y: "12rem",
                        duration: 1,
                        ease: "power2.inOut",
                      })
                      .fromTo(
                        ".down-arrow",
                        { opacity: 0 },
                        { opacity: 1, duration: 0.5 },
                      )
                      .to(".hero-underline", { width: 260, duration: 3 }),
                    i.A.timeline({ repeat: -1, repeatDelay: 2 })
                      .to(".down-arrow", {
                        y: 8,
                        duration: 0.6,
                        ease: "power1.inOut",
                      })
                      .to(".down-arrow", {
                        y: 0,
                        duration: 0.6,
                        ease: "power1.inOut",
                      }));
                },
                { scope: a },
              ),
              (0, s.useEffect)(() => {
                p &&
                  i.A.to(".hero-video", {
                    opacity: 1,
                    duration: 1,
                    ease: "power2.inOut",
                  });
              }, [p]),
              (0, l.jsxs)("div", {
                ref: a,
                className:
                  "bg-trueblack relative flex min-h-[max(700px,85svh)] flex-col justify-center overflow-hidden md:min-h-[max(1000px,100svh)]",
                children: [
                  (0, l.jsxs)("div", {
                    className:
                      "absolute top-0 left-1/2 z-5 mt-24 aspect-video h-[50vh] -translate-x-1/2 md:h-auto md:w-full lg:left-0 lg:mt-0 lg:translate-x-0",
                    children: [
                      e.heroBackgroundVideoUrl && !t
                        ? x &&
                          (0, l.jsx)(m.A, {
                            ref: c,
                            src: e.heroBackgroundVideoUrl,
                            className: "hero-video",
                            loop: !0,
                            width: "100%",
                            height: "100%",
                            controls: !1,
                            volume: 0,
                            playing: !0,
                            muted: !0,
                            onPlaying: () => h(!0),
                            style: { opacity: 0 },
                            playsInline: !0,
                            preload: "auto",
                          })
                        : (0, l.jsx)(d(), {
                            fill: !0,
                            className:
                              "object-contain object-top xl:object-cover",
                            alt:
                              e.heroBackgroundImage?.fields.description ?? "",
                            src: (0, u._c)(
                              e.heroBackgroundImage?.fields.file?.url ?? "",
                            ),
                          }),
                      (0, l.jsx)("div", {
                        className:
                          "to-trueblack absolute bottom-0 left-0 z-10 h-20 w-full bg-linear-to-b from-transparent",
                      }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className:
                      "hero-cta-container relative z-20 flex flex-col items-center opacity-0",
                    children: [
                      (0, l.jsx)("div", {
                        className: "mb-2 flex justify-center",
                        children: (0, l.jsx)("p", {
                          className:
                            "hero-text text-center text-3xl font-bold tracking-[5px] uppercase lg:text-5xl",
                          children: e.heroCallToActionText,
                        }),
                      }),
                      (0, l.jsxs)("div", {
                        className:
                          "flex w-full items-center justify-center gap-2 px-6 lg:px-0",
                        children: [
                          (0, l.jsx)("div", {
                            className:
                              "hero-underline relative h-1 w-0 overflow-hidden",
                            children: (0, l.jsx)(d(), {
                              width: 260,
                              height: 4,
                              src: "/images/welcome/lines/hero-line.png",
                              alt: "A streak of gold underneath the hero headline",
                              className: "absolute top-0 right-0 max-w-none",
                            }),
                          }),
                          (0, l.jsx)("div", {
                            role: "button",
                            tabIndex: 0,
                            onClick: () => {
                              let e = document.querySelector(
                                "#meet-lara-scroll-target",
                              );
                              e &&
                                i.A.to(window, {
                                  duration: 1.5,
                                  scrollTo: { y: e, offsetY: 85 },
                                  ease: "power2.inOut",
                                });
                            },
                            "aria-label": "Scroll to Meet Lara section",
                            className:
                              "relative top-0.5 cursor-pointer transition hover:scale-110",
                            children: (0, l.jsx)(d(), {
                              width: 88,
                              height: 76,
                              src: "/images/welcome/hero-arrow.png",
                              alt: "A bouncing arrow pointing down",
                              className: "down-arrow w-6",
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className:
                              "hero-underline relative h-1 w-0 overflow-hidden",
                            children: (0, l.jsx)(d(), {
                              width: 260,
                              height: 4,
                              src: "/images/welcome/lines/hero-line.png",
                              alt: "A streak of gold underneath the hero headline",
                              className:
                                "absolute top-0 left-0 max-w-none -scale-x-100",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsx)(d(), {
                    width: 2016,
                    height: 1073,
                    src: "/images/welcome/hero-gradient.png",
                    alt: "A radial gradient",
                    className:
                      "absolute bottom-0 left-0 z-10 w-full -translate-x-1/2 translate-y-1/3 scale-[2.5] rotate-[30deg]",
                  }),
                  (0, l.jsx)(d(), {
                    width: 2016,
                    height: 1073,
                    src: "/images/welcome/hero-gradient.png",
                    alt: "A radial gradient",
                    className:
                      "absolute bottom-0 left-0 z-10 w-full translate-x-1/2 translate-y-1/3 scale-[2.5] -rotate-[30deg]",
                  }),
                ],
              })
            );
          }
          a();
        } catch (e) {
          a(e);
        }
      });
    },
    59887: (e, t, r) => {
      "use strict";
      r.a(e, async (e, a) => {
        try {
          r.d(t, { A: () => h });
          var l = r(2183),
            s = r(36439),
            i = r(27823),
            o = r(12979),
            n = r(16890),
            c = r(15013),
            d = r.n(c),
            u = r(92642),
            m = r(80609),
            p = e([u]);
          u = (p.then ? (await p)() : p)[0];
          let h = ({ product: e, index: t, scrollingToTop: r }) => {
            var a;
            let c = (0, s.useRef)(null),
              p = (0, s.useRef)(null),
              h = (0, s.useRef)(null);
            (0, n.L)(
              () => {
                if (!c.current) return;
                if (r) {
                  c.current.style.opacity = "0";
                  return;
                }
                c.current.style.opacity = "1";
                let e = c.current.querySelector(".quote"),
                  t = c.current.querySelector(".source"),
                  a = c.current.querySelector(".poster"),
                  l = c.current.querySelector(".title"),
                  s = c.current.querySelector(".headline"),
                  n = c.current.querySelector(".date"),
                  d = c.current.querySelector(".category"),
                  u = c.current.querySelector(".description"),
                  m = c.current.querySelector(".button"),
                  g = c.current.querySelector(".content-line");
                if (
                  ((p.current = i.A.timeline({
                    scrollTrigger: { trigger: a, start: "25% 80%" },
                  })),
                  a &&
                    p.current.fromTo(
                      a,
                      { opacity: 0 },
                      { opacity: 1, duration: 0.5 },
                    ),
                  (h.current = i.A.timeline({
                    scrollTrigger: { trigger: l, start: "top 80%" },
                  })),
                  e)
                ) {
                  let r = new o.SplitText(e, { type: "chars, words" });
                  i.A.fromTo(
                    r.chars,
                    { opacity: 0 },
                    {
                      opacity: 1,
                      duration: 0.01,
                      stagger: 0.05,
                      scrollTrigger: { trigger: e, start: "top 80%" },
                      onComplete: () => {
                        t &&
                          i.A.fromTo(
                            t,
                            { opacity: 0, x: -10 },
                            {
                              opacity: 1,
                              x: 0,
                              duration: 0.5,
                              ease: "power2.out",
                            },
                          );
                      },
                    },
                  );
                }
                (l &&
                  h.current.fromTo(
                    l,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.4 },
                  ),
                  s &&
                    h.current.fromTo(
                      s,
                      { opacity: 0, y: 20 },
                      { opacity: 1, y: 0, duration: 0.4 },
                    ),
                  g &&
                    h.current.fromTo(
                      g,
                      { scaleX: 0 },
                      { scaleX: 1, duration: 0.5, ease: "power2.out" },
                      "<",
                    ),
                  n &&
                    d &&
                    h.current.fromTo(
                      [n, d],
                      { opacity: 0, y: 20 },
                      { opacity: 1, y: 0, duration: 0.2, stagger: 0.2 },
                    ),
                  u &&
                    h.current.fromTo(
                      u,
                      { opacity: 0, y: 20 },
                      { opacity: 1, y: 0, duration: 0.4 },
                    ),
                  m &&
                    h.current.fromTo(
                      m,
                      { opacity: 0, y: 20 },
                      { opacity: 1, y: 0, duration: 0.4 },
                    ));
              },
              { scope: c, dependencies: [r], revertOnUpdate: !0 },
            );
            let g = (0, u._c)(e.timelinePosterImage?.fields.file?.url),
              f = e.timelinePosterImage?.fields.file?.details?.image?.width,
              x = e.timelinePosterImage?.fields.file?.details?.image?.height;
            return (0, l.jsxs)("div", {
              id: `timeline-entry-${e.slug}`,
              ref: c,
              className: "timeline-entry py-8 lg:py-16",
              children: [
                e.timelineQuote &&
                  (0, l.jsxs)("div", {
                    className:
                      "relative mx-auto flex justify-center px-4 pb-16 lg:w-3/4 lg:px-0 lg:pb-32",
                    children: [
                      (0, l.jsxs)("blockquote", {
                        className:
                          "relative z-10 font-spline-sans-mono text-2xl lg:text-3xl",
                        children: [
                          (0, l.jsxs)("p", {
                            className: "quote mb-4 font-light",
                            children: ["“", e.timelineQuote, "”"],
                          }),
                          (0, l.jsx)("cite", {
                            className:
                              "source block text-lg font-semibold uppercase not-italic opacity-0",
                            children: e.timelineQuoteSource,
                          }),
                        ],
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "absolute inset-0 h-full w-full scale-[1.5] opacity-60",
                        style: {
                          background:
                            "radial-gradient(ellipse, rgba(255,250,225,1) 0%, rgba(255,250,225,0) 100%",
                          maskImage:
                            "radial-gradient(ellipse, black 0%, transparent 90%)",
                          WebkitMaskImage:
                            "radial-gradient(ellipse, black 0%, transparent 90%)",
                        },
                      }),
                    ],
                  }),
                (0, l.jsxs)("div", {
                  className: `flex flex-col lg:items-end lg:gap-6 ${t % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`,
                  children: [
                    (0, l.jsx)("div", {
                      className: "poster flex-none px-4 py-16 lg:flex-1",
                      children: (0, l.jsx)(m.R, {
                        src: g,
                        alt: e.title,
                        width: f,
                        height: x,
                        priority: !0,
                        rotateClass: t % 2 == 0 ? "-rotate-3" : "rotate-3",
                        className: "max-h-[50vh] lg:max-h-[600px]",
                      }),
                    }),
                    (0, l.jsxs)("div", {
                      className: "relative flex-1",
                      children: [
                        (0, l.jsx)("div", {
                          className:
                            "absolute inset-0 h-full w-full scale-[1.5] opacity-60",
                          style: {
                            background:
                              "radial-gradient(ellipse, rgba(255,250,225,1) 0%, rgba(255,250,225,0) 100%)",
                            maskImage:
                              "radial-gradient(ellipse, black 0%, transparent 90%)",
                            WebkitMaskImage:
                              "radial-gradient(ellipse, black 0%, transparent 90%)",
                          },
                        }),
                        (0, l.jsxs)("div", {
                          className: "relative z-10 p-6",
                          children: [
                            (0, l.jsx)("h2", {
                              className: "title mb-2 text-[2rem] font-bold",
                              children: e.title,
                            }),
                            e.timelineHeadline &&
                              (0, l.jsx)("h3", {
                                className: "headline text-5xl font-bold",
                                children: e.timelineHeadline,
                              }),
                            (0, l.jsx)(d(), {
                              src: "/images/welcome/lines/timeline-line.svg",
                              alt: "A streak of gold beneath the product title",
                              width: 438,
                              height: 4,
                              className: "content-line w-full py-4",
                            }),
                            (0, l.jsxs)("div", {
                              className:
                                "mb-6 flex justify-between font-spline-sans-mono font-light uppercase",
                              children: [
                                (0, l.jsx)("span", {
                                  className: "date",
                                  children: (a = e.releaseDate)
                                    ? new Date(a).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                        timeZone: "UTC",
                                      })
                                    : "Unknown",
                                }),
                                (0, l.jsx)("span", {
                                  className: "category",
                                  children: e.category?.fields.name,
                                }),
                              ],
                            }),
                            (0, l.jsx)("p", {
                              className: "description mb-7",
                              children: e.timelineDescription,
                            }),
                            (0, l.jsxs)("div", {
                              className: "flex gap-4",
                              children: [
                                (0, l.jsx)("a", {
                                  href: `/products/${e.category?.fields.slug}/${e.slug}`,
                                  target: "_blank",
                                  className:
                                    "timeline-view-product-button button rounded-lg border border-black/20 px-6 py-3 transition hover:border-black",
                                  children: "View Product",
                                }),
                                e.timelineCustomLinkUrl &&
                                  (0, l.jsx)("a", {
                                    href: e.timelineCustomLinkUrl,
                                    target: "_blank",
                                    className:
                                      "timeline-custom-link-button button rounded-lg border border-black/20 px-6 py-3 transition hover:border-black",
                                    children:
                                      e.timelineCustomLinkCtaText ??
                                      "Learn More",
                                  }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          };
          a();
        } catch (e) {
          a(e);
        }
      });
    },
    61065: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => i });
      var a = r(2183),
        l = r(46402),
        s = r.n(l);
      function i({ data: e }) {
        return (0, a.jsx)(s(), {
          children: (0, a.jsx)("script", {
            type: "application/ld+json",
            dangerouslySetInnerHTML: { __html: JSON.stringify(e) },
          }),
        });
      }
    },
    61932: (e, t, r) => {
      "use strict";
      r.d(t, { cn: () => s });
      var a = r(3638),
        l = r(30597);
      function s(...e) {
        return (0, l.QP)((0, a.$)(e));
      }
    },
    68456: (e, t, r) => {
      "use strict";
      r.d(t, { Cp: () => l, Yq: () => a });
      let a = (e) =>
          e
            ? new Date(e).toLocaleString("en-US", {
                timeZone: "UTC",
                month: "short",
                day: "numeric",
                year: "numeric",
              })
            : "",
        l = (e) =>
          e ? new Date(e).toLocaleString("en-US", { year: "numeric" }) : "";
    },
    71113: (e, t, r) => {
      "use strict";
      r.a(e, async (e, a) => {
        try {
          r.d(t, { A: () => g });
          var l = r(2183),
            s = r(36439),
            i = r(27823),
            o = r(12979),
            n = r(16890),
            c = r(15013),
            d = r.n(c),
            u = r(72599),
            m = r(80707),
            p = r.n(m),
            h = e([u]);
          function g({ welcomePage: e }) {
            let t = (0, s.useRef)(null),
              r = (0, s.useRef)(null),
              a = (0, s.useRef)(null),
              c = (0, s.useRef)(null),
              m = (0, s.useRef)(null),
              h = p().compact(e.sliderItems?.map((e) => e?.fields) ?? []),
              f = e.meetLaraCroftImage?.fields?.file?.url
                ? `https:${e.meetLaraCroftImage.fields.file.url}`
                : "/images/welcome/Lara-Croft-Hero.png",
              x =
                e.meetLaraCroftImage?.fields?.description ||
                e.meetLaraCroftImage?.fields?.title ||
                "Lara Croft, ready for action.";
            (0, n.L)(
              () => {
                let e = r.current,
                  l = a.current,
                  s = c.current,
                  n = m.current,
                  d = n?.clientWidth;
                (i.A.timeline({
                  scrollTrigger: {
                    trigger: l,
                    start: "center bottom",
                    end: "+=800",
                    scrub: 1,
                  },
                })
                  .fromTo(
                    ".left-leaves",
                    { xPercent: 0, y: 0, rotate: 0 },
                    { xPercent: -100, y: 250, rotate: 45 },
                    0,
                  )
                  .fromTo(
                    ".right-leaves",
                    { xPercent: 0, y: 0, rotate: 0 },
                    { xPercent: 100, y: 100, rotate: -45 },
                    0,
                  ),
                  i.A.to(".transition-leaves", {
                    scrollTrigger: {
                      trigger: e,
                      start: "top bottom",
                      end: "bottom top",
                      scrub: 0.5,
                    },
                    yPercent: -35,
                  }));
                let u = new o.SplitText(".heading-text", { type: "words" });
                (i.A.timeline({
                  scrollTrigger: { trigger: s, start: "center bottom" },
                })
                  .set(".heading-underline .streak", { width: d })
                  .fromTo(
                    u.words,
                    { yPercent: 100, opacity: 0 },
                    { duration: 0.5, yPercent: 0, opacity: 1, stagger: 0.2 },
                  )
                  .fromTo(
                    ".heading-underline",
                    { width: 0 },
                    { width: d, duration: 0.5 },
                    "<+=0.6",
                  )
                  .fromTo(
                    ".meet-lara-description",
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8 },
                    "<+=0.2",
                  ),
                  i.A.timeline({
                    scrollTrigger: {
                      trigger: ".lara-main-image",
                      start: "top bottom",
                      end: "25% center",
                      scrub: 1,
                    },
                  })
                    .fromTo(
                      ".lara-main-image",
                      { scale: 0.6, opacity: 0.2 },
                      {
                        scale: 1,
                        opacity: 1,
                        onComplete: () => {
                          i.A.to(".topographic-lines", {
                            opacity: 1,
                            duration: 4,
                          });
                        },
                      },
                    )
                    .fromTo(
                      t.current,
                      { backgroundColor: "black" },
                      { backgroundColor: "rgb(18 18 18)" },
                      "<",
                    ));
              },
              { scope: t },
            );
            let y = e.meetLaraCroftDescription
              .split("\n")
              .map((t, r) =>
                (0, l.jsxs)(
                  s.Fragment,
                  {
                    children: [
                      t,
                      r < e.meetLaraCroftDescription.split("\n").length - 1 &&
                        (0, l.jsx)("br", {}),
                    ],
                  },
                  r,
                ),
              );
            return (0, l.jsxs)("section", {
              ref: t,
              "aria-label": "Meet Lara Croft",
              className: "relative pt-40 pb-40 lg:pt-96",
              children: [
                (0, l.jsxs)("div", {
                  id: "meet-lara-scroll-target",
                  className: "mx-auto max-w-7xl",
                  children: [
                    (0, l.jsxs)("div", {
                      className:
                        "relative z-30 mb-12 flex flex-col items-center gap-8 px-6 lg:mb-6 lg:flex-row",
                      children: [
                        (0, l.jsx)("div", {
                          className:
                            "lara-main-image -mb-28 aspect-[3/4] w-full flex-shrink-0 will-change-transform md:-mb-36 lg:mb-0 lg:w-1/2",
                          children: (0, l.jsx)(d(), {
                            fill: !0,
                            alt: x,
                            src: f,
                            className:
                              "mx-auto max-h-[750px] w-auto object-contain lg:max-h-none",
                            priority: !0,
                          }),
                        }),
                        (0, l.jsxs)("div", {
                          ref: c,
                          children: [
                            (0, l.jsx)("div", {
                              className: "mb-6",
                              children: (0, l.jsxs)("div", {
                                ref: m,
                                className: "inline-block",
                                children: [
                                  (0, l.jsx)("h1", {
                                    className:
                                      "heading-text pb-2 text-5xl leading-[1.1] font-bold",
                                    children: e.meetLaraCroftHeadline,
                                  }),
                                  (0, l.jsx)("div", {
                                    className:
                                      "heading-underline relative h-3 w-0 overflow-hidden",
                                    children: (0, l.jsx)(d(), {
                                      width: 243,
                                      height: 6,
                                      src: "/images/welcome/lines/lara-line.svg",
                                      alt: "A streak of gold underneath the hero headline",
                                      className:
                                        "streak absolute inset-0 max-w-none",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, l.jsx)("div", {
                              className:
                                "meet-lara-description max-w-3xl text-lg will-change-transform lg:max-w-none",
                              children: y,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsx)(u.A, { slides: h }),
                  ],
                }),
                (0, l.jsx)("div", {
                  ref: r,
                  className:
                    "pointer-events-none absolute top-0 left-0 z-20 w-full -translate-y-1/4 will-change-transform",
                  children: (0, l.jsx)(d(), {
                    width: 1920,
                    height: 1403,
                    alt: "Verdant jungle foliage teems with life, from broad leaves to delicate fronds, highlighted by a cluster of vibrant orange flowers.",
                    src: "/images/transitions/Transition_1.webp",
                    className: "transition-leaves w-full",
                    priority: !0,
                  }),
                }),
                (0, l.jsx)("div", {
                  className:
                    "left-leaves pointer-events-none absolute top-0 left-0 z-50 w-full -translate-x-1/3 will-change-transform lg:w-4/5",
                  children: (0, l.jsx)(d(), {
                    width: 1286,
                    height: 857,
                    alt: "jungle leaves on the left",
                    src: "/images/side-leaves.png",
                    className: "w-full",
                    priority: !0,
                  }),
                }),
                (0, l.jsx)("div", {
                  ref: a,
                  className:
                    "right-leaves pointer-events-none absolute top-0 right-0 z-50 w-full translate-x-1/3 will-change-transform lg:w-4/5",
                  children: (0, l.jsx)(d(), {
                    width: 1286,
                    height: 857,
                    alt: "jungle leaves on the right",
                    src: "/images/side-leaves.png",
                    className: "w-full",
                    priority: !0,
                  }),
                }),
                (0, l.jsx)("div", {
                  style: { opacity: 0 },
                  className:
                    "topographic-lines pointer-events-none absolute right-0 bottom-0 w-screen lg:w-4/5",
                  children: (0, l.jsx)(d(), {
                    width: 1440,
                    height: 1024,
                    alt: "Topographic lines weave across the screen",
                    src: "/images/welcome/lines/topo-lines.png",
                    className: "w-full object-contain",
                    priority: !0,
                  }),
                }),
              ],
            });
          }
          ((u = (h.then ? (await h)() : h)[0]), a());
        } catch (e) {
          a(e);
        }
      });
    },
    72099: (e, t, r) => {
      "use strict";
      r.a(e, async (e, a) => {
        try {
          r.d(t, { c: () => p });
          var l = r(2183),
            s = r(36439),
            i = r(15013),
            o = r.n(i),
            n = r(92642),
            c = r(20561),
            d = r(16890),
            u = r(27823),
            m = e([n]);
          function p({
            isOpen: e,
            onClose: t,
            slide: r,
            onPrevSlide: a,
            onNextSlide: i,
          }) {
            let m = (0, s.useRef)(null),
              [h, g] = (0, s.useState)(0),
              f = (0, s.useRef)(null);
            return ((0, d.L)(
              () => {
                if (
                  (f.current && (f.current.kill(), (f.current = null), g(0)),
                  e && r?.images && r.images.length > 1)
                ) {
                  f.current = u.A.timeline({ repeat: -1 });
                  let e = r.images.length;
                  for (let t = 0; t < e; t++) {
                    let r = (t + 1) % e;
                    f.current.to({}, { duration: 2, onComplete: () => g(r) });
                  }
                }
                return () => {
                  f.current && (f.current.kill(), (f.current = null));
                };
              },
              { dependencies: [e, r] },
            ),
            (0, d.L)(
              () => {
                if (m.current) {
                  let t = u.A.timeline();
                  e
                    ? ((document.body.style.overflow = "hidden"),
                      u.A.set(m.current, { display: "flex" }),
                      t
                        .to(".modal-content", {
                          duration: 0.4,
                          opacity: 1,
                          y: 0,
                          ease: "power2.out",
                        })
                        .to(
                          ".modal-background",
                          { duration: 0.4, opacity: 1, ease: "power2.out" },
                          "-=0.1",
                        ))
                    : ((document.body.style.overflow = "auto"),
                      t
                        .to(".modal-content", {
                          duration: 0.4,
                          opacity: 0,
                          y: 50,
                          ease: "power2.out",
                        })
                        .to(
                          ".modal-background",
                          { duration: 0.4, opacity: 0, ease: "power2.out" },
                          "-=0.1",
                        )
                        .set(m.current, { display: "none" }));
                }
              },
              { scope: m, dependencies: [e] },
            ),
            r)
              ? (0, l.jsxs)("div", {
                  ref: m,
                  className:
                    "fixed inset-0 z-[80] hidden justify-center lg:items-center",
                  children: [
                    (0, l.jsx)("div", {
                      className:
                        "modal-background absolute inset-0 bg-trueblack/70 opacity-0",
                      onClick: t,
                    }),
                    (0, l.jsxs)("div", {
                      className:
                        "modal-content relative mt-24 h-[calc(100svh-6rem)] w-full max-w-6xl translate-y-12 bg-black opacity-0 lg:mx-20 lg:mt-0 lg:h-auto",
                      children: [
                        (0, l.jsx)("button", {
                          onClick: t,
                          className:
                            "group fixed bottom-3 right-3 z-10 flex size-11 items-center justify-center rounded-full border-2 border-darkgray-500 bg-darkgray-200 lg:absolute lg:right-10 lg:top-10",
                          children: (0, l.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            height: "40px",
                            viewBox: "0 -960 960 960",
                            width: "40px",
                            className:
                              "fill-white transition-transform duration-300 group-hover:rotate-90 group-hover:fill-yellow-300",
                            children: (0, l.jsx)("path", {
                              d: "m253.9-229.79-24.11-24.11L455.9-480 229.79-706.1l24.11-24.11L480-504.1l226.1-226.11 24.11 24.11L504.1-480l226.11 226.1-24.11 24.11L480-455.9 253.9-229.79Z",
                            }),
                          }),
                        }),
                        (0, l.jsxs)("div", {
                          className:
                            "flex h-full flex-col gap-4 overflow-auto p-4 lg:flex-row lg:gap-12 lg:p-14",
                          children: [
                            (0, l.jsx)("div", {
                              className:
                                "mx-auto mb-6 flex w-full max-w-lg items-center justify-center lg:mb-0 lg:w-2/5 lg:max-w-none",
                              children: (0, l.jsx)("div", {
                                className:
                                  "group relative aspect-square w-full",
                                children:
                                  r.images && r.images.length > 1
                                    ? r.images.map((e, t) =>
                                        (0, l.jsx)(
                                          "div",
                                          {
                                            className: `absolute inset-0 transition-opacity duration-500 ${t === h ? "opacity-100" : "opacity-0"}`,
                                            children: (0, l.jsx)(c.I, {
                                              src: (0, n._c)(
                                                e?.fields.file?.url,
                                              ),
                                              alt: e?.fields.description || "",
                                              isModal: !0,
                                            }),
                                          },
                                          e?.sys.id,
                                        ),
                                      )
                                    : (0, l.jsx)(c.I, {
                                        src: (0, n._c)(
                                          r.images[0]?.fields.file?.url,
                                        ),
                                        alt:
                                          r.images[0]?.fields.description || "",
                                        isModal: !0,
                                      }),
                              }),
                            }),
                            (0, l.jsxs)("div", {
                              className:
                                "mx-auto flex w-full max-w-lg flex-col pb-20 lg:w-3/5 lg:max-w-none lg:justify-center lg:pb-0",
                              children: [
                                (0, l.jsxs)("div", {
                                  className: "mb-4 flex justify-between",
                                  children: [
                                    (0, l.jsx)("h2", {
                                      className: "text-[2rem] font-bold",
                                      children: r.name,
                                    }),
                                    (0, l.jsxs)("div", {
                                      className: "flex gap-4",
                                      children: [
                                        (0, l.jsx)("div", {
                                          className:
                                            "-left-16 z-10 flex size-12 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-yellow-300 opacity-75 transition hover:opacity-100 lg:absolute lg:top-1/2 lg:-translate-y-1/2",
                                          onClick: (e) => {
                                            (e.stopPropagation(), a());
                                          },
                                          children: (0, l.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            height: "24px",
                                            viewBox: "0 -960 960 960",
                                            width: "24px",
                                            fill: "#FFFFFF",
                                            children: (0, l.jsx)("path", {
                                              d: "m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z",
                                            }),
                                          }),
                                        }),
                                        (0, l.jsx)("div", {
                                          className:
                                            "-right-16 z-10 flex size-12 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-yellow-300 opacity-75 transition hover:opacity-100 lg:absolute lg:top-1/2 lg:-translate-y-1/2",
                                          onClick: (e) => {
                                            (e.stopPropagation(), i());
                                          },
                                          children: (0, l.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            height: "24px",
                                            viewBox: "0 -960 960 960",
                                            width: "24px",
                                            fill: "#FFFFFF",
                                            children: (0, l.jsx)("path", {
                                              d: "M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, l.jsx)("p", {
                                  className: "text-lg",
                                  children: r.description,
                                }),
                                (0, l.jsx)(o(), {
                                  width: 369,
                                  height: 3,
                                  src: "/images/welcome/lines/modal-line.svg",
                                  alt: "A streak of gray underneath the item description",
                                  className: "w-full py-6",
                                }),
                                r.appearsIn &&
                                  r.appearsIn.length > 0 &&
                                  (0, l.jsxs)("div", {
                                    children: [
                                      (0, l.jsx)("h3", {
                                        className: "mb-2 font-bold",
                                        children: "Appears in:",
                                      }),
                                      r.appearsIn.map((e, t) =>
                                        (0, l.jsxs)(
                                          s.Fragment,
                                          {
                                            children: [
                                              (0, l.jsx)("a", {
                                                href: `/products/${e?.fields.category?.fields.slug}/${e?.fields.slug}`,
                                                target: "_blank",
                                                className:
                                                  "appears-in-link underline hover:text-yellow-300",
                                                children: e?.fields.title,
                                              }),
                                              t <
                                                (r.appearsIn?.length ?? 0) -
                                                  1 && ", ",
                                            ],
                                          },
                                          t,
                                        ),
                                      ),
                                    ],
                                  }),
                              ],
                            }),
                            (0, l.jsx)("div", {
                              className:
                                "pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black to-transparent lg:hidden",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                })
              : null;
          }
          ((n = (m.then ? (await m)() : m)[0]), a());
        } catch (e) {
          a(e);
        }
      });
    },
    72599: (e, t, r) => {
      "use strict";
      r.a(e, async (e, a) => {
        try {
          r.d(t, { A: () => f });
          var l = r(2183),
            s = r(36439),
            i = r(15013),
            o = r.n(i),
            n = r(27823),
            c = r(16890),
            d = r(92642),
            u = r(94536),
            m = r(63308),
            p = r(72099),
            h = r(20561),
            g = e([d, p]);
          function f({ slides: e }) {
            let [t, r] = (0, s.useState)(!1),
              [a, i] = (0, s.useState)(0),
              o = (0, s.useRef)(null),
              d = (0, s.useRef)(null),
              h = (0, s.useRef)(null),
              g = (0, s.useRef)(null);
            return (
              (0, s.useEffect)(() => {
                let e = document.body,
                  r = [h.current, g.current];
                return (
                  t
                    ? ((e.style.overflow = "hidden"),
                      (e.style.height = "100vh"),
                      (e.style.touchAction = "none"),
                      r.forEach((e) => {
                        e && n.A.to(e, { opacity: 0, duration: 0.3 });
                      }))
                    : ((e.style.overflow = ""),
                      (e.style.height = ""),
                      (e.style.touchAction = ""),
                      r.forEach((e) => {
                        e && n.A.to(e, { opacity: 1, duration: 0.3 });
                      })),
                  () => {
                    ((e.style.overflow = ""),
                      (e.style.height = ""),
                      (e.style.touchAction = ""));
                  }
                );
              }, [t]),
              (0, c.L)(
                () => {
                  let e = o.current;
                  n.A.timeline({
                    scrollTrigger: { trigger: e, start: "center bottom" },
                  })
                    .fromTo(
                      ".equipment-slide",
                      { yPercent: 100, opacity: 0 },
                      {
                        yPercent: 0,
                        opacity: 1,
                        stagger: 0.25,
                        ease: "power2.out",
                      },
                    )
                    .fromTo(
                      ".slider-arrow",
                      { opacity: 0 },
                      { opacity: 1, duration: 1 },
                    );
                },
                { scope: o },
              ),
              (0, l.jsxs)("section", {
                ref: o,
                "aria-label": "Lara Croft's equipment",
                children: [
                  (0, l.jsxs)("div", {
                    className: "flex items-center md:gap-5 md:px-6",
                    children: [
                      (0, l.jsx)("div", {
                        ref: h,
                        className: "slider-arrow",
                        children: (0, l.jsx)("div", {
                          className:
                            "hidden size-12 flex-none -translate-y-full cursor-pointer items-center justify-center rounded-full border-[1.5px] border-yellow-300 opacity-75 transition hover:opacity-100 md:flex",
                          id: "equipment-prev",
                          children: (0, l.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            height: "24px",
                            viewBox: "0 -960 960 960",
                            width: "24px",
                            fill: "#FFFFFF",
                            children: (0, l.jsx)("path", {
                              d: "m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z",
                            }),
                          }),
                        }),
                      }),
                      e.length > 0 &&
                        (0, l.jsx)(u.RC, {
                          ref: d,
                          spaceBetween: 10,
                          slidesPerView: 1.75,
                          centeredSlides: !0,
                          loop: !0,
                          modules: [m.Vx],
                          navigation: {
                            prevEl: "#equipment-prev",
                            nextEl: "#equipment-next",
                          },
                          onSlideChange: (e) => {
                            i(e.realIndex);
                          },
                          breakpoints: {
                            768: { slidesPerView: 3 },
                            1024: { centeredSlides: !1, slidesPerView: 5 },
                          },
                          children: e.map((e, t) =>
                            (0, l.jsx)(
                              u.qr,
                              {
                                onClick: () => {
                                  (i(t), r(!0));
                                },
                                className: "p-1",
                                children: (0, l.jsx)(x, {
                                  slide: e,
                                  index: t,
                                  selectedIndex: a,
                                  onMouseEnter: () => {
                                    i(t);
                                  },
                                }),
                              },
                              t,
                            ),
                          ),
                        }),
                      (0, l.jsx)("div", {
                        ref: g,
                        className: "slider-arrow",
                        children: (0, l.jsx)("div", {
                          className:
                            "hidden size-12 flex-none -translate-y-full cursor-pointer items-center justify-center rounded-full border-[1.5px] border-yellow-300 opacity-75 transition hover:opacity-100 md:flex",
                          id: "equipment-next",
                          children: (0, l.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            height: "24px",
                            viewBox: "0 -960 960 960",
                            width: "24px",
                            fill: "#FFFFFF",
                            children: (0, l.jsx)("path", {
                              d: "M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z",
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, l.jsx)(p.c, {
                    isOpen: t,
                    onClose: () => r(!1),
                    slide: e[a],
                    onPrevSlide: () => {
                      0 === a ? i(e.length - 1) : i(a - 1);
                    },
                    onNextSlide: () => {
                      a === e.length - 1 ? i(0) : i(a + 1);
                    },
                  }),
                ],
              })
            );
          }
          function x({
            slide: e,
            index: t,
            selectedIndex: r,
            onMouseEnter: a,
          }) {
            let s =
                e.images && e.images[0]
                  ? (0, d._c)(e.images[0].fields.file?.url)
                  : "",
              i = e.images && e.images[0]?.fields.description;
            return (0, l.jsxs)("div", {
              className:
                "equipment-slide group relative p-1 will-change-transform",
              onMouseEnter: () => a(t),
              children: [
                (0, l.jsxs)("div", {
                  className: `relative aspect-square w-full cursor-pointer transition will-change-transform group-hover:rotate-0 ${t !== r ? (t % 2 == 0 ? "rotate-2" : t % 2 == 1 ? "-rotate-2" : "") : ""}`,
                  children: [
                    (0, l.jsx)(h.I, {
                      src: s,
                      alt: i ?? "",
                      isActive: t === r,
                    }),
                    (0, l.jsx)("div", {
                      className: `pointer-events-none absolute top-0 left-0 z-30 h-full w-full bg-black transition ${t !== r ? "opacity-50 group-hover:opacity-0" : "opacity-0"} `,
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className: `${t !== r ? "opacity-0" : "opacity-100"} mt-6 flex flex-col items-center opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100`,
                  children: [
                    (0, l.jsx)("h2", {
                      className:
                        "selected-item-name w-[calc(100%+2rem)] text-center text-2xl font-bold text-nowrap text-white lg:text-wrap",
                      children: e.name,
                    }),
                    (0, l.jsxs)("div", {
                      className:
                        "flex flex-col transition-opacity duration-300 group-hover:opacity-100 lg:opacity-0",
                      children: [
                        (0, l.jsx)("button", {
                          type: "button",
                          className:
                            "p-1 text-sm font-bold hover:text-yellow-300",
                          children: "Learn More",
                        }),
                        (0, l.jsx)("div", {
                          className:
                            "relative h-1 overflow-hidden transition-all delay-100 duration-300 lg:w-0 lg:group-hover:w-full",
                          children: (0, l.jsx)(o(), {
                            width: 80,
                            height: 4,
                            src: "/images/welcome/lines/learn-more-line.png",
                            alt: "A streak of gold underneath the learn more button",
                            className: "absolute bottom-0 left-0 h-full w-full",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          }
          (([d, p] = g.then ? (await g)() : g), a());
        } catch (e) {
          a(e);
        }
      });
    },
    74105: (e, t, r) => {
      "use strict";
      r.a(e, async (e, a) => {
        try {
          r.d(t, { A: () => x });
          var l = r(2183),
            s = r(36439),
            i = r(27823),
            o = r(16890),
            n = r(93551),
            c = r.n(n),
            d = r(15013),
            u = r.n(d),
            m = r(59887),
            p = r(30815),
            h = r(80707),
            g = r.n(h),
            f = e([m]);
          function x({ timelineProducts: e }) {
            let t = (0, s.useRef)(null),
              r = (0, s.useRef)(null),
              a = (0, s.useRef)(null),
              n = (0, s.useRef)(null),
              d = (0, s.useRef)([]),
              [h, f] = (0, s.useState)("all"),
              [y, w] = (0, s.useState)("release desc"),
              [b, v] = (0, s.useState)(!1),
              j = (0, s.useMemo)(
                () =>
                  g().compact(
                    Array.from(new Set(e.map((e) => e.category?.fields?.name))),
                  ),
                [e],
              ),
              N = ["Survivor", "Classic", "Legend"],
              k = (0, s.useMemo)(() => {
                let t,
                  r = e.filter(
                    (e) => "all" === h || e.category?.fields?.name === h,
                  ),
                  a =
                    ((t = new Set()),
                    e.forEach((e) => {
                      e.timelineEra && t.add(e.timelineEra);
                    }),
                    Array.from(t).sort((e, t) => N.indexOf(e) - N.indexOf(t))),
                  l = [...r].sort((e, t) => {
                    if (y.startsWith("release")) {
                      let r = "release asc" === y ? 1 : -1,
                        a = e.releaseDate,
                        l = t.releaseDate;
                      return a || l
                        ? a
                          ? l
                            ? r *
                              (new Date(a).getTime() - new Date(l).getTime())
                            : -1
                          : 1
                        : 0;
                    }
                    if (y.startsWith("fiction")) {
                      let r = "fiction asc" === y ? 1 : -1,
                        l = a.indexOf(e.timelineEra || ""),
                        s = a.indexOf(t.timelineEra || "");
                      return l === s
                        ? r *
                            ((e.timelineFictionOrder || 0) -
                              (t.timelineFictionOrder || 0))
                        : r * (l - s);
                    }
                    return 0;
                  });
                return {
                  grouped: l.reduce((e, t) => {
                    let r;
                    if (y.startsWith("fiction"))
                      r = t.timelineEra
                        ? t.timelineEra + " Era"
                        : "Unknown Era";
                    else if (y.startsWith("release")) {
                      let e = t.releaseDate;
                      r = e ? new Date(e).getFullYear().toString() : "Unknown";
                    }
                    return (r && (e[r] || (e[r] = []), e[r].push(t)), e);
                  }, {}),
                  eraOrder: a,
                  filteredAndSortedProducts: l,
                };
              }, [e, h, y]),
              A = (0, s.useMemo)(
                () =>
                  Object.keys(k.grouped).sort((e, t) => {
                    if (y.startsWith("release"))
                      return "release asc" === y
                        ? e.localeCompare(t)
                        : t.localeCompare(e);
                    if (y.startsWith("fiction")) {
                      let r = k.eraOrder.indexOf(e),
                        a = k.eraOrder.indexOf(t);
                      return "fiction asc" === y ? a - r : r - a;
                    }
                    return 0;
                  }),
                [k, y],
              ),
              P = () => {
                t.current &&
                  (v(!0),
                  i.A.to(window, {
                    duration: 1.5,
                    scrollTo: { y: t.current, offsetY: 0 },
                    ease: "power2.inOut",
                    onComplete: () => {
                      v(!1);
                    },
                  }));
              };
            ((0, o.L)(
              () => {
                (d.current.length &&
                  d.current.forEach((e) => {
                    e.kill();
                  }),
                  i.A.utils.toArray(".timeline-entry").forEach((e, t) => {
                    let r = c().create({
                      trigger: e,
                      start: "top center",
                      end: "center center",
                      onEnter: () => {
                        i.A.to(a.current, {
                          rotation: 36 * (t + 1),
                          duration: 4,
                          ease: "elastic.out(1, 0.5)",
                        });
                      },
                      onEnterBack: () => {
                        i.A.to(a.current, {
                          rotation: 36 * t,
                          duration: 4,
                          ease: "elastic.out(1, 0.5)",
                        });
                      },
                    });
                    d.current.push(r);
                  }),
                  i.A.fromTo(
                    n.current,
                    { height: 0 },
                    {
                      height: "100%",
                      ease: "none",
                      scrollTrigger: {
                        trigger: t.current,
                        start: "top center",
                        end: "bottom center",
                        scrub: !0,
                      },
                    },
                  ));
              },
              { scope: r, dependencies: [y, h] },
            ),
              (0, o.L)(
                () => {
                  let e = document.querySelector(".timeline-controls"),
                    r = () => {
                      (i.A.set(e, { pointerEvents: "auto" }),
                        i.A.fromTo(
                          e,
                          { opacity: 0 },
                          { opacity: 1, duration: 0.4, ease: "power2.inOut" },
                        ));
                    },
                    a = () => {
                      (i.A.set(e, { pointerEvents: "none" }),
                        i.A.fromTo(
                          e,
                          { opacity: 1 },
                          { opacity: 0, duration: 0.4, ease: "power2.inOut" },
                        ));
                    };
                  c().create({
                    trigger: t.current,
                    start: "top 10%",
                    end: "bottom-=100px bottom",
                    onEnter: () => {
                      r();
                    },
                    onLeave: () => {
                      a();
                    },
                    onEnterBack: () => {
                      r();
                    },
                    onLeaveBack: () => {
                      a();
                    },
                  });
                },
                { scope: t },
              ));
            let S = 0;
            return (0, l.jsxs)("section", {
              ref: t,
              "aria-label": "Tomb Raider timeline",
              className:
                "relative bg-white bg-[url('/images/paper-texture_main_tile(tinyfied).jpg')] bg-contain bg-top py-40 text-black",
              children: [
                (0, l.jsx)(u(), {
                  src: "/images/welcome/paper/timeline-border-top.png",
                  alt: "Top edge of paper background",
                  width: 1440,
                  height: 68,
                  className:
                    "absolute top-0 left-0 z-20 w-full -translate-y-1/2",
                }),
                (0, l.jsxs)("div", {
                  className: "absolute inset-0 overflow-hidden",
                  children: [
                    (0, l.jsx)(u(), {
                      src: "/images/welcome/lines/timeline-topo-lines.png",
                      alt: "Topographic lines weaving across the paper background",
                      width: 1087,
                      height: 1088,
                      className:
                        "pointer-events-none absolute top-0 left-0 -translate-x-1/3 -translate-y-[10%] opacity-20 lg:w-3/4",
                    }),
                    (0, l.jsx)(u(), {
                      src: "/images/welcome/lines/timeline-topo-lines.png",
                      alt: "Topographic lines weaving across the paper background",
                      width: 1087,
                      height: 1088,
                      className:
                        "pointer-events-none absolute right-0 bottom-0 translate-x-1/3 translate-y-[10%] rotate-180 opacity-20 lg:w-3/4",
                    }),
                  ],
                }),
                (0, l.jsx)("div", {
                  className:
                    "pointer-events-none absolute inset-0 z-[25] overflow-hidden",
                  children: (0, l.jsx)("div", {
                    ref: n,
                    className:
                      "absolute top-0 left-1/2 h-full w-full -translate-x-1/2 lg:w-[1018px]",
                    style: {
                      backgroundImage:
                        "url('/images/welcome/lines/timeline-dashed-line.svg')",
                      backgroundRepeat: "repeat-y",
                      backgroundSize: "100% auto",
                      maskImage:
                        "linear-gradient(to bottom, black 0%, black 95%, transparent 100%)",
                      maskSize: "100% 200%",
                      maskPosition: "0 -100%",
                      WebkitMaskImage:
                        "linear-gradient(to bottom, black 0%, black 95%, transparent 100%)",
                      WebkitMaskSize: "100% 200%",
                      WebkitMaskPosition: "0 -100%",
                    },
                  }),
                }),
                A.map((e) =>
                  (0, l.jsxs)(
                    "div",
                    {
                      id: `timeline-group-${e}`,
                      className: "mb-12",
                      children: [
                        (0, l.jsx)("h2", {
                          className:
                            "font-spline-sans-mono px-4 text-right text-6xl font-bold text-yellow-900/40 uppercase lg:sticky lg:top-20 lg:right-0 lg:px-40 lg:text-8xl",
                          children: e,
                        }),
                        (0, l.jsx)("div", {
                          ref: r,
                          className: "overflow-hidden py-4",
                          children: (0, l.jsx)("div", {
                            className: "relative z-30 mx-auto max-w-6xl",
                            children: k.grouped[e].map((e) => {
                              let t = (S += 1) % 2 == 0;
                              return (0, l.jsxs)(
                                s.Fragment,
                                {
                                  children: [
                                    t &&
                                      (0, l.jsx)(u(), {
                                        src: "/images/welcome/lines/timeline-topo-lines.png",
                                        alt: "Topographic lines weaving across the paper background",
                                        width: 1087,
                                        height: 1088,
                                        className: `pointer-events-none absolute ${S % 4 == 0 ? "left-0 -translate-x-1/2 scale-125" : "right-0 translate-x-1/2 -scale-125"} opacity-20 lg:w-3/4`,
                                      }),
                                    (0, l.jsx)(m.A, {
                                      product: e,
                                      index: S - 1,
                                      scrollingToTop: b,
                                    }),
                                  ],
                                },
                                e.slug,
                              );
                            }),
                          }),
                        }),
                      ],
                    },
                    e,
                  ),
                ),
                (0, l.jsx)(p.A, {
                  products: k.filteredAndSortedProducts,
                  uniqueCategories: j,
                  currentCategory: h,
                  currentSortOrder: y,
                  onCategoryChange: (e) => {
                    (f(e), P());
                  },
                  onSortOrderChange: (e) => {
                    (w(e), P());
                  },
                  sortedGroupKeys: A,
                }),
                (0, l.jsx)("div", {
                  className: "sticky bottom-0 left-0",
                  children: (0, l.jsx)(u(), {
                    ref: a,
                    src: "/images/compass.webp",
                    alt: "Timeline Compass",
                    width: 1096,
                    height: 1096,
                    className: "compass w-3/4 -translate-x-1/3 lg:w-1/3",
                  }),
                }),
              ],
            });
          }
          ((m = (f.then ? (await f)() : f)[0]), a());
        } catch (e) {
          a(e);
        }
      });
    },
    79988: (e, t, r) => {
      "use strict";
      r.a(e, async (e, a) => {
        try {
          r.d(t, { A: () => h });
          var l = r(2183),
            s = r(36439),
            i = r(15013),
            o = r.n(i),
            n = r(27823),
            c = r(16890),
            d = r(22238),
            u = r(80707),
            m = r.n(u),
            p = e([d]);
          function h({ welcomePage: e }) {
            let t = (0, s.useRef)(null),
              r = (0, s.useRef)(null),
              a = m().compact(
                e.characterSliderItems?.map((e) => e?.fields) ?? [],
              );
            return (
              (0, c.L)(
                () => {
                  let e = r.current;
                  n.A.to(".characters-transition-leaves", {
                    yPercent: -25,
                    scrollTrigger: {
                      trigger: e,
                      start: "top bottom",
                      end: "bottom top",
                      scrub: 0.5,
                    },
                  });
                },
                { scope: t },
              ),
              (0, l.jsxs)("section", {
                ref: t,
                "aria-label": "Supporting characters",
                className:
                  "relative bg-[url('/images/hero-texture_dark-wood(tinyfied).jpg')] bg-cover py-32 lg:pt-96 lg:pb-80",
                children: [
                  (0, l.jsx)("div", {
                    ref: r,
                    className:
                      "pointer-events-none absolute top-0 left-0 z-50 w-full -translate-y-1/3 will-change-transform",
                    children: (0, l.jsx)(o(), {
                      width: 1920,
                      height: 1403,
                      alt: "Verdant jungle foliage teems with life, from broad leaves to delicate fronds, highlighted by a cluster of vibrant orange flowers.",
                      src: "/images/transitions/Transition_2.webp",
                      className: "characters-transition-leaves w-full",
                      priority: !0,
                    }),
                  }),
                  (0, l.jsx)("h2", {
                    id: "characters",
                    className:
                      "mb-16 text-center text-xl font-bold tracking-[4px] uppercase",
                    children: e.charactersHeading,
                  }),
                  (0, l.jsx)(d.A, { slides: a }),
                  (0, l.jsx)("div", {
                    className:
                      "pointer-events-none absolute bottom-0 left-0 z-40 w-full translate-y-1/4",
                    children: (0, l.jsx)(o(), {
                      width: 1920,
                      height: 483,
                      className: "w-full object-cover",
                      alt: "Hardwood transition",
                      src: "/images/hero-transition(tinyfied).webp",
                    }),
                  }),
                ],
              })
            );
          }
          ((d = (p.then ? (await p)() : p)[0]), a());
        } catch (e) {
          a(e);
        }
      });
    },
    80609: (e, t, r) => {
      "use strict";
      r.d(t, { R: () => i });
      var a = r(2183);
      r(36439);
      var l = r(15013),
        s = r.n(l);
      function i({
        src: e,
        alt: t,
        width: r,
        height: l,
        priority: o = !1,
        rotateClass: n = "",
        className: c = "",
        objectFitClass: d = "object-contain",
        shadow: u = !0,
      }) {
        let m = "square",
          p = "aspect-square",
          h = "scale-100";
        if (r && l) {
          let e = r / l;
          0.1 > Math.abs(e - 1)
            ? ((m = "square"),
              (p = "aspect-square w-full"),
              (h = "lg:scale-90"))
            : e > 1
              ? ((m = "landscape"), (p = "aspect-[3/2] w-full"))
              : ((m = "portrait"),
                (p = "aspect-[2/3] h-full max-h-[50vh] lg:max-h-[500px]"));
        }
        return (0, a.jsxs)("div", {
          className: `relative ${p} ${h} ${n} ${c}`,
          children: [
            (0, a.jsx)("div", {
              className: "relative z-20 h-full w-full",
              children: (0, a.jsx)(s(), {
                src: e,
                alt: t,
                fill: !0,
                priority: o,
                sizes: "(max-width: 1024px) 100vw, 50vw",
                className: `relative z-20 ${d} p-2.5`,
              }),
            }),
            (0, a.jsx)(s(), {
              className:
                "pointer-events-none absolute inset-0 z-30 object-contain",
              src: `/images/welcome/paper/${m}-paper-frame.png`,
              alt: "A paper frame around the image",
              priority: o,
              fill: !0,
              sizes: "(max-width: 1024px) 100vw, 50vw",
            }),
            u &&
              (0, a.jsx)("div", {
                className: `${p} absolute -bottom-4 left-1/2 h-full -translate-x-1/2 bg-black opacity-60 blur-lg`,
              }),
          ],
        });
      }
    },
    80831: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => u });
      var a = r(2183),
        l = r(15013),
        s = r.n(l);
      function i() {
        return (0, a.jsx)(s(), {
          src: "/images/divider.svg",
          className: "my-12 w-full",
          width: "0",
          height: "0",
          alt: "divider",
          priority: !0,
        });
      }
      var o = r(46728),
        n = r.n(o),
        c = r(31153),
        d = r(43948);
      function u(e) {
        let {
            title: t,
            children: r,
            showSignUp: l,
            textAlign: o,
            largerFont: u,
          } = e,
          m = (0, c.useRouter)();
        return (0, a.jsxs)("div", {
          className: `${o || "text-center"} align-center min-w-0 flex-1 justify-center text-white`,
          children: [
            (0, a.jsx)("h2", {
              className: `${u ? "text-5xl leading-[110%] lg:text-7xl" : "text-5xl"} font-normal tracking-normal drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]`,
              children: t,
            }),
            (0, a.jsx)("p", {
              className: `${u && "text-lg leading-[150%] lg:text-xl"} pt-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]`,
              children: r,
            }),
            l
              ? (0, a.jsxs)(n(), {
                  className:
                    "account_register_cta border-radius-8 group relative mt-12 inline-flex items-center overflow-hidden rounded-lg border-2 border-yellow-500/50 bg-transparent px-6 py-2 text-base text-white transition duration-300 canhover:hover:text-black",
                  onClick: () => {
                    m.pathname.includes("/news") &&
                      m.query.category &&
                      m.query.article &&
                      (0, d.d4)(window.location.href);
                  },
                  href: "/registration",
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "pointer-events-none absolute left-0 top-0 z-10 h-full w-full opacity-0 transition duration-300 canhover:group-hover:opacity-100",
                      children: (0, a.jsx)(s(), {
                        src: "/images/gold-button-texture-1.jpg",
                        fill: !0,
                        className: "object-cover",
                        alt: "Gold sheen",
                        sizes: "256px",
                      }),
                    }),
                    (0, a.jsx)("span", {
                      className: "relative z-20",
                      children: "Sign Up",
                    }),
                  ],
                })
              : (0, a.jsx)(i, {}),
          ],
        });
      }
    },
    86215: (e, t, r) => {
      "use strict";
      r.a(e, async (e, a) => {
        try {
          (r.r(t), r.d(t, { __N_SSG: () => y, default: () => w }));
          var l = r(2183),
            s = r(4448),
            i = r(90118),
            o = r(49980),
            n = r(20162),
            c = r(41036),
            d = r(46402),
            u = r.n(d),
            m = r(55872),
            p = r(71113),
            h = r(74105),
            g = r(79988),
            f = r(80935),
            x = e([s, o, n, m, p, h, g]);
          [s, o, n, m, p, h, g] = x.then ? (await x)() : x;
          var y = !0;
          function w({
            welcomePage: e,
            products: t,
            navItems: r,
            websiteSingleton: a,
            footerSocialLinks: d,
            timelineProducts: x,
            signUpBanner: y,
          }) {
            return (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsxs)(u(), {
                  children: [
                    (0, l.jsx)("title", {
                      children: "Tomb Raider | Meet Lara Croft",
                    }),
                    (0, l.jsx)(
                      "meta",
                      {
                        name: "description",
                        content:
                          "Who is Lara Croft? Meet our fearless archeologist and adventurer! Explore her adventures through the years and meet the supporting characters of Tomb Raider.",
                      },
                      "description",
                    ),
                    (0, l.jsx)(
                      "meta",
                      {
                        name: "keywords",
                        content:
                          "Tomb Raider, Lara Croft, adventure, welcome, timeline, video games, movies, comics",
                      },
                      "keywords",
                    ),
                    (0, l.jsx)(
                      "meta",
                      {
                        property: "og:title",
                        content: "Tomb Raider | Meet Lara Croft",
                      },
                      "og:title",
                    ),
                    (0, l.jsx)(
                      "meta",
                      {
                        property: "og:description",
                        content:
                          "Who is Lara Croft? Meet our fearless archeologist and adventurer! Explore her adventures through the years and meet the supporting characters of Tomb Raider.",
                      },
                      "og:description",
                    ),
                    (0, l.jsx)(
                      "meta",
                      {
                        property: "og:image",
                        content: `${f.W}/images/welcome/meet-lara-meta-image.jpg`,
                      },
                      "og:image",
                    ),
                    (0, l.jsx)("meta", {
                      name: "viewport",
                      content: "width=device-width, initial-scale=1.0",
                    }),
                    (0, l.jsx)(
                      "meta",
                      { name: "twitter:card", content: "summary_large_image" },
                      "twitter:card",
                    ),
                    (0, l.jsx)(
                      "meta",
                      {
                        name: "twitter:title",
                        content: "Tomb Raider | Meet Lara Croft",
                      },
                      "twitter:title",
                    ),
                    (0, l.jsx)(
                      "meta",
                      {
                        name: "twitter:description",
                        content:
                          "Who is Lara Croft? Meet our fearless archeologist and adventurer! Explore her adventures through the years and meet the supporting characters of Tomb Raider.",
                      },
                      "twitter:description",
                    ),
                    (0, l.jsx)(
                      "meta",
                      {
                        name: "twitter:image",
                        content: "/images/welcome/meet-lara-meta-image.jpg",
                      },
                      "twitter:image",
                    ),
                    (0, l.jsx)(
                      "meta",
                      {
                        name: "twitter:image:alt",
                        content:
                          "Meet Lara Croft - Tomb Raider's iconic adventurer and archaeologist",
                      },
                      "twitter:image:alt",
                    ),
                    (0, l.jsx)(
                      "meta",
                      { name: "twitter:site", content: "@tombraider" },
                      "twitter:site",
                    ),
                  ],
                }),
                (0, l.jsx)(o.Ay, { surveys: [], navItems: r, signUpBanner: y }),
                (0, l.jsxs)("main", {
                  className: "relative z-10 overflow-x-clip",
                  children: [
                    (0, l.jsx)(m.A, { welcomePage: e }),
                    (0, l.jsx)(p.A, { welcomePage: e }),
                    (0, l.jsx)(h.A, { timelineProducts: x }),
                    (0, l.jsx)(g.A, { welcomePage: e }),
                    e.featuredProductsEnabled &&
                      (0, l.jsx)(c.A, {
                        className: "pt-8 lg:pt-32",
                        children: (0, l.jsx)(s.A, {
                          products: t,
                          title: e.featuredProductsHeading ?? "Featured Games",
                        }),
                      }),
                    (0, l.jsx)(i.A, { websiteSingleton: a }),
                  ],
                }),
                (0, l.jsx)(n.A, {
                  websiteSingleton: a,
                  navItems: r,
                  footerSocialLinks: d,
                }),
              ],
            });
          }
          a();
        } catch (e) {
          a(e);
        }
      });
    },
    90118: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => o });
      var a = r(2183),
        l = r(80831),
        s = r(15013),
        i = r.n(s);
      function o({ websiteSingleton: e }) {
        return (0, a.jsxs)("aside", {
          "aria-label": "Society of Raiders sign-up call to action",
          className:
            "relative flex aspect-video w-screen flex-col justify-center bg-black pb-8 lg:px-24 lg:py-16",
          children: [
            (0, a.jsxs)("div", {
              className:
                "relative top-0 left-0 aspect-video w-full lg:absolute lg:aspect-auto lg:h-full",
              children: [
                (0, a.jsx)(i(), {
                  fill: !0,
                  alt: e.footerCtaBackground?.fields.description ?? "",
                  src: `https:${e.footerCtaBackground?.fields.file?.url}`,
                }),
                (0, a.jsx)("div", {
                  className: "absolute top-0 left-0 h-full w-full bg-black/15",
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className: "relative z-10 max-w-3xl px-8 py-2",
              children: (0, a.jsx)(l.A, {
                largerFont: !0,
                textAlign: "text-left",
                showSignUp: !0,
                title: e.footerCtaTitle,
                children: e.footerCtaDescription,
              }),
            }),
          ],
        });
      }
    },
    95168: (e, t, r) => {
      "use strict";
      r.a(e, async (e, a) => {
        try {
          r.d(t, { x: () => p });
          var l = r(2183),
            s = r(36439),
            i = r(15013),
            o = r.n(i),
            n = r(92642),
            c = r(16890),
            d = r(27823),
            u = r(20561),
            m = e([n]);
          function p({ isOpen: e, onClose: t, slide: r }) {
            let a = (0, s.useRef)(null),
              [i, m] = (0, s.useState)(1),
              h = (0, s.useRef)(null),
              g = r?.description
                .split("\n")
                .map((e, t) =>
                  (0, l.jsxs)(
                    s.Fragment,
                    {
                      children: [
                        e,
                        t < r.description.split("\n").length - 1 &&
                          (0, l.jsx)("br", {}),
                      ],
                    },
                    t,
                  ),
                );
            return ((0, c.L)(
              () => {
                if (
                  (h.current && (h.current.kill(), (h.current = null), m(1)),
                  e && r?.images && r.images.length > 2)
                ) {
                  h.current = d.A.timeline({ repeat: -1 });
                  let e = r.images.length - 1;
                  for (let t = 0; t < e; t++) {
                    let e = 1 + t,
                      a = e === r.images.length - 1 ? 1 : e + 1;
                    h.current.to({}, { duration: 2, onComplete: () => m(a) });
                  }
                }
                return () => {
                  h.current && (h.current.kill(), (h.current = null));
                };
              },
              { dependencies: [e, r] },
            ),
            (0, c.L)(
              () => {
                if (a.current) {
                  let t = d.A.timeline();
                  e
                    ? ((document.body.style.overflow = "hidden"),
                      d.A.set(a.current, { display: "flex" }),
                      t
                        .to(".modal-content", {
                          duration: 0.4,
                          opacity: 1,
                          y: 0,
                          ease: "power2.out",
                        })
                        .to(
                          ".modal-background",
                          { duration: 0.4, opacity: 1, ease: "power2.out" },
                          "-=0.1",
                        ))
                    : ((document.body.style.overflow = "auto"),
                      t
                        .to(".modal-content", {
                          duration: 0.4,
                          opacity: 0,
                          y: 50,
                          ease: "power2.out",
                        })
                        .to(
                          ".modal-background",
                          { duration: 0.4, opacity: 0, ease: "power2.out" },
                          "-=0.1",
                        )
                        .set(a.current, { display: "none" }));
                }
              },
              { scope: a, dependencies: [e] },
            ),
            r)
              ? (0, l.jsxs)("div", {
                  ref: a,
                  className:
                    "fixed inset-0 z-[80] hidden justify-center lg:items-center",
                  children: [
                    (0, l.jsx)("div", {
                      className:
                        "modal-background absolute inset-0 bg-trueblack/70 opacity-0",
                      onClick: t,
                    }),
                    (0, l.jsxs)("div", {
                      className:
                        "modal-content relative mt-24 h-[calc(100svh-6rem)] w-full max-w-6xl translate-y-12 bg-black opacity-0 lg:mx-20 lg:mt-0 lg:h-auto",
                      children: [
                        (0, l.jsx)("button", {
                          onClick: t,
                          className:
                            "group fixed bottom-3 right-3 z-10 flex size-11 items-center justify-center rounded-full border-2 border-darkgray-500 bg-darkgray-200 lg:absolute lg:right-10 lg:top-10",
                          children: (0, l.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            height: "40px",
                            viewBox: "0 -960 960 960",
                            width: "40px",
                            className:
                              "fill-white transition-transform duration-300 group-hover:rotate-90 group-hover:fill-yellow-300",
                            children: (0, l.jsx)("path", {
                              d: "m253.9-229.79-24.11-24.11L455.9-480 229.79-706.1l24.11-24.11L480-504.1l226.1-226.11 24.11 24.11L504.1-480l226.11 226.1-24.11 24.11L480-455.9 253.9-229.79Z",
                            }),
                          }),
                        }),
                        (0, l.jsxs)("div", {
                          className:
                            "flex h-full flex-col gap-4 overflow-auto p-4 lg:flex-row lg:gap-12 lg:p-14",
                          children: [
                            (0, l.jsx)("div", {
                              className:
                                "mx-auto mb-6 flex w-full max-w-lg items-center justify-center lg:mb-0 lg:w-2/5 lg:max-w-none",
                              children: (0, l.jsx)("div", {
                                className:
                                  "group relative aspect-square w-full",
                                children:
                                  r.images && r.images.length > 1
                                    ? r.images.map((e, t) =>
                                        (0, l.jsx)(
                                          "div",
                                          {
                                            className: `absolute inset-0 transition-opacity duration-500 ${t === i ? "opacity-100" : "opacity-0"}`,
                                            children: (0, l.jsx)(u.I, {
                                              src: (0, n._c)(
                                                e?.fields.file?.url,
                                              ),
                                              alt: e?.fields.description || "",
                                              isModal: !0,
                                            }),
                                          },
                                          e?.sys.id,
                                        ),
                                      )
                                    : (0, l.jsx)(u.I, {
                                        src: (0, n._c)(
                                          r.images[0]?.fields.file?.url,
                                        ),
                                        alt:
                                          r.images[0]?.fields.description || "",
                                        isModal: !0,
                                      }),
                              }),
                            }),
                            (0, l.jsxs)("div", {
                              className:
                                "mx-auto flex w-full max-w-lg flex-col pb-20 lg:w-3/5 lg:max-w-none lg:justify-center lg:pb-0",
                              children: [
                                (0, l.jsxs)("div", {
                                  className: "mb-4 flex justify-between",
                                  children: [
                                    (0, l.jsx)("h2", {
                                      className: "text-[2rem] font-bold",
                                      children: r.name,
                                    }),
                                    (0, l.jsxs)("div", {
                                      className: "flex gap-4",
                                      children: [
                                        (0, l.jsx)("div", {
                                          className:
                                            "-left-16 z-10 flex size-12 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-yellow-300 opacity-75 transition hover:opacity-100 lg:absolute lg:top-1/2 lg:-translate-y-1/2",
                                          id: "character-prev",
                                          children: (0, l.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            height: "24px",
                                            viewBox: "0 -960 960 960",
                                            width: "24px",
                                            fill: "#FFFFFF",
                                            children: (0, l.jsx)("path", {
                                              d: "m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z",
                                            }),
                                          }),
                                        }),
                                        (0, l.jsx)("div", {
                                          className:
                                            "-right-16 z-10 flex size-12 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-yellow-300 opacity-75 transition hover:opacity-100 lg:absolute lg:top-1/2 lg:-translate-y-1/2",
                                          id: "character-next",
                                          children: (0, l.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            height: "24px",
                                            viewBox: "0 -960 960 960",
                                            width: "24px",
                                            fill: "#FFFFFF",
                                            children: (0, l.jsx)("path", {
                                              d: "M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, l.jsx)("p", {
                                  className: "text-lg",
                                  children: g,
                                }),
                                (0, l.jsx)(o(), {
                                  width: 369,
                                  height: 3,
                                  src: "/images/welcome/lines/modal-line.svg",
                                  alt: "A streak of gray underneath the character description",
                                  className: "w-full py-6",
                                }),
                                r.appearsIn &&
                                  r.appearsIn.length > 0 &&
                                  (0, l.jsxs)("div", {
                                    children: [
                                      (0, l.jsx)("h3", {
                                        className: "mb-2 font-bold",
                                        children: "Appears in:",
                                      }),
                                      r.appearsIn.map((e, t) =>
                                        (0, l.jsxs)(
                                          s.Fragment,
                                          {
                                            children: [
                                              (0, l.jsx)("a", {
                                                href: `/products/${e?.fields.category?.fields.slug}/${e?.fields.slug}`,
                                                target: "_blank",
                                                className:
                                                  "appears-in-link underline hover:text-yellow-300",
                                                children: e?.fields.title,
                                              }),
                                              t <
                                                (r.appearsIn?.length ?? 0) -
                                                  1 && ", ",
                                            ],
                                          },
                                          t,
                                        ),
                                      ),
                                    ],
                                  }),
                              ],
                            }),
                            (0, l.jsx)("div", {
                              className:
                                "pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black to-transparent lg:hidden",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                })
              : null;
          }
          ((n = (m.then ? (await m)() : m)[0]), a());
        } catch (e) {
          a(e);
        }
      });
    },
    95783: (e, t, r) => {
      "use strict";
      r.a(e, async (e, a) => {
        try {
          r.d(t, { OU: () => c, Om: () => u, Q0: () => d, _8: () => n });
          var l = r(92642),
            s = r(80935),
            i = e([l]);
          l = (i.then ? (await i)() : i)[0];
          let m = `${s.W}/#organization`,
            p = `${s.W}/#website`,
            h = "Tomb Raider",
            g = "https://en.wikipedia.org/wiki/Tomb_Raider";
          function o(e) {
            let t = (0, l._c)(e.footerLogo?.fields.file?.url);
            return t ? { logo: { "@type": "ImageObject", url: t } } : {};
          }
          function n(e, t) {
            return {
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": m,
              name: h,
              url: s.W,
              ...o(e),
              sameAs: [
                ...t.map((e) => e.link),
                g,
                "https://www.wikidata.org/wiki/Q270503",
              ],
            };
          }
          function c() {
            return {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": p,
              name: h,
              url: s.W,
              publisher: { "@id": m },
            };
          }
          function d(e, t) {
            let r = `${s.W}/news/${e.category?.fields.slug}/${e.slug}`,
              a = (0, l._c)(e.headerImage?.fields.file?.url),
              i = { "@type": "Organization", "@id": m, name: h, ...o(t) };
            return {
              "@context": "https://schema.org",
              "@type": "NewsArticle",
              headline: e.title,
              description: e.excerpt || e.socialMediaShareDescription,
              ...(a ? { image: [a] } : {}),
              datePublished: e.publishDate,
              dateModified: e.sysUpdatedAt ?? e.publishDate,
              url: r,
              mainEntityOfPage: { "@type": "WebPage", "@id": r },
              author: i,
              publisher: i,
            };
          }
          function u(e) {
            let t = `${s.W}/products/${e.category?.fields.slug}/${e.slug}`,
              r = (0, l._c)(
                e.titleLogo?.fields.file?.url ??
                  e.galleryEntries?.[0]?.fields.image?.fields.file?.url,
              );
            return {
              "@context": "https://schema.org",
              "@type": "VideoGame",
              name: e.title,
              url: t,
              ...(e.shortDescription
                ? { description: e.shortDescription }
                : {}),
              ...(r ? { image: r } : {}),
              ...(e.releaseDate ? { datePublished: e.releaseDate } : {}),
              ...(e.publisher
                ? { publisher: { "@type": "Organization", name: e.publisher } }
                : {}),
              ...(e.esrbRating
                ? { contentRating: `ESRB ${e.esrbRating}` }
                : {}),
              isPartOf: {
                "@type": "VideoGameSeries",
                name: "Tomb Raider",
                sameAs: g,
              },
            };
          }
          a();
        } catch (e) {
          a(e);
        }
      });
    },
  },
  (e) => {
    (e.O(
      0,
      [
        9950, 8762, 5013, 2696, 1329, 6342, 3492, 4971, 9980, 2642, 636, 6593,
        8792,
      ],
      () => e((e.s = 28799)),
    ),
      (_N_E = e.O()));
  },
]);
