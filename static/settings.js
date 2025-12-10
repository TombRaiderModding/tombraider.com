(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [718],
  {
    43545: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/account/settings",
        function () {
          return s(64075);
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
          var r = s(97458),
            n = s(52983),
            i = s(58738),
            l = s(87249),
            c = s(47681),
            o = s.n(c),
            d = s(10821),
            u = s.n(d),
            h = s(2300),
            m = e([i, l, h]);
          function AccountHeader(e) {
            let { navItems: t, surveys: s } = e,
              { isLoggedIn: a } = (0, h.S)(),
              [c, d] = (0, n.useState)(!1),
              getTabs = () =>
                t
                  .filter(
                    (e) => e.showInHeader && (!e.hideForLoggedInUsers || a),
                  )
                  .map((e) =>
                    (0, r.jsx)(l.Ax, {
                      href: e.link,
                      title: e.name,
                      darkMode: !0,
                    }),
                  );
            return (0, r.jsxs)("header", {
              className:
                "lg:w-[calc(100% - 256px] relative sticky left-0 top-0 z-[20]  bg-white px-12 pt-6 lg:ml-[256px]",
              children: [
                (0, r.jsx)("nav", {
                  "aria-label": "Global",
                  children: (0, r.jsxs)("div", {
                    className: " flex w-full justify-between",
                    children: [
                      (0, r.jsx)("div", {
                        className: "hidden items-center gap-x-4 lg:flex",
                        children: getTabs(),
                      }),
                      (0, r.jsx)(o(), {
                        width: 48,
                        height: 48,
                        alt: "hamburger menu",
                        className:
                          "relative z-20 cursor-pointer invert filter lg:hidden",
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
                      (0, r.jsx)(i.Z, { surveys: s, darkMode: !0 }),
                    ],
                  }),
                }),
                (0, r.jsx)("div", {
                  className: " mt-4 h-[1px] w-full bg-gray-300/50",
                }),
                (0, r.jsx)("div", {
                  className:
                    "fixed left-0 top-0 z-10  w-full    overflow-hidden bg-gray-100 bg-opacity-90 transition duration-300 lg:hidden",
                  style: {
                    height: c ? "100vh" : "0",
                    transition: "height 0.3s ease",
                  },
                  children: (0, r.jsx)("div", {
                    className: "flex flex-col items-center gap-y-8 pt-32",
                    children: getTabs(),
                  }),
                }),
              ],
            });
          }
          (([i, l, h] = m.then ? (await m)() : m), a());
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
        r = s(47681),
        n = s.n(r),
        i = s(10821),
        l = s.n(i),
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
        let { active: t, src: s, href: r } = e;
        return (0, a.jsx)(l(), {
          href: r,
          children: (0, a.jsx)(n(), {
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
          var r = s(97458),
            n = s(47681),
            i = s.n(n),
            l = s(57314),
            c = s(2300),
            o = s(52983),
            d = e([c]);
          function AccountWelcome(e) {
            var t, s, a, n;
            let { title: d, surveys: u } = e,
              {
                userData: h,
                emailData: m,
                resendVerification: x,
                completedSurveys: f,
              } = (0, c.S)(),
              handleResend = async () => {
                x();
              },
              g = (0, o.useMemo)(() => {
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
            return (0, r.jsxs)("div", {
              className: "flex flex-wrap items-center gap-x-8 gap-y-4",
              children: [
                (0, r.jsx)("div", {
                  className: "relative h-[108px] w-[108px]",
                  children: (0, r.jsx)(i(), {
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
                        : null === (n = h.accountInfo) || void 0 === n
                          ? void 0
                          : null === (a = n.titleInfo) || void 0 === a
                            ? void 0
                            : a.avatarUrl) || "/images/question_mark.svg",
                  }),
                }),
                (0, r.jsxs)("div", {
                  children: [
                    (0, r.jsx)("p", {
                      className: "mb-4 text-5xl",
                      children: d,
                    }),
                    m &&
                      !m.hasConfirmedEmail &&
                      (0, r.jsxs)("p", {
                        className: "mb-4 text-sm",
                        children: [
                          "You're almost done! Please check your email to verify your account.",
                          " ",
                          (0, r.jsx)(l.Z, {
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
                    g.length > 0 &&
                      (0, r.jsxs)("p", {
                        className: "text-sm",
                        children: [
                          (0, r.jsx)("span", {
                            className: "text-red-500",
                            children: "You have surveys to complete! ",
                          }),
                          (0, r.jsx)(l.Z, {
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
          var r = s(93656),
            n = s(52983),
            i = s(2300),
            l = e([i]);
          function AuthenticatedWrapper(e) {
            let { children: t } = e,
              s = (0, r.useRouter)(),
              { userData: a, cacheLoaded: l, loading: c } = (0, i.S)();
            return ((0, n.useEffect)(() => {
              c || !l || a || s.replace("/");
            }, [a, l, c, s]),
            a && l)
              ? t
              : null;
          }
          ((i = (l.then ? (await l)() : l)[0]), a());
        } catch (e) {
          a(e);
        }
      });
    },
    13788: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return Checkbox;
        },
      });
      var a = s(97458);
      function Checkbox(e) {
        let {
          children: t,
          variant: s = "normal",
          value: r,
          onChange: n,
          id: i,
        } = e;
        return (0, a.jsx)("div", {
          className: "relative",
          children: (0, a.jsxs)("label", {
            className: "main  flex cursor-pointer items-center",
            children: [
              (0, a.jsx)("p", { className: "ml-8 select-none", children: t }),
              (0, a.jsx)("input", {
                id: i,
                checked: r,
                onChange: (e) => n(e.target.checked),
                type: "checkbox",
              }),
              (0, a.jsx)("span", {
                className: "geekmark outline-none backdrop-blur ".concat(
                  "normal" === s
                    ? "geekmark-light border-2 border-gray-300 border-opacity-20 bg-white bg-opacity-20 duration-200 hover:border-white hover:border-opacity-50 focus:border-white focus:border-opacity-100"
                    : "geekmark-dark border-2 border-gray-500 border-opacity-30 bg-gray-800 bg-opacity-10 duration-200 hover:border-gray-800 hover:border-opacity-60 focus:border-gray-800 focus:border-opacity-80",
                ),
              }),
            ],
          }),
        });
      }
      s(52983);
    },
    57314: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return Link;
        },
      });
      var a = s(97458);
      function Link(e) {
        let { defaultUnderlined: t, bold: s, ...r } = e;
        return (0, a.jsx)("a", {
          className: ""
            .concat(t ? "underline hover:no-underline" : "hover:underline", " ")
            .concat(s && "font-bold"),
          ...r,
          children: e.children,
        });
      }
    },
    46619: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return Modal;
        },
      });
      var a = s(97458),
        r = s(52983),
        n = s(16719),
        i = s(16383),
        l = s(3903),
        c = s(75443);
      function Modal(e) {
        let { open: t, onClose: s, onDelete: o } = e,
          d = (0, r.useRef)(null);
        return (0, a.jsx)(n.u.Root, {
          show: t,
          as: r.Fragment,
          children: (0, a.jsxs)(i.V, {
            as: "div",
            className: "relative z-10",
            initialFocus: d,
            onClose: s,
            children: [
              (0, a.jsx)(n.u.Child, {
                as: r.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: (0, a.jsx)("div", {
                  className:
                    "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                }),
              }),
              (0, a.jsx)("div", {
                className: "fixed inset-0 z-10 overflow-y-auto",
                children: (0, a.jsx)("div", {
                  className:
                    "flex min-h-full items-center justify-center p-4 text-center sm:p-0",
                  children: (0, a.jsx)(n.u.Child, {
                    as: r.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom:
                      "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                    enterTo: "opacity-100 translate-y-0 sm:scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
                    leaveTo:
                      "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                    children: (0, a.jsxs)(i.V.Panel, {
                      className:
                        "relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg",
                      children: [
                        (0, a.jsx)("div", {
                          className: "bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4",
                          children: (0, a.jsxs)("div", {
                            className: "sm:flex sm:items-start",
                            children: [
                              (0, a.jsx)("div", {
                                className:
                                  "mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-500/20 sm:mx-0 sm:h-10 sm:w-10",
                                children: (0, a.jsx)(l.Z, {
                                  className: "h-6 w-6 text-red-500",
                                  "aria-hidden": "true",
                                }),
                              }),
                              (0, a.jsxs)("div", {
                                className:
                                  "mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left",
                                children: [
                                  (0, a.jsx)(i.V.Title, {
                                    as: "h3",
                                    className:
                                      "text-base font-semibold leading-6 text-gray-900",
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
                            "flex flex-row-reverse justify-center bg-gray-50 px-4 py-3 ",
                          children: [
                            (0, a.jsx)(c.Z, {
                              className: "account_delete ml-4",
                              type: "button",
                              variant: "error",
                              onClick: o,
                              children: "Delete",
                            }),
                            (0, a.jsx)(c.Z, {
                              type: "button",
                              variant: "dark",
                              onClick: s,
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
    33043: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return Sidebar;
        },
      });
      var a = s(97458),
        r = s(47681),
        n = s.n(r),
        i = s(10821),
        l = s.n(i),
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
              (0, a.jsx)(l(), {
                href: "/",
                children: (0, a.jsx)(n(), {
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
        let { src: t, children: s, selected: r, href: i } = e;
        return (0, a.jsx)(l(), {
          href: i,
          children: (0, a.jsxs)("div", {
            className: "flex w-32 cursor-pointer font-bold ".concat(
              r ? "opacity-100" : "opacity-50",
            ),
            children: [
              (0, a.jsx)(n(), {
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
    64075: function (e, t, s) {
      "use strict";
      s.a(e, async function (e, a) {
        try {
          (s.r(t),
            s.d(t, {
              __N_SSG: function () {
                return p;
              },
              default: function () {
                return Settings;
              },
            }));
          var r = s(97458),
            n = s(27233),
            i = s(6728),
            l = s(96162),
            c = s(95611),
            o = s(75443),
            d = s(13788),
            u = s(46619),
            h = s(33043),
            m = s(77765),
            x = s(2300),
            f = s(82262),
            g = s(52983),
            v = e([n, l, c, x, f]);
          [n, l, c, x, f] = v.then ? (await v)() : v;
          var p = !0;
          function Settings(e) {
            let { navItems: t, surveys: s } = e,
              [a, v] = (0, g.useState)(!1),
              [p, y] = (0, g.useState)(!1),
              {
                deleteAccount: b,
                mailingListStatus: j,
                setMailingListStatus: w,
              } = (0, x.S)(),
              [N, k] = (0, g.useState)(!1),
              [S, C] = (0, g.useState)(!1),
              { userData: Z } = (0, x.S)(),
              { addAlert: I } = (0, m.Z)();
            (0, g.useEffect)(() => {
              C(j);
            }, [j]);
            let handleResetPassword = async () => {
                var e;
                let t =
                  null == Z
                    ? void 0
                    : null === (e = Z.accountInfo) || void 0 === e
                      ? void 0
                      : e.email;
                if (!t) {
                  I({
                    title: "Missing Email",
                    children: "Please provide an email or reload the page.",
                  });
                  return;
                }
                y(!0);
                let s = await f.BL({ email: t });
                (y(!1),
                  s.error ||
                    I({
                      title: "Email sent!",
                      children:
                        "Please check your email for further instructions.",
                    }));
              },
              handleChangeMailingListStatus = async () => {
                k(!0);
                let e = await f.US({ isUserOnMailingList: S });
                (k(!1),
                  e.error ||
                    (w(S),
                    I({
                      title: "Mailing List Status Changed",
                      children: S
                        ? "You will now receive promotional emails from us."
                        : "You will no longer receieve promotional emails from us.",
                    })));
              },
              handleDelete = async () => {
                b();
              };
            return (0, r.jsx)(c.Z, {
              children: (0, r.jsx)("main", {
                className: "min-h-screen overflow-hidden bg-white text-black",
                children: (0, r.jsxs)("div", {
                  className: "h-screen w-full overflow-x-hidden ",
                  children: [
                    (0, r.jsx)(n.Z, { surveys: s, navItems: t }),
                    (0, r.jsx)(h.Z, {}),
                    (0, r.jsx)(i.Z, {}),
                    (0, r.jsxs)("div", {
                      className: "px-6 py-12 lg:ml-[256px] lg:px-12",
                      children: [
                        (0, r.jsx)(l.Z, { title: "Account Settings" }),
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
                                  children: (0, r.jsx)(o.Z, {
                                    loading: p,
                                    onClick: handleResetPassword,
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
                                (0, r.jsx)(d.Z, {
                                  variant: "dark",
                                  value: S,
                                  onChange: (e) => {
                                    N || C(e);
                                  },
                                  children:
                                    "I agree to receive news, updates, and promotions by email from Crystal Dynamics.",
                                }),
                                (0, r.jsx)("div", {
                                  children: (0, r.jsx)(o.Z, {
                                    loading: N,
                                    onClick: handleChangeMailingListStatus,
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
                                  children: (0, r.jsx)(o.Z, {
                                    onClick: () => v(!0),
                                    variant: "error",
                                    children: "Delete My Account",
                                  }),
                                }),
                              ],
                            }),
                            (0, r.jsx)(u.Z, {
                              open: a,
                              onClose: () => v(!1),
                              onDelete: handleDelete,
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
  },
  function (e) {
    (e.O(0, [46, 681, 882, 542, 926, 249, 774, 888, 179], function () {
      return e((e.s = 43545));
    }),
      (_N_E = e.O()));
  },
]);
