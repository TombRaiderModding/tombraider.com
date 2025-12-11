(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [174],
  {
    51923: function (e, t, l) {
      "use strict";
      l.d(t, {
        V: function () {
          return useGSAP;
        },
      });
      var r = l(52983),
        a = l(6616);
      /*!
       * @gsap/react 2.1.1
       * https://gsap.com
       *
       * Copyright 2008-2024, GreenSock. All rights reserved.
       * Subject to the terms at https://gsap.com/standard-license or for
       * Club GSAP members, the agreement issued with that membership.
       * @author: Jack Doyle, jack@greensock.com
       */ let i =
          "undefined" != typeof window ? r.useLayoutEffect : r.useEffect,
        isConfig = (e) => e && !Array.isArray(e) && "object" == typeof e,
        s = [],
        o = {},
        n = a.ZP,
        useGSAP = (e, t = s) => {
          let l = o;
          (isConfig(e)
            ? ((l = e),
              (e = null),
              (t = "dependencies" in l ? l.dependencies : s))
            : isConfig(t) &&
              (t = "dependencies" in (l = t) ? l.dependencies : s),
            e &&
              "function" != typeof e &&
              console.warn(
                "First parameter must be a function or config object",
              ));
          let { scope: a, revertOnUpdate: c } = l,
            d = (0, r.useRef)(!1),
            u = (0, r.useRef)(n.context(() => {}, a)),
            m = (0, r.useRef)((e) => u.current.add(null, e)),
            p = t && t.length && !c;
          return (
            i(() => {
              if ((e && u.current.add(e, a), !p || !d.current))
                return () => u.current.revert();
            }, t),
            p && i(() => ((d.current = !0), () => u.current.revert()), s),
            { context: u.current, contextSafe: m.current }
          );
        };
      ((useGSAP.register = (e) => {
        n = e;
      }),
        (useGSAP.headless = !0));
    },
    52477: function (e, t, l) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/lara-croft",
        function () {
          return l(46271);
        },
      ]);
    },
    7365: function (e, t, l) {
      "use strict";
      var r = l(97458),
        a = l(10821),
        i = l.n(a);
      t.Z = (e) => {
        let { href: t, children: l, className: a, ...s } = e,
          o = "string" == typeof t && t.startsWith("http");
        return o
          ? (0, r.jsx)("a", {
              href: t,
              target: "_blank",
              rel: "noopener noreferrer",
              className: a,
              ...s,
              children: l,
            })
          : (0, r.jsx)(i(), {
              legacyBehavior: !0,
              href: t,
              ...s,
              children: (0, r.jsx)("a", { className: a, children: l }),
            });
      };
    },
    99915: function (e, t, l) {
      "use strict";
      l.a(e, async function (e, r) {
        try {
          l.d(t, {
            Z: function () {
              return Footer;
            },
          });
          var a = l(97458),
            i = l(47681),
            s = l.n(i),
            o = l(10821),
            n = l.n(o),
            c = l(2300),
            d = l(7365),
            u = l(91806),
            m = e([c, u]);
          function Footer(e) {
            var t, l, r;
            let { websiteSingleton: i, navItems: o, footerSocialLinks: m } = e,
              { isLoggedIn: p, shopifyUrl: h } = (0, c.S)(),
              g = o.filter(
                (e) => e.showInFooter && !(p && e.hideForLoggedInUsers),
              ),
              f = o.filter(
                (e) => e.showInSubFooter && !(p && e.hideForLoggedInUsers),
              );
            return (0, a.jsxs)("div", {
              className: "relative w-full bg-black px-8 text-white lg:px-32",
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "flex flex-col items-center justify-center space-y-16 pb-16 pt-16 lg:flex-row lg:items-stretch lg:justify-between lg:space-y-0 lg:pt-32",
                  children: [
                    (0, a.jsx)(s(), {
                      src: (0, u.Wx)(
                        null === (l = i.footerLogo) || void 0 === l
                          ? void 0
                          : null === (t = l.fields.file) || void 0 === t
                            ? void 0
                            : t.url,
                      ),
                      width: 248,
                      height: 248,
                      alt: (0, u.Wx)(
                        null === (r = i.footerLogo) || void 0 === r
                          ? void 0
                          : r.fields.description,
                      ),
                      className: "h-auto w-40",
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-lg text-darkgray-500 ",
                      children: [
                        g.map((e) => {
                          let t = e.link;
                          return (
                            e.shouldReplaceWithGeneratedShopLink &&
                              h &&
                              (t = h),
                            (0, a.jsx)(
                              n(),
                              { href: t, children: e.name },
                              e.link + e.name,
                            )
                          );
                        }),
                        (0, a.jsx)("span", {
                          id: "accessibilityWidget",
                          className: "cursor-pointer",
                          children: "Accessibility",
                        }),
                        (0, a.jsx)("span", {
                          className: "cursor-pointer",
                          onClick: () => {
                            var e;
                            return null === (e = window.OneTrust) ||
                              void 0 === e
                              ? void 0
                              : e.ToggleInfoDisplay();
                          },
                          children:
                            "Do Not Sell or Share My Personal Information",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className:
                    "flex flex-col items-center justify-center space-y-16 pb-16 lg:flex-row lg:items-stretch lg:justify-between lg:space-y-0",
                  children: [
                    (0, a.jsx)("div", {
                      className: "text-center text-darkgray-500",
                      children: i.footerCopyright,
                    }),
                    (0, a.jsx)("div", {
                      className: "flex items-center space-x-4 text-white",
                      children: m.map((e) => {
                        var t, l, r, i;
                        return (0, a.jsx)(
                          d.Z,
                          {
                            href: e.link,
                            children: (0, a.jsx)(s(), {
                              src: (0, u.Wx)(
                                null === (l = e.icon) || void 0 === l
                                  ? void 0
                                  : null === (t = l.fields.file) || void 0 === t
                                    ? void 0
                                    : t.url,
                              ),
                              alt:
                                null !==
                                  (i =
                                    null === (r = e.icon) || void 0 === r
                                      ? void 0
                                      : r.fields.description) && void 0 !== i
                                  ? i
                                  : "",
                              width: 20,
                              height: 20,
                            }),
                          },
                          e.link,
                        );
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)("div", { className: "h-[1px] bg-gray-500" }),
                (0, a.jsxs)("div", {
                  className:
                    "flew-col flex flex-col items-start justify-start gap-x-10 gap-y-10 py-12 text-gray-300 md:justify-between 2xl:flex-row ",
                  children: [
                    (0, a.jsx)("p", {
                      className:
                        "max-w-[1000px] text-center text-sm text-darkgray-300 lg:text-left",
                      children: i.footerLegalNotice,
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "flex w-full flex-wrap items-center justify-center gap-x-10 gap-y-2 text-darkgray-500 md:flex-row md:gap-x-10 md:gap-y-0 lg:w-auto lg:justify-start",
                      children: f.map((e) =>
                        (0, a.jsx)(
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
          (([c, u] = m.then ? (await m)() : m), r());
        } catch (e) {
          r(e);
        }
      });
    },
    19024: function (e, t, l) {
      "use strict";
      l.a(e, async function (e, r) {
        try {
          l.d(t, {
            Z: function () {
              return HorizontalProductList;
            },
          });
          var a = l(97458),
            i = l(96061),
            s = l(52983),
            o = l(47681),
            n = l.n(o),
            c = l(69049),
            d = l(10821),
            u = l.n(d),
            m = l(75443),
            p = l(91806),
            h = l(99288),
            g = e([i, p]);
          function HorizontalProductList(e) {
            let { products: t, title: l, description: r, isHome: i } = e,
              [o, c] = (0, s.useState)(null);
            return (0, a.jsxs)("div", {
              className:
                "flex w-full flex-col items-stretch overflow-x-hidden py-10",
              children: [
                (0, a.jsxs)("div", {
                  className: i
                    ? "flex flex-col flex-wrap justify-between self-stretch px-8 pb-12 lg:flex-row lg:px-16"
                    : "flex w-full flex-col flex-wrap justify-between gap-y-8 px-6 pb-8 lg:flex-row lg:items-end lg:px-12 lg:pb-12",
                  children: [
                    i
                      ? (0, a.jsxs)("div", {
                          className:
                            "flex flex-col flex-wrap items-center gap-x-8 gap-y-4 pb-4 lg:flex-row lg:pb-0",
                          children: [
                            (0, a.jsx)("p", {
                              className:
                                "text-4xl text-black sm:text-5xl lg:text-6xl",
                              children: l,
                            }),
                            (0, a.jsx)(u(), {
                              href: "/products/games",
                              children: (0, a.jsx)(m.Z, {
                                variant: "dark",
                                children: "All Games",
                              }),
                            }),
                          ],
                        })
                      : (0, a.jsxs)("div", {
                          className:
                            "flex flex-col gap-y-4 text-center lg:gap-y-1 lg:text-left",
                          children: [
                            (0, a.jsx)("p", {
                              className:
                                "text-3xl font-medium text-black lg:text-4xl",
                              children: l,
                            }),
                            (0, a.jsx)("p", {
                              className: "text-sm",
                              children: r,
                            }),
                          ],
                        }),
                    t.length > 0 &&
                      (0, a.jsxs)("div", {
                        className: "hidden gap-x-2 lg:flex",
                        children: [
                          (0, a.jsx)(n(), {
                            width: 48,
                            height: 48,
                            alt: "Left arrow",
                            src: "/images/arrow-button-left.svg",
                            className: "mr-2 cursor-pointer",
                            onClick: () => (null == o ? void 0 : o.slidePrev()),
                          }),
                          (0, a.jsx)(n(), {
                            width: 48,
                            height: 48,
                            alt: "Right arrow",
                            onClick: () => (null == o ? void 0 : o.slideNext()),
                            src: "/images/arrow-button-right.svg",
                            className: "cursor-pointer",
                          }),
                        ],
                      }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "px-8 lg:px-16",
                  children: (0, a.jsx)(h.tq, {
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
                      (0, a.jsx)(
                        h.o5,
                        {
                          className: "relative max-w-none shrink-0",
                          style: { width: 300 },
                          children: (0, a.jsx)(ProductItem, { product: e }),
                        },
                        e.slug,
                      ),
                    ),
                  }),
                }),
              ],
            });
          }
          function ProductItem(e) {
            var t, l, r, s, o, d, m, h;
            let { product: g } = e;
            return (0, a.jsx)("div", {
              className:
                "group aspect-[2/3] h-auto w-full cursor-pointer shadow-[0_10px_48px_-16px_rgba(0,0,0,1)]",
              children: (0, a.jsxs)(u(), {
                href: "/products/"
                  .concat(
                    null === (t = g.category) || void 0 === t
                      ? void 0
                      : t.fields.slug,
                    "/",
                  )
                  .concat(g.slug),
                children: [
                  (0, a.jsx)(n(), {
                    fill: !0,
                    alt:
                      null !==
                        (h =
                          null === (r = (0, i.U7_)(g)) || void 0 === r
                            ? void 0
                            : null === (l = r.fields.image) || void 0 === l
                              ? void 0
                              : l.fields.description) && void 0 !== h
                        ? h
                        : "",
                    src: "".concat(
                      (0, p.Wx)(
                        null === (d = (0, i.U7_)(g)) || void 0 === d
                          ? void 0
                          : null === (o = d.fields.image) || void 0 === o
                            ? void 0
                            : null === (s = o.fields.file) || void 0 === s
                              ? void 0
                              : s.url,
                      ),
                      "?fit=fill&w=300&h=450",
                    ),
                    className:
                      "absolute left-0 top-0 h-full w-auto object-cover",
                    sizes: "900px",
                  }),
                  (0, a.jsx)(n(), {
                    fill: !0,
                    alt: "game card overlay",
                    src: "/images/vertical-game-card-overlay.webp",
                    className: "object-contain object-[center_175%] opacity-80",
                    sizes: "900px",
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "absolute bottom-0 h-auto w-full px-4 pb-4 text-white group-hover:bottom-2",
                    style: { transition: "0.4s all ease" },
                    children: [
                      (0, a.jsx)("p", {
                        className: "text-xl font-bold",
                        children: g.title,
                      }),
                      (0, a.jsxs)("div", {
                        className: "relative my-2 h-[3px] w-full",
                        children: [
                          (0, a.jsx)("img", {
                            className:
                              " absolute left-0 top-0 h-full w-full object-fill opacity-100  group-hover:opacity-100",
                            src: "/images/product-divider.svg",
                            alt: "product divider",
                            style: { transition: "all 0.4s ease" },
                          }),
                          (0, a.jsx)("img", {
                            className:
                              " absolute left-0 top-0 h-full w-full object-fill opacity-0  group-hover:opacity-100",
                            alt: "product divider highlighted",
                            src: "/images/product-divider-highlighted.svg",
                            style: { transition: "all 0.4s ease" },
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [
                          (0, a.jsx)("p", {
                            className: "text-sm",
                            children: (0, c.So)(g.releaseDate),
                          }),
                          (0, a.jsx)("div", {
                            className: "flex gap-x-2",
                            children:
                              null === (m = g.ctaButtons) || void 0 === m
                                ? void 0
                                : m.map((e, t) => {
                                    var l, r, i;
                                    return (0, a.jsx)(
                                      n(),
                                      {
                                        width: 16,
                                        height: 16,
                                        alt: "cta button",
                                        src: (0, p.Wx)(
                                          null == e
                                            ? void 0
                                            : null ===
                                                  (i = e.fields.ctaButton) ||
                                                void 0 === i
                                              ? void 0
                                              : null === (r = i.fields.icon) ||
                                                  void 0 === r
                                                ? void 0
                                                : null ===
                                                      (l = r.fields.file) ||
                                                    void 0 === l
                                                  ? void 0
                                                  : l.url,
                                        ),
                                      },
                                      (null == e ? void 0 : e.sys.id) || t,
                                    );
                                  }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)(n(), {
                    className:
                      "absolute bottom-4 left-4 opacity-0 group-hover:bottom-1 group-hover:left-1 group-hover:opacity-60",
                    width: 24,
                    height: 24,
                    alt: "bottom left bracket",
                    src: "/images/small-bottom-left-bracket.svg",
                    style: { transition: "0.4s all ease" },
                  }),
                  (0, a.jsx)(n(), {
                    className:
                      "absolute bottom-4 right-4 opacity-0 group-hover:bottom-1 group-hover:right-1 group-hover:opacity-60",
                    width: 24,
                    height: 24,
                    alt: "bottom right bracket",
                    src: "/images/small-bottom-right-bracket.svg",
                    style: { transition: "0.4s all ease" },
                  }),
                  (0, a.jsx)(n(), {
                    className:
                      "absolute left-4 top-4 opacity-0 group-hover:left-1 group-hover:top-1 group-hover:opacity-60",
                    width: 24,
                    height: 24,
                    alt: "top left bracket",
                    src: "/images/small-top-left-bracket.svg",
                    style: { transition: "0.4s all ease" },
                  }),
                  (0, a.jsx)(n(), {
                    className:
                      "absolute right-4 top-4 opacity-0 group-hover:right-1 group-hover:top-1 group-hover:opacity-60",
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
          (([i, p] = g.then ? (await g)() : g), r());
        } catch (e) {
          r(e);
        }
      });
    },
    20213: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return PaperContainer;
        },
      });
      var r = l(97458),
        a = l(57865),
        i = l(47681),
        s = l.n(i),
        o = l(52983);
      function PaperContainer(e) {
        let { className: t, children: l, ...i } = e,
          n = (0, o.useRef)(null),
          [c, d] = (0, o.useState)(0);
        return (
          (0, o.useEffect)(() => {
            if (n) {
              let e = new ResizeObserver(() => {
                var e, t;
                d(
                  null !==
                    (t =
                      null === (e = n.current) || void 0 === e
                        ? void 0
                        : e.offsetHeight) && void 0 !== t
                    ? t
                    : 0,
                );
              });
              return (
                e.observe(n.current),
                () => {
                  e.disconnect;
                }
              );
            }
          }, [n]),
          (0, r.jsxs)("div", {
            ref: n,
            className: (0, a.cn)("relative w-full pb-24", t),
            ...i,
            children: [
              l,
              (0, r.jsx)("div", {
                className:
                  "absolute left-0 top-0 -z-20 h-full w-full bg-[url('/images/paper-texture_main_tile(tinyfied).jpg')] bg-repeat",
              }),
              (0, r.jsx)("div", {
                style: { height: c },
                className:
                  "pointer-events-none absolute left-0 top-0 w-full overflow-hidden",
                children: (0, r.jsx)(s(), {
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
                (0, r.jsx)(s(), {
                  src: "/images/paper-graphics_BOTTOM_1(tinyfied).webp",
                  alt: "Paper Bottom Overlay",
                  width: "0",
                  priority: !0,
                  height: "0",
                  className:
                    "absolute bottom-0 left-0 -z-20 h-auto w-full object-cover",
                  unoptimized: !0,
                }),
              (0, r.jsx)("div", {
                style: { backgroundSize: "100% auto" },
                className:
                  "absolute left-0 top-0 -z-20 hidden h-full w-[8vw] max-w-[104px] bg-[url('/images/paper-edge_long(tinyfied).webp')] bg-repeat-y md:block",
              }),
              (0, r.jsx)(s(), {
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
    10407: function (e, t, l) {
      "use strict";
      l.d(t, {
        H: function () {
          return PaperFrameImage;
        },
      });
      var r = l(97458);
      l(52983);
      var a = l(47681),
        i = l.n(a);
      function PaperFrameImage(e) {
        let {
            src: t,
            alt: l,
            width: a,
            height: s,
            priority: o = !1,
            rotateClass: n = "",
            className: c = "",
            objectFitClass: d = "object-contain",
            shadow: u = !0,
          } = e,
          m = "square",
          p = "aspect-square",
          h = "scale-100";
        if (a && s) {
          let e = a / s;
          0.1 > Math.abs(e - 1)
            ? ((m = "square"),
              (p = "aspect-square w-full"),
              (h = "lg:scale-90"))
            : e > 1
              ? ((m = "landscape"), (p = "aspect-[3/2] w-full"))
              : ((m = "portrait"),
                (p = "aspect-[2/3] h-full max-h-[50vh] lg:max-h-[500px]"));
        }
        return (0, r.jsxs)("div", {
          className: "relative "
            .concat(p, " ")
            .concat(h, " ")
            .concat(n, " ")
            .concat(c),
          children: [
            (0, r.jsx)("div", {
              className: "relative z-20 h-full w-full",
              children: (0, r.jsx)(i(), {
                src: t,
                alt: l,
                fill: !0,
                priority: o,
                sizes: "(max-width: 1024px) 100vw, 50vw",
                className: "relative z-20 ".concat(d, " p-2.5"),
              }),
            }),
            (0, r.jsx)(i(), {
              className:
                "pointer-events-none absolute inset-0 z-30 object-contain",
              src: "/images/welcome/paper/".concat(m, "-paper-frame.png"),
              alt: "A paper frame around the image",
              priority: o,
              fill: !0,
              sizes: "(max-width: 1024px) 100vw, 50vw",
            }),
            u &&
              (0, r.jsx)("div", {
                className: "".concat(
                  p,
                  " absolute -bottom-4 left-1/2 h-full -translate-x-1/2 bg-black opacity-60 blur-lg",
                ),
              }),
          ],
        });
      }
    },
    12984: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return SignUpCallToAction;
        },
      });
      var r = l(97458),
        a = l(7355),
        i = l(47681),
        s = l.n(i);
      function SignUpCallToAction(e) {
        var t, l, i, o;
        let { websiteSingleton: n } = e;
        return (0, r.jsxs)("div", {
          className:
            "relative flex aspect-video w-screen flex-col justify-center bg-black pb-8 lg:px-24 lg:py-16",
          children: [
            (0, r.jsxs)("div", {
              className:
                "relative left-0 top-0 aspect-video w-full lg:absolute lg:aspect-auto lg:h-full",
              children: [
                (0, r.jsx)(s(), {
                  fill: !0,
                  alt:
                    null !==
                      (o =
                        null === (t = n.footerCtaBackground) || void 0 === t
                          ? void 0
                          : t.fields.description) && void 0 !== o
                      ? o
                      : "",
                  src: "https:".concat(
                    null === (i = n.footerCtaBackground) || void 0 === i
                      ? void 0
                      : null === (l = i.fields.file) || void 0 === l
                        ? void 0
                        : l.url,
                  ),
                }),
                (0, r.jsx)("div", {
                  className: "absolute left-0 top-0 h-full w-full bg-black/15",
                }),
              ],
            }),
            (0, r.jsx)("div", {
              className: "relative z-10 max-w-3xl px-8 py-2",
              children: (0, r.jsx)(a.Z, {
                largerFont: !0,
                textAlign: "text-left",
                showSignUp: !0,
                title: n.footerCtaTitle,
                children: n.footerCtaDescription,
              }),
            }),
          ],
        });
      }
    },
    7355: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return WelcomeSection;
        },
      });
      var r = l(97458),
        a = l(47681),
        i = l.n(a);
      function Divider() {
        return (0, r.jsx)(i(), {
          src: "/images/divider.svg",
          className: "my-12 w-full",
          width: "0",
          height: "0",
          alt: "divider",
          priority: !0,
        });
      }
      var s = l(10821),
        o = l.n(s),
        n = l(93656),
        c = l(5198);
      function WelcomeSection(e) {
        let {
            title: t,
            children: l,
            showSignUp: a,
            textAlign: s,
            largerFont: d,
          } = e,
          u = (0, n.useRouter)();
        return (0, r.jsxs)("div", {
          className: "".concat(
            s || "text-center",
            " align-center min-w-0 flex-1 justify-center text-white",
          ),
          children: [
            (0, r.jsx)("h2", {
              className: "".concat(
                d ? "text-5xl leading-[110%] lg:text-7xl" : "text-5xl",
                " font-normal tracking-normal drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]",
              ),
              children: t,
            }),
            (0, r.jsx)("p", {
              className: "".concat(
                d && "text-lg leading-[150%] lg:text-xl",
                " pt-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]",
              ),
              children: l,
            }),
            a
              ? (0, r.jsxs)(o(), {
                  className:
                    "account_register_cta border-radius-8 group relative mt-12 inline-flex items-center rounded-lg border-2 border-yellow-500 border-opacity-50 bg-transparent px-6 py-2 text-base text-white transition duration-300 canhover:hover:border-opacity-90 canhover:hover:text-black",
                  onClick: () => {
                    u.pathname.includes("/news") &&
                      u.query.category &&
                      u.query.article &&
                      (0, c.OR)(window.location.href);
                  },
                  href: "/registration",
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "pointer-events-none absolute left-0 top-0 z-10 h-full w-full overflow-hidden border-transparent opacity-0 shadow-[0_0px_15px_0px_#F1C662] transition duration-300 canhover:group-hover:opacity-100",
                      children: (0, r.jsx)(i(), {
                        src: "/images/gold-button-texture-1.jpg",
                        fill: !0,
                        className: "object-cover",
                        alt: "Gold sheen",
                        sizes: "256px",
                      }),
                    }),
                    (0, r.jsx)("span", {
                      className:
                        "relative z-20 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]",
                      children: "Sign Up",
                    }),
                  ],
                })
              : (0, r.jsx)(Divider, {}),
          ],
        });
      }
    },
    28335: function (e, t, l) {
      "use strict";
      l.a(e, async function (e, r) {
        try {
          l.d(t, {
            J: function () {
              return CharacterModal;
            },
          });
          var a = l(97458),
            i = l(52983),
            s = l(47681),
            o = l.n(s),
            n = l(91806),
            c = l(51923),
            d = l(97013),
            u = l(24625),
            m = e([n]);
          function CharacterModal(e) {
            var t, l, r;
            let { isOpen: s, onClose: m, slide: p } = e,
              h = (0, i.useRef)(null),
              [g, f] = (0, i.useState)(1),
              x = (0, i.useRef)(null),
              v =
                null == p
                  ? void 0
                  : p.description
                      .split("\n")
                      .map((e, t) =>
                        (0, a.jsxs)(
                          i.Fragment,
                          {
                            children: [
                              e,
                              t < p.description.split("\n").length - 1 &&
                                (0, a.jsx)("br", {}),
                            ],
                          },
                          t,
                        ),
                      );
            return ((0, c.V)(
              () => {
                if (
                  (x.current && (x.current.kill(), (x.current = null), f(1)),
                  s && (null == p ? void 0 : p.images) && p.images.length > 2)
                ) {
                  x.current = d.Z.timeline({ repeat: -1 });
                  let e = p.images.length - 1;
                  for (let t = 0; t < e; t++) {
                    let e = 1 + t,
                      l = e === p.images.length - 1 ? 1 : e + 1;
                    x.current.to({}, { duration: 2, onComplete: () => f(l) });
                  }
                }
                return () => {
                  x.current && (x.current.kill(), (x.current = null));
                };
              },
              { dependencies: [s, p] },
            ),
            (0, c.V)(
              () => {
                if (h.current) {
                  let e = d.Z.timeline();
                  s
                    ? ((document.body.style.overflow = "hidden"),
                      d.Z.set(h.current, { display: "flex" }),
                      e
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
                      e
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
                        .set(h.current, { display: "none" }));
                }
              },
              { scope: h, dependencies: [s] },
            ),
            p)
              ? (0, a.jsxs)("div", {
                  ref: h,
                  className:
                    "fixed inset-0 z-[80] hidden justify-center lg:items-center",
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "modal-background absolute inset-0 bg-trueblack/70 opacity-0",
                      onClick: m,
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "modal-content relative mt-24 h-[calc(100svh-6rem)] w-full max-w-6xl translate-y-12 bg-black opacity-0 lg:mx-20 lg:mt-0 lg:h-auto",
                      children: [
                        (0, a.jsx)("button", {
                          onClick: m,
                          className:
                            "group fixed bottom-3 right-3 z-10 flex size-11 items-center justify-center rounded-full border-2 border-darkgray-500 bg-darkgray-200 lg:absolute lg:right-10 lg:top-10",
                          children: (0, a.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            height: "40px",
                            viewBox: "0 -960 960 960",
                            width: "40px",
                            className:
                              "fill-white transition-transform duration-300 group-hover:rotate-90 group-hover:fill-yellow-300",
                            children: (0, a.jsx)("path", {
                              d: "m253.9-229.79-24.11-24.11L455.9-480 229.79-706.1l24.11-24.11L480-504.1l226.1-226.11 24.11 24.11L504.1-480l226.11 226.1-24.11 24.11L480-455.9 253.9-229.79Z",
                            }),
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "flex h-full flex-col gap-4 overflow-auto p-4 lg:flex-row lg:gap-12 lg:p-14",
                          children: [
                            (0, a.jsx)("div", {
                              className:
                                "mx-auto mb-6 flex w-full max-w-lg items-center justify-center lg:mb-0 lg:w-2/5 lg:max-w-none",
                              children: (0, a.jsx)("div", {
                                className:
                                  "group relative aspect-square w-full",
                                children:
                                  p.images && p.images.length > 1
                                    ? p.images.map((e, t) => {
                                        var l;
                                        return (0, a.jsx)(
                                          "div",
                                          {
                                            className:
                                              "absolute inset-0 transition-opacity duration-500 ".concat(
                                                t === g
                                                  ? "opacity-100"
                                                  : "opacity-0",
                                              ),
                                            children: (0, a.jsx)(u.G, {
                                              src: (0, n.Wx)(
                                                null == e
                                                  ? void 0
                                                  : null ===
                                                        (l = e.fields.file) ||
                                                      void 0 === l
                                                    ? void 0
                                                    : l.url,
                                              ),
                                              alt:
                                                (null == e
                                                  ? void 0
                                                  : e.fields.description) || "",
                                              isModal: !0,
                                            }),
                                          },
                                          null == e ? void 0 : e.sys.id,
                                        );
                                      })
                                    : (0, a.jsx)(u.G, {
                                        src: (0, n.Wx)(
                                          null === (l = p.images[0]) ||
                                            void 0 === l
                                            ? void 0
                                            : null === (t = l.fields.file) ||
                                                void 0 === t
                                              ? void 0
                                              : t.url,
                                        ),
                                        alt:
                                          (null === (r = p.images[0]) ||
                                          void 0 === r
                                            ? void 0
                                            : r.fields.description) || "",
                                        isModal: !0,
                                      }),
                              }),
                            }),
                            (0, a.jsxs)("div", {
                              className:
                                "mx-auto flex w-full max-w-lg flex-col pb-20 lg:w-3/5 lg:max-w-none lg:justify-center lg:pb-0",
                              children: [
                                (0, a.jsxs)("div", {
                                  className: "mb-4 flex justify-between",
                                  children: [
                                    (0, a.jsx)("h2", {
                                      className: "text-[2rem] font-bold",
                                      children: p.name,
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "flex gap-4",
                                      children: [
                                        (0, a.jsx)("div", {
                                          className:
                                            "-left-16 z-10 flex size-12 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-yellow-300 opacity-75 transition hover:opacity-100 lg:absolute lg:top-1/2 lg:-translate-y-1/2",
                                          id: "character-prev",
                                          children: (0, a.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            height: "24px",
                                            viewBox: "0 -960 960 960",
                                            width: "24px",
                                            fill: "#FFFFFF",
                                            children: (0, a.jsx)("path", {
                                              d: "m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z",
                                            }),
                                          }),
                                        }),
                                        (0, a.jsx)("div", {
                                          className:
                                            "-right-16 z-10 flex size-12 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-yellow-300 opacity-75 transition hover:opacity-100 lg:absolute lg:top-1/2 lg:-translate-y-1/2",
                                          id: "character-next",
                                          children: (0, a.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            height: "24px",
                                            viewBox: "0 -960 960 960",
                                            width: "24px",
                                            fill: "#FFFFFF",
                                            children: (0, a.jsx)("path", {
                                              d: "M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, a.jsx)("p", {
                                  className: "text-lg",
                                  children: v,
                                }),
                                (0, a.jsx)(o(), {
                                  width: 369,
                                  height: 3,
                                  src: "/images/welcome/lines/modal-line.svg",
                                  alt: "A streak of gray underneath the character description",
                                  className: "w-full py-6",
                                }),
                                p.appearsIn &&
                                  p.appearsIn.length > 0 &&
                                  (0, a.jsxs)("div", {
                                    children: [
                                      (0, a.jsx)("h3", {
                                        className: "mb-2 font-bold",
                                        children: "Appears in:",
                                      }),
                                      p.appearsIn.map((e, t) => {
                                        var l, r, s;
                                        return (0, a.jsxs)(
                                          i.Fragment,
                                          {
                                            children: [
                                              (0, a.jsx)("a", {
                                                href: "/products/"
                                                  .concat(
                                                    null == e
                                                      ? void 0
                                                      : null ===
                                                            (l =
                                                              e.fields
                                                                .category) ||
                                                          void 0 === l
                                                        ? void 0
                                                        : l.fields.slug,
                                                    "/",
                                                  )
                                                  .concat(
                                                    null == e
                                                      ? void 0
                                                      : e.fields.slug,
                                                  ),
                                                target: "_blank",
                                                className:
                                                  "appears-in-link underline hover:text-yellow-300",
                                                children:
                                                  null == e
                                                    ? void 0
                                                    : e.fields.title,
                                              }),
                                              t <
                                                (null !==
                                                  (s =
                                                    null ===
                                                      (r = p.appearsIn) ||
                                                    void 0 === r
                                                      ? void 0
                                                      : r.length) &&
                                                void 0 !== s
                                                  ? s
                                                  : 0) -
                                                  1 && ", ",
                                            ],
                                          },
                                          t,
                                        );
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                            (0, a.jsx)("div", {
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
          ((n = (m.then ? (await m)() : m)[0]), r());
        } catch (e) {
          r(e);
        }
      });
    },
    66065: function (e, t, l) {
      "use strict";
      l.a(e, async function (e, r) {
        try {
          l.d(t, {
            Z: function () {
              return CharacterSlider;
            },
          });
          var a = l(97458),
            i = l(52983),
            s = l(99288),
            o = l(47681),
            n = l.n(o),
            c = l(91806),
            d = l(4290),
            u = l(28335),
            m = l(51923),
            p = l(97013),
            h = e([c, u]);
          function CharacterSlider(e) {
            let { slides: t } = e,
              [l, r] = (0, i.useState)(!1),
              [o, n] = (0, i.useState)(t[0]),
              c = (0, i.useRef)(null),
              h = (0, i.useRef)(null),
              g = (0, i.useRef)(null),
              f = (0, i.useRef)(null);
            (0, i.useEffect)(() => {
              let e = document.body,
                t = [g.current, f.current];
              return (
                l
                  ? ((e.style.overflow = "hidden"),
                    (e.style.height = "100vh"),
                    (e.style.touchAction = "none"),
                    t.forEach((e) => {
                      e && p.Z.to(e, { opacity: 0, duration: 0.3 });
                    }))
                  : ((e.style.overflow = ""),
                    (e.style.height = ""),
                    (e.style.touchAction = ""),
                    t.forEach((e) => {
                      e && p.Z.to(e, { opacity: 1, duration: 0.3 });
                    })),
                () => {
                  ((e.style.overflow = ""),
                    (e.style.height = ""),
                    (e.style.touchAction = ""));
                }
              );
            }, [l]);
            let handleSlideClick = (e) => {
              if ((null == o ? void 0 : o.name) === t[e].name) r(!0);
              else {
                var l, a;
                (null === (a = h.current) ||
                  void 0 === a ||
                  null === (l = a.swiper) ||
                  void 0 === l ||
                  l.slideTo(e, 300),
                  n(t[e]),
                  setTimeout(() => {
                    r(!0);
                  }, 350));
              }
            };
            return (
              (0, m.V)(
                () => {
                  let e = c.current,
                    t = p.Z.timeline({
                      scrollTrigger: { trigger: e, start: "center bottom" },
                    });
                  t.fromTo(
                    ".character-slide",
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, stagger: 0.25, ease: "power2.out" },
                  ).fromTo(
                    ".slider-arrow",
                    { opacity: 0 },
                    { opacity: 1, duration: 1 },
                  );
                },
                { scope: c },
              ),
              (0, a.jsxs)("div", {
                ref: c,
                children: [
                  (0, a.jsxs)("div", {
                    className: "relative",
                    children: [
                      (0, a.jsx)("div", {
                        ref: g,
                        className: "slider-arrow",
                        children: (0, a.jsx)("div", {
                          className:
                            "absolute left-4 top-1/2 z-10 hidden size-12 -translate-y-full cursor-pointer items-center justify-center rounded-full border-[1.5px] border-yellow-300 opacity-75 transition hover:opacity-100 md:flex",
                          id: "character-prev",
                          children: (0, a.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            height: "24px",
                            viewBox: "0 -960 960 960",
                            width: "24px",
                            fill: "#FFFFFF",
                            children: (0, a.jsx)("path", {
                              d: "m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z",
                            }),
                          }),
                        }),
                      }),
                      t.length > 0 &&
                        (0, a.jsx)(s.tq, {
                          ref: h,
                          initialSlide: t.length >= 3 ? 2 : 0,
                          rewind: !0,
                          spaceBetween: 0,
                          slidesPerView: 1.75,
                          centeredSlides: !0,
                          modules: [d.W_],
                          navigation: {
                            prevEl: "#character-prev",
                            nextEl: "#character-next",
                          },
                          onSlideChange: (e) => {
                            n(t[e.realIndex]);
                          },
                          breakpoints: {
                            768: { slidesPerView: 3 },
                            1280: { slidesPerView: 5 },
                          },
                          children: t.map((e, t) =>
                            (0, a.jsx)(
                              s.o5,
                              {
                                className: "p-1",
                                children: (0, a.jsx)(CharacterCard, {
                                  slide: e,
                                  selectedSlide: o,
                                  onClick: () => handleSlideClick(t),
                                }),
                              },
                              t,
                            ),
                          ),
                        }),
                      (0, a.jsx)("div", {
                        ref: f,
                        className: "slider-arrow",
                        children: (0, a.jsx)("div", {
                          className:
                            "absolute right-4 top-1/2 z-10 hidden size-12 -translate-y-full cursor-pointer items-center justify-center rounded-full border-[1.5px] border-yellow-300 opacity-75 transition hover:opacity-100 md:flex",
                          id: "character-next",
                          children: (0, a.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            height: "24px",
                            viewBox: "0 -960 960 960",
                            width: "24px",
                            fill: "#FFFFFF",
                            children: (0, a.jsx)("path", {
                              d: "M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z",
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsx)(u.J, {
                    isOpen: l,
                    onClose: () => r(!1),
                    slide: o,
                  }),
                ],
              })
            );
          }
          function CharacterCard(e) {
            var t, l;
            let { slide: r, selectedSlide: i, onClick: s } = e,
              o =
                r.images && r.images[0]
                  ? (0, c.Wx)(
                      null === (t = r.images[0].fields.file) || void 0 === t
                        ? void 0
                        : t.url,
                    )
                  : "",
              d =
                r.images &&
                (null === (l = r.images[0]) || void 0 === l
                  ? void 0
                  : l.fields.description),
              u = (null == i ? void 0 : i.name) === r.name;
            return (0, a.jsxs)("div", {
              className:
                "character-slide group relative cursor-pointer p-1 will-change-transform",
              onClick: s,
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "\n          relative aspect-[2/3] w-full transition will-change-transform\n          ".concat(
                      u
                        ? "opacity-100"
                        : "scale-90 opacity-50 hover:opacity-100",
                      "\n        ",
                    ),
                  children: [
                    (0, a.jsx)(n(), {
                      src: o,
                      alt: null != d ? d : "",
                      fill: !0,
                      className:
                        "character-image-mask h-full w-full object-contain",
                    }),
                    (0, a.jsx)(n(), {
                      className:
                        "absolute -left-1.5 -top-1 transition-opacity duration-300 ".concat(
                          u ? "opacity-100" : "opacity-0",
                        ),
                      width: 24,
                      height: 24,
                      alt: "top left bracket",
                      src: "/images/small-top-left-bracket.svg",
                    }),
                    (0, a.jsx)(n(), {
                      className:
                        "absolute -right-1 -top-1 transition-opacity duration-300 ".concat(
                          u ? "opacity-100" : "opacity-0",
                        ),
                      width: 24,
                      height: 24,
                      alt: "top right bracket",
                      src: "/images/small-top-right-bracket.svg",
                    }),
                    (0, a.jsx)(n(), {
                      className:
                        "absolute -bottom-1 -left-1 transition-opacity duration-300 ".concat(
                          u ? "opacity-100" : "opacity-0",
                        ),
                      width: 24,
                      height: 24,
                      alt: "bottom left bracket",
                      src: "/images/small-bottom-left-bracket.svg",
                    }),
                    (0, a.jsx)(n(), {
                      className:
                        "absolute -bottom-1 -right-1.5 transition-opacity duration-300 ".concat(
                          u ? "opacity-100" : "opacity-0",
                        ),
                      width: 24,
                      height: 24,
                      alt: "bottom right bracket",
                      src: "/images/small-bottom-right-bracket.svg",
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className:
                    "\n          mt-6 flex flex-col items-center transition-opacity duration-300\n          ".concat(
                      u ? "opacity-100" : "opacity-0 group-hover:opacity-100",
                      "\n        ",
                    ),
                  children: [
                    (0, a.jsx)("h2", {
                      className:
                        "selected-item-name w-[calc(100%+2rem)] text-center text-[2rem] font-bold text-white",
                      children: r.name,
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "flex flex-col transition-opacity duration-300 lg:opacity-0 ".concat(
                          u ? "lg:group-hover:opacity-100" : "",
                        ),
                      children: [
                        (0, a.jsx)("button", {
                          type: "button",
                          className:
                            "p-1 text-sm font-bold hover:text-yellow-300",
                          children: "Learn More",
                        }),
                        (0, a.jsx)("div", {
                          className:
                            "relative h-1 overflow-hidden transition-all delay-100 duration-300 lg:w-0 lg:group-hover:w-full",
                          children: (0, a.jsx)(n(), {
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
          (([c, u] = h.then ? (await h)() : h), r());
        } catch (e) {
          r(e);
        }
      });
    },
    13806: function (e, t, l) {
      "use strict";
      l.a(e, async function (e, r) {
        try {
          l.d(t, {
            Z: function () {
              return Characters;
            },
          });
          var a = l(97458),
            i = l(52983),
            s = l(47681),
            o = l.n(s),
            n = l(97013),
            c = l(51923),
            d = l(66065),
            u = l(39378),
            m = l.n(u),
            p = e([d]);
          function Characters(e) {
            var t, l;
            let { welcomePage: r } = e,
              s = (0, i.useRef)(null),
              u = (0, i.useRef)(null),
              p = m().compact(
                null !==
                  (l =
                    null === (t = r.characterSliderItems) || void 0 === t
                      ? void 0
                      : t.map((e) => (null == e ? void 0 : e.fields))) &&
                  void 0 !== l
                  ? l
                  : [],
              );
            return (
              (0, c.V)(
                () => {
                  let e = u.current;
                  n.Z.to(".characters-transition-leaves", {
                    yPercent: -25,
                    scrollTrigger: {
                      trigger: e,
                      start: "top bottom",
                      end: "bottom top",
                      scrub: 0.5,
                    },
                  });
                },
                { scope: s },
              ),
              (0, a.jsxs)("div", {
                ref: s,
                className:
                  "relative bg-[url('/images/hero-texture_dark-wood(tinyfied).jpg')] bg-cover py-32 lg:pb-80 lg:pt-96",
                children: [
                  (0, a.jsx)("div", {
                    ref: u,
                    className:
                      "pointer-events-none absolute left-0 top-0 z-50 w-full -translate-y-1/3 will-change-transform",
                    children: (0, a.jsx)(o(), {
                      width: 1920,
                      height: 1403,
                      alt: "Verdant jungle foliage teems with life, from broad leaves to delicate fronds, highlighted by a cluster of vibrant orange flowers.",
                      src: "/images/transitions/Transition_2.webp",
                      className: "characters-transition-leaves w-full",
                      priority: !0,
                    }),
                  }),
                  (0, a.jsx)("h2", {
                    id: "characters",
                    className:
                      "mb-16 text-center text-xl font-bold uppercase tracking-[4px]",
                    children: r.charactersHeading,
                  }),
                  (0, a.jsx)(d.Z, { slides: p }),
                  (0, a.jsx)("div", {
                    className:
                      "pointer-events-none absolute bottom-0 left-0 z-40 w-full translate-y-1/4",
                    children: (0, a.jsx)(o(), {
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
          ((d = (p.then ? (await p)() : p)[0]), r());
        } catch (e) {
          r(e);
        }
      });
    },
    43945: function (e, t, l) {
      "use strict";
      l.a(e, async function (e, r) {
        try {
          l.d(t, {
            e: function () {
              return EquipmentModal;
            },
          });
          var a = l(97458),
            i = l(52983),
            s = l(47681),
            o = l.n(s),
            n = l(91806),
            c = l(24625),
            d = l(51923),
            u = l(97013),
            m = e([n]);
          function EquipmentModal(e) {
            var t, l, r;
            let {
                isOpen: s,
                onClose: m,
                slide: p,
                onPrevSlide: h,
                onNextSlide: g,
              } = e,
              f = (0, i.useRef)(null),
              [x, v] = (0, i.useState)(0),
              w = (0, i.useRef)(null);
            return ((0, d.V)(
              () => {
                if (
                  (w.current && (w.current.kill(), (w.current = null), v(0)),
                  s && (null == p ? void 0 : p.images) && p.images.length > 1)
                ) {
                  w.current = u.Z.timeline({ repeat: -1 });
                  let e = p.images.length;
                  for (let t = 0; t < e; t++) {
                    let l = (t + 1) % e;
                    w.current.to({}, { duration: 2, onComplete: () => v(l) });
                  }
                }
                return () => {
                  w.current && (w.current.kill(), (w.current = null));
                };
              },
              { dependencies: [s, p] },
            ),
            (0, d.V)(
              () => {
                if (f.current) {
                  let e = u.Z.timeline();
                  s
                    ? ((document.body.style.overflow = "hidden"),
                      u.Z.set(f.current, { display: "flex" }),
                      e
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
                      e
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
                        .set(f.current, { display: "none" }));
                }
              },
              { scope: f, dependencies: [s] },
            ),
            p)
              ? (0, a.jsxs)("div", {
                  ref: f,
                  className:
                    "fixed inset-0 z-[80] hidden justify-center lg:items-center",
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "modal-background absolute inset-0 bg-trueblack/70 opacity-0",
                      onClick: m,
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "modal-content relative mt-24 h-[calc(100svh-6rem)] w-full max-w-6xl translate-y-12 bg-black opacity-0 lg:mx-20 lg:mt-0 lg:h-auto",
                      children: [
                        (0, a.jsx)("button", {
                          onClick: m,
                          className:
                            "group fixed bottom-3 right-3 z-10 flex size-11 items-center justify-center rounded-full border-2 border-darkgray-500 bg-darkgray-200 lg:absolute lg:right-10 lg:top-10",
                          children: (0, a.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            height: "40px",
                            viewBox: "0 -960 960 960",
                            width: "40px",
                            className:
                              "fill-white transition-transform duration-300 group-hover:rotate-90 group-hover:fill-yellow-300",
                            children: (0, a.jsx)("path", {
                              d: "m253.9-229.79-24.11-24.11L455.9-480 229.79-706.1l24.11-24.11L480-504.1l226.1-226.11 24.11 24.11L504.1-480l226.11 226.1-24.11 24.11L480-455.9 253.9-229.79Z",
                            }),
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "flex h-full flex-col gap-4 overflow-auto p-4 lg:flex-row lg:gap-12 lg:p-14",
                          children: [
                            (0, a.jsx)("div", {
                              className:
                                "mx-auto mb-6 flex w-full max-w-lg items-center justify-center lg:mb-0 lg:w-2/5 lg:max-w-none",
                              children: (0, a.jsx)("div", {
                                className:
                                  "group relative aspect-square w-full",
                                children:
                                  p.images && p.images.length > 1
                                    ? p.images.map((e, t) => {
                                        var l;
                                        return (0, a.jsx)(
                                          "div",
                                          {
                                            className:
                                              "absolute inset-0 transition-opacity duration-500 ".concat(
                                                t === x
                                                  ? "opacity-100"
                                                  : "opacity-0",
                                              ),
                                            children: (0, a.jsx)(c.G, {
                                              src: (0, n.Wx)(
                                                null == e
                                                  ? void 0
                                                  : null ===
                                                        (l = e.fields.file) ||
                                                      void 0 === l
                                                    ? void 0
                                                    : l.url,
                                              ),
                                              alt:
                                                (null == e
                                                  ? void 0
                                                  : e.fields.description) || "",
                                              isModal: !0,
                                            }),
                                          },
                                          null == e ? void 0 : e.sys.id,
                                        );
                                      })
                                    : (0, a.jsx)(c.G, {
                                        src: (0, n.Wx)(
                                          null === (l = p.images[0]) ||
                                            void 0 === l
                                            ? void 0
                                            : null === (t = l.fields.file) ||
                                                void 0 === t
                                              ? void 0
                                              : t.url,
                                        ),
                                        alt:
                                          (null === (r = p.images[0]) ||
                                          void 0 === r
                                            ? void 0
                                            : r.fields.description) || "",
                                        isModal: !0,
                                      }),
                              }),
                            }),
                            (0, a.jsxs)("div", {
                              className:
                                "mx-auto flex w-full max-w-lg flex-col pb-20 lg:w-3/5 lg:max-w-none lg:justify-center lg:pb-0",
                              children: [
                                (0, a.jsxs)("div", {
                                  className: "mb-4 flex justify-between",
                                  children: [
                                    (0, a.jsx)("h2", {
                                      className: "text-[2rem] font-bold",
                                      children: p.name,
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "flex gap-4",
                                      children: [
                                        (0, a.jsx)("div", {
                                          className:
                                            "-left-16 z-10 flex size-12 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-yellow-300 opacity-75 transition hover:opacity-100 lg:absolute lg:top-1/2 lg:-translate-y-1/2",
                                          onClick: (e) => {
                                            (e.stopPropagation(), h());
                                          },
                                          children: (0, a.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            height: "24px",
                                            viewBox: "0 -960 960 960",
                                            width: "24px",
                                            fill: "#FFFFFF",
                                            children: (0, a.jsx)("path", {
                                              d: "m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z",
                                            }),
                                          }),
                                        }),
                                        (0, a.jsx)("div", {
                                          className:
                                            "-right-16 z-10 flex size-12 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-yellow-300 opacity-75 transition hover:opacity-100 lg:absolute lg:top-1/2 lg:-translate-y-1/2",
                                          onClick: (e) => {
                                            (e.stopPropagation(), g());
                                          },
                                          children: (0, a.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            height: "24px",
                                            viewBox: "0 -960 960 960",
                                            width: "24px",
                                            fill: "#FFFFFF",
                                            children: (0, a.jsx)("path", {
                                              d: "M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, a.jsx)("p", {
                                  className: "text-lg",
                                  children: p.description,
                                }),
                                (0, a.jsx)(o(), {
                                  width: 369,
                                  height: 3,
                                  src: "/images/welcome/lines/modal-line.svg",
                                  alt: "A streak of gray underneath the item description",
                                  className: "w-full py-6",
                                }),
                                p.appearsIn &&
                                  p.appearsIn.length > 0 &&
                                  (0, a.jsxs)("div", {
                                    children: [
                                      (0, a.jsx)("h3", {
                                        className: "mb-2 font-bold",
                                        children: "Appears in:",
                                      }),
                                      p.appearsIn.map((e, t) => {
                                        var l, r, s;
                                        return (0, a.jsxs)(
                                          i.Fragment,
                                          {
                                            children: [
                                              (0, a.jsx)("a", {
                                                href: "/products/"
                                                  .concat(
                                                    null == e
                                                      ? void 0
                                                      : null ===
                                                            (l =
                                                              e.fields
                                                                .category) ||
                                                          void 0 === l
                                                        ? void 0
                                                        : l.fields.slug,
                                                    "/",
                                                  )
                                                  .concat(
                                                    null == e
                                                      ? void 0
                                                      : e.fields.slug,
                                                  ),
                                                target: "_blank",
                                                className:
                                                  "appears-in-link underline hover:text-yellow-300",
                                                children:
                                                  null == e
                                                    ? void 0
                                                    : e.fields.title,
                                              }),
                                              t <
                                                (null !==
                                                  (s =
                                                    null ===
                                                      (r = p.appearsIn) ||
                                                    void 0 === r
                                                      ? void 0
                                                      : r.length) &&
                                                void 0 !== s
                                                  ? s
                                                  : 0) -
                                                  1 && ", ",
                                            ],
                                          },
                                          t,
                                        );
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                            (0, a.jsx)("div", {
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
          ((n = (m.then ? (await m)() : m)[0]), r());
        } catch (e) {
          r(e);
        }
      });
    },
    5364: function (e, t, l) {
      "use strict";
      l.a(e, async function (e, r) {
        try {
          l.d(t, {
            Z: function () {
              return EquipmentSlider;
            },
          });
          var a = l(97458),
            i = l(52983),
            s = l(47681),
            o = l.n(s),
            n = l(97013),
            c = l(51923),
            d = l(91806),
            u = l(99288),
            m = l(4290),
            p = l(43945),
            h = l(24625),
            g = e([d, p]);
          function EquipmentSlider(e) {
            let { slides: t } = e,
              [l, r] = (0, i.useState)(!1),
              [s, o] = (0, i.useState)(0),
              d = (0, i.useRef)(null),
              h = (0, i.useRef)(null),
              g = (0, i.useRef)(null),
              f = (0, i.useRef)(null),
              handleSlideClick = (e) => {
                (o(e), r(!0));
              };
            return (
              (0, i.useEffect)(() => {
                let e = document.body,
                  t = [g.current, f.current];
                return (
                  l
                    ? ((e.style.overflow = "hidden"),
                      (e.style.height = "100vh"),
                      (e.style.touchAction = "none"),
                      t.forEach((e) => {
                        e && n.Z.to(e, { opacity: 0, duration: 0.3 });
                      }))
                    : ((e.style.overflow = ""),
                      (e.style.height = ""),
                      (e.style.touchAction = ""),
                      t.forEach((e) => {
                        e && n.Z.to(e, { opacity: 1, duration: 0.3 });
                      })),
                  () => {
                    ((e.style.overflow = ""),
                      (e.style.height = ""),
                      (e.style.touchAction = ""));
                  }
                );
              }, [l]),
              (0, c.V)(
                () => {
                  let e = d.current,
                    t = n.Z.timeline({
                      scrollTrigger: { trigger: e, start: "center bottom" },
                    });
                  t.fromTo(
                    ".equipment-slide",
                    { yPercent: 100, opacity: 0 },
                    {
                      yPercent: 0,
                      opacity: 1,
                      stagger: 0.25,
                      ease: "power2.out",
                    },
                  ).fromTo(
                    ".slider-arrow",
                    { opacity: 0 },
                    { opacity: 1, duration: 1 },
                  );
                },
                { scope: d },
              ),
              (0, a.jsxs)("div", {
                ref: d,
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex items-center md:gap-5 md:px-6",
                    children: [
                      (0, a.jsx)("div", {
                        ref: g,
                        className: "slider-arrow",
                        children: (0, a.jsx)("div", {
                          className:
                            "hidden size-12 flex-none -translate-y-full cursor-pointer items-center justify-center rounded-full border-[1.5px] border-yellow-300 opacity-75 transition hover:opacity-100 md:flex",
                          id: "equipment-prev",
                          children: (0, a.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            height: "24px",
                            viewBox: "0 -960 960 960",
                            width: "24px",
                            fill: "#FFFFFF",
                            children: (0, a.jsx)("path", {
                              d: "m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z",
                            }),
                          }),
                        }),
                      }),
                      t.length > 0 &&
                        (0, a.jsx)(u.tq, {
                          ref: h,
                          spaceBetween: 10,
                          slidesPerView: 1.75,
                          centeredSlides: !0,
                          loop: !0,
                          modules: [m.W_],
                          navigation: {
                            prevEl: "#equipment-prev",
                            nextEl: "#equipment-next",
                          },
                          onSlideChange: (e) => {
                            o(e.realIndex);
                          },
                          breakpoints: {
                            768: { slidesPerView: 3 },
                            1024: { centeredSlides: !1, slidesPerView: 5 },
                          },
                          children: t.map((e, t) =>
                            (0, a.jsx)(
                              u.o5,
                              {
                                onClick: () => handleSlideClick(t),
                                className: "p-1",
                                children: (0, a.jsx)(EquipmentCard, {
                                  slide: e,
                                  index: t,
                                  selectedIndex: s,
                                  onMouseEnter: () => {
                                    o(t);
                                  },
                                }),
                              },
                              t,
                            ),
                          ),
                        }),
                      (0, a.jsx)("div", {
                        ref: f,
                        className: "slider-arrow",
                        children: (0, a.jsx)("div", {
                          className:
                            "hidden size-12 flex-none -translate-y-full cursor-pointer items-center justify-center rounded-full border-[1.5px] border-yellow-300 opacity-75 transition hover:opacity-100 md:flex",
                          id: "equipment-next",
                          children: (0, a.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            height: "24px",
                            viewBox: "0 -960 960 960",
                            width: "24px",
                            fill: "#FFFFFF",
                            children: (0, a.jsx)("path", {
                              d: "M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z",
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsx)(p.e, {
                    isOpen: l,
                    onClose: () => r(!1),
                    slide: t[s],
                    onPrevSlide: () => {
                      0 === s ? o(t.length - 1) : o(s - 1);
                    },
                    onNextSlide: () => {
                      s === t.length - 1 ? o(0) : o(s + 1);
                    },
                  }),
                ],
              })
            );
          }
          function EquipmentCard(e) {
            var t, l;
            let { slide: r, index: i, selectedIndex: s, onMouseEnter: n } = e,
              c =
                r.images && r.images[0]
                  ? (0, d.Wx)(
                      null === (t = r.images[0].fields.file) || void 0 === t
                        ? void 0
                        : t.url,
                    )
                  : "",
              u =
                r.images &&
                (null === (l = r.images[0]) || void 0 === l
                  ? void 0
                  : l.fields.description);
            return (0, a.jsxs)("div", {
              className:
                "equipment-slide group relative p-1 will-change-transform",
              onMouseEnter: () => n(i),
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "relative aspect-square w-full cursor-pointer transition will-change-transform group-hover:rotate-0 ".concat(
                      i !== s
                        ? i % 2 == 0
                          ? "rotate-2"
                          : i % 2 == 1
                            ? "-rotate-2"
                            : ""
                        : "",
                    ),
                  children: [
                    (0, a.jsx)(h.G, {
                      src: c,
                      alt: null != u ? u : "",
                      isActive: i === s,
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "pointer-events-none absolute left-0 top-0 z-30 h-full w-full bg-black transition\n          ".concat(
                          i !== s
                            ? "opacity-50 group-hover:opacity-0"
                            : "opacity-0",
                          "\n          ",
                        ),
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "".concat(
                    i !== s ? "opacity-0" : "opacity-100",
                    "\n      mt-6 flex flex-col items-center opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100",
                  ),
                  children: [
                    (0, a.jsx)("h2", {
                      className:
                        "selected-item-name w-[calc(100%+2rem)] text-nowrap text-center text-2xl font-bold text-white lg:text-wrap",
                      children: r.name,
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "flex flex-col transition-opacity duration-300 group-hover:opacity-100 lg:opacity-0",
                      children: [
                        (0, a.jsx)("button", {
                          type: "button",
                          className:
                            "p-1 text-sm font-bold hover:text-yellow-300",
                          children: "Learn More",
                        }),
                        (0, a.jsx)("div", {
                          className:
                            "relative h-1 overflow-hidden transition-all delay-100 duration-300 lg:w-0 lg:group-hover:w-full",
                          children: (0, a.jsx)(o(), {
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
          (([d, p] = g.then ? (await g)() : g), r());
        } catch (e) {
          r(e);
        }
      });
    },
    4673: function (e, t, l) {
      "use strict";
      l.a(e, async function (e, r) {
        try {
          l.d(t, {
            Z: function () {
              return MeetLaraCroft;
            },
          });
          var a = l(97458),
            i = l(52983),
            s = l(97013),
            o = l(38725),
            n = l(51923),
            c = l(47681),
            d = l.n(c),
            u = l(5364),
            m = l(39378),
            p = l.n(m),
            h = e([u]);
          function MeetLaraCroft(e) {
            var t, l, r, c, m, h, g, f, x;
            let { welcomePage: v } = e,
              w = (0, i.useRef)(null),
              y = (0, i.useRef)(null),
              b = (0, i.useRef)(null),
              j = (0, i.useRef)(null),
              N = (0, i.useRef)(null),
              k = p().compact(
                null !==
                  (x =
                    null === (t = v.sliderItems) || void 0 === t
                      ? void 0
                      : t.map((e) => (null == e ? void 0 : e.fields))) &&
                  void 0 !== x
                  ? x
                  : [],
              ),
              C = (
                null === (c = v.meetLaraCroftImage) || void 0 === c
                  ? void 0
                  : null === (r = c.fields) || void 0 === r
                    ? void 0
                    : null === (l = r.file) || void 0 === l
                      ? void 0
                      : l.url
              )
                ? "https:".concat(v.meetLaraCroftImage.fields.file.url)
                : "/images/welcome/Lara-Croft-Hero.png",
              S =
                (null === (h = v.meetLaraCroftImage) || void 0 === h
                  ? void 0
                  : null === (m = h.fields) || void 0 === m
                    ? void 0
                    : m.description) ||
                (null === (f = v.meetLaraCroftImage) || void 0 === f
                  ? void 0
                  : null === (g = f.fields) || void 0 === g
                    ? void 0
                    : g.title) ||
                "Lara Croft, ready for action.";
            (0, n.V)(
              () => {
                let e = y.current,
                  t = b.current,
                  l = j.current,
                  r = N.current,
                  a = null == r ? void 0 : r.clientWidth;
                (s.Z.timeline({
                  scrollTrigger: {
                    trigger: t,
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
                  s.Z.to(".transition-leaves", {
                    scrollTrigger: {
                      trigger: e,
                      start: "top bottom",
                      end: "bottom top",
                      scrub: 0.5,
                    },
                    yPercent: -35,
                  }));
                let i = new o.SplitText(".heading-text", { type: "words" });
                s.Z.timeline({
                  scrollTrigger: { trigger: l, start: "center bottom" },
                })
                  .set(".heading-underline .streak", { width: a })
                  .fromTo(
                    i.words,
                    { yPercent: 100, opacity: 0 },
                    { duration: 0.5, yPercent: 0, opacity: 1, stagger: 0.2 },
                  )
                  .fromTo(
                    ".heading-underline",
                    { width: 0 },
                    { width: a, duration: 0.5 },
                    "<+=0.6",
                  )
                  .fromTo(
                    ".meet-lara-description",
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8 },
                    "<+=0.2",
                  );
                let n = s.Z.timeline({
                  scrollTrigger: {
                    trigger: ".lara-main-image",
                    start: "top bottom",
                    end: "25% center",
                    scrub: 1,
                  },
                });
                n.fromTo(
                  ".lara-main-image",
                  { scale: 0.6, opacity: 0.2 },
                  {
                    scale: 1,
                    opacity: 1,
                    onComplete: () => {
                      s.Z.to(".topographic-lines", { opacity: 1, duration: 4 });
                    },
                  },
                ).fromTo(
                  w.current,
                  { backgroundColor: "black" },
                  { backgroundColor: "rgb(18 18 18)" },
                  "<",
                );
              },
              { scope: w },
            );
            let T = v.meetLaraCroftDescription
              .split("\n")
              .map((e, t) =>
                (0, a.jsxs)(
                  i.Fragment,
                  {
                    children: [
                      e,
                      t < v.meetLaraCroftDescription.split("\n").length - 1 &&
                        (0, a.jsx)("br", {}),
                    ],
                  },
                  t,
                ),
              );
            return (0, a.jsxs)("div", {
              ref: w,
              className: "relative pb-40 pt-40 lg:pt-96",
              children: [
                (0, a.jsxs)("div", {
                  id: "meet-lara-scroll-target",
                  className: "mx-auto max-w-7xl",
                  children: [
                    (0, a.jsxs)("div", {
                      className:
                        "relative z-30 mb-12 flex flex-col items-center gap-8 px-6 lg:mb-6 lg:flex-row",
                      children: [
                        (0, a.jsx)("div", {
                          className:
                            "lara-main-image aspect-[3/4] -mb-28 w-full flex-shrink-0 will-change-transform md:-mb-36 lg:mb-0 lg:w-1/2",
                          children: (0, a.jsx)(d(), {
                            fill: !0,
                            alt: S,
                            src: C,
                            className:
                              "mx-auto max-h-[750px] w-auto lg:max-h-none object-contain",
                            priority: !0,
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          ref: j,
                          children: [
                            (0, a.jsx)("div", {
                              className: "mb-6",
                              children: (0, a.jsxs)("div", {
                                ref: N,
                                className: "inline-block",
                                children: [
                                  (0, a.jsx)("h1", {
                                    className:
                                      "heading-text pb-2 text-5xl font-bold leading-[1.1]",
                                    children: v.meetLaraCroftHeadline,
                                  }),
                                  (0, a.jsx)("div", {
                                    className:
                                      "heading-underline relative h-3 w-0 overflow-hidden",
                                    children: (0, a.jsx)(d(), {
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
                            (0, a.jsx)("div", {
                              className:
                                "meet-lara-description max-w-3xl text-lg will-change-transform lg:max-w-none",
                              children: T,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)(u.Z, { slides: k }),
                  ],
                }),
                (0, a.jsx)("div", {
                  ref: y,
                  className:
                    "pointer-events-none absolute left-0 top-0 z-20 w-full -translate-y-1/4 will-change-transform",
                  children: (0, a.jsx)(d(), {
                    width: 1920,
                    height: 1403,
                    alt: "Verdant jungle foliage teems with life, from broad leaves to delicate fronds, highlighted by a cluster of vibrant orange flowers.",
                    src: "/images/transitions/Transition_1.webp",
                    className: "transition-leaves w-full",
                    priority: !0,
                  }),
                }),
                (0, a.jsx)("div", {
                  className:
                    "left-leaves pointer-events-none absolute left-0 top-0 z-50 w-full -translate-x-1/3 will-change-transform lg:w-4/5",
                  children: (0, a.jsx)(d(), {
                    width: 1286,
                    height: 857,
                    alt: "jungle leaves on the left",
                    src: "/images/side-leaves.png",
                    className: "w-full",
                    priority: !0,
                  }),
                }),
                (0, a.jsx)("div", {
                  ref: b,
                  className:
                    "right-leaves pointer-events-none absolute right-0 top-0 z-50 w-full translate-x-1/3 will-change-transform lg:w-4/5",
                  children: (0, a.jsx)(d(), {
                    width: 1286,
                    height: 857,
                    alt: "jungle leaves on the right",
                    src: "/images/side-leaves.png",
                    className: "w-full",
                    priority: !0,
                  }),
                }),
                (0, a.jsx)("div", {
                  style: { opacity: 0 },
                  className:
                    "topographic-lines pointer-events-none absolute bottom-0 right-0 w-screen lg:w-4/5",
                  children: (0, a.jsx)(d(), {
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
          ((u = (h.then ? (await h)() : h)[0]), r());
        } catch (e) {
          r(e);
        }
      });
    },
    24625: function (e, t, l) {
      "use strict";
      l.d(t, {
        G: function () {
          return PaperImage;
        },
      });
      var r = l(97458);
      l(52983);
      var a = l(47681),
        i = l.n(a);
      function PaperImage(e) {
        let { src: t, alt: l, isActive: a = !1, isModal: s = !1 } = e;
        return (0, r.jsxs)("div", {
          className: "group relative aspect-square w-full",
          children: [
            (0, r.jsx)("div", {
              className: "relative z-20 aspect-square w-full",
              children: (0, r.jsx)(i(), {
                src: t,
                alt: l,
                fill: !0,
                priority: !0,
                sizes: "(max-width: 1024px) 100vw, 50vw",
                className: "object-contain p-[2%] pt-[2.5%]",
              }),
            }),
            (0, r.jsx)(i(), {
              className:
                "pointer-events-none absolute inset-0 z-30 aspect-square object-cover",
              src: "/images/welcome/paper/square-paper-frame.png",
              alt: "A paper frame around the image",
              priority: !0,
              fill: !0,
              sizes: "(max-width: 1024px) 100vw, 50vw",
            }),
            (0, r.jsx)(i(), {
              className: "absolute inset-0 z-0 aspect-square object-cover",
              src: "/images/welcome/paper/square-paper-background.png",
              alt: "A paper background behind the image",
              priority: !0,
              fill: !0,
              sizes: "(max-width: 1024px) 100vw, 50vw",
            }),
            (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(i(), {
                  className:
                    "\n            absolute -left-1.5 -top-1 transition-opacity duration-300\n            "
                      .concat(a ? "opacity-100" : "opacity-0", "\n            ")
                      .concat(
                        s ? "" : "group-hover:opacity-100",
                        "\n          ",
                      ),
                  width: 24,
                  height: 24,
                  alt: "top left bracket",
                  src: "/images/small-top-left-bracket.svg",
                }),
                (0, r.jsx)(i(), {
                  className:
                    "\n            absolute -right-1 -top-1 transition-opacity duration-300\n            "
                      .concat(a ? "opacity-100" : "opacity-0", "\n            ")
                      .concat(
                        s ? "" : "group-hover:opacity-100",
                        "\n          ",
                      ),
                  width: 24,
                  height: 24,
                  alt: "top right bracket",
                  src: "/images/small-top-right-bracket.svg",
                }),
                (0, r.jsx)(i(), {
                  className:
                    "\n            absolute -bottom-1 -left-1 transition-opacity duration-300\n            "
                      .concat(a ? "opacity-100" : "opacity-0", "\n            ")
                      .concat(
                        s ? "" : "group-hover:opacity-100",
                        "\n          ",
                      ),
                  width: 24,
                  height: 24,
                  alt: "bottom left bracket",
                  src: "/images/small-bottom-left-bracket.svg",
                }),
                (0, r.jsx)(i(), {
                  className:
                    "\n            absolute -bottom-1 -right-1.5 transition-opacity duration-300\n            "
                      .concat(a ? "opacity-100" : "opacity-0", "\n            ")
                      .concat(
                        s ? "" : "group-hover:opacity-100",
                        "\n          ",
                      ),
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
    18700: function (e, t, l) {
      "use strict";
      l.a(e, async function (e, r) {
        try {
          l.d(t, {
            Z: function () {
              return Timeline;
            },
          });
          var a = l(97458),
            i = l(52983),
            s = l(97013),
            o = l(51923),
            n = l(63982),
            c = l.n(n),
            d = l(47681),
            u = l.n(d),
            m = l(77377),
            p = l(76178),
            h = l(39378),
            g = l.n(h),
            f = e([m]);
          function Timeline(e) {
            let { timelineProducts: t } = e,
              l = (0, i.useRef)(null),
              r = (0, i.useRef)(null),
              n = (0, i.useRef)(null),
              d = (0, i.useRef)(null),
              h = (0, i.useRef)([]),
              [f, x] = (0, i.useState)("all"),
              [v, w] = (0, i.useState)("release desc"),
              [y, b] = (0, i.useState)(!1),
              j = (0, i.useMemo)(
                () =>
                  g().compact(
                    Array.from(
                      new Set(
                        t.map((e) => {
                          var t, l;
                          return null === (l = e.category) || void 0 === l
                            ? void 0
                            : null === (t = l.fields) || void 0 === t
                              ? void 0
                              : t.name;
                        }),
                      ),
                    ),
                  ),
                [t],
              ),
              getUniqueEraNames = (e) => {
                let t = new Set();
                return (
                  e.forEach((e) => {
                    e.timelineEra && t.add(e.timelineEra);
                  }),
                  Array.from(t).sort()
                );
              },
              N = (0, i.useMemo)(() => {
                let e = t.filter((e) => {
                    var t, l;
                    return (
                      "all" === f ||
                      (null === (l = e.category) || void 0 === l
                        ? void 0
                        : null === (t = l.fields) || void 0 === t
                          ? void 0
                          : t.name) === f
                    );
                  }),
                  l = getUniqueEraNames(t),
                  r = [...e].sort((e, t) => {
                    if (v.startsWith("release")) {
                      let l = "release asc" === v ? 1 : -1,
                        r = e.releaseDate,
                        a = t.releaseDate;
                      return r || a
                        ? r
                          ? a
                            ? l *
                              (new Date(r).getTime() - new Date(a).getTime())
                            : -1
                          : 1
                        : 0;
                    }
                    if (v.startsWith("fiction")) {
                      let r = "fiction asc" === v ? 1 : -1,
                        a = l.indexOf(e.timelineEra || ""),
                        i = l.indexOf(t.timelineEra || "");
                      return a === i
                        ? r *
                            ((e.timelineFictionOrder || 0) -
                              (t.timelineFictionOrder || 0))
                        : r * (a - i);
                    }
                    return 0;
                  }),
                  a = r.reduce((e, t) => {
                    let l;
                    if (v.startsWith("fiction"))
                      l = t.timelineEra
                        ? t.timelineEra + " Era"
                        : "Unknown Era";
                    else if (v.startsWith("release")) {
                      let e = t.releaseDate;
                      l = e ? new Date(e).getFullYear().toString() : "Unknown";
                    }
                    return (l && (e[l] || (e[l] = []), e[l].push(t)), e);
                  }, {});
                return {
                  grouped: a,
                  eraOrder: l,
                  filteredAndSortedProducts: r,
                };
              }, [t, f, v]),
              k = (0, i.useMemo)(
                () =>
                  Object.keys(N.grouped).sort((e, t) => {
                    if (v.startsWith("release"))
                      return "release asc" === v
                        ? e.localeCompare(t)
                        : t.localeCompare(e);
                    if (v.startsWith("fiction")) {
                      let l = N.eraOrder.indexOf(e),
                        r = N.eraOrder.indexOf(t);
                      return "fiction asc" === v ? r - l : l - r;
                    }
                    return 0;
                  }),
                [N, v],
              ),
              scrollToTopOfTimeline = () => {
                l.current &&
                  (b(!0),
                  s.Z.to(window, {
                    duration: 1.5,
                    scrollTo: { y: l.current, offsetY: 0 },
                    ease: "power2.inOut",
                    onComplete: () => {
                      b(!1);
                    },
                  }));
              };
            ((0, o.V)(
              () => {
                h.current.length &&
                  h.current.forEach((e) => {
                    e.kill();
                  });
                let e = s.Z.utils.toArray(".timeline-entry");
                (e.forEach((e, t) => {
                  let l = c().create({
                    trigger: e,
                    start: "top center",
                    end: "center center",
                    onEnter: () => {
                      s.Z.to(n.current, {
                        rotation: 36 * (t + 1),
                        duration: 4,
                        ease: "elastic.out(1, 0.5)",
                      });
                    },
                    onEnterBack: () => {
                      s.Z.to(n.current, {
                        rotation: 36 * t,
                        duration: 4,
                        ease: "elastic.out(1, 0.5)",
                      });
                    },
                  });
                  h.current.push(l);
                }),
                  s.Z.fromTo(
                    d.current,
                    { height: 0 },
                    {
                      height: "100%",
                      ease: "none",
                      scrollTrigger: {
                        trigger: l.current,
                        start: "top center",
                        end: "bottom center",
                        scrub: !0,
                      },
                    },
                  ));
              },
              { scope: r, dependencies: [v, f] },
            ),
              (0, o.V)(
                () => {
                  let e = document.querySelector(".timeline-controls"),
                    showControls = () => {
                      (s.Z.set(e, { pointerEvents: "auto" }),
                        s.Z.fromTo(
                          e,
                          { opacity: 0 },
                          { opacity: 1, duration: 0.4, ease: "power2.inOut" },
                        ));
                    },
                    hideControls = () => {
                      (s.Z.set(e, { pointerEvents: "none" }),
                        s.Z.fromTo(
                          e,
                          { opacity: 1 },
                          { opacity: 0, duration: 0.4, ease: "power2.inOut" },
                        ));
                    };
                  c().create({
                    trigger: l.current,
                    start: "top 10%",
                    end: "bottom-=100px bottom",
                    onEnter: () => {
                      showControls();
                    },
                    onLeave: () => {
                      hideControls();
                    },
                    onEnterBack: () => {
                      showControls();
                    },
                    onLeaveBack: () => {
                      hideControls();
                    },
                  });
                },
                { scope: l },
              ));
            let C = 0;
            return (0, a.jsxs)("div", {
              ref: l,
              className:
                "relative bg-white bg-[url('/images/paper-texture_main_tile(tinyfied).jpg')] bg-contain bg-top py-40 text-black",
              children: [
                (0, a.jsx)(u(), {
                  src: "/images/welcome/paper/timeline-border-top.png",
                  alt: "Top edge of paper background",
                  width: 1440,
                  height: 68,
                  className:
                    "absolute left-0 top-0 z-20 w-full -translate-y-1/2",
                }),
                (0, a.jsxs)("div", {
                  className: "absolute inset-0 overflow-hidden",
                  children: [
                    (0, a.jsx)(u(), {
                      src: "/images/welcome/lines/timeline-topo-lines.png",
                      alt: "Topographic lines weaving across the paper background",
                      width: 1087,
                      height: 1088,
                      className:
                        "pointer-events-none absolute left-0 top-0 -translate-x-1/3 -translate-y-[10%] opacity-20 lg:w-3/4",
                    }),
                    (0, a.jsx)(u(), {
                      src: "/images/welcome/lines/timeline-topo-lines.png",
                      alt: "Topographic lines weaving across the paper background",
                      width: 1087,
                      height: 1088,
                      className:
                        "pointer-events-none absolute bottom-0 right-0 translate-x-1/3 translate-y-[10%] rotate-180 opacity-20 lg:w-3/4",
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className:
                    "pointer-events-none absolute inset-0 z-[25] overflow-hidden",
                  children: (0, a.jsx)("div", {
                    ref: d,
                    className:
                      "absolute left-1/2 top-0 h-full w-full -translate-x-1/2 lg:w-[1018px]",
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
                k.map((e) =>
                  (0, a.jsxs)(
                    "div",
                    {
                      id: "timeline-group-".concat(e),
                      className: "mb-12",
                      children: [
                        (0, a.jsx)("h2", {
                          className:
                            "px-4 text-right font-spline-sans-mono text-6xl font-bold uppercase text-yellow-900/40 lg:sticky lg:right-0 lg:top-20 lg:px-40 lg:text-8xl",
                          children: e,
                        }),
                        (0, a.jsx)("div", {
                          ref: r,
                          className: "overflow-hidden py-4",
                          children: (0, a.jsx)("div", {
                            className: "relative z-30 mx-auto max-w-6xl",
                            children: N.grouped[e].map((e) => {
                              C += 1;
                              let t = C % 2 == 0;
                              return (0, a.jsxs)(
                                i.Fragment,
                                {
                                  children: [
                                    t &&
                                      (0, a.jsx)(u(), {
                                        src: "/images/welcome/lines/timeline-topo-lines.png",
                                        alt: "Topographic lines weaving across the paper background",
                                        width: 1087,
                                        height: 1088,
                                        className:
                                          "pointer-events-none absolute ".concat(
                                            C % 4 == 0
                                              ? "left-0 -translate-x-1/2 scale-125"
                                              : "right-0 translate-x-1/2 -scale-125",
                                            " opacity-20 lg:w-3/4",
                                          ),
                                      }),
                                    (0, a.jsx)(m.Z, {
                                      product: e,
                                      index: C - 1,
                                      scrollingToTop: y,
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
                (0, a.jsx)(p.Z, {
                  products: N.filteredAndSortedProducts,
                  uniqueCategories: j,
                  currentCategory: f,
                  currentSortOrder: v,
                  onCategoryChange: (e) => {
                    (x(e), scrollToTopOfTimeline());
                  },
                  onSortOrderChange: (e) => {
                    (w(e), scrollToTopOfTimeline());
                  },
                  sortedGroupKeys: k,
                }),
                (0, a.jsx)("div", {
                  className: "sticky bottom-0 left-0",
                  children: (0, a.jsx)(u(), {
                    ref: n,
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
          ((m = (f.then ? (await f)() : f)[0]), r());
        } catch (e) {
          r(e);
        }
      });
    },
    76178: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return TimelineControls;
        },
      });
      var r = l(97458),
        a = l(52983),
        i = l(97013),
        s = l(51923),
        o = l(63982),
        n = l.n(o);
      function TimelineMenu(e) {
        let {
            products: t,
            activeProduct: l,
            currentText: s,
            uniqueCategories: o,
            currentCategory: n,
            currentSortOrder: c,
            handleProductClick: d,
            onCategoryChange: u,
            onSortOrderChange: m,
          } = e,
          [p, h] = (0, a.useState)(!1),
          g = (0, a.useRef)(null),
          f = (0, a.useRef)(null),
          x = (0, a.useRef)(null),
          v = (0, a.useRef)(null);
        return (
          (0, a.useEffect)(() => {
            !p &&
              g.current &&
              f.current &&
              (g.current.style.width = "".concat(f.current.clientWidth, "px"));
          }, [s]),
          (0, r.jsx)("div", {
            ref: g,
            className:
              "fixed bottom-4 right-4 z-50 flex h-[3.75rem] flex-col items-end rounded-[2rem] bg-black",
            children: (0, r.jsxs)("div", {
              className: "flex h-full w-full flex-col items-end text-white",
              children: [
                (0, r.jsxs)("div", {
                  className:
                    "menu-content hidden h-[calc(100%-3.75rem)] w-full flex-shrink flex-col opacity-0",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "flex-shrink-0 p-4 pt-6",
                      children: [
                        (0, r.jsxs)("div", {
                          className: "mb-4",
                          children: [
                            (0, r.jsx)("label", {
                              htmlFor: "category-select",
                              className:
                                "mb-0.5 block text-sm font-medium text-lightgray-500",
                              children: "Filter By",
                            }),
                            (0, r.jsxs)("select", {
                              id: "category-select",
                              value: n,
                              onChange: (e) => u(e.target.value),
                              className:
                                "w-full rounded-lg border-[1.5px] border-white/20 bg-white/10 p-3 text-white",
                              children: [
                                (0, r.jsx)("option", {
                                  value: "all",
                                  children: "All Categories",
                                }),
                                o.map((e) =>
                                  (0, r.jsx)(
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
                        (0, r.jsxs)("div", {
                          children: [
                            (0, r.jsx)("label", {
                              htmlFor: "sort-select",
                              className:
                                "mb-0.5 block text-sm font-medium text-lightgray-500",
                              children: "Sort By",
                            }),
                            (0, r.jsxs)("select", {
                              id: "sort-select",
                              value: c,
                              onChange: (e) => m(e.target.value),
                              className:
                                "w-full rounded-lg border-[1.5px] border-white/20 bg-white/10 p-3 text-white",
                              children: [
                                (0, r.jsx)("option", {
                                  value: "release desc",
                                  className: "text-black",
                                  children: "Release Date: Newest First",
                                }),
                                (0, r.jsx)("option", {
                                  value: "release asc",
                                  className: "text-black",
                                  children: "Release Date: Oldest First",
                                }),
                                (0, r.jsx)("option", {
                                  value: "fiction desc",
                                  className: "text-black",
                                  children:
                                    "Lara Croft's Adventures: Newest First",
                                }),
                                (0, r.jsx)("option", {
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
                    (0, r.jsx)("div", {
                      className: "flex-grow overflow-auto px-4 pb-4",
                      children: (0, r.jsx)("ul", {
                        children: t.map((e) => {
                          let t = e.releaseDate,
                            a = t
                              ? new Date(t).getFullYear().toString()
                              : "Unknown";
                          return (0, r.jsxs)(
                            "li",
                            {
                              className:
                                "mb-2 flex cursor-pointer justify-between border-b border-white/20 py-4 font-bold hover:text-yellow-500 ".concat(
                                  (null == l ? void 0 : l.slug) === e.slug
                                    ? "text-yellow-500"
                                    : "",
                                ),
                              onClick: () => d(e.slug),
                              children: [
                                e.title,
                                (0, r.jsx)("span", {
                                  className: "text-white/50",
                                  children: a,
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
                (0, r.jsxs)("div", {
                  ref: f,
                  className:
                    "relative z-10 mt-auto flex flex-row items-center justify-end rounded-full bg-black p-2",
                  children: [
                    (0, r.jsx)("a", {
                      ref: v,
                      href: "#characters",
                      onClick: (e) => {
                        e.preventDefault();
                        let t = document.getElementById("characters");
                        t &&
                          i.Z.to(window, {
                            duration: 1,
                            scrollTo: { y: t, offsetY: 100 },
                            ease: "power2.inOut",
                          });
                      },
                      className:
                        "absolute -left-12 top-1/2 -z-10 -translate-y-1/2 font-spline-sans-mono uppercase text-black hover:underline",
                      children: "Skip",
                    }),
                    (0, r.jsx)("span", {
                      className:
                        "whitespace-nowrap px-4 font-spline-sans-mono uppercase text-white",
                      children: s,
                    }),
                    (0, r.jsx)("button", {
                      type: "button",
                      onClick: () => {
                        var e, t, l, r, a;
                        let s =
                          null === (e = g.current) || void 0 === e
                            ? void 0
                            : e.querySelector(".menu-content");
                        if (s) {
                          if (p)
                            (null === (t = v.current) ||
                              void 0 === t ||
                              t.classList.remove("pointer-events-none"),
                              i.Z.timeline()
                                .to(s, { opacity: 0, y: 20, duration: 0.3 })
                                .set(s, { display: "none" })
                                .to(
                                  g.current,
                                  {
                                    height: "3.75rem",
                                    width:
                                      null === (l = f.current) || void 0 === l
                                        ? void 0
                                        : l.clientWidth,
                                    duration: 0.5,
                                    ease: "power2.inOut",
                                  },
                                  "<-0.2",
                                ));
                          else {
                            (null === (r = v.current) ||
                              void 0 === r ||
                              r.classList.add("pointer-events-none"),
                              (x.current = document.querySelector("header")));
                            let e =
                              (null === (a = x.current) || void 0 === a
                                ? void 0
                                : a.offsetHeight) || 0;
                            i.Z.timeline()
                              .to(g.current, {
                                height: "calc(100svh - ".concat(
                                  "".concat(e / 16 + 2, "rem"),
                                  ")",
                                ),
                                width: "22rem",
                                duration: 0.5,
                                ease: "power2.inOut",
                              })
                              .set(s, { display: "flex" })
                              .to(s, { opacity: 1, y: 0, duration: 0.3 });
                          }
                          h(!p);
                        }
                      },
                      className:
                        "z-10 flex size-11 flex-none cursor-pointer items-center justify-center rounded-full bg-[url('/images/gold-button-texture-1.jpg')] bg-cover transition hover:scale-110",
                      children: (0, r.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        height: "24px",
                        viewBox: "0 -960 960 960",
                        width: "24px",
                        fill: "#000000",
                        className: "flex-none",
                        children: p
                          ? (0, r.jsx)("path", {
                              d: "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z",
                            })
                          : (0, r.jsx)("path", {
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
      function TimelineSidebar(e) {
        let { sortedGroupKeys: t, activeProduct: l, currentSortOrder: a } = e,
          handleGroupClick = (e) => {
            let t = document.getElementById("timeline-group-".concat(e));
            t &&
              i.Z.to(window, {
                duration: 1,
                scrollTo: { y: t, offsetY: 100 },
                ease: "power2.inOut",
              });
          },
          s = (() => {
            if (!l) return null;
            if (a.startsWith("fiction")) return l.timelineEra + " Era";
            if (a.startsWith("release")) {
              let e = l.releaseDate;
              return e ? new Date(e).getFullYear().toString() : "Unknown";
            }
            return null;
          })();
        return (0, r.jsxs)("div", {
          className:
            "fixed right-4 top-1/2 z-40 hidden w-40 -translate-y-1/2 transform gap-3 rounded-lg p-4 text-right font-spline-sans-mono font-medium uppercase tracking-wide text-black/50 xl:flex xl:flex-col xl:items-end",
          children: [
            (0, r.jsx)("ul", {
              children: t.map((e) =>
                (0, r.jsx)(
                  "li",
                  {
                    className: "mb-2 cursor-pointer hover:text-black ".concat(
                      s === e ? "text-black" : "",
                    ),
                    onClick: () => handleGroupClick(e),
                    children: e,
                  },
                  e,
                ),
              ),
            }),
            (0, r.jsx)("div", { className: "h-px w-12 bg-black/50" }),
            (0, r.jsx)("button", {
              type: "button",
              className: "text-right uppercase hover:text-black",
              onClick: (e) => {
                e.preventDefault();
                let t = document.getElementById("characters");
                t &&
                  i.Z.to(window, {
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
      function TimelineControls(e) {
        var t;
        let {
            products: l,
            uniqueCategories: o,
            currentCategory: c,
            currentSortOrder: d,
            onCategoryChange: u,
            onSortOrderChange: m,
            sortedGroupKeys: p,
          } = e,
          [h, g] = (0, a.useState)(
            (null === (t = l[0]) || void 0 === t ? void 0 : t.releaseDate)
              ? new Date(l[0].releaseDate).getFullYear().toString()
              : "Unknown",
          ),
          [f, x] = (0, a.useState)(null),
          v = (0, a.useRef)([]);
        return (
          (0, a.useEffect)(() => {
            f &&
              (function (e) {
                if (d.startsWith("release")) {
                  let t = e.releaseDate,
                    l = t ? new Date(t).getFullYear() : "Unknown";
                  g(l.toString());
                } else
                  d.startsWith("fiction") && g(e.timelineEra || "Unknown Era");
              })(f);
          }, [f, d]),
          (0, a.useEffect)(() => {
            (x(null), n().refresh());
          }, [l, c, d]),
          (0, s.V)(
            () => {
              (v.current.forEach((e) => e.kill()), (v.current = []));
              let e = l.map((e) =>
                n().create({
                  trigger: "#timeline-entry-".concat(e.slug),
                  start: "top center",
                  end: "bottom center",
                  onEnter: () => {
                    x(e);
                  },
                  onEnterBack: () => {
                    x(e);
                  },
                }),
              );
              return (
                (v.current = e),
                () => {
                  e.forEach((e) => e.kill());
                }
              );
            },
            { dependencies: [l, c, d] },
          ),
          (0, r.jsxs)("div", {
            className: "timeline-controls pointer-events-none opacity-0",
            children: [
              (0, r.jsx)("div", {
                className:
                  "pointer-events-none fixed bottom-0 left-0 right-0 z-40 h-24",
                children: (0, r.jsx)("div", {
                  className: "h-full w-full",
                  style: {
                    background: "linear-gradient(to top, #FFFAE1, transparent)",
                  },
                }),
              }),
              (0, r.jsx)(TimelineMenu, {
                products: l,
                activeProduct: f,
                currentText: h,
                uniqueCategories: o,
                currentCategory: c,
                currentSortOrder: d,
                handleProductClick: (e) => {
                  let t = document.getElementById("timeline-entry-".concat(e));
                  t &&
                    i.Z.to(window, {
                      duration: 1,
                      scrollTo: { y: t, offsetY: 100 },
                      ease: "power2.inOut",
                    });
                },
                onCategoryChange: u,
                onSortOrderChange: m,
              }),
              (0, r.jsx)(TimelineSidebar, {
                sortedGroupKeys: p,
                activeProduct: f,
                currentSortOrder: d,
              }),
            ],
          })
        );
      }
    },
    77377: function (e, t, l) {
      "use strict";
      l.a(e, async function (e, r) {
        try {
          var a = l(97458),
            i = l(52983),
            s = l(97013),
            o = l(38725),
            n = l(51923),
            c = l(47681),
            d = l.n(c),
            u = l(91806),
            m = l(10407),
            p = e([u]);
          u = (p.then ? (await p)() : p)[0];
          let formatDate = (e) => {
            if (!e) return "Unknown";
            let t = new Date(e);
            return t.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
              timeZone: "UTC",
            });
          };
          ((t.Z = (e) => {
            var t, l, r, c, p, h, g, f, x, v, w, y, b;
            let { product: j, index: N, scrollingToTop: k } = e,
              C = (0, i.useRef)(null),
              S = (0, i.useRef)(null),
              T = (0, i.useRef)(null);
            (0, n.V)(
              () => {
                if (!C.current) return;
                if (k) {
                  C.current.style.opacity = "0";
                  return;
                }
                C.current.style.opacity = "1";
                let e = C.current.querySelector(".quote"),
                  t = C.current.querySelector(".source"),
                  l = C.current.querySelector(".poster"),
                  r = C.current.querySelector(".title"),
                  a = C.current.querySelector(".headline"),
                  i = C.current.querySelector(".date"),
                  n = C.current.querySelector(".category"),
                  c = C.current.querySelector(".description"),
                  d = C.current.querySelector(".button"),
                  u = C.current.querySelector(".content-line");
                if (
                  ((S.current = s.Z.timeline({
                    scrollTrigger: { trigger: l, start: "25% 80%" },
                  })),
                  l &&
                    S.current.fromTo(
                      l,
                      { opacity: 0 },
                      { opacity: 1, duration: 0.5 },
                    ),
                  (T.current = s.Z.timeline({
                    scrollTrigger: { trigger: r, start: "top 80%" },
                  })),
                  e)
                ) {
                  let l = new o.SplitText(e, { type: "chars, words" });
                  s.Z.fromTo(
                    l.chars,
                    { opacity: 0 },
                    {
                      opacity: 1,
                      duration: 0.01,
                      stagger: 0.05,
                      scrollTrigger: { trigger: e, start: "top 80%" },
                      onComplete: () => {
                        t &&
                          s.Z.fromTo(
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
                (r &&
                  T.current.fromTo(
                    r,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.4 },
                  ),
                  a &&
                    T.current.fromTo(
                      a,
                      { opacity: 0, y: 20 },
                      { opacity: 1, y: 0, duration: 0.4 },
                    ),
                  u &&
                    T.current.fromTo(
                      u,
                      { scaleX: 0 },
                      { scaleX: 1, duration: 0.5, ease: "power2.out" },
                      "<",
                    ),
                  i &&
                    n &&
                    T.current.fromTo(
                      [i, n],
                      { opacity: 0, y: 20 },
                      { opacity: 1, y: 0, duration: 0.2, stagger: 0.2 },
                    ),
                  c &&
                    T.current.fromTo(
                      c,
                      { opacity: 0, y: 20 },
                      { opacity: 1, y: 0, duration: 0.4 },
                    ),
                  d &&
                    T.current.fromTo(
                      d,
                      { opacity: 0, y: 20 },
                      { opacity: 1, y: 0, duration: 0.4 },
                    ));
              },
              { scope: C, dependencies: [k], revertOnUpdate: !0 },
            );
            let Z = (0, u.Wx)(
                null === (l = j.timelinePosterImage) || void 0 === l
                  ? void 0
                  : null === (t = l.fields.file) || void 0 === t
                    ? void 0
                    : t.url,
              ),
              F =
                null === (h = j.timelinePosterImage) || void 0 === h
                  ? void 0
                  : null === (p = h.fields.file) || void 0 === p
                    ? void 0
                    : null === (c = p.details) || void 0 === c
                      ? void 0
                      : null === (r = c.image) || void 0 === r
                        ? void 0
                        : r.width,
              z =
                null === (v = j.timelinePosterImage) || void 0 === v
                  ? void 0
                  : null === (x = v.fields.file) || void 0 === x
                    ? void 0
                    : null === (f = x.details) || void 0 === f
                      ? void 0
                      : null === (g = f.image) || void 0 === g
                        ? void 0
                        : g.height;
            return (0, a.jsxs)("div", {
              id: "timeline-entry-".concat(j.slug),
              ref: C,
              className: "timeline-entry py-8 lg:py-16",
              children: [
                j.timelineQuote &&
                  (0, a.jsxs)("div", {
                    className:
                      "relative mx-auto flex justify-center px-4 pb-16 lg:w-3/4 lg:px-0 lg:pb-32",
                    children: [
                      (0, a.jsxs)("blockquote", {
                        className:
                          "relative z-10 font-spline-sans-mono text-2xl lg:text-3xl",
                        children: [
                          (0, a.jsxs)("p", {
                            className: "quote mb-4 font-light",
                            children: ['"', j.timelineQuote, '"'],
                          }),
                          (0, a.jsx)("cite", {
                            className:
                              "source block text-lg font-semibold uppercase not-italic opacity-0",
                            children: j.timelineQuoteSource,
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
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
                (0, a.jsxs)("div", {
                  className: "flex flex-col lg:items-end lg:gap-6 ".concat(
                    N % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse",
                  ),
                  children: [
                    (0, a.jsx)("div", {
                      className: "poster flex-none px-4 py-16 lg:flex-1",
                      children: (0, a.jsx)(m.H, {
                        src: Z,
                        alt: j.title,
                        width: F,
                        height: z,
                        priority: !0,
                        rotateClass: N % 2 == 0 ? "-rotate-3" : "rotate-3",
                        className: "max-h-[50vh] lg:max-h-[600px]",
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className: "relative flex-1",
                      children: [
                        (0, a.jsx)("div", {
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
                        (0, a.jsxs)("div", {
                          className: "relative z-10 p-6",
                          children: [
                            (0, a.jsx)("h2", {
                              className: "title mb-2 text-[2rem] font-bold",
                              children: j.title,
                            }),
                            j.timelineHeadline &&
                              (0, a.jsx)("h3", {
                                className: "headline text-5xl font-bold",
                                children: j.timelineHeadline,
                              }),
                            (0, a.jsx)(d(), {
                              src: "/images/welcome/lines/timeline-line.svg",
                              alt: "A streak of gold beneath the product title",
                              width: 438,
                              height: 4,
                              className: "content-line w-full py-4",
                            }),
                            (0, a.jsxs)("div", {
                              className:
                                "mb-6 flex justify-between font-spline-sans-mono font-light uppercase",
                              children: [
                                (0, a.jsx)("span", {
                                  className: "date",
                                  children: formatDate(j.releaseDate),
                                }),
                                (0, a.jsx)("span", {
                                  className: "category",
                                  children:
                                    null === (w = j.category) || void 0 === w
                                      ? void 0
                                      : w.fields.name,
                                }),
                              ],
                            }),
                            (0, a.jsx)("p", {
                              className: "description mb-7",
                              children: j.timelineDescription,
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex gap-4",
                              children: [
                                (0, a.jsx)("a", {
                                  href: "/products/"
                                    .concat(
                                      null === (y = j.category) || void 0 === y
                                        ? void 0
                                        : y.fields.slug,
                                      "/",
                                    )
                                    .concat(j.slug),
                                  target: "_blank",
                                  className:
                                    "timeline-view-product-button button rounded-lg border border-black/20 px-6 py-3 transition hover:border-black",
                                  children: "View Product",
                                }),
                                j.timelineCustomLinkUrl &&
                                  (0, a.jsx)("a", {
                                    href: j.timelineCustomLinkUrl,
                                    target: "_blank",
                                    className:
                                      "timeline-custom-link-button button rounded-lg border border-black/20 px-6 py-3 transition hover:border-black",
                                    children:
                                      null !==
                                        (b = j.timelineCustomLinkCtaText) &&
                                      void 0 !== b
                                        ? b
                                        : "Learn More",
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
          }),
            r());
        } catch (e) {
          r(e);
        }
      });
    },
    31863: function (e, t, l) {
      "use strict";
      l.a(e, async function (e, r) {
        try {
          l.d(t, {
            Z: function () {
              return WelcomeHero;
            },
          });
          var a = l(97458),
            i = l(52983),
            s = l(97013),
            o = l(38725),
            n = l(51923),
            c = l(47681),
            d = l.n(c),
            u = l(91806),
            m = l(89630),
            p = l(1850),
            h = e([u]);
          u = (h.then ? (await h)() : h)[0];
          let g = p.z.object({
              effectiveType: p.z.string().optional(),
              saveData: p.z.boolean().optional(),
            }),
            getNetworkInformation = () => {
              if ("undefined" == typeof navigator) return;
              let e = [
                Reflect.get(navigator, "connection"),
                Reflect.get(navigator, "mozConnection"),
                Reflect.get(navigator, "webkitConnection"),
              ];
              for (let t of e) {
                let e = g.safeParse(t);
                if (e.success) return e.data;
              }
            };
          function WelcomeHero(e) {
            var t, l, r, c, p;
            let { welcomePage: h } = e,
              [g, f] = (0, i.useState)(!1),
              x = (0, i.useRef)(null),
              v = (0, i.useRef)(null),
              [w, y] = (0, i.useState)(!1),
              [b, j] = (0, i.useState)(!1);
            return (
              (0, i.useEffect)(() => {
                let e = getNetworkInformation();
                if (e) {
                  let { effectiveType: t, saveData: l } = e;
                  ("2g" === t || "3g" === t || l) && f(!0);
                }
              }, []),
              (0, i.useEffect)(() => {
                j(!0);
              }, []),
              (0, n.V)(
                () => {
                  let e = s.Z.timeline(),
                    t = new o.SplitText(".hero-text", { type: "chars, words" });
                  (s.Z.set(t.chars, {
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
                      .to(".hero-underline", { width: 260, duration: 3 }));
                  let l = s.Z.timeline({ repeat: -1, repeatDelay: 2 });
                  l.to(".down-arrow", {
                    y: 8,
                    duration: 0.6,
                    ease: "power1.inOut",
                  }).to(".down-arrow", {
                    y: 0,
                    duration: 0.6,
                    ease: "power1.inOut",
                  });
                },
                { scope: x },
              ),
              (0, i.useEffect)(() => {
                w &&
                  s.Z.to(".hero-video", {
                    opacity: 1,
                    duration: 1,
                    ease: "power2.inOut",
                  });
              }, [w]),
              (0, a.jsxs)("div", {
                ref: x,
                className:
                  "relative flex min-h-[max(700px,85svh)] flex-col justify-center overflow-hidden bg-trueblack md:min-h-[max(1000px,100svh)]",
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "-z-5 absolute left-1/2 top-0 mt-24 aspect-video h-[50vh] -translate-x-1/2 md:h-auto md:w-full lg:left-0 lg:mt-0 lg:translate-x-0",
                    children: [
                      h.heroBackgroundVideoUrl && !g
                        ? b &&
                          (0, a.jsx)(m.Z, {
                            ref: v,
                            url: h.heroBackgroundVideoUrl,
                            className: "hero-video",
                            loop: !0,
                            width: "100%",
                            height: "100%",
                            controls: !1,
                            volume: 0,
                            playing: !0,
                            muted: !0,
                            onBufferEnd: () => y(!0),
                            style: { opacity: 0 },
                            playsinline: !0,
                            config: {
                              file: { attributes: { preload: "auto" } },
                            },
                          })
                        : (0, a.jsx)(d(), {
                            fill: !0,
                            className:
                              "object-contain object-top xl:object-cover",
                            alt:
                              null !==
                                (c =
                                  null === (t = h.heroBackgroundImage) ||
                                  void 0 === t
                                    ? void 0
                                    : t.fields.description) && void 0 !== c
                                ? c
                                : "",
                            src: (0, u.Wx)(
                              null !==
                                (p =
                                  null === (r = h.heroBackgroundImage) ||
                                  void 0 === r
                                    ? void 0
                                    : null === (l = r.fields.file) ||
                                        void 0 === l
                                      ? void 0
                                      : l.url) && void 0 !== p
                                ? p
                                : "",
                            ),
                          }),
                      (0, a.jsx)("div", {
                        className:
                          "absolute bottom-0 left-0 z-10 h-20 w-full bg-gradient-to-b from-transparent to-trueblack",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "hero-cta-container relative z-20 flex flex-col items-center opacity-0",
                    children: [
                      (0, a.jsx)("div", {
                        className: "mb-2 flex justify-center",
                        children: (0, a.jsx)("h1", {
                          className:
                            "hero-text text-center text-3xl font-bold uppercase tracking-[5px] lg:text-5xl",
                          children: h.heroCallToActionText,
                        }),
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "flex w-full items-center justify-center gap-2 px-6 lg:px-0",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "hero-underline relative h-1 w-0 overflow-hidden",
                            children: (0, a.jsx)(d(), {
                              width: 260,
                              height: 4,
                              src: "/images/welcome/lines/hero-line.png",
                              alt: "A streak of gold underneath the hero headline",
                              className: "absolute right-0 top-0 max-w-none",
                            }),
                          }),
                          (0, a.jsx)("div", {
                            role: "button",
                            tabIndex: 0,
                            onClick: () => {
                              let e = document.querySelector(
                                "#meet-lara-scroll-target",
                              );
                              e &&
                                s.Z.to(window, {
                                  duration: 1.5,
                                  scrollTo: { y: e, offsetY: 85 },
                                  ease: "power2.inOut",
                                });
                            },
                            "aria-label": "Scroll to Meet Lara section",
                            className:
                              "relative top-0.5 cursor-pointer transition hover:scale-110",
                            children: (0, a.jsx)(d(), {
                              width: 88,
                              height: 76,
                              src: "/images/welcome/hero-arrow.png",
                              alt: "A bouncing arrow pointing down",
                              className: "down-arrow w-6",
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "hero-underline relative h-1 w-0 overflow-hidden",
                            children: (0, a.jsx)(d(), {
                              width: 260,
                              height: 4,
                              src: "/images/welcome/lines/hero-line.png",
                              alt: "A streak of gold underneath the hero headline",
                              className:
                                "absolute left-0 top-0 max-w-none -scale-x-100",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)(d(), {
                    width: 2016,
                    height: 1073,
                    src: "/images/welcome/hero-gradient.png",
                    alt: "A radial gradient",
                    className:
                      "absolute bottom-0 left-0 z-10 w-full -translate-x-1/2 translate-y-1/3 rotate-[30deg] scale-[2.5]",
                  }),
                  (0, a.jsx)(d(), {
                    width: 2016,
                    height: 1073,
                    src: "/images/welcome/hero-gradient.png",
                    alt: "A radial gradient",
                    className:
                      "absolute bottom-0 left-0 z-10 w-full translate-x-1/2 translate-y-1/3 -rotate-[30deg] scale-[2.5]",
                  }),
                ],
              })
            );
          }
          r();
        } catch (e) {
          r(e);
        }
      });
    },
    46271: function (e, t, l) {
      "use strict";
      l.a(e, async function (e, r) {
        try {
          (l.r(t),
            l.d(t, {
              __N_SSG: function () {
                return x;
              },
              default: function () {
                return Welcome;
              },
            }));
          var a = l(97458),
            i = l(19024),
            s = l(12984),
            o = l(87249),
            n = l(99915),
            c = l(20213),
            d = l(47680),
            u = l.n(d),
            m = l(31863),
            p = l(4673),
            h = l(18700),
            g = l(13806),
            f = e([i, o, n, m, p, h, g]);
          [i, o, n, m, p, h, g] = f.then ? (await f)() : f;
          var x = !0;
          function Welcome(e) {
            var t;
            let {
              welcomePage: l,
              products: r,
              navItems: d,
              websiteSingleton: f,
              footerSocialLinks: x,
              timelineProducts: v,
              signUpBanner: w,
            } = e;
            return (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsxs)(u(), {
                  children: [
                    (0, a.jsx)("title", {
                      children: "Tomb Raider | Meet Lara Croft",
                    }),
                    (0, a.jsx)(
                      "meta",
                      {
                        name: "description",
                        content:
                          "Who is Lara Croft? Meet our fearless archeologist and adventurer! Explore her adventures through the years and meet the supporting characters of Tomb Raider.",
                      },
                      "description",
                    ),
                    (0, a.jsx)(
                      "meta",
                      {
                        name: "keywords",
                        content:
                          "Tomb Raider, Lara Croft, adventure, welcome, timeline, video games, movies, comics",
                      },
                      "keywords",
                    ),
                    (0, a.jsx)(
                      "meta",
                      {
                        property: "og:title",
                        content: "Tomb Raider | Meet Lara Croft",
                      },
                      "og:title",
                    ),
                    (0, a.jsx)(
                      "meta",
                      {
                        property: "og:description",
                        content:
                          "Who is Lara Croft? Meet our fearless archeologist and adventurer! Explore her adventures through the years and meet the supporting characters of Tomb Raider.",
                      },
                      "og:description",
                    ),
                    (0, a.jsx)(
                      "meta",
                      {
                        property: "og:image",
                        content: "/images/welcome/meet-lara-meta-image.jpg",
                      },
                      "og:image",
                    ),
                    (0, a.jsx)("meta", {
                      name: "viewport",
                      content: "width=device-width, initial-scale=1.0",
                    }),
                    (0, a.jsx)(
                      "meta",
                      { name: "twitter:card", content: "summary_large_image" },
                      "twitter:card",
                    ),
                    (0, a.jsx)(
                      "meta",
                      {
                        name: "twitter:title",
                        content: "Tomb Raider | Meet Lara Croft",
                      },
                      "twitter:title",
                    ),
                    (0, a.jsx)(
                      "meta",
                      {
                        name: "twitter:description",
                        content:
                          "Who is Lara Croft? Meet our fearless archeologist and adventurer! Explore her adventures through the years and meet the supporting characters of Tomb Raider.",
                      },
                      "twitter:description",
                    ),
                    (0, a.jsx)(
                      "meta",
                      {
                        name: "twitter:image",
                        content: "/images/welcome/meet-lara-meta-image.jpg",
                      },
                      "twitter:image",
                    ),
                    (0, a.jsx)(
                      "meta",
                      {
                        name: "twitter:image:alt",
                        content:
                          "Meet Lara Croft - Tomb Raider's iconic adventurer and archaeologist",
                      },
                      "twitter:image:alt",
                    ),
                    (0, a.jsx)(
                      "meta",
                      { name: "twitter:site", content: "@tombraider" },
                      "twitter:site",
                    ),
                  ],
                }),
                (0, a.jsx)(o.ZP, { surveys: [], navItems: d, signUpBanner: w }),
                (0, a.jsxs)("div", {
                  className: "relative z-10 overflow-x-clip",
                  children: [
                    (0, a.jsx)(m.Z, { welcomePage: l }),
                    (0, a.jsx)(p.Z, { welcomePage: l }),
                    (0, a.jsx)(h.Z, { timelineProducts: v }),
                    (0, a.jsx)(g.Z, { welcomePage: l }),
                    l.featuredProductsEnabled &&
                      (0, a.jsx)(c.Z, {
                        className: "pt-8 lg:pt-32",
                        children: (0, a.jsx)(i.Z, {
                          products: r,
                          title:
                            null !== (t = l.featuredProductsHeading) &&
                            void 0 !== t
                              ? t
                              : "Featured Games",
                        }),
                      }),
                    (0, a.jsx)(s.Z, { websiteSingleton: f }),
                  ],
                }),
                (0, a.jsx)(n.Z, {
                  websiteSingleton: f,
                  navItems: d,
                  footerSocialLinks: x,
                }),
              ],
            });
          }
          r();
        } catch (e) {
          r(e);
        }
      });
    },
    69049: function (e, t, l) {
      "use strict";
      l.d(t, {
        So: function () {
          return getYear;
        },
        p6: function () {
          return formatDate;
        },
      });
      let formatDate = (e) => {
          if (!e) return "";
          let t = new Date(e);
          return t.toLocaleString("en-US", {
            timeZone: "UTC",
            month: "short",
            day: "numeric",
            year: "numeric",
          });
        },
        getYear = (e) =>
          e ? new Date(e).toLocaleString("en-US", { year: "numeric" }) : "";
    },
    97013: function (e, t, l) {
      "use strict";
      var r = l(6616),
        a = l(67392),
        i = l(63982),
        s = l(29333),
        o = l(63686),
        n = l(38725);
      (r.p8.registerPlugin(
        a.Flip,
        i.ScrollTrigger,
        s.ScrollToPlugin,
        o.ScrollSmoother,
        n.SplitText,
      ),
        (t.Z = r.p8));
    },
    57865: function (e, t, l) {
      "use strict";
      l.d(t, {
        cn: function () {
          return cn;
        },
      });
      var r = l(28934),
        a = l(44361);
      function cn() {
        for (var e = arguments.length, t = Array(e), l = 0; l < e; l++)
          t[l] = arguments[l];
        return (0, a.m)((0, r.W)(t));
      }
    },
  },
  function (e) {
    (e.O(
      0,
      [46, 369, 681, 882, 34, 658, 778, 630, 249, 806, 774, 888, 179],
      function () {
        return e((e.s = 52477));
      },
    ),
      (_N_E = e.O()));
  },
]);
