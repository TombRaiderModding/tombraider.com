(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4677],
  {
    1780: (e, t, l) => {
      "use strict";
      l.a(e, async (e, a) => {
        try {
          l.d(t, { x: () => p });
          var r = l(2183),
            s = l(36439),
            i = l(96006),
            n = l.n(i),
            o = l(92446),
            c = l(16890),
            d = l(26947),
            u = l(3717),
            m = e([o]);
          function p(e) {
            var t, l, a;
            let { isOpen: i, onClose: m, slide: p } = e,
              h = (0, s.useRef)(null),
              [g, f] = (0, s.useState)(1),
              x = (0, s.useRef)(null),
              v =
                null == p
                  ? void 0
                  : p.description
                      .split("\n")
                      .map((e, t) =>
                        (0, r.jsxs)(
                          s.Fragment,
                          {
                            children: [
                              e,
                              t < p.description.split("\n").length - 1 &&
                                (0, r.jsx)("br", {}),
                            ],
                          },
                          t,
                        ),
                      );
            return ((0, c.L)(
              () => {
                if (
                  (x.current && (x.current.kill(), (x.current = null), f(1)),
                  i && (null == p ? void 0 : p.images) && p.images.length > 2)
                ) {
                  x.current = d.A.timeline({ repeat: -1 });
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
              { dependencies: [i, p] },
            ),
            (0, c.L)(
              () => {
                if (h.current) {
                  let e = d.A.timeline();
                  i
                    ? ((document.body.style.overflow = "hidden"),
                      d.A.set(h.current, { display: "flex" }),
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
              { scope: h, dependencies: [i] },
            ),
            p)
              ? (0, r.jsxs)("div", {
                  ref: h,
                  className:
                    "fixed inset-0 z-[80] hidden justify-center lg:items-center",
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "modal-background absolute inset-0 bg-trueblack/70 opacity-0",
                      onClick: m,
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "modal-content relative mt-24 h-[calc(100svh-6rem)] w-full max-w-6xl translate-y-12 bg-black opacity-0 lg:mx-20 lg:mt-0 lg:h-auto",
                      children: [
                        (0, r.jsx)("button", {
                          onClick: m,
                          className:
                            "group fixed bottom-3 right-3 z-10 flex size-11 items-center justify-center rounded-full border-2 border-darkgray-500 bg-darkgray-200 lg:absolute lg:right-10 lg:top-10",
                          children: (0, r.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            height: "40px",
                            viewBox: "0 -960 960 960",
                            width: "40px",
                            className:
                              "fill-white transition-transform duration-300 group-hover:rotate-90 group-hover:fill-yellow-300",
                            children: (0, r.jsx)("path", {
                              d: "m253.9-229.79-24.11-24.11L455.9-480 229.79-706.1l24.11-24.11L480-504.1l226.1-226.11 24.11 24.11L504.1-480l226.11 226.1-24.11 24.11L480-455.9 253.9-229.79Z",
                            }),
                          }),
                        }),
                        (0, r.jsxs)("div", {
                          className:
                            "flex h-full flex-col gap-4 overflow-auto p-4 lg:flex-row lg:gap-12 lg:p-14",
                          children: [
                            (0, r.jsx)("div", {
                              className:
                                "mx-auto mb-6 flex w-full max-w-lg items-center justify-center lg:mb-0 lg:w-2/5 lg:max-w-none",
                              children: (0, r.jsx)("div", {
                                className:
                                  "group relative aspect-square w-full",
                                children:
                                  p.images && p.images.length > 1
                                    ? p.images.map((e, t) => {
                                        var l;
                                        return (0, r.jsx)(
                                          "div",
                                          {
                                            className:
                                              "absolute inset-0 transition-opacity duration-500 ".concat(
                                                t === g
                                                  ? "opacity-100"
                                                  : "opacity-0",
                                              ),
                                            children: (0, r.jsx)(u.I, {
                                              src: (0, o._c)(
                                                null == e ||
                                                  null == (l = e.fields.file)
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
                                    : (0, r.jsx)(u.I, {
                                        src: (0, o._c)(
                                          null == (l = p.images[0]) ||
                                            null == (t = l.fields.file)
                                            ? void 0
                                            : t.url,
                                        ),
                                        alt:
                                          (null == (a = p.images[0])
                                            ? void 0
                                            : a.fields.description) || "",
                                        isModal: !0,
                                      }),
                              }),
                            }),
                            (0, r.jsxs)("div", {
                              className:
                                "mx-auto flex w-full max-w-lg flex-col pb-20 lg:w-3/5 lg:max-w-none lg:justify-center lg:pb-0",
                              children: [
                                (0, r.jsxs)("div", {
                                  className: "mb-4 flex justify-between",
                                  children: [
                                    (0, r.jsx)("h2", {
                                      className: "text-[2rem] font-bold",
                                      children: p.name,
                                    }),
                                    (0, r.jsxs)("div", {
                                      className: "flex gap-4",
                                      children: [
                                        (0, r.jsx)("div", {
                                          className:
                                            "-left-16 z-10 flex size-12 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-yellow-300 opacity-75 transition hover:opacity-100 lg:absolute lg:top-1/2 lg:-translate-y-1/2",
                                          id: "character-prev",
                                          children: (0, r.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            height: "24px",
                                            viewBox: "0 -960 960 960",
                                            width: "24px",
                                            fill: "#FFFFFF",
                                            children: (0, r.jsx)("path", {
                                              d: "m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z",
                                            }),
                                          }),
                                        }),
                                        (0, r.jsx)("div", {
                                          className:
                                            "-right-16 z-10 flex size-12 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-yellow-300 opacity-75 transition hover:opacity-100 lg:absolute lg:top-1/2 lg:-translate-y-1/2",
                                          id: "character-next",
                                          children: (0, r.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            height: "24px",
                                            viewBox: "0 -960 960 960",
                                            width: "24px",
                                            fill: "#FFFFFF",
                                            children: (0, r.jsx)("path", {
                                              d: "M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, r.jsx)("p", {
                                  className: "text-lg",
                                  children: v,
                                }),
                                (0, r.jsx)(n(), {
                                  width: 369,
                                  height: 3,
                                  src: "/images/welcome/lines/modal-line.svg",
                                  alt: "A streak of gray underneath the character description",
                                  className: "w-full py-6",
                                }),
                                p.appearsIn &&
                                  p.appearsIn.length > 0 &&
                                  (0, r.jsxs)("div", {
                                    children: [
                                      (0, r.jsx)("h3", {
                                        className: "mb-2 font-bold",
                                        children: "Appears in:",
                                      }),
                                      p.appearsIn.map((e, t) => {
                                        var l, a, i;
                                        return (0, r.jsxs)(
                                          s.Fragment,
                                          {
                                            children: [
                                              (0, r.jsx)("a", {
                                                href: "/products/"
                                                  .concat(
                                                    null == e ||
                                                      null ==
                                                        (l = e.fields.category)
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
                                                (null !=
                                                (i =
                                                  null == (a = p.appearsIn)
                                                    ? void 0
                                                    : a.length)
                                                  ? i
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
                            (0, r.jsx)("div", {
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
          ((o = (m.then ? (await m)() : m)[0]), a());
        } catch (e) {
          a(e);
        }
      });
    },
    3717: (e, t, l) => {
      "use strict";
      l.d(t, { I: () => i });
      var a = l(2183);
      l(36439);
      var r = l(96006),
        s = l.n(r);
      function i(e) {
        let { src: t, alt: l, isActive: r = !1, isModal: i = !1 } = e;
        return (0, a.jsxs)("div", {
          className: "group relative aspect-square w-full",
          children: [
            (0, a.jsx)("div", {
              className: "relative z-20 aspect-square w-full",
              children: (0, a.jsx)(s(), {
                src: t,
                alt: l,
                fill: !0,
                priority: !0,
                sizes: "(max-width: 1024px) 100vw, 50vw",
                className: "object-contain p-[2%] pt-[2.5%]",
              }),
            }),
            (0, a.jsx)(s(), {
              className:
                "pointer-events-none absolute inset-0 z-30 aspect-square object-cover",
              src: "/images/welcome/paper/square-paper-frame.png",
              alt: "A paper frame around the image",
              priority: !0,
              fill: !0,
              sizes: "(max-width: 1024px) 100vw, 50vw",
            }),
            (0, a.jsx)(s(), {
              className: "absolute inset-0 z-0 aspect-square object-cover",
              src: "/images/welcome/paper/square-paper-background.png",
              alt: "A paper background behind the image",
              priority: !0,
              fill: !0,
              sizes: "(max-width: 1024px) 100vw, 50vw",
            }),
            (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(s(), {
                  className:
                    "\n            absolute -left-1.5 -top-1 transition-opacity duration-300\n            "
                      .concat(r ? "opacity-100" : "opacity-0", "\n            ")
                      .concat(
                        i ? "" : "group-hover:opacity-100",
                        "\n          ",
                      ),
                  width: 24,
                  height: 24,
                  alt: "top left bracket",
                  src: "/images/small-top-left-bracket.svg",
                }),
                (0, a.jsx)(s(), {
                  className:
                    "\n            absolute -right-1 -top-1 transition-opacity duration-300\n            "
                      .concat(r ? "opacity-100" : "opacity-0", "\n            ")
                      .concat(
                        i ? "" : "group-hover:opacity-100",
                        "\n          ",
                      ),
                  width: 24,
                  height: 24,
                  alt: "top right bracket",
                  src: "/images/small-top-right-bracket.svg",
                }),
                (0, a.jsx)(s(), {
                  className:
                    "\n            absolute -bottom-1 -left-1 transition-opacity duration-300\n            "
                      .concat(r ? "opacity-100" : "opacity-0", "\n            ")
                      .concat(
                        i ? "" : "group-hover:opacity-100",
                        "\n          ",
                      ),
                  width: 24,
                  height: 24,
                  alt: "bottom left bracket",
                  src: "/images/small-bottom-left-bracket.svg",
                }),
                (0, a.jsx)(s(), {
                  className:
                    "\n            absolute -bottom-1 -right-1.5 transition-opacity duration-300\n            "
                      .concat(r ? "opacity-100" : "opacity-0", "\n            ")
                      .concat(
                        i ? "" : "group-hover:opacity-100",
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
    5973: (e, t, l) => {
      "use strict";
      l.a(e, async (e, a) => {
        try {
          l.d(t, { A: () => g });
          var r = l(2183),
            s = l(36439),
            i = l(26947),
            n = l(12979),
            o = l(16890),
            c = l(96006),
            d = l.n(c),
            u = l(8411),
            m = l(80707),
            p = l.n(m),
            h = e([u]);
          function g(e) {
            var t, l, a, c, m, h, g, f, x;
            let { welcomePage: v } = e,
              y = (0, s.useRef)(null),
              w = (0, s.useRef)(null),
              b = (0, s.useRef)(null),
              j = (0, s.useRef)(null),
              N = (0, s.useRef)(null),
              k = p().compact(
                null !=
                  (x =
                    null == (t = v.sliderItems)
                      ? void 0
                      : t.map((e) => (null == e ? void 0 : e.fields)))
                  ? x
                  : [],
              ),
              A = (
                null == (c = v.meetLaraCroftImage) ||
                null == (a = c.fields) ||
                null == (l = a.file)
                  ? void 0
                  : l.url
              )
                ? "https:".concat(v.meetLaraCroftImage.fields.file.url)
                : "/images/welcome/Lara-Croft-Hero.png",
              P =
                (null == (h = v.meetLaraCroftImage) || null == (m = h.fields)
                  ? void 0
                  : m.description) ||
                (null == (f = v.meetLaraCroftImage) || null == (g = f.fields)
                  ? void 0
                  : g.title) ||
                "Lara Croft, ready for action.";
            (0, o.L)(
              () => {
                let e = w.current,
                  t = b.current,
                  l = j.current,
                  a = N.current,
                  r = null == a ? void 0 : a.clientWidth;
                (i.A.timeline({
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
                  i.A.to(".transition-leaves", {
                    scrollTrigger: {
                      trigger: e,
                      start: "top bottom",
                      end: "bottom top",
                      scrub: 0.5,
                    },
                    yPercent: -35,
                  }));
                let s = new n.SplitText(".heading-text", { type: "words" });
                (i.A.timeline({
                  scrollTrigger: { trigger: l, start: "center bottom" },
                })
                  .set(".heading-underline .streak", { width: r })
                  .fromTo(
                    s.words,
                    { yPercent: 100, opacity: 0 },
                    { duration: 0.5, yPercent: 0, opacity: 1, stagger: 0.2 },
                  )
                  .fromTo(
                    ".heading-underline",
                    { width: 0 },
                    { width: r, duration: 0.5 },
                    "<+=0.6",
                  )
                  .fromTo(
                    ".meet-lara-description",
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8 },
                    "<+=0.2",
                  ),
                  i.A.timeline({
                    scrollTrigger: {
                      trigger: ".lara-main-image",
                      start: "top bottom",
                      end: "25% center",
                      scrub: 1,
                    },
                  })
                    .fromTo(
                      ".lara-main-image",
                      { scale: 0.6, opacity: 0.2 },
                      {
                        scale: 1,
                        opacity: 1,
                        onComplete: () => {
                          i.A.to(".topographic-lines", {
                            opacity: 1,
                            duration: 4,
                          });
                        },
                      },
                    )
                    .fromTo(
                      y.current,
                      { backgroundColor: "black" },
                      { backgroundColor: "rgb(18 18 18)" },
                      "<",
                    ));
              },
              { scope: y },
            );
            let S = v.meetLaraCroftDescription
              .split("\n")
              .map((e, t) =>
                (0, r.jsxs)(
                  s.Fragment,
                  {
                    children: [
                      e,
                      t < v.meetLaraCroftDescription.split("\n").length - 1 &&
                        (0, r.jsx)("br", {}),
                    ],
                  },
                  t,
                ),
              );
            return (0, r.jsxs)("section", {
              ref: y,
              "aria-label": "Meet Lara Croft",
              className: "relative pt-40 pb-40 lg:pt-96",
              children: [
                (0, r.jsxs)("div", {
                  id: "meet-lara-scroll-target",
                  className: "mx-auto max-w-7xl",
                  children: [
                    (0, r.jsxs)("div", {
                      className:
                        "relative z-30 mb-12 flex flex-col items-center gap-8 px-6 lg:mb-6 lg:flex-row",
                      children: [
                        (0, r.jsx)("div", {
                          className:
                            "lara-main-image -mb-28 aspect-[3/4] w-full flex-shrink-0 will-change-transform md:-mb-36 lg:mb-0 lg:w-1/2",
                          children: (0, r.jsx)(d(), {
                            fill: !0,
                            alt: P,
                            src: A,
                            className:
                              "mx-auto max-h-[750px] w-auto object-contain lg:max-h-none",
                            priority: !0,
                          }),
                        }),
                        (0, r.jsxs)("div", {
                          ref: j,
                          children: [
                            (0, r.jsx)("div", {
                              className: "mb-6",
                              children: (0, r.jsxs)("div", {
                                ref: N,
                                className: "inline-block",
                                children: [
                                  (0, r.jsx)("h1", {
                                    className:
                                      "heading-text pb-2 text-5xl leading-[1.1] font-bold",
                                    children: v.meetLaraCroftHeadline,
                                  }),
                                  (0, r.jsx)("div", {
                                    className:
                                      "heading-underline relative h-3 w-0 overflow-hidden",
                                    children: (0, r.jsx)(d(), {
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
                            (0, r.jsx)("div", {
                              className:
                                "meet-lara-description max-w-3xl text-lg will-change-transform lg:max-w-none",
                              children: S,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsx)(u.A, { slides: k }),
                  ],
                }),
                (0, r.jsx)("div", {
                  ref: w,
                  className:
                    "pointer-events-none absolute top-0 left-0 z-20 w-full -translate-y-1/4 will-change-transform",
                  children: (0, r.jsx)(d(), {
                    width: 1920,
                    height: 1403,
                    alt: "Verdant jungle foliage teems with life, from broad leaves to delicate fronds, highlighted by a cluster of vibrant orange flowers.",
                    src: "/images/transitions/Transition_1.webp",
                    className: "transition-leaves w-full",
                    priority: !0,
                  }),
                }),
                (0, r.jsx)("div", {
                  className:
                    "left-leaves pointer-events-none absolute top-0 left-0 z-50 w-full -translate-x-1/3 will-change-transform lg:w-4/5",
                  children: (0, r.jsx)(d(), {
                    width: 1286,
                    height: 857,
                    alt: "jungle leaves on the left",
                    src: "/images/side-leaves.png",
                    className: "w-full",
                    priority: !0,
                  }),
                }),
                (0, r.jsx)("div", {
                  ref: b,
                  className:
                    "right-leaves pointer-events-none absolute top-0 right-0 z-50 w-full translate-x-1/3 will-change-transform lg:w-4/5",
                  children: (0, r.jsx)(d(), {
                    width: 1286,
                    height: 857,
                    alt: "jungle leaves on the right",
                    src: "/images/side-leaves.png",
                    className: "w-full",
                    priority: !0,
                  }),
                }),
                (0, r.jsx)("div", {
                  style: { opacity: 0 },
                  className:
                    "topographic-lines pointer-events-none absolute right-0 bottom-0 w-screen lg:w-4/5",
                  children: (0, r.jsx)(d(), {
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
          ((u = (h.then ? (await h)() : h)[0]), a());
        } catch (e) {
          a(e);
        }
      });
    },
    8411: (e, t, l) => {
      "use strict";
      l.a(e, async (e, a) => {
        try {
          l.d(t, { A: () => f });
          var r = l(2183),
            s = l(36439),
            i = l(96006),
            n = l.n(i),
            o = l(26947),
            c = l(16890),
            d = l(92446),
            u = l(94536),
            m = l(63308),
            p = l(92279),
            h = l(3717),
            g = e([d, p]);
          function f(e) {
            let { slides: t } = e,
              [l, a] = (0, s.useState)(!1),
              [i, n] = (0, s.useState)(0),
              d = (0, s.useRef)(null),
              h = (0, s.useRef)(null),
              g = (0, s.useRef)(null),
              f = (0, s.useRef)(null);
            return (
              (0, s.useEffect)(() => {
                let e = document.body,
                  t = [g.current, f.current];
                return (
                  l
                    ? ((e.style.overflow = "hidden"),
                      (e.style.height = "100vh"),
                      (e.style.touchAction = "none"),
                      t.forEach((e) => {
                        e && o.A.to(e, { opacity: 0, duration: 0.3 });
                      }))
                    : ((e.style.overflow = ""),
                      (e.style.height = ""),
                      (e.style.touchAction = ""),
                      t.forEach((e) => {
                        e && o.A.to(e, { opacity: 1, duration: 0.3 });
                      })),
                  () => {
                    ((e.style.overflow = ""),
                      (e.style.height = ""),
                      (e.style.touchAction = ""));
                  }
                );
              }, [l]),
              (0, c.L)(
                () => {
                  let e = d.current;
                  o.A.timeline({
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
                { scope: d },
              ),
              (0, r.jsxs)("section", {
                ref: d,
                "aria-label": "Lara Croft's equipment",
                children: [
                  (0, r.jsxs)("div", {
                    className: "flex items-center md:gap-5 md:px-6",
                    children: [
                      (0, r.jsx)("div", {
                        ref: g,
                        className: "slider-arrow",
                        children: (0, r.jsx)("div", {
                          className:
                            "hidden size-12 flex-none -translate-y-full cursor-pointer items-center justify-center rounded-full border-[1.5px] border-yellow-300 opacity-75 transition hover:opacity-100 md:flex",
                          id: "equipment-prev",
                          children: (0, r.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            height: "24px",
                            viewBox: "0 -960 960 960",
                            width: "24px",
                            fill: "#FFFFFF",
                            children: (0, r.jsx)("path", {
                              d: "m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z",
                            }),
                          }),
                        }),
                      }),
                      t.length > 0 &&
                        (0, r.jsx)(u.RC, {
                          ref: h,
                          spaceBetween: 10,
                          slidesPerView: 1.75,
                          centeredSlides: !0,
                          loop: !0,
                          modules: [m.Vx],
                          navigation: {
                            prevEl: "#equipment-prev",
                            nextEl: "#equipment-next",
                          },
                          onSlideChange: (e) => {
                            n(e.realIndex);
                          },
                          breakpoints: {
                            768: { slidesPerView: 3 },
                            1024: { centeredSlides: !1, slidesPerView: 5 },
                          },
                          children: t.map((e, t) =>
                            (0, r.jsx)(
                              u.qr,
                              {
                                onClick: () => {
                                  (n(t), a(!0));
                                },
                                className: "p-1",
                                children: (0, r.jsx)(x, {
                                  slide: e,
                                  index: t,
                                  selectedIndex: i,
                                  onMouseEnter: () => {
                                    n(t);
                                  },
                                }),
                              },
                              t,
                            ),
                          ),
                        }),
                      (0, r.jsx)("div", {
                        ref: f,
                        className: "slider-arrow",
                        children: (0, r.jsx)("div", {
                          className:
                            "hidden size-12 flex-none -translate-y-full cursor-pointer items-center justify-center rounded-full border-[1.5px] border-yellow-300 opacity-75 transition hover:opacity-100 md:flex",
                          id: "equipment-next",
                          children: (0, r.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            height: "24px",
                            viewBox: "0 -960 960 960",
                            width: "24px",
                            fill: "#FFFFFF",
                            children: (0, r.jsx)("path", {
                              d: "M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z",
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsx)(p.c, {
                    isOpen: l,
                    onClose: () => a(!1),
                    slide: t[i],
                    onPrevSlide: () => {
                      0 === i ? n(t.length - 1) : n(i - 1);
                    },
                    onNextSlide: () => {
                      i === t.length - 1 ? n(0) : n(i + 1);
                    },
                  }),
                ],
              })
            );
          }
          function x(e) {
            var t, l;
            let { slide: a, index: s, selectedIndex: i, onMouseEnter: o } = e,
              c =
                a.images && a.images[0]
                  ? (0, d._c)(
                      null == (t = a.images[0].fields.file) ? void 0 : t.url,
                    )
                  : "",
              u =
                a.images &&
                (null == (l = a.images[0]) ? void 0 : l.fields.description);
            return (0, r.jsxs)("div", {
              className:
                "equipment-slide group relative p-1 will-change-transform",
              onMouseEnter: () => o(s),
              children: [
                (0, r.jsxs)("div", {
                  className:
                    "relative aspect-square w-full cursor-pointer transition will-change-transform group-hover:rotate-0 ".concat(
                      s !== i
                        ? s % 2 == 0
                          ? "rotate-2"
                          : s % 2 == 1
                            ? "-rotate-2"
                            : ""
                        : "",
                    ),
                  children: [
                    (0, r.jsx)(h.I, {
                      src: c,
                      alt: null != u ? u : "",
                      isActive: s === i,
                    }),
                    (0, r.jsx)("div", {
                      className:
                        "pointer-events-none absolute top-0 left-0 z-30 h-full w-full bg-black transition ".concat(
                          s !== i
                            ? "opacity-50 group-hover:opacity-0"
                            : "opacity-0",
                          " ",
                        ),
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "".concat(
                    s !== i ? "opacity-0" : "opacity-100",
                    " mt-6 flex flex-col items-center opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100",
                  ),
                  children: [
                    (0, r.jsx)("h2", {
                      className:
                        "selected-item-name w-[calc(100%+2rem)] text-center text-2xl font-bold text-nowrap text-white lg:text-wrap",
                      children: a.name,
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "flex flex-col transition-opacity duration-300 group-hover:opacity-100 lg:opacity-0",
                      children: [
                        (0, r.jsx)("button", {
                          type: "button",
                          className:
                            "p-1 text-sm font-bold hover:text-yellow-300",
                          children: "Learn More",
                        }),
                        (0, r.jsx)("div", {
                          className:
                            "relative h-1 overflow-hidden transition-all delay-100 duration-300 lg:w-0 lg:group-hover:w-full",
                          children: (0, r.jsx)(n(), {
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
          (([d, p] = g.then ? (await g)() : g), a());
        } catch (e) {
          a(e);
        }
      });
    },
    9587: (e, t, l) => {
      "use strict";
      l.a(e, async (e, a) => {
        try {
          l.d(t, { A: () => h });
          var r = l(2183),
            s = l(36439),
            i = l(26947),
            n = l(12979),
            o = l(16890),
            c = l(96006),
            d = l.n(c),
            u = l(92446),
            m = l(19277),
            p = e([u]);
          u = (p.then ? (await p)() : p)[0];
          let h = (e) => {
            var t, l, a, c, p, h, g, f, x, v, y, w, b;
            let { product: j, index: N, scrollingToTop: k } = e,
              A = (0, s.useRef)(null),
              P = (0, s.useRef)(null),
              S = (0, s.useRef)(null);
            (0, o.L)(
              () => {
                if (!A.current) return;
                if (k) {
                  A.current.style.opacity = "0";
                  return;
                }
                A.current.style.opacity = "1";
                let e = A.current.querySelector(".quote"),
                  t = A.current.querySelector(".source"),
                  l = A.current.querySelector(".poster"),
                  a = A.current.querySelector(".title"),
                  r = A.current.querySelector(".headline"),
                  s = A.current.querySelector(".date"),
                  o = A.current.querySelector(".category"),
                  c = A.current.querySelector(".description"),
                  d = A.current.querySelector(".button"),
                  u = A.current.querySelector(".content-line");
                if (
                  ((P.current = i.A.timeline({
                    scrollTrigger: { trigger: l, start: "25% 80%" },
                  })),
                  l &&
                    P.current.fromTo(
                      l,
                      { opacity: 0 },
                      { opacity: 1, duration: 0.5 },
                    ),
                  (S.current = i.A.timeline({
                    scrollTrigger: { trigger: a, start: "top 80%" },
                  })),
                  e)
                ) {
                  let l = new n.SplitText(e, { type: "chars, words" });
                  i.A.fromTo(
                    l.chars,
                    { opacity: 0 },
                    {
                      opacity: 1,
                      duration: 0.01,
                      stagger: 0.05,
                      scrollTrigger: { trigger: e, start: "top 80%" },
                      onComplete: () => {
                        t &&
                          i.A.fromTo(
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
                (a &&
                  S.current.fromTo(
                    a,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.4 },
                  ),
                  r &&
                    S.current.fromTo(
                      r,
                      { opacity: 0, y: 20 },
                      { opacity: 1, y: 0, duration: 0.4 },
                    ),
                  u &&
                    S.current.fromTo(
                      u,
                      { scaleX: 0 },
                      { scaleX: 1, duration: 0.5, ease: "power2.out" },
                      "<",
                    ),
                  s &&
                    o &&
                    S.current.fromTo(
                      [s, o],
                      { opacity: 0, y: 20 },
                      { opacity: 1, y: 0, duration: 0.2, stagger: 0.2 },
                    ),
                  c &&
                    S.current.fromTo(
                      c,
                      { opacity: 0, y: 20 },
                      { opacity: 1, y: 0, duration: 0.4 },
                    ),
                  d &&
                    S.current.fromTo(
                      d,
                      { opacity: 0, y: 20 },
                      { opacity: 1, y: 0, duration: 0.4 },
                    ));
              },
              { scope: A, dependencies: [k], revertOnUpdate: !0 },
            );
            let C = (0, u._c)(
                null == (l = j.timelinePosterImage) ||
                  null == (t = l.fields.file)
                  ? void 0
                  : t.url,
              ),
              T =
                null == (h = j.timelinePosterImage) ||
                null == (p = h.fields.file) ||
                null == (c = p.details) ||
                null == (a = c.image)
                  ? void 0
                  : a.width,
              E =
                null == (v = j.timelinePosterImage) ||
                null == (x = v.fields.file) ||
                null == (f = x.details) ||
                null == (g = f.image)
                  ? void 0
                  : g.height;
            return (0, r.jsxs)("div", {
              id: "timeline-entry-".concat(j.slug),
              ref: A,
              className: "timeline-entry py-8 lg:py-16",
              children: [
                j.timelineQuote &&
                  (0, r.jsxs)("div", {
                    className:
                      "relative mx-auto flex justify-center px-4 pb-16 lg:w-3/4 lg:px-0 lg:pb-32",
                    children: [
                      (0, r.jsxs)("blockquote", {
                        className:
                          "relative z-10 font-spline-sans-mono text-2xl lg:text-3xl",
                        children: [
                          (0, r.jsxs)("p", {
                            className: "quote mb-4 font-light",
                            children: ["“", j.timelineQuote, "”"],
                          }),
                          (0, r.jsx)("cite", {
                            className:
                              "source block text-lg font-semibold uppercase not-italic opacity-0",
                            children: j.timelineQuoteSource,
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
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
                (0, r.jsxs)("div", {
                  className: "flex flex-col lg:items-end lg:gap-6 ".concat(
                    N % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse",
                  ),
                  children: [
                    (0, r.jsx)("div", {
                      className: "poster flex-none px-4 py-16 lg:flex-1",
                      children: (0, r.jsx)(m.R, {
                        src: C,
                        alt: j.title,
                        width: T,
                        height: E,
                        priority: !0,
                        rotateClass: N % 2 == 0 ? "-rotate-3" : "rotate-3",
                        className: "max-h-[50vh] lg:max-h-[600px]",
                      }),
                    }),
                    (0, r.jsxs)("div", {
                      className: "relative flex-1",
                      children: [
                        (0, r.jsx)("div", {
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
                        (0, r.jsxs)("div", {
                          className: "relative z-10 p-6",
                          children: [
                            (0, r.jsx)("h2", {
                              className: "title mb-2 text-[2rem] font-bold",
                              children: j.title,
                            }),
                            j.timelineHeadline &&
                              (0, r.jsx)("h3", {
                                className: "headline text-5xl font-bold",
                                children: j.timelineHeadline,
                              }),
                            (0, r.jsx)(d(), {
                              src: "/images/welcome/lines/timeline-line.svg",
                              alt: "A streak of gold beneath the product title",
                              width: 438,
                              height: 4,
                              className: "content-line w-full py-4",
                            }),
                            (0, r.jsxs)("div", {
                              className:
                                "mb-6 flex justify-between font-spline-sans-mono font-light uppercase",
                              children: [
                                (0, r.jsx)("span", {
                                  className: "date",
                                  children: ((e) =>
                                    e
                                      ? new Date(e).toLocaleDateString(
                                          "en-US",
                                          {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                            timeZone: "UTC",
                                          },
                                        )
                                      : "Unknown")(j.releaseDate),
                                }),
                                (0, r.jsx)("span", {
                                  className: "category",
                                  children:
                                    null == (y = j.category)
                                      ? void 0
                                      : y.fields.name,
                                }),
                              ],
                            }),
                            (0, r.jsx)("p", {
                              className: "description mb-7",
                              children: j.timelineDescription,
                            }),
                            (0, r.jsxs)("div", {
                              className: "flex gap-4",
                              children: [
                                (0, r.jsx)("a", {
                                  href: "/products/"
                                    .concat(
                                      null == (w = j.category)
                                        ? void 0
                                        : w.fields.slug,
                                      "/",
                                    )
                                    .concat(j.slug),
                                  target: "_blank",
                                  className:
                                    "timeline-view-product-button button rounded-lg border border-black/20 px-6 py-3 transition hover:border-black",
                                  children: "View Product",
                                }),
                                j.timelineCustomLinkUrl &&
                                  (0, r.jsx)("a", {
                                    href: j.timelineCustomLinkUrl,
                                    target: "_blank",
                                    className:
                                      "timeline-custom-link-button button rounded-lg border border-black/20 px-6 py-3 transition hover:border-black",
                                    children:
                                      null != (b = j.timelineCustomLinkCtaText)
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
          };
          a();
        } catch (e) {
          a(e);
        }
      });
    },
    10461: (e, t, l) => {
      "use strict";
      l.a(e, async (e, a) => {
        try {
          l.d(t, { A: () => x });
          var r = l(2183),
            s = l(36439),
            i = l(26947),
            n = l(16890),
            o = l(93551),
            c = l.n(o),
            d = l(96006),
            u = l.n(d),
            m = l(9587),
            p = l(52128),
            h = l(80707),
            g = l.n(h),
            f = e([m]);
          function x(e) {
            let { timelineProducts: t } = e,
              l = (0, s.useRef)(null),
              a = (0, s.useRef)(null),
              o = (0, s.useRef)(null),
              d = (0, s.useRef)(null),
              h = (0, s.useRef)([]),
              [f, x] = (0, s.useState)("all"),
              [v, y] = (0, s.useState)("release desc"),
              [w, b] = (0, s.useState)(!1),
              j = (0, s.useMemo)(
                () =>
                  g().compact(
                    Array.from(
                      new Set(
                        t.map((e) => {
                          var t, l;
                          return null == (l = e.category) ||
                            null == (t = l.fields)
                            ? void 0
                            : t.name;
                        }),
                      ),
                    ),
                  ),
                [t],
              ),
              N = ["Survivor", "Classic", "Legend"],
              k = (0, s.useMemo)(() => {
                let e = t.filter((e) => {
                    var t, l;
                    return (
                      "all" === f ||
                      (null == (l = e.category) || null == (t = l.fields)
                        ? void 0
                        : t.name) === f
                    );
                  }),
                  l = ((e) => {
                    let t = new Set();
                    return (
                      e.forEach((e) => {
                        e.timelineEra && t.add(e.timelineEra);
                      }),
                      Array.from(t).sort((e, t) => N.indexOf(e) - N.indexOf(t))
                    );
                  })(t),
                  a = [...e].sort((e, t) => {
                    if (v.startsWith("release")) {
                      let l = "release asc" === v ? 1 : -1,
                        a = e.releaseDate,
                        r = t.releaseDate;
                      return a || r
                        ? a
                          ? r
                            ? l *
                              (new Date(a).getTime() - new Date(r).getTime())
                            : -1
                          : 1
                        : 0;
                    }
                    if (v.startsWith("fiction")) {
                      let a = "fiction asc" === v ? 1 : -1,
                        r = l.indexOf(e.timelineEra || ""),
                        s = l.indexOf(t.timelineEra || "");
                      return r === s
                        ? a *
                            ((e.timelineFictionOrder || 0) -
                              (t.timelineFictionOrder || 0))
                        : a * (r - s);
                    }
                    return 0;
                  });
                return {
                  grouped: a.reduce((e, t) => {
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
                  }, {}),
                  eraOrder: l,
                  filteredAndSortedProducts: a,
                };
              }, [t, f, v]),
              A = (0, s.useMemo)(
                () =>
                  Object.keys(k.grouped).sort((e, t) => {
                    if (v.startsWith("release"))
                      return "release asc" === v
                        ? e.localeCompare(t)
                        : t.localeCompare(e);
                    if (v.startsWith("fiction")) {
                      let l = k.eraOrder.indexOf(e),
                        a = k.eraOrder.indexOf(t);
                      return "fiction asc" === v ? a - l : l - a;
                    }
                    return 0;
                  }),
                [k, v],
              ),
              P = () => {
                l.current &&
                  (b(!0),
                  i.A.to(window, {
                    duration: 1.5,
                    scrollTo: { y: l.current, offsetY: 0 },
                    ease: "power2.inOut",
                    onComplete: () => {
                      b(!1);
                    },
                  }));
              };
            ((0, n.L)(
              () => {
                (h.current.length &&
                  h.current.forEach((e) => {
                    e.kill();
                  }),
                  i.A.utils.toArray(".timeline-entry").forEach((e, t) => {
                    let l = c().create({
                      trigger: e,
                      start: "top center",
                      end: "center center",
                      onEnter: () => {
                        i.A.to(o.current, {
                          rotation: 36 * (t + 1),
                          duration: 4,
                          ease: "elastic.out(1, 0.5)",
                        });
                      },
                      onEnterBack: () => {
                        i.A.to(o.current, {
                          rotation: 36 * t,
                          duration: 4,
                          ease: "elastic.out(1, 0.5)",
                        });
                      },
                    });
                    h.current.push(l);
                  }),
                  i.A.fromTo(
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
              { scope: a, dependencies: [v, f] },
            ),
              (0, n.L)(
                () => {
                  let e = document.querySelector(".timeline-controls"),
                    t = () => {
                      (i.A.set(e, { pointerEvents: "auto" }),
                        i.A.fromTo(
                          e,
                          { opacity: 0 },
                          { opacity: 1, duration: 0.4, ease: "power2.inOut" },
                        ));
                    },
                    a = () => {
                      (i.A.set(e, { pointerEvents: "none" }),
                        i.A.fromTo(
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
                      t();
                    },
                    onLeave: () => {
                      a();
                    },
                    onEnterBack: () => {
                      t();
                    },
                    onLeaveBack: () => {
                      a();
                    },
                  });
                },
                { scope: l },
              ));
            let S = 0;
            return (0, r.jsxs)("section", {
              ref: l,
              "aria-label": "Tomb Raider timeline",
              className:
                "relative bg-white bg-[url('/images/paper-texture_main_tile(tinyfied).jpg')] bg-contain bg-top py-40 text-black",
              children: [
                (0, r.jsx)(u(), {
                  src: "/images/welcome/paper/timeline-border-top.png",
                  alt: "Top edge of paper background",
                  width: 1440,
                  height: 68,
                  className:
                    "absolute top-0 left-0 z-20 w-full -translate-y-1/2",
                }),
                (0, r.jsxs)("div", {
                  className: "absolute inset-0 overflow-hidden",
                  children: [
                    (0, r.jsx)(u(), {
                      src: "/images/welcome/lines/timeline-topo-lines.png",
                      alt: "Topographic lines weaving across the paper background",
                      width: 1087,
                      height: 1088,
                      className:
                        "pointer-events-none absolute top-0 left-0 -translate-x-1/3 -translate-y-[10%] opacity-20 lg:w-3/4",
                    }),
                    (0, r.jsx)(u(), {
                      src: "/images/welcome/lines/timeline-topo-lines.png",
                      alt: "Topographic lines weaving across the paper background",
                      width: 1087,
                      height: 1088,
                      className:
                        "pointer-events-none absolute right-0 bottom-0 translate-x-1/3 translate-y-[10%] rotate-180 opacity-20 lg:w-3/4",
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className:
                    "pointer-events-none absolute inset-0 z-[25] overflow-hidden",
                  children: (0, r.jsx)("div", {
                    ref: d,
                    className:
                      "absolute top-0 left-1/2 h-full w-full -translate-x-1/2 lg:w-[1018px]",
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
                A.map((e) =>
                  (0, r.jsxs)(
                    "div",
                    {
                      id: "timeline-group-".concat(e),
                      className: "mb-12",
                      children: [
                        (0, r.jsx)("h2", {
                          className:
                            "font-spline-sans-mono px-4 text-right text-6xl font-bold text-yellow-900/40 uppercase lg:sticky lg:top-20 lg:right-0 lg:px-40 lg:text-8xl",
                          children: e,
                        }),
                        (0, r.jsx)("div", {
                          ref: a,
                          className: "overflow-hidden py-4",
                          children: (0, r.jsx)("div", {
                            className: "relative z-30 mx-auto max-w-6xl",
                            children: k.grouped[e].map((e) => {
                              let t = (S += 1) % 2 == 0;
                              return (0, r.jsxs)(
                                s.Fragment,
                                {
                                  children: [
                                    t &&
                                      (0, r.jsx)(u(), {
                                        src: "/images/welcome/lines/timeline-topo-lines.png",
                                        alt: "Topographic lines weaving across the paper background",
                                        width: 1087,
                                        height: 1088,
                                        className:
                                          "pointer-events-none absolute ".concat(
                                            S % 4 == 0
                                              ? "left-0 -translate-x-1/2 scale-125"
                                              : "right-0 translate-x-1/2 -scale-125",
                                            " opacity-20 lg:w-3/4",
                                          ),
                                      }),
                                    (0, r.jsx)(m.A, {
                                      product: e,
                                      index: S - 1,
                                      scrollingToTop: w,
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
                (0, r.jsx)(p.A, {
                  products: k.filteredAndSortedProducts,
                  uniqueCategories: j,
                  currentCategory: f,
                  currentSortOrder: v,
                  onCategoryChange: (e) => {
                    (x(e), P());
                  },
                  onSortOrderChange: (e) => {
                    (y(e), P());
                  },
                  sortedGroupKeys: A,
                }),
                (0, r.jsx)("div", {
                  className: "sticky bottom-0 left-0",
                  children: (0, r.jsx)(u(), {
                    ref: o,
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
          ((m = (f.then ? (await f)() : f)[0]), a());
        } catch (e) {
          a(e);
        }
      });
    },
    14264: (e, t, l) => {
      "use strict";
      l.a(e, async (e, a) => {
        try {
          l.d(t, { A: () => h });
          var r = l(2183),
            s = l(36439),
            i = l(96006),
            n = l.n(i),
            o = l(26947),
            c = l(16890),
            d = l(65346),
            u = l(80707),
            m = l.n(u),
            p = e([d]);
          function h(e) {
            var t, l;
            let { welcomePage: a } = e,
              i = (0, s.useRef)(null),
              u = (0, s.useRef)(null),
              p = m().compact(
                null !=
                  (l =
                    null == (t = a.characterSliderItems)
                      ? void 0
                      : t.map((e) => (null == e ? void 0 : e.fields)))
                  ? l
                  : [],
              );
            return (
              (0, c.L)(
                () => {
                  let e = u.current;
                  o.A.to(".characters-transition-leaves", {
                    yPercent: -25,
                    scrollTrigger: {
                      trigger: e,
                      start: "top bottom",
                      end: "bottom top",
                      scrub: 0.5,
                    },
                  });
                },
                { scope: i },
              ),
              (0, r.jsxs)("section", {
                ref: i,
                "aria-label": "Supporting characters",
                className:
                  "relative bg-[url('/images/hero-texture_dark-wood(tinyfied).jpg')] bg-cover py-32 lg:pt-96 lg:pb-80",
                children: [
                  (0, r.jsx)("div", {
                    ref: u,
                    className:
                      "pointer-events-none absolute top-0 left-0 z-50 w-full -translate-y-1/3 will-change-transform",
                    children: (0, r.jsx)(n(), {
                      width: 1920,
                      height: 1403,
                      alt: "Verdant jungle foliage teems with life, from broad leaves to delicate fronds, highlighted by a cluster of vibrant orange flowers.",
                      src: "/images/transitions/Transition_2.webp",
                      className: "characters-transition-leaves w-full",
                      priority: !0,
                    }),
                  }),
                  (0, r.jsx)("h2", {
                    id: "characters",
                    className:
                      "mb-16 text-center text-xl font-bold tracking-[4px] uppercase",
                    children: a.charactersHeading,
                  }),
                  (0, r.jsx)(d.A, { slides: p }),
                  (0, r.jsx)("div", {
                    className:
                      "pointer-events-none absolute bottom-0 left-0 z-40 w-full translate-y-1/4",
                    children: (0, r.jsx)(n(), {
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
          ((d = (p.then ? (await p)() : p)[0]), a());
        } catch (e) {
          a(e);
        }
      });
    },
    19277: (e, t, l) => {
      "use strict";
      l.d(t, { R: () => i });
      var a = l(2183);
      l(36439);
      var r = l(96006),
        s = l.n(r);
      function i(e) {
        let {
            src: t,
            alt: l,
            width: r,
            height: i,
            priority: n = !1,
            rotateClass: o = "",
            className: c = "",
            objectFitClass: d = "object-contain",
            shadow: u = !0,
          } = e,
          m = "square",
          p = "aspect-square",
          h = "scale-100";
        if (r && i) {
          let e = r / i;
          0.1 > Math.abs(e - 1)
            ? ((m = "square"),
              (p = "aspect-square w-full"),
              (h = "lg:scale-90"))
            : e > 1
              ? ((m = "landscape"), (p = "aspect-[3/2] w-full"))
              : ((m = "portrait"),
                (p = "aspect-[2/3] h-full max-h-[50vh] lg:max-h-[500px]"));
        }
        return (0, a.jsxs)("div", {
          className: "relative "
            .concat(p, " ")
            .concat(h, " ")
            .concat(o, " ")
            .concat(c),
          children: [
            (0, a.jsx)("div", {
              className: "relative z-20 h-full w-full",
              children: (0, a.jsx)(s(), {
                src: t,
                alt: l,
                fill: !0,
                priority: n,
                sizes: "(max-width: 1024px) 100vw, 50vw",
                className: "relative z-20 ".concat(d, " p-2.5"),
              }),
            }),
            (0, a.jsx)(s(), {
              className:
                "pointer-events-none absolute inset-0 z-30 object-contain",
              src: "/images/welcome/paper/".concat(m, "-paper-frame.png"),
              alt: "A paper frame around the image",
              priority: n,
              fill: !0,
              sizes: "(max-width: 1024px) 100vw, 50vw",
            }),
            u &&
              (0, a.jsx)("div", {
                className: "".concat(
                  p,
                  " absolute -bottom-4 left-1/2 h-full -translate-x-1/2 bg-black opacity-60 blur-lg",
                ),
              }),
          ],
        });
      }
    },
    20204: (e, t, l) => {
      "use strict";
      l.a(e, async (e, a) => {
        try {
          l.d(t, { A: () => f });
          var r = l(2183),
            s = l(75109),
            i = l(36439),
            n = l(96006),
            o = l.n(n),
            c = l(46956),
            d = l(11677),
            u = l.n(d),
            m = l(15711),
            p = l(92446),
            h = l(94536),
            g = e([s, p]);
          function f(e) {
            let { products: t, title: l, description: a, isHome: s } = e,
              [n, c] = (0, i.useState)(null);
            return (0, r.jsxs)("div", {
              className:
                "flex w-full flex-col items-stretch overflow-x-hidden py-10",
              children: [
                (0, r.jsxs)("div", {
                  className: s
                    ? "flex flex-col flex-wrap justify-between self-stretch px-8 pb-12 lg:flex-row lg:px-16"
                    : "flex w-full flex-col flex-wrap justify-between gap-y-8 px-6 pb-8 lg:flex-row lg:items-end lg:px-12 lg:pb-12",
                  children: [
                    s
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
                              children: (0, r.jsx)(m.A, {
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
                              children: a,
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
                  children: (0, r.jsx)(h.RC, {
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
                        h.qr,
                        {
                          className: "relative max-w-none shrink-0",
                          style: { width: 300 },
                          children: (0, r.jsx)(x, { product: e }),
                        },
                        e.slug,
                      ),
                    ),
                  }),
                }),
              ],
            });
          }
          function x(e) {
            var t, l, a, i, n, d, m, h;
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
                      (h =
                        null == (a = (0, s.a9f)(g)) ||
                        null == (l = a.fields.image)
                          ? void 0
                          : l.fields.description)
                        ? h
                        : "",
                    src: "".concat(
                      (0, p._c)(
                        null == (d = (0, s.a9f)(g)) ||
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
                              null == (m = g.ctaButtons)
                                ? void 0
                                : m.map((e, t) => {
                                    var l, a, s;
                                    return (0, r.jsx)(
                                      o(),
                                      {
                                        width: 16,
                                        height: 16,
                                        alt: "cta button",
                                        src: (0, p._c)(
                                          null == e ||
                                            null == (s = e.fields.ctaButton) ||
                                            null == (a = s.fields.icon) ||
                                            null == (l = a.fields.file)
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
          (([s, p] = g.then ? (await g)() : g), a());
        } catch (e) {
          a(e);
        }
      });
    },
    26947: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => d });
      var a = l(41430),
        r = l(16890),
        s = l(23323),
        i = l(93551),
        n = l(3843),
        o = l(4124),
        c = l(12979);
      a.os.registerPlugin(
        r.L,
        s.Flip,
        i.ScrollTrigger,
        n.ScrollToPlugin,
        o.ScrollSmoother,
        c.SplitText,
      );
      let d = a.os;
    },
    37387: (e, t, l) => {
      "use strict";
      l.a(e, async (e, a) => {
        try {
          (l.r(t), l.d(t, { __N_SSG: () => v, default: () => y }));
          var r = l(2183),
            s = l(20204),
            i = l(31026),
            n = l(95216),
            o = l(75894),
            c = l(13544),
            d = l(14623),
            u = l.n(d),
            m = l(52236),
            p = l(5973),
            h = l(10461),
            g = l(14264),
            f = l(2371),
            x = e([s, n, o, m, p, h, g]);
          [s, n, o, m, p, h, g] = x.then ? (await x)() : x;
          var v = !0;
          function y(e) {
            var t;
            let {
              welcomePage: l,
              products: a,
              navItems: d,
              websiteSingleton: x,
              footerSocialLinks: v,
              timelineProducts: y,
              signUpBanner: w,
            } = e;
            return (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsxs)(u(), {
                  children: [
                    (0, r.jsx)("title", {
                      children: "Tomb Raider | Meet Lara Croft",
                    }),
                    (0, r.jsx)(
                      "meta",
                      {
                        name: "description",
                        content:
                          "Who is Lara Croft? Meet our fearless archeologist and adventurer! Explore her adventures through the years and meet the supporting characters of Tomb Raider.",
                      },
                      "description",
                    ),
                    (0, r.jsx)(
                      "meta",
                      {
                        name: "keywords",
                        content:
                          "Tomb Raider, Lara Croft, adventure, welcome, timeline, video games, movies, comics",
                      },
                      "keywords",
                    ),
                    (0, r.jsx)(
                      "meta",
                      {
                        property: "og:title",
                        content: "Tomb Raider | Meet Lara Croft",
                      },
                      "og:title",
                    ),
                    (0, r.jsx)(
                      "meta",
                      {
                        property: "og:description",
                        content:
                          "Who is Lara Croft? Meet our fearless archeologist and adventurer! Explore her adventures through the years and meet the supporting characters of Tomb Raider.",
                      },
                      "og:description",
                    ),
                    (0, r.jsx)(
                      "meta",
                      {
                        property: "og:image",
                        content: "".concat(
                          f.W,
                          "/images/welcome/meet-lara-meta-image.jpg",
                        ),
                      },
                      "og:image",
                    ),
                    (0, r.jsx)("meta", {
                      name: "viewport",
                      content: "width=device-width, initial-scale=1.0",
                    }),
                    (0, r.jsx)(
                      "meta",
                      { name: "twitter:card", content: "summary_large_image" },
                      "twitter:card",
                    ),
                    (0, r.jsx)(
                      "meta",
                      {
                        name: "twitter:title",
                        content: "Tomb Raider | Meet Lara Croft",
                      },
                      "twitter:title",
                    ),
                    (0, r.jsx)(
                      "meta",
                      {
                        name: "twitter:description",
                        content:
                          "Who is Lara Croft? Meet our fearless archeologist and adventurer! Explore her adventures through the years and meet the supporting characters of Tomb Raider.",
                      },
                      "twitter:description",
                    ),
                    (0, r.jsx)(
                      "meta",
                      {
                        name: "twitter:image",
                        content: "/images/welcome/meet-lara-meta-image.jpg",
                      },
                      "twitter:image",
                    ),
                    (0, r.jsx)(
                      "meta",
                      {
                        name: "twitter:image:alt",
                        content:
                          "Meet Lara Croft - Tomb Raider's iconic adventurer and archaeologist",
                      },
                      "twitter:image:alt",
                    ),
                    (0, r.jsx)(
                      "meta",
                      { name: "twitter:site", content: "@tombraider" },
                      "twitter:site",
                    ),
                  ],
                }),
                (0, r.jsx)(n.Ay, { surveys: [], navItems: d, signUpBanner: w }),
                (0, r.jsxs)("main", {
                  className: "relative z-10 overflow-x-clip",
                  children: [
                    (0, r.jsx)(m.A, { welcomePage: l }),
                    (0, r.jsx)(p.A, { welcomePage: l }),
                    (0, r.jsx)(h.A, { timelineProducts: y }),
                    (0, r.jsx)(g.A, { welcomePage: l }),
                    l.featuredProductsEnabled &&
                      (0, r.jsx)(c.A, {
                        className: "pt-8 lg:pt-32",
                        children: (0, r.jsx)(s.A, {
                          products: a,
                          title:
                            null != (t = l.featuredProductsHeading)
                              ? t
                              : "Featured Games",
                        }),
                      }),
                    (0, r.jsx)(i.A, { websiteSingleton: x }),
                  ],
                }),
                (0, r.jsx)(o.A, {
                  websiteSingleton: x,
                  navItems: d,
                  footerSocialLinks: v,
                }),
              ],
            });
          }
          a();
        } catch (e) {
          a(e);
        }
      });
    },
    43699: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => A });
      var a = l(36439);
      let r =
          /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,
        s = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,
        i = /\.(m3u8)($|\?)/i,
        n = /\.(mpd)($|\?)/i,
        o = /stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,
        c =
          /(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,
        d = /vimeo\.com\/(?!progressive_redirect).+/,
        u =
          /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,
        m = /open\.spotify\.com\/(\w+)\/(\w+)/i,
        p =
          /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+|(videos?\/|\?video=)\d+)($|\?)/,
        h =
          /tiktok\.com\/(?:player\/v1\/|share\/video\/|@[^/]+\/video\/)([0-9]+)/,
        g = (e, t) => {
          if (Array.isArray(e)) {
            for (let l of e)
              if (("string" == typeof l && g(l, t)) || g(l.src, t)) return !0;
            return !1;
          }
          return t(e);
        },
        f = {
          html: (e) => g(e, (e) => r.test(e) || s.test(e)),
          hls: (e) => g(e, (e) => i.test(e)),
          dash: (e) => g(e, (e) => n.test(e)),
          mux: (e) => o.test(e),
          youtube: (e) => c.test(e),
          vimeo: (e) => d.test(e) && !s.test(e) && !i.test(e),
          wistia: (e) => u.test(e),
          spotify: (e) => m.test(e),
          twitch: (e) => p.test(e),
          tiktok: (e) => h.test(e),
        },
        x = a.forwardRef((e, t) => {
          let l = r.test(`${e.src}`) ? "audio" : "video";
          return a.createElement(l, { ...e, ref: t }, e.children);
        }),
        v = [
          {
            key: "hls",
            name: "hls.js",
            canPlay: f.hls,
            canEnablePIP: () => !0,
            player: (0, a.lazy)(() =>
              Promise.all([l.e(9871), l.e(9629), l.e(2262)]).then(
                l.bind(l, 9673),
              ),
            ),
          },
          {
            key: "dash",
            name: "dash.js",
            canPlay: f.dash,
            canEnablePIP: () => !0,
            player: (0, a.lazy)(() =>
              Promise.all([l.e(9629), l.e(6395)]).then(l.bind(l, 85490)),
            ),
          },
          {
            key: "mux",
            name: "Mux",
            canPlay: f.mux,
            canEnablePIP: () => !0,
            player: (0, a.lazy)(() =>
              Promise.all([l.e(9871), l.e(9629), l.e(2723)]).then(
                l.bind(l, 19320),
              ),
            ),
          },
          {
            key: "youtube",
            name: "YouTube",
            canPlay: f.youtube,
            player: (0, a.lazy)(() => l.e(8446).then(l.bind(l, 28439))),
          },
          {
            key: "vimeo",
            name: "Vimeo",
            canPlay: f.vimeo,
            player: (0, a.lazy)(() => l.e(6173).then(l.bind(l, 51524))),
          },
          {
            key: "wistia",
            name: "Wistia",
            canPlay: f.wistia,
            canEnablePIP: () => !0,
            player: (0, a.lazy)(() => l.e(9340).then(l.bind(l, 88889))),
          },
          {
            key: "spotify",
            name: "Spotify",
            canPlay: f.spotify,
            canEnablePIP: () => !1,
            player: (0, a.lazy)(() => l.e(2771).then(l.bind(l, 25666))),
          },
          {
            key: "twitch",
            name: "Twitch",
            canPlay: f.twitch,
            canEnablePIP: () => !1,
            player: (0, a.lazy)(() => l.e(2042).then(l.bind(l, 63570))),
          },
          {
            key: "tiktok",
            name: "TikTok",
            canPlay: f.tiktok,
            canEnablePIP: () => !1,
            player: (0, a.lazy)(() => l.e(8085).then(l.bind(l, 72287))),
          },
          {
            key: "html",
            name: "html",
            canPlay: f.html,
            canEnablePIP: () => !0,
            player: x,
          },
        ],
        y = {
          width: "320px",
          height: "180px",
          volume: 1,
          playbackRate: 1,
          previewTabIndex: 0,
          previewAriaLabel: "",
          oEmbedUrl: "https://noembed.com/embed?url={url}",
        },
        w = a.forwardRef((e, t) => {
          let { playing: l, pip: r } = e,
            s = e.activePlayer,
            i = (0, a.useRef)(null),
            n = (0, a.useRef)(!0);
          if (
            ((0, a.useEffect)(() => {
              var t, a;
              i.current &&
                (i.current.paused && !0 === l && i.current.play(),
                i.current.paused || !1 !== l || i.current.pause(),
                (i.current.playbackRate = null != (t = e.playbackRate) ? t : 1),
                (i.current.volume = null != (a = e.volume) ? a : 1));
            }),
            (0, a.useEffect)(() => {
              var e, t, l, a, s;
              if (i.current && globalThis.document) {
                if (r && !document.pictureInPictureElement)
                  try {
                    null == (t = (e = i.current).requestPictureInPicture) ||
                      t.call(e);
                  } catch (e) {}
                if (!r && document.pictureInPictureElement)
                  try {
                    (null == (a = (l = i.current).exitPictureInPicture) ||
                      a.call(l),
                      null == (s = document.exitPictureInPicture) ||
                        s.call(document));
                  } catch (e) {}
              }
            }, [r]),
            !s)
          )
            return null;
          let o = {},
            c = ["onReady", "onStart"];
          for (let t in e)
            t.startsWith("on") && !c.includes(t) && (o[t] = e[t]);
          return a.createElement(
            s,
            {
              ...o,
              style: e.style,
              className: e.className,
              slot: e.slot,
              ref: (0, a.useCallback)(
                (e) => {
                  ((i.current = e),
                    "function" == typeof t
                      ? t(e)
                      : null !== t && (t.current = e));
                },
                [t],
              ),
              src: e.src,
              crossOrigin: e.crossOrigin,
              preload: e.preload,
              controls: e.controls,
              muted: e.muted,
              autoPlay: e.autoPlay,
              loop: e.loop,
              playsInline: e.playsInline,
              disableRemotePlayback: e.disableRemotePlayback,
              config: e.config,
              onLoadStart: (t) => {
                var l, a;
                ((n.current = !0),
                  null == (l = e.onReady) || l.call(e),
                  null == (a = e.onLoadStart) || a.call(e, t));
              },
              onPlay: (t) => {
                var l, a;
                (n.current &&
                  ((n.current = !1), null == (l = e.onStart) || l.call(e, t)),
                  null == (a = e.onPlay) || a.call(e, t));
              },
            },
            e.children,
          );
        });
      w.displayName = "Player";
      let b = (0, a.lazy)(() => l.e(6353).then(l.bind(l, 40640))),
        j = [],
        N = ({ children: e }) => e,
        k = v[v.length - 1];
      var A = ((e, t) => {
        let l = a.forwardRef((l, r) => {
          let s = { ...y, ...l },
            {
              src: i,
              slot: n,
              className: o,
              style: c,
              width: d,
              height: u,
              fallback: m,
              wrapper: p,
            } = s,
            [h, g] = (0, a.useState)(!!s.light);
          (0, a.useEffect)(() => {
            s.light ? g(!0) : g(!1);
          }, [s.light]);
          let f = (e) => {
              var t;
              (g(!1), null == (t = s.onClickPreview) || t.call(s, e));
            },
            x = null == p ? N : p,
            v = !1 === m ? N : a.Suspense;
          return a.createElement(
            x,
            { slot: n, className: o, style: { width: d, height: u, ...c } },
            a.createElement(
              v,
              { fallback: m },
              h
                ? ((e) => {
                    if (!e) return null;
                    let {
                      light: t,
                      playIcon: l,
                      previewTabIndex: r,
                      oEmbedUrl: i,
                      previewAriaLabel: n,
                    } = s;
                    return a.createElement(b, {
                      src: e,
                      light: t,
                      playIcon: l,
                      previewTabIndex: r,
                      previewAriaLabel: n,
                      oEmbedUrl: i,
                      onClickPreview: f,
                    });
                  })(i)
                : ((l) => {
                    var i, c;
                    let d = ((l) => {
                      for (let t of [...j, ...e])
                        if (l && t.canPlay(l)) return t;
                      return t || null;
                    })(l);
                    if (!d) return null;
                    let { style: u, width: m, height: p, wrapper: h } = s,
                      g = null == (i = s.config) ? void 0 : i[d.key];
                    return a.createElement(w, {
                      ...s,
                      ref: r,
                      activePlayer: null != (c = d.player) ? c : d,
                      slot: h ? void 0 : n,
                      className: h ? void 0 : o,
                      style: h
                        ? { display: "block", width: "100%", height: "100%" }
                        : { display: "block", width: m, height: p, ...u },
                      config: g,
                    });
                  })(i),
            ),
          );
        });
        return (
          (l.displayName = "ReactPlayer"),
          (l.addCustomPlayer = (e) => {
            j.push(e);
          }),
          (l.removeCustomPlayers = () => {
            j.length = 0;
          }),
          (l.canPlay = (t) => {
            if (t) {
              for (let l of [...j, ...e]) if (l.canPlay(t)) return !0;
            }
            return !1;
          }),
          (l.canEnablePIP = (t) => {
            var l;
            if (t) {
              for (let a of [...j, ...e])
                if (
                  a.canPlay(t) &&
                  (null == (l = a.canEnablePIP) ? void 0 : l.call(a))
                )
                  return !0;
            }
            return !1;
          }),
          l
        );
      })(v, k);
    },
    52128: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => u });
      var a = l(2183),
        r = l(36439),
        s = l(26947),
        i = l(16890),
        n = l(93551),
        o = l.n(n);
      function c(e) {
        let {
            products: t,
            activeProduct: l,
            currentText: i,
            uniqueCategories: n,
            currentCategory: o,
            currentSortOrder: c,
            handleProductClick: d,
            onCategoryChange: u,
            onSortOrderChange: m,
          } = e,
          [p, h] = (0, r.useState)(!1),
          g = (0, r.useRef)(null),
          f = (0, r.useRef)(null),
          x = (0, r.useRef)(null),
          v = (0, r.useRef)(null);
        return (
          (0, r.useEffect)(() => {
            !p &&
              g.current &&
              f.current &&
              (g.current.style.width = "".concat(f.current.clientWidth, "px"));
          }, [i]),
          (0, a.jsx)("div", {
            ref: g,
            className:
              "fixed bottom-4 right-4 z-50 flex h-[3.75rem] flex-col items-end rounded-[2rem] bg-black",
            children: (0, a.jsxs)("div", {
              className: "flex h-full w-full flex-col items-end text-white",
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "menu-content hidden h-[calc(100%-3.75rem)] w-full shrink flex-col opacity-0",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "shrink-0 p-4 pt-6",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "mb-4",
                          children: [
                            (0, a.jsx)("label", {
                              htmlFor: "category-select",
                              className:
                                "mb-0.5 block text-sm font-medium text-lightgray-500",
                              children: "Filter By",
                            }),
                            (0, a.jsxs)("select", {
                              id: "category-select",
                              value: o,
                              onChange: (e) => u(e.target.value),
                              className:
                                "w-full rounded-lg border-[1.5px] border-white/20 bg-white/10 p-3 text-white",
                              children: [
                                (0, a.jsx)("option", {
                                  value: "all",
                                  children: "All Categories",
                                }),
                                n.map((e) =>
                                  (0, a.jsx)(
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
                        (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsx)("label", {
                              htmlFor: "sort-select",
                              className:
                                "mb-0.5 block text-sm font-medium text-lightgray-500",
                              children: "Sort By",
                            }),
                            (0, a.jsxs)("select", {
                              id: "sort-select",
                              value: c,
                              onChange: (e) => m(e.target.value),
                              className:
                                "w-full rounded-lg border-[1.5px] border-white/20 bg-white/10 p-3 text-white",
                              children: [
                                (0, a.jsx)("option", {
                                  value: "release desc",
                                  className: "text-black",
                                  children: "Release Date: Newest First",
                                }),
                                (0, a.jsx)("option", {
                                  value: "release asc",
                                  className: "text-black",
                                  children: "Release Date: Oldest First",
                                }),
                                (0, a.jsx)("option", {
                                  value: "fiction desc",
                                  className: "text-black",
                                  children:
                                    "Lara Croft's Adventures: Newest First",
                                }),
                                (0, a.jsx)("option", {
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
                    (0, a.jsx)("div", {
                      className: "grow overflow-auto px-4 pb-4",
                      children: (0, a.jsx)("ul", {
                        children: t.map((e) => {
                          let t = e.releaseDate,
                            r = t
                              ? new Date(t).getFullYear().toString()
                              : "Unknown";
                          return (0, a.jsxs)(
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
                                (0, a.jsx)("span", {
                                  className: "text-white/50",
                                  children: r,
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
                (0, a.jsxs)("div", {
                  ref: f,
                  className:
                    "relative z-10 mt-auto flex flex-row items-center justify-end rounded-full bg-black p-2",
                  children: [
                    (0, a.jsx)("a", {
                      ref: v,
                      href: "#characters",
                      onClick: (e) => {
                        e.preventDefault();
                        let t = document.getElementById("characters");
                        t &&
                          s.A.to(window, {
                            duration: 1,
                            scrollTo: { y: t, offsetY: 100 },
                            ease: "power2.inOut",
                          });
                      },
                      className:
                        "absolute -left-12 top-1/2 -z-10 -translate-y-1/2 font-spline-sans-mono uppercase text-black hover:underline",
                      children: "Skip",
                    }),
                    (0, a.jsx)("span", {
                      className:
                        "whitespace-nowrap px-4 font-spline-sans-mono uppercase text-white",
                      children: i,
                    }),
                    (0, a.jsx)("button", {
                      type: "button",
                      onClick: () => {
                        var e, t, l, a, r;
                        let i =
                          null == (e = g.current)
                            ? void 0
                            : e.querySelector(".menu-content");
                        if (i) {
                          if (p)
                            (null == (t = v.current) ||
                              t.classList.remove("pointer-events-none"),
                              s.A.timeline()
                                .to(i, { opacity: 0, y: 20, duration: 0.3 })
                                .set(i, { display: "none" })
                                .to(
                                  g.current,
                                  {
                                    height: "3.75rem",
                                    width:
                                      null == (l = f.current)
                                        ? void 0
                                        : l.clientWidth,
                                    duration: 0.5,
                                    ease: "power2.inOut",
                                  },
                                  "<-0.2",
                                ));
                          else {
                            (null == (a = v.current) ||
                              a.classList.add("pointer-events-none"),
                              (x.current = document.querySelector("header")));
                            let e =
                              (null == (r = x.current)
                                ? void 0
                                : r.offsetHeight) || 0;
                            s.A.timeline()
                              .to(g.current, {
                                height: "calc(100svh - ".concat(
                                  "".concat(e / 16 + 2, "rem"),
                                  ")",
                                ),
                                width: "22rem",
                                duration: 0.5,
                                ease: "power2.inOut",
                              })
                              .set(i, { display: "flex" })
                              .to(i, { opacity: 1, y: 0, duration: 0.3 });
                          }
                          h(!p);
                        }
                      },
                      className:
                        "z-10 flex size-11 flex-none cursor-pointer items-center justify-center rounded-full bg-[url('/images/gold-button-texture-1.jpg')] bg-cover transition hover:scale-110",
                      children: (0, a.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        height: "24px",
                        viewBox: "0 -960 960 960",
                        width: "24px",
                        fill: "#000000",
                        className: "flex-none",
                        children: p
                          ? (0, a.jsx)("path", {
                              d: "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z",
                            })
                          : (0, a.jsx)("path", {
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
      function d(e) {
        let { sortedGroupKeys: t, activeProduct: l, currentSortOrder: r } = e,
          i = (() => {
            if (!l) return null;
            if (r.startsWith("fiction")) return l.timelineEra + " Era";
            if (r.startsWith("release")) {
              let e = l.releaseDate;
              return e ? new Date(e).getFullYear().toString() : "Unknown";
            }
            return null;
          })();
        return (0, a.jsxs)("div", {
          className:
            "fixed right-4 top-1/2 z-40 hidden w-40 -translate-y-1/2 gap-3 rounded-lg p-4 text-right font-spline-sans-mono font-medium uppercase tracking-wide text-black/50 xl:flex xl:flex-col xl:items-end",
          children: [
            (0, a.jsx)("ul", {
              children: t.map((e) =>
                (0, a.jsx)(
                  "li",
                  {
                    className: "mb-2 cursor-pointer hover:text-black ".concat(
                      i === e ? "text-black" : "",
                    ),
                    onClick: () =>
                      ((e) => {
                        let t = document.getElementById(
                          "timeline-group-".concat(e),
                        );
                        t &&
                          s.A.to(window, {
                            duration: 1,
                            scrollTo: { y: t, offsetY: 100 },
                            ease: "power2.inOut",
                          });
                      })(e),
                    children: e,
                  },
                  e,
                ),
              ),
            }),
            (0, a.jsx)("div", { className: "h-px w-12 bg-black/50" }),
            (0, a.jsx)("button", {
              type: "button",
              className: "text-right uppercase hover:text-black",
              onClick: (e) => {
                e.preventDefault();
                let t = document.getElementById("characters");
                t &&
                  s.A.to(window, {
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
      function u(e) {
        var t;
        let {
            products: l,
            uniqueCategories: n,
            currentCategory: u,
            currentSortOrder: m,
            onCategoryChange: p,
            onSortOrderChange: h,
            sortedGroupKeys: g,
          } = e,
          [f, x] = (0, r.useState)(
            (null == (t = l[0]) ? void 0 : t.releaseDate)
              ? new Date(l[0].releaseDate).getFullYear().toString()
              : "Unknown",
          ),
          [v, y] = (0, r.useState)(null),
          w = (0, r.useRef)([]);
        return (
          (0, r.useEffect)(() => {
            v &&
              (function (e) {
                if (m.startsWith("release")) {
                  let t = e.releaseDate;
                  x((t ? new Date(t).getFullYear() : "Unknown").toString());
                } else
                  m.startsWith("fiction") && x(e.timelineEra || "Unknown Era");
              })(v);
          }, [v, m]),
          (0, r.useEffect)(() => {
            (y(null), o().refresh());
          }, [l, u, m]),
          (0, i.L)(
            () => {
              (w.current.forEach((e) => e.kill()), (w.current = []));
              let e = l.map((e) =>
                o().create({
                  trigger: "#timeline-entry-".concat(e.slug),
                  start: "top center",
                  end: "bottom center",
                  onEnter: () => {
                    y(e);
                  },
                  onEnterBack: () => {
                    y(e);
                  },
                }),
              );
              return (
                (w.current = e),
                () => {
                  e.forEach((e) => e.kill());
                }
              );
            },
            { dependencies: [l, u, m] },
          ),
          (0, a.jsxs)("div", {
            className: "timeline-controls pointer-events-none opacity-0",
            children: [
              (0, a.jsx)("div", {
                className:
                  "pointer-events-none fixed bottom-0 left-0 right-0 z-40 h-24",
                children: (0, a.jsx)("div", {
                  className: "h-full w-full",
                  style: {
                    background: "linear-gradient(to top, #FFFAE1, transparent)",
                  },
                }),
              }),
              (0, a.jsx)(c, {
                products: l,
                activeProduct: v,
                currentText: f,
                uniqueCategories: n,
                currentCategory: u,
                currentSortOrder: m,
                handleProductClick: (e) => {
                  let t = document.getElementById("timeline-entry-".concat(e));
                  t &&
                    s.A.to(window, {
                      duration: 1,
                      scrollTo: { y: t, offsetY: 100 },
                      ease: "power2.inOut",
                    });
                },
                onCategoryChange: p,
                onSortOrderChange: h,
              }),
              (0, a.jsx)(d, {
                sortedGroupKeys: g,
                activeProduct: v,
                currentSortOrder: m,
              }),
            ],
          })
        );
      }
    },
    52236: (e, t, l) => {
      "use strict";
      l.a(e, async (e, a) => {
        try {
          l.d(t, { A: () => g });
          var r = l(2183),
            s = l(36439),
            i = l(26947),
            n = l(12979),
            o = l(16890),
            c = l(96006),
            d = l.n(c),
            u = l(92446),
            m = l(43699),
            p = l(46951),
            h = e([u]);
          u = (h.then ? (await h)() : h)[0];
          let f = p.Ikc({
            effectiveType: p.YjP().optional(),
            saveData: p.zMY().optional(),
          });
          function g(e) {
            var t, l, a, c, p;
            let { welcomePage: h } = e,
              [g, x] = (0, s.useState)(!1),
              v = (0, s.useRef)(null),
              y = (0, s.useRef)(null),
              [w, b] = (0, s.useState)(!1),
              [j, N] = (0, s.useState)(!1);
            return (
              (0, s.useEffect)(() => {
                let e = (() => {
                  if ("undefined" != typeof navigator)
                    for (let e of [
                      Reflect.get(navigator, "connection"),
                      Reflect.get(navigator, "mozConnection"),
                      Reflect.get(navigator, "webkitConnection"),
                    ]) {
                      let t = f.safeParse(e);
                      if (t.success) return t.data;
                    }
                })();
                if (e) {
                  let { effectiveType: t, saveData: l } = e;
                  ("2g" === t || "3g" === t || l) && x(!0);
                }
              }, []),
              (0, s.useEffect)(() => {
                N(!0);
              }, []),
              (0, o.L)(
                () => {
                  let e = i.A.timeline(),
                    t = new n.SplitText(".hero-text", { type: "chars, words" });
                  (i.A.set(t.chars, {
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
                      .to(".hero-underline", { width: 260, duration: 3 }),
                    i.A.timeline({ repeat: -1, repeatDelay: 2 })
                      .to(".down-arrow", {
                        y: 8,
                        duration: 0.6,
                        ease: "power1.inOut",
                      })
                      .to(".down-arrow", {
                        y: 0,
                        duration: 0.6,
                        ease: "power1.inOut",
                      }));
                },
                { scope: v },
              ),
              (0, s.useEffect)(() => {
                w &&
                  i.A.to(".hero-video", {
                    opacity: 1,
                    duration: 1,
                    ease: "power2.inOut",
                  });
              }, [w]),
              (0, r.jsxs)("div", {
                ref: v,
                className:
                  "bg-trueblack relative flex min-h-[max(700px,85svh)] flex-col justify-center overflow-hidden md:min-h-[max(1000px,100svh)]",
                children: [
                  (0, r.jsxs)("div", {
                    className:
                      "absolute top-0 left-1/2 z-5 mt-24 aspect-video h-[50vh] -translate-x-1/2 md:h-auto md:w-full lg:left-0 lg:mt-0 lg:translate-x-0",
                    children: [
                      h.heroBackgroundVideoUrl && !g
                        ? j &&
                          (0, r.jsx)(m.A, {
                            ref: y,
                            src: h.heroBackgroundVideoUrl,
                            className: "hero-video",
                            loop: !0,
                            width: "100%",
                            height: "100%",
                            controls: !1,
                            volume: 0,
                            playing: !0,
                            muted: !0,
                            onPlaying: () => b(!0),
                            style: { opacity: 0 },
                            playsInline: !0,
                            preload: "auto",
                          })
                        : (0, r.jsx)(d(), {
                            fill: !0,
                            className:
                              "object-contain object-top xl:object-cover",
                            alt:
                              null !=
                              (c =
                                null == (t = h.heroBackgroundImage)
                                  ? void 0
                                  : t.fields.description)
                                ? c
                                : "",
                            src: (0, u._c)(
                              null !=
                                (p =
                                  null == (a = h.heroBackgroundImage) ||
                                  null == (l = a.fields.file)
                                    ? void 0
                                    : l.url)
                                ? p
                                : "",
                            ),
                          }),
                      (0, r.jsx)("div", {
                        className:
                          "to-trueblack absolute bottom-0 left-0 z-10 h-20 w-full bg-linear-to-b from-transparent",
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "hero-cta-container relative z-20 flex flex-col items-center opacity-0",
                    children: [
                      (0, r.jsx)("div", {
                        className: "mb-2 flex justify-center",
                        children: (0, r.jsx)("p", {
                          className:
                            "hero-text text-center text-3xl font-bold tracking-[5px] uppercase lg:text-5xl",
                          children: h.heroCallToActionText,
                        }),
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "flex w-full items-center justify-center gap-2 px-6 lg:px-0",
                        children: [
                          (0, r.jsx)("div", {
                            className:
                              "hero-underline relative h-1 w-0 overflow-hidden",
                            children: (0, r.jsx)(d(), {
                              width: 260,
                              height: 4,
                              src: "/images/welcome/lines/hero-line.png",
                              alt: "A streak of gold underneath the hero headline",
                              className: "absolute top-0 right-0 max-w-none",
                            }),
                          }),
                          (0, r.jsx)("div", {
                            role: "button",
                            tabIndex: 0,
                            onClick: () => {
                              let e = document.querySelector(
                                "#meet-lara-scroll-target",
                              );
                              e &&
                                i.A.to(window, {
                                  duration: 1.5,
                                  scrollTo: { y: e, offsetY: 85 },
                                  ease: "power2.inOut",
                                });
                            },
                            "aria-label": "Scroll to Meet Lara section",
                            className:
                              "relative top-0.5 cursor-pointer transition hover:scale-110",
                            children: (0, r.jsx)(d(), {
                              width: 88,
                              height: 76,
                              src: "/images/welcome/hero-arrow.png",
                              alt: "A bouncing arrow pointing down",
                              className: "down-arrow w-6",
                            }),
                          }),
                          (0, r.jsx)("div", {
                            className:
                              "hero-underline relative h-1 w-0 overflow-hidden",
                            children: (0, r.jsx)(d(), {
                              width: 260,
                              height: 4,
                              src: "/images/welcome/lines/hero-line.png",
                              alt: "A streak of gold underneath the hero headline",
                              className:
                                "absolute top-0 left-0 max-w-none -scale-x-100",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsx)(d(), {
                    width: 2016,
                    height: 1073,
                    src: "/images/welcome/hero-gradient.png",
                    alt: "A radial gradient",
                    className:
                      "absolute bottom-0 left-0 z-10 w-full -translate-x-1/2 translate-y-1/3 scale-[2.5] rotate-[30deg]",
                  }),
                  (0, r.jsx)(d(), {
                    width: 2016,
                    height: 1073,
                    src: "/images/welcome/hero-gradient.png",
                    alt: "A radial gradient",
                    className:
                      "absolute bottom-0 left-0 z-10 w-full translate-x-1/2 translate-y-1/3 scale-[2.5] -rotate-[30deg]",
                  }),
                ],
              })
            );
          }
          a();
        } catch (e) {
          a(e);
        }
      });
    },
    65346: (e, t, l) => {
      "use strict";
      l.a(e, async (e, a) => {
        try {
          l.d(t, { A: () => g });
          var r = l(2183),
            s = l(36439),
            i = l(94536),
            n = l(96006),
            o = l.n(n),
            c = l(92446),
            d = l(63308),
            u = l(1780),
            m = l(16890),
            p = l(26947),
            h = e([c, u]);
          function g(e) {
            let { slides: t } = e,
              [l, a] = (0, s.useState)(!1),
              [n, o] = (0, s.useState)(t[0]),
              c = (0, s.useRef)(null),
              h = (0, s.useRef)(null),
              g = (0, s.useRef)(null),
              x = (0, s.useRef)(null);
            return (
              (0, s.useEffect)(() => {
                let e = document.body,
                  t = [g.current, x.current];
                return (
                  l
                    ? ((e.style.overflow = "hidden"),
                      (e.style.height = "100vh"),
                      (e.style.touchAction = "none"),
                      t.forEach((e) => {
                        e && p.A.to(e, { opacity: 0, duration: 0.3 });
                      }))
                    : ((e.style.overflow = ""),
                      (e.style.height = ""),
                      (e.style.touchAction = ""),
                      t.forEach((e) => {
                        e && p.A.to(e, { opacity: 1, duration: 0.3 });
                      })),
                  () => {
                    ((e.style.overflow = ""),
                      (e.style.height = ""),
                      (e.style.touchAction = ""));
                  }
                );
              }, [l]),
              (0, m.L)(
                () => {
                  let e = c.current;
                  p.A.timeline({
                    scrollTrigger: { trigger: e, start: "center bottom" },
                  })
                    .fromTo(
                      ".character-slide",
                      { y: 50, opacity: 0 },
                      { y: 0, opacity: 1, stagger: 0.25, ease: "power2.out" },
                    )
                    .fromTo(
                      ".slider-arrow",
                      { opacity: 0 },
                      { opacity: 1, duration: 1 },
                    );
                },
                { scope: c },
              ),
              (0, r.jsxs)("div", {
                ref: c,
                children: [
                  (0, r.jsxs)("div", {
                    className: "relative",
                    children: [
                      (0, r.jsx)("div", {
                        ref: g,
                        className: "slider-arrow",
                        children: (0, r.jsx)("div", {
                          className:
                            "absolute top-1/2 left-4 z-10 hidden size-12 -translate-y-full cursor-pointer items-center justify-center rounded-full border-[1.5px] border-yellow-300 opacity-75 transition hover:opacity-100 md:flex",
                          id: "character-prev",
                          children: (0, r.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            height: "24px",
                            viewBox: "0 -960 960 960",
                            width: "24px",
                            fill: "#FFFFFF",
                            children: (0, r.jsx)("path", {
                              d: "m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z",
                            }),
                          }),
                        }),
                      }),
                      t.length > 0 &&
                        (0, r.jsx)(i.RC, {
                          ref: h,
                          initialSlide: 2 * (t.length >= 3),
                          rewind: !0,
                          spaceBetween: 0,
                          slidesPerView: 1.75,
                          centeredSlides: !0,
                          modules: [d.Vx],
                          navigation: {
                            prevEl: "#character-prev",
                            nextEl: "#character-next",
                          },
                          onSlideChange: (e) => {
                            o(t[e.realIndex]);
                          },
                          breakpoints: {
                            768: { slidesPerView: 3 },
                            1280: { slidesPerView: 5 },
                          },
                          children: t.map((e, l) =>
                            (0, r.jsx)(
                              i.qr,
                              {
                                className: "p-1",
                                children: (0, r.jsx)(f, {
                                  slide: e,
                                  selectedSlide: n,
                                  onClick: () =>
                                    ((e) => {
                                      if (
                                        (null == n ? void 0 : n.name) ===
                                        t[e].name
                                      )
                                        a(!0);
                                      else {
                                        var l, r;
                                        (null == (r = h.current) ||
                                          null == (l = r.swiper) ||
                                          l.slideTo(e, 300),
                                          o(t[e]),
                                          setTimeout(() => {
                                            a(!0);
                                          }, 350));
                                      }
                                    })(l),
                                }),
                              },
                              l,
                            ),
                          ),
                        }),
                      (0, r.jsx)("div", {
                        ref: x,
                        className: "slider-arrow",
                        children: (0, r.jsx)("div", {
                          className:
                            "absolute top-1/2 right-4 z-10 hidden size-12 -translate-y-full cursor-pointer items-center justify-center rounded-full border-[1.5px] border-yellow-300 opacity-75 transition hover:opacity-100 md:flex",
                          id: "character-next",
                          children: (0, r.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            height: "24px",
                            viewBox: "0 -960 960 960",
                            width: "24px",
                            fill: "#FFFFFF",
                            children: (0, r.jsx)("path", {
                              d: "M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z",
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsx)(u.x, {
                    isOpen: l,
                    onClose: () => a(!1),
                    slide: n,
                  }),
                ],
              })
            );
          }
          function f(e) {
            var t, l;
            let { slide: a, selectedSlide: s, onClick: i } = e,
              n =
                a.images && a.images[0]
                  ? (0, c._c)(
                      null == (t = a.images[0].fields.file) ? void 0 : t.url,
                    )
                  : "",
              d =
                a.images &&
                (null == (l = a.images[0]) ? void 0 : l.fields.description),
              u = (null == s ? void 0 : s.name) === a.name;
            return (0, r.jsx)("article", {
              className:
                "character-slide group relative cursor-pointer p-1 will-change-transform",
              onClick: i,
              children: (0, r.jsxs)("figure", {
                children: [
                  (0, r.jsxs)("div", {
                    className:
                      "relative aspect-[2/3] w-full transition will-change-transform ".concat(
                        u
                          ? "opacity-100"
                          : "scale-90 opacity-50 hover:opacity-100",
                        " ",
                      ),
                    children: [
                      (0, r.jsx)(o(), {
                        src: n,
                        alt: null != d ? d : "",
                        fill: !0,
                        className:
                          "character-image-mask h-full w-full object-contain",
                      }),
                      (0, r.jsx)(o(), {
                        className:
                          "absolute -top-1 -left-1.5 transition-opacity duration-300 ".concat(
                            u ? "opacity-100" : "opacity-0",
                          ),
                        width: 24,
                        height: 24,
                        alt: "top left bracket",
                        src: "/images/small-top-left-bracket.svg",
                      }),
                      (0, r.jsx)(o(), {
                        className:
                          "absolute -top-1 -right-1 transition-opacity duration-300 ".concat(
                            u ? "opacity-100" : "opacity-0",
                          ),
                        width: 24,
                        height: 24,
                        alt: "top right bracket",
                        src: "/images/small-top-right-bracket.svg",
                      }),
                      (0, r.jsx)(o(), {
                        className:
                          "absolute -bottom-1 -left-1 transition-opacity duration-300 ".concat(
                            u ? "opacity-100" : "opacity-0",
                          ),
                        width: 24,
                        height: 24,
                        alt: "bottom left bracket",
                        src: "/images/small-bottom-left-bracket.svg",
                      }),
                      (0, r.jsx)(o(), {
                        className:
                          "absolute -right-1.5 -bottom-1 transition-opacity duration-300 ".concat(
                            u ? "opacity-100" : "opacity-0",
                          ),
                        width: 24,
                        height: 24,
                        alt: "bottom right bracket",
                        src: "/images/small-bottom-right-bracket.svg",
                      }),
                    ],
                  }),
                  (0, r.jsxs)("figcaption", {
                    className:
                      "mt-6 flex flex-col items-center transition-opacity duration-300 ".concat(
                        u ? "opacity-100" : "opacity-0 group-hover:opacity-100",
                        " ",
                      ),
                    children: [
                      (0, r.jsx)("h3", {
                        className:
                          "selected-item-name w-[calc(100%+2rem)] text-center text-[2rem] font-bold text-white",
                        children: a.name,
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "flex flex-col transition-opacity duration-300 lg:opacity-0 ".concat(
                            u ? "lg:group-hover:opacity-100" : "",
                          ),
                        children: [
                          (0, r.jsx)("button", {
                            type: "button",
                            className:
                              "p-1 text-sm font-bold hover:text-yellow-300",
                            children: "Learn More",
                          }),
                          (0, r.jsx)("div", {
                            className:
                              "relative h-1 overflow-hidden transition-all delay-100 duration-300 lg:w-0 lg:group-hover:w-full",
                            children: (0, r.jsx)(o(), {
                              width: 80,
                              height: 4,
                              src: "/images/welcome/lines/learn-more-line.png",
                              alt: "A streak of gold underneath the learn more button",
                              className:
                                "absolute bottom-0 left-0 h-full w-full",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            });
          }
          (([c, u] = h.then ? (await h)() : h), a());
        } catch (e) {
          a(e);
        }
      });
    },
    72530: (e, t, l) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/lara-croft",
        function () {
          return l(37387);
        },
      ]);
    },
    92279: (e, t, l) => {
      "use strict";
      l.a(e, async (e, a) => {
        try {
          l.d(t, { c: () => p });
          var r = l(2183),
            s = l(36439),
            i = l(96006),
            n = l.n(i),
            o = l(92446),
            c = l(3717),
            d = l(16890),
            u = l(26947),
            m = e([o]);
          function p(e) {
            var t, l, a;
            let {
                isOpen: i,
                onClose: m,
                slide: p,
                onPrevSlide: h,
                onNextSlide: g,
              } = e,
              f = (0, s.useRef)(null),
              [x, v] = (0, s.useState)(0),
              y = (0, s.useRef)(null);
            return ((0, d.L)(
              () => {
                if (
                  (y.current && (y.current.kill(), (y.current = null), v(0)),
                  i && (null == p ? void 0 : p.images) && p.images.length > 1)
                ) {
                  y.current = u.A.timeline({ repeat: -1 });
                  let e = p.images.length;
                  for (let t = 0; t < e; t++) {
                    let l = (t + 1) % e;
                    y.current.to({}, { duration: 2, onComplete: () => v(l) });
                  }
                }
                return () => {
                  y.current && (y.current.kill(), (y.current = null));
                };
              },
              { dependencies: [i, p] },
            ),
            (0, d.L)(
              () => {
                if (f.current) {
                  let e = u.A.timeline();
                  i
                    ? ((document.body.style.overflow = "hidden"),
                      u.A.set(f.current, { display: "flex" }),
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
              { scope: f, dependencies: [i] },
            ),
            p)
              ? (0, r.jsxs)("div", {
                  ref: f,
                  className:
                    "fixed inset-0 z-[80] hidden justify-center lg:items-center",
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "modal-background absolute inset-0 bg-trueblack/70 opacity-0",
                      onClick: m,
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "modal-content relative mt-24 h-[calc(100svh-6rem)] w-full max-w-6xl translate-y-12 bg-black opacity-0 lg:mx-20 lg:mt-0 lg:h-auto",
                      children: [
                        (0, r.jsx)("button", {
                          onClick: m,
                          className:
                            "group fixed bottom-3 right-3 z-10 flex size-11 items-center justify-center rounded-full border-2 border-darkgray-500 bg-darkgray-200 lg:absolute lg:right-10 lg:top-10",
                          children: (0, r.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            height: "40px",
                            viewBox: "0 -960 960 960",
                            width: "40px",
                            className:
                              "fill-white transition-transform duration-300 group-hover:rotate-90 group-hover:fill-yellow-300",
                            children: (0, r.jsx)("path", {
                              d: "m253.9-229.79-24.11-24.11L455.9-480 229.79-706.1l24.11-24.11L480-504.1l226.1-226.11 24.11 24.11L504.1-480l226.11 226.1-24.11 24.11L480-455.9 253.9-229.79Z",
                            }),
                          }),
                        }),
                        (0, r.jsxs)("div", {
                          className:
                            "flex h-full flex-col gap-4 overflow-auto p-4 lg:flex-row lg:gap-12 lg:p-14",
                          children: [
                            (0, r.jsx)("div", {
                              className:
                                "mx-auto mb-6 flex w-full max-w-lg items-center justify-center lg:mb-0 lg:w-2/5 lg:max-w-none",
                              children: (0, r.jsx)("div", {
                                className:
                                  "group relative aspect-square w-full",
                                children:
                                  p.images && p.images.length > 1
                                    ? p.images.map((e, t) => {
                                        var l;
                                        return (0, r.jsx)(
                                          "div",
                                          {
                                            className:
                                              "absolute inset-0 transition-opacity duration-500 ".concat(
                                                t === x
                                                  ? "opacity-100"
                                                  : "opacity-0",
                                              ),
                                            children: (0, r.jsx)(c.I, {
                                              src: (0, o._c)(
                                                null == e ||
                                                  null == (l = e.fields.file)
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
                                    : (0, r.jsx)(c.I, {
                                        src: (0, o._c)(
                                          null == (l = p.images[0]) ||
                                            null == (t = l.fields.file)
                                            ? void 0
                                            : t.url,
                                        ),
                                        alt:
                                          (null == (a = p.images[0])
                                            ? void 0
                                            : a.fields.description) || "",
                                        isModal: !0,
                                      }),
                              }),
                            }),
                            (0, r.jsxs)("div", {
                              className:
                                "mx-auto flex w-full max-w-lg flex-col pb-20 lg:w-3/5 lg:max-w-none lg:justify-center lg:pb-0",
                              children: [
                                (0, r.jsxs)("div", {
                                  className: "mb-4 flex justify-between",
                                  children: [
                                    (0, r.jsx)("h2", {
                                      className: "text-[2rem] font-bold",
                                      children: p.name,
                                    }),
                                    (0, r.jsxs)("div", {
                                      className: "flex gap-4",
                                      children: [
                                        (0, r.jsx)("div", {
                                          className:
                                            "-left-16 z-10 flex size-12 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-yellow-300 opacity-75 transition hover:opacity-100 lg:absolute lg:top-1/2 lg:-translate-y-1/2",
                                          onClick: (e) => {
                                            (e.stopPropagation(), h());
                                          },
                                          children: (0, r.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            height: "24px",
                                            viewBox: "0 -960 960 960",
                                            width: "24px",
                                            fill: "#FFFFFF",
                                            children: (0, r.jsx)("path", {
                                              d: "m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z",
                                            }),
                                          }),
                                        }),
                                        (0, r.jsx)("div", {
                                          className:
                                            "-right-16 z-10 flex size-12 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-yellow-300 opacity-75 transition hover:opacity-100 lg:absolute lg:top-1/2 lg:-translate-y-1/2",
                                          onClick: (e) => {
                                            (e.stopPropagation(), g());
                                          },
                                          children: (0, r.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            height: "24px",
                                            viewBox: "0 -960 960 960",
                                            width: "24px",
                                            fill: "#FFFFFF",
                                            children: (0, r.jsx)("path", {
                                              d: "M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, r.jsx)("p", {
                                  className: "text-lg",
                                  children: p.description,
                                }),
                                (0, r.jsx)(n(), {
                                  width: 369,
                                  height: 3,
                                  src: "/images/welcome/lines/modal-line.svg",
                                  alt: "A streak of gray underneath the item description",
                                  className: "w-full py-6",
                                }),
                                p.appearsIn &&
                                  p.appearsIn.length > 0 &&
                                  (0, r.jsxs)("div", {
                                    children: [
                                      (0, r.jsx)("h3", {
                                        className: "mb-2 font-bold",
                                        children: "Appears in:",
                                      }),
                                      p.appearsIn.map((e, t) => {
                                        var l, a, i;
                                        return (0, r.jsxs)(
                                          s.Fragment,
                                          {
                                            children: [
                                              (0, r.jsx)("a", {
                                                href: "/products/"
                                                  .concat(
                                                    null == e ||
                                                      null ==
                                                        (l = e.fields.category)
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
                                                (null !=
                                                (i =
                                                  null == (a = p.appearsIn)
                                                    ? void 0
                                                    : a.length)
                                                  ? i
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
                            (0, r.jsx)("div", {
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
          ((o = (m.then ? (await m)() : m)[0]), a());
        } catch (e) {
          a(e);
        }
      });
    },
  },
  (e) => {
    (e.O(
      0,
      [
        9950, 8762, 6006, 1433, 1329, 1089, 3492, 4971, 5216, 2446, 7137, 636,
        6593, 8792,
      ],
      () => e((e.s = 72530)),
    ),
      (_N_E = e.O()));
  },
]);
