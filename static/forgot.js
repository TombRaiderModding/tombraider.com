(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9461],
  {
    18074: (e, r, t) => {
      "use strict";
      t.a(e, async (e, s) => {
        try {
          t.d(r, { A: () => d });
          var a = t(2183),
            l = t(36439),
            o = t(49980),
            i = t(80831),
            n = e([o]);
          o = (n.then ? (await n)() : n)[0];
          let c = (0, l.forwardRef)((e, r) => {
            let { children: t, WelcomeSectionProps: s, navItems: l } = e;
            return (0, a.jsx)("main", {
              children: (0, a.jsxs)("div", {
                ref: r,
                className:
                  "relative flex h-svh flex-col items-center overflow-x-hidden",
                children: [
                  (0, a.jsx)(o.Ay, { isSticky: !0, navItems: l }),
                  (0, a.jsx)("div", {
                    className:
                      "flex w-full flex-1 flex-col items-center justify-center",
                    children: (0, a.jsxs)("div", {
                      className: "w-full max-w-7xl px-8 pb-20 pt-8 lg:pt-20",
                      children: [s && (0, a.jsx)(i.A, { ...s }), t],
                    }),
                  }),
                ],
              }),
            });
          });
          c.displayName = "FormWrapper";
          let d = c;
          s();
        } catch (e) {
          s(e);
        }
      });
    },
    25514: (e, r, t) => {
      "use strict";
      t.d(r, { A: () => c });
      var s = t(2183),
        a = t(36439),
        l = t(27811),
        o = t(15013),
        i = t.n(o);
      let n = (0, a.forwardRef)((e, r) => {
        var t;
        let {
            variant: o = "normal",
            label: n,
            error: c,
            helperText: d,
            ...m
          } = e,
          [x, u] = (0, a.useState)(!1);
        return (
          (0, a.useEffect)(() => {
            u(!0);
          }, []),
          (0, s.jsxs)("div", {
            className: c && "text-red-500",
            children: [
              (0, s.jsxs)("span", {
                className: "mb-1 flex items-center",
                children: [
                  (0, s.jsx)("label", {
                    className: "leading-none",
                    children: n,
                  }),
                  x &&
                    d &&
                    (0, s.jsxs)("div", {
                      className: "group relative",
                      children: [
                        (0, s.jsx)(i(), {
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
                        (0, s.jsxs)("div", {
                          "data-popover": !0,
                          id: "popover-default",
                          role: "tooltip",
                          className:
                            "pointer-events-none absolute bottom-[calc(100%+1rem)] -left-20 z-10 inline-block w-52 rounded-lg border border-yellow-500/70 bg-black text-sm text-white opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100 sm:top-0 sm:bottom-auto sm:left-12 sm:w-64",
                          children: [
                            (0, s.jsx)("div", {
                              className: "px-3 py-2",
                              children: (0, s.jsx)("p", { children: d }),
                            }),
                            (0, s.jsx)("div", { "data-popper-arrow": !0 }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
              (0, s.jsx)("input", {
                ...m,
                ref: r,
                className: `w-full border-2 ${((t = `${c ? "border-red-500/40 hover:border-red-500/70 focus:border-red-500/70" : "border-gray-300/20 hover:border-white/50 focus:border-white"} bg-white/20 text-white`), "normal" === o ? t : "border-gray-500/30 bg-gray-800/10 text-black hover:border-gray-800/60 focus:border-gray-800/80")} px-3 py-4 backdrop-blur duration-200 outline-none`,
              }),
              (0, s.jsx)(l.A, { error: c }),
            ],
          })
        );
      });
      n.displayName = "TextField";
      let c = n;
    },
    27811: (e, r, t) => {
      "use strict";
      t.d(r, { A: () => a });
      var s = t(2183);
      function a({ error: e }) {
        return (0, s.jsx)("p", {
          className: "text-red-error mt-1 min-h-5 text-sm",
          children: "string" == typeof e ? e : e?.message?.toString(),
        });
      }
    },
    68833: (e, r, t) => {
      "use strict";
      t.a(e, async (e, s) => {
        try {
          (t.r(r), t.d(r, { __N_SSG: () => p, default: () => f }));
          var a = t(2183),
            l = t(64171),
            o = t(18074),
            i = t(25514),
            n = t(73357),
            c = t(75109),
            d = t(80777),
            m = t(36439),
            x = t(23988),
            u = t(83737),
            h = e([o, c, u]);
          [o, c, u] = h.then ? (await h)() : h;
          var p = !0;
          function f({ navItems: e }) {
            let {
                handleSubmit: r,
                control: t,
                setError: s,
                formState: { errors: h },
              } = (0, d.mN)({
                resolver: (0, n.u)(c.yDN),
                defaultValues: { email: "" },
              }),
              [p, g] = (0, m.useState)(!1),
              { addAlert: v } = (0, x.Z)(),
              w = async (e) => {
                g(!0);
                let r = await u.iC(e);
                if ((g(!1), r.error))
                  switch (r.error.error) {
                    case "InvalidEmailOrPassword":
                    case "AccountNotFound":
                      s("email", { message: r.error.errorMessage });
                      break;
                    default:
                      s("root", { message: r.error.errorMessage });
                  }
                else
                  v({
                    title: "Email sent!",
                    children:
                      "Please check your email for further instructions.",
                  });
              };
            return (0, a.jsx)(o.A, {
              WelcomeSectionProps: {
                title: "Forgot Password",
                children:
                  "Forgot Password? Enter your email below to reset your password.",
              },
              navItems: e,
              children: (0, a.jsxs)("form", {
                onSubmit: r(w),
                autoComplete: "on",
                children: [
                  (0, a.jsx)("div", {
                    className: "mb-4",
                    children: (0, a.jsx)(d.xI, {
                      name: "email",
                      control: t,
                      render: ({ field: e }) =>
                        (0, a.jsx)(i.A, {
                          label: "Email",
                          error: h.email,
                          autoComplete: "email",
                          ...e,
                        }),
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "mt-12",
                    children: (0, a.jsx)(l.A, {
                      loading: p,
                      children: "Send Reset Email",
                    }),
                  }),
                ],
              }),
            });
          }
          s();
        } catch (e) {
          s(e);
        }
      });
    },
    80831: (e, r, t) => {
      "use strict";
      t.d(r, { A: () => m });
      var s = t(2183),
        a = t(15013),
        l = t.n(a);
      function o() {
        return (0, s.jsx)(l(), {
          src: "/images/divider.svg",
          className: "my-12 w-full",
          width: "0",
          height: "0",
          alt: "divider",
          priority: !0,
        });
      }
      var i = t(46728),
        n = t.n(i),
        c = t(31153),
        d = t(43948);
      function m(e) {
        let {
            title: r,
            children: t,
            showSignUp: a,
            textAlign: i,
            largerFont: m,
          } = e,
          x = (0, c.useRouter)();
        return (0, s.jsxs)("div", {
          className: `${i || "text-center"} align-center min-w-0 flex-1 justify-center text-white`,
          children: [
            (0, s.jsx)("h2", {
              className: `${m ? "text-5xl leading-[110%] lg:text-7xl" : "text-5xl"} font-normal tracking-normal drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]`,
              children: r,
            }),
            (0, s.jsx)("p", {
              className: `${m && "text-lg leading-[150%] lg:text-xl"} pt-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]`,
              children: t,
            }),
            a
              ? (0, s.jsxs)(n(), {
                  className:
                    "account_register_cta border-radius-8 group relative mt-12 inline-flex items-center overflow-hidden rounded-lg border-2 border-yellow-500/50 bg-transparent px-6 py-2 text-base text-white transition duration-300 canhover:hover:text-black",
                  onClick: () => {
                    x.pathname.includes("/news") &&
                      x.query.category &&
                      x.query.article &&
                      (0, d.d4)(window.location.href);
                  },
                  href: "/registration",
                  children: [
                    (0, s.jsx)("div", {
                      className:
                        "pointer-events-none absolute left-0 top-0 z-10 h-full w-full opacity-0 transition duration-300 canhover:group-hover:opacity-100",
                      children: (0, s.jsx)(l(), {
                        src: "/images/gold-button-texture-1.jpg",
                        fill: !0,
                        className: "object-cover",
                        alt: "Gold sheen",
                        sizes: "256px",
                      }),
                    }),
                    (0, s.jsx)("span", {
                      className: "relative z-20",
                      children: "Sign Up",
                    }),
                  ],
                })
              : (0, s.jsx)(o, {}),
          ],
        });
      }
    },
    97895: (e, r, t) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/forgot-password",
        function () {
          return t(68833);
        },
      ]);
    },
  },
  (e) => {
    (e.O(0, [9950, 5013, 2696, 3357, 9980, 636, 6593, 8792], () =>
      e((e.s = 97895)),
    ),
      (_N_E = e.O()));
  },
]);
