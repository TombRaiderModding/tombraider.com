(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [46],
  {
    83186: function (r) {
      r.exports = (() => {
        "use strict";
        var r,
          i,
          o,
          s,
          l,
          h,
          m,
          v,
          y,
          w,
          _,
          A,
          M,
          I,
          C,
          F,
          E,
          P,
          x,
          T,
          j,
          O,
          W,
          D,
          B,
          U,
          z,
          $,
          G,
          H,
          q,
          J,
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
          ef,
          eh,
          ep,
          em,
          ev,
          eb,
          eg,
          ey,
          ew,
          e_,
          eA,
          eM,
          eI,
          eR,
          eC,
          eF,
          eE,
          eL,
          eP = [
            ,
            (r, i, o) => {
              (o.r(i), o.d(i, { default: () => h }));
              var s,
                l =
                  ((s =
                    "undefined" != typeof document && document.currentScript
                      ? document.currentScript.src
                      : void 0),
                  function (r = {}) {
                    function ca() {
                      function a(l) {
                        let h = o;
                        ((i = r = 0),
                          (o = new Map()),
                          h.forEach((r) => {
                            try {
                              r(l);
                            } catch (r) {
                              console.error(r);
                            }
                          }),
                          this.lb(),
                          s && s.Mb());
                      }
                      let r = 0,
                        i = 0,
                        o = new Map(),
                        s = null,
                        l = null;
                      ((this.requestAnimationFrame = function (s) {
                        r || (r = requestAnimationFrame(a.bind(this)));
                        let l = ++i;
                        return (o.set(l, s), l);
                      }),
                        (this.cancelAnimationFrame = function (i) {
                          (o.delete(i),
                            r &&
                              0 == o.size &&
                              (cancelAnimationFrame(r), (r = 0)));
                        }),
                        (this.Kb = function (r) {
                          (l && (document.body.remove(l), (l = null)),
                            r ||
                              (((l =
                                document.createElement(
                                  "div",
                                )).style.backgroundColor = "black"),
                              (l.style.position = "fixed"),
                              (l.style.right = 0),
                              (l.style.top = 0),
                              (l.style.color = "white"),
                              (l.style.padding = "4px"),
                              (l.innerHTML = "RIVE FPS"),
                              (r = function (r) {
                                l.innerHTML = "RIVE FPS " + r.toFixed(1);
                              }),
                              document.body.appendChild(l)),
                            (s = new (function () {
                              let i = 0,
                                o = 0;
                              this.Mb = function () {
                                var s = performance.now();
                                o
                                  ? (++i,
                                    1e3 < (s -= o) &&
                                      (r((1e3 * i) / s), (i = o = 0)))
                                  : ((o = s), (i = 0));
                              };
                            })()));
                        }),
                        (this.lb = function () {}));
                    }
                    function da() {
                      console.assert(!0);
                      let r = new Map(),
                        i = -1 / 0;
                      this.push = function (o) {
                        return (
                          (o = (o + 255) >> 8),
                          r.has(o) && clearTimeout(r.get(o)),
                          r.set(
                            o,
                            setTimeout(function () {
                              (r.delete(o),
                                0 == r.length
                                  ? (i = -1 / 0)
                                  : o == i &&
                                    console.assert(
                                      (i = Math.max(...r.keys())) < o,
                                    ));
                            }, 1e3),
                          ),
                          (i = Math.max(o, i)) << 8
                        );
                      };
                    }
                    r.ready = new Promise((r, i) => {
                      ((h = r), (m = i));
                    });
                    let i = r.onRuntimeInitialized;
                    r.onRuntimeInitialized = function () {
                      i && i();
                      let o = r.decodeAudio;
                      r.decodeAudio = function (r, i) {
                        i((r = o(r)));
                      };
                      let s = r.decodeFont;
                      r.decodeFont = function (r, i) {
                        i((r = s(r)));
                      };
                      let l = r.FileAssetLoader;
                      ((r.ptrToAsset = (i) => {
                        let o = r.ptrToFileAsset(i);
                        return o.isImage
                          ? r.ptrToImageAsset(i)
                          : o.isFont
                            ? r.ptrToFontAsset(i)
                            : o.isAudio
                              ? r.ptrToAudioAsset(i)
                              : o;
                      }),
                        (r.CustomFileAssetLoader = l.extend(
                          "CustomFileAssetLoader",
                          {
                            __construct: function ({ loadContents: r }) {
                              (this.__parent.__construct.call(this),
                                (this.Bb = r));
                            },
                            loadContents: function (i, o) {
                              return ((i = r.ptrToAsset(i)), this.Bb(i, o));
                            },
                          },
                        )),
                        (r.CDNFileAssetLoader = l.extend("CDNFileAssetLoader", {
                          __construct: function () {
                            this.__parent.__construct.call(this);
                          },
                          loadContents: function (i) {
                            var o, s, l;
                            let h = r.ptrToAsset(i);
                            return (
                              "" !== (i = h.cdnUuid) &&
                              ((o = h.cdnBaseUrl + "/" + i),
                              (s = (r) => {
                                h.decode(new Uint8Array(r.response));
                              }),
                              ((l = new XMLHttpRequest()).responseType =
                                "arraybuffer"),
                              (l.onreadystatechange = function () {
                                4 == l.readyState && 200 == l.status && s(l);
                              }),
                              l.open("GET", o, !0),
                              l.send(null),
                              !0)
                            );
                          },
                        })),
                        (r.FallbackFileAssetLoader = l.extend(
                          "FallbackFileAssetLoader",
                          {
                            __construct: function () {
                              (this.__parent.__construct.call(this),
                                (this.gb = []));
                            },
                            addLoader: function (r) {
                              this.gb.push(r);
                            },
                            loadContents: function (r, i) {
                              for (let o of this.gb)
                                if (o.loadContents(r, i)) return !0;
                              return !1;
                            },
                          },
                        )));
                      let h = r.computeAlignment;
                      r.computeAlignment = function (r, i, o, s, l = 1) {
                        return h.call(this, r, i, o, s, l);
                      };
                    };
                    let o = r.onRuntimeInitialized;
                    r.onRuntimeInitialized = function () {
                      function a(r) {
                        ((this.F = r),
                          (this.yb = r.getContext("2d")),
                          (this.Db = s),
                          (this.R = []),
                          (this.ja = 0),
                          (this.clear = function () {
                            (console.assert(0 == this.ja),
                              (this.R = []),
                              l.delete(this));
                          }),
                          (this.save = function () {
                            (++this.ja, this.R.push(s.save.bind(s)));
                          }),
                          (this.restore = function () {
                            0 < this.ja &&
                              (this.R.push(s.restore.bind(s)), --this.ja);
                          }),
                          (this.transform = function (r) {
                            this.R.push(s.transform.bind(s, r));
                          }),
                          (this.align = function (r, i, o, l, h = 1) {
                            this.R.push(s.align.bind(s, r, i, o, l, h));
                          }),
                          (this.flush = function () {
                            (console.assert(0 == this.ja),
                              l.add(this),
                              i && c());
                          }));
                      }
                      function b(r) {
                        var i = {
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
                          o = r.getContext("webgl2", i);
                        o || (o = r.getContext("webgl", i));
                        var s = o,
                          l = ha(e6),
                          m = {
                            handle: l,
                            attributes: i,
                            version: i.Dc,
                            Ua: s,
                          };
                        return (
                          s.canvas && (s.canvas.pc = m),
                          (e6[l] = m),
                          (void 0 === i.Jb || i.Jb) &&
                            (function (r) {
                              if ((r || (r = tr), !r.Ub)) {
                                r.Ub = !0;
                                var i,
                                  o,
                                  s,
                                  l = r.Ua;
                                ((i = l.getExtension(
                                  "ANGLE_instanced_arrays",
                                )) &&
                                  ((l.vertexAttribDivisor = function (r, o) {
                                    i.vertexAttribDivisorANGLE(r, o);
                                  }),
                                  (l.drawArraysInstanced = function (
                                    r,
                                    o,
                                    s,
                                    l,
                                  ) {
                                    i.drawArraysInstancedANGLE(r, o, s, l);
                                  }),
                                  (l.drawElementsInstanced = function (
                                    r,
                                    o,
                                    s,
                                    l,
                                    h,
                                  ) {
                                    i.drawElementsInstancedANGLE(r, o, s, l, h);
                                  })),
                                  (o = l.getExtension(
                                    "OES_vertex_array_object",
                                  )) &&
                                    ((l.createVertexArray = function () {
                                      return o.createVertexArrayOES();
                                    }),
                                    (l.deleteVertexArray = function (r) {
                                      o.deleteVertexArrayOES(r);
                                    }),
                                    (l.bindVertexArray = function (r) {
                                      o.bindVertexArrayOES(r);
                                    }),
                                    (l.isVertexArray = function (r) {
                                      return o.isVertexArrayOES(r);
                                    })),
                                  (s = l.getExtension("WEBGL_draw_buffers")) &&
                                    (l.drawBuffers = function (r, i) {
                                      s.drawBuffersWEBGL(r, i);
                                    }),
                                  (l.Za = l.getExtension(
                                    "WEBGL_draw_instanced_base_vertex_base_instance",
                                  )),
                                  (l.hb = l.getExtension(
                                    "WEBGL_multi_draw_instanced_base_vertex_base_instance",
                                  )),
                                  2 <= r.version &&
                                    (l.$a = l.getExtension(
                                      "EXT_disjoint_timer_query_webgl2",
                                    )),
                                  (2 > r.version || !l.$a) &&
                                    (l.$a = l.getExtension(
                                      "EXT_disjoint_timer_query",
                                    )),
                                  (l.Fc = l.getExtension("WEBGL_multi_draw")),
                                  (l.getSupportedExtensions() || []).forEach(
                                    function (r) {
                                      r.includes("lose_context") ||
                                        r.includes("debug") ||
                                        l.getExtension(r);
                                    },
                                  ));
                              }
                            })(m),
                          la(l),
                          ((i = h(r.width, r.height)).Ab = l),
                          (i.F = r),
                          (i.Wa = r.width),
                          (i.Va = r.height),
                          (i.zb = o),
                          i
                        );
                      }
                      function c() {
                        if (s) {
                          var i = s.Cb,
                            o = 0,
                            h = 0,
                            m = 0,
                            w = Array(l.size),
                            _ = 0;
                          for (var A of l)
                            ((A.da = Math.min(A.F.width, i)),
                              (A.ca = Math.min(A.F.height, i)),
                              (A.Ja = A.ca * A.da),
                              (o = Math.max(o, A.da)),
                              (h = Math.max(h, A.ca)),
                              (m += A.Ja),
                              (w[_++] = A));
                          if ((l.clear(), !(0 >= m))) {
                            for (
                              o = 1 << (0 >= o ? 0 : 32 - Math.clz32(o - 1)),
                                h = 1 << (0 >= h ? 0 : 32 - Math.clz32(h - 1));
                              h * o < m;
                            )
                              o <= h ? (o *= 2) : (h *= 2);
                            for (
                              o = Math.min(o, i),
                                o = Math.min(h, i),
                                w.sort((r, i) => i.Ja - r.Ja),
                                m = new r.DynamicRectanizer(i),
                                A = 0;
                              A < w.length;
                            ) {
                              for (m.reset(o, h), _ = A; _ < w.length; ++_) {
                                var M = w[_],
                                  I = m.addRect(M.da, M.ca);
                                if (0 > I) {
                                  console.assert(_ > A);
                                  break;
                                }
                                ((M.pa = 65535 & I), (M.qa = I >> 16));
                              }
                              for (
                                M = v.push(m.drawWidth()),
                                  I = y.push(m.drawHeight()),
                                  console.assert(M >= m.drawWidth()),
                                  console.assert(I >= m.drawHeight()),
                                  console.assert(M <= i),
                                  console.assert(I <= i),
                                  s.F.width != M && (s.F.width = M),
                                  s.F.height != I && (s.F.height = I),
                                  s.clear(),
                                  M = A;
                                M < _;
                                ++M
                              ) {
                                ((I = w[M]),
                                  s.saveClipRect(
                                    I.pa,
                                    I.qa,
                                    I.pa + I.da,
                                    I.qa + I.ca,
                                  ));
                                let i = new r.Mat2D();
                                for (let r of ((i.xx = I.da / I.F.width),
                                (i.yy = I.ca / I.F.height),
                                (i.xy = i.yx = 0),
                                (i.tx = I.pa),
                                (i.ty = I.qa),
                                s.transform(i),
                                I.R))
                                  r();
                                (s.restoreClipRect(), (I.R = []));
                              }
                              for (s.flush(); A < _; ++A)
                                (((I = (M = w[A]).yb).globalCompositeOperation =
                                  "copy"),
                                  I.drawImage(
                                    s.F,
                                    M.pa,
                                    M.qa,
                                    M.da,
                                    M.ca,
                                    0,
                                    0,
                                    M.F.width,
                                    M.F.height,
                                  ));
                              A = _;
                            }
                          }
                        }
                      }
                      o && o();
                      let i = navigator.userAgent.match(/firefox|fxios/i),
                        s = null,
                        l = new Set(),
                        h = r.makeRenderer;
                      r.makeRenderer = function (r, i) {
                        return i
                          ? (s ||
                              ((i = (s = b(document.createElement("canvas")))
                                .zb),
                              (s.Cb = Math.min(
                                i.getParameter(i.MAX_RENDERBUFFER_SIZE),
                                i.getParameter(i.MAX_TEXTURE_SIZE),
                              ))),
                            new a(r))
                          : b(r);
                      };
                      let m = r.Artboard.prototype.draw;
                      r.Artboard.prototype.draw = function (r) {
                        r.R ? r.R.push(m.bind(this, r.Db)) : m.call(this, r);
                      };
                      let v = new da(),
                        y = new da(),
                        w = new ca();
                      ((r.requestAnimationFrame =
                        w.requestAnimationFrame.bind(w)),
                        (r.cancelAnimationFrame =
                          w.cancelAnimationFrame.bind(w)),
                        (r.enableFPSCounter = w.Kb.bind(w)),
                        (w.lb = c),
                        (r.resolveAnimationFrame = c));
                      let _ = r.load;
                      r.load = function (i, o, s = !0) {
                        let l = new r.FallbackFileAssetLoader();
                        return (
                          void 0 !== o && l.addLoader(o),
                          s &&
                            ((o = new r.CDNFileAssetLoader()), l.addLoader(o)),
                          Promise.resolve(_(i, l))
                        );
                      };
                      let A = r.WebGLRenderer.prototype.clear;
                      ((r.WebGLRenderer.prototype.clear = function () {
                        la(this.Ab);
                        let r = this.F;
                        ((this.Wa != r.width || this.Va != r.height) &&
                          (this.resize(r.width, r.height),
                          (this.Wa = r.width),
                          (this.Va = r.height)),
                          A.call(this));
                      }),
                        (r.decodeImage = function (i, o) {
                          o((i = r.decodeImageSkia(i)));
                        }));
                      let M = r.Renderer.prototype.align;
                      r.Renderer.prototype.align = function (
                        r,
                        i,
                        o,
                        s,
                        l = 1,
                      ) {
                        M.call(this, r, i, o, s, l);
                      };
                    };
                    var l,
                      h,
                      m,
                      v,
                      y,
                      w = Object.assign({}, r),
                      _ = "./this.program",
                      A = "object" == typeof window,
                      M = "function" == typeof importScripts,
                      I = "";
                    (A || M) &&
                      (M
                        ? (I = self.location.href)
                        : "undefined" != typeof document &&
                          document.currentScript &&
                          (I = document.currentScript.src),
                      s && (I = s),
                      (I =
                        0 !== I.indexOf("blob:")
                          ? I.substr(
                              0,
                              I.replace(/[?#].*/, "").lastIndexOf("/") + 1,
                            )
                          : ""),
                      M &&
                        (y = (r) => {
                          var i = new XMLHttpRequest();
                          return (
                            i.open("GET", r, !1),
                            (i.responseType = "arraybuffer"),
                            i.send(null),
                            new Uint8Array(i.response)
                          );
                        }),
                      (v = (r, i, o) => {
                        var s = new XMLHttpRequest();
                        (s.open("GET", r, !0),
                          (s.responseType = "arraybuffer"),
                          (s.onload = () => {
                            200 == s.status || (0 == s.status && s.response)
                              ? i(s.response)
                              : o();
                          }),
                          (s.onerror = o),
                          s.send(null));
                      }));
                    var C = r.print || console.log.bind(console),
                      F = r.printErr || console.error.bind(console);
                    (Object.assign(r, w),
                      (w = null),
                      r.thisProgram && (_ = r.thisProgram),
                      r.wasmBinary && (E = r.wasmBinary),
                      r.noExitRuntime,
                      "object" != typeof WebAssembly &&
                        wa("no native wasm support detected"));
                    var E,
                      P,
                      x,
                      T,
                      j,
                      O,
                      W,
                      D,
                      B,
                      U,
                      z,
                      $ = !1;
                    function Ba() {
                      var i = P.buffer;
                      ((r.HEAP8 = T = new Int8Array(i)),
                        (r.HEAP16 = O = new Int16Array(i)),
                        (r.HEAP32 = D = new Int32Array(i)),
                        (r.HEAPU8 = j = new Uint8Array(i)),
                        (r.HEAPU16 = W = new Uint16Array(i)),
                        (r.HEAPU32 = B = new Uint32Array(i)),
                        (r.HEAPF32 = U = new Float32Array(i)),
                        (r.HEAPF64 = z = new Float64Array(i)));
                    }
                    var G,
                      H = [],
                      q = [],
                      J = [],
                      ee = 0,
                      et = null,
                      en = null;
                    function wa(i) {
                      throw (
                        r.onAbort && r.onAbort(i),
                        F((i = "Aborted(" + i + ")")),
                        ($ = !0),
                        (i = new WebAssembly.RuntimeError(
                          i + ". Build with -sASSERTIONS for more info.",
                        )),
                        m(i),
                        i
                      );
                    }
                    function Ka(r) {
                      return r.startsWith(
                        "data:application/octet-stream;base64,",
                      );
                    }
                    if (!Ka((ei = "webgl_advanced.wasm"))) {
                      var er = ei;
                      ei = r.locateFile ? r.locateFile(er, I) : I + er;
                    }
                    function Na(r) {
                      if (r == ei && E) return new Uint8Array(E);
                      if (y) return y(r);
                      throw "both async and sync fetching of the wasm failed";
                    }
                    function Pa(r, i, o) {
                      return (function (r) {
                        if (!E && (A || M)) {
                          if (
                            "function" == typeof fetch &&
                            !r.startsWith("file://")
                          )
                            return fetch(r, { credentials: "same-origin" })
                              .then((i) => {
                                if (!i.ok)
                                  throw (
                                    "failed to load wasm binary file at '" +
                                    r +
                                    "'"
                                  );
                                return i.arrayBuffer();
                              })
                              .catch(() => Na(r));
                          if (v)
                            return new Promise((i, o) => {
                              v(r, (r) => i(new Uint8Array(r)), o);
                            });
                        }
                        return Promise.resolve().then(() => Na(r));
                      })(r)
                        .then((r) => WebAssembly.instantiate(r, i))
                        .then((r) => r)
                        .then(o, (r) => {
                          (F("failed to asynchronously prepare wasm: " + r),
                            wa(r));
                        });
                    }
                    var ei,
                      ea,
                      eo,
                      es = {
                        717160: (r, i, o, s, l) => {
                          if (
                            "undefined" == typeof window ||
                            void 0 ===
                              (window.AudioContext || window.webkitAudioContext)
                          )
                            return 0;
                          if (void 0 === window.h) {
                            ((window.h = { Ea: 0 }),
                              (window.h.H = {}),
                              (window.h.H.Ca = r),
                              (window.h.H.capture = i),
                              (window.h.H.La = o),
                              (window.h.ha = {}),
                              (window.h.ha.stopped = s),
                              (window.h.ha.tb = l));
                            let h = window.h;
                            ((h.C = []),
                              (h.nc = function (r) {
                                for (var i = 0; i < h.C.length; ++i)
                                  if (null == h.C[i]) return ((h.C[i] = r), i);
                                return (h.C.push(r), h.C.length - 1);
                              }),
                              (h.xb = function (r) {
                                for (h.C[r] = null; 0 < h.C.length; )
                                  if (null == h.C[h.C.length - 1]) h.C.pop();
                                  else break;
                              }),
                              (h.Kc = function (r) {
                                for (var i = 0; i < h.C.length; ++i)
                                  if (h.C[i] == r) return h.xb(i);
                              }),
                              (h.ta = function (r) {
                                return h.C[r];
                              }),
                              (h.Ta = ["touchend", "click"]),
                              (h.unlock = function () {
                                for (var r = 0; r < h.C.length; ++r) {
                                  var i = h.C[r];
                                  null != i &&
                                    null != i.I &&
                                    i.state === h.ha.tb &&
                                    i.I.resume().then(
                                      () => {
                                        tM(i.mb);
                                      },
                                      (r) => {
                                        console.error(
                                          "Failed to resume audiocontext",
                                          r,
                                        );
                                      },
                                    );
                                }
                                h.Ta.map(function (r) {
                                  document.removeEventListener(r, h.unlock, !0);
                                });
                              }),
                              h.Ta.map(function (r) {
                                document.addEventListener(r, h.unlock, !0);
                              }));
                          }
                          return ((window.h.Ea += 1), 1);
                        },
                        719338: () => {
                          void 0 !== window.h &&
                            (window.h.Ta.map(function (r) {
                              document.removeEventListener(
                                r,
                                window.h.unlock,
                                !0,
                              );
                            }),
                            --window.h.Ea,
                            0 === window.h.Ea && delete window.h);
                        },
                        719642: () =>
                          void 0 !== navigator.mediaDevices &&
                          void 0 !== navigator.mediaDevices.getUserMedia,
                        719746: () => {
                          try {
                            var r = new (
                                window.AudioContext || window.webkitAudioContext
                              )(),
                              i = r.sampleRate;
                            return (r.close(), i);
                          } catch (r) {
                            return 0;
                          }
                        },
                        719917: (r, i, o, s, l, h) => {
                          if (void 0 === window.h) return -1;
                          var m = {},
                            v = {};
                          return (
                            r == window.h.H.Ca && 0 != o && (v.sampleRate = o),
                            (m.I = new (
                              window.AudioContext || window.webkitAudioContext
                            )(v)),
                            m.I.suspend(),
                            (m.state = window.h.ha.stopped),
                            (o = 0),
                            r != window.h.H.Ca && (o = i),
                            (m.X = m.I.createScriptProcessor(s, o, i)),
                            (m.X.onaudioprocess = function (o) {
                              if (
                                ((null == m.ua || 0 == m.ua.length) &&
                                  (m.ua = new Float32Array(U.buffer, l, s * i)),
                                r == window.h.H.capture || r == window.h.H.La)
                              ) {
                                for (var v = 0; v < i; v += 1)
                                  for (
                                    var y = o.inputBuffer.getChannelData(v),
                                      w = m.ua,
                                      _ = 0;
                                    _ < s;
                                    _ += 1
                                  )
                                    w[_ * i + v] = y[_];
                                tI(h, s, l);
                              }
                              if (r == window.h.H.Ca || r == window.h.H.La)
                                for (
                                  tR(h, s, l), v = 0;
                                  v < o.outputBuffer.numberOfChannels;
                                  ++v
                                )
                                  for (
                                    y = o.outputBuffer.getChannelData(v),
                                      w = m.ua,
                                      _ = 0;
                                    _ < s;
                                    _ += 1
                                  )
                                    y[_] = w[_ * i + v];
                              else
                                for (
                                  v = 0;
                                  v < o.outputBuffer.numberOfChannels;
                                  ++v
                                )
                                  o.outputBuffer.getChannelData(v).fill(0);
                            }),
                            (r != window.h.H.capture && r != window.h.H.La) ||
                              navigator.mediaDevices
                                .getUserMedia({ audio: !0, video: !1 })
                                .then(function (r) {
                                  ((m.Fa = m.I.createMediaStreamSource(r)),
                                    m.Fa.connect(m.X),
                                    m.X.connect(m.I.destination));
                                })
                                .catch(function (r) {
                                  console.log("Failed to get user media: " + r);
                                }),
                            r == window.h.H.Ca && m.X.connect(m.I.destination),
                            (m.mb = h),
                            window.h.nc(m)
                          );
                        },
                        722794: (r) => window.h.ta(r).I.sampleRate,
                        722867: (r) => {
                          (void 0 !== (r = window.h.ta(r)).X &&
                            ((r.X.onaudioprocess = function () {}),
                            r.X.disconnect(),
                            (r.X = void 0)),
                            void 0 !== r.Fa &&
                              (r.Fa.disconnect(), (r.Fa = void 0)),
                            r.I.close(),
                            (r.I = void 0),
                            (r.mb = void 0));
                        },
                        723267: (r) => {
                          window.h.xb(r);
                        },
                        723317: (r) => {
                          ((r = window.h.ta(r)).I.resume(),
                            (r.state = window.h.ha.tb));
                        },
                        723456: (r) => {
                          ((r = window.h.ta(r)).I.suspend(),
                            (r.state = window.h.ha.stopped));
                        },
                      },
                      Xa = (i) => {
                        for (; 0 < i.length; ) i.shift()(r);
                      },
                      Ya = (r, i) => {
                        for (var o = 0, s = r.length - 1; 0 <= s; s--) {
                          var l = r[s];
                          "." === l
                            ? r.splice(s, 1)
                            : ".." === l
                              ? (r.splice(s, 1), o++)
                              : o && (r.splice(s, 1), o--);
                        }
                        if (i) for (; o; o--) r.unshift("..");
                        return r;
                      },
                      Za = (r) => {
                        var i = "/" === r.charAt(0),
                          o = "/" === r.substr(-1);
                        return (
                          (r = Ya(
                            r.split("/").filter((r) => !!r),
                            !i,
                          ).join("/")) ||
                            i ||
                            (r = "."),
                          r && o && (r += "/"),
                          (i ? "/" : "") + r
                        );
                      },
                      $a = (r) => {
                        var i =
                          /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
                            .exec(r)
                            .slice(1);
                        return ((r = i[0]), (i = i[1]), r || i)
                          ? (i && (i = i.substr(0, i.length - 1)), r + i)
                          : ".";
                      },
                      ab = (r) => {
                        if ("/" === r) return "/";
                        var i = (r = (r = Za(r)).replace(
                          /\/$/,
                          "",
                        )).lastIndexOf("/");
                        return -1 === i ? r : r.substr(i + 1);
                      },
                      bb = () => {
                        if (
                          "object" == typeof crypto &&
                          "function" == typeof crypto.getRandomValues
                        )
                          return (r) => crypto.getRandomValues(r);
                        wa("initRandomDevice");
                      },
                      cb = (r) => (cb = bb())(r);
                    function db() {
                      for (
                        var r = "", i = !1, o = arguments.length - 1;
                        -1 <= o && !i;
                        o--
                      ) {
                        if (
                          ((i = 0 <= o ? arguments[o] : "/"),
                          "string" != typeof i)
                        )
                          throw TypeError(
                            "Arguments to path.resolve must be strings",
                          );
                        if (!i) return "";
                        ((r = i + "/" + r), (i = "/" === i.charAt(0)));
                      }
                      return (
                        (r = Ya(
                          r.split("/").filter((r) => !!r),
                          !i,
                        ).join("/")),
                        (i ? "/" : "") + r || "."
                      );
                    }
                    var eu =
                        "undefined" != typeof TextDecoder
                          ? new TextDecoder("utf8")
                          : void 0,
                      fb = (r, i, o) => {
                        var s = i + o;
                        for (o = i; r[o] && !(o >= s); ) ++o;
                        if (16 < o - i && r.buffer && eu)
                          return eu.decode(r.subarray(i, o));
                        for (s = ""; i < o; ) {
                          var l = r[i++];
                          if (128 & l) {
                            var h = 63 & r[i++];
                            if (192 == (224 & l))
                              s += String.fromCharCode(((31 & l) << 6) | h);
                            else {
                              var m = 63 & r[i++];
                              65536 >
                              (l =
                                224 == (240 & l)
                                  ? ((15 & l) << 12) | (h << 6) | m
                                  : ((7 & l) << 18) |
                                    (h << 12) |
                                    (m << 6) |
                                    (63 & r[i++]))
                                ? (s += String.fromCharCode(l))
                                : ((l -= 65536),
                                  (s += String.fromCharCode(
                                    55296 | (l >> 10),
                                    56320 | (1023 & l),
                                  )));
                            }
                          } else s += String.fromCharCode(l);
                        }
                        return s;
                      },
                      el = [],
                      hb = (r) => {
                        for (var i = 0, o = 0; o < r.length; ++o) {
                          var s = r.charCodeAt(o);
                          127 >= s
                            ? i++
                            : 2047 >= s
                              ? (i += 2)
                              : 55296 <= s && 57343 >= s
                                ? ((i += 4), ++o)
                                : (i += 3);
                        }
                        return i;
                      },
                      ib = (r, i, o, s) => {
                        if (!(0 < s)) return 0;
                        var l = o;
                        s = o + s - 1;
                        for (var h = 0; h < r.length; ++h) {
                          var m = r.charCodeAt(h);
                          if (
                            (55296 <= m &&
                              57343 >= m &&
                              (m =
                                (65536 + ((1023 & m) << 10)) |
                                (1023 & r.charCodeAt(++h))),
                            127 >= m)
                          ) {
                            if (o >= s) break;
                            i[o++] = m;
                          } else {
                            if (2047 >= m) {
                              if (o + 1 >= s) break;
                              i[o++] = 192 | (m >> 6);
                            } else {
                              if (65535 >= m) {
                                if (o + 2 >= s) break;
                                i[o++] = 224 | (m >> 12);
                              } else {
                                if (o + 3 >= s) break;
                                ((i[o++] = 240 | (m >> 18)),
                                  (i[o++] = 128 | ((m >> 12) & 63)));
                              }
                              i[o++] = 128 | ((m >> 6) & 63);
                            }
                            i[o++] = 128 | (63 & m);
                          }
                        }
                        return ((i[o] = 0), o - l);
                      };
                    function jb(r, i) {
                      var o = Array(hb(r) + 1);
                      return (
                        (r = ib(r, o, 0, o.length)),
                        i && (o.length = r),
                        o
                      );
                    }
                    var ef = [];
                    function lb(r, i) {
                      ((ef[r] = { input: [], D: [], T: i }), mb(r, eh));
                    }
                    var eh = {
                      open: function (r) {
                        var i = ef[r.node.Da];
                        if (!i) throw new eR(43);
                        ((r.s = i), (r.seekable = !1));
                      },
                      close: function (r) {
                        r.s.T.sa(r.s);
                      },
                      sa: function (r) {
                        r.s.T.sa(r.s);
                      },
                      read: function (r, i, o, s) {
                        if (!r.s || !r.s.T.fb) throw new eR(60);
                        for (var l = 0, h = 0; h < s; h++) {
                          try {
                            var m = r.s.T.fb(r.s);
                          } catch (r) {
                            throw new eR(29);
                          }
                          if (void 0 === m && 0 === l) throw new eR(6);
                          if (null == m) break;
                          (l++, (i[o + h] = m));
                        }
                        return (l && (r.node.timestamp = Date.now()), l);
                      },
                      write: function (r, i, o, s) {
                        if (!r.s || !r.s.T.Oa) throw new eR(60);
                        try {
                          for (var l = 0; l < s; l++) r.s.T.Oa(r.s, i[o + l]);
                        } catch (r) {
                          throw new eR(29);
                        }
                        return (s && (r.node.timestamp = Date.now()), l);
                      },
                    };
                    function qb(r, i) {
                      var o = r.j ? r.j.length : 0;
                      o >= i ||
                        ((i = Math.max(
                          i,
                          (o * (1048576 > o ? 2 : 1.125)) >>> 0,
                        )),
                        0 != o && (i = Math.max(i, 256)),
                        (o = r.j),
                        (r.j = new Uint8Array(i)),
                        0 < r.v && r.j.set(o.subarray(0, r.v), 0));
                    }
                    var ep,
                      em,
                      ev,
                      eb,
                      eg = {
                        N: null,
                        S: () => eg.createNode(null, "/", 16895, 0),
                        createNode(r, i, o, s) {
                          if (24576 == (61440 & o) || 4096 == (61440 & o))
                            throw new eR(63);
                          return (
                            eg.N ||
                              (eg.N = {
                                dir: {
                                  node: {
                                    W: eg.l.W,
                                    O: eg.l.O,
                                    ka: eg.l.ka,
                                    Aa: eg.l.Aa,
                                    rb: eg.l.rb,
                                    wb: eg.l.wb,
                                    sb: eg.l.sb,
                                    pb: eg.l.pb,
                                    Ga: eg.l.Ga,
                                  },
                                  stream: { $: eg.m.$ },
                                },
                                file: {
                                  node: { W: eg.l.W, O: eg.l.O },
                                  stream: {
                                    $: eg.m.$,
                                    read: eg.m.read,
                                    write: eg.m.write,
                                    ra: eg.m.ra,
                                    ib: eg.m.ib,
                                    kb: eg.m.kb,
                                  },
                                },
                                link: {
                                  node: { W: eg.l.W, O: eg.l.O, la: eg.l.la },
                                  stream: {},
                                },
                                Xa: {
                                  node: { W: eg.l.W, O: eg.l.O },
                                  stream: eF,
                                },
                              }),
                            16384 == (61440 & (o = sb(r, i, o, s)).mode)
                              ? ((o.l = eg.N.dir.node),
                                (o.m = eg.N.dir.stream),
                                (o.j = {}))
                              : 32768 == (61440 & o.mode)
                                ? ((o.l = eg.N.file.node),
                                  (o.m = eg.N.file.stream),
                                  (o.v = 0),
                                  (o.j = null))
                                : 40960 == (61440 & o.mode)
                                  ? ((o.l = eg.N.link.node),
                                    (o.m = eg.N.link.stream))
                                  : 8192 == (61440 & o.mode) &&
                                    ((o.l = eg.N.Xa.node),
                                    (o.m = eg.N.Xa.stream)),
                            (o.timestamp = Date.now()),
                            r && ((r.j[i] = o), (r.timestamp = o.timestamp)),
                            o
                          );
                        },
                        Ac: (r) =>
                          r.j
                            ? r.j.subarray
                              ? r.j.subarray(0, r.v)
                              : new Uint8Array(r.j)
                            : new Uint8Array(0),
                        l: {
                          W(r) {
                            var i = {};
                            return (
                              (i.zc = 8192 == (61440 & r.mode) ? r.id : 1),
                              (i.Cc = r.id),
                              (i.mode = r.mode),
                              (i.Gc = 1),
                              (i.uid = 0),
                              (i.Bc = 0),
                              (i.Da = r.Da),
                              16384 == (61440 & r.mode)
                                ? (i.size = 4096)
                                : 32768 == (61440 & r.mode)
                                  ? (i.size = r.v)
                                  : 40960 == (61440 & r.mode)
                                    ? (i.size = r.link.length)
                                    : (i.size = 0),
                              (i.qc = new Date(r.timestamp)),
                              (i.Ec = new Date(r.timestamp)),
                              (i.xc = new Date(r.timestamp)),
                              (i.Eb = 4096),
                              (i.rc = Math.ceil(i.size / i.Eb)),
                              i
                            );
                          },
                          O(r, i) {
                            if (
                              (void 0 !== i.mode && (r.mode = i.mode),
                              void 0 !== i.timestamp &&
                                (r.timestamp = i.timestamp),
                              void 0 !== i.size && ((i = i.size), r.v != i))
                            ) {
                              if (0 == i) ((r.j = null), (r.v = 0));
                              else {
                                var o = r.j;
                                ((r.j = new Uint8Array(i)),
                                  o && r.j.set(o.subarray(0, Math.min(i, r.v))),
                                  (r.v = i));
                              }
                            }
                          },
                          ka() {
                            throw eC[44];
                          },
                          Aa: (r, i, o, s) => eg.createNode(r, i, o, s),
                          rb(r, i, o) {
                            if (16384 == (61440 & r.mode)) {
                              try {
                                var s = ub(i, o);
                              } catch (r) {}
                              if (s) for (var l in s.j) throw new eR(55);
                            }
                            (delete r.parent.j[r.name],
                              (r.parent.timestamp = Date.now()),
                              (r.name = o),
                              (i.j[o] = r),
                              (i.timestamp = r.parent.timestamp),
                              (r.parent = i));
                          },
                          wb(r, i) {
                            (delete r.j[i], (r.timestamp = Date.now()));
                          },
                          sb(r, i) {
                            var o,
                              s = ub(r, i);
                            for (o in s.j) throw new eR(55);
                            (delete r.j[i], (r.timestamp = Date.now()));
                          },
                          pb(r) {
                            var i,
                              o = [".", ".."];
                            for (i in r.j) r.j.hasOwnProperty(i) && o.push(i);
                            return o;
                          },
                          Ga: (r, i, o) => (
                            ((r = eg.createNode(r, i, 41471, 0)).link = o),
                            r
                          ),
                          la(r) {
                            if (40960 != (61440 & r.mode)) throw new eR(28);
                            return r.link;
                          },
                        },
                        m: {
                          read(r, i, o, s, l) {
                            var h = r.node.j;
                            if (l >= r.node.v) return 0;
                            if (
                              8 < (r = Math.min(r.node.v - l, s)) &&
                              h.subarray
                            )
                              i.set(h.subarray(l, l + r), o);
                            else for (s = 0; s < r; s++) i[o + s] = h[l + s];
                            return r;
                          },
                          write(r, i, o, s, l, h) {
                            if ((i.buffer === T.buffer && (h = !1), !s))
                              return 0;
                            if (
                              (((r = r.node).timestamp = Date.now()),
                              i.subarray && (!r.j || r.j.subarray))
                            ) {
                              if (h)
                                return (
                                  (r.j = i.subarray(o, o + s)),
                                  (r.v = s)
                                );
                              if (0 === r.v && 0 === l)
                                return ((r.j = i.slice(o, o + s)), (r.v = s));
                              if (l + s <= r.v)
                                return (r.j.set(i.subarray(o, o + s), l), s);
                            }
                            if ((qb(r, l + s), r.j.subarray && i.subarray))
                              r.j.set(i.subarray(o, o + s), l);
                            else for (h = 0; h < s; h++) r.j[l + h] = i[o + h];
                            return ((r.v = Math.max(r.v, l + s)), s);
                          },
                          $(r, i, o) {
                            if (
                              (1 === o
                                ? (i += r.position)
                                : 2 === o &&
                                  32768 == (61440 & r.node.mode) &&
                                  (i += r.node.v),
                              0 > i)
                            )
                              throw new eR(28);
                            return i;
                          },
                          ra(r, i, o) {
                            (qb(r.node, i + o),
                              (r.node.v = Math.max(r.node.v, i + o)));
                          },
                          ib(r, i, o, s, l) {
                            if (32768 != (61440 & r.node.mode))
                              throw new eR(43);
                            if (
                              ((r = r.node.j), 2 & l || r.buffer !== T.buffer)
                            ) {
                              if (
                                ((0 < o || o + i < r.length) &&
                                  (r = r.subarray
                                    ? r.subarray(o, o + i)
                                    : Array.prototype.slice.call(r, o, o + i)),
                                (o = !0),
                                (l = vb(
                                  65536,
                                  (i = 65536 * Math.ceil(i / 65536)),
                                ))
                                  ? (j.fill(0, l, l + i), (i = l))
                                  : (i = 0),
                                !i)
                              )
                                throw new eR(48);
                              T.set(r, i);
                            } else ((o = !1), (i = r.byteOffset));
                            return { o: i, L: o };
                          },
                          kb: (r, i, o, s) => (
                            eg.m.write(r, i, 0, s, o, !1),
                            0
                          ),
                        },
                      },
                      ey = null,
                      ew = {},
                      e_ = [],
                      eA = 1,
                      eM = null,
                      eI = !0,
                      eR = null,
                      eC = {},
                      Eb = (r, i = {}) => {
                        if (!(r = db(r))) return { path: "", node: null };
                        if (8 < (i = Object.assign({ cb: !0, Qa: 0 }, i)).Qa)
                          throw new eR(32);
                        r = r.split("/").filter((r) => !!r);
                        for (var o = ey, s = "/", l = 0; l < r.length; l++) {
                          var h = l === r.length - 1;
                          if (h && i.parent) break;
                          if (
                            ((o = ub(o, r[l])),
                            (s = Za(s + "/" + r[l])),
                            o.Ba && (!h || (h && i.cb)) && (o = o.Ba.root),
                            !h || i.bb)
                          ) {
                            for (h = 0; 40960 == (61440 & o.mode); )
                              if (
                                ((o = Db(s)),
                                (o = Eb((s = db($a(s), o)), {
                                  Qa: i.Qa + 1,
                                }).node),
                                40 < h++)
                              )
                                throw new eR(32);
                          }
                        }
                        return { path: s, node: o };
                      },
                      Fb = (r) => {
                        for (var i; ; ) {
                          if (r === r.parent)
                            return (
                              (r = r.S.jb),
                              i
                                ? "/" !== r[r.length - 1]
                                  ? `${r}/${i}`
                                  : r + i
                                : r
                            );
                          ((i = i ? `${r.name}/${i}` : r.name), (r = r.parent));
                        }
                      },
                      Hb = (r, i) => {
                        for (var o = 0, s = 0; s < i.length; s++)
                          o = ((o << 5) - o + i.charCodeAt(s)) | 0;
                        return ((r + o) >>> 0) % eM.length;
                      },
                      ub = (r, i) => {
                        var o;
                        if ((o = (o = Ib(r, "x")) ? o : r.l.ka ? 0 : 2))
                          throw new eR(o, r);
                        for (o = eM[Hb(r.id, i)]; o; o = o.ac) {
                          var s = o.name;
                          if (o.parent.id === r.id && s === i) return o;
                        }
                        return r.l.ka(r, i);
                      },
                      sb = (r, i, o, s) => (
                        (i = Hb((r = new Jb(r, i, o, s)).parent.id, r.name)),
                        (r.ac = eM[i]),
                        (eM[i] = r)
                      ),
                      Kb = (r) => {
                        var i = ["r", "w", "rw"][3 & r];
                        return (512 & r && (i += "w"), i);
                      },
                      Ib = (r, i) =>
                        eI
                          ? 0
                          : i.includes("r") && !(292 & r.mode)
                            ? 2
                            : (i.includes("w") && !(146 & r.mode)) ||
                                (i.includes("x") && !(73 & r.mode))
                              ? 2
                              : 0,
                      Lb = (r, i) => {
                        try {
                          return (ub(r, i), 20);
                        } catch (r) {}
                        return Ib(r, "wx");
                      },
                      Mb = () => {
                        for (var r = 0; 4096 >= r; r++) if (!e_[r]) return r;
                        throw new eR(33);
                      },
                      Nb = (r) => {
                        if (!(r = e_[r])) throw new eR(8);
                        return r;
                      },
                      Pb = (r, i = -1) => (
                        ev ||
                          (((ev = function () {
                            this.h = {};
                          }).prototype = {}),
                          Object.defineProperties(ev.prototype, {
                            object: {
                              get() {
                                return this.node;
                              },
                              set(r) {
                                this.node = r;
                              },
                            },
                            flags: {
                              get() {
                                return this.h.flags;
                              },
                              set(r) {
                                this.h.flags = r;
                              },
                            },
                            position: {
                              get() {
                                return this.h.position;
                              },
                              set(r) {
                                this.h.position = r;
                              },
                            },
                          })),
                        (r = Object.assign(new ev(), r)),
                        -1 == i && (i = Mb()),
                        (r.V = i),
                        (e_[i] = r)
                      ),
                      eF = {
                        open: (r) => {
                          ((r.m = ew[r.node.Da].m), r.m.open && r.m.open(r));
                        },
                        $: () => {
                          throw new eR(70);
                        },
                      },
                      mb = (r, i) => {
                        ew[r] = { m: i };
                      },
                      Qb = (r, i) => {
                        var o = "/" === i,
                          s = !i;
                        if (o && ey) throw new eR(10);
                        if (!o && !s) {
                          var l = Eb(i, { cb: !1 });
                          if (((i = l.path), (l = l.node).Ba)) throw new eR(10);
                          if (16384 != (61440 & l.mode)) throw new eR(54);
                        }
                        ((i = { type: r, Ic: {}, jb: i, $b: [] }),
                          ((r = r.S(i)).S = i),
                          (i.root = r),
                          o
                            ? (ey = r)
                            : l && ((l.Ba = i), l.S && l.S.$b.push(i)));
                      },
                      Rb = (r, i, o) => {
                        var s = Eb(r, { parent: !0 }).node;
                        if (!(r = ab(r)) || "." === r || ".." === r)
                          throw new eR(28);
                        var l = Lb(s, r);
                        if (l) throw new eR(l);
                        if (!s.l.Aa) throw new eR(63);
                        return s.l.Aa(s, r, i, o);
                      },
                      Sb = (r, i, o) => {
                        (void 0 === o && ((o = i), (i = 438)),
                          Rb(r, 8192 | i, o));
                      },
                      Tb = (r, i) => {
                        if (!db(r)) throw new eR(44);
                        var o = Eb(i, { parent: !0 }).node;
                        if (!o) throw new eR(44);
                        var s = Lb(o, (i = ab(i)));
                        if (s) throw new eR(s);
                        if (!o.l.Ga) throw new eR(63);
                        o.l.Ga(o, i, r);
                      },
                      Db = (r) => {
                        if (!(r = Eb(r).node)) throw new eR(44);
                        if (!r.l.la) throw new eR(28);
                        return db(Fb(r.parent), r.l.la(r));
                      },
                      Vb = (i, o, s) => {
                        if ("" === i) throw new eR(44);
                        if ("string" == typeof o) {
                          var l = {
                            r: 0,
                            "r+": 2,
                            w: 577,
                            "w+": 578,
                            a: 1089,
                            "a+": 1090,
                          }[o];
                          if (void 0 === l)
                            throw Error(`Unknown file open mode: ${o}`);
                          o = l;
                        }
                        if (
                          ((s =
                            64 & o
                              ? ((void 0 === s ? 438 : s) & 4095) | 32768
                              : 0),
                          "object" == typeof i)
                        )
                          var h = i;
                        else {
                          i = Za(i);
                          try {
                            h = Eb(i, { bb: !(131072 & o) }).node;
                          } catch (r) {}
                        }
                        if (((l = !1), 64 & o)) {
                          if (h) {
                            if (128 & o) throw new eR(20);
                          } else ((h = Rb(i, s, 0)), (l = !0));
                        }
                        if (!h) throw new eR(44);
                        if (
                          (8192 == (61440 & h.mode) && (o &= -513),
                          65536 & o && 16384 != (61440 & h.mode))
                        )
                          throw new eR(54);
                        if (
                          !l &&
                          (s = h
                            ? 40960 == (61440 & h.mode)
                              ? 32
                              : 16384 == (61440 & h.mode) &&
                                  ("r" !== Kb(o) || 512 & o)
                                ? 31
                                : Ib(h, Kb(o))
                            : 44)
                        )
                          throw new eR(s);
                        if (512 & o && !l) {
                          if (
                            !(s =
                              "string" == typeof (s = h)
                                ? Eb(s, { bb: !0 }).node
                                : s).l.O
                          )
                            throw new eR(63);
                          if (16384 == (61440 & s.mode)) throw new eR(31);
                          if (32768 != (61440 & s.mode)) throw new eR(28);
                          if ((l = Ib(s, "w"))) throw new eR(l);
                          s.l.O(s, { size: 0, timestamp: Date.now() });
                        }
                        return (
                          (o &= -131713),
                          (h = Pb({
                            node: h,
                            path: Fb(h),
                            flags: o,
                            seekable: !0,
                            position: 0,
                            m: h.m,
                            oc: [],
                            error: !1,
                          })).m.open && h.m.open(h),
                          !r.logReadFiles ||
                            1 & o ||
                            (eb || (eb = {}), i in eb || (eb[i] = 1)),
                          h
                        );
                      },
                      Wb = (r, i, o) => {
                        if (null === r.V) throw new eR(8);
                        if (!r.seekable || !r.m.$) throw new eR(70);
                        if (0 != o && 1 != o && 2 != o) throw new eR(28);
                        ((r.position = r.m.$(r, i, o)), (r.oc = []));
                      },
                      Xb = () => {
                        eR ||
                          (((eR = function (r, i) {
                            ((this.name = "ErrnoError"),
                              (this.node = i),
                              (this.dc = function (r) {
                                this.Z = r;
                              }),
                              this.dc(r),
                              (this.message = "FS error"));
                          }).prototype = Error()),
                          (eR.prototype.constructor = eR),
                          [44].forEach((r) => {
                            ((eC[r] = new eR(r)),
                              (eC[r].stack = "<generic error, no stack>"));
                          }));
                      },
                      $b = (r, i, o) => {
                        r = Za("/dev/" + r);
                        var s,
                          l = ((s = 0), i && (s |= 365), o && (s |= 146), s);
                        em || (em = 64);
                        var h = (em++ << 8) | 0;
                        (mb(h, {
                          open: (r) => {
                            r.seekable = !1;
                          },
                          close: () => {
                            o && o.buffer && o.buffer.length && o(10);
                          },
                          read: (r, o, s, l) => {
                            for (var h = 0, m = 0; m < l; m++) {
                              try {
                                var v = i();
                              } catch (r) {
                                throw new eR(29);
                              }
                              if (void 0 === v && 0 === h) throw new eR(6);
                              if (null == v) break;
                              (h++, (o[s + m] = v));
                            }
                            return (h && (r.node.timestamp = Date.now()), h);
                          },
                          write: (r, i, s, l) => {
                            for (var h = 0; h < l; h++)
                              try {
                                o(i[s + h]);
                              } catch (r) {
                                throw new eR(29);
                              }
                            return (l && (r.node.timestamp = Date.now()), h);
                          },
                        }),
                          Sb(r, l, h));
                      },
                      eE = {},
                      eL = void 0;
                    function cc() {
                      return D[((eL += 4) - 4) >> 2];
                    }
                    function dc(r) {
                      if (void 0 === r) return "_unknown";
                      var i = (r = r.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(
                        0,
                      );
                      return 48 <= i && 57 >= i ? `_${r}` : r;
                    }
                    function ec(r, i) {
                      return {
                        [(r = dc(r))]: function () {
                          return i.apply(this, arguments);
                        },
                      }[r];
                    }
                    function fc() {
                      ((this.L = [void 0]), (this.eb = []));
                    }
                    var eP = new fc(),
                      eS = void 0;
                    function K(r) {
                      throw new eS(r);
                    }
                    var hc = (r) => (
                        r || K("Cannot use deleted val. handle = " + r),
                        eP.get(r).value
                      ),
                      ic = (r) => {
                        switch (r) {
                          case void 0:
                            return 1;
                          case null:
                            return 2;
                          case !0:
                            return 3;
                          case !1:
                            return 4;
                          default:
                            return eP.ra({ qb: 1, value: r });
                        }
                      };
                    function jc(r) {
                      var i = Error,
                        o = ec(r, function (i) {
                          ((this.name = r),
                            (this.message = i),
                            void 0 !== (i = Error(i).stack) &&
                              (this.stack =
                                this.toString() +
                                "\n" +
                                i.replace(/^Error(:[^\n]*)?\n/, "")));
                        });
                      return (
                        (o.prototype = Object.create(i.prototype)),
                        (o.prototype.constructor = o),
                        (o.prototype.toString = function () {
                          return void 0 === this.message
                            ? this.name
                            : `${this.name}: ${this.message}`;
                        }),
                        o
                      );
                    }
                    var eV = void 0,
                      ex = void 0;
                    function L(r) {
                      for (var i = ""; j[r]; ) i += ex[j[r++]];
                      return i;
                    }
                    var ek = [];
                    function nc() {
                      for (; ek.length; ) {
                        var r = ek.pop();
                        ((r.g.ga = !1), r.delete());
                      }
                    }
                    var eT = void 0,
                      ej = {};
                    function qc(r, i) {
                      for (
                        void 0 === i && K("ptr should not be undefined");
                        r.A;
                      )
                        ((i = r.na(i)), (r = r.A));
                      return i;
                    }
                    var eO = {};
                    function sc(r) {
                      var i = L((r = tc(r)));
                      return (uc(r), i);
                    }
                    function vc(r, i) {
                      var o = eO[r];
                      return (
                        void 0 === o && K(i + " has unknown type " + sc(r)),
                        o
                      );
                    }
                    function wc() {}
                    var eW = !1;
                    function yc(r) {
                      (--r.count.value,
                        0 === r.count.value &&
                          (r.G ? r.K.U(r.G) : r.u.i.U(r.o)));
                    }
                    var eD = {},
                      eB = void 0;
                    function Dc(r) {
                      throw new eB(r);
                    }
                    function Ec(r, i) {
                      return (
                        (i.u && i.o) ||
                          Dc("makeClassHandle requires ptr and ptrType"),
                        !!i.K != !!i.G &&
                          Dc(
                            "Both smartPtrType and smartPtr must be specified",
                          ),
                        (i.count = { value: 1 }),
                        Fc(Object.create(r, { g: { value: i } }))
                      );
                    }
                    function Fc(r) {
                      return "undefined" == typeof FinalizationRegistry
                        ? ((Fc = (r) => r), r)
                        : ((eW = new FinalizationRegistry((r) => {
                            yc(r.g);
                          })),
                          (Fc = (r) => {
                            var i = r.g;
                            return (i.G && eW.register(r, { g: i }, r), r);
                          }),
                          (wc = (r) => {
                            eW.unregister(r);
                          }),
                          Fc(r));
                    }
                    var eU = {};
                    function Hc(r) {
                      for (; r.length; ) {
                        var i = r.pop();
                        r.pop()(i);
                      }
                    }
                    function Ic(r) {
                      return this.fromWireType(D[r >> 2]);
                    }
                    var eN = {},
                      ez = {};
                    function N(r, i, o) {
                      function d(i) {
                        (i = o(i)).length !== r.length &&
                          Dc("Mismatched type converter count");
                        for (var s = 0; s < r.length; ++s) Lc(r[s], i[s]);
                      }
                      r.forEach(function (r) {
                        ez[r] = i;
                      });
                      var s = Array(i.length),
                        l = [],
                        h = 0;
                      (i.forEach((r, i) => {
                        eO.hasOwnProperty(r)
                          ? (s[i] = eO[r])
                          : (l.push(r),
                            eN.hasOwnProperty(r) || (eN[r] = []),
                            eN[r].push(() => {
                              ((s[i] = eO[r]), ++h === l.length && d(s));
                            }));
                      }),
                        0 === l.length && d(s));
                    }
                    function Mc(r) {
                      switch (r) {
                        case 1:
                          return 0;
                        case 2:
                          return 1;
                        case 4:
                          return 2;
                        case 8:
                          return 3;
                        default:
                          throw TypeError(`Unknown type size: ${r}`);
                      }
                    }
                    function Lc(r, i, o = {}) {
                      if (!("argPackAdvance" in i))
                        throw TypeError(
                          "registerType registeredInstance requires argPackAdvance",
                        );
                      !(function (r, i, o = {}) {
                        var s = i.name;
                        if (
                          (r ||
                            K(
                              `type "${s}" must have a positive integer typeid pointer`,
                            ),
                          eO.hasOwnProperty(r))
                        ) {
                          if (o.Tb) return;
                          K(`Cannot register type '${s}' twice`);
                        }
                        ((eO[r] = i),
                          delete ez[r],
                          eN.hasOwnProperty(r) &&
                            ((i = eN[r]), delete eN[r], i.forEach((r) => r())));
                      })(r, i, o);
                    }
                    function Oc(r) {
                      K(r.g.u.i.name + " instance already deleted");
                    }
                    function Pc() {}
                    function Qc(r, i, o) {
                      if (void 0 === r[i].B) {
                        var s = r[i];
                        ((r[i] = function () {
                          return (
                            r[i].B.hasOwnProperty(arguments.length) ||
                              K(
                                `Function '${o}' called with an invalid number of arguments (${arguments.length}) - expects one of (${r[i].B})!`,
                              ),
                            r[i].B[arguments.length].apply(this, arguments)
                          );
                        }),
                          (r[i].B = []),
                          (r[i].B[s.ea] = s));
                      }
                    }
                    function Rc(i, o, s) {
                      r.hasOwnProperty(i)
                        ? ((void 0 === s ||
                            (void 0 !== r[i].B && void 0 !== r[i].B[s])) &&
                            K(`Cannot register public name '${i}' twice`),
                          Qc(r, i, i),
                          r.hasOwnProperty(s) &&
                            K(
                              `Cannot register multiple overloads of a function with the same number of arguments (${s})!`,
                            ),
                          (r[i].B[s] = o))
                        : ((r[i] = o), void 0 !== s && (r[i].Hc = s));
                    }
                    function Sc(r, i, o, s, l, h, m, v) {
                      ((this.name = r),
                        (this.constructor = i),
                        (this.M = o),
                        (this.U = s),
                        (this.A = l),
                        (this.Nb = h),
                        (this.na = m),
                        (this.Ib = v),
                        (this.nb = []));
                    }
                    function Tc(r, i, o) {
                      for (; i !== o; )
                        (i.na ||
                          K(
                            `Expected null or instance of ${o.name}, got an instance of ${i.name}`,
                          ),
                          (r = i.na(r)),
                          (i = i.A));
                      return r;
                    }
                    function Uc(r, i) {
                      return null === i
                        ? (this.Na && K(`null is not a valid ${this.name}`), 0)
                        : (i.g || K(`Cannot pass "${Vc(i)}" as a ${this.name}`),
                          i.g.o ||
                            K(
                              `Cannot pass deleted object as a pointer of type ${this.name}`,
                            ),
                          Tc(i.g.o, i.g.u.i, this.i));
                    }
                    function Wc(r, i) {
                      if (null === i) {
                        if (
                          (this.Na && K(`null is not a valid ${this.name}`),
                          this.wa)
                        ) {
                          var o = this.Pa();
                          return (null !== r && r.push(this.U, o), o);
                        }
                        return 0;
                      }
                      if (
                        (i.g || K(`Cannot pass "${Vc(i)}" as a ${this.name}`),
                        i.g.o ||
                          K(
                            `Cannot pass deleted object as a pointer of type ${this.name}`,
                          ),
                        !this.va &&
                          i.g.u.va &&
                          K(
                            `Cannot convert argument of type ${i.g.K ? i.g.K.name : i.g.u.name} to parameter type ${this.name}`,
                          ),
                        (o = Tc(i.g.o, i.g.u.i, this.i)),
                        this.wa)
                      )
                        switch (
                          (void 0 === i.g.G &&
                            K(
                              "Passing raw pointer to smart pointer is illegal",
                            ),
                          this.ic)
                        ) {
                          case 0:
                            i.g.K === this
                              ? (o = i.g.G)
                              : K(
                                  `Cannot convert argument of type ${i.g.K ? i.g.K.name : i.g.u.name} to parameter type ${this.name}`,
                                );
                            break;
                          case 1:
                            o = i.g.G;
                            break;
                          case 2:
                            if (i.g.K === this) o = i.g.G;
                            else {
                              var s = i.clone();
                              ((o = this.cc(
                                o,
                                ic(function () {
                                  s.delete();
                                }),
                              )),
                                null !== r && r.push(this.U, o));
                            }
                            break;
                          default:
                            K("Unsupporting sharing policy");
                        }
                      return o;
                    }
                    function Xc(r, i) {
                      return null === i
                        ? (this.Na && K(`null is not a valid ${this.name}`), 0)
                        : (i.g || K(`Cannot pass "${Vc(i)}" as a ${this.name}`),
                          i.g.o ||
                            K(
                              `Cannot pass deleted object as a pointer of type ${this.name}`,
                            ),
                          i.g.u.va &&
                            K(
                              `Cannot convert argument of type ${i.g.u.name} to parameter type ${this.name}`,
                            ),
                          Tc(i.g.o, i.g.u.i, this.i));
                    }
                    function Yc(r, i, o, s) {
                      ((this.name = r),
                        (this.i = i),
                        (this.Na = o),
                        (this.va = s),
                        (this.wa = !1),
                        (this.U =
                          this.cc =
                          this.Pa =
                          this.ob =
                          this.ic =
                          this.bc =
                            void 0),
                        void 0 !== i.A
                          ? (this.toWireType = Wc)
                          : ((this.toWireType = s ? Uc : Xc), (this.J = null)));
                    }
                    function Zc(i, o, s) {
                      (r.hasOwnProperty(i) ||
                        Dc("Replacing nonexistant public symbol"),
                        void 0 !== r[i].B && void 0 !== s
                          ? (r[i].B[s] = o)
                          : ((r[i] = o), (r[i].ea = s)));
                    }
                    var e$ = [],
                      Q = (r) => {
                        var i = e$[r];
                        return (
                          i ||
                            (r >= e$.length && (e$.length = r + 1),
                            (e$[r] = i = G.get(r))),
                          i
                        );
                      },
                      ad = (i, o) => {
                        var s = [];
                        return function () {
                          if (
                            ((s.length = 0),
                            Object.assign(s, arguments),
                            i.includes("j"))
                          ) {
                            var l = r["dynCall_" + i];
                            l =
                              s && s.length
                                ? l.apply(null, [o].concat(s))
                                : l.call(null, o);
                          } else l = Q(o).apply(null, s);
                          return l;
                        };
                      };
                    function R(r, i) {
                      var o = (r = L(r)).includes("j") ? ad(r, i) : Q(i);
                      return (
                        "function" != typeof o &&
                          K(
                            `unknown function pointer with signature ${r}: ${i}`,
                          ),
                        o
                      );
                    }
                    var eY = void 0;
                    function cd(r, i) {
                      var o = [],
                        s = {};
                      throw (
                        i.forEach(function c(r) {
                          s[r] ||
                            eO[r] ||
                            (ez[r]
                              ? ez[r].forEach(c)
                              : (o.push(r), (s[r] = !0)));
                        }),
                        new eY(`${r}: ` + o.map(sc).join([", "]))
                      );
                    }
                    function dd(r, i, o, s, l) {
                      var h = i.length;
                      2 > h &&
                        K(
                          "argTypes array size mismatch! Must at least get return value and 'this' types!",
                        );
                      var m = null !== i[1] && null !== o,
                        v = !1;
                      for (o = 1; o < i.length; ++o)
                        if (null !== i[o] && void 0 === i[o].J) {
                          v = !0;
                          break;
                        }
                      var y = "void" !== i[0].name,
                        w = h - 2,
                        _ = Array(w),
                        A = [],
                        M = [];
                      return function () {
                        if (
                          (arguments.length !== w &&
                            K(
                              `function ${r} called with ${arguments.length} arguments, expected ${w} args!`,
                            ),
                          (M.length = 0),
                          (A.length = m ? 2 : 1),
                          (A[0] = l),
                          m)
                        ) {
                          var o = i[1].toWireType(M, this);
                          A[1] = o;
                        }
                        for (var h = 0; h < w; ++h)
                          ((_[h] = i[h + 2].toWireType(M, arguments[h])),
                            A.push(_[h]));
                        if (((h = s.apply(null, A)), v)) Hc(M);
                        else
                          for (var I = m ? 1 : 2; I < i.length; I++) {
                            var C = 1 === I ? o : _[I - 2];
                            null !== i[I].J && i[I].J(C);
                          }
                        return y ? i[0].fromWireType(h) : void 0;
                      };
                    }
                    function ed(r, i) {
                      for (var o = [], s = 0; s < r; s++)
                        o.push(B[(i + 4 * s) >> 2]);
                      return o;
                    }
                    function fd(r, i, o) {
                      return (
                        r instanceof Object ||
                          K(`${o} with invalid "this": ${r}`),
                        r instanceof i.i.constructor ||
                          K(
                            `${o} incompatible with "this" of type ${r.constructor.name}`,
                          ),
                        r.g.o ||
                          K(
                            `cannot call emscripten binding method ${o} on deleted object`,
                          ),
                        Tc(r.g.o, r.g.u.i, i.i)
                      );
                    }
                    function gd(r) {
                      r >= eP.h && 0 == --eP.get(r).qb && eP.Sb(r);
                    }
                    function Vc(r) {
                      if (null === r) return "null";
                      var i = typeof r;
                      return "object" === i || "array" === i || "function" === i
                        ? r.toString()
                        : "" + r;
                    }
                    var eG =
                        "undefined" != typeof TextDecoder
                          ? new TextDecoder("utf-16le")
                          : void 0,
                      md = (r, i) => {
                        for (var o = r >> 1, s = o + i / 2; !(o >= s) && W[o]; )
                          ++o;
                        if (32 < (o <<= 1) - r && eG)
                          return eG.decode(j.subarray(r, o));
                        for (s = 0, o = ""; !(s >= i / 2); ++s) {
                          var l = O[(r + 2 * s) >> 1];
                          if (0 == l) break;
                          o += String.fromCharCode(l);
                        }
                        return o;
                      },
                      nd = (r, i, o) => {
                        if ((void 0 === o && (o = 2147483647), 2 > o)) return 0;
                        o -= 2;
                        var s = i;
                        o = o < 2 * r.length ? o / 2 : r.length;
                        for (var l = 0; l < o; ++l)
                          ((O[i >> 1] = r.charCodeAt(l)), (i += 2));
                        return ((O[i >> 1] = 0), i - s);
                      },
                      od = (r) => 2 * r.length,
                      pd = (r, i) => {
                        for (var o = 0, s = ""; !(o >= i / 4); ) {
                          var l = D[(r + 4 * o) >> 2];
                          if (0 == l) break;
                          (++o,
                            65536 <= l
                              ? ((l -= 65536),
                                (s += String.fromCharCode(
                                  55296 | (l >> 10),
                                  56320 | (1023 & l),
                                )))
                              : (s += String.fromCharCode(l)));
                        }
                        return s;
                      },
                      qd = (r, i, o) => {
                        if ((void 0 === o && (o = 2147483647), 4 > o)) return 0;
                        var s = i;
                        o = s + o - 4;
                        for (var l = 0; l < r.length; ++l) {
                          var h = r.charCodeAt(l);
                          if (
                            (55296 <= h &&
                              57343 >= h &&
                              (h =
                                (65536 + ((1023 & h) << 10)) |
                                (1023 & r.charCodeAt(++l))),
                            (D[i >> 2] = h),
                            (i += 4) + 4 > o)
                          )
                            break;
                        }
                        return ((D[i >> 2] = 0), i - s);
                      },
                      rd = (r) => {
                        for (var i = 0, o = 0; o < r.length; ++o) {
                          var s = r.charCodeAt(o);
                          (55296 <= s && 57343 >= s && ++o, (i += 4));
                        }
                        return i;
                      },
                      eH = {};
                    function td(r) {
                      var i = eH[r];
                      return void 0 === i ? L(r) : i;
                    }
                    var eX = [],
                      eK = [],
                      eq = [],
                      eZ = 1,
                      eQ = [],
                      eJ = [],
                      e0 = [],
                      e1 = [],
                      e2 = [],
                      e4 = [],
                      e3 = [],
                      e6 = [],
                      e8 = [],
                      e5 = [],
                      e9 = {},
                      e7 = {},
                      te = 4;
                    function S(r) {
                      tn || (tn = r);
                    }
                    function ha(r) {
                      for (var i = eZ++, o = r.length; o < i; o++) r[o] = null;
                      return i;
                    }
                    function la(i) {
                      return (
                        (tr = e6[i]),
                        (r.yc = tg = tr && tr.Ua),
                        !(i && !tg)
                      );
                    }
                    function Qd(r, i) {
                      tg.bindFramebuffer(r, e0[i]);
                    }
                    function Rd(r) {
                      tg.bindVertexArray(e3[r]);
                    }
                    function Sd(r, i) {
                      for (var o = 0; o < r; o++) {
                        var s = D[(i + 4 * o) >> 2];
                        (tg.deleteVertexArray(e3[s]), (e3[s] = null));
                      }
                    }
                    var tt = [];
                    function Ud(r, i, o, s) {
                      tg.drawElements(r, i, o, s);
                    }
                    function Vd(r, i, o, s) {
                      for (var l = 0; l < r; l++) {
                        var h = tg[o](),
                          m = h && ha(s);
                        (h ? ((h.name = m), (s[m] = h)) : S(1282),
                          (D[(i + 4 * l) >> 2] = m));
                      }
                    }
                    function Wd(r, i) {
                      Vd(r, i, "createVertexArray", e3);
                    }
                    function Yd(r, i) {
                      !(function (r, i) {
                        if (i) {
                          var o = void 0;
                          switch (r) {
                            case 36346:
                              o = 1;
                              break;
                            case 36344:
                              return;
                            case 34814:
                            case 36345:
                              o = 0;
                              break;
                            case 34466:
                              var s = tg.getParameter(34467);
                              o = s ? s.length : 0;
                              break;
                            case 33309:
                              if (2 > tr.version) {
                                S(1282);
                                return;
                              }
                              o =
                                2 * (tg.getSupportedExtensions() || []).length;
                              break;
                            case 33307:
                            case 33308:
                              if (2 > tr.version) {
                                S(1280);
                                return;
                              }
                              o = 33307 == r ? 3 : 0;
                          }
                          if (void 0 === o)
                            switch (typeof (s = tg.getParameter(r))) {
                              case "number":
                                o = s;
                                break;
                              case "boolean":
                                o = s ? 1 : 0;
                                break;
                              case "string":
                                S(1280);
                                return;
                              case "object":
                                if (null === s)
                                  switch (r) {
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
                                      o = 0;
                                      break;
                                    default:
                                      S(1280);
                                      return;
                                  }
                                else {
                                  if (
                                    s instanceof Float32Array ||
                                    s instanceof Uint32Array ||
                                    s instanceof Int32Array ||
                                    s instanceof Array
                                  ) {
                                    for (r = 0; r < s.length; ++r)
                                      D[(i + 4 * r) >> 2] = s[r];
                                    return;
                                  }
                                  try {
                                    o = 0 | s.name;
                                  } catch (i) {
                                    (S(1280),
                                      F(
                                        "GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter(" +
                                          r +
                                          ")! (error: " +
                                          i +
                                          ")",
                                      ));
                                    return;
                                  }
                                }
                                break;
                              default:
                                (S(1280),
                                  F(
                                    "GL_INVALID_ENUM in glGet0v: Native code calling glGet0v(" +
                                      r +
                                      ") and it returns " +
                                      s +
                                      " of type " +
                                      typeof s +
                                      "!",
                                  ));
                                return;
                            }
                          D[i >> 2] = o;
                        } else S(1281);
                      })(r, i);
                    }
                    var $d = (r) => {
                      var i = hb(r) + 1,
                        o = Zd(i);
                      return (o && ib(r, j, o, i), o);
                    };
                    function ae(r) {
                      return "]" == r.slice(-1) && r.lastIndexOf("[");
                    }
                    function be(r) {
                      return 0 == (r -= 5120)
                        ? T
                        : 1 == r
                          ? j
                          : 2 == r
                            ? O
                            : 4 == r
                              ? D
                              : 6 == r
                                ? U
                                : 5 == r ||
                                    28922 == r ||
                                    28520 == r ||
                                    30779 == r ||
                                    30782 == r
                                  ? B
                                  : W;
                    }
                    function ce(r, i, o, s, l) {
                      var h = 31 - Math.clz32((r = be(r)).BYTES_PER_ELEMENT),
                        m = te;
                      return r.subarray(
                        l >> h,
                        (l +
                          s *
                            ((o *
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
                              }[i - 6402] || 1) *
                              (1 << h) +
                              m -
                              1) &
                              -m)) >>
                          h,
                      );
                    }
                    function V(r) {
                      var i = tg.Gb;
                      if (i) {
                        var o = i.ma[r];
                        return (
                          "number" == typeof o &&
                            (i.ma[r] = o =
                              tg.getUniformLocation(
                                i,
                                i.ub[r] + (0 < o ? "[" + o + "]" : ""),
                              )),
                          o
                        );
                      }
                      S(1282);
                    }
                    var tn,
                      tr,
                      ti,
                      ta = [],
                      to = [],
                      ts = {},
                      he = () => {
                        if (!ti) {
                          var r,
                            i = {
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
                              _: _ || "./this.program",
                            };
                          for (r in ts)
                            void 0 === ts[r] ? delete i[r] : (i[r] = ts[r]);
                          var o = [];
                          for (r in i) o.push(`${r}=${i[r]}`);
                          ti = o;
                        }
                        return ti;
                      },
                      ie = (r) => 0 == r % 4 && (0 != r % 100 || 0 == r % 400),
                      tu = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                      tl = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                      le = (r, i, o, s) => {
                        function e(r, i, o) {
                          for (
                            r = "number" == typeof r ? r.toString() : r || "";
                            r.length < i;
                          )
                            r = o[0] + r;
                          return r;
                        }
                        function f(r, i) {
                          return e(r, i, "0");
                        }
                        function g(r, i) {
                          var o;
                          function u(r) {
                            return 0 > r ? -1 : 0 < r ? 1 : 0;
                          }
                          return (
                            0 === (o = u(r.getFullYear() - i.getFullYear())) &&
                              0 === (o = u(r.getMonth() - i.getMonth())) &&
                              (o = u(r.getDate() - i.getDate())),
                            o
                          );
                        }
                        function k(r) {
                          switch (r.getDay()) {
                            case 0:
                              return new Date(r.getFullYear() - 1, 11, 29);
                            case 1:
                              return r;
                            case 2:
                              return new Date(r.getFullYear(), 0, 3);
                            case 3:
                              return new Date(r.getFullYear(), 0, 2);
                            case 4:
                              return new Date(r.getFullYear(), 0, 1);
                            case 5:
                              return new Date(r.getFullYear() - 1, 11, 31);
                            case 6:
                              return new Date(r.getFullYear() - 1, 11, 30);
                          }
                        }
                        function p(r) {
                          var i = r.aa;
                          for (
                            r = new Date(new Date(r.ba + 1900, 0, 1).getTime());
                            0 < i;
                          ) {
                            var o = r.getMonth(),
                              s = (ie(r.getFullYear()) ? tu : tl)[o];
                            if (i > s - r.getDate())
                              ((i -= s - r.getDate() + 1),
                                r.setDate(1),
                                11 > o
                                  ? r.setMonth(o + 1)
                                  : (r.setMonth(0),
                                    r.setFullYear(r.getFullYear() + 1)));
                            else {
                              r.setDate(r.getDate() + i);
                              break;
                            }
                          }
                          return (
                            (o = new Date(r.getFullYear() + 1, 0, 4)),
                            (i = k(new Date(r.getFullYear(), 0, 4))),
                            (o = k(o)),
                            0 >= g(i, r)
                              ? 0 >= g(o, r)
                                ? r.getFullYear() + 1
                                : r.getFullYear()
                              : r.getFullYear() - 1
                          );
                        }
                        var l = D[(s + 40) >> 2];
                        for (var h in ((s = {
                          lc: D[s >> 2],
                          kc: D[(s + 4) >> 2],
                          Ha: D[(s + 8) >> 2],
                          Ra: D[(s + 12) >> 2],
                          Ia: D[(s + 16) >> 2],
                          ba: D[(s + 20) >> 2],
                          P: D[(s + 24) >> 2],
                          aa: D[(s + 28) >> 2],
                          Jc: D[(s + 32) >> 2],
                          jc: D[(s + 36) >> 2],
                          mc: l && l ? fb(j, l) : "",
                        }),
                        (o = o ? fb(j, o) : ""),
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
                          o = o.replace(RegExp(h, "g"), l[h]);
                        var m =
                            "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(
                              " ",
                            ),
                          v =
                            "January February March April May June July August September October November December".split(
                              " ",
                            );
                        for (h in ((l = {
                          "%a": (r) => m[r.P].substring(0, 3),
                          "%A": (r) => m[r.P],
                          "%b": (r) => v[r.Ia].substring(0, 3),
                          "%B": (r) => v[r.Ia],
                          "%C": (r) => f(((r.ba + 1900) / 100) | 0, 2),
                          "%d": (r) => f(r.Ra, 2),
                          "%e": (r) => e(r.Ra, 2, " "),
                          "%g": (r) => p(r).toString().substring(2),
                          "%G": (r) => p(r),
                          "%H": (r) => f(r.Ha, 2),
                          "%I": (r) => (
                            0 == (r = r.Ha) ? (r = 12) : 12 < r && (r -= 12),
                            f(r, 2)
                          ),
                          "%j": (r) => {
                            for (
                              var i = 0, o = 0;
                              o <= r.Ia - 1;
                              i += (ie(r.ba + 1900) ? tu : tl)[o++]
                            );
                            return f(r.Ra + i, 3);
                          },
                          "%m": (r) => f(r.Ia + 1, 2),
                          "%M": (r) => f(r.kc, 2),
                          "%n": () => "\n",
                          "%p": (r) => (0 <= r.Ha && 12 > r.Ha ? "AM" : "PM"),
                          "%S": (r) => f(r.lc, 2),
                          "%t": () => "	",
                          "%u": (r) => r.P || 7,
                          "%U": (r) => f(Math.floor((r.aa + 7 - r.P) / 7), 2),
                          "%V": (r) => {
                            var i = Math.floor(
                              (r.aa + 7 - ((r.P + 6) % 7)) / 7,
                            );
                            if ((2 >= (r.P + 371 - r.aa - 2) % 7 && i++, i))
                              53 == i &&
                                (4 == (o = (r.P + 371 - r.aa) % 7) ||
                                  (3 == o && ie(r.ba)) ||
                                  (i = 1));
                            else {
                              i = 52;
                              var o = (r.P + 7 - r.aa - 1) % 7;
                              (4 == o || (5 == o && ie((r.ba % 400) - 1))) &&
                                i++;
                            }
                            return f(i, 2);
                          },
                          "%w": (r) => r.P,
                          "%W": (r) =>
                            f(Math.floor((r.aa + 7 - ((r.P + 6) % 7)) / 7), 2),
                          "%y": (r) => (r.ba + 1900).toString().substring(2),
                          "%Y": (r) => r.ba + 1900,
                          "%z": (r) => {
                            var i = 0 <= (r = r.jc);
                            return (
                              (i ? "+" : "-") +
                              String(
                                "0000" +
                                  (((r = Math.abs(r) / 60) / 60) * 100 +
                                    (r % 60)),
                              ).slice(-4)
                            );
                          },
                          "%Z": (r) => r.mc,
                          "%%": () => "%",
                        }),
                        (o = o.replace(/%%/g, "\x00\x00")),
                        l))
                          o.includes(h) &&
                            (o = o.replace(RegExp(h, "g"), l[h](s)));
                        return (h = jb((o = o.replace(/\0\0/g, "%")), !1))
                          .length > i
                          ? 0
                          : (T.set(h, r), h.length - 1);
                      };
                    function Jb(r, i, o, s) {
                      (r || (r = this),
                        (this.parent = r),
                        (this.S = r.S),
                        (this.Ba = null),
                        (this.id = eA++),
                        (this.name = i),
                        (this.mode = o),
                        (this.l = {}),
                        (this.m = {}),
                        (this.Da = s));
                    }
                    (Object.defineProperties(Jb.prototype, {
                      read: {
                        get: function () {
                          return 365 == (365 & this.mode);
                        },
                        set: function (r) {
                          r ? (this.mode |= 365) : (this.mode &= -366);
                        },
                      },
                      write: {
                        get: function () {
                          return 146 == (146 & this.mode);
                        },
                        set: function (r) {
                          r ? (this.mode |= 146) : (this.mode &= -147);
                        },
                      },
                    }),
                      Xb(),
                      (eM = Array(4096)),
                      Qb(eg, "/"),
                      Rb("/tmp", 16895, 0),
                      Rb("/home", 16895, 0),
                      Rb("/home/web_user", 16895, 0),
                      Rb("/dev", 16895, 0),
                      mb(259, { read: () => 0, write: (r, i, o, s) => s }),
                      Sb("/dev/null", 259),
                      lb(1280, {
                        fb: function () {
                          e: {
                            if (!el.length) {
                              var r = null;
                              if (
                                ("undefined" != typeof window &&
                                "function" == typeof window.prompt
                                  ? null !== (r = window.prompt("Input: ")) &&
                                    (r += "\n")
                                  : "function" == typeof readline &&
                                    null !== (r = readline()) &&
                                    (r += "\n"),
                                !r)
                              ) {
                                r = null;
                                break e;
                              }
                              el = jb(r, !0);
                            }
                            r = el.shift();
                          }
                          return r;
                        },
                        Oa: function (r, i) {
                          null === i || 10 === i
                            ? (C(fb(r.D, 0)), (r.D = []))
                            : 0 != i && r.D.push(i);
                        },
                        sa: function (r) {
                          r.D && 0 < r.D.length && (C(fb(r.D, 0)), (r.D = []));
                        },
                        Wb: function () {
                          return {
                            uc: 25856,
                            wc: 5,
                            tc: 191,
                            vc: 35387,
                            sc: [
                              3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15,
                              23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                              0, 0,
                            ],
                          };
                        },
                        Xb: function () {
                          return 0;
                        },
                        Yb: function () {
                          return [24, 80];
                        },
                      }),
                      lb(1536, {
                        Oa: function (r, i) {
                          null === i || 10 === i
                            ? (F(fb(r.D, 0)), (r.D = []))
                            : 0 != i && r.D.push(i);
                        },
                        sa: function (r) {
                          r.D && 0 < r.D.length && (F(fb(r.D, 0)), (r.D = []));
                        },
                      }),
                      Sb("/dev/tty", 1280),
                      Sb("/dev/tty1", 1536),
                      (tp = new Uint8Array(1024)),
                      (tm = 0),
                      $b(
                        "random",
                        (tv = () => (
                          0 === tm && (tm = cb(tp).byteLength),
                          tp[--tm]
                        )),
                      ),
                      $b("urandom", tv),
                      Rb("/dev/shm", 16895, 0),
                      Rb("/dev/shm/tmp", 16895, 0),
                      Rb("/proc", 16895, 0),
                      (tb = Rb("/proc/self", 16895, 0)),
                      Rb("/proc/self/fd", 16895, 0),
                      Qb(
                        {
                          S: () => {
                            var r = sb(tb, "fd", 16895, 73);
                            return (
                              (r.l = {
                                ka: (r, i) => {
                                  var o = Nb(+i);
                                  return ((r = {
                                    parent: null,
                                    S: { jb: "fake" },
                                    l: { la: () => o.path },
                                  }).parent = r);
                                },
                              }),
                              r
                            );
                          },
                        },
                        "/proc/self/fd",
                      ),
                      Object.assign(fc.prototype, {
                        get(r) {
                          return this.L[r];
                        },
                        has(r) {
                          return void 0 !== this.L[r];
                        },
                        ra(r) {
                          var i = this.eb.pop() || this.L.length;
                          return ((this.L[i] = r), i);
                        },
                        Sb(r) {
                          ((this.L[r] = void 0), this.eb.push(r));
                        },
                      }),
                      (eS = r.BindingError =
                        class extends Error {
                          constructor(r) {
                            (super(r), (this.name = "BindingError"));
                          }
                        }),
                      eP.L.push(
                        { value: void 0 },
                        { value: null },
                        { value: !0 },
                        { value: !1 },
                      ),
                      (eP.h = eP.L.length),
                      (r.count_emval_handles = function () {
                        for (var r = 0, i = eP.h; i < eP.L.length; ++i)
                          void 0 !== eP.L[i] && ++r;
                        return r;
                      }),
                      (eV = r.PureVirtualError = jc("PureVirtualError")));
                    for (var tf = Array(256), th = 0; 256 > th; ++th)
                      tf[th] = String.fromCharCode(th);
                    ((ex = tf),
                      (r.getInheritedInstanceCount = function () {
                        return Object.keys(ej).length;
                      }),
                      (r.getLiveInheritedInstances = function () {
                        var r,
                          i = [];
                        for (r in ej) ej.hasOwnProperty(r) && i.push(ej[r]);
                        return i;
                      }),
                      (r.flushPendingDeletes = nc),
                      (r.setDelayFunction = function (r) {
                        ((eT = r), ek.length && eT && eT(nc));
                      }),
                      (eB = r.InternalError =
                        class extends Error {
                          constructor(r) {
                            (super(r), (this.name = "InternalError"));
                          }
                        }),
                      (Pc.prototype.isAliasOf = function (r) {
                        if (!(this instanceof Pc && r instanceof Pc)) return !1;
                        var i = this.g.u.i,
                          o = this.g.o,
                          s = r.g.u.i;
                        for (r = r.g.o; i.A; ) ((o = i.na(o)), (i = i.A));
                        for (; s.A; ) ((r = s.na(r)), (s = s.A));
                        return i === s && o === r;
                      }),
                      (Pc.prototype.clone = function () {
                        if ((this.g.o || Oc(this), this.g.ia))
                          return ((this.g.count.value += 1), this);
                        var r = Fc,
                          i = Object,
                          o = i.create,
                          s = Object.getPrototypeOf(this),
                          l = this.g;
                        return (
                          (r = r(
                            o.call(i, s, {
                              g: {
                                value: {
                                  count: l.count,
                                  ga: l.ga,
                                  ia: l.ia,
                                  o: l.o,
                                  u: l.u,
                                  G: l.G,
                                  K: l.K,
                                },
                              },
                            }),
                          )),
                          (r.g.count.value += 1),
                          (r.g.ga = !1),
                          r
                        );
                      }),
                      (Pc.prototype.delete = function () {
                        (this.g.o || Oc(this),
                          this.g.ga &&
                            !this.g.ia &&
                            K("Object already scheduled for deletion"),
                          wc(this),
                          yc(this.g),
                          this.g.ia ||
                            ((this.g.G = void 0), (this.g.o = void 0)));
                      }),
                      (Pc.prototype.isDeleted = function () {
                        return !this.g.o;
                      }),
                      (Pc.prototype.deleteLater = function () {
                        return (
                          this.g.o || Oc(this),
                          this.g.ga &&
                            !this.g.ia &&
                            K("Object already scheduled for deletion"),
                          ek.push(this),
                          1 === ek.length && eT && eT(nc),
                          (this.g.ga = !0),
                          this
                        );
                      }),
                      (Yc.prototype.Ob = function (r) {
                        return (this.ob && (r = this.ob(r)), r);
                      }),
                      (Yc.prototype.Ya = function (r) {
                        this.U && this.U(r);
                      }),
                      (Yc.prototype.argPackAdvance = 8),
                      (Yc.prototype.readValueFromPointer = Ic),
                      (Yc.prototype.deleteObject = function (r) {
                        null !== r && r.delete();
                      }),
                      (Yc.prototype.fromWireType = function (r) {
                        function b() {
                          return this.wa
                            ? Ec(this.i.M, { u: this.bc, o: i, K: this, G: r })
                            : Ec(this.i.M, { u: this, o: r });
                        }
                        var i = this.Ob(r);
                        if (!i) return (this.Ya(r), null);
                        var o = ej[qc(this.i, i)];
                        if (void 0 !== o)
                          return 0 === o.g.count.value
                            ? ((o.g.o = i), (o.g.G = r), o.clone())
                            : ((o = o.clone()), this.Ya(r), o);
                        if (!(o = eD[(o = this.i.Nb(i))])) return b.call(this);
                        o = this.va ? o.Fb : o.pointerType;
                        var s = (function zc(r, i, o) {
                          return i === o
                            ? r
                            : void 0 === o.A
                              ? null
                              : null === (r = zc(r, i, o.A))
                                ? null
                                : o.Ib(r);
                        })(i, this.i, o.i);
                        return null === s
                          ? b.call(this)
                          : this.wa
                            ? Ec(o.i.M, { u: o, o: s, K: this, G: r })
                            : Ec(o.i.M, { u: o, o: s });
                      }),
                      (eY = r.UnboundTypeError = jc("UnboundTypeError")));
                    for (var tp, tm, tv, tb, tg, ty = 0; 32 > ty; ++ty)
                      tt.push(Array(ty));
                    var tw = new Float32Array(288);
                    for (ty = 0; 288 > ty; ++ty)
                      ta[ty] = tw.subarray(0, ty + 1);
                    var t_ = new Int32Array(288);
                    for (ty = 0; 288 > ty; ++ty)
                      to[ty] = t_.subarray(0, ty + 1);
                    var tA = {
                      __syscall_fcntl64: function (r, i, o) {
                        eL = o;
                        try {
                          var s = Nb(r);
                          switch (i) {
                            case 0:
                              var l = cc();
                              return 0 > l ? -28 : Pb(s, l).V;
                            case 1:
                            case 2:
                            case 6:
                            case 7:
                              return 0;
                            case 3:
                              return s.flags;
                            case 4:
                              return ((l = cc()), (s.flags |= l), 0);
                            case 5:
                              return ((O[((l = cc()) + 0) >> 1] = 2), 0);
                            case 16:
                            case 8:
                            default:
                              return -28;
                            case 9:
                              return ((D[qe() >> 2] = 28), -1);
                          }
                        } catch (r) {
                          if (void 0 === eE || "ErrnoError" !== r.name) throw r;
                          return -r.Z;
                        }
                      },
                      __syscall_ioctl: function (r, i, o) {
                        eL = o;
                        try {
                          var s = Nb(r);
                          switch (i) {
                            case 21509:
                            case 21510:
                            case 21511:
                            case 21512:
                            case 21524:
                            case 21515:
                              return s.s ? 0 : -59;
                            case 21505:
                              if (!s.s) return -59;
                              if (s.s.T.Wb) {
                                i = [
                                  3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18,
                                  15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                  0, 0, 0, 0, 0,
                                ];
                                var l = cc();
                                ((D[l >> 2] = 25856),
                                  (D[(l + 4) >> 2] = 5),
                                  (D[(l + 8) >> 2] = 191),
                                  (D[(l + 12) >> 2] = 35387));
                                for (var h = 0; 32 > h; h++)
                                  T[(l + h + 17) >> 0] = i[h] || 0;
                              }
                              return 0;
                            case 21506:
                            case 21507:
                            case 21508:
                              if (!s.s) return -59;
                              if (s.s.T.Xb)
                                for (l = cc(), i = [], h = 0; 32 > h; h++)
                                  i.push(T[(l + h + 17) >> 0]);
                              return 0;
                            case 21519:
                              if (!s.s) return -59;
                              return (D[(l = cc()) >> 2] = 0);
                            case 21520:
                              return s.s ? -28 : -59;
                            case 21531:
                              if (((l = cc()), !s.m.Vb)) throw new eR(59);
                              return s.m.Vb(s, i, l);
                            case 21523:
                              if (!s.s) return -59;
                              return (
                                s.s.T.Yb &&
                                  ((h = [24, 80]),
                                  (O[(l = cc()) >> 1] = h[0]),
                                  (O[(l + 2) >> 1] = h[1])),
                                0
                              );
                            default:
                              return -28;
                          }
                        } catch (r) {
                          if (void 0 === eE || "ErrnoError" !== r.name) throw r;
                          return -r.Z;
                        }
                      },
                      __syscall_openat: function (r, i, o, s) {
                        eL = s;
                        try {
                          var l = (i = i ? fb(j, i) : "");
                          if ("/" === l.charAt(0)) i = l;
                          else {
                            var h = -100 === r ? "/" : Nb(r).path;
                            if (0 == l.length) throw new eR(44);
                            i = Za(h + "/" + l);
                          }
                          var m = s ? cc() : 0;
                          return Vb(i, o, m).V;
                        } catch (r) {
                          if (void 0 === eE || "ErrnoError" !== r.name) throw r;
                          return -r.Z;
                        }
                      },
                      _embind_create_inheriting_constructor: function (
                        r,
                        i,
                        o,
                      ) {
                        ((r = L(r)), (i = vc(i, "wrapper")), (o = hc(o)));
                        var s = [].slice,
                          l = i.i,
                          h = l.M,
                          m = l.A.M,
                          v = l.A.constructor;
                        for (var y in ((r = ec(r, function () {
                          (l.A.nb.forEach(
                            function (r) {
                              if (this[r] === m[r])
                                throw new eV(
                                  `Pure virtual function ${r} must be implemented in JavaScript`,
                                );
                            }.bind(this),
                          ),
                            Object.defineProperty(this, "__parent", {
                              value: h,
                            }),
                            this.__construct.apply(this, s.call(arguments)));
                        })),
                        (h.__construct = function () {
                          this === h && K("Pass correct 'this' to __construct");
                          var r = v.implement.apply(
                            void 0,
                            [this].concat(s.call(arguments)),
                          );
                          wc(r);
                          var i = r.g;
                          (r.notifyOnDestruction(),
                            (i.ia = !0),
                            Object.defineProperties(this, { g: { value: i } }),
                            Fc(this),
                            (r = qc(l, (r = i.o))),
                            ej.hasOwnProperty(r)
                              ? K(`Tried to register registered instance: ${r}`)
                              : (ej[r] = this));
                        }),
                        (h.__destruct = function () {
                          (this === h && K("Pass correct 'this' to __destruct"),
                            wc(this));
                          var r = this.g.o;
                          ((r = qc(l, r)),
                            ej.hasOwnProperty(r)
                              ? delete ej[r]
                              : K(
                                  `Tried to unregister unregistered instance: ${r}`,
                                ));
                        }),
                        (r.prototype = Object.create(h)),
                        o))
                          r.prototype[y] = o[y];
                        return ic(r);
                      },
                      _embind_finalize_value_object: function (r) {
                        var i = eU[r];
                        delete eU[r];
                        var o = i.Pa,
                          s = i.U,
                          l = i.ab;
                        N(
                          [r],
                          l.map((r) => r.Rb).concat(l.map((r) => r.fc)),
                          (r) => {
                            var h = {};
                            return (
                              l.forEach((i, o) => {
                                var s = r[o],
                                  m = i.Pb,
                                  v = i.Qb,
                                  y = r[o + l.length],
                                  w = i.ec,
                                  _ = i.hc;
                                h[i.Lb] = {
                                  read: (r) => s.fromWireType(m(v, r)),
                                  write: (r, i) => {
                                    var o = [];
                                    (w(_, r, y.toWireType(o, i)), Hc(o));
                                  },
                                };
                              }),
                              [
                                {
                                  name: i.name,
                                  fromWireType: function (r) {
                                    var i,
                                      o = {};
                                    for (i in h) o[i] = h[i].read(r);
                                    return (s(r), o);
                                  },
                                  toWireType: function (r, i) {
                                    for (var l in h)
                                      if (!(l in i))
                                        throw TypeError(
                                          `Missing field: "${l}"`,
                                        );
                                    var m = o();
                                    for (l in h) h[l].write(m, i[l]);
                                    return (null !== r && r.push(s, m), m);
                                  },
                                  argPackAdvance: 8,
                                  readValueFromPointer: Ic,
                                  J: s,
                                },
                              ]
                            );
                          },
                        );
                      },
                      _embind_register_bigint: function () {},
                      _embind_register_bool: function (r, i, o, s, l) {
                        var h = Mc(o);
                        Lc(r, {
                          name: (i = L(i)),
                          fromWireType: function (r) {
                            return !!r;
                          },
                          toWireType: function (r, i) {
                            return i ? s : l;
                          },
                          argPackAdvance: 8,
                          readValueFromPointer: function (r) {
                            if (1 === o) var s = T;
                            else if (2 === o) s = O;
                            else if (4 === o) s = D;
                            else
                              throw TypeError(
                                "Unknown boolean type size: " + i,
                              );
                            return this.fromWireType(s[r >> h]);
                          },
                          J: null,
                        });
                      },
                      _embind_register_class: function (
                        r,
                        i,
                        o,
                        s,
                        l,
                        h,
                        m,
                        v,
                        y,
                        w,
                        _,
                        A,
                        M,
                      ) {
                        ((_ = L(_)),
                          (h = R(l, h)),
                          v && (v = R(m, v)),
                          w && (w = R(y, w)),
                          (M = R(A, M)));
                        var I = dc(_);
                        (Rc(I, function () {
                          cd(`Cannot construct ${_} due to unbound types`, [s]);
                        }),
                          N([r, i, o], s ? [s] : [], function (i) {
                            if (((i = i[0]), s))
                              var o = i.i,
                                l = o.M;
                            else l = Pc.prototype;
                            var m = Object.create(l, {
                              constructor: {
                                value: (i = ec(I, function () {
                                  if (Object.getPrototypeOf(this) !== m)
                                    throw new eS("Use 'new' to construct " + _);
                                  if (void 0 === y.Y)
                                    throw new eS(
                                      _ + " has no accessible constructor",
                                    );
                                  var r = y.Y[arguments.length];
                                  if (void 0 === r)
                                    throw new eS(
                                      `Tried to invoke ctor of ${_} with invalid number of parameters (${arguments.length}) - expected (${Object.keys(y.Y).toString()}) parameters instead!`,
                                    );
                                  return r.apply(this, arguments);
                                })),
                              },
                            });
                            i.prototype = m;
                            var y = new Sc(_, i, m, M, o, h, v, w);
                            (y.A &&
                              (void 0 === y.A.oa && (y.A.oa = []),
                              y.A.oa.push(y)),
                              (o = new Yc(_, y, !0, !1)),
                              (l = new Yc(_ + "*", y, !1, !1)));
                            var A = new Yc(_ + " const*", y, !1, !0);
                            return (
                              (eD[r] = { pointerType: l, Fb: A }),
                              Zc(I, i),
                              [o, l, A]
                            );
                          }));
                      },
                      _embind_register_class_class_function: function (
                        r,
                        i,
                        o,
                        s,
                        l,
                        h,
                        m,
                      ) {
                        var v = ed(o, s);
                        ((i = L(i)),
                          (h = R(l, h)),
                          N([], [r], function (r) {
                            function n() {
                              cd(`Cannot call ${s} due to unbound types`, v);
                            }
                            r = r[0];
                            var s = `${r.name}.${i}`;
                            i.startsWith("@@") && (i = Symbol[i.substring(2)]);
                            var l = r.i.constructor;
                            return (
                              void 0 === l[i]
                                ? ((n.ea = o - 1), (l[i] = n))
                                : (Qc(l, i, s), (l[i].B[o - 1] = n)),
                              N([], v, function (v) {
                                if (
                                  ((v = dd(
                                    s,
                                    [v[0], null].concat(v.slice(1)),
                                    null,
                                    h,
                                    m,
                                  )),
                                  void 0 === l[i].B
                                    ? ((v.ea = o - 1), (l[i] = v))
                                    : (l[i].B[o - 1] = v),
                                  r.i.oa)
                                )
                                  for (let o of r.i.oa)
                                    o.constructor.hasOwnProperty(i) ||
                                      (o.constructor[i] = v);
                                return [];
                              }),
                              []
                            );
                          }));
                      },
                      _embind_register_class_class_property: function (
                        r,
                        i,
                        o,
                        s,
                        l,
                        h,
                        m,
                        v,
                      ) {
                        ((i = L(i)),
                          (h = R(l, h)),
                          N([], [r], function (r) {
                            r = r[0];
                            var l = `${r.name}.${i}`,
                              y = {
                                get() {
                                  cd(
                                    `Cannot access ${l} due to unbound types`,
                                    [o],
                                  );
                                },
                                enumerable: !0,
                                configurable: !0,
                              };
                            return (
                              (y.set = v
                                ? () => {
                                    cd(
                                      `Cannot access ${l} due to unbound types`,
                                      [o],
                                    );
                                  }
                                : () => {
                                    K(`${l} is a read-only property`);
                                  }),
                              Object.defineProperty(r.i.constructor, i, y),
                              N([], [o], function (o) {
                                o = o[0];
                                var l = {
                                  get: () => o.fromWireType(h(s)),
                                  enumerable: !0,
                                };
                                return (
                                  v &&
                                    ((v = R(m, v)),
                                    (l.set = (r) => {
                                      var i = [];
                                      (v(s, o.toWireType(i, r)), Hc(i));
                                    })),
                                  Object.defineProperty(r.i.constructor, i, l),
                                  []
                                );
                              }),
                              []
                            );
                          }));
                      },
                      _embind_register_class_constructor: function (
                        r,
                        i,
                        o,
                        s,
                        l,
                        h,
                      ) {
                        var m = ed(i, o);
                        ((l = R(s, l)),
                          N([], [r], function (r) {
                            r = r[0];
                            var o = `constructor ${r.name}`;
                            if (
                              (void 0 === r.i.Y && (r.i.Y = []),
                              void 0 !== r.i.Y[i - 1])
                            )
                              throw new eS(
                                `Cannot register multiple constructors with identical number of parameters (${i - 1}) for class '${r.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`,
                              );
                            return (
                              (r.i.Y[i - 1] = () => {
                                cd(
                                  `Cannot construct ${r.name} due to unbound types`,
                                  m,
                                );
                              }),
                              N([], m, function (s) {
                                return (
                                  s.splice(1, 0, null),
                                  (r.i.Y[i - 1] = dd(o, s, null, l, h)),
                                  []
                                );
                              }),
                              []
                            );
                          }));
                      },
                      _embind_register_class_function: function (
                        r,
                        i,
                        o,
                        s,
                        l,
                        h,
                        m,
                        v,
                      ) {
                        var y = ed(o, s);
                        ((i = L(i)),
                          (h = R(l, h)),
                          N([], [r], function (r) {
                            function t() {
                              cd(`Cannot call ${s} due to unbound types`, y);
                            }
                            r = r[0];
                            var s = `${r.name}.${i}`;
                            (i.startsWith("@@") && (i = Symbol[i.substring(2)]),
                              v && r.i.nb.push(i));
                            var l = r.i.M,
                              w = l[i];
                            return (
                              void 0 === w ||
                              (void 0 === w.B &&
                                w.className !== r.name &&
                                w.ea === o - 2)
                                ? ((t.ea = o - 2),
                                  (t.className = r.name),
                                  (l[i] = t))
                                : (Qc(l, i, s), (l[i].B[o - 2] = t)),
                              N([], y, function (v) {
                                return (
                                  (v = dd(s, v, r, h, m)),
                                  void 0 === l[i].B
                                    ? ((v.ea = o - 2), (l[i] = v))
                                    : (l[i].B[o - 2] = v),
                                  []
                                );
                              }),
                              []
                            );
                          }));
                      },
                      _embind_register_class_property: function (
                        r,
                        i,
                        o,
                        s,
                        l,
                        h,
                        m,
                        v,
                        y,
                        w,
                      ) {
                        ((i = L(i)),
                          (l = R(s, l)),
                          N([], [r], function (r) {
                            r = r[0];
                            var s = `${r.name}.${i}`,
                              _ = {
                                get() {
                                  cd(
                                    `Cannot access ${s} due to unbound types`,
                                    [o, m],
                                  );
                                },
                                enumerable: !0,
                                configurable: !0,
                              };
                            return (
                              (_.set = y
                                ? () => {
                                    cd(
                                      `Cannot access ${s} due to unbound types`,
                                      [o, m],
                                    );
                                  }
                                : () => {
                                    K(s + " is a read-only property");
                                  }),
                              Object.defineProperty(r.i.M, i, _),
                              N([], y ? [o, m] : [o], function (o) {
                                var m = o[0],
                                  _ = {
                                    get() {
                                      var i = fd(this, r, s + " getter");
                                      return m.fromWireType(l(h, i));
                                    },
                                    enumerable: !0,
                                  };
                                if (y) {
                                  y = R(v, y);
                                  var A = o[1];
                                  _.set = function (i) {
                                    var o = fd(this, r, s + " setter"),
                                      l = [];
                                    (y(w, o, A.toWireType(l, i)), Hc(l));
                                  };
                                }
                                return (Object.defineProperty(r.i.M, i, _), []);
                              }),
                              []
                            );
                          }));
                      },
                      _embind_register_emval: function (r, i) {
                        Lc(r, {
                          name: (i = L(i)),
                          fromWireType: function (r) {
                            var i = hc(r);
                            return (gd(r), i);
                          },
                          toWireType: function (r, i) {
                            return ic(i);
                          },
                          argPackAdvance: 8,
                          readValueFromPointer: Ic,
                          J: null,
                        });
                      },
                      _embind_register_enum: function (r, i, o, s) {
                        function e() {}
                        ((o = Mc(o)),
                          (i = L(i)),
                          (e.values = {}),
                          Lc(r, {
                            name: i,
                            constructor: e,
                            fromWireType: function (r) {
                              return this.constructor.values[r];
                            },
                            toWireType: function (r, i) {
                              return i.value;
                            },
                            argPackAdvance: 8,
                            readValueFromPointer: (function (r, i, o) {
                              switch (i) {
                                case 0:
                                  return function (r) {
                                    return this.fromWireType((o ? T : j)[r]);
                                  };
                                case 1:
                                  return function (r) {
                                    return this.fromWireType(
                                      (o ? O : W)[r >> 1],
                                    );
                                  };
                                case 2:
                                  return function (r) {
                                    return this.fromWireType(
                                      (o ? D : B)[r >> 2],
                                    );
                                  };
                                default:
                                  throw TypeError("Unknown integer type: " + r);
                              }
                            })(i, o, s),
                            J: null,
                          }),
                          Rc(i, e));
                      },
                      _embind_register_enum_value: function (r, i, o) {
                        var s = vc(r, "enum");
                        ((i = L(i)),
                          (r = s.constructor),
                          (s = Object.create(s.constructor.prototype, {
                            value: { value: o },
                            constructor: {
                              value: ec(`${s.name}_${i}`, function () {}),
                            },
                          })),
                          (r.values[o] = s),
                          (r[i] = s));
                      },
                      _embind_register_float: function (r, i, o) {
                        ((o = Mc(o)),
                          Lc(r, {
                            name: (i = L(i)),
                            fromWireType: function (r) {
                              return r;
                            },
                            toWireType: function (r, i) {
                              return i;
                            },
                            argPackAdvance: 8,
                            readValueFromPointer: (function (r, i) {
                              switch (i) {
                                case 2:
                                  return function (r) {
                                    return this.fromWireType(U[r >> 2]);
                                  };
                                case 3:
                                  return function (r) {
                                    return this.fromWireType(z[r >> 3]);
                                  };
                                default:
                                  throw TypeError("Unknown float type: " + r);
                              }
                            })(i, o),
                            J: null,
                          }));
                      },
                      _embind_register_function: function (r, i, o, s, l, h) {
                        var m = ed(i, o);
                        ((r = L(r)),
                          (l = R(s, l)),
                          Rc(
                            r,
                            function () {
                              cd(`Cannot call ${r} due to unbound types`, m);
                            },
                            i - 1,
                          ),
                          N([], m, function (o) {
                            return (
                              Zc(
                                r,
                                dd(
                                  r,
                                  [o[0], null].concat(o.slice(1)),
                                  null,
                                  l,
                                  h,
                                ),
                                i - 1,
                              ),
                              []
                            );
                          }));
                      },
                      _embind_register_integer: function (r, i, o, s, l) {
                        ((i = L(i)), -1 === l && (l = 4294967295), (l = Mc(o)));
                        var f = (r) => r;
                        if (0 === s) {
                          var h = 32 - 8 * o;
                          f = (r) => (r << h) >>> h;
                        }
                        ((o = i.includes("unsigned")
                          ? function (r, i) {
                              return i >>> 0;
                            }
                          : function (r, i) {
                              return i;
                            }),
                          Lc(r, {
                            name: i,
                            fromWireType: f,
                            toWireType: o,
                            argPackAdvance: 8,
                            readValueFromPointer: (function (r, i, o) {
                              switch (i) {
                                case 0:
                                  return o
                                    ? function (r) {
                                        return T[r];
                                      }
                                    : function (r) {
                                        return j[r];
                                      };
                                case 1:
                                  return o
                                    ? function (r) {
                                        return O[r >> 1];
                                      }
                                    : function (r) {
                                        return W[r >> 1];
                                      };
                                case 2:
                                  return o
                                    ? function (r) {
                                        return D[r >> 2];
                                      }
                                    : function (r) {
                                        return B[r >> 2];
                                      };
                                default:
                                  throw TypeError("Unknown integer type: " + r);
                              }
                            })(i, l, 0 !== s),
                            J: null,
                          }));
                      },
                      _embind_register_memory_view: function (r, i, o) {
                        function d(r) {
                          r >>= 2;
                          var i = B;
                          return new s(i.buffer, i[r + 1], i[r]);
                        }
                        var s = [
                          Int8Array,
                          Uint8Array,
                          Int16Array,
                          Uint16Array,
                          Int32Array,
                          Uint32Array,
                          Float32Array,
                          Float64Array,
                        ][i];
                        Lc(
                          r,
                          {
                            name: (o = L(o)),
                            fromWireType: d,
                            argPackAdvance: 8,
                            readValueFromPointer: d,
                          },
                          { Tb: !0 },
                        );
                      },
                      _embind_register_std_string: function (r, i) {
                        var o = "std::string" === (i = L(i));
                        Lc(r, {
                          name: i,
                          fromWireType: function (r) {
                            var i = B[r >> 2],
                              s = r + 4;
                            if (o)
                              for (var l = s, h = 0; h <= i; ++h) {
                                var m = s + h;
                                if (h == i || 0 == j[m]) {
                                  if (
                                    ((l = l ? fb(j, l, m - l) : ""),
                                    void 0 === v)
                                  )
                                    var v = l;
                                  else v += "\x00" + l;
                                  l = m + 1;
                                }
                              }
                            else {
                              for (h = 0, v = Array(i); h < i; ++h)
                                v[h] = String.fromCharCode(j[s + h]);
                              v = v.join("");
                            }
                            return (uc(r), v);
                          },
                          toWireType: function (r, i) {
                            i instanceof ArrayBuffer && (i = new Uint8Array(i));
                            var s = "string" == typeof i;
                            s ||
                              i instanceof Uint8Array ||
                              i instanceof Uint8ClampedArray ||
                              i instanceof Int8Array ||
                              K("Cannot pass non-string to std::string");
                            var l = o && s ? hb(i) : i.length,
                              h = Zd(4 + l + 1),
                              m = h + 4;
                            if (((B[h >> 2] = l), o && s)) ib(i, j, m, l + 1);
                            else if (s)
                              for (s = 0; s < l; ++s) {
                                var v = i.charCodeAt(s);
                                (255 < v &&
                                  (uc(m),
                                  K(
                                    "String has UTF-16 code units that do not fit in 8 bits",
                                  )),
                                  (j[m + s] = v));
                              }
                            else for (s = 0; s < l; ++s) j[m + s] = i[s];
                            return (null !== r && r.push(uc, h), h);
                          },
                          argPackAdvance: 8,
                          readValueFromPointer: Ic,
                          J: function (r) {
                            uc(r);
                          },
                        });
                      },
                      _embind_register_std_wstring: function (r, i, o) {
                        if (((o = L(o)), 2 === i))
                          var s = md,
                            l = nd,
                            h = od,
                            g = () => W,
                            m = 1;
                        else
                          4 === i &&
                            ((s = pd),
                            (l = qd),
                            (h = rd),
                            (g = () => B),
                            (m = 2));
                        Lc(r, {
                          name: o,
                          fromWireType: function (r) {
                            for (
                              var o, l = B[r >> 2], h = g(), v = r + 4, y = 0;
                              y <= l;
                              ++y
                            ) {
                              var w = r + 4 + y * i;
                              (y == l || 0 == h[w >> m]) &&
                                ((v = s(v, w - v)),
                                void 0 === o ? (o = v) : (o += "\x00" + v),
                                (v = w + i));
                            }
                            return (uc(r), o);
                          },
                          toWireType: function (r, s) {
                            "string" != typeof s &&
                              K(
                                `Cannot pass non-string to C++ string type ${o}`,
                              );
                            var v = h(s),
                              y = Zd(4 + v + i);
                            return (
                              (B[y >> 2] = v >> m),
                              l(s, y + 4, v + i),
                              null !== r && r.push(uc, y),
                              y
                            );
                          },
                          argPackAdvance: 8,
                          readValueFromPointer: Ic,
                          J: function (r) {
                            uc(r);
                          },
                        });
                      },
                      _embind_register_value_object: function (
                        r,
                        i,
                        o,
                        s,
                        l,
                        h,
                      ) {
                        eU[r] = { name: L(i), Pa: R(o, s), U: R(l, h), ab: [] };
                      },
                      _embind_register_value_object_field: function (
                        r,
                        i,
                        o,
                        s,
                        l,
                        h,
                        m,
                        v,
                        y,
                        w,
                      ) {
                        eU[r].ab.push({
                          Lb: L(i),
                          Rb: o,
                          Pb: R(s, l),
                          Qb: h,
                          fc: m,
                          ec: R(v, y),
                          hc: w,
                        });
                      },
                      _embind_register_void: function (r, i) {
                        Lc(r, {
                          Zb: !0,
                          name: (i = L(i)),
                          argPackAdvance: 0,
                          fromWireType: function () {},
                          toWireType: function () {},
                        });
                      },
                      _emscripten_get_now_is_monotonic: () => !0,
                      _emscripten_throw_longjmp: () => {
                        throw 1 / 0;
                      },
                      _emval_as: function (r, i, o) {
                        ((r = hc(r)), (i = vc(i, "emval::as")));
                        var s = [],
                          l = ic(s);
                        return ((B[o >> 2] = l), i.toWireType(s, r));
                      },
                      _emval_call_method: function (r, i, o, s, l) {
                        ((r = eX[r]), (i = hc(i)), (o = td(o)));
                        var h = [];
                        return ((B[s >> 2] = ic(h)), r(i, o, h, l));
                      },
                      _emval_call_void_method: function (r, i, o, s) {
                        (r = eX[r])((i = hc(i)), (o = td(o)), null, s);
                      },
                      _emval_decref: gd,
                      _emval_get_method_caller: function (r, i) {
                        var o,
                          s = (function (r, i) {
                            for (var o = Array(r), s = 0; s < r; ++s)
                              o[s] = vc(B[(i + 4 * s) >> 2], "parameter " + s);
                            return o;
                          })(r, i),
                          l = s[0],
                          h =
                            eK[
                              (i =
                                l.name +
                                "_$" +
                                s
                                  .slice(1)
                                  .map(function (r) {
                                    return r.name;
                                  })
                                  .join("_") +
                                "$")
                            ];
                        if (void 0 !== h) return h;
                        var m = Array(r - 1);
                        return (
                          (o = eX.length),
                          eX.push((i, o, h, v) => {
                            for (var y = 0, w = 0; w < r - 1; ++w)
                              ((m[w] = s[w + 1].readValueFromPointer(v + y)),
                                (y += s[w + 1].argPackAdvance));
                            for (w = 0, i = i[o].apply(i, m); w < r - 1; ++w)
                              s[w + 1].Hb && s[w + 1].Hb(m[w]);
                            if (!l.Zb) return l.toWireType(h, i);
                          }),
                          (h = o),
                          (eK[i] = h)
                        );
                      },
                      _emval_get_property: function (r, i) {
                        return ic((r = hc(r))[(i = hc(i))]);
                      },
                      _emval_incref: function (r) {
                        4 < r && (eP.get(r).qb += 1);
                      },
                      _emval_new_array: function () {
                        return ic([]);
                      },
                      _emval_new_cstring: function (r) {
                        return ic(td(r));
                      },
                      _emval_new_object: function () {
                        return ic({});
                      },
                      _emval_run_destructors: function (r) {
                        (Hc(hc(r)), gd(r));
                      },
                      _emval_set_property: function (r, i, o) {
                        ((r = hc(r)), (i = hc(i)), (o = hc(o)), (r[i] = o));
                      },
                      _emval_take_value: function (r, i) {
                        return ic(
                          (r = (r = vc(
                            r,
                            "_emval_take_value",
                          )).readValueFromPointer(i)),
                        );
                      },
                      abort: () => {
                        wa("");
                      },
                      emscripten_asm_const_int: (r, i, o) => {
                        var s;
                        for (eq.length = 0, o >>= 2; (s = j[i++]); )
                          ((o += (105 != s) & o),
                            eq.push(105 == s ? D[o] : z[o++ >> 1]),
                            ++o);
                        return es[r].apply(null, eq);
                      },
                      emscripten_date_now: function () {
                        return Date.now();
                      },
                      emscripten_get_now: () => performance.now(),
                      emscripten_glActiveTexture: function (r) {
                        tg.activeTexture(r);
                      },
                      emscripten_glAttachShader: function (r, i) {
                        tg.attachShader(eJ[r], e4[i]);
                      },
                      emscripten_glBindAttribLocation: function (r, i, o) {
                        tg.bindAttribLocation(eJ[r], i, o ? fb(j, o) : "");
                      },
                      emscripten_glBindBuffer: function (r, i) {
                        (35051 == r ? (tg.Ka = i) : 35052 == r && (tg.fa = i),
                          tg.bindBuffer(r, eQ[i]));
                      },
                      emscripten_glBindFramebuffer: Qd,
                      emscripten_glBindRenderbuffer: function (r, i) {
                        tg.bindRenderbuffer(r, e1[i]);
                      },
                      emscripten_glBindSampler: function (r, i) {
                        tg.bindSampler(r, e8[i]);
                      },
                      emscripten_glBindTexture: function (r, i) {
                        tg.bindTexture(r, e2[i]);
                      },
                      emscripten_glBindVertexArray: Rd,
                      emscripten_glBindVertexArrayOES: Rd,
                      emscripten_glBlendColor: function (r, i, o, s) {
                        tg.blendColor(r, i, o, s);
                      },
                      emscripten_glBlendEquation: function (r) {
                        tg.blendEquation(r);
                      },
                      emscripten_glBlendFunc: function (r, i) {
                        tg.blendFunc(r, i);
                      },
                      emscripten_glBlitFramebuffer: function (
                        r,
                        i,
                        o,
                        s,
                        l,
                        h,
                        m,
                        v,
                        y,
                        w,
                      ) {
                        tg.blitFramebuffer(r, i, o, s, l, h, m, v, y, w);
                      },
                      emscripten_glBufferData: function (r, i, o, s) {
                        2 <= tr.version
                          ? o && i
                            ? tg.bufferData(r, j, s, o, i)
                            : tg.bufferData(r, i, s)
                          : tg.bufferData(r, o ? j.subarray(o, o + i) : i, s);
                      },
                      emscripten_glBufferSubData: function (r, i, o, s) {
                        2 <= tr.version
                          ? o && tg.bufferSubData(r, i, j, s, o)
                          : tg.bufferSubData(r, i, j.subarray(s, s + o));
                      },
                      emscripten_glCheckFramebufferStatus: function (r) {
                        return tg.checkFramebufferStatus(r);
                      },
                      emscripten_glClear: function (r) {
                        tg.clear(r);
                      },
                      emscripten_glClearColor: function (r, i, o, s) {
                        tg.clearColor(r, i, o, s);
                      },
                      emscripten_glClearStencil: function (r) {
                        tg.clearStencil(r);
                      },
                      emscripten_glClientWaitSync: function (r, i, o, s) {
                        return tg.clientWaitSync(
                          e5[r],
                          i,
                          (o >>> 0) + 4294967296 * s,
                        );
                      },
                      emscripten_glColorMask: function (r, i, o, s) {
                        tg.colorMask(!!r, !!i, !!o, !!s);
                      },
                      emscripten_glCompileShader: function (r) {
                        tg.compileShader(e4[r]);
                      },
                      emscripten_glCompressedTexImage2D: function (
                        r,
                        i,
                        o,
                        s,
                        l,
                        h,
                        m,
                        v,
                      ) {
                        2 <= tr.version
                          ? tg.fa || !m
                            ? tg.compressedTexImage2D(r, i, o, s, l, h, m, v)
                            : tg.compressedTexImage2D(r, i, o, s, l, h, j, v, m)
                          : tg.compressedTexImage2D(
                              r,
                              i,
                              o,
                              s,
                              l,
                              h,
                              v ? j.subarray(v, v + m) : null,
                            );
                      },
                      emscripten_glCompressedTexSubImage2D: function (
                        r,
                        i,
                        o,
                        s,
                        l,
                        h,
                        m,
                        v,
                        y,
                      ) {
                        2 <= tr.version
                          ? tg.fa || !v
                            ? tg.compressedTexSubImage2D(
                                r,
                                i,
                                o,
                                s,
                                l,
                                h,
                                m,
                                v,
                                y,
                              )
                            : tg.compressedTexSubImage2D(
                                r,
                                i,
                                o,
                                s,
                                l,
                                h,
                                m,
                                j,
                                y,
                                v,
                              )
                          : tg.compressedTexSubImage2D(
                              r,
                              i,
                              o,
                              s,
                              l,
                              h,
                              m,
                              y ? j.subarray(y, y + v) : null,
                            );
                      },
                      emscripten_glCopyTexSubImage2D: function (
                        r,
                        i,
                        o,
                        s,
                        l,
                        h,
                        m,
                        v,
                      ) {
                        tg.copyTexSubImage2D(r, i, o, s, l, h, m, v);
                      },
                      emscripten_glCreateProgram: function () {
                        var r = ha(eJ),
                          i = tg.createProgram();
                        return (
                          (i.name = r),
                          (i.za = i.xa = i.ya = 0),
                          (i.Sa = 1),
                          (eJ[r] = i),
                          r
                        );
                      },
                      emscripten_glCreateShader: function (r) {
                        var i = ha(e4);
                        return ((e4[i] = tg.createShader(r)), i);
                      },
                      emscripten_glCullFace: function (r) {
                        tg.cullFace(r);
                      },
                      emscripten_glDeleteBuffers: function (r, i) {
                        for (var o = 0; o < r; o++) {
                          var s = D[(i + 4 * o) >> 2],
                            l = eQ[s];
                          l &&
                            (tg.deleteBuffer(l),
                            (l.name = 0),
                            (eQ[s] = null),
                            s == tg.Ka && (tg.Ka = 0),
                            s == tg.fa && (tg.fa = 0));
                        }
                      },
                      emscripten_glDeleteFramebuffers: function (r, i) {
                        for (var o = 0; o < r; ++o) {
                          var s = D[(i + 4 * o) >> 2],
                            l = e0[s];
                          l &&
                            (tg.deleteFramebuffer(l),
                            (l.name = 0),
                            (e0[s] = null));
                        }
                      },
                      emscripten_glDeleteProgram: function (r) {
                        if (r) {
                          var i = eJ[r];
                          i
                            ? (tg.deleteProgram(i),
                              (i.name = 0),
                              (eJ[r] = null))
                            : S(1281);
                        }
                      },
                      emscripten_glDeleteRenderbuffers: function (r, i) {
                        for (var o = 0; o < r; o++) {
                          var s = D[(i + 4 * o) >> 2],
                            l = e1[s];
                          l &&
                            (tg.deleteRenderbuffer(l),
                            (l.name = 0),
                            (e1[s] = null));
                        }
                      },
                      emscripten_glDeleteSamplers: function (r, i) {
                        for (var o = 0; o < r; o++) {
                          var s = D[(i + 4 * o) >> 2],
                            l = e8[s];
                          l &&
                            (tg.deleteSampler(l), (l.name = 0), (e8[s] = null));
                        }
                      },
                      emscripten_glDeleteShader: function (r) {
                        if (r) {
                          var i = e4[r];
                          i ? (tg.deleteShader(i), (e4[r] = null)) : S(1281);
                        }
                      },
                      emscripten_glDeleteSync: function (r) {
                        if (r) {
                          var i = e5[r];
                          i
                            ? (tg.deleteSync(i), (i.name = 0), (e5[r] = null))
                            : S(1281);
                        }
                      },
                      emscripten_glDeleteTextures: function (r, i) {
                        for (var o = 0; o < r; o++) {
                          var s = D[(i + 4 * o) >> 2],
                            l = e2[s];
                          l &&
                            (tg.deleteTexture(l), (l.name = 0), (e2[s] = null));
                        }
                      },
                      emscripten_glDeleteVertexArrays: Sd,
                      emscripten_glDeleteVertexArraysOES: Sd,
                      emscripten_glDepthMask: function (r) {
                        tg.depthMask(!!r);
                      },
                      emscripten_glDisable: function (r) {
                        tg.disable(r);
                      },
                      emscripten_glDisableVertexAttribArray: function (r) {
                        tg.disableVertexAttribArray(r);
                      },
                      emscripten_glDrawArrays: function (r, i, o) {
                        tg.drawArrays(r, i, o);
                      },
                      emscripten_glDrawArraysInstanced: function (r, i, o, s) {
                        tg.drawArraysInstanced(r, i, o, s);
                      },
                      emscripten_glDrawArraysInstancedBaseInstanceWEBGL:
                        function (r, i, o, s, l) {
                          tg.Za.drawArraysInstancedBaseInstanceWEBGL(
                            r,
                            i,
                            o,
                            s,
                            l,
                          );
                        },
                      emscripten_glDrawBuffers: function (r, i) {
                        for (var o = tt[r], s = 0; s < r; s++)
                          o[s] = D[(i + 4 * s) >> 2];
                        tg.drawBuffers(o);
                      },
                      emscripten_glDrawElements: Ud,
                      emscripten_glDrawElementsInstanced: function (
                        r,
                        i,
                        o,
                        s,
                        l,
                      ) {
                        tg.drawElementsInstanced(r, i, o, s, l);
                      },
                      emscripten_glDrawElementsInstancedBaseVertexBaseInstanceWEBGL:
                        function (r, i, o, s, l, h, m) {
                          tg.Za.drawElementsInstancedBaseVertexBaseInstanceWEBGL(
                            r,
                            i,
                            o,
                            s,
                            l,
                            h,
                            m,
                          );
                        },
                      emscripten_glDrawRangeElements: function (
                        r,
                        i,
                        o,
                        s,
                        l,
                        h,
                      ) {
                        Ud(r, s, l, h);
                      },
                      emscripten_glEnable: function (r) {
                        tg.enable(r);
                      },
                      emscripten_glEnableVertexAttribArray: function (r) {
                        tg.enableVertexAttribArray(r);
                      },
                      emscripten_glFenceSync: function (r, i) {
                        return (r = tg.fenceSync(r, i))
                          ? ((i = ha(e5)), (r.name = i), (e5[i] = r), i)
                          : 0;
                      },
                      emscripten_glFinish: function () {
                        tg.finish();
                      },
                      emscripten_glFlush: function () {
                        tg.flush();
                      },
                      emscripten_glFramebufferRenderbuffer: function (
                        r,
                        i,
                        o,
                        s,
                      ) {
                        tg.framebufferRenderbuffer(r, i, o, e1[s]);
                      },
                      emscripten_glFramebufferTexture2D: function (
                        r,
                        i,
                        o,
                        s,
                        l,
                      ) {
                        tg.framebufferTexture2D(r, i, o, e2[s], l);
                      },
                      emscripten_glFrontFace: function (r) {
                        tg.frontFace(r);
                      },
                      emscripten_glGenBuffers: function (r, i) {
                        Vd(r, i, "createBuffer", eQ);
                      },
                      emscripten_glGenFramebuffers: function (r, i) {
                        Vd(r, i, "createFramebuffer", e0);
                      },
                      emscripten_glGenRenderbuffers: function (r, i) {
                        Vd(r, i, "createRenderbuffer", e1);
                      },
                      emscripten_glGenSamplers: function (r, i) {
                        Vd(r, i, "createSampler", e8);
                      },
                      emscripten_glGenTextures: function (r, i) {
                        Vd(r, i, "createTexture", e2);
                      },
                      emscripten_glGenVertexArrays: Wd,
                      emscripten_glGenVertexArraysOES: Wd,
                      emscripten_glGenerateMipmap: function (r) {
                        tg.generateMipmap(r);
                      },
                      emscripten_glGetBufferParameteriv: function (r, i, o) {
                        o ? (D[o >> 2] = tg.getBufferParameter(r, i)) : S(1281);
                      },
                      emscripten_glGetError: function () {
                        var r = tg.getError() || tn;
                        return ((tn = 0), r);
                      },
                      emscripten_glGetFramebufferAttachmentParameteriv:
                        function (r, i, o, s) {
                          (((r = tg.getFramebufferAttachmentParameter(
                            r,
                            i,
                            o,
                          )) instanceof WebGLRenderbuffer ||
                            r instanceof WebGLTexture) &&
                            (r = 0 | r.name),
                            (D[s >> 2] = r));
                        },
                      emscripten_glGetIntegerv: Yd,
                      emscripten_glGetProgramInfoLog: function (r, i, o, s) {
                        (null === (r = tg.getProgramInfoLog(eJ[r])) &&
                          (r = "(unknown error)"),
                          (i = 0 < i && s ? ib(r, j, s, i) : 0),
                          o && (D[o >> 2] = i));
                      },
                      emscripten_glGetProgramiv: function (r, i, o) {
                        if (o) {
                          if (r >= eZ) S(1281);
                          else if (((r = eJ[r]), 35716 == i))
                            (null === (r = tg.getProgramInfoLog(r)) &&
                              (r = "(unknown error)"),
                              (D[o >> 2] = r.length + 1));
                          else if (35719 == i) {
                            if (!r.za)
                              for (
                                i = 0;
                                i < tg.getProgramParameter(r, 35718);
                                ++i
                              )
                                r.za = Math.max(
                                  r.za,
                                  tg.getActiveUniform(r, i).name.length + 1,
                                );
                            D[o >> 2] = r.za;
                          } else if (35722 == i) {
                            if (!r.xa)
                              for (
                                i = 0;
                                i < tg.getProgramParameter(r, 35721);
                                ++i
                              )
                                r.xa = Math.max(
                                  r.xa,
                                  tg.getActiveAttrib(r, i).name.length + 1,
                                );
                            D[o >> 2] = r.xa;
                          } else if (35381 == i) {
                            if (!r.ya)
                              for (
                                i = 0;
                                i < tg.getProgramParameter(r, 35382);
                                ++i
                              )
                                r.ya = Math.max(
                                  r.ya,
                                  tg.getActiveUniformBlockName(r, i).length + 1,
                                );
                            D[o >> 2] = r.ya;
                          } else D[o >> 2] = tg.getProgramParameter(r, i);
                        } else S(1281);
                      },
                      emscripten_glGetRenderbufferParameteriv: function (
                        r,
                        i,
                        o,
                      ) {
                        o
                          ? (D[o >> 2] = tg.getRenderbufferParameter(r, i))
                          : S(1281);
                      },
                      emscripten_glGetShaderInfoLog: function (r, i, o, s) {
                        (null === (r = tg.getShaderInfoLog(e4[r])) &&
                          (r = "(unknown error)"),
                          (i = 0 < i && s ? ib(r, j, s, i) : 0),
                          o && (D[o >> 2] = i));
                      },
                      emscripten_glGetShaderPrecisionFormat: function (
                        r,
                        i,
                        o,
                        s,
                      ) {
                        ((r = tg.getShaderPrecisionFormat(r, i)),
                          (D[o >> 2] = r.rangeMin),
                          (D[(o + 4) >> 2] = r.rangeMax),
                          (D[s >> 2] = r.precision));
                      },
                      emscripten_glGetShaderiv: function (r, i, o) {
                        o
                          ? 35716 == i
                            ? (null === (r = tg.getShaderInfoLog(e4[r])) &&
                                (r = "(unknown error)"),
                              (D[o >> 2] = r ? r.length + 1 : 0))
                            : 35720 == i
                              ? ((r = tg.getShaderSource(e4[r])),
                                (D[o >> 2] = r ? r.length + 1 : 0))
                              : (D[o >> 2] = tg.getShaderParameter(e4[r], i))
                          : S(1281);
                      },
                      emscripten_glGetString: function (r) {
                        var i = e9[r];
                        if (!i) {
                          switch (r) {
                            case 7939:
                              i = $d(
                                (i = (i =
                                  tg.getSupportedExtensions() || []).concat(
                                  i.map(function (r) {
                                    return "GL_" + r;
                                  }),
                                )).join(" "),
                              );
                              break;
                            case 7936:
                            case 7937:
                            case 37445:
                            case 37446:
                              ((i = tg.getParameter(r)) || S(1280),
                                (i = i && $d(i)));
                              break;
                            case 7938:
                              ((i = tg.getParameter(7938)),
                                (i = $d(
                                  (i =
                                    2 <= tr.version
                                      ? "OpenGL ES 3.0 (" + i + ")"
                                      : "OpenGL ES 2.0 (" + i + ")"),
                                )));
                              break;
                            case 35724:
                              var o = (i = tg.getParameter(35724)).match(
                                /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/,
                              );
                              (null !== o &&
                                (3 == o[1].length && (o[1] += "0"),
                                (i =
                                  "OpenGL ES GLSL ES " +
                                  o[1] +
                                  " (" +
                                  i +
                                  ")")),
                                (i = $d(i)));
                              break;
                            default:
                              S(1280);
                          }
                          e9[r] = i;
                        }
                        return i;
                      },
                      emscripten_glGetStringi: function (r, i) {
                        if (2 > tr.version) return (S(1282), 0);
                        var o = e7[r];
                        return o
                          ? 0 > i || i >= o.length
                            ? (S(1281), 0)
                            : o[i]
                          : 7939 === r
                            ? ((o = (o = (o =
                                tg.getSupportedExtensions() || []).concat(
                                o.map(function (r) {
                                  return "GL_" + r;
                                }),
                              )).map(function (r) {
                                return $d(r);
                              })),
                              (o = e7[r] = o),
                              0 > i || i >= o.length ? (S(1281), 0) : o[i])
                            : (S(1280), 0);
                      },
                      emscripten_glGetUniformLocation: function (r, i) {
                        if (((i = i ? fb(j, i) : ""), (r = eJ[r]))) {
                          var o,
                            s = r,
                            l = s.ma,
                            h = s.vb;
                          if (!l)
                            for (
                              s.ma = l = {}, s.ub = {}, o = 0;
                              o < tg.getProgramParameter(s, 35718);
                              ++o
                            ) {
                              var m = tg.getActiveUniform(s, o),
                                v = m.name;
                              m = m.size;
                              var y = ae(v);
                              y = 0 < y ? v.slice(0, y) : v;
                              var w = s.Sa;
                              for (s.Sa += m, h[y] = [m, w], v = 0; v < m; ++v)
                                ((l[w] = v), (s.ub[w++] = y));
                            }
                          if (
                            ((s = r.ma),
                            (l = 0),
                            (h = i),
                            0 < (o = ae(i)) &&
                              ((l = parseInt(i.slice(o + 1)) >>> 0),
                              (h = i.slice(0, o))),
                            (h = r.vb[h]) &&
                              l < h[0] &&
                              (s[(l += h[1])] =
                                s[l] || tg.getUniformLocation(r, i)))
                          )
                            return l;
                        } else S(1281);
                        return -1;
                      },
                      emscripten_glInvalidateFramebuffer: function (r, i, o) {
                        for (var s = tt[i], l = 0; l < i; l++)
                          s[l] = D[(o + 4 * l) >> 2];
                        tg.invalidateFramebuffer(r, s);
                      },
                      emscripten_glInvalidateSubFramebuffer: function (
                        r,
                        i,
                        o,
                        s,
                        l,
                        h,
                        m,
                      ) {
                        for (var v = tt[i], y = 0; y < i; y++)
                          v[y] = D[(o + 4 * y) >> 2];
                        tg.invalidateSubFramebuffer(r, v, s, l, h, m);
                      },
                      emscripten_glIsSync: function (r) {
                        return tg.isSync(e5[r]);
                      },
                      emscripten_glIsTexture: function (r) {
                        return (r = e2[r]) ? tg.isTexture(r) : 0;
                      },
                      emscripten_glLineWidth: function (r) {
                        tg.lineWidth(r);
                      },
                      emscripten_glLinkProgram: function (r) {
                        ((r = eJ[r]),
                          tg.linkProgram(r),
                          (r.ma = 0),
                          (r.vb = {}));
                      },
                      emscripten_glMultiDrawArraysInstancedBaseInstanceWEBGL:
                        function (r, i, o, s, l, h) {
                          tg.hb.multiDrawArraysInstancedBaseInstanceWEBGL(
                            r,
                            D,
                            i >> 2,
                            D,
                            o >> 2,
                            D,
                            s >> 2,
                            B,
                            l >> 2,
                            h,
                          );
                        },
                      emscripten_glMultiDrawElementsInstancedBaseVertexBaseInstanceWEBGL:
                        function (r, i, o, s, l, h, m, v) {
                          tg.hb.multiDrawElementsInstancedBaseVertexBaseInstanceWEBGL(
                            r,
                            D,
                            i >> 2,
                            o,
                            D,
                            s >> 2,
                            D,
                            l >> 2,
                            D,
                            h >> 2,
                            B,
                            m >> 2,
                            v,
                          );
                        },
                      emscripten_glPixelStorei: function (r, i) {
                        (3317 == r && (te = i), tg.pixelStorei(r, i));
                      },
                      emscripten_glReadBuffer: function (r) {
                        tg.readBuffer(r);
                      },
                      emscripten_glReadPixels: function (r, i, o, s, l, h, m) {
                        if (2 <= tr.version) {
                          if (tg.Ka) tg.readPixels(r, i, o, s, l, h, m);
                          else {
                            var v = be(h);
                            tg.readPixels(
                              r,
                              i,
                              o,
                              s,
                              l,
                              h,
                              v,
                              m >> (31 - Math.clz32(v.BYTES_PER_ELEMENT)),
                            );
                          }
                        } else
                          (m = ce(h, l, o, s, m))
                            ? tg.readPixels(r, i, o, s, l, h, m)
                            : S(1280);
                      },
                      emscripten_glRenderbufferStorage: function (r, i, o, s) {
                        tg.renderbufferStorage(r, i, o, s);
                      },
                      emscripten_glRenderbufferStorageMultisample: function (
                        r,
                        i,
                        o,
                        s,
                        l,
                      ) {
                        tg.renderbufferStorageMultisample(r, i, o, s, l);
                      },
                      emscripten_glSamplerParameteri: function (r, i, o) {
                        tg.samplerParameteri(e8[r], i, o);
                      },
                      emscripten_glSamplerParameteriv: function (r, i, o) {
                        tg.samplerParameteri(e8[r], i, D[o >> 2]);
                      },
                      emscripten_glScissor: function (r, i, o, s) {
                        tg.scissor(r, i, o, s);
                      },
                      emscripten_glShaderSource: function (r, i, o, s) {
                        for (var l = "", h = 0; h < i; ++h) {
                          var m = s ? D[(s + 4 * h) >> 2] : -1,
                            v = D[(o + 4 * h) >> 2];
                          l += m = v ? fb(j, v, 0 > m ? void 0 : m) : "";
                        }
                        tg.shaderSource(e4[r], l);
                      },
                      emscripten_glStencilFunc: function (r, i, o) {
                        tg.stencilFunc(r, i, o);
                      },
                      emscripten_glStencilFuncSeparate: function (r, i, o, s) {
                        tg.stencilFuncSeparate(r, i, o, s);
                      },
                      emscripten_glStencilMask: function (r) {
                        tg.stencilMask(r);
                      },
                      emscripten_glStencilMaskSeparate: function (r, i) {
                        tg.stencilMaskSeparate(r, i);
                      },
                      emscripten_glStencilOp: function (r, i, o) {
                        tg.stencilOp(r, i, o);
                      },
                      emscripten_glStencilOpSeparate: function (r, i, o, s) {
                        tg.stencilOpSeparate(r, i, o, s);
                      },
                      emscripten_glTexImage2D: function (
                        r,
                        i,
                        o,
                        s,
                        l,
                        h,
                        m,
                        v,
                        y,
                      ) {
                        if (2 <= tr.version) {
                          if (tg.fa) tg.texImage2D(r, i, o, s, l, h, m, v, y);
                          else if (y) {
                            var w = be(v);
                            tg.texImage2D(
                              r,
                              i,
                              o,
                              s,
                              l,
                              h,
                              m,
                              v,
                              w,
                              y >> (31 - Math.clz32(w.BYTES_PER_ELEMENT)),
                            );
                          } else tg.texImage2D(r, i, o, s, l, h, m, v, null);
                        } else
                          tg.texImage2D(
                            r,
                            i,
                            o,
                            s,
                            l,
                            h,
                            m,
                            v,
                            y ? ce(v, m, s, l, y) : null,
                          );
                      },
                      emscripten_glTexParameterf: function (r, i, o) {
                        tg.texParameterf(r, i, o);
                      },
                      emscripten_glTexParameterfv: function (r, i, o) {
                        tg.texParameterf(r, i, U[o >> 2]);
                      },
                      emscripten_glTexParameteri: function (r, i, o) {
                        tg.texParameteri(r, i, o);
                      },
                      emscripten_glTexParameteriv: function (r, i, o) {
                        tg.texParameteri(r, i, D[o >> 2]);
                      },
                      emscripten_glTexStorage2D: function (r, i, o, s, l) {
                        tg.texStorage2D(r, i, o, s, l);
                      },
                      emscripten_glTexSubImage2D: function (
                        r,
                        i,
                        o,
                        s,
                        l,
                        h,
                        m,
                        v,
                        y,
                      ) {
                        if (2 <= tr.version) {
                          if (tg.fa)
                            tg.texSubImage2D(r, i, o, s, l, h, m, v, y);
                          else if (y) {
                            var w = be(v);
                            tg.texSubImage2D(
                              r,
                              i,
                              o,
                              s,
                              l,
                              h,
                              m,
                              v,
                              w,
                              y >> (31 - Math.clz32(w.BYTES_PER_ELEMENT)),
                            );
                          } else tg.texSubImage2D(r, i, o, s, l, h, m, v, null);
                        } else
                          ((w = null),
                            y && (w = ce(v, m, l, h, y)),
                            tg.texSubImage2D(r, i, o, s, l, h, m, v, w));
                      },
                      emscripten_glUniform1f: function (r, i) {
                        tg.uniform1f(V(r), i);
                      },
                      emscripten_glUniform1fv: function (r, i, o) {
                        if (2 <= tr.version)
                          i && tg.uniform1fv(V(r), U, o >> 2, i);
                        else {
                          if (288 >= i)
                            for (var s = ta[i - 1], l = 0; l < i; ++l)
                              s[l] = U[(o + 4 * l) >> 2];
                          else s = U.subarray(o >> 2, (o + 4 * i) >> 2);
                          tg.uniform1fv(V(r), s);
                        }
                      },
                      emscripten_glUniform1i: function (r, i) {
                        tg.uniform1i(V(r), i);
                      },
                      emscripten_glUniform1iv: function (r, i, o) {
                        if (2 <= tr.version)
                          i && tg.uniform1iv(V(r), D, o >> 2, i);
                        else {
                          if (288 >= i)
                            for (var s = to[i - 1], l = 0; l < i; ++l)
                              s[l] = D[(o + 4 * l) >> 2];
                          else s = D.subarray(o >> 2, (o + 4 * i) >> 2);
                          tg.uniform1iv(V(r), s);
                        }
                      },
                      emscripten_glUniform2f: function (r, i, o) {
                        tg.uniform2f(V(r), i, o);
                      },
                      emscripten_glUniform2fv: function (r, i, o) {
                        if (2 <= tr.version)
                          i && tg.uniform2fv(V(r), U, o >> 2, 2 * i);
                        else {
                          if (144 >= i)
                            for (
                              var s = ta[2 * i - 1], l = 0;
                              l < 2 * i;
                              l += 2
                            )
                              ((s[l] = U[(o + 4 * l) >> 2]),
                                (s[l + 1] = U[(o + (4 * l + 4)) >> 2]));
                          else s = U.subarray(o >> 2, (o + 8 * i) >> 2);
                          tg.uniform2fv(V(r), s);
                        }
                      },
                      emscripten_glUniform2i: function (r, i, o) {
                        tg.uniform2i(V(r), i, o);
                      },
                      emscripten_glUniform2iv: function (r, i, o) {
                        if (2 <= tr.version)
                          i && tg.uniform2iv(V(r), D, o >> 2, 2 * i);
                        else {
                          if (144 >= i)
                            for (
                              var s = to[2 * i - 1], l = 0;
                              l < 2 * i;
                              l += 2
                            )
                              ((s[l] = D[(o + 4 * l) >> 2]),
                                (s[l + 1] = D[(o + (4 * l + 4)) >> 2]));
                          else s = D.subarray(o >> 2, (o + 8 * i) >> 2);
                          tg.uniform2iv(V(r), s);
                        }
                      },
                      emscripten_glUniform3f: function (r, i, o, s) {
                        tg.uniform3f(V(r), i, o, s);
                      },
                      emscripten_glUniform3fv: function (r, i, o) {
                        if (2 <= tr.version)
                          i && tg.uniform3fv(V(r), U, o >> 2, 3 * i);
                        else {
                          if (96 >= i)
                            for (
                              var s = ta[3 * i - 1], l = 0;
                              l < 3 * i;
                              l += 3
                            )
                              ((s[l] = U[(o + 4 * l) >> 2]),
                                (s[l + 1] = U[(o + (4 * l + 4)) >> 2]),
                                (s[l + 2] = U[(o + (4 * l + 8)) >> 2]));
                          else s = U.subarray(o >> 2, (o + 12 * i) >> 2);
                          tg.uniform3fv(V(r), s);
                        }
                      },
                      emscripten_glUniform3i: function (r, i, o, s) {
                        tg.uniform3i(V(r), i, o, s);
                      },
                      emscripten_glUniform3iv: function (r, i, o) {
                        if (2 <= tr.version)
                          i && tg.uniform3iv(V(r), D, o >> 2, 3 * i);
                        else {
                          if (96 >= i)
                            for (
                              var s = to[3 * i - 1], l = 0;
                              l < 3 * i;
                              l += 3
                            )
                              ((s[l] = D[(o + 4 * l) >> 2]),
                                (s[l + 1] = D[(o + (4 * l + 4)) >> 2]),
                                (s[l + 2] = D[(o + (4 * l + 8)) >> 2]));
                          else s = D.subarray(o >> 2, (o + 12 * i) >> 2);
                          tg.uniform3iv(V(r), s);
                        }
                      },
                      emscripten_glUniform4f: function (r, i, o, s, l) {
                        tg.uniform4f(V(r), i, o, s, l);
                      },
                      emscripten_glUniform4fv: function (r, i, o) {
                        if (2 <= tr.version)
                          i && tg.uniform4fv(V(r), U, o >> 2, 4 * i);
                        else {
                          if (72 >= i) {
                            var s = ta[4 * i - 1],
                              l = U;
                            o >>= 2;
                            for (var h = 0; h < 4 * i; h += 4) {
                              var m = o + h;
                              ((s[h] = l[m]),
                                (s[h + 1] = l[m + 1]),
                                (s[h + 2] = l[m + 2]),
                                (s[h + 3] = l[m + 3]));
                            }
                          } else s = U.subarray(o >> 2, (o + 16 * i) >> 2);
                          tg.uniform4fv(V(r), s);
                        }
                      },
                      emscripten_glUniform4i: function (r, i, o, s, l) {
                        tg.uniform4i(V(r), i, o, s, l);
                      },
                      emscripten_glUniform4iv: function (r, i, o) {
                        if (2 <= tr.version)
                          i && tg.uniform4iv(V(r), D, o >> 2, 4 * i);
                        else {
                          if (72 >= i)
                            for (
                              var s = to[4 * i - 1], l = 0;
                              l < 4 * i;
                              l += 4
                            )
                              ((s[l] = D[(o + 4 * l) >> 2]),
                                (s[l + 1] = D[(o + (4 * l + 4)) >> 2]),
                                (s[l + 2] = D[(o + (4 * l + 8)) >> 2]),
                                (s[l + 3] = D[(o + (4 * l + 12)) >> 2]));
                          else s = D.subarray(o >> 2, (o + 16 * i) >> 2);
                          tg.uniform4iv(V(r), s);
                        }
                      },
                      emscripten_glUniformMatrix2fv: function (r, i, o, s) {
                        if (2 <= tr.version)
                          i && tg.uniformMatrix2fv(V(r), !!o, U, s >> 2, 4 * i);
                        else {
                          if (72 >= i)
                            for (
                              var l = ta[4 * i - 1], h = 0;
                              h < 4 * i;
                              h += 4
                            )
                              ((l[h] = U[(s + 4 * h) >> 2]),
                                (l[h + 1] = U[(s + (4 * h + 4)) >> 2]),
                                (l[h + 2] = U[(s + (4 * h + 8)) >> 2]),
                                (l[h + 3] = U[(s + (4 * h + 12)) >> 2]));
                          else l = U.subarray(s >> 2, (s + 16 * i) >> 2);
                          tg.uniformMatrix2fv(V(r), !!o, l);
                        }
                      },
                      emscripten_glUniformMatrix3fv: function (r, i, o, s) {
                        if (2 <= tr.version)
                          i && tg.uniformMatrix3fv(V(r), !!o, U, s >> 2, 9 * i);
                        else {
                          if (32 >= i)
                            for (
                              var l = ta[9 * i - 1], h = 0;
                              h < 9 * i;
                              h += 9
                            )
                              ((l[h] = U[(s + 4 * h) >> 2]),
                                (l[h + 1] = U[(s + (4 * h + 4)) >> 2]),
                                (l[h + 2] = U[(s + (4 * h + 8)) >> 2]),
                                (l[h + 3] = U[(s + (4 * h + 12)) >> 2]),
                                (l[h + 4] = U[(s + (4 * h + 16)) >> 2]),
                                (l[h + 5] = U[(s + (4 * h + 20)) >> 2]),
                                (l[h + 6] = U[(s + (4 * h + 24)) >> 2]),
                                (l[h + 7] = U[(s + (4 * h + 28)) >> 2]),
                                (l[h + 8] = U[(s + (4 * h + 32)) >> 2]));
                          else l = U.subarray(s >> 2, (s + 36 * i) >> 2);
                          tg.uniformMatrix3fv(V(r), !!o, l);
                        }
                      },
                      emscripten_glUniformMatrix4fv: function (r, i, o, s) {
                        if (2 <= tr.version)
                          i &&
                            tg.uniformMatrix4fv(V(r), !!o, U, s >> 2, 16 * i);
                        else {
                          if (18 >= i) {
                            var l = ta[16 * i - 1],
                              h = U;
                            s >>= 2;
                            for (var m = 0; m < 16 * i; m += 16) {
                              var v = s + m;
                              ((l[m] = h[v]),
                                (l[m + 1] = h[v + 1]),
                                (l[m + 2] = h[v + 2]),
                                (l[m + 3] = h[v + 3]),
                                (l[m + 4] = h[v + 4]),
                                (l[m + 5] = h[v + 5]),
                                (l[m + 6] = h[v + 6]),
                                (l[m + 7] = h[v + 7]),
                                (l[m + 8] = h[v + 8]),
                                (l[m + 9] = h[v + 9]),
                                (l[m + 10] = h[v + 10]),
                                (l[m + 11] = h[v + 11]),
                                (l[m + 12] = h[v + 12]),
                                (l[m + 13] = h[v + 13]),
                                (l[m + 14] = h[v + 14]),
                                (l[m + 15] = h[v + 15]));
                            }
                          } else l = U.subarray(s >> 2, (s + 64 * i) >> 2);
                          tg.uniformMatrix4fv(V(r), !!o, l);
                        }
                      },
                      emscripten_glUseProgram: function (r) {
                        ((r = eJ[r]), tg.useProgram(r), (tg.Gb = r));
                      },
                      emscripten_glVertexAttrib1f: function (r, i) {
                        tg.vertexAttrib1f(r, i);
                      },
                      emscripten_glVertexAttrib2fv: function (r, i) {
                        tg.vertexAttrib2f(r, U[i >> 2], U[(i + 4) >> 2]);
                      },
                      emscripten_glVertexAttrib3fv: function (r, i) {
                        tg.vertexAttrib3f(
                          r,
                          U[i >> 2],
                          U[(i + 4) >> 2],
                          U[(i + 8) >> 2],
                        );
                      },
                      emscripten_glVertexAttrib4fv: function (r, i) {
                        tg.vertexAttrib4f(
                          r,
                          U[i >> 2],
                          U[(i + 4) >> 2],
                          U[(i + 8) >> 2],
                          U[(i + 12) >> 2],
                        );
                      },
                      emscripten_glVertexAttribDivisor: function (r, i) {
                        tg.vertexAttribDivisor(r, i);
                      },
                      emscripten_glVertexAttribIPointer: function (
                        r,
                        i,
                        o,
                        s,
                        l,
                      ) {
                        tg.vertexAttribIPointer(r, i, o, s, l);
                      },
                      emscripten_glVertexAttribPointer: function (
                        r,
                        i,
                        o,
                        s,
                        l,
                        h,
                      ) {
                        tg.vertexAttribPointer(r, i, o, !!s, l, h);
                      },
                      emscripten_glViewport: function (r, i, o, s) {
                        tg.viewport(r, i, o, s);
                      },
                      emscripten_glWaitSync: function (r, i, o, s) {
                        tg.waitSync(e5[r], i, (o >>> 0) + 4294967296 * s);
                      },
                      emscripten_memcpy_big: (r, i, o) =>
                        j.copyWithin(r, i, i + o),
                      emscripten_resize_heap: (r) => {
                        var i = j.length;
                        if (2147483648 < (r >>>= 0)) return !1;
                        for (var o = 1; 4 >= o; o *= 2) {
                          var s = i * (1 + 0.2 / o);
                          s = Math.min(s, r + 100663296);
                          var l = Math;
                          s = Math.max(r, s);
                          e: {
                            l =
                              (l.min.call(
                                l,
                                2147483648,
                                s + ((65536 - (s % 65536)) % 65536),
                              ) -
                                P.buffer.byteLength +
                                65535) >>>
                              16;
                            try {
                              (P.grow(l), Ba());
                              var h = 1;
                              break e;
                            } catch (r) {}
                            h = void 0;
                          }
                          if (h) return !0;
                        }
                        return !1;
                      },
                      emscripten_webgl_get_current_context: function () {
                        return tr ? tr.handle : 0;
                      },
                      emscripten_webgl_make_context_current: function (r) {
                        return la(r) ? 0 : -5;
                      },
                      environ_get: (r, i) => {
                        var o = 0;
                        return (
                          he().forEach(function (s, l) {
                            var h = i + o;
                            for (
                              l = B[(r + 4 * l) >> 2] = h, h = 0;
                              h < s.length;
                              ++h
                            )
                              T[l++ >> 0] = s.charCodeAt(h);
                            ((T[l >> 0] = 0), (o += s.length + 1));
                          }),
                          0
                        );
                      },
                      environ_sizes_get: (r, i) => {
                        var o = he();
                        B[r >> 2] = o.length;
                        var s = 0;
                        return (
                          o.forEach(function (r) {
                            s += r.length + 1;
                          }),
                          (B[i >> 2] = s),
                          0
                        );
                      },
                      fd_close: function (r) {
                        try {
                          var i = Nb(r);
                          if (null === i.V) throw new eR(8);
                          i.Ma && (i.Ma = null);
                          try {
                            i.m.close && i.m.close(i);
                          } catch (r) {
                            throw r;
                          } finally {
                            e_[i.V] = null;
                          }
                          return ((i.V = null), 0);
                        } catch (r) {
                          if (void 0 === eE || "ErrnoError" !== r.name) throw r;
                          return r.Z;
                        }
                      },
                      fd_read: function (r, i, o, s) {
                        try {
                          e: {
                            var l = Nb(r);
                            r = i;
                            for (var h, m = (i = 0); m < o; m++) {
                              var v = B[r >> 2],
                                y = B[(r + 4) >> 2];
                              r += 8;
                              var w = h,
                                _ = T;
                              if (0 > y || 0 > w) throw new eR(28);
                              if (null === l.V || 1 == (2097155 & l.flags))
                                throw new eR(8);
                              if (16384 == (61440 & l.node.mode))
                                throw new eR(31);
                              if (!l.m.read) throw new eR(28);
                              var A = void 0 !== w;
                              if (A) {
                                if (!l.seekable) throw new eR(70);
                              } else w = l.position;
                              var M = l.m.read(l, _, v, y, w);
                              if ((A || (l.position += M), 0 > M)) {
                                var I = -1;
                                break e;
                              }
                              if (((i += M), M < y)) break;
                              void 0 !== h && (h += M);
                            }
                            I = i;
                          }
                          return ((B[s >> 2] = I), 0);
                        } catch (r) {
                          if (void 0 === eE || "ErrnoError" !== r.name) throw r;
                          return r.Z;
                        }
                      },
                      fd_seek: function (r, i, o, s, l) {
                        i =
                          (o + 2097152) >>> 0 < 4194305 - !!i
                            ? (i >>> 0) + 4294967296 * o
                            : NaN;
                        try {
                          if (isNaN(i)) return 61;
                          var h = Nb(r);
                          return (
                            Wb(h, i, s),
                            (eo = [
                              h.position >>> 0,
                              ((ea = h.position),
                              1 <= +Math.abs(ea)
                                ? 0 < ea
                                  ? +Math.floor(ea / 4294967296) >>> 0
                                  : ~~+Math.ceil(
                                      (ea - +(~~ea >>> 0)) / 4294967296,
                                    ) >>> 0
                                : 0),
                            ]),
                            (D[l >> 2] = eo[0]),
                            (D[(l + 4) >> 2] = eo[1]),
                            h.Ma && 0 === i && 0 === s && (h.Ma = null),
                            0
                          );
                        } catch (r) {
                          if (void 0 === eE || "ErrnoError" !== r.name) throw r;
                          return r.Z;
                        }
                      },
                      fd_write: function (r, i, o, s) {
                        try {
                          e: {
                            var l = Nb(r);
                            r = i;
                            for (var h, m = (i = 0); m < o; m++) {
                              var v = B[r >> 2],
                                y = B[(r + 4) >> 2];
                              r += 8;
                              var w = h,
                                _ = T;
                              if (0 > y || 0 > w) throw new eR(28);
                              if (null === l.V || 0 == (2097155 & l.flags))
                                throw new eR(8);
                              if (16384 == (61440 & l.node.mode))
                                throw new eR(31);
                              if (!l.m.write) throw new eR(28);
                              l.seekable && 1024 & l.flags && Wb(l, 0, 2);
                              var A = void 0 !== w;
                              if (A) {
                                if (!l.seekable) throw new eR(70);
                              } else w = l.position;
                              var M = l.m.write(l, _, v, y, w, void 0);
                              if ((A || (l.position += M), 0 > M)) {
                                var I = -1;
                                break e;
                              }
                              ((i += M), void 0 !== h && (h += M));
                            }
                            I = i;
                          }
                          return ((B[s >> 2] = I), 0);
                        } catch (r) {
                          if (void 0 === eE || "ErrnoError" !== r.name) throw r;
                          return r.Z;
                        }
                      },
                      glBindFramebuffer: Qd,
                      glGetIntegerv: Yd,
                      invoke_ii: function (r, i) {
                        var o = Y();
                        try {
                          return Q(r)(i);
                        } catch (r) {
                          if ((Z(o), r !== r + 0)) throw r;
                          X(1, 0);
                        }
                      },
                      invoke_iii: function (r, i, o) {
                        var s = Y();
                        try {
                          return Q(r)(i, o);
                        } catch (r) {
                          if ((Z(s), r !== r + 0)) throw r;
                          X(1, 0);
                        }
                      },
                      invoke_iiii: function (r, i, o, s) {
                        var l = Y();
                        try {
                          return Q(r)(i, o, s);
                        } catch (r) {
                          if ((Z(l), r !== r + 0)) throw r;
                          X(1, 0);
                        }
                      },
                      invoke_iiiii: function (r, i, o, s, l) {
                        var h = Y();
                        try {
                          return Q(r)(i, o, s, l);
                        } catch (r) {
                          if ((Z(h), r !== r + 0)) throw r;
                          X(1, 0);
                        }
                      },
                      invoke_iiiiii: function (r, i, o, s, l, h) {
                        var m = Y();
                        try {
                          return Q(r)(i, o, s, l, h);
                        } catch (r) {
                          if ((Z(m), r !== r + 0)) throw r;
                          X(1, 0);
                        }
                      },
                      invoke_iiiiiii: function (r, i, o, s, l, h, m) {
                        var v = Y();
                        try {
                          return Q(r)(i, o, s, l, h, m);
                        } catch (r) {
                          if ((Z(v), r !== r + 0)) throw r;
                          X(1, 0);
                        }
                      },
                      invoke_iiiiiiiiii: function (
                        r,
                        i,
                        o,
                        s,
                        l,
                        h,
                        m,
                        v,
                        y,
                        w,
                      ) {
                        var _ = Y();
                        try {
                          return Q(r)(i, o, s, l, h, m, v, y, w);
                        } catch (r) {
                          if ((Z(_), r !== r + 0)) throw r;
                          X(1, 0);
                        }
                      },
                      invoke_v: function (r) {
                        var i = Y();
                        try {
                          Q(r)();
                        } catch (r) {
                          if ((Z(i), r !== r + 0)) throw r;
                          X(1, 0);
                        }
                      },
                      invoke_vi: function (r, i) {
                        var o = Y();
                        try {
                          Q(r)(i);
                        } catch (r) {
                          if ((Z(o), r !== r + 0)) throw r;
                          X(1, 0);
                        }
                      },
                      invoke_vii: function (r, i, o) {
                        var s = Y();
                        try {
                          Q(r)(i, o);
                        } catch (r) {
                          if ((Z(s), r !== r + 0)) throw r;
                          X(1, 0);
                        }
                      },
                      invoke_viii: function (r, i, o, s) {
                        var l = Y();
                        try {
                          Q(r)(i, o, s);
                        } catch (r) {
                          if ((Z(l), r !== r + 0)) throw r;
                          X(1, 0);
                        }
                      },
                      invoke_viiii: function (r, i, o, s, l) {
                        var h = Y();
                        try {
                          Q(r)(i, o, s, l);
                        } catch (r) {
                          if ((Z(h), r !== r + 0)) throw r;
                          X(1, 0);
                        }
                      },
                      invoke_viiiiii: function (r, i, o, s, l, h, m) {
                        var v = Y();
                        try {
                          Q(r)(i, o, s, l, h, m);
                        } catch (r) {
                          if ((Z(v), r !== r + 0)) throw r;
                          X(1, 0);
                        }
                      },
                      invoke_viiiiiii: function (r, i, o, s, l, h, m, v) {
                        var y = Y();
                        try {
                          Q(r)(i, o, s, l, h, m, v);
                        } catch (r) {
                          if ((Z(y), r !== r + 0)) throw r;
                          X(1, 0);
                        }
                      },
                      invoke_viiiiiiii: function (r, i, o, s, l, h, m, v, y) {
                        var w = Y();
                        try {
                          Q(r)(i, o, s, l, h, m, v, y);
                        } catch (r) {
                          if ((Z(w), r !== r + 0)) throw r;
                          X(1, 0);
                        }
                      },
                      strftime_l: (r, i, o, s) => le(r, i, o, s),
                    };
                    !(function () {
                      function a(i) {
                        if (
                          ((P = (x = i = i.exports).memory),
                          Ba(),
                          (G = x.__indirect_function_table),
                          q.unshift(x.__wasm_call_ctors),
                          ee--,
                          r.monitorRunDependencies &&
                            r.monitorRunDependencies(ee),
                          0 == ee &&
                            (null !== et && (clearInterval(et), (et = null)),
                            en))
                        ) {
                          var o = en;
                          ((en = null), o());
                        }
                        return i;
                      }
                      var i,
                        o,
                        s = { env: tA, wasi_snapshot_preview1: tA };
                      if (
                        (ee++,
                        r.monitorRunDependencies &&
                          r.monitorRunDependencies(ee),
                        r.instantiateWasm)
                      )
                        try {
                          return r.instantiateWasm(s, a);
                        } catch (r) {
                          (F(
                            "Module.instantiateWasm callback failed with error: " +
                              r,
                          ),
                            m(r));
                        }
                      ((i = function (r) {
                        a(r.instance);
                      }),
                      (o = ei),
                      E ||
                      "function" != typeof WebAssembly.instantiateStreaming ||
                      Ka(o) ||
                      o.startsWith("file://") ||
                      "function" != typeof fetch
                        ? Pa(o, s, i)
                        : fetch(o, { credentials: "same-origin" }).then((r) =>
                            WebAssembly.instantiateStreaming(r, s).then(
                              i,
                              function (r) {
                                return (
                                  F("wasm streaming compile failed: " + r),
                                  F(
                                    "falling back to ArrayBuffer instantiation",
                                  ),
                                  Pa(o, s, i)
                                );
                              },
                            ),
                          )).catch(m);
                    })();
                    var uc = (r) => (uc = x.free)(r),
                      Zd = (r) => (Zd = x.malloc)(r),
                      qe = () => (qe = x.__errno_location)(),
                      tM = (r._ma_device__on_notification_unlocked = (i) =>
                        (tM = r._ma_device__on_notification_unlocked =
                          x.ma_device__on_notification_unlocked)(i));
                    ((r._ma_malloc_emscripten = (i, o) =>
                      (r._ma_malloc_emscripten = x.ma_malloc_emscripten)(i, o)),
                      (r._ma_free_emscripten = (i, o) =>
                        (r._ma_free_emscripten = x.ma_free_emscripten)(i, o)));
                    var tI =
                        (r._ma_device_process_pcm_frames_capture__webaudio = (
                          i,
                          o,
                          s,
                        ) =>
                          (tI =
                            r._ma_device_process_pcm_frames_capture__webaudio =
                              x.ma_device_process_pcm_frames_capture__webaudio)(
                            i,
                            o,
                            s,
                          )),
                      tR = (r._ma_device_process_pcm_frames_playback__webaudio =
                        (i, o, s) =>
                          (tR =
                            r._ma_device_process_pcm_frames_playback__webaudio =
                              x.ma_device_process_pcm_frames_playback__webaudio)(
                            i,
                            o,
                            s,
                          )),
                      tc = (r) => (tc = x.__getTypeName)(r);
                    r.__embind_initialize_bindings = () =>
                      (r.__embind_initialize_bindings =
                        x._embind_initialize_bindings)();
                    var vb = (r, i) =>
                        (vb = x.emscripten_builtin_memalign)(r, i),
                      X = (r, i) => (X = x.setThrew)(r, i),
                      Y = () => (Y = x.stackSave)(),
                      Z = (r) => (Z = x.stackRestore)(r);
                    function Je() {
                      function a() {
                        if (!l && ((l = !0), (r.calledRun = !0), !$)) {
                          if (
                            (r.noFSInit ||
                              ep ||
                              ((ep = !0),
                              Xb(),
                              (r.stdin = r.stdin),
                              (r.stdout = r.stdout),
                              (r.stderr = r.stderr),
                              r.stdin
                                ? $b("stdin", r.stdin)
                                : Tb("/dev/tty", "/dev/stdin"),
                              r.stdout
                                ? $b("stdout", null, r.stdout)
                                : Tb("/dev/tty", "/dev/stdout"),
                              r.stderr
                                ? $b("stderr", null, r.stderr)
                                : Tb("/dev/tty1", "/dev/stderr"),
                              Vb("/dev/stdin", 0),
                              Vb("/dev/stdout", 1),
                              Vb("/dev/stderr", 1)),
                            (eI = !1),
                            Xa(q),
                            h(r),
                            r.onRuntimeInitialized && r.onRuntimeInitialized(),
                            r.postRun)
                          )
                            for (
                              "function" == typeof r.postRun &&
                              (r.postRun = [r.postRun]);
                              r.postRun.length;
                            ) {
                              var i = r.postRun.shift();
                              J.unshift(i);
                            }
                          Xa(J);
                        }
                      }
                      if (!(0 < ee)) {
                        if (r.preRun)
                          for (
                            "function" == typeof r.preRun &&
                            (r.preRun = [r.preRun]);
                            r.preRun.length;
                          )
                            !(function () {
                              var i = r.preRun.shift();
                              H.unshift(i);
                            })();
                        (Xa(H),
                          0 < ee ||
                            (r.setStatus
                              ? (r.setStatus("Running..."),
                                setTimeout(function () {
                                  (setTimeout(function () {
                                    r.setStatus("");
                                  }, 1),
                                    a());
                                }, 1))
                              : a()));
                      }
                    }
                    if (
                      ((r.dynCall_iiiij = (i, o, s, l, h, m) =>
                        (r.dynCall_iiiij = x.dynCall_iiiij)(i, o, s, l, h, m)),
                      (r.dynCall_viiij = (i, o, s, l, h, m) =>
                        (r.dynCall_viiij = x.dynCall_viiij)(i, o, s, l, h, m)),
                      (r.dynCall_iiij = (i, o, s, l, h) =>
                        (r.dynCall_iiij = x.dynCall_iiij)(i, o, s, l, h)),
                      (r.dynCall_viij = (i, o, s, l, h) =>
                        (r.dynCall_viij = x.dynCall_viij)(i, o, s, l, h)),
                      (r.dynCall_iiji = (i, o, s, l, h) =>
                        (r.dynCall_iiji = x.dynCall_iiji)(i, o, s, l, h)),
                      (r.dynCall_jiji = (i, o, s, l, h) =>
                        (r.dynCall_jiji = x.dynCall_jiji)(i, o, s, l, h)),
                      (r.dynCall_iiiji = (i, o, s, l, h, m) =>
                        (r.dynCall_iiiji = x.dynCall_iiiji)(i, o, s, l, h, m)),
                      (r.dynCall_iij = (i, o, s, l) =>
                        (r.dynCall_iij = x.dynCall_iij)(i, o, s, l)),
                      (r.dynCall_jii = (i, o, s) =>
                        (r.dynCall_jii = x.dynCall_jii)(i, o, s)),
                      (r.dynCall_viiiiij = (i, o, s, l, h, m, v, y) =>
                        (r.dynCall_viiiiij = x.dynCall_viiiiij)(
                          i,
                          o,
                          s,
                          l,
                          h,
                          m,
                          v,
                          y,
                        )),
                      (r.dynCall_viji = (i, o, s, l, h) =>
                        (r.dynCall_viji = x.dynCall_viji)(i, o, s, l, h)),
                      (r.dynCall_ji = (i, o) =>
                        (r.dynCall_ji = x.dynCall_ji)(i, o)),
                      (r.dynCall_vij = (i, o, s, l) =>
                        (r.dynCall_vij = x.dynCall_vij)(i, o, s, l)),
                      (r.dynCall_viijii = (i, o, s, l, h, m, v) =>
                        (r.dynCall_viijii = x.dynCall_viijii)(
                          i,
                          o,
                          s,
                          l,
                          h,
                          m,
                          v,
                        )),
                      (r.dynCall_iiiiij = (i, o, s, l, h, m, v) =>
                        (r.dynCall_iiiiij = x.dynCall_iiiiij)(
                          i,
                          o,
                          s,
                          l,
                          h,
                          m,
                          v,
                        )),
                      (r.dynCall_iiiiijj = (i, o, s, l, h, m, v, y, w) =>
                        (r.dynCall_iiiiijj = x.dynCall_iiiiijj)(
                          i,
                          o,
                          s,
                          l,
                          h,
                          m,
                          v,
                          y,
                          w,
                        )),
                      (r.dynCall_iiiiiijj = (i, o, s, l, h, m, v, y, w, _) =>
                        (r.dynCall_iiiiiijj = x.dynCall_iiiiiijj)(
                          i,
                          o,
                          s,
                          l,
                          h,
                          m,
                          v,
                          y,
                          w,
                          _,
                        )),
                      (en = function Ie() {
                        (l || Je(), l || (en = Ie));
                      }),
                      r.preInit)
                    )
                      for (
                        "function" == typeof r.preInit &&
                        (r.preInit = [r.preInit]);
                        0 < r.preInit.length;
                      )
                        r.preInit.pop()();
                    return (Je(), r.ready);
                  });
              let h = l;
            },
            (r) => {
              r.exports = JSON.parse(
                '{"name":"@rive-app/webgl","version":"2.31.6","description":"Rive\'s webgl based web api.","main":"rive.js","homepage":"https://rive.app","repository":{"type":"git","url":"https://github.com/rive-app/rive-wasm/tree/master/js"},"keywords":["rive","animation"],"author":"Rive","contributors":["Luigi Rosso <luigi@rive.app> (https://rive.app)","Maxwell Talbot <max@rive.app> (https://rive.app)","Arthur Vivian <arthur@rive.app> (https://rive.app)","Umberto Sonnino <umberto@rive.app> (https://rive.app)","Matthew Sullivan <matt.j.sullivan@gmail.com> (mailto:matt.j.sullivan@gmail.com)"],"license":"MIT","files":["rive.js","rive.wasm","rive_fallback.wasm","rive.js.map","rive.d.ts","rive_advanced.mjs.d.ts"],"typings":"rive.d.ts","dependencies":{},"browser":{"fs":false,"path":false}}',
              );
            },
            (r, i, o) => {
              (o.r(i), o.d(i, { Animation: () => s.Animation }));
              var s = o(4);
            },
            (r, i, o) => {
              (o.r(i), o.d(i, { Animation: () => s }));
              var s = (function () {
                function Animation(r, i, o, s) {
                  ((this.animation = r),
                    (this.artboard = i),
                    (this.playing = s),
                    (this.loopCount = 0),
                    (this.scrubTo = null),
                    (this.instance = new o.LinearAnimationInstance(r, i)));
                }
                return (
                  Object.defineProperty(Animation.prototype, "name", {
                    get: function () {
                      return this.animation.name;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  Object.defineProperty(Animation.prototype, "time", {
                    get: function () {
                      return this.instance.time;
                    },
                    set: function (r) {
                      this.instance.time = r;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  Object.defineProperty(Animation.prototype, "loopValue", {
                    get: function () {
                      return this.animation.loopValue;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  Object.defineProperty(Animation.prototype, "needsScrub", {
                    get: function () {
                      return null !== this.scrubTo;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  (Animation.prototype.advance = function (r) {
                    null === this.scrubTo
                      ? this.instance.advance(r)
                      : ((this.instance.time = 0),
                        this.instance.advance(this.scrubTo),
                        (this.scrubTo = null));
                  }),
                  (Animation.prototype.apply = function (r) {
                    this.instance.apply(r);
                  }),
                  (Animation.prototype.cleanup = function () {
                    this.instance.delete();
                  }),
                  Animation
                );
              })();
            },
            (r, i, o) => {
              (o.r(i),
                o.d(i, {
                  AudioAssetWrapper: () => h.AudioAssetWrapper,
                  AudioWrapper: () => h.AudioWrapper,
                  BLANK_URL: () => l.BLANK_URL,
                  CustomFileAssetLoaderWrapper: () =>
                    h.CustomFileAssetLoaderWrapper,
                  FileAssetWrapper: () => h.FileAssetWrapper,
                  FileFinalizer: () => h.FileFinalizer,
                  FontAssetWrapper: () => h.FontAssetWrapper,
                  FontWrapper: () => h.FontWrapper,
                  ImageAssetWrapper: () => h.ImageAssetWrapper,
                  ImageWrapper: () => h.ImageWrapper,
                  createFinalization: () => h.createFinalization,
                  finalizationRegistry: () => h.finalizationRegistry,
                  registerTouchInteractions: () => s.registerTouchInteractions,
                  sanitizeUrl: () => l.sanitizeUrl,
                }));
              var s = o(6),
                l = o(7),
                h = o(8);
            },
            (r, i, o) => {
              (o.r(i),
                o.d(i, {
                  registerTouchInteractions: () => registerTouchInteractions,
                }));
              var s = void 0,
                getClientCoordinates = function (r, i) {
                  var o, s;
                  return ["touchstart", "touchmove"].indexOf(r.type) > -1 &&
                    (null === (o = r.touches) || void 0 === o
                      ? void 0
                      : o.length)
                    ? (i || r.preventDefault(),
                      {
                        clientX: r.touches[0].clientX,
                        clientY: r.touches[0].clientY,
                      })
                    : "touchend" === r.type &&
                        (null === (s = r.changedTouches) || void 0 === s
                          ? void 0
                          : s.length)
                      ? {
                          clientX: r.changedTouches[0].clientX,
                          clientY: r.changedTouches[0].clientY,
                        }
                      : { clientX: r.clientX, clientY: r.clientY };
                },
                registerTouchInteractions = function (r) {
                  var i = r.canvas,
                    o = r.artboard,
                    l = r.stateMachines,
                    h = void 0 === l ? [] : l,
                    m = r.renderer,
                    v = r.rive,
                    y = r.fit,
                    w = r.alignment,
                    _ = r.isTouchScrollEnabled,
                    A = void 0 !== _ && _,
                    M = r.layoutScaleFactor,
                    I = void 0 === M ? 1 : M;
                  if (
                    !i ||
                    !h.length ||
                    !m ||
                    !v ||
                    !o ||
                    "undefined" == typeof window
                  )
                    return null;
                  var C = null,
                    F = !1,
                    E = function (r) {
                      if (F && r instanceof MouseEvent) {
                        "mouseup" == r.type && (F = !1);
                        return;
                      }
                      ((F = A && "touchend" === r.type && "touchstart" === C),
                        (C = r.type));
                      var i = r.currentTarget.getBoundingClientRect(),
                        s = getClientCoordinates(r, A),
                        l = s.clientX,
                        m = s.clientY;
                      if (l || m) {
                        var _ = l - i.left,
                          M = m - i.top,
                          E = v.computeAlignment(
                            y,
                            w,
                            { minX: 0, minY: 0, maxX: i.width, maxY: i.height },
                            o.bounds,
                            I,
                          ),
                          P = new v.Mat2D();
                        E.invert(P);
                        var x = new v.Vec2D(_, M),
                          T = v.mapXY(P, x),
                          j = T.x(),
                          O = T.y();
                        switch (
                          (T.delete(),
                          P.delete(),
                          x.delete(),
                          E.delete(),
                          r.type)
                        ) {
                          case "mouseout":
                            for (var W = 0; W < h.length; W++) {
                              var D = h[W];
                              D.pointerMove(j, O);
                            }
                            break;
                          case "touchmove":
                          case "mouseover":
                          case "mousemove":
                            for (var B = 0; B < h.length; B++) {
                              var D = h[B];
                              D.pointerMove(j, O);
                            }
                            break;
                          case "touchstart":
                          case "mousedown":
                            for (var U = 0; U < h.length; U++) {
                              var D = h[U];
                              D.pointerDown(j, O);
                            }
                            break;
                          case "touchend":
                          case "mouseup":
                            for (var z = 0; z < h.length; z++) {
                              var D = h[z];
                              D.pointerUp(j, O);
                            }
                        }
                      }
                    }.bind(s);
                  return (
                    i.addEventListener("mouseover", E),
                    i.addEventListener("mouseout", E),
                    i.addEventListener("mousemove", E),
                    i.addEventListener("mousedown", E),
                    i.addEventListener("mouseup", E),
                    i.addEventListener("touchmove", E, { passive: A }),
                    i.addEventListener("touchstart", E, { passive: A }),
                    i.addEventListener("touchend", E),
                    function () {
                      (i.removeEventListener("mouseover", E),
                        i.removeEventListener("mouseout", E),
                        i.removeEventListener("mousemove", E),
                        i.removeEventListener("mousedown", E),
                        i.removeEventListener("mouseup", E),
                        i.removeEventListener("touchmove", E),
                        i.removeEventListener("touchstart", E),
                        i.removeEventListener("touchend", E));
                    }
                  );
                };
            },
            (r, i, o) => {
              (o.r(i),
                o.d(i, { BLANK_URL: () => w, sanitizeUrl: () => sanitizeUrl }));
              var s = /^([^\w]*)(javascript|data|vbscript)/im,
                l = /&#(\w+)(^\w|;)?/g,
                h = /&(newline|tab);/gi,
                m = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,
                v = /^.+(:|&colon;)/gim,
                y = [".", "/"],
                w = "about:blank";
              function sanitizeUrl(r) {
                if (!r) return w;
                var i = r
                  .replace(m, "")
                  .replace(l, function (r, i) {
                    return String.fromCharCode(i);
                  })
                  .replace(h, "")
                  .replace(m, "")
                  .trim();
                if (!i) return w;
                if (y.indexOf(i[0]) > -1) return i;
                var o = i.match(v);
                if (!o) return i;
                var _ = o[0];
                return s.test(_) ? w : i;
              }
            },
            (r, i, o) => {
              (o.r(i),
                o.d(i, {
                  AudioAssetWrapper: () => C,
                  AudioWrapper: () => w,
                  CustomFileAssetLoaderWrapper: () => A,
                  FileAssetWrapper: () => M,
                  FileFinalizer: () => h,
                  FontAssetWrapper: () => F,
                  FontWrapper: () => _,
                  ImageAssetWrapper: () => I,
                  ImageWrapper: () => y,
                  createFinalization: () => createFinalization,
                  finalizationRegistry: () => P,
                }));
              var s,
                l =
                  ((s = function (r, i) {
                    return (s =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (r, i) {
                          r.__proto__ = i;
                        }) ||
                      function (r, i) {
                        for (var o in i)
                          Object.prototype.hasOwnProperty.call(i, o) &&
                            (r[o] = i[o]);
                      })(r, i);
                  }),
                  function (r, i) {
                    if ("function" != typeof i && null !== i)
                      throw TypeError(
                        "Class extends value " +
                          String(i) +
                          " is not a constructor or null",
                      );
                    function __() {
                      this.constructor = r;
                    }
                    (s(r, i),
                      (r.prototype =
                        null === i
                          ? Object.create(i)
                          : ((__.prototype = i.prototype), new __())));
                  }),
                h = (function () {
                  function FileFinalizer(r) {
                    ((this.selfUnref = !1), (this._file = r));
                  }
                  return (
                    (FileFinalizer.prototype.unref = function () {
                      this._file && this._file.unref();
                    }),
                    FileFinalizer
                  );
                })(),
                m = (function () {
                  function ObjectFinalizer(r) {
                    this._finalizableObject = r;
                  }
                  return (
                    (ObjectFinalizer.prototype.unref = function () {
                      this._finalizableObject.unref();
                    }),
                    ObjectFinalizer
                  );
                })(),
                v = (function () {
                  function AssetWrapper() {
                    this.selfUnref = !1;
                  }
                  return (
                    (AssetWrapper.prototype.unref = function () {}),
                    AssetWrapper
                  );
                })(),
                y = (function (r) {
                  function ImageWrapper(i) {
                    var o = r.call(this) || this;
                    return ((o._nativeImage = i), o);
                  }
                  return (
                    l(ImageWrapper, r),
                    Object.defineProperty(
                      ImageWrapper.prototype,
                      "nativeImage",
                      {
                        get: function () {
                          return this._nativeImage;
                        },
                        enumerable: !1,
                        configurable: !0,
                      },
                    ),
                    (ImageWrapper.prototype.unref = function () {
                      this.selfUnref && this._nativeImage.unref();
                    }),
                    ImageWrapper
                  );
                })(v),
                w = (function (r) {
                  function AudioWrapper(i) {
                    var o = r.call(this) || this;
                    return ((o._nativeAudio = i), o);
                  }
                  return (
                    l(AudioWrapper, r),
                    Object.defineProperty(
                      AudioWrapper.prototype,
                      "nativeAudio",
                      {
                        get: function () {
                          return this._nativeAudio;
                        },
                        enumerable: !1,
                        configurable: !0,
                      },
                    ),
                    (AudioWrapper.prototype.unref = function () {
                      this.selfUnref && this._nativeAudio.unref();
                    }),
                    AudioWrapper
                  );
                })(v),
                _ = (function (r) {
                  function FontWrapper(i) {
                    var o = r.call(this) || this;
                    return ((o._nativeFont = i), o);
                  }
                  return (
                    l(FontWrapper, r),
                    Object.defineProperty(FontWrapper.prototype, "nativeFont", {
                      get: function () {
                        return this._nativeFont;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (FontWrapper.prototype.unref = function () {
                      this.selfUnref && this._nativeFont.unref();
                    }),
                    FontWrapper
                  );
                })(v),
                A = (function () {
                  function CustomFileAssetLoaderWrapper(r, i) {
                    ((this._assetLoaderCallback = i),
                      (this.assetLoader = new r.CustomFileAssetLoader({
                        loadContents: this.loadContents.bind(this),
                      })));
                  }
                  return (
                    (CustomFileAssetLoaderWrapper.prototype.loadContents =
                      function (r, i) {
                        var o;
                        return (
                          r.isImage
                            ? (o = new I(r))
                            : r.isAudio
                              ? (o = new C(r))
                              : r.isFont && (o = new F(r)),
                          this._assetLoaderCallback(o, i)
                        );
                      }),
                    CustomFileAssetLoaderWrapper
                  );
                })(),
                M = (function () {
                  function FileAssetWrapper(r) {
                    this._nativeFileAsset = r;
                  }
                  return (
                    (FileAssetWrapper.prototype.decode = function (r) {
                      this._nativeFileAsset.decode(r);
                    }),
                    Object.defineProperty(FileAssetWrapper.prototype, "name", {
                      get: function () {
                        return this._nativeFileAsset.name;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(
                      FileAssetWrapper.prototype,
                      "fileExtension",
                      {
                        get: function () {
                          return this._nativeFileAsset.fileExtension;
                        },
                        enumerable: !1,
                        configurable: !0,
                      },
                    ),
                    Object.defineProperty(
                      FileAssetWrapper.prototype,
                      "uniqueFilename",
                      {
                        get: function () {
                          return this._nativeFileAsset.uniqueFilename;
                        },
                        enumerable: !1,
                        configurable: !0,
                      },
                    ),
                    Object.defineProperty(
                      FileAssetWrapper.prototype,
                      "isAudio",
                      {
                        get: function () {
                          return this._nativeFileAsset.isAudio;
                        },
                        enumerable: !1,
                        configurable: !0,
                      },
                    ),
                    Object.defineProperty(
                      FileAssetWrapper.prototype,
                      "isImage",
                      {
                        get: function () {
                          return this._nativeFileAsset.isImage;
                        },
                        enumerable: !1,
                        configurable: !0,
                      },
                    ),
                    Object.defineProperty(
                      FileAssetWrapper.prototype,
                      "isFont",
                      {
                        get: function () {
                          return this._nativeFileAsset.isFont;
                        },
                        enumerable: !1,
                        configurable: !0,
                      },
                    ),
                    Object.defineProperty(
                      FileAssetWrapper.prototype,
                      "cdnUuid",
                      {
                        get: function () {
                          return this._nativeFileAsset.cdnUuid;
                        },
                        enumerable: !1,
                        configurable: !0,
                      },
                    ),
                    Object.defineProperty(
                      FileAssetWrapper.prototype,
                      "nativeFileAsset",
                      {
                        get: function () {
                          return this._nativeFileAsset;
                        },
                        enumerable: !1,
                        configurable: !0,
                      },
                    ),
                    FileAssetWrapper
                  );
                })(),
                I = (function (r) {
                  function ImageAssetWrapper() {
                    return (null !== r && r.apply(this, arguments)) || this;
                  }
                  return (
                    l(ImageAssetWrapper, r),
                    (ImageAssetWrapper.prototype.setRenderImage = function (r) {
                      this._nativeFileAsset.setRenderImage(r.nativeImage);
                    }),
                    ImageAssetWrapper
                  );
                })(M),
                C = (function (r) {
                  function AudioAssetWrapper() {
                    return (null !== r && r.apply(this, arguments)) || this;
                  }
                  return (
                    l(AudioAssetWrapper, r),
                    (AudioAssetWrapper.prototype.setAudioSource = function (r) {
                      this._nativeFileAsset.setAudioSource(r.nativeAudio);
                    }),
                    AudioAssetWrapper
                  );
                })(M),
                F = (function (r) {
                  function FontAssetWrapper() {
                    return (null !== r && r.apply(this, arguments)) || this;
                  }
                  return (
                    l(FontAssetWrapper, r),
                    (FontAssetWrapper.prototype.setFont = function (r) {
                      this._nativeFileAsset.setFont(r.nativeFont);
                    }),
                    FontAssetWrapper
                  );
                })(M),
                E = (function () {
                  function FakeFinalizationRegistry(r) {}
                  return (
                    (FakeFinalizationRegistry.prototype.register = function (
                      r,
                    ) {
                      r.selfUnref = !0;
                    }),
                    (FakeFinalizationRegistry.prototype.unregister = function (
                      r,
                    ) {}),
                    FakeFinalizationRegistry
                  );
                })(),
                P = new (
                  "undefined" != typeof FinalizationRegistry
                    ? FinalizationRegistry
                    : E
                )(function (r) {
                  null == r || r.unref();
                }),
                createFinalization = function (r, i) {
                  var o = new m(i);
                  P.register(r, o);
                };
            },
          ],
          eS = {};
        function __nested_webpack_require_144634__(r) {
          var i = eS[r];
          if (void 0 !== i) return i.exports;
          var o = (eS[r] = { exports: {} });
          return (
            eP[r](o, o.exports, __nested_webpack_require_144634__),
            o.exports
          );
        }
        ((__nested_webpack_require_144634__.d = (r, i) => {
          for (var o in i)
            __nested_webpack_require_144634__.o(i, o) &&
              !__nested_webpack_require_144634__.o(r, o) &&
              Object.defineProperty(r, o, { enumerable: !0, get: i[o] });
        }),
          (__nested_webpack_require_144634__.o = (r, i) =>
            Object.prototype.hasOwnProperty.call(r, i)),
          (__nested_webpack_require_144634__.r = (r) => {
            ("undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(r, "__esModule", { value: !0 }));
          }));
        var eV = {};
        return (
          __nested_webpack_require_144634__.r(eV),
          __nested_webpack_require_144634__.d(eV, {
            Alignment: () => i,
            DataEnum: () => el,
            EventType: () => l,
            Fit: () => r,
            Layout: () => O,
            LoopType: () => h,
            Rive: () => es,
            RiveEventType: () => s,
            RiveFile: () => eo,
            RuntimeLoader: () => W,
            StateMachineInput: () => B,
            StateMachineInputType: () => o,
            Testing: () => eC,
            ViewModel: () => eu,
            ViewModelInstance: () => eh,
            ViewModelInstanceArtboard: () => eM,
            ViewModelInstanceAssetImage: () => eA,
            ViewModelInstanceBoolean: () => eb,
            ViewModelInstanceColor: () => e_,
            ViewModelInstanceEnum: () => ey,
            ViewModelInstanceList: () => ew,
            ViewModelInstanceNumber: () => ev,
            ViewModelInstanceString: () => em,
            ViewModelInstanceTrigger: () => eg,
            ViewModelInstanceValue: () => ep,
            decodeAudio: () => eF,
            decodeFont: () => eL,
            decodeImage: () => eE,
          }),
          (y = __nested_webpack_require_144634__(1)),
          (w = __nested_webpack_require_144634__(2)),
          (_ = __nested_webpack_require_144634__(3)),
          (A = __nested_webpack_require_144634__(5)),
          (M = function (r, i) {
            return (M =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (r, i) {
                  r.__proto__ = i;
                }) ||
              function (r, i) {
                for (var o in i)
                  Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o]);
              })(r, i);
          }),
          (I = function (r, i) {
            if ("function" != typeof i && null !== i)
              throw TypeError(
                "Class extends value " +
                  String(i) +
                  " is not a constructor or null",
              );
            function __() {
              this.constructor = r;
            }
            (M(r, i),
              (r.prototype =
                null === i
                  ? Object.create(i)
                  : ((__.prototype = i.prototype), new __())));
          }),
          (C = function () {
            return (C =
              Object.assign ||
              function (r) {
                for (var i, o = 1, s = arguments.length; o < s; o++)
                  for (var l in (i = arguments[o]))
                    Object.prototype.hasOwnProperty.call(i, l) && (r[l] = i[l]);
                return r;
              }).apply(this, arguments);
          }),
          (F = function (r, i, o, s) {
            return new (o || (o = Promise))(function (l, h) {
              function fulfilled(r) {
                try {
                  step(s.next(r));
                } catch (r) {
                  h(r);
                }
              }
              function rejected(r) {
                try {
                  step(s.throw(r));
                } catch (r) {
                  h(r);
                }
              }
              function step(r) {
                var i;
                r.done
                  ? l(r.value)
                  : ((i = r.value) instanceof o
                      ? i
                      : new o(function (r) {
                          r(i);
                        })
                    ).then(fulfilled, rejected);
              }
              step((s = s.apply(r, i || [])).next());
            });
          }),
          (E = function (r, i) {
            var o,
              s,
              l,
              h = {
                label: 0,
                sent: function () {
                  if (1 & l[0]) throw l[1];
                  return l[1];
                },
                trys: [],
                ops: [],
              },
              m = Object.create(
                ("function" == typeof Iterator ? Iterator : Object).prototype,
              );
            return (
              (m.next = verb(0)),
              (m.throw = verb(1)),
              (m.return = verb(2)),
              "function" == typeof Symbol &&
                (m[Symbol.iterator] = function () {
                  return this;
                }),
              m
            );
            function verb(v) {
              return function (y) {
                return (function (v) {
                  if (o) throw TypeError("Generator is already executing.");
                  for (; m && ((m = 0), v[0] && (h = 0)), h; )
                    try {
                      if (
                        ((o = 1),
                        s &&
                          (l =
                            2 & v[0]
                              ? s.return
                              : v[0]
                                ? s.throw || ((l = s.return) && l.call(s), 0)
                                : s.next) &&
                          !(l = l.call(s, v[1])).done)
                      )
                        return l;
                      switch (((s = 0), l && (v = [2 & v[0], l.value]), v[0])) {
                        case 0:
                        case 1:
                          l = v;
                          break;
                        case 4:
                          return (h.label++, { value: v[1], done: !1 });
                        case 5:
                          (h.label++, (s = v[1]), (v = [0]));
                          continue;
                        case 7:
                          ((v = h.ops.pop()), h.trys.pop());
                          continue;
                        default:
                          if (
                            !(l = (l = h.trys).length > 0 && l[l.length - 1]) &&
                            (6 === v[0] || 2 === v[0])
                          ) {
                            h = 0;
                            continue;
                          }
                          if (
                            3 === v[0] &&
                            (!l || (v[1] > l[0] && v[1] < l[3]))
                          ) {
                            h.label = v[1];
                            break;
                          }
                          if (6 === v[0] && h.label < l[1]) {
                            ((h.label = l[1]), (l = v));
                            break;
                          }
                          if (l && h.label < l[2]) {
                            ((h.label = l[2]), h.ops.push(v));
                            break;
                          }
                          (l[2] && h.ops.pop(), h.trys.pop());
                          continue;
                      }
                      v = i.call(r, h);
                    } catch (r) {
                      ((v = [6, r]), (s = 0));
                    } finally {
                      o = l = 0;
                    }
                  if (5 & v[0]) throw v[1];
                  return { value: v[0] ? v[1] : void 0, done: !0 };
                })([v, y]);
              };
            }
          }),
          (P = function (r, i, o) {
            if (o || 2 == arguments.length)
              for (var s, l = 0, h = i.length; l < h; l++)
                (!s && l in i) ||
                  (s || (s = Array.prototype.slice.call(i, 0, l)),
                  (s[l] = i[l]));
            return r.concat(s || Array.prototype.slice.call(i));
          }),
          (x = (function (r) {
            function RiveError() {
              var i = (null !== r && r.apply(this, arguments)) || this;
              return ((i.isHandledError = !0), i);
            }
            return (I(RiveError, r), RiveError);
          })(Error)),
          ((T = r || (r = {})).Cover = "cover"),
          (T.Contain = "contain"),
          (T.Fill = "fill"),
          (T.FitWidth = "fitWidth"),
          (T.FitHeight = "fitHeight"),
          (T.None = "none"),
          (T.ScaleDown = "scaleDown"),
          (T.Layout = "layout"),
          ((j = i || (i = {})).Center = "center"),
          (j.TopLeft = "topLeft"),
          (j.TopCenter = "topCenter"),
          (j.TopRight = "topRight"),
          (j.CenterLeft = "centerLeft"),
          (j.CenterRight = "centerRight"),
          (j.BottomLeft = "bottomLeft"),
          (j.BottomCenter = "bottomCenter"),
          (j.BottomRight = "bottomRight"),
          (O = (function () {
            function Layout(o) {
              var s, l, h, m, v, y, w;
              ((this.fit =
                null !== (s = null == o ? void 0 : o.fit) && void 0 !== s
                  ? s
                  : r.Contain),
                (this.alignment =
                  null !== (l = null == o ? void 0 : o.alignment) &&
                  void 0 !== l
                    ? l
                    : i.Center),
                (this.layoutScaleFactor =
                  null !== (h = null == o ? void 0 : o.layoutScaleFactor) &&
                  void 0 !== h
                    ? h
                    : 1),
                (this.minX =
                  null !== (m = null == o ? void 0 : o.minX) && void 0 !== m
                    ? m
                    : 0),
                (this.minY =
                  null !== (v = null == o ? void 0 : o.minY) && void 0 !== v
                    ? v
                    : 0),
                (this.maxX =
                  null !== (y = null == o ? void 0 : o.maxX) && void 0 !== y
                    ? y
                    : 0),
                (this.maxY =
                  null !== (w = null == o ? void 0 : o.maxY) && void 0 !== w
                    ? w
                    : 0));
            }
            return (
              (Layout.new = function (r) {
                var i = r.fit,
                  o = r.alignment,
                  s = r.minX,
                  l = r.minY,
                  h = r.maxX,
                  m = r.maxY;
                return (
                  console.warn(
                    "This function is deprecated: please use `new Layout({})` instead",
                  ),
                  new Layout({
                    fit: i,
                    alignment: o,
                    minX: s,
                    minY: l,
                    maxX: h,
                    maxY: m,
                  })
                );
              }),
              (Layout.prototype.copyWith = function (r) {
                var i = r.fit,
                  o = r.alignment,
                  s = r.layoutScaleFactor,
                  l = r.minX,
                  h = r.minY,
                  m = r.maxX,
                  v = r.maxY;
                return new Layout({
                  fit: null != i ? i : this.fit,
                  alignment: null != o ? o : this.alignment,
                  layoutScaleFactor: null != s ? s : this.layoutScaleFactor,
                  minX: null != l ? l : this.minX,
                  minY: null != h ? h : this.minY,
                  maxX: null != m ? m : this.maxX,
                  maxY: null != v ? v : this.maxY,
                });
              }),
              (Layout.prototype.runtimeFit = function (i) {
                var o;
                return this.cachedRuntimeFit
                  ? this.cachedRuntimeFit
                  : ((o =
                      this.fit === r.Cover
                        ? i.Fit.cover
                        : this.fit === r.Contain
                          ? i.Fit.contain
                          : this.fit === r.Fill
                            ? i.Fit.fill
                            : this.fit === r.FitWidth
                              ? i.Fit.fitWidth
                              : this.fit === r.FitHeight
                                ? i.Fit.fitHeight
                                : this.fit === r.ScaleDown
                                  ? i.Fit.scaleDown
                                  : this.fit === r.Layout
                                    ? i.Fit.layout
                                    : i.Fit.none),
                    (this.cachedRuntimeFit = o),
                    o);
              }),
              (Layout.prototype.runtimeAlignment = function (r) {
                var o;
                return this.cachedRuntimeAlignment
                  ? this.cachedRuntimeAlignment
                  : ((o =
                      this.alignment === i.TopLeft
                        ? r.Alignment.topLeft
                        : this.alignment === i.TopCenter
                          ? r.Alignment.topCenter
                          : this.alignment === i.TopRight
                            ? r.Alignment.topRight
                            : this.alignment === i.CenterLeft
                              ? r.Alignment.centerLeft
                              : this.alignment === i.CenterRight
                                ? r.Alignment.centerRight
                                : this.alignment === i.BottomLeft
                                  ? r.Alignment.bottomLeft
                                  : this.alignment === i.BottomCenter
                                    ? r.Alignment.bottomCenter
                                    : this.alignment === i.BottomRight
                                      ? r.Alignment.bottomRight
                                      : r.Alignment.center),
                    (this.cachedRuntimeAlignment = o),
                    o);
              }),
              Layout
            );
          })()),
          (W = (function () {
            function RuntimeLoader() {}
            return (
              (RuntimeLoader.loadRuntime = function () {
                y.default({
                  locateFile: function () {
                    return RuntimeLoader.wasmURL;
                  },
                })
                  .then(function (r) {
                    var i;
                    for (
                      RuntimeLoader.runtime = r;
                      RuntimeLoader.callBackQueue.length > 0;
                    )
                      null === (i = RuntimeLoader.callBackQueue.shift()) ||
                        void 0 === i ||
                        i(RuntimeLoader.runtime);
                  })
                  .catch(function (r) {
                    var i = {
                      message:
                        (null == r ? void 0 : r.message) || "Unknown error",
                      type: (null == r ? void 0 : r.name) || "Error",
                      wasmError:
                        r instanceof WebAssembly.CompileError ||
                        r instanceof WebAssembly.RuntimeError,
                      originalError: r,
                    };
                    console.debug("Rive WASM load error details:", i);
                    var o = "https://cdn.jsdelivr.net/npm/"
                      .concat(w.name, "@")
                      .concat(w.version, "/rive_fallback.wasm");
                    RuntimeLoader.wasmURL.toLowerCase() !== o
                      ? (console.warn(
                          "Failed to load WASM from "
                            .concat(RuntimeLoader.wasmURL, " (")
                            .concat(
                              i.message,
                              "), trying jsdelivr as a backup",
                            ),
                        ),
                        RuntimeLoader.setWasmUrl(o),
                        RuntimeLoader.loadRuntime())
                      : console.error(
                          [
                            "Could not load Rive WASM file from "
                              .concat(RuntimeLoader.wasmURL, " or ")
                              .concat(o, "."),
                            "Possible reasons:",
                            "- Network connection is down",
                            "- WebAssembly is not supported in this environment",
                            "- The WASM file is corrupted or incompatible",
                            "\nError details:",
                            "- Type: ".concat(i.type),
                            "- Message: ".concat(i.message),
                            "- WebAssembly-specific error: ".concat(
                              i.wasmError,
                            ),
                            "\nTo resolve, you may need to:",
                            "1. Check your network connection",
                            "2. Set a new WASM source via RuntimeLoader.setWasmUrl()",
                            "3. Call RuntimeLoader.loadRuntime() again",
                          ].join("\n"),
                        );
                  });
              }),
              (RuntimeLoader.getInstance = function (r) {
                (RuntimeLoader.isLoading ||
                  ((RuntimeLoader.isLoading = !0), RuntimeLoader.loadRuntime()),
                  RuntimeLoader.runtime
                    ? r(RuntimeLoader.runtime)
                    : RuntimeLoader.callBackQueue.push(r));
              }),
              (RuntimeLoader.awaitInstance = function () {
                return new Promise(function (r) {
                  return RuntimeLoader.getInstance(function (i) {
                    return r(i);
                  });
                });
              }),
              (RuntimeLoader.setWasmUrl = function (r) {
                RuntimeLoader.wasmURL = r;
              }),
              (RuntimeLoader.getWasmUrl = function () {
                return RuntimeLoader.wasmURL;
              }),
              (RuntimeLoader.isLoading = !1),
              (RuntimeLoader.callBackQueue = []),
              (RuntimeLoader.wasmURL = "https://unpkg.com/"
                .concat(w.name, "@")
                .concat(w.version, "/rive.wasm")),
              RuntimeLoader
            );
          })()),
          ((D = o || (o = {}))[(D.Number = 56)] = "Number"),
          (D[(D.Trigger = 58)] = "Trigger"),
          (D[(D.Boolean = 59)] = "Boolean"),
          (B = (function () {
            function StateMachineInput(r, i) {
              ((this.type = r), (this.runtimeInput = i));
            }
            return (
              Object.defineProperty(StateMachineInput.prototype, "name", {
                get: function () {
                  return this.runtimeInput.name;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(StateMachineInput.prototype, "value", {
                get: function () {
                  return this.runtimeInput.value;
                },
                set: function (r) {
                  this.runtimeInput.value = r;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (StateMachineInput.prototype.fire = function () {
                this.type === o.Trigger && this.runtimeInput.fire();
              }),
              (StateMachineInput.prototype.delete = function () {
                this.runtimeInput = null;
              }),
              StateMachineInput
            );
          })()),
          ((U = s || (s = {}))[(U.General = 128)] = "General"),
          (U[(U.OpenUrl = 131)] = "OpenUrl"),
          (z = function (r) {
            this.nativeArtboard = r;
          }),
          ($ = (function () {
            function StateMachine(r, i, o, s) {
              ((this.stateMachine = r),
                (this.playing = o),
                (this.artboard = s),
                (this.inputs = []),
                (this.instance = new i.StateMachineInstance(r, s)),
                this.initInputs(i));
            }
            return (
              Object.defineProperty(StateMachine.prototype, "name", {
                get: function () {
                  return this.stateMachine.name;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(StateMachine.prototype, "statesChanged", {
                get: function () {
                  for (
                    var r = [], i = 0;
                    i < this.instance.stateChangedCount();
                    i++
                  )
                    r.push(this.instance.stateChangedNameByIndex(i));
                  return r;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (StateMachine.prototype.advance = function (r) {
                this.instance.advance(r);
              }),
              (StateMachine.prototype.advanceAndApply = function (r) {
                this.instance.advanceAndApply(r);
              }),
              (StateMachine.prototype.reportedEventCount = function () {
                return this.instance.reportedEventCount();
              }),
              (StateMachine.prototype.reportedEventAt = function (r) {
                return this.instance.reportedEventAt(r);
              }),
              (StateMachine.prototype.initInputs = function (r) {
                for (var i = 0; i < this.instance.inputCount(); i++) {
                  var o = this.instance.input(i);
                  this.inputs.push(this.mapRuntimeInput(o, r));
                }
              }),
              (StateMachine.prototype.mapRuntimeInput = function (r, i) {
                return r.type === i.SMIInput.bool
                  ? new B(o.Boolean, r.asBool())
                  : r.type === i.SMIInput.number
                    ? new B(o.Number, r.asNumber())
                    : r.type === i.SMIInput.trigger
                      ? new B(o.Trigger, r.asTrigger())
                      : void 0;
              }),
              (StateMachine.prototype.cleanup = function () {
                (this.inputs.forEach(function (r) {
                  r.delete();
                }),
                  (this.inputs.length = 0),
                  this.instance.delete());
              }),
              (StateMachine.prototype.bindViewModelInstance = function (r) {
                null != r.runtimeInstance &&
                  this.instance.bindViewModelInstance(r.runtimeInstance);
              }),
              StateMachine
            );
          })()),
          (G = (function () {
            function Animator(r, i, o, s, l) {
              (void 0 === s && (s = []),
                void 0 === l && (l = []),
                (this.runtime = r),
                (this.artboard = i),
                (this.eventManager = o),
                (this.animations = s),
                (this.stateMachines = l));
            }
            return (
              (Animator.prototype.add = function (r, i, o) {
                if ((void 0 === o && (o = !0), 0 === (r = eR(r)).length))
                  (this.animations.forEach(function (r) {
                    return (r.playing = i);
                  }),
                    this.stateMachines.forEach(function (r) {
                      return (r.playing = i);
                    }));
                else
                  for (
                    var s = this.animations.map(function (r) {
                        return r.name;
                      }),
                      h = this.stateMachines.map(function (r) {
                        return r.name;
                      }),
                      m = 0;
                    m < r.length;
                    m++
                  ) {
                    var v = s.indexOf(r[m]),
                      y = h.indexOf(r[m]);
                    if (v >= 0 || y >= 0)
                      v >= 0
                        ? (this.animations[v].playing = i)
                        : (this.stateMachines[y].playing = i);
                    else {
                      var w = this.artboard.animationByName(r[m]);
                      if (w) {
                        var A = new _.Animation(
                          w,
                          this.artboard,
                          this.runtime,
                          i,
                        );
                        (A.advance(0), A.apply(1), this.animations.push(A));
                      } else {
                        var M = this.artboard.stateMachineByName(r[m]);
                        if (M) {
                          var I = new $(M, this.runtime, i, this.artboard);
                          this.stateMachines.push(I);
                        }
                      }
                    }
                  }
                return (
                  o &&
                    (i
                      ? this.eventManager.fire({
                          type: l.Play,
                          data: this.playing,
                        })
                      : this.eventManager.fire({
                          type: l.Pause,
                          data: this.paused,
                        })),
                  i ? this.playing : this.paused
                );
              }),
              (Animator.prototype.initLinearAnimations = function (r, i) {
                for (
                  var o = this.animations.map(function (r) {
                      return r.name;
                    }),
                    s = 0;
                  s < r.length;
                  s++
                ) {
                  var l = o.indexOf(r[s]);
                  if (l >= 0) this.animations[l].playing = i;
                  else {
                    var h = this.artboard.animationByName(r[s]);
                    if (h) {
                      var m = new _.Animation(
                        h,
                        this.artboard,
                        this.runtime,
                        i,
                      );
                      (m.advance(0), m.apply(1), this.animations.push(m));
                    } else
                      console.error(
                        "Animation with name ".concat(r[s], " not found."),
                      );
                  }
                }
              }),
              (Animator.prototype.initStateMachines = function (r, i) {
                for (
                  var o = this.stateMachines.map(function (r) {
                      return r.name;
                    }),
                    s = 0;
                  s < r.length;
                  s++
                ) {
                  var l = o.indexOf(r[s]);
                  if (l >= 0) this.stateMachines[l].playing = i;
                  else {
                    var h = this.artboard.stateMachineByName(r[s]);
                    if (h) {
                      var m = new $(h, this.runtime, i, this.artboard);
                      this.stateMachines.push(m);
                    } else
                      (console.warn(
                        "State Machine with name ".concat(r[s], " not found."),
                      ),
                        this.initLinearAnimations([r[s]], i));
                  }
                }
              }),
              (Animator.prototype.play = function (r) {
                return this.add(r, !0);
              }),
              (Animator.prototype.advanceIfPaused = function () {
                this.stateMachines.forEach(function (r) {
                  r.playing || r.advanceAndApply(0);
                });
              }),
              (Animator.prototype.pause = function (r) {
                return this.add(r, !1);
              }),
              (Animator.prototype.scrub = function (r, i) {
                var o = this.animations.filter(function (i) {
                  return r.includes(i.name);
                });
                return (
                  o.forEach(function (r) {
                    return (r.scrubTo = i);
                  }),
                  o.map(function (r) {
                    return r.name;
                  })
                );
              }),
              Object.defineProperty(Animator.prototype, "playing", {
                get: function () {
                  return this.animations
                    .filter(function (r) {
                      return r.playing;
                    })
                    .map(function (r) {
                      return r.name;
                    })
                    .concat(
                      this.stateMachines
                        .filter(function (r) {
                          return r.playing;
                        })
                        .map(function (r) {
                          return r.name;
                        }),
                    );
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(Animator.prototype, "paused", {
                get: function () {
                  return this.animations
                    .filter(function (r) {
                      return !r.playing;
                    })
                    .map(function (r) {
                      return r.name;
                    })
                    .concat(
                      this.stateMachines
                        .filter(function (r) {
                          return !r.playing;
                        })
                        .map(function (r) {
                          return r.name;
                        }),
                    );
                },
                enumerable: !1,
                configurable: !0,
              }),
              (Animator.prototype.stop = function (r) {
                var i = this;
                r = eR(r);
                var o = [];
                if (0 === r.length)
                  ((o = this.animations
                    .map(function (r) {
                      return r.name;
                    })
                    .concat(
                      this.stateMachines.map(function (r) {
                        return r.name;
                      }),
                    )),
                    this.animations.forEach(function (r) {
                      return r.cleanup();
                    }),
                    this.stateMachines.forEach(function (r) {
                      return r.cleanup();
                    }),
                    this.animations.splice(0, this.animations.length),
                    this.stateMachines.splice(0, this.stateMachines.length));
                else {
                  var s = this.animations.filter(function (i) {
                    return r.includes(i.name);
                  });
                  s.forEach(function (r) {
                    (r.cleanup(),
                      i.animations.splice(i.animations.indexOf(r), 1));
                  });
                  var h = this.stateMachines.filter(function (i) {
                    return r.includes(i.name);
                  });
                  (h.forEach(function (r) {
                    (r.cleanup(),
                      i.stateMachines.splice(i.stateMachines.indexOf(r), 1));
                  }),
                    (o = s
                      .map(function (r) {
                        return r.name;
                      })
                      .concat(
                        h.map(function (r) {
                          return r.name;
                        }),
                      )));
                }
                return (this.eventManager.fire({ type: l.Stop, data: o }), o);
              }),
              Object.defineProperty(Animator.prototype, "isPlaying", {
                get: function () {
                  return (
                    this.animations.reduce(function (r, i) {
                      return r || i.playing;
                    }, !1) ||
                    this.stateMachines.reduce(function (r, i) {
                      return r || i.playing;
                    }, !1)
                  );
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(Animator.prototype, "isPaused", {
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
              Object.defineProperty(Animator.prototype, "isStopped", {
                get: function () {
                  return (
                    0 === this.animations.length &&
                    0 === this.stateMachines.length
                  );
                },
                enumerable: !1,
                configurable: !0,
              }),
              (Animator.prototype.atLeastOne = function (r, i) {
                var o;
                return (
                  void 0 === i && (i = !0),
                  0 === this.animations.length &&
                    0 === this.stateMachines.length &&
                    (this.artboard.animationCount() > 0
                      ? this.add(
                          [(o = this.artboard.animationByIndex(0).name)],
                          r,
                          i,
                        )
                      : this.artboard.stateMachineCount() > 0 &&
                        this.add(
                          [(o = this.artboard.stateMachineByIndex(0).name)],
                          r,
                          i,
                        )),
                  o
                );
              }),
              (Animator.prototype.handleLooping = function () {
                for (
                  var r = 0,
                    i = this.animations.filter(function (r) {
                      return r.playing;
                    });
                  r < i.length;
                  r++
                ) {
                  var o = i[r];
                  0 === o.loopValue && o.loopCount
                    ? ((o.loopCount = 0), this.stop(o.name))
                    : 1 === o.loopValue && o.loopCount
                      ? (this.eventManager.fire({
                          type: l.Loop,
                          data: { animation: o.name, type: h.Loop },
                        }),
                        (o.loopCount = 0))
                      : 2 === o.loopValue &&
                        o.loopCount > 1 &&
                        (this.eventManager.fire({
                          type: l.Loop,
                          data: { animation: o.name, type: h.PingPong },
                        }),
                        (o.loopCount = 0));
                }
              }),
              (Animator.prototype.handleStateChanges = function () {
                for (
                  var r = [],
                    i = 0,
                    o = this.stateMachines.filter(function (r) {
                      return r.playing;
                    });
                  i < o.length;
                  i++
                ) {
                  var s = o[i];
                  r.push.apply(r, s.statesChanged);
                }
                r.length > 0 &&
                  this.eventManager.fire({ type: l.StateChange, data: r });
              }),
              (Animator.prototype.handleAdvancing = function (r) {
                this.eventManager.fire({ type: l.Advance, data: r });
              }),
              Animator
            );
          })()),
          ((H = l || (l = {})).Load = "load"),
          (H.LoadError = "loaderror"),
          (H.Play = "play"),
          (H.Pause = "pause"),
          (H.Stop = "stop"),
          (H.Loop = "loop"),
          (H.Draw = "draw"),
          (H.Advance = "advance"),
          (H.StateChange = "statechange"),
          (H.RiveEvent = "riveevent"),
          (H.AudioStatusChange = "audiostatuschange"),
          ((q = h || (h = {})).OneShot = "oneshot"),
          (q.Loop = "loop"),
          (q.PingPong = "pingpong"),
          (J = (function () {
            function EventManager(r) {
              (void 0 === r && (r = []), (this.listeners = r));
            }
            return (
              (EventManager.prototype.getListeners = function (r) {
                return this.listeners.filter(function (i) {
                  return i.type === r;
                });
              }),
              (EventManager.prototype.add = function (r) {
                this.listeners.includes(r) || this.listeners.push(r);
              }),
              (EventManager.prototype.remove = function (r) {
                for (var i = 0; i < this.listeners.length; i++) {
                  var o = this.listeners[i];
                  if (o.type === r.type && o.callback === r.callback) {
                    this.listeners.splice(i, 1);
                    break;
                  }
                }
              }),
              (EventManager.prototype.removeAll = function (r) {
                var i = this;
                r
                  ? this.listeners
                      .filter(function (i) {
                        return i.type === r;
                      })
                      .forEach(function (r) {
                        return i.remove(r);
                      })
                  : this.listeners.splice(0, this.listeners.length);
              }),
              (EventManager.prototype.fire = function (r) {
                this.getListeners(r.type).forEach(function (i) {
                  return i.callback(r);
                });
              }),
              EventManager
            );
          })()),
          (ee = (function () {
            function TaskQueueManager(r) {
              ((this.eventManager = r), (this.queue = []));
            }
            return (
              (TaskQueueManager.prototype.add = function (r) {
                this.queue.push(r);
              }),
              (TaskQueueManager.prototype.process = function () {
                for (; this.queue.length > 0; ) {
                  var r = this.queue.shift();
                  ((null == r ? void 0 : r.action) && r.action(),
                    (null == r ? void 0 : r.event) &&
                      this.eventManager.fire(r.event));
                }
              }),
              TaskQueueManager
            );
          })()),
          ((et = m || (m = {}))[(et.AVAILABLE = 0)] = "AVAILABLE"),
          (et[(et.UNAVAILABLE = 1)] = "UNAVAILABLE"),
          (en = new ((function (r) {
            function AudioManager() {
              var i = (null !== r && r.apply(this, arguments)) || this;
              return (
                (i._started = !1),
                (i._enabled = !1),
                (i._status = m.UNAVAILABLE),
                i
              );
            }
            return (
              I(AudioManager, r),
              (AudioManager.prototype.delay = function (r) {
                return F(this, void 0, void 0, function () {
                  return E(this, function (i) {
                    return [
                      2,
                      new Promise(function (i) {
                        return setTimeout(i, r);
                      }),
                    ];
                  });
                });
              }),
              (AudioManager.prototype.timeout = function () {
                return F(this, void 0, void 0, function () {
                  return E(this, function (r) {
                    return [
                      2,
                      new Promise(function (r, i) {
                        return setTimeout(i, 50);
                      }),
                    ];
                  });
                });
              }),
              (AudioManager.prototype.reportToListeners = function () {
                (this.fire({ type: l.AudioStatusChange }), this.removeAll());
              }),
              (AudioManager.prototype.enableAudio = function () {
                return F(this, void 0, void 0, function () {
                  return E(this, function (r) {
                    return (
                      this._enabled ||
                        ((this._enabled = !0),
                        (this._status = m.AVAILABLE),
                        this.reportToListeners()),
                      [2]
                    );
                  });
                });
              }),
              (AudioManager.prototype.testAudio = function () {
                return F(this, void 0, void 0, function () {
                  return E(this, function (r) {
                    switch (r.label) {
                      case 0:
                        if (
                          !(
                            this._status === m.UNAVAILABLE &&
                            null !== this._audioContext
                          )
                        )
                          return [3, 4];
                        r.label = 1;
                      case 1:
                        return (
                          r.trys.push([1, 3, , 4]),
                          [
                            4,
                            Promise.race([
                              this._audioContext.resume(),
                              this.timeout(),
                            ]),
                          ]
                        );
                      case 2:
                        return (r.sent(), this.enableAudio(), [3, 4]);
                      case 3:
                        return (r.sent(), [3, 4]);
                      case 4:
                        return [2];
                    }
                  });
                });
              }),
              (AudioManager.prototype._establishAudio = function () {
                return F(this, void 0, void 0, function () {
                  return E(this, function (r) {
                    switch (r.label) {
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
                          (r.label = 2));
                      case 2:
                        if (this._status !== m.UNAVAILABLE) return [3, 5];
                        return [4, this.testAudio()];
                      case 3:
                        return (r.sent(), [4, this.delay(1e3)]);
                      case 4:
                        return (r.sent(), [3, 2]);
                      case 5:
                        return [2];
                    }
                  });
                });
              }),
              (AudioManager.prototype.listenForUserAction = function () {
                var r = this;
                document.addEventListener(
                  "pointerdown",
                  function () {
                    return F(r, void 0, void 0, function () {
                      return E(this, function (r) {
                        return (this.enableAudio(), [2]);
                      });
                    });
                  },
                  { once: !0 },
                );
              }),
              (AudioManager.prototype.establishAudio = function () {
                return F(this, void 0, void 0, function () {
                  return E(this, function (r) {
                    return (this._establishAudio(), [2]);
                  });
                });
              }),
              Object.defineProperty(AudioManager.prototype, "systemVolume", {
                get: function () {
                  return this._status === m.UNAVAILABLE
                    ? (this.testAudio(), 0)
                    : 1;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(AudioManager.prototype, "status", {
                get: function () {
                  return this._status;
                },
                enumerable: !1,
                configurable: !0,
              }),
              AudioManager
            );
          })(J))()),
          (er = (function () {
            function FakeResizeObserver() {}
            return (
              (FakeResizeObserver.prototype.observe = function () {}),
              (FakeResizeObserver.prototype.unobserve = function () {}),
              (FakeResizeObserver.prototype.disconnect = function () {}),
              FakeResizeObserver
            );
          })()),
          (ei = globalThis.ResizeObserver || er),
          (ea = new ((function () {
            function ObjectObservers() {
              var r = this;
              ((this._elementsMap = new Map()),
                (this._onObservedEntry = function (i) {
                  var o = r._elementsMap.get(i.target);
                  null !== o
                    ? o.onResize(
                        0 == i.target.clientWidth || 0 == i.target.clientHeight,
                      )
                    : r._resizeObserver.unobserve(i.target);
                }),
                (this._onObserved = function (i) {
                  i.forEach(r._onObservedEntry);
                }),
                (this._resizeObserver = new ei(this._onObserved)));
            }
            return (
              (ObjectObservers.prototype.add = function (r, i) {
                var o = { onResize: i, element: r };
                return (
                  this._elementsMap.set(r, o),
                  this._resizeObserver.observe(r),
                  o
                );
              }),
              (ObjectObservers.prototype.remove = function (r) {
                (this._resizeObserver.unobserve(r.element),
                  this._elementsMap.delete(r.element));
              }),
              ObjectObservers
            );
          })())()),
          (eo = (function () {
            function RiveFile(r) {
              ((this.enableRiveAssetCDN = !0),
                (this.referenceCount = 0),
                (this.destroyed = !1),
                (this.selfUnref = !1),
                (this.src = r.src),
                (this.buffer = r.buffer),
                r.assetLoader && (this.assetLoader = r.assetLoader),
                (this.enableRiveAssetCDN =
                  "boolean" != typeof r.enableRiveAssetCDN ||
                  r.enableRiveAssetCDN),
                (this.eventManager = new J()),
                r.onLoad && this.on(l.Load, r.onLoad),
                r.onLoadError && this.on(l.LoadError, r.onLoadError));
            }
            return (
              (RiveFile.prototype.releaseFile = function () {
                var r;
                (this.selfUnref &&
                  (null === (r = this.file) || void 0 === r || r.unref()),
                  (this.file = null));
              }),
              (RiveFile.prototype.initData = function () {
                return F(this, void 0, void 0, function () {
                  var r, i, o, s;
                  return E(this, function (h) {
                    switch (h.label) {
                      case 0:
                        if (!this.src) return [3, 2];
                        return ((r = this), [4, eI(this.src)]);
                      case 1:
                        ((r.buffer = h.sent()), (h.label = 2));
                      case 2:
                        if (this.destroyed) return [2];
                        return (
                          this.assetLoader &&
                            (i = new A.CustomFileAssetLoaderWrapper(
                              this.runtime,
                              this.assetLoader,
                            ).assetLoader),
                          (o = this),
                          [
                            4,
                            this.runtime.load(
                              new Uint8Array(this.buffer),
                              i,
                              this.enableRiveAssetCDN,
                            ),
                          ]
                        );
                      case 3:
                        if (
                          ((o.file = h.sent()),
                          (s = new A.FileFinalizer(this.file)),
                          A.finalizationRegistry.register(this, s),
                          this.destroyed)
                        )
                          return (this.releaseFile(), [2]);
                        return (
                          null !== this.file
                            ? this.eventManager.fire({
                                type: l.Load,
                                data: this,
                              })
                            : this.fireLoadError(RiveFile.fileLoadErrorMessage),
                          [2]
                        );
                    }
                  });
                });
              }),
              (RiveFile.prototype.init = function () {
                return F(this, void 0, void 0, function () {
                  var r, i;
                  return E(this, function (o) {
                    switch (o.label) {
                      case 0:
                        if (!this.src && !this.buffer)
                          return (
                            this.fireLoadError(RiveFile.missingErrorMessage),
                            [2]
                          );
                        o.label = 1;
                      case 1:
                        return (
                          o.trys.push([1, 4, , 5]),
                          (r = this),
                          [4, W.awaitInstance()]
                        );
                      case 2:
                        if (((r.runtime = o.sent()), this.destroyed))
                          return [2];
                        return [4, this.initData()];
                      case 3:
                        return (o.sent(), [3, 5]);
                      case 4:
                        return (
                          (i = o.sent()),
                          this.fireLoadError(
                            i instanceof Error
                              ? i.message
                              : RiveFile.fileLoadErrorMessage,
                          ),
                          [3, 5]
                        );
                      case 5:
                        return [2];
                    }
                  });
                });
              }),
              (RiveFile.prototype.fireLoadError = function (r) {
                throw (
                  this.eventManager.fire({ type: l.LoadError, data: r }),
                  Error(r)
                );
              }),
              (RiveFile.prototype.on = function (r, i) {
                this.eventManager.add({ type: r, callback: i });
              }),
              (RiveFile.prototype.off = function (r, i) {
                this.eventManager.remove({ type: r, callback: i });
              }),
              (RiveFile.prototype.cleanup = function () {
                ((this.referenceCount -= 1),
                  this.referenceCount <= 0 &&
                    (this.removeAllRiveEventListeners(),
                    this.releaseFile(),
                    (this.destroyed = !0)));
              }),
              (RiveFile.prototype.removeAllRiveEventListeners = function (r) {
                this.eventManager.removeAll(r);
              }),
              (RiveFile.prototype.getInstance = function () {
                if (null !== this.file)
                  return ((this.referenceCount += 1), this.file);
              }),
              (RiveFile.prototype.destroyIfUnused = function () {
                this.referenceCount <= 0 && this.cleanup();
              }),
              (RiveFile.prototype.getArtboard = function (r) {
                var i = this.file.artboardByName(r);
                return null != i ? new z(i) : null;
              }),
              (RiveFile.missingErrorMessage =
                "Rive source file or data buffer required"),
              (RiveFile.fileLoadErrorMessage = "The file failed to load"),
              RiveFile
            );
          })()),
          (es = (function () {
            function Rive(r) {
              var i,
                o = this;
              ((this.loaded = !1),
                (this.destroyed = !1),
                (this._observed = null),
                (this.readyForPlaying = !1),
                (this.artboard = null),
                (this.eventCleanup = null),
                (this.shouldDisableRiveListeners = !1),
                (this.automaticallyHandleEvents = !1),
                (this.enableRiveAssetCDN = !0),
                (this._volume = 1),
                (this._artboardWidth = void 0),
                (this._artboardHeight = void 0),
                (this._devicePixelRatioUsed = 1),
                (this._hasZeroSize = !1),
                (this._audioEventListener = null),
                (this._boundDraw = null),
                (this._viewModelInstance = null),
                (this._dataEnums = null),
                (this.durations = []),
                (this.frameTimes = []),
                (this.frameCount = 0),
                (this.isTouchScrollEnabled = !1),
                (this.onCanvasResize = function (r) {
                  var i = o._hasZeroSize !== r;
                  ((o._hasZeroSize = r),
                    r
                      ? (o._layout.maxX && o._layout.maxY) || o.resizeToCanvas()
                      : i && o.resizeDrawingSurfaceToCanvas());
                }),
                (this.renderSecondTimer = 0),
                (this._boundDraw = this.draw.bind(this)),
                (this.canvas = r.canvas),
                r.canvas.constructor === HTMLCanvasElement &&
                  (this._observed = ea.add(this.canvas, this.onCanvasResize)),
                (this.src = r.src),
                (this.buffer = r.buffer),
                (this.riveFile = r.riveFile),
                (this.layout =
                  null !== (i = r.layout) && void 0 !== i ? i : new O()),
                (this.shouldDisableRiveListeners =
                  !!r.shouldDisableRiveListeners),
                (this.isTouchScrollEnabled = !!r.isTouchScrollEnabled),
                (this.automaticallyHandleEvents =
                  !!r.automaticallyHandleEvents),
                (this.enableRiveAssetCDN =
                  void 0 === r.enableRiveAssetCDN || r.enableRiveAssetCDN),
                (this.eventManager = new J()),
                r.onLoad && this.on(l.Load, r.onLoad),
                r.onLoadError && this.on(l.LoadError, r.onLoadError),
                r.onPlay && this.on(l.Play, r.onPlay),
                r.onPause && this.on(l.Pause, r.onPause),
                r.onStop && this.on(l.Stop, r.onStop),
                r.onLoop && this.on(l.Loop, r.onLoop),
                r.onStateChange && this.on(l.StateChange, r.onStateChange),
                r.onAdvance && this.on(l.Advance, r.onAdvance),
                r.onload && !r.onLoad && this.on(l.Load, r.onload),
                r.onloaderror &&
                  !r.onLoadError &&
                  this.on(l.LoadError, r.onloaderror),
                r.onplay && !r.onPlay && this.on(l.Play, r.onplay),
                r.onpause && !r.onPause && this.on(l.Pause, r.onpause),
                r.onstop && !r.onStop && this.on(l.Stop, r.onstop),
                r.onloop && !r.onLoop && this.on(l.Loop, r.onloop),
                r.onstatechange &&
                  !r.onStateChange &&
                  this.on(l.StateChange, r.onstatechange),
                r.assetLoader && (this.assetLoader = r.assetLoader),
                (this.taskQueue = new ee(this.eventManager)),
                this.init({
                  src: this.src,
                  buffer: this.buffer,
                  riveFile: this.riveFile,
                  autoplay: r.autoplay,
                  autoBind: r.autoBind,
                  animations: r.animations,
                  stateMachines: r.stateMachines,
                  artboard: r.artboard,
                  useOffscreenRenderer: r.useOffscreenRenderer,
                }));
            }
            return (
              Object.defineProperty(Rive.prototype, "viewModelCount", {
                get: function () {
                  return this.file.viewModelCount();
                },
                enumerable: !1,
                configurable: !0,
              }),
              (Rive.new = function (r) {
                return (
                  console.warn(
                    "This function is deprecated: please use `new Rive({})` instead",
                  ),
                  new Rive(r)
                );
              }),
              (Rive.prototype.onSystemAudioChanged = function () {
                this.volume = this._volume;
              }),
              (Rive.prototype.init = function (r) {
                var i = this,
                  o = r.src,
                  s = r.buffer,
                  l = r.riveFile,
                  h = r.animations,
                  m = r.stateMachines,
                  v = r.artboard,
                  y = r.autoplay,
                  w = void 0 !== y && y,
                  _ = r.useOffscreenRenderer,
                  A = void 0 !== _ && _,
                  M = r.autoBind,
                  I = void 0 !== M && M;
                if (!this.destroyed) {
                  if (
                    ((this.src = o),
                    (this.buffer = s),
                    (this.riveFile = l),
                    !this.src && !this.buffer && !this.riveFile)
                  )
                    throw new x(Rive.missingErrorMessage);
                  var C = eR(h),
                    F = eR(m);
                  ((this.loaded = !1),
                    (this.readyForPlaying = !1),
                    W.awaitInstance()
                      .then(function (r) {
                        i.destroyed ||
                          ((i.runtime = r),
                          i.removeRiveListeners(),
                          i.deleteRiveRenderer(),
                          (i.renderer = i.runtime.makeRenderer(i.canvas, A)),
                          i.canvas.width ||
                            i.canvas.height ||
                            i.resizeDrawingSurfaceToCanvas(),
                          i
                            .initData(v, C, F, w, I)
                            .then(function (r) {
                              if (r) return i.setupRiveListeners();
                            })
                            .catch(function (r) {
                              console.error(r);
                            }));
                      })
                      .catch(function (r) {
                        console.error(r);
                      }));
                }
              }),
              (Rive.prototype.setupRiveListeners = function (r) {
                var i = this;
                if (
                  (this.eventCleanup && this.eventCleanup(),
                  !this.shouldDisableRiveListeners)
                ) {
                  var o = (this.animator.stateMachines || [])
                      .filter(function (r) {
                        return r.playing && i.runtime.hasListeners(r.instance);
                      })
                      .map(function (r) {
                        return r.instance;
                      }),
                    s = this.isTouchScrollEnabled;
                  (r &&
                    "isTouchScrollEnabled" in r &&
                    (s = r.isTouchScrollEnabled),
                    (this.eventCleanup = (0, A.registerTouchInteractions)({
                      canvas: this.canvas,
                      artboard: this.artboard,
                      stateMachines: o,
                      renderer: this.renderer,
                      rive: this.runtime,
                      fit: this._layout.runtimeFit(this.runtime),
                      alignment: this._layout.runtimeAlignment(this.runtime),
                      isTouchScrollEnabled: s,
                      layoutScaleFactor: this._layout.layoutScaleFactor,
                    })));
                }
              }),
              (Rive.prototype.removeRiveListeners = function () {
                this.eventCleanup &&
                  (this.eventCleanup(), (this.eventCleanup = null));
              }),
              (Rive.prototype.initializeAudio = function () {
                var r,
                  i = this;
                en.status == m.UNAVAILABLE &&
                  (null === (r = this.artboard) || void 0 === r
                    ? void 0
                    : r.hasAudio) &&
                  null === this._audioEventListener &&
                  ((this._audioEventListener = {
                    type: l.AudioStatusChange,
                    callback: function () {
                      return i.onSystemAudioChanged();
                    },
                  }),
                  en.add(this._audioEventListener),
                  en.establishAudio());
              }),
              (Rive.prototype.initArtboardSize = function () {
                this.artboard &&
                  ((this._artboardWidth = this.artboard.width =
                    this._artboardWidth || this.artboard.width),
                  (this._artboardHeight = this.artboard.height =
                    this._artboardHeight || this.artboard.height));
              }),
              (Rive.prototype.initData = function (r, i, o, s, h) {
                return F(this, void 0, void 0, function () {
                  var m, v, y;
                  return E(this, function (w) {
                    switch (w.label) {
                      case 0:
                        if ((w.trys.push([0, 3, , 4]), null != this.riveFile))
                          return [3, 2];
                        return (
                          (m = new eo({
                            src: this.src,
                            buffer: this.buffer,
                            enableRiveAssetCDN: this.enableRiveAssetCDN,
                            assetLoader: this.assetLoader,
                          })),
                          (this.riveFile = m),
                          [4, m.init()]
                        );
                      case 1:
                        if ((w.sent(), this.destroyed))
                          return (m.destroyIfUnused(), [2, !1]);
                        w.label = 2;
                      case 2:
                        return (
                          (this.file = this.riveFile.getInstance()),
                          this.initArtboard(r, i, o, s, h),
                          this.initArtboardSize(),
                          this.initializeAudio(),
                          (this.loaded = !0),
                          this.eventManager.fire({
                            type: l.Load,
                            data:
                              null !== (y = this.src) && void 0 !== y
                                ? y
                                : "buffer",
                          }),
                          this.animator.advanceIfPaused(),
                          (this.readyForPlaying = !0),
                          this.taskQueue.process(),
                          this.drawFrame(),
                          [2, !0]
                        );
                      case 3:
                        var _;
                        return (
                          console.warn(
                            (v =
                              (_ = w.sent()) && _.isHandledError
                                ? _.message
                                : "Problem loading file; may be corrupt!"),
                          ),
                          this.eventManager.fire({
                            type: l.LoadError,
                            data: v,
                          }),
                          [2, Promise.reject(v)]
                        );
                      case 4:
                        return [2];
                    }
                  });
                });
              }),
              (Rive.prototype.initArtboard = function (r, i, o, s, h) {
                if (this.file) {
                  var m,
                    v = r
                      ? this.file.artboardByName(r)
                      : this.file.defaultArtboard();
                  if (!v) {
                    var y = "Invalid artboard name or no default artboard";
                    (console.warn(y),
                      this.eventManager.fire({ type: l.LoadError, data: y }));
                    return;
                  }
                  if (
                    ((this.artboard = v),
                    (v.volume = this._volume * en.systemVolume),
                    (this.animator = new G(
                      this.runtime,
                      this.artboard,
                      this.eventManager,
                    )),
                    i.length > 0 || o.length > 0
                      ? ((m = i.concat(o)),
                        this.animator.initLinearAnimations(i, s),
                        this.animator.initStateMachines(o, s))
                      : (m = [this.animator.atLeastOne(s, !1)]),
                    this.taskQueue.add({
                      event: { type: s ? l.Play : l.Pause, data: m },
                    }),
                    h)
                  ) {
                    var w = this.file.defaultArtboardViewModel(v);
                    if (null !== w) {
                      var _ = w.defaultInstance();
                      if (null !== _) {
                        var A = new eh(_, null);
                        this.bindViewModelInstance(A);
                      }
                    }
                  }
                }
              }),
              (Rive.prototype.drawFrame = function () {
                var r, i;
                (
                  null ===
                    (r = null == document ? void 0 : document.timeline) ||
                  void 0 === r
                    ? void 0
                    : r.currentTime
                )
                  ? this.loaded &&
                    this.artboard &&
                    !this.frameRequestId &&
                    (this._boundDraw(document.timeline.currentTime),
                    null === (i = this.runtime) ||
                      void 0 === i ||
                      i.resolveAnimationFrame())
                  : this.startRendering();
              }),
              (Rive.prototype.draw = function (r, i) {
                this.frameRequestId = null;
                var o,
                  h = performance.now();
                (this.lastRenderTime || (this.lastRenderTime = r),
                  (this.renderSecondTimer += r - this.lastRenderTime),
                  this.renderSecondTimer > 5e3 &&
                    ((this.renderSecondTimer = 0), null == i || i()));
                var m = (r - this.lastRenderTime) / 1e3;
                this.lastRenderTime = r;
                for (
                  var v = this.animator.animations
                      .filter(function (r) {
                        return r.playing || r.needsScrub;
                      })
                      .sort(function (r) {
                        return r.needsScrub ? -1 : 1;
                      }),
                    y = 0;
                  y < v.length;
                  y++
                ) {
                  var w = v[y];
                  (w.advance(m),
                    w.instance.didLoop && (w.loopCount += 1),
                    w.apply(1));
                }
                for (
                  var _ = this.animator.stateMachines.filter(function (r) {
                      return r.playing;
                    }),
                    M = 0;
                  M < _.length;
                  M++
                ) {
                  var I = _[M],
                    C = I.reportedEventCount();
                  if (C)
                    for (var F = 0; F < C; F++) {
                      var E = I.reportedEventAt(F);
                      if (E) {
                        if (E.type === s.OpenUrl) {
                          if (
                            (this.eventManager.fire({
                              type: l.RiveEvent,
                              data: E,
                            }),
                            this.automaticallyHandleEvents)
                          ) {
                            var P = document.createElement("a"),
                              x = E.url,
                              T = E.target,
                              j = (0, A.sanitizeUrl)(x);
                            (x && P.setAttribute("href", j),
                              T && P.setAttribute("target", T),
                              j && j !== A.BLANK_URL && P.click());
                          }
                        } else
                          this.eventManager.fire({
                            type: l.RiveEvent,
                            data: E,
                          });
                      }
                    }
                  I.advanceAndApply(m);
                }
                0 == this.animator.stateMachines.length &&
                  this.artboard.advance(m);
                var O = this.renderer;
                (O.clear(),
                  O.save(),
                  this.alignRenderer(),
                  this._hasZeroSize || this.artboard.draw(O),
                  O.restore(),
                  O.flush(),
                  this.animator.handleLooping(),
                  this.animator.handleStateChanges(),
                  this.animator.handleAdvancing(m),
                  this.frameCount++);
                var W = performance.now();
                for (
                  this.frameTimes.push(W), this.durations.push(W - h);
                  this.frameTimes[0] <= W - 1e3;
                )
                  (this.frameTimes.shift(), this.durations.shift());
                (null === (o = this._viewModelInstance) ||
                  void 0 === o ||
                  o.handleCallbacks(),
                  this.animator.isPlaying
                    ? this.startRendering()
                    : this.animator.isPaused
                      ? (this.lastRenderTime = 0)
                      : this.animator.isStopped && (this.lastRenderTime = 0));
              }),
              (Rive.prototype.alignRenderer = function () {
                var r = this.renderer,
                  i = this.runtime,
                  o = this._layout,
                  s = this.artboard;
                r.align(
                  o.runtimeFit(i),
                  o.runtimeAlignment(i),
                  { minX: o.minX, minY: o.minY, maxX: o.maxX, maxY: o.maxY },
                  s.bounds,
                  this._devicePixelRatioUsed * o.layoutScaleFactor,
                );
              }),
              Object.defineProperty(Rive.prototype, "fps", {
                get: function () {
                  return this.durations.length;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(Rive.prototype, "frameTime", {
                get: function () {
                  return 0 === this.durations.length
                    ? 0
                    : (
                        this.durations.reduce(function (r, i) {
                          return r + i;
                        }, 0) / this.durations.length
                      ).toFixed(4);
                },
                enumerable: !1,
                configurable: !0,
              }),
              (Rive.prototype.cleanup = function () {
                var r, i;
                ((this.destroyed = !0),
                  this.stopRendering(),
                  this.cleanupInstances(),
                  null !== this._observed && ea.remove(this._observed),
                  this.removeRiveListeners(),
                  this.file &&
                    (null === (r = this.riveFile) ||
                      void 0 === r ||
                      r.cleanup(),
                    (this.file = null)),
                  (this.riveFile = null),
                  this.deleteRiveRenderer(),
                  null !== this._audioEventListener &&
                    (en.remove(this._audioEventListener),
                    (this._audioEventListener = null)),
                  null === (i = this._viewModelInstance) ||
                    void 0 === i ||
                    i.cleanup(),
                  (this._viewModelInstance = null),
                  (this._dataEnums = null));
              }),
              (Rive.prototype.deleteRiveRenderer = function () {
                var r;
                (null === (r = this.renderer) || void 0 === r || r.delete(),
                  (this.renderer = null));
              }),
              (Rive.prototype.cleanupInstances = function () {
                (null !== this.eventCleanup && this.eventCleanup(),
                  this.stop(),
                  this.artboard &&
                    (this.artboard.delete(), (this.artboard = null)));
              }),
              (Rive.prototype.retrieveTextRun = function (r) {
                if (!r) {
                  console.warn("No text run name provided");
                  return;
                }
                if (!this.artboard) {
                  console.warn(
                    "Tried to access text run, but the Artboard is null",
                  );
                  return;
                }
                var i,
                  o = this.artboard.textRun(r);
                if (!o) {
                  console.warn(
                    "Could not access a text run with name '"
                      .concat(r, "' in the '")
                      .concat(
                        null === (i = this.artboard) || void 0 === i
                          ? void 0
                          : i.name,
                        "' Artboard. Note that you must rename a text run node in the Rive editor to make it queryable at runtime.",
                      ),
                  );
                  return;
                }
                return o;
              }),
              (Rive.prototype.getTextRunValue = function (r) {
                var i = this.retrieveTextRun(r);
                return i ? i.text : void 0;
              }),
              (Rive.prototype.setTextRunValue = function (r, i) {
                var o = this.retrieveTextRun(r);
                o && (o.text = i);
              }),
              (Rive.prototype.play = function (r, i) {
                var o = this;
                if (((r = eR(r)), !this.readyForPlaying)) {
                  this.taskQueue.add({
                    action: function () {
                      return o.play(r, i);
                    },
                  });
                  return;
                }
                (this.animator.play(r),
                  this.eventCleanup && this.eventCleanup(),
                  this.setupRiveListeners(),
                  this.startRendering());
              }),
              (Rive.prototype.pause = function (r) {
                var i = this;
                if (((r = eR(r)), !this.readyForPlaying)) {
                  this.taskQueue.add({
                    action: function () {
                      return i.pause(r);
                    },
                  });
                  return;
                }
                (this.eventCleanup && this.eventCleanup(),
                  this.animator.pause(r));
              }),
              (Rive.prototype.scrub = function (r, i) {
                var o = this;
                if (((r = eR(r)), !this.readyForPlaying)) {
                  this.taskQueue.add({
                    action: function () {
                      return o.scrub(r, i);
                    },
                  });
                  return;
                }
                (this.animator.scrub(r, i || 0), this.drawFrame());
              }),
              (Rive.prototype.stop = function (r) {
                var i = this;
                if (((r = eR(r)), !this.readyForPlaying)) {
                  this.taskQueue.add({
                    action: function () {
                      return i.stop(r);
                    },
                  });
                  return;
                }
                (this.animator && this.animator.stop(r),
                  this.eventCleanup && this.eventCleanup());
              }),
              (Rive.prototype.reset = function (r) {
                var i,
                  o,
                  s = null == r ? void 0 : r.artboard,
                  l = eR(null == r ? void 0 : r.animations),
                  h = eR(null == r ? void 0 : r.stateMachines),
                  m =
                    null !== (i = null == r ? void 0 : r.autoplay) &&
                    void 0 !== i &&
                    i,
                  v =
                    null !== (o = null == r ? void 0 : r.autoBind) &&
                    void 0 !== o &&
                    o;
                (this.cleanupInstances(),
                  this.initArtboard(s, l, h, m, v),
                  this.taskQueue.process());
              }),
              (Rive.prototype.load = function (r) {
                ((this.file = null), this.stop(), this.init(r));
              }),
              Object.defineProperty(Rive.prototype, "layout", {
                get: function () {
                  return this._layout;
                },
                set: function (r) {
                  ((this._layout = r),
                    (r.maxX && r.maxY) || this.resizeToCanvas(),
                    this.loaded &&
                      !this.animator.isPlaying &&
                      this.drawFrame());
                },
                enumerable: !1,
                configurable: !0,
              }),
              (Rive.prototype.resizeToCanvas = function () {
                this._layout = this.layout.copyWith({
                  minX: 0,
                  minY: 0,
                  maxX: this.canvas.width,
                  maxY: this.canvas.height,
                });
              }),
              (Rive.prototype.resizeDrawingSurfaceToCanvas = function (i) {
                if (this.canvas instanceof HTMLCanvasElement && window) {
                  var o = this.canvas.getBoundingClientRect(),
                    s = o.width,
                    l = o.height,
                    h = i || window.devicePixelRatio || 1;
                  if (
                    ((this.devicePixelRatioUsed = h),
                    (this.canvas.width = h * s),
                    (this.canvas.height = h * l),
                    this.resizeToCanvas(),
                    this.drawFrame(),
                    this.layout.fit === r.Layout)
                  ) {
                    var m = this._layout.layoutScaleFactor;
                    ((this.artboard.width = s / m),
                      (this.artboard.height = l / m));
                  }
                }
              }),
              Object.defineProperty(Rive.prototype, "source", {
                get: function () {
                  return this.src;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(Rive.prototype, "activeArtboard", {
                get: function () {
                  return this.artboard ? this.artboard.name : "";
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(Rive.prototype, "animationNames", {
                get: function () {
                  if (!this.loaded || !this.artboard) return [];
                  for (
                    var r = [], i = 0;
                    i < this.artboard.animationCount();
                    i++
                  )
                    r.push(this.artboard.animationByIndex(i).name);
                  return r;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(Rive.prototype, "stateMachineNames", {
                get: function () {
                  if (!this.loaded || !this.artboard) return [];
                  for (
                    var r = [], i = 0;
                    i < this.artboard.stateMachineCount();
                    i++
                  )
                    r.push(this.artboard.stateMachineByIndex(i).name);
                  return r;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (Rive.prototype.stateMachineInputs = function (r) {
                if (this.loaded) {
                  var i = this.animator.stateMachines.find(function (i) {
                    return i.name === r;
                  });
                  return null == i ? void 0 : i.inputs;
                }
              }),
              (Rive.prototype.retrieveInputAtPath = function (r, i) {
                if (!r) {
                  console.warn(
                    "No input name provided for path '".concat(i, "'"),
                  );
                  return;
                }
                if (!this.artboard) {
                  console.warn(
                    "Tried to access input: '"
                      .concat(r, "', at path: '")
                      .concat(i, "', but the Artboard is null"),
                  );
                  return;
                }
                var o = this.artboard.inputByPath(r, i);
                if (!o) {
                  console.warn(
                    "Could not access an input with name: '"
                      .concat(r, "', at path:'")
                      .concat(i, "'"),
                  );
                  return;
                }
                return o;
              }),
              (Rive.prototype.setBooleanStateAtPath = function (r, i, s) {
                var l = this.retrieveInputAtPath(r, s);
                l &&
                  (l.type === o.Boolean
                    ? (l.asBool().value = i)
                    : console.warn(
                        "Input with name: '"
                          .concat(r, "', at path:'")
                          .concat(s, "' is not a boolean"),
                      ));
              }),
              (Rive.prototype.setNumberStateAtPath = function (r, i, s) {
                var l = this.retrieveInputAtPath(r, s);
                l &&
                  (l.type === o.Number
                    ? (l.asNumber().value = i)
                    : console.warn(
                        "Input with name: '"
                          .concat(r, "', at path:'")
                          .concat(s, "' is not a number"),
                      ));
              }),
              (Rive.prototype.fireStateAtPath = function (r, i) {
                var s = this.retrieveInputAtPath(r, i);
                s &&
                  (s.type === o.Trigger
                    ? s.asTrigger().fire()
                    : console.warn(
                        "Input with name: '"
                          .concat(r, "', at path:'")
                          .concat(i, "' is not a trigger"),
                      ));
              }),
              (Rive.prototype.retrieveTextAtPath = function (r, i) {
                if (!r) {
                  console.warn(
                    "No text name provided for path '".concat(i, "'"),
                  );
                  return;
                }
                if (!i) {
                  console.warn("No path provided for text '".concat(r, "'"));
                  return;
                }
                if (!this.artboard) {
                  console.warn(
                    "Tried to access text: '"
                      .concat(r, "', at path: '")
                      .concat(i, "', but the Artboard is null"),
                  );
                  return;
                }
                var o = this.artboard.textByPath(r, i);
                if (!o) {
                  console.warn(
                    "Could not access text with name: '"
                      .concat(r, "', at path:'")
                      .concat(i, "'"),
                  );
                  return;
                }
                return o;
              }),
              (Rive.prototype.getTextRunValueAtPath = function (r, i) {
                var o = this.retrieveTextAtPath(r, i);
                if (!o) {
                  console.warn(
                    "Could not get text with name: '"
                      .concat(r, "', at path:'")
                      .concat(i, "'"),
                  );
                  return;
                }
                return o.text;
              }),
              (Rive.prototype.setTextRunValueAtPath = function (r, i, o) {
                var s = this.retrieveTextAtPath(r, o);
                if (!s) {
                  console.warn(
                    "Could not set text with name: '"
                      .concat(r, "', at path:'")
                      .concat(o, "'"),
                  );
                  return;
                }
                s.text = i;
              }),
              Object.defineProperty(
                Rive.prototype,
                "playingStateMachineNames",
                {
                  get: function () {
                    return this.loaded
                      ? this.animator.stateMachines
                          .filter(function (r) {
                            return r.playing;
                          })
                          .map(function (r) {
                            return r.name;
                          })
                      : [];
                  },
                  enumerable: !1,
                  configurable: !0,
                },
              ),
              Object.defineProperty(Rive.prototype, "playingAnimationNames", {
                get: function () {
                  return this.loaded
                    ? this.animator.animations
                        .filter(function (r) {
                          return r.playing;
                        })
                        .map(function (r) {
                          return r.name;
                        })
                    : [];
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(Rive.prototype, "pausedAnimationNames", {
                get: function () {
                  return this.loaded
                    ? this.animator.animations
                        .filter(function (r) {
                          return !r.playing;
                        })
                        .map(function (r) {
                          return r.name;
                        })
                    : [];
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(Rive.prototype, "pausedStateMachineNames", {
                get: function () {
                  return this.loaded
                    ? this.animator.stateMachines
                        .filter(function (r) {
                          return !r.playing;
                        })
                        .map(function (r) {
                          return r.name;
                        })
                    : [];
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(Rive.prototype, "isPlaying", {
                get: function () {
                  return this.animator.isPlaying;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(Rive.prototype, "isPaused", {
                get: function () {
                  return this.animator.isPaused;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(Rive.prototype, "isStopped", {
                get: function () {
                  return this.animator.isStopped;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(Rive.prototype, "bounds", {
                get: function () {
                  return this.artboard ? this.artboard.bounds : void 0;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (Rive.prototype.on = function (r, i) {
                this.eventManager.add({ type: r, callback: i });
              }),
              (Rive.prototype.off = function (r, i) {
                this.eventManager.remove({ type: r, callback: i });
              }),
              (Rive.prototype.unsubscribe = function (r, i) {
                (console.warn(
                  "This function is deprecated: please use `off()` instead.",
                ),
                  this.off(r, i));
              }),
              (Rive.prototype.removeAllRiveEventListeners = function (r) {
                this.eventManager.removeAll(r);
              }),
              (Rive.prototype.unsubscribeAll = function (r) {
                (console.warn(
                  "This function is deprecated: please use `removeAllRiveEventListeners()` instead.",
                ),
                  this.removeAllRiveEventListeners(r));
              }),
              (Rive.prototype.stopRendering = function () {
                this.loaded &&
                  this.frameRequestId &&
                  (this.runtime.cancelAnimationFrame
                    ? this.runtime.cancelAnimationFrame(this.frameRequestId)
                    : cancelAnimationFrame(this.frameRequestId),
                  (this.frameRequestId = null));
              }),
              (Rive.prototype.startRendering = function () {
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
              (Rive.prototype.enableFPSCounter = function (r) {
                this.runtime.enableFPSCounter(r);
              }),
              (Rive.prototype.disableFPSCounter = function () {
                this.runtime.disableFPSCounter();
              }),
              Object.defineProperty(Rive.prototype, "contents", {
                get: function () {
                  if (this.loaded) {
                    for (
                      var r = { artboards: [] }, i = 0;
                      i < this.file.artboardCount();
                      i++
                    ) {
                      for (
                        var o = this.file.artboardByIndex(i),
                          s = {
                            name: o.name,
                            animations: [],
                            stateMachines: [],
                          },
                          l = 0;
                        l < o.animationCount();
                        l++
                      ) {
                        var h = o.animationByIndex(l);
                        s.animations.push(h.name);
                      }
                      for (var m = 0; m < o.stateMachineCount(); m++) {
                        for (
                          var v = o.stateMachineByIndex(m),
                            y = v.name,
                            w = new this.runtime.StateMachineInstance(v, o),
                            _ = [],
                            A = 0;
                          A < w.inputCount();
                          A++
                        ) {
                          var M = w.input(A);
                          _.push({ name: M.name, type: M.type });
                        }
                        s.stateMachines.push({ name: y, inputs: _ });
                      }
                      r.artboards.push(s);
                    }
                    return r;
                  }
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(Rive.prototype, "volume", {
                get: function () {
                  return (
                    this.artboard &&
                      this.artboard.volume !== this._volume &&
                      (this._volume = this.artboard.volume),
                    this._volume
                  );
                },
                set: function (r) {
                  ((this._volume = r),
                    this.artboard &&
                      (this.artboard.volume = r * en.systemVolume));
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(Rive.prototype, "artboardWidth", {
                get: function () {
                  var r;
                  return this.artboard
                    ? this.artboard.width
                    : null !== (r = this._artboardWidth) && void 0 !== r
                      ? r
                      : 0;
                },
                set: function (r) {
                  ((this._artboardWidth = r),
                    this.artboard && (this.artboard.width = r));
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(Rive.prototype, "artboardHeight", {
                get: function () {
                  var r;
                  return this.artboard
                    ? this.artboard.height
                    : null !== (r = this._artboardHeight) && void 0 !== r
                      ? r
                      : 0;
                },
                set: function (r) {
                  ((this._artboardHeight = r),
                    this.artboard && (this.artboard.height = r));
                },
                enumerable: !1,
                configurable: !0,
              }),
              (Rive.prototype.resetArtboardSize = function () {
                this.artboard
                  ? (this.artboard.resetArtboardSize(),
                    (this._artboardWidth = this.artboard.width),
                    (this._artboardHeight = this.artboard.height))
                  : ((this._artboardWidth = void 0),
                    (this._artboardHeight = void 0));
              }),
              Object.defineProperty(Rive.prototype, "devicePixelRatioUsed", {
                get: function () {
                  return this._devicePixelRatioUsed;
                },
                set: function (r) {
                  this._devicePixelRatioUsed = r;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (Rive.prototype.bindViewModelInstance = function (r) {
                var i;
                this.artboard &&
                  !this.destroyed &&
                  r &&
                  r.runtimeInstance &&
                  (r.internalIncrementReferenceCount(),
                  null === (i = this._viewModelInstance) ||
                    void 0 === i ||
                    i.cleanup(),
                  (this._viewModelInstance = r),
                  this.animator.stateMachines.length > 0
                    ? this.animator.stateMachines.forEach(function (i) {
                        return i.bindViewModelInstance(r);
                      })
                    : this.artboard.bindViewModelInstance(r.runtimeInstance));
              }),
              Object.defineProperty(Rive.prototype, "viewModelInstance", {
                get: function () {
                  return this._viewModelInstance;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (Rive.prototype.viewModelByIndex = function (r) {
                var i = this.file.viewModelByIndex(r);
                return null !== i ? new eu(i) : null;
              }),
              (Rive.prototype.viewModelByName = function (r) {
                var i = this.file.viewModelByName(r);
                return null !== i ? new eu(i) : null;
              }),
              (Rive.prototype.enums = function () {
                if (null === this._dataEnums) {
                  var r = this.file.enums();
                  this._dataEnums = r.map(function (r) {
                    return new el(r);
                  });
                }
                return this._dataEnums;
              }),
              (Rive.prototype.defaultViewModel = function () {
                if (this.artboard) {
                  var r = this.file.defaultArtboardViewModel(this.artboard);
                  if (r) return new eu(r);
                }
                return null;
              }),
              (Rive.prototype.getArtboard = function (r) {
                var i, o;
                return null !==
                  (o =
                    null === (i = this.riveFile) || void 0 === i
                      ? void 0
                      : i.getArtboard(r)) && void 0 !== o
                  ? o
                  : null;
              }),
              (Rive.missingErrorMessage =
                "Rive source file or data buffer required"),
              (Rive.cleanupErrorMessage =
                "Attempt to use file after calling cleanup."),
              Rive
            );
          })()),
          (eu = (function () {
            function ViewModel(r) {
              this._viewModel = r;
            }
            return (
              Object.defineProperty(ViewModel.prototype, "instanceCount", {
                get: function () {
                  return this._viewModel.instanceCount;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(ViewModel.prototype, "name", {
                get: function () {
                  return this._viewModel.name;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (ViewModel.prototype.instanceByIndex = function (r) {
                var i = this._viewModel.instanceByIndex(r);
                return null !== i ? new eh(i, null) : null;
              }),
              (ViewModel.prototype.instanceByName = function (r) {
                var i = this._viewModel.instanceByName(r);
                return null !== i ? new eh(i, null) : null;
              }),
              (ViewModel.prototype.defaultInstance = function () {
                var r = this._viewModel.defaultInstance();
                return null !== r ? new eh(r, null) : null;
              }),
              (ViewModel.prototype.instance = function () {
                var r = this._viewModel.instance();
                return null !== r ? new eh(r, null) : null;
              }),
              Object.defineProperty(ViewModel.prototype, "properties", {
                get: function () {
                  return this._viewModel.getProperties();
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(ViewModel.prototype, "instanceNames", {
                get: function () {
                  return this._viewModel.getInstanceNames();
                },
                enumerable: !1,
                configurable: !0,
              }),
              ViewModel
            );
          })()),
          (el = (function () {
            function DataEnum(r) {
              this._dataEnum = r;
            }
            return (
              Object.defineProperty(DataEnum.prototype, "name", {
                get: function () {
                  return this._dataEnum.name;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(DataEnum.prototype, "values", {
                get: function () {
                  return this._dataEnum.values;
                },
                enumerable: !1,
                configurable: !0,
              }),
              DataEnum
            );
          })()),
          ((ef = v || (v = {})).Number = "number"),
          (ef.String = "string"),
          (ef.Boolean = "boolean"),
          (ef.Color = "color"),
          (ef.Trigger = "trigger"),
          (ef.Enum = "enum"),
          (ef.List = "list"),
          (ef.Image = "image"),
          (ef.Artboard = "artboard"),
          (eh = (function () {
            function ViewModelInstance(r, i) {
              ((this._parents = []),
                (this._children = []),
                (this._viewModelInstances = new Map()),
                (this._propertiesWithCallbacks = []),
                (this._referenceCount = 0),
                (this._runtimeInstance = r),
                null !== i && this._parents.push(i));
            }
            return (
              Object.defineProperty(
                ViewModelInstance.prototype,
                "runtimeInstance",
                {
                  get: function () {
                    return this._runtimeInstance;
                  },
                  enumerable: !1,
                  configurable: !0,
                },
              ),
              (ViewModelInstance.prototype.handleCallbacks = function () {
                (0 !== this._propertiesWithCallbacks.length &&
                  (this._propertiesWithCallbacks.forEach(function (r) {
                    r.handleCallbacks();
                  }),
                  this._propertiesWithCallbacks.forEach(function (r) {
                    r.clearChanges();
                  })),
                  this._children.forEach(function (r) {
                    return r.handleCallbacks();
                  }));
              }),
              (ViewModelInstance.prototype.addParent = function (r) {
                !this._parents.includes(r) &&
                  (this._parents.push(r),
                  (this._propertiesWithCallbacks.length > 0 ||
                    this._children.length > 0) &&
                    r.addToViewModelCallbacks(this));
              }),
              (ViewModelInstance.prototype.removeParent = function (r) {
                var i = this._parents.indexOf(r);
                -1 !== i &&
                  (this._parents[i].removeFromViewModelCallbacks(this),
                  this._parents.splice(i, 1));
              }),
              (ViewModelInstance.prototype.addToPropertyCallbacks = function (
                r,
              ) {
                var i = this;
                !this._propertiesWithCallbacks.includes(r) &&
                  (this._propertiesWithCallbacks.push(r),
                  this._propertiesWithCallbacks.length > 0 &&
                    this._parents.forEach(function (r) {
                      r.addToViewModelCallbacks(i);
                    }));
              }),
              (ViewModelInstance.prototype.removeFromPropertyCallbacks =
                function (r) {
                  var i = this;
                  this._propertiesWithCallbacks.includes(r) &&
                    ((this._propertiesWithCallbacks =
                      this._propertiesWithCallbacks.filter(function (i) {
                        return i !== r;
                      })),
                    0 === this._children.length &&
                      0 === this._propertiesWithCallbacks.length &&
                      this._parents.forEach(function (r) {
                        r.removeFromViewModelCallbacks(i);
                      }));
                }),
              (ViewModelInstance.prototype.addToViewModelCallbacks = function (
                r,
              ) {
                var i = this;
                this._children.includes(r) ||
                  (this._children.push(r),
                  this._parents.forEach(function (r) {
                    r.addToViewModelCallbacks(i);
                  }));
              }),
              (ViewModelInstance.prototype.removeFromViewModelCallbacks =
                function (r) {
                  var i = this;
                  this._children.includes(r) &&
                    ((this._children = this._children.filter(function (i) {
                      return i !== r;
                    })),
                    0 === this._children.length &&
                      0 === this._propertiesWithCallbacks.length &&
                      this._parents.forEach(function (r) {
                        r.removeFromViewModelCallbacks(i);
                      }));
                }),
              (ViewModelInstance.prototype.clearCallbacks = function () {
                this._propertiesWithCallbacks.forEach(function (r) {
                  r.clearCallbacks();
                });
              }),
              (ViewModelInstance.prototype.propertyFromPath = function (r, i) {
                var o = r.split("/");
                return this.propertyFromPathSegments(o, 0, i);
              }),
              (ViewModelInstance.prototype.viewModelFromPathSegments =
                function (r, i) {
                  var o = this.internalViewModelInstance(r[i]);
                  return null !== o
                    ? i == r.length - 1
                      ? o
                      : o.viewModelFromPathSegments(r, i++)
                    : null;
                }),
              (ViewModelInstance.prototype.propertyFromPathSegments = function (
                r,
                i,
                o,
              ) {
                if (i < r.length - 1) {
                  var s,
                    l,
                    h,
                    m,
                    y,
                    w,
                    _,
                    A,
                    M,
                    I,
                    C,
                    F,
                    E,
                    P,
                    x,
                    T,
                    j,
                    O,
                    W = this.internalViewModelInstance(r[i]);
                  return null !== W
                    ? W.propertyFromPathSegments(r, i + 1, o)
                    : null;
                }
                var D = null;
                switch (o) {
                  case v.Number:
                    if (
                      null !==
                      (D =
                        null !==
                          (l =
                            null === (s = this._runtimeInstance) || void 0 === s
                              ? void 0
                              : s.number(r[i])) && void 0 !== l
                          ? l
                          : null)
                    )
                      return new ev(D, this);
                    break;
                  case v.String:
                    if (
                      null !==
                      (D =
                        null !==
                          (m =
                            null === (h = this._runtimeInstance) || void 0 === h
                              ? void 0
                              : h.string(r[i])) && void 0 !== m
                          ? m
                          : null)
                    )
                      return new em(D, this);
                    break;
                  case v.Boolean:
                    if (
                      null !==
                      (D =
                        null !==
                          (w =
                            null === (y = this._runtimeInstance) || void 0 === y
                              ? void 0
                              : y.boolean(r[i])) && void 0 !== w
                          ? w
                          : null)
                    )
                      return new eb(D, this);
                    break;
                  case v.Color:
                    if (
                      null !==
                      (D =
                        null !==
                          (A =
                            null === (_ = this._runtimeInstance) || void 0 === _
                              ? void 0
                              : _.color(r[i])) && void 0 !== A
                          ? A
                          : null)
                    )
                      return new e_(D, this);
                    break;
                  case v.Trigger:
                    if (
                      null !==
                      (D =
                        null !==
                          (I =
                            null === (M = this._runtimeInstance) || void 0 === M
                              ? void 0
                              : M.trigger(r[i])) && void 0 !== I
                          ? I
                          : null)
                    )
                      return new eg(D, this);
                    break;
                  case v.Enum:
                    if (
                      null !==
                      (D =
                        null !==
                          (F =
                            null === (C = this._runtimeInstance) || void 0 === C
                              ? void 0
                              : C.enum(r[i])) && void 0 !== F
                          ? F
                          : null)
                    )
                      return new ey(D, this);
                    break;
                  case v.List:
                    if (
                      null !==
                      (D =
                        null !==
                          (P =
                            null === (E = this._runtimeInstance) || void 0 === E
                              ? void 0
                              : E.list(r[i])) && void 0 !== P
                          ? P
                          : null)
                    )
                      return new ew(D, this);
                    break;
                  case v.Image:
                    if (
                      null !==
                      (D =
                        null !==
                          (T =
                            null === (x = this._runtimeInstance) || void 0 === x
                              ? void 0
                              : x.image(r[i])) && void 0 !== T
                          ? T
                          : null)
                    )
                      return new eA(D, this);
                    break;
                  case v.Artboard:
                    if (
                      null !==
                      (D =
                        null !==
                          (O =
                            null === (j = this._runtimeInstance) || void 0 === j
                              ? void 0
                              : j.artboard(r[i])) && void 0 !== O
                          ? O
                          : null)
                    )
                      return new eM(D, this);
                }
                return null;
              }),
              (ViewModelInstance.prototype.internalViewModelInstance =
                function (r) {
                  if (this._viewModelInstances.has(r))
                    return this._viewModelInstances.get(r);
                  var i,
                    o =
                      null === (i = this._runtimeInstance) || void 0 === i
                        ? void 0
                        : i.viewModel(r);
                  if (null !== o) {
                    var s = new ViewModelInstance(o, this);
                    return (
                      s.internalIncrementReferenceCount(),
                      this._viewModelInstances.set(r, s),
                      s
                    );
                  }
                  return null;
                }),
              (ViewModelInstance.prototype.number = function (r) {
                return this.propertyFromPath(r, v.Number);
              }),
              (ViewModelInstance.prototype.string = function (r) {
                return this.propertyFromPath(r, v.String);
              }),
              (ViewModelInstance.prototype.boolean = function (r) {
                return this.propertyFromPath(r, v.Boolean);
              }),
              (ViewModelInstance.prototype.color = function (r) {
                return this.propertyFromPath(r, v.Color);
              }),
              (ViewModelInstance.prototype.trigger = function (r) {
                return this.propertyFromPath(r, v.Trigger);
              }),
              (ViewModelInstance.prototype.enum = function (r) {
                return this.propertyFromPath(r, v.Enum);
              }),
              (ViewModelInstance.prototype.list = function (r) {
                return this.propertyFromPath(r, v.List);
              }),
              (ViewModelInstance.prototype.image = function (r) {
                return this.propertyFromPath(r, v.Image);
              }),
              (ViewModelInstance.prototype.artboard = function (r) {
                return this.propertyFromPath(r, v.Artboard);
              }),
              (ViewModelInstance.prototype.viewModel = function (r) {
                var i = r.split("/"),
                  o =
                    i.length > 1
                      ? this.viewModelFromPathSegments(
                          i.slice(0, i.length - 1),
                          0,
                        )
                      : this;
                return null != o
                  ? o.internalViewModelInstance(i[i.length - 1])
                  : null;
              }),
              (ViewModelInstance.prototype.internalReplaceViewModel = function (
                r,
                i,
              ) {
                var o;
                if (null !== i.runtimeInstance) {
                  var s =
                    (null === (o = this._runtimeInstance) || void 0 === o
                      ? void 0
                      : o.replaceViewModel(r, i.runtimeInstance)) || !1;
                  if (s) {
                    i.internalIncrementReferenceCount();
                    var l = this.internalViewModelInstance(r);
                    (null !== l &&
                      (l.removeParent(this),
                      this._children.includes(l) &&
                        (this._children = this._children.filter(function (r) {
                          return r !== l;
                        })),
                      l.cleanup()),
                      this._viewModelInstances.set(r, i),
                      i.addParent(this));
                  }
                  return s;
                }
                return !1;
              }),
              (ViewModelInstance.prototype.replaceViewModel = function (r, i) {
                var o,
                  s = r.split("/"),
                  l =
                    s.length > 1
                      ? this.viewModelFromPathSegments(
                          s.slice(0, s.length - 1),
                          0,
                        )
                      : this;
                return (
                  null !==
                    (o =
                      null == l
                        ? void 0
                        : l.internalReplaceViewModel(s[s.length - 1], i)) &&
                  void 0 !== o &&
                  o
                );
              }),
              (ViewModelInstance.prototype.incrementReferenceCount =
                function () {
                  var r;
                  (this._referenceCount++,
                    null === (r = this._runtimeInstance) ||
                      void 0 === r ||
                      r.incrementReferenceCount());
                }),
              (ViewModelInstance.prototype.decrementReferenceCount =
                function () {
                  var r;
                  (this._referenceCount--,
                    null === (r = this._runtimeInstance) ||
                      void 0 === r ||
                      r.decrementReferenceCount());
                }),
              Object.defineProperty(ViewModelInstance.prototype, "properties", {
                get: function () {
                  var r;
                  return (
                    (null === (r = this._runtimeInstance) || void 0 === r
                      ? void 0
                      : r.getProperties().map(function (r) {
                          return C({}, r);
                        })) || []
                  );
                },
                enumerable: !1,
                configurable: !0,
              }),
              (ViewModelInstance.prototype.internalIncrementReferenceCount =
                function () {
                  this._referenceCount++;
                }),
              (ViewModelInstance.prototype.cleanup = function () {
                var r = this;
                if ((this._referenceCount--, this._referenceCount <= 0)) {
                  ((this._runtimeInstance = null),
                    this.clearCallbacks(),
                    (this._propertiesWithCallbacks = []),
                    this._viewModelInstances.forEach(function (r) {
                      r.cleanup();
                    }),
                    this._viewModelInstances.clear());
                  var i = P([], this._children, !0);
                  this._children.length = 0;
                  var o = P([], this._parents, !0);
                  ((this._parents.length = 0),
                    i.forEach(function (i) {
                      i.removeParent(r);
                    }),
                    o.forEach(function (i) {
                      i.removeFromViewModelCallbacks(r);
                    }));
                }
              }),
              ViewModelInstance
            );
          })()),
          (em = (function (r) {
            function ViewModelInstanceString(i, o) {
              return r.call(this, i, o) || this;
            }
            return (
              I(ViewModelInstanceString, r),
              Object.defineProperty(
                ViewModelInstanceString.prototype,
                "value",
                {
                  get: function () {
                    return this._viewModelInstanceValue.value;
                  },
                  set: function (r) {
                    this._viewModelInstanceValue.value = r;
                  },
                  enumerable: !1,
                  configurable: !0,
                },
              ),
              (ViewModelInstanceString.prototype.internalHandleCallback =
                function (r) {
                  r(this.value);
                }),
              ViewModelInstanceString
            );
          })(
            (ep = (function () {
              function ViewModelInstanceValue(r, i) {
                ((this.callbacks = []),
                  (this._viewModelInstanceValue = r),
                  (this._parentViewModel = i));
              }
              return (
                (ViewModelInstanceValue.prototype.on = function (r) {
                  (0 === this.callbacks.length &&
                    this._viewModelInstanceValue.clearChanges(),
                    this.callbacks.includes(r) ||
                      (this.callbacks.push(r),
                      this._parentViewModel.addToPropertyCallbacks(this)));
                }),
                (ViewModelInstanceValue.prototype.off = function (r) {
                  (r
                    ? (this.callbacks = this.callbacks.filter(function (i) {
                        return i !== r;
                      }))
                    : (this.callbacks.length = 0),
                    0 === this.callbacks.length &&
                      this._parentViewModel.removeFromPropertyCallbacks(this));
                }),
                (ViewModelInstanceValue.prototype.internalHandleCallback =
                  function (r) {}),
                (ViewModelInstanceValue.prototype.handleCallbacks =
                  function () {
                    var r = this;
                    this._viewModelInstanceValue.hasChanged &&
                      this.callbacks.forEach(function (i) {
                        r.internalHandleCallback(i);
                      });
                  }),
                (ViewModelInstanceValue.prototype.clearChanges = function () {
                  this._viewModelInstanceValue.clearChanges();
                }),
                (ViewModelInstanceValue.prototype.clearCallbacks = function () {
                  this.callbacks.length = 0;
                }),
                Object.defineProperty(
                  ViewModelInstanceValue.prototype,
                  "name",
                  {
                    get: function () {
                      return this._viewModelInstanceValue.name;
                    },
                    enumerable: !1,
                    configurable: !0,
                  },
                ),
                ViewModelInstanceValue
              );
            })()),
          )),
          (ev = (function (r) {
            function ViewModelInstanceNumber(i, o) {
              return r.call(this, i, o) || this;
            }
            return (
              I(ViewModelInstanceNumber, r),
              Object.defineProperty(
                ViewModelInstanceNumber.prototype,
                "value",
                {
                  get: function () {
                    return this._viewModelInstanceValue.value;
                  },
                  set: function (r) {
                    this._viewModelInstanceValue.value = r;
                  },
                  enumerable: !1,
                  configurable: !0,
                },
              ),
              (ViewModelInstanceNumber.prototype.internalHandleCallback =
                function (r) {
                  r(this.value);
                }),
              ViewModelInstanceNumber
            );
          })(ep)),
          (eb = (function (r) {
            function ViewModelInstanceBoolean(i, o) {
              return r.call(this, i, o) || this;
            }
            return (
              I(ViewModelInstanceBoolean, r),
              Object.defineProperty(
                ViewModelInstanceBoolean.prototype,
                "value",
                {
                  get: function () {
                    return this._viewModelInstanceValue.value;
                  },
                  set: function (r) {
                    this._viewModelInstanceValue.value = r;
                  },
                  enumerable: !1,
                  configurable: !0,
                },
              ),
              (ViewModelInstanceBoolean.prototype.internalHandleCallback =
                function (r) {
                  r(this.value);
                }),
              ViewModelInstanceBoolean
            );
          })(ep)),
          (eg = (function (r) {
            function ViewModelInstanceTrigger(i, o) {
              return r.call(this, i, o) || this;
            }
            return (
              I(ViewModelInstanceTrigger, r),
              (ViewModelInstanceTrigger.prototype.trigger = function () {
                return this._viewModelInstanceValue.trigger();
              }),
              (ViewModelInstanceTrigger.prototype.internalHandleCallback =
                function (r) {
                  r();
                }),
              ViewModelInstanceTrigger
            );
          })(ep)),
          (ey = (function (r) {
            function ViewModelInstanceEnum(i, o) {
              return r.call(this, i, o) || this;
            }
            return (
              I(ViewModelInstanceEnum, r),
              Object.defineProperty(ViewModelInstanceEnum.prototype, "value", {
                get: function () {
                  return this._viewModelInstanceValue.value;
                },
                set: function (r) {
                  this._viewModelInstanceValue.value = r;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(
                ViewModelInstanceEnum.prototype,
                "valueIndex",
                {
                  get: function () {
                    return this._viewModelInstanceValue.valueIndex;
                  },
                  set: function (r) {
                    this._viewModelInstanceValue.valueIndex = r;
                  },
                  enumerable: !1,
                  configurable: !0,
                },
              ),
              Object.defineProperty(ViewModelInstanceEnum.prototype, "values", {
                get: function () {
                  return this._viewModelInstanceValue.values;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (ViewModelInstanceEnum.prototype.internalHandleCallback =
                function (r) {
                  r(this.value);
                }),
              ViewModelInstanceEnum
            );
          })(ep)),
          (ew = (function (r) {
            function ViewModelInstanceList(i, o) {
              return r.call(this, i, o) || this;
            }
            return (
              I(ViewModelInstanceList, r),
              Object.defineProperty(ViewModelInstanceList.prototype, "length", {
                get: function () {
                  return this._viewModelInstanceValue.size;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (ViewModelInstanceList.prototype.addInstance = function (r) {
                null != r.runtimeInstance &&
                  (this._viewModelInstanceValue.addInstance(r.runtimeInstance),
                  r.addParent(this._parentViewModel));
              }),
              (ViewModelInstanceList.prototype.addInstanceAt = function (r, i) {
                return (
                  !!(
                    null != r.runtimeInstance &&
                    this._viewModelInstanceValue.addInstanceAt(
                      r.runtimeInstance,
                      i,
                    )
                  ) && (r.addParent(this._parentViewModel), !0)
                );
              }),
              (ViewModelInstanceList.prototype.removeInstance = function (r) {
                null != r.runtimeInstance &&
                  (this._viewModelInstanceValue.removeInstance(
                    r.runtimeInstance,
                  ),
                  r.removeParent(this._parentViewModel));
              }),
              (ViewModelInstanceList.prototype.removeInstanceAt = function (r) {
                this._viewModelInstanceValue.removeInstanceAt(r);
              }),
              (ViewModelInstanceList.prototype.instanceAt = function (r) {
                var i = this._viewModelInstanceValue.instanceAt(r);
                return null != i ? new eh(i, this._parentViewModel) : null;
              }),
              (ViewModelInstanceList.prototype.swap = function (r, i) {
                this._viewModelInstanceValue.swap(r, i);
              }),
              (ViewModelInstanceList.prototype.internalHandleCallback =
                function (r) {
                  r();
                }),
              ViewModelInstanceList
            );
          })(ep)),
          (e_ = (function (r) {
            function ViewModelInstanceColor(i, o) {
              return r.call(this, i, o) || this;
            }
            return (
              I(ViewModelInstanceColor, r),
              Object.defineProperty(ViewModelInstanceColor.prototype, "value", {
                get: function () {
                  return this._viewModelInstanceValue.value;
                },
                set: function (r) {
                  this._viewModelInstanceValue.value = r;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (ViewModelInstanceColor.prototype.rgb = function (r, i, o) {
                this._viewModelInstanceValue.rgb(r, i, o);
              }),
              (ViewModelInstanceColor.prototype.rgba = function (r, i, o, s) {
                this._viewModelInstanceValue.argb(s, r, i, o);
              }),
              (ViewModelInstanceColor.prototype.argb = function (r, i, o, s) {
                this._viewModelInstanceValue.argb(r, i, o, s);
              }),
              (ViewModelInstanceColor.prototype.alpha = function (r) {
                this._viewModelInstanceValue.alpha(r);
              }),
              (ViewModelInstanceColor.prototype.opacity = function (r) {
                this._viewModelInstanceValue.alpha(
                  Math.round(255 * Math.max(0, Math.min(1, r))),
                );
              }),
              (ViewModelInstanceColor.prototype.internalHandleCallback =
                function (r) {
                  r(this.value);
                }),
              ViewModelInstanceColor
            );
          })(ep)),
          (eA = (function (r) {
            function ViewModelInstanceAssetImage(i, o) {
              return r.call(this, i, o) || this;
            }
            return (
              I(ViewModelInstanceAssetImage, r),
              Object.defineProperty(
                ViewModelInstanceAssetImage.prototype,
                "value",
                {
                  set: function (r) {
                    var i;
                    this._viewModelInstanceValue.value(
                      null !== (i = null == r ? void 0 : r.nativeImage) &&
                        void 0 !== i
                        ? i
                        : null,
                    );
                  },
                  enumerable: !1,
                  configurable: !0,
                },
              ),
              (ViewModelInstanceAssetImage.prototype.internalHandleCallback =
                function (r) {
                  r();
                }),
              ViewModelInstanceAssetImage
            );
          })(ep)),
          (eM = (function (r) {
            function ViewModelInstanceArtboard(i, o) {
              return r.call(this, i, o) || this;
            }
            return (
              I(ViewModelInstanceArtboard, r),
              Object.defineProperty(
                ViewModelInstanceArtboard.prototype,
                "value",
                {
                  set: function (r) {
                    var i;
                    this._viewModelInstanceValue.value(
                      null !== (i = null == r ? void 0 : r.nativeArtboard) &&
                        void 0 !== i
                        ? i
                        : null,
                    );
                  },
                  enumerable: !1,
                  configurable: !0,
                },
              ),
              (ViewModelInstanceArtboard.prototype.internalHandleCallback =
                function (r) {
                  r();
                }),
              ViewModelInstanceArtboard
            );
          })(ep)),
          (eI = function (r) {
            return F(void 0, void 0, void 0, function () {
              var i;
              return E(this, function (o) {
                switch (o.label) {
                  case 0:
                    return ((i = new Request(r)), [4, fetch(i)]);
                  case 1:
                    return [4, o.sent().arrayBuffer()];
                  case 2:
                    return [2, o.sent()];
                }
              });
            });
          }),
          (eR = function (r) {
            return "string" == typeof r ? [r] : r instanceof Array ? r : [];
          }),
          (eC = { EventManager: J, TaskQueueManager: ee }),
          (eF = function (r) {
            return F(void 0, void 0, void 0, function () {
              var i, o;
              return E(this, function (s) {
                switch (s.label) {
                  case 0:
                    return [
                      4,
                      new Promise(function (i) {
                        return W.getInstance(function (o) {
                          o.decodeAudio(r, i);
                        });
                      }),
                    ];
                  case 1:
                    return (
                      (i = s.sent()),
                      (o = new A.AudioWrapper(i)),
                      A.finalizationRegistry.register(o, i),
                      [2, o]
                    );
                }
              });
            });
          }),
          (eE = function (r) {
            return F(void 0, void 0, void 0, function () {
              var i, o;
              return E(this, function (s) {
                switch (s.label) {
                  case 0:
                    return [
                      4,
                      new Promise(function (i) {
                        return W.getInstance(function (o) {
                          o.decodeImage(r, i);
                        });
                      }),
                    ];
                  case 1:
                    return (
                      (i = s.sent()),
                      (o = new A.ImageWrapper(i)),
                      A.finalizationRegistry.register(o, i),
                      [2, o]
                    );
                }
              });
            });
          }),
          (eL = function (r) {
            return F(void 0, void 0, void 0, function () {
              var i, o;
              return E(this, function (s) {
                switch (s.label) {
                  case 0:
                    return [
                      4,
                      new Promise(function (i) {
                        return W.getInstance(function (o) {
                          o.decodeFont(r, i);
                        });
                      }),
                    ];
                  case 1:
                    return (
                      (i = s.sent()),
                      (o = new A.FontWrapper(i)),
                      A.finalizationRegistry.register(o, i),
                      [2, o]
                    );
                }
              });
            });
          }),
          eV
        );
      })();
    },
  },
]);
