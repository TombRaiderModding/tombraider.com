(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9635],
  {
    4448: (e, t, s) => {
      "use strict";
      s.a(e, async (e, r) => {
        try {
          s.d(t, { A: () => f });
          var l = s(2183),
            a = s(75109),
            i = s(36439),
            n = s(15013),
            o = s.n(n),
            c = s(68456),
            d = s(46728),
            u = s.n(d),
            h = s(64171),
            p = s(92642),
            x = s(94536),
            g = e([a, p]);
          function f(e) {
            let { products: t, title: s, description: r, isHome: a } = e,
              [n, c] = (0, i.useState)(null);
            return (0, l.jsxs)("div", {
              className:
                "flex w-full flex-col items-stretch overflow-x-hidden py-10",
              children: [
                (0, l.jsxs)("div", {
                  className: a
                    ? "flex flex-col flex-wrap justify-between self-stretch px-8 pb-12 lg:flex-row lg:px-16"
                    : "flex w-full flex-col flex-wrap justify-between gap-y-8 px-6 pb-8 lg:flex-row lg:items-end lg:px-12 lg:pb-12",
                  children: [
                    a
                      ? (0, l.jsxs)("div", {
                          className:
                            "flex flex-col flex-wrap items-center gap-x-8 gap-y-4 pb-4 lg:flex-row lg:pb-0",
                          children: [
                            (0, l.jsx)("h2", {
                              className:
                                "text-4xl text-black sm:text-5xl lg:text-6xl",
                              children: s,
                            }),
                            (0, l.jsx)(u(), {
                              href: "/products/games",
                              children: (0, l.jsx)(h.A, {
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
                              children: s,
                            }),
                            (0, l.jsx)("p", {
                              className: "text-sm",
                              children: r,
                            }),
                          ],
                        }),
                    t.length > 0 &&
                      (0, l.jsxs)("div", {
                        className: "hidden gap-x-2 lg:flex",
                        children: [
                          (0, l.jsx)(o(), {
                            width: 48,
                            height: 48,
                            alt: "Left arrow",
                            src: "/images/arrow-button-left.svg",
                            className: "mr-2 cursor-pointer",
                            onClick: () => n?.slidePrev(),
                          }),
                          (0, l.jsx)(o(), {
                            width: 48,
                            height: 48,
                            alt: "Right arrow",
                            onClick: () => n?.slideNext(),
                            src: "/images/arrow-button-right.svg",
                            className: "cursor-pointer",
                          }),
                        ],
                      }),
                  ],
                }),
                (0, l.jsx)("div", {
                  className: "px-8 lg:px-16",
                  children: (0, l.jsx)(x.RC, {
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
                        x.qr,
                        {
                          className: "relative max-w-none shrink-0",
                          style: { width: 300 },
                          children: (0, l.jsx)(m, { product: e }),
                        },
                        e.slug,
                      ),
                    ),
                  }),
                }),
              ],
            });
          }
          function m({ product: e }) {
            return (0, l.jsx)("div", {
              className:
                "group aspect-[2/3] h-auto w-full cursor-pointer shadow-[0_10px_48px_-16px_rgba(0,0,0,1)]",
              children: (0, l.jsxs)(u(), {
                href: `/products/${e.category?.fields.slug}/${e.slug}`,
                children: [
                  (0, l.jsx)(o(), {
                    fill: !0,
                    alt: (0, a.a9f)(e)?.fields.image?.fields.description ?? "",
                    src: `${(0, p._c)((0, a.a9f)(e)?.fields.image?.fields.file?.url)}?fit=fill&w=300&h=450`,
                    className:
                      "absolute top-0 left-0 h-full w-auto object-cover",
                    sizes: "900px",
                  }),
                  (0, l.jsx)(o(), {
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
                                o(),
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
                  (0, l.jsx)(o(), {
                    className:
                      "absolute bottom-4 left-4 opacity-0 group-hover:bottom-1 group-hover:left-1 group-hover:opacity-60",
                    width: 24,
                    height: 24,
                    alt: "bottom left bracket",
                    src: "/images/small-bottom-left-bracket.svg",
                    style: { transition: "0.4s all ease" },
                  }),
                  (0, l.jsx)(o(), {
                    className:
                      "absolute right-4 bottom-4 opacity-0 group-hover:right-1 group-hover:bottom-1 group-hover:opacity-60",
                    width: 24,
                    height: 24,
                    alt: "bottom right bracket",
                    src: "/images/small-bottom-right-bracket.svg",
                    style: { transition: "0.4s all ease" },
                  }),
                  (0, l.jsx)(o(), {
                    className:
                      "absolute top-4 left-4 opacity-0 group-hover:top-1 group-hover:left-1 group-hover:opacity-60",
                    width: 24,
                    height: 24,
                    alt: "top left bracket",
                    src: "/images/small-top-left-bracket.svg",
                    style: { transition: "0.4s all ease" },
                  }),
                  (0, l.jsx)(o(), {
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
          (([a, p] = g.then ? (await g)() : g), r());
        } catch (e) {
          r(e);
        }
      });
    },
    12317: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => i });
      var r = s(2183),
        l = s(46728),
        a = s.n(l);
      let i = ({ href: e, children: t, className: s, ...l }) =>
        "string" == typeof e && e.startsWith("http")
          ? (0, r.jsx)("a", {
              href: e,
              target: "_blank",
              rel: "noopener noreferrer",
              className: s,
              ...l,
              children: t,
            })
          : (0, r.jsx)(a(), { className: s, href: e, ...l, children: t });
    },
    20162: (e, t, s) => {
      "use strict";
      s.a(e, async (e, r) => {
        try {
          s.d(t, { A: () => g });
          var l = s(2183),
            a = s(15013),
            i = s.n(a),
            n = s(46728),
            o = s.n(n),
            c = s(9751),
            d = s(12317),
            u = s(61065),
            h = s(92642),
            p = s(95783),
            x = e([c, h, p]);
          function g({
            websiteSingleton: e,
            navItems: t,
            footerSocialLinks: s,
          }) {
            let { isLoggedIn: r, shopifyUrl: a } = (0, c.u)(),
              n = t.filter(
                (e) => e.showInFooter && !(r && e.hideForLoggedInUsers),
              ),
              x = t.filter(
                (e) => e.showInSubFooter && !(r && e.hideForLoggedInUsers),
              );
            return (0, l.jsxs)("footer", {
              className: "relative w-full bg-black px-8 text-white lg:px-32",
              children: [
                (0, l.jsx)(u.A, { data: (0, p._8)(e, s) }),
                (0, l.jsx)(u.A, { data: (0, p.OU)() }),
                (0, l.jsxs)("div", {
                  className:
                    "flex flex-col items-center justify-center space-y-16 pt-16 pb-16 lg:flex-row lg:items-stretch lg:justify-between lg:space-y-0 lg:pt-32",
                  children: [
                    (0, l.jsx)("div", {
                      children: (0, l.jsx)(i(), {
                        src: (0, h._c)(e.footerLogo?.fields.file?.url),
                        width: 248,
                        height: 248,
                        alt: (0, h._c)(e.footerLogo?.fields.description),
                        className: "w-40",
                      }),
                    }),
                    (0, l.jsxs)("nav", {
                      "aria-label": "Footer",
                      className:
                        "text-darkgray-500 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-lg",
                      children: [
                        n.map((e) => {
                          let t = e.link;
                          return (
                            e.shouldReplaceWithGeneratedShopLink &&
                              a &&
                              (t = a),
                            (0, l.jsx)(
                              o(),
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
                      children: s.map((e) =>
                        (0, l.jsx)(
                          d.A,
                          {
                            href: e.link,
                            children: (0, l.jsx)(i(), {
                              src: (0, h._c)(e.icon?.fields.file?.url),
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
                      children: x.map((e) =>
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
          (([c, h, p] = x.then ? (await x)() : x), r());
        } catch (e) {
          r(e);
        }
      });
    },
    28564: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => d });
      var r = s(2183),
        l = s(36439),
        a = s(85414),
        i = s(95290),
        n = s(61932),
        o = s(46728),
        c = s.n(o);
      function d(e) {
        let {
            items: t,
            selected: s,
            onSelect: o = () => {},
            placeholder: d = "Options",
            error: u,
            variant: h,
            rounded: p = !1,
          } = e,
          x = (e) => (e ? ("string" == typeof e ? e : e.name) : ""),
          g = (e) => {
            o("string" == typeof e ? e : e.value);
          };
        return (0, r.jsxs)(a.Menu, {
          as: "div",
          className: "relative inline-block w-full grow text-left",
          children: [
            (0, r.jsx)("div", {
              children: (0, r.jsxs)(a.Menu.Button, {
                className: (0, n.cn)(
                  "flex w-full items-center border-2 bg-white/20 px-3 py-4 backdrop-blur duration-200 outline-none",
                  u
                    ? "border-red-500/40 hover:border-red-500/70 focus:border-red-500/70"
                    : "dark" === h
                      ? "rounded-lg border-black/20 px-5 py-3 hover:border-black/40 focus:border-black/40"
                      : "border-gray-300/20 hover:border-white/50 focus:border-white",
                  "dark" === h ? "text-black" : "text-white",
                  p && "rounded-lg",
                ),
                children: [
                  s
                    ? "string" == typeof t[0]
                      ? s
                      : t.find((e) => e.value === s)?.name
                    : d,
                  (0, r.jsx)("div", { className: "grow" }),
                  (0, r.jsx)(i.A, {
                    className: `${"dark" === h ? "text-black" : "text-yellow"} -mr-1 h-6 w-6`,
                    "aria-hidden": "true",
                    color: "#E9BC6C",
                  }),
                ],
              }),
            }),
            (0, r.jsx)(a.Transition, {
              as: l.Fragment,
              enter: "transition ease-out duration-100",
              enterFrom: "transform opacity-0 scale-95",
              enterTo: "transform opacity-100 scale-100",
              leave: "transition ease-in duration-75",
              leaveFrom: "transform opacity-100 scale-100",
              leaveTo: "transform opacity-0 scale-95",
              children: (0, r.jsx)(a.Menu.Items, {
                className:
                  "absolute left-0 z-30 mt-2 max-h-60 w-full origin-top-right overflow-y-auto rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none",
                children: (0, r.jsx)("div", {
                  className: "py-1",
                  children: t.map((e) =>
                    (0, r.jsx)(
                      a.Menu.Item,
                      {
                        children: ({ active: t }) => {
                          let s = "string" != typeof e ? e.href : void 0,
                            l = (function (...e) {
                              return e.filter(Boolean).join(" ");
                            })(
                              t ? "bg-gray-100 text-gray-900" : "text-gray-700",
                              "block px-4 py-2 text-sm",
                            );
                          return s
                            ? (0, r.jsx)(c(), {
                                scroll: !1,
                                href: s,
                                onClick: () => g(e),
                                className: l,
                                children: x(e),
                              })
                            : (0, r.jsx)("button", {
                                type: "button",
                                onClick: () => g(e),
                                className: `w-full text-left ${l}`,
                                children: x(e),
                              });
                        },
                      },
                      "object" == typeof e ? e.value : e,
                    ),
                  ),
                }),
              }),
            }),
          ],
        });
      }
    },
    28872: (e, t, s) => {
      "use strict";
      e.exports = s(94528);
    },
    41036: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => o });
      var r = s(2183),
        l = s(61932),
        a = s(15013),
        i = s.n(a),
        n = s(36439);
      function o(e) {
        let { className: t, children: s, ...a } = e,
          o = (0, n.useRef)(null),
          [c, d] = (0, n.useState)(0);
        return (
          (0, n.useEffect)(() => {
            if (!o.current) return;
            let e = new ResizeObserver(() => {
              d(o.current?.offsetHeight ?? 0);
            });
            return (
              e.observe(o.current),
              () => {
                e.disconnect();
              }
            );
          }, [o]),
          (0, r.jsxs)("div", {
            ref: o,
            className: (0, l.cn)("relative w-full pb-24", t),
            ...a,
            children: [
              s,
              (0, r.jsx)("div", {
                className:
                  "absolute left-0 top-0 -z-20 h-full w-full bg-[url('/images/paper-texture_main_tile(tinyfied).jpg')] bg-repeat",
              }),
              (0, r.jsx)("div", {
                style: { height: c },
                className:
                  "pointer-events-none absolute left-0 top-0 w-full overflow-hidden",
                children: (0, r.jsx)(i(), {
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
                (0, r.jsx)(i(), {
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
              (0, r.jsx)(i(), {
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
    45763: (e, t, s) => {
      "use strict";
      s.a(e, async (e, r) => {
        try {
          s.d(t, { A: () => j });
          var l = s(2183),
            a = s(75109),
            i = s(15013),
            n = s.n(i),
            o = s(64171),
            c = s(46728),
            d = s.n(c),
            u = s(36439),
            h = s(31153),
            p = s(61932),
            x = s(28564),
            g = s(57560),
            f = s(92642),
            m = s(80707),
            v = s.n(m),
            w = s(72538),
            b = e([a, f]);
          function j({ categories: e, products: t }) {
            let [s, r] = (0, u.useState)(0),
              [a, i] = (0, u.useState)(v().nth(t, s));
            return (
              (0, u.useEffect)(() => {
                (r(0), i(v().first(t)));
              }, [t]),
              (0, u.useEffect)(() => {
                i(v().nth(t, s));
              }, [t, s]),
              a &&
                (0, l.jsxs)("div", {
                  className: "relative pb-24",
                  children: [
                    (0, l.jsx)(y, {
                      featuredProduct: a,
                      featuredProductIndex: s,
                      products: t,
                    }),
                    (0, l.jsxs)("div", {
                      className: "relative z-0 overflow-hidden",
                      children: [
                        (0, l.jsx)(N, {
                          featuredProduct: a,
                          featuredProductIndex: s,
                          products: t,
                        }),
                        (0, l.jsx)(k, {
                          tabs: e,
                          products: t,
                          featuredProductIndex: s,
                          setFeaturedProductIndex: r,
                        }),
                      ],
                    }),
                  ],
                })
            );
          }
          function y({ featuredProductIndex: e, products: t }) {
            return (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)("div", {
                  className: "absolute inset-0 -z-20 bg-black",
                  children: (0, l.jsxs)("div", {
                    className: "relative min-h-full overflow-hidden pb-24",
                    children: [
                      (0, l.jsxs)("div", {
                        className:
                          "absolute top-16 right-0 aspect-3/2 w-full max-w-5xl lg:top-0 xl:max-w-6xl",
                        children: [
                          t.map((t, s) => {
                            let r = (0, a.r5H)(t);
                            return (0, l.jsx)(
                              n(),
                              {
                                fill: !0,
                                priority: !0,
                                sizes:
                                  "(min-width: 1280px) 1152px, (min-width: 1024px) 1024px, 100vw",
                                className: (0, p.cn)(
                                  "-z-10 object-cover object-top transition-opacity duration-500",
                                  e === s ? "opacity-100" : "opacity-0",
                                ),
                                alt: r?.fields.image?.fields.description ?? "",
                                src: (0, f._c)(
                                  r?.fields.image?.fields.file?.url,
                                ),
                              },
                              t.slug ?? s,
                            );
                          }),
                          (0, l.jsx)("div", {
                            className: "hidden h-full w-full lg:block",
                            style: {
                              background: `
                    linear-gradient(180deg, #181818 0%, transparent 26.66%),
                    linear-gradient(126deg, #181818 0%, transparent 26.66%),
                    linear-gradient(180deg, transparent 50%, #181818 100%),
                    linear-gradient(90deg, #181818 0%, transparent 48.94%)`,
                            },
                          }),
                          (0, l.jsx)("div", {
                            className: "h-full w-full lg:hidden",
                            style: {
                              background: `
                    linear-gradient(270deg, #181818 -0.13%, transparent 49.87%), 
                    linear-gradient(180deg, #181818 0%, transparent 50.2%), 
                    linear-gradient(180deg, transparent 50%, #181818 100%), 
                    linear-gradient(90deg, #181818 0%, transparent 48.94%)`,
                            },
                          }),
                        ],
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "absolute -right-28 -bottom-36 hidden h-full w-full opacity-50 lg:block",
                        children: (0, l.jsx)(n(), {
                          fill: !0,
                          className: "object-contain object-bottom-right",
                          alt: "topography lines",
                          src: "/images/topography.webp",
                        }),
                      }),
                      (0, l.jsxs)("div", {
                        className:
                          "absolute bottom-10 left-[-250px] aspect-16/7 w-full min-w-[800px] lg:-bottom-16 lg:left-[-500px]",
                        children: [
                          (0, l.jsx)("div", {
                            className:
                              "absolute h-full w-full overflow-visible opacity-40 mix-blend-lighten blur-[100px]",
                            style: {
                              background:
                                "radial-gradient(50% 50% at 50% 50%, #936726 0%, transparent 100%)",
                            },
                          }),
                          (0, l.jsx)(n(), {
                            fill: !0,
                            className:
                              "object-contain object-center opacity-30 mix-blend-screen",
                            alt: "lens dirt",
                            src: "/images/lens-dirt.webp",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, l.jsx)(w.A, {}),
              ],
            });
          }
          function N({
            featuredProduct: e,
            featuredProductIndex: t,
            products: s,
          }) {
            return (
              e &&
              (0, l.jsxs)("div", {
                className:
                  "mx-auto flex h-[500px] max-w-lg flex-col items-center justify-center px-6 pt-24 pb-6 text-center lg:mx-0 lg:items-start lg:pl-12 lg:text-left",
                children: [
                  e.titleLogo
                    ? (0, l.jsx)("div", {
                        className: "relative h-40 w-full shrink-0",
                        children: s.map(
                          (e, s) =>
                            e.titleLogo &&
                            (0, l.jsx)(
                              n(),
                              {
                                fill: !0,
                                priority: !0,
                                sizes: "(min-width: 1024px) 512px, 100vw",
                                className: (0, p.cn)(
                                  "object-contain object-center transition-opacity duration-500 lg:object-left",
                                  t === s ? "opacity-100" : "opacity-0",
                                ),
                                alt: e.titleLogo.fields.description ?? "",
                                src: (0, f._c)(e.titleLogo.fields.file?.url),
                              },
                              e.slug ?? s,
                            ),
                        ),
                      })
                    : (0, l.jsx)("h1", {
                        className:
                          "line-clamp-3 shrink-0 overflow-y-hidden text-5xl leading-[1.1] font-medium tracking-[-0.8px]",
                        children: e.title,
                      }),
                  e.shortDescription &&
                    (0, l.jsx)("p", {
                      className:
                        "mt-8 line-clamp-5 shrink-0 overflow-y-hidden leading-normal",
                      children: e.shortDescription,
                    }),
                  (0, l.jsx)(d(), {
                    href: `/products/${e.category?.fields.slug}/${e.slug}`,
                    className: "mt-10",
                    children: (0, l.jsx)(o.A, {
                      children: e.featuredProductButtonText,
                    }),
                  }),
                ],
              })
            );
          }
          function k({
            tabs: e,
            products: t,
            featuredProductIndex: s,
            setFeaturedProductIndex: r,
          }) {
            let i = (0, h.useRouter)(),
              n = e
                .map((e) => ({
                  name: e.name,
                  value: `/products/${e.slug}`,
                  order: e.order,
                }))
                .concat([
                  {
                    name: "New & Featured",
                    value: "/products/featured",
                    order: 0,
                  },
                ])
                .sort((e, t) => e.order - t.order);
            return (0, l.jsxs)("div", {
              className: "flex flex-col gap-y-7 px-6 pb-4 lg:px-12",
              children: [
                (0, l.jsx)("div", {
                  className: "mx-auto w-full lg:hidden",
                  children: (0, l.jsx)(x.A, {
                    rounded: !0,
                    placeholder: "New & Featured",
                    selected: `/products/${(Array.isArray(i.query.category) ? i.query.category[0] : i.query.category) ?? ""}`,
                    items: n,
                    onSelect: (e) => {
                      i.asPath !== e && i.replace(e, "", { scroll: !1 });
                    },
                  }),
                }),
                (0, l.jsx)(_, { tabs: e }),
                (0, l.jsx)(g.A, {
                  images: t.map(a.r5H).map((e, t) => (0, f.pO)(e, t, !0)),
                  selectedImageIndex: s,
                  setSelectedImageIndex: r,
                }),
              ],
            });
          }
          function _({ tabs: e }) {
            let t = (0, h.useRouter)();
            return (0, l.jsxs)("div", {
              className: "hidden lg:block",
              children: [
                (0, l.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "w-full",
                  height: "2",
                  viewBox: "0 0 1344 2",
                  preserveAspectRatio: "none",
                  fill: "none",
                  children: (0, l.jsx)("path", {
                    d: "M0 1H1344",
                    stroke: "#FCF9ED",
                    opacity: "0.1",
                    strokeWidth: "1.5",
                  }),
                }),
                (0, l.jsxs)("div", {
                  className: "flex flex-row items-stretch gap-x-1.5",
                  children: [
                    (0, l.jsx)(S, {
                      isActive: "/products/featured" === t.asPath,
                      label: "New & Featured",
                      url: "/products/featured",
                    }),
                    e
                      .sort((e, t) => e.order - t.order)
                      .map((e) =>
                        (0, l.jsxs)(
                          u.Fragment,
                          {
                            children: [
                              (0, l.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-9",
                                width: "3",
                                viewBox: "0 0 2 33",
                                preserveAspectRatio: "none",
                                fill: "none",
                                children: (0, l.jsx)("path", {
                                  d: "M1 32.25L1 0.25",
                                  stroke: "#FCF9ED",
                                  opacity: "0.1",
                                  strokeWidth: "1.5",
                                }),
                              }),
                              (0, l.jsx)(S, {
                                isActive: t.asPath === `/products/${e.slug}`,
                                label: e.name,
                                url: `/products/${e.slug}`,
                              }),
                            ],
                          },
                          e.slug,
                        ),
                      ),
                  ],
                }),
              ],
            });
          }
          function S({ label: e, isActive: t = !1, url: s }) {
            return (0, l.jsxs)("div", {
              className: "flex w-full flex-col pt-1.5",
              children: [
                (0, l.jsx)(d(), {
                  scroll: !1,
                  href: s,
                  className: (0, p.cn)(
                    "py-4 text-center font-bold tracking-[1.6px] text-white/80 uppercase transition-colors",
                    "bg-white/5 text-white",
                    "hover:bg-white/10 hover:text-white hover:text-shadow-none",
                  ),
                  children: e,
                }),
                t &&
                  (0, l.jsx)("div", {
                    className: "relative -mt-1 h-1.5 w-full overflow-visible",
                    children: (0, l.jsx)(n(), {
                      fill: !0,
                      alt: "Selected tab indicator",
                      src: "/images/selected-tab-underline.svg",
                    }),
                  }),
              ],
            });
          }
          (([a, f] = b.then ? (await b)() : b), r());
        } catch (e) {
          r(e);
        }
      });
    },
    51180: (e, t, s) => {
      "use strict";
      s.a(e, async (e, r) => {
        try {
          (s.r(t), s.d(t, { __N_SSG: () => o, default: () => c }));
          var l = s(2183),
            a = s(74474),
            i = s(56646),
            n = e([i]);
          i = (n.then ? (await n)() : n)[0];
          let d = {
            featured:
              "Browse featured Tomb Raider products from Crystal Dynamics. Discover the latest games, collectibles, and official merchandise starring Lara Croft today.",
            games:
              "Explore the full Tomb Raider games catalog. From classic remasters to the Survivor Trilogy, discover every Lara Croft adventure available to play now.",
            "tv-and-film":
              "Discover all Tomb Raider TV and film titles, including the Netflix animated series The Legend of Lara Croft and the classic Lara Croft live-action movies.",
          };
          var o = !0;
          function c({
            categories: e,
            categorySlug: t,
            featuredProducts: s,
            subcategories: r,
            websiteSingleton: n,
            navItems: o,
            footerSocialLinks: u,
            surveys: h,
            signUpBanner: p,
          }) {
            let x = d[t];
            return (0, l.jsxs)(l.Fragment, {
              children: [
                x && (0, l.jsx)(a.A, { description: x }),
                (0, l.jsx)(i.A, {
                  categories: e,
                  galleryProducts: s,
                  productLists: r,
                  websiteSingleton: n,
                  navItems: o,
                  footerSocialLinks: u,
                  surveys: h,
                  signUpBanner: p,
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
    56646: (e, t, s) => {
      "use strict";
      s.a(e, async (e, r) => {
        try {
          s.d(t, { A: () => h });
          var l = s(2183),
            a = s(49980),
            i = s(45763),
            n = s(4448),
            o = s(90118),
            c = s(20162),
            d = s(41036);
          s(36439);
          var u = e([a, i, n, c]);
          function h({
            categories: e,
            galleryProducts: t,
            productLists: s,
            websiteSingleton: r,
            navItems: u,
            footerSocialLinks: p,
            surveys: x,
            signUpBanner: g,
          }) {
            return (0, l.jsxs)("div", {
              className: "",
              children: [
                (0, l.jsx)(a.Ay, { surveys: x, navItems: u, signUpBanner: g }),
                (0, l.jsx)(i.A, { categories: e, products: t }),
                (0, l.jsxs)(d.A, {
                  children: [
                    (0, l.jsx)("div", { className: "py-5 lg:py-16 xl:py-20" }),
                    (0, l.jsx)("div", {
                      className: " overflow-hidden text-black",
                      children: s?.map(
                        (e) =>
                          e.products.length > 0 &&
                          (0, l.jsx)(n.A, { ...e }, e.title),
                      ),
                    }),
                  ],
                }),
                (0, l.jsx)(o.A, { websiteSingleton: r }),
                (0, l.jsx)(c.A, {
                  websiteSingleton: r,
                  navItems: u,
                  footerSocialLinks: p,
                }),
              ],
            });
          }
          (([a, i, n, c] = u.then ? (await u)() : u), r());
        } catch (e) {
          r(e);
        }
      });
    },
    57560: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => d });
      var r = s(2183),
        l = s(15013),
        a = s.n(l),
        i = s(94536),
        n = s(36439);
      function o() {
        let [e, t] = (0, n.useState)(230);
        return (
          (0, n.useEffect)(() => {
            let e = () => {
              window && t(window.innerWidth < 1024 ? 130 : 230);
            };
            return (
              window.addEventListener("resize", e),
              e(),
              () => {
                window.removeEventListener("resize", e);
              }
            );
          }, []),
          e
        );
      }
      function c({ disableSwipe: e, selectedImageIndex: t }) {
        let s = (0, i.Mn)();
        return (
          (0, n.useEffect)(() => {
            s.allowTouchMove = !e;
          }, [e]),
          (0, n.useEffect)(() => {
            s.wrapperEl &&
              (e
                ? s.wrapperEl.classList.add("disabled")
                : s.wrapperEl.classList.remove("disabled"));
          }, [e, t]),
          null
        );
      }
      function d({
        images: e,
        selectedImageIndex: t,
        setSelectedImageIndex: s,
        clipOverflow: l = !1,
        disableArrows: a = !1,
        disableSwipe: p = !1,
      }) {
        let x = o(),
          [g, f] = (0, n.useState)(null),
          m = (t) => {
            let r = t;
            (r >= e.length && (r = e.length - 1),
              r < 0 && (r = 0),
              s(r),
              g?.slideTo(r));
          };
        return (
          (0, n.useEffect)(() => {
            g?.activeIndex != t && g?.slideTo(t);
          }, [t]),
          (0, r.jsxs)("div", {
            className: "relative w-full",
            children: [
              (0, r.jsx)("div", {
                className: l ? "overflow-hidden p-2" : "",
                children: (0, r.jsxs)(i.RC, {
                  spaceBetween: 16,
                  autoHeight: !0,
                  slidesPerView: "auto",
                  className: "swiper-show-overflow relative flex ",
                  onSwiper: (e) => f(e),
                  onSlideChange: (e) => m(e.activeIndex),
                  children: [
                    (0, r.jsx)(c, { disableSwipe: p, selectedImageIndex: t }),
                    e.map((e, s) =>
                      e
                        ? (0, r.jsx)(
                            i.qr,
                            {
                              className: "relative max-w-none shrink-0",
                              style: { width: x },
                              children: (0, r.jsx)(u, {
                                isActive: t === s,
                                altText: e.alt,
                                url: e.url,
                                onClick: () => m(s),
                                isVideo: e.isVideo,
                              }),
                            },
                            e.id,
                          )
                        : null,
                    ),
                    Array.from({ length: 10 }, (e, t) =>
                      (0, r.jsx)(
                        i.qr,
                        {
                          className: "relative max-w-none shrink-0",
                          style: { width: x },
                        },
                        t,
                      ),
                    ),
                  ],
                }),
              }),
              !a &&
                (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(h, { onClick: () => m(t - 1) }),
                    (0, r.jsx)(h, { onClick: () => m(t + 1), isRight: !0 }),
                  ],
                }),
            ],
          })
        );
      }
      function u({
        altText: e,
        url: t,
        isActive: s = !1,
        onClick: l,
        isVideo: i = !1,
      }) {
        let n = o();
        return (0, r.jsxs)("div", {
          className: "relative aspect-video shrink-0 overflow-visible",
          style: { width: n },
          children: [
            (0, r.jsx)(a(), {
              fill: !0,
              alt: e ?? "",
              src: t ?? "",
              priority: !0,
              sizes: "(max-width: 768px) 25vw, (max-width: 1200px) 20vw, 15vw",
              className: `cursor-pointer object-cover object-center transition-all ${s ? "" : "brightness-[0.6] hover:brightness-100"}`,
              onClick: l,
            }),
            i &&
              (0, r.jsx)("div", {
                className:
                  "pointer-events-none absolute inset-0 flex items-center justify-center",
                children: (0, r.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "40",
                  height: "40",
                  viewBox: "0 0 40 40",
                  className: "bg-[#272727]/75",
                  children: (0, r.jsx)("g", {
                    children: (0, r.jsx)("path", {
                      d: "M13.3335 31.5833V8.25L31.6668 19.9167L13.3335 31.5833Z",
                      fill: "#FCF9ED",
                    }),
                  }),
                }),
              }),
            s &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(a(), {
                    height: 26,
                    width: 26,
                    alt: "Top left corner",
                    src: "/images/small-top-left-bracket.svg",
                    className: "absolute -left-1.5 -top-1.5",
                  }),
                  (0, r.jsx)(a(), {
                    height: 26,
                    width: 26,
                    alt: "Top right corner",
                    src: "/images/small-top-right-bracket.svg",
                    className: "absolute -right-1.5 -top-1.5",
                  }),
                  (0, r.jsx)(a(), {
                    height: 26,
                    width: 26,
                    alt: "Bottom left corner",
                    src: "/images/small-bottom-left-bracket.svg",
                    className: "absolute -bottom-1.5 -left-1.5",
                  }),
                  (0, r.jsx)(a(), {
                    height: 26,
                    width: 26,
                    alt: "Bottom right corner",
                    src: "/images/small-bottom-right-bracket.svg",
                    className: "absolute -bottom-1.5 -right-1.5",
                  }),
                ],
              }),
          ],
        });
      }
      function h({ isRight: e = !1, onClick: t }) {
        return (0, r.jsx)(a(), {
          width: 48,
          height: 48,
          alt: e ? "Right arrow" : "Left arrow",
          src: e
            ? "/images/arrow-button-opaque-right.svg"
            : "/images/arrow-button-opaque-left.svg",
          className: `absolute top-1/2 z-10 hidden -translate-y-1/2 cursor-pointer lg:block ${e ? "-right-4" : "-left-4"}`,
          onClick: t,
        });
      }
    },
    61065: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => i });
      var r = s(2183),
        l = s(46402),
        a = s.n(l);
      function i({ data: e }) {
        return (0, r.jsx)(a(), {
          children: (0, r.jsx)("script", {
            type: "application/ld+json",
            dangerouslySetInnerHTML: { __html: JSON.stringify(e) },
          }),
        });
      }
    },
    61932: (e, t, s) => {
      "use strict";
      s.d(t, { cn: () => a });
      var r = s(3638),
        l = s(30597);
      function a(...e) {
        return (0, l.QP)((0, r.$)(e));
      }
    },
    68456: (e, t, s) => {
      "use strict";
      s.d(t, { Cp: () => l, Yq: () => r });
      let r = (e) =>
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
    72538: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => i });
      var r = s(2183),
        l = s(15013),
        a = s.n(l);
      function i() {
        return (0, r.jsx)("div", {
          className:
            "pointer-events-none absolute bottom-0 left-0 w-full translate-y-1/4",
          children: (0, r.jsx)(a(), {
            width: 1920,
            height: 483,
            className: "w-full object-cover object-top",
            alt: "Hardwood transition",
            src: "/images/hero-transition(tinyfied).webp",
          }),
        });
      }
    },
    74474: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => i });
      var r = s(2183),
        l = s(46402),
        a = s.n(l);
      function i({ description: e }) {
        return (0, r.jsxs)(a(), {
          children: [
            (0, r.jsx)(
              "meta",
              { name: "description", content: e },
              "description",
            ),
            (0, r.jsx)(
              "meta",
              { property: "og:description", content: e },
              "og:description",
            ),
            (0, r.jsx)(
              "meta",
              { name: "twitter:description", content: e },
              "twitter:description",
            ),
          ],
        });
      }
    },
    80831: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => u });
      var r = s(2183),
        l = s(15013),
        a = s.n(l);
      function i() {
        return (0, r.jsx)(a(), {
          src: "/images/divider.svg",
          className: "my-12 w-full",
          width: "0",
          height: "0",
          alt: "divider",
          priority: !0,
        });
      }
      var n = s(46728),
        o = s.n(n),
        c = s(31153),
        d = s(43948);
      function u(e) {
        let {
            title: t,
            children: s,
            showSignUp: l,
            textAlign: n,
            largerFont: u,
          } = e,
          h = (0, c.useRouter)();
        return (0, r.jsxs)("div", {
          className: `${n || "text-center"} align-center min-w-0 flex-1 justify-center text-white`,
          children: [
            (0, r.jsx)("h2", {
              className: `${u ? "text-5xl leading-[110%] lg:text-7xl" : "text-5xl"} font-normal tracking-normal drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]`,
              children: t,
            }),
            (0, r.jsx)("p", {
              className: `${u && "text-lg leading-[150%] lg:text-xl"} pt-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]`,
              children: s,
            }),
            l
              ? (0, r.jsxs)(o(), {
                  className:
                    "account_register_cta border-radius-8 group relative mt-12 inline-flex items-center overflow-hidden rounded-lg border-2 border-yellow-500/50 bg-transparent px-6 py-2 text-base text-white transition duration-300 canhover:hover:text-black",
                  onClick: () => {
                    h.pathname.includes("/news") &&
                      h.query.category &&
                      h.query.article &&
                      (0, d.d4)(window.location.href);
                  },
                  href: "/registration",
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "pointer-events-none absolute left-0 top-0 z-10 h-full w-full opacity-0 transition duration-300 canhover:group-hover:opacity-100",
                      children: (0, r.jsx)(a(), {
                        src: "/images/gold-button-texture-1.jpg",
                        fill: !0,
                        className: "object-cover",
                        alt: "Gold sheen",
                        sizes: "256px",
                      }),
                    }),
                    (0, r.jsx)("span", {
                      className: "relative z-20",
                      children: "Sign Up",
                    }),
                  ],
                })
              : (0, r.jsx)(i, {}),
          ],
        });
      }
    },
    90118: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => n });
      var r = s(2183),
        l = s(80831),
        a = s(15013),
        i = s.n(a);
      function n({ websiteSingleton: e }) {
        return (0, r.jsxs)("aside", {
          "aria-label": "Society of Raiders sign-up call to action",
          className:
            "relative flex aspect-video w-screen flex-col justify-center bg-black pb-8 lg:px-24 lg:py-16",
          children: [
            (0, r.jsxs)("div", {
              className:
                "relative top-0 left-0 aspect-video w-full lg:absolute lg:aspect-auto lg:h-full",
              children: [
                (0, r.jsx)(i(), {
                  fill: !0,
                  alt: e.footerCtaBackground?.fields.description ?? "",
                  src: `https:${e.footerCtaBackground?.fields.file?.url}`,
                }),
                (0, r.jsx)("div", {
                  className: "absolute top-0 left-0 h-full w-full bg-black/15",
                }),
              ],
            }),
            (0, r.jsx)("div", {
              className: "relative z-10 max-w-3xl px-8 py-2",
              children: (0, r.jsx)(l.A, {
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
    93007: (e, t, s) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/products/[category]",
        function () {
          return s(51180);
        },
      ]);
    },
    94528: (e, t, s) => {
      "use strict";
      var r = s(36439),
        l =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        a = r.useSyncExternalStore,
        i = r.useRef,
        n = r.useEffect,
        o = r.useMemo,
        c = r.useDebugValue;
      t.useSyncExternalStoreWithSelector = function (e, t, s, r, d) {
        var u = i(null);
        if (null === u.current) {
          var h = { hasValue: !1, value: null };
          u.current = h;
        } else h = u.current;
        var p = a(
          e,
          (u = o(
            function () {
              function e(e) {
                if (!n) {
                  if (
                    ((n = !0), (a = e), (e = r(e)), void 0 !== d && h.hasValue)
                  ) {
                    var t = h.value;
                    if (d(t, e)) return (i = t);
                  }
                  return (i = e);
                }
                if (((t = i), l(a, e))) return t;
                var s = r(e);
                return void 0 !== d && d(t, s)
                  ? ((a = e), t)
                  : ((a = e), (i = s));
              }
              var a,
                i,
                n = !1,
                o = void 0 === s ? null : s;
              return [
                function () {
                  return e(t());
                },
                null === o
                  ? void 0
                  : function () {
                      return e(o());
                    },
              ];
            },
            [t, s, r, d],
          ))[0],
          u[1],
        );
        return (
          n(
            function () {
              ((h.hasValue = !0), (h.value = p));
            },
            [p],
          ),
          c(p),
          p
        );
      };
    },
    95783: (e, t, s) => {
      "use strict";
      s.a(e, async (e, r) => {
        try {
          s.d(t, { OU: () => c, Om: () => u, Q0: () => d, _8: () => o });
          var l = s(92642),
            a = s(80935),
            i = e([l]);
          l = (i.then ? (await i)() : i)[0];
          let h = `${a.W}/#organization`,
            p = `${a.W}/#website`,
            x = "Tomb Raider",
            g = "https://en.wikipedia.org/wiki/Tomb_Raider";
          function n(e) {
            let t = (0, l._c)(e.footerLogo?.fields.file?.url);
            return t ? { logo: { "@type": "ImageObject", url: t } } : {};
          }
          function o(e, t) {
            return {
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": h,
              name: x,
              url: a.W,
              ...n(e),
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
              name: x,
              url: a.W,
              publisher: { "@id": h },
            };
          }
          function d(e, t) {
            let s = `${a.W}/news/${e.category?.fields.slug}/${e.slug}`,
              r = (0, l._c)(e.headerImage?.fields.file?.url),
              i = { "@type": "Organization", "@id": h, name: x, ...n(t) };
            return {
              "@context": "https://schema.org",
              "@type": "NewsArticle",
              headline: e.title,
              description: e.excerpt || e.socialMediaShareDescription,
              ...(r ? { image: [r] } : {}),
              datePublished: e.publishDate,
              dateModified: e.sysUpdatedAt ?? e.publishDate,
              url: s,
              mainEntityOfPage: { "@type": "WebPage", "@id": s },
              author: i,
              publisher: i,
            };
          }
          function u(e) {
            let t = `${a.W}/products/${e.category?.fields.slug}/${e.slug}`,
              s = (0, l._c)(
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
              ...(s ? { image: s } : {}),
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
          r();
        } catch (e) {
          r(e);
        }
      });
    },
  },
  (e) => {
    (e.O(
      0,
      [9950, 1446, 5013, 2696, 1329, 6342, 3492, 9980, 2642, 636, 6593, 8792],
      () => e((e.s = 93007)),
    ),
      (_N_E = e.O()));
  },
]);
