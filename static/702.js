"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [702],
  {
    7365: function (e, t, l) {
      var i = l(97458),
        r = l(10821),
        o = l.n(r);
      t.Z = (e) => {
        let { href: t, children: l, className: r, ...a } = e,
          n = "string" == typeof t && t.startsWith("http");
        return n
          ? (0, i.jsx)("a", {
              href: t,
              target: "_blank",
              rel: "noopener noreferrer",
              className: r,
              ...a,
              children: l,
            })
          : (0, i.jsx)(o(), {
              legacyBehavior: !0,
              href: t,
              ...a,
              children: (0, i.jsx)("a", { className: r, children: l }),
            });
      };
    },
    99915: function (e, t, l) {
      l.a(e, async function (e, i) {
        try {
          l.d(t, {
            Z: function () {
              return Footer;
            },
          });
          var r = l(97458),
            o = l(47681),
            a = l.n(o),
            n = l(10821),
            s = l.n(n),
            c = l(2300),
            d = l(7365),
            u = l(91806),
            h = e([c, u]);
          function Footer(e) {
            var t, l, i;
            let { websiteSingleton: o, navItems: n, footerSocialLinks: h } = e,
              { isLoggedIn: f, shopifyUrl: p } = (0, c.S)(),
              g = n.filter(
                (e) => e.showInFooter && !(f && e.hideForLoggedInUsers),
              ),
              x = n.filter(
                (e) => e.showInSubFooter && !(f && e.hideForLoggedInUsers),
              );
            return (0, r.jsxs)("div", {
              className: "relative w-full bg-black px-8 text-white lg:px-32",
              children: [
                (0, r.jsxs)("div", {
                  className:
                    "flex flex-col items-center justify-center space-y-16 pb-16 pt-16 lg:flex-row lg:items-stretch lg:justify-between lg:space-y-0 lg:pt-32",
                  children: [
                    (0, r.jsx)(a(), {
                      src: (0, u.Wx)(
                        null === (l = o.footerLogo) || void 0 === l
                          ? void 0
                          : null === (t = l.fields.file) || void 0 === t
                            ? void 0
                            : t.url,
                      ),
                      width: 248,
                      height: 248,
                      alt: (0, u.Wx)(
                        null === (i = o.footerLogo) || void 0 === i
                          ? void 0
                          : i.fields.description,
                      ),
                      className: "h-auto w-40",
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-lg text-darkgray-500 ",
                      children: [
                        g.map((e) => {
                          let t = e.link;
                          return (
                            e.shouldReplaceWithGeneratedShopLink &&
                              p &&
                              (t = p),
                            (0, r.jsx)(
                              s(),
                              { href: t, children: e.name },
                              e.link + e.name,
                            )
                          );
                        }),
                        (0, r.jsx)("span", {
                          id: "accessibilityWidget",
                          className: "cursor-pointer",
                          children: "Accessibility",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className:
                    "flex flex-col items-center justify-center space-y-16 pb-16 lg:flex-row lg:items-stretch lg:justify-between lg:space-y-0",
                  children: [
                    (0, r.jsx)("div", {
                      className: "text-center text-darkgray-500",
                      children: o.footerCopyright,
                    }),
                    (0, r.jsx)("div", {
                      className: "flex items-center space-x-4 text-white",
                      children: h.map((e) => {
                        var t, l, i, o;
                        return (0, r.jsx)(
                          d.Z,
                          {
                            href: e.link,
                            children: (0, r.jsx)(a(), {
                              src: (0, u.Wx)(
                                null === (l = e.icon) || void 0 === l
                                  ? void 0
                                  : null === (t = l.fields.file) || void 0 === t
                                    ? void 0
                                    : t.url,
                              ),
                              alt:
                                null !==
                                  (o =
                                    null === (i = e.icon) || void 0 === i
                                      ? void 0
                                      : i.fields.description) && void 0 !== o
                                  ? o
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
                (0, r.jsx)("div", { className: "h-[1px] bg-gray-500" }),
                (0, r.jsxs)("div", {
                  className:
                    "flew-col flex flex-col items-start justify-start gap-x-10 gap-y-10 py-12 text-gray-300 md:justify-between 2xl:flex-row ",
                  children: [
                    (0, r.jsx)("p", {
                      className:
                        "max-w-[1000px] text-center text-sm text-darkgray-300 lg:text-left",
                      children: o.footerLegalNotice,
                    }),
                    (0, r.jsx)("div", {
                      className:
                        "flex w-full flex-wrap items-center justify-center gap-x-10 gap-y-2 text-darkgray-500 md:flex-row md:gap-x-10 md:gap-y-0 lg:w-auto lg:justify-start",
                      children: x.map((e) =>
                        (0, r.jsx)(
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
          (([c, u] = h.then ? (await h)() : h), i());
        } catch (e) {
          i(e);
        }
      });
    },
    61666: function (e, t, l) {
      l.d(t, {
        Z: function () {
          return HeroTransition;
        },
      });
      var i = l(97458),
        r = l(47681),
        o = l.n(r);
      function HeroTransition() {
        return (0, i.jsx)("div", {
          className:
            "pointer-events-none absolute bottom-0 left-0 w-full translate-y-1/4",
          children: (0, i.jsx)(o(), {
            width: 1920,
            height: 483,
            className: "w-full object-cover object-top",
            alt: "Hardwood transition",
            src: "/images/hero-transition(tinyfied).webp",
          }),
        });
      }
    },
    17789: function (e, t, l) {
      l.a(e, async function (e, i) {
        try {
          l.d(t, {
            Z: function () {
              return NewsItem;
            },
          });
          var r = l(97458),
            o = l(47681),
            a = l.n(o),
            n = l(10821),
            s = l.n(n),
            c = l(69049),
            d = l(91806),
            u = e([d]);
          function NewsItem(e) {
            var t, l, i, o, n, u, h, f, p;
            let { item: g, onClick: x = () => {} } = e;
            return (0, r.jsx)(s(), {
              onClick: x,
              href: "/news/"
                .concat(
                  null === (l = g.category) || void 0 === l
                    ? void 0
                    : null === (t = l.fields) || void 0 === t
                      ? void 0
                      : t.slug,
                  "/",
                )
                .concat(g.slug),
              children: (0, r.jsxs)("div", {
                className:
                  "group flex h-full grow flex-col bg-white shadow-lg duration-[0.3s] lg:bg-transparent lg:shadow-none lg:hover:bg-white lg:hover:shadow-lg",
                children: [
                  (0, r.jsxs)("div", {
                    className: "relative w-full overflow-hidden",
                    children: [
                      (0, r.jsx)(a(), {
                        alt: "".concat(
                          (null === (o = g.headerImage) || void 0 === o
                            ? void 0
                            : null === (i = o.fields) || void 0 === i
                              ? void 0
                              : i.description) || "",
                        ),
                        className:
                          "aspect-[3/2] w-full object-cover transition-all duration-500 group-hover:scale-105",
                        src: (0, d.Wx)(
                          null === (h = g.headerImage) || void 0 === h
                            ? void 0
                            : null === (u = h.fields) || void 0 === u
                              ? void 0
                              : null === (n = u.file) || void 0 === n
                                ? void 0
                                : n.url,
                        ),
                        width: 500,
                        height: 500,
                      }),
                      (0, r.jsx)(a(), {
                        alt: "blog card image gradient",
                        fill: !0,
                        className:
                          "absolute left-0 top-0 h-full w-full object-cover",
                        src: "/images/blog-card-image-gradient.svg",
                      }),
                      (0, r.jsx)(a(), {
                        alt: "top left bracket",
                        width: 48,
                        height: 48,
                        className:
                          "absolute -left-4 -top-4 duration-200 group-hover:left-2 group-hover:top-2",
                        src: "/images/top-left-bracket.svg",
                      }),
                      (0, r.jsx)(a(), {
                        alt: "bottom right bracket",
                        width: 48,
                        height: 48,
                        className:
                          "absolute -bottom-4 -right-4 duration-200 group-hover:bottom-2 group-hover:right-2",
                        src: "/images/bottom-right-bracket.svg",
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "absolute bottom-0 left-0 bg-teal-500 px-5 pb-1.5 pt-2 text-center text-sm font-bold uppercase tracking-widest text-white",
                        children:
                          null === (p = g.category) || void 0 === p
                            ? void 0
                            : null === (f = p.fields) || void 0 === f
                              ? void 0
                              : f.name,
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "relative flex min-h-[10rem] grow flex-col justify-between overflow-hidden py-5 pl-5 pr-12 duration-200 ",
                    children: [
                      (0, r.jsx)("p", {
                        className: "text-2xl font-bold",
                        children: g.title.toString(),
                      }),
                      (0, r.jsx)("p", {
                        className: "mt-4 font-normal text-gray-500",
                        children: (0, c.p6)(g.publishDate),
                      }),
                      (0, r.jsx)(a(), {
                        alt: "desktop compass",
                        width: 232,
                        height: 232,
                        className:
                          "absolute -bottom-24 -right-16 hidden opacity-0 duration-200 group-hover:-bottom-20 group-hover:-right-12 group-hover:opacity-50 lg:block",
                        src: "/images/compass.webp",
                      }),
                      (0, r.jsx)(a(), {
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
          ((d = (u.then ? (await u)() : u)[0]), i());
        } catch (e) {
          i(e);
        }
      });
    },
    20213: function (e, t, l) {
      l.d(t, {
        Z: function () {
          return PaperContainer;
        },
      });
      var i = l(97458),
        r = l(57865),
        o = l(47681),
        a = l.n(o),
        n = l(52983);
      function PaperContainer(e) {
        let { className: t, children: l, ...o } = e,
          s = (0, n.useRef)(null),
          [c, d] = (0, n.useState)(0);
        return (
          (0, n.useEffect)(() => {
            if (s) {
              let e = new ResizeObserver(() => {
                var e, t;
                d(
                  null !==
                    (t =
                      null === (e = s.current) || void 0 === e
                        ? void 0
                        : e.offsetHeight) && void 0 !== t
                    ? t
                    : 0,
                );
              });
              return (
                e.observe(s.current),
                () => {
                  e.disconnect;
                }
              );
            }
          }, [s]),
          (0, i.jsxs)("div", {
            ref: s,
            className: (0, r.cn)("relative w-full pb-24", t),
            ...o,
            children: [
              l,
              (0, i.jsx)("div", {
                className:
                  "absolute left-0 top-0 -z-20 h-full w-full bg-[url('/images/paper-texture_main_tile(tinyfied).jpg')] bg-repeat",
              }),
              (0, i.jsx)("div", {
                style: { height: c },
                className:
                  "pointer-events-none absolute left-0 top-0 w-full overflow-hidden",
                children: (0, i.jsx)(a(), {
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
                (0, i.jsx)(a(), {
                  src: "/images/paper-graphics_BOTTOM_1(tinyfied).webp",
                  alt: "Paper Bottom Overlay",
                  width: "0",
                  priority: !0,
                  height: "0",
                  className:
                    "absolute bottom-0 left-0 -z-20 h-auto w-full object-cover",
                  unoptimized: !0,
                }),
              (0, i.jsx)("div", {
                style: { backgroundSize: "100% auto" },
                className:
                  "absolute left-0 top-0 -z-20 hidden h-full w-[8vw] max-w-[104px] bg-[url('/images/paper-edge_long(tinyfied).webp')] bg-repeat-y md:block",
              }),
              (0, i.jsx)(a(), {
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
    12984: function (e, t, l) {
      l.d(t, {
        Z: function () {
          return SignUpCallToAction;
        },
      });
      var i = l(97458),
        r = l(7355),
        o = l(47681),
        a = l.n(o);
      function SignUpCallToAction(e) {
        var t, l, o, n;
        let { websiteSingleton: s } = e;
        return (0, i.jsxs)("div", {
          className:
            "relative flex aspect-video w-screen flex-col justify-center bg-black pb-8 lg:px-24 lg:py-16",
          children: [
            (0, i.jsxs)("div", {
              className:
                "relative left-0 top-0 aspect-video w-full lg:absolute lg:aspect-auto lg:h-full",
              children: [
                (0, i.jsx)(a(), {
                  fill: !0,
                  alt:
                    null !==
                      (n =
                        null === (t = s.footerCtaBackground) || void 0 === t
                          ? void 0
                          : t.fields.description) && void 0 !== n
                      ? n
                      : "",
                  src: "https:".concat(
                    null === (o = s.footerCtaBackground) || void 0 === o
                      ? void 0
                      : null === (l = o.fields.file) || void 0 === l
                        ? void 0
                        : l.url,
                  ),
                }),
                (0, i.jsx)("div", {
                  className: "absolute left-0 top-0 h-full w-full bg-black/15",
                }),
              ],
            }),
            (0, i.jsx)("div", {
              className: "relative z-10 max-w-3xl px-8 py-2",
              children: (0, i.jsx)(r.Z, {
                largerFont: !0,
                textAlign: "text-left",
                showSignUp: !0,
                title: s.footerCtaTitle,
                children: s.footerCtaDescription,
              }),
            }),
          ],
        });
      }
    },
    7355: function (e, t, l) {
      l.d(t, {
        Z: function () {
          return WelcomeSection;
        },
      });
      var i = l(97458),
        r = l(47681),
        o = l.n(r);
      function Divider() {
        return (0, i.jsx)(o(), {
          src: "/images/divider.svg",
          className: "my-12 w-full",
          width: "0",
          height: "0",
          alt: "divider",
          priority: !0,
        });
      }
      var a = l(10821),
        n = l.n(a),
        s = l(93656),
        c = l(5198);
      function WelcomeSection(e) {
        let {
            title: t,
            children: l,
            showSignUp: r,
            textAlign: a,
            largerFont: d,
          } = e,
          u = (0, s.useRouter)();
        return (0, i.jsxs)("div", {
          className: "".concat(
            a || "text-center",
            " align-center min-w-0 flex-1 justify-center text-white",
          ),
          children: [
            (0, i.jsx)("h2", {
              className: "".concat(
                d ? "text-5xl leading-[110%] lg:text-7xl" : "text-5xl",
                " font-normal tracking-normal drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]",
              ),
              children: t,
            }),
            (0, i.jsx)("p", {
              className: "".concat(
                d && "text-lg leading-[150%] lg:text-xl",
                " pt-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]",
              ),
              children: l,
            }),
            r
              ? (0, i.jsxs)(n(), {
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
                    (0, i.jsx)("div", {
                      className:
                        "pointer-events-none absolute left-0 top-0 z-10 h-full w-full overflow-hidden border-transparent opacity-0 shadow-[0_0px_15px_0px_#F1C662] transition duration-300 canhover:group-hover:opacity-100",
                      children: (0, i.jsx)(o(), {
                        src: "/images/gold-button-texture-1.jpg",
                        fill: !0,
                        className: "object-cover",
                        alt: "Gold sheen",
                        sizes: "256px",
                      }),
                    }),
                    (0, i.jsx)("span", {
                      className:
                        "relative z-20 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]",
                      children: "Sign Up",
                    }),
                  ],
                })
              : (0, i.jsx)(Divider, {}),
          ],
        });
      }
    },
    69049: function (e, t, l) {
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
    57865: function (e, t, l) {
      l.d(t, {
        cn: function () {
          return cn;
        },
      });
      var i = l(28934),
        r = l(44361);
      function cn() {
        for (var e = arguments.length, t = Array(e), l = 0; l < e; l++)
          t[l] = arguments[l];
        return (0, r.m)((0, i.W)(t));
      }
    },
  },
]);
