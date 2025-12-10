"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [696],
  {
    81581: function (e, r, s) {
      s.d(r, {
        F: function () {
          return zod_t;
        },
      });
      var l = s(86848),
        t = function (e, r, s) {
          if (e && "reportValidity" in e) {
            var u = (0, l.U2)(s, r);
            (e.setCustomValidity((u && u.message) || ""), e.reportValidity());
          }
        },
        resolvers_i = function (e, r) {
          var i = function (s) {
            var l = r.fields[s];
            l && l.ref && "reportValidity" in l.ref
              ? t(l.ref, s, e)
              : l.refs &&
                l.refs.forEach(function (r) {
                  return t(r, s, e);
                });
          };
          for (var s in r.fields) i(s);
        },
        n = function (e, r) {
          r.shouldUseNativeValidation && resolvers_i(e, r);
          var s = {};
          for (var u in e) {
            var d = (0, l.U2)(r.fields, u),
              c = Object.assign(e[u] || {}, { ref: d && d.ref });
            if (a(r.names || Object.keys(e), u)) {
              var f = Object.assign({}, o((0, l.U2)(s, u)));
              ((0, l.t8)(f, "root", c), (0, l.t8)(s, u, f));
            } else (0, l.t8)(s, u, c);
          }
          return s;
        },
        o = function (e) {
          return Array.isArray(e) ? e.filter(Boolean) : [];
        },
        a = function (e, r) {
          return e.some(function (e) {
            return e.startsWith(r + ".");
          });
        },
        zod_n = function (e, r) {
          for (var s = {}; e.length; ) {
            var u = e[0],
              d = u.code,
              c = u.message,
              f = u.path.join(".");
            if (!s[f]) {
              if ("unionErrors" in u) {
                var g = u.unionErrors[0].errors[0];
                s[f] = { message: g.message, type: g.code };
              } else s[f] = { message: c, type: d };
            }
            if (
              ("unionErrors" in u &&
                u.unionErrors.forEach(function (r) {
                  return r.errors.forEach(function (r) {
                    return e.push(r);
                  });
                }),
              r)
            ) {
              var y = s[f].types,
                m = y && y[u.code];
              s[f] = (0, l.KN)(
                f,
                r,
                s,
                d,
                m ? [].concat(m, u.message) : u.message,
              );
            }
            e.shift();
          }
          return s;
        },
        zod_t = function (e, r, s) {
          return (
            void 0 === s && (s = {}),
            function (l, u, d) {
              try {
                return Promise.resolve(
                  (function (u, c) {
                    try {
                      var f = Promise.resolve(
                        e["sync" === s.mode ? "parse" : "parseAsync"](l, r),
                      ).then(function (e) {
                        return (
                          d.shouldUseNativeValidation && resolvers_i({}, d),
                          { errors: {}, values: s.raw ? l : e }
                        );
                      });
                    } catch (e) {
                      return c(e);
                    }
                    return f && f.then ? f.then(void 0, c) : f;
                  })(0, function (e) {
                    if (null != e.errors)
                      return {
                        values: {},
                        errors: n(
                          zod_n(
                            e.errors,
                            !d.shouldUseNativeValidation &&
                              "all" === d.criteriaMode,
                          ),
                          d,
                        ),
                      };
                    throw e;
                  }),
                );
              } catch (e) {
                return Promise.reject(e);
              }
            }
          );
        };
    },
    86848: function (e, r, s) {
      s.d(r, {
        KN: function () {
          return appendErrors;
        },
        Qr: function () {
          return Controller;
        },
        U2: function () {
          return get;
        },
        cI: function () {
          return useForm;
        },
        qo: function () {
          return useWatch;
        },
        t8: function () {
          return set;
        },
      });
      var l = s(52983),
        isCheckBoxInput = (e) => "checkbox" === e.type,
        isDateObject = (e) => e instanceof Date,
        isNullOrUndefined = (e) => null == e;
      let isObjectType = (e) => "object" == typeof e;
      var isObject = (e) =>
          !isNullOrUndefined(e) &&
          !Array.isArray(e) &&
          isObjectType(e) &&
          !isDateObject(e),
        getEventValue = (e) =>
          isObject(e) && e.target
            ? isCheckBoxInput(e.target)
              ? e.target.checked
              : e.target.value
            : e,
        getNodeParentName = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
        isNameInFieldArray = (e, r) => e.has(getNodeParentName(r)),
        isPlainObject = (e) => {
          let r = e.constructor && e.constructor.prototype;
          return isObject(r) && r.hasOwnProperty("isPrototypeOf");
        },
        u =
          "undefined" != typeof window &&
          void 0 !== window.HTMLElement &&
          "undefined" != typeof document;
      function cloneObject(e) {
        let r;
        let s = Array.isArray(e);
        if (e instanceof Date) r = new Date(e);
        else if (e instanceof Set) r = new Set(e);
        else if (
          !(
            !(u && (e instanceof Blob || e instanceof FileList)) &&
            (s || isObject(e))
          )
        )
          return e;
        else if (((r = s ? [] : {}), s || isPlainObject(e)))
          for (let s in e) e.hasOwnProperty(s) && (r[s] = cloneObject(e[s]));
        else r = e;
        return r;
      }
      var compact = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
        isUndefined = (e) => void 0 === e,
        get = (e, r, s) => {
          if (!r || !isObject(e)) return s;
          let l = compact(r.split(/[,[\].]+?/)).reduce(
            (e, r) => (isNullOrUndefined(e) ? e : e[r]),
            e,
          );
          return isUndefined(l) || l === e ? (isUndefined(e[r]) ? s : e[r]) : l;
        },
        isBoolean = (e) => "boolean" == typeof e;
      let d = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
        c = {
          onBlur: "onBlur",
          onChange: "onChange",
          onSubmit: "onSubmit",
          onTouched: "onTouched",
          all: "all",
        },
        f = {
          max: "max",
          min: "min",
          maxLength: "maxLength",
          minLength: "minLength",
          pattern: "pattern",
          required: "required",
          validate: "validate",
        },
        g = l.createContext(null),
        useFormContext = () => l.useContext(g);
      var getProxyFormState = (e, r, s, l = !0) => {
          let u = { defaultValues: r._defaultValues };
          for (let d in e)
            Object.defineProperty(u, d, {
              get: () => (
                r._proxyFormState[d] !== c.all &&
                  (r._proxyFormState[d] = !l || c.all),
                s && (s[d] = !0),
                e[d]
              ),
            });
          return u;
        },
        isEmptyObject = (e) => isObject(e) && !Object.keys(e).length,
        shouldRenderFormState = (e, r, s, l) => {
          s(e);
          let { name: u, ...d } = e;
          return (
            isEmptyObject(d) ||
            Object.keys(d).length >= Object.keys(r).length ||
            Object.keys(d).find((e) => r[e] === (!l || c.all))
          );
        },
        convertToArrayPayload = (e) => (Array.isArray(e) ? e : [e]),
        shouldSubscribeByName = (e, r, s) =>
          !e ||
          !r ||
          e === r ||
          convertToArrayPayload(e).some(
            (e) => e && (s ? e === r : e.startsWith(r) || r.startsWith(e)),
          );
      function useSubscribe(e) {
        let r = l.useRef(e);
        ((r.current = e),
          l.useEffect(() => {
            let s =
              !e.disabled &&
              r.current.subject &&
              r.current.subject.subscribe({ next: r.current.next });
            return () => {
              s && s.unsubscribe();
            };
          }, [e.disabled]));
      }
      var isString = (e) => "string" == typeof e,
        generateWatchOutput = (e, r, s, l, u) =>
          isString(e)
            ? (l && r.watch.add(e), get(s, e, u))
            : Array.isArray(e)
              ? e.map((e) => (l && r.watch.add(e), get(s, e)))
              : (l && (r.watchAll = !0), s);
      function useWatch(e) {
        let r = useFormContext(),
          {
            control: s = r.control,
            name: u,
            defaultValue: d,
            disabled: c,
            exact: f,
          } = e || {},
          g = l.useRef(u);
        ((g.current = u),
          useSubscribe({
            disabled: c,
            subject: s._subjects.values,
            next: (e) => {
              shouldSubscribeByName(g.current, e.name, f) &&
                m(
                  cloneObject(
                    generateWatchOutput(
                      g.current,
                      s._names,
                      e.values || s._formValues,
                      !1,
                      d,
                    ),
                  ),
                );
            },
          }));
        let [y, m] = l.useState(s._getWatch(u, d));
        return (l.useEffect(() => s._removeUnmounted()), y);
      }
      var isKey = (e) => /^\w*$/.test(e),
        stringToPath = (e) =>
          compact(e.replace(/["|']|\]/g, "").split(/\.|\[/));
      function set(e, r, s) {
        let l = -1,
          u = isKey(r) ? [r] : stringToPath(r),
          d = u.length,
          c = d - 1;
        for (; ++l < d; ) {
          let r = u[l],
            d = s;
          if (l !== c) {
            let s = e[r];
            d =
              isObject(s) || Array.isArray(s) ? s : isNaN(+u[l + 1]) ? {} : [];
          }
          ((e[r] = d), (e = e[r]));
        }
        return e;
      }
      let Controller = (e) =>
        e.render(
          (function (e) {
            let r = useFormContext(),
              {
                name: s,
                disabled: u,
                control: c = r.control,
                shouldUnregister: f,
              } = e,
              g = isNameInFieldArray(c._names.array, s),
              y = useWatch({
                control: c,
                name: s,
                defaultValue: get(
                  c._formValues,
                  s,
                  get(c._defaultValues, s, e.defaultValue),
                ),
                exact: !0,
              }),
              m = (function (e) {
                let r = useFormContext(),
                  {
                    control: s = r.control,
                    disabled: u,
                    name: d,
                    exact: c,
                  } = e || {},
                  [f, g] = l.useState(s._formState),
                  y = l.useRef(!0),
                  m = l.useRef({
                    isDirty: !1,
                    isLoading: !1,
                    dirtyFields: !1,
                    touchedFields: !1,
                    isValidating: !1,
                    isValid: !1,
                    errors: !1,
                  }),
                  p = l.useRef(d);
                return (
                  (p.current = d),
                  useSubscribe({
                    disabled: u,
                    next: (e) =>
                      y.current &&
                      shouldSubscribeByName(p.current, e.name, c) &&
                      shouldRenderFormState(e, m.current, s._updateFormState) &&
                      g({ ...s._formState, ...e }),
                    subject: s._subjects.state,
                  }),
                  l.useEffect(
                    () => (
                      (y.current = !0),
                      m.current.isValid && s._updateValid(!0),
                      () => {
                        y.current = !1;
                      }
                    ),
                    [s],
                  ),
                  getProxyFormState(f, s, m.current, !1)
                );
              })({ control: c, name: s }),
              p = l.useRef(c.register(s, { ...e.rules, value: y }));
            return (
              (p.current = c.register(s, e.rules)),
              l.useEffect(() => {
                let e = c._options.shouldUnregister || f,
                  updateMounted = (e, r) => {
                    let s = get(c._fields, e);
                    s && (s._f.mount = r);
                  };
                if ((updateMounted(s, !0), e)) {
                  let e = cloneObject(get(c._options.defaultValues, s));
                  (set(c._defaultValues, s, e),
                    isUndefined(get(c._formValues, s)) &&
                      set(c._formValues, s, e));
                }
                return () => {
                  (g ? e && !c._state.action : e)
                    ? c.unregister(s)
                    : updateMounted(s, !1);
                };
              }, [s, c, g, f]),
              l.useEffect(() => {
                get(c._fields, s) &&
                  c._updateDisabledField({
                    disabled: u,
                    fields: c._fields,
                    name: s,
                  });
              }, [u, s, c]),
              {
                field: {
                  name: s,
                  value: y,
                  ...(isBoolean(u) ? { disabled: u } : {}),
                  onChange: l.useCallback(
                    (e) =>
                      p.current.onChange({
                        target: { value: getEventValue(e), name: s },
                        type: d.CHANGE,
                      }),
                    [s],
                  ),
                  onBlur: l.useCallback(
                    () =>
                      p.current.onBlur({
                        target: { value: get(c._formValues, s), name: s },
                        type: d.BLUR,
                      }),
                    [s, c],
                  ),
                  ref: (e) => {
                    let r = get(c._fields, s);
                    r &&
                      e &&
                      (r._f.ref = {
                        focus: () => e.focus(),
                        select: () => e.select(),
                        setCustomValidity: (r) => e.setCustomValidity(r),
                        reportValidity: () => e.reportValidity(),
                      });
                  },
                },
                formState: m,
                fieldState: Object.defineProperties(
                  {},
                  {
                    invalid: { enumerable: !0, get: () => !!get(m.errors, s) },
                    isDirty: {
                      enumerable: !0,
                      get: () => !!get(m.dirtyFields, s),
                    },
                    isTouched: {
                      enumerable: !0,
                      get: () => !!get(m.touchedFields, s),
                    },
                    error: { enumerable: !0, get: () => get(m.errors, s) },
                  },
                ),
              }
            );
          })(e),
        );
      var appendErrors = (e, r, s, l, u) =>
        r
          ? {
              ...s[e],
              types: {
                ...(s[e] && s[e].types ? s[e].types : {}),
                [l]: u || !0,
              },
            }
          : {};
      let focusFieldBy = (e, r, s) => {
        for (let l of s || Object.keys(e)) {
          let s = get(e, l);
          if (s) {
            let { _f: e, ...l } = s;
            if (e && r(e.name)) {
              if (e.ref.focus) {
                e.ref.focus();
                break;
              }
              if (e.refs && e.refs[0].focus) {
                e.refs[0].focus();
                break;
              }
            } else isObject(l) && focusFieldBy(l, r);
          }
        }
      };
      var getValidationModes = (e) => ({
          isOnSubmit: !e || e === c.onSubmit,
          isOnBlur: e === c.onBlur,
          isOnChange: e === c.onChange,
          isOnAll: e === c.all,
          isOnTouch: e === c.onTouched,
        }),
        isWatched = (e, r, s) =>
          !s &&
          (r.watchAll ||
            r.watch.has(e) ||
            [...r.watch].some(
              (r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length)),
            )),
        updateFieldArrayRootError = (e, r, s) => {
          let l = compact(get(e, s));
          return (set(l, "root", r[s]), set(e, s, l), e);
        },
        isFileInput = (e) => "file" === e.type,
        isFunction = (e) => "function" == typeof e,
        isHTMLElement = (e) => {
          if (!u) return !1;
          let r = e ? e.ownerDocument : 0;
          return (
            e instanceof
            (r && r.defaultView ? r.defaultView.HTMLElement : HTMLElement)
          );
        },
        isMessage = (e) => isString(e),
        isRadioInput = (e) => "radio" === e.type,
        isRegex = (e) => e instanceof RegExp;
      let y = { value: !1, isValid: !1 },
        m = { value: !0, isValid: !0 };
      var getCheckboxValue = (e) => {
        if (Array.isArray(e)) {
          if (e.length > 1) {
            let r = e
              .filter((e) => e && e.checked && !e.disabled)
              .map((e) => e.value);
            return { value: r, isValid: !!r.length };
          }
          return e[0].checked && !e[0].disabled
            ? e[0].attributes && !isUndefined(e[0].attributes.value)
              ? isUndefined(e[0].value) || "" === e[0].value
                ? m
                : { value: e[0].value, isValid: !0 }
              : m
            : y;
        }
        return y;
      };
      let p = { isValid: !1, value: null };
      var getRadioValue = (e) =>
        Array.isArray(e)
          ? e.reduce(
              (e, r) =>
                r && r.checked && !r.disabled
                  ? { isValid: !0, value: r.value }
                  : e,
              p,
            )
          : p;
      function getValidateError(e, r, s = "validate") {
        if (
          isMessage(e) ||
          (Array.isArray(e) && e.every(isMessage)) ||
          (isBoolean(e) && !e)
        )
          return { type: s, message: isMessage(e) ? e : "", ref: r };
      }
      var getValueAndMessage = (e) =>
          isObject(e) && !isRegex(e) ? e : { value: e, message: "" },
        validateField = async (e, r, s, l, u) => {
          let {
              ref: d,
              refs: c,
              required: g,
              maxLength: y,
              minLength: m,
              min: p,
              max: h,
              pattern: b,
              validate: V,
              name: v,
              valueAsNumber: _,
              mount: F,
              disabled: O,
            } = e._f,
            S = get(r, v);
          if (!F || O) return {};
          let A = c ? c[0] : d,
            setCustomValidity = (e) => {
              l &&
                A.reportValidity &&
                (A.setCustomValidity(isBoolean(e) ? "" : e || ""),
                A.reportValidity());
            },
            x = {},
            D = isRadioInput(d),
            j = isCheckBoxInput(d),
            E =
              ((_ || isFileInput(d)) &&
                isUndefined(d.value) &&
                isUndefined(S)) ||
              (isHTMLElement(d) && "" === d.value) ||
              "" === S ||
              (Array.isArray(S) && !S.length),
            k = appendErrors.bind(null, v, s, x),
            getMinMaxMessage = (e, r, s, l = f.maxLength, u = f.minLength) => {
              let c = e ? r : s;
              x[v] = {
                type: e ? l : u,
                message: c,
                ref: d,
                ...k(e ? l : u, c),
              };
            };
          if (
            u
              ? !Array.isArray(S) || !S.length
              : g &&
                ((!(D || j) && (E || isNullOrUndefined(S))) ||
                  (isBoolean(S) && !S) ||
                  (j && !getCheckboxValue(c).isValid) ||
                  (D && !getRadioValue(c).isValid))
          ) {
            let { value: e, message: r } = isMessage(g)
              ? { value: !!g, message: g }
              : getValueAndMessage(g);
            if (
              e &&
              ((x[v] = {
                type: f.required,
                message: r,
                ref: A,
                ...k(f.required, r),
              }),
              !s)
            )
              return (setCustomValidity(r), x);
          }
          if (!E && (!isNullOrUndefined(p) || !isNullOrUndefined(h))) {
            let e, r;
            let l = getValueAndMessage(h),
              u = getValueAndMessage(p);
            if (isNullOrUndefined(S) || isNaN(S)) {
              let s = d.valueAsDate || new Date(S),
                convertTimeToDate = (e) =>
                  new Date(new Date().toDateString() + " " + e),
                c = "time" == d.type,
                f = "week" == d.type;
              (isString(l.value) &&
                S &&
                (e = c
                  ? convertTimeToDate(S) > convertTimeToDate(l.value)
                  : f
                    ? S > l.value
                    : s > new Date(l.value)),
                isString(u.value) &&
                  S &&
                  (r = c
                    ? convertTimeToDate(S) < convertTimeToDate(u.value)
                    : f
                      ? S < u.value
                      : s < new Date(u.value)));
            } else {
              let s = d.valueAsNumber || (S ? +S : S);
              (isNullOrUndefined(l.value) || (e = s > l.value),
                isNullOrUndefined(u.value) || (r = s < u.value));
            }
            if (
              (e || r) &&
              (getMinMaxMessage(!!e, l.message, u.message, f.max, f.min), !s)
            )
              return (setCustomValidity(x[v].message), x);
          }
          if ((y || m) && !E && (isString(S) || (u && Array.isArray(S)))) {
            let e = getValueAndMessage(y),
              r = getValueAndMessage(m),
              l = !isNullOrUndefined(e.value) && S.length > +e.value,
              u = !isNullOrUndefined(r.value) && S.length < +r.value;
            if ((l || u) && (getMinMaxMessage(l, e.message, r.message), !s))
              return (setCustomValidity(x[v].message), x);
          }
          if (b && !E && isString(S)) {
            let { value: e, message: r } = getValueAndMessage(b);
            if (
              isRegex(e) &&
              !S.match(e) &&
              ((x[v] = {
                type: f.pattern,
                message: r,
                ref: d,
                ...k(f.pattern, r),
              }),
              !s)
            )
              return (setCustomValidity(r), x);
          }
          if (V) {
            if (isFunction(V)) {
              let e = await V(S, r),
                l = getValidateError(e, A);
              if (l && ((x[v] = { ...l, ...k(f.validate, l.message) }), !s))
                return (setCustomValidity(l.message), x);
            } else if (isObject(V)) {
              let e = {};
              for (let l in V) {
                if (!isEmptyObject(e) && !s) break;
                let u = getValidateError(await V[l](S, r), A, l);
                u &&
                  ((e = { ...u, ...k(l, u.message) }),
                  setCustomValidity(u.message),
                  s && (x[v] = e));
              }
              if (!isEmptyObject(e) && ((x[v] = { ref: A, ...e }), !s))
                return x;
            }
          }
          return (setCustomValidity(!0), x);
        };
      function unset(e, r) {
        let s = Array.isArray(r) ? r : isKey(r) ? [r] : stringToPath(r),
          l =
            1 === s.length
              ? e
              : (function (e, r) {
                  let s = r.slice(0, -1).length,
                    l = 0;
                  for (; l < s; ) e = isUndefined(e) ? l++ : e[r[l++]];
                  return e;
                })(e, s),
          u = s.length - 1,
          d = s[u];
        return (
          l && delete l[d],
          0 !== u &&
            ((isObject(l) && isEmptyObject(l)) ||
              (Array.isArray(l) &&
                (function (e) {
                  for (let r in e)
                    if (e.hasOwnProperty(r) && !isUndefined(e[r])) return !1;
                  return !0;
                })(l))) &&
            unset(e, s.slice(0, -1)),
          e
        );
      }
      function createSubject() {
        let e = [];
        return {
          get observers() {
            return e;
          },
          next: (r) => {
            for (let s of e) s.next && s.next(r);
          },
          subscribe: (r) => (
            e.push(r),
            {
              unsubscribe: () => {
                e = e.filter((e) => e !== r);
              },
            }
          ),
          unsubscribe: () => {
            e = [];
          },
        };
      }
      var isPrimitive = (e) => isNullOrUndefined(e) || !isObjectType(e);
      function deepEqual(e, r) {
        if (isPrimitive(e) || isPrimitive(r)) return e === r;
        if (isDateObject(e) && isDateObject(r))
          return e.getTime() === r.getTime();
        let s = Object.keys(e),
          l = Object.keys(r);
        if (s.length !== l.length) return !1;
        for (let u of s) {
          let s = e[u];
          if (!l.includes(u)) return !1;
          if ("ref" !== u) {
            let e = r[u];
            if (
              (isDateObject(s) && isDateObject(e)) ||
              (isObject(s) && isObject(e)) ||
              (Array.isArray(s) && Array.isArray(e))
                ? !deepEqual(s, e)
                : s !== e
            )
              return !1;
          }
        }
        return !0;
      }
      var isMultipleSelect = (e) => "select-multiple" === e.type,
        isRadioOrCheckbox = (e) => isRadioInput(e) || isCheckBoxInput(e),
        live = (e) => isHTMLElement(e) && e.isConnected,
        objectHasFunction = (e) => {
          for (let r in e) if (isFunction(e[r])) return !0;
          return !1;
        };
      function markFieldsDirty(e, r = {}) {
        let s = Array.isArray(e);
        if (isObject(e) || s)
          for (let s in e)
            Array.isArray(e[s]) || (isObject(e[s]) && !objectHasFunction(e[s]))
              ? ((r[s] = Array.isArray(e[s]) ? [] : {}),
                markFieldsDirty(e[s], r[s]))
              : isNullOrUndefined(e[s]) || (r[s] = !0);
        return r;
      }
      var getDirtyFields = (e, r) =>
          (function getDirtyFieldsFromDefaultValues(e, r, s) {
            let l = Array.isArray(e);
            if (isObject(e) || l)
              for (let l in e)
                Array.isArray(e[l]) ||
                (isObject(e[l]) && !objectHasFunction(e[l]))
                  ? isUndefined(r) || isPrimitive(s[l])
                    ? (s[l] = Array.isArray(e[l])
                        ? markFieldsDirty(e[l], [])
                        : { ...markFieldsDirty(e[l]) })
                    : getDirtyFieldsFromDefaultValues(
                        e[l],
                        isNullOrUndefined(r) ? {} : r[l],
                        s[l],
                      )
                  : (s[l] = !deepEqual(e[l], r[l]));
            return s;
          })(e, r, markFieldsDirty(r)),
        getFieldValueAs = (
          e,
          { valueAsNumber: r, valueAsDate: s, setValueAs: l },
        ) =>
          isUndefined(e)
            ? e
            : r
              ? "" === e
                ? NaN
                : e
                  ? +e
                  : e
              : s && isString(e)
                ? new Date(e)
                : l
                  ? l(e)
                  : e;
      function getFieldValue(e) {
        let r = e.ref;
        return (e.refs ? e.refs.every((e) => e.disabled) : r.disabled)
          ? void 0
          : isFileInput(r)
            ? r.files
            : isRadioInput(r)
              ? getRadioValue(e.refs).value
              : isMultipleSelect(r)
                ? [...r.selectedOptions].map(({ value: e }) => e)
                : isCheckBoxInput(r)
                  ? getCheckboxValue(e.refs).value
                  : getFieldValueAs(
                      isUndefined(r.value) ? e.ref.value : r.value,
                      e,
                    );
      }
      var getResolverOptions = (e, r, s, l) => {
          let u = {};
          for (let s of e) {
            let e = get(r, s);
            e && set(u, s, e._f);
          }
          return {
            criteriaMode: s,
            names: [...e],
            fields: u,
            shouldUseNativeValidation: l,
          };
        },
        getRuleValue = (e) =>
          isUndefined(e)
            ? e
            : isRegex(e)
              ? e.source
              : isObject(e)
                ? isRegex(e.value)
                  ? e.value.source
                  : e.value
                : e,
        hasValidation = (e) =>
          e.mount &&
          (e.required ||
            e.min ||
            e.max ||
            e.maxLength ||
            e.minLength ||
            e.pattern ||
            e.validate);
      function schemaErrorLookup(e, r, s) {
        let l = get(e, s);
        if (l || isKey(s)) return { error: l, name: s };
        let u = s.split(".");
        for (; u.length; ) {
          let l = u.join("."),
            d = get(r, l),
            c = get(e, l);
          if (d && !Array.isArray(d) && s !== l) break;
          if (c && c.type) return { name: l, error: c };
          u.pop();
        }
        return { name: s };
      }
      var skipValidation = (e, r, s, l, u) =>
          !u.isOnAll &&
          (!s && u.isOnTouch
            ? !(r || e)
            : (s ? l.isOnBlur : u.isOnBlur)
              ? !e
              : (s ? !l.isOnChange : !u.isOnChange) || e),
        unsetEmptyArray = (e, r) => !compact(get(e, r)).length && unset(e, r);
      let h = {
        mode: c.onSubmit,
        reValidateMode: c.onChange,
        shouldFocusError: !0,
      };
      function useForm(e = {}) {
        let r = l.useRef(),
          s = l.useRef(),
          [f, g] = l.useState({
            isDirty: !1,
            isValidating: !1,
            isLoading: isFunction(e.defaultValues),
            isSubmitted: !1,
            isSubmitting: !1,
            isSubmitSuccessful: !1,
            isValid: !1,
            submitCount: 0,
            dirtyFields: {},
            touchedFields: {},
            errors: {},
            defaultValues: isFunction(e.defaultValues)
              ? void 0
              : e.defaultValues,
          });
        r.current ||
          (r.current = {
            ...(function (e = {}, r) {
              let s,
                l = { ...h, ...e },
                f = {
                  submitCount: 0,
                  isDirty: !1,
                  isLoading: isFunction(l.defaultValues),
                  isValidating: !1,
                  isSubmitted: !1,
                  isSubmitting: !1,
                  isSubmitSuccessful: !1,
                  isValid: !1,
                  touchedFields: {},
                  dirtyFields: {},
                  errors: {},
                },
                g = {},
                y =
                  ((isObject(l.defaultValues) || isObject(l.values)) &&
                    cloneObject(l.defaultValues || l.values)) ||
                  {},
                m = l.shouldUnregister ? {} : cloneObject(y),
                p = { action: !1, mount: !1, watch: !1 },
                b = {
                  mount: new Set(),
                  unMount: new Set(),
                  array: new Set(),
                  watch: new Set(),
                },
                V = 0,
                v = {
                  isDirty: !1,
                  dirtyFields: !1,
                  touchedFields: !1,
                  isValidating: !1,
                  isValid: !1,
                  errors: !1,
                },
                _ = {
                  values: createSubject(),
                  array: createSubject(),
                  state: createSubject(),
                },
                F = e.resetOptions && e.resetOptions.keepDirtyValues,
                O = getValidationModes(l.mode),
                S = getValidationModes(l.reValidateMode),
                A = l.criteriaMode === c.all,
                debounce = (e) => (r) => {
                  (clearTimeout(V), (V = setTimeout(e, r)));
                },
                _updateValid = async (e) => {
                  if (v.isValid || e) {
                    let e = l.resolver
                      ? isEmptyObject((await _executeSchema()).errors)
                      : await executeBuiltInValidation(g, !0);
                    e !== f.isValid && _.state.next({ isValid: e });
                  }
                },
                _updateIsValidating = (e) =>
                  v.isValidating && _.state.next({ isValidating: e }),
                updateErrors = (e, r) => {
                  (set(f.errors, e, r), _.state.next({ errors: f.errors }));
                },
                updateValidAndValue = (e, r, s, l) => {
                  let u = get(g, e);
                  if (u) {
                    let d = get(m, e, isUndefined(s) ? get(y, e) : s);
                    (isUndefined(d) || (l && l.defaultChecked) || r
                      ? set(m, e, r ? d : getFieldValue(u._f))
                      : setFieldValue(e, d),
                      p.mount && _updateValid());
                  }
                },
                updateTouchAndDirty = (e, r, s, l, u) => {
                  let d = !1,
                    c = !1,
                    g = { name: e };
                  if (!s || l) {
                    v.isDirty &&
                      ((c = f.isDirty),
                      (f.isDirty = g.isDirty = _getDirty()),
                      (d = c !== g.isDirty));
                    let s = deepEqual(get(y, e), r);
                    ((c = get(f.dirtyFields, e)),
                      s ? unset(f.dirtyFields, e) : set(f.dirtyFields, e, !0),
                      (g.dirtyFields = f.dirtyFields),
                      (d = d || (v.dirtyFields && !s !== c)));
                  }
                  if (s) {
                    let r = get(f.touchedFields, e);
                    r ||
                      (set(f.touchedFields, e, s),
                      (g.touchedFields = f.touchedFields),
                      (d = d || (v.touchedFields && r !== s)));
                  }
                  return (d && u && _.state.next(g), d ? g : {});
                },
                shouldRenderByError = (r, l, u, d) => {
                  let c = get(f.errors, r),
                    g = v.isValid && isBoolean(l) && f.isValid !== l;
                  if (
                    (e.delayError && u
                      ? (s = debounce(() => updateErrors(r, u)))(e.delayError)
                      : (clearTimeout(V),
                        (s = null),
                        u ? set(f.errors, r, u) : unset(f.errors, r)),
                    (u ? !deepEqual(c, u) : c) || !isEmptyObject(d) || g)
                  ) {
                    let e = {
                      ...d,
                      ...(g && isBoolean(l) ? { isValid: l } : {}),
                      errors: f.errors,
                      name: r,
                    };
                    ((f = { ...f, ...e }), _.state.next(e));
                  }
                  _updateIsValidating(!1);
                },
                _executeSchema = async (e) =>
                  l.resolver(
                    m,
                    l.context,
                    getResolverOptions(
                      e || b.mount,
                      g,
                      l.criteriaMode,
                      l.shouldUseNativeValidation,
                    ),
                  ),
                executeSchemaAndUpdateState = async (e) => {
                  let { errors: r } = await _executeSchema(e);
                  if (e)
                    for (let s of e) {
                      let e = get(r, s);
                      e ? set(f.errors, s, e) : unset(f.errors, s);
                    }
                  else f.errors = r;
                  return r;
                },
                executeBuiltInValidation = async (e, r, s = { valid: !0 }) => {
                  for (let u in e) {
                    let d = e[u];
                    if (d) {
                      let { _f: e, ...u } = d;
                      if (e) {
                        let u = b.array.has(e.name),
                          c = await validateField(
                            d,
                            m,
                            A,
                            l.shouldUseNativeValidation && !r,
                            u,
                          );
                        if (c[e.name] && ((s.valid = !1), r)) break;
                        r ||
                          (get(c, e.name)
                            ? u
                              ? updateFieldArrayRootError(f.errors, c, e.name)
                              : set(f.errors, e.name, c[e.name])
                            : unset(f.errors, e.name));
                      }
                      u && (await executeBuiltInValidation(u, r, s));
                    }
                  }
                  return s.valid;
                },
                _getDirty = (e, r) => (
                  e && r && set(m, e, r),
                  !deepEqual(getValues(), y)
                ),
                _getWatch = (e, r, s) =>
                  generateWatchOutput(
                    e,
                    b,
                    {
                      ...(p.mount
                        ? m
                        : isUndefined(r)
                          ? y
                          : isString(e)
                            ? { [e]: r }
                            : r),
                    },
                    s,
                    r,
                  ),
                setFieldValue = (e, r, s = {}) => {
                  let l = get(g, e),
                    u = r;
                  if (l) {
                    let s = l._f;
                    s &&
                      (s.disabled || set(m, e, getFieldValueAs(r, s)),
                      (u =
                        isHTMLElement(s.ref) && isNullOrUndefined(r) ? "" : r),
                      isMultipleSelect(s.ref)
                        ? [...s.ref.options].forEach(
                            (e) => (e.selected = u.includes(e.value)),
                          )
                        : s.refs
                          ? isCheckBoxInput(s.ref)
                            ? s.refs.length > 1
                              ? s.refs.forEach(
                                  (e) =>
                                    (!e.defaultChecked || !e.disabled) &&
                                    (e.checked = Array.isArray(u)
                                      ? !!u.find((r) => r === e.value)
                                      : u === e.value),
                                )
                              : s.refs[0] && (s.refs[0].checked = !!u)
                            : s.refs.forEach((e) => (e.checked = e.value === u))
                          : isFileInput(s.ref)
                            ? (s.ref.value = "")
                            : ((s.ref.value = u),
                              s.ref.type ||
                                _.values.next({ name: e, values: { ...m } })));
                  }
                  ((s.shouldDirty || s.shouldTouch) &&
                    updateTouchAndDirty(e, u, s.shouldTouch, s.shouldDirty, !0),
                    s.shouldValidate && trigger(e));
                },
                setValues = (e, r, s) => {
                  for (let l in r) {
                    let u = r[l],
                      d = `${e}.${l}`,
                      c = get(g, d);
                    (!b.array.has(e) && isPrimitive(u) && (!c || c._f)) ||
                    isDateObject(u)
                      ? setFieldValue(d, u, s)
                      : setValues(d, u, s);
                  }
                },
                setValue = (e, s, l = {}) => {
                  let u = get(g, e),
                    d = b.array.has(e),
                    c = cloneObject(s);
                  (set(m, e, c),
                    d
                      ? (_.array.next({ name: e, values: { ...m } }),
                        (v.isDirty || v.dirtyFields) &&
                          l.shouldDirty &&
                          _.state.next({
                            name: e,
                            dirtyFields: getDirtyFields(y, m),
                            isDirty: _getDirty(e, c),
                          }))
                      : !u || u._f || isNullOrUndefined(c)
                        ? setFieldValue(e, c, l)
                        : setValues(e, c, l),
                    isWatched(e, b) && _.state.next({ ...f }),
                    _.values.next({ name: e, values: { ...m } }),
                    p.mount || r());
                },
                onChange = async (e) => {
                  let r = e.target,
                    u = r.name,
                    c = !0,
                    y = get(g, u);
                  if (y) {
                    let p, h;
                    let V = r.type ? getFieldValue(y._f) : getEventValue(e),
                      F = e.type === d.BLUR || e.type === d.FOCUS_OUT,
                      x =
                        (!hasValidation(y._f) &&
                          !l.resolver &&
                          !get(f.errors, u) &&
                          !y._f.deps) ||
                        skipValidation(
                          F,
                          get(f.touchedFields, u),
                          f.isSubmitted,
                          S,
                          O,
                        ),
                      D = isWatched(u, b, F);
                    (set(m, u, V),
                      F
                        ? (y._f.onBlur && y._f.onBlur(e), s && s(0))
                        : y._f.onChange && y._f.onChange(e));
                    let j = updateTouchAndDirty(u, V, F, !1),
                      E = !isEmptyObject(j) || D;
                    if (
                      (F ||
                        _.values.next({
                          name: u,
                          type: e.type,
                          values: { ...m },
                        }),
                      x)
                    )
                      return (
                        v.isValid && _updateValid(),
                        E && _.state.next({ name: u, ...(D ? {} : j) })
                      );
                    if (
                      (!F && D && _.state.next({ ...f }),
                      _updateIsValidating(!0),
                      l.resolver)
                    ) {
                      let { errors: e } = await _executeSchema([u]),
                        r = schemaErrorLookup(f.errors, g, u),
                        s = schemaErrorLookup(e, g, r.name || u);
                      ((p = s.error), (u = s.name), (h = isEmptyObject(e)));
                    } else
                      ((p = (
                        await validateField(
                          y,
                          m,
                          A,
                          l.shouldUseNativeValidation,
                        )
                      )[u]),
                        (c = Number.isNaN(V) || V === get(m, u, V)) &&
                          (p
                            ? (h = !1)
                            : v.isValid &&
                              (h = await executeBuiltInValidation(g, !0))));
                    c &&
                      (y._f.deps && trigger(y._f.deps),
                      shouldRenderByError(u, h, p, j));
                  }
                },
                trigger = async (e, r = {}) => {
                  let s, u;
                  let d = convertToArrayPayload(e);
                  if ((_updateIsValidating(!0), l.resolver)) {
                    let r = await executeSchemaAndUpdateState(
                      isUndefined(e) ? e : d,
                    );
                    ((s = isEmptyObject(r)),
                      (u = e ? !d.some((e) => get(r, e)) : s));
                  } else
                    e
                      ? ((u = (
                          await Promise.all(
                            d.map(async (e) => {
                              let r = get(g, e);
                              return await executeBuiltInValidation(
                                r && r._f ? { [e]: r } : r,
                              );
                            }),
                          )
                        ).every(Boolean)) ||
                          f.isValid) &&
                        _updateValid()
                      : (u = s = await executeBuiltInValidation(g));
                  return (
                    _.state.next({
                      ...(!isString(e) || (v.isValid && s !== f.isValid)
                        ? {}
                        : { name: e }),
                      ...(l.resolver || !e ? { isValid: s } : {}),
                      errors: f.errors,
                      isValidating: !1,
                    }),
                    r.shouldFocus &&
                      !u &&
                      focusFieldBy(
                        g,
                        (e) => e && get(f.errors, e),
                        e ? d : b.mount,
                      ),
                    u
                  );
                },
                getValues = (e) => {
                  let r = { ...y, ...(p.mount ? m : {}) };
                  return isUndefined(e)
                    ? r
                    : isString(e)
                      ? get(r, e)
                      : e.map((e) => get(r, e));
                },
                getFieldState = (e, r) => ({
                  invalid: !!get((r || f).errors, e),
                  isDirty: !!get((r || f).dirtyFields, e),
                  isTouched: !!get((r || f).touchedFields, e),
                  error: get((r || f).errors, e),
                }),
                setError = (e, r, s) => {
                  let l = (get(g, e, { _f: {} })._f || {}).ref;
                  (set(f.errors, e, { ...r, ref: l }),
                    _.state.next({ name: e, errors: f.errors, isValid: !1 }),
                    s && s.shouldFocus && l && l.focus && l.focus());
                },
                unregister = (e, r = {}) => {
                  for (let s of e ? convertToArrayPayload(e) : b.mount)
                    (b.mount.delete(s),
                      b.array.delete(s),
                      r.keepValue || (unset(g, s), unset(m, s)),
                      r.keepError || unset(f.errors, s),
                      r.keepDirty || unset(f.dirtyFields, s),
                      r.keepTouched || unset(f.touchedFields, s),
                      l.shouldUnregister || r.keepDefaultValue || unset(y, s));
                  (_.values.next({ values: { ...m } }),
                    _.state.next({
                      ...f,
                      ...(r.keepDirty ? { isDirty: _getDirty() } : {}),
                    }),
                    r.keepIsValid || _updateValid());
                },
                _updateDisabledField = ({
                  disabled: e,
                  name: r,
                  field: s,
                  fields: l,
                }) => {
                  if (isBoolean(e)) {
                    let u = e
                      ? void 0
                      : get(m, r, getFieldValue(s ? s._f : get(l, r)._f));
                    (set(m, r, u), updateTouchAndDirty(r, u, !1, !1, !0));
                  }
                },
                register = (e, r = {}) => {
                  let s = get(g, e),
                    u = isBoolean(r.disabled);
                  return (
                    set(g, e, {
                      ...(s || {}),
                      _f: {
                        ...(s && s._f ? s._f : { ref: { name: e } }),
                        name: e,
                        mount: !0,
                        ...r,
                      },
                    }),
                    b.mount.add(e),
                    s
                      ? _updateDisabledField({
                          field: s,
                          disabled: r.disabled,
                          name: e,
                        })
                      : updateValidAndValue(e, !0, r.value),
                    {
                      ...(u ? { disabled: r.disabled } : {}),
                      ...(l.progressive
                        ? {
                            required: !!r.required,
                            min: getRuleValue(r.min),
                            max: getRuleValue(r.max),
                            minLength: getRuleValue(r.minLength),
                            maxLength: getRuleValue(r.maxLength),
                            pattern: getRuleValue(r.pattern),
                          }
                        : {}),
                      name: e,
                      onChange,
                      onBlur: onChange,
                      ref: (u) => {
                        if (u) {
                          (register(e, r), (s = get(g, e)));
                          let l =
                              (isUndefined(u.value) &&
                                u.querySelectorAll &&
                                u.querySelectorAll(
                                  "input,select,textarea",
                                )[0]) ||
                              u,
                            d = isRadioOrCheckbox(l),
                            c = s._f.refs || [];
                          (d ? c.find((e) => e === l) : l === s._f.ref) ||
                            (set(g, e, {
                              _f: {
                                ...s._f,
                                ...(d
                                  ? {
                                      refs: [
                                        ...c.filter(live),
                                        l,
                                        ...(Array.isArray(get(y, e))
                                          ? [{}]
                                          : []),
                                      ],
                                      ref: { type: l.type, name: e },
                                    }
                                  : { ref: l }),
                              },
                            }),
                            updateValidAndValue(e, !1, void 0, l));
                        } else
                          ((s = get(g, e, {}))._f && (s._f.mount = !1),
                            (l.shouldUnregister || r.shouldUnregister) &&
                              !(isNameInFieldArray(b.array, e) && p.action) &&
                              b.unMount.add(e));
                      },
                    }
                  );
                },
                _focusError = () =>
                  l.shouldFocusError &&
                  focusFieldBy(g, (e) => e && get(f.errors, e), b.mount),
                handleSubmit = (e, r) => async (s) => {
                  s &&
                    (s.preventDefault && s.preventDefault(),
                    s.persist && s.persist());
                  let u = cloneObject(m);
                  if ((_.state.next({ isSubmitting: !0 }), l.resolver)) {
                    let { errors: e, values: r } = await _executeSchema();
                    ((f.errors = e), (u = r));
                  } else await executeBuiltInValidation(g);
                  (unset(f.errors, "root"),
                    isEmptyObject(f.errors)
                      ? (_.state.next({ errors: {} }), await e(u, s))
                      : (r && (await r({ ...f.errors }, s)),
                        _focusError(),
                        setTimeout(_focusError)),
                    _.state.next({
                      isSubmitted: !0,
                      isSubmitting: !1,
                      isSubmitSuccessful: isEmptyObject(f.errors),
                      submitCount: f.submitCount + 1,
                      errors: f.errors,
                    }));
                },
                _reset = (s, l = {}) => {
                  let d = s ? cloneObject(s) : y,
                    c = cloneObject(d),
                    h = s && !isEmptyObject(s) ? c : y;
                  if ((l.keepDefaultValues || (y = d), !l.keepValues)) {
                    if (l.keepDirtyValues || F)
                      for (let e of b.mount)
                        get(f.dirtyFields, e)
                          ? set(h, e, get(m, e))
                          : setValue(e, get(h, e));
                    else {
                      if (u && isUndefined(s))
                        for (let e of b.mount) {
                          let r = get(g, e);
                          if (r && r._f) {
                            let e = Array.isArray(r._f.refs)
                              ? r._f.refs[0]
                              : r._f.ref;
                            if (isHTMLElement(e)) {
                              let r = e.closest("form");
                              if (r) {
                                r.reset();
                                break;
                              }
                            }
                          }
                        }
                      g = {};
                    }
                    ((m = e.shouldUnregister
                      ? l.keepDefaultValues
                        ? cloneObject(y)
                        : {}
                      : cloneObject(h)),
                      _.array.next({ values: { ...h } }),
                      _.values.next({ values: { ...h } }));
                  }
                  ((b = {
                    mount: new Set(),
                    unMount: new Set(),
                    array: new Set(),
                    watch: new Set(),
                    watchAll: !1,
                    focus: "",
                  }),
                    p.mount || r(),
                    (p.mount = !v.isValid || !!l.keepIsValid),
                    (p.watch = !!e.shouldUnregister),
                    _.state.next({
                      submitCount: l.keepSubmitCount ? f.submitCount : 0,
                      isDirty: l.keepDirty
                        ? f.isDirty
                        : !!(l.keepDefaultValues && !deepEqual(s, y)),
                      isSubmitted: !!l.keepIsSubmitted && f.isSubmitted,
                      dirtyFields: l.keepDirtyValues
                        ? f.dirtyFields
                        : l.keepDefaultValues && s
                          ? getDirtyFields(y, s)
                          : {},
                      touchedFields: l.keepTouched ? f.touchedFields : {},
                      errors: l.keepErrors ? f.errors : {},
                      isSubmitSuccessful:
                        !!l.keepIsSubmitSuccessful && f.isSubmitSuccessful,
                      isSubmitting: !1,
                    }));
                },
                reset = (e, r) => _reset(isFunction(e) ? e(m) : e, r);
              return {
                control: {
                  register,
                  unregister,
                  getFieldState,
                  handleSubmit,
                  setError,
                  _executeSchema,
                  _getWatch,
                  _getDirty,
                  _updateValid,
                  _removeUnmounted: () => {
                    for (let e of b.unMount) {
                      let r = get(g, e);
                      r &&
                        (r._f.refs
                          ? r._f.refs.every((e) => !live(e))
                          : !live(r._f.ref)) &&
                        unregister(e);
                    }
                    b.unMount = new Set();
                  },
                  _updateFieldArray: (e, r = [], s, l, u = !0, d = !0) => {
                    if (l && s) {
                      if (((p.action = !0), d && Array.isArray(get(g, e)))) {
                        let r = s(get(g, e), l.argA, l.argB);
                        u && set(g, e, r);
                      }
                      if (d && Array.isArray(get(f.errors, e))) {
                        let r = s(get(f.errors, e), l.argA, l.argB);
                        (u && set(f.errors, e, r),
                          unsetEmptyArray(f.errors, e));
                      }
                      if (
                        v.touchedFields &&
                        d &&
                        Array.isArray(get(f.touchedFields, e))
                      ) {
                        let r = s(get(f.touchedFields, e), l.argA, l.argB);
                        u && set(f.touchedFields, e, r);
                      }
                      (v.dirtyFields && (f.dirtyFields = getDirtyFields(y, m)),
                        _.state.next({
                          name: e,
                          isDirty: _getDirty(e, r),
                          dirtyFields: f.dirtyFields,
                          errors: f.errors,
                          isValid: f.isValid,
                        }));
                    } else set(m, e, r);
                  },
                  _updateDisabledField,
                  _getFieldArray: (r) =>
                    compact(
                      get(
                        p.mount ? m : y,
                        r,
                        e.shouldUnregister ? get(y, r, []) : [],
                      ),
                    ),
                  _reset,
                  _resetDefaultValues: () =>
                    isFunction(l.defaultValues) &&
                    l.defaultValues().then((e) => {
                      (reset(e, l.resetOptions),
                        _.state.next({ isLoading: !1 }));
                    }),
                  _updateFormState: (e) => {
                    f = { ...f, ...e };
                  },
                  _subjects: _,
                  _proxyFormState: v,
                  get _fields() {
                    return g;
                  },
                  get _formValues() {
                    return m;
                  },
                  get _state() {
                    return p;
                  },
                  set _state(value) {
                    p = value;
                  },
                  get _defaultValues() {
                    return y;
                  },
                  get _names() {
                    return b;
                  },
                  set _names(value) {
                    b = value;
                  },
                  get _formState() {
                    return f;
                  },
                  set _formState(value) {
                    f = value;
                  },
                  get _options() {
                    return l;
                  },
                  set _options(value) {
                    l = { ...l, ...value };
                  },
                },
                trigger,
                register,
                handleSubmit,
                watch: (e, r) =>
                  isFunction(e)
                    ? _.values.subscribe({
                        next: (s) => e(_getWatch(void 0, r), s),
                      })
                    : _getWatch(e, r, !0),
                setValue,
                getValues,
                reset,
                resetField: (e, r = {}) => {
                  get(g, e) &&
                    (isUndefined(r.defaultValue)
                      ? setValue(e, get(y, e))
                      : (setValue(e, r.defaultValue),
                        set(y, e, r.defaultValue)),
                    r.keepTouched || unset(f.touchedFields, e),
                    r.keepDirty ||
                      (unset(f.dirtyFields, e),
                      (f.isDirty = r.defaultValue
                        ? _getDirty(e, get(y, e))
                        : _getDirty())),
                    !r.keepError &&
                      (unset(f.errors, e), v.isValid && _updateValid()),
                    _.state.next({ ...f }));
                },
                clearErrors: (e) => {
                  (e &&
                    convertToArrayPayload(e).forEach((e) => unset(f.errors, e)),
                    _.state.next({ errors: e ? f.errors : {} }));
                },
                unregister,
                setError,
                setFocus: (e, r = {}) => {
                  let s = get(g, e),
                    l = s && s._f;
                  if (l) {
                    let e = l.refs ? l.refs[0] : l.ref;
                    e.focus && (e.focus(), r.shouldSelect && e.select());
                  }
                },
                getFieldState,
              };
            })(e, () => g((e) => ({ ...e }))),
            formState: f,
          });
        let y = r.current.control;
        return (
          (y._options = e),
          useSubscribe({
            subject: y._subjects.state,
            next: (e) => {
              shouldRenderFormState(
                e,
                y._proxyFormState,
                y._updateFormState,
                !0,
              ) && g({ ...y._formState });
            },
          }),
          l.useEffect(() => {
            e.values && !deepEqual(e.values, s.current)
              ? (y._reset(e.values, y._options.resetOptions),
                (s.current = e.values))
              : y._resetDefaultValues();
          }, [e.values, y]),
          l.useEffect(() => {
            (y._state.mount || (y._updateValid(), (y._state.mount = !0)),
              y._state.watch &&
                ((y._state.watch = !1),
                y._subjects.state.next({ ...y._formState })),
              y._removeUnmounted());
          }),
          (r.current.formState = getProxyFormState(f, y)),
          r.current
        );
      }
    },
  },
]);
