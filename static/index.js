(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3332],
  {
    310: (e, t, l) => {
      "use strict";
      l.a(e, async (e, r) => {
        try {
          l.d(t, { A: () => g });
          var s = l(2183),
            a = l(36439),
            n = l(15013),
            i = l.n(n),
            o = l(46728),
            c = l.n(o),
            u = l(72538),
            d = l(42870),
            m = l(72599),
            h = l(72099),
            f = l(27823),
            x = e([m, h]);
          [m, h] = x.then ? (await x)() : x;
          let p = "/images/sor/underwater.jpg",
            v = "/registration",
            w = [
              {
                itemName: "Jade Pendant",
                title: "Solve Tomb Door Puzzles",
                body: "Tomb Door puzzles are multi-step challenges inspired by Tomb Raider lore. Complete one successfully and a member reward can be triggered or delivered through a redeemable code.",
                cta: "Join to Play",
              },
              {
                itemName: "Motorcycle",
                title: "Redeem Reward Codes",
                body: "Members redeem codes for rewards tied to campaigns and community moments. Some codes are out in the open; the best are buried for Raiders who go looking.",
                cta: "Join to Redeem",
              },
              {
                itemName: "Bow & Arrow",
                title: "Return for New Discoveries",
                body: "The Society keeps moving. New Tomb Door puzzles and reward codes can appear during campaigns and community moments, so there’s always a reason to come back.",
                cta: "Join the Society",
              },
            ];
          function g({ sliderItems: e }) {
            let t = (0, a.useRef)(null),
              l = (0, a.useRef)(null),
              [r, n] = (0, a.useState)(0),
              [o, x] = (0, a.useState)(!1),
              b = w.flatMap((t) => {
                let l = e.find((e) => e.name === t.itemName);
                return l
                  ? [
                      {
                        ...l,
                        name: t.title,
                        description: t.body,
                        appearsIn: [],
                        cta: t.cta,
                      },
                    ]
                  : [];
              }),
              j = (e) => {
                (n(e), x(!0));
              };
            (0, a.useEffect)(() => {
              let e = f.A.context(() => {
                (f.A.from(".sor-benefit-card", {
                  scrollTrigger: {
                    trigger: ".sor-cards-row",
                    start: "top 75%",
                  },
                  y: 24,
                  opacity: 0,
                  duration: 0.5,
                  stagger: 0.12,
                }),
                  f.A.to(".transition-brick", {
                    scrollTrigger: {
                      trigger: l.current,
                      start: "top bottom",
                      end: "bottom top",
                      scrub: 0.5,
                    },
                    yPercent: -20,
                  }));
              }, [t]);
              return () => e.revert();
            }, []);
            let y = b[r];
            return (0, s.jsxs)("aside", {
              ref: t,
              "aria-label": "Society of Raiders sign-up",
              className: "relative z-40 w-full overflow-visible",
              children: [
                (0, s.jsxs)("div", {
                  ref: l,
                  className:
                    "pointer-events-none absolute top-0 left-0 z-20 w-full -translate-y-1/2",
                  children: [
                    (0, s.jsx)(i(), {
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
                (0, s.jsx)(u.A, {}),
                (0, s.jsxs)("section", {
                  className:
                    "relative flex w-full flex-col items-center justify-center overflow-hidden px-6 py-28 text-white md:min-h-screen md:py-44",
                  children: [
                    (0, s.jsx)("div", {
                      className:
                        "pointer-events-none absolute inset-0 scale-[1.03] blur-[3px] brightness-95",
                      children: (0, s.jsx)(i(), {
                        src: p,
                        alt: "",
                        fill: !0,
                        className: "object-cover",
                        sizes: "100vw",
                      }),
                    }),
                    (0, s.jsx)(d.A, {
                      imageSrc: p,
                      className: "scale-[1.03] blur-[3px] brightness-95",
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.22)_0%,rgba(0,0,0,0.16)_45%,rgba(0,0,0,0.05)_80%,transparent_100%)]",
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "relative z-10 flex w-full flex-col items-center",
                      children: [
                        (0, s.jsxs)("div", {
                          className: "mb-10 max-w-[620px] text-center",
                          children: [
                            (0, s.jsx)("p", {
                              className:
                                "mb-2.5 text-[0.65rem] tracking-[0.35em] text-white/60 uppercase",
                              children: "Official Membership",
                            }),
                            (0, s.jsx)("h2", {
                              className:
                                "mb-4 text-[clamp(1.5rem,3vw,2.4rem)] leading-[1.15] font-bold tracking-[-0.01em] [text-shadow:0_2px_20px_rgba(0,0,0,0.5)]",
                              children: "Join the Society of Raiders",
                            }),
                            (0, s.jsx)("p", {
                              className:
                                "text-[clamp(0.88rem,1.5vw,1rem)] leading-[1.65] text-white/[0.78] [text-shadow:0_1px_10px_rgba(0,0,0,0.6)]",
                              children:
                                "You’ve followed the adventures. Now step inside the official Tomb Raider membership experience. Join for free to solve Tomb Door puzzles, redeem reward codes, and take part in exclusive Society activations created for Raiders.",
                            }),
                          ],
                        }),
                        (0, s.jsx)("div", {
                          className:
                            "sor-cards-row flex flex-wrap items-start justify-center gap-7",
                          children: b.map((e, t) =>
                            (0, s.jsx)(
                              "div",
                              {
                                role: "button",
                                tabIndex: 0,
                                "aria-label": `${e.name}: learn more`,
                                "data-ripple-calm": !0,
                                className:
                                  "sor-benefit-card w-44 cursor-pointer focus:outline-none md:w-[200px]",
                                onClick: () => j(t),
                                onFocus: () => n(t),
                                onKeyDown: (e) => {
                                  ("Enter" === e.key || " " === e.key) &&
                                    (e.preventDefault(), j(t));
                                },
                                children: (0, s.jsx)(m.T, {
                                  slide: e,
                                  index: t,
                                  selectedIndex: r,
                                  onMouseEnter: n,
                                }),
                              },
                              e.name,
                            ),
                          ),
                        }),
                        (0, s.jsx)("div", {
                          className: "mt-12 flex justify-center",
                          children: (0, s.jsx)(c(), {
                            href: v,
                            className:
                              "account_register_cta rounded-sm bg-[#c9a227] px-11 py-4 text-sm font-bold tracking-[0.2em] text-black uppercase shadow-[0_6px_24px_rgba(0,0,0,0.45)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#e8d5a0]",
                            children: "Dive In",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)(h.c, {
                  isOpen: o,
                  onClose: () => x(!1),
                  slide: y ?? null,
                  cta: y ? { href: v, label: y.cta } : void 0,
                  onPrevSlide: () => n((r - 1 + b.length) % b.length),
                  onNextSlide: () => n((r + 1) % b.length),
                }),
              ],
            });
          }
          r();
        } catch (e) {
          r(e);
        }
      });
    },
    3164: (e, t, l) => {
      "use strict";
      l.a(e, async (e, r) => {
        try {
          l.d(t, { A: () => y });
          var s = l(2183),
            a = l(36439),
            n = l(15013),
            i = l.n(n),
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
            puzzleSolved: r,
            onUnlock: n,
            websiteSingleton: h,
          }) {
            let [x, j] = (0, a.useState)(!1),
              [N, k] = (0, a.useState)(!1),
              { isLoggedIn: A } = (0, w.u)(),
              { minigameCompleted: S, setMinigameCompleted: M } = (0, w.u)(),
              z = (0, a.useRef)(null),
              C = (0, a.useRef)(null),
              L = (0, a.useRef)(null),
              E = (0, a.useRef)(null);
            ((0, a.useEffect)(() => {
              let e = m.A.context(() => {
                  let e = z.current;
                  ((E.current = m.A.timeline({
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
                        trigger: C.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 0.5,
                      },
                      yPercent: -25,
                    }));
                }, [z]),
                t = m.A.matchMedia();
              return (
                t.add("(max-width: 768px)", () => {
                  f().create({
                    trigger: z.current,
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
              (0, a.useEffect)(() => {
                if (l) {
                  let e = m.A.matchMedia();
                  return (
                    e.add("(max-width: 768px)", () => {
                      f().create({
                        trigger: z.current,
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
              (0, a.useEffect)(() => {
                (S || r) &&
                  L.current &&
                  (S ||
                    m.A.to(window, {
                      duration: 1,
                      scrollTo: { y: "#reward-container", offsetY: 150 },
                    }),
                  m.A.fromTo(
                    L.current,
                    { opacity: 0 },
                    { opacity: 1, duration: 1.5, delay: 3.5 },
                  ));
              }, [r]));
            let R = () => {
              localStorage.setItem(
                "minigame-completed-while-logged-out",
                "true",
              );
            };
            return (0, s.jsxs)("div", {
              ref: z,
              className:
                "torch-visible relative aspect-[1/1.85] w-screen lg:aspect-square",
              children: [
                (0, s.jsx)(c.A, {}),
                (0, s.jsx)("div", {
                  ref: C,
                  className:
                    "pointer-events-none absolute left-0 top-0 z-50 w-full -translate-y-1/3",
                  children: (0, s.jsx)(i(), {
                    width: 1920,
                    height: 1403,
                    alt: "Verdant jungle foliage teems with life, from broad leaves to delicate fronds, highlighted by a cluster of vibrant orange flowers.",
                    src: "/images/transitions/Transition_1.webp",
                    className: "transition-leaves w-full",
                    priority: !0,
                  }),
                }),
                (0, s.jsx)("div", {
                  className:
                    "left-leaves pointer-events-none absolute left-0 top-0 z-50 h-full w-screen -translate-x-1/3",
                  children: (0, s.jsx)(i(), {
                    width: 1286,
                    height: 857,
                    alt: "jungle leaves on the left",
                    src: "/images/side-leaves.png",
                    className: "w-full",
                    priority: !0,
                  }),
                }),
                (0, s.jsx)("div", {
                  className:
                    "right-leaves pointer-events-none absolute right-0 top-0 z-50 h-full w-screen translate-x-1/3",
                  children: (0, s.jsx)(i(), {
                    width: 1286,
                    height: 857,
                    alt: "jungle leaves on the right",
                    src: "/images/side-leaves.png",
                    className: "w-full",
                    priority: !0,
                  }),
                }),
                (0, s.jsxs)("div", {
                  className:
                    "relative flex h-full w-full flex-col justify-center overflow-hidden",
                  children: [
                    (0, s.jsx)("div", {
                      id: "vault-door-section",
                      className:
                        "relative z-50 flex flex-col items-center justify-end",
                      children:
                        (S || r) &&
                        (0, s.jsxs)("div", {
                          ref: L,
                          id: "reward-container",
                          className:
                            "p-4 opacity-0 transition-opacity duration-0",
                          children: [
                            (0, s.jsx)("h2", {
                              className:
                                "mb-6 text-center text-xl font-medium lg:text-6xl",
                              children:
                                S && A
                                  ? h.minigameSolvedLoggedInPromptHeadline ||
                                    "Stay Up to Date"
                                  : h.minigameCorrectSolutionTitle,
                            }),
                            (0, s.jsx)("p", {
                              className: "mb-4 text-center lg:text-2xl",
                              children:
                                S && A
                                  ? h.minigameSolvedLoggedInPromptDescription ||
                                    "Keep an eye on your dashboard for breaking news, rewards, and exclusive content."
                                  : h.minigameCorrectSolutionSubtitle,
                            }),
                            !S &&
                              (0, s.jsx)("div", {
                                className: "h-60 scale-125 sm:h-80",
                                children: (0, s.jsx)(d.P, {
                                  playAnimation: !0,
                                }),
                              }),
                            A
                              ? (0, s.jsx)("div", {
                                  className: "mb-4 flex justify-center",
                                  children: (0, s.jsx)(g(), {
                                    href: "/account",
                                    children: (0, s.jsx)(p.A, {
                                      variant: "darkBackground",
                                      onClick: () => {
                                        ((0, b.qu)({
                                          action: "MINIGAME_COMPLETION",
                                        }),
                                          M(!0));
                                      },
                                      children: S
                                        ? "View Dashboard"
                                        : h.minigameSolvedLoggedInContinueButtonText,
                                    }),
                                  }),
                                })
                              : (0, s.jsxs)(s.Fragment, {
                                  children: [
                                    (0, s.jsxs)("div", {
                                      className:
                                        "mb-4 flex justify-center gap-2",
                                      children: [
                                        (0, s.jsx)(g(), {
                                          href: "/registration",
                                          children: (0, s.jsx)(p.A, {
                                            variant: "darkBackground",
                                            onClick: R,
                                            children:
                                              h.minigameSolvedLoggedOutRegisterButtonText,
                                          }),
                                        }),
                                        (0, s.jsx)(g(), {
                                          href: "/login",
                                          children: (0, s.jsx)(p.A, {
                                            variant: "darkBackground",
                                            onClick: R,
                                            children:
                                              h.minigameSolvedLoggedOutLoginButtonText,
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, s.jsx)("p", {
                                      className: "text-center lg:text-lg",
                                      children: h.minigameSolvedLoggedOutCta,
                                    }),
                                  ],
                                }),
                          ],
                        }),
                    }),
                    !r &&
                      !S &&
                      (0, s.jsx)("div", {
                        className:
                          "absolute bottom-[25%] left-0 right-0 mx-auto",
                        children: (0, s.jsx)(v.A, {
                          onUnlock: n,
                          overlayText: h.minigameSliderText,
                          id: "vaultDoorSlider",
                        }),
                      }),
                    (0, s.jsxs)("div", {
                      className:
                        "tomb-door-background absolute bottom-0 left-0 z-40 h-full w-full",
                      children: [
                        (0, s.jsx)(u.k, {
                          vaseHovered: x,
                          vaseCollected: t.includes("vase"),
                          maskHovered: N,
                          maskCollected: t.includes("mask"),
                          doorOpen: S || r,
                        }),
                        !t.includes("vase") &&
                          (0, s.jsx)("div", {
                            onMouseEnter: () => j(!0),
                            onMouseLeave: () => j(!1),
                            className: `${!l ? "pointer-events-none" : ""} absolute bottom-[13%] left-[6%] z-20 flex aspect-square w-[12%] items-center justify-center lg:bottom-[10.5%] lg:left-[23.5%]`,
                            children: (0, s.jsx)(o.A, {
                              onClick: e,
                              name: "vase",
                              collected: !1,
                              zoomed: !1,
                            }),
                          }),
                        !t.includes("mask") &&
                          (0, s.jsx)("div", {
                            onMouseEnter: () => k(!0),
                            onMouseLeave: () => k(!1),
                            className: `${!l ? "pointer-events-none" : ""} absolute bottom-[9%] right-[8%] z-20 flex aspect-square w-[12%] items-center justify-center lg:bottom-[7%] lg:right-[25%]`,
                            children: (0, s.jsx)(o.A, {
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
          (([w, b] = j.then ? (await j)() : j), r());
        } catch (e) {
          r(e);
        }
      });
    },
    7219: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => a });
      var r = l(2183),
        s = l(36439);
      function a({
        onUnlock: e,
        overlayText: t,
        label: l = "Open Vault Door",
        id: n = "unlockSwitch",
      }) {
        let [i, o] = (0, s.useState)(0);
        return (
          (0, s.useEffect)(() => {
            i > 90 && (e(), o(0));
          }, [i, e]),
          (0, r.jsxs)("div", {
            className:
              "unlock-switch relative z-50 mx-auto w-64 cursor-pointer rounded-full border border-white/60 bg-black/90 p-2",
            children: [
              (0, r.jsx)("label", {
                htmlFor: n,
                className: "sr-only",
                "aria-label": l,
                children: l,
              }),
              (0, r.jsx)("input", {
                className:
                  "relative block h-12 w-full cursor-pointer appearance-none rounded-full bg-transparent",
                type: "range",
                value: i,
                max: 100,
                id: n,
                name: n,
                onChange: (e) => o(Number(e.target.value)),
              }),
              (0, r.jsx)("span", {
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
      l.a(e, async (e, r) => {
        try {
          l.d(t, { A: () => f });
          var s = l(2183),
            a = l(15013),
            n = l.n(a),
            i = l(87975),
            o = l(36439),
            c = l(64171),
            u = l(46728),
            d = l.n(u),
            m = l(94536),
            h = e([i]);
          function f(e) {
            let {
                articles: t,
                headingTitle: l = "Related Articles",
                disableButton: r = !1,
                buttonTitle: a = "View All",
                isHome: u,
              } = e,
              [h, f] = (0, o.useState)(null);
            return (0, s.jsxs)("div", {
              className:
                "flex w-full flex-col items-stretch overflow-hidden py-8",
              children: [
                (0, s.jsxs)("div", {
                  className: `lg:pb-${!u ? 16 : 12} flex w-full flex-col flex-wrap items-center justify-between px-8 pb-8 lg:flex-row lg:px-16`,
                  children: [
                    (0, s.jsxs)("div", {
                      className:
                        "flex flex-col items-center gap-x-8 gap-y-4 pb-4 lg:flex-row lg:pb-0",
                      children: [
                        (0, s.jsx)("h2", {
                          className:
                            "text-4xl text-black sm:text-5xl lg:text-6xl",
                          children: l,
                        }),
                        !r &&
                          (0, s.jsx)(d(), {
                            href: "/news/all",
                            children: (0, s.jsx)(c.A, {
                              variant: "dark",
                              children: a,
                            }),
                          }),
                      ],
                    }),
                    t.length > 0 &&
                      (0, s.jsxs)("div", {
                        className: "hidden gap-x-2 lg:flex",
                        children: [
                          (0, s.jsx)(n(), {
                            width: 48,
                            height: 48,
                            alt: "Left arrow",
                            src: "/images/arrow-button-left.svg",
                            className: "mr-2 cursor-pointer",
                            onClick: () => h?.slidePrev(),
                          }),
                          (0, s.jsx)(n(), {
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
                  ? (0, s.jsx)("div", {
                      className: "px-8 lg:px-16",
                      children: (0, s.jsx)(m.RC, {
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
                          (0, s.jsx)(
                            m.qr,
                            {
                              className:
                                "relative !h-auto w-64 max-w-none shrink-0 overflow-visible",
                              children: (0, s.jsx)(i.A, { item: e }),
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
          ((i = (h.then ? (await h)() : h)[0]), r());
        } catch (e) {
          r(e);
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
    28283: (e, t, l) => {
      "use strict";
      l.d(t, { P: () => n });
      var r = l(2183),
        s = l(36439),
        a = l(44190);
      let n = ({ playAnimation: e }) => {
        let { rive: t, RiveComponent: l } = (0, a.useRive)({
          src: "/animations/medallion.riv",
          autoplay: !1,
          layout: new a.Layout({
            fit: a.Fit.Contain,
            alignment: a.Alignment.Center,
          }),
          useOffscreenRenderer: !1,
        });
        return (
          (0, s.useEffect)(() => {
            e ? t?.play() : (t?.reset(), t?.pause());
          }, [e, t]),
          (0, r.jsx)(l, { className: "pointer-events-none h-full w-full" })
        );
      };
    },
    29704: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => n });
      var r = l(2183),
        s = l(15013),
        a = l.n(s);
      function n({ onClick: e, name: t, collected: l, zoomed: s }) {
        let i;
        return (0, r.jsx)("div", {
          onClick: () => e(t),
          style: l ? { opacity: 1 } : { opacity: 0 },
          "data-flip-id": "flip-" + t,
          className:
            ((i = "relic "),
            l
              ? s
                ? (i += "h-auto w-[50vh]")
                : (i += "h-12 w-12 cursor-pointer hover:scale-110")
              : (i += "h-full w-full z-50 "),
            i),
          children: (0, r.jsx)(a(), {
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
      l.a(e, async (e, r) => {
        try {
          (l.r(t), l.d(t, { __N_SSG: () => i, default: () => o }));
          var s = l(2183),
            a = l(59711),
            n = e([a]);
          a = (n.then ? (await n)() : n)[0];
          var i = !0;
          function o({
            articles: e,
            products: t,
            heroCards: l,
            sorSliderItems: r,
            websiteSingleton: n,
            navItems: i,
            footerSocialLinks: c,
            surveys: u,
            signUpBanner: d,
          }) {
            return (0, s.jsx)(a.A, {
              articles: e,
              products: t,
              heroCards: l,
              sorSliderItems: r,
              websiteSingleton: n,
              navItems: i,
              footerSocialLinks: c,
              surveys: u,
              signUpBanner: d,
            });
          }
          r();
        } catch (e) {
          r(e);
        }
      });
    },
    42870: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => i });
      var r = l(2183),
        s = l(36439);
      let a = [
          {
            x: 0.12,
            y: 0.36,
            d: "M50 20 A30 30 0 1 1 49.9 20 Z M50 42 A8 8 0 1 1 49.9 42 Z M50 4 V13 M50 87 V96 M4 50 H13 M87 50 H96",
          },
          {
            x: 0.88,
            y: 0.24,
            d: "M50 10 L90 85 H10 Z M50 36 V70 M37 47 L50 36 L63 47",
          },
          {
            x: 0.09,
            y: 0.66,
            d: "M50 50 a6 6 0 1 1 -6 6 a12 12 0 1 1 12 12 a20 20 0 1 1 -20 -20 a30 30 0 1 1 30 30",
          },
          {
            x: 0.91,
            y: 0.62,
            d: "M18 32 L50 12 L82 32 M18 54 L50 34 L82 54 M18 76 L50 56 L82 76 M50 76 V94",
          },
          {
            x: 0.8,
            y: 0.88,
            d: "M50 15 A35 35 0 1 1 49.9 15 Z M50 15 V85 M15 50 H85 M30 70 L70 30",
          },
        ],
        n = a.length;
      function i({ imageSrc: e, resolutionScale: t = 0.5, className: l = "" }) {
        let o = (0, s.useRef)(null);
        return (
          (0, s.useEffect)(() => {
            let l = o.current,
              r = l?.parentElement;
            if (!l || !r) return;
            let s = window.matchMedia(
                "(prefers-reduced-motion: reduce)",
              ).matches,
              i = window.matchMedia("(pointer: fine)").matches;
            if (s || !i) return;
            let c = l.getContext("2d");
            if (!c) return;
            let u = new Image();
            ((u.crossOrigin = "anonymous"), (u.src = e));
            let d = 0,
              m = 0,
              h = 0,
              f = 0,
              x = new Int32Array(0),
              g = new Int32Array(0),
              p = null,
              v = null,
              w = null,
              b = null,
              j = new Uint8Array(0),
              y = new Int8Array(0),
              N = new Float32Array(n),
              k = Array(n).fill(!1),
              A = new Float32Array(n),
              S = new Float32Array(n),
              M = 0,
              z = !1,
              C = !1;
            function L() {
              let e = r.getBoundingClientRect();
              ((d = Math.max(1, Math.round(e.width))),
                (m = Math.max(1, Math.round(e.height))),
                (l.width = d),
                (l.height = m),
                (x = new Int32Array(
                  (h = Math.ceil(d * t)) * (f = Math.ceil(m * t)),
                )),
                (g = new Int32Array(h * f)),
                ((p = document.createElement("canvas")).width = h),
                (p.height = f),
                (v = p.getContext("2d", { willReadFrequently: !0 })),
                (b = v?.createImageData(h, f) ?? null),
                E(),
                (function () {
                  ((j = new Uint8Array(h * f)),
                    (y = new Int8Array(h * f).fill(-1)),
                    N.fill(0));
                  let e = document.createElement("canvas");
                  ((e.width = h), (e.height = f));
                  let l = e.getContext("2d", { willReadFrequently: !0 });
                  if (!l) return;
                  let r = (96 * t) / 100;
                  a.forEach((e, s) => {
                    let a = e.x * h,
                      n = e.y * f;
                    (l.setTransform(1, 0, 0, 1, 0, 0),
                      l.clearRect(0, 0, h, f),
                      l.setTransform(r, 0, 0, r, a - 50 * r, n - 50 * r),
                      (l.lineWidth = 7),
                      (l.lineCap = "round"),
                      (l.lineJoin = "round"),
                      (l.strokeStyle = "#fff"),
                      l.stroke(new Path2D(e.d)));
                    let i = Math.ceil(96 * t * 0.5 + 6),
                      o = Math.max(0, Math.floor(a - i)),
                      c = Math.max(0, Math.floor(n - i)),
                      u = Math.min(h - o, 2 * i),
                      d = Math.min(f - c, 2 * i);
                    if (u <= 0 || d <= 0) return;
                    let m = l.getImageData(o, c, u, d).data;
                    for (let e = 0; e < d; e++)
                      for (let t = 0; t < u; t++) {
                        let l = m[(e * u + t) * 4 + 3];
                        if (!l) continue;
                        let r = (c + e) * h + o + t;
                        ((j[r] = l), (y[r] = s), (N[s] += l / 255));
                      }
                  });
                })());
            }
            function E() {
              if (!v || !u.complete || !u.naturalWidth) return;
              let e = u.naturalWidth / u.naturalHeight,
                t = h / f,
                l = 0,
                r = 0,
                s = u.naturalWidth,
                a = u.naturalHeight;
              (e > t
                ? ((s = a * t), (l = (u.naturalWidth - s) / 2))
                : ((a = s / t), (r = (u.naturalHeight - a) / 2)),
                v.drawImage(u, l, r, s, a, 0, 0, h, f),
                (w = v.getImageData(0, 0, h, f)));
            }
            function R(e, t, l, r) {
              let s = Math.round((e * h) / d),
                a = Math.round((t * f) / m),
                n = l * l;
              for (let e = -l; e <= l; e++)
                for (let t = -l; t <= l; t++)
                  if (t * t + e * e <= n) {
                    let l = s + t,
                      n = a + e;
                    l >= 0 && l < h && n >= 0 && n < f && (x[n * h + l] += r);
                  }
            }
            function T(e, t, l, r) {
              let s = Math.round((e * h) / d),
                a = Math.round((t * f) / m);
              for (let e = -l; e <= l; e++)
                for (let t = -l; t <= l; t++) {
                  let n = Math.sqrt(t * t + e * e);
                  if (n > l) continue;
                  let i = s + t,
                    o = a + e;
                  if (i < 0 || i >= h || o < 0 || o >= f) continue;
                  let c = 0.5 * (1 + Math.cos((Math.PI * n) / l));
                  x[o * h + i] += r * c;
                }
            }
            function I(e, t) {
              let l = (function (e, t) {
                for (let l = 0; l < n; l++)
                  if (
                    !k[l] &&
                    Math.hypot(e - a[l].x * d, t - a[l].y * m) < 0.6 * 96
                  )
                    return l;
                return -1;
              })(e, t);
              return l >= 0 && A[l] > 0.1 ? l : -1;
            }
            let _ = 0;
            function P(e) {
              z &&
                (e - _ > 1400 &&
                  ((_ = e),
                  (function () {
                    if (Math.random() > 0.7) return;
                    let e = a.filter((e, t) => !k[t]);
                    if (e.length && 0.75 > Math.random()) {
                      let t = e[Math.floor(Math.random() * e.length)],
                        l = Math.random() * Math.PI * 2,
                        r = 96 * Math.random() * 0.4;
                      T(
                        t.x * d + Math.cos(l) * r,
                        t.y * m + Math.sin(l) * r,
                        7,
                        100 + 80 * Math.random(),
                      );
                    } else
                      T(
                        Math.random() * d,
                        Math.random() * m,
                        7,
                        70 + 90 * Math.random(),
                      );
                  })()),
                (function () {
                  let e = h * f;
                  for (let t = h; t < e - h; t++) {
                    let e = t % h;
                    if (0 === e || e === h - 1) continue;
                    let l =
                      ((x[t - 1] + x[t + 1] + x[t - h] + x[t + h]) >> 1) - g[t];
                    ((l -= l >> 5), (g[t] = l));
                  }
                  let t = x;
                  ((x = g), (g = t));
                })(),
                (function (e) {
                  if (!c || !v || !p || !b) return;
                  if (!w) {
                    u.complete && u.naturalWidth && c.drawImage(u, 0, 0, d, m);
                    return;
                  }
                  let t = w.data,
                    l = b.data,
                    r = 0.85 + 0.15 * Math.sin(0.004 * e);
                  S.fill(0);
                  for (let e = 1; e < f - 1; e++)
                    for (let s = 1; s < h - 1; s++) {
                      let a = e * h + s,
                        n = x[a - 1] - x[a + 1],
                        i = x[a - h] - x[a + h],
                        o = s + (n >> 2),
                        c = e + (i >> 2);
                      (o < 0 && (o = 0),
                        o >= h && (o = h - 1),
                        c < 0 && (c = 0),
                        c >= f && (c = f - 1));
                      let u = (c * h + o) << 2,
                        d = a << 2,
                        m = (n + i) >> 1;
                      m > 95 ? (m = 95) : m < -55 && (m = -55);
                      let g = 0,
                        p = j[a];
                      if (p) {
                        let e = y[a],
                          t = p / 255,
                          l = (n < 0 ? -n : n) + (i < 0 ? -i : i),
                          s = l > 60 ? 1 : l / 60;
                        ((g = k[e] ? t * r : t * s), (S[e] += s * t));
                      }
                      let v = t[u] + m + 200 * g,
                        w = t[u + 1] + m + 155 * g,
                        b = t[u + 2] + m + 60 * g;
                      ((l[d] = v < 0 ? 0 : v > 255 ? 255 : v),
                        (l[d + 1] = w < 0 ? 0 : w > 255 ? 255 : w),
                        (l[d + 2] = b < 0 ? 0 : b > 255 ? 255 : b),
                        (l[d + 3] = 255));
                    }
                  for (let e = 0; e < n; e++) A[e] = N[e] ? S[e] / N[e] : 0;
                  (v.putImageData(b, 0, 0), c.drawImage(p, 0, 0, d, m));
                })(e),
                (M = requestAnimationFrame(P)));
            }
            function H() {
              ((z = !1), cancelAnimationFrame(M));
            }
            let $ = -1,
              O = -1,
              B = (e) =>
                e instanceof Element &&
                null !== e.closest("a, button, [data-ripple-calm]"),
              F = (e) => {
                let t = r.getBoundingClientRect();
                return { x: e.clientX - t.left, y: e.clientY - t.top };
              },
              D = (e) => {
                let { x: t, y: l } = F(e);
                if (
                  ((r.style.cursor = I(t, l) >= 0 ? "pointer" : ""),
                  B(e.target))
                ) {
                  $ = -1;
                  return;
                }
                if (-1 === $) {
                  (($ = t), (O = l));
                  return;
                }
                (!(function (e, t, l, r) {
                  let s = Math.hypot(l - e, r - t);
                  if (s < 0.6) return;
                  let a = Math.min(16, Math.max(1, Math.ceil(s / 4)));
                  for (let s = 1; s <= a; s++) {
                    let n = s / a;
                    T(e + (l - e) * n, t + (r - t) * n, 6, 34);
                  }
                })($, O, t, l),
                  ($ = t),
                  (O = l));
              },
              q = () => {
                (($ = -1), (O = -1), (r.style.cursor = ""));
              },
              V = (e) => {
                if (B(e.target)) return;
                let { x: t, y: l } = F(e),
                  s = I(t, l);
                if (s >= 0) {
                  (!(function (e, t, l) {
                    if (k[e]) return;
                    k[e] = !0;
                    let s = document.createElement("div");
                    (s.setAttribute("aria-hidden", "true"),
                      (s.style.cssText = `position:absolute;z-index:50;pointer-events:none;width:96px;height:96px;left:${t - 48}px;top:${l - 48}px;color:#f0d27a;filter:drop-shadow(0 0 10px rgba(240,200,100,0.9)) drop-shadow(0 0 28px rgba(201,162,39,0.6))`),
                      (s.innerHTML = `<svg viewBox="0 0 100 100" style="width:100%;height:100%;display:block"><path d="${a[e].d}" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>`),
                      r.appendChild(s),
                      s
                        .animate(
                          [
                            {
                              opacity: 0,
                              transform: "translateY(14px) scale(0.55)",
                              filter: "blur(6px)",
                            },
                            {
                              opacity: 1,
                              transform: "translateY(0) scale(1.15)",
                              filter: "blur(0)",
                              offset: 0.3,
                            },
                            {
                              opacity: 1,
                              transform: "translateY(-4px) scale(1)",
                              offset: 0.6,
                            },
                            {
                              opacity: 0,
                              transform: "translateY(-18px) scale(1.05)",
                              filter: "blur(3px)",
                            },
                          ],
                          {
                            duration: 2400,
                            easing: "cubic-bezier(.22,1,.36,1)",
                            fill: "forwards",
                          },
                        )
                        .finished.then(() => s.remove()));
                  })(s, a[s].x * d, a[s].y * m),
                    R(a[s].x * d, a[s].y * m, 8, 600),
                    (r.style.cursor = ""));
                  return;
                }
                R(t, l, 10, 950);
              };
            (r.addEventListener("pointermove", D),
              r.addEventListener("pointerleave", q),
              r.addEventListener("click", V));
            let U = new ResizeObserver(() => L());
            U.observe(r);
            let Y = new IntersectionObserver(
              ([e]) =>
                e.isIntersecting
                  ? void (
                      !z &&
                      !C &&
                      ((z = !0), (M = requestAnimationFrame(P)))
                    )
                  : H(),
              { rootMargin: "100px" },
            );
            return (
              Y.observe(r),
              (u.onload = () => {
                E();
              }),
              L(),
              () => {
                ((C = !0),
                  H(),
                  r.removeEventListener("pointermove", D),
                  r.removeEventListener("pointerleave", q),
                  r.removeEventListener("click", V),
                  (r.style.cursor = ""),
                  U.disconnect(),
                  Y.disconnect());
              }
            );
          }, [e, t]),
          (0, r.jsx)("canvas", {
            ref: o,
            "aria-hidden": "true",
            className: `pointer-events-none absolute inset-0 h-full w-full ${l}`,
          })
        );
      }
    },
    49667: (e, t, l) => {
      "use strict";
      l.a(e, async (e, r) => {
        try {
          l.d(t, { A: () => m });
          var s = l(2183),
            a = l(41036),
            n = l(10979),
            i = l(4448),
            o = l(9751),
            c = l(15013),
            u = l.n(c),
            d = e([n, i, o]);
          function m({ articles: e, products: t, websiteSingleton: l }) {
            let { isLoggedIn: r, minigameCompleted: c } = (0, o.u)();
            return (0, s.jsxs)(a.A, {
              className:
                "inline-flex flex-col items-start pt-0 text-black lg:pt-32",
              children: [
                r &&
                  c &&
                  (0, s.jsx)("div", {
                    className:
                      "pointer-events-none absolute top-0 left-0 z-40 w-full -translate-y-2/3",
                    children: (0, s.jsx)(u(), {
                      width: 1920,
                      height: 483,
                      className: "w-full object-cover object-top",
                      alt: "Hardwood transition",
                      src: "/images/hero-transition(tinyfied).webp",
                    }),
                  }),
                (0, s.jsx)("section", {
                  "aria-label": "Latest News",
                  className: "flex w-full flex-col overflow-hidden",
                  children: (0, s.jsx)("div", {
                    className: "flex flex-col items-center self-stretch pt-10",
                    children: (0, s.jsx)("div", {
                      className:
                        "flex items-end justify-between self-stretch pb-0",
                      children: (0, s.jsx)(n.A, {
                        articles: e,
                        headingTitle: "Latest News",
                        buttonTitle: "All News",
                        isHome: !0,
                      }),
                    }),
                  }),
                }),
                (0, s.jsx)("section", {
                  "aria-label": "Featured Games",
                  className: "flex w-full flex-col items-start overflow-hidden",
                  children: (0, s.jsx)("div", {
                    className: "flex flex-col items-center self-stretch",
                    children: (0, s.jsx)("div", {
                      className:
                        "flex items-end justify-between self-stretch pb-0",
                      children: (0, s.jsx)(i.A, {
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
          (([n, i, o] = d.then ? (await d)() : d), r());
        } catch (e) {
          r(e);
        }
      });
    },
    49863: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => i });
      var r = l(2183),
        s = l(36439),
        a = l(44190);
      let n = () => {
        let { RiveComponent: e } = (0, a.useRive)({
          src: "/animations/torch.riv",
          autoplay: !0,
          useOffscreenRenderer: !1,
        });
        return (0, r.jsxs)("div", {
          className: "pointer-events-none relative",
          children: [
            (0, r.jsx)("div", {
              className:
                "absolute aspect-square w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-yellow-300/20 to-70% md:w-[600px]",
            }),
            (0, r.jsx)(e, {
              className: "absolute -bottom-10 -right-20 h-40 w-40",
            }),
          ],
        });
      };
      function i({ enabled: e }) {
        let [t, l] = (0, s.useState)({ x: 0, y: 0 }),
          [a, o] = (0, s.useState)(window.innerWidth <= 768),
          [c, u] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            function e(e) {
              l({ x: e.pageX, y: e.pageY });
            }
            function t() {
              u(!1);
            }
            function r() {
              u(!0);
            }
            let s = document.getElementsByClassName("torch-visible");
            if (a)
              (u(!1),
                window.removeEventListener("mousemove", e),
                Array.from(s).forEach((e) => {
                  (e.removeEventListener("mouseenter", t),
                    e.removeEventListener("mouseleave", r));
                }));
            else {
              let a = window.scrollY,
                n = () => {
                  let e = window.scrollY,
                    t = e - a;
                  (l((e) => ({ ...e, y: e.y + t })), (a = e));
                };
              return (
                window.addEventListener("scroll", n),
                window.addEventListener("mousemove", e),
                Array.from(s).forEach((e) => {
                  (e.addEventListener("mouseenter", t),
                    e.addEventListener("mouseleave", r));
                }),
                () => {
                  (window.removeEventListener("scroll", n),
                    window.removeEventListener("mousemove", e),
                    Array.from(s).forEach((e) => {
                      (e.removeEventListener("mouseenter", t),
                        e.removeEventListener("mouseleave", r));
                    }));
                }
              );
            }
          }, [a]),
          (0, s.useEffect)(() => {
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
          (0, s.useEffect)(() => {
            !c &&
              e &&
              a &&
              l({ x: window.innerWidth / 2, y: window.innerHeight - 100 });
          }, [e, c, a]),
          (0, r.jsx)("div", {
            className: `torch-container pointer-events-none fixed z-[100] md:absolute md:left-0 md:top-0 ${c || !e ? "hidden" : ""}`,
            style: a
              ? { left: `${t.x}px`, top: `${t.y}px` }
              : { transform: `translateX(${t.x}px) translateY(${t.y}px)` },
            children: (0, r.jsx)(n, {}),
          })
        );
      }
    },
    59711: (e, t, l) => {
      "use strict";
      l.a(e, async (e, r) => {
        try {
          l.d(t, { A: () => k });
          var s = l(2183),
            a = l(93260),
            n = l(3164),
            i = l(97882),
            o = l(87315),
            c = l(310),
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
            N = e([a, n, c, u, m, v]);
          function k({
            articles: e,
            products: t,
            heroCards: l,
            sorSliderItems: r,
            websiteSingleton: N,
            navItems: A,
            footerSocialLinks: S,
            surveys: M,
            signUpBanner: z,
          }) {
            let [C, L] = (0, g.useState)([]),
              [E, R] = (0, g.useState)(!1),
              [T, I] = (0, g.useState)(!1),
              [_, P] = (0, g.useState)(!1),
              { isLoggedIn: H, minigameCompleted: $ } = (0, v.u)(),
              O = (0, b.useRouter)(),
              { addAlert: B } = (0, j.Z)();
            (0, g.useEffect)(() => {
              O.asPath.split("?").length <= 1 ||
                (null !==
                  new URLSearchParams(O.asPath.split("?")[1]).get(
                    "verification-successful",
                  ) &&
                  B({
                    title: "Verification successful!",
                    children: "Thank you for verifying your email.",
                  }));
            }, [O.asPath]);
            let F = (e) => {
                I(!0);
                let t = p.Flip.getState(".relic");
                (L((t) => [...t, e]),
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
              [D, q] = (0, g.useState)(!1),
              V = (0, g.useRef)(null);
            ((0, g.useEffect)(() => {
              let e = w.A.matchMedia();
              return (
                e.add("(max-width: 768px)", () => {
                  V &&
                    V.current &&
                    w.A.to(".torch-container", {
                      opacity: 1,
                      duration: 0.3,
                      ease: "power2.inOut",
                      scrollTrigger: {
                        trigger: V.current,
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
            }, [V]),
              (0, g.useEffect)(() => {
                if (_) {
                  let e = w.A.matchMedia();
                  return (
                    e.add("(max-width: 768px)", () => {
                      V &&
                        V.current &&
                        w.A.to(".torch-container", {
                          opacity: 0,
                          duration: 0.3,
                          ease: "power2.inOut",
                        });
                    }),
                    () => e.revert()
                  );
                }
              }, [_]));
            let [U, Y] = (0, g.useState)(!1),
              W = () => {
                Y(!0);
              };
            return (0, s.jsxs)("div", {
              children: [
                (0, s.jsxs)("main", {
                  children: [
                    (0, s.jsxs)("div", {
                      className: "overflow-hidden",
                      children: [
                        (0, s.jsx)("h1", {
                          className: "hidden",
                          children: "Tomb Raider - Adventure Awaits",
                        }),
                        (0, s.jsx)(a.A, {
                          heroCards: l,
                          websiteSingleton: N,
                          navItems: A,
                          surveys: M,
                          signUpBanner: z,
                        }),
                        (0, s.jsx)("div", {
                          className: "bg-trueblack h-40 w-full lg:h-80",
                        }),
                        $
                          ? (0, s.jsx)(n.A, {
                              handleRelicClick: F,
                              relicCollection: C,
                              gameActive: D,
                              puzzleSolved: _,
                              onUnlock: W,
                              websiteSingleton: N,
                            })
                          : (0, s.jsxs)("div", {
                              ref: V,
                              children: [
                                (0, s.jsx)(n.A, {
                                  handleRelicClick: F,
                                  relicCollection: C,
                                  gameActive: D,
                                  puzzleSolved: _,
                                  onUnlock: W,
                                  websiteSingleton: N,
                                }),
                                (0, s.jsx)(i.A, {
                                  lit: D,
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
                                  relicCollection: C,
                                  websiteSingleton: N,
                                }),
                                (0, s.jsx)(o.A, {
                                  handleRelicClick: F,
                                  relicCollection: C,
                                  gameActive: D,
                                }),
                              ],
                            }),
                      ],
                    }),
                    !H && (0, s.jsx)(c.A, { sliderItems: r }),
                    (0, s.jsx)(m.A, {
                      articles: e,
                      products: t,
                      websiteSingleton: N,
                    }),
                    (0, s.jsx)(d.A, { websiteSingleton: N }),
                  ],
                }),
                (0, s.jsx)(u.A, {
                  websiteSingleton: N,
                  navItems: A,
                  footerSocialLinks: S,
                }),
                !$ &&
                  (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)(h.A, {
                        open: U,
                        close: () => {
                          Y(!1);
                        },
                        relicCollection: C,
                        setSuccess: P,
                        websiteSingleton: N,
                      }),
                      (0, s.jsx)(f.A, { enabled: D }),
                      (0, s.jsx)(x.A, {
                        gameArea: V,
                        collection: C,
                        activated: E && D && !_ && !$,
                        setActivated: R,
                        open: T,
                        setOpen: (e) => I(e),
                        puzzleOpen: U,
                        puzzleSolved: _ || $,
                        websiteSingleton: N,
                      }),
                    ],
                  }),
              ],
            });
          }
          (([a, n, c, u, m, v] = N.then ? (await N)() : N), r());
        } catch (e) {
          r(e);
        }
      });
    },
    62538: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => s });
      var r = l(36439);
      function s() {
        let [e, t] = (0, r.useState)({ width: void 0, height: void 0 });
        return (
          (0, r.useEffect)(() => {
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
      l.d(t, { A: () => i });
      var r = l(2183),
        s = l(36439),
        a = l(29704),
        n = l(27823);
      let i = ({
        gameArea: e,
        collection: t,
        activated: l,
        setActivated: i,
        open: o,
        setOpen: c,
        puzzleOpen: u,
        puzzleSolved: d,
        websiteSingleton: m,
      }) => {
        let h = (0, s.useRef)(null),
          [f, x] = (0, s.useState)(""),
          [g, p] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            if (h.current) {
              let t = l ? h.current.clientHeight - 72 : h.current.clientHeight;
              n.A.to(h.current, {
                y: t,
                duration: 0.3,
                ease: "power2.inOut",
                scrollTrigger: {
                  trigger: e.current,
                  start: "top center",
                  end: "bottom center",
                  onToggle: ({ isActive: e }) => {
                    (i(e), c(e));
                  },
                },
              });
            }
          }, [e]),
          (0, s.useEffect)(() => {
            if (h.current) {
              let e = l ? h.current.clientHeight - 72 : h.current.clientHeight;
              o && l
                ? n.A.to(h.current, {
                    y: 0,
                    ease: "power2.inOut",
                    duration: 0.3,
                  })
                : n.A.to(h.current, {
                    y: e,
                    ease: "power2.inOut",
                    duration: 0.3,
                  });
            }
          }, [o, l]),
          (0, s.useEffect)(() => {
            5 === t.length && p(!0);
          }, [t]),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsxs)("div", {
                ref: h,
                style: { transform: "translateY(100%)" },
                className: `${d ? "opacity-0" : ""} pointer-events-none fixed bottom-0 left-0 right-0 z-[101] flex flex-col items-center transition-opacity duration-500`,
                children: [
                  (0, r.jsxs)("div", {
                    onClick: function () {
                      g
                        ? n.A.to(window, {
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
                      (0, r.jsx)("div", {
                        className: `${g ? "items-center" : "top-12"} ${u ? "hidden" : ""} pointer-events-auto relative z-10 flex h-12 w-12 cursor-pointer justify-center rounded-full bg-lightgray-400 hover:bg-lightgray-500`,
                        children: (0, r.jsx)("svg", {
                          width: "24",
                          height: "24",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          className: `${o && !g ? "-scale-y-100 " : ""}h-8 w-8 transition-transform`,
                          children: (0, r.jsx)("path", {
                            d: "M7.4 15.3746L6 13.9746L12 7.97461L18 13.9746L16.6 15.3746L12 10.7746L7.4 15.3746Z",
                            fill: "#181818",
                          }),
                        }),
                      }),
                      (0, r.jsx)("span", {
                        className: `${g || u ? "opacity-100" : "opacity-0"}`,
                        children: u
                          ? m.minigameRelicTrayPuzzleOpenClickPrompt
                          : "Return to the Vault",
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    id: "relic-tray",
                    className:
                      "pointer-events-auto z-20 mx-auto mb-2 flex aspect-[5] h-16 items-center justify-center bg-[url('/images/minigame/tray/stone-background.webp')] bg-cover bg-no-repeat p-1",
                    children: t.map(function (e, t) {
                      return (0, r.jsx)(
                        a.A,
                        { onClick: x, name: e, collected: !0, zoomed: !1 },
                        t,
                      );
                    }),
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "absolute left-0 right-0 top-7 -z-10 mx-auto hidden h-[100vw] w-screen rounded-full bg-black/20 lg:block lg:h-[40rem] lg:w-[40rem]",
                  }),
                ],
              }),
              "" !== f &&
                (0, r.jsx)("div", {
                  onClick: () => x(""),
                  className:
                    "fixed left-0 top-0 z-[103] flex h-screen w-screen cursor-pointer items-center justify-center bg-black/80",
                  children: (0, r.jsx)(a.A, {
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
      l.d(t, { k: () => n });
      var r = l(2183),
        s = l(44190),
        a = l(36439);
      let n = ({
        vaseHovered: e,
        vaseCollected: t,
        maskHovered: l,
        maskCollected: n,
        doorOpen: i,
      }) => {
        let { rive: o, RiveComponent: c } = (0, s.useRive)({
            src: "/animations/tomb.riv",
            stateMachines: "State Machine 1",
            autoplay: !0,
            layout: new s.Layout({
              fit: s.Fit.Cover,
              alignment: s.Alignment.Center,
            }),
            shouldDisableRiveListeners: !0,
            useOffscreenRenderer: !1,
          }),
          u = (0, s.useStateMachineInput)(o, "State Machine 1", "DoorOpen"),
          d = (0, s.useStateMachineInput)(
            o,
            "State Machine 1",
            "VaseShimmering",
          ),
          m = (0, s.useStateMachineInput)(o, "State Machine 1", "VaseAway"),
          h = (0, s.useStateMachineInput)(
            o,
            "State Machine 1",
            "MaskShimmering",
          ),
          f = (0, s.useStateMachineInput)(o, "State Machine 1", "MaskAway");
        return (
          (0, a.useEffect)(() => {
            i && u && (u.value = !0);
          }, [i, u]),
          (0, a.useEffect)(() => {
            d &&
              (t && m
                ? ((d.value = !1), (m.value = !0))
                : e
                  ? (d.value = !0)
                  : (d.value = !1));
          }, [e, t, d]),
          (0, a.useEffect)(() => {
            h &&
              (n && f
                ? ((h.value = !1), (f.value = !0))
                : l
                  ? (h.value = !0)
                  : (h.value = !1));
          }, [l, n, h]),
          (0, r.jsx)(c, { className: "pointer-events-none h-full w-full" })
        );
      };
    },
    87315: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => h });
      var r = l(2183),
        s = l(36439),
        a = l(15013),
        n = l.n(a),
        i = l(27823),
        o = l(93551),
        c = l.n(o),
        u = l(29704),
        d = l(44190);
      let m = ({
        crownHovered: e,
        crownCollected: t,
        helmetHovered: l,
        helmetCollected: a,
      }) => {
        let { rive: n, RiveComponent: i } = (0, d.useRive)({
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
            n,
            "State Machine 1",
            "CrownShimmering",
          ),
          c = (0, d.useStateMachineInput)(n, "State Machine 1", "CrownAway"),
          u = (0, d.useStateMachineInput)(
            n,
            "State Machine 1",
            "HelmetShimmering",
          ),
          m = (0, d.useStateMachineInput)(n, "State Machine 1", "HelmetAway");
        return (
          (0, s.useEffect)(() => {
            o &&
              (t && c
                ? ((o.value = !1), (c.value = !0))
                : e
                  ? (o.value = !0)
                  : (o.value = !1));
          }, [e, t, o]),
          (0, s.useEffect)(() => {
            u &&
              (a && m
                ? ((u.value = !1), (m.value = !0))
                : l
                  ? (u.value = !0)
                  : (u.value = !1));
          }, [l, a, u]),
          (0, r.jsx)(i, { className: "pointer-events-none h-full w-full" })
        );
      };
      function h({ handleRelicClick: e, relicCollection: t, gameActive: l }) {
        let a = (0, s.useRef)(null),
          o = (0, s.useRef)(null),
          [d, f] = (0, s.useState)(!1),
          [x, g] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            let e = i.A.context(() => {
              let e = a.current;
              (i.A.from(".darkness-background", {
                scrollTrigger: {
                  trigger: e,
                  start: "top bottom",
                  end: "bottom center",
                  scrub: 0.5,
                },
                yPercent: -50,
              }),
                i.A.from(".horizontal-pillars", {
                  scrollTrigger: {
                    trigger: e,
                    start: "top center",
                    end: "bottom center",
                    scrub: 0.5,
                  },
                  yPercent: -20,
                }),
                i.A.to(".transition-leaves", {
                  scrollTrigger: {
                    trigger: o.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.5,
                  },
                  yPercent: -25,
                }));
            }, [a]);
            return () => e.revert();
          }, []),
          (0, s.useEffect)(() => {
            if (l) {
              let e = i.A.matchMedia();
              return (
                e.add("(max-width: 768px)", () => {
                  (c().create({
                    trigger: a.current,
                    start: "top 70%",
                    end: "top+=200px 70%",
                    onToggle: (e) => {
                      l && g(e.isActive);
                    },
                  }),
                    c().create({
                      trigger: a.current,
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
          (0, r.jsxs)("div", {
            ref: a,
            className:
              "torch-visible relative z-40 aspect-[1/1.85] w-full overflow-y-visible lg:aspect-square",
            children: [
              (0, r.jsxs)("div", {
                className: "relative h-full w-full overflow-hidden",
                children: [
                  (0, r.jsxs)("div", {
                    className:
                      "darkness-background absolute bottom-0 left-0 z-10 h-full w-full brightness-[.3]",
                    children: [
                      (0, r.jsx)(m, {
                        crownHovered: d,
                        crownCollected: t.includes("crown"),
                        helmetHovered: x,
                        helmetCollected: t.includes("helmet"),
                      }),
                      !t.includes("crown") &&
                        (0, r.jsx)("div", {
                          onMouseEnter: () => f(!0),
                          onMouseLeave: () => f(!1),
                          className: `${!l ? "pointer-events-none" : ""} absolute bottom-[17%] left-1/2 z-20 flex aspect-square w-[20%] -translate-x-1/2 items-center justify-center lg:bottom-[15%] lg:w-[15%]`,
                          children: (0, r.jsx)(u.A, {
                            onClick: e,
                            name: "crown",
                            collected: !1,
                            zoomed: !1,
                          }),
                        }),
                      !t.includes("helmet") &&
                        (0, r.jsx)("div", {
                          onMouseEnter: () => g(!0),
                          onMouseLeave: () => g(!1),
                          className: `${!l ? "pointer-events-none" : ""} absolute left-[30%] top-[27%] z-20 flex aspect-square w-[20%] items-center justify-center lg:left-[36%] lg:top-[25%] lg:w-[15%]`,
                          children: (0, r.jsx)(u.A, {
                            onClick: e,
                            name: "helmet",
                            collected: !1,
                            zoomed: !1,
                          }),
                        }),
                    ],
                  }),
                  (0, r.jsx)(n(), {
                    width: 1440,
                    height: 1440,
                    alt: "Darkness Foreground",
                    src: "/images/darkness-scene_foreground.png",
                    className:
                      "pointer-events-none absolute right-0 top-0 z-20 h-full w-full object-cover",
                    priority: !0,
                  }),
                  (0, r.jsx)(n(), {
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
              (0, r.jsx)("div", {
                ref: o,
                className:
                  "pointer-events-none absolute left-0 top-0 z-20 w-full -translate-y-[20%]",
                children: (0, r.jsx)(n(), {
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
      var r = l(2183),
        s = l(36439),
        a = l(15013),
        n = l.n(a),
        i = l(64171),
        o = l(27823);
      let c = (0, s.forwardRef)(({ runeVal: e, setRuneVal: t }, l) => {
        let a = [
            { name: "Rune 1", imageUrl: "/images/minigame/runes/rune_1.png" },
            { name: "Rune 2", imageUrl: "/images/minigame/runes/rune_2.png" },
            { name: "Rune 3", imageUrl: "/images/minigame/runes/rune_3.png" },
            { name: "Rune 4", imageUrl: "/images/minigame/runes/rune_4.png" },
            { name: "Rune 5", imageUrl: "/images/minigame/runes/rune_5.png" },
            { name: "Rune 6", imageUrl: "/images/minigame/runes/rune_6.png" },
          ],
          [i, c] = (0, s.useState)("up"),
          u = (0, s.useRef)(null);
        return (
          (0, s.useEffect)(() => {
            let t = o.A.context(() => {
              o.A.fromTo(
                ".rune-" + e,
                { y: "up" === i ? 10 : -10, opacity: 0, overwrite: "auto" },
                { y: 0, opacity: 1 },
              );
            }, u);
            return () => t.revert();
          }, [e]),
          (0, r.jsxs)("div", {
            ref: u,
            className: "flex w-1/5 flex-col justify-center",
            children: [
              (0, r.jsxs)("button", {
                onMouseDown: function () {
                  (c("up"), e === a.length - 1 ? t(0) : t(e + 1));
                },
                ref: l,
                type: "button",
                className:
                  "group relative flex aspect-[2] w-full cursor-pointer items-center justify-center rounded-xl hover:backdrop-brightness-75",
                children: [
                  (0, r.jsx)(n(), {
                    src: "/images/minigame/arrow_default.png",
                    alt: "up arrow",
                    width: 256,
                    height: 172,
                    className:
                      "pointer-events-none absolute left-0 right-0 mx-auto w-1/2",
                    priority: !0,
                  }),
                  (0, r.jsx)(n(), {
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
              (0, r.jsx)("div", {
                className:
                  "relative flex aspect-[6/5] w-full items-center justify-center",
                children: a.map((e, t) =>
                  (0, r.jsx)(
                    "div",
                    {
                      className: `rune ${"rune-" + t} absolute flex h-full w-full items-center justify-center opacity-0`,
                      children: (0, r.jsx)(n(), {
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
              (0, r.jsxs)("button", {
                onMouseDown: function () {
                  (c("down"), 0 === e ? t(a.length - 1) : t(e - 1));
                },
                type: "button",
                className:
                  "group relative flex aspect-[2] w-full cursor-pointer items-center justify-center rounded-xl hover:backdrop-brightness-75",
                children: [
                  (0, r.jsx)(n(), {
                    src: "/images/minigame/arrow_default.png",
                    alt: "down arrow",
                    width: 256,
                    height: 172,
                    className:
                      "pointer-events-none absolute left-0 right-0 mx-auto w-1/2 rotate-180",
                    priority: !0,
                  }),
                  (0, r.jsx)(n(), {
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
        setSuccess: a,
        websiteSingleton: m,
      }) {
        let [h, f] = (0, s.useState)([0, 0, 0, 0, 0]),
          x = [
            { runeIndex: 5, relicClue: "crown" },
            { runeIndex: 2, relicClue: "horn" },
            { runeIndex: 4, relicClue: "mask" },
            { runeIndex: 3, relicClue: "helmet" },
            { runeIndex: 0, relicClue: "vase" },
          ],
          [g, p] = (0, s.useState)(!1),
          [v, w] = (0, s.useState)(!1),
          [b, j] = (0, s.useState)(!1),
          y = (0, s.useRef)(null);
        function N() {
          h.every((e, t) => e === x[t].runeIndex)
            ? (a(!0),
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
          (0, s.useEffect)(() => {
            v &&
              (a(!0),
              j(!1),
              t(),
              (0, u.sendGTMEvent)({ event: "puzzle_skip" }));
          }, [v]),
          (0, s.useEffect)(() => {
            e
              ? (document.body.classList.add("overflow-hidden"),
                y.current && y.current.focus())
              : document.body.classList.remove("overflow-hidden");
          }, [e]),
          (0, r.jsxs)("div", {
            className: `${!e ? "hidden" : ""}`,
            children: [
              (0, r.jsx)("button", {
                "aria-label": "Close",
                className: "fixed right-0 top-0 z-[102] flex items-center p-6",
                onClick: t,
                children: (0, r.jsxs)("svg", {
                  "aria-hidden": "true",
                  className: "h-12 w-12",
                  width: "40",
                  height: "40",
                  viewBox: "0 0 40 40",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    (0, r.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M31.3137 10.1014L10.1005 31.3146L8.68628 29.9004L29.8995 8.68719L31.3137 10.1014Z",
                      fill: "white",
                    }),
                    (0, r.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M29.799 31.6274L8.58579 10.4142L10 9L31.2132 30.2132L29.799 31.6274Z",
                      fill: "white",
                    }),
                  ],
                }),
              }),
              (0, r.jsxs)("div", {
                className:
                  "fixed top-0 z-[101] h-screen w-screen overflow-x-hidden bg-black/40 backdrop-blur-md",
                children: [
                  (0, r.jsx)("div", {
                    className:
                      "relative flex w-full items-center justify-center overflow-y-auto overflow-x-hidden py-28",
                    children: (0, r.jsxs)("div", {
                      className:
                        "flex w-full flex-col items-center justify-center",
                      children: [
                        (0, r.jsxs)("div", {
                          className: "mb-8 px-4",
                          children: [
                            (0, r.jsx)("p", {
                              className: "mb-3 text-center text-2xl",
                              children: m.minigamePuzzleTitle,
                            }),
                            5 !== l.length &&
                              (0, r.jsx)("p", {
                                className: "text-center",
                                children: m.minigamePuzzleMissingRelicsSubtitle,
                              }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className:
                            "relative flex w-full max-w-3xl select-none flex-col items-center justify-center",
                          children: [
                            (0, r.jsx)("div", {
                              className:
                                "mb-20 flex w-full scale-[1.12] justify-center px-[7%] sm:scale-100",
                              children: x.map(function (e, t) {
                                return l.includes(e.relicClue)
                                  ? (0, r.jsx)(
                                      "div",
                                      {
                                        className:
                                          "mx-[2%] flex aspect-square w-full items-center justify-center",
                                        children: (0, r.jsx)(n(), {
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
                                  : (0, r.jsxs)(
                                      "div",
                                      {
                                        className:
                                          "relative mx-[2%] flex aspect-square w-full items-center justify-center",
                                        children: [
                                          (0, r.jsx)(n(), {
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
                                          (0, r.jsx)(n(), {
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
                            (0, r.jsxs)("div", {
                              className:
                                "relative flex w-full scale-[1.12] items-center justify-center px-[7%] sm:scale-100",
                              children: [
                                (0, r.jsx)(n(), {
                                  width: "1600",
                                  height: "820",
                                  alt: "A puzzle frame made of jade",
                                  src: "/images/minigame/puzzle-background.png",
                                  className:
                                    "absolute left-1/2 top-1/2 -z-10 w-full -translate-x-1/2 -translate-y-1/2 object-cover",
                                  priority: !0,
                                }),
                                (0, r.jsx)("div", {
                                  className: "flex w-full translate-y-0.5",
                                  children: h.map(function (e, t) {
                                    return (0, r.jsx)(
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
                        (0, r.jsxs)("div", {
                          className:
                            "mt-20 flex flex-col items-center justify-center",
                          children: [
                            (0, r.jsxs)("div", {
                              className: "mb-4 flex gap-4",
                              children: [
                                (0, r.jsx)(i.A, {
                                  onClick: () => t(),
                                  children: m.minigamePuzzleCloseButtonText,
                                }),
                                (0, r.jsx)(i.A, {
                                  onClick: () => N(),
                                  children: m.minigamePuzzleSolveButton,
                                }),
                              ],
                            }),
                            (0, r.jsx)("p", {
                              className: `${!b ? "invisible " : ""} error-message text-center`,
                              children: m.minigamePuzzleIncorrectText,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, r.jsx)("div", {
                    className: "absolute bottom-4 right-8",
                    children: g
                      ? (0, r.jsxs)("div", {
                          className: "max-w-sm rounded-2xl bg-white p-4",
                          children: [
                            (0, r.jsx)("p", {
                              className: "mb-4 font-bold text-black ",
                              children: m.minigamePuzzleSkipExplanationText,
                            }),
                            (0, r.jsxs)("div", {
                              className: "flex gap-4",
                              children: [
                                (0, r.jsx)(i.A, {
                                  className: "puzzle_skip",
                                  "aria-label": "Yes, Skip Puzzle Button",
                                  variant: "green",
                                  onClick: () => {
                                    (w(!0), N());
                                  },
                                  children: "Yes",
                                }),
                                (0, r.jsx)(i.A, {
                                  "aria-label": "No, Don't Skip Puzzle Button",
                                  variant: "green",
                                  onClick: () => p(!1),
                                  children: "No",
                                }),
                              ],
                            }),
                          ],
                        })
                      : (0, r.jsx)("button", {
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
      l.a(e, async (e, r) => {
        try {
          l.d(t, { A: () => x });
          var s = l(2183),
            a = l(15013),
            n = l.n(a),
            i = l(49980),
            o = l(36439),
            c = l(64171),
            u = l(94536),
            d = l(62538),
            m = l(92642),
            h = l(12317),
            f = e([i, m]);
          function x({
            heroCards: e,
            websiteSingleton: t,
            navItems: l,
            surveys: r,
            signUpBanner: a,
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
              (0, s.jsx)(s.Fragment, {
                children: (0, s.jsxs)("div", {
                  className:
                    "relative flex min-h-[max(1000px,100svh)] w-full shrink-0 flex-col items-center justify-stretch overflow-hidden",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "-z-5 absolute left-0 top-0 h-full w-full",
                      children: [
                        (0, s.jsxs)("div", {
                          style: {
                            opacity: +(0 === f),
                            transition: "all 0.3s ease",
                          },
                          className:
                            "absolute left-0 top-0 mt-[96px] max-h-none min-h-[40%] min-w-full max-w-full md:min-h-[50%] lg:mt-0 xl:min-h-full",
                          children: [
                            (0, s.jsx)(n(), {
                              fill: !0,
                              priority: !0,
                              className: "object-cover object-center",
                              alt: "Golden sunlight filters through the dense foliage of a jungle, illuminating an ancient stone archway and watchful mountain lion.",
                              src: (0, m._c)(
                                t.homepageHeroBackground?.fields.file?.url,
                              ),
                            }),
                            (0, s.jsx)("div", {
                              className:
                                "pointer-events-none absolute top-1/2 h-1/2 w-full bg-gradient-to-b from-transparent to-black",
                            }),
                          ],
                        }),
                        e.map((t, l) =>
                          t.backgroundVideoLink
                            ? (0, s.jsxs)(
                                "div",
                                {
                                  style: {
                                    opacity: +(f - 1 === l),
                                    transition: "all 0.3s ease",
                                  },
                                  className:
                                    "absolute left-0 top-0 mt-[96px] min-h-[40%] min-w-full max-w-full md:min-h-[50%] lg:mt-0 xl:min-h-full",
                                  children: [
                                    (0, s.jsx)("iframe", {
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
                                    (0, s.jsx)("div", {
                                      className:
                                        "pointer-events-none absolute top-1/2 h-1/2 w-full border-0 bg-gradient-to-b from-transparent to-black",
                                    }),
                                  ],
                                },
                                l,
                              )
                            : (0, s.jsxs)(
                                "div",
                                {
                                  style: {
                                    opacity: +(f - 1 === l),
                                    transition: "all 0.3s ease",
                                  },
                                  className:
                                    "absolute left-0 top-0 mt-[96px] max-h-none min-h-[40%] min-w-full max-w-full md:min-h-[50%] lg:mt-0 xl:min-h-full",
                                  children: [
                                    (0, s.jsx)(n(), {
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
                                    (0, s.jsx)("div", {
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
                    (0, s.jsx)(i.Ay, {
                      surveys: r,
                      navItems: l,
                      signUpBanner: a,
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "flex w-full grow flex-col items-center justify-stretch px-4 pb-4 pt-28 sm:px-12",
                      children: (0, s.jsx)("div", {
                        className:
                          "flex max-w-full grow items-center justify-center",
                        children: (() => {
                          if (0 !== f)
                            return (0, s.jsxs)("div", {
                              className: `space-between relative flex max-w-full grow flex-col-reverse items-center gap-x-8 gap-y-6 lg:flex-row ${e[f - 1].secondaryImage ? "max-w-6xl" : "max-w-2xl"}`,
                              children: [
                                (0, s.jsxs)("div", {
                                  className: `z-[10] flex max-w-full flex-col items-center text-center md:max-w-2xl ${e[f - 1].secondaryImage ? "lg:items-start lg:text-left" : ""}`,
                                  children: [
                                    (0, s.jsx)("p", {
                                      className:
                                        "pb-8 text-3xl sm:text-4xl lg:text-5xl",
                                      children: e[f - 1].title,
                                    }),
                                    (0, s.jsx)("p", {
                                      className: "text-md pb-12",
                                      children: e[f - 1].body,
                                    }),
                                    (0, s.jsx)(h.A, {
                                      href: e[f - 1].ctaButtonLink,
                                      children: (0, s.jsx)(c.A, {
                                        children: e[f - 1].ctaButtonLabel,
                                      }),
                                    }),
                                  ],
                                }),
                                e[f - 1].secondaryImage &&
                                  (0, s.jsx)("div", {
                                    className:
                                      "relative aspect-[16/9] w-full max-w-xs grow lg:aspect-[16/16] lg:h-[30rem] lg:w-auto lg:max-w-full",
                                    children: (0, s.jsx)(n(), {
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
                            return (0, s.jsxs)("div", {
                              className:
                                "flex flex-col items-center justify-center gap-y-6",
                              children: [
                                (0, s.jsx)(n(), {
                                  className: "z-10",
                                  src: (0, m._c)(e?.fields.file?.url),
                                  alt: e?.fields.description ?? "Logo",
                                  width: 417,
                                  height: 187,
                                }),
                                (0, s.jsx)("div", {
                                  className:
                                    "flex flex-col items-center gap-6 self-stretch",
                                  children: (0, s.jsx)("p", {
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
                    (0, s.jsxs)("div", {
                      className:
                        "z-5 relative flex h-auto max-w-full items-start gap-1 self-stretch pb-8 lg:max-w-[94vw] lg:gap-2 lg:self-auto lg:pb-0",
                      children: [
                        (0, s.jsx)(n(), {
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
                        (0, s.jsx)(n(), {
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
                        (0, s.jsxs)(u.RC, {
                          className:
                            "swiper-show-overflow relative flex w-full pl-8 lg:pl-16",
                          slidesPerView: "auto",
                          centeredSlides: y <= 1024,
                          onSwiper: (e) => w(e),
                          onSlideChange: (e) => N(e.activeIndex),
                          children: [
                            (0, s.jsx)(u.qr, {
                              onClick: A,
                              className: "mx-1",
                              style: { width: 230 },
                              children: (0, s.jsx)(g, {
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
                              (0, s.jsx)(
                                u.qr,
                                {
                                  onClick: A,
                                  className: "mx-1",
                                  style: { width: 230 },
                                  children: (0, s.jsx)(g, {
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
                    (0, s.jsx)("div", {
                      className:
                        "pointer-events-none absolute bottom-0 left-0 h-3/4 w-full bg-gradient-to-b from-transparent to-trueblack",
                    }),
                    (0, s.jsx)("p", {
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
            index: r,
            setSelectedIndex: a,
            selectedIndex: i,
          }) {
            return (0, s.jsxs)(
              "div",
              {
                className: `relative aspect-[16/9] w-full shrink-0 transition-all ${i === r ? "" : "brightness-[0.6] hover:brightness-100"}`,
                children: [
                  (0, s.jsx)(n(), {
                    className:
                      "aspect-[16/9] cursor-pointer object-cover shadow-sm",
                    src: e,
                    alt: l,
                    fill: !0,
                    sizes:
                      "(max-width: 768px) 25vw, (max-width: 1200px) 20vw, 15vw",
                    onClick: () => a(r),
                  }),
                  (0, s.jsxs)("div", {
                    style: { opacity: +(r === i) },
                    className: "duration-300",
                    children: [
                      (0, s.jsx)(n(), {
                        className: "absolute -left-1 -top-1",
                        width: 24,
                        height: 24,
                        alt: "top left bracket",
                        src: "/images/small-top-left-bracket.svg",
                      }),
                      (0, s.jsx)(n(), {
                        className: "absolute -right-1 -top-1",
                        width: 24,
                        height: 24,
                        alt: "top right bracket",
                        src: "/images/small-top-right-bracket.svg",
                      }),
                      (0, s.jsx)(n(), {
                        className: "absolute -bottom-1 -left-1",
                        width: 24,
                        height: 24,
                        alt: "bottom left bracket",
                        src: "/images/small-bottom-left-bracket.svg",
                      }),
                      (0, s.jsx)(n(), {
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
          (([i, m] = f.then ? (await f)() : f), r());
        } catch (e) {
          r(e);
        }
      });
    },
    97882: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => x });
      var r = l(2183),
        s = l(36439),
        a = l(15013),
        n = l.n(a),
        i = l(27823),
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
            a = (0, m.useStateMachineInput)(
              t,
              "State Machine 1",
              "Highlighted",
            );
          return (
            (0, s.useEffect)(() => {
              a && (e ? (a.value = !0) : (a.value = !1));
            }, [e]),
            (0, r.jsx)(l, { className: "pointer-events-none h-full w-full" })
          );
        },
        f = ({ relicName: e, hovered: t, collected: l }) => {
          let { rive: a, RiveComponent: n } = (0, m.useRive)({
              src: "/animations/" + e + ".riv",
              stateMachines: "State Machine 1",
              autoplay: !0,
              layout: new m.Layout({ fit: m.Fit.Cover }),
              useOffscreenRenderer: !1,
            }),
            i = e.charAt(0).toUpperCase() + e.slice(1),
            o = (0, m.useStateMachineInput)(
              a,
              "State Machine 1",
              i + "Shimmering",
            ),
            c = (0, m.useStateMachineInput)(a, "State Machine 1", i + "Away");
          return (
            (0, s.useEffect)(() => {
              o &&
                (l && c
                  ? ((o.value = !1), (c.value = !0))
                  : t
                    ? (o.value = !0)
                    : (o.value = !1));
            }, [t, l, o]),
            (0, r.jsx)(n, { className: "pointer-events-none h-full w-full" })
          );
        };
      function x({
        lit: e,
        onCampfireLit: t,
        handleRelicClick: l,
        relicCollection: a,
        websiteSingleton: o,
      }) {
        let [m, g] = (0, s.useState)(!1),
          [p, v] = (0, s.useState)(!1),
          w = (0, s.useRef)(null),
          b = (0, s.useRef)(null),
          j = (0, s.useRef)(null);
        return (
          (0, s.useEffect)(() => {
            let e = i.A.context(() => {
              let e = w.current;
              j.current = i.A.timeline({
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
              (i.A.from(t.chars, {
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
                i.A.to(".transition-leaves", {
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
          (0, s.useEffect)(() => {
            if (e) {
              let t = i.A.context(() => {
                  let e = new u.SplitText("#campfire-hint", {
                    type: "words, chars",
                  });
                  i.A.from(e.chars, {
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
                l = i.A.matchMedia();
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
          (0, r.jsxs)("div", {
            ref: w,
            className:
              "torch-visible relative z-40 aspect-[1/1.85] w-screen overflow-y-visible lg:aspect-square",
            children: [
              (0, r.jsx)("h2", {
                id: "campfire-text",
                className:
                  "absolute left-0 right-0 top-1/3 z-20 mx-auto mb-6 w-full px-8 text-center text-3xl font-medium lg:max-w-4xl lg:text-6xl",
                children: o.minigameFirePrompt,
              }),
              (0, r.jsx)("h2", {
                id: "campfire-hint",
                className: `${!e ? "opacity-0" : ""} absolute left-0 right-0 top-1/3 z-20 mx-auto mb-6 w-full px-8 text-center text-3xl font-medium lg:max-w-4xl lg:text-6xl`,
                children: o.minigameFireHint,
              }),
              (0, r.jsxs)("div", {
                className: "absolute h-full w-full",
                children: [
                  (0, r.jsx)(n(), {
                    width: 2304,
                    height: 2304,
                    alt: "Unlit Campfire",
                    src: "/images/camp-scene_unlit.jpg",
                    className: "absolute z-10 h-full w-full object-cover",
                    priority: !0,
                  }),
                  (0, r.jsx)(n(), {
                    width: 2304,
                    height: 2304,
                    alt: "Lit Campfire",
                    src: "/images/camp-scene_lit.jpg",
                    className: `${e ? "opacity-100" : "opacity-0"} absolute z-10 h-full w-full object-cover transition-opacity duration-1000`,
                    priority: !0,
                  }),
                  !e &&
                    (0, r.jsx)("div", {
                      onMouseEnter: () => g(!0),
                      onMouseLeave: () => g(!1),
                      onClick: () => t(),
                      className:
                        "puzzle_start absolute bottom-[30%] left-1/2 z-20 h-32 w-32 -translate-x-[45%] cursor-pointer lg:h-60 lg:w-60",
                      children: (0, r.jsx)(h, { hovered: m }),
                    }),
                  !a.includes("horn") &&
                    (0, r.jsx)("div", {
                      onMouseEnter: () => v(!0),
                      onMouseLeave: () => v(!1),
                      className: `${!e ? "pointer-events-none" : ""} absolute bottom-[42%] left-[6%] z-30 w-[11%] lg:bottom-[39%] lg:left-[23%] lg:p-12`,
                      children: (0, r.jsxs)("div", {
                        className: "relative aspect-square w-full",
                        children: [
                          (0, r.jsx)(f, {
                            relicName: "horn",
                            hovered: p,
                            collected: a.includes("horn"),
                          }),
                          (0, r.jsx)("div", {
                            className: "absolute left-0 top-0 h-full w-full",
                            children: (0, r.jsx)(d.A, {
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
              (0, r.jsx)("div", {
                ref: b,
                className:
                  "pointer-events-none absolute left-0 top-0 z-20 w-full -translate-y-1/3",
                children: (0, r.jsx)(n(), {
                  width: "1920",
                  height: "898",
                  alt: "Top leaves transition",
                  src: "/images/transitions/Transition_2.webp",
                  className: "transition-leaves w-full",
                  priority: !0,
                }),
              }),
              (0, r.jsx)("div", {
                className:
                  "left-leaves pointer-events-none absolute left-0 top-0 z-30 h-full w-screen -translate-x-1/3",
                children: (0, r.jsx)(n(), {
                  width: 1286,
                  height: 857,
                  alt: "Left jungle leaves",
                  src: "/images/side-leaves.png",
                  className: "w-full",
                  priority: !0,
                }),
              }),
              (0, r.jsx)("div", {
                className:
                  "right-leaves pointer-events-none absolute right-0 top-0 z-30 h-full w-screen translate-x-1/3",
                children: (0, r.jsx)(n(), {
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
  },
  (e) => {
    (e.O(
      0,
      [
        9950, 8762, 5013, 2696, 1329, 6342, 3492, 4971, 9980, 2642, 8925, 7322,
        636, 6593, 8792,
      ],
      () => e((e.s = 23698)),
    ),
      (_N_E = e.O()));
  },
]);
