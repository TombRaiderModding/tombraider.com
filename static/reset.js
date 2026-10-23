(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7537],
  {
    15987: (e, r, s) => {
      "use strict";
      s.d(r, { o: () => a });
      var t = s(46951);
      let a = t
        .Ikc({
          password: t
            .YjP()
            .max(100, "Password is at most 100 characters")
            .min(6),
          confirmPassword: t
            .YjP()
            .max(100, "Password is at most 100 characters")
            .min(6),
        })
        .refine((e) => e.password === e.confirmPassword, {
          message: "Passwords don't match",
          path: ["confirmPassword"],
        });
    },
    18074: (e, r, s) => {
      "use strict";
      s.a(e, async (e, t) => {
        try {
          s.d(r, { A: () => c });
          var a = s(2183),
            o = s(36439),
            l = s(49980),
            i = s(80831),
            n = e([l]);
          l = (n.then ? (await n)() : n)[0];
          let d = (0, o.forwardRef)((e, r) => {
            let { children: s, WelcomeSectionProps: t, navItems: o } = e;
            return (0, a.jsx)("main", {
              children: (0, a.jsxs)("div", {
                ref: r,
                className:
                  "relative flex h-svh flex-col items-center overflow-x-hidden",
                children: [
                  (0, a.jsx)(l.Ay, { isSticky: !0, navItems: o }),
                  (0, a.jsx)("div", {
                    className:
                      "flex w-full flex-1 flex-col items-center justify-center",
                    children: (0, a.jsxs)("div", {
                      className: "w-full max-w-7xl px-8 pb-20 pt-8 lg:pt-20",
                      children: [t && (0, a.jsx)(i.A, { ...t }), s],
                    }),
                  }),
                ],
              }),
            });
          });
          d.displayName = "FormWrapper";
          let c = d;
          t();
        } catch (e) {
          t(e);
        }
      });
    },
    25514: (e, r, s) => {
      "use strict";
      s.d(r, { A: () => d });
      var t = s(2183),
        a = s(36439),
        o = s(27811),
        l = s(15013),
        i = s.n(l);
      let n = (0, a.forwardRef)((e, r) => {
        var s;
        let {
            variant: l = "normal",
            label: n,
            error: d,
            helperText: c,
            ...m
          } = e,
          [p, u] = (0, a.useState)(!1);
        return (
          (0, a.useEffect)(() => {
            u(!0);
          }, []),
          (0, t.jsxs)("div", {
            className: d && "text-red-500",
            children: [
              (0, t.jsxs)("span", {
                className: "mb-1 flex items-center",
                children: [
                  (0, t.jsx)("label", {
                    className: "leading-none",
                    children: n,
                  }),
                  p &&
                    c &&
                    (0, t.jsxs)("div", {
                      className: "group relative",
                      children: [
                        (0, t.jsx)(i(), {
                          alt: "Helper icon",
                          priority: !0,
                          className: "ml-1 h-6 w-6",
                          src:
                            "normal" === l
                              ? "/images/help-white.svg"
                              : "/images/help-black.svg",
                          height: "0",
                          width: "0",
                        }),
                        (0, t.jsxs)("div", {
                          "data-popover": !0,
                          id: "popover-default",
                          role: "tooltip",
                          className:
                            "pointer-events-none absolute bottom-[calc(100%+1rem)] -left-20 z-10 inline-block w-52 rounded-lg border border-yellow-500/70 bg-black text-sm text-white opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100 sm:top-0 sm:bottom-auto sm:left-12 sm:w-64",
                          children: [
                            (0, t.jsx)("div", {
                              className: "px-3 py-2",
                              children: (0, t.jsx)("p", { children: c }),
                            }),
                            (0, t.jsx)("div", { "data-popper-arrow": !0 }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
              (0, t.jsx)("input", {
                ...m,
                ref: r,
                className: `w-full border-2 ${((s = `${d ? "border-red-500/40 hover:border-red-500/70 focus:border-red-500/70" : "border-gray-300/20 hover:border-white/50 focus:border-white"} bg-white/20 text-white`), "normal" === l ? s : "border-gray-500/30 bg-gray-800/10 text-black hover:border-gray-800/60 focus:border-gray-800/80")} px-3 py-4 backdrop-blur duration-200 outline-none`,
              }),
              (0, t.jsx)(o.A, { error: d }),
            ],
          })
        );
      });
      n.displayName = "TextField";
      let d = n;
    },
    27811: (e, r, s) => {
      "use strict";
      s.d(r, { A: () => a });
      var t = s(2183);
      function a({ error: e }) {
        return (0, t.jsx)("p", {
          className: "text-red-error mt-1 min-h-5 text-sm",
          children: "string" == typeof e ? e : e?.message?.toString(),
        });
      }
    },
    30667: (e, r, s) => {
      "use strict";
      s.a(e, async (e, t) => {
        try {
          (s.r(r), s.d(r, { __N_SSG: () => g, default: () => v }));
          var a = s(2183),
            o = s(64171),
            l = s(18074),
            i = s(25514),
            n = s(73357),
            d = s(80777),
            c = s(15987),
            m = s(13214),
            p = s(36439),
            u = s(31153),
            x = s(23988),
            h = s(83737),
            w = s(27811),
            f = e([l, h]);
          [l, h] = f.then ? (await f)() : f;
          var g = !0;
          function v({ websiteSingleton: e, navItems: r }) {
            let s = (0, m.useSearchParams)(),
              t = s?.get("token"),
              f = s?.get("errorCode"),
              {
                handleSubmit: g,
                control: b,
                formState: { errors: j },
              } = (0, d.mN)({
                resolver: (0, n.u)(c.o),
                defaultValues: { password: "", confirmPassword: "" },
              }),
              y = (0, u.useRouter)(),
              [N, P] = (0, p.useState)(!1),
              [_, k] = (0, p.useState)(void 0);
            (0, p.useEffect)(() => {
              f &&
                k(
                  "Something went wrong with the link you used. Please try sending another email.",
                );
            }, [f]);
            let { addAlert: S } = (0, x.Z)(),
              A = async (e) => {
                if (!t) {
                  if (f) return;
                  k(
                    "Token is missing in URL. Please use the link from your email to reset your password.",
                  );
                  return;
                }
                k(void 0);
                let r = { password: e.password, token: t };
                P(!0);
                let s = await h.xw(r);
                (P(!1),
                  s.error
                    ? k(s.error.errorMessage)
                    : (S({
                        title: "Password Successfully Reset",
                        children: "Your password has successfully been reset!",
                      }),
                      y.replace("/login")));
              };
            return (0, a.jsx)(l.A, {
              WelcomeSectionProps: {
                title: e.resetPasswordTitle,
                children: e.resetPasswordDescription,
              },
              navItems: r,
              children: (0, a.jsxs)("form", {
                onSubmit: g(A),
                autoComplete: "on",
                children: [
                  (0, a.jsx)("div", {
                    className: "mb-4",
                    children: (0, a.jsx)(d.xI, {
                      name: "password",
                      control: b,
                      render: ({ field: e }) =>
                        (0, a.jsx)(i.A, {
                          type: "password",
                          label: "Password",
                          error: j.password,
                          autoComplete: "new-password",
                          ...e,
                        }),
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "mb-4",
                    children: (0, a.jsx)(d.xI, {
                      name: "confirmPassword",
                      control: b,
                      render: ({ field: e }) =>
                        (0, a.jsx)(i.A, {
                          type: "password",
                          label: "Confirm Password",
                          autoComplete: "new-password",
                          error: j.confirmPassword,
                          ...e,
                        }),
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: "mt-12",
                    children: [
                      (0, a.jsx)(o.A, {
                        loading: N,
                        children: "Reset Password",
                      }),
                      (0, a.jsx)(w.A, { error: _ }),
                    ],
                  }),
                ],
              }),
            });
          }
          t();
        } catch (e) {
          t(e);
        }
      });
    },
    68759: (e, r, s) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/reset-password",
        function () {
          return s(30667);
        },
      ]);
    },
    80831: (e, r, s) => {
      "use strict";
      s.d(r, { A: () => m });
      var t = s(2183),
        a = s(15013),
        o = s.n(a);
      function l() {
        return (0, t.jsx)(o(), {
          src: "/images/divider.svg",
          className: "my-12 w-full",
          width: "0",
          height: "0",
          alt: "divider",
          priority: !0,
        });
      }
      var i = s(46728),
        n = s.n(i),
        d = s(31153),
        c = s(43948);
      function m(e) {
        let {
            title: r,
            children: s,
            showSignUp: a,
            textAlign: i,
            largerFont: m,
          } = e,
          p = (0, d.useRouter)();
        return (0, t.jsxs)("div", {
          className: `${i || "text-center"} align-center min-w-0 flex-1 justify-center text-white`,
          children: [
            (0, t.jsx)("h2", {
              className: `${m ? "text-5xl leading-[110%] lg:text-7xl" : "text-5xl"} font-normal tracking-normal drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]`,
              children: r,
            }),
            (0, t.jsx)("p", {
              className: `${m && "text-lg leading-[150%] lg:text-xl"} pt-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]`,
              children: s,
            }),
            a
              ? (0, t.jsxs)(n(), {
                  className:
                    "account_register_cta border-radius-8 group relative mt-12 inline-flex items-center overflow-hidden rounded-lg border-2 border-yellow-500/50 bg-transparent px-6 py-2 text-base text-white transition duration-300 canhover:hover:text-black",
                  onClick: () => {
                    p.pathname.includes("/news") &&
                      p.query.category &&
                      p.query.article &&
                      (0, c.d4)(window.location.href);
                  },
                  href: "/registration",
                  children: [
                    (0, t.jsx)("div", {
                      className:
                        "pointer-events-none absolute left-0 top-0 z-10 h-full w-full opacity-0 transition duration-300 canhover:group-hover:opacity-100",
                      children: (0, t.jsx)(o(), {
                        src: "/images/gold-button-texture-1.jpg",
                        fill: !0,
                        className: "object-cover",
                        alt: "Gold sheen",
                        sizes: "256px",
                      }),
                    }),
                    (0, t.jsx)("span", {
                      className: "relative z-20",
                      children: "Sign Up",
                    }),
                  ],
                })
              : (0, t.jsx)(l, {}),
          ],
        });
      }
    },
  },
  (e) => {
    (e.O(0, [9950, 5013, 2696, 3357, 3214, 9980, 636, 6593, 8792], () =>
      e((e.s = 68759)),
    ),
      (_N_E = e.O()));
  },
]);
