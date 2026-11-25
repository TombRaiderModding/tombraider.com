"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7322],
  {
    4448: (e, t, l) => {
      l.a(e, async (e, s) => {
        try {
          l.d(t, { A: () => x });
          var a = l(2183),
            i = l(75109),
            r = l(36439),
            o = l(15013),
            n = l.n(o),
            c = l(68456),
            d = l(46728),
            p = l.n(d),
            h = l(64171),
            u = l(92642),
            g = l(94536),
            m = e([i, u]);
          function x(e) {
            let { products: t, title: l, description: s, isHome: i } = e,
              [o, c] = (0, r.useState)(null);
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
                            (0, a.jsx)("h2", {
                              className:
                                "text-4xl text-black sm:text-5xl lg:text-6xl",
                              children: l,
                            }),
                            (0, a.jsx)(p(), {
                              href: "/products/games",
                              children: (0, a.jsx)(h.A, {
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
                            (0, a.jsx)("h2", {
                              className:
                                "text-3xl font-medium text-black lg:text-4xl",
                              children: l,
                            }),
                            (0, a.jsx)("p", {
                              className: "text-sm",
                              children: s,
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
                            onClick: () => o?.slidePrev(),
                          }),
                          (0, a.jsx)(n(), {
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
                (0, a.jsx)("div", {
                  className: "px-8 lg:px-16",
                  children: (0, a.jsx)(g.RC, {
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
                        g.qr,
                        {
                          className: "relative max-w-none shrink-0",
                          style: { width: 300 },
                          children: (0, a.jsx)(f, { product: e }),
                        },
                        e.slug,
                      ),
                    ),
                  }),
                }),
              ],
            });
          }
          function f({ product: e }) {
            return (0, a.jsx)("div", {
              className:
                "group aspect-[2/3] h-auto w-full cursor-pointer shadow-[0_10px_48px_-16px_rgba(0,0,0,1)]",
              children: (0, a.jsxs)(p(), {
                href: `/products/${e.category?.fields.slug}/${e.slug}`,
                children: [
                  (0, a.jsx)(n(), {
                    fill: !0,
                    alt: (0, i.a9f)(e)?.fields.image?.fields.description ?? "",
                    src: `${(0, u._c)((0, i.a9f)(e)?.fields.image?.fields.file?.url)}?fit=fill&w=300&h=450`,
                    className:
                      "absolute top-0 left-0 h-full w-auto object-cover",
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
                        children: e.title,
                      }),
                      (0, a.jsxs)("div", {
                        className: "relative my-2 h-[3px] w-full",
                        children: [
                          (0, a.jsx)("img", {
                            className:
                              "absolute top-0 left-0 h-full w-full object-fill opacity-100 group-hover:opacity-100",
                            src: "/images/product-divider.svg",
                            alt: "product divider",
                            style: { transition: "all 0.4s ease" },
                          }),
                          (0, a.jsx)("img", {
                            className:
                              "absolute top-0 left-0 h-full w-full object-fill opacity-0 group-hover:opacity-100",
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
                            children: (0, c.Cp)(e.releaseDate),
                          }),
                          (0, a.jsx)("div", {
                            className: "flex gap-x-2",
                            children: e.ctaButtons?.map((e, t) =>
                              (0, a.jsx)(
                                n(),
                                {
                                  width: 16,
                                  height: 16,
                                  alt: "cta button",
                                  src: (0, u._c)(
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
                      "absolute right-4 bottom-4 opacity-0 group-hover:right-1 group-hover:bottom-1 group-hover:opacity-60",
                    width: 24,
                    height: 24,
                    alt: "bottom right bracket",
                    src: "/images/small-bottom-right-bracket.svg",
                    style: { transition: "0.4s all ease" },
                  }),
                  (0, a.jsx)(n(), {
                    className:
                      "absolute top-4 left-4 opacity-0 group-hover:top-1 group-hover:left-1 group-hover:opacity-60",
                    width: 24,
                    height: 24,
                    alt: "top left bracket",
                    src: "/images/small-top-left-bracket.svg",
                    style: { transition: "0.4s all ease" },
                  }),
                  (0, a.jsx)(n(), {
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
          (([i, u] = m.then ? (await m)() : m), s());
        } catch (e) {
          s(e);
        }
      });
    },
    20561: (e, t, l) => {
      l.d(t, { I: () => r });
      var s = l(2183);
      l(36439);
      var a = l(15013),
        i = l.n(a);
      function r({ src: e, alt: t, isActive: l = !1, isModal: a = !1 }) {
        return (0, s.jsxs)("div", {
          className: "group relative aspect-square w-full",
          children: [
            (0, s.jsx)("div", {
              className: "relative z-20 aspect-square w-full",
              children: (0, s.jsx)(i(), {
                src: e,
                alt: t,
                fill: !0,
                priority: !0,
                sizes: "(max-width: 1024px) 100vw, 50vw",
                className: "object-contain p-[2%] pt-[2.5%]",
              }),
            }),
            (0, s.jsx)(i(), {
              className:
                "pointer-events-none absolute inset-0 z-30 aspect-square object-cover",
              src: "/images/welcome/paper/square-paper-frame.png",
              alt: "A paper frame around the image",
              priority: !0,
              fill: !0,
              sizes: "(max-width: 1024px) 100vw, 50vw",
            }),
            (0, s.jsx)(i(), {
              className: "absolute inset-0 z-0 aspect-square object-cover",
              src: "/images/welcome/paper/square-paper-background.png",
              alt: "A paper background behind the image",
              priority: !0,
              fill: !0,
              sizes: "(max-width: 1024px) 100vw, 50vw",
            }),
            (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)(i(), {
                  className: `
            absolute -left-1.5 -top-1 transition-opacity duration-300
            ${l ? "opacity-100" : "opacity-0"}
            ${!a ? "group-hover:opacity-100" : ""}
          `,
                  width: 24,
                  height: 24,
                  alt: "top left bracket",
                  src: "/images/small-top-left-bracket.svg",
                }),
                (0, s.jsx)(i(), {
                  className: `
            absolute -right-1 -top-1 transition-opacity duration-300
            ${l ? "opacity-100" : "opacity-0"}
            ${!a ? "group-hover:opacity-100" : ""}
          `,
                  width: 24,
                  height: 24,
                  alt: "top right bracket",
                  src: "/images/small-top-right-bracket.svg",
                }),
                (0, s.jsx)(i(), {
                  className: `
            absolute -bottom-1 -left-1 transition-opacity duration-300
            ${l ? "opacity-100" : "opacity-0"}
            ${!a ? "group-hover:opacity-100" : ""}
          `,
                  width: 24,
                  height: 24,
                  alt: "bottom left bracket",
                  src: "/images/small-bottom-left-bracket.svg",
                }),
                (0, s.jsx)(i(), {
                  className: `
            absolute -bottom-1 -right-1.5 transition-opacity duration-300
            ${l ? "opacity-100" : "opacity-0"}
            ${!a ? "group-hover:opacity-100" : ""}
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
    27823: (e, t, l) => {
      l.d(t, { A: () => d });
      var s = l(41430),
        a = l(16890),
        i = l(23323),
        r = l(93551),
        o = l(3843),
        n = l(4124),
        c = l(12979);
      s.os.registerPlugin(
        a.L,
        i.Flip,
        r.ScrollTrigger,
        o.ScrollToPlugin,
        n.ScrollSmoother,
        c.SplitText,
      );
      let d = s.os;
    },
    72099: (e, t, l) => {
      l.a(e, async (e, s) => {
        try {
          l.d(t, { c: () => m });
          var a = l(2183),
            i = l(36439),
            r = l(15013),
            o = l.n(r),
            n = l(46728),
            c = l.n(n),
            d = l(92642),
            p = l(20561),
            h = l(16890),
            u = l(27823),
            g = e([d]);
          function m({
            isOpen: e,
            onClose: t,
            slide: l,
            onPrevSlide: s,
            onNextSlide: r,
            cta: n,
          }) {
            let g = (0, i.useRef)(null),
              [x, f] = (0, i.useState)(0),
              v = (0, i.useRef)(null);
            return ((0, h.L)(
              () => {
                if (
                  (v.current && (v.current.kill(), (v.current = null), f(0)),
                  e && l?.images && l.images.length > 1)
                ) {
                  v.current = u.A.timeline({ repeat: -1 });
                  let e = l.images.length;
                  for (let t = 0; t < e; t++) {
                    let l = (t + 1) % e;
                    v.current.to({}, { duration: 2, onComplete: () => f(l) });
                  }
                }
                return () => {
                  v.current && (v.current.kill(), (v.current = null));
                };
              },
              { dependencies: [e, l] },
            ),
            (0, h.L)(
              () => {
                if (g.current) {
                  let t = u.A.timeline();
                  e
                    ? ((document.body.style.overflow = "hidden"),
                      u.A.set(g.current, { display: "flex" }),
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
                        .set(g.current, { display: "none" }));
                }
              },
              { scope: g, dependencies: [e] },
            ),
            l)
              ? (0, a.jsxs)("div", {
                  ref: g,
                  className:
                    "fixed inset-0 z-[80] hidden justify-center lg:items-center",
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "modal-background bg-trueblack/70 absolute inset-0 opacity-0",
                      onClick: t,
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "modal-content relative mt-24 h-[calc(100svh-6rem)] w-full max-w-6xl translate-y-12 bg-black opacity-0 lg:mx-20 lg:mt-0 lg:h-auto",
                      children: [
                        (0, a.jsx)("button", {
                          onClick: t,
                          className:
                            "group border-darkgray-500 bg-darkgray-200 fixed right-3 bottom-3 z-10 flex size-11 items-center justify-center rounded-full border-2 lg:absolute lg:top-10 lg:right-10",
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
                                  l.images && l.images.length > 1
                                    ? l.images.map((e, t) =>
                                        (0, a.jsx)(
                                          "div",
                                          {
                                            className: `absolute inset-0 transition-opacity duration-500 ${t === x ? "opacity-100" : "opacity-0"}`,
                                            children: (0, a.jsx)(p.I, {
                                              src: (0, d._c)(
                                                e?.fields.file?.url,
                                              ),
                                              alt: e?.fields.description || "",
                                              isModal: !0,
                                            }),
                                          },
                                          e?.sys.id,
                                        ),
                                      )
                                    : (0, a.jsx)(p.I, {
                                        src: (0, d._c)(
                                          l.images[0]?.fields.file?.url,
                                        ),
                                        alt:
                                          l.images[0]?.fields.description || "",
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
                                      children: l.name,
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "flex gap-4",
                                      children: [
                                        (0, a.jsx)("div", {
                                          className:
                                            "-left-16 z-10 flex size-12 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-yellow-300 opacity-75 transition hover:opacity-100 lg:absolute lg:top-1/2 lg:-translate-y-1/2",
                                          onClick: (e) => {
                                            (e.stopPropagation(), s());
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
                                            (e.stopPropagation(), r());
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
                                  children: l.description,
                                }),
                                (0, a.jsx)(o(), {
                                  width: 369,
                                  height: 3,
                                  src: "/images/welcome/lines/modal-line.svg",
                                  alt: "A streak of gray underneath the item description",
                                  className: "w-full py-6",
                                }),
                                n &&
                                  (0, a.jsx)(c(), {
                                    href: n.href,
                                    className:
                                      "self-start rounded-sm bg-[#c9a227] px-[26px] py-3.5 text-xs leading-none font-bold tracking-[0.18em] text-black uppercase transition duration-200 hover:-translate-y-px hover:bg-[#e8d5a0]",
                                    children: n.label,
                                  }),
                                l.appearsIn &&
                                  l.appearsIn.length > 0 &&
                                  (0, a.jsxs)("div", {
                                    children: [
                                      (0, a.jsx)("h3", {
                                        className: "mb-2 font-bold",
                                        children: "Appears in:",
                                      }),
                                      l.appearsIn.map((e, t) =>
                                        (0, a.jsxs)(
                                          i.Fragment,
                                          {
                                            children: [
                                              (0, a.jsx)("a", {
                                                href: `/products/${e?.fields.category?.fields.slug}/${e?.fields.slug}`,
                                                target: "_blank",
                                                className:
                                                  "appears-in-link underline hover:text-yellow-300",
                                                children: e?.fields.title,
                                              }),
                                              t <
                                                (l.appearsIn?.length ?? 0) -
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
          ((d = (g.then ? (await g)() : g)[0]), s());
        } catch (e) {
          s(e);
        }
      });
    },
    72599: (e, t, l) => {
      l.a(e, async (e, s) => {
        try {
          l.d(t, { A: () => x, T: () => f });
          var a = l(2183),
            i = l(36439),
            r = l(15013),
            o = l.n(r),
            n = l(27823),
            c = l(16890),
            d = l(92642),
            p = l(94536),
            h = l(63308),
            u = l(72099),
            g = l(20561),
            m = e([d, u]);
          function x({ slides: e }) {
            let [t, l] = (0, i.useState)(!1),
              [s, r] = (0, i.useState)(0),
              o = (0, i.useRef)(null),
              d = (0, i.useRef)(null),
              g = (0, i.useRef)(null),
              m = (0, i.useRef)(null);
            return (
              (0, i.useEffect)(() => {
                let e = document.body,
                  l = [g.current, m.current];
                return (
                  t
                    ? ((e.style.overflow = "hidden"),
                      (e.style.height = "100vh"),
                      (e.style.touchAction = "none"),
                      l.forEach((e) => {
                        e && n.A.to(e, { opacity: 0, duration: 0.3 });
                      }))
                    : ((e.style.overflow = ""),
                      (e.style.height = ""),
                      (e.style.touchAction = ""),
                      l.forEach((e) => {
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
              (0, a.jsxs)("section", {
                ref: o,
                "aria-label": "Lara Croft's equipment",
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
                      e.length > 0 &&
                        (0, a.jsx)(p.RC, {
                          ref: d,
                          spaceBetween: 10,
                          slidesPerView: 1.75,
                          centeredSlides: !0,
                          loop: !0,
                          modules: [h.Vx],
                          navigation: {
                            prevEl: "#equipment-prev",
                            nextEl: "#equipment-next",
                          },
                          onSlideChange: (e) => {
                            r(e.realIndex);
                          },
                          breakpoints: {
                            768: { slidesPerView: 3 },
                            1024: { centeredSlides: !1, slidesPerView: 5 },
                          },
                          children: e.map((e, t) =>
                            (0, a.jsx)(
                              p.qr,
                              {
                                onClick: () => {
                                  (r(t), l(!0));
                                },
                                className: "p-1",
                                children: (0, a.jsx)(f, {
                                  slide: e,
                                  index: t,
                                  selectedIndex: s,
                                  onMouseEnter: () => {
                                    r(t);
                                  },
                                }),
                              },
                              t,
                            ),
                          ),
                        }),
                      (0, a.jsx)("div", {
                        ref: m,
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
                  (0, a.jsx)(u.c, {
                    isOpen: t,
                    onClose: () => l(!1),
                    slide: e[s],
                    onPrevSlide: () => {
                      0 === s ? r(e.length - 1) : r(s - 1);
                    },
                    onNextSlide: () => {
                      s === e.length - 1 ? r(0) : r(s + 1);
                    },
                  }),
                ],
              })
            );
          }
          function f({
            slide: e,
            index: t,
            selectedIndex: l,
            onMouseEnter: s,
          }) {
            let i =
                e.images && e.images[0]
                  ? (0, d._c)(e.images[0].fields.file?.url)
                  : "",
              r = e.images && e.images[0]?.fields.description;
            return (0, a.jsxs)("div", {
              className:
                "equipment-slide group relative p-1 will-change-transform",
              onMouseEnter: () => s(t),
              children: [
                (0, a.jsxs)("div", {
                  className: `relative aspect-square w-full cursor-pointer transition will-change-transform group-hover:rotate-0 ${t !== l ? (t % 2 == 0 ? "rotate-2" : t % 2 == 1 ? "-rotate-2" : "") : ""}`,
                  children: [
                    (0, a.jsx)(g.I, {
                      src: i,
                      alt: r ?? "",
                      isActive: t === l,
                    }),
                    (0, a.jsx)("div", {
                      className: `pointer-events-none absolute top-0 left-0 z-30 h-full w-full bg-black transition ${t !== l ? "opacity-50 group-hover:opacity-0" : "opacity-0"} `,
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: `${t !== l ? "opacity-0" : "opacity-100"} mt-6 flex flex-col items-center opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100`,
                  children: [
                    (0, a.jsx)("h2", {
                      className:
                        "selected-item-name w-[calc(100%+2rem)] text-center text-2xl font-bold text-nowrap text-white lg:text-wrap",
                      children: e.name,
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
          (([d, u] = m.then ? (await m)() : m), s());
        } catch (e) {
          s(e);
        }
      });
    },
  },
]);
