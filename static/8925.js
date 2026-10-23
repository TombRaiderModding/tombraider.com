"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8925],
  {
    12317: (e, t, a) => {
      a.d(t, { A: () => s });
      var l = a(2183),
        r = a(46728),
        i = a.n(r);
      let s = ({ href: e, children: t, className: a, ...r }) =>
        "string" == typeof e && e.startsWith("http")
          ? (0, l.jsx)("a", {
              href: e,
              target: "_blank",
              rel: "noopener noreferrer",
              className: a,
              ...r,
              children: t,
            })
          : (0, l.jsx)(i(), { className: a, href: e, ...r, children: t });
    },
    20162: (e, t, a) => {
      a.a(e, async (e, l) => {
        try {
          a.d(t, { A: () => f });
          var r = a(2183),
            i = a(15013),
            s = a.n(i),
            o = a(46728),
            n = a.n(o),
            c = a(9751),
            d = a(12317),
            h = a(61065),
            g = a(92642),
            p = a(95783),
            u = e([c, g, p]);
          function f({
            websiteSingleton: e,
            navItems: t,
            footerSocialLinks: a,
          }) {
            let { isLoggedIn: l, shopifyUrl: i } = (0, c.u)(),
              o = t.filter(
                (e) => e.showInFooter && !(l && e.hideForLoggedInUsers),
              ),
              u = t.filter(
                (e) => e.showInSubFooter && !(l && e.hideForLoggedInUsers),
              );
            return (0, r.jsxs)("footer", {
              className: "relative w-full bg-black px-8 text-white lg:px-32",
              children: [
                (0, r.jsx)(h.A, { data: (0, p._8)(e, a) }),
                (0, r.jsx)(h.A, { data: (0, p.OU)() }),
                (0, r.jsxs)("div", {
                  className:
                    "flex flex-col items-center justify-center space-y-16 pt-16 pb-16 lg:flex-row lg:items-stretch lg:justify-between lg:space-y-0 lg:pt-32",
                  children: [
                    (0, r.jsx)("div", {
                      children: (0, r.jsx)(s(), {
                        src: (0, g._c)(e.footerLogo?.fields.file?.url),
                        width: 248,
                        height: 248,
                        alt: (0, g._c)(e.footerLogo?.fields.description),
                        className: "w-40",
                      }),
                    }),
                    (0, r.jsxs)("nav", {
                      "aria-label": "Footer",
                      className:
                        "text-darkgray-500 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-lg",
                      children: [
                        o.map((e) => {
                          let t = e.link;
                          return (
                            e.shouldReplaceWithGeneratedShopLink &&
                              i &&
                              (t = i),
                            (0, r.jsx)(
                              n(),
                              { href: t, children: e.name },
                              e.link + e.name,
                            )
                          );
                        }),
                        (0, r.jsx)("span", {
                          id: "accessibilityWidget",
                          className: "cursor-pointer",
                          children: "Accessibility",
                        }),
                        (0, r.jsx)("a", {
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
                (0, r.jsxs)("div", {
                  className:
                    "flex flex-col items-center justify-center space-y-16 pb-16 lg:flex-row lg:items-stretch lg:justify-between lg:space-y-0",
                  children: [
                    (0, r.jsx)("div", {
                      className: "text-darkgray-500 text-center",
                      children: e.footerCopyright,
                    }),
                    (0, r.jsx)("div", {
                      className: "flex items-center space-x-4 text-white",
                      children: a.map((e) =>
                        (0, r.jsx)(
                          d.A,
                          {
                            href: e.link,
                            children: (0, r.jsx)(s(), {
                              src: (0, g._c)(e.icon?.fields.file?.url),
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
                (0, r.jsx)("div", { className: "h-px bg-gray-500" }),
                (0, r.jsxs)("div", {
                  className:
                    "flew-col flex flex-col items-start justify-start gap-x-10 gap-y-10 py-12 text-gray-300 md:justify-between 2xl:flex-row",
                  children: [
                    (0, r.jsx)("p", {
                      className:
                        "text-darkgray-300 max-w-250 text-center text-sm lg:text-left",
                      children: e.footerLegalNotice,
                    }),
                    (0, r.jsx)("nav", {
                      "aria-label": "Legal",
                      className:
                        "text-darkgray-500 flex w-full flex-wrap items-center justify-center gap-x-10 gap-y-2 md:flex-row md:gap-x-10 md:gap-y-0 lg:w-auto lg:justify-start",
                      children: u.map((e) =>
                        (0, r.jsx)(
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
          (([c, g, p] = u.then ? (await u)() : u), l());
        } catch (e) {
          l(e);
        }
      });
    },
    41036: (e, t, a) => {
      a.d(t, { A: () => n });
      var l = a(2183),
        r = a(61932),
        i = a(15013),
        s = a.n(i),
        o = a(36439);
      function n(e) {
        let { className: t, children: a, ...i } = e,
          n = (0, o.useRef)(null),
          [c, d] = (0, o.useState)(0);
        return (
          (0, o.useEffect)(() => {
            if (!n.current) return;
            let e = new ResizeObserver(() => {
              d(n.current?.offsetHeight ?? 0);
            });
            return (
              e.observe(n.current),
              () => {
                e.disconnect();
              }
            );
          }, [n]),
          (0, l.jsxs)("div", {
            ref: n,
            className: (0, r.cn)("relative w-full pb-24", t),
            ...i,
            children: [
              a,
              (0, l.jsx)("div", {
                className:
                  "absolute left-0 top-0 -z-20 h-full w-full bg-[url('/images/paper-texture_main_tile(tinyfied).jpg')] bg-repeat",
              }),
              (0, l.jsx)("div", {
                style: { height: c },
                className:
                  "pointer-events-none absolute left-0 top-0 w-full overflow-hidden",
                children: (0, l.jsx)(s(), {
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
                (0, l.jsx)(s(), {
                  src: "/images/paper-graphics_BOTTOM_1(tinyfied).webp",
                  alt: "Paper Bottom Overlay",
                  width: "0",
                  priority: !0,
                  height: "0",
                  className:
                    "absolute bottom-0 left-0 -z-20 h-auto w-full object-cover",
                  unoptimized: !0,
                }),
              (0, l.jsx)("div", {
                style: { backgroundSize: "100% auto" },
                className:
                  "absolute left-0 top-0 -z-20 hidden h-full w-[8vw] max-w-[104px] bg-[url('/images/paper-edge_long(tinyfied).webp')] bg-repeat-y md:block",
              }),
              (0, l.jsx)(s(), {
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
    61065: (e, t, a) => {
      a.d(t, { A: () => s });
      var l = a(2183),
        r = a(46402),
        i = a.n(r);
      function s({ data: e }) {
        return (0, l.jsx)(i(), {
          children: (0, l.jsx)("script", {
            type: "application/ld+json",
            dangerouslySetInnerHTML: { __html: JSON.stringify(e) },
          }),
        });
      }
    },
    61932: (e, t, a) => {
      a.d(t, { cn: () => i });
      var l = a(3638),
        r = a(30597);
      function i(...e) {
        return (0, r.QP)((0, l.$)(e));
      }
    },
    68456: (e, t, a) => {
      a.d(t, { Cp: () => r, Yq: () => l });
      let l = (e) =>
          e
            ? new Date(e).toLocaleString("en-US", {
                timeZone: "UTC",
                month: "short",
                day: "numeric",
                year: "numeric",
              })
            : "",
        r = (e) =>
          e ? new Date(e).toLocaleString("en-US", { year: "numeric" }) : "";
    },
    72538: (e, t, a) => {
      a.d(t, { A: () => s });
      var l = a(2183),
        r = a(15013),
        i = a.n(r);
      function s() {
        return (0, l.jsx)("div", {
          className:
            "pointer-events-none absolute bottom-0 left-0 w-full translate-y-1/4",
          children: (0, l.jsx)(i(), {
            width: 1920,
            height: 483,
            className: "w-full object-cover object-top",
            alt: "Hardwood transition",
            src: "/images/hero-transition(tinyfied).webp",
          }),
        });
      }
    },
    80831: (e, t, a) => {
      a.d(t, { A: () => h });
      var l = a(2183),
        r = a(15013),
        i = a.n(r);
      function s() {
        return (0, l.jsx)(i(), {
          src: "/images/divider.svg",
          className: "my-12 w-full",
          width: "0",
          height: "0",
          alt: "divider",
          priority: !0,
        });
      }
      var o = a(46728),
        n = a.n(o),
        c = a(31153),
        d = a(43948);
      function h(e) {
        let {
            title: t,
            children: a,
            showSignUp: r,
            textAlign: o,
            largerFont: h,
          } = e,
          g = (0, c.useRouter)();
        return (0, l.jsxs)("div", {
          className: `${o || "text-center"} align-center min-w-0 flex-1 justify-center text-white`,
          children: [
            (0, l.jsx)("h2", {
              className: `${h ? "text-5xl leading-[110%] lg:text-7xl" : "text-5xl"} font-normal tracking-normal drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]`,
              children: t,
            }),
            (0, l.jsx)("p", {
              className: `${h && "text-lg leading-[150%] lg:text-xl"} pt-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]`,
              children: a,
            }),
            r
              ? (0, l.jsxs)(n(), {
                  className:
                    "account_register_cta border-radius-8 group relative mt-12 inline-flex items-center overflow-hidden rounded-lg border-2 border-yellow-500/50 bg-transparent px-6 py-2 text-base text-white transition duration-300 canhover:hover:text-black",
                  onClick: () => {
                    g.pathname.includes("/news") &&
                      g.query.category &&
                      g.query.article &&
                      (0, d.d4)(window.location.href);
                  },
                  href: "/registration",
                  children: [
                    (0, l.jsx)("div", {
                      className:
                        "pointer-events-none absolute left-0 top-0 z-10 h-full w-full opacity-0 transition duration-300 canhover:group-hover:opacity-100",
                      children: (0, l.jsx)(i(), {
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
    87975: (e, t, a) => {
      a.a(e, async (e, l) => {
        try {
          a.d(t, { A: () => g });
          var r = a(2183),
            i = a(15013),
            s = a.n(i),
            o = a(46728),
            n = a.n(o),
            c = a(68456),
            d = a(92642),
            h = e([d]);
          function g(e) {
            let { item: t, onClick: a = () => {} } = e;
            return (0, r.jsx)(n(), {
              onClick: a,
              href: `/news/${t.category?.fields?.slug}/${t.slug}`,
              children: (0, r.jsxs)("article", {
                className:
                  "group flex h-full grow flex-col bg-white shadow-lg duration-[0.3s] lg:bg-transparent lg:shadow-none lg:hover:bg-white lg:hover:shadow-lg",
                children: [
                  (0, r.jsxs)("figure", {
                    className: "relative w-full overflow-hidden",
                    children: [
                      (0, r.jsx)(s(), {
                        alt: `${t.headerImage?.fields?.description || ""}`,
                        className:
                          "aspect-[3/2] w-full object-cover transition-all duration-500 group-hover:scale-105",
                        src: (0, d._c)(t.headerImage?.fields?.file?.url),
                        width: 500,
                        height: 500,
                      }),
                      (0, r.jsx)(s(), {
                        alt: "blog card image gradient",
                        fill: !0,
                        className:
                          "absolute top-0 left-0 h-full w-full object-cover",
                        src: "/images/blog-card-image-gradient.svg",
                      }),
                      (0, r.jsx)(s(), {
                        alt: "top left bracket",
                        width: 48,
                        height: 48,
                        className:
                          "absolute -top-4 -left-4 duration-200 group-hover:top-2 group-hover:left-2",
                        src: "/images/top-left-bracket.svg",
                      }),
                      (0, r.jsx)(s(), {
                        alt: "bottom right bracket",
                        width: 48,
                        height: 48,
                        className:
                          "absolute -right-4 -bottom-4 duration-200 group-hover:right-2 group-hover:bottom-2",
                        src: "/images/bottom-right-bracket.svg",
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "absolute bottom-0 left-0 bg-teal-500 px-5 pt-2 pb-1.5 text-center text-sm font-bold tracking-widest text-white uppercase",
                        children: t.category?.fields?.name,
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "relative flex min-h-[10rem] grow flex-col justify-between overflow-hidden py-5 pr-12 pl-5 duration-200",
                    children: [
                      (0, r.jsx)("h3", {
                        className: "text-2xl font-bold",
                        children: t.title.toString(),
                      }),
                      (0, r.jsx)("p", {
                        className: "mt-4 font-normal text-gray-500",
                        children: (0, r.jsx)("time", {
                          dateTime: t.publishDate,
                          children: (0, c.Yq)(t.publishDate),
                        }),
                      }),
                      (0, r.jsx)(s(), {
                        alt: "desktop compass",
                        width: 232,
                        height: 232,
                        className:
                          "absolute -right-16 -bottom-24 hidden opacity-0 duration-200 group-hover:-right-12 group-hover:-bottom-20 group-hover:opacity-50 lg:block",
                        src: "/images/compass.webp",
                      }),
                      (0, r.jsx)(s(), {
                        alt: "mobile compass",
                        width: 232,
                        height: 232,
                        className:
                          "absolute -right-12 -bottom-20 opacity-50 lg:hidden",
                        src: "/images/compass.webp",
                      }),
                    ],
                  }),
                ],
              }),
            });
          }
          ((d = (h.then ? (await h)() : h)[0]), l());
        } catch (e) {
          l(e);
        }
      });
    },
    90118: (e, t, a) => {
      a.d(t, { A: () => o });
      var l = a(2183),
        r = a(80831),
        i = a(15013),
        s = a.n(i);
      function o({ websiteSingleton: e }) {
        return (0, l.jsxs)("aside", {
          "aria-label": "Society of Raiders sign-up call to action",
          className:
            "relative flex aspect-video w-screen flex-col justify-center bg-black pb-8 lg:px-24 lg:py-16",
          children: [
            (0, l.jsxs)("div", {
              className:
                "relative top-0 left-0 aspect-video w-full lg:absolute lg:aspect-auto lg:h-full",
              children: [
                (0, l.jsx)(s(), {
                  fill: !0,
                  alt: e.footerCtaBackground?.fields.description ?? "",
                  src: `https:${e.footerCtaBackground?.fields.file?.url}`,
                }),
                (0, l.jsx)("div", {
                  className: "absolute top-0 left-0 h-full w-full bg-black/15",
                }),
              ],
            }),
            (0, l.jsx)("div", {
              className: "relative z-10 max-w-3xl px-8 py-2",
              children: (0, l.jsx)(r.A, {
                largerFont: !0,
                textAlign: "text-left",
                showSignUp: !0,
                title: e.footerCtaTitle,
                children: e.footerCtaDescription,
              }),
            }),
          ],
        });
      }
    },
    95783: (e, t, a) => {
      a.a(e, async (e, l) => {
        try {
          a.d(t, { OU: () => c, Om: () => h, Q0: () => d, _8: () => n });
          var r = a(92642),
            i = a(80935),
            s = e([r]);
          r = (s.then ? (await s)() : s)[0];
          let g = `${i.W}/#organization`,
            p = `${i.W}/#website`,
            u = "Tomb Raider",
            f = "https://en.wikipedia.org/wiki/Tomb_Raider";
          function o(e) {
            let t = (0, r._c)(e.footerLogo?.fields.file?.url);
            return t ? { logo: { "@type": "ImageObject", url: t } } : {};
          }
          function n(e, t) {
            return {
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": g,
              name: u,
              url: i.W,
              ...o(e),
              sameAs: [
                ...t.map((e) => e.link),
                f,
                "https://www.wikidata.org/wiki/Q270503",
              ],
            };
          }
          function c() {
            return {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": p,
              name: u,
              url: i.W,
              publisher: { "@id": g },
            };
          }
          function d(e, t) {
            let a = `${i.W}/news/${e.category?.fields.slug}/${e.slug}`,
              l = (0, r._c)(e.headerImage?.fields.file?.url),
              s = { "@type": "Organization", "@id": g, name: u, ...o(t) };
            return {
              "@context": "https://schema.org",
              "@type": "NewsArticle",
              headline: e.title,
              description: e.excerpt || e.socialMediaShareDescription,
              ...(l ? { image: [l] } : {}),
              datePublished: e.publishDate,
              dateModified: e.sysUpdatedAt ?? e.publishDate,
              url: a,
              mainEntityOfPage: { "@type": "WebPage", "@id": a },
              author: s,
              publisher: s,
            };
          }
          function h(e) {
            let t = `${i.W}/products/${e.category?.fields.slug}/${e.slug}`,
              a = (0, r._c)(
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
              ...(a ? { image: a } : {}),
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
                sameAs: f,
              },
            };
          }
          l();
        } catch (e) {
          l(e);
        }
      });
    },
  },
]);
