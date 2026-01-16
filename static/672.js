(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [672],
  {
    76057: function (n, r, s) {
      Object.defineProperty(r, "__esModule", { value: !0 });
      var f = s(52983),
        d = s(83186),
        v = f && "object" == typeof f && "default" in f ? f : { default: f },
        u = function () {
          return (u =
            Object.assign ||
            function (n) {
              for (var r, s = 1, f = arguments.length; s < f; s++)
                for (var d in (r = arguments[s]))
                  Object.prototype.hasOwnProperty.call(r, d) && (n[d] = r[d]);
              return n;
            }).apply(this, arguments);
        };
      function a(n, r) {
        var s = {};
        for (var f in n)
          Object.prototype.hasOwnProperty.call(n, f) &&
            0 > r.indexOf(f) &&
            (s[f] = n[f]);
        if (null != n && "function" == typeof Object.getOwnPropertySymbols) {
          var d = 0;
          for (f = Object.getOwnPropertySymbols(n); d < f.length; d++)
            0 > r.indexOf(f[d]) &&
              Object.prototype.propertyIsEnumerable.call(n, f[d]) &&
              (s[f[d]] = n[f[d]]);
        }
        return s;
      }
      function l(n) {
        var r = n || c(),
          s = f.useState(r),
          d = s[0],
          v = s[1];
        return (
          f.useEffect(
            function () {
              if ("undefined" != typeof window && "matchMedia" in window) {
                var e = function () {
                    v(n || c());
                  },
                  r = window.matchMedia(
                    "screen and (resolution: ".concat(d, "dppx)"),
                  );
                return (
                  r.hasOwnProperty("addEventListener")
                    ? r.addEventListener("change", e)
                    : r.addListener(e),
                  function () {
                    r.hasOwnProperty("removeEventListener")
                      ? r.removeEventListener("change", e)
                      : r.removeListener(e);
                  }
                );
              }
            },
            [d, n],
          ),
          d
        );
      }
      function c() {
        return Math.min(
          Math.max(
            1,
            "undefined" != typeof window &&
              "number" == typeof window.devicePixelRatio
              ? window.devicePixelRatio
              : 1,
          ),
          3,
        );
      }
      var p = (function () {
          function e() {}
          return (
            (e.prototype.observe = function () {}),
            (e.prototype.unobserve = function () {}),
            (e.prototype.disconnect = function () {}),
            e
          );
        })(),
        h = globalThis.ResizeObserver || p,
        y = void 0 !== globalThis.ResizeObserver,
        m = !y,
        w = {
          useDevicePixelRatio: !0,
          fitCanvasToArtboardHeight: !1,
          useOffscreenRenderer: !0,
          shouldResizeCanvasToContainer: !0,
        };
      function b(n) {
        return Object.assign({}, w, n);
      }
      function g(n) {
        var r,
          s,
          d,
          v,
          p,
          w,
          C,
          O = n.riveLoaded,
          P = void 0 !== O && O,
          k = n.canvasElem,
          I = n.containerRef,
          M = n.options,
          T = n.onCanvasHasResized,
          _ = n.artboardBounds,
          A = b(void 0 === M ? {} : M),
          S = f.useState({ height: 0, width: 0 }),
          L = S[0],
          j = L.height,
          D = L.width,
          N = S[1],
          H = f.useState({ height: 0, width: 0 }),
          z = H[0],
          U = z.height,
          F = z.width,
          B = H[1],
          K = f.useState(!0),
          W = K[0],
          Y = K[1],
          G = A.fitCanvasToArtboardHeight,
          X = A.shouldResizeCanvasToContainer,
          q = A.useDevicePixelRatio,
          Z = A.customDevicePixelRatio,
          J =
            (void 0 === (r = X) && (r = !0),
            (d = (s = f.useState({ width: 0, height: 0 }))[0]),
            (v = s[1]),
            f.useEffect(function () {
              if ("undefined" != typeof window && r) {
                var e = function () {
                  v({ width: window.innerWidth, height: window.innerHeight });
                };
                return (
                  m && (e(), window.addEventListener("resize", e)),
                  function () {
                    return window.removeEventListener("resize", e);
                  }
                );
              }
            }, []),
            (C = f.useRef(
              new h(
                ((p = function (n) {
                  y &&
                    v({
                      width: n[n.length - 1].contentRect.width,
                      height: n[n.length - 1].contentRect.height,
                    });
                }),
                (w = 0),
                function () {
                  for (var n = this, r = [], s = 0; s < arguments.length; s++)
                    r[s] = arguments[s];
                  (clearTimeout(w),
                    (w = window.setTimeout(function () {
                      return p.apply(n, r);
                    }, 0)));
                }),
              ),
            )),
            f.useEffect(
              function () {
                var n = C.current;
                if (r) {
                  var s = I.current;
                  return (
                    I.current && y && n.observe(I.current),
                    function () {
                      (n.disconnect(), s && y && n.unobserve(s));
                    }
                  );
                }
                n.disconnect();
              },
              [I, C],
            ),
            d),
          Q = l(Z),
          $ = null != _ ? _ : {},
          ee = $.maxX,
          et = $.maxY,
          en = f.useCallback(
            function () {
              var n,
                r,
                s,
                f,
                d =
                  null !==
                    (r =
                      null === (n = I.current) || void 0 === n
                        ? void 0
                        : n.clientWidth) && void 0 !== r
                    ? r
                    : 0,
                v =
                  null !==
                    (f =
                      null === (s = I.current) || void 0 === s
                        ? void 0
                        : s.clientHeight) && void 0 !== f
                    ? f
                    : 0;
              return G && _
                ? { width: d, height: d * (_.maxY / _.maxX) }
                : { width: d, height: v };
            },
            [I, G, ee, et],
          );
        (f.useEffect(
          function () {
            if (X && I.current && P) {
              var n = en(),
                r = n.width,
                s = n.height,
                f = !1;
              if (k) {
                var d = r !== D || s !== j;
                if (
                  (A.fitCanvasToArtboardHeight &&
                    d &&
                    ((I.current.style.height = s + "px"), (f = !0)),
                  A.useDevicePixelRatio)
                ) {
                  if (d || r * Q !== F || s * Q !== U) {
                    var v = Q * r,
                      p = Q * s;
                    ((k.width = v),
                      (k.height = p),
                      (k.style.width = r + "px"),
                      (k.style.height = s + "px"),
                      B({ width: v, height: p }),
                      (f = !0));
                  }
                } else
                  d &&
                    ((k.width = r),
                    (k.height = s),
                    B({ width: r, height: s }),
                    (f = !0));
                N({ width: r, height: s });
              }
              (T && (W || f) && T && T(), W && Y(!1));
            }
          },
          [k, I, J, Q, en, W, Y, U, F, j, D, T, X, G, q, P],
        ),
          f.useEffect(
            function () {
              B({ width: 0, height: 0 });
            },
            [k],
          ));
      }
      var C,
        O = (function () {
          function e() {}
          return (
            (e.prototype.observe = function () {}),
            (e.prototype.unobserve = function () {}),
            (e.prototype.disconnect = function () {}),
            e
          );
        })(),
        P = globalThis.IntersectionObserver || O,
        k = (function () {
          function e() {
            var n = this;
            ((this.elementsMap = new Map()),
              (this.onObserved = function (r) {
                r.forEach(function (r) {
                  var s = n.elementsMap.get(r.target);
                  s && s(r);
                });
              }),
              (this.observer = new P(this.onObserved)));
          }
          return (
            (e.prototype.registerCallback = function (n, r) {
              (this.observer.observe(n), this.elementsMap.set(n, r));
            }),
            (e.prototype.removeCallback = function (n) {
              (this.observer.unobserve(n), this.elementsMap.delete(n));
            }),
            e
          );
        })(),
        R = function () {
          return (C || (C = new k()), C);
        };
      function E(n) {
        var r = n.setContainerRef,
          s = n.setCanvasRef,
          f = n.className,
          d = void 0 === f ? "" : f,
          p = n.style,
          h = n.children,
          y = a(n, [
            "setContainerRef",
            "setCanvasRef",
            "className",
            "style",
            "children",
          ]),
          m = u({ width: "100%", height: "100%" }, p);
        return v.default.createElement(
          "div",
          u({ ref: r, className: d }, !d && { style: m }),
          v.default.createElement(
            "canvas",
            u(
              { ref: s, style: { verticalAlign: "top", width: 0, height: 0 } },
              y,
            ),
            h,
          ),
        );
      }
      function V(n, r) {
        void 0 === r && (r = {});
        var s = f.useState(null),
          p = s[0],
          h = s[1],
          y = f.useRef(null),
          m = f.useRef(null),
          w = f.useState(null),
          C = w[0],
          O = w[1],
          P = !!n,
          k = b(r),
          I = l(),
          M = f.useCallback(
            function () {
              if (C) {
                if (C.layout && C.layout.fit === d.Fit.Layout && p) {
                  var n = I * C.layout.layoutScaleFactor;
                  ((C.devicePixelRatioUsed = I),
                    (C.artboardWidth = (null == p ? void 0 : p.width) / n),
                    (C.artboardHeight = (null == p ? void 0 : p.height) / n));
                }
                (C.startRendering(), C.resizeToCanvas());
              }
            },
            [C, I],
          );
        g({
          riveLoaded: !!C,
          canvasElem: p,
          containerRef: y,
          options: k,
          onCanvasHasResized: M,
          artboardBounds: null == C ? void 0 : C.bounds,
        });
        var T = f.useCallback(function (n) {
          (null === n && p && ((p.height = 0), (p.width = 0)), h(n));
        }, []);
        f.useEffect(
          function () {
            if (p && n) {
              var r,
                s = null != C;
              if (null == C) {
                var f = k.useOffscreenRenderer,
                  v = n.onRiveReady,
                  h = a(n, ["onRiveReady"]);
                ((r = new d.Rive(
                  u(u({ useOffscreenRenderer: f }, h), { canvas: p }),
                )),
                  null != m.current && m.current.cleanup(),
                  (m.current = r),
                  r.on(d.EventType.Load, function () {
                    ((s = !0), v && v(r), p ? O(r) : r.cleanup());
                  }));
              }
              return function () {
                s || null == r || r.cleanup();
              };
            }
          },
          [p, P, C],
        );
        var _ = f.useCallback(function (n) {
            y.current = n;
          }, []),
          A = {
            observe: f.useCallback(function (n, r) {
              R().registerCallback(n, r);
            }, []),
            unobserve: f.useCallback(function (n) {
              R().removeCallback(n);
            }, []),
          },
          S = A.observe,
          L = A.unobserve;
        (f.useEffect(
          function () {
            var n,
              r = !1,
              t = function () {
                if (p && r) {
                  var n = p.getBoundingClientRect();
                  n.width > 0 &&
                    n.height > 0 &&
                    n.top <
                      (window.innerHeight ||
                        document.documentElement.clientHeight) &&
                    n.bottom > 0 &&
                    n.left <
                      (window.innerWidth ||
                        document.documentElement.clientWidth) &&
                    n.right > 0 &&
                    (null == C || C.startRendering(), (r = !1));
                }
              };
            return (
              p &&
                !1 !== k.shouldUseIntersectionObserver &&
                S(p, function (s) {
                  (s.isIntersecting
                    ? C && C.startRendering()
                    : C && C.stopRendering(),
                    (r = !s.isIntersecting),
                    clearTimeout(n),
                    s.isIntersecting ||
                      0 !== s.boundingClientRect.width ||
                      (n = setTimeout(t, 10)));
                }),
              function () {
                p && L(p);
              }
            );
          },
          [S, L, C, p, k.shouldUseIntersectionObserver],
        ),
          f.useEffect(
            function () {
              return function () {
                C && (C.cleanup(), O(null));
              };
            },
            [C, p],
          ),
          f.useEffect(function () {
            return function () {
              null != m.current && m.current.cleanup();
            };
          }, []));
        var j = null == n ? void 0 : n.animations;
        f.useEffect(
          function () {
            C &&
              j &&
              (C.isPlaying
                ? (C.stop(C.animationNames), C.play(j))
                : C.isPaused && (C.stop(C.animationNames), C.pause(j)));
          },
          [j, C],
        );
        var D = f.useCallback(
          function (n) {
            return v.default.createElement(
              E,
              u({ setContainerRef: _, setCanvasRef: T }, n),
            );
          },
          [T, _],
        );
        return {
          canvas: p,
          container: y.current,
          setCanvasRef: T,
          setContainerRef: _,
          rive: C,
          RiveComponent: D,
        };
      }
      function x(n, r, s) {
        var d = f.useState(null),
          v = d[0],
          p = d[1],
          h = f.useState(s.defaultValue),
          y = h[0],
          m = h[1],
          w = f.useState(null),
          C = w[0],
          O = w[1],
          P = f.useRef(null),
          k = f.useRef(n),
          I = f.useRef(s);
        f.useEffect(
          function () {
            I.current = s;
          },
          [s],
        );
        var M = f.useCallback(function () {
          var n = P.current,
            r = k.current,
            s = I.current;
          if (!n || !r)
            return (p(null), m(s.defaultValue), O(null), function () {});
          var f = s.getProperty(n, r);
          if (f) {
            (p(f),
              m(s.getValue(f)),
              s.getExtendedData && O(s.getExtendedData(f)));
            var u = function () {
              (m(s.getValue(f)),
                s.getExtendedData && O(s.getExtendedData(f)),
                s.onPropertyEvent && s.onPropertyEvent());
            };
            return (
              f.on(u),
              function () {
                f.off(u);
              }
            );
          }
          return function () {};
        }, []);
        f.useEffect(
          function () {
            return ((P.current = r), (k.current = n), M());
          },
          [r, n, M],
        );
        var T = f.useCallback(
            function (n) {
              if (v && P.current === r)
                try {
                  return (
                    n(v),
                    void (
                      I.current.getExtendedData &&
                      O(I.current.getExtendedData(v))
                    )
                  );
                } catch (n) {}
              if (P.current)
                try {
                  var s = I.current.getProperty(P.current, k.current);
                  s &&
                    (p(s),
                    n(s),
                    I.current.getExtendedData &&
                      O(I.current.getExtendedData(s)));
                } catch (n) {}
            },
            [v, r],
          ),
          _ = f.useMemo(
            function () {
              return I.current.buildPropertyOperations(T);
            },
            [T],
          ),
          A = u({ value: y }, _);
        return (s.getExtendedData && (A.extendedData = C), A);
      }
      ((r.default = function (n) {
        var r = n.src,
          s = n.artboard,
          f = n.animations,
          d = n.stateMachines,
          p = n.layout,
          h = n.useOffscreenRenderer,
          y = n.shouldDisableRiveListeners,
          m = n.shouldResizeCanvasToContainer,
          w = n.automaticallyHandleEvents,
          C = n.children,
          O = a(n, [
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
          P = V(
            {
              src: r,
              artboard: s,
              animations: f,
              layout: p,
              stateMachines: d,
              autoplay: !0,
              shouldDisableRiveListeners: void 0 !== y && y,
              automaticallyHandleEvents: void 0 !== w && w,
            },
            {
              useOffscreenRenderer: void 0 === h || h,
              shouldResizeCanvasToContainer: void 0 === m || m,
            },
          ).RiveComponent;
        return v.default.createElement(P, u({}, O), C);
      }),
        (r.useResizeCanvas = g),
        (r.useRive = V),
        (r.useRiveFile = function (n) {
          var r = this,
            s = f.useState(null),
            v = s[0],
            p = s[1],
            h = f.useState("idle"),
            y = h[0],
            m = h[1];
          return (
            f.useEffect(
              function () {
                var s,
                  f,
                  v,
                  h = null;
                return (
                  (s = void 0),
                  (f = void 0),
                  (v = function () {
                    return (function (n, r) {
                      var s,
                        f,
                        d,
                        v,
                        p = {
                          label: 0,
                          sent: function () {
                            if (1 & d[0]) throw d[1];
                            return d[1];
                          },
                          trys: [],
                          ops: [],
                        };
                      return (
                        (v = { next: o(0), throw: o(1), return: o(2) }),
                        "function" == typeof Symbol &&
                          (v[Symbol.iterator] = function () {
                            return this;
                          }),
                        v
                      );
                      function o(v) {
                        return function (h) {
                          return (function (v) {
                            if (s)
                              throw TypeError(
                                "Generator is already executing.",
                              );
                            for (; p; )
                              try {
                                if (
                                  ((s = 1),
                                  f &&
                                    (d =
                                      2 & v[0]
                                        ? f.return
                                        : v[0]
                                          ? f.throw ||
                                            ((d = f.return) && d.call(f), 0)
                                          : f.next) &&
                                    !(d = d.call(f, v[1])).done)
                                )
                                  return d;
                                switch (
                                  ((f = 0),
                                  d && (v = [2 & v[0], d.value]),
                                  v[0])
                                ) {
                                  case 0:
                                  case 1:
                                    d = v;
                                    break;
                                  case 4:
                                    return (
                                      p.label++,
                                      { value: v[1], done: !1 }
                                    );
                                  case 5:
                                    (p.label++, (f = v[1]), (v = [0]));
                                    continue;
                                  case 7:
                                    ((v = p.ops.pop()), p.trys.pop());
                                    continue;
                                  default:
                                    if (
                                      !(d =
                                        (d = p.trys).length > 0 &&
                                        d[d.length - 1]) &&
                                      (6 === v[0] || 2 === v[0])
                                    ) {
                                      p = 0;
                                      continue;
                                    }
                                    if (
                                      3 === v[0] &&
                                      (!d || (v[1] > d[0] && v[1] < d[3]))
                                    ) {
                                      p.label = v[1];
                                      break;
                                    }
                                    if (6 === v[0] && p.label < d[1]) {
                                      ((p.label = d[1]), (d = v));
                                      break;
                                    }
                                    if (d && p.label < d[2]) {
                                      ((p.label = d[2]), p.ops.push(v));
                                      break;
                                    }
                                    (d[2] && p.ops.pop(), p.trys.pop());
                                    continue;
                                }
                                v = r.call(n, p);
                              } catch (n) {
                                ((v = [6, n]), (f = 0));
                              } finally {
                                s = d = 0;
                              }
                            if (5 & v[0]) throw v[1];
                            return { value: v[0] ? v[1] : void 0, done: !0 };
                          })([v, h]);
                        };
                      }
                    })(this, function (r) {
                      try {
                        (m("loading"),
                          (h = new d.RiveFile(n)).init(),
                          h.on(d.EventType.Load, function () {
                            (null == h || h.getInstance(), p(h), m("success"));
                          }),
                          h.on(d.EventType.LoadError, function () {
                            m("failed");
                          }),
                          p(h));
                      } catch (n) {
                        (console.error(n), m("failed"));
                      }
                      return [2];
                    });
                  }),
                  new (f || (f = Promise))(function (n, d) {
                    function i(n) {
                      try {
                        l(v.next(n));
                      } catch (n) {
                        d(n);
                      }
                    }
                    function o(n) {
                      try {
                        l(v.throw(n));
                      } catch (n) {
                        d(n);
                      }
                    }
                    function l(r) {
                      var s;
                      r.done
                        ? n(r.value)
                        : ((s = r.value) instanceof f
                            ? s
                            : new f(function (n) {
                                n(s);
                              })
                          ).then(i, o);
                    }
                    l((v = v.apply(r, s || [])).next());
                  }),
                  function () {
                    null == h || h.cleanup();
                  }
                );
              },
              [n.src, n.buffer],
            ),
            { riveFile: v, status: y }
          );
        }),
        (r.useStateMachineInput = function (n, r, s, v) {
          var p = f.useState(null),
            h = p[0],
            y = p[1];
          return (
            f.useEffect(
              function () {
                function e() {
                  if (((n && r && s) || y(null), n && r && s)) {
                    var f = n.stateMachineInputs(r);
                    if (f) {
                      var d = f.find(function (n) {
                        return n.name === s;
                      });
                      (void 0 !== v && d && (d.value = v), y(d || null));
                    }
                  } else y(null);
                }
                (e(),
                  n &&
                    n.on(d.EventType.Load, function () {
                      e();
                    }));
              },
              [n],
            ),
            h
          );
        }),
        (r.useViewModel = function (n, r) {
          var s = null != r ? r : {},
            v = s.name,
            p = s.useDefault,
            h = void 0 !== p && p,
            y = f.useState(null),
            m = y[0],
            w = y[1];
          return (
            f.useEffect(
              function () {
                function e() {
                  var r;
                  n
                    ? w(
                        null != v
                          ? (null === (r = n.viewModelByName) || void 0 === r
                              ? void 0
                              : r.call(n, v)) || null
                          : n.defaultViewModel() || null,
                      )
                    : w(null);
                }
                return (
                  e(),
                  n && n.on(d.EventType.Load, e),
                  function () {
                    n && n.off(d.EventType.Load, e);
                  }
                );
              },
              [n, v, h],
            ),
            m
          );
        }),
        (r.useViewModelInstance = function (n, r) {
          var s = null != r ? r : {},
            d = s.name,
            v = s.useDefault,
            p = void 0 !== v && v,
            h = s.useNew,
            y = void 0 !== h && h,
            m = s.rive,
            w = f.useState(null),
            C = w[0],
            O = w[1];
          return (
            f.useEffect(
              function () {
                var r, s, f;
                if (n) {
                  var v = null;
                  (O(
                    (v =
                      null != d
                        ? n.instanceByName(d) || null
                        : p
                          ? (null === (r = n.defaultInstance) || void 0 === r
                              ? void 0
                              : r.call(n)) || null
                          : y
                            ? (null === (s = n.instance) || void 0 === s
                                ? void 0
                                : s.call(n)) || null
                            : (null === (f = n.defaultInstance) || void 0 === f
                                ? void 0
                                : f.call(n)) || null),
                  ),
                    m &&
                      v &&
                      m.viewModelInstance !== v &&
                      m.bindViewModelInstance(v));
                } else O(null);
              },
              [n, d, p, y, m],
            ),
            C
          );
        }),
        (r.useViewModelInstanceArtboard = function (n, r) {
          return {
            setValue: x(n, r, {
              getProperty: f.useCallback(function (n, r) {
                return n.artboard(r);
              }, []),
              getValue: f.useCallback(function () {}, []),
              defaultValue: null,
              buildPropertyOperations: f.useCallback(function (n) {
                return {
                  setValue: function (r) {
                    n(function (n) {
                      n.value = r;
                    });
                  },
                };
              }, []),
            }).setValue,
          };
        }),
        (r.useViewModelInstanceBoolean = function (n, r) {
          var s = x(n, r, {
            getProperty: f.useCallback(function (n, r) {
              return n.boolean(r);
            }, []),
            getValue: f.useCallback(function (n) {
              return n.value;
            }, []),
            defaultValue: null,
            buildPropertyOperations: f.useCallback(function (n) {
              return {
                setValue: function (r) {
                  n(function (n) {
                    n.value = r;
                  });
                },
              };
            }, []),
          });
          return { value: s.value, setValue: s.setValue };
        }),
        (r.useViewModelInstanceColor = function (n, r) {
          var s = x(n, r, {
            getProperty: f.useCallback(function (n, r) {
              return n.color(r);
            }, []),
            getValue: f.useCallback(function (n) {
              return n.value;
            }, []),
            defaultValue: null,
            buildPropertyOperations: f.useCallback(function (n) {
              return {
                setValue: function (r) {
                  n(function (n) {
                    n.value = r;
                  });
                },
                setRgb: function (r, s, f) {
                  n(function (n) {
                    n.rgb(r, s, f);
                  });
                },
                setRgba: function (r, s, f, d) {
                  n(function (n) {
                    n.rgba(r, s, f, d);
                  });
                },
                setAlpha: function (r) {
                  n(function (n) {
                    n.alpha(r);
                  });
                },
                setOpacity: function (r) {
                  n(function (n) {
                    n.opacity(r);
                  });
                },
              };
            }, []),
          });
          return {
            value: s.value,
            setValue: s.setValue,
            setRgb: s.setRgb,
            setRgba: s.setRgba,
            setAlpha: s.setAlpha,
            setOpacity: s.setOpacity,
          };
        }),
        (r.useViewModelInstanceEnum = function (n, r) {
          var s = x(n, r, {
            getProperty: f.useCallback(function (n, r) {
              return n.enum(r);
            }, []),
            getValue: f.useCallback(function (n) {
              return n.value;
            }, []),
            defaultValue: null,
            getExtendedData: f.useCallback(function (n) {
              return n.values;
            }, []),
            buildPropertyOperations: f.useCallback(function (n) {
              return {
                setValue: function (r) {
                  n(function (n) {
                    n.value = r;
                  });
                },
              };
            }, []),
          });
          return {
            value: s.value,
            values: s.extendedData || [],
            setValue: s.setValue,
          };
        }),
        (r.useViewModelInstanceImage = function (n, r) {
          return {
            setValue: x(n, r, {
              getProperty: f.useCallback(function (n, r) {
                return n.image(r);
              }, []),
              getValue: f.useCallback(function () {}, []),
              defaultValue: null,
              buildPropertyOperations: f.useCallback(function (n) {
                return {
                  setValue: function (r) {
                    n(function (n) {
                      n.value = r;
                    });
                  },
                };
              }, []),
            }).setValue,
          };
        }),
        (r.useViewModelInstanceList = function (n, r) {
          var s,
            d = f.useState(0)[1],
            v = x(n, r, {
              getProperty: f.useCallback(function (n, r) {
                return n.list(r);
              }, []),
              getValue: f.useCallback(function (n) {
                return n.length;
              }, []),
              defaultValue: null,
              onPropertyEvent: function () {
                d(function (n) {
                  return n + 1;
                });
              },
              buildPropertyOperations: f.useCallback(function (n) {
                return {
                  addInstance: function (r) {
                    n(function (n) {
                      return n.addInstance(r);
                    });
                  },
                  addInstanceAt: function (r, s) {
                    var f = !1;
                    return (
                      n(function (n) {
                        f = n.addInstanceAt(r, s);
                      }),
                      f
                    );
                  },
                  removeInstance: function (r) {
                    n(function (n) {
                      return n.removeInstance(r);
                    });
                  },
                  removeInstanceAt: function (r) {
                    n(function (n) {
                      return n.removeInstanceAt(r);
                    });
                  },
                  getInstanceAt: function (r) {
                    var s = null;
                    return (
                      n(function (n) {
                        s = n.instanceAt(r);
                      }),
                      s
                    );
                  },
                  swap: function (r, s) {
                    n(function (n) {
                      return n.swap(r, s);
                    });
                  },
                };
              }, []),
            });
          return {
            length: null !== (s = v.value) && void 0 !== s ? s : 0,
            addInstance: v.addInstance,
            addInstanceAt: v.addInstanceAt,
            removeInstance: v.removeInstance,
            removeInstanceAt: v.removeInstanceAt,
            getInstanceAt: v.getInstanceAt,
            swap: v.swap,
          };
        }),
        (r.useViewModelInstanceNumber = function (n, r) {
          var s = x(n, r, {
            getProperty: f.useCallback(function (n, r) {
              return n.number(r);
            }, []),
            getValue: f.useCallback(function (n) {
              return n.value;
            }, []),
            defaultValue: null,
            buildPropertyOperations: f.useCallback(function (n) {
              return {
                setValue: function (r) {
                  n(function (n) {
                    n.value = r;
                  });
                },
              };
            }, []),
          });
          return { value: s.value, setValue: s.setValue };
        }),
        (r.useViewModelInstanceString = function (n, r) {
          var s = x(n, r, {
            getProperty: f.useCallback(function (n, r) {
              return n.string(r);
            }, []),
            getValue: f.useCallback(function (n) {
              return n.value;
            }, []),
            defaultValue: null,
            buildPropertyOperations: f.useCallback(function (n) {
              return {
                setValue: function (r) {
                  n(function (n) {
                    n.value = r;
                  });
                },
              };
            }, []),
          });
          return { value: s.value, setValue: s.setValue };
        }),
        (r.useViewModelInstanceTrigger = function (n, r, s) {
          var d = (null != s ? s : {}).onTrigger;
          return {
            trigger: x(n, r, {
              getProperty: f.useCallback(function (n, r) {
                return n.trigger(r);
              }, []),
              getValue: f.useCallback(function () {}, []),
              defaultValue: null,
              onPropertyEvent: d,
              buildPropertyOperations: f.useCallback(function (n) {
                return {
                  trigger: function () {
                    n(function (n) {
                      n.trigger();
                    });
                  },
                };
              }, []),
            }).trigger,
          };
        }),
        Object.keys(d).forEach(function (n) {
          "default" === n ||
            r.hasOwnProperty(n) ||
            Object.defineProperty(r, n, {
              enumerable: !0,
              get: function () {
                return d[n];
              },
            });
        }));
    },
    61304: function (n, r) {
      "use strict";
      var s, f;
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (function (n, r) {
          for (var s in r)
            Object.defineProperty(n, s, { enumerable: !0, get: r[s] });
        })(r, {
          PrefetchKind: function () {
            return s;
          },
          ACTION_REFRESH: function () {
            return d;
          },
          ACTION_NAVIGATE: function () {
            return v;
          },
          ACTION_RESTORE: function () {
            return p;
          },
          ACTION_SERVER_PATCH: function () {
            return h;
          },
          ACTION_PREFETCH: function () {
            return y;
          },
          ACTION_FAST_REFRESH: function () {
            return m;
          },
          ACTION_SERVER_ACTION: function () {
            return w;
          },
        }));
      let d = "refresh",
        v = "navigate",
        p = "restore",
        h = "server-patch",
        y = "prefetch",
        m = "fast-refresh",
        w = "server-action";
      (((f = s || (s = {})).AUTO = "auto"),
        (f.FULL = "full"),
        (f.TEMPORARY = "temporary"),
        ("function" == typeof r.default ||
          ("object" == typeof r.default && null !== r.default)) &&
          void 0 === r.default.__esModule &&
          (Object.defineProperty(r.default, "__esModule", { value: !0 }),
          Object.assign(r.default, r),
          (n.exports = r.default)));
    },
    89845: function (n, r, s) {
      "use strict";
      function getDomainLocale(n, r, s, f) {
        return !1;
      }
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return getDomainLocale;
          },
        }),
        s(99419),
        ("function" == typeof r.default ||
          ("object" == typeof r.default && null !== r.default)) &&
          void 0 === r.default.__esModule &&
          (Object.defineProperty(r.default, "__esModule", { value: !0 }),
          Object.assign(r.default, r),
          (n.exports = r.default)));
    },
    93923: function (n, r, s) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "default", {
          enumerable: !0,
          get: function () {
            return _;
          },
        }));
      let f = s(83166),
        d = f._(s(52983)),
        v = s(59302),
        p = s(89891),
        h = s(47216),
        y = s(7721),
        m = s(49162),
        w = s(83599),
        C = s(76608),
        O = s(66647),
        P = s(89845),
        k = s(33736),
        I = s(61304),
        M = new Set();
      function prefetch(n, r, s, f, d, v) {
        if (!v && !(0, p.isLocalURL)(r)) return;
        if (!f.bypassPrefetchedCheck) {
          let d =
              void 0 !== f.locale
                ? f.locale
                : "locale" in n
                  ? n.locale
                  : void 0,
            v = r + "%" + s + "%" + d;
          if (M.has(v)) return;
          M.add(v);
        }
        let h = v ? n.prefetch(r, d) : n.prefetch(r, s, f);
        Promise.resolve(h).catch((n) => {});
      }
      function formatStringOrUrl(n) {
        return "string" == typeof n ? n : (0, h.formatUrl)(n);
      }
      let T = d.default.forwardRef(function (n, r) {
          let s, f;
          let {
            href: h,
            as: M,
            children: T,
            prefetch: _ = null,
            passHref: A,
            replace: S,
            shallow: L,
            scroll: j,
            locale: D,
            onClick: N,
            onMouseEnter: H,
            onTouchStart: z,
            legacyBehavior: U = !1,
            ...F
          } = n;
          ((s = T),
            U &&
              ("string" == typeof s || "number" == typeof s) &&
              (s = d.default.createElement("a", null, s)));
          let B = d.default.useContext(w.RouterContext),
            K = d.default.useContext(C.AppRouterContext),
            W = null != B ? B : K,
            Y = !B,
            G = !1 !== _,
            X = null === _ ? I.PrefetchKind.AUTO : I.PrefetchKind.FULL,
            { href: q, as: Z } = d.default.useMemo(() => {
              if (!B) {
                let n = formatStringOrUrl(h);
                return { href: n, as: M ? formatStringOrUrl(M) : n };
              }
              let [n, r] = (0, v.resolveHref)(B, h, !0);
              return { href: n, as: M ? (0, v.resolveHref)(B, M) : r || n };
            }, [B, h, M]),
            J = d.default.useRef(q),
            Q = d.default.useRef(Z);
          U && (f = d.default.Children.only(s));
          let $ = U ? f && "object" == typeof f && f.ref : r,
            [ee, et, en] = (0, O.useIntersection)({ rootMargin: "200px" }),
            er = d.default.useCallback(
              (n) => {
                ((Q.current !== Z || J.current !== q) &&
                  (en(), (Q.current = Z), (J.current = q)),
                  ee(n),
                  $ &&
                    ("function" == typeof $
                      ? $(n)
                      : "object" == typeof $ && ($.current = n)));
              },
              [Z, $, q, en, ee],
            );
          d.default.useEffect(() => {
            W && et && G && prefetch(W, q, Z, { locale: D }, { kind: X }, Y);
          }, [Z, q, et, D, G, null == B ? void 0 : B.locale, W, Y, X]);
          let eu = {
            ref: er,
            onClick(n) {
              (U || "function" != typeof N || N(n),
                U &&
                  f.props &&
                  "function" == typeof f.props.onClick &&
                  f.props.onClick(n),
                W &&
                  !n.defaultPrevented &&
                  (function (n, r, s, f, v, h, y, m, w, C) {
                    let { nodeName: O } = n.currentTarget,
                      P = "A" === O.toUpperCase();
                    if (
                      P &&
                      ((function (n) {
                        let r = n.currentTarget,
                          s = r.getAttribute("target");
                        return (
                          (s && "_self" !== s) ||
                          n.metaKey ||
                          n.ctrlKey ||
                          n.shiftKey ||
                          n.altKey ||
                          (n.nativeEvent && 2 === n.nativeEvent.which)
                        );
                      })(n) ||
                        (!w && !(0, p.isLocalURL)(s)))
                    )
                      return;
                    n.preventDefault();
                    let navigate = () => {
                      let n = null == y || y;
                      "beforePopState" in r
                        ? r[v ? "replace" : "push"](s, f, {
                            shallow: h,
                            locale: m,
                            scroll: n,
                          })
                        : r[v ? "replace" : "push"](f || s, {
                            forceOptimisticNavigation: !C,
                            scroll: n,
                          });
                    };
                    w ? d.default.startTransition(navigate) : navigate();
                  })(n, W, q, Z, S, L, j, D, Y, G));
            },
            onMouseEnter(n) {
              (U || "function" != typeof H || H(n),
                U &&
                  f.props &&
                  "function" == typeof f.props.onMouseEnter &&
                  f.props.onMouseEnter(n),
                W &&
                  (G || !Y) &&
                  prefetch(
                    W,
                    q,
                    Z,
                    { locale: D, priority: !0, bypassPrefetchedCheck: !0 },
                    { kind: X },
                    Y,
                  ));
            },
            onTouchStart(n) {
              (U || "function" != typeof z || z(n),
                U &&
                  f.props &&
                  "function" == typeof f.props.onTouchStart &&
                  f.props.onTouchStart(n),
                W &&
                  (G || !Y) &&
                  prefetch(
                    W,
                    q,
                    Z,
                    { locale: D, priority: !0, bypassPrefetchedCheck: !0 },
                    { kind: X },
                    Y,
                  ));
            },
          };
          if ((0, y.isAbsoluteUrl)(Z)) eu.href = Z;
          else if (!U || A || ("a" === f.type && !("href" in f.props))) {
            let n = void 0 !== D ? D : null == B ? void 0 : B.locale,
              r =
                (null == B ? void 0 : B.isLocaleDomain) &&
                (0, P.getDomainLocale)(
                  Z,
                  n,
                  null == B ? void 0 : B.locales,
                  null == B ? void 0 : B.domainLocales,
                );
            eu.href =
              r ||
              (0, k.addBasePath)(
                (0, m.addLocale)(Z, n, null == B ? void 0 : B.defaultLocale),
              );
          }
          return U
            ? d.default.cloneElement(f, eu)
            : d.default.createElement("a", { ...F, ...eu }, s);
        }),
        _ = T;
      ("function" == typeof r.default ||
        ("object" == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, "__esModule", { value: !0 }),
        Object.assign(r.default, r),
        (n.exports = r.default));
    },
    66647: function (n, r, s) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "useIntersection", {
          enumerable: !0,
          get: function () {
            return useIntersection;
          },
        }));
      let f = s(52983),
        d = s(30148),
        v = "function" == typeof IntersectionObserver,
        p = new Map(),
        h = [];
      function useIntersection(n) {
        let { rootRef: r, rootMargin: s, disabled: y } = n,
          m = y || !v,
          [w, C] = (0, f.useState)(!1),
          O = (0, f.useRef)(null),
          P = (0, f.useCallback)((n) => {
            O.current = n;
          }, []);
        (0, f.useEffect)(() => {
          if (v) {
            if (m || w) return;
            let n = O.current;
            if (n && n.tagName) {
              let f = (function (n, r, s) {
                let {
                  id: f,
                  observer: d,
                  elements: v,
                } = (function (n) {
                  let r;
                  let s = { root: n.root || null, margin: n.rootMargin || "" },
                    f = h.find(
                      (n) => n.root === s.root && n.margin === s.margin,
                    );
                  if (f && (r = p.get(f))) return r;
                  let d = new Map(),
                    v = new IntersectionObserver((n) => {
                      n.forEach((n) => {
                        let r = d.get(n.target),
                          s = n.isIntersecting || n.intersectionRatio > 0;
                        r && s && r(s);
                      });
                    }, n);
                  return (
                    (r = { id: s, observer: v, elements: d }),
                    h.push(s),
                    p.set(s, r),
                    r
                  );
                })(s);
                return (
                  v.set(n, r),
                  d.observe(n),
                  function () {
                    if ((v.delete(n), d.unobserve(n), 0 === v.size)) {
                      (d.disconnect(), p.delete(f));
                      let n = h.findIndex(
                        (n) => n.root === f.root && n.margin === f.margin,
                      );
                      n > -1 && h.splice(n, 1);
                    }
                  }
                );
              })(n, (n) => n && C(n), {
                root: null == r ? void 0 : r.current,
                rootMargin: s,
              });
              return f;
            }
          } else if (!w) {
            let n = (0, d.requestIdleCallback)(() => C(!0));
            return () => (0, d.cancelIdleCallback)(n);
          }
        }, [m, s, r, w, O.current]);
        let k = (0, f.useCallback)(() => {
          C(!1);
        }, []);
        return [P, w, k];
      }
      ("function" == typeof r.default ||
        ("object" == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, "__esModule", { value: !0 }),
        Object.assign(r.default, r),
        (n.exports = r.default));
    },
    66426: function (n, r, s) {
      n.exports = s(93923);
    },
    95927: function (n, r, s) {
      "use strict";
      var f = s(52983);
      let d = f.forwardRef(function ({ title: n, titleId: r, ...s }, d) {
        return f.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 20 20",
              fill: "currentColor",
              "aria-hidden": "true",
              ref: d,
              "aria-labelledby": r,
            },
            s,
          ),
          n ? f.createElement("title", { id: r }, n) : null,
          f.createElement("path", {
            fillRule: "evenodd",
            d: "M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z",
            clipRule: "evenodd",
          }),
        );
      });
      r.Z = d;
    },
  },
]);
