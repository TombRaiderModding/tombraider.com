(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [979],
  {
    4026: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => s });
      var a = r(2183);
      r(36439);
      var l = r(97698);
      let o = () =>
        (0, a.jsxs)("svg", {
          viewBox: "0 0 48 48",
          className: "h-5 w-5",
          "aria-hidden": "true",
          children: [
            (0, a.jsx)("path", {
              fill: "#EA4335",
              d: "M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z",
            }),
            (0, a.jsx)("path", {
              fill: "#4285F4",
              d: "M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z",
            }),
            (0, a.jsx)("path", {
              fill: "#FBBC05",
              d: "M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z",
            }),
            (0, a.jsx)("path", {
              fill: "#34A853",
              d: "M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z",
            }),
            (0, a.jsx)("path", { fill: "none", d: "M0 0h48v48H0z" }),
          ],
        });
      function s({
        children: e = "Continue with Google",
        onClick: t,
        disabled: r,
        loading: i,
        fullWidth: n,
      }) {
        let c = r || i;
        return (0, a.jsxs)("button", {
          type: "button",
          onClick: c ? void 0 : t,
          className: `flex max-w-64 items-center justify-center gap-3 rounded-md border border-[#DADCE0] bg-white px-5 py-2 text-sm font-medium text-[#1F1F1F] shadow-sm transition hover:bg-[#F6F9FE] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] disabled:cursor-not-allowed disabled:border-[#E0E0E0] disabled:bg-[#F8F9FA] disabled:text-[#9AA0A6] ${n ? "w-full" : "w-auto"}`,
          disabled: c,
          children: [
            (0, a.jsx)("span", {
              className:
                "flex h-6 w-6 items-center justify-center rounded-full bg-transparent",
              children: (0, a.jsx)(o, {}),
            }),
            (0, a.jsx)("span", {
              className: "text-sm font-medium leading-6",
              children: e,
            }),
            i &&
              (0, a.jsx)("span", {
                className: "ml-2 flex items-center",
                children: (0, a.jsx)(l.A, {}),
              }),
          ],
        });
      }
    },
    7219: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => o });
      var a = r(2183),
        l = r(36439);
      function o({
        onUnlock: e,
        overlayText: t,
        label: r = "Open Vault Door",
        id: s = "unlockSwitch",
      }) {
        let [i, n] = (0, l.useState)(0);
        return (
          (0, l.useEffect)(() => {
            i > 90 && (e(), n(0));
          }, [i, e]),
          (0, a.jsxs)("div", {
            className:
              "unlock-switch relative z-50 mx-auto w-64 cursor-pointer rounded-full border border-white/60 bg-black/90 p-2",
            children: [
              (0, a.jsx)("label", {
                htmlFor: s,
                className: "sr-only",
                "aria-label": r,
                children: r,
              }),
              (0, a.jsx)("input", {
                className:
                  "relative block h-12 w-full cursor-pointer appearance-none rounded-full bg-transparent",
                type: "range",
                value: i,
                max: 100,
                id: s,
                name: s,
                onChange: (e) => n(Number(e.target.value)),
              }),
              (0, a.jsx)("span", {
                className:
                  "pointer-events-none absolute left-16 top-1/2 w-[calc(100%-4.5rem)] -translate-y-1/2 text-center",
                children: t,
              }),
            ],
          })
        );
      }
    },
    13221: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => o });
      var a = r(2183);
      r(36439);
      let l = [
        { number: 1, label: "Raider Details" },
        { number: 2, label: "Raider Identity" },
        { number: 3, label: "Join Lara's Crew" },
      ];
      function o({ currentStep: e }) {
        if (e < 2 || e > 4) return null;
        let t = e - 1;
        return (0, a.jsx)("div", {
          className: "mx-auto mb-4 w-3/4",
          children: (0, a.jsxs)("div", {
            className: "relative flex items-center justify-between",
            children: [
              (0, a.jsx)("div", {
                className:
                  "absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-yellow-500",
              }),
              l.map((e) => {
                let r = e.number === t,
                  l = e.number < t;
                return (0, a.jsxs)(
                  "div",
                  {
                    "aria-label": `Step ${e.number}: ${e.label}`,
                    className: `relative z-10 flex items-center justify-center rounded-full border-2 border-yellow-500 bg-black transition-all duration-500 ${l ? "bg-yellow-500 text-black" : r ? "bg-black px-4 py-2" : "h-10 w-10 bg-black"}`,
                    children: [
                      l
                        ? (0, a.jsx)("svg", {
                            className: "h-5 w-5",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: (0, a.jsx)("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 3,
                              d: "M5 13l4 4L19 7",
                            }),
                          })
                        : (0, a.jsx)("span", {
                            className: "text-sm text-white",
                            children: e.number,
                          }),
                      (0, a.jsx)("div", {
                        className: `overflow-hidden whitespace-nowrap text-sm text-white transition-all duration-500 ${r ? "block" : "hidden"}`,
                        children: (0, a.jsx)("span", {
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
    21984: (e, t, r) => {
      "use strict";
      r.d(t, { S: () => w });
      var a = r(2183),
        l = r(36439),
        o = r(15013),
        s = r.n(o),
        i = r(25514),
        n = r(39188),
        c = r(27811);
      function d(e) {
        let { defaultUnderlined: t, bold: r, ...l } = e;
        return (0, a.jsx)("a", {
          className: `${t ? "underline hover:no-underline" : "hover:underline"} ${r && "font-bold"}`,
          ...l,
          children: e.children,
        });
      }
      var u = r(80777),
        m = r(94536),
        h = r(63308);
      function g({ avatars: e, currentIndex: t, onSlideChange: r }) {
        let [o, i] = (0, l.useState)(null);
        return (0, a.jsxs)("div", {
          className: "w-full",
          children: [
            (0, a.jsx)("div", {
              className: "relative w-full",
              children: (0, a.jsx)(
                m.RC,
                {
                  grabCursor: !0,
                  modules: [h.Vx, h.dK],
                  onSwiper: (e) => {
                    i(e);
                  },
                  onSlideChange: r,
                  onClick: (e) => {
                    let t = e.clickedIndex,
                      r = e.slides[t]?.getAttribute("data-swiper-slide-index");
                    if (null != r) {
                      let t = parseInt(r, 10);
                      t !== e.realIndex && e.slideToLoop(t);
                    }
                  },
                  centeredSlides: !0,
                  loop: e.length > 0,
                  slidesPerView: 3,
                  spaceBetween: 0,
                  breakpoints: {
                    320: { slidesPerView: 2 },
                    768: { slidesPerView: 2.5 },
                    1024: { slidesPerView: 3 },
                  },
                  className:
                    "avatar-swiper !overflow-visible py-8 lg:!overflow-hidden",
                  children: e.map((e, r) => {
                    let l = r === t,
                      o = !1 === e.isUnlocked;
                    return (0, a.jsx)(
                      m.qr,
                      {
                        className: "flex items-center justify-center py-4",
                        children: (0, a.jsx)("div", {
                          className:
                            "flex aspect-square w-full items-center justify-center transition-all duration-300",
                          children: e.imageUrl
                            ? (0, a.jsxs)("div", {
                                className: `relative h-full w-full overflow-hidden rounded-full transition-all duration-300 ${l ? "scale-100 opacity-100 ring-2 ring-yellow-500" : "scale-75 opacity-70 ring-0"}`,
                                children: [
                                  (0, a.jsx)(s(), {
                                    src: e.imageUrl,
                                    alt: e.title || `Avatar ${e.id}`,
                                    fill: !0,
                                    className: "object-cover",
                                    sizes: "(max-width: 640px) 20vw, 10vw",
                                  }),
                                  o &&
                                    (0, a.jsxs)("div", {
                                      className:
                                        "absolute inset-0 flex flex-col items-center justify-center bg-black/50",
                                      children: [
                                        (0, a.jsx)("svg", {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          className: "h-16 w-16 text-white",
                                          fill: "none",
                                          viewBox: "0 0 24 24",
                                          stroke: "currentColor",
                                          children: (0, a.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                                          }),
                                        }),
                                        (0, a.jsx)("span", {
                                          children: "Earn as Reward",
                                        }),
                                      ],
                                    }),
                                ],
                              })
                            : (0, a.jsx)("div", {
                                className: `h-full w-full rounded-full ${e.backgroundColor || "bg-gray-500"} transition-all duration-300 ${l ? "scale-100 opacity-100 ring-2 ring-yellow-300" : "scale-75 opacity-70"}`,
                              }),
                        }),
                      },
                      e.id,
                    );
                  }),
                },
                `swiper-${e.length}`,
              ),
            }),
            (0, a.jsx)("div", {
              className: "w-full",
              children: (0, a.jsx)("div", {
                className: "mx-auto flex items-center justify-center gap-1",
                children: e.map((e, r) =>
                  (0, a.jsx)(
                    "button",
                    {
                      type: "button",
                      className: "group py-4",
                      onClick: () => {
                        o?.slideToLoop(r);
                      },
                      "aria-label": `Select avatar ${r + 1}`,
                      children: (0, a.jsx)("div", {
                        className: `h-1 w-8 bg-teal-100 transition-all duration-300 ${r === t ? "h-[6px] opacity-100" : "opacity-50 group-hover:opacity-100"}`,
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
      (r(65277), r(21325), r(7295));
      var f = r(97698),
        x = r(64171),
        p = r(26330),
        b = r(46976);
      function v() {
        return (0, a.jsxs)("div", {
          className: "relative mx-auto aspect-square w-full max-w-[500px]",
          children: [
            (0, a.jsx)("div", {
              className:
                "absolute left-1/2 top-1/2 aspect-square w-2/3 -translate-x-1/2 -translate-y-[calc(50%-2rem)] rounded-full bg-[radial-gradient(circle,#eab30880_0%,transparent_70%)]",
            }),
            (0, a.jsx)("div", {
              className: "relative z-10 h-full w-full -translate-x-8",
              children: (0, a.jsx)(s(), {
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
      let w = {
        LeftContent: function ({
          selectedAvatar: e,
          onAvatarSelect: t,
          avatars: r,
          isLoadingAvatars: o,
        }) {
          let [s, i] = (0, l.useState)(0);
          return ((0, l.useEffect)(() => {
            r.length > 0 && !e && t(r[0]);
          }, [r, e, t]),
          o)
            ? (0, a.jsx)("div", {
                className: "flex h-full items-center justify-center",
                children: (0, a.jsx)(f.A, {}),
              })
            : 0 === r.length
              ? (0, a.jsx)(v, {})
              : (0, a.jsx)(g, {
                  avatars: r,
                  currentIndex: s,
                  onSlideChange: (e) => {
                    (i(e.realIndex), r[e.realIndex] && t(r[e.realIndex]));
                  },
                });
        },
        RightContent: function ({
          onNext: e,
          onBack: t,
          control: r,
          errors: o,
          trigger: s,
          setError: m,
          watch: h,
          onRegistrationSuccess: g,
          headline: v,
          description: w,
          selectedAvatar: y,
        }) {
          let [j, k] = (0, l.useState)(!1),
            [N, C] = (0, l.useState)(!1),
            A = (0, b.A)(o),
            S = h("acceptTermsOfService"),
            E = async () => {
              if (y && !y.isUnlocked)
                return void m("root", {
                  type: "manual",
                  message: "Please select an unlocked avatar to continue.",
                });
              if (await s(["displayName", "acceptTermsOfService"])) {
                k(!0);
                try {
                  (await g(y?.id),
                    (0, p.sendGTMEvent)({
                      event: "registration_raider_identity_complete",
                    }),
                    C(!0),
                    setTimeout(() => {
                      (C(!1), k(!1), e());
                    }, 1500));
                } catch {
                  (k(!1), C(!1));
                }
              }
            };
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("div", {
                className: "text-center text-white",
                children: [
                  (0, a.jsx)("h2", {
                    className: "mb-2 text-3xl font-bold leading-tight",
                    children: v,
                  }),
                  (0, a.jsx)("p", { children: w }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "flex flex-col gap-2",
                children: [
                  (0, a.jsx)(u.xI, {
                    name: "displayName",
                    control: r,
                    render: ({ field: e }) =>
                      (0, a.jsx)(i.A, {
                        label: "Display Name",
                        placeholder: "Display Name",
                        error: o.displayName,
                        helperText:
                          "Choose a unique display name that other players will see",
                        ...e,
                      }),
                  }),
                  (0, a.jsxs)("div", {
                    className: "mb-4",
                    children: [
                      (0, a.jsx)(u.xI, {
                        name: "acceptTermsOfService",
                        control: r,
                        render: ({ field: { onChange: e, value: t } }) =>
                          (0, a.jsxs)(n.A, {
                            id: "accept-terms-checkbox",
                            value: !!t,
                            onChange: (t) => e(t),
                            children: [
                              "I agree to the",
                              " ",
                              (0, a.jsx)(d, {
                                defaultUnderlined: !0,
                                target: "_blank",
                                href: "/legal/terms",
                                children: "Terms of Service",
                              }),
                              " ",
                              "and",
                              " ",
                              (0, a.jsx)(d, {
                                defaultUnderlined: !0,
                                target: "_blank",
                                href: "/legal/privacy",
                                children: "Privacy Policy",
                              }),
                            ],
                          }),
                      }),
                      o.acceptTermsOfService &&
                        (0, a.jsx)(c.A, { error: o.acceptTermsOfService }),
                    ],
                  }),
                  A &&
                    (0, a.jsx)("div", {
                      className: "text-red-error",
                      children: (0, a.jsx)(c.A, { error: A }),
                    }),
                  (0, a.jsx)("button", {
                    onClick: E,
                    type: "button",
                    id: "raider-identity-save-button",
                    className: `rounded-lg border border-yellow-500 bg-yellow-500 py-2 text-black hover:bg-yellow-300 ${!N ? "disabled:opacity-50" : ""}`,
                    disabled: !S || j || N,
                    children: j
                      ? N
                        ? (0, a.jsx)("span", {
                            className: "font-bold",
                            children: "Account Created!",
                          })
                        : (0, a.jsx)(f.A, {})
                      : "Save Profile",
                  }),
                  (0, a.jsx)(x.A, {
                    onClick: t,
                    full: !0,
                    id: "raider-identity-back-button",
                    disabled: j || N,
                    children: "Go Back",
                  }),
                ],
              }),
            ],
          });
        },
      };
    },
    22007: (e, t, r) => {
      "use strict";
      r.a(e, async (e, a) => {
        try {
          r.d(t, { Fc: () => d });
          var l = r(75109),
            o = r(46951),
            s = e([l]);
          l = (s.then ? (await s)() : s)[0];
          let i = (0, l.FH_)(o.p6U()).extend({
              registrationMethod: o.euz("email"),
              facebookAccessToken: o.YjP().optional(),
              googleServerAuthCode: o.YjP().optional(),
            }),
            n = (0, l.x0b)(o.p6U())
              .extend({
                registrationMethod: o.euz("facebook"),
                facebookAccessToken: o.YjP().optional(),
                googleServerAuthCode: o.YjP().optional(),
                password: o.YjP().optional(),
              })
              .superRefine((e, t) => {
                e.facebookAccessToken?.trim() ||
                  t.addIssue({
                    code: "custom",
                    message:
                      "Please connect your Facebook account before continuing registration.",
                    path: ["root"],
                  });
              }),
            c = (0, l.x0b)(o.p6U())
              .extend({
                registrationMethod: o.euz("google"),
                googleServerAuthCode: o.YjP().optional(),
                facebookAccessToken: o.YjP().optional(),
                password: o.YjP().optional(),
              })
              .superRefine((e, t) => {
                e.googleServerAuthCode?.trim() ||
                  t.addIssue({
                    code: "custom",
                    message:
                      "Please connect your Google account before continuing registration.",
                    path: ["root"],
                  });
              }),
            d = o.gMt("registrationMethod", [i, n, c]);
          a();
        } catch (e) {
          a(e);
        }
      });
    },
    27933: (e, t, r) => {
      "use strict";
      r.a(e, async (e, a) => {
        try {
          r.d(t, { j: () => m });
          var l = r(2183),
            o = r(36439),
            s = r(13221),
            i = r(21984),
            n = r(89210),
            c = r(52713),
            d = r(83737),
            u = e([d]);
          function m({
            currentStep: e,
            onNext: t,
            onSkip: r,
            onBack: a,
            control: u,
            errors: h,
            setValue: g,
            trigger: f,
            setError: x,
            watch: p,
            isSigningUpWithEmail: b,
            onRegistrationSuccess: v,
            onNewsletterUpdate: w,
            registrationPage: y,
          }) {
            let [j, k] = (0, o.useState)(null),
              [N, C] = (0, o.useState)([]),
              [A, S] = (0, o.useState)(!1);
            return ((0, o.useEffect)(() => {
              (async () => {
                let e = y.raiderIdentityAvatarOptions;
                if (!e || 0 === e.length) return void C([]);
                S(!0);
                try {
                  let t = await (0, d.QH)(e);
                  if ("data" in t && t.data) {
                    let e = t.data.avatars;
                    (C(e),
                      e.forEach((e) => {
                        e.imageUrl && (new Image().src = e.imageUrl);
                      }));
                  } else
                    (console.error("Failed to fetch registration avatars"),
                      C([]));
                } catch (e) {
                  (console.error("Error fetching registration avatars:", e),
                    C([]));
                } finally {
                  S(!1);
                }
              })();
            }, [y.raiderIdentityAvatarOptions]),
            e < 2 || e > 4)
              ? null
              : (0, l.jsxs)("div", {
                  className:
                    "flex w-full flex-col gap-8 lg:flex-row lg:items-center lg:gap-24 xl:gap-32",
                  children: [
                    (0, l.jsxs)("div", {
                      className:
                        "min-w-0 flex-1 transition-opacity duration-500",
                      children: [
                        2 === e &&
                          (0, l.jsx)(n.Q.LeftContent, {
                            image: y.raiderDetailsImage,
                          }),
                        3 === e &&
                          (0, l.jsx)(i.S.LeftContent, {
                            selectedAvatar: j,
                            onAvatarSelect: (e) => {
                              k(e);
                            },
                            avatars: N,
                            isLoadingAvatars: A,
                          }),
                        4 === e &&
                          (0, l.jsx)(c.h.LeftContent, {
                            image: y.raiderCrewImage,
                          }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className:
                        "mx-auto flex w-full max-w-md flex-1 flex-col justify-center gap-2",
                      children: [
                        (0, l.jsx)(s.Z, { currentStep: e }),
                        (0, l.jsxs)("div", {
                          className:
                            "flex flex-col gap-10 transition-opacity duration-300",
                          children: [
                            2 === e &&
                              (0, l.jsx)(n.Q.RightContent, {
                                onNext: t,
                                onBack: a,
                                control: u,
                                errors: h,
                                setValue: g,
                                trigger: f,
                                headline: y.raiderDetailsHeadline,
                                description: y.raiderDetailsDescription,
                              }),
                            3 === e &&
                              (0, l.jsx)(i.S.RightContent, {
                                onNext: t,
                                onBack: a,
                                control: u,
                                errors: h,
                                trigger: f,
                                setError: x,
                                watch: p,
                                onRegistrationSuccess: v,
                                headline: y.raiderIdentityHeadline,
                                description: y.raiderIdentityDescription,
                                selectedAvatar: j,
                              }),
                            4 === e &&
                              (0, l.jsx)(c.h.RightContent, {
                                onNext: t,
                                onSkip: r ?? t,
                                control: u,
                                errors: h,
                                isSigningUpWithEmail: b,
                                trigger: f,
                                setError: x,
                                onNewsletterUpdate: w,
                                headline: y.raiderCrewHeadline,
                                description: y.raiderCrewDescription,
                                features: y.raiderCrewFeatures,
                              }),
                          ],
                        }),
                      ],
                    }),
                  ],
                });
          }
          ((d = (u.then ? (await u)() : u)[0]), a());
        } catch (e) {
          a(e);
        }
      });
    },
    28564: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => d });
      var a = r(2183),
        l = r(36439),
        o = r(85414),
        s = r(95290),
        i = r(61932),
        n = r(46728),
        c = r.n(n);
      function d(e) {
        let {
            items: t,
            selected: r,
            onSelect: n = () => {},
            placeholder: d = "Options",
            error: u,
            variant: m,
            rounded: h = !1,
          } = e,
          g = (e) => (e ? ("string" == typeof e ? e : e.name) : ""),
          f = (e) => {
            n("string" == typeof e ? e : e.value);
          };
        return (0, a.jsxs)(o.Menu, {
          as: "div",
          className: "relative inline-block w-full grow text-left",
          children: [
            (0, a.jsx)("div", {
              children: (0, a.jsxs)(o.Menu.Button, {
                className: (0, i.cn)(
                  "flex w-full items-center border-2 bg-white/20 px-3 py-4 backdrop-blur duration-200 outline-none",
                  u
                    ? "border-red-500/40 hover:border-red-500/70 focus:border-red-500/70"
                    : "dark" === m
                      ? "rounded-lg border-black/20 px-5 py-3 hover:border-black/40 focus:border-black/40"
                      : "border-gray-300/20 hover:border-white/50 focus:border-white",
                  "dark" === m ? "text-black" : "text-white",
                  h && "rounded-lg",
                ),
                children: [
                  r
                    ? "string" == typeof t[0]
                      ? r
                      : t.find((e) => e.value === r)?.name
                    : d,
                  (0, a.jsx)("div", { className: "grow" }),
                  (0, a.jsx)(s.A, {
                    className: `${"dark" === m ? "text-black" : "text-yellow"} -mr-1 h-6 w-6`,
                    "aria-hidden": "true",
                    color: "#E9BC6C",
                  }),
                ],
              }),
            }),
            (0, a.jsx)(o.Transition, {
              as: l.Fragment,
              enter: "transition ease-out duration-100",
              enterFrom: "transform opacity-0 scale-95",
              enterTo: "transform opacity-100 scale-100",
              leave: "transition ease-in duration-75",
              leaveFrom: "transform opacity-100 scale-100",
              leaveTo: "transform opacity-0 scale-95",
              children: (0, a.jsx)(o.Menu.Items, {
                className:
                  "absolute left-0 z-30 mt-2 max-h-60 w-full origin-top-right overflow-y-auto rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none",
                children: (0, a.jsx)("div", {
                  className: "py-1",
                  children: t.map((e) =>
                    (0, a.jsx)(
                      o.Menu.Item,
                      {
                        children: ({ active: t }) => {
                          let r = "string" != typeof e ? e.href : void 0,
                            l = (function (...e) {
                              return e.filter(Boolean).join(" ");
                            })(
                              t ? "bg-gray-100 text-gray-900" : "text-gray-700",
                              "block px-4 py-2 text-sm",
                            );
                          return r
                            ? (0, a.jsx)(c(), {
                                scroll: !1,
                                href: r,
                                onClick: () => f(e),
                                className: l,
                                children: g(e),
                              })
                            : (0, a.jsx)("button", {
                                type: "button",
                                onClick: () => f(e),
                                className: `w-full text-left ${l}`,
                                children: g(e),
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
    28872: (e, t, r) => {
      "use strict";
      e.exports = r(94528);
    },
    39188: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => l });
      var a = r(2183);
      function l(e) {
        let {
          children: t,
          variant: r = "normal",
          value: l,
          onChange: o,
          id: s,
        } = e;
        return (0, a.jsx)("div", {
          className: "relative",
          children: (0, a.jsxs)("label", {
            className: "main flex cursor-pointer items-center",
            children: [
              (0, a.jsx)("p", { className: "ml-8 select-none", children: t }),
              (0, a.jsx)("input", {
                id: s,
                checked: l,
                onChange: (e) => o(e.target.checked),
                type: "checkbox",
              }),
              (0, a.jsx)("span", {
                className: `geekmark backdrop-blur outline-none ${"normal" === r ? "geekmark-light border-2 border-gray-300/20 bg-white/20 duration-200 hover:border-white/50 focus:border-white" : "geekmark-dark border-2 border-gray-500/30 bg-gray-800/10 duration-200 hover:border-gray-800/60 focus:border-gray-800/80"}`,
              }),
            ],
          }),
        });
      }
      r(36439);
    },
    40791: (e, t, r) => {
      "use strict";
      r.d(t, { F: () => c });
      var a = r(2183),
        l = r(36439),
        o = r(15013),
        s = r.n(o),
        i = r(72990),
        n = r(7219);
      function c({
        onUnlockDashboard: e,
        celebrationDescription: t,
        celebrationImage: r,
      }) {
        let [o, d] = (0, l.useState)(!1),
          u = r?.fields?.file?.url
            ? `https:${r.fields.file.url}`
            : "/images/welcome/Lara-Croft-Hero.png";
        return (
          (0, l.useEffect)(() => {
            d(!0);
          }, []),
          (0, a.jsxs)("div", {
            className:
              "flex w-full flex-col gap-8 lg:flex-row lg:items-center lg:gap-24 xl:gap-32",
            children: [
              (0, a.jsx)("div", {
                className: "min-w-0 flex-1",
                children: (0, a.jsxs)("div", {
                  className:
                    "relative mx-auto aspect-square w-full max-w-[500px]",
                  children: [
                    (0, a.jsx)("div", {
                      className: "absolute inset-0 scale-125",
                      children: (0, a.jsx)(i.y, {
                        responsive: !1,
                        playAnimation: o,
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "absolute left-1/2 top-1/2 aspect-square w-2/3 -translate-x-1/2 -translate-y-[calc(50%-2rem)] rounded-full bg-[radial-gradient(circle,#eab30880_0%,transparent_70%)]",
                    }),
                    (0, a.jsx)("div", {
                      className: "relative z-10 h-full w-full -translate-x-8",
                      children: (0, a.jsx)(s(), {
                        src: u,
                        alt: "Lara Croft",
                        priority: !0,
                        fill: !0,
                        className: "relative z-10 object-contain",
                      }),
                    }),
                  ],
                }),
              }),
              (0, a.jsx)("div", {
                className:
                  "relative z-10 mx-auto flex w-full max-w-md flex-1 flex-col justify-center",
                children: (0, a.jsxs)("div", {
                  className: "flex flex-col gap-8 text-center",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "text-white",
                      children: [
                        (0, a.jsx)("h2", {
                          className: "mb-2 font-bold uppercase tracking-wider",
                          children: "WELCOME TO THE",
                        }),
                        (0, a.jsx)("h1", {
                          className: "mb-4 text-4xl font-bold leading-tight",
                          children: "Society of Raiders!",
                        }),
                        (0, a.jsx)("p", {
                          className: "text-lg leading-relaxed",
                          children: t,
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex flex-col gap-3",
                      children: [
                        (0, a.jsx)(n.A, {
                          onUnlock: e,
                          overlayText: "Continue Your Journey",
                          id: "unlock-dashboard-button",
                          label: "Continue Your Journey",
                        }),
                        (0, a.jsx)("a", {
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
    43455: (e, t, r) => {
      "use strict";
      r.d(t, { v: () => g });
      var a = r(2183),
        l = r(36439),
        o = r(13297),
        s = r(17268),
        i = r(25514),
        n = r(80777),
        c = r(72990),
        d = r(97698),
        u = r(27811),
        m = r(64171),
        h = r(46976);
      function g({
        raiderFeatureSlides: e,
        onEmailSignUp: t,
        onGoogleSignUp: r,
        onFacebookSignUp: f,
        onLogin: x,
        control: p,
        errors: b,
        emailCheckLoading: v,
        isSigningUpWithEmail: w,
        setIsSigningUpWithEmail: y,
        facebookLoginLoading: j,
        facebookSdkReady: k,
        googleLoginLoading: N,
        googleSdkReady: C,
      }) {
        let [A, S] = (0, l.useState)(0),
          [E, I] = (0, l.useState)(null),
          [P, _] = (0, l.useState)(null),
          M = (0, h.A)(b);
        return (0, a.jsxs)("div", {
          className:
            "flex w-full flex-col gap-8 lg:flex-row lg:items-center lg:gap-24 xl:gap-32",
          children: [
            (0, a.jsxs)("div", {
              className: "relative min-w-0 flex-1",
              children: [
                (0, a.jsx)("div", {
                  className:
                    "pointer-events-none absolute inset-0 -z-10 -translate-y-12 scale-[1.75]",
                  children: (0, a.jsx)(c.y, {
                    responsive: !1,
                    playAnimation: !0,
                  }),
                }),
                (0, a.jsx)(o.J, {
                  features: e,
                  currentIndex: A,
                  onSwiper: I,
                  onSlideChange: (e) => {
                    S(e.realIndex);
                  },
                  controlledSwiper: P,
                  onSlideClick: (e) => {
                    (E?.slideTo(e), P?.slideTo(e));
                  },
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className:
                "mx-auto flex w-full max-w-md flex-1 flex-col justify-center gap-10",
              children: [
                (0, a.jsx)(s.G, {
                  features: e,
                  onSwiper: _,
                  controlledSwiper: E,
                }),
                w
                  ? (0, a.jsxs)("div", {
                      className: "flex flex-col gap-2",
                      children: [
                        (0, a.jsx)(n.xI, {
                          name: "email",
                          control: p,
                          render: ({ field: e }) =>
                            (0, a.jsx)(i.A, {
                              label: "Email",
                              placeholder: "Email",
                              type: "email",
                              autoComplete: "email",
                              error: b.email,
                              ...e,
                            }),
                        }),
                        (0, a.jsx)(n.xI, {
                          name: "password",
                          control: p,
                          render: ({ field: e }) =>
                            (0, a.jsx)(i.A, {
                              label: "Password",
                              placeholder: "Password",
                              type: "password",
                              autoComplete: "new-password",
                              error: b.password,
                              ...e,
                            }),
                        }),
                        (0, a.jsxs)("button", {
                          onClick: t,
                          type: "button",
                          disabled: v,
                          id: "email-signup-continue-button",
                          className:
                            "mt-2 flex items-center justify-center gap-2 rounded-lg border border-yellow-500 bg-yellow-500 py-2 text-black hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-50",
                          children: [
                            v && (0, a.jsx)(d.A, {}),
                            v ? "Checking..." : "Continue with Email",
                          ],
                        }),
                        (0, a.jsx)(m.A, {
                          onClick: () => y(!1),
                          full: !0,
                          id: "email-signup-back-button",
                          children: "Go Back",
                        }),
                      ],
                    })
                  : (0, a.jsxs)("div", {
                      className: "flex flex-col space-y-4",
                      children: [
                        (0, a.jsx)("div", {
                          className: "text-center",
                          children: (0, a.jsx)("span", {
                            className: "text-sm text-gray-400",
                            children: "Continue with",
                          }),
                        }),
                        b.googleServerAuthCode &&
                          (0, a.jsx)(u.A, { error: b.googleServerAuthCode }),
                        (0, a.jsxs)("div", {
                          className: "flex gap-3",
                          children: [
                            (0, a.jsxs)("button", {
                              onClick: r,
                              type: "button",
                              disabled: !C || N,
                              className:
                                "flex flex-1 justify-center rounded-lg border border-gray-600 p-2 hover:border-yellow-300 disabled:cursor-not-allowed disabled:opacity-50",
                              children: [
                                N
                                  ? (0, a.jsx)(d.A, {})
                                  : (0, a.jsxs)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: "20",
                                      height: "21",
                                      viewBox: "0 0 20 21",
                                      fill: "none",
                                      children: [
                                        (0, a.jsx)("g", {
                                          clipPath: "url(#clip0_578_487)",
                                          children: (0, a.jsx)("path", {
                                            d: "M0 10.5C0 4.986 4.486 0.5 10 0.5C12.227 0.5 14.3348 1.21648 16.0956 2.572L13.7718 5.59067C12.683 4.75257 11.3788 4.30952 10 4.30952C6.58657 4.30952 3.80952 7.08657 3.80952 10.5C3.80952 13.9134 6.58657 16.6905 10 16.6905C12.7492 16.6905 15.0855 14.8892 15.8907 12.4048H10V8.59524H20V10.5C20 16.014 15.514 20.5 10 20.5C4.486 20.5 0 16.014 0 10.5Z",
                                            fill: "white",
                                          }),
                                        }),
                                        (0, a.jsx)("defs", {
                                          children: (0, a.jsx)("clipPath", {
                                            id: "clip0_578_487",
                                            children: (0, a.jsx)("rect", {
                                              width: "20",
                                              height: "20",
                                              fill: "white",
                                              transform: "translate(0 0.5)",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                (0, a.jsx)("span", {
                                  className: "sr-only",
                                  children: "Continue with Google",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("button", {
                              onClick: f,
                              type: "button",
                              disabled: !k || j,
                              className:
                                "hidden flex-1 justify-center rounded-lg border border-gray-600 p-2 hover:border-yellow-300 disabled:cursor-not-allowed disabled:opacity-50",
                              children: [
                                j
                                  ? (0, a.jsx)(d.A, {})
                                  : (0, a.jsxs)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: "20",
                                      height: "21",
                                      viewBox: "0 0 20 21",
                                      fill: "none",
                                      children: [
                                        (0, a.jsx)("g", {
                                          clipPath: "url(#clip0_578_490)",
                                          children: (0, a.jsx)("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M11.8213 20.5V11.5H14.5537L15 7.5H11.8213V5.55176C11.8213 4.52176 11.8476 3.5 13.2869 3.5H14.7447V0.640137C14.7447 0.597137 13.4925 0.5 12.2257 0.5C9.57999 0.5 7.9234 2.1572 7.9234 5.2002V7.5H5V11.5H7.9234V20.5H11.8213Z",
                                            fill: "white",
                                          }),
                                        }),
                                        (0, a.jsx)("defs", {
                                          children: (0, a.jsx)("clipPath", {
                                            id: "clip0_578_490",
                                            children: (0, a.jsx)("rect", {
                                              width: "20",
                                              height: "20",
                                              fill: "white",
                                              transform: "translate(0 0.5)",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                (0, a.jsx)("span", {
                                  className: "sr-only",
                                  children: "Continue with Facebook",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "relative flex items-center py-2",
                          children: [
                            (0, a.jsx)("div", {
                              className: "grow border-t border-gray-600",
                            }),
                            (0, a.jsx)("span", {
                              className: "mx-4 shrink text-sm text-gray-400",
                              children: "or",
                            }),
                            (0, a.jsx)("div", {
                              className: "grow border-t border-gray-600",
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "flex flex-col gap-2",
                          children: [
                            (0, a.jsx)("button", {
                              onClick: () => y(!0),
                              type: "button",
                              id: "continue-with-email-button",
                              className:
                                "rounded-lg border border-yellow-500 bg-yellow-500 py-2 text-black hover:bg-yellow-300",
                              children: "Continue with Email",
                            }),
                            (0, a.jsx)(m.A, {
                              onClick: x,
                              full: !0,
                              id: "login-button",
                              children: "Already a Raider? Login",
                            }),
                            M &&
                              (0, a.jsx)("p", {
                                className: "text-sm text-red-500",
                                children: M,
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
    44127: (e, t, r) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/registration",
        function () {
          return r(87777);
        },
      ]);
    },
    46976: (e, t, r) => {
      "use strict";
      function a(e) {
        return e.form?.message ?? e.root?.message;
      }
      r.d(t, { A: () => a });
    },
    52713: (e, t, r) => {
      "use strict";
      r.d(t, { h: () => h });
      var a = r(2183),
        l = r(36439),
        o = r(39188),
        s = r(27811),
        i = r(25514),
        n = r(80777),
        c = r(97698),
        d = r(15013),
        u = r.n(d),
        m = r(26330);
      let h = {
        LeftContent: function ({ image: e }) {
          let t = e?.fields?.file?.url ? `https:${e.fields.file.url}` : null;
          return (0, a.jsx)("div", {
            className:
              "relative mx-auto aspect-square w-full max-w-[500px] overflow-hidden rounded-lg",
            children:
              t &&
              (0, a.jsx)(u(), {
                src: t,
                alt: "Raider Crew",
                fill: !0,
                className: "object-cover",
              }),
          });
        },
        RightContent: function ({
          onNext: e,
          onSkip: t,
          control: r,
          errors: d,
          isSigningUpWithEmail: u,
          trigger: h,
          setError: g,
          onNewsletterUpdate: f,
          headline: x,
          description: p,
          features: b,
        }) {
          let [v, w] = (0, l.useState)(!1),
            [y, j] = (0, l.useState)(!1),
            k = (0, n.FH)({ control: r, name: "newsletterContactEmail" }),
            N = async () => {
              if (!u && !k?.trim())
                return void g("newsletterContactEmail", {
                  type: "manual",
                  message:
                    "Please provide an email address for newsletter updates",
                });
              if (u ? await h() : await h("newsletterContactEmail")) {
                w(!0);
                try {
                  (await f(),
                    (0, m.sendGTMEvent)({
                      event: "registration_newsletter_subscribe",
                    }),
                    e());
                } catch {
                  w(!1);
                }
              }
            };
          return (0, a.jsxs)("div", {
            className: "flex flex-col gap-6",
            children: [
              (0, a.jsxs)("div", {
                className: "text-center text-white",
                children: [
                  (0, a.jsx)("h2", {
                    className: "mb-2 text-3xl font-bold leading-tight",
                    children: x,
                  }),
                  (0, a.jsx)("p", { className: "mb-2", children: p }),
                  (0, a.jsx)("div", {
                    className: "flex flex-col items-center gap-1 text-white",
                    children: b.map((e, t) =>
                      (0, a.jsxs)(
                        "div",
                        {
                          className: "flex items-center gap-3",
                          children: [
                            (0, a.jsx)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "25",
                              viewBox: "0 0 24 25",
                              fill: "none",
                              children: (0, a.jsx)("g", {
                                children: (0, a.jsx)("path", {
                                  d: "M9.5501 18.5L3.8501 12.8L5.2751 11.375L9.5501 15.65L18.7251 6.47498L20.1501 7.89998L9.5501 18.5Z",
                                  fill: "#FBD98B",
                                }),
                              }),
                            }),
                            (0, a.jsx)("span", {
                              className: "text-sm",
                              children: e,
                            }),
                          ],
                        },
                        t,
                      ),
                    ),
                  }),
                ],
              }),
              !u &&
                (0, a.jsx)(n.xI, {
                  name: "newsletterContactEmail",
                  control: r,
                  render: ({ field: e }) =>
                    (0, a.jsx)(i.A, {
                      label: "Newsletter Email",
                      placeholder: "Email for newsletters and updates",
                      type: "email",
                      autoComplete: "email",
                      error: d.newsletterContactEmail,
                      helperText:
                        "We'll use this email to send you expedition updates and exclusive content",
                      ...e,
                    }),
                }),
              (0, a.jsxs)("div", {
                className: "mx-auto",
                children: [
                  (0, a.jsx)(n.xI, {
                    name: "agreeToReceiveExtraEmails",
                    control: r,
                    render: ({ field: { onChange: e, value: t } }) =>
                      (0, a.jsx)(o.A, {
                        value: t,
                        onChange: (t) => {
                          (e(t), j(t));
                        },
                        children: "Opt in to mailing list",
                      }),
                  }),
                  d &&
                    d.agreeToReceiveExtraEmails &&
                    (0, a.jsx)(s.A, { error: d.agreeToReceiveExtraEmails }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "flex flex-col gap-2",
                children: [
                  (0, a.jsx)("button", {
                    onClick: N,
                    type: "button",
                    id: "raider-crew-join-button",
                    className:
                      "rounded-lg border border-yellow-500 bg-yellow-500 py-2 text-black hover:bg-yellow-300 disabled:opacity-50",
                    disabled: v || !y,
                    children: v ? (0, a.jsx)(c.A, {}) : "Subscribe",
                  }),
                  (0, a.jsx)("button", {
                    onClick: () => {
                      ((0, m.sendGTMEvent)({
                        event: "registration_newsletter_skip",
                      }),
                        t());
                    },
                    type: "button",
                    id: "raider-crew-skip-button",
                    className: "py-2 text-white hover:text-yellow-500",
                    disabled: v,
                    children: "Skip",
                  }),
                ],
              }),
            ],
          });
        },
      };
    },
    61932: (e, t, r) => {
      "use strict";
      r.d(t, { cn: () => o });
      var a = r(3638),
        l = r(30597);
      function o(...e) {
        return (0, l.QP)((0, a.$)(e));
      }
    },
    69650: (e, t, r) => {
      "use strict";
      r.a(e, async (e, a) => {
        try {
          r.d(t, { A: () => E });
          var l = r(2183),
            o = r(36439),
            s = r(80777),
            i = r(73357),
            n = r(18074),
            c = r(27811),
            d = r(9751),
            u = r(83737),
            m = r(26330),
            h = r(43455),
            g = r(31153),
            f = r(27933),
            x = r(40791),
            p = r(4026),
            b = r(22007),
            v = r(87053),
            w = r(80089),
            y = r(16456),
            j = e([n, d, u, f, b]);
          [n, d, u, f, b] = j.then ? (await j)() : j;
          let N = "An unknown error has occurred.",
            C = "Account already exists. Please try logging in";
          function k(e, ...t) {
            let r = { ...e };
            for (let e of t) delete r[e];
            return r;
          }
          let A = { 1: 2, 2: 3, 3: 4, 4: 5, 5: 5 },
            S = { 1: 1, 2: 1, 3: 2, 4: 3, 5: 4 },
            E = ({ navItems: e, registrationPage: t }) => {
              let r = (0, g.useRouter)(),
                [a, j] = (0, o.useState)(1),
                {
                  control: E,
                  setValue: I,
                  formState: { errors: P },
                  setError: _,
                  trigger: M,
                  clearErrors: T,
                  getValues: F,
                  watch: D,
                } = (0, s.mN)({
                  resolver: (0, i.u)(b.Fc),
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
                O = (0, s.FH)({ control: E, name: "registrationMethod" }),
                V = (0, s.FH)({ control: E, name: "facebookAccessToken" }),
                R = (0, s.FH)({ control: E, name: "googleServerAuthCode" }),
                {
                  setUserData: G,
                  setMailingListStatus: L,
                  userData: B,
                  requiresIdentitySetup: U,
                  fetchUserInfo: Y,
                } = (0, d.u)(),
                [H, z] = (0, o.useState)(!1),
                [$, q] = (0, o.useState)(!1),
                [W, J] = (0, o.useState)(null),
                [Q, Z] = (0, o.useState)(!1),
                [X, K] = (0, o.useState)(!1),
                [ee, et] = (0, o.useState)(!1),
                [er, ea] = (0, o.useState)(!1),
                [el, eo] = (0, o.useState)(!1),
                es = (0, o.useRef)(!1),
                ei = "1881486789441765",
                en =
                  "913283481016-rge7l6npr5tpnce5gd5fb28kmf2v33tu.apps.googleusercontent.com",
                ec = (0, o.useRef)(null),
                ed = (0, o.useRef)(null),
                eu = (0, o.useRef)(!1),
                em = (0, o.useRef)(null),
                eh = (0, o.useRef)(!1),
                eg = (0, o.useRef)(null),
                ef = (0, o.useRef)(null),
                ex = !!B && !B.publisherData?.dateOfBirth,
                ep = !!B && !B.publisherData?.countryAlpha2Code,
                eb =
                  !!B &&
                  !!B.publisherData?.countryAlpha2Code &&
                  ["US", "CA"].includes(B.publisherData.countryAlpha2Code) &&
                  !B.publisherData.stateOrProvinceName,
                ev = r.query.step,
                ew =
                  ("publisher" === ev ? 2 : "display-name" === ev ? 3 : null) ??
                  (ep || eb || ex ? 2 : 3),
                [ey, ej] = (0, o.useState)(null),
                ek = (0, o.useRef)(!1),
                eN = U && !!B,
                eC = eN || "identity" === r.query.resume,
                eA = (0, o.useCallback)(
                  () =>
                    B?.accountInfo?.email?.trim() ||
                    W?.accountInfo?.email?.trim() ||
                    F("email")?.trim() ||
                    "",
                  [F, W?.accountInfo?.email, B?.accountInfo?.email],
                ),
                eS = (0, o.useCallback)(
                  () => F("newsletterContactEmail")?.trim() || eA(),
                  [eA, F],
                ),
                eE = (0, o.useCallback)(async () => {
                  if (es.current || "email" === O) return;
                  let e = eA();
                  if (e)
                    try {
                      (await u.oB({ email: e }), (es.current = !0));
                    } catch (e) {
                      console.error(
                        "Failed to ensure contact email on exit",
                        e,
                      );
                    }
                }, [eA, O]),
                eI = (0, o.useCallback)(() => {
                  em.current &&
                    (window.removeEventListener("focus", em.current),
                    (em.current = null));
                }, []),
                eP = (0, o.useCallback)(() => {
                  eI();
                  let e = () => {
                    eu.current &&
                      ((eu.current = !1),
                      et(!1),
                      _("root", {
                        message:
                          "Google sign-in was cancelled. Please try again.",
                      }));
                  };
                  ((em.current = e),
                    window.addEventListener("focus", e, { once: !0 }));
                }, [eI, _]),
                e_ = (0, o.useCallback)(() => {
                  eg.current &&
                    (window.removeEventListener("focus", eg.current),
                    (eg.current = null));
                }, []),
                eM = (0, o.useCallback)(() => {
                  e_();
                  let e = () => {
                    eh.current &&
                      ((eh.current = !1),
                      Z(!1),
                      _("root", {
                        message:
                          "Facebook sign-in was cancelled. Please try again.",
                      }));
                  };
                  ((eg.current = e),
                    window.addEventListener("focus", e, { once: !0 }));
                }, [e_, _]),
                eT = (e) => {
                  (q(e),
                    e &&
                      (I("registrationMethod", "email"),
                      I("facebookAccessToken", "", { shouldValidate: !0 })));
                },
                eF = (0, o.useCallback)(
                  async (e) => {
                    try {
                      let t = await u.rw({
                        ServerAuthCode: e,
                        createAccount: !0,
                      });
                      if (t.error)
                        return (
                          _("root", { message: t.error.errorMessage || N }),
                          I("googleServerAuthCode", "", { shouldValidate: !0 }),
                          eo(!1),
                          !1
                        );
                      if (t.data?.newlyCreated === !1)
                        return (
                          _("root", { message: C }),
                          I("googleServerAuthCode", "", { shouldValidate: !0 }),
                          eo(!1),
                          !1
                        );
                      return (
                        I("registrationMethod", "google", {
                          shouldValidate: !0,
                          shouldDirty: !0,
                        }),
                        I("googleServerAuthCode", "__PROVISIONED__", {
                          shouldValidate: !0,
                          shouldDirty: !0,
                        }),
                        T(),
                        eT(!1),
                        eo(!0),
                        1 === a && j(2),
                        !0
                      );
                    } catch (e) {
                      return (
                        console.error("Google sign-in failed:", e),
                        _("root", {
                          message: "Google sign-in failed. Please try again.",
                        }),
                        I("googleServerAuthCode", "", { shouldValidate: !0 }),
                        eo(!1),
                        !1
                      );
                    } finally {
                      et(!1);
                    }
                  },
                  [T, a, j, _, eo, et, eT, I],
                );
              ((0, o.useEffect)(() => {
                if (!r.isReady) return;
                let e = r.query.reason;
                if (
                  "string" == typeof e
                    ? e === w.N
                    : Array.isArray(e) && e.includes(w.N)
                ) {
                  let e = { ...r.query };
                  (delete e.reason,
                    r.replace({ pathname: "/registration", query: e }, void 0, {
                      shallow: !0,
                    }));
                }
                let t = r.query.method,
                  a = Array.isArray(t) ? t[0] : t;
                (async () => {
                  if ("facebook" === a && !V) {
                    let e = (0, v.Ye)();
                    if (!e)
                      return void _("root", {
                        message:
                          "Your Facebook session expired. Please try connecting Facebook again.",
                      });
                    (I("registrationMethod", "facebook"),
                      I("facebookAccessToken", e.accessToken, {
                        shouldValidate: !0,
                      }),
                      I("email", e.email, {
                        shouldDirty: !0,
                        shouldValidate: !0,
                      }),
                      e.name &&
                        I("displayName", e.name, {
                          shouldDirty: !0,
                          shouldValidate: !0,
                        }),
                      q(!1),
                      T(),
                      j((e) => (1 === e ? 2 : e)));
                  }
                  if ("google" === a && !R) {
                    let e = (0, y.hF)();
                    if (!e)
                      return void _("root", {
                        message:
                          "We couldn't complete Google registration. Please connect your Google account again.",
                      });
                    if ((et(!0), !(await eF(e.serverAuthCode)))) return;
                    (e.email &&
                      I("email", e.email, {
                        shouldDirty: !0,
                        shouldValidate: !0,
                      }),
                      e.name &&
                        !F("displayName") &&
                        I("displayName", e.name, {
                          shouldDirty: !0,
                          shouldValidate: !0,
                        }));
                  }
                })();
              }, [
                T,
                V,
                F,
                R,
                eF,
                r,
                r.isReady,
                r.query.method,
                r.query.reason,
                _,
                et,
                I,
              ]),
                (0, o.useEffect)(() => {
                  if (!eC) {
                    (ej(null), (ek.current = !1));
                    return;
                  }
                  let e = null !== ey ? ey : ew;
                  (null === ey && ej(e),
                    ek.current ||
                      (j(e),
                      eT(!1),
                      I("registrationMethod", "email"),
                      B?.accountInfo?.email &&
                        I("email", B.accountInfo.email, {
                          shouldDirty: !1,
                          shouldValidate: !1,
                        }),
                      B?.accountInfo?.titleInfo?.displayName &&
                        I("displayName", B.accountInfo.titleInfo.displayName, {
                          shouldDirty: !1,
                          shouldValidate: !1,
                        }),
                      I("acceptTermsOfService", !1, {
                        shouldDirty: !1,
                        shouldValidate: !1,
                      }),
                      (ek.current = !0)));
                }, [
                  eC,
                  ew,
                  ey,
                  ej,
                  I,
                  eT,
                  B?.accountInfo?.email,
                  B?.accountInfo?.titleInfo?.displayName,
                ]),
                (0, o.useEffect)(() => {
                  if (!ei) return;
                  let e = !1;
                  return (
                    (0, v.FJ)(ei)
                      .then((t) => {
                        !e && t && K(!0);
                      })
                      .catch((t) => {
                        e || (console.error(t), K(!1));
                      }),
                    () => {
                      e = !0;
                    }
                  );
                }, [ei]));
              let eD = (0, o.useCallback)(async () => {
                  if (window.FB)
                    return await new Promise((e) => {
                      try {
                        window.FB?.api("/me", { fields: "email,name" }, (t) =>
                          e(t),
                        );
                      } catch {
                        e(void 0);
                      }
                    });
                }, []),
                eO = (0, o.useCallback)(
                  async (e) => {
                    if (
                      ((eu.current = !1),
                      eI(),
                      console.info("[Google Sign-In] code client response", e),
                      e.error || !e.code)
                    ) {
                      (_("root", {
                        message:
                          e.error_description ||
                          e.error ||
                          "Google sign-in failed. Please try again.",
                      }),
                        et(!1));
                      return;
                    }
                    await eF(e.code);
                  },
                  [T, eI, a, j, _, et, eT, I],
                );
              ((0, o.useEffect)(() => {
                if (!en) return;
                if (ec.current) return void ea(!0);
                let e = !1;
                return (
                  ea(!1),
                  (0, y.S_)()
                    .then((t) => {
                      t &&
                        !e &&
                        ((ec.current = t),
                        (ed.current = (0, y.gS)(t, {
                          client_id: en,
                          scope: "openid email profile",
                          ux_mode: "popup",
                          callback: (e) => {
                            eO(e);
                          },
                        })),
                        ea(!0));
                    })
                    .catch((t) => {
                      e || (console.error(t), ea(!1));
                    }),
                  () => {
                    e = !0;
                  }
                );
              }, [en, eO, I]),
                (0, o.useEffect)(
                  () => () => {
                    (eI(), e_());
                  },
                  [e_, eI],
                ),
                (0, o.useEffect)(() => {
                  if ("email" === O) return;
                  let e = eA(),
                    t = F("newsletterContactEmail");
                  e &&
                    !t &&
                    I("newsletterContactEmail", e, {
                      shouldDirty: !1,
                      shouldValidate: !0,
                    });
                }, [eA, F, O, I, B?.accountInfo?.email, W?.accountInfo?.email]),
                (0, o.useEffect)(
                  () => () => {
                    eE();
                  },
                  [eE],
                ),
                (0, o.useEffect)(() => {
                  ef.current &&
                    ef.current.scrollTo({ top: 0, behavior: "smooth" });
                }, [a]));
              let eV = async (e) => {
                  let t = await u.k1({ displayName: e.displayName });
                  if (t.error)
                    throw (
                      _("displayName", { message: t.error.errorMessage }),
                      Error("Display name update failed")
                    );
                  let r = await u.bp({
                    playFabId:
                      W?.accountInfo?.playFabId ??
                      B?.accountInfo?.playFabId ??
                      "",
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
                  if (r.error)
                    throw (
                      _("root", { message: r.error.errorMessage || N }),
                      Error("Publisher data update failed")
                    );
                  let a = eA();
                  if (a) {
                    let e = await u.oB({ email: a });
                    if (e.error)
                      throw (
                        _("root", {
                          message:
                            e.error.errorMessage ||
                            "We couldn't save your newsletter email. Please try again.",
                        }),
                        Error("Newsletter email update failed")
                      );
                    es.current = !0;
                  }
                },
                eR = async (e) => {
                  let t,
                    r = F();
                  if (eN) {
                    let t = await u.k1({ displayName: r.displayName });
                    if (t.error)
                      throw (
                        _("displayName", { message: t.error.errorMessage }),
                        Error("Display name update failed")
                      );
                    if ((await eV(r), e))
                      try {
                        await u.nU({ itemId: e });
                      } catch (e) {
                        console.error("Failed to set avatar:", e);
                      }
                    await Y();
                    let [a, l] = await Promise.all([u.Gf(), u.rh()]),
                      o = a.data
                        ? {
                            ...a.data,
                            publisherData:
                              l.error?.errorMessage ===
                              "Session ticket has expired or is invalid"
                                ? void 0
                                : (l.data?.publisherData ?? void 0),
                          }
                        : null;
                    (J(o || null),
                      (0, m.sendGTMEvent)({
                        event: "registration_form_conversion",
                        value: o?.accountInfo?.playFabId,
                      }));
                    return;
                  }
                  let a = null,
                    l = !1;
                  if ("email" === r.registrationMethod) {
                    let e = k(
                      r,
                      "registrationMethod",
                      "facebookAccessToken",
                      "googleServerAuthCode",
                    );
                    l = !(t = (a = await u.kz(e)).error);
                  } else if ("facebook" === r.registrationMethod) {
                    let { facebookAccessToken: e } = r;
                    if (!e)
                      throw (
                        _("root", {
                          message:
                            "Please connect your Facebook account before continuing registration.",
                        }),
                        Error("Missing Facebook token")
                      );
                    let o = k(
                      r,
                      "registrationMethod",
                      "facebookAccessToken",
                      "password",
                      "googleServerAuthCode",
                    );
                    l = !(t = (a = await u.me({ ...o, AccessToken: e })).error);
                  } else {
                    let { googleServerAuthCode: e } = r;
                    if (!e && !el)
                      throw (
                        _("root", {
                          message:
                            "Please connect your Google account before continuing registration.",
                        }),
                        Error("Missing Google token")
                      );
                    if (el)
                      (await eV(r),
                        (a = null),
                        (l = !0),
                        F("googleServerAuthCode") ||
                          I("googleServerAuthCode", "__PROVISIONED__", {
                            shouldValidate: !0,
                          }));
                    else {
                      let o = k(
                        r,
                        "registrationMethod",
                        "googleServerAuthCode",
                        "password",
                        "facebookAccessToken",
                      );
                      if (
                        ((a = await u.mp({ ...o, ServerAuthCode: e })),
                        a?.data?.newlyCreated === !1)
                      )
                        throw (
                          _("root", { message: C }),
                          Error("Account already exists for that Google login")
                        );
                      l = !(t = a?.error);
                    }
                  }
                  if (l) {
                    if (
                      ("google" === r.registrationMethod &&
                        (el || eo(!0),
                        F("googleServerAuthCode") ||
                          I("googleServerAuthCode", "__PROVISIONED__", {
                            shouldValidate: !0,
                          })),
                      e)
                    )
                      try {
                        await u.nU({ itemId: e });
                      } catch (e) {
                        console.error("Failed to set avatar:", e);
                      }
                    let [t, a] = await Promise.all([u.Gf(), u.rh()]),
                      l = t.data
                        ? { ...t.data, publisherData: a.data?.publisherData }
                        : null;
                    if ("email" === O) {
                      let e = l?.accountInfo?.email?.trim();
                      e && (await u.oB({ email: e }), (es.current = !0));
                    }
                    (J(l || null),
                      (0, m.sendGTMEvent)({
                        event: "registration_form_conversion",
                        value: l?.accountInfo?.playFabId,
                      }));
                  } else {
                    let e = t?.errorMessage?.toLowerCase() ?? "",
                      a = t?.error,
                      l =
                        "google" === r.registrationMethod &&
                        (e.includes("invalid_grant") ||
                          e.includes("invalid token") ||
                          e.includes("expired") ||
                          "InvalidOAuthToken" === a ||
                          "InvalidOAuthProvider" === a);
                    switch (t?.error) {
                      case "EmailAddressNotAvailable":
                        _("email", { message: t.errorMessage });
                        break;
                      case "NameNotAvailable":
                        _("displayName", {
                          message:
                            "That display name is not available. Please try another.",
                        });
                        break;
                      case "ProfaneDisplayName":
                        _("displayName", {
                          message:
                            "That display name isn't allowed. Please try another.",
                        });
                        break;
                      case "InvalidOAuthToken":
                      case "InvalidOAuthProvider":
                        t?.errorMessage?.toLowerCase().includes("already") ||
                        t?.errorMessage?.toLowerCase().includes("exists")
                          ? _("root", { message: C })
                          : (_("root", {
                              message:
                                t?.errorMessage ||
                                "Google account connection failed. Please try connecting again.",
                            }),
                            I("googleServerAuthCode", "", {
                              shouldValidate: !0,
                            }),
                            eo(!1));
                        break;
                      default:
                        ("google" === r.registrationMethod &&
                          e.includes("invalid_grant")) ||
                          _("root", { message: t?.errorMessage ?? N });
                    }
                    (l &&
                      (I("googleServerAuthCode", "", { shouldValidate: !0 }),
                      _("googleServerAuthCode", {
                        type: "manual",
                        message:
                          'Your Google connection has expired or become invalid. Please click "Continue with Google" above to reconnect your account.',
                      }),
                      _("root", {
                        message:
                          'Your Google connection has expired or become invalid. Please click "Continue with Google" above to reconnect.',
                      }),
                      eo(!1)),
                      P.root?.message ||
                        l ||
                        _("root", {
                          message:
                            "Please check the form for errors and try again.",
                        }));
                    let o = new Set([
                      "EmailAddressNotAvailable",
                      "NameNotAvailable",
                      "ProfaneDisplayName",
                    ]);
                    throw (
                      "google" === r.registrationMethod &&
                        t &&
                        o.has(t.error) &&
                        (eo(!0),
                        F("googleServerAuthCode") ||
                          I("googleServerAuthCode", "__PROVISIONED__", {
                            shouldValidate: !0,
                          })),
                      Error("Registration failed")
                    );
                  }
                },
                eG = async () => {
                  let e = F();
                  try {
                    if (!$) {
                      let e = eS();
                      e && (await u.oB({ email: e }), (es.current = !0));
                    }
                    (await u.q7({
                      isUserOnMailingList: e.agreeToReceiveExtraEmails,
                    }),
                      L(e.agreeToReceiveExtraEmails));
                  } catch (e) {
                    console.error("Error updating newsletter preferences:", e);
                  }
                },
                eL = async () => {
                  (await eE(), eB());
                },
                eB = () => {
                  j((e) => {
                    let t = A[e];
                    return (eN && 2 === ew && ey !== t && 2 === e && ej(t), t);
                  });
                },
                eU = async () => {
                  if (
                    (I("registrationMethod", "email"),
                    I("facebookAccessToken", "", { shouldValidate: !0 }),
                    I("googleServerAuthCode", "", { shouldValidate: !0 }),
                    eo(!1),
                    !(await M(["email", "password"])))
                  )
                    return;
                  z(!0);
                  let e = F("email"),
                    t = await u.Nq({ email: e });
                  if ((z(!1), t.error)) {
                    (console.error(
                      "Error checking email availability:",
                      t.error,
                    ),
                      _("email", {
                        type: "manual",
                        message:
                          "An error occurred while checking email availability. Please try again later.",
                      }));
                    return;
                  }
                  t.data.emailExists
                    ? _("email", {
                        type: "manual",
                        message:
                          "This email is already registered. Please sign in instead or use a different email.",
                      })
                    : ((0, m.sendGTMEvent)({
                        event: "registration_email_start",
                      }),
                      eB());
                },
                eY = (0, o.useCallback)(() => {
                  if (
                    (eT(!1),
                    I("registrationMethod", "google"),
                    I("facebookAccessToken", "", { shouldValidate: !0 }),
                    eo(!1),
                    !en)
                  )
                    return void _("root", {
                      message:
                        "Google login is unavailable. Please try again later or continue with email.",
                    });
                  let e = ed.current;
                  if (!e)
                    return void _("root", {
                      message:
                        "Google login is still initializing. Please try again in a moment.",
                    });
                  ((0, m.sendGTMEvent)({
                    event: "registration_sso_google_start",
                  }),
                    T(),
                    et(!0),
                    (eu.current = !0),
                    eP());
                  try {
                    (0, y.mU)(e);
                  } catch (e) {
                    (console.error("Google code request failed", e),
                      (eu.current = !1),
                      eI(),
                      et(!1),
                      _("root", {
                        message: "Google sign-in failed. Please try again.",
                      }));
                  }
                }, [en, T, eO, eP, eI, _, et, eT, I]);
              return (0, l.jsx)(n.A, {
                ref: ef,
                navItems: e,
                children: (0, l.jsxs)("form", {
                  className: "account_form",
                  onSubmit: (e) => e.preventDefault(),
                  autoComplete: "on",
                  children: [
                    1 === a &&
                      !eN &&
                      (0, l.jsx)(h.v, {
                        onNext: eB,
                        onEmailSignUp: eU,
                        onGoogleSignUp: () => {
                          eY();
                        },
                        onFacebookSignUp: () => {
                          if (!ei)
                            return void _("root", {
                              message:
                                "Facebook login is unavailable. Please try again later or continue with email.",
                            });
                          if (!window.FB)
                            return void _("root", {
                              message:
                                "Facebook login is still initializing. Please try again in a moment.",
                            });
                          ((0, m.sendGTMEvent)({
                            event: "registration_sso_facebook_start",
                          }),
                            T(),
                            Z(!0),
                            I("registrationMethod", "facebook"),
                            I("googleServerAuthCode", "", {
                              shouldValidate: !0,
                            }),
                            eo(!1));
                          try {
                            ((eh.current = !0),
                              eM(),
                              window.FB.login(
                                (e) => {
                                  ((eh.current = !1),
                                    e_(),
                                    (async () => {
                                      try {
                                        let t = e.authResponse?.accessToken;
                                        if (!t) {
                                          (I("facebookAccessToken", "", {
                                            shouldValidate: !0,
                                          }),
                                            _("root", {
                                              message:
                                                "Facebook login was cancelled. Please try again.",
                                            }));
                                          return;
                                        }
                                        (I("registrationMethod", "facebook"),
                                          eT(!1));
                                        let r = await u.zo({ AccessToken: t });
                                        if (r.data) {
                                          (_("root", { message: C }),
                                            I("facebookAccessToken", "", {
                                              shouldValidate: !0,
                                            }));
                                          return;
                                        }
                                        if (
                                          r.error &&
                                          "AccountNotFound" !== r.error.error
                                        ) {
                                          (_("root", {
                                            message:
                                              r.error.errorMessage ||
                                              "Facebook login failed. Please try again.",
                                          }),
                                            I("facebookAccessToken", "", {
                                              shouldValidate: !0,
                                            }));
                                          return;
                                        }
                                        let l = await eD();
                                        if (!l?.email) {
                                          (I("facebookAccessToken", "", {
                                            shouldValidate: !0,
                                          }),
                                            _("root", { message: C }));
                                          return;
                                        }
                                        (I("facebookAccessToken", t, {
                                          shouldValidate: !0,
                                        }),
                                          I("email", l.email, {
                                            shouldDirty: !0,
                                            shouldValidate: !0,
                                          }),
                                          I("newsletterContactEmail", l.email, {
                                            shouldDirty: !0,
                                            shouldValidate: !0,
                                          }),
                                          l.name &&
                                            I("displayName", l.name, {
                                              shouldDirty: !0,
                                              shouldValidate: !0,
                                            }),
                                          T(),
                                          1 === a && eB());
                                      } catch (e) {
                                        (console.error(e),
                                          I("facebookAccessToken", "", {
                                            shouldValidate: !0,
                                          }),
                                          _("root", {
                                            message:
                                              "Facebook login failed. Please try again.",
                                          }));
                                      } finally {
                                        Z(!1);
                                      }
                                    })());
                                },
                                { scope: "email", return_scopes: !0 },
                              ));
                          } catch (e) {
                            (console.error(e),
                              (eh.current = !1),
                              e_(),
                              Z(!1),
                              _("root", {
                                message:
                                  "Facebook login failed. Please try again.",
                              }));
                          }
                        },
                        onLogin: () => {
                          r.push("/login");
                        },
                        control: E,
                        errors: P,
                        emailCheckLoading: H,
                        isSigningUpWithEmail: $,
                        setIsSigningUpWithEmail: eT,
                        facebookLoginLoading: Q,
                        facebookSdkReady: X,
                        googleLoginLoading: ee,
                        googleSdkReady: er,
                        raiderFeatureSlides: t.raiderFeatureSlides
                          .filter((e) => void 0 !== e)
                          .map((e) => e.fields),
                      }),
                    "google" === O &&
                      a >= 2 &&
                      !el &&
                      !R &&
                      (0, l.jsxs)("div", {
                        className:
                          "mb-6 rounded-lg border border-white/20 bg-black/30 p-4",
                        children: [
                          (0, l.jsx)("p", {
                            className: "mb-3 text-sm text-white/80",
                            children:
                              "Connect your Google account to continue. We'll still need a few details below to finish creating your profile.",
                          }),
                          (0, l.jsxs)("div", {
                            className:
                              "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",
                            children: [
                              (0, l.jsx)(p.A, {
                                onClick: eY,
                                loading: ee,
                                disabled: ee || !er,
                                fullWidth: !0,
                                children: R
                                  ? "Use a different Google account"
                                  : "Continue with Google",
                              }),
                              (0, l.jsx)("span", {
                                className: "text-sm",
                                children: (0, l.jsx)("span", {
                                  className: "text-white/60",
                                  children:
                                    "You'll be asked to allow access to your Google account.",
                                }),
                              }),
                            ],
                          }),
                          (0, l.jsx)(c.A, { error: P.googleServerAuthCode }),
                          !en &&
                            (0, l.jsx)(c.A, {
                              error: "Google Client ID is not configured.",
                            }),
                        ],
                      }),
                    a >= 2 &&
                      a <= 4 &&
                      (0, l.jsx)(f.j, {
                        currentStep: a,
                        onNext: eB,
                        onBack: () => {
                          let e = eN && ey ? ey : eN ? ew : 1;
                          j((t) => {
                            let r = S[t];
                            return r < e ? e : r;
                          });
                        },
                        control: E,
                        errors: P,
                        setValue: I,
                        trigger: M,
                        setError: _,
                        watch: D,
                        isSigningUpWithEmail: $,
                        onRegistrationSuccess: eR,
                        onNewsletterUpdate: eG,
                        onSkip: eL,
                        registrationPage: t,
                      }),
                    5 === a &&
                      (0, l.jsx)(x.F, {
                        onUnlockDashboard: () => {
                          W && G(W);
                        },
                        celebrationDescription: t.celebrationDescription,
                        celebrationImage: t.celebrationImage,
                      }),
                  ],
                }),
              });
            };
          a();
        } catch (e) {
          a(e);
        }
      });
    },
    80089: (e, t, r) => {
      "use strict";
      r.d(t, { N: () => a });
      let a = "facebook-account-not-found";
    },
    87777: (e, t, r) => {
      "use strict";
      r.a(e, async (e, a) => {
        try {
          (r.r(t), r.d(t, { __N_SSG: () => c, default: () => d }));
          var l = r(2183),
            o = r(74474),
            s = r(69650),
            i = r(87200),
            n = e([s, i]);
          [s, i] = n.then ? (await n)() : n;
          var c = !0;
          function d({
            websiteSingleton: e,
            navItems: t,
            registrationPage: r,
          }) {
            return (0, l.jsxs)(i.A, {
              children: [
                (0, l.jsx)(o.A, {
                  description:
                    "Register for a Tomb Raider account and join the Society of Raiders. Get exclusive rewards, monthly newsletters, and special Lara Croft member-only perks.",
                }),
                (0, l.jsx)(s.A, {
                  websiteSingleton: e,
                  navItems: t,
                  registrationPage: r,
                }),
              ],
            });
          }
          a();
        } catch (e) {
          a(e);
        }
      });
    },
    89210: (e, t, r) => {
      "use strict";
      r.d(t, { Q: () => b });
      var a = r(2183),
        l = r(36439),
        o = r(28564),
        s = r(27811),
        i = r(80777),
        n = r(91441),
        c = r(97447);
      let d = [
        { name: "United States of America", value: "US" },
        ...n
          .all()
          .map((e) => {
            let t = e.country;
            return (
              "Congo" === e.country &&
                ("CG" === e.alpha2
                  ? (t = "Congo (Republic of the Congo)")
                  : "CD" === e.alpha2 &&
                    (t = "Congo (Democratic Republic of the Congo)")),
              { name: t, value: e.alpha2 }
            );
          })
          .filter((e) => "United States of America" !== e.name),
      ];
      var u = r(64171),
        m = r(15013),
        h = r.n(m),
        g = r(26330);
      let f = new Date().getFullYear(),
        x = Array.from({ length: 120 }, (e, t) => (f - t).toString()),
        p = [
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
        b = {
          LeftContent: function ({ image: e }) {
            let t = e?.fields?.file?.url ? `https:${e.fields.file.url}` : null;
            return (0, a.jsx)("div", {
              className: "relative mx-auto aspect-square w-full max-w-[500px]",
              children:
                t &&
                (0, a.jsx)(h(), {
                  src: t,
                  alt: "Raider Details",
                  fill: !0,
                  className: "rounded-full object-cover",
                }),
            });
          },
          RightContent: function ({
            onNext: e,
            onBack: t,
            control: r,
            errors: n,
            setValue: m,
            trigger: h,
            headline: f,
            description: b,
          }) {
            let v = (0, i.FH)({ control: r, name: "countryAlpha2Code" }),
              w = (0, l.useMemo)(
                () =>
                  c
                    .filter((e) => e.country === v)
                    .map((e) => ({ name: e.name, value: e.name })),
                [v],
              ),
              y = async () => {
                let t = ["countryAlpha2Code", "dateOfBirth"];
                (("US" === v || "CA" === v) && t.push("stateOrProvinceName"),
                  (await h(t)) &&
                    ((0, g.sendGTMEvent)({
                      event: "registration_raider_details_complete",
                    }),
                    e()));
              };
            return (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsxs)("div", {
                  className: "text-center text-white",
                  children: [
                    (0, a.jsx)("h2", {
                      className: "mb-2 text-3xl font-bold leading-tight",
                      children: f,
                    }),
                    (0, a.jsx)("p", { children: b }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "flex flex-col gap-6",
                  children: [
                    (0, a.jsxs)("div", {
                      id: "country-dropdown-container",
                      children: [
                        (0, a.jsx)("label", {
                          className: "mb-1 block text-white",
                          children: "Country",
                        }),
                        (0, a.jsx)(i.xI, {
                          name: "countryAlpha2Code",
                          control: r,
                          render: ({ field: { onChange: e, value: t } }) =>
                            (0, a.jsx)(o.A, {
                              placeholder: "Country",
                              selected: t,
                              onSelect: (t) => {
                                (e(t), m("stateOrProvinceName", ""));
                              },
                              items: d,
                              error: n.countryAlpha2Code,
                            }),
                        }),
                        n.countryAlpha2Code &&
                          (0, a.jsx)(s.A, { error: n.countryAlpha2Code }),
                      ],
                    }),
                    ("US" === v || "CA" === v) &&
                      (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsx)("label", {
                            className: "mb-1 block text-white",
                            children: "US" === v ? "State" : "Province",
                          }),
                          (0, a.jsx)(i.xI, {
                            name: "stateOrProvinceName",
                            control: r,
                            render: ({ field: { onChange: e, value: t } }) =>
                              (0, a.jsx)(o.A, {
                                placeholder: "US" === v ? "State" : "Province",
                                selected: t,
                                onSelect: (t) => e(t),
                                items: w,
                              }),
                          }),
                          n.stateOrProvinceName &&
                            (0, a.jsx)(s.A, { error: n.stateOrProvinceName }),
                        ],
                      }),
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsx)("label", {
                          className: "mb-1 block text-white",
                          children: "Birthday",
                        }),
                        (0, a.jsxs)("div", {
                          className: "grid grid-cols-3 gap-4",
                          children: [
                            (0, a.jsx)("div", {
                              children: (0, a.jsx)(i.xI, {
                                name: "dateOfBirth",
                                control: r,
                                render: ({
                                  field: { onChange: e, value: t },
                                }) =>
                                  (0, a.jsx)(o.A, {
                                    placeholder: "MM",
                                    selected: p[t?.getMonth()],
                                    onSelect: (r) => {
                                      let a = p.indexOf(r);
                                      e(
                                        new Date(
                                          t?.getFullYear(),
                                          a,
                                          t?.getDate(),
                                        ),
                                      );
                                    },
                                    items: p,
                                    error: n.dateOfBirth,
                                  }),
                              }),
                            }),
                            (0, a.jsx)("div", {
                              children: (0, a.jsx)(i.xI, {
                                name: "dateOfBirth",
                                control: r,
                                render: ({
                                  field: { onChange: e, value: t },
                                }) =>
                                  (0, a.jsx)(o.A, {
                                    placeholder: "DD",
                                    selected: t?.getDate().toString(),
                                    onSelect: (r) =>
                                      e(
                                        new Date(
                                          t?.getFullYear(),
                                          t?.getMonth(),
                                          parseInt(r),
                                        ),
                                      ),
                                    items: Array.from(
                                      {
                                        length: new Date(
                                          t.getFullYear(),
                                          t.getMonth() + 1,
                                          0,
                                        ).getDate(),
                                      },
                                      (e, t) => (t + 1).toString(),
                                    ),
                                    error: n.dateOfBirth,
                                  }),
                              }),
                            }),
                            (0, a.jsx)("div", {
                              children: (0, a.jsx)(i.xI, {
                                name: "dateOfBirth",
                                control: r,
                                render: ({
                                  field: { onChange: e, value: t },
                                }) =>
                                  (0, a.jsx)(o.A, {
                                    placeholder: "YYYY",
                                    selected: t?.getFullYear().toString(),
                                    onSelect: (r) =>
                                      e(
                                        new Date(
                                          parseInt(r),
                                          t?.getMonth(),
                                          t?.getDate(),
                                        ),
                                      ),
                                    items: x,
                                    error: n.dateOfBirth,
                                  }),
                              }),
                            }),
                          ],
                        }),
                        n.dateOfBirth &&
                          (0, a.jsx)(s.A, { error: n.dateOfBirth }),
                        (0, a.jsx)("p", {
                          className: "mt-2 text-xs text-gray-400",
                          children: "Must be at least 13 years old to register",
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex flex-col gap-2",
                      children: [
                        (0, a.jsx)("button", {
                          onClick: y,
                          type: "button",
                          id: "raider-details-continue-button",
                          className:
                            "rounded-lg border border-yellow-500 bg-yellow-500 py-2 text-black hover:bg-yellow-300",
                          children: "Choose your Raider Identity",
                        }),
                        (0, a.jsx)(u.A, {
                          onClick: t,
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
    94528: (e, t, r) => {
      "use strict";
      var a = r(36439),
        l =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        o = a.useSyncExternalStore,
        s = a.useRef,
        i = a.useEffect,
        n = a.useMemo,
        c = a.useDebugValue;
      t.useSyncExternalStoreWithSelector = function (e, t, r, a, d) {
        var u = s(null);
        if (null === u.current) {
          var m = { hasValue: !1, value: null };
          u.current = m;
        } else m = u.current;
        var h = o(
          e,
          (u = n(
            function () {
              function e(e) {
                if (!i) {
                  if (
                    ((i = !0), (o = e), (e = a(e)), void 0 !== d && m.hasValue)
                  ) {
                    var t = m.value;
                    if (d(t, e)) return (s = t);
                  }
                  return (s = e);
                }
                if (((t = s), l(o, e))) return t;
                var r = a(e);
                return void 0 !== d && d(t, r)
                  ? ((o = e), t)
                  : ((o = e), (s = r));
              }
              var o,
                s,
                i = !1,
                n = void 0 === r ? null : r;
              return [
                function () {
                  return e(t());
                },
                null === n
                  ? void 0
                  : function () {
                      return e(n());
                    },
              ];
            },
            [t, r, a, d],
          ))[0],
          u[1],
        );
        return (
          i(
            function () {
              ((m.hasValue = !0), (m.value = h));
            },
            [h],
          ),
          c(h),
          h
        );
      };
    },
  },
  (e) => {
    (e.O(
      0,
      [
        9950, 1446, 5013, 2696, 1329, 3492, 3357, 3214, 9980, 7699, 636, 6593,
        8792,
      ],
      () => e((e.s = 44127)),
    ),
      (_N_E = e.O()));
  },
]);
