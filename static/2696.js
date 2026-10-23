(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2696],
  {
    705: (e, t, n) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return l;
          },
        }));
      let r = n(36439),
        u = n(64004),
        a = "function" == typeof IntersectionObserver,
        o = new Map(),
        i = [];
      function l({ rootRef: e, rootMargin: t, disabled: n }) {
        let c = n || !a,
          [s, f] = (0, r.useState)(!1),
          d = (0, r.useRef)(null),
          v = (0, r.useCallback)((e) => {
            d.current = e;
          }, []);
        return (
          (0, r.useEffect)(() => {
            if (a) {
              if (c || s) return;
              let n = d.current;
              if (n && n.tagName)
                return (function (e, t, n) {
                  let {
                    id: r,
                    observer: u,
                    elements: a,
                  } = (function (e) {
                    let t,
                      n = { root: e.root || null, margin: e.rootMargin || "" },
                      r = i.find(
                        (e) => e.root === n.root && e.margin === n.margin,
                      );
                    if (r && (t = o.get(r))) return t;
                    let u = new Map();
                    return (
                      (t = {
                        id: n,
                        observer: new IntersectionObserver((e) => {
                          e.forEach((e) => {
                            let t = u.get(e.target),
                              n = e.isIntersecting || e.intersectionRatio > 0;
                            t && n && t(n);
                          });
                        }, e),
                        elements: u,
                      }),
                      i.push(n),
                      o.set(n, t),
                      t
                    );
                  })(n);
                  return (
                    a.set(e, t),
                    u.observe(e),
                    function () {
                      if ((a.delete(e), u.unobserve(e), 0 === a.size)) {
                        (u.disconnect(), o.delete(r));
                        let e = i.findIndex(
                          (e) => e.root === r.root && e.margin === r.margin,
                        );
                        e > -1 && i.splice(e, 1);
                      }
                    }
                  );
                })(n, (e) => e && f(e), { root: e?.current, rootMargin: t });
            } else if (!s) {
              let e = (0, u.requestIdleCallback)(() => f(!0));
              return () => (0, u.cancelIdleCallback)(e);
            }
          }, [c, t, e, s, d.current]),
          [
            v,
            s,
            (0, r.useCallback)(() => {
              f(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    4898: (e, t, n) => {
      "use strict";
      function r(e, t, n, r) {
        return !1;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        n(46420),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default)));
    },
    26626: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = {
        default: function () {
          return O;
        },
        useLinkStatus: function () {
          return E;
        },
      };
      for (var u in r)
        Object.defineProperty(t, u, { enumerable: !0, get: r[u] });
      let a = n(52137),
        o = n(2183),
        i = a._(n(36439)),
        l = n(35312),
        c = n(44498),
        s = n(84907),
        f = n(25269),
        d = n(87014),
        v = n(98991),
        p = n(705),
        h = n(4898),
        b = n(41415),
        g = n(69676),
        y = new Set();
      function w(e, t, n, r) {
        if ((0, c.isLocalURL)(t)) {
          if (!r.bypassPrefetchedCheck) {
            let u =
              t +
              "%" +
              n +
              "%" +
              (void 0 !== r.locale
                ? r.locale
                : "locale" in e
                  ? e.locale
                  : void 0);
            if (y.has(u)) return;
            y.add(u);
          }
          e.prefetch(t, n, r).catch((e) => {});
        }
      }
      function m(e) {
        return "string" == typeof e ? e : (0, s.formatUrl)(e);
      }
      let C = i.default.forwardRef(function (e, t) {
          let n,
            r,
            {
              href: u,
              as: a,
              children: s,
              prefetch: y = null,
              passHref: C,
              replace: R,
              shallow: E,
              scroll: O,
              locale: k,
              onClick: P,
              onNavigate: I,
              onMouseEnter: V,
              onTouchStart: M,
              legacyBehavior: x = !1,
              transitionTypes: j,
              ...L
            } = e;
          ((n = s),
            x &&
              ("string" == typeof n || "number" == typeof n) &&
              (n = (0, o.jsx)("a", { children: n })));
          let T = i.default.useContext(v.RouterContext),
            S = !1 !== y,
            { href: D, as: A } = i.default.useMemo(() => {
              if (!T) {
                let e = m(u);
                return { href: e, as: a ? m(a) : e };
              }
              let [e, t] = (0, l.resolveHref)(T, u, !0);
              return { href: e, as: a ? (0, l.resolveHref)(T, a) : t || e };
            }, [T, u, a]),
            _ = i.default.useRef(D),
            H = i.default.useRef(A);
          x && (r = i.default.Children.only(n));
          let N = x ? r && "object" == typeof r && r.ref : t,
            [z, B, U] = (0, p.useIntersection)({ rootMargin: "200px" }),
            F = i.default.useCallback(
              (e) => {
                ((H.current !== A || _.current !== D) &&
                  (U(), (H.current = A), (_.current = D)),
                  z(e));
              },
              [A, D, U, z],
            ),
            W = (0, g.useMergedRef)(F, N);
          i.default.useEffect(() => {
            !T ||
              (B && S && w(T, D, A, { bypassPrefetchedCheck: !1, locale: k }));
          }, [A, D, B, k, S, T?.locale, T]);
          let K = {
            ref: W,
            onClick(e) {
              (x || "function" != typeof P || P(e),
                x &&
                  r.props &&
                  "function" == typeof r.props.onClick &&
                  r.props.onClick(e),
                !T ||
                  e.defaultPrevented ||
                  (function (e, t, n, r, u, a, o, i, l) {
                    let s,
                      { nodeName: f } = e.currentTarget;
                    if (
                      !(
                        ("A" === f.toUpperCase() &&
                          (((s = e.currentTarget.getAttribute("target")) &&
                            "_self" !== s) ||
                            e.metaKey ||
                            e.ctrlKey ||
                            e.shiftKey ||
                            e.altKey ||
                            (e.nativeEvent && 2 === e.nativeEvent.which))) ||
                        e.currentTarget.hasAttribute("download")
                      )
                    ) {
                      if (!(0, c.isLocalURL)(n)) {
                        u && (e.preventDefault(), location.replace(n));
                        return;
                      }
                      (e.preventDefault(),
                        (() => {
                          if (l) {
                            let e = !1;
                            if (
                              (l({
                                preventDefault: () => {
                                  e = !0;
                                },
                              }),
                              e)
                            )
                              return;
                          }
                          let e = o ?? !0;
                          "beforePopState" in t
                            ? t[u ? "replace" : "push"](n, r, {
                                shallow: a,
                                locale: i,
                                scroll: e,
                              })
                            : t[u ? "replace" : "push"](r || n, { scroll: e });
                        })());
                    }
                  })(e, T, D, A, R, E, O, k, I));
            },
            onMouseEnter(e) {
              (x || "function" != typeof V || V(e),
                x &&
                  r.props &&
                  "function" == typeof r.props.onMouseEnter &&
                  r.props.onMouseEnter(e),
                T &&
                  w(T, D, A, {
                    locale: k,
                    priority: !0,
                    bypassPrefetchedCheck: !0,
                  }));
            },
            onTouchStart: function (e) {
              (x || "function" != typeof M || M(e),
                x &&
                  r.props &&
                  "function" == typeof r.props.onTouchStart &&
                  r.props.onTouchStart(e),
                T &&
                  w(T, D, A, {
                    locale: k,
                    priority: !0,
                    bypassPrefetchedCheck: !0,
                  }));
            },
          };
          if ((0, f.isAbsoluteUrl)(A)) K.href = A;
          else if (!x || C || ("a" === r.type && !("href" in r.props))) {
            let e = void 0 !== k ? k : T?.locale;
            K.href =
              (T?.isLocaleDomain &&
                (0, h.getDomainLocale)(A, e, T?.locales, T?.domainLocales)) ||
              (0, b.addBasePath)((0, d.addLocale)(A, e, T?.defaultLocale));
          }
          return x
            ? i.default.cloneElement(r, K)
            : (0, o.jsx)("a", { ...L, ...K, children: n });
        }),
        R = (0, i.createContext)({ pending: !1 }),
        E = () => (0, i.useContext)(R),
        O = C;
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    44190: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r,
        u = n(36439),
        a = n(15384),
        o = u && "object" == typeof u && "default" in u ? u : { default: u };
      function i(e) {
        var t = e || l(),
          n = u.useState(t),
          r = n[0],
          a = n[1];
        return (
          u.useEffect(
            function () {
              if ("u" > typeof window && "matchMedia" in window) {
                var t = function () {
                    a(e || l());
                  },
                  n = window.matchMedia(
                    "screen and (resolution: " + r + "dppx)",
                  );
                return (
                  n.hasOwnProperty("addEventListener")
                    ? n.addEventListener("change", t)
                    : n.addListener(t),
                  function () {
                    n.hasOwnProperty("removeEventListener")
                      ? n.removeEventListener("change", t)
                      : n.removeListener(t);
                  }
                );
              }
            },
            [r, e],
          ),
          r
        );
      }
      function l() {
        return Math.min(
          Math.max(
            1,
            "u" > typeof window && "number" == typeof window.devicePixelRatio
              ? window.devicePixelRatio
              : 1,
          ),
          3,
        );
      }
      var c = (function () {
          function e() {}
          var t = e.prototype;
          return (
            (t.observe = function () {}),
            (t.unobserve = function () {}),
            (t.disconnect = function () {}),
            e
          );
        })(),
        s = globalThis.ResizeObserver || c,
        f = void 0 !== globalThis.ResizeObserver,
        d = !f,
        v = {
          useDevicePixelRatio: !0,
          fitCanvasToArtboardHeight: !1,
          useOffscreenRenderer: !0,
          shouldResizeCanvasToContainer: !0,
        };
      function p(e) {
        return Object.assign({}, v, e);
      }
      function h(e) {
        var t,
          n,
          r,
          a,
          o,
          l,
          c,
          v = e.riveLoaded,
          h = void 0 !== v && v,
          b = e.canvasElem,
          g = e.containerRef,
          y = e.options,
          w = e.onCanvasHasResized,
          m = e.artboardBounds,
          C = p(void 0 === y ? {} : y),
          R = u.useState({ height: 0, width: 0 }),
          E = R[0],
          O = E.height,
          k = E.width,
          P = R[1],
          I = u.useState({ height: 0, width: 0 }),
          V = I[0],
          M = V.height,
          x = V.width,
          j = I[1],
          L = u.useState(!0),
          T = L[0],
          S = L[1],
          D = C.fitCanvasToArtboardHeight,
          A = C.shouldResizeCanvasToContainer,
          _ = C.useDevicePixelRatio,
          H = C.customDevicePixelRatio,
          N =
            (void 0 === (t = A) && (t = !0),
            (r = (n = u.useState({ width: 0, height: 0 }))[0]),
            (a = n[1]),
            u.useEffect(function () {
              if ("u" > typeof window && t) {
                var e = function () {
                  a({ width: window.innerWidth, height: window.innerHeight });
                };
                return (
                  d && (e(), window.addEventListener("resize", e)),
                  function () {
                    return window.removeEventListener("resize", e);
                  }
                );
              }
            }, []),
            (c = u.useRef(
              new s(
                ((o = function (e) {
                  f &&
                    a({
                      width: e[e.length - 1].contentRect.width,
                      height: e[e.length - 1].contentRect.height,
                    });
                }),
                (l = 0),
                function () {
                  for (
                    var e = this, t = arguments.length, n = Array(t), r = 0;
                    r < t;
                    r++
                  )
                    n[r] = arguments[r];
                  (clearTimeout(l),
                    (l = window.setTimeout(function () {
                      return o.apply(e, n);
                    }, 0)));
                }),
              ),
            )),
            u.useEffect(
              function () {
                var e = c.current;
                if (!t) return void e.disconnect();
                var n = g.current;
                return (
                  g.current && f && e.observe(g.current),
                  function () {
                    (e.disconnect(), n && f && e.unobserve(n));
                  }
                );
              },
              [g, c],
            ),
            r),
          z = i(H),
          B = null != m ? m : {},
          U = B.maxX,
          F = B.maxY,
          W = u.useCallback(
            function () {
              var e,
                t,
                n,
                r,
                u =
                  null != (e = null == (n = g.current) ? void 0 : n.clientWidth)
                    ? e
                    : 0,
                a =
                  null !=
                  (t = null == (r = g.current) ? void 0 : r.clientHeight)
                    ? t
                    : 0;
              return D && m
                ? { width: u, height: (m.maxY / m.maxX) * u }
                : { width: u, height: a };
            },
            [g, D, U, F],
          );
        (u.useEffect(
          function () {
            if (A && g.current && h) {
              var e = W(),
                t = e.width,
                n = e.height,
                r = !1;
              if (b) {
                var u = t !== k || n !== O;
                if (
                  (C.fitCanvasToArtboardHeight &&
                    u &&
                    ((g.current.style.height = n + "px"), (r = !0)),
                  C.useDevicePixelRatio)
                ) {
                  var a = t * z !== x || n * z !== M;
                  if (u || a) {
                    var o = z * t,
                      i = z * n;
                    ((b.width = o),
                      (b.height = i),
                      (b.style.width = t + "px"),
                      (b.style.height = n + "px"),
                      j({ width: o, height: i }),
                      (r = !0));
                  }
                } else
                  u &&
                    ((b.width = t),
                    (b.height = n),
                    j({ width: t, height: n }),
                    (r = !0));
                P({ width: t, height: n });
              }
              (w && (T || r) && w && w(), T && S(!1));
            }
          },
          [b, g, N, z, W, T, S, M, x, O, k, w, A, D, _, h],
        ),
          u.useEffect(
            function () {
              j({ width: 0, height: 0 });
            },
            [b],
          ));
      }
      var b = (function () {
          function e() {}
          var t = e.prototype;
          return (
            (t.observe = function () {}),
            (t.unobserve = function () {}),
            (t.disconnect = function () {}),
            e
          );
        })(),
        g = globalThis.IntersectionObserver || b,
        y = (function () {
          function e() {
            var e = this;
            ((this.elementsMap = new Map()),
              (this.onObserved = function (t) {
                t.forEach(function (t) {
                  var n = e.elementsMap.get(t.target);
                  n && n(t);
                });
              }),
              (this.observer = new g(this.onObserved)));
          }
          var t = e.prototype;
          return (
            (t.registerCallback = function (e, t) {
              (this.observer.observe(e), this.elementsMap.set(e, t));
            }),
            (t.removeCallback = function (e) {
              (this.observer.unobserve(e), this.elementsMap.delete(e));
            }),
            e
          );
        })(),
        w = function () {
          return (r || (r = new y()), r);
        };
      function m() {
        return (m =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function C(e, t) {
        if (null == e) return {};
        var n,
          r,
          u = {},
          a = Object.getOwnPropertyNames(e);
        for (r = 0; r < a.length; r++)
          ((n = a[r]),
            !(t.indexOf(n) >= 0) &&
              Object.prototype.propertyIsEnumerable.call(e, n) &&
              (u[n] = e[n]));
        return u;
      }
      function R(e) {
        var t = e.setContainerRef,
          n = e.setCanvasRef,
          r = e.className,
          u = void 0 === r ? "" : r,
          a = e.style,
          i = e.children,
          l = C(e, [
            "setContainerRef",
            "setCanvasRef",
            "className",
            "style",
            "children",
          ]),
          c = m({ width: "100%", height: "100%" }, a);
        return o.default.createElement(
          "div",
          m({ ref: t, className: u }, !u && { style: c }),
          o.default.createElement(
            "canvas",
            m(
              { ref: n, style: { verticalAlign: "top", width: 0, height: 0 } },
              l,
            ),
            i,
          ),
        );
      }
      function E(e, t) {
        void 0 === t && (t = {});
        var n = u.useState(null),
          r = n[0],
          l = n[1],
          c = u.useRef(null),
          s = u.useRef(null),
          f = u.useState(null),
          d = f[0],
          v = f[1],
          b = !!e,
          g = p(t),
          y = i(),
          E = u.useCallback(
            function () {
              if (d) {
                if (d.layout && d.layout.fit === a.Fit.Layout && r) {
                  var e = y * d.layout.layoutScaleFactor;
                  ((d.devicePixelRatioUsed = y),
                    (d.artboardWidth = (null == r ? void 0 : r.width) / e),
                    (d.artboardHeight = (null == r ? void 0 : r.height) / e));
                }
                (d.startRendering(), d.resizeToCanvas());
              }
            },
            [d, y],
          );
        h({
          riveLoaded: !!d,
          canvasElem: r,
          containerRef: c,
          options: g,
          onCanvasHasResized: E,
          artboardBounds: null == d ? void 0 : d.bounds,
        });
        var O = u.useCallback(function (e) {
          (null === e && r && ((r.height = 0), (r.width = 0)), l(e));
        }, []);
        u.useEffect(
          function () {
            if (r && e) {
              var t,
                n = null != d;
              if (null == d) {
                var u = g.useOffscreenRenderer,
                  o = e.onRiveReady,
                  i = C(e, ["onRiveReady"]);
                ((t = new a.Rive(
                  m({ useOffscreenRenderer: u }, i, { canvas: r }),
                )),
                  null != s.current && s.current.cleanup(),
                  (s.current = t),
                  t.on(a.EventType.Load, function () {
                    ((n = !0), o && o(t), r ? v(t) : t.cleanup());
                  }));
              }
              return function () {
                n || null == t || t.cleanup();
              };
            }
          },
          [r, b, d],
        );
        var k = u.useCallback(function (e) {
            c.current = e;
          }, []),
          P = {
            observe: u.useCallback(function (e, t) {
              w().registerCallback(e, t);
            }, []),
            unobserve: u.useCallback(function (e) {
              w().removeCallback(e);
            }, []),
          },
          I = P.observe,
          V = P.unobserve;
        (u.useEffect(
          function () {
            var e,
              t = !1,
              n = function () {
                if (r && t) {
                  var e = r.getBoundingClientRect();
                  e.width > 0 &&
                    e.height > 0 &&
                    e.top <
                      (window.innerHeight ||
                        document.documentElement.clientHeight) &&
                    e.bottom > 0 &&
                    e.left <
                      (window.innerWidth ||
                        document.documentElement.clientWidth) &&
                    e.right > 0 &&
                    (null == d || d.startRendering(), (t = !1));
                }
              };
            return (
              r &&
                !1 !== g.shouldUseIntersectionObserver &&
                I(r, function (r) {
                  (r.isIntersecting
                    ? d && d.startRendering()
                    : d && d.stopRendering(),
                    (t = !r.isIntersecting),
                    clearTimeout(e),
                    r.isIntersecting ||
                      0 !== r.boundingClientRect.width ||
                      (e = setTimeout(n, 10)));
                }),
              function () {
                r && V(r);
              }
            );
          },
          [I, V, d, r, g.shouldUseIntersectionObserver],
        ),
          u.useEffect(
            function () {
              return function () {
                d && (d.cleanup(), v(null));
              };
            },
            [d, r],
          ),
          u.useEffect(function () {
            return function () {
              null != s.current && s.current.cleanup();
            };
          }, []));
        var M = null == e ? void 0 : e.animations;
        u.useEffect(
          function () {
            d &&
              M &&
              (d.isPlaying
                ? (d.stop(d.animationNames), d.play(M))
                : d.isPaused && (d.stop(d.animationNames), d.pause(M)));
          },
          [M, d],
        );
        var x = u.useCallback(
          function (e) {
            return o.default.createElement(
              R,
              m({ setContainerRef: k, setCanvasRef: O }, e),
            );
          },
          [O, k],
        );
        return {
          canvas: r,
          container: c.current,
          setCanvasRef: O,
          setContainerRef: k,
          rive: d,
          RiveComponent: x,
        };
      }
      function O() {
        return (O =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function k(e, t, n) {
        var r = u.useState(null),
          a = r[0],
          o = r[1],
          i = u.useState(n.defaultValue),
          l = i[0],
          c = i[1],
          s = u.useState(null),
          f = s[0],
          d = s[1],
          v = u.useRef(null),
          p = u.useRef(e),
          h = u.useRef(n);
        u.useEffect(
          function () {
            h.current = n;
          },
          [n],
        );
        var b = u.useCallback(function () {
          var e = v.current,
            t = p.current,
            n = h.current;
          if (!e || !t)
            return (o(null), c(n.defaultValue), d(null), function () {});
          var r = n.getProperty(e, t);
          if (r) {
            (o(r),
              c(n.getValue(r)),
              n.getExtendedData && d(n.getExtendedData(r)));
            var u = function () {
              (c(n.getValue(r)),
                n.getExtendedData && d(n.getExtendedData(r)),
                n.onPropertyEvent && n.onPropertyEvent());
            };
            return (
              r.on(u),
              function () {
                r.off(u);
              }
            );
          }
          return function () {};
        }, []);
        u.useEffect(
          function () {
            return ((v.current = t), (p.current = e), b());
          },
          [t, e, b],
        );
        var g = u.useCallback(
            function (e) {
              if (a && v.current === t)
                try {
                  (e(a),
                    h.current.getExtendedData &&
                      d(h.current.getExtendedData(a)));
                  return;
                } catch (e) {}
              if (v.current)
                try {
                  var n = h.current.getProperty(v.current, p.current);
                  n &&
                    (o(n),
                    e(n),
                    h.current.getExtendedData &&
                      d(h.current.getExtendedData(n)));
                } catch (e) {}
            },
            [a, t],
          ),
          y = u.useMemo(
            function () {
              return h.current.buildPropertyOperations(g);
            },
            [g],
          ),
          w = O({ value: l }, y);
        return (n.getExtendedData && (w.extendedData = f), w);
      }
      function P(e, t, n, r, u, a, o) {
        try {
          var i = e[a](o),
            l = i.value;
        } catch (e) {
          n(e);
          return;
        }
        i.done ? t(l) : Promise.resolve(l).then(r, u);
      }
      ((t.default = function (e) {
        var t = e.src,
          n = e.artboard,
          r = e.animations,
          u = e.stateMachines,
          a = e.layout,
          i = e.useOffscreenRenderer,
          l = e.shouldDisableRiveListeners,
          c = e.shouldResizeCanvasToContainer,
          s = e.automaticallyHandleEvents,
          f = e.children,
          d = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              u = {},
              a = Object.getOwnPropertyNames(e);
            for (r = 0; r < a.length; r++)
              !(t.indexOf((n = a[r])) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(e, n) &&
                (u[n] = e[n]);
            return u;
          })(e, [
            "src",
            "artboard",
            "animations",
            "stateMachines",
            "layout",
            "useOffscreenRenderer",
            "shouldDisableRiveListeners",
            "shouldResizeCanvasToContainer",
            "automaticallyHandleEvents",
            "children",
          ]),
          v = E(
            {
              src: t,
              artboard: n,
              animations: r,
              layout: a,
              stateMachines: u,
              autoplay: !0,
              shouldDisableRiveListeners: void 0 !== l && l,
              automaticallyHandleEvents: void 0 !== s && s,
            },
            {
              useOffscreenRenderer: void 0 === i || i,
              shouldResizeCanvasToContainer: void 0 === c || c,
            },
          ).RiveComponent;
        return o.default.createElement(v, d, f);
      }),
        (t.useResizeCanvas = h),
        (t.useRive = E),
        (t.useRiveFile = function (e) {
          var t = u.useState(null),
            n = t[0],
            r = t[1],
            o = u.useState("idle"),
            i = o[0],
            l = o[1];
          return (
            u.useEffect(
              function () {
                var t,
                  n = null;
                return (
                  ((t = function () {
                    return (function (e, t) {
                      var n,
                        r,
                        u,
                        a = {
                          label: 0,
                          sent: function () {
                            if (1 & u[0]) throw u[1];
                            return u[1];
                          },
                          trys: [],
                          ops: [],
                        },
                        o = Object.create(
                          ("function" == typeof Iterator ? Iterator : Object)
                            .prototype,
                        ),
                        i = Object.defineProperty;
                      return (
                        i(o, "next", { value: l(0) }),
                        i(o, "throw", { value: l(1) }),
                        i(o, "return", { value: l(2) }),
                        "function" == typeof Symbol &&
                          i(o, Symbol.iterator, {
                            value: function () {
                              return this;
                            },
                          }),
                        o
                      );
                      function l(i) {
                        return function (l) {
                          var c = [i, l];
                          if (n)
                            throw TypeError("Generator is already executing.");
                          for (; o && ((o = 0), c[0] && (a = 0)), a; )
                            try {
                              if (
                                ((n = 1),
                                r &&
                                  (u =
                                    2 & c[0]
                                      ? r.return
                                      : c[0]
                                        ? r.throw ||
                                          ((u = r.return) && u.call(r), 0)
                                        : r.next) &&
                                  !(u = u.call(r, c[1])).done)
                              )
                                return u;
                              switch (
                                ((r = 0), u && (c = [2 & c[0], u.value]), c[0])
                              ) {
                                case 0:
                                case 1:
                                  u = c;
                                  break;
                                case 4:
                                  return (a.label++, { value: c[1], done: !1 });
                                case 5:
                                  (a.label++, (r = c[1]), (c = [0]));
                                  continue;
                                case 7:
                                  ((c = a.ops.pop()), a.trys.pop());
                                  continue;
                                default:
                                  if (
                                    !(u =
                                      (u = a.trys).length > 0 &&
                                      u[u.length - 1]) &&
                                    (6 === c[0] || 2 === c[0])
                                  ) {
                                    a = 0;
                                    continue;
                                  }
                                  if (
                                    3 === c[0] &&
                                    (!u || (c[1] > u[0] && c[1] < u[3]))
                                  ) {
                                    a.label = c[1];
                                    break;
                                  }
                                  if (6 === c[0] && a.label < u[1]) {
                                    ((a.label = u[1]), (u = c));
                                    break;
                                  }
                                  if (u && a.label < u[2]) {
                                    ((a.label = u[2]), a.ops.push(c));
                                    break;
                                  }
                                  (u[2] && a.ops.pop(), a.trys.pop());
                                  continue;
                              }
                              c = t.call(e, a);
                            } catch (e) {
                              ((c = [6, e]), (r = 0));
                            } finally {
                              n = u = 0;
                            }
                          if (5 & c[0]) throw c[1];
                          return { value: c[0] ? c[1] : void 0, done: !0 };
                        };
                      }
                    })(this, function (t) {
                      try {
                        (l("loading"),
                          (n = new a.RiveFile(e)).init(),
                          n.on(a.EventType.Load, function () {
                            (null == n || n.getInstance(), r(n), l("success"));
                          }),
                          n.on(a.EventType.LoadError, function () {
                            l("failed");
                          }),
                          r(n));
                      } catch (e) {
                        (console.error(e), l("failed"));
                      }
                      return [2];
                    });
                  }),
                  function () {
                    var e = this,
                      n = arguments;
                    return new Promise(function (r, u) {
                      var a = t.apply(e, n);
                      function o(e) {
                        P(a, r, u, o, i, "next", e);
                      }
                      function i(e) {
                        P(a, r, u, o, i, "throw", e);
                      }
                      o(void 0);
                    });
                  })(),
                  function () {
                    null == n || n.cleanup();
                  }
                );
              },
              [e.src, e.buffer],
            ),
            { riveFile: n, status: i }
          );
        }),
        (t.useStateMachineInput = function (e, t, n, r) {
          var o = u.useState(null),
            i = o[0],
            l = o[1];
          return (
            u.useEffect(
              function () {
                var u = function () {
                  if (((e && t && n) || l(null), e && t && n)) {
                    var u = e.stateMachineInputs(t);
                    if (u) {
                      var a = u.find(function (e) {
                        return e.name === n;
                      });
                      (void 0 !== r && a && (a.value = r), l(a || null));
                    }
                  } else l(null);
                };
                (u(),
                  e &&
                    e.on(a.EventType.Load, function () {
                      u();
                    }));
              },
              [e],
            ),
            i
          );
        }),
        (t.useViewModel = function (e, t) {
          var n = null != t ? t : {},
            r = n.name,
            o = n.useDefault,
            i = u.useState(null),
            l = i[0],
            c = i[1];
          return (
            u.useEffect(
              function () {
                var t = function () {
                  e
                    ? c(
                        null != r
                          ? (null == e.viewModelByName
                              ? void 0
                              : e.viewModelByName.call(e, r)) || null
                          : e.defaultViewModel() || null,
                      )
                    : c(null);
                };
                return (
                  t(),
                  e && e.on(a.EventType.Load, t),
                  function () {
                    e && e.off(a.EventType.Load, t);
                  }
                );
              },
              [e, r, void 0 !== o && o],
            ),
            l
          );
        }),
        (t.useViewModelInstance = function (e, t) {
          var n = null != t ? t : {},
            r = n.name,
            a = n.useDefault,
            o = void 0 !== a && a,
            i = n.useNew,
            l = void 0 !== i && i,
            c = n.rive,
            s = u.useState(null),
            f = s[0],
            d = s[1];
          return (
            u.useEffect(
              function () {
                if (!e) return void d(null);
                var t = null;
                (d(
                  (t =
                    null != r
                      ? e.instanceByName(r) || null
                      : o
                        ? (null == e.defaultInstance
                            ? void 0
                            : e.defaultInstance.call(e)) || null
                        : l
                          ? (null == e.instance
                              ? void 0
                              : e.instance.call(e)) || null
                          : (null == e.defaultInstance
                              ? void 0
                              : e.defaultInstance.call(e)) || null),
                ),
                  c &&
                    t &&
                    c.viewModelInstance !== t &&
                    c.bindViewModelInstance(t));
              },
              [e, r, o, l, c],
            ),
            f
          );
        }),
        (t.useViewModelInstanceArtboard = function (e, t) {
          return {
            setValue: k(e, t, {
              getProperty: u.useCallback(function (e, t) {
                return e.artboard(t);
              }, []),
              getValue: u.useCallback(function () {}, []),
              defaultValue: null,
              buildPropertyOperations: u.useCallback(function (e) {
                return {
                  setValue: function (t) {
                    e(function (e) {
                      e.value = t;
                    });
                  },
                };
              }, []),
            }).setValue,
          };
        }),
        (t.useViewModelInstanceBoolean = function (e, t) {
          var n = k(e, t, {
            getProperty: u.useCallback(function (e, t) {
              return e.boolean(t);
            }, []),
            getValue: u.useCallback(function (e) {
              return e.value;
            }, []),
            defaultValue: null,
            buildPropertyOperations: u.useCallback(function (e) {
              return {
                setValue: function (t) {
                  e(function (e) {
                    e.value = t;
                  });
                },
              };
            }, []),
          });
          return { value: n.value, setValue: n.setValue };
        }),
        (t.useViewModelInstanceColor = function (e, t) {
          var n = k(e, t, {
            getProperty: u.useCallback(function (e, t) {
              return e.color(t);
            }, []),
            getValue: u.useCallback(function (e) {
              return e.value;
            }, []),
            defaultValue: null,
            buildPropertyOperations: u.useCallback(function (e) {
              return {
                setValue: function (t) {
                  e(function (e) {
                    e.value = t;
                  });
                },
                setRgb: function (t, n, r) {
                  e(function (e) {
                    e.rgb(t, n, r);
                  });
                },
                setRgba: function (t, n, r, u) {
                  e(function (e) {
                    e.rgba(t, n, r, u);
                  });
                },
                setAlpha: function (t) {
                  e(function (e) {
                    e.alpha(t);
                  });
                },
                setOpacity: function (t) {
                  e(function (e) {
                    e.opacity(t);
                  });
                },
              };
            }, []),
          });
          return {
            value: n.value,
            setValue: n.setValue,
            setRgb: n.setRgb,
            setRgba: n.setRgba,
            setAlpha: n.setAlpha,
            setOpacity: n.setOpacity,
          };
        }),
        (t.useViewModelInstanceEnum = function (e, t) {
          var n = k(e, t, {
            getProperty: u.useCallback(function (e, t) {
              return e.enum(t);
            }, []),
            getValue: u.useCallback(function (e) {
              return e.value;
            }, []),
            defaultValue: null,
            getExtendedData: u.useCallback(function (e) {
              return e.values;
            }, []),
            buildPropertyOperations: u.useCallback(function (e) {
              return {
                setValue: function (t) {
                  e(function (e) {
                    e.value = t;
                  });
                },
              };
            }, []),
          });
          return {
            value: n.value,
            values: n.extendedData || [],
            setValue: n.setValue,
          };
        }),
        (t.useViewModelInstanceImage = function (e, t) {
          return {
            setValue: k(e, t, {
              getProperty: u.useCallback(function (e, t) {
                return e.image(t);
              }, []),
              getValue: u.useCallback(function () {}, []),
              defaultValue: null,
              buildPropertyOperations: u.useCallback(function (e) {
                return {
                  setValue: function (t) {
                    e(function (e) {
                      e.value = t;
                    });
                  },
                };
              }, []),
            }).setValue,
          };
        }),
        (t.useViewModelInstanceList = function (e, t) {
          var n,
            r = u.useState(0)[1],
            a = k(e, t, {
              getProperty: u.useCallback(function (e, t) {
                return e.list(t);
              }, []),
              getValue: u.useCallback(function (e) {
                return e.length;
              }, []),
              defaultValue: null,
              onPropertyEvent: function () {
                r(function (e) {
                  return e + 1;
                });
              },
              buildPropertyOperations: u.useCallback(function (e) {
                return {
                  addInstance: function (t) {
                    e(function (e) {
                      return e.addInstance(t);
                    });
                  },
                  addInstanceAt: function (t, n) {
                    var r = !1;
                    return (
                      e(function (e) {
                        r = e.addInstanceAt(t, n);
                      }),
                      r
                    );
                  },
                  removeInstance: function (t) {
                    e(function (e) {
                      return e.removeInstance(t);
                    });
                  },
                  removeInstanceAt: function (t) {
                    e(function (e) {
                      return e.removeInstanceAt(t);
                    });
                  },
                  getInstanceAt: function (t) {
                    var n = null;
                    return (
                      e(function (e) {
                        n = e.instanceAt(t);
                      }),
                      n
                    );
                  },
                  swap: function (t, n) {
                    e(function (e) {
                      return e.swap(t, n);
                    });
                  },
                };
              }, []),
            });
          return {
            length: null != (n = a.value) ? n : 0,
            addInstance: a.addInstance,
            addInstanceAt: a.addInstanceAt,
            removeInstance: a.removeInstance,
            removeInstanceAt: a.removeInstanceAt,
            getInstanceAt: a.getInstanceAt,
            swap: a.swap,
          };
        }),
        (t.useViewModelInstanceNumber = function (e, t) {
          var n = k(e, t, {
            getProperty: u.useCallback(function (e, t) {
              return e.number(t);
            }, []),
            getValue: u.useCallback(function (e) {
              return e.value;
            }, []),
            defaultValue: null,
            buildPropertyOperations: u.useCallback(function (e) {
              return {
                setValue: function (t) {
                  e(function (e) {
                    e.value = t;
                  });
                },
              };
            }, []),
          });
          return { value: n.value, setValue: n.setValue };
        }),
        (t.useViewModelInstanceString = function (e, t) {
          var n = k(e, t, {
            getProperty: u.useCallback(function (e, t) {
              return e.string(t);
            }, []),
            getValue: u.useCallback(function (e) {
              return e.value;
            }, []),
            defaultValue: null,
            buildPropertyOperations: u.useCallback(function (e) {
              return {
                setValue: function (t) {
                  e(function (e) {
                    e.value = t;
                  });
                },
              };
            }, []),
          });
          return { value: n.value, setValue: n.setValue };
        }),
        (t.useViewModelInstanceTrigger = function (e, t, n) {
          var r = (null != n ? n : {}).onTrigger;
          return {
            trigger: k(e, t, {
              getProperty: u.useCallback(function (e, t) {
                return e.trigger(t);
              }, []),
              getValue: u.useCallback(function () {}, []),
              defaultValue: null,
              onPropertyEvent: r,
              buildPropertyOperations: u.useCallback(function (e) {
                return {
                  trigger: function () {
                    e(function (e) {
                      e.trigger();
                    });
                  },
                };
              }, []),
            }).trigger,
          };
        }),
        Object.keys(a).forEach(function (e) {
          "default" === e ||
            t.hasOwnProperty(e) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return a[e];
              },
            });
        }));
    },
    46728: (e, t, n) => {
      e.exports = n(26626);
    },
    95290: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => u });
      var r = n(36439);
      let u = r.forwardRef(function ({ title: e, titleId: t, ...n }, u) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 20 20",
              fill: "currentColor",
              "aria-hidden": "true",
              "data-slot": "icon",
              ref: u,
              "aria-labelledby": t,
            },
            n,
          ),
          e ? r.createElement("title", { id: t }, e) : null,
          r.createElement("path", {
            fillRule: "evenodd",
            d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
            clipRule: "evenodd",
          }),
        );
      });
    },
  },
]);
