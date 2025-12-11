(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [425],
  {
    83670: function (e, t, l) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/products/[category]/[title]",
        function () {
          return l(58162);
        },
      ]);
    },
    76817: function (e, t, l) {
      "use strict";
      l.a(e, async function (e, i) {
        try {
          l.d(t, {
            Z: function () {
              return CtaButton;
            },
          });
          var s = l(97458),
            n = l(47681),
            a = l.n(n),
            r = l(91806),
            o = l(7365),
            c = e([r]);
          function CtaButton(e) {
            var t, l, i, n, c, d;
            let { ctaButton: u, url: h } = e,
              x = (null == u ? void 0 : u.fields.label)
                ? (function (e) {
                    let t = e.trim().toLowerCase().replace(/\s/g, "-"),
                      l = t.replace(/[^a-zA-Z0-9]/g, "-");
                    return l;
                  })(u.fields.label)
                : "";
            return (0, s.jsxs)(o.Z, {
              href: h,
              className: "".concat(
                x,
                " flex flex-row flex-nowrap gap-x-2 rounded-lg border-2 border-white/20 px-3 py-1.5 duration-200 hover:canhover:bg-white/20",
              ),
              children: [
                (null == u
                  ? void 0
                  : null === (l = u.fields.icon) || void 0 === l
                    ? void 0
                    : null === (t = l.fields.file) || void 0 === t
                      ? void 0
                      : t.url) &&
                  (0, s.jsx)(a(), {
                    width: 16,
                    height: 16,
                    alt:
                      null !==
                        (d =
                          null == u
                            ? void 0
                            : null === (i = u.fields.icon) || void 0 === i
                              ? void 0
                              : i.fields.description) && void 0 !== d
                        ? d
                        : null == u
                          ? void 0
                          : u.fields.label,
                    src: (0, r.Wx)(
                      null == u
                        ? void 0
                        : null === (c = u.fields.icon) || void 0 === c
                          ? void 0
                          : null === (n = c.fields.file) || void 0 === n
                            ? void 0
                            : n.url,
                    ),
                  }),
                null == u ? void 0 : u.fields.label,
              ],
            });
          }
          ((r = (c.then ? (await c)() : c)[0]), i());
        } catch (e) {
          i(e);
        }
      });
    },
    46917: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return GalleryImageCarousel;
        },
      });
      var i = l(97458),
        s = l(47681),
        n = l.n(s),
        a = l(99288),
        r = l(52983);
      function useThumbnailWidth() {
        let [e, t] = (0, r.useState)(230);
        return (
          (0, r.useEffect)(() => {
            let handleResize = () => {
              if (!window) return;
              let e = window.innerWidth;
              t(e < 1024 ? 130 : 230);
            };
            return (
              window.addEventListener("resize", handleResize),
              handleResize(),
              () => {
                window.removeEventListener("resize", handleResize);
              }
            );
          }, []),
          e
        );
      }
      function SwiperControlHook(e) {
        let { disableSwipe: t, selectedImageIndex: l } = e,
          i = (0, a.oc)();
        return (
          (0, r.useEffect)(() => {
            i.allowTouchMove = !t;
          }, [t]),
          (0, r.useEffect)(() => {
            i.wrapperEl &&
              (t
                ? i.wrapperEl.classList.add("disabled")
                : i.wrapperEl.classList.remove("disabled"));
          }, [t, l]),
          null
        );
      }
      function GalleryImageCarousel(e) {
        let {
            images: t,
            selectedImageIndex: l,
            setSelectedImageIndex: s,
            clipOverflow: n = !1,
            disableArrows: o = !1,
            disableSwipe: c = !1,
          } = e,
          d = useThumbnailWidth(),
          [u, h] = (0, r.useState)(null),
          changeIndex = (e) => {
            let l = e;
            (l >= t.length && (l = t.length - 1),
              l < 0 && (l = 0),
              s(l),
              null == u || u.slideTo(l));
          };
        return (
          (0, r.useEffect)(() => {
            (null == u ? void 0 : u.activeIndex) != l &&
              (null == u || u.slideTo(l));
          }, [l]),
          (0, i.jsxs)("div", {
            className: "relative w-full",
            children: [
              (0, i.jsx)("div", {
                className: n ? "overflow-hidden p-2" : "",
                children: (0, i.jsxs)(a.tq, {
                  spaceBetween: 16,
                  autoHeight: !0,
                  slidesPerView: "auto",
                  className: "swiper-show-overflow relative flex ",
                  onSwiper: (e) => h(e),
                  onSlideChange: (e) => changeIndex(e.activeIndex),
                  children: [
                    (0, i.jsx)(SwiperControlHook, {
                      disableSwipe: c,
                      selectedImageIndex: l,
                    }),
                    t.map((e, t) =>
                      e
                        ? (0, i.jsx)(
                            a.o5,
                            {
                              className: "relative max-w-none shrink-0",
                              style: { width: d },
                              children: (0, i.jsx)(GalleryThumbnail, {
                                isActive: l === t,
                                altText: e.alt,
                                url: e.url,
                                onClick: () => changeIndex(t),
                                isVideo: e.isVideo,
                              }),
                            },
                            e.id,
                          )
                        : null,
                    ),
                    Array.from({ length: 10 }, (e, t) =>
                      (0, i.jsx)(
                        a.o5,
                        {
                          className: "relative max-w-none shrink-0",
                          style: { width: d },
                        },
                        t,
                      ),
                    ),
                  ],
                }),
              }),
              !o &&
                (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(GalleryIconButtons, {
                      onClick: () => changeIndex(l - 1),
                    }),
                    (0, i.jsx)(GalleryIconButtons, {
                      onClick: () => changeIndex(l + 1),
                      isRight: !0,
                    }),
                  ],
                }),
            ],
          })
        );
      }
      function GalleryThumbnail(e) {
        let {
            altText: t,
            url: l,
            isActive: s = !1,
            onClick: a,
            isVideo: r = !1,
          } = e,
          o = useThumbnailWidth();
        return (0, i.jsxs)("div", {
          className: "relative aspect-video shrink-0 overflow-visible",
          style: { width: o },
          children: [
            (0, i.jsx)(n(), {
              fill: !0,
              alt: null != t ? t : "",
              src: null != l ? l : "",
              priority: !0,
              sizes: "(max-width: 768px) 25vw, (max-width: 1200px) 20vw, 15vw",
              className:
                "cursor-pointer object-cover object-center transition-all ".concat(
                  s ? "" : "brightness-[0.6] hover:brightness-100",
                ),
              onClick: a,
            }),
            r &&
              (0, i.jsx)("div", {
                className:
                  "pointer-events-none absolute inset-0 flex items-center justify-center",
                children: (0, i.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "40",
                  height: "40",
                  viewBox: "0 0 40 40",
                  className: "bg-[#272727]/75",
                  children: (0, i.jsx)("g", {
                    children: (0, i.jsx)("path", {
                      d: "M13.3335 31.5833V8.25L31.6668 19.9167L13.3335 31.5833Z",
                      fill: "#FCF9ED",
                    }),
                  }),
                }),
              }),
            s &&
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(n(), {
                    height: 26,
                    width: 26,
                    alt: "Top left corner",
                    src: "/images/small-top-left-bracket.svg",
                    className: "absolute -left-1.5 -top-1.5",
                  }),
                  (0, i.jsx)(n(), {
                    height: 26,
                    width: 26,
                    alt: "Top right corner",
                    src: "/images/small-top-right-bracket.svg",
                    className: "absolute -right-1.5 -top-1.5",
                  }),
                  (0, i.jsx)(n(), {
                    height: 26,
                    width: 26,
                    alt: "Bottom left corner",
                    src: "/images/small-bottom-left-bracket.svg",
                    className: "absolute -bottom-1.5 -left-1.5",
                  }),
                  (0, i.jsx)(n(), {
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
      function GalleryIconButtons(e) {
        let { isRight: t = !1, onClick: l } = e;
        return (0, i.jsx)(n(), {
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
    57187: function (e, t, l) {
      "use strict";
      l.a(e, async function (e, i) {
        try {
          l.d(t, {
            Z: function () {
              return HorizontalArticleList;
            },
          });
          var s = l(97458),
            n = l(47681),
            a = l.n(n),
            r = l(17789),
            o = l(52983),
            c = l(75443),
            d = l(10821),
            u = l.n(d),
            h = l(99288),
            x = e([r]);
          function HorizontalArticleList(e) {
            let {
                articles: t,
                headingTitle: l = "Related Articles",
                disableButton: i = !1,
                buttonTitle: n = "View All",
                isHome: d,
              } = e,
              [x, m] = (0, o.useState)(null);
            return (0, s.jsxs)("div", {
              className:
                "flex w-full flex-col items-stretch overflow-hidden py-8",
              children: [
                (0, s.jsxs)("div", {
                  className: "lg:pb-".concat(
                    d ? 12 : 16,
                    " flex  w-full flex-col flex-wrap items-center justify-between px-8 pb-8 lg:flex-row lg:px-16",
                  ),
                  children: [
                    (0, s.jsxs)("div", {
                      className:
                        "flex flex-col items-center gap-x-8 gap-y-4 pb-4 lg:flex-row lg:pb-0",
                      children: [
                        (0, s.jsx)("p", {
                          className:
                            "text-4xl text-black sm:text-5xl lg:text-6xl",
                          children: l,
                        }),
                        !i &&
                          (0, s.jsx)(u(), {
                            href: "/news/all",
                            children: (0, s.jsx)(c.Z, {
                              variant: "dark",
                              children: n,
                            }),
                          }),
                      ],
                    }),
                    t.length > 0 &&
                      (0, s.jsxs)("div", {
                        className: "hidden gap-x-2 lg:flex",
                        children: [
                          (0, s.jsx)(a(), {
                            width: 48,
                            height: 48,
                            alt: "Left arrow",
                            src: "/images/arrow-button-left.svg",
                            className: "mr-2 cursor-pointer",
                            onClick: () => (null == x ? void 0 : x.slidePrev()),
                          }),
                          (0, s.jsx)(a(), {
                            width: 48,
                            height: 48,
                            alt: "Right arrow",
                            onClick: () => (null == x ? void 0 : x.slideNext()),
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
                      children: (0, s.jsx)(h.tq, {
                        className: "swiper-show-overflow relative flex w-full",
                        slidesPerView: 1.25,
                        centeredSlides: !0,
                        breakpoints: {
                          640: { slidesPerView: 2, centeredSlides: !1 },
                          1024: { slidesPerView: 3, centeredSlides: !1 },
                        },
                        spaceBetween: 16,
                        rewind: !0,
                        onSwiper: (e) => m(e),
                        children: t.map((e) =>
                          (0, s.jsx)(
                            h.o5,
                            {
                              className:
                                "relative !h-auto w-64 max-w-none shrink-0 overflow-visible",
                              children: (0, s.jsx)(r.Z, { item: e }),
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
          ((r = (x.then ? (await x)() : x)[0]), i());
        } catch (e) {
          i(e);
        }
      });
    },
    77: function (e, t, l) {
      "use strict";
      l.a(e, async function (e, i) {
        try {
          l.d(t, {
            Z: function () {
              return ProductsSingleItemHero;
            },
          });
          var s = l(97458),
            n = l(47681),
            a = l.n(n),
            r = l(52983),
            o = l(57865),
            c = l(15491),
            d = l(76817),
            u = l(46917),
            h = l(39378),
            x = l.n(h),
            m = l(89630),
            g = l(91806),
            p = l(69049),
            v = l(16843),
            f = l(61666),
            w = l(24673),
            b = e([d, g]);
          function ProductsSingleItemHero(e) {
            var t;
            let { product: l, websiteSingleton: i } = e,
              [n, a] = (0, r.useState)(0);
            return (0, s.jsxs)("div", {
              className: "relative z-10",
              children: [
                (0, s.jsx)(Background, {}),
                (0, s.jsxs)("div", {
                  className: (0, o.cn)(
                    "relative z-0 mx-auto overflow-hidden",
                    "max-w-xl lg:max-w-none",
                    "px-6 pb-24 pt-24 lg:px-12 lg:pb-24 lg:pt-28",
                    "flex flex-col items-start justify-center gap-12 lg:flex-row",
                  ),
                  children: [
                    (0, s.jsx)(Gallery, {
                      images:
                        null !== (t = l.galleryEntries) && void 0 !== t
                          ? t
                          : [],
                      selectedImageIndex: n,
                      setSelectedImageIndex: a,
                    }),
                    (0, s.jsx)(MainContent, {
                      product: l,
                      websiteSingleton: i,
                    }),
                  ],
                }),
              ],
            });
          }
          function Background() {
            return (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)("div", {
                  className: "absolute inset-0 -z-20 bg-black",
                  children: (0, s.jsxs)("div", {
                    className: "relative min-h-full overflow-hidden pb-24",
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "absolute bottom-0 right-0 hidden h-full w-full opacity-30 lg:block",
                        children: (0, s.jsx)(a(), {
                          width: 1274,
                          height: 892,
                          className:
                            "absolute bottom-0 right-0 w-1/2 object-contain object-right-bottom",
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
                          (0, s.jsx)(a(), {
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
                (0, s.jsx)(f.Z, {}),
              ],
            });
          }
          function MainContent(e) {
            var t, l, i, n;
            let { product: u, websiteSingleton: h } = e,
              [m, g] = (0, r.useState)(!1),
              [f, b] = (0, r.useState)(!1),
              j = (0, r.useRef)(null);
            return (
              (0, r.useEffect)(() => {
                let checkTextVisibility = () => {
                    !f &&
                      j.current &&
                      g(j.current.scrollHeight <= j.current.clientHeight);
                  },
                  e = new ResizeObserver(checkTextVisibility);
                return (
                  j.current && (e.observe(j.current), checkTextVisibility()),
                  () => {
                    j.current && e.unobserve(j.current);
                  }
                );
              }, [u.description, f]),
              (0, s.jsxs)("div", {
                className: "mx-auto lg:mx-0 lg:max-w-xl",
                children: [
                  u.titleLogo &&
                    (0, s.jsx)("div", {
                      className: "relative h-40 w-full",
                      children: (0, s.jsx)(a(), {
                        fill: !0,
                        className: "object-contain object-center",
                        alt:
                          null !== (l = u.titleLogo.fields.description) &&
                          void 0 !== l
                            ? l
                            : "",
                        src: "https:".concat(
                          null === (t = u.titleLogo.fields.file) || void 0 === t
                            ? void 0
                            : t.url,
                        ),
                      }),
                    }),
                  u.title &&
                    (0, s.jsx)("h1", {
                      className:
                        "hidden text-3xl font-medium leading-[1.1] tracking-[-0.8px] lg:text-5xl",
                      children: u.title,
                    }),
                  (0, s.jsx)("div", { className: "pt-8" }),
                  u.hideSocialSharingButtons
                    ? null
                    : (0, s.jsx)(w.Z, { white: !0, title: u.title }),
                  (0, s.jsx)("div", { className: "pb-4" }),
                  (0, s.jsx)("div", {
                    ref: j,
                    style:
                      m || f
                        ? void 0
                        : {
                            maskImage:
                              "linear-gradient(to top, transparent 0%, black 40%)",
                            WebkitMaskImage:
                              "linear-gradient(to top, transparent 0%, black 40%)",
                          },
                    className: (0, o.cn)(
                      "max-h-60 overflow-hidden",
                      f && "max-h-full",
                    ),
                    children: (0, c.h)(u.description, {
                      renderNode: {
                        [v.BLOCKS.PARAGRAPH]: (e, t) =>
                          (0, s.jsx)("p", {
                            className: "mb-4 last:mb-0",
                            children: t,
                          }),
                      },
                    }),
                  }),
                  !m &&
                    (0, s.jsx)("button", {
                      className:
                        "pt-2 font-bold text-yellow-500 hover:underline",
                      onClick: () => {
                        b((e) => {
                          let t = !e;
                          if (!t) {
                            var l, i;
                            window.scrollTo({
                              top:
                                (null !==
                                  (i =
                                    null === (l = j.current) || void 0 === l
                                      ? void 0
                                      : l.offsetTop) && void 0 !== i
                                  ? i
                                  : 0) - 124,
                            });
                          }
                          return t;
                        });
                      },
                      children: f ? "Show less" : "Show more",
                    }),
                  x().compact(
                    null !== (i = u.ctaButtons) && void 0 !== i ? i : [],
                  ).length > 0 &&
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
                          children: x()
                            .compact(
                              null !== (n = u.ctaButtons) && void 0 !== n
                                ? n
                                : [],
                            )
                            .map((e) =>
                              (0, s.jsx)(d.Z, { ...e.fields }, e.sys.id),
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
                          children: (0, s.jsx)(a(), {
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
                        value: (0, p.p6)(u.releaseDate),
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
                          r.Fragment,
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
          function Gallery(e) {
            let {
                images: t,
                selectedImageIndex: l,
                setSelectedImageIndex: i,
              } = e,
              [n, c] = (0, r.useState)(!1);
            (0, r.useEffect)(() => {
              void 0 !== window && c(!0);
            }, []);
            let d = (0, r.useRef)(null);
            return (
              (0, r.useEffect)(() => {
                d.current && d.current.seekTo(0);
              }, [l, d]),
              (0, s.jsxs)("div", {
                className:
                  "mx-auto flex w-full flex-grow flex-col gap-y-6 lg:mx-0 lg:max-w-xl 2xl:max-w-4xl",
                children: [
                  (0, s.jsx)("div", {
                    className: "relative aspect-video flex-grow",
                    children: t.map((e, t) => {
                      var i, c, u, h;
                      let x = !!(null == e ? void 0 : e.fields.videoUrl),
                        p = t === l;
                      return (0, s.jsx)(
                        r.Fragment,
                        {
                          children: x
                            ? n &&
                              (0, s.jsx)(m.Z, {
                                ref: d,
                                url: null == e ? void 0 : e.fields.videoUrl,
                                loop: !0,
                                width: "100%",
                                height: "100%",
                                controls: !1,
                                volume: 0,
                                playing: x && n && p,
                                style: { display: p ? "block" : "none" },
                              })
                            : (0, s.jsx)(a(), {
                                fill: !0,
                                className: (0, o.cn)(
                                  "object-contain",
                                  p ? "block" : "hidden",
                                ),
                                alt:
                                  null !==
                                    (h =
                                      null == e
                                        ? void 0
                                        : null === (i = e.fields.image) ||
                                            void 0 === i
                                          ? void 0
                                          : i.fields.description) &&
                                  void 0 !== h
                                    ? h
                                    : "",
                                src: (0, g.Wx)(
                                  null == e
                                    ? void 0
                                    : null === (u = e.fields.image) ||
                                        void 0 === u
                                      ? void 0
                                      : null === (c = u.fields.file) ||
                                          void 0 === c
                                        ? void 0
                                        : c.url,
                                ),
                              }),
                        },
                        t,
                      );
                    }),
                  }),
                  (0, s.jsx)(u.Z, {
                    images: t.map((e, t) => (0, g.Uj)(e, t)),
                    selectedImageIndex: l,
                    setSelectedImageIndex: i,
                    clipOverflow: !0,
                  }),
                ],
              })
            );
          }
          (([d, g] = b.then ? (await b)() : b), i());
        } catch (e) {
          i(e);
        }
      });
    },
    24673: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return SocialShareIcons;
        },
      });
      var i = l(97458);
      l(52983);
      var s = l(47681),
        n = l.n(s),
        a = l(92497),
        r = l(77765);
      function SocialShareIcons(e) {
        let { title: t, white: l } = e,
          { addAlert: s } = (0, r.Z)();
        return (0, i.jsxs)("div", {
          className: "flex flex-wrap items-center gap-x-2",
          children: [
            (0, i.jsx)(a.Dk, {
              url: window.location.href,
              children: (0, i.jsx)(n(), {
                width: 20,
                height: 20,
                src: "/images/social/logo-fb-simple.svg",
                alt: "share to Facebook",
                className: "article-facebook ".concat(l ? "invert" : void 0),
              }),
            }),
            (0, i.jsx)(a.B, {
              title: t,
              url: window.location.href,
              children: (0, i.jsx)(n(), {
                width: 20,
                height: 20,
                src: "/images/social/logo-x.svg",
                alt: "share to X",
                className: "article-x ".concat(l ? "invert" : void 0),
              }),
            }),
            (0, i.jsx)(n(), {
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
            (0, i.jsx)(n(), {
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
    58162: function (e, t, l) {
      "use strict";
      l.a(e, async function (e, i) {
        try {
          (l.r(t),
            l.d(t, {
              __N_SSG: function () {
                return g;
              },
              default: function () {
                return Title;
              },
            }));
          var s = l(97458),
            n = l(87249),
            a = l(77),
            r = l(12984),
            o = l(99915),
            c = l(20213),
            d = l(57187),
            u = l(47680),
            h = l.n(u),
            x = l(91806),
            m = e([n, a, o, d, x]);
          [n, a, o, d, x] = m.then ? (await m)() : m;
          var g = !0;
          function Title(e) {
            var t, l, i, u, m;
            let {
                product: g,
                relatedArticles: p,
                websiteSingleton: v,
                navItems: f,
                footerSocialLinks: w,
                surveys: b,
                signUpBanner: j,
              } = e,
              N = g.shortDescription || "",
              y = (
                null === (i = g.titleLogo) || void 0 === i
                  ? void 0
                  : null === (l = i.fields) || void 0 === l
                    ? void 0
                    : null === (t = l.file) || void 0 === t
                      ? void 0
                      : t.url
              )
                ? (0, x.Wx)(g.titleLogo.fields.file.url)
                : "/images/Tomb-Raider-Opengraph.png";
            return (0, s.jsxs)("div", {
              className: "relative",
              children: [
                (0, s.jsxs)(h(), {
                  children: [
                    (0, s.jsx)("title", {
                      children: "Tomb Raider | ".concat(g.title),
                    }),
                    (0, s.jsx)(
                      "meta",
                      {
                        name: "description",
                        content: N || "Learn more about ".concat(g.title),
                      },
                      "description",
                    ),
                    (0, s.jsx)(
                      "meta",
                      {
                        name: "keywords",
                        content: "Tomb Raider, "
                          .concat(g.title, ", ")
                          .concat(
                            (null === (m = g.category) || void 0 === m
                              ? void 0
                              : null === (u = m.fields) || void 0 === u
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
                        content: "Tomb Raider | ".concat(g.title),
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
                        content: N || "Learn more about ".concat(g.title),
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
                        content: "Tomb Raider | ".concat(g.title),
                      },
                      "twitter:title",
                    ),
                    (0, s.jsx)(
                      "meta",
                      {
                        name: "twitter:description",
                        content: N || "Learn more about ".concat(g.title),
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
                (0, s.jsx)(n.ZP, { surveys: b, navItems: f, signUpBanner: j }),
                (0, s.jsx)(a.Z, { product: g, websiteSingleton: v }),
                p.length > 0 &&
                  (0, s.jsxs)(c.Z, {
                    className: "text-black",
                    children: [
                      (0, s.jsx)("div", {
                        className: "py-5 lg:py-16 xl:py-20 4xl:py-24",
                      }),
                      (0, s.jsx)(d.Z, { articles: p, disableButton: !0 }),
                    ],
                  }),
                (0, s.jsx)(r.Z, { websiteSingleton: v }),
                (0, s.jsx)(o.Z, {
                  websiteSingleton: v,
                  navItems: f,
                  footerSocialLinks: w,
                }),
              ],
            });
          }
          i();
        } catch (e) {
          i(e);
        }
      });
    },
  },
  function (e) {
    (e.O(
      0,
      [46, 681, 882, 34, 658, 120, 630, 497, 249, 806, 702, 774, 888, 179],
      function () {
        return e((e.s = 83670));
      },
    ),
      (_N_E = e.O()));
  },
]);
