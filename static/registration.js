(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [979],
  {
    1886: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      var a = r(2183);
      r(36439);
      var l = r(26974);
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
      function n(e) {
        let {
            children: t = "Continue with Google",
            onClick: r,
            disabled: n,
            loading: i,
            fullWidth: s,
          } = e,
          c = n || i;
        return (0, a.jsxs)("button", {
          type: "button",
          onClick: c ? void 0 : r,
          className:
            "flex max-w-64 items-center justify-center gap-3 rounded-md border border-[#DADCE0] bg-white px-5 py-2 text-sm font-medium text-[#1F1F1F] shadow-sm transition hover:bg-[#F6F9FE] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] disabled:cursor-not-allowed disabled:border-[#E0E0E0] disabled:bg-[#F8F9FA] disabled:text-[#9AA0A6] ".concat(
              s ? "w-full" : "w-auto",
            ),
          disabled: c,
          children: [
            (0, a.jsx)("span", {
              className:
                "flex h-6 w-6 items-center justify-center rounded-full bg-transparent",
              children: (0, a.jsx)(o, {}),
            }),
            (0, a.jsx)("span", {
              className: "text-sm font-medium leading-6",
              children: t,
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
    2581: (e, t, r) => {
      "use strict";
      r.d(t, { h: () => m });
      var a = r(2183),
        l = r(36439),
        o = r(51472),
        n = r(67895),
        i = r(40502),
        s = r(80777),
        c = r(26974),
        d = r(96006),
        u = r.n(d),
        h = r(95344);
      let m = {
        LeftContent: function (e) {
          var t, r;
          let { image: l } = e,
            o = (
              null == l || null == (r = l.fields) || null == (t = r.file)
                ? void 0
                : t.url
            )
              ? "https:".concat(l.fields.file.url)
              : null;
          return (0, a.jsx)("div", {
            className:
              "relative mx-auto aspect-square w-full max-w-[500px] overflow-hidden rounded-lg",
            children:
              o &&
              (0, a.jsx)(u(), {
                src: o,
                alt: "Raider Crew",
                fill: !0,
                className: "object-cover",
              }),
          });
        },
        RightContent: function (e) {
          let {
              onNext: t,
              onSkip: r,
              control: d,
              errors: u,
              isSigningUpWithEmail: m,
              trigger: g,
              setError: f,
              onNewsletterUpdate: x,
              headline: v,
              description: p,
              features: b,
            } = e,
            [y, w] = (0, l.useState)(!1),
            [j, N] = (0, l.useState)(!1),
            k = (0, s.FH)({ control: d, name: "newsletterContactEmail" }),
            A = async () => {
              if (!m && !(null == k ? void 0 : k.trim()))
                return void f("newsletterContactEmail", {
                  type: "manual",
                  message:
                    "Please provide an email address for newsletter updates",
                });
              if (m ? await g() : await g("newsletterContactEmail")) {
                w(!0);
                try {
                  (await x(),
                    (0, h.sendGTMEvent)({
                      event: "registration_newsletter_subscribe",
                    }),
                    t());
                } catch (e) {
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
                    children: v,
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
              !m &&
                (0, a.jsx)(s.xI, {
                  name: "newsletterContactEmail",
                  control: d,
                  render: (e) => {
                    let { field: t } = e;
                    return (0, a.jsx)(i.A, {
                      label: "Newsletter Email",
                      placeholder: "Email for newsletters and updates",
                      type: "email",
                      autoComplete: "email",
                      error: u.newsletterContactEmail,
                      helperText:
                        "We'll use this email to send you expedition updates and exclusive content",
                      ...t,
                    });
                  },
                }),
              (0, a.jsxs)("div", {
                className: "mx-auto",
                children: [
                  (0, a.jsx)(s.xI, {
                    name: "agreeToReceiveExtraEmails",
                    control: d,
                    render: (e) => {
                      let {
                        field: { onChange: t, value: r },
                      } = e;
                      return (0, a.jsx)(o.A, {
                        value: r,
                        onChange: (e) => {
                          (t(e), N(e));
                        },
                        children: "Opt in to mailing list",
                      });
                    },
                  }),
                  u &&
                    u.agreeToReceiveExtraEmails &&
                    (0, a.jsx)(n.A, { error: u.agreeToReceiveExtraEmails }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "flex flex-col gap-2",
                children: [
                  (0, a.jsx)("button", {
                    onClick: A,
                    type: "button",
                    id: "raider-crew-join-button",
                    className:
                      "rounded-lg border border-yellow-500 bg-yellow-500 py-2 text-black hover:bg-yellow-300 disabled:opacity-50",
                    disabled: y || !j,
                    children: y ? (0, a.jsx)(c.A, {}) : "Subscribe",
                  }),
                  (0, a.jsx)("button", {
                    onClick: () => {
                      ((0, h.sendGTMEvent)({
                        event: "registration_newsletter_skip",
                      }),
                        r());
                    },
                    type: "button",
                    id: "raider-crew-skip-button",
                    className: "py-2 text-white hover:text-yellow-500",
                    disabled: y,
                    children: "Skip",
                  }),
                ],
              }),
            ],
          });
        },
      };
    },
    7005: (e, t, r) => {
      "use strict";
      r.a(e, async (e, a) => {
        try {
          (r.r(t), r.d(t, { __N_SSG: () => s, default: () => c }));
          var l = r(2183),
            o = r(56678),
            n = r(12268),
            i = e([o, n]);
          [o, n] = i.then ? (await i)() : i;
          var s = !0;
          function c(e) {
            let { websiteSingleton: t, navItems: r, registrationPage: a } = e;
            return (0, l.jsx)(n.A, {
              children: (0, l.jsx)(o.A, {
                websiteSingleton: t,
                navItems: r,
                registrationPage: a,
              }),
            });
          }
          a();
        } catch (e) {
          a(e);
        }
      });
    },
    7812: (e, t, r) => {
      "use strict";
      function a(e) {
        var t, r, a;
        return null != (a = null == (t = e.form) ? void 0 : t.message)
          ? a
          : null == (r = e.root)
            ? void 0
            : r.message;
      }
      r.d(t, { A: () => a });
    },
    9457: (e, t, r) => {
      "use strict";
      r.a(e, async (e, a) => {
        try {
          r.d(t, { j: () => h });
          var l = r(2183),
            o = r(36439),
            n = r(12801),
            i = r(33486),
            s = r(41769),
            c = r(2581),
            d = r(55109),
            u = e([d]);
          function h(e) {
            let {
                currentStep: t,
                onNext: r,
                onSkip: a,
                onBack: u,
                control: h,
                errors: m,
                setValue: g,
                trigger: f,
                setError: x,
                watch: v,
                isSigningUpWithEmail: p,
                onRegistrationSuccess: b,
                onNewsletterUpdate: y,
                registrationPage: w,
              } = e,
              [j, N] = (0, o.useState)(null),
              [k, A] = (0, o.useState)([]),
              [C, S] = (0, o.useState)(!1);
            return ((0, o.useEffect)(() => {
              (async () => {
                let e = w.raiderIdentityAvatarOptions;
                if (!e || 0 === e.length) return A([]);
                S(!0);
                try {
                  let t = await (0, d.QH)(e);
                  if ("data" in t && t.data) {
                    let e = t.data.avatars;
                    (A(e),
                      e.forEach((e) => {
                        e.imageUrl && (new Image().src = e.imageUrl);
                      }));
                  } else
                    (console.error("Failed to fetch registration avatars"),
                      A([]));
                } catch (e) {
                  (console.error("Error fetching registration avatars:", e),
                    A([]));
                } finally {
                  S(!1);
                }
              })();
            }, [w.raiderIdentityAvatarOptions]),
            t < 2 || t > 4)
              ? null
              : (0, l.jsxs)("div", {
                  className:
                    "flex w-full flex-col gap-8 lg:flex-row lg:items-center lg:gap-24 xl:gap-32",
                  children: [
                    (0, l.jsxs)("div", {
                      className:
                        "min-w-0 flex-1 transition-opacity duration-500",
                      children: [
                        2 === t &&
                          (0, l.jsx)(s.Q.LeftContent, {
                            image: w.raiderDetailsImage,
                          }),
                        3 === t &&
                          (0, l.jsx)(i.S.LeftContent, {
                            selectedAvatar: j,
                            onAvatarSelect: (e) => {
                              N(e);
                            },
                            avatars: k,
                            isLoadingAvatars: C,
                          }),
                        4 === t &&
                          (0, l.jsx)(c.h.LeftContent, {
                            image: w.raiderCrewImage,
                          }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className:
                        "mx-auto flex w-full max-w-md flex-1 flex-col justify-center gap-2",
                      children: [
                        (0, l.jsx)(n.Z, { currentStep: t }),
                        (0, l.jsxs)("div", {
                          className:
                            "flex flex-col gap-10 transition-opacity duration-300",
                          children: [
                            2 === t &&
                              (0, l.jsx)(s.Q.RightContent, {
                                onNext: r,
                                onBack: u,
                                control: h,
                                errors: m,
                                setValue: g,
                                trigger: f,
                                headline: w.raiderDetailsHeadline,
                                description: w.raiderDetailsDescription,
                              }),
                            3 === t &&
                              (0, l.jsx)(i.S.RightContent, {
                                onNext: r,
                                onBack: u,
                                control: h,
                                errors: m,
                                trigger: f,
                                setError: x,
                                watch: v,
                                onRegistrationSuccess: b,
                                headline: w.raiderIdentityHeadline,
                                description: w.raiderIdentityDescription,
                                selectedAvatar: j,
                              }),
                            4 === t &&
                              (0, l.jsx)(c.h.RightContent, {
                                onNext: r,
                                onSkip: null != a ? a : r,
                                control: h,
                                errors: m,
                                isSigningUpWithEmail: p,
                                trigger: f,
                                setError: x,
                                onNewsletterUpdate: y,
                                headline: w.raiderCrewHeadline,
                                description: w.raiderCrewDescription,
                                features: w.raiderCrewFeatures,
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
    9771: (e, t, r) => {
      "use strict";
      r.d(t, { v: () => g });
      var a = r(2183),
        l = r(36439),
        o = r(75309),
        n = r(88256),
        i = r(40502),
        s = r(80777),
        c = r(43042),
        d = r(26974),
        u = r(67895),
        h = r(15711),
        m = r(7812);
      function g(e) {
        let {
            raiderFeatureSlides: t,
            onEmailSignUp: r,
            onGoogleSignUp: g,
            onFacebookSignUp: f,
            onLogin: x,
            control: v,
            errors: p,
            emailCheckLoading: b,
            isSigningUpWithEmail: y,
            setIsSigningUpWithEmail: w,
            facebookLoginLoading: j,
            facebookSdkReady: N,
            googleLoginLoading: k,
            googleSdkReady: A,
          } = e,
          [C, S] = (0, l.useState)(0),
          [E, I] = (0, l.useState)(null),
          [P, _] = (0, l.useState)(null),
          M = (0, m.A)(p);
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
                  features: t,
                  currentIndex: C,
                  onSwiper: I,
                  onSlideChange: (e) => {
                    S(e.realIndex);
                  },
                  controlledSwiper: P,
                  onSlideClick: (e) => {
                    (null == E || E.slideTo(e), null == P || P.slideTo(e));
                  },
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className:
                "mx-auto flex w-full max-w-md flex-1 flex-col justify-center gap-10",
              children: [
                (0, a.jsx)(n.G, {
                  features: t,
                  onSwiper: _,
                  controlledSwiper: E,
                }),
                y
                  ? (0, a.jsxs)("div", {
                      className: "flex flex-col gap-2",
                      children: [
                        (0, a.jsx)(s.xI, {
                          name: "email",
                          control: v,
                          render: (e) => {
                            let { field: t } = e;
                            return (0, a.jsx)(i.A, {
                              label: "Email",
                              placeholder: "Email",
                              type: "email",
                              autoComplete: "email",
                              error: p.email,
                              ...t,
                            });
                          },
                        }),
                        (0, a.jsx)(s.xI, {
                          name: "password",
                          control: v,
                          render: (e) => {
                            let { field: t } = e;
                            return (0, a.jsx)(i.A, {
                              label: "Password",
                              placeholder: "Password",
                              type: "password",
                              autoComplete: "new-password",
                              error: p.password,
                              ...t,
                            });
                          },
                        }),
                        (0, a.jsxs)("button", {
                          onClick: r,
                          type: "button",
                          disabled: b,
                          id: "email-signup-continue-button",
                          className:
                            "mt-2 flex items-center justify-center gap-2 rounded-lg border border-yellow-500 bg-yellow-500 py-2 text-black hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-50",
                          children: [
                            b && (0, a.jsx)(d.A, {}),
                            b ? "Checking..." : "Continue with Email",
                          ],
                        }),
                        (0, a.jsx)(h.A, {
                          onClick: () => w(!1),
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
                        p.googleServerAuthCode &&
                          (0, a.jsx)(u.A, { error: p.googleServerAuthCode }),
                        (0, a.jsxs)("div", {
                          className: "flex gap-3",
                          children: [
                            (0, a.jsxs)("button", {
                              onClick: g,
                              type: "button",
                              disabled: !A || k,
                              className:
                                "flex flex-1 justify-center rounded-lg border border-gray-600 p-2 hover:border-yellow-300 disabled:cursor-not-allowed disabled:opacity-50",
                              children: [
                                k
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
                              disabled: !N || j,
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
                              onClick: () => w(!0),
                              type: "button",
                              id: "continue-with-email-button",
                              className:
                                "rounded-lg border border-yellow-500 bg-yellow-500 py-2 text-black hover:bg-yellow-300",
                              children: "Continue with Email",
                            }),
                            (0, a.jsx)(h.A, {
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
    12801: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => o });
      var a = r(2183);
      r(36439);
      let l = [
        { number: 1, label: "Raider Details" },
        { number: 2, label: "Raider Identity" },
        { number: 3, label: "Join Lara's Crew" },
      ];
      function o(e) {
        let { currentStep: t } = e;
        if (t < 2 || t > 4) return null;
        let r = t - 1;
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
                let t = e.number === r,
                  l = e.number < r;
                return (0, a.jsxs)(
                  "div",
                  {
                    "aria-label": "Step "
                      .concat(e.number, ": ")
                      .concat(e.label),
                    className:
                      "relative z-10 flex items-center justify-center rounded-full border-2 border-yellow-500 bg-black transition-all duration-500 ".concat(
                        l
                          ? "bg-yellow-500 text-black"
                          : t
                            ? "bg-black px-4 py-2"
                            : "h-10 w-10 bg-black",
                      ),
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
                        className:
                          "overflow-hidden whitespace-nowrap text-sm text-white transition-all duration-500 ".concat(
                            t ? "block" : "hidden",
                          ),
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
    13776: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => d });
      var a = r(2183),
        l = r(36439),
        o = r(85414),
        n = r(95290),
        i = r(52464),
        s = r(11677),
        c = r.n(s);
      function d(e) {
        var t;
        let {
            items: r,
            selected: s,
            onSelect: d = () => {},
            placeholder: u = "Options",
            error: h,
            variant: m,
            rounded: g = !1,
          } = e,
          f = (e) => (e ? ("string" == typeof e ? e : e.name) : ""),
          x = (e) => {
            d("string" == typeof e ? e : e.value);
          };
        return (0, a.jsxs)(o.Menu, {
          as: "div",
          className: "relative inline-block w-full grow text-left",
          children: [
            (0, a.jsx)("div", {
              children: (0, a.jsxs)(o.Menu.Button, {
                className: (0, i.cn)(
                  "flex w-full items-center border-2 bg-white/20 px-3 py-4 backdrop-blur duration-200 outline-none",
                  h
                    ? "border-red-500/40 hover:border-red-500/70 focus:border-red-500/70"
                    : "dark" === m
                      ? "rounded-lg border-black/20 px-5 py-3 hover:border-black/40 focus:border-black/40"
                      : "border-gray-300/20 hover:border-white/50 focus:border-white",
                  "dark" === m ? "text-black" : "text-white",
                  g && "rounded-lg",
                ),
                children: [
                  s
                    ? "string" == typeof r[0]
                      ? s
                      : null == (t = r.find((e) => e.value === s))
                        ? void 0
                        : t.name
                    : u,
                  (0, a.jsx)("div", { className: "grow" }),
                  (0, a.jsx)(n.A, {
                    className: "".concat(
                      "dark" === m ? "text-black" : "text-yellow",
                      " -mr-1 h-6 w-6",
                    ),
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
                  children: r.map((e) =>
                    (0, a.jsx)(
                      o.Menu.Item,
                      {
                        children: (t) => {
                          let { active: r } = t,
                            l = "string" != typeof e ? e.href : void 0,
                            o = (function () {
                              for (
                                var e = arguments.length, t = Array(e), r = 0;
                                r < e;
                                r++
                              )
                                t[r] = arguments[r];
                              return t.filter(Boolean).join(" ");
                            })(
                              r ? "bg-gray-100 text-gray-900" : "text-gray-700",
                              "block px-4 py-2 text-sm",
                            );
                          return l
                            ? (0, a.jsx)(c(), {
                                scroll: !1,
                                href: l,
                                onClick: () => x(e),
                                className: o,
                                children: f(e),
                              })
                            : (0, a.jsx)("button", {
                                type: "button",
                                onClick: () => x(e),
                                className: "w-full text-left ".concat(o),
                                children: f(e),
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
    22099: (e, t, r) => {
      "use strict";
      r.d(t, { F: () => c });
      var a = r(2183),
        l = r(36439),
        o = r(96006),
        n = r.n(o),
        i = r(43042),
        s = r(66767);
      function c(e) {
        var t, r;
        let {
            onUnlockDashboard: o,
            celebrationDescription: c,
            celebrationImage: d,
          } = e,
          [u, h] = (0, l.useState)(!1),
          m = (
            null == d || null == (r = d.fields) || null == (t = r.file)
              ? void 0
              : t.url
          )
            ? "https:".concat(d.fields.file.url)
            : "/images/welcome/Lara-Croft-Hero.png";
        return (
          (0, l.useEffect)(() => {
            h(!0);
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
                        playAnimation: u,
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "absolute left-1/2 top-1/2 aspect-square w-2/3 -translate-x-1/2 -translate-y-[calc(50%-2rem)] rounded-full bg-[radial-gradient(circle,#eab30880_0%,transparent_70%)]",
                    }),
                    (0, a.jsx)("div", {
                      className: "relative z-10 h-full w-full -translate-x-8",
                      children: (0, a.jsx)(n(), {
                        src: m,
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
                          children: c,
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex flex-col gap-3",
                      children: [
                        (0, a.jsx)(s.A, {
                          onUnlock: o,
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
    28872: (e, t, r) => {
      "use strict";
      e.exports = r(94528);
    },
    30331: (e, t, r) => {
      "use strict";
      r.a(e, async (e, a) => {
        try {
          r.d(t, { Fc: () => d });
          var l = r(75109),
            o = r(46951),
            n = e([l]);
          l = (n.then ? (await n)() : n)[0];
          let i = (0, l.FH_)(o.p6U()).extend({
              registrationMethod: o.euz("email"),
              facebookAccessToken: o.YjP().optional(),
              googleServerAuthCode: o.YjP().optional(),
            }),
            s = (0, l.x0b)(o.p6U())
              .extend({
                registrationMethod: o.euz("facebook"),
                facebookAccessToken: o.YjP().optional(),
                googleServerAuthCode: o.YjP().optional(),
                password: o.YjP().optional(),
              })
              .superRefine((e, t) => {
                var r;
                (null == (r = e.facebookAccessToken) ? void 0 : r.trim()) ||
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
                var r;
                (null == (r = e.googleServerAuthCode) ? void 0 : r.trim()) ||
                  t.addIssue({
                    code: "custom",
                    message:
                      "Please connect your Google account before continuing registration.",
                    path: ["root"],
                  });
              }),
            d = o.gMt("registrationMethod", [i, s, c]);
          a();
        } catch (e) {
          a(e);
        }
      });
    },
    33486: (e, t, r) => {
      "use strict";
      r.d(t, { S: () => y });
      var a = r(2183),
        l = r(36439),
        o = r(96006),
        n = r.n(o),
        i = r(40502),
        s = r(51472),
        c = r(67895);
      function d(e) {
        let { defaultUnderlined: t, bold: r, ...l } = e;
        return (0, a.jsx)("a", {
          className: ""
            .concat(t ? "underline hover:no-underline" : "hover:underline", " ")
            .concat(r && "font-bold"),
          ...l,
          children: e.children,
        });
      }
      var u = r(80777),
        h = r(94536),
        m = r(63308);
      function g(e) {
        let { avatars: t, currentIndex: r, onSlideChange: o } = e,
          [i, s] = (0, l.useState)(null);
        return (0, a.jsxs)("div", {
          className: "w-full",
          children: [
            (0, a.jsx)("div", {
              className: "relative w-full",
              children: (0, a.jsx)(
                h.RC,
                {
                  grabCursor: !0,
                  modules: [m.Vx, m.dK],
                  onSwiper: (e) => {
                    s(e);
                  },
                  onSlideChange: o,
                  onClick: (e) => {
                    var t;
                    let r = e.clickedIndex,
                      a =
                        null == (t = e.slides[r])
                          ? void 0
                          : t.getAttribute("data-swiper-slide-index");
                    if (null != a) {
                      let t = parseInt(a, 10);
                      t !== e.realIndex && e.slideToLoop(t);
                    }
                  },
                  centeredSlides: !0,
                  loop: t.length > 0,
                  slidesPerView: 3,
                  spaceBetween: 0,
                  breakpoints: {
                    320: { slidesPerView: 2 },
                    768: { slidesPerView: 2.5 },
                    1024: { slidesPerView: 3 },
                  },
                  className:
                    "avatar-swiper !overflow-visible py-8 lg:!overflow-hidden",
                  children: t.map((e, t) => {
                    let l = t === r,
                      o = !1 === e.isUnlocked;
                    return (0, a.jsx)(
                      h.qr,
                      {
                        className: "flex items-center justify-center py-4",
                        children: (0, a.jsx)("div", {
                          className:
                            "flex aspect-square w-full items-center justify-center transition-all duration-300",
                          children: e.imageUrl
                            ? (0, a.jsxs)("div", {
                                className:
                                  "relative h-full w-full overflow-hidden rounded-full transition-all duration-300 ".concat(
                                    l
                                      ? "scale-100 opacity-100 ring-2 ring-yellow-500"
                                      : "scale-75 opacity-70 ring-0",
                                  ),
                                children: [
                                  (0, a.jsx)(n(), {
                                    src: e.imageUrl,
                                    alt: e.title || "Avatar ".concat(e.id),
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
                                className: "h-full w-full rounded-full "
                                  .concat(
                                    e.backgroundColor || "bg-gray-500",
                                    " transition-all duration-300 ",
                                  )
                                  .concat(
                                    l
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
                "swiper-".concat(t.length),
              ),
            }),
            (0, a.jsx)("div", {
              className: "w-full",
              children: (0, a.jsx)("div", {
                className: "mx-auto flex items-center justify-center gap-1",
                children: t.map((e, t) =>
                  (0, a.jsx)(
                    "button",
                    {
                      type: "button",
                      className: "group py-4",
                      onClick: () => {
                        null == i || i.slideToLoop(t);
                      },
                      "aria-label": "Select avatar ".concat(t + 1),
                      children: (0, a.jsx)("div", {
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
      (r(4197), r(92597), r(18855));
      var f = r(26974),
        x = r(15711),
        v = r(95344),
        p = r(7812);
      function b() {
        return (0, a.jsxs)("div", {
          className: "relative mx-auto aspect-square w-full max-w-[500px]",
          children: [
            (0, a.jsx)("div", {
              className:
                "absolute left-1/2 top-1/2 aspect-square w-2/3 -translate-x-1/2 -translate-y-[calc(50%-2rem)] rounded-full bg-[radial-gradient(circle,#eab30880_0%,transparent_70%)]",
            }),
            (0, a.jsx)("div", {
              className: "relative z-10 h-full w-full -translate-x-8",
              children: (0, a.jsx)(n(), {
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
              selectedAvatar: t,
              onAvatarSelect: r,
              avatars: o,
              isLoadingAvatars: n,
            } = e,
            [i, s] = (0, l.useState)(0);
          return ((0, l.useEffect)(() => {
            o.length > 0 && !t && r(o[0]);
          }, [o, t, r]),
          n)
            ? (0, a.jsx)("div", {
                className: "flex h-full items-center justify-center",
                children: (0, a.jsx)(f.A, {}),
              })
            : 0 === o.length
              ? (0, a.jsx)(b, {})
              : (0, a.jsx)(g, {
                  avatars: o,
                  currentIndex: i,
                  onSlideChange: (e) => {
                    (s(e.realIndex), o[e.realIndex] && r(o[e.realIndex]));
                  },
                });
        },
        RightContent: function (e) {
          let {
              onNext: t,
              onBack: r,
              control: o,
              errors: n,
              trigger: h,
              setError: m,
              watch: g,
              onRegistrationSuccess: b,
              headline: y,
              description: w,
              selectedAvatar: j,
            } = e,
            [N, k] = (0, l.useState)(!1),
            [A, C] = (0, l.useState)(!1),
            S = (0, p.A)(n),
            E = g("acceptTermsOfService"),
            I = async () => {
              if (j && !j.isUnlocked)
                return void m("root", {
                  type: "manual",
                  message: "Please select an unlocked avatar to continue.",
                });
              if (await h(["displayName", "acceptTermsOfService"])) {
                k(!0);
                try {
                  (await b(null == j ? void 0 : j.id),
                    (0, v.sendGTMEvent)({
                      event: "registration_raider_identity_complete",
                    }),
                    C(!0),
                    setTimeout(() => {
                      (C(!1), k(!1), t());
                    }, 1500));
                } catch (e) {
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
                    children: y,
                  }),
                  (0, a.jsx)("p", { children: w }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "flex flex-col gap-2",
                children: [
                  (0, a.jsx)(u.xI, {
                    name: "displayName",
                    control: o,
                    render: (e) => {
                      let { field: t } = e;
                      return (0, a.jsx)(i.A, {
                        label: "Display Name",
                        placeholder: "Display Name",
                        error: n.displayName,
                        helperText:
                          "Choose a unique display name that other players will see",
                        ...t,
                      });
                    },
                  }),
                  (0, a.jsxs)("div", {
                    className: "mb-4",
                    children: [
                      (0, a.jsx)(u.xI, {
                        name: "acceptTermsOfService",
                        control: o,
                        render: (e) => {
                          let {
                            field: { onChange: t, value: r },
                          } = e;
                          return (0, a.jsxs)(s.A, {
                            id: "accept-terms-checkbox",
                            value: !!r,
                            onChange: (e) => t(e),
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
                          });
                        },
                      }),
                      n.acceptTermsOfService &&
                        (0, a.jsx)(c.A, { error: n.acceptTermsOfService }),
                    ],
                  }),
                  S &&
                    (0, a.jsx)("div", {
                      className: "text-red-error",
                      children: (0, a.jsx)(c.A, { error: S }),
                    }),
                  (0, a.jsx)("button", {
                    onClick: I,
                    type: "button",
                    id: "raider-identity-save-button",
                    className:
                      "rounded-lg border border-yellow-500 bg-yellow-500 py-2 text-black hover:bg-yellow-300 ".concat(
                        A ? "" : "disabled:opacity-50",
                      ),
                    disabled: !E || N || A,
                    children: N
                      ? A
                        ? (0, a.jsx)("span", {
                            className: "font-bold",
                            children: "Account Created!",
                          })
                        : (0, a.jsx)(f.A, {})
                      : "Save Profile",
                  }),
                  (0, a.jsx)(x.A, {
                    onClick: r,
                    full: !0,
                    id: "raider-identity-back-button",
                    disabled: N || A,
                    children: "Go Back",
                  }),
                ],
              }),
            ],
          });
        },
      };
    },
    41769: (e, t, r) => {
      "use strict";
      r.d(t, { Q: () => p });
      var a = r(2183),
        l = r(36439),
        o = r(13776),
        n = r(67895),
        i = r(80777),
        s = r(91441),
        c = r(97447);
      let d = [
        { name: "United States of America", value: "US" },
        ...s
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
      var u = r(15711),
        h = r(96006),
        m = r.n(h),
        g = r(95344);
      let f = new Date().getFullYear(),
        x = Array.from({ length: 120 }, (e, t) => (f - t).toString()),
        v = [
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
        p = {
          LeftContent: function (e) {
            var t, r;
            let { image: l } = e,
              o = (
                null == l || null == (r = l.fields) || null == (t = r.file)
                  ? void 0
                  : t.url
              )
                ? "https:".concat(l.fields.file.url)
                : null;
            return (0, a.jsx)("div", {
              className: "relative mx-auto aspect-square w-full max-w-[500px]",
              children:
                o &&
                (0, a.jsx)(m(), {
                  src: o,
                  alt: "Raider Details",
                  fill: !0,
                  className: "rounded-full object-cover",
                }),
            });
          },
          RightContent: function (e) {
            let {
                onNext: t,
                onBack: r,
                control: s,
                errors: h,
                setValue: m,
                trigger: f,
                headline: p,
                description: b,
              } = e,
              y = (0, i.FH)({ control: s, name: "countryAlpha2Code" }),
              w = (0, l.useMemo)(
                () =>
                  c
                    .filter((e) => e.country === y)
                    .map((e) => ({ name: e.name, value: e.name })),
                [y],
              ),
              j = async () => {
                let e = ["countryAlpha2Code", "dateOfBirth"];
                (("US" === y || "CA" === y) && e.push("stateOrProvinceName"),
                  (await f(e)) &&
                    ((0, g.sendGTMEvent)({
                      event: "registration_raider_details_complete",
                    }),
                    t()));
              };
            return (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsxs)("div", {
                  className: "text-center text-white",
                  children: [
                    (0, a.jsx)("h2", {
                      className: "mb-2 text-3xl font-bold leading-tight",
                      children: p,
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
                          control: s,
                          render: (e) => {
                            let {
                              field: { onChange: t, value: r },
                            } = e;
                            return (0, a.jsx)(o.A, {
                              placeholder: "Country",
                              selected: r,
                              onSelect: (e) => {
                                (t(e), m("stateOrProvinceName", ""));
                              },
                              items: d,
                              error: h.countryAlpha2Code,
                            });
                          },
                        }),
                        h.countryAlpha2Code &&
                          (0, a.jsx)(n.A, { error: h.countryAlpha2Code }),
                      ],
                    }),
                    ("US" === y || "CA" === y) &&
                      (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsx)("label", {
                            className: "mb-1 block text-white",
                            children: "US" === y ? "State" : "Province",
                          }),
                          (0, a.jsx)(i.xI, {
                            name: "stateOrProvinceName",
                            control: s,
                            render: (e) => {
                              let {
                                field: { onChange: t, value: r },
                              } = e;
                              return (0, a.jsx)(o.A, {
                                placeholder: "US" === y ? "State" : "Province",
                                selected: r,
                                onSelect: (e) => t(e),
                                items: w,
                              });
                            },
                          }),
                          h.stateOrProvinceName &&
                            (0, a.jsx)(n.A, { error: h.stateOrProvinceName }),
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
                                control: s,
                                render: (e) => {
                                  let {
                                    field: { onChange: t, value: r },
                                  } = e;
                                  return (0, a.jsx)(o.A, {
                                    placeholder: "MM",
                                    selected:
                                      v[null == r ? void 0 : r.getMonth()],
                                    onSelect: (e) => {
                                      let a = v.indexOf(e);
                                      t(
                                        new Date(
                                          null == r ? void 0 : r.getFullYear(),
                                          a,
                                          null == r ? void 0 : r.getDate(),
                                        ),
                                      );
                                    },
                                    items: v,
                                    error: h.dateOfBirth,
                                  });
                                },
                              }),
                            }),
                            (0, a.jsx)("div", {
                              children: (0, a.jsx)(i.xI, {
                                name: "dateOfBirth",
                                control: s,
                                render: (e) => {
                                  var t;
                                  let {
                                    field: { onChange: r, value: l },
                                  } = e;
                                  return (0, a.jsx)(o.A, {
                                    placeholder: "DD",
                                    selected:
                                      null == l
                                        ? void 0
                                        : l.getDate().toString(),
                                    onSelect: (e) =>
                                      r(
                                        new Date(
                                          null == l ? void 0 : l.getFullYear(),
                                          null == l ? void 0 : l.getMonth(),
                                          parseInt(e),
                                        ),
                                      ),
                                    items: Array.from(
                                      {
                                        length: new Date(
                                          (t = l).getFullYear(),
                                          t.getMonth() + 1,
                                          0,
                                        ).getDate(),
                                      },
                                      (e, t) => (t + 1).toString(),
                                    ),
                                    error: h.dateOfBirth,
                                  });
                                },
                              }),
                            }),
                            (0, a.jsx)("div", {
                              children: (0, a.jsx)(i.xI, {
                                name: "dateOfBirth",
                                control: s,
                                render: (e) => {
                                  let {
                                    field: { onChange: t, value: r },
                                  } = e;
                                  return (0, a.jsx)(o.A, {
                                    placeholder: "YYYY",
                                    selected:
                                      null == r
                                        ? void 0
                                        : r.getFullYear().toString(),
                                    onSelect: (e) =>
                                      t(
                                        new Date(
                                          parseInt(e),
                                          null == r ? void 0 : r.getMonth(),
                                          null == r ? void 0 : r.getDate(),
                                        ),
                                      ),
                                    items: x,
                                    error: h.dateOfBirth,
                                  });
                                },
                              }),
                            }),
                          ],
                        }),
                        h.dateOfBirth &&
                          (0, a.jsx)(n.A, { error: h.dateOfBirth }),
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
                          onClick: j,
                          type: "button",
                          id: "raider-details-continue-button",
                          className:
                            "rounded-lg border border-yellow-500 bg-yellow-500 py-2 text-black hover:bg-yellow-300",
                          children: "Choose your Raider Identity",
                        }),
                        (0, a.jsx)(u.A, {
                          onClick: r,
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
    51472: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => l });
      var a = r(2183);
      function l(e) {
        let {
          children: t,
          variant: r = "normal",
          value: l,
          onChange: o,
          id: n,
        } = e;
        return (0, a.jsx)("div", {
          className: "relative",
          children: (0, a.jsxs)("label", {
            className: "main flex cursor-pointer items-center",
            children: [
              (0, a.jsx)("p", { className: "ml-8 select-none", children: t }),
              (0, a.jsx)("input", {
                id: n,
                checked: l,
                onChange: (e) => o(e.target.checked),
                type: "checkbox",
              }),
              (0, a.jsx)("span", {
                className: "geekmark backdrop-blur outline-none ".concat(
                  "normal" === r
                    ? "geekmark-light border-2 border-gray-300/20 bg-white/20 duration-200 hover:border-white/50 focus:border-white"
                    : "geekmark-dark border-2 border-gray-500/30 bg-gray-800/10 duration-200 hover:border-gray-800/60 focus:border-gray-800/80",
                ),
              }),
            ],
          }),
        });
      }
      r(36439);
    },
    52464: (e, t, r) => {
      "use strict";
      r.d(t, { cn: () => o });
      var a = r(3638),
        l = r(30597);
      function o() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return (0, l.QP)((0, a.$)(t));
      }
    },
    54421: (e, t, r) => {
      "use strict";
      r.d(t, { N: () => a });
      let a = "facebook-account-not-found";
    },
    56678: (e, t, r) => {
      "use strict";
      r.a(e, async (e, a) => {
        try {
          r.d(t, { A: () => E });
          var l = r(2183),
            o = r(36439),
            n = r(80777),
            i = r(73357),
            s = r(39334),
            c = r(67895),
            d = r(99435),
            u = r(55109),
            h = r(95344),
            m = r(9771),
            g = r(18652),
            f = r(9457),
            x = r(22099),
            v = r(1886),
            p = r(30331),
            b = r(45593),
            y = r(54421),
            w = r(57524),
            j = e([s, d, u, f, p]);
          [s, d, u, f, p] = j.then ? (await j)() : j;
          let k = {
              UNKNOWN: "An unknown error has occurred.",
              FORM_VALIDATION:
                "Please check the form for errors and try again.",
              DISPLAY_NAME_UNAVAILABLE:
                "That display name is not available. Please try another.",
              PROFANE_DISPLAY_NAME:
                "That display name isn't allowed. Please try another.",
            },
            A = "Account already exists. Please try logging in";
          function N(e) {
            for (
              var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), a = 1;
              a < t;
              a++
            )
              r[a - 1] = arguments[a];
            let l = { ...e };
            for (let e of r) delete l[e];
            return l;
          }
          let C = { 1: 2, 2: 3, 3: 4, 4: 5, 5: 5 },
            S = { 1: 1, 2: 1, 3: 2, 4: 3, 5: 4 },
            E = (e) => {
              var t, r, a, j, E, I, P, _, M, T, D, F;
              let { navItems: O, registrationPage: V } = e,
                R = (0, g.useRouter)(),
                [L, G] = (0, o.useState)(1),
                {
                  control: B,
                  setValue: U,
                  formState: { errors: Y },
                  setError: H,
                  trigger: z,
                  clearErrors: q,
                  getValues: W,
                  watch: J,
                } = (0, n.mN)({
                  resolver: (0, i.u)(p.Fc),
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
                K = (0, n.FH)({ control: B, name: "registrationMethod" }),
                Q = (0, n.FH)({ control: B, name: "facebookAccessToken" }),
                Z = (0, n.FH)({ control: B, name: "googleServerAuthCode" }),
                {
                  setUserData: X,
                  setMailingListStatus: $,
                  userData: ee,
                  requiresIdentitySetup: et,
                  fetchUserInfo: er,
                } = (0, d.u)(),
                [ea, el] = (0, o.useState)(!1),
                [eo, en] = (0, o.useState)(!1),
                [ei, es] = (0, o.useState)(null),
                [ec, ed] = (0, o.useState)(!1),
                [eu, eh] = (0, o.useState)(!1),
                [em, eg] = (0, o.useState)(!1),
                [ef, ex] = (0, o.useState)(!1),
                [ev, ep] = (0, o.useState)(!1),
                eb = (0, o.useRef)(!1),
                ey = ((D = "1881486789441765"), void 0 !== D) ? D : "",
                ew = ((F =
                  "913283481016-rge7l6npr5tpnce5gd5fb28kmf2v33tu.apps.googleusercontent.com"),
                void 0 !== F)
                  ? F
                  : "",
                ej = (0, o.useRef)(null),
                eN = (0, o.useRef)(null),
                ek = (0, o.useRef)(!1),
                eA = (0, o.useRef)(null),
                eC = (0, o.useRef)(!1),
                eS = (0, o.useRef)(null),
                eE = (0, o.useRef)(null),
                eI =
                  !!ee &&
                  !(null == (t = ee.publisherData) ? void 0 : t.dateOfBirth),
                eP =
                  !!ee &&
                  !(null == (r = ee.publisherData)
                    ? void 0
                    : r.countryAlpha2Code),
                e_ =
                  !!ee &&
                  !!(null == (a = ee.publisherData)
                    ? void 0
                    : a.countryAlpha2Code) &&
                  ["US", "CA"].includes(ee.publisherData.countryAlpha2Code) &&
                  !ee.publisherData.stateOrProvinceName,
                eM = R.query.step,
                eT = "publisher" === eM ? 2 : "display-name" === eM ? 3 : null,
                eD = null != eT ? eT : eP || e_ || eI ? 2 : 3,
                [eF, eO] = (0, o.useState)(null),
                eV = (0, o.useRef)(!1),
                eR = et && !!ee,
                eL = eR || "identity" === R.query.resume,
                eG = (0, o.useCallback)(() => {
                  var e, t, r, a, l;
                  return (
                    (null == ee ||
                    null == (t = ee.accountInfo) ||
                    null == (e = t.email)
                      ? void 0
                      : e.trim()) ||
                    (null == ei ||
                    null == (a = ei.accountInfo) ||
                    null == (r = a.email)
                      ? void 0
                      : r.trim()) ||
                    (null == (l = W("email")) ? void 0 : l.trim()) ||
                    ""
                  );
                }, [
                  W,
                  null == ei || null == (j = ei.accountInfo) ? void 0 : j.email,
                  null == ee || null == (E = ee.accountInfo) ? void 0 : E.email,
                ]),
                eB = (0, o.useCallback)(() => {
                  var e;
                  return (
                    (null == (e = W("newsletterContactEmail"))
                      ? void 0
                      : e.trim()) || eG()
                  );
                }, [eG, W]),
                eU = (0, o.useCallback)(async () => {
                  if (eb.current || "email" === K) return;
                  let e = eG();
                  if (e)
                    try {
                      (await u.oB({ email: e }), (eb.current = !0));
                    } catch (e) {
                      console.error(
                        "Failed to ensure contact email on exit",
                        e,
                      );
                    }
                }, [eG, K]),
                eY = (0, o.useCallback)(() => {
                  eA.current &&
                    (window.removeEventListener("focus", eA.current),
                    (eA.current = null));
                }, []),
                eH = (0, o.useCallback)(() => {
                  eY();
                  let e = () => {
                    ek.current &&
                      ((ek.current = !1),
                      eg(!1),
                      H("root", {
                        message:
                          "Google sign-in was cancelled. Please try again.",
                      }));
                  };
                  ((eA.current = e),
                    window.addEventListener("focus", e, { once: !0 }));
                }, [eY, H]),
                ez = (0, o.useCallback)(() => {
                  eS.current &&
                    (window.removeEventListener("focus", eS.current),
                    (eS.current = null));
                }, []),
                eq = (0, o.useCallback)(() => {
                  ez();
                  let e = () => {
                    eC.current &&
                      ((eC.current = !1),
                      ed(!1),
                      H("root", {
                        message:
                          "Facebook sign-in was cancelled. Please try again.",
                      }));
                  };
                  ((eS.current = e),
                    window.addEventListener("focus", e, { once: !0 }));
                }, [ez, H]),
                eW = (e) => {
                  (en(e),
                    e &&
                      (U("registrationMethod", "email"),
                      U("facebookAccessToken", "", { shouldValidate: !0 })));
                },
                eJ = (0, o.useCallback)(
                  async (e) => {
                    try {
                      var t;
                      let r = await u.rw({
                        ServerAuthCode: e,
                        createAccount: !0,
                      });
                      if (r.error)
                        return (
                          H("root", {
                            message: r.error.errorMessage || k.UNKNOWN,
                          }),
                          U("googleServerAuthCode", "", { shouldValidate: !0 }),
                          ep(!1),
                          !1
                        );
                      if (
                        (null == (t = r.data) ? void 0 : t.newlyCreated) === !1
                      )
                        return (
                          H("root", { message: A }),
                          U("googleServerAuthCode", "", { shouldValidate: !0 }),
                          ep(!1),
                          !1
                        );
                      return (
                        U("registrationMethod", "google", {
                          shouldValidate: !0,
                          shouldDirty: !0,
                        }),
                        U("googleServerAuthCode", "__PROVISIONED__", {
                          shouldValidate: !0,
                          shouldDirty: !0,
                        }),
                        q(),
                        eW(!1),
                        ep(!0),
                        1 === L && G(2),
                        !0
                      );
                    } catch (e) {
                      return (
                        console.error("Google sign-in failed:", e),
                        H("root", {
                          message: "Google sign-in failed. Please try again.",
                        }),
                        U("googleServerAuthCode", "", { shouldValidate: !0 }),
                        ep(!1),
                        !1
                      );
                    } finally {
                      eg(!1);
                    }
                  },
                  [q, L, G, H, ep, eg, eW, U],
                );
              ((0, o.useEffect)(() => {
                if (!R.isReady) return;
                let e = R.query.reason;
                if (
                  "string" == typeof e
                    ? e === y.N
                    : Array.isArray(e) && e.includes(y.N)
                ) {
                  let e = { ...R.query };
                  (delete e.reason,
                    R.replace({ pathname: "/registration", query: e }, void 0, {
                      shallow: !0,
                    }));
                }
                let t = R.query.method,
                  r = Array.isArray(t) ? t[0] : t;
                (async () => {
                  if ("facebook" === r && !Q) {
                    let e = (0, b.Ye)();
                    if (!e)
                      return H("root", {
                        message:
                          "Your Facebook session expired. Please try connecting Facebook again.",
                      });
                    (U("registrationMethod", "facebook"),
                      U("facebookAccessToken", e.accessToken, {
                        shouldValidate: !0,
                      }),
                      U("email", e.email, {
                        shouldDirty: !0,
                        shouldValidate: !0,
                      }),
                      e.name &&
                        U("displayName", e.name, {
                          shouldDirty: !0,
                          shouldValidate: !0,
                        }),
                      en(!1),
                      q(),
                      G((e) => (1 === e ? 2 : e)));
                  }
                  if ("google" === r && !Z) {
                    let e = (0, w.hF)();
                    if (!e)
                      return H("root", {
                        message:
                          "We couldn't complete Google registration. Please connect your Google account again.",
                      });
                    if ((eg(!0), !(await eJ(e.serverAuthCode)))) return;
                    (e.email &&
                      U("email", e.email, {
                        shouldDirty: !0,
                        shouldValidate: !0,
                      }),
                      e.name &&
                        !W("displayName") &&
                        U("displayName", e.name, {
                          shouldDirty: !0,
                          shouldValidate: !0,
                        }));
                  }
                })();
              }, [
                q,
                Q,
                W,
                Z,
                eJ,
                R,
                R.isReady,
                R.query.method,
                R.query.reason,
                H,
                eg,
                U,
              ]),
                (0, o.useEffect)(() => {
                  var e, t, r;
                  if (!eL) {
                    (eO(null), (eV.current = !1));
                    return;
                  }
                  let a = null !== eF ? eF : eD;
                  (null === eF && eO(a),
                    eV.current ||
                      (G(a),
                      eW(!1),
                      U("registrationMethod", "email"),
                      (null == ee || null == (e = ee.accountInfo)
                        ? void 0
                        : e.email) &&
                        U("email", ee.accountInfo.email, {
                          shouldDirty: !1,
                          shouldValidate: !1,
                        }),
                      (null == ee ||
                      null == (r = ee.accountInfo) ||
                      null == (t = r.titleInfo)
                        ? void 0
                        : t.displayName) &&
                        U("displayName", ee.accountInfo.titleInfo.displayName, {
                          shouldDirty: !1,
                          shouldValidate: !1,
                        }),
                      U("acceptTermsOfService", !1, {
                        shouldDirty: !1,
                        shouldValidate: !1,
                      }),
                      (eV.current = !0)));
                }, [
                  eL,
                  eD,
                  eF,
                  eO,
                  U,
                  eW,
                  null == ee || null == (I = ee.accountInfo) ? void 0 : I.email,
                  null == ee ||
                  null == (_ = ee.accountInfo) ||
                  null == (P = _.titleInfo)
                    ? void 0
                    : P.displayName,
                ]),
                (0, o.useEffect)(() => {
                  if (!ey) return;
                  let e = !1;
                  return (
                    (0, b.FJ)(ey)
                      .then((t) => {
                        !e && t && eh(!0);
                      })
                      .catch((t) => {
                        e || (console.error(t), eh(!1));
                      }),
                    () => {
                      e = !0;
                    }
                  );
                }, [ey]));
              let eK = (0, o.useCallback)(async () => {
                  if (window.FB)
                    return await new Promise((e) => {
                      try {
                        var t;
                        null == (t = window.FB) ||
                          t.api("/me", { fields: "email,name" }, (t) => e(t));
                      } catch (t) {
                        e(void 0);
                      }
                    });
                }, []),
                eQ = (0, o.useCallback)(
                  async (e) => {
                    if (
                      ((ek.current = !1),
                      eY(),
                      console.info("[Google Sign-In] code client response", e),
                      e.error || !e.code)
                    ) {
                      (H("root", {
                        message:
                          e.error_description ||
                          e.error ||
                          "Google sign-in failed. Please try again.",
                      }),
                        eg(!1));
                      return;
                    }
                    await eJ(e.code);
                  },
                  [q, eY, L, G, H, eg, eW, U],
                );
              ((0, o.useEffect)(() => {
                if (!ew) return;
                if (ej.current) return void ex(!0);
                let e = !1;
                return (
                  ex(!1),
                  (0, w.S_)()
                    .then((t) => {
                      t &&
                        !e &&
                        ((ej.current = t),
                        (eN.current = (0, w.gS)(t, {
                          client_id: ew,
                          scope: "openid email profile",
                          ux_mode: "popup",
                          callback: (e) => {
                            eQ(e);
                          },
                        })),
                        ex(!0));
                    })
                    .catch((t) => {
                      e || (console.error(t), ex(!1));
                    }),
                  () => {
                    e = !0;
                  }
                );
              }, [ew, eQ, U]),
                (0, o.useEffect)(
                  () => () => {
                    (eY(), ez());
                  },
                  [ez, eY],
                ),
                (0, o.useEffect)(() => {
                  if ("email" === K) return;
                  let e = eG(),
                    t = W("newsletterContactEmail");
                  e &&
                    !t &&
                    U("newsletterContactEmail", e, {
                      shouldDirty: !1,
                      shouldValidate: !0,
                    });
                }, [
                  eG,
                  W,
                  K,
                  U,
                  null == ee || null == (M = ee.accountInfo) ? void 0 : M.email,
                  null == ei || null == (T = ei.accountInfo) ? void 0 : T.email,
                ]),
                (0, o.useEffect)(
                  () => () => {
                    eU();
                  },
                  [eU],
                ),
                (0, o.useEffect)(() => {
                  eE.current &&
                    eE.current.scrollTo({ top: 0, behavior: "smooth" });
                }, [L]));
              let eZ = async (e) => {
                  var t, r, a, l;
                  let o = await u.k1({ displayName: e.displayName });
                  if (o.error)
                    throw (
                      H("displayName", { message: o.error.errorMessage }),
                      Error("Display name update failed")
                    );
                  let n = await u.bp({
                    playFabId:
                      null !=
                      (l =
                        null !=
                        (a =
                          null == ei || null == (t = ei.accountInfo)
                            ? void 0
                            : t.playFabId)
                          ? a
                          : null == ee || null == (r = ee.accountInfo)
                            ? void 0
                            : r.playFabId)
                        ? l
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
                  if (n.error)
                    throw (
                      H("root", { message: n.error.errorMessage || k.UNKNOWN }),
                      Error("Publisher data update failed")
                    );
                  let i = eG();
                  if (i) {
                    let e = await u.oB({ email: i });
                    if (e.error)
                      throw (
                        H("root", {
                          message:
                            e.error.errorMessage ||
                            "We couldn't save your newsletter email. Please try again.",
                        }),
                        Error("Newsletter email update failed")
                      );
                    eb.current = !0;
                  }
                },
                eX = async (e) => {
                  var t, r, a, l, o, n, i, s, c, d, m, g, f, x, v;
                  let p,
                    b = W();
                  if (eR) {
                    let o = await u.k1({ displayName: b.displayName });
                    if (o.error)
                      throw (
                        H("displayName", { message: o.error.errorMessage }),
                        Error("Display name update failed")
                      );
                    if ((await eZ(b), e))
                      try {
                        await u.nU({ itemId: e });
                      } catch (e) {
                        console.error("Failed to set avatar:", e);
                      }
                    await er();
                    let [n, i] = await Promise.all([u.Gf(), u.rh()]),
                      s = n.data
                        ? {
                            ...n.data,
                            publisherData:
                              (null == (t = i.error)
                                ? void 0
                                : t.errorMessage) ===
                              "Session ticket has expired or is invalid"
                                ? void 0
                                : null !=
                                    (l =
                                      null == (r = i.data)
                                        ? void 0
                                        : r.publisherData)
                                  ? l
                                  : void 0,
                          }
                        : null;
                    (es(s || null),
                      (0, h.sendGTMEvent)({
                        event: "registration_form_conversion",
                        value:
                          null == s || null == (a = s.accountInfo)
                            ? void 0
                            : a.playFabId,
                      }));
                    return;
                  }
                  let y = null,
                    w = !1;
                  if ("email" === b.registrationMethod) {
                    let e = N(
                      b,
                      "registrationMethod",
                      "facebookAccessToken",
                      "googleServerAuthCode",
                    );
                    w = !(p = (y = await u.kz(e)).error);
                  } else if ("facebook" === b.registrationMethod) {
                    let { facebookAccessToken: e } = b;
                    if (!e)
                      throw (
                        H("root", {
                          message:
                            "Please connect your Facebook account before continuing registration.",
                        }),
                        Error("Missing Facebook token")
                      );
                    let t = N(
                      b,
                      "registrationMethod",
                      "facebookAccessToken",
                      "password",
                      "googleServerAuthCode",
                    );
                    w = !(p = (y = await u.me({ ...t, AccessToken: e })).error);
                  } else {
                    let { googleServerAuthCode: e } = b;
                    if (!e && !ev)
                      throw (
                        H("root", {
                          message:
                            "Please connect your Google account before continuing registration.",
                        }),
                        Error("Missing Google token")
                      );
                    if (ev)
                      (await eZ(b),
                        (y = null),
                        (w = !0),
                        W("googleServerAuthCode") ||
                          U("googleServerAuthCode", "__PROVISIONED__", {
                            shouldValidate: !0,
                          }));
                    else {
                      let t = N(
                        b,
                        "registrationMethod",
                        "googleServerAuthCode",
                        "password",
                        "facebookAccessToken",
                      );
                      if (
                        (null ==
                          (y = await u.mp({ ...t, ServerAuthCode: e })) ||
                        null == (o = y.data)
                          ? void 0
                          : o.newlyCreated) === !1
                      )
                        throw (
                          H("root", { message: A }),
                          Error("Account already exists for that Google login")
                        );
                      w = !(p = null == y ? void 0 : y.error);
                    }
                  }
                  if (w) {
                    if (
                      ("google" === b.registrationMethod &&
                        (ev || ep(!0),
                        W("googleServerAuthCode") ||
                          U("googleServerAuthCode", "__PROVISIONED__", {
                            shouldValidate: !0,
                          })),
                      e)
                    )
                      try {
                        await u.nU({ itemId: e });
                      } catch (e) {
                        console.error("Failed to set avatar:", e);
                      }
                    let [t, r] = await Promise.all([u.Gf(), u.rh()]),
                      a = t.data
                        ? {
                            ...t.data,
                            publisherData:
                              null == (n = r.data) ? void 0 : n.publisherData,
                          }
                        : null;
                    if ("email" === K) {
                      let e =
                        null == a ||
                        null == (c = a.accountInfo) ||
                        null == (s = c.email)
                          ? void 0
                          : s.trim();
                      e && (await u.oB({ email: e }), (eb.current = !0));
                    }
                    (es(a || null),
                      (0, h.sendGTMEvent)({
                        event: "registration_form_conversion",
                        value:
                          null == a || null == (i = a.accountInfo)
                            ? void 0
                            : i.playFabId,
                      }));
                  } else {
                    let e =
                        null !=
                        (g =
                          null == p || null == (d = p.errorMessage)
                            ? void 0
                            : d.toLowerCase())
                          ? g
                          : "",
                      t = null == p ? void 0 : p.error,
                      r =
                        "google" === b.registrationMethod &&
                        (e.includes("invalid_grant") ||
                          e.includes("invalid token") ||
                          e.includes("expired") ||
                          "InvalidOAuthToken" === t ||
                          "InvalidOAuthProvider" === t);
                    switch (null == p ? void 0 : p.error) {
                      case "EmailAddressNotAvailable":
                        H("email", { message: p.errorMessage });
                        break;
                      case "NameNotAvailable":
                        H("displayName", {
                          message: k.DISPLAY_NAME_UNAVAILABLE,
                        });
                        break;
                      case "ProfaneDisplayName":
                        H("displayName", { message: k.PROFANE_DISPLAY_NAME });
                        break;
                      case "InvalidOAuthToken":
                      case "InvalidOAuthProvider":
                        (null == p || null == (f = p.errorMessage)
                          ? void 0
                          : f.toLowerCase().includes("already")) ||
                        (null == p || null == (x = p.errorMessage)
                          ? void 0
                          : x.toLowerCase().includes("exists"))
                          ? H("root", { message: A })
                          : (H("root", {
                              message:
                                (null == p ? void 0 : p.errorMessage) ||
                                "Google account connection failed. Please try connecting again.",
                            }),
                            U("googleServerAuthCode", "", {
                              shouldValidate: !0,
                            }),
                            ep(!1));
                        break;
                      default:
                        ("google" === b.registrationMethod &&
                          e.includes("invalid_grant")) ||
                          H("root", {
                            message:
                              null != (v = null == p ? void 0 : p.errorMessage)
                                ? v
                                : k.UNKNOWN,
                          });
                    }
                    (r &&
                      (U("googleServerAuthCode", "", { shouldValidate: !0 }),
                      H("googleServerAuthCode", {
                        type: "manual",
                        message:
                          'Your Google connection has expired or become invalid. Please click "Continue with Google" above to reconnect your account.',
                      }),
                      H("root", {
                        message:
                          'Your Google connection has expired or become invalid. Please click "Continue with Google" above to reconnect.',
                      }),
                      ep(!1)),
                      (null == (m = Y.root) ? void 0 : m.message) ||
                        r ||
                        H("root", { message: k.FORM_VALIDATION }));
                    let a = new Set([
                      "EmailAddressNotAvailable",
                      "NameNotAvailable",
                      "ProfaneDisplayName",
                    ]);
                    throw (
                      "google" === b.registrationMethod &&
                        p &&
                        a.has(p.error) &&
                        (ep(!0),
                        W("googleServerAuthCode") ||
                          U("googleServerAuthCode", "__PROVISIONED__", {
                            shouldValidate: !0,
                          })),
                      Error("Registration failed")
                    );
                  }
                },
                e$ = async () => {
                  let e = W();
                  try {
                    if (!eo) {
                      let e = eB();
                      e && (await u.oB({ email: e }), (eb.current = !0));
                    }
                    (await u.q7({
                      isUserOnMailingList: e.agreeToReceiveExtraEmails,
                    }),
                      $(e.agreeToReceiveExtraEmails));
                  } catch (e) {
                    console.error("Error updating newsletter preferences:", e);
                  }
                },
                e0 = async () => {
                  (await eU(), e1());
                },
                e1 = () => {
                  G((e) => {
                    let t = C[e];
                    return (eR && 2 === eD && eF !== t && 2 === e && eO(t), t);
                  });
                },
                e2 = async () => {
                  if (
                    (U("registrationMethod", "email"),
                    U("facebookAccessToken", "", { shouldValidate: !0 }),
                    U("googleServerAuthCode", "", { shouldValidate: !0 }),
                    ep(!1),
                    !(await z(["email", "password"])))
                  )
                    return;
                  el(!0);
                  let e = W("email"),
                    t = await u.Nq({ email: e });
                  if ((el(!1), t.error)) {
                    (console.error(
                      "Error checking email availability:",
                      t.error,
                    ),
                      H("email", {
                        type: "manual",
                        message:
                          "An error occurred while checking email availability. Please try again later.",
                      }));
                    return;
                  }
                  if (t.data.emailExists)
                    return void H("email", {
                      type: "manual",
                      message:
                        "This email is already registered. Please sign in instead or use a different email.",
                    });
                  ((0, h.sendGTMEvent)({ event: "registration_email_start" }),
                    e1());
                },
                e5 = (0, o.useCallback)(() => {
                  if (
                    (eW(!1),
                    U("registrationMethod", "google"),
                    U("facebookAccessToken", "", { shouldValidate: !0 }),
                    ep(!1),
                    !ew)
                  )
                    return void H("root", {
                      message:
                        "Google login is unavailable. Please try again later or continue with email.",
                    });
                  let e = eN.current;
                  if (!e)
                    return void H("root", {
                      message:
                        "Google login is still initializing. Please try again in a moment.",
                    });
                  ((0, h.sendGTMEvent)({
                    event: "registration_sso_google_start",
                  }),
                    q(),
                    eg(!0),
                    (ek.current = !0),
                    eH());
                  try {
                    (0, w.mU)(e);
                  } catch (e) {
                    (console.error("Google code request failed", e),
                      (ek.current = !1),
                      eY(),
                      eg(!1),
                      H("root", {
                        message: "Google sign-in failed. Please try again.",
                      }));
                  }
                }, [ew, q, eQ, eH, eY, H, eg, eW, U]);
              return (0, l.jsx)(s.A, {
                ref: eE,
                navItems: O,
                children: (0, l.jsxs)("form", {
                  className: "account_form",
                  onSubmit: (e) => e.preventDefault(),
                  autoComplete: "on",
                  children: [
                    1 === L &&
                      !eR &&
                      (0, l.jsx)(m.v, {
                        onNext: e1,
                        onEmailSignUp: e2,
                        onGoogleSignUp: () => {
                          e5();
                        },
                        onFacebookSignUp: () => {
                          if (!ey)
                            return void H("root", {
                              message:
                                "Facebook login is unavailable. Please try again later or continue with email.",
                            });
                          if (!window.FB)
                            return void H("root", {
                              message:
                                "Facebook login is still initializing. Please try again in a moment.",
                            });
                          ((0, h.sendGTMEvent)({
                            event: "registration_sso_facebook_start",
                          }),
                            q(),
                            ed(!0),
                            U("registrationMethod", "facebook"),
                            U("googleServerAuthCode", "", {
                              shouldValidate: !0,
                            }),
                            ep(!1));
                          try {
                            ((eC.current = !0),
                              eq(),
                              window.FB.login(
                                (e) => {
                                  ((eC.current = !1),
                                    ez(),
                                    (async () => {
                                      try {
                                        var t;
                                        let r =
                                          null == (t = e.authResponse)
                                            ? void 0
                                            : t.accessToken;
                                        if (!r) {
                                          (U("facebookAccessToken", "", {
                                            shouldValidate: !0,
                                          }),
                                            H("root", {
                                              message:
                                                "Facebook login was cancelled. Please try again.",
                                            }));
                                          return;
                                        }
                                        (U("registrationMethod", "facebook"),
                                          eW(!1));
                                        let a = await u.zo({ AccessToken: r });
                                        if (a.data) {
                                          (H("root", { message: A }),
                                            U("facebookAccessToken", "", {
                                              shouldValidate: !0,
                                            }));
                                          return;
                                        }
                                        if (
                                          a.error &&
                                          "AccountNotFound" !== a.error.error
                                        ) {
                                          (H("root", {
                                            message:
                                              a.error.errorMessage ||
                                              "Facebook login failed. Please try again.",
                                          }),
                                            U("facebookAccessToken", "", {
                                              shouldValidate: !0,
                                            }));
                                          return;
                                        }
                                        let l = await eK();
                                        if (!(null == l ? void 0 : l.email)) {
                                          (U("facebookAccessToken", "", {
                                            shouldValidate: !0,
                                          }),
                                            H("root", { message: A }));
                                          return;
                                        }
                                        (U("facebookAccessToken", r, {
                                          shouldValidate: !0,
                                        }),
                                          U("email", l.email, {
                                            shouldDirty: !0,
                                            shouldValidate: !0,
                                          }),
                                          U("newsletterContactEmail", l.email, {
                                            shouldDirty: !0,
                                            shouldValidate: !0,
                                          }),
                                          l.name &&
                                            U("displayName", l.name, {
                                              shouldDirty: !0,
                                              shouldValidate: !0,
                                            }),
                                          q(),
                                          1 === L && e1());
                                      } catch (e) {
                                        (console.error(e),
                                          U("facebookAccessToken", "", {
                                            shouldValidate: !0,
                                          }),
                                          H("root", {
                                            message:
                                              "Facebook login failed. Please try again.",
                                          }));
                                      } finally {
                                        ed(!1);
                                      }
                                    })());
                                },
                                { scope: "email", return_scopes: !0 },
                              ));
                          } catch (e) {
                            (console.error(e),
                              (eC.current = !1),
                              ez(),
                              ed(!1),
                              H("root", {
                                message:
                                  "Facebook login failed. Please try again.",
                              }));
                          }
                        },
                        onLogin: () => {
                          R.push("/login");
                        },
                        control: B,
                        errors: Y,
                        emailCheckLoading: ea,
                        isSigningUpWithEmail: eo,
                        setIsSigningUpWithEmail: eW,
                        facebookLoginLoading: ec,
                        facebookSdkReady: eu,
                        googleLoginLoading: em,
                        googleSdkReady: ef,
                        raiderFeatureSlides: V.raiderFeatureSlides
                          .filter((e) => void 0 !== e)
                          .map((e) => e.fields),
                      }),
                    "google" === K &&
                      L >= 2 &&
                      !ev &&
                      !Z &&
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
                              (0, l.jsx)(v.A, {
                                onClick: e5,
                                loading: em,
                                disabled: em || !ef,
                                fullWidth: !0,
                                children: Z
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
                          (0, l.jsx)(c.A, { error: Y.googleServerAuthCode }),
                          !ew &&
                            (0, l.jsx)(c.A, {
                              error: "Google Client ID is not configured.",
                            }),
                        ],
                      }),
                    L >= 2 &&
                      L <= 4 &&
                      (0, l.jsx)(f.j, {
                        currentStep: L,
                        onNext: e1,
                        onBack: () => {
                          let e = eR && eF ? eF : eR ? eD : 1;
                          G((t) => {
                            let r = S[t];
                            return r < e ? e : r;
                          });
                        },
                        control: B,
                        errors: Y,
                        setValue: U,
                        trigger: z,
                        setError: H,
                        watch: J,
                        isSigningUpWithEmail: eo,
                        onRegistrationSuccess: eX,
                        onNewsletterUpdate: e$,
                        onSkip: e0,
                        registrationPage: V,
                      }),
                    5 === L &&
                      (0, l.jsx)(x.F, {
                        onUnlockDashboard: () => {
                          ei && X(ei);
                        },
                        celebrationDescription: V.celebrationDescription,
                        celebrationImage: V.celebrationImage,
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
    66767: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => o });
      var a = r(2183),
        l = r(36439);
      function o(e) {
        let {
            onUnlock: t,
            overlayText: r,
            label: o = "Open Vault Door",
            id: n = "unlockSwitch",
          } = e,
          [i, s] = (0, l.useState)(0);
        return (
          (0, l.useEffect)(() => {
            i > 90 && (t(), s(0));
          }, [i, t]),
          (0, a.jsxs)("div", {
            className:
              "unlock-switch relative z-50 mx-auto w-64 cursor-pointer rounded-full border border-white/60 bg-black/90 p-2",
            children: [
              (0, a.jsx)("label", {
                htmlFor: n,
                className: "sr-only",
                "aria-label": o,
                children: o,
              }),
              (0, a.jsx)("input", {
                className:
                  "relative block h-12 w-full cursor-pointer appearance-none rounded-full bg-transparent",
                type: "range",
                value: i,
                max: 100,
                id: n,
                name: n,
                onChange: (e) => s(Number(e.target.value)),
              }),
              (0, a.jsx)("span", {
                className:
                  "pointer-events-none absolute left-16 top-1/2 w-[calc(100%-4.5rem)] -translate-y-1/2 text-center",
                children: r,
              }),
            ],
          })
        );
      }
    },
    69206: (e, t, r) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/registration",
        function () {
          return r(7005);
        },
      ]);
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
        n = a.useRef,
        i = a.useEffect,
        s = a.useMemo,
        c = a.useDebugValue;
      t.useSyncExternalStoreWithSelector = function (e, t, r, a, d) {
        var u = n(null);
        if (null === u.current) {
          var h = { hasValue: !1, value: null };
          u.current = h;
        } else h = u.current;
        var m = o(
          e,
          (u = s(
            function () {
              function e(e) {
                if (!i) {
                  if (
                    ((i = !0), (o = e), (e = a(e)), void 0 !== d && h.hasValue)
                  ) {
                    var t = h.value;
                    if (d(t, e)) return (n = t);
                  }
                  return (n = e);
                }
                if (((t = n), l(o, e))) return t;
                var r = a(e);
                return void 0 !== d && d(t, r)
                  ? ((o = e), t)
                  : ((o = e), (n = r));
              }
              var o,
                n,
                i = !1,
                s = void 0 === r ? null : r;
              return [
                function () {
                  return e(t());
                },
                null === s
                  ? void 0
                  : function () {
                      return e(s());
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
              ((h.hasValue = !0), (h.value = m));
            },
            [m],
          ),
          c(m),
          m
        );
      };
    },
  },
  (e) => {
    (e.O(
      0,
      [
        9950, 1446, 6006, 1433, 1329, 3492, 3357, 7531, 5216, 6906, 636, 6593,
        8792,
      ],
      () => e((e.s = 69206)),
    ),
      (_N_E = e.O()));
  },
]);
