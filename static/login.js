(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [459],
  {
    94125: function (e, r, o) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/login",
        function () {
          return o(22022);
        },
      ]);
    },
    8835: function (e, r, o) {
      "use strict";
      o.a(e, async function (e, a) {
        try {
          var l = o(97458),
            t = o(52983),
            n = o(86848),
            s = o(81581),
            i = o(80879),
            c = o(20102),
            d = o(24148),
            u = o(96061),
            g = o(58594),
            h = o(21699),
            f = o(14322),
            m = o(28683),
            w = o(56042),
            p = e([i, c, d, u]);
          [i, c, d, u] = p.then ? (await p)() : p;
          let v =
            "We couldn't find an account for that email. Please sign up first.";
          ((r.Z = (e) => {
            var r, o;
            let { websiteSingleton: a, navItems: p, registrationPage: x } = e,
              {
                handleSubmit: y,
                control: b,
                setError: j,
                clearErrors: k,
                formState: { errors: C },
              } = (0, n.cI)({
                resolver: (0, s.F)(u.vNx),
                defaultValues: { email: "", password: "" },
              }),
              {
                setUserData: N,
                fetchUserInfo: P,
                requiresIdentitySetup: _,
              } = (0, c.S)(),
              L = (0, f.useRouter)(),
              [S, F] = (0, t.useState)(!1),
              [E, R] = (0, t.useState)(!1),
              [G, I] = (0, t.useState)(!1),
              [T, M] = (0, t.useState)(!1),
              [V, Z] = (0, t.useState)(!1),
              H = ((r = "1881486789441765"), void 0 !== r) ? r : "",
              A = ((o =
                "913283481016-rge7l6npr5tpnce5gd5fb28kmf2v33tu.apps.googleusercontent.com"),
              void 0 !== o)
                ? o
                : "",
              z = (0, t.useRef)(null),
              B = (0, t.useRef)(null),
              O = (0, t.useRef)(!1),
              U = (0, t.useRef)(null),
              W = (0, t.useRef)(!1),
              q = (0, t.useRef)(null),
              D = (0, t.useCallback)(() => {
                U.current &&
                  (window.removeEventListener("focus", U.current),
                  (U.current = null));
              }, []),
              Q = (0, t.useCallback)(() => {
                D();
                let handler = () => {
                  O.current &&
                    ((O.current = !1),
                    M(!1),
                    j("root", {
                      message: "Google login was cancelled. Please try again.",
                    }));
                };
                ((U.current = handler),
                  window.addEventListener("focus", handler, { once: !0 }));
              }, [D, j]),
              X = (0, t.useCallback)(() => {
                q.current &&
                  (window.removeEventListener("focus", q.current),
                  (q.current = null));
              }, []),
              Y = (0, t.useCallback)(() => {
                X();
                let handler = () => {
                  W.current &&
                    ((W.current = !1),
                    R(!1),
                    j("root", {
                      message:
                        "Facebook login was cancelled. Please try again.",
                    }));
                };
                ((q.current = handler),
                  window.addEventListener("focus", handler, { once: !0 }));
              }, [X, j]),
              handleLogin = async (e) => {
                F(!0);
                try {
                  let a = await d.zB(e);
                  if (a.data) {
                    var r, o;
                    let e = await d.fn();
                    (N(e.data || null),
                      (0, g.sendGTMEvent)({
                        event: "login",
                        value:
                          null === (o = e.data) || void 0 === o
                            ? void 0
                            : null === (r = o.accountInfo) || void 0 === r
                              ? void 0
                              : r.playFabId,
                      }),
                      await P());
                  } else if (a.error)
                    switch (a.error.error) {
                      case "InvalidEmailOrPassword":
                        (j("email", { message: " " }),
                          j("password", { message: " " }),
                          j("root", { message: a.error.errorMessage }));
                        break;
                      case "AccountNotFound":
                        (j("email", { message: v }), j("root", { message: v }));
                        break;
                      default:
                        j("root", { message: a.error.errorMessage });
                    }
                } catch (e) {
                  j("root", { message: "An unknown error has occured." });
                }
                F(!1);
              },
              $ = (0, t.useCallback)(
                async (e) => {
                  if (((O.current = !1), D(), e.error || !e.code)) {
                    (M(!1),
                      j("root", {
                        message:
                          e.error_description ||
                          e.error ||
                          "Google login was cancelled. Please try again.",
                      }));
                    return;
                  }
                  try {
                    var r, o, a, l;
                    let t = await d.Zf({ ServerAuthCode: e.code });
                    if (t.data) {
                      let e = await d.fn();
                      (N(e.data || null),
                        (0, g.sendGTMEvent)({
                          event: "login",
                          value:
                            null === (l = e.data) || void 0 === l
                              ? void 0
                              : null === (a = l.accountInfo) || void 0 === a
                                ? void 0
                                : a.playFabId,
                        }),
                        await P(),
                        M(!1));
                      return;
                    }
                    if (
                      (null === (r = t.error) || void 0 === r
                        ? void 0
                        : r.error) === "AccountNotFound"
                    ) {
                      (j("root", { message: v }), M(!1));
                      return;
                    }
                    let n =
                      (null === (o = t.error) || void 0 === o
                        ? void 0
                        : o.errorMessage) ||
                      "Unable to log in with Google. Please try again.";
                    j("root", { message: n });
                  } catch (e) {
                    (console.error(e),
                      j("root", {
                        message: "Google login failed. Please try again.",
                      }));
                  }
                  M(!1);
                },
                [P, j, N],
              ),
              J = (0, t.useCallback)(
                async (e) => {
                  var r, o, a, l, t;
                  if (
                    ((W.current = !1),
                    X(),
                    !(null === (r = e.authResponse) || void 0 === r
                      ? void 0
                      : r.accessToken))
                  ) {
                    (R(!1),
                      j("root", {
                        message:
                          "Facebook login was cancelled. Please try again.",
                      }));
                    return;
                  }
                  let n = e.authResponse.accessToken;
                  try {
                    let e = await d.DY({ AccessToken: n });
                    if (e.data) {
                      let e = await d.fn();
                      (N(e.data || null),
                        (0, g.sendGTMEvent)({
                          event: "login",
                          value:
                            null === (t = e.data) || void 0 === t
                              ? void 0
                              : null === (l = t.accountInfo) || void 0 === l
                                ? void 0
                                : l.playFabId,
                        }),
                        await P(),
                        R(!1));
                      return;
                    }
                    if (
                      (null === (o = e.error) || void 0 === o
                        ? void 0
                        : o.error) === "AccountNotFound"
                    ) {
                      (j("root", { message: v }), R(!1));
                      return;
                    }
                    let r =
                      (null === (a = e.error) || void 0 === a
                        ? void 0
                        : a.errorMessage) ||
                      "Unable to log in with Facebook. Please try again.";
                    j("root", { message: r });
                  } catch (e) {
                    (console.error(e),
                      j("root", {
                        message: "Facebook login failed. Please try again.",
                      }));
                  }
                  R(!1);
                },
                [X, P, j, N],
              );
            (0, t.useEffect)(() => {
              if (!H) {
                I(!1);
                return;
              }
              let e = !1;
              return (
                (0, m.kD)(H)
                  .then((r) => {
                    r && !e && I(!0);
                  })
                  .catch((r) => {
                    e || (console.error(r), I(!1));
                  }),
                () => {
                  e = !0;
                }
              );
            }, [H]);
            let K = (0, t.useCallback)(() => {
              if (!A) {
                Z(!1);
                return;
              }
              let e = !1;
              return (
                (0, w.$6)()
                  .then((r) => {
                    r &&
                      !e &&
                      ((z.current = r),
                      (B.current = (0, w.a6)(r, {
                        client_id: A,
                        scope: "openid email profile",
                        ux_mode: "popup",
                        callback: (e) => {
                          $(e);
                        },
                      })),
                      Z(!0));
                  })
                  .catch((r) => {
                    e || (console.error(r), Z(!1));
                  }),
                () => {
                  e = !0;
                }
              );
            }, [A, $]);
            return (
              (0, t.useEffect)(() => {
                let e = K();
                return e;
              }, [K]),
              (0, t.useEffect)(() => {
                _ &&
                  L.replace({
                    pathname: "/registration",
                    query: { resume: "identity" },
                  });
              }, [_, L]),
              (0, t.useEffect)(
                () => () => {
                  (D(), X());
                },
                [X, D],
              ),
              (0, l.jsx)(i.Z, {
                navItems: p,
                children: (0, l.jsx)("form", {
                  className: "account_form",
                  onSubmit: y(handleLogin),
                  autoComplete: "on",
                  children: (0, l.jsx)(h.U, {
                    onGoogleLogin: () => {
                      if ((k("root"), !A)) {
                        j("root", {
                          message:
                            "Google login is unavailable. Please try again later or use your email and password.",
                        });
                        return;
                      }
                      let e = B.current;
                      if (!e) {
                        j("root", {
                          message:
                            "Google login is still initializing. Please try again in a moment.",
                        });
                        return;
                      }
                      (M(!0), (O.current = !0), Q(), (e.callback = $));
                      try {
                        (0, w.p0)(e);
                      } catch (e) {
                        (console.error(e),
                          (O.current = !1),
                          D(),
                          M(!1),
                          j("root", {
                            message: "Google login failed. Please try again.",
                          }));
                      }
                    },
                    onFacebookLogin: () => {
                      if (!H) {
                        j("root", {
                          message:
                            "Facebook login is unavailable. Please try again later or use your email and password.",
                        });
                        return;
                      }
                      if (!window.FB) {
                        j("root", {
                          message:
                            "Facebook login is still initializing. Please try again in a moment.",
                        });
                        return;
                      }
                      (k("root"), R(!0));
                      let attemptLogin = (e) => {
                        if (
                          (null == e ? void 0 : e.status) === "connected" &&
                          e.authResponse
                        ) {
                          J({
                            authResponse: {
                              accessToken: e.authResponse.accessToken,
                            },
                          }).catch((e) => {
                            (console.error(e),
                              j("root", {
                                message:
                                  "Facebook login failed. Please try again.",
                              }),
                              R(!1));
                          });
                          return;
                        }
                        try {
                          var r;
                          ((W.current = !0),
                            Y(),
                            null === (r = window.FB) ||
                              void 0 === r ||
                              r.login(
                                (e) => {
                                  ((W.current = !1),
                                    X(),
                                    J(e).catch((e) => {
                                      (console.error(e),
                                        j("root", {
                                          message:
                                            "Facebook login failed. Please try again.",
                                        }),
                                        R(!1));
                                    }));
                                },
                                { scope: "email", return_scopes: !0 },
                              ));
                        } catch (e) {
                          (console.error(e),
                            (W.current = !1),
                            X(),
                            R(!1),
                            j("root", {
                              message:
                                "Facebook login failed. Please try again.",
                            }));
                        }
                      };
                      (0, m.qP)()
                        .then((e) => {
                          attemptLogin(e);
                        })
                        .catch((e) => {
                          (console.error(e), attemptLogin());
                        });
                    },
                    control: b,
                    errors: C,
                    loginLoading: S,
                    facebookLoginLoading: E,
                    facebookSdkReady: G,
                    googleLoginLoading: T,
                    googleSdkReady: V,
                    raiderFeatureSlides: x.raiderFeatureSlides
                      .filter((e) => void 0 !== e)
                      .map((e) => e.fields),
                  }),
                }),
              })
            );
          }),
            a());
        } catch (e) {
          a(e);
        }
      });
    },
    21699: function (e, r, o) {
      "use strict";
      o.d(r, {
        U: function () {
          return LoginOptions;
        },
      });
      var a = o(97458),
        l = o(52983),
        t = o(51747),
        n = o(51472),
        s = o(32583),
        i = o(86848),
        c = o(53864),
        d = o(61373),
        u = o(94225);
      function LoginOptions(e) {
        var r, o;
        let {
            raiderFeatureSlides: g,
            onGoogleLogin: h,
            onFacebookLogin: f,
            control: m,
            errors: w,
            loginLoading: p,
            facebookLoginLoading: v,
            facebookSdkReady: x,
            googleLoginLoading: y,
            googleSdkReady: b,
          } = e,
          [j, k] = (0, l.useState)(0),
          [C, N] = (0, l.useState)(null),
          [P, _] = (0, l.useState)(null);
        return (0, a.jsxs)("div", {
          className:
            "flex w-full flex-col gap-8 lg:flex-row lg:items-center lg:gap-24 xl:gap-32",
          children: [
            (0, a.jsxs)("div", {
              className: "relative min-w-0 flex-1",
              children: [
                (0, a.jsx)("div", {
                  className:
                    "pointer-events-none absolute inset-0 -z-10 -translate-y-12 scale-[1.75]",
                  children: (0, a.jsx)(c.R, {
                    responsive: !1,
                    playAnimation: !0,
                  }),
                }),
                (0, a.jsx)(t.Y, {
                  features: g,
                  currentIndex: j,
                  onSwiper: N,
                  onSlideChange: (e) => {
                    k(e.realIndex);
                  },
                  controlledSwiper: P,
                  onSlideClick: (e) => {
                    (null == C || C.slideToLoop(e),
                      null == P || P.slideToLoop(e));
                  },
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className:
                "mx-auto flex w-full max-w-md flex-1 flex-col justify-center gap-10",
              children: [
                (0, a.jsx)(n.u, {
                  features: g,
                  onSwiper: _,
                  controlledSwiper: C,
                }),
                (0, a.jsxs)("div", {
                  className: "flex flex-col gap-2",
                  children: [
                    (0, a.jsx)(i.Qr, {
                      name: "email",
                      control: m,
                      render: (e) => {
                        let { field: r } = e;
                        return (0, a.jsx)(s.Z, {
                          label: "Email",
                          placeholder: "Email",
                          type: "email",
                          autoComplete: "email",
                          error: w.email,
                          ...r,
                        });
                      },
                    }),
                    (0, a.jsx)(i.Qr, {
                      name: "password",
                      control: m,
                      render: (e) => {
                        let { field: r } = e;
                        return (0, a.jsx)(s.Z, {
                          label: "Password",
                          placeholder: "Password",
                          type: "password",
                          autoComplete: "current-password",
                          error: w.password,
                          ...r,
                        });
                      },
                    }),
                    (null === (r = w.root) || void 0 === r
                      ? void 0
                      : r.message) &&
                      (0, a.jsx)("div", {
                        className: "text-red-error",
                        children: (0, a.jsx)(u.Z, {
                          error:
                            null === (o = w.root) || void 0 === o
                              ? void 0
                              : o.message,
                        }),
                      }),
                    (0, a.jsxs)("button", {
                      type: "submit",
                      disabled: p,
                      className:
                        "mt-2 flex items-center justify-center gap-2 rounded-lg border border-yellow-500 bg-yellow-500 py-2 text-black hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-50",
                      children: [
                        p &&
                          (0, a.jsxs)("svg", {
                            className: "h-5 w-5 animate-spin",
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            children: [
                              (0, a.jsx)("circle", {
                                className: "opacity-25",
                                cx: "12",
                                cy: "12",
                                r: "10",
                                stroke: "currentColor",
                                strokeWidth: "4",
                              }),
                              (0, a.jsx)("path", {
                                className: "opacity-75",
                                fill: "currentColor",
                                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                              }),
                            ],
                          }),
                        p ? "Logging in..." : "Log In",
                      ],
                    }),
                    (0, a.jsx)("a", {
                      href: "/forgot-password",
                      className:
                        "py-2 text-center text-sm text-white hover:text-yellow-500 hover:underline",
                      children: "Forgot Password?",
                    }),
                    (0, a.jsxs)("div", {
                      className: "relative flex items-center py-2",
                      children: [
                        (0, a.jsx)("div", {
                          className: "flex-grow border-t border-gray-600",
                        }),
                        (0, a.jsx)("span", {
                          className: "mx-4 flex-shrink text-sm text-gray-400",
                          children: "or",
                        }),
                        (0, a.jsx)("div", {
                          className: "flex-grow border-t border-gray-600",
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex gap-3",
                      children: [
                        (0, a.jsxs)("button", {
                          onClick: h,
                          type: "button",
                          disabled: !b || y,
                          className:
                            "flex flex-1 justify-center rounded-lg border border-gray-600 p-2 hover:border-yellow-300 disabled:cursor-not-allowed disabled:opacity-50",
                          children: [
                            y
                              ? (0, a.jsx)(d.Z, {})
                              : (0, a.jsxs)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "20",
                                  height: "21",
                                  viewBox: "0 0 20 21",
                                  fill: "none",
                                  children: [
                                    (0, a.jsx)("g", {
                                      clipPath: "url(#clip0_578_487)",
                                      children: (0, a.jsx)("path", {
                                        d: "M0 10.5C0 4.986 4.486 0.5 10 0.5C12.227 0.5 14.3348 1.21648 16.0956 2.572L13.7718 5.59067C12.683 4.75257 11.3788 4.30952 10 4.30952C6.58657 4.30952 3.80952 7.08657 3.80952 10.5C3.80952 13.9134 6.58657 16.6905 10 16.6905C12.7492 16.6905 15.0855 14.8892 15.8907 12.4048H10V8.59524H20V10.5C20 16.014 15.514 20.5 10 20.5C4.486 20.5 0 16.014 0 10.5Z",
                                        fill: "white",
                                      }),
                                    }),
                                    (0, a.jsx)("defs", {
                                      children: (0, a.jsx)("clipPath", {
                                        id: "clip0_578_487",
                                        children: (0, a.jsx)("rect", {
                                          width: "20",
                                          height: "20",
                                          fill: "white",
                                          transform: "translate(0 0.5)",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                            (0, a.jsx)("span", {
                              className: "sr-only",
                              children: "Continue with Google",
                            }),
                          ],
                        }),
                        (0, a.jsxs)("button", {
                          onClick: f,
                          type: "button",
                          disabled: !x || v,
                          className:
                            "hidden flex-1 justify-center rounded-lg border border-gray-600 p-2 hover:border-yellow-300 disabled:cursor-not-allowed disabled:opacity-50",
                          children: [
                            v
                              ? (0, a.jsxs)("svg", {
                                  className: "h-5 w-5 animate-spin text-white",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  children: [
                                    (0, a.jsx)("circle", {
                                      className: "opacity-25",
                                      cx: "12",
                                      cy: "12",
                                      r: "10",
                                      stroke: "currentColor",
                                      strokeWidth: "4",
                                    }),
                                    (0, a.jsx)("path", {
                                      className: "opacity-75",
                                      fill: "currentColor",
                                      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                                    }),
                                  ],
                                })
                              : (0, a.jsxs)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "20",
                                  height: "21",
                                  viewBox: "0 0 20 21",
                                  fill: "none",
                                  children: [
                                    (0, a.jsx)("g", {
                                      clipPath: "url(#clip0_578_490)",
                                      children: (0, a.jsx)("path", {
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        d: "M11.8213 20.5V11.5H14.5537L15 7.5H11.8213V5.55176C11.8213 4.52176 11.8476 3.5 13.2869 3.5H14.7447V0.640137C14.7447 0.597137 13.4925 0.5 12.2257 0.5C9.57999 0.5 7.9234 2.1572 7.9234 5.2002V7.5H5V11.5H7.9234V20.5H11.8213Z",
                                        fill: "white",
                                      }),
                                    }),
                                    (0, a.jsx)("defs", {
                                      children: (0, a.jsx)("clipPath", {
                                        id: "clip0_578_490",
                                        children: (0, a.jsx)("rect", {
                                          width: "20",
                                          height: "20",
                                          fill: "white",
                                          transform: "translate(0 0.5)",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                            (0, a.jsx)("span", {
                              className: "sr-only",
                              children: "Continue with Facebook",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    22022: function (e, r, o) {
      "use strict";
      o.a(e, async function (e, a) {
        try {
          (o.r(r),
            o.d(r, {
              __N_SSG: function () {
                return i;
              },
              default: function () {
                return Login;
              },
            }));
          var l = o(97458),
            t = o(8835),
            n = o(49949),
            s = e([t, n]);
          [t, n] = s.then ? (await s)() : s;
          var i = !0;
          function Login(e) {
            let { websiteSingleton: r, navItems: o, registrationPage: a } = e;
            return (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)("h1", {
                  className: "hidden",
                  children: "Tomb Raider - Login",
                }),
                (0, l.jsx)(n.Z, {
                  children: (0, l.jsx)(t.Z, {
                    websiteSingleton: r,
                    navItems: o,
                    registrationPage: a,
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
  },
  function (e) {
    (e.O(0, [46, 956, 672, 34, 696, 647, 611, 774, 888, 179], function () {
      return e((e.s = 94125));
    }),
      (_N_E = e.O()));
  },
]);
