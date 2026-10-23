(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9853],
  {
    6935: (e, s, a) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/account/surveys",
        function () {
          return a(44969);
        },
      ]);
    },
    14213: (e, s, a) => {
      "use strict";
      a.a(e, async (e, t) => {
        try {
          a.d(s, { A: () => v });
          var r = a(2183),
            l = a(15013),
            i = a.n(l),
            c = a(64171),
            n = a(46728),
            d = a.n(n),
            h = a(9751),
            u = a(36439),
            o = a(80707),
            x = a.n(o),
            m = a(97698),
            g = e([h]);
          function v({ surveys: e }) {
            let {
              completedSurveys: s,
              rewardsLoading: a,
              fetchingCompletedSurveys: t,
            } = (0, h.u)();
            return a || t
              ? (0, r.jsx)("div", {
                  className: "flex w-full justify-center",
                  children: (0, r.jsx)(m.A, {}),
                })
              : 0 === e.length
                ? (0, r.jsx)("div", {
                    children: "There are no surveys currently available.",
                  })
                : (0, r.jsx)("table", {
                    className: "w-full table-auto",
                    children: (0, r.jsx)("tbody", {
                      children: x()
                        .sortBy(e, (e) => +!!s.includes(e.telemetryId))
                        .map((e) =>
                          (0, r.jsx)(f, { survey: e }, e.telemetryId),
                        ),
                    }),
                  });
          }
          function f({ survey: e }) {
            let { rewards: s, completedSurveys: a } = (0, h.u)(),
              t = (0, u.useMemo)(() => !!a && a.includes(e.telemetryId), [a]),
              l = (0, u.useMemo)(
                () =>
                  s.allAvatars && e
                    ? (s.allAvatars.find(
                        (s) =>
                          s.friendlyId &&
                          s.friendlyId === e.unlockAvatarFriendlyId,
                      ) ?? null)
                    : null,
                [s, e],
              );
            return (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsxs)("tr", {
                  className: "hidden md:table-row",
                  children: [
                    (0, r.jsx)("td", {
                      children: (0, r.jsx)("h2", {
                        className: "text-2xl text-black",
                        children: e.title,
                      }),
                    }),
                    t
                      ? (0, r.jsx)("td", {
                          className: "text-teal-100",
                          children: "Complete",
                        })
                      : (0, r.jsx)("td", {
                          className: "text-red-500",
                          children: "Incomplete",
                        }),
                    (0, r.jsx)("td", {
                      className: "py-3",
                      children: (0, r.jsx)("div", {
                        className: "relative h-16 w-16",
                        children:
                          l &&
                          (0, r.jsx)(i(), {
                            alt: "avatar",
                            className: "rounded-full object-cover",
                            src: l?.imageUrl ?? "",
                            fill: !0,
                          }),
                      }),
                    }),
                    (0, r.jsx)("td", {
                      children: (0, r.jsx)("div", {
                        className: "inline",
                        children:
                          !t &&
                          (0, r.jsx)(d(), {
                            href: `/account/surveys/${e.telemetryId}`,
                            children: (0, r.jsx)(c.A, {
                              variant: "dark",
                              children: "Fill Survey",
                            }),
                          }),
                      }),
                    }),
                  ],
                }),
                (0, r.jsx)(d(), {
                  className: "md:hidden",
                  href: `${t ? "" : `/account/surveys/${e.telemetryId}`}`,
                  children: (0, r.jsxs)("div", {
                    className:
                      "my-8 flex w-full items-center px-4 py-4 shadow-lg md:hidden",
                    children: [
                      (0, r.jsxs)("div", {
                        className: "grow pr-4",
                        children: [
                          (0, r.jsx)("h2", {
                            className: "pb-1 text-2xl text-black",
                            children: e.title,
                          }),
                          t
                            ? (0, r.jsx)("p", {
                                className: "text-teal-100",
                                children: "Complete",
                              })
                            : (0, r.jsx)("p", {
                                className: "text-red-500",
                                children: "Incomplete",
                              }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className: "relative h-16 w-16 shrink-0",
                        children:
                          l &&
                          (0, r.jsx)(i(), {
                            alt: "avatar",
                            className: "rounded-full object-cover",
                            src: l?.imageUrl ?? "",
                            fill: !0,
                          }),
                      }),
                    ],
                  }),
                }),
              ],
            });
          }
          ((h = (g.then ? (await g)() : g)[0]), t());
        } catch (e) {
          t(e);
        }
      });
    },
    14402: (e, s, a) => {
      "use strict";
      a.d(s, { A: () => h });
      var t = a(2183),
        r = a(15013),
        l = a.n(r),
        i = a(46728),
        c = a.n(i),
        n = a(31153),
        d = a(36439);
      function h() {
        let e = (0, n.useRouter)(),
          [s, a] = (0, d.useState)("Dashboard");
        return (
          (0, d.useEffect)(() => {
            e.pathname.includes("settings")
              ? a("Settings")
              : e.pathname.includes("rewards")
                ? a("Rewards")
                : e.pathname.includes("surveys")
                  ? a("Surveys")
                  : a("Dashboard");
          }, [e, e.pathname]),
          (0, t.jsxs)("div", {
            className:
              "fixed bottom-8 left-1/2 z-10 flex w-48 -translate-x-1/2 gap-x-6 rounded-xl bg-black/90 px-6 py-3 text-white lg:hidden",
            children: [
              (0, t.jsx)(u, {
                src: "/images/dashboard-icon.svg",
                href: "/account",
                active: "Dashboard" === s,
              }),
              (0, t.jsx)(u, {
                src: "/images/rewards-icon.svg",
                href: "/account/rewards",
                active: "Rewards" === s,
              }),
              (0, t.jsx)(u, {
                src: "/images/survey-icon.svg",
                href: "/account/surveys",
                active: "Surveys" === s,
              }),
              (0, t.jsx)(u, {
                src: "/images/settings-icon.svg",
                href: "/account/settings",
                active: "Settings" === s,
              }),
            ],
          })
        );
      }
      function u({ active: e, src: s, href: a }) {
        return (0, t.jsx)(c(), {
          href: a,
          children: (0, t.jsx)(l(), {
            width: 32,
            height: 32,
            alt: "Logo",
            src: s,
            style: { opacity: e ? 1 : 0.5, color: "white", fill: "white" },
          }),
        });
      }
    },
    23855: (e, s, a) => {
      "use strict";
      a.a(e, async (e, t) => {
        try {
          a.d(s, { A: () => m });
          var r = a(2183),
            l = a(36439),
            i = a(31996),
            c = a(49980),
            n = a(15013),
            d = a.n(n),
            h = a(46728),
            u = a.n(h),
            o = a(9751),
            x = e([i, c, o]);
          function m({ navItems: e, surveys: s }) {
            let { isLoggedIn: a } = (0, o.u)(),
              [t, n] = (0, l.useState)(!1),
              h = () =>
                e
                  .filter(
                    (e) => e.showInHeader && (!e.hideForLoggedInUsers || a),
                  )
                  .map((e) =>
                    (0, r.jsx)(
                      c.jU,
                      { href: e.link, title: e.name, darkMode: !0 },
                      e.link,
                    ),
                  );
            return (0, r.jsxs)("header", {
              className:
                "lg:w-[calc(100% - 256px] relative sticky top-0 left-0 z-[20] bg-white px-12 pt-6 lg:ml-[256px]",
              children: [
                (0, r.jsx)("nav", {
                  "aria-label": "Global",
                  children: (0, r.jsxs)("div", {
                    className: "flex w-full justify-between",
                    children: [
                      (0, r.jsx)("div", {
                        className: "hidden items-center gap-x-4 lg:flex",
                        children: h(),
                      }),
                      (0, r.jsx)(d(), {
                        width: 48,
                        height: 48,
                        alt: "hamburger menu",
                        className:
                          "relative z-20 cursor-pointer invert lg:hidden",
                        src: t ? "/images/close.svg" : "/images/hamburger.svg",
                        onClick: () => n(!t),
                      }),
                      (0, r.jsx)(u(), {
                        href: "/",
                        children: (0, r.jsx)(d(), {
                          className: "relative h-10 w-auto lg:hidden",
                          priority: !0,
                          src: "/images/tombraider-logo-dark.svg",
                          alt: "Header Logo",
                          width: 48,
                          height: 48,
                        }),
                      }),
                      (0, r.jsx)(i.A, { surveys: s, darkMode: !0 }),
                    ],
                  }),
                }),
                (0, r.jsx)("div", {
                  className: "mt-4 h-[1px] w-full bg-gray-300/50",
                }),
                (0, r.jsx)("div", {
                  className:
                    "fixed top-0 left-0 z-10 w-full overflow-hidden bg-gray-100/90 transition duration-300 lg:hidden",
                  style: {
                    height: t ? "100vh" : "0",
                    transition: "height 0.3s ease",
                  },
                  children: (0, r.jsx)("div", {
                    className: "flex flex-col items-center gap-y-8 pt-32",
                    children: h(),
                  }),
                }),
              ],
            });
          }
          (([i, c, o] = x.then ? (await x)() : x), t());
        } catch (e) {
          t(e);
        }
      });
    },
    35877: (e, s, a) => {
      "use strict";
      a.a(e, async (e, t) => {
        try {
          a.d(s, { A: () => n });
          var r = a(31153),
            l = a(36439),
            i = a(9751),
            c = e([i]);
          function n(e) {
            let { children: s } = e,
              a = (0, r.useRouter)(),
              { userData: t, cacheLoaded: c, loading: n } = (0, i.u)();
            return ((0, l.useEffect)(() => {
              n || !c || t || a.replace("/");
            }, [t, c, n, a]),
            t && c)
              ? s
              : null;
          }
          ((i = (c.then ? (await c)() : c)[0]), t());
        } catch (e) {
          t(e);
        }
      });
    },
    44969: (e, s, a) => {
      "use strict";
      a.a(e, async (e, t) => {
        try {
          (a.r(s), a.d(s, { __N_SSG: () => u, default: () => o }));
          var r = a(2183),
            l = a(23855),
            i = a(14402),
            c = a(35877),
            n = a(61653),
            d = a(14213),
            h = e([l, c, d]);
          [l, c, d] = h.then ? (await h)() : h;
          var u = !0;
          function o({ navItems: e, surveys: s }) {
            return (0, r.jsx)(c.A, {
              children: (0, r.jsx)("main", {
                className: " min-h-screen bg-white text-black",
                children: (0, r.jsxs)("div", {
                  className: " ",
                  children: [
                    (0, r.jsx)(l.A, { surveys: s, navItems: e }),
                    (0, r.jsx)(n.A, {}),
                    (0, r.jsx)(i.A, {}),
                    (0, r.jsx)("div", {
                      className: "px-6 py-12 lg:ml-[256px] lg:px-12",
                      children: (0, r.jsx)(d.A, { surveys: s }),
                    }),
                  ],
                }),
              }),
            });
          }
          t();
        } catch (e) {
          t(e);
        }
      });
    },
    61653: (e, s, a) => {
      "use strict";
      a.d(s, { A: () => h });
      var t = a(2183),
        r = a(15013),
        l = a.n(r),
        i = a(46728),
        c = a.n(i),
        n = a(31153),
        d = a(36439);
      function h() {
        let e = (0, n.useRouter)(),
          [s, a] = (0, d.useState)("Dashboard");
        return (
          (0, d.useEffect)(() => {
            e.pathname.includes("settings")
              ? a("Settings")
              : e.pathname.includes("rewards")
                ? a("Rewards")
                : e.pathname.includes("surveys")
                  ? a("Surveys")
                  : a("Dashboard");
          }, [e, e.pathname]),
          (0, t.jsxs)("div", {
            className:
              "fixed left-0 top-0 z-[100] hidden h-screen w-[256px] flex-col items-center gap-y-6 border-r bg-white pt-8 lg:flex",
            children: [
              (0, t.jsx)(c(), {
                href: "/",
                children: (0, t.jsx)(l(), {
                  width: 87,
                  height: 40,
                  alt: "dark Tomb Raider logo",
                  src: "/images/tombraider-logo-dark.svg",
                  className: "pb-6",
                }),
              }),
              (0, t.jsx)(u, {
                selected: "Dashboard" === s,
                href: "/account",
                src: "/images/dashboard-icon.svg",
                children: "Dashboard",
              }),
              (0, t.jsx)(u, {
                selected: "Rewards" === s,
                href: "/account/rewards",
                src: "/images/rewards-icon.svg",
                children: "Rewards",
              }),
              (0, t.jsx)(u, {
                selected: "Surveys" === s,
                href: "/account/surveys",
                src: "/images/survey-icon.svg",
                children: "Surveys",
              }),
              (0, t.jsx)(u, {
                selected: "Settings" === s,
                href: "/account/settings",
                src: "/images/settings-icon.svg",
                children: "Settings",
              }),
            ],
          })
        );
      }
      function u(e) {
        let { src: s, children: a, selected: r, href: i } = e;
        return (0, t.jsx)(c(), {
          href: i,
          children: (0, t.jsxs)("div", {
            className: `flex w-32 cursor-pointer font-bold ${r ? "opacity-100" : "opacity-50"}`,
            children: [
              (0, t.jsx)(l(), {
                width: 24,
                height: 24,
                alt: "Logo",
                className: "mr-3",
                src: s,
              }),
              a,
            ],
          }),
        });
      }
    },
  },
  (e) => {
    (e.O(0, [9950, 5013, 2696, 9980, 636, 6593, 8792], () => e((e.s = 6935))),
      (_N_E = e.O()));
  },
]);
