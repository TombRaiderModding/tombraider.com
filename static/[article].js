(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8789],
  {
    22765: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => i });
      var s = l(2183);
      function i(e) {
        let { children: t, light: l } = e;
        return (0, s.jsx)("div", {
          className: "".concat(
            l ? "bg-black/5" : "bg-customgray-500/20",
            " inline-block px-5 pb-1.5 pt-2 text-sm font-bold uppercase tracking-[1.2px]",
          ),
          children: t,
        });
      }
    },
    54981: (e, t, l) => {
      "use strict";
      l.a(e, async (e, s) => {
        try {
          (l.r(t), l.d(t, { __N_SSG: () => k, default: () => A }));
          var i = l(2183),
            a = l(96006),
            n = l.n(a),
            r = l(40453),
            o = l(31026),
            c = l(75894),
            d = l(22765),
            m = l(46956),
            u = l(72327),
            x = l(95216),
            h = l(36439),
            p = l(79176),
            g = l(13544),
            w = l(92446),
            v = l(14623),
            f = l.n(v),
            b = l(99435),
            j = l(81219),
            N = l(97378),
            y = e([c, u, x, w, b]);
          [c, u, x, w, b] = y.then ? (await y)() : y;
          var k = !0;
          function A(e) {
            var t,
              l,
              s,
              a,
              v,
              y,
              k,
              A,
              S,
              _,
              E,
              R,
              C,
              I,
              L,
              M,
              T,
              z,
              P,
              D,
              U,
              q,
              B,
              V,
              X,
              Y;
            let {
                postData: F,
                relatedArticles: H,
                websiteSingleton: O,
                navItems: G,
                footerSocialLinks: W,
                surveys: Z,
                signUpBanner: J,
                featuredArticle: K,
              } = e,
              { isLoggedIn: Q } = (0, b.u)(),
              [$, ee] = (0, h.useState)(!1),
              [et, el] = (0, h.useState)(0),
              es = (0, h.useRef)(null),
              ei = (0, h.useRef)(null);
            return (
              (0, h.useEffect)(() => {
                ee(!0);
              }, []),
              (0, h.useEffect)(() => {
                if (es && es.current) {
                  let e = es.current;
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
              }, [es, $]),
              (0, i.jsxs)("div", {
                className: "relative flex flex-col items-center",
                children: [
                  (0, i.jsxs)(f(), {
                    children: [
                      (0, i.jsx)("title", {
                        children: "Tomb Raider | ".concat(
                          null == F ? void 0 : F.title,
                        ),
                      }),
                      (0, i.jsx)(
                        "meta",
                        {
                          name: "description",
                          content:
                            (null == F ? void 0 : F.excerpt) ||
                            (null == F
                              ? void 0
                              : F.socialMediaShareDescription) ||
                            "Read about ".concat(null == F ? void 0 : F.title),
                        },
                        "description",
                      ),
                      (0, i.jsx)(
                        "meta",
                        {
                          name: "keywords",
                          content: "Tomb Raider, "
                            .concat(null == F ? void 0 : F.title, ", ")
                            .concat(
                              (null == F ||
                              null == (l = F.category) ||
                              null == (t = l.fields)
                                ? void 0
                                : t.name) || "",
                              ", video games, adventure",
                            ),
                        },
                        "keywords",
                      ),
                      (0, i.jsx)(
                        "meta",
                        {
                          property: "og:title",
                          content: null == F ? void 0 : F.title,
                        },
                        "og:title",
                      ),
                      (0, i.jsx)(
                        "meta",
                        {
                          property: "og:description",
                          content:
                            (null == F ? void 0 : F.excerpt) ||
                            (null == F
                              ? void 0
                              : F.socialMediaShareDescription) ||
                            "Read about ".concat(null == F ? void 0 : F.title),
                        },
                        "og:description",
                      ),
                      (0, i.jsx)(
                        "meta",
                        { property: "og:type", content: "article" },
                        "og:type",
                      ),
                      (0, i.jsx)(
                        "meta",
                        {
                          property: "og:image",
                          content: (0, w._c)(
                            null == F ||
                              null == (v = F.headerImage) ||
                              null == (a = v.fields) ||
                              null == (s = a.file)
                              ? void 0
                              : s.url,
                          ),
                        },
                        "og:image",
                      ),
                      (0, i.jsx)(
                        "meta",
                        {
                          property: "og:url",
                          content: $ ? window.location.href : void 0,
                        },
                        "og:url",
                      ),
                      (0, i.jsx)(
                        "meta",
                        {
                          name: "twitter:card",
                          content: "summary_large_image",
                        },
                        "twitter:card",
                      ),
                      (0, i.jsx)(
                        "meta",
                        {
                          name: "twitter:title",
                          content: null == F ? void 0 : F.title,
                        },
                        "twitter:title",
                      ),
                      (0, i.jsx)(
                        "meta",
                        {
                          name: "twitter:description",
                          content:
                            (null == F ? void 0 : F.excerpt) ||
                            (null == F
                              ? void 0
                              : F.socialMediaShareDescription) ||
                            "Read about ".concat(null == F ? void 0 : F.title),
                        },
                        "twitter:description",
                      ),
                      (0, i.jsx)(
                        "meta",
                        {
                          name: "twitter:image",
                          content: (0, w._c)(
                            null == F ||
                              null == (A = F.headerImage) ||
                              null == (k = A.fields) ||
                              null == (y = k.file)
                              ? void 0
                              : y.url,
                          ),
                        },
                        "twitter:image",
                      ),
                      (0, i.jsx)(
                        "meta",
                        {
                          name: "twitter:image:alt",
                          content:
                            null == F ||
                            null == (_ = F.headerImage) ||
                            null == (S = _.fields)
                              ? void 0
                              : S.description,
                        },
                        "twitter:image:alt",
                      ),
                    ],
                  }),
                  (0, i.jsx)(x.Ay, {
                    surveys: Z,
                    navItems: G,
                    signUpBanner: J,
                  }),
                  (0, i.jsx)(p.A, {
                    className: "flex flex-col items-center pt-20",
                    children: (0, i.jsxs)("div", {
                      className:
                        "mx-auto w-full max-w-7xl flex-wrap px-8 pb-32 pt-20 lg:pb-48",
                      children: [
                        (0, i.jsxs)("div", {
                          className: "flex flex-wrap gap-x-2 gap-y-2 pb-6",
                          children: [
                            (0, i.jsx)(d.A, {
                              children:
                                null == F || null == (E = F.category)
                                  ? void 0
                                  : E.fields.name,
                            }),
                            null == F || null == (R = F.tags)
                              ? void 0
                              : R.map((e, t) =>
                                  (0, i.jsx)(
                                    d.A,
                                    {
                                      children:
                                        null == e ? void 0 : e.fields.name,
                                    },
                                    (null == e ? void 0 : e.fields.name) || t,
                                  ),
                                ),
                          ],
                        }),
                        (0, i.jsx)("h1", {
                          className: "pb-8 text-4xl lg:text-7xl",
                          children: null == F ? void 0 : F.title,
                        }),
                        (0, i.jsx)("p", {
                          className:
                            "pb-16 text-customgray-500/70 sm:pb-32 md:pb-48 lg:pb-48",
                          children: (0, m.Yq)(
                            null == F ? void 0 : F.publishDate,
                          ),
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      "relative flex w-full flex-col items-center bg-transparent text-black",
                    children: [
                      (0, i.jsxs)(g.A, {
                        className:
                          "relative flex w-full flex-col items-center bg-transparent text-black",
                        children: [
                          (0, i.jsxs)("div", {
                            id: "news",
                            className: "relative w-full max-w-5xl px-6",
                            style: { bottom: et / 2 },
                            children: [
                              (0, i.jsx)(n(), {
                                ref: es,
                                alt:
                                  null !=
                                  (U =
                                    null == F || null == (C = F.headerImage)
                                      ? void 0
                                      : C.fields.description)
                                    ? U
                                    : "",
                                className: "aspect-[3/2] w-full object-cover",
                                src: "https://".concat(
                                  (null == F ||
                                  null == (L = F.headerImage) ||
                                  null == (I = L.fields.file)
                                    ? void 0
                                    : I.url) || "",
                                ),
                                quality: 100,
                                width: 1920,
                                height: 1920,
                              }),
                              (0, i.jsxs)("div", {
                                className: "news-content",
                                children: [
                                  (0, i.jsx)("div", { className: "h-8" }),
                                  (null == F ? void 0 : F.body) &&
                                    (0, r.i)(
                                      null == F ? void 0 : F.body,
                                      (0, w.Xx)(!1, Q),
                                    ),
                                  (0, i.jsxs)("div", {
                                    className:
                                      "mt-20 flex flex-wrap items-center justify-between gap-y-8",
                                    children: [
                                      (0, i.jsx)("div", {
                                        className:
                                          "flex flex-wrap items-center gap-x-2",
                                        children: (
                                          null == F
                                            ? void 0
                                            : F.hideSocialSharingButtons
                                        )
                                          ? null
                                          : (0, i.jsx)(j.A, {
                                              title:
                                                null == F ? void 0 : F.title,
                                            }),
                                      }),
                                      (0, i.jsxs)("div", {
                                        className:
                                          "flex flex-wrap items-center gap-x-2 gap-y-2",
                                        children: [
                                          (0, i.jsx)(d.A, {
                                            light: !0,
                                            children:
                                              null == F ||
                                              null == (M = F.category)
                                                ? void 0
                                                : M.fields.name,
                                          }),
                                          null == F || null == (T = F.tags)
                                            ? void 0
                                            : T.map((e, t) =>
                                                (0, i.jsx)(
                                                  d.A,
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
                            ],
                          }),
                          (0, i.jsx)("div", { ref: ei }),
                          (0, i.jsx)(u.A, { articles: H }),
                        ],
                      }),
                      (0, i.jsx)(o.A, { websiteSingleton: O }),
                      (0, i.jsx)(c.A, {
                        websiteSingleton: O,
                        navItems: G,
                        footerSocialLinks: W,
                      }),
                    ],
                  }),
                  (0, i.jsx)(N.A, {
                    featuredType: "Article",
                    id: null != (q = null == K ? void 0 : K.slug) ? q : "",
                    title: null != (B = null == K ? void 0 : K.title) ? B : "",
                    date:
                      null != (V = null == K ? void 0 : K.publishDate) ? V : "",
                    imageUrl: (0, w._c)(
                      null == K ||
                        null == (P = K.headerImage) ||
                        null == (z = P.fields.file)
                        ? void 0
                        : z.url,
                    ),
                    tag:
                      null !=
                      (X =
                        null == K || null == (D = K.category)
                          ? void 0
                          : D.fields.name)
                        ? X
                        : "",
                    appearAtScrollRef: null != (Y = ei.current) ? Y : null,
                  }),
                ],
              })
            );
          }
          s();
        } catch (e) {
          s(e);
        }
      });
    },
    72327: (e, t, l) => {
      "use strict";
      l.a(e, async (e, s) => {
        try {
          l.d(t, { A: () => h });
          var i = l(2183),
            a = l(96006),
            n = l.n(a),
            r = l(16739),
            o = l(36439),
            c = l(15711),
            d = l(11677),
            m = l.n(d),
            u = l(94536),
            x = e([r]);
          function h(e) {
            let {
                articles: t,
                headingTitle: l = "Related Articles",
                disableButton: s = !1,
                buttonTitle: a = "View All",
                isHome: d,
              } = e,
              [x, h] = (0, o.useState)(null);
            return (0, i.jsxs)("div", {
              className:
                "flex w-full flex-col items-stretch overflow-hidden py-8",
              children: [
                (0, i.jsxs)("div", {
                  className: "lg:pb-".concat(
                    d ? 12 : 16,
                    " flex  w-full flex-col flex-wrap items-center justify-between px-8 pb-8 lg:flex-row lg:px-16",
                  ),
                  children: [
                    (0, i.jsxs)("div", {
                      className:
                        "flex flex-col items-center gap-x-8 gap-y-4 pb-4 lg:flex-row lg:pb-0",
                      children: [
                        (0, i.jsx)("p", {
                          className:
                            "text-4xl text-black sm:text-5xl lg:text-6xl",
                          children: l,
                        }),
                        !s &&
                          (0, i.jsx)(m(), {
                            href: "/news/all",
                            children: (0, i.jsx)(c.A, {
                              variant: "dark",
                              children: a,
                            }),
                          }),
                      ],
                    }),
                    t.length > 0 &&
                      (0, i.jsxs)("div", {
                        className: "hidden gap-x-2 lg:flex",
                        children: [
                          (0, i.jsx)(n(), {
                            width: 48,
                            height: 48,
                            alt: "Left arrow",
                            src: "/images/arrow-button-left.svg",
                            className: "mr-2 cursor-pointer",
                            onClick: () => (null == x ? void 0 : x.slidePrev()),
                          }),
                          (0, i.jsx)(n(), {
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
                  ? (0, i.jsx)("div", {
                      className: "px-8 lg:px-16",
                      children: (0, i.jsx)(u.RC, {
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
                          (0, i.jsx)(
                            u.qr,
                            {
                              className:
                                "relative !h-auto w-64 max-w-none shrink-0 overflow-visible",
                              children: (0, i.jsx)(r.A, { item: e }),
                            },
                            e.slug,
                          ),
                        ),
                      }),
                    })
                  : (0, i.jsx)("p", {
                      className: "px-8 lg:px-16",
                      children: "We couldn't find any related articles.",
                    }),
              ],
            });
          }
          ((r = (x.then ? (await x)() : x)[0]), s());
        } catch (e) {
          s(e);
        }
      });
    },
    79176: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => o });
      var s = l(2183),
        i = l(94734),
        a = l(52464),
        n = l(96006),
        r = l.n(n);
      function o(e) {
        let { className: t, children: l, containerClasses: n, ...o } = e;
        return (0, s.jsxs)("div", {
          className: "relative -z-10 h-full w-full overflow-visible ".concat(t),
          ...o,
          children: [
            (0, s.jsx)(r(), {
              className:
                "pointer-events-none absolute left-0 top-0 object-cover",
              fill: !0,
              sizes: "100vw",
              fetchPriority: "high",
              alt: "Hardwood background",
              src: "/images/hero-texture_dark-wood(tinyfied).jpg",
              priority: !0,
            }),
            (0, s.jsx)(i.A, {}),
            (0, s.jsx)("div", {
              className: (0, a.cn)("relative z-10 w-full", n),
              children: l,
            }),
          ],
        });
      }
    },
    81219: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => o });
      var s = l(2183);
      l(36439);
      var i = l(96006),
        a = l.n(i),
        n = l(8906),
        r = l(77752);
      function o(e) {
        let { title: t, white: l } = e,
          { addAlert: i } = (0, r.Z)();
        return (0, s.jsxs)("div", {
          className: "flex flex-wrap items-center gap-x-2",
          children: [
            (0, s.jsx)(n.uI, {
              url: window.location.href,
              children: (0, s.jsx)(a(), {
                width: 20,
                height: 20,
                src: "/images/social/logo-fb-simple.svg",
                alt: "share to Facebook",
                className: "article-facebook ".concat(l ? "invert" : void 0),
              }),
            }),
            (0, s.jsx)(n.r6, {
              title: t,
              url: window.location.href,
              children: (0, s.jsx)(a(), {
                width: 20,
                height: 20,
                src: "/images/social/logo-x.svg",
                alt: "share to X",
                className: "article-x ".concat(l ? "invert" : void 0),
              }),
            }),
            (0, s.jsx)(a(), {
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
            (0, s.jsx)(a(), {
              width: 20,
              height: 20,
              src: "/images/link.svg",
              alt: "copy to clipboard",
              onClick: () => {
                (navigator.clipboard.writeText(window.location.href),
                  i({
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
    96114: (e, t, l) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/news/[category]/[article]",
        function () {
          return l(54981);
        },
      ]);
    },
    97378: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => d });
      var s = l(2183),
        i = l(36439),
        a = l(96006),
        n = l.n(a),
        r = l(46956),
        o = l(11677),
        c = l.n(o);
      function d(e) {
        let {
            featuredType: t,
            title: l,
            date: a,
            imageUrl: o,
            tag: d,
            id: m,
            appearAtScrollRef: u,
          } = e,
          [x, h] = (0, i.useState)(!1),
          [p, g] = (0, i.useState)(!1),
          [w, v] = (0, i.useState)(!1),
          [f, b] = (0, i.useState)(!1),
          [j, N] = (0, i.useState)(1e4);
        return ((0, i.useEffect)(() => {
          (b(!1),
            setTimeout(() => {
              (b(!0), g(!1));
            }, 10));
        }, [m]),
        (0, i.useLayoutEffect)(() => {
          let e = () => {
            if (u) {
              let { top: e } = u.getBoundingClientRect();
              N(e + window.scrollY);
            }
          };
          return (
            e(),
            window.addEventListener("resize", e),
            () => window.removeEventListener("resize", e)
          );
        }, [u, m]),
        (0, i.useEffect)(() => {
          let e = () => {
            h(window.scrollY + window.innerHeight >= j);
          };
          return (
            window.addEventListener("scroll", e),
            () => {
              window.removeEventListener("scroll", e);
            }
          );
        }, [j]),
        f)
          ? (0, s.jsxs)("div", {
              className:
                "fixed bottom-0 right-0 z-[500000] w-full overflow-hidden bg-white px-3 py-8 transition-all duration-[1200ms] ease-in-out sm:bottom-8 sm:right-8 sm:max-w-[calc(100%-4rem)] sm:p-6 lg:max-w-[70%] xl:max-w-[60%] 2xl:max-w-[45%] ".concat(
                  x && !p
                    ? "translate-y-0 opacity-100"
                    : "translate-y-[500px] opacity-0",
                ),
              children: [
                (0, s.jsxs)("div", {
                  className:
                    "relative flex flex-col items-center gap-x-6 sm:flex-row",
                  children: [
                    (0, s.jsx)("div", {
                      className:
                        "relative cursor-pointer overflow-hidden sm:w-[50%]",
                      onMouseEnter: () => v(!0),
                      onMouseLeave: () => v(!1),
                      children: (0, s.jsxs)(c(), {
                        href: "/news/".concat(d, "/").concat(m),
                        children: [
                          (0, s.jsx)(n(), {
                            alt: "ASF",
                            className:
                              "aspect-[3/2] max-h-[100%] w-full object-cover transition-all duration-500 ".concat(
                                w ? "scale-105" : "",
                              ),
                            src: o,
                            width: 500,
                            height: 500,
                          }),
                          (0, s.jsx)(n(), {
                            alt: "blog card image gradient",
                            fill: !0,
                            className:
                              "absolute left-0 top-0 h-full w-full object-cover",
                            src: "/images/blog-card-image-gradient.svg",
                          }),
                          (0, s.jsx)("div", {
                            className:
                              "absolute bottom-0 left-0 bg-teal-500 px-5 pb-1.5 pt-2 text-center text-sm font-bold uppercase tracking-widest text-white",
                            children: d,
                          }),
                        ],
                      }),
                    }),
                    (0, s.jsxs)("div", {
                      className: "w-full sm:w-[50%]",
                      children: [
                        (0, s.jsxs)("h3", {
                          className:
                            "mt-4 text-2xl font-bold text-black sm:mt-0 sm:text-3xl",
                          children: ["Featured ", t],
                        }),
                        (0, s.jsx)(c(), {
                          href: "/news/".concat(d, "/").concat(m),
                          children: (0, s.jsx)("p", {
                            onMouseEnter: () => v(!0),
                            onMouseLeave: () => v(!1),
                            className:
                              "mt-3 cursor-pointer text-lg font-bold text-black sm:mt-6 sm:text-2xl",
                            children: l,
                          }),
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "flex items-center justify-between sm:flex-col sm:items-stretch sm:justify-start",
                          children: [
                            (0, s.jsx)("p", {
                              className:
                                "sm:text-md mt-2 text-sm font-normal text-gray-500 sm:mt-4",
                              children: (0, r.Yq)(a),
                            }),
                            (0, s.jsx)(c(), {
                              href: "/news/".concat(d, "/").concat(m),
                              children: (0, s.jsxs)("div", {
                                className:
                                  "group mt-4 cursor-pointer text-lg font-bold text-black",
                                onMouseEnter: () => v(!0),
                                onMouseLeave: () => v(!1),
                                children: [
                                  (0, s.jsx)("p", { children: "Learn More" }),
                                  (0, s.jsx)(n(), {
                                    src: "/images/header-highlight.svg",
                                    alt: "highlight",
                                    width: 100,
                                    height: 5,
                                    className:
                                      "opacity-100 transition duration-300 ".concat(
                                        w ? "opacity-100" : "sm:opacity-0",
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
                (0, s.jsx)(n(), {
                  alt: "top left bracket",
                  width: 48,
                  height: 48,
                  className:
                    "pointer-events-none absolute -left-3 -top-3 duration-200 ".concat(
                      w ? "left-2 top-2" : "",
                    ),
                  src: "/images/top-left-bracket.svg",
                }),
                (0, s.jsx)(n(), {
                  alt: "bottom right bracket",
                  width: 48,
                  height: 48,
                  className:
                    "pointer-events-none absolute -bottom-3 -right-3 duration-200 ".concat(
                      w ? "bottom-2 right-2" : "",
                    ),
                  src: "/images/bottom-right-bracket.svg",
                }),
                (0, s.jsx)(n(), {
                  alt: "close button",
                  width: 24,
                  height: 24,
                  src: "/images/close.svg",
                  className:
                    "absolute right-1.5 top-1.5 cursor-pointer invert sm:right-3 sm:top-3",
                  onClick: () => g(!0),
                }),
                (0, s.jsx)(n(), {
                  alt: "desktop compass",
                  width: 232,
                  height: 232,
                  className:
                    "translate-all pointer-events-none absolute bottom-1/2 hidden translate-y-[50%] opacity-0 duration-300 ".concat(
                      w ? "-right-12 opacity-50" : "-right-[200px]",
                      " sm:block",
                    ),
                  src: "/images/compass.webp",
                }),
                (0, s.jsx)(n(), {
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
  },
  (e) => {
    (e.O(
      0,
      [
        9950, 6006, 1433, 1329, 1175, 3492, 6390, 5216, 2446, 8657, 636, 6593,
        8792,
      ],
      () => e((e.s = 96114)),
    ),
      (_N_E = e.O()));
  },
]);
