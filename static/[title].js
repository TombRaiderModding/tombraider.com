(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8062],
  {
    10979: (e, t, l) => {
      "use strict";
      l.a(e, async (e, a) => {
        try {
          l.d(t, { A: () => p });
          var s = l(2183),
            r = l(15013),
            i = l.n(r),
            n = l(87975),
            o = l(36439),
            c = l(64171),
            d = l(46728),
            u = l.n(d),
            m = l(94536),
            h = e([n]);
          function p(e) {
            let {
                articles: t,
                headingTitle: l = "Related Articles",
                disableButton: a = !1,
                buttonTitle: r = "View All",
                isHome: d,
              } = e,
              [h, p] = (0, o.useState)(null);
            return (0, s.jsxs)("div", {
              className:
                "flex w-full flex-col items-stretch overflow-hidden py-8",
              children: [
                (0, s.jsxs)("div", {
                  className: `lg:pb-${!d ? 16 : 12} flex w-full flex-col flex-wrap items-center justify-between px-8 pb-8 lg:flex-row lg:px-16`,
                  children: [
                    (0, s.jsxs)("div", {
                      className:
                        "flex flex-col items-center gap-x-8 gap-y-4 pb-4 lg:flex-row lg:pb-0",
                      children: [
                        (0, s.jsx)("h2", {
                          className:
                            "text-4xl text-black sm:text-5xl lg:text-6xl",
                          children: l,
                        }),
                        !a &&
                          (0, s.jsx)(u(), {
                            href: "/news/all",
                            children: (0, s.jsx)(c.A, {
                              variant: "dark",
                              children: r,
                            }),
                          }),
                      ],
                    }),
                    t.length > 0 &&
                      (0, s.jsxs)("div", {
                        className: "hidden gap-x-2 lg:flex",
                        children: [
                          (0, s.jsx)(i(), {
                            width: 48,
                            height: 48,
                            alt: "Left arrow",
                            src: "/images/arrow-button-left.svg",
                            className: "mr-2 cursor-pointer",
                            onClick: () => h?.slidePrev(),
                          }),
                          (0, s.jsx)(i(), {
                            width: 48,
                            height: 48,
                            alt: "Right arrow",
                            onClick: () => h?.slideNext(),
                            src: "/images/arrow-button-right.svg",
                            className: "cursor-pointer",
                          }),
                        ],
                      }),
                  ],
                }),
                t.length > 0
                  ? (0, s.jsx)("div", {
                      className: "px-8 lg:px-16",
                      children: (0, s.jsx)(m.RC, {
                        className: "swiper-show-overflow relative flex w-full",
                        slidesPerView: 1.25,
                        centeredSlides: !0,
                        breakpoints: {
                          640: { slidesPerView: 2, centeredSlides: !1 },
                          1024: { slidesPerView: 3, centeredSlides: !1 },
                        },
                        spaceBetween: 16,
                        rewind: !0,
                        onSwiper: (e) => p(e),
                        children: t.map((e) =>
                          (0, s.jsx)(
                            m.qr,
                            {
                              className:
                                "relative !h-auto w-64 max-w-none shrink-0 overflow-visible",
                              children: (0, s.jsx)(n.A, { item: e }),
                            },
                            e.slug,
                          ),
                        ),
                      }),
                    })
                  : (0, s.jsx)("p", {
                      className: "px-8 lg:px-16",
                      children: "We couldn't find any related articles.",
                    }),
              ],
            });
          }
          ((n = (h.then ? (await h)() : h)[0]), a());
        } catch (e) {
          a(e);
        }
      });
    },
    25150: (e, t, l) => {
      "use strict";
      l.a(e, async (e, a) => {
        try {
          (l.r(t), l.d(t, { __N_SSG: () => w, default: () => b }));
          var s = l(2183),
            r = l(49980),
            i = l(91118),
            n = l(90118),
            o = l(20162),
            c = l(41036),
            d = l(10979),
            u = l(46402),
            m = l.n(u),
            h = l(61065),
            p = l(92642),
            x = l(95783),
            g = l(80935),
            f = e([r, i, o, d, p, x]);
          [r, i, o, d, p, x] = f.then ? (await f)() : f;
          var w = !0;
          function b({
            product: e,
            relatedArticles: t,
            websiteSingleton: l,
            navItems: a,
            footerSocialLinks: u,
            surveys: f,
            signUpBanner: w,
          }) {
            let v = e.shortDescription || "",
              y = e.titleLogo?.fields?.file?.url
                ? (0, p._c)(e.titleLogo.fields.file.url)
                : `${g.W}/images/Tomb-Raider-Opengraph.png`;
            return (0, s.jsxs)("div", {
              className: "relative",
              children: [
                (0, s.jsxs)(m(), {
                  children: [
                    (0, s.jsx)("title", {
                      children: `Tomb Raider | ${e.title}`,
                    }),
                    (0, s.jsx)(
                      "meta",
                      {
                        name: "description",
                        content: v || `Learn more about ${e.title}`,
                      },
                      "description",
                    ),
                    (0, s.jsx)(
                      "meta",
                      {
                        name: "keywords",
                        content: `Tomb Raider, ${e.title}, ${e.category?.fields?.name || ""}, video games, adventure`,
                      },
                      "keywords",
                    ),
                    (0, s.jsx)(
                      "meta",
                      {
                        property: "og:title",
                        content: `Tomb Raider | ${e.title}`,
                      },
                      "og:title",
                    ),
                    (0, s.jsx)(
                      "meta",
                      { property: "og:type", content: "product" },
                      "og:type",
                    ),
                    (0, s.jsx)(
                      "meta",
                      { property: "og:image", content: y },
                      "og:image",
                    ),
                    (0, s.jsx)(
                      "meta",
                      {
                        property: "og:description",
                        content: v || `Learn more about ${e.title}`,
                      },
                      "og:description",
                    ),
                    (0, s.jsx)(
                      "meta",
                      { property: "og:site_name", content: "Tomb Raider" },
                      "og:site_name",
                    ),
                    (0, s.jsx)(
                      "meta",
                      { name: "twitter:card", content: "summary_large_image" },
                      "twitter:card",
                    ),
                    (0, s.jsx)(
                      "meta",
                      {
                        name: "twitter:title",
                        content: `Tomb Raider | ${e.title}`,
                      },
                      "twitter:title",
                    ),
                    (0, s.jsx)(
                      "meta",
                      {
                        name: "twitter:description",
                        content: v || `Learn more about ${e.title}`,
                      },
                      "twitter:description",
                    ),
                    (0, s.jsx)(
                      "meta",
                      { name: "twitter:image", content: y },
                      "twitter:image",
                    ),
                  ],
                }),
                e.category?.fields.slug === "games" &&
                  (0, s.jsx)(h.A, { data: (0, x.Om)(e) }),
                (0, s.jsx)(r.Ay, { surveys: f, navItems: a, signUpBanner: w }),
                (0, s.jsx)(i.A, { product: e, websiteSingleton: l }),
                t.length > 0 &&
                  (0, s.jsxs)(c.A, {
                    className: "text-black",
                    children: [
                      (0, s.jsx)("div", {
                        className: "4xl:py-24 py-5 lg:py-16 xl:py-20",
                      }),
                      (0, s.jsx)(d.A, { articles: t, disableButton: !0 }),
                    ],
                  }),
                (0, s.jsx)(n.A, { websiteSingleton: l }),
                (0, s.jsx)(o.A, {
                  websiteSingleton: l,
                  navItems: a,
                  footerSocialLinks: u,
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
    27335: (e, t, l) => {
      "use strict";
      l.a(e, async (e, a) => {
        try {
          l.d(t, { A: () => d });
          var s = l(2183),
            r = l(15013),
            i = l.n(r),
            n = l(92642),
            o = l(12317),
            c = e([n]);
          function d({ ctaButton: e, url: t }) {
            let l = e?.fields.label
              ? e.fields.label
                  .trim()
                  .toLowerCase()
                  .replace(/\s/g, "-")
                  .replace(/[^a-zA-Z0-9]/g, "-")
              : "";
            return (0, s.jsxs)(o.A, {
              href: t,
              className: `${l} flex flex-row flex-nowrap gap-x-2 rounded-lg border-2 border-white/20 px-3 py-1.5 duration-200 hover:canhover:bg-white/20`,
              children: [
                e?.fields.icon?.fields.file?.url &&
                  (0, s.jsx)(i(), {
                    width: 16,
                    height: 16,
                    alt: e?.fields.icon?.fields.description ?? e?.fields.label,
                    src: (0, n._c)(e?.fields.icon?.fields.file?.url),
                  }),
                e?.fields.label,
              ],
            });
          }
          ((n = (c.then ? (await c)() : c)[0]), a());
        } catch (e) {
          a(e);
        }
      });
    },
    43699: (e, t, l) => {
      "use strict";
      let a;
      l.d(t, { A: () => P });
      var s = l(36439);
      let r =
          /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,
        i = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,
        n = /\.(m3u8)($|\?)/i,
        o = /\.(mpd)($|\?)/i,
        c = /stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,
        d =
          /(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,
        u = /vimeo\.com\/(?!progressive_redirect).+/,
        m =
          /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,
        h = /open\.spotify\.com\/(\w+)\/(\w+)/i,
        p =
          /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+|(videos?\/|\?video=)\d+)($|\?)/,
        x =
          /tiktok\.com\/(?:player\/v1\/|share\/video\/|@[^/]+\/video\/)([0-9]+)/,
        g = (e, t) => {
          if (Array.isArray(e)) {
            for (let l of e)
              if (("string" == typeof l && g(l, t)) || g(l.src, t)) return !0;
            return !1;
          }
          return t(e);
        },
        f = s.forwardRef((e, t) => {
          let l = r.test(`${e.src}`) ? "audio" : "video";
          return s.createElement(l, { ...e, ref: t }, e.children);
        }),
        w = [
          {
            key: "hls",
            name: "hls.js",
            canPlay: (e) => g(e, (e) => n.test(e)),
            canEnablePIP: () => !0,
            player: (0, s.lazy)(() =>
              Promise.all([l.e(9871), l.e(9629), l.e(2262)]).then(
                l.bind(l, 9673),
              ),
            ),
          },
          {
            key: "dash",
            name: "dash.js",
            canPlay: (e) => g(e, (e) => o.test(e)),
            canEnablePIP: () => !0,
            player: (0, s.lazy)(() =>
              Promise.all([l.e(9629), l.e(6395)]).then(l.bind(l, 85490)),
            ),
          },
          {
            key: "mux",
            name: "Mux",
            canPlay: (e) => c.test(e),
            canEnablePIP: () => !0,
            player: (0, s.lazy)(() =>
              Promise.all([l.e(9871), l.e(9629), l.e(2723)]).then(
                l.bind(l, 19320),
              ),
            ),
          },
          {
            key: "youtube",
            name: "YouTube",
            canPlay: (e) => d.test(e),
            player: (0, s.lazy)(() => l.e(8446).then(l.bind(l, 28439))),
          },
          {
            key: "vimeo",
            name: "Vimeo",
            canPlay: (e) => u.test(e) && !i.test(e) && !n.test(e),
            player: (0, s.lazy)(() => l.e(6173).then(l.bind(l, 51524))),
          },
          {
            key: "wistia",
            name: "Wistia",
            canPlay: (e) => m.test(e),
            canEnablePIP: () => !0,
            player: (0, s.lazy)(() => l.e(9340).then(l.bind(l, 88889))),
          },
          {
            key: "spotify",
            name: "Spotify",
            canPlay: (e) => h.test(e),
            canEnablePIP: () => !1,
            player: (0, s.lazy)(() => l.e(2771).then(l.bind(l, 25666))),
          },
          {
            key: "twitch",
            name: "Twitch",
            canPlay: (e) => p.test(e),
            canEnablePIP: () => !1,
            player: (0, s.lazy)(() => l.e(2042).then(l.bind(l, 63570))),
          },
          {
            key: "tiktok",
            name: "TikTok",
            canPlay: (e) => x.test(e),
            canEnablePIP: () => !1,
            player: (0, s.lazy)(() => l.e(8085).then(l.bind(l, 72287))),
          },
          {
            key: "html",
            name: "html",
            canPlay: (e) => g(e, (e) => r.test(e) || i.test(e)),
            canEnablePIP: () => !0,
            player: f,
          },
        ],
        b = {
          width: "320px",
          height: "180px",
          volume: 1,
          playbackRate: 1,
          previewTabIndex: 0,
          previewAriaLabel: "",
          oEmbedUrl: "https://noembed.com/embed?url={url}",
        },
        v = s.forwardRef((e, t) => {
          let { playing: l, pip: a } = e,
            r = e.activePlayer,
            i = (0, s.useRef)(null),
            n = (0, s.useRef)(!0);
          if (
            ((0, s.useEffect)(() => {
              var t, a;
              i.current &&
                (i.current.paused && !0 === l && i.current.play(),
                i.current.paused || !1 !== l || i.current.pause(),
                (i.current.playbackRate = null != (t = e.playbackRate) ? t : 1),
                (i.current.volume = null != (a = e.volume) ? a : 1));
            }),
            (0, s.useEffect)(() => {
              var e, t, l, s, r;
              if (i.current && globalThis.document) {
                if (a && !document.pictureInPictureElement)
                  try {
                    null == (t = (e = i.current).requestPictureInPicture) ||
                      t.call(e);
                  } catch (e) {}
                if (!a && document.pictureInPictureElement)
                  try {
                    (null == (s = (l = i.current).exitPictureInPicture) ||
                      s.call(l),
                      null == (r = document.exitPictureInPicture) ||
                        r.call(document));
                  } catch (e) {}
              }
            }, [a]),
            !r)
          )
            return null;
          let o = {},
            c = ["onReady", "onStart"];
          for (let t in e)
            t.startsWith("on") && !c.includes(t) && (o[t] = e[t]);
          return s.createElement(
            r,
            {
              ...o,
              style: e.style,
              className: e.className,
              slot: e.slot,
              ref: (0, s.useCallback)(
                (e) => {
                  ((i.current = e),
                    "function" == typeof t
                      ? t(e)
                      : null !== t && (t.current = e));
                },
                [t],
              ),
              src: e.src,
              crossOrigin: e.crossOrigin,
              preload: e.preload,
              controls: e.controls,
              muted: e.muted,
              autoPlay: e.autoPlay,
              loop: e.loop,
              playsInline: e.playsInline,
              disableRemotePlayback: e.disableRemotePlayback,
              config: e.config,
              onLoadStart: (t) => {
                var l, a;
                ((n.current = !0),
                  null == (l = e.onReady) || l.call(e),
                  null == (a = e.onLoadStart) || a.call(e, t));
              },
              onPlay: (t) => {
                var l, a;
                (n.current &&
                  ((n.current = !1), null == (l = e.onStart) || l.call(e, t)),
                  null == (a = e.onPlay) || a.call(e, t));
              },
            },
            e.children,
          );
        });
      v.displayName = "Player";
      let y = (0, s.lazy)(() => l.e(6353).then(l.bind(l, 40640))),
        j = [],
        k = ({ children: e }) => e,
        N = w[w.length - 1];
      var P =
        (((a = s.forwardRef((e, t) => {
          let l = { ...b, ...e },
            {
              src: a,
              slot: r,
              className: i,
              style: n,
              width: o,
              height: c,
              fallback: d,
              wrapper: u,
            } = l,
            [m, h] = (0, s.useState)(!!l.light);
          (0, s.useEffect)(() => {
            l.light ? h(!0) : h(!1);
          }, [l.light]);
          let p = (e) => {
              var t;
              (h(!1), null == (t = l.onClickPreview) || t.call(l, e));
            },
            x = null == u ? k : u,
            g = !1 === d ? k : s.Suspense;
          return s.createElement(
            x,
            { slot: r, className: i, style: { width: o, height: c, ...n } },
            s.createElement(
              g,
              { fallback: d },
              m
                ? ((e) => {
                    if (!e) return null;
                    let {
                      light: t,
                      playIcon: a,
                      previewTabIndex: r,
                      oEmbedUrl: i,
                      previewAriaLabel: n,
                    } = l;
                    return s.createElement(y, {
                      src: e,
                      light: t,
                      playIcon: a,
                      previewTabIndex: r,
                      previewAriaLabel: n,
                      oEmbedUrl: i,
                      onClickPreview: p,
                    });
                  })(a)
                : ((e) => {
                    var a, n;
                    let o = ((e) => {
                      for (let t of [...j, ...w])
                        if (e && t.canPlay(e)) return t;
                      return N || null;
                    })(e);
                    if (!o) return null;
                    let { style: c, width: d, height: u, wrapper: m } = l,
                      h = null == (a = l.config) ? void 0 : a[o.key];
                    return s.createElement(v, {
                      ...l,
                      ref: t,
                      activePlayer: null != (n = o.player) ? n : o,
                      slot: m ? void 0 : r,
                      className: m ? void 0 : i,
                      style: m
                        ? { display: "block", width: "100%", height: "100%" }
                        : { display: "block", width: d, height: u, ...c },
                      config: h,
                    });
                  })(a),
            ),
          );
        })).displayName = "ReactPlayer"),
        (a.addCustomPlayer = (e) => {
          j.push(e);
        }),
        (a.removeCustomPlayers = () => {
          j.length = 0;
        }),
        (a.canPlay = (e) => {
          if (e) {
            for (let t of [...j, ...w]) if (t.canPlay(e)) return !0;
          }
          return !1;
        }),
        (a.canEnablePIP = (e) => {
          var t;
          if (e) {
            for (let l of [...j, ...w])
              if (
                l.canPlay(e) &&
                (null == (t = l.canEnablePIP) ? void 0 : t.call(l))
              )
                return !0;
          }
          return !1;
        }),
        a);
    },
    57560: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => d });
      var a = l(2183),
        s = l(15013),
        r = l.n(s),
        i = l(94536),
        n = l(36439);
      function o() {
        let [e, t] = (0, n.useState)(230);
        return (
          (0, n.useEffect)(() => {
            let e = () => {
              window && t(window.innerWidth < 1024 ? 130 : 230);
            };
            return (
              window.addEventListener("resize", e),
              e(),
              () => {
                window.removeEventListener("resize", e);
              }
            );
          }, []),
          e
        );
      }
      function c({ disableSwipe: e, selectedImageIndex: t }) {
        let l = (0, i.Mn)();
        return (
          (0, n.useEffect)(() => {
            l.allowTouchMove = !e;
          }, [e]),
          (0, n.useEffect)(() => {
            l.wrapperEl &&
              (e
                ? l.wrapperEl.classList.add("disabled")
                : l.wrapperEl.classList.remove("disabled"));
          }, [e, t]),
          null
        );
      }
      function d({
        images: e,
        selectedImageIndex: t,
        setSelectedImageIndex: l,
        clipOverflow: s = !1,
        disableArrows: r = !1,
        disableSwipe: h = !1,
      }) {
        let p = o(),
          [x, g] = (0, n.useState)(null),
          f = (t) => {
            let a = t;
            (a >= e.length && (a = e.length - 1),
              a < 0 && (a = 0),
              l(a),
              x?.slideTo(a));
          };
        return (
          (0, n.useEffect)(() => {
            x?.activeIndex != t && x?.slideTo(t);
          }, [t]),
          (0, a.jsxs)("div", {
            className: "relative w-full",
            children: [
              (0, a.jsx)("div", {
                className: s ? "overflow-hidden p-2" : "",
                children: (0, a.jsxs)(i.RC, {
                  spaceBetween: 16,
                  autoHeight: !0,
                  slidesPerView: "auto",
                  className: "swiper-show-overflow relative flex ",
                  onSwiper: (e) => g(e),
                  onSlideChange: (e) => f(e.activeIndex),
                  children: [
                    (0, a.jsx)(c, { disableSwipe: h, selectedImageIndex: t }),
                    e.map((e, l) =>
                      e
                        ? (0, a.jsx)(
                            i.qr,
                            {
                              className: "relative max-w-none shrink-0",
                              style: { width: p },
                              children: (0, a.jsx)(u, {
                                isActive: t === l,
                                altText: e.alt,
                                url: e.url,
                                onClick: () => f(l),
                                isVideo: e.isVideo,
                              }),
                            },
                            e.id,
                          )
                        : null,
                    ),
                    Array.from({ length: 10 }, (e, t) =>
                      (0, a.jsx)(
                        i.qr,
                        {
                          className: "relative max-w-none shrink-0",
                          style: { width: p },
                        },
                        t,
                      ),
                    ),
                  ],
                }),
              }),
              !r &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(m, { onClick: () => f(t - 1) }),
                    (0, a.jsx)(m, { onClick: () => f(t + 1), isRight: !0 }),
                  ],
                }),
            ],
          })
        );
      }
      function u({
        altText: e,
        url: t,
        isActive: l = !1,
        onClick: s,
        isVideo: i = !1,
      }) {
        let n = o();
        return (0, a.jsxs)("div", {
          className: "relative aspect-video shrink-0 overflow-visible",
          style: { width: n },
          children: [
            (0, a.jsx)(r(), {
              fill: !0,
              alt: e ?? "",
              src: t ?? "",
              priority: !0,
              sizes: "(max-width: 768px) 25vw, (max-width: 1200px) 20vw, 15vw",
              className: `cursor-pointer object-cover object-center transition-all ${l ? "" : "brightness-[0.6] hover:brightness-100"}`,
              onClick: s,
            }),
            i &&
              (0, a.jsx)("div", {
                className:
                  "pointer-events-none absolute inset-0 flex items-center justify-center",
                children: (0, a.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "40",
                  height: "40",
                  viewBox: "0 0 40 40",
                  className: "bg-[#272727]/75",
                  children: (0, a.jsx)("g", {
                    children: (0, a.jsx)("path", {
                      d: "M13.3335 31.5833V8.25L31.6668 19.9167L13.3335 31.5833Z",
                      fill: "#FCF9ED",
                    }),
                  }),
                }),
              }),
            l &&
              (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(r(), {
                    height: 26,
                    width: 26,
                    alt: "Top left corner",
                    src: "/images/small-top-left-bracket.svg",
                    className: "absolute -left-1.5 -top-1.5",
                  }),
                  (0, a.jsx)(r(), {
                    height: 26,
                    width: 26,
                    alt: "Top right corner",
                    src: "/images/small-top-right-bracket.svg",
                    className: "absolute -right-1.5 -top-1.5",
                  }),
                  (0, a.jsx)(r(), {
                    height: 26,
                    width: 26,
                    alt: "Bottom left corner",
                    src: "/images/small-bottom-left-bracket.svg",
                    className: "absolute -bottom-1.5 -left-1.5",
                  }),
                  (0, a.jsx)(r(), {
                    height: 26,
                    width: 26,
                    alt: "Bottom right corner",
                    src: "/images/small-bottom-right-bracket.svg",
                    className: "absolute -bottom-1.5 -right-1.5",
                  }),
                ],
              }),
          ],
        });
      }
      function m({ isRight: e = !1, onClick: t }) {
        return (0, a.jsx)(r(), {
          width: 48,
          height: 48,
          alt: e ? "Right arrow" : "Left arrow",
          src: e
            ? "/images/arrow-button-opaque-right.svg"
            : "/images/arrow-button-opaque-left.svg",
          className: `absolute top-1/2 z-10 hidden -translate-y-1/2 cursor-pointer lg:block ${e ? "-right-4" : "-left-4"}`,
          onClick: t,
        });
      }
    },
    75247: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => o });
      var a = l(2183);
      l(36439);
      var s = l(15013),
        r = l.n(s),
        i = l(8906),
        n = l(23988);
      function o(e) {
        let { title: t, white: l } = e,
          { addAlert: s } = (0, n.Z)();
        return (0, a.jsxs)("div", {
          className: "flex flex-wrap items-center gap-x-2",
          children: [
            (0, a.jsx)(i.uI, {
              url: window.location.href,
              children: (0, a.jsx)(r(), {
                width: 20,
                height: 20,
                src: "/images/social/logo-fb-simple.svg",
                alt: "share to Facebook",
                className: `article-facebook ${l ? "invert" : void 0}`,
              }),
            }),
            (0, a.jsx)(i.r6, {
              title: t,
              url: window.location.href,
              children: (0, a.jsx)(r(), {
                width: 20,
                height: 20,
                src: "/images/social/logo-x.svg",
                alt: "share to X",
                className: `article-x ${l ? "invert" : void 0}`,
              }),
            }),
            (0, a.jsx)(r(), {
              width: 20,
              height: 20,
              alt: "share to Threads",
              src: "/images/social/logo-threads.svg",
              onClick: () => {
                let e;
                ((e = t
                  ? `https://www.threads.net/intent/post?text=${encodeURIComponent(t)} ${encodeURIComponent(window.location.href)}`
                  : `https://www.threads.net/intent/post?text=${encodeURIComponent(window.location.href)}`),
                  window.open(e, "", "height=800,width=600"));
              },
              className: `article-threads cursor-pointer ${l ? "invert" : ""}`,
            }),
            (0, a.jsx)(r(), {
              width: 20,
              height: 20,
              src: "/images/link.svg",
              alt: "copy to clipboard",
              onClick: () => {
                (navigator.clipboard.writeText(window.location.href),
                  s({
                    title: "Link copied!",
                    children:
                      "A link to this article has been copied to your clipboard.",
                  }));
              },
              className: `article-link cursor-pointer ${l ? "invert" : void 0}`,
            }),
          ],
        });
      }
    },
    91118: (e, t, l) => {
      "use strict";
      l.a(e, async (e, a) => {
        try {
          l.d(t, { A: () => y });
          var s = l(2183),
            r = l(15013),
            i = l.n(r),
            n = l(36439),
            o = l(61932),
            c = l(40453),
            d = l(27335),
            u = l(57560),
            m = l(80707),
            h = l.n(m),
            p = l(43699),
            x = l(92642),
            g = l(68456),
            f = l(40235),
            w = l(72538),
            b = l(75247),
            v = e([d, x]);
          function y({ product: e, websiteSingleton: t }) {
            let [l, a] = (0, n.useState)(0);
            return (0, s.jsxs)("div", {
              className: "relative z-10",
              children: [
                (0, s.jsx)(j, {}),
                (0, s.jsxs)("div", {
                  className: (0, o.cn)(
                    "relative z-0 mx-auto overflow-hidden",
                    "max-w-xl lg:max-w-none",
                    "px-6 pt-24 pb-24 lg:px-12 lg:pt-28 lg:pb-24",
                    "flex flex-col items-start justify-center gap-12 lg:flex-row",
                  ),
                  children: [
                    (0, s.jsx)(N, {
                      images: e.galleryEntries ?? [],
                      selectedImageIndex: l,
                      setSelectedImageIndex: a,
                    }),
                    (0, s.jsx)(k, { product: e, websiteSingleton: t }),
                  ],
                }),
              ],
            });
          }
          function j() {
            return (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)("div", {
                  className: "absolute inset-0 -z-20 bg-black",
                  children: (0, s.jsxs)("div", {
                    className: "relative min-h-full overflow-hidden pb-24",
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "absolute right-0 bottom-0 hidden h-full w-full opacity-30 lg:block",
                        children: (0, s.jsx)(i(), {
                          width: 1274,
                          height: 892,
                          className:
                            "absolute right-0 bottom-0 w-1/2 object-contain object-right-bottom",
                          alt: "topography lines",
                          src: "/images/topography.webp",
                        }),
                      }),
                      (0, s.jsxs)("div", {
                        className:
                          "absolute bottom-10 left-[-250px] aspect-[1616/673] w-full min-w-[800px] lg:-bottom-16 lg:left-[-500px]",
                        children: [
                          (0, s.jsx)("div", {
                            className:
                              "absolute h-full w-full overflow-visible opacity-40 mix-blend-lighten blur-[100px]",
                            style: {
                              background:
                                "radial-gradient(50% 50% at 50% 50%, #936726 0%, transparent 100%)",
                            },
                          }),
                          (0, s.jsx)(i(), {
                            fill: !0,
                            className:
                              "object-contain object-center opacity-30 mix-blend-screen",
                            alt: "lens dirt",
                            src: "/images/lens-dirt.webp",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, s.jsx)(w.A, {}),
              ],
            });
          }
          function k({ product: e, websiteSingleton: t }) {
            let [l, a] = (0, n.useState)(!1),
              [r, u] = (0, n.useState)(!1),
              m = (0, n.useRef)(null);
            return (
              (0, n.useEffect)(() => {
                let e = () => {
                    !r &&
                      m.current &&
                      a(m.current.scrollHeight <= m.current.clientHeight);
                  },
                  t = new ResizeObserver(e);
                return (
                  m.current && (t.observe(m.current), e()),
                  () => {
                    m.current && t.unobserve(m.current);
                  }
                );
              }, [e.description, r]),
              (0, s.jsxs)("div", {
                className: "mx-auto lg:mx-0 lg:max-w-xl",
                children: [
                  e.titleLogo &&
                    (0, s.jsx)("div", {
                      className: "relative h-40 w-full",
                      children: (0, s.jsx)(i(), {
                        fill: !0,
                        className: "object-contain object-center",
                        alt: e.titleLogo.fields.description ?? "",
                        src: `https:${e.titleLogo.fields.file?.url}`,
                      }),
                    }),
                  e.title &&
                    (0, s.jsx)("h1", {
                      className:
                        "hidden text-3xl leading-[1.1] font-medium tracking-[-0.8px] lg:text-5xl",
                      children: e.title,
                    }),
                  (0, s.jsx)("div", { className: "pt-8" }),
                  e.hideSocialSharingButtons
                    ? null
                    : (0, s.jsx)(b.A, { white: !0, title: e.title }),
                  (0, s.jsx)("div", { className: "pb-4" }),
                  (0, s.jsx)("div", {
                    ref: m,
                    style:
                      l || r
                        ? void 0
                        : {
                            maskImage:
                              "linear-gradient(to top, transparent 0%, black 40%)",
                            WebkitMaskImage:
                              "linear-gradient(to top, transparent 0%, black 40%)",
                          },
                    className: (0, o.cn)(
                      "max-h-60 overflow-hidden",
                      r && "max-h-full",
                    ),
                    children: (0, c.i)(e.description, {
                      renderNode: {
                        [f.nA.PARAGRAPH]: (e, t) =>
                          (0, s.jsx)("p", {
                            className: "mb-4 last:mb-0",
                            children: t,
                          }),
                      },
                    }),
                  }),
                  !l &&
                    (0, s.jsx)("button", {
                      className:
                        "pt-2 font-bold text-yellow-500 hover:underline",
                      onClick: () => {
                        u((e) => {
                          let t = !e;
                          return (
                            t ||
                              window.scrollTo({
                                top: (m.current?.offsetTop ?? 0) - 124,
                              }),
                            t
                          );
                        });
                      },
                      children: r ? "Show less" : "Show more",
                    }),
                  h().compact(e.ctaButtons ?? []).length > 0 &&
                    (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)("div", { className: "pt-10" }),
                        (0, s.jsx)("p", {
                          children: e.ctaSectionLabel
                            ? `${e.ctaSectionLabel}:`
                            : "Where to Purchase:",
                        }),
                        (0, s.jsx)("div", { className: "pt-3" }),
                        (0, s.jsx)("div", {
                          className: "flex flex-row flex-wrap gap-2",
                          children: h()
                            .compact(e.ctaButtons ?? [])
                            .map((e) =>
                              (0, s.jsx)(d.A, { ...e.fields }, e.sys.id),
                            ),
                        }),
                      ],
                    }),
                  e.esrbRating &&
                    (0, s.jsxs)("div", {
                      className: "flex items-center gap-6 pt-10",
                      children: [
                        (0, s.jsx)("div", {
                          className: "flex-shrink-0",
                          children: (0, s.jsx)(i(), {
                            src: `/images/esrb/${encodeURIComponent(e.esrbRating)}.svg`,
                            alt: `ESRB Rating: ${e.esrbRating}`,
                            width: 80,
                            height: 120,
                          }),
                        }),
                        e.esrbContentDescriptors &&
                          e.esrbContentDescriptors.length > 0 &&
                          (0, s.jsx)("div", {
                            className: "flex flex-col gap-1",
                            children: e.esrbContentDescriptors.map((e) =>
                              (0, s.jsx)("p", { children: e }, e),
                            ),
                          }),
                      ],
                    }),
                  (0, s.jsx)("div", {
                    className: "grid max-w-xs grid-cols-2 gap-y-2 pt-10",
                    children: [
                      {
                        label: `${t.productReleaseDateLabel}:`,
                        value: (0, g.Yq)(e.releaseDate),
                      },
                      {
                        label: `${t.productManufacturerLabel}:`,
                        value: e.manufacturer,
                      },
                      {
                        label: `${t.productPublisherLabel}:`,
                        value: e.publisher,
                      },
                      { label: `${t.productPartnerLabel}:`, value: e.partner },
                      { label: `${t.productCallOutLabel}:`, value: e.callOut },
                    ].map(
                      ({ label: e, value: t }) =>
                        t &&
                        (0, s.jsxs)(
                          n.Fragment,
                          {
                            children: [
                              (0, s.jsx)("p", { children: e }),
                              (0, s.jsx)("p", { children: t }),
                            ],
                          },
                          e,
                        ),
                    ),
                  }),
                ],
              })
            );
          }
          function N({
            images: e,
            selectedImageIndex: t,
            setSelectedImageIndex: l,
          }) {
            let [a, r] = (0, n.useState)(!1);
            (0, n.useEffect)(() => {
              void 0 !== window && r(!0);
            }, []);
            let c = (0, n.useRef)(null);
            return (
              (0, n.useEffect)(() => {
                c.current && (c.current.currentTime = 0);
              }, [t, c]),
              (0, s.jsxs)("div", {
                className:
                  "mx-auto flex w-full grow flex-col gap-y-6 lg:mx-0 lg:max-w-xl 2xl:max-w-4xl",
                children: [
                  (0, s.jsx)("div", {
                    className: "relative aspect-video grow",
                    children: e.map((e, l) => {
                      let r = !!e?.fields.videoUrl,
                        d = l === t;
                      return (0, s.jsx)(
                        n.Fragment,
                        {
                          children: r
                            ? a &&
                              (0, s.jsx)(p.A, {
                                ref: c,
                                src: e?.fields.videoUrl,
                                controls: !0,
                                width: "100%",
                                height: "100%",
                                playing: r && a && d,
                                style: { display: d ? "block" : "none" },
                              })
                            : (0, s.jsx)(i(), {
                                fill: !0,
                                priority: !0,
                                className: (0, o.cn)(
                                  "object-contain",
                                  d ? "block" : "hidden",
                                ),
                                alt: e?.fields.image?.fields.description ?? "",
                                src: (0, x._c)(
                                  e?.fields.image?.fields.file?.url,
                                ),
                              }),
                        },
                        l,
                      );
                    }),
                  }),
                  (0, s.jsx)(u.A, {
                    images: e.map((e, t) => (0, x.pO)(e, t)),
                    selectedImageIndex: t,
                    setSelectedImageIndex: l,
                    clipOverflow: !0,
                  }),
                ],
              })
            );
          }
          (([d, x] = v.then ? (await v)() : v), a());
        } catch (e) {
          a(e);
        }
      });
    },
    99859: (e, t, l) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/products/[category]/[title]",
        function () {
          return l(25150);
        },
      ]);
    },
  },
  (e) => {
    (e.O(
      0,
      [
        9950, 5013, 2696, 1329, 6342, 3492, 8906, 9980, 2642, 8925, 636, 6593,
        8792,
      ],
      () => e((e.s = 99859)),
    ),
      (_N_E = e.O()));
  },
]);
