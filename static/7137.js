"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7137],
  {
    4243: (e, t, l) => {
      l.a(e, async (e, a) => {
        try {
          l.d(t, { OU: () => c, Om: () => u, Q0: () => d, _8: () => o });
          var i = l(92446),
            r = l(2371),
            s = e([i]);
          i = (s.then ? (await s)() : s)[0];
          let p = "".concat(r.W, "/#organization"),
            f = "".concat(r.W, "/#website"),
            h = "Tomb Raider",
            g = "https://en.wikipedia.org/wiki/Tomb_Raider";
          function n(e) {
            var t, l;
            let a = (0, i._c)(
              null == (l = e.footerLogo) || null == (t = l.fields.file)
                ? void 0
                : t.url,
            );
            return a ? { logo: { "@type": "ImageObject", url: a } } : {};
          }
          function o(e, t) {
            return {
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": p,
              name: h,
              url: r.W,
              ...n(e),
              sameAs: [
                ...t.map((e) => e.link),
                g,
                "https://www.wikidata.org/wiki/Q270503",
              ],
            };
          }
          function c() {
            return {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": f,
              name: h,
              url: r.W,
              publisher: { "@id": p },
            };
          }
          function d(e, t) {
            var l, a, s, o;
            let c = ""
                .concat(r.W, "/news/")
                .concat(null == (l = e.category) ? void 0 : l.fields.slug, "/")
                .concat(e.slug),
              d = (0, i._c)(
                null == (s = e.headerImage) || null == (a = s.fields.file)
                  ? void 0
                  : a.url,
              ),
              u = { "@type": "Organization", "@id": p, name: h, ...n(t) };
            return {
              "@context": "https://schema.org",
              "@type": "NewsArticle",
              headline: e.title,
              description: e.excerpt || e.socialMediaShareDescription,
              ...(d ? { image: [d] } : {}),
              datePublished: e.publishDate,
              dateModified: null != (o = e.sysUpdatedAt) ? o : e.publishDate,
              url: c,
              mainEntityOfPage: { "@type": "WebPage", "@id": c },
              author: u,
              publisher: u,
            };
          }
          function u(e) {
            var t, l, a, s, n, o, c, d;
            let u = ""
                .concat(r.W, "/products/")
                .concat(null == (t = e.category) ? void 0 : t.fields.slug, "/")
                .concat(e.slug),
              p = (0, i._c)(
                null !=
                  (d =
                    null == (a = e.titleLogo) || null == (l = a.fields.file)
                      ? void 0
                      : l.url)
                  ? d
                  : null == (c = e.galleryEntries) ||
                      null == (o = c[0]) ||
                      null == (n = o.fields.image) ||
                      null == (s = n.fields.file)
                    ? void 0
                    : s.url,
              );
            return {
              "@context": "https://schema.org",
              "@type": "VideoGame",
              name: e.title,
              url: u,
              ...(e.shortDescription
                ? { description: e.shortDescription }
                : {}),
              ...(p ? { image: p } : {}),
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
          a();
        } catch (e) {
          a(e);
        }
      });
    },
    7345: (e, t, l) => {
      l.d(t, { A: () => s });
      var a = l(2183),
        i = l(11677),
        r = l.n(i);
      let s = (e) => {
        let { href: t, children: l, className: i, ...s } = e;
        return "string" == typeof t && t.startsWith("http")
          ? (0, a.jsx)("a", {
              href: t,
              target: "_blank",
              rel: "noopener noreferrer",
              className: i,
              ...s,
              children: l,
            })
          : (0, a.jsx)(r(), { className: i, href: t, ...s, children: l });
      };
    },
    7674: (e, t, l) => {
      l.d(t, { A: () => u });
      var a = l(2183),
        i = l(96006),
        r = l.n(i);
      function s() {
        return (0, a.jsx)(r(), {
          src: "/images/divider.svg",
          className: "my-12 w-full",
          width: "0",
          height: "0",
          alt: "divider",
          priority: !0,
        });
      }
      var n = l(11677),
        o = l.n(n),
        c = l(18652),
        d = l(608);
      function u(e) {
        let {
            title: t,
            children: l,
            showSignUp: i,
            textAlign: n,
            largerFont: u,
          } = e,
          p = (0, c.useRouter)();
        return (0, a.jsxs)("div", {
          className: "".concat(
            n || "text-center",
            " align-center min-w-0 flex-1 justify-center text-white",
          ),
          children: [
            (0, a.jsx)("h2", {
              className: "".concat(
                u ? "text-5xl leading-[110%] lg:text-7xl" : "text-5xl",
                " font-normal tracking-normal drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]",
              ),
              children: t,
            }),
            (0, a.jsx)("p", {
              className: "".concat(
                u && "text-lg leading-[150%] lg:text-xl",
                " pt-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]",
              ),
              children: l,
            }),
            i
              ? (0, a.jsxs)(o(), {
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
                    (0, a.jsx)("div", {
                      className:
                        "pointer-events-none absolute left-0 top-0 z-10 h-full w-full opacity-0 transition duration-300 canhover:group-hover:opacity-100",
                      children: (0, a.jsx)(r(), {
                        src: "/images/gold-button-texture-1.jpg",
                        fill: !0,
                        className: "object-cover",
                        alt: "Gold sheen",
                        sizes: "256px",
                      }),
                    }),
                    (0, a.jsx)("span", {
                      className: "relative z-20",
                      children: "Sign Up",
                    }),
                  ],
                })
              : (0, a.jsx)(s, {}),
          ],
        });
      }
    },
    13544: (e, t, l) => {
      l.d(t, { A: () => o });
      var a = l(2183),
        i = l(52464),
        r = l(96006),
        s = l.n(r),
        n = l(36439);
      function o(e) {
        let { className: t, children: l, ...r } = e,
          o = (0, n.useRef)(null),
          [c, d] = (0, n.useState)(0);
        return (
          (0, n.useEffect)(() => {
            if (!o.current) return;
            let e = new ResizeObserver(() => {
              var e, t;
              d(
                null != (t = null == (e = o.current) ? void 0 : e.offsetHeight)
                  ? t
                  : 0,
              );
            });
            return (
              e.observe(o.current),
              () => {
                e.disconnect();
              }
            );
          }, [o]),
          (0, a.jsxs)("div", {
            ref: o,
            className: (0, i.cn)("relative w-full pb-24", t),
            ...r,
            children: [
              l,
              (0, a.jsx)("div", {
                className:
                  "absolute left-0 top-0 -z-20 h-full w-full bg-[url('/images/paper-texture_main_tile(tinyfied).jpg')] bg-repeat",
              }),
              (0, a.jsx)("div", {
                style: { height: c },
                className:
                  "pointer-events-none absolute left-0 top-0 w-full overflow-hidden",
                children: (0, a.jsx)(s(), {
                  src: "/images/paper-graphics_TOP_1(tinyfied).webp",
                  alt: "Paper Top Overlay",
                  width: "0",
                  priority: !0,
                  height: "0",
                  className:
                    "absolute left-0 top-0 -z-20 h-auto w-full object-cover",
                  unoptimized: !0,
                }),
              }),
              c > 1600 &&
                (0, a.jsx)(s(), {
                  src: "/images/paper-graphics_BOTTOM_1(tinyfied).webp",
                  alt: "Paper Bottom Overlay",
                  width: "0",
                  priority: !0,
                  height: "0",
                  className:
                    "absolute bottom-0 left-0 -z-20 h-auto w-full object-cover",
                  unoptimized: !0,
                }),
              (0, a.jsx)("div", {
                style: { backgroundSize: "100% auto" },
                className:
                  "absolute left-0 top-0 -z-20 hidden h-full w-[8vw] max-w-[104px] bg-[url('/images/paper-edge_long(tinyfied).webp')] bg-repeat-y md:block",
              }),
              (0, a.jsx)(s(), {
                src: "/images/footer-transition(tinyfied).webp",
                width: "1920",
                height: "305",
                priority: !0,
                className:
                  "pointer-events-none absolute bottom-0 left-0 z-10 w-full translate-y-1/2 object-cover",
                alt: "footer transition",
                unoptimized: !0,
              }),
            ],
          })
        );
      }
    },
    31026: (e, t, l) => {
      l.d(t, { A: () => n });
      var a = l(2183),
        i = l(7674),
        r = l(96006),
        s = l.n(r);
      function n(e) {
        var t, l, r, n;
        let { websiteSingleton: o } = e;
        return (0, a.jsxs)("aside", {
          "aria-label": "Society of Raiders sign-up call to action",
          className:
            "relative flex aspect-video w-screen flex-col justify-center bg-black pb-8 lg:px-24 lg:py-16",
          children: [
            (0, a.jsxs)("div", {
              className:
                "relative top-0 left-0 aspect-video w-full lg:absolute lg:aspect-auto lg:h-full",
              children: [
                (0, a.jsx)(s(), {
                  fill: !0,
                  alt:
                    null !=
                    (n =
                      null == (t = o.footerCtaBackground)
                        ? void 0
                        : t.fields.description)
                      ? n
                      : "",
                  src: "https:".concat(
                    null == (r = o.footerCtaBackground) ||
                      null == (l = r.fields.file)
                      ? void 0
                      : l.url,
                  ),
                }),
                (0, a.jsx)("div", {
                  className: "absolute top-0 left-0 h-full w-full bg-black/15",
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className: "relative z-10 max-w-3xl px-8 py-2",
              children: (0, a.jsx)(i.A, {
                largerFont: !0,
                textAlign: "text-left",
                showSignUp: !0,
                title: o.footerCtaTitle,
                children: o.footerCtaDescription,
              }),
            }),
          ],
        });
      }
    },
    46956: (e, t, l) => {
      l.d(t, { Cp: () => i, Yq: () => a });
      let a = (e) =>
          e
            ? new Date(e).toLocaleString("en-US", {
                timeZone: "UTC",
                month: "short",
                day: "numeric",
                year: "numeric",
              })
            : "",
        i = (e) =>
          e ? new Date(e).toLocaleString("en-US", { year: "numeric" }) : "";
    },
    52464: (e, t, l) => {
      l.d(t, { cn: () => r });
      var a = l(3638),
        i = l(30597);
      function r() {
        for (var e = arguments.length, t = Array(e), l = 0; l < e; l++)
          t[l] = arguments[l];
        return (0, i.QP)((0, a.$)(t));
      }
    },
    71429: (e, t, l) => {
      l.d(t, { A: () => s });
      var a = l(2183),
        i = l(14623),
        r = l.n(i);
      function s(e) {
        let { data: t } = e;
        return (0, a.jsx)(r(), {
          children: (0, a.jsx)("script", {
            type: "application/ld+json",
            dangerouslySetInnerHTML: { __html: JSON.stringify(t) },
          }),
        });
      }
    },
    75894: (e, t, l) => {
      l.a(e, async (e, a) => {
        try {
          l.d(t, { A: () => g });
          var i = l(2183),
            r = l(96006),
            s = l.n(r),
            n = l(11677),
            o = l.n(n),
            c = l(99435),
            d = l(7345),
            u = l(71429),
            p = l(92446),
            f = l(4243),
            h = e([c, p, f]);
          function g(e) {
            var t, l, a;
            let { websiteSingleton: r, navItems: n, footerSocialLinks: h } = e,
              { isLoggedIn: g, shopifyUrl: x } = (0, c.u)(),
              m = n.filter(
                (e) => e.showInFooter && !(g && e.hideForLoggedInUsers),
              ),
              y = n.filter(
                (e) => e.showInSubFooter && !(g && e.hideForLoggedInUsers),
              );
            return (0, i.jsxs)("footer", {
              className: "relative w-full bg-black px-8 text-white lg:px-32",
              children: [
                (0, i.jsx)(u.A, { data: (0, f._8)(r, h) }),
                (0, i.jsx)(u.A, { data: (0, f.OU)() }),
                (0, i.jsxs)("div", {
                  className:
                    "flex flex-col items-center justify-center space-y-16 pt-16 pb-16 lg:flex-row lg:items-stretch lg:justify-between lg:space-y-0 lg:pt-32",
                  children: [
                    (0, i.jsx)("div", {
                      children: (0, i.jsx)(s(), {
                        src: (0, p._c)(
                          null == (l = r.footerLogo) ||
                            null == (t = l.fields.file)
                            ? void 0
                            : t.url,
                        ),
                        width: 248,
                        height: 248,
                        alt: (0, p._c)(
                          null == (a = r.footerLogo)
                            ? void 0
                            : a.fields.description,
                        ),
                        className: "w-40",
                      }),
                    }),
                    (0, i.jsxs)("nav", {
                      "aria-label": "Footer",
                      className:
                        "text-darkgray-500 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-lg",
                      children: [
                        m.map((e) => {
                          let t = e.link;
                          return (
                            e.shouldReplaceWithGeneratedShopLink &&
                              x &&
                              (t = x),
                            (0, i.jsx)(
                              o(),
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
                (0, i.jsxs)("div", {
                  className:
                    "flex flex-col items-center justify-center space-y-16 pb-16 lg:flex-row lg:items-stretch lg:justify-between lg:space-y-0",
                  children: [
                    (0, i.jsx)("div", {
                      className: "text-darkgray-500 text-center",
                      children: r.footerCopyright,
                    }),
                    (0, i.jsx)("div", {
                      className: "flex items-center space-x-4 text-white",
                      children: h.map((e) => {
                        var t, l, a, r;
                        return (0, i.jsx)(
                          d.A,
                          {
                            href: e.link,
                            children: (0, i.jsx)(s(), {
                              src: (0, p._c)(
                                null == (l = e.icon) ||
                                  null == (t = l.fields.file)
                                  ? void 0
                                  : t.url,
                              ),
                              alt:
                                null !=
                                (r =
                                  null == (a = e.icon)
                                    ? void 0
                                    : a.fields.description)
                                  ? r
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
                (0, i.jsx)("div", { className: "h-px bg-gray-500" }),
                (0, i.jsxs)("div", {
                  className:
                    "flew-col flex flex-col items-start justify-start gap-x-10 gap-y-10 py-12 text-gray-300 md:justify-between 2xl:flex-row",
                  children: [
                    (0, i.jsx)("p", {
                      className:
                        "text-darkgray-300 max-w-250 text-center text-sm lg:text-left",
                      children: r.footerLegalNotice,
                    }),
                    (0, i.jsx)("nav", {
                      "aria-label": "Legal",
                      className:
                        "text-darkgray-500 flex w-full flex-wrap items-center justify-center gap-x-10 gap-y-2 md:flex-row md:gap-x-10 md:gap-y-0 lg:w-auto lg:justify-start",
                      children: y.map((e) =>
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
          (([c, p, f] = h.then ? (await h)() : h), a());
        } catch (e) {
          a(e);
        }
      });
    },
  },
]);
