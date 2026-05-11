(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8062],
  {
    28092: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => d });
      var a = l(2183),
        i = l(96006),
        r = l.n(i),
        s = l(94536),
        n = l(36439);
      function c() {
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
      function o(e) {
        let { disableSwipe: t, selectedImageIndex: l } = e,
          a = (0, s.Mn)();
        return (
          (0, n.useEffect)(() => {
            a.allowTouchMove = !t;
          }, [t]),
          (0, n.useEffect)(() => {
            a.wrapperEl &&
              (t
                ? a.wrapperEl.classList.add("disabled")
                : a.wrapperEl.classList.remove("disabled"));
          }, [t, l]),
          null
        );
      }
      function d(e) {
        let {
            images: t,
            selectedImageIndex: l,
            setSelectedImageIndex: i,
            clipOverflow: r = !1,
            disableArrows: d = !1,
            disableSwipe: h = !1,
          } = e,
          p = c(),
          [x, g] = (0, n.useState)(null),
          f = (e) => {
            let l = e;
            (l >= t.length && (l = t.length - 1),
              l < 0 && (l = 0),
              i(l),
              null == x || x.slideTo(l));
          };
        return (
          (0, n.useEffect)(() => {
            (null == x ? void 0 : x.activeIndex) != l &&
              (null == x || x.slideTo(l));
          }, [l]),
          (0, a.jsxs)("div", {
            className: "relative w-full",
            children: [
              (0, a.jsx)("div", {
                className: r ? "overflow-hidden p-2" : "",
                children: (0, a.jsxs)(s.RC, {
                  spaceBetween: 16,
                  autoHeight: !0,
                  slidesPerView: "auto",
                  className: "swiper-show-overflow relative flex ",
                  onSwiper: (e) => g(e),
                  onSlideChange: (e) => f(e.activeIndex),
                  children: [
                    (0, a.jsx)(o, { disableSwipe: h, selectedImageIndex: l }),
                    t.map((e, t) =>
                      e
                        ? (0, a.jsx)(
                            s.qr,
                            {
                              className: "relative max-w-none shrink-0",
                              style: { width: p },
                              children: (0, a.jsx)(u, {
                                isActive: l === t,
                                altText: e.alt,
                                url: e.url,
                                onClick: () => f(t),
                                isVideo: e.isVideo,
                              }),
                            },
                            e.id,
                          )
                        : null,
                    ),
                    Array.from({ length: 10 }, (e, t) =>
                      (0, a.jsx)(
                        s.qr,
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
              !d &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(m, { onClick: () => f(l - 1) }),
                    (0, a.jsx)(m, { onClick: () => f(l + 1), isRight: !0 }),
                  ],
                }),
            ],
          })
        );
      }
      function u(e) {
        let {
            altText: t,
            url: l,
            isActive: i = !1,
            onClick: s,
            isVideo: n = !1,
          } = e,
          o = c();
        return (0, a.jsxs)("div", {
          className: "relative aspect-video shrink-0 overflow-visible",
          style: { width: o },
          children: [
            (0, a.jsx)(r(), {
              fill: !0,
              alt: null != t ? t : "",
              src: null != l ? l : "",
              priority: !0,
              sizes: "(max-width: 768px) 25vw, (max-width: 1200px) 20vw, 15vw",
              className:
                "cursor-pointer object-cover object-center transition-all ".concat(
                  i ? "" : "brightness-[0.6] hover:brightness-100",
                ),
              onClick: s,
            }),
            n &&
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
            i &&
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
      function m(e) {
        let { isRight: t = !1, onClick: l } = e;
        return (0, a.jsx)(r(), {
          width: 48,
          height: 48,
          alt: t ? "Right arrow" : "Left arrow",
          src: t
            ? "/images/arrow-button-opaque-right.svg"
            : "/images/arrow-button-opaque-left.svg",
          className:
            "absolute top-1/2 z-10 hidden -translate-y-1/2 cursor-pointer lg:block ".concat(
              t ? "-right-4" : "-left-4",
            ),
          onClick: l,
        });
      }
    },
    43699: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => P });
      var a = l(36439);
      let i =
          /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,
        r = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,
        s = /\.(m3u8)($|\?)/i,
        n = /\.(mpd)($|\?)/i,
        c = /stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,
        o =
          /(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,
        d = /vimeo\.com\/(?!progressive_redirect).+/,
        u =
          /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,
        m = /open\.spotify\.com\/(\w+)\/(\w+)/i,
        h =
          /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+|(videos?\/|\?video=)\d+)($|\?)/,
        p =
          /tiktok\.com\/(?:player\/v1\/|share\/video\/|@[^/]+\/video\/)([0-9]+)/,
        x = (e, t) => {
          if (Array.isArray(e)) {
            for (let l of e)
              if (("string" == typeof l && x(l, t)) || x(l.src, t)) return !0;
            return !1;
          }
          return t(e);
        },
        g = {
          html: (e) => x(e, (e) => i.test(e) || r.test(e)),
          hls: (e) => x(e, (e) => s.test(e)),
          dash: (e) => x(e, (e) => n.test(e)),
          mux: (e) => c.test(e),
          youtube: (e) => o.test(e),
          vimeo: (e) => d.test(e) && !r.test(e) && !s.test(e),
          wistia: (e) => u.test(e),
          spotify: (e) => m.test(e),
          twitch: (e) => h.test(e),
          tiktok: (e) => p.test(e),
        },
        f = a.forwardRef((e, t) => {
          let l = i.test(`${e.src}`) ? "audio" : "video";
          return a.createElement(l, { ...e, ref: t }, e.children);
        }),
        w = [
          {
            key: "hls",
            name: "hls.js",
            canPlay: g.hls,
            canEnablePIP: () => !0,
            player: (0, a.lazy)(() =>
              Promise.all([l.e(9871), l.e(9629), l.e(2262)]).then(
                l.bind(l, 9673),
              ),
            ),
          },
          {
            key: "dash",
            name: "dash.js",
            canPlay: g.dash,
            canEnablePIP: () => !0,
            player: (0, a.lazy)(() =>
              Promise.all([l.e(9629), l.e(6395)]).then(l.bind(l, 85490)),
            ),
          },
          {
            key: "mux",
            name: "Mux",
            canPlay: g.mux,
            canEnablePIP: () => !0,
            player: (0, a.lazy)(() =>
              Promise.all([l.e(9871), l.e(9629), l.e(2723)]).then(
                l.bind(l, 19320),
              ),
            ),
          },
          {
            key: "youtube",
            name: "YouTube",
            canPlay: g.youtube,
            player: (0, a.lazy)(() => l.e(8446).then(l.bind(l, 28439))),
          },
          {
            key: "vimeo",
            name: "Vimeo",
            canPlay: g.vimeo,
            player: (0, a.lazy)(() => l.e(6173).then(l.bind(l, 51524))),
          },
          {
            key: "wistia",
            name: "Wistia",
            canPlay: g.wistia,
            canEnablePIP: () => !0,
            player: (0, a.lazy)(() => l.e(9340).then(l.bind(l, 88889))),
          },
          {
            key: "spotify",
            name: "Spotify",
            canPlay: g.spotify,
            canEnablePIP: () => !1,
            player: (0, a.lazy)(() => l.e(2771).then(l.bind(l, 25666))),
          },
          {
            key: "twitch",
            name: "Twitch",
            canPlay: g.twitch,
            canEnablePIP: () => !1,
            player: (0, a.lazy)(() => l.e(2042).then(l.bind(l, 63570))),
          },
          {
            key: "tiktok",
            name: "TikTok",
            canPlay: g.tiktok,
            canEnablePIP: () => !1,
            player: (0, a.lazy)(() => l.e(8085).then(l.bind(l, 72287))),
          },
          {
            key: "html",
            name: "html",
            canPlay: g.html,
            canEnablePIP: () => !0,
            player: f,
          },
        ],
        v = {
          width: "320px",
          height: "180px",
          volume: 1,
          playbackRate: 1,
          previewTabIndex: 0,
          previewAriaLabel: "",
          oEmbedUrl: "https://noembed.com/embed?url={url}",
        },
        b = a.forwardRef((e, t) => {
          let { playing: l, pip: i } = e,
            r = e.activePlayer,
            s = (0, a.useRef)(null),
            n = (0, a.useRef)(!0);
          if (
            ((0, a.useEffect)(() => {
              var t, a;
              s.current &&
                (s.current.paused && !0 === l && s.current.play(),
                s.current.paused || !1 !== l || s.current.pause(),
                (s.current.playbackRate = null != (t = e.playbackRate) ? t : 1),
                (s.current.volume = null != (a = e.volume) ? a : 1));
            }),
            (0, a.useEffect)(() => {
              var e, t, l, a, r;
              if (s.current && globalThis.document) {
                if (i && !document.pictureInPictureElement)
                  try {
                    null == (t = (e = s.current).requestPictureInPicture) ||
                      t.call(e);
                  } catch (e) {}
                if (!i && document.pictureInPictureElement)
                  try {
                    (null == (a = (l = s.current).exitPictureInPicture) ||
                      a.call(l),
                      null == (r = document.exitPictureInPicture) ||
                        r.call(document));
                  } catch (e) {}
              }
            }, [i]),
            !r)
          )
            return null;
          let c = {},
            o = ["onReady", "onStart"];
          for (let t in e)
            t.startsWith("on") && !o.includes(t) && (c[t] = e[t]);
          return a.createElement(
            r,
            {
              ...c,
              style: e.style,
              className: e.className,
              slot: e.slot,
              ref: (0, a.useCallback)(
                (e) => {
                  ((s.current = e),
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
      b.displayName = "Player";
      let y = (0, a.lazy)(() => l.e(6353).then(l.bind(l, 40640))),
        j = [],
        k = ({ children: e }) => e,
        N = w[w.length - 1];
      var P = ((e, t) => {
        let l = a.forwardRef((l, i) => {
          let r = { ...v, ...l },
            {
              src: s,
              slot: n,
              className: c,
              style: o,
              width: d,
              height: u,
              fallback: m,
              wrapper: h,
            } = r,
            [p, x] = (0, a.useState)(!!r.light);
          (0, a.useEffect)(() => {
            r.light ? x(!0) : x(!1);
          }, [r.light]);
          let g = (e) => {
              var t;
              (x(!1), null == (t = r.onClickPreview) || t.call(r, e));
            },
            f = null == h ? k : h,
            w = !1 === m ? k : a.Suspense;
          return a.createElement(
            f,
            { slot: n, className: c, style: { width: d, height: u, ...o } },
            a.createElement(
              w,
              { fallback: m },
              p
                ? ((e) => {
                    if (!e) return null;
                    let {
                      light: t,
                      playIcon: l,
                      previewTabIndex: i,
                      oEmbedUrl: s,
                      previewAriaLabel: n,
                    } = r;
                    return a.createElement(y, {
                      src: e,
                      light: t,
                      playIcon: l,
                      previewTabIndex: i,
                      previewAriaLabel: n,
                      oEmbedUrl: s,
                      onClickPreview: g,
                    });
                  })(s)
                : ((l) => {
                    var s, o;
                    let d = ((l) => {
                      for (let t of [...j, ...e])
                        if (l && t.canPlay(l)) return t;
                      return t || null;
                    })(l);
                    if (!d) return null;
                    let { style: u, width: m, height: h, wrapper: p } = r,
                      x = null == (s = r.config) ? void 0 : s[d.key];
                    return a.createElement(b, {
                      ...r,
                      ref: i,
                      activePlayer: null != (o = d.player) ? o : d,
                      slot: p ? void 0 : n,
                      className: p ? void 0 : c,
                      style: p
                        ? { display: "block", width: "100%", height: "100%" }
                        : { display: "block", width: m, height: h, ...u },
                      config: x,
                    });
                  })(s),
            ),
          );
        });
        return (
          (l.displayName = "ReactPlayer"),
          (l.addCustomPlayer = (e) => {
            j.push(e);
          }),
          (l.removeCustomPlayers = () => {
            j.length = 0;
          }),
          (l.canPlay = (t) => {
            if (t) {
              for (let l of [...j, ...e]) if (l.canPlay(t)) return !0;
            }
            return !1;
          }),
          (l.canEnablePIP = (t) => {
            var l;
            if (t) {
              for (let a of [...j, ...e])
                if (
                  a.canPlay(t) &&
                  (null == (l = a.canEnablePIP) ? void 0 : l.call(a))
                )
                  return !0;
            }
            return !1;
          }),
          l
        );
      })(w, N);
    },
    58502: (e, t, l) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/products/[category]/[title]",
        function () {
          return l(62258);
        },
      ]);
    },
    62258: (e, t, l) => {
      "use strict";
      l.a(e, async (e, a) => {
        try {
          (l.r(t), l.d(t, { __N_SSG: () => x, default: () => g }));
          var i = l(2183),
            r = l(95216),
            s = l(72962),
            n = l(31026),
            c = l(75894),
            o = l(13544),
            d = l(72327),
            u = l(14623),
            m = l.n(u),
            h = l(92446),
            p = e([r, s, c, d, h]);
          [r, s, c, d, h] = p.then ? (await p)() : p;
          var x = !0;
          function g(e) {
            var t, l, a, u, p;
            let {
                product: x,
                relatedArticles: g,
                websiteSingleton: f,
                navItems: w,
                footerSocialLinks: v,
                surveys: b,
                signUpBanner: y,
              } = e,
              j = x.shortDescription || "",
              k = (
                null == (a = x.titleLogo) ||
                null == (l = a.fields) ||
                null == (t = l.file)
                  ? void 0
                  : t.url
              )
                ? (0, h._c)(x.titleLogo.fields.file.url)
                : "/images/Tomb-Raider-Opengraph.png";
            return (0, i.jsxs)("div", {
              className: "relative",
              children: [
                (0, i.jsxs)(m(), {
                  children: [
                    (0, i.jsx)("title", {
                      children: "Tomb Raider | ".concat(x.title),
                    }),
                    (0, i.jsx)(
                      "meta",
                      {
                        name: "description",
                        content: j || "Learn more about ".concat(x.title),
                      },
                      "description",
                    ),
                    (0, i.jsx)(
                      "meta",
                      {
                        name: "keywords",
                        content: "Tomb Raider, "
                          .concat(x.title, ", ")
                          .concat(
                            (null == (p = x.category) || null == (u = p.fields)
                              ? void 0
                              : u.name) || "",
                            ", video games, adventure",
                          ),
                      },
                      "keywords",
                    ),
                    (0, i.jsx)(
                      "meta",
                      {
                        property: "og:title",
                        content: "Tomb Raider | ".concat(x.title),
                      },
                      "og:title",
                    ),
                    (0, i.jsx)(
                      "meta",
                      { property: "og:type", content: "product" },
                      "og:type",
                    ),
                    (0, i.jsx)(
                      "meta",
                      { property: "og:image", content: k },
                      "og:image",
                    ),
                    (0, i.jsx)(
                      "meta",
                      {
                        property: "og:description",
                        content: j || "Learn more about ".concat(x.title),
                      },
                      "og:description",
                    ),
                    (0, i.jsx)(
                      "meta",
                      { property: "og:site_name", content: "Tomb Raider" },
                      "og:site_name",
                    ),
                    (0, i.jsx)(
                      "meta",
                      { name: "twitter:card", content: "summary_large_image" },
                      "twitter:card",
                    ),
                    (0, i.jsx)(
                      "meta",
                      {
                        name: "twitter:title",
                        content: "Tomb Raider | ".concat(x.title),
                      },
                      "twitter:title",
                    ),
                    (0, i.jsx)(
                      "meta",
                      {
                        name: "twitter:description",
                        content: j || "Learn more about ".concat(x.title),
                      },
                      "twitter:description",
                    ),
                    (0, i.jsx)(
                      "meta",
                      { name: "twitter:image", content: k },
                      "twitter:image",
                    ),
                  ],
                }),
                (0, i.jsx)(r.Ay, { surveys: b, navItems: w, signUpBanner: y }),
                (0, i.jsx)(s.A, { product: x, websiteSingleton: f }),
                g.length > 0 &&
                  (0, i.jsxs)(o.A, {
                    className: "text-black",
                    children: [
                      (0, i.jsx)("div", {
                        className: "py-5 lg:py-16 xl:py-20 4xl:py-24",
                      }),
                      (0, i.jsx)(d.A, { articles: g, disableButton: !0 }),
                    ],
                  }),
                (0, i.jsx)(n.A, { websiteSingleton: f }),
                (0, i.jsx)(c.A, {
                  websiteSingleton: f,
                  navItems: w,
                  footerSocialLinks: v,
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
    65035: (e, t, l) => {
      "use strict";
      l.a(e, async (e, a) => {
        try {
          l.d(t, { A: () => d });
          var i = l(2183),
            r = l(96006),
            s = l.n(r),
            n = l(92446),
            c = l(7345),
            o = e([n]);
          function d(e) {
            var t, l, a, r, o, d;
            let { ctaButton: u, url: m } = e,
              h = (null == u ? void 0 : u.fields.label)
                ? u.fields.label
                    .trim()
                    .toLowerCase()
                    .replace(/\s/g, "-")
                    .replace(/[^a-zA-Z0-9]/g, "-")
                : "";
            return (0, i.jsxs)(c.A, {
              href: m,
              className: "".concat(
                h,
                " flex flex-row flex-nowrap gap-x-2 rounded-lg border-2 border-white/20 px-3 py-1.5 duration-200 hover:canhover:bg-white/20",
              ),
              children: [
                (null == u ||
                null == (l = u.fields.icon) ||
                null == (t = l.fields.file)
                  ? void 0
                  : t.url) &&
                  (0, i.jsx)(s(), {
                    width: 16,
                    height: 16,
                    alt:
                      null !=
                      (d =
                        null == u || null == (a = u.fields.icon)
                          ? void 0
                          : a.fields.description)
                        ? d
                        : null == u
                          ? void 0
                          : u.fields.label,
                    src: (0, n._c)(
                      null == u ||
                        null == (o = u.fields.icon) ||
                        null == (r = o.fields.file)
                        ? void 0
                        : r.url,
                    ),
                  }),
                null == u ? void 0 : u.fields.label,
              ],
            });
          }
          ((n = (o.then ? (await o)() : o)[0]), a());
        } catch (e) {
          a(e);
        }
      });
    },
    72327: (e, t, l) => {
      "use strict";
      l.a(e, async (e, a) => {
        try {
          l.d(t, { A: () => p });
          var i = l(2183),
            r = l(96006),
            s = l.n(r),
            n = l(16739),
            c = l(36439),
            o = l(15711),
            d = l(11677),
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
              [h, p] = (0, c.useState)(null);
            return (0, i.jsxs)("div", {
              className:
                "flex w-full flex-col items-stretch overflow-hidden py-8",
              children: [
                (0, i.jsxs)("div", {
                  className: "lg:pb-".concat(
                    d ? 12 : 16,
                    " flex  w-full flex-col flex-wrap items-center justify-between px-8 pb-8 lg:flex-row lg:px-16",
                  ),
                  children: [
                    (0, i.jsxs)("div", {
                      className:
                        "flex flex-col items-center gap-x-8 gap-y-4 pb-4 lg:flex-row lg:pb-0",
                      children: [
                        (0, i.jsx)("p", {
                          className:
                            "text-4xl text-black sm:text-5xl lg:text-6xl",
                          children: l,
                        }),
                        !a &&
                          (0, i.jsx)(u(), {
                            href: "/news/all",
                            children: (0, i.jsx)(o.A, {
                              variant: "dark",
                              children: r,
                            }),
                          }),
                      ],
                    }),
                    t.length > 0 &&
                      (0, i.jsxs)("div", {
                        className: "hidden gap-x-2 lg:flex",
                        children: [
                          (0, i.jsx)(s(), {
                            width: 48,
                            height: 48,
                            alt: "Left arrow",
                            src: "/images/arrow-button-left.svg",
                            className: "mr-2 cursor-pointer",
                            onClick: () => (null == h ? void 0 : h.slidePrev()),
                          }),
                          (0, i.jsx)(s(), {
                            width: 48,
                            height: 48,
                            alt: "Right arrow",
                            onClick: () => (null == h ? void 0 : h.slideNext()),
                            src: "/images/arrow-button-right.svg",
                            className: "cursor-pointer",
                          }),
                        ],
                      }),
                  ],
                }),
                t.length > 0
                  ? (0, i.jsx)("div", {
                      className: "px-8 lg:px-16",
                      children: (0, i.jsx)(m.RC, {
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
                          (0, i.jsx)(
                            m.qr,
                            {
                              className:
                                "relative !h-auto w-64 max-w-none shrink-0 overflow-visible",
                              children: (0, i.jsx)(n.A, { item: e }),
                            },
                            e.slug,
                          ),
                        ),
                      }),
                    })
                  : (0, i.jsx)("p", {
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
    72962: (e, t, l) => {
      "use strict";
      l.a(e, async (e, a) => {
        try {
          l.d(t, { A: () => y });
          var i = l(2183),
            r = l(96006),
            s = l.n(r),
            n = l(36439),
            c = l(52464),
            o = l(40453),
            d = l(65035),
            u = l(28092),
            m = l(80707),
            h = l.n(m),
            p = l(43699),
            x = l(92446),
            g = l(46956),
            f = l(40235),
            w = l(94734),
            v = l(81219),
            b = e([d, x]);
          function y(e) {
            var t;
            let { product: l, websiteSingleton: a } = e,
              [r, s] = (0, n.useState)(0);
            return (0, i.jsxs)("div", {
              className: "relative z-10",
              children: [
                (0, i.jsx)(j, {}),
                (0, i.jsxs)("div", {
                  className: (0, c.cn)(
                    "relative z-0 mx-auto overflow-hidden",
                    "max-w-xl lg:max-w-none",
                    "px-6 pt-24 pb-24 lg:px-12 lg:pt-28 lg:pb-24",
                    "flex flex-col items-start justify-center gap-12 lg:flex-row",
                  ),
                  children: [
                    (0, i.jsx)(N, {
                      images: null != (t = l.galleryEntries) ? t : [],
                      selectedImageIndex: r,
                      setSelectedImageIndex: s,
                    }),
                    (0, i.jsx)(k, { product: l, websiteSingleton: a }),
                  ],
                }),
              ],
            });
          }
          function j() {
            return (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)("div", {
                  className: "absolute inset-0 -z-20 bg-black",
                  children: (0, i.jsxs)("div", {
                    className: "relative min-h-full overflow-hidden pb-24",
                    children: [
                      (0, i.jsx)("div", {
                        className:
                          "absolute right-0 bottom-0 hidden h-full w-full opacity-30 lg:block",
                        children: (0, i.jsx)(s(), {
                          width: 1274,
                          height: 892,
                          className:
                            "absolute right-0 bottom-0 w-1/2 object-contain object-right-bottom",
                          alt: "topography lines",
                          src: "/images/topography.webp",
                        }),
                      }),
                      (0, i.jsxs)("div", {
                        className:
                          "absolute bottom-10 left-[-250px] aspect-[1616/673] w-full min-w-[800px] lg:-bottom-16 lg:left-[-500px]",
                        children: [
                          (0, i.jsx)("div", {
                            className:
                              "absolute h-full w-full overflow-visible opacity-40 mix-blend-lighten blur-[100px]",
                            style: {
                              background:
                                "radial-gradient(50% 50% at 50% 50%, #936726 0%, transparent 100%)",
                            },
                          }),
                          (0, i.jsx)(s(), {
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
                (0, i.jsx)(w.A, {}),
              ],
            });
          }
          function k(e) {
            var t, l, a, r;
            let { product: u, websiteSingleton: m } = e,
              [p, x] = (0, n.useState)(!1),
              [w, b] = (0, n.useState)(!1),
              y = (0, n.useRef)(null);
            return (
              (0, n.useEffect)(() => {
                let e = () => {
                    !w &&
                      y.current &&
                      x(y.current.scrollHeight <= y.current.clientHeight);
                  },
                  t = new ResizeObserver(e);
                return (
                  y.current && (t.observe(y.current), e()),
                  () => {
                    y.current && t.unobserve(y.current);
                  }
                );
              }, [u.description, w]),
              (0, i.jsxs)("div", {
                className: "mx-auto lg:mx-0 lg:max-w-xl",
                children: [
                  u.titleLogo &&
                    (0, i.jsx)("div", {
                      className: "relative h-40 w-full",
                      children: (0, i.jsx)(s(), {
                        fill: !0,
                        className: "object-contain object-center",
                        alt:
                          null != (l = u.titleLogo.fields.description) ? l : "",
                        src: "https:".concat(
                          null == (t = u.titleLogo.fields.file)
                            ? void 0
                            : t.url,
                        ),
                      }),
                    }),
                  u.title &&
                    (0, i.jsx)("h1", {
                      className:
                        "hidden text-3xl leading-[1.1] font-medium tracking-[-0.8px] lg:text-5xl",
                      children: u.title,
                    }),
                  (0, i.jsx)("div", { className: "pt-8" }),
                  u.hideSocialSharingButtons
                    ? null
                    : (0, i.jsx)(v.A, { white: !0, title: u.title }),
                  (0, i.jsx)("div", { className: "pb-4" }),
                  (0, i.jsx)("div", {
                    ref: y,
                    style:
                      p || w
                        ? void 0
                        : {
                            maskImage:
                              "linear-gradient(to top, transparent 0%, black 40%)",
                            WebkitMaskImage:
                              "linear-gradient(to top, transparent 0%, black 40%)",
                          },
                    className: (0, c.cn)(
                      "max-h-60 overflow-hidden",
                      w && "max-h-full",
                    ),
                    children: (0, o.i)(u.description, {
                      renderNode: {
                        [f.nA.PARAGRAPH]: (e, t) =>
                          (0, i.jsx)("p", {
                            className: "mb-4 last:mb-0",
                            children: t,
                          }),
                      },
                    }),
                  }),
                  !p &&
                    (0, i.jsx)("button", {
                      className:
                        "pt-2 font-bold text-yellow-500 hover:underline",
                      onClick: () => {
                        b((e) => {
                          let t = !e;
                          if (!t) {
                            var l, a;
                            window.scrollTo({
                              top:
                                (null !=
                                (a =
                                  null == (l = y.current)
                                    ? void 0
                                    : l.offsetTop)
                                  ? a
                                  : 0) - 124,
                            });
                          }
                          return t;
                        });
                      },
                      children: w ? "Show less" : "Show more",
                    }),
                  h().compact(null != (a = u.ctaButtons) ? a : []).length > 0 &&
                    (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)("div", { className: "pt-10" }),
                        (0, i.jsx)("p", {
                          children: u.ctaSectionLabel
                            ? "".concat(u.ctaSectionLabel, ":")
                            : "Where to Purchase:",
                        }),
                        (0, i.jsx)("div", { className: "pt-3" }),
                        (0, i.jsx)("div", {
                          className: "flex flex-row flex-wrap gap-2",
                          children: h()
                            .compact(null != (r = u.ctaButtons) ? r : [])
                            .map((e) =>
                              (0, i.jsx)(d.A, { ...e.fields }, e.sys.id),
                            ),
                        }),
                      ],
                    }),
                  u.esrbRating &&
                    (0, i.jsxs)("div", {
                      className: "flex items-center gap-6 pt-10",
                      children: [
                        (0, i.jsx)("div", {
                          className: "flex-shrink-0",
                          children: (0, i.jsx)(s(), {
                            src: "/images/esrb/".concat(u.esrbRating, ".svg"),
                            alt: "ESRB Rating: ".concat(u.esrbRating),
                            width: 80,
                            height: 120,
                          }),
                        }),
                        u.esrbContentDescriptors &&
                          u.esrbContentDescriptors.length > 0 &&
                          (0, i.jsx)("div", {
                            className: "flex flex-col gap-1",
                            children: u.esrbContentDescriptors.map((e) =>
                              (0, i.jsx)("p", { children: e }, e),
                            ),
                          }),
                      ],
                    }),
                  (0, i.jsx)("div", {
                    className: "grid max-w-xs grid-cols-2 gap-y-2 pt-10",
                    children: [
                      {
                        label: "".concat(m.productReleaseDateLabel, ":"),
                        value: (0, g.Yq)(u.releaseDate),
                      },
                      {
                        label: "".concat(m.productManufacturerLabel, ":"),
                        value: u.manufacturer,
                      },
                      {
                        label: "".concat(m.productPublisherLabel, ":"),
                        value: u.publisher,
                      },
                      {
                        label: "".concat(m.productPartnerLabel, ":"),
                        value: u.partner,
                      },
                      {
                        label: "".concat(m.productCallOutLabel, ":"),
                        value: u.callOut,
                      },
                    ].map((e) => {
                      let { label: t, value: l } = e;
                      return (
                        l &&
                        (0, i.jsxs)(
                          n.Fragment,
                          {
                            children: [
                              (0, i.jsx)("p", { children: t }),
                              (0, i.jsx)("p", { children: l }),
                            ],
                          },
                          t,
                        )
                      );
                    }),
                  }),
                ],
              })
            );
          }
          function N(e) {
            let {
                images: t,
                selectedImageIndex: l,
                setSelectedImageIndex: a,
              } = e,
              [r, o] = (0, n.useState)(!1);
            (0, n.useEffect)(() => {
              void 0 !== window && o(!0);
            }, []);
            let d = (0, n.useRef)(null);
            return (
              (0, n.useEffect)(() => {
                d.current && (d.current.currentTime = 0);
              }, [l, d]),
              (0, i.jsxs)("div", {
                className:
                  "mx-auto flex w-full grow flex-col gap-y-6 lg:mx-0 lg:max-w-xl 2xl:max-w-4xl",
                children: [
                  (0, i.jsx)("div", {
                    className: "relative aspect-video grow",
                    children: t.map((e, t) => {
                      var a, o, u, m;
                      let h = !!(null == e ? void 0 : e.fields.videoUrl),
                        g = t === l;
                      return (0, i.jsx)(
                        n.Fragment,
                        {
                          children: h
                            ? r &&
                              (0, i.jsx)(p.A, {
                                ref: d,
                                src: null == e ? void 0 : e.fields.videoUrl,
                                controls: !0,
                                width: "100%",
                                height: "100%",
                                playing: h && r && g,
                                style: { display: g ? "block" : "none" },
                              })
                            : (0, i.jsx)(s(), {
                                fill: !0,
                                priority: !0,
                                className: (0, c.cn)(
                                  "object-contain",
                                  g ? "block" : "hidden",
                                ),
                                alt:
                                  null !=
                                  (m =
                                    null == e || null == (a = e.fields.image)
                                      ? void 0
                                      : a.fields.description)
                                    ? m
                                    : "",
                                src: (0, x._c)(
                                  null == e ||
                                    null == (u = e.fields.image) ||
                                    null == (o = u.fields.file)
                                    ? void 0
                                    : o.url,
                                ),
                              }),
                        },
                        t,
                      );
                    }),
                  }),
                  (0, i.jsx)(u.A, {
                    images: t.map((e, t) => (0, x.pO)(e, t)),
                    selectedImageIndex: l,
                    setSelectedImageIndex: a,
                    clipOverflow: !0,
                  }),
                ],
              })
            );
          }
          (([d, x] = b.then ? (await b)() : b), a());
        } catch (e) {
          a(e);
        }
      });
    },
    81219: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => c });
      var a = l(2183);
      l(36439);
      var i = l(96006),
        r = l.n(i),
        s = l(8906),
        n = l(77752);
      function c(e) {
        let { title: t, white: l } = e,
          { addAlert: i } = (0, n.Z)();
        return (0, a.jsxs)("div", {
          className: "flex flex-wrap items-center gap-x-2",
          children: [
            (0, a.jsx)(s.uI, {
              url: window.location.href,
              children: (0, a.jsx)(r(), {
                width: 20,
                height: 20,
                src: "/images/social/logo-fb-simple.svg",
                alt: "share to Facebook",
                className: "article-facebook ".concat(l ? "invert" : void 0),
              }),
            }),
            (0, a.jsx)(s.r6, {
              title: t,
              url: window.location.href,
              children: (0, a.jsx)(r(), {
                width: 20,
                height: 20,
                src: "/images/social/logo-x.svg",
                alt: "share to X",
                className: "article-x ".concat(l ? "invert" : void 0),
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
                  ? "https://www.threads.net/intent/post?text="
                      .concat(encodeURIComponent(t), " ")
                      .concat(encodeURIComponent(window.location.href))
                  : "https://www.threads.net/intent/post?text=".concat(
                      encodeURIComponent(window.location.href),
                    )),
                  window.open(e, "", "height=800,width=600"));
              },
              className: "article-threads cursor-pointer ".concat(
                l ? "invert" : "",
              ),
            }),
            (0, a.jsx)(r(), {
              width: 20,
              height: 20,
              src: "/images/link.svg",
              alt: "copy to clipboard",
              onClick: () => {
                (navigator.clipboard.writeText(window.location.href),
                  i({
                    title: "Link copied!",
                    children:
                      "A link to this article has been copied to your clipboard.",
                  }));
              },
              className: "article-link cursor-pointer ".concat(
                l ? "invert" : void 0,
              ),
            }),
          ],
        });
      }
    },
  },
  (e) => {
    (e.O(
      0,
      [
        9950, 6006, 1433, 1329, 1175, 3492, 6390, 5216, 2446, 8657, 636, 6593,
        8792,
      ],
      () => e((e.s = 58502)),
    ),
      (_N_E = e.O()));
  },
]);
