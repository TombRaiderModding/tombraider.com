(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [871],
  {
    18309: (e, s, t) => {
      "use strict";
      t.a(e, async (e, a) => {
        try {
          (t.r(s), t.d(s, { __N_SSG: () => p, default: () => y }));
          var r = t(2183),
            l = t(88891),
            n = t(79294),
            i = t(53808),
            c = t(56145),
            o = t(15711),
            d = t(51472),
            u = t(56610),
            h = t(53017),
            m = t(77752),
            x = t(99435),
            v = t(55109),
            g = t(36439),
            f = e([l, i, c, x, v]);
          [l, i, c, x, v] = f.then ? (await f)() : f;
          var p = !0;
          function y(e) {
            let { navItems: s, surveys: t } = e,
              [a, f] = (0, g.useState)(!1),
              [p, y] = (0, g.useState)(!1),
              {
                deleteAccount: j,
                mailingListStatus: b,
                setMailingListStatus: w,
              } = (0, x.u)(),
              [N, k] = (0, g.useState)(!1),
              [S, A] = (0, g.useState)(!1),
              { userData: C } = (0, x.u)(),
              { addAlert: D } = (0, m.Z)();
            (0, g.useEffect)(() => {
              A(b);
            }, [b]);
            let E = async () => {
                var e;
                let s =
                  null == C || null == (e = C.accountInfo) ? void 0 : e.email;
                if (!s)
                  return void D({
                    title: "Missing Email",
                    children: "Please provide an email or reload the page.",
                  });
                y(!0);
                let t = await v.iC({ email: s });
                (y(!1),
                  t.error ||
                    D({
                      title: "Email sent!",
                      children:
                        "Please check your email for further instructions.",
                    }));
              },
              _ = async () => {
                k(!0);
                let e = await v.q7({ isUserOnMailingList: S });
                (k(!1),
                  e.error ||
                    (w(S),
                    D({
                      title: "Mailing List Status Changed",
                      children: S
                        ? "You will now receive promotional emails from us."
                        : "You will no longer receieve promotional emails from us.",
                    })));
              },
              R = async () => {
                j();
              };
            return (0, r.jsx)(c.A, {
              children: (0, r.jsx)("main", {
                className: "min-h-screen overflow-hidden bg-white text-black",
                children: (0, r.jsxs)("div", {
                  className: "h-screen w-full overflow-x-hidden ",
                  children: [
                    (0, r.jsx)(l.A, { surveys: t, navItems: s }),
                    (0, r.jsx)(h.A, {}),
                    (0, r.jsx)(n.A, {}),
                    (0, r.jsxs)("div", {
                      className: "px-6 py-12 lg:ml-[256px] lg:px-12",
                      children: [
                        (0, r.jsx)(i.A, { title: "Account Settings" }),
                        (0, r.jsxs)("div", {
                          className:
                            "flex max-w-[700px] flex-col gap-y-8 pt-16",
                          children: [
                            (0, r.jsxs)("div", {
                              className:
                                "flex flex-col gap-y-4 rounded-xl bg-lightgray-100 px-8 py-8",
                              children: [
                                (0, r.jsx)("h3", {
                                  className: "text-2xl font-bold",
                                  children: "Change Password",
                                }),
                                (0, r.jsx)("p", {
                                  className: "mb-0",
                                  children:
                                    "Click below to receive an email to reset your password.",
                                }),
                                (0, r.jsx)("div", {
                                  className: "pt-6",
                                  children: (0, r.jsx)(o.A, {
                                    loading: p,
                                    onClick: E,
                                    variant: "dark",
                                    children: "Reset Password",
                                  }),
                                }),
                              ],
                            }),
                            (0, r.jsxs)("div", {
                              className:
                                "flex flex-col gap-y-4 rounded-xl bg-lightgray-100 px-8 py-8",
                              children: [
                                (0, r.jsx)("h3", {
                                  className: "mb-2 text-2xl font-bold",
                                  children: "Subscribe for Updates",
                                }),
                                (0, r.jsx)(d.A, {
                                  variant: "dark",
                                  value: S,
                                  onChange: (e) => {
                                    N || A(e);
                                  },
                                  children:
                                    "I agree to receive news, updates, and promotions by email from Crystal Dynamics.",
                                }),
                                (0, r.jsx)("div", {
                                  children: (0, r.jsx)(o.A, {
                                    loading: N,
                                    onClick: _,
                                    variant: "dark",
                                    className: "mt-8",
                                    children: "Save Changes",
                                  }),
                                }),
                              ],
                            }),
                            (0, r.jsxs)("div", {
                              className:
                                "flex flex-col gap-y-4 rounded-xl bg-lightgray-100 px-8 py-8",
                              children: [
                                (0, r.jsx)("h3", {
                                  className: "text-2xl font-bold",
                                  children: "Delete Account",
                                }),
                                (0, r.jsx)("p", {
                                  className: "",
                                  children:
                                    "Delete your account and all of its contents?",
                                }),
                                (0, r.jsx)("div", {
                                  className: "mt-8",
                                  children: (0, r.jsx)(o.A, {
                                    onClick: () => f(!0),
                                    variant: "error",
                                    children: "Delete My Account",
                                  }),
                                }),
                              ],
                            }),
                            (0, r.jsx)(u.A, {
                              open: a,
                              onClose: () => f(!1),
                              onDelete: R,
                            }),
                          ],
                        }),
                      ],
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
    28872: (e, s, t) => {
      "use strict";
      e.exports = t(94528);
    },
    49154: (e, s, t) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/account/settings",
        function () {
          return t(18309);
        },
      ]);
    },
    51472: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => r });
      var a = t(2183);
      function r(e) {
        let {
          children: s,
          variant: t = "normal",
          value: r,
          onChange: l,
          id: n,
        } = e;
        return (0, a.jsx)("div", {
          className: "relative",
          children: (0, a.jsxs)("label", {
            className: "main flex cursor-pointer items-center",
            children: [
              (0, a.jsx)("p", { className: "ml-8 select-none", children: s }),
              (0, a.jsx)("input", {
                id: n,
                checked: r,
                onChange: (e) => l(e.target.checked),
                type: "checkbox",
              }),
              (0, a.jsx)("span", {
                className: "geekmark backdrop-blur outline-none ".concat(
                  "normal" === t
                    ? "geekmark-light border-2 border-gray-300/20 bg-white/20 duration-200 hover:border-white/50 focus:border-white"
                    : "geekmark-dark border-2 border-gray-500/30 bg-gray-800/10 duration-200 hover:border-gray-800/60 focus:border-gray-800/80",
                ),
              }),
            ],
          }),
        });
      }
      t(36439);
    },
    53017: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => d });
      var a = t(2183),
        r = t(96006),
        l = t.n(r),
        n = t(11677),
        i = t.n(n),
        c = t(18652),
        o = t(36439);
      function d() {
        let e = (0, c.useRouter)(),
          [s, t] = (0, o.useState)("Dashboard");
        return (
          (0, o.useEffect)(() => {
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
              (0, a.jsx)(i(), {
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
        let { src: s, children: t, selected: r, href: n } = e;
        return (0, a.jsx)(i(), {
          href: n,
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
    53808: (e, s, t) => {
      "use strict";
      t.a(e, async (e, a) => {
        try {
          t.d(s, { A: () => h });
          var r = t(2183),
            l = t(96006),
            n = t.n(l),
            i = t(11677),
            c = t.n(i),
            o = t(99435),
            d = t(36439),
            u = e([o]);
          function h(e) {
            var s, t, a, l;
            let { title: i, surveys: u } = e,
              {
                userData: h,
                emailData: m,
                resendVerification: x,
                completedSurveys: v,
              } = (0, o.u)(),
              g = async () => {
                x();
              },
              f = (0, d.useMemo)(() => {
                var e;
                return null !=
                  (e =
                    null == u
                      ? void 0
                      : u.filter((e) => !v.includes(e.telemetryId)))
                  ? e
                  : [];
              }, [u, v]);
            return (0, r.jsxs)("div", {
              className: "flex flex-wrap items-center gap-x-8 gap-y-4",
              children: [
                (0, r.jsx)("div", {
                  className: "relative h-[108px] w-[108px]",
                  children: (0, r.jsx)(n(), {
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
                      null == (l = h.accountInfo) ||
                      null == (a = l.titleInfo)
                        ? void 0
                        : a.avatarUrl) || "/images/question_mark.svg",
                  }),
                }),
                (0, r.jsxs)("div", {
                  children: [
                    (0, r.jsx)("p", {
                      className: "mb-4 text-5xl",
                      children: i,
                    }),
                    m &&
                      !m.hasConfirmedEmail &&
                      (0, r.jsxs)("p", {
                        className: "mb-4 text-sm",
                        children: [
                          "You're almost done! Please check your email to verify your account.",
                          " ",
                          (0, r.jsx)("button", {
                            className: "font-bold underline hover:no-underline",
                            onClick: g,
                            type: "button",
                            children: "Resend verification email",
                          }),
                        ],
                      }),
                    f.length > 0 &&
                      (0, r.jsxs)("p", {
                        className: "text-sm",
                        children: [
                          (0, r.jsx)("span", {
                            className: "text-red-500",
                            children: "You have surveys to complete! ",
                          }),
                          (0, r.jsx)(c(), {
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
          ((o = (u.then ? (await u)() : u)[0]), a());
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
          var r = t(18652),
            l = t(36439),
            n = t(99435),
            i = e([n]);
          function c(e) {
            let { children: s } = e,
              t = (0, r.useRouter)(),
              { userData: a, cacheLoaded: i, loading: c } = (0, n.u)();
            return ((0, l.useEffect)(() => {
              c || !i || a || t.replace("/");
            }, [a, i, c, t]),
            a && i)
              ? s
              : null;
          }
          ((n = (i.then ? (await i)() : i)[0]), a());
        } catch (e) {
          a(e);
        }
      });
    },
    56610: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => c });
      var a = t(2183),
        r = t(36439),
        l = t(85414),
        n = t(91593),
        i = t(15711);
      function c(e) {
        let { open: s, onClose: t, onDelete: c } = e,
          o = (0, r.useRef)(null);
        return (0, a.jsx)(l.Transition.Root, {
          show: s,
          as: r.Fragment,
          children: (0, a.jsxs)(l.Dialog, {
            as: "div",
            className: "relative z-10",
            initialFocus: o,
            onClose: t,
            children: [
              (0, a.jsx)(l.Transition.Child, {
                as: r.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: (0, a.jsx)("div", {
                  className: "fixed inset-0 bg-gray-500/75 transition-opacity",
                }),
              }),
              (0, a.jsx)("div", {
                className: "fixed inset-0 z-10 overflow-y-auto",
                children: (0, a.jsx)("div", {
                  className:
                    "flex min-h-full items-center justify-center p-4 text-center sm:p-0",
                  children: (0, a.jsx)(l.Transition.Child, {
                    as: r.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom:
                      "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                    enterTo: "opacity-100 translate-y-0 sm:scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
                    leaveTo:
                      "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                    children: (0, a.jsxs)(l.Dialog.Panel, {
                      className:
                        "relative overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg",
                      children: [
                        (0, a.jsx)("div", {
                          className: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",
                          children: (0, a.jsxs)("div", {
                            className: "sm:flex sm:items-start",
                            children: [
                              (0, a.jsx)("div", {
                                className:
                                  "mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-500/20 sm:mx-0 sm:h-10 sm:w-10",
                                children: (0, a.jsx)(n.A, {
                                  className: "h-6 w-6 text-red-500",
                                  "aria-hidden": "true",
                                }),
                              }),
                              (0, a.jsxs)("div", {
                                className:
                                  "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",
                                children: [
                                  (0, a.jsx)(l.Dialog.Title, {
                                    as: "h3",
                                    className:
                                      "text-base leading-6 font-semibold text-gray-900",
                                    children: "Delete account",
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "mt-2",
                                    children: (0, a.jsx)("p", {
                                      className: "text-sm text-gray-500",
                                      children:
                                        "Are you sure you want to delete your account? All of your data will be permanently removed. This action cannot be undone.",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "flex flex-row-reverse justify-center bg-gray-50 px-4 py-3",
                          children: [
                            (0, a.jsx)(i.A, {
                              className: "account_delete ml-4",
                              type: "button",
                              variant: "error",
                              onClick: c,
                              children: "Delete",
                            }),
                            (0, a.jsx)(i.A, {
                              type: "button",
                              variant: "dark",
                              onClick: t,
                              children: "Cancel",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            ],
          }),
        });
      }
    },
    79294: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => d });
      var a = t(2183),
        r = t(96006),
        l = t.n(r),
        n = t(11677),
        i = t.n(n),
        c = t(18652),
        o = t(36439);
      function d() {
        let e = (0, c.useRouter)(),
          [s, t] = (0, o.useState)("Dashboard");
        return (
          (0, o.useEffect)(() => {
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
        return (0, a.jsx)(i(), {
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
    88891: (e, s, t) => {
      "use strict";
      t.a(e, async (e, a) => {
        try {
          t.d(s, { A: () => x });
          var r = t(2183),
            l = t(36439),
            n = t(3976),
            i = t(95216),
            c = t(96006),
            o = t.n(c),
            d = t(11677),
            u = t.n(d),
            h = t(99435),
            m = e([n, i, h]);
          function x(e) {
            let { navItems: s, surveys: t } = e,
              { isLoggedIn: a } = (0, h.u)(),
              [c, d] = (0, l.useState)(!1),
              m = () =>
                s
                  .filter(
                    (e) => e.showInHeader && (!e.hideForLoggedInUsers || a),
                  )
                  .map((e) =>
                    (0, r.jsx)(
                      i.jU,
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
                        children: m(),
                      }),
                      (0, r.jsx)(o(), {
                        width: 48,
                        height: 48,
                        alt: "hamburger menu",
                        className:
                          "relative z-20 cursor-pointer invert lg:hidden",
                        src: c ? "/images/close.svg" : "/images/hamburger.svg",
                        onClick: () => d(!c),
                      }),
                      (0, r.jsx)(u(), {
                        href: "/",
                        children: (0, r.jsx)(o(), {
                          className: "relative h-10 w-auto lg:hidden",
                          priority: !0,
                          src: "/images/tombraider-logo-dark.svg",
                          alt: "Header Logo",
                          width: 48,
                          height: 48,
                        }),
                      }),
                      (0, r.jsx)(n.A, { surveys: t, darkMode: !0 }),
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
                    height: c ? "100vh" : "0",
                    transition: "height 0.3s ease",
                  },
                  children: (0, r.jsx)("div", {
                    className: "flex flex-col items-center gap-y-8 pt-32",
                    children: m(),
                  }),
                }),
              ],
            });
          }
          (([n, i, h] = m.then ? (await m)() : m), a());
        } catch (e) {
          a(e);
        }
      });
    },
    91593: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => r });
      var a = t(36439);
      let r = a.forwardRef(function ({ title: e, titleId: s, ...t }, r) {
        return a.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 1.5,
              stroke: "currentColor",
              "aria-hidden": "true",
              "data-slot": "icon",
              ref: r,
              "aria-labelledby": s,
            },
            t,
          ),
          e ? a.createElement("title", { id: s }, e) : null,
          a.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z",
          }),
        );
      });
    },
    94528: (e, s, t) => {
      "use strict";
      var a = t(36439),
        r =
          "function" == typeof Object.is
            ? Object.is
            : function (e, s) {
                return (
                  (e === s && (0 !== e || 1 / e == 1 / s)) || (e != e && s != s)
                );
              },
        l = a.useSyncExternalStore,
        n = a.useRef,
        i = a.useEffect,
        c = a.useMemo,
        o = a.useDebugValue;
      s.useSyncExternalStoreWithSelector = function (e, s, t, a, d) {
        var u = n(null);
        if (null === u.current) {
          var h = { hasValue: !1, value: null };
          u.current = h;
        } else h = u.current;
        var m = l(
          e,
          (u = c(
            function () {
              function e(e) {
                if (!i) {
                  if (
                    ((i = !0), (l = e), (e = a(e)), void 0 !== d && h.hasValue)
                  ) {
                    var s = h.value;
                    if (d(s, e)) return (n = s);
                  }
                  return (n = e);
                }
                if (((s = n), r(l, e))) return s;
                var t = a(e);
                return void 0 !== d && d(s, t)
                  ? ((l = e), s)
                  : ((l = e), (n = t));
              }
              var l,
                n,
                i = !1,
                c = void 0 === t ? null : t;
              return [
                function () {
                  return e(s());
                },
                null === c
                  ? void 0
                  : function () {
                      return e(c());
                    },
              ];
            },
            [s, t, a, d],
          ))[0],
          u[1],
        );
        return (
          i(
            function () {
              ((h.hasValue = !0), (h.value = m));
            },
            [m],
          ),
          o(m),
          m
        );
      };
    },
  },
  (e) => {
    (e.O(0, [9950, 1446, 6006, 1433, 5216, 636, 6593, 8792], () =>
      e((e.s = 49154)),
    ),
      (_N_E = e.O()));
  },
]);
