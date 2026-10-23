(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8295],
  {
    16219: (e, r, a) => {
      "use strict";
      a.a(e, async (e, o) => {
        try {
          (a.r(r), a.d(r, { __N_SSG: () => c, default: () => d }));
          var s = a(2183),
            t = a(32712),
            l = a(74474),
            n = a(87200),
            i = e([t, n]);
          [t, n] = i.then ? (await i)() : i;
          var c = !0;
          function d({
            websiteSingleton: e,
            navItems: r,
            registrationPage: a,
          }) {
            return (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)(l.A, {
                  description:
                    "Log in to your Tomb Raider account to access exclusive rewards, monthly newsletters, and all your Society of Raiders member benefits from Crystal Dynamics.",
                }),
                (0, s.jsx)("h1", {
                  className: "hidden",
                  children: "Tomb Raider - Login",
                }),
                (0, s.jsx)(n.A, {
                  children: (0, s.jsx)(t.A, {
                    websiteSingleton: e,
                    navItems: r,
                    registrationPage: a,
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
    2e4: (e, r, a) => {
      "use strict";
      a.d(r, { y: () => g });
      var o = a(2183),
        s = a(36439),
        t = a(13297),
        l = a(17268),
        n = a(25514),
        i = a(80777),
        c = a(72990),
        d = a(97698),
        u = a(27811);
      function g({
        raiderFeatureSlides: e,
        onGoogleLogin: r,
        onFacebookLogin: a,
        control: m,
        errors: h,
        loginLoading: f,
        facebookLoginLoading: w,
        facebookSdkReady: p,
        googleLoginLoading: x,
        googleSdkReady: y,
      }) {
        let [b, v] = (0, s.useState)(0),
          [j, k] = (0, s.useState)(null),
          [C, N] = (0, s.useState)(null);
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
                (0, o.jsx)(t.J, {
                  features: e,
                  currentIndex: b,
                  onSwiper: k,
                  onSlideChange: (e) => {
                    v(e.realIndex);
                  },
                  controlledSwiper: C,
                  onSlideClick: (e) => {
                    (j?.slideTo(e), C?.slideTo(e));
                  },
                }),
              ],
            }),
            (0, o.jsxs)("div", {
              className:
                "mx-auto flex w-full max-w-md flex-1 flex-col justify-center gap-10",
              children: [
                (0, o.jsx)(l.G, {
                  features: e,
                  onSwiper: N,
                  controlledSwiper: j,
                }),
                (0, o.jsxs)("div", {
                  className: "flex flex-col gap-2",
                  children: [
                    (0, o.jsx)(i.xI, {
                      name: "email",
                      control: m,
                      render: ({ field: e }) =>
                        (0, o.jsx)(n.A, {
                          label: "Email",
                          placeholder: "Email",
                          type: "email",
                          autoComplete: "email",
                          error: h.email,
                          ...e,
                        }),
                    }),
                    (0, o.jsx)(i.xI, {
                      name: "password",
                      control: m,
                      render: ({ field: e }) =>
                        (0, o.jsx)(n.A, {
                          label: "Password",
                          placeholder: "Password",
                          type: "password",
                          autoComplete: "current-password",
                          error: h.password,
                          ...e,
                        }),
                    }),
                    h.root?.message &&
                      (0, o.jsx)("div", {
                        className: "text-red-error",
                        children: (0, o.jsx)(u.A, { error: h.root?.message }),
                      }),
                    (0, o.jsxs)("button", {
                      type: "submit",
                      disabled: f,
                      className:
                        "mt-2 flex items-center justify-center gap-2 rounded-lg border border-yellow-500 bg-yellow-500 py-2 text-black hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-50",
                      children: [
                        f &&
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
                        f ? "Logging in..." : "Log In",
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
                          onClick: r,
                          type: "button",
                          disabled: !y || x,
                          className:
                            "flex flex-1 justify-center rounded-lg border border-gray-600 p-2 hover:border-yellow-300 disabled:cursor-not-allowed disabled:opacity-50",
                          children: [
                            x
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
                          onClick: a,
                          type: "button",
                          disabled: !p || w,
                          className:
                            "hidden flex-1 justify-center rounded-lg border border-gray-600 p-2 hover:border-yellow-300 disabled:cursor-not-allowed disabled:opacity-50",
                          children: [
                            w
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
    32712: (e, r, a) => {
      "use strict";
      a.a(e, async (e, o) => {
        try {
          a.d(r, { A: () => y });
          var s = a(2183),
            t = a(36439),
            l = a(80777),
            n = a(73357),
            i = a(18074),
            c = a(9751),
            d = a(83737),
            u = a(75109),
            g = a(26330),
            m = a(2e4),
            h = a(31153),
            f = a(87053),
            w = a(16456),
            p = e([i, c, d, u]);
          [i, c, d, u] = p.then ? (await p)() : p;
          let x =
              "We couldn't find an account for that email. Please sign up first.",
            y = ({ websiteSingleton: e, navItems: r, registrationPage: a }) => {
              let {
                  handleSubmit: o,
                  control: p,
                  setError: y,
                  clearErrors: b,
                  formState: { errors: v },
                } = (0, l.mN)({
                  resolver: (0, n.u)(u.NXz),
                  defaultValues: { email: "", password: "" },
                }),
                {
                  setUserData: j,
                  fetchUserInfo: k,
                  requiresIdentitySetup: C,
                } = (0, c.u)(),
                N = (0, h.useRouter)(),
                [_, P] = (0, t.useState)(!1),
                [S, F] = (0, t.useState)(!1),
                [E, R] = (0, t.useState)(!1),
                [A, G] = (0, t.useState)(!1),
                [L, I] = (0, t.useState)(!1),
                T = "1881486789441765",
                M =
                  "913283481016-rge7l6npr5tpnce5gd5fb28kmf2v33tu.apps.googleusercontent.com",
                V = (0, t.useRef)(null),
                H = (0, t.useRef)(null),
                z = (0, t.useRef)(!1),
                B = (0, t.useRef)(null),
                J = (0, t.useRef)(!1),
                O = (0, t.useRef)(null),
                U = (0, t.useCallback)(() => {
                  B.current &&
                    (window.removeEventListener("focus", B.current),
                    (B.current = null));
                }, []),
                W = (0, t.useCallback)(() => {
                  U();
                  let e = () => {
                    z.current &&
                      ((z.current = !1),
                      G(!1),
                      y("root", {
                        message:
                          "Google login was cancelled. Please try again.",
                      }));
                  };
                  ((B.current = e),
                    window.addEventListener("focus", e, { once: !0 }));
                }, [U, y]),
                X = (0, t.useCallback)(() => {
                  O.current &&
                    (window.removeEventListener("focus", O.current),
                    (O.current = null));
                }, []),
                Z = (0, t.useCallback)(() => {
                  X();
                  let e = () => {
                    J.current &&
                      ((J.current = !1),
                      F(!1),
                      y("root", {
                        message:
                          "Facebook login was cancelled. Please try again.",
                      }));
                  };
                  ((O.current = e),
                    window.addEventListener("focus", e, { once: !0 }));
                }, [X, y]),
                q = async (e) => {
                  P(!0);
                  try {
                    let r = await d.Jv(e);
                    if (r.data) {
                      let e = await d.Gf();
                      (j(e.data || null),
                        (0, g.sendGTMEvent)({
                          event: "login",
                          value: e.data?.accountInfo?.playFabId,
                        }),
                        await k());
                    } else if (r.error)
                      switch (r.error.error) {
                        case "InvalidEmailOrPassword":
                          (y("email", { message: " " }),
                            y("password", { message: " " }),
                            y("root", { message: r.error.errorMessage }));
                          break;
                        case "AccountNotFound":
                          (y("email", { message: x }),
                            y("root", { message: x }));
                          break;
                        default:
                          y("root", { message: r.error.errorMessage });
                      }
                  } catch {
                    y("root", { message: "An unknown error has occured." });
                  }
                  P(!1);
                },
                D = (0, t.useCallback)(
                  async (e) => {
                    if (((z.current = !1), U(), e.error || !e.code)) {
                      (G(!1),
                        y("root", {
                          message:
                            e.error_description ||
                            e.error ||
                            "Google login was cancelled. Please try again.",
                        }));
                      return;
                    }
                    try {
                      let r = await d.Fd({ ServerAuthCode: e.code });
                      if (r.data) {
                        let e = await d.Gf();
                        (j(e.data || null),
                          (0, g.sendGTMEvent)({
                            event: "login",
                            value: e.data?.accountInfo?.playFabId,
                          }),
                          await k(),
                          G(!1));
                        return;
                      }
                      if (r.error?.error === "AccountNotFound") {
                        (y("root", { message: x }), G(!1));
                        return;
                      }
                      let a =
                        r.error?.errorMessage ||
                        "Unable to log in with Google. Please try again.";
                      y("root", { message: a });
                    } catch (e) {
                      (console.error(e),
                        y("root", {
                          message: "Google login failed. Please try again.",
                        }));
                    }
                    G(!1);
                  },
                  [k, y, j],
                ),
                K = (0, t.useCallback)(
                  async (e) => {
                    if (((J.current = !1), X(), !e.authResponse?.accessToken)) {
                      (F(!1),
                        y("root", {
                          message:
                            "Facebook login was cancelled. Please try again.",
                        }));
                      return;
                    }
                    let r = e.authResponse.accessToken;
                    try {
                      let e = await d.zo({ AccessToken: r });
                      if (e.data) {
                        let e = await d.Gf();
                        (j(e.data || null),
                          (0, g.sendGTMEvent)({
                            event: "login",
                            value: e.data?.accountInfo?.playFabId,
                          }),
                          await k(),
                          F(!1));
                        return;
                      }
                      if (e.error?.error === "AccountNotFound") {
                        (y("root", { message: x }), F(!1));
                        return;
                      }
                      let a =
                        e.error?.errorMessage ||
                        "Unable to log in with Facebook. Please try again.";
                      y("root", { message: a });
                    } catch (e) {
                      (console.error(e),
                        y("root", {
                          message: "Facebook login failed. Please try again.",
                        }));
                    }
                    F(!1);
                  },
                  [X, k, y, j],
                );
              (0, t.useEffect)(() => {
                if (!T) return void R(!1);
                let e = !1;
                return (
                  (0, f.FJ)(T)
                    .then((r) => {
                      r && !e && R(!0);
                    })
                    .catch((r) => {
                      e || (console.error(r), R(!1));
                    }),
                  () => {
                    e = !0;
                  }
                );
              }, [T]);
              let Q = (0, t.useCallback)(() => {
                if (!M) return void I(!1);
                let e = !1;
                return (
                  (0, w.S_)()
                    .then((r) => {
                      r &&
                        !e &&
                        ((V.current = r),
                        (H.current = (0, w.gS)(r, {
                          client_id: M,
                          scope: "openid email profile",
                          ux_mode: "popup",
                          callback: (e) => {
                            D(e);
                          },
                        })),
                        I(!0));
                    })
                    .catch((r) => {
                      e || (console.error(r), I(!1));
                    }),
                  () => {
                    e = !0;
                  }
                );
              }, [M, D]);
              return (
                (0, t.useEffect)(() => Q(), [Q]),
                (0, t.useEffect)(() => {
                  C &&
                    N.replace({
                      pathname: "/registration",
                      query: { resume: "identity" },
                    });
                }, [C, N]),
                (0, t.useEffect)(
                  () => () => {
                    (U(), X());
                  },
                  [X, U],
                ),
                (0, s.jsx)(i.A, {
                  navItems: r,
                  children: (0, s.jsx)("form", {
                    className: "account_form",
                    onSubmit: o(q),
                    autoComplete: "on",
                    children: (0, s.jsx)(m.y, {
                      onGoogleLogin: () => {
                        if ((b(), !M))
                          return void y("root", {
                            message:
                              "Google login is unavailable. Please try again later or use your email and password.",
                          });
                        let e = H.current;
                        if (!e)
                          return void y("root", {
                            message:
                              "Google login is still initializing. Please try again in a moment.",
                          });
                        (G(!0), (z.current = !0), W(), (e.callback = D));
                        try {
                          (0, w.mU)(e);
                        } catch (e) {
                          (console.error(e),
                            (z.current = !1),
                            U(),
                            G(!1),
                            y("root", {
                              message: "Google login failed. Please try again.",
                            }));
                        }
                      },
                      onFacebookLogin: () => {
                        if (!T)
                          return void y("root", {
                            message:
                              "Facebook login is unavailable. Please try again later or use your email and password.",
                          });
                        if (!window.FB)
                          return void y("root", {
                            message:
                              "Facebook login is still initializing. Please try again in a moment.",
                          });
                        (b(), F(!0));
                        let e = (e) => {
                          if (e?.status === "connected" && e.authResponse)
                            return void K({
                              authResponse: {
                                accessToken: e.authResponse.accessToken,
                              },
                            }).catch((e) => {
                              (console.error(e),
                                y("root", {
                                  message:
                                    "Facebook login failed. Please try again.",
                                }),
                                F(!1));
                            });
                          try {
                            ((J.current = !0),
                              Z(),
                              window.FB?.login(
                                (e) => {
                                  ((J.current = !1),
                                    X(),
                                    K(e).catch((e) => {
                                      (console.error(e),
                                        y("root", {
                                          message:
                                            "Facebook login failed. Please try again.",
                                        }),
                                        F(!1));
                                    }));
                                },
                                { scope: "email", return_scopes: !0 },
                              ));
                          } catch (e) {
                            (console.error(e),
                              (J.current = !1),
                              X(),
                              F(!1),
                              y("root", {
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
                      control: p,
                      errors: v,
                      loginLoading: _,
                      facebookLoginLoading: S,
                      facebookSdkReady: E,
                      googleLoginLoading: A,
                      googleSdkReady: L,
                      raiderFeatureSlides: a.raiderFeatureSlides
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
    63015: (e, r, a) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/login",
        function () {
          return a(16219);
        },
      ]);
    },
  },
  (e) => {
    (e.O(
      0,
      [9950, 5013, 2696, 1329, 3357, 3214, 9980, 7699, 636, 6593, 8792],
      () => e((e.s = 63015)),
    ),
      (_N_E = e.O()));
  },
]);
