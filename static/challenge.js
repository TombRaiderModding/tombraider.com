(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6122],
  {
    1620: (e, t, l) => {
      "use strict";
      l.a(e, async (e, s) => {
        try {
          l.d(t, { A: () => x });
          var r = l(2183),
            n = l(36439),
            a = l(96006),
            i = l.n(a),
            o = l(15711),
            c = l(73985),
            d = l(26947),
            u = l(92446),
            m = l(95344),
            f = l(99435),
            p = e([c, u, f]);
          function x(e) {
            var t, l, s;
            let {
                open: a,
                glyphOptions: p,
                roomId: x,
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
              { userData: S } = (0, f.u)(),
              [I, R] = (0, n.useState)(() =>
                p.length > 0
                  ? [p[0].sys.id, p[0].sys.id, p[0].sys.id, p[0].sys.id]
                  : ["", "", "", ""],
              ),
              [_, A] = (0, n.useState)(!1),
              [L, C] = (0, n.useState)(!1),
              T = (0, n.useRef)(null);
            async function O() {
              (C(!0), A(!1));
              try {
                var e, t, l;
                let s = await fetch("/api/puzzle/validate-solution", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ roomId: x, answer: I }),
                  }),
                  r = await s.json();
                if (!s.ok) throw Error("Validation failed");
                (null == (e = r.data) ? void 0 : e.isCorrect)
                  ? (A(!1),
                    j ||
                      sessionStorage.setItem(
                        "pendingPuzzleSolved",
                        JSON.stringify({ roomId: x, timestamp: Date.now() }),
                      ),
                    N(r.data.rewardImageUrl),
                    w(),
                    (0, m.sendGTMEvent)({
                      event: "challenge_solve",
                      playFabId:
                        (null == S || null == (t = S.accountInfo)
                          ? void 0
                          : t.playFabId) || null,
                      roomId: x,
                      puzzleId: x,
                    }))
                  : (A(!0),
                    (0, m.sendGTMEvent)({
                      event: "challenge_incorrect_answer",
                      playFabId:
                        (null == S || null == (l = S.accountInfo)
                          ? void 0
                          : l.playFabId) || null,
                      roomId: x,
                      puzzleId: x,
                    }),
                    d.A.timeline()
                      .to(".error-message", { x: 10, duration: 0.1 })
                      .to(".error-message", { x: -10, duration: 0.1 })
                      .to(".error-message", { x: 10, duration: 0.1 })
                      .to(".error-message", { x: -10, duration: 0.1 })
                      .to(".error-message", { x: 0, duration: 0.1 })
                      .play());
              } catch (e) {
                (console.error("Error validating puzzle solution:", e), A(!0));
              } finally {
                C(!1);
              }
            }
            return ((0, n.useEffect)(() => {
              if (a) {
                var e;
                (document.body.classList.add("overflow-hidden"),
                  T.current && T.current.focus(),
                  (0, m.sendGTMEvent)({
                    event: "challenge_start",
                    playFabId:
                      (null == S || null == (e = S.accountInfo)
                        ? void 0
                        : e.playFabId) || null,
                    roomId: x,
                    puzzleId: x,
                  }));
              } else (A(!1), document.body.classList.remove("overflow-hidden"));
              return () => {
                document.body.classList.remove("overflow-hidden");
              };
            }, [
              a,
              x,
              null == S || null == (t = S.accountInfo) ? void 0 : t.playFabId,
            ]),
            a)
              ? (0, r.jsxs)("div", {
                  children: [
                    (0, r.jsx)("button", {
                      onClick: () => {
                        var e;
                        ((0, m.sendGTMEvent)({
                          event: "challenge_close",
                          playFabId:
                            (null == S || null == (e = S.accountInfo)
                              ? void 0
                              : e.playFabId) || null,
                          roomId: x,
                          puzzleId: x,
                        }),
                          w());
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
                                children: h,
                              }),
                              (0, r.jsx)("p", {
                                className: "mb-12 text-center text-sm md:mb-20",
                                children: g,
                              }),
                              (0, r.jsxs)("div", {
                                className: "relative w-full",
                                children: [
                                  (null == v || null == (l = v.fields.file)
                                    ? void 0
                                    : l.url) &&
                                    (0, r.jsx)(i(), {
                                      width: "1440",
                                      height: "720",
                                      alt:
                                        "string" == typeof v.fields.description
                                          ? v.fields.description
                                          : "A puzzle background",
                                      src: (0, u._c)(
                                        "string" ==
                                          typeof (null == (s = v.fields.file)
                                            ? void 0
                                            : s.url)
                                          ? v.fields.file.url
                                          : void 0,
                                      ),
                                      className:
                                        "absolute left-1/2 top-1/2 -z-10 w-full -translate-x-1/2 -translate-y-1/2 object-contain",
                                      priority: !0,
                                    }),
                                  (0, r.jsx)("div", {
                                    className:
                                      "flex w-full pl-[3.5%] pr-[4.15%]",
                                    children: I.map(function (e, t) {
                                      return (0, r.jsx)(
                                        c.A,
                                        {
                                          ref: 0 === t ? T : null,
                                          selectedGlyph: I[t],
                                          updatePuzzleAnswer: (e) =>
                                            R((l) => {
                                              let s = [...l];
                                              return ((s[t] = e), s);
                                            }),
                                          glyphOptions: p,
                                        },
                                        t,
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
                            children: z
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
                                        (w(), k());
                                      },
                                      children: "View Reward",
                                    }),
                                    (0, r.jsx)("span", {
                                      className: "cursor-pointer underline",
                                      onClick: () => w(),
                                      children: y,
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
                                          onClick: () => O(),
                                          disabled: L,
                                          children: L ? "Checking..." : b,
                                        }),
                                        (0, r.jsx)("span", {
                                          className: "cursor-pointer underline",
                                          onClick: () => w(),
                                          children: y,
                                        }),
                                      ],
                                    }),
                                    (0, r.jsx)("p", {
                                      className: "".concat(
                                        _ ? "" : "invisible ",
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
          (([c, u, f] = p.then ? (await p)() : p), s());
        } catch (e) {
          s(e);
        }
      });
    },
    4243: (e, t, l) => {
      "use strict";
      l.a(e, async (e, s) => {
        try {
          l.d(t, { OU: () => c, Om: () => u, Q0: () => d, _8: () => o });
          var r = l(92446),
            n = l(2371),
            a = e([r]);
          r = (a.then ? (await a)() : a)[0];
          let m = "".concat(n.W, "/#organization"),
            f = "".concat(n.W, "/#website"),
            p = "Tomb Raider",
            x = "https://en.wikipedia.org/wiki/Tomb_Raider";
          function i(e) {
            var t, l;
            let s = (0, r._c)(
              null == (l = e.footerLogo) || null == (t = l.fields.file)
                ? void 0
                : t.url,
            );
            return s ? { logo: { "@type": "ImageObject", url: s } } : {};
          }
          function o(e, t) {
            return {
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": m,
              name: p,
              url: n.W,
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
              url: n.W,
              publisher: { "@id": m },
            };
          }
          function d(e, t) {
            var l, s, a, o;
            let c = ""
                .concat(n.W, "/news/")
                .concat(null == (l = e.category) ? void 0 : l.fields.slug, "/")
                .concat(e.slug),
              d = (0, r._c)(
                null == (a = e.headerImage) || null == (s = a.fields.file)
                  ? void 0
                  : s.url,
              ),
              u = { "@type": "Organization", "@id": m, name: p, ...i(t) };
            return {
              "@context": "https://schema.org",
              "@type": "NewsArticle",
              headline: e.title,
              description: e.excerpt || e.socialMediaShareDescription,
              ...(d ? { image: [d] } : {}),
              datePublished: e.publishDate,
              dateModified: null != (o = e.sysUpdatedAt) ? o : e.publishDate,
              url: c,
              mainEntityOfPage: { "@type": "WebPage", "@id": c },
              author: u,
              publisher: u,
            };
          }
          function u(e) {
            var t, l, s, a, i, o, c, d;
            let u = ""
                .concat(n.W, "/products/")
                .concat(null == (t = e.category) ? void 0 : t.fields.slug, "/")
                .concat(e.slug),
              m = (0, r._c)(
                null !=
                  (d =
                    null == (s = e.titleLogo) || null == (l = s.fields.file)
                      ? void 0
                      : l.url)
                  ? d
                  : null == (c = e.galleryEntries) ||
                      null == (o = c[0]) ||
                      null == (i = o.fields.image) ||
                      null == (a = i.fields.file)
                    ? void 0
                    : a.url,
              );
            return {
              "@context": "https://schema.org",
              "@type": "VideoGame",
              name: e.title,
              url: u,
              ...(e.shortDescription
                ? { description: e.shortDescription }
                : {}),
              ...(m ? { image: m } : {}),
              ...(e.releaseDate ? { datePublished: e.releaseDate } : {}),
              ...(e.publisher
                ? { publisher: { "@type": "Organization", name: e.publisher } }
                : {}),
              ...(e.esrbRating
                ? { contentRating: "ESRB ".concat(e.esrbRating) }
                : {}),
              isPartOf: {
                "@type": "VideoGameSeries",
                name: "Tomb Raider",
                sameAs: x,
              },
            };
          }
          s();
        } catch (e) {
          s(e);
        }
      });
    },
    7345: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => a });
      var s = l(2183),
        r = l(11677),
        n = l.n(r);
      let a = (e) => {
        let { href: t, children: l, className: r, ...a } = e;
        return "string" == typeof t && t.startsWith("http")
          ? (0, s.jsx)("a", {
              href: t,
              target: "_blank",
              rel: "noopener noreferrer",
              className: r,
              ...a,
              children: l,
            })
          : (0, s.jsx)(n(), { className: r, href: t, ...a, children: l });
      };
    },
    13188: (e, t, l) => {
      "use strict";
      l.a(e, async (e, s) => {
        try {
          (l.r(t), l.d(t, { __N_SSG: () => h, default: () => g }));
          var r = l(2183),
            n = l(91134),
            a = l(36439),
            i = l(16890),
            o = l(26947),
            c = l(95216),
            d = l(75894),
            u = l(31081),
            m = l(71003),
            f = l(80707),
            p = l.n(f),
            x = e([c, d, u]);
          [c, d, u] = x.then ? (await x)() : x;
          var h = !0;
          function g(e) {
            let {
                challengeTomb: t,
                websiteSingleton: l,
                navItems: s,
                footerSocialLinks: f,
                signUpBanner: x,
              } = e,
              h = (0, a.useRef)(null),
              [g, v] = (0, a.useState)(0),
              b = (0, a.useRef)(0),
              [y, j] = (0, a.useState)([]),
              w = (0, a.useRef)(!1);
            ((0, a.useEffect)(() => {
              let e = sessionStorage.getItem("pendingPuzzleSolved");
              if (e && (null == t ? void 0 : t.rooms))
                try {
                  let { roomId: l } = JSON.parse(e),
                    s = t.rooms.findIndex(
                      (e) => (null == e ? void 0 : e.sys.id) === l,
                    );
                  -1 !== s && ((w.current = !0), v(s));
                } catch (e) {
                  console.error("Error parsing pending puzzle data:", e);
                }
            }, [t]),
              (0, a.useEffect)(() => {
                async function e() {
                  if (null == t ? void 0 : t.rooms)
                    try {
                      var e;
                      let l = await fetch("/api/puzzle/completed-rooms"),
                        s =
                          (null == (e = (await l.json()).data)
                            ? void 0
                            : e.completedRoomIds) || [];
                      if ((j(s), w.current || 0 === s.length)) return;
                      let r = -1;
                      for (let e = 0; e < t.rooms.length; e++) {
                        let l = t.rooms[e];
                        if (l && !s.includes(l.sys.id)) {
                          r = e;
                          break;
                        }
                      }
                      if (-1 !== r) v(r);
                      else {
                        let e = t.rooms.length - 1;
                        v(e);
                      }
                    } catch (e) {
                      console.error("Error fetching completed rooms:", e);
                    }
                }
                sessionStorage.getItem("pendingPuzzleSolved") || e();
              }, [t]));
            let N = () => {
              o.A.to(".room-container-".concat(g), {
                opacity: 0,
                duration: 0.4,
                ease: "power2.inOut",
                onComplete: () => {
                  (null == t ? void 0 : t.rooms[g + 1]) ? v(g + 1) : v(0);
                },
              });
            };
            return (
              (0, i.L)(
                () => {
                  o.A.set(".room-container-".concat(g), {
                    display: "flex",
                    opacity: 1,
                  });
                },
                { scope: h },
              ),
              (0, i.L)(
                () => {
                  b.current !== g &&
                    (o.A.timeline()
                      .to(".room-container-".concat(b.current), {
                        opacity: 0,
                        duration: 0.4,
                        ease: "power2.inOut",
                      })
                      .set(".room-container-".concat(b.current), {
                        display: "none",
                      })
                      .set(".room-container-".concat(g), { display: "flex" })
                      .to(".room-container-".concat(g), {
                        opacity: 1,
                        duration: 0.4,
                        ease: "power2.inOut",
                      })
                      .play(),
                    (b.current = g));
                },
                { scope: h, dependencies: [g] },
              ),
              (0, r.jsxs)("div", {
                ref: h,
                className: "bg-trueblack relative",
                children: [
                  (0, r.jsx)(n.A, {
                    description:
                      "Enter the Tomb Raider Challenge Tomb. Solve puzzles, decrypt ciphers, collect hidden relics, and unlock exclusive rewards in this interactive fan experience.",
                  }),
                  (0, r.jsx)(c.Ay, { navItems: s, signUpBanner: x }),
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
                          (null == t ? void 0 : t.rooms) &&
                            (0, r.jsx)(m.A, {
                              rooms: p().compact(
                                t.rooms.map((e) =>
                                  null == e ? void 0 : e.fields,
                                ),
                              ),
                              activeRoomIndex: g,
                              onRoomClick: (e) => {
                                if (e === g || !(null == t ? void 0 : t.rooms))
                                  return;
                                let l = -1;
                                for (let e = 0; e < t.rooms.length; e++) {
                                  let s = t.rooms[e];
                                  if (
                                    (null == s ? void 0 : s.fields) &&
                                    (!s.fields.isUnlocked ||
                                      !y.includes(s.sys.id))
                                  ) {
                                    l = e;
                                    break;
                                  }
                                }
                                (-1 !== l && e > l) ||
                                  o.A.to(".room-container-".concat(g), {
                                    opacity: 0,
                                    duration: 0.4,
                                    ease: "power2.inOut",
                                    onComplete: () => {
                                      v(e);
                                    },
                                  });
                              },
                              firstLockedIndex: t.rooms.findIndex(
                                (e) =>
                                  (null == e ? void 0 : e.fields) &&
                                  !e.fields.isUnlocked,
                              ),
                              completedRoomIds: y,
                              roomIds: t.rooms.map(
                                (e) => (null == e ? void 0 : e.sys.id) || "",
                              ),
                            }),
                          null == t
                            ? void 0
                            : t.rooms.map((e, t) =>
                                (0, r.jsx)(
                                  "div",
                                  {
                                    className: "room-container-".concat(
                                      t,
                                      " hidden h-full flex-col opacity-0",
                                    ),
                                    children:
                                      e &&
                                      g === t &&
                                      (0, r.jsx)(
                                        u.A,
                                        {
                                          room: null == e ? void 0 : e.fields,
                                          roomId: e.sys.id,
                                          activeRoomIndex: g,
                                          moveToNextRoom: N,
                                          onRoomCompleted: (e) => {
                                            j((t) => [...t, e]);
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
                    websiteSingleton: l,
                    navItems: s,
                    footerSocialLinks: f,
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
    26947: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => d });
      var s = l(41430),
        r = l(16890),
        n = l(23323),
        a = l(93551),
        i = l(3843),
        o = l(4124),
        c = l(12979);
      s.os.registerPlugin(
        r.L,
        n.Flip,
        a.ScrollTrigger,
        i.ScrollToPlugin,
        o.ScrollSmoother,
        c.SplitText,
      );
      let d = s.os;
    },
    31081: (e, t, l) => {
      "use strict";
      l.a(e, async (e, s) => {
        try {
          l.d(t, { A: () => j });
          var r = l(2183),
            n = l(36439),
            a = l(96006),
            i = l.n(a),
            o = l(18652),
            c = l(92446),
            d = l(80895),
            u = l(1620),
            m = l(15711),
            f = l(66767),
            p = l(16890),
            x = l(26947),
            h = l(99435),
            g = l(608),
            v = l(43042),
            b = l(95344),
            y = e([c, u, h]);
          function j(e) {
            var t, l, s, a, y, j, w, N, z, k, S, I, R, _, A, L, C;
            let {
                room: T,
                roomId: O,
                activeRoomIndex: D,
                moveToNextRoom: E,
                onRoomCompleted: P,
              } = e,
              F = (0, o.useRouter)(),
              { isLoggedIn: M, userData: B } = (0, h.u)(),
              U = null == (t = T.tombDoor) ? void 0 : t.fields,
              W = null == U ? void 0 : U.closedImage,
              G = null == U ? void 0 : U.openImage,
              H =
                null != (I = null == U ? void 0 : U.title) ? I : "Closed Door",
              J = null != (R = null == U ? void 0 : U.title) ? R : "Open Door",
              V = null == (l = T.laraCroft) ? void 0 : l.fields,
              q = null == V ? void 0 : V.image,
              Q = T.laraShift,
              X = "";
            "Left" === Q
              ? (X = "-translate-x-1/2")
              : "Right" === Q && (X = "translate-x-1/2");
            let Y = null == (s = T.puzzleBackground) ? void 0 : s.fields,
              K = T.showCountdown,
              Z = null != (_ = T.countdownMessage) ? _ : "",
              [$, ee] = (0, n.useState)(!1),
              [et, el] = (0, n.useState)(!1),
              [es, er] = (0, n.useState)(),
              [en, ea] = (0, n.useState)(!1),
              ei = T.isUnlocked,
              [eo, ec] = (0, n.useState)(!1),
              ed = (0, n.useMemo)(
                () => (ei ? T.glyphOptions.filter((e) => null != e) : []),
                [ei, T.glyphOptions],
              ),
              eu = (0, n.useRef)(null),
              em = (0, n.useRef)(null),
              ef = (0, n.useRef)(null),
              ep = (0, n.useRef)(null),
              ex = (0, n.useRef)(null),
              eh = (0, n.useRef)(null),
              eg = (0, n.useRef)(null),
              ev = (0, n.useRef)(null),
              eb = (0, n.useRef)(null),
              ey = (0, n.useRef)(null),
              ej = (0, n.useRef)(null);
            return ((0, p.L)(
              () => {
                eb.current &&
                  ey.current &&
                  x.A.fromTo(
                    [eb.current, ey.current],
                    { opacity: 0 },
                    { opacity: 1, stagger: 0.5, delay: 0.8, overwrite: !0 },
                  );
              },
              { scope: eu, dependencies: [D] },
            ),
            (0, p.L)(
              () => {
                x.A.timeline({
                  scrollTrigger: {
                    trigger: eu.current,
                    start: "top bottom",
                    once: !0,
                    invalidateOnRefresh: !0,
                  },
                }).fromTo(
                  em.current,
                  { opacity: 0 },
                  { opacity: 1, duration: 2 },
                );
              },
              { scope: eu, dependencies: [D] },
            ),
            (0, p.L)(
              () => {
                et &&
                  ef.current &&
                  ex.current &&
                  (ej.current = x.A.timeline()
                    .to(ef.current, {
                      opacity: 0,
                      duration: 1,
                      ease: "power2.inOut",
                    })
                    .to([ex.current, ep.current], {
                      scale: 10,
                      duration: 1,
                      ease: "power2.inOut",
                    })
                    .to(
                      eh.current,
                      { opacity: 0, duration: 0.6, ease: "power2.inOut" },
                      "<",
                    )
                    .to(eg.current, {
                      opacity: 1,
                      duration: 1,
                      ease: "power2.inOut",
                    })
                    .to(
                      ev.current,
                      {
                        scale: 1,
                        duration: 1,
                        ease: "power2.inOut",
                        onStart: () => {
                          ea(!0);
                        },
                      },
                      "<+=0.3",
                    ));
              },
              { dependencies: [et, ef, ex, eh, eg] },
            ),
            (0, n.useEffect)(() => {
              !(async function () {
                if (M)
                  try {
                    var e;
                    let t = sessionStorage.getItem("pendingPuzzleSolved"),
                      l = !1;
                    if (t) {
                      let { roomId: e } = JSON.parse(t);
                      (console.log(
                        "[PuzzleRoom] Processing pending puzzle for room "
                          .concat(e, ", current room: ")
                          .concat(O),
                      ),
                        (l = e === O));
                    }
                    let s = await fetch("/api/puzzle/completed-rooms"),
                      r = (
                        (null == (e = (await s.json()).data)
                          ? void 0
                          : e.completedRoomIds) || []
                      ).includes(O);
                    if (l) {
                      (sessionStorage.removeItem("pendingPuzzleSolved"),
                        console.log(
                          "[PuzzleRoom] Granting reward for pending puzzle...",
                        ));
                      let e = await fetch("/api/puzzle/grant-reward", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({ roomId: O }),
                        }),
                        t = await e.json();
                      t.data
                        ? (console.log(
                            "[PuzzleRoom] Reward granted successfully, showing popup",
                          ),
                          er(t.data.rewardImageUrl),
                          el(!0),
                          ec(!0),
                          P(O))
                        : console.error(
                            "[PuzzleRoom] Failed to grant reward - no data in response",
                            t,
                          );
                    } else if (r) {
                      let e = await fetch("/api/puzzle/grant-reward", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({ roomId: O }),
                        }),
                        t = await e.json();
                      t.data && (er(t.data.rewardImageUrl), ec(!0));
                    } else ec(!1);
                  } catch (e) {
                    console.error(
                      "[PuzzleRoom] Error initializing room state:",
                      e,
                    );
                  }
              })();
            }, [M, O, P]),
            (0, n.useEffect)(() => {
              if (!ei && K) {
                var e;
                (0, b.sendGTMEvent)({
                  event: "challenge_locked_view",
                  playFabId:
                    (null == B || null == (e = B.accountInfo)
                      ? void 0
                      : e.playFabId) || null,
                  roomId: O,
                  puzzleId: O,
                });
              }
            }, [
              ei,
              K,
              O,
              null == B || null == (a = B.accountInfo) ? void 0 : a.playFabId,
            ]),
            U && V && Y)
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsxs)("div", {
                      ref: eu,
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
                            !et &&
                              (ei
                                ? (0, r.jsxs)("div", {
                                    className: "relative z-10",
                                    children: [
                                      (0, r.jsx)("h2", {
                                        ref: eb,
                                        className:
                                          "fade-in mb-2 text-center text-3xl font-semibold",
                                        children: T.loreHeadlineUnlocked,
                                      }),
                                      (0, r.jsx)("p", {
                                        ref: ey,
                                        className:
                                          "fade-in text-center text-sm md:text-lg",
                                        children: T.loreDescriptionUnlocked,
                                      }),
                                    ],
                                  })
                                : (0, r.jsxs)("div", {
                                    className: "relative z-10",
                                    children: [
                                      (0, r.jsx)("h2", {
                                        ref: eb,
                                        className:
                                          "fade-in mb-2 text-center text-3xl font-semibold",
                                        children: T.loreHeadlineLocked,
                                      }),
                                      (0, r.jsx)("p", {
                                        ref: ey,
                                        className:
                                          "fade-in text-center text-sm md:text-lg",
                                        children: T.loreDescriptionLocked,
                                      }),
                                    ],
                                  })),
                          ],
                        }),
                        !ei &&
                          K &&
                          (0, r.jsxs)("div", {
                            ref: em,
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
                                    msUntilUnlock: T.msUntilUnlock,
                                    isUnlocked: ei,
                                    message: Z,
                                    unlockPuzzle: () => F.reload(),
                                  }),
                                  T.allowNotify &&
                                    !M &&
                                    (0, r.jsx)("div", {
                                      className: "flex justify-center",
                                      children: (0, r.jsx)(m.A, {
                                        variant: "normal",
                                        onClick: () => {
                                          ((0, g.d4)("/challenge-tomb"),
                                            (window.location.href =
                                              "/registration"));
                                        },
                                        children: T.notifyButtonText,
                                      }),
                                    }),
                                ],
                              }),
                            ],
                          }),
                        ei &&
                          !et &&
                          (0, r.jsx)("div", {
                            className: "my-12",
                            children: (0, r.jsx)(f.A, {
                              onUnlock: () => ee(!0),
                              overlayText:
                                null != (A = T.puzzleSliderText)
                                  ? A
                                  : "Start the Puzzle",
                              id: "vaultDoorSlider",
                            }),
                          }),
                      ],
                    }),
                    W &&
                      (null == (y = W.fields.file) ? void 0 : y.url) &&
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
                            ref: ep,
                            src: (0, c._c)(
                              null == (j = W.fields.file) ? void 0 : j.url,
                            ),
                            alt: H,
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
                        W &&
                          (null == (w = W.fields.file) ? void 0 : w.url) &&
                          (0, r.jsx)(i(), {
                            ref: ef,
                            src: (0, c._c)(
                              null == (N = W.fields.file) ? void 0 : N.url,
                            ),
                            alt: H,
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
                        G &&
                          (null == (z = G.fields.file) ? void 0 : z.url) &&
                          (0, r.jsx)(i(), {
                            ref: ex,
                            src: (0, c._c)(
                              null == (k = G.fields.file) ? void 0 : k.url,
                            ),
                            alt: J,
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
                            ref: eh,
                            src: (0, c._c)(
                              null == q || null == (S = q.fields.file)
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
                    ei &&
                      (0, r.jsx)(u.A, {
                        open: $,
                        close: () => {
                          ee(!1);
                        },
                        glyphOptions: ed,
                        puzzleHeadline: null != (L = T.puzzleHeadline) ? L : "",
                        puzzleDescription:
                          null != (C = T.puzzleDescription) ? C : "",
                        puzzleBackground: null == Y ? void 0 : Y.image,
                        roomId: O,
                        isLoggedIn: M,
                        solvePuzzle: (e) => {
                          (el(!0), er(e), M && P(O));
                        },
                        puzzleSolveButtonText: T.puzzleSolveButtonText,
                        puzzleBackButtonText: T.puzzleBackButtonText,
                        isRoomCompleted: eo,
                        viewReward: () => {
                          el(!0);
                        },
                      }),
                    et &&
                      (0, r.jsxs)("div", {
                        ref: eg,
                        className:
                          "bg-trueblack/90 fixed inset-0 z-40 flex h-full w-screen flex-col items-center justify-center px-8 opacity-0 lg:aspect-video",
                        children: [
                          (0, r.jsx)("div", {
                            className:
                              "absolute aspect-[9/16] h-full md:aspect-video",
                            children: (0, r.jsx)(v.y, {
                              responsive: !0,
                              playAnimation: en,
                            }),
                          }),
                          (0, r.jsx)("div", {
                            ref: ev,
                            className:
                              "bg-trueblack relative mb-6 size-48 flex-none scale-0 overflow-hidden rounded-full shadow-[0_0_32px_16px_rgba(234,179,8,0.4)]",
                            children: es
                              ? (0, r.jsx)(i(), {
                                  src: es,
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
                            children: M
                              ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                    (0, r.jsx)("h2", {
                                      className:
                                        "mb-2 text-center text-2xl font-bold",
                                      children: T.congratsHeadlineLoggedIn,
                                    }),
                                    (0, r.jsx)("p", {
                                      className: "text-center text-sm",
                                      children: T.congratsDescriptionLoggedIn,
                                    }),
                                    (0, r.jsx)(m.A, {
                                      className: "my-6",
                                      onClick: () => {
                                        F.push("/account");
                                      },
                                      children: T.congratsViewRewardButtonText,
                                    }),
                                    (0, r.jsx)("button", {
                                      className: "cursor-pointer underline",
                                      onClick: E,
                                      children:
                                        T.congratsContinuePlayingButtonText,
                                    }),
                                  ],
                                })
                              : (0, r.jsxs)(r.Fragment, {
                                  children: [
                                    (0, r.jsx)("h2", {
                                      className:
                                        "mb-2 text-center text-2xl font-bold",
                                      children: T.congratsHeadlineLoggedOut,
                                    }),
                                    (0, r.jsx)("p", {
                                      className: "text-center text-sm",
                                      children: T.congratsDescriptionLoggedOut,
                                    }),
                                    (0, r.jsx)(m.A, {
                                      className: "my-6",
                                      onClick: () => {
                                        ((0, g.d4)("/challenge-tomb"),
                                          (window.location.href =
                                            "/registration"));
                                      },
                                      children: T.congratsRegisterButtonText,
                                    }),
                                    (0, r.jsxs)("h5", {
                                      children: [
                                        T.congratsBeforeLoginText,
                                        " ",
                                        (0, r.jsx)("a", {
                                          className: "underline",
                                          href: "/login",
                                          onClick: () =>
                                            (0, g.d4)("/challenge-tomb"),
                                          children: T.congratsLoginText,
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
          (([c, u, h] = y.then ? (await y)() : y), s());
        } catch (e) {
          s(e);
        }
      });
    },
    66767: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => n });
      var s = l(2183),
        r = l(36439);
      function n(e) {
        let {
            onUnlock: t,
            overlayText: l,
            label: n = "Open Vault Door",
            id: a = "unlockSwitch",
          } = e,
          [i, o] = (0, r.useState)(0);
        return (
          (0, r.useEffect)(() => {
            i > 90 && (t(), o(0));
          }, [i, t]),
          (0, s.jsxs)("div", {
            className:
              "unlock-switch relative z-50 mx-auto w-64 cursor-pointer rounded-full border border-white/60 bg-black/90 p-2",
            children: [
              (0, s.jsx)("label", {
                htmlFor: a,
                className: "sr-only",
                "aria-label": n,
                children: n,
              }),
              (0, s.jsx)("input", {
                className:
                  "relative block h-12 w-full cursor-pointer appearance-none rounded-full bg-transparent",
                type: "range",
                value: i,
                max: 100,
                id: a,
                name: a,
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
    71003: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => i });
      var s = l(2183),
        r = l(36439),
        n = l(96006),
        a = l.n(n);
      function i(e) {
        let {
            rooms: t,
            activeRoomIndex: l,
            onRoomClick: n,
            firstLockedIndex: i,
            completedRoomIds: o,
            roomIds: c,
          } = e,
          d = (0, r.useRef)(null),
          [u, m] = (0, r.useState)(!1),
          [f, p] = (0, r.useState)(!1),
          x = () => {
            let e = d.current;
            if (!e) return;
            let { scrollLeft: t, scrollWidth: l, clientWidth: s } = e;
            (m(t > 10), p(l - s - t > 10));
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
          }, [t]),
          (0, s.jsx)("div", {
            className: "mx-auto mt-2 w-full md:mt-12 md:max-w-sm",
            children: (0, s.jsxs)("div", {
              className:
                "relative z-20 mx-auto overflow-hidden bg-trueblack md:rounded-full md:border md:border-darkgray-200 md:bg-black/70 md:backdrop-blur-[2px]",
              children: [
                u &&
                  (0, s.jsx)("button", {
                    onClick: () => {
                      let e = d.current;
                      if (!e) return;
                      let t = 0.5 * e.clientWidth;
                      e.scrollBy({ left: -t, behavior: "smooth" });
                    },
                    className:
                      "absolute left-0 top-0 z-30 flex h-full w-10 cursor-pointer items-center bg-gradient-to-r from-trueblack transition-all hover:text-yellow-300 md:from-black/70",
                    "aria-label": "Scroll left",
                    children: (0, s.jsx)("svg", {
                      className: "ml-2 h-6 w-6 text-white",
                      fill: "none",
                      strokeWidth: "2",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: (0, s.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M15 19l-7-7 7-7",
                      }),
                    }),
                  }),
                f &&
                  (0, s.jsx)("button", {
                    onClick: () => {
                      let e = d.current;
                      if (!e) return;
                      let t = 0.5 * e.clientWidth;
                      e.scrollBy({ left: t, behavior: "smooth" });
                    },
                    className:
                      "absolute right-0 top-0 z-30 flex h-full w-10 cursor-pointer items-center justify-end bg-gradient-to-l from-trueblack transition-all hover:text-yellow-300 md:from-black/70",
                    "aria-label": "Scroll right",
                    children: (0, s.jsx)("svg", {
                      className: "mr-2 h-6 w-6",
                      fill: "none",
                      strokeWidth: "2",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: (0, s.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M9 5l7 7-7 7",
                      }),
                    }),
                  }),
                (0, s.jsx)("div", {
                  ref: d,
                  className:
                    "navigation-container flex snap-x snap-mandatory gap-3 overflow-x-auto overflow-y-hidden scroll-smooth px-4 py-3",
                  children: t.map((e, t) => {
                    let r = t === l,
                      d = -1 !== i && t > i,
                      u = !1;
                    if (!d && c[t])
                      for (let e = 0; e < t; e++) {
                        let t = c[e];
                        if (t && !o.includes(t)) {
                          u = !0;
                          break;
                        }
                      }
                    let m = d || u;
                    return (0, s.jsx)(
                      "button",
                      {
                        className:
                          "relative z-10 flex aspect-square size-10 shrink-0 snap-center items-center justify-center rounded-full transition-all duration-200\n				  "
                            .concat(
                              r
                                ? "shadow-[0_0_8px_8px_rgba(234,179,8,0.3)]"
                                : "",
                              "\n				  ",
                            )
                            .concat(
                              m
                                ? "cursor-not-allowed"
                                : "cursor-pointer hover:scale-110",
                            ),
                        onClick: () => n(t),
                        children: (0, s.jsx)(a(), {
                          src: "/images/challenge-tomb/room-unlocked.png",
                          alt: "Room ".concat(t + 1),
                          className: ""
                            .concat(t !== l ? "opacity-80 grayscale" : "", " ")
                            .concat(m ? "!opacity-30" : ""),
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
    71429: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => a });
      var s = l(2183),
        r = l(14623),
        n = l.n(r);
      function a(e) {
        let { data: t } = e;
        return (0, s.jsx)(n(), {
          children: (0, s.jsx)("script", {
            type: "application/ld+json",
            dangerouslySetInnerHTML: { __html: JSON.stringify(t) },
          }),
        });
      }
    },
    73985: (e, t, l) => {
      "use strict";
      l.a(e, async (e, s) => {
        try {
          l.d(t, { A: () => m });
          var r = l(2183),
            n = l(36439),
            a = l(96006),
            i = l.n(a),
            o = l(26947),
            c = l(92446),
            d = e([c]);
          c = (d.then ? (await d)() : d)[0];
          let u = (0, n.forwardRef)((e, t) => {
            let {
                selectedGlyph: l,
                glyphOptions: s,
                updatePuzzleAnswer: a,
              } = e,
              [d, u] = (0, n.useState)("up"),
              [m, f] = (0, n.useState)(() => {
                let e = s.findIndex((e) => e.sys.id === l);
                return e >= 0 ? e : 0;
              }),
              p = (0, n.useRef)(null);
            return (
              (0, n.useEffect)(() => {
                let e = s.findIndex((e) => e.sys.id === l);
                e >= 0 && f(e);
              }, [l, s]),
              (0, n.useEffect)(() => {
                let e = o.A.context(() => {
                  o.A.fromTo(
                    ".glyph-" + m,
                    { y: "up" === d ? 10 : -10, opacity: 0, overwrite: "auto" },
                    { y: 0, opacity: 1 },
                  );
                }, p);
                return () => e.revert();
              }, [m]),
              (0, r.jsxs)("div", {
                ref: p,
                className: "flex w-1/4 flex-col justify-center",
                children: [
                  (0, r.jsx)("button", {
                    onMouseDown: function () {
                      (u("up"),
                        m === s.length - 1
                          ? (f(0), a(s[0].sys.id))
                          : (f(m + 1), a(s[m + 1].sys.id)));
                    },
                    ref: t,
                    type: "button",
                    className:
                      "group relative flex aspect-[2] w-full cursor-pointer items-center justify-center rounded-xl backdrop-brightness-75 hover:backdrop-brightness-100",
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "relative flex aspect-[6/5] w-full items-center justify-center",
                    children: s.map((e, t) =>
                      (0, r.jsx)(
                        "div",
                        {
                          className: "glyph ".concat(
                            "glyph-" + t,
                            " absolute flex h-full w-full items-center justify-center p-2 opacity-0",
                          ),
                          children: (0, r.jsx)(i(), {
                            src: (() => {
                              var t;
                              if (
                                !e.fields.image ||
                                !("fields" in e.fields.image)
                              )
                                return "";
                              let l =
                                null == (t = e.fields.image.fields)
                                  ? void 0
                                  : t.file;
                              return l && "object" == typeof l && "url" in l
                                ? (0, c._c)(l.url)
                                : "";
                            })(),
                            alt: (() => {
                              var t;
                              if (
                                !e.fields.image ||
                                !("fields" in e.fields.image)
                              )
                                return "";
                              let l =
                                null == (t = e.fields.image.fields)
                                  ? void 0
                                  : t.description;
                              return "string" == typeof l ? l : "";
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
                      (u("down"),
                        0 === m
                          ? (f(s.length - 1), a(s[s.length - 1].sys.id))
                          : (f(m - 1), a(s[m - 1].sys.id)));
                    },
                    type: "button",
                    className:
                      "group relative flex aspect-[2] w-full cursor-pointer items-center justify-center rounded-xl backdrop-brightness-75 hover:backdrop-brightness-100",
                  }),
                ],
              })
            );
          });
          u.displayName = "GlyphSelector";
          let m = u;
          s();
        } catch (e) {
          s(e);
        }
      });
    },
    75894: (e, t, l) => {
      "use strict";
      l.a(e, async (e, s) => {
        try {
          l.d(t, { A: () => x });
          var r = l(2183),
            n = l(96006),
            a = l.n(n),
            i = l(11677),
            o = l.n(i),
            c = l(99435),
            d = l(7345),
            u = l(71429),
            m = l(92446),
            f = l(4243),
            p = e([c, m, f]);
          function x(e) {
            var t, l, s;
            let { websiteSingleton: n, navItems: i, footerSocialLinks: p } = e,
              { isLoggedIn: x, shopifyUrl: h } = (0, c.u)(),
              g = i.filter(
                (e) => e.showInFooter && !(x && e.hideForLoggedInUsers),
              ),
              v = i.filter(
                (e) => e.showInSubFooter && !(x && e.hideForLoggedInUsers),
              );
            return (0, r.jsxs)("footer", {
              className: "relative w-full bg-black px-8 text-white lg:px-32",
              children: [
                (0, r.jsx)(u.A, { data: (0, f._8)(n, p) }),
                (0, r.jsx)(u.A, { data: (0, f.OU)() }),
                (0, r.jsxs)("div", {
                  className:
                    "flex flex-col items-center justify-center space-y-16 pt-16 pb-16 lg:flex-row lg:items-stretch lg:justify-between lg:space-y-0 lg:pt-32",
                  children: [
                    (0, r.jsx)("div", {
                      children: (0, r.jsx)(a(), {
                        src: (0, m._c)(
                          null == (l = n.footerLogo) ||
                            null == (t = l.fields.file)
                            ? void 0
                            : t.url,
                        ),
                        width: 248,
                        height: 248,
                        alt: (0, m._c)(
                          null == (s = n.footerLogo)
                            ? void 0
                            : s.fields.description,
                        ),
                        className: "w-40",
                      }),
                    }),
                    (0, r.jsxs)("nav", {
                      "aria-label": "Footer",
                      className:
                        "text-darkgray-500 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-lg",
                      children: [
                        g.map((e) => {
                          let t = e.link;
                          return (
                            e.shouldReplaceWithGeneratedShopLink &&
                              h &&
                              (t = h),
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
                            var t;
                            (e.preventDefault(),
                              null == (t = window.__ucCmp) ||
                                t.showSecondLayer());
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
                      children: n.footerCopyright,
                    }),
                    (0, r.jsx)("div", {
                      className: "flex items-center space-x-4 text-white",
                      children: p.map((e) => {
                        var t, l, s, n;
                        return (0, r.jsx)(
                          d.A,
                          {
                            href: e.link,
                            children: (0, r.jsx)(a(), {
                              src: (0, m._c)(
                                null == (l = e.icon) ||
                                  null == (t = l.fields.file)
                                  ? void 0
                                  : t.url,
                              ),
                              alt:
                                null !=
                                (n =
                                  null == (s = e.icon)
                                    ? void 0
                                    : s.fields.description)
                                  ? n
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
                (0, r.jsx)("div", { className: "h-px bg-gray-500" }),
                (0, r.jsxs)("div", {
                  className:
                    "flew-col flex flex-col items-start justify-start gap-x-10 gap-y-10 py-12 text-gray-300 md:justify-between 2xl:flex-row",
                  children: [
                    (0, r.jsx)("p", {
                      className:
                        "text-darkgray-300 max-w-250 text-center text-sm lg:text-left",
                      children: n.footerLegalNotice,
                    }),
                    (0, r.jsx)("nav", {
                      "aria-label": "Legal",
                      className:
                        "text-darkgray-500 flex w-full flex-wrap items-center justify-center gap-x-10 gap-y-2 md:flex-row md:gap-x-10 md:gap-y-0 lg:w-auto lg:justify-start",
                      children: v.map((e) =>
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
          (([c, m, f] = p.then ? (await p)() : p), s());
        } catch (e) {
          s(e);
        }
      });
    },
    80895: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => n });
      var s = l(2183),
        r = l(36439);
      function n(e) {
        let {
            msUntilUnlock: t,
            isUnlocked: l,
            message: n,
            unlockPuzzle: a,
          } = e,
          [i, o] = (0, r.useState)({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
          }),
          c = (0, r.useRef)(Date.now() + t);
        return ((0, r.useEffect)(() => {
          if (l) return;
          let e = () => {
            let e = new Date().getTime(),
              t = c.current - e;
            if (t > 0) {
              let e = Math.floor(t / 864e5),
                l = Math.floor((t % 864e5) / 36e5);
              o({
                days: e,
                hours: l,
                minutes: Math.floor((t % 36e5) / 6e4),
                seconds: Math.floor((t % 6e4) / 1e3),
              });
            } else (o({ days: 0, hours: 0, minutes: 0, seconds: 0 }), a());
          };
          e();
          let t = setInterval(e, 1e3);
          return () => clearInterval(t);
        }, [l]),
        l)
          ? null
          : (0, s.jsx)("div", {
              className: "flex items-center justify-center",
              children: (0, s.jsxs)("div", {
                className: "text-center text-5xl",
                children: [
                  (0, s.jsxs)("div", {
                    className: "mb-4 flex justify-center text-white",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "flex w-16 flex-col items-center",
                        children: [
                          (0, s.jsx)("span", {
                            className: "font-spline-sans-mono text-5xl",
                            children: i.days.toString().padStart(2, "0"),
                          }),
                          (0, s.jsx)("span", {
                            className: "text-xs uppercase text-[#9D9D9C]",
                            children: "Days",
                          }),
                        ],
                      }),
                      (0, s.jsx)("span", {
                        className: "inline-block pr-0.5 text-5xl",
                        children: ":",
                      }),
                      (0, s.jsxs)("div", {
                        className: "flex w-16 flex-col items-center",
                        children: [
                          (0, s.jsx)("span", {
                            className: "font-spline-sans-mono text-5xl",
                            children: i.hours.toString().padStart(2, "0"),
                          }),
                          (0, s.jsx)("span", {
                            className: "text-xs uppercase text-[#9D9D9C]",
                            children: "Hours",
                          }),
                        ],
                      }),
                      (0, s.jsx)("span", {
                        className: "inline-block pr-0.5 text-5xl",
                        children: ":",
                      }),
                      (0, s.jsxs)("div", {
                        className: "flex w-16 flex-col items-center",
                        children: [
                          (0, s.jsx)("span", {
                            className: "font-spline-sans-mono text-5xl",
                            children: i.minutes.toString().padStart(2, "0"),
                          }),
                          (0, s.jsx)("span", {
                            className: "text-xs uppercase text-[#9D9D9C]",
                            children: "Minutes",
                          }),
                        ],
                      }),
                      (0, s.jsx)("span", {
                        className: "inline-block pr-0.5 text-5xl",
                        children: ":",
                      }),
                      (0, s.jsxs)("div", {
                        className: "flex w-16 flex-col items-center",
                        children: [
                          (0, s.jsx)("span", {
                            className: "font-spline-sans-mono text-5xl",
                            children: i.seconds.toString().padStart(2, "0"),
                          }),
                          (0, s.jsx)("span", {
                            className: "text-xs uppercase text-[#9D9D9C]",
                            children: "Seconds",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)("p", {
                    className: "text-gold text-sm",
                    children: n,
                  }),
                ],
              }),
            });
      }
    },
    86020: (e, t, l) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/challenge-tomb",
        function () {
          return l(13188);
        },
      ]);
    },
    91134: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => a });
      var s = l(2183),
        r = l(14623),
        n = l.n(r);
      function a(e) {
        let { description: t } = e;
        return (0, s.jsxs)(n(), {
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
  },
  (e) => {
    (e.O(
      0,
      [9950, 8762, 6006, 1433, 1329, 1089, 4971, 5216, 2446, 636, 6593, 8792],
      () => e((e.s = 86020)),
    ),
      (_N_E = e.O()));
  },
]);
