(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8789],
  {
    10979: (e, t, s) => {
      "use strict";
      s.a(e, async (e, l) => {
        try {
          s.d(t, { A: () => p });
          var i = s(2183),
            a = s(15013),
            r = s.n(a),
            n = s(87975),
            c = s(36439),
            o = s(64171),
            d = s(46728),
            m = s.n(d),
            x = s(94536),
            h = e([n]);
          function p(e) {
            let {
                articles: t,
                headingTitle: s = "Related Articles",
                disableButton: l = !1,
                buttonTitle: a = "View All",
                isHome: d,
              } = e,
              [h, p] = (0, c.useState)(null);
            return (0, i.jsxs)("div", {
              className:
                "flex w-full flex-col items-stretch overflow-hidden py-8",
              children: [
                (0, i.jsxs)("div", {
                  className: `lg:pb-${!d ? 16 : 12} flex w-full flex-col flex-wrap items-center justify-between px-8 pb-8 lg:flex-row lg:px-16`,
                  children: [
                    (0, i.jsxs)("div", {
                      className:
                        "flex flex-col items-center gap-x-8 gap-y-4 pb-4 lg:flex-row lg:pb-0",
                      children: [
                        (0, i.jsx)("h2", {
                          className:
                            "text-4xl text-black sm:text-5xl lg:text-6xl",
                          children: s,
                        }),
                        !l &&
                          (0, i.jsx)(m(), {
                            href: "/news/all",
                            children: (0, i.jsx)(o.A, {
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
                          (0, i.jsx)(r(), {
                            width: 48,
                            height: 48,
                            alt: "Left arrow",
                            src: "/images/arrow-button-left.svg",
                            className: "mr-2 cursor-pointer",
                            onClick: () => h?.slidePrev(),
                          }),
                          (0, i.jsx)(r(), {
                            width: 48,
                            height: 48,
                            alt: "Right arrow",
                            onClick: () => h?.slideNext(),
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
                      children: (0, i.jsx)(x.RC, {
                        className: "swiper-show-overflow relative flex w-full",
                        slidesPerView: 1.25,
                        centeredSlides: !0,
                        breakpoints: {
                          640: { slidesPerView: 2, centeredSlides: !1 },
                          1024: { slidesPerView: 3, centeredSlides: !1 },
                        },
                        spaceBetween: 16,
                        rewind: !0,
                        onSwiper: (e) => p(e),
                        children: t.map((e) =>
                          (0, i.jsx)(
                            x.qr,
                            {
                              className:
                                "relative !h-auto w-64 max-w-none shrink-0 overflow-visible",
                              children: (0, i.jsx)(n.A, { item: e }),
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
          ((n = (h.then ? (await h)() : h)[0]), l());
        } catch (e) {
          l(e);
        }
      });
    },
    19753: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => i });
      var l = s(2183);
      function i(e) {
        let { children: t, light: s } = e;
        return (0, l.jsx)("div", {
          className: `${s ? "bg-black/5" : "bg-customgray-500/20"} inline-block px-5 pb-1.5 pt-2 text-sm font-bold uppercase tracking-[1.2px]`,
          children: t,
        });
      }
    },
    19975: (e, t, s) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/news/[category]/[article]",
        function () {
          return s(27713);
        },
      ]);
    },
    27713: (e, t, s) => {
      "use strict";
      s.a(e, async (e, l) => {
        try {
          (s.r(t), s.d(t, { __N_SSG: () => A, default: () => S }));
          var i = s(2183),
            a = s(15013),
            r = s.n(a),
            n = s(90118),
            c = s(20162),
            o = s(19753),
            d = s(68456),
            m = s(10979),
            x = s(49980),
            h = s(36439),
            p = s(98500),
            g = s(41036),
            f = s(92642),
            u = s(46402),
            w = s.n(u),
            j = s(9751),
            v = s(75247),
            b = s(87174),
            N = s(92351),
            y = s(61065),
            k = s(95783),
            $ = e([c, m, x, f, j, k]);
          [c, m, x, f, j, k] = $.then ? (await $)() : $;
          var A = !0;
          function S({
            postData: e,
            relatedArticles: t,
            websiteSingleton: s,
            navItems: l,
            footerSocialLinks: a,
            surveys: u,
            signUpBanner: $,
            featuredArticle: A,
          }) {
            let { isLoggedIn: _ } = (0, j.u)(),
              [E, R] = (0, h.useState)(!1),
              [L, I] = (0, h.useState)(0),
              C = (0, h.useRef)(null),
              M = (0, h.useRef)(null);
            return (
              (0, h.useEffect)(() => {
                R(!0);
              }, []),
              (0, h.useEffect)(() => {
                if (C && C.current) {
                  let e = C.current;
                  if (e) {
                    let t = new ResizeObserver(() => {
                      I(e.clientHeight);
                    });
                    return (
                      t.observe(e),
                      () => {
                        t.disconnect();
                      }
                    );
                  }
                }
              }, [C, E]),
              (0, i.jsxs)("div", {
                className: "relative flex flex-col items-center",
                children: [
                  (0, i.jsxs)(w(), {
                    children: [
                      (0, i.jsx)("title", {
                        children: `Tomb Raider | ${e?.title}`,
                      }),
                      (0, i.jsx)(
                        "meta",
                        {
                          name: "description",
                          content:
                            e?.excerpt ||
                            e?.socialMediaShareDescription ||
                            `Read about ${e?.title}`,
                        },
                        "description",
                      ),
                      (0, i.jsx)(
                        "meta",
                        {
                          name: "keywords",
                          content: `Tomb Raider, ${e?.title}, ${e?.category?.fields?.name || ""}, video games, adventure`,
                        },
                        "keywords",
                      ),
                      (0, i.jsx)(
                        "meta",
                        { property: "og:title", content: e?.title },
                        "og:title",
                      ),
                      (0, i.jsx)(
                        "meta",
                        {
                          property: "og:description",
                          content:
                            e?.excerpt ||
                            e?.socialMediaShareDescription ||
                            `Read about ${e?.title}`,
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
                          content: (0, f._c)(e?.headerImage?.fields?.file?.url),
                        },
                        "og:image",
                      ),
                      (0, i.jsx)(
                        "meta",
                        {
                          property: "og:url",
                          content: E ? window.location.href : void 0,
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
                        { name: "twitter:title", content: e?.title },
                        "twitter:title",
                      ),
                      (0, i.jsx)(
                        "meta",
                        {
                          name: "twitter:description",
                          content:
                            e?.excerpt ||
                            e?.socialMediaShareDescription ||
                            `Read about ${e?.title}`,
                        },
                        "twitter:description",
                      ),
                      (0, i.jsx)(
                        "meta",
                        {
                          name: "twitter:image",
                          content: (0, f._c)(e?.headerImage?.fields?.file?.url),
                        },
                        "twitter:image",
                      ),
                      (0, i.jsx)(
                        "meta",
                        {
                          name: "twitter:image:alt",
                          content: e?.headerImage?.fields?.description,
                        },
                        "twitter:image:alt",
                      ),
                    ],
                  }),
                  e && (0, i.jsx)(y.A, { data: (0, k.Q0)(e, s) }),
                  (0, i.jsx)(x.Ay, {
                    surveys: u,
                    navItems: l,
                    signUpBanner: $,
                  }),
                  (0, i.jsx)("main", {
                    className: "w-full",
                    children: (0, i.jsxs)("article", {
                      className: "isolate flex w-full flex-col items-center",
                      children: [
                        (0, i.jsx)(p.A, {
                          className: "flex flex-col items-center pt-20",
                          children: (0, i.jsxs)("div", {
                            className:
                              "mx-auto w-full max-w-7xl flex-wrap px-8 pt-20 pb-32 lg:pb-48",
                            children: [
                              (0, i.jsx)(N.A, {
                                className: "text-customgray-500/70 pb-6",
                                items: [
                                  { name: "Home", href: "/" },
                                  { name: "News", href: "/news/all" },
                                  ...(e?.category?.fields.slug
                                    ? [
                                        {
                                          name: e.category.fields.name,
                                          href: `/news/${e.category.fields.slug}`,
                                        },
                                      ]
                                    : []),
                                  { name: e?.title ?? "" },
                                ],
                              }),
                              (0, i.jsxs)("div", {
                                className:
                                  "flex flex-wrap gap-x-2 gap-y-2 pb-6",
                                children: [
                                  (0, i.jsx)(o.A, {
                                    children: e?.category?.fields.name,
                                  }),
                                  e?.tags?.map((e, t) =>
                                    (0, i.jsx)(
                                      o.A,
                                      { children: e?.fields.name },
                                      e?.fields.name || t,
                                    ),
                                  ),
                                ],
                              }),
                              (0, i.jsx)("h1", {
                                className: "pb-8 text-4xl lg:text-7xl",
                                children: e?.title,
                              }),
                              (0, i.jsx)("p", {
                                className:
                                  "text-customgray-500/70 pb-16 sm:pb-32 md:pb-48 lg:pb-48",
                                children: (0, i.jsx)("time", {
                                  dateTime: e?.publishDate,
                                  children: (0, d.Yq)(e?.publishDate),
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className:
                            "relative flex w-full flex-col items-center bg-transparent text-black",
                          children: (0, i.jsxs)(g.A, {
                            className:
                              "relative flex w-full flex-col items-center bg-transparent text-black",
                            children: [
                              (0, i.jsxs)("div", {
                                id: "news",
                                className: "relative w-full max-w-5xl px-6",
                                style: { bottom: L / 2 },
                                children: [
                                  (0, i.jsx)(r(), {
                                    ref: C,
                                    alt:
                                      e?.headerImage?.fields.description ?? "",
                                    className:
                                      "aspect-[3/2] w-full object-cover",
                                    src: `https://${e?.headerImage?.fields.file?.url || ""}`,
                                    quality: 100,
                                    width: 1920,
                                    height: 1920,
                                  }),
                                  (0, i.jsxs)("div", {
                                    className: "news-content",
                                    children: [
                                      (0, i.jsx)("div", { className: "h-8" }),
                                      e?.body &&
                                        (0, f.sk)(e.body, (0, f.Xx)(!1, _)),
                                      (0, i.jsxs)("div", {
                                        className:
                                          "mt-20 flex flex-wrap items-center justify-between gap-y-8",
                                        children: [
                                          (0, i.jsx)("div", {
                                            className:
                                              "flex flex-wrap items-center gap-x-2",
                                            children:
                                              e?.hideSocialSharingButtons
                                                ? null
                                                : (0, i.jsx)(v.A, {
                                                    title: e?.title,
                                                  }),
                                          }),
                                          (0, i.jsxs)("div", {
                                            className:
                                              "flex flex-wrap items-center gap-x-2 gap-y-2",
                                            children: [
                                              (0, i.jsx)(o.A, {
                                                light: !0,
                                                children:
                                                  e?.category?.fields.name,
                                              }),
                                              e?.tags?.map((e, t) =>
                                                (0, i.jsx)(
                                                  o.A,
                                                  {
                                                    light: !0,
                                                    children: e?.fields.name,
                                                  },
                                                  e?.fields.name || t,
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
                              (0, i.jsx)("div", { ref: M }),
                              (0, i.jsx)(m.A, { articles: t }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsx)(n.A, { websiteSingleton: s }),
                  (0, i.jsx)(c.A, {
                    websiteSingleton: s,
                    navItems: l,
                    footerSocialLinks: a,
                  }),
                  (0, i.jsx)(b.A, {
                    featuredType: "Article",
                    id: A?.slug ?? "",
                    title: A?.title ?? "",
                    date: A?.publishDate ?? "",
                    imageUrl: (0, f._c)(A?.headerImage?.fields.file?.url),
                    tag: A?.category?.fields.name ?? "",
                    appearAtScrollRef: M.current ?? null,
                  }),
                ],
              })
            );
          }
          l();
        } catch (e) {
          l(e);
        }
      });
    },
    75247: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => c });
      var l = s(2183);
      s(36439);
      var i = s(15013),
        a = s.n(i),
        r = s(8906),
        n = s(23988);
      function c(e) {
        let { title: t, white: s } = e,
          { addAlert: i } = (0, n.Z)();
        return (0, l.jsxs)("div", {
          className: "flex flex-wrap items-center gap-x-2",
          children: [
            (0, l.jsx)(r.uI, {
              url: window.location.href,
              children: (0, l.jsx)(a(), {
                width: 20,
                height: 20,
                src: "/images/social/logo-fb-simple.svg",
                alt: "share to Facebook",
                className: `article-facebook ${s ? "invert" : void 0}`,
              }),
            }),
            (0, l.jsx)(r.r6, {
              title: t,
              url: window.location.href,
              children: (0, l.jsx)(a(), {
                width: 20,
                height: 20,
                src: "/images/social/logo-x.svg",
                alt: "share to X",
                className: `article-x ${s ? "invert" : void 0}`,
              }),
            }),
            (0, l.jsx)(a(), {
              width: 20,
              height: 20,
              alt: "share to Threads",
              src: "/images/social/logo-threads.svg",
              onClick: () => {
                let e;
                ((e = t
                  ? `https://www.threads.net/intent/post?text=${encodeURIComponent(t)} ${encodeURIComponent(window.location.href)}`
                  : `https://www.threads.net/intent/post?text=${encodeURIComponent(window.location.href)}`),
                  window.open(e, "", "height=800,width=600"));
              },
              className: `article-threads cursor-pointer ${s ? "invert" : ""}`,
            }),
            (0, l.jsx)(a(), {
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
              className: `article-link cursor-pointer ${s ? "invert" : void 0}`,
            }),
          ],
        });
      }
    },
    87174: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => d });
      var l = s(2183),
        i = s(36439),
        a = s(15013),
        r = s.n(a),
        n = s(68456),
        c = s(46728),
        o = s.n(c);
      function d({
        featuredType: e,
        title: t,
        date: s,
        imageUrl: a,
        tag: c,
        id: m,
        appearAtScrollRef: x,
      }) {
        let [h, p] = (0, i.useState)(!1),
          [g, f] = (0, i.useState)(!1),
          [u, w] = (0, i.useState)(!1),
          [j, v] = (0, i.useState)(!1),
          [b, N] = (0, i.useState)(1e4);
        return ((0, i.useEffect)(() => {
          (v(!1),
            setTimeout(() => {
              (v(!0), f(!1));
            }, 10));
        }, [m]),
        (0, i.useLayoutEffect)(() => {
          let e = () => {
            if (x) {
              let { top: e } = x.getBoundingClientRect();
              N(e + window.scrollY);
            }
          };
          return (
            e(),
            window.addEventListener("resize", e),
            () => window.removeEventListener("resize", e)
          );
        }, [x, m]),
        (0, i.useEffect)(() => {
          let e = () => {
            p(window.scrollY + window.innerHeight >= b);
          };
          return (
            window.addEventListener("scroll", e),
            () => {
              window.removeEventListener("scroll", e);
            }
          );
        }, [b]),
        j)
          ? (0, l.jsxs)("div", {
              className: `fixed bottom-0 right-0 z-[500000] w-full overflow-hidden bg-white px-3 py-8 transition-all duration-[1200ms] ease-in-out sm:bottom-8 sm:right-8 sm:max-w-[calc(100%-4rem)] sm:p-6 lg:max-w-[70%] xl:max-w-[60%] 2xl:max-w-[45%] ${h && !g ? "translate-y-0 opacity-100" : "translate-y-[500px] opacity-0"}`,
              children: [
                (0, l.jsxs)("div", {
                  className:
                    "relative flex flex-col items-center gap-x-6 sm:flex-row",
                  children: [
                    (0, l.jsx)("div", {
                      className:
                        "relative cursor-pointer overflow-hidden sm:w-[50%]",
                      onMouseEnter: () => w(!0),
                      onMouseLeave: () => w(!1),
                      children: (0, l.jsxs)(o(), {
                        href: `/news/${c}/${m}`,
                        children: [
                          (0, l.jsx)(r(), {
                            alt: "ASF",
                            className: `aspect-[3/2] max-h-[100%] w-full object-cover transition-all duration-500 ${u ? "scale-105" : ""}`,
                            src: a,
                            width: 500,
                            height: 500,
                          }),
                          (0, l.jsx)(r(), {
                            alt: "blog card image gradient",
                            fill: !0,
                            className:
                              "absolute left-0 top-0 h-full w-full object-cover",
                            src: "/images/blog-card-image-gradient.svg",
                          }),
                          (0, l.jsx)("div", {
                            className:
                              "absolute bottom-0 left-0 bg-teal-500 px-5 pb-1.5 pt-2 text-center text-sm font-bold uppercase tracking-widest text-white",
                            children: c,
                          }),
                        ],
                      }),
                    }),
                    (0, l.jsxs)("div", {
                      className: "w-full sm:w-[50%]",
                      children: [
                        (0, l.jsxs)("h3", {
                          className:
                            "mt-4 text-2xl font-bold text-black sm:mt-0 sm:text-3xl",
                          children: ["Featured ", e],
                        }),
                        (0, l.jsx)(o(), {
                          href: `/news/${c}/${m}`,
                          children: (0, l.jsx)("p", {
                            onMouseEnter: () => w(!0),
                            onMouseLeave: () => w(!1),
                            className:
                              "mt-3 cursor-pointer text-lg font-bold text-black sm:mt-6 sm:text-2xl",
                            children: t,
                          }),
                        }),
                        (0, l.jsxs)("div", {
                          className:
                            "flex items-center justify-between sm:flex-col sm:items-stretch sm:justify-start",
                          children: [
                            (0, l.jsx)("p", {
                              className:
                                "sm:text-md mt-2 text-sm font-normal text-gray-500 sm:mt-4",
                              children: (0, n.Yq)(s),
                            }),
                            (0, l.jsx)(o(), {
                              href: `/news/${c}/${m}`,
                              children: (0, l.jsxs)("div", {
                                className:
                                  "group mt-4 cursor-pointer text-lg font-bold text-black",
                                onMouseEnter: () => w(!0),
                                onMouseLeave: () => w(!1),
                                children: [
                                  (0, l.jsx)("p", { children: "Learn More" }),
                                  (0, l.jsx)(r(), {
                                    src: "/images/header-highlight.svg",
                                    alt: "highlight",
                                    width: 100,
                                    height: 5,
                                    className: `opacity-100 transition duration-300 ${u ? "opacity-100" : "sm:opacity-0"}`,
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
                (0, l.jsx)(r(), {
                  alt: "top left bracket",
                  width: 48,
                  height: 48,
                  className: `pointer-events-none absolute -left-3 -top-3 duration-200 ${u ? "left-2 top-2" : ""}`,
                  src: "/images/top-left-bracket.svg",
                }),
                (0, l.jsx)(r(), {
                  alt: "bottom right bracket",
                  width: 48,
                  height: 48,
                  className: `pointer-events-none absolute -bottom-3 -right-3 duration-200 ${u ? "bottom-2 right-2" : ""}`,
                  src: "/images/bottom-right-bracket.svg",
                }),
                (0, l.jsx)(r(), {
                  alt: "close button",
                  width: 24,
                  height: 24,
                  src: "/images/close.svg",
                  className:
                    "absolute right-1.5 top-1.5 cursor-pointer invert sm:right-3 sm:top-3",
                  onClick: () => f(!0),
                }),
                (0, l.jsx)(r(), {
                  alt: "desktop compass",
                  width: 232,
                  height: 232,
                  className: `translate-all pointer-events-none absolute bottom-1/2 hidden translate-y-[50%] opacity-0 duration-300 ${u ? "-right-12 opacity-50" : "-right-[200px]"} sm:block`,
                  src: "/images/compass.webp",
                }),
                (0, l.jsx)(r(), {
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
    92351: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => o });
      var l = s(2183),
        i = s(46728),
        a = s.n(i),
        r = s(61065),
        n = s(80935),
        c = s(61932);
      function o({ items: e, className: t }) {
        let s = {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: e.map((e, t) => ({
            "@type": "ListItem",
            position: t + 1,
            name: e.name,
            ...(e.href ? { item: `${n.W}${e.href}` } : {}),
          })),
        };
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(r.A, { data: s }),
            (0, l.jsx)("nav", {
              "aria-label": "Breadcrumb",
              className: (0, c.cn)("text-sm", t),
              children: (0, l.jsx)("ol", {
                className: "flex flex-wrap items-center gap-x-2 gap-y-1",
                children: e.map((t, s) => {
                  let i = s === e.length - 1;
                  return (0, l.jsxs)(
                    "li",
                    {
                      className: "flex items-center gap-x-2",
                      children: [
                        t.href && !i
                          ? (0, l.jsx)(a(), {
                              href: t.href,
                              className: "hover:underline",
                              children: t.name,
                            })
                          : (0, l.jsx)("span", {
                              "aria-current": i ? "page" : void 0,
                              children: t.name,
                            }),
                        !i &&
                          (0, l.jsx)("span", {
                            "aria-hidden": "true",
                            children: "/",
                          }),
                      ],
                    },
                    `${t.name}-${s}`,
                  );
                }),
              }),
            }),
          ],
        });
      }
    },
    98500: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => c });
      var l = s(2183),
        i = s(72538),
        a = s(61932),
        r = s(15013),
        n = s.n(r);
      function c(e) {
        let { className: t, children: s, containerClasses: r, ...c } = e;
        return (0, l.jsxs)("div", {
          className: `relative -z-10 h-full w-full overflow-visible ${t}`,
          ...c,
          children: [
            (0, l.jsx)(n(), {
              className:
                "pointer-events-none absolute left-0 top-0 object-cover",
              fill: !0,
              sizes: "100vw",
              fetchPriority: "high",
              alt: "Hardwood background",
              src: "/images/hero-texture_dark-wood(tinyfied).jpg",
              priority: !0,
            }),
            (0, l.jsx)(i.A, {}),
            (0, l.jsx)("div", {
              className: (0, a.cn)("relative z-10 w-full", r),
              children: s,
            }),
          ],
        });
      }
    },
  },
  (e) => {
    (e.O(
      0,
      [
        9950, 5013, 2696, 1329, 6342, 3492, 8906, 9980, 2642, 8925, 636, 6593,
        8792,
      ],
      () => e((e.s = 19975)),
    ),
      (_N_E = e.O()));
  },
]);
