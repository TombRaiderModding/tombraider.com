(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9853],
  {
    29130: (e, s, t) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/account/surveys",
        function () {
          return t(81549);
        },
      ]);
    },
    48521: (e, s, t) => {
      "use strict";
      t.a(e, async (e, a) => {
        try {
          t.d(s, { A: () => g });
          var r = t(2183),
            l = t(96006),
            i = t.n(l),
            c = t(15711),
            n = t(11677),
            d = t.n(n),
            h = t(99435),
            u = t(36439),
            o = t(80707),
            x = t.n(o),
            m = t(26974),
            v = e([h]);
          function g(e) {
            let { surveys: s } = e,
              {
                completedSurveys: t,
                rewardsLoading: a,
                fetchingCompletedSurveys: l,
              } = (0, h.u)();
            return a || l
              ? (0, r.jsx)("div", {
                  className: "flex w-full justify-center",
                  children: (0, r.jsx)(m.A, {}),
                })
              : 0 === s.length
                ? (0, r.jsx)("div", {
                    children: "There are no surveys currently available.",
                  })
                : (0, r.jsx)("table", {
                    className: "w-full table-auto",
                    children: (0, r.jsx)("tbody", {
                      children: x()
                        .sortBy(s, (e) => +!!t.includes(e.telemetryId))
                        .map((e) =>
                          (0, r.jsx)(f, { survey: e }, e.telemetryId),
                        ),
                    }),
                  });
          }
          function f(e) {
            var s, t;
            let { survey: a } = e,
              { rewards: l, completedSurveys: n } = (0, h.u)(),
              o = (0, u.useMemo)(() => !!n && n.includes(a.telemetryId), [n]),
              x = (0, u.useMemo)(() => {
                if (l.allAvatars && a) {
                  var e;
                  return null !=
                    (e = l.allAvatars.find(
                      (e) =>
                        e.friendlyId &&
                        e.friendlyId === a.unlockAvatarFriendlyId,
                    ))
                    ? e
                    : null;
                }
                return null;
              }, [l, a]);
            return (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsxs)("tr", {
                  className: "hidden md:table-row",
                  children: [
                    (0, r.jsx)("td", {
                      children: (0, r.jsx)("h2", {
                        className: "text-2xl text-black",
                        children: a.title,
                      }),
                    }),
                    o
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
                          x &&
                          (0, r.jsx)(i(), {
                            alt: "avatar",
                            className: "rounded-full object-cover",
                            src:
                              null != (s = null == x ? void 0 : x.imageUrl)
                                ? s
                                : "",
                            fill: !0,
                          }),
                      }),
                    }),
                    (0, r.jsx)("td", {
                      children: (0, r.jsx)("div", {
                        className: "inline",
                        children:
                          !o &&
                          (0, r.jsx)(d(), {
                            href: "/account/surveys/".concat(a.telemetryId),
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
                  href: "".concat(
                    o ? "" : "/account/surveys/".concat(a.telemetryId),
                  ),
                  children: (0, r.jsxs)("div", {
                    className:
                      "my-8 flex w-full items-center px-4 py-4 shadow-lg md:hidden",
                    children: [
                      (0, r.jsxs)("div", {
                        className: "grow pr-4",
                        children: [
                          (0, r.jsx)("h2", {
                            className: "pb-1 text-2xl text-black",
                            children: a.title,
                          }),
                          o
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
                          x &&
                          (0, r.jsx)(i(), {
                            alt: "avatar",
                            className: "rounded-full object-cover",
                            src:
                              null != (t = null == x ? void 0 : x.imageUrl)
                                ? t
                                : "",
                            fill: !0,
                          }),
                      }),
                    ],
                  }),
                }),
              ],
            });
          }
          ((h = (v.then ? (await v)() : v)[0]), a());
        } catch (e) {
          a(e);
        }
      });
    },
    53017: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => h });
      var a = t(2183),
        r = t(96006),
        l = t.n(r),
        i = t(11677),
        c = t.n(i),
        n = t(18652),
        d = t(36439);
      function h() {
        let e = (0, n.useRouter)(),
          [s, t] = (0, d.useState)("Dashboard");
        return (
          (0, d.useEffect)(() => {
            e.pathname.includes("settings")
              ? t("Settings")
              : e.pathname.includes("rewards")
                ? t("Rewards")
                : e.pathname.includes("surveys")
                  ? t("Surveys")
                  : t("Dashboard");
          }, [e, e.pathname]),
          (0, a.jsxs)("div", {
            className:
              "fixed left-0 top-0 z-[100] hidden h-screen w-[256px] flex-col items-center gap-y-6 border-r bg-white pt-8 lg:flex",
            children: [
              (0, a.jsx)(c(), {
                href: "/",
                children: (0, a.jsx)(l(), {
                  width: 87,
                  height: 40,
                  alt: "dark Tomb Raider logo",
                  src: "/images/tombraider-logo-dark.svg",
                  className: "pb-6",
                }),
              }),
              (0, a.jsx)(u, {
                selected: "Dashboard" === s,
                href: "/account",
                src: "/images/dashboard-icon.svg",
                children: "Dashboard",
              }),
              (0, a.jsx)(u, {
                selected: "Rewards" === s,
                href: "/account/rewards",
                src: "/images/rewards-icon.svg",
                children: "Rewards",
              }),
              (0, a.jsx)(u, {
                selected: "Surveys" === s,
                href: "/account/surveys",
                src: "/images/survey-icon.svg",
                children: "Surveys",
              }),
              (0, a.jsx)(u, {
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
        let { src: s, children: t, selected: r, href: i } = e;
        return (0, a.jsx)(c(), {
          href: i,
          children: (0, a.jsxs)("div", {
            className: "flex w-32 cursor-pointer font-bold ".concat(
              r ? "opacity-100" : "opacity-50",
            ),
            children: [
              (0, a.jsx)(l(), {
                width: 24,
                height: 24,
                alt: "Logo",
                className: "mr-3",
                src: s,
              }),
              t,
            ],
          }),
        });
      }
    },
    56145: (e, s, t) => {
      "use strict";
      t.a(e, async (e, a) => {
        try {
          t.d(s, { A: () => n });
          var r = t(18652),
            l = t(36439),
            i = t(99435),
            c = e([i]);
          function n(e) {
            let { children: s } = e,
              t = (0, r.useRouter)(),
              { userData: a, cacheLoaded: c, loading: n } = (0, i.u)();
            return ((0, l.useEffect)(() => {
              n || !c || a || t.replace("/");
            }, [a, c, n, t]),
            a && c)
              ? s
              : null;
          }
          ((i = (c.then ? (await c)() : c)[0]), a());
        } catch (e) {
          a(e);
        }
      });
    },
    79294: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => h });
      var a = t(2183),
        r = t(96006),
        l = t.n(r),
        i = t(11677),
        c = t.n(i),
        n = t(18652),
        d = t(36439);
      function h() {
        let e = (0, n.useRouter)(),
          [s, t] = (0, d.useState)("Dashboard");
        return (
          (0, d.useEffect)(() => {
            e.pathname.includes("settings")
              ? t("Settings")
              : e.pathname.includes("rewards")
                ? t("Rewards")
                : e.pathname.includes("surveys")
                  ? t("Surveys")
                  : t("Dashboard");
          }, [e, e.pathname]),
          (0, a.jsxs)("div", {
            className:
              "fixed bottom-8 left-1/2 z-10 flex w-48 -translate-x-1/2 gap-x-6 rounded-xl bg-black/90 px-6 py-3 text-white lg:hidden",
            children: [
              (0, a.jsx)(u, {
                src: "/images/dashboard-icon.svg",
                href: "/account",
                active: "Dashboard" === s,
              }),
              (0, a.jsx)(u, {
                src: "/images/rewards-icon.svg",
                href: "/account/rewards",
                active: "Rewards" === s,
              }),
              (0, a.jsx)(u, {
                src: "/images/survey-icon.svg",
                href: "/account/surveys",
                active: "Surveys" === s,
              }),
              (0, a.jsx)(u, {
                src: "/images/settings-icon.svg",
                href: "/account/settings",
                active: "Settings" === s,
              }),
            ],
          })
        );
      }
      function u(e) {
        let { active: s, src: t, href: r } = e;
        return (0, a.jsx)(c(), {
          href: r,
          children: (0, a.jsx)(l(), {
            width: 32,
            height: 32,
            alt: "Logo",
            src: t,
            style: { opacity: s ? 1 : 0.5, color: "white", fill: "white" },
          }),
        });
      }
    },
    81549: (e, s, t) => {
      "use strict";
      t.a(e, async (e, a) => {
        try {
          (t.r(s), t.d(s, { __N_SSG: () => u, default: () => o }));
          var r = t(2183),
            l = t(88891),
            i = t(79294),
            c = t(56145),
            n = t(53017),
            d = t(48521),
            h = e([l, c, d]);
          [l, c, d] = h.then ? (await h)() : h;
          var u = !0;
          function o(e) {
            let { navItems: s, surveys: t } = e;
            return (0, r.jsx)(c.A, {
              children: (0, r.jsx)("main", {
                className: " min-h-screen bg-white text-black",
                children: (0, r.jsxs)("div", {
                  className: " ",
                  children: [
                    (0, r.jsx)(l.A, { surveys: t, navItems: s }),
                    (0, r.jsx)(n.A, {}),
                    (0, r.jsx)(i.A, {}),
                    (0, r.jsx)("div", {
                      className: "px-6 py-12 lg:ml-[256px] lg:px-12",
                      children: (0, r.jsx)(d.A, { surveys: t }),
                    }),
                  ],
                }),
              }),
            });
          }
          a();
        } catch (e) {
          a(e);
        }
      });
    },
    88891: (e, s, t) => {
      "use strict";
      t.a(e, async (e, a) => {
        try {
          t.d(s, { A: () => m });
          var r = t(2183),
            l = t(36439),
            i = t(3976),
            c = t(95216),
            n = t(96006),
            d = t.n(n),
            h = t(11677),
            u = t.n(h),
            o = t(99435),
            x = e([i, c, o]);
          function m(e) {
            let { navItems: s, surveys: t } = e,
              { isLoggedIn: a } = (0, o.u)(),
              [n, h] = (0, l.useState)(!1),
              x = () =>
                s
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
                        children: x(),
                      }),
                      (0, r.jsx)(d(), {
                        width: 48,
                        height: 48,
                        alt: "hamburger menu",
                        className:
                          "relative z-20 cursor-pointer invert lg:hidden",
                        src: n ? "/images/close.svg" : "/images/hamburger.svg",
                        onClick: () => h(!n),
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
                      (0, r.jsx)(i.A, { surveys: t, darkMode: !0 }),
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
                    height: n ? "100vh" : "0",
                    transition: "height 0.3s ease",
                  },
                  children: (0, r.jsx)("div", {
                    className: "flex flex-col items-center gap-y-8 pt-32",
                    children: x(),
                  }),
                }),
              ],
            });
          }
          (([i, c, o] = x.then ? (await x)() : x), a());
        } catch (e) {
          a(e);
        }
      });
    },
  },
  (e) => {
    (e.O(0, [9950, 6006, 1433, 5216, 636, 6593, 8792], () => e((e.s = 29130))),
      (_N_E = e.O()));
  },
]);
