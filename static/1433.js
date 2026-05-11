(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1433],
  {
    11677: (e, t, n) => {
      e.exports = n(49439);
    },
    11779: (e, t) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "errorOnce", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }));
      let n = (e) => {};
    },
    44190: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r,
        u = n(36439),
        a = n(15384),
        o = (function (e) {
          return e && "object" == typeof e && "default" in e
            ? e
            : { default: e };
        })(u);
      function l(e) {
        var t = e || i(),
          n = u.useState(t),
          r = n[0],
          a = n[1];
        return (
          u.useEffect(
            function () {
              if ("u" > typeof window && "matchMedia" in window) {
                var t = function () {
                    a(e || i());
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
      function i() {
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
          i,
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
          P = E.width,
          k = R[1],
          I = u.useState({ height: 0, width: 0 }),
          V = I[0],
          M = V.height,
          x = V.width,
          j = I[1],
          L = u.useState(!0),
          T = L[0],
          S = L[1],
          _ = C.fitCanvasToArtboardHeight,
          D = C.shouldResizeCanvasToContainer,
          A = C.useDevicePixelRatio,
          H = C.customDevicePixelRatio,
          N =
            (void 0 === (t = D) && (t = !0),
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
                (i = 0),
                function () {
                  for (
                    var e = this, t = arguments.length, n = Array(t), r = 0;
                    r < t;
                    r++
                  )
                    n[r] = arguments[r];
                  (clearTimeout(i),
                    (i = window.setTimeout(function () {
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
          z = l(H),
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
              return _ && m
                ? { width: u, height: (m.maxY / m.maxX) * u }
                : { width: u, height: a };
            },
            [g, _, U, F],
          );
        (u.useEffect(
          function () {
            if (D && g.current && h) {
              var e = W(),
                t = e.width,
                n = e.height,
                r = !1;
              if (b) {
                var u = t !== P || n !== O;
                if (
                  (C.fitCanvasToArtboardHeight &&
                    u &&
                    ((g.current.style.height = n + "px"), (r = !0)),
                  C.useDevicePixelRatio)
                ) {
                  var a = t * z !== x || n * z !== M;
                  if (u || a) {
                    var o = z * t,
                      l = z * n;
                    ((b.width = o),
                      (b.height = l),
                      (b.style.width = t + "px"),
                      (b.style.height = n + "px"),
                      j({ width: o, height: l }),
                      (r = !0));
                  }
                } else
                  u &&
                    ((b.width = t),
                    (b.height = n),
                    j({ width: t, height: n }),
                    (r = !0));
                k({ width: t, height: n });
              }
              (w && (T || r) && w && w(), T && S(!1));
            }
          },
          [b, g, N, z, W, T, S, M, x, O, P, w, D, _, A, h],
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
          l = e.children,
          i = C(e, [
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
              i,
            ),
            l,
          ),
        );
      }
      function E(e, t) {
        void 0 === t && (t = {});
        var n = u.useState(null),
          r = n[0],
          i = n[1],
          c = u.useRef(null),
          s = u.useRef(null),
          f = u.useState(null),
          d = f[0],
          v = f[1],
          b = !!e,
          g = p(t),
          y = l(),
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
          (null === e && r && ((r.height = 0), (r.width = 0)), i(e));
        }, []);
        u.useEffect(
          function () {
            if (r && e) {
              var t,
                n = null != d;
              if (null == d) {
                var u = g.useOffscreenRenderer,
                  o = e.onRiveReady,
                  l = C(e, ["onRiveReady"]);
                ((t = new a.Rive(
                  m({ useOffscreenRenderer: u }, l, { canvas: r }),
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
        var P = u.useCallback(function (e) {
            c.current = e;
          }, []),
          k = {
            observe: u.useCallback(function (e, t) {
              w().registerCallback(e, t);
            }, []),
            unobserve: u.useCallback(function (e) {
              w().removeCallback(e);
            }, []),
          },
          I = k.observe,
          V = k.unobserve;
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
              m({ setContainerRef: P, setCanvasRef: O }, e),
            );
          },
          [O, P],
        );
        return {
          canvas: r,
          container: c.current,
          setCanvasRef: O,
          setContainerRef: P,
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
      function P(e, t, n) {
        var r = u.useState(null),
          a = r[0],
          o = r[1],
          l = u.useState(n.defaultValue),
          i = l[0],
          c = l[1],
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
          w = O({ value: i }, y);
        return (n.getExtendedData && (w.extendedData = f), w);
      }
      function k(e, t, n, r, u, a, o) {
        try {
          var l = e[a](o),
            i = l.value;
        } catch (e) {
          n(e);
          return;
        }
        l.done ? t(i) : Promise.resolve(i).then(r, u);
      }
      ((t.default = function (e) {
        var t = e.src,
          n = e.artboard,
          r = e.animations,
          u = e.stateMachines,
          a = e.layout,
          l = e.useOffscreenRenderer,
          i = e.shouldDisableRiveListeners,
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
              shouldDisableRiveListeners: void 0 !== i && i,
              automaticallyHandleEvents: void 0 !== s && s,
            },
            {
              useOffscreenRenderer: void 0 === l || l,
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
            l = o[0],
            i = o[1];
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
                        l = Object.defineProperty;
                      return (
                        l(o, "next", { value: i(0) }),
                        l(o, "throw", { value: i(1) }),
                        l(o, "return", { value: i(2) }),
                        "function" == typeof Symbol &&
                          l(o, Symbol.iterator, {
                            value: function () {
                              return this;
                            },
                          }),
                        o
                      );
                      function i(l) {
                        return function (i) {
                          var c = [l, i];
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
                        (i("loading"),
                          (n = new a.RiveFile(e)).init(),
                          n.on(a.EventType.Load, function () {
                            (null == n || n.getInstance(), r(n), i("success"));
                          }),
                          n.on(a.EventType.LoadError, function () {
                            i("failed");
                          }),
                          r(n));
                      } catch (e) {
                        (console.error(e), i("failed"));
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
                        k(a, r, u, o, l, "next", e);
                      }
                      function l(e) {
                        k(a, r, u, o, l, "throw", e);
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
            { riveFile: n, status: l }
          );
        }),
        (t.useStateMachineInput = function (e, t, n, r) {
          var o = u.useState(null),
            l = o[0],
            i = o[1];
          return (
            u.useEffect(
              function () {
                var u = function () {
                  if (((e && t && n) || i(null), e && t && n)) {
                    var u = e.stateMachineInputs(t);
                    if (u) {
                      var a = u.find(function (e) {
                        return e.name === n;
                      });
                      (void 0 !== r && a && (a.value = r), i(a || null));
                    }
                  } else i(null);
                };
                (u(),
                  e &&
                    e.on(a.EventType.Load, function () {
                      u();
                    }));
              },
              [e],
            ),
            l
          );
        }),
        (t.useViewModel = function (e, t) {
          var n = null != t ? t : {},
            r = n.name,
            o = n.useDefault,
            l = u.useState(null),
            i = l[0],
            c = l[1];
          return (
            u.useEffect(
              function () {
                var t = function () {
                  if (!e) return void c(null);
                  c(
                    null != r
                      ? (null == e.viewModelByName
                          ? void 0
                          : e.viewModelByName.call(e, r)) || null
                      : e.defaultViewModel() || null,
                  );
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
            i
          );
        }),
        (t.useViewModelInstance = function (e, t) {
          var n = null != t ? t : {},
            r = n.name,
            a = n.useDefault,
            o = void 0 !== a && a,
            l = n.useNew,
            i = void 0 !== l && l,
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
                        : i
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
              [e, r, o, i, c],
            ),
            f
          );
        }),
        (t.useViewModelInstanceArtboard = function (e, t) {
          return {
            setValue: P(e, t, {
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
          var n = P(e, t, {
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
          var n = P(e, t, {
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
          var n = P(e, t, {
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
            setValue: P(e, t, {
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
            a = P(e, t, {
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
          var n = P(e, t, {
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
          var n = P(e, t, {
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
            trigger: P(e, t, {
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
    49439: (e, t, n) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return R;
          },
          useLinkStatus: function () {
            return C;
          },
        }));
      let r = n(26908),
        u = n(2183),
        a = r._(n(36439)),
        o = n(13),
        l = n(82113),
        i = n(74292),
        c = n(34550),
        s = n(92483),
        f = n(90776),
        d = n(66044),
        v = n(91141),
        p = n(22640),
        h = n(44277);
      n(11779);
      let b = new Set();
      function g(e, t, n, r) {
        if ((0, l.isLocalURL)(t)) {
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
            if (b.has(u)) return;
            b.add(u);
          }
          e.prefetch(t, n, r).catch((e) => {});
        }
      }
      function y(e) {
        return "string" == typeof e ? e : (0, i.formatUrl)(e);
      }
      let w = a.default.forwardRef(function (e, t) {
          let n,
            r,
            {
              href: i,
              as: b,
              children: w,
              prefetch: m = null,
              passHref: C,
              replace: R,
              shallow: E,
              scroll: O,
              locale: P,
              onClick: k,
              onNavigate: I,
              onMouseEnter: V,
              onTouchStart: M,
              legacyBehavior: x = !1,
              ...j
            } = e;
          ((n = w),
            x &&
              ("string" == typeof n || "number" == typeof n) &&
              (n = (0, u.jsx)("a", { children: n })));
          let L = a.default.useContext(f.RouterContext),
            T = !1 !== m,
            { href: S, as: _ } = a.default.useMemo(() => {
              if (!L) {
                let e = y(i);
                return { href: e, as: b ? y(b) : e };
              }
              let [e, t] = (0, o.resolveHref)(L, i, !0);
              return { href: e, as: b ? (0, o.resolveHref)(L, b) : t || e };
            }, [L, i, b]),
            D = a.default.useRef(S),
            A = a.default.useRef(_);
          x && (r = a.default.Children.only(n));
          let H = x ? r && "object" == typeof r && r.ref : t,
            [N, z, B] = (0, d.useIntersection)({ rootMargin: "200px" }),
            U = a.default.useCallback(
              (e) => {
                ((A.current !== _ || D.current !== S) &&
                  (B(), (A.current = _), (D.current = S)),
                  N(e));
              },
              [_, S, B, N],
            ),
            F = (0, h.useMergedRef)(U, H);
          a.default.useEffect(() => {
            L && z && T && g(L, S, _, { locale: P });
          }, [_, S, z, P, T, null == L ? void 0 : L.locale, L]);
          let W = {
            ref: F,
            onClick(e) {
              (x || "function" != typeof k || k(e),
                x &&
                  r.props &&
                  "function" == typeof r.props.onClick &&
                  r.props.onClick(e),
                L &&
                  (e.defaultPrevented ||
                    (function (e, t, n, r, u, a, o, i, c) {
                      let { nodeName: s } = e.currentTarget;
                      if (
                        !(
                          ("A" === s.toUpperCase() &&
                            (function (e) {
                              let t = e.currentTarget.getAttribute("target");
                              return (
                                (t && "_self" !== t) ||
                                e.metaKey ||
                                e.ctrlKey ||
                                e.shiftKey ||
                                e.altKey ||
                                (e.nativeEvent && 2 === e.nativeEvent.which)
                              );
                            })(e)) ||
                          e.currentTarget.hasAttribute("download")
                        )
                      ) {
                        if (!(0, l.isLocalURL)(n)) {
                          u && (e.preventDefault(), location.replace(n));
                          return;
                        }
                        (e.preventDefault(),
                          (() => {
                            if (c) {
                              let e = !1;
                              if (
                                (c({
                                  preventDefault: () => {
                                    e = !0;
                                  },
                                }),
                                e)
                              )
                                return;
                            }
                            let e = null == o || o;
                            "beforePopState" in t
                              ? t[u ? "replace" : "push"](n, r, {
                                  shallow: a,
                                  locale: i,
                                  scroll: e,
                                })
                              : t[u ? "replace" : "push"](r || n, {
                                  scroll: e,
                                });
                          })());
                      }
                    })(e, L, S, _, R, E, O, P, I)));
            },
            onMouseEnter(e) {
              (x || "function" != typeof V || V(e),
                x &&
                  r.props &&
                  "function" == typeof r.props.onMouseEnter &&
                  r.props.onMouseEnter(e),
                L &&
                  g(L, S, _, {
                    locale: P,
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
                L &&
                  g(L, S, _, {
                    locale: P,
                    priority: !0,
                    bypassPrefetchedCheck: !0,
                  }));
            },
          };
          if ((0, c.isAbsoluteUrl)(_)) W.href = _;
          else if (!x || C || ("a" === r.type && !("href" in r.props))) {
            let e = void 0 !== P ? P : null == L ? void 0 : L.locale;
            W.href =
              ((null == L ? void 0 : L.isLocaleDomain) &&
                (0, v.getDomainLocale)(
                  _,
                  e,
                  null == L ? void 0 : L.locales,
                  null == L ? void 0 : L.domainLocales,
                )) ||
              (0, p.addBasePath)(
                (0, s.addLocale)(_, e, null == L ? void 0 : L.defaultLocale),
              );
          }
          return x
            ? a.default.cloneElement(r, W)
            : (0, u.jsx)("a", { ...j, ...W, children: n });
        }),
        m = (0, a.createContext)({ pending: !1 }),
        C = () => (0, a.useContext)(m),
        R = w;
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    66044: (e, t, n) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }));
      let r = n(36439),
        u = n(16875),
        a = "function" == typeof IntersectionObserver,
        o = new Map(),
        l = [];
      function i(e) {
        let { rootRef: t, rootMargin: n, disabled: i } = e,
          c = i || !a,
          [s, f] = (0, r.useState)(!1),
          d = (0, r.useRef)(null),
          v = (0, r.useCallback)((e) => {
            d.current = e;
          }, []);
        return (
          (0, r.useEffect)(() => {
            if (a) {
              if (c || s) return;
              let e = d.current;
              if (e && e.tagName)
                return (function (e, t, n) {
                  let {
                    id: r,
                    observer: u,
                    elements: a,
                  } = (function (e) {
                    let t,
                      n = { root: e.root || null, margin: e.rootMargin || "" },
                      r = l.find(
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
                      l.push(n),
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
                        let e = l.findIndex(
                          (e) => e.root === r.root && e.margin === r.margin,
                        );
                        e > -1 && l.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && f(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: n,
                });
            } else if (!s) {
              let e = (0, u.requestIdleCallback)(() => f(!0));
              return () => (0, u.cancelIdleCallback)(e);
            }
          }, [c, n, t, s, d.current]),
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
    91141: (e, t, n) => {
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
        n(71561),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default)));
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
