(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8789],
  {
    16739: (e, t, l) => {
      "use strict";
      l.a(e, async (e, s) => {
        try {
          l.d(t, { A: () => h });
          var a = l(2183),
            i = l(96006),
            n = l.n(i),
            r = l(11677),
            o = l.n(r),
            c = l(46956),
            d = l(92446),
            m = e([d]);
          function h(e) {
            var t, l, s, i, r, m, h, u, x;
            let { item: g, onClick: p = () => {} } = e;
            return (0, a.jsx)(o(), {
              onClick: p,
              href: "/news/"
                .concat(
                  null == (l = g.category) || null == (t = l.fields)
                    ? void 0
                    : t.slug,
                  "/",
                )
                .concat(g.slug),
              children: (0, a.jsxs)("article", {
                className:
                  "group flex h-full grow flex-col bg-white shadow-lg duration-[0.3s] lg:bg-transparent lg:shadow-none lg:hover:bg-white lg:hover:shadow-lg",
                children: [
                  (0, a.jsxs)("figure", {
                    className: "relative w-full overflow-hidden",
                    children: [
                      (0, a.jsx)(n(), {
                        alt: "".concat(
                          (null == (i = g.headerImage) || null == (s = i.fields)
                            ? void 0
                            : s.description) || "",
                        ),
                        className:
                          "aspect-[3/2] w-full object-cover transition-all duration-500 group-hover:scale-105",
                        src: (0, d._c)(
                          null == (h = g.headerImage) ||
                            null == (m = h.fields) ||
                            null == (r = m.file)
                            ? void 0
                            : r.url,
                        ),
                        width: 500,
                        height: 500,
                      }),
                      (0, a.jsx)(n(), {
                        alt: "blog card image gradient",
                        fill: !0,
                        className:
                          "absolute top-0 left-0 h-full w-full object-cover",
                        src: "/images/blog-card-image-gradient.svg",
                      }),
                      (0, a.jsx)(n(), {
                        alt: "top left bracket",
                        width: 48,
                        height: 48,
                        className:
                          "absolute -top-4 -left-4 duration-200 group-hover:top-2 group-hover:left-2",
                        src: "/images/top-left-bracket.svg",
                      }),
                      (0, a.jsx)(n(), {
                        alt: "bottom right bracket",
                        width: 48,
                        height: 48,
                        className:
                          "absolute -right-4 -bottom-4 duration-200 group-hover:right-2 group-hover:bottom-2",
                        src: "/images/bottom-right-bracket.svg",
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "absolute bottom-0 left-0 bg-teal-500 px-5 pt-2 pb-1.5 text-center text-sm font-bold tracking-widest text-white uppercase",
                        children:
                          null == (x = g.category) || null == (u = x.fields)
                            ? void 0
                            : u.name,
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "relative flex min-h-[10rem] grow flex-col justify-between overflow-hidden py-5 pr-12 pl-5 duration-200",
                    children: [
                      (0, a.jsx)("h3", {
                        className: "text-2xl font-bold",
                        children: g.title.toString(),
                      }),
                      (0, a.jsx)("p", {
                        className: "mt-4 font-normal text-gray-500",
                        children: (0, a.jsx)("time", {
                          dateTime: g.publishDate,
                          children: (0, c.Yq)(g.publishDate),
                        }),
                      }),
                      (0, a.jsx)(n(), {
                        alt: "desktop compass",
                        width: 232,
                        height: 232,
                        className:
                          "absolute -right-16 -bottom-24 hidden opacity-0 duration-200 group-hover:-right-12 group-hover:-bottom-20 group-hover:opacity-50 lg:block",
                        src: "/images/compass.webp",
                      }),
                      (0, a.jsx)(n(), {
                        alt: "mobile compass",
                        width: 232,
                        height: 232,
                        className:
                          "absolute -right-12 -bottom-20 opacity-50 lg:hidden",
                        src: "/images/compass.webp",
                      }),
                    ],
                  }),
                ],
              }),
            });
          }
          ((d = (m.then ? (await m)() : m)[0]), s());
        } catch (e) {
          s(e);
        }
      });
    },
    22765: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => a });
      var s = l(2183);
      function a(e) {
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
    41171: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => c });
      var s = l(2183),
        a = l(11677),
        i = l.n(a),
        n = l(71429),
        r = l(2371),
        o = l(52464);
      function c(e) {
        let { items: t, className: l } = e,
          a = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: t.map((e, t) => ({
              "@type": "ListItem",
              position: t + 1,
              name: e.name,
              ...(e.href ? { item: "".concat(r.W).concat(e.href) } : {}),
            })),
          };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(n.A, { data: a }),
            (0, s.jsx)("nav", {
              "aria-label": "Breadcrumb",
              className: (0, o.cn)("text-sm", l),
              children: (0, s.jsx)("ol", {
                className: "flex flex-wrap items-center gap-x-2 gap-y-1",
                children: t.map((e, l) => {
                  let a = l === t.length - 1;
                  return (0, s.jsxs)(
                    "li",
                    {
                      className: "flex items-center gap-x-2",
                      children: [
                        e.href && !a
                          ? (0, s.jsx)(i(), {
                              href: e.href,
                              className: "hover:underline",
                              children: e.name,
                            })
                          : (0, s.jsx)("span", {
                              "aria-current": a ? "page" : void 0,
                              children: e.name,
                            }),
                        !a &&
                          (0, s.jsx)("span", {
                            "aria-hidden": "true",
                            children: "/",
                          }),
                      ],
                    },
                    "".concat(e.name, "-").concat(l),
                  );
                }),
              }),
            }),
          ],
        });
      }
    },
    54981: (e, t, l) => {
      "use strict";
      l.a(e, async (e, s) => {
        try {
          (l.r(t), l.d(t, { __N_SSG: () => S, default: () => _ }));
          var a = l(2183),
            i = l(96006),
            n = l.n(i),
            r = l(31026),
            o = l(75894),
            c = l(22765),
            d = l(46956),
            m = l(72327),
            h = l(95216),
            u = l(36439),
            x = l(79176),
            g = l(13544),
            p = l(92446),
            f = l(14623),
            v = l.n(f),
            w = l(99435),
            b = l(81219),
            j = l(97378),
            N = l(41171),
            y = l(71429),
            k = l(4243),
            A = e([o, m, h, p, w, k]);
          [o, m, h, p, w, k] = A.then ? (await A)() : A;
          var S = !0;
          function _(e) {
            var t,
              l,
              s,
              i,
              f,
              A,
              S,
              _,
              E,
              R,
              I,
              L,
              C,
              M,
              T,
              D,
              z,
              P,
              B,
              q,
              H,
              U,
              Y,
              F,
              V,
              X,
              O,
              W;
            let {
                postData: G,
                relatedArticles: Q,
                websiteSingleton: Z,
                navItems: J,
                footerSocialLinks: K,
                surveys: $,
                signUpBanner: ee,
                featuredArticle: et,
              } = e,
              { isLoggedIn: el } = (0, w.u)(),
              [es, ea] = (0, u.useState)(!1),
              [ei, en] = (0, u.useState)(0),
              er = (0, u.useRef)(null),
              eo = (0, u.useRef)(null);
            return (
              (0, u.useEffect)(() => {
                ea(!0);
              }, []),
              (0, u.useEffect)(() => {
                if (er && er.current) {
                  let e = er.current;
                  if (e) {
                    let t = new ResizeObserver(() => {
                      en(e.clientHeight);
                    });
                    return (
                      t.observe(e),
                      () => {
                        t.disconnect();
                      }
                    );
                  }
                }
              }, [er, es]),
              (0, a.jsxs)("div", {
                className: "relative flex flex-col items-center",
                children: [
                  (0, a.jsxs)(v(), {
                    children: [
                      (0, a.jsx)("title", {
                        children: "Tomb Raider | ".concat(
                          null == G ? void 0 : G.title,
                        ),
                      }),
                      (0, a.jsx)(
                        "meta",
                        {
                          name: "description",
                          content:
                            (null == G ? void 0 : G.excerpt) ||
                            (null == G
                              ? void 0
                              : G.socialMediaShareDescription) ||
                            "Read about ".concat(null == G ? void 0 : G.title),
                        },
                        "description",
                      ),
                      (0, a.jsx)(
                        "meta",
                        {
                          name: "keywords",
                          content: "Tomb Raider, "
                            .concat(null == G ? void 0 : G.title, ", ")
                            .concat(
                              (null == G ||
                              null == (l = G.category) ||
                              null == (t = l.fields)
                                ? void 0
                                : t.name) || "",
                              ", video games, adventure",
                            ),
                        },
                        "keywords",
                      ),
                      (0, a.jsx)(
                        "meta",
                        {
                          property: "og:title",
                          content: null == G ? void 0 : G.title,
                        },
                        "og:title",
                      ),
                      (0, a.jsx)(
                        "meta",
                        {
                          property: "og:description",
                          content:
                            (null == G ? void 0 : G.excerpt) ||
                            (null == G
                              ? void 0
                              : G.socialMediaShareDescription) ||
                            "Read about ".concat(null == G ? void 0 : G.title),
                        },
                        "og:description",
                      ),
                      (0, a.jsx)(
                        "meta",
                        { property: "og:type", content: "article" },
                        "og:type",
                      ),
                      (0, a.jsx)(
                        "meta",
                        {
                          property: "og:image",
                          content: (0, p._c)(
                            null == G ||
                              null == (f = G.headerImage) ||
                              null == (i = f.fields) ||
                              null == (s = i.file)
                              ? void 0
                              : s.url,
                          ),
                        },
                        "og:image",
                      ),
                      (0, a.jsx)(
                        "meta",
                        {
                          property: "og:url",
                          content: es ? window.location.href : void 0,
                        },
                        "og:url",
                      ),
                      (0, a.jsx)(
                        "meta",
                        {
                          name: "twitter:card",
                          content: "summary_large_image",
                        },
                        "twitter:card",
                      ),
                      (0, a.jsx)(
                        "meta",
                        {
                          name: "twitter:title",
                          content: null == G ? void 0 : G.title,
                        },
                        "twitter:title",
                      ),
                      (0, a.jsx)(
                        "meta",
                        {
                          name: "twitter:description",
                          content:
                            (null == G ? void 0 : G.excerpt) ||
                            (null == G
                              ? void 0
                              : G.socialMediaShareDescription) ||
                            "Read about ".concat(null == G ? void 0 : G.title),
                        },
                        "twitter:description",
                      ),
                      (0, a.jsx)(
                        "meta",
                        {
                          name: "twitter:image",
                          content: (0, p._c)(
                            null == G ||
                              null == (_ = G.headerImage) ||
                              null == (S = _.fields) ||
                              null == (A = S.file)
                              ? void 0
                              : A.url,
                          ),
                        },
                        "twitter:image",
                      ),
                      (0, a.jsx)(
                        "meta",
                        {
                          name: "twitter:image:alt",
                          content:
                            null == G ||
                            null == (R = G.headerImage) ||
                            null == (E = R.fields)
                              ? void 0
                              : E.description,
                        },
                        "twitter:image:alt",
                      ),
                    ],
                  }),
                  G && (0, a.jsx)(y.A, { data: (0, k.Q0)(G, Z) }),
                  (0, a.jsx)(h.Ay, {
                    surveys: $,
                    navItems: J,
                    signUpBanner: ee,
                  }),
                  (0, a.jsx)("main", {
                    className: "w-full",
                    children: (0, a.jsxs)("article", {
                      className: "isolate flex w-full flex-col items-center",
                      children: [
                        (0, a.jsx)(x.A, {
                          className: "flex flex-col items-center pt-20",
                          children: (0, a.jsxs)("div", {
                            className:
                              "mx-auto w-full max-w-7xl flex-wrap px-8 pt-20 pb-32 lg:pb-48",
                            children: [
                              (0, a.jsx)(N.A, {
                                className: "text-customgray-500/70 pb-6",
                                items: [
                                  { name: "Home", href: "/" },
                                  { name: "News", href: "/news/all" },
                                  ...((
                                    null == G || null == (I = G.category)
                                      ? void 0
                                      : I.fields.slug
                                  )
                                    ? [
                                        {
                                          name: G.category.fields.name,
                                          href: "/news/".concat(
                                            G.category.fields.slug,
                                          ),
                                        },
                                      ]
                                    : []),
                                  {
                                    name:
                                      null != (U = null == G ? void 0 : G.title)
                                        ? U
                                        : "",
                                  },
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className:
                                  "flex flex-wrap gap-x-2 gap-y-2 pb-6",
                                children: [
                                  (0, a.jsx)(c.A, {
                                    children:
                                      null == G || null == (L = G.category)
                                        ? void 0
                                        : L.fields.name,
                                  }),
                                  null == G || null == (C = G.tags)
                                    ? void 0
                                    : C.map((e, t) =>
                                        (0, a.jsx)(
                                          c.A,
                                          {
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
                              (0, a.jsx)("h1", {
                                className: "pb-8 text-4xl lg:text-7xl",
                                children: null == G ? void 0 : G.title,
                              }),
                              (0, a.jsx)("p", {
                                className:
                                  "text-customgray-500/70 pb-16 sm:pb-32 md:pb-48 lg:pb-48",
                                children: (0, a.jsx)("time", {
                                  dateTime: null == G ? void 0 : G.publishDate,
                                  children: (0, d.Yq)(
                                    null == G ? void 0 : G.publishDate,
                                  ),
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, a.jsx)("div", {
                          className:
                            "relative flex w-full flex-col items-center bg-transparent text-black",
                          children: (0, a.jsxs)(g.A, {
                            className:
                              "relative flex w-full flex-col items-center bg-transparent text-black",
                            children: [
                              (0, a.jsxs)("div", {
                                id: "news",
                                className: "relative w-full max-w-5xl px-6",
                                style: { bottom: ei / 2 },
                                children: [
                                  (0, a.jsx)(n(), {
                                    ref: er,
                                    alt:
                                      null !=
                                      (Y =
                                        null == G || null == (M = G.headerImage)
                                          ? void 0
                                          : M.fields.description)
                                        ? Y
                                        : "",
                                    className:
                                      "aspect-[3/2] w-full object-cover",
                                    src: "https://".concat(
                                      (null == G ||
                                      null == (D = G.headerImage) ||
                                      null == (T = D.fields.file)
                                        ? void 0
                                        : T.url) || "",
                                    ),
                                    quality: 100,
                                    width: 1920,
                                    height: 1920,
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "news-content",
                                    children: [
                                      (0, a.jsx)("div", { className: "h-8" }),
                                      (null == G ? void 0 : G.body) &&
                                        (0, p.sk)(G.body, (0, p.Xx)(!1, el)),
                                      (0, a.jsxs)("div", {
                                        className:
                                          "mt-20 flex flex-wrap items-center justify-between gap-y-8",
                                        children: [
                                          (0, a.jsx)("div", {
                                            className:
                                              "flex flex-wrap items-center gap-x-2",
                                            children: (
                                              null == G
                                                ? void 0
                                                : G.hideSocialSharingButtons
                                            )
                                              ? null
                                              : (0, a.jsx)(b.A, {
                                                  title:
                                                    null == G
                                                      ? void 0
                                                      : G.title,
                                                }),
                                          }),
                                          (0, a.jsxs)("div", {
                                            className:
                                              "flex flex-wrap items-center gap-x-2 gap-y-2",
                                            children: [
                                              (0, a.jsx)(c.A, {
                                                light: !0,
                                                children:
                                                  null == G ||
                                                  null == (z = G.category)
                                                    ? void 0
                                                    : z.fields.name,
                                              }),
                                              null == G || null == (P = G.tags)
                                                ? void 0
                                                : P.map((e, t) =>
                                                    (0, a.jsx)(
                                                      c.A,
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
                              (0, a.jsx)("div", { ref: eo }),
                              (0, a.jsx)(m.A, { articles: Q }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)(r.A, { websiteSingleton: Z }),
                  (0, a.jsx)(o.A, {
                    websiteSingleton: Z,
                    navItems: J,
                    footerSocialLinks: K,
                  }),
                  (0, a.jsx)(j.A, {
                    featuredType: "Article",
                    id: null != (F = null == et ? void 0 : et.slug) ? F : "",
                    title:
                      null != (V = null == et ? void 0 : et.title) ? V : "",
                    date:
                      null != (X = null == et ? void 0 : et.publishDate)
                        ? X
                        : "",
                    imageUrl: (0, p._c)(
                      null == et ||
                        null == (q = et.headerImage) ||
                        null == (B = q.fields.file)
                        ? void 0
                        : B.url,
                    ),
                    tag:
                      null !=
                      (O =
                        null == et || null == (H = et.category)
                          ? void 0
                          : H.fields.name)
                        ? O
                        : "",
                    appearAtScrollRef: null != (W = eo.current) ? W : null,
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
          l.d(t, { A: () => x });
          var a = l(2183),
            i = l(96006),
            n = l.n(i),
            r = l(16739),
            o = l(36439),
            c = l(15711),
            d = l(11677),
            m = l.n(d),
            h = l(94536),
            u = e([r]);
          function x(e) {
            let {
                articles: t,
                headingTitle: l = "Related Articles",
                disableButton: s = !1,
                buttonTitle: i = "View All",
                isHome: d,
              } = e,
              [u, x] = (0, o.useState)(null);
            return (0, a.jsxs)("div", {
              className:
                "flex w-full flex-col items-stretch overflow-hidden py-8",
              children: [
                (0, a.jsxs)("div", {
                  className: "lg:pb-".concat(
                    d ? 12 : 16,
                    " flex w-full flex-col flex-wrap items-center justify-between px-8 pb-8 lg:flex-row lg:px-16",
                  ),
                  children: [
                    (0, a.jsxs)("div", {
                      className:
                        "flex flex-col items-center gap-x-8 gap-y-4 pb-4 lg:flex-row lg:pb-0",
                      children: [
                        (0, a.jsx)("h2", {
                          className:
                            "text-4xl text-black sm:text-5xl lg:text-6xl",
                          children: l,
                        }),
                        !s &&
                          (0, a.jsx)(m(), {
                            href: "/news/all",
                            children: (0, a.jsx)(c.A, {
                              variant: "dark",
                              children: i,
                            }),
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
                            onClick: () => (null == u ? void 0 : u.slidePrev()),
                          }),
                          (0, a.jsx)(n(), {
                            width: 48,
                            height: 48,
                            alt: "Right arrow",
                            onClick: () => (null == u ? void 0 : u.slideNext()),
                            src: "/images/arrow-button-right.svg",
                            className: "cursor-pointer",
                          }),
                        ],
                      }),
                  ],
                }),
                t.length > 0
                  ? (0, a.jsx)("div", {
                      className: "px-8 lg:px-16",
                      children: (0, a.jsx)(h.RC, {
                        className: "swiper-show-overflow relative flex w-full",
                        slidesPerView: 1.25,
                        centeredSlides: !0,
                        breakpoints: {
                          640: { slidesPerView: 2, centeredSlides: !1 },
                          1024: { slidesPerView: 3, centeredSlides: !1 },
                        },
                        spaceBetween: 16,
                        rewind: !0,
                        onSwiper: (e) => x(e),
                        children: t.map((e) =>
                          (0, a.jsx)(
                            h.qr,
                            {
                              className:
                                "relative !h-auto w-64 max-w-none shrink-0 overflow-visible",
                              children: (0, a.jsx)(r.A, { item: e }),
                            },
                            e.slug,
                          ),
                        ),
                      }),
                    })
                  : (0, a.jsx)("p", {
                      className: "px-8 lg:px-16",
                      children: "We couldn't find any related articles.",
                    }),
              ],
            });
          }
          ((r = (u.then ? (await u)() : u)[0]), s());
        } catch (e) {
          s(e);
        }
      });
    },
    79176: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => o });
      var s = l(2183),
        a = l(94734),
        i = l(52464),
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
            (0, s.jsx)(a.A, {}),
            (0, s.jsx)("div", {
              className: (0, i.cn)("relative z-10 w-full", n),
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
      var a = l(96006),
        i = l.n(a),
        n = l(8906),
        r = l(77752);
      function o(e) {
        let { title: t, white: l } = e,
          { addAlert: a } = (0, r.Z)();
        return (0, s.jsxs)("div", {
          className: "flex flex-wrap items-center gap-x-2",
          children: [
            (0, s.jsx)(n.uI, {
              url: window.location.href,
              children: (0, s.jsx)(i(), {
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
              children: (0, s.jsx)(i(), {
                width: 20,
                height: 20,
                src: "/images/social/logo-x.svg",
                alt: "share to X",
                className: "article-x ".concat(l ? "invert" : void 0),
              }),
            }),
            (0, s.jsx)(i(), {
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
            (0, s.jsx)(i(), {
              width: 20,
              height: 20,
              src: "/images/link.svg",
              alt: "copy to clipboard",
              onClick: () => {
                (navigator.clipboard.writeText(window.location.href),
                  a({
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
    94734: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => n });
      var s = l(2183),
        a = l(96006),
        i = l.n(a);
      function n() {
        return (0, s.jsx)("div", {
          className:
            "pointer-events-none absolute bottom-0 left-0 w-full translate-y-1/4",
          children: (0, s.jsx)(i(), {
            width: 1920,
            height: 483,
            className: "w-full object-cover object-top",
            alt: "Hardwood transition",
            src: "/images/hero-transition(tinyfied).webp",
          }),
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
        a = l(36439),
        i = l(96006),
        n = l.n(i),
        r = l(46956),
        o = l(11677),
        c = l.n(o);
      function d(e) {
        let {
            featuredType: t,
            title: l,
            date: i,
            imageUrl: o,
            tag: d,
            id: m,
            appearAtScrollRef: h,
          } = e,
          [u, x] = (0, a.useState)(!1),
          [g, p] = (0, a.useState)(!1),
          [f, v] = (0, a.useState)(!1),
          [w, b] = (0, a.useState)(!1),
          [j, N] = (0, a.useState)(1e4);
        return ((0, a.useEffect)(() => {
          (b(!1),
            setTimeout(() => {
              (b(!0), p(!1));
            }, 10));
        }, [m]),
        (0, a.useLayoutEffect)(() => {
          let e = () => {
            if (h) {
              let { top: e } = h.getBoundingClientRect();
              N(e + window.scrollY);
            }
          };
          return (
            e(),
            window.addEventListener("resize", e),
            () => window.removeEventListener("resize", e)
          );
        }, [h, m]),
        (0, a.useEffect)(() => {
          let e = () => {
            x(window.scrollY + window.innerHeight >= j);
          };
          return (
            window.addEventListener("scroll", e),
            () => {
              window.removeEventListener("scroll", e);
            }
          );
        }, [j]),
        w)
          ? (0, s.jsxs)("div", {
              className:
                "fixed bottom-0 right-0 z-[500000] w-full overflow-hidden bg-white px-3 py-8 transition-all duration-[1200ms] ease-in-out sm:bottom-8 sm:right-8 sm:max-w-[calc(100%-4rem)] sm:p-6 lg:max-w-[70%] xl:max-w-[60%] 2xl:max-w-[45%] ".concat(
                  u && !g
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
                                f ? "scale-105" : "",
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
                              children: (0, r.Yq)(i),
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
                (0, s.jsx)(n(), {
                  alt: "top left bracket",
                  width: 48,
                  height: 48,
                  className:
                    "pointer-events-none absolute -left-3 -top-3 duration-200 ".concat(
                      f ? "left-2 top-2" : "",
                    ),
                  src: "/images/top-left-bracket.svg",
                }),
                (0, s.jsx)(n(), {
                  alt: "bottom right bracket",
                  width: 48,
                  height: 48,
                  className:
                    "pointer-events-none absolute -bottom-3 -right-3 duration-200 ".concat(
                      f ? "bottom-2 right-2" : "",
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
                  onClick: () => p(!0),
                }),
                (0, s.jsx)(n(), {
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
        9950, 6006, 1433, 1329, 1089, 3492, 8906, 5216, 2446, 7137, 636, 6593,
        8792,
      ],
      () => e((e.s = 96114)),
    ),
      (_N_E = e.O()));
  },
]);
