"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1446],
  {
    85414: (e, t, n) => {
      var r = n(23727),
        o = Object.create,
        l = Object.defineProperty,
        i = Object.getOwnPropertyDescriptor,
        a = Object.getOwnPropertyNames,
        s = Object.getPrototypeOf,
        u = Object.prototype.hasOwnProperty,
        c = (e, t, n, r) => {
          if ((t && "object" == typeof t) || "function" == typeof t)
            for (let o of a(t))
              u.call(e, o) ||
                o === n ||
                l(e, o, {
                  get: () => t[o],
                  enumerable: !(r = i(t, o)) || r.enumerable,
                });
          return e;
        },
        d = (e, t, n) => (
          (n = null != e ? o(s(e)) : {}),
          c(
            !t && e && e.__esModule
              ? n
              : l(n, "default", { value: e, enumerable: !0 }),
            e,
          )
        ),
        f = (e, t, n) => (
          ((e, t, n) =>
            t in e
              ? l(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (e[t] = n))(e, "symbol" != typeof t ? t + "" : t, n),
          n
        ),
        p = (e, t, n) => {
          if (!t.has(e)) throw TypeError("Cannot " + n);
        },
        v = (e, t, n) => (
          p(e, t, "read from private field"),
          n ? n.call(e) : t.get(e)
        ),
        m = (e, t, n) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, n);
        },
        h = (e, t, n, r) => (
          p(e, t, "write to private field"),
          r ? r.call(e, n) : t.set(e, n),
          n
        ),
        b = {};
      (((e, t) => {
        for (var n in t) l(e, n, { get: t[n], enumerable: !0 });
      })(b, {
        Button: () => eK,
        Checkbox: () => tR,
        CloseButton: () => tA,
        Combobox: () => la,
        ComboboxButton: () => ln,
        ComboboxInput: () => lr,
        ComboboxLabel: () => lo,
        ComboboxOption: () => li,
        ComboboxOptions: () => ll,
        DataInteractive: () => lu,
        Description: () => tE,
        Dialog: () => lJ,
        DialogBackdrop: () => lY,
        DialogDescription: () => lX,
        DialogPanel: () => lq,
        DialogTitle: () => lQ,
        Disclosure: () => it,
        DisclosureButton: () => l7,
        DisclosurePanel: () => ie,
        Field: () => io,
        Fieldset: () => is,
        FocusTrap: () => lP,
        FocusTrapFeatures: () => lS,
        Input: () => iu,
        Label: () => tC,
        Legend: () => id,
        Listbox: () => iN,
        ListboxButton: () => iM,
        ListboxLabel: () => iD,
        ListboxOption: () => iL,
        ListboxOptions: () => iA,
        ListboxSelectedOption: () => i_,
        Menu: () => i3,
        MenuButton: () => iQ,
        MenuHeading: () => i0,
        MenuItem: () => iJ,
        MenuItems: () => iX,
        MenuSection: () => iZ,
        MenuSeparator: () => i1,
        Popover: () => au,
        PopoverBackdrop: () => ai,
        PopoverButton: () => ao,
        PopoverGroup: () => as,
        PopoverOverlay: () => al,
        PopoverPanel: () => aa,
        Portal: () => oY,
        Radio: () => ay,
        RadioGroup: () => aw,
        RadioGroupDescription: () => aE,
        RadioGroupLabel: () => ax,
        RadioGroupOption: () => ag,
        Select: () => aS,
        Switch: () => aF,
        SwitchDescription: () => ak,
        SwitchGroup: () => aR,
        SwitchLabel: () => aO,
        Tab: () => aQ,
        TabGroup: () => aK,
        TabList: () => aU,
        TabPanel: () => aY,
        TabPanels: () => aq,
        Textarea: () => aX,
        Transition: () => l_,
        TransitionChild: () => lL,
        useClose: () => tM,
      }),
        (e.exports = c(l({}, "__esModule", { value: !0 }), b)));
      var g = d(n(36439), 1),
        y =
          "undefined" != typeof document ? g.default.useLayoutEffect : () => {},
        x = n(36439),
        E = (e) => {
          var t;
          return null != (t = null == e ? void 0 : e.ownerDocument)
            ? t
            : document;
        },
        w = (e) =>
          e && "window" in e && e.window === e ? e : E(e).defaultView || window;
      function S(e, t) {
        return !!t && !!e && e.contains(t);
      }
      function P(e) {
        var t;
        return (
          "undefined" != typeof window &&
          null != window.navigator &&
          ((null == (t = window.navigator.userAgentData)
            ? void 0
            : t.brands.some((t) => e.test(t.brand))) ||
            e.test(window.navigator.userAgent))
        );
      }
      function I(e) {
        var t;
        return (
          "undefined" != typeof window &&
          null != window.navigator &&
          e.test(
            (null == (t = window.navigator.userAgentData)
              ? void 0
              : t.platform) || window.navigator.platform,
          )
        );
      }
      function T(e) {
        let t = null;
        return () => (null == t && (t = e()), t);
      }
      var C = T(function () {
          return I(/^Mac/i);
        }),
        R = T(function () {
          return I(/^iPhone/i);
        }),
        O = T(function () {
          return I(/^iPad/i) || (C() && navigator.maxTouchPoints > 1);
        }),
        k = T(function () {
          return R() || O();
        }),
        F =
          (T(function () {
            return C() || k();
          }),
          T(function () {
            return P(/AppleWebKit/i) && !F();
          }),
          T(function () {
            return P(/Chrome/i);
          })),
        M = T(function () {
          return P(/Android/i);
        });
      T(function () {
        return P(/Firefox/i);
      });
      var D = n(36439);
      function A() {
        let e = (0, D.useRef)(new Map()),
          t = (0, D.useCallback)((t, n, r, o) => {
            let l =
              null != o && o.once
                ? (...t) => {
                    (e.current.delete(r), r(...t));
                  }
                : r;
            (e.current.set(r, { type: n, eventTarget: t, fn: l, options: o }),
              t.addEventListener(n, l, o));
          }, []),
          n = (0, D.useCallback)((t, n, r, o) => {
            var l;
            let i = (null == (l = e.current.get(r)) ? void 0 : l.fn) || r;
            (t.removeEventListener(n, i, o), e.current.delete(r));
          }, []),
          r = (0, D.useCallback)(() => {
            e.current.forEach((e, t) => {
              n(e.eventTarget, e.type, t, e.options);
            });
          }, [n]);
        return (
          (0, D.useEffect)(() => r, [r]),
          {
            addGlobalListener: t,
            removeGlobalListener: n,
            removeAllGlobalListeners: r,
          }
        );
      }
      var L = n(36439);
      function _(e) {
        return (
          (e.nativeEvent = e),
          (e.isDefaultPrevented = () => e.defaultPrevented),
          (e.isPropagationStopped = () => e.cancelBubble),
          (e.persist = () => {}),
          e
        );
      }
      function N(e) {
        var t;
        let n,
          r = (0, L.useRef)({ isFocused: !1, observer: null });
        y(() => {
          let e = r.current;
          return () => {
            e.observer && (e.observer.disconnect(), (e.observer = null));
          };
        }, []);
        let o =
          ((t = (t) => {
            null == e || e(t);
          }),
          (n = (0, x.useRef)(null)),
          y(() => {
            n.current = t;
          }, [t]),
          (0, x.useCallback)((...e) => {
            let t = n.current;
            return null == t ? void 0 : t(...e);
          }, []));
        return (0, L.useCallback)(
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
                    t.disabled && o(_(e)),
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
      var B = n(36439),
        j = null,
        H = new Set(),
        $ = new Map(),
        V = !1,
        z = !1,
        W = { Tab: !0, Escape: !0 };
      function G(e, t) {
        for (let n of H) n(e, t);
      }
      function K(e) {
        ((V = !0),
          e.metaKey ||
            (!C() && e.altKey) ||
            e.ctrlKey ||
            "Control" === e.key ||
            "Shift" === e.key ||
            "Meta" === e.key ||
            ((j = "keyboard"), G("keyboard", e)));
      }
      function U(e) {
        ((j = "pointer"),
          ("mousedown" === e.type || "pointerdown" === e.type) &&
            ((V = !0), G("pointer", e)));
      }
      function q(e) {
        ((0 === e.mozInputSource && e.isTrusted) ||
          (M() && e.pointerType
            ? "click" === e.type && 1 === e.buttons
            : 0 === e.detail && !e.pointerType)) &&
          ((V = !0), (j = "virtual"));
      }
      function Y(e) {
        e.target !== window &&
          e.target !== document &&
          e.isTrusted &&
          (V || z || ((j = "virtual"), G("virtual", e)), (V = !1), (z = !1));
      }
      function Q() {
        ((V = !1), (z = !0));
      }
      function X(e) {
        if ("undefined" == typeof window || $.get(w(e))) return;
        let t = w(e),
          n = E(e),
          r = t.HTMLElement.prototype.focus;
        ((t.HTMLElement.prototype.focus = function () {
          ((V = !0), r.apply(this, arguments));
        }),
          n.addEventListener("keydown", K, !0),
          n.addEventListener("keyup", K, !0),
          n.addEventListener("click", q, !0),
          t.addEventListener("focus", Y, !0),
          t.addEventListener("blur", Q, !1),
          "undefined" != typeof PointerEvent &&
            (n.addEventListener("pointerdown", U, !0),
            n.addEventListener("pointermove", U, !0),
            n.addEventListener("pointerup", U, !0)),
          t.addEventListener(
            "beforeunload",
            () => {
              J(e);
            },
            { once: !0 },
          ),
          $.set(t, { focus: r }));
      }
      var J = (e, t) => {
        let n = w(e),
          r = E(e);
        (t && r.removeEventListener("DOMContentLoaded", t),
          $.has(n) &&
            ((n.HTMLElement.prototype.focus = $.get(n).focus),
            r.removeEventListener("keydown", K, !0),
            r.removeEventListener("keyup", K, !0),
            r.removeEventListener("click", q, !0),
            n.removeEventListener("focus", Y, !0),
            n.removeEventListener("blur", Q, !1),
            "undefined" != typeof PointerEvent &&
              (r.removeEventListener("pointerdown", U, !0),
              r.removeEventListener("pointermove", U, !0),
              r.removeEventListener("pointerup", U, !0)),
            $.delete(n)));
      };
      function Z() {
        return "pointer" !== j;
      }
      "undefined" != typeof document &&
        (function (e) {
          let t = E(void 0),
            n;
          ("loading" !== t.readyState
            ? X(void 0)
            : ((n = () => {
                X(e);
              }),
              t.addEventListener("DOMContentLoaded", n)),
            () => J(e, n));
        })();
      var ee = new Set([
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
        et = n(36439),
        en = n(36439),
        er = n(36439),
        eo = !1,
        el = 0;
      function ei(e) {
        "touch" === e.pointerType &&
          ((eo = !0),
          setTimeout(() => {
            eo = !1;
          }, 50));
      }
      function ea() {
        if ("undefined" != typeof document)
          return (
            "undefined" != typeof PointerEvent &&
              document.addEventListener("pointerup", ei),
            el++,
            () => {
              --el > 0 ||
                "undefined" == typeof PointerEvent ||
                document.removeEventListener("pointerup", ei);
            }
          );
      }
      function es(e) {
        let {
            onHoverStart: t,
            onHoverChange: n,
            onHoverEnd: r,
            isDisabled: o,
          } = e,
          [l, i] = (0, er.useState)(!1),
          a = (0, er.useRef)({
            isHovered: !1,
            ignoreEmulatedMouseEvents: !1,
            pointerType: "",
            target: null,
          }).current;
        (0, er.useEffect)(ea, []);
        let { addGlobalListener: s, removeAllGlobalListeners: u } = A(),
          { hoverProps: c, triggerHoverEnd: d } = (0, er.useMemo)(() => {
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
              "undefined" != typeof PointerEvent &&
                ((l.onPointerEnter = (r) => {
                  (eo && "mouse" === r.pointerType) ||
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
                          E(r.target),
                          "pointerover",
                          (t) => {
                            a.isHovered &&
                              a.target &&
                              !S(a.target, t.target) &&
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
          (0, er.useEffect)(() => {
            o && d({ currentTarget: a.target }, a.pointerType);
          }, [o]),
          { hoverProps: c, isHovered: l }
        );
      }
      var eu = n(36439);
      function ec(e = {}) {
        var t;
        let { autoFocus: n = !1, isTextInput: r, within: o } = e,
          l = (0, eu.useRef)({ isFocused: !1, isFocusVisible: n || Z() }),
          [i, a] = (0, eu.useState)(!1),
          [s, u] = (0, eu.useState)(
            () => l.current.isFocused && l.current.isFocusVisible,
          ),
          c = (0, eu.useCallback)(
            () => u(l.current.isFocused && l.current.isFocusVisible),
            [],
          ),
          d = (0, eu.useCallback)(
            (e) => {
              ((l.current.isFocused = e), a(e), c());
            },
            [c],
          );
        ((t = { isTextInput: r }),
          X(),
          (0, B.useEffect)(() => {
            let e = (e, n) => {
              var r;
              let o, i, a, s, u;
              ((r = !!(null != t && t.isTextInput)),
                (o = E(null == n ? void 0 : n.target)),
                (i =
                  "undefined" != typeof window
                    ? w(null == n ? void 0 : n.target).HTMLInputElement
                    : HTMLInputElement),
                (a =
                  "undefined" != typeof window
                    ? w(null == n ? void 0 : n.target).HTMLTextAreaElement
                    : HTMLTextAreaElement),
                (s =
                  "undefined" != typeof window
                    ? w(null == n ? void 0 : n.target).HTMLElement
                    : HTMLElement),
                (u =
                  "undefined" != typeof window
                    ? w(null == n ? void 0 : n.target).KeyboardEvent
                    : KeyboardEvent),
                ((r =
                  r ||
                  (o.activeElement instanceof i &&
                    !ee.has(o.activeElement.type)) ||
                  o.activeElement instanceof a ||
                  (o.activeElement instanceof s &&
                    o.activeElement.isContentEditable)) &&
                  "keyboard" === e &&
                  n instanceof u &&
                  !W[n.key]) ||
                  ((e) => {
                    ((l.current.isFocusVisible = e), c());
                  })(Z()));
            };
            return (
              H.add(e),
              () => {
                H.delete(e);
              }
            );
          }, []));
        let { focusProps: f } = (function (e) {
            let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: o } = e,
              l = (0, et.useCallback)(
                (e) => {
                  if (e.target === e.currentTarget)
                    return (r && r(e), o && o(!1), !0);
                },
                [r, o],
              ),
              i = N(l),
              a = (0, et.useCallback)(
                (e) => {
                  var t;
                  let r = E(e.target),
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
              l = (0, en.useRef)({ isFocusWithin: !1 }),
              { addGlobalListener: i, removeAllGlobalListeners: a } = A(),
              s = (0, en.useCallback)(
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
              u = N(s),
              c = (0, en.useCallback)(
                (e) => {
                  var t;
                  if (!e.currentTarget.contains(e.target)) return;
                  let n = E(e.target),
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
                        if (l.current.isFocusWithin && !S(t, e.target)) {
                          let r = new n.defaultView.FocusEvent("blur", {
                            relatedTarget: e.target,
                          });
                          (Object.defineProperty(r, "target", { value: t }),
                            Object.defineProperty(r, "currentTarget", {
                              value: t,
                            }),
                            s(_(r)));
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
      var ed = n(36439),
        ef = new (class {
          constructor() {
            (f(this, "current", this.detect()),
              f(this, "handoffState", "pending"),
              f(this, "currentId", 0));
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
            return "undefined" == typeof window ||
              "undefined" == typeof document
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
      function ep(e) {
        var t;
        return ef.isServer
          ? null
          : null == e
            ? document
            : null != (t = null == e ? void 0 : e.ownerDocument)
              ? t
              : document;
      }
      function ev(e) {
        var t, n;
        return ef.isServer
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
      function em(e) {
        var t, n;
        return null != (n = null == (t = ev(e)) ? void 0 : t.activeElement)
          ? n
          : null;
      }
      function eh(e) {
        return em(e) === e;
      }
      var eb = n(36439);
      function eg(e) {
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
      function ey() {
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
                eg(() => {
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
              let t = ey();
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
      function ex() {
        let [e] = (0, eb.useState)(ey);
        return ((0, eb.useEffect)(() => () => e.dispose(), [e]), e);
      }
      var eE = d(n(36439), 1),
        ew = n(36439),
        eS = n(36439),
        eP = (e, t) => {
          ef.isServer ? (0, eS.useEffect)(e, t) : (0, eS.useLayoutEffect)(e, t);
        };
      function eI(e) {
        let t = (0, ew.useRef)(e);
        return (
          eP(() => {
            t.current = e;
          }, [e]),
          t
        );
      }
      var eT = function (e) {
        let t = eI(e);
        return eE.default.useCallback((...e) => t.current(...e), [t]);
      };
      function eC({ disabled: e = !1 } = {}) {
        let t = (0, ed.useRef)(null),
          [n, r] = (0, ed.useState)(!1),
          o = ex(),
          l = eT(() => {
            ((t.current = null), r(!1), o.dispose());
          }),
          i = eT((e) => {
            if ((o.dispose(), null === t.current)) {
              ((t.current = e.currentTarget), r(!0));
              {
                let n = ep(e.currentTarget);
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
      var eR = n(36439);
      function eO(e) {
        return (0, eR.useMemo)(() => e, Object.values(e));
      }
      var ek = d(n(36439), 1),
        eF = (0, ek.createContext)(void 0);
      function eM() {
        return (0, ek.useContext)(eF);
      }
      function eD({ value: e, children: t }) {
        return ek.default.createElement(eF.Provider, { value: e }, t);
      }
      var eA = d(n(36439), 1);
      function eL(...e) {
        return Array.from(
          new Set(e.flatMap((e) => ("string" == typeof e ? e.split(" ") : []))),
        )
          .filter(Boolean)
          .join(" ");
      }
      function e_(e, t, ...n) {
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
        throw (Error.captureStackTrace && Error.captureStackTrace(r, e_), r);
      }
      function eN() {
        let e,
          t,
          n =
            ((e = (0, eA.useRef)([])),
            (t = (0, eA.useCallback)((t) => {
              for (let n of e.current)
                null != n && ("function" == typeof n ? n(t) : (n.current = t));
            }, [])),
            (...n) => {
              if (!n.every((e) => null == e)) return ((e.current = n), t);
            });
        return (0, eA.useCallback)(
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
              a = null != a ? a : ej;
              let s = eH(t, e);
              if (l) return eB(s, n, r, i, a);
              let u = null != o ? o : 0;
              if (2 & u) {
                let { static: e = !1, ...t } = s;
                if (e) return eB(t, n, r, i, a);
              }
              if (1 & u) {
                let { unmount: e = !0, ...t } = s;
                return e_(+!e, {
                  0: () => null,
                  1: () =>
                    eB(
                      { ...t, hidden: !0, style: { display: "none" } },
                      n,
                      r,
                      i,
                      a,
                    ),
                });
              }
              return eB(s, n, r, i, a);
            })({ mergeRefs: n, ...e }),
          [n],
        );
      }
      function eB(e, t = {}, n, r, o) {
        let {
            as: l = n,
            children: i,
            refName: a = "ref",
            ...s
          } = eW(e, ["unmount", "static"]),
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
          eG(l) &&
          (Object.keys(ez(s)).length > 0 || Object.keys(ez(d)).length > 0)
        )
          if (
            !(0, eA.isValidElement)(c) ||
            (Array.isArray(c) && c.length > 1) ||
            eG(c.type)
          ) {
            if (Object.keys(ez(s)).length > 0)
              throw Error(
                [
                  'Passing props on "Fragment"!',
                  "",
                  `The current component <${r} /> is rendering a "Fragment".`,
                  "However we need to passthrough the following props:",
                  Object.keys(ez(s))
                    .concat(Object.keys(ez(d)))
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
                  ? (...e) => eL(t(...e), s.className)
                  : eL(t, s.className),
              r = eH(c.props, ez(eW(s, ["ref"])));
            for (let e in d) e in r && delete d[e];
            return (0, eA.cloneElement)(
              c,
              Object.assign(
                {},
                r,
                d,
                u,
                {
                  ref: o(
                    ((f = c),
                    eA.default.version.split(".")[0] >= "19"
                      ? f.props.ref
                      : f.ref),
                    u.ref,
                  ),
                },
                n ? { className: n } : {},
              ),
            );
          }
        return (0, eA.createElement)(
          l,
          Object.assign({}, eW(s, ["ref"]), !eG(l) && u, !eG(l) && d),
          c,
        );
      }
      function ej(...e) {
        return e.every((e) => null == e)
          ? void 0
          : (t) => {
              for (let n of e)
                null != n && ("function" == typeof n ? n(t) : (n.current = t));
            };
      }
      function eH(...e) {
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
      function e$(...e) {
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
      function eV(e) {
        var t;
        return Object.assign((0, eA.forwardRef)(e), {
          displayName: null != (t = e.displayName) ? t : e.name,
        });
      }
      function ez(e) {
        let t = Object.assign({}, e);
        for (let e in t) void 0 === t[e] && delete t[e];
        return t;
      }
      function eW(e, t = []) {
        let n = Object.assign({}, e);
        for (let e of t) e in n && delete n[e];
        return n;
      }
      function eG(e) {
        return e === eA.Fragment || e === Symbol.for("react.fragment");
      }
      var eK = eV(function (e, t) {
          var n;
          let r = eM(),
            { disabled: o = r || !1, autoFocus: l = !1, ...i } = e,
            { isFocusVisible: a, focusProps: s } = ec({ autoFocus: l }),
            { isHovered: u, hoverProps: c } = es({ isDisabled: o }),
            { pressed: d, pressProps: f } = eC({ disabled: o }),
            p = e$(
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
            v = eO({
              disabled: o,
              hover: u,
              focus: a,
              active: d,
              autofocus: l,
            });
          return eN()({
            ourProps: p,
            theirProps: i,
            slot: v,
            defaultTag: "button",
            name: "Button",
          });
        }),
        eU = d(n(36439), 1),
        eq = n(36439),
        eY = n(72354);
      function eQ(e, t, n) {
        let [r, o] = (0, eq.useState)(n),
          l = void 0 !== e,
          i = (0, eq.useRef)(l),
          a = (0, eq.useRef)(!1),
          s = (0, eq.useRef)(!1);
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
            eT(
              (e) => (
                l || (0, eY.flushSync)(() => o(e)),
                null == t ? void 0 : t(e)
              ),
            ),
          ]
        );
      }
      var eX = n(36439);
      function eJ(e) {
        let [t] = (0, eX.useState)(e);
        return t;
      }
      var eZ = n(36439),
        e0 = d(n(36439), 1),
        e1 = n(72354),
        e3 = n(36439);
      function e4(e, t) {
        return e ? e + "[" + t + "]" : t;
      }
      function e2(e) {
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
      var e6 = eV(function (e, t) {
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
          return eN()({
            ourProps: l,
            theirProps: o,
            slot: {},
            defaultTag: "span",
            name: "Hidden",
          });
        }),
        e9 = (0, e0.createContext)(null);
      function e5(e) {
        let [t, n] = (0, e0.useState)(null);
        return e0.default.createElement(
          e9.Provider,
          { value: { target: t } },
          e.children,
          e0.default.createElement(e6, { features: 4, ref: n }),
        );
      }
      function e8({ children: e }) {
        let t = (0, e0.useContext)(e9);
        if (!t) return e0.default.createElement(e0.default.Fragment, null, e);
        let { target: n } = t;
        return n
          ? (0, e1.createPortal)(
              e0.default.createElement(e0.default.Fragment, null, e),
              n,
            )
          : null;
      }
      function e7({ data: e, form: t, disabled: n, onReset: r, overrides: o }) {
        let [l, i] = (0, e0.useState)(null),
          a = ex();
        return (
          (0, e0.useEffect)(() => {
            if (r && l) return a.addEventListener(l, "reset", r);
          }, [l, t, r]),
          e0.default.createElement(
            e8,
            null,
            e0.default.createElement(te, { setForm: i, formId: t }),
            (function e(t = {}, n = null, r = []) {
              for (let [o, l] of Object.entries(t))
                !(function t(n, r, o) {
                  if (Array.isArray(o))
                    for (let [e, l] of o.entries())
                      t(n, e4(r, e.toString()), l);
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
                                !(0, e3.isValidElement)(o) &&
                                e(o, r, n);
                })(r, e4(n, o), l);
              return r;
            })(e).map(([e, r]) =>
              e0.default.createElement(e6, {
                features: 4,
                ...ez({
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
      function te({ setForm: e, formId: t }) {
        return (
          (0, e0.useEffect)(() => {
            if (t) {
              let n = document.getElementById(t);
              n && e(n);
            }
          }, [e, t]),
          t
            ? null
            : e0.default.createElement(e6, {
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
      var tt = d(n(36439), 1),
        tn = (0, tt.createContext)(void 0);
      function tr() {
        return (0, tt.useContext)(tn);
      }
      function to({ id: e, children: t }) {
        return tt.default.createElement(tn.Provider, { value: e }, t);
      }
      function tl(e) {
        return "object" == typeof e && null !== e && "nodeType" in e;
      }
      function ti(e) {
        return tl(e) && "tagName" in e;
      }
      function ta(e) {
        return ti(e) && "accessKey" in e;
      }
      function ts(e) {
        return ti(e) && "tabIndex" in e;
      }
      function tu(e) {
        return ta(e) && "INPUT" === e.nodeName;
      }
      function tc(e) {
        return ta(e) && "LABEL" === e.nodeName;
      }
      function td(e) {
        return ta(e) && "LEGEND" === e.nodeName;
      }
      function tf(e) {
        var t;
        let n = e.parentElement,
          r = null;
        for (; n && !(ta((t = n)) && "FIELDSET" === t.nodeName); )
          (td(n) && (r = n), (n = n.parentElement));
        let o = (null == n ? void 0 : n.getAttribute("disabled")) === "";
        return (
          !(
            o &&
            (function (e) {
              if (!e) return !1;
              let t = e.previousElementSibling;
              for (; null !== t; ) {
                if (td(t)) return !1;
                t = t.previousElementSibling;
              }
              return !0;
            })(r)
          ) && o
        );
      }
      var tp = d(n(36439), 1),
        tv = n(36439),
        tm = Symbol();
      function th(e, t = !0) {
        return Object.assign(e, { [tm]: t });
      }
      function tb(...e) {
        let t = (0, tv.useRef)(e);
        (0, tv.useEffect)(() => {
          t.current = e;
        }, [e]);
        let n = eT((e) => {
          for (let n of t.current)
            null != n && ("function" == typeof n ? n(e) : (n.current = e));
        });
        return e.every((e) => null == e || (null == e ? void 0 : e[tm]))
          ? void 0
          : n;
      }
      var tg = (0, tp.createContext)(null);
      function ty() {
        var e, t;
        return null !=
          (t = null == (e = (0, tp.useContext)(tg)) ? void 0 : e.value)
          ? t
          : void 0;
      }
      function tx() {
        let [e, t] = (0, tp.useState)([]);
        return [
          e.length > 0 ? e.join(" ") : void 0,
          (0, tp.useMemo)(
            () =>
              function (e) {
                let n = eT(
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
                  r = (0, tp.useMemo)(
                    () => ({
                      register: n,
                      slot: e.slot,
                      name: e.name,
                      props: e.props,
                      value: e.value,
                    }),
                    [n, e.slot, e.name, e.props, e.value],
                  );
                return tp.default.createElement(
                  tg.Provider,
                  { value: r },
                  e.children,
                );
              },
            [t],
          ),
        ];
      }
      tg.displayName = "DescriptionContext";
      var tE = Object.assign(
          eV(function (e, t) {
            let n = (0, eZ.useId)(),
              r = eM(),
              { id: o = `headlessui-description-${n}`, ...l } = e,
              i = (function e() {
                let t = (0, tp.useContext)(tg);
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
              a = tb(t);
            eP(() => i.register(o), [o, i.register]);
            let s = eO({ ...i.slot, disabled: r || !1 }),
              u = { ref: a, ...i.props, id: o };
            return eN()({
              ourProps: u,
              theirProps: l,
              slot: s,
              defaultTag: "p",
              name: i.name || "Description",
            });
          }),
          {},
        ),
        tw = d(n(36439), 1),
        tS = (0, tw.createContext)(null);
      function tP() {
        let e = (0, tw.useContext)(tS);
        if (null === e) {
          let e = Error(
            "You used a <Label /> component, but it is not inside a relevant parent.",
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(e, tP), e);
        }
        return e;
      }
      function tI(e) {
        var t, n, r;
        let o =
          null != (n = null == (t = (0, tw.useContext)(tS)) ? void 0 : t.value)
            ? n
            : void 0;
        return (null != (r = null == e ? void 0 : e.length) ? r : 0) > 0
          ? [o, ...e].filter(Boolean).join(" ")
          : o;
      }
      function tT({ inherit: e = !1 } = {}) {
        let t = tI(),
          [n, r] = (0, tw.useState)([]),
          o = e ? [t, ...n].filter(Boolean) : n;
        return [
          o.length > 0 ? o.join(" ") : void 0,
          (0, tw.useMemo)(
            () =>
              function (e) {
                let t = eT(
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
                  n = (0, tw.useMemo)(
                    () => ({
                      register: t,
                      slot: e.slot,
                      name: e.name,
                      props: e.props,
                      value: e.value,
                    }),
                    [t, e.slot, e.name, e.props, e.value],
                  );
                return tw.default.createElement(
                  tS.Provider,
                  { value: n },
                  e.children,
                );
              },
            [r],
          ),
        ];
      }
      tS.displayName = "LabelContext";
      var tC = Object.assign(
          eV(function (e, t) {
            var n;
            let r = (0, eZ.useId)(),
              o = tP(),
              l = tr(),
              i = eM(),
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
              d = tb(t);
            eP(() => o.register(a), [a, o.register]);
            let f = eT((e) => {
                var t;
                let n = e.currentTarget;
                if (
                  !(
                    e.target !== e.currentTarget &&
                    ti((t = e.target)) &&
                    t.matches(
                      'a[href],audio[controls],button,details,embed,iframe,img[usemap],input:not([type="hidden"]),label,select,textarea,video[controls]',
                    )
                  ) &&
                  (tc(n) && e.preventDefault(),
                  o.props &&
                    "onClick" in o.props &&
                    "function" == typeof o.props.onClick &&
                    o.props.onClick(e),
                  tc(n))
                ) {
                  let e = document.getElementById(n.htmlFor);
                  if (e) {
                    let t = e.getAttribute("disabled");
                    if ("true" === t || "" === t) return;
                    let n = e.getAttribute("aria-disabled");
                    if ("true" === n || "" === n) return;
                    (((tu(e) &&
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
              p = eO({ ...o.slot, disabled: i || !1 }),
              v = { ref: d, ...o.props, id: a, htmlFor: s, onClick: f };
            return (
              u &&
                ("onClick" in v && (delete v.htmlFor, delete v.onClick),
                "onClick" in c && delete c.onClick),
              eN()({
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
        tR = eV(function (e, t) {
          let n = (0, eZ.useId)(),
            r = tr(),
            o = eM(),
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
            b = eJ(u),
            [g, y] = eQ(s, c, null != b && b),
            x = tI(),
            E = ty(),
            w = ex(),
            [S, P] = (0, eU.useState)(!1),
            I = eT(() => {
              (P(!0),
                null == y || y(!g),
                w.nextFrame(() => {
                  P(!1);
                }));
            }),
            T = eT((e) => {
              if (tf(e.currentTarget)) return e.preventDefault();
              (e.preventDefault(), I());
            }),
            C = eT((e) => {
              " " === e.key
                ? (e.preventDefault(), I())
                : "Enter" === e.key && e2(e.currentTarget);
            }),
            R = eT((e) => e.preventDefault()),
            { isFocusVisible: O, focusProps: k } = ec({ autoFocus: a }),
            { isHovered: F, hoverProps: M } = es({ isDisabled: i }),
            { pressed: D, pressProps: A } = eC({ disabled: i }),
            L = e$(
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
            _ = eO({
              checked: g,
              disabled: i,
              hover: F,
              focus: O,
              active: D,
              indeterminate: v,
              changing: S,
              autofocus: a,
            }),
            N = (0, eU.useCallback)(() => {
              if (void 0 !== b) return null == y ? void 0 : y(b);
            }, [y, b]),
            B = eN();
          return eU.default.createElement(
            eU.default.Fragment,
            null,
            null != d &&
              eU.default.createElement(e7, {
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
        tO = d(n(36439), 1),
        tk = d(n(36439), 1),
        tF = (0, tk.createContext)(() => {});
      function tM() {
        return (0, tk.useContext)(tF);
      }
      function tD({ value: e, children: t }) {
        return tk.default.createElement(tF.Provider, { value: e }, t);
      }
      var tA = eV(function (e, t) {
          let n = tM();
          return tO.default.createElement(eK, {
            ref: t,
            ...e$({ onClick: n }, e),
          });
        }),
        tL = d(n(36439), 1),
        t_ = n(72354);
      function tN(e, t, n) {
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
              `%c\u23F1 ${o(t, 5)} /${o(e, 5)} ms`,
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
      function tB(e, t) {
        if (void 0 === e)
          throw Error(`Unexpected undefined${t ? `: ${t}` : ""}`);
        return e;
      }
      var tj = (e) => {
          let { offsetWidth: t, offsetHeight: n } = e;
          return { width: t, height: n };
        },
        tH = (e) => e,
        t$ = (e) => {
          let t = Math.max(e.startIndex - e.overscan, 0),
            n = Math.min(e.endIndex + e.overscan, e.count - 1),
            r = [];
          for (let e = t; e <= n; e++) r.push(e);
          return r;
        },
        tV = (e, t) => {
          let n = e.scrollElement;
          if (!n) return;
          let r = e.targetWindow;
          if (!r) return;
          let o = (e) => {
            let { width: n, height: r } = e;
            t({ width: Math.round(n), height: Math.round(r) });
          };
          if ((o(tj(n)), !r.ResizeObserver)) return () => {};
          let l = new r.ResizeObserver((t) => {
            let r = () => {
              let e = t[0];
              if (null != e && e.borderBoxSize) {
                let t = e.borderBoxSize[0];
                if (t)
                  return void o({ width: t.inlineSize, height: t.blockSize });
              }
              o(tj(n));
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
        tz = { passive: !0 },
        tW = "undefined" == typeof window || "onscrollend" in window,
        tG = (e, t) => {
          let n = e.scrollElement;
          if (!n) return;
          let r = e.targetWindow;
          if (!r) return;
          let o = 0,
            l =
              e.options.useScrollendEvent && tW
                ? () => {}
                : ((e, t, n) => {
                    let r;
                    return function (...o) {
                      (e.clearTimeout(r),
                        (r = e.setTimeout(() => t.apply(this, o), n)));
                    };
                  })(
                    r,
                    () => {
                      t(o, !1);
                    },
                    e.options.isScrollingResetDelay,
                  ),
            i = (r) => () => {
              let { horizontal: i, isRtl: a } = e.options;
              ((o = i ? n.scrollLeft * ((a && -1) || 1) : n.scrollTop),
                l(),
                t(o, r));
            },
            a = i(!0),
            s = i(!1);
          (s(), n.addEventListener("scroll", a, tz));
          let u = e.options.useScrollendEvent && tW;
          return (
            u && n.addEventListener("scrollend", s, tz),
            () => {
              (n.removeEventListener("scroll", a),
                u && n.removeEventListener("scrollend", s));
            }
          );
        },
        tK = (e, t, n) => {
          if (null != t && t.borderBoxSize) {
            let e = t.borderBoxSize[0];
            if (e)
              return Math.round(
                e[n.options.horizontal ? "inlineSize" : "blockSize"],
              );
          }
          return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
        },
        tU = (e, { adjustments: t = 0, behavior: n }, r) => {
          var o, l;
          null == (l = null == (o = r.scrollElement) ? void 0 : o.scrollTo) ||
            l.call(o, {
              [r.options.horizontal ? "left" : "top"]: e + t,
              behavior: n,
            });
        },
        tq = class {
          constructor(e) {
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
              (this.observer = (() => {
                let e = null,
                  t = () =>
                    e ||
                    (this.targetWindow && this.targetWindow.ResizeObserver
                      ? (e = new this.targetWindow.ResizeObserver((e) => {
                          e.forEach((e) => {
                            let t = () => {
                              this._measureElement(e.target, e);
                            };
                            this.options.useAnimationFrameWithResizeObserver
                              ? requestAnimationFrame(t)
                              : t();
                          });
                        }))
                      : null);
                return {
                  disconnect: () => {
                    var n;
                    (null == (n = t()) || n.disconnect(), (e = null));
                  },
                  observe: (e) => {
                    var n;
                    return null == (n = t())
                      ? void 0
                      : n.observe(e, { box: "border-box" });
                  },
                  unobserve: (e) => {
                    var n;
                    return null == (n = t()) ? void 0 : n.unobserve(e);
                  },
                };
              })()),
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
                    getItemKey: tH,
                    rangeExtractor: t$,
                    onChange: () => {},
                    measureElement: tK,
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
              (this.maybeNotify = tN(
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
              (this.getMeasurementOptions = tN(
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
              (this.getMeasurements = tN(
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
              (this.calculateRange = tN(
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
                          let i = tY(0, o, l, n),
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
              (this.getVirtualIndexes = tN(
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
                if (!e)
                  return void this.elementsCache.forEach((e, t) => {
                    e.isConnected ||
                      (this.observer.unobserve(e),
                      this.elementsCache.delete(t));
                  });
                this._measureElement(e, void 0);
              }),
              (this.getVirtualItems = tN(
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
                  return tB(t[tY(0, t.length - 1, (e) => tB(t[e]).start, e)]);
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
        tY = (e, t, n, r) => {
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
        tQ = "undefined" != typeof document ? tL.useLayoutEffect : tL.useEffect,
        tX = d(n(36439), 1),
        tJ = n(72354),
        tZ = n(36439);
      function t0(e, t) {
        return null !== e &&
          null !== t &&
          "object" == typeof e &&
          "object" == typeof t &&
          "id" in e &&
          "id" in t
          ? e.id === t.id
          : e === t;
      }
      function t1(e = t0) {
        return (0, tZ.useCallback)(
          (t, n) =>
            "string" == typeof e
              ? (null == t ? void 0 : t[e]) === (null == n ? void 0 : n[e])
              : e(t, n),
          [e],
        );
      }
      var t3 = n(36439);
      function t4(e) {
        if (null === e) return { width: 0, height: 0 };
        let { width: t, height: n } = e.getBoundingClientRect();
        return { width: t, height: n };
      }
      function t2(e, t, n = !1) {
        let [r, o] = (0, t3.useState)(() => t4(t));
        return (
          eP(() => {
            if (!t || !e) return;
            let n = ey();
            return (
              n.requestAnimationFrame(function e() {
                (n.requestAnimationFrame(e),
                  o((e) => {
                    let n = t4(t);
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
      var t6 = n(36439);
      function t9(e) {
        let t = (0, t6.useRef)(null);
        return {
          onPointerDown: eT((n) => {
            ((t.current = n.pointerType),
              tf(n.currentTarget) ||
                "mouse" !== n.pointerType ||
                0 !== n.button ||
                (n.preventDefault(), e(n)));
          }),
          onClick: eT((n) => {
            "mouse" !== t.current && (tf(n.currentTarget) || e(n));
          }),
        };
      }
      var t5,
        t8,
        t7,
        ne = n(36439),
        nt = class extends Map {
          constructor(e) {
            (super(), (this.factory = e));
          }
          get(e) {
            let t = super.get(e);
            return (void 0 === t && ((t = this.factory(e)), this.set(e, t)), t);
          }
        },
        nn = class {
          constructor(e) {
            (m(this, t5, {}),
              m(this, t8, new nt(() => new Set())),
              m(this, t7, new Set()),
              f(this, "disposables", ey()),
              h(this, t5, e),
              ef.isServer &&
                this.disposables.microTask(() => {
                  this.dispose();
                }));
          }
          dispose() {
            this.disposables.dispose();
          }
          get state() {
            return v(this, t5);
          }
          subscribe(e, t) {
            if (ef.isServer) return () => {};
            let n = { selector: e, callback: t, current: e(v(this, t5)) };
            return (
              v(this, t7).add(n),
              this.disposables.add(() => {
                v(this, t7).delete(n);
              })
            );
          }
          on(e, t) {
            return ef.isServer
              ? () => {}
              : (v(this, t8).get(e).add(t),
                this.disposables.add(() => {
                  v(this, t8).get(e).delete(t);
                }));
          }
          send(e) {
            let t = this.reduce(v(this, t5), e);
            if (t !== v(this, t5)) {
              for (let e of (h(this, t5, t), v(this, t7))) {
                let t = e.selector(v(this, t5));
                nr(e.current, t) || ((e.current = t), e.callback(t));
              }
              for (let t of v(this, t8).get(e.type)) t(v(this, t5), e);
            }
          }
        };
      function nr(e, t) {
        return (
          !!Object.is(e, t) ||
          ("object" == typeof e &&
            null !== e &&
            "object" == typeof t &&
            null !== t &&
            (Array.isArray(e) && Array.isArray(t)
              ? e.length === t.length &&
                no(e[Symbol.iterator](), t[Symbol.iterator]())
              : (e instanceof Map && t instanceof Map) ||
                  (e instanceof Set && t instanceof Set)
                ? e.size === t.size && no(e.entries(), t.entries())
                : !!(nl(e) && nl(t)) &&
                  no(
                    Object.entries(e)[Symbol.iterator](),
                    Object.entries(t)[Symbol.iterator](),
                  )))
        );
      }
      function no(e, t) {
        for (;;) {
          let n = e.next(),
            r = t.next();
          if (n.done && r.done) return !0;
          if (n.done || r.done || !Object.is(n.value, r.value)) return !1;
        }
      }
      function nl(e) {
        if ("[object Object]" !== Object.prototype.toString.call(e)) return !1;
        let t = Object.getPrototypeOf(e);
        return null === t || null === Object.getPrototypeOf(t);
      }
      function ni(e) {
        let [t, n] = e(),
          r = ey();
        return (...e) => {
          (t(...e), r.dispose(), r.microTask(n));
        };
      }
      ((t5 = new WeakMap()), (t8 = new WeakMap()), (t7 = new WeakMap()));
      var na = {
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
        ns = class extends nn {
          constructor() {
            (super(...arguments),
              f(this, "actions", {
                push: (e) => this.send({ type: 0, id: e }),
                pop: (e) => this.send({ type: 1, id: e }),
              }),
              f(this, "selectors", {
                isTop: (e, t) => e.stack[e.stack.length - 1] === t,
                inStack: (e, t) => e.stack.includes(t),
              }));
          }
          static new() {
            return new ns({ stack: [] });
          }
          reduce(e, t) {
            return e_(t.type, na, e, t);
          }
        },
        nu = new nt(() => ns.new()),
        nc = n(28872);
      function nd(e, t, n = nr) {
        return (0, nc.useSyncExternalStoreWithSelector)(
          eT((t) => e.subscribe(nf, t)),
          eT(() => e.state),
          eT(() => e.state),
          eT(t),
          n,
        );
      }
      function nf(e) {
        return e;
      }
      function np(e, t) {
        let n = (0, ne.useId)(),
          r = nu.get(t),
          [o, l] = nd(
            r,
            (0, ne.useCallback)(
              (e) => [r.selectors.isTop(e, n), r.selectors.inStack(e, n)],
              [r, n],
            ),
          );
        return (
          eP(() => {
            if (e) return (r.actions.push(n), () => r.actions.pop(n));
          }, [r, e, n]),
          !!e && (!l || o)
        );
      }
      var nv = new Map(),
        nm = new Map();
      function nh(e) {
        var t;
        let n = null != (t = nm.get(e)) ? t : 0;
        return (
          nm.set(e, n + 1),
          0 !== n ||
            (nv.set(e, {
              "aria-hidden": e.getAttribute("aria-hidden"),
              inert: e.inert,
            }),
            e.setAttribute("aria-hidden", "true"),
            (e.inert = !0)),
          () =>
            (function (e) {
              var t;
              let n = null != (t = nm.get(e)) ? t : 1;
              if ((1 === n ? nm.delete(e) : nm.set(e, n - 1), 1 !== n)) return;
              let r = nv.get(e);
              r &&
                (null === r["aria-hidden"]
                  ? e.removeAttribute("aria-hidden")
                  : e.setAttribute("aria-hidden", r["aria-hidden"]),
                (e.inert = r.inert),
                nv.delete(e));
            })(e)
        );
      }
      function nb(e, { allowed: t, disallowed: n } = {}) {
        let r = np(e, "inert-others");
        eP(() => {
          var e, o;
          if (!r) return;
          let l = ey();
          for (let t of null != (e = null == n ? void 0 : n()) ? e : [])
            t && l.add(nh(t));
          let i = null != (o = null == t ? void 0 : t()) ? o : [];
          for (let e of i) {
            if (!e) continue;
            let t = ep(e);
            if (!t) continue;
            let n = e.parentElement;
            for (; n && n !== t.body; ) {
              for (let e of n.children)
                i.some((t) => e.contains(t)) || l.add(nh(e));
              n = n.parentElement;
            }
          }
          return l.dispose;
        }, [r, t, n]);
      }
      var ng = n(36439);
      function ny(e, t, n) {
        let r = eI((e) => {
          let t = e.getBoundingClientRect();
          0 === t.x && 0 === t.y && 0 === t.width && 0 === t.height && n();
        });
        (0, ng.useEffect)(() => {
          if (!e) return;
          let n = null === t ? null : ta(t) ? t : t.current;
          if (!n) return;
          let o = ey();
          if ("undefined" != typeof ResizeObserver) {
            let e = new ResizeObserver(() => r.current(n));
            (e.observe(n), o.add(() => e.disconnect()));
          }
          if ("undefined" != typeof IntersectionObserver) {
            let e = new IntersectionObserver(() => r.current(n));
            (e.observe(n), o.add(() => e.disconnect()));
          }
          return () => o.dispose();
        }, [t, r, e]);
      }
      var nx = n(36439),
        nE = [
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
        nw = ["[data-autofocus]"]
          .map((e) => `${e}:not([tabindex='-1'])`)
          .join(",");
      function nS(e = document.body) {
        return null == e
          ? []
          : Array.from(e.querySelectorAll(nE)).sort((e, t) =>
              Math.sign(
                (e.tabIndex || Number.MAX_SAFE_INTEGER) -
                  (t.tabIndex || Number.MAX_SAFE_INTEGER),
              ),
            );
      }
      function nP(e, t = 0) {
        var n;
        return (
          e !== (null == (n = ep(e)) ? void 0 : n.body) &&
          e_(t, {
            0: () => e.matches(nE),
            1() {
              let t = e;
              for (; null !== t; ) {
                if (t.matches(nE)) return !0;
                t = t.parentElement;
              }
              return !1;
            },
          })
        );
      }
      function nI(e) {
        ey().nextFrame(() => {
          let t = em(e);
          t && ts(t) && !nP(t, 0) && nT(e);
        });
      }
      function nT(e) {
        null == e || e.focus({ preventScroll: !0 });
      }
      function nC(e, t = (e) => e) {
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
      function nR(e, t, n = null === e ? document.body : ev(e)) {
        return nO(nS(n), t, { relativeTo: e });
      }
      function nO(
        e,
        t,
        { sorted: n = !0, relativeTo: r = null, skipElements: o = [] } = {},
      ) {
        var l, i, a;
        let s = Array.isArray(e) ? (e.length > 0 ? ev(e[0]) : document) : ev(e),
          u = Array.isArray(e)
            ? n
              ? nC(e)
              : e
            : 64 & t
              ? (function (e = document.body) {
                  return null == e
                    ? []
                    : Array.from(e.querySelectorAll(nw)).sort((e, t) =>
                        Math.sign(
                          (e.tabIndex || Number.MAX_SAFE_INTEGER) -
                            (t.tabIndex || Number.MAX_SAFE_INTEGER),
                        ),
                      );
                })(e)
              : nS(e);
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
        } while (m !== em(m));
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
      function nk() {
        return (
          /iPhone/gi.test(window.navigator.platform) ||
          (/Mac/gi.test(window.navigator.platform) &&
            window.navigator.maxTouchPoints > 0)
        );
      }
      function nF() {
        return nk() || /Android/gi.test(window.navigator.userAgent);
      }
      "undefined" != typeof window &&
        "undefined" != typeof document &&
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
      var nM = n(36439);
      function nD(e, t, n, r) {
        let o = eI(n);
        (0, nM.useEffect)(() => {
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
      var nA = n(36439);
      function nL(e, t, n, r) {
        let o = eI(n);
        (0, nA.useEffect)(() => {
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
      function n_(e, t, n) {
        let r = eI(n),
          o = (0, nx.useCallback)(
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
                  nP(o, 1) || -1 === o.tabIndex || e.preventDefault(),
                  r.current(e, o)
                );
              }
            },
            [r, t],
          ),
          l = (0, nx.useRef)(null);
        (nD(
          e,
          "pointerdown",
          (e) => {
            var t, n;
            nF() ||
              (l.current =
                (null == (n = null == (t = e.composedPath) ? void 0 : t.call(e))
                  ? void 0
                  : n[0]) || e.target);
          },
          !0,
        ),
          nD(
            e,
            "pointerup",
            (e) => {
              if (nF() || !l.current) return;
              let t = l.current;
              return ((l.current = null), o(e, () => t));
            },
            !0,
          ));
        let i = (0, nx.useRef)({ x: 0, y: 0 });
        (nD(
          e,
          "touchstart",
          (e) => {
            ((i.current.x = e.touches[0].clientX),
              (i.current.y = e.touches[0].clientY));
          },
          !0,
        ),
          nD(
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
                return o(e, () => (ts(e.target) ? e.target : null));
            },
            !0,
          ),
          nL(
            e,
            "blur",
            (e) =>
              o(e, () => {
                var e;
                return ta((e = window.document.activeElement)) &&
                  "IFRAME" === e.nodeName
                  ? window.document.activeElement
                  : null;
              }),
            !0,
          ));
      }
      var nN = n(36439);
      function nB(...e) {
        return (0, nN.useMemo)(() => ep(...e), [...e]);
      }
      var nj = n(36439),
        nH = {
          Ignore: { kind: 0 },
          Select: (e) => ({ kind: 1, target: e }),
          Close: { kind: 2 },
        };
      function n$(e, { trigger: t, action: n, close: r, select: o }) {
        let l = (0, nj.useRef)(null),
          i = (0, nj.useRef)(null),
          a = (0, nj.useRef)(null);
        (nD(e && null !== t, "pointerdown", (e) => {
          tl(null == e ? void 0 : e.target) &&
            null != t &&
            t.contains(e.target) &&
            ((i.current = e.x), (a.current = e.y), (l.current = e.timeStamp));
        }),
          nD(
            e && null !== t,
            "pointerup",
            (e) => {
              var t, s;
              let u = l.current;
              if (
                null === u ||
                ((l.current = null), !ts(e.target)) ||
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
      var nV = n(36439),
        nz = n(36439);
      function nW(e, t, n, r) {
        let o = eI(n);
        (0, nz.useEffect)(() => {
          function n(e) {
            o.current(e);
          }
          return (
            (e = null != e ? e : window).addEventListener(t, n, r),
            () => e.removeEventListener(t, n, r)
          );
        }, [e, t, r]);
      }
      function nG(e) {
        let t = (0, nV.useRef)({
          value: "",
          selectionStart: null,
          selectionEnd: null,
        });
        return (
          nW(e, "blur", (e) => {
            let n = e.target;
            tu(n) &&
              (t.current = {
                value: n.value,
                selectionStart: n.selectionStart,
                selectionEnd: n.selectionEnd,
              });
          }),
          eT(() => {
            if (!eh(e) && tu(e) && e.isConnected) {
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
      var nK = n(36439);
      function nU(e, t) {
        return (0, nK.useMemo)(() => {
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
      var nq = n(36439);
      function nY(e) {
        let t = {};
        for (let n of e) Object.assign(t, n(t));
        return t;
      }
      var nQ = (function (e, t) {
        let n = e(),
          r = new Set();
        return {
          getSnapshot: () => n,
          subscribe: (e) => (r.add(e), () => r.delete(e)),
          dispatch(e, ...o) {
            let l = t[e].call(n, ...o);
            l && ((n = l), r.forEach((e) => e()));
          },
        };
      })(() => new Map(), {
        PUSH(e, t) {
          var n;
          let r =
            null != (n = this.get(e))
              ? n
              : {
                  doc: e,
                  count: 0,
                  d: ey(),
                  meta: new Set(),
                  computedMeta: {},
                };
          return (
            r.count++,
            r.meta.add(t),
            (r.computedMeta = nY(r.meta)),
            this.set(e, r),
            this
          );
        },
        POP(e, t) {
          let n = this.get(e);
          return (
            n && (n.count--, n.meta.delete(t), (n.computedMeta = nY(n.meta))),
            this
          );
        },
        SCROLL_PREVENT(e) {
          let t,
            n = { doc: e.doc, d: e.d, meta: () => e.computedMeta },
            r = [
              nk()
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
                          let n = ey();
                          (n.style(e.documentElement, "scrollBehavior", "auto"),
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
                            if (ts(t.target))
                              try {
                                let n = t.target.closest("a");
                                if (!n) return;
                                let { hash: o } = new URL(n.href),
                                  i = e.querySelector(o);
                                ts(i) && !r(i) && (l = i);
                              } catch {}
                          },
                          !0,
                        ),
                          t.group((n) => {
                            t.addEventListener(e, "touchstart", (e) => {
                              var t;
                              if (
                                (n.dispose(),
                                ts(e.target) &&
                                  ti((t = e.target)) &&
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
                                } else n.style(e.target, "touchAction", "none");
                            });
                          }),
                          t.addEventListener(
                            e,
                            "touchmove",
                            (e) => {
                              if (ts(e.target) && !tu(e.target))
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
                                : window.pageYOffset) && window.scrollTo(0, o),
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
      });
      function nX(e, t, n = () => [document.body]) {
        !(function (e, t, n = () => ({ containers: [] })) {
          let r = (0, nq.useSyncExternalStore)(
              nQ.subscribe,
              nQ.getSnapshot,
              nQ.getSnapshot,
            ),
            o = t ? r.get(t) : void 0;
          (o && o.count,
            eP(() => {
              if (!(!t || !e))
                return (
                  nQ.dispatch("PUSH", t, n),
                  () => nQ.dispatch("POP", t, n)
                );
            }, [e, t]));
        })(np(e, "scroll-lock"), t, (e) => {
          var t;
          return { containers: [...(null != (t = e.containers) ? t : []), n] };
        });
      }
      nQ.subscribe(() => {
        let e = nQ.getSnapshot(),
          t = new Map();
        for (let [n] of e) t.set(n, n.documentElement.style.overflow);
        for (let n of e.values()) {
          let e = "hidden" === t.get(n.doc),
            r = 0 !== n.count;
          (((r && !e) || (!r && e)) &&
            nQ.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n),
            0 === n.count && nQ.dispatch("TEARDOWN", n));
        }
      });
      var nJ = n(36439);
      function nZ(e) {
        return [e.screenX, e.screenY];
      }
      function n0() {
        let e = (0, nJ.useRef)([-1, -1]);
        return {
          wasMoved(t) {
            let n = nZ(t);
            return (
              (e.current[0] !== n[0] || e.current[1] !== n[1]) &&
              ((e.current = n), !0)
            );
          },
          update(t) {
            e.current = nZ(t);
          },
        };
      }
      var n1 = n(36439),
        n3 = n(36439);
      function n4(e) {
        let t = {};
        for (let n in e) !0 === e[n] && (t[`data-${n}`] = "");
        return t;
      }
      function n2(e, t, n, r) {
        let [o, l] = (0, n1.useState)(n),
          {
            hasFlag: i,
            addFlag: a,
            removeFlag: s,
          } = (function (e = 0) {
            let [t, n] = (0, n3.useState)(e),
              r = (0, n3.useCallback)((e) => n(e), []),
              o = (0, n3.useCallback)((e) => n((t) => t | e), []),
              l = (0, n3.useCallback)((e) => (t & e) === e, [t]);
            return {
              flags: t,
              setFlag: r,
              addFlag: o,
              hasFlag: l,
              removeFlag: (0, n3.useCallback)((e) => n((t) => t & ~e), []),
              toggleFlag: (0, n3.useCallback)((e) => n((t) => t ^ e), []),
            };
          })(e && o ? 3 : 0),
          u = (0, n1.useRef)(!1),
          c = (0, n1.useRef)(!1);
        return (
          eP(() => {
            var o;
            if (e) {
              if ((n && l(!0), !t)) {
                n && a(3);
                return;
              }
              return (
                null == (o = null == r ? void 0 : r.start) || o.call(r, n),
                (function (e, { prepare: t, run: n, done: r, inFlight: o }) {
                  let l = ey();
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
                              let o = ey();
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
          }, [e, n, t, ex()]),
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
      void 0 !== r &&
        "undefined" != typeof globalThis &&
        "undefined" != typeof Element &&
        (null == (l$ = null == r ? void 0 : r.env) ? void 0 : l$.NODE_ENV) ===
          "test" &&
        void 0 ===
          (null == (lV = null == Element ? void 0 : Element.prototype)
            ? void 0
            : lV.getAnimations) &&
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
      var n6 = n(36439);
      function n9(e, { container: t, accept: n, walk: r }) {
        let o = (0, n6.useRef)(n),
          l = (0, n6.useRef)(r);
        ((0, n6.useEffect)(() => {
          ((o.current = n), (l.current = r));
        }, [n, r]),
          eP(() => {
            if (!t || !e) return;
            let n = ep(t);
            if (!n) return;
            let r = o.current,
              i = l.current,
              a = Object.assign((e) => r(e), { acceptNode: r }),
              s = n.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, a, !1);
            for (; s.nextNode(); ) i(s.currentNode);
          }, [t, e, o, l]));
      }
      var n5 = n(36439);
      function n8(e, t) {
        let n = (0, n5.useRef)([]),
          r = eT(e);
        (0, n5.useEffect)(() => {
          let e = [...n.current];
          for (let [o, l] of t.entries())
            if (n.current[o] !== l) {
              let o = r(t, e);
              return ((n.current = t), o);
            }
        }, [r, ...t]);
      }
      var n7 = d(n(36439), 1),
        re = n(36439);
      function rt(e) {
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
      var rn = Math.min,
        rr = Math.max,
        ro = Math.round,
        rl = Math.floor,
        ri = (e) => ({ x: e, y: e }),
        ra = { left: "right", right: "left", bottom: "top", top: "bottom" },
        rs = { start: "end", end: "start" };
      function ru(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function rc(e) {
        return e.split("-")[0];
      }
      function rd(e) {
        return e.split("-")[1];
      }
      function rf(e) {
        return "x" === e ? "y" : "x";
      }
      function rp(e) {
        return "y" === e ? "height" : "width";
      }
      function rv(e) {
        return ["top", "bottom"].includes(rc(e)) ? "y" : "x";
      }
      function rm(e) {
        return e.replace(/start|end/g, (e) => rs[e]);
      }
      function rh(e) {
        return e.replace(/left|right|bottom|top/g, (e) => ra[e]);
      }
      function rb(e) {
        return {
          ...e,
          top: e.y,
          left: e.x,
          right: e.x + e.width,
          bottom: e.y + e.height,
        };
      }
      function rg(e, t, n) {
        let { reference: r, floating: o } = e,
          l = rv(t),
          i = rf(rv(t)),
          a = rp(i),
          s = rc(t),
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
        switch (rd(t)) {
          case "start":
            p[i] -= f * (n && u ? -1 : 1);
            break;
          case "end":
            p[i] += f * (n && u ? -1 : 1);
        }
        return p;
      }
      var ry = async (e, t, n) => {
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
          { x: c, y: d } = rg(u, r, s),
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
                ({ x: c, y: d } = rg(u, f, s))),
              (n = -1));
            continue;
          }
        }
        return { x: c, y: d, placement: f, strategy: o, middlewareData: p };
      };
      async function rx(e, t) {
        var n, r;
        void 0 === t && (t = {});
        let { x: o, y: l, platform: i, rects: a, elements: s, strategy: u } = e,
          {
            boundary: c = "clippingAncestors",
            rootBoundary: d = "viewport",
            elementContext: f = "floating",
            altBoundary: p = !1,
            padding: v = 0,
          } = ru(t, e),
          m =
            "number" != typeof (r = v)
              ? { top: 0, right: 0, bottom: 0, left: 0, ...r }
              : { top: r, right: r, bottom: r, left: r },
          h = s[p ? ("floating" === f ? "reference" : "floating") : f],
          b = rb(
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
          E = rb(
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
      async function rE(e, t) {
        let { placement: n, platform: r, elements: o } = e,
          l = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)),
          i = rc(n),
          a = rd(n),
          s = "y" === rv(n),
          u = ["left", "top"].includes(i) ? -1 : 1,
          c = l && s ? -1 : 1,
          d = ru(t, e),
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
      function rw(e) {
        return rI(e) ? (e.nodeName || "").toLowerCase() : "#document";
      }
      function rS(e) {
        var t;
        return (
          (null == e || null == (t = e.ownerDocument)
            ? void 0
            : t.defaultView) || window
        );
      }
      function rP(e) {
        var t;
        return null ==
          (t = (rI(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function rI(e) {
        return e instanceof Node || e instanceof rS(e).Node;
      }
      function rT(e) {
        return e instanceof Element || e instanceof rS(e).Element;
      }
      function rC(e) {
        return e instanceof HTMLElement || e instanceof rS(e).HTMLElement;
      }
      function rR(e) {
        return (
          "undefined" != typeof ShadowRoot &&
          (e instanceof ShadowRoot || e instanceof rS(e).ShadowRoot)
        );
      }
      function rO(e) {
        let { overflow: t, overflowX: n, overflowY: r, display: o } = rD(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
          !["inline", "contents"].includes(o)
        );
      }
      function rk(e) {
        let t = rF(),
          n = rD(e);
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
      function rF() {
        return (
          "undefined" != typeof CSS &&
          !!CSS.supports &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function rM(e) {
        return ["html", "body", "#document"].includes(rw(e));
      }
      function rD(e) {
        return rS(e).getComputedStyle(e);
      }
      function rA(e) {
        return rT(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
      }
      function rL(e) {
        if ("html" === rw(e)) return e;
        let t = e.assignedSlot || e.parentNode || (rR(e) && e.host) || rP(e);
        return rR(t) ? t.host : t;
      }
      function r_(e, t, n) {
        var r;
        (void 0 === t && (t = []), void 0 === n && (n = !0));
        let o = (function e(t) {
            let n = rL(t);
            return rM(n)
              ? t.ownerDocument
                ? t.ownerDocument.body
                : t.body
              : rC(n) && rO(n)
                ? n
                : e(n);
          })(e),
          l = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          i = rS(o);
        return l
          ? t.concat(
              i,
              i.visualViewport || [],
              rO(o) ? o : [],
              i.frameElement && n ? r_(i.frameElement) : [],
            )
          : t.concat(o, r_(o, [], n));
      }
      function rN(e) {
        let t = rD(e),
          n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0,
          o = rC(e),
          l = o ? e.offsetWidth : n,
          i = o ? e.offsetHeight : r,
          a = ro(n) !== l || ro(r) !== i;
        return (a && ((n = l), (r = i)), { width: n, height: r, $: a });
      }
      function rB(e) {
        return rT(e) ? e : e.contextElement;
      }
      function rj(e) {
        let t = rB(e);
        if (!rC(t)) return ri(1);
        let n = t.getBoundingClientRect(),
          { width: r, height: o, $: l } = rN(t),
          i = (l ? ro(n.width) : n.width) / r,
          a = (l ? ro(n.height) : n.height) / o;
        return (
          (i && Number.isFinite(i)) || (i = 1),
          (a && Number.isFinite(a)) || (a = 1),
          { x: i, y: a }
        );
      }
      var rH = ri(0);
      function r$(e) {
        let t = rS(e);
        return rF() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : rH;
      }
      function rV(e, t, n, r) {
        var o;
        (void 0 === t && (t = !1), void 0 === n && (n = !1));
        let l = e.getBoundingClientRect(),
          i = rB(e),
          a = ri(1);
        t && (r ? rT(r) && (a = rj(r)) : (a = rj(e)));
        let s = (void 0 === (o = n) && (o = !1), r && (!o || r === rS(i)) && o)
            ? r$(i)
            : ri(0),
          u = (l.left + s.x) / a.x,
          c = (l.top + s.y) / a.y,
          d = l.width / a.x,
          f = l.height / a.y;
        if (i) {
          let e = rS(i),
            t = r && rT(r) ? rS(r) : r,
            n = e.frameElement;
          for (; n && r && t !== e; ) {
            let e = rj(n),
              t = n.getBoundingClientRect(),
              r = rD(n),
              o = t.left + (n.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              l = t.top + (n.clientTop + parseFloat(r.paddingTop)) * e.y;
            ((u *= e.x),
              (c *= e.y),
              (d *= e.x),
              (f *= e.y),
              (u += o),
              (c += l),
              (n = rS(n).frameElement));
          }
        }
        return rb({ width: d, height: f, x: u, y: c });
      }
      function rz(e) {
        return rV(rP(e)).left + rA(e).scrollLeft;
      }
      function rW(e, t, n) {
        var r;
        let o;
        if ("viewport" === t)
          o = (function (e, t) {
            let n = rS(e),
              r = rP(e),
              o = n.visualViewport,
              l = r.clientWidth,
              i = r.clientHeight,
              a = 0,
              s = 0;
            if (o) {
              ((l = o.width), (i = o.height));
              let e = rF();
              (!e || (e && "fixed" === t)) &&
                ((a = o.offsetLeft), (s = o.offsetTop));
            }
            return { width: l, height: i, x: a, y: s };
          })(e, n);
        else if ("document" === t) {
          let t, n, l, i, a, s, u;
          ((r = rP(e)),
            (t = rP(r)),
            (n = rA(r)),
            (l = r.ownerDocument.body),
            (i = rr(
              t.scrollWidth,
              t.clientWidth,
              l.scrollWidth,
              l.clientWidth,
            )),
            (a = rr(
              t.scrollHeight,
              t.clientHeight,
              l.scrollHeight,
              l.clientHeight,
            )),
            (s = -n.scrollLeft + rz(r)),
            (u = -n.scrollTop),
            "rtl" === rD(l).direction &&
              (s += rr(t.clientWidth, l.clientWidth) - i),
            (o = { width: i, height: a, x: s, y: u }));
        } else if (rT(t)) {
          let e, r, l, i;
          ((r = (e = rV(t, !0, "fixed" === n)).top + t.clientTop),
            (l = e.left + t.clientLeft),
            (i = rC(t) ? rj(t) : ri(1)),
            (o = {
              width: t.clientWidth * i.x,
              height: t.clientHeight * i.y,
              x: l * i.x,
              y: r * i.y,
            }));
        } else {
          let n = r$(e);
          o = { ...t, x: t.x - n.x, y: t.y - n.y };
        }
        return rb(o);
      }
      function rG(e, t) {
        return rC(e) && "fixed" !== rD(e).position
          ? t
            ? t(e)
            : e.offsetParent
          : null;
      }
      function rK(e, t) {
        let n = rS(e);
        if (!rC(e)) return n;
        let r = rG(e, t);
        for (
          ;
          r &&
          ["table", "td", "th"].includes(rw(r)) &&
          "static" === rD(r).position;
        )
          r = rG(r, t);
        return r &&
          ("html" === rw(r) ||
            ("body" === rw(r) && "static" === rD(r).position && !rk(r)))
          ? n
          : r ||
              (function (e) {
                let t = rL(e);
                for (; rC(t) && !rM(t); ) {
                  if (rk(t)) return t;
                  t = rL(t);
                }
                return null;
              })(e) ||
              n;
      }
      var rU = async function (e) {
          let { reference: t, floating: n, strategy: r } = e,
            o = this.getOffsetParent || rK,
            l = this.getDimensions;
          return {
            reference: (function (e, t, n) {
              let r = rC(t),
                o = rP(t),
                l = "fixed" === n,
                i = rV(e, !0, l, t),
                a = { scrollLeft: 0, scrollTop: 0 },
                s = ri(0);
              if (r || (!r && !l))
                if ((("body" !== rw(t) || rO(o)) && (a = rA(t)), r)) {
                  let e = rV(t, !0, l, t);
                  ((s.x = e.x + t.clientLeft), (s.y = e.y + t.clientTop));
                } else o && (s.x = rz(o));
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
        rq = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { rect: t, offsetParent: n, strategy: r } = e,
              o = rC(n),
              l = rP(n);
            if (n === l) return t;
            let i = { scrollLeft: 0, scrollTop: 0 },
              a = ri(1),
              s = ri(0);
            if (
              (o || (!o && "fixed" !== r)) &&
              (("body" !== rw(n) || rO(l)) && (i = rA(n)), rC(n))
            ) {
              let e = rV(n);
              ((a = rj(n)),
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
          getDocumentElement: rP,
          getClippingRect: function (e) {
            let { element: t, boundary: n, rootBoundary: r, strategy: o } = e,
              l = [
                ...("clippingAncestors" === n
                  ? (function (e, t) {
                      let n = t.get(e);
                      if (n) return n;
                      let r = r_(e, [], !1).filter(
                          (e) => rT(e) && "body" !== rw(e),
                        ),
                        o = null,
                        l = "fixed" === rD(e).position,
                        i = l ? rL(e) : e;
                      for (; rT(i) && !rM(i); ) {
                        let t = rD(i),
                          n = rk(i);
                        (n || "fixed" !== t.position || (o = null),
                          (
                            l
                              ? !n && !o
                              : (!n &&
                                  "static" === t.position &&
                                  !!o &&
                                  ["absolute", "fixed"].includes(o.position)) ||
                                (rO(i) &&
                                  !n &&
                                  (function e(t, n) {
                                    let r = rL(t);
                                    return (
                                      !(r === n || !rT(r) || rM(r)) &&
                                      ("fixed" === rD(r).position || e(r, n))
                                    );
                                  })(e, i))
                          )
                            ? (r = r.filter((e) => e !== i))
                            : (o = t),
                          (i = rL(i)));
                      }
                      return (t.set(e, r), r);
                    })(t, this._c)
                  : [].concat(n)),
                r,
              ],
              i = l[0],
              a = l.reduce(
                (e, n) => {
                  let r = rW(t, n, o);
                  return (
                    (e.top = rr(r.top, e.top)),
                    (e.right = rn(r.right, e.right)),
                    (e.bottom = rn(r.bottom, e.bottom)),
                    (e.left = rr(r.left, e.left)),
                    e
                  );
                },
                rW(t, i, o),
              );
            return {
              width: a.right - a.left,
              height: a.bottom - a.top,
              x: a.left,
              y: a.top,
            };
          },
          getOffsetParent: rK,
          getElementRects: rU,
          getClientRects: function (e) {
            return Array.from(e.getClientRects());
          },
          getDimensions: function (e) {
            return rN(e);
          },
          getScale: rj,
          isElement: rT,
          isRTL: function (e) {
            return "rtl" === rD(e).direction;
          },
        };
      function rY(e, t, n, r) {
        void 0 === r && (r = {});
        let {
            ancestorScroll: o = !0,
            ancestorResize: l = !0,
            elementResize: i = "function" == typeof ResizeObserver,
            layoutShift: a = "function" == typeof IntersectionObserver,
            animationFrame: s = !1,
          } = r,
          u = rB(e),
          c = o || l ? [...(u ? r_(u) : []), ...r_(t)] : [];
        c.forEach((e) => {
          (o && e.addEventListener("scroll", n, { passive: !0 }),
            l && e.addEventListener("resize", n));
        });
        let d =
            u && a
              ? (function (e, t) {
                  let n = null,
                    r,
                    o = rP(e);
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
                            -rl(c) +
                            "px " +
                            -rl(o.clientWidth - (u + d)) +
                            "px " +
                            -rl(o.clientHeight - (c + f)) +
                            "px " +
                            -rl(u) +
                            "px",
                          threshold: rr(0, rn(1, s)) || 1,
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
          m = s ? rV(e) : null;
        return (
          s &&
            (function t() {
              let r = rV(e);
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
      var rQ = d(n(36439), 1),
        rX = n(36439),
        rJ = d(n(72354), 1),
        rZ = "undefined" != typeof document ? rX.useLayoutEffect : rX.useEffect;
      function r0(e, t) {
        let n, r, o;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if ((n = e.length) !== t.length) return !1;
            for (r = n; 0 != r--; ) if (!r0(e[r], t[r])) return !1;
            return !0;
          }
          if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (r = n; 0 != r--; )
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--; ) {
            let n = o[r];
            if (!("_owner" === n && e.$$typeof) && !r0(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function r1(e) {
        return "undefined" == typeof window
          ? 1
          : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function r3(e, t) {
        let n = r1(e);
        return Math.round(t * n) / n;
      }
      function r4(e) {
        let t = rQ.useRef(e);
        return (
          rZ(() => {
            t.current = e;
          }),
          t
        );
      }
      var r2 = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = 0),
              {
                name: "offset",
                options: e,
                async fn(t) {
                  var n, r;
                  let { x: o, y: l, placement: i, middlewareData: a } = t,
                    s = await rE(t, e);
                  return i ===
                    (null == (n = a.offset) ? void 0 : n.placement) &&
                    null != (r = a.arrow) &&
                    r.alignmentOffset
                    ? {}
                    : { x: o + s.x, y: l + s.y, data: { ...s, placement: i } };
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        r6 = n(72354),
        r9 = { ...n7 },
        r5 = r9.useInsertionEffect || ((e) => e());
      function r8(e) {
        let t = n7.useRef(() => {});
        return (
          r5(() => {
            t.current = e;
          }),
          n7.useCallback(function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            return null == t.current ? void 0 : t.current(...n);
          }, [])
        );
      }
      var r7 =
          "undefined" != typeof document ? re.useLayoutEffect : re.useEffect,
        oe = !1,
        ot = 0,
        on = () =>
          "floating-ui-" + Math.random().toString(36).slice(2, 6) + ot++,
        or =
          r9.useId ||
          function () {
            let [e, t] = n7.useState(() => (oe ? on() : void 0));
            return (
              r7(() => {
                null == e && t(on());
              }, []),
              n7.useEffect(() => {
                oe = !0;
              }, []),
              e
            );
          },
        oo = n7.createContext(null),
        ol = n7.createContext(null),
        oi = "active",
        oa = "selected";
      function os(e, t, n) {
        let r = new Map(),
          o = "item" === n,
          l = e;
        if (o && e) {
          let { [oi]: t, [oa]: n, ...r } = e;
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
                    if (!(o && [oi, oa].includes(n)))
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
      function ou(e, t) {
        return {
          ...e,
          rects: { ...e.rects, floating: { ...e.rects.floating, height: t } },
        };
      }
      var oc = d(n(36439), 1),
        od = n(36439),
        of = (0, od.createContext)({
          styles: void 0,
          setReference: () => {},
          setFloating: () => {},
          getReferenceProps: () => ({}),
          getFloatingProps: () => ({}),
          slot: {},
        });
      of.displayName = "FloatingContext";
      var op = (0, od.createContext)(null);
      function ov(e) {
        return (0, od.useMemo)(
          () => (e ? ("string" == typeof e ? { to: e } : e) : null),
          [e],
        );
      }
      function om() {
        return (0, od.useContext)(of).setReference;
      }
      function oh() {
        return (0, od.useContext)(of).getReferenceProps;
      }
      function ob() {
        let { getFloatingProps: e, slot: t } = (0, od.useContext)(of);
        return (0, od.useCallback)(
          (...n) => Object.assign({}, e(...n), { "data-anchor": t.anchor }),
          [e, t],
        );
      }
      function og(e = null) {
        (!1 === e && (e = null), "string" == typeof e && (e = { to: e }));
        let t = (0, od.useContext)(op),
          n = (0, od.useMemo)(
            () => e,
            [
              JSON.stringify(e, (e, t) => {
                var n;
                return null != (n = null == t ? void 0 : t.outerHTML) ? n : t;
              }),
            ],
          );
        eP(() => {
          null == t || t(null != n ? n : null);
        }, [t, n]);
        let r = (0, od.useContext)(of);
        return (0, od.useMemo)(
          () => [r.setFloating, e ? r.styles : {}],
          [r.setFloating, e, r.styles],
        );
      }
      function oy({ children: e, enabled: t = !0 }) {
        var n, r, o, l, i, a, s, u, c, d;
        let f,
          p,
          v,
          m,
          h,
          b,
          g,
          y,
          x,
          E,
          w,
          S,
          P,
          [I, T] = (0, od.useState)(null),
          [C, R] = (0, od.useState)(0),
          O = (0, od.useRef)(null),
          [k, F] = (0, od.useState)(null);
        eP(() => {
          if (!i) return;
          let e = new MutationObserver(() => {
            let e = window.getComputedStyle(i).maxHeight,
              t = parseFloat(e);
            if (isNaN(t)) return;
            let n = parseInt(e);
            isNaN(n) || (t !== n && (i.style.maxHeight = `${Math.ceil(t)}px`));
          });
          return (
            e.observe(i, { attributes: !0, attributeFilter: ["style"] }),
            () => {
              e.disconnect();
            }
          );
        }, [(i = k)]);
        let M = t && null !== I && null !== k,
          {
            to: D = "bottom",
            gap: A = 0,
            offset: L = 0,
            padding: _ = 0,
            inner: N,
          } = ((a = I),
          (s = k),
          (f = ox(
            null != (u = null == a ? void 0 : a.gap)
              ? u
              : "var(--anchor-gap, 0)",
            s,
          )),
          (p = ox(
            null != (c = null == a ? void 0 : a.offset)
              ? c
              : "var(--anchor-offset, 0)",
            s,
          )),
          (v = ox(
            null != (d = null == a ? void 0 : a.padding)
              ? d
              : "var(--anchor-padding, 0)",
            s,
          )),
          { ...a, gap: f, offset: p, padding: v }),
          [B, j = "center"] = D.split(" ");
        eP(() => {
          M && R(0);
        }, [M]);
        let {
            refs: H,
            floatingStyles: $,
            context: V,
          } = (function (e) {
            void 0 === e && (e = {});
            let { nodeId: t } = e,
              n = (function (e) {
                var t;
                let { open: n = !1, onOpenChange: r, elements: o } = e,
                  l = or(),
                  i = n7.useRef({}),
                  [a] = n7.useState(() => {
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
                    ((null == (t = n7.useContext(oo)) ? void 0 : t.id) || null),
                  [u, c] = n7.useState(o.reference),
                  d = r8((e, t, n) => {
                    ((i.current.openEvent = e ? t : void 0),
                      a.emit("openchange", {
                        open: e,
                        event: t,
                        reason: n,
                        nested: s,
                      }),
                      null == r || r(e, t, n));
                  }),
                  f = n7.useMemo(() => ({ setPositionReference: c }), []),
                  p = n7.useMemo(
                    () => ({
                      reference: u || o.reference || null,
                      floating: o.floating || null,
                      domReference: o.reference,
                    }),
                    [u, o.reference, o.floating],
                  );
                return n7.useMemo(
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
              [l, i] = n7.useState(null),
              [a, s] = n7.useState(null),
              u = (null == o ? void 0 : o.reference) || l,
              c = n7.useRef(null),
              d = n7.useContext(ol);
            r7(() => {
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
                  [c, d] = rQ.useState({
                    x: 0,
                    y: 0,
                    strategy: n,
                    placement: t,
                    middlewareData: {},
                    isPositioned: !1,
                  }),
                  [f, p] = rQ.useState(r);
                r0(f, r) || p(r);
                let [v, m] = rQ.useState(null),
                  [h, b] = rQ.useState(null),
                  g = rQ.useCallback((e) => {
                    e !== w.current && ((w.current = e), m(e));
                  }, []),
                  y = rQ.useCallback((e) => {
                    e !== S.current && ((S.current = e), b(e));
                  }, []),
                  x = l || v,
                  E = i || h,
                  w = rQ.useRef(null),
                  S = rQ.useRef(null),
                  P = rQ.useRef(c),
                  I = null != s,
                  T = r4(s),
                  C = r4(o),
                  R = rQ.useCallback(() => {
                    var e, r;
                    let o, l, i;
                    if (!w.current || !S.current) return;
                    let a = { placement: t, strategy: n, middleware: f };
                    (C.current && (a.platform = C.current),
                      ((e = w.current),
                      (r = S.current),
                      (o = new Map()),
                      (i = { ...(l = { platform: rq, ...a }).platform, _c: o }),
                      ry(e, r, { ...l, platform: i })).then((e) => {
                        let t = { ...e, isPositioned: !0 };
                        O.current &&
                          !r0(P.current, t) &&
                          ((P.current = t),
                          rJ.flushSync(() => {
                            d(t);
                          }));
                      }));
                  }, [f, t, n, C]);
                rZ(() => {
                  !1 === u &&
                    P.current.isPositioned &&
                    ((P.current.isPositioned = !1),
                    d((e) => ({ ...e, isPositioned: !1 })));
                }, [u]);
                let O = rQ.useRef(!1);
                (rZ(
                  () => (
                    (O.current = !0),
                    () => {
                      O.current = !1;
                    }
                  ),
                  [],
                ),
                  rZ(() => {
                    if ((x && (w.current = x), E && (S.current = E), x && E)) {
                      if (T.current) return T.current(x, E, R);
                      R();
                    }
                  }, [x, E, R, T, I]));
                let k = rQ.useMemo(
                    () => ({
                      reference: w,
                      floating: S,
                      setReference: g,
                      setFloating: y,
                    }),
                    [g, y],
                  ),
                  F = rQ.useMemo(() => ({ reference: x, floating: E }), [x, E]),
                  M = rQ.useMemo(() => {
                    let e = { position: n, left: 0, top: 0 };
                    if (!F.floating) return e;
                    let t = r3(F.floating, c.x),
                      r = r3(F.floating, c.y);
                    return a
                      ? {
                          ...e,
                          transform: "translate(" + t + "px, " + r + "px)",
                          ...(r1(F.floating) >= 1.5 && {
                            willChange: "transform",
                          }),
                        }
                      : { position: n, left: t, top: r };
                  }, [n, a, F.floating, c.x, c.y]);
                return rQ.useMemo(
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
              p = n7.useCallback(
                (e) => {
                  let t = rt(e)
                    ? {
                        getBoundingClientRect: () => e.getBoundingClientRect(),
                        contextElement: e,
                      }
                    : e;
                  (s(t), f.refs.setReference(t));
                },
                [f.refs],
              ),
              v = n7.useCallback(
                (e) => {
                  ((rt(e) || null === e) && ((c.current = e), i(e)),
                    (rt(f.refs.reference.current) ||
                      null === f.refs.reference.current ||
                      (null !== e && !rt(e))) &&
                      f.refs.setReference(e));
                },
                [f.refs],
              ),
              m = n7.useMemo(
                () => ({
                  ...f.refs,
                  setReference: v,
                  setPositionReference: p,
                  domReference: c,
                }),
                [f.refs, v, p],
              ),
              h = n7.useMemo(
                () => ({ ...f.elements, domReference: u }),
                [f.elements, u],
              ),
              b = n7.useMemo(
                () => ({ ...f, ...r, refs: m, elements: h, nodeId: t }),
                [f, m, h, t, r],
              );
            return (
              r7(() => {
                r.dataRef.current.floatingContext = b;
                let e =
                  null == d
                    ? void 0
                    : d.nodesRef.current.find((e) => e.id === t);
                e && (e.context = b);
              }),
              n7.useMemo(
                () => ({ ...f, context: b, refs: m, elements: h }),
                [f, m, h, b],
              )
            );
          })({
            open: M,
            placement:
              "selection" === B
                ? "center" === j
                  ? "bottom"
                  : `bottom-${j}`
                : "center" === j
                  ? `${B}`
                  : `${B}-${j}`,
            strategy: "absolute",
            transform: !1,
            middleware: [
              r2({ mainAxis: "selection" === B ? 0 : A, crossAxis: L }),
              {
                ...{
                  name: "shift",
                  options: (n = m = { padding: _ }),
                  async fn(e) {
                    let { x: t, y: r, placement: o } = e,
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
                      } = ru(n, e),
                      u = { x: t, y: r },
                      c = await rx(e, s),
                      d = rv(rc(o)),
                      f = rf(d),
                      p = u[f],
                      v = u[d];
                    if (l) {
                      let e = "y" === f ? "top" : "left",
                        t = "y" === f ? "bottom" : "right",
                        n = p + c[e],
                        r = p - c[t];
                      p = rr(n, rn(p, r));
                    }
                    if (i) {
                      let e = "y" === d ? "top" : "left",
                        t = "y" === d ? "bottom" : "right",
                        n = v + c[e],
                        r = v - c[t];
                      v = rr(n, rn(v, r));
                    }
                    let m = a.fn({ ...e, [f]: p, [d]: v });
                    return { ...m, data: { x: m.x - t, y: m.y - r } };
                  },
                },
                options: [m, h],
              },
              "selection" !== B && {
                ...{
                  name: "flip",
                  options: (r = b = { padding: _ }),
                  async fn(e) {
                    var t, n, o, l, i, a;
                    let s,
                      u,
                      c,
                      {
                        placement: d,
                        middlewareData: f,
                        rects: p,
                        initialPlacement: v,
                        platform: m,
                        elements: h,
                      } = e,
                      {
                        mainAxis: b = !0,
                        crossAxis: g = !0,
                        fallbackPlacements: y,
                        fallbackStrategy: x = "bestFit",
                        fallbackAxisSideDirection: E = "none",
                        flipAlignment: w = !0,
                        ...S
                      } = ru(r, e);
                    if (null != (t = f.arrow) && t.alignmentOffset) return {};
                    let P = rc(d),
                      I = rc(v) === v,
                      T = await (null == m.isRTL
                        ? void 0
                        : m.isRTL(h.floating)),
                      C =
                        y ||
                        (I || !w ? [rh(v)] : ((s = rh(v)), [rm(v), s, rm(s)]));
                    y ||
                      "none" === E ||
                      C.push(
                        ...((u = rd(v)),
                        (c = (function (e, t, n) {
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
                        })(rc(v), "start" === E, T)),
                        u &&
                          ((c = c.map((e) => e + "-" + u)),
                          w && (c = c.concat(c.map(rm)))),
                        c),
                      );
                    let R = [v, ...C],
                      O = await rx(e, S),
                      k = [],
                      F = (null == (n = f.flip) ? void 0 : n.overflows) || [];
                    if ((b && k.push(O[P]), g)) {
                      let e,
                        t,
                        n,
                        r,
                        o =
                          (void 0 === (a = T) && (a = !1),
                          (e = rd(d)),
                          (n = rp((t = rf(rv(d))))),
                          (r =
                            "x" === t
                              ? e === (a ? "end" : "start")
                                ? "right"
                                : "left"
                              : "start" === e
                                ? "bottom"
                                : "top"),
                          p.reference[n] > p.floating[n] && (r = rh(r)),
                          [r, rh(r)]);
                      k.push(O[o[0]], O[o[1]]);
                    }
                    if (
                      ((F = [...F, { placement: d, overflows: k }]),
                      !k.every((e) => e <= 0))
                    ) {
                      let e =
                          ((null == (o = f.flip) ? void 0 : o.index) || 0) + 1,
                        t = R[e];
                      if (t)
                        return {
                          data: { index: e, overflows: F },
                          reset: { placement: t },
                        };
                      let n =
                        null ==
                        (l = F.filter((e) => e.overflows[0] <= 0).sort(
                          (e, t) => e.overflows[1] - t.overflows[1],
                        )[0])
                          ? void 0
                          : l.placement;
                      if (!n)
                        switch (x) {
                          case "bestFit": {
                            let e =
                              null ==
                              (i = F.map((e) => [
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
                            n = v;
                        }
                      if (d !== n) return { reset: { placement: n } };
                    }
                    return {};
                  },
                },
                options: [b, g],
              },
              "selection" === B && N
                ? {
                    name: "inner",
                    options: (y = {
                      ...N,
                      padding: _,
                      overflowRef: O,
                      offset: C,
                      minItemsVisible: 4,
                      referenceOverflowThreshold: _,
                      onFallbackChange(e) {
                        var t, n;
                        if (!e) return;
                        let r = V.elements.floating;
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
                          null == (t = V.elements.floating)
                            ? void 0
                            : t.childNodes)
                          ? n
                          : [])
                          if (ta(e)) {
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
                          R((e) => {
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
                        } = y,
                        {
                          rects: c,
                          elements: { floating: d },
                        } = e,
                        f = t.current[l];
                      if (!f) return {};
                      let p = {
                          ...e,
                          ...(await r2(
                            -f.offsetTop -
                              d.clientTop -
                              c.reference.height / 2 -
                              f.offsetHeight / 2 -
                              o,
                          ).fn(e)),
                        },
                        v = (null == s ? void 0 : s.current) || d,
                        m = await rx(ou(p, v.scrollHeight), u),
                        h = await rx(p, { ...u, elementContext: "reference" }),
                        b = Math.max(0, m.top),
                        g = p.y + b,
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
                            ? (0, r6.flushSync)(() => r(!0))
                            : (0, r6.flushSync)(() => r(!1))),
                        n &&
                          (n.current = await rx(
                            ou({ ...p, y: g }, v.offsetHeight),
                            u,
                          )),
                        { y: g }
                      );
                    },
                  }
                : null,
              {
                ...{
                  name: "size",
                  options:
                    (o = x =
                      {
                        padding: _,
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
                        elements: l,
                      } = e,
                      { apply: i = () => {}, ...a } = ru(o, e),
                      s = await rx(e, a),
                      u = rc(t),
                      c = rd(t),
                      d = "y" === rv(t),
                      { width: f, height: p } = n.floating,
                      v,
                      m;
                    "top" === u || "bottom" === u
                      ? ((v = u),
                        (m =
                          c ===
                          ((await (null == r.isRTL
                            ? void 0
                            : r.isRTL(l.floating)))
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
                      x = c || g ? rn(b, e) : e;
                    } else {
                      let e = p - s.top - s.bottom;
                      y = c || g ? rn(h, e) : e;
                    }
                    if (g && !c) {
                      let e = rr(s.left, 0),
                        t = rr(s.right, 0),
                        n = rr(s.top, 0),
                        r = rr(s.bottom, 0);
                      d
                        ? (x =
                            f -
                            2 *
                              (0 !== e || 0 !== t
                                ? e + t
                                : rr(s.left, s.right)))
                        : (y =
                            p -
                            2 *
                              (0 !== n || 0 !== r
                                ? n + r
                                : rr(s.top, s.bottom)));
                    }
                    await i({ ...e, availableWidth: x, availableHeight: y });
                    let E = await r.getDimensions(l.floating);
                    return f !== E.width || p !== E.height
                      ? { reset: { rects: !0 } }
                      : {};
                  },
                },
                options: [x, E],
              },
            ].filter(Boolean),
            whileElementsMounted: rY,
          }),
          [z = B, W = j] = V.placement.split("-");
        "selection" === B && (z = "selection");
        let G = (0, od.useMemo)(
            () => ({ anchor: [z, W].filter(Boolean).join(" ") }),
            [z, W],
          ),
          { getReferenceProps: K, getFloatingProps: U } =
            ((l = [
              (function (e, t) {
                let { open: n, elements: r } = e,
                  {
                    enabled: o = !0,
                    overflowRef: l,
                    scrollRef: i,
                    onChange: a,
                  } = t,
                  s = r8(a),
                  u = n7.useRef(!1),
                  c = n7.useRef(null),
                  d = n7.useRef(null);
                return (
                  n7.useEffect(() => {
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
                            (0, r6.flushSync)(() => {
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
                  n7.useMemo(
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
                                      (0, r6.flushSync)(() => s((e) => e + t));
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
              })(V, { overflowRef: O, onChange: R }),
            ]),
            (w = n7.useCallback((e) => os(e, l, "reference"), l)),
            (S = n7.useCallback((e) => os(e, l, "floating"), l)),
            (P = n7.useCallback(
              (e) => os(e, l, "item"),
              l.map((e) => (null == e ? void 0 : e.item)),
            )),
            n7.useMemo(
              () => ({
                getReferenceProps: w,
                getFloatingProps: S,
                getItemProps: P,
              }),
              [w, S, P],
            )),
          q = eT((e) => {
            (F(e), H.setFloating(e));
          });
        return oc.createElement(
          op.Provider,
          { value: T },
          oc.createElement(
            of.Provider,
            {
              value: {
                setFloating: q,
                setReference: H.setReference,
                styles: $,
                getReferenceProps: K,
                getFloatingProps: U,
                slot: G,
              },
            },
            e,
          ),
        );
      }
      function ox(e, t, n) {
        let r = ex(),
          o = eT((e, t) => {
            if (null == e) return [n, null];
            if ("number" == typeof e) return [e, null];
            if ("string" == typeof e) {
              if (!t) return [n, null];
              let o = oE(e, t);
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
                      let u = oE(e, t);
                      o !== u && (n(u), (o = u));
                    });
                  }
                  return r.dispose;
                },
              ];
            }
            return [n, null];
          }),
          l = (0, od.useMemo)(() => o(e, t)[0], [e, t]),
          [i = l, a] = (0, od.useState)();
        return (
          eP(() => {
            let [n, r] = o(e, t);
            if ((a(n), r)) return r(a);
          }, [e, t]),
          i
        );
      }
      function oE(e, t) {
        let n = document.createElement("div");
        (t.appendChild(n),
          n.style.setProperty("margin-top", "0px", "important"),
          n.style.setProperty("margin-top", e, "important"));
        let r = parseFloat(window.getComputedStyle(n).marginTop) || 0;
        return (t.removeChild(n), r);
      }
      op.displayName = "PlacementContext";
      var ow = d(n(36439), 1),
        oS = ow.default.forwardRef(function ({ children: e, freeze: t }, n) {
          let r = oP(t, e);
          return (0, ow.isValidElement)(r)
            ? (0, ow.cloneElement)(r, { ref: n })
            : ow.default.createElement(ow.default.Fragment, null, r);
        });
      function oP(e, t) {
        let [n, r] = (0, ow.useState)(t);
        return (e || n === t || r(t), e ? n : t);
      }
      var oI = d(n(36439), 1),
        oT = (0, oI.createContext)(null);
      function oC() {
        return (0, oI.useContext)(oT);
      }
      function oR({ value: e, children: t }) {
        return oI.default.createElement(oT.Provider, { value: e }, t);
      }
      function oO({ children: e }) {
        return oI.default.createElement(oT.Provider, { value: null }, e);
      }
      oT.displayName = "OpenClosedContext";
      var ok = [];
      function oF(e, t) {
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
      !(function (e) {
        function t() {
          "loading" !== document.readyState &&
            (e(), document.removeEventListener("DOMContentLoaded", t));
        }
        "undefined" != typeof window &&
          "undefined" != typeof document &&
          (document.addEventListener("DOMContentLoaded", t), t());
      })(() => {
        function e(e) {
          if (!ts(e.target) || e.target === document.body || ok[0] === e.target)
            return;
          let t = e.target;
          ((t = t.closest(nE)),
            ok.unshift(null != t ? t : e.target),
            (ok = ok.filter((e) => null != e && e.isConnected)).splice(10));
        }
        (window.addEventListener("click", e, { capture: !0 }),
          window.addEventListener("mousedown", e, { capture: !0 }),
          window.addEventListener("focus", e, { capture: !0 }),
          document.body.addEventListener("click", e, { capture: !0 }),
          document.body.addEventListener("mousedown", e, { capture: !0 }),
          document.body.addEventListener("focus", e, { capture: !0 }));
      });
      var oM = d(n(36439), 1),
        oD = n(72354),
        oA = n(36439);
      function oL(e) {
        let t = eT(e),
          n = (0, oA.useRef)(!1);
        (0, oA.useEffect)(
          () => (
            (n.current = !1),
            () => {
              ((n.current = !0),
                eg(() => {
                  n.current && t();
                }));
            }
          ),
          [t],
        );
      }
      var o_ = d(n(36439), 1);
      function oN() {
        let e,
          t =
            ((e = "undefined" == typeof document),
            "useSyncExternalStore" in o_ &&
              (0, o_.useSyncExternalStore)(
                () => () => {},
                () => !1,
                () => !e,
              )),
          [n, r] = o_.useState(ef.isHandoffComplete);
        return (
          n && !1 === ef.isHandoffComplete && r(!1),
          o_.useEffect(() => {
            !0 !== n && r(!0);
          }, [n]),
          o_.useEffect(() => ef.handoff(), []),
          !t && n
        );
      }
      var oB = d(n(36439), 1),
        oj = (0, oB.createContext)(!1);
      function oH(e) {
        return oB.default.createElement(
          oj.Provider,
          { value: e.force },
          e.children,
        );
      }
      var o$ = oM.Fragment,
        oV = eV(function (e, t) {
          let { ownerDocument: n = null, ...r } = e,
            o = (0, oM.useRef)(null),
            l = tb(
              th((e) => {
                o.current = e;
              }),
              t,
            ),
            i = nB(o.current),
            a = (function (e) {
              let t = (0, oB.useContext)(oj),
                n = (0, oM.useContext)(oW),
                [r, o] = (0, oM.useState)(() => {
                  var r;
                  if (!t && null !== n)
                    return null != (r = n.current) ? r : null;
                  if (ef.isServer) return null;
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
                (0, oM.useEffect)(() => {
                  null !== r &&
                    ((null != e && e.body.contains(r)) ||
                      null == e ||
                      e.body.appendChild(r));
                }, [r, e]),
                (0, oM.useEffect)(() => {
                  t || (null !== n && o(n.current));
                }, [n, o, t]),
                r
              );
            })(null != n ? n : i),
            s = (0, oM.useContext)(oG),
            u = ex(),
            c = oN(),
            d = eN();
          return (
            oL(() => {
              var e;
              a &&
                a.childNodes.length <= 0 &&
                (null == (e = a.parentElement) || e.removeChild(a));
            }),
            a && c
              ? (0, oD.createPortal)(
                  oM.default.createElement(
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
                      defaultTag: o$,
                      name: "Portal",
                    }),
                  ),
                  a,
                )
              : null
          );
        }),
        oz = oM.Fragment,
        oW = (0, oM.createContext)(null),
        oG = (0, oM.createContext)(null);
      function oK() {
        let e = (0, oM.useContext)(oG),
          t = (0, oM.useRef)([]),
          n = eT((n) => (t.current.push(n), e && e.register(n), () => r(n))),
          r = eT((n) => {
            let r = t.current.indexOf(n);
            (-1 !== r && t.current.splice(r, 1), e && e.unregister(n));
          }),
          o = (0, oM.useMemo)(
            () => ({ register: n, unregister: r, portals: t }),
            [n, r, t],
          );
        return [
          t,
          (0, oM.useMemo)(
            () =>
              function ({ children: e }) {
                return oM.default.createElement(oG.Provider, { value: o }, e);
              },
            [o],
          ),
        ];
      }
      var oU = eV(function (e, t) {
          let n = tb(t),
            { enabled: r = !0, ownerDocument: o, ...l } = e,
            i = eN();
          return r
            ? oM.default.createElement(oV, { ...l, ownerDocument: o, ref: n })
            : i({
                ourProps: { ref: n },
                theirProps: l,
                slot: {},
                defaultTag: o$,
                name: "Portal",
              });
        }),
        oq = eV(function (e, t) {
          let { target: n, ...r } = e,
            o = { ref: tb(t) },
            l = eN();
          return oM.default.createElement(
            oW.Provider,
            { value: n },
            l({
              ourProps: o,
              theirProps: r,
              defaultTag: oz,
              name: "Popover.Group",
            }),
          );
        }),
        oY = Object.assign(oU, { Group: oq }),
        oQ = {
          Idle: { kind: "Idle" },
          Tracked: (e) => ({ kind: "Tracked", position: e }),
          Moved: { kind: "Moved" },
        };
      function oX(e) {
        let t = e.getBoundingClientRect();
        return `${t.x},${t.y}`;
      }
      function oJ(e, t, n) {
        let r = ey();
        if ("Tracked" === t.kind) {
          let o = function () {
              l !== oX(e) && (r.dispose(), n());
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
      function oZ(e, t = (e) => e) {
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
              : nC(r, (e) => e.dataRef.current.domRef.current),
          l = n ? o.indexOf(n) : null;
        return (-1 === l && (l = null), { options: o, activeOptionIndex: l });
      }
      var o0 = {
          1(e) {
            var t;
            if (
              (null != (t = e.dataRef.current) && t.disabled) ||
              1 === e.comboboxState
            )
              return e;
            let n = e.inputElement
              ? oQ.Tracked(oX(e.inputElement))
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
                  inputPositionState: oQ.Idle,
                };
            }
            return {
              ...e,
              comboboxState: 0,
              inputPositionState: oQ.Idle,
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
                    : oF(t, {
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
            let i = oZ(e);
            if (null === i.activeOptionIndex) {
              let e = i.options.findIndex((e) => !e.dataRef.current.disabled);
              -1 !== e && (i.activeOptionIndex = e);
            }
            let a =
                4 === t.focus
                  ? t.idx
                  : oF(t, {
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
              a = oZ(e, (e) => (e.push(i), e));
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
            let r = oZ(e, (e) => {
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
              : { ...e, inputPositionState: oQ.Moved },
        },
        o1 = class extends nn {
          constructor(e) {
            (super(e),
              f(this, "actions", {
                onChange: (e) => {
                  let {
                    onChange: t,
                    compare: n,
                    mode: r,
                    value: o,
                  } = this.state.dataRef.current;
                  return e_(r, {
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
              f(this, "selectors", {
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
                t = nu.get(null);
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
                    oJ(t.inputElement, t.inputPositionState, () => {
                      this.send({ type: 12 });
                    }),
                  ));
              });
            });
          }
          static new({ id: e, virtual: t = null, __demoMode: n = !1 }) {
            var r;
            return new o1({
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
              inputPositionState: oQ.Idle,
            });
          }
          reduce(e, t) {
            return e_(t.type, o0, e, t);
          }
        },
        o3 = n(36439),
        o4 = (0, o3.createContext)(null);
      function o2(e) {
        let t = (0, o3.useContext)(o4);
        if (null === t) {
          let t = Error(`<${e} /> is missing a parent <Combobox /> component.`);
          throw (Error.captureStackTrace && Error.captureStackTrace(t, o6), t);
        }
        return t;
      }
      function o6({ id: e, virtual: t = null, __demoMode: n = !1 }) {
        let r = (0, o3.useMemo)(
          () => o1.new({ id: e, virtual: t, __demoMode: n }),
          [],
        );
        return (oL(() => r.dispose()), r);
      }
      var o9 = (0, tX.createContext)(null);
      function o5(e) {
        let t = (0, tX.useContext)(o9);
        if (null === t) {
          let t = Error(`<${e} /> is missing a parent <Combobox /> component.`);
          throw (Error.captureStackTrace && Error.captureStackTrace(t, o5), t);
        }
        return t;
      }
      o9.displayName = "ComboboxDataContext";
      var o8 = (0, tX.createContext)(null);
      function o7(e) {
        let t = o2("VirtualProvider"),
          { options: n } = o5("VirtualProvider").virtual,
          r = nd(t, (e) => e.optionsElement),
          [o, l] = (0, tX.useMemo)(() => {
            if (!r) return [0, 0];
            let e = window.getComputedStyle(r);
            return [
              parseFloat(e.paddingBlockStart || e.paddingTop),
              parseFloat(e.paddingBlockEnd || e.paddingBottom),
            ];
          }, [r]),
          i = (function (e) {
            let t = tL.useReducer(() => ({}), {})[1],
              n = {
                ...e,
                onChange: (n, r) => {
                  var o;
                  (r ? (0, t_.flushSync)(t) : t(),
                    null == (o = e.onChange) || o.call(e, n, r));
                },
              },
              [r] = tL.useState(() => new tq(n));
            return (
              r.setOptions(n),
              tQ(() => r._didMount(), []),
              tQ(() => r._willUpdate()),
              r
            );
          })({
            observeElementRect: tV,
            observeElementOffset: tG,
            scrollToFn: tU,
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
          [a, s] = (0, tX.useState)(0);
        eP(() => {
          s((e) => e + 1);
        }, [n]);
        let u = i.getVirtualItems(),
          c = nd(t, (e) => 0 === e.activationTrigger),
          d = nd(t, t.selectors.activeOptionIndex);
        return 0 === u.length
          ? null
          : tX.default.createElement(
              o8.Provider,
              { value: i },
              tX.default.createElement(
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
                  return tX.default.createElement(
                    tX.Fragment,
                    { key: t.key },
                    tX.default.cloneElement(
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
      var le = tX.Fragment,
        lt = eV(function (e, t) {
          let n = (0, eZ.useId)(),
            r = eM(),
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
            y = eJ(l),
            [x = v ? [] : void 0, E] = eQ(o, i, y),
            w = o6({ id: n, virtual: h, __demoMode: p }),
            S = (0, tX.useRef)({ static: !1, hold: !1 }),
            P = t1(u),
            I = eT((e) =>
              h
                ? null === u
                  ? h.options.indexOf(e)
                  : h.options.findIndex((t) => P(t, e))
                : w.state.options.findIndex((t) =>
                    P(t.dataRef.current.value, e),
                  ),
            ),
            T = (0, tX.useCallback)(
              (e) =>
                e_(O.mode, {
                  1: () => x.some((t) => P(t, e)),
                  0: () => P(x, e),
                }),
              [x],
            ),
            C = nd(w, (e) => e.virtual),
            R = eT(() => (null == f ? void 0 : f())),
            O = (0, tX.useMemo)(
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
          (eP(() => {
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
            eP(() => {
              w.state.dataRef.current = O;
            }, [O]));
          let [k, F, M, D] = nd(w, (e) => [
              e.comboboxState,
              e.buttonElement,
              e.inputElement,
              e.optionsElement,
            ]),
            A = nu.get(null);
          n_(
            nd(
              A,
              (0, tX.useCallback)((e) => A.selectors.isTop(e, n), [A, n]),
            ),
            [F, M, D],
            () => w.actions.closeCombobox(),
          );
          let L = eO({
              open: 0 === k,
              disabled: d,
              invalid: c,
              activeIndex: nd(w, w.selectors.activeOptionIndex),
              activeOption: nd(w, w.selectors.activeOption),
              value: x,
            }),
            [_, N] = tT(),
            B = (0, tX.useCallback)(() => {
              if (void 0 !== y) return null == E ? void 0 : E(y);
            }, [E, y]),
            j = eN();
          return tX.default.createElement(
            N,
            {
              value: _,
              props: { htmlFor: null == M ? void 0 : M.id },
              slot: { open: 0 === k, disabled: d },
            },
            tX.default.createElement(
              oy,
              null,
              tX.default.createElement(
                o9.Provider,
                { value: O },
                tX.default.createElement(
                  o4.Provider,
                  { value: w },
                  tX.default.createElement(
                    oR,
                    { value: e_(k, { 0: 1, 1: 2 }) },
                    null != s &&
                      tX.default.createElement(e7, {
                        disabled: d,
                        data: null != x ? { [s]: x } : {},
                        form: a,
                        onReset: B,
                      }),
                    j({
                      ourProps: null === t ? {} : { ref: t },
                      theirProps: g,
                      slot: L,
                      defaultTag: le,
                      name: "Combobox",
                    }),
                  ),
                ),
              ),
            ),
          );
        }),
        ln = eV(function (e, t) {
          let n = o2("Combobox.Button"),
            r = o5("Combobox.Button"),
            [o, l] = (0, tX.useState)(null),
            i = tb(t, l, n.actions.setButtonElement),
            a = (0, eZ.useId)(),
            {
              id: s = `headlessui-combobox-button-${a}`,
              disabled: u = r.disabled || !1,
              autoFocus: c = !1,
              ...d
            } = e,
            [f, p, v] = nd(n, (e) => [
              e.comboboxState,
              e.inputElement,
              e.optionsElement,
            ]),
            m = nG(p);
          n$(0 === f, {
            trigger: o,
            action: (0, tX.useCallback)(
              (e) => {
                if (
                  (null != o && o.contains(e.target)) ||
                  (null != p && p.contains(e.target))
                )
                  return nH.Ignore;
                let t = e.target.closest(
                  '[role="option"]:not([data-disabled])',
                );
                return ta(t)
                  ? nH.Select(t)
                  : null != v && v.contains(e.target)
                    ? nH.Ignore
                    : nH.Close;
              },
              [o, p, v],
            ),
            close: n.actions.closeCombobox,
            select: n.actions.selectActiveOption,
          });
          let h = eT((e) => {
              switch (e.key) {
                case " ":
                case "Enter":
                  (e.preventDefault(),
                    e.stopPropagation(),
                    1 === n.state.comboboxState &&
                      (0, tJ.flushSync)(() => n.actions.openCombobox()),
                    m());
                  return;
                case "ArrowDown":
                  (e.preventDefault(),
                    e.stopPropagation(),
                    1 === n.state.comboboxState &&
                      ((0, tJ.flushSync)(() => n.actions.openCombobox()),
                      n.state.dataRef.current.value ||
                        n.actions.goToOption({ focus: 0 })),
                    m());
                  return;
                case "ArrowUp":
                  (e.preventDefault(),
                    e.stopPropagation(),
                    1 === n.state.comboboxState &&
                      ((0, tJ.flushSync)(() => n.actions.openCombobox()),
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
                    (0, tJ.flushSync)(() => n.actions.closeCombobox()),
                    m());
                  return;
                default:
                  return;
              }
            }),
            b = t9(() => {
              (0 === n.state.comboboxState
                ? n.actions.closeCombobox()
                : n.actions.openCombobox(),
                m());
            }),
            g = tI([s]),
            { isFocusVisible: y, focusProps: x } = ec({ autoFocus: c }),
            { isHovered: E, hoverProps: w } = es({ isDisabled: u }),
            { pressed: S, pressProps: P } = eC({ disabled: u }),
            I = eO({
              open: 0 === f,
              active: S || 0 === f,
              disabled: u,
              invalid: r.invalid,
              value: r.value,
              hover: E,
              focus: y,
            }),
            T = e$(
              {
                ref: i,
                id: s,
                type: nU(e, o),
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
          return eN()({
            ourProps: T,
            theirProps: d,
            slot: I,
            defaultTag: "button",
            name: "Combobox.Button",
          });
        }),
        lr = eV(function (e, t) {
          var n, r;
          let o = o2("Combobox.Input"),
            l = o5("Combobox.Input"),
            i = (0, eZ.useId)(),
            a = tr(),
            {
              id: s = a || `headlessui-combobox-input-${i}`,
              onChange: u,
              displayValue: c,
              disabled: d = l.disabled || !1,
              autoFocus: f = !1,
              type: p = "text",
              ...v
            } = e,
            m = (0, tX.useRef)(null),
            h = tb(m, t, om(), o.actions.setInputElement),
            [b, g] = nd(o, (e) => [e.comboboxState, e.isTyping]),
            y = ex(),
            x = eT(() => {
              (o.actions.onChange(null),
                o.state.optionsElement &&
                  (o.state.optionsElement.scrollTop = 0),
                o.actions.goToOption({ focus: 5 }));
            });
          (n8(
            ([e, t], [n, r]) => {
              if (o.state.isTyping) return;
              let l = m.current;
              l &&
                (((0 === r && 1 === t) || e !== n) && (l.value = e),
                requestAnimationFrame(() => {
                  if (o.state.isTyping || !l || eh(l)) return;
                  let { selectionStart: e, selectionEnd: t } = l;
                  0 === Math.abs((null != t ? t : 0) - (null != e ? e : 0)) &&
                    0 === e &&
                    l.setSelectionRange(l.value.length, l.value.length);
                }));
            },
            [
              (0, tX.useMemo)(() => {
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
            n8(
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
          let E = (0, tX.useRef)(!1),
            w = eT(() => {
              E.current = !0;
            }),
            S = eT(() => {
              y.nextFrame(() => {
                E.current = !1;
              });
            }),
            P = eT((e) => {
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
                    e_(o.state.comboboxState, {
                      0: () => o.actions.goToOption({ focus: 2 }),
                      1: () => o.actions.openCombobox(),
                    })
                  );
                case "ArrowUp":
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    e_(o.state.comboboxState, {
                      0: () => o.actions.goToOption({ focus: 1 }),
                      1: () => {
                        ((0, tJ.flushSync)(() => o.actions.openCombobox()),
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
            I = eT((e) => {
              (null == u || u(e),
                0 === l.mode && "" === e.target.value && x(),
                o.actions.openCombobox());
            }),
            T = eT((e) => {
              var t, n, r;
              let i =
                null != (t = e.relatedTarget)
                  ? t
                  : ok.find((t) => t !== e.currentTarget);
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
            C = eT((e) => {
              var t, n, r;
              let i =
                null != (t = e.relatedTarget)
                  ? t
                  : ok.find((t) => t !== e.currentTarget);
              (null != (n = o.state.buttonElement) && n.contains(i)) ||
                (null != (r = o.state.optionsElement) && r.contains(i)) ||
                l.disabled ||
                (l.immediate &&
                  0 !== o.state.comboboxState &&
                  y.microTask(() => {
                    ((0, tJ.flushSync)(() => o.actions.openCombobox()),
                      o.actions.setActivationTrigger(1));
                  }));
            }),
            R = tI(),
            O = ty(),
            { isFocused: k, focusProps: F } = ec({ autoFocus: f }),
            { isHovered: M, hoverProps: D } = es({ isDisabled: d }),
            A = nd(o, (e) => e.optionsElement),
            L = eO({
              open: 0 === b,
              disabled: d,
              invalid: l.invalid,
              hover: M,
              focus: k,
              autofocus: f,
            }),
            _ = e$(
              {
                ref: h,
                id: s,
                role: "combobox",
                type: p,
                "aria-controls": null == A ? void 0 : A.id,
                "aria-expanded": 0 === b,
                "aria-activedescendant": nd(o, o.selectors.activeDescendantId),
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
          return eN()({
            ourProps: _,
            theirProps: v,
            slot: L,
            defaultTag: "input",
            name: "Combobox.Input",
          });
        }),
        lo = tC,
        ll = eV(function (e, t) {
          var n, r, o;
          let l = (0, eZ.useId)(),
            {
              id: i = `headlessui-combobox-options-${l}`,
              hold: a = !1,
              anchor: s,
              portal: u = !1,
              modal: c = !0,
              transition: d = !1,
              ...f
            } = e,
            p = o2("Combobox.Options"),
            v = o5("Combobox.Options"),
            m = ov(s);
          m && (u = !0);
          let [h, b] = og(m),
            [g, y] = (0, tX.useState)(null),
            x = ob(),
            E = tb(t, m ? h : null, p.actions.setOptionsElement, y),
            [w, S, P, I, T] = nd(p, (e) => [
              e.comboboxState,
              e.inputElement,
              e.buttonElement,
              e.optionsElement,
              e.activationTrigger,
            ]),
            C = nB(S || P),
            R = nB(I),
            O = oC(),
            [k, F] = n2(d, g, null !== O ? (1 & O) == 1 : 0 === w);
          (ny(k, S, p.actions.closeCombobox),
            nX(!v.__demoMode && c && 0 === w, R),
            nb(!v.__demoMode && c && 0 === w, {
              allowed: (0, tX.useCallback)(() => [S, P, I], [S, P, I]),
            }));
          let M = !nd(p, p.selectors.didInputMove) && k;
          (eP(() => {
            var t;
            v.optionsPropsRef.current.static = null != (t = e.static) && t;
          }, [v.optionsPropsRef, e.static]),
            eP(() => {
              v.optionsPropsRef.current.hold = a;
            }, [v.optionsPropsRef, a]),
            n9(0 === w, {
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
          let D = tI([null == P ? void 0 : P.id]),
            A = eO({ open: 0 === w, option: void 0 }),
            L = eT(() => {
              p.actions.setActivationTrigger(0);
            }),
            _ = eT((e) => {
              (e.preventDefault(), p.actions.setActivationTrigger(0));
            }),
            N = e$(m ? x() : {}, {
              "aria-labelledby": D,
              role: "listbox",
              "aria-multiselectable": 1 === v.mode || void 0,
              id: i,
              ref: E,
              style: {
                ...f.style,
                ...b,
                "--input-width": t2(k, S, !0).width,
                "--button-width": t2(k, P, !0).width,
              },
              onWheel: 0 === T ? void 0 : L,
              onMouseDown: _,
              ...n4(F),
            }),
            B = k && 1 === w && !e.static,
            j = oP(B, null == (n = v.virtual) ? void 0 : n.options),
            H = oP(B, v.value),
            $ = (0, tX.useCallback)((e) => v.compare(H, e), [v.compare, H]),
            V = (0, tX.useMemo)(() => {
              if (!v.virtual) return v;
              if (void 0 === j)
                throw Error("Missing `options` in virtual mode");
              return j !== v.virtual.options
                ? { ...v, virtual: { ...v.virtual, options: j } }
                : v;
            }, [v, j, null == (r = v.virtual) ? void 0 : r.options]);
          v.virtual &&
            Object.assign(f, {
              children: tX.default.createElement(
                o9.Provider,
                { value: V },
                tX.default.createElement(o7, { slot: A }, f.children),
              ),
            });
          let z = eN(),
            W = (0, tX.useMemo)(
              () => (1 === v.mode ? v : { ...v, isSelected: $ }),
              [v, $],
            );
          return tX.default.createElement(
            oY,
            { enabled: !!u && (e.static || k), ownerDocument: C },
            tX.default.createElement(
              o9.Provider,
              { value: W },
              z({
                ourProps: N,
                theirProps: {
                  ...f,
                  children: tX.default.createElement(
                    oS,
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
        li = eV(function (e, t) {
          var n, r, o;
          let l = o5("Combobox.Option"),
            i = o2("Combobox.Option"),
            a = (0, eZ.useId)(),
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
            [p] = nd(i, (e) => [e.inputElement]),
            v = nG(p),
            m = nd(
              i,
              (0, tX.useCallback)((e) => i.selectors.isActive(e, u, s), [u, s]),
            ),
            h = l.isSelected(u),
            b = (0, tX.useRef)(null),
            g = eI({ disabled: c, value: u, domRef: b, order: d }),
            y = (0, tX.useContext)(o8),
            x = tb(t, b, y ? y.measureElement : null),
            E = eT(() => {
              (i.actions.setIsTyping(!1), i.actions.onChange(u));
            });
          eP(() => i.actions.registerOption(s, g), [g, s]);
          let w = nd(
            i,
            (0, tX.useCallback)(
              (e) => i.selectors.shouldScrollIntoView(e, u, s),
              [u, s],
            ),
          );
          eP(() => {
            if (w)
              return ey().requestAnimationFrame(() => {
                var e, t;
                null ==
                  (t = null == (e = b.current) ? void 0 : e.scrollIntoView) ||
                  t.call(e, { block: "nearest" });
              });
          }, [w, b]);
          let S = eT((e) => {
              (e.preventDefault(),
                0 === e.button &&
                  (c ||
                    (E(),
                    nF() || requestAnimationFrame(() => v()),
                    0 === l.mode && i.actions.closeCombobox())));
            }),
            P = eT(() => {
              if (c) return i.actions.goToOption({ focus: 5 });
              let e = l.calculateIndex(u);
              i.actions.goToOption({ focus: 4, idx: e });
            }),
            I = n0(),
            T = eT((e) => I.update(e)),
            C = eT((e) => {
              if (!I.wasMoved(e) || c || (m && 0 === i.state.activationTrigger))
                return;
              let t = l.calculateIndex(u);
              i.actions.goToOption({ focus: 4, idx: t }, 0);
            }),
            R = eT((e) => {
              I.wasMoved(e) &&
                (c ||
                  (m &&
                    (l.optionsPropsRef.current.hold ||
                      (0 === i.state.activationTrigger &&
                        i.actions.goToOption({ focus: 5 })))));
            }),
            O = eO({ active: m, focus: m, selected: h, disabled: c });
          return eN()({
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
        la = Object.assign(lt, {
          Input: lr,
          Button: ln,
          Label: lo,
          Options: ll,
          Option: li,
        }),
        ls = n(36439).Fragment,
        lu = eV(function (e, t) {
          let { ...n } = e,
            { isFocusVisible: r, focusProps: o } = ec(),
            { isHovered: l, hoverProps: i } = es({ isDisabled: !1 }),
            { pressed: a, pressProps: s } = eC({ disabled: !1 }),
            u = e$({ ref: t }, o, i, s),
            c = eO({ hover: l, focus: r, active: a });
          return eN()({
            ourProps: u,
            theirProps: n,
            slot: c,
            defaultTag: ls,
            name: "DataInteractive",
          });
        }),
        lc = d(n(36439), 1),
        ld = n(36439),
        lf = d(n(36439), 1);
      function lp({
        defaultContainers: e = [],
        portals: t,
        mainTreeNode: n,
      } = {}) {
        let r = eT(() => {
          var r, o;
          let l = ep(n),
            i = [];
          for (let t of e)
            null !== t &&
              (ti(t)
                ? i.push(t)
                : "current" in t && ti(t.current) && i.push(t.current));
          if (null != t && t.current) for (let e of t.current) i.push(e);
          for (let e of null !=
          (r = null == l ? void 0 : l.querySelectorAll("html > *, body > *"))
            ? r
            : [])
            e !== document.body &&
              e !== document.head &&
              ti(e) &&
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
          contains: eT((e) => r().some((t) => t.contains(e))),
        };
      }
      var lv = (0, lf.createContext)(null);
      function lm({ children: e, node: t }) {
        let [n, r] = (0, lf.useState)(null),
          o = lh(null != t ? t : n);
        return lf.default.createElement(
          lv.Provider,
          { value: o },
          e,
          null === o &&
            lf.default.createElement(e6, {
              features: 4,
              ref: (e) => {
                var t, n;
                if (e) {
                  for (let o of null !=
                  (n =
                    null == (t = ep(e))
                      ? void 0
                      : t.querySelectorAll("html > *, body > *"))
                    ? n
                    : [])
                    if (
                      o !== document.body &&
                      o !== document.head &&
                      ti(o) &&
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
      function lh(e = null) {
        var t;
        return null != (t = (0, lf.useContext)(lv)) ? t : e;
      }
      var lb = d(n(36439), 1),
        lg = n(36439);
      function ly() {
        let e = (0, lg.useRef)(!1);
        return (
          eP(
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
      var lx = n(36439);
      function lE() {
        let e = (0, lx.useRef)(0);
        return (
          nL(
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
      function lw(e) {
        if (!e) return new Set();
        if ("function" == typeof e) return new Set(e());
        let t = new Set();
        for (let n of e.current) ti(n.current) && t.add(n.current);
        return t;
      }
      var lS = ((e) => (
          (e[(e.None = 0)] = "None"),
          (e[(e.InitialFocus = 1)] = "InitialFocus"),
          (e[(e.TabLock = 2)] = "TabLock"),
          (e[(e.FocusLock = 4)] = "FocusLock"),
          (e[(e.RestoreFocus = 8)] = "RestoreFocus"),
          (e[(e.AutoFocus = 16)] = "AutoFocus"),
          e
        ))(lS || {}),
        lP = Object.assign(
          eV(function (e, t) {
            let n = (0, lb.useRef)(null),
              r = tb(n, t),
              {
                initialFocus: o,
                initialFocusFallback: l,
                containers: i,
                features: a = 15,
                ...s
              } = e;
            oN() || (a = 0);
            let u = nB(n.current);
            !(function (e, { ownerDocument: t }) {
              let n = !!(8 & e),
                r = (function (e = !0) {
                  let t = (0, lb.useRef)(ok.slice());
                  return (
                    n8(
                      ([e], [n]) => {
                        (!0 === n &&
                          !1 === e &&
                          eg(() => {
                            t.current.splice(0);
                          }),
                          !1 === n && !0 === e && (t.current = ok.slice()));
                      },
                      [e, ok, t],
                    ),
                    eT(() => {
                      var e;
                      return null !=
                        (e = t.current.find((e) => null != e && e.isConnected))
                        ? e
                        : null;
                    })
                  );
                })(n);
              (n8(() => {
                n || (eh(null == t ? void 0 : t.body) && nT(r()));
              }, [n]),
                oL(() => {
                  n && nT(r());
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
              let l = (0, lb.useRef)(null),
                i = np(!!(1 & e), "focus-trap#initial-focus"),
                a = ly();
              return (
                n8(() => {
                  if (0 === e) return;
                  if (!i) {
                    null != o && o.current && nT(o.current);
                    return;
                  }
                  let s = n.current;
                  s &&
                    eg(() => {
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
                      if (null != r && r.current) nT(r.current);
                      else {
                        if (16 & e) {
                          if (0 !== nO(s, 65)) return;
                        } else if (0 !== nO(s, 1)) return;
                        if (
                          null != o &&
                          o.current &&
                          (nT(o.current),
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
              let l = ly(),
                i = !!(4 & e);
              nW(
                null == t ? void 0 : t.defaultView,
                "focus",
                (e) => {
                  if (!i || !l.current) return;
                  let t = lw(r);
                  ta(n.current) && t.add(n.current);
                  let a = o.current;
                  if (!a) return;
                  let s = e.target;
                  ta(s)
                    ? lI(t, s)
                      ? ((o.current = s), nT(s))
                      : (e.preventDefault(), e.stopPropagation(), nT(a))
                    : nT(o.current);
                },
                !0,
              );
            })(a, {
              ownerDocument: u,
              container: n,
              containers: i,
              previousActiveElement: c,
            });
            let d = lE(),
              f = eT((e) => {
                if (!ta(n.current)) return;
                let t = n.current;
                e_(d.current, {
                  0: () => {
                    nO(t, 1, { skipElements: [e.relatedTarget, l] });
                  },
                  1: () => {
                    nO(t, 8, { skipElements: [e.relatedTarget, l] });
                  },
                });
              }),
              p = np(!!(2 & a), "focus-trap#tab-lock"),
              v = ex(),
              m = (0, lb.useRef)(!1),
              h = eN();
            return lb.default.createElement(
              lb.default.Fragment,
              null,
              p &&
                lb.default.createElement(e6, {
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
                    let t = lw(i);
                    ta(n.current) && t.add(n.current);
                    let r = e.relatedTarget;
                    ts(r) &&
                      "true" !== r.dataset.headlessuiFocusGuard &&
                      (lI(t, r) ||
                        (m.current
                          ? nO(
                              n.current,
                              16 | e_(d.current, { 0: () => 4, 1: () => 2 }),
                              { relativeTo: e.target },
                            )
                          : ts(e.target) && nT(e.target)));
                  },
                },
                theirProps: s,
                defaultTag: "div",
                name: "FocusTrap",
              }),
              p &&
                lb.default.createElement(e6, {
                  as: "button",
                  type: "button",
                  "data-headlessui-focus-guard": !0,
                  onFocus: f,
                  features: 2,
                }),
            );
          }),
          { features: lS },
        );
      function lI(e, t) {
        for (let n of e) if (n.contains(t)) return !0;
        return !1;
      }
      var lT = d(n(36439), 1);
      function lC(e) {
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
          !eG(null != (t = e.as) ? t : lM) ||
          1 === lT.default.Children.count(e.children)
        );
      }
      var lR = (0, lT.createContext)(null);
      lR.displayName = "TransitionContext";
      var lO = (0, lT.createContext)(null);
      function lk(e) {
        return "children" in e
          ? lk(e.children)
          : e.current
              .filter(({ el: e }) => null !== e.current)
              .filter(({ state: e }) => "visible" === e).length > 0;
      }
      function lF(e, t) {
        let n = eI(e),
          r = (0, lT.useRef)([]),
          o = ly(),
          l = ex(),
          i = eT((e, t = 1) => {
            let i = r.current.findIndex(({ el: t }) => t === e);
            -1 !== i &&
              (e_(t, {
                0() {
                  r.current.splice(i, 1);
                },
                1() {
                  r.current[i].state = "hidden";
                },
              }),
              l.microTask(() => {
                var e;
                !lk(r) && o.current && (null == (e = n.current) || e.call(n));
              }));
          }),
          a = eT((e) => {
            let t = r.current.find(({ el: t }) => t === e);
            return (
              t
                ? "visible" !== t.state && (t.state = "visible")
                : r.current.push({ el: e, state: "visible" }),
              () => i(e, 0)
            );
          }),
          s = (0, lT.useRef)([]),
          u = (0, lT.useRef)(Promise.resolve()),
          c = (0, lT.useRef)({ enter: [], leave: [] }),
          d = eT((e, n, r) => {
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
          f = eT((e, t, n) => {
            Promise.all(c.current[t].splice(0).map(([e, t]) => t))
              .then(() => {
                var e;
                null == (e = s.current.shift()) || e();
              })
              .then(() => n(t));
          });
        return (0, lT.useMemo)(
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
      lO.displayName = "NestingContext";
      var lM = lT.Fragment,
        lD = eV(function (e, t) {
          let { show: n, appear: r = !1, unmount: o = !0, ...l } = e,
            i = (0, lT.useRef)(null),
            a = tb(...(lC(e) ? [i, t] : null === t ? [] : [t]));
          oN();
          let s = oC();
          if ((void 0 === n && null !== s && (n = (1 & s) == 1), void 0 === n))
            throw Error(
              "A <Transition /> is used but it is missing a `show={true | false}` prop.",
            );
          let [u, c] = (0, lT.useState)(n ? "visible" : "hidden"),
            d = lF(() => {
              n || c("hidden");
            }),
            [f, p] = (0, lT.useState)(!0),
            v = (0, lT.useRef)([n]);
          eP(() => {
            !1 !== f &&
              v.current[v.current.length - 1] !== n &&
              (v.current.push(n), p(!1));
          }, [v, n]);
          let m = (0, lT.useMemo)(
            () => ({ show: n, appear: r, initial: f }),
            [n, r, f],
          );
          eP(() => {
            n ? c("visible") : lk(d) || null === i.current || c("hidden");
          }, [n, d]);
          let h = { unmount: o },
            b = eT(() => {
              var t;
              (f && p(!1), null == (t = e.beforeEnter) || t.call(e));
            }),
            g = eT(() => {
              var t;
              (f && p(!1), null == (t = e.beforeLeave) || t.call(e));
            }),
            y = eN();
          return lT.default.createElement(
            lO.Provider,
            { value: d },
            lT.default.createElement(
              lR.Provider,
              { value: m },
              y({
                ourProps: {
                  ...h,
                  as: lT.Fragment,
                  children: lT.default.createElement(lA, {
                    ref: a,
                    ...h,
                    ...l,
                    beforeEnter: b,
                    beforeLeave: g,
                  }),
                },
                theirProps: {},
                defaultTag: lT.Fragment,
                features: 1,
                visible: "visible" === u,
                name: "Transition",
              }),
            ),
          );
        }),
        lA = eV(function (e, t) {
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
            [b, g] = (0, lT.useState)(null),
            y = (0, lT.useRef)(null),
            x = lC(e),
            E = tb(...(x ? [y, t, g] : null === t ? [] : [t])),
            w = null == (n = h.unmount) || n ? 0 : 1,
            {
              show: S,
              appear: P,
              initial: I,
            } = (function () {
              let e = (0, lT.useContext)(lR);
              if (null === e)
                throw Error(
                  "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.",
                );
              return e;
            })(),
            [T, C] = (0, lT.useState)(S ? "visible" : "hidden"),
            R = (function () {
              let e = (0, lT.useContext)(lO);
              if (null === e)
                throw Error(
                  "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.",
                );
              return e;
            })(),
            { register: O, unregister: k } = R;
          (eP(() => O(y), [O, y]),
            eP(() => {
              if (1 === w && y.current)
                return S && "visible" !== T
                  ? void C("visible")
                  : e_(T, { hidden: () => k(y), visible: () => O(y) });
            }, [T, y, O, k, S, w]));
          let F = oN();
          eP(() => {
            if (x && F && "visible" === T && null === y.current)
              throw Error(
                "Did you forget to passthrough the `ref` to the actual DOM node?",
              );
          }, [y, T, F, x]);
          let M = I && !P,
            D = P && S && I,
            A = (0, lT.useRef)(!1),
            L = lF(() => {
              A.current || (C("hidden"), k(y));
            }, R),
            _ = eT((e) => {
              ((A.current = !0),
                L.onStart(y, e ? "enter" : "leave", (e) => {
                  "enter" === e
                    ? null == l || l()
                    : "leave" === e && (null == a || a());
                }));
            }),
            N = eT((e) => {
              let t = e ? "enter" : "leave";
              ((A.current = !1),
                L.onStop(y, t, (e) => {
                  "enter" === e
                    ? null == i || i()
                    : "leave" === e && (null == s || s());
                }),
                "leave" !== t || lk(L) || (C("hidden"), k(y)));
            });
          (0, lT.useEffect)(() => {
            (x && o) || (_(S), N(S));
          }, [S, x, o]);
          let [, B] = n2(!(!o || !x || !F || M), b, S, { start: _, end: N }),
            j = ez({
              ref: E,
              className:
                (null ==
                (r = eL(
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
              ...n4(B),
            }),
            H = 0;
          ("visible" === T && (H |= 1),
            "hidden" === T && (H |= 2),
            S && "hidden" === T && (H |= 8),
            S || "visible" !== T || (H |= 4));
          let $ = eN();
          return lT.default.createElement(
            lO.Provider,
            { value: L },
            lT.default.createElement(
              oR,
              { value: H },
              $({
                ourProps: j,
                theirProps: h,
                defaultTag: lM,
                features: 1,
                visible: "visible" === T,
                name: "Transition.Child",
              }),
            ),
          );
        }),
        lL = eV(function (e, t) {
          let n = null !== (0, lT.useContext)(lR),
            r = null !== oC();
          return lT.default.createElement(
            lT.default.Fragment,
            null,
            !n && r
              ? lT.default.createElement(lD, { ref: t, ...e })
              : lT.default.createElement(lA, { ref: t, ...e }),
          );
        }),
        l_ = Object.assign(lD, { Child: lL, Root: lD }),
        lN = {
          0: (e, t) => (e.titleId === t.id ? e : { ...e, titleId: t.id }),
        },
        lB = (0, lc.createContext)(null);
      function lj(e) {
        let t = (0, lc.useContext)(lB);
        if (null === t) {
          let t = Error(`<${e} /> is missing a parent <Dialog /> component.`);
          throw (Error.captureStackTrace && Error.captureStackTrace(t, lj), t);
        }
        return t;
      }
      function lH(e, t) {
        return e_(t.type, lN, e, t);
      }
      lB.displayName = "DialogContext";
      var l$,
        lV,
        lz,
        lW = eV(function (e, t) {
          let n = (0, eZ.useId)(),
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
            f = (0, lc.useRef)(!1);
          a =
            "dialog" === a || "alertdialog" === a
              ? a
              : (f.current ||
                  ((f.current = !0),
                  console.warn(
                    `Invalid role [${a}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`,
                  )),
                "dialog");
          let p = oC();
          void 0 === o && null !== p && (o = (1 & p) == 1);
          let v = (0, lc.useRef)(null),
            m = tb(v, t),
            h = nB(v.current),
            b = +!o,
            [g, y] = (0, lc.useReducer)(lH, {
              titleId: null,
              descriptionId: null,
              panelRef: (0, lc.createRef)(),
            }),
            x = eT(() => l(!1)),
            E = eT((e) => y({ type: 0, id: e })),
            w = !!oN() && 0 === b,
            [S, P] = oK(),
            I = lh(),
            { resolveContainers: T } = lp({
              mainTreeNode: I,
              portals: S,
              defaultContainers: [
                {
                  get current() {
                    var C;
                    return null != (C = g.panelRef.current) ? C : v.current;
                  },
                },
              ],
            }),
            R = null !== p && (4 & p) == 4;
          nb(!u && !R && w, {
            allowed: eT(() => {
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
            disallowed: eT(() => {
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
          let O = nu.get(null);
          eP(() => {
            if (w) return (O.actions.push(r), () => O.actions.pop(r));
          }, [O, r, w]);
          let k = nd(
            O,
            (0, lc.useCallback)((e) => O.selectors.isTop(e, r), [O, r]),
          );
          (n_(k, T, (e) => {
            (e.preventDefault(), x());
          }),
            (function (
              e,
              t = "undefined" != typeof document ? document.defaultView : null,
              n,
            ) {
              let r = np(e, "escape");
              nW(t, "keydown", (e) => {
                r && (e.defaultPrevented || ("Escape" === e.key && n(e)));
              });
            })(k, null == h ? void 0 : h.defaultView, (e) => {
              (e.preventDefault(),
                e.stopPropagation(),
                document.activeElement &&
                  "blur" in document.activeElement &&
                  "function" == typeof document.activeElement.blur &&
                  document.activeElement.blur(),
                x());
            }),
            nX(!u && !R && w, h, T),
            ny(w, v, x));
          let [F, M] = tx(),
            D = (0, lc.useMemo)(
              () => [
                { dialogState: b, close: x, setTitleId: E, unmount: c },
                g,
              ],
              [b, x, E, c, g],
            ),
            A = eO({ open: 0 === b }),
            L = {
              ref: m,
              id: r,
              role: a,
              tabIndex: -1,
              "aria-modal": u ? void 0 : 0 === b || void 0,
              "aria-labelledby": g.titleId,
              "aria-describedby": F,
              unmount: c,
            },
            _ = !(function () {
              var e;
              let [t] = (0, ld.useState)(() =>
                  "undefined" != typeof window &&
                  "function" == typeof window.matchMedia
                    ? window.matchMedia("(pointer: coarse)")
                    : null,
                ),
                [n, r] = (0, ld.useState)(
                  null != (e = null == t ? void 0 : t.matches) && e,
                );
              return (
                eP(() => {
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
            N = 0;
          w && !u && ((N |= 8), (N |= 2), s && (N |= 16), _ && (N |= 1));
          let B = eN();
          return lc.default.createElement(
            oO,
            null,
            lc.default.createElement(
              oH,
              { force: !0 },
              lc.default.createElement(
                oY,
                null,
                lc.default.createElement(
                  lB.Provider,
                  { value: D },
                  lc.default.createElement(
                    oq,
                    { target: v },
                    lc.default.createElement(
                      oH,
                      { force: !1 },
                      lc.default.createElement(
                        M,
                        { slot: A },
                        lc.default.createElement(
                          P,
                          null,
                          lc.default.createElement(
                            lP,
                            {
                              initialFocus: i,
                              initialFocusFallback: v,
                              containers: T,
                              features: N,
                            },
                            lc.default.createElement(
                              tD,
                              { value: x },
                              B({
                                ourProps: L,
                                theirProps: d,
                                slot: A,
                                defaultTag: lG,
                                features: lK,
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
        lG = "div",
        lK = 3,
        lU = eV(function (e, t) {
          let { transition: n = !1, open: r, ...o } = e,
            l = oC(),
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
            ? lc.default.createElement(
                lm,
                null,
                lc.default.createElement(
                  l_,
                  { show: r, transition: n, unmount: o.unmount },
                  lc.default.createElement(lW, { ref: t, ...o }),
                ),
              )
            : lc.default.createElement(
                lm,
                null,
                lc.default.createElement(lW, { ref: t, open: r, ...o }),
              );
        }),
        lq = eV(function (e, t) {
          let n = (0, eZ.useId)(),
            {
              id: r = `headlessui-dialog-panel-${n}`,
              transition: o = !1,
              ...l
            } = e,
            [{ dialogState: i, unmount: a }, s] = lj("Dialog.Panel"),
            u = tb(t, s.panelRef),
            c = eO({ open: 0 === i }),
            d = eT((e) => {
              e.stopPropagation();
            }),
            f = o ? lL : lc.Fragment,
            p = eN();
          return lc.default.createElement(
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
        lY = eV(function (e, t) {
          let { transition: n = !1, ...r } = e,
            [{ dialogState: o, unmount: l }] = lj("Dialog.Backdrop"),
            i = eO({ open: 0 === o }),
            a = n ? lL : lc.Fragment,
            s = eN();
          return lc.default.createElement(
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
        lQ = eV(function (e, t) {
          let n = (0, eZ.useId)(),
            { id: r = `headlessui-dialog-title-${n}`, ...o } = e,
            [{ dialogState: l, setTitleId: i }] = lj("Dialog.Title"),
            a = tb(t);
          (0, lc.useEffect)(() => (i(r), () => i(null)), [r, i]);
          let s = eO({ open: 0 === l });
          return eN()({
            ourProps: { ref: a, id: r },
            theirProps: o,
            slot: s,
            defaultTag: "h2",
            name: "Dialog.Title",
          });
        }),
        lX = tE,
        lJ = Object.assign(lU, { Panel: lq, Title: lQ, Description: tE }),
        lZ = d(n(36439), 1),
        l0 =
          null != (lz = d(n(36439), 1).default.startTransition)
            ? lz
            : function (e) {
                e();
              },
        l1 = {
          0: (e) => ({
            ...e,
            disclosureState: e_(e.disclosureState, { 0: 1, 1: 0 }),
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
        l3 = (0, lZ.createContext)(null);
      function l4(e) {
        let t = (0, lZ.useContext)(l3);
        if (null === t) {
          let t = Error(
            `<${e} /> is missing a parent <Disclosure /> component.`,
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, l4), t);
        }
        return t;
      }
      l3.displayName = "DisclosureContext";
      var l2 = (0, lZ.createContext)(null);
      l2.displayName = "DisclosureAPIContext";
      var l6 = (0, lZ.createContext)(null);
      function l9(e, t) {
        return e_(t.type, l1, e, t);
      }
      l6.displayName = "DisclosurePanelContext";
      var l5 = lZ.Fragment,
        l8 = eV(function (e, t) {
          let { defaultOpen: n = !1, ...r } = e,
            o = (0, lZ.useRef)(null),
            l = tb(
              t,
              th(
                (e) => {
                  o.current = e;
                },
                void 0 === e.as || eG(e.as),
              ),
            ),
            i = (0, lZ.useReducer)(l9, {
              disclosureState: +!n,
              buttonElement: null,
              panelElement: null,
              buttonId: null,
              panelId: null,
            }),
            [{ disclosureState: a, buttonId: s }, u] = i,
            c = eT((e) => {
              u({ type: 1 });
              let t = ep(o.current);
              if (!t || !s) return;
              let n = e
                ? ts(e)
                  ? e
                  : "current" in e && ts(e.current)
                    ? e.current
                    : t.getElementById(s)
                : t.getElementById(s);
              null == n || n.focus();
            }),
            d = (0, lZ.useMemo)(() => ({ close: c }), [c]),
            f = eO({ open: 0 === a, close: c }),
            p = eN();
          return lZ.default.createElement(
            l3.Provider,
            { value: i },
            lZ.default.createElement(
              l2.Provider,
              { value: d },
              lZ.default.createElement(
                tD,
                { value: c },
                lZ.default.createElement(
                  oR,
                  { value: e_(a, { 0: 1, 1: 2 }) },
                  p({
                    ourProps: { ref: l },
                    theirProps: r,
                    slot: f,
                    defaultTag: l5,
                    name: "Disclosure",
                  }),
                ),
              ),
            ),
          );
        }),
        l7 = eV(function (e, t) {
          let n = (0, eZ.useId)(),
            {
              id: r = `headlessui-disclosure-button-${n}`,
              disabled: o = !1,
              autoFocus: l = !1,
              ...i
            } = e,
            [a, s] = l4("Disclosure.Button"),
            u = (0, lZ.useContext)(l6),
            c = null !== u && u === a.panelId,
            d = tb(
              (0, lZ.useRef)(null),
              t,
              eT((e) => {
                if (!c) return s({ type: 4, element: e });
              }),
            );
          (0, lZ.useEffect)(() => {
            if (!c)
              return (
                s({ type: 2, buttonId: r }),
                () => {
                  s({ type: 2, buttonId: null });
                }
              );
          }, [r, s, c]);
          let f = eT((e) => {
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
            p = eT((e) => {
              " " === e.key && e.preventDefault();
            }),
            v = eT((e) => {
              var t;
              tf(e.currentTarget) ||
                o ||
                (c
                  ? (s({ type: 0 }), null == (t = a.buttonElement) || t.focus())
                  : s({ type: 0 }));
            }),
            { isFocusVisible: m, focusProps: h } = ec({ autoFocus: l }),
            { isHovered: b, hoverProps: g } = es({ isDisabled: o }),
            { pressed: y, pressProps: x } = eC({ disabled: o }),
            E = eO({
              open: 0 === a.disclosureState,
              hover: b,
              active: y,
              disabled: o,
              focus: m,
              autofocus: l,
            }),
            w = nU(e, a.buttonElement),
            S = c
              ? e$(
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
              : e$(
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
          return eN()({
            ourProps: S,
            theirProps: i,
            slot: E,
            defaultTag: "button",
            name: "Disclosure.Button",
          });
        }),
        ie = eV(function (e, t) {
          let n = (0, eZ.useId)(),
            {
              id: r = `headlessui-disclosure-panel-${n}`,
              transition: o = !1,
              ...l
            } = e,
            [i, a] = l4("Disclosure.Panel"),
            { close: s } = (function e(t) {
              let n = (0, lZ.useContext)(l2);
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
            [u, c] = (0, lZ.useState)(null),
            d = tb(
              t,
              eT((e) => {
                l0(() => a({ type: 5, element: e }));
              }),
              c,
            );
          (0, lZ.useEffect)(
            () => (
              a({ type: 3, panelId: r }),
              () => {
                a({ type: 3, panelId: null });
              }
            ),
            [r, a],
          );
          let f = oC(),
            [p, v] = n2(
              o,
              u,
              null !== f ? (1 & f) == 1 : 0 === i.disclosureState,
            ),
            m = eO({ open: 0 === i.disclosureState, close: s }),
            h = { ref: d, id: r, ...n4(v) },
            b = eN();
          return lZ.default.createElement(
            oO,
            null,
            lZ.default.createElement(
              l6.Provider,
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
        it = Object.assign(l8, { Button: l7, Panel: ie }),
        ir = d(n(36439), 1),
        io = eV(function (e, t) {
          let n = `headlessui-control-${(0, eZ.useId)()}`,
            [r, o] = tT(),
            [l, i] = tx(),
            a = eM(),
            { disabled: s = a || !1, ...u } = e,
            c = eO({ disabled: s }),
            d = eN();
          return ir.default.createElement(
            eD,
            { value: s },
            ir.default.createElement(
              o,
              { value: r },
              ir.default.createElement(
                i,
                { value: l },
                ir.default.createElement(
                  to,
                  { id: n },
                  d({
                    ourProps: {
                      ref: t,
                      disabled: s || void 0,
                      "aria-disabled": s || void 0,
                    },
                    theirProps: {
                      ...u,
                      children: ir.default.createElement(
                        e5,
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
        il = d(n(36439), 1),
        ii = n(36439),
        ia = "fieldset",
        is = eV(function (e, t) {
          var n;
          let r = eM(),
            { disabled: o = r || !1, ...l } = e,
            [i, a] = (function (e) {
              let t = "string" == typeof e ? e : void 0,
                [n, r] = (0, ii.useState)(t);
              return [
                null != t ? t : n,
                (0, ii.useCallback)(
                  (e) => {
                    t || (ta(e) && r(e.tagName.toLowerCase()));
                  },
                  [t],
                ),
              ];
            })(null != (n = e.as) ? n : ia),
            s = tb(t, a),
            [u, c] = tT(),
            d = eO({ disabled: o }),
            f =
              "fieldset" === i
                ? { ref: s, "aria-labelledby": u, disabled: o || void 0 }
                : {
                    ref: s,
                    role: "group",
                    "aria-labelledby": u,
                    "aria-disabled": o || void 0,
                  },
            p = eN();
          return il.default.createElement(
            eD,
            { value: o },
            il.default.createElement(
              c,
              null,
              p({
                ourProps: f,
                theirProps: l,
                slot: d,
                defaultTag: ia,
                name: "Fieldset",
              }),
            ),
          );
        }),
        iu = eV(function (e, t) {
          let n = (0, eZ.useId)(),
            r = tr(),
            o = eM(),
            {
              id: l = r || `headlessui-input-${n}`,
              disabled: i = o || !1,
              autoFocus: a = !1,
              invalid: s = !1,
              ...u
            } = e,
            c = tI(),
            d = ty(),
            { isFocused: f, focusProps: p } = ec({ autoFocus: a }),
            { isHovered: v, hoverProps: m } = es({ isDisabled: i }),
            h = e$(
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
            b = eO({
              disabled: i,
              invalid: s,
              hover: v,
              focus: f,
              autofocus: a,
            });
          return eN()({
            ourProps: h,
            theirProps: u,
            slot: b,
            defaultTag: "input",
            name: "Input",
          });
        }),
        ic = d(n(36439), 1),
        id = eV(function (e, t) {
          return ic.default.createElement(tC, { as: "div", ref: t, ...e });
        }),
        ip = d(n(36439), 1),
        iv = n(72354),
        im = n(36439),
        ih =
          /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
      function ib(e) {
        var t, n;
        let r = null != (t = e.innerText) ? t : "",
          o = e.cloneNode(!0);
        if (!ta(o)) return r;
        let l = !1;
        for (let e of o.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
          (e.remove(), (l = !0));
        let i = l ? (null != (n = o.innerText) ? n : "") : r;
        return (ih.test(i) && (i = i.replace(ih, "")), i);
      }
      function ig(e) {
        let t = (0, im.useRef)(""),
          n = (0, im.useRef)("");
        return eT(() => {
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
                    return "string" == typeof e ? e.trim() : ib(t).trim();
                  }
                  return null;
                })
                .filter(Boolean);
              if (e.length > 0) return e.join(", ");
            }
            return ib(e).trim();
          })(r)
            .trim()
            .toLowerCase();
          return ((t.current = o), (n.current = l), l);
        });
      }
      function iy(e, t = (e) => e) {
        let n =
            null !== e.activeOptionIndex
              ? e.options[e.activeOptionIndex]
              : null,
          r = nC(t(e.options.slice()), (e) => e.dataRef.current.domRef.current),
          o = n ? r.indexOf(n) : null;
        return (-1 === o && (o = null), { options: r, activeOptionIndex: o });
      }
      var ix = {
          1(e) {
            if (e.dataRef.current.disabled || 1 === e.listboxState) return e;
            let t = e.buttonElement
              ? oQ.Tracked(oX(e.buttonElement))
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
                buttonPositionState: oQ.Idle,
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
                  i = oF(t, {
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
                  o = oF(t, {
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
            let s = iy(e),
              u = oF(t, {
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
                (r = oF(e.pendingFocus, {
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
            e.pendingShouldSort ? { ...e, ...iy(e), pendingShouldSort: !1 } : e,
          11: (e) =>
            "Tracked" !== e.buttonPositionState.kind
              ? e
              : { ...e, buttonPositionState: oQ.Moved },
        },
        iE = class extends nn {
          constructor(e) {
            (super(e),
              f(this, "actions", {
                onChange: (e) => {
                  let {
                    onChange: t,
                    compare: n,
                    mode: r,
                    value: o,
                  } = this.state.dataRef.current;
                  return e_(r, {
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
                registerOption: ni(() => {
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
                unregisterOption: ni(() => {
                  let e = [];
                  return [
                    (t) => e.push(t),
                    () => {
                      this.send({ type: 7, options: e.splice(0) });
                    },
                  ];
                }),
                goToOption: ni(() => {
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
              f(this, "selectors", {
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
                t = nu.get(null);
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
                    oJ(t.buttonElement, t.buttonPositionState, () => {
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
            return new iE({
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
              buttonPositionState: oQ.Idle,
            });
          }
          reduce(e, t) {
            return e_(t.type, ix, e, t);
          }
        },
        iw = n(36439),
        iS = (0, iw.createContext)(null);
      function iP(e) {
        let t = (0, iw.useContext)(iS);
        if (null === t) {
          let t = Error(`<${e} /> is missing a parent <Listbox /> component.`);
          throw (Error.captureStackTrace && Error.captureStackTrace(t, iI), t);
        }
        return t;
      }
      function iI({ id: e, __demoMode: t = !1 }) {
        let n = (0, iw.useMemo)(() => iE.new({ id: e, __demoMode: t }), []);
        return (oL(() => n.dispose()), n);
      }
      var iT = (0, ip.createContext)(null);
      function iC(e) {
        let t = (0, ip.useContext)(iT);
        if (null === t) {
          let t = Error(`<${e} /> is missing a parent <Listbox /> component.`);
          throw (Error.captureStackTrace && Error.captureStackTrace(t, iC), t);
        }
        return t;
      }
      iT.displayName = "ListboxDataContext";
      var iR = ip.Fragment,
        iO = (0, ip.createContext)(!1),
        ik = ip.Fragment,
        iF = eV(function (e, t) {
          let n = (0, eZ.useId)(),
            r = eM(),
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
            h = tb(t),
            b = eJ(l),
            [g = p ? [] : void 0, y] = eQ(o, s, b),
            x = iI({ id: n, __demoMode: v }),
            E = (0, ip.useRef)({ static: !1, hold: !1 }),
            w = (0, ip.useRef)(new Map()),
            S = t1(u),
            P = (0, ip.useCallback)(
              (e) =>
                e_(I.mode, {
                  1: () => g.some((t) => S(t, e)),
                  0: () => S(g, e),
                }),
              [g],
            ),
            I = eO({
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
          eP(() => {
            x.state.dataRef.current = I;
          }, [I]);
          let T = nd(x, (e) => e.listboxState),
            C = nu.get(null),
            R = nd(
              C,
              (0, ip.useCallback)((e) => C.selectors.isTop(e, n), [C, n]),
            ),
            [O, k] = nd(x, (e) => [e.buttonElement, e.optionsElement]);
          n_(R, [O, k], (e, t) => {
            (x.send({ type: 1 }),
              nP(t, 1) || (e.preventDefault(), null == O || O.focus()));
          });
          let F = eO({ open: 0 === T, disabled: d, invalid: c, value: g }),
            [M, D] = tT({ inherit: !0 }),
            A = (0, ip.useCallback)(() => {
              if (void 0 !== b) return null == y ? void 0 : y(b);
            }, [y, b]),
            L = eN();
          return ip.default.createElement(
            D,
            {
              value: M,
              props: { htmlFor: null == O ? void 0 : O.id },
              slot: { open: 0 === T, disabled: d },
            },
            ip.default.createElement(
              oy,
              null,
              ip.default.createElement(
                iS.Provider,
                { value: x },
                ip.default.createElement(
                  iT.Provider,
                  { value: I },
                  ip.default.createElement(
                    oR,
                    { value: e_(T, { 0: 1, 1: 2 }) },
                    null != a &&
                      null != g &&
                      ip.default.createElement(e7, {
                        disabled: d,
                        data: { [a]: g },
                        form: i,
                        onReset: A,
                      }),
                    L({
                      ourProps: { ref: h },
                      theirProps: m,
                      slot: F,
                      defaultTag: iR,
                      name: "Listbox",
                    }),
                  ),
                ),
              ),
            ),
          );
        }),
        iM = eV(function (e, t) {
          let n = (0, eZ.useId)(),
            r = tr(),
            o = iC("Listbox.Button"),
            l = iP("Listbox.Button"),
            {
              id: i = r || `headlessui-listbox-button-${n}`,
              disabled: a = o.disabled || !1,
              autoFocus: s = !1,
              ...u
            } = e,
            c = tb(t, om(), l.actions.setButtonElement),
            d = oh(),
            [f, p, v] = nd(l, (e) => [
              e.listboxState,
              e.buttonElement,
              e.optionsElement,
            ]);
          n$(0 === f, {
            trigger: p,
            action: (0, ip.useCallback)(
              (e) => {
                if (null != p && p.contains(e.target)) return nH.Ignore;
                let t = e.target.closest(
                  '[role="option"]:not([data-disabled])',
                );
                return ta(t)
                  ? nH.Select(t)
                  : null != v && v.contains(e.target)
                    ? nH.Ignore
                    : nH.Close;
              },
              [p, v],
            ),
            close: l.actions.closeListbox,
            select: l.actions.selectActiveOption,
          });
          let m = eT((e) => {
              switch (e.key) {
                case "Enter":
                  e2(e.currentTarget);
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
            h = eT((e) => {
              " " === e.key && e.preventDefault();
            }),
            b = t9((e) => {
              var t;
              0 === l.state.listboxState
                ? ((0, iv.flushSync)(() => l.actions.closeListbox()),
                  null == (t = l.state.buttonElement) ||
                    t.focus({ preventScroll: !0 }))
                : (e.preventDefault(), l.actions.openListbox({ focus: 5 }));
            }),
            g = eT((e) => e.preventDefault()),
            y = tI([i]),
            x = ty(),
            { isFocusVisible: E, focusProps: w } = ec({ autoFocus: s }),
            { isHovered: S, hoverProps: P } = es({ isDisabled: a }),
            { pressed: I, pressProps: T } = eC({ disabled: a }),
            C = eO({
              open: 0 === f,
              active: I || 0 === f,
              disabled: a,
              invalid: o.invalid,
              value: o.value,
              hover: S,
              focus: E,
              autofocus: s,
            }),
            R = nd(l, (e) => 0 === e.listboxState),
            O = e$(
              d(),
              {
                ref: c,
                id: i,
                type: nU(e, p),
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
          return eN()({
            ourProps: O,
            theirProps: u,
            slot: C,
            defaultTag: "button",
            name: "Listbox.Button",
          });
        }),
        iD = tC,
        iA = eV(function (e, t) {
          let n = (0, eZ.useId)(),
            {
              id: r = `headlessui-listbox-options-${n}`,
              anchor: o,
              portal: l = !1,
              modal: i = !0,
              transition: a = !1,
              ...s
            } = e,
            u = ov(o),
            [c, d] = (0, ip.useState)(null);
          u && (l = !0);
          let f = iC("Listbox.Options"),
            p = iP("Listbox.Options"),
            [v, m, h, b] = nd(p, (e) => [
              e.listboxState,
              e.buttonElement,
              e.optionsElement,
              e.__demoMode,
            ]),
            g = nB(m),
            y = nB(h),
            x = oC(),
            [E, w] = n2(a, c, null !== x ? (1 & x) == 1 : 0 === v);
          (ny(E, m, p.actions.closeListbox),
            nX(!b && i && 0 === v, y),
            nb(!b && i && 0 === v, {
              allowed: (0, ip.useCallback)(() => [m, h], [m, h]),
            }));
          let S = !nd(p, p.selectors.didButtonMove) && E,
            P = oP(nd(p, p.selectors.hasFrozenValue) && !e.static, f.value),
            I = (0, ip.useCallback)((e) => f.compare(P, e), [f.compare, P]),
            T = nd(p, (e) => {
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
            [C, R] = og(
              (() => {
                if (null == u) return;
                if (null === T) return { ...u, inner: void 0 };
                let e = Array.from(f.listRef.current.values());
                return { ...u, inner: { listRef: { current: e }, index: T } };
              })(),
            ),
            O = ob(),
            k = tb(t, u ? C : null, p.actions.setOptionsElement, d),
            F = ex();
          (0, ip.useEffect)(() => {
            h &&
              0 === v &&
              (eh(h) || null == h || h.focus({ preventScroll: !0 }));
          }, [v, h]);
          let M = eT((e) => {
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
                case e_(f.orientation, {
                  vertical: "ArrowDown",
                  horizontal: "ArrowRight",
                }):
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    p.actions.goToOption({ focus: 2 })
                  );
                case e_(f.orientation, {
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
                    (0, iv.flushSync)(() => p.actions.closeListbox()),
                    null == (t = p.state.buttonElement) ||
                      t.focus({ preventScroll: !0 }));
                  return;
                case "Tab":
                  (e.preventDefault(),
                    e.stopPropagation(),
                    (0, iv.flushSync)(() => p.actions.closeListbox()),
                    nR(p.state.buttonElement, e.shiftKey ? 2 : 4));
                  break;
                default:
                  1 === e.key.length &&
                    (p.actions.search(e.key),
                    F.setTimeout(() => p.actions.clearSearch(), 350));
              }
            }),
            D = nd(p, (e) => {
              var t;
              return null == (t = e.buttonElement) ? void 0 : t.id;
            }),
            A = eO({ open: 0 === v }),
            L = e$(u ? O() : {}, {
              id: r,
              ref: k,
              "aria-activedescendant": nd(p, p.selectors.activeDescendantId),
              "aria-multiselectable": 1 === f.mode || void 0,
              "aria-labelledby": D,
              "aria-orientation": f.orientation,
              onKeyDown: M,
              role: "listbox",
              tabIndex: 0 === v ? 0 : void 0,
              style: { ...s.style, ...R, "--button-width": t2(E, m, !0).width },
              ...n4(w),
            }),
            _ = eN(),
            N = (0, ip.useMemo)(
              () => (1 === f.mode ? f : { ...f, isSelected: I }),
              [f, I],
            );
          return ip.default.createElement(
            oY,
            { enabled: !!l && (e.static || E), ownerDocument: g },
            ip.default.createElement(
              iT.Provider,
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
        iL = eV(function (e, t) {
          let n = (0, eZ.useId)(),
            {
              id: r = `headlessui-listbox-option-${n}`,
              disabled: o = !1,
              value: l,
              ...i
            } = e,
            a = !0 === (0, ip.useContext)(iO),
            s = iC("Listbox.Option"),
            u = iP("Listbox.Option"),
            c = nd(u, (e) => u.selectors.isActive(e, r)),
            d = s.isSelected(l),
            f = (0, ip.useRef)(null),
            p = ig(f),
            v = eI({
              disabled: o,
              value: l,
              domRef: f,
              get textValue() {
                return p();
              },
            }),
            m = tb(t, f, (e) => {
              e ? s.listRef.current.set(r, e) : s.listRef.current.delete(r);
            }),
            h = nd(u, (e) => u.selectors.shouldScrollIntoView(e, r));
          (eP(() => {
            if (h)
              return ey().requestAnimationFrame(() => {
                var e, t;
                null ==
                  (t = null == (e = f.current) ? void 0 : e.scrollIntoView) ||
                  t.call(e, { block: "nearest" });
              });
          }, [h, f]),
            eP(() => {
              if (!a)
                return (
                  u.actions.registerOption(r, v),
                  () => u.actions.unregisterOption(r)
                );
            }, [v, r, a]));
          let b = eT((e) => {
              if (o) return e.preventDefault();
              u.actions.selectOption(l);
            }),
            g = eT(() => {
              if (o) return u.actions.goToOption({ focus: 5 });
              u.actions.goToOption({ focus: 4, id: r });
            }),
            y = n0(),
            x = eT((e) => y.update(e)),
            E = eT((e) => {
              y.wasMoved(e) &&
                (o ||
                  (c && 0 === u.state.activationTrigger) ||
                  u.actions.goToOption({ focus: 4, id: r }, 0));
            }),
            w = eT((e) => {
              y.wasMoved(e) &&
                (o ||
                  (c &&
                    0 === u.state.activationTrigger &&
                    u.actions.goToOption({ focus: 5 })));
            }),
            S = eO({
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
            I = eN();
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
        i_ = eV(function (e, t) {
          let { options: n, placeholder: r, ...o } = e,
            l = { ref: tb(t) },
            i = iC("ListboxSelectedOption"),
            a = eO({}),
            s =
              void 0 === i.value ||
              null === i.value ||
              (1 === i.mode && Array.isArray(i.value) && 0 === i.value.length),
            u = eN();
          return ip.default.createElement(
            iO.Provider,
            { value: !0 },
            u({
              ourProps: l,
              theirProps: {
                ...o,
                children: ip.default.createElement(
                  ip.default.Fragment,
                  null,
                  r && s ? r : n,
                ),
              },
              slot: a,
              defaultTag: ik,
              name: "ListboxSelectedOption",
            }),
          );
        }),
        iN = Object.assign(iF, {
          Button: iM,
          Label: iD,
          Options: iA,
          Option: iL,
          SelectedOption: i_,
        }),
        iB = d(n(36439), 1),
        ij = n(72354);
      function iH(e, t = (e) => e) {
        let n = null !== e.activeItemIndex ? e.items[e.activeItemIndex] : null,
          r = nC(t(e.items.slice()), (e) => e.dataRef.current.domRef.current),
          o = n ? r.indexOf(n) : null;
        return (-1 === o && (o = null), { items: r, activeItemIndex: o });
      }
      var i$ = {
          1(e) {
            if (1 === e.menuState) return e;
            let t = e.buttonElement
              ? oQ.Tracked(oX(e.buttonElement))
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
                  buttonPositionState: oQ.Idle,
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
                  i = oF(t, {
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
                  o = oF(t, {
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
            let s = iH(e),
              u = oF(t, {
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
                (r = oF(e.pendingFocus, {
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
            e.pendingShouldSort ? { ...e, ...iH(e), pendingShouldSort: !1 } : e,
          10: (e) =>
            "Tracked" !== e.buttonPositionState.kind
              ? e
              : { ...e, buttonPositionState: oQ.Moved },
        },
        iV = class extends nn {
          constructor(e) {
            (super(e),
              f(this, "actions", {
                registerItem: ni(() => {
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
                unregisterItem: ni(() => {
                  let e = [];
                  return [
                    (t) => e.push(t),
                    () => this.send({ type: 6, items: e.splice(0) }),
                  ];
                }),
              }),
              f(this, "selectors", {
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
                t = nu.get(null);
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
                    oJ(t.buttonElement, t.buttonPositionState, () => {
                      this.send({ type: 10 });
                    }),
                  ));
              });
            });
          }
          static new({ id: e, __demoMode: t = !1 }) {
            return new iV({
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
              buttonPositionState: oQ.Idle,
            });
          }
          reduce(e, t) {
            return e_(t.type, i$, e, t);
          }
        },
        iz = n(36439),
        iW = (0, iz.createContext)(null);
      function iG(e) {
        let t = (0, iz.useContext)(iW);
        if (null === t) {
          let t = Error(`<${e} /> is missing a parent <Menu /> component.`);
          throw (Error.captureStackTrace && Error.captureStackTrace(t, iK), t);
        }
        return t;
      }
      function iK({ id: e, __demoMode: t = !1 }) {
        let n = (0, iz.useMemo)(() => iV.new({ id: e, __demoMode: t }), []);
        return (oL(() => n.dispose()), n);
      }
      var iU = iB.Fragment,
        iq = iB.Fragment,
        iY = eV(function (e, t) {
          let n = (0, eZ.useId)(),
            { __demoMode: r = !1, ...o } = e,
            l = iK({ id: n, __demoMode: r }),
            [i, a, s] = nd(l, (e) => [
              e.menuState,
              e.itemsElement,
              e.buttonElement,
            ]),
            u = tb(t),
            c = nu.get(null);
          n_(
            nd(
              c,
              (0, iB.useCallback)((e) => c.selectors.isTop(e, n), [c, n]),
            ),
            [s, a],
            (e, t) => {
              var n;
              (l.send({ type: 1 }),
                nP(t, 1) ||
                  (e.preventDefault(),
                  null == (n = l.state.buttonElement) || n.focus()));
            },
          );
          let d = eO({
              open: 0 === i,
              close: eT(() => {
                l.send({ type: 1 });
              }),
            }),
            f = eN();
          return iB.default.createElement(
            oy,
            null,
            iB.default.createElement(
              iW.Provider,
              { value: l },
              iB.default.createElement(
                oR,
                { value: e_(i, { 0: 1, 1: 2 }) },
                f({
                  ourProps: { ref: u },
                  theirProps: o,
                  slot: d,
                  defaultTag: iU,
                  name: "Menu",
                }),
              ),
            ),
          );
        }),
        iQ = eV(function (e, t) {
          let n = iG("Menu.Button"),
            r = (0, eZ.useId)(),
            {
              id: o = `headlessui-menu-button-${r}`,
              disabled: l = !1,
              autoFocus: i = !1,
              ...a
            } = e,
            s = (0, iB.useRef)(null),
            u = oh(),
            c = tb(
              t,
              s,
              om(),
              eT((e) => n.send({ type: 7, element: e })),
            ),
            d = eT((e) => {
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
            f = eT((e) => {
              " " === e.key && e.preventDefault();
            }),
            [p, v, m] = nd(n, (e) => [
              e.menuState,
              e.buttonElement,
              e.itemsElement,
            ]);
          n$(0 === p, {
            trigger: v,
            action: (0, iB.useCallback)(
              (e) => {
                if (null != v && v.contains(e.target)) return nH.Ignore;
                let t = e.target.closest(
                  '[role="menuitem"]:not([data-disabled])',
                );
                return ta(t)
                  ? nH.Select(t)
                  : null != m && m.contains(e.target)
                    ? nH.Ignore
                    : nH.Close;
              },
              [v, m],
            ),
            close: (0, iB.useCallback)(() => n.send({ type: 1 }), []),
            select: (0, iB.useCallback)((e) => e.click(), []),
          });
          let h = t9((e) => {
              var t;
              l ||
                (0 === p
                  ? ((0, ij.flushSync)(() => n.send({ type: 1 })),
                    null == (t = s.current) || t.focus({ preventScroll: !0 }))
                  : (e.preventDefault(),
                    n.send({ type: 0, focus: { focus: 5 }, trigger: 0 })));
            }),
            { isFocusVisible: b, focusProps: g } = ec({ autoFocus: i }),
            { isHovered: y, hoverProps: x } = es({ isDisabled: l }),
            { pressed: E, pressProps: w } = eC({ disabled: l }),
            S = eO({
              open: 0 === p,
              active: E || 0 === p,
              disabled: l,
              hover: y,
              focus: b,
              autofocus: i,
            }),
            P = e$(
              u(),
              {
                ref: c,
                id: o,
                type: nU(e, s.current),
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
          return eN()({
            ourProps: P,
            theirProps: a,
            slot: S,
            defaultTag: "button",
            name: "Menu.Button",
          });
        }),
        iX = eV(function (e, t) {
          let n = (0, eZ.useId)(),
            {
              id: r = `headlessui-menu-items-${n}`,
              anchor: o,
              portal: l = !1,
              modal: i = !0,
              transition: a = !1,
              ...s
            } = e,
            u = ov(o),
            c = iG("Menu.Items"),
            [d, f] = og(u),
            p = ob(),
            [v, m] = (0, iB.useState)(null),
            h = tb(
              t,
              u ? d : null,
              eT((e) => c.send({ type: 8, element: e })),
              m,
            ),
            [b, g] = nd(c, (e) => [e.menuState, e.buttonElement]),
            y = nB(g),
            x = nB(v);
          u && (l = !0);
          let E = oC(),
            [w, S] = n2(a, v, null !== E ? (1 & E) == 1 : 0 === b);
          ny(w, g, () => {
            c.send({ type: 1 });
          });
          let P = nd(c, (e) => e.__demoMode);
          (nX(!P && i && 0 === b, x),
            nb(!P && i && 0 === b, {
              allowed: (0, iB.useCallback)(() => [g, v], [g, v]),
            }));
          let I = !nd(c, c.selectors.didButtonMove) && w;
          ((0, iB.useEffect)(() => {
            v && 0 === b && (eh(v) || v.focus({ preventScroll: !0 }));
          }, [b, v]),
            n9(0 === b, {
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
          let T = ex(),
            C = eT((e) => {
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
                  (c.send({ type: 1 }), nI(c.state.buttonElement));
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
                    (0, ij.flushSync)(() => c.send({ type: 1 })),
                    null == (r = c.state.buttonElement) ||
                      r.focus({ preventScroll: !0 }));
                  break;
                case "Tab":
                  (e.preventDefault(),
                    e.stopPropagation(),
                    (0, ij.flushSync)(() => c.send({ type: 1 })),
                    nR(c.state.buttonElement, e.shiftKey ? 2 : 4));
                  break;
                default:
                  1 === e.key.length &&
                    (c.send({ type: 3, value: e.key }),
                    T.setTimeout(() => c.send({ type: 4 }), 350));
              }
            }),
            R = eT((e) => {
              " " === e.key && e.preventDefault();
            }),
            O = eO({ open: 0 === b }),
            k = e$(u ? p() : {}, {
              "aria-activedescendant": nd(c, c.selectors.activeDescendantId),
              "aria-labelledby": nd(c, (e) => {
                var t;
                return null == (t = e.buttonElement) ? void 0 : t.id;
              }),
              id: r,
              onKeyDown: C,
              onKeyUp: R,
              role: "menu",
              tabIndex: 0 === b ? 0 : void 0,
              ref: h,
              style: { ...s.style, ...f, "--button-width": t2(w, g, !0).width },
              ...n4(S),
            }),
            F = eN();
          return iB.default.createElement(
            oY,
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
        iJ = eV(function (e, t) {
          let n = (0, eZ.useId)(),
            { id: r = `headlessui-menu-item-${n}`, disabled: o = !1, ...l } = e,
            i = iG("Menu.Item"),
            a = nd(i, (e) => i.selectors.isActive(e, r)),
            s = (0, iB.useRef)(null),
            u = tb(t, s),
            c = nd(i, (e) => i.selectors.shouldScrollIntoView(e, r));
          eP(() => {
            if (c)
              return ey().requestAnimationFrame(() => {
                var e, t;
                null ==
                  (t = null == (e = s.current) ? void 0 : e.scrollIntoView) ||
                  t.call(e, { block: "nearest" });
              });
          }, [c, s]);
          let d = ig(s),
            f = (0, iB.useRef)({
              disabled: o,
              domRef: s,
              get textValue() {
                return d();
              },
            });
          (eP(() => {
            f.current.disabled = o;
          }, [f, o]),
            eP(
              () => (
                i.actions.registerItem(r, f),
                () => i.actions.unregisterItem(r)
              ),
              [f, r],
            ));
          let p = eT(() => {
              i.send({ type: 1 });
            }),
            v = eT((e) => {
              if (o) return e.preventDefault();
              (i.send({ type: 1 }), nI(i.state.buttonElement));
            }),
            m = eT(() => {
              if (o) return i.send({ type: 2, focus: 5 });
              i.send({ type: 2, focus: 4, id: r });
            }),
            h = n0(),
            b = eT((e) => h.update(e)),
            g = eT((e) => {
              h.wasMoved(e) &&
                (o || a || i.send({ type: 2, focus: 4, id: r, trigger: 0 }));
            }),
            y = eT((e) => {
              h.wasMoved(e) &&
                (o ||
                  (a &&
                    0 === i.state.activationTrigger &&
                    i.send({ type: 2, focus: 5 })));
            }),
            [x, E] = tT(),
            [w, S] = tx(),
            P = eO({ active: a, focus: a, disabled: o, close: p }),
            I = eN();
          return iB.default.createElement(
            E,
            null,
            iB.default.createElement(
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
                defaultTag: iq,
                name: "Menu.Item",
              }),
            ),
          );
        }),
        iZ = eV(function (e, t) {
          let [n, r] = tT(),
            o = eN();
          return iB.default.createElement(
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
        i0 = eV(function (e, t) {
          let n = (0, eZ.useId)(),
            { id: r = `headlessui-menu-heading-${n}`, ...o } = e,
            l = tP();
          eP(() => l.register(r), [r, l.register]);
          let i = { id: r, ref: t, role: "presentation", ...l.props };
          return eN()({
            ourProps: i,
            theirProps: o,
            slot: {},
            defaultTag: "header",
            name: "Menu.Heading",
          });
        }),
        i1 = eV(function (e, t) {
          return eN()({
            ourProps: { ref: t, role: "separator" },
            theirProps: e,
            slot: {},
            defaultTag: "div",
            name: "Menu.Separator",
          });
        }),
        i3 = Object.assign(iY, {
          Button: iQ,
          Items: iX,
          Item: iJ,
          Section: iZ,
          Heading: i0,
          Separator: i1,
        }),
        i4 = d(n(36439), 1),
        i2 = {
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
        i6 = class extends nn {
          constructor(e) {
            (super(e),
              f(this, "actions", {
                close: () => this.send({ type: 1 }),
                refocusableClose: (e) => {
                  this.actions.close();
                  let t = e
                    ? ta(e)
                      ? e
                      : "current" in e && ta(e.current)
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
              f(this, "selectors", {
                isPortalled: (e) => {
                  var t;
                  if (!e.button || !e.panel) return !1;
                  let n = null != (t = ep(e.button)) ? t : document;
                  for (let t of n.querySelectorAll("body > *"))
                    if (
                      Number(null == t ? void 0 : t.contains(e.button)) ^
                      Number(null == t ? void 0 : t.contains(e.panel))
                    )
                      return !0;
                  let r = nS(n),
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
                t = nu.get(null);
              (this.on(0, () => t.actions.push(e)),
                this.on(1, () => t.actions.pop(e)));
            }
          }
          static new({ id: e, __demoMode: t = !1 }) {
            return new i6({
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
            return e_(t.type, i2, e, t);
          }
        },
        i9 = n(36439),
        i5 = (0, i9.createContext)(null);
      function i8(e) {
        let t = (0, i9.useContext)(i5);
        if (null === t) {
          let t = Error(`<${e} /> is missing a parent <Popover /> component.`);
          throw (Error.captureStackTrace && Error.captureStackTrace(t, i8), t);
        }
        return t;
      }
      var i7 = (0, i4.createContext)(null);
      function ae() {
        return (0, i4.useContext)(i7);
      }
      i7.displayName = "PopoverGroupContext";
      var at = (0, i4.createContext)(null);
      function an(e, t) {
        let n = (0, eZ.useId)(),
          {
            id: r = `headlessui-popover-backdrop-${n}`,
            transition: o = !1,
            ...l
          } = e,
          i = i8("Popover.Backdrop"),
          a = nd(
            i,
            (0, i4.useCallback)((e) => e.popoverState, []),
          ),
          [s, u] = (0, i4.useState)(null),
          c = tb(t, u),
          d = oC(),
          [f, p] = n2(o, s, null !== d ? (1 & d) == 1 : 0 === a),
          v = eT((e) => {
            if (tf(e.currentTarget)) return e.preventDefault();
            i.actions.close();
          }),
          m = eO({ open: 0 === a }),
          h = { ref: c, id: r, "aria-hidden": !0, onClick: v, ...n4(p) };
        return eN()({
          ourProps: h,
          theirProps: l,
          slot: m,
          defaultTag: "div",
          features: 3,
          visible: f,
          name: "Popover.Backdrop",
        });
      }
      at.displayName = "PopoverPanelContext";
      var ar = eV(function (e, t) {
          var n;
          let r = (0, eZ.useId)(),
            { __demoMode: o = !1, ...l } = e,
            i = (function ({ id: e, __demoMode: t = !1 }) {
              let n = (0, i9.useMemo)(
                () => i6.new({ id: e, __demoMode: t }),
                [],
              );
              return (oL(() => n.dispose()), n);
            })({ id: r, __demoMode: o }),
            a = (0, i4.useRef)(null),
            s = tb(
              t,
              th((e) => {
                a.current = e;
              }),
            ),
            [u, c, d, f, p] = nd(
              i,
              (0, i4.useCallback)(
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
              return (0, nN.useMemo)(() => ev(...e), [...e]);
            })(null != (n = a.current) ? n : c),
            m = eI(f),
            h = eI(p),
            b = (0, i4.useMemo)(
              () => ({ buttonId: m, panelId: h, close: i.actions.close }),
              [m, h, i],
            ),
            g = ae(),
            y = null == g ? void 0 : g.registerPopover,
            x = eT(() => {
              var e, t;
              let n = em(null != (e = a.current) ? e : c);
              return null !=
                (t = null == g ? void 0 : g.isFocusWithinPopoverGroup())
                ? t
                : n &&
                    ((null == c ? void 0 : c.contains(n)) ||
                      (null == d ? void 0 : d.contains(n)));
            });
          (0, i4.useEffect)(() => (null == y ? void 0 : y(b)), [y, b]);
          let [E, w] = oK(),
            S = lh(c),
            P = lp({
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
          (nW(
            v,
            "focus",
            (e) => {
              var t, n, r, o, l, a;
              e.target !== window &&
                ts(e.target) &&
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
            n_(0 === u, P.resolveContainers, (e, t) => {
              (i.actions.close(),
                nP(t, 1) || (e.preventDefault(), null == c || c.focus()));
            }));
          let I = eO({ open: 0 === u, close: i.actions.refocusableClose }),
            T = nd(
              i,
              (0, i4.useCallback)(
                (e) => e_(e.popoverState, { 0: 1, 1: 2 }),
                [],
              ),
            ),
            C = eN();
          return i4.default.createElement(
            lm,
            { node: S },
            i4.default.createElement(
              oy,
              null,
              i4.default.createElement(
                at.Provider,
                { value: null },
                i4.default.createElement(
                  i5.Provider,
                  { value: i },
                  i4.default.createElement(
                    tD,
                    { value: i.actions.refocusableClose },
                    i4.default.createElement(
                      oR,
                      { value: T },
                      i4.default.createElement(
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
        ao = eV(function (e, t) {
          let n = (0, eZ.useId)(),
            {
              id: r = `headlessui-popover-button-${n}`,
              disabled: o = !1,
              autoFocus: l = !1,
              ...i
            } = e,
            a = i8("Popover.Button"),
            [s, u, c, d, f, p, v] = nd(
              a,
              (0, i4.useCallback)(
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
            m = (0, i4.useRef)(null),
            h = `headlessui-focus-sentinel-${(0, eZ.useId)()}`,
            b = ae(),
            g = null == b ? void 0 : b.closeOthers,
            y = null !== (0, i4.useContext)(at);
          (0, i4.useEffect)(() => {
            if (!y)
              return (
                a.actions.setButtonId(r),
                () => a.actions.setButtonId(null)
              );
          }, [y, r, a]);
          let [x] = (0, i4.useState)(() => Symbol()),
            E = tb(
              m,
              t,
              om(),
              eT((e) => {
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
            w = tb(m, t),
            S = eT((e) => {
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
                    let o = em(m.current);
                    if (o && !m.current.contains(o)) return;
                    (e.preventDefault(),
                      e.stopPropagation(),
                      a.actions.close());
                }
            }),
            P = eT((e) => {
              y || (" " === e.key && e.preventDefault());
            }),
            I = eT((e) => {
              var t, n;
              tf(e.currentTarget) ||
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
            T = eT((e) => {
              (e.preventDefault(), e.stopPropagation());
            }),
            { isFocusVisible: C, focusProps: R } = ec({ autoFocus: l }),
            { isHovered: O, hoverProps: k } = es({ isDisabled: o }),
            { pressed: F, pressProps: M } = eC({ disabled: o }),
            D = 0 === s,
            A = eO({
              open: D,
              active: F || D,
              disabled: o,
              hover: O,
              focus: C,
              autofocus: l,
            }),
            L = nU(e, c),
            _ = y
              ? e$(
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
              : e$(
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
            N = lE(),
            B = eT(() => {
              if (!ta(a.state.panel)) return;
              let e = a.state.panel;
              0 === e_(N.current, { 0: () => nO(e, 1), 1: () => nO(e, 8) }) &&
                nO(
                  nS(ev(a.state.button)).filter(
                    (e) => "true" !== e.dataset.headlessuiFocusGuard,
                  ),
                  e_(N.current, { 0: 4, 1: 2 }),
                  { relativeTo: a.state.button },
                );
            }),
            j = eN();
          return i4.default.createElement(
            i4.default.Fragment,
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
              i4.default.createElement(e6, {
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
        al = eV(an),
        ai = eV(an),
        aa = eV(function (e, t) {
          let n = (0, eZ.useId)(),
            {
              id: r = `headlessui-popover-panel-${n}`,
              focus: o = !1,
              anchor: l,
              portal: i = !1,
              modal: a = !1,
              transition: s = !1,
              ...u
            } = e,
            c = i8("Popover.Panel"),
            d = nd(c, c.selectors.isPortalled),
            [f, p, v, m, h] = nd(
              c,
              (0, i4.useCallback)(
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
            y = (0, i4.useRef)(null),
            x = ov(l),
            [E, w] = og(x),
            S = ob();
          x && (i = !0);
          let [P, I] = (0, i4.useState)(null),
            T = tb(y, t, x ? E : null, c.actions.setPanel, I),
            C = nB(p),
            R = nB(y.current);
          eP(
            () => (c.actions.setPanelId(r), () => c.actions.setPanelId(null)),
            [r, c],
          );
          let O = oC(),
            [k, F] = n2(s, P, null !== O ? (1 & O) == 1 : 0 === f);
          (ny(k, p, c.actions.close), nX(!v && a && k, R));
          let M = eT((e) => {
            var t;
            if ("Escape" === e.key) {
              if (0 !== c.state.popoverState || !y.current) return;
              let n = em(y.current);
              if (n && !y.current.contains(n)) return;
              (e.preventDefault(),
                e.stopPropagation(),
                c.actions.close(),
                null == (t = c.state.button) || t.focus());
            }
          });
          ((0, i4.useEffect)(() => {
            var t;
            e.static ||
              (1 === f &&
                (null == (t = e.unmount) || t) &&
                c.actions.setPanel(null));
          }, [f, e.unmount, e.static, c]),
            (0, i4.useEffect)(() => {
              if (v || !o || 0 !== f || !y.current) return;
              let e = em(y.current);
              y.current.contains(e) || nO(y.current, 1);
            }, [v, o, y.current, f]));
          let D = eO({ open: 0 === f, close: c.actions.refocusableClose }),
            A = e$(x ? S() : {}, {
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
              style: { ...u.style, ...w, "--button-width": t2(k, p, !0).width },
              ...n4(F),
            }),
            L = lE(),
            _ = eT(() => {
              let e = y.current;
              e &&
                e_(L.current, {
                  0: () => {
                    var t;
                    0 === nO(e, 1) &&
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
            N = eT(() => {
              let e = y.current;
              e &&
                e_(L.current, {
                  0: () => {
                    var e;
                    if (!c.state.button) return;
                    let t = nS(
                        null != (e = ev(c.state.button)) ? e : document.body,
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
                    nO(o, 1, { sorted: !1 });
                  },
                  1: () => {
                    var t;
                    0 === nO(e, 2) &&
                      (null == (t = c.state.button) || t.focus());
                  },
                });
            }),
            B = eN();
          return i4.default.createElement(
            oO,
            null,
            i4.default.createElement(
              at.Provider,
              { value: r },
              i4.default.createElement(
                tD,
                { value: c.actions.refocusableClose },
                i4.default.createElement(
                  oY,
                  { enabled: !!i && (e.static || k), ownerDocument: C },
                  k &&
                    d &&
                    i4.default.createElement(e6, {
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
                    i4.default.createElement(e6, {
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
        as = eV(function (e, t) {
          let n = (0, i4.useRef)(null),
            r = tb(n, t),
            [o, l] = (0, i4.useState)([]),
            i = eT((e) => {
              l((t) => {
                let n = t.indexOf(e);
                if (-1 !== n) {
                  let e = t.slice();
                  return (e.splice(n, 1), e);
                }
                return t;
              });
            }),
            a = eT((e) => (l((t) => [...t, e]), () => i(e))),
            s = eT(() => {
              var e;
              let t = ev(n.current);
              if (!t) return !1;
              let r = em(n.current);
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
            u = eT((e) => {
              for (let t of o) t.buttonId.current !== e && t.close();
            }),
            c = (0, i4.useMemo)(
              () => ({
                registerPopover: a,
                unregisterPopover: i,
                isFocusWithinPopoverGroup: s,
                closeOthers: u,
              }),
              [a, i, s, u],
            ),
            d = eO({}),
            f = eN();
          return i4.default.createElement(
            lm,
            null,
            i4.default.createElement(
              i7.Provider,
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
        au = Object.assign(ar, {
          Button: ao,
          Backdrop: ai,
          Overlay: al,
          Panel: aa,
          Group: as,
        }),
        ac = d(n(36439), 1),
        ad = {
          0(e, t) {
            let n = [
              ...e.options,
              { id: t.id, element: t.element, propsRef: t.propsRef },
            ];
            return { ...e, options: nC(n, (e) => e.element.current) };
          },
          1(e, t) {
            let n = e.options.slice(),
              r = e.options.findIndex((e) => e.id === t.id);
            return -1 === r ? e : (n.splice(r, 1), { ...e, options: n });
          },
        },
        af = (0, ac.createContext)(null);
      function ap(e) {
        let t = (0, ac.useContext)(af);
        if (null === t) {
          let t = Error(
            `<${e} /> is missing a parent <RadioGroup /> component.`,
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, ap), t);
        }
        return t;
      }
      af.displayName = "RadioGroupDataContext";
      var av = (0, ac.createContext)(null);
      function am(e) {
        let t = (0, ac.useContext)(av);
        if (null === t) {
          let t = Error(
            `<${e} /> is missing a parent <RadioGroup /> component.`,
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, am), t);
        }
        return t;
      }
      function ah(e, t) {
        return e_(t.type, ad, e, t);
      }
      av.displayName = "RadioGroupActionsContext";
      var ab = eV(function (e, t) {
          let n = (0, eZ.useId)(),
            r = eM(),
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
            v = t1(u),
            [m, h] = (0, ac.useReducer)(ah, { options: [] }),
            b = m.options,
            [g, y] = tT(),
            [x, E] = tx(),
            w = (0, ac.useRef)(null),
            S = tb(w, t),
            P = eJ(d),
            [I, T] = eQ(l, s, P),
            C = (0, ac.useMemo)(
              () => b.find((e) => !e.propsRef.current.disabled),
              [b],
            ),
            R = (0, ac.useMemo)(
              () => b.some((e) => v(e.propsRef.current.value, I)),
              [b, I],
            ),
            O = eT((e) => {
              var t;
              if (c || v(e, I)) return !1;
              let n =
                null == (t = b.find((t) => v(t.propsRef.current.value, e)))
                  ? void 0
                  : t.propsRef.current;
              return (null == n || !n.disabled) && (null == T || T(e), !0);
            }),
            k = eT((e) => {
              if (!w.current) return;
              let t = b
                .filter((e) => !1 === e.propsRef.current.disabled)
                .map((e) => e.element.current);
              switch (e.key) {
                case "Enter":
                  e2(e.currentTarget);
                  break;
                case "ArrowLeft":
                case "ArrowUp":
                  if (
                    (e.preventDefault(), e.stopPropagation(), 2 === nO(t, 18))
                  ) {
                    let e = b.find((e) => eh(e.element.current));
                    e && O(e.propsRef.current.value);
                  }
                  break;
                case "ArrowRight":
                case "ArrowDown":
                  if (
                    (e.preventDefault(), e.stopPropagation(), 2 === nO(t, 20))
                  ) {
                    let e = b.find((e) => eh(e.element.current));
                    e && O(e.propsRef.current.value);
                  }
                  break;
                case " ": {
                  (e.preventDefault(), e.stopPropagation());
                  let t = b.find((e) => eh(e.element.current));
                  t && O(t.propsRef.current.value);
                }
              }
            }),
            F = eT(
              (e) => (h({ type: 0, ...e }), () => h({ type: 1, id: e.id })),
            ),
            M = (0, ac.useMemo)(
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
            D = (0, ac.useMemo)(
              () => ({ registerOption: F, change: O }),
              [F, O],
            ),
            A = eO({ value: I }),
            L = (0, ac.useCallback)(() => {
              if (void 0 !== P) return O(P);
            }, [O, P]),
            _ = eN();
          return ac.default.createElement(
            E,
            { name: "RadioGroup.Description" },
            ac.default.createElement(
              y,
              { name: "RadioGroup.Label" },
              ac.default.createElement(
                av.Provider,
                { value: D },
                ac.default.createElement(
                  af.Provider,
                  { value: M },
                  null != a &&
                    ac.default.createElement(e7, {
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
        ag = eV(function (e, t) {
          var n;
          let r = ap("RadioGroup.Option"),
            o = am("RadioGroup.Option"),
            l = (0, eZ.useId)(),
            {
              id: i = `headlessui-radiogroup-option-${l}`,
              value: a,
              disabled: s = r.disabled || !1,
              autoFocus: u = !1,
              ...c
            } = e,
            d = (0, ac.useRef)(null),
            f = tb(d, t),
            [p, v] = tT(),
            [m, h] = tx(),
            b = eI({ value: a, disabled: s });
          eP(
            () => o.registerOption({ id: i, element: d, propsRef: b }),
            [i, o, d, b],
          );
          let g = eT((e) => {
              var t;
              if (tf(e.currentTarget)) return e.preventDefault();
              o.change(a) && (null == (t = d.current) || t.focus());
            }),
            y = (null == (n = r.firstOption) ? void 0 : n.id) === i,
            { isFocusVisible: x, focusProps: E } = ec({ autoFocus: u }),
            { isHovered: w, hoverProps: S } = es({ isDisabled: s }),
            P = r.compare(r.value, a),
            I = e$(
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
            T = eO({
              checked: P,
              disabled: s,
              active: x,
              hover: w,
              focus: x,
              autofocus: u,
            }),
            C = eN();
          return ac.default.createElement(
            h,
            { name: "RadioGroup.Description" },
            ac.default.createElement(
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
        ay = eV(function (e, t) {
          var n;
          let r = ap("Radio"),
            o = am("Radio"),
            l = (0, eZ.useId)(),
            i = tr(),
            a = eM(),
            {
              id: s = i || `headlessui-radio-${l}`,
              value: u,
              disabled: c = r.disabled || a || !1,
              autoFocus: d = !1,
              ...f
            } = e,
            p = (0, ac.useRef)(null),
            v = tb(p, t),
            m = tI(),
            h = ty(),
            b = eI({ value: u, disabled: c });
          eP(
            () => o.registerOption({ id: s, element: p, propsRef: b }),
            [s, o, p, b],
          );
          let g = eT((e) => {
              var t;
              if (tf(e.currentTarget)) return e.preventDefault();
              o.change(u) && (null == (t = p.current) || t.focus());
            }),
            { isFocusVisible: y, focusProps: x } = ec({ autoFocus: d }),
            { isHovered: E, hoverProps: w } = es({ isDisabled: c }),
            S = (null == (n = r.firstOption) ? void 0 : n.id) === s,
            P = r.compare(r.value, u),
            I = e$(
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
            T = eO({
              checked: P,
              disabled: c,
              hover: E,
              focus: y,
              autofocus: d,
            });
          return eN()({
            ourProps: I,
            theirProps: f,
            slot: T,
            defaultTag: "span",
            name: "Radio",
          });
        }),
        ax = tC,
        aE = tE,
        aw = Object.assign(ab, {
          Option: ag,
          Radio: ay,
          Label: ax,
          Description: aE,
        }),
        aS = eV(function (e, t) {
          let n = (0, eZ.useId)(),
            r = tr(),
            o = eM(),
            {
              id: l = r || `headlessui-select-${n}`,
              disabled: i = o || !1,
              invalid: a = !1,
              autoFocus: s = !1,
              ...u
            } = e,
            c = tI(),
            d = ty(),
            { isFocusVisible: f, focusProps: p } = ec({ autoFocus: s }),
            { isHovered: v, hoverProps: m } = es({ isDisabled: i }),
            { pressed: h, pressProps: b } = eC({ disabled: i }),
            g = e$(
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
            y = eO({
              disabled: i,
              invalid: a,
              hover: v,
              focus: f,
              active: h,
              autofocus: s,
            });
          return eN()({
            ourProps: g,
            theirProps: u,
            slot: y,
            defaultTag: "select",
            name: "Select",
          });
        }),
        aP = d(n(36439), 1),
        aI = (0, aP.createContext)(null);
      aI.displayName = "GroupContext";
      var aT = aP.Fragment,
        aC = eV(function (e, t) {
          var n;
          let r = (0, eZ.useId)(),
            o = tr(),
            l = eM(),
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
            h = (0, aP.useContext)(aI),
            [b, g] = (0, aP.useState)(null),
            y = tb((0, aP.useRef)(null), t, null === h ? null : h.setSwitch, g),
            x = eJ(u),
            [E, w] = eQ(s, c, null != x && x),
            S = ex(),
            [P, I] = (0, aP.useState)(!1),
            T = eT(() => {
              (I(!0),
                null == w || w(!E),
                S.nextFrame(() => {
                  I(!1);
                }));
            }),
            C = eT((e) => {
              if (tf(e.currentTarget)) return e.preventDefault();
              (e.preventDefault(), T());
            }),
            R = eT((e) => {
              " " === e.key
                ? (e.preventDefault(), T())
                : "Enter" === e.key && e2(e.currentTarget);
            }),
            O = eT((e) => e.preventDefault()),
            k = tI(),
            F = ty(),
            { isFocusVisible: M, focusProps: D } = ec({ autoFocus: v }),
            { isHovered: A, hoverProps: L } = es({ isDisabled: a }),
            { pressed: _, pressProps: N } = eC({ disabled: a }),
            B = eO({
              checked: E,
              disabled: a,
              hover: A,
              focus: M,
              active: _,
              autofocus: v,
              changing: P,
            }),
            j = e$(
              {
                id: i,
                ref: y,
                role: "switch",
                type: nU(e, b),
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
            H = (0, aP.useCallback)(() => {
              if (void 0 !== x) return null == w ? void 0 : w(x);
            }, [w, x]),
            $ = eN();
          return aP.default.createElement(
            aP.default.Fragment,
            null,
            null != d &&
              aP.default.createElement(e7, {
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
        aR = function (e) {
          var t;
          let [n, r] = (0, aP.useState)(null),
            [o, l] = tT(),
            [i, a] = tx(),
            s = (0, aP.useMemo)(() => ({ switch: n, setSwitch: r }), [n, r]),
            u = eN();
          return aP.default.createElement(
            a,
            { name: "Switch.Description", value: i },
            aP.default.createElement(
              l,
              {
                name: "Switch.Label",
                value: o,
                props: {
                  htmlFor: null == (t = s.switch) ? void 0 : t.id,
                  onClick(e) {
                    n &&
                      (tc(e.currentTarget) && e.preventDefault(),
                      n.click(),
                      n.focus({ preventScroll: !0 }));
                  },
                },
              },
              aP.default.createElement(
                aI.Provider,
                { value: s },
                u({
                  ourProps: {},
                  theirProps: e,
                  slot: {},
                  defaultTag: aT,
                  name: "Switch.Group",
                }),
              ),
            ),
          );
        },
        aO = tC,
        ak = tE,
        aF = Object.assign(aC, { Group: aR, Label: aO, Description: ak }),
        aM = d(n(36439), 1),
        aD = d(n(36439), 1);
      function aA({ onFocus: e }) {
        let [t, n] = (0, aD.useState)(!0),
          r = ly();
        return t
          ? aD.default.createElement(e6, {
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
      var aL = d(n(36439), 1),
        a_ = aL.createContext(null);
      function aN({ children: e }) {
        let t = aL.useRef({
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
        return aL.createElement(a_.Provider, { value: t }, e);
      }
      function aB(e) {
        let t = aL.useContext(a_);
        if (!t)
          throw Error("You must wrap your component in a <StableCollection>");
        let n = aL.useId(),
          [r, o] = t.current.get(e, n);
        return (aL.useEffect(() => o, []), r);
      }
      var aj = {
          0(e, t) {
            var n;
            let r = nC(e.tabs, (e) => e.current),
              o = nC(e.panels, (e) => e.current),
              l = r.filter((e) => {
                var t;
                return !(null != (t = e.current) && t.hasAttribute("disabled"));
              }),
              i = { ...e, tabs: r, panels: o };
            if (t.index < 0 || t.index > r.length - 1) {
              let n = e_(Math.sign(t.index - e.selectedIndex), {
                [-1]: () => 1,
                0: () =>
                  e_(Math.sign(t.index), {
                    [-1]: () => 0,
                    0: () => 0,
                    1: () => 1,
                  }),
                1: () => 0,
              });
              if (0 === l.length) return i;
              let o = e_(n, {
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
              r = nC([...e.tabs, t.tab], (e) => e.current),
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
              : { ...e, panels: nC([...e.panels, t.panel], (e) => e.current) },
          4: (e, t) => ({
            ...e,
            panels: e.panels.filter((e) => e !== t.panel),
          }),
        },
        aH = (0, aM.createContext)(null);
      function a$(e) {
        let t = (0, aM.useContext)(aH);
        if (null === t) {
          let t = Error(
            `<${e} /> is missing a parent <Tab.Group /> component.`,
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, a$), t);
        }
        return t;
      }
      aH.displayName = "TabsDataContext";
      var aV = (0, aM.createContext)(null);
      function az(e) {
        let t = (0, aM.useContext)(aV);
        if (null === t) {
          let t = Error(
            `<${e} /> is missing a parent <Tab.Group /> component.`,
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, az), t);
        }
        return t;
      }
      function aW(e, t) {
        return e_(t.type, aj, e, t);
      }
      aV.displayName = "TabsActionsContext";
      var aG = eV(function (e, t) {
          var n, r;
          let o = (0, eZ.useId)(),
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
            } = a$("Tab"),
            v = az("Tab"),
            m = a$("Tab"),
            [h, b] = (0, aM.useState)(null),
            g = (0, aM.useRef)(null),
            y = tb(g, t, b);
          eP(() => v.registerTab(g), [v, g]);
          let x = aB("tabs"),
            E = f.indexOf(g);
          -1 === E && (E = x);
          let w = E === d,
            S = eT((e) => {
              let t = e();
              if (2 === t && "auto" === c) {
                let e = em(g.current),
                  t = m.tabs.findIndex((t) => t.current === e);
                -1 !== t && v.change(t);
              }
              return t;
            }),
            P = eT((e) => {
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
                    S(() => nO(t, 1))
                  );
                case "End":
                case "PageDown":
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    S(() => nO(t, 8))
                  );
              }
              if (
                2 ===
                S(() =>
                  e_(u, {
                    vertical: () =>
                      "ArrowUp" === e.key
                        ? nO(t, 18)
                        : "ArrowDown" === e.key
                          ? nO(t, 20)
                          : 0,
                    horizontal: () =>
                      "ArrowLeft" === e.key
                        ? nO(t, 18)
                        : "ArrowRight" === e.key
                          ? nO(t, 20)
                          : 0,
                  }),
                )
              )
                return e.preventDefault();
            }),
            I = (0, aM.useRef)(!1),
            T = eT(() => {
              var e;
              I.current ||
                ((I.current = !0),
                null == (e = g.current) || e.focus({ preventScroll: !0 }),
                v.change(E),
                eg(() => {
                  I.current = !1;
                }));
            }),
            C = eT((e) => {
              e.preventDefault();
            }),
            { isFocusVisible: R, focusProps: O } = ec({ autoFocus: a }),
            { isHovered: k, hoverProps: F } = es({ isDisabled: i }),
            { pressed: M, pressProps: D } = eC({ disabled: i }),
            A = eO({
              selected: w,
              hover: k,
              active: M,
              focus: R,
              autofocus: a,
              disabled: i,
            }),
            L = e$(
              {
                ref: y,
                onKeyDown: P,
                onMouseDown: C,
                onClick: T,
                id: l,
                role: "tab",
                type: nU(e, h),
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
          return eN()({
            ourProps: L,
            theirProps: s,
            slot: A,
            defaultTag: "button",
            name: "Tabs.Tab",
          });
        }),
        aK = eV(function (e, t) {
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
            d = eI({ isControlled: c }),
            f = tb(t),
            [p, v] = (0, aM.useReducer)(aW, {
              info: d,
              selectedIndex: null != i ? i : n,
              tabs: [],
              panels: [],
            }),
            m = eO({ selectedIndex: p.selectedIndex }),
            h = eI(l || (() => {})),
            b = eI(p.tabs),
            g = (0, aM.useMemo)(
              () => ({ orientation: s, activation: u, ...p }),
              [s, u, p],
            ),
            y = eT(
              (e) => (v({ type: 1, tab: e }), () => v({ type: 2, tab: e })),
            ),
            x = eT(
              (e) => (v({ type: 3, panel: e }), () => v({ type: 4, panel: e })),
            ),
            E = eT((e) => {
              (w.current !== e && h.current(e), c || v({ type: 0, index: e }));
            }),
            w = eI(c ? e.selectedIndex : p.selectedIndex),
            S = (0, aM.useMemo)(
              () => ({ registerTab: y, registerPanel: x, change: E }),
              [],
            );
          (eP(() => {
            v({ type: 0, index: null != i ? i : n });
          }, [i]),
            eP(() => {
              if (void 0 === w.current || p.tabs.length <= 0) return;
              let e = nC(p.tabs, (e) => e.current);
              e.some((e, t) => p.tabs[t] !== e) &&
                E(e.indexOf(p.tabs[w.current]));
            }));
          let P = eN();
          return aM.default.createElement(
            aN,
            null,
            aM.default.createElement(
              aV.Provider,
              { value: S },
              aM.default.createElement(
                aH.Provider,
                { value: g },
                g.tabs.length <= 0 &&
                  aM.default.createElement(aA, {
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
        aU = eV(function (e, t) {
          let { orientation: n, selectedIndex: r } = a$("Tab.List"),
            o = tb(t),
            l = eO({ selectedIndex: r });
          return eN()({
            ourProps: { ref: o, role: "tablist", "aria-orientation": n },
            theirProps: e,
            slot: l,
            defaultTag: "div",
            name: "Tabs.List",
          });
        }),
        aq = eV(function (e, t) {
          let { selectedIndex: n } = a$("Tab.Panels"),
            r = tb(t),
            o = eO({ selectedIndex: n });
          return eN()({
            ourProps: { ref: r },
            theirProps: e,
            slot: o,
            defaultTag: "div",
            name: "Tabs.Panels",
          });
        }),
        aY = eV(function (e, t) {
          var n, r, o, l;
          let i = (0, eZ.useId)(),
            { id: a = `headlessui-tabs-panel-${i}`, tabIndex: s = 0, ...u } = e,
            { selectedIndex: c, tabs: d, panels: f } = a$("Tab.Panel"),
            p = az("Tab.Panel"),
            v = (0, aM.useRef)(null),
            m = tb(v, t);
          eP(() => p.registerPanel(v), [p, v]);
          let h = aB("panels"),
            b = f.indexOf(v);
          -1 === b && (b = h);
          let g = b === c,
            { isFocusVisible: y, focusProps: x } = ec(),
            E = eO({ selected: g, focus: y }),
            w = e$(
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
            S = eN();
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
            : aM.default.createElement(e6, { "aria-hidden": "true", ...w });
        }),
        aQ = Object.assign(aG, { Group: aK, List: aU, Panels: aq, Panel: aY }),
        aX = eV(function (e, t) {
          let n = (0, eZ.useId)(),
            r = tr(),
            o = eM(),
            {
              id: l = r || `headlessui-textarea-${n}`,
              disabled: i = o || !1,
              autoFocus: a = !1,
              invalid: s = !1,
              ...u
            } = e,
            c = tI(),
            d = ty(),
            { isFocused: f, focusProps: p } = ec({ autoFocus: a }),
            { isHovered: v, hoverProps: m } = es({ isDisabled: i }),
            h = e$(
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
            b = eO({
              disabled: i,
              invalid: s,
              hover: v,
              focus: f,
              autofocus: a,
            });
          return eN()({
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
