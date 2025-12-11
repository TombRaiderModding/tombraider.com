(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [907],
  {
    7044: function (e, r, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/registration",
        function () {
          return a(6472);
        },
      ]);
    },
    13788: function (e, r, a) {
      "use strict";
      a.d(r, {
        Z: function () {
          return Checkbox;
        },
      });
      var l = a(97458);
      function Checkbox(e) {
        let {
          children: r,
          variant: a = "normal",
          value: n,
          onChange: s,
          id: c,
        } = e;
        return (0, l.jsx)("div", {
          className: "relative",
          children: (0, l.jsxs)("label", {
            className: "main  flex cursor-pointer items-center",
            children: [
              (0, l.jsx)("p", { className: "ml-8 select-none", children: r }),
              (0, l.jsx)("input", {
                id: c,
                checked: n,
                onChange: (e) => s(e.target.checked),
                type: "checkbox",
              }),
              (0, l.jsx)("span", {
                className: "geekmark outline-none backdrop-blur ".concat(
                  "normal" === a
                    ? "geekmark-light border-2 border-gray-300 border-opacity-20 bg-white bg-opacity-20 duration-200 hover:border-white hover:border-opacity-50 focus:border-white focus:border-opacity-100"
                    : "geekmark-dark border-2 border-gray-500 border-opacity-30 bg-gray-800 bg-opacity-10 duration-200 hover:border-gray-800 hover:border-opacity-60 focus:border-gray-800 focus:border-opacity-80",
                ),
              }),
            ],
          }),
        });
      }
      a(52983);
    },
    52110: function (e, r, a) {
      "use strict";
      a.d(r, {
        Z: function () {
          return Dropdown;
        },
      });
      var l = a(97458),
        n = a(52983),
        s = a(30721),
        c = a(16719),
        d = a(95927),
        u = a(57865),
        m = a(10821),
        f = a.n(m);
      function Dropdown(e) {
        var r;
        let {
            items: a,
            selected: m,
            onSelect: g = () => {},
            placeholder: h = "Options",
            error: v,
            variant: p,
            rounded: x = !1,
          } = e,
          getValue = (e) => ("string" == typeof e ? e : e.value),
          getName = (e) => (e ? ("string" == typeof e ? e : e.name) : ""),
          handleClick = (e) => {
            g(getValue(e));
          };
        return (0, l.jsxs)(s.v, {
          as: "div",
          className: "relative inline-block w-full grow text-left",
          children: [
            (0, l.jsx)("div", {
              children: (0, l.jsxs)(s.v.Button, {
                className: (0, u.cn)(
                  "flex w-full items-center border-2 bg-white bg-opacity-20 px-3 py-4 outline-none backdrop-blur duration-200",
                  v
                    ? "border-red-500 border-opacity-40 hover:border-red-500 hover:border-opacity-70 focus:border-red-500 focus:border-opacity-70"
                    : "dark" === p
                      ? "rounded-lg border-black/20 px-5 py-3 hover:border-black/40 focus:border-black/40"
                      : "border-gray-300 border-opacity-20 hover:border-white hover:border-opacity-50 focus:border-white focus:border-opacity-100",
                  "dark" === p ? "text-black" : "text-white",
                  x && "rounded-lg",
                ),
                children: [
                  m
                    ? "string" == typeof a[0]
                      ? m
                      : null === (r = a.find((e) => e.value === m)) ||
                          void 0 === r
                        ? void 0
                        : r.name
                    : h,
                  (0, l.jsx)("div", { className: "grow" }),
                  (0, l.jsx)(d.Z, {
                    className: "".concat(
                      "dark" === p ? "text-black" : "text-yellow",
                      " -mr-1 h-6 w-6",
                    ),
                    "aria-hidden": "true",
                    color: "#E9BC6C",
                  }),
                ],
              }),
            }),
            (0, l.jsx)(c.u, {
              as: n.Fragment,
              enter: "transition ease-out duration-100",
              enterFrom: "transform opacity-0 scale-95",
              enterTo: "transform opacity-100 scale-100",
              leave: "transition ease-in duration-75",
              leaveFrom: "transform opacity-100 scale-100",
              leaveTo: "transform opacity-0 scale-95",
              children: (0, l.jsx)(s.v.Items, {
                className:
                  "absolute left-0 z-30 mt-2 max-h-60 w-full origin-top-right overflow-y-auto rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                children: (0, l.jsx)("div", {
                  className: "py-1",
                  children: a.map((e) =>
                    (0, l.jsx)(
                      s.v.Item,
                      {
                        children: (r) => {
                          let { active: a } = r;
                          return (0, l.jsx)(f(), {
                            scroll: !1,
                            href:
                              "string" != typeof e && e.href
                                ? e.href
                                : "javascript:void(0);",
                            onClick: () => handleClick(e),
                            className: (function () {
                              for (
                                var e = arguments.length, r = Array(e), a = 0;
                                a < e;
                                a++
                              )
                                r[a] = arguments[a];
                              return r.filter(Boolean).join(" ");
                            })(
                              a ? "bg-gray-100 text-gray-900" : "text-gray-700",
                              "block px-4 py-2 text-sm",
                            ),
                            children: getName(e),
                          });
                        },
                      },
                      "object" == typeof e ? e.value : e,
                    ),
                  ),
                }),
              }),
            }),
          ],
        });
      }
    },
    66268: function (e, r, a) {
      "use strict";
      a.d(r, {
        Z: function () {
          return GoogleButton;
        },
      });
      var l = a(97458);
      a(52983);
      var n = a(43976);
      let GoogleIcon = () =>
        (0, l.jsxs)("svg", {
          viewBox: "0 0 48 48",
          className: "h-5 w-5",
          "aria-hidden": "true",
          children: [
            (0, l.jsx)("path", {
              fill: "#EA4335",
              d: "M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z",
            }),
            (0, l.jsx)("path", {
              fill: "#4285F4",
              d: "M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z",
            }),
            (0, l.jsx)("path", {
              fill: "#FBBC05",
              d: "M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z",
            }),
            (0, l.jsx)("path", {
              fill: "#34A853",
              d: "M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z",
            }),
            (0, l.jsx)("path", { fill: "none", d: "M0 0h48v48H0z" }),
          ],
        });
      function GoogleButton(e) {
        let {
            children: r = "Continue with Google",
            onClick: a,
            disabled: s,
            loading: c,
            fullWidth: d,
          } = e,
          u = s || c;
        return (0, l.jsxs)("button", {
          type: "button",
          onClick: u ? void 0 : a,
          className:
            "flex max-w-64 items-center justify-center gap-3 rounded-md border border-[#DADCE0] bg-white px-5 py-2 text-sm font-medium text-[#1F1F1F] shadow-sm transition hover:bg-[#F6F9FE] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:border-[#E0E0E0] disabled:bg-[#F8F9FA] disabled:text-[#9AA0A6] ".concat(
              d ? "w-full" : "w-auto",
            ),
          disabled: u,
          children: [
            (0, l.jsx)("span", {
              className:
                "flex h-6 w-6 items-center justify-center rounded-full bg-transparent",
              children: (0, l.jsx)(GoogleIcon, {}),
            }),
            (0, l.jsx)("span", {
              className: "text-sm font-medium leading-6",
              children: r,
            }),
            c &&
              (0, l.jsx)("span", {
                className: "ml-2 flex items-center",
                children: (0, l.jsx)(n.Z, {}),
              }),
          ],
        });
      }
    },
    57314: function (e, r, a) {
      "use strict";
      a.d(r, {
        Z: function () {
          return Link;
        },
      });
      var l = a(97458);
      function Link(e) {
        let { defaultUnderlined: r, bold: a, ...n } = e;
        return (0, l.jsx)("a", {
          className: ""
            .concat(r ? "underline hover:no-underline" : "hover:underline", " ")
            .concat(a && "font-bold"),
          ...n,
          children: e.children,
        });
      }
    },
    53675: function (e, r, a) {
      "use strict";
      a.a(e, async function (e, l) {
        try {
          var n = a(97458),
            s = a(52983),
            c = a(96061),
            d = a(86848),
            u = a(81581),
            m = a(21748),
            f = a(44346),
            g = a(2300),
            h = a(82262),
            v = a(13782),
            p = a(73203),
            x = a(93656),
            b = a(3120),
            y = a(78115),
            j = a(66268),
            N = a(34045),
            k = a(2123),
            C = a(4701),
            S = e([c, m, g, h, b]);
          [c, m, g, h, b] = S.then ? (await S)() : S;
          let I = {
              UNKNOWN: "An unknown error has occurred.",
              FORM_VALIDATION:
                "Please check the form for errors and try again.",
              DISPLAY_NAME_UNAVAILABLE:
                "That display name is not available. Please try another.",
              PROFANE_DISPLAY_NAME:
                "That display name isn't allowed. Please try another.",
            },
            E = "Account already exists. Please try logging in";
          function omitKeys(e) {
            for (
              var r = arguments.length, a = Array(r > 1 ? r - 1 : 0), l = 1;
              l < r;
              l++
            )
              a[l - 1] = arguments[l];
            let n = { ...e };
            for (let e of a) delete n[e];
            return n;
          }
          let A = { 1: 2, 2: 3, 3: 4, 4: 5, 5: 5 },
            P = { 1: 1, 2: 1, 3: 2, 4: 3, 5: 4 },
            R = (0, u.F)(c.CPb),
            M = (0, u.F)(c.RHA),
            dynamicResolver = async (e, r, a) => {
              var l;
              let n =
                  null !== (l = null == e ? void 0 : e.registrationMethod) &&
                  void 0 !== l
                    ? l
                    : "email",
                s = await ("email" === n ? R : M)(e, r, a),
                c = s.errors && Object.keys(s.errors).length > 0;
              return c
                ? s
                : "facebook" !== n ||
                    (null == e ? void 0 : e.facebookAccessToken)
                  ? "google" !== n ||
                    (null == e ? void 0 : e.googleServerAuthCode)
                    ? s
                    : {
                        values: s.values,
                        errors: {
                          ...s.errors,
                          root: {
                            type: "manual",
                            message:
                              "Please connect your Google account before continuing registration.",
                          },
                        },
                      }
                  : {
                      values: s.values,
                      errors: {
                        ...s.errors,
                        root: {
                          type: "manual",
                          message:
                            "Please connect your Facebook account before continuing registration.",
                        },
                      },
                    };
            };
          ((r.Z = (e) => {
            var r, a, l, c, u, S, R, M, D, T, _, F;
            let { navItems: L, registrationPage: V } = e,
              U = (0, x.useRouter)(),
              [G, Z] = (0, s.useState)(1),
              {
                control: B,
                setValue: z,
                formState: { errors: Y },
                setError: W,
                trigger: H,
                clearErrors: q,
                getValues: Q,
                watch: K,
              } = (0, d.cI)({
                resolver: dynamicResolver,
                defaultValues: {
                  registrationMethod: "email",
                  facebookAccessToken: "",
                  googleServerAuthCode: "",
                  email: "",
                  displayName: "",
                  password: "",
                  dateOfBirth: new Date(),
                  stateOrProvinceName: "",
                  countryAlpha2Code: "",
                  newsletterContactEmail: "",
                  acceptTermsOfService: !1,
                  agreeToReceiveExtraEmails: !1,
                },
              }),
              J = (0, d.qo)({ control: B, name: "registrationMethod" }),
              $ = (0, d.qo)({ control: B, name: "facebookAccessToken" }),
              X = (0, d.qo)({ control: B, name: "googleServerAuthCode" }),
              {
                setUserData: ee,
                setMailingListStatus: et,
                userData: er,
                requiresIdentitySetup: ea,
                fetchUserInfo: el,
              } = (0, g.S)(),
              [eo, en] = (0, s.useState)(!1),
              [ei, es] = (0, s.useState)(!1),
              [ec, ed] = (0, s.useState)(null),
              [eu, em] = (0, s.useState)(!1),
              [ef, eg] = (0, s.useState)(!1),
              [eh, ev] = (0, s.useState)(!1),
              [ep, ex] = (0, s.useState)(!1),
              [eb, ey] = (0, s.useState)(!1),
              ew = (0, s.useRef)(!1),
              ej = ((_ = "1881486789441765"), void 0 !== _) ? _ : "",
              eN = ((F =
                "913283481016-rge7l6npr5tpnce5gd5fb28kmf2v33tu.apps.googleusercontent.com"),
              void 0 !== F)
                ? F
                : "",
              ek = (0, s.useRef)(null),
              eC = (0, s.useRef)(null),
              eS = (0, s.useRef)(!1),
              eI = (0, s.useRef)(null),
              eE = (0, s.useRef)(!1),
              eA = (0, s.useRef)(null),
              eP = (0, s.useRef)(null),
              eR =
                !!er &&
                !(null === (r = er.publisherData) || void 0 === r
                  ? void 0
                  : r.dateOfBirth),
              eM =
                !!er &&
                !(null === (a = er.publisherData) || void 0 === a
                  ? void 0
                  : a.countryAlpha2Code),
              eD =
                !!er &&
                !!(null === (l = er.publisherData) || void 0 === l
                  ? void 0
                  : l.countryAlpha2Code) &&
                ["US", "CA"].includes(er.publisherData.countryAlpha2Code) &&
                !er.publisherData.stateOrProvinceName,
              eT = eM || eD || eR ? 2 : 3,
              [e_, eF] = (0, s.useState)(null),
              eO = (0, s.useRef)(!1),
              eL = ea && !!er,
              eV = eL || "identity" === U.query.resume,
              eU = (0, s.useCallback)(() => {
                var e, r, a, l, n;
                return (
                  (null == er
                    ? void 0
                    : null === (r = er.accountInfo) || void 0 === r
                      ? void 0
                      : null === (e = r.email) || void 0 === e
                        ? void 0
                        : e.trim()) ||
                  (null == ec
                    ? void 0
                    : null === (l = ec.accountInfo) || void 0 === l
                      ? void 0
                      : null === (a = l.email) || void 0 === a
                        ? void 0
                        : a.trim()) ||
                  (null === (n = Q("email")) || void 0 === n
                    ? void 0
                    : n.trim()) ||
                  ""
                );
              }, [
                Q,
                null == ec
                  ? void 0
                  : null === (c = ec.accountInfo) || void 0 === c
                    ? void 0
                    : c.email,
                null == er
                  ? void 0
                  : null === (u = er.accountInfo) || void 0 === u
                    ? void 0
                    : u.email,
              ]),
              eG = (0, s.useCallback)(() => {
                var e;
                return (
                  (null === (e = Q("newsletterContactEmail")) || void 0 === e
                    ? void 0
                    : e.trim()) || eU()
                );
              }, [eU, Q]),
              eZ = (0, s.useCallback)(async () => {
                if (ew.current || "email" === J) return;
                let e = eU();
                if (e)
                  try {
                    (await h.NO({ email: e }), (ew.current = !0));
                  } catch (e) {
                    console.error("Failed to ensure contact email on exit", e);
                  }
              }, [eU, J]),
              eB = (0, s.useCallback)(() => {
                eI.current &&
                  (window.removeEventListener("focus", eI.current),
                  (eI.current = null));
              }, []),
              ez = (0, s.useCallback)(() => {
                eB();
                let handler = () => {
                  eS.current &&
                    ((eS.current = !1),
                    ev(!1),
                    W("root", {
                      message:
                        "Google sign-in was cancelled. Please try again.",
                    }));
                };
                ((eI.current = handler),
                  window.addEventListener("focus", handler, { once: !0 }));
              }, [eB, W]),
              eY = (0, s.useCallback)(() => {
                eA.current &&
                  (window.removeEventListener("focus", eA.current),
                  (eA.current = null));
              }, []),
              eW = (0, s.useCallback)(() => {
                eY();
                let handler = () => {
                  eE.current &&
                    ((eE.current = !1),
                    em(!1),
                    W("root", {
                      message:
                        "Facebook sign-in was cancelled. Please try again.",
                    }));
                };
                ((eA.current = handler),
                  window.addEventListener("focus", handler, { once: !0 }));
              }, [eY, W]),
              setIsSigningUpWithEmail = (e) => {
                (es(e),
                  e &&
                    (z("registrationMethod", "email"),
                    z("facebookAccessToken", "", { shouldValidate: !0 })));
              },
              eH = (0, s.useCallback)(
                async (e) => {
                  try {
                    var r;
                    let a = await h.Sm({
                      ServerAuthCode: e,
                      createAccount: !0,
                    });
                    if (a.error)
                      return (
                        W("root", {
                          message: a.error.errorMessage || I.UNKNOWN,
                        }),
                        z("googleServerAuthCode", "", { shouldValidate: !0 }),
                        ey(!1),
                        !1
                      );
                    if (
                      (null === (r = a.data) || void 0 === r
                        ? void 0
                        : r.newlyCreated) === !1
                    )
                      return (
                        W("root", { message: E }),
                        z("googleServerAuthCode", "", { shouldValidate: !0 }),
                        ey(!1),
                        !1
                      );
                    return (
                      z("registrationMethod", "google", {
                        shouldValidate: !0,
                        shouldDirty: !0,
                      }),
                      z("googleServerAuthCode", "__PROVISIONED__", {
                        shouldValidate: !0,
                        shouldDirty: !0,
                      }),
                      q(["googleServerAuthCode", "root"]),
                      setIsSigningUpWithEmail(!1),
                      ey(!0),
                      1 === G && Z(2),
                      !0
                    );
                  } catch (e) {
                    return (
                      console.error("Google sign-in failed:", e),
                      W("root", {
                        message: "Google sign-in failed. Please try again.",
                      }),
                      z("googleServerAuthCode", "", { shouldValidate: !0 }),
                      ey(!1),
                      !1
                    );
                  } finally {
                    ev(!1);
                  }
                },
                [q, G, Z, W, ey, ev, setIsSigningUpWithEmail, z],
              );
            ((0, s.useEffect)(() => {
              if (!U.isReady) return;
              let e = U.query.reason,
                r =
                  "string" == typeof e
                    ? e === k._
                    : Array.isArray(e) && e.includes(k._);
              if (r) {
                let e = { ...U.query };
                (delete e.reason,
                  U.replace({ pathname: "/registration", query: e }, void 0, {
                    shallow: !0,
                  }));
              }
              let a = U.query.method,
                l = Array.isArray(a) ? a[0] : a,
                initializeFromQuery = async () => {
                  if ("facebook" === l && !$) {
                    let e = (0, N.P2)();
                    if (!e) {
                      W("root", {
                        message:
                          "Your Facebook session expired. Please try connecting Facebook again.",
                      });
                      return;
                    }
                    (z("registrationMethod", "facebook"),
                      z("facebookAccessToken", e.accessToken, {
                        shouldValidate: !0,
                      }),
                      z("email", e.email, {
                        shouldDirty: !0,
                        shouldValidate: !0,
                      }),
                      e.name &&
                        z("displayName", e.name, {
                          shouldDirty: !0,
                          shouldValidate: !0,
                        }),
                      es(!1),
                      q("root"),
                      Z((e) => (1 === e ? 2 : e)));
                  }
                  if ("google" === l && !X) {
                    let e = (0, C.cE)();
                    if (!e) {
                      W("root", {
                        message:
                          "We couldn't complete Google registration. Please connect your Google account again.",
                      });
                      return;
                    }
                    ev(!0);
                    let r = await eH(e.serverAuthCode);
                    if (!r) return;
                    (e.email &&
                      z("email", e.email, {
                        shouldDirty: !0,
                        shouldValidate: !0,
                      }),
                      e.name &&
                        !Q("displayName") &&
                        z("displayName", e.name, {
                          shouldDirty: !0,
                          shouldValidate: !0,
                        }));
                  }
                };
              initializeFromQuery();
            }, [
              q,
              $,
              Q,
              X,
              eH,
              U,
              U.isReady,
              U.query.method,
              U.query.reason,
              W,
              ev,
              z,
            ]),
              (0, s.useEffect)(() => {
                var e, r, a;
                if (!eV) {
                  (eF(null), (eO.current = !1));
                  return;
                }
                let l = null !== e_ ? e_ : eT;
                (null === e_ && eF(l),
                  eO.current ||
                    (Z(l),
                    setIsSigningUpWithEmail(!1),
                    z("registrationMethod", "email"),
                    (null == er
                      ? void 0
                      : null === (e = er.accountInfo) || void 0 === e
                        ? void 0
                        : e.email) &&
                      z("email", er.accountInfo.email, {
                        shouldDirty: !1,
                        shouldValidate: !1,
                      }),
                    (null == er
                      ? void 0
                      : null === (a = er.accountInfo) || void 0 === a
                        ? void 0
                        : null === (r = a.titleInfo) || void 0 === r
                          ? void 0
                          : r.displayName) &&
                      z("displayName", er.accountInfo.titleInfo.displayName, {
                        shouldDirty: !1,
                        shouldValidate: !1,
                      }),
                    z("acceptTermsOfService", !1, {
                      shouldDirty: !1,
                      shouldValidate: !1,
                    }),
                    (eO.current = !0)));
              }, [
                eV,
                eT,
                e_,
                eF,
                z,
                setIsSigningUpWithEmail,
                null == er
                  ? void 0
                  : null === (S = er.accountInfo) || void 0 === S
                    ? void 0
                    : S.email,
                null == er
                  ? void 0
                  : null === (M = er.accountInfo) || void 0 === M
                    ? void 0
                    : null === (R = M.titleInfo) || void 0 === R
                      ? void 0
                      : R.displayName,
              ]),
              (0, s.useEffect)(() => {
                if (!ej) return;
                let e = !1;
                return (
                  (0, N.kD)(ej)
                    .then((r) => {
                      !e && r && eg(!0);
                    })
                    .catch((r) => {
                      e || (console.error(r), eg(!1));
                    }),
                  () => {
                    e = !0;
                  }
                );
              }, [ej]));
            let eq = (0, s.useCallback)(async () => {
                if (window.FB)
                  return await new Promise((e) => {
                    try {
                      var r;
                      null === (r = window.FB) ||
                        void 0 === r ||
                        r.api("/me", { fields: "email,name" }, (r) => e(r));
                    } catch (r) {
                      e(void 0);
                    }
                  });
              }, []),
              eQ = (0, s.useCallback)(
                async (e) => {
                  if (
                    ((eS.current = !1),
                    eB(),
                    console.info("[Google Sign-In] code client response", e),
                    e.error || !e.code)
                  ) {
                    (W("root", {
                      message:
                        e.error_description ||
                        e.error ||
                        "Google sign-in failed. Please try again.",
                    }),
                      ev(!1));
                    return;
                  }
                  await eH(e.code);
                },
                [q, eB, G, Z, W, ev, setIsSigningUpWithEmail, z],
              );
            ((0, s.useEffect)(() => {
              if (!eN) return;
              if (ek.current) {
                ex(!0);
                return;
              }
              let e = !1;
              return (
                ex(!1),
                (0, C.$6)()
                  .then((r) => {
                    r &&
                      !e &&
                      ((ek.current = r),
                      (eC.current = (0, C.a6)(r, {
                        client_id: eN,
                        scope: "openid email profile",
                        ux_mode: "popup",
                        callback: (e) => {
                          eQ(e);
                        },
                      })),
                      ex(!0));
                  })
                  .catch((r) => {
                    e || (console.error(r), ex(!1));
                  }),
                () => {
                  e = !0;
                }
              );
            }, [eN, eQ, z]),
              (0, s.useEffect)(
                () => () => {
                  (eB(), eY());
                },
                [eY, eB],
              ),
              (0, s.useEffect)(() => {
                if ("email" === J) return;
                let e = eU(),
                  r = Q("newsletterContactEmail");
                e &&
                  !r &&
                  z("newsletterContactEmail", e, {
                    shouldDirty: !1,
                    shouldValidate: !0,
                  });
              }, [
                eU,
                Q,
                J,
                z,
                null == er
                  ? void 0
                  : null === (D = er.accountInfo) || void 0 === D
                    ? void 0
                    : D.email,
                null == ec
                  ? void 0
                  : null === (T = ec.accountInfo) || void 0 === T
                    ? void 0
                    : T.email,
              ]),
              (0, s.useEffect)(
                () => () => {
                  eZ();
                },
                [eZ],
              ),
              (0, s.useEffect)(() => {
                eP.current &&
                  eP.current.scrollTo({ top: 0, behavior: "smooth" });
              }, [G]));
            let updateProvisionedGoogleProfile = async (e) => {
                var r, a, l, n;
                let s = await h.hC({ displayName: e.displayName });
                if (s.error)
                  throw (
                    W("displayName", { message: s.error.errorMessage }),
                    Error("Display name update failed")
                  );
                let c = await h.p2({
                  playFabId:
                    null !==
                      (n =
                        null !==
                          (l =
                            null == ec
                              ? void 0
                              : null === (r = ec.accountInfo) || void 0 === r
                                ? void 0
                                : r.playFabId) && void 0 !== l
                          ? l
                          : null == er
                            ? void 0
                            : null === (a = er.accountInfo) || void 0 === a
                              ? void 0
                              : a.playFabId) && void 0 !== n
                      ? n
                      : "",
                  data: {
                    dateOfBirth: e.dateOfBirth.toISOString(),
                    countryAlpha2Code: e.countryAlpha2Code,
                    stateOrProvinceName: e.stateOrProvinceName || null,
                    agreedToReceiveExtraEmails: e.agreeToReceiveExtraEmails
                      ? "YES"
                      : "NO",
                    acceptedTermsOfService: e.acceptTermsOfService
                      ? "YES"
                      : "NO",
                  },
                });
                if (c.error)
                  throw (
                    W("root", { message: c.error.errorMessage || I.UNKNOWN }),
                    Error("Publisher data update failed")
                  );
                let d = eU();
                if (d) {
                  let e = await h.NO({ email: d });
                  if (e.error)
                    throw (
                      W("root", {
                        message:
                          e.error.errorMessage ||
                          "We couldn't save your newsletter email. Please try again.",
                      }),
                      Error("Newsletter email update failed")
                    );
                  ew.current = !0;
                }
              },
              handleRegistration = async (e) => {
                var r, a, l, n, s, c, d, u, m, f, g, p, x, b, y;
                let j;
                let N = Q();
                if (eL) {
                  let s = await h.hC({ displayName: N.displayName });
                  if (s.error)
                    throw (
                      W("displayName", { message: s.error.errorMessage }),
                      Error("Display name update failed")
                    );
                  if ((await updateProvisionedGoogleProfile(N), e))
                    try {
                      await h.J3({ itemId: e });
                    } catch (e) {
                      console.error("Failed to set avatar:", e);
                    }
                  await el();
                  let [c, d] = await Promise.all([h.fn(), h.Yu()]),
                    u = c.data
                      ? {
                          ...c.data,
                          publisherData:
                            (null === (r = d.error) || void 0 === r
                              ? void 0
                              : r.errorMessage) ===
                            "Session ticket has expired or is invalid"
                              ? void 0
                              : null !==
                                    (n =
                                      null === (a = d.data) || void 0 === a
                                        ? void 0
                                        : a.publisherData) && void 0 !== n
                                ? n
                                : void 0,
                        }
                      : null;
                  (ed(u || null),
                    (0, v.sendGTMEvent)({
                      event: "registration_form_conversion",
                      value:
                        null == u
                          ? void 0
                          : null === (l = u.accountInfo) || void 0 === l
                            ? void 0
                            : l.playFabId,
                    }));
                  return;
                }
                let k = null,
                  C = !1;
                if ("email" === N.registrationMethod) {
                  let e = omitKeys(
                    N,
                    "registrationMethod",
                    "facebookAccessToken",
                    "googleServerAuthCode",
                  );
                  C = !(j = (k = await h.z2(e)).error);
                } else if ("facebook" === N.registrationMethod) {
                  let { facebookAccessToken: e } = N;
                  if (!e)
                    throw (
                      W("root", {
                        message:
                          "Please connect your Facebook account before continuing registration.",
                      }),
                      Error("Missing Facebook token")
                    );
                  let r = omitKeys(
                    N,
                    "registrationMethod",
                    "facebookAccessToken",
                    "password",
                    "googleServerAuthCode",
                  );
                  C = !(j = (k = await h._l({ ...r, AccessToken: e })).error);
                } else {
                  let { googleServerAuthCode: e } = N;
                  if (!e && !eb)
                    throw (
                      W("root", {
                        message:
                          "Please connect your Google account before continuing registration.",
                      }),
                      Error("Missing Google token")
                    );
                  if (eb)
                    (await updateProvisionedGoogleProfile(N),
                      (k = null),
                      (C = !0),
                      Q("googleServerAuthCode") ||
                        z("googleServerAuthCode", "__PROVISIONED__", {
                          shouldValidate: !0,
                        }));
                  else {
                    let r = omitKeys(
                      N,
                      "registrationMethod",
                      "googleServerAuthCode",
                      "password",
                      "facebookAccessToken",
                    );
                    if (
                      (null == (k = await h.Mf({ ...r, ServerAuthCode: e }))
                        ? void 0
                        : null === (s = k.data) || void 0 === s
                          ? void 0
                          : s.newlyCreated) === !1
                    )
                      throw (
                        W("root", { message: E }),
                        Error("Account already exists for that Google login")
                      );
                    C = !(j = null == k ? void 0 : k.error);
                  }
                }
                if (C) {
                  if (
                    ("google" !== N.registrationMethod ||
                      (eb || ey(!0),
                      Q("googleServerAuthCode") ||
                        z("googleServerAuthCode", "__PROVISIONED__", {
                          shouldValidate: !0,
                        })),
                    e)
                  )
                    try {
                      await h.J3({ itemId: e });
                    } catch (e) {
                      console.error("Failed to set avatar:", e);
                    }
                  let [r, a] = await Promise.all([h.fn(), h.Yu()]),
                    l = r.data
                      ? {
                          ...r.data,
                          publisherData:
                            null === (c = a.data) || void 0 === c
                              ? void 0
                              : c.publisherData,
                        }
                      : null;
                  if ("email" === J) {
                    let e =
                      null == l
                        ? void 0
                        : null === (m = l.accountInfo) || void 0 === m
                          ? void 0
                          : null === (u = m.email) || void 0 === u
                            ? void 0
                            : u.trim();
                    e && (await h.NO({ email: e }), (ew.current = !0));
                  }
                  (ed(l || null),
                    (0, v.sendGTMEvent)({
                      event: "registration_form_conversion",
                      value:
                        null == l
                          ? void 0
                          : null === (d = l.accountInfo) || void 0 === d
                            ? void 0
                            : d.playFabId,
                    }));
                } else {
                  let e =
                      null !==
                        (p =
                          null == j
                            ? void 0
                            : null === (f = j.errorMessage) || void 0 === f
                              ? void 0
                              : f.toLowerCase()) && void 0 !== p
                        ? p
                        : "",
                    r = null == j ? void 0 : j.error,
                    a =
                      "google" === N.registrationMethod &&
                      (e.includes("invalid_grant") ||
                        e.includes("invalid token") ||
                        e.includes("expired") ||
                        "InvalidOAuthToken" === r ||
                        "InvalidOAuthProvider" === r);
                  switch (null == j ? void 0 : j.error) {
                    case "EmailAddressNotAvailable":
                      W("email", { message: j.errorMessage });
                      break;
                    case "NameNotAvailable":
                      W("displayName", { message: I.DISPLAY_NAME_UNAVAILABLE });
                      break;
                    case "ProfaneDisplayName":
                      W("displayName", { message: I.PROFANE_DISPLAY_NAME });
                      break;
                    case "InvalidOAuthToken":
                    case "InvalidOAuthProvider":
                      (null == j
                        ? void 0
                        : null === (x = j.errorMessage) || void 0 === x
                          ? void 0
                          : x.toLowerCase().includes("already")) ||
                      (null == j
                        ? void 0
                        : null === (b = j.errorMessage) || void 0 === b
                          ? void 0
                          : b.toLowerCase().includes("exists"))
                        ? W("root", { message: E })
                        : (W("root", {
                            message:
                              (null == j ? void 0 : j.errorMessage) ||
                              "Google account connection failed. Please try connecting again.",
                          }),
                          z("googleServerAuthCode", "", { shouldValidate: !0 }),
                          ey(!1));
                      break;
                    default:
                      ("google" === N.registrationMethod &&
                        e.includes("invalid_grant")) ||
                        W("root", {
                          message:
                            null !==
                              (y = null == j ? void 0 : j.errorMessage) &&
                            void 0 !== y
                              ? y
                              : I.UNKNOWN,
                        });
                  }
                  (a &&
                    (z("googleServerAuthCode", "", { shouldValidate: !0 }),
                    W("googleServerAuthCode", {
                      type: "manual",
                      message:
                        'Your Google connection has expired or become invalid. Please click "Continue with Google" above to reconnect your account.',
                    }),
                    W("root", {
                      message:
                        'Your Google connection has expired or become invalid. Please click "Continue with Google" above to reconnect.',
                    }),
                    ey(!1)),
                    (null === (g = Y.root) || void 0 === g
                      ? void 0
                      : g.message) ||
                      a ||
                      W("root", { message: I.FORM_VALIDATION }));
                  let l = new Set([
                    "EmailAddressNotAvailable",
                    "NameNotAvailable",
                    "ProfaneDisplayName",
                  ]);
                  throw (
                    "google" === N.registrationMethod &&
                      j &&
                      l.has(j.error) &&
                      (ey(!0),
                      Q("googleServerAuthCode") ||
                        z("googleServerAuthCode", "__PROVISIONED__", {
                          shouldValidate: !0,
                        })),
                    Error("Registration failed")
                  );
                }
              },
              handleNewsletterUpdate = async () => {
                let e = Q();
                try {
                  if (!ei) {
                    let e = eG();
                    e && (await h.NO({ email: e }), (ew.current = !0));
                  }
                  (await h.US({
                    isUserOnMailingList: e.agreeToReceiveExtraEmails,
                  }),
                    et(e.agreeToReceiveExtraEmails));
                } catch (e) {
                  console.error("Error updating newsletter preferences:", e);
                }
              },
              handleNewsletterSkip = async () => {
                (await eZ(), goToNextStep());
              },
              goToNextStep = () => {
                Z((e) => {
                  let r = A[e];
                  return (eL && 2 === eT && e_ !== r && 2 === e && eF(r), r);
                });
              },
              handleEmailSignUp = async () => {
                (z("registrationMethod", "email"),
                  z("facebookAccessToken", "", { shouldValidate: !0 }),
                  z("googleServerAuthCode", "", { shouldValidate: !0 }),
                  ey(!1));
                let e = await H(["email", "password"]);
                if (!e) return;
                en(!0);
                let r = Q("email"),
                  a = await h.dU({ email: r });
                if ((en(!1), a.error)) {
                  (console.error("Error checking email availability:", a.error),
                    W("email", {
                      type: "manual",
                      message:
                        "An error occurred while checking email availability. Please try again later.",
                    }));
                  return;
                }
                if (a.data.emailExists) {
                  W("email", {
                    type: "manual",
                    message:
                      "This email is already registered. Please sign in instead or use a different email.",
                  });
                  return;
                }
                ((0, v.sendGTMEvent)({ event: "registration_email_start" }),
                  goToNextStep());
              },
              eK = (0, s.useCallback)(() => {
                if (
                  (setIsSigningUpWithEmail(!1),
                  z("registrationMethod", "google"),
                  z("facebookAccessToken", "", { shouldValidate: !0 }),
                  ey(!1),
                  !eN)
                ) {
                  W("root", {
                    message:
                      "Google login is unavailable. Please try again later or continue with email.",
                  });
                  return;
                }
                let e = eC.current;
                if (!e) {
                  W("root", {
                    message:
                      "Google login is still initializing. Please try again in a moment.",
                  });
                  return;
                }
                ((0, v.sendGTMEvent)({
                  event: "registration_sso_google_start",
                }),
                  q(["root", "googleServerAuthCode"]),
                  ev(!0),
                  (eS.current = !0),
                  ez());
                try {
                  (0, C.p0)(e);
                } catch (e) {
                  (console.error("Google code request failed", e),
                    (eS.current = !1),
                    eB(),
                    ev(!1),
                    W("root", {
                      message: "Google sign-in failed. Please try again.",
                    }));
                }
              }, [eN, q, eQ, ez, eB, W, ev, setIsSigningUpWithEmail, z]);
            return (0, n.jsx)(m.Z, {
              ref: eP,
              navItems: L,
              children: (0, n.jsxs)("form", {
                className: "account_form",
                onSubmit: (e) => e.preventDefault(),
                autoComplete: "on",
                children: [
                  1 === G &&
                    !eL &&
                    (0, n.jsx)(p.K, {
                      onNext: goToNextStep,
                      onEmailSignUp: handleEmailSignUp,
                      onGoogleSignUp: () => {
                        eK();
                      },
                      onFacebookSignUp: () => {
                        if (!ej) {
                          W("root", {
                            message:
                              "Facebook login is unavailable. Please try again later or continue with email.",
                          });
                          return;
                        }
                        if (!window.FB) {
                          W("root", {
                            message:
                              "Facebook login is still initializing. Please try again in a moment.",
                          });
                          return;
                        }
                        ((0, v.sendGTMEvent)({
                          event: "registration_sso_facebook_start",
                        }),
                          q("root"),
                          em(!0),
                          z("registrationMethod", "facebook"),
                          z("googleServerAuthCode", "", { shouldValidate: !0 }),
                          ey(!1));
                        try {
                          ((eE.current = !0),
                            eW(),
                            window.FB.login(
                              (e) => {
                                ((eE.current = !1),
                                  eY(),
                                  (async () => {
                                    try {
                                      var r;
                                      let a =
                                        null === (r = e.authResponse) ||
                                        void 0 === r
                                          ? void 0
                                          : r.accessToken;
                                      if (!a) {
                                        (z("facebookAccessToken", "", {
                                          shouldValidate: !0,
                                        }),
                                          W("root", {
                                            message:
                                              "Facebook login was cancelled. Please try again.",
                                          }));
                                        return;
                                      }
                                      (z("registrationMethod", "facebook"),
                                        setIsSigningUpWithEmail(!1));
                                      let l = await h.DY({ AccessToken: a });
                                      if (l.data) {
                                        (W("root", { message: E }),
                                          z("facebookAccessToken", "", {
                                            shouldValidate: !0,
                                          }));
                                        return;
                                      }
                                      if (
                                        l.error &&
                                        "AccountNotFound" !== l.error.error
                                      ) {
                                        (W("root", {
                                          message:
                                            l.error.errorMessage ||
                                            "Facebook login failed. Please try again.",
                                        }),
                                          z("facebookAccessToken", "", {
                                            shouldValidate: !0,
                                          }));
                                        return;
                                      }
                                      let n = await eq();
                                      if (!(null == n ? void 0 : n.email)) {
                                        (z("facebookAccessToken", "", {
                                          shouldValidate: !0,
                                        }),
                                          W("root", { message: E }));
                                        return;
                                      }
                                      (z("facebookAccessToken", a, {
                                        shouldValidate: !0,
                                      }),
                                        z("email", n.email, {
                                          shouldDirty: !0,
                                          shouldValidate: !0,
                                        }),
                                        z("newsletterContactEmail", n.email, {
                                          shouldDirty: !0,
                                          shouldValidate: !0,
                                        }),
                                        n.name &&
                                          z("displayName", n.name, {
                                            shouldDirty: !0,
                                            shouldValidate: !0,
                                          }),
                                        q("root"),
                                        1 === G && goToNextStep());
                                    } catch (e) {
                                      (console.error(e),
                                        z("facebookAccessToken", "", {
                                          shouldValidate: !0,
                                        }),
                                        W("root", {
                                          message:
                                            "Facebook login failed. Please try again.",
                                        }));
                                    } finally {
                                      em(!1);
                                    }
                                  })());
                              },
                              { scope: "email", return_scopes: !0 },
                            ));
                        } catch (e) {
                          (console.error(e),
                            (eE.current = !1),
                            eY(),
                            em(!1),
                            W("root", {
                              message:
                                "Facebook login failed. Please try again.",
                            }));
                        }
                      },
                      onLogin: () => {
                        U.push("/login");
                      },
                      control: B,
                      errors: Y,
                      emailCheckLoading: eo,
                      isSigningUpWithEmail: ei,
                      setIsSigningUpWithEmail: setIsSigningUpWithEmail,
                      facebookLoginLoading: eu,
                      facebookSdkReady: ef,
                      googleLoginLoading: eh,
                      googleSdkReady: ep,
                      raiderFeatureSlides: V.raiderFeatureSlides
                        .filter((e) => void 0 !== e)
                        .map((e) => e.fields),
                    }),
                  "google" === J &&
                    G >= 2 &&
                    !eb &&
                    !X &&
                    (0, n.jsxs)("div", {
                      className:
                        "mb-6 rounded-lg border border-white/20 bg-black/30 p-4",
                      children: [
                        (0, n.jsx)("p", {
                          className: "mb-3 text-sm text-white/80",
                          children:
                            "Connect your Google account to continue. We'll still need a few details below to finish creating your profile.",
                        }),
                        (0, n.jsxs)("div", {
                          className:
                            "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",
                          children: [
                            (0, n.jsx)(j.Z, {
                              onClick: eK,
                              loading: eh,
                              disabled: eh || !ep,
                              fullWidth: !0,
                              children: X
                                ? "Use a different Google account"
                                : "Continue with Google",
                            }),
                            (0, n.jsx)("span", {
                              className: "text-sm",
                              children: (0, n.jsx)("span", {
                                className: "text-white/60",
                                children:
                                  "You'll be asked to allow access to your Google account.",
                              }),
                            }),
                          ],
                        }),
                        (0, n.jsx)(f.Z, { error: Y.googleServerAuthCode }),
                        !eN &&
                          (0, n.jsx)(f.Z, {
                            error: "Google Client ID is not configured.",
                          }),
                      ],
                    }),
                  G >= 2 &&
                    G <= 4 &&
                    (0, n.jsx)(b.k, {
                      currentStep: G,
                      onNext: goToNextStep,
                      onBack: () => {
                        let e = eL && e_ ? e_ : eL ? eT : 1;
                        Z((r) => {
                          let a = P[r];
                          return a < e ? e : a;
                        });
                      },
                      control: B,
                      errors: Y,
                      setValue: z,
                      trigger: H,
                      setError: W,
                      watch: K,
                      isSigningUpWithEmail: ei,
                      onRegistrationSuccess: handleRegistration,
                      onNewsletterUpdate: handleNewsletterUpdate,
                      onSkip: handleNewsletterSkip,
                      registrationPage: V,
                    }),
                  5 === G &&
                    (0, n.jsx)(y.d, {
                      onUnlockDashboard: () => {
                        ec && ee(ec);
                      },
                      celebrationDescription: V.celebrationDescription,
                      celebrationImage: V.celebrationImage,
                    }),
                ],
              }),
            });
          }),
            l());
        } catch (e) {
          l(e);
        }
      });
    },
    26049: function (e, r, a) {
      "use strict";
      a.d(r, {
        Z: function () {
          return UnlockSwitch;
        },
      });
      var l = a(97458),
        n = a(52983);
      function UnlockSwitch(e) {
        let {
            onUnlock: r,
            overlayText: a,
            label: s = "Open Vault Door",
            id: c = "unlockSwitch",
          } = e,
          [d, u] = (0, n.useState)(0);
        return (
          (0, n.useEffect)(() => {
            d > 90 && (r(), u(0));
          }, [d, r]),
          (0, l.jsxs)("div", {
            className:
              "unlock-switch relative z-50 mx-auto w-64 cursor-pointer rounded-full border border-white/60 bg-black/90 p-2",
            children: [
              (0, l.jsx)("label", {
                htmlFor: c,
                className: "sr-only",
                "aria-label": s,
                children: s,
              }),
              (0, l.jsx)("input", {
                className:
                  "relative block h-12 w-full cursor-pointer appearance-none rounded-full bg-transparent",
                type: "range",
                value: d,
                max: 100,
                id: c,
                name: c,
                onChange: (e) => u(Number(e.target.value)),
              }),
              (0, l.jsx)("span", {
                className:
                  "pointer-events-none absolute left-16 top-1/2 w-[calc(100%-4.5rem)] -translate-y-1/2 text-center",
                children: a,
              }),
            ],
          })
        );
      }
    },
    570: function (e, r, a) {
      "use strict";
      a.d(r, {
        Y: function () {
          return ProgressIndicator;
        },
      });
      var l = a(97458);
      a(52983);
      let n = [
        { number: 1, label: "Raider Details" },
        { number: 2, label: "Raider Identity" },
        { number: 3, label: "Join Lara's Crew" },
      ];
      function ProgressIndicator(e) {
        let { currentStep: r } = e;
        if (r < 2 || r > 4) return null;
        let a = r - 1;
        return (0, l.jsx)("div", {
          className: "mx-auto mb-4 w-3/4",
          children: (0, l.jsxs)("div", {
            className: "relative flex items-center justify-between",
            children: [
              (0, l.jsx)("div", {
                className:
                  "absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-yellow-500",
              }),
              n.map((e) => {
                let r = e.number === a,
                  n = e.number < a;
                return (0, l.jsxs)(
                  "div",
                  {
                    "aria-label": "Step "
                      .concat(e.number, ": ")
                      .concat(e.label),
                    className:
                      "relative z-10 flex items-center justify-center rounded-full border-2 border-yellow-500 bg-black transition-all duration-500 ".concat(
                        n
                          ? "bg-yellow-500 text-black"
                          : r
                            ? "bg-black px-4 py-2"
                            : "h-10 w-10 bg-black",
                      ),
                    children: [
                      n
                        ? (0, l.jsx)("svg", {
                            className: "h-5 w-5",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: (0, l.jsx)("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 3,
                              d: "M5 13l4 4L19 7",
                            }),
                          })
                        : (0, l.jsx)("span", {
                            className: "text-sm text-white",
                            children: e.number,
                          }),
                      (0, l.jsx)("div", {
                        className:
                          "overflow-hidden whitespace-nowrap text-sm text-white transition-all duration-500 ".concat(
                            r ? "block" : "hidden",
                          ),
                        children: (0, l.jsx)("span", {
                          className: "ml-2 inline-block",
                          children: e.label,
                        }),
                      }),
                    ],
                  },
                  e.number,
                );
              }),
            ],
          }),
        });
      }
    },
    78115: function (e, r, a) {
      "use strict";
      a.d(r, {
        d: function () {
          return RaiderComplete;
        },
      });
      var l = a(97458),
        n = a(52983),
        s = a(47681),
        c = a.n(s),
        d = a(40340),
        u = a(26049);
      function RaiderComplete(e) {
        var r, a;
        let {
            onUnlockDashboard: s,
            celebrationDescription: m,
            celebrationImage: f,
          } = e,
          [g, h] = (0, n.useState)(!1),
          v = (
            null == f
              ? void 0
              : null === (a = f.fields) || void 0 === a
                ? void 0
                : null === (r = a.file) || void 0 === r
                  ? void 0
                  : r.url
          )
            ? "https:".concat(f.fields.file.url)
            : "/images/welcome/Lara-Croft-Hero.png";
        return (
          (0, n.useEffect)(() => {
            h(!0);
          }, []),
          (0, l.jsxs)("div", {
            className:
              "flex w-full flex-col gap-8 lg:flex-row lg:items-center lg:gap-24 xl:gap-32",
            children: [
              (0, l.jsx)("div", {
                className: "min-w-0 flex-1",
                children: (0, l.jsxs)("div", {
                  className:
                    "relative mx-auto aspect-square w-full max-w-[500px]",
                  children: [
                    (0, l.jsx)("div", {
                      className: "absolute inset-0 scale-125",
                      children: (0, l.jsx)(d.R, {
                        responsive: !1,
                        playAnimation: g,
                      }),
                    }),
                    (0, l.jsx)("div", {
                      className:
                        "absolute left-1/2 top-1/2 aspect-square w-2/3 -translate-x-1/2 -translate-y-[calc(50%-2rem)] rounded-full bg-[radial-gradient(circle,#eab30880_0%,transparent_70%)]",
                    }),
                    (0, l.jsx)("div", {
                      className: "relative z-10 h-full w-full -translate-x-8",
                      children: (0, l.jsx)(c(), {
                        src: v,
                        alt: "Lara Croft",
                        priority: !0,
                        fill: !0,
                        className: "relative z-10 object-contain",
                      }),
                    }),
                  ],
                }),
              }),
              (0, l.jsx)("div", {
                className:
                  "relative z-10 mx-auto flex w-full max-w-md flex-1 flex-col justify-center",
                children: (0, l.jsxs)("div", {
                  className: "flex flex-col gap-8 text-center",
                  children: [
                    (0, l.jsxs)("div", {
                      className: "text-white",
                      children: [
                        (0, l.jsx)("h2", {
                          className: "mb-2 font-bold uppercase tracking-wider",
                          children: "WELCOME TO THE",
                        }),
                        (0, l.jsx)("h1", {
                          className: "mb-4 text-4xl font-bold leading-tight",
                          children: "Society of Raiders!",
                        }),
                        (0, l.jsx)("p", {
                          className: "text-lg leading-relaxed",
                          children: m,
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className: "flex flex-col gap-3",
                      children: [
                        (0, l.jsx)(u.Z, {
                          onUnlock: s,
                          overlayText: "Continue Your Journey",
                          id: "unlock-dashboard-button",
                          label: "Continue Your Journey",
                        }),
                        (0, l.jsx)("a", {
                          href: "/",
                          id: "return-home-link",
                          className:
                            "py-2 text-white underline transition-colors hover:text-yellow-500",
                          children: "Return to Home",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
    },
    53420: function (e, r, a) {
      "use strict";
      a.d(r, {
        P: function () {
          return v;
        },
      });
      var l = a(97458),
        n = a(52983),
        s = a(13788),
        c = a(44346),
        d = a(13057),
        u = a(86848),
        m = a(43976),
        f = a(47681),
        g = a.n(f),
        h = a(13782);
      let v = {
        LeftContent: function (e) {
          var r, a;
          let { image: n } = e,
            s = (
              null == n
                ? void 0
                : null === (a = n.fields) || void 0 === a
                  ? void 0
                  : null === (r = a.file) || void 0 === r
                    ? void 0
                    : r.url
            )
              ? "https:".concat(n.fields.file.url)
              : null;
          return (0, l.jsx)("div", {
            className:
              "relative mx-auto aspect-square w-full max-w-[500px] overflow-hidden rounded-lg",
            children:
              s &&
              (0, l.jsx)(g(), {
                src: s,
                alt: "Raider Crew",
                fill: !0,
                className: "object-cover",
              }),
          });
        },
        RightContent: function (e) {
          let {
              onNext: r,
              onSkip: a,
              control: f,
              errors: g,
              isSigningUpWithEmail: v,
              trigger: p,
              setError: x,
              onNewsletterUpdate: b,
              headline: y,
              description: j,
              features: N,
            } = e,
            [k, C] = (0, n.useState)(!1),
            [S, I] = (0, n.useState)(!1),
            E = (0, u.qo)({ control: f, name: "newsletterContactEmail" }),
            handleJoin = async () => {
              if (!v) {
                let e = null == E ? void 0 : E.trim();
                if (!e) {
                  x("newsletterContactEmail", {
                    type: "manual",
                    message:
                      "Please provide an email address for newsletter updates",
                  });
                  return;
                }
              }
              let e = v ? await p() : await p("newsletterContactEmail");
              if (e) {
                C(!0);
                try {
                  (await b(),
                    (0, h.sendGTMEvent)({
                      event: "registration_newsletter_subscribe",
                    }),
                    r());
                } catch (e) {
                  C(!1);
                }
              }
            },
            handleOptInCheckboxChange = (e) => {
              I(e);
            };
          return (0, l.jsxs)("div", {
            className: "flex flex-col gap-6",
            children: [
              (0, l.jsxs)("div", {
                className: "text-center text-white",
                children: [
                  (0, l.jsx)("h2", {
                    className: "mb-2 text-3xl font-bold leading-tight",
                    children: y,
                  }),
                  (0, l.jsx)("p", { className: "mb-2", children: j }),
                  (0, l.jsx)("div", {
                    className: "flex flex-col items-center gap-1 text-white",
                    children: N.map((e, r) =>
                      (0, l.jsxs)(
                        "div",
                        {
                          className: "flex items-center gap-3",
                          children: [
                            (0, l.jsx)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "25",
                              viewBox: "0 0 24 25",
                              fill: "none",
                              children: (0, l.jsx)("g", {
                                children: (0, l.jsx)("path", {
                                  d: "M9.5501 18.5L3.8501 12.8L5.2751 11.375L9.5501 15.65L18.7251 6.47498L20.1501 7.89998L9.5501 18.5Z",
                                  fill: "#FBD98B",
                                }),
                              }),
                            }),
                            (0, l.jsx)("span", {
                              className: "text-sm",
                              children: e,
                            }),
                          ],
                        },
                        r,
                      ),
                    ),
                  }),
                ],
              }),
              !v &&
                (0, l.jsx)(u.Qr, {
                  name: "newsletterContactEmail",
                  control: f,
                  render: (e) => {
                    let { field: r } = e;
                    return (0, l.jsx)(d.Z, {
                      label: "Newsletter Email",
                      placeholder: "Email for newsletters and updates",
                      type: "email",
                      autoComplete: "email",
                      error: g.newsletterContactEmail,
                      helperText:
                        "We'll use this email to send you expedition updates and exclusive content",
                      ...r,
                    });
                  },
                }),
              (0, l.jsxs)("div", {
                className: "mx-auto",
                children: [
                  (0, l.jsx)(u.Qr, {
                    name: "agreeToReceiveExtraEmails",
                    control: f,
                    render: (e) => {
                      let {
                        field: { onChange: r, value: a },
                      } = e;
                      return (0, l.jsx)(s.Z, {
                        value: a,
                        onChange: (e) => {
                          (r(e), handleOptInCheckboxChange(e));
                        },
                        children: "Opt in to mailing list",
                      });
                    },
                  }),
                  g &&
                    g.agreeToReceiveExtraEmails &&
                    (0, l.jsx)(c.Z, { error: g.agreeToReceiveExtraEmails }),
                ],
              }),
              (0, l.jsxs)("div", {
                className: "flex flex-col gap-2",
                children: [
                  (0, l.jsx)("button", {
                    onClick: handleJoin,
                    type: "button",
                    id: "raider-crew-join-button",
                    className:
                      "rounded-lg border border-yellow-500 bg-yellow-500 py-2 text-black hover:bg-yellow-300 disabled:opacity-50",
                    disabled: k || !S,
                    children: k ? (0, l.jsx)(m.Z, {}) : "Subscribe",
                  }),
                  (0, l.jsx)("button", {
                    onClick: () => {
                      ((0, h.sendGTMEvent)({
                        event: "registration_newsletter_skip",
                      }),
                        a());
                    },
                    type: "button",
                    id: "raider-crew-skip-button",
                    className: "py-2 text-white hover:text-yellow-500",
                    disabled: k,
                    children: "Skip",
                  }),
                ],
              }),
            ],
          });
        },
      };
    },
    62997: function (e, r, a) {
      "use strict";
      a.d(r, {
        k: function () {
          return j;
        },
      });
      var l = a(97458),
        n = a(52983),
        s = a(52110),
        c = a(44346),
        d = a(86848),
        u = a(65516),
        m = a(76174);
      let f = [
          { name: "United States of America", value: "US" },
          ...u
            .all()
            .map((e) => {
              let r = e.country;
              return (
                "Congo" === e.country &&
                  ("CG" === e.alpha2
                    ? (r = "Congo (Republic of the Congo)")
                    : "CD" === e.alpha2 &&
                      (r = "Congo (Democratic Republic of the Congo)")),
                { name: r, value: e.alpha2 }
              );
            })
            .filter((e) => "United States of America" !== e.name),
        ],
        getProvincesForCountry = (e) =>
          m
            .filter((r) => r.country === e)
            .map((e) => ({ name: e.name, value: e.name }));
      var g = a(75443),
        h = a(47681),
        v = a.n(h),
        p = a(13782);
      let x = new Date().getFullYear(),
        b = Array.from({ length: 120 }, (e, r) => (x - r).toString()),
        y = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        j = {
          LeftContent: function (e) {
            var r, a;
            let { image: n } = e,
              s = (
                null == n
                  ? void 0
                  : null === (a = n.fields) || void 0 === a
                    ? void 0
                    : null === (r = a.file) || void 0 === r
                      ? void 0
                      : r.url
              )
                ? "https:".concat(n.fields.file.url)
                : null;
            return (0, l.jsx)("div", {
              className: "relative mx-auto aspect-square w-full max-w-[500px]",
              children:
                s &&
                (0, l.jsx)(v(), {
                  src: s,
                  alt: "Raider Details",
                  fill: !0,
                  className: "rounded-full object-cover",
                }),
            });
          },
          RightContent: function (e) {
            let {
                onNext: r,
                onBack: a,
                control: u,
                errors: m,
                setValue: h,
                trigger: v,
                headline: x,
                description: j,
              } = e,
              N = (0, d.qo)({ control: u, name: "countryAlpha2Code" }),
              k = (0, n.useMemo)(() => getProvincesForCountry(N), [N]),
              handleNext = async () => {
                let e = ["countryAlpha2Code", "dateOfBirth"];
                ("US" === N || "CA" === N) && e.push("stateOrProvinceName");
                let a = await v(e);
                a &&
                  ((0, p.sendGTMEvent)({
                    event: "registration_raider_details_complete",
                  }),
                  r());
              };
            return (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsxs)("div", {
                  className: "text-center text-white",
                  children: [
                    (0, l.jsx)("h2", {
                      className: "mb-2 text-3xl font-bold leading-tight",
                      children: x,
                    }),
                    (0, l.jsx)("p", { children: j }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className: "flex flex-col gap-6",
                  children: [
                    (0, l.jsxs)("div", {
                      id: "country-dropdown-container",
                      children: [
                        (0, l.jsx)("label", {
                          className: "mb-1 block text-white",
                          children: "Country",
                        }),
                        (0, l.jsx)(d.Qr, {
                          name: "countryAlpha2Code",
                          control: u,
                          render: (e) => {
                            let {
                              field: { onChange: r, value: a },
                            } = e;
                            return (0, l.jsx)(s.Z, {
                              placeholder: "Country",
                              selected: a,
                              onSelect: (e) => {
                                (r(e), h("stateOrProvinceName", ""));
                              },
                              items: f,
                              error: m.countryAlpha2Code,
                            });
                          },
                        }),
                        m.countryAlpha2Code &&
                          (0, l.jsx)(c.Z, { error: m.countryAlpha2Code }),
                      ],
                    }),
                    ("US" === N || "CA" === N) &&
                      (0, l.jsxs)("div", {
                        children: [
                          (0, l.jsx)("label", {
                            className: "mb-1 block text-white",
                            children: "US" === N ? "State" : "Province",
                          }),
                          (0, l.jsx)(d.Qr, {
                            name: "stateOrProvinceName",
                            control: u,
                            render: (e) => {
                              let {
                                field: { onChange: r, value: a },
                              } = e;
                              return (0, l.jsx)(s.Z, {
                                placeholder: "US" === N ? "State" : "Province",
                                selected: a,
                                onSelect: (e) => r(e),
                                items: k,
                              });
                            },
                          }),
                          m.stateOrProvinceName &&
                            (0, l.jsx)(c.Z, { error: m.stateOrProvinceName }),
                        ],
                      }),
                    (0, l.jsxs)("div", {
                      children: [
                        (0, l.jsx)("label", {
                          className: "mb-1 block text-white",
                          children: "Birthday",
                        }),
                        (0, l.jsxs)("div", {
                          className: "grid grid-cols-3 gap-4",
                          children: [
                            (0, l.jsx)("div", {
                              children: (0, l.jsx)(d.Qr, {
                                name: "dateOfBirth",
                                control: u,
                                render: (e) => {
                                  let {
                                    field: { onChange: r, value: a },
                                  } = e;
                                  return (0, l.jsx)(s.Z, {
                                    placeholder: "MM",
                                    selected:
                                      y[null == a ? void 0 : a.getMonth()],
                                    onSelect: (e) => {
                                      let l = y.indexOf(e);
                                      r(
                                        new Date(
                                          null == a ? void 0 : a.getFullYear(),
                                          l,
                                          null == a ? void 0 : a.getDate(),
                                        ),
                                      );
                                    },
                                    items: y,
                                    error: m.dateOfBirth,
                                  });
                                },
                              }),
                            }),
                            (0, l.jsx)("div", {
                              children: (0, l.jsx)(d.Qr, {
                                name: "dateOfBirth",
                                control: u,
                                render: (e) => {
                                  let {
                                    field: { onChange: r, value: a },
                                  } = e;
                                  return (0, l.jsx)(s.Z, {
                                    placeholder: "DD",
                                    selected:
                                      null == a
                                        ? void 0
                                        : a.getDate().toString(),
                                    onSelect: (e) =>
                                      r(
                                        new Date(
                                          null == a ? void 0 : a.getFullYear(),
                                          null == a ? void 0 : a.getMonth(),
                                          parseInt(e),
                                        ),
                                      ),
                                    items: (function (e) {
                                      let r = e.getFullYear(),
                                        a = e.getMonth(),
                                        l = new Date(r, a + 1, 0).getDate();
                                      return Array.from({ length: l }, (e, r) =>
                                        (r + 1).toString(),
                                      );
                                    })(a),
                                    error: m.dateOfBirth,
                                  });
                                },
                              }),
                            }),
                            (0, l.jsx)("div", {
                              children: (0, l.jsx)(d.Qr, {
                                name: "dateOfBirth",
                                control: u,
                                render: (e) => {
                                  let {
                                    field: { onChange: r, value: a },
                                  } = e;
                                  return (0, l.jsx)(s.Z, {
                                    placeholder: "YYYY",
                                    selected:
                                      null == a
                                        ? void 0
                                        : a.getFullYear().toString(),
                                    onSelect: (e) =>
                                      r(
                                        new Date(
                                          parseInt(e),
                                          null == a ? void 0 : a.getMonth(),
                                          null == a ? void 0 : a.getDate(),
                                        ),
                                      ),
                                    items: b,
                                    error: m.dateOfBirth,
                                  });
                                },
                              }),
                            }),
                          ],
                        }),
                        m.dateOfBirth &&
                          (0, l.jsx)(c.Z, { error: m.dateOfBirth }),
                        (0, l.jsx)("p", {
                          className: "mt-2 text-xs text-gray-400",
                          children: "Must be at least 13 years old to register",
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className: "flex flex-col gap-2",
                      children: [
                        (0, l.jsx)("button", {
                          onClick: handleNext,
                          type: "button",
                          id: "raider-details-continue-button",
                          className:
                            "rounded-lg border border-yellow-500 bg-yellow-500 py-2 text-black hover:bg-yellow-300",
                          children: "Choose your Raider Identity",
                        }),
                        (0, l.jsx)(g.Z, {
                          onClick: a,
                          full: !0,
                          id: "raider-details-back-button",
                          children: "Go Back",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          },
        };
    },
    39438: function (e, r, a) {
      "use strict";
      a.d(r, {
        g: function () {
          return y;
        },
      });
      var l = a(97458),
        n = a(52983),
        s = a(47681),
        c = a.n(s),
        d = a(13057),
        u = a(13788),
        m = a(44346),
        f = a(57314),
        g = a(86848),
        h = a(99288),
        v = a(4290);
      function RaiderAvatarSelectSlider(e) {
        let { avatars: r, currentIndex: a, onSlideChange: s } = e,
          [c, d] = (0, n.useState)(null),
          handlePaginationClick = (e) => {
            null == c || c.slideToLoop(e);
          };
        return (0, l.jsxs)("div", {
          className: "w-full",
          children: [
            (0, l.jsx)("div", {
              className: "relative w-full",
              children: (0, l.jsx)(
                h.tq,
                {
                  grabCursor: !0,
                  modules: [v.W_, v.tl],
                  onSwiper: (e) => {
                    d(e);
                  },
                  onSlideChange: s,
                  onClick: (e) => {
                    var r;
                    let a = e.clickedIndex,
                      l =
                        null === (r = e.slides[a]) || void 0 === r
                          ? void 0
                          : r.getAttribute("data-swiper-slide-index");
                    if (null != l) {
                      let r = parseInt(l, 10);
                      r !== e.realIndex && e.slideToLoop(r);
                    }
                  },
                  centeredSlides: !0,
                  loop: r.length > 0,
                  slidesPerView: 3,
                  spaceBetween: 0,
                  breakpoints: {
                    320: { slidesPerView: 2 },
                    768: { slidesPerView: 2.5 },
                    1024: { slidesPerView: 3 },
                  },
                  className:
                    "avatar-swiper !overflow-visible py-8 lg:!overflow-hidden",
                  children: r.map((e, r) => {
                    let n = r === a,
                      s = !1 === e.isUnlocked;
                    return (0, l.jsx)(
                      h.o5,
                      {
                        className: "flex items-center justify-center py-4",
                        children: (0, l.jsx)("div", {
                          className:
                            "flex aspect-square w-full items-center justify-center transition-all duration-300",
                          children: e.imageUrl
                            ? (0, l.jsxs)("div", {
                                className:
                                  "relative h-full w-full overflow-hidden rounded-full transition-all duration-300 ".concat(
                                    n
                                      ? "scale-100 opacity-100 ring-2 ring-yellow-500"
                                      : "scale-75 opacity-70 ring-0",
                                  ),
                                children: [
                                  (0, l.jsx)("img", {
                                    src: e.imageUrl,
                                    alt: e.title || "Avatar ".concat(e.id),
                                    className: "h-full w-full object-cover",
                                  }),
                                  s &&
                                    (0, l.jsxs)("div", {
                                      className:
                                        "absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50",
                                      children: [
                                        (0, l.jsx)("svg", {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          className: "h-16 w-16 text-white",
                                          fill: "none",
                                          viewBox: "0 0 24 24",
                                          stroke: "currentColor",
                                          children: (0, l.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                                          }),
                                        }),
                                        (0, l.jsx)("span", {
                                          children: "Earn as Reward",
                                        }),
                                      ],
                                    }),
                                ],
                              })
                            : (0, l.jsx)("div", {
                                className: "h-full w-full rounded-full "
                                  .concat(
                                    e.backgroundColor || "bg-gray-500",
                                    " transition-all duration-300 ",
                                  )
                                  .concat(
                                    n
                                      ? "scale-100 opacity-100 ring-2 ring-yellow-300"
                                      : "scale-75 opacity-70",
                                  ),
                              }),
                        }),
                      },
                      e.id,
                    );
                  }),
                },
                "swiper-".concat(r.length),
              ),
            }),
            (0, l.jsx)("div", {
              className: "w-full",
              children: (0, l.jsx)("div", {
                className: "mx-auto flex items-center justify-center gap-1",
                children: r.map((e, r) =>
                  (0, l.jsx)(
                    "button",
                    {
                      className: "group py-4",
                      onClick: () => handlePaginationClick(r),
                      "aria-label": "Select avatar ".concat(r + 1),
                      children: (0, l.jsx)("div", {
                        className:
                          "h-1 w-8 bg-teal-100 transition-all duration-300 ".concat(
                            r === a
                              ? "h-[6px] opacity-100"
                              : "opacity-50 group-hover:opacity-100",
                          ),
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
      (a(10453), a(62835), a(42890));
      var p = a(43976),
        x = a(75443),
        b = a(13782);
      function LaraHeroFallback() {
        return (0, l.jsxs)("div", {
          className: "relative mx-auto aspect-square w-full max-w-[500px]",
          children: [
            (0, l.jsx)("div", {
              className:
                "absolute left-1/2 top-1/2 aspect-square w-2/3 -translate-x-1/2 -translate-y-[calc(50%-2rem)] rounded-full bg-[radial-gradient(circle,#eab30880_0%,transparent_70%)]",
            }),
            (0, l.jsx)("div", {
              className: "relative z-10 h-full w-full -translate-x-8",
              children: (0, l.jsx)(c(), {
                src: "/images/welcome/Lara-Croft-Hero.png",
                alt: "Lara Croft",
                priority: !0,
                fill: !0,
                className: "relative z-10 object-contain",
              }),
            }),
          ],
        });
      }
      let y = {
        LeftContent: function (e) {
          let {
              selectedAvatar: r,
              onAvatarSelect: a,
              avatars: s,
              isLoadingAvatars: c,
            } = e,
            [d, u] = (0, n.useState)(0);
          return ((0, n.useEffect)(() => {
            s.length > 0 && !r && a(s[0]);
          }, [s, r, a]),
          c)
            ? (0, l.jsx)("div", {
                className: "flex h-full items-center justify-center",
                children: (0, l.jsx)(p.Z, {}),
              })
            : 0 === s.length
              ? (0, l.jsx)(LaraHeroFallback, {})
              : (0, l.jsx)(RaiderAvatarSelectSlider, {
                  avatars: s,
                  currentIndex: d,
                  onSlideChange: (e) => {
                    (u(e.realIndex), s[e.realIndex] && a(s[e.realIndex]));
                  },
                });
        },
        RightContent: function (e) {
          var r, a;
          let {
              onNext: s,
              onBack: c,
              control: h,
              errors: v,
              trigger: y,
              setError: j,
              watch: N,
              onRegistrationSuccess: k,
              headline: C,
              description: S,
              selectedAvatar: I,
            } = e,
            [E, A] = (0, n.useState)(!1),
            [P, R] = (0, n.useState)(!1),
            M = N("acceptTermsOfService"),
            handleSaveProfile = async () => {
              if (I && !I.isUnlocked) {
                j("root", {
                  type: "manual",
                  message: "Please select an unlocked avatar to continue.",
                });
                return;
              }
              let e = await y(["displayName", "acceptTermsOfService"]);
              if (e) {
                A(!0);
                try {
                  (await k(null == I ? void 0 : I.id),
                    (0, b.sendGTMEvent)({
                      event: "registration_raider_identity_complete",
                    }),
                    R(!0),
                    setTimeout(() => {
                      (R(!1), A(!1), s());
                    }, 1500));
                } catch (e) {
                  (A(!1), R(!1));
                }
              }
            };
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsxs)("div", {
                className: "text-center text-white",
                children: [
                  (0, l.jsx)("h2", {
                    className: "mb-2 text-3xl font-bold leading-tight",
                    children: C,
                  }),
                  (0, l.jsx)("p", { children: S }),
                ],
              }),
              (0, l.jsxs)("div", {
                className: "flex flex-col gap-2",
                children: [
                  (0, l.jsx)(g.Qr, {
                    name: "displayName",
                    control: h,
                    render: (e) => {
                      let { field: r } = e;
                      return (0, l.jsx)(d.Z, {
                        label: "Display Name",
                        placeholder: "Display Name",
                        error: v.displayName,
                        helperText:
                          "Choose a unique display name that other players will see",
                        ...r,
                      });
                    },
                  }),
                  (0, l.jsxs)("div", {
                    className: "mb-4",
                    children: [
                      (0, l.jsx)(g.Qr, {
                        name: "acceptTermsOfService",
                        control: h,
                        render: (e) => {
                          let {
                            field: { onChange: r, value: a },
                          } = e;
                          return (0, l.jsxs)(u.Z, {
                            id: "accept-terms-checkbox",
                            value: !!a,
                            onChange: (e) => r(e),
                            children: [
                              "I agree to the",
                              " ",
                              (0, l.jsx)(f.Z, {
                                defaultUnderlined: !0,
                                target: "_blank",
                                href: "/legal/terms",
                                children: "Terms of Service",
                              }),
                              " ",
                              "and",
                              " ",
                              (0, l.jsx)(f.Z, {
                                defaultUnderlined: !0,
                                target: "_blank",
                                href: "/legal/privacy",
                                children: "Privacy Policy",
                              }),
                            ],
                          });
                        },
                      }),
                      v.acceptTermsOfService &&
                        (0, l.jsx)(m.Z, { error: v.acceptTermsOfService }),
                    ],
                  }),
                  (null === (r = v.root) || void 0 === r
                    ? void 0
                    : r.message) &&
                    (0, l.jsx)("div", {
                      className: "text-red-error",
                      children: (0, l.jsx)(m.Z, {
                        error:
                          null === (a = v.root) || void 0 === a
                            ? void 0
                            : a.message,
                      }),
                    }),
                  (0, l.jsx)("button", {
                    onClick: handleSaveProfile,
                    type: "button",
                    id: "raider-identity-save-button",
                    className:
                      "rounded-lg border border-yellow-500 bg-yellow-500 py-2 text-black hover:bg-yellow-300 ".concat(
                        P ? "" : "disabled:opacity-50",
                      ),
                    disabled: !M || E || P,
                    children: E
                      ? P
                        ? (0, l.jsx)("span", {
                            className: "font-bold",
                            children: "Account Created!",
                          })
                        : (0, l.jsx)(p.Z, {})
                      : "Save Profile",
                  }),
                  (0, l.jsx)(x.Z, {
                    onClick: c,
                    full: !0,
                    id: "raider-identity-back-button",
                    disabled: E || P,
                    children: "Go Back",
                  }),
                ],
              }),
            ],
          });
        },
      };
    },
    3120: function (e, r, a) {
      "use strict";
      a.a(e, async function (e, l) {
        try {
          a.d(r, {
            k: function () {
              return RegistrationMultiStep;
            },
          });
          var n = a(97458),
            s = a(52983),
            c = a(570),
            d = a(39438),
            u = a(62997),
            m = a(53420),
            f = a(82262),
            g = e([f]);
          function RegistrationMultiStep(e) {
            let {
                currentStep: r,
                onNext: a,
                onSkip: l,
                onBack: g,
                control: h,
                errors: v,
                setValue: p,
                trigger: x,
                setError: b,
                watch: y,
                isSigningUpWithEmail: j,
                onRegistrationSuccess: N,
                onNewsletterUpdate: k,
                registrationPage: C,
              } = e,
              [S, I] = (0, s.useState)(null),
              [E, A] = (0, s.useState)([]),
              [P, R] = (0, s.useState)(!1);
            return ((0, s.useEffect)(() => {
              let fetchAvatars = async () => {
                let e = C.raiderIdentityAvatarOptions;
                if (!e || 0 === e.length) {
                  A([]);
                  return;
                }
                R(!0);
                try {
                  let r = await (0, f.dl)(e);
                  if ("data" in r && r.data) {
                    let e = r.data.avatars;
                    (A(e),
                      e.forEach((e) => {
                        if (e.imageUrl) {
                          let r = new Image();
                          r.src = e.imageUrl;
                        }
                      }));
                  } else
                    (console.error("Failed to fetch registration avatars"),
                      A([]));
                } catch (e) {
                  (console.error("Error fetching registration avatars:", e),
                    A([]));
                } finally {
                  R(!1);
                }
              };
              fetchAvatars();
            }, [C.raiderIdentityAvatarOptions]),
            r < 2 || r > 4)
              ? null
              : (0, n.jsxs)("div", {
                  className:
                    "flex w-full flex-col gap-8 lg:flex-row lg:items-center lg:gap-24 xl:gap-32",
                  children: [
                    (0, n.jsxs)("div", {
                      className:
                        "min-w-0 flex-1 transition-opacity duration-500",
                      children: [
                        2 === r &&
                          (0, n.jsx)(u.k.LeftContent, {
                            image: C.raiderDetailsImage,
                          }),
                        3 === r &&
                          (0, n.jsx)(d.g.LeftContent, {
                            selectedAvatar: S,
                            onAvatarSelect: (e) => {
                              I(e);
                            },
                            avatars: E,
                            isLoadingAvatars: P,
                          }),
                        4 === r &&
                          (0, n.jsx)(m.P.LeftContent, {
                            image: C.raiderCrewImage,
                          }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className:
                        "mx-auto flex w-full max-w-md flex-1 flex-col justify-center gap-2",
                      children: [
                        (0, n.jsx)(c.Y, { currentStep: r }),
                        (0, n.jsxs)("div", {
                          className:
                            "flex flex-col gap-10 transition-opacity duration-300",
                          children: [
                            2 === r &&
                              (0, n.jsx)(u.k.RightContent, {
                                onNext: a,
                                onBack: g,
                                control: h,
                                errors: v,
                                setValue: p,
                                trigger: x,
                                headline: C.raiderDetailsHeadline,
                                description: C.raiderDetailsDescription,
                              }),
                            3 === r &&
                              (0, n.jsx)(d.g.RightContent, {
                                onNext: a,
                                onBack: g,
                                control: h,
                                errors: v,
                                trigger: x,
                                setError: b,
                                watch: y,
                                onRegistrationSuccess: N,
                                headline: C.raiderIdentityHeadline,
                                description: C.raiderIdentityDescription,
                                selectedAvatar: S,
                              }),
                            4 === r &&
                              (0, n.jsx)(m.P.RightContent, {
                                onNext: a,
                                onSkip: null != l ? l : a,
                                control: h,
                                errors: v,
                                isSigningUpWithEmail: j,
                                trigger: x,
                                setError: b,
                                onNewsletterUpdate: k,
                                headline: C.raiderCrewHeadline,
                                description: C.raiderCrewDescription,
                                features: C.raiderCrewFeatures,
                              }),
                          ],
                        }),
                      ],
                    }),
                  ],
                });
          }
          ((f = (g.then ? (await g)() : g)[0]), l());
        } catch (e) {
          l(e);
        }
      });
    },
    73203: function (e, r, a) {
      "use strict";
      a.d(r, {
        K: function () {
          return SignUpOptions;
        },
      });
      var l = a(97458),
        n = a(52983),
        s = a(56526),
        c = a(86126),
        d = a(13057),
        u = a(86848),
        m = a(40340),
        f = a(43976),
        g = a(44346),
        h = a(75443);
      function SignUpOptions(e) {
        var r;
        let {
            raiderFeatureSlides: a,
            onEmailSignUp: v,
            onGoogleSignUp: p,
            onFacebookSignUp: x,
            onLogin: b,
            control: y,
            errors: j,
            emailCheckLoading: N,
            isSigningUpWithEmail: k,
            setIsSigningUpWithEmail: C,
            facebookLoginLoading: S,
            facebookSdkReady: I,
            googleLoginLoading: E,
            googleSdkReady: A,
          } = e,
          [P, R] = (0, n.useState)(0),
          [M, D] = (0, n.useState)(null),
          [T, _] = (0, n.useState)(null);
        return (0, l.jsxs)("div", {
          className:
            "flex w-full flex-col gap-8 lg:flex-row lg:items-center lg:gap-24 xl:gap-32",
          children: [
            (0, l.jsxs)("div", {
              className: "relative min-w-0 flex-1",
              children: [
                (0, l.jsx)("div", {
                  className:
                    "pointer-events-none absolute inset-0 -z-10 -translate-y-12 scale-[1.75]",
                  children: (0, l.jsx)(m.R, {
                    responsive: !1,
                    playAnimation: !0,
                  }),
                }),
                (0, l.jsx)(s.Y, {
                  features: a,
                  currentIndex: P,
                  onSwiper: D,
                  onSlideChange: (e) => {
                    R(e.realIndex);
                  },
                  controlledSwiper: T,
                  onSlideClick: (e) => {
                    (null == M || M.slideToLoop(e),
                      null == T || T.slideToLoop(e));
                  },
                }),
              ],
            }),
            (0, l.jsxs)("div", {
              className:
                "mx-auto flex w-full max-w-md flex-1 flex-col justify-center gap-10",
              children: [
                (0, l.jsx)(c.u, {
                  features: a,
                  onSwiper: _,
                  controlledSwiper: M,
                }),
                k
                  ? (0, l.jsxs)("div", {
                      className: "flex flex-col gap-2",
                      children: [
                        (0, l.jsx)(u.Qr, {
                          name: "email",
                          control: y,
                          render: (e) => {
                            let { field: r } = e;
                            return (0, l.jsx)(d.Z, {
                              label: "Email",
                              placeholder: "Email",
                              type: "email",
                              autoComplete: "email",
                              error: j.email,
                              ...r,
                            });
                          },
                        }),
                        (0, l.jsx)(u.Qr, {
                          name: "password",
                          control: y,
                          render: (e) => {
                            let { field: r } = e;
                            return (0, l.jsx)(d.Z, {
                              label: "Password",
                              placeholder: "Password",
                              type: "password",
                              autoComplete: "new-password",
                              error: j.password,
                              ...r,
                            });
                          },
                        }),
                        (0, l.jsxs)("button", {
                          onClick: v,
                          type: "button",
                          disabled: N,
                          id: "email-signup-continue-button",
                          className:
                            "mt-2 flex items-center justify-center gap-2 rounded-lg border border-yellow-500 bg-yellow-500 py-2 text-black hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-50",
                          children: [
                            N && (0, l.jsx)(f.Z, {}),
                            N ? "Checking..." : "Continue with Email",
                          ],
                        }),
                        (0, l.jsx)(h.Z, {
                          onClick: () => C(!1),
                          full: !0,
                          id: "email-signup-back-button",
                          children: "Go Back",
                        }),
                      ],
                    })
                  : (0, l.jsxs)("div", {
                      className: "flex flex-col space-y-4",
                      children: [
                        (0, l.jsx)("div", {
                          className: "text-center",
                          children: (0, l.jsx)("span", {
                            className: "text-sm text-gray-400",
                            children: "Continue with",
                          }),
                        }),
                        j.googleServerAuthCode &&
                          (0, l.jsx)(g.Z, { error: j.googleServerAuthCode }),
                        (0, l.jsxs)("div", {
                          className: "flex gap-3",
                          children: [
                            (0, l.jsxs)("button", {
                              onClick: p,
                              type: "button",
                              disabled: !A || E,
                              className:
                                "flex flex-1 justify-center rounded-lg border border-gray-600 p-2 hover:border-yellow-300 disabled:cursor-not-allowed disabled:opacity-50",
                              children: [
                                E
                                  ? (0, l.jsx)(f.Z, {})
                                  : (0, l.jsxs)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: "20",
                                      height: "21",
                                      viewBox: "0 0 20 21",
                                      fill: "none",
                                      children: [
                                        (0, l.jsx)("g", {
                                          clipPath: "url(#clip0_578_487)",
                                          children: (0, l.jsx)("path", {
                                            d: "M0 10.5C0 4.986 4.486 0.5 10 0.5C12.227 0.5 14.3348 1.21648 16.0956 2.572L13.7718 5.59067C12.683 4.75257 11.3788 4.30952 10 4.30952C6.58657 4.30952 3.80952 7.08657 3.80952 10.5C3.80952 13.9134 6.58657 16.6905 10 16.6905C12.7492 16.6905 15.0855 14.8892 15.8907 12.4048H10V8.59524H20V10.5C20 16.014 15.514 20.5 10 20.5C4.486 20.5 0 16.014 0 10.5Z",
                                            fill: "white",
                                          }),
                                        }),
                                        (0, l.jsx)("defs", {
                                          children: (0, l.jsx)("clipPath", {
                                            id: "clip0_578_487",
                                            children: (0, l.jsx)("rect", {
                                              width: "20",
                                              height: "20",
                                              fill: "white",
                                              transform: "translate(0 0.5)",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                (0, l.jsx)("span", {
                                  className: "sr-only",
                                  children: "Continue with Google",
                                }),
                              ],
                            }),
                            (0, l.jsxs)("button", {
                              onClick: x,
                              type: "button",
                              disabled: !I || S,
                              className:
                                "hidden flex-1 justify-center rounded-lg border border-gray-600 p-2 hover:border-yellow-300 disabled:cursor-not-allowed disabled:opacity-50",
                              children: [
                                S
                                  ? (0, l.jsx)(f.Z, {})
                                  : (0, l.jsxs)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: "20",
                                      height: "21",
                                      viewBox: "0 0 20 21",
                                      fill: "none",
                                      children: [
                                        (0, l.jsx)("g", {
                                          clipPath: "url(#clip0_578_490)",
                                          children: (0, l.jsx)("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M11.8213 20.5V11.5H14.5537L15 7.5H11.8213V5.55176C11.8213 4.52176 11.8476 3.5 13.2869 3.5H14.7447V0.640137C14.7447 0.597137 13.4925 0.5 12.2257 0.5C9.57999 0.5 7.9234 2.1572 7.9234 5.2002V7.5H5V11.5H7.9234V20.5H11.8213Z",
                                            fill: "white",
                                          }),
                                        }),
                                        (0, l.jsx)("defs", {
                                          children: (0, l.jsx)("clipPath", {
                                            id: "clip0_578_490",
                                            children: (0, l.jsx)("rect", {
                                              width: "20",
                                              height: "20",
                                              fill: "white",
                                              transform: "translate(0 0.5)",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                (0, l.jsx)("span", {
                                  className: "sr-only",
                                  children: "Continue with Facebook",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className: "relative flex items-center py-2",
                          children: [
                            (0, l.jsx)("div", {
                              className: "flex-grow border-t border-gray-600",
                            }),
                            (0, l.jsx)("span", {
                              className:
                                "mx-4 flex-shrink text-sm text-gray-400",
                              children: "or",
                            }),
                            (0, l.jsx)("div", {
                              className: "flex-grow border-t border-gray-600",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className: "flex flex-col gap-2",
                          children: [
                            (0, l.jsx)("button", {
                              onClick: () => C(!0),
                              type: "button",
                              id: "continue-with-email-button",
                              className:
                                "rounded-lg border border-yellow-500 bg-yellow-500 py-2 text-black hover:bg-yellow-300",
                              children: "Continue with Email",
                            }),
                            (0, l.jsx)(h.Z, {
                              onClick: b,
                              full: !0,
                              id: "login-button",
                              children: "Already a Raider? Login",
                            }),
                            (null === (r = j.root) || void 0 === r
                              ? void 0
                              : r.message) &&
                              (0, l.jsx)("p", {
                                className: "text-sm text-red-500",
                                children: j.root.message,
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
    2123: function (e, r, a) {
      "use strict";
      a.d(r, {
        _: function () {
          return l;
        },
      });
      let l = "facebook-account-not-found";
    },
    6472: function (e, r, a) {
      "use strict";
      a.a(e, async function (e, l) {
        try {
          (a.r(r),
            a.d(r, {
              __N_SSG: function () {
                return u;
              },
              default: function () {
                return Home;
              },
            }));
          var n = a(97458),
            s = a(53675),
            c = a(88798),
            d = e([s, c]);
          [s, c] = d.then ? (await d)() : d;
          var u = !0;
          function Home(e) {
            let { websiteSingleton: r, navItems: a, registrationPage: l } = e;
            return (0, n.jsx)(c.Z, {
              children: (0, n.jsx)(s.Z, {
                websiteSingleton: r,
                navItems: a,
                registrationPage: l,
              }),
            });
          }
          l();
        } catch (e) {
          l(e);
        }
      });
    },
    57865: function (e, r, a) {
      "use strict";
      a.d(r, {
        cn: function () {
          return cn;
        },
      });
      var l = a(28934),
        n = a(44361);
      function cn() {
        for (var e = arguments.length, r = Array(e), a = 0; a < e; a++)
          r[a] = arguments[a];
        return (0, n.m)((0, l.W)(r));
      }
    },
    30721: function (e, r, a) {
      "use strict";
      a.d(r, {
        v: function () {
          return L;
        },
      });
      var l,
        n,
        s,
        c,
        d = a(52983),
        u = a(59438),
        m = a(23285),
        f = a(20140),
        g = a(14940),
        h = a(31083),
        v = a(85682),
        p = a(14305),
        x = a(170),
        b =
          (((l = b || {})[(l.First = 0)] = "First"),
          (l[(l.Previous = 1)] = "Previous"),
          (l[(l.Next = 2)] = "Next"),
          (l[(l.Last = 3)] = "Last"),
          (l[(l.Specific = 4)] = "Specific"),
          (l[(l.Nothing = 5)] = "Nothing"),
          l),
        y = a(54376),
        j = a(93373),
        N = a(80213),
        k = a(38795),
        C = a(25874);
      function i(e) {
        var r;
        if (e.type) return e.type;
        let a = null != (r = e.as) ? r : "button";
        if ("string" == typeof a && "button" === a.toLowerCase())
          return "button";
      }
      var S = a(26917),
        I = a(7556);
      function t(e) {
        return [e.screenX, e.screenY];
      }
      let E =
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
      function o(e) {
        var r, a;
        let l = null != (r = e.innerText) ? r : "",
          n = e.cloneNode(!0);
        if (!(n instanceof HTMLElement)) return l;
        let s = !1;
        for (let e of n.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
          (e.remove(), (s = !0));
        let c = s ? (null != (a = n.innerText) ? a : "") : l;
        return (E.test(c) && (c = c.replace(E, "")), c);
      }
      var A =
          (((n = A || {})[(n.Open = 0)] = "Open"),
          (n[(n.Closed = 1)] = "Closed"),
          n),
        P =
          (((s = P || {})[(s.Pointer = 0)] = "Pointer"),
          (s[(s.Other = 1)] = "Other"),
          s),
        R =
          (((c = R || {})[(c.OpenMenu = 0)] = "OpenMenu"),
          (c[(c.CloseMenu = 1)] = "CloseMenu"),
          (c[(c.GoToItem = 2)] = "GoToItem"),
          (c[(c.Search = 3)] = "Search"),
          (c[(c.ClearSearch = 4)] = "ClearSearch"),
          (c[(c.RegisterItem = 5)] = "RegisterItem"),
          (c[(c.UnregisterItem = 6)] = "UnregisterItem"),
          c);
      function w(e, r = (e) => e) {
        let a = null !== e.activeItemIndex ? e.items[e.activeItemIndex] : null,
          l = (0, j.z2)(
            r(e.items.slice()),
            (e) => e.dataRef.current.domRef.current,
          ),
          n = a ? l.indexOf(a) : null;
        return (-1 === n && (n = null), { items: l, activeItemIndex: n });
      }
      let M = {
          1: (e) =>
            1 === e.menuState
              ? e
              : { ...e, activeItemIndex: null, menuState: 1 },
          0: (e) =>
            0 === e.menuState ? e : { ...e, __demoMode: !1, menuState: 0 },
          2: (e, r) => {
            var a;
            let l = w(e),
              n = (function (e, r) {
                let a = r.resolveItems();
                if (a.length <= 0) return null;
                let l = r.resolveActiveIndex(),
                  n = null != l ? l : -1,
                  s = (() => {
                    switch (e.focus) {
                      case 0:
                        return a.findIndex((e) => !r.resolveDisabled(e));
                      case 1: {
                        let e = a
                          .slice()
                          .reverse()
                          .findIndex(
                            (e, a, l) =>
                              (-1 === n || !(l.length - a - 1 >= n)) &&
                              !r.resolveDisabled(e),
                          );
                        return -1 === e ? e : a.length - 1 - e;
                      }
                      case 2:
                        return a.findIndex(
                          (e, a) => !(a <= n) && !r.resolveDisabled(e),
                        );
                      case 3: {
                        let e = a
                          .slice()
                          .reverse()
                          .findIndex((e) => !r.resolveDisabled(e));
                        return -1 === e ? e : a.length - 1 - e;
                      }
                      case 4:
                        return a.findIndex((a) => r.resolveId(a) === e.id);
                      case 5:
                        return null;
                      default:
                        !(function (e) {
                          throw Error("Unexpected object: " + e);
                        })(e);
                    }
                  })();
                return -1 === s ? l : s;
              })(r, {
                resolveItems: () => l.items,
                resolveActiveIndex: () => l.activeItemIndex,
                resolveId: (e) => e.id,
                resolveDisabled: (e) => e.dataRef.current.disabled,
              });
            return {
              ...e,
              ...l,
              searchQuery: "",
              activeItemIndex: n,
              activationTrigger: null != (a = r.trigger) ? a : 1,
            };
          },
          3: (e, r) => {
            let a = "" !== e.searchQuery ? 0 : 1,
              l = e.searchQuery + r.value.toLowerCase(),
              n = (
                null !== e.activeItemIndex
                  ? e.items
                      .slice(e.activeItemIndex + a)
                      .concat(e.items.slice(0, e.activeItemIndex + a))
                  : e.items
              ).find((e) => {
                var r;
                return (
                  (null == (r = e.dataRef.current.textValue)
                    ? void 0
                    : r.startsWith(l)) && !e.dataRef.current.disabled
                );
              }),
              s = n ? e.items.indexOf(n) : -1;
            return -1 === s || s === e.activeItemIndex
              ? { ...e, searchQuery: l }
              : {
                  ...e,
                  searchQuery: l,
                  activeItemIndex: s,
                  activationTrigger: 1,
                };
          },
          4: (e) =>
            "" === e.searchQuery
              ? e
              : { ...e, searchQuery: "", searchActiveItemIndex: null },
          5: (e, r) => {
            let a = w(e, (e) => [...e, { id: r.id, dataRef: r.dataRef }]);
            return { ...e, ...a };
          },
          6: (e, r) => {
            let a = w(e, (e) => {
              let a = e.findIndex((e) => e.id === r.id);
              return (-1 !== a && e.splice(a, 1), e);
            });
            return { ...e, ...a, activationTrigger: 1 };
          },
        },
        D = (0, d.createContext)(null);
      function O(e) {
        let r = (0, d.useContext)(D);
        if (null === r) {
          let r = Error(`<${e} /> is missing a parent <Menu /> component.`);
          throw (Error.captureStackTrace && Error.captureStackTrace(r, O), r);
        }
        return r;
      }
      function ye(e, r) {
        return (0, u.E)(r.type, M, e, r);
      }
      D.displayName = "MenuContext";
      let T = d.Fragment,
        _ = m.AN.RenderStrategy | m.AN.Static,
        F = d.Fragment,
        L = Object.assign(
          (0, m.yV)(function (e, r) {
            let { __demoMode: a = !1, ...l } = e,
              n = (0, d.useReducer)(ye, {
                __demoMode: a,
                menuState: a ? 0 : 1,
                buttonRef: (0, d.createRef)(),
                itemsRef: (0, d.createRef)(),
                items: [],
                searchQuery: "",
                activeItemIndex: null,
                activationTrigger: 1,
              }),
              [{ menuState: s, itemsRef: c, buttonRef: f }, g] = n,
              h = (0, v.T)(r);
            (0, N.O)(
              [f, c],
              (e, r) => {
                var a;
                (g({ type: 1 }),
                  (0, j.sP)(r, j.tJ.Loose) ||
                    (e.preventDefault(), null == (a = f.current) || a.focus()));
              },
              0 === s,
            );
            let p = (0, I.z)(() => {
                g({ type: 1 });
              }),
              x = (0, d.useMemo)(() => ({ open: 0 === s, close: p }), [s, p]);
            return d.createElement(
              D.Provider,
              { value: n },
              d.createElement(
                C.up,
                { value: (0, u.E)(s, { 0: C.ZM.Open, 1: C.ZM.Closed }) },
                (0, m.sY)({
                  ourProps: { ref: h },
                  theirProps: l,
                  slot: x,
                  defaultTag: T,
                  name: "Menu",
                }),
              ),
            );
          }),
          {
            Button: (0, m.yV)(function (e, r) {
              var a;
              let l = (0, p.M)(),
                { id: n = `headlessui-menu-button-${l}`, ...s } = e,
                [c, u] = O("Menu.Button"),
                f = (0, v.T)(c.buttonRef, r),
                j = (0, g.G)(),
                N = (0, I.z)((e) => {
                  switch (e.key) {
                    case x.R.Space:
                    case x.R.Enter:
                    case x.R.ArrowDown:
                      (e.preventDefault(),
                        e.stopPropagation(),
                        u({ type: 0 }),
                        j.nextFrame(() => u({ type: 2, focus: b.First })));
                      break;
                    case x.R.ArrowUp:
                      (e.preventDefault(),
                        e.stopPropagation(),
                        u({ type: 0 }),
                        j.nextFrame(() => u({ type: 2, focus: b.Last })));
                  }
                }),
                k = (0, I.z)((e) => {
                  e.key === x.R.Space && e.preventDefault();
                }),
                C = (0, I.z)((r) => {
                  if ((0, y.P)(r.currentTarget)) return r.preventDefault();
                  e.disabled ||
                    (0 === c.menuState
                      ? (u({ type: 1 }),
                        j.nextFrame(() => {
                          var e;
                          return null == (e = c.buttonRef.current)
                            ? void 0
                            : e.focus({ preventScroll: !0 });
                        }))
                      : (r.preventDefault(), u({ type: 0 })));
                }),
                S = (0, d.useMemo)(() => ({ open: 0 === c.menuState }), [c]),
                E = {
                  ref: f,
                  id: n,
                  type: (function (e, r) {
                    let [a, l] = (0, d.useState)(() => i(e));
                    return (
                      (0, h.e)(() => {
                        l(i(e));
                      }, [e.type, e.as]),
                      (0, h.e)(() => {
                        a ||
                          (r.current &&
                            r.current instanceof HTMLButtonElement &&
                            !r.current.hasAttribute("type") &&
                            l("button"));
                      }, [a, r]),
                      a
                    );
                  })(e, c.buttonRef),
                  "aria-haspopup": "menu",
                  "aria-controls":
                    null == (a = c.itemsRef.current) ? void 0 : a.id,
                  "aria-expanded": 0 === c.menuState,
                  onKeyDown: N,
                  onKeyUp: k,
                  onClick: C,
                };
              return (0, m.sY)({
                ourProps: E,
                theirProps: s,
                slot: S,
                defaultTag: "button",
                name: "Menu.Button",
              });
            }),
            Items: (0, m.yV)(function (e, r) {
              var a, l;
              let n = (0, p.M)(),
                { id: s = `headlessui-menu-items-${n}`, ...c } = e,
                [u, y] = O("Menu.Items"),
                N = (0, v.T)(u.itemsRef, r),
                E = (0, S.i)(u.itemsRef),
                A = (0, g.G)(),
                P = (0, C.oJ)(),
                R =
                  null !== P
                    ? (P & C.ZM.Open) === C.ZM.Open
                    : 0 === u.menuState;
              ((0, d.useEffect)(() => {
                let e = u.itemsRef.current;
                e &&
                  0 === u.menuState &&
                  e !== (null == E ? void 0 : E.activeElement) &&
                  e.focus({ preventScroll: !0 });
              }, [u.menuState, u.itemsRef, E]),
                (function ({
                  container: e,
                  accept: r,
                  walk: a,
                  enabled: l = !0,
                }) {
                  let n = (0, d.useRef)(r),
                    s = (0, d.useRef)(a);
                  ((0, d.useEffect)(() => {
                    ((n.current = r), (s.current = a));
                  }, [r, a]),
                    (0, h.e)(() => {
                      if (!e || !l) return;
                      let r = (0, k.r)(e);
                      if (!r) return;
                      let a = n.current,
                        c = s.current,
                        d = Object.assign((e) => a(e), { acceptNode: a }),
                        u = r.createTreeWalker(
                          e,
                          NodeFilter.SHOW_ELEMENT,
                          d,
                          !1,
                        );
                      for (; u.nextNode(); ) c(u.currentNode);
                    }, [e, l, n, s]));
                })({
                  container: u.itemsRef.current,
                  enabled: 0 === u.menuState,
                  accept: (e) =>
                    "menuitem" === e.getAttribute("role")
                      ? NodeFilter.FILTER_REJECT
                      : e.hasAttribute("role")
                        ? NodeFilter.FILTER_SKIP
                        : NodeFilter.FILTER_ACCEPT,
                  walk(e) {
                    e.setAttribute("role", "none");
                  },
                }));
              let M = (0, I.z)((e) => {
                  var r, a;
                  switch ((A.dispose(), e.key)) {
                    case x.R.Space:
                      if ("" !== u.searchQuery)
                        return (
                          e.preventDefault(),
                          e.stopPropagation(),
                          y({ type: 3, value: e.key })
                        );
                    case x.R.Enter:
                      if (
                        (e.preventDefault(),
                        e.stopPropagation(),
                        y({ type: 1 }),
                        null !== u.activeItemIndex)
                      ) {
                        let { dataRef: e } = u.items[u.activeItemIndex];
                        null ==
                          (a =
                            null == (r = e.current)
                              ? void 0
                              : r.domRef.current) || a.click();
                      }
                      (0, j.wI)(u.buttonRef.current);
                      break;
                    case x.R.ArrowDown:
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        y({ type: 2, focus: b.Next })
                      );
                    case x.R.ArrowUp:
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        y({ type: 2, focus: b.Previous })
                      );
                    case x.R.Home:
                    case x.R.PageUp:
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        y({ type: 2, focus: b.First })
                      );
                    case x.R.End:
                    case x.R.PageDown:
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        y({ type: 2, focus: b.Last })
                      );
                    case x.R.Escape:
                      (e.preventDefault(),
                        e.stopPropagation(),
                        y({ type: 1 }),
                        (0, f.k)().nextFrame(() => {
                          var e;
                          return null == (e = u.buttonRef.current)
                            ? void 0
                            : e.focus({ preventScroll: !0 });
                        }));
                      break;
                    case x.R.Tab:
                      (e.preventDefault(),
                        e.stopPropagation(),
                        y({ type: 1 }),
                        (0, f.k)().nextFrame(() => {
                          (0, j.EO)(
                            u.buttonRef.current,
                            e.shiftKey ? j.TO.Previous : j.TO.Next,
                          );
                        }));
                      break;
                    default:
                      1 === e.key.length &&
                        (y({ type: 3, value: e.key }),
                        A.setTimeout(() => y({ type: 4 }), 350));
                  }
                }),
                D = (0, I.z)((e) => {
                  e.key === x.R.Space && e.preventDefault();
                }),
                T = (0, d.useMemo)(() => ({ open: 0 === u.menuState }), [u]),
                F = {
                  "aria-activedescendant":
                    null === u.activeItemIndex ||
                    null == (a = u.items[u.activeItemIndex])
                      ? void 0
                      : a.id,
                  "aria-labelledby":
                    null == (l = u.buttonRef.current) ? void 0 : l.id,
                  id: s,
                  onKeyDown: M,
                  onKeyUp: D,
                  role: "menu",
                  tabIndex: 0,
                  ref: N,
                };
              return (0, m.sY)({
                ourProps: F,
                theirProps: c,
                slot: T,
                defaultTag: "div",
                features: _,
                visible: R,
                name: "Menu.Items",
              });
            }),
            Item: (0, m.yV)(function (e, r) {
              let a,
                l,
                n,
                s = (0, p.M)(),
                {
                  id: c = `headlessui-menu-item-${s}`,
                  disabled: u = !1,
                  ...g
                } = e,
                [x, y] = O("Menu.Item"),
                N =
                  null !== x.activeItemIndex &&
                  x.items[x.activeItemIndex].id === c,
                k = (0, d.useRef)(null),
                C = (0, v.T)(r, k);
              (0, h.e)(() => {
                if (
                  x.__demoMode ||
                  0 !== x.menuState ||
                  !N ||
                  0 === x.activationTrigger
                )
                  return;
                let e = (0, f.k)();
                return (
                  e.requestAnimationFrame(() => {
                    var e, r;
                    null ==
                      (r =
                        null == (e = k.current) ? void 0 : e.scrollIntoView) ||
                      r.call(e, { block: "nearest" });
                  }),
                  e.dispose
                );
              }, [
                x.__demoMode,
                k,
                N,
                x.menuState,
                x.activationTrigger,
                x.activeItemIndex,
              ]);
              let S =
                  ((a = (0, d.useRef)("")),
                  (l = (0, d.useRef)("")),
                  (0, I.z)(() => {
                    let e = k.current;
                    if (!e) return "";
                    let r = e.innerText;
                    if (a.current === r) return l.current;
                    let n = (function (e) {
                      let r = e.getAttribute("aria-label");
                      if ("string" == typeof r) return r.trim();
                      let a = e.getAttribute("aria-labelledby");
                      if (a) {
                        let e = a
                          .split(" ")
                          .map((e) => {
                            let r = document.getElementById(e);
                            if (r) {
                              let e = r.getAttribute("aria-label");
                              return "string" == typeof e
                                ? e.trim()
                                : o(r).trim();
                            }
                            return null;
                          })
                          .filter(Boolean);
                        if (e.length > 0) return e.join(", ");
                      }
                      return o(e).trim();
                    })(e)
                      .trim()
                      .toLowerCase();
                    return ((a.current = r), (l.current = n), n);
                  })),
                E = (0, d.useRef)({
                  disabled: u,
                  domRef: k,
                  get textValue() {
                    return S();
                  },
                });
              ((0, h.e)(() => {
                E.current.disabled = u;
              }, [E, u]),
                (0, h.e)(
                  () => (
                    y({ type: 5, id: c, dataRef: E }),
                    () => y({ type: 6, id: c })
                  ),
                  [E, c],
                ));
              let A = (0, I.z)(() => {
                  y({ type: 1 });
                }),
                P = (0, I.z)((e) => {
                  if (u) return e.preventDefault();
                  (y({ type: 1 }), (0, j.wI)(x.buttonRef.current));
                }),
                R = (0, I.z)(() => {
                  if (u) return y({ type: 2, focus: b.Nothing });
                  y({ type: 2, focus: b.Specific, id: c });
                }),
                M =
                  ((n = (0, d.useRef)([-1, -1])),
                  {
                    wasMoved(e) {
                      let r = t(e);
                      return (
                        (n.current[0] !== r[0] || n.current[1] !== r[1]) &&
                        ((n.current = r), !0)
                      );
                    },
                    update(e) {
                      n.current = t(e);
                    },
                  }),
                D = (0, I.z)((e) => M.update(e)),
                T = (0, I.z)((e) => {
                  M.wasMoved(e) &&
                    (u ||
                      N ||
                      y({ type: 2, focus: b.Specific, id: c, trigger: 0 }));
                }),
                _ = (0, I.z)((e) => {
                  M.wasMoved(e) &&
                    (u || (N && y({ type: 2, focus: b.Nothing })));
                }),
                L = (0, d.useMemo)(
                  () => ({ active: N, disabled: u, close: A }),
                  [N, u, A],
                );
              return (0, m.sY)({
                ourProps: {
                  id: c,
                  ref: C,
                  role: "menuitem",
                  tabIndex: !0 === u ? void 0 : -1,
                  "aria-disabled": !0 === u || void 0,
                  disabled: void 0,
                  onClick: P,
                  onFocus: R,
                  onPointerEnter: D,
                  onMouseEnter: D,
                  onPointerMove: T,
                  onMouseMove: T,
                  onPointerLeave: _,
                  onMouseLeave: _,
                },
                theirProps: g,
                slot: L,
                defaultTag: F,
                name: "Menu.Item",
              });
            }),
          },
        );
    },
  },
  function (e) {
    (e.O(
      0,
      [46, 681, 882, 34, 658, 696, 542, 249, 958, 774, 888, 179],
      function () {
        return e((e.s = 7044));
      },
    ),
      (_N_E = e.O()));
  },
]);
