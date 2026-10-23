(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [871],
  {
    11193: (e, s, t) => {
      "use strict";
      t.a(e, async (e, a) => {
        try {
          (t.r(s), t.d(s, { __N_SSG: () => p, default: () => y }));
          var r = t(2183),
            n = t(23855),
            l = t(14402),
            i = t(91300),
            c = t(35877),
            o = t(64171),
            d = t(39188),
            u = t(80254),
            h = t(61653),
            m = t(23988),
            x = t(9751),
            g = t(83737),
            f = t(36439),
            v = e([n, i, c, x, g]);
          [n, i, c, x, g] = v.then ? (await v)() : v;
          var p = !0;
          function y({ navItems: e, surveys: s }) {
            let [t, a] = (0, f.useState)(!1),
              [v, p] = (0, f.useState)(!1),
              {
                deleteAccount: j,
                mailingListStatus: b,
                setMailingListStatus: w,
              } = (0, x.u)(),
              [N, k] = (0, f.useState)(!1),
              [S, A] = (0, f.useState)(!1),
              { userData: C } = (0, x.u)(),
              { addAlert: D } = (0, m.Z)();
            (0, f.useEffect)(() => {
              A(b);
            }, [b]);
            let E = async () => {
                let e = C?.accountInfo?.email;
                if (!e)
                  return void D({
                    title: "Missing Email",
                    children: "Please provide an email or reload the page.",
                  });
                p(!0);
                let s = await g.iC({ email: e });
                (p(!1),
                  s.error ||
                    D({
                      title: "Email sent!",
                      children:
                        "Please check your email for further instructions.",
                    }));
              },
              _ = async () => {
                k(!0);
                let e = await g.q7({ isUserOnMailingList: S });
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
                    (0, r.jsx)(n.A, { surveys: s, navItems: e }),
                    (0, r.jsx)(h.A, {}),
                    (0, r.jsx)(l.A, {}),
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
                                    loading: v,
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
                                    onClick: () => a(!0),
                                    variant: "error",
                                    children: "Delete My Account",
                                  }),
                                }),
                              ],
                            }),
                            (0, r.jsx)(u.A, {
                              open: t,
                              onClose: () => a(!1),
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
    14402: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => d });
      var a = t(2183),
        r = t(15013),
        n = t.n(r),
        l = t(46728),
        i = t.n(l),
        c = t(31153),
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
      function u({ active: e, src: s, href: t }) {
        return (0, a.jsx)(i(), {
          href: t,
          children: (0, a.jsx)(n(), {
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
            n = t(36439),
            l = t(31996),
            i = t(49980),
            c = t(15013),
            o = t.n(c),
            d = t(46728),
            u = t.n(d),
            h = t(9751),
            m = e([l, i, h]);
          function x({ navItems: e, surveys: s }) {
            let { isLoggedIn: t } = (0, h.u)(),
              [a, c] = (0, n.useState)(!1),
              d = () =>
                e
                  .filter(
                    (e) => e.showInHeader && (!e.hideForLoggedInUsers || t),
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
                        children: d(),
                      }),
                      (0, r.jsx)(o(), {
                        width: 48,
                        height: 48,
                        alt: "hamburger menu",
                        className:
                          "relative z-20 cursor-pointer invert lg:hidden",
                        src: a ? "/images/close.svg" : "/images/hamburger.svg",
                        onClick: () => c(!a),
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
                      (0, r.jsx)(l.A, { surveys: s, darkMode: !0 }),
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
                    children: d(),
                  }),
                }),
              ],
            });
          }
          (([l, i, h] = m.then ? (await m)() : m), a());
        } catch (e) {
          a(e);
        }
      });
    },
    28872: (e, s, t) => {
      "use strict";
      e.exports = t(94528);
    },
    35877: (e, s, t) => {
      "use strict";
      t.a(e, async (e, a) => {
        try {
          t.d(s, { A: () => c });
          var r = t(31153),
            n = t(36439),
            l = t(9751),
            i = e([l]);
          function c(e) {
            let { children: s } = e,
              t = (0, r.useRouter)(),
              { userData: a, cacheLoaded: i, loading: c } = (0, l.u)();
            return ((0, n.useEffect)(() => {
              c || !i || a || t.replace("/");
            }, [a, i, c, t]),
            a && i)
              ? s
              : null;
          }
          ((l = (i.then ? (await i)() : i)[0]), a());
        } catch (e) {
          a(e);
        }
      });
    },
    39188: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => r });
      var a = t(2183);
      function r(e) {
        let {
          children: s,
          variant: t = "normal",
          value: r,
          onChange: n,
          id: l,
        } = e;
        return (0, a.jsx)("div", {
          className: "relative",
          children: (0, a.jsxs)("label", {
            className: "main flex cursor-pointer items-center",
            children: [
              (0, a.jsx)("p", { className: "ml-8 select-none", children: s }),
              (0, a.jsx)("input", {
                id: l,
                checked: r,
                onChange: (e) => n(e.target.checked),
                type: "checkbox",
              }),
              (0, a.jsx)("span", {
                className: `geekmark backdrop-blur outline-none ${"normal" === t ? "geekmark-light border-2 border-gray-300/20 bg-white/20 duration-200 hover:border-white/50 focus:border-white" : "geekmark-dark border-2 border-gray-500/30 bg-gray-800/10 duration-200 hover:border-gray-800/60 focus:border-gray-800/80"}`,
              }),
            ],
          }),
        });
      }
      t(36439);
    },
    61653: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => d });
      var a = t(2183),
        r = t(15013),
        n = t.n(r),
        l = t(46728),
        i = t.n(l),
        c = t(31153),
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
                children: (0, a.jsx)(n(), {
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
        let { src: s, children: t, selected: r, href: l } = e;
        return (0, a.jsx)(i(), {
          href: l,
          children: (0, a.jsxs)("div", {
            className: `flex w-32 cursor-pointer font-bold ${r ? "opacity-100" : "opacity-50"}`,
            children: [
              (0, a.jsx)(n(), {
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
    80254: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => c });
      var a = t(2183),
        r = t(36439),
        n = t(85414),
        l = t(91593),
        i = t(64171);
      function c(e) {
        let { open: s, onClose: t, onDelete: c } = e,
          o = (0, r.useRef)(null);
        return (0, a.jsx)(n.Transition.Root, {
          show: s,
          as: r.Fragment,
          children: (0, a.jsxs)(n.Dialog, {
            as: "div",
            className: "relative z-10",
            initialFocus: o,
            onClose: t,
            children: [
              (0, a.jsx)(n.Transition.Child, {
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
                  children: (0, a.jsx)(n.Transition.Child, {
                    as: r.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom:
                      "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                    enterTo: "opacity-100 translate-y-0 sm:scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
                    leaveTo:
                      "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                    children: (0, a.jsxs)(n.Dialog.Panel, {
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
                                children: (0, a.jsx)(l.A, {
                                  className: "h-6 w-6 text-red-500",
                                  "aria-hidden": "true",
                                }),
                              }),
                              (0, a.jsxs)("div", {
                                className:
                                  "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",
                                children: [
                                  (0, a.jsx)(n.Dialog.Title, {
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
    82675: (e, s, t) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/account/settings",
        function () {
          return t(11193);
        },
      ]);
    },
    91300: (e, s, t) => {
      "use strict";
      t.a(e, async (e, a) => {
        try {
          t.d(s, { A: () => h });
          var r = t(2183),
            n = t(15013),
            l = t.n(n),
            i = t(46728),
            c = t.n(i),
            o = t(9751),
            d = t(36439),
            u = e([o]);
          function h({ title: e, surveys: s }) {
            let {
                userData: t,
                emailData: a,
                resendVerification: n,
                completedSurveys: i,
              } = (0, o.u)(),
              u = async () => {
                n();
              },
              m = (0, d.useMemo)(
                () => s?.filter((e) => !i.includes(e.telemetryId)) ?? [],
                [s, i],
              );
            return (0, r.jsxs)("div", {
              className: "flex flex-wrap items-center gap-x-8 gap-y-4",
              children: [
                (0, r.jsx)("div", {
                  className: "relative h-[108px] w-[108px]",
                  children: (0, r.jsx)(l(), {
                    fill: !0,
                    className: `rounded-full object-cover ${!t?.accountInfo?.titleInfo?.avatarUrl && "bg-gray-500 p-4"}`,
                    alt: "welcome-image",
                    sizes: "216px",
                    src:
                      t?.accountInfo?.titleInfo?.avatarUrl ||
                      "/images/question_mark.svg",
                  }),
                }),
                (0, r.jsxs)("div", {
                  children: [
                    (0, r.jsx)("p", {
                      className: "mb-4 text-5xl",
                      children: e,
                    }),
                    a &&
                      !a.hasConfirmedEmail &&
                      (0, r.jsxs)("p", {
                        className: "mb-4 text-sm",
                        children: [
                          "You're almost done! Please check your email to verify your account.",
                          " ",
                          (0, r.jsx)("button", {
                            className: "font-bold underline hover:no-underline",
                            onClick: u,
                            type: "button",
                            children: "Resend verification email",
                          }),
                        ],
                      }),
                    m.length > 0 &&
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
        n = a.useSyncExternalStore,
        l = a.useRef,
        i = a.useEffect,
        c = a.useMemo,
        o = a.useDebugValue;
      s.useSyncExternalStoreWithSelector = function (e, s, t, a, d) {
        var u = l(null);
        if (null === u.current) {
          var h = { hasValue: !1, value: null };
          u.current = h;
        } else h = u.current;
        var m = n(
          e,
          (u = c(
            function () {
              function e(e) {
                if (!i) {
                  if (
                    ((i = !0), (n = e), (e = a(e)), void 0 !== d && h.hasValue)
                  ) {
                    var s = h.value;
                    if (d(s, e)) return (l = s);
                  }
                  return (l = e);
                }
                if (((s = l), r(n, e))) return s;
                var t = a(e);
                return void 0 !== d && d(s, t)
                  ? ((n = e), s)
                  : ((n = e), (l = t));
              }
              var n,
                l,
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
    (e.O(0, [9950, 1446, 5013, 2696, 9980, 636, 6593, 8792], () =>
      e((e.s = 82675)),
    ),
      (_N_E = e.O()));
  },
]);
