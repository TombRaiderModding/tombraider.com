(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8295],
  {
    32802: (e, r, a) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/login",
        function () {
          return a(85263);
        },
      ]);
    },
    75460: (e, r, a) => {
      "use strict";
      a.a(e, async (e, o) => {
        try {
          a.d(r, { A: () => v });
          var l = a(2183),
            s = a(36439),
            t = a(80777),
            n = a(73357),
            i = a(39334),
            c = a(99435),
            d = a(55109),
            u = a(75109),
            g = a(95344),
            m = a(92092),
            h = a(18652),
            f = a(45593),
            w = a(57524),
            p = e([i, c, d, u]);
          [i, c, d, u] = p.then ? (await p)() : p;
          let x =
              "We couldn't find an account for that email. Please sign up first.",
            v = (e) => {
              var r, a;
              let { websiteSingleton: o, navItems: p, registrationPage: v } = e,
                {
                  handleSubmit: y,
                  control: b,
                  setError: j,
                  clearErrors: k,
                  formState: { errors: C },
                } = (0, t.mN)({
                  resolver: (0, n.u)(u.NXz),
                  defaultValues: { email: "", password: "" },
                }),
                {
                  setUserData: N,
                  fetchUserInfo: _,
                  requiresIdentitySetup: P,
                } = (0, c.u)(),
                S = (0, h.useRouter)(),
                [F, E] = (0, s.useState)(!1),
                [R, A] = (0, s.useState)(!1),
                [G, L] = (0, s.useState)(!1),
                [I, T] = (0, s.useState)(!1),
                [M, V] = (0, s.useState)(!1),
                H = ((r = "1881486789441765"), void 0 !== r) ? r : "",
                z = ((a =
                  "913283481016-rge7l6npr5tpnce5gd5fb28kmf2v33tu.apps.googleusercontent.com"),
                void 0 !== a)
                  ? a
                  : "",
                B = (0, s.useRef)(null),
                J = (0, s.useRef)(null),
                O = (0, s.useRef)(!1),
                U = (0, s.useRef)(null),
                W = (0, s.useRef)(!1),
                X = (0, s.useRef)(null),
                Z = (0, s.useCallback)(() => {
                  U.current &&
                    (window.removeEventListener("focus", U.current),
                    (U.current = null));
                }, []),
                q = (0, s.useCallback)(() => {
                  Z();
                  let e = () => {
                    O.current &&
                      ((O.current = !1),
                      T(!1),
                      j("root", {
                        message:
                          "Google login was cancelled. Please try again.",
                      }));
                  };
                  ((U.current = e),
                    window.addEventListener("focus", e, { once: !0 }));
                }, [Z, j]),
                D = (0, s.useCallback)(() => {
                  X.current &&
                    (window.removeEventListener("focus", X.current),
                    (X.current = null));
                }, []),
                K = (0, s.useCallback)(() => {
                  D();
                  let e = () => {
                    W.current &&
                      ((W.current = !1),
                      A(!1),
                      j("root", {
                        message:
                          "Facebook login was cancelled. Please try again.",
                      }));
                  };
                  ((X.current = e),
                    window.addEventListener("focus", e, { once: !0 }));
                }, [D, j]),
                Q = async (e) => {
                  E(!0);
                  try {
                    let o = await d.Jv(e);
                    if (o.data) {
                      var r, a;
                      let e = await d.Gf();
                      (N(e.data || null),
                        (0, g.sendGTMEvent)({
                          event: "login",
                          value:
                            null == (a = e.data) || null == (r = a.accountInfo)
                              ? void 0
                              : r.playFabId,
                        }),
                        await _());
                    } else if (o.error)
                      switch (o.error.error) {
                        case "InvalidEmailOrPassword":
                          (j("email", { message: " " }),
                            j("password", { message: " " }),
                            j("root", { message: o.error.errorMessage }));
                          break;
                        case "AccountNotFound":
                          (j("email", { message: x }),
                            j("root", { message: x }));
                          break;
                        default:
                          j("root", { message: o.error.errorMessage });
                      }
                  } catch (e) {
                    j("root", { message: "An unknown error has occured." });
                  }
                  E(!1);
                },
                Y = (0, s.useCallback)(
                  async (e) => {
                    if (((O.current = !1), Z(), e.error || !e.code)) {
                      (T(!1),
                        j("root", {
                          message:
                            e.error_description ||
                            e.error ||
                            "Google login was cancelled. Please try again.",
                        }));
                      return;
                    }
                    try {
                      var r, a, o, l;
                      let s = await d.Fd({ ServerAuthCode: e.code });
                      if (s.data) {
                        let e = await d.Gf();
                        (N(e.data || null),
                          (0, g.sendGTMEvent)({
                            event: "login",
                            value:
                              null == (l = e.data) ||
                              null == (o = l.accountInfo)
                                ? void 0
                                : o.playFabId,
                          }),
                          await _(),
                          T(!1));
                        return;
                      }
                      if (
                        (null == (r = s.error) ? void 0 : r.error) ===
                        "AccountNotFound"
                      ) {
                        (j("root", { message: x }), T(!1));
                        return;
                      }
                      let t =
                        (null == (a = s.error) ? void 0 : a.errorMessage) ||
                        "Unable to log in with Google. Please try again.";
                      j("root", { message: t });
                    } catch (e) {
                      (console.error(e),
                        j("root", {
                          message: "Google login failed. Please try again.",
                        }));
                    }
                    T(!1);
                  },
                  [_, j, N],
                ),
                $ = (0, s.useCallback)(
                  async (e) => {
                    var r, a, o, l, s;
                    if (
                      ((W.current = !1),
                      D(),
                      !(null == (r = e.authResponse) ? void 0 : r.accessToken))
                    ) {
                      (A(!1),
                        j("root", {
                          message:
                            "Facebook login was cancelled. Please try again.",
                        }));
                      return;
                    }
                    let t = e.authResponse.accessToken;
                    try {
                      let e = await d.zo({ AccessToken: t });
                      if (e.data) {
                        let e = await d.Gf();
                        (N(e.data || null),
                          (0, g.sendGTMEvent)({
                            event: "login",
                            value:
                              null == (s = e.data) ||
                              null == (l = s.accountInfo)
                                ? void 0
                                : l.playFabId,
                          }),
                          await _(),
                          A(!1));
                        return;
                      }
                      if (
                        (null == (a = e.error) ? void 0 : a.error) ===
                        "AccountNotFound"
                      ) {
                        (j("root", { message: x }), A(!1));
                        return;
                      }
                      let r =
                        (null == (o = e.error) ? void 0 : o.errorMessage) ||
                        "Unable to log in with Facebook. Please try again.";
                      j("root", { message: r });
                    } catch (e) {
                      (console.error(e),
                        j("root", {
                          message: "Facebook login failed. Please try again.",
                        }));
                    }
                    A(!1);
                  },
                  [D, _, j, N],
                );
              (0, s.useEffect)(() => {
                if (!H) return void L(!1);
                let e = !1;
                return (
                  (0, f.FJ)(H)
                    .then((r) => {
                      r && !e && L(!0);
                    })
                    .catch((r) => {
                      e || (console.error(r), L(!1));
                    }),
                  () => {
                    e = !0;
                  }
                );
              }, [H]);
              let ee = (0, s.useCallback)(() => {
                if (!z) return void V(!1);
                let e = !1;
                return (
                  (0, w.S_)()
                    .then((r) => {
                      r &&
                        !e &&
                        ((B.current = r),
                        (J.current = (0, w.gS)(r, {
                          client_id: z,
                          scope: "openid email profile",
                          ux_mode: "popup",
                          callback: (e) => {
                            Y(e);
                          },
                        })),
                        V(!0));
                    })
                    .catch((r) => {
                      e || (console.error(r), V(!1));
                    }),
                  () => {
                    e = !0;
                  }
                );
              }, [z, Y]);
              return (
                (0, s.useEffect)(() => ee(), [ee]),
                (0, s.useEffect)(() => {
                  P &&
                    S.replace({
                      pathname: "/registration",
                      query: { resume: "identity" },
                    });
                }, [P, S]),
                (0, s.useEffect)(
                  () => () => {
                    (Z(), D());
                  },
                  [D, Z],
                ),
                (0, l.jsx)(i.A, {
                  navItems: p,
                  children: (0, l.jsx)("form", {
                    className: "account_form",
                    onSubmit: y(Q),
                    autoComplete: "on",
                    children: (0, l.jsx)(m.y, {
                      onGoogleLogin: () => {
                        if ((k(), !z))
                          return void j("root", {
                            message:
                              "Google login is unavailable. Please try again later or use your email and password.",
                          });
                        let e = J.current;
                        if (!e)
                          return void j("root", {
                            message:
                              "Google login is still initializing. Please try again in a moment.",
                          });
                        (T(!0), (O.current = !0), q(), (e.callback = Y));
                        try {
                          (0, w.mU)(e);
                        } catch (e) {
                          (console.error(e),
                            (O.current = !1),
                            Z(),
                            T(!1),
                            j("root", {
                              message: "Google login failed. Please try again.",
                            }));
                        }
                      },
                      onFacebookLogin: () => {
                        if (!H)
                          return void j("root", {
                            message:
                              "Facebook login is unavailable. Please try again later or use your email and password.",
                          });
                        if (!window.FB)
                          return void j("root", {
                            message:
                              "Facebook login is still initializing. Please try again in a moment.",
                          });
                        (k(), A(!0));
                        let e = (e) => {
                          if (
                            (null == e ? void 0 : e.status) === "connected" &&
                            e.authResponse
                          )
                            return void $({
                              authResponse: {
                                accessToken: e.authResponse.accessToken,
                              },
                            }).catch((e) => {
                              (console.error(e),
                                j("root", {
                                  message:
                                    "Facebook login failed. Please try again.",
                                }),
                                A(!1));
                            });
                          try {
                            var r;
                            ((W.current = !0),
                              K(),
                              null == (r = window.FB) ||
                                r.login(
                                  (e) => {
                                    ((W.current = !1),
                                      D(),
                                      $(e).catch((e) => {
                                        (console.error(e),
                                          j("root", {
                                            message:
                                              "Facebook login failed. Please try again.",
                                          }),
                                          A(!1));
                                      }));
                                  },
                                  { scope: "email", return_scopes: !0 },
                                ));
                          } catch (e) {
                            (console.error(e),
                              (W.current = !1),
                              D(),
                              A(!1),
                              j("root", {
                                message:
                                  "Facebook login failed. Please try again.",
                              }));
                          }
                        };
                        (0, f.u7)()
                          .then((r) => {
                            e(r);
                          })
                          .catch((r) => {
                            (console.error(r), e());
                          });
                      },
                      control: b,
                      errors: C,
                      loginLoading: F,
                      facebookLoginLoading: R,
                      facebookSdkReady: G,
                      googleLoginLoading: I,
                      googleSdkReady: M,
                      raiderFeatureSlides: v.raiderFeatureSlides
                        .filter((e) => void 0 !== e)
                        .map((e) => e.fields),
                    }),
                  }),
                })
              );
            };
          o();
        } catch (e) {
          o(e);
        }
      });
    },
    85263: (e, r, a) => {
      "use strict";
      a.a(e, async (e, o) => {
        try {
          (a.r(r), a.d(r, { __N_SSG: () => c, default: () => d }));
          var l = a(2183),
            s = a(75460),
            t = a(91134),
            n = a(12268),
            i = e([s, n]);
          [s, n] = i.then ? (await i)() : i;
          var c = !0;
          function d(e) {
            let { websiteSingleton: r, navItems: a, registrationPage: o } = e;
            return (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)(t.A, {
                  description:
                    "Log in to your Tomb Raider account to access exclusive rewards, monthly newsletters, and all your Society of Raiders member benefits from Crystal Dynamics.",
                }),
                (0, l.jsx)("h1", {
                  className: "hidden",
                  children: "Tomb Raider - Login",
                }),
                (0, l.jsx)(n.A, {
                  children: (0, l.jsx)(s.A, {
                    websiteSingleton: r,
                    navItems: a,
                    registrationPage: o,
                  }),
                }),
              ],
            });
          }
          o();
        } catch (e) {
          o(e);
        }
      });
    },
    92092: (e, r, a) => {
      "use strict";
      a.d(r, { y: () => g });
      var o = a(2183),
        l = a(36439),
        s = a(75309),
        t = a(88256),
        n = a(40502),
        i = a(80777),
        c = a(43042),
        d = a(26974),
        u = a(67895);
      function g(e) {
        var r, a;
        let {
            raiderFeatureSlides: g,
            onGoogleLogin: m,
            onFacebookLogin: h,
            control: f,
            errors: w,
            loginLoading: p,
            facebookLoginLoading: x,
            facebookSdkReady: v,
            googleLoginLoading: y,
            googleSdkReady: b,
          } = e,
          [j, k] = (0, l.useState)(0),
          [C, N] = (0, l.useState)(null),
          [_, P] = (0, l.useState)(null);
        return (0, o.jsxs)("div", {
          className:
            "flex w-full flex-col gap-8 lg:flex-row lg:items-center lg:gap-24 xl:gap-32",
          children: [
            (0, o.jsxs)("div", {
              className: "relative min-w-0 flex-1",
              children: [
                (0, o.jsx)("div", {
                  className:
                    "pointer-events-none absolute inset-0 -z-10 -translate-y-12 scale-[1.75]",
                  children: (0, o.jsx)(c.y, {
                    responsive: !1,
                    playAnimation: !0,
                  }),
                }),
                (0, o.jsx)(s.J, {
                  features: g,
                  currentIndex: j,
                  onSwiper: N,
                  onSlideChange: (e) => {
                    k(e.realIndex);
                  },
                  controlledSwiper: _,
                  onSlideClick: (e) => {
                    (null == C || C.slideTo(e), null == _ || _.slideTo(e));
                  },
                }),
              ],
            }),
            (0, o.jsxs)("div", {
              className:
                "mx-auto flex w-full max-w-md flex-1 flex-col justify-center gap-10",
              children: [
                (0, o.jsx)(t.G, {
                  features: g,
                  onSwiper: P,
                  controlledSwiper: C,
                }),
                (0, o.jsxs)("div", {
                  className: "flex flex-col gap-2",
                  children: [
                    (0, o.jsx)(i.xI, {
                      name: "email",
                      control: f,
                      render: (e) => {
                        let { field: r } = e;
                        return (0, o.jsx)(n.A, {
                          label: "Email",
                          placeholder: "Email",
                          type: "email",
                          autoComplete: "email",
                          error: w.email,
                          ...r,
                        });
                      },
                    }),
                    (0, o.jsx)(i.xI, {
                      name: "password",
                      control: f,
                      render: (e) => {
                        let { field: r } = e;
                        return (0, o.jsx)(n.A, {
                          label: "Password",
                          placeholder: "Password",
                          type: "password",
                          autoComplete: "current-password",
                          error: w.password,
                          ...r,
                        });
                      },
                    }),
                    (null == (r = w.root) ? void 0 : r.message) &&
                      (0, o.jsx)("div", {
                        className: "text-red-error",
                        children: (0, o.jsx)(u.A, {
                          error: null == (a = w.root) ? void 0 : a.message,
                        }),
                      }),
                    (0, o.jsxs)("button", {
                      type: "submit",
                      disabled: p,
                      className:
                        "mt-2 flex items-center justify-center gap-2 rounded-lg border border-yellow-500 bg-yellow-500 py-2 text-black hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-50",
                      children: [
                        p &&
                          (0, o.jsxs)("svg", {
                            className: "h-5 w-5 animate-spin",
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            children: [
                              (0, o.jsx)("circle", {
                                className: "opacity-25",
                                cx: "12",
                                cy: "12",
                                r: "10",
                                stroke: "currentColor",
                                strokeWidth: "4",
                              }),
                              (0, o.jsx)("path", {
                                className: "opacity-75",
                                fill: "currentColor",
                                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                              }),
                            ],
                          }),
                        p ? "Logging in..." : "Log In",
                      ],
                    }),
                    (0, o.jsx)("a", {
                      href: "/forgot-password",
                      className:
                        "py-2 text-center text-sm text-white hover:text-yellow-500 hover:underline",
                      children: "Forgot Password?",
                    }),
                    (0, o.jsxs)("div", {
                      className: "relative flex items-center py-2",
                      children: [
                        (0, o.jsx)("div", {
                          className: "grow border-t border-gray-600",
                        }),
                        (0, o.jsx)("span", {
                          className: "mx-4 shrink text-sm text-gray-400",
                          children: "or",
                        }),
                        (0, o.jsx)("div", {
                          className: "grow border-t border-gray-600",
                        }),
                      ],
                    }),
                    (0, o.jsxs)("div", {
                      className: "flex gap-3",
                      children: [
                        (0, o.jsxs)("button", {
                          onClick: m,
                          type: "button",
                          disabled: !b || y,
                          className:
                            "flex flex-1 justify-center rounded-lg border border-gray-600 p-2 hover:border-yellow-300 disabled:cursor-not-allowed disabled:opacity-50",
                          children: [
                            y
                              ? (0, o.jsx)(d.A, {})
                              : (0, o.jsxs)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "20",
                                  height: "21",
                                  viewBox: "0 0 20 21",
                                  fill: "none",
                                  children: [
                                    (0, o.jsx)("g", {
                                      clipPath: "url(#clip0_578_487)",
                                      children: (0, o.jsx)("path", {
                                        d: "M0 10.5C0 4.986 4.486 0.5 10 0.5C12.227 0.5 14.3348 1.21648 16.0956 2.572L13.7718 5.59067C12.683 4.75257 11.3788 4.30952 10 4.30952C6.58657 4.30952 3.80952 7.08657 3.80952 10.5C3.80952 13.9134 6.58657 16.6905 10 16.6905C12.7492 16.6905 15.0855 14.8892 15.8907 12.4048H10V8.59524H20V10.5C20 16.014 15.514 20.5 10 20.5C4.486 20.5 0 16.014 0 10.5Z",
                                        fill: "white",
                                      }),
                                    }),
                                    (0, o.jsx)("defs", {
                                      children: (0, o.jsx)("clipPath", {
                                        id: "clip0_578_487",
                                        children: (0, o.jsx)("rect", {
                                          width: "20",
                                          height: "20",
                                          fill: "white",
                                          transform: "translate(0 0.5)",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                            (0, o.jsx)("span", {
                              className: "sr-only",
                              children: "Continue with Google",
                            }),
                          ],
                        }),
                        (0, o.jsxs)("button", {
                          onClick: h,
                          type: "button",
                          disabled: !v || x,
                          className:
                            "hidden flex-1 justify-center rounded-lg border border-gray-600 p-2 hover:border-yellow-300 disabled:cursor-not-allowed disabled:opacity-50",
                          children: [
                            x
                              ? (0, o.jsxs)("svg", {
                                  className: "h-5 w-5 animate-spin text-white",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  children: [
                                    (0, o.jsx)("circle", {
                                      className: "opacity-25",
                                      cx: "12",
                                      cy: "12",
                                      r: "10",
                                      stroke: "currentColor",
                                      strokeWidth: "4",
                                    }),
                                    (0, o.jsx)("path", {
                                      className: "opacity-75",
                                      fill: "currentColor",
                                      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                                    }),
                                  ],
                                })
                              : (0, o.jsxs)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "20",
                                  height: "21",
                                  viewBox: "0 0 20 21",
                                  fill: "none",
                                  children: [
                                    (0, o.jsx)("g", {
                                      clipPath: "url(#clip0_578_490)",
                                      children: (0, o.jsx)("path", {
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        d: "M11.8213 20.5V11.5H14.5537L15 7.5H11.8213V5.55176C11.8213 4.52176 11.8476 3.5 13.2869 3.5H14.7447V0.640137C14.7447 0.597137 13.4925 0.5 12.2257 0.5C9.57999 0.5 7.9234 2.1572 7.9234 5.2002V7.5H5V11.5H7.9234V20.5H11.8213Z",
                                        fill: "white",
                                      }),
                                    }),
                                    (0, o.jsx)("defs", {
                                      children: (0, o.jsx)("clipPath", {
                                        id: "clip0_578_490",
                                        children: (0, o.jsx)("rect", {
                                          width: "20",
                                          height: "20",
                                          fill: "white",
                                          transform: "translate(0 0.5)",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                            (0, o.jsx)("span", {
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
  },
  (e) => {
    (e.O(
      0,
      [9950, 6006, 1433, 1329, 3357, 7531, 5216, 7083, 636, 6593, 8792],
      () => e((e.s = 32802)),
    ),
      (_N_E = e.O()));
  },
]);
