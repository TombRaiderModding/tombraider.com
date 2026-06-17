"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5216],
  {
    608: (e, t, r) => {
      function l(e) {
        sessionStorage.setItem("redirectToURLAfterAuth", e);
      }
      function a() {
        return sessionStorage.getItem("redirectToURLAfterAuth");
      }
      function n() {
        sessionStorage.removeItem("redirectToURLAfterAuth");
      }
      r.d(t, { d4: () => l, nF: () => a, pz: () => n });
    },
    3976: (e, t, r) => {
      r.a(e, async (e, l) => {
        try {
          r.d(t, { A: () => x });
          var a = r(2183),
            n = r(99435),
            s = r(95290),
            i = r(69370),
            o = r(36439),
            c = r(28898),
            d = r(18219),
            u = r(96006),
            h = r.n(u),
            m = e([n, i]);
          function x(e) {
            var t, r, l, u, m, x, g;
            let { darkMode: p, surveys: f } = e,
              { userData: b, emailData: v, completedSurveys: w } = (0, n.u)(),
              [y, j] = (0, o.useState)(!1),
              [N, k] = (0, o.useState)(0),
              C = (0, o.useMemo)(() => {
                var e;
                return null !=
                  (e =
                    null == f
                      ? void 0
                      : f.filter((e) => !w.includes(e.telemetryId)))
                  ? e
                  : [];
              }, [f, w]);
            (0, o.useEffect)(() => {
              ((v && !v.hasConfirmedEmail) || C.length > 0) && k(1);
            }, [v, null == v ? void 0 : v.hasConfirmedEmail, C]);
            let A =
              (null == b ||
              null == (l = b.accountInfo) ||
              null == (r = l.titleInfo) ||
              null == (t = r.displayName)
                ? void 0
                : t.substring(0, 2).toUpperCase()) || "";
            return (0, a.jsxs)(c.A, {
              onClickOutside: () => j(!1),
              children: [
                (0, a.jsx)("div", {
                  onClick: () => {
                    j(!y);
                  },
                  className: "inline-block cursor-pointer",
                  children: (0, a.jsx)("div", {
                    className:
                      "lg:rounded-md lg:bg-gradient-to-r lg:from-yellow-800 lg:to-yellow-500 lg:p-[2px]",
                    children: (0, a.jsxs)("div", {
                      className:
                        "lg:flex lg:items-center lg:justify-end lg:rounded-md ".concat(
                          p
                            ? "lg:bg-gradient-to-r lg:from-white/95 lg:to-white/90"
                            : "lg:bg-black",
                          " px-2 py-1",
                        ),
                      children: [
                        (0, a.jsxs)("div", {
                          className: "relative h-10 w-10",
                          children: [
                            (
                              null == b ||
                              null == (m = b.accountInfo) ||
                              null == (u = m.titleInfo)
                                ? void 0
                                : u.avatarUrl
                            )
                              ? (0, a.jsx)(h(), {
                                  src: b.accountInfo.titleInfo.avatarUrl,
                                  fill: !0,
                                  sizes: "48px",
                                  className: "rounded-full object-cover",
                                  alt: "User Avatar",
                                })
                              : (0, a.jsx)(d.A, { initials: A }),
                            N > 0 &&
                              (0, a.jsx)("div", {
                                className:
                                  "absolute bottom-0 right-0 z-10 h-4 w-4 rounded-full bg-red-500",
                              }),
                          ],
                        }),
                        (0, a.jsx)("p", {
                          className: "ml-3 hidden font-bold lg:block ".concat(
                            p ? "text-black" : "text-white",
                          ),
                          children:
                            (null == b ||
                            null == (g = b.accountInfo) ||
                            null == (x = g.titleInfo)
                              ? void 0
                              : x.displayName) || "",
                        }),
                        (0, a.jsx)(s.A, {
                          className: "ml-2 hidden h-6 w-6 lg:block ".concat(
                            p ? "text-black" : "text-white",
                          ),
                          "aria-hidden": "true",
                        }),
                      ],
                    }),
                  }),
                }),
                (0, a.jsx)(i.A, { onClose: () => j(!1), open: y }),
              ],
            });
          }
          (([n, i] = m.then ? (await m)() : m), l());
        } catch (e) {
          l(e);
        }
      });
    },
    15711: (e, t, r) => {
      r.d(t, { A: () => o });
      var l = r(2183),
        a = r(36439),
        n = r(26974),
        s = r(96006),
        i = r.n(s);
      function o(e) {
        let {
            variant: t = "normal",
            full: r = !1,
            loading: s,
            disabled: o,
            startIcon: c,
            ...d
          } = e,
          u = (0, a.useMemo)(() => {
            var t;
            return null == (t = e.children) ? void 0 : t.toString();
          }, [e.children]),
          h = (e, r, l, a, n) =>
            "normal" === t
              ? e
              : "darkBackground" === t
                ? r
                : "dark" === t
                  ? l
                  : "green" === t
                    ? n
                    : a;
        return (0, l.jsxs)("button", {
          ...d,
          type: "submit",
          id: u,
          disabled: o,
          className:
            "border-radius-8 group relative inline-flex cursor-pointer items-center justify-center overflow-hidden "
              .concat(e.className, " ")
              .concat(r && "w-full", " ")
              .concat(
                h(
                  "border-yellow-500/50 bg-transparent",
                  "border-yellow-500/50 bg-black/90",
                  "border-black/20 bg-transparent",
                  "border-red-500/80 bg-transparent",
                  "border-teal-500 bg-transparent",
                ),
                " relative z-0 rounded-lg border-2 px-6 py-2 text-base ",
              )
              .concat(
                h(
                  "text-white",
                  "text-white",
                  "text-black",
                  "text-black",
                  "text-white",
                ),
                " transition duration-300 ",
              )
              .concat(
                h(
                  "canhover:hover:text-black",
                  "canhover:hover:text-black",
                  "canhover:hover:text-white",
                  "canhover:hover:text-black",
                  "canhover:hover:text-white",
                ),
                " ",
              )
              .concat(r && "w-full"),
          children: [
            ("normal" === t || "darkBackground" === t) &&
              (0, l.jsx)("div", {
                "html-for": u,
                className:
                  "canhover:group-hover:opacity-100 pointer-events-none absolute top-0 left-0 z-10 h-full w-full overflow-hidden border-transparent opacity-0 shadow-[0_0px_15px_0px_#F1C662] transition duration-300",
                children: (0, l.jsx)(i(), {
                  src: "/images/gold-button-texture-1.jpg",
                  fill: !0,
                  className: "object-cover",
                  alt: "Gold sheen",
                  sizes: "256px",
                }),
              }),
            "green" === t &&
              (0, l.jsxs)("div", {
                "html-for": u,
                className:
                  "pointer-events-none absolute top-0 left-0 z-10 h-full w-full overflow-hidden opacity-100 transition duration-300",
                children: [
                  (0, l.jsx)(i(), {
                    src: "/images/fabric-button-texture_teal-1.jpg",
                    fill: !0,
                    className:
                      "absolute inset-0 z-10 rounded-md transition duration-300 group-hover:brightness-90",
                    alt: "Green back",
                    sizes: "256px",
                  }),
                  (0, l.jsx)("div", {
                    className:
                      "pointer-events-none absolute inset-0 h-full w-full bg-teal-500",
                  }),
                ],
              }),
            "dark" === t &&
              (0, l.jsx)("div", {
                "html-for": u,
                className:
                  "canhover:group-hover:opacity-80 pointer-events-none absolute top-0 left-0 z-10 h-full w-full border-transparent bg-gradient-to-r from-black to-black opacity-0 transition duration-300",
              }),
            "error" === t &&
              (0, l.jsx)("div", {
                "html-for": u,
                className:
                  "canhover:group-hover:opacity-100 pointer-events-none absolute top-0 left-0 z-10 h-full w-full border-transparent bg-gradient-to-r from-red-500 to-red-500 opacity-0 transition duration-300",
              }),
            c &&
              (0, l.jsx)(i(), {
                width: 16,
                height: 16,
                alt: "Link icon",
                className:
                  "canhover:group-hover:invert relative z-10 mr-3 transition duration-300",
                src: c,
              }),
            (0, l.jsx)("span", {
              className: "relative z-20",
              children: e.children,
            }),
            s &&
              (0, l.jsx)("span", {
                className: "relative z-20 ml-3",
                children: (0, l.jsx)(n.A, {}),
              }),
          ],
        });
      }
    },
    18219: (e, t, r) => {
      r.d(t, { A: () => a });
      var l = r(2183);
      function a(e) {
        let { initials: t } = e;
        return (0, l.jsx)("div", {
          className:
            "relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-blue-800 bg-blue-500",
          children: (0, l.jsx)("span", {
            className: "font-bold text-blue-800",
            children: t,
          }),
        });
      }
    },
    24135: (e, t, r) => {
      r.d(t, { A: () => a });
      var l = r(2183);
      function a(e) {
        return (0, l.jsx)("div", { className: "pointer text-white", ...e });
      }
    },
    26974: (e, t, r) => {
      r.d(t, { A: () => a });
      var l = r(2183);
      function a() {
        return (0, l.jsxs)("div", {
          role: "status",
          children: [
            (0, l.jsxs)("svg", {
              "aria-hidden": "true",
              className:
                "inline h-6 w-6 animate-spin fill-yellow-800 text-yellow-300",
              viewBox: "0 0 100 101",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, l.jsx)("path", {
                  d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                  fill: "currentColor",
                }),
                (0, l.jsx)("path", {
                  d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                  fill: "currentFill",
                }),
              ],
            }),
            (0, l.jsx)("span", {
              className: "sr-only",
              children: "Loading...",
            }),
          ],
        });
      }
    },
    27649: (e, t, r) => {
      r.a(e, async (e, l) => {
        try {
          r.d(t, { A: () => x });
          var a = r(2183),
            n = r(11677),
            s = r.n(n),
            i = r(15711),
            o = r(96006),
            c = r.n(o),
            d = r(43042),
            u = r(608),
            h = r(75109),
            m = e([h]);
          function x(e) {
            let {
              rewards: t,
              isLoggedIn: r,
              onClose: l,
              showViewRewardsButton: n = !0,
            } = e;
            (h.I5m.AVATAR, h.I5m.AVATAR);
            let o = () => {
              r || (0, u.d4)("/account/rewards");
            };
            return t && 0 !== t.length
              ? (0, a.jsxs)("div", {
                  className:
                    "fixed inset-0 z-[250] flex items-center justify-center bg-black/80 px-4",
                  children: [
                    (0, a.jsx)("div", {
                      className: "pointer-events-none absolute inset-0",
                      children: (0, a.jsx)(d.y, {
                        playAnimation: !0,
                        responsive: !0,
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "relative z-10 w-full max-w-xl rounded-2xl bg-black p-8 text-center text-white",
                      children: [
                        (0, a.jsx)("button", {
                          type: "button",
                          onClick: l,
                          "aria-label": "Close",
                          className: "absolute right-4 top-4",
                          children: (0, a.jsx)("span", {
                            className: "text-2xl leading-none",
                            children: "\xd7",
                          }),
                        }),
                        (0, a.jsx)("h2", {
                          className: "mb-2 text-2xl font-bold",
                          children: r
                            ? t.length > 1
                              ? "Rewards Unlocked!"
                              : "Reward Unlocked!"
                            : t.length > 1
                              ? "Claim your Rewards!"
                              : "Claim your Reward!",
                        }),
                        (0, a.jsx)("p", {
                          className: "mb-6 text-sm",
                          children: r ? "You've unlocked the following:" : "",
                        }),
                        (0, a.jsx)("ul", {
                          className: "mb-6 space-y-3",
                          children: t.map((e, t) => {
                            var r;
                            return (0, a.jsxs)(
                              "li",
                              {
                                className:
                                  "flex items-center gap-4 rounded-lg border border-white/20 bg-white/5 px-3 py-2",
                                children: [
                                  (0, a.jsx)("div", {
                                    className:
                                      "relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg",
                                    children: (0, a.jsx)(c(), {
                                      fill: !0,
                                      alt: e.title,
                                      src:
                                        null != (r = e.imageUrl)
                                          ? r
                                          : "/images/tomb-slide-coin.png",
                                      className: "object-cover",
                                      sizes: "64px",
                                    }),
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "flex-1 text-left",
                                    children: [
                                      (0, a.jsx)("p", {
                                        className:
                                          "text-lg font-semibold leading-none",
                                        children: e.title,
                                      }),
                                      (0, a.jsx)("span", {
                                        className:
                                          "text-xs uppercase tracking-wide opacity-70",
                                        children: (function (e) {
                                          switch (e.type) {
                                            case h.I5m.AVATAR:
                                              return "Avatar";
                                            case h.I5m.FILE_DOWNLOAD:
                                              return "Download";
                                            case h.I5m.VIDEO_LINK:
                                              return "Video Link";
                                            case h.I5m.EXTERNAL_CODE_REWARD:
                                              return "Reward";
                                          }
                                        })(e),
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              t,
                            );
                          }),
                        }),
                        r
                          ? n &&
                            (0, a.jsx)("div", {
                              className: "mb-6 text-center",
                              children: (0, a.jsx)(s(), {
                                href: "/account/rewards",
                                children: (0, a.jsx)("button", {
                                  type: "button",
                                  className:
                                    "inline-flex items-center justify-center rounded-lg border border-black/80 bg-black px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:opacity-90",
                                  children: "View Rewards",
                                }),
                              }),
                            })
                          : (0, a.jsxs)("div", {
                              className: "mb-6 text-center",
                              children: [
                                (0, a.jsx)("h3", {
                                  className: "text-xl font-semibold",
                                  children: "Join the Society of Raiders",
                                }),
                                (0, a.jsx)("p", {
                                  className: "mt-3 text-sm",
                                  children:
                                    "Sign in or create an account to claim this reward and unlock exclusive content.",
                                }),
                                (0, a.jsxs)("div", {
                                  className: "mt-6 flex justify-center gap-3",
                                  children: [
                                    (0, a.jsx)(s(), {
                                      href: "/login",
                                      onClick: o,
                                      children: (0, a.jsx)(i.A, {
                                        "aria-label": "Login",
                                        children: "Login",
                                      }),
                                    }),
                                    (0, a.jsx)(s(), {
                                      href: "/registration",
                                      onClick: o,
                                      children: (0, a.jsx)(i.A, {
                                        "aria-label": "Register",
                                        children: "Register",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                        (0, a.jsx)("button", {
                          type: "button",
                          onClick: l,
                          className:
                            "px-4 py-2 text-sm font-semibold underline",
                          children: "Close",
                        }),
                      ],
                    }),
                  ],
                })
              : null;
          }
          ((h = (m.then ? (await m)() : m)[0]), l());
        } catch (e) {
          l(e);
        }
      });
    },
    28898: (e, t, r) => {
      r.d(t, { A: () => n });
      var l = r(2183),
        a = r(36439);
      let n = (e) => {
        let { children: t, onClickOutside: r } = e,
          n = (0, a.useRef)(null);
        return (
          (0, a.useEffect)(() => {
            function e(e) {
              n.current && !n.current.contains(e.target) && r();
            }
            return (
              document.addEventListener("mousedown", e),
              () => {
                document.removeEventListener("mousedown", e);
              }
            );
          }, [r]),
          (0, l.jsx)("div", { ref: n, children: t })
        );
      };
    },
    43042: (e, t, r) => {
      r.d(t, { y: () => s });
      var l = r(2183),
        a = r(36439),
        n = r(44190);
      let s = (e) => {
        let { playAnimation: t, responsive: r } = e,
          { rive: s, RiveComponent: i } = (0, n.useRive)({
            src: "/animations/celebration_desktop.riv",
            stateMachines: "Celebration State Machine",
            autoplay: !1,
            layout: new n.Layout({
              fit: n.Fit.Cover,
              alignment: n.Alignment.Center,
            }),
            useOffscreenRenderer: !1,
          }),
          { rive: o, RiveComponent: c } = (0, n.useRive)({
            src: "/animations/celebration_mobile_upper.riv",
            stateMachines: "Celebration State Machine",
            autoplay: !1,
            layout: new n.Layout({
              fit: n.Fit.Cover,
              alignment: n.Alignment.Center,
            }),
            useOffscreenRenderer: !1,
          }),
          { rive: d, RiveComponent: u } = (0, n.useRive)({
            src: "/animations/celebration_mobile_lower.riv",
            stateMachines: "Glyphs Lower State Machine",
            autoplay: !1,
            layout: new n.Layout({
              fit: n.Fit.Cover,
              alignment: n.Alignment.Center,
            }),
            useOffscreenRenderer: !1,
          });
        return (
          (0, a.useEffect)(() => {
            t
              ? (null == s || s.play(),
                r && (null == o || o.play(), null == d || d.play()))
              : (null == s || s.pause(),
                r && (null == o || o.pause(), null == d || d.pause()));
          }, [t, r, s, o, d]),
          (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)("div", {
                className:
                  "absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 ".concat(
                    r ? "md:block" : "block",
                  ),
                children: (0, l.jsx)(i, {}),
              }),
              r &&
                (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)("div", {
                      className: "absolute inset-0 h-full w-full md:hidden",
                      children: (0, l.jsx)(c, {}),
                    }),
                    (0, l.jsx)("div", {
                      className:
                        "absolute bottom-0 left-0 h-full w-full md:hidden",
                      children: (0, l.jsx)(u, {}),
                    }),
                  ],
                }),
            ],
          })
        );
      };
    },
    69370: (e, t, r) => {
      r.a(e, async (e, l) => {
        try {
          r.d(t, { A: () => c });
          var a = r(2183),
            n = r(99435),
            s = r(11677),
            i = r.n(s),
            o = e([n]);
          function c(e) {
            let { open: t } = e,
              { logout: r } = (0, n.u)(),
              l = async () => {
                r();
              };
            return (0, a.jsx)("div", {
              className: "group relative top-2 z-40",
              children: (0, a.jsxs)("div", {
                className:
                  "absolute right-0 top-0 inline-block w-64 rounded-lg bg-white text-sm text-black shadow-lg transition-opacity duration-300 ".concat(
                    !t && "pointer-events-none",
                  ),
                style: { opacity: +!!t, transition: "all 0.2s ease" },
                children: [
                  (0, a.jsxs)("div", {
                    className: "py-2",
                    children: [
                      (0, a.jsx)(d, {
                        href: "/account",
                        children: "Dashboard",
                      }),
                      (0, a.jsx)(d, {
                        href: "/account/settings",
                        children: "Account Settings",
                      }),
                      (0, a.jsx)(d, {
                        className: "logout",
                        onClick: l,
                        noDivider: !0,
                        children: "Sign Out",
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", { "data-popper-arrow": !0 }),
                ],
              }),
            });
          }
          function d(e) {
            let {
                children: t,
                noDivider: r,
                href: l,
                onClick: n,
                className: s,
              } = e,
              o = (0, a.jsx)("div", {
                className:
                  "cursor-pointer transition duration-200 hover:bg-gray-200/50",
                children: (0, a.jsx)("div", {
                  className: "px-4",
                  children: (0, a.jsx)("div", {
                    className: "py-4 pl-2 ".concat(!r && "border-b"),
                    children: t,
                  }),
                }),
              });
            return l
              ? (0, a.jsx)(i(), {
                  className: s,
                  href: l,
                  onClick: () => (null == n ? void 0 : n()),
                  children: o,
                })
              : (0, a.jsx)("button", {
                  type: "button",
                  className: "w-full text-left ".concat(null != s ? s : ""),
                  onClick: () => (null == n ? void 0 : n()),
                  children: o,
                });
          }
          ((n = (o.then ? (await o)() : o)[0]), l());
        } catch (e) {
          l(e);
        }
      });
    },
    81409: (e, t, r) => {
      r.a(e, async (e, l) => {
        try {
          r.d(t, { A: () => d });
          var a = r(2183),
            n = r(11677),
            s = r.n(n),
            i = r(36439),
            o = r(99435),
            c = e([o]);
          function d(e) {
            let { banner: t } = e,
              [r, l] = (0, i.useState)(!1),
              { isLoggedIn: n } = (0, o.u)();
            (0, i.useEffect)(() => {
              if (!t) return;
              let e = parseInt(localStorage.getItem("lastVisit") || "0"),
                r = parseInt(localStorage.getItem("lastDismissal") || "0"),
                a = !sessionStorage.getItem("visitedThisSession"),
                s = Date.now(),
                i = 60 * t.initialDelayInHours * 6e4,
                o = 60 * t.dismissDelayInHours * 6e4;
              (l(!n && !!e && !(s - e < i) && (!r || !(s - r < o)) && !0),
                a &&
                  (localStorage.setItem("lastVisit", s.toString()),
                  sessionStorage.setItem("visitedThisSession", "true")));
            }, [t, n]);
            let c = (0, i.useCallback)(() => {
              (localStorage.setItem("lastDismissal", Date.now().toString()),
                l(!1));
            }, []);
            return (0, a.jsx)(a.Fragment, {
              children:
                t &&
                r &&
                (0, a.jsxs)("div", {
                  className:
                    "bg-trueblack/50 absolute top-full left-0 flex w-full items-center justify-center border border-x-0 border-yellow-300/30 p-1 text-white hover:bg-yellow-300/70 hover:text-black lg:mx-12 lg:w-[calc(100%-6rem)] lg:rounded-lg lg:border-x",
                  children: [
                    (0, a.jsx)(s(), {
                      href: "/registration",
                      className:
                        "mr-8 flex h-full items-center justify-center text-center font-bold",
                      children: t.message,
                    }),
                    (0, a.jsx)("button", {
                      className:
                        "group absolute top-1/2 right-2 -translate-y-1/2",
                      onClick: c,
                      children: (0, a.jsx)("svg", {
                        className:
                          "h-full transition-transform group-hover:rotate-90",
                        width: "32",
                        height: "32",
                        viewBox: "0 0 32 32",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, a.jsx)("path", {
                          className: "fill-current",
                          d: "M22.8353 22.3639L22.3638 22.8353C22.1035 23.0956 21.6814 23.0956 21.421 22.8353L15.9999 17.4141L10.5787 22.8352C10.3184 23.0956 9.89626 23.0956 9.63591 22.8352L9.1645 22.3638C8.90415 22.1035 8.90415 21.6814 9.1645 21.421L14.5857 15.9999L9.1645 10.5787C8.90415 10.3184 8.90415 9.89626 9.1645 9.63591L9.6359 9.16451C9.89625 8.90416 10.3184 8.90416 10.5787 9.16451L15.9999 14.5857L21.421 9.1645C21.6814 8.90415 22.1035 8.90415 22.3638 9.1645L22.8353 9.6359C23.0956 9.89625 23.0956 10.3184 22.8353 10.5787L17.4141 15.9999L22.8353 21.421C23.0956 21.6814 23.0956 22.1035 22.8353 22.3639Z",
                        }),
                      }),
                    }),
                  ],
                }),
            });
          }
          ((o = (c.then ? (await c)() : c)[0]), l());
        } catch (e) {
          l(e);
        }
      });
    },
    83429: (e, t, r) => {
      r.a(e, async (e, l) => {
        try {
          r.d(t, { A: () => u });
          var a = r(2183),
            n = r(96006),
            s = r.n(n),
            i = r(36439),
            o = r(94581),
            c = r(27649),
            d = e([o, c]);
          function u(e) {
            let { isOpen: t, onClose: r, isLoggedIn: l } = e,
              [n, d] = (0, i.useState)(null);
            return t
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsxs)("div", {
                      role: "dialog",
                      "aria-modal": "true",
                      "aria-label": "Code redemption overlay",
                      className:
                        "fixed inset-0 z-[200] flex items-center justify-center bg-trueblack p-4",
                      onClick: r,
                      children: [
                        (0, a.jsx)("div", {
                          className:
                            "absolute left-1/2 top-1/2 aspect-square w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 opacity-40",
                          onClick: (e) => e.stopPropagation(),
                          children: (0, a.jsx)(s(), {
                            src: "/images/calendar.webp",
                            alt: "Calendar",
                            fill: !0,
                            className: "object-cover",
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className: "relative z-30 w-full max-w-2xl",
                          onClick: (e) => e.stopPropagation(),
                          children: [
                            (0, a.jsx)(o.A, {
                              type: "overlay",
                              isLoggedIn: l,
                              onRedeemSuccess: (e) => {
                                e.items && e.items.length > 0 && d(e.items);
                              },
                            }),
                            (0, a.jsx)("button", {
                              "aria-label": "Close code redemption overlay",
                              className: "mx-auto mt-4 block underline",
                              onClick: r,
                              children: "Close",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)(c.A, {
                      rewards: n,
                      isLoggedIn: l,
                      onClose: () => d(null),
                    }),
                  ],
                })
              : null;
          }
          (([o, c] = d.then ? (await d)() : d), l());
        } catch (e) {
          l(e);
        }
      });
    },
    94581: (e, t, r) => {
      r.a(e, async (e, l) => {
        try {
          r.d(t, { A: () => o });
          var a = r(2183),
            n = r(36439),
            s = r(55109),
            i = e([s]);
          function o(e) {
            let {
                title: t = "Redeem Rewards",
                description: r = "Type in the code to redeem your rewards.",
                type: l = "dashboard",
                className: i = "",
                isLoggedIn: o = !0,
                onRedeemSuccess: c,
                onRedeemError: d,
              } = e,
              [u, h] = (0, n.useState)(""),
              [m, x] = (0, n.useState)(!1),
              [g, p] = (0, n.useState)(null),
              [f, b] = (0, n.useState)(null),
              [v, w] = (0, n.useState)(!1),
              y = async (e) => {
                e.preventDefault();
                let t = u.trim();
                if ((x(!0), !t)) return void p("Enter a code to redeem.");
                (p(null), w(!0));
                try {
                  var r, l;
                  if (o) {
                    let e = await (0, s.yM)({ code: t });
                    if ("error" in e && e.error) {
                      let t =
                        null != (r = e.error.errorMessage)
                          ? r
                          : "Unable to redeem code.";
                      (b({ type: "error", message: t }),
                        null == d || d(t, e.error));
                      return;
                    }
                    if ("data" in e && e.data) {
                      let { code: t, lastRedeemedAt: r } = e.data,
                        l = new Date(r),
                        a = 'Code "'
                          .concat(t, '" redeemed ')
                          .concat(
                            l.toLocaleString(void 0, {
                              dateStyle: "medium",
                              timeStyle: "short",
                            }),
                            ".",
                          );
                      (b({ type: "success", message: a }),
                        h(""),
                        x(!1),
                        null == c || c(e.data));
                      return;
                    }
                    (b({
                      type: "error",
                      message: "Unexpected response. Please try again.",
                    }),
                      null == d || d("Unexpected response. Please try again."));
                  } else {
                    let e = await (0, s.Qb)({ code: t });
                    if ("error" in e && e.error) {
                      let t =
                        null != (l = e.error.errorMessage)
                          ? l
                          : "Unable to preview code.";
                      (b({ type: "error", message: t }),
                        null == d || d(t, e.error));
                      return;
                    }
                    if ("data" in e && e.data) {
                      localStorage.setItem("code-pending-redemption", t);
                      let r = {
                        code: e.data.code,
                        lastRedeemedAt: Date.now(),
                        itemIds: e.data.itemIds,
                        items: e.data.items,
                      };
                      (b({
                        type: "success",
                        message: "Code found! Sign in to redeem this reward.",
                      }),
                        h(""),
                        x(!1),
                        null == c || c(r));
                      return;
                    }
                    (b({
                      type: "error",
                      message: "Unexpected response. Please try again.",
                    }),
                      null == d || d("Unexpected response. Please try again."));
                  }
                } catch (t) {
                  let e =
                    t instanceof Error
                      ? t.message
                      : o
                        ? "Unable to redeem code."
                        : "Unable to preview code.";
                  (b({ type: "error", message: e }), null == d || d(e));
                } finally {
                  w(!1);
                }
              },
              j = g ? { type: "error", message: g } : f;
            return (0, a.jsxs)("form", {
              onSubmit: y,
              className:
                "w-full rounded-xl bg-lightgray-100 px-6 py-6 shadow-sm ".concat(
                  i,
                ),
              noValidate: !0,
              children: [
                (0, a.jsxs)("div", {
                  className: "text-center sm:text-left",
                  children: [
                    (0, a.jsx)("h2", {
                      className: "text-xl font-semibold",
                      children: t,
                    }),
                    (0, a.jsx)("p", {
                      className: "mt-2 text-sm ".concat(
                        "dashboard" === l ? "text-gray-600" : "text-white",
                      ),
                      children: r,
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className:
                    "mt-5 flex flex-col gap-4 sm:flex-row sm:items-center",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "w-full sm:flex-1",
                      children: [
                        (0, a.jsx)("label", {
                          htmlFor: "rewardCode",
                          children: "Reward code",
                        }),
                        (0, a.jsx)("input", {
                          id: "rewardCode",
                          name: "rewardCode",
                          type: "text",
                          value: u,
                          onChange: (e) => {
                            let t = e.target.value;
                            (h(t),
                              m && !t.trim()
                                ? p("Enter a code to redeem.")
                                : p(null),
                              b(null));
                          },
                          onBlur: () => {
                            (m || x(!0),
                              u.trim() || p("Enter a code to redeem."));
                          },
                          autoComplete: "off",
                          placeholder: "Enter code",
                          className: "w-full rounded-lg border "
                            .concat(
                              "dashboard" === l
                                ? "border-black/10 focus:border-black "
                                : "border-white/50 focus:border-white ",
                              " bg-transparent px-4 py-3 text-base outline-none transition  ",
                            )
                            .concat(
                              (null == j ? void 0 : j.type) === "error"
                                ? "border-red-500"
                                : "",
                            ),
                        }),
                        (0, a.jsx)("p", {
                          className: "mt-1 min-h-5 text-sm ".concat(
                            (null == j ? void 0 : j.type) === "error"
                              ? "text-red-500"
                              : "text-green-700",
                          ),
                          children: j && j.message,
                        }),
                      ],
                    }),
                    (0, a.jsx)("button", {
                      type: "submit",
                      disabled: v,
                      className:
                        "mx-auto inline-flex items-center justify-center rounded-lg border ".concat(
                          "dashboard" === l
                            ? "border-black/20 hover:border-black/40 focus:border-black/40"
                            : "border-yellow-500/50 hover:border-yellow-500/70 focus:border-yellow-500/70",
                          " px-6 py-3 text-sm tracking-wide transition hover:opacity-90 disabled:cursor-not-allowed disabled:border-black/30 disabled:bg-black/30 disabled:text-white/80",
                        ),
                      children: v ? "Redeeming..." : "Redeem",
                    }),
                  ],
                }),
              ],
            });
          }
          ((s = (i.then ? (await i)() : i)[0]), l());
        } catch (e) {
          l(e);
        }
      });
    },
    95216: (e, t, r) => {
      r.a(e, async (e, l) => {
        try {
          r.d(t, { Ay: () => y, jU: () => j });
          var a = r(2183),
            n = r(99435),
            s = r(3976),
            i = r(15711),
            o = r(11677),
            c = r.n(o),
            d = r(18652),
            u = r(96006),
            h = r.n(u),
            m = r(36439),
            x = r(24135),
            g = r(608),
            p = r(81409),
            f = r(83429),
            b = r(80707),
            v = r.n(b),
            w = e([n, s, p, f]);
          function y(e) {
            let {
                darkMode: t,
                isSticky: r = !1,
                surveys: l,
                signUpBanner: o,
              } = e,
              [u, b] = (0, m.useState)(),
              [w, y] = (0, m.useState)(!1),
              N = (0, d.useRouter)(),
              k = N.query["shopify-redirect"],
              C = Array.isArray(k) ? v().first(k) : k,
              A = N.query["aspyr-code"],
              L = Array.isArray(A) ? v().first(A) : A,
              [S, R] = (0, m.useState)(2),
              [I, z] = (0, m.useState)(!1),
              { isLoggedIn: E } = (0, n.u)(),
              U = () => {
                N.pathname.includes("/news") &&
                  N.query.category &&
                  N.query.article &&
                  (0, g.d4)(window.location.href);
              },
              _ = (e) => {
                let t = new URLSearchParams({
                  ...(C ? { shopifyRedirect: C } : {}),
                  ...(L ? { code: L } : {}),
                });
                return t.size ? "".concat(e, "?").concat(t.toString()) : e;
              },
              M = e.navItems.filter(
                (e) => e.showInHeader && (!e.hideForLoggedInUsers || E),
              );
            (0, m.useEffect)(() => {
              let e = () => {
                window.scrollY < 40 ? R(2) : R(0);
              };
              return (
                e(),
                document.addEventListener("scroll", e),
                () => {
                  window.removeEventListener("scroll", e);
                }
              );
            }, [N]);
            let D = () =>
              M.map((e) =>
                (0, a.jsx)(
                  j,
                  {
                    href: e.link,
                    title: e.name,
                    darkMode: t,
                    selected: u === e.name,
                  },
                  e.name,
                ),
              );
            (0, m.useEffect)(() => {
              let e = M.find((e) => e.link === N.pathname);
              (null != e || (e = M.find((e) => e.rootLink === N.pathname)),
                e ||
                  (e = [...M]
                    .sort((e, t) => t.rootLink.length - e.rootLink.length)
                    .find(
                      (e) =>
                        "/" !== e.rootLink &&
                        "" !== e.rootLink &&
                        N.pathname.startsWith(e.rootLink),
                    )),
                e ? b(e.name) : b("Authentication"));
            }, [N.pathname]);
            let F = (e) => {
              let t = [],
                r = e ? x.A : i.A;
              return (
                "/login" !== N.pathname &&
                  t.push(
                    (0, a.jsx)(
                      c(),
                      {
                        onClick: U,
                        href: _("/login"),
                        children: (0, a.jsx)(r, { children: "Login" }),
                      },
                      "1",
                    ),
                  ),
                "/registration" !== N.pathname &&
                  t.push(
                    (0, a.jsx)(
                      c(),
                      {
                        onClick: U,
                        className: "account_register_cta",
                        href: _("/registration"),
                        children: (0, a.jsx)(r, { children: "Register" }),
                      },
                      "2",
                    ),
                  ),
                t
              );
            };
            return (0, a.jsxs)("header", {
              className: "top-0 z-[100] w-full "
                .concat("Authentication" === u && "lg:w-screen", " ")
                .concat(
                  (() => {
                    let e =
                      "/login" === N.pathname || "/registration" === N.pathname;
                    return 2 === S
                      ? e
                        ? "bg-trueblack lg:bg-transparent lg:bg-gradient-to-b lg:from-trueblack/90"
                        : "lg:bg-gradient-to-b lg:from-trueblack/90"
                      : "bg-trueblack";
                  })(),
                  " ",
                )
                .concat(r ? "sticky" : "fixed", " z-50"),
              style: { transition: "background-color 0.3s ease" },
              children: [
                (0, a.jsxs)("nav", {
                  className:
                    "hidden w-full grid-cols-3 items-center justify-between p-4 lg:grid lg:px-12",
                  "aria-label": "Global",
                  children: [
                    (0, a.jsx)("div", {
                      className: "z-10 col-span-1 flex gap-x-4",
                      children: (0, a.jsx)(c(), {
                        href: "/",
                        children: (0, a.jsx)(h(), {
                          className: "w-24",
                          priority: !0,
                          src: "/images/tombraider-header-logo.webp",
                          alt: "Tomb Raider Logo",
                          width: 512,
                          height: 240,
                        }),
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "col-span-1 flex justify-center gap-x-4",
                      children: D(),
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "col-span-1 flex items-center justify-end gap-x-4",
                      children: E
                        ? (0, a.jsx)(s.A, { surveys: l, darkMode: t })
                        : F(),
                    }),
                  ],
                }),
                (0, a.jsxs)("nav", {
                  className:
                    "relative z-40 grid w-full grid-cols-3 items-center justify-between px-3 py-4 lg:hidden",
                  "aria-label": "Global",
                  children: [
                    (0, a.jsx)("div", {
                      className: "col-span-1 flex justify-start gap-x-4",
                      children: (0, a.jsx)(h(), {
                        width: 48,
                        height: 48,
                        alt: "hamburger menu",
                        className: "cursor-pointer",
                        src: w ? "/images/close.svg" : "/images/hamburger.svg",
                        onClick: () => y(!w),
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "col-span-1 flex justify-center",
                      children: (0, a.jsx)(c(), {
                        href: "/",
                        children: (0, a.jsx)(h(), {
                          className: "relative h-10 w-auto",
                          priority: !0,
                          src: "/images/tombraider-header-logo.webp",
                          alt: "Tomb Raider Logo",
                          width: 512,
                          height: 240,
                        }),
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "col-span-1 flex items-center justify-end gap-4",
                      children: E ? (0, a.jsx)(s.A, { surveys: l }) : F(!0),
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className:
                    "fixed top-0 left-0 z-30 w-full overflow-hidden bg-black/95 transition duration-300 lg:hidden",
                  style: {
                    height: w ? "100vh" : "0",
                    transition: "height 0.3s ease",
                  },
                  children: (0, a.jsx)("div", {
                    className: "flex flex-col items-center gap-y-8 pt-32",
                    children: D(),
                  }),
                }),
                (0, a.jsx)(p.A, { banner: o }),
                "/account" !== N.pathname &&
                  "/login" !== N.pathname &&
                  "/registration" !== N.pathname &&
                  (0, a.jsx)("div", {
                    className: "fixed right-0 bottom-8 z-20",
                    style: { writingMode: "sideways-lr" },
                    children: (0, a.jsx)("button", {
                      className:
                        "rounded-l-lg bg-yellow-500 px-1 py-3 font-bold text-black hover:bg-yellow-300",
                      onClick: () => z(!0),
                      children: "Redeem Codes",
                    }),
                  }),
                (0, a.jsx)(f.A, {
                  isOpen: I,
                  onClose: () => z(!1),
                  isLoggedIn: E,
                }),
              ],
            });
          }
          function j(e) {
            let { selected: t, title: r, href: l, darkMode: n } = e;
            return (0, a.jsxs)(c(), {
              href: l,
              className:
                "relative flex flex-col text-4xl whitespace-nowrap transition duration-300 lg:w-24 lg:text-lg",
              children: [
                (0, a.jsx)("p", {
                  className: "w-full text-center ".concat(
                    n
                      ? "text-black"
                      : t
                        ? "text-white"
                        : "text-white/70 hover:text-white",
                  ),
                  style: { transition: "all 0.3s ease" },
                  children: r,
                }),
                t &&
                  (0, a.jsx)(h(), {
                    src: "/images/header-highlight.svg",
                    alt: "highlight",
                    width: 100,
                    height: 5,
                    className: "h-auto w-full",
                  }),
              ],
            });
          }
          (([n, s, p, f] = w.then ? (await w)() : w), l());
        } catch (e) {
          l(e);
        }
      });
    },
  },
]);
