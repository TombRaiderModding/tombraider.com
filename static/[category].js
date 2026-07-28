(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9635],
  {
    1906: (e, t, l) => {
      "use strict";
      l.a(e, async (e, s) => {
        try {
          l.d(t, { A: () => h });
          var r = l(2183),
            a = l(95216),
            i = l(2991),
            n = l(20204),
            o = l(31026),
            c = l(75894),
            d = l(13544);
          l(36439);
          var u = e([a, i, n, c]);
          function h(e) {
            let {
              categories: t,
              galleryProducts: l,
              productLists: s,
              websiteSingleton: u,
              navItems: h,
              footerSocialLinks: x,
              surveys: p,
              signUpBanner: g,
            } = e;
            return (0, r.jsxs)("div", {
              className: "",
              children: [
                (0, r.jsx)(a.Ay, { surveys: p, navItems: h, signUpBanner: g }),
                (0, r.jsx)(i.A, { categories: t, products: l }),
                (0, r.jsxs)(d.A, {
                  children: [
                    (0, r.jsx)("div", { className: "py-5 lg:py-16 xl:py-20" }),
                    (0, r.jsx)("div", {
                      className: " overflow-hidden text-black",
                      children:
                        null == s
                          ? void 0
                          : s.map(
                              (e) =>
                                e.products.length > 0 &&
                                (0, r.jsx)(n.A, { ...e }, e.title),
                            ),
                    }),
                  ],
                }),
                (0, r.jsx)(o.A, { websiteSingleton: u }),
                (0, r.jsx)(c.A, {
                  websiteSingleton: u,
                  navItems: h,
                  footerSocialLinks: x,
                }),
              ],
            });
          }
          (([a, i, n, c] = u.then ? (await u)() : u), s());
        } catch (e) {
          s(e);
        }
      });
    },
    2991: (e, t, l) => {
      "use strict";
      l.a(e, async (e, s) => {
        try {
          l.d(t, { A: () => j });
          var r = l(2183),
            a = l(75109),
            i = l(96006),
            n = l.n(i),
            o = l(15711),
            c = l(11677),
            d = l.n(c),
            u = l(36439),
            h = l(18652),
            x = l(52464),
            p = l(13776),
            g = l(28092),
            f = l(92446),
            m = l(80707),
            v = l.n(m),
            w = l(94734),
            b = e([a, f]);
          function j(e) {
            let { categories: t, products: l } = e,
              [s, a] = (0, u.useState)(0),
              [i, n] = (0, u.useState)(v().nth(l, s));
            return (
              (0, u.useEffect)(() => {
                (a(0), n(v().first(l)));
              }, [l]),
              (0, u.useEffect)(() => {
                n(v().nth(l, s));
              }, [l, s]),
              i &&
                (0, r.jsxs)("div", {
                  className: "relative pb-24",
                  children: [
                    (0, r.jsx)(y, {
                      featuredProduct: i,
                      featuredProductIndex: s,
                      products: l,
                    }),
                    (0, r.jsxs)("div", {
                      className: "relative z-0 overflow-hidden",
                      children: [
                        (0, r.jsx)(N, {
                          featuredProduct: i,
                          featuredProductIndex: s,
                          products: l,
                        }),
                        (0, r.jsx)(k, {
                          tabs: t,
                          products: l,
                          featuredProductIndex: s,
                          setFeaturedProductIndex: a,
                        }),
                      ],
                    }),
                  ],
                })
            );
          }
          function y(e) {
            let { featuredProductIndex: t, products: l } = e;
            return (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)("div", {
                  className: "absolute inset-0 -z-20 bg-black",
                  children: (0, r.jsxs)("div", {
                    className: "relative min-h-full overflow-hidden pb-24",
                    children: [
                      (0, r.jsxs)("div", {
                        className:
                          "absolute top-16 right-0 aspect-3/2 w-full max-w-5xl lg:top-0 xl:max-w-6xl",
                        children: [
                          l.map((e, l) => {
                            var s, i, o, c, d;
                            let u = (0, a.r5H)(e);
                            return (0, r.jsx)(
                              n(),
                              {
                                fill: !0,
                                priority: !0,
                                sizes:
                                  "(min-width: 1280px) 1152px, (min-width: 1024px) 1024px, 100vw",
                                className: (0, x.cn)(
                                  "-z-10 object-cover object-top transition-opacity duration-500",
                                  t === l ? "opacity-100" : "opacity-0",
                                ),
                                alt:
                                  null !=
                                  (c =
                                    null == u || null == (s = u.fields.image)
                                      ? void 0
                                      : s.fields.description)
                                    ? c
                                    : "",
                                src: (0, f._c)(
                                  null == u ||
                                    null == (o = u.fields.image) ||
                                    null == (i = o.fields.file)
                                    ? void 0
                                    : i.url,
                                ),
                              },
                              null != (d = e.slug) ? d : l,
                            );
                          }),
                          (0, r.jsx)("div", {
                            className: "hidden h-full w-full lg:block",
                            style: {
                              background:
                                "\n                    linear-gradient(180deg, #181818 0%, transparent 26.66%),\n                    linear-gradient(126deg, #181818 0%, transparent 26.66%),\n                    linear-gradient(180deg, transparent 50%, #181818 100%),\n                    linear-gradient(90deg, #181818 0%, transparent 48.94%)",
                            },
                          }),
                          (0, r.jsx)("div", {
                            className: "h-full w-full lg:hidden",
                            style: {
                              background:
                                "\n                    linear-gradient(270deg, #181818 -0.13%, transparent 49.87%), \n                    linear-gradient(180deg, #181818 0%, transparent 50.2%), \n                    linear-gradient(180deg, transparent 50%, #181818 100%), \n                    linear-gradient(90deg, #181818 0%, transparent 48.94%)",
                            },
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "absolute -right-28 -bottom-36 hidden h-full w-full opacity-50 lg:block",
                        children: (0, r.jsx)(n(), {
                          fill: !0,
                          className: "object-contain object-bottom-right",
                          alt: "topography lines",
                          src: "/images/topography.webp",
                        }),
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "absolute bottom-10 left-[-250px] aspect-16/7 w-full min-w-[800px] lg:-bottom-16 lg:left-[-500px]",
                        children: [
                          (0, r.jsx)("div", {
                            className:
                              "absolute h-full w-full overflow-visible opacity-40 mix-blend-lighten blur-[100px]",
                            style: {
                              background:
                                "radial-gradient(50% 50% at 50% 50%, #936726 0%, transparent 100%)",
                            },
                          }),
                          (0, r.jsx)(n(), {
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
                (0, r.jsx)(w.A, {}),
              ],
            });
          }
          function N(e) {
            var t;
            let {
              featuredProduct: l,
              featuredProductIndex: s,
              products: a,
            } = e;
            return (
              l &&
              (0, r.jsxs)("div", {
                className:
                  "mx-auto flex h-[500px] max-w-lg flex-col items-center justify-center px-6 pt-24 pb-6 text-center lg:mx-0 lg:items-start lg:pl-12 lg:text-left",
                children: [
                  l.titleLogo
                    ? (0, r.jsx)("div", {
                        className: "relative h-40 w-full shrink-0",
                        children: a.map((e, t) => {
                          var l, a, i;
                          return (
                            e.titleLogo &&
                            (0, r.jsx)(
                              n(),
                              {
                                fill: !0,
                                priority: !0,
                                sizes: "(min-width: 1024px) 512px, 100vw",
                                className: (0, x.cn)(
                                  "object-contain object-center transition-opacity duration-500 lg:object-left",
                                  s === t ? "opacity-100" : "opacity-0",
                                ),
                                alt:
                                  null != (a = e.titleLogo.fields.description)
                                    ? a
                                    : "",
                                src: (0, f._c)(
                                  null == (l = e.titleLogo.fields.file)
                                    ? void 0
                                    : l.url,
                                ),
                              },
                              null != (i = e.slug) ? i : t,
                            )
                          );
                        }),
                      })
                    : (0, r.jsx)("h1", {
                        className:
                          "line-clamp-3 shrink-0 overflow-y-hidden text-5xl leading-[1.1] font-medium tracking-[-0.8px]",
                        children: l.title,
                      }),
                  l.shortDescription &&
                    (0, r.jsx)("p", {
                      className:
                        "mt-8 line-clamp-5 shrink-0 overflow-y-hidden leading-normal",
                      children: l.shortDescription,
                    }),
                  (0, r.jsx)(d(), {
                    href: "/products/"
                      .concat(
                        null == (t = l.category) ? void 0 : t.fields.slug,
                        "/",
                      )
                      .concat(l.slug),
                    className: "mt-10",
                    children: (0, r.jsx)(o.A, {
                      children: l.featuredProductButtonText,
                    }),
                  }),
                ],
              })
            );
          }
          function k(e) {
            let {
                tabs: t,
                products: l,
                featuredProductIndex: s,
                setFeaturedProductIndex: i,
              } = e,
              n = (0, h.useRouter)(),
              o = t
                .map((e) => ({
                  name: e.name,
                  value: "/products/".concat(e.slug),
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
            return (0, r.jsxs)("div", {
              className: "flex flex-col gap-y-7 px-6 pb-4 lg:px-12",
              children: [
                (0, r.jsx)("div", {
                  className: "mx-auto w-full lg:hidden",
                  children: (0, r.jsx)(p.A, {
                    rounded: !0,
                    placeholder: "New & Featured",
                    selected: "/products/".concat(
                      (() => {
                        let e = Array.isArray(n.query.category)
                          ? n.query.category[0]
                          : n.query.category;
                        return null != e ? e : "";
                      })(),
                    ),
                    items: o,
                    onSelect: (e) => {
                      n.asPath !== e && n.replace(e, "", { scroll: !1 });
                    },
                  }),
                }),
                (0, r.jsx)(A, { tabs: t }),
                (0, r.jsx)(g.A, {
                  images: l.map(a.r5H).map((e, t) => (0, f.pO)(e, t, !0)),
                  selectedImageIndex: s,
                  setSelectedImageIndex: i,
                }),
              ],
            });
          }
          function A(e) {
            let { tabs: t } = e,
              l = (0, h.useRouter)();
            return (0, r.jsxs)("div", {
              className: "hidden lg:block",
              children: [
                (0, r.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "w-full",
                  height: "2",
                  viewBox: "0 0 1344 2",
                  preserveAspectRatio: "none",
                  fill: "none",
                  children: (0, r.jsx)("path", {
                    d: "M0 1H1344",
                    stroke: "#FCF9ED",
                    opacity: "0.1",
                    strokeWidth: "1.5",
                  }),
                }),
                (0, r.jsxs)("div", {
                  className: "flex flex-row items-stretch gap-x-1.5",
                  children: [
                    (0, r.jsx)(S, {
                      isActive: "/products/featured" === l.asPath,
                      label: "New & Featured",
                      url: "/products/featured",
                    }),
                    t
                      .sort((e, t) => e.order - t.order)
                      .map((e) =>
                        (0, r.jsxs)(
                          u.Fragment,
                          {
                            children: [
                              (0, r.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-9",
                                width: "3",
                                viewBox: "0 0 2 33",
                                preserveAspectRatio: "none",
                                fill: "none",
                                children: (0, r.jsx)("path", {
                                  d: "M1 32.25L1 0.25",
                                  stroke: "#FCF9ED",
                                  opacity: "0.1",
                                  strokeWidth: "1.5",
                                }),
                              }),
                              (0, r.jsx)(S, {
                                isActive:
                                  l.asPath === "/products/".concat(e.slug),
                                label: e.name,
                                url: "/products/".concat(e.slug),
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
          function S(e) {
            let { label: t, isActive: l = !1, url: s } = e;
            return (0, r.jsxs)("div", {
              className: "flex w-full flex-col pt-1.5",
              children: [
                (0, r.jsx)(d(), {
                  scroll: !1,
                  href: s,
                  className: (0, x.cn)(
                    "py-4 text-center font-bold tracking-[1.6px] text-white/80 uppercase transition-colors",
                    "bg-white/5 text-white",
                    "hover:bg-white/10 hover:text-white hover:text-shadow-none",
                  ),
                  children: t,
                }),
                l &&
                  (0, r.jsx)("div", {
                    className: "relative -mt-1 h-1.5 w-full overflow-visible",
                    children: (0, r.jsx)(n(), {
                      fill: !0,
                      alt: "Selected tab indicator",
                      src: "/images/selected-tab-underline.svg",
                    }),
                  }),
              ],
            });
          }
          (([a, f] = b.then ? (await b)() : b), s());
        } catch (e) {
          s(e);
        }
      });
    },
    13776: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => d });
      var s = l(2183),
        r = l(36439),
        a = l(85414),
        i = l(95290),
        n = l(52464),
        o = l(11677),
        c = l.n(o);
      function d(e) {
        var t;
        let {
            items: l,
            selected: o,
            onSelect: d = () => {},
            placeholder: u = "Options",
            error: h,
            variant: x,
            rounded: p = !1,
          } = e,
          g = (e) => (e ? ("string" == typeof e ? e : e.name) : ""),
          f = (e) => {
            d("string" == typeof e ? e : e.value);
          };
        return (0, s.jsxs)(a.Menu, {
          as: "div",
          className: "relative inline-block w-full grow text-left",
          children: [
            (0, s.jsx)("div", {
              children: (0, s.jsxs)(a.Menu.Button, {
                className: (0, n.cn)(
                  "flex w-full items-center border-2 bg-white/20 px-3 py-4 backdrop-blur duration-200 outline-none",
                  h
                    ? "border-red-500/40 hover:border-red-500/70 focus:border-red-500/70"
                    : "dark" === x
                      ? "rounded-lg border-black/20 px-5 py-3 hover:border-black/40 focus:border-black/40"
                      : "border-gray-300/20 hover:border-white/50 focus:border-white",
                  "dark" === x ? "text-black" : "text-white",
                  p && "rounded-lg",
                ),
                children: [
                  o
                    ? "string" == typeof l[0]
                      ? o
                      : null == (t = l.find((e) => e.value === o))
                        ? void 0
                        : t.name
                    : u,
                  (0, s.jsx)("div", { className: "grow" }),
                  (0, s.jsx)(i.A, {
                    className: "".concat(
                      "dark" === x ? "text-black" : "text-yellow",
                      " -mr-1 h-6 w-6",
                    ),
                    "aria-hidden": "true",
                    color: "#E9BC6C",
                  }),
                ],
              }),
            }),
            (0, s.jsx)(a.Transition, {
              as: r.Fragment,
              enter: "transition ease-out duration-100",
              enterFrom: "transform opacity-0 scale-95",
              enterTo: "transform opacity-100 scale-100",
              leave: "transition ease-in duration-75",
              leaveFrom: "transform opacity-100 scale-100",
              leaveTo: "transform opacity-0 scale-95",
              children: (0, s.jsx)(a.Menu.Items, {
                className:
                  "absolute left-0 z-30 mt-2 max-h-60 w-full origin-top-right overflow-y-auto rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none",
                children: (0, s.jsx)("div", {
                  className: "py-1",
                  children: l.map((e) =>
                    (0, s.jsx)(
                      a.Menu.Item,
                      {
                        children: (t) => {
                          let { active: l } = t,
                            r = "string" != typeof e ? e.href : void 0,
                            a = (function () {
                              for (
                                var e = arguments.length, t = Array(e), l = 0;
                                l < e;
                                l++
                              )
                                t[l] = arguments[l];
                              return t.filter(Boolean).join(" ");
                            })(
                              l ? "bg-gray-100 text-gray-900" : "text-gray-700",
                              "block px-4 py-2 text-sm",
                            );
                          return r
                            ? (0, s.jsx)(c(), {
                                scroll: !1,
                                href: r,
                                onClick: () => f(e),
                                className: a,
                                children: g(e),
                              })
                            : (0, s.jsx)("button", {
                                type: "button",
                                onClick: () => f(e),
                                className: "w-full text-left ".concat(a),
                                children: g(e),
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
    20204: (e, t, l) => {
      "use strict";
      l.a(e, async (e, s) => {
        try {
          l.d(t, { A: () => f });
          var r = l(2183),
            a = l(75109),
            i = l(36439),
            n = l(96006),
            o = l.n(n),
            c = l(46956),
            d = l(11677),
            u = l.n(d),
            h = l(15711),
            x = l(92446),
            p = l(94536),
            g = e([a, x]);
          function f(e) {
            let { products: t, title: l, description: s, isHome: a } = e,
              [n, c] = (0, i.useState)(null);
            return (0, r.jsxs)("div", {
              className:
                "flex w-full flex-col items-stretch overflow-x-hidden py-10",
              children: [
                (0, r.jsxs)("div", {
                  className: a
                    ? "flex flex-col flex-wrap justify-between self-stretch px-8 pb-12 lg:flex-row lg:px-16"
                    : "flex w-full flex-col flex-wrap justify-between gap-y-8 px-6 pb-8 lg:flex-row lg:items-end lg:px-12 lg:pb-12",
                  children: [
                    a
                      ? (0, r.jsxs)("div", {
                          className:
                            "flex flex-col flex-wrap items-center gap-x-8 gap-y-4 pb-4 lg:flex-row lg:pb-0",
                          children: [
                            (0, r.jsx)("h2", {
                              className:
                                "text-4xl text-black sm:text-5xl lg:text-6xl",
                              children: l,
                            }),
                            (0, r.jsx)(u(), {
                              href: "/products/games",
                              children: (0, r.jsx)(h.A, {
                                variant: "dark",
                                children: "All Games",
                              }),
                            }),
                          ],
                        })
                      : (0, r.jsxs)("div", {
                          className:
                            "flex flex-col gap-y-4 text-center lg:gap-y-1 lg:text-left",
                          children: [
                            (0, r.jsx)("h2", {
                              className:
                                "text-3xl font-medium text-black lg:text-4xl",
                              children: l,
                            }),
                            (0, r.jsx)("p", {
                              className: "text-sm",
                              children: s,
                            }),
                          ],
                        }),
                    t.length > 0 &&
                      (0, r.jsxs)("div", {
                        className: "hidden gap-x-2 lg:flex",
                        children: [
                          (0, r.jsx)(o(), {
                            width: 48,
                            height: 48,
                            alt: "Left arrow",
                            src: "/images/arrow-button-left.svg",
                            className: "mr-2 cursor-pointer",
                            onClick: () => (null == n ? void 0 : n.slidePrev()),
                          }),
                          (0, r.jsx)(o(), {
                            width: 48,
                            height: 48,
                            alt: "Right arrow",
                            onClick: () => (null == n ? void 0 : n.slideNext()),
                            src: "/images/arrow-button-right.svg",
                            className: "cursor-pointer",
                          }),
                        ],
                      }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className: "px-8 lg:px-16",
                  children: (0, r.jsx)(p.RC, {
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
                      (0, r.jsx)(
                        p.qr,
                        {
                          className: "relative max-w-none shrink-0",
                          style: { width: 300 },
                          children: (0, r.jsx)(m, { product: e }),
                        },
                        e.slug,
                      ),
                    ),
                  }),
                }),
              ],
            });
          }
          function m(e) {
            var t, l, s, i, n, d, h, p;
            let { product: g } = e;
            return (0, r.jsx)("div", {
              className:
                "group aspect-[2/3] h-auto w-full cursor-pointer shadow-[0_10px_48px_-16px_rgba(0,0,0,1)]",
              children: (0, r.jsxs)(u(), {
                href: "/products/"
                  .concat(
                    null == (t = g.category) ? void 0 : t.fields.slug,
                    "/",
                  )
                  .concat(g.slug),
                children: [
                  (0, r.jsx)(o(), {
                    fill: !0,
                    alt:
                      null !=
                      (p =
                        null == (s = (0, a.a9f)(g)) ||
                        null == (l = s.fields.image)
                          ? void 0
                          : l.fields.description)
                        ? p
                        : "",
                    src: "".concat(
                      (0, x._c)(
                        null == (d = (0, a.a9f)(g)) ||
                          null == (n = d.fields.image) ||
                          null == (i = n.fields.file)
                          ? void 0
                          : i.url,
                      ),
                      "?fit=fill&w=300&h=450",
                    ),
                    className:
                      "absolute top-0 left-0 h-full w-auto object-cover",
                    sizes: "900px",
                  }),
                  (0, r.jsx)(o(), {
                    fill: !0,
                    alt: "game card overlay",
                    src: "/images/vertical-game-card-overlay.webp",
                    className: "object-contain object-[center_175%] opacity-80",
                    sizes: "900px",
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "absolute bottom-0 h-auto w-full px-4 pb-4 text-white group-hover:bottom-2",
                    style: { transition: "0.4s all ease" },
                    children: [
                      (0, r.jsx)("p", {
                        className: "text-xl font-bold",
                        children: g.title,
                      }),
                      (0, r.jsxs)("div", {
                        className: "relative my-2 h-[3px] w-full",
                        children: [
                          (0, r.jsx)("img", {
                            className:
                              "absolute top-0 left-0 h-full w-full object-fill opacity-100 group-hover:opacity-100",
                            src: "/images/product-divider.svg",
                            alt: "product divider",
                            style: { transition: "all 0.4s ease" },
                          }),
                          (0, r.jsx)("img", {
                            className:
                              "absolute top-0 left-0 h-full w-full object-fill opacity-0 group-hover:opacity-100",
                            alt: "product divider highlighted",
                            src: "/images/product-divider-highlighted.svg",
                            style: { transition: "all 0.4s ease" },
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [
                          (0, r.jsx)("p", {
                            className: "text-sm",
                            children: (0, c.Cp)(g.releaseDate),
                          }),
                          (0, r.jsx)("div", {
                            className: "flex gap-x-2",
                            children:
                              null == (h = g.ctaButtons)
                                ? void 0
                                : h.map((e, t) => {
                                    var l, s, a;
                                    return (0, r.jsx)(
                                      o(),
                                      {
                                        width: 16,
                                        height: 16,
                                        alt: "cta button",
                                        src: (0, x._c)(
                                          null == e ||
                                            null == (a = e.fields.ctaButton) ||
                                            null == (s = a.fields.icon) ||
                                            null == (l = s.fields.file)
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
                  (0, r.jsx)(o(), {
                    className:
                      "absolute bottom-4 left-4 opacity-0 group-hover:bottom-1 group-hover:left-1 group-hover:opacity-60",
                    width: 24,
                    height: 24,
                    alt: "bottom left bracket",
                    src: "/images/small-bottom-left-bracket.svg",
                    style: { transition: "0.4s all ease" },
                  }),
                  (0, r.jsx)(o(), {
                    className:
                      "absolute right-4 bottom-4 opacity-0 group-hover:right-1 group-hover:bottom-1 group-hover:opacity-60",
                    width: 24,
                    height: 24,
                    alt: "bottom right bracket",
                    src: "/images/small-bottom-right-bracket.svg",
                    style: { transition: "0.4s all ease" },
                  }),
                  (0, r.jsx)(o(), {
                    className:
                      "absolute top-4 left-4 opacity-0 group-hover:top-1 group-hover:left-1 group-hover:opacity-60",
                    width: 24,
                    height: 24,
                    alt: "top left bracket",
                    src: "/images/small-top-left-bracket.svg",
                    style: { transition: "0.4s all ease" },
                  }),
                  (0, r.jsx)(o(), {
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
          (([a, x] = g.then ? (await g)() : g), s());
        } catch (e) {
          s(e);
        }
      });
    },
    28092: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => d });
      var s = l(2183),
        r = l(96006),
        a = l.n(r),
        i = l(94536),
        n = l(36439);
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
      function c(e) {
        let { disableSwipe: t, selectedImageIndex: l } = e,
          s = (0, i.Mn)();
        return (
          (0, n.useEffect)(() => {
            s.allowTouchMove = !t;
          }, [t]),
          (0, n.useEffect)(() => {
            s.wrapperEl &&
              (t
                ? s.wrapperEl.classList.add("disabled")
                : s.wrapperEl.classList.remove("disabled"));
          }, [t, l]),
          null
        );
      }
      function d(e) {
        let {
            images: t,
            selectedImageIndex: l,
            setSelectedImageIndex: r,
            clipOverflow: a = !1,
            disableArrows: d = !1,
            disableSwipe: x = !1,
          } = e,
          p = o(),
          [g, f] = (0, n.useState)(null),
          m = (e) => {
            let l = e;
            (l >= t.length && (l = t.length - 1),
              l < 0 && (l = 0),
              r(l),
              null == g || g.slideTo(l));
          };
        return (
          (0, n.useEffect)(() => {
            (null == g ? void 0 : g.activeIndex) != l &&
              (null == g || g.slideTo(l));
          }, [l]),
          (0, s.jsxs)("div", {
            className: "relative w-full",
            children: [
              (0, s.jsx)("div", {
                className: a ? "overflow-hidden p-2" : "",
                children: (0, s.jsxs)(i.RC, {
                  spaceBetween: 16,
                  autoHeight: !0,
                  slidesPerView: "auto",
                  className: "swiper-show-overflow relative flex ",
                  onSwiper: (e) => f(e),
                  onSlideChange: (e) => m(e.activeIndex),
                  children: [
                    (0, s.jsx)(c, { disableSwipe: x, selectedImageIndex: l }),
                    t.map((e, t) =>
                      e
                        ? (0, s.jsx)(
                            i.qr,
                            {
                              className: "relative max-w-none shrink-0",
                              style: { width: p },
                              children: (0, s.jsx)(u, {
                                isActive: l === t,
                                altText: e.alt,
                                url: e.url,
                                onClick: () => m(t),
                                isVideo: e.isVideo,
                              }),
                            },
                            e.id,
                          )
                        : null,
                    ),
                    Array.from({ length: 10 }, (e, t) =>
                      (0, s.jsx)(
                        i.qr,
                        {
                          className: "relative max-w-none shrink-0",
                          style: { width: p },
                        },
                        t,
                      ),
                    ),
                  ],
                }),
              }),
              !d &&
                (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(h, { onClick: () => m(l - 1) }),
                    (0, s.jsx)(h, { onClick: () => m(l + 1), isRight: !0 }),
                  ],
                }),
            ],
          })
        );
      }
      function u(e) {
        let {
            altText: t,
            url: l,
            isActive: r = !1,
            onClick: i,
            isVideo: n = !1,
          } = e,
          c = o();
        return (0, s.jsxs)("div", {
          className: "relative aspect-video shrink-0 overflow-visible",
          style: { width: c },
          children: [
            (0, s.jsx)(a(), {
              fill: !0,
              alt: null != t ? t : "",
              src: null != l ? l : "",
              priority: !0,
              sizes: "(max-width: 768px) 25vw, (max-width: 1200px) 20vw, 15vw",
              className:
                "cursor-pointer object-cover object-center transition-all ".concat(
                  r ? "" : "brightness-[0.6] hover:brightness-100",
                ),
              onClick: i,
            }),
            n &&
              (0, s.jsx)("div", {
                className:
                  "pointer-events-none absolute inset-0 flex items-center justify-center",
                children: (0, s.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "40",
                  height: "40",
                  viewBox: "0 0 40 40",
                  className: "bg-[#272727]/75",
                  children: (0, s.jsx)("g", {
                    children: (0, s.jsx)("path", {
                      d: "M13.3335 31.5833V8.25L31.6668 19.9167L13.3335 31.5833Z",
                      fill: "#FCF9ED",
                    }),
                  }),
                }),
              }),
            r &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)(a(), {
                    height: 26,
                    width: 26,
                    alt: "Top left corner",
                    src: "/images/small-top-left-bracket.svg",
                    className: "absolute -left-1.5 -top-1.5",
                  }),
                  (0, s.jsx)(a(), {
                    height: 26,
                    width: 26,
                    alt: "Top right corner",
                    src: "/images/small-top-right-bracket.svg",
                    className: "absolute -right-1.5 -top-1.5",
                  }),
                  (0, s.jsx)(a(), {
                    height: 26,
                    width: 26,
                    alt: "Bottom left corner",
                    src: "/images/small-bottom-left-bracket.svg",
                    className: "absolute -bottom-1.5 -left-1.5",
                  }),
                  (0, s.jsx)(a(), {
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
      function h(e) {
        let { isRight: t = !1, onClick: l } = e;
        return (0, s.jsx)(a(), {
          width: 48,
          height: 48,
          alt: t ? "Right arrow" : "Left arrow",
          src: t
            ? "/images/arrow-button-opaque-right.svg"
            : "/images/arrow-button-opaque-left.svg",
          className:
            "absolute top-1/2 z-10 hidden -translate-y-1/2 cursor-pointer lg:block ".concat(
              t ? "-right-4" : "-left-4",
            ),
          onClick: l,
        });
      }
    },
    28872: (e, t, l) => {
      "use strict";
      e.exports = l(94528);
    },
    44394: (e, t, l) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/products/[category]",
        function () {
          return l(55699);
        },
      ]);
    },
    55699: (e, t, l) => {
      "use strict";
      l.a(e, async (e, s) => {
        try {
          (l.r(t), l.d(t, { __N_SSG: () => o, default: () => c }));
          var r = l(2183),
            a = l(91134),
            i = l(1906),
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
          function c(e) {
            let {
                categories: t,
                categorySlug: l,
                featuredProducts: s,
                subcategories: n,
                websiteSingleton: o,
                navItems: c,
                footerSocialLinks: u,
                surveys: h,
                signUpBanner: x,
              } = e,
              p = d[l];
            return (0, r.jsxs)(r.Fragment, {
              children: [
                p && (0, r.jsx)(a.A, { description: p }),
                (0, r.jsx)(i.A, {
                  categories: t,
                  galleryProducts: s,
                  productLists: n,
                  websiteSingleton: o,
                  navItems: c,
                  footerSocialLinks: u,
                  surveys: h,
                  signUpBanner: x,
                }),
              ],
            });
          }
          s();
        } catch (e) {
          s(e);
        }
      });
    },
    91134: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => i });
      var s = l(2183),
        r = l(14623),
        a = l.n(r);
      function i(e) {
        let { description: t } = e;
        return (0, s.jsxs)(a(), {
          children: [
            (0, s.jsx)(
              "meta",
              { name: "description", content: t },
              "description",
            ),
            (0, s.jsx)(
              "meta",
              { property: "og:description", content: t },
              "og:description",
            ),
            (0, s.jsx)(
              "meta",
              { name: "twitter:description", content: t },
              "twitter:description",
            ),
          ],
        });
      }
    },
    94528: (e, t, l) => {
      "use strict";
      var s = l(36439),
        r =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        a = s.useSyncExternalStore,
        i = s.useRef,
        n = s.useEffect,
        o = s.useMemo,
        c = s.useDebugValue;
      t.useSyncExternalStoreWithSelector = function (e, t, l, s, d) {
        var u = i(null);
        if (null === u.current) {
          var h = { hasValue: !1, value: null };
          u.current = h;
        } else h = u.current;
        var x = a(
          e,
          (u = o(
            function () {
              function e(e) {
                if (!n) {
                  if (
                    ((n = !0), (a = e), (e = s(e)), void 0 !== d && h.hasValue)
                  ) {
                    var t = h.value;
                    if (d(t, e)) return (i = t);
                  }
                  return (i = e);
                }
                if (((t = i), r(a, e))) return t;
                var l = s(e);
                return void 0 !== d && d(t, l)
                  ? ((a = e), t)
                  : ((a = e), (i = l));
              }
              var a,
                i,
                n = !1,
                o = void 0 === l ? null : l;
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
            [t, l, s, d],
          ))[0],
          u[1],
        );
        return (
          n(
            function () {
              ((h.hasValue = !0), (h.value = x));
            },
            [x],
          ),
          c(x),
          x
        );
      };
    },
    94734: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => i });
      var s = l(2183),
        r = l(96006),
        a = l.n(r);
      function i() {
        return (0, s.jsx)("div", {
          className:
            "pointer-events-none absolute bottom-0 left-0 w-full translate-y-1/4",
          children: (0, s.jsx)(a(), {
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
  (e) => {
    (e.O(
      0,
      [
        9950, 1446, 6006, 1433, 1329, 1089, 3492, 5216, 2446, 7137, 636, 6593,
        8792,
      ],
      () => e((e.s = 44394)),
    ),
      (_N_E = e.O()));
  },
]);
