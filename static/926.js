"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [926],
  {
    16383: function (n, o, l) {
      let a, u;
      l.d(o, {
        V: function () {
          return eE;
        },
      });
      var s,
        d,
        f,
        p,
        m,
        v,
        g,
        h = l(52983),
        w = l.t(h, 2),
        b = l(59438),
        T = l(23285),
        y = l(85682),
        C = l(170),
        L = l(54376),
        M = l(14305),
        k = l(32963),
        _ =
          (((s = _ || {})[(s.None = 1)] = "None"),
          (s[(s.Focusable = 2)] = "Focusable"),
          (s[(s.Hidden = 4)] = "Hidden"),
          s);
      let R = (0, T.yV)(function (n, o) {
        let { features: l = 1, ...a } = n,
          u = {
            ref: o,
            "aria-hidden": (2 & l) == 2 || void 0,
            style: {
              position: "fixed",
              top: 1,
              left: 1,
              width: 1,
              height: 0,
              padding: 0,
              margin: -1,
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              borderWidth: "0",
              ...((4 & l) == 4 && (2 & l) != 2 && { display: "none" }),
            },
          };
        return (0, T.sY)({
          ourProps: u,
          theirProps: a,
          slot: {},
          defaultTag: "div",
          name: "Hidden",
        });
      });
      var D = l(93373),
        O = l(7556),
        A = l(22771),
        F =
          (((d = F || {})[(d.Forwards = 0)] = "Forwards"),
          (d[(d.Backwards = 1)] = "Backwards"),
          d),
        x = l(89306),
        H = l(26917),
        N = l(90101);
      function E(n, o, l, a) {
        let u = (0, N.E)(l);
        (0, h.useEffect)(() => {
          function r(n) {
            u.current(n);
          }
          return (
            (n = null != n ? n : window).addEventListener(o, r, a),
            () => n.removeEventListener(o, r, a)
          );
        }, [n, o, a]);
      }
      var Y = l(1723);
      function use_watch_m(n, o) {
        let l = (0, h.useRef)([]),
          a = (0, O.z)(n);
        (0, h.useEffect)(() => {
          let n = [...l.current];
          for (let [u, s] of o.entries())
            if (l.current[u] !== s) {
              let u = a(o, n);
              return ((l.current = o), u);
            }
        }, [a, ...o]);
      }
      var z = l(14940);
      function c(n) {
        let o = (0, O.z)(n),
          l = (0, h.useRef)(!1);
        (0, h.useEffect)(
          () => (
            (l.current = !1),
            () => {
              ((l.current = !0),
                (0, Y.Y)(() => {
                  l.current && o();
                }));
            }
          ),
          [o],
        );
      }
      function P(n) {
        if (!n) return new Set();
        if ("function" == typeof n) return new Set(n());
        let o = new Set();
        for (let l of n.current)
          l.current instanceof HTMLElement && o.add(l.current);
        return o;
      }
      var V =
        (((f = V || {})[(f.None = 1)] = "None"),
        (f[(f.InitialFocus = 2)] = "InitialFocus"),
        (f[(f.TabLock = 4)] = "TabLock"),
        (f[(f.FocusLock = 8)] = "FocusLock"),
        (f[(f.RestoreFocus = 16)] = "RestoreFocus"),
        (f[(f.All = 30)] = "All"),
        f);
      let B = Object.assign(
          (0, T.yV)(function (n, o) {
            let l,
              a = (0, h.useRef)(null),
              u = (0, y.T)(a, o),
              { initialFocus: s, containers: d, features: f = 30, ...p } = n;
            (0, k.H)() || (f = 1);
            let m = (0, H.i)(a);
            !(function ({ ownerDocument: n }, o) {
              let l = (function (n = !0) {
                let o = (0, h.useRef)(I.slice());
                return (
                  use_watch_m(
                    ([n], [l]) => {
                      (!0 === l &&
                        !1 === n &&
                        (0, Y.Y)(() => {
                          o.current.splice(0);
                        }),
                        !1 === l && !0 === n && (o.current = I.slice()));
                    },
                    [n, I, o],
                  ),
                  (0, O.z)(() => {
                    var n;
                    return null !=
                      (n = o.current.find((n) => null != n && n.isConnected))
                      ? n
                      : null;
                  })
                );
              })(o);
              (use_watch_m(() => {
                o ||
                  ((null == n ? void 0 : n.activeElement) ===
                    (null == n ? void 0 : n.body) &&
                    (0, D.C5)(l()));
              }, [o]),
                c(() => {
                  o && (0, D.C5)(l());
                }));
            })({ ownerDocument: m }, !!(16 & f));
            let v = (function (
              { ownerDocument: n, container: o, initialFocus: l },
              a,
            ) {
              let u = (0, h.useRef)(null),
                s = (0, x.t)();
              return (
                use_watch_m(() => {
                  if (!a) return;
                  let d = o.current;
                  d &&
                    (0, Y.Y)(() => {
                      if (!s.current) return;
                      let o = null == n ? void 0 : n.activeElement;
                      if (null != l && l.current) {
                        if ((null == l ? void 0 : l.current) === o) {
                          u.current = o;
                          return;
                        }
                      } else if (d.contains(o)) {
                        u.current = o;
                        return;
                      }
                      (null != l && l.current
                        ? (0, D.C5)(l.current)
                        : (0, D.jA)(d, D.TO.First) === D.fE.Error &&
                          console.warn(
                            "There are no focusable elements inside the <FocusTrap />",
                          ),
                        (u.current = null == n ? void 0 : n.activeElement));
                    });
                }, [a]),
                u
              );
            })({ ownerDocument: m, container: a, initialFocus: s }, !!(2 & f));
            !(function (
              {
                ownerDocument: n,
                container: o,
                containers: l,
                previousActiveElement: a,
              },
              u,
            ) {
              let s = (0, x.t)();
              E(
                null == n ? void 0 : n.defaultView,
                "focus",
                (n) => {
                  if (!u || !s.current) return;
                  let d = P(l);
                  o.current instanceof HTMLElement && d.add(o.current);
                  let f = a.current;
                  if (!f) return;
                  let p = n.target;
                  p && p instanceof HTMLElement
                    ? S(d, p)
                      ? ((a.current = p), (0, D.C5)(p))
                      : (n.preventDefault(), n.stopPropagation(), (0, D.C5)(f))
                    : (0, D.C5)(a.current);
                },
                !0,
              );
            })(
              {
                ownerDocument: m,
                container: a,
                containers: d,
                previousActiveElement: v,
              },
              !!(8 & f),
            );
            let g =
                ((l = (0, h.useRef)(0)),
                (0, A.s)(
                  "keydown",
                  (n) => {
                    "Tab" === n.key && (l.current = n.shiftKey ? 1 : 0);
                  },
                  !0,
                ),
                l),
              w = (0, O.z)((n) => {
                let o = a.current;
                o &&
                  (0, b.E)(g.current, {
                    [F.Forwards]: () => {
                      (0, D.jA)(o, D.TO.First, {
                        skipElements: [n.relatedTarget],
                      });
                    },
                    [F.Backwards]: () => {
                      (0, D.jA)(o, D.TO.Last, {
                        skipElements: [n.relatedTarget],
                      });
                    },
                  });
              }),
              C = (0, z.G)(),
              L = (0, h.useRef)(!1);
            return h.createElement(
              h.Fragment,
              null,
              !!(4 & f) &&
                h.createElement(R, {
                  as: "button",
                  type: "button",
                  "data-headlessui-focus-guard": !0,
                  onFocus: w,
                  features: _.Focusable,
                }),
              (0, T.sY)({
                ourProps: {
                  ref: u,
                  onKeyDown(n) {
                    "Tab" == n.key &&
                      ((L.current = !0),
                      C.requestAnimationFrame(() => {
                        L.current = !1;
                      }));
                  },
                  onBlur(n) {
                    let o = P(d);
                    a.current instanceof HTMLElement && o.add(a.current);
                    let l = n.relatedTarget;
                    l instanceof HTMLElement &&
                      "true" !== l.dataset.headlessuiFocusGuard &&
                      (S(o, l) ||
                        (L.current
                          ? (0, D.jA)(
                              a.current,
                              (0, b.E)(g.current, {
                                [F.Forwards]: () => D.TO.Next,
                                [F.Backwards]: () => D.TO.Previous,
                              }) | D.TO.WrapAround,
                              { relativeTo: n.target },
                            )
                          : n.target instanceof HTMLElement &&
                            (0, D.C5)(n.target)));
                  },
                },
                theirProps: p,
                defaultTag: "div",
                name: "FocusTrap",
              }),
              !!(4 & f) &&
                h.createElement(R, {
                  as: "button",
                  type: "button",
                  "data-headlessui-focus-guard": !0,
                  onFocus: w,
                  features: _.Focusable,
                }),
            );
          }),
          { features: V },
        ),
        I = [];
      function S(n, o) {
        for (let l of n) if (l.contains(o)) return !0;
        return !1;
      }
      !(function (n) {
        function e() {
          "loading" !== document.readyState &&
            (n(), document.removeEventListener("DOMContentLoaded", e));
        }
        "undefined" != typeof window &&
          "undefined" != typeof document &&
          (document.addEventListener("DOMContentLoaded", e), e());
      })(() => {
        function t(n) {
          n.target instanceof HTMLElement &&
            n.target !== document.body &&
            I[0] !== n.target &&
            (I.unshift(n.target),
            (I = I.filter((n) => null != n && n.isConnected)).splice(10));
        }
        (window.addEventListener("click", t, { capture: !0 }),
          window.addEventListener("mousedown", t, { capture: !0 }),
          window.addEventListener("focus", t, { capture: !0 }),
          document.body.addEventListener("click", t, { capture: !0 }),
          document.body.addEventListener("mousedown", t, { capture: !0 }),
          document.body.addEventListener("focus", t, { capture: !0 }));
      });
      var j = l(63730),
        W = l(31083);
      let $ = (0, h.createContext)(!1);
      function portal_force_root_P(n) {
        return h.createElement($.Provider, { value: n.force }, n.children);
      }
      var q = l(76461);
      let G = h.Fragment,
        U = h.Fragment,
        Z = (0, h.createContext)(null),
        K = (0, h.createContext)(null),
        J = Object.assign(
          (0, T.yV)(function (n, o) {
            let l = (0, h.useRef)(null),
              a = (0, y.T)(
                (0, y.h)((n) => {
                  l.current = n;
                }),
                o,
              ),
              u = (0, H.i)(l),
              s = (function (n) {
                let o = (0, h.useContext)($),
                  l = (0, h.useContext)(Z),
                  a = (0, H.i)(n),
                  [u, s] = (0, h.useState)(() => {
                    if ((!o && null !== l) || q.O.isServer) return null;
                    let n =
                      null == a
                        ? void 0
                        : a.getElementById("headlessui-portal-root");
                    if (n) return n;
                    if (null === a) return null;
                    let u = a.createElement("div");
                    return (
                      u.setAttribute("id", "headlessui-portal-root"),
                      a.body.appendChild(u)
                    );
                  });
                return (
                  (0, h.useEffect)(() => {
                    null !== u &&
                      ((null != a && a.body.contains(u)) ||
                        null == a ||
                        a.body.appendChild(u));
                  }, [u, a]),
                  (0, h.useEffect)(() => {
                    o || (null !== l && s(l.current));
                  }, [l, s, o]),
                  u
                );
              })(l),
              [d] = (0, h.useState)(() => {
                var n;
                return q.O.isServer
                  ? null
                  : null != (n = null == u ? void 0 : u.createElement("div"))
                    ? n
                    : null;
              }),
              f = (0, h.useContext)(K),
              p = (0, k.H)();
            return (
              (0, W.e)(() => {
                !s ||
                  !d ||
                  s.contains(d) ||
                  (d.setAttribute("data-headlessui-portal", ""),
                  s.appendChild(d));
              }, [s, d]),
              (0, W.e)(() => {
                if (d && f) return f.register(d);
              }, [f, d]),
              c(() => {
                var n;
                s &&
                  d &&
                  (d instanceof Node && s.contains(d) && s.removeChild(d),
                  s.childNodes.length <= 0 &&
                    (null == (n = s.parentElement) || n.removeChild(s)));
              }),
              p && s && d
                ? (0, j.createPortal)(
                    (0, T.sY)({
                      ourProps: { ref: a },
                      theirProps: n,
                      defaultTag: G,
                      name: "Portal",
                    }),
                    d,
                  )
                : null
            );
          }),
          {
            Group: (0, T.yV)(function (n, o) {
              let { target: l, ...a } = n,
                u = { ref: (0, y.T)(o) };
              return h.createElement(
                Z.Provider,
                { value: l },
                (0, T.sY)({
                  ourProps: u,
                  theirProps: a,
                  defaultTag: U,
                  name: "Popover.Group",
                }),
              );
            }),
          },
        ),
        Q = (0, h.createContext)(null),
        X = Object.assign(
          (0, T.yV)(function (n, o) {
            let l = (0, M.M)(),
              { id: a = `headlessui-description-${l}`, ...u } = n,
              s = (function description_f() {
                let n = (0, h.useContext)(Q);
                if (null === n) {
                  let n = Error(
                    "You used a <Description /> component, but it is not inside a relevant parent.",
                  );
                  throw (
                    Error.captureStackTrace &&
                      Error.captureStackTrace(n, description_f),
                    n
                  );
                }
                return n;
              })(),
              d = (0, y.T)(o);
            (0, W.e)(() => s.register(a), [a, s.register]);
            let f = { ref: d, ...s.props, id: a };
            return (0, T.sY)({
              ourProps: f,
              theirProps: u,
              slot: s.slot || {},
              defaultTag: "p",
              name: s.name || "Description",
            });
          }),
          {},
        );
      var ee = l(25874);
      let et = (0, h.createContext)(() => {});
      et.displayName = "StackContext";
      var en =
        (((p = en || {})[(p.Add = 0)] = "Add"),
        (p[(p.Remove = 1)] = "Remove"),
        p);
      function stack_context_M({
        children: n,
        onUpdate: o,
        type: l,
        element: a,
        enabled: u,
      }) {
        let s = (0, h.useContext)(et),
          d = (0, O.z)((...n) => {
            (null == o || o(...n), s(...n));
          });
        return (
          (0, W.e)(() => {
            let n = void 0 === u || !0 === u;
            return (
              n && d(0, l, a),
              () => {
                n && d(1, l, a);
              }
            );
          }, [d, l, a, u]),
          h.createElement(et.Provider, { value: d }, n)
        );
      }
      var er = l(80213);
      let {
        useState: eo,
        useEffect: el,
        useLayoutEffect: ea,
        useDebugValue: ei,
      } = w;
      "undefined" != typeof window &&
        void 0 !== window.document &&
        window.document.createElement;
      let eu = w.useSyncExternalStore;
      var es = l(20140);
      let ec =
        ((m = {
          PUSH(n, o) {
            var l;
            let a =
              null != (l = this.get(n))
                ? l
                : { doc: n, count: 0, d: (0, es.k)(), meta: new Set() };
            return (a.count++, a.meta.add(o), this.set(n, a), this);
          },
          POP(n, o) {
            let l = this.get(n);
            return (l && (l.count--, l.meta.delete(o)), this);
          },
          SCROLL_PREVENT({ doc: n, d: o, meta: l }) {
            let a, u;
            let s = {
                doc: n,
                d: o,
                meta: (function (n) {
                  let o = {};
                  for (let l of n) Object.assign(o, l(o));
                  return o;
                })(l),
              },
              d = [
                /iPhone/gi.test(window.navigator.platform) ||
                (/Mac/gi.test(window.navigator.platform) &&
                  window.navigator.maxTouchPoints > 0)
                  ? {
                      before() {
                        a = window.pageYOffset;
                      },
                      after({ doc: n, d: o, meta: l }) {
                        function i(n) {
                          return l.containers
                            .flatMap((n) => n())
                            .some((o) => o.contains(n));
                        }
                        o.microTask(() => {
                          if (
                            "auto" !==
                            window.getComputedStyle(n.documentElement)
                              .scrollBehavior
                          ) {
                            let l = (0, es.k)();
                            (l.style(
                              n.documentElement,
                              "scroll-behavior",
                              "auto",
                            ),
                              o.add(() => o.microTask(() => l.dispose())));
                          }
                          (o.style(n.body, "marginTop", `-${a}px`),
                            window.scrollTo(0, 0));
                          let l = null;
                          (o.addEventListener(
                            n,
                            "click",
                            (o) => {
                              if (o.target instanceof HTMLElement)
                                try {
                                  let a = o.target.closest("a");
                                  if (!a) return;
                                  let { hash: u } = new URL(a.href),
                                    s = n.querySelector(u);
                                  s && !i(s) && (l = s);
                                } catch {}
                            },
                            !0,
                          ),
                            o.addEventListener(
                              n,
                              "touchmove",
                              (n) => {
                                n.target instanceof HTMLElement &&
                                  !i(n.target) &&
                                  n.preventDefault();
                              },
                              { passive: !1 },
                            ),
                            o.add(() => {
                              (window.scrollTo(0, window.pageYOffset + a),
                                l &&
                                  l.isConnected &&
                                  (l.scrollIntoView({ block: "nearest" }),
                                  (l = null)));
                            }));
                        });
                      },
                    }
                  : {},
                {
                  before({ doc: n }) {
                    var o;
                    let l = n.documentElement;
                    u =
                      (null != (o = n.defaultView) ? o : window).innerWidth -
                      l.clientWidth;
                  },
                  after({ doc: n, d: o }) {
                    let l = n.documentElement,
                      a = l.clientWidth - l.offsetWidth,
                      s = u - a;
                    o.style(l, "paddingRight", `${s}px`);
                  },
                },
                {
                  before({ doc: n, d: o }) {
                    o.style(n.documentElement, "overflow", "hidden");
                  },
                },
              ];
            (d.forEach(({ before: n }) => (null == n ? void 0 : n(s))),
              d.forEach(({ after: n }) => (null == n ? void 0 : n(s))));
          },
          SCROLL_ALLOW({ d: n }) {
            n.dispose();
          },
          TEARDOWN({ doc: n }) {
            this.delete(n);
          },
        }),
        (a = new Map()),
        (u = new Set()),
        {
          getSnapshot: () => a,
          subscribe: (n) => (u.add(n), () => u.delete(n)),
          dispatch(n, ...o) {
            let l = m[n].call(a, ...o);
            l && ((a = l), u.forEach((n) => n()));
          },
        });
      ec.subscribe(() => {
        let n = ec.getSnapshot(),
          o = new Map();
        for (let [l] of n) o.set(l, l.documentElement.style.overflow);
        for (let l of n.values()) {
          let n = "hidden" === o.get(l.doc),
            a = 0 !== l.count;
          (((a && !n) || (!a && n)) &&
            ec.dispatch(l.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", l),
            0 === l.count && ec.dispatch("TEARDOWN", l));
        }
      });
      let ed = new Map(),
        ef = new Map();
      function use_inert_h(n, o = !0) {
        (0, W.e)(() => {
          var l;
          if (!o) return;
          let a = "function" == typeof n ? n() : n.current;
          if (!a) return;
          let u = null != (l = ef.get(a)) ? l : 0;
          return (
            ef.set(a, u + 1),
            0 !== u ||
              (ed.set(a, {
                "aria-hidden": a.getAttribute("aria-hidden"),
                inert: a.inert,
              }),
              a.setAttribute("aria-hidden", "true"),
              (a.inert = !0)),
            function () {
              var n;
              if (!a) return;
              let o = null != (n = ef.get(a)) ? n : 1;
              if ((1 === o ? ef.delete(a) : ef.set(a, o - 1), 1 !== o)) return;
              let l = ed.get(a);
              l &&
                (null === l["aria-hidden"]
                  ? a.removeAttribute("aria-hidden")
                  : a.setAttribute("aria-hidden", l["aria-hidden"]),
                (a.inert = l.inert),
                ed.delete(a));
            }
          );
        }, [n, o]);
      }
      var ep =
          (((v = ep || {})[(v.Open = 0)] = "Open"),
          (v[(v.Closed = 1)] = "Closed"),
          v),
        em = (((g = em || {})[(g.SetTitleId = 0)] = "SetTitleId"), g);
      let ev = {
          0: (n, o) => (n.titleId === o.id ? n : { ...n, titleId: o.id }),
        },
        eg = (0, h.createContext)(null);
      function dialog_b(n) {
        let o = (0, h.useContext)(eg);
        if (null === o) {
          let o = Error(`<${n} /> is missing a parent <Dialog /> component.`);
          throw (
            Error.captureStackTrace && Error.captureStackTrace(o, dialog_b),
            o
          );
        }
        return o;
      }
      function Be(n, o) {
        return (0, b.E)(o.type, ev, n, o);
      }
      eg.displayName = "DialogContext";
      let eh = T.AN.RenderStrategy | T.AN.Static,
        eE = Object.assign(
          (0, T.yV)(function (n, o) {
            var l;
            let a, u, s, d, f;
            let p = (0, M.M)(),
              {
                id: m = `headlessui-dialog-${p}`,
                open: v,
                onClose: g,
                initialFocus: w,
                __demoMode: L = !1,
                ...D
              } = n,
              [A, F] = (0, h.useState)(0),
              x = (0, ee.oJ)();
            void 0 === v && null !== x && (v = (x & ee.ZM.Open) === ee.ZM.Open);
            let N = (0, h.useRef)(null),
              Y = (0, y.T)(N, o),
              z = (0, H.i)(N),
              V = n.hasOwnProperty("open") || null !== x,
              I = n.hasOwnProperty("onClose");
            if (!V && !I)
              throw Error(
                "You have to provide an `open` and an `onClose` prop to the `Dialog` component.",
              );
            if (!V)
              throw Error(
                "You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.",
              );
            if (!I)
              throw Error(
                "You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.",
              );
            if ("boolean" != typeof v)
              throw Error(
                `You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${v}`,
              );
            if ("function" != typeof g)
              throw Error(
                `You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${g}`,
              );
            let j = v ? 0 : 1,
              [$, q] = (0, h.useReducer)(Be, {
                titleId: null,
                descriptionId: null,
                panelRef: (0, h.createRef)(),
              }),
              G = (0, O.z)(() => g(!1)),
              U = (0, O.z)((n) => q({ type: 0, id: n })),
              Z = !!(0, k.H)() && !L && 0 === j,
              X = A > 1,
              et = null !== (0, h.useContext)(eg),
              [eo, el] =
                ((a = (0, h.useContext)(K)),
                (u = (0, h.useRef)([])),
                (s = (0, O.z)(
                  (n) => (u.current.push(n), a && a.register(n), () => d(n)),
                )),
                (d = (0, O.z)((n) => {
                  let o = u.current.indexOf(n);
                  (-1 !== o && u.current.splice(o, 1), a && a.unregister(n));
                })),
                (f = (0, h.useMemo)(
                  () => ({ register: s, unregister: d, portals: u }),
                  [s, d, u],
                )),
                [
                  u,
                  (0, h.useMemo)(
                    () =>
                      function ({ children: n }) {
                        return h.createElement(K.Provider, { value: f }, n);
                      },
                    [f],
                  ),
                ]),
              {
                resolveContainers: ea,
                mainTreeNodeRef: ei,
                MainTreeNode: es,
              } = (function ({
                defaultContainers: n = [],
                portals: o,
                mainTreeNodeRef: l,
              } = {}) {
                var a;
                let u = (0, h.useRef)(
                    null != (a = null == l ? void 0 : l.current) ? a : null,
                  ),
                  s = (0, H.i)(u),
                  d = (0, O.z)(() => {
                    var l;
                    let a = [];
                    for (let o of n)
                      null !== o &&
                        (o instanceof HTMLElement
                          ? a.push(o)
                          : "current" in o &&
                            o.current instanceof HTMLElement &&
                            a.push(o.current));
                    if (null != o && o.current)
                      for (let n of o.current) a.push(n);
                    for (let n of null !=
                    (l =
                      null == s
                        ? void 0
                        : s.querySelectorAll("html > *, body > *"))
                      ? l
                      : [])
                      n !== document.body &&
                        n !== document.head &&
                        n instanceof HTMLElement &&
                        "headlessui-portal-root" !== n.id &&
                        (n.contains(u.current) ||
                          a.some((o) => n.contains(o)) ||
                          a.push(n));
                    return a;
                  });
                return {
                  resolveContainers: d,
                  contains: (0, O.z)((n) => d().some((o) => o.contains(n))),
                  mainTreeNodeRef: u,
                  MainTreeNode: (0, h.useMemo)(
                    () =>
                      function () {
                        return null != l
                          ? null
                          : h.createElement(R, { features: _.Hidden, ref: u });
                      },
                    [u, l],
                  ),
                };
              })({
                portals: eo,
                defaultContainers: [
                  null != (l = $.panelRef.current) ? l : N.current,
                ],
              }),
              ed = X ? "parent" : "leaf",
              ef = null !== x && (x & ee.ZM.Closing) === ee.ZM.Closing,
              ep = !et && !ef && Z;
            use_inert_h(
              (0, h.useCallback)(() => {
                var n, o;
                return null !=
                  (o = Array.from(
                    null !=
                      (n = null == z ? void 0 : z.querySelectorAll("body > *"))
                      ? n
                      : [],
                  ).find(
                    (n) =>
                      "headlessui-portal-root" !== n.id &&
                      n.contains(ei.current) &&
                      n instanceof HTMLElement,
                  ))
                  ? o
                  : null;
              }, [ei]),
              ep,
            );
            let em = !!X || Z;
            use_inert_h(
              (0, h.useCallback)(() => {
                var n, o;
                return null !=
                  (o = Array.from(
                    null !=
                      (n =
                        null == z
                          ? void 0
                          : z.querySelectorAll("[data-headlessui-portal]"))
                      ? n
                      : [],
                  ).find(
                    (n) => n.contains(ei.current) && n instanceof HTMLElement,
                  ))
                  ? o
                  : null;
              }, [ei]),
              em,
            );
            let ev = !(!Z || X);
            (0, er.O)(ea, G, ev);
            let eE = !(X || 0 !== j);
            (E(null == z ? void 0 : z.defaultView, "keydown", (n) => {
              eE &&
                (n.defaultPrevented ||
                  (n.key === C.R.Escape &&
                    (n.preventDefault(), n.stopPropagation(), G())));
            }),
              (function (n, o, l = () => [document.body]) {
                var a;
                let u, s;
                ((a = (n) => {
                  var o;
                  return {
                    containers: [...(null != (o = n.containers) ? o : []), l],
                  };
                }),
                  (u = eu(ec.subscribe, ec.getSnapshot, ec.getSnapshot)),
                  (s = n ? u.get(n) : void 0) && s.count,
                  (0, W.e)(() => {
                    if (!(!n || !o))
                      return (
                        ec.dispatch("PUSH", n, a),
                        () => ec.dispatch("POP", n, a)
                      );
                  }, [o, n]));
              })(z, !(ef || 0 !== j || et), ea),
              (0, h.useEffect)(() => {
                if (0 !== j || !N.current) return;
                let n = new ResizeObserver((n) => {
                  for (let o of n) {
                    let n = o.target.getBoundingClientRect();
                    0 === n.x &&
                      0 === n.y &&
                      0 === n.width &&
                      0 === n.height &&
                      G();
                  }
                });
                return (n.observe(N.current), () => n.disconnect());
              }, [j, N, G]));
            let [ew, eb] = (function () {
                let [n, o] = (0, h.useState)([]);
                return [
                  n.length > 0 ? n.join(" ") : void 0,
                  (0, h.useMemo)(
                    () =>
                      function (n) {
                        let l = (0, O.z)(
                            (n) => (
                              o((o) => [...o, n]),
                              () =>
                                o((o) => {
                                  let l = o.slice(),
                                    a = l.indexOf(n);
                                  return (-1 !== a && l.splice(a, 1), l);
                                })
                            ),
                          ),
                          a = (0, h.useMemo)(
                            () => ({
                              register: l,
                              slot: n.slot,
                              name: n.name,
                              props: n.props,
                            }),
                            [l, n.slot, n.name, n.props],
                          );
                        return h.createElement(
                          Q.Provider,
                          { value: a },
                          n.children,
                        );
                      },
                    [o],
                  ),
                ];
              })(),
              eT = (0, h.useMemo)(
                () => [{ dialogState: j, close: G, setTitleId: U }, $],
                [j, $, G, U],
              ),
              ey = (0, h.useMemo)(() => ({ open: 0 === j }), [j]),
              eC = {
                ref: Y,
                id: m,
                role: "dialog",
                "aria-modal": 0 === j || void 0,
                "aria-labelledby": $.titleId,
                "aria-describedby": ew,
              };
            return h.createElement(
              stack_context_M,
              {
                type: "Dialog",
                enabled: 0 === j,
                element: N,
                onUpdate: (0, O.z)((n, o) => {
                  "Dialog" === o &&
                    (0, b.E)(n, {
                      [en.Add]: () => F((n) => n + 1),
                      [en.Remove]: () => F((n) => n - 1),
                    });
                }),
              },
              h.createElement(
                portal_force_root_P,
                { force: !0 },
                h.createElement(
                  J,
                  null,
                  h.createElement(
                    eg.Provider,
                    { value: eT },
                    h.createElement(
                      J.Group,
                      { target: N },
                      h.createElement(
                        portal_force_root_P,
                        { force: !1 },
                        h.createElement(
                          eb,
                          { slot: ey, name: "Dialog.Description" },
                          h.createElement(
                            B,
                            {
                              initialFocus: w,
                              containers: ea,
                              features: Z
                                ? (0, b.E)(ed, {
                                    parent: B.features.RestoreFocus,
                                    leaf:
                                      B.features.All & ~B.features.FocusLock,
                                  })
                                : B.features.None,
                            },
                            h.createElement(
                              el,
                              null,
                              (0, T.sY)({
                                ourProps: eC,
                                theirProps: D,
                                slot: ey,
                                defaultTag: "div",
                                features: eh,
                                visible: 0 === j,
                                name: "Dialog",
                              }),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
              h.createElement(es, null),
            );
          }),
          {
            Backdrop: (0, T.yV)(function (n, o) {
              let l = (0, M.M)(),
                { id: a = `headlessui-dialog-backdrop-${l}`, ...u } = n,
                [{ dialogState: s }, d] = dialog_b("Dialog.Backdrop"),
                f = (0, y.T)(o);
              (0, h.useEffect)(() => {
                if (null === d.panelRef.current)
                  throw Error(
                    "A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.",
                  );
              }, [d.panelRef]);
              let p = (0, h.useMemo)(() => ({ open: 0 === s }), [s]);
              return h.createElement(
                portal_force_root_P,
                { force: !0 },
                h.createElement(
                  J,
                  null,
                  (0, T.sY)({
                    ourProps: { ref: f, id: a, "aria-hidden": !0 },
                    theirProps: u,
                    slot: p,
                    defaultTag: "div",
                    name: "Dialog.Backdrop",
                  }),
                ),
              );
            }),
            Panel: (0, T.yV)(function (n, o) {
              let l = (0, M.M)(),
                { id: a = `headlessui-dialog-panel-${l}`, ...u } = n,
                [{ dialogState: s }, d] = dialog_b("Dialog.Panel"),
                f = (0, y.T)(o, d.panelRef),
                p = (0, h.useMemo)(() => ({ open: 0 === s }), [s]),
                m = (0, O.z)((n) => {
                  n.stopPropagation();
                });
              return (0, T.sY)({
                ourProps: { ref: f, id: a, onClick: m },
                theirProps: u,
                slot: p,
                defaultTag: "div",
                name: "Dialog.Panel",
              });
            }),
            Overlay: (0, T.yV)(function (n, o) {
              let l = (0, M.M)(),
                { id: a = `headlessui-dialog-overlay-${l}`, ...u } = n,
                [{ dialogState: s, close: d }] = dialog_b("Dialog.Overlay"),
                f = (0, y.T)(o),
                p = (0, O.z)((n) => {
                  if (n.target === n.currentTarget) {
                    if ((0, L.P)(n.currentTarget)) return n.preventDefault();
                    (n.preventDefault(), n.stopPropagation(), d());
                  }
                }),
                m = (0, h.useMemo)(() => ({ open: 0 === s }), [s]);
              return (0, T.sY)({
                ourProps: { ref: f, id: a, "aria-hidden": !0, onClick: p },
                theirProps: u,
                slot: m,
                defaultTag: "div",
                name: "Dialog.Overlay",
              });
            }),
            Title: (0, T.yV)(function (n, o) {
              let l = (0, M.M)(),
                { id: a = `headlessui-dialog-title-${l}`, ...u } = n,
                [{ dialogState: s, setTitleId: d }] = dialog_b("Dialog.Title"),
                f = (0, y.T)(o);
              (0, h.useEffect)(() => (d(a), () => d(null)), [a, d]);
              let p = (0, h.useMemo)(() => ({ open: 0 === s }), [s]);
              return (0, T.sY)({
                ourProps: { ref: f, id: a },
                theirProps: u,
                slot: p,
                defaultTag: "h2",
                name: "Dialog.Title",
              });
            }),
            Description: X,
          },
        );
    },
    3903: function (n, o, l) {
      var a = l(52983);
      let u = a.forwardRef(function ({ title: n, titleId: o, ...l }, u) {
        return a.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 1.5,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: u,
              "aria-labelledby": o,
            },
            l,
          ),
          n ? a.createElement("title", { id: o }, n) : null,
          a.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z",
          }),
        );
      });
      o.Z = u;
    },
  },
]);
