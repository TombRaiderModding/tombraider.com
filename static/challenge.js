(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [446],
  {
    74155: function (e, t, l) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/challenge-tomb",
        function () {
          return l(20201);
        },
      ]);
    },
    67320: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return CountdownTimer;
        },
      });
      var n = l(97458),
        o = l(52983);
      function CountdownTimer(e) {
        let {
            unlockDateTime: t,
            isUnlocked: l,
            message: r,
            unlockPuzzle: s,
          } = e,
          [i, a] = (0, o.useState)({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
          });
        return ((0, o.useEffect)(() => {
          if (!t || l) return;
          let calculateTimeLeft = () => {
            let e = new Date().getTime(),
              l = new Date(t).getTime(),
              n = l - e;
            n > 0
              ? a({
                  days: Math.floor(n / 864e5),
                  hours: Math.floor((n % 864e5) / 36e5),
                  minutes: Math.floor((n % 36e5) / 6e4),
                  seconds: Math.floor((n % 6e4) / 1e3),
                })
              : (a({ days: 0, hours: 0, minutes: 0, seconds: 0 }), s());
          };
          calculateTimeLeft();
          let e = setInterval(calculateTimeLeft, 1e3);
          return () => clearInterval(e);
        }, [t, l]),
        !t || l)
          ? null
          : (0, n.jsx)("div", {
              className: "flex items-center justify-center",
              children: (0, n.jsxs)("div", {
                className: "text-center text-5xl",
                children: [
                  (0, n.jsxs)("div", {
                    className: "mb-4 flex justify-center text-white",
                    children: [
                      (0, n.jsxs)("div", {
                        className: "flex w-16 flex-col items-center",
                        children: [
                          (0, n.jsx)("span", {
                            className: "font-spline-sans-mono text-5xl",
                            children: i.days.toString().padStart(2, "0"),
                          }),
                          (0, n.jsx)("span", {
                            className: "text-xs uppercase text-[#9D9D9C]",
                            children: "Days",
                          }),
                        ],
                      }),
                      (0, n.jsx)("span", {
                        className: "inline-block pr-0.5 text-5xl",
                        children: ":",
                      }),
                      (0, n.jsxs)("div", {
                        className: "flex w-16 flex-col items-center",
                        children: [
                          (0, n.jsx)("span", {
                            className: "font-spline-sans-mono text-5xl",
                            children: i.hours.toString().padStart(2, "0"),
                          }),
                          (0, n.jsx)("span", {
                            className: "text-xs uppercase text-[#9D9D9C]",
                            children: "Hours",
                          }),
                        ],
                      }),
                      (0, n.jsx)("span", {
                        className: "inline-block pr-0.5 text-5xl",
                        children: ":",
                      }),
                      (0, n.jsxs)("div", {
                        className: "flex w-16 flex-col items-center",
                        children: [
                          (0, n.jsx)("span", {
                            className: "font-spline-sans-mono text-5xl",
                            children: i.minutes.toString().padStart(2, "0"),
                          }),
                          (0, n.jsx)("span", {
                            className: "text-xs uppercase text-[#9D9D9C]",
                            children: "Minutes",
                          }),
                        ],
                      }),
                      (0, n.jsx)("span", {
                        className: "inline-block pr-0.5 text-5xl",
                        children: ":",
                      }),
                      (0, n.jsxs)("div", {
                        className: "flex w-16 flex-col items-center",
                        children: [
                          (0, n.jsx)("span", {
                            className: "font-spline-sans-mono text-5xl",
                            children: i.seconds.toString().padStart(2, "0"),
                          }),
                          (0, n.jsx)("span", {
                            className: "text-xs uppercase text-[#9D9D9C]",
                            children: "Seconds",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsx)("p", {
                    className: "text-gold text-sm",
                    children: r,
                  }),
                ],
              }),
            });
      }
    },
    64005: function (e, t, l) {
      "use strict";
      var n = l(97458),
        o = l(66426),
        r = l.n(o);
      t.Z = (e) => {
        let { href: t, children: l, className: o, ...s } = e,
          i = "string" == typeof t && t.startsWith("http");
        return i
          ? (0, n.jsx)("a", {
              href: t,
              target: "_blank",
              rel: "noopener noreferrer",
              className: o,
              ...s,
              children: l,
            })
          : (0, n.jsx)(r(), {
              legacyBehavior: !0,
              href: t,
              ...s,
              children: (0, n.jsx)("a", { className: o, children: l }),
            });
      };
    },
    96854: function (e, t, l) {
      "use strict";
      l.a(e, async function (e, n) {
        try {
          l.d(t, {
            Z: function () {
              return Footer;
            },
          });
          var o = l(97458),
            r = l(68956),
            s = l.n(r),
            i = l(66426),
            a = l.n(i),
            c = l(20102),
            d = l(64005),
            u = l(14790),
            f = e([c, u]);
          function Footer(e) {
            var t, l, n;
            let { websiteSingleton: r, navItems: i, footerSocialLinks: f } = e,
              { isLoggedIn: m, shopifyUrl: x } = (0, c.S)(),
              p = i.filter(
                (e) => e.showInFooter && !(m && e.hideForLoggedInUsers),
              ),
              h = i.filter(
                (e) => e.showInSubFooter && !(m && e.hideForLoggedInUsers),
              );
            return (0, o.jsxs)("div", {
              className: "relative w-full bg-black px-8 text-white lg:px-32",
              children: [
                (0, o.jsxs)("div", {
                  className:
                    "flex flex-col items-center justify-center space-y-16 pb-16 pt-16 lg:flex-row lg:items-stretch lg:justify-between lg:space-y-0 lg:pt-32",
                  children: [
                    (0, o.jsx)("div", {
                      children: (0, o.jsx)(s(), {
                        src: (0, u.Wx)(
                          null === (l = r.footerLogo) || void 0 === l
                            ? void 0
                            : null === (t = l.fields.file) || void 0 === t
                              ? void 0
                              : t.url,
                        ),
                        width: 248,
                        height: 248,
                        alt: (0, u.Wx)(
                          null === (n = r.footerLogo) || void 0 === n
                            ? void 0
                            : n.fields.description,
                        ),
                        className: "w-40",
                      }),
                    }),
                    (0, o.jsxs)("div", {
                      className:
                        "flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-lg text-darkgray-500 ",
                      children: [
                        p.map((e) => {
                          let t = e.link;
                          return (
                            e.shouldReplaceWithGeneratedShopLink &&
                              x &&
                              (t = x),
                            (0, o.jsx)(
                              a(),
                              { href: t, children: e.name },
                              e.link + e.name,
                            )
                          );
                        }),
                        (0, o.jsx)("span", {
                          id: "accessibilityWidget",
                          className: "cursor-pointer",
                          children: "Accessibility",
                        }),
                        (0, o.jsx)("span", {
                          className: "cursor-pointer",
                          onClick: () => {
                            var e;
                            return null === (e = window.OneTrust) ||
                              void 0 === e
                              ? void 0
                              : e.ToggleInfoDisplay();
                          },
                          children:
                            "Do Not Sell or Share My Personal Information",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, o.jsxs)("div", {
                  className:
                    "flex flex-col items-center justify-center space-y-16 pb-16 lg:flex-row lg:items-stretch lg:justify-between lg:space-y-0",
                  children: [
                    (0, o.jsx)("div", {
                      className: "text-center text-darkgray-500",
                      children: r.footerCopyright,
                    }),
                    (0, o.jsx)("div", {
                      className: "flex items-center space-x-4 text-white",
                      children: f.map((e) => {
                        var t, l, n, r;
                        return (0, o.jsx)(
                          d.Z,
                          {
                            href: e.link,
                            children: (0, o.jsx)(s(), {
                              src: (0, u.Wx)(
                                null === (l = e.icon) || void 0 === l
                                  ? void 0
                                  : null === (t = l.fields.file) || void 0 === t
                                    ? void 0
                                    : t.url,
                              ),
                              alt:
                                null !==
                                  (r =
                                    null === (n = e.icon) || void 0 === n
                                      ? void 0
                                      : n.fields.description) && void 0 !== r
                                  ? r
                                  : "",
                              width: 20,
                              height: 20,
                            }),
                          },
                          e.link,
                        );
                      }),
                    }),
                  ],
                }),
                (0, o.jsx)("div", { className: "h-[1px] bg-gray-500" }),
                (0, o.jsxs)("div", {
                  className:
                    "flew-col flex flex-col items-start justify-start gap-x-10 gap-y-10 py-12 text-gray-300 md:justify-between 2xl:flex-row ",
                  children: [
                    (0, o.jsx)("p", {
                      className:
                        "max-w-[1000px] text-center text-sm text-darkgray-300 lg:text-left",
                      children: r.footerLegalNotice,
                    }),
                    (0, o.jsx)("div", {
                      className:
                        "flex w-full flex-wrap items-center justify-center gap-x-10 gap-y-2 text-darkgray-500 md:flex-row md:gap-x-10 md:gap-y-0 lg:w-auto lg:justify-start",
                      children: h.map((e) =>
                        (0, o.jsx)(
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
          (([c, u] = f.then ? (await f)() : f), n());
        } catch (e) {
          n(e);
        }
      });
    },
    83357: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return UnlockSwitch;
        },
      });
      var n = l(97458),
        o = l(52983);
      function UnlockSwitch(e) {
        let {
            onUnlock: t,
            overlayText: l,
            label: r = "Open Vault Door",
            id: s = "unlockSwitch",
          } = e,
          [i, a] = (0, o.useState)(0);
        return (
          (0, o.useEffect)(() => {
            i > 90 && (t(), a(0));
          }, [i, t]),
          (0, n.jsxs)("div", {
            className:
              "unlock-switch relative z-50 mx-auto w-64 cursor-pointer rounded-full border border-white/60 bg-black/90 p-2",
            children: [
              (0, n.jsx)("label", {
                htmlFor: s,
                className: "sr-only",
                "aria-label": r,
                children: r,
              }),
              (0, n.jsx)("input", {
                className:
                  "relative block h-12 w-full cursor-pointer appearance-none rounded-full bg-transparent",
                type: "range",
                value: i,
                max: 100,
                id: s,
                name: s,
                onChange: (e) => a(Number(e.target.value)),
              }),
              (0, n.jsx)("span", {
                className:
                  "pointer-events-none absolute left-16 top-1/2 w-[calc(100%-4.5rem)] -translate-y-1/2 text-center",
                children: l,
              }),
            ],
          })
        );
      }
    },
    57391: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return ChallengeTombNavigation;
        },
      });
      var n = l(97458),
        o = l(52983),
        r = l(68956),
        s = l.n(r);
      function ChallengeTombNavigation(e) {
        let {
            rooms: t,
            activeRoomIndex: l,
            onRoomClick: r,
            firstLockedIndex: i,
            completedRoomIds: a,
            roomIds: c,
          } = e,
          d = (0, o.useRef)(null),
          [u, f] = (0, o.useState)(!1),
          [m, x] = (0, o.useState)(!1),
          checkScroll = () => {
            let e = d.current;
            if (!e) return;
            let { scrollLeft: t, scrollWidth: l, clientWidth: n } = e,
              o = l - n - t;
            (f(t > 10), x(o > 10));
          };
        return (
          (0, o.useEffect)(() => {
            checkScroll();
            let e = d.current;
            if (e)
              return (
                e.addEventListener("scroll", checkScroll),
                window.addEventListener("resize", checkScroll),
                () => {
                  (e.removeEventListener("scroll", checkScroll),
                    window.removeEventListener("resize", checkScroll));
                }
              );
          }, [t]),
          (0, n.jsx)("div", {
            className: "mx-auto mt-2 w-full md:mt-12 md:max-w-sm",
            children: (0, n.jsxs)("div", {
              className:
                "relative z-20 mx-auto overflow-hidden bg-trueblack md:rounded-full md:border md:border-darkgray-200 md:bg-black/70 md:backdrop-blur-[2px]",
              children: [
                u &&
                  (0, n.jsx)("button", {
                    onClick: () => {
                      let e = d.current;
                      if (!e) return;
                      let t = 0.5 * e.clientWidth;
                      e.scrollBy({ left: -t, behavior: "smooth" });
                    },
                    className:
                      "absolute left-0 top-0 z-30 flex h-full w-10 cursor-pointer items-center bg-gradient-to-r from-trueblack transition-all hover:text-yellow-300 md:from-black/70",
                    "aria-label": "Scroll left",
                    children: (0, n.jsx)("svg", {
                      className: "ml-2 h-6 w-6 text-white",
                      fill: "none",
                      strokeWidth: "2",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: (0, n.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M15 19l-7-7 7-7",
                      }),
                    }),
                  }),
                m &&
                  (0, n.jsx)("button", {
                    onClick: () => {
                      let e = d.current;
                      if (!e) return;
                      let t = 0.5 * e.clientWidth;
                      e.scrollBy({ left: t, behavior: "smooth" });
                    },
                    className:
                      "absolute right-0 top-0 z-30 flex h-full w-10 cursor-pointer items-center justify-end bg-gradient-to-l from-trueblack transition-all hover:text-yellow-300 md:from-black/70",
                    "aria-label": "Scroll right",
                    children: (0, n.jsx)("svg", {
                      className: "mr-2 h-6 w-6",
                      fill: "none",
                      strokeWidth: "2",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: (0, n.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M9 5l7 7-7 7",
                      }),
                    }),
                  }),
                (0, n.jsx)("div", {
                  ref: d,
                  className:
                    "navigation-container flex snap-x snap-mandatory gap-3 overflow-x-auto overflow-y-hidden scroll-smooth px-4 py-3",
                  children: t.map((e, t) => {
                    let o = t === l,
                      d = -1 !== i && t > i,
                      u = !1;
                    if (!d && c[t])
                      for (let e = 0; e < t; e++) {
                        let t = c[e];
                        if (t && !a.includes(t)) {
                          u = !0;
                          break;
                        }
                      }
                    let f = d || u;
                    return (0, n.jsx)(
                      "button",
                      {
                        className:
                          "relative z-10 flex aspect-square size-10 shrink-0 snap-center items-center justify-center rounded-full transition-all duration-200\n				  "
                            .concat(
                              o
                                ? "shadow-[0_0_8px_8px_rgba(234,179,8,0.3)]"
                                : "",
                              "\n				  ",
                            )
                            .concat(
                              f
                                ? "cursor-not-allowed"
                                : "cursor-pointer hover:scale-110",
                            ),
                        onClick: () => r(t),
                        children: (0, n.jsx)(s(), {
                          src: "/images/challenge-tomb/room-unlocked.png",
                          alt: "Room ".concat(t + 1),
                          className: ""
                            .concat(t !== l ? "opacity-80 grayscale" : "", " ")
                            .concat(f ? "!opacity-30" : ""),
                          width: 76,
                          height: 76,
                        }),
                      },
                      t + 1,
                    );
                  }),
                }),
              ],
            }),
          })
        );
      }
    },
    8884: function (e, t, l) {
      "use strict";
      l.a(e, async function (e, n) {
        try {
          var o = l(97458),
            r = l(52983),
            s = l(68956),
            i = l.n(s),
            a = l(77176),
            c = l(14790),
            d = e([c]);
          c = (d.then ? (await d)() : d)[0];
          let u = (0, r.forwardRef)((e, t) => {
            let {
                selectedGlyph: l,
                glyphOptions: n,
                updatePuzzleAnswer: s,
              } = e,
              [d, u] = (0, r.useState)("up"),
              [f, m] = (0, r.useState)(() => {
                let e = n.findIndex((e) => e.sys.id === l);
                return e >= 0 ? e : 0;
              }),
              x = (0, r.useRef)(null);
            return (
              (0, r.useEffect)(() => {
                let e = n.findIndex((e) => e.sys.id === l);
                e >= 0 && m(e);
              }, [l, n]),
              (0, r.useEffect)(() => {
                let e = a.Z.context(() => {
                  a.Z.fromTo(
                    ".glyph-" + f,
                    { y: "up" === d ? 10 : -10, opacity: 0, overwrite: "auto" },
                    { y: 0, opacity: 1 },
                  );
                }, x);
                return () => e.revert();
              }, [f]),
              (0, o.jsxs)("div", {
                ref: x,
                className: "flex w-1/4 flex-col justify-center",
                children: [
                  (0, o.jsx)("button", {
                    onMouseDown: function () {
                      (u("up"),
                        f === n.length - 1
                          ? (m(0), s(n[0].sys.id))
                          : (m(f + 1), s(n[f + 1].sys.id)));
                    },
                    ref: t,
                    type: "button",
                    className:
                      "group relative flex aspect-[2] w-full cursor-pointer items-center justify-center rounded-xl backdrop-brightness-75 hover:backdrop-brightness-100",
                  }),
                  (0, o.jsx)("div", {
                    className:
                      "relative flex aspect-[6/5] w-full items-center justify-center",
                    children: n.map((e, t) =>
                      (0, o.jsx)(
                        "div",
                        {
                          className: "glyph ".concat(
                            "glyph-" + t,
                            " absolute flex h-full w-full items-center justify-center p-2 opacity-0",
                          ),
                          children: (0, o.jsx)(i(), {
                            src: (() => {
                              var t;
                              if (
                                !e.fields.image ||
                                !("fields" in e.fields.image)
                              )
                                return "";
                              let l = e.fields.image,
                                n =
                                  null === (t = l.fields) || void 0 === t
                                    ? void 0
                                    : t.file;
                              return n && "object" == typeof n && "url" in n
                                ? (0, c.Wx)(n.url)
                                : "";
                            })(),
                            alt: (() => {
                              var t;
                              if (
                                !e.fields.image ||
                                !("fields" in e.fields.image)
                              )
                                return "";
                              let l = e.fields.image,
                                n =
                                  null === (t = l.fields) || void 0 === t
                                    ? void 0
                                    : t.description;
                              return "string" == typeof n ? n : "";
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
                  (0, o.jsx)("button", {
                    onMouseDown: function () {
                      (u("down"),
                        0 === f
                          ? (m(n.length - 1), s(n[n.length - 1].sys.id))
                          : (m(f - 1), s(n[f - 1].sys.id)));
                    },
                    type: "button",
                    className:
                      "group relative flex aspect-[2] w-full cursor-pointer items-center justify-center rounded-xl backdrop-brightness-75 hover:backdrop-brightness-100",
                  }),
                ],
              })
            );
          });
          ((t.Z = u), n());
        } catch (e) {
          n(e);
        }
      });
    },
    26727: function (e, t, l) {
      "use strict";
      l.a(e, async function (e, n) {
        try {
          l.d(t, {
            Z: function () {
              return Puzzle;
            },
          });
          var o = l(97458),
            r = l(52983),
            s = l(68956),
            i = l.n(s),
            a = l(42897),
            c = l(8884),
            d = l(77176),
            u = l(14790),
            f = l(58594),
            m = l(20102),
            x = e([c, u, m]);
          function Puzzle(e) {
            var t, l, n;
            let {
                open: s,
                glyphOptions: x,
                roomId: p,
                puzzleHeadline: h,
                puzzleDescription: g,
                puzzleBackground: v,
                puzzleSolveButtonText: b,
                puzzleBackButtonText: y,
                isLoggedIn: j,
                close: w,
                solvePuzzle: N,
                isRoomCompleted: z,
                viewReward: k,
              } = e,
              { userData: S } = (0, m.S)(),
              [I, R] = (0, r.useState)(() =>
                x.length > 0
                  ? [x[0].sys.id, x[0].sys.id, x[0].sys.id, x[0].sys.id]
                  : ["", "", "", ""],
              ),
              [T, C] = (0, r.useState)(!1),
              [D, L] = (0, r.useState)(!1),
              O = (0, r.useRef)(null);
            async function checkForSuccess() {
              (L(!0), C(!1));
              try {
                var e, t, l;
                let n = await fetch("/api/puzzle/validate-solution", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ roomId: p, answer: I }),
                  }),
                  o = await n.json();
                if (!n.ok) throw Error("Validation failed");
                if (
                  null === (e = o.data) || void 0 === e ? void 0 : e.isCorrect
                )
                  (C(!1),
                    j ||
                      sessionStorage.setItem(
                        "pendingPuzzleSolved",
                        JSON.stringify({ roomId: p, timestamp: Date.now() }),
                      ),
                    N(o.data.rewardImageUrl),
                    w(),
                    (0, f.sendGTMEvent)({
                      event: "challenge_solve",
                      playFabId:
                        (null == S
                          ? void 0
                          : null === (t = S.accountInfo) || void 0 === t
                            ? void 0
                            : t.playFabId) || null,
                      roomId: p,
                      puzzleId: p,
                    }));
                else {
                  (C(!0),
                    (0, f.sendGTMEvent)({
                      event: "challenge_incorrect_answer",
                      playFabId:
                        (null == S
                          ? void 0
                          : null === (l = S.accountInfo) || void 0 === l
                            ? void 0
                            : l.playFabId) || null,
                      roomId: p,
                      puzzleId: p,
                    }));
                  let e = d.Z.timeline()
                    .to(".error-message", { x: 10, duration: 0.1 })
                    .to(".error-message", { x: -10, duration: 0.1 })
                    .to(".error-message", { x: 10, duration: 0.1 })
                    .to(".error-message", { x: -10, duration: 0.1 })
                    .to(".error-message", { x: 0, duration: 0.1 });
                  e.play();
                }
              } catch (e) {
                (console.error("Error validating puzzle solution:", e), C(!0));
              } finally {
                L(!1);
              }
            }
            return ((0, r.useEffect)(() => {
              if (s) {
                var e;
                (document.body.classList.add("overflow-hidden"),
                  O.current && O.current.focus(),
                  (0, f.sendGTMEvent)({
                    event: "challenge_start",
                    playFabId:
                      (null == S
                        ? void 0
                        : null === (e = S.accountInfo) || void 0 === e
                          ? void 0
                          : e.playFabId) || null,
                    roomId: p,
                    puzzleId: p,
                  }));
              } else (C(!1), document.body.classList.remove("overflow-hidden"));
              return () => {
                document.body.classList.remove("overflow-hidden");
              };
            }, [
              s,
              p,
              null == S
                ? void 0
                : null === (t = S.accountInfo) || void 0 === t
                  ? void 0
                  : t.playFabId,
            ]),
            s)
              ? (0, o.jsxs)("div", {
                  children: [
                    (0, o.jsx)("button", {
                      onClick: () => {
                        var e;
                        ((0, f.sendGTMEvent)({
                          event: "challenge_close",
                          playFabId:
                            (null == S
                              ? void 0
                              : null === (e = S.accountInfo) || void 0 === e
                                ? void 0
                                : e.playFabId) || null,
                          roomId: p,
                          puzzleId: p,
                        }),
                          w());
                      },
                      className:
                        "fixed right-4 top-4 z-[102] flex size-16 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 lg:right-12 lg:top-12",
                      "aria-label": "Close",
                      children: (0, o.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "size-8",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        strokeWidth: 2,
                        children: (0, o.jsx)("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          d: "M6 18L18 6M6 6l12 12",
                        }),
                      }),
                    }),
                    (0, o.jsx)("div", {
                      className:
                        "fixed inset-0 z-[101] h-screen w-screen overflow-x-hidden bg-black/40 backdrop-blur-md",
                      children: (0, o.jsxs)("div", {
                        className:
                          "relative mx-auto flex h-full flex-col items-center justify-center overflow-y-auto overflow-x-hidden p-4",
                        children: [
                          (0, o.jsxs)("div", {
                            className:
                              "flex w-full max-w-4xl flex-col items-center justify-center",
                            children: [
                              (0, o.jsx)("h4", {
                                className:
                                  "mb-3 text-center text-2xl font-bold",
                                children: h,
                              }),
                              (0, o.jsx)("p", {
                                className: "mb-12 text-center text-sm md:mb-20",
                                children: g,
                              }),
                              (0, o.jsxs)("div", {
                                className: "relative w-full",
                                children: [
                                  (null == v
                                    ? void 0
                                    : null === (l = v.fields.file) ||
                                        void 0 === l
                                      ? void 0
                                      : l.url) &&
                                    (0, o.jsx)(i(), {
                                      width: "1440",
                                      height: "720",
                                      alt:
                                        "string" == typeof v.fields.description
                                          ? v.fields.description
                                          : "A puzzle background",
                                      src: (0, u.Wx)(
                                        "string" ==
                                          typeof (null ===
                                            (n = v.fields.file) || void 0 === n
                                            ? void 0
                                            : n.url)
                                          ? v.fields.file.url
                                          : void 0,
                                      ),
                                      className:
                                        "absolute left-1/2 top-1/2 -z-10 w-full -translate-x-1/2 -translate-y-1/2 object-contain",
                                      priority: !0,
                                    }),
                                  (0, o.jsx)("div", {
                                    className:
                                      "flex w-full pl-[3.5%] pr-[4.15%]",
                                    children: I.map(function (e, t) {
                                      return (0, o.jsx)(
                                        c.Z,
                                        {
                                          ref: 0 === t ? O : null,
                                          selectedGlyph: I[t],
                                          updatePuzzleAnswer: (e) =>
                                            R((l) => {
                                              let n = [...l];
                                              return ((n[t] = e), n);
                                            }),
                                          glyphOptions: x,
                                        },
                                        t,
                                      );
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, o.jsx)("div", {
                            className:
                              "mt-12 flex flex-col items-center justify-center md:mt-20",
                            children: z
                              ? (0, o.jsxs)("div", {
                                  className:
                                    "mb-4 flex flex-col items-center gap-6",
                                  children: [
                                    (0, o.jsx)("p", {
                                      className:
                                        "text-center text-lg font-semibold",
                                      children:
                                        "You have already solved this puzzle.",
                                    }),
                                    (0, o.jsx)(a.Z, {
                                      onClick: () => {
                                        (w(), k());
                                      },
                                      children: "View Reward",
                                    }),
                                    (0, o.jsx)("span", {
                                      className: "cursor-pointer underline",
                                      onClick: () => w(),
                                      children: y,
                                    }),
                                  ],
                                })
                              : (0, o.jsxs)(o.Fragment, {
                                  children: [
                                    (0, o.jsxs)("div", {
                                      className:
                                        "mb-4 flex flex-col items-center gap-6",
                                      children: [
                                        (0, o.jsx)(a.Z, {
                                          onClick: () => checkForSuccess(),
                                          disabled: D,
                                          children: D ? "Checking..." : b,
                                        }),
                                        (0, o.jsx)("span", {
                                          className: "cursor-pointer underline",
                                          onClick: () => w(),
                                          children: y,
                                        }),
                                      ],
                                    }),
                                    (0, o.jsx)("p", {
                                      className: "".concat(
                                        T ? "" : "invisible ",
                                        " error-message text-center",
                                      ),
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
          (([c, u, m] = x.then ? (await x)() : x), n());
        } catch (e) {
          n(e);
        }
      });
    },
    94778: function (e, t, l) {
      "use strict";
      l.a(e, async function (e, n) {
        try {
          l.d(t, {
            Z: function () {
              return PuzzleRoom;
            },
          });
          var o = l(97458),
            r = l(52983),
            s = l(68956),
            i = l.n(s),
            a = l(14322),
            c = l(14790),
            d = l(67320),
            u = l(26727),
            f = l(42897),
            m = l(83357),
            x = l(36049),
            p = l(77176),
            h = l(20102),
            g = l(22668),
            v = l(53864),
            b = l(58594),
            y = e([c, u, h]);
          function PuzzleRoom(e) {
            var t, l, n, s, y, j, w, N, z, k, S, I, R, T, C, D, L;
            let {
              room: O,
              roomId: Z,
              activeRoomIndex: P,
              moveToNextRoom: _,
              onRoomCompleted: E,
            } = e;
            if (!O || !O.tombDoor || !O.laraCroft || !O.puzzleBackground)
              return null;
            let F = (0, a.useRouter)(),
              { isLoggedIn: B, userData: M } = (0, h.S)(),
              W = null === (t = O.tombDoor) || void 0 === t ? void 0 : t.fields,
              U = W.closedImage,
              V = W.openImage,
              G = null !== (I = W.title) && void 0 !== I ? I : "Closed Door",
              A = null !== (R = W.title) && void 0 !== R ? R : "Open Door",
              H =
                null === (l = O.laraCroft) || void 0 === l ? void 0 : l.fields,
              J = H.image,
              q = O.laraShift,
              X = "";
            "Left" === q
              ? (X = "-translate-x-1/2")
              : "Right" === q && (X = "translate-x-1/2");
            let Y =
                null === (n = O.puzzleBackground) || void 0 === n
                  ? void 0
                  : n.fields,
              K = O.showCountdown,
              Q = O.unlockDateTime,
              $ = null !== (T = O.countdownMessage) && void 0 !== T ? T : "",
              [ee, et] = (0, r.useState)(!1),
              [el, en] = (0, r.useState)(!1),
              [eo, er] = (0, r.useState)(),
              [es, ei] = (0, r.useState)(!1),
              [ea, ec] = (0, r.useState)(new Date(Q) < new Date()),
              [ed, eu] = (0, r.useState)(!1),
              ef = (0, r.useMemo)(
                () => (ea ? O.glyphOptions.filter((e) => null != e) : []),
                [ea, O.glyphOptions],
              ),
              em = (0, r.useRef)(null),
              ex = (0, r.useRef)(null),
              ep = (0, r.useRef)(null),
              eh = (0, r.useRef)(null),
              eg = (0, r.useRef)(null),
              ev = (0, r.useRef)(null),
              eb = (0, r.useRef)(null),
              ey = (0, r.useRef)(null),
              ej = (0, r.useRef)(null),
              ew = (0, r.useRef)(null),
              eN = (0, r.useRef)(null);
            return (
              (0, x.V)(
                () => {
                  ej.current &&
                    ew.current &&
                    p.Z.fromTo(
                      [ej.current, ew.current],
                      { opacity: 0 },
                      { opacity: 1, stagger: 0.5, delay: 0.8, overwrite: !0 },
                    );
                },
                { scope: em, dependencies: [P] },
              ),
              (0, x.V)(
                () => {
                  p.Z.timeline({
                    scrollTrigger: {
                      trigger: em.current,
                      start: "top bottom",
                      once: !0,
                      invalidateOnRefresh: !0,
                    },
                  }).fromTo(
                    ex.current,
                    { opacity: 0 },
                    { opacity: 1, duration: 2 },
                  );
                },
                { scope: em, dependencies: [P] },
              ),
              (0, x.V)(
                () => {
                  if (el && ep.current && eg.current) {
                    let e = p.Z.timeline()
                      .to(ep.current, {
                        opacity: 0,
                        duration: 1,
                        ease: "power2.inOut",
                      })
                      .to([eg.current, eh.current], {
                        scale: 10,
                        duration: 1,
                        ease: "power2.inOut",
                      })
                      .to(
                        ev.current,
                        { opacity: 0, duration: 0.6, ease: "power2.inOut" },
                        "<",
                      )
                      .to(eb.current, {
                        opacity: 1,
                        duration: 1,
                        ease: "power2.inOut",
                      })
                      .to(
                        ey.current,
                        {
                          scale: 1,
                          duration: 1,
                          ease: "power2.inOut",
                          onStart: () => {
                            ei(!0);
                          },
                        },
                        "<+=0.3",
                      );
                    eN.current = e;
                  }
                },
                { dependencies: [el, ep, eg, ev, eb] },
              ),
              (0, r.useEffect)(() => {
                (async function () {
                  if (B)
                    try {
                      var e;
                      let t = sessionStorage.getItem("pendingPuzzleSolved"),
                        l = !1;
                      if (t) {
                        let { roomId: e } = JSON.parse(t);
                        (console.log(
                          "[PuzzleRoom] Processing pending puzzle for room "
                            .concat(e, ", current room: ")
                            .concat(Z),
                        ),
                          (l = e === Z));
                      }
                      let n = await fetch("/api/puzzle/completed-rooms"),
                        o = await n.json(),
                        r =
                          (null === (e = o.data) || void 0 === e
                            ? void 0
                            : e.completedRoomIds) || [],
                        s = r.includes(Z);
                      if (l) {
                        (sessionStorage.removeItem("pendingPuzzleSolved"),
                          console.log(
                            "[PuzzleRoom] Granting reward for pending puzzle...",
                          ));
                        let e = await fetch("/api/puzzle/grant-reward", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ roomId: Z }),
                          }),
                          t = await e.json();
                        t.data
                          ? (console.log(
                              "[PuzzleRoom] Reward granted successfully, showing popup",
                            ),
                            er(t.data.rewardImageUrl),
                            en(!0),
                            eu(!0),
                            E(Z))
                          : console.error(
                              "[PuzzleRoom] Failed to grant reward - no data in response",
                              t,
                            );
                      } else if (s) {
                        let e = await fetch("/api/puzzle/grant-reward", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ roomId: Z }),
                          }),
                          t = await e.json();
                        t.data && (er(t.data.rewardImageUrl), eu(!0));
                      } else eu(!1);
                    } catch (e) {
                      console.error(
                        "[PuzzleRoom] Error initializing room state:",
                        e,
                      );
                    }
                })();
              }, [B, Z, E]),
              (0, r.useEffect)(() => {
                if (!ea && K) {
                  var e;
                  (0, b.sendGTMEvent)({
                    event: "challenge_locked_view",
                    playFabId:
                      (null == M
                        ? void 0
                        : null === (e = M.accountInfo) || void 0 === e
                          ? void 0
                          : e.playFabId) || null,
                    roomId: Z,
                    puzzleId: Z,
                  });
                }
              }, [
                ea,
                K,
                Z,
                null == M
                  ? void 0
                  : null === (s = M.accountInfo) || void 0 === s
                    ? void 0
                    : s.playFabId,
              ]),
              (0, o.jsxs)(o.Fragment, {
                children: [
                  (0, o.jsxs)("div", {
                    ref: em,
                    className:
                      "relative z-10 flex flex-1 flex-col justify-between",
                    children: [
                      (0, o.jsx)("div", {
                        className:
                          "absolute inset-0 block h-1/3 bg-gradient-to-b from-trueblack md:hidden",
                      }),
                      (0, o.jsxs)("div", {
                        className:
                          "relative px-4 pt-2 md:mx-auto md:max-w-2xl md:rounded-sm md:py-12",
                        children: [
                          (0, o.jsx)("div", {
                            className:
                              "absolute left-1/2 top-1/2 hidden h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-trueblack to-60% md:block",
                          }),
                          !el &&
                            (ea
                              ? (0, o.jsxs)("div", {
                                  className: "relative z-10",
                                  children: [
                                    (0, o.jsx)("h2", {
                                      ref: ej,
                                      className:
                                        "fade-in mb-2 text-center text-3xl font-semibold",
                                      children: O.loreHeadlineUnlocked,
                                    }),
                                    (0, o.jsx)("p", {
                                      ref: ew,
                                      className:
                                        "fade-in text-center text-sm md:text-lg",
                                      children: O.loreDescriptionUnlocked,
                                    }),
                                  ],
                                })
                              : (0, o.jsxs)("div", {
                                  className: "relative z-10",
                                  children: [
                                    (0, o.jsx)("h2", {
                                      ref: ej,
                                      className:
                                        "fade-in mb-2 text-center text-3xl font-semibold",
                                      children: O.loreHeadlineLocked,
                                    }),
                                    (0, o.jsx)("p", {
                                      ref: ew,
                                      className:
                                        "fade-in text-center text-sm md:text-lg",
                                      children: O.loreDescriptionLocked,
                                    }),
                                  ],
                                })),
                        ],
                      }),
                      !ea &&
                        K &&
                        (0, o.jsxs)("div", {
                          ref: ex,
                          className:
                            "relative z-50 px-4 pb-16 pt-24 md:absolute md:bottom-0 md:left-0 md:right-0",
                          children: [
                            (0, o.jsx)("div", {
                              className:
                                "absolute bottom-0 left-0 right-0 h-[150%] w-full bg-gradient-to-t from-trueblack",
                            }),
                            (0, o.jsxs)("div", {
                              className: "relative z-10 space-y-3",
                              children: [
                                (0, o.jsx)(d.Z, {
                                  unlockDateTime: Q,
                                  isUnlocked: ea,
                                  message: $,
                                  unlockPuzzle: () => ec(!0),
                                }),
                                O.allowNotify &&
                                  !B &&
                                  (0, o.jsx)("div", {
                                    className: "flex justify-center",
                                    children: (0, o.jsx)(f.Z, {
                                      variant: "normal",
                                      onClick: () => {
                                        ((0, g.OR)("/challenge-tomb"),
                                          (window.location.href =
                                            "/registration"));
                                      },
                                      children: O.notifyButtonText,
                                    }),
                                  }),
                              ],
                            }),
                          ],
                        }),
                      ea &&
                        !el &&
                        (0, o.jsx)("div", {
                          className: "my-12",
                          children: (0, o.jsx)(m.Z, {
                            onUnlock: () => et(!0),
                            overlayText:
                              null !== (C = O.puzzleSliderText) && void 0 !== C
                                ? C
                                : "Start the Puzzle",
                            id: "vaultDoorSlider",
                          }),
                        }),
                    ],
                  }),
                  U &&
                    (null === (y = U.fields.file) || void 0 === y
                      ? void 0
                      : y.url) &&
                    (0, o.jsxs)(o.Fragment, {
                      children: [
                        (0, o.jsx)("div", {
                          className:
                            "absolute inset-0 z-[7] h-full w-1/3 bg-gradient-to-r from-trueblack to-75% opacity-75",
                        }),
                        (0, o.jsx)("div", {
                          className:
                            "absolute right-0 top-0 z-[7] h-full w-1/3 bg-gradient-to-l from-trueblack to-75% opacity-75",
                        }),
                        (0, o.jsx)(i(), {
                          ref: eh,
                          src: (0, c.Wx)(
                            null === (j = U.fields.file) || void 0 === j
                              ? void 0
                              : j.url,
                          ),
                          alt: G,
                          className: "absolute inset-0 z-0 w-full object-cover",
                          priority: !0,
                          fill: !0,
                        }),
                      ],
                    }),
                  (0, o.jsxs)("div", {
                    className:
                      "absolute left-1/2 top-0 aspect-square h-full -translate-x-1/2",
                    children: [
                      U &&
                        (null === (w = U.fields.file) || void 0 === w
                          ? void 0
                          : w.url) &&
                        (0, o.jsx)(i(), {
                          ref: ep,
                          src: (0, c.Wx)(
                            null === (N = U.fields.file) || void 0 === N
                              ? void 0
                              : N.url,
                          ),
                          alt: G,
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
                      V &&
                        (null === (z = V.fields.file) || void 0 === z
                          ? void 0
                          : z.url) &&
                        (0, o.jsx)(i(), {
                          ref: eg,
                          src: (0, c.Wx)(
                            null === (k = V.fields.file) || void 0 === k
                              ? void 0
                              : k.url,
                          ),
                          alt: A,
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
                      (0, o.jsx)("div", {
                        className:
                          "absolute bottom-0 left-1/2 z-20 aspect-[9/16] w-1/4 -translate-x-1/2",
                        children: (0, o.jsx)(i(), {
                          ref: ev,
                          src: (0, c.Wx)(
                            null == J
                              ? void 0
                              : null === (S = J.fields.file) || void 0 === S
                                ? void 0
                                : S.url,
                          ),
                          alt: "An image of Lara Croft facing the challenge tomb ahead.",
                          priority: !0,
                          fill: !0,
                          className: "".concat(X),
                        }),
                      }),
                    ],
                  }),
                  ea &&
                    (0, o.jsx)(u.Z, {
                      open: ee,
                      close: () => {
                        et(!1);
                      },
                      glyphOptions: ef,
                      puzzleHeadline:
                        null !== (D = O.puzzleHeadline) && void 0 !== D
                          ? D
                          : "",
                      puzzleDescription:
                        null !== (L = O.puzzleDescription) && void 0 !== L
                          ? L
                          : "",
                      puzzleBackground: null == Y ? void 0 : Y.image,
                      roomId: Z,
                      isLoggedIn: B,
                      solvePuzzle: (e) => {
                        (en(!0), er(e), B && E(Z));
                      },
                      puzzleSolveButtonText: O.puzzleSolveButtonText,
                      puzzleBackButtonText: O.puzzleBackButtonText,
                      isRoomCompleted: ed,
                      viewReward: () => {
                        en(!0);
                      },
                    }),
                  el &&
                    (0, o.jsxs)("div", {
                      ref: eb,
                      className:
                        "fixed inset-0 z-40 flex h-full w-screen flex-col items-center justify-center bg-trueblack/90 px-8 opacity-0 lg:aspect-video",
                      children: [
                        (0, o.jsx)("div", {
                          className:
                            "absolute aspect-[9/16] h-full md:aspect-video",
                          children: (0, o.jsx)(v.R, {
                            responsive: !0,
                            playAnimation: es,
                          }),
                        }),
                        (0, o.jsx)("div", {
                          ref: ey,
                          className:
                            "relative mb-6 size-48 flex-none scale-0 overflow-hidden rounded-full bg-trueblack shadow-[0_0_32px_16px_rgba(234,179,8,0.4)]",
                          children: eo
                            ? (0, o.jsx)(i(), {
                                src: eo,
                                alt: "Reward",
                                fill: !0,
                                className: "object-cover",
                              })
                            : (0, o.jsx)(i(), {
                                src: "/images/tombraider-logo.webp",
                                alt: "Tombraider Logo",
                                fill: !0,
                                className: "object-contain p-4",
                              }),
                        }),
                        (0, o.jsx)("div", {
                          className:
                            "relative z-20 flex max-w-lg flex-col items-center",
                          children: B
                            ? (0, o.jsxs)(o.Fragment, {
                                children: [
                                  (0, o.jsx)("h2", {
                                    className:
                                      "mb-2 text-center text-2xl font-bold",
                                    children: O.congratsHeadlineLoggedIn,
                                  }),
                                  (0, o.jsx)("p", {
                                    className: "text-center text-sm",
                                    children: O.congratsDescriptionLoggedIn,
                                  }),
                                  (0, o.jsx)(f.Z, {
                                    className: "my-6",
                                    onClick: () => {
                                      F.push("/account");
                                    },
                                    children: O.congratsViewRewardButtonText,
                                  }),
                                  (0, o.jsx)("button", {
                                    className: "cursor-pointer underline",
                                    onClick: _,
                                    children:
                                      O.congratsContinuePlayingButtonText,
                                  }),
                                ],
                              })
                            : (0, o.jsxs)(o.Fragment, {
                                children: [
                                  (0, o.jsx)("h2", {
                                    className:
                                      "mb-2 text-center text-2xl font-bold",
                                    children: O.congratsHeadlineLoggedOut,
                                  }),
                                  (0, o.jsx)("p", {
                                    className: "text-center text-sm",
                                    children: O.congratsDescriptionLoggedOut,
                                  }),
                                  (0, o.jsx)(f.Z, {
                                    className: "my-6",
                                    onClick: () => {
                                      ((0, g.OR)("/challenge-tomb"),
                                        (window.location.href =
                                          "/registration"));
                                    },
                                    children: O.congratsRegisterButtonText,
                                  }),
                                  (0, o.jsxs)("h5", {
                                    children: [
                                      O.congratsBeforeLoginText,
                                      " ",
                                      (0, o.jsx)("a", {
                                        className: "underline",
                                        href: "/login",
                                        onClick: () =>
                                          (0, g.OR)("/challenge-tomb"),
                                        children: O.congratsLoginText,
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
            );
          }
          (([c, u, h] = y.then ? (await y)() : y), n());
        } catch (e) {
          n(e);
        }
      });
    },
    20201: function (e, t, l) {
      "use strict";
      l.a(e, async function (e, n) {
        try {
          (l.r(t),
            l.d(t, {
              __N_SSG: function () {
                return p;
              },
              default: function () {
                return ChallengeTombPage;
              },
            }));
          var o = l(97458),
            r = l(52983),
            s = l(36049),
            i = l(77176),
            a = l(14647),
            c = l(96854),
            d = l(94778),
            u = l(57391),
            f = l(39378),
            m = l.n(f),
            x = e([a, c, d]);
          [a, c, d] = x.then ? (await x)() : x;
          var p = !0;
          function ChallengeTombPage(e) {
            let {
                challengeTomb: t,
                websiteSingleton: l,
                navItems: n,
                footerSocialLinks: f,
                signUpBanner: x,
              } = e,
              p = (0, r.useRef)(null),
              [h, g] = (0, r.useState)(0),
              v = (0, r.useRef)(0),
              [b, y] = (0, r.useState)([]),
              j = (0, r.useRef)(!1);
            ((0, r.useEffect)(() => {
              let e = sessionStorage.getItem("pendingPuzzleSolved");
              if (e && (null == t ? void 0 : t.rooms))
                try {
                  let { roomId: l } = JSON.parse(e),
                    n = t.rooms.findIndex(
                      (e) => (null == e ? void 0 : e.sys.id) === l,
                    );
                  -1 !== n && ((j.current = !0), g(n));
                } catch (e) {
                  console.error("Error parsing pending puzzle data:", e);
                }
            }, [t]),
              (0, r.useEffect)(() => {
                async function fetchCompletedRoomsAndSetInitialRoom() {
                  if (null == t ? void 0 : t.rooms)
                    try {
                      var e;
                      let l = await fetch("/api/puzzle/completed-rooms"),
                        n = await l.json(),
                        o =
                          (null === (e = n.data) || void 0 === e
                            ? void 0
                            : e.completedRoomIds) || [];
                      if ((y(o), j.current || 0 === o.length)) return;
                      let r = -1;
                      for (let e = 0; e < t.rooms.length; e++) {
                        let l = t.rooms[e];
                        if (l && !o.includes(l.sys.id)) {
                          r = e;
                          break;
                        }
                      }
                      if (-1 !== r) g(r);
                      else {
                        let e = t.rooms.length - 1;
                        g(e);
                      }
                    } catch (e) {
                      console.error("Error fetching completed rooms:", e);
                    }
                }
                let e = sessionStorage.getItem("pendingPuzzleSolved");
                e || fetchCompletedRoomsAndSetInitialRoom();
              }, [t]));
            let moveToNextRoom = () => {
              i.Z.to(".room-container-".concat(h), {
                opacity: 0,
                duration: 0.4,
                ease: "power2.inOut",
                onComplete: () => {
                  (null == t ? void 0 : t.rooms[h + 1]) ? g(h + 1) : g(0);
                },
              });
            };
            return (
              (0, s.V)(
                () => {
                  i.Z.set(".room-container-".concat(h), {
                    display: "flex",
                    opacity: 1,
                  });
                },
                { scope: p },
              ),
              (0, s.V)(
                () => {
                  if (v.current !== h) {
                    let e = i.Z.timeline()
                      .to(".room-container-".concat(v.current), {
                        opacity: 0,
                        duration: 0.4,
                        ease: "power2.inOut",
                      })
                      .set(".room-container-".concat(v.current), {
                        display: "none",
                      })
                      .set(".room-container-".concat(h), { display: "flex" })
                      .to(".room-container-".concat(h), {
                        opacity: 1,
                        duration: 0.4,
                        ease: "power2.inOut",
                      });
                    (e.play(), (v.current = h));
                  }
                },
                { scope: p, dependencies: [h] },
              ),
              (0, o.jsxs)("div", {
                ref: p,
                className: "relative bg-trueblack",
                children: [
                  (0, o.jsx)(a.ZP, { navItems: n, signUpBanner: x }),
                  (0, o.jsxs)("div", {
                    className:
                      "relative mt-20 flex h-[calc(100svh-5rem)] flex-col items-center overflow-hidden",
                    children: [
                      (0, o.jsx)("div", {
                        className:
                          "absolute inset-0 z-10 h-60 w-full bg-gradient-to-b from-trueblack",
                      }),
                      (0, o.jsx)("div", {
                        className:
                          "absolute bottom-0 left-0 z-10 h-60 w-full bg-gradient-to-t from-trueblack",
                      }),
                      (0, o.jsxs)("div", {
                        className: "flex w-full flex-1 flex-col",
                        children: [
                          (null == t ? void 0 : t.rooms) &&
                            (0, o.jsx)(u.Z, {
                              rooms: m().compact(
                                t.rooms.map((e) =>
                                  null == e ? void 0 : e.fields,
                                ),
                              ),
                              activeRoomIndex: h,
                              onRoomClick: (e) => {
                                if (e === h || !(null == t ? void 0 : t.rooms))
                                  return;
                                let l = -1;
                                for (let e = 0; e < t.rooms.length; e++) {
                                  let n = t.rooms[e];
                                  if (!(null == n ? void 0 : n.fields))
                                    continue;
                                  let o =
                                    new Date(n.fields.unlockDateTime) <
                                    new Date();
                                  if (!o) {
                                    l = e;
                                    break;
                                  }
                                  let r = b.includes(n.sys.id);
                                  if (!r) {
                                    l = e;
                                    break;
                                  }
                                }
                                (-1 !== l && e > l) ||
                                  i.Z.to(".room-container-".concat(h), {
                                    opacity: 0,
                                    duration: 0.4,
                                    ease: "power2.inOut",
                                    onComplete: () => {
                                      g(e);
                                    },
                                  });
                              },
                              firstLockedIndex: t.rooms.findIndex(
                                (e) =>
                                  (null == e ? void 0 : e.fields) &&
                                  new Date(e.fields.unlockDateTime) >=
                                    new Date(),
                              ),
                              completedRoomIds: b,
                              roomIds: t.rooms.map(
                                (e) => (null == e ? void 0 : e.sys.id) || "",
                              ),
                            }),
                          null == t
                            ? void 0
                            : t.rooms.map((e, t) =>
                                (0, o.jsx)(
                                  "div",
                                  {
                                    className: "room-container-".concat(
                                      t,
                                      " hidden h-full flex-col opacity-0",
                                    ),
                                    children:
                                      e &&
                                      h === t &&
                                      (0, o.jsx)(
                                        d.Z,
                                        {
                                          room: null == e ? void 0 : e.fields,
                                          roomId: e.sys.id,
                                          activeRoomIndex: h,
                                          moveToNextRoom: moveToNextRoom,
                                          onRoomCompleted: (e) => {
                                            y((t) => [...t, e]);
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
                  (0, o.jsx)(c.Z, {
                    websiteSingleton: l,
                    navItems: n,
                    footerSocialLinks: f,
                  }),
                ],
              })
            );
          }
          n();
        } catch (e) {
          n(e);
        }
      });
    },
    77176: function (e, t, l) {
      "use strict";
      var n = l(6616),
        o = l(36049),
        r = l(67392),
        s = l(63982),
        i = l(29333),
        a = l(63686),
        c = l(38725);
      (n.p8.registerPlugin(
        o.V,
        r.Flip,
        s.ScrollTrigger,
        i.ScrollToPlugin,
        a.ScrollSmoother,
        c.SplitText,
      ),
        (t.Z = n.p8));
    },
  },
  function (e) {
    (e.O(0, [46, 369, 956, 672, 34, 26, 647, 790, 774, 888, 179], function () {
      return e((e.s = 74155));
    }),
      (_N_E = e.O()));
  },
]);
