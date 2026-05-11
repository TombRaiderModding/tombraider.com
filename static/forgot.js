(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9461],
  {
    7674: (e, r, t) => {
      "use strict";
      t.d(r, { A: () => m });
      var a = t(2183),
        s = t(96006),
        l = t.n(s);
      function o() {
        return (0, a.jsx)(l(), {
          src: "/images/divider.svg",
          className: "my-12 w-full",
          width: "0",
          height: "0",
          alt: "divider",
          priority: !0,
        });
      }
      var i = t(11677),
        n = t.n(i),
        c = t(18652),
        d = t(608);
      function m(e) {
        let {
            title: r,
            children: t,
            showSignUp: s,
            textAlign: i,
            largerFont: m,
          } = e,
          u = (0, c.useRouter)();
        return (0, a.jsxs)("div", {
          className: "".concat(
            i || "text-center",
            " align-center min-w-0 flex-1 justify-center text-white",
          ),
          children: [
            (0, a.jsx)("h2", {
              className: "".concat(
                m ? "text-5xl leading-[110%] lg:text-7xl" : "text-5xl",
                " font-normal tracking-normal drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]",
              ),
              children: r,
            }),
            (0, a.jsx)("p", {
              className: "".concat(
                m && "text-lg leading-[150%] lg:text-xl",
                " pt-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]",
              ),
              children: t,
            }),
            s
              ? (0, a.jsxs)(n(), {
                  className:
                    "account_register_cta border-radius-8 group relative mt-12 inline-flex items-center overflow-hidden rounded-lg border-2 border-yellow-500/50 bg-transparent px-6 py-2 text-base text-white transition duration-300 canhover:hover:text-black",
                  onClick: () => {
                    u.pathname.includes("/news") &&
                      u.query.category &&
                      u.query.article &&
                      (0, d.d4)(window.location.href);
                  },
                  href: "/registration",
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "pointer-events-none absolute left-0 top-0 z-10 h-full w-full opacity-0 transition duration-300 canhover:group-hover:opacity-100",
                      children: (0, a.jsx)(l(), {
                        src: "/images/gold-button-texture-1.jpg",
                        fill: !0,
                        className: "object-cover",
                        alt: "Gold sheen",
                        sizes: "256px",
                      }),
                    }),
                    (0, a.jsx)("span", {
                      className: "relative z-20",
                      children: "Sign Up",
                    }),
                  ],
                })
              : (0, a.jsx)(o, {}),
          ],
        });
      }
    },
    11789: (e, r, t) => {
      "use strict";
      t.a(e, async (e, a) => {
        try {
          (t.r(r), t.d(r, { __N_SSG: () => p, default: () => f }));
          var s = t(2183),
            l = t(15711),
            o = t(39334),
            i = t(40502),
            n = t(73357),
            c = t(75109),
            d = t(80777),
            m = t(36439),
            u = t(77752),
            x = t(55109),
            h = e([o, c, x]);
          [o, c, x] = h.then ? (await h)() : h;
          var p = !0;
          function f(e) {
            let { navItems: r } = e,
              {
                handleSubmit: t,
                control: a,
                setError: h,
                formState: { errors: p },
              } = (0, d.mN)({
                resolver: (0, n.u)(c.yDN),
                defaultValues: { email: "" },
              }),
              [f, g] = (0, m.useState)(!1),
              { addAlert: v } = (0, u.Z)(),
              w = async (e) => {
                g(!0);
                let r = await x.iC(e);
                if ((g(!1), r.error))
                  switch (r.error.error) {
                    case "InvalidEmailOrPassword":
                    case "AccountNotFound":
                      h("email", { message: r.error.errorMessage });
                      break;
                    default:
                      h("root", { message: r.error.errorMessage });
                  }
                else
                  v({
                    title: "Email sent!",
                    children:
                      "Please check your email for further instructions.",
                  });
              };
            return (0, s.jsx)(o.A, {
              WelcomeSectionProps: {
                title: "Forgot Password",
                children:
                  "Forgot Password? Enter your email below to reset your password.",
              },
              navItems: r,
              children: (0, s.jsxs)("form", {
                onSubmit: t(w),
                autoComplete: "on",
                children: [
                  (0, s.jsx)("div", {
                    className: "mb-4",
                    children: (0, s.jsx)(d.xI, {
                      name: "email",
                      control: a,
                      render: (e) => {
                        let { field: r } = e;
                        return (0, s.jsx)(i.A, {
                          label: "Email",
                          error: p.email,
                          autoComplete: "email",
                          ...r,
                        });
                      },
                    }),
                  }),
                  (0, s.jsx)("div", {
                    className: "mt-12",
                    children: (0, s.jsx)(l.A, {
                      loading: f,
                      children: "Send Reset Email",
                    }),
                  }),
                ],
              }),
            });
          }
          a();
        } catch (e) {
          a(e);
        }
      });
    },
    39334: (e, r, t) => {
      "use strict";
      t.a(e, async (e, a) => {
        try {
          t.d(r, { A: () => d });
          var s = t(2183),
            l = t(36439),
            o = t(95216),
            i = t(7674),
            n = e([o]);
          o = (n.then ? (await n)() : n)[0];
          let c = (0, l.forwardRef)((e, r) => {
            let { children: t, WelcomeSectionProps: a, navItems: l } = e;
            return (0, s.jsx)("main", {
              children: (0, s.jsxs)("div", {
                ref: r,
                className:
                  "relative flex h-svh flex-col items-center overflow-x-hidden",
                children: [
                  (0, s.jsx)(o.Ay, { isSticky: !0, navItems: l }),
                  (0, s.jsx)("div", {
                    className:
                      "flex w-full flex-1 flex-col items-center justify-center",
                    children: (0, s.jsxs)("div", {
                      className: "w-full max-w-7xl px-8 pb-20 pt-8 lg:pt-20",
                      children: [a && (0, s.jsx)(i.A, { ...a }), t],
                    }),
                  }),
                ],
              }),
            });
          });
          c.displayName = "FormWrapper";
          let d = c;
          a();
        } catch (e) {
          a(e);
        }
      });
    },
    40502: (e, r, t) => {
      "use strict";
      t.d(r, { A: () => c });
      var a = t(2183),
        s = t(36439),
        l = t(67895),
        o = t(96006),
        i = t.n(o);
      let n = (0, s.forwardRef)((e, r) => {
        var t;
        let {
            variant: o = "normal",
            label: n,
            error: c,
            helperText: d,
            ...m
          } = e,
          [u, x] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            x(!0);
          }, []),
          (0, a.jsxs)("div", {
            className: c && "text-red-500",
            children: [
              (0, a.jsxs)("span", {
                className: "mb-1 flex items-center",
                children: [
                  (0, a.jsx)("label", {
                    className: "leading-none",
                    children: n,
                  }),
                  u &&
                    d &&
                    (0, a.jsxs)("div", {
                      className: "group relative",
                      children: [
                        (0, a.jsx)(i(), {
                          alt: "Helper icon",
                          priority: !0,
                          className: "ml-1 h-6 w-6",
                          src:
                            "normal" === o
                              ? "/images/help-white.svg"
                              : "/images/help-black.svg",
                          height: "0",
                          width: "0",
                        }),
                        (0, a.jsxs)("div", {
                          "data-popover": !0,
                          id: "popover-default",
                          role: "tooltip",
                          className:
                            "pointer-events-none absolute bottom-[calc(100%+1rem)] -left-20 z-10 inline-block w-52 rounded-lg border border-yellow-500/70 bg-black text-sm text-white opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100 sm:top-0 sm:bottom-auto sm:left-12 sm:w-64",
                          children: [
                            (0, a.jsx)("div", {
                              className: "px-3 py-2",
                              children: (0, a.jsx)("p", { children: d }),
                            }),
                            (0, a.jsx)("div", { "data-popper-arrow": !0 }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
              (0, a.jsx)("input", {
                ...m,
                ref: r,
                className: "w-full border-2 ".concat(
                  ((t = "".concat(
                    c
                      ? "border-red-500/40 hover:border-red-500/70 focus:border-red-500/70"
                      : "border-gray-300/20 hover:border-white/50 focus:border-white",
                    " bg-white/20 text-white",
                  )),
                  "normal" === o
                    ? t
                    : "border-gray-500/30 bg-gray-800/10 text-black hover:border-gray-800/60 focus:border-gray-800/80"),
                  " px-3 py-4 backdrop-blur duration-200 outline-none",
                ),
              }),
              (0, a.jsx)(l.A, { error: c }),
            ],
          })
        );
      });
      n.displayName = "TextField";
      let c = n;
    },
    67895: (e, r, t) => {
      "use strict";
      t.d(r, { A: () => s });
      var a = t(2183);
      function s(e) {
        var r;
        let { error: t } = e;
        return (0, a.jsx)("p", {
          className: "text-red-error mt-1 min-h-5 text-sm",
          children:
            "string" == typeof t
              ? t
              : null == t || null == (r = t.message)
                ? void 0
                : r.toString(),
        });
      }
    },
    92058: (e, r, t) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/forgot-password",
        function () {
          return t(11789);
        },
      ]);
    },
  },
  (e) => {
    (e.O(0, [9950, 6006, 1433, 3357, 5216, 636, 6593, 8792], () =>
      e((e.s = 92058)),
    ),
      (_N_E = e.O()));
  },
]);
