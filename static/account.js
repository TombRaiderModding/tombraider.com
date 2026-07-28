(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9309],
  {
    15056: (e, s, t) => {
      "use strict";
      t.a(e, async (e, a) => {
        try {
          t.d(s, { A: () => x });
          var l = t(2183),
            r = t(36439),
            i = t(55507),
            n = t(55109),
            c = t(26974),
            d = t(99435),
            o = t(80707),
            u = t.n(o),
            h = e([i, n, d]);
          function x() {
            let {
                setUserData: e,
                userData: s,
                rewards: t,
                rewardsLoading: a,
                fetchRewards: o,
                minigameCompleted: h,
              } = (0, d.u)(),
              x = (0, r.useMemo)(
                () =>
                  [...t.avatars].sort((e, s) =>
                    e.title.localeCompare(s.title, void 0, {
                      sensitivity: "base",
                    }),
                  ),
                [t],
              ),
              m = async (t) => {
                var a, l;
                (0, n.nU)({ itemId: t.id });
                let r = u().clone(s);
                (null == r || null == (a = r.accountInfo)
                  ? void 0
                  : a.titleInfo) &&
                  ((r.accountInfo.titleInfo.avatarUrl =
                    null != (l = t.imageUrl) ? l : void 0),
                  e(r));
              };
            return (
              (0, r.useEffect)(() => {
                o();
              }, [h]),
              (0, l.jsx)("div", {
                className:
                  "flex flex-col gap-y-4 rounded-xl bg-lightgray-100 px-8 py-8",
                children: a
                  ? (0, l.jsx)("div", {
                      className: "flex justify-center",
                      children: (0, l.jsx)(c.A, {}),
                    })
                  : 0 === x.length
                    ? (0, l.jsx)("p", {
                        children: "You don't have any avatars unlocked.",
                      })
                    : x.map((e) =>
                        (0, l.jsx)(i.A, { onClick: m, avatar: e }, e.id),
                      ),
              })
            );
          }
          (([i, n, d] = h.then ? (await h)() : h), a());
        } catch (e) {
          a(e);
        }
      });
    },
    34714: (e, s, t) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/account",
        function () {
          return t(37749);
        },
      ]);
    },
    37749: (e, s, t) => {
      "use strict";
      t.a(e, async (e, a) => {
        try {
          (t.r(s), t.d(s, { __N_SSG: () => j, default: () => y }));
          var l = t(2183),
            r = t(56145),
            i = t(91134),
            n = t(53017),
            c = t(88891),
            d = t(53808),
            o = t(15056),
            u = t(67603),
            h = t(41395),
            x = t(57e3),
            m = t(79294),
            v = t(36439),
            g = t(55109),
            f = t(99435),
            p = e([r, c, d, o, u, h, x, g, f]);
          [r, c, d, o, u, h, x, g, f] = p.then ? (await p)() : p;
          var j = !0;
          function y(e) {
            let { articles: s, navItems: t, surveys: a } = e,
              { setMinigameCompleted: p } = (0, f.u)();
            return (
              (0, v.useEffect)(() => {
                localStorage.getItem("minigame-completed-while-logged-out") &&
                  ((0, g.qu)({ action: "MINIGAME_COMPLETION" }),
                  localStorage.removeItem(
                    "minigame-completed-while-logged-out",
                  ),
                  p(!0));
              }, []),
              (0, l.jsxs)(r.A, {
                children: [
                  (0, l.jsx)(i.A, {
                    description:
                      "Manage your Tomb Raider account. Update your profile, track exclusive member rewards, and access all your Society of Raiders benefits from Crystal Dynamics.",
                  }),
                  (0, l.jsx)("main", {
                    className: "min-h-screen bg-white text-black",
                    children: (0, l.jsxs)("div", {
                      className: " ",
                      children: [
                        (0, l.jsx)(c.A, { surveys: a, navItems: t }),
                        (0, l.jsx)(n.A, {}),
                        (0, l.jsx)(m.A, {}),
                        (0, l.jsxs)("div", {
                          className: "px-6 py-12 lg:ml-[256px] lg:px-12",
                          children: [
                            (0, l.jsx)(d.A, {
                              surveys: a,
                              title: "Welcome, Raider!",
                            }),
                            (0, l.jsxs)("div", {
                              className:
                                "grid grid-cols-1 gap-6 pt-16 lg:grid-cols-2",
                              children: [
                                (0, l.jsxs)("div", {
                                  children: [
                                    (0, l.jsx)("p", {
                                      className: "pb-4 text-3xl font-bold",
                                      children: "Avatars",
                                    }),
                                    (0, l.jsx)(o.A, {}),
                                    (0, l.jsx)("p", {
                                      className:
                                        "pt-12 pb-4 text-3xl font-bold",
                                      children: "Downloads",
                                    }),
                                    (0, l.jsx)(h.A, {}),
                                  ],
                                }),
                                (0, l.jsxs)("div", {
                                  children: [
                                    (0, l.jsx)("p", {
                                      className: "pb-4 text-3xl font-bold",
                                      children: "Society of Raider News",
                                    }),
                                    (0, l.jsx)(u.A, {
                                      articles: s.slice(
                                        0,
                                        Math.min(s.length, 3),
                                      ),
                                    }),
                                    (0, l.jsx)("p", {
                                      className:
                                        "pt-12 pb-4 text-3xl font-bold",
                                      children: "Videos",
                                    }),
                                    (0, l.jsx)(x.A, {}),
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
              })
            );
          }
          a();
        } catch (e) {
          a(e);
        }
      });
    },
    41395: (e, s, t) => {
      "use strict";
      t.a(e, async (e, a) => {
        try {
          t.d(s, { A: () => x });
          var l = t(2183),
            r = t(96006),
            i = t.n(r),
            n = t(36439),
            c = t(26974),
            d = t(11677),
            o = t.n(d),
            u = t(99435),
            h = e([u]);
          function x() {
            let { rewards: e, rewardsLoading: s } = (0, u.u)(),
              t = (0, n.useMemo)(
                () =>
                  [...e.fileDownloads].sort((e, s) =>
                    e.startDate && s.startDate
                      ? s.startDate.localeCompare(e.startDate)
                      : 0,
                  ),
                [e],
              );
            return (0, l.jsx)("div", {
              className:
                "flex flex-col gap-y-8 rounded-xl bg-lightgray-100 px-8 py-8",
              children: s
                ? (0, l.jsx)("div", {
                    className: "flex justify-center",
                    children: (0, l.jsx)(c.A, {}),
                  })
                : 0 === t.length
                  ? (0, l.jsx)("p", {
                      children: "You don't have any downloads unlocked.",
                    })
                  : t.map((e) => (0, l.jsx)(m, { item: e }, e.id)),
            });
          }
          function m(e) {
            var s;
            let { item: t } = e;
            return (0, l.jsx)(o(), {
              href: null != (s = t.fileUrl) ? s : "",
              children: (0, l.jsxs)("div", {
                className: "relative flex flex-col gap-y-2",
                children: [
                  (0, l.jsx)("div", {
                    className: "relative aspect-[16/9] w-full",
                    children: (0, l.jsx)(i(), {
                      fill: !0,
                      sizes:
                        "(max-width: 1024px) 100vw, (max-width: 1440px) 50vw, 33vw",
                      className: "object-cover",
                      alt: "downloadable image",
                      src: t.imageUrl,
                    }),
                  }),
                  (0, l.jsx)("p", {
                    className: "text-lg font-bold",
                    children: t.title,
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
    53017: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => o });
      var a = t(2183),
        l = t(96006),
        r = t.n(l),
        i = t(11677),
        n = t.n(i),
        c = t(18652),
        d = t(36439);
      function o() {
        let e = (0, c.useRouter)(),
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
              (0, a.jsx)(n(), {
                href: "/",
                children: (0, a.jsx)(r(), {
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
        let { src: s, children: t, selected: l, href: i } = e;
        return (0, a.jsx)(n(), {
          href: i,
          children: (0, a.jsxs)("div", {
            className: "flex w-32 cursor-pointer font-bold ".concat(
              l ? "opacity-100" : "opacity-50",
            ),
            children: [
              (0, a.jsx)(r(), {
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
    53808: (e, s, t) => {
      "use strict";
      t.a(e, async (e, a) => {
        try {
          t.d(s, { A: () => h });
          var l = t(2183),
            r = t(96006),
            i = t.n(r),
            n = t(11677),
            c = t.n(n),
            d = t(99435),
            o = t(36439),
            u = e([d]);
          function h(e) {
            var s, t, a, r;
            let { title: n, surveys: u } = e,
              {
                userData: h,
                emailData: x,
                resendVerification: m,
                completedSurveys: v,
              } = (0, d.u)(),
              g = async () => {
                m();
              },
              f = (0, o.useMemo)(() => {
                var e;
                return null !=
                  (e =
                    null == u
                      ? void 0
                      : u.filter((e) => !v.includes(e.telemetryId)))
                  ? e
                  : [];
              }, [u, v]);
            return (0, l.jsxs)("div", {
              className: "flex flex-wrap items-center gap-x-8 gap-y-4",
              children: [
                (0, l.jsx)("div", {
                  className: "relative h-[108px] w-[108px]",
                  children: (0, l.jsx)(i(), {
                    fill: !0,
                    className: "rounded-full object-cover ".concat(
                      !(null == h ||
                      null == (t = h.accountInfo) ||
                      null == (s = t.titleInfo)
                        ? void 0
                        : s.avatarUrl) && "bg-gray-500 p-4",
                    ),
                    alt: "welcome-image",
                    sizes: "216px",
                    src:
                      (null == h ||
                      null == (r = h.accountInfo) ||
                      null == (a = r.titleInfo)
                        ? void 0
                        : a.avatarUrl) || "/images/question_mark.svg",
                  }),
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsx)("p", {
                      className: "mb-4 text-5xl",
                      children: n,
                    }),
                    x &&
                      !x.hasConfirmedEmail &&
                      (0, l.jsxs)("p", {
                        className: "mb-4 text-sm",
                        children: [
                          "You're almost done! Please check your email to verify your account.",
                          " ",
                          (0, l.jsx)("button", {
                            className: "font-bold underline hover:no-underline",
                            onClick: g,
                            type: "button",
                            children: "Resend verification email",
                          }),
                        ],
                      }),
                    f.length > 0 &&
                      (0, l.jsxs)("p", {
                        className: "text-sm",
                        children: [
                          (0, l.jsx)("span", {
                            className: "text-red-500",
                            children: "You have surveys to complete! ",
                          }),
                          (0, l.jsx)(c(), {
                            href: "/account/surveys",
                            className: "font-bold underline hover:no-underline",
                            children: "Visit surveys page",
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            });
          }
          ((d = (u.then ? (await u)() : u)[0]), a());
        } catch (e) {
          a(e);
        }
      });
    },
    55507: (e, s, t) => {
      "use strict";
      t.a(e, async (e, a) => {
        try {
          t.d(s, { A: () => o });
          var l = t(2183),
            r = t(96006),
            i = t.n(r),
            n = t(99435),
            c = t(36439),
            d = e([n]);
          function o(e) {
            var s, t, a;
            let { avatar: r, onClick: d } = e,
              { userData: o } = (0, n.u)(),
              u = (0, c.useMemo)(() => {
                var e, s;
                return (
                  (null == o ||
                  null == (s = o.accountInfo) ||
                  null == (e = s.titleInfo)
                    ? void 0
                    : e.avatarUrl) === r.imageUrl
                );
              }, [
                o,
                null == o ||
                null == (t = o.accountInfo) ||
                null == (s = t.titleInfo)
                  ? void 0
                  : s.avatarUrl,
              ]);
            return (0, l.jsxs)("div", {
              onClick: () => {
                r.isUnlocked && d(r);
              },
              className: "flex items-center gap-x-4 ".concat(
                r.isUnlocked ? "cursor-pointer opacity-100" : "opacity-50",
              ),
              children: [
                (0, l.jsxs)("div", {
                  className:
                    "relative aspect-square w-16 shrink-0 rounded-full",
                  children: [
                    (0, l.jsx)(i(), {
                      className: "rounded-full object-cover",
                      alt: r.title,
                      fill: !0,
                      sizes: "128px",
                      src:
                        null != (a = r.imageUrl)
                          ? a
                          : "/images/question_mark.svg",
                    }),
                    u &&
                      (0, l.jsx)("div", {
                        className:
                          "relative z-10 h-full w-full rounded-full bg-black/50",
                        children: (0, l.jsx)(i(), {
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
                      children: r.title,
                    }),
                    (0, l.jsx)("p", {
                      className: "text-md",
                      children: r.howToGetIt,
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
    56145: (e, s, t) => {
      "use strict";
      t.a(e, async (e, a) => {
        try {
          t.d(s, { A: () => c });
          var l = t(18652),
            r = t(36439),
            i = t(99435),
            n = e([i]);
          function c(e) {
            let { children: s } = e,
              t = (0, l.useRouter)(),
              { userData: a, cacheLoaded: n, loading: c } = (0, i.u)();
            return ((0, r.useEffect)(() => {
              c || !n || a || t.replace("/");
            }, [a, n, c, t]),
            a && n)
              ? s
              : null;
          }
          ((i = (n.then ? (await n)() : n)[0]), a());
        } catch (e) {
          a(e);
        }
      });
    },
    57e3: (e, s, t) => {
      "use strict";
      t.a(e, async (e, a) => {
        try {
          t.d(s, { A: () => u });
          var l = t(2183),
            r = t(59528),
            i = t(95873),
            n = t(36439),
            c = t(26974),
            d = t(99435),
            o = e([d]);
          function u() {
            let { rewards: e, rewardsLoading: s } = (0, d.u)(),
              t = (0, n.useMemo)(
                () =>
                  [...e.videoLinks].sort((e, s) =>
                    e.startDate && s.startDate
                      ? s.startDate.localeCompare(e.startDate)
                      : 0,
                  ),
                [e],
              );
            return (0, l.jsx)("div", {
              className:
                "flex flex-col gap-y-8 rounded-xl bg-lightgray-100 px-8 py-8",
              children: s
                ? (0, l.jsx)("div", {
                    className: "flex justify-center",
                    children: (0, l.jsx)(c.A, {}),
                  })
                : 0 === t.length
                  ? (0, l.jsx)("p", {
                      children: "You don't have any videos unlocked.",
                    })
                  : t.map((e) => (0, l.jsx)(h, { item: e }, e.id)),
            });
          }
          function h(e) {
            var s;
            let { item: t } = e;
            return (0, l.jsxs)("div", {
              className: "relative flex flex-col gap-y-2",
              children: [
                (0, l.jsx)("div", {
                  className: "relative aspect-[16/9] w-full",
                  children: (0, l.jsx)(r.A, {
                    src: (0, i.C)(null != (s = t.link) ? s : ""),
                  }),
                }),
                (0, l.jsx)("p", {
                  className: "text-lg font-bold",
                  children: t.title,
                }),
              ],
            });
          }
          ((d = (o.then ? (await o)() : o)[0]), a());
        } catch (e) {
          a(e);
        }
      });
    },
    67603: (e, s, t) => {
      "use strict";
      t.a(e, async (e, a) => {
        try {
          t.d(s, { A: () => h });
          var l = t(2183),
            r = t(15711),
            i = t(40453),
            n = t(11677),
            c = t.n(n),
            d = t(92446),
            o = t(99435),
            u = e([d, o]);
          function h(e) {
            let { articles: s } = e;
            return (0, l.jsx)("div", {
              className: "flex flex-col gap-y-4",
              children:
                null == s
                  ? void 0
                  : s.map((e) => (0, l.jsx)(x, { article: e }, e.slug)),
            });
          }
          function x(e) {
            var s;
            let { article: t } = e,
              { isLoggedIn: a } = (0, o.u)();
            return (0, l.jsxs)("div", {
              className:
                "text-md flex flex-col gap-y-4 rounded-xl bg-lightgray-100 px-8 py-8",
              children: [
                (0, l.jsx)("p", {
                  className: "text-2xl font-bold",
                  children: t.title,
                }),
                (0, l.jsx)("div", {
                  className: "line-clamp-3",
                  children: (0, i.i)(t.body, (0, d.Xx)(!0, a)),
                }),
                (0, l.jsx)("div", {
                  className: "pt-4",
                  children: (0, l.jsx)(c(), {
                    href: "/news/"
                      .concat(
                        null == (s = t.category) ? void 0 : s.fields.slug,
                        "/",
                      )
                      .concat(null == t ? void 0 : t.slug),
                    children: (0, l.jsx)(r.A, {
                      variant: "green",
                      children: "Read More",
                    }),
                  }),
                }),
              ],
            });
          }
          (([d, o] = u.then ? (await u)() : u), a());
        } catch (e) {
          a(e);
        }
      });
    },
    79294: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => o });
      var a = t(2183),
        l = t(96006),
        r = t.n(l),
        i = t(11677),
        n = t.n(i),
        c = t(18652),
        d = t(36439);
      function o() {
        let e = (0, c.useRouter)(),
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
        let { active: s, src: t, href: l } = e;
        return (0, a.jsx)(n(), {
          href: l,
          children: (0, a.jsx)(r(), {
            width: 32,
            height: 32,
            alt: "Logo",
            src: t,
            style: { opacity: s ? 1 : 0.5, color: "white", fill: "white" },
          }),
        });
      }
    },
    88891: (e, s, t) => {
      "use strict";
      t.a(e, async (e, a) => {
        try {
          t.d(s, { A: () => m });
          var l = t(2183),
            r = t(36439),
            i = t(3976),
            n = t(95216),
            c = t(96006),
            d = t.n(c),
            o = t(11677),
            u = t.n(o),
            h = t(99435),
            x = e([i, n, h]);
          function m(e) {
            let { navItems: s, surveys: t } = e,
              { isLoggedIn: a } = (0, h.u)(),
              [c, o] = (0, r.useState)(!1),
              x = () =>
                s
                  .filter(
                    (e) => e.showInHeader && (!e.hideForLoggedInUsers || a),
                  )
                  .map((e) =>
                    (0, l.jsx)(
                      n.jU,
                      { href: e.link, title: e.name, darkMode: !0 },
                      e.link,
                    ),
                  );
            return (0, l.jsxs)("header", {
              className:
                "lg:w-[calc(100% - 256px] relative sticky top-0 left-0 z-[20] bg-white px-12 pt-6 lg:ml-[256px]",
              children: [
                (0, l.jsx)("nav", {
                  "aria-label": "Global",
                  children: (0, l.jsxs)("div", {
                    className: "flex w-full justify-between",
                    children: [
                      (0, l.jsx)("div", {
                        className: "hidden items-center gap-x-4 lg:flex",
                        children: x(),
                      }),
                      (0, l.jsx)(d(), {
                        width: 48,
                        height: 48,
                        alt: "hamburger menu",
                        className:
                          "relative z-20 cursor-pointer invert lg:hidden",
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
                      (0, l.jsx)(i.A, { surveys: t, darkMode: !0 }),
                    ],
                  }),
                }),
                (0, l.jsx)("div", {
                  className: "mt-4 h-[1px] w-full bg-gray-300/50",
                }),
                (0, l.jsx)("div", {
                  className:
                    "fixed top-0 left-0 z-10 w-full overflow-hidden bg-gray-100/90 transition duration-300 lg:hidden",
                  style: {
                    height: c ? "100vh" : "0",
                    transition: "height 0.3s ease",
                  },
                  children: (0, l.jsx)("div", {
                    className: "flex flex-col items-center gap-y-8 pt-32",
                    children: x(),
                  }),
                }),
              ],
            });
          }
          (([i, n, h] = x.then ? (await x)() : x), a());
        } catch (e) {
          a(e);
        }
      });
    },
    91134: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => i });
      var a = t(2183),
        l = t(14623),
        r = t.n(l);
      function i(e) {
        let { description: s } = e;
        return (0, a.jsxs)(r(), {
          children: [
            (0, a.jsx)(
              "meta",
              { name: "description", content: s },
              "description",
            ),
            (0, a.jsx)(
              "meta",
              { property: "og:description", content: s },
              "og:description",
            ),
            (0, a.jsx)(
              "meta",
              { name: "twitter:description", content: s },
              "twitter:description",
            ),
          ],
        });
      }
    },
  },
  (e) => {
    (e.O(0, [9950, 6006, 1433, 1329, 1089, 5216, 2446, 636, 6593, 8792], () =>
      e((e.s = 34714)),
    ),
      (_N_E = e.O()));
  },
]);
