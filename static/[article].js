(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [152],
  {
    90245: function (e, t, l) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/news/[category]/[article]",
        function () {
          return l(86355);
        },
      ]);
    },
    77890: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return FeaturedItemPopup;
        },
      });
      var i = l(97458),
        s = l(52983),
        n = l(47681),
        o = l.n(n),
        a = l(69049),
        r = l(10821),
        c = l.n(r);
      function FeaturedItemPopup(e) {
        let {
            featuredType: t,
            title: l,
            date: n,
            imageUrl: r,
            tag: d,
            id: u,
            appearAtScrollRef: m,
          } = e,
          [x, h] = (0, s.useState)(!1),
          [v, p] = (0, s.useState)(!1),
          [f, g] = (0, s.useState)(!1),
          [w, b] = (0, s.useState)(!1),
          [j, N] = (0, s.useState)(1e4);
        return ((0, s.useEffect)(() => {
          (b(!1),
            setTimeout(() => {
              (b(!0), p(!1));
            }, 10));
        }, [u]),
        (0, s.useLayoutEffect)(() => {
          let updateAppearAtScrollHeight = () => {
            if (m) {
              let { top: e } = m.getBoundingClientRect();
              N(e + window.scrollY);
            }
          };
          return (
            updateAppearAtScrollHeight(),
            window.addEventListener("resize", updateAppearAtScrollHeight),
            () =>
              window.removeEventListener("resize", updateAppearAtScrollHeight)
          );
        }, [m, u]),
        (0, s.useEffect)(() => {
          let handleScroll = () => {
            let e = window.scrollY + window.innerHeight;
            h(e >= j);
          };
          return (
            window.addEventListener("scroll", handleScroll),
            () => {
              window.removeEventListener("scroll", handleScroll);
            }
          );
        }, [j]),
        w)
          ? (0, i.jsxs)("div", {
              className:
                "fixed bottom-0 right-0 z-[500000] w-full transform overflow-hidden bg-white px-3 py-8 transition-all duration-[1200ms] ease-in-out sm:bottom-8 sm:right-8 sm:max-w-[calc(100%-4rem)] sm:p-6 lg:max-w-[70%] xl:max-w-[60%] 2xl:max-w-[45%] ".concat(
                  x && !v
                    ? "translate-y-0 opacity-100"
                    : "translate-y-[500px] opacity-0",
                ),
              children: [
                (0, i.jsxs)("div", {
                  className:
                    "relative flex flex-col items-center gap-x-6 sm:flex-row",
                  children: [
                    (0, i.jsx)("div", {
                      className:
                        "relative cursor-pointer overflow-hidden sm:w-[50%]",
                      onMouseEnter: () => g(!0),
                      onMouseLeave: () => g(!1),
                      children: (0, i.jsxs)(c(), {
                        href: "/news/".concat(d, "/").concat(u),
                        children: [
                          (0, i.jsx)(o(), {
                            alt: "ASF",
                            className:
                              "aspect-[3/2] max-h-[100%] w-full object-cover transition-all duration-500 ".concat(
                                f ? "scale-105" : "",
                              ),
                            src: r,
                            width: 500,
                            height: 500,
                          }),
                          (0, i.jsx)(o(), {
                            alt: "blog card image gradient",
                            fill: !0,
                            className:
                              "absolute left-0 top-0 h-full w-full object-cover",
                            src: "/images/blog-card-image-gradient.svg",
                          }),
                          (0, i.jsx)("div", {
                            className:
                              "absolute bottom-0 left-0 bg-teal-500 px-5 pb-1.5 pt-2 text-center text-sm font-bold uppercase tracking-widest text-white",
                            children: d,
                          }),
                        ],
                      }),
                    }),
                    (0, i.jsxs)("div", {
                      className: "w-full sm:w-[50%]",
                      children: [
                        (0, i.jsxs)("h3", {
                          className:
                            "mt-4 text-2xl font-bold text-black sm:mt-0 sm:text-3xl",
                          children: ["Featured ", t],
                        }),
                        (0, i.jsx)(c(), {
                          href: "/news/".concat(d, "/").concat(u),
                          children: (0, i.jsx)("p", {
                            onMouseEnter: () => g(!0),
                            onMouseLeave: () => g(!1),
                            className:
                              "mt-3 cursor-pointer text-lg font-bold text-black sm:mt-6 sm:text-2xl",
                            children: l,
                          }),
                        }),
                        (0, i.jsxs)("div", {
                          className:
                            "flex items-center justify-between sm:flex-col sm:items-stretch sm:justify-start",
                          children: [
                            (0, i.jsx)("p", {
                              className:
                                "sm:text-md mt-2 text-sm font-normal text-gray-500 sm:mt-4",
                              children: (0, a.p6)(n),
                            }),
                            (0, i.jsx)(c(), {
                              href: "/news/".concat(d, "/").concat(u),
                              children: (0, i.jsxs)("div", {
                                className:
                                  "group mt-4 cursor-pointer text-lg font-bold text-black",
                                onMouseEnter: () => g(!0),
                                onMouseLeave: () => g(!1),
                                children: [
                                  (0, i.jsx)("p", { children: "Learn More" }),
                                  (0, i.jsx)(o(), {
                                    src: "/images/header-highlight.svg",
                                    alt: "highlight",
                                    width: 100,
                                    height: 5,
                                    className:
                                      "opacity-100 transition duration-300 ".concat(
                                        f ? "opacity-100" : "sm:opacity-0",
                                      ),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)(o(), {
                  alt: "top left bracket",
                  width: 48,
                  height: 48,
                  className:
                    "pointer-events-none absolute -left-3 -top-3 duration-200 ".concat(
                      f ? "left-2 top-2" : "",
                    ),
                  src: "/images/top-left-bracket.svg",
                }),
                (0, i.jsx)(o(), {
                  alt: "bottom right bracket",
                  width: 48,
                  height: 48,
                  className:
                    "pointer-events-none absolute -bottom-3 -right-3 duration-200 ".concat(
                      f ? "bottom-2 right-2" : "",
                    ),
                  src: "/images/bottom-right-bracket.svg",
                }),
                (0, i.jsx)(o(), {
                  alt: "close button",
                  width: 24,
                  height: 24,
                  src: "/images/close.svg",
                  className:
                    "absolute right-1.5 top-1.5 cursor-pointer invert filter sm:right-3 sm:top-3",
                  onClick: () => p(!0),
                }),
                (0, i.jsx)(o(), {
                  alt: "desktop compass",
                  width: 232,
                  height: 232,
                  className:
                    "translate-all pointer-events-none absolute bottom-1/2 hidden translate-y-[50%] opacity-0 duration-300 ".concat(
                      f ? "-right-12 opacity-50" : "-right-[200px]",
                      " sm:block",
                    ),
                  src: "/images/compass.webp",
                }),
                (0, i.jsx)(o(), {
                  alt: "mobile compass",
                  width: 232,
                  height: 232,
                  className:
                    "pointer-events-none absolute -bottom-20 -right-12 opacity-50 sm:hidden",
                  src: "/images/compass.webp",
                }),
              ],
            })
          : null;
      }
    },
    71368: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return HardwoodContainer;
        },
      });
      var i = l(97458),
        s = l(61666),
        n = l(57865),
        o = l(47681),
        a = l.n(o);
      function HardwoodContainer(e) {
        let { className: t, children: l, containerClasses: o, ...r } = e;
        return (0, i.jsxs)("div", {
          className: "relative -z-10 h-full w-full overflow-visible ".concat(t),
          ...r,
          children: [
            (0, i.jsx)(a(), {
              className:
                "pointer-events-none absolute left-0 top-0 object-cover",
              fill: !0,
              sizes: "100vw",
              fetchPriority: "high",
              alt: "Hardwood background",
              src: "/images/hero-texture_dark-wood(tinyfied).jpg",
              priority: !0,
            }),
            (0, i.jsx)(s.Z, {}),
            (0, i.jsx)("div", {
              className: (0, n.cn)("relative z-10 w-full", o),
              children: l,
            }),
          ],
        });
      }
    },
    57187: function (e, t, l) {
      "use strict";
      l.a(e, async function (e, i) {
        try {
          l.d(t, {
            Z: function () {
              return HorizontalArticleList;
            },
          });
          var s = l(97458),
            n = l(47681),
            o = l.n(n),
            a = l(17789),
            r = l(52983),
            c = l(75443),
            d = l(10821),
            u = l.n(d),
            m = l(99288),
            x = e([a]);
          function HorizontalArticleList(e) {
            let {
                articles: t,
                headingTitle: l = "Related Articles",
                disableButton: i = !1,
                buttonTitle: n = "View All",
                isHome: d,
              } = e,
              [x, h] = (0, r.useState)(null);
            return (0, s.jsxs)("div", {
              className:
                "flex w-full flex-col items-stretch overflow-hidden py-8",
              children: [
                (0, s.jsxs)("div", {
                  className: "lg:pb-".concat(
                    d ? 12 : 16,
                    " flex  w-full flex-col flex-wrap items-center justify-between px-8 pb-8 lg:flex-row lg:px-16",
                  ),
                  children: [
                    (0, s.jsxs)("div", {
                      className:
                        "flex flex-col items-center gap-x-8 gap-y-4 pb-4 lg:flex-row lg:pb-0",
                      children: [
                        (0, s.jsx)("p", {
                          className:
                            "text-4xl text-black sm:text-5xl lg:text-6xl",
                          children: l,
                        }),
                        !i &&
                          (0, s.jsx)(u(), {
                            href: "/news/all",
                            children: (0, s.jsx)(c.Z, {
                              variant: "dark",
                              children: n,
                            }),
                          }),
                      ],
                    }),
                    t.length > 0 &&
                      (0, s.jsxs)("div", {
                        className: "hidden gap-x-2 lg:flex",
                        children: [
                          (0, s.jsx)(o(), {
                            width: 48,
                            height: 48,
                            alt: "Left arrow",
                            src: "/images/arrow-button-left.svg",
                            className: "mr-2 cursor-pointer",
                            onClick: () => (null == x ? void 0 : x.slidePrev()),
                          }),
                          (0, s.jsx)(o(), {
                            width: 48,
                            height: 48,
                            alt: "Right arrow",
                            onClick: () => (null == x ? void 0 : x.slideNext()),
                            src: "/images/arrow-button-right.svg",
                            className: "cursor-pointer",
                          }),
                        ],
                      }),
                  ],
                }),
                t.length > 0
                  ? (0, s.jsx)("div", {
                      className: "px-8 lg:px-16",
                      children: (0, s.jsx)(m.tq, {
                        className: "swiper-show-overflow relative flex w-full",
                        slidesPerView: 1.25,
                        centeredSlides: !0,
                        breakpoints: {
                          640: { slidesPerView: 2, centeredSlides: !1 },
                          1024: { slidesPerView: 3, centeredSlides: !1 },
                        },
                        spaceBetween: 16,
                        rewind: !0,
                        onSwiper: (e) => h(e),
                        children: t.map((e) =>
                          (0, s.jsx)(
                            m.o5,
                            {
                              className:
                                "relative !h-auto w-64 max-w-none shrink-0 overflow-visible",
                              children: (0, s.jsx)(a.Z, { item: e }),
                            },
                            e.slug,
                          ),
                        ),
                      }),
                    })
                  : (0, s.jsx)("p", {
                      className: "px-8 lg:px-16",
                      children: "We couldn't find any related articles.",
                    }),
              ],
            });
          }
          ((a = (x.then ? (await x)() : x)[0]), i());
        } catch (e) {
          i(e);
        }
      });
    },
    24673: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return SocialShareIcons;
        },
      });
      var i = l(97458);
      l(52983);
      var s = l(47681),
        n = l.n(s),
        o = l(92497),
        a = l(77765);
      function SocialShareIcons(e) {
        let { title: t, white: l } = e,
          { addAlert: s } = (0, a.Z)();
        return (0, i.jsxs)("div", {
          className: "flex flex-wrap items-center gap-x-2",
          children: [
            (0, i.jsx)(o.Dk, {
              url: window.location.href,
              children: (0, i.jsx)(n(), {
                width: 20,
                height: 20,
                src: "/images/social/logo-fb-simple.svg",
                alt: "share to Facebook",
                className: "article-facebook ".concat(l ? "invert" : void 0),
              }),
            }),
            (0, i.jsx)(o.B, {
              title: t,
              url: window.location.href,
              children: (0, i.jsx)(n(), {
                width: 20,
                height: 20,
                src: "/images/social/logo-x.svg",
                alt: "share to X",
                className: "article-x ".concat(l ? "invert" : void 0),
              }),
            }),
            (0, i.jsx)(n(), {
              width: 20,
              height: 20,
              alt: "share to Threads",
              src: "/images/social/logo-threads.svg",
              onClick: () => {
                let e;
                ((e = t
                  ? "https://www.threads.net/intent/post?text="
                      .concat(encodeURIComponent(t), " ")
                      .concat(encodeURIComponent(window.location.href))
                  : "https://www.threads.net/intent/post?text=".concat(
                      encodeURIComponent(window.location.href),
                    )),
                  window.open(e, "", "height=800,width=600"));
              },
              className: "article-threads cursor-pointer ".concat(
                l ? "invert" : "",
              ),
            }),
            (0, i.jsx)(n(), {
              width: 20,
              height: 20,
              src: "/images/link.svg",
              alt: "copy to clipboard",
              onClick: () => {
                (navigator.clipboard.writeText(window.location.href),
                  s({
                    title: "Link copied!",
                    children:
                      "A link to this article has been copied to your clipboard.",
                  }));
              },
              className: "article-link cursor-pointer ".concat(
                l ? "invert" : void 0,
              ),
            }),
          ],
        });
      }
    },
    48981: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return Tag;
        },
      });
      var i = l(97458);
      function Tag(e) {
        let { children: t, light: l } = e;
        return (0, i.jsx)("div", {
          className: "".concat(
            l ? "bg-black/5" : "bg-customgray-500/20",
            " inline-block px-5 pb-1.5 pt-2 text-sm font-bold uppercase tracking-[1.2px]",
          ),
          children: t,
        });
      }
    },
    86355: function (e, t, l) {
      "use strict";
      l.a(e, async function (e, i) {
        try {
          (l.r(t),
            l.d(t, {
              __N_SSG: function () {
                return k;
              },
              default: function () {
                return ArticleItem;
              },
            }));
          var s = l(97458),
            n = l(47681),
            o = l.n(n),
            a = l(15491),
            r = l(12984),
            c = l(99915),
            d = l(48981),
            u = l(69049),
            m = l(57187),
            x = l(87249),
            h = l(52983),
            v = l(71368),
            p = l(20213),
            f = l(91806),
            g = l(47680),
            w = l.n(g),
            b = l(2300),
            j = l(24673),
            N = l(77890),
            y = e([c, m, x, f, b]);
          [c, m, x, f, b] = y.then ? (await y)() : y;
          var k = !0;
          function ArticleItem(e) {
            var t,
              l,
              i,
              n,
              g,
              y,
              k,
              S,
              Z,
              A,
              _,
              E,
              I,
              R,
              L,
              C,
              H,
              M,
              P,
              T,
              z,
              D,
              B,
              F,
              U,
              V;
            let {
                postData: W,
                relatedArticles: O,
                websiteSingleton: X,
                navItems: q,
                footerSocialLinks: Y,
                surveys: G,
                signUpBanner: J,
                featuredArticle: K,
              } = e,
              { isLoggedIn: Q } = (0, b.S)(),
              [$, ee] = (0, h.useState)(!1),
              [et, el] = (0, h.useState)(0),
              ei = (0, h.useRef)(null),
              es = (0, h.useRef)(null);
            return (
              (0, h.useEffect)(() => {
                ee(!0);
              }, []),
              (0, h.useEffect)(() => {
                if (ei && ei.current) {
                  let e = ei.current;
                  if (e) {
                    let t = new ResizeObserver(() => {
                      el(e.clientHeight);
                    });
                    return (
                      t.observe(e),
                      () => {
                        t.disconnect();
                      }
                    );
                  }
                }
              }, [ei, $]),
              (0, s.jsxs)("div", {
                className: "relative flex flex-col items-center",
                children: [
                  (0, s.jsxs)(w(), {
                    children: [
                      (0, s.jsx)("title", {
                        children: "Tomb Raider | ".concat(
                          null == W ? void 0 : W.title,
                        ),
                      }),
                      (0, s.jsx)(
                        "meta",
                        {
                          name: "description",
                          content:
                            (null == W ? void 0 : W.excerpt) ||
                            (null == W
                              ? void 0
                              : W.socialMediaShareDescription) ||
                            "Read about ".concat(null == W ? void 0 : W.title),
                        },
                        "description",
                      ),
                      (0, s.jsx)(
                        "meta",
                        {
                          name: "keywords",
                          content: "Tomb Raider, "
                            .concat(null == W ? void 0 : W.title, ", ")
                            .concat(
                              (null == W
                                ? void 0
                                : null === (l = W.category) || void 0 === l
                                  ? void 0
                                  : null === (t = l.fields) || void 0 === t
                                    ? void 0
                                    : t.name) || "",
                              ", video games, adventure",
                            ),
                        },
                        "keywords",
                      ),
                      (0, s.jsx)(
                        "meta",
                        {
                          property: "og:title",
                          content: null == W ? void 0 : W.title,
                        },
                        "og:title",
                      ),
                      (0, s.jsx)(
                        "meta",
                        {
                          property: "og:description",
                          content:
                            (null == W ? void 0 : W.excerpt) ||
                            (null == W
                              ? void 0
                              : W.socialMediaShareDescription) ||
                            "Read about ".concat(null == W ? void 0 : W.title),
                        },
                        "og:description",
                      ),
                      (0, s.jsx)(
                        "meta",
                        { property: "og:type", content: "article" },
                        "og:type",
                      ),
                      (0, s.jsx)(
                        "meta",
                        {
                          property: "og:image",
                          content: (0, f.Wx)(
                            null == W
                              ? void 0
                              : null === (g = W.headerImage) || void 0 === g
                                ? void 0
                                : null === (n = g.fields) || void 0 === n
                                  ? void 0
                                  : null === (i = n.file) || void 0 === i
                                    ? void 0
                                    : i.url,
                          ),
                        },
                        "og:image",
                      ),
                      (0, s.jsx)(
                        "meta",
                        {
                          property: "og:url",
                          content: $ ? window.location.href : void 0,
                        },
                        "og:url",
                      ),
                      (0, s.jsx)(
                        "meta",
                        {
                          name: "twitter:card",
                          content: "summary_large_image",
                        },
                        "twitter:card",
                      ),
                      (0, s.jsx)(
                        "meta",
                        {
                          name: "twitter:title",
                          content: null == W ? void 0 : W.title,
                        },
                        "twitter:title",
                      ),
                      (0, s.jsx)(
                        "meta",
                        {
                          name: "twitter:description",
                          content:
                            (null == W ? void 0 : W.excerpt) ||
                            (null == W
                              ? void 0
                              : W.socialMediaShareDescription) ||
                            "Read about ".concat(null == W ? void 0 : W.title),
                        },
                        "twitter:description",
                      ),
                      (0, s.jsx)(
                        "meta",
                        {
                          name: "twitter:image",
                          content: (0, f.Wx)(
                            null == W
                              ? void 0
                              : null === (S = W.headerImage) || void 0 === S
                                ? void 0
                                : null === (k = S.fields) || void 0 === k
                                  ? void 0
                                  : null === (y = k.file) || void 0 === y
                                    ? void 0
                                    : y.url,
                          ),
                        },
                        "twitter:image",
                      ),
                      (0, s.jsx)(
                        "meta",
                        {
                          name: "twitter:image:alt",
                          content:
                            null == W
                              ? void 0
                              : null === (A = W.headerImage) || void 0 === A
                                ? void 0
                                : null === (Z = A.fields) || void 0 === Z
                                  ? void 0
                                  : Z.description,
                        },
                        "twitter:image:alt",
                      ),
                    ],
                  }),
                  (0, s.jsx)(x.ZP, {
                    surveys: G,
                    navItems: q,
                    signUpBanner: J,
                  }),
                  (0, s.jsx)(v.Z, {
                    className: "flex flex-col items-center pt-20",
                    children: (0, s.jsxs)("div", {
                      className:
                        "mx-auto w-full max-w-7xl flex-wrap px-8 pb-32 pt-20 lg:pb-48",
                      children: [
                        (0, s.jsxs)("div", {
                          className: "flex flex-wrap gap-x-2 gap-y-2 pb-6",
                          children: [
                            (0, s.jsx)(d.Z, {
                              children:
                                null == W
                                  ? void 0
                                  : null === (_ = W.category) || void 0 === _
                                    ? void 0
                                    : _.fields.name,
                            }),
                            null == W
                              ? void 0
                              : null === (E = W.tags) || void 0 === E
                                ? void 0
                                : E.map((e, t) =>
                                    (0, s.jsx)(
                                      d.Z,
                                      {
                                        children:
                                          null == e ? void 0 : e.fields.name,
                                      },
                                      (null == e ? void 0 : e.fields.name) || t,
                                    ),
                                  ),
                          ],
                        }),
                        (0, s.jsx)("h1", {
                          className: "pb-8 text-4xl lg:text-7xl",
                          children: null == W ? void 0 : W.title,
                        }),
                        (0, s.jsx)("p", {
                          className:
                            "pb-16 text-customgray-500/70 sm:pb-32 md:pb-48 lg:pb-48",
                          children: (0, u.p6)(
                            null == W ? void 0 : W.publishDate,
                          ),
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsxs)("div", {
                    className:
                      "relative flex w-full flex-col items-center bg-transparent text-black",
                    children: [
                      (0, s.jsxs)(p.Z, {
                        className:
                          "relative flex w-full flex-col items-center bg-transparent text-black",
                        children: [
                          (0, s.jsxs)("div", {
                            id: "news",
                            className: "relative w-full max-w-5xl px-6",
                            style: { bottom: et / 2 },
                            children: [
                              (0, s.jsx)(o(), {
                                ref: ei,
                                alt:
                                  null !==
                                    (z =
                                      null == W
                                        ? void 0
                                        : null === (I = W.headerImage) ||
                                            void 0 === I
                                          ? void 0
                                          : I.fields.description) &&
                                  void 0 !== z
                                    ? z
                                    : "",
                                className: "aspect-[3/2] w-full object-cover",
                                src: "https://".concat(
                                  (null == W
                                    ? void 0
                                    : null === (L = W.headerImage) ||
                                        void 0 === L
                                      ? void 0
                                      : null === (R = L.fields.file) ||
                                          void 0 === R
                                        ? void 0
                                        : R.url) || "",
                                ),
                                quality: 100,
                                width: 1920,
                                height: 1920,
                              }),
                              (0, s.jsx)("div", { className: "h-8" }),
                              (null == W ? void 0 : W.body) &&
                                (0, a.h)(
                                  null == W ? void 0 : W.body,
                                  (0, f.m0)(!1, Q),
                                ),
                              (0, s.jsxs)("div", {
                                className:
                                  "mt-20 flex flex-wrap items-center justify-between gap-y-8",
                                children: [
                                  (0, s.jsx)("div", {
                                    className:
                                      "flex flex-wrap items-center gap-x-2",
                                    children: (
                                      null == W
                                        ? void 0
                                        : W.hideSocialSharingButtons
                                    )
                                      ? null
                                      : (0, s.jsx)(j.Z, {
                                          title: null == W ? void 0 : W.title,
                                        }),
                                  }),
                                  (0, s.jsxs)("div", {
                                    className:
                                      "flex flex-wrap items-center gap-x-2 gap-y-2",
                                    children: [
                                      (0, s.jsx)(d.Z, {
                                        light: !0,
                                        children:
                                          null == W
                                            ? void 0
                                            : null === (C = W.category) ||
                                                void 0 === C
                                              ? void 0
                                              : C.fields.name,
                                      }),
                                      null == W
                                        ? void 0
                                        : null === (H = W.tags) || void 0 === H
                                          ? void 0
                                          : H.map((e, t) =>
                                              (0, s.jsx)(
                                                d.Z,
                                                {
                                                  light: !0,
                                                  children:
                                                    null == e
                                                      ? void 0
                                                      : e.fields.name,
                                                },
                                                (null == e
                                                  ? void 0
                                                  : e.fields.name) || t,
                                              ),
                                            ),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, s.jsx)("div", { ref: es }),
                          (0, s.jsx)(m.Z, { articles: O }),
                        ],
                      }),
                      (0, s.jsx)(r.Z, { websiteSingleton: X }),
                      (0, s.jsx)(c.Z, {
                        websiteSingleton: X,
                        navItems: q,
                        footerSocialLinks: Y,
                      }),
                    ],
                  }),
                  (0, s.jsx)(N.Z, {
                    featuredType: "Article",
                    id:
                      null !== (D = null == K ? void 0 : K.slug) && void 0 !== D
                        ? D
                        : "",
                    title:
                      null !== (B = null == K ? void 0 : K.title) &&
                      void 0 !== B
                        ? B
                        : "",
                    date:
                      null !== (F = null == K ? void 0 : K.publishDate) &&
                      void 0 !== F
                        ? F
                        : "",
                    imageUrl: (0, f.Wx)(
                      null == K
                        ? void 0
                        : null === (P = K.headerImage) || void 0 === P
                          ? void 0
                          : null === (M = P.fields.file) || void 0 === M
                            ? void 0
                            : M.url,
                    ),
                    tag:
                      null !==
                        (U =
                          null == K
                            ? void 0
                            : null === (T = K.category) || void 0 === T
                              ? void 0
                              : T.fields.name) && void 0 !== U
                        ? U
                        : "",
                    appearAtScrollRef:
                      null !== (V = es.current) && void 0 !== V ? V : null,
                  }),
                ],
              })
            );
          }
          i();
        } catch (e) {
          i(e);
        }
      });
    },
  },
  function (e) {
    (e.O(
      0,
      [46, 681, 882, 34, 658, 120, 497, 249, 806, 702, 774, 888, 179],
      function () {
        return e((e.s = 90245));
      },
    ),
      (_N_E = e.O()));
  },
]);
