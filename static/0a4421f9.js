(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9950],
  {
    15384: function (e) {
      e.exports = (() => {
        "use strict";
        var e,
          t,
          n,
          r,
          i,
          a,
          o,
          s,
          u,
          l,
          c,
          f,
          h,
          d,
          p,
          m,
          v,
          g,
          b,
          y,
          w,
          _,
          A,
          C,
          E,
          M,
          I,
          P,
          x,
          F,
          T,
          S,
          L,
          k,
          j,
          R,
          O,
          B,
          D,
          W,
          V,
          U,
          N,
          $,
          z,
          G,
          Y,
          H,
          X,
          q,
          J,
          K,
          Z,
          Q,
          ee,
          et,
          en,
          er,
          ei,
          ea,
          eo,
          es,
          eu,
          el,
          ec,
          ef,
          eh = [
            ,
            (e, t, n) => {
              var r;
              (n.r(t), n.d(t, { default: () => i }));
              let i =
                ((r =
                  "undefined" != typeof document
                    ? document.currentScript?.src
                    : void 0),
                function (e = {}) {
                  var t,
                    n,
                    i,
                    a = new Promise((e, t) => {
                      ((n = e), (i = t));
                    }),
                    o = "object" == typeof window,
                    s = "function" == typeof importScripts;
                  function u() {
                    function e(e) {
                      let a = r;
                      ((n = t = 0),
                        (r = new Map()),
                        a.forEach((t) => {
                          try {
                            t(e);
                          } catch (e) {
                            console.error(e);
                          }
                        }),
                        this.jb(),
                        i && i.Ib());
                    }
                    let t = 0,
                      n = 0,
                      r = new Map(),
                      i = null,
                      a = null;
                    ((this.requestAnimationFrame = function (i) {
                      t ||= requestAnimationFrame(e.bind(this));
                      let a = ++n;
                      return (r.set(a, i), a);
                    }),
                      (this.cancelAnimationFrame = function (e) {
                        (r.delete(e),
                          t &&
                            0 == r.size &&
                            (cancelAnimationFrame(t), (t = 0)));
                      }),
                      (this.Gb = function (e) {
                        (a && (document.body.remove(a), (a = null)),
                          e ||
                            (((a =
                              document.createElement(
                                "div",
                              )).style.backgroundColor = "black"),
                            (a.style.position = "fixed"),
                            (a.style.right = 0),
                            (a.style.top = 0),
                            (a.style.color = "white"),
                            (a.style.padding = "4px"),
                            (a.innerHTML = "RIVE FPS"),
                            (e = function (e) {
                              a.innerHTML = "RIVE FPS " + e.toFixed(1);
                            }),
                            document.body.appendChild(a)),
                          (i = new (function () {
                            let t = 0,
                              n = 0;
                            this.Ib = function () {
                              var r = performance.now();
                              n
                                ? (++t,
                                  1e3 < (r -= n) &&
                                    (e((1e3 * t) / r), (t = n = 0)))
                                : ((n = r), (t = 0));
                            };
                          })()));
                      }),
                      (this.jb = function () {}));
                  }
                  function l() {
                    console.assert(!0);
                    let e = new Map(),
                      t = -1 / 0;
                    this.push = function (n) {
                      return (
                        (n = (n + 255) >> 8),
                        e.has(n) && clearTimeout(e.get(n)),
                        e.set(
                          n,
                          setTimeout(function () {
                            (e.delete(n),
                              0 == e.length
                                ? (t = -1 / 0)
                                : n == t &&
                                  console.assert(
                                    (t = Math.max(...e.keys())) < n,
                                  ));
                          }, 1e3),
                        ),
                        (t = Math.max(n, t)) << 8
                      );
                    };
                  }
                  let c = e.onRuntimeInitialized;
                  e.onRuntimeInitialized = function () {
                    c && c();
                    let t = e.decodeAudio;
                    e.decodeAudio = function (e, n) {
                      n((e = t(e)));
                    };
                    let n = e.decodeFont;
                    e.decodeFont = function (e, t) {
                      t((e = n(e)));
                    };
                    let r = e.FileAssetLoader;
                    ((e.ptrToAsset = (t) => {
                      let n = e.ptrToFileAsset(t);
                      return n.isImage
                        ? e.ptrToImageAsset(t)
                        : n.isFont
                          ? e.ptrToFontAsset(t)
                          : n.isAudio
                            ? e.ptrToAudioAsset(t)
                            : n;
                    }),
                      (e.CustomFileAssetLoader = r.extend(
                        "CustomFileAssetLoader",
                        {
                          __construct: function ({ loadContents: e }) {
                            (this.__parent.__construct.call(this),
                              (this.yb = e));
                          },
                          loadContents: function (t, n) {
                            return ((t = e.ptrToAsset(t)), this.yb(t, n));
                          },
                        },
                      )),
                      (e.CDNFileAssetLoader = r.extend("CDNFileAssetLoader", {
                        __construct: function () {
                          this.__parent.__construct.call(this);
                        },
                        loadContents: function (t) {
                          var n, r, i;
                          let a = e.ptrToAsset(t);
                          return (
                            "" !== (t = a.cdnUuid) &&
                            ((n = a.cdnBaseUrl + "/" + t),
                            (r = (e) => {
                              a.decode(new Uint8Array(e.response));
                            }),
                            ((i = new XMLHttpRequest()).responseType =
                              "arraybuffer"),
                            (i.onreadystatechange = function () {
                              4 == i.readyState && 200 == i.status && r(i);
                            }),
                            i.open("GET", n, !0),
                            i.send(null),
                            !0)
                          );
                        },
                      })),
                      (e.FallbackFileAssetLoader = r.extend(
                        "FallbackFileAssetLoader",
                        {
                          __construct: function () {
                            (this.__parent.__construct.call(this),
                              (this.eb = []));
                          },
                          addLoader: function (e) {
                            this.eb.push(e);
                          },
                          loadContents: function (e, t) {
                            for (let n of this.eb)
                              if (n.loadContents(e, t)) return !0;
                            return !1;
                          },
                        },
                      )));
                    let i = e.computeAlignment;
                    e.computeAlignment = function (e, t, n, r, a = 1) {
                      return i.call(this, e, t, n, r, a);
                    };
                  };
                  let f = e.onRuntimeInitialized;
                  e.onRuntimeInitialized = function () {
                    function t(e) {
                      ((this.G = e),
                        (this.vb = e.getContext("2d")),
                        (this.Ab = a),
                        (this.R = []),
                        (this.ia = 0),
                        (this.clear = function () {
                          (console.assert(0 == this.ia),
                            (this.R = []),
                            o.delete(this));
                        }),
                        (this.save = function () {
                          (++this.ia, this.R.push(a.save.bind(a)));
                        }),
                        (this.restore = function () {
                          0 < this.ia &&
                            (this.R.push(a.restore.bind(a)), --this.ia);
                        }),
                        (this.transform = function (e) {
                          this.R.push(a.transform.bind(a, e));
                        }),
                        (this.align = function (e, t, n, r, i = 1) {
                          this.R.push(a.align.bind(a, e, t, n, r, i));
                        }),
                        (this.flush = function () {
                          (console.assert(0 == this.ia), o.add(this), i && r());
                        }));
                    }
                    function n(e) {
                      var t = {
                          alpha: 1,
                          depth: 0,
                          stencil: 8,
                          antialias: 0,
                          premultipliedAlpha: 1,
                          preserveDrawingBuffer: 0,
                          powerPreference: "high-performance",
                          failIfMajorPerformanceCaveat: 0,
                          enableExtensionsByDefault: 1,
                          explicitSwapControl: 0,
                          renderViaOffscreenBackBuffer: 0,
                        },
                        n = e.getContext("webgl2", t),
                        r = (n ||= e.getContext("webgl", t)),
                        i = ns(ne),
                        a = { handle: i, attributes: t, version: t.zc, Sa: r };
                      return (
                        r.canvas && (r.canvas.ic = a),
                        (ne[i] = a),
                        (void 0 === t.Fb || t.Fb) && nc(a),
                        nl(i),
                        ((t = s(e.width, e.height)).xb = i),
                        (t.G = e),
                        (t.Ua = e.width),
                        (t.Ta = e.height),
                        (t.wb = n),
                        t
                      );
                    }
                    function r() {
                      if (a) {
                        var t = a.zb,
                          n = 0,
                          r = 0,
                          i = 0,
                          s = Array(o.size),
                          u = 0;
                        for (var l of o)
                          ((l.ca = Math.min(l.G.width, t)),
                            (l.ba = Math.min(l.G.height, t)),
                            (l.Ha = l.ba * l.ca),
                            (n = Math.max(n, l.ca)),
                            (r = Math.max(r, l.ba)),
                            (i += l.Ha),
                            (s[u++] = l));
                        if ((o.clear(), !(0 >= i))) {
                          for (
                            n = 1 << (0 >= n ? 0 : 32 - Math.clz32(n - 1)),
                              r = 1 << (0 >= r ? 0 : 32 - Math.clz32(r - 1));
                            r * n < i;
                          )
                            n <= r ? (n *= 2) : (r *= 2);
                          for (
                            n = Math.min(n, t),
                              n = Math.min(r, t),
                              s.sort((e, t) => t.Ha - e.Ha),
                              i = new e.DynamicRectanizer(t),
                              l = 0;
                            l < s.length;
                          ) {
                            for (i.reset(n, r), u = l; u < s.length; ++u) {
                              var c = s[u],
                                f = i.addRect(c.ca, c.ba);
                              if (0 > f) {
                                console.assert(u > l);
                                break;
                              }
                              ((c.oa = 65535 & f), (c.pa = f >> 16));
                            }
                            for (
                              c = h.push(i.drawWidth()),
                                f = d.push(i.drawHeight()),
                                console.assert(c >= i.drawWidth()),
                                console.assert(f >= i.drawHeight()),
                                console.assert(c <= t),
                                console.assert(f <= t),
                                a.G.width != c && (a.G.width = c),
                                a.G.height != f && (a.G.height = f),
                                a.clear(),
                                c = l;
                              c < u;
                              ++c
                            ) {
                              ((f = s[c]),
                                a.saveClipRect(
                                  f.oa,
                                  f.pa,
                                  f.oa + f.ca,
                                  f.pa + f.ba,
                                ));
                              let t = new e.Mat2D();
                              for (let e of ((t.xx = f.ca / f.G.width),
                              (t.yy = f.ba / f.G.height),
                              (t.xy = t.yx = 0),
                              (t.tx = f.oa),
                              (t.ty = f.pa),
                              a.transform(t),
                              f.R))
                                e();
                              (a.restoreClipRect(), (f.R = []));
                            }
                            for (a.flush(); l < u; ++l)
                              (((f = (c = s[l]).vb).globalCompositeOperation =
                                "copy"),
                                f.drawImage(
                                  a.G,
                                  c.oa,
                                  c.pa,
                                  c.ca,
                                  c.ba,
                                  0,
                                  0,
                                  c.G.width,
                                  c.G.height,
                                ));
                            l = u;
                          }
                        }
                      }
                    }
                    f && f();
                    let i = navigator.userAgent.match(/firefox|fxios/i),
                      a = null,
                      o = new Set(),
                      s = e.makeRenderer;
                    e.makeRenderer = function (e, r) {
                      return r
                        ? (a ||
                            ((r = (a = n(document.createElement("canvas"))).wb),
                            (a.zb = Math.min(
                              r.getParameter(r.MAX_RENDERBUFFER_SIZE),
                              r.getParameter(r.MAX_TEXTURE_SIZE),
                            ))),
                          new t(e))
                        : n(e);
                    };
                    let c = e.Artboard.prototype.draw;
                    e.Artboard.prototype.draw = function (e) {
                      e.R ? e.R.push(c.bind(this, e.Ab)) : c.call(this, e);
                    };
                    let h = new l(),
                      d = new l(),
                      p = new u();
                    ((e.requestAnimationFrame =
                      p.requestAnimationFrame.bind(p)),
                      (e.cancelAnimationFrame = p.cancelAnimationFrame.bind(p)),
                      (e.enableFPSCounter = p.Gb.bind(p)),
                      (p.jb = r),
                      (e.resolveAnimationFrame = r));
                    let m = e.load;
                    e.load = function (t, n, r = !0) {
                      let i = new e.FallbackFileAssetLoader();
                      return (
                        void 0 !== n && i.addLoader(n),
                        r && ((n = new e.CDNFileAssetLoader()), i.addLoader(n)),
                        Promise.resolve(m(t, i))
                      );
                    };
                    let v = e.WebGLRenderer.prototype.clear;
                    ((e.WebGLRenderer.prototype.clear = function () {
                      nl(this.xb);
                      let e = this.G;
                      ((this.Ua != e.width || this.Ta != e.height) &&
                        (this.resize(e.width, e.height),
                        (this.Ua = e.width),
                        (this.Ta = e.height)),
                        v.call(this));
                    }),
                      (e.decodeImage = function (t, n) {
                        n((t = e.decodeImageSkia(t)));
                      }));
                    let g = e.Renderer.prototype.align;
                    e.Renderer.prototype.align = function (e, t, n, r, i = 1) {
                      g.call(this, e, t, n, r, i);
                    };
                  };
                  var h,
                    d,
                    p = Object.assign({}, e),
                    m = "./this.program",
                    v = "";
                  (o || s) &&
                    (s
                      ? (v = self.location.href)
                      : "undefined" != typeof document &&
                        document.currentScript &&
                        (v = document.currentScript.src),
                    r && (v = r),
                    (v = v.startsWith("blob:")
                      ? ""
                      : v.substr(
                          0,
                          v.replace(/[?#].*/, "").lastIndexOf("/") + 1,
                        )),
                    s &&
                      (d = (e) => {
                        var t = new XMLHttpRequest();
                        return (
                          t.open("GET", e, !1),
                          (t.responseType = "arraybuffer"),
                          t.send(null),
                          new Uint8Array(t.response)
                        );
                      }),
                    (h = (e, t, n) => {
                      if (V(e)) {
                        var r = new XMLHttpRequest();
                        (r.open("GET", e, !0),
                          (r.responseType = "arraybuffer"),
                          (r.onload = () => {
                            200 == r.status || (0 == r.status && r.response)
                              ? t(r.response)
                              : n();
                          }),
                          (r.onerror = n),
                          r.send(null));
                      } else
                        fetch(e, { credentials: "same-origin" })
                          .then((e) =>
                            e.ok
                              ? e.arrayBuffer()
                              : Promise.reject(Error(e.status + " : " + e.url)),
                          )
                          .then(t, n);
                    }));
                  var g = e.print || console.log.bind(console),
                    b = e.printErr || console.error.bind(console);
                  (Object.assign(e, p),
                    (p = null),
                    e.thisProgram && (m = e.thisProgram),
                    e.wasmBinary && (y = e.wasmBinary));
                  var y,
                    w,
                    _,
                    A,
                    C,
                    E,
                    M,
                    I,
                    P,
                    x,
                    F = !1;
                  function T() {
                    var t = w.buffer;
                    ((e.HEAP8 = _ = new Int8Array(t)),
                      (e.HEAP16 = C = new Int16Array(t)),
                      (e.HEAPU8 = A = new Uint8Array(t)),
                      (e.HEAPU16 = E = new Uint16Array(t)),
                      (e.HEAP32 = M = new Int32Array(t)),
                      (e.HEAPU32 = I = new Uint32Array(t)),
                      (e.HEAPF32 = P = new Float32Array(t)),
                      (e.HEAPF64 = x = new Float64Array(t)));
                  }
                  var S = [],
                    L = [],
                    k = [],
                    j = 0,
                    R = null,
                    O = null;
                  function B(t) {
                    throw (
                      e.onAbort?.(t),
                      b((t = "Aborted(" + t + ")")),
                      (F = !0),
                      (t = new WebAssembly.RuntimeError(
                        t + ". Build with -sASSERTIONS for more info.",
                      )),
                      i(t),
                      t
                    );
                  }
                  var D,
                    W = (e) =>
                      e.startsWith("data:application/octet-stream;base64,"),
                    V = (e) => e.startsWith("file://");
                  function U(e) {
                    if (e == D && y) return new Uint8Array(y);
                    if (d) return d(e);
                    throw "both async and sync fetching of the wasm failed";
                  }
                  function N(e, t, n) {
                    return (
                      y
                        ? Promise.resolve().then(() => U(e))
                        : new Promise((t, n) => {
                            h(
                              e,
                              (e) => t(new Uint8Array(e)),
                              () => {
                                try {
                                  t(U(e));
                                } catch (e) {
                                  n(e);
                                }
                              },
                            );
                          })
                    )
                      .then((e) => WebAssembly.instantiate(e, t))
                      .then(n, (e) => {
                        (b(`failed to asynchronously prepare wasm: ${e}`),
                          B(e));
                      });
                  }
                  var $,
                    z,
                    G = {
                      728114: (e, t, n, r, i) => {
                        if (
                          "undefined" == typeof window ||
                          void 0 ===
                            (window.AudioContext || window.webkitAudioContext)
                        )
                          return 0;
                        if (void 0 === window.h) {
                          ((window.h = { Ca: 0 }),
                            (window.h.H = {}),
                            (window.h.H.Aa = e),
                            (window.h.H.capture = t),
                            (window.h.H.Ja = n),
                            (window.h.ga = {}),
                            (window.h.ga.stopped = r),
                            (window.h.ga.qb = i));
                          let a = window.h;
                          ((a.C = []),
                            (a.fc = function (e) {
                              for (var t = 0; t < a.C.length; ++t)
                                if (null == a.C[t]) return ((a.C[t] = e), t);
                              return (a.C.push(e), a.C.length - 1);
                            }),
                            (a.ub = function (e) {
                              for (a.C[e] = null; 0 < a.C.length; )
                                if (null == a.C[a.C.length - 1]) a.C.pop();
                                else break;
                            }),
                            (a.Gc = function (e) {
                              for (var t = 0; t < a.C.length; ++t)
                                if (a.C[t] == e) return a.ub(t);
                            }),
                            (a.ra = function (e) {
                              return a.C[e];
                            }),
                            (a.Ra = ["touchend", "click"]),
                            (a.unlock = function () {
                              for (var e = 0; e < a.C.length; ++e) {
                                var t = a.C[e];
                                null != t &&
                                  null != t.J &&
                                  t.state === a.ga.qb &&
                                  t.J.resume().then(
                                    () => {
                                      nY(t.kb);
                                    },
                                    (e) => {
                                      console.error(
                                        "Failed to resume audiocontext",
                                        e,
                                      );
                                    },
                                  );
                              }
                              a.Ra.map(function (e) {
                                document.removeEventListener(e, a.unlock, !0);
                              });
                            }),
                            a.Ra.map(function (e) {
                              document.addEventListener(e, a.unlock, !0);
                            }));
                        }
                        return ((window.h.Ca += 1), 1);
                      },
                      730292: () => {
                        void 0 !== window.h &&
                          (window.h.Ra.map(function (e) {
                            document.removeEventListener(
                              e,
                              window.h.unlock,
                              !0,
                            );
                          }),
                          --window.h.Ca,
                          0 === window.h.Ca && delete window.h);
                      },
                      730596: () =>
                        void 0 !== navigator.mediaDevices &&
                        void 0 !== navigator.mediaDevices.getUserMedia,
                      730700: () => {
                        try {
                          var e = new (
                              window.AudioContext || window.webkitAudioContext
                            )(),
                            t = e.sampleRate;
                          return (e.close(), t);
                        } catch (e) {
                          return 0;
                        }
                      },
                      730871: (e, t, n, r, i, a) => {
                        if (void 0 === window.h) return -1;
                        var o = {},
                          s = {};
                        return (
                          e == window.h.H.Aa && 0 != n && (s.sampleRate = n),
                          (o.J = new (
                            window.AudioContext || window.webkitAudioContext
                          )(s)),
                          o.J.suspend(),
                          (o.state = window.h.ga.stopped),
                          (n = 0),
                          e != window.h.H.Aa && (n = t),
                          (o.W = o.J.createScriptProcessor(r, n, t)),
                          (o.W.onaudioprocess = function (n) {
                            if (
                              ((null == o.sa || 0 == o.sa.length) &&
                                (o.sa = new Float32Array(P.buffer, i, r * t)),
                              e == window.h.H.capture || e == window.h.H.Ja)
                            ) {
                              for (var s = 0; s < t; s += 1)
                                for (
                                  var u = n.inputBuffer.getChannelData(s),
                                    l = o.sa,
                                    c = 0;
                                  c < r;
                                  c += 1
                                )
                                  l[c * t + s] = u[c];
                              nH(a, r, i);
                            }
                            if (e == window.h.H.Aa || e == window.h.H.Ja)
                              for (
                                nX(a, r, i), s = 0;
                                s < n.outputBuffer.numberOfChannels;
                                ++s
                              )
                                for (
                                  u = n.outputBuffer.getChannelData(s),
                                    l = o.sa,
                                    c = 0;
                                  c < r;
                                  c += 1
                                )
                                  u[c] = l[c * t + s];
                            else
                              for (
                                s = 0;
                                s < n.outputBuffer.numberOfChannels;
                                ++s
                              )
                                n.outputBuffer.getChannelData(s).fill(0);
                          }),
                          (e != window.h.H.capture && e != window.h.H.Ja) ||
                            navigator.mediaDevices
                              .getUserMedia({ audio: !0, video: !1 })
                              .then(function (e) {
                                ((o.Da = o.J.createMediaStreamSource(e)),
                                  o.Da.connect(o.W),
                                  o.W.connect(o.J.destination));
                              })
                              .catch(function (e) {
                                console.log("Failed to get user media: " + e);
                              }),
                          e == window.h.H.Aa && o.W.connect(o.J.destination),
                          (o.kb = a),
                          window.h.fc(o)
                        );
                      },
                      733748: (e) => window.h.ra(e).J.sampleRate,
                      733821: (e) => {
                        (void 0 !== (e = window.h.ra(e)).W &&
                          ((e.W.onaudioprocess = function () {}),
                          e.W.disconnect(),
                          (e.W = void 0)),
                          void 0 !== e.Da &&
                            (e.Da.disconnect(), (e.Da = void 0)),
                          e.J.close(),
                          (e.J = void 0),
                          (e.kb = void 0));
                      },
                      734221: (e) => {
                        window.h.ub(e);
                      },
                      734271: (e) => {
                        ((e = window.h.ra(e)).J.resume(),
                          (e.state = window.h.ga.qb));
                      },
                      734410: (e) => {
                        ((e = window.h.ra(e)).J.suspend(),
                          (e.state = window.h.ga.stopped));
                      },
                    },
                    Y = (t) => {
                      for (; 0 < t.length; ) t.shift()(e);
                    };
                  function H() {
                    var e = M[eq >> 2];
                    return ((eq += 4), e);
                  }
                  var X = (e, t) => {
                      for (var n = 0, r = e.length - 1; 0 <= r; r--) {
                        var i = e[r];
                        "." === i
                          ? e.splice(r, 1)
                          : ".." === i
                            ? (e.splice(r, 1), n++)
                            : n && (e.splice(r, 1), n--);
                      }
                      if (t) for (; n; n--) e.unshift("..");
                      return e;
                    },
                    q = (e) => {
                      var t = "/" === e.charAt(0),
                        n = "/" === e.substr(-1);
                      return (
                        (e = X(
                          e.split("/").filter((e) => !!e),
                          !t,
                        ).join("/")) ||
                          t ||
                          (e = "."),
                        e && n && (e += "/"),
                        (t ? "/" : "") + e
                      );
                    },
                    J = (e) => {
                      var t =
                        /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
                          .exec(e)
                          .slice(1);
                      return ((e = t[0]), (t = t[1]), e || t)
                        ? e + (t &&= t.substr(0, t.length - 1))
                        : ".";
                    },
                    K = (e) => {
                      if ("/" === e) return "/";
                      var t = (e = (e = q(e)).replace(/\/$/, "")).lastIndexOf(
                        "/",
                      );
                      return -1 === t ? e : e.substr(t + 1);
                    },
                    Z = (e) =>
                      (Z = (() => {
                        if (
                          "object" == typeof crypto &&
                          "function" == typeof crypto.getRandomValues
                        )
                          return (e) => crypto.getRandomValues(e);
                        B("initRandomDevice");
                      })())(e),
                    Q = (...e) => {
                      for (
                        var t = "", n = !1, r = e.length - 1;
                        -1 <= r && !n;
                        r--
                      ) {
                        if ("string" != typeof (n = 0 <= r ? e[r] : "/"))
                          throw TypeError(
                            "Arguments to path.resolve must be strings",
                          );
                        if (!n) return "";
                        ((t = n + "/" + t), (n = "/" === n.charAt(0)));
                      }
                      return (
                        (t = X(
                          t.split("/").filter((e) => !!e),
                          !n,
                        ).join("/")),
                        (n ? "/" : "") + t || "."
                      );
                    },
                    ee =
                      "undefined" != typeof TextDecoder
                        ? new TextDecoder("utf8")
                        : void 0,
                    et = (e, t, n) => {
                      var r = t + n;
                      for (n = t; e[n] && !(n >= r); ) ++n;
                      if (16 < n - t && e.buffer && ee)
                        return ee.decode(e.subarray(t, n));
                      for (r = ""; t < n; ) {
                        var i = e[t++];
                        if (128 & i) {
                          var a = 63 & e[t++];
                          if (192 == (224 & i))
                            r += String.fromCharCode(((31 & i) << 6) | a);
                          else {
                            var o = 63 & e[t++];
                            65536 >
                            (i =
                              224 == (240 & i)
                                ? ((15 & i) << 12) | (a << 6) | o
                                : ((7 & i) << 18) |
                                  (a << 12) |
                                  (o << 6) |
                                  (63 & e[t++]))
                              ? (r += String.fromCharCode(i))
                              : ((i -= 65536),
                                (r += String.fromCharCode(
                                  55296 | (i >> 10),
                                  56320 | (1023 & i),
                                )));
                          }
                        } else r += String.fromCharCode(i);
                      }
                      return r;
                    },
                    en = [],
                    er = (e) => {
                      for (var t = 0, n = 0; n < e.length; ++n) {
                        var r = e.charCodeAt(n);
                        127 >= r
                          ? t++
                          : 2047 >= r
                            ? (t += 2)
                            : 55296 <= r && 57343 >= r
                              ? ((t += 4), ++n)
                              : (t += 3);
                      }
                      return t;
                    },
                    ei = (e, t, n, r) => {
                      if (!(0 < r)) return 0;
                      var i = n;
                      r = n + r - 1;
                      for (var a = 0; a < e.length; ++a) {
                        var o = e.charCodeAt(a);
                        if (
                          (55296 <= o &&
                            57343 >= o &&
                            (o =
                              (65536 + ((1023 & o) << 10)) |
                              (1023 & e.charCodeAt(++a))),
                          127 >= o)
                        ) {
                          if (n >= r) break;
                          t[n++] = o;
                        } else {
                          if (2047 >= o) {
                            if (n + 1 >= r) break;
                            t[n++] = 192 | (o >> 6);
                          } else {
                            if (65535 >= o) {
                              if (n + 2 >= r) break;
                              t[n++] = 224 | (o >> 12);
                            } else {
                              if (n + 3 >= r) break;
                              ((t[n++] = 240 | (o >> 18)),
                                (t[n++] = 128 | ((o >> 12) & 63)));
                            }
                            t[n++] = 128 | ((o >> 6) & 63);
                          }
                          t[n++] = 128 | (63 & o);
                        }
                      }
                      return ((t[n] = 0), n - i);
                    };
                  function ea(e, t) {
                    var n = Array(er(e) + 1);
                    return (
                      (e = ei(e, n, 0, n.length)),
                      t && (n.length = e),
                      n
                    );
                  }
                  var eo = [];
                  function es(e, t) {
                    var n, r;
                    ((eo[e] = { input: [], F: [], T: t }),
                      (n = e),
                      (r = eu),
                      (eh[n] = { m: r }));
                  }
                  var eu = {
                    open(e) {
                      var t = eo[e.node.Ba];
                      if (!t) throw new eg(43);
                      ((e.s = t), (e.seekable = !1));
                    },
                    close(e) {
                      e.s.T.qa(e.s);
                    },
                    qa(e) {
                      e.s.T.qa(e.s);
                    },
                    read(e, t, n, r) {
                      if (!e.s || !e.s.T.cb) throw new eg(60);
                      for (var i = 0, a = 0; a < r; a++) {
                        try {
                          var o = e.s.T.cb(e.s);
                        } catch (e) {
                          throw new eg(29);
                        }
                        if (void 0 === o && 0 === i) throw new eg(6);
                        if (null == o) break;
                        (i++, (t[n + a] = o));
                      }
                      return (i && (e.node.timestamp = Date.now()), i);
                    },
                    write(e, t, n, r) {
                      if (!e.s || !e.s.T.Ma) throw new eg(60);
                      try {
                        for (var i = 0; i < r; i++) e.s.T.Ma(e.s, t[n + i]);
                      } catch (e) {
                        throw new eg(29);
                      }
                      return (r && (e.node.timestamp = Date.now()), i);
                    },
                  };
                  function el(e, t) {
                    var n = e.l ? e.l.length : 0;
                    n >= t ||
                      ((t = Math.max(t, (n * (1048576 > n ? 2 : 1.125)) >>> 0)),
                      0 != n && (t = Math.max(t, 256)),
                      (n = e.l),
                      (e.l = new Uint8Array(t)),
                      0 < e.v && e.l.set(n.subarray(0, e.v), 0));
                  }
                  var ec = {
                      M: null,
                      S: () => ec.createNode(null, "/", 16895, 0),
                      createNode(e, t, n, r) {
                        if (24576 == (61440 & n) || 4096 == (61440 & n))
                          throw new eg(63);
                        return (
                          ec.M ||
                            (ec.M = {
                              dir: {
                                node: {
                                  V: ec.j.V,
                                  O: ec.j.O,
                                  ja: ec.j.ja,
                                  ya: ec.j.ya,
                                  ob: ec.j.ob,
                                  tb: ec.j.tb,
                                  pb: ec.j.pb,
                                  nb: ec.j.nb,
                                  Ea: ec.j.Ea,
                                },
                                stream: { Z: ec.m.Z },
                              },
                              file: {
                                node: { V: ec.j.V, O: ec.j.O },
                                stream: {
                                  Z: ec.m.Z,
                                  read: ec.m.read,
                                  write: ec.m.write,
                                  Va: ec.m.Va,
                                  gb: ec.m.gb,
                                  ib: ec.m.ib,
                                },
                              },
                              link: {
                                node: { V: ec.j.V, O: ec.j.O, ka: ec.j.ka },
                                stream: {},
                              },
                              Wa: {
                                node: { V: ec.j.V, O: ec.j.O },
                                stream: eS,
                              },
                            }),
                          16384 == (61440 & (n = eM(e, t, n, r)).mode)
                            ? ((n.j = ec.M.dir.node),
                              (n.m = ec.M.dir.stream),
                              (n.l = {}))
                            : 32768 == (61440 & n.mode)
                              ? ((n.j = ec.M.file.node),
                                (n.m = ec.M.file.stream),
                                (n.v = 0),
                                (n.l = null))
                              : 40960 == (61440 & n.mode)
                                ? ((n.j = ec.M.link.node),
                                  (n.m = ec.M.link.stream))
                                : 8192 == (61440 & n.mode) &&
                                  ((n.j = ec.M.Wa.node),
                                  (n.m = ec.M.Wa.stream)),
                          (n.timestamp = Date.now()),
                          e && ((e.l[t] = n), (e.timestamp = n.timestamp)),
                          n
                        );
                      },
                      vc: (e) =>
                        e.l
                          ? e.l.subarray
                            ? e.l.subarray(0, e.v)
                            : new Uint8Array(e.l)
                          : new Uint8Array(0),
                      j: {
                        V(e) {
                          var t = {};
                          return (
                            (t.tc = 8192 == (61440 & e.mode) ? e.id : 1),
                            (t.xc = e.id),
                            (t.mode = e.mode),
                            (t.Cc = 1),
                            (t.uid = 0),
                            (t.wc = 0),
                            (t.Ba = e.Ba),
                            16384 == (61440 & e.mode)
                              ? (t.size = 4096)
                              : 32768 == (61440 & e.mode)
                                ? (t.size = e.v)
                                : 40960 == (61440 & e.mode)
                                  ? (t.size = e.link.length)
                                  : (t.size = 0),
                            (t.kc = new Date(e.timestamp)),
                            (t.Ac = new Date(e.timestamp)),
                            (t.rc = new Date(e.timestamp)),
                            (t.Bb = 4096),
                            (t.lc = Math.ceil(t.size / t.Bb)),
                            t
                          );
                        },
                        O(e, t) {
                          if (
                            (void 0 !== t.mode && (e.mode = t.mode),
                            void 0 !== t.timestamp &&
                              (e.timestamp = t.timestamp),
                            void 0 !== t.size && ((t = t.size), e.v != t))
                          )
                            if (0 == t) ((e.l = null), (e.v = 0));
                            else {
                              var n = e.l;
                              ((e.l = new Uint8Array(t)),
                                n && e.l.set(n.subarray(0, Math.min(t, e.v))),
                                (e.v = t));
                            }
                        },
                        ja() {
                          throw eb[44];
                        },
                        ya: (e, t, n, r) => ec.createNode(e, t, n, r),
                        ob(e, t, n) {
                          if (16384 == (61440 & e.mode)) {
                            try {
                              var r = eE(t, n);
                            } catch (e) {}
                            if (r) for (var i in r.l) throw new eg(55);
                          }
                          (delete e.parent.l[e.name],
                            (e.parent.timestamp = Date.now()),
                            (e.name = n),
                            (t.l[n] = e),
                            (t.timestamp = e.parent.timestamp));
                        },
                        tb(e, t) {
                          (delete e.l[t], (e.timestamp = Date.now()));
                        },
                        pb(e, t) {
                          var n,
                            r = eE(e, t);
                          for (n in r.l) throw new eg(55);
                          (delete e.l[t], (e.timestamp = Date.now()));
                        },
                        nb(e) {
                          var t,
                            n = [".", ".."];
                          for (t of Object.keys(e.l)) n.push(t);
                          return n;
                        },
                        Ea: (e, t, n) => (
                          ((e = ec.createNode(e, t, 41471, 0)).link = n),
                          e
                        ),
                        ka(e) {
                          if (40960 != (61440 & e.mode)) throw new eg(28);
                          return e.link;
                        },
                      },
                      m: {
                        read(e, t, n, r, i) {
                          var a = e.node.l;
                          if (i >= e.node.v) return 0;
                          if (8 < (e = Math.min(e.node.v - i, r)) && a.subarray)
                            t.set(a.subarray(i, i + e), n);
                          else for (r = 0; r < e; r++) t[n + r] = a[i + r];
                          return e;
                        },
                        write(e, t, n, r, i, a) {
                          if ((t.buffer === _.buffer && (a = !1), !r)) return 0;
                          if (
                            (((e = e.node).timestamp = Date.now()),
                            t.subarray && (!e.l || e.l.subarray))
                          ) {
                            if (a)
                              return ((e.l = t.subarray(n, n + r)), (e.v = r));
                            if (0 === e.v && 0 === i)
                              return ((e.l = t.slice(n, n + r)), (e.v = r));
                            if (i + r <= e.v)
                              return (e.l.set(t.subarray(n, n + r), i), r);
                          }
                          if ((el(e, i + r), e.l.subarray && t.subarray))
                            e.l.set(t.subarray(n, n + r), i);
                          else for (a = 0; a < r; a++) e.l[i + a] = t[n + a];
                          return ((e.v = Math.max(e.v, i + r)), r);
                        },
                        Z(e, t, n) {
                          if (
                            (1 === n
                              ? (t += e.position)
                              : 2 === n &&
                                32768 == (61440 & e.node.mode) &&
                                (t += e.node.v),
                            0 > t)
                          )
                            throw new eg(28);
                          return t;
                        },
                        Va(e, t, n) {
                          (el(e.node, t + n),
                            (e.node.v = Math.max(e.node.v, t + n)));
                        },
                        gb(e, t, n, r, i) {
                          if (32768 != (61440 & e.node.mode)) throw new eg(43);
                          if (
                            ((e = e.node.l), 2 & i || e.buffer !== _.buffer)
                          ) {
                            if (
                              ((0 < n || n + t < e.length) &&
                                (e = e.subarray
                                  ? e.subarray(n, n + t)
                                  : Array.prototype.slice.call(e, n, n + t)),
                              (n = !0),
                              (i = nq(
                                65536,
                                (t = 65536 * Math.ceil(t / 65536)),
                              ))
                                ? (A.fill(0, i, i + t), (t = i))
                                : (t = 0),
                              !t)
                            )
                              throw new eg(48);
                            _.set(e, t);
                          } else ((n = !1), (t = e.byteOffset));
                          return { o: t, jc: n };
                        },
                        ib: (e, t, n, r) => (ec.m.write(e, t, 0, r, n, !1), 0),
                      },
                    },
                    ef = null,
                    eh = {},
                    ed = [],
                    ep = 1,
                    em = null,
                    ev = !0,
                    eg = class {
                      constructor(e) {
                        ((this.name = "ErrnoError"), (this.Y = e));
                      }
                    },
                    eb = {},
                    ey = class {
                      constructor() {
                        ((this.h = {}), (this.node = null));
                      }
                      get flags() {
                        return this.h.flags;
                      }
                      set flags(e) {
                        this.h.flags = e;
                      }
                      get position() {
                        return this.h.position;
                      }
                      set position(e) {
                        this.h.position = e;
                      }
                    },
                    ew = class {
                      constructor(e, t, n, r) {
                        ((e ||= this),
                          (this.parent = e),
                          (this.S = e.S),
                          (this.za = null),
                          (this.id = ep++),
                          (this.name = t),
                          (this.mode = n),
                          (this.j = {}),
                          (this.m = {}),
                          (this.Ba = r));
                      }
                      get read() {
                        return 365 == (365 & this.mode);
                      }
                      set read(e) {
                        e ? (this.mode |= 365) : (this.mode &= -366);
                      }
                      get write() {
                        return 146 == (146 & this.mode);
                      }
                      set write(e) {
                        e ? (this.mode |= 146) : (this.mode &= -147);
                      }
                    };
                  function e_(e, t = {}) {
                    if (!(e = Q(e))) return { path: "", node: null };
                    if (8 < (t = Object.assign({ bb: !0, Oa: 0 }, t)).Oa)
                      throw new eg(32);
                    e = e.split("/").filter((e) => !!e);
                    for (var n = ef, r = "/", i = 0; i < e.length; i++) {
                      var a = i === e.length - 1;
                      if (a && t.parent) break;
                      if (
                        ((n = eE(n, e[i])),
                        (r = q(r + "/" + e[i])),
                        n.za && (!a || (a && t.bb)) && (n = n.za.root),
                        !a || t.ab)
                      ) {
                        for (a = 0; 40960 == (61440 & n.mode); )
                          if (
                            ((n = (function (e) {
                              if (!(e = e_(e).node)) throw new eg(44);
                              if (!e.j.ka) throw new eg(28);
                              return Q(eA(e.parent), e.j.ka(e));
                            })(r)),
                            (n = e_((r = Q(J(r), n)), { Oa: t.Oa + 1 }).node),
                            40 < a++)
                          )
                            throw new eg(32);
                      }
                    }
                    return { path: r, node: n };
                  }
                  function eA(e) {
                    for (var t; ; ) {
                      if (e === e.parent)
                        return (
                          (e = e.S.hb),
                          t
                            ? "/" !== e[e.length - 1]
                              ? `${e}/${t}`
                              : e + t
                            : e
                        );
                      ((t = t ? `${e.name}/${t}` : e.name), (e = e.parent));
                    }
                  }
                  function eC(e, t) {
                    for (var n = 0, r = 0; r < t.length; r++)
                      n = ((n << 5) - n + t.charCodeAt(r)) | 0;
                    return ((e + n) >>> 0) % em.length;
                  }
                  function eE(e, t) {
                    var n =
                      16384 == (61440 & e.mode)
                        ? (n = eP(e, "x"))
                          ? n
                          : 2 * !e.j.ja
                        : 54;
                    if (n) throw new eg(n);
                    for (n = em[eC(e.id, t)]; n; n = n.Vb) {
                      var r = n.name;
                      if (n.parent.id === e.id && r === t) return n;
                    }
                    return e.j.ja(e, t);
                  }
                  function eM(e, t, n, r) {
                    return (
                      (t = eC((e = new ew(e, t, n, r)).parent.id, e.name)),
                      (e.Vb = em[t]),
                      (em[t] = e)
                    );
                  }
                  function eI(e) {
                    var t = ["r", "w", "rw"][3 & e];
                    return (512 & e && (t += "w"), t);
                  }
                  function eP(e, t) {
                    return ev
                      ? 0
                      : (t.includes("r") && !(292 & e.mode)) ||
                          (t.includes("w") && !(146 & e.mode)) ||
                          (t.includes("x") && !(73 & e.mode))
                        ? 2
                        : 0;
                  }
                  function ex(e, t) {
                    try {
                      return (eE(e, t), 20);
                    } catch (e) {}
                    return eP(e, "wx");
                  }
                  function eF(e) {
                    if (!(e = ed[e])) throw new eg(8);
                    return e;
                  }
                  function eT(e, t = -1) {
                    if (((e = Object.assign(new ey(), e)), -1 == t))
                      e: {
                        for (t = 0; 4096 >= t; t++) if (!ed[t]) break e;
                        throw new eg(33);
                      }
                    return ((e.U = t), (ed[t] = e));
                  }
                  var eS = {
                    open(e) {
                      ((e.m = eh[e.node.Ba].m), e.m.open?.(e));
                    },
                    Z() {
                      throw new eg(70);
                    },
                  };
                  function eL(e, t) {
                    var n = "/" === t;
                    if (n && ef) throw new eg(10);
                    if (!n && t) {
                      var r = e_(t, { bb: !1 });
                      if (((t = r.path), (r = r.node).za)) throw new eg(10);
                      if (16384 != (61440 & r.mode)) throw new eg(54);
                    }
                    ((t = { type: e, Ec: {}, hb: t, Ub: [] }),
                      ((e = e.S(t)).S = t),
                      (t.root = e),
                      n ? (ef = e) : r && ((r.za = t), r.S && r.S.Ub.push(t)));
                  }
                  function ek(e, t, n) {
                    var r = e_(e, { parent: !0 }).node;
                    if (!(e = K(e)) || "." === e || ".." === e)
                      throw new eg(28);
                    var i = ex(r, e);
                    if (i) throw new eg(i);
                    if (!r.j.ya) throw new eg(63);
                    return r.j.ya(r, e, t, n);
                  }
                  function ej(e) {
                    return ek(e, 16895, 0);
                  }
                  function eR(e, t, n) {
                    (void 0 === n && ((n = t), (t = 438)), ek(e, 8192 | t, n));
                  }
                  function eO(e, t) {
                    if (!Q(e)) throw new eg(44);
                    var n = e_(t, { parent: !0 }).node;
                    if (!n) throw new eg(44);
                    var r = ex(n, (t = K(t)));
                    if (r) throw new eg(r);
                    if (!n.j.Ea) throw new eg(63);
                    n.j.Ea(n, t, e);
                  }
                  function eB(t, n, r) {
                    if ("" === t) throw new eg(44);
                    if ("string" == typeof n) {
                      var i = {
                        r: 0,
                        "r+": 2,
                        w: 577,
                        "w+": 578,
                        a: 1089,
                        "a+": 1090,
                      }[n];
                      if (void 0 === i)
                        throw Error(`Unknown file open mode: ${n}`);
                      n = i;
                    }
                    if (
                      ((r =
                        64 & n ? ((void 0 === r ? 438 : r) & 4095) | 32768 : 0),
                      "object" == typeof t)
                    )
                      var a = t;
                    else {
                      t = q(t);
                      try {
                        a = e_(t, { ab: !(131072 & n) }).node;
                      } catch (e) {}
                    }
                    if (((i = !1), 64 & n))
                      if (a) {
                        if (128 & n) throw new eg(20);
                      } else ((a = ek(t, r, 0)), (i = !0));
                    if (!a) throw new eg(44);
                    if (
                      (8192 == (61440 & a.mode) && (n &= -513),
                      65536 & n && 16384 != (61440 & a.mode))
                    )
                      throw new eg(54);
                    if (
                      !i &&
                      (r = a
                        ? 40960 == (61440 & a.mode)
                          ? 32
                          : 16384 == (61440 & a.mode) &&
                              ("r" !== eI(n) || 512 & n)
                            ? 31
                            : eP(a, eI(n))
                        : 44)
                    )
                      throw new eg(r);
                    if (512 & n && !i) {
                      if (
                        !(r =
                          "string" == typeof (r = a)
                            ? e_(r, { ab: !0 }).node
                            : r).j.O
                      )
                        throw new eg(63);
                      if (16384 == (61440 & r.mode)) throw new eg(31);
                      if (32768 != (61440 & r.mode)) throw new eg(28);
                      if ((i = eP(r, "w"))) throw new eg(i);
                      r.j.O(r, { size: 0, timestamp: Date.now() });
                    }
                    return (
                      (n &= -131713),
                      (a = eT({
                        node: a,
                        path: eA(a),
                        flags: n,
                        seekable: !0,
                        position: 0,
                        m: a.m,
                        hc: [],
                        error: !1,
                      })).m.open && a.m.open(a),
                      !e.logReadFiles ||
                        1 & n ||
                        t in (eN ||= {}) ||
                        (eN[t] = 1),
                      a
                    );
                  }
                  function eD(e, t, n) {
                    if (null === e.U) throw new eg(8);
                    if (!e.seekable || !e.m.Z) throw new eg(70);
                    if (0 != n && 1 != n && 2 != n) throw new eg(28);
                    ((e.position = e.m.Z(e, t, n)), (e.hc = []));
                  }
                  function eW(e, t, n) {
                    e = q("/dev/" + e);
                    var r,
                      i = ((r = 0), t && (r |= 365), n && (r |= 146), r);
                    eU ||= 64;
                    var a = eU++ << 8;
                    ((eh[a] = {
                      m: {
                        open(e) {
                          e.seekable = !1;
                        },
                        close() {
                          n?.buffer?.length && n(10);
                        },
                        read(e, n, r, i) {
                          for (var a = 0, o = 0; o < i; o++) {
                            try {
                              var s = t();
                            } catch (e) {
                              throw new eg(29);
                            }
                            if (void 0 === s && 0 === a) throw new eg(6);
                            if (null == s) break;
                            (a++, (n[r + o] = s));
                          }
                          return (a && (e.node.timestamp = Date.now()), a);
                        },
                        write(e, t, r, i) {
                          for (var a = 0; a < i; a++)
                            try {
                              n(t[r + a]);
                            } catch (e) {
                              throw new eg(29);
                            }
                          return (i && (e.node.timestamp = Date.now()), a);
                        },
                      },
                    }),
                      eR(e, i, a));
                  }
                  var eV,
                    eU,
                    eN,
                    e$,
                    ez,
                    eG,
                    eY,
                    eH,
                    eX = {},
                    eq = void 0,
                    eJ = (e, t) =>
                      Object.defineProperty(t, "name", { value: e }),
                    eK = [],
                    eZ = [],
                    eQ = (e) => {
                      if (!e)
                        throw new e$("Cannot use deleted val. handle = " + e);
                      return eZ[e];
                    },
                    e0 = (e) => {
                      switch (e) {
                        case void 0:
                          return 2;
                        case null:
                          return 4;
                        case !0:
                          return 6;
                        case !1:
                          return 8;
                        default:
                          let t = eK.pop() || eZ.length;
                          return ((eZ[t] = e), (eZ[t + 1] = 1), t);
                      }
                    },
                    e1 = (e) => {
                      var t = Error,
                        n = eJ(e, function (t) {
                          ((this.name = e),
                            (this.message = t),
                            void 0 !== (t = Error(t).stack) &&
                              (this.stack =
                                this.toString() +
                                "\n" +
                                t.replace(/^Error(:[^\n]*)?\n/, "")));
                        });
                      return (
                        (n.prototype = Object.create(t.prototype)),
                        (n.prototype.constructor = n),
                        (n.prototype.toString = function () {
                          return void 0 === this.message
                            ? this.name
                            : `${this.name}: ${this.message}`;
                        }),
                        n
                      );
                    },
                    e2 = (e) => {
                      for (var t = ""; A[e]; ) t += eG[A[e++]];
                      return t;
                    },
                    e4 = [],
                    e3 = () => {
                      for (; e4.length; ) {
                        var e = e4.pop();
                        ((e.g.fa = !1), e.delete());
                      }
                    },
                    e6 = {},
                    e5 = (e, t) => {
                      if (void 0 === t)
                        throw new e$("ptr should not be undefined");
                      for (; e.B; ) ((t = e.ma(t)), (e = e.B));
                      return t;
                    },
                    e8 = {},
                    e7 = (e) => {
                      var t = e2((e = nG(e)));
                      return (n$(e), t);
                    },
                    e9 = (e, t) => {
                      var n = e8[e];
                      if (void 0 === n)
                        throw (
                          (e = `${t} has unknown type ${e7(e)}`),
                          new e$(e)
                        );
                      return n;
                    },
                    te = () => {},
                    tt = !1,
                    tn = (e, t, n) =>
                      t === n
                        ? e
                        : void 0 === n.B || null === (e = tn(e, t, n.B))
                          ? null
                          : n.Eb(e),
                    tr = {},
                    ti = (e, t) => {
                      if (!t.u || !t.o)
                        throw new eH(
                          "makeClassHandle requires ptr and ptrType",
                        );
                      if (!!t.I != !!t.D)
                        throw new eH(
                          "Both smartPtrType and smartPtr must be specified",
                        );
                      return (
                        (t.count = { value: 1 }),
                        ta(Object.create(e, { g: { value: t, writable: !0 } }))
                      );
                    },
                    ta = (e) =>
                      "undefined" == typeof FinalizationRegistry
                        ? ((ta = (e) => e), e)
                        : ((tt = new FinalizationRegistry((e) => {
                            ((e = e.g),
                              --e.count.value,
                              0 === e.count.value &&
                                (e.D ? e.I.N(e.D) : e.u.i.N(e.o)));
                          })),
                          (ta = (e) => {
                            var t = e.g;
                            return (t.D && tt.register(e, { g: t }, e), e);
                          }),
                          (te = (e) => {
                            tt.unregister(e);
                          }),
                          ta(e)),
                    to = {},
                    ts = (e) => {
                      for (; e.length; ) {
                        var t = e.pop();
                        e.pop()(t);
                      }
                    };
                  function tu(e) {
                    return this.fromWireType(I[e >> 2]);
                  }
                  var tl = {},
                    tc = {},
                    tf = (e, t, n) => {
                      function r(t) {
                        if ((t = n(t)).length !== e.length)
                          throw new eH("Mismatched type converter count");
                        for (var r = 0; r < e.length; ++r) th(e[r], t[r]);
                      }
                      e.forEach(function (e) {
                        tc[e] = t;
                      });
                      var i = Array(t.length),
                        a = [],
                        o = 0;
                      (t.forEach((e, t) => {
                        e8.hasOwnProperty(e)
                          ? (i[t] = e8[e])
                          : (a.push(e),
                            tl.hasOwnProperty(e) || (tl[e] = []),
                            tl[e].push(() => {
                              ((i[t] = e8[e]), ++o === a.length && r(i));
                            }));
                      }),
                        0 === a.length && r(i));
                    };
                  function th(e, t, n = {}) {
                    if (!("argPackAdvance" in t))
                      throw TypeError(
                        "registerType registeredInstance requires argPackAdvance",
                      );
                    return (function (e, t, n = {}) {
                      var r = t.name;
                      if (!e)
                        throw new e$(
                          `type "${r}" must have a positive integer typeid pointer`,
                        );
                      if (e8.hasOwnProperty(e)) {
                        if (n.Ob) return;
                        throw new e$(`Cannot register type '${r}' twice`);
                      }
                      ((e8[e] = t),
                        delete tc[e],
                        tl.hasOwnProperty(e) &&
                          ((t = tl[e]), delete tl[e], t.forEach((e) => e())));
                    })(e, t, n);
                  }
                  var td = (e) => {
                    throw new e$(e.g.u.i.name + " instance already deleted");
                  };
                  function tp() {}
                  var tm = (e, t, n) => {
                      if (void 0 === e[t].A) {
                        var r = e[t];
                        ((e[t] = function (...r) {
                          if (!e[t].A.hasOwnProperty(r.length))
                            throw new e$(
                              `Function '${n}' called with an invalid number of arguments (${r.length}) - expects one of (${e[t].A})!`,
                            );
                          return e[t].A[r.length].apply(this, r);
                        }),
                          (e[t].A = []),
                          (e[t].A[r.da] = r));
                      }
                    },
                    tv = (t, n, r) => {
                      if (e.hasOwnProperty(t)) {
                        if (
                          void 0 === r ||
                          (void 0 !== e[t].A && void 0 !== e[t].A[r])
                        )
                          throw new e$(
                            `Cannot register public name '${t}' twice`,
                          );
                        if ((tm(e, t, t), e.hasOwnProperty(r)))
                          throw new e$(
                            `Cannot register multiple overloads of a function with the same number of arguments (${r})!`,
                          );
                        e[t].A[r] = n;
                      } else ((e[t] = n), void 0 !== r && (e[t].Dc = r));
                    };
                  function tg(e, t, n, r, i, a, o, s) {
                    ((this.name = e),
                      (this.constructor = t),
                      (this.L = n),
                      (this.N = r),
                      (this.B = i),
                      (this.Jb = a),
                      (this.ma = o),
                      (this.Eb = s),
                      (this.lb = []));
                  }
                  var tb = (e, t, n) => {
                    for (; t !== n; ) {
                      if (!t.ma)
                        throw new e$(
                          `Expected null or instance of ${n.name}, got an instance of ${t.name}`,
                        );
                      ((e = t.ma(e)), (t = t.B));
                    }
                    return e;
                  };
                  function ty(e, t) {
                    if (null === t) {
                      if (this.La)
                        throw new e$(`null is not a valid ${this.name}`);
                      return 0;
                    }
                    if (!t.g)
                      throw new e$(`Cannot pass "${tD(t)}" as a ${this.name}`);
                    if (!t.g.o)
                      throw new e$(
                        `Cannot pass deleted object as a pointer of type ${this.name}`,
                      );
                    return tb(t.g.o, t.g.u.i, this.i);
                  }
                  function tw(e, t) {
                    if (null === t) {
                      if (this.La)
                        throw new e$(`null is not a valid ${this.name}`);
                      if (this.ua) {
                        var n = this.Na();
                        return (null !== e && e.push(this.N, n), n);
                      }
                      return 0;
                    }
                    if (!t || !t.g)
                      throw new e$(`Cannot pass "${tD(t)}" as a ${this.name}`);
                    if (!t.g.o)
                      throw new e$(
                        `Cannot pass deleted object as a pointer of type ${this.name}`,
                      );
                    if (!this.ta && t.g.u.ta)
                      throw new e$(
                        `Cannot convert argument of type ${t.g.I ? t.g.I.name : t.g.u.name} to parameter type ${this.name}`,
                      );
                    if (((n = tb(t.g.o, t.g.u.i, this.i)), this.ua)) {
                      if (void 0 === t.g.D)
                        throw new e$(
                          "Passing raw pointer to smart pointer is illegal",
                        );
                      switch (this.ac) {
                        case 0:
                          if (t.g.I === this) n = t.g.D;
                          else
                            throw new e$(
                              `Cannot convert argument of type ${t.g.I ? t.g.I.name : t.g.u.name} to parameter type ${this.name}`,
                            );
                          break;
                        case 1:
                          n = t.g.D;
                          break;
                        case 2:
                          if (t.g.I === this) n = t.g.D;
                          else {
                            var r = t.clone();
                            ((n = this.Xb(
                              n,
                              e0(() => r.delete()),
                            )),
                              null !== e && e.push(this.N, n));
                          }
                          break;
                        default:
                          throw new e$("Unsupporting sharing policy");
                      }
                    }
                    return n;
                  }
                  function t_(e, t) {
                    if (null === t) {
                      if (this.La)
                        throw new e$(`null is not a valid ${this.name}`);
                      return 0;
                    }
                    if (!t.g)
                      throw new e$(`Cannot pass "${tD(t)}" as a ${this.name}`);
                    if (!t.g.o)
                      throw new e$(
                        `Cannot pass deleted object as a pointer of type ${this.name}`,
                      );
                    if (t.g.u.ta)
                      throw new e$(
                        `Cannot convert argument of type ${t.g.u.name} to parameter type ${this.name}`,
                      );
                    return tb(t.g.o, t.g.u.i, this.i);
                  }
                  function tA(e, t, n, r, i, a, o, s, u, l, c) {
                    ((this.name = e),
                      (this.i = t),
                      (this.La = n),
                      (this.ta = r),
                      (this.ua = i),
                      (this.Wb = a),
                      (this.ac = o),
                      (this.mb = s),
                      (this.Na = u),
                      (this.Xb = l),
                      (this.N = c),
                      i || void 0 !== t.B
                        ? (this.toWireType = tw)
                        : ((this.toWireType = r ? ty : t_), (this.K = null)));
                  }
                  var tC,
                    tE,
                    tM = (t, n, r) => {
                      if (!e.hasOwnProperty(t))
                        throw new eH("Replacing nonexistent public symbol");
                      void 0 !== e[t].A && void 0 !== r
                        ? (e[t].A[r] = n)
                        : ((e[t] = n), (e[t].da = r));
                    },
                    tI = [],
                    tP = (e) => {
                      var t = tI[e];
                      return (
                        t ||
                          (e >= tI.length && (tI.length = e + 1),
                          (tI[e] = t = tC.get(e))),
                        t
                      );
                    },
                    tx = (t, n) => {
                      let r;
                      var i = (t = e2(t)).includes("j")
                        ? ((r = t),
                          (...t) =>
                            ((t, n, r = []) =>
                              t.includes("j")
                                ? (0,
                                  e["dynCall_" + (t = t.replace(/p/g, "i"))])(
                                    n,
                                    ...r,
                                  )
                                : tP(n)(...r))(r, n, t))
                        : tP(n);
                      if ("function" != typeof i)
                        throw new e$(
                          `unknown function pointer with signature ${t}: ${n}`,
                        );
                      return i;
                    },
                    tF = (e, t) => {
                      var n = [],
                        r = {};
                      throw (
                        t.forEach(function e(t) {
                          r[t] ||
                            e8[t] ||
                            (tc[t]
                              ? tc[t].forEach(e)
                              : (n.push(t), (r[t] = !0)));
                        }),
                        new tE(`${e}: ` + n.map(e7).join([", "]))
                      );
                    };
                  function tT(e, t, n, r, i) {
                    var a = t.length;
                    if (2 > a)
                      throw new e$(
                        "argTypes array size mismatch! Must at least get return value and 'this' types!",
                      );
                    var o = null !== t[1] && null !== n,
                      s = (function (e) {
                        for (var t = 1; t < e.length; ++t)
                          if (null !== e[t] && void 0 === e[t].K) return !0;
                        return !1;
                      })(t),
                      u = "void" !== t[0].name,
                      l = a - 2,
                      c = Array(l),
                      f = [],
                      h = [];
                    return eJ(e, function (...n) {
                      if (n.length !== l)
                        throw new e$(
                          `function ${e} called with ${n.length} arguments, expected ${l}`,
                        );
                      if (
                        ((h.length = 0), (f.length = o ? 2 : 1), (f[0] = i), o)
                      ) {
                        var a = t[1].toWireType(h, this);
                        f[1] = a;
                      }
                      for (var d = 0; d < l; ++d)
                        ((c[d] = t[d + 2].toWireType(h, n[d])), f.push(c[d]));
                      if (((n = r(...f)), s)) ts(h);
                      else
                        for (d = o ? 1 : 2; d < t.length; d++) {
                          var p = 1 === d ? a : c[d - 2];
                          null !== t[d].K && t[d].K(p);
                        }
                      return u ? t[0].fromWireType(n) : void 0;
                    });
                  }
                  var tS,
                    tL,
                    tk = (e, t) => {
                      for (var n = [], r = 0; r < e; r++)
                        n.push(I[(t + 4 * r) >> 2]);
                      return n;
                    },
                    tj = (e) => {
                      let t = (e = e.trim()).indexOf("(");
                      return -1 !== t ? e.substr(0, t) : e;
                    },
                    tR = (e, t, n) => {
                      if (!(e instanceof Object))
                        throw new e$(`${n} with invalid "this": ${e}`);
                      if (!(e instanceof t.i.constructor))
                        throw new e$(
                          `${n} incompatible with "this" of type ${e.constructor.name}`,
                        );
                      if (!e.g.o)
                        throw new e$(
                          `cannot call emscripten binding method ${n} on deleted object`,
                        );
                      return tb(e.g.o, e.g.u.i, t.i);
                    },
                    tO = (e) => {
                      9 < e &&
                        0 == --eZ[e + 1] &&
                        ((eZ[e] = void 0), eK.push(e));
                    },
                    tB = {
                      name: "emscripten::val",
                      fromWireType: (e) => {
                        var t = eQ(e);
                        return (tO(e), t);
                      },
                      toWireType: (e, t) => e0(t),
                      argPackAdvance: 8,
                      readValueFromPointer: tu,
                      K: null,
                    },
                    tD = (e) => {
                      if (null === e) return "null";
                      var t = typeof e;
                      return "object" === t || "array" === t || "function" === t
                        ? e.toString()
                        : "" + e;
                    },
                    tW =
                      "undefined" != typeof TextDecoder
                        ? new TextDecoder("utf-16le")
                        : void 0,
                    tV = (e, t) => {
                      for (var n = e >> 1, r = n + t / 2; !(n >= r) && E[n]; )
                        ++n;
                      if (32 < (n <<= 1) - e && tW)
                        return tW.decode(A.subarray(e, n));
                      for (r = 0, n = ""; !(r >= t / 2); ++r) {
                        var i = C[(e + 2 * r) >> 1];
                        if (0 == i) break;
                        n += String.fromCharCode(i);
                      }
                      return n;
                    },
                    tU = (e, t, n) => {
                      if (2 > (n ??= 0x7fffffff)) return 0;
                      n -= 2;
                      var r = t;
                      n = n < 2 * e.length ? n / 2 : e.length;
                      for (var i = 0; i < n; ++i)
                        ((C[t >> 1] = e.charCodeAt(i)), (t += 2));
                      return ((C[t >> 1] = 0), t - r);
                    },
                    tN = (e) => 2 * e.length,
                    t$ = (e, t) => {
                      for (var n = 0, r = ""; !(n >= t / 4); ) {
                        var i = M[(e + 4 * n) >> 2];
                        if (0 == i) break;
                        (++n,
                          65536 <= i
                            ? ((i -= 65536),
                              (r += String.fromCharCode(
                                55296 | (i >> 10),
                                56320 | (1023 & i),
                              )))
                            : (r += String.fromCharCode(i)));
                      }
                      return r;
                    },
                    tz = (e, t, n) => {
                      if (4 > (n ??= 0x7fffffff)) return 0;
                      var r = t;
                      n = r + n - 4;
                      for (var i = 0; i < e.length; ++i) {
                        var a = e.charCodeAt(i);
                        if (
                          (55296 <= a &&
                            57343 >= a &&
                            (a =
                              (65536 + ((1023 & a) << 10)) |
                              (1023 & e.charCodeAt(++i))),
                          (M[t >> 2] = a),
                          (t += 4) + 4 > n)
                        )
                          break;
                      }
                      return ((M[t >> 2] = 0), t - r);
                    },
                    tG = (e) => {
                      for (var t = 0, n = 0; n < e.length; ++n) {
                        var r = e.charCodeAt(n);
                        (55296 <= r && 57343 >= r && ++n, (t += 4));
                      }
                      return t;
                    },
                    tY = (e, t, n) => {
                      var r = [];
                      return (
                        (e = e.toWireType(r, n)),
                        r.length && (I[t >> 2] = e0(r)),
                        e
                      );
                    },
                    tH = {},
                    tX = (e) => {
                      var t = tH[e];
                      return void 0 === t ? e2(e) : t;
                    },
                    tq = [],
                    tJ = Reflect.construct,
                    tK = (e) => 0 == e % 4 && (0 != e % 100 || 0 == e % 400),
                    tZ = [
                      0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335,
                    ],
                    tQ = [
                      0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334,
                    ],
                    t0 = [],
                    t1 = (e) => {
                      var t =
                        "ANGLE_instanced_arrays EXT_blend_minmax EXT_disjoint_timer_query EXT_frag_depth EXT_shader_texture_lod EXT_sRGB OES_element_index_uint OES_fbo_render_mipmap OES_standard_derivatives OES_texture_float OES_texture_half_float OES_texture_half_float_linear OES_vertex_array_object WEBGL_color_buffer_float WEBGL_depth_texture WEBGL_draw_buffers EXT_color_buffer_float EXT_conservative_depth EXT_disjoint_timer_query_webgl2 EXT_texture_norm16 NV_shader_noperspective_interpolation WEBGL_clip_cull_distance EXT_color_buffer_half_float EXT_depth_clamp EXT_float_blend EXT_texture_compression_bptc EXT_texture_compression_rgtc EXT_texture_filter_anisotropic KHR_parallel_shader_compile OES_texture_float_linear WEBGL_blend_func_extended WEBGL_compressed_texture_astc WEBGL_compressed_texture_etc WEBGL_compressed_texture_etc1 WEBGL_compressed_texture_s3tc WEBGL_compressed_texture_s3tc_srgb WEBGL_debug_renderer_info WEBGL_debug_shaders WEBGL_lose_context WEBGL_multi_draw".split(
                          " ",
                        );
                      return (e.getSupportedExtensions() || []).filter((e) =>
                        t.includes(e),
                      );
                    },
                    t2 = 1,
                    t4 = [],
                    t3 = [],
                    t6 = [],
                    t5 = [],
                    t8 = [],
                    t7 = [],
                    t9 = [],
                    ne = [],
                    nt = [],
                    nn = [],
                    nr = {},
                    ni = {},
                    na = 4,
                    no = 0,
                    ns = (e) => {
                      for (var t = t2++, n = e.length; n < t; n++) e[n] = null;
                      return t;
                    },
                    nu = (e, t, n, r) => {
                      for (var i = 0; i < e; i++) {
                        var a = nB[n](),
                          o = a && ns(r);
                        (a ? ((a.name = o), (r[o] = a)) : (tS ||= 1282),
                          (M[(t + 4 * i) >> 2] = o));
                      }
                    },
                    nl = (t) => (
                      (tL = ne[t]),
                      (e.sc = nB = tL?.Sa),
                      !(t && !nB)
                    ),
                    nc = (e) => {
                      if (!(e ||= tL).Pb) {
                        e.Pb = !0;
                        var t,
                          n,
                          r,
                          i = e.Sa;
                        ((t = i.getExtension("ANGLE_instanced_arrays")) &&
                          ((i.vertexAttribDivisor = (e, n) =>
                            t.vertexAttribDivisorANGLE(e, n)),
                          (i.drawArraysInstanced = (e, n, r, i) =>
                            t.drawArraysInstancedANGLE(e, n, r, i)),
                          (i.drawElementsInstanced = (e, n, r, i, a) =>
                            t.drawElementsInstancedANGLE(e, n, r, i, a))),
                          (n = i.getExtension("OES_vertex_array_object")) &&
                            ((i.createVertexArray = () =>
                              n.createVertexArrayOES()),
                            (i.deleteVertexArray = (e) =>
                              n.deleteVertexArrayOES(e)),
                            (i.bindVertexArray = (e) =>
                              n.bindVertexArrayOES(e)),
                            (i.isVertexArray = (e) => n.isVertexArrayOES(e))),
                          (r = i.getExtension("WEBGL_draw_buffers")) &&
                            (i.drawBuffers = (e, t) =>
                              r.drawBuffersWEBGL(e, t)),
                          (i.Ya = i.getExtension(
                            "WEBGL_draw_instanced_base_vertex_base_instance",
                          )),
                          (i.fb = i.getExtension(
                            "WEBGL_multi_draw_instanced_base_vertex_base_instance",
                          )),
                          2 <= e.version &&
                            (i.Za = i.getExtension(
                              "EXT_disjoint_timer_query_webgl2",
                            )),
                          (2 > e.version || !i.Za) &&
                            (i.Za = i.getExtension("EXT_disjoint_timer_query")),
                          (i.Bc = i.getExtension("WEBGL_multi_draw")),
                          t1(i).forEach((e) => {
                            e.includes("lose_context") ||
                              e.includes("debug") ||
                              i.getExtension(e);
                          }));
                      }
                    },
                    nf = (e, t) => {
                      nB.bindFramebuffer(e, t6[t]);
                    },
                    nh = (e) => {
                      nB.bindVertexArray(t9[e]);
                    },
                    nd = (e, t) => {
                      for (var n = 0; n < e; n++) {
                        var r = M[(t + 4 * n) >> 2];
                        (nB.deleteVertexArray(t9[r]), (t9[r] = null));
                      }
                    },
                    np = [],
                    nm = (e, t) => {
                      nu(e, t, "createVertexArray", t9);
                    };
                  function nv() {
                    var e = t1(nB);
                    return e.concat(e.map((e) => "GL_" + e));
                  }
                  var ng,
                    nb = (e, t) =>
                      ((e, t) => {
                        if (t) {
                          var n = void 0;
                          switch (e) {
                            case 36346:
                              n = 1;
                              break;
                            case 36344:
                              return;
                            case 34814:
                            case 36345:
                              n = 0;
                              break;
                            case 34466:
                              var r = nB.getParameter(34467);
                              n = r ? r.length : 0;
                              break;
                            case 33309:
                              if (2 > tL.version) {
                                tS ||= 1282;
                                return;
                              }
                              n = nv().length;
                              break;
                            case 33307:
                            case 33308:
                              if (2 > tL.version) {
                                tS ||= 1280;
                                return;
                              }
                              n = 3 * (33307 == e);
                          }
                          if (void 0 === n)
                            switch (typeof (r = nB.getParameter(e))) {
                              case "number":
                                n = r;
                                break;
                              case "boolean":
                                n = +!!r;
                                break;
                              case "string":
                                tS ||= 1280;
                                return;
                              case "object":
                                if (null === r)
                                  switch (e) {
                                    case 34964:
                                    case 35725:
                                    case 34965:
                                    case 36006:
                                    case 36007:
                                    case 32873:
                                    case 34229:
                                    case 36662:
                                    case 36663:
                                    case 35053:
                                    case 35055:
                                    case 36010:
                                    case 35097:
                                    case 35869:
                                    case 32874:
                                    case 36389:
                                    case 35983:
                                    case 35368:
                                    case 34068:
                                      n = 0;
                                      break;
                                    default:
                                      tS ||= 1280;
                                      return;
                                  }
                                else {
                                  if (
                                    r instanceof Float32Array ||
                                    r instanceof Uint32Array ||
                                    r instanceof Int32Array ||
                                    r instanceof Array
                                  ) {
                                    for (e = 0; e < r.length; ++e)
                                      M[(t + 4 * e) >> 2] = r[e];
                                    return;
                                  }
                                  try {
                                    n = 0 | r.name;
                                  } catch (t) {
                                    ((tS ||= 1280),
                                      b(
                                        `GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter(${e})! (error: ${t})`,
                                      ));
                                    return;
                                  }
                                }
                                break;
                              default:
                                ((tS ||= 1280),
                                  b(
                                    `GL_INVALID_ENUM in glGet0v: Native code calling glGet0v(${e}) and it returns ${r} of type ${typeof r}!`,
                                  ));
                                return;
                            }
                          M[t >> 2] = n;
                        } else tS ||= 1281;
                      })(e, t),
                    ny = (e) => {
                      var t = er(e) + 1,
                        n = nz(t);
                      return (n && ei(e, A, n, t), n);
                    },
                    nw = (e) => "]" == e.slice(-1) && e.lastIndexOf("["),
                    n_ = (e) =>
                      0 == (e -= 5120)
                        ? _
                        : 1 == e
                          ? A
                          : 2 == e
                            ? C
                            : 4 == e
                              ? M
                              : 6 == e
                                ? P
                                : 5 == e ||
                                    28922 == e ||
                                    28520 == e ||
                                    30779 == e ||
                                    30782 == e
                                  ? I
                                  : E,
                    nA = (e, t, n, r, i) => (
                      (e = n_(e)),
                      (t =
                        r *
                        (((no || n) *
                          ({
                            5: 3,
                            6: 4,
                            8: 2,
                            29502: 3,
                            29504: 4,
                            26917: 2,
                            26918: 2,
                            29846: 3,
                            29847: 4,
                          }[t - 6402] || 1) *
                          e.BYTES_PER_ELEMENT +
                          na -
                          1) &
                          -na)),
                      e.subarray(
                        i >>> (31 - Math.clz32(e.BYTES_PER_ELEMENT)),
                        (i + t) >>> (31 - Math.clz32(e.BYTES_PER_ELEMENT)),
                      )
                    ),
                    nC = (e) => {
                      var t = nB.Db;
                      if (t) {
                        var n = t.la[e];
                        return (
                          "number" == typeof n &&
                            (t.la[e] = n =
                              nB.getUniformLocation(
                                t,
                                t.rb[e] + (0 < n ? `[${n}]` : ""),
                              )),
                          n
                        );
                      }
                      tS ||= 1282;
                    },
                    nE = [],
                    nM = [],
                    nI = {},
                    nP = () => {
                      if (!ng) {
                        var e,
                          t = {
                            USER: "web_user",
                            LOGNAME: "web_user",
                            PATH: "/",
                            PWD: "/",
                            HOME: "/home/web_user",
                            LANG:
                              (
                                ("object" == typeof navigator &&
                                  navigator.languages &&
                                  navigator.languages[0]) ||
                                "C"
                              ).replace("-", "_") + ".UTF-8",
                            _: m || "./this.program",
                          };
                        for (e in nI)
                          void 0 === nI[e] ? delete t[e] : (t[e] = nI[e]);
                        var n = [];
                        for (e in t) n.push(`${e}=${t[e]}`);
                        ng = n;
                      }
                      return ng;
                    },
                    nx = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                    nF = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                    nT = (e, t, n, r) => {
                      function i(e, t, n) {
                        for (
                          e = "number" == typeof e ? e.toString() : e || "";
                          e.length < t;
                        )
                          e = n[0] + e;
                        return e;
                      }
                      function a(e, t) {
                        return i(e, t, "0");
                      }
                      function o(e, t) {
                        var n;
                        function r(e) {
                          return 0 > e ? -1 : +(0 < e);
                        }
                        return (
                          0 === (n = r(e.getFullYear() - t.getFullYear())) &&
                            0 === (n = r(e.getMonth() - t.getMonth())) &&
                            (n = r(e.getDate() - t.getDate())),
                          n
                        );
                      }
                      function s(e) {
                        switch (e.getDay()) {
                          case 0:
                            return new Date(e.getFullYear() - 1, 11, 29);
                          case 1:
                            return e;
                          case 2:
                            return new Date(e.getFullYear(), 0, 3);
                          case 3:
                            return new Date(e.getFullYear(), 0, 2);
                          case 4:
                            return new Date(e.getFullYear(), 0, 1);
                          case 5:
                            return new Date(e.getFullYear() - 1, 11, 31);
                          case 6:
                            return new Date(e.getFullYear() - 1, 11, 30);
                        }
                      }
                      function u(e) {
                        var t = e.$;
                        for (
                          e = new Date(new Date(e.aa + 1900, 0, 1).getTime());
                          0 < t;
                        ) {
                          var n = e.getMonth(),
                            r = (tK(e.getFullYear()) ? nx : nF)[n];
                          if (t > r - e.getDate())
                            ((t -= r - e.getDate() + 1),
                              e.setDate(1),
                              11 > n
                                ? e.setMonth(n + 1)
                                : (e.setMonth(0),
                                  e.setFullYear(e.getFullYear() + 1)));
                          else {
                            e.setDate(e.getDate() + t);
                            break;
                          }
                        }
                        return (
                          (n = new Date(e.getFullYear() + 1, 0, 4)),
                          (t = s(new Date(e.getFullYear(), 0, 4))),
                          (n = s(n)),
                          0 >= o(t, e)
                            ? 0 >= o(n, e)
                              ? e.getFullYear() + 1
                              : e.getFullYear()
                            : e.getFullYear() - 1
                        );
                      }
                      var l = I[(r + 40) >> 2];
                      for (var c in ((r = {
                        dc: M[r >> 2],
                        cc: M[(r + 4) >> 2],
                        Fa: M[(r + 8) >> 2],
                        Pa: M[(r + 12) >> 2],
                        Ga: M[(r + 16) >> 2],
                        aa: M[(r + 20) >> 2],
                        P: M[(r + 24) >> 2],
                        $: M[(r + 28) >> 2],
                        Fc: M[(r + 32) >> 2],
                        bc: M[(r + 36) >> 2],
                        ec: l && l ? et(A, l) : "",
                      }),
                      (n = n ? et(A, n) : ""),
                      (l = {
                        "%c": "%a %b %d %H:%M:%S %Y",
                        "%D": "%m/%d/%y",
                        "%F": "%Y-%m-%d",
                        "%h": "%b",
                        "%r": "%I:%M:%S %p",
                        "%R": "%H:%M",
                        "%T": "%H:%M:%S",
                        "%x": "%m/%d/%y",
                        "%X": "%H:%M:%S",
                        "%Ec": "%c",
                        "%EC": "%C",
                        "%Ex": "%m/%d/%y",
                        "%EX": "%H:%M:%S",
                        "%Ey": "%y",
                        "%EY": "%Y",
                        "%Od": "%d",
                        "%Oe": "%e",
                        "%OH": "%H",
                        "%OI": "%I",
                        "%Om": "%m",
                        "%OM": "%M",
                        "%OS": "%S",
                        "%Ou": "%u",
                        "%OU": "%U",
                        "%OV": "%V",
                        "%Ow": "%w",
                        "%OW": "%W",
                        "%Oy": "%y",
                      })))
                        n = n.replace(RegExp(c, "g"), l[c]);
                      var f =
                          "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(
                            " ",
                          ),
                        h =
                          "January February March April May June July August September October November December".split(
                            " ",
                          );
                      for (c in ((l = {
                        "%a": (e) => f[e.P].substring(0, 3),
                        "%A": (e) => f[e.P],
                        "%b": (e) => h[e.Ga].substring(0, 3),
                        "%B": (e) => h[e.Ga],
                        "%C": (e) => a(((e.aa + 1900) / 100) | 0, 2),
                        "%d": (e) => a(e.Pa, 2),
                        "%e": (e) => i(e.Pa, 2, " "),
                        "%g": (e) => u(e).toString().substring(2),
                        "%G": u,
                        "%H": (e) => a(e.Fa, 2),
                        "%I": (e) => (
                          0 == (e = e.Fa) ? (e = 12) : 12 < e && (e -= 12),
                          a(e, 2)
                        ),
                        "%j": (e) => {
                          for (
                            var t = 0, n = 0;
                            n <= e.Ga - 1;
                            t += (tK(e.aa + 1900) ? nx : nF)[n++]
                          );
                          return a(e.Pa + t, 3);
                        },
                        "%m": (e) => a(e.Ga + 1, 2),
                        "%M": (e) => a(e.cc, 2),
                        "%n": () => "\n",
                        "%p": (e) => (0 <= e.Fa && 12 > e.Fa ? "AM" : "PM"),
                        "%S": (e) => a(e.dc, 2),
                        "%t": () => "	",
                        "%u": (e) => e.P || 7,
                        "%U": (e) => a(Math.floor((e.$ + 7 - e.P) / 7), 2),
                        "%V": (e) => {
                          var t = Math.floor((e.$ + 7 - ((e.P + 6) % 7)) / 7);
                          if ((2 >= (e.P + 371 - e.$ - 2) % 7 && t++, t))
                            53 == t &&
                              (4 == (n = (e.P + 371 - e.$) % 7) ||
                                (3 == n && tK(e.aa)) ||
                                (t = 1));
                          else {
                            t = 52;
                            var n = (e.P + 7 - e.$ - 1) % 7;
                            (4 == n || (5 == n && tK((e.aa % 400) - 1))) && t++;
                          }
                          return a(t, 2);
                        },
                        "%w": (e) => e.P,
                        "%W": (e) =>
                          a(Math.floor((e.$ + 7 - ((e.P + 6) % 7)) / 7), 2),
                        "%y": (e) => (e.aa + 1900).toString().substring(2),
                        "%Y": (e) => e.aa + 1900,
                        "%z": (e) => {
                          var t = 0 <= (e = e.bc);
                          return (
                            (t ? "+" : "-") +
                            String(
                              "0000" +
                                (((e = Math.abs(e) / 60) / 60) * 100 +
                                  (e % 60)),
                            ).slice(-4)
                          );
                        },
                        "%Z": (e) => e.ec,
                        "%%": () => "%",
                      }),
                      (n = n.replace(/%%/g, "\0\0")),
                      l))
                        n.includes(c) &&
                          (n = n.replace(RegExp(c, "g"), l[c](r)));
                      return (c = ea((n = n.replace(/\0\0/g, "%")), !1))
                        .length > t
                        ? 0
                        : (_.set(c, e), c.length - 1);
                    };
                  ([44].forEach((e) => {
                    ((eb[e] = new eg(e)),
                      (eb[e].stack = "<generic error, no stack>"));
                  }),
                    (em = Array(4096)),
                    eL(ec, "/"),
                    ej("/tmp"),
                    ej("/home"),
                    ej("/home/web_user"),
                    ej("/dev"),
                    (eh[259] = {
                      m: { read: () => 0, write: (e, t, n, r) => r },
                    }),
                    eR("/dev/null", 259),
                    es(1280, {
                      cb() {
                        e: {
                          if (!en.length) {
                            var e = null;
                            if (
                              ("undefined" != typeof window &&
                                "function" == typeof window.prompt &&
                                null !== (e = window.prompt("Input: ")) &&
                                (e += "\n"),
                              !e)
                            ) {
                              e = null;
                              break e;
                            }
                            en = ea(e, !0);
                          }
                          e = en.shift();
                        }
                        return e;
                      },
                      Ma(e, t) {
                        null === t || 10 === t
                          ? (g(et(e.F, 0)), (e.F = []))
                          : 0 != t && e.F.push(t);
                      },
                      qa(e) {
                        e.F && 0 < e.F.length && (g(et(e.F, 0)), (e.F = []));
                      },
                      Rb: () => ({
                        oc: 25856,
                        qc: 5,
                        nc: 191,
                        pc: 35387,
                        mc: [
                          3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23,
                          22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        ],
                      }),
                      Sb: () => 0,
                      Tb: () => [24, 80],
                    }),
                    es(1536, {
                      Ma(e, t) {
                        null === t || 10 === t
                          ? (b(et(e.F, 0)), (e.F = []))
                          : 0 != t && e.F.push(t);
                      },
                      qa(e) {
                        e.F && 0 < e.F.length && (b(et(e.F, 0)), (e.F = []));
                      },
                    }),
                    eR("/dev/tty", 1280),
                    eR("/dev/tty1", 1536),
                    (nk = new Uint8Array(1024)),
                    (nj = 0),
                    eW(
                      "random",
                      (nR = () => (
                        0 === nj && (nj = Z(nk).byteLength),
                        nk[--nj]
                      )),
                    ),
                    eW("urandom", nR),
                    ej("/dev/shm"),
                    ej("/dev/shm/tmp"),
                    ej("/proc"),
                    (nO = ej("/proc/self")),
                    ej("/proc/self/fd"),
                    eL(
                      {
                        S() {
                          var e = eM(nO, "fd", 16895, 73);
                          return (
                            (e.j = {
                              ja(e, t) {
                                var n = eF(+t);
                                return ((e = {
                                  parent: null,
                                  S: { hb: "fake" },
                                  j: { ka: () => n.path },
                                }).parent = e);
                              },
                            }),
                            e
                          );
                        },
                      },
                      "/proc/self/fd",
                    ),
                    (e$ = e.BindingError =
                      class extends Error {
                        constructor(e) {
                          (super(e), (this.name = "BindingError"));
                        }
                      }),
                    eZ.push(0, 1, void 0, 1, null, 1, !0, 1, !1, 1),
                    (e.count_emval_handles = () =>
                      eZ.length / 2 - 5 - eK.length),
                    (ez = e.PureVirtualError = e1("PureVirtualError")));
                  for (var nS = Array(256), nL = 0; 256 > nL; ++nL)
                    nS[nL] = String.fromCharCode(nL);
                  ((eG = nS),
                    (e.getInheritedInstanceCount = () =>
                      Object.keys(e6).length),
                    (e.getLiveInheritedInstances = () => {
                      var e,
                        t = [];
                      for (e in e6) e6.hasOwnProperty(e) && t.push(e6[e]);
                      return t;
                    }),
                    (e.flushPendingDeletes = e3),
                    (e.setDelayFunction = (e) => {
                      ((eY = e), e4.length && eY && eY(e3));
                    }),
                    (eH = e.InternalError =
                      class extends Error {
                        constructor(e) {
                          (super(e), (this.name = "InternalError"));
                        }
                      }),
                    Object.assign(tp.prototype, {
                      isAliasOf: function (e) {
                        if (!(this instanceof tp && e instanceof tp)) return !1;
                        var t = this.g.u.i,
                          n = this.g.o;
                        e.g = e.g;
                        var r = e.g.u.i;
                        for (e = e.g.o; t.B; ) ((n = t.ma(n)), (t = t.B));
                        for (; r.B; ) ((e = r.ma(e)), (r = r.B));
                        return t === r && n === e;
                      },
                      clone: function () {
                        if ((this.g.o || td(this), this.g.ha))
                          return ((this.g.count.value += 1), this);
                        var e = ta,
                          t = Object,
                          n = t.create,
                          r = Object.getPrototypeOf(this),
                          i = this.g;
                        return (
                          (e = e(
                            n.call(t, r, {
                              g: {
                                value: {
                                  count: i.count,
                                  fa: i.fa,
                                  ha: i.ha,
                                  o: i.o,
                                  u: i.u,
                                  D: i.D,
                                  I: i.I,
                                },
                              },
                            }),
                          )),
                          (e.g.count.value += 1),
                          (e.g.fa = !1),
                          e
                        );
                      },
                      delete() {
                        if ((this.g.o || td(this), this.g.fa && !this.g.ha))
                          throw new e$("Object already scheduled for deletion");
                        te(this);
                        var e = this.g;
                        (--e.count.value,
                          0 === e.count.value &&
                            (e.D ? e.I.N(e.D) : e.u.i.N(e.o)),
                          this.g.ha ||
                            ((this.g.D = void 0), (this.g.o = void 0)));
                      },
                      isDeleted: function () {
                        return !this.g.o;
                      },
                      deleteLater: function () {
                        if ((this.g.o || td(this), this.g.fa && !this.g.ha))
                          throw new e$("Object already scheduled for deletion");
                        return (
                          e4.push(this),
                          1 === e4.length && eY && eY(e3),
                          (this.g.fa = !0),
                          this
                        );
                      },
                    }),
                    Object.assign(tA.prototype, {
                      Kb(e) {
                        return (this.mb && (e = this.mb(e)), e);
                      },
                      Xa(e) {
                        this.N?.(e);
                      },
                      argPackAdvance: 8,
                      readValueFromPointer: tu,
                      fromWireType: function (e) {
                        function t() {
                          return this.ua
                            ? ti(this.i.L, { u: this.Wb, o: n, I: this, D: e })
                            : ti(this.i.L, { u: this, o: e });
                        }
                        var n = this.Kb(e);
                        if (!n) return (this.Xa(e), null);
                        var r = e6[e5(this.i, n)];
                        if (void 0 !== r)
                          return 0 === r.g.count.value
                            ? ((r.g.o = n), (r.g.D = e), r.clone())
                            : ((r = r.clone()), this.Xa(e), r);
                        if (!(r = tr[(r = this.i.Jb(n))])) return t.call(this);
                        r = this.ta ? r.Cb : r.pointerType;
                        var i = tn(n, this.i, r.i);
                        return null === i
                          ? t.call(this)
                          : this.ua
                            ? ti(r.i.L, { u: r, o: i, I: this, D: e })
                            : ti(r.i.L, { u: r, o: i });
                      },
                    }),
                    (tE = e.UnboundTypeError = e1("UnboundTypeError")));
                  for (var nk, nj, nR, nO, nB, nD = 0; 32 > nD; ++nD)
                    np.push(Array(nD));
                  var nW = new Float32Array(288);
                  for (nD = 0; 288 > nD; ++nD) nE[nD] = nW.subarray(0, nD);
                  var nV = new Int32Array(288);
                  for (nD = 0; 288 > nD; ++nD) nM[nD] = nV.subarray(0, nD);
                  var nU = {
                      __syscall_fcntl64: function (e, t, n) {
                        eq = n;
                        try {
                          var r = eF(e);
                          switch (t) {
                            case 0:
                              var i = H();
                              if (0 > i) break;
                              for (; ed[i]; ) i++;
                              return (function (e, t = -1) {
                                return ((e = eT(e, t)), e.m?.uc?.(e), e);
                              })(r, i).U;
                            case 1:
                            case 2:
                            case 13:
                            case 14:
                              return 0;
                            case 3:
                              return r.flags;
                            case 4:
                              return ((i = H()), (r.flags |= i), 0);
                            case 12:
                              return ((C[((i = H()) + 0) >> 1] = 2), 0);
                          }
                          return -28;
                        } catch (e) {
                          if (void 0 === eX || "ErrnoError" !== e.name) throw e;
                          return -e.Y;
                        }
                      },
                      __syscall_ioctl: function (e, t, n) {
                        eq = n;
                        try {
                          var r = eF(e);
                          switch (t) {
                            case 21509:
                            case 21510:
                            case 21511:
                            case 21512:
                            case 21524:
                            case 21515:
                              return r.s ? 0 : -59;
                            case 21505:
                              if (!r.s) return -59;
                              if (r.s.T.Rb) {
                                e = [
                                  3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18,
                                  15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                  0, 0, 0, 0, 0,
                                ];
                                var i = H();
                                ((M[i >> 2] = 25856),
                                  (M[(i + 4) >> 2] = 5),
                                  (M[(i + 8) >> 2] = 191),
                                  (M[(i + 12) >> 2] = 35387));
                                for (var a = 0; 32 > a; a++)
                                  _[i + a + 17] = e[a] || 0;
                              }
                              return 0;
                            case 21506:
                            case 21507:
                            case 21508:
                              if (!r.s) return -59;
                              if (r.s.T.Sb)
                                for (i = H(), e = [], a = 0; 32 > a; a++)
                                  e.push(_[i + a + 17]);
                              return 0;
                            case 21519:
                              if (!r.s) return -59;
                              return (M[(i = H()) >> 2] = 0);
                            case 21520:
                              return r.s ? -28 : -59;
                            case 21531:
                              if (((i = H()), !r.m.Qb)) throw new eg(59);
                              return r.m.Qb(r, t, i);
                            case 21523:
                              if (!r.s) return -59;
                              return (
                                r.s.T.Tb &&
                                  ((a = [24, 80]),
                                  (C[(i = H()) >> 1] = a[0]),
                                  (C[(i + 2) >> 1] = a[1])),
                                0
                              );
                            default:
                              return -28;
                          }
                        } catch (e) {
                          if (void 0 === eX || "ErrnoError" !== e.name) throw e;
                          return -e.Y;
                        }
                      },
                      __syscall_openat: function (e, t, n, r) {
                        eq = r;
                        try {
                          var i = (t = t ? et(A, t) : "");
                          if ("/" === i.charAt(0)) t = i;
                          else {
                            var a = -100 === e ? "/" : eF(e).path;
                            if (0 == i.length) throw new eg(44);
                            t = q(a + "/" + i);
                          }
                          var o = r ? H() : 0;
                          return eB(t, n, o).U;
                        } catch (e) {
                          if (void 0 === eX || "ErrnoError" !== e.name) throw e;
                          return -e.Y;
                        }
                      },
                      _abort_js: () => {
                        B("");
                      },
                      _embind_create_inheriting_constructor: (e, t, n) => {
                        ((e = e2(e)), (t = e9(t, "wrapper")), (n = eQ(n)));
                        var r = t.i,
                          i = r.L,
                          a = r.B.L,
                          o = r.B.constructor;
                        return (
                          (e = eJ(e, function (...e) {
                            (r.B.lb.forEach(
                              function (e) {
                                if (this[e] === a[e])
                                  throw new ez(
                                    `Pure virtual function ${e} must be implemented in JavaScript`,
                                  );
                              }.bind(this),
                            ),
                              Object.defineProperty(this, "__parent", {
                                value: i,
                              }),
                              this.__construct(...e));
                          })),
                          (i.__construct = function (...e) {
                            if (this === i)
                              throw new e$(
                                "Pass correct 'this' to __construct",
                              );
                            ((e = o.implement(this, ...e)), te(e));
                            var t = e.g;
                            if (
                              (e.notifyOnDestruction(),
                              (t.ha = !0),
                              Object.defineProperties(this, {
                                g: { value: t },
                              }),
                              ta(this),
                              (e = e5(r, (e = t.o))),
                              e6.hasOwnProperty(e))
                            )
                              throw new e$(
                                `Tried to register registered instance: ${e}`,
                              );
                            e6[e] = this;
                          }),
                          (i.__destruct = function () {
                            if (this === i)
                              throw new e$("Pass correct 'this' to __destruct");
                            te(this);
                            var e = this.g.o;
                            if (((e = e5(r, e)), e6.hasOwnProperty(e)))
                              delete e6[e];
                            else
                              throw new e$(
                                `Tried to unregister unregistered instance: ${e}`,
                              );
                          }),
                          (e.prototype = Object.create(i)),
                          Object.assign(e.prototype, n),
                          e0(e)
                        );
                      },
                      _embind_finalize_value_object: (e) => {
                        var t = to[e];
                        delete to[e];
                        var n = t.Na,
                          r = t.N,
                          i = t.$a;
                        tf(
                          [e],
                          i.map((e) => e.Nb).concat(i.map((e) => e.Zb)),
                          (e) => {
                            var a = {};
                            return (
                              i.forEach((t, n) => {
                                var r = e[n],
                                  o = t.Lb,
                                  s = t.Mb,
                                  u = e[n + i.length],
                                  l = t.Yb,
                                  c = t.$b;
                                a[t.Hb] = {
                                  read: (e) => r.fromWireType(o(s, e)),
                                  write: (e, t) => {
                                    var n = [];
                                    (l(c, e, u.toWireType(n, t)), ts(n));
                                  },
                                };
                              }),
                              [
                                {
                                  name: t.name,
                                  fromWireType: (e) => {
                                    var t,
                                      n = {};
                                    for (t in a) n[t] = a[t].read(e);
                                    return (r(e), n);
                                  },
                                  toWireType: (e, t) => {
                                    for (var i in a)
                                      if (!(i in t))
                                        throw TypeError(
                                          `Missing field: "${i}"`,
                                        );
                                    var o = n();
                                    for (i in a) a[i].write(o, t[i]);
                                    return (null !== e && e.push(r, o), o);
                                  },
                                  argPackAdvance: 8,
                                  readValueFromPointer: tu,
                                  K: r,
                                },
                              ]
                            );
                          },
                        );
                      },
                      _embind_register_bigint: () => {},
                      _embind_register_bool: (e, t, n, r) => {
                        th(e, {
                          name: (t = e2(t)),
                          fromWireType: function (e) {
                            return !!e;
                          },
                          toWireType: function (e, t) {
                            return t ? n : r;
                          },
                          argPackAdvance: 8,
                          readValueFromPointer: function (e) {
                            return this.fromWireType(A[e]);
                          },
                          K: null,
                        });
                      },
                      _embind_register_class: (
                        e,
                        t,
                        n,
                        r,
                        i,
                        a,
                        o,
                        s,
                        u,
                        l,
                        c,
                        f,
                        h,
                      ) => {
                        ((c = e2(c)),
                          (a = tx(i, a)),
                          (s &&= tx(o, s)),
                          (l &&= tx(u, l)),
                          (h = tx(f, h)));
                        var d = ((e) => {
                          if (void 0 === e) return "_unknown";
                          var t = (e = e.replace(
                            /[^a-zA-Z0-9_]/g,
                            "$",
                          )).charCodeAt(0);
                          return 48 <= t && 57 >= t ? `_${e}` : e;
                        })(c);
                        (tv(d, function () {
                          tF(`Cannot construct ${c} due to unbound types`, [r]);
                        }),
                          tf([e, t, n], r ? [r] : [], (t) => {
                            if (((t = t[0]), r))
                              var n,
                                i = t.i,
                                o = i.L;
                            else o = tp.prototype;
                            var u = Object.create(o, {
                              constructor: {
                                value: (t = eJ(c, function (...e) {
                                  if (Object.getPrototypeOf(this) !== u)
                                    throw new e$("Use 'new' to construct " + c);
                                  if (void 0 === f.X)
                                    throw new e$(
                                      c + " has no accessible constructor",
                                    );
                                  var t = f.X[e.length];
                                  if (void 0 === t)
                                    throw new e$(
                                      `Tried to invoke ctor of ${c} with invalid number of parameters (${e.length}) - expected (${Object.keys(f.X).toString()}) parameters instead!`,
                                    );
                                  return t.apply(this, e);
                                })),
                              },
                            });
                            t.prototype = u;
                            var f = new tg(c, t, u, h, i, a, s, l);
                            return (
                              f.B &&
                                ((n = f.B).na ?? (n.na = []), f.B.na.push(f)),
                              (i = new tA(c, f, !0, !1, !1)),
                              (n = new tA(c + "*", f, !1, !1, !1)),
                              (o = new tA(c + " const*", f, !1, !0, !1)),
                              (tr[e] = { pointerType: n, Cb: o }),
                              tM(d, t),
                              [i, n, o]
                            );
                          }));
                      },
                      _embind_register_class_class_function: (
                        e,
                        t,
                        n,
                        r,
                        i,
                        a,
                        o,
                      ) => {
                        var s = tk(n, r);
                        ((t = tj((t = e2(t)))),
                          (a = tx(i, a)),
                          tf([], [e], (e) => {
                            function r() {
                              tF(`Cannot call ${i} due to unbound types`, s);
                            }
                            e = e[0];
                            var i = `${e.name}.${t}`;
                            t.startsWith("@@") && (t = Symbol[t.substring(2)]);
                            var u = e.i.constructor;
                            return (
                              void 0 === u[t]
                                ? ((r.da = n - 1), (u[t] = r))
                                : (tm(u, t, i), (u[t].A[n - 1] = r)),
                              tf([], s, (r) => {
                                if (
                                  ((r = tT(
                                    i,
                                    [r[0], null].concat(r.slice(1)),
                                    null,
                                    a,
                                    o,
                                  )),
                                  void 0 === u[t].A
                                    ? ((r.da = n - 1), (u[t] = r))
                                    : (u[t].A[n - 1] = r),
                                  e.i.na)
                                )
                                  for (let n of e.i.na)
                                    n.constructor.hasOwnProperty(t) ||
                                      (n.constructor[t] = r);
                                return [];
                              }),
                              []
                            );
                          }));
                      },
                      _embind_register_class_class_property: (
                        e,
                        t,
                        n,
                        r,
                        i,
                        a,
                        o,
                        s,
                      ) => {
                        ((t = e2(t)),
                          (a = tx(i, a)),
                          tf([], [e], (e) => {
                            e = e[0];
                            var i = `${e.name}.${t}`,
                              u = {
                                get() {
                                  tF(
                                    `Cannot access ${i} due to unbound types`,
                                    [n],
                                  );
                                },
                                enumerable: !0,
                                configurable: !0,
                              };
                            return (
                              (u.set = s
                                ? () => {
                                    tF(
                                      `Cannot access ${i} due to unbound types`,
                                      [n],
                                    );
                                  }
                                : () => {
                                    throw new e$(
                                      `${i} is a read-only property`,
                                    );
                                  }),
                              Object.defineProperty(e.i.constructor, t, u),
                              tf([], [n], (n) => {
                                n = n[0];
                                var i = {
                                  get: () => n.fromWireType(a(r)),
                                  enumerable: !0,
                                };
                                return (
                                  s &&
                                    ((s = tx(o, s)),
                                    (i.set = (e) => {
                                      var t = [];
                                      (s(r, n.toWireType(t, e)), ts(t));
                                    })),
                                  Object.defineProperty(e.i.constructor, t, i),
                                  []
                                );
                              }),
                              []
                            );
                          }));
                      },
                      _embind_register_class_constructor: (
                        e,
                        t,
                        n,
                        r,
                        i,
                        a,
                      ) => {
                        var o = tk(t, n);
                        ((i = tx(r, i)),
                          tf([], [e], (e) => {
                            e = e[0];
                            var n = `constructor ${e.name}`;
                            if (
                              (void 0 === e.i.X && (e.i.X = []),
                              void 0 !== e.i.X[t - 1])
                            )
                              throw new e$(
                                `Cannot register multiple constructors with identical number of parameters (${t - 1}) for class '${e.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`,
                              );
                            return (
                              (e.i.X[t - 1] = () => {
                                tF(
                                  `Cannot construct ${e.name} due to unbound types`,
                                  o,
                                );
                              }),
                              tf(
                                [],
                                o,
                                (r) => (
                                  r.splice(1, 0, null),
                                  (e.i.X[t - 1] = tT(n, r, null, i, a)),
                                  []
                                ),
                              ),
                              []
                            );
                          }));
                      },
                      _embind_register_class_function: (
                        e,
                        t,
                        n,
                        r,
                        i,
                        a,
                        o,
                        s,
                      ) => {
                        var u = tk(n, r);
                        ((t = tj((t = e2(t)))),
                          (a = tx(i, a)),
                          tf([], [e], (e) => {
                            function r() {
                              tF(`Cannot call ${i} due to unbound types`, u);
                            }
                            e = e[0];
                            var i = `${e.name}.${t}`;
                            (t.startsWith("@@") && (t = Symbol[t.substring(2)]),
                              s && e.i.lb.push(t));
                            var l = e.i.L,
                              c = l[t];
                            return (
                              void 0 === c ||
                              (void 0 === c.A &&
                                c.className !== e.name &&
                                c.da === n - 2)
                                ? ((r.da = n - 2),
                                  (r.className = e.name),
                                  (l[t] = r))
                                : (tm(l, t, i), (l[t].A[n - 2] = r)),
                              tf(
                                [],
                                u,
                                (r) => (
                                  (r = tT(i, r, e, a, o)),
                                  void 0 === l[t].A
                                    ? ((r.da = n - 2), (l[t] = r))
                                    : (l[t].A[n - 2] = r),
                                  []
                                ),
                              ),
                              []
                            );
                          }));
                      },
                      _embind_register_class_property: (
                        e,
                        t,
                        n,
                        r,
                        i,
                        a,
                        o,
                        s,
                        u,
                        l,
                      ) => {
                        ((t = e2(t)),
                          (i = tx(r, i)),
                          tf([], [e], (e) => {
                            e = e[0];
                            var r = `${e.name}.${t}`,
                              c = {
                                get() {
                                  tF(
                                    `Cannot access ${r} due to unbound types`,
                                    [n, o],
                                  );
                                },
                                enumerable: !0,
                                configurable: !0,
                              };
                            return (
                              (c.set = u
                                ? () =>
                                    tF(
                                      `Cannot access ${r} due to unbound types`,
                                      [n, o],
                                    )
                                : () => {
                                    throw new e$(
                                      r + " is a read-only property",
                                    );
                                  }),
                              Object.defineProperty(e.i.L, t, c),
                              tf([], u ? [n, o] : [n], (n) => {
                                var o = n[0],
                                  c = {
                                    get() {
                                      var t = tR(this, e, r + " getter");
                                      return o.fromWireType(i(a, t));
                                    },
                                    enumerable: !0,
                                  };
                                if (u) {
                                  u = tx(s, u);
                                  var f = n[1];
                                  c.set = function (t) {
                                    var n = tR(this, e, r + " setter"),
                                      i = [];
                                    (u(l, n, f.toWireType(i, t)), ts(i));
                                  };
                                }
                                return (Object.defineProperty(e.i.L, t, c), []);
                              }),
                              []
                            );
                          }));
                      },
                      _embind_register_emval: (e) => th(e, tB),
                      _embind_register_enum: (e, t, n, r) => {
                        function i() {}
                        ((t = e2(t)),
                          (i.values = {}),
                          th(e, {
                            name: t,
                            constructor: i,
                            fromWireType: function (e) {
                              return this.constructor.values[e];
                            },
                            toWireType: (e, t) => t.value,
                            argPackAdvance: 8,
                            readValueFromPointer: ((e, t, n) => {
                              switch (t) {
                                case 1:
                                  return n
                                    ? function (e) {
                                        return this.fromWireType(_[e]);
                                      }
                                    : function (e) {
                                        return this.fromWireType(A[e]);
                                      };
                                case 2:
                                  return n
                                    ? function (e) {
                                        return this.fromWireType(C[e >> 1]);
                                      }
                                    : function (e) {
                                        return this.fromWireType(E[e >> 1]);
                                      };
                                case 4:
                                  return n
                                    ? function (e) {
                                        return this.fromWireType(M[e >> 2]);
                                      }
                                    : function (e) {
                                        return this.fromWireType(I[e >> 2]);
                                      };
                                default:
                                  throw TypeError(
                                    `invalid integer width (${t}): ${e}`,
                                  );
                              }
                            })(t, n, r),
                            K: null,
                          }),
                          tv(t, i));
                      },
                      _embind_register_enum_value: (e, t, n) => {
                        var r = e9(e, "enum");
                        ((t = e2(t)),
                          (e = r.constructor),
                          (r = Object.create(r.constructor.prototype, {
                            value: { value: n },
                            constructor: {
                              value: eJ(`${r.name}_${t}`, function () {}),
                            },
                          })),
                          (e.values[n] = r),
                          (e[t] = r));
                      },
                      _embind_register_float: (e, t, n) => {
                        th(e, {
                          name: (t = e2(t)),
                          fromWireType: (e) => e,
                          toWireType: (e, t) => t,
                          argPackAdvance: 8,
                          readValueFromPointer: ((e, t) => {
                            switch (t) {
                              case 4:
                                return function (e) {
                                  return this.fromWireType(P[e >> 2]);
                                };
                              case 8:
                                return function (e) {
                                  return this.fromWireType(x[e >> 3]);
                                };
                              default:
                                throw TypeError(
                                  `invalid float width (${t}): ${e}`,
                                );
                            }
                          })(t, n),
                          K: null,
                        });
                      },
                      _embind_register_function: (e, t, n, r, i, a) => {
                        var o = tk(t, n);
                        ((e = tj((e = e2(e)))),
                          (i = tx(r, i)),
                          tv(
                            e,
                            function () {
                              tF(`Cannot call ${e} due to unbound types`, o);
                            },
                            t - 1,
                          ),
                          tf(
                            [],
                            o,
                            (n) => (
                              tM(
                                e,
                                tT(
                                  e,
                                  [n[0], null].concat(n.slice(1)),
                                  null,
                                  i,
                                  a,
                                ),
                                t - 1,
                              ),
                              []
                            ),
                          ));
                      },
                      _embind_register_integer: (e, t, n, r, i) => {
                        if (
                          ((t = e2(t)),
                          -1 === i && (i = 0xffffffff),
                          (i = (e) => e),
                          0 === r)
                        ) {
                          var a = 32 - 8 * n;
                          i = (e) => (e << a) >>> a;
                        }
                        var o = t.includes("unsigned")
                          ? function (e, t) {
                              return t >>> 0;
                            }
                          : function (e, t) {
                              return t;
                            };
                        th(e, {
                          name: t,
                          fromWireType: i,
                          toWireType: o,
                          argPackAdvance: 8,
                          readValueFromPointer: ((e, t, n) => {
                            switch (t) {
                              case 1:
                                return n ? (e) => _[e] : (e) => A[e];
                              case 2:
                                return n ? (e) => C[e >> 1] : (e) => E[e >> 1];
                              case 4:
                                return n ? (e) => M[e >> 2] : (e) => I[e >> 2];
                              default:
                                throw TypeError(
                                  `invalid integer width (${t}): ${e}`,
                                );
                            }
                          })(t, n, 0 !== r),
                          K: null,
                        });
                      },
                      _embind_register_memory_view: (e, t, n) => {
                        function r(e) {
                          return new i(_.buffer, I[(e + 4) >> 2], I[e >> 2]);
                        }
                        var i = [
                          Int8Array,
                          Uint8Array,
                          Int16Array,
                          Uint16Array,
                          Int32Array,
                          Uint32Array,
                          Float32Array,
                          Float64Array,
                        ][t];
                        th(
                          e,
                          {
                            name: (n = e2(n)),
                            fromWireType: r,
                            argPackAdvance: 8,
                            readValueFromPointer: r,
                          },
                          { Ob: !0 },
                        );
                      },
                      _embind_register_std_string: (e, t) => {
                        var n = "std::string" === (t = e2(t));
                        th(e, {
                          name: t,
                          fromWireType: function (e) {
                            var t = I[e >> 2],
                              r = e + 4;
                            if (n)
                              for (var i = r, a = 0; a <= t; ++a) {
                                var o = r + a;
                                if (a == t || 0 == A[o]) {
                                  if (
                                    ((i = i ? et(A, i, o - i) : ""),
                                    void 0 === s)
                                  )
                                    var s = i;
                                  else ((s += "\0"), (s += i));
                                  i = o + 1;
                                }
                              }
                            else {
                              for (a = 0, s = Array(t); a < t; ++a)
                                s[a] = String.fromCharCode(A[r + a]);
                              s = s.join("");
                            }
                            return (n$(e), s);
                          },
                          toWireType: function (e, t) {
                            t instanceof ArrayBuffer && (t = new Uint8Array(t));
                            var r = "string" == typeof t;
                            if (
                              !(
                                r ||
                                t instanceof Uint8Array ||
                                t instanceof Uint8ClampedArray ||
                                t instanceof Int8Array
                              )
                            )
                              throw new e$(
                                "Cannot pass non-string to std::string",
                              );
                            var i = n && r ? er(t) : t.length,
                              a = nz(4 + i + 1),
                              o = a + 4;
                            if (((I[a >> 2] = i), n && r)) ei(t, A, o, i + 1);
                            else if (r)
                              for (r = 0; r < i; ++r) {
                                var s = t.charCodeAt(r);
                                if (255 < s)
                                  throw (
                                    n$(o),
                                    new e$(
                                      "String has UTF-16 code units that do not fit in 8 bits",
                                    )
                                  );
                                A[o + r] = s;
                              }
                            else for (r = 0; r < i; ++r) A[o + r] = t[r];
                            return (null !== e && e.push(n$, a), a);
                          },
                          argPackAdvance: 8,
                          readValueFromPointer: tu,
                          K(e) {
                            n$(e);
                          },
                        });
                      },
                      _embind_register_std_wstring: (e, t, n) => {
                        if (((n = e2(n)), 2 === t))
                          var r = tV,
                            i = tU,
                            a = tN,
                            o = (e) => E[e >> 1];
                        else
                          4 === t &&
                            ((r = t$),
                            (i = tz),
                            (a = tG),
                            (o = (e) => I[e >> 2]));
                        th(e, {
                          name: n,
                          fromWireType: (e) => {
                            for (
                              var n, i = I[e >> 2], a = e + 4, s = 0;
                              s <= i;
                              ++s
                            ) {
                              var u = e + 4 + s * t;
                              (s == i || 0 == o(u)) &&
                                ((a = r(a, u - a)),
                                void 0 === n
                                  ? (n = a)
                                  : ((n += "\0"), (n += a)),
                                (a = u + t));
                            }
                            return (n$(e), n);
                          },
                          toWireType: (e, r) => {
                            if ("string" != typeof r)
                              throw new e$(
                                `Cannot pass non-string to C++ string type ${n}`,
                              );
                            var o = a(r),
                              s = nz(4 + o + t);
                            return (
                              (I[s >> 2] = o / t),
                              i(r, s + 4, o + t),
                              null !== e && e.push(n$, s),
                              s
                            );
                          },
                          argPackAdvance: 8,
                          readValueFromPointer: tu,
                          K(e) {
                            n$(e);
                          },
                        });
                      },
                      _embind_register_value_object: (e, t, n, r, i, a) => {
                        to[e] = {
                          name: e2(t),
                          Na: tx(n, r),
                          N: tx(i, a),
                          $a: [],
                        };
                      },
                      _embind_register_value_object_field: (
                        e,
                        t,
                        n,
                        r,
                        i,
                        a,
                        o,
                        s,
                        u,
                        l,
                      ) => {
                        to[e].$a.push({
                          Hb: e2(t),
                          Nb: n,
                          Lb: tx(r, i),
                          Mb: a,
                          Zb: o,
                          Yb: tx(s, u),
                          $b: l,
                        });
                      },
                      _embind_register_void: (e, t) => {
                        th(e, {
                          yc: !0,
                          name: (t = e2(t)),
                          argPackAdvance: 0,
                          fromWireType: () => {},
                          toWireType: () => {},
                        });
                      },
                      _emscripten_get_now_is_monotonic: () => 1,
                      _emscripten_memcpy_js: (e, t, n) =>
                        A.copyWithin(e, t, t + n),
                      _emscripten_throw_longjmp: () => {
                        throw 1 / 0;
                      },
                      _emval_as: (e, t, n) => (
                        (e = eQ(e)),
                        tY((t = e9(t, "emval::as")), n, e)
                      ),
                      _emval_call_method: (e, t, n, r, i) =>
                        (e = tq[e])((t = eQ(t)), t[(n = tX(n))], r, i),
                      _emval_decref: tO,
                      _emval_get_method_caller: (e, t, n) => {
                        var r,
                          i,
                          a = ((e, t) => {
                            for (var n = Array(e), r = 0; r < e; ++r)
                              n[r] = e9(I[(t + 4 * r) >> 2], "parameter " + r);
                            return n;
                          })(e, t),
                          o = a.shift(),
                          s = Array(--e);
                        return (
                          (r = eJ(
                            (t = `methodCaller<(${a.map((e) => e.name).join(", ")}) => ${o.name}>`),
                            (t, r, i, u) => {
                              for (var l = 0, c = 0; c < e; ++c)
                                ((s[c] = a[c].readValueFromPointer(u + l)),
                                  (l += a[c].argPackAdvance));
                              return tY(
                                o,
                                i,
                                (t = 1 === n ? tJ(r, s) : r.apply(t, s)),
                              );
                            },
                          )),
                          (i = tq.length),
                          tq.push(r),
                          i
                        );
                      },
                      _emval_get_property: (e, t) =>
                        e0((e = eQ(e))[(t = eQ(t))]),
                      _emval_incref: (e) => {
                        9 < e && (eZ[e + 1] += 1);
                      },
                      _emval_new_array: () => e0([]),
                      _emval_new_cstring: (e) => e0(tX(e)),
                      _emval_new_object: () => e0({}),
                      _emval_run_destructors: (e) => {
                        (ts(eQ(e)), tO(e));
                      },
                      _emval_set_property: (e, t, n) => {
                        ((e = eQ(e)), (t = eQ(t)), (n = eQ(n)), (e[t] = n));
                      },
                      _emval_take_value: (e, t) =>
                        e0(
                          (e = (e = e9(
                            e,
                            "_emval_take_value",
                          )).readValueFromPointer(t)),
                        ),
                      _gmtime_js: function (e, t, n) {
                        ((e = new Date(
                          1e3 *
                            ((t + 2097152) >>> 0 < 4194305 - !!e
                              ? (e >>> 0) + 0x100000000 * t
                              : NaN),
                        )),
                          (M[n >> 2] = e.getUTCSeconds()),
                          (M[(n + 4) >> 2] = e.getUTCMinutes()),
                          (M[(n + 8) >> 2] = e.getUTCHours()),
                          (M[(n + 12) >> 2] = e.getUTCDate()),
                          (M[(n + 16) >> 2] = e.getUTCMonth()),
                          (M[(n + 20) >> 2] = e.getUTCFullYear() - 1900),
                          (M[(n + 24) >> 2] = e.getUTCDay()),
                          (M[(n + 28) >> 2] =
                            ((e.getTime() -
                              Date.UTC(e.getUTCFullYear(), 0, 1, 0, 0, 0, 0)) /
                              864e5) |
                            0));
                      },
                      _localtime_js: function (e, t, n) {
                        ((e = new Date(
                          1e3 *
                            ((t + 2097152) >>> 0 < 4194305 - !!e
                              ? (e >>> 0) + 0x100000000 * t
                              : NaN),
                        )),
                          (M[n >> 2] = e.getSeconds()),
                          (M[(n + 4) >> 2] = e.getMinutes()),
                          (M[(n + 8) >> 2] = e.getHours()),
                          (M[(n + 12) >> 2] = e.getDate()),
                          (M[(n + 16) >> 2] = e.getMonth()),
                          (M[(n + 20) >> 2] = e.getFullYear() - 1900),
                          (M[(n + 24) >> 2] = e.getDay()),
                          (M[(n + 28) >> 2] =
                            ((tK(e.getFullYear()) ? tZ : tQ)[e.getMonth()] +
                              e.getDate() -
                              1) |
                            0),
                          (M[(n + 36) >> 2] = -(60 * e.getTimezoneOffset())),
                          (t = new Date(
                            e.getFullYear(),
                            6,
                            1,
                          ).getTimezoneOffset()));
                        var r = new Date(
                          e.getFullYear(),
                          0,
                          1,
                        ).getTimezoneOffset();
                        M[(n + 32) >> 2] =
                          0 |
                          (t != r && e.getTimezoneOffset() == Math.min(r, t));
                      },
                      _tzset_js: (e, t, n, r) => {
                        var i = new Date().getFullYear(),
                          a = new Date(i, 0, 1),
                          o = new Date(i, 6, 1);
                        i = a.getTimezoneOffset();
                        var s = o.getTimezoneOffset();
                        ((I[e >> 2] = 60 * Math.max(i, s)),
                          (M[t >> 2] = Number(i != s)),
                          (a = (e = (e) =>
                            e
                              .toLocaleTimeString(void 0, {
                                hour12: !1,
                                timeZoneName: "short",
                              })
                              .split(" ")[1])(a)),
                          (o = e(o)),
                          s < i
                            ? (ei(a, A, n, 17), ei(o, A, r, 17))
                            : (ei(a, A, r, 17), ei(o, A, n, 17)));
                      },
                      emscripten_asm_const_int: (e, t, n) => {
                        t0.length = 0;
                        for (var r; (r = A[t++]); ) {
                          var i = 105 != r;
                          ((i &= 112 != r),
                            (n += i && n % 8 ? 4 : 0),
                            t0.push(
                              112 == r
                                ? I[n >> 2]
                                : 105 == r
                                  ? M[n >> 2]
                                  : x[n >> 3],
                            ),
                            (n += i ? 8 : 4));
                        }
                        return G[e](...t0);
                      },
                      emscripten_date_now: () => Date.now(),
                      emscripten_get_now: () => performance.now(),
                      emscripten_glActiveTexture: (e) => nB.activeTexture(e),
                      emscripten_glAttachShader: (e, t) => {
                        nB.attachShader(t3[e], t7[t]);
                      },
                      emscripten_glBindAttribLocation: (e, t, n) => {
                        nB.bindAttribLocation(t3[e], t, n ? et(A, n) : "");
                      },
                      emscripten_glBindBuffer: (e, t) => {
                        (35051 == e ? (nB.Ia = t) : 35052 == e && (nB.ea = t),
                          nB.bindBuffer(e, t4[t]));
                      },
                      emscripten_glBindFramebuffer: nf,
                      emscripten_glBindRenderbuffer: (e, t) => {
                        nB.bindRenderbuffer(e, t5[t]);
                      },
                      emscripten_glBindSampler: (e, t) => {
                        nB.bindSampler(e, nt[t]);
                      },
                      emscripten_glBindTexture: (e, t) => {
                        nB.bindTexture(e, t8[t]);
                      },
                      emscripten_glBindVertexArray: nh,
                      emscripten_glBindVertexArrayOES: nh,
                      emscripten_glBlendColor: (e, t, n, r) =>
                        nB.blendColor(e, t, n, r),
                      emscripten_glBlendEquation: (e) => nB.blendEquation(e),
                      emscripten_glBlendFunc: (e, t) => nB.blendFunc(e, t),
                      emscripten_glBlitFramebuffer: (
                        e,
                        t,
                        n,
                        r,
                        i,
                        a,
                        o,
                        s,
                        u,
                        l,
                      ) => nB.blitFramebuffer(e, t, n, r, i, a, o, s, u, l),
                      emscripten_glBufferData: (e, t, n, r) => {
                        2 <= tL.version
                          ? n && t
                            ? nB.bufferData(e, A, r, n, t)
                            : nB.bufferData(e, t, r)
                          : nB.bufferData(e, n ? A.subarray(n, n + t) : t, r);
                      },
                      emscripten_glBufferSubData: (e, t, n, r) => {
                        2 <= tL.version
                          ? n && nB.bufferSubData(e, t, A, r, n)
                          : nB.bufferSubData(e, t, A.subarray(r, r + n));
                      },
                      emscripten_glCheckFramebufferStatus: (e) =>
                        nB.checkFramebufferStatus(e),
                      emscripten_glClear: (e) => nB.clear(e),
                      emscripten_glClearColor: (e, t, n, r) =>
                        nB.clearColor(e, t, n, r),
                      emscripten_glClearStencil: (e) => nB.clearStencil(e),
                      emscripten_glClientWaitSync: (e, t, n, r) =>
                        nB.clientWaitSync(
                          nn[e],
                          t,
                          (n >>> 0) + 0x100000000 * r,
                        ),
                      emscripten_glColorMask: (e, t, n, r) => {
                        nB.colorMask(!!e, !!t, !!n, !!r);
                      },
                      emscripten_glCompileShader: (e) => {
                        nB.compileShader(t7[e]);
                      },
                      emscripten_glCompressedTexImage2D: (
                        e,
                        t,
                        n,
                        r,
                        i,
                        a,
                        o,
                        s,
                      ) => {
                        2 <= tL.version
                          ? nB.ea || !o
                            ? nB.compressedTexImage2D(e, t, n, r, i, a, o, s)
                            : nB.compressedTexImage2D(e, t, n, r, i, a, A, s, o)
                          : nB.compressedTexImage2D(
                              e,
                              t,
                              n,
                              r,
                              i,
                              a,
                              s ? A.subarray(s, s + o) : null,
                            );
                      },
                      emscripten_glCompressedTexSubImage2D: (
                        e,
                        t,
                        n,
                        r,
                        i,
                        a,
                        o,
                        s,
                        u,
                      ) => {
                        2 <= tL.version
                          ? nB.ea || !s
                            ? nB.compressedTexSubImage2D(
                                e,
                                t,
                                n,
                                r,
                                i,
                                a,
                                o,
                                s,
                                u,
                              )
                            : nB.compressedTexSubImage2D(
                                e,
                                t,
                                n,
                                r,
                                i,
                                a,
                                o,
                                A,
                                u,
                                s,
                              )
                          : nB.compressedTexSubImage2D(
                              e,
                              t,
                              n,
                              r,
                              i,
                              a,
                              o,
                              u ? A.subarray(u, u + s) : null,
                            );
                      },
                      emscripten_glCopyTexSubImage2D: (
                        e,
                        t,
                        n,
                        r,
                        i,
                        a,
                        o,
                        s,
                      ) => nB.copyTexSubImage2D(e, t, n, r, i, a, o, s),
                      emscripten_glCreateProgram: () => {
                        var e = ns(t3),
                          t = nB.createProgram();
                        return (
                          (t.name = e),
                          (t.xa = t.va = t.wa = 0),
                          (t.Qa = 1),
                          (t3[e] = t),
                          e
                        );
                      },
                      emscripten_glCreateShader: (e) => {
                        var t = ns(t7);
                        return ((t7[t] = nB.createShader(e)), t);
                      },
                      emscripten_glCullFace: (e) => nB.cullFace(e),
                      emscripten_glDeleteBuffers: (e, t) => {
                        for (var n = 0; n < e; n++) {
                          var r = M[(t + 4 * n) >> 2],
                            i = t4[r];
                          i &&
                            (nB.deleteBuffer(i),
                            (i.name = 0),
                            (t4[r] = null),
                            r == nB.Ia && (nB.Ia = 0),
                            r == nB.ea && (nB.ea = 0));
                        }
                      },
                      emscripten_glDeleteFramebuffers: (e, t) => {
                        for (var n = 0; n < e; ++n) {
                          var r = M[(t + 4 * n) >> 2],
                            i = t6[r];
                          i &&
                            (nB.deleteFramebuffer(i),
                            (i.name = 0),
                            (t6[r] = null));
                        }
                      },
                      emscripten_glDeleteProgram: (e) => {
                        if (e) {
                          var t = t3[e];
                          t
                            ? (nB.deleteProgram(t),
                              (t.name = 0),
                              (t3[e] = null))
                            : (tS ||= 1281);
                        }
                      },
                      emscripten_glDeleteRenderbuffers: (e, t) => {
                        for (var n = 0; n < e; n++) {
                          var r = M[(t + 4 * n) >> 2],
                            i = t5[r];
                          i &&
                            (nB.deleteRenderbuffer(i),
                            (i.name = 0),
                            (t5[r] = null));
                        }
                      },
                      emscripten_glDeleteSamplers: (e, t) => {
                        for (var n = 0; n < e; n++) {
                          var r = M[(t + 4 * n) >> 2],
                            i = nt[r];
                          i &&
                            (nB.deleteSampler(i), (i.name = 0), (nt[r] = null));
                        }
                      },
                      emscripten_glDeleteShader: (e) => {
                        if (e) {
                          var t = t7[e];
                          t
                            ? (nB.deleteShader(t), (t7[e] = null))
                            : (tS ||= 1281);
                        }
                      },
                      emscripten_glDeleteSync: (e) => {
                        if (e) {
                          var t = nn[e];
                          t
                            ? (nB.deleteSync(t), (t.name = 0), (nn[e] = null))
                            : (tS ||= 1281);
                        }
                      },
                      emscripten_glDeleteTextures: (e, t) => {
                        for (var n = 0; n < e; n++) {
                          var r = M[(t + 4 * n) >> 2],
                            i = t8[r];
                          i &&
                            (nB.deleteTexture(i), (i.name = 0), (t8[r] = null));
                        }
                      },
                      emscripten_glDeleteVertexArrays: nd,
                      emscripten_glDeleteVertexArraysOES: nd,
                      emscripten_glDepthMask: (e) => {
                        nB.depthMask(!!e);
                      },
                      emscripten_glDisable: (e) => nB.disable(e),
                      emscripten_glDisableVertexAttribArray: (e) => {
                        nB.disableVertexAttribArray(e);
                      },
                      emscripten_glDrawArrays: (e, t, n) => {
                        nB.drawArrays(e, t, n);
                      },
                      emscripten_glDrawArraysInstanced: (e, t, n, r) => {
                        nB.drawArraysInstanced(e, t, n, r);
                      },
                      emscripten_glDrawArraysInstancedBaseInstanceWEBGL: (
                        e,
                        t,
                        n,
                        r,
                        i,
                      ) => {
                        nB.Ya.drawArraysInstancedBaseInstanceWEBGL(
                          e,
                          t,
                          n,
                          r,
                          i,
                        );
                      },
                      emscripten_glDrawBuffers: (e, t) => {
                        for (var n = np[e], r = 0; r < e; r++)
                          n[r] = M[(t + 4 * r) >> 2];
                        nB.drawBuffers(n);
                      },
                      emscripten_glDrawElements: (e, t, n, r) => {
                        nB.drawElements(e, t, n, r);
                      },
                      emscripten_glDrawElementsInstanced: (e, t, n, r, i) => {
                        nB.drawElementsInstanced(e, t, n, r, i);
                      },
                      emscripten_glDrawElementsInstancedBaseVertexBaseInstanceWEBGL:
                        (e, t, n, r, i, a, o) => {
                          nB.Ya.drawElementsInstancedBaseVertexBaseInstanceWEBGL(
                            e,
                            t,
                            n,
                            r,
                            i,
                            a,
                            o,
                          );
                        },
                      emscripten_glDrawRangeElements: (e, t, n, r, i, a) => {
                        nB.drawElements(e, r, i, a);
                      },
                      emscripten_glEnable: (e) => nB.enable(e),
                      emscripten_glEnableVertexAttribArray: (e) => {
                        nB.enableVertexAttribArray(e);
                      },
                      emscripten_glFenceSync: (e, t) =>
                        (e = nB.fenceSync(e, t))
                          ? ((t = ns(nn)), (e.name = t), (nn[t] = e), t)
                          : 0,
                      emscripten_glFinish: () => nB.finish(),
                      emscripten_glFlush: () => nB.flush(),
                      emscripten_glFramebufferRenderbuffer: (e, t, n, r) => {
                        nB.framebufferRenderbuffer(e, t, n, t5[r]);
                      },
                      emscripten_glFramebufferTexture2D: (e, t, n, r, i) => {
                        nB.framebufferTexture2D(e, t, n, t8[r], i);
                      },
                      emscripten_glFrontFace: (e) => nB.frontFace(e),
                      emscripten_glGenBuffers: (e, t) => {
                        nu(e, t, "createBuffer", t4);
                      },
                      emscripten_glGenFramebuffers: (e, t) => {
                        nu(e, t, "createFramebuffer", t6);
                      },
                      emscripten_glGenRenderbuffers: (e, t) => {
                        nu(e, t, "createRenderbuffer", t5);
                      },
                      emscripten_glGenSamplers: (e, t) => {
                        nu(e, t, "createSampler", nt);
                      },
                      emscripten_glGenTextures: (e, t) => {
                        nu(e, t, "createTexture", t8);
                      },
                      emscripten_glGenVertexArrays: nm,
                      emscripten_glGenVertexArraysOES: nm,
                      emscripten_glGenerateMipmap: (e) => nB.generateMipmap(e),
                      emscripten_glGetBufferParameteriv: (e, t, n) => {
                        n
                          ? (M[n >> 2] = nB.getBufferParameter(e, t))
                          : (tS ||= 1281);
                      },
                      emscripten_glGetError: () => {
                        var e = nB.getError() || tS;
                        return ((tS = 0), e);
                      },
                      emscripten_glGetFramebufferAttachmentParameteriv: (
                        e,
                        t,
                        n,
                        r,
                      ) => {
                        (((e = nB.getFramebufferAttachmentParameter(
                          e,
                          t,
                          n,
                        )) instanceof WebGLRenderbuffer ||
                          e instanceof WebGLTexture) &&
                          (e = 0 | e.name),
                          (M[r >> 2] = e));
                      },
                      emscripten_glGetIntegerv: nb,
                      emscripten_glGetProgramInfoLog: (e, t, n, r) => {
                        (null === (e = nB.getProgramInfoLog(t3[e])) &&
                          (e = "(unknown error)"),
                          (t = 0 < t && r ? ei(e, A, r, t) : 0),
                          n && (M[n >> 2] = t));
                      },
                      emscripten_glGetProgramiv: (e, t, n) => {
                        if (n)
                          if (e >= t2) tS ||= 1281;
                          else if (((e = t3[e]), 35716 == t))
                            (null === (e = nB.getProgramInfoLog(e)) &&
                              (e = "(unknown error)"),
                              (M[n >> 2] = e.length + 1));
                          else if (35719 == t) {
                            if (!e.xa)
                              for (
                                t = 0;
                                t < nB.getProgramParameter(e, 35718);
                                ++t
                              )
                                e.xa = Math.max(
                                  e.xa,
                                  nB.getActiveUniform(e, t).name.length + 1,
                                );
                            M[n >> 2] = e.xa;
                          } else if (35722 == t) {
                            if (!e.va)
                              for (
                                t = 0;
                                t < nB.getProgramParameter(e, 35721);
                                ++t
                              )
                                e.va = Math.max(
                                  e.va,
                                  nB.getActiveAttrib(e, t).name.length + 1,
                                );
                            M[n >> 2] = e.va;
                          } else if (35381 == t) {
                            if (!e.wa)
                              for (
                                t = 0;
                                t < nB.getProgramParameter(e, 35382);
                                ++t
                              )
                                e.wa = Math.max(
                                  e.wa,
                                  nB.getActiveUniformBlockName(e, t).length + 1,
                                );
                            M[n >> 2] = e.wa;
                          } else M[n >> 2] = nB.getProgramParameter(e, t);
                        else tS ||= 1281;
                      },
                      emscripten_glGetRenderbufferParameteriv: (e, t, n) => {
                        n
                          ? (M[n >> 2] = nB.getRenderbufferParameter(e, t))
                          : (tS ||= 1281);
                      },
                      emscripten_glGetShaderInfoLog: (e, t, n, r) => {
                        (null === (e = nB.getShaderInfoLog(t7[e])) &&
                          (e = "(unknown error)"),
                          (t = 0 < t && r ? ei(e, A, r, t) : 0),
                          n && (M[n >> 2] = t));
                      },
                      emscripten_glGetShaderPrecisionFormat: (e, t, n, r) => {
                        ((e = nB.getShaderPrecisionFormat(e, t)),
                          (M[n >> 2] = e.rangeMin),
                          (M[(n + 4) >> 2] = e.rangeMax),
                          (M[r >> 2] = e.precision));
                      },
                      emscripten_glGetShaderiv: (e, t, n) => {
                        n
                          ? 35716 == t
                            ? (null === (e = nB.getShaderInfoLog(t7[e])) &&
                                (e = "(unknown error)"),
                              (M[n >> 2] = e ? e.length + 1 : 0))
                            : 35720 == t
                              ? ((e = nB.getShaderSource(t7[e])),
                                (M[n >> 2] = e ? e.length + 1 : 0))
                              : (M[n >> 2] = nB.getShaderParameter(t7[e], t))
                          : (tS ||= 1281);
                      },
                      emscripten_glGetString: (e) => {
                        var t = nr[e];
                        if (!t) {
                          switch (e) {
                            case 7939:
                              t = ny(nv().join(" "));
                              break;
                            case 7936:
                            case 7937:
                            case 37445:
                            case 37446:
                              ((t = nB.getParameter(e)) || (tS ||= 1280),
                                (t = t ? ny(t) : 0));
                              break;
                            case 7938:
                              ((t = nB.getParameter(7938)),
                                (t = ny(
                                  (t =
                                    2 <= tL.version
                                      ? `OpenGL ES 3.0 (${t})`
                                      : `OpenGL ES 2.0 (${t})`),
                                )));
                              break;
                            case 35724:
                              var n = (t = nB.getParameter(35724)).match(
                                /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/,
                              );
                              (null !== n &&
                                (3 == n[1].length && (n[1] += "0"),
                                (t = `OpenGL ES GLSL ES ${n[1]} (${t})`)),
                                (t = ny(t)));
                              break;
                            default:
                              tS ||= 1280;
                          }
                          nr[e] = t;
                        }
                        return t;
                      },
                      emscripten_glGetStringi: (e, t) => {
                        if (2 > tL.version) return ((tS ||= 1282), 0);
                        var n = ni[e];
                        return n
                          ? 0 > t || t >= n.length
                            ? ((tS ||= 1281), 0)
                            : n[t]
                          : 7939 === e
                            ? ((n = nv().map(ny)),
                              (n = ni[e] = n),
                              0 > t || t >= n.length
                                ? ((tS ||= 1281), 0)
                                : n[t])
                            : ((tS ||= 1280), 0);
                      },
                      emscripten_glGetUniformLocation: (e, t) => {
                        if (((t = t ? et(A, t) : ""), (e = t3[e]))) {
                          var n,
                            r = e,
                            i = r.la,
                            a = r.sb;
                          if (!i)
                            for (
                              r.la = i = {}, r.rb = {}, n = 0;
                              n < nB.getProgramParameter(r, 35718);
                              ++n
                            ) {
                              var o = nB.getActiveUniform(r, n),
                                s = o.name;
                              o = o.size;
                              var u = nw(s);
                              u = 0 < u ? s.slice(0, u) : s;
                              var l = r.Qa;
                              for (r.Qa += o, a[u] = [o, l], s = 0; s < o; ++s)
                                ((i[l] = s), (r.rb[l++] = u));
                            }
                          if (
                            ((r = e.la),
                            (i = 0),
                            (a = t),
                            0 < (n = nw(t)) &&
                              ((i = parseInt(t.slice(n + 1)) >>> 0),
                              (a = t.slice(0, n))),
                            (a = e.sb[a]) &&
                              i < a[0] &&
                              (r[(i += a[1])] =
                                r[i] || nB.getUniformLocation(e, t)))
                          )
                            return i;
                        } else tS ||= 1281;
                        return -1;
                      },
                      emscripten_glInvalidateFramebuffer: (e, t, n) => {
                        for (var r = np[t], i = 0; i < t; i++)
                          r[i] = M[(n + 4 * i) >> 2];
                        nB.invalidateFramebuffer(e, r);
                      },
                      emscripten_glInvalidateSubFramebuffer: (
                        e,
                        t,
                        n,
                        r,
                        i,
                        a,
                        o,
                      ) => {
                        for (var s = np[t], u = 0; u < t; u++)
                          s[u] = M[(n + 4 * u) >> 2];
                        nB.invalidateSubFramebuffer(e, s, r, i, a, o);
                      },
                      emscripten_glIsSync: (e) => nB.isSync(nn[e]),
                      emscripten_glIsTexture: (e) =>
                        (e = t8[e]) ? nB.isTexture(e) : 0,
                      emscripten_glLineWidth: (e) => nB.lineWidth(e),
                      emscripten_glLinkProgram: (e) => {
                        ((e = t3[e]),
                          nB.linkProgram(e),
                          (e.la = 0),
                          (e.sb = {}));
                      },
                      emscripten_glMultiDrawArraysInstancedBaseInstanceWEBGL: (
                        e,
                        t,
                        n,
                        r,
                        i,
                        a,
                      ) => {
                        nB.fb.multiDrawArraysInstancedBaseInstanceWEBGL(
                          e,
                          M,
                          t >> 2,
                          M,
                          n >> 2,
                          M,
                          r >> 2,
                          I,
                          i >> 2,
                          a,
                        );
                      },
                      emscripten_glMultiDrawElementsInstancedBaseVertexBaseInstanceWEBGL:
                        (e, t, n, r, i, a, o, s) => {
                          nB.fb.multiDrawElementsInstancedBaseVertexBaseInstanceWEBGL(
                            e,
                            M,
                            t >> 2,
                            n,
                            M,
                            r >> 2,
                            M,
                            i >> 2,
                            M,
                            a >> 2,
                            I,
                            o >> 2,
                            s,
                          );
                        },
                      emscripten_glPixelStorei: (e, t) => {
                        (3317 == e ? (na = t) : 3314 == e && (no = t),
                          nB.pixelStorei(e, t));
                      },
                      emscripten_glReadBuffer: (e) => nB.readBuffer(e),
                      emscripten_glReadPixels: (e, t, n, r, i, a, o) => {
                        if (2 <= tL.version)
                          if (nB.Ia) nB.readPixels(e, t, n, r, i, a, o);
                          else {
                            var s = n_(a);
                            ((o >>>= 31 - Math.clz32(s.BYTES_PER_ELEMENT)),
                              nB.readPixels(e, t, n, r, i, a, s, o));
                          }
                        else
                          (s = nA(a, i, n, r, o))
                            ? nB.readPixels(e, t, n, r, i, a, s)
                            : (tS ||= 1280);
                      },
                      emscripten_glRenderbufferStorage: (e, t, n, r) =>
                        nB.renderbufferStorage(e, t, n, r),
                      emscripten_glRenderbufferStorageMultisample: (
                        e,
                        t,
                        n,
                        r,
                        i,
                      ) => nB.renderbufferStorageMultisample(e, t, n, r, i),
                      emscripten_glSamplerParameteri: (e, t, n) => {
                        nB.samplerParameteri(nt[e], t, n);
                      },
                      emscripten_glSamplerParameteriv: (e, t, n) => {
                        nB.samplerParameteri(nt[e], t, M[n >> 2]);
                      },
                      emscripten_glScissor: (e, t, n, r) =>
                        nB.scissor(e, t, n, r),
                      emscripten_glShaderSource: (e, t, n, r) => {
                        for (var i = "", a = 0; a < t; ++a) {
                          var o = (o = I[(n + 4 * a) >> 2])
                            ? et(A, o, r ? I[(r + 4 * a) >> 2] : void 0)
                            : "";
                          i += o;
                        }
                        nB.shaderSource(t7[e], i);
                      },
                      emscripten_glStencilFunc: (e, t, n) =>
                        nB.stencilFunc(e, t, n),
                      emscripten_glStencilFuncSeparate: (e, t, n, r) =>
                        nB.stencilFuncSeparate(e, t, n, r),
                      emscripten_glStencilMask: (e) => nB.stencilMask(e),
                      emscripten_glStencilMaskSeparate: (e, t) =>
                        nB.stencilMaskSeparate(e, t),
                      emscripten_glStencilOp: (e, t, n) =>
                        nB.stencilOp(e, t, n),
                      emscripten_glStencilOpSeparate: (e, t, n, r) =>
                        nB.stencilOpSeparate(e, t, n, r),
                      emscripten_glTexImage2D: (e, t, n, r, i, a, o, s, u) => {
                        if (2 <= tL.version) {
                          if (nB.ea)
                            return void nB.texImage2D(
                              e,
                              t,
                              n,
                              r,
                              i,
                              a,
                              o,
                              s,
                              u,
                            );
                          if (u) {
                            var l = n_(s);
                            ((u >>>= 31 - Math.clz32(l.BYTES_PER_ELEMENT)),
                              nB.texImage2D(e, t, n, r, i, a, o, s, l, u));
                            return;
                          }
                        }
                        ((l = u ? nA(s, o, r, i, u) : null),
                          nB.texImage2D(e, t, n, r, i, a, o, s, l));
                      },
                      emscripten_glTexParameterf: (e, t, n) =>
                        nB.texParameterf(e, t, n),
                      emscripten_glTexParameterfv: (e, t, n) => {
                        nB.texParameterf(e, t, P[n >> 2]);
                      },
                      emscripten_glTexParameteri: (e, t, n) =>
                        nB.texParameteri(e, t, n),
                      emscripten_glTexParameteriv: (e, t, n) => {
                        nB.texParameteri(e, t, M[n >> 2]);
                      },
                      emscripten_glTexStorage2D: (e, t, n, r, i) =>
                        nB.texStorage2D(e, t, n, r, i),
                      emscripten_glTexSubImage2D: (
                        e,
                        t,
                        n,
                        r,
                        i,
                        a,
                        o,
                        s,
                        u,
                      ) => {
                        if (2 <= tL.version) {
                          if (nB.ea)
                            return void nB.texSubImage2D(
                              e,
                              t,
                              n,
                              r,
                              i,
                              a,
                              o,
                              s,
                              u,
                            );
                          if (u) {
                            var l = n_(s);
                            nB.texSubImage2D(
                              e,
                              t,
                              n,
                              r,
                              i,
                              a,
                              o,
                              s,
                              l,
                              u >>> (31 - Math.clz32(l.BYTES_PER_ELEMENT)),
                            );
                            return;
                          }
                        }
                        ((u = u ? nA(s, o, i, a, u) : null),
                          nB.texSubImage2D(e, t, n, r, i, a, o, s, u));
                      },
                      emscripten_glUniform1f: (e, t) => {
                        nB.uniform1f(nC(e), t);
                      },
                      emscripten_glUniform1fv: (e, t, n) => {
                        if (2 <= tL.version)
                          t && nB.uniform1fv(nC(e), P, n >> 2, t);
                        else {
                          if (288 >= t)
                            for (var r = nE[t], i = 0; i < t; ++i)
                              r[i] = P[(n + 4 * i) >> 2];
                          else r = P.subarray(n >> 2, (n + 4 * t) >> 2);
                          nB.uniform1fv(nC(e), r);
                        }
                      },
                      emscripten_glUniform1i: (e, t) => {
                        nB.uniform1i(nC(e), t);
                      },
                      emscripten_glUniform1iv: (e, t, n) => {
                        if (2 <= tL.version)
                          t && nB.uniform1iv(nC(e), M, n >> 2, t);
                        else {
                          if (288 >= t)
                            for (var r = nM[t], i = 0; i < t; ++i)
                              r[i] = M[(n + 4 * i) >> 2];
                          else r = M.subarray(n >> 2, (n + 4 * t) >> 2);
                          nB.uniform1iv(nC(e), r);
                        }
                      },
                      emscripten_glUniform2f: (e, t, n) => {
                        nB.uniform2f(nC(e), t, n);
                      },
                      emscripten_glUniform2fv: (e, t, n) => {
                        if (2 <= tL.version)
                          t && nB.uniform2fv(nC(e), P, n >> 2, 2 * t);
                        else {
                          if (144 >= t)
                            for (var r = nE[2 * t], i = 0; i < 2 * t; i += 2)
                              ((r[i] = P[(n + 4 * i) >> 2]),
                                (r[i + 1] = P[(n + (4 * i + 4)) >> 2]));
                          else r = P.subarray(n >> 2, (n + 8 * t) >> 2);
                          nB.uniform2fv(nC(e), r);
                        }
                      },
                      emscripten_glUniform2i: (e, t, n) => {
                        nB.uniform2i(nC(e), t, n);
                      },
                      emscripten_glUniform2iv: (e, t, n) => {
                        if (2 <= tL.version)
                          t && nB.uniform2iv(nC(e), M, n >> 2, 2 * t);
                        else {
                          if (144 >= t)
                            for (var r = nM[2 * t], i = 0; i < 2 * t; i += 2)
                              ((r[i] = M[(n + 4 * i) >> 2]),
                                (r[i + 1] = M[(n + (4 * i + 4)) >> 2]));
                          else r = M.subarray(n >> 2, (n + 8 * t) >> 2);
                          nB.uniform2iv(nC(e), r);
                        }
                      },
                      emscripten_glUniform3f: (e, t, n, r) => {
                        nB.uniform3f(nC(e), t, n, r);
                      },
                      emscripten_glUniform3fv: (e, t, n) => {
                        if (2 <= tL.version)
                          t && nB.uniform3fv(nC(e), P, n >> 2, 3 * t);
                        else {
                          if (96 >= t)
                            for (var r = nE[3 * t], i = 0; i < 3 * t; i += 3)
                              ((r[i] = P[(n + 4 * i) >> 2]),
                                (r[i + 1] = P[(n + (4 * i + 4)) >> 2]),
                                (r[i + 2] = P[(n + (4 * i + 8)) >> 2]));
                          else r = P.subarray(n >> 2, (n + 12 * t) >> 2);
                          nB.uniform3fv(nC(e), r);
                        }
                      },
                      emscripten_glUniform3i: (e, t, n, r) => {
                        nB.uniform3i(nC(e), t, n, r);
                      },
                      emscripten_glUniform3iv: (e, t, n) => {
                        if (2 <= tL.version)
                          t && nB.uniform3iv(nC(e), M, n >> 2, 3 * t);
                        else {
                          if (96 >= t)
                            for (var r = nM[3 * t], i = 0; i < 3 * t; i += 3)
                              ((r[i] = M[(n + 4 * i) >> 2]),
                                (r[i + 1] = M[(n + (4 * i + 4)) >> 2]),
                                (r[i + 2] = M[(n + (4 * i + 8)) >> 2]));
                          else r = M.subarray(n >> 2, (n + 12 * t) >> 2);
                          nB.uniform3iv(nC(e), r);
                        }
                      },
                      emscripten_glUniform4f: (e, t, n, r, i) => {
                        nB.uniform4f(nC(e), t, n, r, i);
                      },
                      emscripten_glUniform4fv: (e, t, n) => {
                        if (2 <= tL.version)
                          t && nB.uniform4fv(nC(e), P, n >> 2, 4 * t);
                        else {
                          if (72 >= t) {
                            var r = nE[4 * t],
                              i = P;
                            n >>= 2;
                            for (var a = 0; a < 4 * t; a += 4) {
                              var o = n + a;
                              ((r[a] = i[o]),
                                (r[a + 1] = i[o + 1]),
                                (r[a + 2] = i[o + 2]),
                                (r[a + 3] = i[o + 3]));
                            }
                          } else r = P.subarray(n >> 2, (n + 16 * t) >> 2);
                          nB.uniform4fv(nC(e), r);
                        }
                      },
                      emscripten_glUniform4i: (e, t, n, r, i) => {
                        nB.uniform4i(nC(e), t, n, r, i);
                      },
                      emscripten_glUniform4iv: (e, t, n) => {
                        if (2 <= tL.version)
                          t && nB.uniform4iv(nC(e), M, n >> 2, 4 * t);
                        else {
                          if (72 >= t)
                            for (var r = nM[4 * t], i = 0; i < 4 * t; i += 4)
                              ((r[i] = M[(n + 4 * i) >> 2]),
                                (r[i + 1] = M[(n + (4 * i + 4)) >> 2]),
                                (r[i + 2] = M[(n + (4 * i + 8)) >> 2]),
                                (r[i + 3] = M[(n + (4 * i + 12)) >> 2]));
                          else r = M.subarray(n >> 2, (n + 16 * t) >> 2);
                          nB.uniform4iv(nC(e), r);
                        }
                      },
                      emscripten_glUniformMatrix2fv: (e, t, n, r) => {
                        if (2 <= tL.version)
                          t &&
                            nB.uniformMatrix2fv(nC(e), !!n, P, r >> 2, 4 * t);
                        else {
                          if (72 >= t)
                            for (var i = nE[4 * t], a = 0; a < 4 * t; a += 4)
                              ((i[a] = P[(r + 4 * a) >> 2]),
                                (i[a + 1] = P[(r + (4 * a + 4)) >> 2]),
                                (i[a + 2] = P[(r + (4 * a + 8)) >> 2]),
                                (i[a + 3] = P[(r + (4 * a + 12)) >> 2]));
                          else i = P.subarray(r >> 2, (r + 16 * t) >> 2);
                          nB.uniformMatrix2fv(nC(e), !!n, i);
                        }
                      },
                      emscripten_glUniformMatrix3fv: (e, t, n, r) => {
                        if (2 <= tL.version)
                          t &&
                            nB.uniformMatrix3fv(nC(e), !!n, P, r >> 2, 9 * t);
                        else {
                          if (32 >= t)
                            for (var i = nE[9 * t], a = 0; a < 9 * t; a += 9)
                              ((i[a] = P[(r + 4 * a) >> 2]),
                                (i[a + 1] = P[(r + (4 * a + 4)) >> 2]),
                                (i[a + 2] = P[(r + (4 * a + 8)) >> 2]),
                                (i[a + 3] = P[(r + (4 * a + 12)) >> 2]),
                                (i[a + 4] = P[(r + (4 * a + 16)) >> 2]),
                                (i[a + 5] = P[(r + (4 * a + 20)) >> 2]),
                                (i[a + 6] = P[(r + (4 * a + 24)) >> 2]),
                                (i[a + 7] = P[(r + (4 * a + 28)) >> 2]),
                                (i[a + 8] = P[(r + (4 * a + 32)) >> 2]));
                          else i = P.subarray(r >> 2, (r + 36 * t) >> 2);
                          nB.uniformMatrix3fv(nC(e), !!n, i);
                        }
                      },
                      emscripten_glUniformMatrix4fv: (e, t, n, r) => {
                        if (2 <= tL.version)
                          t &&
                            nB.uniformMatrix4fv(nC(e), !!n, P, r >> 2, 16 * t);
                        else {
                          if (18 >= t) {
                            var i = nE[16 * t],
                              a = P;
                            r >>= 2;
                            for (var o = 0; o < 16 * t; o += 16) {
                              var s = r + o;
                              ((i[o] = a[s]),
                                (i[o + 1] = a[s + 1]),
                                (i[o + 2] = a[s + 2]),
                                (i[o + 3] = a[s + 3]),
                                (i[o + 4] = a[s + 4]),
                                (i[o + 5] = a[s + 5]),
                                (i[o + 6] = a[s + 6]),
                                (i[o + 7] = a[s + 7]),
                                (i[o + 8] = a[s + 8]),
                                (i[o + 9] = a[s + 9]),
                                (i[o + 10] = a[s + 10]),
                                (i[o + 11] = a[s + 11]),
                                (i[o + 12] = a[s + 12]),
                                (i[o + 13] = a[s + 13]),
                                (i[o + 14] = a[s + 14]),
                                (i[o + 15] = a[s + 15]));
                            }
                          } else i = P.subarray(r >> 2, (r + 64 * t) >> 2);
                          nB.uniformMatrix4fv(nC(e), !!n, i);
                        }
                      },
                      emscripten_glUseProgram: (e) => {
                        ((e = t3[e]), nB.useProgram(e), (nB.Db = e));
                      },
                      emscripten_glVertexAttrib1f: (e, t) =>
                        nB.vertexAttrib1f(e, t),
                      emscripten_glVertexAttrib2fv: (e, t) => {
                        nB.vertexAttrib2f(e, P[t >> 2], P[(t + 4) >> 2]);
                      },
                      emscripten_glVertexAttrib3fv: (e, t) => {
                        nB.vertexAttrib3f(
                          e,
                          P[t >> 2],
                          P[(t + 4) >> 2],
                          P[(t + 8) >> 2],
                        );
                      },
                      emscripten_glVertexAttrib4fv: (e, t) => {
                        nB.vertexAttrib4f(
                          e,
                          P[t >> 2],
                          P[(t + 4) >> 2],
                          P[(t + 8) >> 2],
                          P[(t + 12) >> 2],
                        );
                      },
                      emscripten_glVertexAttribDivisor: (e, t) => {
                        nB.vertexAttribDivisor(e, t);
                      },
                      emscripten_glVertexAttribIPointer: (e, t, n, r, i) => {
                        nB.vertexAttribIPointer(e, t, n, r, i);
                      },
                      emscripten_glVertexAttribPointer: (e, t, n, r, i, a) => {
                        nB.vertexAttribPointer(e, t, n, !!r, i, a);
                      },
                      emscripten_glViewport: (e, t, n, r) =>
                        nB.viewport(e, t, n, r),
                      emscripten_glWaitSync: (e, t, n, r) => {
                        nB.waitSync(nn[e], t, (n >>> 0) + 0x100000000 * r);
                      },
                      emscripten_resize_heap: (e) => {
                        var t = A.length;
                        if (0x80000000 < (e >>>= 0)) return !1;
                        for (var n = 1; 4 >= n; n *= 2) {
                          var r = t * (1 + 0.2 / n);
                          r = Math.min(r, e + 0x6000000);
                          var i = Math;
                          r = Math.max(e, r);
                          e: {
                            i =
                              (i.min.call(
                                i,
                                0x80000000,
                                r + ((65536 - (r % 65536)) % 65536),
                              ) -
                                w.buffer.byteLength +
                                65535) /
                              65536;
                            try {
                              (w.grow(i), T());
                              var a = 1;
                              break e;
                            } catch (e) {}
                            a = void 0;
                          }
                          if (a) return !0;
                        }
                        return !1;
                      },
                      emscripten_webgl_get_current_context: () =>
                        tL ? tL.handle : 0,
                      emscripten_webgl_make_context_current: (e) =>
                        nl(e) ? 0 : -5,
                      environ_get: (e, t) => {
                        var n = 0;
                        return (
                          nP().forEach((r, i) => {
                            var a = t + n;
                            for (
                              i = I[(e + 4 * i) >> 2] = a, a = 0;
                              a < r.length;
                              ++a
                            )
                              _[i++] = r.charCodeAt(a);
                            ((_[i] = 0), (n += r.length + 1));
                          }),
                          0
                        );
                      },
                      environ_sizes_get: (e, t) => {
                        var n = nP();
                        I[e >> 2] = n.length;
                        var r = 0;
                        return (
                          n.forEach((e) => (r += e.length + 1)),
                          (I[t >> 2] = r),
                          0
                        );
                      },
                      fd_close: function (e) {
                        try {
                          var t = eF(e);
                          if (null === t.U) throw new eg(8);
                          t.Ka && (t.Ka = null);
                          try {
                            t.m.close && t.m.close(t);
                          } catch (e) {
                            throw e;
                          } finally {
                            ed[t.U] = null;
                          }
                          return ((t.U = null), 0);
                        } catch (e) {
                          if (void 0 === eX || "ErrnoError" !== e.name) throw e;
                          return e.Y;
                        }
                      },
                      fd_read: function (e, t, n, r) {
                        try {
                          e: {
                            var i = eF(e);
                            e = t;
                            for (var a, o = (t = 0); o < n; o++) {
                              var s = I[e >> 2],
                                u = I[(e + 4) >> 2];
                              e += 8;
                              var l = a,
                                c = _;
                              if (0 > u || 0 > l) throw new eg(28);
                              if (null === i.U || 1 == (2097155 & i.flags))
                                throw new eg(8);
                              if (16384 == (61440 & i.node.mode))
                                throw new eg(31);
                              if (!i.m.read) throw new eg(28);
                              var f = void 0 !== l;
                              if (f) {
                                if (!i.seekable) throw new eg(70);
                              } else l = i.position;
                              var h = i.m.read(i, c, s, u, l);
                              if ((f || (i.position += h), 0 > h)) {
                                var d = -1;
                                break e;
                              }
                              if (((t += h), h < u)) break;
                              void 0 !== a && (a += h);
                            }
                            d = t;
                          }
                          return ((I[r >> 2] = d), 0);
                        } catch (e) {
                          if (void 0 === eX || "ErrnoError" !== e.name) throw e;
                          return e.Y;
                        }
                      },
                      fd_seek: function (e, t, n, r, i) {
                        t =
                          (n + 2097152) >>> 0 < 4194305 - !!t
                            ? (t >>> 0) + 0x100000000 * n
                            : NaN;
                        try {
                          if (isNaN(t)) return 61;
                          var a = eF(e);
                          return (
                            eD(a, t, r),
                            (z = [
                              a.position >>> 0,
                              (($ = a.position),
                              1 <= +Math.abs($)
                                ? 0 < $
                                  ? Math.floor($ / 0x100000000) >>> 0
                                  : ~~Math.ceil(
                                      ($ - (~~$ >>> 0)) / 0x100000000,
                                    ) >>> 0
                                : 0),
                            ]),
                            (M[i >> 2] = z[0]),
                            (M[(i + 4) >> 2] = z[1]),
                            a.Ka && 0 === t && 0 === r && (a.Ka = null),
                            0
                          );
                        } catch (e) {
                          if (void 0 === eX || "ErrnoError" !== e.name) throw e;
                          return e.Y;
                        }
                      },
                      fd_write: function (e, t, n, r) {
                        try {
                          e: {
                            var i = eF(e);
                            e = t;
                            for (var a, o = (t = 0); o < n; o++) {
                              var s = I[e >> 2],
                                u = I[(e + 4) >> 2];
                              e += 8;
                              var l = a,
                                c = _;
                              if (0 > u || 0 > l) throw new eg(28);
                              if (null === i.U || 0 == (2097155 & i.flags))
                                throw new eg(8);
                              if (16384 == (61440 & i.node.mode))
                                throw new eg(31);
                              if (!i.m.write) throw new eg(28);
                              i.seekable && 1024 & i.flags && eD(i, 0, 2);
                              var f = void 0 !== l;
                              if (f) {
                                if (!i.seekable) throw new eg(70);
                              } else l = i.position;
                              var h = i.m.write(i, c, s, u, l, void 0);
                              if ((f || (i.position += h), 0 > h)) {
                                var d = -1;
                                break e;
                              }
                              ((t += h), void 0 !== a && (a += h));
                            }
                            d = t;
                          }
                          return ((I[r >> 2] = d), 0);
                        } catch (e) {
                          if (void 0 === eX || "ErrnoError" !== e.name) throw e;
                          return e.Y;
                        }
                      },
                      glBindFramebuffer: nf,
                      glGetIntegerv: nb,
                      invoke_ii: function (e, t) {
                        var n = nZ();
                        try {
                          return tP(e)(t);
                        } catch (e) {
                          if ((nK(n), e !== e + 0)) throw e;
                          nJ(1, 0);
                        }
                      },
                      invoke_iii: function (e, t, n) {
                        var r = nZ();
                        try {
                          return tP(e)(t, n);
                        } catch (e) {
                          if ((nK(r), e !== e + 0)) throw e;
                          nJ(1, 0);
                        }
                      },
                      invoke_iiii: function (e, t, n, r) {
                        var i = nZ();
                        try {
                          return tP(e)(t, n, r);
                        } catch (e) {
                          if ((nK(i), e !== e + 0)) throw e;
                          nJ(1, 0);
                        }
                      },
                      invoke_iiiii: function (e, t, n, r, i) {
                        var a = nZ();
                        try {
                          return tP(e)(t, n, r, i);
                        } catch (e) {
                          if ((nK(a), e !== e + 0)) throw e;
                          nJ(1, 0);
                        }
                      },
                      invoke_iiiiii: function (e, t, n, r, i, a) {
                        var o = nZ();
                        try {
                          return tP(e)(t, n, r, i, a);
                        } catch (e) {
                          if ((nK(o), e !== e + 0)) throw e;
                          nJ(1, 0);
                        }
                      },
                      invoke_iiiiiii: function (e, t, n, r, i, a, o) {
                        var s = nZ();
                        try {
                          return tP(e)(t, n, r, i, a, o);
                        } catch (e) {
                          if ((nK(s), e !== e + 0)) throw e;
                          nJ(1, 0);
                        }
                      },
                      invoke_iiiiiiiiii: function (
                        e,
                        t,
                        n,
                        r,
                        i,
                        a,
                        o,
                        s,
                        u,
                        l,
                      ) {
                        var c = nZ();
                        try {
                          return tP(e)(t, n, r, i, a, o, s, u, l);
                        } catch (e) {
                          if ((nK(c), e !== e + 0)) throw e;
                          nJ(1, 0);
                        }
                      },
                      invoke_v: function (e) {
                        var t = nZ();
                        try {
                          tP(e)();
                        } catch (e) {
                          if ((nK(t), e !== e + 0)) throw e;
                          nJ(1, 0);
                        }
                      },
                      invoke_vi: function (e, t) {
                        var n = nZ();
                        try {
                          tP(e)(t);
                        } catch (e) {
                          if ((nK(n), e !== e + 0)) throw e;
                          nJ(1, 0);
                        }
                      },
                      invoke_vii: function (e, t, n) {
                        var r = nZ();
                        try {
                          tP(e)(t, n);
                        } catch (e) {
                          if ((nK(r), e !== e + 0)) throw e;
                          nJ(1, 0);
                        }
                      },
                      invoke_viii: function (e, t, n, r) {
                        var i = nZ();
                        try {
                          tP(e)(t, n, r);
                        } catch (e) {
                          if ((nK(i), e !== e + 0)) throw e;
                          nJ(1, 0);
                        }
                      },
                      invoke_viiii: function (e, t, n, r, i) {
                        var a = nZ();
                        try {
                          tP(e)(t, n, r, i);
                        } catch (e) {
                          if ((nK(a), e !== e + 0)) throw e;
                          nJ(1, 0);
                        }
                      },
                      invoke_viiiiii: function (e, t, n, r, i, a, o) {
                        var s = nZ();
                        try {
                          tP(e)(t, n, r, i, a, o);
                        } catch (e) {
                          if ((nK(s), e !== e + 0)) throw e;
                          nJ(1, 0);
                        }
                      },
                      invoke_viiiiiii: function (e, t, n, r, i, a, o, s) {
                        var u = nZ();
                        try {
                          tP(e)(t, n, r, i, a, o, s);
                        } catch (e) {
                          if ((nK(u), e !== e + 0)) throw e;
                          nJ(1, 0);
                        }
                      },
                      invoke_viiiiiiii: function (e, t, n, r, i, a, o, s, u) {
                        var l = nZ();
                        try {
                          tP(e)(t, n, r, i, a, o, s, u);
                        } catch (e) {
                          if ((nK(l), e !== e + 0)) throw e;
                          nJ(1, 0);
                        }
                      },
                      isWindowsBrowser: function () {
                        return -1 < navigator.platform.indexOf("Win");
                      },
                      strftime: nT,
                      strftime_l: (e, t, n, r) => nT(e, t, n, r),
                    },
                    nN = (function () {
                      function t(t) {
                        return (
                          (w = (nN = t.exports).memory),
                          T(),
                          (tC = nN.__indirect_function_table),
                          L.unshift(nN.__wasm_call_ctors),
                          j--,
                          e.monitorRunDependencies?.(j),
                          0 == j &&
                            (null !== R && (clearInterval(R), (R = null)),
                            O && ((t = O), (O = null), t())),
                          nN
                        );
                      }
                      var n,
                        r = { env: nU, wasi_snapshot_preview1: nU };
                      if (
                        (j++, e.monitorRunDependencies?.(j), e.instantiateWasm)
                      )
                        try {
                          return e.instantiateWasm(r, t);
                        } catch (e) {
                          (b(
                            `Module.instantiateWasm callback failed with error: ${e}`,
                          ),
                            i(e));
                        }
                      return (
                        (D ||= W("webgl_advanced.wasm")
                          ? "webgl_advanced.wasm"
                          : e.locateFile
                            ? e.locateFile("webgl_advanced.wasm", v)
                            : v + "webgl_advanced.wasm"),
                        ((n = function (e) {
                          t(e.instance);
                        }),
                        y ||
                        "function" != typeof WebAssembly.instantiateStreaming ||
                        W(D) ||
                        V(D) ||
                        "function" != typeof fetch
                          ? N(D, r, n)
                          : fetch(D, { credentials: "same-origin" }).then((e) =>
                              WebAssembly.instantiateStreaming(e, r).then(
                                n,
                                function (e) {
                                  return (
                                    b(`wasm streaming compile failed: ${e}`),
                                    b(
                                      "falling back to ArrayBuffer instantiation",
                                    ),
                                    N(D, r, n)
                                  );
                                },
                              ),
                            )).catch(i),
                        {}
                      );
                    })(),
                    n$ = (e) => (n$ = nN.free)(e),
                    nz = (e) => (nz = nN.malloc)(e),
                    nG = (e) => (nG = nN.__getTypeName)(e),
                    nY = (e._ma_device__on_notification_unlocked = (t) =>
                      (nY = e._ma_device__on_notification_unlocked =
                        nN.ma_device__on_notification_unlocked)(t));
                  ((e._ma_malloc_emscripten = (t, n) =>
                    (e._ma_malloc_emscripten = nN.ma_malloc_emscripten)(t, n)),
                    (e._ma_free_emscripten = (t, n) =>
                      (e._ma_free_emscripten = nN.ma_free_emscripten)(t, n)));
                  var nH = (e._ma_device_process_pcm_frames_capture__webaudio =
                      (t, n, r) =>
                        (nH =
                          e._ma_device_process_pcm_frames_capture__webaudio =
                            nN.ma_device_process_pcm_frames_capture__webaudio)(
                          t,
                          n,
                          r,
                        )),
                    nX = (e._ma_device_process_pcm_frames_playback__webaudio = (
                      t,
                      n,
                      r,
                    ) =>
                      (nX = e._ma_device_process_pcm_frames_playback__webaudio =
                        nN.ma_device_process_pcm_frames_playback__webaudio)(
                        t,
                        n,
                        r,
                      )),
                    nq = (e, t) => (nq = nN.emscripten_builtin_memalign)(e, t),
                    nJ = (e, t) => (nJ = nN.setThrew)(e, t),
                    nK = (e) => (nK = nN._emscripten_stack_restore)(e),
                    nZ = () => (nZ = nN.emscripten_stack_get_current)();
                  function nQ() {
                    function r() {
                      if (!t && ((t = !0), (e.calledRun = !0), !F)) {
                        if (
                          (e.noFSInit ||
                            eV ||
                            ((eV = !0),
                            (e.stdin = e.stdin),
                            (e.stdout = e.stdout),
                            (e.stderr = e.stderr),
                            e.stdin
                              ? eW("stdin", e.stdin)
                              : eO("/dev/tty", "/dev/stdin"),
                            e.stdout
                              ? eW("stdout", null, e.stdout)
                              : eO("/dev/tty", "/dev/stdout"),
                            e.stderr
                              ? eW("stderr", null, e.stderr)
                              : eO("/dev/tty1", "/dev/stderr"),
                            eB("/dev/stdin", 0),
                            eB("/dev/stdout", 1),
                            eB("/dev/stderr", 1)),
                          (ev = !1),
                          Y(L),
                          n(e),
                          e.onRuntimeInitialized && e.onRuntimeInitialized(),
                          e.postRun)
                        )
                          for (
                            "function" == typeof e.postRun &&
                            (e.postRun = [e.postRun]);
                            e.postRun.length;
                          ) {
                            var r = e.postRun.shift();
                            k.unshift(r);
                          }
                        Y(k);
                      }
                    }
                    if (!(0 < j)) {
                      if (e.preRun)
                        for (
                          "function" == typeof e.preRun &&
                          (e.preRun = [e.preRun]);
                          e.preRun.length;
                        )
                          !(function () {
                            var t = e.preRun.shift();
                            S.unshift(t);
                          })();
                      (Y(S),
                        0 < j ||
                          (e.setStatus
                            ? (e.setStatus("Running..."),
                              setTimeout(function () {
                                (setTimeout(function () {
                                  e.setStatus("");
                                }, 1),
                                  r());
                              }, 1))
                            : r()));
                    }
                  }
                  if (
                    ((e.dynCall_iiij = (t, n, r, i, a) =>
                      (e.dynCall_iiij = nN.dynCall_iiij)(t, n, r, i, a)),
                    (e.dynCall_iiiij = (t, n, r, i, a, o) =>
                      (e.dynCall_iiiij = nN.dynCall_iiiij)(t, n, r, i, a, o)),
                    (e.dynCall_viij = (t, n, r, i, a) =>
                      (e.dynCall_viij = nN.dynCall_viij)(t, n, r, i, a)),
                    (e.dynCall_viiij = (t, n, r, i, a, o) =>
                      (e.dynCall_viiij = nN.dynCall_viiij)(t, n, r, i, a, o)),
                    (e.dynCall_iiji = (t, n, r, i, a) =>
                      (e.dynCall_iiji = nN.dynCall_iiji)(t, n, r, i, a)),
                    (e.dynCall_jiji = (t, n, r, i, a) =>
                      (e.dynCall_jiji = nN.dynCall_jiji)(t, n, r, i, a)),
                    (e.dynCall_iiiji = (t, n, r, i, a, o) =>
                      (e.dynCall_iiiji = nN.dynCall_iiiji)(t, n, r, i, a, o)),
                    (e.dynCall_iij = (t, n, r, i) =>
                      (e.dynCall_iij = nN.dynCall_iij)(t, n, r, i)),
                    (e.dynCall_jii = (t, n, r) =>
                      (e.dynCall_jii = nN.dynCall_jii)(t, n, r)),
                    (e.dynCall_viiiiij = (t, n, r, i, a, o, s, u) =>
                      (e.dynCall_viiiiij = nN.dynCall_viiiiij)(
                        t,
                        n,
                        r,
                        i,
                        a,
                        o,
                        s,
                        u,
                      )),
                    (e.dynCall_viji = (t, n, r, i, a) =>
                      (e.dynCall_viji = nN.dynCall_viji)(t, n, r, i, a)),
                    (e.dynCall_ji = (t, n) =>
                      (e.dynCall_ji = nN.dynCall_ji)(t, n)),
                    (e.dynCall_vij = (t, n, r, i) =>
                      (e.dynCall_vij = nN.dynCall_vij)(t, n, r, i)),
                    (e.dynCall_viijii = (t, n, r, i, a, o, s) =>
                      (e.dynCall_viijii = nN.dynCall_viijii)(
                        t,
                        n,
                        r,
                        i,
                        a,
                        o,
                        s,
                      )),
                    (e.dynCall_iiiiij = (t, n, r, i, a, o, s) =>
                      (e.dynCall_iiiiij = nN.dynCall_iiiiij)(
                        t,
                        n,
                        r,
                        i,
                        a,
                        o,
                        s,
                      )),
                    (e.dynCall_iiiiijj = (t, n, r, i, a, o, s, u, l) =>
                      (e.dynCall_iiiiijj = nN.dynCall_iiiiijj)(
                        t,
                        n,
                        r,
                        i,
                        a,
                        o,
                        s,
                        u,
                        l,
                      )),
                    (e.dynCall_iiiiiijj = (t, n, r, i, a, o, s, u, l, c) =>
                      (e.dynCall_iiiiiijj = nN.dynCall_iiiiiijj)(
                        t,
                        n,
                        r,
                        i,
                        a,
                        o,
                        s,
                        u,
                        l,
                        c,
                      )),
                    (O = function e() {
                      (t || nQ(), t || (O = e));
                    }),
                    e.preInit)
                  )
                    for (
                      "function" == typeof e.preInit &&
                      (e.preInit = [e.preInit]);
                      0 < e.preInit.length;
                    )
                      e.preInit.pop()();
                  return (nQ(), a);
                });
            },
            (e) => {
              e.exports = JSON.parse(
                '{"name":"@rive-app/webgl","version":"2.35.4","description":"Rive\'s webgl based web api.","main":"rive.js","homepage":"https://rive.app","repository":{"type":"git","url":"https://github.com/rive-app/rive-wasm/tree/master/js"},"keywords":["rive","animation"],"author":"Rive","contributors":["Luigi Rosso <luigi@rive.app> (https://rive.app)","Maxwell Talbot <max@rive.app> (https://rive.app)","Arthur Vivian <arthur@rive.app> (https://rive.app)","Umberto Sonnino <umberto@rive.app> (https://rive.app)","Matthew Sullivan <matt.j.sullivan@gmail.com> (mailto:matt.j.sullivan@gmail.com)"],"license":"MIT","files":["rive.js","rive.wasm","rive_fallback.wasm","rive.js.map","rive.d.ts","rive_advanced.mjs.d.ts"],"typings":"rive.d.ts","dependencies":{},"browser":{"fs":false,"path":false}}',
              );
            },
            (e, t, n) => {
              (n.r(t), n.d(t, { Animation: () => r.Animation }));
              var r = n(4);
            },
            (e, t, n) => {
              (n.r(t), n.d(t, { Animation: () => r }));
              var r = (function () {
                function e(e, t, n, r) {
                  ((this.animation = e),
                    (this.artboard = t),
                    (this.playing = r),
                    (this.loopCount = 0),
                    (this.scrubTo = null),
                    (this.instance = new n.LinearAnimationInstance(e, t)));
                }
                return (
                  Object.defineProperty(e.prototype, "name", {
                    get: function () {
                      return this.animation.name;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  Object.defineProperty(e.prototype, "time", {
                    get: function () {
                      return this.instance.time;
                    },
                    set: function (e) {
                      this.instance.time = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  Object.defineProperty(e.prototype, "loopValue", {
                    get: function () {
                      return this.animation.loopValue;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  Object.defineProperty(e.prototype, "needsScrub", {
                    get: function () {
                      return null !== this.scrubTo;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  (e.prototype.advance = function (e) {
                    null === this.scrubTo
                      ? this.instance.advance(e)
                      : ((this.instance.time = 0),
                        this.instance.advance(this.scrubTo),
                        (this.scrubTo = null));
                  }),
                  (e.prototype.apply = function (e) {
                    this.instance.apply(e);
                  }),
                  (e.prototype.cleanup = function () {
                    this.instance.delete();
                  }),
                  e
                );
              })();
            },
            (e, t, n) => {
              (n.r(t),
                n.d(t, {
                  AudioAssetWrapper: () => a.AudioAssetWrapper,
                  AudioWrapper: () => a.AudioWrapper,
                  BLANK_URL: () => i.BLANK_URL,
                  CustomFileAssetLoaderWrapper: () =>
                    a.CustomFileAssetLoaderWrapper,
                  FileAssetWrapper: () => a.FileAssetWrapper,
                  FileFinalizer: () => a.FileFinalizer,
                  FontAssetWrapper: () => a.FontAssetWrapper,
                  FontWrapper: () => a.FontWrapper,
                  ImageAssetWrapper: () => a.ImageAssetWrapper,
                  ImageWrapper: () => a.ImageWrapper,
                  createFinalization: () => a.createFinalization,
                  finalizationRegistry: () => a.finalizationRegistry,
                  registerTouchInteractions: () => r.registerTouchInteractions,
                  sanitizeUrl: () => i.sanitizeUrl,
                }));
              var r = n(6),
                i = n(7),
                a = n(8);
            },
            (e, t, n) => {
              (n.r(t), n.d(t, { registerTouchInteractions: () => a }));
              var r = void 0,
                i = function (e, t, n) {
                  var r,
                    i,
                    a = [];
                  if (
                    ["touchstart", "touchmove"].indexOf(e.type) > -1 &&
                    (null == (r = e.changedTouches) ? void 0 : r.length)
                  ) {
                    t || e.preventDefault();
                    for (
                      var o = 0, s = n ? e.changedTouches.length : 1;
                      o < s;
                    ) {
                      var u = e.changedTouches[o];
                      (a.push({
                        clientX: u.clientX,
                        clientY: u.clientY,
                        identifier: u.identifier,
                      }),
                        o++);
                    }
                  } else if (
                    "touchend" === e.type &&
                    (null == (i = e.changedTouches) ? void 0 : i.length)
                  )
                    for (
                      var o = 0, s = n ? e.changedTouches.length : 1;
                      o < s;
                    ) {
                      var u = e.changedTouches[o];
                      (a.push({
                        clientX: u.clientX,
                        clientY: u.clientY,
                        identifier: u.identifier,
                      }),
                        o++);
                    }
                  else
                    a.push({
                      clientX: e.clientX,
                      clientY: e.clientY,
                      identifier: 0,
                    });
                  return a;
                },
                a = function (e) {
                  var t = e.canvas,
                    n = e.artboard,
                    a = e.stateMachines,
                    o = void 0 === a ? [] : a,
                    s = e.renderer,
                    u = e.rive,
                    l = e.fit,
                    c = e.alignment,
                    f = e.isTouchScrollEnabled,
                    h = void 0 !== f && f,
                    d = e.dispatchPointerExit,
                    p = void 0 === d || d,
                    m = e.enableMultiTouch,
                    v = void 0 !== m && m,
                    g = e.layoutScaleFactor,
                    b = void 0 === g ? 1 : g;
                  if (
                    !t ||
                    !o.length ||
                    !s ||
                    !u ||
                    !n ||
                    "undefined" == typeof window
                  )
                    return null;
                  var y = null,
                    w = !1,
                    _ = function (e) {
                      if (w && e instanceof MouseEvent) {
                        "mouseup" == e.type && (w = !1);
                        return;
                      }
                      ((w = h && "touchend" === e.type && "touchstart" === y),
                        (y = e.type));
                      var t = e.currentTarget.getBoundingClientRect(),
                        r = i(e, h, v),
                        a = u.computeAlignment(
                          l,
                          c,
                          { minX: 0, minY: 0, maxX: t.width, maxY: t.height },
                          n.bounds,
                          b,
                        ),
                        s = new u.Mat2D();
                      switch (
                        (a.invert(s),
                        r.forEach(function (e) {
                          var n = e.clientX,
                            r = e.clientY;
                          if (n || r) {
                            var i = n - t.left,
                              a = r - t.top,
                              o = new u.Vec2D(i, a),
                              l = u.mapXY(s, o),
                              c = l.x(),
                              f = l.y();
                            ((e.transformedX = c),
                              (e.transformedY = f),
                              l.delete(),
                              o.delete());
                          }
                        }),
                        s.delete(),
                        a.delete(),
                        e.type)
                      ) {
                        case "mouseout":
                          for (
                            var f = function (e) {
                                p
                                  ? r.forEach(function (t) {
                                      e.pointerExit(
                                        t.transformedX,
                                        t.transformedY,
                                        t.identifier,
                                      );
                                    })
                                  : r.forEach(function (t) {
                                      e.pointerMove(
                                        t.transformedX,
                                        t.transformedY,
                                        t.identifier,
                                      );
                                    });
                              },
                              d = 0;
                            d < o.length;
                            d++
                          ) {
                            var m = o[d];
                            f(m);
                          }
                          break;
                        case "touchmove":
                        case "mouseover":
                        case "mousemove":
                          for (
                            var g = function (e) {
                                r.forEach(function (t) {
                                  e.pointerMove(
                                    t.transformedX,
                                    t.transformedY,
                                    t.identifier,
                                  );
                                });
                              },
                              _ = 0;
                            _ < o.length;
                            _++
                          ) {
                            var m = o[_];
                            g(m);
                          }
                          break;
                        case "touchstart":
                        case "mousedown":
                          for (
                            var A = function (e) {
                                r.forEach(function (t) {
                                  e.pointerDown(
                                    t.transformedX,
                                    t.transformedY,
                                    t.identifier,
                                  );
                                });
                              },
                              C = 0;
                            C < o.length;
                            C++
                          ) {
                            var m = o[C];
                            A(m);
                          }
                          break;
                        case "touchend":
                          for (
                            var E = function (e) {
                                r.forEach(function (t) {
                                  (e.pointerUp(
                                    t.transformedX,
                                    t.transformedY,
                                    t.identifier,
                                  ),
                                    e.pointerExit(
                                      t.transformedX,
                                      t.transformedY,
                                      t.identifier,
                                    ));
                                });
                              },
                              M = 0;
                            M < o.length;
                            M++
                          ) {
                            var m = o[M];
                            E(m);
                          }
                          break;
                        case "mouseup":
                          for (
                            var I = function (e) {
                                r.forEach(function (t) {
                                  e.pointerUp(
                                    t.transformedX,
                                    t.transformedY,
                                    t.identifier,
                                  );
                                });
                              },
                              P = 0;
                            P < o.length;
                            P++
                          ) {
                            var m = o[P];
                            I(m);
                          }
                      }
                    }.bind(r);
                  return (
                    t.addEventListener("mouseover", _),
                    t.addEventListener("mouseout", _),
                    t.addEventListener("mousemove", _),
                    t.addEventListener("mousedown", _),
                    t.addEventListener("mouseup", _),
                    t.addEventListener("touchmove", _, { passive: h }),
                    t.addEventListener("touchstart", _, { passive: h }),
                    t.addEventListener("touchend", _),
                    function () {
                      (t.removeEventListener("mouseover", _),
                        t.removeEventListener("mouseout", _),
                        t.removeEventListener("mousemove", _),
                        t.removeEventListener("mousedown", _),
                        t.removeEventListener("mouseup", _),
                        t.removeEventListener("touchmove", _),
                        t.removeEventListener("touchstart", _),
                        t.removeEventListener("touchend", _));
                    }
                  );
                };
            },
            (e, t, n) => {
              (n.r(t), n.d(t, { BLANK_URL: () => l, sanitizeUrl: () => c }));
              var r = /^([^\w]*)(javascript|data|vbscript)/im,
                i = /&#(\w+)(^\w|;)?/g,
                a = /&(newline|tab);/gi,
                o = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,
                s = /^.+(:|&colon;)/gim,
                u = [".", "/"],
                l = "about:blank";
              function c(e) {
                if (!e) return l;
                var t = e
                  .replace(o, "")
                  .replace(i, function (e, t) {
                    return String.fromCharCode(t);
                  })
                  .replace(a, "")
                  .replace(o, "")
                  .trim();
                if (!t) return l;
                if (u.indexOf(t[0]) > -1) return t;
                var n = t.match(s);
                if (!n) return t;
                var c = n[0];
                return r.test(c) ? l : t;
              }
            },
            (e, t, n) => {
              (n.r(t),
                n.d(t, {
                  AudioAssetWrapper: () => p,
                  AudioWrapper: () => l,
                  CustomFileAssetLoaderWrapper: () => f,
                  FileAssetWrapper: () => h,
                  FileFinalizer: () => a,
                  FontAssetWrapper: () => m,
                  FontWrapper: () => c,
                  ImageAssetWrapper: () => d,
                  ImageWrapper: () => u,
                  createFinalization: () => b,
                  finalizationRegistry: () => g,
                }));
              var r,
                i =
                  ((r = function (e, t) {
                    return (r =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                          e.__proto__ = t;
                        }) ||
                      function (e, t) {
                        for (var n in t)
                          Object.prototype.hasOwnProperty.call(t, n) &&
                            (e[n] = t[n]);
                      })(e, t);
                  }),
                  function (e, t) {
                    if ("function" != typeof t && null !== t)
                      throw TypeError(
                        "Class extends value " +
                          String(t) +
                          " is not a constructor or null",
                      );
                    function n() {
                      this.constructor = e;
                    }
                    (r(e, t),
                      (e.prototype =
                        null === t
                          ? Object.create(t)
                          : ((n.prototype = t.prototype), new n())));
                  }),
                a = (function () {
                  function e(e) {
                    ((this.selfUnref = !1), (this._file = e));
                  }
                  return (
                    (e.prototype.unref = function () {
                      this._file && this._file.unref();
                    }),
                    e
                  );
                })(),
                o = (function () {
                  function e(e) {
                    this._finalizableObject = e;
                  }
                  return (
                    (e.prototype.unref = function () {
                      this._finalizableObject.unref();
                    }),
                    e
                  );
                })(),
                s = (function () {
                  function e() {
                    this.selfUnref = !1;
                  }
                  return ((e.prototype.unref = function () {}), e);
                })(),
                u = (function (e) {
                  function t(t) {
                    var n = e.call(this) || this;
                    return ((n._nativeImage = t), n);
                  }
                  return (
                    i(t, e),
                    Object.defineProperty(t.prototype, "nativeImage", {
                      get: function () {
                        return this._nativeImage;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (t.prototype.unref = function () {
                      this.selfUnref && this._nativeImage.unref();
                    }),
                    t
                  );
                })(s),
                l = (function (e) {
                  function t(t) {
                    var n = e.call(this) || this;
                    return ((n._nativeAudio = t), n);
                  }
                  return (
                    i(t, e),
                    Object.defineProperty(t.prototype, "nativeAudio", {
                      get: function () {
                        return this._nativeAudio;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (t.prototype.unref = function () {
                      this.selfUnref && this._nativeAudio.unref();
                    }),
                    t
                  );
                })(s),
                c = (function (e) {
                  function t(t) {
                    var n = e.call(this) || this;
                    return ((n._nativeFont = t), n);
                  }
                  return (
                    i(t, e),
                    Object.defineProperty(t.prototype, "nativeFont", {
                      get: function () {
                        return this._nativeFont;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (t.prototype.unref = function () {
                      this.selfUnref && this._nativeFont.unref();
                    }),
                    t
                  );
                })(s),
                f = (function () {
                  function e(e, t) {
                    ((this._assetLoaderCallback = t),
                      (this.assetLoader = new e.CustomFileAssetLoader({
                        loadContents: this.loadContents.bind(this),
                      })));
                  }
                  return (
                    (e.prototype.loadContents = function (e, t) {
                      var n;
                      return (
                        e.isImage
                          ? (n = new d(e))
                          : e.isAudio
                            ? (n = new p(e))
                            : e.isFont && (n = new m(e)),
                        this._assetLoaderCallback(n, t)
                      );
                    }),
                    e
                  );
                })(),
                h = (function () {
                  function e(e) {
                    this._nativeFileAsset = e;
                  }
                  return (
                    (e.prototype.decode = function (e) {
                      this._nativeFileAsset.decode(e);
                    }),
                    Object.defineProperty(e.prototype, "name", {
                      get: function () {
                        return this._nativeFileAsset.name;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "fileExtension", {
                      get: function () {
                        return this._nativeFileAsset.fileExtension;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "uniqueFilename", {
                      get: function () {
                        return this._nativeFileAsset.uniqueFilename;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "isAudio", {
                      get: function () {
                        return this._nativeFileAsset.isAudio;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "isImage", {
                      get: function () {
                        return this._nativeFileAsset.isImage;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "isFont", {
                      get: function () {
                        return this._nativeFileAsset.isFont;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "cdnUuid", {
                      get: function () {
                        return this._nativeFileAsset.cdnUuid;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "nativeFileAsset", {
                      get: function () {
                        return this._nativeFileAsset;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    e
                  );
                })(),
                d = (function (e) {
                  function t() {
                    return (null !== e && e.apply(this, arguments)) || this;
                  }
                  return (
                    i(t, e),
                    (t.prototype.setRenderImage = function (e) {
                      this._nativeFileAsset.setRenderImage(e.nativeImage);
                    }),
                    t
                  );
                })(h),
                p = (function (e) {
                  function t() {
                    return (null !== e && e.apply(this, arguments)) || this;
                  }
                  return (
                    i(t, e),
                    (t.prototype.setAudioSource = function (e) {
                      this._nativeFileAsset.setAudioSource(e.nativeAudio);
                    }),
                    t
                  );
                })(h),
                m = (function (e) {
                  function t() {
                    return (null !== e && e.apply(this, arguments)) || this;
                  }
                  return (
                    i(t, e),
                    (t.prototype.setFont = function (e) {
                      this._nativeFileAsset.setFont(e.nativeFont);
                    }),
                    t
                  );
                })(h),
                v = (function () {
                  function e(e) {}
                  return (
                    (e.prototype.register = function (e) {
                      e.selfUnref = !0;
                    }),
                    (e.prototype.unregister = function (e) {}),
                    e
                  );
                })(),
                g = new (
                  "undefined" != typeof FinalizationRegistry
                    ? FinalizationRegistry
                    : v
                )(function (e) {
                  null == e || e.unref();
                }),
                b = function (e, t) {
                  var n = new o(t);
                  g.register(e, n);
                };
            },
          ],
          ed = {};
        function ep(e) {
          var t = ed[e];
          if (void 0 !== t) return t.exports;
          var n = (ed[e] = { exports: {} });
          return (eh[e](n, n.exports, ep), n.exports);
        }
        ((ep.d = (e, t) => {
          for (var n in t)
            ep.o(t, n) &&
              !ep.o(e, n) &&
              Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        }),
          (ep.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
          (ep.r = (e) => {
            ("undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(e, "__esModule", { value: !0 }));
          }));
        var em = {};
        return (
          ep.r(em),
          ep.d(em, {
            Alignment: () => t,
            DataEnum: () => H,
            DataType: () => u,
            DrawOptimizationOptions: () => n,
            EventType: () => a,
            Fit: () => e,
            Layout: () => E,
            LoopType: () => o,
            Rive: () => z,
            RiveEventType: () => i,
            RiveFile: () => $,
            RuntimeLoader: () => M,
            StateMachineInput: () => P,
            StateMachineInputType: () => r,
            Testing: () => eu,
            ViewModel: () => Y,
            ViewModelInstance: () => q,
            ViewModelInstanceArtboard: () => ea,
            ViewModelInstanceAssetImage: () => ei,
            ViewModelInstanceBoolean: () => Q,
            ViewModelInstanceColor: () => er,
            ViewModelInstanceEnum: () => et,
            ViewModelInstanceList: () => en,
            ViewModelInstanceNumber: () => Z,
            ViewModelInstanceString: () => K,
            ViewModelInstanceTrigger: () => ee,
            ViewModelInstanceValue: () => J,
            decodeAudio: () => el,
            decodeFont: () => ef,
            decodeImage: () => ec,
          }),
          (c = ep(1)),
          (f = ep(2)),
          (h = ep(3)),
          (d = ep(5)),
          (p = function (e, t) {
            return (p =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              })(e, t);
          }),
          (m = function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null",
              );
            function n() {
              this.constructor = e;
            }
            (p(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((n.prototype = t.prototype), new n())));
          }),
          (v = function () {
            return (v =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }).apply(this, arguments);
          }),
          (g = function (e, t, n, r) {
            return new (n || (n = Promise))(function (i, a) {
              function o(e) {
                try {
                  u(r.next(e));
                } catch (e) {
                  a(e);
                }
              }
              function s(e) {
                try {
                  u(r.throw(e));
                } catch (e) {
                  a(e);
                }
              }
              function u(e) {
                var t;
                e.done
                  ? i(e.value)
                  : ((t = e.value) instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })
                    ).then(o, s);
              }
              u((r = r.apply(e, t || [])).next());
            });
          }),
          (b = function (e, t) {
            var n,
              r,
              i,
              a = {
                label: 0,
                sent: function () {
                  if (1 & i[0]) throw i[1];
                  return i[1];
                },
                trys: [],
                ops: [],
              },
              o = Object.create(
                ("function" == typeof Iterator ? Iterator : Object).prototype,
              );
            return (
              (o.next = s(0)),
              (o.throw = s(1)),
              (o.return = s(2)),
              "function" == typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this;
                }),
              o
            );
            function s(s) {
              return function (u) {
                var l = [s, u];
                if (n) throw TypeError("Generator is already executing.");
                for (; o && ((o = 0), l[0] && (a = 0)), a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (i =
                          2 & l[0]
                            ? r.return
                            : l[0]
                              ? r.throw || ((i = r.return) && i.call(r), 0)
                              : r.next) &&
                        !(i = i.call(r, l[1])).done)
                    )
                      return i;
                    switch (((r = 0), i && (l = [2 & l[0], i.value]), l[0])) {
                      case 0:
                      case 1:
                        i = l;
                        break;
                      case 4:
                        return (a.label++, { value: l[1], done: !1 });
                      case 5:
                        (a.label++, (r = l[1]), (l = [0]));
                        continue;
                      case 7:
                        ((l = a.ops.pop()), a.trys.pop());
                        continue;
                      default:
                        if (
                          !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                          (6 === l[0] || 2 === l[0])
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === l[0] &&
                          (!i || (l[1] > i[0] && l[1] < i[3]))
                        ) {
                          a.label = l[1];
                          break;
                        }
                        if (6 === l[0] && a.label < i[1]) {
                          ((a.label = i[1]), (i = l));
                          break;
                        }
                        if (i && a.label < i[2]) {
                          ((a.label = i[2]), a.ops.push(l));
                          break;
                        }
                        (i[2] && a.ops.pop(), a.trys.pop());
                        continue;
                    }
                    l = t.call(e, a);
                  } catch (e) {
                    ((l = [6, e]), (r = 0));
                  } finally {
                    n = i = 0;
                  }
                if (5 & l[0]) throw l[1];
                return { value: l[0] ? l[1] : void 0, done: !0 };
              };
            }
          }),
          (y = function (e, t, n) {
            if (n || 2 == arguments.length)
              for (var r, i = 0, a = t.length; i < a; i++)
                (!r && i in t) ||
                  (r || (r = Array.prototype.slice.call(t, 0, i)),
                  (r[i] = t[i]));
            return e.concat(r || Array.prototype.slice.call(t));
          }),
          (w = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return ((t.isHandledError = !0), t);
            }
            return (m(t, e), t);
          })(Error)),
          ((_ = e || (e = {})).Cover = "cover"),
          (_.Contain = "contain"),
          (_.Fill = "fill"),
          (_.FitWidth = "fitWidth"),
          (_.FitHeight = "fitHeight"),
          (_.None = "none"),
          (_.ScaleDown = "scaleDown"),
          (_.Layout = "layout"),
          ((A = t || (t = {})).Center = "center"),
          (A.TopLeft = "topLeft"),
          (A.TopCenter = "topCenter"),
          (A.TopRight = "topRight"),
          (A.CenterLeft = "centerLeft"),
          (A.CenterRight = "centerRight"),
          (A.BottomLeft = "bottomLeft"),
          (A.BottomCenter = "bottomCenter"),
          (A.BottomRight = "bottomRight"),
          ((C = n || (n = {})).AlwaysDraw = "alwaysDraw"),
          (C.DrawOnChanged = "drawOnChanged"),
          (E = (function () {
            function n(n) {
              var r, i, a, o, s, u, l;
              ((this.fit =
                null != (r = null == n ? void 0 : n.fit) ? r : e.Contain),
                (this.alignment =
                  null != (i = null == n ? void 0 : n.alignment)
                    ? i
                    : t.Center),
                (this.layoutScaleFactor =
                  null != (a = null == n ? void 0 : n.layoutScaleFactor)
                    ? a
                    : 1),
                (this.minX = null != (o = null == n ? void 0 : n.minX) ? o : 0),
                (this.minY = null != (s = null == n ? void 0 : n.minY) ? s : 0),
                (this.maxX = null != (u = null == n ? void 0 : n.maxX) ? u : 0),
                (this.maxY =
                  null != (l = null == n ? void 0 : n.maxY) ? l : 0));
            }
            return (
              (n.new = function (e) {
                var t = e.fit,
                  r = e.alignment,
                  i = e.minX,
                  a = e.minY,
                  o = e.maxX,
                  s = e.maxY;
                return (
                  console.warn(
                    "This function is deprecated: please use `new Layout({})` instead",
                  ),
                  new n({
                    fit: t,
                    alignment: r,
                    minX: i,
                    minY: a,
                    maxX: o,
                    maxY: s,
                  })
                );
              }),
              (n.prototype.copyWith = function (e) {
                var t = e.fit,
                  r = e.alignment,
                  i = e.layoutScaleFactor,
                  a = e.minX,
                  o = e.minY,
                  s = e.maxX,
                  u = e.maxY;
                return new n({
                  fit: null != t ? t : this.fit,
                  alignment: null != r ? r : this.alignment,
                  layoutScaleFactor: null != i ? i : this.layoutScaleFactor,
                  minX: null != a ? a : this.minX,
                  minY: null != o ? o : this.minY,
                  maxX: null != s ? s : this.maxX,
                  maxY: null != u ? u : this.maxY,
                });
              }),
              (n.prototype.runtimeFit = function (t) {
                var n;
                return this.cachedRuntimeFit
                  ? this.cachedRuntimeFit
                  : ((n =
                      this.fit === e.Cover
                        ? t.Fit.cover
                        : this.fit === e.Contain
                          ? t.Fit.contain
                          : this.fit === e.Fill
                            ? t.Fit.fill
                            : this.fit === e.FitWidth
                              ? t.Fit.fitWidth
                              : this.fit === e.FitHeight
                                ? t.Fit.fitHeight
                                : this.fit === e.ScaleDown
                                  ? t.Fit.scaleDown
                                  : this.fit === e.Layout
                                    ? t.Fit.layout
                                    : t.Fit.none),
                    (this.cachedRuntimeFit = n),
                    n);
              }),
              (n.prototype.runtimeAlignment = function (e) {
                var n;
                return this.cachedRuntimeAlignment
                  ? this.cachedRuntimeAlignment
                  : ((n =
                      this.alignment === t.TopLeft
                        ? e.Alignment.topLeft
                        : this.alignment === t.TopCenter
                          ? e.Alignment.topCenter
                          : this.alignment === t.TopRight
                            ? e.Alignment.topRight
                            : this.alignment === t.CenterLeft
                              ? e.Alignment.centerLeft
                              : this.alignment === t.CenterRight
                                ? e.Alignment.centerRight
                                : this.alignment === t.BottomLeft
                                  ? e.Alignment.bottomLeft
                                  : this.alignment === t.BottomCenter
                                    ? e.Alignment.bottomCenter
                                    : this.alignment === t.BottomRight
                                      ? e.Alignment.bottomRight
                                      : e.Alignment.center),
                    (this.cachedRuntimeAlignment = n),
                    n);
              }),
              n
            );
          })()),
          (M = (function () {
            function e() {}
            return (
              (e.loadRuntime = function () {
                c.default({
                  locateFile: function () {
                    return e.wasmURL;
                  },
                })
                  .then(function (t) {
                    var n;
                    for (e.runtime = t; e.callBackQueue.length > 0; )
                      null == (n = e.callBackQueue.shift()) || n(e.runtime);
                  })
                  .catch(function (t) {
                    var n = {
                      message:
                        (null == t ? void 0 : t.message) || "Unknown error",
                      type: (null == t ? void 0 : t.name) || "Error",
                      wasmError:
                        t instanceof WebAssembly.CompileError ||
                        t instanceof WebAssembly.RuntimeError,
                      originalError: t,
                    };
                    console.debug("Rive WASM load error details:", n);
                    var r = "https://cdn.jsdelivr.net/npm/"
                      .concat(f.name, "@")
                      .concat(f.version, "/rive_fallback.wasm");
                    e.wasmURL.toLowerCase() !== r
                      ? (console.warn(
                          "Failed to load WASM from "
                            .concat(e.wasmURL, " (")
                            .concat(
                              n.message,
                              "), trying jsdelivr as a backup",
                            ),
                        ),
                        e.setWasmUrl(r),
                        e.loadRuntime())
                      : console.error(
                          [
                            "Could not load Rive WASM file from "
                              .concat(e.wasmURL, " or ")
                              .concat(r, "."),
                            "Possible reasons:\n- Network connection is down\n- WebAssembly is not supported in this environment\n- The WASM file is corrupted or incompatible\n\nError details:",
                            "- Type: ".concat(n.type),
                            "- Message: ".concat(n.message),
                            "- WebAssembly-specific error: ".concat(
                              n.wasmError,
                            ),
                            "\nTo resolve, you may need to:\n1. Check your network connection\n2. Set a new WASM source via RuntimeLoader.setWasmUrl()\n3. Call RuntimeLoader.loadRuntime() again",
                          ].join("\n"),
                        );
                  });
              }),
              (e.getInstance = function (t) {
                (e.isLoading || ((e.isLoading = !0), e.loadRuntime()),
                  e.runtime ? t(e.runtime) : e.callBackQueue.push(t));
              }),
              (e.awaitInstance = function () {
                return new Promise(function (t) {
                  return e.getInstance(function (e) {
                    return t(e);
                  });
                });
              }),
              (e.setWasmUrl = function (t) {
                e.wasmURL = t;
              }),
              (e.getWasmUrl = function () {
                return e.wasmURL;
              }),
              (e.isLoading = !1),
              (e.callBackQueue = []),
              (e.wasmURL = "https://unpkg.com/"
                .concat(f.name, "@")
                .concat(f.version, "/rive.wasm")),
              e
            );
          })()),
          ((I = r || (r = {}))[(I.Number = 56)] = "Number"),
          (I[(I.Trigger = 58)] = "Trigger"),
          (I[(I.Boolean = 59)] = "Boolean"),
          (P = (function () {
            function e(e, t) {
              ((this.type = e), (this.runtimeInput = t));
            }
            return (
              Object.defineProperty(e.prototype, "name", {
                get: function () {
                  return this.runtimeInput.name;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "value", {
                get: function () {
                  return this.runtimeInput.value;
                },
                set: function (e) {
                  this.runtimeInput.value = e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.fire = function () {
                this.type === r.Trigger && this.runtimeInput.fire();
              }),
              (e.prototype.delete = function () {
                this.runtimeInput = null;
              }),
              e
            );
          })()),
          ((x = i || (i = {}))[(x.General = 128)] = "General"),
          (x[(x.OpenUrl = 131)] = "OpenUrl"),
          (T = (function (e) {
            function t(t, n) {
              var r = e.call(this, !1) || this;
              return ((r.nativeArtboard = t), (r.file = n), r);
            }
            return (m(t, e), t);
          })(
            (F = function (e) {
              ((this.isBindableArtboard = !1), (this.isBindableArtboard = e));
            }),
          )),
          (S = (function (e) {
            function t(t) {
              var n = e.call(this, !0) || this;
              return ((n.selfUnref = !1), (n.nativeArtboard = t), n);
            }
            return (
              m(t, e),
              Object.defineProperty(t.prototype, "viewModel", {
                set: function (e) {
                  this.nativeViewModel = e.nativeInstance;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.destroy = function () {
                var e;
                this.selfUnref &&
                  (this.nativeArtboard.unref(),
                  null == (e = this.nativeViewModel) || e.unref());
              }),
              t
            );
          })(F)),
          (L = (function () {
            function e(e, t, n, r) {
              ((this.stateMachine = e),
                (this.playing = n),
                (this.artboard = r),
                (this.inputs = []),
                (this.instance = new t.StateMachineInstance(e, r)),
                this.initInputs(t));
            }
            return (
              Object.defineProperty(e.prototype, "name", {
                get: function () {
                  return this.stateMachine.name;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "statesChanged", {
                get: function () {
                  for (
                    var e = [], t = 0;
                    t < this.instance.stateChangedCount();
                    t++
                  )
                    e.push(this.instance.stateChangedNameByIndex(t));
                  return e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.advance = function (e) {
                this.instance.advance(e);
              }),
              (e.prototype.advanceAndApply = function (e) {
                this.instance.advanceAndApply(e);
              }),
              (e.prototype.reportedEventCount = function () {
                return this.instance.reportedEventCount();
              }),
              (e.prototype.reportedEventAt = function (e) {
                return this.instance.reportedEventAt(e);
              }),
              (e.prototype.initInputs = function (e) {
                for (var t = 0; t < this.instance.inputCount(); t++) {
                  var n = this.instance.input(t);
                  this.inputs.push(this.mapRuntimeInput(n, e));
                }
              }),
              (e.prototype.mapRuntimeInput = function (e, t) {
                return e.type === t.SMIInput.bool
                  ? new P(r.Boolean, e.asBool())
                  : e.type === t.SMIInput.number
                    ? new P(r.Number, e.asNumber())
                    : e.type === t.SMIInput.trigger
                      ? new P(r.Trigger, e.asTrigger())
                      : void 0;
              }),
              (e.prototype.cleanup = function () {
                (this.inputs.forEach(function (e) {
                  e.delete();
                }),
                  (this.inputs.length = 0),
                  this.instance.delete());
              }),
              (e.prototype.bindViewModelInstance = function (e) {
                null != e.runtimeInstance &&
                  this.instance.bindViewModelInstance(e.runtimeInstance);
              }),
              e
            );
          })()),
          (k = (function () {
            function e(e, t, n, r, i) {
              (void 0 === r && (r = []),
                void 0 === i && (i = []),
                (this.runtime = e),
                (this.artboard = t),
                (this.eventManager = n),
                (this.animations = r),
                (this.stateMachines = i));
            }
            return (
              (e.prototype.add = function (e, t, n) {
                if ((void 0 === n && (n = !0), 0 === (e = es(e)).length))
                  (this.animations.forEach(function (e) {
                    return (e.playing = t);
                  }),
                    this.stateMachines.forEach(function (e) {
                      return (e.playing = t);
                    }));
                else
                  for (
                    var r = this.animations.map(function (e) {
                        return e.name;
                      }),
                      i = this.stateMachines.map(function (e) {
                        return e.name;
                      }),
                      o = 0;
                    o < e.length;
                    o++
                  ) {
                    var s = r.indexOf(e[o]),
                      u = i.indexOf(e[o]);
                    if (s >= 0 || u >= 0)
                      s >= 0
                        ? (this.animations[s].playing = t)
                        : (this.stateMachines[u].playing = t);
                    else {
                      var l = this.artboard.animationByName(e[o]);
                      if (l) {
                        var c = new h.Animation(
                          l,
                          this.artboard,
                          this.runtime,
                          t,
                        );
                        (c.advance(0), c.apply(1), this.animations.push(c));
                      } else {
                        var f = this.artboard.stateMachineByName(e[o]);
                        if (f) {
                          var d = new L(f, this.runtime, t, this.artboard);
                          this.stateMachines.push(d);
                        }
                      }
                    }
                  }
                return (
                  n &&
                    (t
                      ? this.eventManager.fire({
                          type: a.Play,
                          data: this.playing,
                        })
                      : this.eventManager.fire({
                          type: a.Pause,
                          data: this.paused,
                        })),
                  t ? this.playing : this.paused
                );
              }),
              (e.prototype.initLinearAnimations = function (e, t) {
                for (
                  var n = this.animations.map(function (e) {
                      return e.name;
                    }),
                    r = 0;
                  r < e.length;
                  r++
                ) {
                  var i = n.indexOf(e[r]);
                  if (i >= 0) this.animations[i].playing = t;
                  else {
                    var a = this.artboard.animationByName(e[r]);
                    if (a) {
                      var o = new h.Animation(
                        a,
                        this.artboard,
                        this.runtime,
                        t,
                      );
                      (o.advance(0), o.apply(1), this.animations.push(o));
                    } else
                      console.error(
                        "Animation with name ".concat(e[r], " not found."),
                      );
                  }
                }
              }),
              (e.prototype.initStateMachines = function (e, t) {
                for (
                  var n = this.stateMachines.map(function (e) {
                      return e.name;
                    }),
                    r = 0;
                  r < e.length;
                  r++
                ) {
                  var i = n.indexOf(e[r]);
                  if (i >= 0) this.stateMachines[i].playing = t;
                  else {
                    var a = this.artboard.stateMachineByName(e[r]);
                    if (a) {
                      var o = new L(a, this.runtime, t, this.artboard);
                      this.stateMachines.push(o);
                    } else
                      (console.warn(
                        "State Machine with name ".concat(e[r], " not found."),
                      ),
                        this.initLinearAnimations([e[r]], t));
                  }
                }
              }),
              (e.prototype.play = function (e) {
                return this.add(e, !0);
              }),
              (e.prototype.advanceIfPaused = function () {
                this.stateMachines.forEach(function (e) {
                  e.playing || e.advanceAndApply(0);
                });
              }),
              (e.prototype.pause = function (e) {
                return this.add(e, !1);
              }),
              (e.prototype.scrub = function (e, t) {
                var n = this.animations.filter(function (t) {
                  return e.includes(t.name);
                });
                return (
                  n.forEach(function (e) {
                    return (e.scrubTo = t);
                  }),
                  n.map(function (e) {
                    return e.name;
                  })
                );
              }),
              Object.defineProperty(e.prototype, "playing", {
                get: function () {
                  return this.animations
                    .filter(function (e) {
                      return e.playing;
                    })
                    .map(function (e) {
                      return e.name;
                    })
                    .concat(
                      this.stateMachines
                        .filter(function (e) {
                          return e.playing;
                        })
                        .map(function (e) {
                          return e.name;
                        }),
                    );
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "paused", {
                get: function () {
                  return this.animations
                    .filter(function (e) {
                      return !e.playing;
                    })
                    .map(function (e) {
                      return e.name;
                    })
                    .concat(
                      this.stateMachines
                        .filter(function (e) {
                          return !e.playing;
                        })
                        .map(function (e) {
                          return e.name;
                        }),
                    );
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.stop = function (e) {
                var t = this;
                e = es(e);
                var n = [];
                if (0 === e.length)
                  ((n = this.animations
                    .map(function (e) {
                      return e.name;
                    })
                    .concat(
                      this.stateMachines.map(function (e) {
                        return e.name;
                      }),
                    )),
                    this.animations.forEach(function (e) {
                      return e.cleanup();
                    }),
                    this.stateMachines.forEach(function (e) {
                      return e.cleanup();
                    }),
                    this.animations.splice(0, this.animations.length),
                    this.stateMachines.splice(0, this.stateMachines.length));
                else {
                  var r = this.animations.filter(function (t) {
                    return e.includes(t.name);
                  });
                  r.forEach(function (e) {
                    (e.cleanup(),
                      t.animations.splice(t.animations.indexOf(e), 1));
                  });
                  var i = this.stateMachines.filter(function (t) {
                    return e.includes(t.name);
                  });
                  (i.forEach(function (e) {
                    (e.cleanup(),
                      t.stateMachines.splice(t.stateMachines.indexOf(e), 1));
                  }),
                    (n = r
                      .map(function (e) {
                        return e.name;
                      })
                      .concat(
                        i.map(function (e) {
                          return e.name;
                        }),
                      )));
                }
                return (this.eventManager.fire({ type: a.Stop, data: n }), n);
              }),
              Object.defineProperty(e.prototype, "isPlaying", {
                get: function () {
                  return (
                    this.animations.reduce(function (e, t) {
                      return e || t.playing;
                    }, !1) ||
                    this.stateMachines.reduce(function (e, t) {
                      return e || t.playing;
                    }, !1)
                  );
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "isPaused", {
                get: function () {
                  return (
                    !this.isPlaying &&
                    (this.animations.length > 0 ||
                      this.stateMachines.length > 0)
                  );
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "isStopped", {
                get: function () {
                  return (
                    0 === this.animations.length &&
                    0 === this.stateMachines.length
                  );
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.atLeastOne = function (e, t) {
                var n;
                return (
                  void 0 === t && (t = !0),
                  0 === this.animations.length &&
                    0 === this.stateMachines.length &&
                    (this.artboard.animationCount() > 0
                      ? this.add(
                          [(n = this.artboard.animationByIndex(0).name)],
                          e,
                          t,
                        )
                      : this.artboard.stateMachineCount() > 0 &&
                        this.add(
                          [(n = this.artboard.stateMachineByIndex(0).name)],
                          e,
                          t,
                        )),
                  n
                );
              }),
              (e.prototype.handleLooping = function () {
                for (
                  var e = 0,
                    t = this.animations.filter(function (e) {
                      return e.playing;
                    });
                  e < t.length;
                  e++
                ) {
                  var n = t[e];
                  0 === n.loopValue && n.loopCount
                    ? ((n.loopCount = 0), this.stop(n.name))
                    : 1 === n.loopValue && n.loopCount
                      ? (this.eventManager.fire({
                          type: a.Loop,
                          data: { animation: n.name, type: o.Loop },
                        }),
                        (n.loopCount = 0))
                      : 2 === n.loopValue &&
                        n.loopCount > 1 &&
                        (this.eventManager.fire({
                          type: a.Loop,
                          data: { animation: n.name, type: o.PingPong },
                        }),
                        (n.loopCount = 0));
                }
              }),
              (e.prototype.handleStateChanges = function () {
                for (
                  var e = [],
                    t = 0,
                    n = this.stateMachines.filter(function (e) {
                      return e.playing;
                    });
                  t < n.length;
                  t++
                ) {
                  var r = n[t];
                  e.push.apply(e, r.statesChanged);
                }
                e.length > 0 &&
                  this.eventManager.fire({ type: a.StateChange, data: e });
              }),
              (e.prototype.handleAdvancing = function (e) {
                this.eventManager.fire({ type: a.Advance, data: e });
              }),
              e
            );
          })()),
          ((j = a || (a = {})).Load = "load"),
          (j.LoadError = "loaderror"),
          (j.Play = "play"),
          (j.Pause = "pause"),
          (j.Stop = "stop"),
          (j.Loop = "loop"),
          (j.Draw = "draw"),
          (j.Advance = "advance"),
          (j.StateChange = "statechange"),
          (j.RiveEvent = "riveevent"),
          (j.AudioStatusChange = "audiostatuschange"),
          ((R = o || (o = {})).OneShot = "oneshot"),
          (R.Loop = "loop"),
          (R.PingPong = "pingpong"),
          (O = (function () {
            function e(e) {
              (void 0 === e && (e = []), (this.listeners = e));
            }
            return (
              (e.prototype.getListeners = function (e) {
                return this.listeners.filter(function (t) {
                  return t.type === e;
                });
              }),
              (e.prototype.add = function (e) {
                this.listeners.includes(e) || this.listeners.push(e);
              }),
              (e.prototype.remove = function (e) {
                for (var t = 0; t < this.listeners.length; t++) {
                  var n = this.listeners[t];
                  if (n.type === e.type && n.callback === e.callback) {
                    this.listeners.splice(t, 1);
                    break;
                  }
                }
              }),
              (e.prototype.removeAll = function (e) {
                var t = this;
                e
                  ? this.listeners
                      .filter(function (t) {
                        return t.type === e;
                      })
                      .forEach(function (e) {
                        return t.remove(e);
                      })
                  : this.listeners.splice(0, this.listeners.length);
              }),
              (e.prototype.fire = function (e) {
                this.getListeners(e.type).forEach(function (t) {
                  return t.callback(e);
                });
              }),
              e
            );
          })()),
          (B = (function () {
            function e(e) {
              ((this.eventManager = e), (this.queue = []));
            }
            return (
              (e.prototype.add = function (e) {
                this.queue.push(e);
              }),
              (e.prototype.process = function () {
                for (; this.queue.length > 0; ) {
                  var e = this.queue.shift();
                  ((null == e ? void 0 : e.action) && e.action(),
                    (null == e ? void 0 : e.event) &&
                      this.eventManager.fire(e.event));
                }
              }),
              e
            );
          })()),
          ((D = s || (s = {}))[(D.AVAILABLE = 0)] = "AVAILABLE"),
          (D[(D.UNAVAILABLE = 1)] = "UNAVAILABLE"),
          (W = new ((function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t._started = !1),
                (t._enabled = !1),
                (t._status = s.UNAVAILABLE),
                t
              );
            }
            return (
              m(t, e),
              (t.prototype.delay = function (e) {
                return g(this, void 0, void 0, function () {
                  return b(this, function (t) {
                    return [
                      2,
                      new Promise(function (t) {
                        return setTimeout(t, e);
                      }),
                    ];
                  });
                });
              }),
              (t.prototype.timeout = function () {
                return g(this, void 0, void 0, function () {
                  return b(this, function (e) {
                    return [
                      2,
                      new Promise(function (e, t) {
                        return setTimeout(t, 50);
                      }),
                    ];
                  });
                });
              }),
              (t.prototype.reportToListeners = function () {
                (this.fire({ type: a.AudioStatusChange }), this.removeAll());
              }),
              (t.prototype.enableAudio = function () {
                return g(this, void 0, void 0, function () {
                  return b(this, function (e) {
                    return (
                      this._enabled ||
                        ((this._enabled = !0),
                        (this._status = s.AVAILABLE),
                        this.reportToListeners()),
                      [2]
                    );
                  });
                });
              }),
              (t.prototype.testAudio = function () {
                return g(this, void 0, void 0, function () {
                  return b(this, function (e) {
                    switch (e.label) {
                      case 0:
                        if (
                          this._status !== s.UNAVAILABLE ||
                          null === this._audioContext
                        )
                          return [3, 4];
                        e.label = 1;
                      case 1:
                        return (
                          e.trys.push([1, 3, , 4]),
                          [
                            4,
                            Promise.race([
                              this._audioContext.resume(),
                              this.timeout(),
                            ]),
                          ]
                        );
                      case 2:
                        return (e.sent(), this.enableAudio(), [3, 4]);
                      case 3:
                        return (e.sent(), [3, 4]);
                      case 4:
                        return [2];
                    }
                  });
                });
              }),
              (t.prototype._establishAudio = function () {
                return g(this, void 0, void 0, function () {
                  return b(this, function (e) {
                    switch (e.label) {
                      case 0:
                        if (this._started) return [3, 5];
                        if (
                          ((this._started = !0), "undefined" != typeof window)
                        )
                          return [3, 1];
                        return (this.enableAudio(), [3, 5]);
                      case 1:
                        ((this._audioContext = new AudioContext()),
                          this.listenForUserAction(),
                          (e.label = 2));
                      case 2:
                        if (this._status !== s.UNAVAILABLE) return [3, 5];
                        return [4, this.testAudio()];
                      case 3:
                        return (e.sent(), [4, this.delay(1e3)]);
                      case 4:
                        return (e.sent(), [3, 2]);
                      case 5:
                        return [2];
                    }
                  });
                });
              }),
              (t.prototype.listenForUserAction = function () {
                var e = this;
                document.addEventListener(
                  "pointerdown",
                  function () {
                    return g(e, void 0, void 0, function () {
                      return b(this, function (e) {
                        return (this.enableAudio(), [2]);
                      });
                    });
                  },
                  { once: !0 },
                );
              }),
              (t.prototype.establishAudio = function () {
                return g(this, void 0, void 0, function () {
                  return b(this, function (e) {
                    return (this._establishAudio(), [2]);
                  });
                });
              }),
              Object.defineProperty(t.prototype, "systemVolume", {
                get: function () {
                  return this._status === s.UNAVAILABLE
                    ? (this.testAudio(), 0)
                    : 1;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "status", {
                get: function () {
                  return this._status;
                },
                enumerable: !1,
                configurable: !0,
              }),
              t
            );
          })(O))()),
          (V = (function () {
            function e() {}
            return (
              (e.prototype.observe = function () {}),
              (e.prototype.unobserve = function () {}),
              (e.prototype.disconnect = function () {}),
              e
            );
          })()),
          (U = globalThis.ResizeObserver || V),
          (N = new ((function () {
            function e() {
              var e = this;
              ((this._elementsMap = new Map()),
                (this._onObservedEntry = function (t) {
                  var n = e._elementsMap.get(t.target);
                  null !== n
                    ? n.onResize(
                        0 == t.target.clientWidth || 0 == t.target.clientHeight,
                      )
                    : e._resizeObserver.unobserve(t.target);
                }),
                (this._onObserved = function (t) {
                  t.forEach(e._onObservedEntry);
                }),
                (this._resizeObserver = new U(this._onObserved)));
            }
            return (
              (e.prototype.add = function (e, t) {
                var n = { onResize: t, element: e };
                return (
                  this._elementsMap.set(e, n),
                  this._resizeObserver.observe(e),
                  n
                );
              }),
              (e.prototype.remove = function (e) {
                (this._resizeObserver.unobserve(e.element),
                  this._elementsMap.delete(e.element));
              }),
              e
            );
          })())()),
          ($ = (function () {
            function e(e) {
              ((this.enableRiveAssetCDN = !0),
                (this.referenceCount = 0),
                (this.destroyed = !1),
                (this.selfUnref = !1),
                (this.bindableArtboards = []),
                (this.src = e.src),
                (this.buffer = e.buffer),
                e.assetLoader && (this.assetLoader = e.assetLoader),
                (this.enableRiveAssetCDN =
                  "boolean" != typeof e.enableRiveAssetCDN ||
                  e.enableRiveAssetCDN),
                (this.eventManager = new O()),
                e.onLoad && this.on(a.Load, e.onLoad),
                e.onLoadError && this.on(a.LoadError, e.onLoadError));
            }
            return (
              (e.prototype.releaseFile = function () {
                var e;
                (this.selfUnref && (null == (e = this.file) || e.unref()),
                  (this.file = null));
              }),
              (e.prototype.releaseBindableArtboards = function () {
                this.bindableArtboards.forEach(function (e) {
                  return e.destroy();
                });
              }),
              (e.prototype.initData = function () {
                return g(this, void 0, void 0, function () {
                  var t, n, r, i;
                  return b(this, function (o) {
                    switch (o.label) {
                      case 0:
                        if (!this.src) return [3, 2];
                        return ((t = this), [4, eo(this.src)]);
                      case 1:
                        ((t.buffer = o.sent()), (o.label = 2));
                      case 2:
                        if (this.destroyed) return [2];
                        return (
                          this.assetLoader &&
                            (n = new d.CustomFileAssetLoaderWrapper(
                              this.runtime,
                              this.assetLoader,
                            ).assetLoader),
                          (r = this),
                          [
                            4,
                            this.runtime.load(
                              new Uint8Array(this.buffer),
                              n,
                              this.enableRiveAssetCDN,
                            ),
                          ]
                        );
                      case 3:
                        if (
                          ((r.file = o.sent()),
                          (i = new d.FileFinalizer(this.file)),
                          d.finalizationRegistry.register(this, i),
                          this.destroyed)
                        )
                          return (this.releaseFile(), [2]);
                        return (
                          null !== this.file
                            ? this.eventManager.fire({
                                type: a.Load,
                                data: this,
                              })
                            : this.fireLoadError(e.fileLoadErrorMessage),
                          [2]
                        );
                    }
                  });
                });
              }),
              (e.prototype.init = function () {
                return g(this, void 0, void 0, function () {
                  var t, n;
                  return b(this, function (r) {
                    switch (r.label) {
                      case 0:
                        if (!this.src && !this.buffer)
                          return (
                            this.fireLoadError(e.missingErrorMessage),
                            [2]
                          );
                        r.label = 1;
                      case 1:
                        return (
                          r.trys.push([1, 4, , 5]),
                          (t = this),
                          [4, M.awaitInstance()]
                        );
                      case 2:
                        if (((t.runtime = r.sent()), this.destroyed))
                          return [2];
                        return [4, this.initData()];
                      case 3:
                        return (r.sent(), [3, 5]);
                      case 4:
                        return (
                          (n = r.sent()),
                          this.fireLoadError(
                            n instanceof Error
                              ? n.message
                              : e.fileLoadErrorMessage,
                          ),
                          [3, 5]
                        );
                      case 5:
                        return [2];
                    }
                  });
                });
              }),
              (e.prototype.fireLoadError = function (e) {
                throw (
                  this.eventManager.fire({ type: a.LoadError, data: e }),
                  Error(e)
                );
              }),
              (e.prototype.on = function (e, t) {
                this.eventManager.add({ type: e, callback: t });
              }),
              (e.prototype.off = function (e, t) {
                this.eventManager.remove({ type: e, callback: t });
              }),
              (e.prototype.cleanup = function () {
                ((this.referenceCount -= 1),
                  this.referenceCount <= 0 &&
                    (this.removeAllRiveEventListeners(),
                    this.releaseFile(),
                    this.releaseBindableArtboards(),
                    (this.destroyed = !0)));
              }),
              (e.prototype.removeAllRiveEventListeners = function (e) {
                this.eventManager.removeAll(e);
              }),
              (e.prototype.getInstance = function () {
                if (null !== this.file)
                  return ((this.referenceCount += 1), this.file);
              }),
              (e.prototype.destroyIfUnused = function () {
                this.referenceCount <= 0 && this.cleanup();
              }),
              (e.prototype.createBindableArtboard = function (e) {
                if (null != e) {
                  var t = new S(e);
                  return (
                    (0, d.createFinalization)(t, t.nativeArtboard),
                    this.bindableArtboards.push(t),
                    t
                  );
                }
                return null;
              }),
              (e.prototype.getArtboard = function (e) {
                var t = this.file.artboardByName(e);
                if (null != t) return new T(t, this);
              }),
              (e.prototype.getBindableArtboard = function (e) {
                var t = this.file.bindableArtboardByName(e);
                return this.createBindableArtboard(t);
              }),
              (e.prototype.getDefaultBindableArtboard = function () {
                var e = this.file.bindableArtboardDefault();
                return this.createBindableArtboard(e);
              }),
              (e.prototype.internalBindableArtboardFromArtboard = function (e) {
                var t = this.file.internalBindableArtboardFromArtboard(e);
                return this.createBindableArtboard(t);
              }),
              (e.prototype.viewModelByName = function (e) {
                var t = this.file.viewModelByName(e);
                return null !== t ? new Y(t) : null;
              }),
              (e.missingErrorMessage =
                "Rive source file or data buffer required"),
              (e.fileLoadErrorMessage = "The file failed to load"),
              e
            );
          })()),
          (z = (function () {
            function t(e) {
              var t,
                r,
                i = this;
              ((this.loaded = !1),
                (this.destroyed = !1),
                (this._observed = null),
                (this.readyForPlaying = !1),
                (this.artboard = null),
                (this.eventCleanup = null),
                (this.shouldDisableRiveListeners = !1),
                (this.automaticallyHandleEvents = !1),
                (this.dispatchPointerExit = !0),
                (this.enableMultiTouch = !1),
                (this.enableRiveAssetCDN = !0),
                (this._volume = 1),
                (this._artboardWidth = void 0),
                (this._artboardHeight = void 0),
                (this._devicePixelRatioUsed = 1),
                (this._hasZeroSize = !1),
                (this._needsRedraw = !1),
                (this._currentCanvasWidth = 0),
                (this._currentCanvasHeight = 0),
                (this._audioEventListener = null),
                (this._boundDraw = null),
                (this._viewModelInstance = null),
                (this._dataEnums = null),
                (this.drawOptimization = n.DrawOnChanged),
                (this.durations = []),
                (this.frameTimes = []),
                (this.frameCount = 0),
                (this.isTouchScrollEnabled = !1),
                (this.onCanvasResize = function (e) {
                  var t = i._hasZeroSize !== e;
                  ((i._hasZeroSize = e),
                    e
                      ? (i._layout.maxX && i._layout.maxY) || i.resizeToCanvas()
                      : t && i.resizeDrawingSurfaceToCanvas());
                }),
                (this.renderSecondTimer = 0),
                (this._boundDraw = this.draw.bind(this)),
                (this.canvas = e.canvas),
                e.canvas.constructor === HTMLCanvasElement &&
                  (this._observed = N.add(this.canvas, this.onCanvasResize)),
                (this._currentCanvasWidth = this.canvas.width),
                (this._currentCanvasHeight = this.canvas.height),
                (this.src = e.src),
                (this.buffer = e.buffer),
                (this.riveFile = e.riveFile),
                (this.layout = null != (t = e.layout) ? t : new E()),
                (this.shouldDisableRiveListeners =
                  !!e.shouldDisableRiveListeners),
                (this.isTouchScrollEnabled = !!e.isTouchScrollEnabled),
                (this.automaticallyHandleEvents =
                  !!e.automaticallyHandleEvents),
                (this.dispatchPointerExit =
                  !1 === e.dispatchPointerExit
                    ? e.dispatchPointerExit
                    : this.dispatchPointerExit),
                (this.enableMultiTouch = !!e.enableMultiTouch),
                (this.drawOptimization =
                  null != (r = e.drawingOptions) ? r : this.drawOptimization),
                (this.enableRiveAssetCDN =
                  void 0 === e.enableRiveAssetCDN || e.enableRiveAssetCDN),
                (this.eventManager = new O()),
                e.onLoad && this.on(a.Load, e.onLoad),
                e.onLoadError && this.on(a.LoadError, e.onLoadError),
                e.onPlay && this.on(a.Play, e.onPlay),
                e.onPause && this.on(a.Pause, e.onPause),
                e.onStop && this.on(a.Stop, e.onStop),
                e.onLoop && this.on(a.Loop, e.onLoop),
                e.onStateChange && this.on(a.StateChange, e.onStateChange),
                e.onAdvance && this.on(a.Advance, e.onAdvance),
                e.onload && !e.onLoad && this.on(a.Load, e.onload),
                e.onloaderror &&
                  !e.onLoadError &&
                  this.on(a.LoadError, e.onloaderror),
                e.onplay && !e.onPlay && this.on(a.Play, e.onplay),
                e.onpause && !e.onPause && this.on(a.Pause, e.onpause),
                e.onstop && !e.onStop && this.on(a.Stop, e.onstop),
                e.onloop && !e.onLoop && this.on(a.Loop, e.onloop),
                e.onstatechange &&
                  !e.onStateChange &&
                  this.on(a.StateChange, e.onstatechange),
                e.assetLoader && (this.assetLoader = e.assetLoader),
                (this.taskQueue = new B(this.eventManager)),
                this.init({
                  src: this.src,
                  buffer: this.buffer,
                  riveFile: this.riveFile,
                  autoplay: e.autoplay,
                  autoBind: e.autoBind,
                  animations: e.animations,
                  stateMachines: e.stateMachines,
                  artboard: e.artboard,
                  useOffscreenRenderer: e.useOffscreenRenderer,
                }));
            }
            return (
              Object.defineProperty(t.prototype, "viewModelCount", {
                get: function () {
                  return this.file.viewModelCount();
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.new = function (e) {
                return (
                  console.warn(
                    "This function is deprecated: please use `new Rive({})` instead",
                  ),
                  new t(e)
                );
              }),
              (t.prototype.onSystemAudioChanged = function () {
                this.volume = this._volume;
              }),
              (t.prototype.init = function (e) {
                var n = this,
                  r = e.src,
                  i = e.buffer,
                  a = e.riveFile,
                  o = e.animations,
                  s = e.stateMachines,
                  u = e.artboard,
                  l = e.autoplay,
                  c = void 0 !== l && l,
                  f = e.useOffscreenRenderer,
                  h = void 0 !== f && f,
                  d = e.autoBind,
                  p = void 0 !== d && d;
                if (!this.destroyed) {
                  if (
                    ((this.src = r),
                    (this.buffer = i),
                    (this.riveFile = a),
                    !this.src && !this.buffer && !this.riveFile)
                  )
                    throw new w(t.missingErrorMessage);
                  var m = es(o),
                    v = es(s);
                  ((this.loaded = !1),
                    (this.readyForPlaying = !1),
                    M.awaitInstance()
                      .then(function (e) {
                        n.destroyed ||
                          ((n.runtime = e),
                          n.removeRiveListeners(),
                          n.deleteRiveRenderer(),
                          (n.renderer = n.runtime.makeRenderer(n.canvas, h)),
                          n.canvas.width ||
                            n.canvas.height ||
                            n.resizeDrawingSurfaceToCanvas(),
                          n
                            .initData(u, m, v, c, p)
                            .then(function (e) {
                              if (e) return n.setupRiveListeners();
                            })
                            .catch(function (e) {
                              console.error(e);
                            }));
                      })
                      .catch(function (e) {
                        console.error(e);
                      }));
                }
              }),
              (t.prototype.setupRiveListeners = function (e) {
                var t = this;
                if (
                  (this.eventCleanup && this.eventCleanup(),
                  !this.shouldDisableRiveListeners)
                ) {
                  var n = (this.animator.stateMachines || [])
                      .filter(function (e) {
                        return e.playing && t.runtime.hasListeners(e.instance);
                      })
                      .map(function (e) {
                        return e.instance;
                      }),
                    r = this.isTouchScrollEnabled,
                    i = this.dispatchPointerExit,
                    a = this.enableMultiTouch;
                  (e &&
                    "isTouchScrollEnabled" in e &&
                    (r = e.isTouchScrollEnabled),
                    (this.eventCleanup = (0, d.registerTouchInteractions)({
                      canvas: this.canvas,
                      artboard: this.artboard,
                      stateMachines: n,
                      renderer: this.renderer,
                      rive: this.runtime,
                      fit: this._layout.runtimeFit(this.runtime),
                      alignment: this._layout.runtimeAlignment(this.runtime),
                      isTouchScrollEnabled: r,
                      dispatchPointerExit: i,
                      enableMultiTouch: a,
                      layoutScaleFactor: this._layout.layoutScaleFactor,
                    })));
                }
              }),
              (t.prototype.removeRiveListeners = function () {
                this.eventCleanup &&
                  (this.eventCleanup(), (this.eventCleanup = null));
              }),
              (t.prototype.initializeAudio = function () {
                var e,
                  t = this;
                W.status == s.UNAVAILABLE &&
                  (this.file.hasAudio ||
                    ((null == (e = this.artboard) ? void 0 : e.hasAudio) &&
                      null === this._audioEventListener)) &&
                  ((this._audioEventListener = {
                    type: a.AudioStatusChange,
                    callback: function () {
                      return t.onSystemAudioChanged();
                    },
                  }),
                  W.add(this._audioEventListener),
                  W.establishAudio());
              }),
              (t.prototype.initArtboardSize = function () {
                this.artboard &&
                  ((this._artboardWidth = this.artboard.width =
                    this._artboardWidth || this.artboard.width),
                  (this._artboardHeight = this.artboard.height =
                    this._artboardHeight || this.artboard.height));
              }),
              (t.prototype.initData = function (e, t, n, r, i) {
                return g(this, void 0, void 0, function () {
                  var o, s, u;
                  return b(this, function (l) {
                    switch (l.label) {
                      case 0:
                        if ((l.trys.push([0, 3, , 4]), null != this.riveFile))
                          return [3, 2];
                        return (
                          (o = new $({
                            src: this.src,
                            buffer: this.buffer,
                            enableRiveAssetCDN: this.enableRiveAssetCDN,
                            assetLoader: this.assetLoader,
                          })),
                          (this.riveFile = o),
                          [4, o.init()]
                        );
                      case 1:
                        if ((l.sent(), this.destroyed))
                          return (o.destroyIfUnused(), [2, !1]);
                        l.label = 2;
                      case 2:
                        return (
                          (this.file = this.riveFile.getInstance()),
                          this.initArtboard(e, t, n, r, i),
                          this.initArtboardSize(),
                          this.initializeAudio(),
                          (this.loaded = !0),
                          this.eventManager.fire({
                            type: a.Load,
                            data: null != (u = this.src) ? u : "buffer",
                          }),
                          this.animator.advanceIfPaused(),
                          (this.readyForPlaying = !0),
                          this.taskQueue.process(),
                          this.drawFrame(),
                          [2, !0]
                        );
                      case 3:
                        var c;
                        return (
                          console.warn(
                            (s =
                              (c = l.sent()) && c.isHandledError
                                ? c.message
                                : "Problem loading file; may be corrupt!"),
                          ),
                          this.eventManager.fire({
                            type: a.LoadError,
                            data: s,
                          }),
                          [2, Promise.reject(s)]
                        );
                      case 4:
                        return [2];
                    }
                  });
                });
              }),
              (t.prototype.initArtboard = function (e, t, n, r, i) {
                if (this.file) {
                  var o,
                    s = e
                      ? this.file.artboardByName(e)
                      : this.file.defaultArtboard();
                  if (!s) {
                    var u = "Invalid artboard name or no default artboard";
                    (console.warn(u),
                      this.eventManager.fire({ type: a.LoadError, data: u }));
                    return;
                  }
                  if (
                    ((this.artboard = s),
                    (s.volume = this._volume * W.systemVolume),
                    (this.animator = new k(
                      this.runtime,
                      this.artboard,
                      this.eventManager,
                    )),
                    t.length > 0 || n.length > 0
                      ? ((o = t.concat(n)),
                        this.animator.initLinearAnimations(t, r),
                        this.animator.initStateMachines(n, r))
                      : (o = [this.animator.atLeastOne(r, !1)]),
                    this.taskQueue.add({
                      event: { type: r ? a.Play : a.Pause, data: o },
                    }),
                    i)
                  ) {
                    var l = this.file.defaultArtboardViewModel(s);
                    if (null !== l) {
                      var c = l.defaultInstance();
                      if (null !== c) {
                        var f = new q(c, null);
                        ((0, d.createFinalization)(f, f.runtimeInstance),
                          this.bindViewModelInstance(f));
                      }
                    }
                  }
                }
              }),
              (t.prototype.drawFrame = function () {
                var e, t;
                (
                  null == (e = null == document ? void 0 : document.timeline)
                    ? void 0
                    : e.currentTime
                )
                  ? this.loaded &&
                    this.artboard &&
                    !this.frameRequestId &&
                    (this._boundDraw(document.timeline.currentTime),
                    null == (t = this.runtime) || t.resolveAnimationFrame())
                  : this.scheduleRendering();
              }),
              (t.prototype._canvasSizeChanged = function () {
                var e = !1;
                return (
                  this.canvas &&
                    (this.canvas.width !== this._currentCanvasWidth &&
                      ((this._currentCanvasWidth = this.canvas.width),
                      (e = !0)),
                    this.canvas.height !== this._currentCanvasHeight &&
                      ((this._currentCanvasHeight = this.canvas.height),
                      (e = !0))),
                  e
                );
              }),
              (t.prototype.draw = function (e, t) {
                this.frameRequestId = null;
                var r,
                  o = performance.now();
                (this.lastRenderTime || (this.lastRenderTime = e),
                  (this.renderSecondTimer += e - this.lastRenderTime),
                  this.renderSecondTimer > 5e3 &&
                    ((this.renderSecondTimer = 0), null == t || t()));
                var s = (e - this.lastRenderTime) / 1e3;
                this.lastRenderTime = e;
                for (
                  var u = this.animator.animations
                      .filter(function (e) {
                        return e.playing || e.needsScrub;
                      })
                      .sort(function (e) {
                        return e.needsScrub ? -1 : 1;
                      }),
                    l = 0;
                  l < u.length;
                  l++
                ) {
                  var c = u[l];
                  (c.advance(s),
                    c.instance.didLoop && (c.loopCount += 1),
                    c.apply(1));
                }
                for (
                  var f = this.animator.stateMachines.filter(function (e) {
                      return e.playing;
                    }),
                    h = 0;
                  h < f.length;
                  h++
                ) {
                  var p = f[h],
                    m = p.reportedEventCount();
                  if (m)
                    for (var v = 0; v < m; v++) {
                      var g = p.reportedEventAt(v);
                      if (g)
                        if (g.type === i.OpenUrl) {
                          if (
                            (this.eventManager.fire({
                              type: a.RiveEvent,
                              data: g,
                            }),
                            this.automaticallyHandleEvents)
                          ) {
                            var b = document.createElement("a"),
                              y = g.url,
                              w = g.target,
                              _ = (0, d.sanitizeUrl)(y);
                            (y && b.setAttribute("href", _),
                              w && b.setAttribute("target", w),
                              _ && _ !== d.BLANK_URL && b.click());
                          }
                        } else
                          this.eventManager.fire({
                            type: a.RiveEvent,
                            data: g,
                          });
                    }
                  p.advanceAndApply(s);
                }
                0 == this.animator.stateMachines.length &&
                  this.artboard.advance(s);
                var A = this.renderer;
                (!this._hasZeroSize &&
                  (this.drawOptimization == n.AlwaysDraw ||
                    this.artboard.didChange() ||
                    this._needsRedraw ||
                    this._canvasSizeChanged()) &&
                  (A.clear(),
                  A.save(),
                  this.alignRenderer(),
                  this.artboard.draw(A),
                  A.restore(),
                  A.flush(),
                  (this._needsRedraw = !1)),
                  this.animator.handleLooping(),
                  this.animator.handleStateChanges(),
                  this.animator.handleAdvancing(s),
                  this.frameCount++);
                var C = performance.now();
                for (
                  this.frameTimes.push(C), this.durations.push(C - o);
                  this.frameTimes[0] <= C - 1e3;
                )
                  (this.frameTimes.shift(), this.durations.shift());
                (null == (r = this._viewModelInstance) || r.handleCallbacks(),
                  this.animator.isPlaying
                    ? this.scheduleRendering()
                    : this.animator.isPaused
                      ? (this.lastRenderTime = 0)
                      : this.animator.isStopped && (this.lastRenderTime = 0));
              }),
              (t.prototype.alignRenderer = function () {
                var e = this.renderer,
                  t = this.runtime,
                  n = this._layout,
                  r = this.artboard;
                e.align(
                  n.runtimeFit(t),
                  n.runtimeAlignment(t),
                  { minX: n.minX, minY: n.minY, maxX: n.maxX, maxY: n.maxY },
                  r.bounds,
                  this._devicePixelRatioUsed * n.layoutScaleFactor,
                );
              }),
              Object.defineProperty(t.prototype, "fps", {
                get: function () {
                  return this.durations.length;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "frameTime", {
                get: function () {
                  return 0 === this.durations.length
                    ? 0
                    : (
                        this.durations.reduce(function (e, t) {
                          return e + t;
                        }, 0) / this.durations.length
                      ).toFixed(4);
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.cleanup = function () {
                var e, t;
                ((this.destroyed = !0),
                  this.stopRendering(),
                  this.cleanupInstances(),
                  null !== this._observed && N.remove(this._observed),
                  this.removeRiveListeners(),
                  this.file &&
                    (null == (e = this.riveFile) || e.cleanup(),
                    (this.file = null)),
                  (this.riveFile = null),
                  this.deleteRiveRenderer(),
                  null !== this._audioEventListener &&
                    (W.remove(this._audioEventListener),
                    (this._audioEventListener = null)),
                  null == (t = this._viewModelInstance) || t.cleanup(),
                  (this._viewModelInstance = null),
                  (this._dataEnums = null));
              }),
              (t.prototype.deleteRiveRenderer = function () {
                var e;
                (null == (e = this.renderer) || e.delete(),
                  (this.renderer = null));
              }),
              (t.prototype.cleanupInstances = function () {
                (null !== this.eventCleanup && this.eventCleanup(),
                  this.stop(),
                  this.artboard &&
                    (this.artboard.delete(), (this.artboard = null)));
              }),
              (t.prototype.retrieveTextRun = function (e) {
                if (!e) return void console.warn("No text run name provided");
                if (!this.artboard)
                  return void console.warn(
                    "Tried to access text run, but the Artboard is null",
                  );
                var t,
                  n = this.artboard.textRun(e);
                return (
                  n ||
                  void console.warn(
                    "Could not access a text run with name '"
                      .concat(e, "' in the '")
                      .concat(
                        null == (t = this.artboard) ? void 0 : t.name,
                        "' Artboard. Note that you must rename a text run node in the Rive editor to make it queryable at runtime.",
                      ),
                  )
                );
              }),
              (t.prototype.getTextRunValue = function (e) {
                var t = this.retrieveTextRun(e);
                return t ? t.text : void 0;
              }),
              (t.prototype.setTextRunValue = function (e, t) {
                var n = this.retrieveTextRun(e);
                n && (n.text = t);
              }),
              (t.prototype.play = function (e, t) {
                var n = this;
                if (((e = es(e)), !this.readyForPlaying))
                  return void this.taskQueue.add({
                    action: function () {
                      return n.play(e, t);
                    },
                  });
                (this.animator.play(e),
                  this.eventCleanup && this.eventCleanup(),
                  this.setupRiveListeners(),
                  this.startRendering());
              }),
              (t.prototype.pause = function (e) {
                var t = this;
                if (((e = es(e)), !this.readyForPlaying))
                  return void this.taskQueue.add({
                    action: function () {
                      return t.pause(e);
                    },
                  });
                (this.eventCleanup && this.eventCleanup(),
                  this.animator.pause(e));
              }),
              (t.prototype.scrub = function (e, t) {
                var n = this;
                if (((e = es(e)), !this.readyForPlaying))
                  return void this.taskQueue.add({
                    action: function () {
                      return n.scrub(e, t);
                    },
                  });
                (this.animator.scrub(e, t || 0), this.drawFrame());
              }),
              (t.prototype.stop = function (e) {
                var t = this;
                if (((e = es(e)), !this.readyForPlaying))
                  return void this.taskQueue.add({
                    action: function () {
                      return t.stop(e);
                    },
                  });
                (this.animator && this.animator.stop(e),
                  this.eventCleanup && this.eventCleanup());
              }),
              (t.prototype.reset = function (e) {
                var t,
                  n,
                  r = null == e ? void 0 : e.artboard,
                  i = es(null == e ? void 0 : e.animations),
                  a = es(null == e ? void 0 : e.stateMachines),
                  o = null != (t = null == e ? void 0 : e.autoplay) && t,
                  s = null != (n = null == e ? void 0 : e.autoBind) && n;
                (this.cleanupInstances(),
                  this.initArtboard(r, i, a, o, s),
                  this.taskQueue.process());
              }),
              (t.prototype.load = function (e) {
                ((this.file = null), this.stop(), this.init(e));
              }),
              Object.defineProperty(t.prototype, "layout", {
                get: function () {
                  return this._layout;
                },
                set: function (e) {
                  ((this._layout = e),
                    (e.maxX && e.maxY) || this.resizeToCanvas(),
                    this.loaded &&
                      !this.animator.isPlaying &&
                      this.drawFrame());
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.resizeToCanvas = function () {
                this._layout = this.layout.copyWith({
                  minX: 0,
                  minY: 0,
                  maxX: this.canvas.width,
                  maxY: this.canvas.height,
                });
              }),
              (t.prototype.resizeDrawingSurfaceToCanvas = function (t) {
                if (this.canvas instanceof HTMLCanvasElement && window) {
                  var n = this.canvas.getBoundingClientRect(),
                    r = n.width,
                    i = n.height,
                    a = t || window.devicePixelRatio || 1;
                  if (
                    ((this.devicePixelRatioUsed = a),
                    (this.canvas.width = a * r),
                    (this.canvas.height = a * i),
                    (this._needsRedraw = !0),
                    this.resizeToCanvas(),
                    this.drawFrame(),
                    this.layout.fit === e.Layout)
                  ) {
                    var o = this._layout.layoutScaleFactor;
                    ((this.artboard.width = r / o),
                      (this.artboard.height = i / o));
                  }
                }
              }),
              Object.defineProperty(t.prototype, "source", {
                get: function () {
                  return this.src;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "activeArtboard", {
                get: function () {
                  return this.artboard ? this.artboard.name : "";
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "animationNames", {
                get: function () {
                  if (!this.loaded || !this.artboard) return [];
                  for (
                    var e = [], t = 0;
                    t < this.artboard.animationCount();
                    t++
                  )
                    e.push(this.artboard.animationByIndex(t).name);
                  return e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "stateMachineNames", {
                get: function () {
                  if (!this.loaded || !this.artboard) return [];
                  for (
                    var e = [], t = 0;
                    t < this.artboard.stateMachineCount();
                    t++
                  )
                    e.push(this.artboard.stateMachineByIndex(t).name);
                  return e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.stateMachineInputs = function (e) {
                if (this.loaded) {
                  var t = this.animator.stateMachines.find(function (t) {
                    return t.name === e;
                  });
                  return null == t ? void 0 : t.inputs;
                }
              }),
              (t.prototype.retrieveInputAtPath = function (e, t) {
                if (!e)
                  return void console.warn(
                    "No input name provided for path '".concat(t, "'"),
                  );
                if (!this.artboard)
                  return void console.warn(
                    "Tried to access input: '"
                      .concat(e, "', at path: '")
                      .concat(t, "', but the Artboard is null"),
                  );
                var n = this.artboard.inputByPath(e, t);
                return (
                  n ||
                  void console.warn(
                    "Could not access an input with name: '"
                      .concat(e, "', at path:'")
                      .concat(t, "'"),
                  )
                );
              }),
              (t.prototype.setBooleanStateAtPath = function (e, t, n) {
                var i = this.retrieveInputAtPath(e, n);
                i &&
                  (i.type === r.Boolean
                    ? (i.asBool().value = t)
                    : console.warn(
                        "Input with name: '"
                          .concat(e, "', at path:'")
                          .concat(n, "' is not a boolean"),
                      ));
              }),
              (t.prototype.setNumberStateAtPath = function (e, t, n) {
                var i = this.retrieveInputAtPath(e, n);
                i &&
                  (i.type === r.Number
                    ? (i.asNumber().value = t)
                    : console.warn(
                        "Input with name: '"
                          .concat(e, "', at path:'")
                          .concat(n, "' is not a number"),
                      ));
              }),
              (t.prototype.fireStateAtPath = function (e, t) {
                var n = this.retrieveInputAtPath(e, t);
                n &&
                  (n.type === r.Trigger
                    ? n.asTrigger().fire()
                    : console.warn(
                        "Input with name: '"
                          .concat(e, "', at path:'")
                          .concat(t, "' is not a trigger"),
                      ));
              }),
              (t.prototype.retrieveTextAtPath = function (e, t) {
                if (!e)
                  return void console.warn(
                    "No text name provided for path '".concat(t, "'"),
                  );
                if (!t)
                  return void console.warn(
                    "No path provided for text '".concat(e, "'"),
                  );
                if (!this.artboard)
                  return void console.warn(
                    "Tried to access text: '"
                      .concat(e, "', at path: '")
                      .concat(t, "', but the Artboard is null"),
                  );
                var n = this.artboard.textByPath(e, t);
                return (
                  n ||
                  void console.warn(
                    "Could not access text with name: '"
                      .concat(e, "', at path:'")
                      .concat(t, "'"),
                  )
                );
              }),
              (t.prototype.getTextRunValueAtPath = function (e, t) {
                var n = this.retrieveTextAtPath(e, t);
                return n
                  ? n.text
                  : void console.warn(
                      "Could not get text with name: '"
                        .concat(e, "', at path:'")
                        .concat(t, "'"),
                    );
              }),
              (t.prototype.setTextRunValueAtPath = function (e, t, n) {
                var r = this.retrieveTextAtPath(e, n);
                if (!r)
                  return void console.warn(
                    "Could not set text with name: '"
                      .concat(e, "', at path:'")
                      .concat(n, "'"),
                  );
                r.text = t;
              }),
              Object.defineProperty(t.prototype, "playingStateMachineNames", {
                get: function () {
                  return this.loaded
                    ? this.animator.stateMachines
                        .filter(function (e) {
                          return e.playing;
                        })
                        .map(function (e) {
                          return e.name;
                        })
                    : [];
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "playingAnimationNames", {
                get: function () {
                  return this.loaded
                    ? this.animator.animations
                        .filter(function (e) {
                          return e.playing;
                        })
                        .map(function (e) {
                          return e.name;
                        })
                    : [];
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "pausedAnimationNames", {
                get: function () {
                  return this.loaded
                    ? this.animator.animations
                        .filter(function (e) {
                          return !e.playing;
                        })
                        .map(function (e) {
                          return e.name;
                        })
                    : [];
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "pausedStateMachineNames", {
                get: function () {
                  return this.loaded
                    ? this.animator.stateMachines
                        .filter(function (e) {
                          return !e.playing;
                        })
                        .map(function (e) {
                          return e.name;
                        })
                    : [];
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "isPlaying", {
                get: function () {
                  return this.animator.isPlaying;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "isPaused", {
                get: function () {
                  return this.animator.isPaused;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "isStopped", {
                get: function () {
                  var e, t;
                  return (
                    null ==
                      (t =
                        null == (e = this.animator) ? void 0 : e.isStopped) || t
                  );
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "bounds", {
                get: function () {
                  return this.artboard ? this.artboard.bounds : void 0;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.on = function (e, t) {
                this.eventManager.add({ type: e, callback: t });
              }),
              (t.prototype.off = function (e, t) {
                this.eventManager.remove({ type: e, callback: t });
              }),
              (t.prototype.unsubscribe = function (e, t) {
                (console.warn(
                  "This function is deprecated: please use `off()` instead.",
                ),
                  this.off(e, t));
              }),
              (t.prototype.removeAllRiveEventListeners = function (e) {
                this.eventManager.removeAll(e);
              }),
              (t.prototype.unsubscribeAll = function (e) {
                (console.warn(
                  "This function is deprecated: please use `removeAllRiveEventListeners()` instead.",
                ),
                  this.removeAllRiveEventListeners(e));
              }),
              (t.prototype.stopRendering = function () {
                this.loaded &&
                  this.frameRequestId &&
                  (this.runtime.cancelAnimationFrame
                    ? this.runtime.cancelAnimationFrame(this.frameRequestId)
                    : cancelAnimationFrame(this.frameRequestId),
                  (this.frameRequestId = null));
              }),
              (t.prototype.startRendering = function () {
                this.drawFrame();
              }),
              (t.prototype.scheduleRendering = function () {
                this.loaded &&
                  this.artboard &&
                  !this.frameRequestId &&
                  (this.runtime.requestAnimationFrame
                    ? (this.frameRequestId = this.runtime.requestAnimationFrame(
                        this._boundDraw,
                      ))
                    : (this.frameRequestId = requestAnimationFrame(
                        this._boundDraw,
                      )));
              }),
              (t.prototype.enableFPSCounter = function (e) {
                this.runtime.enableFPSCounter(e);
              }),
              (t.prototype.disableFPSCounter = function () {
                this.runtime.disableFPSCounter();
              }),
              Object.defineProperty(t.prototype, "contents", {
                get: function () {
                  if (this.loaded) {
                    for (
                      var e = { artboards: [] }, t = 0;
                      t < this.file.artboardCount();
                      t++
                    ) {
                      for (
                        var n = this.file.artboardByIndex(t),
                          r = {
                            name: n.name,
                            animations: [],
                            stateMachines: [],
                          },
                          i = 0;
                        i < n.animationCount();
                        i++
                      ) {
                        var a = n.animationByIndex(i);
                        r.animations.push(a.name);
                      }
                      for (var o = 0; o < n.stateMachineCount(); o++) {
                        for (
                          var s = n.stateMachineByIndex(o),
                            u = s.name,
                            l = new this.runtime.StateMachineInstance(s, n),
                            c = [],
                            f = 0;
                          f < l.inputCount();
                          f++
                        ) {
                          var h = l.input(f);
                          c.push({ name: h.name, type: h.type });
                        }
                        r.stateMachines.push({ name: u, inputs: c });
                      }
                      e.artboards.push(r);
                    }
                    return e;
                  }
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "volume", {
                get: function () {
                  return (
                    this.artboard &&
                      this.artboard.volume !== this._volume &&
                      (this._volume = this.artboard.volume),
                    this._volume
                  );
                },
                set: function (e) {
                  ((this._volume = e),
                    this.artboard &&
                      (this.artboard.volume = e * W.systemVolume));
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "artboardWidth", {
                get: function () {
                  var e;
                  return this.artboard
                    ? this.artboard.width
                    : null != (e = this._artboardWidth)
                      ? e
                      : 0;
                },
                set: function (e) {
                  ((this._artboardWidth = e),
                    this.artboard && (this.artboard.width = e));
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "artboardHeight", {
                get: function () {
                  var e;
                  return this.artboard
                    ? this.artboard.height
                    : null != (e = this._artboardHeight)
                      ? e
                      : 0;
                },
                set: function (e) {
                  ((this._artboardHeight = e),
                    this.artboard && (this.artboard.height = e));
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.resetArtboardSize = function () {
                this.artboard
                  ? (this.artboard.resetArtboardSize(),
                    (this._artboardWidth = this.artboard.width),
                    (this._artboardHeight = this.artboard.height))
                  : ((this._artboardWidth = void 0),
                    (this._artboardHeight = void 0));
              }),
              Object.defineProperty(t.prototype, "devicePixelRatioUsed", {
                get: function () {
                  return this._devicePixelRatioUsed;
                },
                set: function (e) {
                  this._devicePixelRatioUsed = e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.bindViewModelInstance = function (e) {
                var t;
                this.artboard &&
                  !this.destroyed &&
                  e &&
                  e.runtimeInstance &&
                  (e.internalIncrementReferenceCount(),
                  null == (t = this._viewModelInstance) || t.cleanup(),
                  (this._viewModelInstance = e),
                  this.animator.stateMachines.length > 0
                    ? this.animator.stateMachines.forEach(function (t) {
                        return t.bindViewModelInstance(e);
                      })
                    : this.artboard.bindViewModelInstance(e.runtimeInstance));
              }),
              Object.defineProperty(t.prototype, "viewModelInstance", {
                get: function () {
                  return this._viewModelInstance;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.viewModelByIndex = function (e) {
                var t = this.file.viewModelByIndex(e);
                return null !== t ? new Y(t) : null;
              }),
              (t.prototype.viewModelByName = function (e) {
                var t;
                return null == (t = this.riveFile)
                  ? void 0
                  : t.viewModelByName(e);
              }),
              (t.prototype.enums = function () {
                if (null === this._dataEnums) {
                  var e = this.file.enums();
                  this._dataEnums = e.map(function (e) {
                    return new H(e);
                  });
                }
                return this._dataEnums;
              }),
              (t.prototype.defaultViewModel = function () {
                if (this.artboard) {
                  var e = this.file.defaultArtboardViewModel(this.artboard);
                  if (e) return new Y(e);
                }
                return null;
              }),
              (t.prototype.getArtboard = function (e) {
                var t, n;
                return null !=
                  (n = null == (t = this.riveFile) ? void 0 : t.getArtboard(e))
                  ? n
                  : null;
              }),
              (t.prototype.getBindableArtboard = function (e) {
                var t, n;
                return null !=
                  (n =
                    null == (t = this.riveFile)
                      ? void 0
                      : t.getBindableArtboard(e))
                  ? n
                  : null;
              }),
              (t.prototype.getDefaultBindableArtboard = function () {
                var e, t;
                return null !=
                  (t =
                    null == (e = this.riveFile)
                      ? void 0
                      : e.getDefaultBindableArtboard())
                  ? t
                  : null;
              }),
              (t.missingErrorMessage =
                "Rive source file or data buffer required"),
              (t.cleanupErrorMessage =
                "Attempt to use file after calling cleanup."),
              t
            );
          })()),
          ((G = u || (u = {})).none = "none"),
          (G.string = "string"),
          (G.number = "number"),
          (G.boolean = "boolean"),
          (G.color = "color"),
          (G.list = "list"),
          (G.enumType = "enumType"),
          (G.trigger = "trigger"),
          (G.viewModel = "viewModel"),
          (G.integer = "integer"),
          (G.listIndex = "listIndex"),
          (G.image = "image"),
          (G.artboard = "artboard"),
          (Y = (function () {
            function e(e) {
              this._viewModel = e;
            }
            return (
              Object.defineProperty(e.prototype, "instanceCount", {
                get: function () {
                  return this._viewModel.instanceCount;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "name", {
                get: function () {
                  return this._viewModel.name;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.instanceByIndex = function (e) {
                var t = this._viewModel.instanceByIndex(e);
                if (null !== t) {
                  var n = new q(t, null);
                  return ((0, d.createFinalization)(n, t), n);
                }
                return null;
              }),
              (e.prototype.instanceByName = function (e) {
                var t = this._viewModel.instanceByName(e);
                if (null !== t) {
                  var n = new q(t, null);
                  return ((0, d.createFinalization)(n, t), n);
                }
                return null;
              }),
              (e.prototype.defaultInstance = function () {
                var e = this._viewModel.defaultInstance();
                if (null !== e) {
                  var t = new q(e, null);
                  return ((0, d.createFinalization)(t, e), t);
                }
                return null;
              }),
              (e.prototype.instance = function () {
                var e = this._viewModel.instance();
                if (null !== e) {
                  var t = new q(e, null);
                  return ((0, d.createFinalization)(t, e), t);
                }
                return null;
              }),
              Object.defineProperty(e.prototype, "properties", {
                get: function () {
                  return this._viewModel.getProperties();
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "instanceNames", {
                get: function () {
                  return this._viewModel.getInstanceNames();
                },
                enumerable: !1,
                configurable: !0,
              }),
              e
            );
          })()),
          (H = (function () {
            function e(e) {
              this._dataEnum = e;
            }
            return (
              Object.defineProperty(e.prototype, "name", {
                get: function () {
                  return this._dataEnum.name;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "values", {
                get: function () {
                  return this._dataEnum.values;
                },
                enumerable: !1,
                configurable: !0,
              }),
              e
            );
          })()),
          ((X = l || (l = {})).Number = "number"),
          (X.String = "string"),
          (X.Boolean = "boolean"),
          (X.Color = "color"),
          (X.Trigger = "trigger"),
          (X.Enum = "enum"),
          (X.List = "list"),
          (X.Image = "image"),
          (X.Artboard = "artboard"),
          (q = (function () {
            function e(e, t) {
              ((this._parents = []),
                (this._children = []),
                (this._viewModelInstances = new Map()),
                (this._propertiesWithCallbacks = []),
                (this._referenceCount = 0),
                (this.selfUnref = !1),
                (this._runtimeInstance = e),
                null !== t && this._parents.push(t));
            }
            return (
              Object.defineProperty(e.prototype, "runtimeInstance", {
                get: function () {
                  return this._runtimeInstance;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "nativeInstance", {
                get: function () {
                  return this._runtimeInstance;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.handleCallbacks = function () {
                (0 !== this._propertiesWithCallbacks.length &&
                  (this._propertiesWithCallbacks.forEach(function (e) {
                    e.handleCallbacks();
                  }),
                  this._propertiesWithCallbacks.forEach(function (e) {
                    e.clearChanges();
                  })),
                  this._children.forEach(function (e) {
                    return e.handleCallbacks();
                  }));
              }),
              (e.prototype.addParent = function (e) {
                !this._parents.includes(e) &&
                  (this._parents.push(e),
                  (this._propertiesWithCallbacks.length > 0 ||
                    this._children.length > 0) &&
                    e.addToViewModelCallbacks(this));
              }),
              (e.prototype.removeParent = function (e) {
                var t = this._parents.indexOf(e);
                -1 !== t &&
                  (this._parents[t].removeFromViewModelCallbacks(this),
                  this._parents.splice(t, 1));
              }),
              (e.prototype.addToPropertyCallbacks = function (e) {
                var t = this;
                !this._propertiesWithCallbacks.includes(e) &&
                  (this._propertiesWithCallbacks.push(e),
                  this._propertiesWithCallbacks.length > 0 &&
                    this._parents.forEach(function (e) {
                      e.addToViewModelCallbacks(t);
                    }));
              }),
              (e.prototype.removeFromPropertyCallbacks = function (e) {
                var t = this;
                this._propertiesWithCallbacks.includes(e) &&
                  ((this._propertiesWithCallbacks =
                    this._propertiesWithCallbacks.filter(function (t) {
                      return t !== e;
                    })),
                  0 === this._children.length &&
                    0 === this._propertiesWithCallbacks.length &&
                    this._parents.forEach(function (e) {
                      e.removeFromViewModelCallbacks(t);
                    }));
              }),
              (e.prototype.addToViewModelCallbacks = function (e) {
                var t = this;
                this._children.includes(e) ||
                  (this._children.push(e),
                  this._parents.forEach(function (e) {
                    e.addToViewModelCallbacks(t);
                  }));
              }),
              (e.prototype.removeFromViewModelCallbacks = function (e) {
                var t = this;
                this._children.includes(e) &&
                  ((this._children = this._children.filter(function (t) {
                    return t !== e;
                  })),
                  0 === this._children.length &&
                    0 === this._propertiesWithCallbacks.length &&
                    this._parents.forEach(function (e) {
                      e.removeFromViewModelCallbacks(t);
                    }));
              }),
              (e.prototype.clearCallbacks = function () {
                this._propertiesWithCallbacks.forEach(function (e) {
                  e.clearCallbacks();
                });
              }),
              (e.prototype.propertyFromPath = function (e, t) {
                var n = e.split("/");
                return this.propertyFromPathSegments(n, 0, t);
              }),
              (e.prototype.viewModelFromPathSegments = function (e, t) {
                var n = this.internalViewModelInstance(e[t]);
                if (null !== n)
                  if (t == e.length - 1) return n;
                  else return n.viewModelFromPathSegments(e, t++);
                return null;
              }),
              (e.prototype.propertyFromPathSegments = function (e, t, n) {
                if (t < e.length - 1) {
                  var r,
                    i,
                    a,
                    o,
                    s,
                    u,
                    c,
                    f,
                    h,
                    d,
                    p,
                    m,
                    v,
                    g,
                    b,
                    y,
                    w,
                    _,
                    A = this.internalViewModelInstance(e[t]);
                  return null !== A
                    ? A.propertyFromPathSegments(e, t + 1, n)
                    : null;
                }
                var C = null;
                switch (n) {
                  case l.Number:
                    if (
                      null !==
                      (C =
                        null !=
                        (i =
                          null == (r = this._runtimeInstance)
                            ? void 0
                            : r.number(e[t]))
                          ? i
                          : null)
                    )
                      return new Z(C, this);
                    break;
                  case l.String:
                    if (
                      null !==
                      (C =
                        null !=
                        (o =
                          null == (a = this._runtimeInstance)
                            ? void 0
                            : a.string(e[t]))
                          ? o
                          : null)
                    )
                      return new K(C, this);
                    break;
                  case l.Boolean:
                    if (
                      null !==
                      (C =
                        null !=
                        (u =
                          null == (s = this._runtimeInstance)
                            ? void 0
                            : s.boolean(e[t]))
                          ? u
                          : null)
                    )
                      return new Q(C, this);
                    break;
                  case l.Color:
                    if (
                      null !==
                      (C =
                        null !=
                        (f =
                          null == (c = this._runtimeInstance)
                            ? void 0
                            : c.color(e[t]))
                          ? f
                          : null)
                    )
                      return new er(C, this);
                    break;
                  case l.Trigger:
                    if (
                      null !==
                      (C =
                        null !=
                        (d =
                          null == (h = this._runtimeInstance)
                            ? void 0
                            : h.trigger(e[t]))
                          ? d
                          : null)
                    )
                      return new ee(C, this);
                    break;
                  case l.Enum:
                    if (
                      null !==
                      (C =
                        null !=
                        (m =
                          null == (p = this._runtimeInstance)
                            ? void 0
                            : p.enum(e[t]))
                          ? m
                          : null)
                    )
                      return new et(C, this);
                    break;
                  case l.List:
                    if (
                      null !==
                      (C =
                        null !=
                        (g =
                          null == (v = this._runtimeInstance)
                            ? void 0
                            : v.list(e[t]))
                          ? g
                          : null)
                    )
                      return new en(C, this);
                    break;
                  case l.Image:
                    if (
                      null !==
                      (C =
                        null !=
                        (y =
                          null == (b = this._runtimeInstance)
                            ? void 0
                            : b.image(e[t]))
                          ? y
                          : null)
                    )
                      return new ei(C, this);
                    break;
                  case l.Artboard:
                    if (
                      null !==
                      (C =
                        null !=
                        (_ =
                          null == (w = this._runtimeInstance)
                            ? void 0
                            : w.artboard(e[t]))
                          ? _
                          : null)
                    )
                      return new ea(C, this);
                }
                return null;
              }),
              (e.prototype.internalViewModelInstance = function (t) {
                if (this._viewModelInstances.has(t))
                  return this._viewModelInstances.get(t);
                var n,
                  r =
                    null == (n = this._runtimeInstance)
                      ? void 0
                      : n.viewModel(t);
                if (null !== r) {
                  var i = new e(r, this);
                  return (
                    (0, d.createFinalization)(i, r),
                    i.internalIncrementReferenceCount(),
                    this._viewModelInstances.set(t, i),
                    i
                  );
                }
                return null;
              }),
              (e.prototype.number = function (e) {
                return this.propertyFromPath(e, l.Number);
              }),
              (e.prototype.string = function (e) {
                return this.propertyFromPath(e, l.String);
              }),
              (e.prototype.boolean = function (e) {
                return this.propertyFromPath(e, l.Boolean);
              }),
              (e.prototype.color = function (e) {
                return this.propertyFromPath(e, l.Color);
              }),
              (e.prototype.trigger = function (e) {
                return this.propertyFromPath(e, l.Trigger);
              }),
              (e.prototype.enum = function (e) {
                return this.propertyFromPath(e, l.Enum);
              }),
              (e.prototype.list = function (e) {
                return this.propertyFromPath(e, l.List);
              }),
              (e.prototype.image = function (e) {
                return this.propertyFromPath(e, l.Image);
              }),
              (e.prototype.artboard = function (e) {
                return this.propertyFromPath(e, l.Artboard);
              }),
              (e.prototype.viewModel = function (e) {
                var t = e.split("/"),
                  n =
                    t.length > 1
                      ? this.viewModelFromPathSegments(
                          t.slice(0, t.length - 1),
                          0,
                        )
                      : this;
                return null != n
                  ? n.internalViewModelInstance(t[t.length - 1])
                  : null;
              }),
              (e.prototype.internalReplaceViewModel = function (e, t) {
                var n;
                if (null !== t.runtimeInstance) {
                  var r =
                    (null == (n = this._runtimeInstance)
                      ? void 0
                      : n.replaceViewModel(e, t.runtimeInstance)) || !1;
                  if (r) {
                    t.internalIncrementReferenceCount();
                    var i = this.internalViewModelInstance(e);
                    (null !== i &&
                      (i.removeParent(this),
                      this._children.includes(i) &&
                        (this._children = this._children.filter(function (e) {
                          return e !== i;
                        })),
                      i.cleanup()),
                      this._viewModelInstances.set(e, t),
                      t.addParent(this));
                  }
                  return r;
                }
                return !1;
              }),
              (e.prototype.replaceViewModel = function (e, t) {
                var n,
                  r = e.split("/"),
                  i =
                    r.length > 1
                      ? this.viewModelFromPathSegments(
                          r.slice(0, r.length - 1),
                          0,
                        )
                      : this;
                return (
                  null !=
                    (n =
                      null == i
                        ? void 0
                        : i.internalReplaceViewModel(r[r.length - 1], t)) && n
                );
              }),
              (e.prototype.incrementReferenceCount = function () {
                var e;
                (this._referenceCount++,
                  null == (e = this._runtimeInstance) ||
                    e.incrementReferenceCount());
              }),
              (e.prototype.decrementReferenceCount = function () {
                var e;
                (this._referenceCount--,
                  null == (e = this._runtimeInstance) ||
                    e.decrementReferenceCount());
              }),
              Object.defineProperty(e.prototype, "properties", {
                get: function () {
                  var e;
                  return (
                    (null == (e = this._runtimeInstance)
                      ? void 0
                      : e.getProperties().map(function (e) {
                          return v({}, e);
                        })) || []
                  );
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.internalIncrementReferenceCount = function () {
                this._referenceCount++;
              }),
              (e.prototype.cleanup = function () {
                var e,
                  t = this;
                if ((this._referenceCount--, this._referenceCount <= 0)) {
                  (this.selfUnref &&
                    (null == (e = this._runtimeInstance) || e.unref()),
                    (this._runtimeInstance = null),
                    this.clearCallbacks(),
                    (this._propertiesWithCallbacks = []),
                    this._viewModelInstances.forEach(function (e) {
                      e.cleanup();
                    }),
                    this._viewModelInstances.clear());
                  var n = y([], this._children, !0);
                  this._children.length = 0;
                  var r = y([], this._parents, !0);
                  ((this._parents.length = 0),
                    n.forEach(function (e) {
                      e.removeParent(t);
                    }),
                    r.forEach(function (e) {
                      e.removeFromViewModelCallbacks(t);
                    }));
                }
              }),
              e
            );
          })()),
          (K = (function (e) {
            function t(t, n) {
              return e.call(this, t, n) || this;
            }
            return (
              m(t, e),
              Object.defineProperty(t.prototype, "value", {
                get: function () {
                  return this._viewModelInstanceValue.value;
                },
                set: function (e) {
                  this._viewModelInstanceValue.value = e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.internalHandleCallback = function (e) {
                e(this.value);
              }),
              t
            );
          })(
            (J = (function () {
              function e(e, t) {
                ((this.callbacks = []),
                  (this._viewModelInstanceValue = e),
                  (this._parentViewModel = t));
              }
              return (
                (e.prototype.on = function (e) {
                  (0 === this.callbacks.length &&
                    this._viewModelInstanceValue.clearChanges(),
                    this.callbacks.includes(e) ||
                      (this.callbacks.push(e),
                      this._parentViewModel.addToPropertyCallbacks(this)));
                }),
                (e.prototype.off = function (e) {
                  (e
                    ? (this.callbacks = this.callbacks.filter(function (t) {
                        return t !== e;
                      }))
                    : (this.callbacks.length = 0),
                    0 === this.callbacks.length &&
                      this._parentViewModel.removeFromPropertyCallbacks(this));
                }),
                (e.prototype.internalHandleCallback = function (e) {}),
                (e.prototype.handleCallbacks = function () {
                  var e = this;
                  this._viewModelInstanceValue.hasChanged &&
                    this.callbacks.forEach(function (t) {
                      e.internalHandleCallback(t);
                    });
                }),
                (e.prototype.clearChanges = function () {
                  this._viewModelInstanceValue.clearChanges();
                }),
                (e.prototype.clearCallbacks = function () {
                  this.callbacks.length = 0;
                }),
                Object.defineProperty(e.prototype, "name", {
                  get: function () {
                    return this._viewModelInstanceValue.name;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                e
              );
            })()),
          )),
          (Z = (function (e) {
            function t(t, n) {
              return e.call(this, t, n) || this;
            }
            return (
              m(t, e),
              Object.defineProperty(t.prototype, "value", {
                get: function () {
                  return this._viewModelInstanceValue.value;
                },
                set: function (e) {
                  this._viewModelInstanceValue.value = e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.internalHandleCallback = function (e) {
                e(this.value);
              }),
              t
            );
          })(J)),
          (Q = (function (e) {
            function t(t, n) {
              return e.call(this, t, n) || this;
            }
            return (
              m(t, e),
              Object.defineProperty(t.prototype, "value", {
                get: function () {
                  return this._viewModelInstanceValue.value;
                },
                set: function (e) {
                  this._viewModelInstanceValue.value = e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.internalHandleCallback = function (e) {
                e(this.value);
              }),
              t
            );
          })(J)),
          (ee = (function (e) {
            function t(t, n) {
              return e.call(this, t, n) || this;
            }
            return (
              m(t, e),
              (t.prototype.trigger = function () {
                return this._viewModelInstanceValue.trigger();
              }),
              (t.prototype.internalHandleCallback = function (e) {
                e();
              }),
              t
            );
          })(J)),
          (et = (function (e) {
            function t(t, n) {
              return e.call(this, t, n) || this;
            }
            return (
              m(t, e),
              Object.defineProperty(t.prototype, "value", {
                get: function () {
                  return this._viewModelInstanceValue.value;
                },
                set: function (e) {
                  this._viewModelInstanceValue.value = e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "valueIndex", {
                get: function () {
                  return this._viewModelInstanceValue.valueIndex;
                },
                set: function (e) {
                  this._viewModelInstanceValue.valueIndex = e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "values", {
                get: function () {
                  return this._viewModelInstanceValue.values;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.internalHandleCallback = function (e) {
                e(this.value);
              }),
              t
            );
          })(J)),
          (en = (function (e) {
            function t(t, n) {
              return e.call(this, t, n) || this;
            }
            return (
              m(t, e),
              Object.defineProperty(t.prototype, "length", {
                get: function () {
                  return this._viewModelInstanceValue.size;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.addInstance = function (e) {
                null != e.runtimeInstance &&
                  (this._viewModelInstanceValue.addInstance(e.runtimeInstance),
                  e.addParent(this._parentViewModel));
              }),
              (t.prototype.addInstanceAt = function (e, t) {
                return (
                  !!(
                    null != e.runtimeInstance &&
                    this._viewModelInstanceValue.addInstanceAt(
                      e.runtimeInstance,
                      t,
                    )
                  ) && (e.addParent(this._parentViewModel), !0)
                );
              }),
              (t.prototype.removeInstance = function (e) {
                null != e.runtimeInstance &&
                  (this._viewModelInstanceValue.removeInstance(
                    e.runtimeInstance,
                  ),
                  e.removeParent(this._parentViewModel));
              }),
              (t.prototype.removeInstanceAt = function (e) {
                this._viewModelInstanceValue.removeInstanceAt(e);
              }),
              (t.prototype.instanceAt = function (e) {
                var t = this._viewModelInstanceValue.instanceAt(e);
                if (null != t) {
                  var n = new q(t, this._parentViewModel);
                  return ((0, d.createFinalization)(n, t), n);
                }
                return null;
              }),
              (t.prototype.swap = function (e, t) {
                this._viewModelInstanceValue.swap(e, t);
              }),
              (t.prototype.internalHandleCallback = function (e) {
                e();
              }),
              t
            );
          })(J)),
          (er = (function (e) {
            function t(t, n) {
              return e.call(this, t, n) || this;
            }
            return (
              m(t, e),
              Object.defineProperty(t.prototype, "value", {
                get: function () {
                  return this._viewModelInstanceValue.value;
                },
                set: function (e) {
                  this._viewModelInstanceValue.value = e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.rgb = function (e, t, n) {
                this._viewModelInstanceValue.rgb(e, t, n);
              }),
              (t.prototype.rgba = function (e, t, n, r) {
                this._viewModelInstanceValue.argb(r, e, t, n);
              }),
              (t.prototype.argb = function (e, t, n, r) {
                this._viewModelInstanceValue.argb(e, t, n, r);
              }),
              (t.prototype.alpha = function (e) {
                this._viewModelInstanceValue.alpha(e);
              }),
              (t.prototype.opacity = function (e) {
                this._viewModelInstanceValue.alpha(
                  Math.round(255 * Math.max(0, Math.min(1, e))),
                );
              }),
              (t.prototype.internalHandleCallback = function (e) {
                e(this.value);
              }),
              t
            );
          })(J)),
          (ei = (function (e) {
            function t(t, n) {
              return e.call(this, t, n) || this;
            }
            return (
              m(t, e),
              Object.defineProperty(t.prototype, "value", {
                set: function (e) {
                  var t;
                  this._viewModelInstanceValue.value(
                    null != (t = null == e ? void 0 : e.nativeImage) ? t : null,
                  );
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.internalHandleCallback = function (e) {
                e();
              }),
              t
            );
          })(J)),
          (ea = (function (e) {
            function t(t, n) {
              return e.call(this, t, n) || this;
            }
            return (
              m(t, e),
              Object.defineProperty(t.prototype, "value", {
                set: function (e) {
                  var t, n, r;
                  ((r = e.isBindableArtboard
                    ? e
                    : e.file.internalBindableArtboardFromArtboard(
                        e.nativeArtboard,
                      )),
                    this._viewModelInstanceValue.value(
                      null != (t = null == r ? void 0 : r.nativeArtboard)
                        ? t
                        : null,
                    ),
                    (null == r ? void 0 : r.nativeViewModel) &&
                      this._viewModelInstanceValue.viewModelInstance(
                        null != (n = null == r ? void 0 : r.nativeViewModel)
                          ? n
                          : null,
                      ));
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.internalHandleCallback = function (e) {
                e();
              }),
              t
            );
          })(J)),
          (eo = function (e) {
            return g(void 0, void 0, void 0, function () {
              return b(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, fetch(new Request(e))];
                  case 1:
                    return [4, t.sent().arrayBuffer()];
                  case 2:
                    return [2, t.sent()];
                }
              });
            });
          }),
          (es = function (e) {
            return "string" == typeof e ? [e] : e instanceof Array ? e : [];
          }),
          (eu = { EventManager: O, TaskQueueManager: B }),
          (el = function (e) {
            return g(void 0, void 0, void 0, function () {
              var t, n;
              return b(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [
                      4,
                      new Promise(function (t) {
                        return M.getInstance(function (n) {
                          n.decodeAudio(e, t);
                        });
                      }),
                    ];
                  case 1:
                    return (
                      (t = r.sent()),
                      (n = new d.AudioWrapper(t)),
                      d.finalizationRegistry.register(n, t),
                      [2, n]
                    );
                }
              });
            });
          }),
          (ec = function (e) {
            return g(void 0, void 0, void 0, function () {
              var t, n;
              return b(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [
                      4,
                      new Promise(function (t) {
                        return M.getInstance(function (n) {
                          n.decodeImage(e, t);
                        });
                      }),
                    ];
                  case 1:
                    return (
                      (t = r.sent()),
                      (n = new d.ImageWrapper(t)),
                      d.finalizationRegistry.register(n, t),
                      [2, n]
                    );
                }
              });
            });
          }),
          (ef = function (e) {
            return g(void 0, void 0, void 0, function () {
              var t, n;
              return b(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [
                      4,
                      new Promise(function (t) {
                        return M.getInstance(function (n) {
                          n.decodeFont(e, t);
                        });
                      }),
                    ];
                  case 1:
                    return (
                      (t = r.sent()),
                      (n = new d.FontWrapper(t)),
                      d.finalizationRegistry.register(n, t),
                      [2, n]
                    );
                }
              });
            });
          }),
          em
        );
      })();
    },
  },
]);
