(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7083],
  {
    7674: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => u });
      var l = r(2183),
        a = r(96006),
        n = r.n(a);
      function s() {
        return (0, l.jsx)(n(), {
          src: "/images/divider.svg",
          className: "my-12 w-full",
          width: "0",
          height: "0",
          alt: "divider",
          priority: !0,
        });
      }
      var o = r(11677),
        i = r.n(o),
        c = r(18652),
        d = r(608);
      function u(e) {
        let {
            title: t,
            children: r,
            showSignUp: a,
            textAlign: o,
            largerFont: u,
          } = e,
          p = (0, c.useRouter)();
        return (0, l.jsxs)("div", {
          className: "".concat(
            o || "text-center",
            " align-center min-w-0 flex-1 justify-center text-white",
          ),
          children: [
            (0, l.jsx)("h2", {
              className: "".concat(
                u ? "text-5xl leading-[110%] lg:text-7xl" : "text-5xl",
                " font-normal tracking-normal drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]",
              ),
              children: t,
            }),
            (0, l.jsx)("p", {
              className: "".concat(
                u && "text-lg leading-[150%] lg:text-xl",
                " pt-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]",
              ),
              children: r,
            }),
            a
              ? (0, l.jsxs)(i(), {
                  className:
                    "account_register_cta border-radius-8 group relative mt-12 inline-flex items-center overflow-hidden rounded-lg border-2 border-yellow-500/50 bg-transparent px-6 py-2 text-base text-white transition duration-300 canhover:hover:text-black",
                  onClick: () => {
                    p.pathname.includes("/news") &&
                      p.query.category &&
                      p.query.article &&
                      (0, d.d4)(window.location.href);
                  },
                  href: "/registration",
                  children: [
                    (0, l.jsx)("div", {
                      className:
                        "pointer-events-none absolute left-0 top-0 z-10 h-full w-full opacity-0 transition duration-300 canhover:group-hover:opacity-100",
                      children: (0, l.jsx)(n(), {
                        src: "/images/gold-button-texture-1.jpg",
                        fill: !0,
                        className: "object-cover",
                        alt: "Gold sheen",
                        sizes: "256px",
                      }),
                    }),
                    (0, l.jsx)("span", {
                      className: "relative z-20",
                      children: "Sign Up",
                    }),
                  ],
                })
              : (0, l.jsx)(s, {}),
          ],
        });
      }
    },
    12268: (e, t, r) => {
      "use strict";
      r.a(e, async (e, l) => {
        try {
          r.d(t, { A: () => u });
          var a = r(18652),
            n = r(36439),
            s = r(99435),
            o = r(608),
            i = r(87531),
            c = r(55109),
            d = e([s, c]);
          function u(e) {
            let { children: t } = e,
              r = (0, a.useRouter)(),
              l = (0, i.useSearchParams)(),
              {
                userData: d,
                cacheLoaded: u,
                requiresIdentitySetup: p,
                loading: m,
              } = (0, s.u)();
            (0, n.useEffect)(() => {
              let e = (e) => {
                e.includes("login") ||
                  e.includes("registration") ||
                  (0, o.pz)();
              };
              return (
                r.events.on("routeChangeStart", e),
                () => {
                  r.events.off("routeChangeStart", e);
                }
              );
            }, [r]);
            let f = async () => {
              var e, t;
              if (!l) return;
              let r = l.get("shopify-redirect");
              if (!r) return;
              let a = await (0, c.d1)({ returnTo: r });
              (null == (e = a.data) ? void 0 : e.shopifyUrl) &&
                (window.location.href =
                  null == (t = a.data) ? void 0 : t.shopifyUrl);
            };
            return ((0, n.useEffect)(() => {
              if (!m && d && !p && r.isReady && l) {
                var e;
                if (l.get("shopify-redirect")) f();
                else {
                  let e = (0, o.nF)();
                  e ? (r.push(e), (0, o.pz)()) : r.replace("/account");
                }
                let t = l.get("code"),
                  a =
                    null == d || null == (e = d.accountInfo)
                      ? void 0
                      : e.playFabId;
                t &&
                  a &&
                  fetch("/api/account-linking/link-aspyr", {
                    method: "POST",
                    credentials: "include",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ code: t, playFabId: a }),
                  })
                    .then((e) => e.json())
                    .then((e) => {
                      console.log("Success:", e);
                    })
                    .catch((e) => {
                      console.error("Error:", e);
                    });
              }
            }, [m, d, p, r, l]),
            !u || m)
              ? null
              : !d || p
                ? t
                : null;
          }
          (([s, c] = d.then ? (await d)() : d), l());
        } catch (e) {
          l(e);
        }
      });
    },
    19277: (e, t, r) => {
      "use strict";
      r.d(t, { R: () => s });
      var l = r(2183);
      r(36439);
      var a = r(96006),
        n = r.n(a);
      function s(e) {
        let {
            src: t,
            alt: r,
            width: a,
            height: s,
            priority: o = !1,
            rotateClass: i = "",
            className: c = "",
            objectFitClass: d = "object-contain",
            shadow: u = !0,
          } = e,
          p = "square",
          m = "aspect-square",
          f = "scale-100";
        if (a && s) {
          let e = a / s;
          0.1 > Math.abs(e - 1)
            ? ((p = "square"),
              (m = "aspect-square w-full"),
              (f = "lg:scale-90"))
            : e > 1
              ? ((p = "landscape"), (m = "aspect-[3/2] w-full"))
              : ((p = "portrait"),
                (m = "aspect-[2/3] h-full max-h-[50vh] lg:max-h-[500px]"));
        }
        return (0, l.jsxs)("div", {
          className: "relative "
            .concat(m, " ")
            .concat(f, " ")
            .concat(i, " ")
            .concat(c),
          children: [
            (0, l.jsx)("div", {
              className: "relative z-20 h-full w-full",
              children: (0, l.jsx)(n(), {
                src: t,
                alt: r,
                fill: !0,
                priority: o,
                sizes: "(max-width: 1024px) 100vw, 50vw",
                className: "relative z-20 ".concat(d, " p-2.5"),
              }),
            }),
            (0, l.jsx)(n(), {
              className:
                "pointer-events-none absolute inset-0 z-30 object-contain",
              src: "/images/welcome/paper/".concat(p, "-paper-frame.png"),
              alt: "A paper frame around the image",
              priority: o,
              fill: !0,
              sizes: "(max-width: 1024px) 100vw, 50vw",
            }),
            u &&
              (0, l.jsx)("div", {
                className: "".concat(
                  m,
                  " absolute -bottom-4 left-1/2 h-full -translate-x-1/2 bg-black opacity-60 blur-lg",
                ),
              }),
          ],
        });
      }
    },
    23778: () => {},
    39334: (e, t, r) => {
      "use strict";
      r.a(e, async (e, l) => {
        try {
          r.d(t, { A: () => d });
          var a = r(2183),
            n = r(36439),
            s = r(95216),
            o = r(7674),
            i = e([s]);
          s = (i.then ? (await i)() : i)[0];
          let c = (0, n.forwardRef)((e, t) => {
            let { children: r, WelcomeSectionProps: l, navItems: n } = e;
            return (0, a.jsx)("main", {
              children: (0, a.jsxs)("div", {
                ref: t,
                className:
                  "relative flex h-svh flex-col items-center overflow-x-hidden",
                children: [
                  (0, a.jsx)(s.Ay, { isSticky: !0, navItems: n }),
                  (0, a.jsx)("div", {
                    className:
                      "flex w-full flex-1 flex-col items-center justify-center",
                    children: (0, a.jsxs)("div", {
                      className: "w-full max-w-7xl px-8 pb-20 pt-8 lg:pt-20",
                      children: [l && (0, a.jsx)(o.A, { ...l }), r],
                    }),
                  }),
                ],
              }),
            });
          });
          c.displayName = "FormWrapper";
          let d = c;
          l();
        } catch (e) {
          l(e);
        }
      });
    },
    40502: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => c });
      var l = r(2183),
        a = r(36439),
        n = r(67895),
        s = r(96006),
        o = r.n(s);
      let i = (0, a.forwardRef)((e, t) => {
        var r;
        let {
            variant: s = "normal",
            label: i,
            error: c,
            helperText: d,
            ...u
          } = e,
          [p, m] = (0, a.useState)(!1);
        return (
          (0, a.useEffect)(() => {
            m(!0);
          }, []),
          (0, l.jsxs)("div", {
            className: c && "text-red-500",
            children: [
              (0, l.jsxs)("span", {
                className: "mb-1 flex items-center",
                children: [
                  (0, l.jsx)("label", {
                    className: "leading-none",
                    children: i,
                  }),
                  p &&
                    d &&
                    (0, l.jsxs)("div", {
                      className: "group relative",
                      children: [
                        (0, l.jsx)(o(), {
                          alt: "Helper icon",
                          priority: !0,
                          className: "ml-1 h-6 w-6",
                          src:
                            "normal" === s
                              ? "/images/help-white.svg"
                              : "/images/help-black.svg",
                          height: "0",
                          width: "0",
                        }),
                        (0, l.jsxs)("div", {
                          "data-popover": !0,
                          id: "popover-default",
                          role: "tooltip",
                          className:
                            "pointer-events-none absolute bottom-[calc(100%+1rem)] -left-20 z-10 inline-block w-52 rounded-lg border border-yellow-500/70 bg-black text-sm text-white opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100 sm:top-0 sm:bottom-auto sm:left-12 sm:w-64",
                          children: [
                            (0, l.jsx)("div", {
                              className: "px-3 py-2",
                              children: (0, l.jsx)("p", { children: d }),
                            }),
                            (0, l.jsx)("div", { "data-popper-arrow": !0 }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
              (0, l.jsx)("input", {
                ...u,
                ref: t,
                className: "w-full border-2 ".concat(
                  ((r = "".concat(
                    c
                      ? "border-red-500/40 hover:border-red-500/70 focus:border-red-500/70"
                      : "border-gray-300/20 hover:border-white/50 focus:border-white",
                    " bg-white/20 text-white",
                  )),
                  "normal" === s
                    ? r
                    : "border-gray-500/30 bg-gray-800/10 text-black hover:border-gray-800/60 focus:border-gray-800/80"),
                  " px-3 py-4 backdrop-blur duration-200 outline-none",
                ),
              }),
              (0, l.jsx)(n.A, { error: c }),
            ],
          })
        );
      });
      i.displayName = "TextField";
      let c = i;
    },
    45593: (e, t, r) => {
      "use strict";
      r.d(t, { FJ: () => s, Ye: () => a, u7: () => o });
      let l = "facebook-registration-payload";
      function a() {
        try {
          let e = window.sessionStorage.getItem(l);
          if (!e) return;
          window.sessionStorage.removeItem(l);
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
      function s(e) {
        return "undefined" != typeof document && e
          ? window.FB
            ? Promise.resolve(window.FB)
            : n ||
              (n = new Promise((t, r) => {
                if (
                  ((window.fbAsyncInit = () => {
                    var r, l, a, n, s;
                    (null == (r = window.FB) ||
                      r.init({
                        appId: e,
                        cookie: !0,
                        xfbml: !0,
                        version: "v18.0",
                      }),
                      null == (n = window.FB) ||
                        null == (a = n.AppEvents) ||
                        null == (l = a.logPageView) ||
                        l.call(a),
                      t(null != (s = window.FB) ? s : null));
                  }),
                  document.getElementById("facebook-jssdk"))
                )
                  return;
                let l = document.createElement("script");
                ((l.id = "facebook-jssdk"),
                  (l.src = "https://connect.facebook.net/en_US/sdk.js"),
                  (l.async = !0),
                  (l.onerror = () => {
                    ((n = null), r(Error("Failed to load Facebook SDK")));
                  }),
                  document.body.appendChild(l));
              }))
          : Promise.resolve(null);
      }
      async function o() {
        return window.FB
          ? await new Promise((e) => {
              try {
                var t;
                null == (t = window.FB) ||
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
    57524: (e, t, r) => {
      "use strict";
      r.d(t, { S_: () => n, gS: () => s, hF: () => i, mU: () => o });
      let l = "google-registration-payload",
        a = null;
      function n() {
        var e;
        return (null == (e = window.google) ? void 0 : e.accounts)
          ? Promise.resolve(window.google.accounts)
          : a ||
              (a = new Promise((e, t) => {
                let r = document.getElementById("google-gsi-script"),
                  l = () => {
                    var t, r;
                    return e(
                      null !=
                        (r = null == (t = window.google) ? void 0 : t.accounts)
                        ? r
                        : null,
                    );
                  },
                  n = () => {
                    ((a = null),
                      t(Error("Failed to load Google Identity Services")));
                  };
                if (r) {
                  (r.addEventListener("load", l, { once: !0 }),
                    r.addEventListener("error", n, { once: !0 }));
                  return;
                }
                let s = document.createElement("script");
                ((s.id = "google-gsi-script"),
                  (s.src = "https://accounts.google.com/gsi/client"),
                  (s.async = !0),
                  (s.defer = !0),
                  (s.onload = l),
                  (s.onerror = n),
                  document.body.appendChild(s));
              }));
      }
      function s(e, t) {
        return e.oauth2.initCodeClient(t);
      }
      function o(e, t) {
        e.requestCode(t);
      }
      function i() {
        try {
          let e = window.sessionStorage.getItem(l);
          if (!e) return;
          window.sessionStorage.removeItem(l);
          let t = JSON.parse(e);
          if (!(null == t ? void 0 : t.serverAuthCode)) return;
          return t;
        } catch (e) {
          console.error("Unable to read Google registration payload", e);
          return;
        }
      }
    },
    67895: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => a });
      var l = r(2183);
      function a(e) {
        var t;
        let { error: r } = e;
        return (0, l.jsx)("p", {
          className: "text-red-error mt-1 min-h-5 text-sm",
          children:
            "string" == typeof r
              ? r
              : null == r || null == (t = r.message)
                ? void 0
                : t.toString(),
        });
      }
    },
    75309: (e, t, r) => {
      "use strict";
      r.d(t, { J: () => c });
      var l = r(2183);
      r(36439);
      var a = r(96006),
        n = r.n(a),
        s = r(94536),
        o = r(63308),
        i = r(19277);
      function c(e) {
        let {
          features: t,
          currentIndex: r,
          onSwiper: a,
          onSlideChange: c,
          controlledSwiper: d,
          onSlideClick: u,
        } = e;
        return (0, l.jsxs)("div", {
          className: "w-full",
          children: [
            (0, l.jsx)("div", {
              className: "relative w-full",
              children: (0, l.jsx)(s.RC, {
                effect: "cards",
                grabCursor: !0,
                modules: [o.ZD, o.xI],
                onSwiper: a,
                onSlideChange: c,
                controller: { control: d },
                centeredSlides: !0,
                rewind: !0,
                cardsEffect: {
                  perSlideOffset: 20,
                  perSlideRotate: 8,
                  rotate: !0,
                  slideShadows: !1,
                },
                className: "w-[300px] xl:w-[400px]",
                children: t.map((e, t) => {
                  var r, a, o;
                  let c = (
                    null == (o = e.image) ||
                    null == (a = o.fields) ||
                    null == (r = a.file)
                      ? void 0
                      : r.url
                  )
                    ? "https:".concat(e.image.fields.file.url)
                    : void 0;
                  return (0, l.jsx)(
                    s.qr,
                    {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                      children: c
                        ? (0, l.jsx)(i.R, {
                            src: c,
                            alt: e.headline,
                            width: 400,
                            height: 400,
                            className: "w-full",
                          })
                        : (0, l.jsxs)("div", {
                            className: "relative aspect-square w-full",
                            children: [
                              (0, l.jsx)("div", {
                                className: "relative z-20 h-full w-full",
                                children: (0, l.jsx)("div", {
                                  className:
                                    "relative z-20 h-full w-full bg-gray-800 p-2.5",
                                }),
                              }),
                              (0, l.jsx)(n(), {
                                className:
                                  "pointer-events-none absolute inset-0 z-30 object-contain",
                                src: "/images/welcome/paper/square-paper-frame.png",
                                alt: "A paper frame around the image",
                                fill: !0,
                                sizes: "100vw",
                              }),
                              (0, l.jsx)("div", {
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
            (0, l.jsx)("div", {
              className: "w-full",
              children: (0, l.jsx)("div", {
                className: "mx-auto flex items-center justify-center gap-1",
                children: t.map((e, t) =>
                  (0, l.jsx)(
                    "button",
                    {
                      type: "button",
                      className: "group py-4",
                      onClick: () => u(t),
                      "aria-label": "Select Raider Feature ".concat(t + 1),
                      children: (0, l.jsx)("div", {
                        className:
                          "h-1 w-8 bg-teal-100 transition-all duration-300 ".concat(
                            t === r
                              ? "h-1.5 opacity-100"
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
      (r(4197), r(23778));
    },
    88256: (e, t, r) => {
      "use strict";
      r.d(t, { G: () => s });
      var l = r(2183);
      r(36439);
      var a = r(94536),
        n = r(63308);
      function s(e) {
        let { features: t, onSwiper: r, controlledSwiper: s } = e;
        return (0, l.jsx)("div", {
          className: "w-full",
          children: (0, l.jsx)(a.RC, {
            modules: [n.xI, n._R],
            effect: "fade",
            fadeEffect: { crossFade: !0 },
            onSwiper: r,
            controller: { control: s },
            allowTouchMove: !1,
            centeredSlides: !0,
            rewind: !0,
            children: t.map((e, t) =>
              (0, l.jsx)(
                a.qr,
                {
                  children: (0, l.jsxs)("div", {
                    className: "text-center text-white",
                    children: [
                      (0, l.jsx)("h3", {
                        className: "mb-2 text-xl font-bold lg:mb-4 lg:text-3xl",
                        children: e.headline,
                      }),
                      (0, l.jsx)("p", { children: e.description }),
                    ],
                  }),
                },
                t,
              ),
            ),
          }),
        });
      }
      (r(4197), r(99871));
    },
    91134: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => s });
      var l = r(2183),
        a = r(14623),
        n = r.n(a);
      function s(e) {
        let { description: t } = e;
        return (0, l.jsxs)(n(), {
          children: [
            (0, l.jsx)(
              "meta",
              { name: "description", content: t },
              "description",
            ),
            (0, l.jsx)(
              "meta",
              { property: "og:description", content: t },
              "og:description",
            ),
            (0, l.jsx)(
              "meta",
              { name: "twitter:description", content: t },
              "twitter:description",
            ),
          ],
        });
      }
    },
  },
]);
