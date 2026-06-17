"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8657],
  {
    7345: (e, t, l) => {
      l.d(t, { A: () => i });
      var r = l(2183),
        a = l(11677),
        s = l.n(a);
      let i = (e) => {
        let { href: t, children: l, className: a, ...i } = e;
        return "string" == typeof t && t.startsWith("http")
          ? (0, r.jsx)("a", {
              href: t,
              target: "_blank",
              rel: "noopener noreferrer",
              className: a,
              ...i,
              children: l,
            })
          : (0, r.jsx)(s(), { className: a, href: t, ...i, children: l });
      };
    },
    7674: (e, t, l) => {
      l.d(t, { A: () => h });
      var r = l(2183),
        a = l(96006),
        s = l.n(a);
      function i() {
        return (0, r.jsx)(s(), {
          src: "/images/divider.svg",
          className: "my-12 w-full",
          width: "0",
          height: "0",
          alt: "divider",
          priority: !0,
        });
      }
      var o = l(11677),
        n = l.n(o),
        c = l(18652),
        d = l(608);
      function h(e) {
        let {
            title: t,
            children: l,
            showSignUp: a,
            textAlign: o,
            largerFont: h,
          } = e,
          u = (0, c.useRouter)();
        return (0, r.jsxs)("div", {
          className: "".concat(
            o || "text-center",
            " align-center min-w-0 flex-1 justify-center text-white",
          ),
          children: [
            (0, r.jsx)("h2", {
              className: "".concat(
                h ? "text-5xl leading-[110%] lg:text-7xl" : "text-5xl",
                " font-normal tracking-normal drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]",
              ),
              children: t,
            }),
            (0, r.jsx)("p", {
              className: "".concat(
                h && "text-lg leading-[150%] lg:text-xl",
                " pt-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]",
              ),
              children: l,
            }),
            a
              ? (0, r.jsxs)(n(), {
                  className:
                    "account_register_cta border-radius-8 group relative mt-12 inline-flex items-center overflow-hidden rounded-lg border-2 border-yellow-500/50 bg-transparent px-6 py-2 text-base text-white transition duration-300 canhover:hover:text-black",
                  onClick: () => {
                    u.pathname.includes("/news") &&
                      u.query.category &&
                      u.query.article &&
                      (0, d.d4)(window.location.href);
                  },
                  href: "/registration",
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "pointer-events-none absolute left-0 top-0 z-10 h-full w-full opacity-0 transition duration-300 canhover:group-hover:opacity-100",
                      children: (0, r.jsx)(s(), {
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
    13544: (e, t, l) => {
      l.d(t, { A: () => n });
      var r = l(2183),
        a = l(52464),
        s = l(96006),
        i = l.n(s),
        o = l(36439);
      function n(e) {
        let { className: t, children: l, ...s } = e,
          n = (0, o.useRef)(null),
          [c, d] = (0, o.useState)(0);
        return (
          (0, o.useEffect)(() => {
            if (!n.current) return;
            let e = new ResizeObserver(() => {
              var e, t;
              d(
                null != (t = null == (e = n.current) ? void 0 : e.offsetHeight)
                  ? t
                  : 0,
              );
            });
            return (
              e.observe(n.current),
              () => {
                e.disconnect();
              }
            );
          }, [n]),
          (0, r.jsxs)("div", {
            ref: n,
            className: (0, a.cn)("relative w-full pb-24", t),
            ...s,
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
    16739: (e, t, l) => {
      l.a(e, async (e, r) => {
        try {
          l.d(t, { A: () => u });
          var a = l(2183),
            s = l(96006),
            i = l.n(s),
            o = l(11677),
            n = l.n(o),
            c = l(46956),
            d = l(92446),
            h = e([d]);
          function u(e) {
            var t, l, r, s, o, h, u, g, p;
            let { item: f, onClick: x = () => {} } = e;
            return (0, a.jsx)(n(), {
              onClick: x,
              href: "/news/"
                .concat(
                  null == (l = f.category) || null == (t = l.fields)
                    ? void 0
                    : t.slug,
                  "/",
                )
                .concat(f.slug),
              children: (0, a.jsxs)("div", {
                className:
                  "group flex h-full grow flex-col bg-white shadow-lg duration-[0.3s] lg:bg-transparent lg:shadow-none lg:hover:bg-white lg:hover:shadow-lg",
                children: [
                  (0, a.jsxs)("div", {
                    className: "relative w-full overflow-hidden",
                    children: [
                      (0, a.jsx)(i(), {
                        alt: "".concat(
                          (null == (s = f.headerImage) || null == (r = s.fields)
                            ? void 0
                            : r.description) || "",
                        ),
                        className:
                          "aspect-[3/2] w-full object-cover transition-all duration-500 group-hover:scale-105",
                        src: (0, d._c)(
                          null == (u = f.headerImage) ||
                            null == (h = u.fields) ||
                            null == (o = h.file)
                            ? void 0
                            : o.url,
                        ),
                        width: 500,
                        height: 500,
                      }),
                      (0, a.jsx)(i(), {
                        alt: "blog card image gradient",
                        fill: !0,
                        className:
                          "absolute left-0 top-0 h-full w-full object-cover",
                        src: "/images/blog-card-image-gradient.svg",
                      }),
                      (0, a.jsx)(i(), {
                        alt: "top left bracket",
                        width: 48,
                        height: 48,
                        className:
                          "absolute -left-4 -top-4 duration-200 group-hover:left-2 group-hover:top-2",
                        src: "/images/top-left-bracket.svg",
                      }),
                      (0, a.jsx)(i(), {
                        alt: "bottom right bracket",
                        width: 48,
                        height: 48,
                        className:
                          "absolute -bottom-4 -right-4 duration-200 group-hover:bottom-2 group-hover:right-2",
                        src: "/images/bottom-right-bracket.svg",
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "absolute bottom-0 left-0 bg-teal-500 px-5 pb-1.5 pt-2 text-center text-sm font-bold uppercase tracking-widest text-white",
                        children:
                          null == (p = f.category) || null == (g = p.fields)
                            ? void 0
                            : g.name,
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "relative flex min-h-[10rem] grow flex-col justify-between overflow-hidden py-5 pl-5 pr-12 duration-200 ",
                    children: [
                      (0, a.jsx)("p", {
                        className: "text-2xl font-bold",
                        children: f.title.toString(),
                      }),
                      (0, a.jsx)("p", {
                        className: "mt-4 font-normal text-gray-500",
                        children: (0, c.Yq)(f.publishDate),
                      }),
                      (0, a.jsx)(i(), {
                        alt: "desktop compass",
                        width: 232,
                        height: 232,
                        className:
                          "absolute -bottom-24 -right-16 hidden opacity-0 duration-200 group-hover:-bottom-20 group-hover:-right-12 group-hover:opacity-50 lg:block",
                        src: "/images/compass.webp",
                      }),
                      (0, a.jsx)(i(), {
                        alt: "mobile compass",
                        width: 232,
                        height: 232,
                        className:
                          "absolute -bottom-20 -right-12 opacity-50 lg:hidden",
                        src: "/images/compass.webp",
                      }),
                    ],
                  }),
                ],
              }),
            });
          }
          ((d = (h.then ? (await h)() : h)[0]), r());
        } catch (e) {
          r(e);
        }
      });
    },
    31026: (e, t, l) => {
      l.d(t, { A: () => o });
      var r = l(2183),
        a = l(7674),
        s = l(96006),
        i = l.n(s);
      function o(e) {
        var t, l, s, o;
        let { websiteSingleton: n } = e;
        return (0, r.jsxs)("div", {
          className:
            "relative flex aspect-video w-screen flex-col justify-center bg-black pb-8 lg:px-24 lg:py-16",
          children: [
            (0, r.jsxs)("div", {
              className:
                "relative left-0 top-0 aspect-video w-full lg:absolute lg:aspect-auto lg:h-full",
              children: [
                (0, r.jsx)(i(), {
                  fill: !0,
                  alt:
                    null !=
                    (o =
                      null == (t = n.footerCtaBackground)
                        ? void 0
                        : t.fields.description)
                      ? o
                      : "",
                  src: "https:".concat(
                    null == (s = n.footerCtaBackground) ||
                      null == (l = s.fields.file)
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
              children: (0, r.jsx)(a.A, {
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
    46956: (e, t, l) => {
      l.d(t, { Cp: () => a, Yq: () => r });
      let r = (e) =>
          e
            ? new Date(e).toLocaleString("en-US", {
                timeZone: "UTC",
                month: "short",
                day: "numeric",
                year: "numeric",
              })
            : "",
        a = (e) =>
          e ? new Date(e).toLocaleString("en-US", { year: "numeric" }) : "";
    },
    52464: (e, t, l) => {
      l.d(t, { cn: () => s });
      var r = l(3638),
        a = l(30597);
      function s() {
        for (var e = arguments.length, t = Array(e), l = 0; l < e; l++)
          t[l] = arguments[l];
        return (0, a.QP)((0, r.$)(t));
      }
    },
    75894: (e, t, l) => {
      l.a(e, async (e, r) => {
        try {
          l.d(t, { A: () => g });
          var a = l(2183),
            s = l(96006),
            i = l.n(s),
            o = l(11677),
            n = l.n(o),
            c = l(99435),
            d = l(7345),
            h = l(92446),
            u = e([c, h]);
          function g(e) {
            var t, l, r;
            let { websiteSingleton: s, navItems: o, footerSocialLinks: u } = e,
              { isLoggedIn: g, shopifyUrl: p } = (0, c.u)(),
              f = o.filter(
                (e) => e.showInFooter && !(g && e.hideForLoggedInUsers),
              ),
              x = o.filter(
                (e) => e.showInSubFooter && !(g && e.hideForLoggedInUsers),
              );
            return (0, a.jsxs)("div", {
              className: "relative w-full bg-black px-8 text-white lg:px-32",
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "flex flex-col items-center justify-center space-y-16 pt-16 pb-16 lg:flex-row lg:items-stretch lg:justify-between lg:space-y-0 lg:pt-32",
                  children: [
                    (0, a.jsx)("div", {
                      children: (0, a.jsx)(i(), {
                        src: (0, h._c)(
                          null == (l = s.footerLogo) ||
                            null == (t = l.fields.file)
                            ? void 0
                            : t.url,
                        ),
                        width: 248,
                        height: 248,
                        alt: (0, h._c)(
                          null == (r = s.footerLogo)
                            ? void 0
                            : r.fields.description,
                        ),
                        className: "w-40",
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "text-darkgray-500 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-lg",
                      children: [
                        f.map((e) => {
                          let t = e.link;
                          return (
                            e.shouldReplaceWithGeneratedShopLink &&
                              p &&
                              (t = p),
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
                        (0, a.jsx)("a", {
                          href: "#",
                          className: "cursor-pointer",
                          onClick: (e) => {
                            var t;
                            (e.preventDefault(),
                              null == (t = window.__ucCmp) ||
                                t.showSecondLayer());
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
                      className: "text-darkgray-500 text-center",
                      children: s.footerCopyright,
                    }),
                    (0, a.jsx)("div", {
                      className: "flex items-center space-x-4 text-white",
                      children: u.map((e) => {
                        var t, l, r, s;
                        return (0, a.jsx)(
                          d.A,
                          {
                            href: e.link,
                            children: (0, a.jsx)(i(), {
                              src: (0, h._c)(
                                null == (l = e.icon) ||
                                  null == (t = l.fields.file)
                                  ? void 0
                                  : t.url,
                              ),
                              alt:
                                null !=
                                (s =
                                  null == (r = e.icon)
                                    ? void 0
                                    : r.fields.description)
                                  ? s
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
                (0, a.jsx)("div", { className: "h-px bg-gray-500" }),
                (0, a.jsxs)("div", {
                  className:
                    "flew-col flex flex-col items-start justify-start gap-x-10 gap-y-10 py-12 text-gray-300 md:justify-between 2xl:flex-row",
                  children: [
                    (0, a.jsx)("p", {
                      className:
                        "text-darkgray-300 max-w-250 text-center text-sm lg:text-left",
                      children: s.footerLegalNotice,
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "text-darkgray-500 flex w-full flex-wrap items-center justify-center gap-x-10 gap-y-2 md:flex-row md:gap-x-10 md:gap-y-0 lg:w-auto lg:justify-start",
                      children: x.map((e) =>
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
          (([c, h] = u.then ? (await u)() : u), r());
        } catch (e) {
          r(e);
        }
      });
    },
    94734: (e, t, l) => {
      l.d(t, { A: () => i });
      var r = l(2183),
        a = l(96006),
        s = l.n(a);
      function i() {
        return (0, r.jsx)("div", {
          className:
            "pointer-events-none absolute bottom-0 left-0 w-full translate-y-1/4",
          children: (0, r.jsx)(s(), {
            width: 1920,
            height: 483,
            className: "w-full object-cover object-top",
            alt: "Hardwood transition",
            src: "/images/hero-transition(tinyfied).webp",
          }),
        });
      }
    },
  },
]);
