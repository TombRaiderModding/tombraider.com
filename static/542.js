"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [542],
  {
    170: function (i, a, m) {
      m.d(a, {
        R: function () {
          return b;
        },
      });
      var E,
        b =
          (((E = b || {}).Space = " "),
          (E.Enter = "Enter"),
          (E.Escape = "Escape"),
          (E.Backspace = "Backspace"),
          (E.Delete = "Delete"),
          (E.ArrowLeft = "ArrowLeft"),
          (E.ArrowUp = "ArrowUp"),
          (E.ArrowRight = "ArrowRight"),
          (E.ArrowDown = "ArrowDown"),
          (E.Home = "Home"),
          (E.End = "End"),
          (E.PageUp = "PageUp"),
          (E.PageDown = "PageDown"),
          (E.Tab = "Tab"),
          E);
    },
    16719: function (i, a, m) {
      m.d(a, {
        u: function () {
          return W;
        },
      });
      var E,
        b = m(52983),
        w = m(23285),
        F = m(25874),
        A = m(59438),
        L = m(89306),
        P = m(31083),
        x = m(90101),
        M = m(32963),
        k = m(85682),
        j = m(20140);
      function g(i, ...a) {
        i && a.length > 0 && i.classList.add(...a);
      }
      function v(i, ...a) {
        i && a.length > 0 && i.classList.remove(...a);
      }
      var H = m(14940),
        z = m(7556),
        V = m(65074);
      function S(i = "") {
        return i.split(" ").filter((i) => i.trim().length > 1);
      }
      let Z = (0, b.createContext)(null);
      Z.displayName = "TransitionContext";
      var q = (((E = q || {}).Visible = "visible"), (E.Hidden = "hidden"), E);
      let G = (0, b.createContext)(null);
      function U(i) {
        return "children" in i
          ? U(i.children)
          : i.current
              .filter(({ el: i }) => null !== i.current)
              .filter(({ state: i }) => "visible" === i).length > 0;
      }
      function oe(i, a) {
        let m = (0, x.E)(i),
          E = (0, b.useRef)([]),
          F = (0, L.t)(),
          P = (0, H.G)(),
          M = (0, z.z)((i, a = w.l4.Hidden) => {
            let b = E.current.findIndex(({ el: a }) => a === i);
            -1 !== b &&
              ((0, A.E)(a, {
                [w.l4.Unmount]() {
                  E.current.splice(b, 1);
                },
                [w.l4.Hidden]() {
                  E.current[b].state = "hidden";
                },
              }),
              P.microTask(() => {
                var i;
                !U(E) && F.current && (null == (i = m.current) || i.call(m));
              }));
          }),
          k = (0, z.z)((i) => {
            let a = E.current.find(({ el: a }) => a === i);
            return (
              a
                ? "visible" !== a.state && (a.state = "visible")
                : E.current.push({ el: i, state: "visible" }),
              () => M(i, w.l4.Unmount)
            );
          }),
          j = (0, b.useRef)([]),
          V = (0, b.useRef)(Promise.resolve()),
          Z = (0, b.useRef)({ enter: [], leave: [], idle: [] }),
          q = (0, z.z)((i, m, E) => {
            (j.current.splice(0),
              a &&
                (a.chains.current[m] = a.chains.current[m].filter(
                  ([a]) => a !== i,
                )),
              null == a ||
                a.chains.current[m].push([
                  i,
                  new Promise((i) => {
                    j.current.push(i);
                  }),
                ]),
              null == a ||
                a.chains.current[m].push([
                  i,
                  new Promise((i) => {
                    Promise.all(Z.current[m].map(([i, a]) => a)).then(() =>
                      i(),
                    );
                  }),
                ]),
              "enter" === m
                ? (V.current = V.current
                    .then(() => (null == a ? void 0 : a.wait.current))
                    .then(() => E(m)))
                : E(m));
          }),
          G = (0, z.z)((i, a, m) => {
            Promise.all(Z.current[a].splice(0).map(([i, a]) => a))
              .then(() => {
                var i;
                null == (i = j.current.shift()) || i();
              })
              .then(() => m(a));
          });
        return (0, b.useMemo)(
          () => ({
            children: E,
            register: k,
            unregister: M,
            onStart: q,
            onStop: G,
            wait: V,
            chains: Z,
          }),
          [k, M, E, q, G, Z, V],
        );
      }
      function xe() {}
      G.displayName = "NestingContext";
      let $ = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
      function se(i) {
        var a;
        let m = {};
        for (let E of $) m[E] = null != (a = i[E]) ? a : xe;
        return m;
      }
      let Y = w.AN.RenderStrategy,
        B = (0, w.yV)(function (i, a) {
          let { show: m, appear: E = !1, unmount: A = !0, ...L } = i,
            x = (0, b.useRef)(null),
            j = (0, k.T)(x, a);
          (0, M.H)();
          let H = (0, F.oJ)();
          if (
            (void 0 === m && null !== H && (m = (H & F.ZM.Open) === F.ZM.Open),
            ![!0, !1].includes(m))
          )
            throw Error(
              "A <Transition /> is used but it is missing a `show={true | false}` prop.",
            );
          let [V, q] = (0, b.useState)(m ? "visible" : "hidden"),
            $ = oe(() => {
              q("hidden");
            }),
            [B, K] = (0, b.useState)(!0),
            W = (0, b.useRef)([m]);
          (0, P.e)(() => {
            !1 !== B &&
              W.current[W.current.length - 1] !== m &&
              (W.current.push(m), K(!1));
          }, [W, m]);
          let Q = (0, b.useMemo)(
            () => ({ show: m, appear: E, initial: B }),
            [m, E, B],
          );
          (0, b.useEffect)(() => {
            if (m) q("visible");
            else if (U($)) {
              let i = x.current;
              if (!i) return;
              let a = i.getBoundingClientRect();
              0 === a.x &&
                0 === a.y &&
                0 === a.width &&
                0 === a.height &&
                q("hidden");
            } else q("hidden");
          }, [m, $]);
          let ee = { unmount: A },
            et = (0, z.z)(() => {
              var a;
              (B && K(!1), null == (a = i.beforeEnter) || a.call(i));
            }),
            en = (0, z.z)(() => {
              var a;
              (B && K(!1), null == (a = i.beforeLeave) || a.call(i));
            });
          return b.createElement(
            G.Provider,
            { value: $ },
            b.createElement(
              Z.Provider,
              { value: Q },
              (0, w.sY)({
                ourProps: {
                  ...ee,
                  as: b.Fragment,
                  children: b.createElement(J, {
                    ref: j,
                    ...ee,
                    ...L,
                    beforeEnter: et,
                    beforeLeave: en,
                  }),
                },
                theirProps: {},
                defaultTag: b.Fragment,
                features: Y,
                visible: "visible" === V,
                name: "Transition",
              }),
            ),
          );
        }),
        J = (0, w.yV)(function (i, a) {
          var m, E, q;
          let $;
          let {
              beforeEnter: B,
              afterEnter: J,
              beforeLeave: K,
              afterLeave: W,
              enter: Q,
              enterFrom: ee,
              enterTo: et,
              entered: en,
              leave: er,
              leaveFrom: ei,
              leaveTo: eu,
              ...eo
            } = i,
            el = (0, b.useRef)(null),
            ea = (0, k.T)(el, a),
            es = null == (m = eo.unmount) || m ? w.l4.Unmount : w.l4.Hidden,
            {
              show: ec,
              appear: ef,
              initial: ed,
            } = (function () {
              let i = (0, b.useContext)(Z);
              if (null === i)
                throw Error(
                  "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.",
                );
              return i;
            })(),
            [em, ev] = (0, b.useState)(ec ? "visible" : "hidden"),
            ep = (function () {
              let i = (0, b.useContext)(G);
              if (null === i)
                throw Error(
                  "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.",
                );
              return i;
            })(),
            { register: eh, unregister: eE } = ep;
          ((0, b.useEffect)(() => eh(el), [eh, el]),
            (0, b.useEffect)(() => {
              if (es === w.l4.Hidden && el.current) {
                if (ec && "visible" !== em) {
                  ev("visible");
                  return;
                }
                return (0, A.E)(em, {
                  hidden: () => eE(el),
                  visible: () => eh(el),
                });
              }
            }, [em, el, eh, eE, ec, es]));
          let eg = (0, x.E)({
              base: S(eo.className),
              enter: S(Q),
              enterFrom: S(ee),
              enterTo: S(et),
              entered: S(en),
              leave: S(er),
              leaveFrom: S(ei),
              leaveTo: S(eu),
            }),
            eb =
              ((q = {
                beforeEnter: B,
                afterEnter: J,
                beforeLeave: K,
                afterLeave: W,
              }),
              ($ = (0, b.useRef)(se(q))),
              (0, b.useEffect)(() => {
                $.current = se(q);
              }, [q]),
              $),
            ey = (0, M.H)();
          (0, b.useEffect)(() => {
            if (ey && "visible" === em && null === el.current)
              throw Error(
                "Did you forget to passthrough the `ref` to the actual DOM node?",
              );
          }, [el, em, ey]);
          let ew = ef && ec && ed,
            eS = ey && (!ed || ef) ? (ec ? "enter" : "leave") : "idle",
            eN = (function (i = 0) {
              let [a, m] = (0, b.useState)(i),
                E = (0, L.t)(),
                w = (0, b.useCallback)(
                  (i) => {
                    E.current && m((a) => a | i);
                  },
                  [a, E],
                ),
                F = (0, b.useCallback)((i) => !!(a & i), [a]);
              return {
                flags: a,
                addFlag: w,
                hasFlag: F,
                removeFlag: (0, b.useCallback)(
                  (i) => {
                    E.current && m((a) => a & ~i);
                  },
                  [m, E],
                ),
                toggleFlag: (0, b.useCallback)(
                  (i) => {
                    E.current && m((a) => a ^ i);
                  },
                  [m],
                ),
              };
            })(0),
            eO = (0, z.z)((i) =>
              (0, A.E)(i, {
                enter: () => {
                  (eN.addFlag(F.ZM.Opening), eb.current.beforeEnter());
                },
                leave: () => {
                  (eN.addFlag(F.ZM.Closing), eb.current.beforeLeave());
                },
                idle: () => {},
              }),
            ),
            eF = (0, z.z)((i) =>
              (0, A.E)(i, {
                enter: () => {
                  (eN.removeFlag(F.ZM.Opening), eb.current.afterEnter());
                },
                leave: () => {
                  (eN.removeFlag(F.ZM.Closing), eb.current.afterLeave());
                },
                idle: () => {},
              }),
            ),
            eT = oe(() => {
              (ev("hidden"), eE(el));
            }, ep);
          !(function ({
            immediate: i,
            container: a,
            direction: m,
            classes: E,
            onStart: b,
            onStop: w,
          }) {
            let F = (0, L.t)(),
              M = (0, H.G)(),
              k = (0, x.E)(m);
            ((0, P.e)(() => {
              i && (k.current = "enter");
            }, [i]),
              (0, P.e)(() => {
                let i = (0, j.k)();
                M.add(i.dispose);
                let m = a.current;
                if (m && "idle" !== k.current && F.current) {
                  var L, P, x;
                  let a, F, M, H, z, V, Z;
                  return (
                    i.dispose(),
                    b.current(k.current),
                    i.add(
                      ((L = E.current),
                      (P = "enter" === k.current),
                      (x = () => {
                        (i.dispose(), w.current(k.current));
                      }),
                      (F = P ? "enter" : "leave"),
                      (M = (0, j.k)()),
                      (H =
                        void 0 !== x
                          ? ((a = { called: !1 }),
                            (...i) => {
                              if (!a.called) return ((a.called = !0), x(...i));
                            })
                          : () => {}),
                      "enter" === F &&
                        (m.removeAttribute("hidden"), (m.style.display = "")),
                      (z = (0, A.E)(F, {
                        enter: () => L.enter,
                        leave: () => L.leave,
                      })),
                      (V = (0, A.E)(F, {
                        enter: () => L.enterTo,
                        leave: () => L.leaveTo,
                      })),
                      (Z = (0, A.E)(F, {
                        enter: () => L.enterFrom,
                        leave: () => L.leaveFrom,
                      })),
                      v(
                        m,
                        ...L.base,
                        ...L.enter,
                        ...L.enterTo,
                        ...L.enterFrom,
                        ...L.leave,
                        ...L.leaveFrom,
                        ...L.leaveTo,
                        ...L.entered,
                      ),
                      g(m, ...L.base, ...z, ...Z),
                      M.nextFrame(() => {
                        (v(m, ...L.base, ...z, ...Z),
                          g(m, ...L.base, ...z, ...V),
                          (function (i, a) {
                            let m = (0, j.k)();
                            if (!i) return m.dispose;
                            let { transitionDuration: E, transitionDelay: b } =
                                getComputedStyle(i),
                              [w, F] = [E, b].map((i) => {
                                let [a = 0] = i
                                  .split(",")
                                  .filter(Boolean)
                                  .map((i) =>
                                    i.includes("ms")
                                      ? parseFloat(i)
                                      : 1e3 * parseFloat(i),
                                  )
                                  .sort((i, a) => a - i);
                                return a;
                              }),
                              A = w + F;
                            if (0 !== A) {
                              m.group((m) => {
                                (m.setTimeout(() => {
                                  (a(), m.dispose());
                                }, A),
                                  m.addEventListener(
                                    i,
                                    "transitionrun",
                                    (i) => {
                                      i.target === i.currentTarget &&
                                        m.dispose();
                                    },
                                  ));
                              });
                              let E = m.addEventListener(
                                i,
                                "transitionend",
                                (i) => {
                                  i.target === i.currentTarget && (a(), E());
                                },
                              );
                            } else a();
                            (m.add(() => a()), m.dispose);
                          })(
                            m,
                            () => (
                              v(m, ...L.base, ...z),
                              g(m, ...L.base, ...L.entered),
                              H()
                            ),
                          ));
                      }),
                      M.dispose),
                    ),
                    i.dispose
                  );
                }
              }, [m]));
          })({
            immediate: ew,
            container: el,
            classes: eg,
            direction: eS,
            onStart: (0, x.E)((i) => {
              eT.onStart(el, i, eO);
            }),
            onStop: (0, x.E)((i) => {
              (eT.onStop(el, i, eF),
                "leave" !== i || U(eT) || (ev("hidden"), eE(el)));
            }),
          });
          let eA = eo;
          return (
            ew
              ? (eA = {
                  ...eA,
                  className: (0, V.A)(
                    eo.className,
                    ...eg.current.enter,
                    ...eg.current.enterFrom,
                  ),
                })
              : ((eA.className = (0, V.A)(
                  eo.className,
                  null == (E = el.current) ? void 0 : E.className,
                )),
                "" === eA.className && delete eA.className),
            b.createElement(
              G.Provider,
              { value: eT },
              b.createElement(
                F.up,
                {
                  value:
                    (0, A.E)(em, { visible: F.ZM.Open, hidden: F.ZM.Closed }) |
                    eN.flags,
                },
                (0, w.sY)({
                  ourProps: { ref: ea },
                  theirProps: eA,
                  defaultTag: "div",
                  features: Y,
                  visible: "visible" === em,
                  name: "Transition.Child",
                }),
              ),
            )
          );
        }),
        K = (0, w.yV)(function (i, a) {
          let m = null !== (0, b.useContext)(Z),
            E = null !== (0, F.oJ)();
          return b.createElement(
            b.Fragment,
            null,
            !m && E
              ? b.createElement(B, { ref: a, ...i })
              : b.createElement(J, { ref: a, ...i }),
          );
        }),
        W = Object.assign(B, { Child: K, Root: B });
    },
    14940: function (i, a, m) {
      m.d(a, {
        G: function () {
          return p;
        },
      });
      var E = m(52983),
        b = m(20140);
      function p() {
        let [i] = (0, E.useState)(b.k);
        return ((0, E.useEffect)(() => () => i.dispose(), [i]), i);
      }
    },
    7556: function (i, a, m) {
      m.d(a, {
        z: function () {
          return o;
        },
      });
      var E = m(52983),
        b = m(90101);
      let o = function (i) {
        let a = (0, b.E)(i);
        return E.useCallback((...i) => a.current(...i), [a]);
      };
    },
    14305: function (i, a, m) {
      m.d(a, {
        M: function () {
          return L;
        },
      });
      var E,
        b = m(52983),
        w = m(31083),
        F = m(32963),
        A = m(76461);
      let L =
        null != (E = b.useId)
          ? E
          : function () {
              let i = (0, F.H)(),
                [a, m] = b.useState(i ? () => A.O.nextId() : null);
              return (
                (0, w.e)(() => {
                  null === a && m(A.O.nextId());
                }, [a]),
                null != a ? "" + a : void 0
              );
            };
    },
    89306: function (i, a, m) {
      m.d(a, {
        t: function () {
          return f;
        },
      });
      var E = m(52983),
        b = m(31083);
      function f() {
        let i = (0, E.useRef)(!1);
        return (
          (0, b.e)(
            () => (
              (i.current = !0),
              () => {
                i.current = !1;
              }
            ),
            [],
          ),
          i
        );
      }
    },
    31083: function (i, a, m) {
      m.d(a, {
        e: function () {
          return l;
        },
      });
      var E = m(52983),
        b = m(76461);
      let l = (i, a) => {
        b.O.isServer ? (0, E.useEffect)(i, a) : (0, E.useLayoutEffect)(i, a);
      };
    },
    90101: function (i, a, m) {
      m.d(a, {
        E: function () {
          return s;
        },
      });
      var E = m(52983),
        b = m(31083);
      function s(i) {
        let a = (0, E.useRef)(i);
        return (
          (0, b.e)(() => {
            a.current = i;
          }, [i]),
          a
        );
      }
    },
    80213: function (i, a, m) {
      m.d(a, {
        O: function () {
          return h;
        },
      });
      var E = m(52983),
        b = m(93373),
        w = m(90101);
      function d(i, a, m) {
        let b = (0, w.E)(a);
        (0, E.useEffect)(() => {
          function t(i) {
            b.current(i);
          }
          return (
            document.addEventListener(i, t, m),
            () => document.removeEventListener(i, t, m)
          );
        }, [i, m]);
      }
      var F = m(22771);
      function h(i, a, m = !0) {
        let w = (0, E.useRef)(!1);
        function c(m, E) {
          if (!w.current || m.defaultPrevented) return;
          let F = E(m);
          if (null !== F && F.getRootNode().contains(F) && F.isConnected) {
            for (let a of (function u(i) {
              return "function" == typeof i
                ? u(i())
                : Array.isArray(i) || i instanceof Set
                  ? i
                  : [i];
            })(i)) {
              if (null === a) continue;
              let i = a instanceof HTMLElement ? a : a.current;
              if (
                (null != i && i.contains(F)) ||
                (m.composed && m.composedPath().includes(i))
              )
                return;
            }
            return (
              (0, b.sP)(F, b.tJ.Loose) ||
                -1 === F.tabIndex ||
                m.preventDefault(),
              a(m, F)
            );
          }
        }
        (0, E.useEffect)(() => {
          requestAnimationFrame(() => {
            w.current = m;
          });
        }, [m]);
        let A = (0, E.useRef)(null);
        (d(
          "pointerdown",
          (i) => {
            var a, m;
            w.current &&
              (A.current =
                (null == (m = null == (a = i.composedPath) ? void 0 : a.call(i))
                  ? void 0
                  : m[0]) || i.target);
          },
          !0,
        ),
          d(
            "mousedown",
            (i) => {
              var a, m;
              w.current &&
                (A.current =
                  (null ==
                  (m = null == (a = i.composedPath) ? void 0 : a.call(i))
                    ? void 0
                    : m[0]) || i.target);
            },
            !0,
          ),
          d(
            "click",
            (i) => {
              A.current && (c(i, () => A.current), (A.current = null));
            },
            !0,
          ),
          d(
            "touchend",
            (i) =>
              c(i, () => (i.target instanceof HTMLElement ? i.target : null)),
            !0,
          ),
          (0, F.s)(
            "blur",
            (i) =>
              c(i, () =>
                window.document.activeElement instanceof HTMLIFrameElement
                  ? window.document.activeElement
                  : null,
              ),
            !0,
          ));
      }
    },
    26917: function (i, a, m) {
      m.d(a, {
        i: function () {
          return n;
        },
      });
      var E = m(52983),
        b = m(38795);
      function n(...i) {
        return (0, E.useMemo)(() => (0, b.r)(...i), [...i]);
      }
    },
    32963: function (i, a, m) {
      m.d(a, {
        H: function () {
          return l;
        },
      });
      var E,
        b = m(52983),
        w = m(76461);
      function l() {
        let i;
        let a =
            ((i = "undefined" == typeof document),
            (0, (E || (E = m.t(b, 2))).useSyncExternalStore)(
              () => () => {},
              () => !1,
              () => !i,
            )),
          [F, A] = b.useState(w.O.isHandoffComplete);
        return (
          F && !1 === w.O.isHandoffComplete && A(!1),
          b.useEffect(() => {
            !0 !== F && A(!0);
          }, [F]),
          b.useEffect(() => w.O.handoff(), []),
          !a && F
        );
      }
    },
    85682: function (i, a, m) {
      m.d(a, {
        T: function () {
          return y;
        },
        h: function () {
          return T;
        },
      });
      var E = m(52983),
        b = m(7556);
      let w = Symbol();
      function T(i, a = !0) {
        return Object.assign(i, { [w]: a });
      }
      function y(...i) {
        let a = (0, E.useRef)(i);
        (0, E.useEffect)(() => {
          a.current = i;
        }, [i]);
        let m = (0, b.z)((i) => {
          for (let m of a.current)
            null != m && ("function" == typeof m ? m(i) : (m.current = i));
        });
        return i.every((i) => null == i || (null == i ? void 0 : i[w]))
          ? void 0
          : m;
      }
    },
    22771: function (i, a, m) {
      m.d(a, {
        s: function () {
          return s;
        },
      });
      var E = m(52983),
        b = m(90101);
      function s(i, a, m) {
        let w = (0, b.E)(a);
        (0, E.useEffect)(() => {
          function t(i) {
            w.current(i);
          }
          return (
            window.addEventListener(i, t, m),
            () => window.removeEventListener(i, t, m)
          );
        }, [i, m]);
      }
    },
    25874: function (i, a, m) {
      m.d(a, {
        ZM: function () {
          return F;
        },
        oJ: function () {
          return C;
        },
        up: function () {
          return c;
        },
      });
      var E,
        b = m(52983);
      let w = (0, b.createContext)(null);
      w.displayName = "OpenClosedContext";
      var F =
        (((E = F || {})[(E.Open = 1)] = "Open"),
        (E[(E.Closed = 2)] = "Closed"),
        (E[(E.Closing = 4)] = "Closing"),
        (E[(E.Opening = 8)] = "Opening"),
        E);
      function C() {
        return (0, b.useContext)(w);
      }
      function c({ value: i, children: a }) {
        return b.createElement(w.Provider, { value: i }, a);
      }
    },
    54376: function (i, a, m) {
      function r(i) {
        let a = i.parentElement,
          m = null;
        for (; a && !(a instanceof HTMLFieldSetElement); )
          (a instanceof HTMLLegendElement && (m = a), (a = a.parentElement));
        let E = (null == a ? void 0 : a.getAttribute("disabled")) === "";
        return (
          !(
            E &&
            (function (i) {
              if (!i) return !1;
              let a = i.previousElementSibling;
              for (; null !== a; ) {
                if (a instanceof HTMLLegendElement) return !1;
                a = a.previousElementSibling;
              }
              return !0;
            })(m)
          ) && E
        );
      }
      m.d(a, {
        P: function () {
          return r;
        },
      });
    },
    65074: function (i, a, m) {
      m.d(a, {
        A: function () {
          return t;
        },
      });
      function t(...i) {
        return Array.from(
          new Set(i.flatMap((i) => ("string" == typeof i ? i.split(" ") : []))),
        )
          .filter(Boolean)
          .join(" ");
      }
    },
    20140: function (i, a, m) {
      m.d(a, {
        k: function () {
          return function o() {
            let i = [],
              a = {
                addEventListener: (i, m, E, b) => (
                  i.addEventListener(m, E, b),
                  a.add(() => i.removeEventListener(m, E, b))
                ),
                requestAnimationFrame(...i) {
                  let m = requestAnimationFrame(...i);
                  return a.add(() => cancelAnimationFrame(m));
                },
                nextFrame: (...i) =>
                  a.requestAnimationFrame(() => a.requestAnimationFrame(...i)),
                setTimeout(...i) {
                  let m = setTimeout(...i);
                  return a.add(() => clearTimeout(m));
                },
                microTask(...i) {
                  let m = { current: !0 };
                  return (
                    (0, E.Y)(() => {
                      m.current && i[0]();
                    }),
                    a.add(() => {
                      m.current = !1;
                    })
                  );
                },
                style(i, a, m) {
                  let E = i.style.getPropertyValue(a);
                  return (
                    Object.assign(i.style, { [a]: m }),
                    this.add(() => {
                      Object.assign(i.style, { [a]: E });
                    })
                  );
                },
                group(i) {
                  let a = o();
                  return (i(a), this.add(() => a.dispose()));
                },
                add: (a) => (
                  i.push(a),
                  () => {
                    let m = i.indexOf(a);
                    if (m >= 0) for (let a of i.splice(m, 1)) a();
                  }
                ),
                dispose() {
                  for (let a of i.splice(0)) a();
                },
              };
            return a;
          };
        },
      });
      var E = m(1723);
    },
    76461: function (i, a, m) {
      m.d(a, {
        O: function () {
          return b;
        },
      });
      var E = Object.defineProperty,
        d = (i, a, m) =>
          a in i
            ? E(i, a, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: m,
              })
            : (i[a] = m),
        r = (i, a, m) => (d(i, "symbol" != typeof a ? a + "" : a, m), m);
      let b = new (class {
        constructor() {
          (r(this, "current", this.detect()),
            r(this, "handoffState", "pending"),
            r(this, "currentId", 0));
        }
        set(i) {
          this.current !== i &&
            ((this.handoffState = "pending"),
            (this.currentId = 0),
            (this.current = i));
        }
        reset() {
          this.set(this.detect());
        }
        nextId() {
          return ++this.currentId;
        }
        get isServer() {
          return "server" === this.current;
        }
        get isClient() {
          return "client" === this.current;
        }
        detect() {
          return "undefined" == typeof window || "undefined" == typeof document
            ? "server"
            : "client";
        }
        handoff() {
          "pending" === this.handoffState && (this.handoffState = "complete");
        }
        get isHandoffComplete() {
          return "complete" === this.handoffState;
        }
      })();
    },
    93373: function (i, a, m) {
      m.d(a, {
        C5: function () {
          return y;
        },
        EO: function () {
          return _;
        },
        TO: function () {
          return k;
        },
        fE: function () {
          return j;
        },
        jA: function () {
          return O;
        },
        sP: function () {
          return h;
        },
        tJ: function () {
          return z;
        },
        wI: function () {
          return D;
        },
        z2: function () {
          return I;
        },
      });
      var E,
        b,
        w,
        F,
        A,
        L = m(20140),
        P = m(59438),
        x = m(38795);
      let M = [
        "[contentEditable=true]",
        "[tabindex]",
        "a[href]",
        "area[href]",
        "button:not([disabled])",
        "iframe",
        "input:not([disabled])",
        "select:not([disabled])",
        "textarea:not([disabled])",
      ]
        .map((i) => `${i}:not([tabindex='-1'])`)
        .join(",");
      var k =
          (((E = k || {})[(E.First = 1)] = "First"),
          (E[(E.Previous = 2)] = "Previous"),
          (E[(E.Next = 4)] = "Next"),
          (E[(E.Last = 8)] = "Last"),
          (E[(E.WrapAround = 16)] = "WrapAround"),
          (E[(E.NoScroll = 32)] = "NoScroll"),
          E),
        j =
          (((b = j || {})[(b.Error = 0)] = "Error"),
          (b[(b.Overflow = 1)] = "Overflow"),
          (b[(b.Success = 2)] = "Success"),
          (b[(b.Underflow = 3)] = "Underflow"),
          b),
        H =
          (((w = H || {})[(w.Previous = -1)] = "Previous"),
          (w[(w.Next = 1)] = "Next"),
          w);
      function f(i = document.body) {
        return null == i
          ? []
          : Array.from(i.querySelectorAll(M)).sort((i, a) =>
              Math.sign(
                (i.tabIndex || Number.MAX_SAFE_INTEGER) -
                  (a.tabIndex || Number.MAX_SAFE_INTEGER),
              ),
            );
      }
      var z =
        (((F = z || {})[(F.Strict = 0)] = "Strict"),
        (F[(F.Loose = 1)] = "Loose"),
        F);
      function h(i, a = 0) {
        var m;
        return (
          i !== (null == (m = (0, x.r)(i)) ? void 0 : m.body) &&
          (0, P.E)(a, {
            0: () => i.matches(M),
            1() {
              let a = i;
              for (; null !== a; ) {
                if (a.matches(M)) return !0;
                a = a.parentElement;
              }
              return !1;
            },
          })
        );
      }
      function D(i) {
        let a = (0, x.r)(i);
        (0, L.k)().nextFrame(() => {
          a && !h(a.activeElement, 0) && y(i);
        });
      }
      var V =
        (((A = V || {})[(A.Keyboard = 0)] = "Keyboard"),
        (A[(A.Mouse = 1)] = "Mouse"),
        A);
      function y(i) {
        null == i || i.focus({ preventScroll: !0 });
      }
      function I(i, a = (i) => i) {
        return i.slice().sort((i, m) => {
          let E = a(i),
            b = a(m);
          if (null === E || null === b) return 0;
          let w = E.compareDocumentPosition(b);
          return w & Node.DOCUMENT_POSITION_FOLLOWING
            ? -1
            : w & Node.DOCUMENT_POSITION_PRECEDING
              ? 1
              : 0;
        });
      }
      function _(i, a) {
        return O(f(), a, { relativeTo: i });
      }
      function O(
        i,
        a,
        { sorted: m = !0, relativeTo: E = null, skipElements: b = [] } = {},
      ) {
        var w, F, A;
        let L = Array.isArray(i)
            ? i.length > 0
              ? i[0].ownerDocument
              : document
            : i.ownerDocument,
          P = Array.isArray(i) ? (m ? I(i) : i) : f(i);
        (b.length > 0 && P.length > 1 && (P = P.filter((i) => !b.includes(i))),
          (E = null != E ? E : L.activeElement));
        let x = (() => {
            if (5 & a) return 1;
            if (10 & a) return -1;
            throw Error(
              "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last",
            );
          })(),
          M = (() => {
            if (1 & a) return 0;
            if (2 & a) return Math.max(0, P.indexOf(E)) - 1;
            if (4 & a) return Math.max(0, P.indexOf(E)) + 1;
            if (8 & a) return P.length - 1;
            throw Error(
              "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last",
            );
          })(),
          k = 32 & a ? { preventScroll: !0 } : {},
          j = 0,
          H = P.length,
          z;
        do {
          if (j >= H || j + H <= 0) return 0;
          let i = M + j;
          if (16 & a) i = (i + H) % H;
          else {
            if (i < 0) return 3;
            if (i >= H) return 1;
          }
          (null == (z = P[i]) || z.focus(k), (j += x));
        } while (z !== L.activeElement);
        return (
          6 & a &&
            null !=
              (A =
                null == (F = null == (w = z) ? void 0 : w.matches)
                  ? void 0
                  : F.call(w, "textarea,input")) &&
            A &&
            z.select(),
          2
        );
      }
      "undefined" != typeof window &&
        "undefined" != typeof document &&
        (document.addEventListener(
          "keydown",
          (i) => {
            i.metaKey ||
              i.altKey ||
              i.ctrlKey ||
              (document.documentElement.dataset.headlessuiFocusVisible = "");
          },
          !0,
        ),
        document.addEventListener(
          "click",
          (i) => {
            1 === i.detail
              ? delete document.documentElement.dataset.headlessuiFocusVisible
              : 0 === i.detail &&
                (document.documentElement.dataset.headlessuiFocusVisible = "");
          },
          !0,
        ));
    },
    59438: function (i, a, m) {
      m.d(a, {
        E: function () {
          return u;
        },
      });
      function u(i, a, ...m) {
        if (i in a) {
          let E = a[i];
          return "function" == typeof E ? E(...m) : E;
        }
        let E = Error(
          `Tried to handle "${i}" but there is no handler defined. Only defined handlers are: ${Object.keys(
            a,
          )
            .map((i) => `"${i}"`)
            .join(", ")}.`,
        );
        throw (Error.captureStackTrace && Error.captureStackTrace(E, u), E);
      }
    },
    1723: function (i, a, m) {
      m.d(a, {
        Y: function () {
          return t;
        },
      });
      function t(i) {
        "function" == typeof queueMicrotask
          ? queueMicrotask(i)
          : Promise.resolve()
              .then(i)
              .catch((i) =>
                setTimeout(() => {
                  throw i;
                }),
              );
      }
    },
    38795: function (i, a, m) {
      m.d(a, {
        r: function () {
          return e;
        },
      });
      var E = m(76461);
      function e(i) {
        return E.O.isServer
          ? null
          : i instanceof Node
            ? i.ownerDocument
            : null != i &&
                i.hasOwnProperty("current") &&
                i.current instanceof Node
              ? i.current.ownerDocument
              : document;
      }
    },
    23285: function (i, a, m) {
      m.d(a, {
        AN: function () {
          return L;
        },
        l4: function () {
          return P;
        },
        sY: function () {
          return X;
        },
        yV: function () {
          return D;
        },
      });
      var E,
        b,
        w = m(52983),
        F = m(65074),
        A = m(59438),
        L =
          (((E = L || {})[(E.None = 0)] = "None"),
          (E[(E.RenderStrategy = 1)] = "RenderStrategy"),
          (E[(E.Static = 2)] = "Static"),
          E),
        P =
          (((b = P || {})[(b.Unmount = 0)] = "Unmount"),
          (b[(b.Hidden = 1)] = "Hidden"),
          b);
      function X({
        ourProps: i,
        theirProps: a,
        slot: m,
        defaultTag: E,
        features: b,
        visible: w = !0,
        name: F,
      }) {
        let L = N(a, i);
        if (w) return c(L, m, E, F);
        let P = null != b ? b : 0;
        if (2 & P) {
          let { static: i = !1, ...a } = L;
          if (i) return c(a, m, E, F);
        }
        if (1 & P) {
          let { unmount: i = !0, ...a } = L;
          return (0, A.E)(i ? 0 : 1, {
            0: () => null,
            1: () =>
              c({ ...a, hidden: !0, style: { display: "none" } }, m, E, F),
          });
        }
        return c(L, m, E, F);
      }
      function c(i, a = {}, m, E) {
        let {
            as: b = m,
            children: A,
            refName: L = "ref",
            ...P
          } = g(i, ["unmount", "static"]),
          x = void 0 !== i.ref ? { [L]: i.ref } : {},
          M = "function" == typeof A ? A(a) : A;
        "className" in P &&
          P.className &&
          "function" == typeof P.className &&
          (P.className = P.className(a));
        let k = {};
        if (a) {
          let i = !1,
            m = [];
          for (let [E, b] of Object.entries(a))
            ("boolean" == typeof b && (i = !0), !0 === b && m.push(E));
          i && (k["data-headlessui-state"] = m.join(" "));
        }
        if (b === w.Fragment && Object.keys(R(P)).length > 0) {
          if (!(0, w.isValidElement)(M) || (Array.isArray(M) && M.length > 1))
            throw Error(
              [
                'Passing props on "Fragment"!',
                "",
                `The current component <${E} /> is rendering a "Fragment".`,
                "However we need to passthrough the following props:",
                Object.keys(P).map((i) => `  - ${i}`).join(`
`),
                "",
                "You can apply a few solutions:",
                [
                  'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
                  "Render a single element as the child so that we can forward the props onto that element.",
                ].map((i) => `  - ${i}`).join(`
`),
              ].join(`
`),
            );
          let i = M.props,
            a =
              "function" == typeof (null == i ? void 0 : i.className)
                ? (...a) =>
                    (0, F.A)(
                      null == i ? void 0 : i.className(...a),
                      P.className,
                    )
                : (0, F.A)(null == i ? void 0 : i.className, P.className),
            m = a ? { className: a } : {};
          return (0, w.cloneElement)(
            M,
            Object.assign(
              {},
              N(M.props, R(g(P, ["ref"]))),
              k,
              x,
              (function (...i) {
                return {
                  ref: i.every((i) => null == i)
                    ? void 0
                    : (a) => {
                        for (let m of i)
                          null != m &&
                            ("function" == typeof m ? m(a) : (m.current = a));
                      },
                };
              })(M.ref, x.ref),
              m,
            ),
          );
        }
        return (0, w.createElement)(
          b,
          Object.assign(
            {},
            g(P, ["ref"]),
            b !== w.Fragment && x,
            b !== w.Fragment && k,
          ),
          M,
        );
      }
      function N(...i) {
        if (0 === i.length) return {};
        if (1 === i.length) return i[0];
        let a = {},
          m = {};
        for (let E of i)
          for (let i in E)
            i.startsWith("on") && "function" == typeof E[i]
              ? (null != m[i] || (m[i] = []), m[i].push(E[i]))
              : (a[i] = E[i]);
        if (a.disabled || a["aria-disabled"])
          return Object.assign(
            a,
            Object.fromEntries(Object.keys(m).map((i) => [i, void 0])),
          );
        for (let i in m)
          Object.assign(a, {
            [i](a, ...E) {
              for (let b of m[i]) {
                if (
                  (a instanceof Event ||
                    (null == a ? void 0 : a.nativeEvent) instanceof Event) &&
                  a.defaultPrevented
                )
                  return;
                b(a, ...E);
              }
            },
          });
        return a;
      }
      function D(i) {
        var a;
        return Object.assign((0, w.forwardRef)(i), {
          displayName: null != (a = i.displayName) ? a : i.name,
        });
      }
      function R(i) {
        let a = Object.assign({}, i);
        for (let i in a) void 0 === a[i] && delete a[i];
        return a;
      }
      function g(i, a = []) {
        let m = Object.assign({}, i);
        for (let i of a) i in m && delete m[i];
        return m;
      }
    },
  },
]);
