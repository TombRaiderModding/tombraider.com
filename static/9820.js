(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9820],
  {
    4198: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => i });
      var n = r(36439);
      let i = n.forwardRef(function ({ title: e, titleId: t, ...r }, i) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 1.5,
              stroke: "currentColor",
              "aria-hidden": "true",
              "data-slot": "icon",
              ref: i,
              "aria-labelledby": t,
            },
            r,
          ),
          e ? n.createElement("title", { id: t }, e) : null,
          n.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99",
          }),
        );
      });
    },
    21943: (e, t, r) => {
      var n = r(93252),
        i = r(77834),
        s = r(37851),
        a = Math.ceil,
        o = Math.max;
      e.exports = function (e, t, r) {
        t = (r ? i(e, t, r) : void 0 === t) ? 1 : o(s(t), 0);
        var u = null == e ? 0 : e.length;
        if (!u || t < 1) return [];
        for (var h = 0, l = 0, f = Array(a(u / t)); h < u; )
          f[l++] = n(e, h, (h += t));
        return f;
      };
    },
    23374: (e, t, r) => {
      var n = r(38478),
        i = r(24329),
        s = r(80014),
        a = 0 / 0,
        o = /^[-+]0x[0-9a-f]+$/i,
        u = /^0b[01]+$/i,
        h = /^0o[0-7]+$/i,
        l = parseInt;
      e.exports = function (e) {
        if ("number" == typeof e) return e;
        if (s(e)) return a;
        if (i(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = i(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = n(e);
        var r = u.test(e);
        return r || h.test(e) ? l(e.slice(2), r ? 2 : 8) : o.test(e) ? a : +e;
      };
    },
    24329: (e) => {
      e.exports = function (e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t);
      };
    },
    35076: (e) => {
      e.exports = function (e, t) {
        return e === t || (e != e && t != t);
      };
    },
    36565: (e) => {
      var t = /^(?:0|[1-9]\d*)$/;
      e.exports = function (e, r) {
        var n = typeof e;
        return (
          !!(r = null == r ? 0x1fffffffffffff : r) &&
          ("number" == n || ("symbol" != n && t.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < r
        );
      };
    },
    37851: (e, t, r) => {
      var n = r(50764);
      e.exports = function (e) {
        var t = n(e),
          r = t % 1;
        return t == t ? (r ? t - r : t) : 0;
      };
    },
    38478: (e, t, r) => {
      var n = r(62096),
        i = /^\s+/;
      e.exports = function (e) {
        return e ? e.slice(0, n(e) + 1).replace(i, "") : e;
      };
    },
    47996: function (e, t) {
      var r, n;
      void 0 ===
        (n =
          "function" ==
          typeof (r = function e() {
            var t,
              r =
                "undefined" != typeof self
                  ? self
                  : "undefined" != typeof window
                    ? window
                    : void 0 !== r
                      ? r
                      : {},
              n = !r.document && !!r.postMessage,
              i = r.IS_PAPA_WORKER || !1,
              s = {},
              a = 0,
              o = {};
            function u(e) {
              ((this._handle = null),
                (this._finished = !1),
                (this._completed = !1),
                (this._halted = !1),
                (this._input = null),
                (this._baseIndex = 0),
                (this._partialLine = ""),
                (this._rowCount = 0),
                (this._start = 0),
                (this._nextChunk = null),
                (this.isFirstChunk = !0),
                (this._completeResults = { data: [], errors: [], meta: {} }),
                function (e) {
                  var t = v(e);
                  ((t.chunkSize = parseInt(t.chunkSize)),
                    e.step || e.chunk || (t.chunkSize = null),
                    (this._handle = new c(t)),
                    ((this._handle.streamer = this)._config = t));
                }.call(this, e),
                (this.parseChunk = function (e, t) {
                  var n = parseInt(this._config.skipFirstNLines) || 0;
                  if (this.isFirstChunk && 0 < n) {
                    let t = this._config.newline;
                    (t ||
                      ((s = this._config.quoteChar || '"'),
                      (t = this._handle.guessLineEndings(e, s))),
                      (e = [...e.split(t).slice(n)].join(t)));
                  }
                  (this.isFirstChunk &&
                    b(this._config.beforeFirstChunk) &&
                    void 0 !== (s = this._config.beforeFirstChunk(e)) &&
                    (e = s),
                    (this.isFirstChunk = !1),
                    (this._halted = !1));
                  var n = this._partialLine + e,
                    s =
                      ((this._partialLine = ""),
                      this._handle.parse(n, this._baseIndex, !this._finished));
                  if (!this._handle.paused() && !this._handle.aborted()) {
                    if (
                      ((e = s.meta.cursor),
                      this._finished ||
                        ((this._partialLine = n.substring(e - this._baseIndex)),
                        (this._baseIndex = e)),
                      s && s.data && (this._rowCount += s.data.length),
                      (n =
                        this._finished ||
                        (this._config.preview &&
                          this._rowCount >= this._config.preview)),
                      i)
                    )
                      r.postMessage({
                        results: s,
                        workerId: o.WORKER_ID,
                        finished: n,
                      });
                    else if (b(this._config.chunk) && !t) {
                      if (
                        (this._config.chunk(s, this._handle),
                        this._handle.paused() || this._handle.aborted())
                      )
                        return void (this._halted = !0);
                      this._completeResults = s = void 0;
                    }
                    return (
                      this._config.step ||
                        this._config.chunk ||
                        ((this._completeResults.data =
                          this._completeResults.data.concat(s.data)),
                        (this._completeResults.errors =
                          this._completeResults.errors.concat(s.errors)),
                        (this._completeResults.meta = s.meta)),
                      this._completed ||
                        !n ||
                        !b(this._config.complete) ||
                        (s && s.meta.aborted) ||
                        (this._config.complete(
                          this._completeResults,
                          this._input,
                        ),
                        (this._completed = !0)),
                      n || (s && s.meta.paused) || this._nextChunk(),
                      s
                    );
                  }
                  this._halted = !0;
                }),
                (this._sendError = function (e) {
                  b(this._config.error)
                    ? this._config.error(e)
                    : i &&
                      this._config.error &&
                      r.postMessage({
                        workerId: o.WORKER_ID,
                        error: e,
                        finished: !1,
                      });
                }));
            }
            function h(e) {
              var t;
              ((e = e || {}).chunkSize || (e.chunkSize = o.RemoteChunkSize),
                u.call(this, e),
                (this._nextChunk = n
                  ? function () {
                      (this._readChunk(), this._chunkLoaded());
                    }
                  : function () {
                      this._readChunk();
                    }),
                (this.stream = function (e) {
                  ((this._input = e), this._nextChunk());
                }),
                (this._readChunk = function () {
                  if (this._finished) this._chunkLoaded();
                  else {
                    if (
                      ((t = new XMLHttpRequest()),
                      this._config.withCredentials &&
                        (t.withCredentials = this._config.withCredentials),
                      n ||
                        ((t.onload = k(this._chunkLoaded, this)),
                        (t.onerror = k(this._chunkError, this))),
                      t.open(
                        this._config.downloadRequestBody ? "POST" : "GET",
                        this._input,
                        !n,
                      ),
                      this._config.downloadRequestHeaders)
                    ) {
                      var e,
                        r,
                        i = this._config.downloadRequestHeaders;
                      for (r in i) t.setRequestHeader(r, i[r]);
                    }
                    this._config.chunkSize &&
                      ((e = this._start + this._config.chunkSize - 1),
                      t.setRequestHeader(
                        "Range",
                        "bytes=" + this._start + "-" + e,
                      ));
                    try {
                      t.send(this._config.downloadRequestBody);
                    } catch (e) {
                      this._chunkError(e.message);
                    }
                    n && 0 === t.status && this._chunkError();
                  }
                }),
                (this._chunkLoaded = function () {
                  let e;
                  4 === t.readyState &&
                    (t.status < 200 || 400 <= t.status
                      ? this._chunkError()
                      : ((this._start +=
                          this._config.chunkSize || t.responseText.length),
                        (this._finished =
                          !this._config.chunkSize ||
                          this._start >=
                            (null !==
                            (e = (e = t).getResponseHeader("Content-Range"))
                              ? parseInt(e.substring(e.lastIndexOf("/") + 1))
                              : -1)),
                        this.parseChunk(t.responseText)));
                }),
                (this._chunkError = function (e) {
                  ((e = t.statusText || e), this._sendError(Error(e)));
                }));
            }
            function l(e) {
              ((e = e || {}).chunkSize || (e.chunkSize = o.LocalChunkSize),
                u.call(this, e));
              var t,
                r,
                n = "undefined" != typeof FileReader;
              ((this.stream = function (e) {
                ((this._input = e),
                  (r = e.slice || e.webkitSlice || e.mozSlice),
                  n
                    ? (((t = new FileReader()).onload = k(
                        this._chunkLoaded,
                        this,
                      )),
                      (t.onerror = k(this._chunkError, this)))
                    : (t = new FileReaderSync()),
                  this._nextChunk());
              }),
                (this._nextChunk = function () {
                  this._finished ||
                    (this._config.preview &&
                      !(this._rowCount < this._config.preview)) ||
                    this._readChunk();
                }),
                (this._readChunk = function () {
                  var e = this._input,
                    i =
                      (this._config.chunkSize &&
                        ((i = Math.min(
                          this._start + this._config.chunkSize,
                          this._input.size,
                        )),
                        (e = r.call(e, this._start, i))),
                      t.readAsText(e, this._config.encoding));
                  n || this._chunkLoaded({ target: { result: i } });
                }),
                (this._chunkLoaded = function (e) {
                  ((this._start += this._config.chunkSize),
                    (this._finished =
                      !this._config.chunkSize ||
                      this._start >= this._input.size),
                    this.parseChunk(e.target.result));
                }),
                (this._chunkError = function () {
                  this._sendError(t.error);
                }));
            }
            function f(e) {
              var t;
              (u.call(this, (e = e || {})),
                (this.stream = function (e) {
                  return ((t = e), this._nextChunk());
                }),
                (this._nextChunk = function () {
                  var e, r;
                  if (!this._finished)
                    return (
                      (t = (e = this._config.chunkSize)
                        ? ((r = t.substring(0, e)), t.substring(e))
                        : ((r = t), "")),
                      (this._finished = !t),
                      this.parseChunk(r)
                    );
                }));
            }
            function d(e) {
              u.call(this, (e = e || {}));
              var t = [],
                r = !0,
                n = !1;
              ((this.pause = function () {
                (u.prototype.pause.apply(this, arguments), this._input.pause());
              }),
                (this.resume = function () {
                  (u.prototype.resume.apply(this, arguments),
                    this._input.resume());
                }),
                (this.stream = function (e) {
                  ((this._input = e),
                    this._input.on("data", this._streamData),
                    this._input.on("end", this._streamEnd),
                    this._input.on("error", this._streamError));
                }),
                (this._checkIsFinished = function () {
                  n && 1 === t.length && (this._finished = !0);
                }),
                (this._nextChunk = function () {
                  (this._checkIsFinished(),
                    t.length ? this.parseChunk(t.shift()) : (r = !0));
                }),
                (this._streamData = k(function (e) {
                  try {
                    (t.push(
                      "string" == typeof e
                        ? e
                        : e.toString(this._config.encoding),
                    ),
                      r &&
                        ((r = !1),
                        this._checkIsFinished(),
                        this.parseChunk(t.shift())));
                  } catch (e) {
                    this._streamError(e);
                  }
                }, this)),
                (this._streamError = k(function (e) {
                  (this._streamCleanUp(), this._sendError(e));
                }, this)),
                (this._streamEnd = k(function () {
                  (this._streamCleanUp(), (n = !0), this._streamData(""));
                }, this)),
                (this._streamCleanUp = k(function () {
                  (this._input.removeListener("data", this._streamData),
                    this._input.removeListener("end", this._streamEnd),
                    this._input.removeListener("error", this._streamError));
                }, this)));
            }
            function c(e) {
              var t,
                r,
                n,
                i,
                s = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
                a =
                  /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
                u = this,
                h = 0,
                l = 0,
                f = !1,
                d = !1,
                c = [],
                m = { data: [], errors: [], meta: {} };
              function _(t) {
                return "greedy" === e.skipEmptyLines
                  ? "" === t.join("").trim()
                  : 1 === t.length && 0 === t[0].length;
              }
              function y() {
                if (
                  (m &&
                    n &&
                    (w(
                      "Delimiter",
                      "UndetectableDelimiter",
                      "Unable to auto-detect delimiting character; defaulted to '" +
                        o.DefaultDelimiter +
                        "'",
                    ),
                    (n = !1)),
                  e.skipEmptyLines &&
                    (m.data = m.data.filter(function (e) {
                      return !_(e);
                    })),
                  k())
                ) {
                  if (m)
                    if (Array.isArray(m.data[0])) {
                      for (var t, r = 0; k() && r < m.data.length; r++)
                        m.data[r].forEach(i);
                      m.data.splice(0, 1);
                    } else m.data.forEach(i);
                  function i(t, r) {
                    (b(e.transformHeader) && (t = e.transformHeader(t, r)),
                      c.push(t));
                  }
                }
                function u(t, r) {
                  for (var n = e.header ? {} : [], i = 0; i < t.length; i++) {
                    var o = i,
                      u = t[i],
                      u = ((t, r) =>
                        (e.dynamicTypingFunction &&
                          void 0 === e.dynamicTyping[t] &&
                          (e.dynamicTyping[t] = e.dynamicTypingFunction(t)),
                        !0 === (e.dynamicTyping[t] || e.dynamicTyping))
                          ? "true" === r ||
                            "TRUE" === r ||
                            ("false" !== r &&
                              "FALSE" !== r &&
                              (((e) => {
                                if (
                                  s.test(e) &&
                                  -0x20000000000000 < (e = parseFloat(e)) &&
                                  e < 0x20000000000000
                                )
                                  return 1;
                              })(r)
                                ? parseFloat(r)
                                : a.test(r)
                                  ? new Date(r)
                                  : "" === r
                                    ? null
                                    : r))
                          : r)(
                        (o = e.header
                          ? i >= c.length
                            ? "__parsed_extra"
                            : c[i]
                          : o),
                        (u = e.transform ? e.transform(u, o) : u),
                      );
                    "__parsed_extra" === o
                      ? ((n[o] = n[o] || []), n[o].push(u))
                      : (n[o] = u);
                  }
                  return (
                    e.header &&
                      (i > c.length
                        ? w(
                            "FieldMismatch",
                            "TooManyFields",
                            "Too many fields: expected " +
                              c.length +
                              " fields but parsed " +
                              i,
                            l + r,
                          )
                        : i < c.length &&
                          w(
                            "FieldMismatch",
                            "TooFewFields",
                            "Too few fields: expected " +
                              c.length +
                              " fields but parsed " +
                              i,
                            l + r,
                          )),
                    n
                  );
                }
                m &&
                  (e.header || e.dynamicTyping || e.transform) &&
                  ((t = 1),
                  !m.data.length || Array.isArray(m.data[0])
                    ? ((m.data = m.data.map(u)), (t = m.data.length))
                    : (m.data = u(m.data, 0)),
                  e.header && m.meta && (m.meta.fields = c),
                  (l += t));
              }
              function k() {
                return e.header && 0 === c.length;
              }
              function w(e, t, r, n) {
                ((e = { type: e, code: t, message: r }),
                  void 0 !== n && (e.row = n),
                  m.errors.push(e));
              }
              (b(e.step) &&
                ((i = e.step),
                (e.step = function (t) {
                  ((m = t),
                    k()
                      ? y()
                      : (y(),
                        0 !== m.data.length &&
                          ((h += t.data.length),
                          e.preview && h > e.preview
                            ? r.abort()
                            : ((m.data = m.data[0]), i(m, u)))));
                })),
                (this.parse = function (i, s, a) {
                  var u = e.quoteChar || '"',
                    u =
                      (e.newline || (e.newline = this.guessLineEndings(i, u)),
                      (n = !1),
                      e.delimiter
                        ? b(e.delimiter) &&
                          ((e.delimiter = e.delimiter(i)),
                          (m.meta.delimiter = e.delimiter))
                        : ((u = ((t, r, n, i, s) => {
                            var a, u, h, l;
                            s = s || [
                              ",",
                              "	",
                              "|",
                              ";",
                              o.RECORD_SEP,
                              o.UNIT_SEP,
                            ];
                            for (var f = 0; f < s.length; f++) {
                              for (
                                var d,
                                  c = s[f],
                                  p = 0,
                                  m = 0,
                                  y = 0,
                                  v =
                                    ((h = void 0),
                                    new g({
                                      comments: i,
                                      delimiter: c,
                                      newline: r,
                                      preview: 10,
                                    }).parse(t)),
                                  k = 0;
                                k < v.data.length;
                                k++
                              )
                                n && _(v.data[k])
                                  ? y++
                                  : ((m += d = v.data[k].length),
                                    void 0 === h
                                      ? (h = d)
                                      : 0 < d &&
                                        ((p += Math.abs(d - h)), (h = d)));
                              (0 < v.data.length && (m /= v.data.length - y),
                                (void 0 === u || p <= u) &&
                                  (void 0 === l || l < m) &&
                                  1.99 < m &&
                                  ((u = p), (a = c), (l = m)));
                            }
                            return {
                              successful: !!(e.delimiter = a),
                              bestDelimiter: a,
                            };
                          })(
                            i,
                            e.newline,
                            e.skipEmptyLines,
                            e.comments,
                            e.delimitersToGuess,
                          )).successful
                            ? (e.delimiter = u.bestDelimiter)
                            : ((n = !0), (e.delimiter = o.DefaultDelimiter)),
                          (m.meta.delimiter = e.delimiter)),
                      v(e));
                  return (
                    e.preview && e.header && u.preview++,
                    (t = i),
                    (m = (r = new g(u)).parse(t, s, a)),
                    y(),
                    f ? { meta: { paused: !0 } } : m || { meta: { paused: !1 } }
                  );
                }),
                (this.paused = function () {
                  return f;
                }),
                (this.pause = function () {
                  ((f = !0),
                    r.abort(),
                    (t = b(e.chunk) ? "" : t.substring(r.getCharIndex())));
                }),
                (this.resume = function () {
                  u.streamer._halted
                    ? ((f = !1), u.streamer.parseChunk(t, !0))
                    : setTimeout(u.resume, 3);
                }),
                (this.aborted = function () {
                  return d;
                }),
                (this.abort = function () {
                  ((d = !0),
                    r.abort(),
                    (m.meta.aborted = !0),
                    b(e.complete) && e.complete(m),
                    (t = ""));
                }),
                (this.guessLineEndings = function (e, t) {
                  e = e.substring(0, 1048576);
                  var t = RegExp(p(t) + "([^]*?)" + p(t), "gm"),
                    r = (e = e.replace(t, "")).split("\r"),
                    t = e.split("\n"),
                    e = 1 < t.length && t[0].length < r[0].length;
                  if (1 === r.length || e) return "\n";
                  for (var n = 0, i = 0; i < r.length; i++)
                    "\n" === r[i][0] && n++;
                  return n >= r.length / 2 ? "\r\n" : "\r";
                }));
            }
            function p(e) {
              return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            }
            function g(e) {
              var t = (e = e || {}).delimiter,
                r = e.newline,
                n = e.comments,
                i = e.step,
                s = e.preview,
                a = e.fastMode,
                u = null,
                h = !1,
                l = null == e.quoteChar ? '"' : e.quoteChar,
                f = l;
              if (
                (void 0 !== e.escapeChar && (f = e.escapeChar),
                ("string" != typeof t || -1 < o.BAD_DELIMITERS.indexOf(t)) &&
                  (t = ","),
                n === t)
              )
                throw Error("Comment character same as delimiter");
              (!0 === n
                ? (n = "#")
                : ("string" != typeof n || -1 < o.BAD_DELIMITERS.indexOf(n)) &&
                  (n = !1),
                "\n" !== r && "\r" !== r && "\r\n" !== r && (r = "\n"));
              var d = 0,
                c = !1;
              ((this.parse = function (o, g, m) {
                if ("string" != typeof o) throw Error("Input must be a string");
                var _ = o.length,
                  y = t.length,
                  v = r.length,
                  k = n.length,
                  w = b(i),
                  E = [],
                  x = [],
                  R = [],
                  C = (d = 0);
                if (!o) return P();
                if (a || (!1 !== a && -1 === o.indexOf(l))) {
                  for (var O = o.split(r), S = 0; S < O.length; S++) {
                    if (((R = O[S]), (d += R.length), S !== O.length - 1))
                      d += r.length;
                    else if (m) break;
                    if (!n || R.substring(0, k) !== n) {
                      if (w) {
                        if (((E = []), D(R.split(t)), U(), c)) return P();
                      } else D(R.split(t));
                      if (s && s <= S) return ((E = E.slice(0, s)), P(!0));
                    }
                  }
                  return P();
                }
                for (
                  var A = o.indexOf(t, d),
                    L = o.indexOf(r, d),
                    I = RegExp(p(f) + p(l), "g"),
                    T = o.indexOf(l, d);
                  ;
                )
                  if (o[d] === l)
                    for (T = d, d++; ; ) {
                      if (-1 === (T = o.indexOf(l, T + 1)))
                        return (
                          m ||
                            x.push({
                              type: "Quotes",
                              code: "MissingQuotes",
                              message: "Quoted field unterminated",
                              row: E.length,
                              index: d,
                            }),
                          M()
                        );
                      if (T === _ - 1)
                        return M(o.substring(d, T).replace(I, l));
                      if (l === f && o[T + 1] === f) T++;
                      else if (l === f || 0 === T || o[T - 1] !== f) {
                        -1 !== A && A < T + 1 && (A = o.indexOf(t, T + 1));
                        var j = F(
                          -1 ===
                            (L =
                              -1 !== L && L < T + 1 ? o.indexOf(r, T + 1) : L)
                            ? A
                            : Math.min(A, L),
                        );
                        if (o.substr(T + 1 + j, y) === t) {
                          (R.push(o.substring(d, T).replace(I, l)),
                            o[(d = T + 1 + j + y)] !== l &&
                              (T = o.indexOf(l, d)),
                            (A = o.indexOf(t, d)),
                            (L = o.indexOf(r, d)));
                          break;
                        }
                        if (
                          ((j = F(L)),
                          o.substring(T + 1 + j, T + 1 + j + v) === r)
                        ) {
                          if (
                            (R.push(o.substring(d, T).replace(I, l)),
                            z(T + 1 + j + v),
                            (A = o.indexOf(t, d)),
                            (T = o.indexOf(l, d)),
                            w && (U(), c))
                          )
                            return P();
                          if (s && E.length >= s) return P(!0);
                          break;
                        }
                        (x.push({
                          type: "Quotes",
                          code: "InvalidQuotes",
                          message:
                            "Trailing quote on quoted field is malformed",
                          row: E.length,
                          index: d,
                        }),
                          T++);
                      }
                    }
                  else if (n && 0 === R.length && o.substring(d, d + k) === n) {
                    if (-1 === L) return P();
                    ((d = L + v), (L = o.indexOf(r, d)), (A = o.indexOf(t, d)));
                  } else if (-1 !== A && (A < L || -1 === L))
                    (R.push(o.substring(d, A)),
                      (d = A + y),
                      (A = o.indexOf(t, d)));
                  else {
                    if (-1 === L) break;
                    if ((R.push(o.substring(d, L)), z(L + v), w && (U(), c)))
                      return P();
                    if (s && E.length >= s) return P(!0);
                  }
                return M();
                function D(e) {
                  (E.push(e), (C = d));
                }
                function F(e) {
                  return -1 !== e &&
                    (e = o.substring(T + 1, e)) &&
                    "" === e.trim()
                    ? e.length
                    : 0;
                }
                function M(e) {
                  return (
                    m ||
                      (void 0 === e && (e = o.substring(d)),
                      R.push(e),
                      (d = _),
                      D(R),
                      w && U()),
                    P()
                  );
                }
                function z(e) {
                  ((d = e), D(R), (R = []), (L = o.indexOf(r, d)));
                }
                function P(n) {
                  if (e.header && !g && E.length && !h) {
                    var i = E[0],
                      s = Object.create(null),
                      a = new Set(i);
                    let t = !1;
                    for (let r = 0; r < i.length; r++) {
                      let n = i[r];
                      if (
                        s[
                          (n = b(e.transformHeader)
                            ? e.transformHeader(n, r)
                            : n)
                        ]
                      ) {
                        let e,
                          o = s[n];
                        for (; (e = n + "_" + o), o++, a.has(e); );
                        (a.add(e),
                          (i[r] = e),
                          s[n]++,
                          (t = !0),
                          ((u = null === u ? {} : u)[e] = n));
                      } else ((s[n] = 1), (i[r] = n));
                      a.add(n);
                    }
                    (t && console.warn("Duplicate headers found and renamed."),
                      (h = !0));
                  }
                  return {
                    data: E,
                    errors: x,
                    meta: {
                      delimiter: t,
                      linebreak: r,
                      aborted: c,
                      truncated: !!n,
                      cursor: C + (g || 0),
                      renamedHeaders: u,
                    },
                  };
                }
                function U() {
                  (i(P()), (E = []), (x = []));
                }
              }),
                (this.abort = function () {
                  c = !0;
                }),
                (this.getCharIndex = function () {
                  return d;
                }));
            }
            function m(e) {
              var t = e.data,
                r = s[t.workerId],
                n = !1;
              if (t.error) r.userError(t.error, t.file);
              else if (t.results && t.results.data) {
                var i = {
                  abort: function () {
                    ((n = !0),
                      _(t.workerId, {
                        data: [],
                        errors: [],
                        meta: { aborted: !0 },
                      }));
                  },
                  pause: y,
                  resume: y,
                };
                if (b(r.userStep)) {
                  for (
                    var a = 0;
                    a < t.results.data.length &&
                    (r.userStep(
                      {
                        data: t.results.data[a],
                        errors: t.results.errors,
                        meta: t.results.meta,
                      },
                      i,
                    ),
                    !n);
                    a++
                  );
                  delete t.results;
                } else
                  b(r.userChunk) &&
                    (r.userChunk(t.results, i, t.file), delete t.results);
              }
              t.finished && !n && _(t.workerId, t.results);
            }
            function _(e, t) {
              var r = s[e];
              (b(r.userComplete) && r.userComplete(t),
                r.terminate(),
                delete s[e]);
            }
            function y() {
              throw Error("Not implemented.");
            }
            function v(e) {
              if ("object" != typeof e || null === e) return e;
              var t,
                r = Array.isArray(e) ? [] : {};
              for (t in e) r[t] = v(e[t]);
              return r;
            }
            function k(e, t) {
              return function () {
                e.apply(t, arguments);
              };
            }
            function b(e) {
              return "function" == typeof e;
            }
            return (
              (o.parse = function (t, n) {
                var i,
                  u,
                  c,
                  p = (n = n || {}).dynamicTyping || !1;
                if (
                  (b(p) && ((n.dynamicTypingFunction = p), (p = {})),
                  (n.dynamicTyping = p),
                  (n.transform = !!b(n.transform) && n.transform),
                  !n.worker || !o.WORKERS_SUPPORTED)
                ) {
                  let e;
                  return (
                    (p = null),
                    o.NODE_STREAM_INPUT,
                    "string" == typeof t
                      ? ((t = 65279 !== (e = t).charCodeAt(0) ? e : e.slice(1)),
                        (p = new (n.download ? h : f)(n)))
                      : !0 === t.readable && b(t.read) && b(t.on)
                        ? (p = new d(n))
                        : ((r.File && t instanceof File) ||
                            t instanceof Object) &&
                          (p = new l(n)),
                    p.stream(t)
                  );
                }
                (((p =
                  !!o.WORKERS_SUPPORTED &&
                  ((u = r.URL || r.webkitURL || null),
                  (c = e.toString()),
                  (i =
                    o.BLOB_URL ||
                    (o.BLOB_URL = u.createObjectURL(
                      new Blob(
                        [
                          "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                          "(",
                          c,
                          ")();",
                        ],
                        { type: "text/javascript" },
                      ),
                    ))),
                  ((i = new r.Worker(i)).onmessage = m),
                  (i.id = a++),
                  (s[i.id] = i))).userStep = n.step),
                  (p.userChunk = n.chunk),
                  (p.userComplete = n.complete),
                  (p.userError = n.error),
                  (n.step = b(n.step)),
                  (n.chunk = b(n.chunk)),
                  (n.complete = b(n.complete)),
                  (n.error = b(n.error)),
                  delete n.worker,
                  p.postMessage({ input: t, config: n, workerId: p.id }));
              }),
              (o.unparse = function (e, t) {
                var r = !1,
                  n = !0,
                  i = ",",
                  s = "\r\n",
                  a = '"',
                  u = a + a,
                  h = !1,
                  l = null,
                  f = !1,
                  d =
                    ((() => {
                      if ("object" == typeof t) {
                        if (
                          ("string" != typeof t.delimiter ||
                            o.BAD_DELIMITERS.filter(function (e) {
                              return -1 !== t.delimiter.indexOf(e);
                            }).length ||
                            (i = t.delimiter),
                          ("boolean" == typeof t.quotes ||
                            "function" == typeof t.quotes ||
                            Array.isArray(t.quotes)) &&
                            (r = t.quotes),
                          ("boolean" != typeof t.skipEmptyLines &&
                            "string" != typeof t.skipEmptyLines) ||
                            (h = t.skipEmptyLines),
                          "string" == typeof t.newline && (s = t.newline),
                          "string" == typeof t.quoteChar && (a = t.quoteChar),
                          "boolean" == typeof t.header && (n = t.header),
                          Array.isArray(t.columns))
                        ) {
                          if (0 === t.columns.length)
                            throw Error("Option columns is empty");
                          l = t.columns;
                        }
                        (void 0 !== t.escapeChar && (u = t.escapeChar + a),
                          t.escapeFormulae instanceof RegExp
                            ? (f = t.escapeFormulae)
                            : "boolean" == typeof t.escapeFormulae &&
                              t.escapeFormulae &&
                              (f = /^[=+\-@\t\r].*$/));
                      }
                    })(),
                    RegExp(p(a), "g"));
                if (
                  ("string" == typeof e && (e = JSON.parse(e)),
                  Array.isArray(e))
                ) {
                  if (!e.length || Array.isArray(e[0])) return c(null, e, h);
                  if ("object" == typeof e[0])
                    return c(l || Object.keys(e[0]), e, h);
                } else if ("object" == typeof e)
                  return (
                    "string" == typeof e.data && (e.data = JSON.parse(e.data)),
                    Array.isArray(e.data) &&
                      (e.fields || (e.fields = (e.meta && e.meta.fields) || l),
                      e.fields ||
                        (e.fields = Array.isArray(e.data[0])
                          ? e.fields
                          : "object" == typeof e.data[0]
                            ? Object.keys(e.data[0])
                            : []),
                      Array.isArray(e.data[0]) ||
                        "object" == typeof e.data[0] ||
                        (e.data = [e.data])),
                    c(e.fields || [], e.data || [], h)
                  );
                throw Error("Unable to serialize unrecognized input");
                function c(e, t, r) {
                  var a = "",
                    o =
                      ("string" == typeof e && (e = JSON.parse(e)),
                      "string" == typeof t && (t = JSON.parse(t)),
                      Array.isArray(e) && 0 < e.length),
                    u = !Array.isArray(t[0]);
                  if (o && n) {
                    for (var h = 0; h < e.length; h++)
                      (0 < h && (a += i), (a += g(e[h], h)));
                    0 < t.length && (a += s);
                  }
                  for (var l = 0; l < t.length; l++) {
                    var f = (o ? e : t[l]).length,
                      d = !1,
                      c = o
                        ? 0 === Object.keys(t[l]).length
                        : 0 === t[l].length;
                    if (
                      (r &&
                        !o &&
                        (d =
                          "greedy" === r
                            ? "" === t[l].join("").trim()
                            : 1 === t[l].length && 0 === t[l][0].length),
                      "greedy" === r && o)
                    ) {
                      for (var p = [], m = 0; m < f; m++) {
                        var _ = u ? e[m] : m;
                        p.push(t[l][_]);
                      }
                      d = "" === p.join("").trim();
                    }
                    if (!d) {
                      for (var y = 0; y < f; y++) {
                        0 < y && !c && (a += i);
                        var v = o && u ? e[y] : y;
                        a += g(t[l][v], y);
                      }
                      l < t.length - 1 && (!r || (0 < f && !c)) && (a += s);
                    }
                  }
                  return a;
                }
                function g(e, t) {
                  var n, s;
                  return null == e
                    ? ""
                    : e.constructor === Date
                      ? JSON.stringify(e).slice(1, 25)
                      : ((s = !1),
                        f &&
                          "string" == typeof e &&
                          f.test(e) &&
                          ((e = "'" + e), (s = !0)),
                        (n = e.toString().replace(d, u)),
                        (s =
                          s ||
                          !0 === r ||
                          ("function" == typeof r && r(e, t)) ||
                          (Array.isArray(r) && r[t]) ||
                          ((e, t) => {
                            for (var r = 0; r < t.length; r++)
                              if (-1 < e.indexOf(t[r])) return !0;
                            return !1;
                          })(n, o.BAD_DELIMITERS) ||
                          -1 < n.indexOf(i) ||
                          " " === n.charAt(0) ||
                          " " === n.charAt(n.length - 1))
                          ? a + n + a
                          : n);
                }
              }),
              (o.RECORD_SEP = "\x1e"),
              (o.UNIT_SEP = "\x1f"),
              (o.BYTE_ORDER_MARK = "\uFEFF"),
              (o.BAD_DELIMITERS = ["\r", "\n", '"', o.BYTE_ORDER_MARK]),
              (o.WORKERS_SUPPORTED = !n && !!r.Worker),
              (o.NODE_STREAM_INPUT = 1),
              (o.LocalChunkSize = 0xa00000),
              (o.RemoteChunkSize = 5242880),
              (o.DefaultDelimiter = ","),
              (o.Parser = g),
              (o.ParserHandle = c),
              (o.NetworkStreamer = h),
              (o.FileStreamer = l),
              (o.StringStreamer = f),
              (o.ReadableStreamStreamer = d),
              r.jQuery &&
                ((t = r.jQuery).fn.parse = function (e) {
                  var n = e.config || {},
                    i = [];
                  return (
                    this.each(function (e) {
                      if (
                        !(
                          "INPUT" === t(this).prop("tagName").toUpperCase() &&
                          "file" === t(this).attr("type").toLowerCase() &&
                          r.FileReader
                        ) ||
                        !this.files ||
                        0 === this.files.length
                      )
                        return !0;
                      for (var s = 0; s < this.files.length; s++)
                        i.push({
                          file: this.files[s],
                          inputElem: this,
                          instanceConfig: t.extend({}, n),
                        });
                    }),
                    s(),
                    this
                  );
                  function s() {
                    if (0 === i.length) b(e.complete) && e.complete();
                    else {
                      var r,
                        n,
                        s,
                        u = i[0];
                      if (b(e.before)) {
                        var h = e.before(u.file, u.inputElem);
                        if ("object" == typeof h) {
                          if ("abort" === h.action)
                            return (
                              (r = u.file),
                              (n = u.inputElem),
                              (s = h.reason),
                              void (
                                b(e.error) &&
                                e.error({ name: "AbortError" }, r, n, s)
                              )
                            );
                          if ("skip" === h.action) return void a();
                          "object" == typeof h.config &&
                            (u.instanceConfig = t.extend(
                              u.instanceConfig,
                              h.config,
                            ));
                        } else if ("skip" === h) return void a();
                      }
                      var l = u.instanceConfig.complete;
                      ((u.instanceConfig.complete = function (e) {
                        (b(l) && l(e, u.file, u.inputElem), a());
                      }),
                        o.parse(u.file, u.instanceConfig));
                    }
                  }
                  function a() {
                    (i.splice(0, 1), s());
                  }
                }),
              i &&
                (r.onmessage = function (e) {
                  ((e = e.data),
                    void 0 === o.WORKER_ID && e && (o.WORKER_ID = e.workerId),
                    "string" == typeof e.input
                      ? r.postMessage({
                          workerId: o.WORKER_ID,
                          results: o.parse(e.input, e.config),
                          finished: !0,
                        })
                      : ((r.File && e.input instanceof File) ||
                          e.input instanceof Object) &&
                        (e = o.parse(e.input, e.config)) &&
                        r.postMessage({
                          workerId: o.WORKER_ID,
                          results: e,
                          finished: !0,
                        }));
                }),
              ((h.prototype = Object.create(u.prototype)).constructor = h),
              ((l.prototype = Object.create(u.prototype)).constructor = l),
              ((f.prototype = Object.create(f.prototype)).constructor = f),
              ((d.prototype = Object.create(u.prototype)).constructor = d),
              o
            );
          })
            ? r.apply(t, [])
            : r) || (e.exports = n);
    },
    50764: (e, t, r) => {
      var n = r(23374),
        i = 1 / 0;
      e.exports = function (e) {
        return e
          ? (e = n(e)) === i || e === -i
            ? (e < 0 ? -1 : 1) * 17976931348623157e292
            : e == e
              ? e
              : 0
          : 0 === e
            ? e
            : 0;
      };
    },
    54720: (e, t, r) => {
      var n = r(70858),
        i = r(62502);
      e.exports = function (e) {
        return null != e && i(e.length) && !n(e);
      };
    },
    62096: (e) => {
      var t = /\s/;
      e.exports = function (e) {
        for (var r = e.length; r-- && t.test(e.charAt(r)); );
        return r;
      };
    },
    62502: (e) => {
      e.exports = function (e) {
        return (
          "number" == typeof e && e > -1 && e % 1 == 0 && e <= 0x1fffffffffffff
        );
      };
    },
    70858: (e, t, r) => {
      var n = r(62718),
        i = r(24329);
      e.exports = function (e) {
        if (!i(e)) return !1;
        var t = n(e);
        return (
          "[object Function]" == t ||
          "[object GeneratorFunction]" == t ||
          "[object AsyncFunction]" == t ||
          "[object Proxy]" == t
        );
      };
    },
    77834: (e, t, r) => {
      var n = r(35076),
        i = r(54720),
        s = r(36565),
        a = r(24329);
      e.exports = function (e, t, r) {
        if (!a(r)) return !1;
        var o = typeof t;
        return (
          ("number" == o
            ? !!(i(r) && s(t, r.length))
            : "string" == o && t in r) && n(r[t], e)
        );
      };
    },
    80014: (e, t, r) => {
      var n = r(62718),
        i = r(27854);
      e.exports = function (e) {
        return "symbol" == typeof e || (i(e) && "[object Symbol]" == n(e));
      };
    },
    88290: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => i });
      var n = r(36439);
      let i = n.forwardRef(function ({ title: e, titleId: t, ...r }, i) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 1.5,
              stroke: "currentColor",
              "aria-hidden": "true",
              "data-slot": "icon",
              ref: i,
              "aria-labelledby": t,
            },
            r,
          ),
          e ? n.createElement("title", { id: t }, e) : null,
          n.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z",
          }),
        );
      });
    },
    90454: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => i });
      var n = r(36439);
      let i = n.forwardRef(function ({ title: e, titleId: t, ...r }, i) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 1.5,
              stroke: "currentColor",
              "aria-hidden": "true",
              "data-slot": "icon",
              ref: i,
              "aria-labelledby": t,
            },
            r,
          ),
          e ? n.createElement("title", { id: t }, e) : null,
          n.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
          }),
        );
      });
    },
    91593: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => i });
      var n = r(36439);
      let i = n.forwardRef(function ({ title: e, titleId: t, ...r }, i) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 1.5,
              stroke: "currentColor",
              "aria-hidden": "true",
              "data-slot": "icon",
              ref: i,
              "aria-labelledby": t,
            },
            r,
          ),
          e ? n.createElement("title", { id: t }, e) : null,
          n.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z",
          }),
        );
      });
    },
    93252: (e) => {
      e.exports = function (e, t, r) {
        var n = -1,
          i = e.length;
        (t < 0 && (t = -t > i ? 0 : i + t),
          (r = r > i ? i : r) < 0 && (r += i),
          (i = t > r ? 0 : (r - t) >>> 0),
          (t >>>= 0));
        for (var s = Array(i); ++n < i; ) s[n] = e[n + t];
        return s;
      };
    },
    96212: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => i });
      var n = r(36439);
      let i = n.forwardRef(function ({ title: e, titleId: t, ...r }, i) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 1.5,
              stroke: "currentColor",
              "aria-hidden": "true",
              "data-slot": "icon",
              ref: i,
              "aria-labelledby": t,
            },
            r,
          ),
          e ? n.createElement("title", { id: t }, e) : null,
          n.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
          }),
        );
      });
    },
  },
]);
