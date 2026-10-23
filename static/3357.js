"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3357],
  {
    73357: (e, t, r) => {
      r.d(t, { u: () => f });
      var s = r(80777);
      let a = (e, t, r) => {
          if (e && "reportValidity" in e) {
            let a = (0, s.Jt)(r, t);
            (e.setCustomValidity((a && a.message) || ""), e.reportValidity());
          }
        },
        i = (e, t) => {
          for (let r in t.fields) {
            let s = t.fields[r];
            s && s.ref && "reportValidity" in s.ref
              ? a(s.ref, r, e)
              : s && s.refs && s.refs.forEach((t) => a(t, r, e));
          }
        },
        l = (e, t) => {
          t.shouldUseNativeValidation && i(e, t);
          let r = {};
          for (let a in e) {
            let i = (0, s.Jt)(t.fields, a),
              l = Object.assign(e[a] || {}, { ref: i && i.ref });
            if (n(t.names || Object.keys(e), a)) {
              let e = Object.assign({}, (0, s.Jt)(r, a));
              ((0, s.hZ)(e, "root", l), (0, s.hZ)(r, a, e));
            } else (0, s.hZ)(r, a, l);
          }
          return r;
        },
        n = (e, t) => {
          let r = o(t);
          return e.some((e) => o(e).match(`^${r}\\.\\d+`));
        };
      function o(e) {
        return e.replace(/\]|\[/g, "");
      }
      var u = r(81625);
      function d(e, t) {
        try {
          var r = e();
        } catch (e) {
          return t(e);
        }
        return r && r.then ? r.then(void 0, t) : r;
      }
      function f(e, t, r) {
        if (
          (void 0 === r && (r = {}),
          "_def" in e && "object" == typeof e._def && "typeName" in e._def)
        )
          return function (a, n, o) {
            try {
              return Promise.resolve(
                d(
                  function () {
                    return Promise.resolve(
                      e["sync" === r.mode ? "parse" : "parseAsync"](a, t),
                    ).then(function (e) {
                      return (
                        o.shouldUseNativeValidation && i({}, o),
                        { errors: {}, values: r.raw ? Object.assign({}, a) : e }
                      );
                    });
                  },
                  function (e) {
                    if (Array.isArray(null == e ? void 0 : e.issues))
                      return {
                        values: {},
                        errors: l(
                          (function (e, t) {
                            for (var r = {}; e.length; ) {
                              var a = e[0],
                                i = a.code,
                                l = a.message,
                                n = a.path.join(".");
                              if (!r[n])
                                if ("unionErrors" in a) {
                                  var o = a.unionErrors[0].errors[0];
                                  r[n] = { message: o.message, type: o.code };
                                } else r[n] = { message: l, type: i };
                              if (
                                ("unionErrors" in a &&
                                  a.unionErrors.forEach(function (t) {
                                    return t.errors.forEach(function (t) {
                                      return e.push(t);
                                    });
                                  }),
                                t)
                              ) {
                                var u = r[n].types,
                                  d = u && u[a.code];
                                r[n] = (0, s.Gb)(
                                  n,
                                  t,
                                  r,
                                  i,
                                  d ? [].concat(d, a.message) : a.message,
                                );
                              }
                              e.shift();
                            }
                            return r;
                          })(
                            e.errors,
                            !o.shouldUseNativeValidation &&
                              "all" === o.criteriaMode,
                          ),
                          o,
                        ),
                      };
                    throw e;
                  },
                ),
              );
            } catch (e) {
              return Promise.reject(e);
            }
          };
        if ("_zod" in e && "object" == typeof e._zod)
          return function (a, n, o) {
            try {
              return Promise.resolve(
                d(
                  function () {
                    return Promise.resolve(
                      ("sync" === r.mode ? u.qgA : u.EJS)(e, a, t),
                    ).then(function (e) {
                      return (
                        o.shouldUseNativeValidation && i({}, o),
                        { errors: {}, values: r.raw ? Object.assign({}, a) : e }
                      );
                    });
                  },
                  function (e) {
                    if (e instanceof u.a$H)
                      return {
                        values: {},
                        errors: l(
                          (function (e, t) {
                            for (var r = {}; e.length; ) {
                              var a = e[0],
                                i = a.code,
                                l = a.message,
                                n = a.path.join(".");
                              if (!r[n])
                                if (
                                  "invalid_union" === a.code &&
                                  a.errors.length > 0
                                ) {
                                  var o = a.errors[0][0];
                                  r[n] = { message: o.message, type: o.code };
                                } else r[n] = { message: l, type: i };
                              if (
                                ("invalid_union" === a.code &&
                                  a.errors.forEach(function (t) {
                                    return t.forEach(function (t) {
                                      return e.push(t);
                                    });
                                  }),
                                t)
                              ) {
                                var u = r[n].types,
                                  d = u && u[a.code];
                                r[n] = (0, s.Gb)(
                                  n,
                                  t,
                                  r,
                                  i,
                                  d ? [].concat(d, a.message) : a.message,
                                );
                              }
                              e.shift();
                            }
                            return r;
                          })(
                            e.issues,
                            !o.shouldUseNativeValidation &&
                              "all" === o.criteriaMode,
                          ),
                          o,
                        ),
                      };
                    throw e;
                  },
                ),
              );
            } catch (e) {
              return Promise.reject(e);
            }
          };
        throw Error("Invalid input: not a Zod schema");
      }
    },
    80777: (e, t, r) => {
      r.d(t, {
        FH: () => C,
        Gb: () => N,
        Jt: () => m,
        hZ: () => h,
        mN: () => eo,
        xI: () => j,
      });
      var s = r(36439),
        a = (e) => e instanceof Date,
        i = (e) => null == e,
        l = (e) => !i(e) && !Array.isArray(e) && "object" == typeof e && !a(e),
        n = (e) =>
          l(e) && e.target
            ? "checkbox" === e.target.type
              ? e.target.checked
              : e.target.value
            : e,
        o = (e, t) =>
          t
            .split(".")
            .some(
              (t, r, s) => !isNaN(Number(t)) && e.has(s.slice(0, r).join(".")),
            ),
        u =
          "u" > typeof window &&
          void 0 !== window.HTMLElement &&
          "u" > typeof document;
      function d(e) {
        let t;
        if (e instanceof Date) return new Date(e);
        let r = "u" > typeof FileList && e instanceof FileList;
        if (u && (e instanceof Blob || r)) return e;
        let s = Array.isArray(e);
        if (
          !s &&
          !(
            l(e) &&
            l((t = e.constructor && e.constructor.prototype)) &&
            t.hasOwnProperty("isPrototypeOf")
          )
        )
          return e;
        let a = s ? [] : Object.create(Object.getPrototypeOf(e));
        for (let t in e)
          Object.prototype.hasOwnProperty.call(e, t) && (a[t] = d(e[t]));
        return a;
      }
      var f = (e) => void 0 === e,
        c = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
        y = (e) => c(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
        m = (e, t, r) => {
          if (!t || !l(e)) return r;
          let s = (/^\w*$/.test(t) ? [t] : y(t)).reduce(
            (e, t) => (i(e) ? e : e[t]),
            e,
          );
          return f(s) || s === e ? (f(e[t]) ? r : e[t]) : s;
        },
        p = (e) => "function" == typeof e,
        h = (e, t, r) => {
          let s = -1,
            a = /^\w*$/.test(t) ? [t] : y(t),
            i = a.length,
            n = i - 1;
          for (; ++s < i; ) {
            let t = a[s],
              i = r;
            if (s !== n) {
              let r = e[t];
              i = l(r) || Array.isArray(r) ? r : isNaN(+a[s + 1]) ? {} : [];
            }
            if ("__proto__" === t || "constructor" === t || "prototype" === t)
              return;
            ((e[t] = i), (e = e[t]));
          }
        };
      let v = "blur",
        b = "trigger",
        g = "onChange",
        _ = "onSubmit",
        V = {
          max: "max",
          min: "min",
          maxLength: "maxLength",
          minLength: "minLength",
          pattern: "pattern",
          required: "required",
          validate: "validate",
        },
        F = "form",
        w = "root",
        k = s.createContext(null);
      k.displayName = "HookFormControlContext";
      var A = (e, t, r, s = !0) => {
        let a = { defaultValues: t._defaultValues };
        for (let i in e)
          Object.defineProperty(a, i, {
            get: () => (
              "all" !== t._proxyFormState[i] &&
                (t._proxyFormState[i] = !s || "all"),
              r && (r[i] = !0),
              e[i]
            ),
          });
        return a;
      };
      let x = "u" > typeof window ? s.useLayoutEffect : s.useEffect;
      var S = (e) => "string" == typeof e,
        D = (e, t, r, s, a) =>
          S(e)
            ? (s && t.watch.add(e), m(r, e, a))
            : Array.isArray(e)
              ? e.map((e) => (s && t.watch.add(e), m(r, e)))
              : (s && (t.watchAll = !0), r),
        E = (e) => i(e) || "object" != typeof e;
      function O(e, t, r = new WeakSet()) {
        if (E(e) || E(t)) return Object.is(e, t);
        if (a(e) && a(t)) return Object.is(e.getTime(), t.getTime());
        let s = Object.keys(e),
          i = Object.keys(t);
        if (s.length !== i.length) return !1;
        if (r.has(e) || r.has(t)) return !0;
        for (let n of (r.add(e), r.add(t), s)) {
          let s = e[n];
          if (!i.includes(n)) return !1;
          if ("ref" !== n) {
            let e = t[n];
            if (
              (a(s) && a(e)) ||
              ((l(s) || Array.isArray(s)) && (l(e) || Array.isArray(e)))
                ? !O(s, e, r)
                : !Object.is(s, e)
            )
              return !1;
          }
        }
        return !0;
      }
      function C(e) {
        let t = s.useContext(k),
          {
            control: r = t,
            name: a,
            defaultValue: i,
            disabled: l,
            exact: n,
            compute: o,
          } = e || {},
          u = s.useRef(i),
          d = s.useRef(o),
          f = s.useRef(void 0),
          c = s.useRef(r),
          y = s.useRef(a);
        d.current = o;
        let [m, p] = s.useState(() => {
            let e = r._getWatch(a, u.current);
            return d.current ? d.current(e) : e;
          }),
          h = s.useCallback(
            (e) => {
              let t = D(a, r._names, e || r._formValues, !1, u.current);
              return d.current ? d.current(t) : t;
            },
            [r._formValues, r._names, a],
          ),
          v = s.useCallback(
            (e) => {
              if (!l) {
                let t = D(a, r._names, e || r._formValues, !1, u.current);
                if (d.current) {
                  let e = d.current(t);
                  O(e, f.current) || (p(e), (f.current = e));
                } else p(t);
              }
            },
            [r._formValues, r._names, l, a],
          );
        (x(
          () => (
            (c.current === r && O(y.current, a)) ||
              ((c.current = r), (y.current = a), v()),
            r._subscribe({
              name: a,
              formState: { values: !0 },
              exact: n,
              callback: (e) => {
                v(e.values);
              },
            })
          ),
          [r, n, a, v],
        ),
          s.useEffect(() => r._removeUnmounted()));
        let b = c.current !== r,
          g = y.current,
          _ = s.useMemo(() => {
            if (l) return null;
            let e = !b && !O(g, a);
            return b || e ? h() : null;
          }, [l, b, a, g, h]);
        return null !== _ ? _ : m;
      }
      let j = (e) =>
        e.render(
          (function (e) {
            let t = s.useContext(k),
              {
                name: r,
                disabled: a,
                control: i = t,
                shouldUnregister: l,
                defaultValue: u,
                exact: c = !0,
              } = e,
              y = o(i._names.array, r),
              b = s.useMemo(
                () => m(i._formValues, r, m(i._defaultValues, r, u)),
                [i, r, u],
              ),
              g = C({ control: i, name: r, defaultValue: b, exact: c }),
              _ = (function (e) {
                let t = s.useContext(k),
                  { control: r = t, disabled: a, name: i, exact: l } = e || {},
                  [n, o] = s.useState(r._formState),
                  u = s.useRef({
                    isDirty: !1,
                    isLoading: !1,
                    dirtyFields: !1,
                    touchedFields: !1,
                    validatingFields: !1,
                    isValidating: !1,
                    isValid: !1,
                    errors: !1,
                  });
                return (
                  x(
                    () =>
                      r._subscribe({
                        name: i,
                        formState: u.current,
                        exact: l,
                        callback: (e) => {
                          a || o({ ...r._formState, ...e });
                        },
                      }),
                    [i, a, l],
                  ),
                  s.useEffect(() => {
                    u.current.isValid && r._setValid(!0);
                  }, [r]),
                  s.useMemo(() => A(n, r, u.current, !1), [n, r])
                );
              })({ control: i, name: r, exact: c }),
              V = s.useRef(e),
              F = s.useRef(void 0),
              w = s.useRef(
                i.register(r, {
                  ...e.rules,
                  value: g,
                  ...("boolean" == typeof e.disabled
                    ? { disabled: e.disabled }
                    : {}),
                }),
              );
            V.current = e;
            let S = s.useMemo(
                () =>
                  Object.defineProperties(
                    {},
                    {
                      invalid: { enumerable: !0, get: () => !!m(_.errors, r) },
                      isDirty: {
                        enumerable: !0,
                        get: () => !!m(_.dirtyFields, r),
                      },
                      isTouched: {
                        enumerable: !0,
                        get: () => !!m(_.touchedFields, r),
                      },
                      isValidating: {
                        enumerable: !0,
                        get: () => !!m(_.validatingFields, r),
                      },
                      error: { enumerable: !0, get: () => m(_.errors, r) },
                    },
                  ),
                [_, r],
              ),
              D = s.useCallback(
                (e) =>
                  w.current.onChange({
                    target: { value: n(e), name: r },
                    type: "change",
                  }),
                [r],
              ),
              E = s.useCallback(
                () =>
                  w.current.onBlur({
                    target: { value: m(i._formValues, r), name: r },
                    type: v,
                  }),
                [r, i._formValues],
              ),
              O = s.useCallback(
                (e) => {
                  let t = m(i._fields, r);
                  t &&
                    t._f &&
                    e &&
                    (t._f.ref = {
                      focus: () => p(e.focus) && e.focus(),
                      select: () => p(e.select) && e.select(),
                      setCustomValidity: (t) =>
                        p(e.setCustomValidity) && e.setCustomValidity(t),
                      reportValidity: () =>
                        p(e.reportValidity) && e.reportValidity(),
                    });
                },
                [i._fields, r],
              ),
              j = s.useMemo(
                () => ({
                  name: r,
                  value: g,
                  ...("boolean" == typeof a || _.disabled
                    ? { disabled: _.disabled || a }
                    : {}),
                  onChange: D,
                  onBlur: E,
                  ref: O,
                }),
                [r, a, _.disabled, D, E, O, g],
              );
            return (
              s.useEffect(() => {
                let e = i._options.shouldUnregister || l,
                  t = F.current;
                (t && t !== r && !y && i.unregister(t),
                  i.register(r, {
                    ...V.current.rules,
                    ...("boolean" == typeof V.current.disabled
                      ? { disabled: V.current.disabled }
                      : {}),
                  }));
                let s = (e, t) => {
                  let r = m(i._fields, e);
                  r && r._f && (r._f.mount = t);
                };
                if ((s(r, !0), e)) {
                  let e = d(
                    m(i._options.defaultValues, r, V.current.defaultValue),
                  );
                  (h(i._defaultValues, r, e),
                    f(m(i._formValues, r)) && h(i._formValues, r, e));
                }
                return (
                  y || i.register(r),
                  (F.current = r),
                  () => {
                    (y ? e && !i._state.action : e)
                      ? i.unregister(r)
                      : s(r, !1);
                  }
                );
              }, [r, i, y, l]),
              s.useEffect(() => {
                i._setDisabledField({ disabled: a, name: r });
              }, [a, r, i]),
              s.useMemo(
                () => ({ field: j, formState: _, fieldState: S }),
                [j, _, S],
              )
            );
          })(e),
        );
      s.createContext(null).displayName = "HookFormContext";
      var N = (e, t, r, s, a) =>
          t
            ? {
                ...r[e],
                types: {
                  ...(r[e] && r[e].types ? r[e].types : {}),
                  [s]: a || !0,
                },
              }
            : {},
        R = (e) => (Array.isArray(e) ? e : [e]),
        T = () => {
          let e = [];
          return {
            get observers() {
              return e;
            },
            next: (t) => {
              for (let r of e) r.next && r.next(t);
            },
            subscribe: (t) => (
              e.push(t),
              {
                unsubscribe: () => {
                  e = e.filter((e) => e !== t);
                },
              }
            ),
            unsubscribe: () => {
              e = [];
            },
          };
        },
        M = (e) => l(e) && !Object.keys(e).length,
        U = (e) => {
          if (!u) return !1;
          let t = e ? e.ownerDocument : 0;
          return (
            e instanceof
            (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
          );
        },
        L = (e) => U(e) && e.isConnected;
      function P(e, t) {
        let r = Array.isArray(t) ? t : /^\w*$/.test(t) ? [t] : y(t),
          s =
            1 === r.length
              ? e
              : (function (e, t) {
                  let r = t.slice(0, -1).length,
                    s = 0;
                  for (; s < r; ) e = f(e) ? s++ : e[t[s++]];
                  return e;
                })(e, r),
          a = r.length - 1,
          i = r[a];
        return (
          s && delete s[i],
          0 !== a &&
            ((l(s) && M(s)) ||
              (Array.isArray(s) &&
                (function (e) {
                  for (let t in e)
                    if (e.hasOwnProperty(t) && !f(e[t])) return !1;
                  return !0;
                })(s))) &&
            P(e, r.slice(0, -1)),
          e
        );
      }
      function B(e) {
        return (
          Array.isArray(e) ||
          (l(e) &&
            !((e) => {
              for (let t in e) if (p(e[t])) return !0;
              return !1;
            })(e))
        );
      }
      function I(e, t = {}) {
        for (let r in e) {
          let s = e[r];
          B(s)
            ? ((t[r] = Array.isArray(s) ? [] : {}), I(s, t[r]))
            : f(s) || (t[r] = !0);
        }
        return t;
      }
      function q(e, t, r) {
        for (let s in (r || (r = I(t)), e)) {
          let a = e[s];
          if (B(a))
            f(t) || E(r[s])
              ? (r[s] = I(a, Array.isArray(a) ? [] : {}))
              : q(a, i(t) ? {} : t[s], r[s]);
          else {
            let e = t[s];
            r[s] = !O(a, e);
          }
        }
        return r;
      }
      let $ = { value: !1, isValid: !1 },
        H = { value: !0, isValid: !0 };
      var W = (e) => {
          if (Array.isArray(e)) {
            if (e.length > 1) {
              let t = e
                .filter((e) => e && e.checked && !e.disabled)
                .map((e) => e.value);
              return { value: t, isValid: !!t.length };
            }
            return e[0].checked && !e[0].disabled
              ? e[0].attributes && !f(e[0].attributes.value)
                ? f(e[0].value) || "" === e[0].value
                  ? H
                  : { value: e[0].value, isValid: !0 }
                : H
              : $;
          }
          return $;
        },
        J = (e, { valueAsNumber: t, valueAsDate: r, setValueAs: s }) =>
          f(e)
            ? e
            : t
              ? "" === e
                ? 0 / 0
                : e
                  ? +e
                  : e
              : r && S(e)
                ? new Date(e)
                : s
                  ? s(e)
                  : e;
      let Z = { isValid: !1, value: null };
      var z = (e) =>
        Array.isArray(e)
          ? e.reduce(
              (e, t) =>
                t && t.checked && !t.disabled
                  ? { isValid: !0, value: t.value }
                  : e,
              Z,
            )
          : Z;
      function G(e) {
        let t = e.ref;
        return "file" === t.type
          ? t.files
          : "radio" === t.type
            ? z(e.refs).value
            : "select-multiple" === t.type
              ? [...t.selectedOptions].map(({ value: e }) => e)
              : "checkbox" === t.type
                ? W(e.refs).value
                : J(f(t.value) ? e.ref.value : t.value, e);
      }
      var K = (e) =>
          f(e)
            ? e
            : e instanceof RegExp
              ? e.source
              : l(e)
                ? e.value instanceof RegExp
                  ? e.value.source
                  : e.value
                : e,
        Q = (e) => ({
          isOnSubmit: !e || e === _,
          isOnBlur: "onBlur" === e,
          isOnChange: e === g,
          isOnAll: "all" === e,
          isOnTouch: "onTouched" === e,
        });
      let X = "AsyncFunction";
      var Y = (e) =>
          !!e &&
          !!e.validate &&
          !!(
            (p(e.validate) && e.validate.constructor.name === X) ||
            (l(e.validate) &&
              Object.values(e.validate).find((e) => e.constructor.name === X))
          ),
        ee = (e, t, r) =>
          !r &&
          (t.watchAll ||
            t.watch.has(e) ||
            [...t.watch].some(
              (t) => e.startsWith(t) && /^\.\w+/.test(e.slice(t.length)),
            ));
      let et = (e, t, r, s) => {
        for (let a of r || Object.keys(e)) {
          let r = m(e, a);
          if (r) {
            let { _f: e, ...i } = r;
            if (e) {
              if (e.refs && e.refs[0] && t(e.refs[0], a) && !s) return !0;
              else if (e.ref && t(e.ref, e.name) && !s) return !0;
              else if (et(i, t)) break;
            } else if (l(i) && et(i, t)) break;
          }
        }
      };
      function er(e, t, r) {
        let s = m(e, r);
        if (s || /^\w*$/.test(r)) return { error: s, name: r };
        let a = r.split(".");
        for (; a.length; ) {
          let s = a.join("."),
            i = m(t, s),
            l = m(e, s);
          if (i && !Array.isArray(i) && r !== s) break;
          if (l && l.type) return { name: s, error: l };
          if (l && l.root && l.root.type)
            return { name: `${s}.root`, error: l.root };
          a.pop();
        }
        return { name: r };
      }
      var es = (e, t, r) => {
        let s = R(m(e, r));
        return (h(s, w, t[r]), h(e, r, s), e);
      };
      function ea(e, t, r = "validate") {
        if (
          S(e) ||
          (Array.isArray(e) && e.every(S)) ||
          ("boolean" == typeof e && !e)
        )
          return { type: r, message: S(e) ? e : "", ref: t };
      }
      var ei = (e) =>
          !l(e) || e instanceof RegExp ? { value: e, message: "" } : e,
        el = async (e, t, r, s, a, n) => {
          let {
              ref: o,
              refs: u,
              required: d,
              maxLength: c,
              minLength: y,
              min: h,
              max: v,
              pattern: b,
              validate: g,
              name: _,
              valueAsNumber: F,
              mount: w,
            } = e._f,
            k = m(r, _);
          if (!w || t.has(_)) return {};
          let A = u ? u[0] : o,
            x = (e) => {
              a &&
                A.reportValidity &&
                (A.setCustomValidity("boolean" == typeof e ? "" : e || ""),
                A.reportValidity());
            },
            D = {},
            E = "radio" === o.type,
            O = "checkbox" === o.type,
            C =
              ((F || "file" === o.type) && f(o.value) && f(k)) ||
              (U(o) && "" === o.value) ||
              "" === k ||
              (Array.isArray(k) && !k.length),
            j = N.bind(null, _, s, D),
            R = (e, t, r, s = V.maxLength, a = V.minLength) => {
              let i = e ? t : r;
              D[_] = {
                type: e ? s : a,
                message: i,
                ref: o,
                ...j(e ? s : a, i),
              };
            };
          if (
            n
              ? !Array.isArray(k) || !k.length
              : d &&
                ((!(E || O) && (C || i(k))) ||
                  ("boolean" == typeof k && !k) ||
                  (O && !W(u).isValid) ||
                  (E && !z(u).isValid))
          ) {
            let { value: e, message: t } = S(d)
              ? { value: !!d, message: d }
              : ei(d);
            if (
              e &&
              ((D[_] = {
                type: V.required,
                message: t,
                ref: A,
                ...j(V.required, t),
              }),
              !s)
            )
              return (x(t), D);
          }
          if (!C && (!i(h) || !i(v))) {
            let e,
              t,
              r = ei(v),
              a = ei(h);
            if (i(k) || isNaN(k)) {
              let s = o.valueAsDate || new Date(k),
                i = (e) => new Date(new Date().toDateString() + " " + e),
                l = "time" == o.type,
                n = "week" == o.type;
              (S(r.value) &&
                k &&
                (e = l
                  ? i(k) > i(r.value)
                  : n
                    ? k > r.value
                    : s > new Date(r.value)),
                S(a.value) &&
                  k &&
                  (t = l
                    ? i(k) < i(a.value)
                    : n
                      ? k < a.value
                      : s < new Date(a.value)));
            } else {
              let s = o.valueAsNumber || (k ? +k : k);
              (i(r.value) || (e = s > r.value),
                i(a.value) || (t = s < a.value));
            }
            if ((e || t) && (R(!!e, r.message, a.message, V.max, V.min), !s))
              return (x(D[_].message), D);
          }
          if ((c || y) && !C && (S(k) || (n && Array.isArray(k)))) {
            let e = ei(c),
              t = ei(y),
              r = !i(e.value) && k.length > +e.value,
              a = !i(t.value) && k.length < +t.value;
            if ((r || a) && (R(r, e.message, t.message), !s))
              return (x(D[_].message), D);
          }
          if (b && !C && S(k)) {
            let { value: e, message: t } = ei(b);
            if (
              e instanceof RegExp &&
              !k.match(e) &&
              ((D[_] = {
                type: V.pattern,
                message: t,
                ref: o,
                ...j(V.pattern, t),
              }),
              !s)
            )
              return (x(t), D);
          }
          if (g) {
            if (p(g)) {
              let e = ea(await g(k, r), A);
              if (e && ((D[_] = { ...e, ...j(V.validate, e.message) }), !s))
                return (x(e.message), D);
            } else if (l(g)) {
              let e = {};
              for (let t in g) {
                if (!M(e) && !s) break;
                let a = ea(await g[t](k, r), A, t);
                a &&
                  ((e = { ...a, ...j(t, a.message) }),
                  x(a.message),
                  s && (D[_] = e));
              }
              if (!M(e) && ((D[_] = { ref: A, ...e }), !s)) return D;
            }
          }
          return (x(!0), D);
        };
      let en = { mode: _, reValidateMode: g, shouldFocusError: !0 };
      function eo(e = {}) {
        let t = s.useRef(void 0),
          r = s.useRef(void 0),
          [y, g] = s.useState({
            isDirty: !1,
            isValidating: !1,
            isLoading: p(e.defaultValues),
            isSubmitted: !1,
            isSubmitting: !1,
            isSubmitSuccessful: !1,
            isValid: !1,
            submitCount: 0,
            dirtyFields: {},
            touchedFields: {},
            validatingFields: {},
            errors: e.errors || {},
            disabled: e.disabled || !1,
            isReady: !1,
            defaultValues: p(e.defaultValues) ? void 0 : e.defaultValues,
          });
        if (!t.current)
          if (e.formControl)
            ((t.current = { ...e.formControl, formState: y }),
              e.defaultValues &&
                !p(e.defaultValues) &&
                e.formControl.reset(e.defaultValues, e.resetOptions));
          else {
            let { formControl: r, ...s } = (function (e = {}) {
              let t,
                r = { ...en, ...e },
                s = {
                  submitCount: 0,
                  isDirty: !1,
                  isReady: !1,
                  isLoading: p(r.defaultValues),
                  isValidating: !1,
                  isSubmitted: !1,
                  isSubmitting: !1,
                  isSubmitSuccessful: !1,
                  isValid: !1,
                  touchedFields: {},
                  dirtyFields: {},
                  validatingFields: {},
                  errors: r.errors || {},
                  disabled: r.disabled || !1,
                },
                y = {},
                g =
                  ((l(r.defaultValues) || l(r.values)) &&
                    d(r.defaultValues || r.values)) ||
                  {},
                _ = r.shouldUnregister ? {} : d(g),
                k = { action: !1, mount: !1, watch: !1, keepIsValid: !1 },
                A = {
                  mount: new Set(),
                  disabled: new Set(),
                  unMount: new Set(),
                  array: new Set(),
                  watch: new Set(),
                  registerName: new Set(),
                },
                x = 0,
                E = {
                  isDirty: !1,
                  dirtyFields: !1,
                  validatingFields: !1,
                  touchedFields: !1,
                  isValidating: !1,
                  isValid: !1,
                  errors: !1,
                },
                C = { ...E },
                j = { ...C },
                N = { array: T(), state: T() },
                B = "all" === r.criteriaMode,
                I = async (e) => {
                  if (
                    !k.keepIsValid &&
                    !r.disabled &&
                    (C.isValid || j.isValid || e)
                  ) {
                    let e;
                    (r.resolver
                      ? ((e = M((await z()).errors)), $())
                      : (e = await ei({
                          fields: y,
                          onlyCheckValid: !0,
                          eventType: "valid",
                        })),
                      e !== s.isValid && N.state.next({ isValid: e }));
                  }
                },
                $ = (e, t) => {
                  !r.disabled &&
                    (C.isValidating ||
                      C.validatingFields ||
                      j.isValidating ||
                      j.validatingFields) &&
                    ((e || Array.from(A.mount)).forEach((e) => {
                      e &&
                        (t
                          ? h(s.validatingFields, e, t)
                          : P(s.validatingFields, e));
                    }),
                    N.state.next({
                      validatingFields: s.validatingFields,
                      isValidating: !M(s.validatingFields),
                    }));
                },
                H = (e) => {
                  let t = q(g, _),
                    r = e.substring(0, e.search(/\.\d+(\.|$)/)) || e;
                  h(s.dirtyFields, r, m(t, r));
                },
                W = (e, t, r, s) => {
                  let a = m(y, e);
                  if (a) {
                    let i = m(_, e, f(r) ? m(g, e) : r);
                    (f(i) || (s && s.defaultChecked) || t
                      ? h(_, e, t ? i : G(a._f))
                      : ed(e, i),
                      k.mount && !k.action && I());
                  }
                },
                Z = (e, t, a, i, l) => {
                  let n = !1,
                    o = !1,
                    u = { name: e };
                  if (!r.disabled) {
                    if (!a || i) {
                      (C.isDirty || j.isDirty) &&
                        ((o = s.isDirty),
                        (s.isDirty = u.isDirty = eo()),
                        (n = o !== u.isDirty));
                      let r = O(m(g, e), t);
                      ((o = !!m(s.dirtyFields, e)),
                        r ? P(s.dirtyFields, e) : h(s.dirtyFields, e, !0),
                        (u.dirtyFields = s.dirtyFields),
                        (n =
                          n || ((C.dirtyFields || j.dirtyFields) && !r !== o)));
                    }
                    if (a) {
                      let t = m(s.touchedFields, e);
                      t ||
                        (h(s.touchedFields, e, a),
                        (u.touchedFields = s.touchedFields),
                        (n =
                          n ||
                          ((C.touchedFields || j.touchedFields) && t !== a)));
                    }
                    n && l && N.state.next(u);
                  }
                  return n ? u : {};
                },
                z = async (e) => (
                  $(e, !0),
                  await r.resolver(
                    _,
                    r.context,
                    ((e, t, r, s) => {
                      let a = {};
                      for (let r of e) {
                        let e = m(t, r);
                        e && h(a, r, e._f);
                      }
                      return {
                        criteriaMode: r,
                        names: [...e],
                        fields: a,
                        shouldUseNativeValidation: s,
                      };
                    })(
                      e || A.mount,
                      y,
                      r.criteriaMode,
                      r.shouldUseNativeValidation,
                    ),
                  )
                ),
                X = async (e) => {
                  let { errors: t } = await z(e);
                  if (($(e), e))
                    for (let r of e) {
                      let e = m(t, r);
                      e ? h(s.errors, r, e) : P(s.errors, r);
                    }
                  else s.errors = t;
                  return t;
                },
                ea = async ({ name: t, eventType: r }) => {
                  if (e.validate) {
                    let a = await e.validate({
                      formValues: _,
                      formState: s,
                      name: t,
                      eventType: r,
                    });
                    if (l(a))
                      for (let e in a)
                        a[e] &&
                          eg(`${F}.${e}`, {
                            message: S(a.message) ? a.message : "",
                            type: V.validate,
                          });
                    else
                      S(a) || !a
                        ? eg(F, { message: a || "", type: V.validate })
                        : eb(F);
                    return a;
                  }
                  return !0;
                },
                ei = async ({
                  fields: t,
                  onlyCheckValid: a,
                  name: i,
                  eventType: l,
                  context: n = { valid: !0, runRootValidation: !1 },
                }) => {
                  if (
                    e.validate &&
                    ((n.runRootValidation = !0),
                    !(await ea({ name: i, eventType: l }))) &&
                    ((n.valid = !1), a)
                  )
                    return n.valid;
                  for (let i in t) {
                    let o = t[i];
                    if (o) {
                      let { _f: t, ...u } = o;
                      if (t) {
                        let i = A.array.has(t.name),
                          l = o._f && Y(o._f);
                        l && C.validatingFields && $([t.name], !0);
                        let u = await el(
                          o,
                          A.disabled,
                          _,
                          B,
                          r.shouldUseNativeValidation && !a,
                          i,
                        );
                        if (
                          (l && C.validatingFields && $([t.name]),
                          (u[t.name] && ((n.valid = !1), a)) ||
                            (a ||
                              (m(u, t.name)
                                ? i
                                  ? es(s.errors, u, t.name)
                                  : h(s.errors, t.name, u[t.name])
                                : P(s.errors, t.name)),
                            e.shouldUseNativeValidation && u[t.name]))
                        )
                          break;
                      }
                      M(u) ||
                        (await ei({
                          context: n,
                          onlyCheckValid: a,
                          fields: u,
                          name: i,
                          eventType: l,
                        }));
                    }
                  }
                  return n.valid;
                },
                eo = (e, t) =>
                  !r.disabled && (e && t && h(_, e, t), !O(eh(), g)),
                eu = (e, t, r) =>
                  D(
                    e,
                    A,
                    { ...(k.mount ? _ : f(t) ? g : S(e) ? { [e]: t } : t) },
                    r,
                    t,
                  ),
                ed = (e, t, r = {}) => {
                  let s = m(y, e),
                    a = t;
                  if (s) {
                    let r = s._f;
                    r &&
                      (r.disabled || h(_, e, J(t, r)),
                      (a = U(r.ref) && i(t) ? "" : t),
                      "select-multiple" === r.ref.type
                        ? [...r.ref.options].forEach(
                            (e) => (e.selected = a.includes(e.value)),
                          )
                        : r.refs
                          ? "checkbox" === r.ref.type
                            ? r.refs.forEach((e) => {
                                (e.defaultChecked && e.disabled) ||
                                  (Array.isArray(a)
                                    ? (e.checked = !!a.find(
                                        (t) => t === e.value,
                                      ))
                                    : (e.checked = a === e.value || !!a));
                              })
                            : r.refs.forEach((e) => (e.checked = e.value === a))
                          : "file" === r.ref.type
                            ? (r.ref.value = "")
                            : ((r.ref.value = a),
                              r.ref.type ||
                                N.state.next({ name: e, values: d(_) })));
                  }
                  ((r.shouldDirty || r.shouldTouch) &&
                    Z(e, a, r.shouldTouch, r.shouldDirty, !0),
                    r.shouldValidate && ep(e));
                },
                ef = (e, t, r) => {
                  for (let s in t) {
                    if (!t.hasOwnProperty(s)) return;
                    let i = t[s],
                      n = e + "." + s,
                      o = m(y, n);
                    (A.array.has(e) || l(i) || (o && !o._f)) && !a(i)
                      ? ef(n, i, r)
                      : ed(n, i, r);
                  }
                },
                ec = (e, t, r = {}) => {
                  let a = m(y, e),
                    l = A.array.has(e),
                    n = d(t);
                  (h(_, e, n),
                    l
                      ? (N.array.next({ name: e, values: d(_) }),
                        (C.isDirty ||
                          C.dirtyFields ||
                          j.isDirty ||
                          j.dirtyFields) &&
                          r.shouldDirty &&
                          (H(e),
                          N.state.next({
                            name: e,
                            dirtyFields: s.dirtyFields,
                            isDirty: eo(e, n),
                          })))
                      : !a || a._f || i(n)
                        ? ed(e, n, r)
                        : ef(e, n, r),
                    ee(e, A)
                      ? N.state.next({ ...s, name: e, values: d(_) })
                      : N.state.next({
                          name: k.mount ? e : void 0,
                          values: d(_),
                        }));
                },
                ey = async (i) => {
                  k.mount = !0;
                  let l = i.target,
                    o = l.name,
                    u = !0,
                    f = m(y, o),
                    c = (e) => {
                      u =
                        Number.isNaN(e) ||
                        (a(e) && isNaN(e.getTime())) ||
                        O(e, m(_, o, e));
                    },
                    p = Q(r.mode),
                    b = Q(r.reValidateMode);
                  if (f) {
                    var g, V, F, w, S;
                    let a,
                      k,
                      T,
                      U = l.type ? G(f._f) : n(i),
                      L = i.type === v || "focusout" === i.type,
                      q =
                        (!(
                          (T = f._f).mount &&
                          (T.required ||
                            T.min ||
                            T.max ||
                            T.maxLength ||
                            T.minLength ||
                            T.pattern ||
                            T.validate)
                        ) &&
                          !e.validate &&
                          !r.resolver &&
                          !m(s.errors, o) &&
                          !f._f.deps) ||
                        ((g = L),
                        (V = m(s.touchedFields, o)),
                        (F = s.isSubmitted),
                        (w = b),
                        !(S = p).isOnAll &&
                          (!F && S.isOnTouch
                            ? !(V || g)
                            : (F ? w.isOnBlur : S.isOnBlur)
                              ? !g
                              : (F ? !w.isOnChange : !S.isOnChange) || g)),
                      H = ee(o, A, L);
                    (h(_, o, U),
                      L
                        ? (l && l.readOnly) ||
                          (f._f.onBlur && f._f.onBlur(i), t && t(0))
                        : f._f.onChange && f._f.onChange(i));
                    let W = Z(o, U, L),
                      J = !M(W) || H;
                    if (
                      (L ||
                        N.state.next({ name: o, type: i.type, values: d(_) }),
                      q)
                    )
                      return (
                        (C.isValid || j.isValid) &&
                          ("onBlur" === r.mode ? L && I() : L || I()),
                        J && N.state.next({ name: o, ...(H ? {} : W) })
                      );
                    if (
                      (!r.resolver &&
                        e.validate &&
                        (await ea({ name: o, eventType: i.type })),
                      !L && H && N.state.next({ ...s }),
                      r.resolver)
                    ) {
                      let { errors: e } = await z([o]);
                      if (($([o]), c(U), u)) {
                        let t = er(s.errors, y, o),
                          r = er(e, y, t.name || o);
                        ((a = r.error), (o = r.name), (k = M(e)));
                      }
                    } else
                      ($([o], !0),
                        (a = (
                          await el(
                            f,
                            A.disabled,
                            _,
                            B,
                            r.shouldUseNativeValidation,
                          )
                        )[o]),
                        $([o]),
                        c(U),
                        u &&
                          (a
                            ? (k = !1)
                            : (C.isValid || j.isValid) &&
                              (k = await ei({
                                fields: y,
                                onlyCheckValid: !0,
                                name: o,
                                eventType: i.type,
                              }))));
                    if (u) {
                      f._f.deps &&
                        (!Array.isArray(f._f.deps) || f._f.deps.length > 0) &&
                        ep(f._f.deps);
                      var D = o,
                        E = k,
                        R = a;
                      let e = m(s.errors, D),
                        i =
                          (C.isValid || j.isValid) &&
                          "boolean" == typeof E &&
                          s.isValid !== E;
                      if (r.delayError && R) {
                        let e;
                        ((e = () => {
                          (h(s.errors, D, R),
                            N.state.next({ errors: s.errors }));
                        }),
                          (t = (t) => {
                            (clearTimeout(x), (x = setTimeout(e, t)));
                          })(r.delayError));
                      } else
                        (clearTimeout(x),
                          (t = null),
                          R ? h(s.errors, D, R) : P(s.errors, D));
                      if ((R ? !O(e, R) : e) || !M(W) || i) {
                        let e = {
                          ...W,
                          ...(i && "boolean" == typeof E ? { isValid: E } : {}),
                          errors: s.errors,
                          name: D,
                        };
                        ((s = { ...s, ...e }), N.state.next(e));
                      }
                    }
                  }
                },
                em = (e, t) => {
                  if (m(s.errors, t) && e.focus) return (e.focus(), 1);
                },
                ep = async (e, t = {}) => {
                  let a,
                    i,
                    l = R(e);
                  if (r.resolver) {
                    let t = await X(f(e) ? e : l);
                    ((a = M(t)), (i = e ? !l.some((e) => m(t, e)) : a));
                  } else
                    e
                      ? ((i = (
                          await Promise.all(
                            l.map(async (e) => {
                              let t = m(y, e);
                              return await ei({
                                fields: t && t._f ? { [e]: t } : t,
                                eventType: b,
                              });
                            }),
                          )
                        ).every(Boolean)) ||
                          s.isValid) &&
                        I()
                      : (i = a =
                          await ei({ fields: y, name: e, eventType: b }));
                  return (
                    N.state.next({
                      ...(!S(e) || ((C.isValid || j.isValid) && a !== s.isValid)
                        ? {}
                        : { name: e }),
                      ...(r.resolver || !e ? { isValid: a } : {}),
                      errors: s.errors,
                    }),
                    t.shouldFocus && !i && et(y, em, e ? l : A.mount),
                    i
                  );
                },
                eh = (e, t) => {
                  let r = { ...(k.mount ? _ : g) };
                  return (
                    t &&
                      (r = (function e(t, r) {
                        let s = {};
                        for (let a in t)
                          if (t.hasOwnProperty(a)) {
                            let i = t[a],
                              n = r[a];
                            if (i && l(i) && n) {
                              let t = e(i, n);
                              l(t) && (s[a] = t);
                            } else t[a] && (s[a] = n);
                          }
                        return s;
                      })(t.dirtyFields ? s.dirtyFields : s.touchedFields, r)),
                    f(e) ? r : S(e) ? m(r, e) : e.map((e) => m(r, e))
                  );
                },
                ev = (e, t) => ({
                  invalid: !!m((t || s).errors, e),
                  isDirty: !!m((t || s).dirtyFields, e),
                  error: m((t || s).errors, e),
                  isValidating: !!m(s.validatingFields, e),
                  isTouched: !!m((t || s).touchedFields, e),
                }),
                eb = (e) => {
                  let t = e ? R(e) : void 0;
                  (null == t || t.forEach((e) => P(s.errors, e)),
                    t
                      ? t.forEach((e) => {
                          N.state.next({ name: e, errors: s.errors });
                        })
                      : N.state.next({ errors: {} }));
                },
                eg = (e, t, r) => {
                  let a = (m(y, e, { _f: {} })._f || {}).ref,
                    {
                      ref: i,
                      message: l,
                      type: n,
                      ...o
                    } = m(s.errors, e) || {};
                  (h(s.errors, e, { ...o, ...t, ref: a }),
                    N.state.next({ name: e, errors: s.errors, isValid: !1 }),
                    r && r.shouldFocus && a && a.focus && a.focus());
                },
                e_ = (e) =>
                  N.state.subscribe({
                    next: (t) => {
                      let r, a, i;
                      ((r = e.name),
                        (a = t.name),
                        (i = e.exact),
                        (!r ||
                          !a ||
                          r === a ||
                          R(r).some(
                            (e) =>
                              e &&
                              (i
                                ? e === a
                                : e.startsWith(a) || a.startsWith(e)),
                          )) &&
                          ((e, t, r, s) => {
                            r(e);
                            let { name: a, ...i } = e;
                            return (
                              M(i) ||
                              Object.keys(i).length >= Object.keys(t).length ||
                              Object.keys(i).find((e) => t[e] === (!s || "all"))
                            );
                          })(t, e.formState || C, eD, e.reRenderRoot) &&
                          e.callback({
                            values: { ..._ },
                            ...s,
                            ...t,
                            defaultValues: g,
                          }));
                    },
                  }).unsubscribe,
                eV = (e, t = {}) => {
                  for (let a of e ? R(e) : A.mount)
                    (A.mount.delete(a),
                      A.array.delete(a),
                      t.keepValue || (P(y, a), P(_, a)),
                      t.keepError || P(s.errors, a),
                      t.keepDirty || P(s.dirtyFields, a),
                      t.keepTouched || P(s.touchedFields, a),
                      t.keepIsValidating || P(s.validatingFields, a),
                      r.shouldUnregister || t.keepDefaultValue || P(g, a));
                  (N.state.next({ values: d(_) }),
                    N.state.next({
                      ...s,
                      ...(!t.keepDirty ? {} : { isDirty: eo() }),
                    }),
                    t.keepIsValid || I());
                },
                eF = ({ disabled: e, name: t }) => {
                  if (
                    ("boolean" == typeof e && k.mount) ||
                    e ||
                    A.disabled.has(t)
                  ) {
                    let r = A.disabled.has(t);
                    (e ? A.disabled.add(t) : A.disabled.delete(t),
                      !!e !== r && k.mount && !k.action && I());
                  }
                },
                ew = (e, t = {}) => {
                  let s = m(y, e),
                    a =
                      "boolean" == typeof t.disabled ||
                      "boolean" == typeof r.disabled,
                    i = !A.registerName.has(e) && s && !s._f.mount;
                  return (
                    (h(y, e, {
                      ...(s || {}),
                      _f: {
                        ...(s && s._f ? s._f : { ref: { name: e } }),
                        name: e,
                        mount: !0,
                        ...t,
                      },
                    }),
                    A.mount.add(e),
                    s && !i)
                      ? eF({
                          disabled:
                            "boolean" == typeof t.disabled
                              ? t.disabled
                              : r.disabled,
                          name: e,
                        })
                      : W(e, !0, t.value),
                    {
                      ...(a ? { disabled: t.disabled || r.disabled } : {}),
                      ...(r.progressive
                        ? {
                            required: !!t.required,
                            min: K(t.min),
                            max: K(t.max),
                            minLength: K(t.minLength),
                            maxLength: K(t.maxLength),
                            pattern: K(t.pattern),
                          }
                        : {}),
                      name: e,
                      onChange: ey,
                      onBlur: ey,
                      ref: (a) => {
                        if (a) {
                          let r;
                          (A.registerName.add(e),
                            ew(e, t),
                            A.registerName.delete(e),
                            (s = m(y, e)));
                          let i =
                              (f(a.value) &&
                                a.querySelectorAll &&
                                a.querySelectorAll(
                                  "input,select,textarea",
                                )[0]) ||
                              a,
                            l =
                              "radio" === (r = i).type || "checkbox" === r.type,
                            n = s._f.refs || [];
                          (l ? n.find((e) => e === i) : i === s._f.ref) ||
                            (h(y, e, {
                              _f: {
                                ...s._f,
                                ...(l
                                  ? {
                                      refs: [
                                        ...n.filter(L),
                                        i,
                                        ...(Array.isArray(m(g, e)) ? [{}] : []),
                                      ],
                                      ref: { type: i.type, name: e },
                                    }
                                  : { ref: i }),
                              },
                            }),
                            W(e, !1, void 0, i));
                        } else
                          ((s = m(y, e, {}))._f && (s._f.mount = !1),
                            (r.shouldUnregister || t.shouldUnregister) &&
                              !(o(A.array, e) && k.action) &&
                              A.unMount.add(e));
                      },
                    }
                  );
                },
                ek = () => r.shouldFocusError && et(y, em, A.mount),
                eA = (e, t) => async (a) => {
                  let i;
                  a &&
                    (a.preventDefault && a.preventDefault(),
                    a.persist && a.persist());
                  let l = d(_);
                  if ((N.state.next({ isSubmitting: !0 }), r.resolver)) {
                    let { errors: e, values: t } = await z();
                    ($(), (s.errors = e), (l = d(t)));
                  } else await ei({ fields: y, eventType: "submit" });
                  if (A.disabled.size) for (let e of A.disabled) P(l, e);
                  if ((P(s.errors, w), M(s.errors))) {
                    N.state.next({ errors: {} });
                    try {
                      await e(l, a);
                    } catch (e) {
                      i = e;
                    }
                  } else
                    (t && (await t({ ...s.errors }, a)), ek(), setTimeout(ek));
                  if (
                    (N.state.next({
                      isSubmitted: !0,
                      isSubmitting: !1,
                      isSubmitSuccessful: M(s.errors) && !i,
                      submitCount: s.submitCount + 1,
                      errors: s.errors,
                    }),
                    i)
                  )
                    throw i;
                },
                ex = (e, t = {}) => {
                  let a = e ? d(e) : g,
                    i = d(a),
                    l = M(e),
                    n = l ? g : i;
                  if ((t.keepDefaultValues || (g = a), !t.keepValues)) {
                    if (t.keepDirtyValues)
                      for (let e of Array.from(
                        new Set([...A.mount, ...Object.keys(q(g, _))]),
                      )) {
                        let t = m(s.dirtyFields, e),
                          r = m(_, e),
                          a = m(n, e);
                        t && !f(r) ? h(n, e, r) : t || f(a) || ec(e, a);
                      }
                    else {
                      if (u && f(e))
                        for (let e of A.mount) {
                          let t = m(y, e);
                          if (t && t._f) {
                            let e = Array.isArray(t._f.refs)
                              ? t._f.refs[0]
                              : t._f.ref;
                            if (U(e)) {
                              let t = e.closest("form");
                              if (t) {
                                t.reset();
                                break;
                              }
                            }
                          }
                        }
                      if (t.keepFieldsRef)
                        for (let e of A.mount) ec(e, m(n, e));
                      else y = {};
                    }
                    ((_ = r.shouldUnregister
                      ? t.keepDefaultValues
                        ? d(g)
                        : {}
                      : d(n)),
                      N.array.next({ values: { ...n } }),
                      N.state.next({ values: { ...n } }));
                  }
                  ((A = {
                    mount: t.keepDirtyValues ? A.mount : new Set(),
                    unMount: new Set(),
                    array: new Set(),
                    registerName: new Set(),
                    disabled: new Set(),
                    watch: new Set(),
                    watchAll: !1,
                    focus: "",
                  }),
                    (k.mount =
                      !C.isValid ||
                      !!t.keepIsValid ||
                      !!t.keepDirtyValues ||
                      (!r.shouldUnregister && !M(n))),
                    (k.watch = !!r.shouldUnregister),
                    (k.keepIsValid = !!t.keepIsValid),
                    (k.action = !1),
                    t.keepErrors || (s.errors = {}),
                    N.state.next({
                      submitCount: t.keepSubmitCount ? s.submitCount : 0,
                      isDirty:
                        !l &&
                        (t.keepDirty
                          ? s.isDirty
                          : !!(t.keepDefaultValues && !O(e, g))),
                      isSubmitted: !!t.keepIsSubmitted && s.isSubmitted,
                      dirtyFields: l
                        ? {}
                        : t.keepDirtyValues
                          ? t.keepDefaultValues && _
                            ? q(g, _)
                            : s.dirtyFields
                          : t.keepDefaultValues && e
                            ? q(g, e)
                            : t.keepDirty
                              ? s.dirtyFields
                              : {},
                      touchedFields: t.keepTouched ? s.touchedFields : {},
                      errors: t.keepErrors ? s.errors : {},
                      isSubmitSuccessful:
                        !!t.keepIsSubmitSuccessful && s.isSubmitSuccessful,
                      isSubmitting: !1,
                      defaultValues: g,
                    }));
                },
                eS = (e, t) => ex(p(e) ? e(_) : e, { ...r.resetOptions, ...t }),
                eD = (e) => {
                  s = { ...s, ...e };
                },
                eE = {
                  control: {
                    register: ew,
                    unregister: eV,
                    getFieldState: ev,
                    handleSubmit: eA,
                    setError: eg,
                    _subscribe: e_,
                    _runSchema: z,
                    _updateIsValidating: $,
                    _focusError: ek,
                    _getWatch: eu,
                    _getDirty: eo,
                    _setValid: I,
                    _setFieldArray: (e, t = [], a, i, l = !0, n = !0) => {
                      if (i && a && !r.disabled) {
                        if (((k.action = !0), n && Array.isArray(m(y, e)))) {
                          let t = a(m(y, e), i.argA, i.argB);
                          l && h(y, e, t);
                        }
                        if (n && Array.isArray(m(s.errors, e))) {
                          let t,
                            r = a(m(s.errors, e), i.argA, i.argB);
                          (l && h(s.errors, e, r),
                            c(m((t = s.errors), e)).length || P(t, e));
                        }
                        if (
                          (C.touchedFields || j.touchedFields) &&
                          n &&
                          Array.isArray(m(s.touchedFields, e))
                        ) {
                          let t = a(m(s.touchedFields, e), i.argA, i.argB);
                          l && h(s.touchedFields, e, t);
                        }
                        ((C.dirtyFields || j.dirtyFields) && H(e),
                          N.state.next({
                            name: e,
                            isDirty: eo(e, t),
                            dirtyFields: s.dirtyFields,
                            errors: s.errors,
                            isValid: s.isValid,
                          }));
                      } else h(_, e, t);
                    },
                    _setDisabledField: eF,
                    _setErrors: (e) => {
                      ((s.errors = e),
                        N.state.next({ errors: s.errors, isValid: !1 }));
                    },
                    _getFieldArray: (e) =>
                      c(
                        m(
                          k.mount ? _ : g,
                          e,
                          r.shouldUnregister ? m(g, e, []) : [],
                        ),
                      ),
                    _reset: ex,
                    _resetDefaultValues: () =>
                      p(r.defaultValues) &&
                      r.defaultValues().then((e) => {
                        (eS(e, r.resetOptions),
                          N.state.next({ isLoading: !1 }));
                      }),
                    _removeUnmounted: () => {
                      for (let e of A.unMount) {
                        let t = m(y, e);
                        t &&
                          (t._f.refs
                            ? t._f.refs.every((e) => !L(e))
                            : !L(t._f.ref)) &&
                          eV(e);
                      }
                      A.unMount = new Set();
                    },
                    _disableForm: (e) => {
                      "boolean" == typeof e &&
                        (N.state.next({ disabled: e }),
                        et(
                          y,
                          (t, r) => {
                            let s = m(y, r);
                            s &&
                              ((t.disabled = s._f.disabled || e),
                              Array.isArray(s._f.refs) &&
                                s._f.refs.forEach((t) => {
                                  t.disabled = s._f.disabled || e;
                                }));
                          },
                          0,
                          !1,
                        ));
                    },
                    _subjects: N,
                    _proxyFormState: C,
                    get _fields() {
                      return y;
                    },
                    get _formValues() {
                      return _;
                    },
                    get _state() {
                      return k;
                    },
                    set _state(e) {
                      k = e;
                    },
                    get _defaultValues() {
                      return g;
                    },
                    get _names() {
                      return A;
                    },
                    set _names(e) {
                      A = e;
                    },
                    get _formState() {
                      return s;
                    },
                    get _options() {
                      return r;
                    },
                    set _options(e) {
                      r = { ...r, ...e };
                    },
                  },
                  subscribe: (e) => (
                    (k.mount = !0),
                    (j = { ...j, ...e.formState }),
                    e_({ ...e, formState: { ...E, ...e.formState } })
                  ),
                  trigger: ep,
                  register: ew,
                  handleSubmit: eA,
                  watch: (e, t) =>
                    p(e)
                      ? N.state.subscribe({
                          next: (r) => "values" in r && e(eu(void 0, t), r),
                        })
                      : eu(e, t, !0),
                  setValue: ec,
                  getValues: eh,
                  reset: eS,
                  resetField: (e, t = {}) => {
                    m(y, e) &&
                      (f(t.defaultValue)
                        ? ec(e, d(m(g, e)))
                        : (ec(e, t.defaultValue), h(g, e, d(t.defaultValue))),
                      t.keepTouched || P(s.touchedFields, e),
                      t.keepDirty ||
                        (P(s.dirtyFields, e),
                        (s.isDirty = t.defaultValue
                          ? eo(e, d(m(g, e)))
                          : eo())),
                      !t.keepError && (P(s.errors, e), C.isValid && I()),
                      N.state.next({ ...s }));
                  },
                  clearErrors: eb,
                  unregister: eV,
                  setError: eg,
                  setFocus: (e, t = {}) => {
                    let r = m(y, e),
                      s = r && r._f;
                    if (s) {
                      let e = s.refs ? s.refs[0] : s.ref;
                      e.focus &&
                        setTimeout(() => {
                          (e.focus(),
                            t.shouldSelect && p(e.select) && e.select());
                        });
                    }
                  },
                  getFieldState: ev,
                };
              return { ...eE, formControl: eE };
            })(e);
            t.current = { ...s, formState: y };
          }
        let _ = t.current.control;
        return (
          (_._options = e),
          x(() => {
            let e = _._subscribe({
              formState: _._proxyFormState,
              callback: () => g({ ..._._formState }),
              reRenderRoot: !0,
            });
            return (
              g((e) => ({ ...e, isReady: !0 })),
              (_._formState.isReady = !0),
              e
            );
          }, [_]),
          s.useEffect(() => _._disableForm(e.disabled), [_, e.disabled]),
          s.useEffect(() => {
            (e.mode && (_._options.mode = e.mode),
              e.reValidateMode &&
                (_._options.reValidateMode = e.reValidateMode));
          }, [_, e.mode, e.reValidateMode]),
          s.useEffect(() => {
            e.errors && (_._setErrors(e.errors), _._focusError());
          }, [_, e.errors]),
          s.useEffect(() => {
            e.shouldUnregister &&
              _._subjects.state.next({ values: _._getWatch() });
          }, [_, e.shouldUnregister]),
          s.useEffect(() => {
            if (_._proxyFormState.isDirty) {
              let e = _._getDirty();
              e !== y.isDirty && _._subjects.state.next({ isDirty: e });
            }
          }, [_, y.isDirty]),
          s.useEffect(() => {
            var t;
            e.values && !O(e.values, r.current)
              ? (_._reset(e.values, {
                  keepFieldsRef: !0,
                  ..._._options.resetOptions,
                }),
                (null == (t = _._options.resetOptions)
                  ? void 0
                  : t.keepIsValid) || _._setValid(),
                (r.current = e.values),
                g((e) => ({ ...e })))
              : _._resetDefaultValues();
          }, [_, e.values]),
          s.useEffect(() => {
            (_._state.mount || (_._setValid(), (_._state.mount = !0)),
              _._state.watch &&
                ((_._state.watch = !1),
                _._subjects.state.next({ ..._._formState })),
              _._removeUnmounted());
          }),
          (t.current.formState = s.useMemo(() => A(y, _), [_, y])),
          t.current
        );
      }
    },
  },
]);
