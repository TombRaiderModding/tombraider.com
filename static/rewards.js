(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7396],
  {
    1447: (e, s, t) => {
      "use strict";
      t.a(e, async (e, a) => {
        try {
          t.d(s, { A: () => o });
          var l = t(2183),
            i = t(15013),
            r = t.n(i),
            n = t(9751),
            c = t(36439),
            d = e([n]);
          function o(e) {
            let { avatar: s, onClick: t } = e,
              { userData: a } = (0, n.u)(),
              i = (0, c.useMemo)(
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
                    (0, l.jsx)(r(), {
                      className: "rounded-full object-cover",
                      alt: s.title,
                      fill: !0,
                      sizes: "128px",
                      src: s.imageUrl ?? "/images/question_mark.svg",
                    }),
                    i &&
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
          ((n = (d.then ? (await d)() : d)[0]), a());
        } catch (e) {
          a(e);
        }
      });
    },
    11618: (e, s, t) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/account/rewards",
        function () {
          return t(22189);
        },
      ]);
    },
    14402: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => o });
      var a = t(2183),
        l = t(15013),
        i = t.n(l),
        r = t(46728),
        n = t.n(r),
        c = t(31153),
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
              (0, a.jsx)(x, {
                src: "/images/dashboard-icon.svg",
                href: "/account",
                active: "Dashboard" === s,
              }),
              (0, a.jsx)(x, {
                src: "/images/rewards-icon.svg",
                href: "/account/rewards",
                active: "Rewards" === s,
              }),
              (0, a.jsx)(x, {
                src: "/images/survey-icon.svg",
                href: "/account/surveys",
                active: "Surveys" === s,
              }),
              (0, a.jsx)(x, {
                src: "/images/settings-icon.svg",
                href: "/account/settings",
                active: "Settings" === s,
              }),
            ],
          })
        );
      }
      function x({ active: e, src: s, href: t }) {
        return (0, a.jsx)(n(), {
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
    22189: (e, s, t) => {
      "use strict";
      t.a(e, async (e, a) => {
        try {
          (t.r(s), t.d(s, { __N_SSG: () => y, default: () => w }));
          var l = t(2183),
            i = t(23855),
            r = t(14402),
            n = t(35877),
            c = t(61653),
            d = t(97698),
            o = t(26321),
            x = t(1447),
            h = t(13621),
            m = t(9751),
            u = t(23988),
            g = t(83737),
            f = t(15013),
            p = t.n(f),
            v = t(36439),
            j = e([i, n, o, x, h, m, g]);
          [i, n, o, x, h, m, g] = j.then ? (await j)() : j;
          var y = !0;
          function w({ navItems: e, surveys: s }) {
            let {
                userData: t,
                setUserData: a,
                rewards: f,
                rewardsLoading: j,
                rewardsError: y,
                fetchRewards: b,
              } = (0, m.u)(),
              [N, k] = (0, v.useState)(null),
              [I, U] = (0, v.useState)(null),
              [S, A] = (0, v.useState)(f.externalCodes ?? []),
              [_, C] = (0, v.useState)({}),
              { addAlert: D } = (0, u.Z)();
            ((0, v.useEffect)(() => {
              b();
            }, []),
              (0, v.useEffect)(() => {
                A(f.externalCodes ?? []);
              }, [f.externalCodes]),
              (0, v.useEffect)(() => {
                let e = localStorage.getItem("code-pending-redemption");
                e &&
                  (localStorage.removeItem("code-pending-redemption"),
                  (0, g.yM)({ code: e })
                    .then((e) => {
                      ("data" in e &&
                        e.data?.items &&
                        e.data?.items.length > 0 &&
                        k(e.data.items),
                        b());
                    })
                    .catch((e) => {
                      console.error("Failed to redeem pending code:", e);
                    }));
              }, [b]));
            let E =
                t?.accountInfo?.titleInfo?.avatarUrl ||
                "/images/question_mark.svg",
              R = async (e) => {
                C((s) => ({
                  ...s,
                  [e]: { ...s[e], loading: !0, error: null },
                }));
                try {
                  let s = await (0, g.p6)(e),
                    t = "data" in s ? s.data : null;
                  (A((s) =>
                    s.map((s) =>
                      s.id === e
                        ? {
                            ...s,
                            status: "assigned",
                            code: t?.code ?? s.code,
                            assignedAt:
                              t?.assignedAt ?? s.assignedAt ?? Date.now(),
                          }
                        : s,
                    ),
                  ),
                    C((s) => ({
                      ...s,
                      [e]: { ...s[e], loading: !1, error: null },
                    })));
                } catch (s) {
                  (console.error("Failed to reveal external code", s),
                    C((s) => ({
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
              z = async (e) => {
                try {
                  (await navigator.clipboard.writeText(e),
                    D({
                      title: "Code copied",
                      children: "Your code has been copied to the clipboard.",
                    }));
                } catch (e) {
                  (console.error("Failed to copy code", e),
                    D({
                      title: "Copy failed",
                      children: "We couldn't copy the code. Please try again.",
                    }));
                }
              },
              L = async (e) => {
                if (e.isUnlocked && I !== e.id) {
                  U(e.id);
                  try {
                    (await (0, g.nU)({ itemId: e.id }),
                      a((s) =>
                        s?.accountInfo?.titleInfo
                          ? {
                              ...s,
                              accountInfo: {
                                ...s.accountInfo,
                                titleInfo: {
                                  ...s.accountInfo.titleInfo,
                                  avatarUrl:
                                    e.imageUrl ??
                                    s.accountInfo.titleInfo.avatarUrl,
                                },
                              },
                            }
                          : s,
                      ));
                  } catch (e) {
                    console.error("Failed to set avatar from rewards page", e);
                  } finally {
                    U(null);
                  }
                }
              },
              M = (0, v.useMemo)(
                () =>
                  [...(f.avatars ?? []).filter((e) => e.isUnlocked)].sort(
                    (e, s) =>
                      e.title.localeCompare(s.title, void 0, {
                        sensitivity: "base",
                      }),
                  ),
                [f.avatars],
              ),
              F = (0, v.useMemo)(
                () =>
                  [
                    ...(f.fileDownloads ?? [])
                      .filter((e) => e.isUnlocked)
                      .map((e) => ({
                        id: e.id,
                        type: "file",
                        name: e.title,
                        link: e.fileUrl,
                        imageUrl: e.imageUrl,
                        startDate: e.startDate ?? void 0,
                      })),
                    ...(f.videoLinks ?? [])
                      .filter((e) => e.isUnlocked)
                      .map((e) => ({
                        id: e.id,
                        type: "video",
                        name: e.title,
                        link: e.link,
                        startDate: e.startDate ?? void 0,
                      })),
                  ].sort((e, s) =>
                    e.name.localeCompare(s.name, void 0, {
                      sensitivity: "base",
                    }),
                  ),
                [f.fileDownloads, f.videoLinks],
              ),
              T = (0, v.useMemo)(
                () =>
                  (S ?? [])
                    .filter((e) => e.isUnlocked)
                    .sort((e, s) =>
                      e.title.localeCompare(s.title, void 0, {
                        sensitivity: "base",
                      }),
                    ),
                [S],
              );
            return (0, l.jsxs)(n.A, {
              children: [
                (0, l.jsx)(h.A, {
                  rewards: N,
                  isLoggedIn: !0,
                  onClose: () => k(null),
                  showViewRewardsButton: !1,
                }),
                (0, l.jsx)("main", {
                  className: "min-h-screen bg-white text-black",
                  children: (0, l.jsxs)("div", {
                    children: [
                      (0, l.jsx)(i.A, { surveys: s, navItems: e }),
                      (0, l.jsx)(c.A, {}),
                      (0, l.jsx)(r.A, {}),
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
                                    children: (0, l.jsx)(p(), {
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
                              (0, l.jsx)(o.A, {
                                className: "lg:max-w-2xl",
                                onRedeemSuccess: (e) => {
                                  (e.items.length > 0 && k(e.items), b());
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
                                  j
                                    ? (0, l.jsx)("div", {
                                        className: "mt-6 flex justify-center",
                                        children: (0, l.jsx)(d.A, {}),
                                      })
                                    : 0 === M.length
                                      ? (0, l.jsx)("p", {
                                          className:
                                            "mt-6 text-sm text-gray-600",
                                          children:
                                            "You have not unlocked any avatars yet.",
                                        })
                                      : (0, l.jsx)("ul", {
                                          className: "mt-6 flex flex-col gap-4",
                                          children: M.map((e) =>
                                            (0, l.jsx)(
                                              "li",
                                              {
                                                children: (0, l.jsx)(x.A, {
                                                  avatar: e,
                                                  onClick: L,
                                                }),
                                              },
                                              e.id,
                                            ),
                                          ),
                                        }),
                                  y &&
                                    (0, l.jsx)("p", {
                                      className: "text-red-600 mt-4 text-sm",
                                      children: y,
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
                                  j
                                    ? (0, l.jsx)("div", {
                                        className: "mt-6 flex justify-center",
                                        children: (0, l.jsx)(d.A, {}),
                                      })
                                    : 0 === F.length
                                      ? (0, l.jsx)("p", {
                                          className:
                                            "mt-6 text-sm text-gray-600",
                                          children:
                                            "You have not unlocked any downloads yet.",
                                        })
                                      : (0, l.jsx)("ul", {
                                          className: "mt-6 flex flex-col gap-4",
                                          children: F.map((e) => {
                                            let s = (0, l.jsxs)("div", {
                                              className:
                                                "flex items-center gap-4 rounded-lg bg-white/60 p-3",
                                              children: [
                                                (0, l.jsx)("div", {
                                                  className:
                                                    "relative h-16 w-16 min-w-[64px] overflow-hidden rounded-full border border-black/10 bg-white",
                                                  children:
                                                    "file" === e.type &&
                                                    e.imageUrl
                                                      ? (0, l.jsx)(p(), {
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
                                                          children: s,
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
                                                          children: s,
                                                        },
                                                      ),
                                                    },
                                                    e.id,
                                                  )
                                              : (0, l.jsx)(
                                                  "li",
                                                  {
                                                    className: "opacity-70",
                                                    children: s,
                                                  },
                                                  e.id,
                                                );
                                          }),
                                        }),
                                  y &&
                                    (0, l.jsx)("p", {
                                      className: "text-red-600 mt-4 text-sm",
                                      children: y,
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
                                  j
                                    ? (0, l.jsx)("div", {
                                        className: "mt-6 flex justify-center",
                                        children: (0, l.jsx)(d.A, {}),
                                      })
                                    : 0 === T.length
                                      ? (0, l.jsx)("p", {
                                          className:
                                            "mt-6 text-sm text-gray-600",
                                          children:
                                            "You have not unlocked any external codes yet.",
                                        })
                                      : (0, l.jsx)("ul", {
                                          className: "mt-6 flex flex-col gap-4",
                                          children: T.map((e) => {
                                            let s = _[e.id],
                                              t = e.code;
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
                                                    t
                                                      ? (0, l.jsxs)("div", {
                                                          className:
                                                            "flex flex-wrap items-center gap-3",
                                                          children: [
                                                            (0, l.jsx)("span", {
                                                              className:
                                                                "rounded-md bg-gray-900 px-3 py-1 font-mono text-sm text-white",
                                                              children: t,
                                                            }),
                                                            (0, l.jsx)(
                                                              "button",
                                                              {
                                                                type: "button",
                                                                onClick: () =>
                                                                  z(t),
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
                                                          disabled: s?.loading,
                                                          onClick: () =>
                                                            R(e.id),
                                                          className:
                                                            "hover:bg-yellow-400 inline-flex items-center justify-center rounded-md bg-yellow-500 px-4 py-2 text-sm font-semibold text-black transition disabled:opacity-60",
                                                          children: s?.loading
                                                            ? "Fetching code..."
                                                            : "Reveal code",
                                                        }),
                                                    s?.error &&
                                                      (0, l.jsx)("p", {
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
                                  y &&
                                    (0, l.jsx)("p", {
                                      className: "text-red-600 mt-4 text-sm",
                                      children: y,
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
    23855: (e, s, t) => {
      "use strict";
      t.a(e, async (e, a) => {
        try {
          t.d(s, { A: () => u });
          var l = t(2183),
            i = t(36439),
            r = t(31996),
            n = t(49980),
            c = t(15013),
            d = t.n(c),
            o = t(46728),
            x = t.n(o),
            h = t(9751),
            m = e([r, n, h]);
          function u({ navItems: e, surveys: s }) {
            let { isLoggedIn: t } = (0, h.u)(),
              [a, c] = (0, i.useState)(!1),
              o = () =>
                e
                  .filter(
                    (e) => e.showInHeader && (!e.hideForLoggedInUsers || t),
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
                        children: o(),
                      }),
                      (0, l.jsx)(d(), {
                        width: 48,
                        height: 48,
                        alt: "hamburger menu",
                        className:
                          "relative z-20 cursor-pointer invert lg:hidden",
                        src: a ? "/images/close.svg" : "/images/hamburger.svg",
                        onClick: () => c(!a),
                      }),
                      (0, l.jsx)(x(), {
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
                      (0, l.jsx)(r.A, { surveys: s, darkMode: !0 }),
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
          (([r, n, h] = m.then ? (await m)() : m), a());
        } catch (e) {
          a(e);
        }
      });
    },
    35877: (e, s, t) => {
      "use strict";
      t.a(e, async (e, a) => {
        try {
          t.d(s, { A: () => c });
          var l = t(31153),
            i = t(36439),
            r = t(9751),
            n = e([r]);
          function c(e) {
            let { children: s } = e,
              t = (0, l.useRouter)(),
              { userData: a, cacheLoaded: n, loading: c } = (0, r.u)();
            return ((0, i.useEffect)(() => {
              c || !n || a || t.replace("/");
            }, [a, n, c, t]),
            a && n)
              ? s
              : null;
          }
          ((r = (n.then ? (await n)() : n)[0]), a());
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
        i = t.n(l),
        r = t(46728),
        n = t.n(r),
        c = t(31153),
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
                children: (0, a.jsx)(i(), {
                  width: 87,
                  height: 40,
                  alt: "dark Tomb Raider logo",
                  src: "/images/tombraider-logo-dark.svg",
                  className: "pb-6",
                }),
              }),
              (0, a.jsx)(x, {
                selected: "Dashboard" === s,
                href: "/account",
                src: "/images/dashboard-icon.svg",
                children: "Dashboard",
              }),
              (0, a.jsx)(x, {
                selected: "Rewards" === s,
                href: "/account/rewards",
                src: "/images/rewards-icon.svg",
                children: "Rewards",
              }),
              (0, a.jsx)(x, {
                selected: "Surveys" === s,
                href: "/account/surveys",
                src: "/images/survey-icon.svg",
                children: "Surveys",
              }),
              (0, a.jsx)(x, {
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
        let { src: s, children: t, selected: l, href: r } = e;
        return (0, a.jsx)(n(), {
          href: r,
          children: (0, a.jsxs)("div", {
            className: `flex w-32 cursor-pointer font-bold ${l ? "opacity-100" : "opacity-50"}`,
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
  },
  (e) => {
    (e.O(0, [9950, 5013, 2696, 9980, 636, 6593, 8792], () => e((e.s = 11618))),
      (_N_E = e.O()));
  },
]);
