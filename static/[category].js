(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [708],
  {
    39943: function (e, t, l) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/products/[category]",
        function () {
          return l(7717);
        },
      ]);
    },
    7365: function (e, t, l) {
      "use strict";
      var r = l(97458),
        s = l(10821),
        i = l.n(s);
      t.Z = (e) => {
        let { href: t, children: l, className: s, ...a } = e,
          o = "string" == typeof t && t.startsWith("http");
        return o
          ? (0, r.jsx)("a", {
              href: t,
              target: "_blank",
              rel: "noopener noreferrer",
              className: s,
              ...a,
              children: l,
            })
          : (0, r.jsx)(i(), {
              legacyBehavior: !0,
              href: t,
              ...a,
              children: (0, r.jsx)("a", { className: s, children: l }),
            });
      };
    },
    52110: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return Dropdown;
        },
      });
      var r = l(97458),
        s = l(52983),
        i = l(30721),
        a = l(16719),
        o = l(95927),
        n = l(57865),
        c = l(10821),
        d = l.n(c);
      function Dropdown(e) {
        var t;
        let {
            items: l,
            selected: c,
            onSelect: u = () => {},
            placeholder: h = "Options",
            error: x,
            variant: f,
            rounded: p = !1,
          } = e,
          getValue = (e) => ("string" == typeof e ? e : e.value),
          getName = (e) => (e ? ("string" == typeof e ? e : e.name) : ""),
          handleClick = (e) => {
            u(getValue(e));
          };
        return (0, r.jsxs)(i.v, {
          as: "div",
          className: "relative inline-block w-full grow text-left",
          children: [
            (0, r.jsx)("div", {
              children: (0, r.jsxs)(i.v.Button, {
                className: (0, n.cn)(
                  "flex w-full items-center border-2 bg-white bg-opacity-20 px-3 py-4 outline-none backdrop-blur duration-200",
                  x
                    ? "border-red-500 border-opacity-40 hover:border-red-500 hover:border-opacity-70 focus:border-red-500 focus:border-opacity-70"
                    : "dark" === f
                      ? "rounded-lg border-black/20 px-5 py-3 hover:border-black/40 focus:border-black/40"
                      : "border-gray-300 border-opacity-20 hover:border-white hover:border-opacity-50 focus:border-white focus:border-opacity-100",
                  "dark" === f ? "text-black" : "text-white",
                  p && "rounded-lg",
                ),
                children: [
                  c
                    ? "string" == typeof l[0]
                      ? c
                      : null === (t = l.find((e) => e.value === c)) ||
                          void 0 === t
                        ? void 0
                        : t.name
                    : h,
                  (0, r.jsx)("div", { className: "grow" }),
                  (0, r.jsx)(o.Z, {
                    className: "".concat(
                      "dark" === f ? "text-black" : "text-yellow",
                      " -mr-1 h-6 w-6",
                    ),
                    "aria-hidden": "true",
                    color: "#E9BC6C",
                  }),
                ],
              }),
            }),
            (0, r.jsx)(a.u, {
              as: s.Fragment,
              enter: "transition ease-out duration-100",
              enterFrom: "transform opacity-0 scale-95",
              enterTo: "transform opacity-100 scale-100",
              leave: "transition ease-in duration-75",
              leaveFrom: "transform opacity-100 scale-100",
              leaveTo: "transform opacity-0 scale-95",
              children: (0, r.jsx)(i.v.Items, {
                className:
                  "absolute left-0 z-30 mt-2 max-h-60 w-full origin-top-right overflow-y-auto rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                children: (0, r.jsx)("div", {
                  className: "py-1",
                  children: l.map((e) =>
                    (0, r.jsx)(
                      i.v.Item,
                      {
                        children: (t) => {
                          let { active: l } = t;
                          return (0, r.jsx)(d(), {
                            scroll: !1,
                            href:
                              "string" != typeof e && e.href
                                ? e.href
                                : "javascript:void(0);",
                            onClick: () => handleClick(e),
                            className: (function () {
                              for (
                                var e = arguments.length, t = Array(e), l = 0;
                                l < e;
                                l++
                              )
                                t[l] = arguments[l];
                              return t.filter(Boolean).join(" ");
                            })(
                              l ? "bg-gray-100 text-gray-900" : "text-gray-700",
                              "block px-4 py-2 text-sm",
                            ),
                            children: getName(e),
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
    99915: function (e, t, l) {
      "use strict";
      l.a(e, async function (e, r) {
        try {
          l.d(t, {
            Z: function () {
              return Footer;
            },
          });
          var s = l(97458),
            i = l(47681),
            a = l.n(i),
            o = l(10821),
            n = l.n(o),
            c = l(2300),
            d = l(7365),
            u = l(91806),
            h = e([c, u]);
          function Footer(e) {
            var t, l, r;
            let { websiteSingleton: i, navItems: o, footerSocialLinks: h } = e,
              { isLoggedIn: x, shopifyUrl: f } = (0, c.S)(),
              p = o.filter(
                (e) => e.showInFooter && !(x && e.hideForLoggedInUsers),
              ),
              g = o.filter(
                (e) => e.showInSubFooter && !(x && e.hideForLoggedInUsers),
              );
            return (0, s.jsxs)("div", {
              className: "relative w-full bg-black px-8 text-white lg:px-32",
              children: [
                (0, s.jsxs)("div", {
                  className:
                    "flex flex-col items-center justify-center space-y-16 pb-16 pt-16 lg:flex-row lg:items-stretch lg:justify-between lg:space-y-0 lg:pt-32",
                  children: [
                    (0, s.jsx)(a(), {
                      src: (0, u.Wx)(
                        null === (l = i.footerLogo) || void 0 === l
                          ? void 0
                          : null === (t = l.fields.file) || void 0 === t
                            ? void 0
                            : t.url,
                      ),
                      width: 248,
                      height: 248,
                      alt: (0, u.Wx)(
                        null === (r = i.footerLogo) || void 0 === r
                          ? void 0
                          : r.fields.description,
                      ),
                      className: "h-auto w-40",
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-lg text-darkgray-500 ",
                      children: [
                        p.map((e) => {
                          let t = e.link;
                          return (
                            e.shouldReplaceWithGeneratedShopLink &&
                              f &&
                              (t = f),
                            (0, s.jsx)(
                              n(),
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
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className:
                    "flex flex-col items-center justify-center space-y-16 pb-16 lg:flex-row lg:items-stretch lg:justify-between lg:space-y-0",
                  children: [
                    (0, s.jsx)("div", {
                      className: "text-center text-darkgray-500",
                      children: i.footerCopyright,
                    }),
                    (0, s.jsx)("div", {
                      className: "flex items-center space-x-4 text-white",
                      children: h.map((e) => {
                        var t, l, r, i;
                        return (0, s.jsx)(
                          d.Z,
                          {
                            href: e.link,
                            children: (0, s.jsx)(a(), {
                              src: (0, u.Wx)(
                                null === (l = e.icon) || void 0 === l
                                  ? void 0
                                  : null === (t = l.fields.file) || void 0 === t
                                    ? void 0
                                    : t.url,
                              ),
                              alt:
                                null !==
                                  (i =
                                    null === (r = e.icon) || void 0 === r
                                      ? void 0
                                      : r.fields.description) && void 0 !== i
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
                (0, s.jsx)("div", { className: "h-[1px] bg-gray-500" }),
                (0, s.jsxs)("div", {
                  className:
                    "flew-col flex flex-col items-start justify-start gap-x-10 gap-y-10 py-12 text-gray-300 md:justify-between 2xl:flex-row ",
                  children: [
                    (0, s.jsx)("p", {
                      className:
                        "max-w-[1000px] text-center text-sm text-darkgray-300 lg:text-left",
                      children: i.footerLegalNotice,
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "flex w-full flex-wrap items-center justify-center gap-x-10 gap-y-2 text-darkgray-500 md:flex-row md:gap-x-10 md:gap-y-0 lg:w-auto lg:justify-start",
                      children: g.map((e) =>
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
          (([c, u] = h.then ? (await h)() : h), r());
        } catch (e) {
          r(e);
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
      var r = l(97458),
        s = l(47681),
        i = l.n(s),
        a = l(99288),
        o = l(52983);
      function useThumbnailWidth() {
        let [e, t] = (0, o.useState)(230);
        return (
          (0, o.useEffect)(() => {
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
          r = (0, a.oc)();
        return (
          (0, o.useEffect)(() => {
            r.allowTouchMove = !t;
          }, [t]),
          (0, o.useEffect)(() => {
            r.wrapperEl &&
              (t
                ? r.wrapperEl.classList.add("disabled")
                : r.wrapperEl.classList.remove("disabled"));
          }, [t, l]),
          null
        );
      }
      function GalleryImageCarousel(e) {
        let {
            images: t,
            selectedImageIndex: l,
            setSelectedImageIndex: s,
            clipOverflow: i = !1,
            disableArrows: n = !1,
            disableSwipe: c = !1,
          } = e,
          d = useThumbnailWidth(),
          [u, h] = (0, o.useState)(null),
          changeIndex = (e) => {
            let l = e;
            (l >= t.length && (l = t.length - 1),
              l < 0 && (l = 0),
              s(l),
              null == u || u.slideTo(l));
          };
        return (
          (0, o.useEffect)(() => {
            (null == u ? void 0 : u.activeIndex) != l &&
              (null == u || u.slideTo(l));
          }, [l]),
          (0, r.jsxs)("div", {
            className: "relative w-full",
            children: [
              (0, r.jsx)("div", {
                className: i ? "overflow-hidden p-2" : "",
                children: (0, r.jsxs)(a.tq, {
                  spaceBetween: 16,
                  autoHeight: !0,
                  slidesPerView: "auto",
                  className: "swiper-show-overflow relative flex ",
                  onSwiper: (e) => h(e),
                  onSlideChange: (e) => changeIndex(e.activeIndex),
                  children: [
                    (0, r.jsx)(SwiperControlHook, {
                      disableSwipe: c,
                      selectedImageIndex: l,
                    }),
                    t.map((e, t) =>
                      e
                        ? (0, r.jsx)(
                            a.o5,
                            {
                              className: "relative max-w-none shrink-0",
                              style: { width: d },
                              children: (0, r.jsx)(GalleryThumbnail, {
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
                      (0, r.jsx)(
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
              !n &&
                (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(GalleryIconButtons, {
                      onClick: () => changeIndex(l - 1),
                    }),
                    (0, r.jsx)(GalleryIconButtons, {
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
            isVideo: o = !1,
          } = e,
          n = useThumbnailWidth();
        return (0, r.jsxs)("div", {
          className: "relative aspect-video shrink-0 overflow-visible",
          style: { width: n },
          children: [
            (0, r.jsx)(i(), {
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
            o &&
              (0, r.jsx)("div", {
                className:
                  "pointer-events-none absolute inset-0 flex items-center justify-center",
                children: (0, r.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "40",
                  height: "40",
                  viewBox: "0 0 40 40",
                  className: "bg-[#272727]/75",
                  children: (0, r.jsx)("g", {
                    children: (0, r.jsx)("path", {
                      d: "M13.3335 31.5833V8.25L31.6668 19.9167L13.3335 31.5833Z",
                      fill: "#FCF9ED",
                    }),
                  }),
                }),
              }),
            s &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(i(), {
                    height: 26,
                    width: 26,
                    alt: "Top left corner",
                    src: "/images/small-top-left-bracket.svg",
                    className: "absolute -left-1.5 -top-1.5",
                  }),
                  (0, r.jsx)(i(), {
                    height: 26,
                    width: 26,
                    alt: "Top right corner",
                    src: "/images/small-top-right-bracket.svg",
                    className: "absolute -right-1.5 -top-1.5",
                  }),
                  (0, r.jsx)(i(), {
                    height: 26,
                    width: 26,
                    alt: "Bottom left corner",
                    src: "/images/small-bottom-left-bracket.svg",
                    className: "absolute -bottom-1.5 -left-1.5",
                  }),
                  (0, r.jsx)(i(), {
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
        return (0, r.jsx)(i(), {
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
    61666: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return HeroTransition;
        },
      });
      var r = l(97458),
        s = l(47681),
        i = l.n(s);
      function HeroTransition() {
        return (0, r.jsx)("div", {
          className:
            "pointer-events-none absolute bottom-0 left-0 w-full translate-y-1/4",
          children: (0, r.jsx)(i(), {
            width: 1920,
            height: 483,
            className: "w-full object-cover object-top",
            alt: "Hardwood transition",
            src: "/images/hero-transition(tinyfied).webp",
          }),
        });
      }
    },
    19024: function (e, t, l) {
      "use strict";
      l.a(e, async function (e, r) {
        try {
          l.d(t, {
            Z: function () {
              return HorizontalProductList;
            },
          });
          var s = l(97458),
            i = l(96061),
            a = l(52983),
            o = l(47681),
            n = l.n(o),
            c = l(69049),
            d = l(10821),
            u = l.n(d),
            h = l(75443),
            x = l(91806),
            f = l(99288),
            p = e([i, x]);
          function HorizontalProductList(e) {
            let { products: t, title: l, description: r, isHome: i } = e,
              [o, c] = (0, a.useState)(null);
            return (0, s.jsxs)("div", {
              className:
                "flex w-full flex-col items-stretch overflow-x-hidden py-10",
              children: [
                (0, s.jsxs)("div", {
                  className: i
                    ? "flex flex-col flex-wrap justify-between self-stretch px-8 pb-12 lg:flex-row lg:px-16"
                    : "flex w-full flex-col flex-wrap justify-between gap-y-8 px-6 pb-8 lg:flex-row lg:items-end lg:px-12 lg:pb-12",
                  children: [
                    i
                      ? (0, s.jsxs)("div", {
                          className:
                            "flex flex-col flex-wrap items-center gap-x-8 gap-y-4 pb-4 lg:flex-row lg:pb-0",
                          children: [
                            (0, s.jsx)("p", {
                              className:
                                "text-4xl text-black sm:text-5xl lg:text-6xl",
                              children: l,
                            }),
                            (0, s.jsx)(u(), {
                              href: "/products/games",
                              children: (0, s.jsx)(h.Z, {
                                variant: "dark",
                                children: "All Games",
                              }),
                            }),
                          ],
                        })
                      : (0, s.jsxs)("div", {
                          className:
                            "flex flex-col gap-y-4 text-center lg:gap-y-1 lg:text-left",
                          children: [
                            (0, s.jsx)("p", {
                              className:
                                "text-3xl font-medium text-black lg:text-4xl",
                              children: l,
                            }),
                            (0, s.jsx)("p", {
                              className: "text-sm",
                              children: r,
                            }),
                          ],
                        }),
                    t.length > 0 &&
                      (0, s.jsxs)("div", {
                        className: "hidden gap-x-2 lg:flex",
                        children: [
                          (0, s.jsx)(n(), {
                            width: 48,
                            height: 48,
                            alt: "Left arrow",
                            src: "/images/arrow-button-left.svg",
                            className: "mr-2 cursor-pointer",
                            onClick: () => (null == o ? void 0 : o.slidePrev()),
                          }),
                          (0, s.jsx)(n(), {
                            width: 48,
                            height: 48,
                            alt: "Right arrow",
                            onClick: () => (null == o ? void 0 : o.slideNext()),
                            src: "/images/arrow-button-right.svg",
                            className: "cursor-pointer",
                          }),
                        ],
                      }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className: "px-8 lg:px-16",
                  children: (0, s.jsx)(f.tq, {
                    className: "swiper-show-overflow relative flex w-full",
                    slidesPerView: 1.25,
                    centeredSlides: !0,
                    breakpoints: {
                      640: { slidesPerView: 3, centeredSlides: !1 },
                      1024: { slidesPerView: 5, centeredSlides: !1 },
                    },
                    spaceBetween: 16,
                    rewind: !0,
                    onSwiper: (e) => c(e),
                    children: t.map((e) =>
                      (0, s.jsx)(
                        f.o5,
                        {
                          className: "relative max-w-none shrink-0",
                          style: { width: 300 },
                          children: (0, s.jsx)(ProductItem, { product: e }),
                        },
                        e.slug,
                      ),
                    ),
                  }),
                }),
              ],
            });
          }
          function ProductItem(e) {
            var t, l, r, a, o, d, h, f;
            let { product: p } = e;
            return (0, s.jsx)("div", {
              className:
                "group aspect-[2/3] h-auto w-full cursor-pointer shadow-[0_10px_48px_-16px_rgba(0,0,0,1)]",
              children: (0, s.jsxs)(u(), {
                href: "/products/"
                  .concat(
                    null === (t = p.category) || void 0 === t
                      ? void 0
                      : t.fields.slug,
                    "/",
                  )
                  .concat(p.slug),
                children: [
                  (0, s.jsx)(n(), {
                    fill: !0,
                    alt:
                      null !==
                        (f =
                          null === (r = (0, i.U7_)(p)) || void 0 === r
                            ? void 0
                            : null === (l = r.fields.image) || void 0 === l
                              ? void 0
                              : l.fields.description) && void 0 !== f
                        ? f
                        : "",
                    src: "".concat(
                      (0, x.Wx)(
                        null === (d = (0, i.U7_)(p)) || void 0 === d
                          ? void 0
                          : null === (o = d.fields.image) || void 0 === o
                            ? void 0
                            : null === (a = o.fields.file) || void 0 === a
                              ? void 0
                              : a.url,
                      ),
                      "?fit=fill&w=300&h=450",
                    ),
                    className:
                      "absolute left-0 top-0 h-full w-auto object-cover",
                    sizes: "900px",
                  }),
                  (0, s.jsx)(n(), {
                    fill: !0,
                    alt: "game card overlay",
                    src: "/images/vertical-game-card-overlay.webp",
                    className: "object-contain object-[center_175%] opacity-80",
                    sizes: "900px",
                  }),
                  (0, s.jsxs)("div", {
                    className:
                      "absolute bottom-0 h-auto w-full px-4 pb-4 text-white group-hover:bottom-2",
                    style: { transition: "0.4s all ease" },
                    children: [
                      (0, s.jsx)("p", {
                        className: "text-xl font-bold",
                        children: p.title,
                      }),
                      (0, s.jsxs)("div", {
                        className: "relative my-2 h-[3px] w-full",
                        children: [
                          (0, s.jsx)("img", {
                            className:
                              " absolute left-0 top-0 h-full w-full object-fill opacity-100  group-hover:opacity-100",
                            src: "/images/product-divider.svg",
                            alt: "product divider",
                            style: { transition: "all 0.4s ease" },
                          }),
                          (0, s.jsx)("img", {
                            className:
                              " absolute left-0 top-0 h-full w-full object-fill opacity-0  group-hover:opacity-100",
                            alt: "product divider highlighted",
                            src: "/images/product-divider-highlighted.svg",
                            style: { transition: "all 0.4s ease" },
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [
                          (0, s.jsx)("p", {
                            className: "text-sm",
                            children: (0, c.So)(p.releaseDate),
                          }),
                          (0, s.jsx)("div", {
                            className: "flex gap-x-2",
                            children:
                              null === (h = p.ctaButtons) || void 0 === h
                                ? void 0
                                : h.map((e, t) => {
                                    var l, r, i;
                                    return (0, s.jsx)(
                                      n(),
                                      {
                                        width: 16,
                                        height: 16,
                                        alt: "cta button",
                                        src: (0, x.Wx)(
                                          null == e
                                            ? void 0
                                            : null ===
                                                  (i = e.fields.ctaButton) ||
                                                void 0 === i
                                              ? void 0
                                              : null === (r = i.fields.icon) ||
                                                  void 0 === r
                                                ? void 0
                                                : null ===
                                                      (l = r.fields.file) ||
                                                    void 0 === l
                                                  ? void 0
                                                  : l.url,
                                        ),
                                      },
                                      (null == e ? void 0 : e.sys.id) || t,
                                    );
                                  }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)(n(), {
                    className:
                      "absolute bottom-4 left-4 opacity-0 group-hover:bottom-1 group-hover:left-1 group-hover:opacity-60",
                    width: 24,
                    height: 24,
                    alt: "bottom left bracket",
                    src: "/images/small-bottom-left-bracket.svg",
                    style: { transition: "0.4s all ease" },
                  }),
                  (0, s.jsx)(n(), {
                    className:
                      "absolute bottom-4 right-4 opacity-0 group-hover:bottom-1 group-hover:right-1 group-hover:opacity-60",
                    width: 24,
                    height: 24,
                    alt: "bottom right bracket",
                    src: "/images/small-bottom-right-bracket.svg",
                    style: { transition: "0.4s all ease" },
                  }),
                  (0, s.jsx)(n(), {
                    className:
                      "absolute left-4 top-4 opacity-0 group-hover:left-1 group-hover:top-1 group-hover:opacity-60",
                    width: 24,
                    height: 24,
                    alt: "top left bracket",
                    src: "/images/small-top-left-bracket.svg",
                    style: { transition: "0.4s all ease" },
                  }),
                  (0, s.jsx)(n(), {
                    className:
                      "absolute right-4 top-4 opacity-0 group-hover:right-1 group-hover:top-1 group-hover:opacity-60",
                    width: 24,
                    height: 24,
                    alt: "top right bracket",
                    src: "/images/small-top-right-bracket.svg",
                    style: { transition: "0.4s all ease" },
                  }),
                ],
              }),
            });
          }
          (([i, x] = p.then ? (await p)() : p), r());
        } catch (e) {
          r(e);
        }
      });
    },
    20213: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return PaperContainer;
        },
      });
      var r = l(97458),
        s = l(57865),
        i = l(47681),
        a = l.n(i),
        o = l(52983);
      function PaperContainer(e) {
        let { className: t, children: l, ...i } = e,
          n = (0, o.useRef)(null),
          [c, d] = (0, o.useState)(0);
        return (
          (0, o.useEffect)(() => {
            if (n) {
              let e = new ResizeObserver(() => {
                var e, t;
                d(
                  null !==
                    (t =
                      null === (e = n.current) || void 0 === e
                        ? void 0
                        : e.offsetHeight) && void 0 !== t
                    ? t
                    : 0,
                );
              });
              return (
                e.observe(n.current),
                () => {
                  e.disconnect;
                }
              );
            }
          }, [n]),
          (0, r.jsxs)("div", {
            ref: n,
            className: (0, s.cn)("relative w-full pb-24", t),
            ...i,
            children: [
              l,
              (0, r.jsx)("div", {
                className:
                  "absolute left-0 top-0 -z-20 h-full w-full bg-[url('/images/paper-texture_main_tile(tinyfied).jpg')] bg-repeat",
              }),
              (0, r.jsx)("div", {
                style: { height: c },
                className:
                  "pointer-events-none absolute left-0 top-0 w-full overflow-hidden",
                children: (0, r.jsx)(a(), {
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
                (0, r.jsx)(a(), {
                  src: "/images/paper-graphics_BOTTOM_1(tinyfied).webp",
                  alt: "Paper Bottom Overlay",
                  width: "0",
                  priority: !0,
                  height: "0",
                  className:
                    "absolute bottom-0 left-0 -z-20 h-auto w-full object-cover",
                  unoptimized: !0,
                }),
              (0, r.jsx)("div", {
                style: { backgroundSize: "100% auto" },
                className:
                  "absolute left-0 top-0 -z-20 hidden h-full w-[8vw] max-w-[104px] bg-[url('/images/paper-edge_long(tinyfied).webp')] bg-repeat-y md:block",
              }),
              (0, r.jsx)(a(), {
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
    36201: function (e, t, l) {
      "use strict";
      l.a(e, async function (e, r) {
        try {
          l.d(t, {
            Z: function () {
              return ProductsCategoryHero;
            },
          });
          var s = l(97458),
            i = l(96061),
            a = l(47681),
            o = l.n(a),
            n = l(75443),
            c = l(10821),
            d = l.n(c),
            u = l(52983),
            h = l(93656),
            x = l(57865),
            f = l(52110),
            p = l(46917),
            g = l(91806),
            m = l(39378),
            v = l.n(m),
            w = l(61666),
            b = e([i, g]);
          function ProductsCategoryHero(e) {
            let { categories: t, products: l } = e,
              [r, i] = (0, u.useState)(0),
              [a, o] = (0, u.useState)(v().nth(l, r));
            return (
              (0, u.useEffect)(() => {
                (i(0), o(v().first(l)));
              }, [l]),
              (0, u.useEffect)(() => {
                o(v().nth(l, r));
              }, [l, r]),
              a &&
                (0, s.jsxs)("div", {
                  className: "relative pb-24",
                  children: [
                    (0, s.jsx)(Background, {
                      featuredProduct: a,
                      featuredProductIndex: r,
                      products: l,
                    }),
                    (0, s.jsxs)("div", {
                      className: "relative z-0 overflow-hidden",
                      children: [
                        (0, s.jsx)(MainContent, {
                          featuredProduct: a,
                          featuredProductIndex: r,
                          products: l,
                        }),
                        (0, s.jsx)(Gallery, {
                          tabs: t,
                          products: l,
                          featuredProductIndex: r,
                          setFeaturedProductIndex: i,
                        }),
                      ],
                    }),
                  ],
                })
            );
          }
          function Background(e) {
            let { featuredProductIndex: t, products: l } = e;
            return (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)("div", {
                  className: "absolute inset-0 -z-20 bg-black",
                  children: (0, s.jsxs)("div", {
                    className: "relative min-h-full overflow-hidden pb-24",
                    children: [
                      (0, s.jsxs)("div", {
                        className:
                          "absolute right-0 top-16 aspect-[3/2] w-full max-w-5xl lg:top-0 xl:max-w-6xl",
                        children: [
                          l.map((e, l) => {
                            var r, a, n, c;
                            let d = (0, i.Odn)(e);
                            return (0, s.jsx)(o(), {
                              fill: !0,
                              className: (0, x.cn)(
                                "-z-10 object-cover object-top",
                                t === l ? "block" : "hidden",
                              ),
                              alt:
                                null !==
                                  (c =
                                    null == d
                                      ? void 0
                                      : null === (r = d.fields.image) ||
                                          void 0 === r
                                        ? void 0
                                        : r.fields.description) && void 0 !== c
                                  ? c
                                  : "",
                              src: (0, g.Wx)(
                                null == d
                                  ? void 0
                                  : null === (n = d.fields.image) ||
                                      void 0 === n
                                    ? void 0
                                    : null === (a = n.fields.file) ||
                                        void 0 === a
                                      ? void 0
                                      : a.url,
                              ),
                            });
                          }),
                          (0, s.jsx)("div", {
                            className: "hidden h-full w-full lg:block",
                            style: {
                              background:
                                "\n                    linear-gradient(180deg, #181818 0%, transparent 26.66%),\n                    linear-gradient(126deg, #181818 0%, transparent 26.66%),\n                    linear-gradient(180deg, transparent 50%, #181818 100%),\n                    linear-gradient(90deg, #181818 0%, transparent 48.94%)",
                            },
                          }),
                          (0, s.jsx)("div", {
                            className: "h-full w-full lg:hidden",
                            style: {
                              background:
                                "\n                    linear-gradient(270deg, #181818 -0.13%, transparent 49.87%), \n                    linear-gradient(180deg, #181818 0%, transparent 50.2%), \n                    linear-gradient(180deg, transparent 50%, #181818 100%), \n                    linear-gradient(90deg, #181818 0%, transparent 48.94%)",
                            },
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "absolute -bottom-36 -right-28 hidden h-full w-full opacity-50 lg:block",
                        children: (0, s.jsx)(o(), {
                          fill: !0,
                          className: "object-contain object-right-bottom",
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
                          (0, s.jsx)(o(), {
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
                (0, s.jsx)(w.Z, {}),
              ],
            });
          }
          function MainContent(e) {
            var t;
            let {
              featuredProduct: l,
              featuredProductIndex: r,
              products: i,
            } = e;
            return (
              l &&
              (0, s.jsxs)("div", {
                className:
                  "mx-auto flex h-[500px] max-w-lg flex-col items-center justify-center px-6 pb-6 pt-24 text-center lg:mx-0 lg:items-start lg:pl-12 lg:text-left",
                children: [
                  l.titleLogo
                    ? (0, s.jsx)("div", {
                        className: "relative h-40 w-full flex-shrink-0",
                        children: i.map((e, t) => {
                          var l, i;
                          return (
                            e.titleLogo &&
                            (0, s.jsx)(o(), {
                              fill: !0,
                              className: (0, x.cn)(
                                "object-contain object-center lg:object-left",
                                r === t ? "block" : "hidden",
                              ),
                              alt:
                                null !== (i = e.titleLogo.fields.description) &&
                                void 0 !== i
                                  ? i
                                  : "",
                              src: (0, g.Wx)(
                                null === (l = e.titleLogo.fields.file) ||
                                  void 0 === l
                                  ? void 0
                                  : l.url,
                              ),
                            })
                          );
                        }),
                      })
                    : (0, s.jsx)("h1", {
                        className:
                          "line-clamp-3 flex-shrink-0 overflow-y-hidden text-5xl font-medium leading-[1.1] tracking-[-0.8px]",
                        children: l.title,
                      }),
                  l.shortDescription &&
                    (0, s.jsx)("p", {
                      className:
                        "mt-8 line-clamp-5 flex-shrink-0 overflow-y-hidden leading-normal",
                      children: l.shortDescription,
                    }),
                  (0, s.jsx)(d(), {
                    href: "/products/"
                      .concat(
                        null === (t = l.category) || void 0 === t
                          ? void 0
                          : t.fields.slug,
                        "/",
                      )
                      .concat(l.slug),
                    className: "mt-10",
                    children: (0, s.jsx)(n.Z, {
                      children: l.featuredProductButtonText,
                    }),
                  }),
                ],
              })
            );
          }
          function Gallery(e) {
            let {
                tabs: t,
                products: l,
                featuredProductIndex: r,
                setFeaturedProductIndex: a,
              } = e,
              o = (0, h.useRouter)(),
              n = t
                .map((e) => ({
                  name: e.name,
                  value: "/products/".concat(e.slug),
                  order: e.order,
                }))
                .concat([
                  {
                    name: "New & Featured",
                    value: "/products/featured",
                    order: 0,
                  },
                ])
                .sort((e, t) => e.order - t.order);
            return (0, s.jsxs)("div", {
              className: "flex flex-col gap-y-7 px-6 pb-4 lg:px-12",
              children: [
                (0, s.jsx)("div", {
                  className: "mx-auto w-full lg:hidden",
                  children: (0, s.jsx)(f.Z, {
                    rounded: !0,
                    placeholder: "New & Featured",
                    selected: "/products/".concat(
                      (() => {
                        let e = Array.isArray(o.query.category)
                          ? o.query.category[0]
                          : o.query.category;
                        return null != e ? e : "";
                      })(),
                    ),
                    items: n,
                    onSelect: (e) => {
                      o.asPath !== e && o.replace(e, "", { scroll: !1 });
                    },
                  }),
                }),
                (0, s.jsx)(GalleryDesktopButtons, { tabs: t }),
                (0, s.jsx)(p.Z, {
                  images: l.map(i.Odn).map((e, t) => (0, g.Uj)(e, t, !0)),
                  selectedImageIndex: r,
                  setSelectedImageIndex: a,
                }),
              ],
            });
          }
          function GalleryDesktopButtons(e) {
            let { tabs: t } = e,
              l = (0, h.useRouter)();
            return (0, s.jsxs)("div", {
              className: "hidden lg:block",
              children: [
                (0, s.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "w-full",
                  height: "2",
                  viewBox: "0 0 1344 2",
                  preserveAspectRatio: "none",
                  fill: "none",
                  children: (0, s.jsx)("path", {
                    d: "M0 1H1344",
                    stroke: "#FCF9ED",
                    opacity: "0.1",
                    strokeWidth: "1.5",
                  }),
                }),
                (0, s.jsxs)("div", {
                  className: "flex flex-row items-stretch gap-x-1.5",
                  children: [
                    (0, s.jsx)(GalleryTabButton, {
                      isActive: "/products/featured" === l.asPath,
                      label: "New & Featured",
                      url: "/products/featured",
                    }),
                    t
                      .sort((e, t) => e.order - t.order)
                      .map((e) =>
                        (0, s.jsxs)(
                          u.Fragment,
                          {
                            children: [
                              (0, s.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-9",
                                width: "3",
                                viewBox: "0 0 2 33",
                                preserveAspectRatio: "none",
                                fill: "none",
                                children: (0, s.jsx)("path", {
                                  d: "M1 32.25L1 0.25",
                                  stroke: "#FCF9ED",
                                  opacity: "0.1",
                                  strokeWidth: "1.5",
                                }),
                              }),
                              (0, s.jsx)(GalleryTabButton, {
                                isActive:
                                  l.asPath === "/products/".concat(e.slug),
                                label: e.name,
                                url: "/products/".concat(e.slug),
                              }),
                            ],
                          },
                          e.slug,
                        ),
                      ),
                  ],
                }),
              ],
            });
          }
          function GalleryTabButton(e) {
            let { label: t, isActive: l = !1, url: r } = e;
            return (0, s.jsxs)("div", {
              className: "flex w-full flex-col pt-1.5",
              children: [
                (0, s.jsx)(d(), {
                  scroll: !1,
                  href: r,
                  className: (0, x.cn)(
                    "py-4 text-center font-bold uppercase tracking-[1.6px] text-white/80 transition-colors",
                    "bg-white/5 text-white",
                    "hover:bg-white/10 hover:text-white hover:[text-shadow:none]",
                  ),
                  children: t,
                }),
                l &&
                  (0, s.jsx)("div", {
                    className: "relative -mt-1 h-1.5 w-full overflow-visible",
                    children: (0, s.jsx)(o(), {
                      fill: !0,
                      alt: "Selected tab indicator",
                      src: "/images/selected-tab-underline.svg",
                    }),
                  }),
              ],
            });
          }
          (([i, g] = b.then ? (await b)() : b), r());
        } catch (e) {
          r(e);
        }
      });
    },
    29189: function (e, t, l) {
      "use strict";
      l.a(e, async function (e, r) {
        try {
          l.d(t, {
            Z: function () {
              return ProductsCategoryPage;
            },
          });
          var s = l(97458),
            i = l(87249),
            a = l(36201),
            o = l(19024),
            n = l(12984),
            c = l(99915),
            d = l(20213);
          l(52983);
          var u = e([i, a, o, c]);
          function ProductsCategoryPage(e) {
            let {
              categories: t,
              galleryProducts: l,
              productLists: r,
              websiteSingleton: u,
              navItems: h,
              footerSocialLinks: x,
              surveys: f,
              signUpBanner: p,
            } = e;
            return (0, s.jsxs)("div", {
              className: "",
              children: [
                (0, s.jsx)(i.ZP, { surveys: f, navItems: h, signUpBanner: p }),
                (0, s.jsx)(a.Z, { categories: t, products: l }),
                (0, s.jsxs)(d.Z, {
                  children: [
                    (0, s.jsx)("div", { className: "py-5 lg:py-16 xl:py-20" }),
                    (0, s.jsx)("div", {
                      className: " overflow-hidden text-black",
                      children:
                        null == r
                          ? void 0
                          : r.map(
                              (e) =>
                                e.products.length > 0 &&
                                (0, s.jsx)(o.Z, { ...e }, e.title),
                            ),
                    }),
                  ],
                }),
                (0, s.jsx)(n.Z, { websiteSingleton: u }),
                (0, s.jsx)(c.Z, {
                  websiteSingleton: u,
                  navItems: h,
                  footerSocialLinks: x,
                }),
              ],
            });
          }
          (([i, a, o, c] = u.then ? (await u)() : u), r());
        } catch (e) {
          r(e);
        }
      });
    },
    12984: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return SignUpCallToAction;
        },
      });
      var r = l(97458),
        s = l(7355),
        i = l(47681),
        a = l.n(i);
      function SignUpCallToAction(e) {
        var t, l, i, o;
        let { websiteSingleton: n } = e;
        return (0, r.jsxs)("div", {
          className:
            "relative flex aspect-video w-screen flex-col justify-center bg-black pb-8 lg:px-24 lg:py-16",
          children: [
            (0, r.jsxs)("div", {
              className:
                "relative left-0 top-0 aspect-video w-full lg:absolute lg:aspect-auto lg:h-full",
              children: [
                (0, r.jsx)(a(), {
                  fill: !0,
                  alt:
                    null !==
                      (o =
                        null === (t = n.footerCtaBackground) || void 0 === t
                          ? void 0
                          : t.fields.description) && void 0 !== o
                      ? o
                      : "",
                  src: "https:".concat(
                    null === (i = n.footerCtaBackground) || void 0 === i
                      ? void 0
                      : null === (l = i.fields.file) || void 0 === l
                        ? void 0
                        : l.url,
                  ),
                }),
                (0, r.jsx)("div", {
                  className: "absolute left-0 top-0 h-full w-full bg-black/15",
                }),
              ],
            }),
            (0, r.jsx)("div", {
              className: "relative z-10 max-w-3xl px-8 py-2",
              children: (0, r.jsx)(s.Z, {
                largerFont: !0,
                textAlign: "text-left",
                showSignUp: !0,
                title: n.footerCtaTitle,
                children: n.footerCtaDescription,
              }),
            }),
          ],
        });
      }
    },
    7355: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return WelcomeSection;
        },
      });
      var r = l(97458),
        s = l(47681),
        i = l.n(s);
      function Divider() {
        return (0, r.jsx)(i(), {
          src: "/images/divider.svg",
          className: "my-12 w-full",
          width: "0",
          height: "0",
          alt: "divider",
          priority: !0,
        });
      }
      var a = l(10821),
        o = l.n(a),
        n = l(93656),
        c = l(5198);
      function WelcomeSection(e) {
        let {
            title: t,
            children: l,
            showSignUp: s,
            textAlign: a,
            largerFont: d,
          } = e,
          u = (0, n.useRouter)();
        return (0, r.jsxs)("div", {
          className: "".concat(
            a || "text-center",
            " align-center min-w-0 flex-1 justify-center text-white",
          ),
          children: [
            (0, r.jsx)("h2", {
              className: "".concat(
                d ? "text-5xl leading-[110%] lg:text-7xl" : "text-5xl",
                " font-normal tracking-normal drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]",
              ),
              children: t,
            }),
            (0, r.jsx)("p", {
              className: "".concat(
                d && "text-lg leading-[150%] lg:text-xl",
                " pt-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]",
              ),
              children: l,
            }),
            s
              ? (0, r.jsxs)(o(), {
                  className:
                    "account_register_cta border-radius-8 group relative mt-12 inline-flex items-center rounded-lg border-2 border-yellow-500 border-opacity-50 bg-transparent px-6 py-2 text-base text-white transition duration-300 canhover:hover:border-opacity-90 canhover:hover:text-black",
                  onClick: () => {
                    u.pathname.includes("/news") &&
                      u.query.category &&
                      u.query.article &&
                      (0, c.OR)(window.location.href);
                  },
                  href: "/registration",
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "pointer-events-none absolute left-0 top-0 z-10 h-full w-full overflow-hidden border-transparent opacity-0 shadow-[0_0px_15px_0px_#F1C662] transition duration-300 canhover:group-hover:opacity-100",
                      children: (0, r.jsx)(i(), {
                        src: "/images/gold-button-texture-1.jpg",
                        fill: !0,
                        className: "object-cover",
                        alt: "Gold sheen",
                        sizes: "256px",
                      }),
                    }),
                    (0, r.jsx)("span", {
                      className:
                        "relative z-20 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]",
                      children: "Sign Up",
                    }),
                  ],
                })
              : (0, r.jsx)(Divider, {}),
          ],
        });
      }
    },
    7717: function (e, t, l) {
      "use strict";
      l.a(e, async function (e, r) {
        try {
          (l.r(t),
            l.d(t, {
              __N_SSG: function () {
                return o;
              },
              default: function () {
                return Category;
              },
            }));
          var s = l(97458),
            i = l(29189),
            a = e([i]);
          i = (a.then ? (await a)() : a)[0];
          var o = !0;
          function Category(e) {
            let {
              categories: t,
              featuredProducts: l,
              subcategories: r,
              websiteSingleton: a,
              navItems: o,
              footerSocialLinks: n,
              surveys: c,
              signUpBanner: d,
            } = e;
            return (0, s.jsx)(i.Z, {
              categories: t,
              galleryProducts: l,
              productLists: r,
              websiteSingleton: a,
              navItems: o,
              footerSocialLinks: n,
              surveys: c,
              signUpBanner: d,
            });
          }
          r();
        } catch (e) {
          r(e);
        }
      });
    },
    69049: function (e, t, l) {
      "use strict";
      l.d(t, {
        So: function () {
          return getYear;
        },
        p6: function () {
          return formatDate;
        },
      });
      let formatDate = (e) => {
          if (!e) return "";
          let t = new Date(e);
          return t.toLocaleString("en-US", {
            timeZone: "UTC",
            month: "short",
            day: "numeric",
            year: "numeric",
          });
        },
        getYear = (e) =>
          e ? new Date(e).toLocaleString("en-US", { year: "numeric" }) : "";
    },
    57865: function (e, t, l) {
      "use strict";
      l.d(t, {
        cn: function () {
          return cn;
        },
      });
      var r = l(28934),
        s = l(44361);
      function cn() {
        for (var e = arguments.length, t = Array(e), l = 0; l < e; l++)
          t[l] = arguments[l];
        return (0, s.m)((0, r.W)(t));
      }
    },
  },
  function (e) {
    (e.O(
      0,
      [46, 681, 882, 34, 658, 542, 703, 249, 806, 774, 888, 179],
      function () {
        return e((e.s = 39943));
      },
    ),
      (_N_E = e.O()));
  },
]);
