(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1089],
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
                  var r, n = "", i = 0, E = -1, a = 0, l = 0;
                  l <= e.length;
                  ++l
                ) {
                  if (l < e.length) r = e.charCodeAt(l);
                  else if (47 === r) break;
                  else r = 47;
                  if (47 === r) {
                    if (E === l - 1 || 1 === a);
                    else if (E !== l - 1 && 2 === a) {
                      if (
                        n.length < 2 ||
                        2 !== i ||
                        46 !== n.charCodeAt(n.length - 1) ||
                        46 !== n.charCodeAt(n.length - 2)
                      ) {
                        if (n.length > 2) {
                          var o = n.lastIndexOf("/");
                          if (o !== n.length - 1) {
                            (-1 === o
                              ? ((n = ""), (i = 0))
                              : (i =
                                  (n = n.slice(0, o)).length -
                                  1 -
                                  n.lastIndexOf("/")),
                              (E = l),
                              (a = 0));
                            continue;
                          }
                        } else if (2 === n.length || 1 === n.length) {
                          ((n = ""), (i = 0), (E = l), (a = 0));
                          continue;
                        }
                      }
                      t && (n.length > 0 ? (n += "/..") : (n = ".."), (i = 2));
                    } else
                      (n.length > 0
                        ? (n += "/" + e.slice(E + 1, l))
                        : (n = e.slice(E + 1, l)),
                        (i = l - E - 1));
                    ((E = l), (a = 0));
                  } else 46 === r && -1 !== a ? ++a : (a = -1);
                }
                return n;
              }
              var n = {
                resolve: function () {
                  for (
                    var e, n, i = "", E = !1, a = arguments.length - 1;
                    a >= -1 && !E;
                    a--
                  )
                    (a >= 0
                      ? (n = arguments[a])
                      : (void 0 === e && (e = ""), (n = e)),
                      t(n),
                      0 !== n.length &&
                        ((i = n + "/" + i), (E = 47 === n.charCodeAt(0))));
                  if (((i = r(i, !E)), E))
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
                    var E = e.length, a = E - i, l = 1;
                    l < r.length && 47 === r.charCodeAt(l);
                    ++l
                  );
                  for (
                    var o = r.length - l, s = a < o ? a : o, h = -1, c = 0;
                    c <= s;
                    ++c
                  ) {
                    if (c === s) {
                      if (o > s) {
                        if (47 === r.charCodeAt(l + c))
                          return r.slice(l + c + 1);
                        else if (0 === c) return r.slice(l + c);
                      } else
                        a > s &&
                          (47 === e.charCodeAt(i + c)
                            ? (h = c)
                            : 0 === c && (h = 0));
                      break;
                    }
                    var u = e.charCodeAt(i + c);
                    if (u !== r.charCodeAt(l + c)) break;
                    47 === u && (h = c);
                  }
                  var A = "";
                  for (c = i + h + 1; c <= E; ++c)
                    (c === E || 47 === e.charCodeAt(c)) &&
                      (0 === A.length ? (A += "..") : (A += "/.."));
                  return A.length > 0
                    ? A + r.slice(l + h)
                    : ((l += h), 47 === r.charCodeAt(l) && ++l, r.slice(l));
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
                      E = !0,
                      a = e.length - 1;
                    a >= 1;
                    --a
                  )
                    if (47 === (r = e.charCodeAt(a))) {
                      if (!E) {
                        i = a;
                        break;
                      }
                    } else E = !1;
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
                    E = -1,
                    a = !0;
                  if (void 0 !== r && r.length > 0 && r.length <= e.length) {
                    if (r.length === e.length && r === e) return "";
                    var l = r.length - 1,
                      o = -1;
                    for (n = e.length - 1; n >= 0; --n) {
                      var s = e.charCodeAt(n);
                      if (47 === s) {
                        if (!a) {
                          i = n + 1;
                          break;
                        }
                      } else
                        (-1 === o && ((a = !1), (o = n + 1)),
                          l >= 0 &&
                            (s === r.charCodeAt(l)
                              ? -1 == --l && (E = n)
                              : ((l = -1), (E = o))));
                    }
                    return (
                      i === E ? (E = o) : -1 === E && (E = e.length),
                      e.slice(i, E)
                    );
                  }
                  for (n = e.length - 1; n >= 0; --n)
                    if (47 === e.charCodeAt(n)) {
                      if (!a) {
                        i = n + 1;
                        break;
                      }
                    } else -1 === E && ((a = !1), (E = n + 1));
                  return -1 === E ? "" : e.slice(i, E);
                },
                extname: function (e) {
                  t(e);
                  for (
                    var r = -1, n = 0, i = -1, E = !0, a = 0, l = e.length - 1;
                    l >= 0;
                    --l
                  ) {
                    var o = e.charCodeAt(l);
                    if (47 === o) {
                      if (!E) {
                        n = l + 1;
                        break;
                      }
                      continue;
                    }
                    (-1 === i && ((E = !1), (i = l + 1)),
                      46 === o
                        ? -1 === r
                          ? (r = l)
                          : 1 !== a && (a = 1)
                        : -1 !== r && (a = -1));
                  }
                  return -1 === r ||
                    -1 === i ||
                    0 === a ||
                    (1 === a && r === i - 1 && r === n + 1)
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
                    E = 47 === i;
                  E ? ((n.root = "/"), (r = 1)) : (r = 0);
                  for (
                    var a = -1, l = 0, o = -1, s = !0, h = e.length - 1, c = 0;
                    h >= r;
                    --h
                  ) {
                    if (47 === (i = e.charCodeAt(h))) {
                      if (!s) {
                        l = h + 1;
                        break;
                      }
                      continue;
                    }
                    (-1 === o && ((s = !1), (o = h + 1)),
                      46 === i
                        ? -1 === a
                          ? (a = h)
                          : 1 !== c && (c = 1)
                        : -1 !== a && (c = -1));
                  }
                  return (
                    -1 === a ||
                    -1 === o ||
                    0 === c ||
                    (1 === c && a === o - 1 && a === l + 1)
                      ? -1 !== o &&
                        (0 === l && E
                          ? (n.base = n.name = e.slice(1, o))
                          : (n.base = n.name = e.slice(l, o)))
                      : (0 === l && E
                          ? ((n.name = e.slice(1, a)), (n.base = e.slice(1, o)))
                          : ((n.name = e.slice(l, a)),
                            (n.base = e.slice(l, o))),
                        (n.ext = e.slice(a, o))),
                    l > 0 ? (n.dir = e.slice(0, l - 1)) : E && (n.dir = "/"),
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
          var E = (r[e] = { exports: {} }),
            a = !0;
          try {
            (t[e](E, E.exports, n), (a = !1));
          } finally {
            a && delete r[e];
          }
          return E.exports;
        }
        ((n.ab = "//"), (e.exports = n(114)));
      })();
    },
    40235: (e, t, r) => {
      "use strict";
      r.d(t, { nA: () => i, XD: () => E, j7: () => a, _$: () => n });
      var n = {};
      (r.r(n),
        r.d(n, {
          isBlock: () => A,
          isEmptyParagraph: () => D,
          isInline: () => u,
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
        E = (function (e) {
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
        a = (function (e) {
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
      let l = [
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
        o = [
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
      let s = {
          [i.OL_LIST]: [i.LIST_ITEM],
          [i.UL_LIST]: [i.LIST_ITEM],
          [i.LIST_ITEM]: o,
          [i.QUOTE]: [i.PARAGRAPH],
          [i.TABLE]: [i.TABLE_ROW],
          [i.TABLE_ROW]: [i.TABLE_CELL, i.TABLE_HEADER_CELL],
          [i.TABLE_CELL]: [i.PARAGRAPH, i.UL_LIST, i.OL_LIST],
          [i.TABLE_HEADER_CELL]: [i.PARAGRAPH],
        },
        h = [
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
      function u(e) {
        return c(E, e.nodeType);
      }
      function A(e) {
        return c(i, e.nodeType);
      }
      function p(e) {
        return "text" === e.nodeType;
      }
      function D(e) {
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
          : D(e.content[e.content.length - 1])
            ? { ...e, content: e.content.slice(0, -1) }
            : e;
      }
      ([i.PARAGRAPH, ...h],
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
        E.HYPERLINK,
        E.ENTRY_HYPERLINK,
        E.ASSET_HYPERLINK,
        E.EMBEDDED_ENTRY,
        a.BOLD,
        a.CODE,
        a.ITALIC,
        a.UNDERLINE,
        i.DOCUMENT,
        i.PARAGRAPH);
      let T = ({ path: e, property: t, typeName: r, value: n }) => ({
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
              T({ typeName: "Object", property: n, path: r, value: t }),
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
                T({
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
                  T({
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
                T({
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
            let E = t(r, this.path.of(e).of(i));
            (E.length > 0 && (n = !0), this.catch(...E));
          });
        };
      }
      let f = [];
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
        m = (e, t) => new R(e, t);
      (I([...Object.values(E), "text"].sort()),
        I([i.LIST_ITEM]),
        m("Entry", f),
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
        I(l),
        i.PARAGRAPH,
        i.HEADING_1,
        i.HEADING_2,
        i.HEADING_3,
        i.HEADING_4,
        i.HEADING_5,
        i.HEADING_6,
        i.QUOTE,
        I(s[i.QUOTE]),
        i.EMBEDDED_ENTRY,
        i.EMBEDDED_ASSET,
        m("Asset", f),
        i.EMBEDDED_RESOURCE,
        m("Contentful:Entry", f),
        i.HR,
        I(f),
        i.OL_LIST,
        i.UL_LIST,
        i.LIST_ITEM,
        I([...o].sort()),
        i.TABLE,
        I(() => ({ nodeTypes: [i.TABLE_ROW], min: 1 })),
        i.TABLE_ROW,
        I(() => ({ nodeTypes: [i.TABLE_CELL, i.TABLE_HEADER_CELL], min: 1 })),
        i.TABLE_CELL,
        i.TABLE_HEADER_CELL,
        E.HYPERLINK,
        new y(),
        E.EMBEDDED_ENTRY,
        E.EMBEDDED_RESOURCE,
        m("Contentful:Entry", f),
        E.ENTRY_HYPERLINK,
        m("Entry", ["text"]),
        E.ASSET_HYPERLINK,
        m("Asset", ["text"]),
        E.RESOURCE_HYPERLINK,
        m("Contentful:Entry", ["text"]));
    },
    40453: (e, t, r) => {
      "use strict";
      r.d(t, { i: () => s });
      var n = r(36439),
        i = r(40235);
      let E = {
          [i.nA.DOCUMENT]: (e, t) => t,
          [i.nA.PARAGRAPH]: (e, t) => n.createElement("p", null, t),
          [i.nA.HEADING_1]: (e, t) => n.createElement("h1", null, t),
          [i.nA.HEADING_2]: (e, t) => n.createElement("h2", null, t),
          [i.nA.HEADING_3]: (e, t) => n.createElement("h3", null, t),
          [i.nA.HEADING_4]: (e, t) => n.createElement("h4", null, t),
          [i.nA.HEADING_5]: (e, t) => n.createElement("h5", null, t),
          [i.nA.HEADING_6]: (e, t) => n.createElement("h6", null, t),
          [i.nA.EMBEDDED_ENTRY]: (e, t) => n.createElement("div", null, t),
          [i.nA.EMBEDDED_RESOURCE]: (e, t) => n.createElement("div", null, t),
          [i.nA.UL_LIST]: (e, t) => n.createElement("ul", null, t),
          [i.nA.OL_LIST]: (e, t) => n.createElement("ol", null, t),
          [i.nA.LIST_ITEM]: (e, t) => n.createElement("li", null, t),
          [i.nA.QUOTE]: (e, t) => n.createElement("blockquote", null, t),
          [i.nA.HR]: () => n.createElement("hr", null),
          [i.nA.TABLE]: (e, t) =>
            n.createElement("table", null, n.createElement("tbody", null, t)),
          [i.nA.TABLE_ROW]: (e, t) => n.createElement("tr", null, t),
          [i.nA.TABLE_HEADER_CELL]: (e, t) => n.createElement("th", null, t),
          [i.nA.TABLE_CELL]: (e, t) => n.createElement("td", null, t),
          [i.XD.ASSET_HYPERLINK]: (e) => l(i.XD.ASSET_HYPERLINK, e),
          [i.XD.ENTRY_HYPERLINK]: (e) => l(i.XD.ENTRY_HYPERLINK, e),
          [i.XD.RESOURCE_HYPERLINK]: (e) => o(i.XD.RESOURCE_HYPERLINK, e),
          [i.XD.EMBEDDED_ENTRY]: (e) => l(i.XD.EMBEDDED_ENTRY, e),
          [i.XD.EMBEDDED_RESOURCE]: (e, t) => o(i.XD.EMBEDDED_RESOURCE, e),
          [i.XD.HYPERLINK]: (e, t) =>
            n.createElement("a", { href: e.data.uri }, t),
        },
        a = {
          [i.j7.BOLD]: (e) => n.createElement("b", null, e),
          [i.j7.ITALIC]: (e) => n.createElement("i", null, e),
          [i.j7.UNDERLINE]: (e) => n.createElement("u", null, e),
          [i.j7.CODE]: (e) => n.createElement("code", null, e),
          [i.j7.SUPERSCRIPT]: (e) => n.createElement("sup", null, e),
          [i.j7.SUBSCRIPT]: (e) => n.createElement("sub", null, e),
          [i.j7.STRIKETHROUGH]: (e) => n.createElement("s", null, e),
        };
      function l(e, t) {
        return n.createElement(
          "span",
          { key: t.data.target.sys.id },
          "type: ",
          t.nodeType,
          " id: ",
          t.data.target.sys.id,
        );
      }
      function o(e, t) {
        return n.createElement(
          "span",
          { key: t.data.target.sys.urn },
          "type: ",
          t.nodeType,
          " urn: ",
          t.data.target.sys.urn,
        );
      }
      function s(e, t = {}) {
        if (!e) return null;
        let r = e;
        return (
          t.stripEmptyTrailingParagraph &&
            (r = i._$.stripEmptyTrailingParagraphFromDocument(e)),
          (function e(t, r) {
            let {
              renderNode: E,
              renderMark: a,
              renderText: l,
              preserveWhitespace: o,
            } = r;
            if (i._$.isText(t)) {
              let e = l ? l(t.value) : t.value;
              if (o && !l) {
                let t = (e = e.replace(/ {2,}/g, (e) =>
                    "\xa0".repeat(e.length),
                  )).split("\n"),
                  r = [];
                (t.forEach((e, i) => {
                  (r.push(e),
                    i !== t.length - 1 && r.push(n.createElement("br", null)));
                }),
                  (e = r));
              }
              return t.marks.reduce(
                (e, t) => (a[t.type] ? a[t.type](e) : e),
                e,
              );
            }
            {
              var s;
              let i =
                ((s = t.content),
                s.map((t, i) => {
                  var E;
                  return (
                    (E = e(t, r)),
                    (0, n.isValidElement)(E) && null === E.key
                      ? (0, n.cloneElement)(E, { key: i })
                      : E
                  );
                }));
              return t.nodeType && E[t.nodeType]
                ? E[t.nodeType](t, i)
                : n.createElement(n.Fragment, null, i);
            }
          })(r, {
            renderNode: { ...E, ...t.renderNode },
            renderMark: { ...a, ...t.renderMark },
            renderText: t.renderText,
            preserveWhitespace: t.preserveWhitespace,
          })
        );
      }
    },
  },
]);
