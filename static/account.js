(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [966],
  {
    57747: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/account",
        function () {
          return s(78136);
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
          var n = s(97458),
            l = s(52983),
            i = s(58738),
            r = s(87249),
            c = s(47681),
            o = s.n(c),
            d = s(10821),
            u = s.n(d),
            h = s(2300),
            x = e([i, r, h]);
          function AccountHeader(e) {
            let { navItems: t, surveys: s } = e,
              { isLoggedIn: a } = (0, h.S)(),
              [c, d] = (0, l.useState)(!1),
              getTabs = () =>
                t
                  .filter(
                    (e) => e.showInHeader && (!e.hideForLoggedInUsers || a),
                  )
                  .map((e) =>
                    (0, n.jsx)(r.Ax, {
                      href: e.link,
                      title: e.name,
                      darkMode: !0,
                    }),
                  );
            return (0, n.jsxs)("header", {
              className:
                "lg:w-[calc(100% - 256px] relative sticky left-0 top-0 z-[20]  bg-white px-12 pt-6 lg:ml-[256px]",
              children: [
                (0, n.jsx)("nav", {
                  "aria-label": "Global",
                  children: (0, n.jsxs)("div", {
                    className: " flex w-full justify-between",
                    children: [
                      (0, n.jsx)("div", {
                        className: "hidden items-center gap-x-4 lg:flex",
                        children: getTabs(),
                      }),
                      (0, n.jsx)(o(), {
                        width: 48,
                        height: 48,
                        alt: "hamburger menu",
                        className:
                          "relative z-20 cursor-pointer invert filter lg:hidden",
                        src: c ? "/images/close.svg" : "/images/hamburger.svg",
                        onClick: () => d(!c),
                      }),
                      (0, n.jsx)(u(), {
                        href: "/",
                        children: (0, n.jsx)(o(), {
                          className: "relative h-10 w-auto lg:hidden",
                          priority: !0,
                          src: "/images/tombraider-logo-dark.svg",
                          alt: "Header Logo",
                          width: 48,
                          height: 48,
                        }),
                      }),
                      (0, n.jsx)(i.Z, { surveys: s, darkMode: !0 }),
                    ],
                  }),
                }),
                (0, n.jsx)("div", {
                  className: " mt-4 h-[1px] w-full bg-gray-300/50",
                }),
                (0, n.jsx)("div", {
                  className:
                    "fixed left-0 top-0 z-10  w-full    overflow-hidden bg-gray-100 bg-opacity-90 transition duration-300 lg:hidden",
                  style: {
                    height: c ? "100vh" : "0",
                    transition: "height 0.3s ease",
                  },
                  children: (0, n.jsx)("div", {
                    className: "flex flex-col items-center gap-y-8 pt-32",
                    children: getTabs(),
                  }),
                }),
              ],
            });
          }
          (([i, r, h] = x.then ? (await x)() : x), a());
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
        n = s(47681),
        l = s.n(n),
        i = s(10821),
        r = s.n(i),
        c = s(93656),
        o = s(52983);
      function AccountMobileTray() {
        let e = (0, c.useRouter)(),
          [t, s] = (0, o.useState)("Dashboard");
        return (
          (0, o.useEffect)(() => {
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
        let { active: t, src: s, href: n } = e;
        return (0, a.jsx)(r(), {
          href: n,
          children: (0, a.jsx)(l(), {
            width: 32,
            height: 32,
            alt: "Logo",
            src: s,
            style: { opacity: t ? 1 : 0.5, color: "white", fill: "white" },
          }),
        });
      }
    },
    96162: function (e, t, s) {
      "use strict";
      s.a(e, async function (e, a) {
        try {
          s.d(t, {
            Z: function () {
              return AccountWelcome;
            },
          });
          var n = s(97458),
            l = s(47681),
            i = s.n(l),
            r = s(57314),
            c = s(2300),
            o = s(52983),
            d = e([c]);
          function AccountWelcome(e) {
            var t, s, a, l;
            let { title: d, surveys: u } = e,
              {
                userData: h,
                emailData: x,
                resendVerification: v,
                completedSurveys: f,
              } = (0, c.S)(),
              handleResend = async () => {
                v();
              },
              m = (0, o.useMemo)(() => {
                var e;
                return null !==
                  (e =
                    null == u
                      ? void 0
                      : u.filter((e) => !f.includes(e.telemetryId))) &&
                  void 0 !== e
                  ? e
                  : [];
              }, [u, f]);
            return (0, n.jsxs)("div", {
              className: "flex flex-wrap items-center gap-x-8 gap-y-4",
              children: [
                (0, n.jsx)("div", {
                  className: "relative h-[108px] w-[108px]",
                  children: (0, n.jsx)(i(), {
                    fill: !0,
                    className: "rounded-full object-cover ".concat(
                      !(null == h
                        ? void 0
                        : null === (s = h.accountInfo) || void 0 === s
                          ? void 0
                          : null === (t = s.titleInfo) || void 0 === t
                            ? void 0
                            : t.avatarUrl) && "bg-gray-500 p-4",
                    ),
                    alt: "welcome-image",
                    sizes: "216px",
                    src:
                      (null == h
                        ? void 0
                        : null === (l = h.accountInfo) || void 0 === l
                          ? void 0
                          : null === (a = l.titleInfo) || void 0 === a
                            ? void 0
                            : a.avatarUrl) || "/images/question_mark.svg",
                  }),
                }),
                (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsx)("p", {
                      className: "mb-4 text-5xl",
                      children: d,
                    }),
                    x &&
                      !x.hasConfirmedEmail &&
                      (0, n.jsxs)("p", {
                        className: "mb-4 text-sm",
                        children: [
                          "You're almost done! Please check your email to verify your account.",
                          " ",
                          (0, n.jsx)(r.Z, {
                            bold: !0,
                            defaultUnderlined: !0,
                            href: "javascript:void(0);",
                            onClick: () => {
                              handleResend();
                            },
                            children: "Resend verification email",
                          }),
                        ],
                      }),
                    m.length > 0 &&
                      (0, n.jsxs)("p", {
                        className: "text-sm",
                        children: [
                          (0, n.jsx)("span", {
                            className: "text-red-500",
                            children: "You have surveys to complete! ",
                          }),
                          (0, n.jsx)(r.Z, {
                            bold: !0,
                            defaultUnderlined: !0,
                            href: "/account/surveys",
                            children: "Visit surveys page",
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            });
          }
          ((c = (d.then ? (await d)() : d)[0]), a());
        } catch (e) {
          a(e);
        }
      });
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
          var n = s(93656),
            l = s(52983),
            i = s(2300),
            r = e([i]);
          function AuthenticatedWrapper(e) {
            let { children: t } = e,
              s = (0, n.useRouter)(),
              { userData: a, cacheLoaded: r, loading: c } = (0, i.S)();
            return ((0, l.useEffect)(() => {
              c || !r || a || s.replace("/");
            }, [a, r, c, s]),
            a && r)
              ? t
              : null;
          }
          ((i = (r.then ? (await r)() : r)[0]), a());
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
          var n = s(97458),
            l = s(47681),
            i = s.n(l),
            r = s(2300),
            c = s(52983),
            o = e([r]);
          function AvatarOption(e) {
            var t, s, a;
            let { avatar: l, onClick: o } = e,
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
                        : e.avatarUrl) === l.imageUrl
                );
              }, [
                d,
                null == d
                  ? void 0
                  : null === (s = d.accountInfo) || void 0 === s
                    ? void 0
                    : null === (t = s.titleInfo) || void 0 === t
                      ? void 0
                      : t.avatarUrl,
              ]);
            return (0, n.jsxs)("div", {
              onClick: () => {
                l.isUnlocked && o(l);
              },
              className: "flex items-center gap-x-4 ".concat(
                l.isUnlocked ? "cursor-pointer opacity-100" : "opacity-50",
              ),
              children: [
                (0, n.jsxs)("div", {
                  className:
                    "relative aspect-square w-16 shrink-0 rounded-full",
                  children: [
                    (0, n.jsx)(i(), {
                      className: "rounded-full object-cover",
                      alt: l.title,
                      fill: !0,
                      sizes: "128px",
                      src:
                        null !== (a = l.imageUrl) && void 0 !== a
                          ? a
                          : "/images/question_mark.svg",
                    }),
                    u &&
                      (0, n.jsx)("div", {
                        className:
                          "relative z-10 h-full w-full rounded-full bg-black/50",
                        children: (0, n.jsx)(i(), {
                          className: "object-cover p-4",
                          alt: "check",
                          src: "/images/check_white.svg",
                          fill: !0,
                        }),
                      }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsx)("p", {
                      className: "text-xl",
                      children: l.title,
                    }),
                    (0, n.jsx)("p", {
                      className: "text-md",
                      children: l.howToGetIt,
                    }),
                  ],
                }),
              ],
            });
          }
          ((r = (o.then ? (await o)() : o)[0]), a());
        } catch (e) {
          a(e);
        }
      });
    },
    21484: function (e, t, s) {
      "use strict";
      s.a(e, async function (e, a) {
        try {
          s.d(t, {
            Z: function () {
              return AvatarSelect;
            },
          });
          var n = s(97458),
            l = s(52983),
            i = s(92800),
            r = s(82262),
            c = s(43976),
            o = s(2300),
            d = s(39378),
            u = s.n(d),
            h = e([i, r, o]);
          function AvatarSelect() {
            let {
                setUserData: e,
                userData: t,
                rewards: s,
                rewardsLoading: a,
                fetchRewards: d,
                minigameCompleted: h,
              } = (0, o.S)(),
              x = (0, l.useMemo)(
                () =>
                  [...s.avatars].sort((e, t) =>
                    e.title.localeCompare(t.title, void 0, {
                      sensitivity: "base",
                    }),
                  ),
                [s],
              ),
              pickAvatar = async (s) => {
                var a, n;
                (0, r.J3)({ itemId: s.id });
                let l = u().clone(t);
                (null == l
                  ? void 0
                  : null === (a = l.accountInfo) || void 0 === a
                    ? void 0
                    : a.titleInfo) &&
                  ((l.accountInfo.titleInfo.avatarUrl =
                    null !== (n = s.imageUrl) && void 0 !== n ? n : void 0),
                  e(l));
              };
            return (
              (0, l.useEffect)(() => {
                d();
              }, [h]),
              (0, n.jsx)("div", {
                className:
                  "flex flex-col gap-y-4 rounded-xl bg-lightgray-100 px-8 py-8",
                children: a
                  ? (0, n.jsx)("div", {
                      className: "flex justify-center",
                      children: (0, n.jsx)(c.Z, {}),
                    })
                  : 0 === x.length
                    ? (0, n.jsx)("p", {
                        children: "You don't have any avatars unlocked.",
                      })
                    : x.map((e) =>
                        (0, n.jsx)(
                          i.Z,
                          { onClick: pickAvatar, avatar: e },
                          e.id,
                        ),
                      ),
              })
            );
          }
          (([i, r, o] = h.then ? (await h)() : h), a());
        } catch (e) {
          a(e);
        }
      });
    },
    31261: function (e, t, s) {
      "use strict";
      s.a(e, async function (e, a) {
        try {
          s.d(t, {
            Z: function () {
              return DownloadList;
            },
          });
          var n = s(97458),
            l = s(47681),
            i = s.n(l),
            r = s(52983),
            c = s(43976),
            o = s(10821),
            d = s.n(o),
            u = s(2300),
            h = e([u]);
          function DownloadList() {
            let { rewards: e, rewardsLoading: t } = (0, u.S)(),
              s = (0, r.useMemo)(
                () =>
                  [...e.fileDownloads].sort((e, t) =>
                    e.startDate && t.startDate
                      ? t.startDate.localeCompare(e.startDate)
                      : 0,
                  ),
                [e],
              );
            return (0, n.jsx)("div", {
              className:
                "flex flex-col gap-y-8 rounded-xl bg-lightgray-100 px-8 py-8",
              children: t
                ? (0, n.jsx)("div", {
                    className: "flex justify-center",
                    children: (0, n.jsx)(c.Z, {}),
                  })
                : 0 === s.length
                  ? (0, n.jsx)("p", {
                      children: "You don't have any downloads unlocked.",
                    })
                  : s.map((e) => (0, n.jsx)(DownloadItem, { item: e }, e.id)),
            });
          }
          function DownloadItem(e) {
            var t;
            let { item: s } = e;
            return (0, n.jsx)(d(), {
              href: null !== (t = s.fileUrl) && void 0 !== t ? t : "",
              children: (0, n.jsxs)("div", {
                className: "relative flex flex-col gap-y-2",
                children: [
                  (0, n.jsx)("div", {
                    className: "relative aspect-[16/9] w-full",
                    children: (0, n.jsx)(i(), {
                      fill: !0,
                      sizes:
                        "(max-width: 1024px) 100vw, (max-width: 1440px) 50vw, 33vw",
                      className: "object-cover",
                      alt: "downloadable image",
                      src: s.imageUrl,
                    }),
                  }),
                  (0, n.jsx)("p", {
                    className: "text-lg font-bold",
                    children: s.title,
                  }),
                ],
              }),
            });
          }
          ((u = (h.then ? (await h)() : h)[0]), a());
        } catch (e) {
          a(e);
        }
      });
    },
    27709: function (e, t, s) {
      "use strict";
      s.a(e, async function (e, a) {
        try {
          s.d(t, {
            Z: function () {
              return RecentNewsList;
            },
          });
          var n = s(97458),
            l = s(75443),
            i = s(15491),
            r = s(10821),
            c = s.n(r),
            o = s(91806),
            d = s(2300),
            u = e([o, d]);
          function RecentNewsList(e) {
            let { articles: t } = e;
            return (0, n.jsx)("div", {
              className: "flex flex-col gap-y-4",
              children:
                null == t
                  ? void 0
                  : t.map((e) =>
                      (0, n.jsx)(RecentNewsItem, { article: e }, e.slug),
                    ),
            });
          }
          function RecentNewsItem(e) {
            var t;
            let { article: s } = e,
              { isLoggedIn: a } = (0, d.S)();
            return (0, n.jsxs)("div", {
              className:
                "text-md flex flex-col gap-y-4 rounded-xl bg-lightgray-100 px-8 py-8",
              children: [
                (0, n.jsx)("p", {
                  className: "text-2xl font-bold",
                  children: s.title,
                }),
                (0, n.jsx)("div", {
                  className: "line-clamp-3",
                  children: (0, i.h)(s.body, (0, o.m0)(!0, a)),
                }),
                (0, n.jsx)("div", {
                  className: "pt-4",
                  children: (0, n.jsx)(c(), {
                    href: "/news/"
                      .concat(
                        null === (t = s.category) || void 0 === t
                          ? void 0
                          : t.fields.slug,
                        "/",
                      )
                      .concat(null == s ? void 0 : s.slug),
                    children: (0, n.jsx)(l.Z, {
                      variant: "green",
                      children: "Read More",
                    }),
                  }),
                }),
              ],
            });
          }
          (([o, d] = u.then ? (await u)() : u), a());
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
        n = s(47681),
        l = s.n(n),
        i = s(10821),
        r = s.n(i),
        c = s(93656),
        o = s(52983);
      function Sidebar() {
        let e = (0, c.useRouter)(),
          [t, s] = (0, o.useState)("Dashboard");
        return (
          (0, o.useEffect)(() => {
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
              (0, a.jsx)(r(), {
                href: "/",
                children: (0, a.jsx)(l(), {
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
        let { src: t, children: s, selected: n, href: i } = e;
        return (0, a.jsx)(r(), {
          href: i,
          children: (0, a.jsxs)("div", {
            className: "flex w-32 cursor-pointer font-bold ".concat(
              n ? "opacity-100" : "opacity-50",
            ),
            children: [
              (0, a.jsx)(l(), {
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
    54343: function (e, t, s) {
      "use strict";
      s.a(e, async function (e, a) {
        try {
          s.d(t, {
            Z: function () {
              return VideoList;
            },
          });
          var n = s(97458),
            l = s(52023),
            i = s(48100),
            r = s(52983),
            c = s(43976),
            o = s(2300),
            d = e([o]);
          function VideoList() {
            let { rewards: e, rewardsLoading: t } = (0, o.S)(),
              s = (0, r.useMemo)(
                () =>
                  [...e.videoLinks].sort((e, t) =>
                    e.startDate && t.startDate
                      ? t.startDate.localeCompare(e.startDate)
                      : 0,
                  ),
                [e],
              );
            return (0, n.jsx)("div", {
              className:
                "flex flex-col gap-y-8 rounded-xl bg-lightgray-100 px-8 py-8",
              children: t
                ? (0, n.jsx)("div", {
                    className: "flex justify-center",
                    children: (0, n.jsx)(c.Z, {}),
                  })
                : 0 === s.length
                  ? (0, n.jsx)("p", {
                      children: "You don't have any videos unlocked.",
                    })
                  : s.map((e) => (0, n.jsx)(VideoItem, { item: e }, e.id)),
            });
          }
          function VideoItem(e) {
            var t;
            let { item: s } = e;
            return (0, n.jsxs)("div", {
              className: "relative flex flex-col gap-y-2",
              children: [
                (0, n.jsx)("div", {
                  className: "relative aspect-[16/9] w-full",
                  children: (0, n.jsx)(l.Z, {
                    src: (0, i.u)(
                      null !== (t = s.link) && void 0 !== t ? t : "",
                    ),
                  }),
                }),
                (0, n.jsx)("p", {
                  className: "text-lg font-bold",
                  children: s.title,
                }),
              ],
            });
          }
          ((o = (d.then ? (await d)() : d)[0]), a());
        } catch (e) {
          a(e);
        }
      });
    },
    78136: function (e, t, s) {
      "use strict";
      s.a(e, async function (e, a) {
        try {
          (s.r(t),
            s.d(t, {
              __N_SSG: function () {
                return p;
              },
              default: function () {
                return AccountPage;
              },
            }));
          var n = s(97458),
            l = s(95611),
            i = s(33043),
            r = s(27233),
            c = s(96162),
            o = s(21484),
            d = s(27709),
            u = s(31261),
            h = s(54343),
            x = s(6728),
            v = s(52983),
            f = s(82262),
            m = s(2300),
            g = e([l, r, c, o, d, u, h, f, m]);
          [l, r, c, o, d, u, h, f, m] = g.then ? (await g)() : g;
          var p = !0;
          function AccountPage(e) {
            let { articles: t, navItems: s, surveys: a } = e,
              { setMinigameCompleted: g } = (0, m.S)();
            return (
              (0, v.useEffect)(() => {
                let e = localStorage.getItem(
                  "minigame-completed-while-logged-out",
                );
                e &&
                  ((0, f.Mo)({ action: "MINIGAME_COMPLETION" }),
                  localStorage.removeItem(
                    "minigame-completed-while-logged-out",
                  ),
                  g(!0));
              }, []),
              (0, n.jsx)(l.Z, {
                children: (0, n.jsx)("main", {
                  className: " min-h-screen bg-white text-black",
                  children: (0, n.jsxs)("div", {
                    className: " ",
                    children: [
                      (0, n.jsx)(r.Z, { surveys: a, navItems: s }),
                      (0, n.jsx)(i.Z, {}),
                      (0, n.jsx)(x.Z, {}),
                      (0, n.jsxs)("div", {
                        className: "px-6 py-12 lg:ml-[256px] lg:px-12",
                        children: [
                          (0, n.jsx)(c.Z, {
                            surveys: a,
                            title: "Welcome, Raider!",
                          }),
                          (0, n.jsxs)("div", {
                            className:
                              "grid grid-cols-1 gap-6 pt-16 lg:grid-cols-2",
                            children: [
                              (0, n.jsxs)("div", {
                                children: [
                                  (0, n.jsx)("p", {
                                    className: "pb-4 text-3xl font-bold",
                                    children: "Avatars",
                                  }),
                                  (0, n.jsx)(o.Z, {}),
                                  (0, n.jsx)("p", {
                                    className: "pb-4 pt-12 text-3xl font-bold",
                                    children: "Downloads",
                                  }),
                                  (0, n.jsx)(u.Z, {}),
                                ],
                              }),
                              (0, n.jsxs)("div", {
                                children: [
                                  (0, n.jsx)("p", {
                                    className: "pb-4 text-3xl font-bold",
                                    children: "Society of Raider News",
                                  }),
                                  (0, n.jsx)(d.Z, {
                                    articles: t.slice(0, Math.min(t.length, 3)),
                                  }),
                                  (0, n.jsx)("p", {
                                    className: "pb-4 pt-12 text-3xl font-bold",
                                    children: "Videos",
                                  }),
                                  (0, n.jsx)(h.Z, {}),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              })
            );
          }
          a();
        } catch (e) {
          a(e);
        }
      });
    },
  },
  function (e) {
    (e.O(0, [46, 681, 882, 34, 120, 249, 806, 774, 888, 179], function () {
      return e((e.s = 57747));
    }),
      (_N_E = e.O()));
  },
]);
