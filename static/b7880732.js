"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1446],
  {
    85414: (e, t, n) => {
      let r, o, l, i;
      var a = n(23727),
        s = Object.create,
        u = Object.defineProperty,
        c = Object.getOwnPropertyDescriptor,
        d = Object.getOwnPropertyNames,
        f = Object.getPrototypeOf,
        p = Object.prototype.hasOwnProperty,
        v = (e, t, n, r) => {
          if ((t && "object" == typeof t) || "function" == typeof t)
            for (let o of d(t))
              p.call(e, o) ||
                o === n ||
                u(e, o, {
                  get: () => t[o],
                  enumerable: !(r = c(t, o)) || r.enumerable,
                });
          return e;
        },
        m = (e, t, n) => (
          (n = null != e ? s(f(e)) : {}),
          v(
            !t && e && e.__esModule
              ? n
              : u(n, "default", { value: e, enumerable: !0 }),
            e,
          )
        ),
        h = (e, t, n) => {
          let r;
          return (
            (r = "symbol" != typeof t ? t + "" : t) in e
              ? u(e, r, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (e[r] = n),
            n
          );
        },
        b = (e, t, n) => {
          if (!t.has(e)) throw TypeError("Cannot " + n);
        },
        g = (e, t, n) => (
          b(e, t, "read from private field"),
          n ? n.call(e) : t.get(e)
        ),
        y = (e, t, n) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, n);
        },
        x = (e, t, n, r) => (
          b(e, t, "write to private field"),
          r ? r.call(e, n) : t.set(e, n),
          n
        ),
        E = {},
        w = {
          Button: () => eJ,
          Checkbox: () => tA,
          CloseButton: () => tH,
          Combobox: () => ly,
          ComboboxButton: () => lv,
          ComboboxInput: () => lm,
          ComboboxLabel: () => lh,
          ComboboxOption: () => lg,
          ComboboxOptions: () => lb,
          DataInteractive: () => lE,
          Description: () => tC,
          Dialog: () => ir,
          DialogBackdrop: () => l7,
          DialogDescription: () => it,
          DialogPanel: () => l8,
          DialogTitle: () => ie,
          Disclosure: () => ib,
          DisclosureButton: () => im,
          DisclosurePanel: () => ih,
          Field: () => iy,
          Fieldset: () => iS,
          FocusTrap: () => l_,
          FocusTrapFeatures: () => lL,
          Input: () => iP,
          Label: () => tD,
          Legend: () => iT,
          Listbox: () => iX,
          ListboxButton: () => iK,
          ListboxLabel: () => iU,
          ListboxOption: () => iY,
          ListboxOptions: () => iq,
          ListboxSelectedOption: () => iQ,
          Menu: () => ai,
          MenuButton: () => ae,
          MenuHeading: () => ao,
          MenuItem: () => an,
          MenuItems: () => at,
          MenuSection: () => ar,
          MenuSeparator: () => al,
          Popover: () => aS,
          PopoverBackdrop: () => ax,
          PopoverButton: () => ag,
          PopoverGroup: () => aw,
          PopoverOverlay: () => ay,
          PopoverPanel: () => aE,
          Portal: () => o2,
          Radio: () => aD,
          RadioGroup: () => a_,
          RadioGroupDescription: () => aL,
          RadioGroupLabel: () => aA,
          RadioGroupOption: () => aM,
          Select: () => aN,
          Switch: () => aG,
          SwitchDescription: () => aW,
          SwitchGroup: () => aV,
          SwitchLabel: () => az,
          Tab: () => se,
          TabGroup: () => a9,
          TabList: () => a5,
          TabPanel: () => a7,
          TabPanels: () => a8,
          Textarea: () => st,
          Transition: () => lq,
          TransitionChild: () => lU,
          useClose: () => tB,
        };
      for (var S in w) u(E, S, { get: w[S], enumerable: !0 });
      e.exports = v(u({}, "__esModule", { value: !0 }), E);
      var P = m(n(36439), 1),
        I = "u" > typeof document ? P.default.useLayoutEffect : () => {},
        T = n(36439),
        C = (e) => {
          var t;
          return null != (t = null == e ? void 0 : e.ownerDocument)
            ? t
            : document;
        },
        R = (e) =>
          e && "window" in e && e.window === e ? e : C(e).defaultView || window;
      function O(e, t) {
        return !!t && !!e && e.contains(t);
      }
      function k(e) {
        var t;
        return (
          "u" > typeof window &&
          null != window.navigator &&
          ((null == (t = window.navigator.userAgentData)
            ? void 0
            : t.brands.some((t) => e.test(t.brand))) ||
            e.test(window.navigator.userAgent))
        );
      }
      function F(e) {
        var t;
        return (
          "u" > typeof window &&
          null != window.navigator &&
          e.test(
            (null == (t = window.navigator.userAgentData)
              ? void 0
              : t.platform) || window.navigator.platform,
          )
        );
      }
      function M(e) {
        let t = null;
        return () => (null == t && (t = e()), t);
      }
      var D = M(function () {
          return F(/^Mac/i);
        }),
        A = M(function () {
          return F(/^iPhone/i);
        }),
        L = M(function () {
          return F(/^iPad/i) || (D() && navigator.maxTouchPoints > 1);
        }),
        _ = M(function () {
          return A() || L();
        }),
        N =
          (M(function () {
            return D() || _();
          }),
          M(function () {
            return k(/AppleWebKit/i) && !N();
          }),
          M(function () {
            return k(/Chrome/i);
          })),
        B = M(function () {
          return k(/Android/i);
        });
      M(function () {
        return k(/Firefox/i);
      });
      var j = n(36439);
      function H() {
        let e = (0, j.useRef)(new Map()),
          t = (0, j.useCallback)((t, n, r, o) => {
            let l =
              null != o && o.once
                ? (...t) => {
                    (e.current.delete(r), r(...t));
                  }
                : r;
            (e.current.set(r, { type: n, eventTarget: t, fn: l, options: o }),
              t.addEventListener(n, l, o));
          }, []),
          n = (0, j.useCallback)((t, n, r, o) => {
            var l;
            let i = (null == (l = e.current.get(r)) ? void 0 : l.fn) || r;
            (t.removeEventListener(n, i, o), e.current.delete(r));
          }, []),
          r = (0, j.useCallback)(() => {
            e.current.forEach((e, t) => {
              n(e.eventTarget, e.type, t, e.options);
            });
          }, [n]);
        return (
          (0, j.useEffect)(() => r, [r]),
          {
            addGlobalListener: t,
            removeGlobalListener: n,
            removeAllGlobalListeners: r,
          }
        );
      }
      var $ = n(36439);
      function V(e) {
        return (
          (e.nativeEvent = e),
          (e.isDefaultPrevented = () => e.defaultPrevented),
          (e.isPropagationStopped = () => e.cancelBubble),
          (e.persist = () => {}),
          e
        );
      }
      function z(e) {
        var t;
        let n,
          r = (0, $.useRef)({ isFocused: !1, observer: null });
        I(() => {
          let e = r.current;
          return () => {
            e.observer && (e.observer.disconnect(), (e.observer = null));
          };
        }, []);
        let o =
          ((t = (t) => {
            null == e || e(t);
          }),
          (n = (0, T.useRef)(null)),
          I(() => {
            n.current = t;
          }, [t]),
          (0, T.useCallback)((...e) => {
            let t = n.current;
            return null == t ? void 0 : t(...e);
          }, []));
        return (0, $.useCallback)(
          (e) => {
            if (
              e.target instanceof HTMLButtonElement ||
              e.target instanceof HTMLInputElement ||
              e.target instanceof HTMLTextAreaElement ||
              e.target instanceof HTMLSelectElement
            ) {
              r.current.isFocused = !0;
              let t = e.target;
              (t.addEventListener(
                "focusout",
                (e) => {
                  ((r.current.isFocused = !1),
                    t.disabled && o(V(e)),
                    r.current.observer &&
                      (r.current.observer.disconnect(),
                      (r.current.observer = null)));
                },
                { once: !0 },
              ),
                (r.current.observer = new MutationObserver(() => {
                  if (r.current.isFocused && t.disabled) {
                    var e;
                    null == (e = r.current.observer) || e.disconnect();
                    let n =
                      t === document.activeElement
                        ? null
                        : document.activeElement;
                    (t.dispatchEvent(
                      new FocusEvent("blur", { relatedTarget: n }),
                    ),
                      t.dispatchEvent(
                        new FocusEvent("focusout", {
                          bubbles: !0,
                          relatedTarget: n,
                        }),
                      ));
                  }
                })),
                r.current.observer.observe(t, {
                  attributes: !0,
                  attributeFilter: ["disabled"],
                }));
            }
          },
          [o],
        );
      }
      var W = n(36439),
        G = null,
        K = new Set(),
        U = new Map(),
        q = !1,
        Y = !1,
        Q = { Tab: !0, Escape: !0 };
      function X(e, t) {
        for (let n of K) n(e, t);
      }
      function J(e) {
        ((q = !0),
          e.metaKey ||
            (!D() && e.altKey) ||
            e.ctrlKey ||
            "Control" === e.key ||
            "Shift" === e.key ||
            "Meta" === e.key ||
            ((G = "keyboard"), X("keyboard", e)));
      }
      function Z(e) {
        ((G = "pointer"),
          ("mousedown" === e.type || "pointerdown" === e.type) &&
            ((q = !0), X("pointer", e)));
      }
      function ee(e) {
        ((0 === e.mozInputSource && e.isTrusted) ||
          (B() && e.pointerType
            ? "click" === e.type && 1 === e.buttons
            : 0 === e.detail && !e.pointerType)) &&
          ((q = !0), (G = "virtual"));
      }
      function et(e) {
        e.target !== window &&
          e.target !== document &&
          e.isTrusted &&
          (q || Y || ((G = "virtual"), X("virtual", e)), (q = !1), (Y = !1));
      }
      function en() {
        ((q = !1), (Y = !0));
      }
      function er(e) {
        if ("u" < typeof window || U.get(R(e))) return;
        let t = R(e),
          n = C(e),
          r = t.HTMLElement.prototype.focus;
        ((t.HTMLElement.prototype.focus = function () {
          ((q = !0), r.apply(this, arguments));
        }),
          n.addEventListener("keydown", J, !0),
          n.addEventListener("keyup", J, !0),
          n.addEventListener("click", ee, !0),
          t.addEventListener("focus", et, !0),
          t.addEventListener("blur", en, !1),
          "u" > typeof PointerEvent &&
            (n.addEventListener("pointerdown", Z, !0),
            n.addEventListener("pointermove", Z, !0),
            n.addEventListener("pointerup", Z, !0)),
          t.addEventListener(
            "beforeunload",
            () => {
              eo(e);
            },
            { once: !0 },
          ),
          U.set(t, { focus: r }));
      }
      var eo = (e, t) => {
        let n = R(e),
          r = C(e);
        (t && r.removeEventListener("DOMContentLoaded", t),
          U.has(n) &&
            ((n.HTMLElement.prototype.focus = U.get(n).focus),
            r.removeEventListener("keydown", J, !0),
            r.removeEventListener("keyup", J, !0),
            r.removeEventListener("click", ee, !0),
            n.removeEventListener("focus", et, !0),
            n.removeEventListener("blur", en, !1),
            "u" > typeof PointerEvent &&
              (r.removeEventListener("pointerdown", Z, !0),
              r.removeEventListener("pointermove", Z, !0),
              r.removeEventListener("pointerup", Z, !0)),
            U.delete(n)));
      };
      function el() {
        return "pointer" !== G;
      }
      "u" > typeof document &&
        ("loading" !== (r = C(void 0)).readyState
          ? er(void 0)
          : r.addEventListener("DOMContentLoaded", () => {
              er(void 0);
            }));
      var ei = new Set([
          "checkbox",
          "radio",
          "range",
          "color",
          "file",
          "image",
          "button",
          "submit",
          "reset",
        ]),
        ea = n(36439),
        es = n(36439),
        eu = n(36439),
        ec = !1,
        ed = 0;
      function ef(e) {
        "touch" === e.pointerType &&
          ((ec = !0),
          setTimeout(() => {
            ec = !1;
          }, 50));
      }
      function ep() {
        if ("u" > typeof document)
          return (
            "u" > typeof PointerEvent &&
              document.addEventListener("pointerup", ef),
            ed++,
            () => {
              --ed > 0 ||
                "u" < typeof PointerEvent ||
                document.removeEventListener("pointerup", ef);
            }
          );
      }
      function ev(e) {
        let {
            onHoverStart: t,
            onHoverChange: n,
            onHoverEnd: r,
            isDisabled: o,
          } = e,
          [l, i] = (0, eu.useState)(!1),
          a = (0, eu.useRef)({
            isHovered: !1,
            ignoreEmulatedMouseEvents: !1,
            pointerType: "",
            target: null,
          }).current;
        (0, eu.useEffect)(ep, []);
        let { addGlobalListener: s, removeAllGlobalListeners: u } = H(),
          { hoverProps: c, triggerHoverEnd: d } = (0, eu.useMemo)(() => {
            let e = (e, t) => {
                let o = a.target;
                ((a.pointerType = ""),
                  (a.target = null),
                  "touch" !== t &&
                    a.isHovered &&
                    o &&
                    ((a.isHovered = !1),
                    u(),
                    r && r({ type: "hoverend", target: o, pointerType: t }),
                    n && n(!1),
                    i(!1)));
              },
              l = {};
            return (
              "u" > typeof PointerEvent &&
                ((l.onPointerEnter = (r) => {
                  (ec && "mouse" === r.pointerType) ||
                    ((r, l) => {
                      if (
                        ((a.pointerType = l),
                        o ||
                          "touch" === l ||
                          a.isHovered ||
                          !r.currentTarget.contains(r.target))
                      )
                        return;
                      a.isHovered = !0;
                      let u = r.currentTarget;
                      ((a.target = u),
                        s(
                          C(r.target),
                          "pointerover",
                          (t) => {
                            a.isHovered &&
                              a.target &&
                              !O(a.target, t.target) &&
                              e(t, t.pointerType);
                          },
                          { capture: !0 },
                        ),
                        t &&
                          t({ type: "hoverstart", target: u, pointerType: l }),
                        n && n(!0),
                        i(!0));
                    })(r, r.pointerType);
                }),
                (l.onPointerLeave = (t) => {
                  !o &&
                    t.currentTarget.contains(t.target) &&
                    e(t, t.pointerType);
                })),
              { hoverProps: l, triggerHoverEnd: e }
            );
          }, [t, n, r, o, a, s, u]);
        return (
          (0, eu.useEffect)(() => {
            o && d({ currentTarget: a.target }, a.pointerType);
          }, [o]),
          { hoverProps: c, isHovered: l }
        );
      }
      var em = n(36439);
      function eh(e = {}) {
        var t;
        let { autoFocus: n = !1, isTextInput: r, within: o } = e,
          l = (0, em.useRef)({ isFocused: !1, isFocusVisible: n || el() }),
          [i, a] = (0, em.useState)(!1),
          [s, u] = (0, em.useState)(
            () => l.current.isFocused && l.current.isFocusVisible,
          ),
          c = (0, em.useCallback)(
            () => u(l.current.isFocused && l.current.isFocusVisible),
            [],
          ),
          d = (0, em.useCallback)(
            (e) => {
              ((l.current.isFocused = e), a(e), c());
            },
            [c],
          );
        ((t = { isTextInput: r }),
          er(),
          (0, W.useEffect)(() => {
            let e = (e, n) => {
              var r;
              let o, i, a, s, u;
              ((r = !!(null != t && t.isTextInput)),
                (o = C(null == n ? void 0 : n.target)),
                (i =
                  "u" > typeof window
                    ? R(null == n ? void 0 : n.target).HTMLInputElement
                    : HTMLInputElement),
                (a =
                  "u" > typeof window
                    ? R(null == n ? void 0 : n.target).HTMLTextAreaElement
                    : HTMLTextAreaElement),
                (s =
                  "u" > typeof window
                    ? R(null == n ? void 0 : n.target).HTMLElement
                    : HTMLElement),
                (u =
                  "u" > typeof window
                    ? R(null == n ? void 0 : n.target).KeyboardEvent
                    : KeyboardEvent),
                ((r =
                  r ||
                  (o.activeElement instanceof i &&
                    !ei.has(o.activeElement.type)) ||
                  o.activeElement instanceof a ||
                  (o.activeElement instanceof s &&
                    o.activeElement.isContentEditable)) &&
                  "keyboard" === e &&
                  n instanceof u &&
                  !Q[n.key]) ||
                  ((e) => {
                    ((l.current.isFocusVisible = e), c());
                  })(el()));
            };
            return (
              K.add(e),
              () => {
                K.delete(e);
              }
            );
          }, []));
        let { focusProps: f } = (function (e) {
            let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: o } = e,
              l = (0, ea.useCallback)(
                (e) => {
                  if (e.target === e.currentTarget)
                    return (r && r(e), o && o(!1), !0);
                },
                [r, o],
              ),
              i = z(l),
              a = (0, ea.useCallback)(
                (e) => {
                  var t;
                  let r = C(e.target),
                    l = r
                      ? ((e = document) => e.activeElement)(r)
                      : ((e = document) => e.activeElement)();
                  e.target === e.currentTarget &&
                    l === ((t = e.nativeEvent), t.target) &&
                    (n && n(e), o && o(!0), i(e));
                },
                [o, n, i],
              );
            return {
              focusProps: {
                onFocus: !t && (n || o || r) ? a : void 0,
                onBlur: !t && (r || o) ? l : void 0,
              },
            };
          })({ isDisabled: o, onFocusChange: d }),
          { focusWithinProps: p } = (function (e) {
            let {
                isDisabled: t,
                onBlurWithin: n,
                onFocusWithin: r,
                onFocusWithinChange: o,
              } = e,
              l = (0, es.useRef)({ isFocusWithin: !1 }),
              { addGlobalListener: i, removeAllGlobalListeners: a } = H(),
              s = (0, es.useCallback)(
                (e) => {
                  e.currentTarget.contains(e.target) &&
                    l.current.isFocusWithin &&
                    !e.currentTarget.contains(e.relatedTarget) &&
                    ((l.current.isFocusWithin = !1),
                    a(),
                    n && n(e),
                    o && o(!1));
                },
                [n, o, l, a],
              ),
              u = z(s),
              c = (0, es.useCallback)(
                (e) => {
                  var t;
                  if (!e.currentTarget.contains(e.target)) return;
                  let n = C(e.target),
                    a = ((e = document) => e.activeElement)(n);
                  if (
                    !l.current.isFocusWithin &&
                    a === ((t = e.nativeEvent), t.target)
                  ) {
                    (r && r(e),
                      o && o(!0),
                      (l.current.isFocusWithin = !0),
                      u(e));
                    let t = e.currentTarget;
                    i(
                      n,
                      "focus",
                      (e) => {
                        if (l.current.isFocusWithin && !O(t, e.target)) {
                          let r = new n.defaultView.FocusEvent("blur", {
                            relatedTarget: e.target,
                          });
                          (Object.defineProperty(r, "target", { value: t }),
                            Object.defineProperty(r, "currentTarget", {
                              value: t,
                            }),
                            s(V(r)));
                        }
                      },
                      { capture: !0 },
                    );
                  }
                },
                [r, o, u, i, s],
              );
            return t
              ? { focusWithinProps: { onFocus: void 0, onBlur: void 0 } }
              : { focusWithinProps: { onFocus: c, onBlur: s } };
          })({ isDisabled: !o, onFocusWithinChange: d });
        return { isFocused: i, isFocusVisible: s, focusProps: o ? p : f };
      }
      var eb = n(36439),
        eg = new (class {
          constructor() {
            (h(this, "current", this.detect()),
              h(this, "handoffState", "pending"),
              h(this, "currentId", 0));
          }
          set(e) {
            this.current !== e &&
              ((this.handoffState = "pending"),
              (this.currentId = 0),
              (this.current = e));
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
            return "u" < typeof window || "u" < typeof document
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
      function ey(e) {
        var t;
        return eg.isServer
          ? null
          : null == e
            ? document
            : null != (t = null == e ? void 0 : e.ownerDocument)
              ? t
              : document;
      }
      function ex(e) {
        var t, n;
        return eg.isServer
          ? null
          : null == e
            ? document
            : null !=
                (n =
                  null == (t = null == e ? void 0 : e.getRootNode)
                    ? void 0
                    : t.call(e))
              ? n
              : document;
      }
      function eE(e) {
        var t, n;
        return null != (n = null == (t = ex(e)) ? void 0 : t.activeElement)
          ? n
          : null;
      }
      function ew(e) {
        return eE(e) === e;
      }
      var eS = n(36439);
      function eP(e) {
        "function" == typeof queueMicrotask
          ? queueMicrotask(e)
          : Promise.resolve()
              .then(e)
              .catch((e) =>
                setTimeout(() => {
                  throw e;
                }),
              );
      }
      function eI() {
        let e = [],
          t = {
            addEventListener: (e, n, r, o) => (
              e.addEventListener(n, r, o),
              t.add(() => e.removeEventListener(n, r, o))
            ),
            requestAnimationFrame(...e) {
              let n = requestAnimationFrame(...e);
              return t.add(() => cancelAnimationFrame(n));
            },
            nextFrame: (...e) =>
              t.requestAnimationFrame(() => t.requestAnimationFrame(...e)),
            setTimeout(...e) {
              let n = setTimeout(...e);
              return t.add(() => clearTimeout(n));
            },
            microTask(...e) {
              let n = { current: !0 };
              return (
                eP(() => {
                  n.current && e[0]();
                }),
                t.add(() => {
                  n.current = !1;
                })
              );
            },
            style(e, t, n) {
              let r = e.style.getPropertyValue(t);
              return (
                Object.assign(e.style, { [t]: n }),
                this.add(() => {
                  Object.assign(e.style, { [t]: r });
                })
              );
            },
            group(e) {
              let t = eI();
              return (e(t), this.add(() => t.dispose()));
            },
            add: (t) => (
              e.includes(t) || e.push(t),
              () => {
                let n = e.indexOf(t);
                if (n >= 0) for (let t of e.splice(n, 1)) t();
              }
            ),
            dispose() {
              for (let t of e.splice(0)) t();
            },
          };
        return t;
      }
      function eT() {
        let [e] = (0, eS.useState)(eI);
        return ((0, eS.useEffect)(() => () => e.dispose(), [e]), e);
      }
      var eC = m(n(36439), 1),
        eR = n(36439),
        eO = n(36439),
        ek = (e, t) => {
          eg.isServer ? (0, eO.useEffect)(e, t) : (0, eO.useLayoutEffect)(e, t);
        };
      function eF(e) {
        let t = (0, eR.useRef)(e);
        return (
          ek(() => {
            t.current = e;
          }, [e]),
          t
        );
      }
      var eM = function (e) {
        let t = eF(e);
        return eC.default.useCallback((...e) => t.current(...e), [t]);
      };
      function eD({ disabled: e = !1 } = {}) {
        let t = (0, eb.useRef)(null),
          [n, r] = (0, eb.useState)(!1),
          o = eT(),
          l = eM(() => {
            ((t.current = null), r(!1), o.dispose());
          }),
          i = eM((e) => {
            if ((o.dispose(), null === t.current)) {
              ((t.current = e.currentTarget), r(!0));
              {
                let n = ey(e.currentTarget);
                (o.addEventListener(n, "pointerup", l, !1),
                  o.addEventListener(
                    n,
                    "pointermove",
                    (e) => {
                      if (t.current) {
                        var n, o;
                        let l, i;
                        r(
                          ((l = e.width / 2),
                          (i = e.height / 2),
                          (n = {
                            top: e.clientY - i,
                            right: e.clientX + l,
                            bottom: e.clientY + i,
                            left: e.clientX - l,
                          }),
                          (o = t.current.getBoundingClientRect()),
                          !(
                            !n ||
                            !o ||
                            n.right < o.left ||
                            n.left > o.right ||
                            n.bottom < o.top ||
                            n.top > o.bottom
                          )),
                        );
                      }
                    },
                    !1,
                  ),
                  o.addEventListener(n, "pointercancel", l, !1));
              }
            }
          });
        return {
          pressed: n,
          pressProps: e ? {} : { onPointerDown: i, onPointerUp: l, onClick: l },
        };
      }
      var eA = n(36439);
      function eL(e) {
        return (0, eA.useMemo)(() => e, Object.values(e));
      }
      var e_ = m(n(36439), 1),
        eN = (0, e_.createContext)(void 0);
      function eB() {
        return (0, e_.useContext)(eN);
      }
      function ej({ value: e, children: t }) {
        return e_.default.createElement(eN.Provider, { value: e }, t);
      }
      var eH = m(n(36439), 1);
      function e$(...e) {
        return Array.from(
          new Set(e.flatMap((e) => ("string" == typeof e ? e.split(" ") : []))),
        )
          .filter(Boolean)
          .join(" ");
      }
      function eV(e, t, ...n) {
        if (e in t) {
          let r = t[e];
          return "function" == typeof r ? r(...n) : r;
        }
        let r = Error(
          `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
            t,
          )
            .map((e) => `"${e}"`)
            .join(", ")}.`,
        );
        throw (Error.captureStackTrace && Error.captureStackTrace(r, eV), r);
      }
      function ez() {
        let e,
          t,
          n =
            ((e = (0, eH.useRef)([])),
            (t = (0, eH.useCallback)((t) => {
              for (let n of e.current)
                null != n && ("function" == typeof n ? n(t) : (n.current = t));
            }, [])),
            (...n) => {
              if (!n.every((e) => null == e)) return ((e.current = n), t);
            });
        return (0, eH.useCallback)(
          (e) =>
            (function ({
              ourProps: e,
              theirProps: t,
              slot: n,
              defaultTag: r,
              features: o,
              visible: l = !0,
              name: i,
              mergeRefs: a,
            }) {
              a = null != a ? a : eG;
              let s = eK(t, e);
              if (l) return eW(s, n, r, i, a);
              let u = null != o ? o : 0;
              if (2 & u) {
                let { static: e = !1, ...t } = s;
                if (e) return eW(t, n, r, i, a);
              }
              if (1 & u) {
                let { unmount: e = !0, ...t } = s;
                return eV(+!e, {
                  0: () => null,
                  1: () =>
                    eW(
                      { ...t, hidden: !0, style: { display: "none" } },
                      n,
                      r,
                      i,
                      a,
                    ),
                });
              }
              return eW(s, n, r, i, a);
            })({ mergeRefs: n, ...e }),
          [n],
        );
      }
      function eW(e, t = {}, n, r, o) {
        let {
            as: l = n,
            children: i,
            refName: a = "ref",
            ...s
          } = eQ(e, ["unmount", "static"]),
          u = void 0 !== e.ref ? { [a]: e.ref } : {},
          c = "function" == typeof i ? i(t) : i;
        ((c = (function e(t) {
          if (null != t && t.$$typeof === Symbol.for("react.lazy")) {
            let n = t._payload;
            if (null != n && "fulfilled" === n.status) return e(n.value);
          }
          return t;
        })(c)),
          "className" in s &&
            s.className &&
            "function" == typeof s.className &&
            (s.className = s.className(t)),
          s["aria-labelledby"] &&
            s["aria-labelledby"] === s.id &&
            (s["aria-labelledby"] = void 0));
        let d = {};
        if (t) {
          let e = !1,
            n = [];
          for (let [r, o] of Object.entries(t))
            ("boolean" == typeof o && (e = !0),
              !0 === o &&
                n.push(r.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`)));
          if (e)
            for (let e of ((d["data-headlessui-state"] = n.join(" ")), n))
              d[`data-${e}`] = "";
        }
        if (
          eX(l) &&
          (Object.keys(eY(s)).length > 0 || Object.keys(eY(d)).length > 0)
        )
          if (
            !(0, eH.isValidElement)(c) ||
            (Array.isArray(c) && c.length > 1) ||
            eX(c.type)
          ) {
            if (Object.keys(eY(s)).length > 0)
              throw Error(
                [
                  'Passing props on "Fragment"!',
                  "",
                  `The current component <${r} /> is rendering a "Fragment".`,
                  "However we need to passthrough the following props:",
                  Object.keys(eY(s))
                    .concat(Object.keys(eY(d)))
                    .map((e) => `  - ${e}`).join(`
`),
                  "",
                  "You can apply a few solutions:",
                  [
                    'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
                    "Render a single element as the child so that we can forward the props onto that element.",
                  ].map((e) => `  - ${e}`).join(`
`),
                ].join(`
`),
              );
          } else {
            var f;
            let e = c.props,
              t = null == e ? void 0 : e.className,
              n =
                "function" == typeof t
                  ? (...e) => e$(t(...e), s.className)
                  : e$(t, s.className),
              r = eK(c.props, eY(eQ(s, ["ref"])));
            for (let e in d) e in r && delete d[e];
            return (0, eH.cloneElement)(
              c,
              Object.assign(
                {},
                r,
                d,
                u,
                {
                  ref: o(
                    ((f = c),
                    eH.default.version.split(".")[0] >= "19"
                      ? f.props.ref
                      : f.ref),
                    u.ref,
                  ),
                },
                n ? { className: n } : {},
              ),
            );
          }
        return (0, eH.createElement)(
          l,
          Object.assign({}, eQ(s, ["ref"]), !eX(l) && u, !eX(l) && d),
          c,
        );
      }
      function eG(...e) {
        return e.every((e) => null == e)
          ? void 0
          : (t) => {
              for (let n of e)
                null != n && ("function" == typeof n ? n(t) : (n.current = t));
            };
      }
      function eK(...e) {
        if (0 === e.length) return {};
        if (1 === e.length) return e[0];
        let t = {},
          n = {};
        for (let r of e)
          for (let e in r)
            e.startsWith("on") && "function" == typeof r[e]
              ? (null != n[e] || (n[e] = []), n[e].push(r[e]))
              : (t[e] = r[e]);
        if (t.disabled || t["aria-disabled"])
          for (let e in n)
            /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(e) &&
              (n[e] = [
                (e) => {
                  var t;
                  return null == (t = null == e ? void 0 : e.preventDefault)
                    ? void 0
                    : t.call(e);
                },
              ]);
        for (let e in n)
          Object.assign(t, {
            [e](t, ...r) {
              for (let o of n[e]) {
                if (
                  (t instanceof Event ||
                    (null == t ? void 0 : t.nativeEvent) instanceof Event) &&
                  t.defaultPrevented
                )
                  return;
                o(t, ...r);
              }
            },
          });
        return t;
      }
      function eU(...e) {
        if (0 === e.length) return {};
        if (1 === e.length) return e[0];
        let t = {},
          n = {};
        for (let r of e)
          for (let e in r)
            e.startsWith("on") && "function" == typeof r[e]
              ? (null != n[e] || (n[e] = []), n[e].push(r[e]))
              : (t[e] = r[e]);
        for (let e in n)
          Object.assign(t, {
            [e](...t) {
              for (let r of n[e]) null == r || r(...t);
            },
          });
        return t;
      }
      function eq(e) {
        var t;
        return Object.assign((0, eH.forwardRef)(e), {
          displayName: null != (t = e.displayName) ? t : e.name,
        });
      }
      function eY(e) {
        let t = Object.assign({}, e);
        for (let e in t) void 0 === t[e] && delete t[e];
        return t;
      }
      function eQ(e, t = []) {
        let n = Object.assign({}, e);
        for (let e of t) e in n && delete n[e];
        return n;
      }
      function eX(e) {
        return e === eH.Fragment || e === Symbol.for("react.fragment");
      }
      var eJ = eq(function (e, t) {
          var n;
          let r = eB(),
            { disabled: o = r || !1, autoFocus: l = !1, ...i } = e,
            { isFocusVisible: a, focusProps: s } = eh({ autoFocus: l }),
            { isHovered: u, hoverProps: c } = ev({ isDisabled: o }),
            { pressed: d, pressProps: f } = eD({ disabled: o }),
            p = eU(
              {
                ref: t,
                type: null != (n = i.type) ? n : "button",
                disabled: o || void 0,
                autoFocus: l,
              },
              s,
              c,
              f,
            ),
            v = eL({
              disabled: o,
              hover: u,
              focus: a,
              active: d,
              autofocus: l,
            });
          return ez()({
            ourProps: p,
            theirProps: i,
            slot: v,
            defaultTag: "button",
            name: "Button",
          });
        }),
        eZ = m(n(36439), 1),
        e0 = n(36439),
        e1 = n(72354);
      function e3(e, t, n) {
        let [r, o] = (0, e0.useState)(n),
          l = void 0 !== e,
          i = (0, e0.useRef)(l),
          a = (0, e0.useRef)(!1),
          s = (0, e0.useRef)(!1);
        return (
          !l || i.current || a.current
            ? l ||
              !i.current ||
              s.current ||
              ((s.current = !0),
              (i.current = l),
              console.error(
                "A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.",
              ))
            : ((a.current = !0),
              (i.current = l),
              console.error(
                "A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.",
              )),
          [
            l ? e : r,
            eM(
              (e) => (
                l || (0, e1.flushSync)(() => o(e)),
                null == t ? void 0 : t(e)
              ),
            ),
          ]
        );
      }
      var e4 = n(36439);
      function e6(e) {
        let [t] = (0, e4.useState)(e);
        return t;
      }
      var e2 = n(36439),
        e9 = m(n(36439), 1),
        e5 = n(72354),
        e8 = n(36439);
      function e7(e, t) {
        return e ? e + "[" + t + "]" : t;
      }
      function te(e) {
        var t, n;
        let r =
          null != (t = null == e ? void 0 : e.form) ? t : e.closest("form");
        if (r) {
          for (let t of r.elements)
            if (
              t !== e &&
              (("INPUT" === t.tagName && "submit" === t.type) ||
                ("BUTTON" === t.tagName && "submit" === t.type) ||
                ("INPUT" === t.nodeName && "image" === t.type))
            )
              return void t.click();
          null == (n = r.requestSubmit) || n.call(r);
        }
      }
      var tt = eq(function (e, t) {
          var n;
          let { features: r = 1, ...o } = e,
            l = {
              ref: t,
              "aria-hidden":
                (2 & r) == 2 || (null != (n = o["aria-hidden"]) ? n : void 0),
              hidden: (4 & r) == 4 || void 0,
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
                ...((4 & r) == 4 && (2 & r) != 2 && { display: "none" }),
              },
            };
          return ez()({
            ourProps: l,
            theirProps: o,
            slot: {},
            defaultTag: "span",
            name: "Hidden",
          });
        }),
        tn = (0, e9.createContext)(null);
      function tr(e) {
        let [t, n] = (0, e9.useState)(null);
        return e9.default.createElement(
          tn.Provider,
          { value: { target: t } },
          e.children,
          e9.default.createElement(tt, { features: 4, ref: n }),
        );
      }
      function to({ children: e }) {
        let t = (0, e9.useContext)(tn);
        if (!t) return e9.default.createElement(e9.default.Fragment, null, e);
        let { target: n } = t;
        return n
          ? (0, e5.createPortal)(
              e9.default.createElement(e9.default.Fragment, null, e),
              n,
            )
          : null;
      }
      function tl({ data: e, form: t, disabled: n, onReset: r, overrides: o }) {
        let [l, i] = (0, e9.useState)(null),
          a = eT();
        return (
          (0, e9.useEffect)(() => {
            if (r && l) return a.addEventListener(l, "reset", r);
          }, [l, t, r]),
          e9.default.createElement(
            to,
            null,
            e9.default.createElement(ti, { setForm: i, formId: t }),
            (function e(t = {}, n = null, r = []) {
              for (let [o, l] of Object.entries(t))
                !(function t(n, r, o) {
                  if (Array.isArray(o))
                    for (let [e, l] of o.entries())
                      t(n, e7(r, e.toString()), l);
                  else
                    o instanceof Date
                      ? n.push([r, o.toISOString()])
                      : "boolean" == typeof o
                        ? n.push([r, o ? "1" : "0"])
                        : "string" == typeof o
                          ? n.push([r, o])
                          : "number" == typeof o
                            ? n.push([r, `${o}`])
                            : null == o
                              ? n.push([r, ""])
                              : (function (e) {
                                  if (
                                    "[object Object]" !==
                                    Object.prototype.toString.call(e)
                                  )
                                    return !1;
                                  let t = Object.getPrototypeOf(e);
                                  return (
                                    null === t ||
                                    null === Object.getPrototypeOf(t)
                                  );
                                })(o) &&
                                !(0, e8.isValidElement)(o) &&
                                e(o, r, n);
                })(r, e7(n, o), l);
              return r;
            })(e).map(([e, r]) =>
              e9.default.createElement(tt, {
                features: 4,
                ...eY({
                  key: e,
                  as: "input",
                  type: "hidden",
                  hidden: !0,
                  readOnly: !0,
                  form: t,
                  disabled: n,
                  name: e,
                  value: r,
                  ...o,
                }),
              }),
            ),
          )
        );
      }
      function ti({ setForm: e, formId: t }) {
        return (
          (0, e9.useEffect)(() => {
            if (t) {
              let n = document.getElementById(t);
              n && e(n);
            }
          }, [e, t]),
          t
            ? null
            : e9.default.createElement(tt, {
                features: 4,
                as: "input",
                type: "hidden",
                hidden: !0,
                readOnly: !0,
                ref: (t) => {
                  if (!t) return;
                  let n = t.closest("form");
                  n && e(n);
                },
              })
        );
      }
      var ta = m(n(36439), 1),
        ts = (0, ta.createContext)(void 0);
      function tu() {
        return (0, ta.useContext)(ts);
      }
      function tc({ id: e, children: t }) {
        return ta.default.createElement(ts.Provider, { value: e }, t);
      }
      function td(e) {
        return "object" == typeof e && null !== e && "nodeType" in e;
      }
      function tf(e) {
        return td(e) && "tagName" in e;
      }
      function tp(e) {
        return tf(e) && "accessKey" in e;
      }
      function tv(e) {
        return tf(e) && "tabIndex" in e;
      }
      function tm(e) {
        return tp(e) && "INPUT" === e.nodeName;
      }
      function th(e) {
        return tp(e) && "LABEL" === e.nodeName;
      }
      function tb(e) {
        return tp(e) && "LEGEND" === e.nodeName;
      }
      function tg(e) {
        var t;
        let n = e.parentElement,
          r = null;
        for (; n && !(tp((t = n)) && "FIELDSET" === t.nodeName); )
          (tb(n) && (r = n), (n = n.parentElement));
        let o = (null == n ? void 0 : n.getAttribute("disabled")) === "";
        return (
          !(
            o &&
            (function (e) {
              if (!e) return !1;
              let t = e.previousElementSibling;
              for (; null !== t; ) {
                if (tb(t)) return !1;
                t = t.previousElementSibling;
              }
              return !0;
            })(r)
          ) && o
        );
      }
      var ty = m(n(36439), 1),
        tx = n(36439),
        tE = Symbol();
      function tw(e, t = !0) {
        return Object.assign(e, { [tE]: t });
      }
      function tS(...e) {
        let t = (0, tx.useRef)(e);
        (0, tx.useEffect)(() => {
          t.current = e;
        }, [e]);
        let n = eM((e) => {
          for (let n of t.current)
            null != n && ("function" == typeof n ? n(e) : (n.current = e));
        });
        return e.every((e) => null == e || (null == e ? void 0 : e[tE]))
          ? void 0
          : n;
      }
      var tP = (0, ty.createContext)(null);
      function tI() {
        var e, t;
        return null !=
          (t = null == (e = (0, ty.useContext)(tP)) ? void 0 : e.value)
          ? t
          : void 0;
      }
      function tT() {
        let [e, t] = (0, ty.useState)([]);
        return [
          e.length > 0 ? e.join(" ") : void 0,
          (0, ty.useMemo)(
            () =>
              function (e) {
                let n = eM(
                    (e) => (
                      t((t) => [...t, e]),
                      () =>
                        t((t) => {
                          let n = t.slice(),
                            r = n.indexOf(e);
                          return (-1 !== r && n.splice(r, 1), n);
                        })
                    ),
                  ),
                  r = (0, ty.useMemo)(
                    () => ({
                      register: n,
                      slot: e.slot,
                      name: e.name,
                      props: e.props,
                      value: e.value,
                    }),
                    [n, e.slot, e.name, e.props, e.value],
                  );
                return ty.default.createElement(
                  tP.Provider,
                  { value: r },
                  e.children,
                );
              },
            [t],
          ),
        ];
      }
      tP.displayName = "DescriptionContext";
      var tC = Object.assign(
          eq(function (e, t) {
            let n = (0, e2.useId)(),
              r = eB(),
              { id: o = `headlessui-description-${n}`, ...l } = e,
              i = (function e() {
                let t = (0, ty.useContext)(tP);
                if (null === t) {
                  let t = Error(
                    "You used a <Description /> component, but it is not inside a relevant parent.",
                  );
                  throw (
                    Error.captureStackTrace && Error.captureStackTrace(t, e),
                    t
                  );
                }
                return t;
              })(),
              a = tS(t);
            ek(() => i.register(o), [o, i.register]);
            let s = eL({ ...i.slot, disabled: r || !1 }),
              u = { ref: a, ...i.props, id: o };
            return ez()({
              ourProps: u,
              theirProps: l,
              slot: s,
              defaultTag: "p",
              name: i.name || "Description",
            });
          }),
          {},
        ),
        tR = m(n(36439), 1),
        tO = (0, tR.createContext)(null);
      function tk() {
        let e = (0, tR.useContext)(tO);
        if (null === e) {
          let e = Error(
            "You used a <Label /> component, but it is not inside a relevant parent.",
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(e, tk), e);
        }
        return e;
      }
      function tF(e) {
        var t, n, r;
        let o =
          null != (n = null == (t = (0, tR.useContext)(tO)) ? void 0 : t.value)
            ? n
            : void 0;
        return (null != (r = null == e ? void 0 : e.length) ? r : 0) > 0
          ? [o, ...e].filter(Boolean).join(" ")
          : o;
      }
      function tM({ inherit: e = !1 } = {}) {
        let t = tF(),
          [n, r] = (0, tR.useState)([]),
          o = e ? [t, ...n].filter(Boolean) : n;
        return [
          o.length > 0 ? o.join(" ") : void 0,
          (0, tR.useMemo)(
            () =>
              function (e) {
                let t = eM(
                    (e) => (
                      r((t) => [...t, e]),
                      () =>
                        r((t) => {
                          let n = t.slice(),
                            r = n.indexOf(e);
                          return (-1 !== r && n.splice(r, 1), n);
                        })
                    ),
                  ),
                  n = (0, tR.useMemo)(
                    () => ({
                      register: t,
                      slot: e.slot,
                      name: e.name,
                      props: e.props,
                      value: e.value,
                    }),
                    [t, e.slot, e.name, e.props, e.value],
                  );
                return tR.default.createElement(
                  tO.Provider,
                  { value: n },
                  e.children,
                );
              },
            [r],
          ),
        ];
      }
      tO.displayName = "LabelContext";
      var tD = Object.assign(
          eq(function (e, t) {
            var n;
            let r = (0, e2.useId)(),
              o = tk(),
              l = tu(),
              i = eB(),
              {
                id: a = `headlessui-label-${r}`,
                htmlFor: s = null != l
                  ? l
                  : null == (n = o.props)
                    ? void 0
                    : n.htmlFor,
                passive: u = !1,
                ...c
              } = e,
              d = tS(t);
            ek(() => o.register(a), [a, o.register]);
            let f = eM((e) => {
                var t;
                let n = e.currentTarget;
                if (
                  !(
                    e.target !== e.currentTarget &&
                    tf((t = e.target)) &&
                    t.matches(
                      'a[href],audio[controls],button,details,embed,iframe,img[usemap],input:not([type="hidden"]),label,select,textarea,video[controls]',
                    )
                  ) &&
                  (th(n) && e.preventDefault(),
                  o.props &&
                    "onClick" in o.props &&
                    "function" == typeof o.props.onClick &&
                    o.props.onClick(e),
                  th(n))
                ) {
                  let e = document.getElementById(n.htmlFor);
                  if (e) {
                    let t = e.getAttribute("disabled");
                    if ("true" === t || "" === t) return;
                    let n = e.getAttribute("aria-disabled");
                    if ("true" === n || "" === n) return;
                    (((tm(e) &&
                      ("file" === e.type ||
                        "radio" === e.type ||
                        "checkbox" === e.type)) ||
                      "radio" === e.role ||
                      "checkbox" === e.role ||
                      "switch" === e.role) &&
                      e.click(),
                      e.focus({ preventScroll: !0 }));
                  }
                }
              }),
              p = eL({ ...o.slot, disabled: i || !1 }),
              v = { ref: d, ...o.props, id: a, htmlFor: s, onClick: f };
            return (
              u &&
                ("onClick" in v && (delete v.htmlFor, delete v.onClick),
                "onClick" in c && delete c.onClick),
              ez()({
                ourProps: v,
                theirProps: c,
                slot: p,
                defaultTag: s ? "label" : "div",
                name: o.name || "Label",
              })
            );
          }),
          {},
        ),
        tA = eq(function (e, t) {
          let n = (0, e2.useId)(),
            r = tu(),
            o = eB(),
            {
              id: l = r || `headlessui-checkbox-${n}`,
              disabled: i = o || !1,
              autoFocus: a = !1,
              checked: s,
              defaultChecked: u,
              onChange: c,
              name: d,
              value: f,
              form: p,
              indeterminate: v = !1,
              tabIndex: m = 0,
              ...h
            } = e,
            b = e6(u),
            [g, y] = e3(s, c, null != b && b),
            x = tF(),
            E = tI(),
            w = eT(),
            [S, P] = (0, eZ.useState)(!1),
            I = eM(() => {
              (P(!0),
                null == y || y(!g),
                w.nextFrame(() => {
                  P(!1);
                }));
            }),
            T = eM((e) => {
              if (tg(e.currentTarget)) return e.preventDefault();
              (e.preventDefault(), I());
            }),
            C = eM((e) => {
              " " === e.key
                ? (e.preventDefault(), I())
                : "Enter" === e.key && te(e.currentTarget);
            }),
            R = eM((e) => e.preventDefault()),
            { isFocusVisible: O, focusProps: k } = eh({ autoFocus: a }),
            { isHovered: F, hoverProps: M } = ev({ isDisabled: i }),
            { pressed: D, pressProps: A } = eD({ disabled: i }),
            L = eU(
              {
                ref: t,
                id: l,
                role: "checkbox",
                "aria-checked": v ? "mixed" : g ? "true" : "false",
                "aria-labelledby": x,
                "aria-describedby": E,
                "aria-disabled": !!i || void 0,
                indeterminate: v ? "true" : void 0,
                tabIndex: i ? void 0 : m,
                onKeyUp: i ? void 0 : C,
                onKeyPress: i ? void 0 : R,
                onClick: i ? void 0 : T,
              },
              k,
              M,
              A,
            ),
            _ = eL({
              checked: g,
              disabled: i,
              hover: F,
              focus: O,
              active: D,
              indeterminate: v,
              changing: S,
              autofocus: a,
            }),
            N = (0, eZ.useCallback)(() => {
              if (void 0 !== b) return null == y ? void 0 : y(b);
            }, [y, b]),
            B = ez();
          return eZ.default.createElement(
            eZ.default.Fragment,
            null,
            null != d &&
              eZ.default.createElement(tl, {
                disabled: i,
                data: { [d]: f || "on" },
                overrides: { type: "checkbox", checked: g },
                form: p,
                onReset: N,
              }),
            B({
              ourProps: L,
              theirProps: h,
              slot: _,
              defaultTag: "span",
              name: "Checkbox",
            }),
          );
        }),
        tL = m(n(36439), 1),
        t_ = m(n(36439), 1),
        tN = (0, t_.createContext)(() => {});
      function tB() {
        return (0, t_.useContext)(tN);
      }
      function tj({ value: e, children: t }) {
        return t_.default.createElement(tN.Provider, { value: e }, t);
      }
      var tH = eq(function (e, t) {
          let n = tB();
          return tL.default.createElement(eJ, {
            ref: t,
            ...eU({ onClick: n }, e),
          });
        }),
        t$ = m(n(36439), 1),
        tV = n(72354);
      function tz(e, t, n) {
        var r;
        let o = null != (r = n.initialDeps) ? r : [],
          l;
        function i() {
          var r, i, a, s;
          let u, c;
          n.key && null != (r = n.debug) && r.call(n) && (u = Date.now());
          let d = e();
          if (!(d.length !== o.length || d.some((e, t) => o[t] !== e)))
            return l;
          if (
            ((o = d),
            n.key && null != (i = n.debug) && i.call(n) && (c = Date.now()),
            (l = t(...d)),
            n.key && null != (a = n.debug) && a.call(n))
          ) {
            let e = Math.round((Date.now() - u) * 100) / 100,
              t = Math.round((Date.now() - c) * 100) / 100,
              r = t / 16,
              o = (e, t) => {
                for (e = String(e); e.length < t; ) e = " " + e;
                return e;
              };
            console.info(
              `%c⏱ ${o(t, 5)} /${o(e, 5)} ms`,
              `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * r, 120))}deg 100% 31%);`,
              null == n ? void 0 : n.key,
            );
          }
          return (
            null == (s = null == n ? void 0 : n.onChange) || s.call(n, l),
            l
          );
        }
        return (
          (i.updateDeps = (e) => {
            o = e;
          }),
          i
        );
      }
      function tW(e, t) {
        if (void 0 === e)
          throw Error(`Unexpected undefined${t ? `: ${t}` : ""}`);
        return e;
      }
      var tG = (e) => {
          let { offsetWidth: t, offsetHeight: n } = e;
          return { width: t, height: n };
        },
        tK = (e) => e,
        tU = (e) => {
          let t = Math.max(e.startIndex - e.overscan, 0),
            n = Math.min(e.endIndex + e.overscan, e.count - 1),
            r = [];
          for (let e = t; e <= n; e++) r.push(e);
          return r;
        },
        tq = (e, t) => {
          let n = e.scrollElement;
          if (!n) return;
          let r = e.targetWindow;
          if (!r) return;
          let o = (e) => {
            let { width: n, height: r } = e;
            t({ width: Math.round(n), height: Math.round(r) });
          };
          if ((o(tG(n)), !r.ResizeObserver)) return () => {};
          let l = new r.ResizeObserver((t) => {
            let r = () => {
              let e = t[0];
              if (null != e && e.borderBoxSize) {
                let t = e.borderBoxSize[0];
                if (t)
                  return void o({ width: t.inlineSize, height: t.blockSize });
              }
              o(tG(n));
            };
            e.options.useAnimationFrameWithResizeObserver
              ? requestAnimationFrame(r)
              : r();
          });
          return (
            l.observe(n, { box: "border-box" }),
            () => {
              l.unobserve(n);
            }
          );
        },
        tY = { passive: !0 },
        tQ = "u" < typeof window || "onscrollend" in window,
        tX = (e, t) => {
          var n, r;
          let o,
            l = e.scrollElement;
          if (!l) return;
          let i = e.targetWindow;
          if (!i) return;
          let a = 0,
            s =
              e.options.useScrollendEvent && tQ
                ? () => {}
                : ((n = () => {
                    t(a, !1);
                  }),
                  (r = e.options.isScrollingResetDelay),
                  function (...e) {
                    (i.clearTimeout(o),
                      (o = i.setTimeout(() => n.apply(this, e), r)));
                  }),
            u = (n) => () => {
              let { horizontal: r, isRtl: o } = e.options;
              ((a = r ? l.scrollLeft * ((o && -1) || 1) : l.scrollTop),
                s(),
                t(a, n));
            },
            c = u(!0),
            d = u(!1);
          (d(), l.addEventListener("scroll", c, tY));
          let f = e.options.useScrollendEvent && tQ;
          return (
            f && l.addEventListener("scrollend", d, tY),
            () => {
              (l.removeEventListener("scroll", c),
                f && l.removeEventListener("scrollend", d));
            }
          );
        },
        tJ = (e, t, n) => {
          if (null != t && t.borderBoxSize) {
            let e = t.borderBoxSize[0];
            if (e)
              return Math.round(
                e[n.options.horizontal ? "inlineSize" : "blockSize"],
              );
          }
          return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
        },
        tZ = (e, { adjustments: t = 0, behavior: n }, r) => {
          var o, l;
          null == (l = null == (o = r.scrollElement) ? void 0 : o.scrollTo) ||
            l.call(o, {
              [r.options.horizontal ? "left" : "top"]: e + t,
              behavior: n,
            });
        },
        t0 = class {
          constructor(e) {
            let t, n;
            ((this.unsubs = []),
              (this.scrollElement = null),
              (this.targetWindow = null),
              (this.isScrolling = !1),
              (this.scrollToIndexTimeoutId = null),
              (this.measurementsCache = []),
              (this.itemSizeCache = new Map()),
              (this.pendingMeasuredCacheIndexes = []),
              (this.scrollRect = null),
              (this.scrollOffset = null),
              (this.scrollDirection = null),
              (this.scrollAdjustments = 0),
              (this.elementsCache = new Map()),
              (this.observer =
                ((t = null),
                (n = () =>
                  t ||
                  (this.targetWindow && this.targetWindow.ResizeObserver
                    ? (t = new this.targetWindow.ResizeObserver((e) => {
                        e.forEach((e) => {
                          let t = () => {
                            this._measureElement(e.target, e);
                          };
                          this.options.useAnimationFrameWithResizeObserver
                            ? requestAnimationFrame(t)
                            : t();
                        });
                      }))
                    : null)),
                {
                  disconnect: () => {
                    var e;
                    (null == (e = n()) || e.disconnect(), (t = null));
                  },
                  observe: (e) => {
                    var t;
                    return null == (t = n())
                      ? void 0
                      : t.observe(e, { box: "border-box" });
                  },
                  unobserve: (e) => {
                    var t;
                    return null == (t = n()) ? void 0 : t.unobserve(e);
                  },
                })),
              (this.range = null),
              (this.setOptions = (e) => {
                (Object.entries(e).forEach(([t, n]) => {
                  void 0 === n && delete e[t];
                }),
                  (this.options = {
                    debug: !1,
                    initialOffset: 0,
                    overscan: 1,
                    paddingStart: 0,
                    paddingEnd: 0,
                    scrollPaddingStart: 0,
                    scrollPaddingEnd: 0,
                    horizontal: !1,
                    getItemKey: tK,
                    rangeExtractor: tU,
                    onChange: () => {},
                    measureElement: tJ,
                    initialRect: { width: 0, height: 0 },
                    scrollMargin: 0,
                    gap: 0,
                    indexAttribute: "data-index",
                    initialMeasurementsCache: [],
                    lanes: 1,
                    isScrollingResetDelay: 150,
                    enabled: !0,
                    isRtl: !1,
                    useScrollendEvent: !1,
                    useAnimationFrameWithResizeObserver: !1,
                    ...e,
                  }));
              }),
              (this.notify = (e) => {
                var t, n;
                null == (n = (t = this.options).onChange) || n.call(t, this, e);
              }),
              (this.maybeNotify = tz(
                () => (
                  this.calculateRange(),
                  [
                    this.isScrolling,
                    this.range ? this.range.startIndex : null,
                    this.range ? this.range.endIndex : null,
                  ]
                ),
                (e) => {
                  this.notify(e);
                },
                {
                  key: !1,
                  debug: () => this.options.debug,
                  initialDeps: [
                    this.isScrolling,
                    this.range ? this.range.startIndex : null,
                    this.range ? this.range.endIndex : null,
                  ],
                },
              )),
              (this.cleanup = () => {
                (this.unsubs.filter(Boolean).forEach((e) => e()),
                  (this.unsubs = []),
                  this.observer.disconnect(),
                  (this.scrollElement = null),
                  (this.targetWindow = null));
              }),
              (this._didMount = () => () => {
                this.cleanup();
              }),
              (this._willUpdate = () => {
                var e, t;
                let n = this.options.enabled
                  ? this.options.getScrollElement()
                  : null;
                if (this.scrollElement !== n) {
                  if ((this.cleanup(), !n)) return void this.maybeNotify();
                  ((this.scrollElement = n),
                    this.scrollElement && "ownerDocument" in this.scrollElement
                      ? (this.targetWindow =
                          this.scrollElement.ownerDocument.defaultView)
                      : (this.targetWindow =
                          null !=
                          (e =
                            null == (t = this.scrollElement)
                              ? void 0
                              : t.window)
                            ? e
                            : null),
                    this.elementsCache.forEach((e) => {
                      this.observer.observe(e);
                    }),
                    this._scrollToOffset(this.getScrollOffset(), {
                      adjustments: void 0,
                      behavior: void 0,
                    }),
                    this.unsubs.push(
                      this.options.observeElementRect(this, (e) => {
                        ((this.scrollRect = e), this.maybeNotify());
                      }),
                    ),
                    this.unsubs.push(
                      this.options.observeElementOffset(this, (e, t) => {
                        ((this.scrollAdjustments = 0),
                          (this.scrollDirection = t
                            ? this.getScrollOffset() < e
                              ? "forward"
                              : "backward"
                            : null),
                          (this.scrollOffset = e),
                          (this.isScrolling = t),
                          this.maybeNotify());
                      }),
                    ));
                }
              }),
              (this.getSize = () => {
                var e;
                return this.options.enabled
                  ? ((this.scrollRect =
                      null != (e = this.scrollRect)
                        ? e
                        : this.options.initialRect),
                    this.scrollRect[
                      this.options.horizontal ? "width" : "height"
                    ])
                  : ((this.scrollRect = null), 0);
              }),
              (this.getScrollOffset = () => {
                var e;
                return this.options.enabled
                  ? ((this.scrollOffset =
                      null != (e = this.scrollOffset)
                        ? e
                        : "function" == typeof this.options.initialOffset
                          ? this.options.initialOffset()
                          : this.options.initialOffset),
                    this.scrollOffset)
                  : ((this.scrollOffset = null), 0);
              }),
              (this.getFurthestMeasurement = (e, t) => {
                let n = new Map(),
                  r = new Map();
                for (let o = t - 1; o >= 0; o--) {
                  let t = e[o];
                  if (n.has(t.lane)) continue;
                  let l = r.get(t.lane);
                  if (
                    (null == l || t.end > l.end
                      ? r.set(t.lane, t)
                      : t.end < l.end && n.set(t.lane, !0),
                    n.size === this.options.lanes)
                  )
                    break;
                }
                return r.size === this.options.lanes
                  ? Array.from(r.values()).sort((e, t) =>
                      e.end === t.end ? e.index - t.index : e.end - t.end,
                    )[0]
                  : void 0;
              }),
              (this.getMeasurementOptions = tz(
                () => [
                  this.options.count,
                  this.options.paddingStart,
                  this.options.scrollMargin,
                  this.options.getItemKey,
                  this.options.enabled,
                ],
                (e, t, n, r, o) => (
                  (this.pendingMeasuredCacheIndexes = []),
                  {
                    count: e,
                    paddingStart: t,
                    scrollMargin: n,
                    getItemKey: r,
                    enabled: o,
                  }
                ),
                { key: !1 },
              )),
              (this.getMeasurements = tz(
                () => [this.getMeasurementOptions(), this.itemSizeCache],
                (
                  {
                    count: e,
                    paddingStart: t,
                    scrollMargin: n,
                    getItemKey: r,
                    enabled: o,
                  },
                  l,
                ) => {
                  if (!o)
                    return (
                      (this.measurementsCache = []),
                      this.itemSizeCache.clear(),
                      []
                    );
                  0 === this.measurementsCache.length &&
                    ((this.measurementsCache =
                      this.options.initialMeasurementsCache),
                    this.measurementsCache.forEach((e) => {
                      this.itemSizeCache.set(e.key, e.size);
                    }));
                  let i =
                    this.pendingMeasuredCacheIndexes.length > 0
                      ? Math.min(...this.pendingMeasuredCacheIndexes)
                      : 0;
                  this.pendingMeasuredCacheIndexes = [];
                  let a = this.measurementsCache.slice(0, i);
                  for (let o = i; o < e; o++) {
                    let e = r(o),
                      i =
                        1 === this.options.lanes
                          ? a[o - 1]
                          : this.getFurthestMeasurement(a, o),
                      s = i ? i.end + this.options.gap : t + n,
                      u = l.get(e),
                      c =
                        "number" == typeof u ? u : this.options.estimateSize(o),
                      d = s + c,
                      f = i ? i.lane : o % this.options.lanes;
                    a[o] = {
                      index: o,
                      start: s,
                      size: c,
                      end: d,
                      key: e,
                      lane: f,
                    };
                  }
                  return ((this.measurementsCache = a), a);
                },
                { key: !1, debug: () => this.options.debug },
              )),
              (this.calculateRange = tz(
                () => [
                  this.getMeasurements(),
                  this.getSize(),
                  this.getScrollOffset(),
                  this.options.lanes,
                ],
                (e, t, n, r) =>
                  (this.range =
                    e.length > 0 && t > 0
                      ? (function ({
                          measurements: e,
                          outerSize: t,
                          scrollOffset: n,
                          lanes: r,
                        }) {
                          let o = e.length - 1,
                            l = (t) => e[t].start;
                          if (e.length <= r)
                            return { startIndex: 0, endIndex: o };
                          let i = t1(0, o, l, n),
                            a = i;
                          if (1 === r) for (; a < o && e[a].end < n + t; ) a++;
                          else if (r > 1) {
                            let l = Array(r).fill(0);
                            for (; a < o && l.some((e) => e < n + t); ) {
                              let t = e[a];
                              ((l[t.lane] = t.end), a++);
                            }
                            let s = Array(r).fill(n + t);
                            for (; i >= 0 && s.some((e) => e >= n); ) {
                              let t = e[i];
                              ((s[t.lane] = t.start), i--);
                            }
                            ((i = Math.max(0, i - (i % r))),
                              (a = Math.min(o, a + (r - 1 - (a % r)))));
                          }
                          return { startIndex: i, endIndex: a };
                        })({
                          measurements: e,
                          outerSize: t,
                          scrollOffset: n,
                          lanes: r,
                        })
                      : null),
                { key: !1, debug: () => this.options.debug },
              )),
              (this.getVirtualIndexes = tz(
                () => {
                  let e = null,
                    t = null,
                    n = this.calculateRange();
                  return (
                    n && ((e = n.startIndex), (t = n.endIndex)),
                    this.maybeNotify.updateDeps([this.isScrolling, e, t]),
                    [
                      this.options.rangeExtractor,
                      this.options.overscan,
                      this.options.count,
                      e,
                      t,
                    ]
                  );
                },
                (e, t, n, r, o) =>
                  null === r || null === o
                    ? []
                    : e({ startIndex: r, endIndex: o, overscan: t, count: n }),
                { key: !1, debug: () => this.options.debug },
              )),
              (this.indexFromElement = (e) => {
                let t = this.options.indexAttribute,
                  n = e.getAttribute(t);
                return n
                  ? parseInt(n, 10)
                  : (console.warn(
                      `Missing attribute name '${t}={index}' on measured element.`,
                    ),
                    -1);
              }),
              (this._measureElement = (e, t) => {
                let n = this.indexFromElement(e),
                  r = this.measurementsCache[n];
                if (!r) return;
                let o = r.key,
                  l = this.elementsCache.get(o);
                (l !== e &&
                  (l && this.observer.unobserve(l),
                  this.observer.observe(e),
                  this.elementsCache.set(o, e)),
                  e.isConnected &&
                    this.resizeItem(
                      n,
                      this.options.measureElement(e, t, this),
                    ));
              }),
              (this.resizeItem = (e, t) => {
                var n;
                let r = this.measurementsCache[e];
                if (!r) return;
                let o =
                  t -
                  (null != (n = this.itemSizeCache.get(r.key)) ? n : r.size);
                0 !== o &&
                  ((void 0 !== this.shouldAdjustScrollPositionOnItemSizeChange
                    ? this.shouldAdjustScrollPositionOnItemSizeChange(
                        r,
                        o,
                        this,
                      )
                    : r.start <
                      this.getScrollOffset() + this.scrollAdjustments) &&
                    this._scrollToOffset(this.getScrollOffset(), {
                      adjustments: (this.scrollAdjustments += o),
                      behavior: void 0,
                    }),
                  this.pendingMeasuredCacheIndexes.push(r.index),
                  (this.itemSizeCache = new Map(
                    this.itemSizeCache.set(r.key, t),
                  )),
                  this.notify(!1));
              }),
              (this.measureElement = (e) => {
                e
                  ? this._measureElement(e, void 0)
                  : this.elementsCache.forEach((e, t) => {
                      e.isConnected ||
                        (this.observer.unobserve(e),
                        this.elementsCache.delete(t));
                    });
              }),
              (this.getVirtualItems = tz(
                () => [this.getVirtualIndexes(), this.getMeasurements()],
                (e, t) => {
                  let n = [];
                  for (let r = 0, o = e.length; r < o; r++) {
                    let o = t[e[r]];
                    n.push(o);
                  }
                  return n;
                },
                { key: !1, debug: () => this.options.debug },
              )),
              (this.getVirtualItemForOffset = (e) => {
                let t = this.getMeasurements();
                if (0 !== t.length)
                  return tW(t[t1(0, t.length - 1, (e) => tW(t[e]).start, e)]);
              }),
              (this.getOffsetForAlignment = (e, t, n = 0) => {
                let r = this.getSize(),
                  o = this.getScrollOffset();
                return (
                  "auto" === t && (t = e >= o + r ? "end" : "start"),
                  "center" === t ? (e += (n - r) / 2) : "end" === t && (e -= r),
                  Math.max(Math.min(this.getTotalSize() - r, e), 0)
                );
              }),
              (this.getOffsetForIndex = (e, t = "auto") => {
                e = Math.max(0, Math.min(e, this.options.count - 1));
                let n = this.measurementsCache[e];
                if (!n) return;
                let r = this.getSize(),
                  o = this.getScrollOffset();
                if ("auto" === t)
                  if (n.end >= o + r - this.options.scrollPaddingEnd) t = "end";
                  else {
                    if (!(n.start <= o + this.options.scrollPaddingStart))
                      return [o, t];
                    t = "start";
                  }
                let l =
                  "end" === t
                    ? n.end + this.options.scrollPaddingEnd
                    : n.start - this.options.scrollPaddingStart;
                return [this.getOffsetForAlignment(l, t, n.size), t];
              }),
              (this.isDynamicMode = () => this.elementsCache.size > 0),
              (this.cancelScrollToIndex = () => {
                null !== this.scrollToIndexTimeoutId &&
                  this.targetWindow &&
                  (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId),
                  (this.scrollToIndexTimeoutId = null));
              }),
              (this.scrollToOffset = (
                e,
                { align: t = "start", behavior: n } = {},
              ) => {
                (this.cancelScrollToIndex(),
                  "smooth" === n &&
                    this.isDynamicMode() &&
                    console.warn(
                      "The `smooth` scroll behavior is not fully supported with dynamic size.",
                    ),
                  this._scrollToOffset(this.getOffsetForAlignment(e, t), {
                    adjustments: void 0,
                    behavior: n,
                  }));
              }),
              (this.scrollToIndex = (
                e,
                { align: t = "auto", behavior: n } = {},
              ) => {
                ((e = Math.max(0, Math.min(e, this.options.count - 1))),
                  this.cancelScrollToIndex(),
                  "smooth" === n &&
                    this.isDynamicMode() &&
                    console.warn(
                      "The `smooth` scroll behavior is not fully supported with dynamic size.",
                    ));
                let r = this.getOffsetForIndex(e, t);
                if (!r) return;
                let [o, l] = r;
                (this._scrollToOffset(o, { adjustments: void 0, behavior: n }),
                  "smooth" !== n &&
                    this.isDynamicMode() &&
                    this.targetWindow &&
                    (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(
                      () => {
                        if (
                          ((this.scrollToIndexTimeoutId = null),
                          this.elementsCache.has(this.options.getItemKey(e)))
                        ) {
                          let t = this.getOffsetForIndex(e, l);
                          if (!t) return;
                          let [r] = t;
                          1 >= Math.abs(r - this.getScrollOffset()) ||
                            this.scrollToIndex(e, { align: l, behavior: n });
                        } else this.scrollToIndex(e, { align: l, behavior: n });
                      },
                    )));
              }),
              (this.scrollBy = (e, { behavior: t } = {}) => {
                (this.cancelScrollToIndex(),
                  "smooth" === t &&
                    this.isDynamicMode() &&
                    console.warn(
                      "The `smooth` scroll behavior is not fully supported with dynamic size.",
                    ),
                  this._scrollToOffset(this.getScrollOffset() + e, {
                    adjustments: void 0,
                    behavior: t,
                  }));
              }),
              (this.getTotalSize = () => {
                var e, t;
                let n = this.getMeasurements(),
                  r;
                if (0 === n.length) r = this.options.paddingStart;
                else if (1 === this.options.lanes)
                  r =
                    null != (e = null == (t = n[n.length - 1]) ? void 0 : t.end)
                      ? e
                      : 0;
                else {
                  let e = Array(this.options.lanes).fill(null),
                    t = n.length - 1;
                  for (; t >= 0 && e.some((e) => null === e); ) {
                    let r = n[t];
                    (null === e[r.lane] && (e[r.lane] = r.end), t--);
                  }
                  r = Math.max(...e.filter((e) => null !== e));
                }
                return Math.max(
                  r - this.options.scrollMargin + this.options.paddingEnd,
                  0,
                );
              }),
              (this._scrollToOffset = (e, { adjustments: t, behavior: n }) => {
                this.options.scrollToFn(
                  e,
                  { behavior: n, adjustments: t },
                  this,
                );
              }),
              (this.measure = () => {
                ((this.itemSizeCache = new Map()), this.notify(!1));
              }),
              this.setOptions(e));
          }
        },
        t1 = (e, t, n, r) => {
          for (; e <= t; ) {
            let o = ((e + t) / 2) | 0,
              l = n(o);
            if (l < r) e = o + 1;
            else {
              if (!(l > r)) return o;
              t = o - 1;
            }
          }
          return e > 0 ? e - 1 : 0;
        },
        t3 = "u" > typeof document ? t$.useLayoutEffect : t$.useEffect,
        t4 = m(n(36439), 1),
        t6 = n(72354),
        t2 = n(36439);
      function t9(e, t) {
        return null !== e &&
          null !== t &&
          "object" == typeof e &&
          "object" == typeof t &&
          "id" in e &&
          "id" in t
          ? e.id === t.id
          : e === t;
      }
      function t5(e = t9) {
        return (0, t2.useCallback)(
          (t, n) =>
            "string" == typeof e
              ? (null == t ? void 0 : t[e]) === (null == n ? void 0 : n[e])
              : e(t, n),
          [e],
        );
      }
      var t8 = n(36439);
      function t7(e) {
        if (null === e) return { width: 0, height: 0 };
        let { width: t, height: n } = e.getBoundingClientRect();
        return { width: t, height: n };
      }
      function ne(e, t, n = !1) {
        let [r, o] = (0, t8.useState)(() => t7(t));
        return (
          ek(() => {
            if (!t || !e) return;
            let n = eI();
            return (
              n.requestAnimationFrame(function e() {
                (n.requestAnimationFrame(e),
                  o((e) => {
                    let n = t7(t);
                    return n.width === e.width && n.height === e.height ? e : n;
                  }));
              }),
              () => {
                n.dispose();
              }
            );
          }, [t, e]),
          n ? { width: `${r.width}px`, height: `${r.height}px` } : r
        );
      }
      var nt = n(36439);
      function nn(e) {
        let t = (0, nt.useRef)(null);
        return {
          onPointerDown: eM((n) => {
            ((t.current = n.pointerType),
              tg(n.currentTarget) ||
                "mouse" !== n.pointerType ||
                0 !== n.button ||
                (n.preventDefault(), e(n)));
          }),
          onClick: eM((n) => {
            "mouse" !== t.current && (tg(n.currentTarget) || e(n));
          }),
        };
      }
      var nr,
        no,
        nl,
        ni = n(36439),
        na = class extends Map {
          constructor(e) {
            (super(), (this.factory = e));
          }
          get(e) {
            let t = super.get(e);
            return (void 0 === t && ((t = this.factory(e)), this.set(e, t)), t);
          }
        },
        ns = class {
          constructor(e) {
            (y(this, nr, {}),
              y(this, no, new na(() => new Set())),
              y(this, nl, new Set()),
              h(this, "disposables", eI()),
              x(this, nr, e),
              eg.isServer &&
                this.disposables.microTask(() => {
                  this.dispose();
                }));
          }
          dispose() {
            this.disposables.dispose();
          }
          get state() {
            return g(this, nr);
          }
          subscribe(e, t) {
            if (eg.isServer) return () => {};
            let n = { selector: e, callback: t, current: e(g(this, nr)) };
            return (
              g(this, nl).add(n),
              this.disposables.add(() => {
                g(this, nl).delete(n);
              })
            );
          }
          on(e, t) {
            return eg.isServer
              ? () => {}
              : (g(this, no).get(e).add(t),
                this.disposables.add(() => {
                  g(this, no).get(e).delete(t);
                }));
          }
          send(e) {
            let t = this.reduce(g(this, nr), e);
            if (t !== g(this, nr)) {
              for (let e of (x(this, nr, t), g(this, nl))) {
                let t = e.selector(g(this, nr));
                nu(e.current, t) || ((e.current = t), e.callback(t));
              }
              for (let t of g(this, no).get(e.type)) t(g(this, nr), e);
            }
          }
        };
      function nu(e, t) {
        return (
          !!Object.is(e, t) ||
          ("object" == typeof e &&
            null !== e &&
            "object" == typeof t &&
            null !== t &&
            (Array.isArray(e) && Array.isArray(t)
              ? e.length === t.length &&
                nc(e[Symbol.iterator](), t[Symbol.iterator]())
              : (e instanceof Map && t instanceof Map) ||
                  (e instanceof Set && t instanceof Set)
                ? e.size === t.size && nc(e.entries(), t.entries())
                : !!(nd(e) && nd(t)) &&
                  nc(
                    Object.entries(e)[Symbol.iterator](),
                    Object.entries(t)[Symbol.iterator](),
                  )))
        );
      }
      function nc(e, t) {
        for (;;) {
          let n = e.next(),
            r = t.next();
          if (n.done && r.done) return !0;
          if (n.done || r.done || !Object.is(n.value, r.value)) return !1;
        }
      }
      function nd(e) {
        if ("[object Object]" !== Object.prototype.toString.call(e)) return !1;
        let t = Object.getPrototypeOf(e);
        return null === t || null === Object.getPrototypeOf(t);
      }
      function nf(e) {
        let [t, n] = e(),
          r = eI();
        return (...e) => {
          (t(...e), r.dispose(), r.microTask(n));
        };
      }
      ((nr = new WeakMap()), (no = new WeakMap()), (nl = new WeakMap()));
      var np = {
          0(e, t) {
            let n = t.id,
              r = e.stack,
              o = e.stack.indexOf(n);
            if (-1 !== o) {
              let t = e.stack.slice();
              return (t.splice(o, 1), t.push(n), (r = t), { ...e, stack: r });
            }
            return { ...e, stack: [...e.stack, n] };
          },
          1(e, t) {
            let n = t.id,
              r = e.stack.indexOf(n);
            if (-1 === r) return e;
            let o = e.stack.slice();
            return (o.splice(r, 1), { ...e, stack: o });
          },
        },
        nv = class extends ns {
          constructor() {
            (super(...arguments),
              h(this, "actions", {
                push: (e) => this.send({ type: 0, id: e }),
                pop: (e) => this.send({ type: 1, id: e }),
              }),
              h(this, "selectors", {
                isTop: (e, t) => e.stack[e.stack.length - 1] === t,
                inStack: (e, t) => e.stack.includes(t),
              }));
          }
          static new() {
            return new nv({ stack: [] });
          }
          reduce(e, t) {
            return eV(t.type, np, e, t);
          }
        },
        nm = new na(() => nv.new()),
        nh = n(28872);
      function nb(e, t, n = nu) {
        return (0, nh.useSyncExternalStoreWithSelector)(
          eM((t) => e.subscribe(ng, t)),
          eM(() => e.state),
          eM(() => e.state),
          eM(t),
          n,
        );
      }
      function ng(e) {
        return e;
      }
      function ny(e, t) {
        let n = (0, ni.useId)(),
          r = nm.get(t),
          [o, l] = nb(
            r,
            (0, ni.useCallback)(
              (e) => [r.selectors.isTop(e, n), r.selectors.inStack(e, n)],
              [r, n],
            ),
          );
        return (
          ek(() => {
            if (e) return (r.actions.push(n), () => r.actions.pop(n));
          }, [r, e, n]),
          !!e && (!l || o)
        );
      }
      var nx = new Map(),
        nE = new Map();
      function nw(e) {
        var t;
        let n = null != (t = nE.get(e)) ? t : 0;
        return (
          nE.set(e, n + 1),
          0 !== n
            ? () => nS(e)
            : (nx.set(e, {
                "aria-hidden": e.getAttribute("aria-hidden"),
                inert: e.inert,
              }),
              e.setAttribute("aria-hidden", "true"),
              (e.inert = !0),
              () => nS(e))
        );
      }
      function nS(e) {
        var t;
        let n = null != (t = nE.get(e)) ? t : 1;
        if ((1 === n ? nE.delete(e) : nE.set(e, n - 1), 1 !== n)) return;
        let r = nx.get(e);
        r &&
          (null === r["aria-hidden"]
            ? e.removeAttribute("aria-hidden")
            : e.setAttribute("aria-hidden", r["aria-hidden"]),
          (e.inert = r.inert),
          nx.delete(e));
      }
      function nP(e, { allowed: t, disallowed: n } = {}) {
        let r = ny(e, "inert-others");
        ek(() => {
          var e, o;
          if (!r) return;
          let l = eI();
          for (let t of null != (e = null == n ? void 0 : n()) ? e : [])
            t && l.add(nw(t));
          let i = null != (o = null == t ? void 0 : t()) ? o : [];
          for (let e of i) {
            if (!e) continue;
            let t = ey(e);
            if (!t) continue;
            let n = e.parentElement;
            for (; n && n !== t.body; ) {
              for (let e of n.children)
                i.some((t) => e.contains(t)) || l.add(nw(e));
              n = n.parentElement;
            }
          }
          return l.dispose;
        }, [r, t, n]);
      }
      var nI = n(36439);
      function nT(e, t, n) {
        let r = eF((e) => {
          let t = e.getBoundingClientRect();
          0 === t.x && 0 === t.y && 0 === t.width && 0 === t.height && n();
        });
        (0, nI.useEffect)(() => {
          if (!e) return;
          let n = null === t ? null : tp(t) ? t : t.current;
          if (!n) return;
          let o = eI();
          if ("u" > typeof ResizeObserver) {
            let e = new ResizeObserver(() => r.current(n));
            (e.observe(n), o.add(() => e.disconnect()));
          }
          if ("u" > typeof IntersectionObserver) {
            let e = new IntersectionObserver(() => r.current(n));
            (e.observe(n), o.add(() => e.disconnect()));
          }
          return () => o.dispose();
        }, [t, r, e]);
      }
      var nC = n(36439),
        nR = [
          "[contentEditable=true]",
          "[tabindex]",
          "a[href]",
          "area[href]",
          "button:not([disabled])",
          "iframe",
          "input:not([disabled])",
          "select:not([disabled])",
          "details>summary",
          "textarea:not([disabled])",
        ]
          .map((e) => `${e}:not([tabindex='-1'])`)
          .join(","),
        nO = ["[data-autofocus]"]
          .map((e) => `${e}:not([tabindex='-1'])`)
          .join(",");
      function nk(e = document.body) {
        return null == e
          ? []
          : Array.from(e.querySelectorAll(nR)).sort((e, t) =>
              Math.sign(
                (e.tabIndex || Number.MAX_SAFE_INTEGER) -
                  (t.tabIndex || Number.MAX_SAFE_INTEGER),
              ),
            );
      }
      function nF(e, t = 0) {
        var n;
        return (
          e !== (null == (n = ey(e)) ? void 0 : n.body) &&
          eV(t, {
            0: () => e.matches(nR),
            1() {
              let t = e;
              for (; null !== t; ) {
                if (t.matches(nR)) return !0;
                t = t.parentElement;
              }
              return !1;
            },
          })
        );
      }
      function nM(e) {
        eI().nextFrame(() => {
          let t = eE(e);
          t && tv(t) && !nF(t, 0) && nD(e);
        });
      }
      function nD(e) {
        null == e || e.focus({ preventScroll: !0 });
      }
      function nA(e, t = (e) => e) {
        return e.slice().sort((e, n) => {
          let r = t(e),
            o = t(n);
          if (null === r || null === o) return 0;
          let l = r.compareDocumentPosition(o);
          return l & Node.DOCUMENT_POSITION_FOLLOWING
            ? -1
            : l & Node.DOCUMENT_POSITION_PRECEDING
              ? 1
              : 0;
        });
      }
      function nL(e, t, n = null === e ? document.body : ex(e)) {
        return n_(nk(n), t, { relativeTo: e });
      }
      function n_(
        e,
        t,
        { sorted: n = !0, relativeTo: r = null, skipElements: o = [] } = {},
      ) {
        var l, i, a;
        let s = Array.isArray(e) ? (e.length > 0 ? ex(e[0]) : document) : ex(e),
          u = Array.isArray(e)
            ? n
              ? nA(e)
              : e
            : 64 & t
              ? (function (e = document.body) {
                  return null == e
                    ? []
                    : Array.from(e.querySelectorAll(nO)).sort((e, t) =>
                        Math.sign(
                          (e.tabIndex || Number.MAX_SAFE_INTEGER) -
                            (t.tabIndex || Number.MAX_SAFE_INTEGER),
                        ),
                      );
                })(e)
              : nk(e);
        (o.length > 0 &&
          u.length > 1 &&
          (u = u.filter(
            (e) =>
              !o.some((t) =>
                null != t && "current" in t
                  ? (null == t ? void 0 : t.current) === e
                  : t === e,
              ),
          )),
          (r = null != r ? r : null == s ? void 0 : s.activeElement));
        let c = (() => {
            if (5 & t) return 1;
            if (10 & t) return -1;
            throw Error(
              "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last",
            );
          })(),
          d = (() => {
            if (1 & t) return 0;
            if (2 & t) return Math.max(0, u.indexOf(r)) - 1;
            if (4 & t) return Math.max(0, u.indexOf(r)) + 1;
            if (8 & t) return u.length - 1;
            throw Error(
              "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last",
            );
          })(),
          f = 32 & t ? { preventScroll: !0 } : {},
          p = 0,
          v = u.length,
          m;
        do {
          if (p >= v || p + v <= 0) return 0;
          let e = d + p;
          if (16 & t) e = (e + v) % v;
          else {
            if (e < 0) return 3;
            if (e >= v) return 1;
          }
          (null == (m = u[e]) || m.focus(f), (p += c));
        } while (m !== eE(m));
        return (
          6 & t &&
            null !=
              (a =
                null == (i = null == (l = m) ? void 0 : l.matches)
                  ? void 0
                  : i.call(l, "textarea,input")) &&
            a &&
            m.select(),
          2
        );
      }
      function nN() {
        return (
          /iPhone/gi.test(window.navigator.platform) ||
          (/Mac/gi.test(window.navigator.platform) &&
            window.navigator.maxTouchPoints > 0)
        );
      }
      function nB() {
        return nN() || /Android/gi.test(window.navigator.userAgent);
      }
      "u" > typeof window &&
        "u" > typeof document &&
        (document.addEventListener(
          "keydown",
          (e) => {
            e.metaKey ||
              e.altKey ||
              e.ctrlKey ||
              (document.documentElement.dataset.headlessuiFocusVisible = "");
          },
          !0,
        ),
        document.addEventListener(
          "click",
          (e) => {
            1 === e.detail
              ? delete document.documentElement.dataset.headlessuiFocusVisible
              : 0 === e.detail &&
                (document.documentElement.dataset.headlessuiFocusVisible = "");
          },
          !0,
        ));
      var nj = n(36439);
      function nH(e, t, n, r) {
        let o = eF(n);
        (0, nj.useEffect)(() => {
          if (e)
            return (
              document.addEventListener(t, n, r),
              () => document.removeEventListener(t, n, r)
            );
          function n(e) {
            o.current(e);
          }
        }, [e, t, r]);
      }
      var n$ = n(36439);
      function nV(e, t, n, r) {
        let o = eF(n);
        (0, n$.useEffect)(() => {
          if (e)
            return (
              window.addEventListener(t, n, r),
              () => window.removeEventListener(t, n, r)
            );
          function n(e) {
            o.current(e);
          }
        }, [e, t, r]);
      }
      function nz(e, t, n) {
        let r = eF(n),
          o = (0, nC.useCallback)(
            function (e, n) {
              if (e.defaultPrevented) return;
              let o = n(e);
              if (null !== o && o.getRootNode().contains(o) && o.isConnected) {
                for (let n of (function e(t) {
                  return "function" == typeof t
                    ? e(t())
                    : Array.isArray(t) || t instanceof Set
                      ? t
                      : [t];
                })(t))
                  if (
                    null !== n &&
                    (n.contains(o) ||
                      (e.composed && e.composedPath().includes(n)))
                  )
                    return;
                return (
                  nF(o, 1) || -1 === o.tabIndex || e.preventDefault(),
                  r.current(e, o)
                );
              }
            },
            [r, t],
          ),
          l = (0, nC.useRef)(null);
        (nH(
          e,
          "pointerdown",
          (e) => {
            var t, n;
            nB() ||
              (l.current =
                (null == (n = null == (t = e.composedPath) ? void 0 : t.call(e))
                  ? void 0
                  : n[0]) || e.target);
          },
          !0,
        ),
          nH(
            e,
            "pointerup",
            (e) => {
              if (nB() || !l.current) return;
              let t = l.current;
              return ((l.current = null), o(e, () => t));
            },
            !0,
          ));
        let i = (0, nC.useRef)({ x: 0, y: 0 });
        (nH(
          e,
          "touchstart",
          (e) => {
            ((i.current.x = e.touches[0].clientX),
              (i.current.y = e.touches[0].clientY));
          },
          !0,
        ),
          nH(
            e,
            "touchend",
            (e) => {
              let t = {
                x: e.changedTouches[0].clientX,
                y: e.changedTouches[0].clientY,
              };
              if (
                !(
                  Math.abs(t.x - i.current.x) >= 30 ||
                  Math.abs(t.y - i.current.y) >= 30
                )
              )
                return o(e, () => (tv(e.target) ? e.target : null));
            },
            !0,
          ),
          nV(
            e,
            "blur",
            (e) =>
              o(e, () => {
                var e;
                return tp((e = window.document.activeElement)) &&
                  "IFRAME" === e.nodeName
                  ? window.document.activeElement
                  : null;
              }),
            !0,
          ));
      }
      var nW = n(36439);
      function nG(...e) {
        return (0, nW.useMemo)(() => ey(...e), [...e]);
      }
      var nK = n(36439),
        nU = { kind: 0 },
        nq = (e) => ({ kind: 1, target: e }),
        nY = { kind: 2 };
      function nQ(e, { trigger: t, action: n, close: r, select: o }) {
        let l = (0, nK.useRef)(null),
          i = (0, nK.useRef)(null),
          a = (0, nK.useRef)(null);
        (nH(e && null !== t, "pointerdown", (e) => {
          td(null == e ? void 0 : e.target) &&
            null != t &&
            t.contains(e.target) &&
            ((i.current = e.x), (a.current = e.y), (l.current = e.timeStamp));
        }),
          nH(
            e && null !== t,
            "pointerup",
            (e) => {
              var t, s;
              let u = l.current;
              if (
                null === u ||
                ((l.current = null), !tv(e.target)) ||
                (5 > Math.abs(e.x - (null != (t = i.current) ? t : e.x)) &&
                  5 > Math.abs(e.y - (null != (s = a.current) ? s : e.y)))
              )
                return;
              let c = n(e);
              switch (c.kind) {
                case 0:
                  return;
                case 1:
                  e.timeStamp - u > 200 && (o(c.target), r());
                  break;
                case 2:
                  r();
              }
            },
            { capture: !0 },
          ));
      }
      var nX = n(36439),
        nJ = n(36439);
      function nZ(e, t, n, r) {
        let o = eF(n);
        (0, nJ.useEffect)(() => {
          function n(e) {
            o.current(e);
          }
          return (
            (e = null != e ? e : window).addEventListener(t, n, r),
            () => e.removeEventListener(t, n, r)
          );
        }, [e, t, r]);
      }
      function n0(e) {
        let t = (0, nX.useRef)({
          value: "",
          selectionStart: null,
          selectionEnd: null,
        });
        return (
          nZ(e, "blur", (e) => {
            let n = e.target;
            tm(n) &&
              (t.current = {
                value: n.value,
                selectionStart: n.selectionStart,
                selectionEnd: n.selectionEnd,
              });
          }),
          eM(() => {
            if (!ew(e) && tm(e) && e.isConnected) {
              if ((e.focus({ preventScroll: !0 }), e.value !== t.current.value))
                e.setSelectionRange(e.value.length, e.value.length);
              else {
                let { selectionStart: n, selectionEnd: r } = t.current;
                null !== n && null !== r && e.setSelectionRange(n, r);
              }
              t.current = {
                value: "",
                selectionStart: null,
                selectionEnd: null,
              };
            }
          })
        );
      }
      var n1 = n(36439);
      function n3(e, t) {
        return (0, n1.useMemo)(() => {
          var n;
          if (e.type) return e.type;
          let r = null != (n = e.as) ? n : "button";
          if (
            ("string" == typeof r && "button" === r.toLowerCase()) ||
            ((null == t ? void 0 : t.tagName) === "BUTTON" &&
              !t.hasAttribute("type"))
          )
            return "button";
        }, [e.type, e.as, t]);
      }
      var n4 = n(36439);
      function n6(e) {
        let t = {};
        for (let n of e) Object.assign(t, n(t));
        return t;
      }
      var n2 =
        ((lZ = () => new Map()),
        (l0 = {
          PUSH(e, t) {
            var n;
            let r =
              null != (n = this.get(e))
                ? n
                : {
                    doc: e,
                    count: 0,
                    d: eI(),
                    meta: new Set(),
                    computedMeta: {},
                  };
            return (
              r.count++,
              r.meta.add(t),
              (r.computedMeta = n6(r.meta)),
              this.set(e, r),
              this
            );
          },
          POP(e, t) {
            let n = this.get(e);
            return (
              n && (n.count--, n.meta.delete(t), (n.computedMeta = n6(n.meta))),
              this
            );
          },
          SCROLL_PREVENT(e) {
            let t,
              n = { doc: e.doc, d: e.d, meta: () => e.computedMeta },
              r = [
                nN()
                  ? {
                      before({ doc: e, d: t, meta: n }) {
                        function r(e) {
                          for (let t of n().containers)
                            for (let n of t()) if (n.contains(e)) return !0;
                          return !1;
                        }
                        t.microTask(() => {
                          var n;
                          if (
                            "auto" !==
                            window.getComputedStyle(e.documentElement)
                              .scrollBehavior
                          ) {
                            let n = eI();
                            (n.style(
                              e.documentElement,
                              "scrollBehavior",
                              "auto",
                            ),
                              t.add(() => t.microTask(() => n.dispose())));
                          }
                          let o =
                              null != (n = window.scrollY)
                                ? n
                                : window.pageYOffset,
                            l = null;
                          (t.addEventListener(
                            e,
                            "click",
                            (t) => {
                              if (tv(t.target))
                                try {
                                  let n = t.target.closest("a");
                                  if (!n) return;
                                  let { hash: o } = new URL(n.href),
                                    i = e.querySelector(o);
                                  tv(i) && !r(i) && (l = i);
                                } catch {}
                            },
                            !0,
                          ),
                            t.group((n) => {
                              t.addEventListener(e, "touchstart", (e) => {
                                var t;
                                if (
                                  (n.dispose(),
                                  tv(e.target) &&
                                    tf((t = e.target)) &&
                                    "style" in t)
                                )
                                  if (r(e.target)) {
                                    let t = e.target;
                                    for (
                                      ;
                                      t.parentElement && r(t.parentElement);
                                    )
                                      t = t.parentElement;
                                    n.style(t, "overscrollBehavior", "contain");
                                  } else
                                    n.style(e.target, "touchAction", "none");
                              });
                            }),
                            t.addEventListener(
                              e,
                              "touchmove",
                              (e) => {
                                if (tv(e.target) && !tm(e.target))
                                  if (r(e.target)) {
                                    let t = e.target;
                                    for (
                                      ;
                                      t.parentElement &&
                                      "" !== t.dataset.headlessuiPortal &&
                                      !(
                                        t.scrollHeight > t.clientHeight ||
                                        t.scrollWidth > t.clientWidth
                                      );
                                    )
                                      t = t.parentElement;
                                    "" === t.dataset.headlessuiPortal &&
                                      e.preventDefault();
                                  } else e.preventDefault();
                              },
                              { passive: !1 },
                            ),
                            t.add(() => {
                              var e;
                              (o !==
                                (null != (e = window.scrollY)
                                  ? e
                                  : window.pageYOffset) &&
                                window.scrollTo(0, o),
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
                  before({ doc: e }) {
                    var n;
                    let r = e.documentElement;
                    t = Math.max(
                      0,
                      (null != (n = e.defaultView) ? n : window).innerWidth -
                        r.clientWidth,
                    );
                  },
                  after({ doc: e, d: n }) {
                    let r = e.documentElement,
                      o = Math.max(0, r.clientWidth - r.offsetWidth),
                      l = Math.max(0, t - o);
                    n.style(r, "paddingRight", `${l}px`);
                  },
                },
                {
                  before({ doc: e, d: t }) {
                    t.style(e.documentElement, "overflow", "hidden");
                  },
                },
              ];
            (r.forEach(({ before: e }) => (null == e ? void 0 : e(n))),
              r.forEach(({ after: e }) => (null == e ? void 0 : e(n))));
          },
          SCROLL_ALLOW({ d: e }) {
            e.dispose();
          },
          TEARDOWN({ doc: e }) {
            this.delete(e);
          },
        }),
        (o = lZ()),
        (l = new Set()),
        {
          getSnapshot: () => o,
          subscribe: (e) => (l.add(e), () => l.delete(e)),
          dispatch(e, ...t) {
            let n = l0[e].call(o, ...t);
            n && ((o = n), l.forEach((e) => e()));
          },
        });
      function n9(e, t, n = () => [document.body]) {
        !(function (e, t, n = () => ({ containers: [] })) {
          let r = (0, n4.useSyncExternalStore)(
              n2.subscribe,
              n2.getSnapshot,
              n2.getSnapshot,
            ),
            o = t ? r.get(t) : void 0;
          (o && o.count,
            ek(() => {
              if (!(!t || !e))
                return (
                  n2.dispatch("PUSH", t, n),
                  () => n2.dispatch("POP", t, n)
                );
            }, [e, t]));
        })(ny(e, "scroll-lock"), t, (e) => {
          var t;
          return { containers: [...(null != (t = e.containers) ? t : []), n] };
        });
      }
      n2.subscribe(() => {
        let e = n2.getSnapshot(),
          t = new Map();
        for (let [n] of e) t.set(n, n.documentElement.style.overflow);
        for (let n of e.values()) {
          let e = "hidden" === t.get(n.doc),
            r = 0 !== n.count;
          (((r && !e) || (!r && e)) &&
            n2.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n),
            0 === n.count && n2.dispatch("TEARDOWN", n));
        }
      });
      var n5 = n(36439);
      function n8(e) {
        return [e.screenX, e.screenY];
      }
      function n7() {
        let e = (0, n5.useRef)([-1, -1]);
        return {
          wasMoved(t) {
            let n = n8(t);
            return (
              (e.current[0] !== n[0] || e.current[1] !== n[1]) &&
              ((e.current = n), !0)
            );
          },
          update(t) {
            e.current = n8(t);
          },
        };
      }
      var re = n(36439),
        rt = n(36439);
      function rn(e) {
        let t = {};
        for (let n in e) !0 === e[n] && (t[`data-${n}`] = "");
        return t;
      }
      function rr(e, t, n, r) {
        let [o, l] = (0, re.useState)(n),
          {
            hasFlag: i,
            addFlag: a,
            removeFlag: s,
          } = (function (e = 0) {
            let [t, n] = (0, rt.useState)(e),
              r = (0, rt.useCallback)((e) => n(e), []),
              o = (0, rt.useCallback)((e) => n((t) => t | e), []),
              l = (0, rt.useCallback)((e) => (t & e) === e, [t]);
            return {
              flags: t,
              setFlag: r,
              addFlag: o,
              hasFlag: l,
              removeFlag: (0, rt.useCallback)((e) => n((t) => t & ~e), []),
              toggleFlag: (0, rt.useCallback)((e) => n((t) => t ^ e), []),
            };
          })(e && o ? 3 : 0),
          u = (0, re.useRef)(!1),
          c = (0, re.useRef)(!1);
        return (
          ek(() => {
            var o;
            if (e) {
              if ((n && l(!0), !t)) {
                n && a(3);
                return;
              }
              return (
                null == (o = null == r ? void 0 : r.start) || o.call(r, n),
                (function (e, { prepare: t, run: n, done: r, inFlight: o }) {
                  let l = eI();
                  return (
                    (function (e, { inFlight: t, prepare: n }) {
                      if (null != t && t.current) return n();
                      let r = e.style.transition;
                      ((e.style.transition = "none"),
                        n(),
                        e.offsetHeight,
                        (e.style.transition = r));
                    })(e, { prepare: t, inFlight: o }),
                    l.nextFrame(() => {
                      (n(),
                        l.requestAnimationFrame(() => {
                          l.add(
                            (function (e, t) {
                              var n, r;
                              let o = eI();
                              if (!e) return o.dispose;
                              let l = !1;
                              o.add(() => {
                                l = !0;
                              });
                              let i =
                                null !=
                                (r =
                                  null == (n = e.getAnimations)
                                    ? void 0
                                    : n
                                        .call(e)
                                        .filter(
                                          (e) => e instanceof CSSTransition,
                                        ))
                                  ? r
                                  : [];
                              return (
                                0 === i.length
                                  ? t()
                                  : Promise.allSettled(
                                      i.map((e) => e.finished),
                                    ).then(() => {
                                      l || t();
                                    }),
                                o.dispose
                              );
                            })(e, r),
                          );
                        }));
                    }),
                    l.dispose
                  );
                })(t, {
                  inFlight: u,
                  prepare() {
                    (c.current ? (c.current = !1) : (c.current = u.current),
                      (u.current = !0),
                      c.current || (n ? (a(3), s(4)) : (a(4), s(2))));
                  },
                  run() {
                    c.current
                      ? n
                        ? (s(3), a(4))
                        : (s(4), a(3))
                      : n
                        ? s(1)
                        : a(1);
                  },
                  done() {
                    var e, o, i, a;
                    (c.current &&
                      (null !=
                      (a =
                        null == (i = (o = t).getAnimations)
                          ? void 0
                          : i.call(o))
                        ? a
                        : []
                      ).some(
                        (e) =>
                          e instanceof CSSTransition &&
                          "finished" !== e.playState,
                      )) ||
                      ((u.current = !1),
                      s(7),
                      n || l(!1),
                      null == (e = null == r ? void 0 : r.end) || e.call(r, n));
                  },
                })
              );
            }
          }, [e, n, t, eT()]),
          e
            ? [
                o,
                {
                  closed: i(1),
                  enter: i(2),
                  leave: i(4),
                  transition: i(2) || i(4),
                },
              ]
            : [
                n,
                {
                  closed: void 0,
                  enter: void 0,
                  leave: void 0,
                  transition: void 0,
                },
              ]
        );
      }
      void 0 !== a &&
        "u" > typeof globalThis &&
        "u" > typeof Element &&
        (null == (l1 = null == a ? void 0 : a.env) ? void 0 : l1.NODE_ENV) ===
          "test" &&
        void 0 ===
          (null == (l3 = null == Element ? void 0 : Element.prototype)
            ? void 0
            : l3.getAnimations) &&
        (Element.prototype.getAnimations = function () {
          return (
            console.warn(
              [
                "Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.",
                "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.",
                "",
                "Example usage:",
                "```js",
                "import { mockAnimationsApi } from 'jsdom-testing-mocks'",
                "mockAnimationsApi()",
                "```",
              ].join(`
`),
            ),
            []
          );
        });
      var ro = n(36439);
      function rl(e, { container: t, accept: n, walk: r }) {
        let o = (0, ro.useRef)(n),
          l = (0, ro.useRef)(r);
        ((0, ro.useEffect)(() => {
          ((o.current = n), (l.current = r));
        }, [n, r]),
          ek(() => {
            if (!t || !e) return;
            let n = ey(t);
            if (!n) return;
            let r = o.current,
              i = l.current,
              a = Object.assign((e) => r(e), { acceptNode: r }),
              s = n.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, a, !1);
            for (; s.nextNode(); ) i(s.currentNode);
          }, [t, e, o, l]));
      }
      var ri = n(36439);
      function ra(e, t) {
        let n = (0, ri.useRef)([]),
          r = eM(e);
        (0, ri.useEffect)(() => {
          let e = [...n.current];
          for (let [o, l] of t.entries())
            if (n.current[o] !== l) {
              let o = r(t, e);
              return ((n.current = t), o);
            }
        }, [r, ...t]);
      }
      var rs = m(n(36439), 1),
        ru = n(36439);
      function rc(e) {
        var t;
        return (
          e instanceof Element ||
          e instanceof
            (
              (null == e || null == (t = e.ownerDocument)
                ? void 0
                : t.defaultView) || window
            ).Element
        );
      }
      var rd = Math.min,
        rf = Math.max,
        rp = Math.round,
        rv = Math.floor,
        rm = (e) => ({ x: e, y: e }),
        rh = { left: "right", right: "left", bottom: "top", top: "bottom" },
        rb = { start: "end", end: "start" };
      function rg(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function ry(e) {
        return e.split("-")[0];
      }
      function rx(e) {
        return e.split("-")[1];
      }
      function rE(e) {
        return "x" === e ? "y" : "x";
      }
      function rw(e) {
        return "y" === e ? "height" : "width";
      }
      function rS(e) {
        return ["top", "bottom"].includes(ry(e)) ? "y" : "x";
      }
      function rP(e) {
        return e.replace(/start|end/g, (e) => rb[e]);
      }
      function rI(e) {
        return e.replace(/left|right|bottom|top/g, (e) => rh[e]);
      }
      function rT(e) {
        return {
          ...e,
          top: e.y,
          left: e.x,
          right: e.x + e.width,
          bottom: e.y + e.height,
        };
      }
      function rC(e, t, n) {
        let { reference: r, floating: o } = e,
          l = rS(t),
          i = rE(rS(t)),
          a = rw(i),
          s = ry(t),
          u = "y" === l,
          c = r.x + r.width / 2 - o.width / 2,
          d = r.y + r.height / 2 - o.height / 2,
          f = r[a] / 2 - o[a] / 2,
          p;
        switch (s) {
          case "top":
            p = { x: c, y: r.y - o.height };
            break;
          case "bottom":
            p = { x: c, y: r.y + r.height };
            break;
          case "right":
            p = { x: r.x + r.width, y: d };
            break;
          case "left":
            p = { x: r.x - o.width, y: d };
            break;
          default:
            p = { x: r.x, y: r.y };
        }
        switch (rx(t)) {
          case "start":
            p[i] -= f * (n && u ? -1 : 1);
            break;
          case "end":
            p[i] += f * (n && u ? -1 : 1);
        }
        return p;
      }
      var rR = async (e, t, n) => {
        let {
            placement: r = "bottom",
            strategy: o = "absolute",
            middleware: l = [],
            platform: i,
          } = n,
          a = l.filter(Boolean),
          s = await (null == i.isRTL ? void 0 : i.isRTL(t)),
          u = await i.getElementRects({
            reference: e,
            floating: t,
            strategy: o,
          }),
          { x: c, y: d } = rC(u, r, s),
          f = r,
          p = {},
          v = 0;
        for (let n = 0; n < a.length; n++) {
          let { name: l, fn: m } = a[n],
            {
              x: h,
              y: b,
              data: g,
              reset: y,
            } = await m({
              x: c,
              y: d,
              initialPlacement: r,
              placement: f,
              strategy: o,
              middlewareData: p,
              rects: u,
              platform: i,
              elements: { reference: e, floating: t },
            });
          if (
            ((c = null != h ? h : c),
            (d = null != b ? b : d),
            (p = { ...p, [l]: { ...p[l], ...g } }),
            y && v <= 50)
          ) {
            (v++,
              "object" == typeof y &&
                (y.placement && (f = y.placement),
                y.rects &&
                  (u =
                    !0 === y.rects
                      ? await i.getElementRects({
                          reference: e,
                          floating: t,
                          strategy: o,
                        })
                      : y.rects),
                ({ x: c, y: d } = rC(u, f, s))),
              (n = -1));
            continue;
          }
        }
        return { x: c, y: d, placement: f, strategy: o, middlewareData: p };
      };
      async function rO(e, t) {
        var n, r;
        void 0 === t && (t = {});
        let { x: o, y: l, platform: i, rects: a, elements: s, strategy: u } = e,
          {
            boundary: c = "clippingAncestors",
            rootBoundary: d = "viewport",
            elementContext: f = "floating",
            altBoundary: p = !1,
            padding: v = 0,
          } = rg(t, e),
          m =
            "number" != typeof (r = v)
              ? { top: 0, right: 0, bottom: 0, left: 0, ...r }
              : { top: r, right: r, bottom: r, left: r },
          h = s[p ? ("floating" === f ? "reference" : "floating") : f],
          b = rT(
            await i.getClippingRect({
              element:
                null ==
                  (n = await (null == i.isElement ? void 0 : i.isElement(h))) ||
                n
                  ? h
                  : h.contextElement ||
                    (await (null == i.getDocumentElement
                      ? void 0
                      : i.getDocumentElement(s.floating))),
              boundary: c,
              rootBoundary: d,
              strategy: u,
            }),
          ),
          g = "floating" === f ? { ...a.floating, x: o, y: l } : a.reference,
          y = await (null == i.getOffsetParent
            ? void 0
            : i.getOffsetParent(s.floating)),
          x = ((await (null == i.isElement ? void 0 : i.isElement(y))) &&
            (await (null == i.getScale ? void 0 : i.getScale(y)))) || {
            x: 1,
            y: 1,
          },
          E = rT(
            i.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                  rect: g,
                  offsetParent: y,
                  strategy: u,
                })
              : g,
          );
        return {
          top: (b.top - E.top + m.top) / x.y,
          bottom: (E.bottom - b.bottom + m.bottom) / x.y,
          left: (b.left - E.left + m.left) / x.x,
          right: (E.right - b.right + m.right) / x.x,
        };
      }
      async function rk(e, t) {
        let { placement: n, platform: r, elements: o } = e,
          l = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)),
          i = ry(n),
          a = rx(n),
          s = "y" === rS(n),
          u = ["left", "top"].includes(i) ? -1 : 1,
          c = l && s ? -1 : 1,
          d = rg(t, e),
          {
            mainAxis: f,
            crossAxis: p,
            alignmentAxis: v,
          } = "number" == typeof d
            ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
            : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...d };
        return (
          a && "number" == typeof v && (p = "end" === a ? -1 * v : v),
          s ? { x: p * c, y: f * u } : { x: f * u, y: p * c }
        );
      }
      function rF(e) {
        return rA(e) ? (e.nodeName || "").toLowerCase() : "#document";
      }
      function rM(e) {
        var t;
        return (
          (null == e || null == (t = e.ownerDocument)
            ? void 0
            : t.defaultView) || window
        );
      }
      function rD(e) {
        var t;
        return null ==
          (t = (rA(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function rA(e) {
        return e instanceof Node || e instanceof rM(e).Node;
      }
      function rL(e) {
        return e instanceof Element || e instanceof rM(e).Element;
      }
      function r_(e) {
        return e instanceof HTMLElement || e instanceof rM(e).HTMLElement;
      }
      function rN(e) {
        return (
          "u" > typeof ShadowRoot &&
          (e instanceof ShadowRoot || e instanceof rM(e).ShadowRoot)
        );
      }
      function rB(e) {
        let { overflow: t, overflowX: n, overflowY: r, display: o } = rV(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
          !["inline", "contents"].includes(o)
        );
      }
      function rj(e) {
        let t = rH(),
          n = rV(e);
        return (
          "none" !== n.transform ||
          "none" !== n.perspective ||
          (!!n.containerType && "normal" !== n.containerType) ||
          (!t && !!n.backdropFilter && "none" !== n.backdropFilter) ||
          (!t && !!n.filter && "none" !== n.filter) ||
          ["transform", "perspective", "filter"].some((e) =>
            (n.willChange || "").includes(e),
          ) ||
          ["paint", "layout", "strict", "content"].some((e) =>
            (n.contain || "").includes(e),
          )
        );
      }
      function rH() {
        return (
          "u" > typeof CSS &&
          !!CSS.supports &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function r$(e) {
        return ["html", "body", "#document"].includes(rF(e));
      }
      function rV(e) {
        return rM(e).getComputedStyle(e);
      }
      function rz(e) {
        return rL(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
      }
      function rW(e) {
        if ("html" === rF(e)) return e;
        let t = e.assignedSlot || e.parentNode || (rN(e) && e.host) || rD(e);
        return rN(t) ? t.host : t;
      }
      function rG(e, t, n) {
        var r;
        (void 0 === t && (t = []), void 0 === n && (n = !0));
        let o = (function e(t) {
            let n = rW(t);
            return r$(n)
              ? t.ownerDocument
                ? t.ownerDocument.body
                : t.body
              : r_(n) && rB(n)
                ? n
                : e(n);
          })(e),
          l = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          i = rM(o);
        return l
          ? t.concat(
              i,
              i.visualViewport || [],
              rB(o) ? o : [],
              i.frameElement && n ? rG(i.frameElement) : [],
            )
          : t.concat(o, rG(o, [], n));
      }
      function rK(e) {
        let t = rV(e),
          n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0,
          o = r_(e),
          l = o ? e.offsetWidth : n,
          i = o ? e.offsetHeight : r,
          a = rp(n) !== l || rp(r) !== i;
        return (a && ((n = l), (r = i)), { width: n, height: r, $: a });
      }
      function rU(e) {
        return rL(e) ? e : e.contextElement;
      }
      function rq(e) {
        let t = rU(e);
        if (!r_(t)) return rm(1);
        let n = t.getBoundingClientRect(),
          { width: r, height: o, $: l } = rK(t),
          i = (l ? rp(n.width) : n.width) / r,
          a = (l ? rp(n.height) : n.height) / o;
        return (
          (i && Number.isFinite(i)) || (i = 1),
          (a && Number.isFinite(a)) || (a = 1),
          { x: i, y: a }
        );
      }
      var rY = rm(0);
      function rQ(e) {
        let t = rM(e);
        return rH() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : rY;
      }
      function rX(e, t, n, r) {
        var o;
        (void 0 === t && (t = !1), void 0 === n && (n = !1));
        let l = e.getBoundingClientRect(),
          i = rU(e),
          a = rm(1);
        t && (r ? rL(r) && (a = rq(r)) : (a = rq(e)));
        let s = (void 0 === (o = n) && (o = !1), r && (!o || r === rM(i)) && o)
            ? rQ(i)
            : rm(0),
          u = (l.left + s.x) / a.x,
          c = (l.top + s.y) / a.y,
          d = l.width / a.x,
          f = l.height / a.y;
        if (i) {
          let e = rM(i),
            t = r && rL(r) ? rM(r) : r,
            n = e.frameElement;
          for (; n && r && t !== e; ) {
            let e = rq(n),
              t = n.getBoundingClientRect(),
              r = rV(n),
              o = t.left + (n.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              l = t.top + (n.clientTop + parseFloat(r.paddingTop)) * e.y;
            ((u *= e.x),
              (c *= e.y),
              (d *= e.x),
              (f *= e.y),
              (u += o),
              (c += l),
              (n = rM(n).frameElement));
          }
        }
        return rT({ width: d, height: f, x: u, y: c });
      }
      function rJ(e) {
        return rX(rD(e)).left + rz(e).scrollLeft;
      }
      function rZ(e, t, n) {
        var r;
        let o;
        if ("viewport" === t)
          o = (function (e, t) {
            let n = rM(e),
              r = rD(e),
              o = n.visualViewport,
              l = r.clientWidth,
              i = r.clientHeight,
              a = 0,
              s = 0;
            if (o) {
              ((l = o.width), (i = o.height));
              let e = rH();
              (!e || (e && "fixed" === t)) &&
                ((a = o.offsetLeft), (s = o.offsetTop));
            }
            return { width: l, height: i, x: a, y: s };
          })(e, n);
        else if ("document" === t) {
          let t, n, l, i, a, s, u;
          ((r = rD(e)),
            (t = rD(r)),
            (n = rz(r)),
            (l = r.ownerDocument.body),
            (i = rf(
              t.scrollWidth,
              t.clientWidth,
              l.scrollWidth,
              l.clientWidth,
            )),
            (a = rf(
              t.scrollHeight,
              t.clientHeight,
              l.scrollHeight,
              l.clientHeight,
            )),
            (s = -n.scrollLeft + rJ(r)),
            (u = -n.scrollTop),
            "rtl" === rV(l).direction &&
              (s += rf(t.clientWidth, l.clientWidth) - i),
            (o = { width: i, height: a, x: s, y: u }));
        } else if (rL(t)) {
          let e, r, l, i;
          ((r = (e = rX(t, !0, "fixed" === n)).top + t.clientTop),
            (l = e.left + t.clientLeft),
            (i = r_(t) ? rq(t) : rm(1)),
            (o = {
              width: t.clientWidth * i.x,
              height: t.clientHeight * i.y,
              x: l * i.x,
              y: r * i.y,
            }));
        } else {
          let n = rQ(e);
          o = { ...t, x: t.x - n.x, y: t.y - n.y };
        }
        return rT(o);
      }
      function r0(e, t) {
        return r_(e) && "fixed" !== rV(e).position
          ? t
            ? t(e)
            : e.offsetParent
          : null;
      }
      function r1(e, t) {
        let n = rM(e);
        if (!r_(e)) return n;
        let r = r0(e, t);
        for (
          ;
          r &&
          ["table", "td", "th"].includes(rF(r)) &&
          "static" === rV(r).position;
        )
          r = r0(r, t);
        return r &&
          ("html" === rF(r) ||
            ("body" === rF(r) && "static" === rV(r).position && !rj(r)))
          ? n
          : r ||
              (function (e) {
                let t = rW(e);
                for (; r_(t) && !r$(t); ) {
                  if (rj(t)) return t;
                  t = rW(t);
                }
                return null;
              })(e) ||
              n;
      }
      var r3 = async function (e) {
          let { reference: t, floating: n, strategy: r } = e,
            o = this.getOffsetParent || r1,
            l = this.getDimensions;
          return {
            reference: (function (e, t, n) {
              let r = r_(t),
                o = rD(t),
                l = "fixed" === n,
                i = rX(e, !0, l, t),
                a = { scrollLeft: 0, scrollTop: 0 },
                s = rm(0);
              if (r || (!r && !l))
                if ((("body" !== rF(t) || rB(o)) && (a = rz(t)), r)) {
                  let e = rX(t, !0, l, t);
                  ((s.x = e.x + t.clientLeft), (s.y = e.y + t.clientTop));
                } else o && (s.x = rJ(o));
              return {
                x: i.left + a.scrollLeft - s.x,
                y: i.top + a.scrollTop - s.y,
                width: i.width,
                height: i.height,
              };
            })(t, await o(n), r),
            floating: { x: 0, y: 0, ...(await l(n)) },
          };
        },
        r4 = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { rect: t, offsetParent: n, strategy: r } = e,
              o = r_(n),
              l = rD(n);
            if (n === l) return t;
            let i = { scrollLeft: 0, scrollTop: 0 },
              a = rm(1),
              s = rm(0);
            if (
              (o || (!o && "fixed" !== r)) &&
              (("body" !== rF(n) || rB(l)) && (i = rz(n)), r_(n))
            ) {
              let e = rX(n);
              ((a = rq(n)),
                (s.x = e.x + n.clientLeft),
                (s.y = e.y + n.clientTop));
            }
            return {
              width: t.width * a.x,
              height: t.height * a.y,
              x: t.x * a.x - i.scrollLeft * a.x + s.x,
              y: t.y * a.y - i.scrollTop * a.y + s.y,
            };
          },
          getDocumentElement: rD,
          getClippingRect: function (e) {
            let { element: t, boundary: n, rootBoundary: r, strategy: o } = e,
              l = [
                ...("clippingAncestors" === n
                  ? (function (e, t) {
                      let n = t.get(e);
                      if (n) return n;
                      let r = rG(e, [], !1).filter(
                          (e) => rL(e) && "body" !== rF(e),
                        ),
                        o = null,
                        l = "fixed" === rV(e).position,
                        i = l ? rW(e) : e;
                      for (; rL(i) && !r$(i); ) {
                        let t = rV(i),
                          n = rj(i);
                        (n || "fixed" !== t.position || (o = null),
                          (
                            l
                              ? !n && !o
                              : (!n &&
                                  "static" === t.position &&
                                  !!o &&
                                  ["absolute", "fixed"].includes(o.position)) ||
                                (rB(i) &&
                                  !n &&
                                  (function e(t, n) {
                                    let r = rW(t);
                                    return (
                                      !(r === n || !rL(r) || r$(r)) &&
                                      ("fixed" === rV(r).position || e(r, n))
                                    );
                                  })(e, i))
                          )
                            ? (r = r.filter((e) => e !== i))
                            : (o = t),
                          (i = rW(i)));
                      }
                      return (t.set(e, r), r);
                    })(t, this._c)
                  : [].concat(n)),
                r,
              ],
              i = l[0],
              a = l.reduce(
                (e, n) => {
                  let r = rZ(t, n, o);
                  return (
                    (e.top = rf(r.top, e.top)),
                    (e.right = rd(r.right, e.right)),
                    (e.bottom = rd(r.bottom, e.bottom)),
                    (e.left = rf(r.left, e.left)),
                    e
                  );
                },
                rZ(t, i, o),
              );
            return {
              width: a.right - a.left,
              height: a.bottom - a.top,
              x: a.left,
              y: a.top,
            };
          },
          getOffsetParent: r1,
          getElementRects: r3,
          getClientRects: function (e) {
            return Array.from(e.getClientRects());
          },
          getDimensions: function (e) {
            return rK(e);
          },
          getScale: rq,
          isElement: rL,
          isRTL: function (e) {
            return "rtl" === rV(e).direction;
          },
        };
      function r6(e, t, n, r) {
        void 0 === r && (r = {});
        let {
            ancestorScroll: o = !0,
            ancestorResize: l = !0,
            elementResize: i = "function" == typeof ResizeObserver,
            layoutShift: a = "function" == typeof IntersectionObserver,
            animationFrame: s = !1,
          } = r,
          u = rU(e),
          c = o || l ? [...(u ? rG(u) : []), ...rG(t)] : [];
        c.forEach((e) => {
          (o && e.addEventListener("scroll", n, { passive: !0 }),
            l && e.addEventListener("resize", n));
        });
        let d =
            u && a
              ? (function (e, t) {
                  let n = null,
                    r,
                    o = rD(e);
                  function l() {
                    (clearTimeout(r), n && n.disconnect(), (n = null));
                  }
                  return (
                    (function i(a, s) {
                      (void 0 === a && (a = !1), void 0 === s && (s = 1), l());
                      let {
                        left: u,
                        top: c,
                        width: d,
                        height: f,
                      } = e.getBoundingClientRect();
                      if ((a || t(), !d || !f)) return;
                      let p = {
                          rootMargin:
                            -rv(c) +
                            "px " +
                            -rv(o.clientWidth - (u + d)) +
                            "px " +
                            -rv(o.clientHeight - (c + f)) +
                            "px " +
                            -rv(u) +
                            "px",
                          threshold: rf(0, rd(1, s)) || 1,
                        },
                        v = !0;
                      function m(e) {
                        let t = e[0].intersectionRatio;
                        if (t !== s) {
                          if (!v) return i();
                          t
                            ? i(!1, t)
                            : (r = setTimeout(() => {
                                i(!1, 1e-7);
                              }, 100));
                        }
                        v = !1;
                      }
                      try {
                        n = new IntersectionObserver(m, {
                          ...p,
                          root: o.ownerDocument,
                        });
                      } catch {
                        n = new IntersectionObserver(m, p);
                      }
                      n.observe(e);
                    })(!0),
                    l
                  );
                })(u, n)
              : null,
          f = -1,
          p = null;
        i &&
          ((p = new ResizeObserver((e) => {
            let [r] = e;
            (r &&
              r.target === u &&
              p &&
              (p.unobserve(t),
              cancelAnimationFrame(f),
              (f = requestAnimationFrame(() => {
                p && p.observe(t);
              }))),
              n());
          })),
          u && !s && p.observe(u),
          p.observe(t));
        let v,
          m = s ? rX(e) : null;
        return (
          s &&
            (function t() {
              let r = rX(e);
              (m &&
                (r.x !== m.x ||
                  r.y !== m.y ||
                  r.width !== m.width ||
                  r.height !== m.height) &&
                n(),
                (m = r),
                (v = requestAnimationFrame(t)));
            })(),
          n(),
          () => {
            (c.forEach((e) => {
              (o && e.removeEventListener("scroll", n),
                l && e.removeEventListener("resize", n));
            }),
              d && d(),
              p && p.disconnect(),
              (p = null),
              s && cancelAnimationFrame(v));
          }
        );
      }
      var r2 = m(n(36439), 1),
        r9 = n(36439),
        r5 = m(n(72354), 1),
        r8 = "u" > typeof document ? r9.useLayoutEffect : r9.useEffect;
      function r7(e, t) {
        let n, r, o;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if ((n = e.length) !== t.length) return !1;
            for (r = n; 0 != r--; ) if (!r7(e[r], t[r])) return !1;
            return !0;
          }
          if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (r = n; 0 != r--; )
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--; ) {
            let n = o[r];
            if (!("_owner" === n && e.$$typeof) && !r7(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function oe(e) {
        return "u" < typeof window
          ? 1
          : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function ot(e, t) {
        let n = oe(e);
        return Math.round(t * n) / n;
      }
      function on(e) {
        let t = r2.useRef(e);
        return (
          r8(() => {
            t.current = e;
          }),
          t
        );
      }
      var or = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = 0),
            {
              name: "offset",
              options: n,
              async fn(e) {
                var t, r;
                let { x: o, y: l, placement: i, middlewareData: a } = e,
                  s = await rk(e, n);
                return i === (null == (t = a.offset) ? void 0 : t.placement) &&
                  null != (r = a.arrow) &&
                  r.alignmentOffset
                  ? {}
                  : { x: o + s.x, y: l + s.y, data: { ...s, placement: i } };
              },
            }),
            options: [e, t],
          };
        },
        oo = n(72354),
        ol = { ...rs },
        oi = ol.useInsertionEffect || ((e) => e());
      function oa(e) {
        let t = rs.useRef(() => {});
        return (
          oi(() => {
            t.current = e;
          }),
          rs.useCallback(function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            return null == t.current ? void 0 : t.current(...n);
          }, [])
        );
      }
      var os = "u" > typeof document ? ru.useLayoutEffect : ru.useEffect,
        ou = !1,
        oc = 0,
        od = () =>
          "floating-ui-" + Math.random().toString(36).slice(2, 6) + oc++,
        of =
          ol.useId ||
          function () {
            let [e, t] = rs.useState(() => (ou ? od() : void 0));
            return (
              os(() => {
                null == e && t(od());
              }, []),
              rs.useEffect(() => {
                ou = !0;
              }, []),
              e
            );
          },
        op = rs.createContext(null),
        ov = rs.createContext(null),
        om = "active",
        oh = "selected";
      function ob(e, t, n) {
        let r = new Map(),
          o = "item" === n,
          l = e;
        if (o && e) {
          let { [om]: t, [oh]: n, ...r } = e;
          l = r;
        }
        return {
          ...("floating" === n && { tabIndex: -1 }),
          ...l,
          ...t
            .map((t) => {
              let r = t ? t[n] : null;
              return "function" == typeof r ? (e ? r(e) : null) : r;
            })
            .concat(e)
            .reduce(
              (e, t) => (
                t &&
                  Object.entries(t).forEach((t) => {
                    let [n, l] = t;
                    if (!(o && [om, oh].includes(n)))
                      if (0 === n.indexOf("on")) {
                        if (
                          (r.has(n) || r.set(n, []), "function" == typeof l)
                        ) {
                          var i;
                          (null == (i = r.get(n)) || i.push(l),
                            (e[n] = function () {
                              for (
                                var e,
                                  t = arguments.length,
                                  o = Array(t),
                                  l = 0;
                                l < t;
                                l++
                              )
                                o[l] = arguments[l];
                              return null == (e = r.get(n))
                                ? void 0
                                : e
                                    .map((e) => e(...o))
                                    .find((e) => void 0 !== e);
                            }));
                        }
                      } else e[n] = l;
                  }),
                e
              ),
              {},
            ),
        };
      }
      function og(e, t) {
        return {
          ...e,
          rects: { ...e.rects, floating: { ...e.rects.floating, height: t } },
        };
      }
      var oy = m(n(36439), 1),
        ox = n(36439),
        oE = (0, ox.createContext)({
          styles: void 0,
          setReference: () => {},
          setFloating: () => {},
          getReferenceProps: () => ({}),
          getFloatingProps: () => ({}),
          slot: {},
        });
      oE.displayName = "FloatingContext";
      var ow = (0, ox.createContext)(null);
      function oS(e) {
        return (0, ox.useMemo)(
          () => (e ? ("string" == typeof e ? { to: e } : e) : null),
          [e],
        );
      }
      function oP() {
        return (0, ox.useContext)(oE).setReference;
      }
      function oI() {
        return (0, ox.useContext)(oE).getReferenceProps;
      }
      function oT() {
        let { getFloatingProps: e, slot: t } = (0, ox.useContext)(oE);
        return (0, ox.useCallback)(
          (...n) => Object.assign({}, e(...n), { "data-anchor": t.anchor }),
          [e, t],
        );
      }
      function oC(e = null) {
        (!1 === e && (e = null), "string" == typeof e && (e = { to: e }));
        let t = (0, ox.useContext)(ow),
          n = (0, ox.useMemo)(
            () => e,
            [
              JSON.stringify(e, (e, t) => {
                var n;
                return null != (n = null == t ? void 0 : t.outerHTML) ? n : t;
              }),
            ],
          );
        ek(() => {
          null == t || t(null != n ? n : null);
        }, [t, n]);
        let r = (0, ox.useContext)(oE);
        return (0, ox.useMemo)(
          () => [r.setFloating, e ? r.styles : {}],
          [r.setFloating, e, r.styles],
        );
      }
      function oR({ children: e, enabled: t = !0 }) {
        var n, r, o, l, i, a, s, u, c, d, f, p, v;
        let m,
          h,
          b,
          g,
          y,
          x,
          E,
          [w, S] = (0, ox.useState)(null),
          [P, I] = (0, ox.useState)(0),
          T = (0, ox.useRef)(null),
          [C, R] = (0, ox.useState)(null);
        ek(() => {
          if (!u) return;
          let e = new MutationObserver(() => {
            let e = window.getComputedStyle(u).maxHeight,
              t = parseFloat(e);
            if (isNaN(t)) return;
            let n = parseInt(e);
            isNaN(n) || (t !== n && (u.style.maxHeight = `${Math.ceil(t)}px`));
          });
          return (
            e.observe(u, { attributes: !0, attributeFilter: ["style"] }),
            () => {
              e.disconnect();
            }
          );
        }, [(u = C)]);
        let O = t && null !== w && null !== C,
          {
            to: k = "bottom",
            gap: F = 0,
            offset: M = 0,
            padding: D = 0,
            inner: A,
          } = ((c = w),
          (d = C),
          (m = oO(
            null != (f = null == c ? void 0 : c.gap)
              ? f
              : "var(--anchor-gap, 0)",
            d,
          )),
          (h = oO(
            null != (p = null == c ? void 0 : c.offset)
              ? p
              : "var(--anchor-offset, 0)",
            d,
          )),
          (b = oO(
            null != (v = null == c ? void 0 : c.padding)
              ? v
              : "var(--anchor-padding, 0)",
            d,
          )),
          { ...c, gap: m, offset: h, padding: b }),
          [L, _ = "center"] = k.split(" ");
        ek(() => {
          O && I(0);
        }, [O]);
        let {
            refs: N,
            floatingStyles: B,
            context: j,
          } = (function (e) {
            void 0 === e && (e = {});
            let { nodeId: t } = e,
              n = (function (e) {
                var t;
                let { open: n = !1, onOpenChange: r, elements: o } = e,
                  l = of(),
                  i = rs.useRef({}),
                  [a] = rs.useState(() => {
                    let e;
                    return (
                      (e = new Map()),
                      {
                        emit(t, n) {
                          var r;
                          null == (r = e.get(t)) || r.forEach((e) => e(n));
                        },
                        on(t, n) {
                          e.set(t, [...(e.get(t) || []), n]);
                        },
                        off(t, n) {
                          var r;
                          e.set(
                            t,
                            (null == (r = e.get(t))
                              ? void 0
                              : r.filter((e) => e !== n)) || [],
                          );
                        },
                      }
                    );
                  }),
                  s =
                    null !=
                    ((null == (t = rs.useContext(op)) ? void 0 : t.id) || null),
                  [u, c] = rs.useState(o.reference),
                  d = oa((e, t, n) => {
                    ((i.current.openEvent = e ? t : void 0),
                      a.emit("openchange", {
                        open: e,
                        event: t,
                        reason: n,
                        nested: s,
                      }),
                      null == r || r(e, t, n));
                  }),
                  f = rs.useMemo(() => ({ setPositionReference: c }), []),
                  p = rs.useMemo(
                    () => ({
                      reference: u || o.reference || null,
                      floating: o.floating || null,
                      domReference: o.reference,
                    }),
                    [u, o.reference, o.floating],
                  );
                return rs.useMemo(
                  () => ({
                    dataRef: i,
                    open: n,
                    onOpenChange: d,
                    elements: p,
                    events: a,
                    floatingId: l,
                    refs: f,
                  }),
                  [n, d, p, a, l, f],
                );
              })({
                ...e,
                elements: { reference: null, floating: null, ...e.elements },
              }),
              r = e.rootContext || n,
              o = r.elements,
              [l, i] = rs.useState(null),
              [a, s] = rs.useState(null),
              u = (null == o ? void 0 : o.reference) || l,
              c = rs.useRef(null),
              d = rs.useContext(ov);
            os(() => {
              u && (c.current = u);
            }, [u]);
            let f = (function (e) {
                void 0 === e && (e = {});
                let {
                    placement: t = "bottom",
                    strategy: n = "absolute",
                    middleware: r = [],
                    platform: o,
                    elements: { reference: l, floating: i } = {},
                    transform: a = !0,
                    whileElementsMounted: s,
                    open: u,
                  } = e,
                  [c, d] = r2.useState({
                    x: 0,
                    y: 0,
                    strategy: n,
                    placement: t,
                    middlewareData: {},
                    isPositioned: !1,
                  }),
                  [f, p] = r2.useState(r);
                r7(f, r) || p(r);
                let [v, m] = r2.useState(null),
                  [h, b] = r2.useState(null),
                  g = r2.useCallback((e) => {
                    e !== w.current && ((w.current = e), m(e));
                  }, []),
                  y = r2.useCallback((e) => {
                    e !== S.current && ((S.current = e), b(e));
                  }, []),
                  x = l || v,
                  E = i || h,
                  w = r2.useRef(null),
                  S = r2.useRef(null),
                  P = r2.useRef(c),
                  I = null != s,
                  T = on(s),
                  C = on(o),
                  R = r2.useCallback(() => {
                    var e, r;
                    let o, l, i;
                    if (!w.current || !S.current) return;
                    let a = { placement: t, strategy: n, middleware: f };
                    (C.current && (a.platform = C.current),
                      ((e = w.current),
                      (r = S.current),
                      (o = new Map()),
                      (i = { ...(l = { platform: r4, ...a }).platform, _c: o }),
                      rR(e, r, { ...l, platform: i })).then((e) => {
                        let t = { ...e, isPositioned: !0 };
                        O.current &&
                          !r7(P.current, t) &&
                          ((P.current = t),
                          r5.flushSync(() => {
                            d(t);
                          }));
                      }));
                  }, [f, t, n, C]);
                r8(() => {
                  !1 === u &&
                    P.current.isPositioned &&
                    ((P.current.isPositioned = !1),
                    d((e) => ({ ...e, isPositioned: !1 })));
                }, [u]);
                let O = r2.useRef(!1);
                (r8(
                  () => (
                    (O.current = !0),
                    () => {
                      O.current = !1;
                    }
                  ),
                  [],
                ),
                  r8(() => {
                    if ((x && (w.current = x), E && (S.current = E), x && E)) {
                      if (T.current) return T.current(x, E, R);
                      R();
                    }
                  }, [x, E, R, T, I]));
                let k = r2.useMemo(
                    () => ({
                      reference: w,
                      floating: S,
                      setReference: g,
                      setFloating: y,
                    }),
                    [g, y],
                  ),
                  F = r2.useMemo(() => ({ reference: x, floating: E }), [x, E]),
                  M = r2.useMemo(() => {
                    let e = { position: n, left: 0, top: 0 };
                    if (!F.floating) return e;
                    let t = ot(F.floating, c.x),
                      r = ot(F.floating, c.y);
                    return a
                      ? {
                          ...e,
                          transform: "translate(" + t + "px, " + r + "px)",
                          ...(oe(F.floating) >= 1.5 && {
                            willChange: "transform",
                          }),
                        }
                      : { position: n, left: t, top: r };
                  }, [n, a, F.floating, c.x, c.y]);
                return r2.useMemo(
                  () => ({
                    ...c,
                    update: R,
                    refs: k,
                    elements: F,
                    floatingStyles: M,
                  }),
                  [c, R, k, F, M],
                );
              })({ ...e, elements: { ...o, ...(a && { reference: a }) } }),
              p = rs.useCallback(
                (e) => {
                  let t = rc(e)
                    ? {
                        getBoundingClientRect: () => e.getBoundingClientRect(),
                        contextElement: e,
                      }
                    : e;
                  (s(t), f.refs.setReference(t));
                },
                [f.refs],
              ),
              v = rs.useCallback(
                (e) => {
                  ((rc(e) || null === e) && ((c.current = e), i(e)),
                    (rc(f.refs.reference.current) ||
                      null === f.refs.reference.current ||
                      (null !== e && !rc(e))) &&
                      f.refs.setReference(e));
                },
                [f.refs],
              ),
              m = rs.useMemo(
                () => ({
                  ...f.refs,
                  setReference: v,
                  setPositionReference: p,
                  domReference: c,
                }),
                [f.refs, v, p],
              ),
              h = rs.useMemo(
                () => ({ ...f.elements, domReference: u }),
                [f.elements, u],
              ),
              b = rs.useMemo(
                () => ({ ...f, ...r, refs: m, elements: h, nodeId: t }),
                [f, m, h, t, r],
              );
            return (
              os(() => {
                r.dataRef.current.floatingContext = b;
                let e =
                  null == d
                    ? void 0
                    : d.nodesRef.current.find((e) => e.id === t);
                e && (e.context = b);
              }),
              rs.useMemo(
                () => ({ ...f, context: b, refs: m, elements: h }),
                [f, m, h, b],
              )
            );
          })({
            open: O,
            placement:
              "selection" === L
                ? "center" === _
                  ? "bottom"
                  : `bottom-${_}`
                : "center" === _
                  ? `${L}`
                  : `${L}-${_}`,
            strategy: "absolute",
            transform: !1,
            middleware: [
              or({ mainAxis: "selection" === L ? 0 : F, crossAxis: M }),
              {
                ...{
                  name: "shift",
                  options: (r = n = { padding: D }),
                  async fn(e) {
                    let { x: t, y: n, placement: o } = e,
                      {
                        mainAxis: l = !0,
                        crossAxis: i = !1,
                        limiter: a = {
                          fn: (e) => {
                            let { x: t, y: n } = e;
                            return { x: t, y: n };
                          },
                        },
                        ...s
                      } = rg(r, e),
                      u = { x: t, y: n },
                      c = await rO(e, s),
                      d = rS(ry(o)),
                      f = rE(d),
                      p = u[f],
                      v = u[d];
                    if (l) {
                      let e = "y" === f ? "top" : "left",
                        t = "y" === f ? "bottom" : "right",
                        n = p + c[e],
                        r = p - c[t];
                      p = rf(n, rd(p, r));
                    }
                    if (i) {
                      let e = "y" === d ? "top" : "left",
                        t = "y" === d ? "bottom" : "right",
                        n = v + c[e],
                        r = v - c[t];
                      v = rf(n, rd(v, r));
                    }
                    let m = a.fn({ ...e, [f]: p, [d]: v });
                    return { ...m, data: { x: m.x - t, y: m.y - n } };
                  },
                },
                options: [n, void 0],
              },
              "selection" !== L && {
                ...{
                  name: "flip",
                  options: (l = o = { padding: D }),
                  async fn(e) {
                    var t, n, r, o, i, a, s, u;
                    let c,
                      d,
                      f,
                      {
                        placement: p,
                        middlewareData: v,
                        rects: m,
                        initialPlacement: h,
                        platform: b,
                        elements: g,
                      } = e,
                      {
                        mainAxis: y = !0,
                        crossAxis: x = !0,
                        fallbackPlacements: E,
                        fallbackStrategy: w = "bestFit",
                        fallbackAxisSideDirection: S = "none",
                        flipAlignment: P = !0,
                        ...I
                      } = rg(l, e);
                    if (null != (t = v.arrow) && t.alignmentOffset) return {};
                    let T = ry(p),
                      C = ry(h) === h,
                      R = await (null == b.isRTL
                        ? void 0
                        : b.isRTL(g.floating)),
                      O =
                        E ||
                        (C || !P ? [rI(h)] : ((c = rI(h)), [rP(h), c, rP(c)]));
                    E ||
                      "none" === S ||
                      O.push(
                        ...((d = rx(h)),
                        (f = (function (e, t, n) {
                          let r = ["left", "right"],
                            o = ["right", "left"];
                          switch (e) {
                            case "top":
                            case "bottom":
                              return n ? (t ? o : r) : t ? r : o;
                            case "left":
                            case "right":
                              return t ? ["top", "bottom"] : ["bottom", "top"];
                            default:
                              return [];
                          }
                        })(ry(h), "start" === S, R)),
                        d &&
                          ((f = f.map((e) => e + "-" + d)),
                          P && (f = f.concat(f.map(rP)))),
                        f),
                      );
                    let k = [h, ...O],
                      F = await rO(e, I),
                      M = [],
                      D = (null == (n = v.flip) ? void 0 : n.overflows) || [];
                    if ((y && M.push(F[T]), x)) {
                      let e,
                        t,
                        n,
                        r,
                        o =
                          ((a = p),
                          (s = m),
                          void 0 === (u = R) && (u = !1),
                          (e = rx(a)),
                          (n = rw((t = rE(rS(a))))),
                          (r =
                            "x" === t
                              ? e === (u ? "end" : "start")
                                ? "right"
                                : "left"
                              : "start" === e
                                ? "bottom"
                                : "top"),
                          s.reference[n] > s.floating[n] && (r = rI(r)),
                          [r, rI(r)]);
                      M.push(F[o[0]], F[o[1]]);
                    }
                    if (
                      ((D = [...D, { placement: p, overflows: M }]),
                      !M.every((e) => e <= 0))
                    ) {
                      let e =
                          ((null == (r = v.flip) ? void 0 : r.index) || 0) + 1,
                        t = k[e];
                      if (t)
                        return {
                          data: { index: e, overflows: D },
                          reset: { placement: t },
                        };
                      let n =
                        null ==
                        (o = D.filter((e) => e.overflows[0] <= 0).sort(
                          (e, t) => e.overflows[1] - t.overflows[1],
                        )[0])
                          ? void 0
                          : o.placement;
                      if (!n)
                        switch (w) {
                          case "bestFit": {
                            let e =
                              null ==
                              (i = D.map((e) => [
                                e.placement,
                                e.overflows
                                  .filter((e) => e > 0)
                                  .reduce((e, t) => e + t, 0),
                              ]).sort((e, t) => e[1] - t[1])[0])
                                ? void 0
                                : i[0];
                            e && (n = e);
                            break;
                          }
                          case "initialPlacement":
                            n = h;
                        }
                      if (p !== n) return { reset: { placement: n } };
                    }
                    return {};
                  },
                },
                options: [o, void 0],
              },
              "selection" === L && A
                ? {
                    name: "inner",
                    options: (g = {
                      ...A,
                      padding: D,
                      overflowRef: T,
                      offset: P,
                      minItemsVisible: 4,
                      referenceOverflowThreshold: D,
                      onFallbackChange(e) {
                        var t, n;
                        if (!e) return;
                        let r = j.elements.floating;
                        if (!r) return;
                        let o =
                            parseFloat(
                              getComputedStyle(r).scrollPaddingBottom,
                            ) || 0,
                          l = Math.min(4, r.childElementCount),
                          i = 0,
                          a = 0;
                        for (let e of null !=
                        (n =
                          null == (t = j.elements.floating)
                            ? void 0
                            : t.childNodes)
                          ? n
                          : [])
                          if (tp(e)) {
                            let t = e.offsetTop,
                              n = t + e.clientHeight + o,
                              s = r.scrollTop,
                              u = s + r.clientHeight;
                            if (t >= s && n <= u) l--;
                            else {
                              ((a = Math.max(
                                0,
                                Math.min(n, u) - Math.max(t, s),
                              )),
                                (i = e.clientHeight));
                              break;
                            }
                          }
                        l >= 1 &&
                          I((e) => {
                            let t = i * l - a + o;
                            return e >= t ? e : t;
                          });
                      },
                    }),
                    async fn(e) {
                      let {
                          listRef: t,
                          overflowRef: n,
                          onFallbackChange: r,
                          offset: o = 0,
                          index: l = 0,
                          minItemsVisible: i = 4,
                          referenceOverflowThreshold: a = 0,
                          scrollRef: s,
                          ...u
                        } = g,
                        {
                          rects: c,
                          elements: { floating: d },
                        } = e,
                        f = t.current[l];
                      if (!f) return {};
                      let p = {
                          ...e,
                          ...(await or(
                            -f.offsetTop -
                              d.clientTop -
                              c.reference.height / 2 -
                              f.offsetHeight / 2 -
                              o,
                          ).fn(e)),
                        },
                        v = (null == s ? void 0 : s.current) || d,
                        m = await rO(og(p, v.scrollHeight), u),
                        h = await rO(p, { ...u, elementContext: "reference" }),
                        b = Math.max(0, m.top),
                        y = p.y + b,
                        x = Math.max(
                          0,
                          v.scrollHeight - b - Math.max(0, m.bottom),
                        );
                      return (
                        (v.style.maxHeight = x + "px"),
                        (v.scrollTop = b),
                        r &&
                          (v.offsetHeight <
                            f.offsetHeight * Math.min(i, t.current.length - 1) -
                              1 ||
                          h.top >= -a ||
                          h.bottom >= -a
                            ? (0, oo.flushSync)(() => r(!0))
                            : (0, oo.flushSync)(() => r(!1))),
                        n &&
                          (n.current = await rO(
                            og({ ...p, y: y }, v.offsetHeight),
                            u,
                          )),
                        { y: y }
                      );
                    },
                  }
                : null,
              {
                ...{
                  name: "size",
                  options:
                    (a = i =
                      {
                        padding: D,
                        apply({
                          availableWidth: e,
                          availableHeight: t,
                          elements: n,
                        }) {
                          Object.assign(n.floating.style, {
                            overflow: "auto",
                            maxWidth: `${e}px`,
                            maxHeight: `min(var(--anchor-max-height, 100vh), ${t}px)`,
                          });
                        },
                      }),
                  async fn(e) {
                    let {
                        placement: t,
                        rects: n,
                        platform: r,
                        elements: o,
                      } = e,
                      { apply: l = () => {}, ...i } = rg(a, e),
                      s = await rO(e, i),
                      u = ry(t),
                      c = rx(t),
                      d = "y" === rS(t),
                      { width: f, height: p } = n.floating,
                      v,
                      m;
                    "top" === u || "bottom" === u
                      ? ((v = u),
                        (m =
                          c ===
                          ((await (null == r.isRTL
                            ? void 0
                            : r.isRTL(o.floating)))
                            ? "start"
                            : "end")
                            ? "left"
                            : "right"))
                      : ((m = u), (v = "end" === c ? "top" : "bottom"));
                    let h = p - s[v],
                      b = f - s[m],
                      g = !e.middlewareData.shift,
                      y = h,
                      x = b;
                    if (d) {
                      let e = f - s.left - s.right;
                      x = c || g ? rd(b, e) : e;
                    } else {
                      let e = p - s.top - s.bottom;
                      y = c || g ? rd(h, e) : e;
                    }
                    if (g && !c) {
                      let e = rf(s.left, 0),
                        t = rf(s.right, 0),
                        n = rf(s.top, 0),
                        r = rf(s.bottom, 0);
                      d
                        ? (x =
                            f -
                            2 *
                              (0 !== e || 0 !== t
                                ? e + t
                                : rf(s.left, s.right)))
                        : (y =
                            p -
                            2 *
                              (0 !== n || 0 !== r
                                ? n + r
                                : rf(s.top, s.bottom)));
                    }
                    await l({ ...e, availableWidth: x, availableHeight: y });
                    let E = await r.getDimensions(o.floating);
                    return f !== E.width || p !== E.height
                      ? { reset: { rects: !0 } }
                      : {};
                  },
                },
                options: [i, void 0],
              },
            ].filter(Boolean),
            whileElementsMounted: r6,
          }),
          [H = L, $ = _] = j.placement.split("-");
        "selection" === L && (H = "selection");
        let V = (0, ox.useMemo)(
            () => ({ anchor: [H, $].filter(Boolean).join(" ") }),
            [H, $],
          ),
          { getReferenceProps: z, getFloatingProps: W } =
            ((s = [
              (function (e, t) {
                let { open: n, elements: r } = e,
                  {
                    enabled: o = !0,
                    overflowRef: l,
                    scrollRef: i,
                    onChange: a,
                  } = t,
                  s = oa(a),
                  u = rs.useRef(!1),
                  c = rs.useRef(null),
                  d = rs.useRef(null);
                return (
                  rs.useEffect(() => {
                    if (!o) return;
                    function e(e) {
                      let n;
                      if (e.ctrlKey || !t || null == l.current) return;
                      let r = e.deltaY,
                        o = l.current.top >= -0.5,
                        i = l.current.bottom >= -0.5,
                        a = t.scrollHeight - t.clientHeight,
                        u = r < 0 ? -1 : 1,
                        c = r < 0 ? "max" : "min";
                      t.scrollHeight <= t.clientHeight ||
                        ((!o && r > 0) || (!i && r < 0)
                          ? (e.preventDefault(),
                            (0, oo.flushSync)(() => {
                              s((e) => e + Math[c](r, a * u));
                            }))
                          : /firefox/i.test(
                              (n = navigator.userAgentData) &&
                                Array.isArray(n.brands)
                                ? n.brands
                                    .map((e) => {
                                      let { brand: t, version: n } = e;
                                      return t + "/" + n;
                                    })
                                    .join(" ")
                                : navigator.userAgent,
                            ) && (t.scrollTop += r));
                    }
                    let t = (null == i ? void 0 : i.current) || r.floating;
                    if (n && t)
                      return (
                        t.addEventListener("wheel", e),
                        requestAnimationFrame(() => {
                          ((c.current = t.scrollTop),
                            null != l.current &&
                              (d.current = { ...l.current }));
                        }),
                        () => {
                          ((c.current = null),
                            (d.current = null),
                            t.removeEventListener("wheel", e));
                        }
                      );
                  }, [o, n, r.floating, l, i, s]),
                  rs.useMemo(
                    () =>
                      o
                        ? {
                            floating: {
                              onKeyDown() {
                                u.current = !0;
                              },
                              onWheel() {
                                u.current = !1;
                              },
                              onPointerMove() {
                                u.current = !1;
                              },
                              onScroll() {
                                let e =
                                  (null == i ? void 0 : i.current) ||
                                  r.floating;
                                if (!(!l.current || !e || !u.current)) {
                                  if (null !== c.current) {
                                    let t = e.scrollTop - c.current;
                                    ((l.current.bottom < -0.5 && t < -1) ||
                                      (l.current.top < -0.5 && t > 1)) &&
                                      (0, oo.flushSync)(() => s((e) => e + t));
                                  }
                                  requestAnimationFrame(() => {
                                    c.current = e.scrollTop;
                                  });
                                }
                              },
                            },
                          }
                        : {},
                    [o, l, r.floating, i, s],
                  )
                );
              })(j, { overflowRef: T, onChange: I }),
            ]),
            (y = rs.useCallback((e) => ob(e, s, "reference"), s)),
            (x = rs.useCallback((e) => ob(e, s, "floating"), s)),
            (E = rs.useCallback(
              (e) => ob(e, s, "item"),
              s.map((e) => (null == e ? void 0 : e.item)),
            )),
            rs.useMemo(
              () => ({
                getReferenceProps: y,
                getFloatingProps: x,
                getItemProps: E,
              }),
              [y, x, E],
            )),
          G = eM((e) => {
            (R(e), N.setFloating(e));
          });
        return oy.createElement(
          ow.Provider,
          { value: S },
          oy.createElement(
            oE.Provider,
            {
              value: {
                setFloating: G,
                setReference: N.setReference,
                styles: B,
                getReferenceProps: z,
                getFloatingProps: W,
                slot: V,
              },
            },
            e,
          ),
        );
      }
      function oO(e, t, n) {
        let r = eT(),
          o = eM((e, t) => {
            if (null == e) return [n, null];
            if ("number" == typeof e) return [e, null];
            if ("string" == typeof e) {
              if (!t) return [n, null];
              let o = ok(e, t);
              return [
                o,
                (n) => {
                  let l = (function e(t) {
                    let n = /var\((.*)\)/.exec(t);
                    if (n) {
                      let t = n[1].indexOf(",");
                      if (-1 === t) return [n[1]];
                      let r = n[1].slice(0, t).trim(),
                        o = n[1].slice(t + 1).trim();
                      return o ? [r, ...e(o)] : [r];
                    }
                    return [];
                  })(e);
                  {
                    let i = l.map((e) =>
                      window.getComputedStyle(t).getPropertyValue(e),
                    );
                    r.requestAnimationFrame(function a() {
                      r.nextFrame(a);
                      let s = !1;
                      for (let [e, n] of l.entries()) {
                        let r = window.getComputedStyle(t).getPropertyValue(n);
                        if (i[e] !== r) {
                          ((i[e] = r), (s = !0));
                          break;
                        }
                      }
                      if (!s) return;
                      let u = ok(e, t);
                      o !== u && (n(u), (o = u));
                    });
                  }
                  return r.dispose;
                },
              ];
            }
            return [n, null];
          }),
          l = (0, ox.useMemo)(() => o(e, t)[0], [e, t]),
          [i = l, a] = (0, ox.useState)();
        return (
          ek(() => {
            let [n, r] = o(e, t);
            if ((a(n), r)) return r(a);
          }, [e, t]),
          i
        );
      }
      function ok(e, t) {
        let n = document.createElement("div");
        (t.appendChild(n),
          n.style.setProperty("margin-top", "0px", "important"),
          n.style.setProperty("margin-top", e, "important"));
        let r = parseFloat(window.getComputedStyle(n).marginTop) || 0;
        return (t.removeChild(n), r);
      }
      ow.displayName = "PlacementContext";
      var oF = m(n(36439), 1),
        oM = oF.default.forwardRef(function ({ children: e, freeze: t }, n) {
          let r = oD(t, e);
          return (0, oF.isValidElement)(r)
            ? (0, oF.cloneElement)(r, { ref: n })
            : oF.default.createElement(oF.default.Fragment, null, r);
        });
      function oD(e, t) {
        let [n, r] = (0, oF.useState)(t);
        return (e || n === t || r(t), e ? n : t);
      }
      var oA = m(n(36439), 1),
        oL = (0, oA.createContext)(null);
      function o_() {
        return (0, oA.useContext)(oL);
      }
      function oN({ value: e, children: t }) {
        return oA.default.createElement(oL.Provider, { value: e }, t);
      }
      function oB({ children: e }) {
        return oA.default.createElement(oL.Provider, { value: null }, e);
      }
      oL.displayName = "OpenClosedContext";
      var oj = [];
      function oH() {
        "loading" !== document.readyState &&
          ((() => {
            function e(e) {
              if (
                !tv(e.target) ||
                e.target === document.body ||
                oj[0] === e.target
              )
                return;
              let t = e.target;
              ((t = t.closest(nR)),
                oj.unshift(null != t ? t : e.target),
                (oj = oj.filter((e) => null != e && e.isConnected)).splice(10));
            }
            (window.addEventListener("click", e, { capture: !0 }),
              window.addEventListener("mousedown", e, { capture: !0 }),
              window.addEventListener("focus", e, { capture: !0 }),
              document.body.addEventListener("click", e, { capture: !0 }),
              document.body.addEventListener("mousedown", e, { capture: !0 }),
              document.body.addEventListener("focus", e, { capture: !0 }));
          })(),
          document.removeEventListener("DOMContentLoaded", oH));
      }
      function o$(e, t) {
        let n = t.resolveItems();
        if (n.length <= 0) return null;
        let r = t.resolveActiveIndex(),
          o = null != r ? r : -1;
        switch (e.focus) {
          case 0:
            for (let e = 0; e < n.length; ++e)
              if (!t.resolveDisabled(n[e], e, n)) return e;
            return r;
          case 1:
            -1 === o && (o = n.length);
            for (let e = o - 1; e >= 0; --e)
              if (!t.resolveDisabled(n[e], e, n)) return e;
            return r;
          case 2:
            for (let e = o + 1; e < n.length; ++e)
              if (!t.resolveDisabled(n[e], e, n)) return e;
            return r;
          case 3:
            for (let e = n.length - 1; e >= 0; --e)
              if (!t.resolveDisabled(n[e], e, n)) return e;
            return r;
          case 4:
            for (let r = 0; r < n.length; ++r)
              if (t.resolveId(n[r], r, n) === e.id) return r;
            return r;
          case 5:
            return null;
          default:
            throw Error("Unexpected object: " + e);
        }
      }
      "u" > typeof window &&
        "u" > typeof document &&
        (document.addEventListener("DOMContentLoaded", oH), oH());
      var oV = m(n(36439), 1),
        oz = n(72354),
        oW = n(36439);
      function oG(e) {
        let t = eM(e),
          n = (0, oW.useRef)(!1);
        (0, oW.useEffect)(
          () => (
            (n.current = !1),
            () => {
              ((n.current = !0),
                eP(() => {
                  n.current && t();
                }));
            }
          ),
          [t],
        );
      }
      var oK = m(n(36439), 1);
      function oU() {
        let e,
          t =
            ((e = "u" < typeof document),
            "useSyncExternalStore" in oK &&
              (0, oK.useSyncExternalStore)(
                () => () => {},
                () => !1,
                () => !e,
              )),
          [n, r] = oK.useState(eg.isHandoffComplete);
        return (
          n && !1 === eg.isHandoffComplete && r(!1),
          oK.useEffect(() => {
            !0 !== n && r(!0);
          }, [n]),
          oK.useEffect(() => eg.handoff(), []),
          !t && n
        );
      }
      var oq = m(n(36439), 1),
        oY = (0, oq.createContext)(!1);
      function oQ(e) {
        return oq.default.createElement(
          oY.Provider,
          { value: e.force },
          e.children,
        );
      }
      var oX = oV.Fragment,
        oJ = eq(function (e, t) {
          let { ownerDocument: n = null, ...r } = e,
            o = (0, oV.useRef)(null),
            l = tS(
              tw((e) => {
                o.current = e;
              }),
              t,
            ),
            i = nG(o.current),
            a = (function (e) {
              let t = (0, oq.useContext)(oY),
                n = (0, oV.useContext)(o0),
                [r, o] = (0, oV.useState)(() => {
                  var r;
                  if (!t && null !== n)
                    return null != (r = n.current) ? r : null;
                  if (eg.isServer) return null;
                  let o =
                    null == e
                      ? void 0
                      : e.getElementById("headlessui-portal-root");
                  if (o) return o;
                  if (null === e) return null;
                  let l = e.createElement("div");
                  return (
                    l.setAttribute("id", "headlessui-portal-root"),
                    e.body.appendChild(l)
                  );
                });
              return (
                (0, oV.useEffect)(() => {
                  null !== r &&
                    ((null != e && e.body.contains(r)) ||
                      null == e ||
                      e.body.appendChild(r));
                }, [r, e]),
                (0, oV.useEffect)(() => {
                  t || (null !== n && o(n.current));
                }, [n, o, t]),
                r
              );
            })(null != n ? n : i),
            s = (0, oV.useContext)(o1),
            u = eT(),
            c = oU(),
            d = ez();
          return (
            oG(() => {
              var e;
              a &&
                a.childNodes.length <= 0 &&
                (null == (e = a.parentElement) || e.removeChild(a));
            }),
            a && c
              ? (0, oz.createPortal)(
                  oV.default.createElement(
                    "div",
                    {
                      "data-headlessui-portal": "",
                      ref: (e) => {
                        (u.dispose(), s && e && u.add(s.register(e)));
                      },
                    },
                    d({
                      ourProps: { ref: l },
                      theirProps: r,
                      slot: {},
                      defaultTag: oX,
                      name: "Portal",
                    }),
                  ),
                  a,
                )
              : null
          );
        }),
        oZ = oV.Fragment,
        o0 = (0, oV.createContext)(null),
        o1 = (0, oV.createContext)(null);
      function o3() {
        let e = (0, oV.useContext)(o1),
          t = (0, oV.useRef)([]),
          n = eM((n) => (t.current.push(n), e && e.register(n), () => r(n))),
          r = eM((n) => {
            let r = t.current.indexOf(n);
            (-1 !== r && t.current.splice(r, 1), e && e.unregister(n));
          }),
          o = (0, oV.useMemo)(
            () => ({ register: n, unregister: r, portals: t }),
            [n, r, t],
          );
        return [
          t,
          (0, oV.useMemo)(
            () =>
              function ({ children: e }) {
                return oV.default.createElement(o1.Provider, { value: o }, e);
              },
            [o],
          ),
        ];
      }
      var o4 = eq(function (e, t) {
          let n = tS(t),
            { enabled: r = !0, ownerDocument: o, ...l } = e,
            i = ez();
          return r
            ? oV.default.createElement(oJ, { ...l, ownerDocument: o, ref: n })
            : i({
                ourProps: { ref: n },
                theirProps: l,
                slot: {},
                defaultTag: oX,
                name: "Portal",
              });
        }),
        o6 = eq(function (e, t) {
          let { target: n, ...r } = e,
            o = { ref: tS(t) },
            l = ez();
          return oV.default.createElement(
            o0.Provider,
            { value: n },
            l({
              ourProps: o,
              theirProps: r,
              defaultTag: oZ,
              name: "Popover.Group",
            }),
          );
        }),
        o2 = Object.assign(o4, { Group: o6 }),
        o9 = { kind: "Idle" },
        o5 = (e) => ({ kind: "Tracked", position: e }),
        o8 = { kind: "Moved" };
      function o7(e) {
        let t = e.getBoundingClientRect();
        return `${t.x},${t.y}`;
      }
      function le(e, t, n) {
        let r = eI();
        if ("Tracked" === t.kind) {
          let o = function () {
              l !== o7(e) && (r.dispose(), n());
            },
            { position: l } = t,
            i = new ResizeObserver(o);
          (i.observe(e),
            r.add(() => i.disconnect()),
            r.addEventListener(window, "scroll", o, { passive: !0 }),
            r.addEventListener(window, "resize", o));
        }
        return () => r.dispose();
      }
      function lt(e, t = (e) => e) {
        let n =
            null !== e.activeOptionIndex
              ? e.options[e.activeOptionIndex]
              : null,
          r = t(e.options.slice()),
          o =
            r.length > 0 && null !== r[0].dataRef.current.order
              ? r.sort(
                  (e, t) => e.dataRef.current.order - t.dataRef.current.order,
                )
              : nA(r, (e) => e.dataRef.current.domRef.current),
          l = n ? o.indexOf(n) : null;
        return (-1 === l && (l = null), { options: o, activeOptionIndex: l });
      }
      var ln = {
          1(e) {
            var t;
            if (
              (null != (t = e.dataRef.current) && t.disabled) ||
              1 === e.comboboxState
            )
              return e;
            let n = e.inputElement
              ? o5(o7(e.inputElement))
              : e.inputPositionState;
            return {
              ...e,
              activeOptionIndex: null,
              comboboxState: 1,
              isTyping: !1,
              activationTrigger: 2,
              inputPositionState: n,
              __demoMode: !1,
            };
          },
          0(e) {
            var t, n;
            if (
              (null != (t = e.dataRef.current) && t.disabled) ||
              0 === e.comboboxState
            )
              return e;
            if (null != (n = e.dataRef.current) && n.value) {
              let t = e.dataRef.current.calculateIndex(e.dataRef.current.value);
              if (-1 !== t)
                return {
                  ...e,
                  activeOptionIndex: t,
                  comboboxState: 0,
                  __demoMode: !1,
                  inputPositionState: o9,
                };
            }
            return {
              ...e,
              comboboxState: 0,
              inputPositionState: o9,
              __demoMode: !1,
            };
          },
          3: (e, t) =>
            e.isTyping === t.isTyping ? e : { ...e, isTyping: t.isTyping },
          2(e, t) {
            var n, r, o, l;
            if (
              (null != (n = e.dataRef.current) && n.disabled) ||
              (e.optionsElement &&
                !(
                  null != (r = e.dataRef.current) &&
                  r.optionsPropsRef.current.static
                ) &&
                1 === e.comboboxState)
            )
              return e;
            if (e.virtual) {
              let { options: n, disabled: r } = e.virtual,
                l =
                  4 === t.focus
                    ? t.idx
                    : o$(t, {
                        resolveItems: () => n,
                        resolveActiveIndex: () => {
                          var t, o;
                          return null !=
                            (o =
                              null != (t = e.activeOptionIndex)
                                ? t
                                : n.findIndex((e) => !r(e)))
                            ? o
                            : null;
                        },
                        resolveDisabled: r,
                        resolveId() {
                          throw Error("Function not implemented.");
                        },
                      }),
                i = null != (o = t.trigger) ? o : 2;
              return e.activeOptionIndex === l && e.activationTrigger === i
                ? e
                : {
                    ...e,
                    activeOptionIndex: l,
                    activationTrigger: i,
                    isTyping: !1,
                    __demoMode: !1,
                  };
            }
            let i = lt(e);
            if (null === i.activeOptionIndex) {
              let e = i.options.findIndex((e) => !e.dataRef.current.disabled);
              -1 !== e && (i.activeOptionIndex = e);
            }
            let a =
                4 === t.focus
                  ? t.idx
                  : o$(t, {
                      resolveItems: () => i.options,
                      resolveActiveIndex: () => i.activeOptionIndex,
                      resolveId: (e) => e.id,
                      resolveDisabled: (e) => e.dataRef.current.disabled,
                    }),
              s = null != (l = t.trigger) ? l : 2;
            return e.activeOptionIndex === a && e.activationTrigger === s
              ? e
              : {
                  ...e,
                  ...i,
                  isTyping: !1,
                  activeOptionIndex: a,
                  activationTrigger: s,
                  __demoMode: !1,
                };
          },
          4: (e, t) => {
            var n, r, o, l;
            if (null != (n = e.dataRef.current) && n.virtual)
              return { ...e, options: [...e.options, t.payload] };
            let i = t.payload,
              a = lt(e, (e) => (e.push(i), e));
            null === e.activeOptionIndex &&
              null != (o = (r = e.dataRef.current).isSelected) &&
              o.call(r, t.payload.dataRef.current.value) &&
              (a.activeOptionIndex = a.options.indexOf(i));
            let s = { ...e, ...a, activationTrigger: 2 };
            return (
              null != (l = e.dataRef.current) &&
                l.__demoMode &&
                void 0 === e.dataRef.current.value &&
                (s.activeOptionIndex = 0),
              s
            );
          },
          5: (e, t) => {
            var n;
            if (null != (n = e.dataRef.current) && n.virtual)
              return { ...e, options: e.options.filter((e) => e.id !== t.id) };
            let r = lt(e, (e) => {
              let n = e.findIndex((e) => e.id === t.id);
              return (-1 !== n && e.splice(n, 1), e);
            });
            return { ...e, ...r, activationTrigger: 2 };
          },
          6: (e, t) =>
            e.defaultToFirstOption === t.value
              ? e
              : { ...e, defaultToFirstOption: t.value },
          7: (e, t) =>
            e.activationTrigger === t.trigger
              ? e
              : { ...e, activationTrigger: t.trigger },
          8: (e, t) => {
            var n, r;
            if (null === e.virtual)
              return {
                ...e,
                virtual: {
                  options: t.options,
                  disabled: null != (n = t.disabled) ? n : () => !1,
                },
              };
            if (
              e.virtual.options === t.options &&
              e.virtual.disabled === t.disabled
            )
              return e;
            let o = e.activeOptionIndex;
            if (null !== e.activeOptionIndex) {
              let n = t.options.indexOf(e.virtual.options[e.activeOptionIndex]);
              o = -1 !== n ? n : null;
            }
            return {
              ...e,
              activeOptionIndex: o,
              virtual: {
                options: t.options,
                disabled: null != (r = t.disabled) ? r : () => !1,
              },
            };
          },
          9: (e, t) =>
            e.inputElement === t.element
              ? e
              : { ...e, inputElement: t.element },
          10: (e, t) =>
            e.buttonElement === t.element
              ? e
              : { ...e, buttonElement: t.element },
          11: (e, t) =>
            e.optionsElement === t.element
              ? e
              : { ...e, optionsElement: t.element },
          12: (e) =>
            "Tracked" !== e.inputPositionState.kind
              ? e
              : { ...e, inputPositionState: o8 },
        },
        lr = class extends ns {
          constructor(e) {
            (super(e),
              h(this, "actions", {
                onChange: (e) => {
                  let {
                    onChange: t,
                    compare: n,
                    mode: r,
                    value: o,
                  } = this.state.dataRef.current;
                  return eV(r, {
                    0: () => (null == t ? void 0 : t(e)),
                    1: () => {
                      let r = o.slice(),
                        l = r.findIndex((t) => n(t, e));
                      return (
                        -1 === l ? r.push(e) : r.splice(l, 1),
                        null == t ? void 0 : t(r)
                      );
                    },
                  });
                },
                registerOption: (e, t) => (
                  this.send({ type: 4, payload: { id: e, dataRef: t } }),
                  () => {
                    (this.state.activeOptionIndex ===
                      this.state.dataRef.current.calculateIndex(
                        t.current.value,
                      ) && this.send({ type: 6, value: !0 }),
                      this.send({ type: 5, id: e }));
                  }
                ),
                goToOption: (e, t) => (
                  this.send({ type: 6, value: !1 }),
                  this.send({ type: 2, ...e, trigger: t })
                ),
                setIsTyping: (e) => {
                  this.send({ type: 3, isTyping: e });
                },
                closeCombobox: () => {
                  var e, t;
                  (this.send({ type: 1 }),
                    this.send({ type: 6, value: !1 }),
                    null == (t = (e = this.state.dataRef.current).onClose) ||
                      t.call(e));
                },
                openCombobox: () => {
                  (this.send({ type: 0 }), this.send({ type: 6, value: !0 }));
                },
                setActivationTrigger: (e) => {
                  this.send({ type: 7, trigger: e });
                },
                selectActiveOption: () => {
                  let e = this.selectors.activeOptionIndex(this.state);
                  if (null !== e) {
                    if ((this.actions.setIsTyping(!1), this.state.virtual))
                      this.actions.onChange(this.state.virtual.options[e]);
                    else {
                      let { dataRef: t } = this.state.options[e];
                      this.actions.onChange(t.current.value);
                    }
                    this.actions.goToOption({ focus: 4, idx: e });
                  }
                },
                setInputElement: (e) => {
                  this.send({ type: 9, element: e });
                },
                setButtonElement: (e) => {
                  this.send({ type: 10, element: e });
                },
                setOptionsElement: (e) => {
                  this.send({ type: 11, element: e });
                },
              }),
              h(this, "selectors", {
                activeDescendantId: (e) => {
                  var t, n;
                  let r = this.selectors.activeOptionIndex(e);
                  if (null !== r)
                    return e.virtual
                      ? null ==
                        (n = e.options.find(
                          (t) =>
                            !t.dataRef.current.disabled &&
                            e.dataRef.current.compare(
                              t.dataRef.current.value,
                              e.virtual.options[r],
                            ),
                        ))
                        ? void 0
                        : n.id
                      : null == (t = e.options[r])
                        ? void 0
                        : t.id;
                },
                activeOptionIndex: (e) => {
                  if (
                    e.defaultToFirstOption &&
                    null === e.activeOptionIndex &&
                    (e.virtual
                      ? e.virtual.options.length > 0
                      : e.options.length > 0)
                  ) {
                    if (e.virtual) {
                      let { options: t, disabled: n } = e.virtual,
                        r = t.findIndex((e) => {
                          var t;
                          return !(
                            null != (t = null == n ? void 0 : n(e)) && t
                          );
                        });
                      if (-1 !== r) return r;
                    }
                    let t = e.options.findIndex(
                      (e) => !e.dataRef.current.disabled,
                    );
                    if (-1 !== t) return t;
                  }
                  return e.activeOptionIndex;
                },
                activeOption: (e) => {
                  var t, n;
                  let r = this.selectors.activeOptionIndex(e);
                  return null === r
                    ? null
                    : e.virtual
                      ? e.virtual.options[null != r ? r : 0]
                      : null !=
                          (n =
                            null == (t = e.options[r])
                              ? void 0
                              : t.dataRef.current.value)
                        ? n
                        : null;
                },
                isActive: (e, t, n) => {
                  var r;
                  let o = this.selectors.activeOptionIndex(e);
                  return (
                    null !== o &&
                    (e.virtual
                      ? o === e.dataRef.current.calculateIndex(t)
                      : (null == (r = e.options[o]) ? void 0 : r.id) === n)
                  );
                },
                shouldScrollIntoView: (e, t, n) =>
                  !(
                    e.virtual ||
                    e.__demoMode ||
                    0 !== e.comboboxState ||
                    0 === e.activationTrigger ||
                    !this.selectors.isActive(e, t, n)
                  ),
                didInputMove: (e) => "Moved" === e.inputPositionState.kind,
              }));
            {
              let e = this.state.id,
                t = nm.get(null);
              (this.disposables.add(
                t.on(0, (n) => {
                  t.selectors.isTop(n, e) ||
                    0 !== this.state.comboboxState ||
                    this.actions.closeCombobox();
                }),
              ),
                this.on(0, () => t.actions.push(e)),
                this.on(1, () => t.actions.pop(e)));
            }
            this.disposables.group((e) => {
              this.on(1, (t) => {
                t.inputElement &&
                  (e.dispose(),
                  e.add(
                    le(t.inputElement, t.inputPositionState, () => {
                      this.send({ type: 12 });
                    }),
                  ));
              });
            });
          }
          static new({ id: e, virtual: t = null, __demoMode: n = !1 }) {
            var r;
            return new lr({
              id: e,
              dataRef: { current: {} },
              comboboxState: +!n,
              isTyping: !1,
              options: [],
              virtual: t
                ? {
                    options: t.options,
                    disabled: null != (r = t.disabled) ? r : () => !1,
                  }
                : null,
              activeOptionIndex: null,
              activationTrigger: 2,
              inputElement: null,
              buttonElement: null,
              optionsElement: null,
              __demoMode: n,
              inputPositionState: o9,
            });
          }
          reduce(e, t) {
            return eV(t.type, ln, e, t);
          }
        },
        lo = n(36439),
        ll = (0, lo.createContext)(null);
      function li(e) {
        let t = (0, lo.useContext)(ll);
        if (null === t) {
          let t = Error(`<${e} /> is missing a parent <Combobox /> component.`);
          throw (Error.captureStackTrace && Error.captureStackTrace(t, la), t);
        }
        return t;
      }
      function la({ id: e, virtual: t = null, __demoMode: n = !1 }) {
        let r = (0, lo.useMemo)(
          () => lr.new({ id: e, virtual: t, __demoMode: n }),
          [],
        );
        return (oG(() => r.dispose()), r);
      }
      var ls = (0, t4.createContext)(null);
      function lu(e) {
        let t = (0, t4.useContext)(ls);
        if (null === t) {
          let t = Error(`<${e} /> is missing a parent <Combobox /> component.`);
          throw (Error.captureStackTrace && Error.captureStackTrace(t, lu), t);
        }
        return t;
      }
      ls.displayName = "ComboboxDataContext";
      var lc = (0, t4.createContext)(null);
      function ld(e) {
        let t = li("VirtualProvider"),
          { options: n } = lu("VirtualProvider").virtual,
          r = nb(t, (e) => e.optionsElement),
          [o, l] = (0, t4.useMemo)(() => {
            if (!r) return [0, 0];
            let e = window.getComputedStyle(r);
            return [
              parseFloat(e.paddingBlockStart || e.paddingTop),
              parseFloat(e.paddingBlockEnd || e.paddingBottom),
            ];
          }, [r]),
          i = (function (e) {
            let t = t$.useReducer(() => ({}), {})[1],
              n = {
                ...e,
                onChange: (n, r) => {
                  var o;
                  (r ? (0, tV.flushSync)(t) : t(),
                    null == (o = e.onChange) || o.call(e, n, r));
                },
              },
              [r] = t$.useState(() => new t0(n));
            return (
              r.setOptions(n),
              t3(() => r._didMount(), []),
              t3(() => r._willUpdate()),
              r
            );
          })({
            observeElementRect: tq,
            observeElementOffset: tX,
            scrollToFn: tZ,
            ...{
              enabled: 0 !== n.length,
              scrollPaddingStart: o,
              scrollPaddingEnd: l,
              count: n.length,
              estimateSize: () => 40,
              getScrollElement: () => t.state.optionsElement,
              overscan: 12,
            },
          }),
          [a, s] = (0, t4.useState)(0);
        ek(() => {
          s((e) => e + 1);
        }, [n]);
        let u = i.getVirtualItems(),
          c = nb(t, (e) => 0 === e.activationTrigger),
          d = nb(t, t.selectors.activeOptionIndex);
        return 0 === u.length
          ? null
          : t4.default.createElement(
              lc.Provider,
              { value: i },
              t4.default.createElement(
                "div",
                {
                  style: {
                    position: "relative",
                    width: "100%",
                    height: `${i.getTotalSize()}px`,
                  },
                  ref: (e) => {
                    e &&
                      (c || (null !== d && n.length > d && i.scrollToIndex(d)));
                  },
                },
                u.map((t) => {
                  var r;
                  return t4.default.createElement(
                    t4.Fragment,
                    { key: t.key },
                    t4.default.cloneElement(
                      null == (r = e.children)
                        ? void 0
                        : r.call(e, { ...e.slot, option: n[t.index] }),
                      {
                        key: `${a}-${t.key}`,
                        "data-index": t.index,
                        "aria-setsize": n.length,
                        "aria-posinset": t.index + 1,
                        style: {
                          position: "absolute",
                          top: 0,
                          left: 0,
                          transform: `translateY(${t.start}px)`,
                          overflowAnchor: "none",
                        },
                      },
                    ),
                  );
                }),
              ),
            );
      }
      var lf = t4.Fragment,
        lp = eq(function (e, t) {
          let n = (0, e2.useId)(),
            r = eB(),
            {
              value: o,
              defaultValue: l,
              onChange: i,
              form: a,
              name: s,
              by: u,
              invalid: c = !1,
              disabled: d = r || !1,
              onClose: f,
              __demoMode: p = !1,
              multiple: v = !1,
              immediate: m = !1,
              virtual: h = null,
              nullable: b,
              ...g
            } = e,
            y = e6(l),
            [x = v ? [] : void 0, E] = e3(o, i, y),
            w = la({ id: n, virtual: h, __demoMode: p }),
            S = (0, t4.useRef)({ static: !1, hold: !1 }),
            P = t5(u),
            I = eM((e) =>
              h
                ? null === u
                  ? h.options.indexOf(e)
                  : h.options.findIndex((t) => P(t, e))
                : w.state.options.findIndex((t) =>
                    P(t.dataRef.current.value, e),
                  ),
            ),
            T = (0, t4.useCallback)(
              (e) =>
                eV(O.mode, {
                  1: () => x.some((t) => P(t, e)),
                  0: () => P(x, e),
                }),
              [x],
            ),
            C = nb(w, (e) => e.virtual),
            R = eM(() => (null == f ? void 0 : f())),
            O = (0, t4.useMemo)(
              () => ({
                __demoMode: p,
                immediate: m,
                optionsPropsRef: S,
                value: x,
                defaultValue: y,
                disabled: d,
                invalid: c,
                mode: +!!v,
                virtual: h ? C : null,
                onChange: E,
                isSelected: T,
                calculateIndex: I,
                compare: P,
                onClose: R,
              }),
              [p, m, S, x, y, d, c, v, h, C, E, T, I, P, R],
            );
          (ek(() => {
            var e;
            h &&
              w.send({
                type: 8,
                options: h.options,
                disabled: null != (e = h.disabled) ? e : null,
              });
          }, [
            h,
            null == h ? void 0 : h.options,
            null == h ? void 0 : h.disabled,
          ]),
            ek(() => {
              w.state.dataRef.current = O;
            }, [O]));
          let [k, F, M, D] = nb(w, (e) => [
              e.comboboxState,
              e.buttonElement,
              e.inputElement,
              e.optionsElement,
            ]),
            A = nm.get(null);
          nz(
            nb(
              A,
              (0, t4.useCallback)((e) => A.selectors.isTop(e, n), [A, n]),
            ),
            [F, M, D],
            () => w.actions.closeCombobox(),
          );
          let L = eL({
              open: 0 === k,
              disabled: d,
              invalid: c,
              activeIndex: nb(w, w.selectors.activeOptionIndex),
              activeOption: nb(w, w.selectors.activeOption),
              value: x,
            }),
            [_, N] = tM(),
            B = (0, t4.useCallback)(() => {
              if (void 0 !== y) return null == E ? void 0 : E(y);
            }, [E, y]),
            j = ez();
          return t4.default.createElement(
            N,
            {
              value: _,
              props: { htmlFor: null == M ? void 0 : M.id },
              slot: { open: 0 === k, disabled: d },
            },
            t4.default.createElement(
              oR,
              null,
              t4.default.createElement(
                ls.Provider,
                { value: O },
                t4.default.createElement(
                  ll.Provider,
                  { value: w },
                  t4.default.createElement(
                    oN,
                    { value: eV(k, { 0: 1, 1: 2 }) },
                    null != s &&
                      t4.default.createElement(tl, {
                        disabled: d,
                        data: null != x ? { [s]: x } : {},
                        form: a,
                        onReset: B,
                      }),
                    j({
                      ourProps: null === t ? {} : { ref: t },
                      theirProps: g,
                      slot: L,
                      defaultTag: lf,
                      name: "Combobox",
                    }),
                  ),
                ),
              ),
            ),
          );
        }),
        lv = eq(function (e, t) {
          let n = li("Combobox.Button"),
            r = lu("Combobox.Button"),
            [o, l] = (0, t4.useState)(null),
            i = tS(t, l, n.actions.setButtonElement),
            a = (0, e2.useId)(),
            {
              id: s = `headlessui-combobox-button-${a}`,
              disabled: u = r.disabled || !1,
              autoFocus: c = !1,
              ...d
            } = e,
            [f, p, v] = nb(n, (e) => [
              e.comboboxState,
              e.inputElement,
              e.optionsElement,
            ]),
            m = n0(p);
          nQ(0 === f, {
            trigger: o,
            action: (0, t4.useCallback)(
              (e) => {
                if (
                  (null != o && o.contains(e.target)) ||
                  (null != p && p.contains(e.target))
                )
                  return nU;
                let t = e.target.closest(
                  '[role="option"]:not([data-disabled])',
                );
                return tp(t)
                  ? nq(t)
                  : null != v && v.contains(e.target)
                    ? nU
                    : nY;
              },
              [o, p, v],
            ),
            close: n.actions.closeCombobox,
            select: n.actions.selectActiveOption,
          });
          let h = eM((e) => {
              switch (e.key) {
                case " ":
                case "Enter":
                  (e.preventDefault(),
                    e.stopPropagation(),
                    1 === n.state.comboboxState &&
                      (0, t6.flushSync)(() => n.actions.openCombobox()),
                    m());
                  return;
                case "ArrowDown":
                  (e.preventDefault(),
                    e.stopPropagation(),
                    1 === n.state.comboboxState &&
                      ((0, t6.flushSync)(() => n.actions.openCombobox()),
                      n.state.dataRef.current.value ||
                        n.actions.goToOption({ focus: 0 })),
                    m());
                  return;
                case "ArrowUp":
                  (e.preventDefault(),
                    e.stopPropagation(),
                    1 === n.state.comboboxState &&
                      ((0, t6.flushSync)(() => n.actions.openCombobox()),
                      n.state.dataRef.current.value ||
                        n.actions.goToOption({ focus: 3 })),
                    m());
                  return;
                case "Escape":
                  if (0 !== n.state.comboboxState) return;
                  (e.preventDefault(),
                    n.state.optionsElement &&
                      !r.optionsPropsRef.current.static &&
                      e.stopPropagation(),
                    (0, t6.flushSync)(() => n.actions.closeCombobox()),
                    m());
                  return;
                default:
                  return;
              }
            }),
            b = nn(() => {
              (0 === n.state.comboboxState
                ? n.actions.closeCombobox()
                : n.actions.openCombobox(),
                m());
            }),
            g = tF([s]),
            { isFocusVisible: y, focusProps: x } = eh({ autoFocus: c }),
            { isHovered: E, hoverProps: w } = ev({ isDisabled: u }),
            { pressed: S, pressProps: P } = eD({ disabled: u }),
            I = eL({
              open: 0 === f,
              active: S || 0 === f,
              disabled: u,
              invalid: r.invalid,
              value: r.value,
              hover: E,
              focus: y,
            }),
            T = eU(
              {
                ref: i,
                id: s,
                type: n3(e, o),
                tabIndex: -1,
                "aria-haspopup": "listbox",
                "aria-controls": null == v ? void 0 : v.id,
                "aria-expanded": 0 === f,
                "aria-labelledby": g,
                disabled: u || void 0,
                autoFocus: c,
                onKeyDown: h,
              },
              b,
              x,
              w,
              P,
            );
          return ez()({
            ourProps: T,
            theirProps: d,
            slot: I,
            defaultTag: "button",
            name: "Combobox.Button",
          });
        }),
        lm = eq(function (e, t) {
          var n, r;
          let o = li("Combobox.Input"),
            l = lu("Combobox.Input"),
            i = (0, e2.useId)(),
            a = tu(),
            {
              id: s = a || `headlessui-combobox-input-${i}`,
              onChange: u,
              displayValue: c,
              disabled: d = l.disabled || !1,
              autoFocus: f = !1,
              type: p = "text",
              ...v
            } = e,
            m = (0, t4.useRef)(null),
            h = tS(m, t, oP(), o.actions.setInputElement),
            [b, g] = nb(o, (e) => [e.comboboxState, e.isTyping]),
            y = eT(),
            x = eM(() => {
              (o.actions.onChange(null),
                o.state.optionsElement &&
                  (o.state.optionsElement.scrollTop = 0),
                o.actions.goToOption({ focus: 5 }));
            });
          (ra(
            ([e, t], [n, r]) => {
              if (o.state.isTyping) return;
              let l = m.current;
              l &&
                (((0 === r && 1 === t) || e !== n) && (l.value = e),
                requestAnimationFrame(() => {
                  if (o.state.isTyping || !l || ew(l)) return;
                  let { selectionStart: e, selectionEnd: t } = l;
                  0 === Math.abs((null != t ? t : 0) - (null != e ? e : 0)) &&
                    0 === e &&
                    l.setSelectionRange(l.value.length, l.value.length);
                }));
            },
            [
              (0, t4.useMemo)(() => {
                var e;
                return "function" == typeof c && void 0 !== l.value
                  ? null != (e = c(l.value))
                    ? e
                    : ""
                  : "string" == typeof l.value
                    ? l.value
                    : "";
              }, [l.value, c]),
              b,
              g,
            ],
          ),
            ra(
              ([e], [t]) => {
                if (0 === e && 1 === t) {
                  if (o.state.isTyping) return;
                  let e = m.current;
                  if (!e) return;
                  let t = e.value,
                    {
                      selectionStart: n,
                      selectionEnd: r,
                      selectionDirection: l,
                    } = e;
                  ((e.value = ""),
                    (e.value = t),
                    null !== l
                      ? e.setSelectionRange(n, r, l)
                      : e.setSelectionRange(n, r));
                }
              },
              [b],
            ));
          let E = (0, t4.useRef)(!1),
            w = eM(() => {
              E.current = !0;
            }),
            S = eM(() => {
              y.nextFrame(() => {
                E.current = !1;
              });
            }),
            P = eM((e) => {
              switch ((o.actions.setIsTyping(!0), e.key)) {
                case "Enter":
                  if (0 !== o.state.comboboxState || E.current) return;
                  if (
                    (e.preventDefault(),
                    e.stopPropagation(),
                    null === o.selectors.activeOptionIndex(o.state))
                  )
                    return void o.actions.closeCombobox();
                  (o.actions.selectActiveOption(),
                    0 === l.mode && o.actions.closeCombobox());
                  break;
                case "ArrowDown":
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    eV(o.state.comboboxState, {
                      0: () => o.actions.goToOption({ focus: 2 }),
                      1: () => o.actions.openCombobox(),
                    })
                  );
                case "ArrowUp":
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    eV(o.state.comboboxState, {
                      0: () => o.actions.goToOption({ focus: 1 }),
                      1: () => {
                        ((0, t6.flushSync)(() => o.actions.openCombobox()),
                          l.value || o.actions.goToOption({ focus: 3 }));
                      },
                    })
                  );
                case "Home":
                  if (1 === o.state.comboboxState || e.shiftKey) break;
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    o.actions.goToOption({ focus: 0 })
                  );
                case "PageUp":
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    o.actions.goToOption({ focus: 0 })
                  );
                case "End":
                  if (1 === o.state.comboboxState || e.shiftKey) break;
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    o.actions.goToOption({ focus: 3 })
                  );
                case "PageDown":
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    o.actions.goToOption({ focus: 3 })
                  );
                case "Escape":
                  return 0 !== o.state.comboboxState
                    ? void 0
                    : (e.preventDefault(),
                      o.state.optionsElement &&
                        !l.optionsPropsRef.current.static &&
                        e.stopPropagation(),
                      0 === l.mode && null === l.value && x(),
                      o.actions.closeCombobox());
                case "Tab":
                  if ((o.actions.setIsTyping(!1), 0 !== o.state.comboboxState))
                    return;
                  (0 === l.mode &&
                    1 !== o.state.activationTrigger &&
                    o.actions.selectActiveOption(),
                    o.actions.closeCombobox());
              }
            }),
            I = eM((e) => {
              (null == u || u(e),
                0 === l.mode && "" === e.target.value && x(),
                o.actions.openCombobox());
            }),
            T = eM((e) => {
              var t, n, r;
              let i =
                null != (t = e.relatedTarget)
                  ? t
                  : oj.find((t) => t !== e.currentTarget);
              if (
                !(null != (n = o.state.optionsElement) && n.contains(i)) &&
                !(null != (r = o.state.buttonElement) && r.contains(i)) &&
                0 === o.state.comboboxState
              )
                return (
                  e.preventDefault(),
                  0 === l.mode && null === l.value && x(),
                  o.actions.closeCombobox()
                );
            }),
            C = eM((e) => {
              var t, n, r;
              let i =
                null != (t = e.relatedTarget)
                  ? t
                  : oj.find((t) => t !== e.currentTarget);
              (null != (n = o.state.buttonElement) && n.contains(i)) ||
                (null != (r = o.state.optionsElement) && r.contains(i)) ||
                l.disabled ||
                (l.immediate &&
                  0 !== o.state.comboboxState &&
                  y.microTask(() => {
                    ((0, t6.flushSync)(() => o.actions.openCombobox()),
                      o.actions.setActivationTrigger(1));
                  }));
            }),
            R = tF(),
            O = tI(),
            { isFocused: k, focusProps: F } = eh({ autoFocus: f }),
            { isHovered: M, hoverProps: D } = ev({ isDisabled: d }),
            A = nb(o, (e) => e.optionsElement),
            L = eL({
              open: 0 === b,
              disabled: d,
              invalid: l.invalid,
              hover: M,
              focus: k,
              autofocus: f,
            }),
            _ = eU(
              {
                ref: h,
                id: s,
                role: "combobox",
                type: p,
                "aria-controls": null == A ? void 0 : A.id,
                "aria-expanded": 0 === b,
                "aria-activedescendant": nb(o, o.selectors.activeDescendantId),
                "aria-labelledby": R,
                "aria-describedby": O,
                "aria-autocomplete": "list",
                defaultValue:
                  null !=
                  (r =
                    null != (n = e.defaultValue)
                      ? n
                      : void 0 !== l.defaultValue
                        ? null == c
                          ? void 0
                          : c(l.defaultValue)
                        : null)
                    ? r
                    : l.defaultValue,
                disabled: d || void 0,
                autoFocus: f,
                onCompositionStart: w,
                onCompositionEnd: S,
                onKeyDown: P,
                onChange: I,
                onFocus: C,
                onBlur: T,
              },
              F,
              D,
            );
          return ez()({
            ourProps: _,
            theirProps: v,
            slot: L,
            defaultTag: "input",
            name: "Combobox.Input",
          });
        }),
        lh = tD,
        lb = eq(function (e, t) {
          var n, r, o;
          let l = (0, e2.useId)(),
            {
              id: i = `headlessui-combobox-options-${l}`,
              hold: a = !1,
              anchor: s,
              portal: u = !1,
              modal: c = !0,
              transition: d = !1,
              ...f
            } = e,
            p = li("Combobox.Options"),
            v = lu("Combobox.Options"),
            m = oS(s);
          m && (u = !0);
          let [h, b] = oC(m),
            [g, y] = (0, t4.useState)(null),
            x = oT(),
            E = tS(t, m ? h : null, p.actions.setOptionsElement, y),
            [w, S, P, I, T] = nb(p, (e) => [
              e.comboboxState,
              e.inputElement,
              e.buttonElement,
              e.optionsElement,
              e.activationTrigger,
            ]),
            C = nG(S || P),
            R = nG(I),
            O = o_(),
            [k, F] = rr(d, g, null !== O ? (1 & O) == 1 : 0 === w);
          (nT(k, S, p.actions.closeCombobox),
            n9(!v.__demoMode && c && 0 === w, R),
            nP(!v.__demoMode && c && 0 === w, {
              allowed: (0, t4.useCallback)(() => [S, P, I], [S, P, I]),
            }));
          let M = !nb(p, p.selectors.didInputMove) && k;
          (ek(() => {
            var t;
            v.optionsPropsRef.current.static = null != (t = e.static) && t;
          }, [v.optionsPropsRef, e.static]),
            ek(() => {
              v.optionsPropsRef.current.hold = a;
            }, [v.optionsPropsRef, a]),
            rl(0 === w, {
              container: I,
              accept: (e) =>
                "option" === e.getAttribute("role")
                  ? NodeFilter.FILTER_REJECT
                  : e.hasAttribute("role")
                    ? NodeFilter.FILTER_SKIP
                    : NodeFilter.FILTER_ACCEPT,
              walk(e) {
                e.setAttribute("role", "none");
              },
            }));
          let D = tF([null == P ? void 0 : P.id]),
            A = eL({ open: 0 === w, option: void 0 }),
            L = eM(() => {
              p.actions.setActivationTrigger(0);
            }),
            _ = eM((e) => {
              (e.preventDefault(), p.actions.setActivationTrigger(0));
            }),
            N = eU(m ? x() : {}, {
              "aria-labelledby": D,
              role: "listbox",
              "aria-multiselectable": 1 === v.mode || void 0,
              id: i,
              ref: E,
              style: {
                ...f.style,
                ...b,
                "--input-width": ne(k, S, !0).width,
                "--button-width": ne(k, P, !0).width,
              },
              onWheel: 0 === T ? void 0 : L,
              onMouseDown: _,
              ...rn(F),
            }),
            B = k && 1 === w && !e.static,
            j = oD(B, null == (n = v.virtual) ? void 0 : n.options),
            H = oD(B, v.value),
            $ = (0, t4.useCallback)((e) => v.compare(H, e), [v.compare, H]),
            V = (0, t4.useMemo)(() => {
              if (!v.virtual) return v;
              if (void 0 === j)
                throw Error("Missing `options` in virtual mode");
              return j !== v.virtual.options
                ? { ...v, virtual: { ...v.virtual, options: j } }
                : v;
            }, [v, j, null == (r = v.virtual) ? void 0 : r.options]);
          v.virtual &&
            Object.assign(f, {
              children: t4.default.createElement(
                ls.Provider,
                { value: V },
                t4.default.createElement(ld, { slot: A }, f.children),
              ),
            });
          let z = ez(),
            W = (0, t4.useMemo)(
              () => (1 === v.mode ? v : { ...v, isSelected: $ }),
              [v, $],
            );
          return t4.default.createElement(
            o2,
            { enabled: !!u && (e.static || k), ownerDocument: C },
            t4.default.createElement(
              ls.Provider,
              { value: W },
              z({
                ourProps: N,
                theirProps: {
                  ...f,
                  children: t4.default.createElement(
                    oM,
                    { freeze: B },
                    "function" == typeof f.children
                      ? null == (o = f.children)
                        ? void 0
                        : o.call(f, A)
                      : f.children,
                  ),
                },
                slot: A,
                defaultTag: "div",
                features: 3,
                visible: M,
                name: "Combobox.Options",
              }),
            ),
          );
        }),
        lg = eq(function (e, t) {
          var n, r, o;
          let l = lu("Combobox.Option"),
            i = li("Combobox.Option"),
            a = (0, e2.useId)(),
            {
              id: s = `headlessui-combobox-option-${a}`,
              value: u,
              disabled: c = null !=
                (o =
                  null == (r = null == (n = l.virtual) ? void 0 : n.disabled)
                    ? void 0
                    : r.call(n, u)) && o,
              order: d = null,
              ...f
            } = e,
            [p] = nb(i, (e) => [e.inputElement]),
            v = n0(p),
            m = nb(
              i,
              (0, t4.useCallback)((e) => i.selectors.isActive(e, u, s), [u, s]),
            ),
            h = l.isSelected(u),
            b = (0, t4.useRef)(null),
            g = eF({ disabled: c, value: u, domRef: b, order: d }),
            y = (0, t4.useContext)(lc),
            x = tS(t, b, y ? y.measureElement : null),
            E = eM(() => {
              (i.actions.setIsTyping(!1), i.actions.onChange(u));
            });
          ek(() => i.actions.registerOption(s, g), [g, s]);
          let w = nb(
            i,
            (0, t4.useCallback)(
              (e) => i.selectors.shouldScrollIntoView(e, u, s),
              [u, s],
            ),
          );
          ek(() => {
            if (w)
              return eI().requestAnimationFrame(() => {
                var e, t;
                null ==
                  (t = null == (e = b.current) ? void 0 : e.scrollIntoView) ||
                  t.call(e, { block: "nearest" });
              });
          }, [w, b]);
          let S = eM((e) => {
              (e.preventDefault(),
                0 === e.button &&
                  (c ||
                    (E(),
                    nB() || requestAnimationFrame(() => v()),
                    0 === l.mode && i.actions.closeCombobox())));
            }),
            P = eM(() => {
              if (c) return i.actions.goToOption({ focus: 5 });
              let e = l.calculateIndex(u);
              i.actions.goToOption({ focus: 4, idx: e });
            }),
            I = n7(),
            T = eM((e) => I.update(e)),
            C = eM((e) => {
              if (!I.wasMoved(e) || c || (m && 0 === i.state.activationTrigger))
                return;
              let t = l.calculateIndex(u);
              i.actions.goToOption({ focus: 4, idx: t }, 0);
            }),
            R = eM((e) => {
              I.wasMoved(e) &&
                (c ||
                  (m &&
                    (l.optionsPropsRef.current.hold ||
                      (0 === i.state.activationTrigger &&
                        i.actions.goToOption({ focus: 5 })))));
            }),
            O = eL({ active: m, focus: m, selected: h, disabled: c });
          return ez()({
            ourProps: {
              id: s,
              ref: x,
              role: "option",
              tabIndex: !0 === c ? void 0 : -1,
              "aria-disabled": !0 === c || void 0,
              "aria-selected": h,
              disabled: void 0,
              onMouseDown: S,
              onFocus: P,
              onPointerEnter: T,
              onMouseEnter: T,
              onPointerMove: C,
              onMouseMove: C,
              onPointerLeave: R,
              onMouseLeave: R,
            },
            theirProps: f,
            slot: O,
            defaultTag: "div",
            name: "Combobox.Option",
          });
        }),
        ly = Object.assign(lp, {
          Input: lm,
          Button: lv,
          Label: lh,
          Options: lb,
          Option: lg,
        }),
        lx = n(36439).Fragment,
        lE = eq(function (e, t) {
          let { ...n } = e,
            { isFocusVisible: r, focusProps: o } = eh(),
            { isHovered: l, hoverProps: i } = ev({ isDisabled: !1 }),
            { pressed: a, pressProps: s } = eD({ disabled: !1 }),
            u = eU({ ref: t }, o, i, s),
            c = eL({ hover: l, focus: r, active: a });
          return ez()({
            ourProps: u,
            theirProps: n,
            slot: c,
            defaultTag: lx,
            name: "DataInteractive",
          });
        }),
        lw = m(n(36439), 1),
        lS = n(36439),
        lP = m(n(36439), 1);
      function lI({
        defaultContainers: e = [],
        portals: t,
        mainTreeNode: n,
      } = {}) {
        let r = eM(() => {
          var r, o;
          let l = ey(n),
            i = [];
          for (let t of e)
            null !== t &&
              (tf(t)
                ? i.push(t)
                : "current" in t && tf(t.current) && i.push(t.current));
          if (null != t && t.current) for (let e of t.current) i.push(e);
          for (let e of null !=
          (r = null == l ? void 0 : l.querySelectorAll("html > *, body > *"))
            ? r
            : [])
            e !== document.body &&
              e !== document.head &&
              tf(e) &&
              "headlessui-portal-root" !== e.id &&
              ((n &&
                (e.contains(n) ||
                  e.contains(
                    null == (o = null == n ? void 0 : n.getRootNode())
                      ? void 0
                      : o.host,
                  ))) ||
                i.some((t) => e.contains(t)) ||
                i.push(e));
          return i;
        });
        return {
          resolveContainers: r,
          contains: eM((e) => r().some((t) => t.contains(e))),
        };
      }
      var lT = (0, lP.createContext)(null);
      function lC({ children: e, node: t }) {
        let [n, r] = (0, lP.useState)(null),
          o = lR(null != t ? t : n);
        return lP.default.createElement(
          lT.Provider,
          { value: o },
          e,
          null === o &&
            lP.default.createElement(tt, {
              features: 4,
              ref: (e) => {
                var t, n;
                if (e) {
                  for (let o of null !=
                  (n =
                    null == (t = ey(e))
                      ? void 0
                      : t.querySelectorAll("html > *, body > *"))
                    ? n
                    : [])
                    if (
                      o !== document.body &&
                      o !== document.head &&
                      tf(o) &&
                      null != o &&
                      o.contains(e)
                    ) {
                      r(o);
                      break;
                    }
                }
              },
            }),
        );
      }
      function lR(e = null) {
        var t;
        return null != (t = (0, lP.useContext)(lT)) ? t : e;
      }
      var lO = m(n(36439), 1),
        lk = n(36439);
      function lF() {
        let e = (0, lk.useRef)(!1);
        return (
          ek(
            () => (
              (e.current = !0),
              () => {
                e.current = !1;
              }
            ),
            [],
          ),
          e
        );
      }
      var lM = n(36439);
      function lD() {
        let e = (0, lM.useRef)(0);
        return (
          nV(
            !0,
            "keydown",
            (t) => {
              "Tab" === t.key && (e.current = +!!t.shiftKey);
            },
            !0,
          ),
          e
        );
      }
      function lA(e) {
        if (!e) return new Set();
        if ("function" == typeof e) return new Set(e());
        let t = new Set();
        for (let n of e.current) tf(n.current) && t.add(n.current);
        return t;
      }
      var lL =
          (((i = lL || {})[(i.None = 0)] = "None"),
          (i[(i.InitialFocus = 1)] = "InitialFocus"),
          (i[(i.TabLock = 2)] = "TabLock"),
          (i[(i.FocusLock = 4)] = "FocusLock"),
          (i[(i.RestoreFocus = 8)] = "RestoreFocus"),
          (i[(i.AutoFocus = 16)] = "AutoFocus"),
          i),
        l_ = Object.assign(
          eq(function (e, t) {
            let n = (0, lO.useRef)(null),
              r = tS(n, t),
              {
                initialFocus: o,
                initialFocusFallback: l,
                containers: i,
                features: a = 15,
                ...s
              } = e;
            oU() || (a = 0);
            let u = nG(n.current);
            !(function (e, { ownerDocument: t }) {
              let n = !!(8 & e),
                r = (function (e = !0) {
                  let t = (0, lO.useRef)(oj.slice());
                  return (
                    ra(
                      ([e], [n]) => {
                        (!0 === n &&
                          !1 === e &&
                          eP(() => {
                            t.current.splice(0);
                          }),
                          !1 === n && !0 === e && (t.current = oj.slice()));
                      },
                      [e, oj, t],
                    ),
                    eM(() => {
                      var e;
                      return null !=
                        (e = t.current.find((e) => null != e && e.isConnected))
                        ? e
                        : null;
                    })
                  );
                })(n);
              (ra(() => {
                n || (ew(null == t ? void 0 : t.body) && nD(r()));
              }, [n]),
                oG(() => {
                  n && nD(r());
                }));
            })(a, { ownerDocument: u });
            let c = (function (
              e,
              {
                ownerDocument: t,
                container: n,
                initialFocus: r,
                initialFocusFallback: o,
              },
            ) {
              let l = (0, lO.useRef)(null),
                i = ny(!!(1 & e), "focus-trap#initial-focus"),
                a = lF();
              return (
                ra(() => {
                  if (0 === e) return;
                  if (!i) {
                    null != o && o.current && nD(o.current);
                    return;
                  }
                  let s = n.current;
                  s &&
                    eP(() => {
                      if (!a.current) return;
                      let n = null == t ? void 0 : t.activeElement;
                      if (null != r && r.current) {
                        if ((null == r ? void 0 : r.current) === n) {
                          l.current = n;
                          return;
                        }
                      } else if (s.contains(n)) {
                        l.current = n;
                        return;
                      }
                      if (null != r && r.current) nD(r.current);
                      else {
                        if (16 & e) {
                          if (0 !== n_(s, 65)) return;
                        } else if (0 !== n_(s, 1)) return;
                        if (
                          null != o &&
                          o.current &&
                          (nD(o.current),
                          (null == t ? void 0 : t.activeElement) === o.current)
                        )
                          return;
                        console.warn(
                          "There are no focusable elements inside the <FocusTrap />",
                        );
                      }
                      l.current = null == t ? void 0 : t.activeElement;
                    });
                }, [o, i, e]),
                l
              );
            })(a, {
              ownerDocument: u,
              container: n,
              initialFocus: o,
              initialFocusFallback: l,
            });
            !(function (
              e,
              {
                ownerDocument: t,
                container: n,
                containers: r,
                previousActiveElement: o,
              },
            ) {
              let l = lF(),
                i = !!(4 & e);
              nZ(
                null == t ? void 0 : t.defaultView,
                "focus",
                (e) => {
                  if (!i || !l.current) return;
                  let t = lA(r);
                  tp(n.current) && t.add(n.current);
                  let a = o.current;
                  if (!a) return;
                  let s = e.target;
                  tp(s)
                    ? lN(t, s)
                      ? ((o.current = s), nD(s))
                      : (e.preventDefault(), e.stopPropagation(), nD(a))
                    : nD(o.current);
                },
                !0,
              );
            })(a, {
              ownerDocument: u,
              container: n,
              containers: i,
              previousActiveElement: c,
            });
            let d = lD(),
              f = eM((e) => {
                if (!tp(n.current)) return;
                let t = n.current;
                eV(d.current, {
                  0: () => {
                    n_(t, 1, { skipElements: [e.relatedTarget, l] });
                  },
                  1: () => {
                    n_(t, 8, { skipElements: [e.relatedTarget, l] });
                  },
                });
              }),
              p = ny(!!(2 & a), "focus-trap#tab-lock"),
              v = eT(),
              m = (0, lO.useRef)(!1),
              h = ez();
            return lO.default.createElement(
              lO.default.Fragment,
              null,
              p &&
                lO.default.createElement(tt, {
                  as: "button",
                  type: "button",
                  "data-headlessui-focus-guard": !0,
                  onFocus: f,
                  features: 2,
                }),
              h({
                ourProps: {
                  ref: r,
                  onKeyDown(e) {
                    "Tab" == e.key &&
                      ((m.current = !0),
                      v.requestAnimationFrame(() => {
                        m.current = !1;
                      }));
                  },
                  onBlur(e) {
                    if (!(4 & a)) return;
                    let t = lA(i);
                    tp(n.current) && t.add(n.current);
                    let r = e.relatedTarget;
                    tv(r) &&
                      "true" !== r.dataset.headlessuiFocusGuard &&
                      (lN(t, r) ||
                        (m.current
                          ? n_(
                              n.current,
                              16 | eV(d.current, { 0: () => 4, 1: () => 2 }),
                              { relativeTo: e.target },
                            )
                          : tv(e.target) && nD(e.target)));
                  },
                },
                theirProps: s,
                defaultTag: "div",
                name: "FocusTrap",
              }),
              p &&
                lO.default.createElement(tt, {
                  as: "button",
                  type: "button",
                  "data-headlessui-focus-guard": !0,
                  onFocus: f,
                  features: 2,
                }),
            );
          }),
          { features: lL },
        );
      function lN(e, t) {
        for (let n of e) if (n.contains(t)) return !0;
        return !1;
      }
      var lB = m(n(36439), 1);
      function lj(e) {
        var t;
        return (
          !!(
            e.enter ||
            e.enterFrom ||
            e.enterTo ||
            e.leave ||
            e.leaveFrom ||
            e.leaveTo
          ) ||
          !eX(null != (t = e.as) ? t : lW) ||
          1 === lB.default.Children.count(e.children)
        );
      }
      var lH = (0, lB.createContext)(null);
      lH.displayName = "TransitionContext";
      var l$ = (0, lB.createContext)(null);
      function lV(e) {
        return "children" in e
          ? lV(e.children)
          : e.current
              .filter(({ el: e }) => null !== e.current)
              .filter(({ state: e }) => "visible" === e).length > 0;
      }
      function lz(e, t) {
        let n = eF(e),
          r = (0, lB.useRef)([]),
          o = lF(),
          l = eT(),
          i = eM((e, t = 1) => {
            let i = r.current.findIndex(({ el: t }) => t === e);
            -1 !== i &&
              (eV(t, {
                0() {
                  r.current.splice(i, 1);
                },
                1() {
                  r.current[i].state = "hidden";
                },
              }),
              l.microTask(() => {
                var e;
                !lV(r) && o.current && (null == (e = n.current) || e.call(n));
              }));
          }),
          a = eM((e) => {
            let t = r.current.find(({ el: t }) => t === e);
            return (
              t
                ? "visible" !== t.state && (t.state = "visible")
                : r.current.push({ el: e, state: "visible" }),
              () => i(e, 0)
            );
          }),
          s = (0, lB.useRef)([]),
          u = (0, lB.useRef)(Promise.resolve()),
          c = (0, lB.useRef)({ enter: [], leave: [] }),
          d = eM((e, n, r) => {
            (s.current.splice(0),
              t &&
                (t.chains.current[n] = t.chains.current[n].filter(
                  ([t]) => t !== e,
                )),
              null == t ||
                t.chains.current[n].push([
                  e,
                  new Promise((e) => {
                    s.current.push(e);
                  }),
                ]),
              null == t ||
                t.chains.current[n].push([
                  e,
                  new Promise((e) => {
                    Promise.all(c.current[n].map(([e, t]) => t)).then(() =>
                      e(),
                    );
                  }),
                ]),
              "enter" === n
                ? (u.current = u.current
                    .then(() => (null == t ? void 0 : t.wait.current))
                    .then(() => r(n)))
                : r(n));
          }),
          f = eM((e, t, n) => {
            Promise.all(c.current[t].splice(0).map(([e, t]) => t))
              .then(() => {
                var e;
                null == (e = s.current.shift()) || e();
              })
              .then(() => n(t));
          });
        return (0, lB.useMemo)(
          () => ({
            children: r,
            register: a,
            unregister: i,
            onStart: d,
            onStop: f,
            wait: u,
            chains: c,
          }),
          [a, i, r, d, f, c, u],
        );
      }
      l$.displayName = "NestingContext";
      var lW = lB.Fragment,
        lG = eq(function (e, t) {
          let { show: n, appear: r = !1, unmount: o = !0, ...l } = e,
            i = (0, lB.useRef)(null),
            a = tS(...(lj(e) ? [i, t] : null === t ? [] : [t]));
          oU();
          let s = o_();
          if ((void 0 === n && null !== s && (n = (1 & s) == 1), void 0 === n))
            throw Error(
              "A <Transition /> is used but it is missing a `show={true | false}` prop.",
            );
          let [u, c] = (0, lB.useState)(n ? "visible" : "hidden"),
            d = lz(() => {
              n || c("hidden");
            }),
            [f, p] = (0, lB.useState)(!0),
            v = (0, lB.useRef)([n]);
          ek(() => {
            !1 !== f &&
              v.current[v.current.length - 1] !== n &&
              (v.current.push(n), p(!1));
          }, [v, n]);
          let m = (0, lB.useMemo)(
            () => ({ show: n, appear: r, initial: f }),
            [n, r, f],
          );
          ek(() => {
            n ? c("visible") : lV(d) || null === i.current || c("hidden");
          }, [n, d]);
          let h = { unmount: o },
            b = eM(() => {
              var t;
              (f && p(!1), null == (t = e.beforeEnter) || t.call(e));
            }),
            g = eM(() => {
              var t;
              (f && p(!1), null == (t = e.beforeLeave) || t.call(e));
            }),
            y = ez();
          return lB.default.createElement(
            l$.Provider,
            { value: d },
            lB.default.createElement(
              lH.Provider,
              { value: m },
              y({
                ourProps: {
                  ...h,
                  as: lB.Fragment,
                  children: lB.default.createElement(lK, {
                    ref: a,
                    ...h,
                    ...l,
                    beforeEnter: b,
                    beforeLeave: g,
                  }),
                },
                theirProps: {},
                defaultTag: lB.Fragment,
                features: 1,
                visible: "visible" === u,
                name: "Transition",
              }),
            ),
          );
        }),
        lK = eq(function (e, t) {
          var n, r;
          let {
              transition: o = !0,
              beforeEnter: l,
              afterEnter: i,
              beforeLeave: a,
              afterLeave: s,
              enter: u,
              enterFrom: c,
              enterTo: d,
              entered: f,
              leave: p,
              leaveFrom: v,
              leaveTo: m,
              ...h
            } = e,
            [b, g] = (0, lB.useState)(null),
            y = (0, lB.useRef)(null),
            x = lj(e),
            E = tS(...(x ? [y, t, g] : null === t ? [] : [t])),
            w = null == (n = h.unmount) || n ? 0 : 1,
            {
              show: S,
              appear: P,
              initial: I,
            } = (function () {
              let e = (0, lB.useContext)(lH);
              if (null === e)
                throw Error(
                  "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.",
                );
              return e;
            })(),
            [T, C] = (0, lB.useState)(S ? "visible" : "hidden"),
            R = (function () {
              let e = (0, lB.useContext)(l$);
              if (null === e)
                throw Error(
                  "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.",
                );
              return e;
            })(),
            { register: O, unregister: k } = R;
          (ek(() => O(y), [O, y]),
            ek(() => {
              if (1 === w && y.current)
                return S && "visible" !== T
                  ? void C("visible")
                  : eV(T, { hidden: () => k(y), visible: () => O(y) });
            }, [T, y, O, k, S, w]));
          let F = oU();
          ek(() => {
            if (x && F && "visible" === T && null === y.current)
              throw Error(
                "Did you forget to passthrough the `ref` to the actual DOM node?",
              );
          }, [y, T, F, x]);
          let M = I && !P,
            D = P && S && I,
            A = (0, lB.useRef)(!1),
            L = lz(() => {
              A.current || (C("hidden"), k(y));
            }, R),
            _ = eM((e) => {
              ((A.current = !0),
                L.onStart(y, e ? "enter" : "leave", (e) => {
                  "enter" === e
                    ? null == l || l()
                    : "leave" === e && (null == a || a());
                }));
            }),
            N = eM((e) => {
              let t = e ? "enter" : "leave";
              ((A.current = !1),
                L.onStop(y, t, (e) => {
                  "enter" === e
                    ? null == i || i()
                    : "leave" === e && (null == s || s());
                }),
                "leave" !== t || lV(L) || (C("hidden"), k(y)));
            });
          (0, lB.useEffect)(() => {
            (x && o) || (_(S), N(S));
          }, [S, x, o]);
          let [, B] = rr(!(!o || !x || !F || M), b, S, { start: _, end: N }),
            j = eY({
              ref: E,
              className:
                (null ==
                (r = e$(
                  h.className,
                  D && u,
                  D && c,
                  B.enter && u,
                  B.enter && B.closed && c,
                  B.enter && !B.closed && d,
                  B.leave && p,
                  B.leave && !B.closed && v,
                  B.leave && B.closed && m,
                  !B.transition && S && f,
                ))
                  ? void 0
                  : r.trim()) || void 0,
              ...rn(B),
            }),
            H = 0;
          ("visible" === T && (H |= 1),
            "hidden" === T && (H |= 2),
            S && "hidden" === T && (H |= 8),
            S || "visible" !== T || (H |= 4));
          let $ = ez();
          return lB.default.createElement(
            l$.Provider,
            { value: L },
            lB.default.createElement(
              oN,
              { value: H },
              $({
                ourProps: j,
                theirProps: h,
                defaultTag: lW,
                features: 1,
                visible: "visible" === T,
                name: "Transition.Child",
              }),
            ),
          );
        }),
        lU = eq(function (e, t) {
          let n = null !== (0, lB.useContext)(lH),
            r = null !== o_();
          return lB.default.createElement(
            lB.default.Fragment,
            null,
            !n && r
              ? lB.default.createElement(lG, { ref: t, ...e })
              : lB.default.createElement(lK, { ref: t, ...e }),
          );
        }),
        lq = Object.assign(lG, { Child: lU, Root: lG }),
        lY = {
          0: (e, t) => (e.titleId === t.id ? e : { ...e, titleId: t.id }),
        },
        lQ = (0, lw.createContext)(null);
      function lX(e) {
        let t = (0, lw.useContext)(lQ);
        if (null === t) {
          let t = Error(`<${e} /> is missing a parent <Dialog /> component.`);
          throw (Error.captureStackTrace && Error.captureStackTrace(t, lX), t);
        }
        return t;
      }
      function lJ(e, t) {
        return eV(t.type, lY, e, t);
      }
      lQ.displayName = "DialogContext";
      var lZ,
        l0,
        l1,
        l3,
        l4,
        l6 = eq(function (e, t) {
          let n = (0, e2.useId)(),
            {
              id: r = `headlessui-dialog-${n}`,
              open: o,
              onClose: l,
              initialFocus: i,
              role: a = "dialog",
              autoFocus: s = !0,
              __demoMode: u = !1,
              unmount: c = !1,
              ...d
            } = e,
            f = (0, lw.useRef)(!1);
          a =
            "dialog" === a || "alertdialog" === a
              ? a
              : (f.current ||
                  ((f.current = !0),
                  console.warn(
                    `Invalid role [${a}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`,
                  )),
                "dialog");
          let p = o_();
          void 0 === o && null !== p && (o = (1 & p) == 1);
          let v = (0, lw.useRef)(null),
            m = tS(v, t),
            h = nG(v.current),
            b = +!o,
            [g, y] = (0, lw.useReducer)(lJ, {
              titleId: null,
              descriptionId: null,
              panelRef: (0, lw.createRef)(),
            }),
            x = eM(() => l(!1)),
            E = eM((e) => y({ type: 0, id: e })),
            w = !!oU() && 0 === b,
            [S, P] = o3(),
            I = lR(),
            { resolveContainers: T } = lI({
              mainTreeNode: I,
              portals: S,
              defaultContainers: [
                {
                  get current() {
                    var e;
                    return null != (e = g.panelRef.current) ? e : v.current;
                  },
                },
              ],
            }),
            C = null !== p && (4 & p) == 4;
          nP(!u && !C && w, {
            allowed: eM(() => {
              var e, t;
              return [
                null !=
                (t =
                  null == (e = v.current)
                    ? void 0
                    : e.closest("[data-headlessui-portal]"))
                  ? t
                  : null,
              ];
            }),
            disallowed: eM(() => {
              var e;
              return [
                null !=
                (e =
                  null == I
                    ? void 0
                    : I.closest("body > *:not(#headlessui-portal-root)"))
                  ? e
                  : null,
              ];
            }),
          });
          let R = nm.get(null);
          ek(() => {
            if (w) return (R.actions.push(r), () => R.actions.pop(r));
          }, [R, r, w]);
          let O = nb(
            R,
            (0, lw.useCallback)((e) => R.selectors.isTop(e, r), [R, r]),
          );
          (nz(O, T, (e) => {
            (e.preventDefault(), x());
          }),
            (function (
              e,
              t = "u" > typeof document ? document.defaultView : null,
              n,
            ) {
              let r = ny(e, "escape");
              nZ(t, "keydown", (e) => {
                r && (e.defaultPrevented || ("Escape" === e.key && n(e)));
              });
            })(O, null == h ? void 0 : h.defaultView, (e) => {
              (e.preventDefault(),
                e.stopPropagation(),
                document.activeElement &&
                  "blur" in document.activeElement &&
                  "function" == typeof document.activeElement.blur &&
                  document.activeElement.blur(),
                x());
            }),
            n9(!u && !C && w, h, T),
            nT(w, v, x));
          let [k, F] = tT(),
            M = (0, lw.useMemo)(
              () => [
                { dialogState: b, close: x, setTitleId: E, unmount: c },
                g,
              ],
              [b, x, E, c, g],
            ),
            D = eL({ open: 0 === b }),
            A = {
              ref: m,
              id: r,
              role: a,
              tabIndex: -1,
              "aria-modal": u ? void 0 : 0 === b || void 0,
              "aria-labelledby": g.titleId,
              "aria-describedby": k,
              unmount: c,
            },
            L = !(function () {
              var e;
              let [t] = (0, lS.useState)(() =>
                  "u" > typeof window && "function" == typeof window.matchMedia
                    ? window.matchMedia("(pointer: coarse)")
                    : null,
                ),
                [n, r] = (0, lS.useState)(
                  null != (e = null == t ? void 0 : t.matches) && e,
                );
              return (
                ek(() => {
                  if (t)
                    return (
                      t.addEventListener("change", e),
                      () => t.removeEventListener("change", e)
                    );
                  function e(e) {
                    r(e.matches);
                  }
                }, [t]),
                n
              );
            })(),
            _ = 0;
          w && !u && ((_ |= 8), (_ |= 2), s && (_ |= 16), L && (_ |= 1));
          let N = ez();
          return lw.default.createElement(
            oB,
            null,
            lw.default.createElement(
              oQ,
              { force: !0 },
              lw.default.createElement(
                o2,
                null,
                lw.default.createElement(
                  lQ.Provider,
                  { value: M },
                  lw.default.createElement(
                    o6,
                    { target: v },
                    lw.default.createElement(
                      oQ,
                      { force: !1 },
                      lw.default.createElement(
                        F,
                        { slot: D },
                        lw.default.createElement(
                          P,
                          null,
                          lw.default.createElement(
                            l_,
                            {
                              initialFocus: i,
                              initialFocusFallback: v,
                              containers: T,
                              features: _,
                            },
                            lw.default.createElement(
                              tj,
                              { value: x },
                              N({
                                ourProps: A,
                                theirProps: d,
                                slot: D,
                                defaultTag: l2,
                                features: l9,
                                visible: 0 === b,
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
            ),
          );
        }),
        l2 = "div",
        l9 = 3,
        l5 = eq(function (e, t) {
          let { transition: n = !1, open: r, ...o } = e,
            l = o_(),
            i = e.hasOwnProperty("open") || null !== l,
            a = e.hasOwnProperty("onClose");
          if (!i && !a)
            throw Error(
              "You have to provide an `open` and an `onClose` prop to the `Dialog` component.",
            );
          if (!i)
            throw Error(
              "You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.",
            );
          if (!a)
            throw Error(
              "You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.",
            );
          if (!l && "boolean" != typeof e.open)
            throw Error(
              `You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`,
            );
          if ("function" != typeof e.onClose)
            throw Error(
              `You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`,
            );
          return (void 0 !== r || n) && !o.static
            ? lw.default.createElement(
                lC,
                null,
                lw.default.createElement(
                  lq,
                  { show: r, transition: n, unmount: o.unmount },
                  lw.default.createElement(l6, { ref: t, ...o }),
                ),
              )
            : lw.default.createElement(
                lC,
                null,
                lw.default.createElement(l6, { ref: t, open: r, ...o }),
              );
        }),
        l8 = eq(function (e, t) {
          let n = (0, e2.useId)(),
            {
              id: r = `headlessui-dialog-panel-${n}`,
              transition: o = !1,
              ...l
            } = e,
            [{ dialogState: i, unmount: a }, s] = lX("Dialog.Panel"),
            u = tS(t, s.panelRef),
            c = eL({ open: 0 === i }),
            d = eM((e) => {
              e.stopPropagation();
            }),
            f = o ? lU : lw.Fragment,
            p = ez();
          return lw.default.createElement(
            f,
            { ...(o ? { unmount: a } : {}) },
            p({
              ourProps: { ref: u, id: r, onClick: d },
              theirProps: l,
              slot: c,
              defaultTag: "div",
              name: "Dialog.Panel",
            }),
          );
        }),
        l7 = eq(function (e, t) {
          let { transition: n = !1, ...r } = e,
            [{ dialogState: o, unmount: l }] = lX("Dialog.Backdrop"),
            i = eL({ open: 0 === o }),
            a = n ? lU : lw.Fragment,
            s = ez();
          return lw.default.createElement(
            a,
            { ...(n ? { unmount: l } : {}) },
            s({
              ourProps: { ref: t, "aria-hidden": !0 },
              theirProps: r,
              slot: i,
              defaultTag: "div",
              name: "Dialog.Backdrop",
            }),
          );
        }),
        ie = eq(function (e, t) {
          let n = (0, e2.useId)(),
            { id: r = `headlessui-dialog-title-${n}`, ...o } = e,
            [{ dialogState: l, setTitleId: i }] = lX("Dialog.Title"),
            a = tS(t);
          (0, lw.useEffect)(() => (i(r), () => i(null)), [r, i]);
          let s = eL({ open: 0 === l });
          return ez()({
            ourProps: { ref: a, id: r },
            theirProps: o,
            slot: s,
            defaultTag: "h2",
            name: "Dialog.Title",
          });
        }),
        it = tC,
        ir = Object.assign(l5, { Panel: l8, Title: ie, Description: tC }),
        io = m(n(36439), 1),
        il =
          null != (l4 = m(n(36439), 1).default.startTransition)
            ? l4
            : function (e) {
                e();
              },
        ii = {
          0: (e) => ({
            ...e,
            disclosureState: eV(e.disclosureState, { 0: 1, 1: 0 }),
          }),
          1: (e) =>
            1 === e.disclosureState ? e : { ...e, disclosureState: 1 },
          2: (e, t) =>
            e.buttonId === t.buttonId ? e : { ...e, buttonId: t.buttonId },
          3: (e, t) =>
            e.panelId === t.panelId ? e : { ...e, panelId: t.panelId },
          4: (e, t) =>
            e.buttonElement === t.element
              ? e
              : { ...e, buttonElement: t.element },
          5: (e, t) =>
            e.panelElement === t.element
              ? e
              : { ...e, panelElement: t.element },
        },
        ia = (0, io.createContext)(null);
      function is(e) {
        let t = (0, io.useContext)(ia);
        if (null === t) {
          let t = Error(
            `<${e} /> is missing a parent <Disclosure /> component.`,
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, is), t);
        }
        return t;
      }
      ia.displayName = "DisclosureContext";
      var iu = (0, io.createContext)(null);
      iu.displayName = "DisclosureAPIContext";
      var ic = (0, io.createContext)(null);
      function id(e, t) {
        return eV(t.type, ii, e, t);
      }
      ic.displayName = "DisclosurePanelContext";
      var ip = io.Fragment,
        iv = eq(function (e, t) {
          let { defaultOpen: n = !1, ...r } = e,
            o = (0, io.useRef)(null),
            l = tS(
              t,
              tw(
                (e) => {
                  o.current = e;
                },
                void 0 === e.as || eX(e.as),
              ),
            ),
            i = (0, io.useReducer)(id, {
              disclosureState: +!n,
              buttonElement: null,
              panelElement: null,
              buttonId: null,
              panelId: null,
            }),
            [{ disclosureState: a, buttonId: s }, u] = i,
            c = eM((e) => {
              u({ type: 1 });
              let t = ey(o.current);
              if (!t || !s) return;
              let n = e
                ? tv(e)
                  ? e
                  : "current" in e && tv(e.current)
                    ? e.current
                    : t.getElementById(s)
                : t.getElementById(s);
              null == n || n.focus();
            }),
            d = (0, io.useMemo)(() => ({ close: c }), [c]),
            f = eL({ open: 0 === a, close: c }),
            p = ez();
          return io.default.createElement(
            ia.Provider,
            { value: i },
            io.default.createElement(
              iu.Provider,
              { value: d },
              io.default.createElement(
                tj,
                { value: c },
                io.default.createElement(
                  oN,
                  { value: eV(a, { 0: 1, 1: 2 }) },
                  p({
                    ourProps: { ref: l },
                    theirProps: r,
                    slot: f,
                    defaultTag: ip,
                    name: "Disclosure",
                  }),
                ),
              ),
            ),
          );
        }),
        im = eq(function (e, t) {
          let n = (0, e2.useId)(),
            {
              id: r = `headlessui-disclosure-button-${n}`,
              disabled: o = !1,
              autoFocus: l = !1,
              ...i
            } = e,
            [a, s] = is("Disclosure.Button"),
            u = (0, io.useContext)(ic),
            c = null !== u && u === a.panelId,
            d = tS(
              (0, io.useRef)(null),
              t,
              eM((e) => {
                if (!c) return s({ type: 4, element: e });
              }),
            );
          (0, io.useEffect)(() => {
            if (!c)
              return (
                s({ type: 2, buttonId: r }),
                () => {
                  s({ type: 2, buttonId: null });
                }
              );
          }, [r, s, c]);
          let f = eM((e) => {
              var t;
              if (c) {
                if (1 === a.disclosureState) return;
                switch (e.key) {
                  case " ":
                  case "Enter":
                    (e.preventDefault(),
                      e.stopPropagation(),
                      s({ type: 0 }),
                      null == (t = a.buttonElement) || t.focus());
                }
              } else
                switch (e.key) {
                  case " ":
                  case "Enter":
                    (e.preventDefault(), e.stopPropagation(), s({ type: 0 }));
                }
            }),
            p = eM((e) => {
              " " === e.key && e.preventDefault();
            }),
            v = eM((e) => {
              var t;
              tg(e.currentTarget) ||
                o ||
                (c
                  ? (s({ type: 0 }), null == (t = a.buttonElement) || t.focus())
                  : s({ type: 0 }));
            }),
            { isFocusVisible: m, focusProps: h } = eh({ autoFocus: l }),
            { isHovered: b, hoverProps: g } = ev({ isDisabled: o }),
            { pressed: y, pressProps: x } = eD({ disabled: o }),
            E = eL({
              open: 0 === a.disclosureState,
              hover: b,
              active: y,
              disabled: o,
              focus: m,
              autofocus: l,
            }),
            w = n3(e, a.buttonElement),
            S = c
              ? eU(
                  {
                    ref: d,
                    type: w,
                    disabled: o || void 0,
                    autoFocus: l,
                    onKeyDown: f,
                    onClick: v,
                  },
                  h,
                  g,
                  x,
                )
              : eU(
                  {
                    ref: d,
                    id: r,
                    type: w,
                    "aria-expanded": 0 === a.disclosureState,
                    "aria-controls": a.panelElement ? a.panelId : void 0,
                    disabled: o || void 0,
                    autoFocus: l,
                    onKeyDown: f,
                    onKeyUp: p,
                    onClick: v,
                  },
                  h,
                  g,
                  x,
                );
          return ez()({
            ourProps: S,
            theirProps: i,
            slot: E,
            defaultTag: "button",
            name: "Disclosure.Button",
          });
        }),
        ih = eq(function (e, t) {
          let n = (0, e2.useId)(),
            {
              id: r = `headlessui-disclosure-panel-${n}`,
              transition: o = !1,
              ...l
            } = e,
            [i, a] = is("Disclosure.Panel"),
            { close: s } = (function e(t) {
              let n = (0, io.useContext)(iu);
              if (null === n) {
                let n = Error(
                  `<${t} /> is missing a parent <Disclosure /> component.`,
                );
                throw (
                  Error.captureStackTrace && Error.captureStackTrace(n, e),
                  n
                );
              }
              return n;
            })("Disclosure.Panel"),
            [u, c] = (0, io.useState)(null),
            d = tS(
              t,
              eM((e) => {
                il(() => a({ type: 5, element: e }));
              }),
              c,
            );
          (0, io.useEffect)(
            () => (
              a({ type: 3, panelId: r }),
              () => {
                a({ type: 3, panelId: null });
              }
            ),
            [r, a],
          );
          let f = o_(),
            [p, v] = rr(
              o,
              u,
              null !== f ? (1 & f) == 1 : 0 === i.disclosureState,
            ),
            m = eL({ open: 0 === i.disclosureState, close: s }),
            h = { ref: d, id: r, ...rn(v) },
            b = ez();
          return io.default.createElement(
            oB,
            null,
            io.default.createElement(
              ic.Provider,
              { value: i.panelId },
              b({
                ourProps: h,
                theirProps: l,
                slot: m,
                defaultTag: "div",
                features: 3,
                visible: p,
                name: "Disclosure.Panel",
              }),
            ),
          );
        }),
        ib = Object.assign(iv, { Button: im, Panel: ih }),
        ig = m(n(36439), 1),
        iy = eq(function (e, t) {
          let n = `headlessui-control-${(0, e2.useId)()}`,
            [r, o] = tM(),
            [l, i] = tT(),
            a = eB(),
            { disabled: s = a || !1, ...u } = e,
            c = eL({ disabled: s }),
            d = ez();
          return ig.default.createElement(
            ej,
            { value: s },
            ig.default.createElement(
              o,
              { value: r },
              ig.default.createElement(
                i,
                { value: l },
                ig.default.createElement(
                  tc,
                  { id: n },
                  d({
                    ourProps: {
                      ref: t,
                      disabled: s || void 0,
                      "aria-disabled": s || void 0,
                    },
                    theirProps: {
                      ...u,
                      children: ig.default.createElement(
                        tr,
                        null,
                        "function" == typeof u.children
                          ? u.children(c)
                          : u.children,
                      ),
                    },
                    slot: c,
                    defaultTag: "div",
                    name: "Field",
                  }),
                ),
              ),
            ),
          );
        }),
        ix = m(n(36439), 1),
        iE = n(36439),
        iw = "fieldset",
        iS = eq(function (e, t) {
          var n;
          let r = eB(),
            { disabled: o = r || !1, ...l } = e,
            [i, a] = (function (e) {
              let t = "string" == typeof e ? e : void 0,
                [n, r] = (0, iE.useState)(t);
              return [
                null != t ? t : n,
                (0, iE.useCallback)(
                  (e) => {
                    t || (tp(e) && r(e.tagName.toLowerCase()));
                  },
                  [t],
                ),
              ];
            })(null != (n = e.as) ? n : iw),
            s = tS(t, a),
            [u, c] = tM(),
            d = eL({ disabled: o }),
            f =
              "fieldset" === i
                ? { ref: s, "aria-labelledby": u, disabled: o || void 0 }
                : {
                    ref: s,
                    role: "group",
                    "aria-labelledby": u,
                    "aria-disabled": o || void 0,
                  },
            p = ez();
          return ix.default.createElement(
            ej,
            { value: o },
            ix.default.createElement(
              c,
              null,
              p({
                ourProps: f,
                theirProps: l,
                slot: d,
                defaultTag: iw,
                name: "Fieldset",
              }),
            ),
          );
        }),
        iP = eq(function (e, t) {
          let n = (0, e2.useId)(),
            r = tu(),
            o = eB(),
            {
              id: l = r || `headlessui-input-${n}`,
              disabled: i = o || !1,
              autoFocus: a = !1,
              invalid: s = !1,
              ...u
            } = e,
            c = tF(),
            d = tI(),
            { isFocused: f, focusProps: p } = eh({ autoFocus: a }),
            { isHovered: v, hoverProps: m } = ev({ isDisabled: i }),
            h = eU(
              {
                ref: t,
                id: l,
                "aria-labelledby": c,
                "aria-describedby": d,
                "aria-invalid": s ? "true" : void 0,
                disabled: i || void 0,
                autoFocus: a,
              },
              p,
              m,
            ),
            b = eL({
              disabled: i,
              invalid: s,
              hover: v,
              focus: f,
              autofocus: a,
            });
          return ez()({
            ourProps: h,
            theirProps: u,
            slot: b,
            defaultTag: "input",
            name: "Input",
          });
        }),
        iI = m(n(36439), 1),
        iT = eq(function (e, t) {
          return iI.default.createElement(tD, { as: "div", ref: t, ...e });
        }),
        iC = m(n(36439), 1),
        iR = n(72354),
        iO = n(36439),
        ik =
          /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
      function iF(e) {
        var t, n;
        let r = null != (t = e.innerText) ? t : "",
          o = e.cloneNode(!0);
        if (!tp(o)) return r;
        let l = !1;
        for (let e of o.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
          (e.remove(), (l = !0));
        let i = l ? (null != (n = o.innerText) ? n : "") : r;
        return (ik.test(i) && (i = i.replace(ik, "")), i);
      }
      function iM(e) {
        let t = (0, iO.useRef)(""),
          n = (0, iO.useRef)("");
        return eM(() => {
          let r = e.current;
          if (!r) return "";
          let o = r.innerText;
          if (t.current === o) return n.current;
          let l = (function (e) {
            let t = e.getAttribute("aria-label");
            if ("string" == typeof t) return t.trim();
            let n = e.getAttribute("aria-labelledby");
            if (n) {
              let e = n
                .split(" ")
                .map((e) => {
                  let t = document.getElementById(e);
                  if (t) {
                    let e = t.getAttribute("aria-label");
                    return "string" == typeof e ? e.trim() : iF(t).trim();
                  }
                  return null;
                })
                .filter(Boolean);
              if (e.length > 0) return e.join(", ");
            }
            return iF(e).trim();
          })(r)
            .trim()
            .toLowerCase();
          return ((t.current = o), (n.current = l), l);
        });
      }
      function iD(e, t = (e) => e) {
        let n =
            null !== e.activeOptionIndex
              ? e.options[e.activeOptionIndex]
              : null,
          r = nA(t(e.options.slice()), (e) => e.dataRef.current.domRef.current),
          o = n ? r.indexOf(n) : null;
        return (-1 === o && (o = null), { options: r, activeOptionIndex: o });
      }
      var iA = {
          1(e) {
            if (e.dataRef.current.disabled || 1 === e.listboxState) return e;
            let t = e.buttonElement
              ? o5(o7(e.buttonElement))
              : e.buttonPositionState;
            return {
              ...e,
              activeOptionIndex: null,
              pendingFocus: { focus: 5 },
              listboxState: 1,
              __demoMode: !1,
              buttonPositionState: t,
            };
          },
          0(e, t) {
            if (e.dataRef.current.disabled || 0 === e.listboxState) return e;
            let n = e.activeOptionIndex,
              { isSelected: r } = e.dataRef.current,
              o = e.options.findIndex((e) => r(e.dataRef.current.value));
            return (
              -1 !== o && (n = o),
              {
                ...e,
                frozenValue: !1,
                pendingFocus: t.focus,
                listboxState: 0,
                activeOptionIndex: n,
                __demoMode: !1,
                buttonPositionState: o9,
              }
            );
          },
          2(e, t) {
            var n, r, o, l, i;
            if (e.dataRef.current.disabled || 1 === e.listboxState) return e;
            let a = {
              ...e,
              searchQuery: "",
              activationTrigger: null != (n = t.trigger) ? n : 1,
              __demoMode: !1,
            };
            if (5 === t.focus) return { ...a, activeOptionIndex: null };
            if (4 === t.focus)
              return {
                ...a,
                activeOptionIndex: e.options.findIndex((e) => e.id === t.id),
              };
            if (1 === t.focus) {
              let n = e.activeOptionIndex;
              if (null !== n) {
                let l = e.options[n].dataRef.current.domRef,
                  i = o$(t, {
                    resolveItems: () => e.options,
                    resolveActiveIndex: () => e.activeOptionIndex,
                    resolveId: (e) => e.id,
                    resolveDisabled: (e) => e.dataRef.current.disabled,
                  });
                if (null !== i) {
                  let t = e.options[i].dataRef.current.domRef;
                  if (
                    (null == (r = l.current)
                      ? void 0
                      : r.previousElementSibling) === t.current ||
                    (null == (o = t.current)
                      ? void 0
                      : o.previousElementSibling) === null
                  )
                    return { ...a, activeOptionIndex: i };
                }
              }
            } else if (2 === t.focus) {
              let n = e.activeOptionIndex;
              if (null !== n) {
                let r = e.options[n].dataRef.current.domRef,
                  o = o$(t, {
                    resolveItems: () => e.options,
                    resolveActiveIndex: () => e.activeOptionIndex,
                    resolveId: (e) => e.id,
                    resolveDisabled: (e) => e.dataRef.current.disabled,
                  });
                if (null !== o) {
                  let t = e.options[o].dataRef.current.domRef;
                  if (
                    (null == (l = r.current)
                      ? void 0
                      : l.nextElementSibling) === t.current ||
                    (null == (i = t.current)
                      ? void 0
                      : i.nextElementSibling) === null
                  )
                    return { ...a, activeOptionIndex: o };
                }
              }
            }
            let s = iD(e),
              u = o$(t, {
                resolveItems: () => s.options,
                resolveActiveIndex: () => s.activeOptionIndex,
                resolveId: (e) => e.id,
                resolveDisabled: (e) => e.dataRef.current.disabled,
              });
            return { ...a, ...s, activeOptionIndex: u };
          },
          3: (e, t) => {
            if (e.dataRef.current.disabled || 1 === e.listboxState) return e;
            let n = +("" === e.searchQuery),
              r = e.searchQuery + t.value.toLowerCase(),
              o = (
                null !== e.activeOptionIndex
                  ? e.options
                      .slice(e.activeOptionIndex + n)
                      .concat(e.options.slice(0, e.activeOptionIndex + n))
                  : e.options
              ).find((e) => {
                var t;
                return (
                  !e.dataRef.current.disabled &&
                  (null == (t = e.dataRef.current.textValue)
                    ? void 0
                    : t.startsWith(r))
                );
              }),
              l = o ? e.options.indexOf(o) : -1;
            return -1 === l || l === e.activeOptionIndex
              ? { ...e, searchQuery: r }
              : {
                  ...e,
                  searchQuery: r,
                  activeOptionIndex: l,
                  activationTrigger: 1,
                };
          },
          4: (e) =>
            e.dataRef.current.disabled ||
            1 === e.listboxState ||
            "" === e.searchQuery
              ? e
              : { ...e, searchQuery: "" },
          5: (e) =>
            0 === e.dataRef.current.mode ? { ...e, frozenValue: !0 } : { ...e },
          6: (e, t) => {
            let n = e.options.concat(t.options),
              r = e.activeOptionIndex;
            if (
              (5 !== e.pendingFocus.focus &&
                (r = o$(e.pendingFocus, {
                  resolveItems: () => n,
                  resolveActiveIndex: () => e.activeOptionIndex,
                  resolveId: (e) => e.id,
                  resolveDisabled: (e) => e.dataRef.current.disabled,
                })),
              null === e.activeOptionIndex)
            ) {
              let { isSelected: t } = e.dataRef.current;
              if (t) {
                let e = n.findIndex((e) =>
                  null == t ? void 0 : t(e.dataRef.current.value),
                );
                -1 !== e && (r = e);
              }
            }
            return {
              ...e,
              options: n,
              activeOptionIndex: r,
              pendingFocus: { focus: 5 },
              pendingShouldSort: !0,
            };
          },
          7: (e, t) => {
            let n = e.options,
              r = [],
              o = new Set(t.options);
            for (let [e, t] of n.entries())
              if (o.has(t.id) && (r.push(e), o.delete(t.id), 0 === o.size))
                break;
            if (r.length > 0)
              for (let e of ((n = n.slice()), r.reverse())) n.splice(e, 1);
            return { ...e, options: n, activationTrigger: 1 };
          },
          8: (e, t) =>
            e.buttonElement === t.element
              ? e
              : { ...e, buttonElement: t.element },
          9: (e, t) =>
            e.optionsElement === t.element
              ? e
              : { ...e, optionsElement: t.element },
          10: (e) =>
            e.pendingShouldSort ? { ...e, ...iD(e), pendingShouldSort: !1 } : e,
          11: (e) =>
            "Tracked" !== e.buttonPositionState.kind
              ? e
              : { ...e, buttonPositionState: o8 },
        },
        iL = class extends ns {
          constructor(e) {
            (super(e),
              h(this, "actions", {
                onChange: (e) => {
                  let {
                    onChange: t,
                    compare: n,
                    mode: r,
                    value: o,
                  } = this.state.dataRef.current;
                  return eV(r, {
                    0: () => (null == t ? void 0 : t(e)),
                    1: () => {
                      let r = o.slice(),
                        l = r.findIndex((t) => n(t, e));
                      return (
                        -1 === l ? r.push(e) : r.splice(l, 1),
                        null == t ? void 0 : t(r)
                      );
                    },
                  });
                },
                registerOption: nf(() => {
                  let e = [],
                    t = new Set();
                  return [
                    (n, r) => {
                      t.has(r) || (t.add(r), e.push({ id: n, dataRef: r }));
                    },
                    () => (
                      t.clear(),
                      this.send({ type: 6, options: e.splice(0) })
                    ),
                  ];
                }),
                unregisterOption: nf(() => {
                  let e = [];
                  return [
                    (t) => e.push(t),
                    () => {
                      this.send({ type: 7, options: e.splice(0) });
                    },
                  ];
                }),
                goToOption: nf(() => {
                  let e = null;
                  return [
                    (t, n) => {
                      e = { type: 2, ...t, trigger: n };
                    },
                    () => e && this.send(e),
                  ];
                }),
                closeListbox: () => {
                  this.send({ type: 1 });
                },
                openListbox: (e) => {
                  this.send({ type: 0, focus: e });
                },
                selectActiveOption: () => {
                  var e;
                  if (null !== this.state.activeOptionIndex) {
                    let { dataRef: e } =
                      this.state.options[this.state.activeOptionIndex];
                    this.actions.selectOption(e.current.value);
                  } else
                    0 === this.state.dataRef.current.mode &&
                      (this.actions.closeListbox(),
                      null == (e = this.state.buttonElement) ||
                        e.focus({ preventScroll: !0 }));
                },
                selectOption: (e) => {
                  this.send({ type: 5, value: e });
                },
                search: (e) => {
                  this.send({ type: 3, value: e });
                },
                clearSearch: () => {
                  this.send({ type: 4 });
                },
                setButtonElement: (e) => {
                  this.send({ type: 8, element: e });
                },
                setOptionsElement: (e) => {
                  this.send({ type: 9, element: e });
                },
              }),
              h(this, "selectors", {
                activeDescendantId(e) {
                  var t;
                  let n = e.activeOptionIndex,
                    r = e.options;
                  return null === n || null == (t = r[n]) ? void 0 : t.id;
                },
                isActive(e, t) {
                  var n;
                  let r = e.activeOptionIndex,
                    o = e.options;
                  return (
                    null !== r && (null == (n = o[r]) ? void 0 : n.id) === t
                  );
                },
                hasFrozenValue: (e) => e.frozenValue,
                shouldScrollIntoView(e, t) {
                  return (
                    !e.__demoMode &&
                    0 === e.listboxState &&
                    0 !== e.activationTrigger &&
                    this.isActive(e, t)
                  );
                },
                didButtonMove: (e) => "Moved" === e.buttonPositionState.kind,
              }),
              this.on(6, () => {
                requestAnimationFrame(() => {
                  this.send({ type: 10 });
                });
              }));
            {
              let e = this.state.id,
                t = nm.get(null);
              (this.disposables.add(
                t.on(0, (n) => {
                  t.selectors.isTop(n, e) ||
                    0 !== this.state.listboxState ||
                    this.actions.closeListbox();
                }),
              ),
                this.on(0, () => t.actions.push(e)),
                this.on(1, () => t.actions.pop(e)));
            }
            (this.disposables.group((e) => {
              this.on(1, (t) => {
                t.buttonElement &&
                  (e.dispose(),
                  e.add(
                    le(t.buttonElement, t.buttonPositionState, () => {
                      this.send({ type: 11 });
                    }),
                  ));
              });
            }),
              this.on(5, (e, t) => {
                var n;
                (this.actions.onChange(t.value),
                  0 === this.state.dataRef.current.mode &&
                    (this.actions.closeListbox(),
                    null == (n = this.state.buttonElement) ||
                      n.focus({ preventScroll: !0 })));
              }));
          }
          static new({ id: e, __demoMode: t = !1 }) {
            return new iL({
              id: e,
              dataRef: { current: {} },
              listboxState: +!t,
              options: [],
              searchQuery: "",
              activeOptionIndex: null,
              activationTrigger: 1,
              buttonElement: null,
              optionsElement: null,
              pendingShouldSort: !1,
              pendingFocus: { focus: 5 },
              frozenValue: !1,
              __demoMode: t,
              buttonPositionState: o9,
            });
          }
          reduce(e, t) {
            return eV(t.type, iA, e, t);
          }
        },
        i_ = n(36439),
        iN = (0, i_.createContext)(null);
      function iB(e) {
        let t = (0, i_.useContext)(iN);
        if (null === t) {
          let t = Error(`<${e} /> is missing a parent <Listbox /> component.`);
          throw (Error.captureStackTrace && Error.captureStackTrace(t, ij), t);
        }
        return t;
      }
      function ij({ id: e, __demoMode: t = !1 }) {
        let n = (0, i_.useMemo)(() => iL.new({ id: e, __demoMode: t }), []);
        return (oG(() => n.dispose()), n);
      }
      var iH = (0, iC.createContext)(null);
      function i$(e) {
        let t = (0, iC.useContext)(iH);
        if (null === t) {
          let t = Error(`<${e} /> is missing a parent <Listbox /> component.`);
          throw (Error.captureStackTrace && Error.captureStackTrace(t, i$), t);
        }
        return t;
      }
      iH.displayName = "ListboxDataContext";
      var iV = iC.Fragment,
        iz = (0, iC.createContext)(!1),
        iW = iC.Fragment,
        iG = eq(function (e, t) {
          let n = (0, e2.useId)(),
            r = eB(),
            {
              value: o,
              defaultValue: l,
              form: i,
              name: a,
              onChange: s,
              by: u,
              invalid: c = !1,
              disabled: d = r || !1,
              horizontal: f = !1,
              multiple: p = !1,
              __demoMode: v = !1,
              ...m
            } = e,
            h = tS(t),
            b = e6(l),
            [g = p ? [] : void 0, y] = e3(o, s, b),
            x = ij({ id: n, __demoMode: v }),
            E = (0, iC.useRef)({ static: !1, hold: !1 }),
            w = (0, iC.useRef)(new Map()),
            S = t5(u),
            P = (0, iC.useCallback)(
              (e) =>
                eV(I.mode, {
                  1: () => g.some((t) => S(t, e)),
                  0: () => S(g, e),
                }),
              [g],
            ),
            I = eL({
              value: g,
              disabled: d,
              invalid: c,
              mode: +!!p,
              orientation: f ? "horizontal" : "vertical",
              onChange: y,
              compare: S,
              isSelected: P,
              optionsPropsRef: E,
              listRef: w,
            });
          ek(() => {
            x.state.dataRef.current = I;
          }, [I]);
          let T = nb(x, (e) => e.listboxState),
            C = nm.get(null),
            R = nb(
              C,
              (0, iC.useCallback)((e) => C.selectors.isTop(e, n), [C, n]),
            ),
            [O, k] = nb(x, (e) => [e.buttonElement, e.optionsElement]);
          nz(R, [O, k], (e, t) => {
            (x.send({ type: 1 }),
              nF(t, 1) || (e.preventDefault(), null == O || O.focus()));
          });
          let F = eL({ open: 0 === T, disabled: d, invalid: c, value: g }),
            [M, D] = tM({ inherit: !0 }),
            A = (0, iC.useCallback)(() => {
              if (void 0 !== b) return null == y ? void 0 : y(b);
            }, [y, b]),
            L = ez();
          return iC.default.createElement(
            D,
            {
              value: M,
              props: { htmlFor: null == O ? void 0 : O.id },
              slot: { open: 0 === T, disabled: d },
            },
            iC.default.createElement(
              oR,
              null,
              iC.default.createElement(
                iN.Provider,
                { value: x },
                iC.default.createElement(
                  iH.Provider,
                  { value: I },
                  iC.default.createElement(
                    oN,
                    { value: eV(T, { 0: 1, 1: 2 }) },
                    null != a &&
                      null != g &&
                      iC.default.createElement(tl, {
                        disabled: d,
                        data: { [a]: g },
                        form: i,
                        onReset: A,
                      }),
                    L({
                      ourProps: { ref: h },
                      theirProps: m,
                      slot: F,
                      defaultTag: iV,
                      name: "Listbox",
                    }),
                  ),
                ),
              ),
            ),
          );
        }),
        iK = eq(function (e, t) {
          let n = (0, e2.useId)(),
            r = tu(),
            o = i$("Listbox.Button"),
            l = iB("Listbox.Button"),
            {
              id: i = r || `headlessui-listbox-button-${n}`,
              disabled: a = o.disabled || !1,
              autoFocus: s = !1,
              ...u
            } = e,
            c = tS(t, oP(), l.actions.setButtonElement),
            d = oI(),
            [f, p, v] = nb(l, (e) => [
              e.listboxState,
              e.buttonElement,
              e.optionsElement,
            ]);
          nQ(0 === f, {
            trigger: p,
            action: (0, iC.useCallback)(
              (e) => {
                if (null != p && p.contains(e.target)) return nU;
                let t = e.target.closest(
                  '[role="option"]:not([data-disabled])',
                );
                return tp(t)
                  ? nq(t)
                  : null != v && v.contains(e.target)
                    ? nU
                    : nY;
              },
              [p, v],
            ),
            close: l.actions.closeListbox,
            select: l.actions.selectActiveOption,
          });
          let m = eM((e) => {
              switch (e.key) {
                case "Enter":
                  te(e.currentTarget);
                  break;
                case " ":
                case "ArrowDown":
                  (e.preventDefault(),
                    l.actions.openListbox({ focus: 5 * !!o.value }));
                  break;
                case "ArrowUp":
                  (e.preventDefault(),
                    l.actions.openListbox({ focus: o.value ? 5 : 3 }));
              }
            }),
            h = eM((e) => {
              " " === e.key && e.preventDefault();
            }),
            b = nn((e) => {
              var t;
              0 === l.state.listboxState
                ? ((0, iR.flushSync)(() => l.actions.closeListbox()),
                  null == (t = l.state.buttonElement) ||
                    t.focus({ preventScroll: !0 }))
                : (e.preventDefault(), l.actions.openListbox({ focus: 5 }));
            }),
            g = eM((e) => e.preventDefault()),
            y = tF([i]),
            x = tI(),
            { isFocusVisible: E, focusProps: w } = eh({ autoFocus: s }),
            { isHovered: S, hoverProps: P } = ev({ isDisabled: a }),
            { pressed: I, pressProps: T } = eD({ disabled: a }),
            C = eL({
              open: 0 === f,
              active: I || 0 === f,
              disabled: a,
              invalid: o.invalid,
              value: o.value,
              hover: S,
              focus: E,
              autofocus: s,
            }),
            R = nb(l, (e) => 0 === e.listboxState),
            O = eU(
              d(),
              {
                ref: c,
                id: i,
                type: n3(e, p),
                "aria-haspopup": "listbox",
                "aria-controls": null == v ? void 0 : v.id,
                "aria-expanded": R,
                "aria-labelledby": y,
                "aria-describedby": x,
                disabled: a || void 0,
                autoFocus: s,
                onKeyDown: m,
                onKeyUp: h,
                onKeyPress: g,
              },
              b,
              w,
              P,
              T,
            );
          return ez()({
            ourProps: O,
            theirProps: u,
            slot: C,
            defaultTag: "button",
            name: "Listbox.Button",
          });
        }),
        iU = tD,
        iq = eq(function (e, t) {
          let n = (0, e2.useId)(),
            {
              id: r = `headlessui-listbox-options-${n}`,
              anchor: o,
              portal: l = !1,
              modal: i = !0,
              transition: a = !1,
              ...s
            } = e,
            u = oS(o),
            [c, d] = (0, iC.useState)(null);
          u && (l = !0);
          let f = i$("Listbox.Options"),
            p = iB("Listbox.Options"),
            [v, m, h, b] = nb(p, (e) => [
              e.listboxState,
              e.buttonElement,
              e.optionsElement,
              e.__demoMode,
            ]),
            g = nG(m),
            y = nG(h),
            x = o_(),
            [E, w] = rr(a, c, null !== x ? (1 & x) == 1 : 0 === v);
          (nT(E, m, p.actions.closeListbox),
            n9(!b && i && 0 === v, y),
            nP(!b && i && 0 === v, {
              allowed: (0, iC.useCallback)(() => [m, h], [m, h]),
            }));
          let S = !nb(p, p.selectors.didButtonMove) && E,
            P = oD(nb(p, p.selectors.hasFrozenValue) && !e.static, f.value),
            I = (0, iC.useCallback)((e) => f.compare(P, e), [f.compare, P]),
            T = nb(p, (e) => {
              var t;
              if (
                null == u ||
                !(
                  null != (t = null == u ? void 0 : u.to) &&
                  t.includes("selection")
                )
              )
                return null;
              let n = e.options.findIndex((e) => I(e.dataRef.current.value));
              return (-1 === n && (n = 0), n);
            }),
            [C, R] = oC(
              (() => {
                if (null == u) return;
                if (null === T) return { ...u, inner: void 0 };
                let e = Array.from(f.listRef.current.values());
                return { ...u, inner: { listRef: { current: e }, index: T } };
              })(),
            ),
            O = oT(),
            k = tS(t, u ? C : null, p.actions.setOptionsElement, d),
            F = eT();
          (0, iC.useEffect)(() => {
            h &&
              0 === v &&
              (ew(h) || null == h || h.focus({ preventScroll: !0 }));
          }, [v, h]);
          let M = eM((e) => {
              var t;
              switch ((F.dispose(), e.key)) {
                case " ":
                  if ("" !== p.state.searchQuery)
                    return (
                      e.preventDefault(),
                      e.stopPropagation(),
                      p.actions.search(e.key)
                    );
                case "Enter":
                  (e.preventDefault(),
                    e.stopPropagation(),
                    p.actions.selectActiveOption());
                  break;
                case eV(f.orientation, {
                  vertical: "ArrowDown",
                  horizontal: "ArrowRight",
                }):
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    p.actions.goToOption({ focus: 2 })
                  );
                case eV(f.orientation, {
                  vertical: "ArrowUp",
                  horizontal: "ArrowLeft",
                }):
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    p.actions.goToOption({ focus: 1 })
                  );
                case "Home":
                case "PageUp":
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    p.actions.goToOption({ focus: 0 })
                  );
                case "End":
                case "PageDown":
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    p.actions.goToOption({ focus: 3 })
                  );
                case "Escape":
                  (e.preventDefault(),
                    e.stopPropagation(),
                    (0, iR.flushSync)(() => p.actions.closeListbox()),
                    null == (t = p.state.buttonElement) ||
                      t.focus({ preventScroll: !0 }));
                  return;
                case "Tab":
                  (e.preventDefault(),
                    e.stopPropagation(),
                    (0, iR.flushSync)(() => p.actions.closeListbox()),
                    nL(p.state.buttonElement, e.shiftKey ? 2 : 4));
                  break;
                default:
                  1 === e.key.length &&
                    (p.actions.search(e.key),
                    F.setTimeout(() => p.actions.clearSearch(), 350));
              }
            }),
            D = nb(p, (e) => {
              var t;
              return null == (t = e.buttonElement) ? void 0 : t.id;
            }),
            A = eL({ open: 0 === v }),
            L = eU(u ? O() : {}, {
              id: r,
              ref: k,
              "aria-activedescendant": nb(p, p.selectors.activeDescendantId),
              "aria-multiselectable": 1 === f.mode || void 0,
              "aria-labelledby": D,
              "aria-orientation": f.orientation,
              onKeyDown: M,
              role: "listbox",
              tabIndex: 0 === v ? 0 : void 0,
              style: { ...s.style, ...R, "--button-width": ne(E, m, !0).width },
              ...rn(w),
            }),
            _ = ez(),
            N = (0, iC.useMemo)(
              () => (1 === f.mode ? f : { ...f, isSelected: I }),
              [f, I],
            );
          return iC.default.createElement(
            o2,
            { enabled: !!l && (e.static || E), ownerDocument: g },
            iC.default.createElement(
              iH.Provider,
              { value: N },
              _({
                ourProps: L,
                theirProps: s,
                slot: A,
                defaultTag: "div",
                features: 3,
                visible: S,
                name: "Listbox.Options",
              }),
            ),
          );
        }),
        iY = eq(function (e, t) {
          let n = (0, e2.useId)(),
            {
              id: r = `headlessui-listbox-option-${n}`,
              disabled: o = !1,
              value: l,
              ...i
            } = e,
            a = !0 === (0, iC.useContext)(iz),
            s = i$("Listbox.Option"),
            u = iB("Listbox.Option"),
            c = nb(u, (e) => u.selectors.isActive(e, r)),
            d = s.isSelected(l),
            f = (0, iC.useRef)(null),
            p = iM(f),
            v = eF({
              disabled: o,
              value: l,
              domRef: f,
              get textValue() {
                return p();
              },
            }),
            m = tS(t, f, (e) => {
              e ? s.listRef.current.set(r, e) : s.listRef.current.delete(r);
            }),
            h = nb(u, (e) => u.selectors.shouldScrollIntoView(e, r));
          (ek(() => {
            if (h)
              return eI().requestAnimationFrame(() => {
                var e, t;
                null ==
                  (t = null == (e = f.current) ? void 0 : e.scrollIntoView) ||
                  t.call(e, { block: "nearest" });
              });
          }, [h, f]),
            ek(() => {
              if (!a)
                return (
                  u.actions.registerOption(r, v),
                  () => u.actions.unregisterOption(r)
                );
            }, [v, r, a]));
          let b = eM((e) => {
              if (o) return e.preventDefault();
              u.actions.selectOption(l);
            }),
            g = eM(() => {
              if (o) return u.actions.goToOption({ focus: 5 });
              u.actions.goToOption({ focus: 4, id: r });
            }),
            y = n7(),
            x = eM((e) => y.update(e)),
            E = eM((e) => {
              y.wasMoved(e) &&
                (o ||
                  (c && 0 === u.state.activationTrigger) ||
                  u.actions.goToOption({ focus: 4, id: r }, 0));
            }),
            w = eM((e) => {
              y.wasMoved(e) &&
                (o ||
                  (c &&
                    0 === u.state.activationTrigger &&
                    u.actions.goToOption({ focus: 5 })));
            }),
            S = eL({
              active: c,
              focus: c,
              selected: d,
              disabled: o,
              selectedOption: d && a,
            }),
            P = a
              ? {}
              : {
                  id: r,
                  ref: m,
                  role: "option",
                  tabIndex: !0 === o ? void 0 : -1,
                  "aria-disabled": !0 === o || void 0,
                  "aria-selected": d,
                  disabled: void 0,
                  onClick: b,
                  onFocus: g,
                  onPointerEnter: x,
                  onMouseEnter: x,
                  onPointerMove: E,
                  onMouseMove: E,
                  onPointerLeave: w,
                  onMouseLeave: w,
                },
            I = ez();
          return !d && a
            ? null
            : I({
                ourProps: P,
                theirProps: i,
                slot: S,
                defaultTag: "div",
                name: "Listbox.Option",
              });
        }),
        iQ = eq(function (e, t) {
          let { options: n, placeholder: r, ...o } = e,
            l = { ref: tS(t) },
            i = i$("ListboxSelectedOption"),
            a = eL({}),
            s =
              void 0 === i.value ||
              null === i.value ||
              (1 === i.mode && Array.isArray(i.value) && 0 === i.value.length),
            u = ez();
          return iC.default.createElement(
            iz.Provider,
            { value: !0 },
            u({
              ourProps: l,
              theirProps: {
                ...o,
                children: iC.default.createElement(
                  iC.default.Fragment,
                  null,
                  r && s ? r : n,
                ),
              },
              slot: a,
              defaultTag: iW,
              name: "ListboxSelectedOption",
            }),
          );
        }),
        iX = Object.assign(iG, {
          Button: iK,
          Label: iU,
          Options: iq,
          Option: iY,
          SelectedOption: iQ,
        }),
        iJ = m(n(36439), 1),
        iZ = n(72354);
      function i0(e, t = (e) => e) {
        let n = null !== e.activeItemIndex ? e.items[e.activeItemIndex] : null,
          r = nA(t(e.items.slice()), (e) => e.dataRef.current.domRef.current),
          o = n ? r.indexOf(n) : null;
        return (-1 === o && (o = null), { items: r, activeItemIndex: o });
      }
      var i1 = {
          1(e) {
            if (1 === e.menuState) return e;
            let t = e.buttonElement
              ? o5(o7(e.buttonElement))
              : e.buttonPositionState;
            return {
              ...e,
              activeItemIndex: null,
              pendingFocus: { focus: 5 },
              menuState: 1,
              buttonPositionState: t,
            };
          },
          0: (e, t) =>
            0 === e.menuState
              ? e
              : {
                  ...e,
                  __demoMode: !1,
                  pendingFocus: t.focus,
                  menuState: 0,
                  buttonPositionState: o9,
                },
          2: (e, t) => {
            var n, r, o, l, i;
            if (1 === e.menuState) return e;
            let a = {
              ...e,
              searchQuery: "",
              activationTrigger: null != (n = t.trigger) ? n : 1,
              __demoMode: !1,
            };
            if (5 === t.focus) return { ...a, activeItemIndex: null };
            if (4 === t.focus)
              return {
                ...a,
                activeItemIndex: e.items.findIndex((e) => e.id === t.id),
              };
            if (1 === t.focus) {
              let n = e.activeItemIndex;
              if (null !== n) {
                let l = e.items[n].dataRef.current.domRef,
                  i = o$(t, {
                    resolveItems: () => e.items,
                    resolveActiveIndex: () => e.activeItemIndex,
                    resolveId: (e) => e.id,
                    resolveDisabled: (e) => e.dataRef.current.disabled,
                  });
                if (null !== i) {
                  let t = e.items[i].dataRef.current.domRef;
                  if (
                    (null == (r = l.current)
                      ? void 0
                      : r.previousElementSibling) === t.current ||
                    (null == (o = t.current)
                      ? void 0
                      : o.previousElementSibling) === null
                  )
                    return { ...a, activeItemIndex: i };
                }
              }
            } else if (2 === t.focus) {
              let n = e.activeItemIndex;
              if (null !== n) {
                let r = e.items[n].dataRef.current.domRef,
                  o = o$(t, {
                    resolveItems: () => e.items,
                    resolveActiveIndex: () => e.activeItemIndex,
                    resolveId: (e) => e.id,
                    resolveDisabled: (e) => e.dataRef.current.disabled,
                  });
                if (null !== o) {
                  let t = e.items[o].dataRef.current.domRef;
                  if (
                    (null == (l = r.current)
                      ? void 0
                      : l.nextElementSibling) === t.current ||
                    (null == (i = t.current)
                      ? void 0
                      : i.nextElementSibling) === null
                  )
                    return { ...a, activeItemIndex: o };
                }
              }
            }
            let s = i0(e),
              u = o$(t, {
                resolveItems: () => s.items,
                resolveActiveIndex: () => s.activeItemIndex,
                resolveId: (e) => e.id,
                resolveDisabled: (e) => e.dataRef.current.disabled,
              });
            return { ...a, ...s, activeItemIndex: u };
          },
          3: (e, t) => {
            let n = +("" === e.searchQuery),
              r = e.searchQuery + t.value.toLowerCase(),
              o = (
                null !== e.activeItemIndex
                  ? e.items
                      .slice(e.activeItemIndex + n)
                      .concat(e.items.slice(0, e.activeItemIndex + n))
                  : e.items
              ).find((e) => {
                var t;
                return (
                  (null == (t = e.dataRef.current.textValue)
                    ? void 0
                    : t.startsWith(r)) && !e.dataRef.current.disabled
                );
              }),
              l = o ? e.items.indexOf(o) : -1;
            return -1 === l || l === e.activeItemIndex
              ? { ...e, searchQuery: r }
              : {
                  ...e,
                  searchQuery: r,
                  activeItemIndex: l,
                  activationTrigger: 1,
                };
          },
          4: (e) =>
            "" === e.searchQuery
              ? e
              : { ...e, searchQuery: "", searchActiveItemIndex: null },
          5: (e, t) => {
            let n = e.items.concat(t.items.map((e) => e)),
              r = e.activeItemIndex;
            return (
              5 !== e.pendingFocus.focus &&
                (r = o$(e.pendingFocus, {
                  resolveItems: () => n,
                  resolveActiveIndex: () => e.activeItemIndex,
                  resolveId: (e) => e.id,
                  resolveDisabled: (e) => e.dataRef.current.disabled,
                })),
              {
                ...e,
                items: n,
                activeItemIndex: r,
                pendingFocus: { focus: 5 },
                pendingShouldSort: !0,
              }
            );
          },
          6: (e, t) => {
            let n = e.items,
              r = [],
              o = new Set(t.items);
            for (let [e, t] of n.entries())
              if (o.has(t.id) && (r.push(e), o.delete(t.id), 0 === o.size))
                break;
            if (r.length > 0)
              for (let e of ((n = n.slice()), r.reverse())) n.splice(e, 1);
            return { ...e, items: n, activationTrigger: 1 };
          },
          7: (e, t) =>
            e.buttonElement === t.element
              ? e
              : { ...e, buttonElement: t.element },
          8: (e, t) =>
            e.itemsElement === t.element
              ? e
              : { ...e, itemsElement: t.element },
          9: (e) =>
            e.pendingShouldSort ? { ...e, ...i0(e), pendingShouldSort: !1 } : e,
          10: (e) =>
            "Tracked" !== e.buttonPositionState.kind
              ? e
              : { ...e, buttonPositionState: o8 },
        },
        i3 = class extends ns {
          constructor(e) {
            (super(e),
              h(this, "actions", {
                registerItem: nf(() => {
                  let e = [],
                    t = new Set();
                  return [
                    (n, r) => {
                      t.has(r) || (t.add(r), e.push({ id: n, dataRef: r }));
                    },
                    () => (
                      t.clear(),
                      this.send({ type: 5, items: e.splice(0) })
                    ),
                  ];
                }),
                unregisterItem: nf(() => {
                  let e = [];
                  return [
                    (t) => e.push(t),
                    () => this.send({ type: 6, items: e.splice(0) }),
                  ];
                }),
              }),
              h(this, "selectors", {
                activeDescendantId(e) {
                  var t;
                  let n = e.activeItemIndex,
                    r = e.items;
                  return null === n || null == (t = r[n]) ? void 0 : t.id;
                },
                isActive(e, t) {
                  var n;
                  let r = e.activeItemIndex,
                    o = e.items;
                  return (
                    null !== r && (null == (n = o[r]) ? void 0 : n.id) === t
                  );
                },
                shouldScrollIntoView(e, t) {
                  return (
                    !e.__demoMode &&
                    0 === e.menuState &&
                    0 !== e.activationTrigger &&
                    this.isActive(e, t)
                  );
                },
                didButtonMove: (e) => "Moved" === e.buttonPositionState.kind,
              }),
              this.on(5, () => {
                this.disposables.requestAnimationFrame(() => {
                  this.send({ type: 9 });
                });
              }));
            {
              let e = this.state.id,
                t = nm.get(null);
              (this.disposables.add(
                t.on(0, (n) => {
                  t.selectors.isTop(n, e) ||
                    0 !== this.state.menuState ||
                    this.send({ type: 1 });
                }),
              ),
                this.on(0, () => t.actions.push(e)),
                this.on(1, () => t.actions.pop(e)));
            }
            this.disposables.group((e) => {
              this.on(1, (t) => {
                t.buttonElement &&
                  (e.dispose(),
                  e.add(
                    le(t.buttonElement, t.buttonPositionState, () => {
                      this.send({ type: 10 });
                    }),
                  ));
              });
            });
          }
          static new({ id: e, __demoMode: t = !1 }) {
            return new i3({
              id: e,
              __demoMode: t,
              menuState: +!t,
              buttonElement: null,
              itemsElement: null,
              items: [],
              searchQuery: "",
              activeItemIndex: null,
              activationTrigger: 1,
              pendingShouldSort: !1,
              pendingFocus: { focus: 5 },
              buttonPositionState: o9,
            });
          }
          reduce(e, t) {
            return eV(t.type, i1, e, t);
          }
        },
        i4 = n(36439),
        i6 = (0, i4.createContext)(null);
      function i2(e) {
        let t = (0, i4.useContext)(i6);
        if (null === t) {
          let t = Error(`<${e} /> is missing a parent <Menu /> component.`);
          throw (Error.captureStackTrace && Error.captureStackTrace(t, i9), t);
        }
        return t;
      }
      function i9({ id: e, __demoMode: t = !1 }) {
        let n = (0, i4.useMemo)(() => i3.new({ id: e, __demoMode: t }), []);
        return (oG(() => n.dispose()), n);
      }
      var i5 = iJ.Fragment,
        i8 = iJ.Fragment,
        i7 = eq(function (e, t) {
          let n = (0, e2.useId)(),
            { __demoMode: r = !1, ...o } = e,
            l = i9({ id: n, __demoMode: r }),
            [i, a, s] = nb(l, (e) => [
              e.menuState,
              e.itemsElement,
              e.buttonElement,
            ]),
            u = tS(t),
            c = nm.get(null);
          nz(
            nb(
              c,
              (0, iJ.useCallback)((e) => c.selectors.isTop(e, n), [c, n]),
            ),
            [s, a],
            (e, t) => {
              var n;
              (l.send({ type: 1 }),
                nF(t, 1) ||
                  (e.preventDefault(),
                  null == (n = l.state.buttonElement) || n.focus()));
            },
          );
          let d = eL({
              open: 0 === i,
              close: eM(() => {
                l.send({ type: 1 });
              }),
            }),
            f = ez();
          return iJ.default.createElement(
            oR,
            null,
            iJ.default.createElement(
              i6.Provider,
              { value: l },
              iJ.default.createElement(
                oN,
                { value: eV(i, { 0: 1, 1: 2 }) },
                f({
                  ourProps: { ref: u },
                  theirProps: o,
                  slot: d,
                  defaultTag: i5,
                  name: "Menu",
                }),
              ),
            ),
          );
        }),
        ae = eq(function (e, t) {
          let n = i2("Menu.Button"),
            r = (0, e2.useId)(),
            {
              id: o = `headlessui-menu-button-${r}`,
              disabled: l = !1,
              autoFocus: i = !1,
              ...a
            } = e,
            s = (0, iJ.useRef)(null),
            u = oI(),
            c = tS(
              t,
              s,
              oP(),
              eM((e) => n.send({ type: 7, element: e })),
            ),
            d = eM((e) => {
              switch (e.key) {
                case " ":
                case "Enter":
                case "ArrowDown":
                  (e.preventDefault(),
                    e.stopPropagation(),
                    n.send({ type: 0, focus: { focus: 0 } }));
                  break;
                case "ArrowUp":
                  (e.preventDefault(),
                    e.stopPropagation(),
                    n.send({ type: 0, focus: { focus: 3 } }));
              }
            }),
            f = eM((e) => {
              " " === e.key && e.preventDefault();
            }),
            [p, v, m] = nb(n, (e) => [
              e.menuState,
              e.buttonElement,
              e.itemsElement,
            ]);
          nQ(0 === p, {
            trigger: v,
            action: (0, iJ.useCallback)(
              (e) => {
                if (null != v && v.contains(e.target)) return nU;
                let t = e.target.closest(
                  '[role="menuitem"]:not([data-disabled])',
                );
                return tp(t)
                  ? nq(t)
                  : null != m && m.contains(e.target)
                    ? nU
                    : nY;
              },
              [v, m],
            ),
            close: (0, iJ.useCallback)(() => n.send({ type: 1 }), []),
            select: (0, iJ.useCallback)((e) => e.click(), []),
          });
          let h = nn((e) => {
              var t;
              l ||
                (0 === p
                  ? ((0, iZ.flushSync)(() => n.send({ type: 1 })),
                    null == (t = s.current) || t.focus({ preventScroll: !0 }))
                  : (e.preventDefault(),
                    n.send({ type: 0, focus: { focus: 5 }, trigger: 0 })));
            }),
            { isFocusVisible: b, focusProps: g } = eh({ autoFocus: i }),
            { isHovered: y, hoverProps: x } = ev({ isDisabled: l }),
            { pressed: E, pressProps: w } = eD({ disabled: l }),
            S = eL({
              open: 0 === p,
              active: E || 0 === p,
              disabled: l,
              hover: y,
              focus: b,
              autofocus: i,
            }),
            P = eU(
              u(),
              {
                ref: c,
                id: o,
                type: n3(e, s.current),
                "aria-haspopup": "menu",
                "aria-controls": null == m ? void 0 : m.id,
                "aria-expanded": 0 === p,
                disabled: l || void 0,
                autoFocus: i,
                onKeyDown: d,
                onKeyUp: f,
              },
              h,
              g,
              x,
              w,
            );
          return ez()({
            ourProps: P,
            theirProps: a,
            slot: S,
            defaultTag: "button",
            name: "Menu.Button",
          });
        }),
        at = eq(function (e, t) {
          let n = (0, e2.useId)(),
            {
              id: r = `headlessui-menu-items-${n}`,
              anchor: o,
              portal: l = !1,
              modal: i = !0,
              transition: a = !1,
              ...s
            } = e,
            u = oS(o),
            c = i2("Menu.Items"),
            [d, f] = oC(u),
            p = oT(),
            [v, m] = (0, iJ.useState)(null),
            h = tS(
              t,
              u ? d : null,
              eM((e) => c.send({ type: 8, element: e })),
              m,
            ),
            [b, g] = nb(c, (e) => [e.menuState, e.buttonElement]),
            y = nG(g),
            x = nG(v);
          u && (l = !0);
          let E = o_(),
            [w, S] = rr(a, v, null !== E ? (1 & E) == 1 : 0 === b);
          nT(w, g, () => {
            c.send({ type: 1 });
          });
          let P = nb(c, (e) => e.__demoMode);
          (n9(!P && i && 0 === b, x),
            nP(!P && i && 0 === b, {
              allowed: (0, iJ.useCallback)(() => [g, v], [g, v]),
            }));
          let I = !nb(c, c.selectors.didButtonMove) && w;
          ((0, iJ.useEffect)(() => {
            v && 0 === b && (ew(v) || v.focus({ preventScroll: !0 }));
          }, [b, v]),
            rl(0 === b, {
              container: v,
              accept: (e) =>
                "menuitem" === e.getAttribute("role")
                  ? NodeFilter.FILTER_REJECT
                  : e.hasAttribute("role")
                    ? NodeFilter.FILTER_SKIP
                    : NodeFilter.FILTER_ACCEPT,
              walk(e) {
                e.setAttribute("role", "none");
              },
            }));
          let T = eT(),
            C = eM((e) => {
              var t, n, r;
              switch ((T.dispose(), e.key)) {
                case " ":
                  if ("" !== c.state.searchQuery)
                    return (
                      e.preventDefault(),
                      e.stopPropagation(),
                      c.send({ type: 3, value: e.key })
                    );
                case "Enter":
                  if (
                    (e.preventDefault(),
                    e.stopPropagation(),
                    null !== c.state.activeItemIndex)
                  ) {
                    let { dataRef: e } = c.state.items[c.state.activeItemIndex];
                    null ==
                      (n =
                        null == (t = e.current) ? void 0 : t.domRef.current) ||
                      n.click();
                  }
                  (c.send({ type: 1 }), nM(c.state.buttonElement));
                  break;
                case "ArrowDown":
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    c.send({ type: 2, focus: 2 })
                  );
                case "ArrowUp":
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    c.send({ type: 2, focus: 1 })
                  );
                case "Home":
                case "PageUp":
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    c.send({ type: 2, focus: 0 })
                  );
                case "End":
                case "PageDown":
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    c.send({ type: 2, focus: 3 })
                  );
                case "Escape":
                  (e.preventDefault(),
                    e.stopPropagation(),
                    (0, iZ.flushSync)(() => c.send({ type: 1 })),
                    null == (r = c.state.buttonElement) ||
                      r.focus({ preventScroll: !0 }));
                  break;
                case "Tab":
                  (e.preventDefault(),
                    e.stopPropagation(),
                    (0, iZ.flushSync)(() => c.send({ type: 1 })),
                    nL(c.state.buttonElement, e.shiftKey ? 2 : 4));
                  break;
                default:
                  1 === e.key.length &&
                    (c.send({ type: 3, value: e.key }),
                    T.setTimeout(() => c.send({ type: 4 }), 350));
              }
            }),
            R = eM((e) => {
              " " === e.key && e.preventDefault();
            }),
            O = eL({ open: 0 === b }),
            k = eU(u ? p() : {}, {
              "aria-activedescendant": nb(c, c.selectors.activeDescendantId),
              "aria-labelledby": nb(c, (e) => {
                var t;
                return null == (t = e.buttonElement) ? void 0 : t.id;
              }),
              id: r,
              onKeyDown: C,
              onKeyUp: R,
              role: "menu",
              tabIndex: 0 === b ? 0 : void 0,
              ref: h,
              style: { ...s.style, ...f, "--button-width": ne(w, g, !0).width },
              ...rn(S),
            }),
            F = ez();
          return iJ.default.createElement(
            o2,
            { enabled: !!l && (e.static || w), ownerDocument: y },
            F({
              ourProps: k,
              theirProps: s,
              slot: O,
              defaultTag: "div",
              features: 3,
              visible: I,
              name: "Menu.Items",
            }),
          );
        }),
        an = eq(function (e, t) {
          let n = (0, e2.useId)(),
            { id: r = `headlessui-menu-item-${n}`, disabled: o = !1, ...l } = e,
            i = i2("Menu.Item"),
            a = nb(i, (e) => i.selectors.isActive(e, r)),
            s = (0, iJ.useRef)(null),
            u = tS(t, s),
            c = nb(i, (e) => i.selectors.shouldScrollIntoView(e, r));
          ek(() => {
            if (c)
              return eI().requestAnimationFrame(() => {
                var e, t;
                null ==
                  (t = null == (e = s.current) ? void 0 : e.scrollIntoView) ||
                  t.call(e, { block: "nearest" });
              });
          }, [c, s]);
          let d = iM(s),
            f = (0, iJ.useRef)({
              disabled: o,
              domRef: s,
              get textValue() {
                return d();
              },
            });
          (ek(() => {
            f.current.disabled = o;
          }, [f, o]),
            ek(
              () => (
                i.actions.registerItem(r, f),
                () => i.actions.unregisterItem(r)
              ),
              [f, r],
            ));
          let p = eM(() => {
              i.send({ type: 1 });
            }),
            v = eM((e) => {
              if (o) return e.preventDefault();
              (i.send({ type: 1 }), nM(i.state.buttonElement));
            }),
            m = eM(() => {
              if (o) return i.send({ type: 2, focus: 5 });
              i.send({ type: 2, focus: 4, id: r });
            }),
            h = n7(),
            b = eM((e) => h.update(e)),
            g = eM((e) => {
              h.wasMoved(e) &&
                (o || a || i.send({ type: 2, focus: 4, id: r, trigger: 0 }));
            }),
            y = eM((e) => {
              h.wasMoved(e) &&
                (o ||
                  (a &&
                    0 === i.state.activationTrigger &&
                    i.send({ type: 2, focus: 5 })));
            }),
            [x, E] = tM(),
            [w, S] = tT(),
            P = eL({ active: a, focus: a, disabled: o, close: p }),
            I = ez();
          return iJ.default.createElement(
            E,
            null,
            iJ.default.createElement(
              S,
              null,
              I({
                ourProps: {
                  id: r,
                  ref: u,
                  role: "menuitem",
                  tabIndex: !0 === o ? void 0 : -1,
                  "aria-disabled": !0 === o || void 0,
                  "aria-labelledby": x,
                  "aria-describedby": w,
                  disabled: void 0,
                  onClick: v,
                  onFocus: m,
                  onPointerEnter: b,
                  onMouseEnter: b,
                  onPointerMove: g,
                  onMouseMove: g,
                  onPointerLeave: y,
                  onMouseLeave: y,
                },
                theirProps: l,
                slot: P,
                defaultTag: i8,
                name: "Menu.Item",
              }),
            ),
          );
        }),
        ar = eq(function (e, t) {
          let [n, r] = tM(),
            o = ez();
          return iJ.default.createElement(
            r,
            null,
            o({
              ourProps: { ref: t, "aria-labelledby": n, role: "group" },
              theirProps: e,
              slot: {},
              defaultTag: "div",
              name: "Menu.Section",
            }),
          );
        }),
        ao = eq(function (e, t) {
          let n = (0, e2.useId)(),
            { id: r = `headlessui-menu-heading-${n}`, ...o } = e,
            l = tk();
          ek(() => l.register(r), [r, l.register]);
          let i = { id: r, ref: t, role: "presentation", ...l.props };
          return ez()({
            ourProps: i,
            theirProps: o,
            slot: {},
            defaultTag: "header",
            name: "Menu.Heading",
          });
        }),
        al = eq(function (e, t) {
          return ez()({
            ourProps: { ref: t, role: "separator" },
            theirProps: e,
            slot: {},
            defaultTag: "div",
            name: "Menu.Separator",
          });
        }),
        ai = Object.assign(i7, {
          Button: ae,
          Items: at,
          Item: an,
          Section: ar,
          Heading: ao,
          Separator: al,
        }),
        aa = m(n(36439), 1),
        as = {
          0: (e) =>
            0 === e.popoverState
              ? e
              : { ...e, popoverState: 0, __demoMode: !1 },
          1: (e) =>
            1 === e.popoverState
              ? e
              : { ...e, popoverState: 1, __demoMode: !1 },
          2: (e, t) => (e.button === t.button ? e : { ...e, button: t.button }),
          3: (e, t) =>
            e.buttonId === t.buttonId ? e : { ...e, buttonId: t.buttonId },
          4: (e, t) => (e.panel === t.panel ? e : { ...e, panel: t.panel }),
          5: (e, t) =>
            e.panelId === t.panelId ? e : { ...e, panelId: t.panelId },
        },
        au = class extends ns {
          constructor(e) {
            (super(e),
              h(this, "actions", {
                close: () => this.send({ type: 1 }),
                refocusableClose: (e) => {
                  this.actions.close();
                  let t = e
                    ? tp(e)
                      ? e
                      : "current" in e && tp(e.current)
                        ? e.current
                        : this.state.button
                    : this.state.button;
                  null == t || t.focus();
                },
                open: () => this.send({ type: 0 }),
                setButtonId: (e) => this.send({ type: 3, buttonId: e }),
                setButton: (e) => this.send({ type: 2, button: e }),
                setPanelId: (e) => this.send({ type: 5, panelId: e }),
                setPanel: (e) => this.send({ type: 4, panel: e }),
              }),
              h(this, "selectors", {
                isPortalled: (e) => {
                  var t;
                  if (!e.button || !e.panel) return !1;
                  let n = null != (t = ey(e.button)) ? t : document;
                  for (let t of n.querySelectorAll("body > *"))
                    if (
                      Number(null == t ? void 0 : t.contains(e.button)) ^
                      Number(null == t ? void 0 : t.contains(e.panel))
                    )
                      return !0;
                  let r = nk(n),
                    o = r.indexOf(e.button),
                    l = (o + r.length - 1) % r.length,
                    i = (o + 1) % r.length,
                    a = r[l],
                    s = r[i];
                  return !e.panel.contains(a) && !e.panel.contains(s);
                },
              }));
            {
              let e = this.state.id,
                t = nm.get(null);
              (this.on(0, () => t.actions.push(e)),
                this.on(1, () => t.actions.pop(e)));
            }
          }
          static new({ id: e, __demoMode: t = !1 }) {
            return new au({
              id: e,
              __demoMode: t,
              popoverState: +!t,
              buttons: { current: [] },
              button: null,
              buttonId: null,
              panel: null,
              panelId: null,
              beforePanelSentinel: { current: null },
              afterPanelSentinel: { current: null },
              afterButtonSentinel: { current: null },
            });
          }
          reduce(e, t) {
            return eV(t.type, as, e, t);
          }
        },
        ac = n(36439),
        ad = (0, ac.createContext)(null);
      function af(e) {
        let t = (0, ac.useContext)(ad);
        if (null === t) {
          let t = Error(`<${e} /> is missing a parent <Popover /> component.`);
          throw (Error.captureStackTrace && Error.captureStackTrace(t, af), t);
        }
        return t;
      }
      var ap = (0, aa.createContext)(null);
      function av() {
        return (0, aa.useContext)(ap);
      }
      ap.displayName = "PopoverGroupContext";
      var am = (0, aa.createContext)(null);
      function ah(e, t) {
        let n = (0, e2.useId)(),
          {
            id: r = `headlessui-popover-backdrop-${n}`,
            transition: o = !1,
            ...l
          } = e,
          i = af("Popover.Backdrop"),
          a = nb(
            i,
            (0, aa.useCallback)((e) => e.popoverState, []),
          ),
          [s, u] = (0, aa.useState)(null),
          c = tS(t, u),
          d = o_(),
          [f, p] = rr(o, s, null !== d ? (1 & d) == 1 : 0 === a),
          v = eM((e) => {
            if (tg(e.currentTarget)) return e.preventDefault();
            i.actions.close();
          }),
          m = eL({ open: 0 === a }),
          h = { ref: c, id: r, "aria-hidden": !0, onClick: v, ...rn(p) };
        return ez()({
          ourProps: h,
          theirProps: l,
          slot: m,
          defaultTag: "div",
          features: 3,
          visible: f,
          name: "Popover.Backdrop",
        });
      }
      am.displayName = "PopoverPanelContext";
      var ab = eq(function (e, t) {
          var n;
          let r = (0, e2.useId)(),
            { __demoMode: o = !1, ...l } = e,
            i = (function ({ id: e, __demoMode: t = !1 }) {
              let n = (0, ac.useMemo)(
                () => au.new({ id: e, __demoMode: t }),
                [],
              );
              return (oG(() => n.dispose()), n);
            })({ id: r, __demoMode: o }),
            a = (0, aa.useRef)(null),
            s = tS(
              t,
              tw((e) => {
                a.current = e;
              }),
            ),
            [u, c, d, f, p] = nb(
              i,
              (0, aa.useCallback)(
                (e) => [
                  e.popoverState,
                  e.button,
                  e.panel,
                  e.buttonId,
                  e.panelId,
                ],
                [],
              ),
            ),
            v = (function (...e) {
              return (0, nW.useMemo)(() => ex(...e), [...e]);
            })(null != (n = a.current) ? n : c),
            m = eF(f),
            h = eF(p),
            b = (0, aa.useMemo)(
              () => ({ buttonId: m, panelId: h, close: i.actions.close }),
              [m, h, i],
            ),
            g = av(),
            y = null == g ? void 0 : g.registerPopover,
            x = eM(() => {
              var e, t;
              let n = eE(null != (e = a.current) ? e : c);
              return null !=
                (t = null == g ? void 0 : g.isFocusWithinPopoverGroup())
                ? t
                : n &&
                    ((null == c ? void 0 : c.contains(n)) ||
                      (null == d ? void 0 : d.contains(n)));
            });
          (0, aa.useEffect)(() => (null == y ? void 0 : y(b)), [y, b]);
          let [E, w] = o3(),
            S = lR(c),
            P = lI({
              mainTreeNode: S,
              portals: E,
              defaultContainers: [
                {
                  get current() {
                    return i.state.button;
                  },
                },
                {
                  get current() {
                    return i.state.panel;
                  },
                },
              ],
            });
          (nZ(
            v,
            "focus",
            (e) => {
              var t, n, r, o, l, a;
              e.target !== window &&
                tv(e.target) &&
                0 === i.state.popoverState &&
                (x() ||
                  (i.state.button &&
                    i.state.panel &&
                    (P.contains(e.target) ||
                      (null !=
                        (n =
                          null == (t = i.state.beforePanelSentinel.current)
                            ? void 0
                            : t.contains) &&
                        n.call(t, e.target)) ||
                      (null !=
                        (o =
                          null == (r = i.state.afterPanelSentinel.current)
                            ? void 0
                            : r.contains) &&
                        o.call(r, e.target)) ||
                      (null !=
                        (a =
                          null == (l = i.state.afterButtonSentinel.current)
                            ? void 0
                            : l.contains) &&
                        a.call(l, e.target)) ||
                      i.actions.close())));
            },
            !0,
          ),
            nz(0 === u, P.resolveContainers, (e, t) => {
              (i.actions.close(),
                nF(t, 1) || (e.preventDefault(), null == c || c.focus()));
            }));
          let I = eL({ open: 0 === u, close: i.actions.refocusableClose }),
            T = nb(
              i,
              (0, aa.useCallback)(
                (e) => eV(e.popoverState, { 0: 1, 1: 2 }),
                [],
              ),
            ),
            C = ez();
          return aa.default.createElement(
            lC,
            { node: S },
            aa.default.createElement(
              oR,
              null,
              aa.default.createElement(
                am.Provider,
                { value: null },
                aa.default.createElement(
                  ad.Provider,
                  { value: i },
                  aa.default.createElement(
                    tj,
                    { value: i.actions.refocusableClose },
                    aa.default.createElement(
                      oN,
                      { value: T },
                      aa.default.createElement(
                        w,
                        null,
                        C({
                          ourProps: { ref: s },
                          theirProps: l,
                          slot: I,
                          defaultTag: "div",
                          name: "Popover",
                        }),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          );
        }),
        ag = eq(function (e, t) {
          let n = (0, e2.useId)(),
            {
              id: r = `headlessui-popover-button-${n}`,
              disabled: o = !1,
              autoFocus: l = !1,
              ...i
            } = e,
            a = af("Popover.Button"),
            [s, u, c, d, f, p, v] = nb(
              a,
              (0, aa.useCallback)(
                (e) => [
                  e.popoverState,
                  a.selectors.isPortalled(e),
                  e.button,
                  e.buttonId,
                  e.panel,
                  e.panelId,
                  e.afterButtonSentinel,
                ],
                [],
              ),
            ),
            m = (0, aa.useRef)(null),
            h = `headlessui-focus-sentinel-${(0, e2.useId)()}`,
            b = av(),
            g = null == b ? void 0 : b.closeOthers,
            y = null !== (0, aa.useContext)(am);
          (0, aa.useEffect)(() => {
            if (!y)
              return (
                a.actions.setButtonId(r),
                () => a.actions.setButtonId(null)
              );
          }, [y, r, a]);
          let [x] = (0, aa.useState)(() => Symbol()),
            E = tS(
              m,
              t,
              oP(),
              eM((e) => {
                if (!y) {
                  if (e) a.state.buttons.current.push(x);
                  else {
                    let e = a.state.buttons.current.indexOf(x);
                    -1 !== e && a.state.buttons.current.splice(e, 1);
                  }
                  (a.state.buttons.current.length > 1 &&
                    console.warn(
                      "You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported.",
                    ),
                    e && a.actions.setButton(e));
                }
              }),
            ),
            w = tS(m, t),
            S = eM((e) => {
              var t, n, r;
              if (y) {
                if (1 === a.state.popoverState) return;
                switch (e.key) {
                  case " ":
                  case "Enter":
                    (e.preventDefault(),
                      null == (n = (t = e.target).click) || n.call(t),
                      a.actions.close(),
                      null == (r = a.state.button) || r.focus());
                }
              } else
                switch (e.key) {
                  case " ":
                  case "Enter":
                    (e.preventDefault(),
                      e.stopPropagation(),
                      1 === a.state.popoverState
                        ? (null == g || g(a.state.buttonId), a.actions.open())
                        : a.actions.close());
                    break;
                  case "Escape":
                    if (0 !== a.state.popoverState)
                      return null == g ? void 0 : g(a.state.buttonId);
                    if (!m.current) return;
                    let o = eE(m.current);
                    if (o && !m.current.contains(o)) return;
                    (e.preventDefault(),
                      e.stopPropagation(),
                      a.actions.close());
                }
            }),
            P = eM((e) => {
              y || (" " === e.key && e.preventDefault());
            }),
            I = eM((e) => {
              var t, n;
              tg(e.currentTarget) ||
                o ||
                (y
                  ? (a.actions.close(),
                    null == (t = a.state.button) || t.focus())
                  : (e.preventDefault(),
                    e.stopPropagation(),
                    1 === a.state.popoverState
                      ? (null == g || g(a.state.buttonId), a.actions.open())
                      : a.actions.close(),
                    null == (n = a.state.button) || n.focus()));
            }),
            T = eM((e) => {
              (e.preventDefault(), e.stopPropagation());
            }),
            { isFocusVisible: C, focusProps: R } = eh({ autoFocus: l }),
            { isHovered: O, hoverProps: k } = ev({ isDisabled: o }),
            { pressed: F, pressProps: M } = eD({ disabled: o }),
            D = 0 === s,
            A = eL({
              open: D,
              active: F || D,
              disabled: o,
              hover: O,
              focus: C,
              autofocus: l,
            }),
            L = n3(e, c),
            _ = y
              ? eU(
                  {
                    ref: w,
                    type: L,
                    onKeyDown: S,
                    onClick: I,
                    disabled: o || void 0,
                    autoFocus: l,
                  },
                  R,
                  k,
                  M,
                )
              : eU(
                  {
                    ref: E,
                    id: d,
                    type: L,
                    "aria-expanded": 0 === s,
                    "aria-controls": f ? p : void 0,
                    disabled: o || void 0,
                    autoFocus: l,
                    onKeyDown: S,
                    onKeyUp: P,
                    onClick: I,
                    onMouseDown: T,
                  },
                  R,
                  k,
                  M,
                ),
            N = lD(),
            B = eM(() => {
              if (!tp(a.state.panel)) return;
              let e = a.state.panel;
              0 === eV(N.current, { 0: () => n_(e, 1), 1: () => n_(e, 8) }) &&
                n_(
                  nk(ex(a.state.button)).filter(
                    (e) => "true" !== e.dataset.headlessuiFocusGuard,
                  ),
                  eV(N.current, { 0: 4, 1: 2 }),
                  { relativeTo: a.state.button },
                );
            }),
            j = ez();
          return aa.default.createElement(
            aa.default.Fragment,
            null,
            j({
              ourProps: _,
              theirProps: i,
              slot: A,
              defaultTag: "button",
              name: "Popover.Button",
            }),
            D &&
              !y &&
              u &&
              aa.default.createElement(tt, {
                id: h,
                ref: v,
                features: 2,
                "data-headlessui-focus-guard": !0,
                as: "button",
                type: "button",
                onFocus: B,
              }),
          );
        }),
        ay = eq(ah),
        ax = eq(ah),
        aE = eq(function (e, t) {
          let n = (0, e2.useId)(),
            {
              id: r = `headlessui-popover-panel-${n}`,
              focus: o = !1,
              anchor: l,
              portal: i = !1,
              modal: a = !1,
              transition: s = !1,
              ...u
            } = e,
            c = af("Popover.Panel"),
            d = nb(c, c.selectors.isPortalled),
            [f, p, v, m, h] = nb(
              c,
              (0, aa.useCallback)(
                (e) => [
                  e.popoverState,
                  e.button,
                  e.__demoMode,
                  e.beforePanelSentinel,
                  e.afterPanelSentinel,
                ],
                [],
              ),
            ),
            b = `headlessui-focus-sentinel-before-${n}`,
            g = `headlessui-focus-sentinel-after-${n}`,
            y = (0, aa.useRef)(null),
            x = oS(l),
            [E, w] = oC(x),
            S = oT();
          x && (i = !0);
          let [P, I] = (0, aa.useState)(null),
            T = tS(y, t, x ? E : null, c.actions.setPanel, I),
            C = nG(p),
            R = nG(y.current);
          ek(
            () => (c.actions.setPanelId(r), () => c.actions.setPanelId(null)),
            [r, c],
          );
          let O = o_(),
            [k, F] = rr(s, P, null !== O ? (1 & O) == 1 : 0 === f);
          (nT(k, p, c.actions.close), n9(!v && a && k, R));
          let M = eM((e) => {
            var t;
            if ("Escape" === e.key) {
              if (0 !== c.state.popoverState || !y.current) return;
              let n = eE(y.current);
              if (n && !y.current.contains(n)) return;
              (e.preventDefault(),
                e.stopPropagation(),
                c.actions.close(),
                null == (t = c.state.button) || t.focus());
            }
          });
          ((0, aa.useEffect)(() => {
            var t;
            e.static ||
              (1 === f &&
                (null == (t = e.unmount) || t) &&
                c.actions.setPanel(null));
          }, [f, e.unmount, e.static, c]),
            (0, aa.useEffect)(() => {
              if (v || !o || 0 !== f || !y.current) return;
              let e = eE(y.current);
              y.current.contains(e) || n_(y.current, 1);
            }, [v, o, y.current, f]));
          let D = eL({ open: 0 === f, close: c.actions.refocusableClose }),
            A = eU(x ? S() : {}, {
              ref: T,
              id: r,
              onKeyDown: M,
              onBlur:
                o && 0 === f
                  ? (e) => {
                      var t, n, r, o, l;
                      let i = e.relatedTarget;
                      i &&
                        y.current &&
                        ((null != (t = y.current) && t.contains(i)) ||
                          (c.actions.close(),
                          ((null !=
                            (r =
                              null == (n = m.current) ? void 0 : n.contains) &&
                            r.call(n, i)) ||
                            (null !=
                              (l =
                                null == (o = h.current)
                                  ? void 0
                                  : o.contains) &&
                              l.call(o, i))) &&
                            i.focus({ preventScroll: !0 })));
                    }
                  : void 0,
              tabIndex: -1,
              style: { ...u.style, ...w, "--button-width": ne(k, p, !0).width },
              ...rn(F),
            }),
            L = lD(),
            _ = eM(() => {
              let e = y.current;
              e &&
                eV(L.current, {
                  0: () => {
                    var t;
                    0 === n_(e, 1) &&
                      (null == (t = c.state.afterPanelSentinel.current) ||
                        t.focus());
                  },
                  1: () => {
                    var e;
                    null == (e = c.state.button) ||
                      e.focus({ preventScroll: !0 });
                  },
                });
            }),
            N = eM(() => {
              let e = y.current;
              e &&
                eV(L.current, {
                  0: () => {
                    var e;
                    if (!c.state.button) return;
                    let t = nk(
                        null != (e = ex(c.state.button)) ? e : document.body,
                      ),
                      n = t.indexOf(c.state.button),
                      r = t.slice(0, n + 1),
                      o = [...t.slice(n + 1), ...r];
                    for (let e of o.slice())
                      if (
                        "true" === e.dataset.headlessuiFocusGuard ||
                        (null != P && P.contains(e))
                      ) {
                        let t = o.indexOf(e);
                        -1 !== t && o.splice(t, 1);
                      }
                    n_(o, 1, { sorted: !1 });
                  },
                  1: () => {
                    var t;
                    0 === n_(e, 2) &&
                      (null == (t = c.state.button) || t.focus());
                  },
                });
            }),
            B = ez();
          return aa.default.createElement(
            oB,
            null,
            aa.default.createElement(
              am.Provider,
              { value: r },
              aa.default.createElement(
                tj,
                { value: c.actions.refocusableClose },
                aa.default.createElement(
                  o2,
                  { enabled: !!i && (e.static || k), ownerDocument: C },
                  k &&
                    d &&
                    aa.default.createElement(tt, {
                      id: b,
                      ref: m,
                      features: 2,
                      "data-headlessui-focus-guard": !0,
                      as: "button",
                      type: "button",
                      onFocus: _,
                    }),
                  B({
                    ourProps: A,
                    theirProps: u,
                    slot: D,
                    defaultTag: "div",
                    features: 3,
                    visible: k,
                    name: "Popover.Panel",
                  }),
                  k &&
                    d &&
                    aa.default.createElement(tt, {
                      id: g,
                      ref: h,
                      features: 2,
                      "data-headlessui-focus-guard": !0,
                      as: "button",
                      type: "button",
                      onFocus: N,
                    }),
                ),
              ),
            ),
          );
        }),
        aw = eq(function (e, t) {
          let n = (0, aa.useRef)(null),
            r = tS(n, t),
            [o, l] = (0, aa.useState)([]),
            i = eM((e) => {
              l((t) => {
                let n = t.indexOf(e);
                if (-1 !== n) {
                  let e = t.slice();
                  return (e.splice(n, 1), e);
                }
                return t;
              });
            }),
            a = eM((e) => (l((t) => [...t, e]), () => i(e))),
            s = eM(() => {
              var e;
              let t = ex(n.current);
              if (!t) return !1;
              let r = eE(n.current);
              return (
                !!(null != (e = n.current) && e.contains(r)) ||
                o.some((e) => {
                  var n, o;
                  return (
                    (null == (n = t.getElementById(e.buttonId.current))
                      ? void 0
                      : n.contains(r)) ||
                    (null == (o = t.getElementById(e.panelId.current))
                      ? void 0
                      : o.contains(r))
                  );
                })
              );
            }),
            u = eM((e) => {
              for (let t of o) t.buttonId.current !== e && t.close();
            }),
            c = (0, aa.useMemo)(
              () => ({
                registerPopover: a,
                unregisterPopover: i,
                isFocusWithinPopoverGroup: s,
                closeOthers: u,
              }),
              [a, i, s, u],
            ),
            d = eL({}),
            f = ez();
          return aa.default.createElement(
            lC,
            null,
            aa.default.createElement(
              ap.Provider,
              { value: c },
              f({
                ourProps: { ref: r },
                theirProps: e,
                slot: d,
                defaultTag: "div",
                name: "Popover.Group",
              }),
            ),
          );
        }),
        aS = Object.assign(ab, {
          Button: ag,
          Backdrop: ax,
          Overlay: ay,
          Panel: aE,
          Group: aw,
        }),
        aP = m(n(36439), 1),
        aI = {
          0(e, t) {
            let n = [
              ...e.options,
              { id: t.id, element: t.element, propsRef: t.propsRef },
            ];
            return { ...e, options: nA(n, (e) => e.element.current) };
          },
          1(e, t) {
            let n = e.options.slice(),
              r = e.options.findIndex((e) => e.id === t.id);
            return -1 === r ? e : (n.splice(r, 1), { ...e, options: n });
          },
        },
        aT = (0, aP.createContext)(null);
      function aC(e) {
        let t = (0, aP.useContext)(aT);
        if (null === t) {
          let t = Error(
            `<${e} /> is missing a parent <RadioGroup /> component.`,
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, aC), t);
        }
        return t;
      }
      aT.displayName = "RadioGroupDataContext";
      var aR = (0, aP.createContext)(null);
      function aO(e) {
        let t = (0, aP.useContext)(aR);
        if (null === t) {
          let t = Error(
            `<${e} /> is missing a parent <RadioGroup /> component.`,
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, aO), t);
        }
        return t;
      }
      function ak(e, t) {
        return eV(t.type, aI, e, t);
      }
      aR.displayName = "RadioGroupActionsContext";
      var aF = eq(function (e, t) {
          let n = (0, e2.useId)(),
            r = eB(),
            {
              id: o = `headlessui-radiogroup-${n}`,
              value: l,
              form: i,
              name: a,
              onChange: s,
              by: u,
              disabled: c = r || !1,
              defaultValue: d,
              tabIndex: f = 0,
              ...p
            } = e,
            v = t5(u),
            [m, h] = (0, aP.useReducer)(ak, { options: [] }),
            b = m.options,
            [g, y] = tM(),
            [x, E] = tT(),
            w = (0, aP.useRef)(null),
            S = tS(w, t),
            P = e6(d),
            [I, T] = e3(l, s, P),
            C = (0, aP.useMemo)(
              () => b.find((e) => !e.propsRef.current.disabled),
              [b],
            ),
            R = (0, aP.useMemo)(
              () => b.some((e) => v(e.propsRef.current.value, I)),
              [b, I],
            ),
            O = eM((e) => {
              var t;
              if (c || v(e, I)) return !1;
              let n =
                null == (t = b.find((t) => v(t.propsRef.current.value, e)))
                  ? void 0
                  : t.propsRef.current;
              return (null == n || !n.disabled) && (null == T || T(e), !0);
            }),
            k = eM((e) => {
              if (!w.current) return;
              let t = b
                .filter((e) => !1 === e.propsRef.current.disabled)
                .map((e) => e.element.current);
              switch (e.key) {
                case "Enter":
                  te(e.currentTarget);
                  break;
                case "ArrowLeft":
                case "ArrowUp":
                  if (
                    (e.preventDefault(), e.stopPropagation(), 2 === n_(t, 18))
                  ) {
                    let e = b.find((e) => ew(e.element.current));
                    e && O(e.propsRef.current.value);
                  }
                  break;
                case "ArrowRight":
                case "ArrowDown":
                  if (
                    (e.preventDefault(), e.stopPropagation(), 2 === n_(t, 20))
                  ) {
                    let e = b.find((e) => ew(e.element.current));
                    e && O(e.propsRef.current.value);
                  }
                  break;
                case " ": {
                  (e.preventDefault(), e.stopPropagation());
                  let t = b.find((e) => ew(e.element.current));
                  t && O(t.propsRef.current.value);
                }
              }
            }),
            F = eM(
              (e) => (h({ type: 0, ...e }), () => h({ type: 1, id: e.id })),
            ),
            M = (0, aP.useMemo)(
              () => ({
                value: I,
                firstOption: C,
                containsCheckedOption: R,
                disabled: c,
                compare: v,
                tabIndex: f,
                ...m,
              }),
              [I, C, R, c, v, f, m],
            ),
            D = (0, aP.useMemo)(
              () => ({ registerOption: F, change: O }),
              [F, O],
            ),
            A = eL({ value: I }),
            L = (0, aP.useCallback)(() => {
              if (void 0 !== P) return O(P);
            }, [O, P]),
            _ = ez();
          return aP.default.createElement(
            E,
            { name: "RadioGroup.Description" },
            aP.default.createElement(
              y,
              { name: "RadioGroup.Label" },
              aP.default.createElement(
                aR.Provider,
                { value: D },
                aP.default.createElement(
                  aT.Provider,
                  { value: M },
                  null != a &&
                    aP.default.createElement(tl, {
                      disabled: c,
                      data: { [a]: I || "on" },
                      overrides: { type: "radio", checked: null != I },
                      form: i,
                      onReset: L,
                    }),
                  _({
                    ourProps: {
                      ref: S,
                      id: o,
                      role: "radiogroup",
                      "aria-labelledby": g,
                      "aria-describedby": x,
                      onKeyDown: k,
                    },
                    theirProps: p,
                    slot: A,
                    defaultTag: "div",
                    name: "RadioGroup",
                  }),
                ),
              ),
            ),
          );
        }),
        aM = eq(function (e, t) {
          var n;
          let r = aC("RadioGroup.Option"),
            o = aO("RadioGroup.Option"),
            l = (0, e2.useId)(),
            {
              id: i = `headlessui-radiogroup-option-${l}`,
              value: a,
              disabled: s = r.disabled || !1,
              autoFocus: u = !1,
              ...c
            } = e,
            d = (0, aP.useRef)(null),
            f = tS(d, t),
            [p, v] = tM(),
            [m, h] = tT(),
            b = eF({ value: a, disabled: s });
          ek(
            () => o.registerOption({ id: i, element: d, propsRef: b }),
            [i, o, d, b],
          );
          let g = eM((e) => {
              var t;
              if (tg(e.currentTarget)) return e.preventDefault();
              o.change(a) && (null == (t = d.current) || t.focus());
            }),
            y = (null == (n = r.firstOption) ? void 0 : n.id) === i,
            { isFocusVisible: x, focusProps: E } = eh({ autoFocus: u }),
            { isHovered: w, hoverProps: S } = ev({ isDisabled: s }),
            P = r.compare(r.value, a),
            I = eU(
              {
                ref: f,
                id: i,
                role: "radio",
                "aria-checked": P ? "true" : "false",
                "aria-labelledby": p,
                "aria-describedby": m,
                "aria-disabled": !!s || void 0,
                tabIndex: s
                  ? -1
                  : P || (!r.containsCheckedOption && y)
                    ? r.tabIndex
                    : -1,
                onClick: s ? void 0 : g,
                autoFocus: u,
              },
              E,
              S,
            ),
            T = eL({
              checked: P,
              disabled: s,
              active: x,
              hover: w,
              focus: x,
              autofocus: u,
            }),
            C = ez();
          return aP.default.createElement(
            h,
            { name: "RadioGroup.Description" },
            aP.default.createElement(
              v,
              { name: "RadioGroup.Label" },
              C({
                ourProps: I,
                theirProps: c,
                slot: T,
                defaultTag: "div",
                name: "RadioGroup.Option",
              }),
            ),
          );
        }),
        aD = eq(function (e, t) {
          var n;
          let r = aC("Radio"),
            o = aO("Radio"),
            l = (0, e2.useId)(),
            i = tu(),
            a = eB(),
            {
              id: s = i || `headlessui-radio-${l}`,
              value: u,
              disabled: c = r.disabled || a || !1,
              autoFocus: d = !1,
              ...f
            } = e,
            p = (0, aP.useRef)(null),
            v = tS(p, t),
            m = tF(),
            h = tI(),
            b = eF({ value: u, disabled: c });
          ek(
            () => o.registerOption({ id: s, element: p, propsRef: b }),
            [s, o, p, b],
          );
          let g = eM((e) => {
              var t;
              if (tg(e.currentTarget)) return e.preventDefault();
              o.change(u) && (null == (t = p.current) || t.focus());
            }),
            { isFocusVisible: y, focusProps: x } = eh({ autoFocus: d }),
            { isHovered: E, hoverProps: w } = ev({ isDisabled: c }),
            S = (null == (n = r.firstOption) ? void 0 : n.id) === s,
            P = r.compare(r.value, u),
            I = eU(
              {
                ref: v,
                id: s,
                role: "radio",
                "aria-checked": P ? "true" : "false",
                "aria-labelledby": m,
                "aria-describedby": h,
                "aria-disabled": !!c || void 0,
                tabIndex: c
                  ? -1
                  : P || (!r.containsCheckedOption && S)
                    ? r.tabIndex
                    : -1,
                autoFocus: d,
                onClick: c ? void 0 : g,
              },
              x,
              w,
            ),
            T = eL({
              checked: P,
              disabled: c,
              hover: E,
              focus: y,
              autofocus: d,
            });
          return ez()({
            ourProps: I,
            theirProps: f,
            slot: T,
            defaultTag: "span",
            name: "Radio",
          });
        }),
        aA = tD,
        aL = tC,
        a_ = Object.assign(aF, {
          Option: aM,
          Radio: aD,
          Label: aA,
          Description: aL,
        }),
        aN = eq(function (e, t) {
          let n = (0, e2.useId)(),
            r = tu(),
            o = eB(),
            {
              id: l = r || `headlessui-select-${n}`,
              disabled: i = o || !1,
              invalid: a = !1,
              autoFocus: s = !1,
              ...u
            } = e,
            c = tF(),
            d = tI(),
            { isFocusVisible: f, focusProps: p } = eh({ autoFocus: s }),
            { isHovered: v, hoverProps: m } = ev({ isDisabled: i }),
            { pressed: h, pressProps: b } = eD({ disabled: i }),
            g = eU(
              {
                ref: t,
                id: l,
                "aria-labelledby": c,
                "aria-describedby": d,
                "aria-invalid": a ? "true" : void 0,
                disabled: i || void 0,
                autoFocus: s,
              },
              p,
              m,
              b,
            ),
            y = eL({
              disabled: i,
              invalid: a,
              hover: v,
              focus: f,
              active: h,
              autofocus: s,
            });
          return ez()({
            ourProps: g,
            theirProps: u,
            slot: y,
            defaultTag: "select",
            name: "Select",
          });
        }),
        aB = m(n(36439), 1),
        aj = (0, aB.createContext)(null);
      aj.displayName = "GroupContext";
      var aH = aB.Fragment,
        a$ = eq(function (e, t) {
          var n;
          let r = (0, e2.useId)(),
            o = tu(),
            l = eB(),
            {
              id: i = o || `headlessui-switch-${r}`,
              disabled: a = l || !1,
              checked: s,
              defaultChecked: u,
              onChange: c,
              name: d,
              value: f,
              form: p,
              autoFocus: v = !1,
              ...m
            } = e,
            h = (0, aB.useContext)(aj),
            [b, g] = (0, aB.useState)(null),
            y = tS((0, aB.useRef)(null), t, null === h ? null : h.setSwitch, g),
            x = e6(u),
            [E, w] = e3(s, c, null != x && x),
            S = eT(),
            [P, I] = (0, aB.useState)(!1),
            T = eM(() => {
              (I(!0),
                null == w || w(!E),
                S.nextFrame(() => {
                  I(!1);
                }));
            }),
            C = eM((e) => {
              if (tg(e.currentTarget)) return e.preventDefault();
              (e.preventDefault(), T());
            }),
            R = eM((e) => {
              " " === e.key
                ? (e.preventDefault(), T())
                : "Enter" === e.key && te(e.currentTarget);
            }),
            O = eM((e) => e.preventDefault()),
            k = tF(),
            F = tI(),
            { isFocusVisible: M, focusProps: D } = eh({ autoFocus: v }),
            { isHovered: A, hoverProps: L } = ev({ isDisabled: a }),
            { pressed: _, pressProps: N } = eD({ disabled: a }),
            B = eL({
              checked: E,
              disabled: a,
              hover: A,
              focus: M,
              active: _,
              autofocus: v,
              changing: P,
            }),
            j = eU(
              {
                id: i,
                ref: y,
                role: "switch",
                type: n3(e, b),
                tabIndex:
                  -1 === e.tabIndex ? 0 : null != (n = e.tabIndex) ? n : 0,
                "aria-checked": E,
                "aria-labelledby": k,
                "aria-describedby": F,
                disabled: a || void 0,
                autoFocus: v,
                onClick: C,
                onKeyUp: R,
                onKeyPress: O,
              },
              D,
              L,
              N,
            ),
            H = (0, aB.useCallback)(() => {
              if (void 0 !== x) return null == w ? void 0 : w(x);
            }, [w, x]),
            $ = ez();
          return aB.default.createElement(
            aB.default.Fragment,
            null,
            null != d &&
              aB.default.createElement(tl, {
                disabled: a,
                data: { [d]: f || "on" },
                overrides: { type: "checkbox", checked: E },
                form: p,
                onReset: H,
              }),
            $({
              ourProps: j,
              theirProps: m,
              slot: B,
              defaultTag: "button",
              name: "Switch",
            }),
          );
        }),
        aV = function (e) {
          var t;
          let [n, r] = (0, aB.useState)(null),
            [o, l] = tM(),
            [i, a] = tT(),
            s = (0, aB.useMemo)(() => ({ switch: n, setSwitch: r }), [n, r]),
            u = ez();
          return aB.default.createElement(
            a,
            { name: "Switch.Description", value: i },
            aB.default.createElement(
              l,
              {
                name: "Switch.Label",
                value: o,
                props: {
                  htmlFor: null == (t = s.switch) ? void 0 : t.id,
                  onClick(e) {
                    n &&
                      (th(e.currentTarget) && e.preventDefault(),
                      n.click(),
                      n.focus({ preventScroll: !0 }));
                  },
                },
              },
              aB.default.createElement(
                aj.Provider,
                { value: s },
                u({
                  ourProps: {},
                  theirProps: e,
                  slot: {},
                  defaultTag: aH,
                  name: "Switch.Group",
                }),
              ),
            ),
          );
        },
        az = tD,
        aW = tC,
        aG = Object.assign(a$, { Group: aV, Label: az, Description: aW }),
        aK = m(n(36439), 1),
        aU = m(n(36439), 1);
      function aq({ onFocus: e }) {
        let [t, n] = (0, aU.useState)(!0),
          r = lF();
        return t
          ? aU.default.createElement(tt, {
              as: "button",
              type: "button",
              features: 2,
              onFocus: (t) => {
                t.preventDefault();
                let o,
                  l = 50;
                o = requestAnimationFrame(function t() {
                  if (l-- <= 0) {
                    o && cancelAnimationFrame(o);
                    return;
                  }
                  if (e()) {
                    if ((cancelAnimationFrame(o), !r.current)) return;
                    n(!1);
                    return;
                  }
                  o = requestAnimationFrame(t);
                });
              },
            })
          : null;
      }
      var aY = m(n(36439), 1),
        aQ = aY.createContext(null);
      function aX({ children: e }) {
        let t = aY.useRef({
          groups: new Map(),
          get(e, t) {
            var n;
            let r = this.groups.get(e);
            r || ((r = new Map()), this.groups.set(e, r));
            let o = null != (n = r.get(t)) ? n : 0;
            return (
              r.set(t, o + 1),
              [
                Array.from(r.keys()).indexOf(t),
                function () {
                  let e = r.get(t);
                  e > 1 ? r.set(t, e - 1) : r.delete(t);
                },
              ]
            );
          },
        });
        return aY.createElement(aQ.Provider, { value: t }, e);
      }
      function aJ(e) {
        let t = aY.useContext(aQ);
        if (!t)
          throw Error("You must wrap your component in a <StableCollection>");
        let n = aY.useId(),
          [r, o] = t.current.get(e, n);
        return (aY.useEffect(() => o, []), r);
      }
      var aZ = {
          0(e, t) {
            var n;
            let r = nA(e.tabs, (e) => e.current),
              o = nA(e.panels, (e) => e.current),
              l = r.filter((e) => {
                var t;
                return !(null != (t = e.current) && t.hasAttribute("disabled"));
              }),
              i = { ...e, tabs: r, panels: o };
            if (t.index < 0 || t.index > r.length - 1) {
              let n = eV(Math.sign(t.index - e.selectedIndex), {
                [-1]: () => 1,
                0: () =>
                  eV(Math.sign(t.index), {
                    [-1]: () => 0,
                    0: () => 0,
                    1: () => 1,
                  }),
                1: () => 0,
              });
              if (0 === l.length) return i;
              let o = eV(n, {
                0: () => r.indexOf(l[0]),
                1: () => r.indexOf(l[l.length - 1]),
              });
              return { ...i, selectedIndex: -1 === o ? e.selectedIndex : o };
            }
            let a = r.slice(0, t.index),
              s = [...r.slice(t.index), ...a].find((e) => l.includes(e));
            if (!s) return i;
            let u = null != (n = r.indexOf(s)) ? n : e.selectedIndex;
            return (
              -1 === u && (u = e.selectedIndex),
              { ...i, selectedIndex: u }
            );
          },
          1(e, t) {
            if (e.tabs.includes(t.tab)) return e;
            let n = e.tabs[e.selectedIndex],
              r = nA([...e.tabs, t.tab], (e) => e.current),
              o = e.selectedIndex;
            return (
              e.info.current.isControlled ||
                (-1 === (o = r.indexOf(n)) && (o = e.selectedIndex)),
              { ...e, tabs: r, selectedIndex: o }
            );
          },
          2: (e, t) => ({ ...e, tabs: e.tabs.filter((e) => e !== t.tab) }),
          3: (e, t) =>
            e.panels.includes(t.panel)
              ? e
              : { ...e, panels: nA([...e.panels, t.panel], (e) => e.current) },
          4: (e, t) => ({
            ...e,
            panels: e.panels.filter((e) => e !== t.panel),
          }),
        },
        a0 = (0, aK.createContext)(null);
      function a1(e) {
        let t = (0, aK.useContext)(a0);
        if (null === t) {
          let t = Error(
            `<${e} /> is missing a parent <Tab.Group /> component.`,
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, a1), t);
        }
        return t;
      }
      a0.displayName = "TabsDataContext";
      var a3 = (0, aK.createContext)(null);
      function a4(e) {
        let t = (0, aK.useContext)(a3);
        if (null === t) {
          let t = Error(
            `<${e} /> is missing a parent <Tab.Group /> component.`,
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, a4), t);
        }
        return t;
      }
      function a6(e, t) {
        return eV(t.type, aZ, e, t);
      }
      a3.displayName = "TabsActionsContext";
      var a2 = eq(function (e, t) {
          var n, r;
          let o = (0, e2.useId)(),
            {
              id: l = `headlessui-tabs-tab-${o}`,
              disabled: i = !1,
              autoFocus: a = !1,
              ...s
            } = e,
            {
              orientation: u,
              activation: c,
              selectedIndex: d,
              tabs: f,
              panels: p,
            } = a1("Tab"),
            v = a4("Tab"),
            m = a1("Tab"),
            [h, b] = (0, aK.useState)(null),
            g = (0, aK.useRef)(null),
            y = tS(g, t, b);
          ek(() => v.registerTab(g), [v, g]);
          let x = aJ("tabs"),
            E = f.indexOf(g);
          -1 === E && (E = x);
          let w = E === d,
            S = eM((e) => {
              let t = e();
              if (2 === t && "auto" === c) {
                let e = eE(g.current),
                  t = m.tabs.findIndex((t) => t.current === e);
                -1 !== t && v.change(t);
              }
              return t;
            }),
            P = eM((e) => {
              let t = f.map((e) => e.current).filter(Boolean);
              if (" " === e.key || "Enter" === e.key) {
                (e.preventDefault(), e.stopPropagation(), v.change(E));
                return;
              }
              switch (e.key) {
                case "Home":
                case "PageUp":
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    S(() => n_(t, 1))
                  );
                case "End":
                case "PageDown":
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    S(() => n_(t, 8))
                  );
              }
              if (
                2 ===
                S(() =>
                  eV(u, {
                    vertical: () =>
                      "ArrowUp" === e.key
                        ? n_(t, 18)
                        : "ArrowDown" === e.key
                          ? n_(t, 20)
                          : 0,
                    horizontal: () =>
                      "ArrowLeft" === e.key
                        ? n_(t, 18)
                        : "ArrowRight" === e.key
                          ? n_(t, 20)
                          : 0,
                  }),
                )
              )
                return e.preventDefault();
            }),
            I = (0, aK.useRef)(!1),
            T = eM(() => {
              var e;
              I.current ||
                ((I.current = !0),
                null == (e = g.current) || e.focus({ preventScroll: !0 }),
                v.change(E),
                eP(() => {
                  I.current = !1;
                }));
            }),
            C = eM((e) => {
              e.preventDefault();
            }),
            { isFocusVisible: R, focusProps: O } = eh({ autoFocus: a }),
            { isHovered: k, hoverProps: F } = ev({ isDisabled: i }),
            { pressed: M, pressProps: D } = eD({ disabled: i }),
            A = eL({
              selected: w,
              hover: k,
              active: M,
              focus: R,
              autofocus: a,
              disabled: i,
            }),
            L = eU(
              {
                ref: y,
                onKeyDown: P,
                onMouseDown: C,
                onClick: T,
                id: l,
                role: "tab",
                type: n3(e, h),
                "aria-controls":
                  null == (r = null == (n = p[E]) ? void 0 : n.current)
                    ? void 0
                    : r.id,
                "aria-selected": w,
                tabIndex: w ? 0 : -1,
                disabled: i || void 0,
                autoFocus: a,
              },
              O,
              F,
              D,
            );
          return ez()({
            ourProps: L,
            theirProps: s,
            slot: A,
            defaultTag: "button",
            name: "Tabs.Tab",
          });
        }),
        a9 = eq(function (e, t) {
          let {
              defaultIndex: n = 0,
              vertical: r = !1,
              manual: o = !1,
              onChange: l,
              selectedIndex: i = null,
              ...a
            } = e,
            s = r ? "vertical" : "horizontal",
            u = o ? "manual" : "auto",
            c = null !== i,
            d = eF({ isControlled: c }),
            f = tS(t),
            [p, v] = (0, aK.useReducer)(a6, {
              info: d,
              selectedIndex: null != i ? i : n,
              tabs: [],
              panels: [],
            }),
            m = eL({ selectedIndex: p.selectedIndex }),
            h = eF(l || (() => {})),
            b = eF(p.tabs),
            g = (0, aK.useMemo)(
              () => ({ orientation: s, activation: u, ...p }),
              [s, u, p],
            ),
            y = eM(
              (e) => (v({ type: 1, tab: e }), () => v({ type: 2, tab: e })),
            ),
            x = eM(
              (e) => (v({ type: 3, panel: e }), () => v({ type: 4, panel: e })),
            ),
            E = eM((e) => {
              (w.current !== e && h.current(e), c || v({ type: 0, index: e }));
            }),
            w = eF(c ? e.selectedIndex : p.selectedIndex),
            S = (0, aK.useMemo)(
              () => ({ registerTab: y, registerPanel: x, change: E }),
              [],
            );
          (ek(() => {
            v({ type: 0, index: null != i ? i : n });
          }, [i]),
            ek(() => {
              if (void 0 === w.current || p.tabs.length <= 0) return;
              let e = nA(p.tabs, (e) => e.current);
              e.some((e, t) => p.tabs[t] !== e) &&
                E(e.indexOf(p.tabs[w.current]));
            }));
          let P = ez();
          return aK.default.createElement(
            aX,
            null,
            aK.default.createElement(
              a3.Provider,
              { value: S },
              aK.default.createElement(
                a0.Provider,
                { value: g },
                g.tabs.length <= 0 &&
                  aK.default.createElement(aq, {
                    onFocus: () => {
                      var e, t;
                      for (let n of b.current)
                        if (
                          (null == (e = n.current) ? void 0 : e.tabIndex) === 0
                        )
                          return (null == (t = n.current) || t.focus(), !0);
                      return !1;
                    },
                  }),
                P({
                  ourProps: { ref: f },
                  theirProps: a,
                  slot: m,
                  defaultTag: "div",
                  name: "Tabs",
                }),
              ),
            ),
          );
        }),
        a5 = eq(function (e, t) {
          let { orientation: n, selectedIndex: r } = a1("Tab.List"),
            o = tS(t),
            l = eL({ selectedIndex: r });
          return ez()({
            ourProps: { ref: o, role: "tablist", "aria-orientation": n },
            theirProps: e,
            slot: l,
            defaultTag: "div",
            name: "Tabs.List",
          });
        }),
        a8 = eq(function (e, t) {
          let { selectedIndex: n } = a1("Tab.Panels"),
            r = tS(t),
            o = eL({ selectedIndex: n });
          return ez()({
            ourProps: { ref: r },
            theirProps: e,
            slot: o,
            defaultTag: "div",
            name: "Tabs.Panels",
          });
        }),
        a7 = eq(function (e, t) {
          var n, r, o, l;
          let i = (0, e2.useId)(),
            { id: a = `headlessui-tabs-panel-${i}`, tabIndex: s = 0, ...u } = e,
            { selectedIndex: c, tabs: d, panels: f } = a1("Tab.Panel"),
            p = a4("Tab.Panel"),
            v = (0, aK.useRef)(null),
            m = tS(v, t);
          ek(() => p.registerPanel(v), [p, v]);
          let h = aJ("panels"),
            b = f.indexOf(v);
          -1 === b && (b = h);
          let g = b === c,
            { isFocusVisible: y, focusProps: x } = eh(),
            E = eL({ selected: g, focus: y }),
            w = eU(
              {
                ref: m,
                id: a,
                role: "tabpanel",
                "aria-labelledby":
                  null == (r = null == (n = d[b]) ? void 0 : n.current)
                    ? void 0
                    : r.id,
                tabIndex: g ? s : -1,
              },
              x,
            ),
            S = ez();
          return g ||
            (null != (o = u.unmount) && !o) ||
            (null != (l = u.static) && l)
            ? S({
                ourProps: w,
                theirProps: u,
                slot: E,
                defaultTag: "div",
                features: 3,
                visible: g,
                name: "Tabs.Panel",
              })
            : aK.default.createElement(tt, { "aria-hidden": "true", ...w });
        }),
        se = Object.assign(a2, { Group: a9, List: a5, Panels: a8, Panel: a7 }),
        st = eq(function (e, t) {
          let n = (0, e2.useId)(),
            r = tu(),
            o = eB(),
            {
              id: l = r || `headlessui-textarea-${n}`,
              disabled: i = o || !1,
              autoFocus: a = !1,
              invalid: s = !1,
              ...u
            } = e,
            c = tF(),
            d = tI(),
            { isFocused: f, focusProps: p } = eh({ autoFocus: a }),
            { isHovered: v, hoverProps: m } = ev({ isDisabled: i }),
            h = eU(
              {
                ref: t,
                id: l,
                "aria-labelledby": c,
                "aria-describedby": d,
                "aria-invalid": s ? "true" : void 0,
                disabled: i || void 0,
                autoFocus: a,
              },
              p,
              m,
            ),
            b = eL({
              disabled: i,
              invalid: s,
              hover: v,
              focus: f,
              autofocus: a,
            });
          return ez()({
            ourProps: h,
            theirProps: u,
            slot: b,
            defaultTag: "textarea",
            name: "Textarea",
          });
        });
    },
  },
]);
