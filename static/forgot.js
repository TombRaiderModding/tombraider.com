(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [742],
  {
    20522: function (e, r, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/forgot-password",
        function () {
          return t(97492);
        },
      ]);
    },
    44346: function (e, r, t) {
      "use strict";
      t.d(r, {
        Z: function () {
          return ErrorLabel;
        },
      });
      var o = t(97458);
      function ErrorLabel(e) {
        var r;
        let { error: t } = e;
        return (0, o.jsx)("p", {
          className: "text-red-error mt-1 min-h-5 text-sm",
          children:
            "string" == typeof t
              ? t
              : null == t
                ? void 0
                : null === (r = t.message) || void 0 === r
                  ? void 0
                  : r.toString(),
        });
      }
    },
    21748: function (e, r, t) {
      "use strict";
      t.a(e, async function (e, o) {
        try {
          var a = t(97458),
            s = t(52983),
            i = t(87249),
            n = t(7355),
            l = e([i]);
          i = (l.then ? (await l)() : l)[0];
          let c = (0, s.forwardRef)((e, r) => {
            let { children: t, WelcomeSectionProps: o, navItems: s } = e;
            return (0, a.jsx)("main", {
              children: (0, a.jsxs)("div", {
                ref: r,
                className:
                  "relative flex h-svh flex-col items-center overflow-x-hidden",
                children: [
                  (0, a.jsx)(i.ZP, { isSticky: !0, navItems: s }),
                  (0, a.jsx)("div", {
                    className:
                      "flex w-full flex-1 flex-col items-center justify-center",
                    children: (0, a.jsxs)("div", {
                      className: "w-full max-w-7xl px-8 pb-20 pt-8 lg:pt-20",
                      children: [o && (0, a.jsx)(n.Z, { ...o }), t],
                    }),
                  }),
                ],
              }),
            });
          });
          ((c.displayName = "FormWrapper"), (r.Z = c), o());
        } catch (e) {
          o(e);
        }
      });
    },
    13057: function (e, r, t) {
      "use strict";
      var o = t(97458),
        a = t(52983),
        s = t(44346),
        i = t(47681),
        n = t.n(i);
      let l = (0, a.forwardRef)((e, r) => {
        let {
            variant: t = "normal",
            label: i,
            error: l,
            helperText: c,
            ...d
          } = e,
          [u, p] = (0, a.useState)(!1);
        return (
          (0, a.useEffect)(() => {
            p(!0);
          }, []),
          (0, o.jsxs)("div", {
            className: l && "text-red-500",
            children: [
              (0, o.jsxs)("span", {
                className: "mb-1 flex items-center",
                children: [
                  (0, o.jsx)("label", {
                    className: "leading-none",
                    children: i,
                  }),
                  u &&
                    c &&
                    (0, o.jsxs)("div", {
                      className: "group relative",
                      children: [
                        (0, o.jsx)(n(), {
                          alt: "Helper icon",
                          priority: !0,
                          className: "ml-1 h-6 w-6",
                          src:
                            "normal" === t
                              ? "/images/help-white.svg"
                              : "/images/help-black.svg",
                          height: "0",
                          width: "0",
                        }),
                        (0, o.jsxs)("div", {
                          "data-popover": !0,
                          id: "popover-default",
                          role: "tooltip",
                          className:
                            "pointer-events-none absolute -left-20 bottom-[calc(100%+1rem)] z-10 inline-block w-52 rounded-lg border border-yellow-500/70 bg-black text-sm text-white opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100 sm:bottom-auto sm:left-12 sm:top-0 sm:w-64 ",
                          children: [
                            (0, o.jsx)("div", {
                              className: "px-3 py-2",
                              children: (0, o.jsx)("p", { children: c }),
                            }),
                            (0, o.jsx)("div", { "data-popper-arrow": !0 }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
              (0, o.jsx)("input", {
                ...d,
                ref: r,
                className: "w-full border-2 ".concat(
                  "normal" === t
                    ? "".concat(
                        l
                          ? "border-red-500 border-opacity-40 hover:border-red-500 hover:border-opacity-70 focus:border-red-500 focus:border-opacity-70"
                          : "border-gray-300 border-opacity-20 hover:border-white hover:border-opacity-50 focus:border-white focus:border-opacity-100",
                        " bg-white bg-opacity-20 text-white ",
                      )
                    : "border-gray-500 border-opacity-30 bg-gray-800 bg-opacity-10 text-black hover:border-gray-800 hover:border-opacity-60 focus:border-gray-800 focus:border-opacity-80",
                  "   px-3 py-4  outline-none backdrop-blur duration-200",
                ),
              }),
              (0, o.jsx)(s.Z, { error: l }),
            ],
          })
        );
      });
      r.Z = l;
    },
    7355: function (e, r, t) {
      "use strict";
      t.d(r, {
        Z: function () {
          return WelcomeSection;
        },
      });
      var o = t(97458),
        a = t(47681),
        s = t.n(a);
      function Divider() {
        return (0, o.jsx)(s(), {
          src: "/images/divider.svg",
          className: "my-12 w-full",
          width: "0",
          height: "0",
          alt: "divider",
          priority: !0,
        });
      }
      var i = t(10821),
        n = t.n(i),
        l = t(93656),
        c = t(5198);
      function WelcomeSection(e) {
        let {
            title: r,
            children: t,
            showSignUp: a,
            textAlign: i,
            largerFont: d,
          } = e,
          u = (0, l.useRouter)();
        return (0, o.jsxs)("div", {
          className: "".concat(
            i || "text-center",
            " align-center min-w-0 flex-1 justify-center text-white",
          ),
          children: [
            (0, o.jsx)("h2", {
              className: "".concat(
                d ? "text-5xl leading-[110%] lg:text-7xl" : "text-5xl",
                " font-normal tracking-normal drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]",
              ),
              children: r,
            }),
            (0, o.jsx)("p", {
              className: "".concat(
                d && "text-lg leading-[150%] lg:text-xl",
                " pt-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]",
              ),
              children: t,
            }),
            a
              ? (0, o.jsxs)(n(), {
                  className:
                    "account_register_cta border-radius-8 group relative mt-12 inline-flex items-center rounded-lg border-2 border-yellow-500 border-opacity-50 bg-transparent px-6 py-2 text-base text-white transition duration-300 canhover:hover:border-opacity-90 canhover:hover:text-black",
                  onClick: () => {
                    u.pathname.includes("/news") &&
                      u.query.category &&
                      u.query.article &&
                      (0, c.OR)(window.location.href);
                  },
                  href: "/registration",
                  children: [
                    (0, o.jsx)("div", {
                      className:
                        "pointer-events-none absolute left-0 top-0 z-10 h-full w-full overflow-hidden border-transparent opacity-0 shadow-[0_0px_15px_0px_#F1C662] transition duration-300 canhover:group-hover:opacity-100",
                      children: (0, o.jsx)(s(), {
                        src: "/images/gold-button-texture-1.jpg",
                        fill: !0,
                        className: "object-cover",
                        alt: "Gold sheen",
                        sizes: "256px",
                      }),
                    }),
                    (0, o.jsx)("span", {
                      className:
                        "relative z-20 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]",
                      children: "Sign Up",
                    }),
                  ],
                })
              : (0, o.jsx)(Divider, {}),
          ],
        });
      }
    },
    97492: function (e, r, t) {
      "use strict";
      t.a(e, async function (e, o) {
        try {
          (t.r(r),
            t.d(r, {
              __N_SSG: function () {
                return x;
              },
              default: function () {
                return ForgotPassword;
              },
            }));
          var a = t(97458),
            s = t(75443),
            i = t(21748),
            n = t(13057),
            l = t(81581),
            c = t(96061),
            d = t(86848),
            u = t(52983),
            p = t(77765),
            h = t(82262),
            m = e([i, c, h]);
          [i, c, h] = m.then ? (await m)() : m;
          var x = !0;
          function ForgotPassword(e) {
            let { navItems: r } = e,
              {
                handleSubmit: t,
                control: o,
                setError: m,
                formState: { errors: x },
              } = (0, d.cI)({
                resolver: (0, l.F)(c.hOb),
                defaultValues: { email: "" },
              }),
              [f, b] = (0, u.useState)(!1),
              { addAlert: g } = (0, p.Z)(),
              handleForgotPassword = async (e) => {
                b(!0);
                let r = await h.BL(e);
                if ((b(!1), r.error))
                  switch (r.error.error) {
                    case "InvalidEmailOrPassword":
                    case "AccountNotFound":
                      m("email", { message: r.error.errorMessage });
                      break;
                    default:
                      m("root", { message: r.error.errorMessage });
                  }
                else
                  g({
                    title: "Email sent!",
                    children:
                      "Please check your email for further instructions.",
                  });
              };
            return (0, a.jsx)(i.Z, {
              WelcomeSectionProps: {
                title: "Forgot Password",
                children:
                  "Forgot Password? Enter your email below to reset your password.",
              },
              navItems: r,
              children: (0, a.jsxs)("form", {
                onSubmit: t(handleForgotPassword),
                autoComplete: "on",
                children: [
                  (0, a.jsx)("div", {
                    className: "mb-4",
                    children: (0, a.jsx)(d.Qr, {
                      name: "email",
                      control: o,
                      render: (e) => {
                        let { field: r } = e;
                        return (0, a.jsx)(n.Z, {
                          label: "Email",
                          error: x.email,
                          autoComplete: "email",
                          ...r,
                        });
                      },
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "mt-12",
                    children: (0, a.jsx)(s.Z, {
                      loading: f,
                      children: "Send Reset Email",
                    }),
                  }),
                ],
              }),
            });
          }
          o();
        } catch (e) {
          o(e);
        }
      });
    },
  },
  function (e) {
    (e.O(0, [46, 681, 882, 696, 249, 774, 888, 179], function () {
      return e((e.s = 20522));
    }),
      (_N_E = e.O()));
  },
]);
