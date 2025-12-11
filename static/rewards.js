(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [581],
  {
    56184: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/account/rewards",
        function () {
          return a(35639);
        },
      ]);
    },
    27233: function (e, t, a) {
      "use strict";
      a.a(e, async function (e, s) {
        try {
          a.d(t, {
            Z: function () {
              return AccountHeader;
            },
          });
          var l = a(97458),
            i = a(52983),
            n = a(58738),
            r = a(87249),
            c = a(47681),
            o = a.n(c),
            d = a(10821),
            u = a.n(d),
            x = a(2300),
            h = e([n, r, x]);
          function AccountHeader(e) {
            let { navItems: t, surveys: a } = e,
              { isLoggedIn: s } = (0, x.S)(),
              [c, d] = (0, i.useState)(!1),
              getTabs = () =>
                t
                  .filter(
                    (e) => e.showInHeader && (!e.hideForLoggedInUsers || s),
                  )
                  .map((e) =>
                    (0, l.jsx)(r.Ax, {
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
                      (0, l.jsx)(o(), {
                        width: 48,
                        height: 48,
                        alt: "hamburger menu",
                        className:
                          "relative z-20 cursor-pointer invert filter lg:hidden",
                        src: c ? "/images/close.svg" : "/images/hamburger.svg",
                        onClick: () => d(!c),
                      }),
                      (0, l.jsx)(u(), {
                        href: "/",
                        children: (0, l.jsx)(o(), {
                          className: "relative h-10 w-auto lg:hidden",
                          priority: !0,
                          src: "/images/tombraider-logo-dark.svg",
                          alt: "Header Logo",
                          width: 48,
                          height: 48,
                        }),
                      }),
                      (0, l.jsx)(n.Z, { surveys: a, darkMode: !0 }),
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
          (([n, r, x] = h.then ? (await h)() : h), s());
        } catch (e) {
          s(e);
        }
      });
    },
    6728: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return AccountMobileTray;
        },
      });
      var s = a(97458),
        l = a(47681),
        i = a.n(l),
        n = a(10821),
        r = a.n(n),
        c = a(93656),
        o = a(52983);
      function AccountMobileTray() {
        let e = (0, c.useRouter)(),
          [t, a] = (0, o.useState)("Dashboard");
        return (
          (0, o.useEffect)(() => {
            e.pathname.includes("settings")
              ? a("Settings")
              : e.pathname.includes("rewards")
                ? a("Rewards")
                : e.pathname.includes("surveys")
                  ? a("Surveys")
                  : a("Dashboard");
          }, [e, e.pathname]),
          (0, s.jsxs)("div", {
            className:
              "fixed bottom-8 left-1/2 z-10 flex w-48 -translate-x-1/2 transform gap-x-6 rounded-xl bg-black/90  px-6 py-3 text-white lg:hidden",
            children: [
              (0, s.jsx)(TrayItem, {
                src: "/images/dashboard-icon.svg",
                href: "/account",
                active: "Dashboard" === t,
              }),
              (0, s.jsx)(TrayItem, {
                src: "/images/rewards-icon.svg",
                href: "/account/rewards",
                active: "Rewards" === t,
              }),
              (0, s.jsx)(TrayItem, {
                src: "/images/survey-icon.svg",
                href: "/account/surveys",
                active: "Surveys" === t,
              }),
              (0, s.jsx)(TrayItem, {
                src: "/images/settings-icon.svg",
                href: "/account/settings",
                active: "Settings" === t,
              }),
            ],
          })
        );
      }
      function TrayItem(e) {
        let { active: t, src: a, href: l } = e;
        return (0, s.jsx)(r(), {
          href: l,
          children: (0, s.jsx)(i(), {
            width: 32,
            height: 32,
            alt: "Logo",
            src: a,
            style: { opacity: t ? 1 : 0.5, color: "white", fill: "white" },
          }),
        });
      }
    },
    95611: function (e, t, a) {
      "use strict";
      a.a(e, async function (e, s) {
        try {
          a.d(t, {
            Z: function () {
              return AuthenticatedWrapper;
            },
          });
          var l = a(93656),
            i = a(52983),
            n = a(2300),
            r = e([n]);
          function AuthenticatedWrapper(e) {
            let { children: t } = e,
              a = (0, l.useRouter)(),
              { userData: s, cacheLoaded: r, loading: c } = (0, n.S)();
            return ((0, i.useEffect)(() => {
              c || !r || s || a.replace("/");
            }, [s, r, c, a]),
            s && r)
              ? t
              : null;
          }
          ((n = (r.then ? (await r)() : r)[0]), s());
        } catch (e) {
          s(e);
        }
      });
    },
    92800: function (e, t, a) {
      "use strict";
      a.a(e, async function (e, s) {
        try {
          a.d(t, {
            Z: function () {
              return AvatarOption;
            },
          });
          var l = a(97458),
            i = a(47681),
            n = a.n(i),
            r = a(2300),
            c = a(52983),
            o = e([r]);
          function AvatarOption(e) {
            var t, a, s;
            let { avatar: i, onClick: o } = e,
              { userData: d } = (0, r.S)(),
              u = (0, c.useMemo)(() => {
                var e, t;
                return (
                  (null == d
                    ? void 0
                    : null === (t = d.accountInfo) || void 0 === t
                      ? void 0
                      : null === (e = t.titleInfo) || void 0 === e
                        ? void 0
                        : e.avatarUrl) === i.imageUrl
                );
              }, [
                d,
                null == d
                  ? void 0
                  : null === (a = d.accountInfo) || void 0 === a
                    ? void 0
                    : null === (t = a.titleInfo) || void 0 === t
                      ? void 0
                      : t.avatarUrl,
              ]);
            return (0, l.jsxs)("div", {
              onClick: () => {
                i.isUnlocked && o(i);
              },
              className: "flex items-center gap-x-4 ".concat(
                i.isUnlocked ? "cursor-pointer opacity-100" : "opacity-50",
              ),
              children: [
                (0, l.jsxs)("div", {
                  className:
                    "relative aspect-square w-16 shrink-0 rounded-full",
                  children: [
                    (0, l.jsx)(n(), {
                      className: "rounded-full object-cover",
                      alt: i.title,
                      fill: !0,
                      sizes: "128px",
                      src:
                        null !== (s = i.imageUrl) && void 0 !== s
                          ? s
                          : "/images/question_mark.svg",
                    }),
                    u &&
                      (0, l.jsx)("div", {
                        className:
                          "relative z-10 h-full w-full rounded-full bg-black/50",
                        children: (0, l.jsx)(n(), {
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
          ((r = (o.then ? (await o)() : o)[0]), s());
        } catch (e) {
          s(e);
        }
      });
    },
    33043: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return Sidebar;
        },
      });
      var s = a(97458),
        l = a(47681),
        i = a.n(l),
        n = a(10821),
        r = a.n(n),
        c = a(93656),
        o = a(52983);
      function Sidebar() {
        let e = (0, c.useRouter)(),
          [t, a] = (0, o.useState)("Dashboard");
        return (
          (0, o.useEffect)(() => {
            e.pathname.includes("settings")
              ? a("Settings")
              : e.pathname.includes("rewards")
                ? a("Rewards")
                : e.pathname.includes("surveys")
                  ? a("Surveys")
                  : a("Dashboard");
          }, [e, e.pathname]),
          (0, s.jsxs)("div", {
            className:
              "fixed left-0 top-0 z-[100] hidden h-screen w-[256px] flex-col items-center gap-y-6 border-r bg-white pt-8 lg:flex",
            children: [
              (0, s.jsx)(r(), {
                href: "/",
                children: (0, s.jsx)(i(), {
                  width: 87,
                  height: 40,
                  alt: "dark Tomb Raider logo",
                  src: "/images/tombraider-logo-dark.svg",
                  className: "pb-6",
                }),
              }),
              (0, s.jsx)(SidebarItem, {
                selected: "Dashboard" === t,
                href: "/account",
                src: "/images/dashboard-icon.svg",
                children: "Dashboard",
              }),
              (0, s.jsx)(SidebarItem, {
                selected: "Rewards" === t,
                href: "/account/rewards",
                src: "/images/rewards-icon.svg",
                children: "Rewards",
              }),
              (0, s.jsx)(SidebarItem, {
                selected: "Surveys" === t,
                href: "/account/surveys",
                src: "/images/survey-icon.svg",
                children: "Surveys",
              }),
              (0, s.jsx)(SidebarItem, {
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
        let { src: t, children: a, selected: l, href: n } = e;
        return (0, s.jsx)(r(), {
          href: n,
          children: (0, s.jsxs)("div", {
            className: "flex w-32 cursor-pointer font-bold ".concat(
              l ? "opacity-100" : "opacity-50",
            ),
            children: [
              (0, s.jsx)(i(), {
                width: 24,
                height: 24,
                alt: "Logo",
                className: "mr-3",
                src: t,
              }),
              a,
            ],
          }),
        });
      }
    },
    35639: function (e, t, a) {
      "use strict";
      a.a(e, async function (e, s) {
        try {
          (a.r(t),
            a.d(t, {
              __N_SSG: function () {
                return y;
              },
              default: function () {
                return RewardsPage;
              },
            }));
          var l = a(97458),
            i = a(27233),
            n = a(6728),
            r = a(95611),
            c = a(33043),
            o = a(43976),
            d = a(14948),
            u = a(92800),
            x = a(84531),
            h = a(2300),
            m = a(77765),
            v = a(82262),
            f = a(47681),
            g = a.n(f),
            p = a(52983),
            j = e([i, r, d, u, x, h, v]);
          [i, r, d, u, x, h, v] = j.then ? (await j)() : j;
          var y = !0;
          function RewardsPage(e) {
            var t, a, s;
            let { navItems: f, surveys: j } = e,
              {
                userData: y,
                setUserData: b,
                rewards: w,
                rewardsLoading: N,
                rewardsError: k,
                fetchRewards: I,
              } = (0, h.S)(),
              [S, U] = (0, p.useState)(null),
              [C, _] = (0, p.useState)(null),
              [D, R] = (0, p.useState)(
                null !== (s = w.externalCodes) && void 0 !== s ? s : [],
              ),
              [Z, T] = (0, p.useState)({}),
              { addAlert: A } = (0, m.Z)();
            ((0, p.useEffect)(() => {
              I();
            }, []),
              (0, p.useEffect)(() => {
                var e;
                R(null !== (e = w.externalCodes) && void 0 !== e ? e : []);
              }, [w.externalCodes]),
              (0, p.useEffect)(() => {
                let e = localStorage.getItem("code-pending-redemption");
                e &&
                  (localStorage.removeItem("code-pending-redemption"),
                  (0, v.XT)({ code: e })
                    .then((e) => {
                      var t, a;
                      ("data" in e &&
                        (null === (t = e.data) || void 0 === t
                          ? void 0
                          : t.items) &&
                        (null === (a = e.data) || void 0 === a
                          ? void 0
                          : a.items.length) > 0 &&
                        U(e.data.items),
                        I());
                    })
                    .catch((e) => {
                      console.error("Failed to redeem pending code:", e);
                    }));
              }, [I]));
            let E =
                (null == y
                  ? void 0
                  : null === (a = y.accountInfo) || void 0 === a
                    ? void 0
                    : null === (t = a.titleInfo) || void 0 === t
                      ? void 0
                      : t.avatarUrl) || "/images/question_mark.svg",
              handleRevealExternalCode = async (e) => {
                T((t) => ({
                  ...t,
                  [e]: { ...t[e], loading: !0, error: null },
                }));
                try {
                  let t = await (0, v.uh)(e),
                    a = "data" in t ? t.data : null;
                  (R((t) =>
                    t.map((t) => {
                      var s, l, i;
                      return t.id === e
                        ? {
                            ...t,
                            status: "assigned",
                            code:
                              null !== (s = null == a ? void 0 : a.code) &&
                              void 0 !== s
                                ? s
                                : t.code,
                            assignedAt:
                              null !==
                                (i =
                                  null !==
                                    (l = null == a ? void 0 : a.assignedAt) &&
                                  void 0 !== l
                                    ? l
                                    : t.assignedAt) && void 0 !== i
                                ? i
                                : Date.now(),
                          }
                        : t;
                    }),
                  ),
                    T((t) => ({
                      ...t,
                      [e]: { ...t[e], loading: !1, error: null },
                    })));
                } catch (t) {
                  (console.error("Failed to reveal external code", t),
                    T((t) => ({
                      ...t,
                      [e]: {
                        ...t[e],
                        loading: !1,
                        error:
                          "Unable to retrieve your code. Please try again.",
                      },
                    })));
                }
              },
              handleCopy = async (e) => {
                try {
                  (await navigator.clipboard.writeText(e),
                    A({
                      title: "Code copied",
                      children: "Your code has been copied to the clipboard.",
                    }));
                } catch (e) {
                  (console.error("Failed to copy code", e),
                    A({
                      title: "Copy failed",
                      children: "We couldn't copy the code. Please try again.",
                    }));
                }
              },
              handleAvatarSelect = async (e) => {
                if (e.isUnlocked && C !== e.id) {
                  _(e.id);
                  try {
                    (await (0, v.J3)({ itemId: e.id }),
                      b((t) => {
                        var a, s;
                        return (
                          null == t
                            ? void 0
                            : null === (a = t.accountInfo) || void 0 === a
                              ? void 0
                              : a.titleInfo
                        )
                          ? {
                              ...t,
                              accountInfo: {
                                ...t.accountInfo,
                                titleInfo: {
                                  ...t.accountInfo.titleInfo,
                                  avatarUrl:
                                    null !== (s = e.imageUrl) && void 0 !== s
                                      ? s
                                      : t.accountInfo.titleInfo.avatarUrl,
                                },
                              },
                            }
                          : t;
                      }));
                  } catch (e) {
                    console.error("Failed to set avatar from rewards page", e);
                  } finally {
                    _(null);
                  }
                }
              },
              z = (0, p.useMemo)(() => {
                var e;
                let t = (
                  null !== (e = w.avatars) && void 0 !== e ? e : []
                ).filter((e) => e.isUnlocked);
                return [...t].sort((e, t) =>
                  e.title.localeCompare(t.title, void 0, {
                    sensitivity: "base",
                  }),
                );
              }, [w.avatars]),
              L = (0, p.useMemo)(() => {
                var e, t;
                let a = (
                    null !== (e = w.fileDownloads) && void 0 !== e ? e : []
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
                  s = (null !== (t = w.videoLinks) && void 0 !== t ? t : [])
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
                return [...a, ...s].sort((e, t) =>
                  e.name.localeCompare(t.name, void 0, { sensitivity: "base" }),
                );
              }, [w.fileDownloads, w.videoLinks]),
              M = (0, p.useMemo)(
                () =>
                  (null != D ? D : [])
                    .filter((e) => e.isUnlocked)
                    .sort((e, t) =>
                      e.title.localeCompare(t.title, void 0, {
                        sensitivity: "base",
                      }),
                    ),
                [D],
              );
            return (0, l.jsxs)(r.Z, {
              children: [
                (0, l.jsx)(x.Z, {
                  rewards: S,
                  isLoggedIn: !0,
                  onClose: () => U(null),
                  showViewRewardsButton: !1,
                }),
                (0, l.jsx)("main", {
                  className: "min-h-screen bg-white text-black",
                  children: (0, l.jsxs)("div", {
                    children: [
                      (0, l.jsx)(i.Z, { surveys: j, navItems: f }),
                      (0, l.jsx)(c.Z, {}),
                      (0, l.jsx)(n.Z, {}),
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
                                    children: (0, l.jsx)(g(), {
                                      fill: !0,
                                      alt: "Selected avatar",
                                      sizes: "192px",
                                      src: E,
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
                              (0, l.jsx)(d.Z, {
                                className: "lg:max-w-2xl",
                                onRedeemSuccess: (e) => {
                                  (e.items.length > 0 && U(e.items), I());
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
                                  N
                                    ? (0, l.jsx)("div", {
                                        className: "mt-6 flex justify-center",
                                        children: (0, l.jsx)(o.Z, {}),
                                      })
                                    : 0 === z.length
                                      ? (0, l.jsx)("p", {
                                          className:
                                            "mt-6 text-sm text-gray-600",
                                          children:
                                            "You have not unlocked any avatars yet.",
                                        })
                                      : (0, l.jsx)("ul", {
                                          className: "mt-6 flex flex-col gap-4",
                                          children: z.map((e) =>
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
                                  k &&
                                    (0, l.jsx)("p", {
                                      className: "text-red-600 mt-4 text-sm",
                                      children: k,
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
                                  N
                                    ? (0, l.jsx)("div", {
                                        className: "mt-6 flex justify-center",
                                        children: (0, l.jsx)(o.Z, {}),
                                      })
                                    : 0 === L.length
                                      ? (0, l.jsx)("p", {
                                          className:
                                            "mt-6 text-sm text-gray-600",
                                          children:
                                            "You have not unlocked any downloads yet.",
                                        })
                                      : (0, l.jsx)("ul", {
                                          className: "mt-6 flex flex-col gap-4",
                                          children: L.map((e) => {
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
                                                      ? (0, l.jsx)(g(), {
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
                                  k &&
                                    (0, l.jsx)("p", {
                                      className: "text-red-600 mt-4 text-sm",
                                      children: k,
                                    }),
                                ],
                              }),
                              (0, l.jsxs)("div", {
                                className:
                                  "rounded-xl bg-lightgray-100 px-6 py-8 shadow-sm",
                                children: [
                                  (0, l.jsx)("h3", {
                                    className: "text-xl font-semibold",
                                    children: "External Codes",
                                  }),
                                  N
                                    ? (0, l.jsx)("div", {
                                        className: "mt-6 flex justify-center",
                                        children: (0, l.jsx)(o.Z, {}),
                                      })
                                    : 0 === M.length
                                      ? (0, l.jsx)("p", {
                                          className:
                                            "mt-6 text-sm text-gray-600",
                                          children:
                                            "You have not unlocked any external codes yet.",
                                        })
                                      : (0, l.jsx)("ul", {
                                          className: "mt-6 flex flex-col gap-4",
                                          children: M.map((e) => {
                                            let t = Z[e.id],
                                              a = e.code;
                                            return (0, l.jsx)(
                                              "li",
                                              {
                                                children: (0, l.jsxs)("div", {
                                                  className:
                                                    "flex flex-col gap-3 rounded-lg bg-white/70 p-4",
                                                  children: [
                                                    (0, l.jsxs)("div", {
                                                      className:
                                                        "flex flex-col gap-1",
                                                      children: [
                                                        (0, l.jsx)("p", {
                                                          className:
                                                            "text-base font-semibold",
                                                          children: e.title,
                                                        }),
                                                        e.redemptionInstructions
                                                          ? (0, l.jsx)("p", {
                                                              className:
                                                                "text-sm text-gray-700",
                                                              children:
                                                                e.redemptionInstructions,
                                                            })
                                                          : null,
                                                      ],
                                                    }),
                                                    a
                                                      ? (0, l.jsxs)("div", {
                                                          className:
                                                            "flex flex-wrap items-center gap-3",
                                                          children: [
                                                            (0, l.jsx)("span", {
                                                              className:
                                                                "rounded-md bg-gray-900 px-3 py-1 font-mono text-sm text-white",
                                                              children: a,
                                                            }),
                                                            (0, l.jsx)(
                                                              "button",
                                                              {
                                                                type: "button",
                                                                onClick: () =>
                                                                  handleCopy(a),
                                                                className:
                                                                  "text-yellow-600 hover:text-yellow-700 text-sm font-semibold",
                                                                children:
                                                                  "Copy code",
                                                              },
                                                            ),
                                                          ],
                                                        })
                                                      : (0, l.jsx)("button", {
                                                          type: "button",
                                                          disabled:
                                                            null == t
                                                              ? void 0
                                                              : t.loading,
                                                          onClick: () =>
                                                            handleRevealExternalCode(
                                                              e.id,
                                                            ),
                                                          className:
                                                            "hover:bg-yellow-400 inline-flex items-center justify-center rounded-md bg-yellow-500 px-4 py-2 text-sm font-semibold text-black transition disabled:opacity-60",
                                                          children: (
                                                            null == t
                                                              ? void 0
                                                              : t.loading
                                                          )
                                                            ? "Fetching code..."
                                                            : "Reveal code",
                                                        }),
                                                    (null == t
                                                      ? void 0
                                                      : t.error) &&
                                                      (0, l.jsx)("p", {
                                                        className:
                                                          "text-red-600 text-sm",
                                                        children: t.error,
                                                      }),
                                                  ],
                                                }),
                                              },
                                              e.id,
                                            );
                                          }),
                                        }),
                                  k &&
                                    (0, l.jsx)("p", {
                                      className: "text-red-600 mt-4 text-sm",
                                      children: k,
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
          s();
        } catch (e) {
          s(e);
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
