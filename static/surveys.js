(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [511],
  {
    71052: function (e, s, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/account/surveys",
        function () {
          return t(19920);
        },
      ]);
    },
    27233: function (e, s, t) {
      "use strict";
      t.a(e, async function (e, r) {
        try {
          t.d(s, {
            Z: function () {
              return AccountHeader;
            },
          });
          var a = t(97458),
            n = t(52983),
            i = t(58738),
            c = t(87249),
            l = t(47681),
            d = t.n(l),
            u = t(10821),
            o = t.n(u),
            h = t(2300),
            m = e([i, c, h]);
          function AccountHeader(e) {
            let { navItems: s, surveys: t } = e,
              { isLoggedIn: r } = (0, h.S)(),
              [l, u] = (0, n.useState)(!1),
              getTabs = () =>
                s
                  .filter(
                    (e) => e.showInHeader && (!e.hideForLoggedInUsers || r),
                  )
                  .map((e) =>
                    (0, a.jsx)(c.Ax, {
                      href: e.link,
                      title: e.name,
                      darkMode: !0,
                    }),
                  );
            return (0, a.jsxs)("header", {
              className:
                "lg:w-[calc(100% - 256px] relative sticky left-0 top-0 z-[20]  bg-white px-12 pt-6 lg:ml-[256px]",
              children: [
                (0, a.jsx)("nav", {
                  "aria-label": "Global",
                  children: (0, a.jsxs)("div", {
                    className: " flex w-full justify-between",
                    children: [
                      (0, a.jsx)("div", {
                        className: "hidden items-center gap-x-4 lg:flex",
                        children: getTabs(),
                      }),
                      (0, a.jsx)(d(), {
                        width: 48,
                        height: 48,
                        alt: "hamburger menu",
                        className:
                          "relative z-20 cursor-pointer invert filter lg:hidden",
                        src: l ? "/images/close.svg" : "/images/hamburger.svg",
                        onClick: () => u(!l),
                      }),
                      (0, a.jsx)(o(), {
                        href: "/",
                        children: (0, a.jsx)(d(), {
                          className: "relative h-10 w-auto lg:hidden",
                          priority: !0,
                          src: "/images/tombraider-logo-dark.svg",
                          alt: "Header Logo",
                          width: 48,
                          height: 48,
                        }),
                      }),
                      (0, a.jsx)(i.Z, { surveys: t, darkMode: !0 }),
                    ],
                  }),
                }),
                (0, a.jsx)("div", {
                  className: " mt-4 h-[1px] w-full bg-gray-300/50",
                }),
                (0, a.jsx)("div", {
                  className:
                    "fixed left-0 top-0 z-10  w-full    overflow-hidden bg-gray-100 bg-opacity-90 transition duration-300 lg:hidden",
                  style: {
                    height: l ? "100vh" : "0",
                    transition: "height 0.3s ease",
                  },
                  children: (0, a.jsx)("div", {
                    className: "flex flex-col items-center gap-y-8 pt-32",
                    children: getTabs(),
                  }),
                }),
              ],
            });
          }
          (([i, c, h] = m.then ? (await m)() : m), r());
        } catch (e) {
          r(e);
        }
      });
    },
    6728: function (e, s, t) {
      "use strict";
      t.d(s, {
        Z: function () {
          return AccountMobileTray;
        },
      });
      var r = t(97458),
        a = t(47681),
        n = t.n(a),
        i = t(10821),
        c = t.n(i),
        l = t(93656),
        d = t(52983);
      function AccountMobileTray() {
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
          (0, r.jsxs)("div", {
            className:
              "fixed bottom-8 left-1/2 z-10 flex w-48 -translate-x-1/2 transform gap-x-6 rounded-xl bg-black/90  px-6 py-3 text-white lg:hidden",
            children: [
              (0, r.jsx)(TrayItem, {
                src: "/images/dashboard-icon.svg",
                href: "/account",
                active: "Dashboard" === s,
              }),
              (0, r.jsx)(TrayItem, {
                src: "/images/rewards-icon.svg",
                href: "/account/rewards",
                active: "Rewards" === s,
              }),
              (0, r.jsx)(TrayItem, {
                src: "/images/survey-icon.svg",
                href: "/account/surveys",
                active: "Surveys" === s,
              }),
              (0, r.jsx)(TrayItem, {
                src: "/images/settings-icon.svg",
                href: "/account/settings",
                active: "Settings" === s,
              }),
            ],
          })
        );
      }
      function TrayItem(e) {
        let { active: s, src: t, href: a } = e;
        return (0, r.jsx)(c(), {
          href: a,
          children: (0, r.jsx)(n(), {
            width: 32,
            height: 32,
            alt: "Logo",
            src: t,
            style: { opacity: s ? 1 : 0.5, color: "white", fill: "white" },
          }),
        });
      }
    },
    95611: function (e, s, t) {
      "use strict";
      t.a(e, async function (e, r) {
        try {
          t.d(s, {
            Z: function () {
              return AuthenticatedWrapper;
            },
          });
          var a = t(93656),
            n = t(52983),
            i = t(2300),
            c = e([i]);
          function AuthenticatedWrapper(e) {
            let { children: s } = e,
              t = (0, a.useRouter)(),
              { userData: r, cacheLoaded: c, loading: l } = (0, i.S)();
            return ((0, n.useEffect)(() => {
              l || !c || r || t.replace("/");
            }, [r, c, l, t]),
            r && c)
              ? s
              : null;
          }
          ((i = (c.then ? (await c)() : c)[0]), r());
        } catch (e) {
          r(e);
        }
      });
    },
    33043: function (e, s, t) {
      "use strict";
      t.d(s, {
        Z: function () {
          return Sidebar;
        },
      });
      var r = t(97458),
        a = t(47681),
        n = t.n(a),
        i = t(10821),
        c = t.n(i),
        l = t(93656),
        d = t(52983);
      function Sidebar() {
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
          (0, r.jsxs)("div", {
            className:
              "fixed left-0 top-0 z-[100] hidden h-screen w-[256px] flex-col items-center gap-y-6 border-r bg-white pt-8 lg:flex",
            children: [
              (0, r.jsx)(c(), {
                href: "/",
                children: (0, r.jsx)(n(), {
                  width: 87,
                  height: 40,
                  alt: "dark Tomb Raider logo",
                  src: "/images/tombraider-logo-dark.svg",
                  className: "pb-6",
                }),
              }),
              (0, r.jsx)(SidebarItem, {
                selected: "Dashboard" === s,
                href: "/account",
                src: "/images/dashboard-icon.svg",
                children: "Dashboard",
              }),
              (0, r.jsx)(SidebarItem, {
                selected: "Rewards" === s,
                href: "/account/rewards",
                src: "/images/rewards-icon.svg",
                children: "Rewards",
              }),
              (0, r.jsx)(SidebarItem, {
                selected: "Surveys" === s,
                href: "/account/surveys",
                src: "/images/survey-icon.svg",
                children: "Surveys",
              }),
              (0, r.jsx)(SidebarItem, {
                selected: "Settings" === s,
                href: "/account/settings",
                src: "/images/settings-icon.svg",
                children: "Settings",
              }),
            ],
          })
        );
      }
      function SidebarItem(e) {
        let { src: s, children: t, selected: a, href: i } = e;
        return (0, r.jsx)(c(), {
          href: i,
          children: (0, r.jsxs)("div", {
            className: "flex w-32 cursor-pointer font-bold ".concat(
              a ? "opacity-100" : "opacity-50",
            ),
            children: [
              (0, r.jsx)(n(), {
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
    58094: function (e, s, t) {
      "use strict";
      t.a(e, async function (e, r) {
        try {
          t.d(s, {
            Z: function () {
              return SurveyList;
            },
          });
          var a = t(97458),
            n = t(47681),
            i = t.n(n),
            c = t(75443),
            l = t(10821),
            d = t.n(l),
            u = t(2300),
            o = t(52983),
            h = t(39378),
            m = t.n(h),
            x = t(43976),
            f = e([u]);
          function SurveyList(e) {
            let { surveys: s } = e,
              {
                completedSurveys: t,
                rewardsLoading: r,
                fetchingCompletedSurveys: n,
              } = (0, u.S)();
            return r || n
              ? (0, a.jsx)("div", {
                  className: "flex w-full justify-center",
                  children: (0, a.jsx)(x.Z, {}),
                })
              : 0 === s.length
                ? (0, a.jsx)("div", {
                    children: "There are no surveys currently available.",
                  })
                : (0, a.jsx)("table", {
                    className: "w-full table-auto",
                    children: (0, a.jsx)("tbody", {
                      children: m()
                        .sortBy(s, (e) => (t.includes(e.telemetryId) ? 1 : 0))
                        .map((e) => (0, a.jsx)(SurveyItem, { survey: e })),
                    }),
                  });
          }
          function SurveyItem(e) {
            var s, t;
            let { survey: r } = e,
              { rewards: n, completedSurveys: l } = (0, u.S)(),
              h = (0, o.useMemo)(() => !!l && l.includes(r.telemetryId), [l]),
              m = (0, o.useMemo)(() => {
                if (n.allAvatars && r) {
                  var e;
                  return null !==
                    (e = n.allAvatars.find(
                      (e) =>
                        e.friendlyId &&
                        e.friendlyId === r.unlockAvatarFriendlyId,
                    )) && void 0 !== e
                    ? e
                    : null;
                }
                return null;
              }, [n, r]);
            return (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsxs)("tr", {
                  className: "hidden md:table-row",
                  children: [
                    (0, a.jsx)("td", {
                      children: (0, a.jsx)("h2", {
                        className: "text-2xl text-black",
                        children: r.title,
                      }),
                    }),
                    h
                      ? (0, a.jsx)("td", {
                          className: "text-teal-100",
                          children: "Complete",
                        })
                      : (0, a.jsx)("td", {
                          className: "text-red-500",
                          children: "Incomplete",
                        }),
                    (0, a.jsx)("td", {
                      className: "py-3",
                      children: (0, a.jsx)("div", {
                        className: "relative h-16 w-16",
                        children:
                          m &&
                          (0, a.jsx)(i(), {
                            alt: "avatar",
                            className: "rounded-full object-cover",
                            src:
                              null !== (s = null == m ? void 0 : m.imageUrl) &&
                              void 0 !== s
                                ? s
                                : "",
                            fill: !0,
                          }),
                      }),
                    }),
                    (0, a.jsx)("td", {
                      children: (0, a.jsx)("div", {
                        className: "inline",
                        children:
                          !h &&
                          (0, a.jsx)(d(), {
                            href: "/account/surveys/".concat(r.telemetryId),
                            children: (0, a.jsx)(c.Z, {
                              variant: "dark",
                              children: "Fill Survey",
                            }),
                          }),
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)(d(), {
                  className: "md:hidden",
                  href: "".concat(
                    h ? "" : "/account/surveys/".concat(r.telemetryId),
                  ),
                  children: (0, a.jsxs)("div", {
                    className:
                      "my-8 flex w-full items-center px-4 py-4 shadow-lg md:hidden",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "grow pr-4",
                        children: [
                          (0, a.jsx)("h2", {
                            className: "pb-1 text-2xl text-black",
                            children: r.title,
                          }),
                          h
                            ? (0, a.jsx)("p", {
                                className: "text-teal-100",
                                children: "Complete",
                              })
                            : (0, a.jsx)("p", {
                                className: "text-red-500",
                                children: "Incomplete",
                              }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "relative h-16 w-16 shrink-0",
                        children:
                          m &&
                          (0, a.jsx)(i(), {
                            alt: "avatar",
                            className: "rounded-full object-cover",
                            src:
                              null !== (t = null == m ? void 0 : m.imageUrl) &&
                              void 0 !== t
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
          ((u = (f.then ? (await f)() : f)[0]), r());
        } catch (e) {
          r(e);
        }
      });
    },
    19920: function (e, s, t) {
      "use strict";
      t.a(e, async function (e, r) {
        try {
          (t.r(s),
            t.d(s, {
              __N_SSG: function () {
                return o;
              },
              default: function () {
                return Surveys;
              },
            }));
          var a = t(97458),
            n = t(27233),
            i = t(6728),
            c = t(95611),
            l = t(33043),
            d = t(58094),
            u = e([n, c, d]);
          [n, c, d] = u.then ? (await u)() : u;
          var o = !0;
          function Surveys(e) {
            let { navItems: s, surveys: t } = e;
            return (0, a.jsx)(c.Z, {
              children: (0, a.jsx)("main", {
                className: " min-h-screen bg-white text-black",
                children: (0, a.jsxs)("div", {
                  className: " ",
                  children: [
                    (0, a.jsx)(n.Z, { surveys: t, navItems: s }),
                    (0, a.jsx)(l.Z, {}),
                    (0, a.jsx)(i.Z, {}),
                    (0, a.jsx)("div", {
                      className: "px-6 py-12 lg:ml-[256px] lg:px-12",
                      children: (0, a.jsx)(d.Z, { surveys: t }),
                    }),
                  ],
                }),
              }),
            });
          }
          r();
        } catch (e) {
          r(e);
        }
      });
    },
  },
  function (e) {
    (e.O(0, [46, 681, 882, 249, 774, 888, 179], function () {
      return e((e.s = 71052));
    }),
      (_N_E = e.O()));
  },
]);
