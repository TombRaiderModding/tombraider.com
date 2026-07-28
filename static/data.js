(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [851],
  {
    4243: (e, t, a) => {
      "use strict";
      a.a(e, async (e, l) => {
        try {
          a.d(t, { OU: () => o, Om: () => h, Q0: () => d, _8: () => c });
          var s = a(92446),
            i = a(2371),
            n = e([s]);
          s = (n.then ? (await n)() : n)[0];
          let u = "".concat(i.W, "/#organization"),
            x = "".concat(i.W, "/#website"),
            m = "Tomb Raider",
            g = "https://en.wikipedia.org/wiki/Tomb_Raider";
          function r(e) {
            var t, a;
            let l = (0, s._c)(
              null == (a = e.footerLogo) || null == (t = a.fields.file)
                ? void 0
                : t.url,
            );
            return l ? { logo: { "@type": "ImageObject", url: l } } : {};
          }
          function c(e, t) {
            return {
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": u,
              name: m,
              url: i.W,
              ...r(e),
              sameAs: [
                ...t.map((e) => e.link),
                g,
                "https://www.wikidata.org/wiki/Q270503",
              ],
            };
          }
          function o() {
            return {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": x,
              name: m,
              url: i.W,
              publisher: { "@id": u },
            };
          }
          function d(e, t) {
            var a, l, n, c;
            let o = ""
                .concat(i.W, "/news/")
                .concat(null == (a = e.category) ? void 0 : a.fields.slug, "/")
                .concat(e.slug),
              d = (0, s._c)(
                null == (n = e.headerImage) || null == (l = n.fields.file)
                  ? void 0
                  : l.url,
              ),
              h = { "@type": "Organization", "@id": u, name: m, ...r(t) };
            return {
              "@context": "https://schema.org",
              "@type": "NewsArticle",
              headline: e.title,
              description: e.excerpt || e.socialMediaShareDescription,
              ...(d ? { image: [d] } : {}),
              datePublished: e.publishDate,
              dateModified: null != (c = e.sysUpdatedAt) ? c : e.publishDate,
              url: o,
              mainEntityOfPage: { "@type": "WebPage", "@id": o },
              author: h,
              publisher: h,
            };
          }
          function h(e) {
            var t, a, l, n, r, c, o, d;
            let h = ""
                .concat(i.W, "/products/")
                .concat(null == (t = e.category) ? void 0 : t.fields.slug, "/")
                .concat(e.slug),
              u = (0, s._c)(
                null !=
                  (d =
                    null == (l = e.titleLogo) || null == (a = l.fields.file)
                      ? void 0
                      : a.url)
                  ? d
                  : null == (o = e.galleryEntries) ||
                      null == (c = o[0]) ||
                      null == (r = c.fields.image) ||
                      null == (n = r.fields.file)
                    ? void 0
                    : n.url,
              );
            return {
              "@context": "https://schema.org",
              "@type": "VideoGame",
              name: e.title,
              url: h,
              ...(e.shortDescription
                ? { description: e.shortDescription }
                : {}),
              ...(u ? { image: u } : {}),
              ...(e.releaseDate ? { datePublished: e.releaseDate } : {}),
              ...(e.publisher
                ? { publisher: { "@type": "Organization", name: e.publisher } }
                : {}),
              ...(e.esrbRating
                ? { contentRating: "ESRB ".concat(e.esrbRating) }
                : {}),
              isPartOf: {
                "@type": "VideoGameSeries",
                name: "Tomb Raider",
                sameAs: g,
              },
            };
          }
          l();
        } catch (e) {
          l(e);
        }
      });
    },
    7345: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => n });
      var l = a(2183),
        s = a(11677),
        i = a.n(s);
      let n = (e) => {
        let { href: t, children: a, className: s, ...n } = e;
        return "string" == typeof t && t.startsWith("http")
          ? (0, l.jsx)("a", {
              href: t,
              target: "_blank",
              rel: "noopener noreferrer",
              className: s,
              ...n,
              children: a,
            })
          : (0, l.jsx)(i(), { className: s, href: t, ...n, children: a });
      };
    },
    29418: (e, t, a) => {
      "use strict";
      a.a(e, async (e, l) => {
        try {
          (a.r(t), a.d(t, { __N_SSG: () => d, default: () => h }));
          var s = a(2183),
            i = a(75894),
            n = a(95216),
            r = a(11677),
            c = a.n(r),
            o = e([i, n]);
          [i, n] = o.then ? (await o)() : o;
          var d = !0;
          function h(e) {
            let {
              websiteSingleton: t,
              navItems: a,
              footerSocialLinks: l,
              surveys: r,
              signUpBanner: o,
            } = e;
            return (0, s.jsxs)("main", {
              className: "flex min-h-screen flex-col bg-white text-black",
              children: [
                (0, s.jsx)(n.Ay, { navItems: a, surveys: r, signUpBanner: o }),
                (0, s.jsxs)("div", {
                  className:
                    "mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-6 py-16 lg:px-12",
                  children: [
                    (0, s.jsx)("header", {
                      className: "space-y-4",
                      children: (0, s.jsx)("h1", {
                        className: "text-4xl font-bold",
                        children: "Facebook Data Deletion",
                      }),
                    }),
                    (0, s.jsxs)("section", {
                      className: "space-y-3",
                      children: [
                        (0, s.jsx)("h2", {
                          className: "text-2xl font-semibold",
                          children:
                            "Data we collect when you sign in with Facebook",
                        }),
                        (0, s.jsxs)("p", {
                          className: "text-lg text-darkgray-700",
                          children: [
                            "Our",
                            " ",
                            (0, s.jsx)(c(), {
                              className: "font-semibold underline",
                              href: "https://www.crystaldynamics.com/legal/privacy",
                              children: "Privacy Notice",
                            }),
                            " ",
                            "and",
                            " ",
                            (0, s.jsx)(c(), {
                              className: "font-semibold underline",
                              href: "https://www.crystaldynamics.com/legal/cookies",
                              children: "Cookie Notice",
                            }),
                            " ",
                            "describe certain categories of data that we collect from and about you. When you sign in to a Tomb Raider account using Facebook, we also collect:",
                          ],
                        }),
                        (0, s.jsxs)("ul", {
                          className:
                            "list-disc space-y-2 pl-5 text-lg text-darkgray-700",
                          children: [
                            (0, s.jsx)("li", {
                              children: "Your Facebook account ID.",
                            }),
                            (0, s.jsx)("li", {
                              children:
                                "The email address associated with your Facebook account.",
                            }),
                          ],
                        }),
                        (0, s.jsx)("p", {
                          className: "text-lg text-darkgray-700",
                          children:
                            "Note: We do not receive your Facebook friends list, posts, or other Facebook profile content when you sign in with Facebook.",
                        }),
                      ],
                    }),
                    (0, s.jsxs)("section", {
                      className: "space-y-3",
                      children: [
                        (0, s.jsx)("h2", {
                          className: "text-2xl font-semibold",
                          children: "Deleting your account",
                        }),
                        (0, s.jsx)("p", {
                          className: "text-lg text-darkgray-700",
                          children:
                            "You can remove Facebook-linked data by deleting your Tomb Raider account in settings.",
                        }),
                        (0, s.jsxs)("ol", {
                          className:
                            "list-decimal space-y-2 pl-5 text-lg text-darkgray-700",
                          children: [
                            (0, s.jsxs)("li", {
                              children: [
                                "Go to",
                                " ",
                                (0, s.jsx)(c(), {
                                  href: "/account/settings",
                                  className:
                                    "text-blue-600 font-semibold underline",
                                  children: "Account Settings",
                                }),
                                ".",
                              ],
                            }),
                            (0, s.jsx)("li", {
                              children: 'Select "Delete My Account."',
                            }),
                            (0, s.jsx)("li", {
                              children:
                                "Deletion begins immediately and removes your Tomb Raider account, the linked Facebook login ID, and data associated with your Tomb Raider profile.",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)("section", {
                      className: "space-y-3",
                      children: [
                        (0, s.jsx)("h2", {
                          className: "text-2xl font-semibold",
                          children: "What happens next",
                        }),
                        (0, s.jsxs)("ul", {
                          className:
                            "list-disc space-y-2 pl-5 text-lg text-darkgray-700",
                          children: [
                            (0, s.jsx)("li", {
                              children:
                                "We delete your Tomb Raider account and associated player data, which also removes the Facebook login link.",
                            }),
                            (0, s.jsx)("li", {
                              children:
                                "Account deletion removes rewards and progress and cannot be undone.",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsx)(c(), {
                      href: "/account/settings",
                      className:
                        "inline-flex max-w-fit rounded border border-black bg-black px-6 py-3 text-base font-semibold text-white hover:bg-gray-900",
                      children: "Go to Account Settings",
                    }),
                  ],
                }),
                (0, s.jsx)(i.A, {
                  websiteSingleton: t,
                  navItems: a,
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
    54071: (e, t, a) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/data-deletion",
        function () {
          return a(29418);
        },
      ]);
    },
    71429: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => n });
      var l = a(2183),
        s = a(14623),
        i = a.n(s);
      function n(e) {
        let { data: t } = e;
        return (0, l.jsx)(i(), {
          children: (0, l.jsx)("script", {
            type: "application/ld+json",
            dangerouslySetInnerHTML: { __html: JSON.stringify(t) },
          }),
        });
      }
    },
    75894: (e, t, a) => {
      "use strict";
      a.a(e, async (e, l) => {
        try {
          a.d(t, { A: () => g });
          var s = a(2183),
            i = a(96006),
            n = a.n(i),
            r = a(11677),
            c = a.n(r),
            o = a(99435),
            d = a(7345),
            h = a(71429),
            u = a(92446),
            x = a(4243),
            m = e([o, u, x]);
          function g(e) {
            var t, a, l;
            let { websiteSingleton: i, navItems: r, footerSocialLinks: m } = e,
              { isLoggedIn: g, shopifyUrl: p } = (0, o.u)(),
              f = r.filter(
                (e) => e.showInFooter && !(g && e.hideForLoggedInUsers),
              ),
              y = r.filter(
                (e) => e.showInSubFooter && !(g && e.hideForLoggedInUsers),
              );
            return (0, s.jsxs)("footer", {
              className: "relative w-full bg-black px-8 text-white lg:px-32",
              children: [
                (0, s.jsx)(h.A, { data: (0, x._8)(i, m) }),
                (0, s.jsx)(h.A, { data: (0, x.OU)() }),
                (0, s.jsxs)("div", {
                  className:
                    "flex flex-col items-center justify-center space-y-16 pt-16 pb-16 lg:flex-row lg:items-stretch lg:justify-between lg:space-y-0 lg:pt-32",
                  children: [
                    (0, s.jsx)("div", {
                      children: (0, s.jsx)(n(), {
                        src: (0, u._c)(
                          null == (a = i.footerLogo) ||
                            null == (t = a.fields.file)
                            ? void 0
                            : t.url,
                        ),
                        width: 248,
                        height: 248,
                        alt: (0, u._c)(
                          null == (l = i.footerLogo)
                            ? void 0
                            : l.fields.description,
                        ),
                        className: "w-40",
                      }),
                    }),
                    (0, s.jsxs)("nav", {
                      "aria-label": "Footer",
                      className:
                        "text-darkgray-500 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-lg",
                      children: [
                        f.map((e) => {
                          let t = e.link;
                          return (
                            e.shouldReplaceWithGeneratedShopLink &&
                              p &&
                              (t = p),
                            (0, s.jsx)(
                              c(),
                              { href: t, children: e.name },
                              e.link + e.name,
                            )
                          );
                        }),
                        (0, s.jsx)("span", {
                          id: "accessibilityWidget",
                          className: "cursor-pointer",
                          children: "Accessibility",
                        }),
                        (0, s.jsx)("a", {
                          href: "#",
                          className: "cursor-pointer",
                          onClick: (e) => {
                            var t;
                            (e.preventDefault(),
                              null == (t = window.__ucCmp) ||
                                t.showSecondLayer());
                          },
                          children:
                            "Do Not Sell or Share My Personal Information",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className:
                    "flex flex-col items-center justify-center space-y-16 pb-16 lg:flex-row lg:items-stretch lg:justify-between lg:space-y-0",
                  children: [
                    (0, s.jsx)("div", {
                      className: "text-darkgray-500 text-center",
                      children: i.footerCopyright,
                    }),
                    (0, s.jsx)("div", {
                      className: "flex items-center space-x-4 text-white",
                      children: m.map((e) => {
                        var t, a, l, i;
                        return (0, s.jsx)(
                          d.A,
                          {
                            href: e.link,
                            children: (0, s.jsx)(n(), {
                              src: (0, u._c)(
                                null == (a = e.icon) ||
                                  null == (t = a.fields.file)
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
                (0, s.jsx)("div", { className: "h-px bg-gray-500" }),
                (0, s.jsxs)("div", {
                  className:
                    "flew-col flex flex-col items-start justify-start gap-x-10 gap-y-10 py-12 text-gray-300 md:justify-between 2xl:flex-row",
                  children: [
                    (0, s.jsx)("p", {
                      className:
                        "text-darkgray-300 max-w-250 text-center text-sm lg:text-left",
                      children: i.footerLegalNotice,
                    }),
                    (0, s.jsx)("nav", {
                      "aria-label": "Legal",
                      className:
                        "text-darkgray-500 flex w-full flex-wrap items-center justify-center gap-x-10 gap-y-2 md:flex-row md:gap-x-10 md:gap-y-0 lg:w-auto lg:justify-start",
                      children: y.map((e) =>
                        (0, s.jsx)(
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
          (([o, u, x] = m.then ? (await m)() : m), l());
        } catch (e) {
          l(e);
        }
      });
    },
  },
  (e) => {
    (e.O(0, [9950, 6006, 1433, 1329, 1089, 5216, 2446, 636, 6593, 8792], () =>
      e((e.s = 54071)),
    ),
      (_N_E = e.O()));
  },
]);
