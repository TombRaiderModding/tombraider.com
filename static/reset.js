(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6],
  {
    69506: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/reset-password",
        function () {
          return r(28832);
        },
      ]);
    },
    1518: function (e, t) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "createAsyncLocalStorage", {
          enumerable: !0,
          get: function () {
            return createAsyncLocalStorage;
          },
        }));
      let r = Error(
        "Invariant: AsyncLocalStorage accessed in runtime where it is not available",
      );
      let FakeAsyncLocalStorage = class FakeAsyncLocalStorage {
        disable() {
          throw r;
        }
        getStore() {}
        run() {
          throw r;
        }
        exit() {
          throw r;
        }
        enterWith() {
          throw r;
        }
      };
      let o = globalThis.AsyncLocalStorage;
      function createAsyncLocalStorage() {
        return o ? new o() : new FakeAsyncLocalStorage();
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    94734: function (e, t, r) {
      "use strict";
      function clientHookInServerComponentError(e) {}
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "clientHookInServerComponentError", {
          enumerable: !0,
          get: function () {
            return clientHookInServerComponentError;
          },
        }),
        r(83166),
        r(52983),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default)));
    },
    1279: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          ReadonlyURLSearchParams: function () {
            return ReadonlyURLSearchParams;
          },
          useSearchParams: function () {
            return useSearchParams;
          },
          usePathname: function () {
            return usePathname;
          },
          ServerInsertedHTMLContext: function () {
            return u.ServerInsertedHTMLContext;
          },
          useServerInsertedHTML: function () {
            return u.useServerInsertedHTML;
          },
          useRouter: function () {
            return useRouter;
          },
          useParams: function () {
            return useParams;
          },
          useSelectedLayoutSegments: function () {
            return useSelectedLayoutSegments;
          },
          useSelectedLayoutSegment: function () {
            return useSelectedLayoutSegment;
          },
          redirect: function () {
            return l.redirect;
          },
          permanentRedirect: function () {
            return l.permanentRedirect;
          },
          RedirectType: function () {
            return l.RedirectType;
          },
          notFound: function () {
            return c.notFound;
          },
        }));
      let o = r(52983),
        n = r(1706),
        a = r(7019),
        s = r(94734),
        i = r(56251),
        u = r(88840),
        l = r(72952),
        c = r(38194),
        d = Symbol("internal for urlsearchparams readonly");
      function readonlyURLSearchParamsError() {
        return Error("ReadonlyURLSearchParams cannot be modified");
      }
      let ReadonlyURLSearchParams = class ReadonlyURLSearchParams {
        [Symbol.iterator]() {
          return this[d][Symbol.iterator]();
        }
        append() {
          throw readonlyURLSearchParamsError();
        }
        delete() {
          throw readonlyURLSearchParamsError();
        }
        set() {
          throw readonlyURLSearchParamsError();
        }
        sort() {
          throw readonlyURLSearchParamsError();
        }
        constructor(e) {
          ((this[d] = e),
            (this.entries = e.entries.bind(e)),
            (this.forEach = e.forEach.bind(e)),
            (this.get = e.get.bind(e)),
            (this.getAll = e.getAll.bind(e)),
            (this.has = e.has.bind(e)),
            (this.keys = e.keys.bind(e)),
            (this.values = e.values.bind(e)),
            (this.toString = e.toString.bind(e)),
            (this.size = e.size));
        }
      };
      function useSearchParams() {
        (0, s.clientHookInServerComponentError)("useSearchParams");
        let e = (0, o.useContext)(a.SearchParamsContext),
          t = (0, o.useMemo)(
            () => (e ? new ReadonlyURLSearchParams(e) : null),
            [e],
          );
        return t;
      }
      function usePathname() {
        return (
          (0, s.clientHookInServerComponentError)("usePathname"),
          (0, o.useContext)(a.PathnameContext)
        );
      }
      function useRouter() {
        (0, s.clientHookInServerComponentError)("useRouter");
        let e = (0, o.useContext)(n.AppRouterContext);
        if (null === e)
          throw Error("invariant expected app router to be mounted");
        return e;
      }
      function useParams() {
        (0, s.clientHookInServerComponentError)("useParams");
        let e = (0, o.useContext)(n.GlobalLayoutRouterContext),
          t = (0, o.useContext)(a.PathParamsContext);
        return (0, o.useMemo)(
          () =>
            (null == e ? void 0 : e.tree)
              ? (function getSelectedParams(e, t) {
                  void 0 === t && (t = {});
                  let r = e[1];
                  for (let e of Object.values(r)) {
                    let r = e[0],
                      o = Array.isArray(r),
                      n = o ? r[1] : r;
                    if (!n || n.startsWith("__PAGE__")) continue;
                    let a = o && ("c" === r[2] || "oc" === r[2]);
                    (a ? (t[r[0]] = r[1].split("/")) : o && (t[r[0]] = r[1]),
                      (t = getSelectedParams(e, t)));
                  }
                  return t;
                })(e.tree)
              : t,
          [null == e ? void 0 : e.tree, t],
        );
      }
      function useSelectedLayoutSegments(e) {
        (void 0 === e && (e = "children"),
          (0, s.clientHookInServerComponentError)("useSelectedLayoutSegments"));
        let { tree: t } = (0, o.useContext)(n.LayoutRouterContext);
        return (function getSelectedLayoutSegmentPath(e, t, r, o) {
          let n;
          if ((void 0 === r && (r = !0), void 0 === o && (o = []), r))
            n = e[1][t];
          else {
            var a;
            let t = e[1];
            n = null != (a = t.children) ? a : Object.values(t)[0];
          }
          if (!n) return o;
          let s = n[0],
            u = (0, i.getSegmentValue)(s);
          return !u || u.startsWith("__PAGE__")
            ? o
            : (o.push(u), getSelectedLayoutSegmentPath(n, t, !1, o));
        })(t, e);
      }
      function useSelectedLayoutSegment(e) {
        (void 0 === e && (e = "children"),
          (0, s.clientHookInServerComponentError)("useSelectedLayoutSegment"));
        let t = useSelectedLayoutSegments(e);
        return 0 === t.length ? null : t[0];
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    38194: function (e, t) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          notFound: function () {
            return notFound;
          },
          isNotFoundError: function () {
            return isNotFoundError;
          },
        }));
      let r = "NEXT_NOT_FOUND";
      function notFound() {
        let e = Error(r);
        throw ((e.digest = r), e);
      }
      function isNotFoundError(e) {
        return (null == e ? void 0 : e.digest) === r;
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    72952: function (e, t, r) {
      "use strict";
      var o, n;
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          RedirectType: function () {
            return o;
          },
          getRedirectError: function () {
            return getRedirectError;
          },
          redirect: function () {
            return redirect;
          },
          permanentRedirect: function () {
            return permanentRedirect;
          },
          isRedirectError: function () {
            return isRedirectError;
          },
          getURLFromRedirectError: function () {
            return getURLFromRedirectError;
          },
          getRedirectTypeFromError: function () {
            return getRedirectTypeFromError;
          },
        }));
      let a = r(5244),
        s = "NEXT_REDIRECT";
      function getRedirectError(e, t, r) {
        void 0 === r && (r = !1);
        let o = Error(s);
        o.digest = s + ";" + t + ";" + e + ";" + r;
        let n = a.requestAsyncStorage.getStore();
        return (n && (o.mutableCookies = n.mutableCookies), o);
      }
      function redirect(e, t) {
        throw (void 0 === t && (t = "replace"), getRedirectError(e, t, !1));
      }
      function permanentRedirect(e, t) {
        throw (void 0 === t && (t = "replace"), getRedirectError(e, t, !0));
      }
      function isRedirectError(e) {
        if ("string" != typeof (null == e ? void 0 : e.digest)) return !1;
        let [t, r, o, n] = e.digest.split(";", 4);
        return (
          t === s &&
          ("replace" === r || "push" === r) &&
          "string" == typeof o &&
          ("true" === n || "false" === n)
        );
      }
      function getURLFromRedirectError(e) {
        return isRedirectError(e) ? e.digest.split(";", 3)[2] : null;
      }
      function getRedirectTypeFromError(e) {
        if (!isRedirectError(e)) throw Error("Not a redirect error");
        return e.digest.split(";", 3)[1];
      }
      (((n = o || (o = {})).push = "push"),
        (n.replace = "replace"),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default)));
    },
    5244: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "requestAsyncStorage", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }));
      let o = r(1518),
        n = (0, o.createAsyncLocalStorage)();
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    56251: function (e, t) {
      "use strict";
      function getSegmentValue(e) {
        return Array.isArray(e) ? e[1] : e;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getSegmentValue", {
          enumerable: !0,
          get: function () {
            return getSegmentValue;
          },
        }),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default)));
    },
    88840: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          ServerInsertedHTMLContext: function () {
            return a;
          },
          useServerInsertedHTML: function () {
            return useServerInsertedHTML;
          },
        }));
      let o = r(44925),
        n = o._(r(52983)),
        a = n.default.createContext(null);
      function useServerInsertedHTML(e) {
        let t = (0, n.useContext)(a);
        t && t(e);
      }
    },
    44346: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return ErrorLabel;
        },
      });
      var o = r(97458);
      function ErrorLabel(e) {
        var t;
        let { error: r } = e;
        return (0, o.jsx)("p", {
          className: "text-red-error mt-1 min-h-5 text-sm",
          children:
            "string" == typeof r
              ? r
              : null == r
                ? void 0
                : null === (t = r.message) || void 0 === t
                  ? void 0
                  : t.toString(),
        });
      }
    },
    21748: function (e, t, r) {
      "use strict";
      r.a(e, async function (e, o) {
        try {
          var n = r(97458),
            a = r(52983),
            s = r(87249),
            i = r(7355),
            u = e([s]);
          s = (u.then ? (await u)() : u)[0];
          let l = (0, a.forwardRef)((e, t) => {
            let { children: r, WelcomeSectionProps: o, navItems: a } = e;
            return (0, n.jsx)("main", {
              children: (0, n.jsxs)("div", {
                ref: t,
                className:
                  "relative flex h-svh flex-col items-center overflow-x-hidden",
                children: [
                  (0, n.jsx)(s.ZP, { isSticky: !0, navItems: a }),
                  (0, n.jsx)("div", {
                    className:
                      "flex w-full flex-1 flex-col items-center justify-center",
                    children: (0, n.jsxs)("div", {
                      className: "w-full max-w-7xl px-8 pb-20 pt-8 lg:pt-20",
                      children: [o && (0, n.jsx)(i.Z, { ...o }), r],
                    }),
                  }),
                ],
              }),
            });
          });
          ((l.displayName = "FormWrapper"), (t.Z = l), o());
        } catch (e) {
          o(e);
        }
      });
    },
    13057: function (e, t, r) {
      "use strict";
      var o = r(97458),
        n = r(52983),
        a = r(44346),
        s = r(47681),
        i = r.n(s);
      let u = (0, n.forwardRef)((e, t) => {
        let {
            variant: r = "normal",
            label: s,
            error: u,
            helperText: l,
            ...c
          } = e,
          [d, f] = (0, n.useState)(!1);
        return (
          (0, n.useEffect)(() => {
            f(!0);
          }, []),
          (0, o.jsxs)("div", {
            className: u && "text-red-500",
            children: [
              (0, o.jsxs)("span", {
                className: "mb-1 flex items-center",
                children: [
                  (0, o.jsx)("label", {
                    className: "leading-none",
                    children: s,
                  }),
                  d &&
                    l &&
                    (0, o.jsxs)("div", {
                      className: "group relative",
                      children: [
                        (0, o.jsx)(i(), {
                          alt: "Helper icon",
                          priority: !0,
                          className: "ml-1 h-6 w-6",
                          src:
                            "normal" === r
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
                              children: (0, o.jsx)("p", { children: l }),
                            }),
                            (0, o.jsx)("div", { "data-popper-arrow": !0 }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
              (0, o.jsx)("input", {
                ...c,
                ref: t,
                className: "w-full border-2 ".concat(
                  "normal" === r
                    ? "".concat(
                        u
                          ? "border-red-500 border-opacity-40 hover:border-red-500 hover:border-opacity-70 focus:border-red-500 focus:border-opacity-70"
                          : "border-gray-300 border-opacity-20 hover:border-white hover:border-opacity-50 focus:border-white focus:border-opacity-100",
                        " bg-white bg-opacity-20 text-white ",
                      )
                    : "border-gray-500 border-opacity-30 bg-gray-800 bg-opacity-10 text-black hover:border-gray-800 hover:border-opacity-60 focus:border-gray-800 focus:border-opacity-80",
                  "   px-3 py-4  outline-none backdrop-blur duration-200",
                ),
              }),
              (0, o.jsx)(a.Z, { error: u }),
            ],
          })
        );
      });
      t.Z = u;
    },
    7355: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return WelcomeSection;
        },
      });
      var o = r(97458),
        n = r(47681),
        a = r.n(n);
      function Divider() {
        return (0, o.jsx)(a(), {
          src: "/images/divider.svg",
          className: "my-12 w-full",
          width: "0",
          height: "0",
          alt: "divider",
          priority: !0,
        });
      }
      var s = r(10821),
        i = r.n(s),
        u = r(93656),
        l = r(5198);
      function WelcomeSection(e) {
        let {
            title: t,
            children: r,
            showSignUp: n,
            textAlign: s,
            largerFont: c,
          } = e,
          d = (0, u.useRouter)();
        return (0, o.jsxs)("div", {
          className: "".concat(
            s || "text-center",
            " align-center min-w-0 flex-1 justify-center text-white",
          ),
          children: [
            (0, o.jsx)("h2", {
              className: "".concat(
                c ? "text-5xl leading-[110%] lg:text-7xl" : "text-5xl",
                " font-normal tracking-normal drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]",
              ),
              children: t,
            }),
            (0, o.jsx)("p", {
              className: "".concat(
                c && "text-lg leading-[150%] lg:text-xl",
                " pt-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]",
              ),
              children: r,
            }),
            n
              ? (0, o.jsxs)(i(), {
                  className:
                    "account_register_cta border-radius-8 group relative mt-12 inline-flex items-center rounded-lg border-2 border-yellow-500 border-opacity-50 bg-transparent px-6 py-2 text-base text-white transition duration-300 canhover:hover:border-opacity-90 canhover:hover:text-black",
                  onClick: () => {
                    d.pathname.includes("/news") &&
                      d.query.category &&
                      d.query.article &&
                      (0, l.OR)(window.location.href);
                  },
                  href: "/registration",
                  children: [
                    (0, o.jsx)("div", {
                      className:
                        "pointer-events-none absolute left-0 top-0 z-10 h-full w-full overflow-hidden border-transparent opacity-0 shadow-[0_0px_15px_0px_#F1C662] transition duration-300 canhover:group-hover:opacity-100",
                      children: (0, o.jsx)(a(), {
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
    28832: function (e, t, r) {
      "use strict";
      r.a(e, async function (e, o) {
        try {
          (r.r(t),
            r.d(t, {
              __N_SSG: function () {
                return b;
              },
              default: function () {
                return ResetPassword;
              },
            }));
          var n = r(97458),
            a = r(75443),
            s = r(21748),
            i = r(13057),
            u = r(81581),
            l = r(86848),
            c = r(69584),
            d = r(8999),
            f = r(52983),
            p = r(93656),
            m = r(77765),
            h = r(82262),
            y = r(44346),
            g = e([s, h]);
          [s, h] = g.then ? (await g)() : g;
          var b = !0;
          function ResetPassword(e) {
            let { websiteSingleton: t, navItems: r } = e,
              o = (0, d.useSearchParams)(),
              g = null == o ? void 0 : o.get("token"),
              b = null == o ? void 0 : o.get("errorCode"),
              {
                handleSubmit: v,
                control: x,
                formState: { errors: w },
              } = (0, l.cI)({
                resolver: (0, u.F)(c.S),
                defaultValues: { password: "", confirmPassword: "" },
              }),
              S = (0, p.useRouter)(),
              [_, j] = (0, f.useState)(!1),
              [P, R] = (0, f.useState)(void 0);
            (0, f.useEffect)(() => {
              b &&
                R(
                  "Something went wrong with the link you used. Please try sending another email.",
                );
            }, [b]);
            let { addAlert: E } = (0, m.Z)(),
              handleForgotPassword = async (e) => {
                if (!g) {
                  if (b) return;
                  R(
                    "Token is missing in URL. Please use the link from your email to reset your password.",
                  );
                  return;
                }
                R(void 0);
                let t = { password: e.password, token: g };
                j(!0);
                let r = await h.c0(t);
                (j(!1),
                  r.error
                    ? R(r.error.errorMessage)
                    : (E({
                        title: "Password Successfully Reset",
                        children: "Your password has successfully been reset!",
                      }),
                      S.replace("/login")));
              };
            return (0, n.jsx)(s.Z, {
              WelcomeSectionProps: {
                title: t.resetPasswordTitle,
                children: t.resetPasswordDescription,
              },
              navItems: r,
              children: (0, n.jsxs)("form", {
                onSubmit: v(handleForgotPassword),
                autoComplete: "on",
                children: [
                  (0, n.jsx)("div", {
                    className: "mb-4",
                    children: (0, n.jsx)(l.Qr, {
                      name: "password",
                      control: x,
                      render: (e) => {
                        let { field: t } = e;
                        return (0, n.jsx)(i.Z, {
                          type: "password",
                          label: "Password",
                          error: w.password,
                          autoComplete: "new-password",
                          ...t,
                        });
                      },
                    }),
                  }),
                  (0, n.jsx)("div", {
                    className: "mb-4",
                    children: (0, n.jsx)(l.Qr, {
                      name: "confirmPassword",
                      control: x,
                      render: (e) => {
                        let { field: t } = e;
                        return (0, n.jsx)(i.Z, {
                          type: "password",
                          label: "Confirm Password",
                          autoComplete: "new-password",
                          error: w.confirmPassword,
                          ...t,
                        });
                      },
                    }),
                  }),
                  (0, n.jsxs)("div", {
                    className: "mt-12",
                    children: [
                      (0, n.jsx)(a.Z, {
                        loading: _,
                        children: "Reset Password",
                      }),
                      (0, n.jsx)(y.Z, { error: P }),
                    ],
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
    69584: function (e, t, r) {
      "use strict";
      r.d(t, {
        S: function () {
          return n;
        },
      });
      var o = r(1850);
      let n = o.z
        .object({
          password: o.z
            .string()
            .max(100, "Password is at most 100 characters")
            .min(6),
          confirmPassword: o.z
            .string()
            .max(100, "Password is at most 100 characters")
            .min(6),
        })
        .refine((e) => e.password === e.confirmPassword, {
          message: "Passwords don't match",
          path: ["confirmPassword"],
        });
    },
    8999: function (e, t, r) {
      e.exports = r(1279);
    },
  },
  function (e) {
    (e.O(0, [46, 681, 882, 696, 249, 774, 888, 179], function () {
      return e((e.s = 69506));
    }),
      (_N_E = e.O()));
  },
]);
