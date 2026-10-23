(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3332],
  {
    3164: (e, t, l) => {
      "use strict";
      l.a(e, async (e, s) => {
        try {
          l.d(t, { A: () => y });
          var r = l(2183),
            i = l(36439),
            a = l(15013),
            n = l.n(a),
            o = l(29704),
            c = l(72538),
            u = l(65986),
            d = l(28283),
            m = l(27823),
            h = l(93551),
            f = l.n(h),
            x = l(46728),
            g = l.n(x),
            p = l(64171),
            v = l(7219),
            w = l(9751),
            b = l(83737),
            j = e([w, b]);
          function y({
            handleRelicClick: e,
            relicCollection: t,
            gameActive: l,
            puzzleSolved: s,
            onUnlock: a,
            websiteSingleton: h,
          }) {
            let [x, j] = (0, i.useState)(!1),
              [N, k] = (0, i.useState)(!1),
              { isLoggedIn: A } = (0, w.u)(),
              { minigameCompleted: S, setMinigameCompleted: z } = (0, w.u)(),
              C = (0, i.useRef)(null),
              L = (0, i.useRef)(null),
              E = (0, i.useRef)(null),
              M = (0, i.useRef)(null);
            ((0, i.useEffect)(() => {
              let e = m.A.context(() => {
                  let e = C.current;
                  ((M.current = m.A.timeline({
                    scrollTrigger: {
                      trigger: e,
                      start: "top 60%",
                      end: "bottom center",
                      scrub: 0.5,
                    },
                  })
                    .to(
                      ".left-leaves",
                      { xPercent: -100, yPercent: 75, rotate: 60 },
                      0,
                    )
                    .to(
                      ".right-leaves",
                      { xPercent: 100, yPercent: 50, rotate: -60 },
                      0,
                    )),
                    m.A.from(".tomb-door-background", {
                      scrollTrigger: {
                        trigger: e,
                        start: "top bottom",
                        end: "center center",
                        scrub: 0.5,
                      },
                      scale: 1.25,
                    }),
                    m.A.to(".transition-leaves", {
                      scrollTrigger: {
                        trigger: L.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 0.5,
                      },
                      yPercent: -25,
                    }));
                }, [C]),
                t = m.A.matchMedia();
              return (
                t.add("(max-width: 768px)", () => {
                  f().create({
                    trigger: C.current,
                    start: "bottom-=250px center",
                    end: "bottom center",
                    onToggle: (e) => {
                      l && (j(e.isActive), k(e.isActive));
                    },
                  });
                }),
                () => {
                  (e.revert(), t.revert());
                }
              );
            }, []),
              (0, i.useEffect)(() => {
                if (l) {
                  let e = m.A.matchMedia();
                  return (
                    e.add("(max-width: 768px)", () => {
                      f().create({
                        trigger: C.current,
                        start: "bottom-=250px center",
                        end: "bottom center",
                        onToggle: (e) => {
                          l && (j(e.isActive), k(e.isActive));
                        },
                      });
                    }),
                    () => e.revert()
                  );
                }
              }, [l]),
              (0, i.useEffect)(() => {
                (S || s) &&
                  E.current &&
                  (S ||
                    m.A.to(window, {
                      duration: 1,
                      scrollTo: { y: "#reward-container", offsetY: 150 },
                    }),
                  m.A.fromTo(
                    E.current,
                    { opacity: 0 },
                    { opacity: 1, duration: 1.5, delay: 3.5 },
                  ));
              }, [s]));
            let R = () => {
              localStorage.setItem(
                "minigame-completed-while-logged-out",
                "true",
              );
            };
            return (0, r.jsxs)("div", {
              ref: C,
              className:
                "torch-visible relative aspect-[1/1.85] w-screen lg:aspect-square",
              children: [
                (0, r.jsx)(c.A, {}),
                (0, r.jsx)("div", {
                  ref: L,
                  className:
                    "pointer-events-none absolute left-0 top-0 z-50 w-full -translate-y-1/3",
                  children: (0, r.jsx)(n(), {
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
                    "left-leaves pointer-events-none absolute left-0 top-0 z-50 h-full w-screen -translate-x-1/3",
                  children: (0, r.jsx)(n(), {
                    width: 1286,
                    height: 857,
                    alt: "jungle leaves on the left",
                    src: "/images/side-leaves.png",
                    className: "w-full",
                    priority: !0,
                  }),
                }),
                (0, r.jsx)("div", {
                  className:
                    "right-leaves pointer-events-none absolute right-0 top-0 z-50 h-full w-screen translate-x-1/3",
                  children: (0, r.jsx)(n(), {
                    width: 1286,
                    height: 857,
                    alt: "jungle leaves on the right",
                    src: "/images/side-leaves.png",
                    className: "w-full",
                    priority: !0,
                  }),
                }),
                (0, r.jsxs)("div", {
                  className:
                    "relative flex h-full w-full flex-col justify-center overflow-hidden",
                  children: [
                    (0, r.jsx)("div", {
                      id: "vault-door-section",
                      className:
                        "relative z-50 flex flex-col items-center justify-end",
                      children:
                        (S || s) &&
                        (0, r.jsxs)("div", {
                          ref: E,
                          id: "reward-container",
                          className:
                            "p-4 opacity-0 transition-opacity duration-0",
                          children: [
                            (0, r.jsx)("h2", {
                              className:
                                "mb-6 text-center text-xl font-medium lg:text-6xl",
                              children:
                                S && A
                                  ? h.minigameSolvedLoggedInPromptHeadline ||
                                    "Stay Up to Date"
                                  : h.minigameCorrectSolutionTitle,
                            }),
                            (0, r.jsx)("p", {
                              className: "mb-4 text-center lg:text-2xl",
                              children:
                                S && A
                                  ? h.minigameSolvedLoggedInPromptDescription ||
                                    "Keep an eye on your dashboard for breaking news, rewards, and exclusive content."
                                  : h.minigameCorrectSolutionSubtitle,
                            }),
                            !S &&
                              (0, r.jsx)("div", {
                                className: "h-60 scale-125 sm:h-80",
                                children: (0, r.jsx)(d.P, {
                                  playAnimation: !0,
                                }),
                              }),
                            A
                              ? (0, r.jsx)("div", {
                                  className: "mb-4 flex justify-center",
                                  children: (0, r.jsx)(g(), {
                                    href: "/account",
                                    children: (0, r.jsx)(p.A, {
                                      variant: "darkBackground",
                                      onClick: () => {
                                        ((0, b.qu)({
                                          action: "MINIGAME_COMPLETION",
                                        }),
                                          z(!0));
                                      },
                                      children: S
                                        ? "View Dashboard"
                                        : h.minigameSolvedLoggedInContinueButtonText,
                                    }),
                                  }),
                                })
                              : (0, r.jsxs)(r.Fragment, {
                                  children: [
                                    (0, r.jsxs)("div", {
                                      className:
                                        "mb-4 flex justify-center gap-2",
                                      children: [
                                        (0, r.jsx)(g(), {
                                          href: "/registration",
                                          children: (0, r.jsx)(p.A, {
                                            variant: "darkBackground",
                                            onClick: R,
                                            children:
                                              h.minigameSolvedLoggedOutRegisterButtonText,
                                          }),
                                        }),
                                        (0, r.jsx)(g(), {
                                          href: "/login",
                                          children: (0, r.jsx)(p.A, {
                                            variant: "darkBackground",
                                            onClick: R,
                                            children:
                                              h.minigameSolvedLoggedOutLoginButtonText,
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, r.jsx)("p", {
                                      className: "text-center lg:text-lg",
                                      children: h.minigameSolvedLoggedOutCta,
                                    }),
                                  ],
                                }),
                          ],
                        }),
                    }),
                    !s &&
                      !S &&
                      (0, r.jsx)("div", {
                        className:
                          "absolute bottom-[25%] left-0 right-0 mx-auto",
                        children: (0, r.jsx)(v.A, {
                          onUnlock: a,
                          overlayText: h.minigameSliderText,
                          id: "vaultDoorSlider",
                        }),
                      }),
                    (0, r.jsxs)("div", {
                      className:
                        "tomb-door-background absolute bottom-0 left-0 z-40 h-full w-full",
                      children: [
                        (0, r.jsx)(u.k, {
                          vaseHovered: x,
                          vaseCollected: t.includes("vase"),
                          maskHovered: N,
                          maskCollected: t.includes("mask"),
                          doorOpen: S || s,
                        }),
                        !t.includes("vase") &&
                          (0, r.jsx)("div", {
                            onMouseEnter: () => j(!0),
                            onMouseLeave: () => j(!1),
                            className: `${!l ? "pointer-events-none" : ""} absolute bottom-[13%] left-[6%] z-20 flex aspect-square w-[12%] items-center justify-center lg:bottom-[10.5%] lg:left-[23.5%]`,
                            children: (0, r.jsx)(o.A, {
                              onClick: e,
                              name: "vase",
                              collected: !1,
                              zoomed: !1,
                            }),
                          }),
                        !t.includes("mask") &&
                          (0, r.jsx)("div", {
                            onMouseEnter: () => k(!0),
                            onMouseLeave: () => k(!1),
                            className: `${!l ? "pointer-events-none" : ""} absolute bottom-[9%] right-[8%] z-20 flex aspect-square w-[12%] items-center justify-center lg:bottom-[7%] lg:right-[25%]`,
                            children: (0, r.jsx)(o.A, {
                              onClick: e,
                              name: "mask",
                              collected: !1,
                              zoomed: !1,
                            }),
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          }
          (([w, b] = j.then ? (await j)() : j), s());
        } catch (e) {
          s(e);
        }
      });
    },
    4448: (e, t, l) => {
      "use strict";
      l.a(e, async (e, s) => {
        try {
          l.d(t, { A: () => g });
          var r = l(2183),
            i = l(75109),
            a = l(36439),
            n = l(15013),
            o = l.n(n),
            c = l(68456),
            u = l(46728),
            d = l.n(u),
            m = l(64171),
            h = l(92642),
            f = l(94536),
            x = e([i, h]);
          function g(e) {
            let { products: t, title: l, description: s, isHome: i } = e,
              [n, c] = (0, a.useState)(null);
            return (0, r.jsxs)("div", {
              className:
                "flex w-full flex-col items-stretch overflow-x-hidden py-10",
              children: [
                (0, r.jsxs)("div", {
                  className: i
                    ? "flex flex-col flex-wrap justify-between self-stretch px-8 pb-12 lg:flex-row lg:px-16"
                    : "flex w-full flex-col flex-wrap justify-between gap-y-8 px-6 pb-8 lg:flex-row lg:items-end lg:px-12 lg:pb-12",
                  children: [
                    i
                      ? (0, r.jsxs)("div", {
                          className:
                            "flex flex-col flex-wrap items-center gap-x-8 gap-y-4 pb-4 lg:flex-row lg:pb-0",
                          children: [
                            (0, r.jsx)("h2", {
                              className:
                                "text-4xl text-black sm:text-5xl lg:text-6xl",
                              children: l,
                            }),
                            (0, r.jsx)(d(), {
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
                            onClick: () => n?.slidePrev(),
                          }),
                          (0, r.jsx)(o(), {
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
                (0, r.jsx)("div", {
                  className: "px-8 lg:px-16",
                  children: (0, r.jsx)(f.RC, {
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
                        f.qr,
                        {
                          className: "relative max-w-none shrink-0",
                          style: { width: 300 },
                          children: (0, r.jsx)(p, { product: e }),
                        },
                        e.slug,
                      ),
                    ),
                  }),
                }),
              ],
            });
          }
          function p({ product: e }) {
            return (0, r.jsx)("div", {
              className:
                "group aspect-[2/3] h-auto w-full cursor-pointer shadow-[0_10px_48px_-16px_rgba(0,0,0,1)]",
              children: (0, r.jsxs)(d(), {
                href: `/products/${e.category?.fields.slug}/${e.slug}`,
                children: [
                  (0, r.jsx)(o(), {
                    fill: !0,
                    alt: (0, i.a9f)(e)?.fields.image?.fields.description ?? "",
                    src: `${(0, h._c)((0, i.a9f)(e)?.fields.image?.fields.file?.url)}?fit=fill&w=300&h=450`,
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
                        children: e.title,
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
                            children: (0, c.Cp)(e.releaseDate),
                          }),
                          (0, r.jsx)("div", {
                            className: "flex gap-x-2",
                            children: e.ctaButtons?.map((e, t) =>
                              (0, r.jsx)(
                                o(),
                                {
                                  width: 16,
                                  height: 16,
                                  alt: "cta button",
                                  src: (0, h._c)(
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
          (([i, h] = x.then ? (await x)() : x), s());
        } catch (e) {
          s(e);
        }
      });
    },
    7219: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => i });
      var s = l(2183),
        r = l(36439);
      function i({
        onUnlock: e,
        overlayText: t,
        label: l = "Open Vault Door",
        id: a = "unlockSwitch",
      }) {
        let [n, o] = (0, r.useState)(0);
        return (
          (0, r.useEffect)(() => {
            n > 90 && (e(), o(0));
          }, [n, e]),
          (0, s.jsxs)("div", {
            className:
              "unlock-switch relative z-50 mx-auto w-64 cursor-pointer rounded-full border border-white/60 bg-black/90 p-2",
            children: [
              (0, s.jsx)("label", {
                htmlFor: a,
                className: "sr-only",
                "aria-label": l,
                children: l,
              }),
              (0, s.jsx)("input", {
                className:
                  "relative block h-12 w-full cursor-pointer appearance-none rounded-full bg-transparent",
                type: "range",
                value: n,
                max: 100,
                id: a,
                name: a,
                onChange: (e) => o(Number(e.target.value)),
              }),
              (0, s.jsx)("span", {
                className:
                  "pointer-events-none absolute left-16 top-1/2 w-[calc(100%-4.5rem)] -translate-y-1/2 text-center",
                children: t,
              }),
            ],
          })
        );
      }
    },
    10979: (e, t, l) => {
      "use strict";
      l.a(e, async (e, s) => {
        try {
          l.d(t, { A: () => f });
          var r = l(2183),
            i = l(15013),
            a = l.n(i),
            n = l(87975),
            o = l(36439),
            c = l(64171),
            u = l(46728),
            d = l.n(u),
            m = l(94536),
            h = e([n]);
          function f(e) {
            let {
                articles: t,
                headingTitle: l = "Related Articles",
                disableButton: s = !1,
                buttonTitle: i = "View All",
                isHome: u,
              } = e,
              [h, f] = (0, o.useState)(null);
            return (0, r.jsxs)("div", {
              className:
                "flex w-full flex-col items-stretch overflow-hidden py-8",
              children: [
                (0, r.jsxs)("div", {
                  className: `lg:pb-${!u ? 16 : 12} flex w-full flex-col flex-wrap items-center justify-between px-8 pb-8 lg:flex-row lg:px-16`,
                  children: [
                    (0, r.jsxs)("div", {
                      className:
                        "flex flex-col items-center gap-x-8 gap-y-4 pb-4 lg:flex-row lg:pb-0",
                      children: [
                        (0, r.jsx)("h2", {
                          className:
                            "text-4xl text-black sm:text-5xl lg:text-6xl",
                          children: l,
                        }),
                        !s &&
                          (0, r.jsx)(d(), {
                            href: "/news/all",
                            children: (0, r.jsx)(c.A, {
                              variant: "dark",
                              children: i,
                            }),
                          }),
                      ],
                    }),
                    t.length > 0 &&
                      (0, r.jsxs)("div", {
                        className: "hidden gap-x-2 lg:flex",
                        children: [
                          (0, r.jsx)(a(), {
                            width: 48,
                            height: 48,
                            alt: "Left arrow",
                            src: "/images/arrow-button-left.svg",
                            className: "mr-2 cursor-pointer",
                            onClick: () => h?.slidePrev(),
                          }),
                          (0, r.jsx)(a(), {
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
                  ? (0, r.jsx)("div", {
                      className: "px-8 lg:px-16",
                      children: (0, r.jsx)(m.RC, {
                        className: "swiper-show-overflow relative flex w-full",
                        slidesPerView: 1.25,
                        centeredSlides: !0,
                        breakpoints: {
                          640: { slidesPerView: 2, centeredSlides: !1 },
                          1024: { slidesPerView: 3, centeredSlides: !1 },
                        },
                        spaceBetween: 16,
                        rewind: !0,
                        onSwiper: (e) => f(e),
                        children: t.map((e) =>
                          (0, r.jsx)(
                            m.qr,
                            {
                              className:
                                "relative !h-auto w-64 max-w-none shrink-0 overflow-visible",
                              children: (0, r.jsx)(n.A, { item: e }),
                            },
                            e.slug,
                          ),
                        ),
                      }),
                    })
                  : (0, r.jsx)("p", {
                      className: "px-8 lg:px-16",
                      children: "We couldn't find any related articles.",
                    }),
              ],
            });
          }
          ((n = (h.then ? (await h)() : h)[0]), s());
        } catch (e) {
          s(e);
        }
      });
    },
    23698: (e, t, l) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return l(35345);
        },
      ]);
    },
    27823: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => u });
      var s = l(41430),
        r = l(16890),
        i = l(23323),
        a = l(93551),
        n = l(3843),
        o = l(4124),
        c = l(12979);
      s.os.registerPlugin(
        r.L,
        i.Flip,
        a.ScrollTrigger,
        n.ScrollToPlugin,
        o.ScrollSmoother,
        c.SplitText,
      );
      let u = s.os;
    },
    28283: (e, t, l) => {
      "use strict";
      l.d(t, { P: () => a });
      var s = l(2183),
        r = l(36439),
        i = l(44190);
      let a = ({ playAnimation: e }) => {
        let { rive: t, RiveComponent: l } = (0, i.useRive)({
          src: "/animations/medallion.riv",
          autoplay: !1,
          layout: new i.Layout({
            fit: i.Fit.Contain,
            alignment: i.Alignment.Center,
          }),
          useOffscreenRenderer: !1,
        });
        return (
          (0, r.useEffect)(() => {
            e ? t?.play() : (t?.reset(), t?.pause());
          }, [e, t]),
          (0, s.jsx)(l, { className: "pointer-events-none h-full w-full" })
        );
      };
    },
    29704: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => a });
      var s = l(2183),
        r = l(15013),
        i = l.n(r);
      function a({ onClick: e, name: t, collected: l, zoomed: r }) {
        let n;
        return (0, s.jsx)("div", {
          onClick: () => e(t),
          style: l ? { opacity: 1 } : { opacity: 0 },
          "data-flip-id": "flip-" + t,
          className:
            ((n = "relic "),
            l
              ? r
                ? (n += "h-auto w-[50vh]")
                : (n += "h-12 w-12 cursor-pointer hover:scale-110")
              : (n += "h-full w-full z-50 "),
            n),
          children: (0, s.jsx)(i(), {
            width: 256,
            height: 256,
            alt: t + " relic",
            src: `/images/minigame/relics/relic_${t}.webp`,
            className: "w-full object-cover",
          }),
        });
      }
    },
    35345: (e, t, l) => {
      "use strict";
      l.a(e, async (e, s) => {
        try {
          (l.r(t), l.d(t, { __N_SSG: () => n, default: () => o }));
          var r = l(2183),
            i = l(59711),
            a = e([i]);
          i = (a.then ? (await a)() : a)[0];
          var n = !0;
          function o({
            articles: e,
            products: t,
            heroCards: l,
            rewards: s,
            websiteSingleton: a,
            navItems: n,
            footerSocialLinks: c,
            surveys: u,
            signUpBanner: d,
          }) {
            return (0, r.jsx)(i.A, {
              articles: e,
              products: t,
              heroCards: l,
              rewards: s,
              websiteSingleton: a,
              navItems: n,
              footerSocialLinks: c,
              surveys: u,
              signUpBanner: d,
            });
          }
          s();
        } catch (e) {
          s(e);
        }
      });
    },
    49667: (e, t, l) => {
      "use strict";
      l.a(e, async (e, s) => {
        try {
          l.d(t, { A: () => m });
          var r = l(2183),
            i = l(41036),
            a = l(10979),
            n = l(4448),
            o = l(9751),
            c = l(15013),
            u = l.n(c),
            d = e([a, n, o]);
          function m({ articles: e, products: t, websiteSingleton: l }) {
            let { isLoggedIn: s, minigameCompleted: c } = (0, o.u)();
            return (0, r.jsxs)(i.A, {
              className:
                "inline-flex flex-col items-start pt-0 text-black lg:pt-32",
              children: [
                s &&
                  c &&
                  (0, r.jsx)("div", {
                    className:
                      "pointer-events-none absolute top-0 left-0 z-40 w-full -translate-y-2/3",
                    children: (0, r.jsx)(u(), {
                      width: 1920,
                      height: 483,
                      className: "w-full object-cover object-top",
                      alt: "Hardwood transition",
                      src: "/images/hero-transition(tinyfied).webp",
                    }),
                  }),
                (0, r.jsx)("section", {
                  "aria-label": "Latest News",
                  className: "flex w-full flex-col overflow-hidden",
                  children: (0, r.jsx)("div", {
                    className: "flex flex-col items-center self-stretch pt-10",
                    children: (0, r.jsx)("div", {
                      className:
                        "flex items-end justify-between self-stretch pb-0",
                      children: (0, r.jsx)(a.A, {
                        articles: e,
                        headingTitle: "Latest News",
                        buttonTitle: "All News",
                        isHome: !0,
                      }),
                    }),
                  }),
                }),
                (0, r.jsx)("section", {
                  "aria-label": "Featured Games",
                  className: "flex w-full flex-col items-start overflow-hidden",
                  children: (0, r.jsx)("div", {
                    className: "flex flex-col items-center self-stretch",
                    children: (0, r.jsx)("div", {
                      className:
                        "flex items-end justify-between self-stretch pb-0",
                      children: (0, r.jsx)(n.A, {
                        products: t,
                        title: l.featuredGamesTitle,
                        isHome: !0,
                      }),
                    }),
                  }),
                }),
              ],
            });
          }
          (([a, n, o] = d.then ? (await d)() : d), s());
        } catch (e) {
          s(e);
        }
      });
    },
    49863: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => n });
      var s = l(2183),
        r = l(36439),
        i = l(44190);
      let a = () => {
        let { RiveComponent: e } = (0, i.useRive)({
          src: "/animations/torch.riv",
          autoplay: !0,
          useOffscreenRenderer: !1,
        });
        return (0, s.jsxs)("div", {
          className: "pointer-events-none relative",
          children: [
            (0, s.jsx)("div", {
              className:
                "absolute aspect-square w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-yellow-300/20 to-70% md:w-[600px]",
            }),
            (0, s.jsx)(e, {
              className: "absolute -bottom-10 -right-20 h-40 w-40",
            }),
          ],
        });
      };
      function n({ enabled: e }) {
        let [t, l] = (0, r.useState)({ x: 0, y: 0 }),
          [i, o] = (0, r.useState)(window.innerWidth <= 768),
          [c, u] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            function e(e) {
              l({ x: e.pageX, y: e.pageY });
            }
            function t() {
              u(!1);
            }
            function s() {
              u(!0);
            }
            let r = document.getElementsByClassName("torch-visible");
            if (i)
              (u(!1),
                window.removeEventListener("mousemove", e),
                Array.from(r).forEach((e) => {
                  (e.removeEventListener("mouseenter", t),
                    e.removeEventListener("mouseleave", s));
                }));
            else {
              let i = window.scrollY,
                a = () => {
                  let e = window.scrollY,
                    t = e - i;
                  (l((e) => ({ ...e, y: e.y + t })), (i = e));
                };
              return (
                window.addEventListener("scroll", a),
                window.addEventListener("mousemove", e),
                Array.from(r).forEach((e) => {
                  (e.addEventListener("mouseenter", t),
                    e.addEventListener("mouseleave", s));
                }),
                () => {
                  (window.removeEventListener("scroll", a),
                    window.removeEventListener("mousemove", e),
                    Array.from(r).forEach((e) => {
                      (e.removeEventListener("mouseenter", t),
                        e.removeEventListener("mouseleave", s));
                    }));
                }
              );
            }
          }, [i]),
          (0, r.useEffect)(() => {
            let e = () => {
              let e = window.innerWidth <= 768;
              (o(e),
                u(!e),
                e &&
                  l({ x: window.innerWidth / 2, y: window.innerHeight - 100 }));
            };
            return (
              window.addEventListener("resize", e),
              () => {
                window.removeEventListener("resize", e);
              }
            );
          }, []),
          (0, r.useEffect)(() => {
            !c &&
              e &&
              i &&
              l({ x: window.innerWidth / 2, y: window.innerHeight - 100 });
          }, [e, c, i]),
          (0, s.jsx)("div", {
            className: `torch-container pointer-events-none fixed z-[100] md:absolute md:left-0 md:top-0 ${c || !e ? "hidden" : ""}`,
            style: i
              ? { left: `${t.x}px`, top: `${t.y}px` }
              : { transform: `translateX(${t.x}px) translateY(${t.y}px)` },
            children: (0, s.jsx)(a, {}),
          })
        );
      }
    },
    59711: (e, t, l) => {
      "use strict";
      l.a(e, async (e, s) => {
        try {
          l.d(t, { A: () => k });
          var r = l(2183),
            i = l(93260),
            a = l(3164),
            n = l(97882),
            o = l(87315),
            c = l(98982),
            u = l(20162),
            d = l(90118),
            m = l(49667),
            h = l(92112),
            f = l(49863),
            x = l(63348),
            g = l(36439),
            p = l(23323),
            v = l(9751),
            w = l(27823),
            b = l(31153),
            j = l(23988),
            y = l(26330),
            N = e([i, a, u, m, v]);
          function k({
            articles: e,
            products: t,
            heroCards: l,
            rewards: s,
            websiteSingleton: N,
            navItems: A,
            footerSocialLinks: S,
            surveys: z,
            signUpBanner: C,
          }) {
            let [L, E] = (0, g.useState)([]),
              [M, R] = (0, g.useState)(!1),
              [T, _] = (0, g.useState)(!1),
              [P, I] = (0, g.useState)(!1),
              { isLoggedIn: $, minigameCompleted: B } = (0, v.u)(),
              H = (0, b.useRouter)(),
              { addAlert: O } = (0, j.Z)();
            (0, g.useEffect)(() => {
              H.asPath.split("?").length <= 1 ||
                (null !==
                  new URLSearchParams(H.asPath.split("?")[1]).get(
                    "verification-successful",
                  ) &&
                  O({
                    title: "Verification successful!",
                    children: "Thank you for verifying your email.",
                  }));
            }, [H.asPath]);
            let F = (e) => {
                _(!0);
                let t = p.Flip.getState(".relic");
                (E((t) => [...t, e]),
                  requestAnimationFrame(() => {
                    p.Flip.from(t, {
                      targets: ".relic",
                      duration: 0.4,
                      ease: "power2.inOut",
                      absolute: !0,
                      scale: !0,
                    });
                  }));
              },
              [V, q] = (0, g.useState)(!1),
              U = (0, g.useRef)(null);
            ((0, g.useEffect)(() => {
              let e = w.A.matchMedia();
              return (
                e.add("(max-width: 768px)", () => {
                  U &&
                    U.current &&
                    w.A.to(".torch-container", {
                      opacity: 1,
                      duration: 0.3,
                      ease: "power2.inOut",
                      scrollTrigger: {
                        trigger: U.current,
                        start: "top center",
                        end: "bottom center",
                        onToggle: ({ isActive: e }) => {
                          w.A.to(".torch-container", {
                            opacity: +!!e,
                            duration: 0.5,
                          });
                        },
                      },
                    });
                }),
                () => e.revert()
              );
            }, [U]),
              (0, g.useEffect)(() => {
                if (P) {
                  let e = w.A.matchMedia();
                  return (
                    e.add("(max-width: 768px)", () => {
                      U &&
                        U.current &&
                        w.A.to(".torch-container", {
                          opacity: 0,
                          duration: 0.3,
                          ease: "power2.inOut",
                        });
                    }),
                    () => e.revert()
                  );
                }
              }, [P]));
            let [D, G] = (0, g.useState)(!1),
              Y = () => {
                G(!0);
              };
            return (0, r.jsxs)("div", {
              children: [
                (0, r.jsxs)("main", {
                  children: [
                    (0, r.jsxs)("div", {
                      className: "overflow-hidden",
                      children: [
                        (0, r.jsx)("h1", {
                          className: "hidden",
                          children: "Tomb Raider - Adventure Awaits",
                        }),
                        (0, r.jsx)(i.A, {
                          heroCards: l,
                          websiteSingleton: N,
                          navItems: A,
                          surveys: z,
                          signUpBanner: C,
                        }),
                        (0, r.jsx)("div", {
                          className: "bg-trueblack h-40 w-full lg:h-80",
                        }),
                        B
                          ? (0, r.jsx)(a.A, {
                              handleRelicClick: F,
                              relicCollection: L,
                              gameActive: V,
                              puzzleSolved: P,
                              onUnlock: Y,
                              websiteSingleton: N,
                            })
                          : (0, r.jsxs)("div", {
                              ref: U,
                              children: [
                                (0, r.jsx)(a.A, {
                                  handleRelicClick: F,
                                  relicCollection: L,
                                  gameActive: V,
                                  puzzleSolved: P,
                                  onUnlock: Y,
                                  websiteSingleton: N,
                                }),
                                (0, r.jsx)(n.A, {
                                  lit: V,
                                  onCampfireLit: function () {
                                    ((0, y.sendGTMEvent)({
                                      event: "puzzle_start",
                                    }),
                                      q(!0),
                                      w.A.to("#campfire-text", {
                                        opacity: 0,
                                        duration: 1,
                                        ease: "power2.inOut",
                                      }));
                                  },
                                  handleRelicClick: F,
                                  relicCollection: L,
                                  websiteSingleton: N,
                                }),
                                (0, r.jsx)(o.A, {
                                  handleRelicClick: F,
                                  relicCollection: L,
                                  gameActive: V,
                                }),
                              ],
                            }),
                      ],
                    }),
                    !$ && (0, r.jsx)(c.A, { rewards: s, websiteSingleton: N }),
                    (0, r.jsx)(m.A, {
                      articles: e,
                      products: t,
                      websiteSingleton: N,
                    }),
                    (0, r.jsx)(d.A, { websiteSingleton: N }),
                  ],
                }),
                (0, r.jsx)(u.A, {
                  websiteSingleton: N,
                  navItems: A,
                  footerSocialLinks: S,
                }),
                !B &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(h.A, {
                        open: D,
                        close: () => {
                          G(!1);
                        },
                        relicCollection: L,
                        setSuccess: I,
                        websiteSingleton: N,
                      }),
                      (0, r.jsx)(f.A, { enabled: V }),
                      (0, r.jsx)(x.A, {
                        gameArea: U,
                        collection: L,
                        activated: M && V && !P && !B,
                        setActivated: R,
                        open: T,
                        setOpen: (e) => _(e),
                        puzzleOpen: D,
                        puzzleSolved: P || B,
                        websiteSingleton: N,
                      }),
                    ],
                  }),
              ],
            });
          }
          (([i, a, u, m, v] = N.then ? (await N)() : N), s());
        } catch (e) {
          s(e);
        }
      });
    },
    62538: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => r });
      var s = l(36439);
      function r() {
        let [e, t] = (0, s.useState)({ width: void 0, height: void 0 });
        return (
          (0, s.useEffect)(() => {
            function e() {
              t({ width: window.innerWidth, height: window.innerHeight });
            }
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
    },
    63348: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => n });
      var s = l(2183),
        r = l(36439),
        i = l(29704),
        a = l(27823);
      let n = ({
        gameArea: e,
        collection: t,
        activated: l,
        setActivated: n,
        open: o,
        setOpen: c,
        puzzleOpen: u,
        puzzleSolved: d,
        websiteSingleton: m,
      }) => {
        let h = (0, r.useRef)(null),
          [f, x] = (0, r.useState)(""),
          [g, p] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            if (h.current) {
              let t = l ? h.current.clientHeight - 72 : h.current.clientHeight;
              a.A.to(h.current, {
                y: t,
                duration: 0.3,
                ease: "power2.inOut",
                scrollTrigger: {
                  trigger: e.current,
                  start: "top center",
                  end: "bottom center",
                  onToggle: ({ isActive: e }) => {
                    (n(e), c(e));
                  },
                },
              });
            }
          }, [e]),
          (0, r.useEffect)(() => {
            if (h.current) {
              let e = l ? h.current.clientHeight - 72 : h.current.clientHeight;
              o && l
                ? a.A.to(h.current, {
                    y: 0,
                    ease: "power2.inOut",
                    duration: 0.3,
                  })
                : a.A.to(h.current, {
                    y: e,
                    ease: "power2.inOut",
                    duration: 0.3,
                  });
            }
          }, [o, l]),
          (0, r.useEffect)(() => {
            5 === t.length && p(!0);
          }, [t]),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)("div", {
                ref: h,
                style: { transform: "translateY(100%)" },
                className: `${d ? "opacity-0" : ""} pointer-events-none fixed bottom-0 left-0 right-0 z-[101] flex flex-col items-center transition-opacity duration-500`,
                children: [
                  (0, s.jsxs)("div", {
                    onClick: function () {
                      g
                        ? a.A.to(window, {
                            duration: 1,
                            scrollTo: {
                              y: "#vault-door-section",
                              offsetY: 200,
                            },
                          })
                        : c(!o);
                    },
                    className:
                      "pointer-events-auto flex cursor-pointer flex-col items-center",
                    children: [
                      (0, s.jsx)("div", {
                        className: `${g ? "items-center" : "top-12"} ${u ? "hidden" : ""} pointer-events-auto relative z-10 flex h-12 w-12 cursor-pointer justify-center rounded-full bg-lightgray-400 hover:bg-lightgray-500`,
                        children: (0, s.jsx)("svg", {
                          width: "24",
                          height: "24",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          className: `${o && !g ? "-scale-y-100 " : ""}h-8 w-8 transition-transform`,
                          children: (0, s.jsx)("path", {
                            d: "M7.4 15.3746L6 13.9746L12 7.97461L18 13.9746L16.6 15.3746L12 10.7746L7.4 15.3746Z",
                            fill: "#181818",
                          }),
                        }),
                      }),
                      (0, s.jsx)("span", {
                        className: `${g || u ? "opacity-100" : "opacity-0"}`,
                        children: u
                          ? m.minigameRelicTrayPuzzleOpenClickPrompt
                          : "Return to the Vault",
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    id: "relic-tray",
                    className:
                      "pointer-events-auto z-20 mx-auto mb-2 flex aspect-[5] h-16 items-center justify-center bg-[url('/images/minigame/tray/stone-background.webp')] bg-cover bg-no-repeat p-1",
                    children: t.map(function (e, t) {
                      return (0, s.jsx)(
                        i.A,
                        { onClick: x, name: e, collected: !0, zoomed: !1 },
                        t,
                      );
                    }),
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "absolute left-0 right-0 top-7 -z-10 mx-auto hidden h-[100vw] w-screen rounded-full bg-black/20 lg:block lg:h-[40rem] lg:w-[40rem]",
                  }),
                ],
              }),
              "" !== f &&
                (0, s.jsx)("div", {
                  onClick: () => x(""),
                  className:
                    "fixed left-0 top-0 z-[103] flex h-screen w-screen cursor-pointer items-center justify-center bg-black/80",
                  children: (0, s.jsx)(i.A, {
                    onClick: () => x(""),
                    name: f,
                    collected: !0,
                    zoomed: !0,
                  }),
                }),
            ],
          })
        );
      };
    },
    65986: (e, t, l) => {
      "use strict";
      l.d(t, { k: () => a });
      var s = l(2183),
        r = l(44190),
        i = l(36439);
      let a = ({
        vaseHovered: e,
        vaseCollected: t,
        maskHovered: l,
        maskCollected: a,
        doorOpen: n,
      }) => {
        let { rive: o, RiveComponent: c } = (0, r.useRive)({
            src: "/animations/tomb.riv",
            stateMachines: "State Machine 1",
            autoplay: !0,
            layout: new r.Layout({
              fit: r.Fit.Cover,
              alignment: r.Alignment.Center,
            }),
            shouldDisableRiveListeners: !0,
            useOffscreenRenderer: !1,
          }),
          u = (0, r.useStateMachineInput)(o, "State Machine 1", "DoorOpen"),
          d = (0, r.useStateMachineInput)(
            o,
            "State Machine 1",
            "VaseShimmering",
          ),
          m = (0, r.useStateMachineInput)(o, "State Machine 1", "VaseAway"),
          h = (0, r.useStateMachineInput)(
            o,
            "State Machine 1",
            "MaskShimmering",
          ),
          f = (0, r.useStateMachineInput)(o, "State Machine 1", "MaskAway");
        return (
          (0, i.useEffect)(() => {
            n && u && (u.value = !0);
          }, [n, u]),
          (0, i.useEffect)(() => {
            d &&
              (t && m
                ? ((d.value = !1), (m.value = !0))
                : e
                  ? (d.value = !0)
                  : (d.value = !1));
          }, [e, t, d]),
          (0, i.useEffect)(() => {
            h &&
              (a && f
                ? ((h.value = !1), (f.value = !0))
                : l
                  ? (h.value = !0)
                  : (h.value = !1));
          }, [l, a, h]),
          (0, s.jsx)(c, { className: "pointer-events-none h-full w-full" })
        );
      };
    },
    87315: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => h });
      var s = l(2183),
        r = l(36439),
        i = l(15013),
        a = l.n(i),
        n = l(27823),
        o = l(93551),
        c = l.n(o),
        u = l(29704),
        d = l(44190);
      let m = ({
        crownHovered: e,
        crownCollected: t,
        helmetHovered: l,
        helmetCollected: i,
      }) => {
        let { rive: a, RiveComponent: n } = (0, d.useRive)({
            src: "/animations/darkness.riv",
            stateMachines: "State Machine 1",
            autoplay: !0,
            layout: new d.Layout({
              fit: d.Fit.Cover,
              alignment: d.Alignment.Center,
            }),
            useOffscreenRenderer: !1,
          }),
          o = (0, d.useStateMachineInput)(
            a,
            "State Machine 1",
            "CrownShimmering",
          ),
          c = (0, d.useStateMachineInput)(a, "State Machine 1", "CrownAway"),
          u = (0, d.useStateMachineInput)(
            a,
            "State Machine 1",
            "HelmetShimmering",
          ),
          m = (0, d.useStateMachineInput)(a, "State Machine 1", "HelmetAway");
        return (
          (0, r.useEffect)(() => {
            o &&
              (t && c
                ? ((o.value = !1), (c.value = !0))
                : e
                  ? (o.value = !0)
                  : (o.value = !1));
          }, [e, t, o]),
          (0, r.useEffect)(() => {
            u &&
              (i && m
                ? ((u.value = !1), (m.value = !0))
                : l
                  ? (u.value = !0)
                  : (u.value = !1));
          }, [l, i, u]),
          (0, s.jsx)(n, { className: "pointer-events-none h-full w-full" })
        );
      };
      function h({ handleRelicClick: e, relicCollection: t, gameActive: l }) {
        let i = (0, r.useRef)(null),
          o = (0, r.useRef)(null),
          [d, f] = (0, r.useState)(!1),
          [x, g] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            let e = n.A.context(() => {
              let e = i.current;
              (n.A.from(".darkness-background", {
                scrollTrigger: {
                  trigger: e,
                  start: "top bottom",
                  end: "bottom center",
                  scrub: 0.5,
                },
                yPercent: -50,
              }),
                n.A.from(".horizontal-pillars", {
                  scrollTrigger: {
                    trigger: e,
                    start: "top center",
                    end: "bottom center",
                    scrub: 0.5,
                  },
                  yPercent: -20,
                }),
                n.A.to(".transition-leaves", {
                  scrollTrigger: {
                    trigger: o.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.5,
                  },
                  yPercent: -25,
                }));
            }, [i]);
            return () => e.revert();
          }, []),
          (0, r.useEffect)(() => {
            if (l) {
              let e = n.A.matchMedia();
              return (
                e.add("(max-width: 768px)", () => {
                  (c().create({
                    trigger: i.current,
                    start: "top 70%",
                    end: "top+=200px 70%",
                    onToggle: (e) => {
                      l && g(e.isActive);
                    },
                  }),
                    c().create({
                      trigger: i.current,
                      start: "bottom-=200px center",
                      end: "bottom center",
                      onToggle: (e) => {
                        l && f(e.isActive);
                      },
                    }));
                }),
                () => e.revert()
              );
            }
          }, [l]),
          (0, s.jsxs)("div", {
            ref: i,
            className:
              "torch-visible relative z-40 aspect-[1/1.85] w-full overflow-y-visible lg:aspect-square",
            children: [
              (0, s.jsxs)("div", {
                className: "relative h-full w-full overflow-hidden",
                children: [
                  (0, s.jsxs)("div", {
                    className:
                      "darkness-background absolute bottom-0 left-0 z-10 h-full w-full brightness-[.3]",
                    children: [
                      (0, s.jsx)(m, {
                        crownHovered: d,
                        crownCollected: t.includes("crown"),
                        helmetHovered: x,
                        helmetCollected: t.includes("helmet"),
                      }),
                      !t.includes("crown") &&
                        (0, s.jsx)("div", {
                          onMouseEnter: () => f(!0),
                          onMouseLeave: () => f(!1),
                          className: `${!l ? "pointer-events-none" : ""} absolute bottom-[17%] left-1/2 z-20 flex aspect-square w-[20%] -translate-x-1/2 items-center justify-center lg:bottom-[15%] lg:w-[15%]`,
                          children: (0, s.jsx)(u.A, {
                            onClick: e,
                            name: "crown",
                            collected: !1,
                            zoomed: !1,
                          }),
                        }),
                      !t.includes("helmet") &&
                        (0, s.jsx)("div", {
                          onMouseEnter: () => g(!0),
                          onMouseLeave: () => g(!1),
                          className: `${!l ? "pointer-events-none" : ""} absolute left-[30%] top-[27%] z-20 flex aspect-square w-[20%] items-center justify-center lg:left-[36%] lg:top-[25%] lg:w-[15%]`,
                          children: (0, s.jsx)(u.A, {
                            onClick: e,
                            name: "helmet",
                            collected: !1,
                            zoomed: !1,
                          }),
                        }),
                    ],
                  }),
                  (0, s.jsx)(a(), {
                    width: 1440,
                    height: 1440,
                    alt: "Darkness Foreground",
                    src: "/images/darkness-scene_foreground.png",
                    className:
                      "pointer-events-none absolute right-0 top-0 z-20 h-full w-full object-cover",
                    priority: !0,
                  }),
                  (0, s.jsx)(a(), {
                    width: 1440,
                    height: 1440,
                    alt: "Darkness Foreground Pillars",
                    src: "/images/darkness-scene_foreground-horiz-pillars.png",
                    className:
                      "horizontal-pillars pointer-events-none absolute right-0 top-0 z-10 h-[40%] object-cover lg:h-auto lg:w-full",
                    priority: !0,
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                ref: o,
                className:
                  "pointer-events-none absolute left-0 top-0 z-20 w-full -translate-y-[20%]",
                children: (0, s.jsx)(a(), {
                  width: 1920,
                  height: 1557,
                  alt: "Top leaves transition",
                  src: "/images/transitions/Transition_3.webp",
                  className: "transition-leaves w-full",
                  priority: !0,
                }),
              }),
            ],
          })
        );
      }
    },
    92112: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => d });
      var s = l(2183),
        r = l(36439),
        i = l(15013),
        a = l.n(i),
        n = l(64171),
        o = l(27823);
      let c = (0, r.forwardRef)(({ runeVal: e, setRuneVal: t }, l) => {
        let i = [
            { name: "Rune 1", imageUrl: "/images/minigame/runes/rune_1.png" },
            { name: "Rune 2", imageUrl: "/images/minigame/runes/rune_2.png" },
            { name: "Rune 3", imageUrl: "/images/minigame/runes/rune_3.png" },
            { name: "Rune 4", imageUrl: "/images/minigame/runes/rune_4.png" },
            { name: "Rune 5", imageUrl: "/images/minigame/runes/rune_5.png" },
            { name: "Rune 6", imageUrl: "/images/minigame/runes/rune_6.png" },
          ],
          [n, c] = (0, r.useState)("up"),
          u = (0, r.useRef)(null);
        return (
          (0, r.useEffect)(() => {
            let t = o.A.context(() => {
              o.A.fromTo(
                ".rune-" + e,
                { y: "up" === n ? 10 : -10, opacity: 0, overwrite: "auto" },
                { y: 0, opacity: 1 },
              );
            }, u);
            return () => t.revert();
          }, [e]),
          (0, s.jsxs)("div", {
            ref: u,
            className: "flex w-1/5 flex-col justify-center",
            children: [
              (0, s.jsxs)("button", {
                onMouseDown: function () {
                  (c("up"), e === i.length - 1 ? t(0) : t(e + 1));
                },
                ref: l,
                type: "button",
                className:
                  "group relative flex aspect-[2] w-full cursor-pointer items-center justify-center rounded-xl hover:backdrop-brightness-75",
                children: [
                  (0, s.jsx)(a(), {
                    src: "/images/minigame/arrow_default.png",
                    alt: "up arrow",
                    width: 256,
                    height: 172,
                    className:
                      "pointer-events-none absolute left-0 right-0 mx-auto w-1/2",
                    priority: !0,
                  }),
                  (0, s.jsx)(a(), {
                    src: "/images/minigame/arrow_hover.png",
                    alt: "up arrow hovered",
                    width: 256,
                    height: 172,
                    className:
                      "pointer-events-none absolute left-0 right-0 z-10 mx-auto w-1/2 opacity-0 transition-opacity group-hover:opacity-100",
                    priority: !0,
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className:
                  "relative flex aspect-[6/5] w-full items-center justify-center",
                children: i.map((e, t) =>
                  (0, s.jsx)(
                    "div",
                    {
                      className: `rune ${"rune-" + t} absolute flex h-full w-full items-center justify-center opacity-0`,
                      children: (0, s.jsx)(a(), {
                        src: e.imageUrl,
                        alt: e.name,
                        width: 256,
                        height: 256,
                        className: "h-full object-contain",
                        priority: !0,
                      }),
                    },
                    t,
                  ),
                ),
              }),
              (0, s.jsxs)("button", {
                onMouseDown: function () {
                  (c("down"), 0 === e ? t(i.length - 1) : t(e - 1));
                },
                type: "button",
                className:
                  "group relative flex aspect-[2] w-full cursor-pointer items-center justify-center rounded-xl hover:backdrop-brightness-75",
                children: [
                  (0, s.jsx)(a(), {
                    src: "/images/minigame/arrow_default.png",
                    alt: "down arrow",
                    width: 256,
                    height: 172,
                    className:
                      "pointer-events-none absolute left-0 right-0 mx-auto w-1/2 rotate-180",
                    priority: !0,
                  }),
                  (0, s.jsx)(a(), {
                    src: "/images/minigame/arrow_hover.png",
                    alt: "down arrow hovered",
                    width: 256,
                    height: 172,
                    className:
                      "pointer-events-none absolute left-0 right-0 z-10 mx-auto w-1/2 rotate-180 opacity-0 transition-opacity group-hover:opacity-100",
                    priority: !0,
                  }),
                ],
              }),
            ],
          })
        );
      });
      c.displayName = "RuneSelector";
      var u = l(26330);
      function d({
        open: e,
        close: t,
        relicCollection: l,
        setSuccess: i,
        websiteSingleton: m,
      }) {
        let [h, f] = (0, r.useState)([0, 0, 0, 0, 0]),
          x = [
            { runeIndex: 5, relicClue: "crown" },
            { runeIndex: 2, relicClue: "horn" },
            { runeIndex: 4, relicClue: "mask" },
            { runeIndex: 3, relicClue: "helmet" },
            { runeIndex: 0, relicClue: "vase" },
          ],
          [g, p] = (0, r.useState)(!1),
          [v, w] = (0, r.useState)(!1),
          [b, j] = (0, r.useState)(!1),
          y = (0, r.useRef)(null);
        function N() {
          h.every((e, t) => e === x[t].runeIndex)
            ? (i(!0),
              t(),
              j(!1),
              (0, u.sendGTMEvent)({ event: "puzzle_solve" }))
            : (j(!0),
              o.A.timeline()
                .to(".error-message", { x: 10, duration: 0.1 })
                .to(".error-message", { x: -10, duration: 0.1 })
                .to(".error-message", { x: 10, duration: 0.1 })
                .to(".error-message", { x: -10, duration: 0.1 })
                .to(".error-message", { x: 0, duration: 0.1 })
                .play());
        }
        return (
          (0, r.useEffect)(() => {
            v &&
              (i(!0),
              j(!1),
              t(),
              (0, u.sendGTMEvent)({ event: "puzzle_skip" }));
          }, [v]),
          (0, r.useEffect)(() => {
            e
              ? (document.body.classList.add("overflow-hidden"),
                y.current && y.current.focus())
              : document.body.classList.remove("overflow-hidden");
          }, [e]),
          (0, s.jsxs)("div", {
            className: `${!e ? "hidden" : ""}`,
            children: [
              (0, s.jsx)("button", {
                "aria-label": "Close",
                className: "fixed right-0 top-0 z-[102] flex items-center p-6",
                onClick: t,
                children: (0, s.jsxs)("svg", {
                  "aria-hidden": "true",
                  className: "h-12 w-12",
                  width: "40",
                  height: "40",
                  viewBox: "0 0 40 40",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    (0, s.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M31.3137 10.1014L10.1005 31.3146L8.68628 29.9004L29.8995 8.68719L31.3137 10.1014Z",
                      fill: "white",
                    }),
                    (0, s.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M29.799 31.6274L8.58579 10.4142L10 9L31.2132 30.2132L29.799 31.6274Z",
                      fill: "white",
                    }),
                  ],
                }),
              }),
              (0, s.jsxs)("div", {
                className:
                  "fixed top-0 z-[101] h-screen w-screen overflow-x-hidden bg-black/40 backdrop-blur-md",
                children: [
                  (0, s.jsx)("div", {
                    className:
                      "relative flex w-full items-center justify-center overflow-y-auto overflow-x-hidden py-28",
                    children: (0, s.jsxs)("div", {
                      className:
                        "flex w-full flex-col items-center justify-center",
                      children: [
                        (0, s.jsxs)("div", {
                          className: "mb-8 px-4",
                          children: [
                            (0, s.jsx)("p", {
                              className: "mb-3 text-center text-2xl",
                              children: m.minigamePuzzleTitle,
                            }),
                            5 !== l.length &&
                              (0, s.jsx)("p", {
                                className: "text-center",
                                children: m.minigamePuzzleMissingRelicsSubtitle,
                              }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "relative flex w-full max-w-3xl select-none flex-col items-center justify-center",
                          children: [
                            (0, s.jsx)("div", {
                              className:
                                "mb-20 flex w-full scale-[1.12] justify-center px-[7%] sm:scale-100",
                              children: x.map(function (e, t) {
                                return l.includes(e.relicClue)
                                  ? (0, s.jsx)(
                                      "div",
                                      {
                                        className:
                                          "mx-[2%] flex aspect-square w-full items-center justify-center",
                                        children: (0, s.jsx)(a(), {
                                          width: 256,
                                          height: 256,
                                          alt: `A ancient symbol in the shape of a ${e.relicClue}`,
                                          src:
                                            "/images/minigame/relics/clues/relic-clue_" +
                                            e.relicClue +
                                            ".png",
                                          priority: !0,
                                          className: "scale-150",
                                        }),
                                      },
                                      t,
                                    )
                                  : (0, s.jsxs)(
                                      "div",
                                      {
                                        className:
                                          "relative mx-[2%] flex aspect-square w-full items-center justify-center",
                                        children: [
                                          (0, s.jsx)(a(), {
                                            width: 256,
                                            height: 256,
                                            alt: "Hidden Relic Clue " + t,
                                            src:
                                              "/images/minigame/relics/clues/hidden/relic-clue_" +
                                              e.relicClue +
                                              ".svg",
                                            className: "scale-150 opacity-20",
                                            priority: !0,
                                          }),
                                          (0, s.jsx)(a(), {
                                            width: 18,
                                            height: 32,
                                            alt: "Hidden Relic Clue Question Mark",
                                            src: "/images/minigame/relics/clues/hidden/question-mark.svg",
                                            className:
                                              "absolute left-0 right-0 mx-auto w-4",
                                            priority: !0,
                                          }),
                                        ],
                                      },
                                      t,
                                    );
                              }),
                            }),
                            (0, s.jsxs)("div", {
                              className:
                                "relative flex w-full scale-[1.12] items-center justify-center px-[7%] sm:scale-100",
                              children: [
                                (0, s.jsx)(a(), {
                                  width: "1600",
                                  height: "820",
                                  alt: "A puzzle frame made of jade",
                                  src: "/images/minigame/puzzle-background.png",
                                  className:
                                    "absolute left-1/2 top-1/2 -z-10 w-full -translate-x-1/2 -translate-y-1/2 object-cover",
                                  priority: !0,
                                }),
                                (0, s.jsx)("div", {
                                  className: "flex w-full translate-y-0.5",
                                  children: h.map(function (e, t) {
                                    return (0, s.jsx)(
                                      c,
                                      {
                                        ref: 0 === t ? y : null,
                                        runeVal: e,
                                        setRuneVal: (e) => {
                                          let l;
                                          (((l = [...h])[t] = e), f(l));
                                        },
                                      },
                                      t,
                                    );
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "mt-20 flex flex-col items-center justify-center",
                          children: [
                            (0, s.jsxs)("div", {
                              className: "mb-4 flex gap-4",
                              children: [
                                (0, s.jsx)(n.A, {
                                  onClick: () => t(),
                                  children: m.minigamePuzzleCloseButtonText,
                                }),
                                (0, s.jsx)(n.A, {
                                  onClick: () => N(),
                                  children: m.minigamePuzzleSolveButton,
                                }),
                              ],
                            }),
                            (0, s.jsx)("p", {
                              className: `${!b ? "invisible " : ""} error-message text-center`,
                              children: m.minigamePuzzleIncorrectText,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsx)("div", {
                    className: "absolute bottom-4 right-8",
                    children: g
                      ? (0, s.jsxs)("div", {
                          className: "max-w-sm rounded-2xl bg-white p-4",
                          children: [
                            (0, s.jsx)("p", {
                              className: "mb-4 font-bold text-black ",
                              children: m.minigamePuzzleSkipExplanationText,
                            }),
                            (0, s.jsxs)("div", {
                              className: "flex gap-4",
                              children: [
                                (0, s.jsx)(n.A, {
                                  className: "puzzle_skip",
                                  "aria-label": "Yes, Skip Puzzle Button",
                                  variant: "green",
                                  onClick: () => {
                                    (w(!0), N());
                                  },
                                  children: "Yes",
                                }),
                                (0, s.jsx)(n.A, {
                                  "aria-label": "No, Don't Skip Puzzle Button",
                                  variant: "green",
                                  onClick: () => p(!1),
                                  children: "No",
                                }),
                              ],
                            }),
                          ],
                        })
                      : (0, s.jsx)("button", {
                          "aria-label": "Skip Puzzle Button",
                          className: "rounded-lg bg-white/5 px-4 py-2",
                          onClick: () => p(!0),
                          children: m.minigamePuzzleSkipButtonText,
                        }),
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    93260: (e, t, l) => {
      "use strict";
      l.a(e, async (e, s) => {
        try {
          l.d(t, { A: () => x });
          var r = l(2183),
            i = l(15013),
            a = l.n(i),
            n = l(49980),
            o = l(36439),
            c = l(64171),
            u = l(94536),
            d = l(62538),
            m = l(92642),
            h = l(12317),
            f = e([n, m]);
          function x({
            heroCards: e,
            websiteSingleton: t,
            navItems: l,
            surveys: s,
            signUpBanner: i,
          }) {
            let [f, p] = (0, o.useState)(0),
              [v, w] = (0, o.useState)(null),
              [b, j] = (0, o.useState)(!0),
              { width: y = 1600 } = (0, d.A)(),
              N = (t) => {
                let l = t;
                (l > e.length && (l = 0),
                  l < 0 && (l = e.length),
                  p(l),
                  v?.slideTo(l));
              },
              k = () => {
                b && N(f + 1);
              },
              A = () => {
                j(!1);
              };
            return (
              (0, o.useEffect)(() => {
                let e = setInterval(k, t.globalSliderAutoplayDelay || 3e3);
                return () => clearInterval(e);
              }, [b, f]),
              (0, r.jsx)(r.Fragment, {
                children: (0, r.jsxs)("div", {
                  className:
                    "relative flex min-h-[max(1000px,100svh)] w-full shrink-0 flex-col items-center justify-stretch overflow-hidden",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "-z-5 absolute left-0 top-0 h-full w-full",
                      children: [
                        (0, r.jsxs)("div", {
                          style: {
                            opacity: +(0 === f),
                            transition: "all 0.3s ease",
                          },
                          className:
                            "absolute left-0 top-0 mt-[96px] max-h-none min-h-[40%] min-w-full max-w-full md:min-h-[50%] lg:mt-0 xl:min-h-full",
                          children: [
                            (0, r.jsx)(a(), {
                              fill: !0,
                              priority: !0,
                              className: "object-cover object-center",
                              alt: "Golden sunlight filters through the dense foliage of a jungle, illuminating an ancient stone archway and watchful mountain lion.",
                              src: (0, m._c)(
                                t.homepageHeroBackground?.fields.file?.url,
                              ),
                            }),
                            (0, r.jsx)("div", {
                              className:
                                "pointer-events-none absolute top-1/2 h-1/2 w-full bg-gradient-to-b from-transparent to-black",
                            }),
                          ],
                        }),
                        e.map((t, l) =>
                          t.backgroundVideoLink
                            ? (0, r.jsxs)(
                                "div",
                                {
                                  style: {
                                    opacity: +(f - 1 === l),
                                    transition: "all 0.3s ease",
                                  },
                                  className:
                                    "absolute left-0 top-0 mt-[96px] min-h-[40%] min-w-full max-w-full md:min-h-[50%] lg:mt-0 xl:min-h-full",
                                  children: [
                                    (0, r.jsx)("iframe", {
                                      src: e[l].backgroundVideoLink ?? "",
                                      allow:
                                        "autoplay; fullscreen; picture-in-picture",
                                      allowFullScreen: !0,
                                      style: {
                                        opacity: +(f - 1 === l),
                                        transition: "all 0.3s ease",
                                      },
                                      className:
                                        "absolute left-1/2 top-1/2 aspect-[16/9] max-h-none min-h-full min-w-full max-w-none translate-x-[-50%] translate-y-[-50%] object-cover",
                                    }),
                                    (0, r.jsx)("div", {
                                      className:
                                        "pointer-events-none absolute top-1/2 h-1/2 w-full border-0 bg-gradient-to-b from-transparent to-black",
                                    }),
                                  ],
                                },
                                l,
                              )
                            : (0, r.jsxs)(
                                "div",
                                {
                                  style: {
                                    opacity: +(f - 1 === l),
                                    transition: "all 0.3s ease",
                                  },
                                  className:
                                    "absolute left-0 top-0 mt-[96px] max-h-none min-h-[40%] min-w-full max-w-full md:min-h-[50%] lg:mt-0 xl:min-h-full",
                                  children: [
                                    (0, r.jsx)(a(), {
                                      fill: !0,
                                      className: "object-cover object-center",
                                      alt:
                                        e[l].backgroundImage?.fields
                                          .description ?? "",
                                      src: (0, m._c)(
                                        e[l].backgroundImage?.fields?.file
                                          ?.url ?? "",
                                      ),
                                    }),
                                    (0, r.jsx)("div", {
                                      className:
                                        "pointer-events-none absolute top-0 h-full w-full bg-gradient-to-b from-transparent to-black",
                                    }),
                                  ],
                                },
                                l,
                              ),
                        ),
                      ],
                    }),
                    (0, r.jsx)(n.Ay, {
                      surveys: s,
                      navItems: l,
                      signUpBanner: i,
                    }),
                    (0, r.jsx)("div", {
                      className:
                        "flex w-full grow flex-col items-center justify-stretch px-4 pb-4 pt-28 sm:px-12",
                      children: (0, r.jsx)("div", {
                        className:
                          "flex max-w-full grow items-center justify-center",
                        children: (() => {
                          if (0 !== f)
                            return (0, r.jsxs)("div", {
                              className: `space-between relative flex max-w-full grow flex-col-reverse items-center gap-x-8 gap-y-6 lg:flex-row ${e[f - 1].secondaryImage ? "max-w-6xl" : "max-w-2xl"}`,
                              children: [
                                (0, r.jsxs)("div", {
                                  className: `z-[10] flex max-w-full flex-col items-center text-center md:max-w-2xl ${e[f - 1].secondaryImage ? "lg:items-start lg:text-left" : ""}`,
                                  children: [
                                    (0, r.jsx)("p", {
                                      className:
                                        "pb-8 text-3xl sm:text-4xl lg:text-5xl",
                                      children: e[f - 1].title,
                                    }),
                                    (0, r.jsx)("p", {
                                      className: "text-md pb-12",
                                      children: e[f - 1].body,
                                    }),
                                    (0, r.jsx)(h.A, {
                                      href: e[f - 1].ctaButtonLink,
                                      children: (0, r.jsx)(c.A, {
                                        children: e[f - 1].ctaButtonLabel,
                                      }),
                                    }),
                                  ],
                                }),
                                e[f - 1].secondaryImage &&
                                  (0, r.jsx)("div", {
                                    className:
                                      "relative aspect-[16/9] w-full max-w-xs grow lg:aspect-[16/16] lg:h-[30rem] lg:w-auto lg:max-w-full",
                                    children: (0, r.jsx)(a(), {
                                      fill: !0,
                                      className: "object-contain",
                                      alt:
                                        e[f - 1].secondaryImage?.fields
                                          .description ?? "",
                                      src: (0, m._c)(
                                        e[f - 1].secondaryImage?.fields.file
                                          ?.url ?? "",
                                      ),
                                    }),
                                  }),
                              ],
                            });
                          {
                            let e = t.homepageHeroLogo;
                            return (0, r.jsxs)("div", {
                              className:
                                "flex flex-col items-center justify-center gap-y-6",
                              children: [
                                (0, r.jsx)(a(), {
                                  className: "z-10",
                                  src: (0, m._c)(e?.fields.file?.url),
                                  alt: e?.fields.description ?? "Logo",
                                  width: 417,
                                  height: 187,
                                }),
                                (0, r.jsx)("div", {
                                  className:
                                    "flex flex-col items-center gap-6 self-stretch",
                                  children: (0, r.jsx)("p", {
                                    className:
                                      "z-10 whitespace-nowrap text-base font-bold uppercase tracking-[1.6px]",
                                    children: t.homepageHeroSubtitle,
                                  }),
                                }),
                              ],
                            });
                          }
                        })(),
                      }),
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "z-5 relative flex h-auto max-w-full items-start gap-1 self-stretch pb-8 lg:max-w-[94vw] lg:gap-2 lg:self-auto lg:pb-0",
                      children: [
                        (0, r.jsx)(a(), {
                          width: 48,
                          height: 48,
                          alt: "Left arrow",
                          src: "/images/arrow-button-left-white.svg",
                          className:
                            "absolute -left-4 top-10 z-10 hidden cursor-pointer rounded-full border-[1.5px] border-solid border-white bg-white/60 lg:block",
                          onClick: () => {
                            (N(f - 1), A());
                          },
                        }),
                        (0, r.jsx)(a(), {
                          width: 48,
                          height: 48,
                          alt: "Right arrow",
                          src: "/images/arrow-button-right-white.svg",
                          className:
                            "absolute -right-4 top-10 z-10 hidden cursor-pointer rounded-full border-[1.5px] border-solid border-white bg-white/60 lg:block",
                          onClick: () => {
                            (N(f + 1), A());
                          },
                        }),
                        (0, r.jsxs)(u.RC, {
                          className:
                            "swiper-show-overflow relative flex w-full pl-8 lg:pl-16",
                          slidesPerView: "auto",
                          centeredSlides: y <= 1024,
                          onSwiper: (e) => w(e),
                          onSlideChange: (e) => N(e.activeIndex),
                          children: [
                            (0, r.jsx)(u.qr, {
                              onClick: A,
                              className: "mx-1",
                              style: { width: 230 },
                              children: (0, r.jsx)(g, {
                                thumbnail: (0, m._c)(
                                  t.homepageHeroBackground?.fields.file?.url,
                                ),
                                index: 0,
                                alt: "Hero Background Image",
                                title: "",
                                selectedIndex: f,
                                setSelectedIndex: (e) => N(e),
                              }),
                            }),
                            e.map(({ thumbnail: e, title: t }, l) =>
                              (0, r.jsx)(
                                u.qr,
                                {
                                  onClick: A,
                                  className: "mx-1",
                                  style: { width: 230 },
                                  children: (0, r.jsx)(g, {
                                    thumbnail: `https://${e?.fields.file?.url ?? ""}`,
                                    alt: e?.fields?.description ?? "",
                                    title: t,
                                    index: l + 1,
                                    selectedIndex: f,
                                    setSelectedIndex: (e) => N(e),
                                  }),
                                },
                                l,
                              ),
                            ),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsx)("div", {
                      className:
                        "pointer-events-none absolute bottom-0 left-0 h-3/4 w-full bg-gradient-to-b from-transparent to-trueblack",
                    }),
                    (0, r.jsx)("p", {
                      className:
                        "relative z-10 hidden pb-16 pt-4 text-sm/3 font-medium text-customgray-500/70 lg:block",
                      children: t.homepageHeroSliderSubtitle,
                    }),
                  ],
                }),
              })
            );
          }
          function g({
            thumbnail: e,
            title: t,
            alt: l,
            index: s,
            setSelectedIndex: i,
            selectedIndex: n,
          }) {
            return (0, r.jsxs)(
              "div",
              {
                className: `relative aspect-[16/9] w-full shrink-0 transition-all ${n === s ? "" : "brightness-[0.6] hover:brightness-100"}`,
                children: [
                  (0, r.jsx)(a(), {
                    className:
                      "aspect-[16/9] cursor-pointer object-cover shadow-sm",
                    src: e,
                    alt: l,
                    fill: !0,
                    sizes:
                      "(max-width: 768px) 25vw, (max-width: 1200px) 20vw, 15vw",
                    onClick: () => i(s),
                  }),
                  (0, r.jsxs)("div", {
                    style: { opacity: +(s === n) },
                    className: "duration-300",
                    children: [
                      (0, r.jsx)(a(), {
                        className: "absolute -left-1 -top-1",
                        width: 24,
                        height: 24,
                        alt: "top left bracket",
                        src: "/images/small-top-left-bracket.svg",
                      }),
                      (0, r.jsx)(a(), {
                        className: "absolute -right-1 -top-1",
                        width: 24,
                        height: 24,
                        alt: "top right bracket",
                        src: "/images/small-top-right-bracket.svg",
                      }),
                      (0, r.jsx)(a(), {
                        className: "absolute -bottom-1 -left-1",
                        width: 24,
                        height: 24,
                        alt: "bottom left bracket",
                        src: "/images/small-bottom-left-bracket.svg",
                      }),
                      (0, r.jsx)(a(), {
                        className: "absolute -bottom-1 -right-1",
                        width: 24,
                        height: 24,
                        alt: "bottom right bracket",
                        src: "/images/small-bottom-right-bracket.svg",
                      }),
                    ],
                  }),
                ],
              },
              t,
            );
          }
          (([n, m] = f.then ? (await f)() : f), s());
        } catch (e) {
          s(e);
        }
      });
    },
    97882: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => x });
      var s = l(2183),
        r = l(36439),
        i = l(15013),
        a = l.n(i),
        n = l(27823),
        o = l(93551),
        c = l.n(o),
        u = l(12979),
        d = l(29704),
        m = l(44190);
      let h = ({ hovered: e }) => {
          let { rive: t, RiveComponent: l } = (0, m.useRive)({
              src: "/animations/campfire_circle.riv",
              stateMachines: "State Machine 1",
              autoplay: !0,
              layout: new m.Layout({ fit: m.Fit.Cover }),
              useOffscreenRenderer: !1,
            }),
            i = (0, m.useStateMachineInput)(
              t,
              "State Machine 1",
              "Highlighted",
            );
          return (
            (0, r.useEffect)(() => {
              i && (e ? (i.value = !0) : (i.value = !1));
            }, [e]),
            (0, s.jsx)(l, { className: "pointer-events-none h-full w-full" })
          );
        },
        f = ({ relicName: e, hovered: t, collected: l }) => {
          let { rive: i, RiveComponent: a } = (0, m.useRive)({
              src: "/animations/" + e + ".riv",
              stateMachines: "State Machine 1",
              autoplay: !0,
              layout: new m.Layout({ fit: m.Fit.Cover }),
              useOffscreenRenderer: !1,
            }),
            n = e.charAt(0).toUpperCase() + e.slice(1),
            o = (0, m.useStateMachineInput)(
              i,
              "State Machine 1",
              n + "Shimmering",
            ),
            c = (0, m.useStateMachineInput)(i, "State Machine 1", n + "Away");
          return (
            (0, r.useEffect)(() => {
              o &&
                (l && c
                  ? ((o.value = !1), (c.value = !0))
                  : t
                    ? (o.value = !0)
                    : (o.value = !1));
            }, [t, l, o]),
            (0, s.jsx)(a, { className: "pointer-events-none h-full w-full" })
          );
        };
      function x({
        lit: e,
        onCampfireLit: t,
        handleRelicClick: l,
        relicCollection: i,
        websiteSingleton: o,
      }) {
        let [m, g] = (0, r.useState)(!1),
          [p, v] = (0, r.useState)(!1),
          w = (0, r.useRef)(null),
          b = (0, r.useRef)(null),
          j = (0, r.useRef)(null);
        return (
          (0, r.useEffect)(() => {
            let e = n.A.context(() => {
              let e = w.current;
              j.current = n.A.timeline({
                scrollTrigger: {
                  trigger: e,
                  start: "top 60%",
                  end: "bottom center",
                  scrub: 0.5,
                },
              })
                .to(
                  ".left-leaves",
                  { xPercent: -100, yPercent: 75, rotate: 60 },
                  0,
                )
                .to(
                  ".right-leaves",
                  { xPercent: 100, yPercent: 50, rotate: -60 },
                  0,
                );
              let t = new u.SplitText("#campfire-text", {
                type: "words, chars",
              });
              (n.A.from(t.chars, {
                scrollTrigger: {
                  trigger: "#campfire-text",
                  start: "top bottom",
                  end: "top 70%",
                  toggleActions: "none play none reset",
                },
                opacity: 0,
                y: 10,
                filter: "blur(5px)",
                duration: 1,
                stagger: { amount: 3, from: "random" },
                ease: "power2.out",
              }),
                n.A.to(".transition-leaves", {
                  scrollTrigger: {
                    trigger: b.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.5,
                  },
                  yPercent: -25,
                }));
            }, [w]);
            return () => e.revert();
          }, []),
          (0, r.useEffect)(() => {
            if (e) {
              let t = n.A.context(() => {
                  let e = new u.SplitText("#campfire-hint", {
                    type: "words, chars",
                  });
                  n.A.from(e.chars, {
                    scrollTrigger: {
                      trigger: "#campfire-hint",
                      start: "top bottom",
                      end: "top 70%",
                      toggleActions: "none play none reset",
                    },
                    opacity: 0,
                    y: 10,
                    filter: "blur(5px)",
                    duration: 1,
                    stagger: { amount: 3, from: "random" },
                    ease: "power2.out",
                    delay: 1,
                  });
                }, [w]),
                l = n.A.matchMedia();
              return (
                l.add("(max-width: 768px)", () => {
                  c().create({
                    trigger: w.current,
                    start: "center-=100px center",
                    end: "center+=100px center",
                    onToggle: (t) => {
                      e && v(t.isActive);
                    },
                  });
                }),
                () => {
                  (t.revert(), l.revert());
                }
              );
            }
          }, [e]),
          (0, s.jsxs)("div", {
            ref: w,
            className:
              "torch-visible relative z-40 aspect-[1/1.85] w-screen overflow-y-visible lg:aspect-square",
            children: [
              (0, s.jsx)("h2", {
                id: "campfire-text",
                className:
                  "absolute left-0 right-0 top-1/3 z-20 mx-auto mb-6 w-full px-8 text-center text-3xl font-medium lg:max-w-4xl lg:text-6xl",
                children: o.minigameFirePrompt,
              }),
              (0, s.jsx)("h2", {
                id: "campfire-hint",
                className: `${!e ? "opacity-0" : ""} absolute left-0 right-0 top-1/3 z-20 mx-auto mb-6 w-full px-8 text-center text-3xl font-medium lg:max-w-4xl lg:text-6xl`,
                children: o.minigameFireHint,
              }),
              (0, s.jsxs)("div", {
                className: "absolute h-full w-full",
                children: [
                  (0, s.jsx)(a(), {
                    width: 2304,
                    height: 2304,
                    alt: "Unlit Campfire",
                    src: "/images/camp-scene_unlit.jpg",
                    className: "absolute z-10 h-full w-full object-cover",
                    priority: !0,
                  }),
                  (0, s.jsx)(a(), {
                    width: 2304,
                    height: 2304,
                    alt: "Lit Campfire",
                    src: "/images/camp-scene_lit.jpg",
                    className: `${e ? "opacity-100" : "opacity-0"} absolute z-10 h-full w-full object-cover transition-opacity duration-1000`,
                    priority: !0,
                  }),
                  !e &&
                    (0, s.jsx)("div", {
                      onMouseEnter: () => g(!0),
                      onMouseLeave: () => g(!1),
                      onClick: () => t(),
                      className:
                        "puzzle_start absolute bottom-[30%] left-1/2 z-20 h-32 w-32 -translate-x-[45%] cursor-pointer lg:h-60 lg:w-60",
                      children: (0, s.jsx)(h, { hovered: m }),
                    }),
                  !i.includes("horn") &&
                    (0, s.jsx)("div", {
                      onMouseEnter: () => v(!0),
                      onMouseLeave: () => v(!1),
                      className: `${!e ? "pointer-events-none" : ""} absolute bottom-[42%] left-[6%] z-30 w-[11%] lg:bottom-[39%] lg:left-[23%] lg:p-12`,
                      children: (0, s.jsxs)("div", {
                        className: "relative aspect-square w-full",
                        children: [
                          (0, s.jsx)(f, {
                            relicName: "horn",
                            hovered: p,
                            collected: i.includes("horn"),
                          }),
                          (0, s.jsx)("div", {
                            className: "absolute left-0 top-0 h-full w-full",
                            children: (0, s.jsx)(d.A, {
                              onClick: l,
                              name: "horn",
                              collected: !1,
                              zoomed: !1,
                            }),
                          }),
                        ],
                      }),
                    }),
                ],
              }),
              (0, s.jsx)("div", {
                ref: b,
                className:
                  "pointer-events-none absolute left-0 top-0 z-20 w-full -translate-y-1/3",
                children: (0, s.jsx)(a(), {
                  width: "1920",
                  height: "898",
                  alt: "Top leaves transition",
                  src: "/images/transitions/Transition_2.webp",
                  className: "transition-leaves w-full",
                  priority: !0,
                }),
              }),
              (0, s.jsx)("div", {
                className:
                  "left-leaves pointer-events-none absolute left-0 top-0 z-30 h-full w-screen -translate-x-1/3",
                children: (0, s.jsx)(a(), {
                  width: 1286,
                  height: 857,
                  alt: "Left jungle leaves",
                  src: "/images/side-leaves.png",
                  className: "w-full",
                  priority: !0,
                }),
              }),
              (0, s.jsx)("div", {
                className:
                  "right-leaves pointer-events-none absolute right-0 top-0 z-30 h-full w-screen translate-x-1/3",
                children: (0, s.jsx)(a(), {
                  width: 1286,
                  height: 857,
                  alt: "Right jungle leaves",
                  src: "/images/side-leaves.png",
                  className: "w-full",
                  priority: !0,
                }),
              }),
            ],
          })
        );
      }
    },
    98982: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => u });
      var s = l(2183),
        r = l(80831),
        i = l(36439),
        a = l(15013),
        n = l.n(a),
        o = l(72538),
        c = l(27823);
      function u({ rewards: e, websiteSingleton: t }) {
        let l = (0, i.useRef)(null),
          a = (0, i.useRef)(null);
        return (
          (0, i.useEffect)(() => {
            let e = c.A.context(() => {
              (c.A.utils.toArray(".reward-item").forEach((e) => {
                c.A.from(e, {
                  scrollTrigger: { trigger: e, start: "top center" },
                  y: 20,
                  opacity: 0,
                  duration: 0.5,
                });
              }),
                c.A.to(".transition-brick", {
                  scrollTrigger: {
                    trigger: a.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.5,
                  },
                  yPercent: -20,
                }));
            }, [l]);
            return () => e.revert();
          }, []),
          (0, s.jsxs)("aside", {
            ref: l,
            "aria-label": "Society of Raiders sign-up",
            className: "relative z-40 w-full overflow-visible",
            children: [
              (0, s.jsxs)("div", {
                ref: a,
                className:
                  "pointer-events-none absolute top-0 left-0 z-20 w-full -translate-y-1/2",
                children: [
                  (0, s.jsx)(n(), {
                    width: 1920,
                    height: 427,
                    alt: "Top brick transition",
                    src: "/images/transitions/Transition_4.webp",
                    className: "transition-brick w-full",
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "from-trueblack relative bottom-4 z-10 h-20 w-full bg-gradient-to-b md:bottom-28 md:h-40",
                  }),
                ],
              }),
              (0, s.jsx)(o.A, {}),
              (0, s.jsx)("div", {
                className:
                  "flex w-full flex-col items-center justify-center bg-[url('/images/sign-up_background_extended.jpg')] bg-cover bg-center bg-no-repeat px-12 text-white md:pt-40",
                children: (0, s.jsxs)("div", {
                  className:
                    "relative z-30 flex flex-col items-start self-stretch py-12 md:py-36 lg:flex-row",
                  children: [
                    (0, s.jsx)("div", {
                      className:
                        "flex flex-col items-start pt-24 pb-12 lg:sticky lg:top-32 lg:w-1/2 lg:px-12",
                      children: (0, s.jsx)(r.A, {
                        title: t.nonFooterCtaTitle,
                        textAlign: "text-left",
                        showSignUp: !0,
                        children: t.nonFooterCtaDescription,
                      }),
                    }),
                    (0, s.jsx)("div", {
                      className: "flex flex-col items-start lg:w-1/2 lg:px-12",
                      children: e.map((e) =>
                        (0, s.jsxs)(
                          "div",
                          {
                            className:
                              "reward-item mb-16 flex w-full flex-col items-start",
                            children: [
                              (0, s.jsx)("div", {
                                className:
                                  "relative mb-6 flex aspect-[3/2] w-full",
                                children: (0, s.jsx)(n(), {
                                  src: `https://${e.image?.fields.file?.url ?? ""}`,
                                  alt: e.description ?? "",
                                  fill: !0,
                                  className: "object-cover",
                                }),
                              }),
                              (0, s.jsxs)("div", {
                                className:
                                  "flex flex-col items-center lg:items-start",
                                children: [
                                  (0, s.jsx)("h2", {
                                    className: "mb-4 text-3xl font-medium",
                                    children: e.title,
                                  }),
                                  (0, s.jsx)("p", {
                                    className: "text-base",
                                    children: e.description,
                                  }),
                                ],
                              }),
                            ],
                          },
                          e.title,
                        ),
                      ),
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
    },
  },
  (e) => {
    (e.O(
      0,
      [
        9950, 8762, 5013, 2696, 1329, 6342, 3492, 4971, 9980, 2642, 8925, 636,
        6593, 8792,
      ],
      () => e((e.s = 23698)),
    ),
      (_N_E = e.O()));
  },
]);
