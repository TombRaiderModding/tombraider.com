(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [972],
  {
    55817: function (e, r) {
      "use strict";
      var n;
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.BLOCKS = void 0),
        ((n = r.BLOCKS || (r.BLOCKS = {})).DOCUMENT = "document"),
        (n.PARAGRAPH = "paragraph"),
        (n.HEADING_1 = "heading-1"),
        (n.HEADING_2 = "heading-2"),
        (n.HEADING_3 = "heading-3"),
        (n.HEADING_4 = "heading-4"),
        (n.HEADING_5 = "heading-5"),
        (n.HEADING_6 = "heading-6"),
        (n.OL_LIST = "ordered-list"),
        (n.UL_LIST = "unordered-list"),
        (n.LIST_ITEM = "list-item"),
        (n.HR = "hr"),
        (n.QUOTE = "blockquote"),
        (n.EMBEDDED_ENTRY = "embedded-entry-block"),
        (n.EMBEDDED_ASSET = "embedded-asset-block"),
        (n.EMBEDDED_RESOURCE = "embedded-resource-block"),
        (n.TABLE = "table"),
        (n.TABLE_ROW = "table-row"),
        (n.TABLE_CELL = "table-cell"),
        (n.TABLE_HEADER_CELL = "table-header-cell"));
    },
    62949: function (e, r, n) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 });
      var a = n(55817),
        u = {
          nodeType: a.BLOCKS.DOCUMENT,
          data: {},
          content: [
            {
              nodeType: a.BLOCKS.PARAGRAPH,
              data: {},
              content: [{ nodeType: "text", value: "", marks: [], data: {} }],
            },
          ],
        };
      r.default = u;
    },
    31834: function (e, r, n) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.isText = r.isBlock = r.isInline = void 0));
      var a = n(55817),
        u = n(81173);
      function hasValue(e, r) {
        for (var n = 0, a = Object.keys(e); n < a.length; n++)
          if (r === e[a[n]]) return !0;
        return !1;
      }
      ((r.isInline = function (e) {
        return hasValue(u.INLINES, e.nodeType);
      }),
        (r.isBlock = function (e) {
          return hasValue(a.BLOCKS, e.nodeType);
        }),
        (r.isText = function (e) {
          return "text" === e.nodeType;
        }));
    },
    16843: function (e, r, n) {
      "use strict";
      var a =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, r, n, a) {
                void 0 === a && (a = n);
                var u = Object.getOwnPropertyDescriptor(r, n);
                ((!u ||
                  ("get" in u
                    ? !r.__esModule
                    : u.writable || u.configurable)) &&
                  (u = {
                    enumerable: !0,
                    get: function () {
                      return r[n];
                    },
                  }),
                  Object.defineProperty(e, a, u));
              }
            : function (e, r, n, a) {
                (void 0 === a && (a = n), (e[a] = r[n]));
              }),
        u =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, r) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: r,
                });
              }
            : function (e, r) {
                e.default = r;
              }),
        l =
          (this && this.__exportStar) ||
          function (e, r) {
            for (var n in e)
              "default" === n ||
                Object.prototype.hasOwnProperty.call(r, n) ||
                a(r, e, n);
          },
        s =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var r = {};
            if (null != e)
              for (var n in e)
                "default" !== n &&
                  Object.prototype.hasOwnProperty.call(e, n) &&
                  a(r, e, n);
            return (u(r, e), r);
          },
        c =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.helpers =
          r.EMPTY_DOCUMENT =
          r.MARKS =
          r.INLINES =
          r.BLOCKS =
            void 0));
      var d = n(55817);
      Object.defineProperty(r, "BLOCKS", {
        enumerable: !0,
        get: function () {
          return d.BLOCKS;
        },
      });
      var f = n(81173);
      Object.defineProperty(r, "INLINES", {
        enumerable: !0,
        get: function () {
          return f.INLINES;
        },
      });
      var E = n(73428);
      (Object.defineProperty(r, "MARKS", {
        enumerable: !0,
        get: function () {
          return c(E).default;
        },
      }),
        l(n(43406), r),
        l(n(54076), r),
        l(n(44611), r));
      var p = n(62949);
      Object.defineProperty(r, "EMPTY_DOCUMENT", {
        enumerable: !0,
        get: function () {
          return c(p).default;
        },
      });
      var S = s(n(31834));
      r.helpers = S;
    },
    81173: function (e, r) {
      "use strict";
      var n;
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.INLINES = void 0),
        ((n = r.INLINES || (r.INLINES = {})).HYPERLINK = "hyperlink"),
        (n.ENTRY_HYPERLINK = "entry-hyperlink"),
        (n.ASSET_HYPERLINK = "asset-hyperlink"),
        (n.RESOURCE_HYPERLINK = "resource-hyperlink"),
        (n.EMBEDDED_ENTRY = "embedded-entry-inline"),
        (n.EMBEDDED_RESOURCE = "embedded-resource-inline"));
    },
    73428: function (e, r) {
      "use strict";
      var n, a;
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        ((a = n || (n = {})).BOLD = "bold"),
        (a.ITALIC = "italic"),
        (a.UNDERLINE = "underline"),
        (a.CODE = "code"),
        (a.SUPERSCRIPT = "superscript"),
        (a.SUBSCRIPT = "subscript"),
        (r.default = n));
    },
    44611: function (e, r) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 });
    },
    43406: function (e, r, n) {
      "use strict";
      var a,
        u =
          (this && this.__spreadArray) ||
          function (e, r, n) {
            if (n || 2 == arguments.length)
              for (var a, u = 0, l = r.length; u < l; u++)
                (!a && u in r) ||
                  (a || (a = Array.prototype.slice.call(r, 0, u)),
                  (a[u] = r[u]));
            return e.concat(a || Array.prototype.slice.call(r));
          },
        l =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.V1_MARKS =
          r.V1_NODE_TYPES =
          r.TEXT_CONTAINERS =
          r.HEADINGS =
          r.CONTAINERS =
          r.VOID_BLOCKS =
          r.TABLE_BLOCKS =
          r.LIST_ITEM_BLOCKS =
          r.TOP_LEVEL_BLOCKS =
            void 0));
      var s = n(55817),
        c = n(81173),
        d = l(n(73428));
      ((r.TOP_LEVEL_BLOCKS = [
        s.BLOCKS.PARAGRAPH,
        s.BLOCKS.HEADING_1,
        s.BLOCKS.HEADING_2,
        s.BLOCKS.HEADING_3,
        s.BLOCKS.HEADING_4,
        s.BLOCKS.HEADING_5,
        s.BLOCKS.HEADING_6,
        s.BLOCKS.OL_LIST,
        s.BLOCKS.UL_LIST,
        s.BLOCKS.HR,
        s.BLOCKS.QUOTE,
        s.BLOCKS.EMBEDDED_ENTRY,
        s.BLOCKS.EMBEDDED_ASSET,
        s.BLOCKS.EMBEDDED_RESOURCE,
        s.BLOCKS.TABLE,
      ]),
        (r.LIST_ITEM_BLOCKS = [
          s.BLOCKS.PARAGRAPH,
          s.BLOCKS.HEADING_1,
          s.BLOCKS.HEADING_2,
          s.BLOCKS.HEADING_3,
          s.BLOCKS.HEADING_4,
          s.BLOCKS.HEADING_5,
          s.BLOCKS.HEADING_6,
          s.BLOCKS.OL_LIST,
          s.BLOCKS.UL_LIST,
          s.BLOCKS.HR,
          s.BLOCKS.QUOTE,
          s.BLOCKS.EMBEDDED_ENTRY,
          s.BLOCKS.EMBEDDED_ASSET,
          s.BLOCKS.EMBEDDED_RESOURCE,
        ]),
        (r.TABLE_BLOCKS = [
          s.BLOCKS.TABLE,
          s.BLOCKS.TABLE_ROW,
          s.BLOCKS.TABLE_CELL,
          s.BLOCKS.TABLE_HEADER_CELL,
        ]),
        (r.VOID_BLOCKS = [
          s.BLOCKS.HR,
          s.BLOCKS.EMBEDDED_ENTRY,
          s.BLOCKS.EMBEDDED_ASSET,
          s.BLOCKS.EMBEDDED_RESOURCE,
        ]),
        (r.CONTAINERS =
          (((a = {})[s.BLOCKS.OL_LIST] = [s.BLOCKS.LIST_ITEM]),
          (a[s.BLOCKS.UL_LIST] = [s.BLOCKS.LIST_ITEM]),
          (a[s.BLOCKS.LIST_ITEM] = r.LIST_ITEM_BLOCKS),
          (a[s.BLOCKS.QUOTE] = [s.BLOCKS.PARAGRAPH]),
          (a[s.BLOCKS.TABLE] = [s.BLOCKS.TABLE_ROW]),
          (a[s.BLOCKS.TABLE_ROW] = [
            s.BLOCKS.TABLE_CELL,
            s.BLOCKS.TABLE_HEADER_CELL,
          ]),
          (a[s.BLOCKS.TABLE_CELL] = [s.BLOCKS.PARAGRAPH]),
          (a[s.BLOCKS.TABLE_HEADER_CELL] = [s.BLOCKS.PARAGRAPH]),
          a)),
        (r.HEADINGS = [
          s.BLOCKS.HEADING_1,
          s.BLOCKS.HEADING_2,
          s.BLOCKS.HEADING_3,
          s.BLOCKS.HEADING_4,
          s.BLOCKS.HEADING_5,
          s.BLOCKS.HEADING_6,
        ]),
        (r.TEXT_CONTAINERS = u([s.BLOCKS.PARAGRAPH], r.HEADINGS, !0)),
        (r.V1_NODE_TYPES = [
          s.BLOCKS.DOCUMENT,
          s.BLOCKS.PARAGRAPH,
          s.BLOCKS.HEADING_1,
          s.BLOCKS.HEADING_2,
          s.BLOCKS.HEADING_3,
          s.BLOCKS.HEADING_4,
          s.BLOCKS.HEADING_5,
          s.BLOCKS.HEADING_6,
          s.BLOCKS.OL_LIST,
          s.BLOCKS.UL_LIST,
          s.BLOCKS.LIST_ITEM,
          s.BLOCKS.HR,
          s.BLOCKS.QUOTE,
          s.BLOCKS.EMBEDDED_ENTRY,
          s.BLOCKS.EMBEDDED_ASSET,
          c.INLINES.HYPERLINK,
          c.INLINES.ENTRY_HYPERLINK,
          c.INLINES.ASSET_HYPERLINK,
          c.INLINES.EMBEDDED_ENTRY,
          "text",
        ]),
        (r.V1_MARKS = [
          d.default.BOLD,
          d.default.CODE,
          d.default.ITALIC,
          d.default.UNDERLINE,
        ]));
    },
    54076: function (e, r) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 });
    },
    47025: function (e) {
      !(function () {
        "use strict";
        var r = {
            114: function (e) {
              function assertPath(e) {
                if ("string" != typeof e)
                  throw TypeError(
                    "Path must be a string. Received " + JSON.stringify(e),
                  );
              }
              function normalizeStringPosix(e, r) {
                for (
                  var n, a = "", u = 0, l = -1, s = 0, c = 0;
                  c <= e.length;
                  ++c
                ) {
                  if (c < e.length) n = e.charCodeAt(c);
                  else if (47 === n) break;
                  else n = 47;
                  if (47 === n) {
                    if (l === c - 1 || 1 === s);
                    else if (l !== c - 1 && 2 === s) {
                      if (
                        a.length < 2 ||
                        2 !== u ||
                        46 !== a.charCodeAt(a.length - 1) ||
                        46 !== a.charCodeAt(a.length - 2)
                      ) {
                        if (a.length > 2) {
                          var d = a.lastIndexOf("/");
                          if (d !== a.length - 1) {
                            (-1 === d
                              ? ((a = ""), (u = 0))
                              : (u =
                                  (a = a.slice(0, d)).length -
                                  1 -
                                  a.lastIndexOf("/")),
                              (l = c),
                              (s = 0));
                            continue;
                          }
                        } else if (2 === a.length || 1 === a.length) {
                          ((a = ""), (u = 0), (l = c), (s = 0));
                          continue;
                        }
                      }
                      r && (a.length > 0 ? (a += "/..") : (a = ".."), (u = 2));
                    } else
                      (a.length > 0
                        ? (a += "/" + e.slice(l + 1, c))
                        : (a = e.slice(l + 1, c)),
                        (u = c - l - 1));
                    ((l = c), (s = 0));
                  } else 46 === n && -1 !== s ? ++s : (s = -1);
                }
                return a;
              }
              var r = {
                resolve: function () {
                  for (
                    var e, r, n = "", a = !1, u = arguments.length - 1;
                    u >= -1 && !a;
                    u--
                  )
                    (u >= 0
                      ? (r = arguments[u])
                      : (void 0 === e && (e = ""), (r = e)),
                      assertPath(r),
                      0 !== r.length &&
                        ((n = r + "/" + n), (a = 47 === r.charCodeAt(0))));
                  return ((n = normalizeStringPosix(n, !a)), a)
                    ? n.length > 0
                      ? "/" + n
                      : "/"
                    : n.length > 0
                      ? n
                      : ".";
                },
                normalize: function (e) {
                  if ((assertPath(e), 0 === e.length)) return ".";
                  var r = 47 === e.charCodeAt(0),
                    n = 47 === e.charCodeAt(e.length - 1);
                  return (0 !== (e = normalizeStringPosix(e, !r)).length ||
                    r ||
                    (e = "."),
                  e.length > 0 && n && (e += "/"),
                  r)
                    ? "/" + e
                    : e;
                },
                isAbsolute: function (e) {
                  return (
                    assertPath(e),
                    e.length > 0 && 47 === e.charCodeAt(0)
                  );
                },
                join: function () {
                  if (0 == arguments.length) return ".";
                  for (var e, n = 0; n < arguments.length; ++n) {
                    var a = arguments[n];
                    (assertPath(a),
                      a.length > 0 &&
                        (void 0 === e ? (e = a) : (e += "/" + a)));
                  }
                  return void 0 === e ? "." : r.normalize(e);
                },
                relative: function (e, n) {
                  if (
                    (assertPath(e),
                    assertPath(n),
                    e === n || (e = r.resolve(e)) === (n = r.resolve(n)))
                  )
                    return "";
                  for (var a = 1; a < e.length && 47 === e.charCodeAt(a); ++a);
                  for (
                    var u = e.length, l = u - a, s = 1;
                    s < n.length && 47 === n.charCodeAt(s);
                    ++s
                  );
                  for (
                    var c = n.length - s, d = l < c ? l : c, f = -1, E = 0;
                    E <= d;
                    ++E
                  ) {
                    if (E === d) {
                      if (c > d) {
                        if (47 === n.charCodeAt(s + E))
                          return n.slice(s + E + 1);
                        if (0 === E) return n.slice(s + E);
                      } else
                        l > d &&
                          (47 === e.charCodeAt(a + E)
                            ? (f = E)
                            : 0 === E && (f = 0));
                      break;
                    }
                    var p = e.charCodeAt(a + E);
                    if (p !== n.charCodeAt(s + E)) break;
                    47 === p && (f = E);
                  }
                  var S = "";
                  for (E = a + f + 1; E <= u; ++E)
                    (E === u || 47 === e.charCodeAt(E)) &&
                      (0 === S.length ? (S += "..") : (S += "/.."));
                  return S.length > 0
                    ? S + n.slice(s + f)
                    : ((s += f), 47 === n.charCodeAt(s) && ++s, n.slice(s));
                },
                _makeLong: function (e) {
                  return e;
                },
                dirname: function (e) {
                  if ((assertPath(e), 0 === e.length)) return ".";
                  for (
                    var r = e.charCodeAt(0),
                      n = 47 === r,
                      a = -1,
                      u = !0,
                      l = e.length - 1;
                    l >= 1;
                    --l
                  )
                    if (47 === (r = e.charCodeAt(l))) {
                      if (!u) {
                        a = l;
                        break;
                      }
                    } else u = !1;
                  return -1 === a
                    ? n
                      ? "/"
                      : "."
                    : n && 1 === a
                      ? "//"
                      : e.slice(0, a);
                },
                basename: function (e, r) {
                  if (void 0 !== r && "string" != typeof r)
                    throw TypeError('"ext" argument must be a string');
                  assertPath(e);
                  var n,
                    a = 0,
                    u = -1,
                    l = !0;
                  if (void 0 !== r && r.length > 0 && r.length <= e.length) {
                    if (r.length === e.length && r === e) return "";
                    var s = r.length - 1,
                      c = -1;
                    for (n = e.length - 1; n >= 0; --n) {
                      var d = e.charCodeAt(n);
                      if (47 === d) {
                        if (!l) {
                          a = n + 1;
                          break;
                        }
                      } else
                        (-1 === c && ((l = !1), (c = n + 1)),
                          s >= 0 &&
                            (d === r.charCodeAt(s)
                              ? -1 == --s && (u = n)
                              : ((s = -1), (u = c))));
                    }
                    return (
                      a === u ? (u = c) : -1 === u && (u = e.length),
                      e.slice(a, u)
                    );
                  }
                  for (n = e.length - 1; n >= 0; --n)
                    if (47 === e.charCodeAt(n)) {
                      if (!l) {
                        a = n + 1;
                        break;
                      }
                    } else -1 === u && ((l = !1), (u = n + 1));
                  return -1 === u ? "" : e.slice(a, u);
                },
                extname: function (e) {
                  assertPath(e);
                  for (
                    var r = -1, n = 0, a = -1, u = !0, l = 0, s = e.length - 1;
                    s >= 0;
                    --s
                  ) {
                    var c = e.charCodeAt(s);
                    if (47 === c) {
                      if (!u) {
                        n = s + 1;
                        break;
                      }
                      continue;
                    }
                    (-1 === a && ((u = !1), (a = s + 1)),
                      46 === c
                        ? -1 === r
                          ? (r = s)
                          : 1 !== l && (l = 1)
                        : -1 !== r && (l = -1));
                  }
                  return -1 === r ||
                    -1 === a ||
                    0 === l ||
                    (1 === l && r === a - 1 && r === n + 1)
                    ? ""
                    : e.slice(r, a);
                },
                format: function (e) {
                  var r, n;
                  if (null === e || "object" != typeof e)
                    throw TypeError(
                      'The "pathObject" argument must be of type Object. Received type ' +
                        typeof e,
                    );
                  return (
                    (r = e.dir || e.root),
                    (n = e.base || (e.name || "") + (e.ext || "")),
                    r ? (r === e.root ? r + n : r + "/" + n) : n
                  );
                },
                parse: function (e) {
                  assertPath(e);
                  var r,
                    n = { root: "", dir: "", base: "", ext: "", name: "" };
                  if (0 === e.length) return n;
                  var a = e.charCodeAt(0),
                    u = 47 === a;
                  u ? ((n.root = "/"), (r = 1)) : (r = 0);
                  for (
                    var l = -1, s = 0, c = -1, d = !0, f = e.length - 1, E = 0;
                    f >= r;
                    --f
                  ) {
                    if (47 === (a = e.charCodeAt(f))) {
                      if (!d) {
                        s = f + 1;
                        break;
                      }
                      continue;
                    }
                    (-1 === c && ((d = !1), (c = f + 1)),
                      46 === a
                        ? -1 === l
                          ? (l = f)
                          : 1 !== E && (E = 1)
                        : -1 !== l && (E = -1));
                  }
                  return (
                    -1 === l ||
                    -1 === c ||
                    0 === E ||
                    (1 === E && l === c - 1 && l === s + 1)
                      ? -1 !== c &&
                        (0 === s && u
                          ? (n.base = n.name = e.slice(1, c))
                          : (n.base = n.name = e.slice(s, c)))
                      : (0 === s && u
                          ? ((n.name = e.slice(1, l)), (n.base = e.slice(1, c)))
                          : ((n.name = e.slice(s, l)),
                            (n.base = e.slice(s, c))),
                        (n.ext = e.slice(l, c))),
                    s > 0 ? (n.dir = e.slice(0, s - 1)) : u && (n.dir = "/"),
                    n
                  );
                },
                sep: "/",
                delimiter: ":",
                win32: null,
                posix: null,
              };
              ((r.posix = r), (e.exports = r));
            },
          },
          n = {};
        function __nccwpck_require__(e) {
          var a = n[e];
          if (void 0 !== a) return a.exports;
          var u = (n[e] = { exports: {} }),
            l = !0;
          try {
            (r[e](u, u.exports, __nccwpck_require__), (l = !1));
          } finally {
            l && delete n[e];
          }
          return u.exports;
        }
        __nccwpck_require__.ab = "//";
        var a = __nccwpck_require__(114);
        e.exports = a;
      })();
    },
    30721: function (e, r, n) {
      "use strict";
      n.d(r, {
        v: function () {
          return H;
        },
      });
      var a,
        u,
        l,
        s,
        c = n(52983),
        d = n(59438),
        f = n(23285),
        E = n(20140),
        p = n(14940),
        S = n(31083),
        L = n(85682),
        _ = n(14305),
        v = n(170),
        I =
          (((a = I || {})[(a.First = 0)] = "First"),
          (a[(a.Previous = 1)] = "Previous"),
          (a[(a.Next = 2)] = "Next"),
          (a[(a.Last = 3)] = "Last"),
          (a[(a.Specific = 4)] = "Specific"),
          (a[(a.Nothing = 5)] = "Nothing"),
          a),
        h = n(54376),
        C = n(93373),
        m = n(80213),
        A = n(38795),
        D = n(25874);
      function i(e) {
        var r;
        if (e.type) return e.type;
        let n = null != (r = e.as) ? r : "button";
        if ("string" == typeof n && "button" === n.toLowerCase())
          return "button";
      }
      var B = n(26917),
        g = n(7556);
      function t(e) {
        return [e.screenX, e.screenY];
      }
      let R =
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
      function o(e) {
        var r, n;
        let a = null != (r = e.innerText) ? r : "",
          u = e.cloneNode(!0);
        if (!(u instanceof HTMLElement)) return a;
        let l = !1;
        for (let e of u.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
          (e.remove(), (l = !0));
        let s = l ? (null != (n = u.innerText) ? n : "") : a;
        return (R.test(s) && (s = s.replace(R, "")), s);
      }
      var T =
          (((u = T || {})[(u.Open = 0)] = "Open"),
          (u[(u.Closed = 1)] = "Closed"),
          u),
        b =
          (((l = b || {})[(l.Pointer = 0)] = "Pointer"),
          (l[(l.Other = 1)] = "Other"),
          l),
        y =
          (((s = y || {})[(s.OpenMenu = 0)] = "OpenMenu"),
          (s[(s.CloseMenu = 1)] = "CloseMenu"),
          (s[(s.GoToItem = 2)] = "GoToItem"),
          (s[(s.Search = 3)] = "Search"),
          (s[(s.ClearSearch = 4)] = "ClearSearch"),
          (s[(s.RegisterItem = 5)] = "RegisterItem"),
          (s[(s.UnregisterItem = 6)] = "UnregisterItem"),
          s);
      function w(e, r = (e) => e) {
        let n = null !== e.activeItemIndex ? e.items[e.activeItemIndex] : null,
          a = (0, C.z2)(
            r(e.items.slice()),
            (e) => e.dataRef.current.domRef.current,
          ),
          u = n ? a.indexOf(n) : null;
        return (-1 === u && (u = null), { items: a, activeItemIndex: u });
      }
      let N = {
          1: (e) =>
            1 === e.menuState
              ? e
              : { ...e, activeItemIndex: null, menuState: 1 },
          0: (e) =>
            0 === e.menuState ? e : { ...e, __demoMode: !1, menuState: 0 },
          2: (e, r) => {
            var n;
            let a = w(e),
              u = (function (e, r) {
                let n = r.resolveItems();
                if (n.length <= 0) return null;
                let a = r.resolveActiveIndex(),
                  u = null != a ? a : -1,
                  l = (() => {
                    switch (e.focus) {
                      case 0:
                        return n.findIndex((e) => !r.resolveDisabled(e));
                      case 1: {
                        let e = n
                          .slice()
                          .reverse()
                          .findIndex(
                            (e, n, a) =>
                              (-1 === u || !(a.length - n - 1 >= u)) &&
                              !r.resolveDisabled(e),
                          );
                        return -1 === e ? e : n.length - 1 - e;
                      }
                      case 2:
                        return n.findIndex(
                          (e, n) => !(n <= u) && !r.resolveDisabled(e),
                        );
                      case 3: {
                        let e = n
                          .slice()
                          .reverse()
                          .findIndex((e) => !r.resolveDisabled(e));
                        return -1 === e ? e : n.length - 1 - e;
                      }
                      case 4:
                        return n.findIndex((n) => r.resolveId(n) === e.id);
                      case 5:
                        return null;
                      default:
                        !(function (e) {
                          throw Error("Unexpected object: " + e);
                        })(e);
                    }
                  })();
                return -1 === l ? a : l;
              })(r, {
                resolveItems: () => a.items,
                resolveActiveIndex: () => a.activeItemIndex,
                resolveId: (e) => e.id,
                resolveDisabled: (e) => e.dataRef.current.disabled,
              });
            return {
              ...e,
              ...a,
              searchQuery: "",
              activeItemIndex: u,
              activationTrigger: null != (n = r.trigger) ? n : 1,
            };
          },
          3: (e, r) => {
            let n = "" !== e.searchQuery ? 0 : 1,
              a = e.searchQuery + r.value.toLowerCase(),
              u = (
                null !== e.activeItemIndex
                  ? e.items
                      .slice(e.activeItemIndex + n)
                      .concat(e.items.slice(0, e.activeItemIndex + n))
                  : e.items
              ).find((e) => {
                var r;
                return (
                  (null == (r = e.dataRef.current.textValue)
                    ? void 0
                    : r.startsWith(a)) && !e.dataRef.current.disabled
                );
              }),
              l = u ? e.items.indexOf(u) : -1;
            return -1 === l || l === e.activeItemIndex
              ? { ...e, searchQuery: a }
              : {
                  ...e,
                  searchQuery: a,
                  activeItemIndex: l,
                  activationTrigger: 1,
                };
          },
          4: (e) =>
            "" === e.searchQuery
              ? e
              : { ...e, searchQuery: "", searchActiveItemIndex: null },
          5: (e, r) => {
            let n = w(e, (e) => [...e, { id: r.id, dataRef: r.dataRef }]);
            return { ...e, ...n };
          },
          6: (e, r) => {
            let n = w(e, (e) => {
              let n = e.findIndex((e) => e.id === r.id);
              return (-1 !== n && e.splice(n, 1), e);
            });
            return { ...e, ...n, activationTrigger: 1 };
          },
        },
        K = (0, c.createContext)(null);
      function O(e) {
        let r = (0, c.useContext)(K);
        if (null === r) {
          let r = Error(`<${e} /> is missing a parent <Menu /> component.`);
          throw (Error.captureStackTrace && Error.captureStackTrace(r, O), r);
        }
        return r;
      }
      function ye(e, r) {
        return (0, d.E)(r.type, N, e, r);
      }
      K.displayName = "MenuContext";
      let P = c.Fragment,
        M = f.AN.RenderStrategy | f.AN.Static,
        x = c.Fragment,
        H = Object.assign(
          (0, f.yV)(function (e, r) {
            let { __demoMode: n = !1, ...a } = e,
              u = (0, c.useReducer)(ye, {
                __demoMode: n,
                menuState: n ? 0 : 1,
                buttonRef: (0, c.createRef)(),
                itemsRef: (0, c.createRef)(),
                items: [],
                searchQuery: "",
                activeItemIndex: null,
                activationTrigger: 1,
              }),
              [{ menuState: l, itemsRef: s, buttonRef: E }, p] = u,
              S = (0, L.T)(r);
            (0, m.O)(
              [E, s],
              (e, r) => {
                var n;
                (p({ type: 1 }),
                  (0, C.sP)(r, C.tJ.Loose) ||
                    (e.preventDefault(), null == (n = E.current) || n.focus()));
              },
              0 === l,
            );
            let _ = (0, g.z)(() => {
                p({ type: 1 });
              }),
              v = (0, c.useMemo)(() => ({ open: 0 === l, close: _ }), [l, _]);
            return c.createElement(
              K.Provider,
              { value: u },
              c.createElement(
                D.up,
                { value: (0, d.E)(l, { 0: D.ZM.Open, 1: D.ZM.Closed }) },
                (0, f.sY)({
                  ourProps: { ref: S },
                  theirProps: a,
                  slot: v,
                  defaultTag: P,
                  name: "Menu",
                }),
              ),
            );
          }),
          {
            Button: (0, f.yV)(function (e, r) {
              var n;
              let a = (0, _.M)(),
                { id: u = `headlessui-menu-button-${a}`, ...l } = e,
                [s, d] = O("Menu.Button"),
                E = (0, L.T)(s.buttonRef, r),
                C = (0, p.G)(),
                m = (0, g.z)((e) => {
                  switch (e.key) {
                    case v.R.Space:
                    case v.R.Enter:
                    case v.R.ArrowDown:
                      (e.preventDefault(),
                        e.stopPropagation(),
                        d({ type: 0 }),
                        C.nextFrame(() => d({ type: 2, focus: I.First })));
                      break;
                    case v.R.ArrowUp:
                      (e.preventDefault(),
                        e.stopPropagation(),
                        d({ type: 0 }),
                        C.nextFrame(() => d({ type: 2, focus: I.Last })));
                  }
                }),
                A = (0, g.z)((e) => {
                  e.key === v.R.Space && e.preventDefault();
                }),
                D = (0, g.z)((r) => {
                  if ((0, h.P)(r.currentTarget)) return r.preventDefault();
                  e.disabled ||
                    (0 === s.menuState
                      ? (d({ type: 1 }),
                        C.nextFrame(() => {
                          var e;
                          return null == (e = s.buttonRef.current)
                            ? void 0
                            : e.focus({ preventScroll: !0 });
                        }))
                      : (r.preventDefault(), d({ type: 0 })));
                }),
                B = (0, c.useMemo)(() => ({ open: 0 === s.menuState }), [s]),
                R = {
                  ref: E,
                  id: u,
                  type: (function (e, r) {
                    let [n, a] = (0, c.useState)(() => i(e));
                    return (
                      (0, S.e)(() => {
                        a(i(e));
                      }, [e.type, e.as]),
                      (0, S.e)(() => {
                        n ||
                          (r.current &&
                            r.current instanceof HTMLButtonElement &&
                            !r.current.hasAttribute("type") &&
                            a("button"));
                      }, [n, r]),
                      n
                    );
                  })(e, s.buttonRef),
                  "aria-haspopup": "menu",
                  "aria-controls":
                    null == (n = s.itemsRef.current) ? void 0 : n.id,
                  "aria-expanded": 0 === s.menuState,
                  onKeyDown: m,
                  onKeyUp: A,
                  onClick: D,
                };
              return (0, f.sY)({
                ourProps: R,
                theirProps: l,
                slot: B,
                defaultTag: "button",
                name: "Menu.Button",
              });
            }),
            Items: (0, f.yV)(function (e, r) {
              var n, a;
              let u = (0, _.M)(),
                { id: l = `headlessui-menu-items-${u}`, ...s } = e,
                [d, h] = O("Menu.Items"),
                m = (0, L.T)(d.itemsRef, r),
                R = (0, B.i)(d.itemsRef),
                T = (0, p.G)(),
                b = (0, D.oJ)(),
                y =
                  null !== b
                    ? (b & D.ZM.Open) === D.ZM.Open
                    : 0 === d.menuState;
              ((0, c.useEffect)(() => {
                let e = d.itemsRef.current;
                e &&
                  0 === d.menuState &&
                  e !== (null == R ? void 0 : R.activeElement) &&
                  e.focus({ preventScroll: !0 });
              }, [d.menuState, d.itemsRef, R]),
                (function ({
                  container: e,
                  accept: r,
                  walk: n,
                  enabled: a = !0,
                }) {
                  let u = (0, c.useRef)(r),
                    l = (0, c.useRef)(n);
                  ((0, c.useEffect)(() => {
                    ((u.current = r), (l.current = n));
                  }, [r, n]),
                    (0, S.e)(() => {
                      if (!e || !a) return;
                      let r = (0, A.r)(e);
                      if (!r) return;
                      let n = u.current,
                        s = l.current,
                        c = Object.assign((e) => n(e), { acceptNode: n }),
                        d = r.createTreeWalker(
                          e,
                          NodeFilter.SHOW_ELEMENT,
                          c,
                          !1,
                        );
                      for (; d.nextNode(); ) s(d.currentNode);
                    }, [e, a, u, l]));
                })({
                  container: d.itemsRef.current,
                  enabled: 0 === d.menuState,
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
              let N = (0, g.z)((e) => {
                  var r, n;
                  switch ((T.dispose(), e.key)) {
                    case v.R.Space:
                      if ("" !== d.searchQuery)
                        return (
                          e.preventDefault(),
                          e.stopPropagation(),
                          h({ type: 3, value: e.key })
                        );
                    case v.R.Enter:
                      if (
                        (e.preventDefault(),
                        e.stopPropagation(),
                        h({ type: 1 }),
                        null !== d.activeItemIndex)
                      ) {
                        let { dataRef: e } = d.items[d.activeItemIndex];
                        null ==
                          (n =
                            null == (r = e.current)
                              ? void 0
                              : r.domRef.current) || n.click();
                      }
                      (0, C.wI)(d.buttonRef.current);
                      break;
                    case v.R.ArrowDown:
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        h({ type: 2, focus: I.Next })
                      );
                    case v.R.ArrowUp:
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        h({ type: 2, focus: I.Previous })
                      );
                    case v.R.Home:
                    case v.R.PageUp:
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        h({ type: 2, focus: I.First })
                      );
                    case v.R.End:
                    case v.R.PageDown:
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        h({ type: 2, focus: I.Last })
                      );
                    case v.R.Escape:
                      (e.preventDefault(),
                        e.stopPropagation(),
                        h({ type: 1 }),
                        (0, E.k)().nextFrame(() => {
                          var e;
                          return null == (e = d.buttonRef.current)
                            ? void 0
                            : e.focus({ preventScroll: !0 });
                        }));
                      break;
                    case v.R.Tab:
                      (e.preventDefault(),
                        e.stopPropagation(),
                        h({ type: 1 }),
                        (0, E.k)().nextFrame(() => {
                          (0, C.EO)(
                            d.buttonRef.current,
                            e.shiftKey ? C.TO.Previous : C.TO.Next,
                          );
                        }));
                      break;
                    default:
                      1 === e.key.length &&
                        (h({ type: 3, value: e.key }),
                        T.setTimeout(() => h({ type: 4 }), 350));
                  }
                }),
                K = (0, g.z)((e) => {
                  e.key === v.R.Space && e.preventDefault();
                }),
                P = (0, c.useMemo)(() => ({ open: 0 === d.menuState }), [d]),
                x = {
                  "aria-activedescendant":
                    null === d.activeItemIndex ||
                    null == (n = d.items[d.activeItemIndex])
                      ? void 0
                      : n.id,
                  "aria-labelledby":
                    null == (a = d.buttonRef.current) ? void 0 : a.id,
                  id: l,
                  onKeyDown: N,
                  onKeyUp: K,
                  role: "menu",
                  tabIndex: 0,
                  ref: m,
                };
              return (0, f.sY)({
                ourProps: x,
                theirProps: s,
                slot: P,
                defaultTag: "div",
                features: M,
                visible: y,
                name: "Menu.Items",
              });
            }),
            Item: (0, f.yV)(function (e, r) {
              let n,
                a,
                u,
                l = (0, _.M)(),
                {
                  id: s = `headlessui-menu-item-${l}`,
                  disabled: d = !1,
                  ...p
                } = e,
                [v, h] = O("Menu.Item"),
                m =
                  null !== v.activeItemIndex &&
                  v.items[v.activeItemIndex].id === s,
                A = (0, c.useRef)(null),
                D = (0, L.T)(r, A);
              (0, S.e)(() => {
                if (
                  v.__demoMode ||
                  0 !== v.menuState ||
                  !m ||
                  0 === v.activationTrigger
                )
                  return;
                let e = (0, E.k)();
                return (
                  e.requestAnimationFrame(() => {
                    var e, r;
                    null ==
                      (r =
                        null == (e = A.current) ? void 0 : e.scrollIntoView) ||
                      r.call(e, { block: "nearest" });
                  }),
                  e.dispose
                );
              }, [
                v.__demoMode,
                A,
                m,
                v.menuState,
                v.activationTrigger,
                v.activeItemIndex,
              ]);
              let B =
                  ((n = (0, c.useRef)("")),
                  (a = (0, c.useRef)("")),
                  (0, g.z)(() => {
                    let e = A.current;
                    if (!e) return "";
                    let r = e.innerText;
                    if (n.current === r) return a.current;
                    let u = (function (e) {
                      let r = e.getAttribute("aria-label");
                      if ("string" == typeof r) return r.trim();
                      let n = e.getAttribute("aria-labelledby");
                      if (n) {
                        let e = n
                          .split(" ")
                          .map((e) => {
                            let r = document.getElementById(e);
                            if (r) {
                              let e = r.getAttribute("aria-label");
                              return "string" == typeof e
                                ? e.trim()
                                : o(r).trim();
                            }
                            return null;
                          })
                          .filter(Boolean);
                        if (e.length > 0) return e.join(", ");
                      }
                      return o(e).trim();
                    })(e)
                      .trim()
                      .toLowerCase();
                    return ((n.current = r), (a.current = u), u);
                  })),
                R = (0, c.useRef)({
                  disabled: d,
                  domRef: A,
                  get textValue() {
                    return B();
                  },
                });
              ((0, S.e)(() => {
                R.current.disabled = d;
              }, [R, d]),
                (0, S.e)(
                  () => (
                    h({ type: 5, id: s, dataRef: R }),
                    () => h({ type: 6, id: s })
                  ),
                  [R, s],
                ));
              let T = (0, g.z)(() => {
                  h({ type: 1 });
                }),
                b = (0, g.z)((e) => {
                  if (d) return e.preventDefault();
                  (h({ type: 1 }), (0, C.wI)(v.buttonRef.current));
                }),
                y = (0, g.z)(() => {
                  if (d) return h({ type: 2, focus: I.Nothing });
                  h({ type: 2, focus: I.Specific, id: s });
                }),
                N =
                  ((u = (0, c.useRef)([-1, -1])),
                  {
                    wasMoved(e) {
                      let r = t(e);
                      return (
                        (u.current[0] !== r[0] || u.current[1] !== r[1]) &&
                        ((u.current = r), !0)
                      );
                    },
                    update(e) {
                      u.current = t(e);
                    },
                  }),
                K = (0, g.z)((e) => N.update(e)),
                P = (0, g.z)((e) => {
                  N.wasMoved(e) &&
                    (d ||
                      m ||
                      h({ type: 2, focus: I.Specific, id: s, trigger: 0 }));
                }),
                M = (0, g.z)((e) => {
                  N.wasMoved(e) &&
                    (d || (m && h({ type: 2, focus: I.Nothing })));
                }),
                H = (0, c.useMemo)(
                  () => ({ active: m, disabled: d, close: T }),
                  [m, d, T],
                );
              return (0, f.sY)({
                ourProps: {
                  id: s,
                  ref: D,
                  role: "menuitem",
                  tabIndex: !0 === d ? void 0 : -1,
                  "aria-disabled": !0 === d || void 0,
                  disabled: void 0,
                  onClick: b,
                  onFocus: y,
                  onPointerEnter: K,
                  onMouseEnter: K,
                  onPointerMove: P,
                  onMouseMove: P,
                  onPointerLeave: M,
                  onMouseLeave: M,
                },
                theirProps: p,
                slot: H,
                defaultTag: x,
                name: "Menu.Item",
              });
            }),
          },
        );
    },
  },
]);
