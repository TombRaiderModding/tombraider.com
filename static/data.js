(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [851],
  {
    7345: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => c });
      var l = s(2183),
        a = s(11677),
        i = s.n(a);
      let c = (e) => {
        let { href: t, children: s, className: a, ...c } = e;
        return "string" == typeof t && t.startsWith("http")
          ? (0, l.jsx)("a", {
              href: t,
              target: "_blank",
              rel: "noopener noreferrer",
              className: a,
              ...c,
              children: s,
            })
          : (0, l.jsx)(i(), { className: a, href: t, ...c, children: s });
      };
    },
    29418: (e, t, s) => {
      "use strict";
      s.a(e, async (e, l) => {
        try {
          (s.r(t), s.d(t, { __N_SSG: () => d, default: () => x }));
          var a = s(2183),
            i = s(75894),
            c = s(95216),
            n = s(11677),
            r = s.n(n),
            o = e([i, c]);
          [i, c] = o.then ? (await o)() : o;
          var d = !0;
          function x(e) {
            let {
              websiteSingleton: t,
              navItems: s,
              footerSocialLinks: l,
              surveys: n,
              signUpBanner: o,
            } = e;
            return (0, a.jsxs)("main", {
              className: "flex min-h-screen flex-col bg-white text-black",
              children: [
                (0, a.jsx)(c.Ay, { navItems: s, surveys: n, signUpBanner: o }),
                (0, a.jsxs)("div", {
                  className:
                    "mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-6 py-16 lg:px-12",
                  children: [
                    (0, a.jsx)("header", {
                      className: "space-y-4",
                      children: (0, a.jsx)("h1", {
                        className: "text-4xl font-bold",
                        children: "Facebook Data Deletion",
                      }),
                    }),
                    (0, a.jsxs)("section", {
                      className: "space-y-3",
                      children: [
                        (0, a.jsx)("h2", {
                          className: "text-2xl font-semibold",
                          children:
                            "Data we collect when you sign in with Facebook",
                        }),
                        (0, a.jsxs)("p", {
                          className: "text-lg text-darkgray-700",
                          children: [
                            "Our",
                            " ",
                            (0, a.jsx)(r(), {
                              className: "font-semibold underline",
                              href: "https://www.crystaldynamics.com/legal/privacy",
                              children: "Privacy Notice",
                            }),
                            " ",
                            "and",
                            " ",
                            (0, a.jsx)(r(), {
                              className: "font-semibold underline",
                              href: "https://www.crystaldynamics.com/legal/cookies",
                              children: "Cookie Notice",
                            }),
                            " ",
                            "describe certain categories of data that we collect from and about you. When you sign in to a Tomb Raider account using Facebook, we also collect:",
                          ],
                        }),
                        (0, a.jsxs)("ul", {
                          className:
                            "list-disc space-y-2 pl-5 text-lg text-darkgray-700",
                          children: [
                            (0, a.jsx)("li", {
                              children: "Your Facebook account ID.",
                            }),
                            (0, a.jsx)("li", {
                              children:
                                "The email address associated with your Facebook account.",
                            }),
                          ],
                        }),
                        (0, a.jsx)("p", {
                          className: "text-lg text-darkgray-700",
                          children:
                            "Note: We do not receive your Facebook friends list, posts, or other Facebook profile content when you sign in with Facebook.",
                        }),
                      ],
                    }),
                    (0, a.jsxs)("section", {
                      className: "space-y-3",
                      children: [
                        (0, a.jsx)("h2", {
                          className: "text-2xl font-semibold",
                          children: "Deleting your account",
                        }),
                        (0, a.jsx)("p", {
                          className: "text-lg text-darkgray-700",
                          children:
                            "You can remove Facebook-linked data by deleting your Tomb Raider account in settings.",
                        }),
                        (0, a.jsxs)("ol", {
                          className:
                            "list-decimal space-y-2 pl-5 text-lg text-darkgray-700",
                          children: [
                            (0, a.jsxs)("li", {
                              children: [
                                "Go to",
                                " ",
                                (0, a.jsx)(r(), {
                                  href: "/account/settings",
                                  className:
                                    "text-blue-600 font-semibold underline",
                                  children: "Account Settings",
                                }),
                                ".",
                              ],
                            }),
                            (0, a.jsx)("li", {
                              children: 'Select "Delete My Account."',
                            }),
                            (0, a.jsx)("li", {
                              children:
                                "Deletion begins immediately and removes your Tomb Raider account, the linked Facebook login ID, and data associated with your Tomb Raider profile.",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("section", {
                      className: "space-y-3",
                      children: [
                        (0, a.jsx)("h2", {
                          className: "text-2xl font-semibold",
                          children: "What happens next",
                        }),
                        (0, a.jsxs)("ul", {
                          className:
                            "list-disc space-y-2 pl-5 text-lg text-darkgray-700",
                          children: [
                            (0, a.jsx)("li", {
                              children:
                                "We delete your Tomb Raider account and associated player data, which also removes the Facebook login link.",
                            }),
                            (0, a.jsx)("li", {
                              children:
                                "Account deletion removes rewards and progress and cannot be undone.",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)(r(), {
                      href: "/account/settings",
                      className:
                        "inline-flex max-w-fit rounded border border-black bg-black px-6 py-3 text-base font-semibold text-white hover:bg-gray-900",
                      children: "Go to Account Settings",
                    }),
                  ],
                }),
                (0, a.jsx)(i.A, {
                  websiteSingleton: t,
                  navItems: s,
                  footerSocialLinks: l,
                }),
              ],
            });
          }
          l();
        } catch (e) {
          l(e);
        }
      });
    },
    54071: (e, t, s) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/data-deletion",
        function () {
          return s(29418);
        },
      ]);
    },
    75894: (e, t, s) => {
      "use strict";
      s.a(e, async (e, l) => {
        try {
          s.d(t, { A: () => m });
          var a = s(2183),
            i = s(96006),
            c = s.n(i),
            n = s(11677),
            r = s.n(n),
            o = s(99435),
            d = s(7345),
            x = s(92446),
            h = e([o, x]);
          function m(e) {
            var t, s, l;
            let { websiteSingleton: i, navItems: n, footerSocialLinks: h } = e,
              { isLoggedIn: m, shopifyUrl: u } = (0, o.u)(),
              g = n.filter(
                (e) => e.showInFooter && !(m && e.hideForLoggedInUsers),
              ),
              f = n.filter(
                (e) => e.showInSubFooter && !(m && e.hideForLoggedInUsers),
              );
            return (0, a.jsxs)("div", {
              className: "relative w-full bg-black px-8 text-white lg:px-32",
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "flex flex-col items-center justify-center space-y-16 pb-16 pt-16 lg:flex-row lg:items-stretch lg:justify-between lg:space-y-0 lg:pt-32",
                  children: [
                    (0, a.jsx)("div", {
                      children: (0, a.jsx)(c(), {
                        src: (0, x._c)(
                          null == (s = i.footerLogo) ||
                            null == (t = s.fields.file)
                            ? void 0
                            : t.url,
                        ),
                        width: 248,
                        height: 248,
                        alt: (0, x._c)(
                          null == (l = i.footerLogo)
                            ? void 0
                            : l.fields.description,
                        ),
                        className: "w-40",
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-lg text-darkgray-500 ",
                      children: [
                        g.map((e) => {
                          let t = e.link;
                          return (
                            e.shouldReplaceWithGeneratedShopLink &&
                              u &&
                              (t = u),
                            (0, a.jsx)(
                              r(),
                              { href: t, children: e.name },
                              e.link + e.name,
                            )
                          );
                        }),
                        (0, a.jsx)("span", {
                          id: "accessibilityWidget",
                          className: "cursor-pointer",
                          children: "Accessibility",
                        }),
                        (0, a.jsx)("span", {
                          className: "cursor-pointer",
                          onClick: () => {
                            var e;
                            return null == (e = window.OneTrust)
                              ? void 0
                              : e.ToggleInfoDisplay();
                          },
                          children:
                            "Do Not Sell or Share My Personal Information",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className:
                    "flex flex-col items-center justify-center space-y-16 pb-16 lg:flex-row lg:items-stretch lg:justify-between lg:space-y-0",
                  children: [
                    (0, a.jsx)("div", {
                      className: "text-center text-darkgray-500",
                      children: i.footerCopyright,
                    }),
                    (0, a.jsx)("div", {
                      className: "flex items-center space-x-4 text-white",
                      children: h.map((e) => {
                        var t, s, l, i;
                        return (0, a.jsx)(
                          d.A,
                          {
                            href: e.link,
                            children: (0, a.jsx)(c(), {
                              src: (0, x._c)(
                                null == (s = e.icon) ||
                                  null == (t = s.fields.file)
                                  ? void 0
                                  : t.url,
                              ),
                              alt:
                                null !=
                                (i =
                                  null == (l = e.icon)
                                    ? void 0
                                    : l.fields.description)
                                  ? i
                                  : "",
                              width: 20,
                              height: 20,
                            }),
                          },
                          e.link,
                        );
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)("div", { className: "h-[1px] bg-gray-500" }),
                (0, a.jsxs)("div", {
                  className:
                    "flew-col flex flex-col items-start justify-start gap-x-10 gap-y-10 py-12 text-gray-300 md:justify-between 2xl:flex-row ",
                  children: [
                    (0, a.jsx)("p", {
                      className:
                        "max-w-[1000px] text-center text-sm text-darkgray-300 lg:text-left",
                      children: i.footerLegalNotice,
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "flex w-full flex-wrap items-center justify-center gap-x-10 gap-y-2 text-darkgray-500 md:flex-row md:gap-x-10 md:gap-y-0 lg:w-auto lg:justify-start",
                      children: f.map((e) =>
                        (0, a.jsx)(
                          "a",
                          { href: e.link, children: e.name },
                          e.link + e.name,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            });
          }
          (([o, x] = h.then ? (await h)() : h), l());
        } catch (e) {
          l(e);
        }
      });
    },
  },
  (e) => {
    (e.O(0, [9950, 6006, 1433, 1329, 1175, 5216, 2446, 636, 6593, 8792], () =>
      e((e.s = 54071)),
    ),
      (_N_E = e.O()));
  },
]);
