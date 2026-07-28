(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8062],
  {
    16739: (e, t, l) => {
      "use strict";
      l.a(e, async (e, a) => {
        try {
          l.d(t, { A: () => h });
          var s = l(2183),
            i = l(96006),
            r = l.n(i),
            n = l(11677),
            o = l.n(n),
            c = l(46956),
            d = l(92446),
            u = e([d]);
          function h(e) {
            var t, l, a, i, n, u, h, m, p;
            let { item: g, onClick: x = () => {} } = e;
            return (0, s.jsx)(o(), {
              onClick: x,
              href: "/news/"
                .concat(
                  null == (l = g.category) || null == (t = l.fields)
                    ? void 0
                    : t.slug,
                  "/",
                )
                .concat(g.slug),
              children: (0, s.jsxs)("article", {
                className:
                  "group flex h-full grow flex-col bg-white shadow-lg duration-[0.3s] lg:bg-transparent lg:shadow-none lg:hover:bg-white lg:hover:shadow-lg",
                children: [
                  (0, s.jsxs)("figure", {
                    className: "relative w-full overflow-hidden",
                    children: [
                      (0, s.jsx)(r(), {
                        alt: "".concat(
                          (null == (i = g.headerImage) || null == (a = i.fields)
                            ? void 0
                            : a.description) || "",
                        ),
                        className:
                          "aspect-[3/2] w-full object-cover transition-all duration-500 group-hover:scale-105",
                        src: (0, d._c)(
                          null == (h = g.headerImage) ||
                            null == (u = h.fields) ||
                            null == (n = u.file)
                            ? void 0
                            : n.url,
                        ),
                        width: 500,
                        height: 500,
                      }),
                      (0, s.jsx)(r(), {
                        alt: "blog card image gradient",
                        fill: !0,
                        className:
                          "absolute top-0 left-0 h-full w-full object-cover",
                        src: "/images/blog-card-image-gradient.svg",
                      }),
                      (0, s.jsx)(r(), {
                        alt: "top left bracket",
                        width: 48,
                        height: 48,
                        className:
                          "absolute -top-4 -left-4 duration-200 group-hover:top-2 group-hover:left-2",
                        src: "/images/top-left-bracket.svg",
                      }),
                      (0, s.jsx)(r(), {
                        alt: "bottom right bracket",
                        width: 48,
                        height: 48,
                        className:
                          "absolute -right-4 -bottom-4 duration-200 group-hover:right-2 group-hover:bottom-2",
                        src: "/images/bottom-right-bracket.svg",
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "absolute bottom-0 left-0 bg-teal-500 px-5 pt-2 pb-1.5 text-center text-sm font-bold tracking-widest text-white uppercase",
                        children:
                          null == (p = g.category) || null == (m = p.fields)
                            ? void 0
                            : m.name,
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className:
                      "relative flex min-h-[10rem] grow flex-col justify-between overflow-hidden py-5 pr-12 pl-5 duration-200",
                    children: [
                      (0, s.jsx)("h3", {
                        className: "text-2xl font-bold",
                        children: g.title.toString(),
                      }),
                      (0, s.jsx)("p", {
                        className: "mt-4 font-normal text-gray-500",
                        children: (0, s.jsx)("time", {
                          dateTime: g.publishDate,
                          children: (0, c.Yq)(g.publishDate),
                        }),
                      }),
                      (0, s.jsx)(r(), {
                        alt: "desktop compass",
                        width: 232,
                        height: 232,
                        className:
                          "absolute -right-16 -bottom-24 hidden opacity-0 duration-200 group-hover:-right-12 group-hover:-bottom-20 group-hover:opacity-50 lg:block",
                        src: "/images/compass.webp",
                      }),
                      (0, s.jsx)(r(), {
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
          ((d = (u.then ? (await u)() : u)[0]), a());
        } catch (e) {
          a(e);
        }
      });
    },
    28092: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => d });
      var a = l(2183),
        s = l(96006),
        i = l.n(s),
        r = l(94536),
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
      function c(e) {
        let { disableSwipe: t, selectedImageIndex: l } = e,
          a = (0, r.Mn)();
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
            setSelectedImageIndex: s,
            clipOverflow: i = !1,
            disableArrows: d = !1,
            disableSwipe: m = !1,
          } = e,
          p = o(),
          [g, x] = (0, n.useState)(null),
          f = (e) => {
            let l = e;
            (l >= t.length && (l = t.length - 1),
              l < 0 && (l = 0),
              s(l),
              null == g || g.slideTo(l));
          };
        return (
          (0, n.useEffect)(() => {
            (null == g ? void 0 : g.activeIndex) != l &&
              (null == g || g.slideTo(l));
          }, [l]),
          (0, a.jsxs)("div", {
            className: "relative w-full",
            children: [
              (0, a.jsx)("div", {
                className: i ? "overflow-hidden p-2" : "",
                children: (0, a.jsxs)(r.RC, {
                  spaceBetween: 16,
                  autoHeight: !0,
                  slidesPerView: "auto",
                  className: "swiper-show-overflow relative flex ",
                  onSwiper: (e) => x(e),
                  onSlideChange: (e) => f(e.activeIndex),
                  children: [
                    (0, a.jsx)(c, { disableSwipe: m, selectedImageIndex: l }),
                    t.map((e, t) =>
                      e
                        ? (0, a.jsx)(
                            r.qr,
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
                        r.qr,
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
                    (0, a.jsx)(h, { onClick: () => f(l - 1) }),
                    (0, a.jsx)(h, { onClick: () => f(l + 1), isRight: !0 }),
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
            isActive: s = !1,
            onClick: r,
            isVideo: n = !1,
          } = e,
          c = o();
        return (0, a.jsxs)("div", {
          className: "relative aspect-video shrink-0 overflow-visible",
          style: { width: c },
          children: [
            (0, a.jsx)(i(), {
              fill: !0,
              alt: null != t ? t : "",
              src: null != l ? l : "",
              priority: !0,
              sizes: "(max-width: 768px) 25vw, (max-width: 1200px) 20vw, 15vw",
              className:
                "cursor-pointer object-cover object-center transition-all ".concat(
                  s ? "" : "brightness-[0.6] hover:brightness-100",
                ),
              onClick: r,
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
            s &&
              (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(i(), {
                    height: 26,
                    width: 26,
                    alt: "Top left corner",
                    src: "/images/small-top-left-bracket.svg",
                    className: "absolute -left-1.5 -top-1.5",
                  }),
                  (0, a.jsx)(i(), {
                    height: 26,
                    width: 26,
                    alt: "Top right corner",
                    src: "/images/small-top-right-bracket.svg",
                    className: "absolute -right-1.5 -top-1.5",
                  }),
                  (0, a.jsx)(i(), {
                    height: 26,
                    width: 26,
                    alt: "Bottom left corner",
                    src: "/images/small-bottom-left-bracket.svg",
                    className: "absolute -bottom-1.5 -left-1.5",
                  }),
                  (0, a.jsx)(i(), {
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
      function h(e) {
        let { isRight: t = !1, onClick: l } = e;
        return (0, a.jsx)(i(), {
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
      let s =
          /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,
        i = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,
        r = /\.(m3u8)($|\?)/i,
        n = /\.(mpd)($|\?)/i,
        o = /stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,
        c =
          /(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,
        d = /vimeo\.com\/(?!progressive_redirect).+/,
        u =
          /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,
        h = /open\.spotify\.com\/(\w+)\/(\w+)/i,
        m =
          /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+|(videos?\/|\?video=)\d+)($|\?)/,
        p =
          /tiktok\.com\/(?:player\/v1\/|share\/video\/|@[^/]+\/video\/)([0-9]+)/,
        g = (e, t) => {
          if (Array.isArray(e)) {
            for (let l of e)
              if (("string" == typeof l && g(l, t)) || g(l.src, t)) return !0;
            return !1;
          }
          return t(e);
        },
        x = {
          html: (e) => g(e, (e) => s.test(e) || i.test(e)),
          hls: (e) => g(e, (e) => r.test(e)),
          dash: (e) => g(e, (e) => n.test(e)),
          mux: (e) => o.test(e),
          youtube: (e) => c.test(e),
          vimeo: (e) => d.test(e) && !i.test(e) && !r.test(e),
          wistia: (e) => u.test(e),
          spotify: (e) => h.test(e),
          twitch: (e) => m.test(e),
          tiktok: (e) => p.test(e),
        },
        f = a.forwardRef((e, t) => {
          let l = s.test(`${e.src}`) ? "audio" : "video";
          return a.createElement(l, { ...e, ref: t }, e.children);
        }),
        w = [
          {
            key: "hls",
            name: "hls.js",
            canPlay: x.hls,
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
            canPlay: x.dash,
            canEnablePIP: () => !0,
            player: (0, a.lazy)(() =>
              Promise.all([l.e(9629), l.e(6395)]).then(l.bind(l, 85490)),
            ),
          },
          {
            key: "mux",
            name: "Mux",
            canPlay: x.mux,
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
            canPlay: x.youtube,
            player: (0, a.lazy)(() => l.e(8446).then(l.bind(l, 28439))),
          },
          {
            key: "vimeo",
            name: "Vimeo",
            canPlay: x.vimeo,
            player: (0, a.lazy)(() => l.e(6173).then(l.bind(l, 51524))),
          },
          {
            key: "wistia",
            name: "Wistia",
            canPlay: x.wistia,
            canEnablePIP: () => !0,
            player: (0, a.lazy)(() => l.e(9340).then(l.bind(l, 88889))),
          },
          {
            key: "spotify",
            name: "Spotify",
            canPlay: x.spotify,
            canEnablePIP: () => !1,
            player: (0, a.lazy)(() => l.e(2771).then(l.bind(l, 25666))),
          },
          {
            key: "twitch",
            name: "Twitch",
            canPlay: x.twitch,
            canEnablePIP: () => !1,
            player: (0, a.lazy)(() => l.e(2042).then(l.bind(l, 63570))),
          },
          {
            key: "tiktok",
            name: "TikTok",
            canPlay: x.tiktok,
            canEnablePIP: () => !1,
            player: (0, a.lazy)(() => l.e(8085).then(l.bind(l, 72287))),
          },
          {
            key: "html",
            name: "html",
            canPlay: x.html,
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
          let { playing: l, pip: s } = e,
            i = e.activePlayer,
            r = (0, a.useRef)(null),
            n = (0, a.useRef)(!0);
          if (
            ((0, a.useEffect)(() => {
              var t, a;
              r.current &&
                (r.current.paused && !0 === l && r.current.play(),
                r.current.paused || !1 !== l || r.current.pause(),
                (r.current.playbackRate = null != (t = e.playbackRate) ? t : 1),
                (r.current.volume = null != (a = e.volume) ? a : 1));
            }),
            (0, a.useEffect)(() => {
              var e, t, l, a, i;
              if (r.current && globalThis.document) {
                if (s && !document.pictureInPictureElement)
                  try {
                    null == (t = (e = r.current).requestPictureInPicture) ||
                      t.call(e);
                  } catch (e) {}
                if (!s && document.pictureInPictureElement)
                  try {
                    (null == (a = (l = r.current).exitPictureInPicture) ||
                      a.call(l),
                      null == (i = document.exitPictureInPicture) ||
                        i.call(document));
                  } catch (e) {}
              }
            }, [s]),
            !i)
          )
            return null;
          let o = {},
            c = ["onReady", "onStart"];
          for (let t in e)
            t.startsWith("on") && !c.includes(t) && (o[t] = e[t]);
          return a.createElement(
            i,
            {
              ...o,
              style: e.style,
              className: e.className,
              slot: e.slot,
              ref: (0, a.useCallback)(
                (e) => {
                  ((r.current = e),
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
        N = ({ children: e }) => e,
        k = w[w.length - 1];
      var P = ((e, t) => {
        let l = a.forwardRef((l, s) => {
          let i = { ...v, ...l },
            {
              src: r,
              slot: n,
              className: o,
              style: c,
              width: d,
              height: u,
              fallback: h,
              wrapper: m,
            } = i,
            [p, g] = (0, a.useState)(!!i.light);
          (0, a.useEffect)(() => {
            i.light ? g(!0) : g(!1);
          }, [i.light]);
          let x = (e) => {
              var t;
              (g(!1), null == (t = i.onClickPreview) || t.call(i, e));
            },
            f = null == m ? N : m,
            w = !1 === h ? N : a.Suspense;
          return a.createElement(
            f,
            { slot: n, className: o, style: { width: d, height: u, ...c } },
            a.createElement(
              w,
              { fallback: h },
              p
                ? ((e) => {
                    if (!e) return null;
                    let {
                      light: t,
                      playIcon: l,
                      previewTabIndex: s,
                      oEmbedUrl: r,
                      previewAriaLabel: n,
                    } = i;
                    return a.createElement(y, {
                      src: e,
                      light: t,
                      playIcon: l,
                      previewTabIndex: s,
                      previewAriaLabel: n,
                      oEmbedUrl: r,
                      onClickPreview: x,
                    });
                  })(r)
                : ((l) => {
                    var r, c;
                    let d = ((l) => {
                      for (let t of [...j, ...e])
                        if (l && t.canPlay(l)) return t;
                      return t || null;
                    })(l);
                    if (!d) return null;
                    let { style: u, width: h, height: m, wrapper: p } = i,
                      g = null == (r = i.config) ? void 0 : r[d.key];
                    return a.createElement(b, {
                      ...i,
                      ref: s,
                      activePlayer: null != (c = d.player) ? c : d,
                      slot: p ? void 0 : n,
                      className: p ? void 0 : o,
                      style: p
                        ? { display: "block", width: "100%", height: "100%" }
                        : { display: "block", width: h, height: m, ...u },
                      config: g,
                    });
                  })(r),
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
      })(w, k);
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
          (l.r(t), l.d(t, { __N_SSG: () => w, default: () => v }));
          var s = l(2183),
            i = l(95216),
            r = l(72962),
            n = l(31026),
            o = l(75894),
            c = l(13544),
            d = l(72327),
            u = l(14623),
            h = l.n(u),
            m = l(71429),
            p = l(92446),
            g = l(4243),
            x = l(2371),
            f = e([i, r, o, d, p, g]);
          [i, r, o, d, p, g] = f.then ? (await f)() : f;
          var w = !0;
          function v(e) {
            var t, l, a, u, f, w;
            let {
                product: v,
                relatedArticles: b,
                websiteSingleton: y,
                navItems: j,
                footerSocialLinks: N,
                surveys: k,
                signUpBanner: P,
              } = e,
              E = v.shortDescription || "",
              I = (
                null == (a = v.titleLogo) ||
                null == (l = a.fields) ||
                null == (t = l.file)
                  ? void 0
                  : t.url
              )
                ? (0, p._c)(v.titleLogo.fields.file.url)
                : "".concat(x.W, "/images/Tomb-Raider-Opengraph.png");
            return (0, s.jsxs)("div", {
              className: "relative",
              children: [
                (0, s.jsxs)(h(), {
                  children: [
                    (0, s.jsx)("title", {
                      children: "Tomb Raider | ".concat(v.title),
                    }),
                    (0, s.jsx)(
                      "meta",
                      {
                        name: "description",
                        content: E || "Learn more about ".concat(v.title),
                      },
                      "description",
                    ),
                    (0, s.jsx)(
                      "meta",
                      {
                        name: "keywords",
                        content: "Tomb Raider, "
                          .concat(v.title, ", ")
                          .concat(
                            (null == (f = v.category) || null == (u = f.fields)
                              ? void 0
                              : u.name) || "",
                            ", video games, adventure",
                          ),
                      },
                      "keywords",
                    ),
                    (0, s.jsx)(
                      "meta",
                      {
                        property: "og:title",
                        content: "Tomb Raider | ".concat(v.title),
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
                      { property: "og:image", content: I },
                      "og:image",
                    ),
                    (0, s.jsx)(
                      "meta",
                      {
                        property: "og:description",
                        content: E || "Learn more about ".concat(v.title),
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
                        content: "Tomb Raider | ".concat(v.title),
                      },
                      "twitter:title",
                    ),
                    (0, s.jsx)(
                      "meta",
                      {
                        name: "twitter:description",
                        content: E || "Learn more about ".concat(v.title),
                      },
                      "twitter:description",
                    ),
                    (0, s.jsx)(
                      "meta",
                      { name: "twitter:image", content: I },
                      "twitter:image",
                    ),
                  ],
                }),
                (null == (w = v.category) ? void 0 : w.fields.slug) ===
                  "games" && (0, s.jsx)(m.A, { data: (0, g.Om)(v) }),
                (0, s.jsx)(i.Ay, { surveys: k, navItems: j, signUpBanner: P }),
                (0, s.jsx)(r.A, { product: v, websiteSingleton: y }),
                b.length > 0 &&
                  (0, s.jsxs)(c.A, {
                    className: "text-black",
                    children: [
                      (0, s.jsx)("div", {
                        className: "4xl:py-24 py-5 lg:py-16 xl:py-20",
                      }),
                      (0, s.jsx)(d.A, { articles: b, disableButton: !0 }),
                    ],
                  }),
                (0, s.jsx)(n.A, { websiteSingleton: y }),
                (0, s.jsx)(o.A, {
                  websiteSingleton: y,
                  navItems: j,
                  footerSocialLinks: N,
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
          var s = l(2183),
            i = l(96006),
            r = l.n(i),
            n = l(92446),
            o = l(7345),
            c = e([n]);
          function d(e) {
            var t, l, a, i, c, d;
            let { ctaButton: u, url: h } = e,
              m = (null == u ? void 0 : u.fields.label)
                ? u.fields.label
                    .trim()
                    .toLowerCase()
                    .replace(/\s/g, "-")
                    .replace(/[^a-zA-Z0-9]/g, "-")
                : "";
            return (0, s.jsxs)(o.A, {
              href: h,
              className: "".concat(
                m,
                " flex flex-row flex-nowrap gap-x-2 rounded-lg border-2 border-white/20 px-3 py-1.5 duration-200 hover:canhover:bg-white/20",
              ),
              children: [
                (null == u ||
                null == (l = u.fields.icon) ||
                null == (t = l.fields.file)
                  ? void 0
                  : t.url) &&
                  (0, s.jsx)(r(), {
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
                        null == (c = u.fields.icon) ||
                        null == (i = c.fields.file)
                        ? void 0
                        : i.url,
                    ),
                  }),
                null == u ? void 0 : u.fields.label,
              ],
            });
          }
          ((n = (c.then ? (await c)() : c)[0]), a());
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
          var s = l(2183),
            i = l(96006),
            r = l.n(i),
            n = l(16739),
            o = l(36439),
            c = l(15711),
            d = l(11677),
            u = l.n(d),
            h = l(94536),
            m = e([n]);
          function p(e) {
            let {
                articles: t,
                headingTitle: l = "Related Articles",
                disableButton: a = !1,
                buttonTitle: i = "View All",
                isHome: d,
              } = e,
              [m, p] = (0, o.useState)(null);
            return (0, s.jsxs)("div", {
              className:
                "flex w-full flex-col items-stretch overflow-hidden py-8",
              children: [
                (0, s.jsxs)("div", {
                  className: "lg:pb-".concat(
                    d ? 12 : 16,
                    " flex w-full flex-col flex-wrap items-center justify-between px-8 pb-8 lg:flex-row lg:px-16",
                  ),
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
                              children: i,
                            }),
                          }),
                      ],
                    }),
                    t.length > 0 &&
                      (0, s.jsxs)("div", {
                        className: "hidden gap-x-2 lg:flex",
                        children: [
                          (0, s.jsx)(r(), {
                            width: 48,
                            height: 48,
                            alt: "Left arrow",
                            src: "/images/arrow-button-left.svg",
                            className: "mr-2 cursor-pointer",
                            onClick: () => (null == m ? void 0 : m.slidePrev()),
                          }),
                          (0, s.jsx)(r(), {
                            width: 48,
                            height: 48,
                            alt: "Right arrow",
                            onClick: () => (null == m ? void 0 : m.slideNext()),
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
                      children: (0, s.jsx)(h.RC, {
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
                            h.qr,
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
          ((n = (m.then ? (await m)() : m)[0]), a());
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
          var s = l(2183),
            i = l(96006),
            r = l.n(i),
            n = l(36439),
            o = l(52464),
            c = l(40453),
            d = l(65035),
            u = l(28092),
            h = l(80707),
            m = l.n(h),
            p = l(43699),
            g = l(92446),
            x = l(46956),
            f = l(40235),
            w = l(94734),
            v = l(81219),
            b = e([d, g]);
          function y(e) {
            var t;
            let { product: l, websiteSingleton: a } = e,
              [i, r] = (0, n.useState)(0);
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
                    (0, s.jsx)(k, {
                      images: null != (t = l.galleryEntries) ? t : [],
                      selectedImageIndex: i,
                      setSelectedImageIndex: r,
                    }),
                    (0, s.jsx)(N, { product: l, websiteSingleton: a }),
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
                        children: (0, s.jsx)(r(), {
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
                          (0, s.jsx)(r(), {
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
          function N(e) {
            var t, l, a, i;
            let { product: u, websiteSingleton: h } = e,
              [p, g] = (0, n.useState)(!1),
              [w, b] = (0, n.useState)(!1),
              y = (0, n.useRef)(null);
            return (
              (0, n.useEffect)(() => {
                let e = () => {
                    !w &&
                      y.current &&
                      g(y.current.scrollHeight <= y.current.clientHeight);
                  },
                  t = new ResizeObserver(e);
                return (
                  y.current && (t.observe(y.current), e()),
                  () => {
                    y.current && t.unobserve(y.current);
                  }
                );
              }, [u.description, w]),
              (0, s.jsxs)("div", {
                className: "mx-auto lg:mx-0 lg:max-w-xl",
                children: [
                  u.titleLogo &&
                    (0, s.jsx)("div", {
                      className: "relative h-40 w-full",
                      children: (0, s.jsx)(r(), {
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
                    (0, s.jsx)("h1", {
                      className:
                        "hidden text-3xl leading-[1.1] font-medium tracking-[-0.8px] lg:text-5xl",
                      children: u.title,
                    }),
                  (0, s.jsx)("div", { className: "pt-8" }),
                  u.hideSocialSharingButtons
                    ? null
                    : (0, s.jsx)(v.A, { white: !0, title: u.title }),
                  (0, s.jsx)("div", { className: "pb-4" }),
                  (0, s.jsx)("div", {
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
                    className: (0, o.cn)(
                      "max-h-60 overflow-hidden",
                      w && "max-h-full",
                    ),
                    children: (0, c.i)(u.description, {
                      renderNode: {
                        [f.nA.PARAGRAPH]: (e, t) =>
                          (0, s.jsx)("p", {
                            className: "mb-4 last:mb-0",
                            children: t,
                          }),
                      },
                    }),
                  }),
                  !p &&
                    (0, s.jsx)("button", {
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
                  m().compact(null != (a = u.ctaButtons) ? a : []).length > 0 &&
                    (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)("div", { className: "pt-10" }),
                        (0, s.jsx)("p", {
                          children: u.ctaSectionLabel
                            ? "".concat(u.ctaSectionLabel, ":")
                            : "Where to Purchase:",
                        }),
                        (0, s.jsx)("div", { className: "pt-3" }),
                        (0, s.jsx)("div", {
                          className: "flex flex-row flex-wrap gap-2",
                          children: m()
                            .compact(null != (i = u.ctaButtons) ? i : [])
                            .map((e) =>
                              (0, s.jsx)(d.A, { ...e.fields }, e.sys.id),
                            ),
                        }),
                      ],
                    }),
                  u.esrbRating &&
                    (0, s.jsxs)("div", {
                      className: "flex items-center gap-6 pt-10",
                      children: [
                        (0, s.jsx)("div", {
                          className: "flex-shrink-0",
                          children: (0, s.jsx)(r(), {
                            src: "/images/esrb/".concat(u.esrbRating, ".svg"),
                            alt: "ESRB Rating: ".concat(u.esrbRating),
                            width: 80,
                            height: 120,
                          }),
                        }),
                        u.esrbContentDescriptors &&
                          u.esrbContentDescriptors.length > 0 &&
                          (0, s.jsx)("div", {
                            className: "flex flex-col gap-1",
                            children: u.esrbContentDescriptors.map((e) =>
                              (0, s.jsx)("p", { children: e }, e),
                            ),
                          }),
                      ],
                    }),
                  (0, s.jsx)("div", {
                    className: "grid max-w-xs grid-cols-2 gap-y-2 pt-10",
                    children: [
                      {
                        label: "".concat(h.productReleaseDateLabel, ":"),
                        value: (0, x.Yq)(u.releaseDate),
                      },
                      {
                        label: "".concat(h.productManufacturerLabel, ":"),
                        value: u.manufacturer,
                      },
                      {
                        label: "".concat(h.productPublisherLabel, ":"),
                        value: u.publisher,
                      },
                      {
                        label: "".concat(h.productPartnerLabel, ":"),
                        value: u.partner,
                      },
                      {
                        label: "".concat(h.productCallOutLabel, ":"),
                        value: u.callOut,
                      },
                    ].map((e) => {
                      let { label: t, value: l } = e;
                      return (
                        l &&
                        (0, s.jsxs)(
                          n.Fragment,
                          {
                            children: [
                              (0, s.jsx)("p", { children: t }),
                              (0, s.jsx)("p", { children: l }),
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
          function k(e) {
            let {
                images: t,
                selectedImageIndex: l,
                setSelectedImageIndex: a,
              } = e,
              [i, c] = (0, n.useState)(!1);
            (0, n.useEffect)(() => {
              void 0 !== window && c(!0);
            }, []);
            let d = (0, n.useRef)(null);
            return (
              (0, n.useEffect)(() => {
                d.current && (d.current.currentTime = 0);
              }, [l, d]),
              (0, s.jsxs)("div", {
                className:
                  "mx-auto flex w-full grow flex-col gap-y-6 lg:mx-0 lg:max-w-xl 2xl:max-w-4xl",
                children: [
                  (0, s.jsx)("div", {
                    className: "relative aspect-video grow",
                    children: t.map((e, t) => {
                      var a, c, u, h;
                      let m = !!(null == e ? void 0 : e.fields.videoUrl),
                        x = t === l;
                      return (0, s.jsx)(
                        n.Fragment,
                        {
                          children: m
                            ? i &&
                              (0, s.jsx)(p.A, {
                                ref: d,
                                src: null == e ? void 0 : e.fields.videoUrl,
                                controls: !0,
                                width: "100%",
                                height: "100%",
                                playing: m && i && x,
                                style: { display: x ? "block" : "none" },
                              })
                            : (0, s.jsx)(r(), {
                                fill: !0,
                                priority: !0,
                                className: (0, o.cn)(
                                  "object-contain",
                                  x ? "block" : "hidden",
                                ),
                                alt:
                                  null !=
                                  (h =
                                    null == e || null == (a = e.fields.image)
                                      ? void 0
                                      : a.fields.description)
                                    ? h
                                    : "",
                                src: (0, g._c)(
                                  null == e ||
                                    null == (u = e.fields.image) ||
                                    null == (c = u.fields.file)
                                    ? void 0
                                    : c.url,
                                ),
                              }),
                        },
                        t,
                      );
                    }),
                  }),
                  (0, s.jsx)(u.A, {
                    images: t.map((e, t) => (0, g.pO)(e, t)),
                    selectedImageIndex: l,
                    setSelectedImageIndex: a,
                    clipOverflow: !0,
                  }),
                ],
              })
            );
          }
          (([d, g] = b.then ? (await b)() : b), a());
        } catch (e) {
          a(e);
        }
      });
    },
    81219: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => o });
      var a = l(2183);
      l(36439);
      var s = l(96006),
        i = l.n(s),
        r = l(8906),
        n = l(77752);
      function o(e) {
        let { title: t, white: l } = e,
          { addAlert: s } = (0, n.Z)();
        return (0, a.jsxs)("div", {
          className: "flex flex-wrap items-center gap-x-2",
          children: [
            (0, a.jsx)(r.uI, {
              url: window.location.href,
              children: (0, a.jsx)(i(), {
                width: 20,
                height: 20,
                src: "/images/social/logo-fb-simple.svg",
                alt: "share to Facebook",
                className: "article-facebook ".concat(l ? "invert" : void 0),
              }),
            }),
            (0, a.jsx)(r.r6, {
              title: t,
              url: window.location.href,
              children: (0, a.jsx)(i(), {
                width: 20,
                height: 20,
                src: "/images/social/logo-x.svg",
                alt: "share to X",
                className: "article-x ".concat(l ? "invert" : void 0),
              }),
            }),
            (0, a.jsx)(i(), {
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
            (0, a.jsx)(i(), {
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
              className: "article-link cursor-pointer ".concat(
                l ? "invert" : void 0,
              ),
            }),
          ],
        });
      }
    },
    94734: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => r });
      var a = l(2183),
        s = l(96006),
        i = l.n(s);
      function r() {
        return (0, a.jsx)("div", {
          className:
            "pointer-events-none absolute bottom-0 left-0 w-full translate-y-1/4",
          children: (0, a.jsx)(i(), {
            width: 1920,
            height: 483,
            className: "w-full object-cover object-top",
            alt: "Hardwood transition",
            src: "/images/hero-transition(tinyfied).webp",
          }),
        });
      }
    },
  },
  (e) => {
    (e.O(
      0,
      [
        9950, 6006, 1433, 1329, 1089, 3492, 8906, 5216, 2446, 7137, 636, 6593,
        8792,
      ],
      () => e((e.s = 58502)),
    ),
      (_N_E = e.O()));
  },
]);
