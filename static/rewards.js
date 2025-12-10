(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [581],
  {
    56184: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/account/rewards",
        function () {
          return s(35639);
        },
      ]);
    },
    27233: function (e, t, s) {
      "use strict";
      s.a(e, async function (e, a) {
        try {
          s.d(t, {
            Z: function () {
              return AccountHeader;
            },
          });
          var l = s(97458),
            i = s(52983),
            r = s(58738),
            n = s(87249),
            c = s(47681),
            d = s.n(c),
            o = s(10821),
            u = s.n(o),
            h = s(2300),
            m = e([r, n, h]);
          function AccountHeader(e) {
            let { navItems: t, surveys: s } = e,
              { isLoggedIn: a } = (0, h.S)(),
              [c, o] = (0, i.useState)(!1),
              getTabs = () =>
                t
                  .filter(
                    (e) => e.showInHeader && (!e.hideForLoggedInUsers || a),
                  )
                  .map((e) =>
                    (0, l.jsx)(n.Ax, {
                      href: e.link,
                      title: e.name,
                      darkMode: !0,
                    }),
                  );
            return (0, l.jsxs)("header", {
              className:
                "lg:w-[calc(100% - 256px] relative sticky left-0 top-0 z-[20]  bg-white px-12 pt-6 lg:ml-[256px]",
              children: [
                (0, l.jsx)("nav", {
                  "aria-label": "Global",
                  children: (0, l.jsxs)("div", {
                    className: " flex w-full justify-between",
                    children: [
                      (0, l.jsx)("div", {
                        className: "hidden items-center gap-x-4 lg:flex",
                        children: getTabs(),
                      }),
                      (0, l.jsx)(d(), {
                        width: 48,
                        height: 48,
                        alt: "hamburger menu",
                        className:
                          "relative z-20 cursor-pointer invert filter lg:hidden",
                        src: c ? "/images/close.svg" : "/images/hamburger.svg",
                        onClick: () => o(!c),
                      }),
                      (0, l.jsx)(u(), {
                        href: "/",
                        children: (0, l.jsx)(d(), {
                          className: "relative h-10 w-auto lg:hidden",
                          priority: !0,
                          src: "/images/tombraider-logo-dark.svg",
                          alt: "Header Logo",
                          width: 48,
                          height: 48,
                        }),
                      }),
                      (0, l.jsx)(r.Z, { surveys: s, darkMode: !0 }),
                    ],
                  }),
                }),
                (0, l.jsx)("div", {
                  className: " mt-4 h-[1px] w-full bg-gray-300/50",
                }),
                (0, l.jsx)("div", {
                  className:
                    "fixed left-0 top-0 z-10  w-full    overflow-hidden bg-gray-100 bg-opacity-90 transition duration-300 lg:hidden",
                  style: {
                    height: c ? "100vh" : "0",
                    transition: "height 0.3s ease",
                  },
                  children: (0, l.jsx)("div", {
                    className: "flex flex-col items-center gap-y-8 pt-32",
                    children: getTabs(),
                  }),
                }),
              ],
            });
          }
          (([r, n, h] = m.then ? (await m)() : m), a());
        } catch (e) {
          a(e);
        }
      });
    },
    6728: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return AccountMobileTray;
        },
      });
      var a = s(97458),
        l = s(47681),
        i = s.n(l),
        r = s(10821),
        n = s.n(r),
        c = s(93656),
        d = s(52983);
      function AccountMobileTray() {
        let e = (0, c.useRouter)(),
          [t, s] = (0, d.useState)("Dashboard");
        return (
          (0, d.useEffect)(() => {
            e.pathname.includes("settings")
              ? s("Settings")
              : e.pathname.includes("rewards")
                ? s("Rewards")
                : e.pathname.includes("surveys")
                  ? s("Surveys")
                  : s("Dashboard");
          }, [e, e.pathname]),
          (0, a.jsxs)("div", {
            className:
              "fixed bottom-8 left-1/2 z-10 flex w-48 -translate-x-1/2 transform gap-x-6 rounded-xl bg-black/90  px-6 py-3 text-white lg:hidden",
            children: [
              (0, a.jsx)(TrayItem, {
                src: "/images/dashboard-icon.svg",
                href: "/account",
                active: "Dashboard" === t,
              }),
              (0, a.jsx)(TrayItem, {
                src: "/images/rewards-icon.svg",
                href: "/account/rewards",
                active: "Rewards" === t,
              }),
              (0, a.jsx)(TrayItem, {
                src: "/images/survey-icon.svg",
                href: "/account/surveys",
                active: "Surveys" === t,
              }),
              (0, a.jsx)(TrayItem, {
                src: "/images/settings-icon.svg",
                href: "/account/settings",
                active: "Settings" === t,
              }),
            ],
          })
        );
      }
      function TrayItem(e) {
        let { active: t, src: s, href: l } = e;
        return (0, a.jsx)(n(), {
          href: l,
          children: (0, a.jsx)(i(), {
            width: 32,
            height: 32,
            alt: "Logo",
            src: s,
            style: { opacity: t ? 1 : 0.5, color: "white", fill: "white" },
          }),
        });
      }
    },
    95611: function (e, t, s) {
      "use strict";
      s.a(e, async function (e, a) {
        try {
          s.d(t, {
            Z: function () {
              return AuthenticatedWrapper;
            },
          });
          var l = s(93656),
            i = s(52983),
            r = s(2300),
            n = e([r]);
          function AuthenticatedWrapper(e) {
            let { children: t } = e,
              s = (0, l.useRouter)(),
              { userData: a, cacheLoaded: n, loading: c } = (0, r.S)();
            return ((0, i.useEffect)(() => {
              c || !n || a || s.replace("/");
            }, [a, n, c, s]),
            a && n)
              ? t
              : null;
          }
          ((r = (n.then ? (await n)() : n)[0]), a());
        } catch (e) {
          a(e);
        }
      });
    },
    92800: function (e, t, s) {
      "use strict";
      s.a(e, async function (e, a) {
        try {
          s.d(t, {
            Z: function () {
              return AvatarOption;
            },
          });
          var l = s(97458),
            i = s(47681),
            r = s.n(i),
            n = s(2300),
            c = s(52983),
            d = e([n]);
          function AvatarOption(e) {
            var t, s, a;
            let { avatar: i, onClick: d } = e,
              { userData: o } = (0, n.S)(),
              u = (0, c.useMemo)(() => {
                var e, t;
                return (
                  (null == o
                    ? void 0
                    : null === (t = o.accountInfo) || void 0 === t
                      ? void 0
                      : null === (e = t.titleInfo) || void 0 === e
                        ? void 0
                        : e.avatarUrl) === i.imageUrl
                );
              }, [
                o,
                null == o
                  ? void 0
                  : null === (s = o.accountInfo) || void 0 === s
                    ? void 0
                    : null === (t = s.titleInfo) || void 0 === t
                      ? void 0
                      : t.avatarUrl,
              ]);
            return (0, l.jsxs)("div", {
              onClick: () => {
                i.isUnlocked && d(i);
              },
              className: "flex items-center gap-x-4 ".concat(
                i.isUnlocked ? "cursor-pointer opacity-100" : "opacity-50",
              ),
              children: [
                (0, l.jsxs)("div", {
                  className:
                    "relative aspect-square w-16 shrink-0 rounded-full",
                  children: [
                    (0, l.jsx)(r(), {
                      className: "rounded-full object-cover",
                      alt: i.title,
                      fill: !0,
                      sizes: "128px",
                      src:
                        null !== (a = i.imageUrl) && void 0 !== a
                          ? a
                          : "/images/question_mark.svg",
                    }),
                    u &&
                      (0, l.jsx)("div", {
                        className:
                          "relative z-10 h-full w-full rounded-full bg-black/50",
                        children: (0, l.jsx)(r(), {
                          className: "object-cover p-4",
                          alt: "check",
                          src: "/images/check_white.svg",
                          fill: !0,
                        }),
                      }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsx)("p", {
                      className: "text-xl",
                      children: i.title,
                    }),
                    (0, l.jsx)("p", {
                      className: "text-md",
                      children: i.howToGetIt,
                    }),
                  ],
                }),
              ],
            });
          }
          ((n = (d.then ? (await d)() : d)[0]), a());
        } catch (e) {
          a(e);
        }
      });
    },
    33043: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return Sidebar;
        },
      });
      var a = s(97458),
        l = s(47681),
        i = s.n(l),
        r = s(10821),
        n = s.n(r),
        c = s(93656),
        d = s(52983);
      function Sidebar() {
        let e = (0, c.useRouter)(),
          [t, s] = (0, d.useState)("Dashboard");
        return (
          (0, d.useEffect)(() => {
            e.pathname.includes("settings")
              ? s("Settings")
              : e.pathname.includes("rewards")
                ? s("Rewards")
                : e.pathname.includes("surveys")
                  ? s("Surveys")
                  : s("Dashboard");
          }, [e, e.pathname]),
          (0, a.jsxs)("div", {
            className:
              "fixed left-0 top-0 z-[100] hidden h-screen w-[256px] flex-col items-center gap-y-6 border-r bg-white pt-8 lg:flex",
            children: [
              (0, a.jsx)(n(), {
                href: "/",
                children: (0, a.jsx)(i(), {
                  width: 87,
                  height: 40,
                  alt: "dark Tomb Raider logo",
                  src: "/images/tombraider-logo-dark.svg",
                  className: "pb-6",
                }),
              }),
              (0, a.jsx)(SidebarItem, {
                selected: "Dashboard" === t,
                href: "/account",
                src: "/images/dashboard-icon.svg",
                children: "Dashboard",
              }),
              (0, a.jsx)(SidebarItem, {
                selected: "Rewards" === t,
                href: "/account/rewards",
                src: "/images/rewards-icon.svg",
                children: "Rewards",
              }),
              (0, a.jsx)(SidebarItem, {
                selected: "Surveys" === t,
                href: "/account/surveys",
                src: "/images/survey-icon.svg",
                children: "Surveys",
              }),
              (0, a.jsx)(SidebarItem, {
                selected: "Settings" === t,
                href: "/account/settings",
                src: "/images/settings-icon.svg",
                children: "Settings",
              }),
            ],
          })
        );
      }
      function SidebarItem(e) {
        let { src: t, children: s, selected: l, href: r } = e;
        return (0, a.jsx)(n(), {
          href: r,
          children: (0, a.jsxs)("div", {
            className: "flex w-32 cursor-pointer font-bold ".concat(
              l ? "opacity-100" : "opacity-50",
            ),
            children: [
              (0, a.jsx)(i(), {
                width: 24,
                height: 24,
                alt: "Logo",
                className: "mr-3",
                src: t,
              }),
              s,
            ],
          }),
        });
      }
    },
    35639: function (e, t, s) {
      "use strict";
      s.a(e, async function (e, a) {
        try {
          (s.r(t),
            s.d(t, {
              __N_SSG: function () {
                return j;
              },
              default: function () {
                return RewardsPage;
              },
            }));
          var l = s(97458),
            i = s(27233),
            r = s(6728),
            n = s(95611),
            c = s(33043),
            d = s(43976),
            o = s(14948),
            u = s(92800),
            h = s(84531),
            m = s(2300),
            x = s(82262),
            f = s(47681),
            v = s.n(f),
            g = s(52983),
            p = e([i, n, o, u, h, m, x]);
          [i, n, o, u, h, m, x] = p.then ? (await p)() : p;
          var j = !0;
          function RewardsPage(e) {
            var t, s;
            let { navItems: a, surveys: f } = e,
              {
                userData: p,
                setUserData: j,
                rewards: y,
                rewardsLoading: w,
                rewardsError: b,
                fetchRewards: N,
              } = (0, m.S)(),
              [k, I] = (0, g.useState)(null),
              [S, U] = (0, g.useState)(null);
            ((0, g.useEffect)(() => {
              N();
            }, []),
              (0, g.useEffect)(() => {
                let e = localStorage.getItem("code-pending-redemption");
                e &&
                  (localStorage.removeItem("code-pending-redemption"),
                  (0, x.XT)({ code: e })
                    .then((e) => {
                      var t, s;
                      ("data" in e &&
                        (null === (t = e.data) || void 0 === t
                          ? void 0
                          : t.items) &&
                        (null === (s = e.data) || void 0 === s
                          ? void 0
                          : s.items.length) > 0 &&
                        I(e.data.items),
                        N());
                    })
                    .catch((e) => {
                      console.error("Failed to redeem pending code:", e);
                    }));
              }, [N]));
            let _ =
                (null == p
                  ? void 0
                  : null === (s = p.accountInfo) || void 0 === s
                    ? void 0
                    : null === (t = s.titleInfo) || void 0 === t
                      ? void 0
                      : t.avatarUrl) || "/images/question_mark.svg",
              handleAvatarSelect = async (e) => {
                if (e.isUnlocked && S !== e.id) {
                  U(e.id);
                  try {
                    (await (0, x.J3)({ itemId: e.id }),
                      j((t) => {
                        var s, a;
                        return (
                          null == t
                            ? void 0
                            : null === (s = t.accountInfo) || void 0 === s
                              ? void 0
                              : s.titleInfo
                        )
                          ? {
                              ...t,
                              accountInfo: {
                                ...t.accountInfo,
                                titleInfo: {
                                  ...t.accountInfo.titleInfo,
                                  avatarUrl:
                                    null !== (a = e.imageUrl) && void 0 !== a
                                      ? a
                                      : t.accountInfo.titleInfo.avatarUrl,
                                },
                              },
                            }
                          : t;
                      }));
                  } catch (e) {
                    console.error("Failed to set avatar from rewards page", e);
                  } finally {
                    U(null);
                  }
                }
              },
              D = (0, g.useMemo)(() => {
                var e;
                let t = (
                  null !== (e = y.avatars) && void 0 !== e ? e : []
                ).filter((e) => e.isUnlocked);
                return [...t].sort((e, t) =>
                  e.title.localeCompare(t.title, void 0, {
                    sensitivity: "base",
                  }),
                );
              }, [y.avatars]),
              T = (0, g.useMemo)(() => {
                var e, t;
                let s = (
                    null !== (e = y.fileDownloads) && void 0 !== e ? e : []
                  )
                    .filter((e) => e.isUnlocked)
                    .map((e) => {
                      var t;
                      return {
                        id: e.id,
                        type: "file",
                        name: e.title,
                        link: e.fileUrl,
                        imageUrl: e.imageUrl,
                        startDate:
                          null !== (t = e.startDate) && void 0 !== t
                            ? t
                            : void 0,
                      };
                    }),
                  a = (null !== (t = y.videoLinks) && void 0 !== t ? t : [])
                    .filter((e) => e.isUnlocked)
                    .map((e) => {
                      var t;
                      return {
                        id: e.id,
                        type: "video",
                        name: e.title,
                        link: e.link,
                        startDate:
                          null !== (t = e.startDate) && void 0 !== t
                            ? t
                            : void 0,
                      };
                    });
                return [...s, ...a].sort((e, t) =>
                  e.name.localeCompare(t.name, void 0, { sensitivity: "base" }),
                );
              }, [y.fileDownloads, y.videoLinks]);
            return (0, l.jsxs)(n.Z, {
              children: [
                (0, l.jsx)(h.Z, {
                  rewards: k,
                  isLoggedIn: !0,
                  onClose: () => I(null),
                  showViewRewardsButton: !1,
                }),
                (0, l.jsx)("main", {
                  className: "min-h-screen bg-white text-black",
                  children: (0, l.jsxs)("div", {
                    children: [
                      (0, l.jsx)(i.Z, { surveys: f, navItems: a }),
                      (0, l.jsx)(c.Z, {}),
                      (0, l.jsx)(r.Z, {}),
                      (0, l.jsxs)("div", {
                        className: "px-6 py-12 lg:ml-[256px] lg:px-12",
                        children: [
                          (0, l.jsxs)("section", {
                            className:
                              "flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between",
                            children: [
                              (0, l.jsxs)("div", {
                                className: "flex items-center gap-6",
                                children: [
                                  (0, l.jsx)("div", {
                                    className: "relative h-24 w-24 shrink-0",
                                    children: (0, l.jsx)(v(), {
                                      fill: !0,
                                      alt: "Selected avatar",
                                      sizes: "192px",
                                      src: _,
                                      className: "rounded-full object-cover",
                                    }),
                                  }),
                                  (0, l.jsxs)("div", {
                                    children: [
                                      (0, l.jsx)("h1", {
                                        className:
                                          "text-4xl font-bold sm:text-5xl",
                                        children: "Rewards",
                                      }),
                                      (0, l.jsx)("p", {
                                        className:
                                          "mt-3 text-base text-gray-600",
                                        children:
                                          "Enter your reward code to unlock items instantly.",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, l.jsx)(o.Z, {
                                className: "lg:max-w-2xl",
                                onRedeemSuccess: (e) => {
                                  (e.items.length > 0 && I(e.items), N());
                                },
                              }),
                            ],
                          }),
                          (0, l.jsxs)("section", {
                            className: "mt-12 grid gap-6 lg:grid-cols-3",
                            children: [
                              (0, l.jsxs)("div", {
                                className:
                                  "rounded-xl bg-lightgray-100 px-6 py-8 shadow-sm",
                                children: [
                                  (0, l.jsx)("h3", {
                                    className: "text-xl font-semibold",
                                    children: "Avatars",
                                  }),
                                  w
                                    ? (0, l.jsx)("div", {
                                        className: "mt-6 flex justify-center",
                                        children: (0, l.jsx)(d.Z, {}),
                                      })
                                    : 0 === D.length
                                      ? (0, l.jsx)("p", {
                                          className:
                                            "mt-6 text-sm text-gray-600",
                                          children:
                                            "You have not unlocked any avatars yet.",
                                        })
                                      : (0, l.jsx)("ul", {
                                          className: "mt-6 flex flex-col gap-4",
                                          children: D.map((e) =>
                                            (0, l.jsx)(
                                              "li",
                                              {
                                                children: (0, l.jsx)(u.Z, {
                                                  avatar: e,
                                                  onClick: handleAvatarSelect,
                                                }),
                                              },
                                              e.id,
                                            ),
                                          ),
                                        }),
                                  b &&
                                    (0, l.jsx)("p", {
                                      className: "text-red-600 mt-4 text-sm",
                                      children: b,
                                    }),
                                ],
                              }),
                              (0, l.jsxs)("div", {
                                className:
                                  "rounded-xl bg-lightgray-100 px-6 py-8 shadow-sm",
                                children: [
                                  (0, l.jsx)("h3", {
                                    className: "text-xl font-semibold",
                                    children: "Other Downloads",
                                  }),
                                  w
                                    ? (0, l.jsx)("div", {
                                        className: "mt-6 flex justify-center",
                                        children: (0, l.jsx)(d.Z, {}),
                                      })
                                    : 0 === T.length
                                      ? (0, l.jsx)("p", {
                                          className:
                                            "mt-6 text-sm text-gray-600",
                                          children:
                                            "You have not unlocked any downloads yet.",
                                        })
                                      : (0, l.jsx)("ul", {
                                          className: "mt-6 flex flex-col gap-4",
                                          children: T.map((e) => {
                                            let t = (0, l.jsxs)("div", {
                                              className:
                                                "flex items-center gap-4 rounded-lg bg-white/60 p-3",
                                              children: [
                                                (0, l.jsx)("div", {
                                                  className:
                                                    "relative h-16 w-16 min-w-[64px] overflow-hidden rounded-full border border-black/10 bg-white",
                                                  children:
                                                    "file" === e.type &&
                                                    e.imageUrl
                                                      ? (0, l.jsx)(v(), {
                                                          fill: !0,
                                                          sizes: "128px",
                                                          src: e.imageUrl,
                                                          alt: e.name,
                                                          className:
                                                            "object-cover",
                                                        })
                                                      : (0, l.jsx)("div", {
                                                          className:
                                                            "flex h-full w-full items-center justify-center text-xs font-semibold uppercase text-gray-500",
                                                          children:
                                                            "file" === e.type
                                                              ? "Image"
                                                              : "Link",
                                                        }),
                                                }),
                                                (0, l.jsxs)("div", {
                                                  className:
                                                    "flex flex-1 flex-col",
                                                  children: [
                                                    (0, l.jsx)("p", {
                                                      className:
                                                        "font-semibold",
                                                      children: e.name,
                                                    }),
                                                    (0, l.jsx)("span", {
                                                      className:
                                                        "text-xs uppercase tracking-wide text-gray-500",
                                                      children:
                                                        "file" === e.type
                                                          ? "Image Download"
                                                          : "Video Link",
                                                    }),
                                                  ],
                                                }),
                                                e.link
                                                  ? (0, l.jsx)("span", {
                                                      className:
                                                        "text-sm font-semibold text-black underline decoration-2 underline-offset-4",
                                                      children:
                                                        "file" === e.type
                                                          ? "Download"
                                                          : "Open",
                                                    })
                                                  : (0, l.jsx)("span", {
                                                      className:
                                                        "text-xs uppercase tracking-wide text-gray-400",
                                                      children: "Unavailable",
                                                    }),
                                              ],
                                            });
                                            return e.link
                                              ? "file" === e.type
                                                ? (0, l.jsx)(
                                                    "li",
                                                    {
                                                      children: (0, l.jsx)(
                                                        "a",
                                                        {
                                                          href: e.link,
                                                          download: !0,
                                                          className:
                                                            "block transition hover:opacity-90",
                                                          children: t,
                                                        },
                                                      ),
                                                    },
                                                    e.id,
                                                  )
                                                : (0, l.jsx)(
                                                    "li",
                                                    {
                                                      children: (0, l.jsx)(
                                                        "a",
                                                        {
                                                          href: e.link,
                                                          target: "_blank",
                                                          rel: "noreferrer",
                                                          className:
                                                            "block transition hover:opacity-90",
                                                          children: t,
                                                        },
                                                      ),
                                                    },
                                                    e.id,
                                                  )
                                              : (0, l.jsx)(
                                                  "li",
                                                  {
                                                    className: "opacity-70",
                                                    children: t,
                                                  },
                                                  e.id,
                                                );
                                          }),
                                        }),
                                  b &&
                                    (0, l.jsx)("p", {
                                      className: "text-red-600 mt-4 text-sm",
                                      children: b,
                                    }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            });
          }
          a();
        } catch (e) {
          a(e);
        }
      });
    },
  },
  function (e) {
    (e.O(0, [46, 681, 882, 249, 774, 888, 179], function () {
      return e((e.s = 56184));
    }),
      (_N_E = e.O()));
  },
]);
