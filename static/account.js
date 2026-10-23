(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9309],
  {
    1447: (e, s, t) => {
      "use strict";
      t.a(e, async (e, a) => {
        try {
          t.d(s, { A: () => o });
          var l = t(2183),
            r = t(15013),
            i = t.n(r),
            c = t(9751),
            n = t(36439),
            d = e([c]);
          function o(e) {
            let { avatar: s, onClick: t } = e,
              { userData: a } = (0, c.u)(),
              r = (0, n.useMemo)(
                () => a?.accountInfo?.titleInfo?.avatarUrl === s.imageUrl,
                [a, a?.accountInfo?.titleInfo?.avatarUrl],
              );
            return (0, l.jsxs)("div", {
              onClick: () => {
                s.isUnlocked && t(s);
              },
              className: `flex items-center gap-x-4 ${s.isUnlocked ? "cursor-pointer opacity-100" : "opacity-50"}`,
              children: [
                (0, l.jsxs)("div", {
                  className:
                    "relative aspect-square w-16 shrink-0 rounded-full",
                  children: [
                    (0, l.jsx)(i(), {
                      className: "rounded-full object-cover",
                      alt: s.title,
                      fill: !0,
                      sizes: "128px",
                      src: s.imageUrl ?? "/images/question_mark.svg",
                    }),
                    r &&
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
                      children: s.title,
                    }),
                    (0, l.jsx)("p", {
                      className: "text-md",
                      children: s.howToGetIt,
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
    3076: (e, s, t) => {
      "use strict";
      t.a(e, async (e, a) => {
        try {
          t.d(s, { A: () => u });
          var l = t(2183),
            r = t(36439),
            i = t(1447),
            c = t(83737),
            n = t(97698),
            d = t(9751),
            o = t(80707),
            h = t.n(o),
            x = e([i, c, d]);
          function u() {
            let {
                setUserData: e,
                userData: s,
                rewards: t,
                rewardsLoading: a,
                fetchRewards: o,
                minigameCompleted: x,
              } = (0, d.u)(),
              u = (0, r.useMemo)(
                () =>
                  [...t.avatars].sort((e, s) =>
                    e.title.localeCompare(s.title, void 0, {
                      sensitivity: "base",
                    }),
                  ),
                [t],
              ),
              m = async (t) => {
                (0, c.nU)({ itemId: t.id });
                let a = h().clone(s);
                a?.accountInfo?.titleInfo &&
                  ((a.accountInfo.titleInfo.avatarUrl = t.imageUrl ?? void 0),
                  e(a));
              };
            return (
              (0, r.useEffect)(() => {
                o();
              }, [x]),
              (0, l.jsx)("div", {
                className:
                  "flex flex-col gap-y-4 rounded-xl bg-lightgray-100 px-8 py-8",
                children: a
                  ? (0, l.jsx)("div", {
                      className: "flex justify-center",
                      children: (0, l.jsx)(n.A, {}),
                    })
                  : 0 === u.length
                    ? (0, l.jsx)("p", {
                        children: "You don't have any avatars unlocked.",
                      })
                    : u.map((e) =>
                        (0, l.jsx)(i.A, { onClick: m, avatar: e }, e.id),
                      ),
              })
            );
          }
          (([i, c, d] = x.then ? (await x)() : x), a());
        } catch (e) {
          a(e);
        }
      });
    },
    14402: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => o });
      var a = t(2183),
        l = t(15013),
        r = t.n(l),
        i = t(46728),
        c = t.n(i),
        n = t(31153),
        d = t(36439);
      function o() {
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
              (0, a.jsx)(h, {
                src: "/images/dashboard-icon.svg",
                href: "/account",
                active: "Dashboard" === s,
              }),
              (0, a.jsx)(h, {
                src: "/images/rewards-icon.svg",
                href: "/account/rewards",
                active: "Rewards" === s,
              }),
              (0, a.jsx)(h, {
                src: "/images/survey-icon.svg",
                href: "/account/surveys",
                active: "Surveys" === s,
              }),
              (0, a.jsx)(h, {
                src: "/images/settings-icon.svg",
                href: "/account/settings",
                active: "Settings" === s,
              }),
            ],
          })
        );
      }
      function h({ active: e, src: s, href: t }) {
        return (0, a.jsx)(c(), {
          href: t,
          children: (0, a.jsx)(r(), {
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
          t.d(s, { A: () => m });
          var l = t(2183),
            r = t(36439),
            i = t(31996),
            c = t(49980),
            n = t(15013),
            d = t.n(n),
            o = t(46728),
            h = t.n(o),
            x = t(9751),
            u = e([i, c, x]);
          function m({ navItems: e, surveys: s }) {
            let { isLoggedIn: t } = (0, x.u)(),
              [a, n] = (0, r.useState)(!1),
              o = () =>
                e
                  .filter(
                    (e) => e.showInHeader && (!e.hideForLoggedInUsers || t),
                  )
                  .map((e) =>
                    (0, l.jsx)(
                      c.jU,
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
                        children: o(),
                      }),
                      (0, l.jsx)(d(), {
                        width: 48,
                        height: 48,
                        alt: "hamburger menu",
                        className:
                          "relative z-20 cursor-pointer invert lg:hidden",
                        src: a ? "/images/close.svg" : "/images/hamburger.svg",
                        onClick: () => n(!a),
                      }),
                      (0, l.jsx)(h(), {
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
                      (0, l.jsx)(i.A, { surveys: s, darkMode: !0 }),
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
                    height: a ? "100vh" : "0",
                    transition: "height 0.3s ease",
                  },
                  children: (0, l.jsx)("div", {
                    className: "flex flex-col items-center gap-y-8 pt-32",
                    children: o(),
                  }),
                }),
              ],
            });
          }
          (([i, c, x] = u.then ? (await u)() : u), a());
        } catch (e) {
          a(e);
        }
      });
    },
    35877: (e, s, t) => {
      "use strict";
      t.a(e, async (e, a) => {
        try {
          t.d(s, { A: () => n });
          var l = t(31153),
            r = t(36439),
            i = t(9751),
            c = e([i]);
          function n(e) {
            let { children: s } = e,
              t = (0, l.useRouter)(),
              { userData: a, cacheLoaded: c, loading: n } = (0, i.u)();
            return ((0, r.useEffect)(() => {
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
    36623: (e, s, t) => {
      "use strict";
      t.a(e, async (e, a) => {
        try {
          t.d(s, { A: () => u });
          var l = t(2183),
            r = t(15013),
            i = t.n(r),
            c = t(36439),
            n = t(97698),
            d = t(46728),
            o = t.n(d),
            h = t(9751),
            x = e([h]);
          function u() {
            let { rewards: e, rewardsLoading: s } = (0, h.u)(),
              t = (0, c.useMemo)(
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
                    children: (0, l.jsx)(n.A, {}),
                  })
                : 0 === t.length
                  ? (0, l.jsx)("p", {
                      children: "You don't have any downloads unlocked.",
                    })
                  : t.map((e) => (0, l.jsx)(m, { item: e }, e.id)),
            });
          }
          function m({ item: e }) {
            return (0, l.jsx)(o(), {
              href: e.fileUrl ?? "",
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
                      src: e.imageUrl,
                    }),
                  }),
                  (0, l.jsx)("p", {
                    className: "text-lg font-bold",
                    children: e.title,
                  }),
                ],
              }),
            });
          }
          ((h = (x.then ? (await x)() : x)[0]), a());
        } catch (e) {
          a(e);
        }
      });
    },
    49855: (e, s, t) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/account",
        function () {
          return t(67697);
        },
      ]);
    },
    51108: (e, s, t) => {
      "use strict";
      t.a(e, async (e, a) => {
        try {
          t.d(s, { A: () => h });
          var l = t(2183),
            r = t(99556),
            i = t(73309),
            c = t(36439),
            n = t(97698),
            d = t(9751),
            o = e([d]);
          function h() {
            let { rewards: e, rewardsLoading: s } = (0, d.u)(),
              t = (0, c.useMemo)(
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
                    children: (0, l.jsx)(n.A, {}),
                  })
                : 0 === t.length
                  ? (0, l.jsx)("p", {
                      children: "You don't have any videos unlocked.",
                    })
                  : t.map((e) => (0, l.jsx)(x, { item: e }, e.id)),
            });
          }
          function x({ item: e }) {
            return (0, l.jsxs)("div", {
              className: "relative flex flex-col gap-y-2",
              children: [
                (0, l.jsx)("div", {
                  className: "relative aspect-[16/9] w-full",
                  children: (0, l.jsx)(r.A, { src: (0, i.C)(e.link ?? "") }),
                }),
                (0, l.jsx)("p", {
                  className: "text-lg font-bold",
                  children: e.title,
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
    61653: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => o });
      var a = t(2183),
        l = t(15013),
        r = t.n(l),
        i = t(46728),
        c = t.n(i),
        n = t(31153),
        d = t(36439);
      function o() {
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
                children: (0, a.jsx)(r(), {
                  width: 87,
                  height: 40,
                  alt: "dark Tomb Raider logo",
                  src: "/images/tombraider-logo-dark.svg",
                  className: "pb-6",
                }),
              }),
              (0, a.jsx)(h, {
                selected: "Dashboard" === s,
                href: "/account",
                src: "/images/dashboard-icon.svg",
                children: "Dashboard",
              }),
              (0, a.jsx)(h, {
                selected: "Rewards" === s,
                href: "/account/rewards",
                src: "/images/rewards-icon.svg",
                children: "Rewards",
              }),
              (0, a.jsx)(h, {
                selected: "Surveys" === s,
                href: "/account/surveys",
                src: "/images/survey-icon.svg",
                children: "Surveys",
              }),
              (0, a.jsx)(h, {
                selected: "Settings" === s,
                href: "/account/settings",
                src: "/images/settings-icon.svg",
                children: "Settings",
              }),
            ],
          })
        );
      }
      function h(e) {
        let { src: s, children: t, selected: l, href: i } = e;
        return (0, a.jsx)(c(), {
          href: i,
          children: (0, a.jsxs)("div", {
            className: `flex w-32 cursor-pointer font-bold ${l ? "opacity-100" : "opacity-50"}`,
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
    67697: (e, s, t) => {
      "use strict";
      t.a(e, async (e, a) => {
        try {
          (t.r(s), t.d(s, { __N_SSG: () => j, default: () => y }));
          var l = t(2183),
            r = t(35877),
            i = t(74474),
            c = t(61653),
            n = t(23855),
            d = t(91300),
            o = t(3076),
            h = t(80031),
            x = t(36623),
            u = t(51108),
            m = t(14402),
            g = t(36439),
            f = t(83737),
            v = t(9751),
            p = e([r, n, d, o, h, x, u, f, v]);
          [r, n, d, o, h, x, u, f, v] = p.then ? (await p)() : p;
          var j = !0;
          function y({ articles: e, navItems: s, surveys: t }) {
            let { setMinigameCompleted: a } = (0, v.u)();
            return (
              (0, g.useEffect)(() => {
                localStorage.getItem("minigame-completed-while-logged-out") &&
                  ((0, f.qu)({ action: "MINIGAME_COMPLETION" }),
                  localStorage.removeItem(
                    "minigame-completed-while-logged-out",
                  ),
                  a(!0));
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
                        (0, l.jsx)(n.A, { surveys: t, navItems: s }),
                        (0, l.jsx)(c.A, {}),
                        (0, l.jsx)(m.A, {}),
                        (0, l.jsxs)("div", {
                          className: "px-6 py-12 lg:ml-[256px] lg:px-12",
                          children: [
                            (0, l.jsx)(d.A, {
                              surveys: t,
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
                                    (0, l.jsx)(x.A, {}),
                                  ],
                                }),
                                (0, l.jsxs)("div", {
                                  children: [
                                    (0, l.jsx)("p", {
                                      className: "pb-4 text-3xl font-bold",
                                      children: "Society of Raider News",
                                    }),
                                    (0, l.jsx)(h.A, {
                                      articles: e.slice(
                                        0,
                                        Math.min(e.length, 3),
                                      ),
                                    }),
                                    (0, l.jsx)("p", {
                                      className:
                                        "pt-12 pb-4 text-3xl font-bold",
                                      children: "Videos",
                                    }),
                                    (0, l.jsx)(u.A, {}),
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
    74474: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => i });
      var a = t(2183),
        l = t(46402),
        r = t.n(l);
      function i({ description: e }) {
        return (0, a.jsxs)(r(), {
          children: [
            (0, a.jsx)(
              "meta",
              { name: "description", content: e },
              "description",
            ),
            (0, a.jsx)(
              "meta",
              { property: "og:description", content: e },
              "og:description",
            ),
            (0, a.jsx)(
              "meta",
              { name: "twitter:description", content: e },
              "twitter:description",
            ),
          ],
        });
      }
    },
    80031: (e, s, t) => {
      "use strict";
      t.a(e, async (e, a) => {
        try {
          t.d(s, { A: () => x });
          var l = t(2183),
            r = t(64171),
            i = t(40453),
            c = t(46728),
            n = t.n(c),
            d = t(92642),
            o = t(9751),
            h = e([d, o]);
          function x({ articles: e }) {
            return (0, l.jsx)("div", {
              className: "flex flex-col gap-y-4",
              children: e?.map((e) => (0, l.jsx)(u, { article: e }, e.slug)),
            });
          }
          function u({ article: e }) {
            let { isLoggedIn: s } = (0, o.u)();
            return (0, l.jsxs)("div", {
              className:
                "text-md flex flex-col gap-y-4 rounded-xl bg-lightgray-100 px-8 py-8",
              children: [
                (0, l.jsx)("p", {
                  className: "text-2xl font-bold",
                  children: e.title,
                }),
                (0, l.jsx)("div", {
                  className: "line-clamp-3",
                  children: (0, i.i)(e.body, (0, d.Xx)(!0, s)),
                }),
                (0, l.jsx)("div", {
                  className: "pt-4",
                  children: (0, l.jsx)(n(), {
                    href: `/news/${e.category?.fields.slug}/${e?.slug}`,
                    children: (0, l.jsx)(r.A, {
                      variant: "green",
                      children: "Read More",
                    }),
                  }),
                }),
              ],
            });
          }
          (([d, o] = h.then ? (await h)() : h), a());
        } catch (e) {
          a(e);
        }
      });
    },
    91300: (e, s, t) => {
      "use strict";
      t.a(e, async (e, a) => {
        try {
          t.d(s, { A: () => x });
          var l = t(2183),
            r = t(15013),
            i = t.n(r),
            c = t(46728),
            n = t.n(c),
            d = t(9751),
            o = t(36439),
            h = e([d]);
          function x({ title: e, surveys: s }) {
            let {
                userData: t,
                emailData: a,
                resendVerification: r,
                completedSurveys: c,
              } = (0, d.u)(),
              h = async () => {
                r();
              },
              u = (0, o.useMemo)(
                () => s?.filter((e) => !c.includes(e.telemetryId)) ?? [],
                [s, c],
              );
            return (0, l.jsxs)("div", {
              className: "flex flex-wrap items-center gap-x-8 gap-y-4",
              children: [
                (0, l.jsx)("div", {
                  className: "relative h-[108px] w-[108px]",
                  children: (0, l.jsx)(i(), {
                    fill: !0,
                    className: `rounded-full object-cover ${!t?.accountInfo?.titleInfo?.avatarUrl && "bg-gray-500 p-4"}`,
                    alt: "welcome-image",
                    sizes: "216px",
                    src:
                      t?.accountInfo?.titleInfo?.avatarUrl ||
                      "/images/question_mark.svg",
                  }),
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsx)("p", {
                      className: "mb-4 text-5xl",
                      children: e,
                    }),
                    a &&
                      !a.hasConfirmedEmail &&
                      (0, l.jsxs)("p", {
                        className: "mb-4 text-sm",
                        children: [
                          "You're almost done! Please check your email to verify your account.",
                          " ",
                          (0, l.jsx)("button", {
                            className: "font-bold underline hover:no-underline",
                            onClick: h,
                            type: "button",
                            children: "Resend verification email",
                          }),
                        ],
                      }),
                    u.length > 0 &&
                      (0, l.jsxs)("p", {
                        className: "text-sm",
                        children: [
                          (0, l.jsx)("span", {
                            className: "text-red-500",
                            children: "You have surveys to complete! ",
                          }),
                          (0, l.jsx)(n(), {
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
          ((d = (h.then ? (await h)() : h)[0]), a());
        } catch (e) {
          a(e);
        }
      });
    },
  },
  (e) => {
    (e.O(0, [9950, 5013, 2696, 1329, 6342, 9980, 2642, 636, 6593, 8792], () =>
      e((e.s = 49855)),
    ),
      (_N_E = e.O()));
  },
]);
