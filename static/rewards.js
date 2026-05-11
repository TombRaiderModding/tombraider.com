(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7396],
  {
    39793: (e, s, t) => {
      "use strict";
      t.a(e, async (e, l) => {
        try {
          (t.r(s), t.d(s, { __N_SSG: () => y, default: () => w }));
          var a = t(2183),
            r = t(88891),
            i = t(79294),
            n = t(56145),
            c = t(53017),
            d = t(26974),
            o = t(94581),
            x = t(55507),
            h = t(27649),
            u = t(99435),
            m = t(77752),
            g = t(55109),
            f = t(96006),
            v = t.n(f),
            p = t(36439),
            j = e([r, n, o, x, h, u, g]);
          [r, n, o, x, h, u, g] = j.then ? (await j)() : j;
          var y = !0;
          function w(e) {
            var s, t, l;
            let { navItems: f, surveys: j } = e,
              {
                userData: y,
                setUserData: w,
                rewards: b,
                rewardsLoading: N,
                rewardsError: k,
                fetchRewards: I,
              } = (0, u.u)(),
              [U, S] = (0, p.useState)(null),
              [A, _] = (0, p.useState)(null),
              [C, D] = (0, p.useState)(null != (l = b.externalCodes) ? l : []),
              [E, R] = (0, p.useState)({}),
              { addAlert: z } = (0, m.Z)();
            ((0, p.useEffect)(() => {
              I();
            }, []),
              (0, p.useEffect)(() => {
                var e;
                D(null != (e = b.externalCodes) ? e : []);
              }, [b.externalCodes]),
              (0, p.useEffect)(() => {
                let e = localStorage.getItem("code-pending-redemption");
                e &&
                  (localStorage.removeItem("code-pending-redemption"),
                  (0, g.yM)({ code: e })
                    .then((e) => {
                      var s, t;
                      ("data" in e &&
                        (null == (s = e.data) ? void 0 : s.items) &&
                        (null == (t = e.data) ? void 0 : t.items.length) > 0 &&
                        S(e.data.items),
                        I());
                    })
                    .catch((e) => {
                      console.error("Failed to redeem pending code:", e);
                    }));
              }, [I]));
            let L =
                (null == y ||
                null == (t = y.accountInfo) ||
                null == (s = t.titleInfo)
                  ? void 0
                  : s.avatarUrl) || "/images/question_mark.svg",
              M = async (e) => {
                R((s) => ({
                  ...s,
                  [e]: { ...s[e], loading: !0, error: null },
                }));
                try {
                  let s = await (0, g.p6)(e),
                    t = "data" in s ? s.data : null;
                  (D((s) =>
                    s.map((s) => {
                      var l, a, r;
                      return s.id === e
                        ? {
                            ...s,
                            status: "assigned",
                            code:
                              null != (l = null == t ? void 0 : t.code)
                                ? l
                                : s.code,
                            assignedAt:
                              null !=
                              (r =
                                null != (a = null == t ? void 0 : t.assignedAt)
                                  ? a
                                  : s.assignedAt)
                                ? r
                                : Date.now(),
                          }
                        : s;
                    }),
                  ),
                    R((s) => ({
                      ...s,
                      [e]: { ...s[e], loading: !1, error: null },
                    })));
                } catch (s) {
                  (console.error("Failed to reveal external code", s),
                    R((s) => ({
                      ...s,
                      [e]: {
                        ...s[e],
                        loading: !1,
                        error:
                          "Unable to retrieve your code. Please try again.",
                      },
                    })));
                }
              },
              F = async (e) => {
                try {
                  (await navigator.clipboard.writeText(e),
                    z({
                      title: "Code copied",
                      children: "Your code has been copied to the clipboard.",
                    }));
                } catch (e) {
                  (console.error("Failed to copy code", e),
                    z({
                      title: "Copy failed",
                      children: "We couldn't copy the code. Please try again.",
                    }));
                }
              },
              T = async (e) => {
                if (e.isUnlocked && A !== e.id) {
                  _(e.id);
                  try {
                    (await (0, g.nU)({ itemId: e.id }),
                      w((s) => {
                        var t, l;
                        return (
                          null == s || null == (t = s.accountInfo)
                            ? void 0
                            : t.titleInfo
                        )
                          ? {
                              ...s,
                              accountInfo: {
                                ...s.accountInfo,
                                titleInfo: {
                                  ...s.accountInfo.titleInfo,
                                  avatarUrl:
                                    null != (l = e.imageUrl)
                                      ? l
                                      : s.accountInfo.titleInfo.avatarUrl,
                                },
                              },
                            }
                          : s;
                      }));
                  } catch (e) {
                    console.error("Failed to set avatar from rewards page", e);
                  } finally {
                    _(null);
                  }
                }
              },
              O = (0, p.useMemo)(() => {
                var e;
                return [
                  ...(null != (e = b.avatars) ? e : []).filter(
                    (e) => e.isUnlocked,
                  ),
                ].sort((e, s) =>
                  e.title.localeCompare(s.title, void 0, {
                    sensitivity: "base",
                  }),
                );
              }, [b.avatars]),
              P = (0, p.useMemo)(() => {
                var e, s;
                let t = (null != (e = b.fileDownloads) ? e : [])
                    .filter((e) => e.isUnlocked)
                    .map((e) => {
                      var s;
                      return {
                        id: e.id,
                        type: "file",
                        name: e.title,
                        link: e.fileUrl,
                        imageUrl: e.imageUrl,
                        startDate: null != (s = e.startDate) ? s : void 0,
                      };
                    }),
                  l = (null != (s = b.videoLinks) ? s : [])
                    .filter((e) => e.isUnlocked)
                    .map((e) => {
                      var s;
                      return {
                        id: e.id,
                        type: "video",
                        name: e.title,
                        link: e.link,
                        startDate: null != (s = e.startDate) ? s : void 0,
                      };
                    });
                return [...t, ...l].sort((e, s) =>
                  e.name.localeCompare(s.name, void 0, { sensitivity: "base" }),
                );
              }, [b.fileDownloads, b.videoLinks]),
              Y = (0, p.useMemo)(
                () =>
                  (null != C ? C : [])
                    .filter((e) => e.isUnlocked)
                    .sort((e, s) =>
                      e.title.localeCompare(s.title, void 0, {
                        sensitivity: "base",
                      }),
                    ),
                [C],
              );
            return (0, a.jsxs)(n.A, {
              children: [
                (0, a.jsx)(h.A, {
                  rewards: U,
                  isLoggedIn: !0,
                  onClose: () => S(null),
                  showViewRewardsButton: !1,
                }),
                (0, a.jsx)("main", {
                  className: "min-h-screen bg-white text-black",
                  children: (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsx)(r.A, { surveys: j, navItems: f }),
                      (0, a.jsx)(c.A, {}),
                      (0, a.jsx)(i.A, {}),
                      (0, a.jsxs)("div", {
                        className: "px-6 py-12 lg:ml-[256px] lg:px-12",
                        children: [
                          (0, a.jsxs)("section", {
                            className:
                              "flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between",
                            children: [
                              (0, a.jsxs)("div", {
                                className: "flex items-center gap-6",
                                children: [
                                  (0, a.jsx)("div", {
                                    className: "relative h-24 w-24 shrink-0",
                                    children: (0, a.jsx)(v(), {
                                      fill: !0,
                                      alt: "Selected avatar",
                                      sizes: "192px",
                                      src: L,
                                      className: "rounded-full object-cover",
                                    }),
                                  }),
                                  (0, a.jsxs)("div", {
                                    children: [
                                      (0, a.jsx)("h1", {
                                        className:
                                          "text-4xl font-bold sm:text-5xl",
                                        children: "Rewards",
                                      }),
                                      (0, a.jsx)("p", {
                                        className:
                                          "mt-3 text-base text-gray-600",
                                        children:
                                          "Enter your reward code to unlock items instantly.",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsx)(o.A, {
                                className: "lg:max-w-2xl",
                                onRedeemSuccess: (e) => {
                                  (e.items.length > 0 && S(e.items), I());
                                },
                              }),
                            ],
                          }),
                          (0, a.jsxs)("section", {
                            className: "mt-12 grid gap-6 lg:grid-cols-3",
                            children: [
                              (0, a.jsxs)("div", {
                                className:
                                  "rounded-xl bg-lightgray-100 px-6 py-8 shadow-sm",
                                children: [
                                  (0, a.jsx)("h3", {
                                    className: "text-xl font-semibold",
                                    children: "Avatars",
                                  }),
                                  N
                                    ? (0, a.jsx)("div", {
                                        className: "mt-6 flex justify-center",
                                        children: (0, a.jsx)(d.A, {}),
                                      })
                                    : 0 === O.length
                                      ? (0, a.jsx)("p", {
                                          className:
                                            "mt-6 text-sm text-gray-600",
                                          children:
                                            "You have not unlocked any avatars yet.",
                                        })
                                      : (0, a.jsx)("ul", {
                                          className: "mt-6 flex flex-col gap-4",
                                          children: O.map((e) =>
                                            (0, a.jsx)(
                                              "li",
                                              {
                                                children: (0, a.jsx)(x.A, {
                                                  avatar: e,
                                                  onClick: T,
                                                }),
                                              },
                                              e.id,
                                            ),
                                          ),
                                        }),
                                  k &&
                                    (0, a.jsx)("p", {
                                      className: "text-red-600 mt-4 text-sm",
                                      children: k,
                                    }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className:
                                  "rounded-xl bg-lightgray-100 px-6 py-8 shadow-sm",
                                children: [
                                  (0, a.jsx)("h3", {
                                    className: "text-xl font-semibold",
                                    children: "Other Downloads",
                                  }),
                                  N
                                    ? (0, a.jsx)("div", {
                                        className: "mt-6 flex justify-center",
                                        children: (0, a.jsx)(d.A, {}),
                                      })
                                    : 0 === P.length
                                      ? (0, a.jsx)("p", {
                                          className:
                                            "mt-6 text-sm text-gray-600",
                                          children:
                                            "You have not unlocked any downloads yet.",
                                        })
                                      : (0, a.jsx)("ul", {
                                          className: "mt-6 flex flex-col gap-4",
                                          children: P.map((e) => {
                                            let s = (0, a.jsxs)("div", {
                                              className:
                                                "flex items-center gap-4 rounded-lg bg-white/60 p-3",
                                              children: [
                                                (0, a.jsx)("div", {
                                                  className:
                                                    "relative h-16 w-16 min-w-[64px] overflow-hidden rounded-full border border-black/10 bg-white",
                                                  children:
                                                    "file" === e.type &&
                                                    e.imageUrl
                                                      ? (0, a.jsx)(v(), {
                                                          fill: !0,
                                                          sizes: "128px",
                                                          src: e.imageUrl,
                                                          alt: e.name,
                                                          className:
                                                            "object-cover",
                                                        })
                                                      : (0, a.jsx)("div", {
                                                          className:
                                                            "flex h-full w-full items-center justify-center text-xs font-semibold uppercase text-gray-500",
                                                          children:
                                                            "file" === e.type
                                                              ? "Image"
                                                              : "Link",
                                                        }),
                                                }),
                                                (0, a.jsxs)("div", {
                                                  className:
                                                    "flex flex-1 flex-col",
                                                  children: [
                                                    (0, a.jsx)("p", {
                                                      className:
                                                        "font-semibold",
                                                      children: e.name,
                                                    }),
                                                    (0, a.jsx)("span", {
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
                                                  ? (0, a.jsx)("span", {
                                                      className:
                                                        "text-sm font-semibold text-black underline decoration-2 underline-offset-4",
                                                      children:
                                                        "file" === e.type
                                                          ? "Download"
                                                          : "Open",
                                                    })
                                                  : (0, a.jsx)("span", {
                                                      className:
                                                        "text-xs uppercase tracking-wide text-gray-400",
                                                      children: "Unavailable",
                                                    }),
                                              ],
                                            });
                                            return e.link
                                              ? "file" === e.type
                                                ? (0, a.jsx)(
                                                    "li",
                                                    {
                                                      children: (0, a.jsx)(
                                                        "a",
                                                        {
                                                          href: e.link,
                                                          download: !0,
                                                          className:
                                                            "block transition hover:opacity-90",
                                                          children: s,
                                                        },
                                                      ),
                                                    },
                                                    e.id,
                                                  )
                                                : (0, a.jsx)(
                                                    "li",
                                                    {
                                                      children: (0, a.jsx)(
                                                        "a",
                                                        {
                                                          href: e.link,
                                                          target: "_blank",
                                                          rel: "noreferrer",
                                                          className:
                                                            "block transition hover:opacity-90",
                                                          children: s,
                                                        },
                                                      ),
                                                    },
                                                    e.id,
                                                  )
                                              : (0, a.jsx)(
                                                  "li",
                                                  {
                                                    className: "opacity-70",
                                                    children: s,
                                                  },
                                                  e.id,
                                                );
                                          }),
                                        }),
                                  k &&
                                    (0, a.jsx)("p", {
                                      className: "text-red-600 mt-4 text-sm",
                                      children: k,
                                    }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className:
                                  "rounded-xl bg-lightgray-100 px-6 py-8 shadow-sm",
                                children: [
                                  (0, a.jsx)("h3", {
                                    className: "text-xl font-semibold",
                                    children: "External Codes",
                                  }),
                                  N
                                    ? (0, a.jsx)("div", {
                                        className: "mt-6 flex justify-center",
                                        children: (0, a.jsx)(d.A, {}),
                                      })
                                    : 0 === Y.length
                                      ? (0, a.jsx)("p", {
                                          className:
                                            "mt-6 text-sm text-gray-600",
                                          children:
                                            "You have not unlocked any external codes yet.",
                                        })
                                      : (0, a.jsx)("ul", {
                                          className: "mt-6 flex flex-col gap-4",
                                          children: Y.map((e) => {
                                            let s = E[e.id],
                                              t = e.code;
                                            return (0, a.jsx)(
                                              "li",
                                              {
                                                children: (0, a.jsxs)("div", {
                                                  className:
                                                    "flex flex-col gap-3 rounded-lg bg-white/70 p-4",
                                                  children: [
                                                    (0, a.jsxs)("div", {
                                                      className:
                                                        "flex flex-col gap-1",
                                                      children: [
                                                        (0, a.jsx)("p", {
                                                          className:
                                                            "text-base font-semibold",
                                                          children: e.title,
                                                        }),
                                                        e.redemptionInstructions
                                                          ? (0, a.jsx)("p", {
                                                              className:
                                                                "text-sm text-gray-700",
                                                              children:
                                                                e.redemptionInstructions,
                                                            })
                                                          : null,
                                                      ],
                                                    }),
                                                    t
                                                      ? (0, a.jsxs)("div", {
                                                          className:
                                                            "flex flex-wrap items-center gap-3",
                                                          children: [
                                                            (0, a.jsx)("span", {
                                                              className:
                                                                "rounded-md bg-gray-900 px-3 py-1 font-mono text-sm text-white",
                                                              children: t,
                                                            }),
                                                            (0, a.jsx)(
                                                              "button",
                                                              {
                                                                type: "button",
                                                                onClick: () =>
                                                                  F(t),
                                                                className:
                                                                  "text-yellow-600 hover:text-yellow-700 text-sm font-semibold",
                                                                children:
                                                                  "Copy code",
                                                              },
                                                            ),
                                                          ],
                                                        })
                                                      : (0, a.jsx)("button", {
                                                          type: "button",
                                                          disabled:
                                                            null == s
                                                              ? void 0
                                                              : s.loading,
                                                          onClick: () =>
                                                            M(e.id),
                                                          className:
                                                            "hover:bg-yellow-400 inline-flex items-center justify-center rounded-md bg-yellow-500 px-4 py-2 text-sm font-semibold text-black transition disabled:opacity-60",
                                                          children: (
                                                            null == s
                                                              ? void 0
                                                              : s.loading
                                                          )
                                                            ? "Fetching code..."
                                                            : "Reveal code",
                                                        }),
                                                    (null == s
                                                      ? void 0
                                                      : s.error) &&
                                                      (0, a.jsx)("p", {
                                                        className:
                                                          "text-red-600 text-sm",
                                                        children: s.error,
                                                      }),
                                                  ],
                                                }),
                                              },
                                              e.id,
                                            );
                                          }),
                                        }),
                                  k &&
                                    (0, a.jsx)("p", {
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
          l();
        } catch (e) {
          l(e);
        }
      });
    },
    53017: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => o });
      var l = t(2183),
        a = t(96006),
        r = t.n(a),
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
          (0, l.jsxs)("div", {
            className:
              "fixed left-0 top-0 z-[100] hidden h-screen w-[256px] flex-col items-center gap-y-6 border-r bg-white pt-8 lg:flex",
            children: [
              (0, l.jsx)(n(), {
                href: "/",
                children: (0, l.jsx)(r(), {
                  width: 87,
                  height: 40,
                  alt: "dark Tomb Raider logo",
                  src: "/images/tombraider-logo-dark.svg",
                  className: "pb-6",
                }),
              }),
              (0, l.jsx)(x, {
                selected: "Dashboard" === s,
                href: "/account",
                src: "/images/dashboard-icon.svg",
                children: "Dashboard",
              }),
              (0, l.jsx)(x, {
                selected: "Rewards" === s,
                href: "/account/rewards",
                src: "/images/rewards-icon.svg",
                children: "Rewards",
              }),
              (0, l.jsx)(x, {
                selected: "Surveys" === s,
                href: "/account/surveys",
                src: "/images/survey-icon.svg",
                children: "Surveys",
              }),
              (0, l.jsx)(x, {
                selected: "Settings" === s,
                href: "/account/settings",
                src: "/images/settings-icon.svg",
                children: "Settings",
              }),
            ],
          })
        );
      }
      function x(e) {
        let { src: s, children: t, selected: a, href: i } = e;
        return (0, l.jsx)(n(), {
          href: i,
          children: (0, l.jsxs)("div", {
            className: "flex w-32 cursor-pointer font-bold ".concat(
              a ? "opacity-100" : "opacity-50",
            ),
            children: [
              (0, l.jsx)(r(), {
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
    55507: (e, s, t) => {
      "use strict";
      t.a(e, async (e, l) => {
        try {
          t.d(s, { A: () => o });
          var a = t(2183),
            r = t(96006),
            i = t.n(r),
            n = t(99435),
            c = t(36439),
            d = e([n]);
          function o(e) {
            var s, t, l;
            let { avatar: r, onClick: d } = e,
              { userData: o } = (0, n.u)(),
              x = (0, c.useMemo)(() => {
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
            return (0, a.jsxs)("div", {
              onClick: () => {
                r.isUnlocked && d(r);
              },
              className: "flex items-center gap-x-4 ".concat(
                r.isUnlocked ? "cursor-pointer opacity-100" : "opacity-50",
              ),
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "relative aspect-square w-16 shrink-0 rounded-full",
                  children: [
                    (0, a.jsx)(i(), {
                      className: "rounded-full object-cover",
                      alt: r.title,
                      fill: !0,
                      sizes: "128px",
                      src:
                        null != (l = r.imageUrl)
                          ? l
                          : "/images/question_mark.svg",
                    }),
                    x &&
                      (0, a.jsx)("div", {
                        className:
                          "relative z-10 h-full w-full rounded-full bg-black/50",
                        children: (0, a.jsx)(i(), {
                          className: "object-cover p-4",
                          alt: "check",
                          src: "/images/check_white.svg",
                          fill: !0,
                        }),
                      }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)("p", {
                      className: "text-xl",
                      children: r.title,
                    }),
                    (0, a.jsx)("p", {
                      className: "text-md",
                      children: r.howToGetIt,
                    }),
                  ],
                }),
              ],
            });
          }
          ((n = (d.then ? (await d)() : d)[0]), l());
        } catch (e) {
          l(e);
        }
      });
    },
    56145: (e, s, t) => {
      "use strict";
      t.a(e, async (e, l) => {
        try {
          t.d(s, { A: () => c });
          var a = t(18652),
            r = t(36439),
            i = t(99435),
            n = e([i]);
          function c(e) {
            let { children: s } = e,
              t = (0, a.useRouter)(),
              { userData: l, cacheLoaded: n, loading: c } = (0, i.u)();
            return ((0, r.useEffect)(() => {
              c || !n || l || t.replace("/");
            }, [l, n, c, t]),
            l && n)
              ? s
              : null;
          }
          ((i = (n.then ? (await n)() : n)[0]), l());
        } catch (e) {
          l(e);
        }
      });
    },
    79294: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => o });
      var l = t(2183),
        a = t(96006),
        r = t.n(a),
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
          (0, l.jsxs)("div", {
            className:
              "fixed bottom-8 left-1/2 z-10 flex w-48 -translate-x-1/2 gap-x-6 rounded-xl bg-black/90 px-6 py-3 text-white lg:hidden",
            children: [
              (0, l.jsx)(x, {
                src: "/images/dashboard-icon.svg",
                href: "/account",
                active: "Dashboard" === s,
              }),
              (0, l.jsx)(x, {
                src: "/images/rewards-icon.svg",
                href: "/account/rewards",
                active: "Rewards" === s,
              }),
              (0, l.jsx)(x, {
                src: "/images/survey-icon.svg",
                href: "/account/surveys",
                active: "Surveys" === s,
              }),
              (0, l.jsx)(x, {
                src: "/images/settings-icon.svg",
                href: "/account/settings",
                active: "Settings" === s,
              }),
            ],
          })
        );
      }
      function x(e) {
        let { active: s, src: t, href: a } = e;
        return (0, l.jsx)(n(), {
          href: a,
          children: (0, l.jsx)(r(), {
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
      t.a(e, async (e, l) => {
        try {
          t.d(s, { A: () => m });
          var a = t(2183),
            r = t(36439),
            i = t(3976),
            n = t(95216),
            c = t(96006),
            d = t.n(c),
            o = t(11677),
            x = t.n(o),
            h = t(99435),
            u = e([i, n, h]);
          function m(e) {
            let { navItems: s, surveys: t } = e,
              { isLoggedIn: l } = (0, h.u)(),
              [c, o] = (0, r.useState)(!1),
              u = () =>
                s
                  .filter(
                    (e) => e.showInHeader && (!e.hideForLoggedInUsers || l),
                  )
                  .map((e) =>
                    (0, a.jsx)(
                      n.jU,
                      { href: e.link, title: e.name, darkMode: !0 },
                      e.link,
                    ),
                  );
            return (0, a.jsxs)("header", {
              className:
                "lg:w-[calc(100% - 256px] relative sticky top-0 left-0 z-[20] bg-white px-12 pt-6 lg:ml-[256px]",
              children: [
                (0, a.jsx)("nav", {
                  "aria-label": "Global",
                  children: (0, a.jsxs)("div", {
                    className: "flex w-full justify-between",
                    children: [
                      (0, a.jsx)("div", {
                        className: "hidden items-center gap-x-4 lg:flex",
                        children: u(),
                      }),
                      (0, a.jsx)(d(), {
                        width: 48,
                        height: 48,
                        alt: "hamburger menu",
                        className:
                          "relative z-20 cursor-pointer invert lg:hidden",
                        src: c ? "/images/close.svg" : "/images/hamburger.svg",
                        onClick: () => o(!c),
                      }),
                      (0, a.jsx)(x(), {
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
                      (0, a.jsx)(i.A, { surveys: t, darkMode: !0 }),
                    ],
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "mt-4 h-[1px] w-full bg-gray-300/50",
                }),
                (0, a.jsx)("div", {
                  className:
                    "fixed top-0 left-0 z-10 w-full overflow-hidden bg-gray-100/90 transition duration-300 lg:hidden",
                  style: {
                    height: c ? "100vh" : "0",
                    transition: "height 0.3s ease",
                  },
                  children: (0, a.jsx)("div", {
                    className: "flex flex-col items-center gap-y-8 pt-32",
                    children: u(),
                  }),
                }),
              ],
            });
          }
          (([i, n, h] = u.then ? (await u)() : u), l());
        } catch (e) {
          l(e);
        }
      });
    },
    91567: (e, s, t) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/account/rewards",
        function () {
          return t(39793);
        },
      ]);
    },
  },
  (e) => {
    (e.O(0, [9950, 6006, 1433, 5216, 636, 6593, 8792], () => e((e.s = 91567))),
      (_N_E = e.O()));
  },
]);
