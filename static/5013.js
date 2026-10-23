(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5013],
  {
    271: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return o;
          },
        }));
      let i = r(6997),
        n = r(10407);
      function l({ config: e, src: t, width: r, quality: o }) {
        let s = (0, n.getDeploymentId)();
        if (t.startsWith("/") && !t.startsWith("//"))
          if (t.includes("/_next/static/immutable") && !(0, n.getAssetToken)())
            s = void 0;
          else {
            let e = t.indexOf("?");
            if (-1 !== e) {
              let r = new URLSearchParams(t.slice(e + 1)),
                i = r.get("dpl");
              if (i) {
                ((s = i), r.delete("dpl"));
                let n = r.toString();
                t = t.slice(0, e) + (n ? "?" + n : "");
              }
            }
          }
        if (
          t.startsWith("/") &&
          t.includes("?") &&
          e.localPatterns?.length === 1 &&
          "**" === e.localPatterns[0].pathname &&
          "" === e.localPatterns[0].search
        )
          throw Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`);
        let u = (0, i.findClosestQuality)(o, e);
        return `${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${u}${t.startsWith("/") && s ? `&dpl=${s}` : ""}`;
      }
      l.__next_img_default = !0;
      let o = l;
    },
    6997: (e, t) => {
      "use strict";
      function r(e, t) {
        let r = e || 75;
        return t?.qualities?.length
          ? t.qualities.reduce(
              (e, t) => (Math.abs(t - r) < Math.abs(e - r) ? t : e),
              t.qualities[0],
            )
          : r;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "findClosestQuality", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }));
    },
    11529: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return v;
          },
        }));
      let i = r(21776),
        n = r(52137),
        l = r(2183),
        o = n._(r(36439)),
        s = i._(r(72354)),
        u = i._(r(59738)),
        a = r(39681),
        d = r(98991),
        c = r(77850),
        f = i._(r(271)),
        g = r(69676);
      function p(e, t, r, i, n, l, o) {
        let s = e?.src;
        e &&
          e["data-loaded-src"] !== s &&
          ((e["data-loaded-src"] = s),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (e.parentElement && e.isConnected) {
                if (("empty" !== t && n(!0), r?.current)) {
                  let t = new Event("load");
                  Object.defineProperty(t, "target", {
                    writable: !1,
                    value: e,
                  });
                  let i = !1,
                    n = !1;
                  r.current({
                    ...t,
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => i,
                    isPropagationStopped: () => n,
                    persist: () => {},
                    preventDefault: () => {
                      ((i = !0), t.preventDefault());
                    },
                    stopPropagation: () => {
                      ((n = !0), t.stopPropagation());
                    },
                  });
                }
                i?.current && i.current(e);
              }
            }));
      }
      function m(e) {
        return o.use ? { fetchPriority: e } : { fetchpriority: e };
      }
      let h = o.useLayoutEffect,
        b = (0, o.forwardRef)(
          (
            {
              src: e,
              srcSet: t,
              sizes: r,
              height: i,
              width: n,
              decoding: s,
              className: u,
              style: a,
              fetchPriority: d,
              placeholder: c,
              loading: f,
              unoptimized: b,
              fill: y,
              onLoadRef: v,
              onLoadingCompleteRef: w,
              setBlurComplete: _,
              setShowAltText: j,
              sizesInput: P,
              onLoad: x,
              onError: C,
              ...O
            },
            S,
          ) => {
            let R = (0, o.useRef)(!1),
              M = (0, o.useRef)(null);
            h(() => {
              let { current: e } = R,
                { current: t } = M;
              e ||
                null === t ||
                (C && (t.src = t.src),
                t.complete && p(t, c, v, w, _, b, P),
                (R.current = !0));
            }, [e, c, v, w, C, b, P]);
            let E = (0, g.useMergedRef)(S, M);
            return (0, l.jsx)("img", {
              ...O,
              ...m(d),
              loading: f,
              width: n,
              height: i,
              decoding: s,
              "data-nimg": y ? "fill" : "1",
              className: u,
              style: a,
              sizes: r,
              srcSet: t,
              src: e,
              ref: E,
              onLoad: (e) => {
                p(e.currentTarget, c, v, w, _, b, P);
              },
              onError: (e) => {
                (j(!0), "empty" !== c && _(!0), C && C(e));
              },
            });
          },
        );
      function y({ isAppRouter: e, imgAttributes: t }) {
        let r = {
          as: "image",
          imageSrcSet: t.srcSet,
          imageSizes: t.sizes,
          crossOrigin: t.crossOrigin,
          referrerPolicy: t.referrerPolicy,
          ...m(t.fetchPriority),
        };
        return e && s.default.preload
          ? (s.default.preload(t.src, r), null)
          : (0, l.jsx)(u.default, {
              children: (0, l.jsx)(
                "link",
                { rel: "preload", href: t.srcSet ? void 0 : t.src, ...r },
                "__nimg-" + t.src + t.srcSet + t.sizes,
              ),
            });
      }
      let v = (0, o.forwardRef)((e, t) => {
        let r = (0, o.useContext)(d.RouterContext),
          i = (0, c.useImageConfig)(),
          { onLoad: n, onLoadingComplete: s } = e,
          u = (0, o.useRef)(n);
        (0, o.useEffect)(() => {
          u.current = n;
        }, [n]);
        let g = (0, o.useRef)(s);
        (0, o.useEffect)(() => {
          g.current = s;
        }, [s]);
        let [p, m] = (0, o.useState)(!1),
          [h, v] = (0, o.useState)(!1),
          { props: w, meta: _ } = (0, a.getImgProps)(e, {
            defaultLoader: f.default,
            imgConf: i,
            blurComplete: p,
            showAltText: h,
          });
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(b, {
              ...w,
              unoptimized: _.unoptimized,
              placeholder: _.placeholder,
              fill: _.fill,
              onLoadRef: u,
              onLoadingCompleteRef: g,
              setBlurComplete: m,
              setShowAltText: v,
              sizesInput: e.sizes,
              ref: t,
            }),
            _.preload
              ? (0, l.jsx)(y, { isAppRouter: !r, imgAttributes: w })
              : null,
          ],
        });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    15013: (e, t, r) => {
      e.exports = r(67363);
    },
    25033: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageProps", {
          enumerable: !0,
          get: function () {
            return u;
          },
        }));
      let i = r(52137),
        n = r(74134),
        l = r(39681),
        o = Reflect.get(i._(r(271)), "default"),
        s = (0, n.prepareImageConfig)({
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [32, 48, 64, 96, 128, 256, 384],
          qualities: [75, 100],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        });
      function u(e) {
        let { props: t } = (0, l.getImgProps)(e, {
          defaultLoader: o,
          imgConf: s,
        });
        for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
        return { props: t };
      }
    },
    31314: (e, t) => {
      "use strict";
      function r({
        widthInt: e,
        heightInt: t,
        blurWidth: i,
        blurHeight: n,
        blurDataURL: l,
        objectFit: o,
      }) {
        let s = i ? 40 * i : e,
          u = n ? 40 * n : t,
          a = s && u ? `viewBox='0 0 ${s} ${u}'` : "";
        return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${a}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${a ? "none" : "contain" === o ? "xMidYMid" : "cover" === o ? "xMidYMid slice" : "none"}' style='filter: url(%23b);' href='${l}'/%3E%3C/svg%3E`;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }));
    },
    39681: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return u;
          },
        }));
      let i = r(10407),
        n = r(31314),
        l = ["-moz-initial", "fill", "none", "scale-down", void 0];
      function o(e) {
        return void 0 !== e.default;
      }
      function s(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
            ? Number.isFinite(e)
              ? e
              : 0 / 0
            : "string" == typeof e && /^[0-9]+$/.test(e)
              ? parseInt(e, 10)
              : 0 / 0;
      }
      function u(
        {
          src: e,
          sizes: t,
          unoptimized: r = !1,
          priority: a = !1,
          preload: d = !1,
          loading: c,
          className: f,
          quality: g,
          width: p,
          height: m,
          fill: h = !1,
          style: b,
          overrideSrc: y,
          onLoad: v,
          onLoadingComplete: w,
          placeholder: _ = "empty",
          blurDataURL: j,
          fetchPriority: P,
          decoding: x = "async",
          layout: C,
          objectFit: O,
          objectPosition: S,
          lazyBoundary: R,
          lazyRoot: M,
          ...E
        },
        I,
      ) {
        var z;
        let $,
          k,
          { imgConf: A, showAltText: W, blurComplete: D, defaultLoader: F } = I;
        if (void 0 === F)
          throw Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config",
          );
        let L = E.loader || F;
        (delete E.loader, delete E.srcSet);
        let q = "__next_img_default" in L;
        if (q) {
          if ("custom" === A.loader)
            throw Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`);
        } else {
          let e = L;
          L = (t) => {
            let { config: r, ...i } = t;
            return e(i);
          };
        }
        if (C) {
          "fill" === C && (h = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[C];
          e && (b = { ...b, ...e });
          let r = { responsive: "100vw", fill: "100vw" }[C];
          r && !t && (t = r);
        }
        let B = "",
          G = s(p),
          N = s(m);
        if ((z = e) && "object" == typeof z && (o(z) || void 0 !== z.src)) {
          let t = o(e) ? e.default : e;
          if (!t.src)
            throw Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`,
            );
          if (!t.height || !t.width)
            throw Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`,
            );
          if (
            (($ = t.blurWidth),
            (k = t.blurHeight),
            (j = j || t.blurDataURL),
            (B = t.src),
            !h)
          )
            if (G || N) {
              if (G && !N) {
                let e = G / t.width;
                N = Math.round(t.height * e);
              } else if (!G && N) {
                let e = N / t.height;
                G = Math.round(t.width * e);
              }
            } else ((G = t.width), (N = t.height));
        }
        let T = !a && !d && ("lazy" === c || void 0 === c);
        ((!(e = "string" == typeof e ? e : B) ||
          e.startsWith("data:") ||
          e.startsWith("blob:")) &&
          ((r = !0), (T = !1)),
          A.unoptimized && (r = !0),
          q &&
            !A.dangerouslyAllowSVG &&
            e.split("?", 1)[0].endsWith(".svg") &&
            (r = !0));
        let U = s(g),
          V = Object.assign(
            h
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: O,
                  objectPosition: S,
                }
              : {},
            W ? {} : { color: "transparent" },
            b,
          ),
          J =
            D || "empty" === _
              ? null
              : "blur" === _
                ? `url("data:image/svg+xml;charset=utf-8,${(0, n.getImageBlurSvg)({ widthInt: G, heightInt: N, blurWidth: $, blurHeight: k, blurDataURL: j || "", objectFit: V.objectFit })}")`
                : `url("${_}")`,
          Q = l.includes(V.objectFit)
            ? "fill" === V.objectFit
              ? "100% 100%"
              : "cover"
            : V.objectFit,
          Y = J
            ? {
                backgroundSize: Q,
                backgroundPosition: V.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: J,
              }
            : {},
          H = (function ({
            config: e,
            src: t,
            unoptimized: r,
            width: n,
            quality: l,
            sizes: o,
            loader: s,
          }) {
            if (r) {
              if (t.startsWith("/") && !t.startsWith("//")) {
                let e = (0, i.getDeploymentId)();
                if (
                  t.includes("/_next/static/immutable") &&
                  !(0, i.getAssetToken)()
                )
                  e = void 0;
                else if (e) {
                  let r = t.indexOf("?");
                  if (-1 !== r) {
                    let i = new URLSearchParams(t.slice(r + 1));
                    i.get("dpl") ||
                      (i.append("dpl", e),
                      (t = t.slice(0, r) + "?" + i.toString()));
                  } else t += `?dpl=${e}`;
                }
              }
              return { src: t, srcSet: void 0, sizes: void 0 };
            }
            let { widths: u, kind: a } = (function (
                { deviceSizes: e, allSizes: t },
                r,
                i,
              ) {
                if (i) {
                  let r = /(^|\s)(1?\d?\d)vw/g,
                    n = [];
                  for (let e; (e = r.exec(i)); ) n.push(parseInt(e[2]));
                  if (n.length) {
                    let r = 0.01 * Math.min(...n);
                    return {
                      widths: t.filter((t) => t >= e[0] * r),
                      kind: "w",
                    };
                  }
                  return { widths: t, kind: "w" };
                }
                return "number" != typeof r
                  ? { widths: e, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [r, 2 * r].map(
                            (e) => t.find((t) => t >= e) || t[t.length - 1],
                          ),
                        ),
                      ],
                      kind: "x",
                    };
              })(e, n, o),
              d = u.length - 1;
            return {
              sizes: o || "w" !== a ? o : "100vw",
              srcSet: u
                .map(
                  (r, i) =>
                    `${s({ config: e, src: t, quality: l, width: r })} ${"w" === a ? r : i + 1}${a}`,
                )
                .join(", "),
              src: s({ config: e, src: t, quality: l, width: u[d] }),
            };
          })({
            config: A,
            src: e,
            unoptimized: r,
            width: G,
            quality: U,
            sizes: t,
            loader: L,
          }),
          K = T ? "lazy" : c;
        return {
          props: {
            ...E,
            loading: K,
            fetchPriority: P,
            width: G,
            height: N,
            decoding: x,
            className: f,
            style: { ...V, ...Y },
            sizes: H.sizes,
            srcSet: H.srcSet,
            src: y || H.src,
          },
          meta: { unoptimized: r, preload: d || a, placeholder: _, fill: h },
        };
      }
    },
    67363: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        default: function () {
          return l.Image;
        },
        getImageProps: function () {
          return o.getImageProps;
        },
      };
      for (var n in i)
        Object.defineProperty(t, n, { enumerable: !0, get: i[n] });
      let l = r(11529),
        o = r(25033);
    },
    69676: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useMergedRef", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }));
      let i = r(36439);
      function n(e, t) {
        let r = (0, i.useRef)(null),
          n = (0, i.useRef)(null);
        return (0, i.useCallback)(
          (i) => {
            if (null === i) {
              let e = r.current;
              e && ((r.current = null), e());
              let t = n.current;
              t && ((n.current = null), t());
            } else (e && (r.current = l(e, i)), t && (n.current = l(t, i)));
          },
          [e, t],
        );
      }
      function l(e, t) {
        if ("function" != typeof e)
          return (
            (e.current = t),
            () => {
              e.current = null;
            }
          );
        {
          let r = e(t);
          return "function" == typeof r ? r : () => e(null);
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    77850: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useImageConfig", {
          enumerable: !0,
          get: function () {
            return s;
          },
        }));
      let i = r(36439),
        n = r(74134),
        l = r(20442),
        o = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [32, 48, 64, 96, 128, 256, 384],
          qualities: [75, 100],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function s() {
        let e = (0, i.useContext)(l.ImageConfigContext);
        return (0, n.prepareImageConfig)(o, e);
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
  },
]);
