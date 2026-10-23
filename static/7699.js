(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7699],
  {
    13297: (e, t, r) => {
      "use strict";
      r.d(t, { J: () => c });
      var s = r(2183);
      r(36439);
      var a = r(15013),
        l = r.n(a),
        o = r(94536),
        n = r(63308),
        i = r(80609);
      function c({
        features: e,
        currentIndex: t,
        onSwiper: r,
        onSlideChange: a,
        controlledSwiper: d,
        onSlideClick: u,
      }) {
        return (0, s.jsxs)("div", {
          className: "w-full",
          children: [
            (0, s.jsx)("div", {
              className: "relative w-full",
              children: (0, s.jsx)(o.RC, {
                effect: "cards",
                grabCursor: !0,
                modules: [n.ZD, n.xI],
                onSwiper: r,
                onSlideChange: a,
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
                children: e.map((e, t) => {
                  let r = e.image?.fields?.file?.url
                    ? `https:${e.image.fields.file.url}`
                    : void 0;
                  return (0, s.jsx)(
                    o.qr,
                    {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                      children: r
                        ? (0, s.jsx)(i.R, {
                            src: r,
                            alt: e.headline,
                            width: 400,
                            height: 400,
                            className: "w-full",
                          })
                        : (0, s.jsxs)("div", {
                            className: "relative aspect-square w-full",
                            children: [
                              (0, s.jsx)("div", {
                                className: "relative z-20 h-full w-full",
                                children: (0, s.jsx)("div", {
                                  className:
                                    "relative z-20 h-full w-full bg-gray-800 p-2.5",
                                }),
                              }),
                              (0, s.jsx)(l(), {
                                className:
                                  "pointer-events-none absolute inset-0 z-30 object-contain",
                                src: "/images/welcome/paper/square-paper-frame.png",
                                alt: "A paper frame around the image",
                                fill: !0,
                                sizes: "100vw",
                              }),
                              (0, s.jsx)("div", {
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
            (0, s.jsx)("div", {
              className: "w-full",
              children: (0, s.jsx)("div", {
                className: "mx-auto flex items-center justify-center gap-1",
                children: e.map((e, r) =>
                  (0, s.jsx)(
                    "button",
                    {
                      type: "button",
                      className: "group py-4",
                      onClick: () => u(r),
                      "aria-label": `Select Raider Feature ${r + 1}`,
                      children: (0, s.jsx)("div", {
                        className: `h-1 w-8 bg-teal-100 transition-all duration-300 ${r === t ? "h-1.5 opacity-100" : "opacity-50 group-hover:opacity-100"}`,
                      }),
                    },
                    r,
                  ),
                ),
              }),
            }),
          ],
        });
      }
      (r(65277), r(97722));
    },
    16456: (e, t, r) => {
      "use strict";
      r.d(t, { S_: () => l, gS: () => o, hF: () => i, mU: () => n });
      let s = "google-registration-payload",
        a = null;
      function l() {
        return window.google?.accounts
          ? Promise.resolve(window.google.accounts)
          : a ||
              (a = new Promise((e, t) => {
                let r = document.getElementById("google-gsi-script"),
                  s = () => e(window.google?.accounts ?? null),
                  l = () => {
                    ((a = null),
                      t(Error("Failed to load Google Identity Services")));
                  };
                if (r) {
                  (r.addEventListener("load", s, { once: !0 }),
                    r.addEventListener("error", l, { once: !0 }));
                  return;
                }
                let o = document.createElement("script");
                ((o.id = "google-gsi-script"),
                  (o.src = "https://accounts.google.com/gsi/client"),
                  (o.async = !0),
                  (o.defer = !0),
                  (o.onload = s),
                  (o.onerror = l),
                  document.body.appendChild(o));
              }));
      }
      function o(e, t) {
        return e.oauth2.initCodeClient(t);
      }
      function n(e, t) {
        e.requestCode(t);
      }
      function i() {
        try {
          let e = window.sessionStorage.getItem(s);
          if (!e) return;
          window.sessionStorage.removeItem(s);
          let t = JSON.parse(e);
          if (!t?.serverAuthCode) return;
          return t;
        } catch (e) {
          console.error("Unable to read Google registration payload", e);
          return;
        }
      }
    },
    17268: (e, t, r) => {
      "use strict";
      r.d(t, { G: () => o });
      var s = r(2183);
      r(36439);
      var a = r(94536),
        l = r(63308);
      function o({ features: e, onSwiper: t, controlledSwiper: r }) {
        return (0, s.jsx)("div", {
          className: "w-full",
          children: (0, s.jsx)(a.RC, {
            modules: [l.xI, l._R],
            effect: "fade",
            fadeEffect: { crossFade: !0 },
            onSwiper: t,
            controller: { control: r },
            allowTouchMove: !1,
            centeredSlides: !0,
            rewind: !0,
            children: e.map((e, t) =>
              (0, s.jsx)(
                a.qr,
                {
                  children: (0, s.jsxs)("div", {
                    className: "text-center text-white",
                    children: [
                      (0, s.jsx)("h3", {
                        className: "mb-2 text-xl font-bold lg:mb-4 lg:text-3xl",
                        children: e.headline,
                      }),
                      (0, s.jsx)("p", { children: e.description }),
                    ],
                  }),
                },
                t,
              ),
            ),
          }),
        });
      }
      (r(65277), r(35623));
    },
    18074: (e, t, r) => {
      "use strict";
      r.a(e, async (e, s) => {
        try {
          r.d(t, { A: () => d });
          var a = r(2183),
            l = r(36439),
            o = r(49980),
            n = r(80831),
            i = e([o]);
          o = (i.then ? (await i)() : i)[0];
          let c = (0, l.forwardRef)((e, t) => {
            let { children: r, WelcomeSectionProps: s, navItems: l } = e;
            return (0, a.jsx)("main", {
              children: (0, a.jsxs)("div", {
                ref: t,
                className:
                  "relative flex h-svh flex-col items-center overflow-x-hidden",
                children: [
                  (0, a.jsx)(o.Ay, { isSticky: !0, navItems: l }),
                  (0, a.jsx)("div", {
                    className:
                      "flex w-full flex-1 flex-col items-center justify-center",
                    children: (0, a.jsxs)("div", {
                      className: "w-full max-w-7xl px-8 pb-20 pt-8 lg:pt-20",
                      children: [s && (0, a.jsx)(n.A, { ...s }), r],
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
    25514: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => c });
      var s = r(2183),
        a = r(36439),
        l = r(27811),
        o = r(15013),
        n = r.n(o);
      let i = (0, a.forwardRef)((e, t) => {
        var r;
        let {
            variant: o = "normal",
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
          (0, s.jsxs)("div", {
            className: c && "text-red-500",
            children: [
              (0, s.jsxs)("span", {
                className: "mb-1 flex items-center",
                children: [
                  (0, s.jsx)("label", {
                    className: "leading-none",
                    children: i,
                  }),
                  p &&
                    d &&
                    (0, s.jsxs)("div", {
                      className: "group relative",
                      children: [
                        (0, s.jsx)(n(), {
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
                ...u,
                ref: t,
                className: `w-full border-2 ${((r = `${c ? "border-red-500/40 hover:border-red-500/70 focus:border-red-500/70" : "border-gray-300/20 hover:border-white/50 focus:border-white"} bg-white/20 text-white`), "normal" === o ? r : "border-gray-500/30 bg-gray-800/10 text-black hover:border-gray-800/60 focus:border-gray-800/80")} px-3 py-4 backdrop-blur duration-200 outline-none`,
              }),
              (0, s.jsx)(l.A, { error: c }),
            ],
          })
        );
      });
      i.displayName = "TextField";
      let c = i;
    },
    27811: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => a });
      var s = r(2183);
      function a({ error: e }) {
        return (0, s.jsx)("p", {
          className: "text-red-error mt-1 min-h-5 text-sm",
          children: "string" == typeof e ? e : e?.message?.toString(),
        });
      }
    },
    74474: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => o });
      var s = r(2183),
        a = r(46402),
        l = r.n(a);
      function o({ description: e }) {
        return (0, s.jsxs)(l(), {
          children: [
            (0, s.jsx)(
              "meta",
              { name: "description", content: e },
              "description",
            ),
            (0, s.jsx)(
              "meta",
              { property: "og:description", content: e },
              "og:description",
            ),
            (0, s.jsx)(
              "meta",
              { name: "twitter:description", content: e },
              "twitter:description",
            ),
          ],
        });
      }
    },
    80609: (e, t, r) => {
      "use strict";
      r.d(t, { R: () => o });
      var s = r(2183);
      r(36439);
      var a = r(15013),
        l = r.n(a);
      function o({
        src: e,
        alt: t,
        width: r,
        height: a,
        priority: n = !1,
        rotateClass: i = "",
        className: c = "",
        objectFitClass: d = "object-contain",
        shadow: u = !0,
      }) {
        let p = "square",
          m = "aspect-square",
          f = "scale-100";
        if (r && a) {
          let e = r / a;
          0.1 > Math.abs(e - 1)
            ? ((p = "square"),
              (m = "aspect-square w-full"),
              (f = "lg:scale-90"))
            : e > 1
              ? ((p = "landscape"), (m = "aspect-[3/2] w-full"))
              : ((p = "portrait"),
                (m = "aspect-[2/3] h-full max-h-[50vh] lg:max-h-[500px]"));
        }
        return (0, s.jsxs)("div", {
          className: `relative ${m} ${f} ${i} ${c}`,
          children: [
            (0, s.jsx)("div", {
              className: "relative z-20 h-full w-full",
              children: (0, s.jsx)(l(), {
                src: e,
                alt: t,
                fill: !0,
                priority: n,
                sizes: "(max-width: 1024px) 100vw, 50vw",
                className: `relative z-20 ${d} p-2.5`,
              }),
            }),
            (0, s.jsx)(l(), {
              className:
                "pointer-events-none absolute inset-0 z-30 object-contain",
              src: `/images/welcome/paper/${p}-paper-frame.png`,
              alt: "A paper frame around the image",
              priority: n,
              fill: !0,
              sizes: "(max-width: 1024px) 100vw, 50vw",
            }),
            u &&
              (0, s.jsx)("div", {
                className: `${m} absolute -bottom-4 left-1/2 h-full -translate-x-1/2 bg-black opacity-60 blur-lg`,
              }),
          ],
        });
      }
    },
    80831: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => u });
      var s = r(2183),
        a = r(15013),
        l = r.n(a);
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
      var n = r(46728),
        i = r.n(n),
        c = r(31153),
        d = r(43948);
      function u(e) {
        let {
            title: t,
            children: r,
            showSignUp: a,
            textAlign: n,
            largerFont: u,
          } = e,
          p = (0, c.useRouter)();
        return (0, s.jsxs)("div", {
          className: `${n || "text-center"} align-center min-w-0 flex-1 justify-center text-white`,
          children: [
            (0, s.jsx)("h2", {
              className: `${u ? "text-5xl leading-[110%] lg:text-7xl" : "text-5xl"} font-normal tracking-normal drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]`,
              children: t,
            }),
            (0, s.jsx)("p", {
              className: `${u && "text-lg leading-[150%] lg:text-xl"} pt-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]`,
              children: r,
            }),
            a
              ? (0, s.jsxs)(i(), {
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
    87053: (e, t, r) => {
      "use strict";
      r.d(t, { FJ: () => o, Ye: () => a, u7: () => n });
      let s = "facebook-registration-payload";
      function a() {
        try {
          let e = window.sessionStorage.getItem(s);
          if (!e) return;
          window.sessionStorage.removeItem(s);
          let t = JSON.parse(e);
          if (!t?.accessToken || !t?.email) return;
          return t;
        } catch (e) {
          console.error("Unable to read Facebook registration payload", e);
          return;
        }
      }
      let l = null;
      function o(e) {
        return "u" < typeof document || !e
          ? Promise.resolve(null)
          : window.FB
            ? Promise.resolve(window.FB)
            : l ||
              (l = new Promise((t, r) => {
                if (
                  ((window.fbAsyncInit = () => {
                    (window.FB?.init({
                      appId: e,
                      cookie: !0,
                      xfbml: !0,
                      version: "v18.0",
                    }),
                      window.FB?.AppEvents?.logPageView?.(),
                      t(window.FB ?? null));
                  }),
                  document.getElementById("facebook-jssdk"))
                )
                  return;
                let s = document.createElement("script");
                ((s.id = "facebook-jssdk"),
                  (s.src = "https://connect.facebook.net/en_US/sdk.js"),
                  (s.async = !0),
                  (s.onerror = () => {
                    ((l = null), r(Error("Failed to load Facebook SDK")));
                  }),
                  document.body.appendChild(s));
              }));
      }
      async function n() {
        return window.FB
          ? await new Promise((e) => {
              try {
                window.FB?.getLoginStatus((t) => {
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
    87200: (e, t, r) => {
      "use strict";
      r.a(e, async (e, s) => {
        try {
          r.d(t, { A: () => u });
          var a = r(31153),
            l = r(36439),
            o = r(9751),
            n = r(43948),
            i = r(13214),
            c = r(83737),
            d = e([o, c]);
          function u(e) {
            let { children: t } = e,
              r = (0, a.useRouter)(),
              s = (0, i.useSearchParams)(),
              {
                userData: d,
                cacheLoaded: u,
                requiresIdentitySetup: p,
                loading: m,
              } = (0, o.u)();
            (0, l.useEffect)(() => {
              let e = (e) => {
                e.includes("login") ||
                  e.includes("registration") ||
                  (0, n.pz)();
              };
              return (
                r.events.on("routeChangeStart", e),
                () => {
                  r.events.off("routeChangeStart", e);
                }
              );
            }, [r]);
            let f = async () => {
              if (!s) return;
              let e = s.get("shopify-redirect");
              if (!e) return;
              let t = await (0, c.d1)({ returnTo: e });
              t.data?.shopifyUrl && (window.location.href = t.data?.shopifyUrl);
            };
            return ((0, l.useEffect)(() => {
              if (!m && d && !p && r.isReady && s) {
                if (s.get("shopify-redirect")) f();
                else {
                  let e = (0, n.nF)();
                  e ? (r.push(e), (0, n.pz)()) : r.replace("/account");
                }
                let e = s.get("code"),
                  t = d?.accountInfo?.playFabId;
                e &&
                  t &&
                  fetch("/api/account-linking/link-aspyr", {
                    method: "POST",
                    credentials: "include",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ code: e, playFabId: t }),
                  })
                    .then((e) => e.json())
                    .then((e) => {
                      console.log("Success:", e);
                    })
                    .catch((e) => {
                      console.error("Error:", e);
                    });
              }
            }, [m, d, p, r, s]),
            !u || m)
              ? null
              : !d || p
                ? t
                : null;
          }
          (([o, c] = d.then ? (await d)() : d), s());
        } catch (e) {
          s(e);
        }
      });
    },
    97722: () => {},
  },
]);
