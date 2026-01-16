"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [647],
  {
    21925: function (e, t, r) {
      r.a(e, async function (e, n) {
        try {
          r.d(t, {
            Z: function () {
              return Avatar;
            },
          });
          var a = r(97458),
            l = r(20102),
            s = r(95927),
            i = r(55322),
            o = r(52983),
            c = r(5650),
            d = r(5584),
            u = r(68956),
            h = r.n(u),
            m = e([l, i]);
          function Avatar(e) {
            var t, r, n, u, m, g, x;
            let { darkMode: f, surveys: p } = e,
              { userData: b, emailData: v, completedSurveys: y } = (0, l.S)(),
              [w, j] = (0, o.useState)(!1),
              [N, k] = (0, o.useState)(0),
              C = (0, o.useMemo)(() => {
                var e;
                return null !==
                  (e =
                    null == p
                      ? void 0
                      : p.filter((e) => !y.includes(e.telemetryId))) &&
                  void 0 !== e
                  ? e
                  : [];
              }, [p, y]);
            (0, o.useEffect)(() => {
              ((v && !v.hasConfirmedEmail) || C.length > 0) && k(1);
            }, [v, null == v ? void 0 : v.hasConfirmedEmail, C]);
            let R =
              (null == b
                ? void 0
                : null === (n = b.accountInfo) || void 0 === n
                  ? void 0
                  : null === (r = n.titleInfo) || void 0 === r
                    ? void 0
                    : null === (t = r.displayName) || void 0 === t
                      ? void 0
                      : t.substring(0, 2).toUpperCase()) || "";
            return (0, a.jsxs)(c.Z, {
              onClickOutside: () => j(!1),
              children: [
                (0, a.jsx)("div", {
                  onClick: () => {
                    j(!w);
                  },
                  className: "inline-block cursor-pointer",
                  children: (0, a.jsx)("div", {
                    className:
                      "lg:rounded-md lg:bg-gradient-to-r lg:from-yellow-800 lg:to-yellow-500 lg:p-[2px]",
                    children: (0, a.jsxs)("div", {
                      className:
                        "lg:flex lg:items-center lg:justify-end lg:rounded-md ".concat(
                          f
                            ? "lg:bg-gradient-to-r lg:from-white/95 lg:to-white/90"
                            : "lg:bg-black",
                          " px-2 py-1",
                        ),
                      children: [
                        (0, a.jsxs)("div", {
                          className: "relative h-10 w-10",
                          children: [
                            (
                              null == b
                                ? void 0
                                : null === (m = b.accountInfo) || void 0 === m
                                  ? void 0
                                  : null === (u = m.titleInfo) || void 0 === u
                                    ? void 0
                                    : u.avatarUrl
                            )
                              ? (0, a.jsx)(h(), {
                                  src: b.accountInfo.titleInfo.avatarUrl,
                                  fill: !0,
                                  sizes: "48px",
                                  className: "rounded-full object-cover",
                                  alt: "User Avatar",
                                })
                              : (0, a.jsx)(d.Z, { initials: R }),
                            N > 0 &&
                              (0, a.jsx)("div", {
                                className:
                                  "absolute bottom-0 right-0 z-10 h-4 w-4 rounded-full bg-red-500",
                              }),
                          ],
                        }),
                        (0, a.jsx)("p", {
                          className: "ml-3 hidden font-bold lg:block ".concat(
                            f ? "text-black" : "text-white",
                          ),
                          children:
                            (null == b
                              ? void 0
                              : null === (x = b.accountInfo) || void 0 === x
                                ? void 0
                                : null === (g = x.titleInfo) || void 0 === g
                                  ? void 0
                                  : g.displayName) || "",
                        }),
                        (0, a.jsx)(s.Z, {
                          className: "ml-2 hidden h-6 w-6 lg:block ".concat(
                            f ? "text-black" : "text-white",
                          ),
                          "aria-hidden": "true",
                        }),
                      ],
                    }),
                  }),
                }),
                (0, a.jsx)(i.Z, { onClose: () => j(!1), open: w }),
              ],
            });
          }
          (([l, i] = m.then ? (await m)() : m), n());
        } catch (e) {
          n(e);
        }
      });
    },
    42897: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return Button;
        },
      });
      var n = r(97458),
        a = r(52983),
        l = r(61373),
        s = r(68956),
        i = r.n(s);
      function Button(e) {
        let {
            variant: t = "normal",
            full: r = !1,
            loading: s,
            disabled: o,
            startIcon: c,
            ...d
          } = e,
          u = (0, a.useMemo)(() => {
            var t;
            return null === (t = e.children) || void 0 === t
              ? void 0
              : t.toString();
          }, [e.children]),
          classForVariant = (e, r, n, a, l) =>
            "normal" === t
              ? e
              : "darkBackground" === t
                ? r
                : "dark" === t
                  ? n
                  : "green" === t
                    ? l
                    : a;
        return (0, n.jsxs)("button", {
          ...d,
          type: "submit",
          id: u,
          disabled: o,
          className:
            "border-radius-8 group relative inline-flex items-center justify-center "
              .concat(e.className, " ")
              .concat(r && "w-full", " ")
              .concat(
                classForVariant(
                  "border-yellow-500 border-opacity-50 bg-transparent",
                  "border-yellow-500 border-opacity-50 bg-black/90",
                  "border-black border-opacity-20 bg-transparent",
                  "border-red-500 border-opacity-80 bg-transparent",
                  "border-teal-500 border-opacity-100 bg-transparent",
                ),
                " relative z-0 rounded-lg border-2 px-6 py-2 text-base ",
              )
              .concat(
                classForVariant(
                  "text-white",
                  "text-white",
                  "text-black",
                  "text-black",
                  "text-white",
                ),
                " transition duration-300 canhover:hover:border-opacity-90 ",
              )
              .concat(
                classForVariant(
                  "canhover:hover:text-black",
                  "canhover:hover:text-black",
                  "canhover:hover:text-white",
                  "canhover:hover:text-black",
                  "canhover:hover:text-white",
                ),
                " ",
              )
              .concat(r && "w-full"),
          children: [
            ("normal" === t || "darkBackground" === t) &&
              (0, n.jsx)("div", {
                "html-for": u,
                className:
                  "pointer-events-none absolute left-0 top-0 z-10 h-full w-full overflow-hidden border-transparent opacity-0 shadow-[0_0px_15px_0px_#F1C662] transition duration-300 canhover:group-hover:opacity-100",
                children: (0, n.jsx)(i(), {
                  src: "/images/gold-button-texture-1.jpg",
                  fill: !0,
                  className: "object-cover",
                  alt: "Gold sheen",
                  sizes: "256px",
                }),
              }),
            "green" === t &&
              (0, n.jsxs)("div", {
                "html-for": u,
                className:
                  "pointer-events-none absolute left-0 top-0 z-10 h-full w-full overflow-hidden border-transparent opacity-100 transition duration-300",
                children: [
                  (0, n.jsx)(i(), {
                    src: "/images/fabric-button-texture_teal-1.jpg",
                    fill: !0,
                    className: "object-cover",
                    alt: "Green back",
                    sizes: "256px",
                  }),
                  (0, n.jsx)("div", {
                    className:
                      "pointer-events-none absolute left-0 top-0 h-full w-full bg-teal-500 opacity-0 transition duration-300 canhover:group-hover:opacity-100",
                  }),
                ],
              }),
            "dark" === t &&
              (0, n.jsx)("div", {
                "html-for": u,
                className:
                  "pointer-events-none absolute left-0 top-0 z-10 h-full w-full border-transparent bg-gradient-to-r from-black to-black opacity-0 transition duration-300 canhover:group-hover:opacity-80",
              }),
            "error" === t &&
              (0, n.jsx)("div", {
                "html-for": u,
                className:
                  "pointer-events-none absolute left-0 top-0 z-10 h-full w-full border-transparent bg-gradient-to-r from-red-500 to-red-500 opacity-0 transition duration-300 canhover:group-hover:opacity-100",
              }),
            c &&
              (0, n.jsx)(i(), {
                width: 16,
                height: 16,
                alt: "Link icon",
                className:
                  "relative z-10 mr-3 transition duration-300 canhover:group-hover:invert",
                src: c,
              }),
            (0, n.jsx)("span", {
              className: "relative z-20",
              children: e.children,
            }),
            s &&
              (0, n.jsx)("span", {
                className: "relative z-20 ml-3",
                children: (0, n.jsx)(l.Z, {}),
              }),
          ],
        });
      }
    },
    5650: function (e, t, r) {
      var n = r(97458),
        a = r(52983);
      t.Z = (e) => {
        let { children: t, onClickOutside: r } = e,
          l = (0, a.useRef)(null);
        return (
          (0, a.useEffect)(() => {
            function handleClickOutside(e) {
              l.current && !l.current.contains(e.target) && r();
            }
            return (
              document.addEventListener("mousedown", handleClickOutside),
              () => {
                document.removeEventListener("mousedown", handleClickOutside);
              }
            );
          }, [r]),
          (0, n.jsx)("div", { ref: l, children: t })
        );
      };
    },
    85780: function (e, t, r) {
      r.a(e, async function (e, n) {
        try {
          r.d(t, {
            Z: function () {
              return CodeRedemptionForm;
            },
          });
          var a = r(97458),
            l = r(52983),
            s = r(24148),
            i = e([s]);
          function CodeRedemptionForm(e) {
            let {
                title: t = "Redeem Rewards",
                description: r = "Type in the code to redeem your rewards.",
                type: n = "dashboard",
                className: i = "",
                isLoggedIn: o = !0,
                onRedeemSuccess: c,
                onRedeemError: d,
              } = e,
              [u, h] = (0, l.useState)(""),
              [m, g] = (0, l.useState)(!1),
              [x, f] = (0, l.useState)(null),
              [p, b] = (0, l.useState)(null),
              [v, y] = (0, l.useState)(!1),
              handleSubmit = async (e) => {
                e.preventDefault();
                let t = u.trim();
                if ((g(!0), !t)) {
                  f("Enter a code to redeem.");
                  return;
                }
                (f(null), y(!0));
                try {
                  var r, n;
                  if (o) {
                    let e = await (0, s.XT)({ code: t });
                    if ("error" in e && e.error) {
                      let t =
                        null !== (r = e.error.errorMessage) && void 0 !== r
                          ? r
                          : "Unable to redeem code.";
                      (b({ type: "error", message: t }),
                        null == d || d(t, e.error));
                      return;
                    }
                    if ("data" in e && e.data) {
                      let { code: t, lastRedeemedAt: r } = e.data,
                        n = new Date(r),
                        a = 'Code "'
                          .concat(t, '" redeemed ')
                          .concat(
                            n.toLocaleString(void 0, {
                              dateStyle: "medium",
                              timeStyle: "short",
                            }),
                            ".",
                          );
                      (b({ type: "success", message: a }),
                        h(""),
                        g(!1),
                        null == c || c(e.data));
                      return;
                    }
                    (b({
                      type: "error",
                      message: "Unexpected response. Please try again.",
                    }),
                      null == d || d("Unexpected response. Please try again."));
                  } else {
                    let e = await (0, s.qf)({ code: t });
                    if ("error" in e && e.error) {
                      let t =
                        null !== (n = e.error.errorMessage) && void 0 !== n
                          ? n
                          : "Unable to preview code.";
                      (b({ type: "error", message: t }),
                        null == d || d(t, e.error));
                      return;
                    }
                    if ("data" in e && e.data) {
                      localStorage.setItem("code-pending-redemption", t);
                      let r = {
                        code: e.data.code,
                        lastRedeemedAt: Date.now(),
                        itemIds: e.data.itemIds,
                        items: e.data.items,
                      };
                      (b({
                        type: "success",
                        message: "Code found! Sign in to redeem this reward.",
                      }),
                        h(""),
                        g(!1),
                        null == c || c(r));
                      return;
                    }
                    (b({
                      type: "error",
                      message: "Unexpected response. Please try again.",
                    }),
                      null == d || d("Unexpected response. Please try again."));
                  }
                } catch (t) {
                  let e =
                    t instanceof Error
                      ? t.message
                      : o
                        ? "Unable to redeem code."
                        : "Unable to preview code.";
                  (b({ type: "error", message: e }), null == d || d(e));
                } finally {
                  y(!1);
                }
              },
              w = x ? { type: "error", message: x } : p;
            return (0, a.jsxs)("form", {
              onSubmit: handleSubmit,
              className:
                "w-full rounded-xl bg-lightgray-100 px-6 py-6 shadow-sm ".concat(
                  i,
                ),
              noValidate: !0,
              children: [
                (0, a.jsxs)("div", {
                  className: "text-center sm:text-left",
                  children: [
                    (0, a.jsx)("h2", {
                      className: "text-xl font-semibold",
                      children: t,
                    }),
                    (0, a.jsx)("p", {
                      className: "mt-2 text-sm ".concat(
                        "dashboard" === n ? "text-gray-600" : "text-white",
                      ),
                      children: r,
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className:
                    "mt-5 flex flex-col gap-4 sm:flex-row sm:items-center",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "w-full sm:flex-1",
                      children: [
                        (0, a.jsx)("label", {
                          htmlFor: "rewardCode",
                          children: "Reward code",
                        }),
                        (0, a.jsx)("input", {
                          id: "rewardCode",
                          name: "rewardCode",
                          type: "text",
                          value: u,
                          onChange: (e) => {
                            let t = e.target.value;
                            (h(t),
                              m && !t.trim()
                                ? f("Enter a code to redeem.")
                                : f(null),
                              b(null));
                          },
                          onBlur: () => {
                            (m || g(!0),
                              u.trim() || f("Enter a code to redeem."));
                          },
                          autoComplete: "off",
                          placeholder: "Enter code",
                          className: "w-full rounded-lg border "
                            .concat(
                              "dashboard" === n
                                ? "border-black/10 focus:border-black "
                                : "border-white/50 focus:border-white ",
                              " bg-transparent px-4 py-3 text-base outline-none transition  ",
                            )
                            .concat(
                              (null == w ? void 0 : w.type) === "error"
                                ? "border-red-500"
                                : "",
                            ),
                        }),
                        (0, a.jsx)("p", {
                          className: "mt-1 min-h-5 text-sm ".concat(
                            (null == w ? void 0 : w.type) === "error"
                              ? "text-red-500"
                              : "text-green-700",
                          ),
                          children: w && w.message,
                        }),
                      ],
                    }),
                    (0, a.jsx)("button", {
                      type: "submit",
                      disabled: v,
                      className:
                        "mx-auto inline-flex items-center justify-center rounded-lg border ".concat(
                          "dashboard" === n
                            ? "border-black/20 hover:border-black/40 focus:border-black/40"
                            : "border-yellow-500/50 hover:border-yellow-500/70 focus:border-yellow-500/70",
                          " px-6 py-3 text-sm tracking-wide transition hover:opacity-90 disabled:cursor-not-allowed disabled:border-black/30 disabled:bg-black/30 disabled:text-white/80",
                        ),
                      children: v ? "Redeeming..." : "Redeem",
                    }),
                  ],
                }),
              ],
            });
          }
          ((s = (i.then ? (await i)() : i)[0]), n());
        } catch (e) {
          n(e);
        }
      });
    },
    37165: function (e, t, r) {
      r.a(e, async function (e, n) {
        try {
          r.d(t, {
            Z: function () {
              return CodeRedemptionOverlay;
            },
          });
          var a = r(97458),
            l = r(68956),
            s = r.n(l),
            i = r(52983),
            o = r(85780),
            c = r(30328),
            d = e([o, c]);
          function CodeRedemptionOverlay(e) {
            let { isOpen: t, onClose: r, isLoggedIn: n } = e,
              [l, d] = (0, i.useState)(null);
            return t
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsxs)("div", {
                      role: "dialog",
                      "aria-modal": "true",
                      "aria-label": "Code redemption overlay",
                      className:
                        "fixed inset-0 z-[200] flex items-center justify-center bg-trueblack p-4",
                      onClick: r,
                      children: [
                        (0, a.jsx)("div", {
                          className:
                            "absolute left-1/2 top-1/2 aspect-square w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 opacity-40",
                          onClick: (e) => e.stopPropagation(),
                          children: (0, a.jsx)(s(), {
                            src: "/images/calendar.webp",
                            alt: "Calendar",
                            fill: !0,
                            className: "object-cover",
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className: "relative z-30 w-full max-w-2xl",
                          onClick: (e) => e.stopPropagation(),
                          children: [
                            (0, a.jsx)(o.Z, {
                              type: "overlay",
                              isLoggedIn: n,
                              onRedeemSuccess: (e) => {
                                e.items && e.items.length > 0 && d(e.items);
                              },
                            }),
                            (0, a.jsx)("button", {
                              "aria-label": "Close code redemption overlay",
                              className: "mx-auto mt-4 block underline",
                              onClick: r,
                              children: "Close",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)(c.Z, {
                      rewards: l,
                      isLoggedIn: n,
                      onClose: () => d(null),
                    }),
                  ],
                })
              : null;
          }
          (([o, c] = d.then ? (await d)() : d), n());
        } catch (e) {
          n(e);
        }
      });
    },
    14647: function (e, t, r) {
      r.a(e, async function (e, n) {
        try {
          r.d(t, {
            Ax: function () {
              return HeaderTab;
            },
            ZP: function () {
              return Header;
            },
          });
          var a,
            l,
            s = r(97458),
            i = r(20102),
            o = r(21925),
            c = r(42897),
            d = r(66426),
            u = r.n(d),
            h = r(14322),
            m = r(68956),
            g = r.n(m),
            x = r(52983),
            f = r(32029),
            p = r(22668),
            b = r(17461),
            v = r(37165),
            y = r(39378),
            w = r.n(y),
            j = e([i, o, b, v]);
          function Header(e) {
            let {
                darkMode: t,
                isSticky: r = !1,
                surveys: n,
                signUpBanner: a,
              } = e,
              [l, d] = (0, x.useState)(),
              [m, y] = (0, x.useState)(!1),
              j = (0, h.useRouter)(),
              N = j.query["shopify-redirect"],
              k = Array.isArray(N) ? w().first(N) : N,
              C = j.query["aspyr-code"],
              R = Array.isArray(C) ? w().first(C) : C,
              [S, A] = (0, x.useState)(2),
              [L, I] = (0, x.useState)(!1),
              { isLoggedIn: Z } = (0, i.S)(),
              addRedirect = () => {
                j.pathname.includes("/news") &&
                  j.query.category &&
                  j.query.article &&
                  (0, p.OR)(window.location.href);
              },
              addQueryParams = (e) => {
                let t = new URLSearchParams({
                  ...(k ? { shopifyRedirect: k } : {}),
                  ...(R ? { code: R } : {}),
                });
                return t.size ? "".concat(e, "?").concat(t.toString()) : e;
              },
              E = e.navItems.filter(
                (e) => e.showInHeader && (!e.hideForLoggedInUsers || Z),
              );
            (0, x.useEffect)(() => {
              let listenScrollEvent = () => {
                window.scrollY < 40 ? A(2) : A(0);
              };
              return (
                listenScrollEvent(),
                document.addEventListener("scroll", listenScrollEvent),
                () => {
                  window.removeEventListener("scroll", listenScrollEvent);
                }
              );
            }, [j]);
            let getTabs = () =>
              E.map((e) =>
                (0, s.jsx)(
                  HeaderTab,
                  {
                    href: e.link,
                    title: e.name,
                    darkMode: t,
                    selected: l === e.name,
                  },
                  e.name,
                ),
              );
            (0, x.useEffect)(() => {
              let e = E.find((e) => e.link === j.pathname);
              if (
                (null != e || (e = E.find((e) => e.rootLink === j.pathname)),
                !e)
              ) {
                let t = [...E].sort(
                  (e, t) => t.rootLink.length - e.rootLink.length,
                );
                e = t.find(
                  (e) =>
                    "/" !== e.rootLink &&
                    "" !== e.rootLink &&
                    j.pathname.startsWith(e.rootLink),
                );
              }
              e ? d(e.name) : d("Authentication");
            }, [j.pathname]);
            let getActionButtons = (e) => {
              let t = [],
                r = e ? f.Z : c.Z;
              return (
                "/login" !== j.pathname &&
                  t.push(
                    (0, s.jsx)(
                      u(),
                      {
                        onClick: addRedirect,
                        href: addQueryParams("/login"),
                        children: (0, s.jsx)(r, { children: "Login" }),
                      },
                      "1",
                    ),
                  ),
                "/registration" !== j.pathname &&
                  t.push(
                    (0, s.jsx)(
                      u(),
                      {
                        onClick: addRedirect,
                        className: "account_register_cta",
                        href: addQueryParams("/registration"),
                        children: (0, s.jsx)(r, { children: "Register" }),
                      },
                      "2",
                    ),
                  ),
                t
              );
            };
            return (0, s.jsxs)("header", {
              className: "top-0 z-[100] w-full "
                .concat("Authentication" === l && "lg:w-screen", " ")
                .concat(
                  (() => {
                    let e =
                      "/login" === j.pathname || "/registration" === j.pathname;
                    return 2 === S
                      ? e
                        ? "bg-trueblack lg:bg-transparent lg:bg-gradient-to-b lg:from-trueblack"
                        : "lg:bg-gradient-to-b lg:from-trueblack"
                      : "bg-trueblack";
                  })(),
                  " lg:bg-opacity-90 ",
                )
                .concat(r ? "sticky" : "fixed", " z-50"),
              style: { transition: "background-color 0.3s ease" },
              children: [
                (0, s.jsxs)("nav", {
                  className:
                    "hidden w-full grid-cols-3 items-center justify-between p-4 lg:grid lg:px-12",
                  "aria-label": "Global",
                  children: [
                    (0, s.jsx)("div", {
                      className: "z-10 col-span-1 flex gap-x-4",
                      children: (0, s.jsx)(u(), {
                        href: "/",
                        children: (0, s.jsx)(g(), {
                          className: "w-24",
                          priority: !0,
                          src: "/images/tombraider-header-logo.webp",
                          alt: "Tomb Raider Logo",
                          width: 512,
                          height: 240,
                        }),
                      }),
                    }),
                    (0, s.jsx)("div", {
                      className: "col-span-1 flex justify-center gap-x-4",
                      children: getTabs(),
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "col-span-1 flex items-center justify-end gap-x-4",
                      children: Z
                        ? (0, s.jsx)(o.Z, { surveys: n, darkMode: t })
                        : getActionButtons(),
                    }),
                  ],
                }),
                (0, s.jsxs)("nav", {
                  className:
                    "relative z-40 grid w-full grid-cols-3 items-center justify-between px-3 py-4 lg:hidden",
                  "aria-label": "Global",
                  children: [
                    (0, s.jsx)("div", {
                      className: "col-span-1 flex justify-start gap-x-4 ",
                      children: (0, s.jsx)(g(), {
                        width: 48,
                        height: 48,
                        alt: "hamburger menu",
                        className: "cursor-pointer",
                        src: m ? "/images/close.svg" : "/images/hamburger.svg",
                        onClick: () => y(!m),
                      }),
                    }),
                    (0, s.jsx)("div", {
                      className: "col-span-1 flex justify-center",
                      children: (0, s.jsx)(u(), {
                        href: "/",
                        children: (0, s.jsx)(g(), {
                          className: "relative h-10 w-auto",
                          priority: !0,
                          src: "/images/tombraider-header-logo.webp",
                          alt: "Tomb Raider Logo",
                          width: 512,
                          height: 240,
                        }),
                      }),
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "col-span-1 flex items-center justify-end gap-4",
                      children: Z
                        ? (0, s.jsx)(o.Z, { surveys: n })
                        : getActionButtons(!0),
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className:
                    "fixed left-0 top-0 z-30 w-full overflow-hidden bg-black bg-opacity-95 transition duration-300 lg:hidden",
                  style: {
                    height: m ? "100vh" : "0",
                    transition: "height 0.3s ease",
                  },
                  children: (0, s.jsx)("div", {
                    className: "flex flex-col items-center gap-y-8 pt-32",
                    children: getTabs(),
                  }),
                }),
                (0, s.jsx)(b.Z, { banner: a }),
                "/account" !== j.pathname &&
                  "/login" !== j.pathname &&
                  "/registration" !== j.pathname &&
                  (0, s.jsx)("div", {
                    className: "fixed bottom-8 right-0 z-20",
                    style: { writingMode: "sideways-lr" },
                    children: (0, s.jsx)("button", {
                      className:
                        "rounded-l-lg bg-yellow-500 px-1 py-3 font-bold text-black hover:bg-yellow-300",
                      onClick: () => I(!0),
                      children: "Redeem Codes",
                    }),
                  }),
                (0, s.jsx)(v.Z, {
                  isOpen: L,
                  onClose: () => I(!1),
                  isLoggedIn: Z,
                }),
              ],
            });
          }
          function HeaderTab(e) {
            let { selected: t, title: r, href: n, darkMode: a } = e;
            return (0, s.jsxs)(u(), {
              href: n,
              className:
                "relative flex flex-col whitespace-nowrap text-4xl transition duration-300 lg:w-24 lg:text-lg",
              children: [
                (0, s.jsx)("p", {
                  className: "w-full text-center ".concat(
                    a
                      ? "text-black"
                      : t
                        ? "text-white"
                        : "text-white/70 hover:text-white",
                  ),
                  style: { transition: "all 0.3s ease" },
                  children: r,
                }),
                t &&
                  (0, s.jsx)(g(), {
                    src: "/images/header-highlight.svg",
                    alt: "highlight",
                    width: 100,
                    height: 5,
                    className: "h-auto w-full",
                  }),
              ],
            });
          }
          (([i, o, b, v] = j.then ? (await j)() : j),
            ((a = l || (l = {}))[(a.None = 0)] = "None"),
            (a[(a.Halo = 1)] = "Halo"),
            (a[(a.Full = 2)] = "Full"),
            n());
        } catch (e) {
          n(e);
        }
      });
    },
    5584: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return InitialAvatars;
        },
      });
      var n = r(97458);
      function InitialAvatars(e) {
        let { initials: t } = e;
        return (0, n.jsx)("div", {
          className:
            "relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-blue-800 bg-blue-500",
          children: (0, n.jsx)("span", {
            className: "font-bold text-blue-800",
            children: t,
          }),
        });
      }
    },
    32029: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return LabelButton;
        },
      });
      var n = r(97458);
      function LabelButton(e) {
        return (0, n.jsx)("div", { className: "pointer text-white", ...e });
      }
    },
    55322: function (e, t, r) {
      r.a(e, async function (e, n) {
        try {
          r.d(t, {
            Z: function () {
              return Popover;
            },
          });
          var a = r(97458),
            l = r(20102),
            s = r(66426),
            i = r.n(s),
            o = e([l]);
          function Popover(e) {
            let { open: t } = e,
              { logout: r } = (0, l.S)(),
              handleSignOut = async () => {
                r();
              };
            return (0, a.jsx)("div", {
              className: "group relative top-2 z-40",
              children: (0, a.jsxs)("div", {
                className:
                  "absolute right-0 top-0 inline-block w-64 rounded-lg bg-white text-sm text-black shadow-lg transition-opacity duration-300 ".concat(
                    !t && "pointer-events-none",
                  ),
                style: { opacity: t ? 1 : 0, transition: "all 0.2s ease" },
                children: [
                  (0, a.jsxs)("div", {
                    className: "py-2",
                    children: [
                      (0, a.jsx)(PopoverItem, {
                        href: "/account",
                        children: "Dashboard",
                      }),
                      (0, a.jsx)(PopoverItem, {
                        href: "/account/settings",
                        children: "Account Settings",
                      }),
                      (0, a.jsx)(PopoverItem, {
                        className: "logout",
                        onClick: handleSignOut,
                        noDivider: !0,
                        children: "Sign Out",
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", { "data-popper-arrow": !0 }),
                ],
              }),
            });
          }
          function PopoverItem(e) {
            let {
              children: t,
              noDivider: r,
              href: n,
              onClick: l,
              className: s,
            } = e;
            return (0, a.jsx)(i(), {
              className: s,
              href: n || "javascript:void(0);",
              onClick: () => (null == l ? void 0 : l()),
              children: (0, a.jsx)("div", {
                className:
                  " cursor-pointer transition duration-200 hover:bg-gray-200/50 ",
                children: (0, a.jsx)("div", {
                  className: "px-4",
                  children: (0, a.jsx)("div", {
                    className: "py-4 pl-2 ".concat(!r && "border-b"),
                    children: t,
                  }),
                }),
              }),
            });
          }
          ((l = (o.then ? (await o)() : o)[0]), n());
        } catch (e) {
          n(e);
        }
      });
    },
    30328: function (e, t, r) {
      r.a(e, async function (e, n) {
        try {
          r.d(t, {
            Z: function () {
              return RewardModal;
            },
          });
          var a = r(97458),
            l = r(66426),
            s = r.n(l),
            i = r(42897),
            o = r(68956),
            c = r.n(o),
            d = r(53864),
            u = r(22668),
            h = r(96061),
            m = e([h]);
          function RewardModal(e) {
            let {
              rewards: t,
              isLoggedIn: r,
              onClose: n,
              showViewRewardsButton: l = !0,
            } = e;
            (h.u2m.AVATAR, h.u2m.AVATAR);
            let handleAuthRedirect = () => {
              r || (0, u.OR)("/account/rewards");
            };
            return t && 0 !== t.length
              ? (0, a.jsxs)("div", {
                  className:
                    "fixed inset-0 z-[250] flex items-center justify-center bg-black/80 px-4",
                  children: [
                    (0, a.jsx)("div", {
                      className: "pointer-events-none absolute inset-0",
                      children: (0, a.jsx)(d.R, {
                        playAnimation: !0,
                        responsive: !0,
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "relative z-10 w-full max-w-xl rounded-2xl bg-black p-8 text-center text-white",
                      children: [
                        (0, a.jsx)("button", {
                          type: "button",
                          onClick: n,
                          "aria-label": "Close",
                          className: "absolute right-4 top-4",
                          children: (0, a.jsx)("span", {
                            className: "text-2xl leading-none",
                            children: "\xd7",
                          }),
                        }),
                        (0, a.jsx)("h2", {
                          className: "mb-2 text-2xl font-bold",
                          children: r
                            ? t.length > 1
                              ? "Rewards Unlocked!"
                              : "Reward Unlocked!"
                            : t.length > 1
                              ? "Claim your Rewards!"
                              : "Claim your Reward!",
                        }),
                        (0, a.jsx)("p", {
                          className: "mb-6 text-sm",
                          children: r ? "You've unlocked the following:" : "",
                        }),
                        (0, a.jsx)("ul", {
                          className: "mb-6 space-y-3",
                          children: t.map((e, t) => {
                            var r;
                            return (0, a.jsxs)(
                              "li",
                              {
                                className:
                                  "flex items-center gap-4 rounded-lg border border-white/20 bg-white/5 px-3 py-2",
                                children: [
                                  (0, a.jsx)("div", {
                                    className:
                                      "relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg",
                                    children: (0, a.jsx)(c(), {
                                      fill: !0,
                                      alt: e.title,
                                      src:
                                        null !== (r = e.imageUrl) &&
                                        void 0 !== r
                                          ? r
                                          : "/images/tomb-slide-coin.png",
                                      className: "object-cover",
                                      sizes: "64px",
                                    }),
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "flex-1 text-left",
                                    children: [
                                      (0, a.jsx)("p", {
                                        className:
                                          "text-lg font-semibold leading-none",
                                        children: e.title,
                                      }),
                                      (0, a.jsx)("span", {
                                        className:
                                          "text-xs uppercase tracking-wide opacity-70",
                                        children: (function (e) {
                                          switch (e.type) {
                                            case h.u2m.AVATAR:
                                              return "Avatar";
                                            case h.u2m.FILE_DOWNLOAD:
                                              return "Download";
                                            case h.u2m.VIDEO_LINK:
                                              return "Video Link";
                                            case h.u2m.EXTERNAL_CODE_REWARD:
                                              return "Reward";
                                          }
                                        })(e),
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              t,
                            );
                          }),
                        }),
                        r
                          ? l &&
                            (0, a.jsx)("div", {
                              className: "mb-6 text-center",
                              children: (0, a.jsx)(s(), {
                                href: "/account/rewards",
                                children: (0, a.jsx)("button", {
                                  type: "button",
                                  className:
                                    "inline-flex items-center justify-center rounded-lg border border-black/80 bg-black px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:opacity-90",
                                  children: "View Rewards",
                                }),
                              }),
                            })
                          : (0, a.jsxs)("div", {
                              className: "mb-6 text-center",
                              children: [
                                (0, a.jsx)("h3", {
                                  className: "text-xl font-semibold",
                                  children: "Join the Society of Raiders",
                                }),
                                (0, a.jsx)("p", {
                                  className: "mt-3 text-sm",
                                  children:
                                    "Sign in or create an account to claim this reward and unlock exclusive content.",
                                }),
                                (0, a.jsxs)("div", {
                                  className: "mt-6 flex justify-center gap-3",
                                  children: [
                                    (0, a.jsx)(s(), {
                                      href: "/login",
                                      onClick: handleAuthRedirect,
                                      children: (0, a.jsx)(i.Z, {
                                        "aria-label": "Login",
                                        children: "Login",
                                      }),
                                    }),
                                    (0, a.jsx)(s(), {
                                      href: "/registration",
                                      onClick: handleAuthRedirect,
                                      children: (0, a.jsx)(i.Z, {
                                        "aria-label": "Register",
                                        children: "Register",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                        (0, a.jsx)("button", {
                          type: "button",
                          onClick: n,
                          className:
                            "px-4 py-2 text-sm font-semibold underline",
                          children: "Close",
                        }),
                      ],
                    }),
                  ],
                })
              : null;
          }
          ((h = (m.then ? (await m)() : m)[0]), n());
        } catch (e) {
          n(e);
        }
      });
    },
    53864: function (e, t, r) {
      r.d(t, {
        R: function () {
          return RiveCelebrationComponent;
        },
      });
      var n = r(97458),
        a = r(52983),
        l = r(76057);
      let RiveCelebrationComponent = (e) => {
        let { playAnimation: t, responsive: r } = e,
          { rive: s, RiveComponent: i } = (0, l.useRive)({
            src: "/animations/celebration_desktop.riv",
            stateMachines: "Celebration State Machine",
            autoplay: !1,
            layout: new l.Layout({
              fit: l.Fit.Cover,
              alignment: l.Alignment.Center,
            }),
            useOffscreenRenderer: !1,
          }),
          { rive: o, RiveComponent: c } = (0, l.useRive)({
            src: "/animations/celebration_mobile_upper.riv",
            stateMachines: "Celebration State Machine",
            autoplay: !1,
            layout: new l.Layout({
              fit: l.Fit.Cover,
              alignment: l.Alignment.Center,
            }),
            useOffscreenRenderer: !1,
          }),
          { rive: d, RiveComponent: u } = (0, l.useRive)({
            src: "/animations/celebration_mobile_lower.riv",
            stateMachines: "Glyphs Lower State Machine",
            autoplay: !1,
            layout: new l.Layout({
              fit: l.Fit.Cover,
              alignment: l.Alignment.Center,
            }),
            useOffscreenRenderer: !1,
          });
        return (
          (0, a.useEffect)(() => {
            t
              ? (null == s || s.play(),
                r && (null == o || o.play(), null == d || d.play()))
              : (null == s || s.pause(),
                r && (null == o || o.pause(), null == d || d.pause()));
          }, [t, r, s, o, d]),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("div", {
                className:
                  "absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 ".concat(
                    r ? "md:block" : "block",
                  ),
                children: (0, n.jsx)(i, {}),
              }),
              r &&
                (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)("div", {
                      className: "absolute inset-0 h-full w-full md:hidden",
                      children: (0, n.jsx)(c, {}),
                    }),
                    (0, n.jsx)("div", {
                      className:
                        "absolute bottom-0 left-0 h-full w-full md:hidden",
                      children: (0, n.jsx)(u, {}),
                    }),
                  ],
                }),
            ],
          })
        );
      };
    },
    17461: function (e, t, r) {
      r.a(e, async function (e, n) {
        try {
          r.d(t, {
            Z: function () {
              return SignUpBanner;
            },
          });
          var a = r(97458),
            l = r(66426),
            s = r.n(l),
            i = r(52983),
            o = r(20102),
            c = e([o]);
          function SignUpBanner(e) {
            let { banner: t } = e,
              [r, n] = (0, i.useState)(!1),
              { isLoggedIn: l } = (0, o.S)();
            (0, i.useEffect)(() => {
              if (!t) return;
              let e = parseInt(localStorage.getItem("lastVisit") || "0"),
                r = parseInt(localStorage.getItem("lastDismissal") || "0"),
                a = !sessionStorage.getItem("visitedThisSession"),
                s = Date.now(),
                i = 36e5 * t.initialDelayInHours,
                o = 36e5 * t.dismissDelayInHours;
              (n(
                l || !e
                  ? (console.log(
                      "User is logged in or visiting for the first time.",
                    ),
                    !1)
                  : s - e < i
                    ? (console.log(
                        "Not enough time has passed since the last visit.",
                      ),
                      !1)
                    : !r ||
                      !(s - r < o) ||
                      (console.log(
                        "Not enough time has passed since the last dismissal.",
                      ),
                      !1),
              ),
                a &&
                  (localStorage.setItem("lastVisit", s.toString()),
                  sessionStorage.setItem("visitedThisSession", "true")));
            }, [t, l]);
            let c = (0, i.useCallback)(() => {
              (localStorage.setItem("lastDismissal", Date.now().toString()),
                n(!1));
            }, []);
            return (0, a.jsx)(a.Fragment, {
              children:
                t &&
                r &&
                (0, a.jsxs)("div", {
                  className:
                    "absolute left-0 top-full flex w-full items-center justify-center border border-x-0 border-yellow-300/30 bg-trueblack/50 p-1 text-white hover:bg-yellow-300/70 hover:text-black lg:mx-12 lg:w-[calc(100%-6rem)] lg:rounded-lg lg:border-x",
                  children: [
                    (0, a.jsx)(s(), {
                      href: "/registration",
                      className:
                        "mr-8 flex h-full items-center justify-center text-center font-bold",
                      children: t.message,
                    }),
                    (0, a.jsx)("button", {
                      className:
                        "group absolute right-2 top-1/2 -translate-y-1/2",
                      onClick: c,
                      children: (0, a.jsx)("svg", {
                        className:
                          "h-full transition-transform group-hover:rotate-90",
                        width: "32",
                        height: "32",
                        viewBox: "0 0 32 32",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, a.jsx)("path", {
                          className: "fill-current",
                          d: "M22.8353 22.3639L22.3638 22.8353C22.1035 23.0956 21.6814 23.0956 21.421 22.8353L15.9999 17.4141L10.5787 22.8352C10.3184 23.0956 9.89626 23.0956 9.63591 22.8352L9.1645 22.3638C8.90415 22.1035 8.90415 21.6814 9.1645 21.421L14.5857 15.9999L9.1645 10.5787C8.90415 10.3184 8.90415 9.89626 9.1645 9.63591L9.6359 9.16451C9.89625 8.90416 10.3184 8.90416 10.5787 9.16451L15.9999 14.5857L21.421 9.1645C21.6814 8.90415 22.1035 8.90415 22.3638 9.1645L22.8353 9.6359C23.0956 9.89625 23.0956 10.3184 22.8353 10.5787L17.4141 15.9999L22.8353 21.421C23.0956 21.6814 23.0956 22.1035 22.8353 22.3639Z",
                        }),
                      }),
                    }),
                  ],
                }),
            });
          }
          ((o = (c.then ? (await c)() : c)[0]), n());
        } catch (e) {
          n(e);
        }
      });
    },
    61373: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return Spinner;
        },
      });
      var n = r(97458);
      function Spinner() {
        return (0, n.jsxs)("div", {
          role: "status",
          children: [
            (0, n.jsxs)("svg", {
              "aria-hidden": "true",
              className:
                "inline h-6 w-6 animate-spin fill-yellow-800 text-yellow-300",
              viewBox: "0 0 100 101",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, n.jsx)("path", {
                  d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                  fill: "currentColor",
                }),
                (0, n.jsx)("path", {
                  d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                  fill: "currentFill",
                }),
              ],
            }),
            (0, n.jsx)("span", {
              className: "sr-only",
              children: "Loading...",
            }),
          ],
        });
      }
    },
    22668: function (e, t, r) {
      function setRedirectToURLAfterAuth(e) {
        sessionStorage.setItem("redirectToURLAfterAuth", e);
      }
      function getRedirectToURLAfterAuth() {
        return sessionStorage.getItem("redirectToURLAfterAuth");
      }
      function removeRedirectToURLAfterAuth() {
        sessionStorage.removeItem("redirectToURLAfterAuth");
      }
      r.d(t, {
        OR: function () {
          return setRedirectToURLAfterAuth;
        },
        Wk: function () {
          return getRedirectToURLAfterAuth;
        },
        a7: function () {
          return removeRedirectToURLAfterAuth;
        },
      });
    },
  },
]);
