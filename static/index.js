(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    10638: function (e, t, l) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return l(68786);
        },
      ]);
    },
    40712: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return HomeCampfire;
        },
      });
      var s = l(97458),
        i = l(52983),
        n = l(47681),
        r = l.n(n),
        a = l(97013),
        o = l(63982),
        c = l.n(o),
        u = l(38725),
        d = l(41855),
        m = l(76057);
      let RiveCampfireCircleComponent = (e) => {
          let { hovered: t } = e,
            { rive: l, RiveComponent: n } = (0, m.useRive)({
              src: "/animations/campfire_circle.riv",
              stateMachines: "State Machine 1",
              autoplay: !0,
              layout: new m.Layout({ fit: m.Fit.Cover }),
              useOffscreenRenderer: !1,
            }),
            r = (0, m.useStateMachineInput)(
              l,
              "State Machine 1",
              "Highlighted",
            );
          return (
            (0, i.useEffect)(() => {
              r && (t ? (r.value = !0) : (r.value = !1));
            }, [t]),
            (0, s.jsx)(n, { className: "pointer-events-none h-full w-full" })
          );
        },
        RiveRelicComponent = (e) => {
          let { relicName: t, hovered: l, collected: n } = e,
            { rive: r, RiveComponent: a } = (0, m.useRive)({
              src: "/animations/" + t + ".riv",
              stateMachines: "State Machine 1",
              autoplay: !0,
              layout: new m.Layout({ fit: m.Fit.Cover }),
              useOffscreenRenderer: !1,
            }),
            o = t.charAt(0).toUpperCase() + t.slice(1),
            c = (0, m.useStateMachineInput)(
              r,
              "State Machine 1",
              o + "Shimmering",
            ),
            u = (0, m.useStateMachineInput)(r, "State Machine 1", o + "Away");
          return (
            (0, i.useEffect)(() => {
              c &&
                (n && u
                  ? ((c.value = !1), (u.value = !0))
                  : l
                    ? (c.value = !0)
                    : (c.value = !1));
            }, [l, n, c]),
            (0, s.jsx)(a, { className: "pointer-events-none h-full w-full" })
          );
        };
      function HomeCampfire(e) {
        let {
            lit: t,
            onCampfireLit: l,
            handleRelicClick: n,
            relicCollection: o,
            websiteSingleton: m,
          } = e,
          [h, f] = (0, i.useState)(!1),
          [x, g] = (0, i.useState)(!1),
          p = (0, i.useRef)(null),
          v = (0, i.useRef)(null),
          w = (0, i.useRef)(null);
        return (
          (0, i.useEffect)(() => {
            let e = a.Z.context(() => {
              let e = p.current;
              w.current = a.Z.timeline({
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
              (a.Z.from(t.chars, {
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
                a.Z.to(".transition-leaves", {
                  scrollTrigger: {
                    trigger: v.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.5,
                  },
                  yPercent: -25,
                }));
            }, [p]);
            return () => e.revert();
          }, []),
          (0, i.useEffect)(() => {
            if (t) {
              let e = a.Z.context(() => {
                  let e = new u.SplitText("#campfire-hint", {
                    type: "words, chars",
                  });
                  a.Z.from(e.chars, {
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
                }, [p]),
                l = a.Z.matchMedia();
              return (
                l.add("(max-width: 768px)", () => {
                  c().create({
                    trigger: p.current,
                    start: "center-=100px center",
                    end: "center+=100px center",
                    onToggle: (e) => {
                      t && g(e.isActive);
                    },
                  });
                }),
                () => {
                  (e.revert(), l.revert());
                }
              );
            }
          }, [t]),
          (0, s.jsxs)("div", {
            ref: p,
            className:
              "torch-visible relative z-40 aspect-[1/1.85] w-screen overflow-y-visible lg:aspect-square",
            children: [
              (0, s.jsx)("h2", {
                id: "campfire-text",
                className:
                  "absolute left-0 right-0 top-1/3 z-20 mx-auto mb-6 w-full px-8 text-center text-3xl font-medium lg:max-w-4xl lg:text-6xl",
                children: m.minigameFirePrompt,
              }),
              (0, s.jsx)("h2", {
                id: "campfire-hint",
                className: "".concat(
                  t ? "" : "opacity-0",
                  " absolute left-0 right-0 top-1/3 z-20 mx-auto mb-6 w-full px-8 text-center text-3xl font-medium lg:max-w-4xl lg:text-6xl",
                ),
                children: m.minigameFireHint,
              }),
              (0, s.jsxs)("div", {
                className: "absolute h-full w-full",
                children: [
                  (0, s.jsx)(r(), {
                    width: 2304,
                    height: 2304,
                    alt: "Unlit Campfire",
                    src: "/images/camp-scene_unlit.jpg",
                    className: "absolute z-10 h-full w-full object-cover",
                    priority: !0,
                  }),
                  (0, s.jsx)(r(), {
                    width: 2304,
                    height: 2304,
                    alt: "Lit Campfire",
                    src: "/images/camp-scene_lit.jpg",
                    className: "".concat(
                      t ? "opacity-100" : "opacity-0",
                      " absolute z-10 h-full w-full object-cover transition-opacity duration-1000",
                    ),
                    priority: !0,
                  }),
                  !t &&
                    (0, s.jsx)("div", {
                      onMouseEnter: () => f(!0),
                      onMouseLeave: () => f(!1),
                      onClick: () => l(),
                      className:
                        "puzzle_start absolute bottom-[30%] left-1/2 z-20 h-32 w-32 -translate-x-[45%] cursor-pointer lg:h-60 lg:w-60",
                      children: (0, s.jsx)(RiveCampfireCircleComponent, {
                        hovered: h,
                      }),
                    }),
                  !o.includes("horn") &&
                    (0, s.jsx)("div", {
                      onMouseEnter: () => g(!0),
                      onMouseLeave: () => g(!1),
                      className: "".concat(
                        t ? "" : "pointer-events-none",
                        " absolute bottom-[42%] left-[6%] z-30 w-[11%] lg:bottom-[39%] lg:left-[23%] lg:p-12",
                      ),
                      children: (0, s.jsxs)("div", {
                        className: "relative aspect-square w-full",
                        children: [
                          (0, s.jsx)(RiveRelicComponent, {
                            relicName: "horn",
                            hovered: x,
                            collected: o.includes("horn"),
                          }),
                          (0, s.jsx)("div", {
                            className: "absolute left-0 top-0 h-full w-full",
                            children: (0, s.jsx)(d.Z, {
                              onClick: n,
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
                ref: v,
                className:
                  "pointer-events-none absolute left-0 top-0 z-20 w-full -translate-y-1/3",
                children: (0, s.jsx)(r(), {
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
                children: (0, s.jsx)(r(), {
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
                children: (0, s.jsx)(r(), {
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
    34827: function (e, t, l) {
      "use strict";
      l.a(e, async function (e, s) {
        try {
          l.d(t, {
            Z: function () {
              return HomeComponent;
            },
          });
          var i = l(97458),
            n = l(54156),
            r = l(13743),
            a = l(40712),
            o = l(62760),
            c = l(28690),
            u = l(99915),
            d = l(12984),
            m = l(37889),
            h = l(34191),
            f = l(54834),
            x = l(83913),
            g = l(52983),
            p = l(67392),
            v = l(2300),
            w = l(97013),
            b = l(93656),
            j = l(77765),
            y = l(13782),
            N = e([n, r, u, m, v]);
          function HomeComponent(e) {
            let {
                articles: t,
                products: l,
                heroCards: s,
                rewards: N,
                websiteSingleton: k,
                navItems: S,
                footerSocialLinks: z,
                surveys: C,
                signUpBanner: Z,
              } = e,
              [R, T] = (0, g.useState)([]),
              [M, L] = (0, g.useState)(!1),
              [E, I] = (0, g.useState)(!1),
              [P, _] = (0, g.useState)(!1),
              { isLoggedIn: H, minigameCompleted: A } = (0, v.S)(),
              U = (0, b.useRouter)(),
              { addAlert: B } = (0, j.Z)();
            (0, g.useEffect)(() => {
              if (U.asPath.split("?").length <= 1) return;
              let e = new URLSearchParams(U.asPath.split("?")[1]);
              null !== e.get("verification-successful") &&
                B({
                  title: "Verification successful!",
                  children: "Thank you for verifying your email.",
                });
            }, [U.asPath]);
            let addRelicToCollection = (e) => {
                T((t) => [...t, e]);
              },
              addRelicToTray = (e) => {
                I(!0);
                let t = p.Flip.getState(".relic");
                (addRelicToCollection(e),
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
              [O, F] = (0, g.useState)(!1),
              D = (0, g.useRef)(null);
            ((0, g.useEffect)(() => {
              let e = w.Z.matchMedia();
              return (
                e.add("(max-width: 768px)", () => {
                  D &&
                    D.current &&
                    w.Z.to(".torch-container", {
                      opacity: 1,
                      duration: 0.3,
                      ease: "power2.inOut",
                      scrollTrigger: {
                        trigger: D.current,
                        start: "top center",
                        end: "bottom center",
                        onToggle: (e) => {
                          let { isActive: t } = e;
                          w.Z.to(".torch-container", {
                            opacity: t ? 1 : 0,
                            duration: 0.5,
                          });
                        },
                      },
                    });
                }),
                () => e.revert()
              );
            }, [D]),
              (0, g.useEffect)(() => {
                if (P) {
                  let e = w.Z.matchMedia();
                  return (
                    e.add("(max-width: 768px)", () => {
                      D &&
                        D.current &&
                        w.Z.to(".torch-container", {
                          opacity: 0,
                          duration: 0.3,
                          ease: "power2.inOut",
                        });
                    }),
                    () => e.revert()
                  );
                }
              }, [P]));
            let [V, W] = (0, g.useState)(!1),
              openMinigame = () => {
                W(!0);
              };
            return (0, i.jsxs)("div", {
              children: [
                (0, i.jsxs)("div", {
                  className: "overflow-hidden",
                  children: [
                    (0, i.jsx)("h1", {
                      className: "hidden",
                      children: "Tomb Raider - Adventure Awaits",
                    }),
                    (0, i.jsx)(n.Z, {
                      heroCards: s,
                      websiteSingleton: k,
                      navItems: S,
                      surveys: C,
                      signUpBanner: Z,
                    }),
                    (0, i.jsx)("div", {
                      className: "h-40 w-full bg-trueblack lg:h-80",
                    }),
                    A
                      ? (0, i.jsx)(r.Z, {
                          handleRelicClick: addRelicToTray,
                          relicCollection: R,
                          gameActive: O,
                          puzzleSolved: P,
                          onUnlock: openMinigame,
                          websiteSingleton: k,
                        })
                      : (0, i.jsxs)("div", {
                          ref: D,
                          children: [
                            (0, i.jsx)(r.Z, {
                              handleRelicClick: addRelicToTray,
                              relicCollection: R,
                              gameActive: O,
                              puzzleSolved: P,
                              onUnlock: openMinigame,
                              websiteSingleton: k,
                            }),
                            (0, i.jsx)(a.Z, {
                              lit: O,
                              onCampfireLit: function () {
                                ((0, y.sendGTMEvent)({ event: "puzzle_start" }),
                                  F(!0),
                                  w.Z.to("#campfire-text", {
                                    opacity: 0,
                                    duration: 1,
                                    ease: "power2.inOut",
                                  }));
                              },
                              handleRelicClick: addRelicToTray,
                              relicCollection: R,
                              websiteSingleton: k,
                            }),
                            (0, i.jsx)(o.Z, {
                              handleRelicClick: addRelicToTray,
                              relicCollection: R,
                              gameActive: O,
                            }),
                          ],
                        }),
                  ],
                }),
                !H && (0, i.jsx)(c.Z, { rewards: N, websiteSingleton: k }),
                (0, i.jsx)(m.Z, {
                  articles: t,
                  products: l,
                  websiteSingleton: k,
                }),
                (0, i.jsx)(d.Z, { websiteSingleton: k }),
                (0, i.jsx)(u.Z, {
                  websiteSingleton: k,
                  navItems: S,
                  footerSocialLinks: z,
                }),
                !A &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(h.Z, {
                        open: V,
                        close: () => {
                          W(!1);
                        },
                        relicCollection: R,
                        setSuccess: _,
                        websiteSingleton: k,
                      }),
                      (0, i.jsx)(f.Z, { enabled: O }),
                      (0, i.jsx)(x.Z, {
                        gameArea: D,
                        collection: R,
                        activated: M && O && !P && !A,
                        setActivated: L,
                        open: E,
                        setOpen: (e) => I(e),
                        puzzleOpen: V,
                        puzzleSolved: P || A,
                        websiteSingleton: k,
                      }),
                    ],
                  }),
              ],
            });
          }
          (([n, r, u, m, v] = N.then ? (await N)() : N), s());
        } catch (e) {
          s(e);
        }
      });
    },
    62760: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return HomeDarkness;
        },
      });
      var s = l(97458),
        i = l(52983),
        n = l(47681),
        r = l.n(n),
        a = l(97013),
        o = l(63982),
        c = l.n(o),
        u = l(41855),
        d = l(76057);
      let RiveDarknessComponent = (e) => {
        let {
            crownHovered: t,
            crownCollected: l,
            helmetHovered: n,
            helmetCollected: r,
          } = e,
          { rive: a, RiveComponent: o } = (0, d.useRive)({
            src: "/animations/darkness.riv",
            stateMachines: "State Machine 1",
            autoplay: !0,
            layout: new d.Layout({
              fit: d.Fit.Cover,
              alignment: d.Alignment.Center,
            }),
            useOffscreenRenderer: !1,
          }),
          c = (0, d.useStateMachineInput)(
            a,
            "State Machine 1",
            "CrownShimmering",
          ),
          u = (0, d.useStateMachineInput)(a, "State Machine 1", "CrownAway"),
          m = (0, d.useStateMachineInput)(
            a,
            "State Machine 1",
            "HelmetShimmering",
          ),
          h = (0, d.useStateMachineInput)(a, "State Machine 1", "HelmetAway");
        return (
          (0, i.useEffect)(() => {
            c &&
              (l && u
                ? ((c.value = !1), (u.value = !0))
                : t
                  ? (c.value = !0)
                  : (c.value = !1));
          }, [t, l, c]),
          (0, i.useEffect)(() => {
            m &&
              (r && h
                ? ((m.value = !1), (h.value = !0))
                : n
                  ? (m.value = !0)
                  : (m.value = !1));
          }, [n, r, m]),
          (0, s.jsx)(o, { className: "pointer-events-none h-full w-full" })
        );
      };
      function HomeDarkness(e) {
        let { handleRelicClick: t, relicCollection: l, gameActive: n } = e,
          o = (0, i.useRef)(null),
          d = (0, i.useRef)(null),
          [m, h] = (0, i.useState)(!1),
          [f, x] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            let e = a.Z.context(() => {
              let e = o.current;
              (a.Z.from(".darkness-background", {
                scrollTrigger: {
                  trigger: e,
                  start: "top bottom",
                  end: "bottom center",
                  scrub: 0.5,
                },
                yPercent: -50,
              }),
                a.Z.from(".horizontal-pillars", {
                  scrollTrigger: {
                    trigger: e,
                    start: "top center",
                    end: "bottom center",
                    scrub: 0.5,
                  },
                  yPercent: -20,
                }),
                a.Z.to(".transition-leaves", {
                  scrollTrigger: {
                    trigger: d.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.5,
                  },
                  yPercent: -25,
                }));
            }, [o]);
            return () => e.revert();
          }, []),
          (0, i.useEffect)(() => {
            if (n) {
              let e = a.Z.matchMedia();
              return (
                e.add("(max-width: 768px)", () => {
                  (c().create({
                    trigger: o.current,
                    start: "top 70%",
                    end: "top+=200px 70%",
                    onToggle: (e) => {
                      n && x(e.isActive);
                    },
                  }),
                    c().create({
                      trigger: o.current,
                      start: "bottom-=200px center",
                      end: "bottom center",
                      onToggle: (e) => {
                        n && h(e.isActive);
                      },
                    }));
                }),
                () => e.revert()
              );
            }
          }, [n]),
          (0, s.jsxs)("div", {
            ref: o,
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
                      (0, s.jsx)(RiveDarknessComponent, {
                        crownHovered: m,
                        crownCollected: l.includes("crown"),
                        helmetHovered: f,
                        helmetCollected: l.includes("helmet"),
                      }),
                      !l.includes("crown") &&
                        (0, s.jsx)("div", {
                          onMouseEnter: () => h(!0),
                          onMouseLeave: () => h(!1),
                          className: "".concat(
                            n ? "" : "pointer-events-none",
                            " absolute bottom-[17%] left-1/2 z-20 flex aspect-square w-[20%] -translate-x-1/2 items-center justify-center lg:bottom-[15%] lg:w-[15%]",
                          ),
                          children: (0, s.jsx)(u.Z, {
                            onClick: t,
                            name: "crown",
                            collected: !1,
                            zoomed: !1,
                          }),
                        }),
                      !l.includes("helmet") &&
                        (0, s.jsx)("div", {
                          onMouseEnter: () => x(!0),
                          onMouseLeave: () => x(!1),
                          className: "".concat(
                            n ? "" : "pointer-events-none",
                            " absolute left-[30%] top-[27%] z-20 flex aspect-square w-[20%] items-center justify-center lg:left-[36%] lg:top-[25%] lg:w-[15%]",
                          ),
                          children: (0, s.jsx)(u.Z, {
                            onClick: t,
                            name: "helmet",
                            collected: !1,
                            zoomed: !1,
                          }),
                        }),
                    ],
                  }),
                  (0, s.jsx)(r(), {
                    width: 1440,
                    height: 1440,
                    alt: "Darkness Foreground",
                    src: "/images/darkness-scene_foreground.png",
                    className:
                      "pointer-events-none absolute right-0 top-0 z-20 h-full w-full object-cover",
                    priority: !0,
                  }),
                  (0, s.jsx)(r(), {
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
                ref: d,
                className:
                  "pointer-events-none absolute left-0 top-0 z-20 w-full -translate-y-[20%]",
                children: (0, s.jsx)(r(), {
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
    54156: function (e, t, l) {
      "use strict";
      l.a(e, async function (e, s) {
        try {
          l.d(t, {
            Z: function () {
              return HomeIntro;
            },
          });
          var i = l(97458),
            n = l(47681),
            r = l.n(n),
            a = l(87249),
            o = l(52983),
            c = l(75443),
            u = l(99288),
            d = l(72790),
            m = l(91806),
            h = l(7365),
            f = e([a, m]);
          function HomeIntro(e) {
            var t, l, s, n;
            let {
                heroCards: f,
                websiteSingleton: x,
                navItems: g,
                surveys: p,
                signUpBanner: v,
              } = e,
              [w, b] = (0, o.useState)(0),
              [j, y] = (0, o.useState)(null),
              [N, k] = (0, o.useState)(!0),
              { width: S = 1600 } = (0, d.Z)(),
              changeIndex = (e) => {
                let t = e;
                (t > f.length && (t = 0),
                  t < 0 && (t = f.length),
                  b(t),
                  null == j || j.slideTo(t));
              },
              autoSwipe = () => {
                N && changeIndex(w + 1);
              },
              handleSlideControlsClick = () => {
                k(!1);
              };
            return (
              (0, o.useEffect)(() => {
                let e = x.globalSliderAutoplayDelay || 3e3,
                  t = setInterval(autoSwipe, e);
                return () => clearInterval(t);
              }, [N, w]),
              (0, i.jsx)(i.Fragment, {
                children: (0, i.jsxs)("div", {
                  className:
                    "relative flex min-h-[max(1000px,100svh)] w-full shrink-0 flex-col items-center justify-stretch overflow-hidden",
                  children: [
                    (0, i.jsxs)("div", {
                      className: "-z-5 absolute left-0 top-0 h-full w-full",
                      children: [
                        (0, i.jsxs)("div", {
                          style: {
                            opacity: 0 === w ? 1 : 0,
                            transition: "all 0.3s ease",
                          },
                          className:
                            "absolute left-0 top-0 mt-[96px] max-h-none min-h-[40%] min-w-full max-w-full md:min-h-[50%] lg:mt-0 xl:min-h-full",
                          children: [
                            (0, i.jsx)(r(), {
                              fill: !0,
                              priority: !0,
                              className: "object-cover object-center",
                              alt: "Golden sunlight filters through the dense foliage of a jungle, illuminating an ancient stone archway and watchful mountain lion.",
                              src: (0, m.Wx)(
                                null === (l = x.homepageHeroBackground) ||
                                  void 0 === l
                                  ? void 0
                                  : null === (t = l.fields.file) || void 0 === t
                                    ? void 0
                                    : t.url,
                              ),
                            }),
                            (0, i.jsx)("div", {
                              className:
                                "pointer-events-none absolute top-1/2 h-1/2 w-full bg-gradient-to-b from-transparent to-black",
                            }),
                          ],
                        }),
                        f.map((e, t) => {
                          var l, s, n, a, o, c, u;
                          return e.backgroundVideoLink
                            ? (0, i.jsxs)(
                                "div",
                                {
                                  style: {
                                    opacity: w - 1 === t ? 1 : 0,
                                    transition: "all 0.3s ease",
                                  },
                                  className:
                                    "absolute left-0 top-0 mt-[96px] min-h-[40%] min-w-full max-w-full md:min-h-[50%] lg:mt-0 xl:min-h-full",
                                  children: [
                                    (0, i.jsx)("iframe", {
                                      src:
                                        null !==
                                          (o = f[t].backgroundVideoLink) &&
                                        void 0 !== o
                                          ? o
                                          : "",
                                      allow:
                                        "autoplay; fullscreen; picture-in-picture",
                                      allowFullScreen: !0,
                                      style: {
                                        opacity: w - 1 === t ? 1 : 0,
                                        transition: "all 0.3s ease",
                                      },
                                      className:
                                        "absolute left-1/2 top-1/2 aspect-[16/9] max-h-none min-h-full min-w-full max-w-none translate-x-[-50%] translate-y-[-50%] object-cover",
                                    }),
                                    (0, i.jsx)("div", {
                                      className:
                                        "pointer-events-none absolute top-1/2 h-1/2 w-full border-0 bg-gradient-to-b from-transparent to-black",
                                    }),
                                  ],
                                },
                                t,
                              )
                            : (0, i.jsxs)(
                                "div",
                                {
                                  style: {
                                    opacity: w - 1 === t ? 1 : 0,
                                    transition: "all 0.3s ease",
                                  },
                                  className:
                                    "absolute left-0 top-0 mt-[96px] max-h-none min-h-[40%] min-w-full max-w-full md:min-h-[50%] lg:mt-0 xl:min-h-full",
                                  children: [
                                    (0, i.jsx)(r(), {
                                      fill: !0,
                                      className: "object-cover object-center",
                                      alt:
                                        null !==
                                          (c =
                                            null ===
                                              (l = f[t].backgroundImage) ||
                                            void 0 === l
                                              ? void 0
                                              : l.fields.description) &&
                                        void 0 !== c
                                          ? c
                                          : "",
                                      src: (0, m.Wx)(
                                        null !==
                                          (u =
                                            null ===
                                              (a = f[t].backgroundImage) ||
                                            void 0 === a
                                              ? void 0
                                              : null === (n = a.fields) ||
                                                  void 0 === n
                                                ? void 0
                                                : null === (s = n.file) ||
                                                    void 0 === s
                                                  ? void 0
                                                  : s.url) && void 0 !== u
                                          ? u
                                          : "",
                                      ),
                                    }),
                                    (0, i.jsx)("div", {
                                      className:
                                        "pointer-events-none absolute top-0 h-full w-full bg-gradient-to-b from-transparent to-black",
                                    }),
                                  ],
                                },
                                t,
                              );
                        }),
                      ],
                    }),
                    (0, i.jsx)(a.ZP, {
                      surveys: p,
                      navItems: g,
                      signUpBanner: v,
                    }),
                    (0, i.jsx)("div", {
                      className:
                        "flex w-full grow flex-col items-center justify-stretch px-4 pb-4 pt-28 sm:px-12",
                      children: (0, i.jsx)("div", {
                        className:
                          "flex max-w-full grow items-center justify-center",
                        children: (() => {
                          var e, t, l, s, n, a, o;
                          if (0 !== w)
                            return (0, i.jsxs)("div", {
                              className:
                                "space-between relative flex max-w-full grow flex-col-reverse items-center gap-x-8 gap-y-6 lg:flex-row ".concat(
                                  f[w - 1].secondaryImage
                                    ? "max-w-6xl"
                                    : "max-w-2xl",
                                ),
                              children: [
                                (0, i.jsxs)("div", {
                                  className:
                                    "z-[10] flex max-w-full flex-col items-center text-center md:max-w-2xl ".concat(
                                      f[w - 1].secondaryImage
                                        ? "lg:items-start lg:text-left"
                                        : "",
                                    ),
                                  children: [
                                    (0, i.jsx)("p", {
                                      className:
                                        "pb-8 text-3xl sm:text-4xl lg:text-5xl",
                                      children: f[w - 1].title,
                                    }),
                                    (0, i.jsx)("p", {
                                      className: "text-md pb-12",
                                      children: f[w - 1].body,
                                    }),
                                    (0, i.jsx)(h.Z, {
                                      href: f[w - 1].ctaButtonLink,
                                      children: (0, i.jsx)(c.Z, {
                                        children: f[w - 1].ctaButtonLabel,
                                      }),
                                    }),
                                  ],
                                }),
                                f[w - 1].secondaryImage &&
                                  (0, i.jsx)("div", {
                                    className:
                                      "relative aspect-[16/9] w-full max-w-xs grow lg:aspect-[16/16] lg:h-[30rem] lg:w-auto lg:max-w-full",
                                    children: (0, i.jsx)(r(), {
                                      fill: !0,
                                      className: "object-contain",
                                      alt:
                                        null !==
                                          (s =
                                            null ===
                                              (e = f[w - 1].secondaryImage) ||
                                            void 0 === e
                                              ? void 0
                                              : e.fields.description) &&
                                        void 0 !== s
                                          ? s
                                          : "",
                                      src: (0, m.Wx)(
                                        null !==
                                          (n =
                                            null ===
                                              (l = f[w - 1].secondaryImage) ||
                                            void 0 === l
                                              ? void 0
                                              : null === (t = l.fields.file) ||
                                                  void 0 === t
                                                ? void 0
                                                : t.url) && void 0 !== n
                                          ? n
                                          : "",
                                      ),
                                    }),
                                  }),
                              ],
                            });
                          {
                            let e = x.homepageHeroLogo;
                            return (0, i.jsxs)("div", {
                              className:
                                "flex flex-col items-center justify-center gap-y-6",
                              children: [
                                (0, i.jsx)(r(), {
                                  className: "z-10",
                                  src: (0, m.Wx)(
                                    null == e
                                      ? void 0
                                      : null === (a = e.fields.file) ||
                                          void 0 === a
                                        ? void 0
                                        : a.url,
                                  ),
                                  alt:
                                    null !==
                                      (o =
                                        null == e
                                          ? void 0
                                          : e.fields.description) &&
                                    void 0 !== o
                                      ? o
                                      : "Logo",
                                  width: 417,
                                  height: 187,
                                }),
                                (0, i.jsx)("div", {
                                  className:
                                    "flex flex-col items-center gap-6 self-stretch",
                                  children: (0, i.jsx)("p", {
                                    className:
                                      "z-10 whitespace-nowrap text-base font-bold uppercase tracking-[1.6px]",
                                    children: x.homepageHeroSubtitle,
                                  }),
                                }),
                              ],
                            });
                          }
                        })(),
                      }),
                    }),
                    (0, i.jsxs)("div", {
                      className:
                        "z-5 relative flex h-auto max-w-full items-start gap-1 self-stretch pb-8 lg:max-w-[94vw] lg:gap-2 lg:self-auto lg:pb-0",
                      children: [
                        (0, i.jsx)(r(), {
                          width: 48,
                          height: 48,
                          alt: "Left arrow",
                          src: "/images/arrow-button-left-white.svg",
                          className:
                            "absolute -left-4 top-10 z-10 hidden cursor-pointer rounded-full border-[1.5px] border-solid border-white bg-white/60 lg:block",
                          onClick: () => {
                            (changeIndex(w - 1), handleSlideControlsClick());
                          },
                        }),
                        (0, i.jsx)(r(), {
                          width: 48,
                          height: 48,
                          alt: "Right arrow",
                          src: "/images/arrow-button-right-white.svg",
                          className:
                            "absolute -right-4 top-10 z-10 hidden cursor-pointer rounded-full border-[1.5px] border-solid border-white bg-white/60 lg:block",
                          onClick: () => {
                            (changeIndex(w + 1), handleSlideControlsClick());
                          },
                        }),
                        (0, i.jsxs)(u.tq, {
                          className:
                            "swiper-show-overflow relative flex w-full pl-8 lg:pl-16",
                          slidesPerView: "auto",
                          centeredSlides: S <= 1024,
                          onSwiper: (e) => y(e),
                          onSlideChange: (e) => changeIndex(e.activeIndex),
                          children: [
                            (0, i.jsx)(u.o5, {
                              onClick: handleSlideControlsClick,
                              className: "mx-1",
                              style: { width: 230 },
                              children: (0, i.jsx)(HeroCard, {
                                thumbnail: (0, m.Wx)(
                                  null === (n = x.homepageHeroBackground) ||
                                    void 0 === n
                                    ? void 0
                                    : null === (s = n.fields.file) ||
                                        void 0 === s
                                      ? void 0
                                      : s.url,
                                ),
                                index: 0,
                                alt: "Hero Background Image",
                                title: "",
                                selectedIndex: w,
                                setSelectedIndex: (e) => changeIndex(e),
                              }),
                            }),
                            f.map((e, t) => {
                              var l, s, n, r;
                              let { thumbnail: a, title: o } = e;
                              return (0, i.jsx)(
                                u.o5,
                                {
                                  onClick: handleSlideControlsClick,
                                  className: "mx-1",
                                  style: { width: 230 },
                                  children: (0, i.jsx)(HeroCard, {
                                    thumbnail: "https://".concat(
                                      null !==
                                        (n =
                                          null == a
                                            ? void 0
                                            : null === (l = a.fields.file) ||
                                                void 0 === l
                                              ? void 0
                                              : l.url) && void 0 !== n
                                        ? n
                                        : "",
                                    ),
                                    alt:
                                      null !==
                                        (r =
                                          null == a
                                            ? void 0
                                            : null === (s = a.fields) ||
                                                void 0 === s
                                              ? void 0
                                              : s.description) && void 0 !== r
                                        ? r
                                        : "",
                                    title: o,
                                    index: t + 1,
                                    selectedIndex: w,
                                    setSelectedIndex: (e) => changeIndex(e),
                                  }),
                                },
                                t,
                              );
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className:
                        "pointer-events-none absolute bottom-0 left-0 h-3/4 w-full bg-gradient-to-b from-transparent to-trueblack",
                    }),
                    (0, i.jsx)("p", {
                      className:
                        "relative z-10 hidden pb-16 pt-4 text-sm/3 font-medium text-customgray-500/70 lg:block",
                      children: x.homepageHeroSliderSubtitle,
                    }),
                  ],
                }),
              })
            );
          }
          function HeroCard(e) {
            let {
              thumbnail: t,
              title: l,
              alt: s,
              index: n,
              setSelectedIndex: a,
              selectedIndex: o,
            } = e;
            return (0, i.jsxs)(
              "div",
              {
                className:
                  "relative aspect-[16/9] w-full shrink-0 transition-all ".concat(
                    o === n ? "" : "brightness-[0.6] hover:brightness-100",
                  ),
                children: [
                  (0, i.jsx)(r(), {
                    className:
                      "aspect-[16/9] cursor-pointer object-cover shadow-sm",
                    src: t,
                    alt: s,
                    fill: !0,
                    sizes:
                      "(max-width: 768px) 25vw, (max-width: 1200px) 20vw, 15vw",
                    onClick: () => a(n),
                  }),
                  (0, i.jsxs)("div", {
                    style: { opacity: n === o ? 1 : 0 },
                    className: "duration-300",
                    children: [
                      (0, i.jsx)(r(), {
                        className: "absolute -left-1 -top-1",
                        width: 24,
                        height: 24,
                        alt: "top left bracket",
                        src: "/images/small-top-left-bracket.svg",
                      }),
                      (0, i.jsx)(r(), {
                        className: "absolute -right-1 -top-1",
                        width: 24,
                        height: 24,
                        alt: "top right bracket",
                        src: "/images/small-top-right-bracket.svg",
                      }),
                      (0, i.jsx)(r(), {
                        className: "absolute -bottom-1 -left-1",
                        width: 24,
                        height: 24,
                        alt: "bottom left bracket",
                        src: "/images/small-bottom-left-bracket.svg",
                      }),
                      (0, i.jsx)(r(), {
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
              l,
            );
          }
          (([a, m] = f.then ? (await f)() : f), s());
        } catch (e) {
          s(e);
        }
      });
    },
    37889: function (e, t, l) {
      "use strict";
      l.a(e, async function (e, s) {
        try {
          l.d(t, {
            Z: function () {
              return HomeNewsAndGames;
            },
          });
          var i = l(97458),
            n = l(20213),
            r = l(57187),
            a = l(19024),
            o = l(2300),
            c = l(47681),
            u = l.n(c),
            d = e([r, a, o]);
          function HomeNewsAndGames(e) {
            let { articles: t, products: l, websiteSingleton: s } = e,
              { isLoggedIn: c, minigameCompleted: d } = (0, o.S)();
            return (0, i.jsxs)(n.Z, {
              className:
                "inline-flex flex-col items-start pt-0 text-black lg:pt-32",
              children: [
                c &&
                  d &&
                  (0, i.jsx)("div", {
                    className:
                      "pointer-events-none absolute left-0 top-0 z-40 w-full -translate-y-2/3",
                    children: (0, i.jsx)(u(), {
                      width: 1920,
                      height: 483,
                      className: "w-full object-cover object-top",
                      alt: "Hardwood transition",
                      src: "/images/hero-transition(tinyfied).webp",
                    }),
                  }),
                (0, i.jsx)("div", {
                  className: "flex w-full flex-col overflow-hidden",
                  children: (0, i.jsx)("div", {
                    className: "flex flex-col items-center self-stretch pt-10",
                    children: (0, i.jsx)("div", {
                      className:
                        "flex items-end justify-between self-stretch pb-0",
                      children: (0, i.jsx)(r.Z, {
                        articles: t,
                        headingTitle: "Latest News",
                        buttonTitle: "All News",
                        isHome: !0,
                      }),
                    }),
                  }),
                }),
                (0, i.jsx)("div", {
                  className: "flex w-full flex-col items-start overflow-hidden",
                  children: (0, i.jsx)("div", {
                    className: "flex flex-col items-center self-stretch",
                    children: (0, i.jsx)("div", {
                      className:
                        "flex items-end justify-between self-stretch pb-0",
                      children: (0, i.jsx)(a.Z, {
                        products: l,
                        title: s.featuredGamesTitle,
                        isHome: !0,
                      }),
                    }),
                  }),
                }),
              ],
            });
          }
          (([r, a, o] = d.then ? (await d)() : d), s());
        } catch (e) {
          s(e);
        }
      });
    },
    28690: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return HomeSignUp;
        },
      });
      var s = l(97458),
        i = l(7355),
        n = l(52983),
        r = l(47681),
        a = l.n(r),
        o = l(61666),
        c = l(97013);
      function HomeSignUp(e) {
        let { rewards: t, websiteSingleton: l } = e,
          r = (0, n.useRef)(null),
          u = (0, n.useRef)(null);
        return (
          (0, n.useEffect)(() => {
            let e = c.Z.context(() => {
              let e = c.Z.utils.toArray(".reward-item");
              (e.forEach((e) => {
                c.Z.from(e, {
                  scrollTrigger: { trigger: e, start: "top center" },
                  y: 20,
                  opacity: 0,
                  duration: 0.5,
                });
              }),
                c.Z.to(".transition-brick", {
                  scrollTrigger: {
                    trigger: u.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.5,
                  },
                  yPercent: -20,
                }));
            }, [r]);
            return () => e.revert();
          }, []),
          (0, s.jsxs)("div", {
            ref: r,
            className: "relative z-40 w-full overflow-visible",
            children: [
              (0, s.jsxs)("div", {
                ref: u,
                className:
                  "pointer-events-none absolute left-0 top-0 z-20 w-full -translate-y-1/2",
                children: [
                  (0, s.jsx)(a(), {
                    width: 1920,
                    height: 427,
                    alt: "Top brick transition",
                    src: "/images/transitions/Transition_4.webp",
                    className: "transition-brick w-full",
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "relative bottom-4 z-10 h-20 w-full bg-gradient-to-b from-trueblack md:bottom-28 md:h-40",
                  }),
                ],
              }),
              (0, s.jsx)(o.Z, {}),
              (0, s.jsx)("div", {
                className:
                  "flex w-full flex-col items-center justify-center bg-[url('/images/sign-up_background_extended.jpg')] bg-cover bg-center bg-no-repeat px-12 text-white md:pt-40",
                children: (0, s.jsxs)("div", {
                  className:
                    "relative z-30 flex flex-col items-start self-stretch py-12 md:py-36 lg:flex-row",
                  children: [
                    (0, s.jsx)("div", {
                      className:
                        "flex flex-col items-start pb-12 pt-24 lg:sticky lg:top-32 lg:w-1/2 lg:px-12",
                      children: (0, s.jsx)(i.Z, {
                        title: l.nonFooterCtaTitle,
                        children: l.nonFooterCtaDescription,
                        textAlign: "text-left",
                        showSignUp: !0,
                      }),
                    }),
                    (0, s.jsx)("div", {
                      className: "flex flex-col items-start lg:w-1/2 lg:px-12",
                      children: t.map((e) => {
                        var t, l, i, n;
                        return (0, s.jsxs)(
                          "div",
                          {
                            className:
                              "reward-item mb-16 flex w-full flex-col items-start",
                            children: [
                              (0, s.jsx)("div", {
                                className:
                                  "relative mb-6 flex aspect-[3/2] w-full",
                                children: (0, s.jsx)(a(), {
                                  src: "https://".concat(
                                    null !==
                                      (i =
                                        null === (l = e.image) || void 0 === l
                                          ? void 0
                                          : null === (t = l.fields.file) ||
                                              void 0 === t
                                            ? void 0
                                            : t.url) && void 0 !== i
                                      ? i
                                      : "",
                                  ),
                                  alt:
                                    null !== (n = e.description) && void 0 !== n
                                      ? n
                                      : "",
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
                        );
                      }),
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
    },
    13743: function (e, t, l) {
      "use strict";
      l.a(e, async function (e, s) {
        try {
          l.d(t, {
            Z: function () {
              return HomeTomb;
            },
          });
          var i = l(97458),
            n = l(52983),
            r = l(47681),
            a = l.n(r),
            o = l(41855),
            c = l(61666),
            u = l(26439),
            d = l(70257),
            m = l(97013),
            h = l(63982),
            f = l.n(h),
            x = l(10821),
            g = l.n(x),
            p = l(75443),
            v = l(26049),
            w = l(2300),
            b = l(82262),
            j = e([w, b]);
          function HomeTomb(e) {
            let {
                handleRelicClick: t,
                relicCollection: l,
                gameActive: s,
                puzzleSolved: r,
                onUnlock: h,
                websiteSingleton: x,
              } = e,
              [j, y] = (0, n.useState)(!1),
              [N, k] = (0, n.useState)(!1),
              { isLoggedIn: S } = (0, w.S)(),
              { minigameCompleted: z, setMinigameCompleted: C } = (0, w.S)(),
              Z = (0, n.useRef)(null),
              R = (0, n.useRef)(null),
              T = (0, n.useRef)(null),
              M = (0, n.useRef)(null);
            ((0, n.useEffect)(() => {
              let e = m.Z.context(() => {
                  let e = Z.current;
                  ((M.current = m.Z.timeline({
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
                    m.Z.from(".tomb-door-background", {
                      scrollTrigger: {
                        trigger: e,
                        start: "top bottom",
                        end: "center center",
                        scrub: 0.5,
                      },
                      scale: 1.25,
                    }),
                    m.Z.to(".transition-leaves", {
                      scrollTrigger: {
                        trigger: R.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 0.5,
                      },
                      yPercent: -25,
                    }));
                }, [Z]),
                t = m.Z.matchMedia();
              return (
                t.add("(max-width: 768px)", () => {
                  f().create({
                    trigger: Z.current,
                    start: "bottom-=250px center",
                    end: "bottom center",
                    onToggle: (e) => {
                      s && (y(e.isActive), k(e.isActive));
                    },
                  });
                }),
                () => {
                  (e.revert(), t.revert());
                }
              );
            }, []),
              (0, n.useEffect)(() => {
                if (s) {
                  let e = m.Z.matchMedia();
                  return (
                    e.add("(max-width: 768px)", () => {
                      f().create({
                        trigger: Z.current,
                        start: "bottom-=250px center",
                        end: "bottom center",
                        onToggle: (e) => {
                          s && (y(e.isActive), k(e.isActive));
                        },
                      });
                    }),
                    () => e.revert()
                  );
                }
              }, [s]),
              (0, n.useEffect)(() => {
                (z || r) &&
                  T.current &&
                  (z ||
                    m.Z.to(window, {
                      duration: 1,
                      scrollTo: { y: "#reward-container", offsetY: 150 },
                    }),
                  m.Z.fromTo(
                    T.current,
                    { opacity: 0 },
                    { opacity: 1, duration: 1.5, delay: 3.5 },
                  ));
              }, [r]));
            let delayUnlockUntilSignIn = () => {
              localStorage.setItem(
                "minigame-completed-while-logged-out",
                "true",
              );
            };
            return (0, i.jsxs)("div", {
              ref: Z,
              className:
                "torch-visible relative aspect-[1/1.85] w-screen lg:aspect-square",
              children: [
                (0, i.jsx)(c.Z, {}),
                (0, i.jsx)("div", {
                  ref: R,
                  className:
                    "pointer-events-none absolute left-0 top-0 z-50 w-full -translate-y-1/3",
                  children: (0, i.jsx)(a(), {
                    width: 1920,
                    height: 1403,
                    alt: "Verdant jungle foliage teems with life, from broad leaves to delicate fronds, highlighted by a cluster of vibrant orange flowers.",
                    src: "/images/transitions/Transition_1.webp",
                    className: "transition-leaves w-full",
                    priority: !0,
                  }),
                }),
                (0, i.jsx)("div", {
                  className:
                    "left-leaves pointer-events-none absolute left-0 top-0 z-50 h-full w-screen -translate-x-1/3",
                  children: (0, i.jsx)(a(), {
                    width: 1286,
                    height: 857,
                    alt: "jungle leaves on the left",
                    src: "/images/side-leaves.png",
                    className: "w-full",
                    priority: !0,
                  }),
                }),
                (0, i.jsx)("div", {
                  className:
                    "right-leaves pointer-events-none absolute right-0 top-0 z-50 h-full w-screen translate-x-1/3",
                  children: (0, i.jsx)(a(), {
                    width: 1286,
                    height: 857,
                    alt: "jungle leaves on the right",
                    src: "/images/side-leaves.png",
                    className: "w-full",
                    priority: !0,
                  }),
                }),
                (0, i.jsxs)("div", {
                  className:
                    "relative flex h-full w-full flex-col justify-center overflow-hidden",
                  children: [
                    (0, i.jsx)("div", {
                      id: "vault-door-section",
                      className:
                        "relative z-50 flex flex-col items-center justify-end",
                      children:
                        (z || r) &&
                        (0, i.jsxs)("div", {
                          ref: T,
                          id: "reward-container",
                          className:
                            "p-4 opacity-0 transition-opacity duration-0",
                          children: [
                            (0, i.jsx)("h2", {
                              className:
                                "mb-6 text-center text-xl font-medium lg:text-6xl",
                              children:
                                z && S
                                  ? x.minigameSolvedLoggedInPromptHeadline ||
                                    "Stay Up to Date"
                                  : x.minigameCorrectSolutionTitle,
                            }),
                            (0, i.jsx)("p", {
                              className: "mb-4 text-center lg:text-2xl",
                              children:
                                z && S
                                  ? x.minigameSolvedLoggedInPromptDescription ||
                                    "Keep an eye on your dashboard for breaking news, rewards, and exclusive content."
                                  : x.minigameCorrectSolutionSubtitle,
                            }),
                            !z &&
                              (0, i.jsx)("div", {
                                className: "h-60 scale-125 sm:h-80",
                                children: (0, i.jsx)(d.l, {
                                  playAnimation: !0,
                                }),
                              }),
                            S
                              ? (0, i.jsx)("div", {
                                  className: "mb-4 flex justify-center",
                                  children: (0, i.jsx)(g(), {
                                    href: "/account",
                                    children: (0, i.jsx)(p.Z, {
                                      variant: "darkBackground",
                                      onClick: () => {
                                        ((0, b.Mo)({
                                          action: "MINIGAME_COMPLETION",
                                        }),
                                          C(!0));
                                      },
                                      children: z
                                        ? "View Dashboard"
                                        : x.minigameSolvedLoggedInContinueButtonText,
                                    }),
                                  }),
                                })
                              : (0, i.jsxs)(i.Fragment, {
                                  children: [
                                    (0, i.jsxs)("div", {
                                      className:
                                        "mb-4 flex justify-center gap-2",
                                      children: [
                                        (0, i.jsx)(g(), {
                                          href: "/registration",
                                          children: (0, i.jsx)(p.Z, {
                                            variant: "darkBackground",
                                            onClick: delayUnlockUntilSignIn,
                                            children:
                                              x.minigameSolvedLoggedOutRegisterButtonText,
                                          }),
                                        }),
                                        (0, i.jsx)(g(), {
                                          href: "/login",
                                          children: (0, i.jsx)(p.Z, {
                                            variant: "darkBackground",
                                            onClick: delayUnlockUntilSignIn,
                                            children:
                                              x.minigameSolvedLoggedOutLoginButtonText,
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, i.jsx)("p", {
                                      className: "text-center lg:text-lg",
                                      children: x.minigameSolvedLoggedOutCta,
                                    }),
                                  ],
                                }),
                          ],
                        }),
                    }),
                    !r &&
                      !z &&
                      (0, i.jsx)("div", {
                        className:
                          "absolute bottom-[25%] left-0 right-0 mx-auto",
                        children: (0, i.jsx)(v.Z, {
                          onUnlock: h,
                          overlayText: x.minigameSliderText,
                          id: "vaultDoorSlider",
                        }),
                      }),
                    (0, i.jsxs)("div", {
                      className:
                        "tomb-door-background absolute bottom-0 left-0 z-40 h-full w-full",
                      children: [
                        (0, i.jsx)(u.W, {
                          vaseHovered: j,
                          vaseCollected: l.includes("vase"),
                          maskHovered: N,
                          maskCollected: l.includes("mask"),
                          doorOpen: z || r,
                        }),
                        !l.includes("vase") &&
                          (0, i.jsx)("div", {
                            onMouseEnter: () => y(!0),
                            onMouseLeave: () => y(!1),
                            className: "".concat(
                              s ? "" : "pointer-events-none",
                              " absolute bottom-[13%] left-[6%] z-20 flex aspect-square w-[12%] items-center justify-center lg:bottom-[10.5%] lg:left-[23.5%]",
                            ),
                            children: (0, i.jsx)(o.Z, {
                              onClick: t,
                              name: "vase",
                              collected: !1,
                              zoomed: !1,
                            }),
                          }),
                        !l.includes("mask") &&
                          (0, i.jsx)("div", {
                            onMouseEnter: () => k(!0),
                            onMouseLeave: () => k(!1),
                            className: "".concat(
                              s ? "" : "pointer-events-none",
                              " absolute bottom-[9%] right-[8%] z-20 flex aspect-square w-[12%] items-center justify-center lg:bottom-[7%] lg:right-[25%]",
                            ),
                            children: (0, i.jsx)(o.Z, {
                              onClick: t,
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
    57187: function (e, t, l) {
      "use strict";
      l.a(e, async function (e, s) {
        try {
          l.d(t, {
            Z: function () {
              return HorizontalArticleList;
            },
          });
          var i = l(97458),
            n = l(47681),
            r = l.n(n),
            a = l(17789),
            o = l(52983),
            c = l(75443),
            u = l(10821),
            d = l.n(u),
            m = l(99288),
            h = e([a]);
          function HorizontalArticleList(e) {
            let {
                articles: t,
                headingTitle: l = "Related Articles",
                disableButton: s = !1,
                buttonTitle: n = "View All",
                isHome: u,
              } = e,
              [h, f] = (0, o.useState)(null);
            return (0, i.jsxs)("div", {
              className:
                "flex w-full flex-col items-stretch overflow-hidden py-8",
              children: [
                (0, i.jsxs)("div", {
                  className: "lg:pb-".concat(
                    u ? 12 : 16,
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
                          (0, i.jsx)(d(), {
                            href: "/news/all",
                            children: (0, i.jsx)(c.Z, {
                              variant: "dark",
                              children: n,
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
                            onClick: () => (null == h ? void 0 : h.slidePrev()),
                          }),
                          (0, i.jsx)(r(), {
                            width: 48,
                            height: 48,
                            alt: "Right arrow",
                            onClick: () => (null == h ? void 0 : h.slideNext()),
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
                      children: (0, i.jsx)(m.tq, {
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
                          (0, i.jsx)(
                            m.o5,
                            {
                              className:
                                "relative !h-auto w-64 max-w-none shrink-0 overflow-visible",
                              children: (0, i.jsx)(a.Z, { item: e }),
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
          ((a = (h.then ? (await h)() : h)[0]), s());
        } catch (e) {
          s(e);
        }
      });
    },
    19024: function (e, t, l) {
      "use strict";
      l.a(e, async function (e, s) {
        try {
          l.d(t, {
            Z: function () {
              return HorizontalProductList;
            },
          });
          var i = l(97458),
            n = l(96061),
            r = l(52983),
            a = l(47681),
            o = l.n(a),
            c = l(69049),
            u = l(10821),
            d = l.n(u),
            m = l(75443),
            h = l(91806),
            f = l(99288),
            x = e([n, h]);
          function HorizontalProductList(e) {
            let { products: t, title: l, description: s, isHome: n } = e,
              [a, c] = (0, r.useState)(null);
            return (0, i.jsxs)("div", {
              className:
                "flex w-full flex-col items-stretch overflow-x-hidden py-10",
              children: [
                (0, i.jsxs)("div", {
                  className: n
                    ? "flex flex-col flex-wrap justify-between self-stretch px-8 pb-12 lg:flex-row lg:px-16"
                    : "flex w-full flex-col flex-wrap justify-between gap-y-8 px-6 pb-8 lg:flex-row lg:items-end lg:px-12 lg:pb-12",
                  children: [
                    n
                      ? (0, i.jsxs)("div", {
                          className:
                            "flex flex-col flex-wrap items-center gap-x-8 gap-y-4 pb-4 lg:flex-row lg:pb-0",
                          children: [
                            (0, i.jsx)("p", {
                              className:
                                "text-4xl text-black sm:text-5xl lg:text-6xl",
                              children: l,
                            }),
                            (0, i.jsx)(d(), {
                              href: "/products/games",
                              children: (0, i.jsx)(m.Z, {
                                variant: "dark",
                                children: "All Games",
                              }),
                            }),
                          ],
                        })
                      : (0, i.jsxs)("div", {
                          className:
                            "flex flex-col gap-y-4 text-center lg:gap-y-1 lg:text-left",
                          children: [
                            (0, i.jsx)("p", {
                              className:
                                "text-3xl font-medium text-black lg:text-4xl",
                              children: l,
                            }),
                            (0, i.jsx)("p", {
                              className: "text-sm",
                              children: s,
                            }),
                          ],
                        }),
                    t.length > 0 &&
                      (0, i.jsxs)("div", {
                        className: "hidden gap-x-2 lg:flex",
                        children: [
                          (0, i.jsx)(o(), {
                            width: 48,
                            height: 48,
                            alt: "Left arrow",
                            src: "/images/arrow-button-left.svg",
                            className: "mr-2 cursor-pointer",
                            onClick: () => (null == a ? void 0 : a.slidePrev()),
                          }),
                          (0, i.jsx)(o(), {
                            width: 48,
                            height: 48,
                            alt: "Right arrow",
                            onClick: () => (null == a ? void 0 : a.slideNext()),
                            src: "/images/arrow-button-right.svg",
                            className: "cursor-pointer",
                          }),
                        ],
                      }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: "px-8 lg:px-16",
                  children: (0, i.jsx)(f.tq, {
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
                      (0, i.jsx)(
                        f.o5,
                        {
                          className: "relative max-w-none shrink-0",
                          style: { width: 300 },
                          children: (0, i.jsx)(ProductItem, { product: e }),
                        },
                        e.slug,
                      ),
                    ),
                  }),
                }),
              ],
            });
          }
          function ProductItem(e) {
            var t, l, s, r, a, u, m, f;
            let { product: x } = e;
            return (0, i.jsx)("div", {
              className:
                "group aspect-[2/3] h-auto w-full cursor-pointer shadow-[0_10px_48px_-16px_rgba(0,0,0,1)]",
              children: (0, i.jsxs)(d(), {
                href: "/products/"
                  .concat(
                    null === (t = x.category) || void 0 === t
                      ? void 0
                      : t.fields.slug,
                    "/",
                  )
                  .concat(x.slug),
                children: [
                  (0, i.jsx)(o(), {
                    fill: !0,
                    alt:
                      null !==
                        (f =
                          null === (s = (0, n.U7_)(x)) || void 0 === s
                            ? void 0
                            : null === (l = s.fields.image) || void 0 === l
                              ? void 0
                              : l.fields.description) && void 0 !== f
                        ? f
                        : "",
                    src: "".concat(
                      (0, h.Wx)(
                        null === (u = (0, n.U7_)(x)) || void 0 === u
                          ? void 0
                          : null === (a = u.fields.image) || void 0 === a
                            ? void 0
                            : null === (r = a.fields.file) || void 0 === r
                              ? void 0
                              : r.url,
                      ),
                      "?fit=fill&w=300&h=450",
                    ),
                    className:
                      "absolute left-0 top-0 h-full w-auto object-cover",
                    sizes: "900px",
                  }),
                  (0, i.jsx)(o(), {
                    fill: !0,
                    alt: "game card overlay",
                    src: "/images/vertical-game-card-overlay.webp",
                    className: "object-contain object-[center_175%] opacity-80",
                    sizes: "900px",
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      "absolute bottom-0 h-auto w-full px-4 pb-4 text-white group-hover:bottom-2",
                    style: { transition: "0.4s all ease" },
                    children: [
                      (0, i.jsx)("p", {
                        className: "text-xl font-bold",
                        children: x.title,
                      }),
                      (0, i.jsxs)("div", {
                        className: "relative my-2 h-[3px] w-full",
                        children: [
                          (0, i.jsx)("img", {
                            className:
                              " absolute left-0 top-0 h-full w-full object-fill opacity-100  group-hover:opacity-100",
                            src: "/images/product-divider.svg",
                            alt: "product divider",
                            style: { transition: "all 0.4s ease" },
                          }),
                          (0, i.jsx)("img", {
                            className:
                              " absolute left-0 top-0 h-full w-full object-fill opacity-0  group-hover:opacity-100",
                            alt: "product divider highlighted",
                            src: "/images/product-divider-highlighted.svg",
                            style: { transition: "all 0.4s ease" },
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [
                          (0, i.jsx)("p", {
                            className: "text-sm",
                            children: (0, c.So)(x.releaseDate),
                          }),
                          (0, i.jsx)("div", {
                            className: "flex gap-x-2",
                            children:
                              null === (m = x.ctaButtons) || void 0 === m
                                ? void 0
                                : m.map((e, t) => {
                                    var l, s, n;
                                    return (0, i.jsx)(
                                      o(),
                                      {
                                        width: 16,
                                        height: 16,
                                        alt: "cta button",
                                        src: (0, h.Wx)(
                                          null == e
                                            ? void 0
                                            : null ===
                                                  (n = e.fields.ctaButton) ||
                                                void 0 === n
                                              ? void 0
                                              : null === (s = n.fields.icon) ||
                                                  void 0 === s
                                                ? void 0
                                                : null ===
                                                      (l = s.fields.file) ||
                                                    void 0 === l
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
                  (0, i.jsx)(o(), {
                    className:
                      "absolute bottom-4 left-4 opacity-0 group-hover:bottom-1 group-hover:left-1 group-hover:opacity-60",
                    width: 24,
                    height: 24,
                    alt: "bottom left bracket",
                    src: "/images/small-bottom-left-bracket.svg",
                    style: { transition: "0.4s all ease" },
                  }),
                  (0, i.jsx)(o(), {
                    className:
                      "absolute bottom-4 right-4 opacity-0 group-hover:bottom-1 group-hover:right-1 group-hover:opacity-60",
                    width: 24,
                    height: 24,
                    alt: "bottom right bracket",
                    src: "/images/small-bottom-right-bracket.svg",
                    style: { transition: "0.4s all ease" },
                  }),
                  (0, i.jsx)(o(), {
                    className:
                      "absolute left-4 top-4 opacity-0 group-hover:left-1 group-hover:top-1 group-hover:opacity-60",
                    width: 24,
                    height: 24,
                    alt: "top left bracket",
                    src: "/images/small-top-left-bracket.svg",
                    style: { transition: "0.4s all ease" },
                  }),
                  (0, i.jsx)(o(), {
                    className:
                      "absolute right-4 top-4 opacity-0 group-hover:right-1 group-hover:top-1 group-hover:opacity-60",
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
          (([n, h] = x.then ? (await x)() : x), s());
        } catch (e) {
          s(e);
        }
      });
    },
    34191: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return Minigame;
        },
      });
      var s = l(97458),
        i = l(52983),
        n = l(47681),
        r = l.n(n),
        a = l(75443),
        o = l(97013);
      let c = (0, i.forwardRef)((e, t) => {
        let { runeVal: l, setRuneVal: n } = e,
          a = [
            { name: "Rune 1", imageUrl: "/images/minigame/runes/rune_1.png" },
            { name: "Rune 2", imageUrl: "/images/minigame/runes/rune_2.png" },
            { name: "Rune 3", imageUrl: "/images/minigame/runes/rune_3.png" },
            { name: "Rune 4", imageUrl: "/images/minigame/runes/rune_4.png" },
            { name: "Rune 5", imageUrl: "/images/minigame/runes/rune_5.png" },
            { name: "Rune 6", imageUrl: "/images/minigame/runes/rune_6.png" },
          ],
          [c, u] = (0, i.useState)("up"),
          d = (0, i.useRef)(null);
        return (
          (0, i.useEffect)(() => {
            let e = o.Z.context(() => {
              o.Z.fromTo(
                ".rune-" + l,
                { y: "up" === c ? 10 : -10, opacity: 0, overwrite: "auto" },
                { y: 0, opacity: 1 },
              );
            }, d);
            return () => e.revert();
          }, [l]),
          (0, s.jsxs)("div", {
            ref: d,
            className: "flex w-1/5 flex-col justify-center",
            children: [
              (0, s.jsxs)("button", {
                onMouseDown: function () {
                  (u("up"), l === a.length - 1 ? n(0) : n(l + 1));
                },
                ref: t,
                type: "button",
                className:
                  "group relative flex aspect-[2] w-full cursor-pointer items-center justify-center rounded-xl hover:backdrop-brightness-75",
                children: [
                  (0, s.jsx)(r(), {
                    src: "/images/minigame/arrow_default.png",
                    alt: "up arrow",
                    width: 256,
                    height: 172,
                    className:
                      "pointer-events-none absolute left-0 right-0 mx-auto w-1/2",
                    priority: !0,
                  }),
                  (0, s.jsx)(r(), {
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
                children: a.map((e, t) =>
                  (0, s.jsx)(
                    "div",
                    {
                      className: "rune ".concat(
                        "rune-" + t,
                        " absolute flex h-full w-full items-center justify-center opacity-0",
                      ),
                      children: (0, s.jsx)(r(), {
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
                  (u("down"), 0 === l ? n(a.length - 1) : n(l - 1));
                },
                type: "button",
                className:
                  "group relative flex aspect-[2] w-full cursor-pointer items-center justify-center rounded-xl hover:backdrop-brightness-75",
                children: [
                  (0, s.jsx)(r(), {
                    src: "/images/minigame/arrow_default.png",
                    alt: "down arrow",
                    width: 256,
                    height: 172,
                    className:
                      "pointer-events-none absolute left-0 right-0 mx-auto w-1/2 rotate-180 transform",
                    priority: !0,
                  }),
                  (0, s.jsx)(r(), {
                    src: "/images/minigame/arrow_hover.png",
                    alt: "down arrow hovered",
                    width: 256,
                    height: 172,
                    className:
                      "pointer-events-none absolute left-0 right-0 z-10 mx-auto w-1/2 rotate-180 transform opacity-0 transition-opacity group-hover:opacity-100",
                    priority: !0,
                  }),
                ],
              }),
            ],
          })
        );
      });
      var u = l(13782);
      function Minigame(e) {
        let {
            open: t,
            close: l,
            relicCollection: n,
            setSuccess: d,
            websiteSingleton: m,
          } = e,
          [h, f] = (0, i.useState)([0, 0, 0, 0, 0]),
          x = [
            { runeIndex: 5, relicClue: "crown" },
            { runeIndex: 2, relicClue: "horn" },
            { runeIndex: 4, relicClue: "mask" },
            { runeIndex: 3, relicClue: "helmet" },
            { runeIndex: 0, relicClue: "vase" },
          ],
          [g, p] = (0, i.useState)(!1),
          [v, w] = (0, i.useState)(!1),
          [b, j] = (0, i.useState)(!1),
          y = (0, i.useRef)(null),
          setRune = (e, t) => {
            let l = [...h];
            ((l[e] = t), f(l));
          };
        function checkForSuccess() {
          if (h.every((e, t) => e === x[t].runeIndex))
            (d(!0), l(), j(!1), (0, u.sendGTMEvent)({ event: "puzzle_solve" }));
          else {
            j(!0);
            let e = o.Z.timeline()
              .to(".error-message", { x: 10, duration: 0.1 })
              .to(".error-message", { x: -10, duration: 0.1 })
              .to(".error-message", { x: 10, duration: 0.1 })
              .to(".error-message", { x: -10, duration: 0.1 })
              .to(".error-message", { x: 0, duration: 0.1 });
            e.play();
          }
        }
        return (
          (0, i.useEffect)(() => {
            v &&
              (d(!0),
              j(!1),
              l(),
              (0, u.sendGTMEvent)({ event: "puzzle_skip" }));
          }, [v]),
          (0, i.useEffect)(() => {
            t
              ? (document.body.classList.add("overflow-hidden"),
                y.current && y.current.focus())
              : document.body.classList.remove("overflow-hidden");
          }, [t]),
          (0, s.jsxs)("div", {
            className: "".concat(t ? "" : "hidden"),
            children: [
              (0, s.jsx)("button", {
                "aria-label": "Close",
                className: "fixed right-0 top-0 z-[102] flex items-center p-6",
                onClick: l,
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
                            5 !== n.length &&
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
                                return n.includes(e.relicClue)
                                  ? (0, s.jsx)(
                                      "div",
                                      {
                                        className:
                                          "mx-[2%] flex aspect-square w-full items-center justify-center",
                                        children: (0, s.jsx)(r(), {
                                          width: 256,
                                          height: 256,
                                          alt: "A ancient symbol in the shape of a ".concat(
                                            e.relicClue,
                                          ),
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
                                          (0, s.jsx)(r(), {
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
                                          (0, s.jsx)(r(), {
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
                                (0, s.jsx)(r(), {
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
                                        setRuneVal: (e) => setRune(t, e),
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
                                (0, s.jsx)(a.Z, {
                                  onClick: () => l(),
                                  children: m.minigamePuzzleCloseButtonText,
                                }),
                                (0, s.jsx)(a.Z, {
                                  onClick: () => checkForSuccess(),
                                  children: m.minigamePuzzleSolveButton,
                                }),
                              ],
                            }),
                            (0, s.jsx)("p", {
                              className: "".concat(
                                b ? "" : "invisible ",
                                " error-message text-center",
                              ),
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
                                (0, s.jsx)(a.Z, {
                                  className: "puzzle_skip",
                                  "aria-label": "Yes, Skip Puzzle Button",
                                  variant: "green",
                                  onClick: () => {
                                    (w(!0), checkForSuccess());
                                  },
                                  children: "Yes",
                                }),
                                (0, s.jsx)(a.Z, {
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
    41855: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return Relic;
        },
      });
      var s = l(97458),
        i = l(47681),
        n = l.n(i);
      function Relic(e) {
        let t,
          { onClick: l, name: i, collected: r, zoomed: a } = e;
        return (0, s.jsx)("div", {
          onClick: () => l(i),
          style: r ? { opacity: 1 } : { opacity: 0 },
          "data-flip-id": "flip-" + i,
          className:
            ((t = "relic "),
            r
              ? a
                ? (t += "h-auto w-[50vh]")
                : (t += "h-12 w-12 cursor-pointer hover:scale-110")
              : (t += "h-full w-full z-50 "),
            t),
          children: (0, s.jsx)(n(), {
            width: 256,
            height: 256,
            alt: i + " relic",
            src: "/images/minigame/relics/relic_".concat(i, ".webp"),
            className: "w-full object-cover",
          }),
        });
      }
    },
    83913: function (e, t, l) {
      "use strict";
      var s = l(97458),
        i = l(52983),
        n = l(41855),
        r = l(97013);
      t.Z = (e) => {
        let {
            gameArea: t,
            collection: l,
            activated: a,
            setActivated: o,
            open: c,
            setOpen: u,
            puzzleOpen: d,
            puzzleSolved: m,
            websiteSingleton: h,
          } = e,
          f = (0, i.useRef)(null),
          [x, g] = (0, i.useState)(""),
          [p, v] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            if (f.current) {
              let e = a ? f.current.clientHeight - 72 : f.current.clientHeight;
              r.Z.to(f.current, {
                y: e,
                duration: 0.3,
                ease: "power2.inOut",
                scrollTrigger: {
                  trigger: t.current,
                  start: "top center",
                  end: "bottom center",
                  onToggle: (e) => {
                    let { isActive: t } = e;
                    (o(t), u(t));
                  },
                },
              });
            }
          }, [t]),
          (0, i.useEffect)(() => {
            if (f.current) {
              let e = a ? f.current.clientHeight - 72 : f.current.clientHeight;
              c && a
                ? r.Z.to(f.current, {
                    y: 0,
                    ease: "power2.inOut",
                    duration: 0.3,
                  })
                : r.Z.to(f.current, {
                    y: e,
                    ease: "power2.inOut",
                    duration: 0.3,
                  });
            }
          }, [c, a]),
          (0, i.useEffect)(() => {
            5 === l.length && v(!0);
          }, [l]),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)("div", {
                ref: f,
                style: { transform: "translateY(100%)" },
                className: "".concat(
                  m ? "opacity-0" : "",
                  " pointer-events-none fixed bottom-0 left-0 right-0 z-[101] flex flex-col items-center transition-opacity duration-500",
                ),
                children: [
                  (0, s.jsxs)("div", {
                    onClick: function () {
                      p
                        ? r.Z.to(window, {
                            duration: 1,
                            scrollTo: {
                              y: "#vault-door-section",
                              offsetY: 200,
                            },
                          })
                        : u(!c);
                    },
                    className:
                      "pointer-events-auto flex cursor-pointer flex-col items-center",
                    children: [
                      (0, s.jsx)("div", {
                        className: ""
                          .concat(p ? "items-center" : "top-12", " ")
                          .concat(
                            d ? "hidden" : "",
                            " pointer-events-auto relative z-10 flex h-12 w-12 cursor-pointer justify-center rounded-full bg-lightgray-400 hover:bg-lightgray-500",
                          ),
                        children: (0, s.jsx)("svg", {
                          width: "24",
                          height: "24",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          className: "".concat(
                            c && !p ? "-scale-y-100 " : "",
                            "h-8 w-8 transition-transform",
                          ),
                          children: (0, s.jsx)("path", {
                            d: "M7.4 15.3746L6 13.9746L12 7.97461L18 13.9746L16.6 15.3746L12 10.7746L7.4 15.3746Z",
                            fill: "#181818",
                          }),
                        }),
                      }),
                      (0, s.jsx)("span", {
                        className: "".concat(
                          p || d ? "opacity-100" : "opacity-0",
                        ),
                        children: d
                          ? h.minigameRelicTrayPuzzleOpenClickPrompt
                          : "Return to the Vault",
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    id: "relic-tray",
                    className:
                      "pointer-events-auto z-20 mx-auto mb-2 flex aspect-[5] h-16 items-center justify-center bg-[url('/images/minigame/tray/stone-background.webp')] bg-cover bg-no-repeat p-1",
                    children: l.map(function (e, t) {
                      return (0, s.jsx)(
                        n.Z,
                        { onClick: g, name: e, collected: !0, zoomed: !1 },
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
              "" !== x &&
                (0, s.jsx)("div", {
                  onClick: () => g(""),
                  className:
                    "fixed left-0 top-0 z-[103] flex h-screen w-screen cursor-pointer items-center justify-center bg-black/80",
                  children: (0, s.jsx)(n.Z, {
                    onClick: () => g(""),
                    name: x,
                    collected: !0,
                    zoomed: !0,
                  }),
                }),
            ],
          })
        );
      };
    },
    70257: function (e, t, l) {
      "use strict";
      l.d(t, {
        l: function () {
          return RiveMedallionComponent;
        },
      });
      var s = l(97458),
        i = l(52983),
        n = l(76057);
      let RiveMedallionComponent = (e) => {
        let { playAnimation: t } = e,
          { rive: l, RiveComponent: r } = (0, n.useRive)({
            src: "/animations/medallion.riv",
            autoplay: !1,
            layout: new n.Layout({
              fit: n.Fit.Contain,
              alignment: n.Alignment.Center,
            }),
            useOffscreenRenderer: !1,
          });
        return (
          (0, i.useEffect)(() => {
            t
              ? null == l || l.play()
              : (null == l || l.reset(), null == l || l.pause());
          }, [t, l]),
          (0, s.jsx)(r, { className: "pointer-events-none h-full w-full" })
        );
      };
    },
    26439: function (e, t, l) {
      "use strict";
      l.d(t, {
        W: function () {
          return RiveTombComponent;
        },
      });
      var s = l(97458),
        i = l(76057),
        n = l(52983);
      let RiveTombComponent = (e) => {
        let {
            vaseHovered: t,
            vaseCollected: l,
            maskHovered: r,
            maskCollected: a,
            doorOpen: o,
          } = e,
          { rive: c, RiveComponent: u } = (0, i.useRive)({
            src: "/animations/tomb.riv",
            stateMachines: "State Machine 1",
            autoplay: !0,
            layout: new i.Layout({
              fit: i.Fit.Cover,
              alignment: i.Alignment.Center,
            }),
            shouldDisableRiveListeners: !0,
            useOffscreenRenderer: !1,
          }),
          d = (0, i.useStateMachineInput)(c, "State Machine 1", "DoorOpen"),
          m = (0, i.useStateMachineInput)(
            c,
            "State Machine 1",
            "VaseShimmering",
          ),
          h = (0, i.useStateMachineInput)(c, "State Machine 1", "VaseAway"),
          f = (0, i.useStateMachineInput)(
            c,
            "State Machine 1",
            "MaskShimmering",
          ),
          x = (0, i.useStateMachineInput)(c, "State Machine 1", "MaskAway");
        return (
          (0, n.useEffect)(() => {
            o && d && (d.value = !0);
          }, [o, d]),
          (0, n.useEffect)(() => {
            m &&
              (l && h
                ? ((m.value = !1), (h.value = !0))
                : t
                  ? (m.value = !0)
                  : (m.value = !1));
          }, [t, l, m]),
          (0, n.useEffect)(() => {
            f &&
              (a && x
                ? ((f.value = !1), (x.value = !0))
                : r
                  ? (f.value = !0)
                  : (f.value = !1));
          }, [r, a, f]),
          (0, s.jsx)(u, { className: "pointer-events-none h-full w-full" })
        );
      };
    },
    54834: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return Torch;
        },
      });
      var s = l(97458),
        i = l(52983),
        n = l(76057);
      let RiveTorchComponent = () => {
        let { RiveComponent: e } = (0, n.useRive)({
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
      function Torch(e) {
        let { enabled: t } = e,
          [l, n] = (0, i.useState)({ x: 0, y: 0 }),
          [r, a] = (0, i.useState)(window.innerWidth <= 768),
          [o, c] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            function handleMouseMove(e) {
              n({ x: e.pageX, y: e.pageY });
            }
            function showTorch() {
              c(!1);
            }
            function hideTorch() {
              c(!0);
            }
            let e = document.getElementsByClassName("torch-visible");
            if (r)
              (c(!1),
                window.removeEventListener("mousemove", handleMouseMove),
                Array.from(e).forEach((e) => {
                  (e.removeEventListener("mouseenter", showTorch),
                    e.removeEventListener("mouseleave", hideTorch));
                }));
            else {
              let t = window.scrollY,
                handleScroll = () => {
                  let e = window.scrollY,
                    l = e - t;
                  (n((e) => ({ ...e, y: e.y + l })), (t = e));
                };
              return (
                window.addEventListener("scroll", handleScroll),
                window.addEventListener("mousemove", handleMouseMove),
                Array.from(e).forEach((e) => {
                  (e.addEventListener("mouseenter", showTorch),
                    e.addEventListener("mouseleave", hideTorch));
                }),
                () => {
                  (window.removeEventListener("scroll", handleScroll),
                    window.removeEventListener("mousemove", handleMouseMove),
                    Array.from(e).forEach((e) => {
                      (e.removeEventListener("mouseenter", showTorch),
                        e.removeEventListener("mouseleave", hideTorch));
                    }));
                }
              );
            }
          }, [r]),
          (0, i.useEffect)(() => {
            let handleResize = () => {
              let e = window.innerWidth <= 768;
              if ((a(e), c(!e), e)) {
                let e = window.innerWidth / 2,
                  t = window.innerHeight - 100;
                n({ x: e, y: t });
              }
            };
            return (
              window.addEventListener("resize", handleResize),
              () => {
                window.removeEventListener("resize", handleResize);
              }
            );
          }, []),
          (0, i.useEffect)(() => {
            if (!o && t && r) {
              let e = window.innerWidth / 2,
                t = window.innerHeight - 100;
              n({ x: e, y: t });
            }
          }, [t, o, r]),
          (0, s.jsx)("div", {
            className:
              "torch-container pointer-events-none fixed z-[100] md:absolute md:left-0 md:top-0 ".concat(
                o || !t ? "hidden" : "",
              ),
            style: r
              ? { left: "".concat(l.x, "px"), top: "".concat(l.y, "px") }
              : {
                  transform: "translateX("
                    .concat(l.x, "px) translateY(")
                    .concat(l.y, "px)"),
                },
            children: (0, s.jsx)(RiveTorchComponent, {}),
          })
        );
      }
    },
    26049: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return UnlockSwitch;
        },
      });
      var s = l(97458),
        i = l(52983);
      function UnlockSwitch(e) {
        let {
            onUnlock: t,
            overlayText: l,
            label: n = "Open Vault Door",
            id: r = "unlockSwitch",
          } = e,
          [a, o] = (0, i.useState)(0);
        return (
          (0, i.useEffect)(() => {
            a > 90 && (t(), o(0));
          }, [a, t]),
          (0, s.jsxs)("div", {
            className:
              "unlock-switch relative z-50 mx-auto w-64 cursor-pointer rounded-full border border-white/60 bg-black/90 p-2",
            children: [
              (0, s.jsx)("label", {
                htmlFor: r,
                className: "sr-only",
                "aria-label": n,
                children: n,
              }),
              (0, s.jsx)("input", {
                className:
                  "relative block h-12 w-full cursor-pointer appearance-none rounded-full bg-transparent",
                type: "range",
                value: a,
                max: 100,
                id: r,
                name: r,
                onChange: (e) => o(Number(e.target.value)),
              }),
              (0, s.jsx)("span", {
                className:
                  "pointer-events-none absolute left-16 top-1/2 w-[calc(100%-4.5rem)] -translate-y-1/2 text-center",
                children: l,
              }),
            ],
          })
        );
      }
    },
    68786: function (e, t, l) {
      "use strict";
      l.a(e, async function (e, s) {
        try {
          (l.r(t),
            l.d(t, {
              __N_SSG: function () {
                return a;
              },
              default: function () {
                return Home;
              },
            }));
          var i = l(97458),
            n = l(34827),
            r = e([n]);
          n = (r.then ? (await r)() : r)[0];
          var a = !0;
          function Home(e) {
            let {
              articles: t,
              products: l,
              heroCards: s,
              rewards: r,
              websiteSingleton: a,
              navItems: o,
              footerSocialLinks: c,
              surveys: u,
              signUpBanner: d,
            } = e;
            return (0, i.jsx)(n.Z, {
              articles: t,
              products: l,
              heroCards: s,
              rewards: r,
              websiteSingleton: a,
              navItems: o,
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
    97013: function (e, t, l) {
      "use strict";
      var s = l(6616),
        i = l(67392),
        n = l(63982),
        r = l(29333),
        a = l(63686),
        o = l(38725);
      (s.p8.registerPlugin(
        i.Flip,
        n.ScrollTrigger,
        r.ScrollToPlugin,
        a.ScrollSmoother,
        o.SplitText,
      ),
        (t.Z = s.p8));
    },
    72790: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return useWindowSize;
        },
      });
      var s = l(52983);
      function useWindowSize() {
        let [e, t] = (0, s.useState)({ width: void 0, height: void 0 });
        return (
          (0, s.useEffect)(() => {
            function handleResize() {
              t({ width: window.innerWidth, height: window.innerHeight });
            }
            return (
              window.addEventListener("resize", handleResize),
              handleResize(),
              () => {
                window.removeEventListener("resize", handleResize);
              }
            );
          }, []),
          e
        );
      }
    },
  },
  function (e) {
    (e.O(
      0,
      [46, 369, 681, 882, 34, 658, 778, 249, 806, 702, 774, 888, 179],
      function () {
        return e((e.s = 10638));
      },
    ),
      (_N_E = e.O()));
  },
]);
