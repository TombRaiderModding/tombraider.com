(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2582],
  {
    14402: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => h });
      var a = t(2183),
        r = t(15013),
        i = t.n(r),
        n = t(46728),
        c = t.n(n),
        l = t(31153),
        d = t(36439);
      function h() {
        let e = (0, l.useRouter)(),
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
              (0, a.jsx)(o, {
                src: "/images/dashboard-icon.svg",
                href: "/account",
                active: "Dashboard" === s,
              }),
              (0, a.jsx)(o, {
                src: "/images/rewards-icon.svg",
                href: "/account/rewards",
                active: "Rewards" === s,
              }),
              (0, a.jsx)(o, {
                src: "/images/survey-icon.svg",
                href: "/account/surveys",
                active: "Surveys" === s,
              }),
              (0, a.jsx)(o, {
                src: "/images/settings-icon.svg",
                href: "/account/settings",
                active: "Settings" === s,
              }),
            ],
          })
        );
      }
      function o({ active: e, src: s, href: t }) {
        return (0, a.jsx)(c(), {
          href: t,
          children: (0, a.jsx)(i(), {
            width: 32,
            height: 32,
            alt: "Logo",
            src: s,
            style: { opacity: e ? 1 : 0.5, color: "white", fill: "white" },
          }),
        });
      }
    },
    23855: (e, s, t) => {
      "use strict";
      t.a(e, async (e, a) => {
        try {
          t.d(s, { A: () => x });
          var r = t(2183),
            i = t(36439),
            n = t(31996),
            c = t(49980),
            l = t(15013),
            d = t.n(l),
            h = t(46728),
            o = t.n(h),
            u = t(9751),
            g = e([n, c, u]);
          function x({ navItems: e, surveys: s }) {
            let { isLoggedIn: t } = (0, u.u)(),
              [a, l] = (0, i.useState)(!1),
              h = () =>
                e
                  .filter(
                    (e) => e.showInHeader && (!e.hideForLoggedInUsers || t),
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
                        src: a ? "/images/close.svg" : "/images/hamburger.svg",
                        onClick: () => l(!a),
                      }),
                      (0, r.jsx)(o(), {
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
                      (0, r.jsx)(n.A, { surveys: s, darkMode: !0 }),
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
                    height: a ? "100vh" : "0",
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
          (([n, c, u] = g.then ? (await g)() : g), a());
        } catch (e) {
          a(e);
        }
      });
    },
    35877: (e, s, t) => {
      "use strict";
      t.a(e, async (e, a) => {
        try {
          t.d(s, { A: () => l });
          var r = t(31153),
            i = t(36439),
            n = t(9751),
            c = e([n]);
          function l(e) {
            let { children: s } = e,
              t = (0, r.useRouter)(),
              { userData: a, cacheLoaded: c, loading: l } = (0, n.u)();
            return ((0, i.useEffect)(() => {
              l || !c || a || t.replace("/");
            }, [a, c, l, t]),
            a && c)
              ? s
              : null;
          }
          ((n = (c.then ? (await c)() : c)[0]), a());
        } catch (e) {
          a(e);
        }
      });
    },
    40360: (e, s, t) => {
      "use strict";
      t.a(e, async (e, a) => {
        try {
          (t.r(s), t.d(s, { __N_SSG: () => u, default: () => g }));
          var r = t(2183),
            i = t(23855),
            n = t(14402),
            c = t(35877),
            l = t(61653),
            d = t(31382),
            h = t(31153),
            o = e([i, c, d]);
          [i, c, d] = o.then ? (await o)() : o;
          var u = !0;
          function g({ navItems: e, survey: s, surveys: t }) {
            let a = (0, h.useRouter)();
            return s
              ? (0, r.jsx)(c.A, {
                  children: (0, r.jsx)("main", {
                    className: " min-h-screen bg-white text-black",
                    children: (0, r.jsxs)("div", {
                      className: " ",
                      children: [
                        (0, r.jsx)(i.A, { surveys: t, navItems: e }),
                        (0, r.jsx)(l.A, {}),
                        (0, r.jsx)(n.A, {}),
                        (0, r.jsx)("div", {
                          className:
                            "px-6 py-12 pb-32 md:pb-16 lg:ml-[256px] lg:px-12",
                          children: (0, r.jsx)(d.A, { survey: s }),
                        }),
                      ],
                    }),
                  }),
                })
              : (a.push("/404"), null);
          }
          a();
        } catch (e) {
          a(e);
        }
      });
    },
    61653: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => h });
      var a = t(2183),
        r = t(15013),
        i = t.n(r),
        n = t(46728),
        c = t.n(n),
        l = t(31153),
        d = t(36439);
      function h() {
        let e = (0, l.useRouter)(),
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
                children: (0, a.jsx)(i(), {
                  width: 87,
                  height: 40,
                  alt: "dark Tomb Raider logo",
                  src: "/images/tombraider-logo-dark.svg",
                  className: "pb-6",
                }),
              }),
              (0, a.jsx)(o, {
                selected: "Dashboard" === s,
                href: "/account",
                src: "/images/dashboard-icon.svg",
                children: "Dashboard",
              }),
              (0, a.jsx)(o, {
                selected: "Rewards" === s,
                href: "/account/rewards",
                src: "/images/rewards-icon.svg",
                children: "Rewards",
              }),
              (0, a.jsx)(o, {
                selected: "Surveys" === s,
                href: "/account/surveys",
                src: "/images/survey-icon.svg",
                children: "Surveys",
              }),
              (0, a.jsx)(o, {
                selected: "Settings" === s,
                href: "/account/settings",
                src: "/images/settings-icon.svg",
                children: "Settings",
              }),
            ],
          })
        );
      }
      function o(e) {
        let { src: s, children: t, selected: r, href: n } = e;
        return (0, a.jsx)(c(), {
          href: n,
          children: (0, a.jsxs)("div", {
            className: `flex w-32 cursor-pointer font-bold ${r ? "opacity-100" : "opacity-50"}`,
            children: [
              (0, a.jsx)(i(), {
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
    69621: (e, s, t) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/account/surveys/[survey]",
        function () {
          return t(40360);
        },
      ]);
    },
  },
  (e) => {
    (e.O(0, [9950, 5013, 2696, 1329, 6342, 9980, 2642, 636, 6593, 8792], () =>
      e((e.s = 69621)),
    ),
      (_N_E = e.O()));
  },
]);
