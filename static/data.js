(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [851],
  {
    12317: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => r });
      var a = s(2183),
        i = s(46728),
        l = s.n(i);
      let r = ({ href: e, children: t, className: s, ...i }) =>
        "string" == typeof e && e.startsWith("http")
          ? (0, a.jsx)("a", {
              href: e,
              target: "_blank",
              rel: "noopener noreferrer",
              className: s,
              ...i,
              children: t,
            })
          : (0, a.jsx)(l(), { className: s, href: e, ...i, children: t });
    },
    20162: (e, t, s) => {
      "use strict";
      s.a(e, async (e, a) => {
        try {
          s.d(t, { A: () => u });
          var i = s(2183),
            l = s(15013),
            r = s.n(l),
            n = s(46728),
            c = s.n(n),
            o = s(9751),
            d = s(12317),
            h = s(61065),
            x = s(92642),
            m = s(95783),
            g = e([o, x, m]);
          function u({
            websiteSingleton: e,
            navItems: t,
            footerSocialLinks: s,
          }) {
            let { isLoggedIn: a, shopifyUrl: l } = (0, o.u)(),
              n = t.filter(
                (e) => e.showInFooter && !(a && e.hideForLoggedInUsers),
              ),
              g = t.filter(
                (e) => e.showInSubFooter && !(a && e.hideForLoggedInUsers),
              );
            return (0, i.jsxs)("footer", {
              className: "relative w-full bg-black px-8 text-white lg:px-32",
              children: [
                (0, i.jsx)(h.A, { data: (0, m._8)(e, s) }),
                (0, i.jsx)(h.A, { data: (0, m.OU)() }),
                (0, i.jsxs)("div", {
                  className:
                    "flex flex-col items-center justify-center space-y-16 pt-16 pb-16 lg:flex-row lg:items-stretch lg:justify-between lg:space-y-0 lg:pt-32",
                  children: [
                    (0, i.jsx)("div", {
                      children: (0, i.jsx)(r(), {
                        src: (0, x._c)(e.footerLogo?.fields.file?.url),
                        width: 248,
                        height: 248,
                        alt: (0, x._c)(e.footerLogo?.fields.description),
                        className: "w-40",
                      }),
                    }),
                    (0, i.jsxs)("nav", {
                      "aria-label": "Footer",
                      className:
                        "text-darkgray-500 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-lg",
                      children: [
                        n.map((e) => {
                          let t = e.link;
                          return (
                            e.shouldReplaceWithGeneratedShopLink &&
                              l &&
                              (t = l),
                            (0, i.jsx)(
                              c(),
                              { href: t, children: e.name },
                              e.link + e.name,
                            )
                          );
                        }),
                        (0, i.jsx)("span", {
                          id: "accessibilityWidget",
                          className: "cursor-pointer",
                          children: "Accessibility",
                        }),
                        (0, i.jsx)("a", {
                          href: "#",
                          className: "cursor-pointer",
                          onClick: (e) => {
                            (e.preventDefault(),
                              window.__ucCmp?.showSecondLayer());
                          },
                          children:
                            "Do Not Sell or Share My Personal Information",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className:
                    "flex flex-col items-center justify-center space-y-16 pb-16 lg:flex-row lg:items-stretch lg:justify-between lg:space-y-0",
                  children: [
                    (0, i.jsx)("div", {
                      className: "text-darkgray-500 text-center",
                      children: e.footerCopyright,
                    }),
                    (0, i.jsx)("div", {
                      className: "flex items-center space-x-4 text-white",
                      children: s.map((e) =>
                        (0, i.jsx)(
                          d.A,
                          {
                            href: e.link,
                            children: (0, i.jsx)(r(), {
                              src: (0, x._c)(e.icon?.fields.file?.url),
                              alt: e.icon?.fields.description ?? "",
                              width: 20,
                              height: 20,
                            }),
                          },
                          e.link,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, i.jsx)("div", { className: "h-px bg-gray-500" }),
                (0, i.jsxs)("div", {
                  className:
                    "flew-col flex flex-col items-start justify-start gap-x-10 gap-y-10 py-12 text-gray-300 md:justify-between 2xl:flex-row",
                  children: [
                    (0, i.jsx)("p", {
                      className:
                        "text-darkgray-300 max-w-250 text-center text-sm lg:text-left",
                      children: e.footerLegalNotice,
                    }),
                    (0, i.jsx)("nav", {
                      "aria-label": "Legal",
                      className:
                        "text-darkgray-500 flex w-full flex-wrap items-center justify-center gap-x-10 gap-y-2 md:flex-row md:gap-x-10 md:gap-y-0 lg:w-auto lg:justify-start",
                      children: g.map((e) =>
                        (0, i.jsx)(
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
          (([o, x, m] = g.then ? (await g)() : g), a());
        } catch (e) {
          a(e);
        }
      });
    },
    33642: (e, t, s) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/data-deletion",
        function () {
          return s(76678);
        },
      ]);
    },
    61065: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => r });
      var a = s(2183),
        i = s(46402),
        l = s.n(i);
      function r({ data: e }) {
        return (0, a.jsx)(l(), {
          children: (0, a.jsx)("script", {
            type: "application/ld+json",
            dangerouslySetInnerHTML: { __html: JSON.stringify(e) },
          }),
        });
      }
    },
    76678: (e, t, s) => {
      "use strict";
      s.a(e, async (e, a) => {
        try {
          (s.r(t), s.d(t, { __N_SSG: () => d, default: () => h }));
          var i = s(2183),
            l = s(20162),
            r = s(49980),
            n = s(46728),
            c = s.n(n),
            o = e([l, r]);
          [l, r] = o.then ? (await o)() : o;
          var d = !0;
          function h({
            websiteSingleton: e,
            navItems: t,
            footerSocialLinks: s,
            surveys: a,
            signUpBanner: n,
          }) {
            return (0, i.jsxs)("main", {
              className: "flex min-h-screen flex-col bg-white text-black",
              children: [
                (0, i.jsx)(r.Ay, { navItems: t, surveys: a, signUpBanner: n }),
                (0, i.jsxs)("div", {
                  className:
                    "mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-6 py-16 lg:px-12",
                  children: [
                    (0, i.jsx)("header", {
                      className: "space-y-4",
                      children: (0, i.jsx)("h1", {
                        className: "text-4xl font-bold",
                        children: "Facebook Data Deletion",
                      }),
                    }),
                    (0, i.jsxs)("section", {
                      className: "space-y-3",
                      children: [
                        (0, i.jsx)("h2", {
                          className: "text-2xl font-semibold",
                          children:
                            "Data we collect when you sign in with Facebook",
                        }),
                        (0, i.jsxs)("p", {
                          className: "text-lg text-darkgray-700",
                          children: [
                            "Our",
                            " ",
                            (0, i.jsx)(c(), {
                              className: "font-semibold underline",
                              href: "https://www.crystaldynamics.com/legal/privacy",
                              children: "Privacy Notice",
                            }),
                            " ",
                            "and",
                            " ",
                            (0, i.jsx)(c(), {
                              className: "font-semibold underline",
                              href: "https://www.crystaldynamics.com/legal/cookies",
                              children: "Cookie Notice",
                            }),
                            " ",
                            "describe certain categories of data that we collect from and about you. When you sign in to a Tomb Raider account using Facebook, we also collect:",
                          ],
                        }),
                        (0, i.jsxs)("ul", {
                          className:
                            "list-disc space-y-2 pl-5 text-lg text-darkgray-700",
                          children: [
                            (0, i.jsx)("li", {
                              children: "Your Facebook account ID.",
                            }),
                            (0, i.jsx)("li", {
                              children:
                                "The email address associated with your Facebook account.",
                            }),
                          ],
                        }),
                        (0, i.jsx)("p", {
                          className: "text-lg text-darkgray-700",
                          children:
                            "Note: We do not receive your Facebook friends list, posts, or other Facebook profile content when you sign in with Facebook.",
                        }),
                      ],
                    }),
                    (0, i.jsxs)("section", {
                      className: "space-y-3",
                      children: [
                        (0, i.jsx)("h2", {
                          className: "text-2xl font-semibold",
                          children: "Deleting your account",
                        }),
                        (0, i.jsx)("p", {
                          className: "text-lg text-darkgray-700",
                          children:
                            "You can remove Facebook-linked data by deleting your Tomb Raider account in settings.",
                        }),
                        (0, i.jsxs)("ol", {
                          className:
                            "list-decimal space-y-2 pl-5 text-lg text-darkgray-700",
                          children: [
                            (0, i.jsxs)("li", {
                              children: [
                                "Go to",
                                " ",
                                (0, i.jsx)(c(), {
                                  href: "/account/settings",
                                  className:
                                    "text-blue-600 font-semibold underline",
                                  children: "Account Settings",
                                }),
                                ".",
                              ],
                            }),
                            (0, i.jsx)("li", {
                              children: 'Select "Delete My Account."',
                            }),
                            (0, i.jsx)("li", {
                              children:
                                "Deletion begins immediately and removes your Tomb Raider account, the linked Facebook login ID, and data associated with your Tomb Raider profile.",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)("section", {
                      className: "space-y-3",
                      children: [
                        (0, i.jsx)("h2", {
                          className: "text-2xl font-semibold",
                          children: "What happens next",
                        }),
                        (0, i.jsxs)("ul", {
                          className:
                            "list-disc space-y-2 pl-5 text-lg text-darkgray-700",
                          children: [
                            (0, i.jsx)("li", {
                              children:
                                "We delete your Tomb Raider account and associated player data, which also removes the Facebook login link.",
                            }),
                            (0, i.jsx)("li", {
                              children:
                                "Account deletion removes rewards and progress and cannot be undone.",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsx)(c(), {
                      href: "/account/settings",
                      className:
                        "inline-flex max-w-fit rounded border border-black bg-black px-6 py-3 text-base font-semibold text-white hover:bg-gray-900",
                      children: "Go to Account Settings",
                    }),
                  ],
                }),
                (0, i.jsx)(l.A, {
                  websiteSingleton: e,
                  navItems: t,
                  footerSocialLinks: s,
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
    95783: (e, t, s) => {
      "use strict";
      s.a(e, async (e, a) => {
        try {
          s.d(t, { OU: () => o, Om: () => h, Q0: () => d, _8: () => c });
          var i = s(92642),
            l = s(80935),
            r = e([i]);
          i = (r.then ? (await r)() : r)[0];
          let x = `${l.W}/#organization`,
            m = `${l.W}/#website`,
            g = "Tomb Raider",
            u = "https://en.wikipedia.org/wiki/Tomb_Raider";
          function n(e) {
            let t = (0, i._c)(e.footerLogo?.fields.file?.url);
            return t ? { logo: { "@type": "ImageObject", url: t } } : {};
          }
          function c(e, t) {
            return {
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": x,
              name: g,
              url: l.W,
              ...n(e),
              sameAs: [
                ...t.map((e) => e.link),
                u,
                "https://www.wikidata.org/wiki/Q270503",
              ],
            };
          }
          function o() {
            return {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": m,
              name: g,
              url: l.W,
              publisher: { "@id": x },
            };
          }
          function d(e, t) {
            let s = `${l.W}/news/${e.category?.fields.slug}/${e.slug}`,
              a = (0, i._c)(e.headerImage?.fields.file?.url),
              r = { "@type": "Organization", "@id": x, name: g, ...n(t) };
            return {
              "@context": "https://schema.org",
              "@type": "NewsArticle",
              headline: e.title,
              description: e.excerpt || e.socialMediaShareDescription,
              ...(a ? { image: [a] } : {}),
              datePublished: e.publishDate,
              dateModified: e.sysUpdatedAt ?? e.publishDate,
              url: s,
              mainEntityOfPage: { "@type": "WebPage", "@id": s },
              author: r,
              publisher: r,
            };
          }
          function h(e) {
            let t = `${l.W}/products/${e.category?.fields.slug}/${e.slug}`,
              s = (0, i._c)(
                e.titleLogo?.fields.file?.url ??
                  e.galleryEntries?.[0]?.fields.image?.fields.file?.url,
              );
            return {
              "@context": "https://schema.org",
              "@type": "VideoGame",
              name: e.title,
              url: t,
              ...(e.shortDescription
                ? { description: e.shortDescription }
                : {}),
              ...(s ? { image: s } : {}),
              ...(e.releaseDate ? { datePublished: e.releaseDate } : {}),
              ...(e.publisher
                ? { publisher: { "@type": "Organization", name: e.publisher } }
                : {}),
              ...(e.esrbRating
                ? { contentRating: `ESRB ${e.esrbRating}` }
                : {}),
              isPartOf: {
                "@type": "VideoGameSeries",
                name: "Tomb Raider",
                sameAs: u,
              },
            };
          }
          a();
        } catch (e) {
          a(e);
        }
      });
    },
  },
  (e) => {
    (e.O(0, [9950, 5013, 2696, 1329, 6342, 9980, 2642, 636, 6593, 8792], () =>
      e((e.s = 33642)),
    ),
      (_N_E = e.O()));
  },
]);
