(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6122],
  {
    392: (e, t, s) => {
      "use strict";
      s.a(e, async (e, l) => {
        try {
          (s.r(t), s.d(t, { __N_SSG: () => h, default: () => g }));
          var r = s(2183),
            a = s(74474),
            n = s(36439),
            i = s(16890),
            o = s(27823),
            c = s(49980),
            d = s(20162),
            u = s(67581),
            m = s(76863),
            f = s(80707),
            p = s.n(f),
            x = e([c, d, u]);
          [c, d, u] = x.then ? (await x)() : x;
          var h = !0;
          function g({
            challengeTomb: e,
            websiteSingleton: t,
            navItems: s,
            footerSocialLinks: l,
            signUpBanner: f,
          }) {
            let x = (0, n.useRef)(null),
              [h, b] = (0, n.useState)(0),
              y = (0, n.useRef)(0),
              [j, w] = (0, n.useState)([]),
              v = (0, n.useRef)(!1);
            ((0, n.useEffect)(() => {
              let t = sessionStorage.getItem("pendingPuzzleSolved");
              if (t && e?.rooms)
                try {
                  let { roomId: s } = JSON.parse(t),
                    l = e.rooms.findIndex((e) => e?.sys.id === s);
                  -1 !== l && ((v.current = !0), b(l));
                } catch (e) {
                  console.error("Error parsing pending puzzle data:", e);
                }
            }, [e]),
              (0, n.useEffect)(() => {
                async function t() {
                  if (e?.rooms)
                    try {
                      let t = await fetch("/api/puzzle/completed-rooms"),
                        s = await t.json(),
                        l = s.data?.completedRoomIds || [];
                      if ((w(l), v.current || 0 === l.length)) return;
                      let r = -1;
                      for (let t = 0; t < e.rooms.length; t++) {
                        let s = e.rooms[t];
                        if (s && !l.includes(s.sys.id)) {
                          r = t;
                          break;
                        }
                      }
                      if (-1 !== r) b(r);
                      else {
                        let t = e.rooms.length - 1;
                        b(t);
                      }
                    } catch (e) {
                      console.error("Error fetching completed rooms:", e);
                    }
                }
                sessionStorage.getItem("pendingPuzzleSolved") || t();
              }, [e]));
            let N = () => {
              o.A.to(`.room-container-${h}`, {
                opacity: 0,
                duration: 0.4,
                ease: "power2.inOut",
                onComplete: () => {
                  e?.rooms[h + 1] ? b(h + 1) : b(0);
                },
              });
            };
            return (
              (0, i.L)(
                () => {
                  o.A.set(`.room-container-${h}`, {
                    display: "flex",
                    opacity: 1,
                  });
                },
                { scope: x },
              ),
              (0, i.L)(
                () => {
                  y.current !== h &&
                    (o.A.timeline()
                      .to(`.room-container-${y.current}`, {
                        opacity: 0,
                        duration: 0.4,
                        ease: "power2.inOut",
                      })
                      .set(`.room-container-${y.current}`, { display: "none" })
                      .set(`.room-container-${h}`, { display: "flex" })
                      .to(`.room-container-${h}`, {
                        opacity: 1,
                        duration: 0.4,
                        ease: "power2.inOut",
                      })
                      .play(),
                    (y.current = h));
                },
                { scope: x, dependencies: [h] },
              ),
              (0, r.jsxs)("div", {
                ref: x,
                className: "bg-trueblack relative",
                children: [
                  (0, r.jsx)(a.A, {
                    description:
                      "Enter the Tomb Raider Challenge Tomb. Solve puzzles, decrypt ciphers, collect hidden relics, and unlock exclusive rewards in this interactive fan experience.",
                  }),
                  (0, r.jsx)(c.Ay, { navItems: s, signUpBanner: f }),
                  (0, r.jsxs)("div", {
                    className:
                      "relative mt-20 flex h-[calc(100svh-5rem)] flex-col items-center overflow-hidden",
                    children: [
                      (0, r.jsx)("div", {
                        className:
                          "from-trueblack absolute inset-0 z-10 h-60 w-full bg-gradient-to-b",
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "from-trueblack absolute bottom-0 left-0 z-10 h-60 w-full bg-gradient-to-t",
                      }),
                      (0, r.jsxs)("div", {
                        className: "flex w-full flex-1 flex-col",
                        children: [
                          e?.rooms &&
                            (0, r.jsx)(m.A, {
                              rooms: p().compact(e.rooms.map((e) => e?.fields)),
                              activeRoomIndex: h,
                              onRoomClick: (t) => {
                                if (t === h || !e?.rooms) return;
                                let s = -1;
                                for (let t = 0; t < e.rooms.length; t++) {
                                  let l = e.rooms[t];
                                  if (
                                    l?.fields &&
                                    (!l.fields.isUnlocked ||
                                      !j.includes(l.sys.id))
                                  ) {
                                    s = t;
                                    break;
                                  }
                                }
                                (-1 !== s && t > s) ||
                                  o.A.to(`.room-container-${h}`, {
                                    opacity: 0,
                                    duration: 0.4,
                                    ease: "power2.inOut",
                                    onComplete: () => {
                                      b(t);
                                    },
                                  });
                              },
                              firstLockedIndex: e.rooms.findIndex(
                                (e) => e?.fields && !e.fields.isUnlocked,
                              ),
                              completedRoomIds: j,
                              roomIds: e.rooms.map((e) => e?.sys.id || ""),
                            }),
                          e?.rooms.map((e, t) =>
                            (0, r.jsx)(
                              "div",
                              {
                                className: `room-container-${t} hidden h-full flex-col opacity-0`,
                                children:
                                  e &&
                                  h === t &&
                                  (0, r.jsx)(
                                    u.A,
                                    {
                                      room: e?.fields,
                                      roomId: e.sys.id,
                                      activeRoomIndex: h,
                                      moveToNextRoom: N,
                                      onRoomCompleted: (e) => {
                                        w((t) => [...t, e]);
                                      },
                                    },
                                    t,
                                  ),
                              },
                              t,
                            ),
                          ),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsx)(d.A, {
                    websiteSingleton: t,
                    navItems: s,
                    footerSocialLinks: l,
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
    6365: (e, t, s) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/challenge-tomb",
        function () {
          return s(392);
        },
      ]);
    },
    7219: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => a });
      var l = s(2183),
        r = s(36439);
      function a({
        onUnlock: e,
        overlayText: t,
        label: s = "Open Vault Door",
        id: n = "unlockSwitch",
      }) {
        let [i, o] = (0, r.useState)(0);
        return (
          (0, r.useEffect)(() => {
            i > 90 && (e(), o(0));
          }, [i, e]),
          (0, l.jsxs)("div", {
            className:
              "unlock-switch relative z-50 mx-auto w-64 cursor-pointer rounded-full border border-white/60 bg-black/90 p-2",
            children: [
              (0, l.jsx)("label", {
                htmlFor: n,
                className: "sr-only",
                "aria-label": s,
                children: s,
              }),
              (0, l.jsx)("input", {
                className:
                  "relative block h-12 w-full cursor-pointer appearance-none rounded-full bg-transparent",
                type: "range",
                value: i,
                max: 100,
                id: n,
                name: n,
                onChange: (e) => o(Number(e.target.value)),
              }),
              (0, l.jsx)("span", {
                className:
                  "pointer-events-none absolute left-16 top-1/2 w-[calc(100%-4.5rem)] -translate-y-1/2 text-center",
                children: t,
              }),
            ],
          })
        );
      }
    },
    12317: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => n });
      var l = s(2183),
        r = s(46728),
        a = s.n(r);
      let n = ({ href: e, children: t, className: s, ...r }) =>
        "string" == typeof e && e.startsWith("http")
          ? (0, l.jsx)("a", {
              href: e,
              target: "_blank",
              rel: "noopener noreferrer",
              className: s,
              ...r,
              children: t,
            })
          : (0, l.jsx)(a(), { className: s, href: e, ...r, children: t });
    },
    15189: (e, t, s) => {
      "use strict";
      s.a(e, async (e, l) => {
        try {
          s.d(t, { A: () => m });
          var r = s(2183),
            a = s(36439),
            n = s(15013),
            i = s.n(n),
            o = s(27823),
            c = s(92642),
            d = e([c]);
          c = (d.then ? (await d)() : d)[0];
          let u = (0, a.forwardRef)(
            (
              { selectedGlyph: e, glyphOptions: t, updatePuzzleAnswer: s },
              l,
            ) => {
              let [n, d] = (0, a.useState)("up"),
                [u, m] = (0, a.useState)(() => {
                  let s = t.findIndex((t) => t.sys.id === e);
                  return s >= 0 ? s : 0;
                }),
                f = (0, a.useRef)(null);
              return (
                (0, a.useEffect)(() => {
                  let s = t.findIndex((t) => t.sys.id === e);
                  s >= 0 && m(s);
                }, [e, t]),
                (0, a.useEffect)(() => {
                  let e = o.A.context(() => {
                    o.A.fromTo(
                      ".glyph-" + u,
                      {
                        y: "up" === n ? 10 : -10,
                        opacity: 0,
                        overwrite: "auto",
                      },
                      { y: 0, opacity: 1 },
                    );
                  }, f);
                  return () => e.revert();
                }, [u]),
                (0, r.jsxs)("div", {
                  ref: f,
                  className: "flex w-1/4 flex-col justify-center",
                  children: [
                    (0, r.jsx)("button", {
                      onMouseDown: function () {
                        (d("up"),
                          u === t.length - 1
                            ? (m(0), s(t[0].sys.id))
                            : (m(u + 1), s(t[u + 1].sys.id)));
                      },
                      ref: l,
                      type: "button",
                      className:
                        "group relative flex aspect-[2] w-full cursor-pointer items-center justify-center rounded-xl backdrop-brightness-75 hover:backdrop-brightness-100",
                    }),
                    (0, r.jsx)("div", {
                      className:
                        "relative flex aspect-[6/5] w-full items-center justify-center",
                      children: t.map((e, t) =>
                        (0, r.jsx)(
                          "div",
                          {
                            className: `glyph ${"glyph-" + t} absolute flex h-full w-full items-center justify-center p-2 opacity-0`,
                            children: (0, r.jsx)(i(), {
                              src: (() => {
                                if (
                                  !e.fields.image ||
                                  !("fields" in e.fields.image)
                                )
                                  return "";
                                let t = e.fields.image,
                                  s = t.fields?.file;
                                return s && "object" == typeof s && "url" in s
                                  ? (0, c._c)(s.url)
                                  : "";
                              })(),
                              alt: (() => {
                                if (
                                  !e.fields.image ||
                                  !("fields" in e.fields.image)
                                )
                                  return "";
                                let t = e.fields.image,
                                  s = t.fields?.description;
                                return "string" == typeof s ? s : "";
                              })(),
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
                    (0, r.jsx)("button", {
                      onMouseDown: function () {
                        (d("down"),
                          0 === u
                            ? (m(t.length - 1), s(t[t.length - 1].sys.id))
                            : (m(u - 1), s(t[u - 1].sys.id)));
                      },
                      type: "button",
                      className:
                        "group relative flex aspect-[2] w-full cursor-pointer items-center justify-center rounded-xl backdrop-brightness-75 hover:backdrop-brightness-100",
                    }),
                  ],
                })
              );
            },
          );
          u.displayName = "GlyphSelector";
          let m = u;
          l();
        } catch (e) {
          l(e);
        }
      });
    },
    20162: (e, t, s) => {
      "use strict";
      s.a(e, async (e, l) => {
        try {
          s.d(t, { A: () => x });
          var r = s(2183),
            a = s(15013),
            n = s.n(a),
            i = s(46728),
            o = s.n(i),
            c = s(9751),
            d = s(12317),
            u = s(61065),
            m = s(92642),
            f = s(95783),
            p = e([c, m, f]);
          function x({
            websiteSingleton: e,
            navItems: t,
            footerSocialLinks: s,
          }) {
            let { isLoggedIn: l, shopifyUrl: a } = (0, c.u)(),
              i = t.filter(
                (e) => e.showInFooter && !(l && e.hideForLoggedInUsers),
              ),
              p = t.filter(
                (e) => e.showInSubFooter && !(l && e.hideForLoggedInUsers),
              );
            return (0, r.jsxs)("footer", {
              className: "relative w-full bg-black px-8 text-white lg:px-32",
              children: [
                (0, r.jsx)(u.A, { data: (0, f._8)(e, s) }),
                (0, r.jsx)(u.A, { data: (0, f.OU)() }),
                (0, r.jsxs)("div", {
                  className:
                    "flex flex-col items-center justify-center space-y-16 pt-16 pb-16 lg:flex-row lg:items-stretch lg:justify-between lg:space-y-0 lg:pt-32",
                  children: [
                    (0, r.jsx)("div", {
                      children: (0, r.jsx)(n(), {
                        src: (0, m._c)(e.footerLogo?.fields.file?.url),
                        width: 248,
                        height: 248,
                        alt: (0, m._c)(e.footerLogo?.fields.description),
                        className: "w-40",
                      }),
                    }),
                    (0, r.jsxs)("nav", {
                      "aria-label": "Footer",
                      className:
                        "text-darkgray-500 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-lg",
                      children: [
                        i.map((e) => {
                          let t = e.link;
                          return (
                            e.shouldReplaceWithGeneratedShopLink &&
                              a &&
                              (t = a),
                            (0, r.jsx)(
                              o(),
                              { href: t, children: e.name },
                              e.link + e.name,
                            )
                          );
                        }),
                        (0, r.jsx)("span", {
                          id: "accessibilityWidget",
                          className: "cursor-pointer",
                          children: "Accessibility",
                        }),
                        (0, r.jsx)("a", {
                          href: "#",
                          className: "cursor-pointer",
                          onClick: (e) => {
                            (e.preventDefault(),
                              window.__ucCmp?.showSecondLayer());
                          },
                          children:
                            "Do Not Sell or Share My Personal Information",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className:
                    "flex flex-col items-center justify-center space-y-16 pb-16 lg:flex-row lg:items-stretch lg:justify-between lg:space-y-0",
                  children: [
                    (0, r.jsx)("div", {
                      className: "text-darkgray-500 text-center",
                      children: e.footerCopyright,
                    }),
                    (0, r.jsx)("div", {
                      className: "flex items-center space-x-4 text-white",
                      children: s.map((e) =>
                        (0, r.jsx)(
                          d.A,
                          {
                            href: e.link,
                            children: (0, r.jsx)(n(), {
                              src: (0, m._c)(e.icon?.fields.file?.url),
                              alt: e.icon?.fields.description ?? "",
                              width: 20,
                              height: 20,
                            }),
                          },
                          e.link,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, r.jsx)("div", { className: "h-px bg-gray-500" }),
                (0, r.jsxs)("div", {
                  className:
                    "flew-col flex flex-col items-start justify-start gap-x-10 gap-y-10 py-12 text-gray-300 md:justify-between 2xl:flex-row",
                  children: [
                    (0, r.jsx)("p", {
                      className:
                        "text-darkgray-300 max-w-250 text-center text-sm lg:text-left",
                      children: e.footerLegalNotice,
                    }),
                    (0, r.jsx)("nav", {
                      "aria-label": "Legal",
                      className:
                        "text-darkgray-500 flex w-full flex-wrap items-center justify-center gap-x-10 gap-y-2 md:flex-row md:gap-x-10 md:gap-y-0 lg:w-auto lg:justify-start",
                      children: p.map((e) =>
                        (0, r.jsx)(
                          "a",
                          { href: e.link, children: e.name },
                          e.link + e.name,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            });
          }
          (([c, m, f] = p.then ? (await p)() : p), l());
        } catch (e) {
          l(e);
        }
      });
    },
    27823: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => d });
      var l = s(41430),
        r = s(16890),
        a = s(23323),
        n = s(93551),
        i = s(3843),
        o = s(4124),
        c = s(12979);
      l.os.registerPlugin(
        r.L,
        a.Flip,
        n.ScrollTrigger,
        i.ScrollToPlugin,
        o.ScrollSmoother,
        c.SplitText,
      );
      let d = l.os;
    },
    58432: (e, t, s) => {
      "use strict";
      s.a(e, async (e, l) => {
        try {
          s.d(t, { A: () => x });
          var r = s(2183),
            a = s(36439),
            n = s(15013),
            i = s.n(n),
            o = s(64171),
            c = s(15189),
            d = s(27823),
            u = s(92642),
            m = s(26330),
            f = s(9751),
            p = e([c, u, f]);
          function x({
            open: e,
            glyphOptions: t,
            roomId: s,
            puzzleHeadline: l,
            puzzleDescription: n,
            puzzleBackground: p,
            puzzleSolveButtonText: h,
            puzzleBackButtonText: g,
            isLoggedIn: b,
            close: y,
            solvePuzzle: j,
            isRoomCompleted: w,
            viewReward: v,
          }) {
            let { userData: N } = (0, f.u)(),
              [z, k] = (0, a.useState)(() =>
                t.length > 0
                  ? [t[0].sys.id, t[0].sys.id, t[0].sys.id, t[0].sys.id]
                  : ["", "", "", ""],
              ),
              [S, I] = (0, a.useState)(!1),
              [R, _] = (0, a.useState)(!1),
              A = (0, a.useRef)(null);
            async function L() {
              (_(!0), I(!1));
              try {
                let e = await fetch("/api/puzzle/validate-solution", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ roomId: s, answer: z }),
                  }),
                  t = await e.json();
                if (!e.ok) throw Error("Validation failed");
                t.data?.isCorrect
                  ? (I(!1),
                    b ||
                      sessionStorage.setItem(
                        "pendingPuzzleSolved",
                        JSON.stringify({ roomId: s, timestamp: Date.now() }),
                      ),
                    j(t.data.rewardImageUrl),
                    y(),
                    (0, m.sendGTMEvent)({
                      event: "challenge_solve",
                      playFabId: N?.accountInfo?.playFabId || null,
                      roomId: s,
                      puzzleId: s,
                    }))
                  : (I(!0),
                    (0, m.sendGTMEvent)({
                      event: "challenge_incorrect_answer",
                      playFabId: N?.accountInfo?.playFabId || null,
                      roomId: s,
                      puzzleId: s,
                    }),
                    d.A.timeline()
                      .to(".error-message", { x: 10, duration: 0.1 })
                      .to(".error-message", { x: -10, duration: 0.1 })
                      .to(".error-message", { x: 10, duration: 0.1 })
                      .to(".error-message", { x: -10, duration: 0.1 })
                      .to(".error-message", { x: 0, duration: 0.1 })
                      .play());
              } catch (e) {
                (console.error("Error validating puzzle solution:", e), I(!0));
              } finally {
                _(!1);
              }
            }
            return ((0, a.useEffect)(
              () => (
                e
                  ? (document.body.classList.add("overflow-hidden"),
                    A.current && A.current.focus(),
                    (0, m.sendGTMEvent)({
                      event: "challenge_start",
                      playFabId: N?.accountInfo?.playFabId || null,
                      roomId: s,
                      puzzleId: s,
                    }))
                  : (I(!1), document.body.classList.remove("overflow-hidden")),
                () => {
                  document.body.classList.remove("overflow-hidden");
                }
              ),
              [e, s, N?.accountInfo?.playFabId],
            ),
            e)
              ? (0, r.jsxs)("div", {
                  children: [
                    (0, r.jsx)("button", {
                      onClick: () => {
                        ((0, m.sendGTMEvent)({
                          event: "challenge_close",
                          playFabId: N?.accountInfo?.playFabId || null,
                          roomId: s,
                          puzzleId: s,
                        }),
                          y());
                      },
                      className:
                        "fixed right-4 top-4 z-[102] flex size-16 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 lg:right-12 lg:top-12",
                      "aria-label": "Close",
                      children: (0, r.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "size-8",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        strokeWidth: 2,
                        children: (0, r.jsx)("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          d: "M6 18L18 6M6 6l12 12",
                        }),
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className:
                        "fixed inset-0 z-[101] h-screen w-screen overflow-x-hidden bg-black/40 backdrop-blur-md",
                      children: (0, r.jsxs)("div", {
                        className:
                          "relative mx-auto flex h-full flex-col items-center justify-center overflow-y-auto overflow-x-hidden p-4",
                        children: [
                          (0, r.jsxs)("div", {
                            className:
                              "flex w-full max-w-4xl flex-col items-center justify-center",
                            children: [
                              (0, r.jsx)("h4", {
                                className:
                                  "mb-3 text-center text-2xl font-bold",
                                children: l,
                              }),
                              (0, r.jsx)("p", {
                                className: "mb-12 text-center text-sm md:mb-20",
                                children: n,
                              }),
                              (0, r.jsxs)("div", {
                                className: "relative w-full",
                                children: [
                                  p?.fields.file?.url &&
                                    (0, r.jsx)(i(), {
                                      width: "1440",
                                      height: "720",
                                      alt:
                                        "string" == typeof p.fields.description
                                          ? p.fields.description
                                          : "A puzzle background",
                                      src: (0, u._c)(
                                        "string" == typeof p.fields.file?.url
                                          ? p.fields.file.url
                                          : void 0,
                                      ),
                                      className:
                                        "absolute left-1/2 top-1/2 -z-10 w-full -translate-x-1/2 -translate-y-1/2 object-contain",
                                      priority: !0,
                                    }),
                                  (0, r.jsx)("div", {
                                    className:
                                      "flex w-full pl-[3.5%] pr-[4.15%]",
                                    children: z.map(function (e, s) {
                                      return (0, r.jsx)(
                                        c.A,
                                        {
                                          ref: 0 === s ? A : null,
                                          selectedGlyph: z[s],
                                          updatePuzzleAnswer: (e) =>
                                            k((t) => {
                                              let l = [...t];
                                              return ((l[s] = e), l);
                                            }),
                                          glyphOptions: t,
                                        },
                                        s,
                                      );
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, r.jsx)("div", {
                            className:
                              "mt-12 flex flex-col items-center justify-center md:mt-20",
                            children: w
                              ? (0, r.jsxs)("div", {
                                  className:
                                    "mb-4 flex flex-col items-center gap-6",
                                  children: [
                                    (0, r.jsx)("p", {
                                      className:
                                        "text-center text-lg font-semibold",
                                      children:
                                        "You have already solved this puzzle.",
                                    }),
                                    (0, r.jsx)(o.A, {
                                      onClick: () => {
                                        (y(), v());
                                      },
                                      children: "View Reward",
                                    }),
                                    (0, r.jsx)("span", {
                                      className: "cursor-pointer underline",
                                      onClick: () => y(),
                                      children: g,
                                    }),
                                  ],
                                })
                              : (0, r.jsxs)(r.Fragment, {
                                  children: [
                                    (0, r.jsxs)("div", {
                                      className:
                                        "mb-4 flex flex-col items-center gap-6",
                                      children: [
                                        (0, r.jsx)(o.A, {
                                          onClick: () => L(),
                                          disabled: R,
                                          children: R ? "Checking..." : h,
                                        }),
                                        (0, r.jsx)("span", {
                                          className: "cursor-pointer underline",
                                          onClick: () => y(),
                                          children: g,
                                        }),
                                      ],
                                    }),
                                    (0, r.jsx)("p", {
                                      className: `${!S ? "invisible " : ""} error-message text-center`,
                                      children:
                                        "Your answer is incorrect. Try again.",
                                    }),
                                  ],
                                }),
                          }),
                        ],
                      }),
                    }),
                  ],
                })
              : null;
          }
          (([c, u, f] = p.then ? (await p)() : p), l());
        } catch (e) {
          l(e);
        }
      });
    },
    61065: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => n });
      var l = s(2183),
        r = s(46402),
        a = s.n(r);
      function n({ data: e }) {
        return (0, l.jsx)(a(), {
          children: (0, l.jsx)("script", {
            type: "application/ld+json",
            dangerouslySetInnerHTML: { __html: JSON.stringify(e) },
          }),
        });
      }
    },
    67581: (e, t, s) => {
      "use strict";
      s.a(e, async (e, l) => {
        try {
          s.d(t, { A: () => w });
          var r = s(2183),
            a = s(36439),
            n = s(15013),
            i = s.n(n),
            o = s(31153),
            c = s(92642),
            d = s(99435),
            u = s(58432),
            m = s(64171),
            f = s(7219),
            p = s(16890),
            x = s(27823),
            h = s(9751),
            g = s(43948),
            b = s(72990),
            y = s(26330),
            j = e([c, u, h]);
          function w({
            room: e,
            roomId: t,
            activeRoomIndex: s,
            moveToNextRoom: l,
            onRoomCompleted: n,
          }) {
            let j = (0, o.useRouter)(),
              { isLoggedIn: v, userData: N } = (0, h.u)(),
              z = e.tombDoor?.fields,
              k = z?.closedImage,
              S = z?.openImage,
              I = z?.title ?? "Closed Door",
              R = z?.title ?? "Open Door",
              _ = e.laraCroft?.fields,
              A = _?.image,
              L = e.laraShift,
              C = "";
            "Left" === L
              ? (C = "-translate-x-1/2")
              : "Right" === L && (C = "translate-x-1/2");
            let T = e.puzzleBackground?.fields,
              O = e.showCountdown,
              D = e.countdownMessage ?? "",
              [E, P] = (0, a.useState)(!1),
              [$, F] = (0, a.useState)(!1),
              [M, B] = (0, a.useState)(),
              [U, W] = (0, a.useState)(!1),
              G = e.isUnlocked,
              [H, J] = (0, a.useState)(!1),
              V = (0, a.useMemo)(
                () => (G ? e.glyphOptions.filter((e) => null != e) : []),
                [G, e.glyphOptions],
              ),
              q = (0, a.useRef)(null),
              Q = (0, a.useRef)(null),
              X = (0, a.useRef)(null),
              Y = (0, a.useRef)(null),
              K = (0, a.useRef)(null),
              Z = (0, a.useRef)(null),
              ee = (0, a.useRef)(null),
              et = (0, a.useRef)(null),
              es = (0, a.useRef)(null),
              el = (0, a.useRef)(null),
              er = (0, a.useRef)(null);
            return ((0, p.L)(
              () => {
                es.current &&
                  el.current &&
                  x.A.fromTo(
                    [es.current, el.current],
                    { opacity: 0 },
                    { opacity: 1, stagger: 0.5, delay: 0.8, overwrite: !0 },
                  );
              },
              { scope: q, dependencies: [s] },
            ),
            (0, p.L)(
              () => {
                x.A.timeline({
                  scrollTrigger: {
                    trigger: q.current,
                    start: "top bottom",
                    once: !0,
                    invalidateOnRefresh: !0,
                  },
                }).fromTo(
                  Q.current,
                  { opacity: 0 },
                  { opacity: 1, duration: 2 },
                );
              },
              { scope: q, dependencies: [s] },
            ),
            (0, p.L)(
              () => {
                $ &&
                  X.current &&
                  K.current &&
                  (er.current = x.A.timeline()
                    .to(X.current, {
                      opacity: 0,
                      duration: 1,
                      ease: "power2.inOut",
                    })
                    .to([K.current, Y.current], {
                      scale: 10,
                      duration: 1,
                      ease: "power2.inOut",
                    })
                    .to(
                      Z.current,
                      { opacity: 0, duration: 0.6, ease: "power2.inOut" },
                      "<",
                    )
                    .to(ee.current, {
                      opacity: 1,
                      duration: 1,
                      ease: "power2.inOut",
                    })
                    .to(
                      et.current,
                      {
                        scale: 1,
                        duration: 1,
                        ease: "power2.inOut",
                        onStart: () => {
                          W(!0);
                        },
                      },
                      "<+=0.3",
                    ));
              },
              { dependencies: [$, X, K, Z, ee] },
            ),
            (0, a.useEffect)(() => {
              !(async function () {
                if (v)
                  try {
                    let e = sessionStorage.getItem("pendingPuzzleSolved"),
                      s = !1;
                    if (e) {
                      let { roomId: l } = JSON.parse(e);
                      (console.log(
                        `[PuzzleRoom] Processing pending puzzle for room ${l}, current room: ${t}`,
                      ),
                        (s = l === t));
                    }
                    let l = await fetch("/api/puzzle/completed-rooms"),
                      r = await l.json(),
                      a = (r.data?.completedRoomIds || []).includes(t);
                    if (s) {
                      (sessionStorage.removeItem("pendingPuzzleSolved"),
                        console.log(
                          "[PuzzleRoom] Granting reward for pending puzzle...",
                        ));
                      let e = await fetch("/api/puzzle/grant-reward", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({ roomId: t }),
                        }),
                        s = await e.json();
                      s.data
                        ? (console.log(
                            "[PuzzleRoom] Reward granted successfully, showing popup",
                          ),
                          B(s.data.rewardImageUrl),
                          F(!0),
                          J(!0),
                          n(t))
                        : console.error(
                            "[PuzzleRoom] Failed to grant reward - no data in response",
                            s,
                          );
                    } else if (a) {
                      let e = await fetch("/api/puzzle/grant-reward", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({ roomId: t }),
                        }),
                        s = await e.json();
                      s.data && (B(s.data.rewardImageUrl), J(!0));
                    } else J(!1);
                  } catch (e) {
                    console.error(
                      "[PuzzleRoom] Error initializing room state:",
                      e,
                    );
                  }
              })();
            }, [v, t, n]),
            (0, a.useEffect)(() => {
              !G &&
                O &&
                (0, y.sendGTMEvent)({
                  event: "challenge_locked_view",
                  playFabId: N?.accountInfo?.playFabId || null,
                  roomId: t,
                  puzzleId: t,
                });
            }, [G, O, t, N?.accountInfo?.playFabId]),
            z && _ && T)
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsxs)("div", {
                      ref: q,
                      className:
                        "relative z-10 flex flex-1 flex-col justify-between",
                      children: [
                        (0, r.jsx)("div", {
                          className:
                            "from-trueblack absolute inset-0 block h-1/3 bg-linear-to-b md:hidden",
                        }),
                        (0, r.jsxs)("div", {
                          className:
                            "relative px-4 pt-2 md:mx-auto md:max-w-2xl md:rounded-sm md:py-12",
                          children: [
                            (0, r.jsx)("div", {
                              className:
                                "from-trueblack absolute top-1/2 left-1/2 hidden h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2 bg-radial to-60% md:block",
                            }),
                            !$ &&
                              (G
                                ? (0, r.jsxs)("div", {
                                    className: "relative z-10",
                                    children: [
                                      (0, r.jsx)("h2", {
                                        ref: es,
                                        className:
                                          "fade-in mb-2 text-center text-3xl font-semibold",
                                        children: e.loreHeadlineUnlocked,
                                      }),
                                      (0, r.jsx)("p", {
                                        ref: el,
                                        className:
                                          "fade-in text-center text-sm md:text-lg",
                                        children: e.loreDescriptionUnlocked,
                                      }),
                                    ],
                                  })
                                : (0, r.jsxs)("div", {
                                    className: "relative z-10",
                                    children: [
                                      (0, r.jsx)("h2", {
                                        ref: es,
                                        className:
                                          "fade-in mb-2 text-center text-3xl font-semibold",
                                        children: e.loreHeadlineLocked,
                                      }),
                                      (0, r.jsx)("p", {
                                        ref: el,
                                        className:
                                          "fade-in text-center text-sm md:text-lg",
                                        children: e.loreDescriptionLocked,
                                      }),
                                    ],
                                  })),
                          ],
                        }),
                        !G &&
                          O &&
                          (0, r.jsxs)("div", {
                            ref: Q,
                            className:
                              "relative z-50 px-4 pt-24 pb-16 md:absolute md:right-0 md:bottom-0 md:left-0",
                            children: [
                              (0, r.jsx)("div", {
                                className:
                                  "from-trueblack absolute right-0 bottom-0 left-0 h-[150%] w-full bg-gradient-to-t",
                              }),
                              (0, r.jsxs)("div", {
                                className: "relative z-10 space-y-3",
                                children: [
                                  (0, r.jsx)(d.A, {
                                    msUntilUnlock: e.msUntilUnlock,
                                    isUnlocked: G,
                                    message: D,
                                    unlockPuzzle: () => j.reload(),
                                  }),
                                  e.allowNotify &&
                                    !v &&
                                    (0, r.jsx)("div", {
                                      className: "flex justify-center",
                                      children: (0, r.jsx)(m.A, {
                                        variant: "normal",
                                        onClick: () => {
                                          ((0, g.d4)("/challenge-tomb"),
                                            (window.location.href =
                                              "/registration"));
                                        },
                                        children: e.notifyButtonText,
                                      }),
                                    }),
                                ],
                              }),
                            ],
                          }),
                        G &&
                          !$ &&
                          (0, r.jsx)("div", {
                            className: "my-12",
                            children: (0, r.jsx)(f.A, {
                              onUnlock: () => P(!0),
                              overlayText:
                                e.puzzleSliderText ?? "Start the Puzzle",
                              id: "vaultDoorSlider",
                            }),
                          }),
                      ],
                    }),
                    k &&
                      k.fields.file?.url &&
                      (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)("div", {
                            className:
                              "from-trueblack absolute inset-0 z-[7] h-full w-1/3 bg-gradient-to-r to-75% opacity-75",
                          }),
                          (0, r.jsx)("div", {
                            className:
                              "from-trueblack absolute top-0 right-0 z-[7] h-full w-1/3 bg-gradient-to-l to-75% opacity-75",
                          }),
                          (0, r.jsx)(i(), {
                            ref: Y,
                            src: (0, c._c)(k.fields.file?.url),
                            alt: I,
                            className:
                              "absolute inset-0 z-0 w-full object-cover",
                            priority: !0,
                            fill: !0,
                          }),
                        ],
                      }),
                    (0, r.jsxs)("div", {
                      className:
                        "absolute top-0 left-1/2 aspect-square h-full -translate-x-1/2",
                      children: [
                        k &&
                          k.fields.file?.url &&
                          (0, r.jsx)(i(), {
                            ref: X,
                            src: (0, c._c)(k.fields.file?.url),
                            alt: I,
                            className: "relative z-[6]",
                            priority: !0,
                            fill: !0,
                            style: {
                              WebkitMaskImage:
                                "linear-gradient(to right, rgba(0,0,0,0.0) 0%, rgba(0,0,0,1.0) 15%, rgba(0,0,0,1.0) 85%, rgba(0,0,0,0.0) 100%)",
                              maskImage:
                                "linear-gradient(to right, rgba(0,0,0,0.0) 0%, rgba(0,0,0,1.0) 15%, rgba(0,0,0,1.0) 85%, rgba(0,0,0,0.0) 100%)",
                            },
                          }),
                        S &&
                          S.fields.file?.url &&
                          (0, r.jsx)(i(), {
                            ref: K,
                            src: (0, c._c)(S.fields.file?.url),
                            alt: R,
                            className: "relative z-[5]",
                            priority: !0,
                            fill: !0,
                            style: {
                              WebkitMaskImage:
                                "linear-gradient(to right, rgba(0,0,0,0.0) 0%, rgba(0,0,0,1.0) 15%, rgba(0,0,0,1.0) 85%, rgba(0,0,0,0.0) 100%)",
                              maskImage:
                                "linear-gradient(to right, rgba(0,0,0,0.0) 0%, rgba(0,0,0,1.0) 15%, rgba(0,0,0,1.0) 85%, rgba(0,0,0,0.0) 100%)",
                            },
                          }),
                        (0, r.jsx)("div", {
                          className:
                            "absolute bottom-0 left-1/2 z-20 aspect-[9/16] w-1/4 -translate-x-1/2",
                          children: (0, r.jsx)(i(), {
                            ref: Z,
                            src: (0, c._c)(A?.fields.file?.url),
                            alt: "An image of Lara Croft facing the challenge tomb ahead.",
                            priority: !0,
                            fill: !0,
                            className: `${C}`,
                          }),
                        }),
                      ],
                    }),
                    G &&
                      (0, r.jsx)(u.A, {
                        open: E,
                        close: () => {
                          P(!1);
                        },
                        glyphOptions: V,
                        puzzleHeadline: e.puzzleHeadline ?? "",
                        puzzleDescription: e.puzzleDescription ?? "",
                        puzzleBackground: T?.image,
                        roomId: t,
                        isLoggedIn: v,
                        solvePuzzle: (e) => {
                          (F(!0), B(e), v && n(t));
                        },
                        puzzleSolveButtonText: e.puzzleSolveButtonText,
                        puzzleBackButtonText: e.puzzleBackButtonText,
                        isRoomCompleted: H,
                        viewReward: () => {
                          F(!0);
                        },
                      }),
                    $ &&
                      (0, r.jsxs)("div", {
                        ref: ee,
                        className:
                          "bg-trueblack/90 fixed inset-0 z-40 flex h-full w-screen flex-col items-center justify-center px-8 opacity-0 lg:aspect-video",
                        children: [
                          (0, r.jsx)("div", {
                            className:
                              "absolute aspect-[9/16] h-full md:aspect-video",
                            children: (0, r.jsx)(b.y, {
                              responsive: !0,
                              playAnimation: U,
                            }),
                          }),
                          (0, r.jsx)("div", {
                            ref: et,
                            className:
                              "bg-trueblack relative mb-6 size-48 flex-none scale-0 overflow-hidden rounded-full shadow-[0_0_32px_16px_rgba(234,179,8,0.4)]",
                            children: M
                              ? (0, r.jsx)(i(), {
                                  src: M,
                                  alt: "Reward",
                                  fill: !0,
                                  className: "object-cover",
                                })
                              : (0, r.jsx)(i(), {
                                  src: "/images/tombraider-logo.webp",
                                  alt: "Tombraider Logo",
                                  fill: !0,
                                  className: "object-contain p-4",
                                }),
                          }),
                          (0, r.jsx)("div", {
                            className:
                              "relative z-20 flex max-w-lg flex-col items-center",
                            children: v
                              ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                    (0, r.jsx)("h2", {
                                      className:
                                        "mb-2 text-center text-2xl font-bold",
                                      children: e.congratsHeadlineLoggedIn,
                                    }),
                                    (0, r.jsx)("p", {
                                      className: "text-center text-sm",
                                      children: e.congratsDescriptionLoggedIn,
                                    }),
                                    (0, r.jsx)(m.A, {
                                      className: "my-6",
                                      onClick: () => {
                                        j.push("/account");
                                      },
                                      children: e.congratsViewRewardButtonText,
                                    }),
                                    (0, r.jsx)("button", {
                                      className: "cursor-pointer underline",
                                      onClick: l,
                                      children:
                                        e.congratsContinuePlayingButtonText,
                                    }),
                                  ],
                                })
                              : (0, r.jsxs)(r.Fragment, {
                                  children: [
                                    (0, r.jsx)("h2", {
                                      className:
                                        "mb-2 text-center text-2xl font-bold",
                                      children: e.congratsHeadlineLoggedOut,
                                    }),
                                    (0, r.jsx)("p", {
                                      className: "text-center text-sm",
                                      children: e.congratsDescriptionLoggedOut,
                                    }),
                                    (0, r.jsx)(m.A, {
                                      className: "my-6",
                                      onClick: () => {
                                        ((0, g.d4)("/challenge-tomb"),
                                          (window.location.href =
                                            "/registration"));
                                      },
                                      children: e.congratsRegisterButtonText,
                                    }),
                                    (0, r.jsxs)("h5", {
                                      children: [
                                        e.congratsBeforeLoginText,
                                        " ",
                                        (0, r.jsx)("a", {
                                          className: "underline",
                                          href: "/login",
                                          onClick: () =>
                                            (0, g.d4)("/challenge-tomb"),
                                          children: e.congratsLoginText,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                          }),
                        ],
                      }),
                  ],
                })
              : null;
          }
          (([c, u, h] = j.then ? (await j)() : j), l());
        } catch (e) {
          l(e);
        }
      });
    },
    74474: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => n });
      var l = s(2183),
        r = s(46402),
        a = s.n(r);
      function n({ description: e }) {
        return (0, l.jsxs)(a(), {
          children: [
            (0, l.jsx)(
              "meta",
              { name: "description", content: e },
              "description",
            ),
            (0, l.jsx)(
              "meta",
              { property: "og:description", content: e },
              "og:description",
            ),
            (0, l.jsx)(
              "meta",
              { name: "twitter:description", content: e },
              "twitter:description",
            ),
          ],
        });
      }
    },
    76863: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => i });
      var l = s(2183),
        r = s(36439),
        a = s(15013),
        n = s.n(a);
      function i({
        rooms: e,
        activeRoomIndex: t,
        onRoomClick: s,
        firstLockedIndex: a,
        completedRoomIds: o,
        roomIds: c,
      }) {
        let d = (0, r.useRef)(null),
          [u, m] = (0, r.useState)(!1),
          [f, p] = (0, r.useState)(!1),
          x = () => {
            let e = d.current;
            if (!e) return;
            let { scrollLeft: t, scrollWidth: s, clientWidth: l } = e;
            (m(t > 10), p(s - l - t > 10));
          };
        return (
          (0, r.useEffect)(() => {
            x();
            let e = d.current;
            if (e)
              return (
                e.addEventListener("scroll", x),
                window.addEventListener("resize", x),
                () => {
                  (e.removeEventListener("scroll", x),
                    window.removeEventListener("resize", x));
                }
              );
          }, [e]),
          (0, l.jsx)("div", {
            className: "mx-auto mt-2 w-full md:mt-12 md:max-w-sm",
            children: (0, l.jsxs)("div", {
              className:
                "relative z-20 mx-auto overflow-hidden bg-trueblack md:rounded-full md:border md:border-darkgray-200 md:bg-black/70 md:backdrop-blur-[2px]",
              children: [
                u &&
                  (0, l.jsx)("button", {
                    onClick: () => {
                      let e = d.current;
                      if (!e) return;
                      let t = 0.5 * e.clientWidth;
                      e.scrollBy({ left: -t, behavior: "smooth" });
                    },
                    className:
                      "absolute left-0 top-0 z-30 flex h-full w-10 cursor-pointer items-center bg-gradient-to-r from-trueblack transition-all hover:text-yellow-300 md:from-black/70",
                    "aria-label": "Scroll left",
                    children: (0, l.jsx)("svg", {
                      className: "ml-2 h-6 w-6 text-white",
                      fill: "none",
                      strokeWidth: "2",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: (0, l.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M15 19l-7-7 7-7",
                      }),
                    }),
                  }),
                f &&
                  (0, l.jsx)("button", {
                    onClick: () => {
                      let e = d.current;
                      if (!e) return;
                      let t = 0.5 * e.clientWidth;
                      e.scrollBy({ left: t, behavior: "smooth" });
                    },
                    className:
                      "absolute right-0 top-0 z-30 flex h-full w-10 cursor-pointer items-center justify-end bg-gradient-to-l from-trueblack transition-all hover:text-yellow-300 md:from-black/70",
                    "aria-label": "Scroll right",
                    children: (0, l.jsx)("svg", {
                      className: "mr-2 h-6 w-6",
                      fill: "none",
                      strokeWidth: "2",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: (0, l.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M9 5l7 7-7 7",
                      }),
                    }),
                  }),
                (0, l.jsx)("div", {
                  ref: d,
                  className:
                    "navigation-container flex snap-x snap-mandatory gap-3 overflow-x-auto overflow-y-hidden scroll-smooth px-4 py-3",
                  children: e.map((e, r) => {
                    let i = r === t,
                      d = -1 !== a && r > a,
                      u = !1;
                    if (!d && c[r])
                      for (let e = 0; e < r; e++) {
                        let t = c[e];
                        if (t && !o.includes(t)) {
                          u = !0;
                          break;
                        }
                      }
                    let m = d || u;
                    return (0, l.jsx)(
                      "button",
                      {
                        className: `relative z-10 flex aspect-square size-10 shrink-0 snap-center items-center justify-center rounded-full transition-all duration-200
				  ${i ? "shadow-[0_0_8px_8px_rgba(234,179,8,0.3)]" : ""}
				  ${m ? "cursor-not-allowed" : "cursor-pointer hover:scale-110"}`,
                        onClick: () => s(r),
                        children: (0, l.jsx)(n(), {
                          src: "/images/challenge-tomb/room-unlocked.png",
                          alt: `Room ${r + 1}`,
                          className: `${r !== t ? "opacity-80 grayscale" : ""} ${m ? "!opacity-30" : ""}`,
                          width: 76,
                          height: 76,
                        }),
                      },
                      r + 1,
                    );
                  }),
                }),
              ],
            }),
          })
        );
      }
    },
    95783: (e, t, s) => {
      "use strict";
      s.a(e, async (e, l) => {
        try {
          s.d(t, { OU: () => c, Om: () => u, Q0: () => d, _8: () => o });
          var r = s(92642),
            a = s(80935),
            n = e([r]);
          r = (n.then ? (await n)() : n)[0];
          let m = `${a.W}/#organization`,
            f = `${a.W}/#website`,
            p = "Tomb Raider",
            x = "https://en.wikipedia.org/wiki/Tomb_Raider";
          function i(e) {
            let t = (0, r._c)(e.footerLogo?.fields.file?.url);
            return t ? { logo: { "@type": "ImageObject", url: t } } : {};
          }
          function o(e, t) {
            return {
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": m,
              name: p,
              url: a.W,
              ...i(e),
              sameAs: [
                ...t.map((e) => e.link),
                x,
                "https://www.wikidata.org/wiki/Q270503",
              ],
            };
          }
          function c() {
            return {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": f,
              name: p,
              url: a.W,
              publisher: { "@id": m },
            };
          }
          function d(e, t) {
            let s = `${a.W}/news/${e.category?.fields.slug}/${e.slug}`,
              l = (0, r._c)(e.headerImage?.fields.file?.url),
              n = { "@type": "Organization", "@id": m, name: p, ...i(t) };
            return {
              "@context": "https://schema.org",
              "@type": "NewsArticle",
              headline: e.title,
              description: e.excerpt || e.socialMediaShareDescription,
              ...(l ? { image: [l] } : {}),
              datePublished: e.publishDate,
              dateModified: e.sysUpdatedAt ?? e.publishDate,
              url: s,
              mainEntityOfPage: { "@type": "WebPage", "@id": s },
              author: n,
              publisher: n,
            };
          }
          function u(e) {
            let t = `${a.W}/products/${e.category?.fields.slug}/${e.slug}`,
              s = (0, r._c)(
                e.titleLogo?.fields.file?.url ??
                  e.galleryEntries?.[0]?.fields.image?.fields.file?.url,
              );
            return {
              "@context": "https://schema.org",
              "@type": "VideoGame",
              name: e.title,
              url: t,
              ...(e.shortDescription
                ? { description: e.shortDescription }
                : {}),
              ...(s ? { image: s } : {}),
              ...(e.releaseDate ? { datePublished: e.releaseDate } : {}),
              ...(e.publisher
                ? { publisher: { "@type": "Organization", name: e.publisher } }
                : {}),
              ...(e.esrbRating
                ? { contentRating: `ESRB ${e.esrbRating}` }
                : {}),
              isPartOf: {
                "@type": "VideoGameSeries",
                name: "Tomb Raider",
                sameAs: x,
              },
            };
          }
          l();
        } catch (e) {
          l(e);
        }
      });
    },
    99435: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => a });
      var l = s(2183),
        r = s(36439);
      function a({
        msUntilUnlock: e,
        isUnlocked: t,
        message: s,
        unlockPuzzle: n,
      }) {
        let [i, o] = (0, r.useState)({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
          }),
          c = (0, r.useRef)(Date.now() + e);
        return ((0, r.useEffect)(() => {
          if (t) return;
          let e = () => {
            let e = new Date().getTime(),
              t = c.current - e;
            if (t > 0) {
              let e = Math.floor(t / 864e5),
                s = Math.floor((t % 864e5) / 36e5);
              o({
                days: e,
                hours: s,
                minutes: Math.floor((t % 36e5) / 6e4),
                seconds: Math.floor((t % 6e4) / 1e3),
              });
            } else (o({ days: 0, hours: 0, minutes: 0, seconds: 0 }), n());
          };
          e();
          let s = setInterval(e, 1e3);
          return () => clearInterval(s);
        }, [t]),
        t)
          ? null
          : (0, l.jsx)("div", {
              className: "flex items-center justify-center",
              children: (0, l.jsxs)("div", {
                className: "text-center text-5xl",
                children: [
                  (0, l.jsxs)("div", {
                    className: "mb-4 flex justify-center text-white",
                    children: [
                      (0, l.jsxs)("div", {
                        className: "flex w-16 flex-col items-center",
                        children: [
                          (0, l.jsx)("span", {
                            className: "font-spline-sans-mono text-5xl",
                            children: i.days.toString().padStart(2, "0"),
                          }),
                          (0, l.jsx)("span", {
                            className: "text-xs uppercase text-[#9D9D9C]",
                            children: "Days",
                          }),
                        ],
                      }),
                      (0, l.jsx)("span", {
                        className: "inline-block pr-0.5 text-5xl",
                        children: ":",
                      }),
                      (0, l.jsxs)("div", {
                        className: "flex w-16 flex-col items-center",
                        children: [
                          (0, l.jsx)("span", {
                            className: "font-spline-sans-mono text-5xl",
                            children: i.hours.toString().padStart(2, "0"),
                          }),
                          (0, l.jsx)("span", {
                            className: "text-xs uppercase text-[#9D9D9C]",
                            children: "Hours",
                          }),
                        ],
                      }),
                      (0, l.jsx)("span", {
                        className: "inline-block pr-0.5 text-5xl",
                        children: ":",
                      }),
                      (0, l.jsxs)("div", {
                        className: "flex w-16 flex-col items-center",
                        children: [
                          (0, l.jsx)("span", {
                            className: "font-spline-sans-mono text-5xl",
                            children: i.minutes.toString().padStart(2, "0"),
                          }),
                          (0, l.jsx)("span", {
                            className: "text-xs uppercase text-[#9D9D9C]",
                            children: "Minutes",
                          }),
                        ],
                      }),
                      (0, l.jsx)("span", {
                        className: "inline-block pr-0.5 text-5xl",
                        children: ":",
                      }),
                      (0, l.jsxs)("div", {
                        className: "flex w-16 flex-col items-center",
                        children: [
                          (0, l.jsx)("span", {
                            className: "font-spline-sans-mono text-5xl",
                            children: i.seconds.toString().padStart(2, "0"),
                          }),
                          (0, l.jsx)("span", {
                            className: "text-xs uppercase text-[#9D9D9C]",
                            children: "Seconds",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsx)("p", {
                    className: "text-gold text-sm",
                    children: s,
                  }),
                ],
              }),
            });
      }
    },
  },
  (e) => {
    (e.O(
      0,
      [9950, 8762, 5013, 2696, 1329, 6342, 4971, 9980, 2642, 636, 6593, 8792],
      () => e((e.s = 6365)),
    ),
      (_N_E = e.O()));
  },
]);
