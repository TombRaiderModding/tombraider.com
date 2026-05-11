(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1175],
  {
    22045: (e) => {
      !(function () {
        "use strict";
        var t = {
            114: function (e) {
              function t(e) {
                if ("string" != typeof e)
                  throw TypeError(
                    "Path must be a string. Received " + JSON.stringify(e),
                  );
              }
              function r(e, t) {
                for (
                  var r, n = "", i = 0, o = -1, s = 0, a = 0;
                  a <= e.length;
                  ++a
                ) {
                  if (a < e.length) r = e.charCodeAt(a);
                  else if (47 === r) break;
                  else r = 47;
                  if (47 === r) {
                    if (o === a - 1 || 1 === s);
                    else if (o !== a - 1 && 2 === s) {
                      if (
                        n.length < 2 ||
                        2 !== i ||
                        46 !== n.charCodeAt(n.length - 1) ||
                        46 !== n.charCodeAt(n.length - 2)
                      ) {
                        if (n.length > 2) {
                          var E = n.lastIndexOf("/");
                          if (E !== n.length - 1) {
                            (-1 === E
                              ? ((n = ""), (i = 0))
                              : (i =
                                  (n = n.slice(0, E)).length -
                                  1 -
                                  n.lastIndexOf("/")),
                              (o = a),
                              (s = 0));
                            continue;
                          }
                        } else if (2 === n.length || 1 === n.length) {
                          ((n = ""), (i = 0), (o = a), (s = 0));
                          continue;
                        }
                      }
                      t && (n.length > 0 ? (n += "/..") : (n = ".."), (i = 2));
                    } else
                      (n.length > 0
                        ? (n += "/" + e.slice(o + 1, a))
                        : (n = e.slice(o + 1, a)),
                        (i = a - o - 1));
                    ((o = a), (s = 0));
                  } else 46 === r && -1 !== s ? ++s : (s = -1);
                }
                return n;
              }
              var n = {
                resolve: function () {
                  for (
                    var e, n, i = "", o = !1, s = arguments.length - 1;
                    s >= -1 && !o;
                    s--
                  )
                    (s >= 0
                      ? (n = arguments[s])
                      : (void 0 === e && (e = ""), (n = e)),
                      t(n),
                      0 !== n.length &&
                        ((i = n + "/" + i), (o = 47 === n.charCodeAt(0))));
                  if (((i = r(i, !o)), o))
                    if (i.length > 0) return "/" + i;
                    else return "/";
                  return i.length > 0 ? i : ".";
                },
                normalize: function (e) {
                  if ((t(e), 0 === e.length)) return ".";
                  var n = 47 === e.charCodeAt(0),
                    i = 47 === e.charCodeAt(e.length - 1);
                  return (0 !== (e = r(e, !n)).length || n || (e = "."),
                  e.length > 0 && i && (e += "/"),
                  n)
                    ? "/" + e
                    : e;
                },
                isAbsolute: function (e) {
                  return (t(e), e.length > 0 && 47 === e.charCodeAt(0));
                },
                join: function () {
                  if (0 == arguments.length) return ".";
                  for (var e, r = 0; r < arguments.length; ++r) {
                    var i = arguments[r];
                    (t(i),
                      i.length > 0 &&
                        (void 0 === e ? (e = i) : (e += "/" + i)));
                  }
                  return void 0 === e ? "." : n.normalize(e);
                },
                relative: function (e, r) {
                  if (
                    (t(e),
                    t(r),
                    e === r || (e = n.resolve(e)) === (r = n.resolve(r)))
                  )
                    return "";
                  for (var i = 1; i < e.length && 47 === e.charCodeAt(i); ++i);
                  for (
                    var o = e.length, s = o - i, a = 1;
                    a < r.length && 47 === r.charCodeAt(a);
                    ++a
                  );
                  for (
                    var E = r.length - a, h = s < E ? s : E, l = -1, c = 0;
                    c <= h;
                    ++c
                  ) {
                    if (c === h) {
                      if (E > h) {
                        if (47 === r.charCodeAt(a + c))
                          return r.slice(a + c + 1);
                        else if (0 === c) return r.slice(a + c);
                      } else
                        s > h &&
                          (47 === e.charCodeAt(i + c)
                            ? (l = c)
                            : 0 === c && (l = 0));
                      break;
                    }
                    var A = e.charCodeAt(i + c);
                    if (A !== r.charCodeAt(a + c)) break;
                    47 === A && (l = c);
                  }
                  var u = "";
                  for (c = i + l + 1; c <= o; ++c)
                    (c === o || 47 === e.charCodeAt(c)) &&
                      (0 === u.length ? (u += "..") : (u += "/.."));
                  return u.length > 0
                    ? u + r.slice(a + l)
                    : ((a += l), 47 === r.charCodeAt(a) && ++a, r.slice(a));
                },
                _makeLong: function (e) {
                  return e;
                },
                dirname: function (e) {
                  if ((t(e), 0 === e.length)) return ".";
                  for (
                    var r = e.charCodeAt(0),
                      n = 47 === r,
                      i = -1,
                      o = !0,
                      s = e.length - 1;
                    s >= 1;
                    --s
                  )
                    if (47 === (r = e.charCodeAt(s))) {
                      if (!o) {
                        i = s;
                        break;
                      }
                    } else o = !1;
                  return -1 === i
                    ? n
                      ? "/"
                      : "."
                    : n && 1 === i
                      ? "//"
                      : e.slice(0, i);
                },
                basename: function (e, r) {
                  if (void 0 !== r && "string" != typeof r)
                    throw TypeError('"ext" argument must be a string');
                  t(e);
                  var n,
                    i = 0,
                    o = -1,
                    s = !0;
                  if (void 0 !== r && r.length > 0 && r.length <= e.length) {
                    if (r.length === e.length && r === e) return "";
                    var a = r.length - 1,
                      E = -1;
                    for (n = e.length - 1; n >= 0; --n) {
                      var h = e.charCodeAt(n);
                      if (47 === h) {
                        if (!s) {
                          i = n + 1;
                          break;
                        }
                      } else
                        (-1 === E && ((s = !1), (E = n + 1)),
                          a >= 0 &&
                            (h === r.charCodeAt(a)
                              ? -1 == --a && (o = n)
                              : ((a = -1), (o = E))));
                    }
                    return (
                      i === o ? (o = E) : -1 === o && (o = e.length),
                      e.slice(i, o)
                    );
                  }
                  for (n = e.length - 1; n >= 0; --n)
                    if (47 === e.charCodeAt(n)) {
                      if (!s) {
                        i = n + 1;
                        break;
                      }
                    } else -1 === o && ((s = !1), (o = n + 1));
                  return -1 === o ? "" : e.slice(i, o);
                },
                extname: function (e) {
                  t(e);
                  for (
                    var r = -1, n = 0, i = -1, o = !0, s = 0, a = e.length - 1;
                    a >= 0;
                    --a
                  ) {
                    var E = e.charCodeAt(a);
                    if (47 === E) {
                      if (!o) {
                        n = a + 1;
                        break;
                      }
                      continue;
                    }
                    (-1 === i && ((o = !1), (i = a + 1)),
                      46 === E
                        ? -1 === r
                          ? (r = a)
                          : 1 !== s && (s = 1)
                        : -1 !== r && (s = -1));
                  }
                  return -1 === r ||
                    -1 === i ||
                    0 === s ||
                    (1 === s && r === i - 1 && r === n + 1)
                    ? ""
                    : e.slice(r, i);
                },
                format: function (e) {
                  var t, r;
                  if (null === e || "object" != typeof e)
                    throw TypeError(
                      'The "pathObject" argument must be of type Object. Received type ' +
                        typeof e,
                    );
                  return (
                    (t = e.dir || e.root),
                    (r = e.base || (e.name || "") + (e.ext || "")),
                    t ? (t === e.root ? t + r : t + "/" + r) : r
                  );
                },
                parse: function (e) {
                  t(e);
                  var r,
                    n = { root: "", dir: "", base: "", ext: "", name: "" };
                  if (0 === e.length) return n;
                  var i = e.charCodeAt(0),
                    o = 47 === i;
                  o ? ((n.root = "/"), (r = 1)) : (r = 0);
                  for (
                    var s = -1, a = 0, E = -1, h = !0, l = e.length - 1, c = 0;
                    l >= r;
                    --l
                  ) {
                    if (47 === (i = e.charCodeAt(l))) {
                      if (!h) {
                        a = l + 1;
                        break;
                      }
                      continue;
                    }
                    (-1 === E && ((h = !1), (E = l + 1)),
                      46 === i
                        ? -1 === s
                          ? (s = l)
                          : 1 !== c && (c = 1)
                        : -1 !== s && (c = -1));
                  }
                  return (
                    -1 === s ||
                    -1 === E ||
                    0 === c ||
                    (1 === c && s === E - 1 && s === a + 1)
                      ? -1 !== E &&
                        (0 === a && o
                          ? (n.base = n.name = e.slice(1, E))
                          : (n.base = n.name = e.slice(a, E)))
                      : (0 === a && o
                          ? ((n.name = e.slice(1, s)), (n.base = e.slice(1, E)))
                          : ((n.name = e.slice(a, s)),
                            (n.base = e.slice(a, E))),
                        (n.ext = e.slice(s, E))),
                    a > 0 ? (n.dir = e.slice(0, a - 1)) : o && (n.dir = "/"),
                    n
                  );
                },
                sep: "/",
                delimiter: ":",
                win32: null,
                posix: null,
              };
              ((n.posix = n), (e.exports = n));
            },
          },
          r = {};
        function n(e) {
          var i = r[e];
          if (void 0 !== i) return i.exports;
          var o = (r[e] = { exports: {} }),
            s = !0;
          try {
            (t[e](o, o.exports, n), (s = !1));
          } finally {
            s && delete r[e];
          }
          return o.exports;
        }
        ((n.ab = "//"), (e.exports = n(114)));
      })();
    },
    40235: (e, t, r) => {
      "use strict";
      r.d(t, { nA: () => i, XD: () => o, j7: () => s, _$: () => n });
      var n = {};
      (r.r(n),
        r.d(n, {
          isBlock: () => u,
          isEmptyParagraph: () => f,
          isInline: () => A,
          isText: () => p,
          stripEmptyTrailingParagraphFromDocument: () => d,
        }));
      var i = (function (e) {
          return (
            (e.DOCUMENT = "document"),
            (e.PARAGRAPH = "paragraph"),
            (e.HEADING_1 = "heading-1"),
            (e.HEADING_2 = "heading-2"),
            (e.HEADING_3 = "heading-3"),
            (e.HEADING_4 = "heading-4"),
            (e.HEADING_5 = "heading-5"),
            (e.HEADING_6 = "heading-6"),
            (e.OL_LIST = "ordered-list"),
            (e.UL_LIST = "unordered-list"),
            (e.LIST_ITEM = "list-item"),
            (e.HR = "hr"),
            (e.QUOTE = "blockquote"),
            (e.EMBEDDED_ENTRY = "embedded-entry-block"),
            (e.EMBEDDED_ASSET = "embedded-asset-block"),
            (e.EMBEDDED_RESOURCE = "embedded-resource-block"),
            (e.TABLE = "table"),
            (e.TABLE_ROW = "table-row"),
            (e.TABLE_CELL = "table-cell"),
            (e.TABLE_HEADER_CELL = "table-header-cell"),
            e
          );
        })({}),
        o = (function (e) {
          return (
            (e.ASSET_HYPERLINK = "asset-hyperlink"),
            (e.EMBEDDED_ENTRY = "embedded-entry-inline"),
            (e.EMBEDDED_RESOURCE = "embedded-resource-inline"),
            (e.ENTRY_HYPERLINK = "entry-hyperlink"),
            (e.HYPERLINK = "hyperlink"),
            (e.RESOURCE_HYPERLINK = "resource-hyperlink"),
            e
          );
        })({}),
        s = (function (e) {
          return (
            (e.BOLD = "bold"),
            (e.ITALIC = "italic"),
            (e.UNDERLINE = "underline"),
            (e.CODE = "code"),
            (e.SUPERSCRIPT = "superscript"),
            (e.SUBSCRIPT = "subscript"),
            (e.STRIKETHROUGH = "strikethrough"),
            e
          );
        })({});
      let a = [
          i.PARAGRAPH,
          i.HEADING_1,
          i.HEADING_2,
          i.HEADING_3,
          i.HEADING_4,
          i.HEADING_5,
          i.HEADING_6,
          i.OL_LIST,
          i.UL_LIST,
          i.HR,
          i.QUOTE,
          i.EMBEDDED_ENTRY,
          i.EMBEDDED_ASSET,
          i.EMBEDDED_RESOURCE,
          i.TABLE,
        ],
        E = [
          i.PARAGRAPH,
          i.HEADING_1,
          i.HEADING_2,
          i.HEADING_3,
          i.HEADING_4,
          i.HEADING_5,
          i.HEADING_6,
          i.OL_LIST,
          i.UL_LIST,
          i.HR,
          i.QUOTE,
          i.EMBEDDED_ENTRY,
          i.EMBEDDED_ASSET,
          i.EMBEDDED_RESOURCE,
        ];
      (i.TABLE,
        i.TABLE_ROW,
        i.TABLE_CELL,
        i.TABLE_HEADER_CELL,
        i.HR,
        i.EMBEDDED_ENTRY,
        i.EMBEDDED_ASSET,
        i.EMBEDDED_RESOURCE);
      let h = {
          [i.OL_LIST]: [i.LIST_ITEM],
          [i.UL_LIST]: [i.LIST_ITEM],
          [i.LIST_ITEM]: E,
          [i.QUOTE]: [i.PARAGRAPH],
          [i.TABLE]: [i.TABLE_ROW],
          [i.TABLE_ROW]: [i.TABLE_CELL, i.TABLE_HEADER_CELL],
          [i.TABLE_CELL]: [i.PARAGRAPH, i.UL_LIST, i.OL_LIST],
          [i.TABLE_HEADER_CELL]: [i.PARAGRAPH],
        },
        l = [
          i.HEADING_1,
          i.HEADING_2,
          i.HEADING_3,
          i.HEADING_4,
          i.HEADING_5,
          i.HEADING_6,
        ];
      function c(e, t) {
        for (let r of Object.keys(e)) if (t === e[r]) return !0;
        return !1;
      }
      function A(e) {
        return c(o, e.nodeType);
      }
      function u(e) {
        return c(i, e.nodeType);
      }
      function p(e) {
        return "text" === e.nodeType;
      }
      function f(e) {
        if (e.nodeType !== i.PARAGRAPH || 1 !== e.content.length) return !1;
        let t = e.content[0];
        return "text" === t.nodeType && "" === t.value;
      }
      function d(e) {
        return !(
          null != e &&
          "object" == typeof e &&
          "content" in e &&
          Array.isArray(e.content)
        ) || e.content.length < 2
          ? e
          : f(e.content[e.content.length - 1])
            ? { ...e, content: e.content.slice(0, -1) }
            : e;
      }
      ([i.PARAGRAPH, ...l],
        i.DOCUMENT,
        i.PARAGRAPH,
        i.HEADING_1,
        i.HEADING_2,
        i.HEADING_3,
        i.HEADING_4,
        i.HEADING_5,
        i.HEADING_6,
        i.OL_LIST,
        i.UL_LIST,
        i.LIST_ITEM,
        i.HR,
        i.QUOTE,
        i.EMBEDDED_ENTRY,
        i.EMBEDDED_ASSET,
        o.HYPERLINK,
        o.ENTRY_HYPERLINK,
        o.ASSET_HYPERLINK,
        o.EMBEDDED_ENTRY,
        s.BOLD,
        s.CODE,
        s.ITALIC,
        s.UNDERLINE,
        i.DOCUMENT,
        i.PARAGRAPH);
      let D = ({ path: e, property: t, typeName: r, value: n }) => ({
        details: `The type of "${t}" is incorrect, expected type: ${r}`,
        name: "type",
        path: e.toArray(),
        type: r,
        value: n,
      });
      class _ {
        obj;
        path;
        _errors = [];
        constructor(e, t) {
          ((this.obj = e), (this.path = t));
        }
        catch = (...e) => {
          this._errors.push(...e);
        };
        get errors() {
          let e = (e) => JSON.stringify({ details: e.details, path: e.path });
          return this._errors.filter(
            (t, r) => this._errors.findIndex((r) => e(t) === e(r)) === r,
          );
        }
        exists = (e) =>
          e in this.obj ||
          (this.catch(
            (({ property: e, path: t }) => ({
              details: `The property "${e}" is required here`,
              name: "required",
              path: t.toArray(),
            }))({ property: e, path: this.path.of(e) }),
          ),
          !1);
        object = (e) => {
          let t = e ? this.obj[e] : this.obj;
          if (e && !this.exists(e)) return !1;
          if ("object" == typeof t && !Array.isArray(t) && null !== t)
            return !0;
          let r = e ? this.path.of(e) : this.path,
            n = e ?? this.path.last() ?? "value";
          return (
            this.catch(
              D({ typeName: "Object", property: n, path: r, value: t }),
            ),
            !1
          );
        };
        string = (e) => {
          let t = this.obj[e];
          return (
            (!e || !!this.exists(e)) &&
            ("string" == typeof t ||
              (this.catch(
                D({
                  typeName: "String",
                  property: e,
                  path: this.path.of(e),
                  value: t,
                }),
              ),
              !1))
          );
        };
        number = (e, t) => {
          let r = this.obj[e];
          return (
            (!!t && !(e in this.obj)) ||
            (!!this.exists(e) &&
              (!("number" != typeof r || Number.isNaN(r)) ||
                (this.catch(
                  D({
                    typeName: "Number",
                    property: e,
                    path: this.path.of(e),
                    value: r,
                  }),
                ),
                !1)))
          );
        };
        array = (e) => {
          let t = this.obj[e];
          return (
            (!e || !!this.exists(e)) &&
            (!!Array.isArray(t) ||
              (this.catch(
                D({
                  typeName: "Array",
                  property: e,
                  path: this.path.of(e),
                  value: t,
                }),
              ),
              !1))
          );
        };
        enum = (e, t) => {
          let r = this.obj[e];
          return (
            !!("string" == typeof r && t.includes(r)) ||
            (this.catch(
              (({ expected: e, value: t, path: r }) => ({
                details: "Value must be one of expected values",
                name: "in",
                expected: [...e].sort(),
                path: r.toArray(),
                value: t,
              }))({ expected: t, value: r, path: this.path.of(e) }),
            ),
            !1)
          );
        };
        empty = (e) => {
          if (!this.array(e)) return !1;
          let t = this.obj[e];
          return (
            0 === t.length ||
            (this.catch(
              (({ max: e, value: t, path: r }) => ({
                name: "size",
                max: e,
                path: r.toArray(),
                details: `Size must be at most ${e}`,
                value: t,
              }))({ max: 0, value: t, path: this.path.of(e) }),
            ),
            !1)
          );
        };
        minLength = (e, t) => {
          if (!this.array(e)) return !1;
          let r = this.obj[e];
          return (
            r.length >= t ||
            (this.catch(
              (({ min: e, value: t, path: r }) => ({
                name: "size",
                min: e,
                path: r.toArray(),
                details: `Size must be at least ${e}`,
                value: t,
              }))({ min: t, value: r, path: this.path.of(e) }),
            ),
            !1)
          );
        };
        noAdditionalProperties = (e) => {
          let t = Object.keys(this.obj)
            .sort()
            .filter((t) => !e.includes(t));
          return (
            t.forEach((e) =>
              this.catch(
                (({ property: e, path: t }) => ({
                  details: `The property "${e}" is not expected`,
                  name: "unexpected",
                  path: t.toArray(),
                }))({ property: e, path: this.path.of(e) }),
              ),
            ),
            0 === t.length
          );
        };
        each = (e, t) => {
          if (!this.array(e)) return;
          let r = this.obj[e],
            n = !1;
          r.forEach((r, i) => {
            if (n) return;
            let o = t(r, this.path.of(e).of(i));
            (o.length > 0 && (n = !0), this.catch(...o));
          });
        };
      }
      let T = [];
      class L {
        contentRule;
        validateData;
        constructor(e, t) {
          ((this.contentRule = e), (this.validateData = t));
        }
        assert(e, t) {
          let r = new _(e, t);
          if (!r.object()) return r.errors;
          r.noAdditionalProperties(["nodeType", "data", "content"]);
          let { nodeTypes: n, min: i = 0 } = Array.isArray(this.contentRule)
            ? { nodeTypes: this.contentRule }
            : this.contentRule(e, t);
          if (0 === n.length && i > 0)
            throw Error(
              `Invalid content rule. Cannot have enforce a 'min' of ${i} with no nodeTypes`,
            );
          if (
            (r.minLength("content", i),
            0 === n.length
              ? r.empty("content")
              : r.each("content", (e, t) => {
                  let r = new _(e, t);
                  return (r.object() && r.enum("nodeType", n), r.errors);
                }),
            r.object("data"))
          ) {
            let n = this.validateData?.(e.data, t.of("data")) ?? [];
            r.catch(...n);
          }
          return r.errors;
        }
      }
      class R extends L {
        linkType;
        type;
        constructor(e, t) {
          (super(t, (e, t) => this.assertLink(e, t)),
            (this.linkType = e),
            (this.type = this.linkType.startsWith("Contentful:")
              ? "ResourceLink"
              : "Link"));
        }
        assertLink = (e, t) => {
          let r = new _(e, t);
          if (r.object("target")) {
            let n = new _(e.target.sys, t.of("target").of("sys"));
            (n.object() &&
              (n.enum("type", [this.type]),
              n.enum("linkType", [this.linkType]),
              "Link" === this.type
                ? (n.string("id"),
                  n.noAdditionalProperties(["type", "linkType", "id"]))
                : "ResourceLink" === this.type &&
                  (n.string("urn"),
                  n.noAdditionalProperties(["type", "linkType", "urn"]))),
              r.catch(...n.errors));
          }
          return (r.noAdditionalProperties(["target"]), r.errors);
        };
      }
      class y extends L {
        constructor() {
          super(["text"], (e, t) => this.assertLink(e, t));
        }
        assertLink = (e, t) => {
          let r = new _(e, t);
          return (r.string("uri"), r.noAdditionalProperties(["uri"]), r.errors);
        };
      }
      let I = (e, t) => new L(e, t),
        g = (e, t) => new R(e, t);
      (I([...Object.values(o), "text"].sort()),
        I([i.LIST_ITEM]),
        g("Entry", T),
        I(
          () => ({ nodeTypes: [i.PARAGRAPH], min: 1 }),
          (e, t) => {
            let r = new _(e, t);
            return (
              r.noAdditionalProperties(["colspan", "rowspan"]),
              r.number("colspan", !0),
              r.number("rowspan", !0),
              r.errors
            );
          },
        ),
        i.DOCUMENT,
        I(a),
        i.PARAGRAPH,
        i.HEADING_1,
        i.HEADING_2,
        i.HEADING_3,
        i.HEADING_4,
        i.HEADING_5,
        i.HEADING_6,
        i.QUOTE,
        I(h[i.QUOTE]),
        i.EMBEDDED_ENTRY,
        i.EMBEDDED_ASSET,
        g("Asset", T),
        i.EMBEDDED_RESOURCE,
        g("Contentful:Entry", T),
        i.HR,
        I(T),
        i.OL_LIST,
        i.UL_LIST,
        i.LIST_ITEM,
        I([...E].sort()),
        i.TABLE,
        I(() => ({ nodeTypes: [i.TABLE_ROW], min: 1 })),
        i.TABLE_ROW,
        I(() => ({ nodeTypes: [i.TABLE_CELL, i.TABLE_HEADER_CELL], min: 1 })),
        i.TABLE_CELL,
        i.TABLE_HEADER_CELL,
        o.HYPERLINK,
        new y(),
        o.EMBEDDED_ENTRY,
        o.EMBEDDED_RESOURCE,
        g("Contentful:Entry", T),
        o.ENTRY_HYPERLINK,
        g("Entry", ["text"]),
        o.ASSET_HYPERLINK,
        g("Asset", ["text"]),
        o.RESOURCE_HYPERLINK,
        g("Contentful:Entry", ["text"]));
    },
  },
]);
