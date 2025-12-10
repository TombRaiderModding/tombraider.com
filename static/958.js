(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [958],
  {
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
            return s.ServerInsertedHTMLContext;
          },
          useServerInsertedHTML: function () {
            return s.useServerInsertedHTML;
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
            return c.redirect;
          },
          permanentRedirect: function () {
            return c.permanentRedirect;
          },
          RedirectType: function () {
            return c.RedirectType;
          },
          notFound: function () {
            return u.notFound;
          },
        }));
      let o = r(52983),
        n = r(1706),
        a = r(7019),
        l = r(94734),
        i = r(56251),
        s = r(88840),
        c = r(72952),
        u = r(38194),
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
        (0, l.clientHookInServerComponentError)("useSearchParams");
        let e = (0, o.useContext)(a.SearchParamsContext),
          t = (0, o.useMemo)(
            () => (e ? new ReadonlyURLSearchParams(e) : null),
            [e],
          );
        return t;
      }
      function usePathname() {
        return (
          (0, l.clientHookInServerComponentError)("usePathname"),
          (0, o.useContext)(a.PathnameContext)
        );
      }
      function useRouter() {
        (0, l.clientHookInServerComponentError)("useRouter");
        let e = (0, o.useContext)(n.AppRouterContext);
        if (null === e)
          throw Error("invariant expected app router to be mounted");
        return e;
      }
      function useParams() {
        (0, l.clientHookInServerComponentError)("useParams");
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
          (0, l.clientHookInServerComponentError)("useSelectedLayoutSegments"));
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
          let l = n[0],
            s = (0, i.getSegmentValue)(l);
          return !s || s.startsWith("__PAGE__")
            ? o
            : (o.push(s), getSelectedLayoutSegmentPath(n, t, !1, o));
        })(t, e);
      }
      function useSelectedLayoutSegment(e) {
        (void 0 === e && (e = "children"),
          (0, l.clientHookInServerComponentError)("useSelectedLayoutSegment"));
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
        l = "NEXT_REDIRECT";
      function getRedirectError(e, t, r) {
        void 0 === r && (r = !1);
        let o = Error(l);
        o.digest = l + ";" + t + ";" + e + ";" + r;
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
          t === l &&
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
            l = r(87249),
            i = r(7355),
            s = e([l]);
          l = (s.then ? (await s)() : s)[0];
          let c = (0, a.forwardRef)((e, t) => {
            let { children: r, WelcomeSectionProps: o, navItems: a } = e;
            return (0, n.jsx)("main", {
              children: (0, n.jsxs)("div", {
                ref: t,
                className:
                  "relative flex h-svh flex-col items-center overflow-x-hidden",
                children: [
                  (0, n.jsx)(l.ZP, { isSticky: !0, navItems: a }),
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
          ((c.displayName = "FormWrapper"), (t.Z = c), o());
        } catch (e) {
          o(e);
        }
      });
    },
    10407: function (e, t, r) {
      "use strict";
      r.d(t, {
        H: function () {
          return PaperFrameImage;
        },
      });
      var o = r(97458);
      r(52983);
      var n = r(47681),
        a = r.n(n);
      function PaperFrameImage(e) {
        let {
            src: t,
            alt: r,
            width: n,
            height: l,
            priority: i = !1,
            rotateClass: s = "",
            className: c = "",
            objectFitClass: u = "object-contain",
            shadow: d = !0,
          } = e,
          f = "square",
          p = "aspect-square",
          m = "scale-100";
        if (n && l) {
          let e = n / l;
          0.1 > Math.abs(e - 1)
            ? ((f = "square"),
              (p = "aspect-square w-full"),
              (m = "lg:scale-90"))
            : e > 1
              ? ((f = "landscape"), (p = "aspect-[3/2] w-full"))
              : ((f = "portrait"),
                (p = "aspect-[2/3] h-full max-h-[50vh] lg:max-h-[500px]"));
        }
        return (0, o.jsxs)("div", {
          className: "relative "
            .concat(p, " ")
            .concat(m, " ")
            .concat(s, " ")
            .concat(c),
          children: [
            (0, o.jsx)("div", {
              className: "relative z-20 h-full w-full",
              children: (0, o.jsx)(a(), {
                src: t,
                alt: r,
                fill: !0,
                priority: i,
                sizes: "(max-width: 1024px) 100vw, 50vw",
                className: "relative z-20 ".concat(u, " p-2.5"),
              }),
            }),
            (0, o.jsx)(a(), {
              className:
                "pointer-events-none absolute inset-0 z-30 object-contain",
              src: "/images/welcome/paper/".concat(f, "-paper-frame.png"),
              alt: "A paper frame around the image",
              priority: i,
              fill: !0,
              sizes: "(max-width: 1024px) 100vw, 50vw",
            }),
            d &&
              (0, o.jsx)("div", {
                className: "".concat(
                  p,
                  " absolute -bottom-4 left-1/2 h-full -translate-x-1/2 bg-black opacity-60 blur-lg",
                ),
              }),
          ],
        });
      }
    },
    13057: function (e, t, r) {
      "use strict";
      var o = r(97458),
        n = r(52983),
        a = r(44346),
        l = r(47681),
        i = r.n(l);
      let s = (0, n.forwardRef)((e, t) => {
        let {
            variant: r = "normal",
            label: l,
            error: s,
            helperText: c,
            ...u
          } = e,
          [d, f] = (0, n.useState)(!1);
        return (
          (0, n.useEffect)(() => {
            f(!0);
          }, []),
          (0, o.jsxs)("div", {
            className: s && "text-red-500",
            children: [
              (0, o.jsxs)("span", {
                className: "mb-1 flex items-center",
                children: [
                  (0, o.jsx)("label", {
                    className: "leading-none",
                    children: l,
                  }),
                  d &&
                    c &&
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
                ...u,
                ref: t,
                className: "w-full border-2 ".concat(
                  "normal" === r
                    ? "".concat(
                        s
                          ? "border-red-500 border-opacity-40 hover:border-red-500 hover:border-opacity-70 focus:border-red-500 focus:border-opacity-70"
                          : "border-gray-300 border-opacity-20 hover:border-white hover:border-opacity-50 focus:border-white focus:border-opacity-100",
                        " bg-white bg-opacity-20 text-white ",
                      )
                    : "border-gray-500 border-opacity-30 bg-gray-800 bg-opacity-10 text-black hover:border-gray-800 hover:border-opacity-60 focus:border-gray-800 focus:border-opacity-80",
                  "   px-3 py-4  outline-none backdrop-blur duration-200",
                ),
              }),
              (0, o.jsx)(a.Z, { error: s }),
            ],
          })
        );
      });
      t.Z = s;
    },
    88798: function (e, t, r) {
      "use strict";
      r.a(e, async function (e, o) {
        try {
          r.d(t, {
            Z: function () {
              return UnauthenticatedWrapper;
            },
          });
          var n = r(93656),
            a = r(52983),
            l = r(2300),
            i = r(5198),
            s = r(8999),
            c = r(82262),
            u = e([l, c]);
          function UnauthenticatedWrapper(e) {
            let { children: t } = e,
              r = (0, n.useRouter)(),
              o = (0, s.useSearchParams)(),
              {
                userData: u,
                cacheLoaded: d,
                requiresIdentitySetup: f,
                loading: p,
              } = (0, l.S)();
            (0, a.useEffect)(() => {
              let handleRouteChange = (e) => {
                e.includes("login") ||
                  e.includes("registration") ||
                  (0, i.a7)();
              };
              return (
                r.events.on("routeChangeStart", handleRouteChange),
                () => {
                  r.events.off("routeChangeStart", handleRouteChange);
                }
              );
            }, [r]);
            let redirectBackToShopify = async () => {
              var e, t;
              if (!o) return;
              let r = o.get("shopify-redirect");
              if (!r) return;
              let n = await (0, c.Nj)({ returnTo: r });
              (null === (e = n.data) || void 0 === e ? void 0 : e.shopifyUrl) &&
                (window.location.href =
                  null === (t = n.data) || void 0 === t
                    ? void 0
                    : t.shopifyUrl);
            };
            return ((0, a.useEffect)(() => {
              if (!p && u && !f && r.isReady && o) {
                var e;
                let t = o.get("shopify-redirect");
                if (t) redirectBackToShopify();
                else {
                  let e = (0, i.Wk)();
                  e ? (r.push(e), (0, i.a7)()) : r.replace("/account");
                }
                let n = o.get("code"),
                  a =
                    null == u
                      ? void 0
                      : null === (e = u.accountInfo) || void 0 === e
                        ? void 0
                        : e.playFabId;
                n &&
                  a &&
                  fetch("/api/account-linking/link-aspyr", {
                    method: "POST",
                    credentials: "include",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ code: n, playFabId: a }),
                  })
                    .then((e) => e.json())
                    .then((e) => {
                      console.log("Success:", e);
                    })
                    .catch((e) => {
                      console.error("Error:", e);
                    });
              }
            }, [p, u, f, r, o]),
            !d || p)
              ? null
              : !u || f
                ? t
                : null;
          }
          (([l, c] = u.then ? (await u)() : u), o());
        } catch (e) {
          o(e);
        }
      });
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
      var l = r(10821),
        i = r.n(l),
        s = r(93656),
        c = r(5198);
      function WelcomeSection(e) {
        let {
            title: t,
            children: r,
            showSignUp: n,
            textAlign: l,
            largerFont: u,
          } = e,
          d = (0, s.useRouter)();
        return (0, o.jsxs)("div", {
          className: "".concat(
            l || "text-center",
            " align-center min-w-0 flex-1 justify-center text-white",
          ),
          children: [
            (0, o.jsx)("h2", {
              className: "".concat(
                u ? "text-5xl leading-[110%] lg:text-7xl" : "text-5xl",
                " font-normal tracking-normal drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]",
              ),
              children: t,
            }),
            (0, o.jsx)("p", {
              className: "".concat(
                u && "text-lg leading-[150%] lg:text-xl",
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
                      (0, c.OR)(window.location.href);
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
    86126: function (e, t, r) {
      "use strict";
      r.d(t, {
        u: function () {
          return RaiderFeaturesDescriptionSlider;
        },
      });
      var o = r(97458);
      r(52983);
      var n = r(99288),
        a = r(4290);
      function RaiderFeaturesDescriptionSlider(e) {
        let { features: t, onSwiper: r, controlledSwiper: l } = e;
        return (0, o.jsx)("div", {
          className: "w-full",
          children: (0, o.jsx)(n.tq, {
            modules: [a.Qr, a.xW],
            effect: "fade",
            fadeEffect: { crossFade: !0 },
            onSwiper: r,
            controller: { control: l },
            allowTouchMove: !1,
            centeredSlides: !0,
            loop: !0,
            children: t.map((e, t) =>
              (0, o.jsx)(
                n.o5,
                {
                  children: (0, o.jsxs)("div", {
                    className: "text-center text-white",
                    children: [
                      (0, o.jsx)("h3", {
                        className: "mb-2 text-xl font-bold lg:mb-4 lg:text-3xl",
                        children: e.headline,
                      }),
                      (0, o.jsx)("p", { children: e.description }),
                    ],
                  }),
                },
                t,
              ),
            ),
          }),
        });
      }
      (r(10453), r(57895));
    },
    56526: function (e, t, r) {
      "use strict";
      r.d(t, {
        Y: function () {
          return RaiderFeaturesImageSlider;
        },
      });
      var o = r(97458);
      r(52983);
      var n = r(99288),
        a = r(4290),
        l = r(10407);
      function RaiderFeaturesImageSlider(e) {
        let {
          features: t,
          currentIndex: r,
          onSwiper: i,
          onSlideChange: s,
          controlledSwiper: c,
          onSlideClick: u,
        } = e;
        return (0, o.jsxs)("div", {
          className: "w-full",
          children: [
            (0, o.jsx)("div", {
              className: "relative w-full",
              children: (0, o.jsx)(n.tq, {
                effect: "cards",
                grabCursor: !0,
                modules: [a.c4, a.Qr],
                onSwiper: i,
                onSlideChange: s,
                controller: { control: c },
                centeredSlides: !0,
                loop: !0,
                cardsEffect: {
                  perSlideOffset: 20,
                  perSlideRotate: 8,
                  rotate: !0,
                  slideShadows: !1,
                },
                className: "w-[300px] xl:w-[400px]",
                children: t.map((e, t) => {
                  var r, a, i;
                  let s = (
                    null === (i = e.image) || void 0 === i
                      ? void 0
                      : null === (a = i.fields) || void 0 === a
                        ? void 0
                        : null === (r = a.file) || void 0 === r
                          ? void 0
                          : r.url
                  )
                    ? "https:".concat(e.image.fields.file.url)
                    : void 0;
                  return (0, o.jsx)(
                    n.o5,
                    {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                      children: s
                        ? (0, o.jsx)(l.H, {
                            src: s,
                            alt: e.headline,
                            width: 400,
                            height: 400,
                            className: "w-full",
                          })
                        : (0, o.jsxs)("div", {
                            className: "relative aspect-square w-full",
                            children: [
                              (0, o.jsx)("div", {
                                className: "relative z-20 h-full w-full",
                                children: (0, o.jsx)("div", {
                                  className:
                                    "relative z-20 h-full w-full bg-gray-800 p-2.5",
                                }),
                              }),
                              (0, o.jsx)("img", {
                                className:
                                  "pointer-events-none absolute inset-0 z-30 h-full w-full object-contain",
                                src: "/images/welcome/paper/square-paper-frame.png",
                                alt: "A paper frame around the image",
                              }),
                              (0, o.jsx)("div", {
                                className:
                                  "absolute -bottom-4 left-1/2 aspect-square h-full w-full -translate-x-1/2 bg-black opacity-60 blur-lg",
                              }),
                            ],
                          }),
                    },
                    t,
                  );
                }),
              }),
            }),
            (0, o.jsx)("div", {
              className: "w-full",
              children: (0, o.jsx)("div", {
                className: "mx-auto flex items-center justify-center gap-1",
                children: t.map((e, t) =>
                  (0, o.jsx)(
                    "button",
                    {
                      className: "group py-4",
                      onClick: () => u(t),
                      "aria-label": "Select avatar ".concat(t + 1),
                      children: (0, o.jsx)("div", {
                        className:
                          "h-1 w-8 bg-teal-100 transition-all duration-300 ".concat(
                            t === r
                              ? "h-[6px] opacity-100"
                              : "opacity-50 group-hover:opacity-100",
                          ),
                      }),
                    },
                    t,
                  ),
                ),
              }),
            }),
          ],
        });
      }
      (r(10453), r(11126));
    },
    34045: function (e, t, r) {
      "use strict";
      r.d(t, {
        P2: function () {
          return consumeFacebookRegistrationPayload;
        },
        kD: function () {
          return loadFacebookSdk;
        },
        qP: function () {
          return getFacebookLoginStatus;
        },
      });
      let o = "facebook-registration-payload";
      function consumeFacebookRegistrationPayload() {
        try {
          let e = window.sessionStorage.getItem(o);
          if (!e) return;
          window.sessionStorage.removeItem(o);
          let t = JSON.parse(e);
          if (
            !(null == t ? void 0 : t.accessToken) ||
            !(null == t ? void 0 : t.email)
          )
            return;
          return t;
        } catch (e) {
          console.error("Unable to read Facebook registration payload", e);
          return;
        }
      }
      let n = null;
      function loadFacebookSdk(e) {
        return "undefined" != typeof document && e
          ? window.FB
            ? Promise.resolve(window.FB)
            : n ||
              (n = new Promise((t, r) => {
                if (
                  ((window.fbAsyncInit = () => {
                    var r, o, n, a, l;
                    (null === (r = window.FB) ||
                      void 0 === r ||
                      r.init({
                        appId: e,
                        cookie: !0,
                        xfbml: !0,
                        version: "v18.0",
                      }),
                      null === (a = window.FB) ||
                        void 0 === a ||
                        null === (n = a.AppEvents) ||
                        void 0 === n ||
                        null === (o = n.logPageView) ||
                        void 0 === o ||
                        o.call(n),
                      t(null !== (l = window.FB) && void 0 !== l ? l : null));
                  }),
                  document.getElementById("facebook-jssdk"))
                )
                  return;
                let o = document.createElement("script");
                ((o.id = "facebook-jssdk"),
                  (o.src = "https://connect.facebook.net/en_US/sdk.js"),
                  (o.async = !0),
                  (o.onerror = () => {
                    ((n = null), r(Error("Failed to load Facebook SDK")));
                  }),
                  document.body.appendChild(o));
              }))
          : Promise.resolve(null);
      }
      async function getFacebookLoginStatus() {
        return window.FB
          ? await new Promise((e) => {
              try {
                var t;
                null === (t = window.FB) ||
                  void 0 === t ||
                  t.getLoginStatus((t) => {
                    e(t);
                  });
              } catch (t) {
                (console.error("Failed to retrieve Facebook login status", t),
                  e(null));
              }
            })
          : null;
      }
    },
    4701: function (e, t, r) {
      "use strict";
      r.d(t, {
        $6: function () {
          return loadGoogleIdentityServices;
        },
        a6: function () {
          return initGoogleCodeClient;
        },
        cE: function () {
          return consumeGoogleRegistrationPayload;
        },
        p0: function () {
          return requestGoogleCode;
        },
      });
      let o = "google-registration-payload",
        n = null;
      function loadGoogleIdentityServices() {
        var e;
        return (
          null === (e = window.google) || void 0 === e ? void 0 : e.accounts
        )
          ? Promise.resolve(window.google.accounts)
          : n ||
              (n = new Promise((e, t) => {
                let r = document.getElementById("google-gsi-script"),
                  handleLoad = () => {
                    var t, r;
                    return e(
                      null !==
                        (r =
                          null === (t = window.google) || void 0 === t
                            ? void 0
                            : t.accounts) && void 0 !== r
                        ? r
                        : null,
                    );
                  },
                  handleError = () => {
                    ((n = null),
                      t(Error("Failed to load Google Identity Services")));
                  };
                if (r) {
                  (r.addEventListener("load", handleLoad, { once: !0 }),
                    r.addEventListener("error", handleError, { once: !0 }));
                  return;
                }
                let o = document.createElement("script");
                ((o.id = "google-gsi-script"),
                  (o.src = "https://accounts.google.com/gsi/client"),
                  (o.async = !0),
                  (o.defer = !0),
                  (o.onload = handleLoad),
                  (o.onerror = handleError),
                  document.body.appendChild(o));
              }));
      }
      function initGoogleCodeClient(e, t) {
        return e.oauth2.initCodeClient(t);
      }
      function requestGoogleCode(e, t) {
        e.requestCode(t);
      }
      function consumeGoogleRegistrationPayload() {
        try {
          let e = window.sessionStorage.getItem(o);
          if (!e) return;
          window.sessionStorage.removeItem(o);
          let t = JSON.parse(e);
          if (!(null == t ? void 0 : t.serverAuthCode)) return;
          return t;
        } catch (e) {
          console.error("Unable to read Google registration payload", e);
          return;
        }
      }
    },
    11126: function () {},
    8999: function (e, t, r) {
      e.exports = r(1279);
    },
  },
]);
