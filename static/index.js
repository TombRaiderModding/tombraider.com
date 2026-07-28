(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3332],
  {
    2513: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => n });
      var s = l(2183),
        r = l(36439),
        a = l(44190);
      let i = () => {
        let { RiveComponent: e } = (0, a.useRive)({
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
      function n(e) {
        let { enabled: t } = e,
          [l, a] = (0, r.useState)({ x: 0, y: 0 }),
          [n, o] = (0, r.useState)(window.innerWidth <= 768),
          [c, u] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            function e(e) {
              a({ x: e.pageX, y: e.pageY });
            }
            function t() {
              u(!1);
            }
            function l() {
              u(!0);
            }
            let s = document.getElementsByClassName("torch-visible");
            if (n)
              (u(!1),
                window.removeEventListener("mousemove", e),
                Array.from(s).forEach((e) => {
                  (e.removeEventListener("mouseenter", t),
                    e.removeEventListener("mouseleave", l));
                }));
            else {
              let r = window.scrollY,
                i = () => {
                  let e = window.scrollY,
                    t = e - r;
                  (a((e) => ({ ...e, y: e.y + t })), (r = e));
                };
              return (
                window.addEventListener("scroll", i),
                window.addEventListener("mousemove", e),
                Array.from(s).forEach((e) => {
                  (e.addEventListener("mouseenter", t),
                    e.addEventListener("mouseleave", l));
                }),
                () => {
                  (window.removeEventListener("scroll", i),
                    window.removeEventListener("mousemove", e),
                    Array.from(s).forEach((e) => {
                      (e.removeEventListener("mouseenter", t),
                        e.removeEventListener("mouseleave", l));
                    }));
                }
              );
            }
          }, [n]),
          (0, r.useEffect)(() => {
            let e = () => {
              let e = window.innerWidth <= 768;
              (o(e),
                u(!e),
                e &&
                  a({ x: window.innerWidth / 2, y: window.innerHeight - 100 }));
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
              t &&
              n &&
              a({ x: window.innerWidth / 2, y: window.innerHeight - 100 });
          }, [t, c, n]),
          (0, s.jsx)("div", {
            className:
              "torch-container pointer-events-none fixed z-[100] md:absolute md:left-0 md:top-0 ".concat(
                c || !t ? "hidden" : "",
              ),
            style: n
              ? { left: "".concat(l.x, "px"), top: "".concat(l.y, "px") }
              : {
                  transform: "translateX("
                    .concat(l.x, "px) translateY(")
                    .concat(l.y, "px)"),
                },
            children: (0, s.jsx)(i, {}),
          })
        );
      }
    },
    7760: (e, t, l) => {
      "use strict";
      l.a(e, async (e, s) => {
        try {
          l.d(t, { A: () => f });
          var r = l(2183),
            a = l(96006),
            i = l.n(a),
            n = l(95216),
            o = l(36439),
            c = l(15711),
            u = l(94536),
            d = l(17286),
            m = l(92446),
            h = l(7345),
            g = e([n, m]);
          function f(e) {
            var t, l, s, a;
            let {
                heroCards: g,
                websiteSingleton: f,
                navItems: p,
                surveys: v,
                signUpBanner: w,
              } = e,
              [b, j] = (0, o.useState)(0),
              [y, N] = (0, o.useState)(null),
              [k, A] = (0, o.useState)(!0),
              { width: S = 1600 } = (0, d.A)(),
              z = (e) => {
                let t = e;
                (t > g.length && (t = 0),
                  t < 0 && (t = g.length),
                  j(t),
                  null == y || y.slideTo(t));
              },
              C = () => {
                k && z(b + 1);
              },
              L = () => {
                A(!1);
              };
            return (
              (0, o.useEffect)(() => {
                let e = f.globalSliderAutoplayDelay || 3e3,
                  t = setInterval(C, e);
                return () => clearInterval(t);
              }, [k, b]),
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
                            opacity: +(0 === b),
                            transition: "all 0.3s ease",
                          },
                          className:
                            "absolute left-0 top-0 mt-[96px] max-h-none min-h-[40%] min-w-full max-w-full md:min-h-[50%] lg:mt-0 xl:min-h-full",
                          children: [
                            (0, r.jsx)(i(), {
                              fill: !0,
                              priority: !0,
                              className: "object-cover object-center",
                              alt: "Golden sunlight filters through the dense foliage of a jungle, illuminating an ancient stone archway and watchful mountain lion.",
                              src: (0, m._c)(
                                null == (l = f.homepageHeroBackground) ||
                                  null == (t = l.fields.file)
                                  ? void 0
                                  : t.url,
                              ),
                            }),
                            (0, r.jsx)("div", {
                              className:
                                "pointer-events-none absolute top-1/2 h-1/2 w-full bg-gradient-to-b from-transparent to-black",
                            }),
                          ],
                        }),
                        g.map((e, t) => {
                          var l, s, a, n, o, c, u;
                          return e.backgroundVideoLink
                            ? (0, r.jsxs)(
                                "div",
                                {
                                  style: {
                                    opacity: +(b - 1 === t),
                                    transition: "all 0.3s ease",
                                  },
                                  className:
                                    "absolute left-0 top-0 mt-[96px] min-h-[40%] min-w-full max-w-full md:min-h-[50%] lg:mt-0 xl:min-h-full",
                                  children: [
                                    (0, r.jsx)("iframe", {
                                      src:
                                        null != (o = g[t].backgroundVideoLink)
                                          ? o
                                          : "",
                                      allow:
                                        "autoplay; fullscreen; picture-in-picture",
                                      allowFullScreen: !0,
                                      style: {
                                        opacity: +(b - 1 === t),
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
                                t,
                              )
                            : (0, r.jsxs)(
                                "div",
                                {
                                  style: {
                                    opacity: +(b - 1 === t),
                                    transition: "all 0.3s ease",
                                  },
                                  className:
                                    "absolute left-0 top-0 mt-[96px] max-h-none min-h-[40%] min-w-full max-w-full md:min-h-[50%] lg:mt-0 xl:min-h-full",
                                  children: [
                                    (0, r.jsx)(i(), {
                                      fill: !0,
                                      className: "object-cover object-center",
                                      alt:
                                        null !=
                                        (c =
                                          null == (l = g[t].backgroundImage)
                                            ? void 0
                                            : l.fields.description)
                                          ? c
                                          : "",
                                      src: (0, m._c)(
                                        null !=
                                          (u =
                                            null ==
                                              (n = g[t].backgroundImage) ||
                                            null == (a = n.fields) ||
                                            null == (s = a.file)
                                              ? void 0
                                              : s.url)
                                          ? u
                                          : "",
                                      ),
                                    }),
                                    (0, r.jsx)("div", {
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
                    (0, r.jsx)(n.Ay, {
                      surveys: v,
                      navItems: p,
                      signUpBanner: w,
                    }),
                    (0, r.jsx)("div", {
                      className:
                        "flex w-full grow flex-col items-center justify-stretch px-4 pb-4 pt-28 sm:px-12",
                      children: (0, r.jsx)("div", {
                        className:
                          "flex max-w-full grow items-center justify-center",
                        children: (() => {
                          var e, t, l, s, a, n, o;
                          if (0 !== b)
                            return (0, r.jsxs)("div", {
                              className:
                                "space-between relative flex max-w-full grow flex-col-reverse items-center gap-x-8 gap-y-6 lg:flex-row ".concat(
                                  g[b - 1].secondaryImage
                                    ? "max-w-6xl"
                                    : "max-w-2xl",
                                ),
                              children: [
                                (0, r.jsxs)("div", {
                                  className:
                                    "z-[10] flex max-w-full flex-col items-center text-center md:max-w-2xl ".concat(
                                      g[b - 1].secondaryImage
                                        ? "lg:items-start lg:text-left"
                                        : "",
                                    ),
                                  children: [
                                    (0, r.jsx)("p", {
                                      className:
                                        "pb-8 text-3xl sm:text-4xl lg:text-5xl",
                                      children: g[b - 1].title,
                                    }),
                                    (0, r.jsx)("p", {
                                      className: "text-md pb-12",
                                      children: g[b - 1].body,
                                    }),
                                    (0, r.jsx)(h.A, {
                                      href: g[b - 1].ctaButtonLink,
                                      children: (0, r.jsx)(c.A, {
                                        children: g[b - 1].ctaButtonLabel,
                                      }),
                                    }),
                                  ],
                                }),
                                g[b - 1].secondaryImage &&
                                  (0, r.jsx)("div", {
                                    className:
                                      "relative aspect-[16/9] w-full max-w-xs grow lg:aspect-[16/16] lg:h-[30rem] lg:w-auto lg:max-w-full",
                                    children: (0, r.jsx)(i(), {
                                      fill: !0,
                                      className: "object-contain",
                                      alt:
                                        null !=
                                        (s =
                                          null == (e = g[b - 1].secondaryImage)
                                            ? void 0
                                            : e.fields.description)
                                          ? s
                                          : "",
                                      src: (0, m._c)(
                                        null !=
                                          (a =
                                            null ==
                                              (l = g[b - 1].secondaryImage) ||
                                            null == (t = l.fields.file)
                                              ? void 0
                                              : t.url)
                                          ? a
                                          : "",
                                      ),
                                    }),
                                  }),
                              ],
                            });
                          {
                            let e = f.homepageHeroLogo;
                            return (0, r.jsxs)("div", {
                              className:
                                "flex flex-col items-center justify-center gap-y-6",
                              children: [
                                (0, r.jsx)(i(), {
                                  className: "z-10",
                                  src: (0, m._c)(
                                    null == e || null == (n = e.fields.file)
                                      ? void 0
                                      : n.url,
                                  ),
                                  alt:
                                    null !=
                                    (o =
                                      null == e ? void 0 : e.fields.description)
                                      ? o
                                      : "Logo",
                                  width: 417,
                                  height: 187,
                                }),
                                (0, r.jsx)("div", {
                                  className:
                                    "flex flex-col items-center gap-6 self-stretch",
                                  children: (0, r.jsx)("p", {
                                    className:
                                      "z-10 whitespace-nowrap text-base font-bold uppercase tracking-[1.6px]",
                                    children: f.homepageHeroSubtitle,
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
                        (0, r.jsx)(i(), {
                          width: 48,
                          height: 48,
                          alt: "Left arrow",
                          src: "/images/arrow-button-left-white.svg",
                          className:
                            "absolute -left-4 top-10 z-10 hidden cursor-pointer rounded-full border-[1.5px] border-solid border-white bg-white/60 lg:block",
                          onClick: () => {
                            (z(b - 1), L());
                          },
                        }),
                        (0, r.jsx)(i(), {
                          width: 48,
                          height: 48,
                          alt: "Right arrow",
                          src: "/images/arrow-button-right-white.svg",
                          className:
                            "absolute -right-4 top-10 z-10 hidden cursor-pointer rounded-full border-[1.5px] border-solid border-white bg-white/60 lg:block",
                          onClick: () => {
                            (z(b + 1), L());
                          },
                        }),
                        (0, r.jsxs)(u.RC, {
                          className:
                            "swiper-show-overflow relative flex w-full pl-8 lg:pl-16",
                          slidesPerView: "auto",
                          centeredSlides: S <= 1024,
                          onSwiper: (e) => N(e),
                          onSlideChange: (e) => z(e.activeIndex),
                          children: [
                            (0, r.jsx)(u.qr, {
                              onClick: L,
                              className: "mx-1",
                              style: { width: 230 },
                              children: (0, r.jsx)(x, {
                                thumbnail: (0, m._c)(
                                  null == (a = f.homepageHeroBackground) ||
                                    null == (s = a.fields.file)
                                    ? void 0
                                    : s.url,
                                ),
                                index: 0,
                                alt: "Hero Background Image",
                                title: "",
                                selectedIndex: b,
                                setSelectedIndex: (e) => z(e),
                              }),
                            }),
                            g.map((e, t) => {
                              var l, s, a, i;
                              let { thumbnail: n, title: o } = e;
                              return (0, r.jsx)(
                                u.qr,
                                {
                                  onClick: L,
                                  className: "mx-1",
                                  style: { width: 230 },
                                  children: (0, r.jsx)(x, {
                                    thumbnail: "https://".concat(
                                      null !=
                                        (a =
                                          null == n ||
                                          null == (l = n.fields.file)
                                            ? void 0
                                            : l.url)
                                        ? a
                                        : "",
                                    ),
                                    alt:
                                      null !=
                                      (i =
                                        null == n || null == (s = n.fields)
                                          ? void 0
                                          : s.description)
                                        ? i
                                        : "",
                                    title: o,
                                    index: t + 1,
                                    selectedIndex: b,
                                    setSelectedIndex: (e) => z(e),
                                  }),
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
                        "pointer-events-none absolute bottom-0 left-0 h-3/4 w-full bg-gradient-to-b from-transparent to-trueblack",
                    }),
                    (0, r.jsx)("p", {
                      className:
                        "relative z-10 hidden pb-16 pt-4 text-sm/3 font-medium text-customgray-500/70 lg:block",
                      children: f.homepageHeroSliderSubtitle,
                    }),
                  ],
                }),
              })
            );
          }
          function x(e) {
            let {
              thumbnail: t,
              title: l,
              alt: s,
              index: a,
              setSelectedIndex: n,
              selectedIndex: o,
            } = e;
            return (0, r.jsxs)(
              "div",
              {
                className:
                  "relative aspect-[16/9] w-full shrink-0 transition-all ".concat(
                    o === a ? "" : "brightness-[0.6] hover:brightness-100",
                  ),
                children: [
                  (0, r.jsx)(i(), {
                    className:
                      "aspect-[16/9] cursor-pointer object-cover shadow-sm",
                    src: t,
                    alt: s,
                    fill: !0,
                    sizes:
                      "(max-width: 768px) 25vw, (max-width: 1200px) 20vw, 15vw",
                    onClick: () => n(a),
                  }),
                  (0, r.jsxs)("div", {
                    style: { opacity: +(a === o) },
                    className: "duration-300",
                    children: [
                      (0, r.jsx)(i(), {
                        className: "absolute -left-1 -top-1",
                        width: 24,
                        height: 24,
                        alt: "top left bracket",
                        src: "/images/small-top-left-bracket.svg",
                      }),
                      (0, r.jsx)(i(), {
                        className: "absolute -right-1 -top-1",
                        width: 24,
                        height: 24,
                        alt: "top right bracket",
                        src: "/images/small-top-right-bracket.svg",
                      }),
                      (0, r.jsx)(i(), {
                        className: "absolute -bottom-1 -left-1",
                        width: 24,
                        height: 24,
                        alt: "bottom left bracket",
                        src: "/images/small-bottom-left-bracket.svg",
                      }),
                      (0, r.jsx)(i(), {
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
          (([n, m] = g.then ? (await g)() : g), s());
        } catch (e) {
          s(e);
        }
      });
    },
    8331: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => f });
      var s = l(2183),
        r = l(36439),
        a = l(96006),
        i = l.n(a),
        n = l(26947),
        o = l(93551),
        c = l.n(o),
        u = l(12979),
        d = l(24844),
        m = l(44190);
      let h = (e) => {
          let { hovered: t } = e,
            { rive: l, RiveComponent: a } = (0, m.useRive)({
              src: "/animations/campfire_circle.riv",
              stateMachines: "State Machine 1",
              autoplay: !0,
              layout: new m.Layout({ fit: m.Fit.Cover }),
              useOffscreenRenderer: !1,
            }),
            i = (0, m.useStateMachineInput)(
              l,
              "State Machine 1",
              "Highlighted",
            );
          return (
            (0, r.useEffect)(() => {
              i && (t ? (i.value = !0) : (i.value = !1));
            }, [t]),
            (0, s.jsx)(a, { className: "pointer-events-none h-full w-full" })
          );
        },
        g = (e) => {
          let { relicName: t, hovered: l, collected: a } = e,
            { rive: i, RiveComponent: n } = (0, m.useRive)({
              src: "/animations/" + t + ".riv",
              stateMachines: "State Machine 1",
              autoplay: !0,
              layout: new m.Layout({ fit: m.Fit.Cover }),
              useOffscreenRenderer: !1,
            }),
            o = t.charAt(0).toUpperCase() + t.slice(1),
            c = (0, m.useStateMachineInput)(
              i,
              "State Machine 1",
              o + "Shimmering",
            ),
            u = (0, m.useStateMachineInput)(i, "State Machine 1", o + "Away");
          return (
            (0, r.useEffect)(() => {
              c &&
                (a && u
                  ? ((c.value = !1), (u.value = !0))
                  : l
                    ? (c.value = !0)
                    : (c.value = !1));
            }, [l, a, c]),
            (0, s.jsx)(n, { className: "pointer-events-none h-full w-full" })
          );
        };
      function f(e) {
        let {
            lit: t,
            onCampfireLit: l,
            handleRelicClick: a,
            relicCollection: o,
            websiteSingleton: m,
          } = e,
          [f, x] = (0, r.useState)(!1),
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
            if (t) {
              let e = n.A.context(() => {
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
                    onToggle: (e) => {
                      t && v(e.isActive);
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
            ref: w,
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
                  (0, s.jsx)(i(), {
                    width: 2304,
                    height: 2304,
                    alt: "Unlit Campfire",
                    src: "/images/camp-scene_unlit.jpg",
                    className: "absolute z-10 h-full w-full object-cover",
                    priority: !0,
                  }),
                  (0, s.jsx)(i(), {
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
                      onMouseEnter: () => x(!0),
                      onMouseLeave: () => x(!1),
                      onClick: () => l(),
                      className:
                        "puzzle_start absolute bottom-[30%] left-1/2 z-20 h-32 w-32 -translate-x-[45%] cursor-pointer lg:h-60 lg:w-60",
                      children: (0, s.jsx)(h, { hovered: f }),
                    }),
                  !o.includes("horn") &&
                    (0, s.jsx)("div", {
                      onMouseEnter: () => v(!0),
                      onMouseLeave: () => v(!1),
                      className: "".concat(
                        t ? "" : "pointer-events-none",
                        " absolute bottom-[42%] left-[6%] z-30 w-[11%] lg:bottom-[39%] lg:left-[23%] lg:p-12",
                      ),
                      children: (0, s.jsxs)("div", {
                        className: "relative aspect-square w-full",
                        children: [
                          (0, s.jsx)(g, {
                            relicName: "horn",
                            hovered: p,
                            collected: o.includes("horn"),
                          }),
                          (0, s.jsx)("div", {
                            className: "absolute left-0 top-0 h-full w-full",
                            children: (0, s.jsx)(d.A, {
                              onClick: a,
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
                children: (0, s.jsx)(i(), {
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
                children: (0, s.jsx)(i(), {
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
                children: (0, s.jsx)(i(), {
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
    16739: (e, t, l) => {
      "use strict";
      l.a(e, async (e, s) => {
        try {
          l.d(t, { A: () => m });
          var r = l(2183),
            a = l(96006),
            i = l.n(a),
            n = l(11677),
            o = l.n(n),
            c = l(46956),
            u = l(92446),
            d = e([u]);
          function m(e) {
            var t, l, s, a, n, d, m, h, g;
            let { item: f, onClick: x = () => {} } = e;
            return (0, r.jsx)(o(), {
              onClick: x,
              href: "/news/"
                .concat(
                  null == (l = f.category) || null == (t = l.fields)
                    ? void 0
                    : t.slug,
                  "/",
                )
                .concat(f.slug),
              children: (0, r.jsxs)("article", {
                className:
                  "group flex h-full grow flex-col bg-white shadow-lg duration-[0.3s] lg:bg-transparent lg:shadow-none lg:hover:bg-white lg:hover:shadow-lg",
                children: [
                  (0, r.jsxs)("figure", {
                    className: "relative w-full overflow-hidden",
                    children: [
                      (0, r.jsx)(i(), {
                        alt: "".concat(
                          (null == (a = f.headerImage) || null == (s = a.fields)
                            ? void 0
                            : s.description) || "",
                        ),
                        className:
                          "aspect-[3/2] w-full object-cover transition-all duration-500 group-hover:scale-105",
                        src: (0, u._c)(
                          null == (m = f.headerImage) ||
                            null == (d = m.fields) ||
                            null == (n = d.file)
                            ? void 0
                            : n.url,
                        ),
                        width: 500,
                        height: 500,
                      }),
                      (0, r.jsx)(i(), {
                        alt: "blog card image gradient",
                        fill: !0,
                        className:
                          "absolute top-0 left-0 h-full w-full object-cover",
                        src: "/images/blog-card-image-gradient.svg",
                      }),
                      (0, r.jsx)(i(), {
                        alt: "top left bracket",
                        width: 48,
                        height: 48,
                        className:
                          "absolute -top-4 -left-4 duration-200 group-hover:top-2 group-hover:left-2",
                        src: "/images/top-left-bracket.svg",
                      }),
                      (0, r.jsx)(i(), {
                        alt: "bottom right bracket",
                        width: 48,
                        height: 48,
                        className:
                          "absolute -right-4 -bottom-4 duration-200 group-hover:right-2 group-hover:bottom-2",
                        src: "/images/bottom-right-bracket.svg",
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "absolute bottom-0 left-0 bg-teal-500 px-5 pt-2 pb-1.5 text-center text-sm font-bold tracking-widest text-white uppercase",
                        children:
                          null == (g = f.category) || null == (h = g.fields)
                            ? void 0
                            : h.name,
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "relative flex min-h-[10rem] grow flex-col justify-between overflow-hidden py-5 pr-12 pl-5 duration-200",
                    children: [
                      (0, r.jsx)("h3", {
                        className: "text-2xl font-bold",
                        children: f.title.toString(),
                      }),
                      (0, r.jsx)("p", {
                        className: "mt-4 font-normal text-gray-500",
                        children: (0, r.jsx)("time", {
                          dateTime: f.publishDate,
                          children: (0, c.Yq)(f.publishDate),
                        }),
                      }),
                      (0, r.jsx)(i(), {
                        alt: "desktop compass",
                        width: 232,
                        height: 232,
                        className:
                          "absolute -right-16 -bottom-24 hidden opacity-0 duration-200 group-hover:-right-12 group-hover:-bottom-20 group-hover:opacity-50 lg:block",
                        src: "/images/compass.webp",
                      }),
                      (0, r.jsx)(i(), {
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
          ((u = (d.then ? (await d)() : d)[0]), s());
        } catch (e) {
          s(e);
        }
      });
    },
    17286: (e, t, l) => {
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
    20204: (e, t, l) => {
      "use strict";
      l.a(e, async (e, s) => {
        try {
          l.d(t, { A: () => x });
          var r = l(2183),
            a = l(75109),
            i = l(36439),
            n = l(96006),
            o = l.n(n),
            c = l(46956),
            u = l(11677),
            d = l.n(u),
            m = l(15711),
            h = l(92446),
            g = l(94536),
            f = e([a, h]);
          function x(e) {
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
                  children: (0, r.jsx)(g.RC, {
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
                        g.qr,
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
          function p(e) {
            var t, l, s, i, n, u, m, g;
            let { product: f } = e;
            return (0, r.jsx)("div", {
              className:
                "group aspect-[2/3] h-auto w-full cursor-pointer shadow-[0_10px_48px_-16px_rgba(0,0,0,1)]",
              children: (0, r.jsxs)(d(), {
                href: "/products/"
                  .concat(
                    null == (t = f.category) ? void 0 : t.fields.slug,
                    "/",
                  )
                  .concat(f.slug),
                children: [
                  (0, r.jsx)(o(), {
                    fill: !0,
                    alt:
                      null !=
                      (g =
                        null == (s = (0, a.a9f)(f)) ||
                        null == (l = s.fields.image)
                          ? void 0
                          : l.fields.description)
                        ? g
                        : "",
                    src: "".concat(
                      (0, h._c)(
                        null == (u = (0, a.a9f)(f)) ||
                          null == (n = u.fields.image) ||
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
                        children: f.title,
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
                            children: (0, c.Cp)(f.releaseDate),
                          }),
                          (0, r.jsx)("div", {
                            className: "flex gap-x-2",
                            children:
                              null == (m = f.ctaButtons)
                                ? void 0
                                : m.map((e, t) => {
                                    var l, s, a;
                                    return (0, r.jsx)(
                                      o(),
                                      {
                                        width: 16,
                                        height: 16,
                                        alt: "cta button",
                                        src: (0, h._c)(
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
          (([a, h] = f.then ? (await f)() : f), s());
        } catch (e) {
          s(e);
        }
      });
    },
    24844: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => i });
      var s = l(2183),
        r = l(96006),
        a = l.n(r);
      function i(e) {
        let t,
          { onClick: l, name: r, collected: i, zoomed: n } = e;
        return (0, s.jsx)("div", {
          onClick: () => l(r),
          style: i ? { opacity: 1 } : { opacity: 0 },
          "data-flip-id": "flip-" + r,
          className:
            ((t = "relic "),
            i
              ? n
                ? (t += "h-auto w-[50vh]")
                : (t += "h-12 w-12 cursor-pointer hover:scale-110")
              : (t += "h-full w-full z-50 "),
            t),
          children: (0, s.jsx)(a(), {
            width: 256,
            height: 256,
            alt: r + " relic",
            src: "/images/minigame/relics/relic_".concat(r, ".webp"),
            className: "w-full object-cover",
          }),
        });
      }
    },
    26947: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => u });
      var s = l(41430),
        r = l(16890),
        a = l(23323),
        i = l(93551),
        n = l(3843),
        o = l(4124),
        c = l(12979);
      s.os.registerPlugin(
        r.L,
        a.Flip,
        i.ScrollTrigger,
        n.ScrollToPlugin,
        o.ScrollSmoother,
        c.SplitText,
      );
      let u = s.os;
    },
    43319: (e, t, l) => {
      "use strict";
      l.d(t, { P: () => i });
      var s = l(2183),
        r = l(36439),
        a = l(44190);
      let i = (e) => {
        let { playAnimation: t } = e,
          { rive: l, RiveComponent: i } = (0, a.useRive)({
            src: "/animations/medallion.riv",
            autoplay: !1,
            layout: new a.Layout({
              fit: a.Fit.Contain,
              alignment: a.Alignment.Center,
            }),
            useOffscreenRenderer: !1,
          });
        return (
          (0, r.useEffect)(() => {
            t
              ? null == l || l.play()
              : (null == l || l.reset(), null == l || l.pause());
          }, [t, l]),
          (0, s.jsx)(i, { className: "pointer-events-none h-full w-full" })
        );
      };
    },
    49711: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => d });
      var s = l(2183),
        r = l(36439),
        a = l(96006),
        i = l.n(a),
        n = l(15711),
        o = l(26947);
      let c = (0, r.forwardRef)((e, t) => {
        let { runeVal: l, setRuneVal: a } = e,
          n = [
            { name: "Rune 1", imageUrl: "/images/minigame/runes/rune_1.png" },
            { name: "Rune 2", imageUrl: "/images/minigame/runes/rune_2.png" },
            { name: "Rune 3", imageUrl: "/images/minigame/runes/rune_3.png" },
            { name: "Rune 4", imageUrl: "/images/minigame/runes/rune_4.png" },
            { name: "Rune 5", imageUrl: "/images/minigame/runes/rune_5.png" },
            { name: "Rune 6", imageUrl: "/images/minigame/runes/rune_6.png" },
          ],
          [c, u] = (0, r.useState)("up"),
          d = (0, r.useRef)(null);
        return (
          (0, r.useEffect)(() => {
            let e = o.A.context(() => {
              o.A.fromTo(
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
                  (u("up"), l === n.length - 1 ? a(0) : a(l + 1));
                },
                ref: t,
                type: "button",
                className:
                  "group relative flex aspect-[2] w-full cursor-pointer items-center justify-center rounded-xl hover:backdrop-brightness-75",
                children: [
                  (0, s.jsx)(i(), {
                    src: "/images/minigame/arrow_default.png",
                    alt: "up arrow",
                    width: 256,
                    height: 172,
                    className:
                      "pointer-events-none absolute left-0 right-0 mx-auto w-1/2",
                    priority: !0,
                  }),
                  (0, s.jsx)(i(), {
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
                children: n.map((e, t) =>
                  (0, s.jsx)(
                    "div",
                    {
                      className: "rune ".concat(
                        "rune-" + t,
                        " absolute flex h-full w-full items-center justify-center opacity-0",
                      ),
                      children: (0, s.jsx)(i(), {
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
                  (u("down"), 0 === l ? a(n.length - 1) : a(l - 1));
                },
                type: "button",
                className:
                  "group relative flex aspect-[2] w-full cursor-pointer items-center justify-center rounded-xl hover:backdrop-brightness-75",
                children: [
                  (0, s.jsx)(i(), {
                    src: "/images/minigame/arrow_default.png",
                    alt: "down arrow",
                    width: 256,
                    height: 172,
                    className:
                      "pointer-events-none absolute left-0 right-0 mx-auto w-1/2 rotate-180",
                    priority: !0,
                  }),
                  (0, s.jsx)(i(), {
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
      var u = l(95344);
      function d(e) {
        let {
            open: t,
            close: l,
            relicCollection: a,
            setSuccess: d,
            websiteSingleton: m,
          } = e,
          [h, g] = (0, r.useState)([0, 0, 0, 0, 0]),
          f = [
            { runeIndex: 5, relicClue: "crown" },
            { runeIndex: 2, relicClue: "horn" },
            { runeIndex: 4, relicClue: "mask" },
            { runeIndex: 3, relicClue: "helmet" },
            { runeIndex: 0, relicClue: "vase" },
          ],
          [x, p] = (0, r.useState)(!1),
          [v, w] = (0, r.useState)(!1),
          [b, j] = (0, r.useState)(!1),
          y = (0, r.useRef)(null);
        function N() {
          h.every((e, t) => e === f[t].runeIndex)
            ? (d(!0),
              l(),
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
              (d(!0),
              j(!1),
              l(),
              (0, u.sendGTMEvent)({ event: "puzzle_skip" }));
          }, [v]),
          (0, r.useEffect)(() => {
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
                            5 !== a.length &&
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
                              children: f.map(function (e, t) {
                                return a.includes(e.relicClue)
                                  ? (0, s.jsx)(
                                      "div",
                                      {
                                        className:
                                          "mx-[2%] flex aspect-square w-full items-center justify-center",
                                        children: (0, s.jsx)(i(), {
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
                                          (0, s.jsx)(i(), {
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
                                          (0, s.jsx)(i(), {
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
                                (0, s.jsx)(i(), {
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
                                        setRuneVal: (e) =>
                                          ((e, t) => {
                                            let l = [...h];
                                            ((l[e] = t), g(l));
                                          })(t, e),
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
                                  onClick: () => l(),
                                  children: m.minigamePuzzleCloseButtonText,
                                }),
                                (0, s.jsx)(n.A, {
                                  onClick: () => N(),
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
                    children: x
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
    51553: (e, t, l) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return l(60445);
        },
      ]);
    },
    60445: (e, t, l) => {
      "use strict";
      l.a(e, async (e, s) => {
        try {
          (l.r(t), l.d(t, { __N_SSG: () => n, default: () => o }));
          var r = l(2183),
            a = l(75923),
            i = e([a]);
          a = (i.then ? (await i)() : i)[0];
          var n = !0;
          function o(e) {
            let {
              articles: t,
              products: l,
              heroCards: s,
              rewards: i,
              websiteSingleton: n,
              navItems: o,
              footerSocialLinks: c,
              surveys: u,
              signUpBanner: d,
            } = e;
            return (0, r.jsx)(a.A, {
              articles: t,
              products: l,
              heroCards: s,
              rewards: i,
              websiteSingleton: n,
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
    66767: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => a });
      var s = l(2183),
        r = l(36439);
      function a(e) {
        let {
            onUnlock: t,
            overlayText: l,
            label: a = "Open Vault Door",
            id: i = "unlockSwitch",
          } = e,
          [n, o] = (0, r.useState)(0);
        return (
          (0, r.useEffect)(() => {
            n > 90 && (t(), o(0));
          }, [n, t]),
          (0, s.jsxs)("div", {
            className:
              "unlock-switch relative z-50 mx-auto w-64 cursor-pointer rounded-full border border-white/60 bg-black/90 p-2",
            children: [
              (0, s.jsx)("label", {
                htmlFor: i,
                className: "sr-only",
                "aria-label": a,
                children: a,
              }),
              (0, s.jsx)("input", {
                className:
                  "relative block h-12 w-full cursor-pointer appearance-none rounded-full bg-transparent",
                type: "range",
                value: n,
                max: 100,
                id: i,
                name: i,
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
    69472: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => h });
      var s = l(2183),
        r = l(36439),
        a = l(96006),
        i = l.n(a),
        n = l(26947),
        o = l(93551),
        c = l.n(o),
        u = l(24844),
        d = l(44190);
      let m = (e) => {
        let {
            crownHovered: t,
            crownCollected: l,
            helmetHovered: a,
            helmetCollected: i,
          } = e,
          { rive: n, RiveComponent: o } = (0, d.useRive)({
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
            n,
            "State Machine 1",
            "CrownShimmering",
          ),
          u = (0, d.useStateMachineInput)(n, "State Machine 1", "CrownAway"),
          m = (0, d.useStateMachineInput)(
            n,
            "State Machine 1",
            "HelmetShimmering",
          ),
          h = (0, d.useStateMachineInput)(n, "State Machine 1", "HelmetAway");
        return (
          (0, r.useEffect)(() => {
            c &&
              (l && u
                ? ((c.value = !1), (u.value = !0))
                : t
                  ? (c.value = !0)
                  : (c.value = !1));
          }, [t, l, c]),
          (0, r.useEffect)(() => {
            m &&
              (i && h
                ? ((m.value = !1), (h.value = !0))
                : a
                  ? (m.value = !0)
                  : (m.value = !1));
          }, [a, i, m]),
          (0, s.jsx)(o, { className: "pointer-events-none h-full w-full" })
        );
      };
      function h(e) {
        let { handleRelicClick: t, relicCollection: l, gameActive: a } = e,
          o = (0, r.useRef)(null),
          d = (0, r.useRef)(null),
          [h, g] = (0, r.useState)(!1),
          [f, x] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            let e = n.A.context(() => {
              let e = o.current;
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
          (0, r.useEffect)(() => {
            if (a) {
              let e = n.A.matchMedia();
              return (
                e.add("(max-width: 768px)", () => {
                  (c().create({
                    trigger: o.current,
                    start: "top 70%",
                    end: "top+=200px 70%",
                    onToggle: (e) => {
                      a && x(e.isActive);
                    },
                  }),
                    c().create({
                      trigger: o.current,
                      start: "bottom-=200px center",
                      end: "bottom center",
                      onToggle: (e) => {
                        a && g(e.isActive);
                      },
                    }));
                }),
                () => e.revert()
              );
            }
          }, [a]),
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
                      (0, s.jsx)(m, {
                        crownHovered: h,
                        crownCollected: l.includes("crown"),
                        helmetHovered: f,
                        helmetCollected: l.includes("helmet"),
                      }),
                      !l.includes("crown") &&
                        (0, s.jsx)("div", {
                          onMouseEnter: () => g(!0),
                          onMouseLeave: () => g(!1),
                          className: "".concat(
                            a ? "" : "pointer-events-none",
                            " absolute bottom-[17%] left-1/2 z-20 flex aspect-square w-[20%] -translate-x-1/2 items-center justify-center lg:bottom-[15%] lg:w-[15%]",
                          ),
                          children: (0, s.jsx)(u.A, {
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
                            a ? "" : "pointer-events-none",
                            " absolute left-[30%] top-[27%] z-20 flex aspect-square w-[20%] items-center justify-center lg:left-[36%] lg:top-[25%] lg:w-[15%]",
                          ),
                          children: (0, s.jsx)(u.A, {
                            onClick: t,
                            name: "helmet",
                            collected: !1,
                            zoomed: !1,
                          }),
                        }),
                    ],
                  }),
                  (0, s.jsx)(i(), {
                    width: 1440,
                    height: 1440,
                    alt: "Darkness Foreground",
                    src: "/images/darkness-scene_foreground.png",
                    className:
                      "pointer-events-none absolute right-0 top-0 z-20 h-full w-full object-cover",
                    priority: !0,
                  }),
                  (0, s.jsx)(i(), {
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
                children: (0, s.jsx)(i(), {
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
    72327: (e, t, l) => {
      "use strict";
      l.a(e, async (e, s) => {
        try {
          l.d(t, { A: () => g });
          var r = l(2183),
            a = l(96006),
            i = l.n(a),
            n = l(16739),
            o = l(36439),
            c = l(15711),
            u = l(11677),
            d = l.n(u),
            m = l(94536),
            h = e([n]);
          function g(e) {
            let {
                articles: t,
                headingTitle: l = "Related Articles",
                disableButton: s = !1,
                buttonTitle: a = "View All",
                isHome: u,
              } = e,
              [h, g] = (0, o.useState)(null);
            return (0, r.jsxs)("div", {
              className:
                "flex w-full flex-col items-stretch overflow-hidden py-8",
              children: [
                (0, r.jsxs)("div", {
                  className: "lg:pb-".concat(
                    u ? 12 : 16,
                    " flex w-full flex-col flex-wrap items-center justify-between px-8 pb-8 lg:flex-row lg:px-16",
                  ),
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
                              children: a,
                            }),
                          }),
                      ],
                    }),
                    t.length > 0 &&
                      (0, r.jsxs)("div", {
                        className: "hidden gap-x-2 lg:flex",
                        children: [
                          (0, r.jsx)(i(), {
                            width: 48,
                            height: 48,
                            alt: "Left arrow",
                            src: "/images/arrow-button-left.svg",
                            className: "mr-2 cursor-pointer",
                            onClick: () => (null == h ? void 0 : h.slidePrev()),
                          }),
                          (0, r.jsx)(i(), {
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
                        onSwiper: (e) => g(e),
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
    72871: (e, t, l) => {
      "use strict";
      l.a(e, async (e, s) => {
        try {
          l.d(t, { A: () => m });
          var r = l(2183),
            a = l(13544),
            i = l(72327),
            n = l(20204),
            o = l(99435),
            c = l(96006),
            u = l.n(c),
            d = e([i, n, o]);
          function m(e) {
            let { articles: t, products: l, websiteSingleton: s } = e,
              { isLoggedIn: c, minigameCompleted: d } = (0, o.u)();
            return (0, r.jsxs)(a.A, {
              className:
                "inline-flex flex-col items-start pt-0 text-black lg:pt-32",
              children: [
                c &&
                  d &&
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
                      children: (0, r.jsx)(i.A, {
                        articles: t,
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
          (([i, n, o] = d.then ? (await d)() : d), s());
        } catch (e) {
          s(e);
        }
      });
    },
    75923: (e, t, l) => {
      "use strict";
      l.a(e, async (e, s) => {
        try {
          l.d(t, { A: () => k });
          var r = l(2183),
            a = l(7760),
            i = l(98104),
            n = l(8331),
            o = l(69472),
            c = l(76226),
            u = l(75894),
            d = l(31026),
            m = l(72871),
            h = l(49711),
            g = l(2513),
            f = l(86e3),
            x = l(36439),
            p = l(23323),
            v = l(99435),
            w = l(26947),
            b = l(18652),
            j = l(77752),
            y = l(95344),
            N = e([a, i, u, m, v]);
          function k(e) {
            let {
                articles: t,
                products: l,
                heroCards: s,
                rewards: N,
                websiteSingleton: k,
                navItems: A,
                footerSocialLinks: S,
                surveys: z,
                signUpBanner: C,
              } = e,
              [L, E] = (0, x.useState)([]),
              [M, R] = (0, x.useState)(!1),
              [T, _] = (0, x.useState)(!1),
              [P, I] = (0, x.useState)(!1),
              { isLoggedIn: H, minigameCompleted: B } = (0, v.u)(),
              O = (0, b.useRouter)(),
              { addAlert: F } = (0, j.Z)();
            (0, x.useEffect)(() => {
              if (O.asPath.split("?").length <= 1) return;
              let e = new URLSearchParams(O.asPath.split("?")[1]);
              null !== e.get("verification-successful") &&
                F({
                  title: "Verification successful!",
                  children: "Thank you for verifying your email.",
                });
            }, [O.asPath]);
            let q = (e) => {
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
              [V, U] = (0, x.useState)(!1),
              D = (0, x.useRef)(null);
            ((0, x.useEffect)(() => {
              let e = w.A.matchMedia();
              return (
                e.add("(max-width: 768px)", () => {
                  D &&
                    D.current &&
                    w.A.to(".torch-container", {
                      opacity: 1,
                      duration: 0.3,
                      ease: "power2.inOut",
                      scrollTrigger: {
                        trigger: D.current,
                        start: "top center",
                        end: "bottom center",
                        onToggle: (e) => {
                          let { isActive: t } = e;
                          w.A.to(".torch-container", {
                            opacity: +!!t,
                            duration: 0.5,
                          });
                        },
                      },
                    });
                }),
                () => e.revert()
              );
            }, [D]),
              (0, x.useEffect)(() => {
                if (P) {
                  let e = w.A.matchMedia();
                  return (
                    e.add("(max-width: 768px)", () => {
                      D &&
                        D.current &&
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
            let [Y, G] = (0, x.useState)(!1),
              W = () => {
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
                        (0, r.jsx)(a.A, {
                          heroCards: s,
                          websiteSingleton: k,
                          navItems: A,
                          surveys: z,
                          signUpBanner: C,
                        }),
                        (0, r.jsx)("div", {
                          className: "bg-trueblack h-40 w-full lg:h-80",
                        }),
                        B
                          ? (0, r.jsx)(i.A, {
                              handleRelicClick: q,
                              relicCollection: L,
                              gameActive: V,
                              puzzleSolved: P,
                              onUnlock: W,
                              websiteSingleton: k,
                            })
                          : (0, r.jsxs)("div", {
                              ref: D,
                              children: [
                                (0, r.jsx)(i.A, {
                                  handleRelicClick: q,
                                  relicCollection: L,
                                  gameActive: V,
                                  puzzleSolved: P,
                                  onUnlock: W,
                                  websiteSingleton: k,
                                }),
                                (0, r.jsx)(n.A, {
                                  lit: V,
                                  onCampfireLit: function () {
                                    ((0, y.sendGTMEvent)({
                                      event: "puzzle_start",
                                    }),
                                      U(!0),
                                      w.A.to("#campfire-text", {
                                        opacity: 0,
                                        duration: 1,
                                        ease: "power2.inOut",
                                      }));
                                  },
                                  handleRelicClick: q,
                                  relicCollection: L,
                                  websiteSingleton: k,
                                }),
                                (0, r.jsx)(o.A, {
                                  handleRelicClick: q,
                                  relicCollection: L,
                                  gameActive: V,
                                }),
                              ],
                            }),
                      ],
                    }),
                    !H && (0, r.jsx)(c.A, { rewards: N, websiteSingleton: k }),
                    (0, r.jsx)(m.A, {
                      articles: t,
                      products: l,
                      websiteSingleton: k,
                    }),
                    (0, r.jsx)(d.A, { websiteSingleton: k }),
                  ],
                }),
                (0, r.jsx)(u.A, {
                  websiteSingleton: k,
                  navItems: A,
                  footerSocialLinks: S,
                }),
                !B &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(h.A, {
                        open: Y,
                        close: () => {
                          G(!1);
                        },
                        relicCollection: L,
                        setSuccess: I,
                        websiteSingleton: k,
                      }),
                      (0, r.jsx)(g.A, { enabled: V }),
                      (0, r.jsx)(f.A, {
                        gameArea: D,
                        collection: L,
                        activated: M && V && !P && !B,
                        setActivated: R,
                        open: T,
                        setOpen: (e) => _(e),
                        puzzleOpen: Y,
                        puzzleSolved: P || B,
                        websiteSingleton: k,
                      }),
                    ],
                  }),
              ],
            });
          }
          (([a, i, u, m, v] = N.then ? (await N)() : N), s());
        } catch (e) {
          s(e);
        }
      });
    },
    76226: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => u });
      var s = l(2183),
        r = l(7674),
        a = l(36439),
        i = l(96006),
        n = l.n(i),
        o = l(94734),
        c = l(26947);
      function u(e) {
        let { rewards: t, websiteSingleton: l } = e,
          i = (0, a.useRef)(null),
          u = (0, a.useRef)(null);
        return (
          (0, a.useEffect)(() => {
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
                    trigger: u.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.5,
                  },
                  yPercent: -20,
                }));
            }, [i]);
            return () => e.revert();
          }, []),
          (0, s.jsxs)("aside", {
            ref: i,
            "aria-label": "Society of Raiders sign-up",
            className: "relative z-40 w-full overflow-visible",
            children: [
              (0, s.jsxs)("div", {
                ref: u,
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
                        title: l.nonFooterCtaTitle,
                        textAlign: "text-left",
                        showSignUp: !0,
                        children: l.nonFooterCtaDescription,
                      }),
                    }),
                    (0, s.jsx)("div", {
                      className: "flex flex-col items-start lg:w-1/2 lg:px-12",
                      children: t.map((e) => {
                        var t, l, r, a;
                        return (0, s.jsxs)(
                          "div",
                          {
                            className:
                              "reward-item mb-16 flex w-full flex-col items-start",
                            children: [
                              (0, s.jsx)("div", {
                                className:
                                  "relative mb-6 flex aspect-[3/2] w-full",
                                children: (0, s.jsx)(n(), {
                                  src: "https://".concat(
                                    null !=
                                      (r =
                                        null == (l = e.image) ||
                                        null == (t = l.fields.file)
                                          ? void 0
                                          : t.url)
                                      ? r
                                      : "",
                                  ),
                                  alt: null != (a = e.description) ? a : "",
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
    86e3: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => n });
      var s = l(2183),
        r = l(36439),
        a = l(24844),
        i = l(26947);
      let n = (e) => {
        let {
            gameArea: t,
            collection: l,
            activated: n,
            setActivated: o,
            open: c,
            setOpen: u,
            puzzleOpen: d,
            puzzleSolved: m,
            websiteSingleton: h,
          } = e,
          g = (0, r.useRef)(null),
          [f, x] = (0, r.useState)(""),
          [p, v] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            if (g.current) {
              let e = n ? g.current.clientHeight - 72 : g.current.clientHeight;
              i.A.to(g.current, {
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
          (0, r.useEffect)(() => {
            if (g.current) {
              let e = n ? g.current.clientHeight - 72 : g.current.clientHeight;
              c && n
                ? i.A.to(g.current, {
                    y: 0,
                    ease: "power2.inOut",
                    duration: 0.3,
                  })
                : i.A.to(g.current, {
                    y: e,
                    ease: "power2.inOut",
                    duration: 0.3,
                  });
            }
          }, [c, n]),
          (0, r.useEffect)(() => {
            5 === l.length && v(!0);
          }, [l]),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)("div", {
                ref: g,
                style: { transform: "translateY(100%)" },
                className: "".concat(
                  m ? "opacity-0" : "",
                  " pointer-events-none fixed bottom-0 left-0 right-0 z-[101] flex flex-col items-center transition-opacity duration-500",
                ),
                children: [
                  (0, s.jsxs)("div", {
                    onClick: function () {
                      p
                        ? i.A.to(window, {
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
                        a.A,
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
                  children: (0, s.jsx)(a.A, {
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
    89718: (e, t, l) => {
      "use strict";
      l.d(t, { k: () => i });
      var s = l(2183),
        r = l(44190),
        a = l(36439);
      let i = (e) => {
        let {
            vaseHovered: t,
            vaseCollected: l,
            maskHovered: i,
            maskCollected: n,
            doorOpen: o,
          } = e,
          { rive: c, RiveComponent: u } = (0, r.useRive)({
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
          d = (0, r.useStateMachineInput)(c, "State Machine 1", "DoorOpen"),
          m = (0, r.useStateMachineInput)(
            c,
            "State Machine 1",
            "VaseShimmering",
          ),
          h = (0, r.useStateMachineInput)(c, "State Machine 1", "VaseAway"),
          g = (0, r.useStateMachineInput)(
            c,
            "State Machine 1",
            "MaskShimmering",
          ),
          f = (0, r.useStateMachineInput)(c, "State Machine 1", "MaskAway");
        return (
          (0, a.useEffect)(() => {
            o && d && (d.value = !0);
          }, [o, d]),
          (0, a.useEffect)(() => {
            m &&
              (l && h
                ? ((m.value = !1), (h.value = !0))
                : t
                  ? (m.value = !0)
                  : (m.value = !1));
          }, [t, l, m]),
          (0, a.useEffect)(() => {
            g &&
              (n && f
                ? ((g.value = !1), (f.value = !0))
                : i
                  ? (g.value = !0)
                  : (g.value = !1));
          }, [i, n, g]),
          (0, s.jsx)(u, { className: "pointer-events-none h-full w-full" })
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
    98104: (e, t, l) => {
      "use strict";
      l.a(e, async (e, s) => {
        try {
          l.d(t, { A: () => y });
          var r = l(2183),
            a = l(36439),
            i = l(96006),
            n = l.n(i),
            o = l(24844),
            c = l(94734),
            u = l(89718),
            d = l(43319),
            m = l(26947),
            h = l(93551),
            g = l.n(h),
            f = l(11677),
            x = l.n(f),
            p = l(15711),
            v = l(66767),
            w = l(99435),
            b = l(55109),
            j = e([w, b]);
          function y(e) {
            let {
                handleRelicClick: t,
                relicCollection: l,
                gameActive: s,
                puzzleSolved: i,
                onUnlock: h,
                websiteSingleton: f,
              } = e,
              [j, y] = (0, a.useState)(!1),
              [N, k] = (0, a.useState)(!1),
              { isLoggedIn: A } = (0, w.u)(),
              { minigameCompleted: S, setMinigameCompleted: z } = (0, w.u)(),
              C = (0, a.useRef)(null),
              L = (0, a.useRef)(null),
              E = (0, a.useRef)(null),
              M = (0, a.useRef)(null);
            ((0, a.useEffect)(() => {
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
                  g().create({
                    trigger: C.current,
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
              (0, a.useEffect)(() => {
                if (s) {
                  let e = m.A.matchMedia();
                  return (
                    e.add("(max-width: 768px)", () => {
                      g().create({
                        trigger: C.current,
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
              (0, a.useEffect)(() => {
                (S || i) &&
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
              }, [i]));
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
                        (S || i) &&
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
                                  ? f.minigameSolvedLoggedInPromptHeadline ||
                                    "Stay Up to Date"
                                  : f.minigameCorrectSolutionTitle,
                            }),
                            (0, r.jsx)("p", {
                              className: "mb-4 text-center lg:text-2xl",
                              children:
                                S && A
                                  ? f.minigameSolvedLoggedInPromptDescription ||
                                    "Keep an eye on your dashboard for breaking news, rewards, and exclusive content."
                                  : f.minigameCorrectSolutionSubtitle,
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
                                  children: (0, r.jsx)(x(), {
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
                                        : f.minigameSolvedLoggedInContinueButtonText,
                                    }),
                                  }),
                                })
                              : (0, r.jsxs)(r.Fragment, {
                                  children: [
                                    (0, r.jsxs)("div", {
                                      className:
                                        "mb-4 flex justify-center gap-2",
                                      children: [
                                        (0, r.jsx)(x(), {
                                          href: "/registration",
                                          children: (0, r.jsx)(p.A, {
                                            variant: "darkBackground",
                                            onClick: R,
                                            children:
                                              f.minigameSolvedLoggedOutRegisterButtonText,
                                          }),
                                        }),
                                        (0, r.jsx)(x(), {
                                          href: "/login",
                                          children: (0, r.jsx)(p.A, {
                                            variant: "darkBackground",
                                            onClick: R,
                                            children:
                                              f.minigameSolvedLoggedOutLoginButtonText,
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, r.jsx)("p", {
                                      className: "text-center lg:text-lg",
                                      children: f.minigameSolvedLoggedOutCta,
                                    }),
                                  ],
                                }),
                          ],
                        }),
                    }),
                    !i &&
                      !S &&
                      (0, r.jsx)("div", {
                        className:
                          "absolute bottom-[25%] left-0 right-0 mx-auto",
                        children: (0, r.jsx)(v.A, {
                          onUnlock: h,
                          overlayText: f.minigameSliderText,
                          id: "vaultDoorSlider",
                        }),
                      }),
                    (0, r.jsxs)("div", {
                      className:
                        "tomb-door-background absolute bottom-0 left-0 z-40 h-full w-full",
                      children: [
                        (0, r.jsx)(u.k, {
                          vaseHovered: j,
                          vaseCollected: l.includes("vase"),
                          maskHovered: N,
                          maskCollected: l.includes("mask"),
                          doorOpen: S || i,
                        }),
                        !l.includes("vase") &&
                          (0, r.jsx)("div", {
                            onMouseEnter: () => y(!0),
                            onMouseLeave: () => y(!1),
                            className: "".concat(
                              s ? "" : "pointer-events-none",
                              " absolute bottom-[13%] left-[6%] z-20 flex aspect-square w-[12%] items-center justify-center lg:bottom-[10.5%] lg:left-[23.5%]",
                            ),
                            children: (0, r.jsx)(o.A, {
                              onClick: t,
                              name: "vase",
                              collected: !1,
                              zoomed: !1,
                            }),
                          }),
                        !l.includes("mask") &&
                          (0, r.jsx)("div", {
                            onMouseEnter: () => k(!0),
                            onMouseLeave: () => k(!1),
                            className: "".concat(
                              s ? "" : "pointer-events-none",
                              " absolute bottom-[9%] right-[8%] z-20 flex aspect-square w-[12%] items-center justify-center lg:bottom-[7%] lg:right-[25%]",
                            ),
                            children: (0, r.jsx)(o.A, {
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
  },
  (e) => {
    (e.O(
      0,
      [
        9950, 8762, 6006, 1433, 1329, 1089, 3492, 4971, 5216, 2446, 7137, 636,
        6593, 8792,
      ],
      () => e((e.s = 51553)),
    ),
      (_N_E = e.O()));
  },
]);
