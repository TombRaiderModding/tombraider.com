(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [197],
  {
    55817: function (e, t) {
      "use strict";
      var r;
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.BLOCKS = void 0),
        ((r = t.BLOCKS || (t.BLOCKS = {})).DOCUMENT = "document"),
        (r.PARAGRAPH = "paragraph"),
        (r.HEADING_1 = "heading-1"),
        (r.HEADING_2 = "heading-2"),
        (r.HEADING_3 = "heading-3"),
        (r.HEADING_4 = "heading-4"),
        (r.HEADING_5 = "heading-5"),
        (r.HEADING_6 = "heading-6"),
        (r.OL_LIST = "ordered-list"),
        (r.UL_LIST = "unordered-list"),
        (r.LIST_ITEM = "list-item"),
        (r.HR = "hr"),
        (r.QUOTE = "blockquote"),
        (r.EMBEDDED_ENTRY = "embedded-entry-block"),
        (r.EMBEDDED_ASSET = "embedded-asset-block"),
        (r.EMBEDDED_RESOURCE = "embedded-resource-block"),
        (r.TABLE = "table"),
        (r.TABLE_ROW = "table-row"),
        (r.TABLE_CELL = "table-cell"),
        (r.TABLE_HEADER_CELL = "table-header-cell"));
    },
    62949: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(55817),
        i = {
          nodeType: n.BLOCKS.DOCUMENT,
          data: {},
          content: [
            {
              nodeType: n.BLOCKS.PARAGRAPH,
              data: {},
              content: [{ nodeType: "text", value: "", marks: [], data: {} }],
            },
          ],
        };
      t.default = i;
    },
    31834: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isText = t.isBlock = t.isInline = void 0));
      var n = r(55817),
        i = r(81173);
      function hasValue(e, t) {
        for (var r = 0, n = Object.keys(e); r < n.length; r++)
          if (t === e[n[r]]) return !0;
        return !1;
      }
      ((t.isInline = function (e) {
        return hasValue(i.INLINES, e.nodeType);
      }),
        (t.isBlock = function (e) {
          return hasValue(n.BLOCKS, e.nodeType);
        }),
        (t.isText = function (e) {
          return "text" === e.nodeType;
        }));
    },
    16843: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r);
                var i = Object.getOwnPropertyDescriptor(t, r);
                ((!i ||
                  ("get" in i
                    ? !t.__esModule
                    : i.writable || i.configurable)) &&
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  }),
                  Object.defineProperty(e, n, i));
              }
            : function (e, t, r, n) {
                (void 0 === n && (n = r), (e[n] = t[r]));
              }),
        i =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        a =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e)
              "default" === r ||
                Object.prototype.hasOwnProperty.call(t, r) ||
                n(t, e, r);
          },
        o =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.prototype.hasOwnProperty.call(e, r) &&
                  n(t, e, r);
            return (i(t, e), t);
          },
        l =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.helpers =
          t.EMPTY_DOCUMENT =
          t.MARKS =
          t.INLINES =
          t.BLOCKS =
            void 0));
      var s = r(55817);
      Object.defineProperty(t, "BLOCKS", {
        enumerable: !0,
        get: function () {
          return s.BLOCKS;
        },
      });
      var c = r(81173);
      Object.defineProperty(t, "INLINES", {
        enumerable: !0,
        get: function () {
          return c.INLINES;
        },
      });
      var u = r(73428);
      (Object.defineProperty(t, "MARKS", {
        enumerable: !0,
        get: function () {
          return l(u).default;
        },
      }),
        a(r(43406), t),
        a(r(54076), t),
        a(r(44611), t));
      var E = r(62949);
      Object.defineProperty(t, "EMPTY_DOCUMENT", {
        enumerable: !0,
        get: function () {
          return l(E).default;
        },
      });
      var _ = o(r(31834));
      t.helpers = _;
    },
    81173: function (e, t) {
      "use strict";
      var r;
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.INLINES = void 0),
        ((r = t.INLINES || (t.INLINES = {})).HYPERLINK = "hyperlink"),
        (r.ENTRY_HYPERLINK = "entry-hyperlink"),
        (r.ASSET_HYPERLINK = "asset-hyperlink"),
        (r.RESOURCE_HYPERLINK = "resource-hyperlink"),
        (r.EMBEDDED_ENTRY = "embedded-entry-inline"),
        (r.EMBEDDED_RESOURCE = "embedded-resource-inline"));
    },
    73428: function (e, t) {
      "use strict";
      var r, n;
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        ((n = r || (r = {})).BOLD = "bold"),
        (n.ITALIC = "italic"),
        (n.UNDERLINE = "underline"),
        (n.CODE = "code"),
        (n.SUPERSCRIPT = "superscript"),
        (n.SUBSCRIPT = "subscript"),
        (t.default = r));
    },
    44611: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    43406: function (e, t, r) {
      "use strict";
      var n,
        i =
          (this && this.__spreadArray) ||
          function (e, t, r) {
            if (r || 2 == arguments.length)
              for (var n, i = 0, a = t.length; i < a; i++)
                (!n && i in t) ||
                  (n || (n = Array.prototype.slice.call(t, 0, i)),
                  (n[i] = t[i]));
            return e.concat(n || Array.prototype.slice.call(t));
          },
        a =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.V1_MARKS =
          t.V1_NODE_TYPES =
          t.TEXT_CONTAINERS =
          t.HEADINGS =
          t.CONTAINERS =
          t.VOID_BLOCKS =
          t.TABLE_BLOCKS =
          t.LIST_ITEM_BLOCKS =
          t.TOP_LEVEL_BLOCKS =
            void 0));
      var o = r(55817),
        l = r(81173),
        s = a(r(73428));
      ((t.TOP_LEVEL_BLOCKS = [
        o.BLOCKS.PARAGRAPH,
        o.BLOCKS.HEADING_1,
        o.BLOCKS.HEADING_2,
        o.BLOCKS.HEADING_3,
        o.BLOCKS.HEADING_4,
        o.BLOCKS.HEADING_5,
        o.BLOCKS.HEADING_6,
        o.BLOCKS.OL_LIST,
        o.BLOCKS.UL_LIST,
        o.BLOCKS.HR,
        o.BLOCKS.QUOTE,
        o.BLOCKS.EMBEDDED_ENTRY,
        o.BLOCKS.EMBEDDED_ASSET,
        o.BLOCKS.EMBEDDED_RESOURCE,
        o.BLOCKS.TABLE,
      ]),
        (t.LIST_ITEM_BLOCKS = [
          o.BLOCKS.PARAGRAPH,
          o.BLOCKS.HEADING_1,
          o.BLOCKS.HEADING_2,
          o.BLOCKS.HEADING_3,
          o.BLOCKS.HEADING_4,
          o.BLOCKS.HEADING_5,
          o.BLOCKS.HEADING_6,
          o.BLOCKS.OL_LIST,
          o.BLOCKS.UL_LIST,
          o.BLOCKS.HR,
          o.BLOCKS.QUOTE,
          o.BLOCKS.EMBEDDED_ENTRY,
          o.BLOCKS.EMBEDDED_ASSET,
          o.BLOCKS.EMBEDDED_RESOURCE,
        ]),
        (t.TABLE_BLOCKS = [
          o.BLOCKS.TABLE,
          o.BLOCKS.TABLE_ROW,
          o.BLOCKS.TABLE_CELL,
          o.BLOCKS.TABLE_HEADER_CELL,
        ]),
        (t.VOID_BLOCKS = [
          o.BLOCKS.HR,
          o.BLOCKS.EMBEDDED_ENTRY,
          o.BLOCKS.EMBEDDED_ASSET,
          o.BLOCKS.EMBEDDED_RESOURCE,
        ]),
        (t.CONTAINERS =
          (((n = {})[o.BLOCKS.OL_LIST] = [o.BLOCKS.LIST_ITEM]),
          (n[o.BLOCKS.UL_LIST] = [o.BLOCKS.LIST_ITEM]),
          (n[o.BLOCKS.LIST_ITEM] = t.LIST_ITEM_BLOCKS),
          (n[o.BLOCKS.QUOTE] = [o.BLOCKS.PARAGRAPH]),
          (n[o.BLOCKS.TABLE] = [o.BLOCKS.TABLE_ROW]),
          (n[o.BLOCKS.TABLE_ROW] = [
            o.BLOCKS.TABLE_CELL,
            o.BLOCKS.TABLE_HEADER_CELL,
          ]),
          (n[o.BLOCKS.TABLE_CELL] = [o.BLOCKS.PARAGRAPH]),
          (n[o.BLOCKS.TABLE_HEADER_CELL] = [o.BLOCKS.PARAGRAPH]),
          n)),
        (t.HEADINGS = [
          o.BLOCKS.HEADING_1,
          o.BLOCKS.HEADING_2,
          o.BLOCKS.HEADING_3,
          o.BLOCKS.HEADING_4,
          o.BLOCKS.HEADING_5,
          o.BLOCKS.HEADING_6,
        ]),
        (t.TEXT_CONTAINERS = i([o.BLOCKS.PARAGRAPH], t.HEADINGS, !0)),
        (t.V1_NODE_TYPES = [
          o.BLOCKS.DOCUMENT,
          o.BLOCKS.PARAGRAPH,
          o.BLOCKS.HEADING_1,
          o.BLOCKS.HEADING_2,
          o.BLOCKS.HEADING_3,
          o.BLOCKS.HEADING_4,
          o.BLOCKS.HEADING_5,
          o.BLOCKS.HEADING_6,
          o.BLOCKS.OL_LIST,
          o.BLOCKS.UL_LIST,
          o.BLOCKS.LIST_ITEM,
          o.BLOCKS.HR,
          o.BLOCKS.QUOTE,
          o.BLOCKS.EMBEDDED_ENTRY,
          o.BLOCKS.EMBEDDED_ASSET,
          l.INLINES.HYPERLINK,
          l.INLINES.ENTRY_HYPERLINK,
          l.INLINES.ASSET_HYPERLINK,
          l.INLINES.EMBEDDED_ENTRY,
          "text",
        ]),
        (t.V1_MARKS = [
          s.default.BOLD,
          s.default.CODE,
          s.default.ITALIC,
          s.default.UNDERLINE,
        ]));
    },
    54076: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    8193: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/404",
        function () {
          return r(43171);
        },
      ]);
    },
    43171: function (e, t, r) {
      "use strict";
      r.a(e, async function (e, n) {
        try {
          (r.r(t),
            r.d(t, {
              __N_SSG: function () {
                return _;
              },
              default: function () {
                return Custom404;
              },
            }));
          var i = r(97458),
            a = r(75443),
            o = r(87249),
            l = r(47681),
            s = r.n(l),
            c = r(93656),
            u = r(91806),
            E = e([o, u]);
          [o, u] = E.then ? (await E)() : E;
          var _ = !0;
          function Custom404(e) {
            var t, r;
            let {
                navItems: n,
                surveys: l,
                websiteSingleton: E,
                signUpBanner: _,
              } = e,
              L = (0, c.useRouter)(),
              f = (0, u.Wx)(
                null === (r = E.pageNotFound404Background) || void 0 === r
                  ? void 0
                  : null === (t = r.fields.file) || void 0 === t
                    ? void 0
                    : t.url,
              );
            return (0, i.jsxs)("main", {
              style: { background: "url('".concat(f, "')") },
              className:
                "relative flex h-screen w-full items-center justify-center bg-cover",
              children: [
                (0, i.jsx)(o.ZP, { surveys: l, navItems: n, signUpBanner: _ }),
                (0, i.jsxs)("div", {
                  className:
                    "relative flex h-[50%] w-full flex-col items-center justify-center gap-y-8 px-4",
                  children: [
                    (0, i.jsx)(s(), {
                      fill: !0,
                      className: "absolute px-4",
                      src: "/images/404.svg",
                      alt: "404 image",
                    }),
                    (0, i.jsx)(s(), {
                      fill: !0,
                      className: "absolute px-4",
                      src: "/images/404_stroke.svg",
                      alt: "404 image",
                    }),
                    (0, i.jsx)("p", {
                      className: "text-center text-3xl",
                      children:
                        "Uh-oh! The page you are looking for does not exist.",
                    }),
                    (0, i.jsx)(a.Z, {
                      onClick: () => L.back(),
                      children: "Go Back",
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: "absolute bottom-0 h-[40%] w-full",
                  children: (0, i.jsx)(s(), {
                    fill: !0,
                    className: "object-cover object-top",
                    alt: "Bottom foliage border",
                    src: "/images/01_02_Transition 3.svg",
                  }),
                }),
                (0, i.jsx)("div", {
                  className:
                    "pointer-events-none absolute top-1/2 z-10 h-1/2 w-full bg-gradient-to-b from-transparent to-[rgba(24,24,24,0.60)]",
                }),
              ],
            });
          }
          n();
        } catch (e) {
          n(e);
        }
      });
    },
    96907: function (e) {
      !(function () {
        "use strict";
        var t = {
            114: function (e) {
              function assertPath(e) {
                if ("string" != typeof e)
                  throw TypeError(
                    "Path must be a string. Received " + JSON.stringify(e),
                  );
              }
              function normalizeStringPosix(e, t) {
                for (
                  var r, n = "", i = 0, a = -1, o = 0, l = 0;
                  l <= e.length;
                  ++l
                ) {
                  if (l < e.length) r = e.charCodeAt(l);
                  else if (47 === r) break;
                  else r = 47;
                  if (47 === r) {
                    if (a === l - 1 || 1 === o);
                    else if (a !== l - 1 && 2 === o) {
                      if (
                        n.length < 2 ||
                        2 !== i ||
                        46 !== n.charCodeAt(n.length - 1) ||
                        46 !== n.charCodeAt(n.length - 2)
                      ) {
                        if (n.length > 2) {
                          var s = n.lastIndexOf("/");
                          if (s !== n.length - 1) {
                            (-1 === s
                              ? ((n = ""), (i = 0))
                              : (i =
                                  (n = n.slice(0, s)).length -
                                  1 -
                                  n.lastIndexOf("/")),
                              (a = l),
                              (o = 0));
                            continue;
                          }
                        } else if (2 === n.length || 1 === n.length) {
                          ((n = ""), (i = 0), (a = l), (o = 0));
                          continue;
                        }
                      }
                      t && (n.length > 0 ? (n += "/..") : (n = ".."), (i = 2));
                    } else
                      (n.length > 0
                        ? (n += "/" + e.slice(a + 1, l))
                        : (n = e.slice(a + 1, l)),
                        (i = l - a - 1));
                    ((a = l), (o = 0));
                  } else 46 === r && -1 !== o ? ++o : (o = -1);
                }
                return n;
              }
              var t = {
                resolve: function () {
                  for (
                    var e, t, r = "", n = !1, i = arguments.length - 1;
                    i >= -1 && !n;
                    i--
                  )
                    (i >= 0
                      ? (t = arguments[i])
                      : (void 0 === e && (e = ""), (t = e)),
                      assertPath(t),
                      0 !== t.length &&
                        ((r = t + "/" + r), (n = 47 === t.charCodeAt(0))));
                  return ((r = normalizeStringPosix(r, !n)), n)
                    ? r.length > 0
                      ? "/" + r
                      : "/"
                    : r.length > 0
                      ? r
                      : ".";
                },
                normalize: function (e) {
                  if ((assertPath(e), 0 === e.length)) return ".";
                  var t = 47 === e.charCodeAt(0),
                    r = 47 === e.charCodeAt(e.length - 1);
                  return (0 !== (e = normalizeStringPosix(e, !t)).length ||
                    t ||
                    (e = "."),
                  e.length > 0 && r && (e += "/"),
                  t)
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
                  for (var e, r = 0; r < arguments.length; ++r) {
                    var n = arguments[r];
                    (assertPath(n),
                      n.length > 0 &&
                        (void 0 === e ? (e = n) : (e += "/" + n)));
                  }
                  return void 0 === e ? "." : t.normalize(e);
                },
                relative: function (e, r) {
                  if (
                    (assertPath(e),
                    assertPath(r),
                    e === r || (e = t.resolve(e)) === (r = t.resolve(r)))
                  )
                    return "";
                  for (var n = 1; n < e.length && 47 === e.charCodeAt(n); ++n);
                  for (
                    var i = e.length, a = i - n, o = 1;
                    o < r.length && 47 === r.charCodeAt(o);
                    ++o
                  );
                  for (
                    var l = r.length - o, s = a < l ? a : l, c = -1, u = 0;
                    u <= s;
                    ++u
                  ) {
                    if (u === s) {
                      if (l > s) {
                        if (47 === r.charCodeAt(o + u))
                          return r.slice(o + u + 1);
                        if (0 === u) return r.slice(o + u);
                      } else
                        a > s &&
                          (47 === e.charCodeAt(n + u)
                            ? (c = u)
                            : 0 === u && (c = 0));
                      break;
                    }
                    var E = e.charCodeAt(n + u);
                    if (E !== r.charCodeAt(o + u)) break;
                    47 === E && (c = u);
                  }
                  var _ = "";
                  for (u = n + c + 1; u <= i; ++u)
                    (u === i || 47 === e.charCodeAt(u)) &&
                      (0 === _.length ? (_ += "..") : (_ += "/.."));
                  return _.length > 0
                    ? _ + r.slice(o + c)
                    : ((o += c), 47 === r.charCodeAt(o) && ++o, r.slice(o));
                },
                _makeLong: function (e) {
                  return e;
                },
                dirname: function (e) {
                  if ((assertPath(e), 0 === e.length)) return ".";
                  for (
                    var t = e.charCodeAt(0),
                      r = 47 === t,
                      n = -1,
                      i = !0,
                      a = e.length - 1;
                    a >= 1;
                    --a
                  )
                    if (47 === (t = e.charCodeAt(a))) {
                      if (!i) {
                        n = a;
                        break;
                      }
                    } else i = !1;
                  return -1 === n
                    ? r
                      ? "/"
                      : "."
                    : r && 1 === n
                      ? "//"
                      : e.slice(0, n);
                },
                basename: function (e, t) {
                  if (void 0 !== t && "string" != typeof t)
                    throw TypeError('"ext" argument must be a string');
                  assertPath(e);
                  var r,
                    n = 0,
                    i = -1,
                    a = !0;
                  if (void 0 !== t && t.length > 0 && t.length <= e.length) {
                    if (t.length === e.length && t === e) return "";
                    var o = t.length - 1,
                      l = -1;
                    for (r = e.length - 1; r >= 0; --r) {
                      var s = e.charCodeAt(r);
                      if (47 === s) {
                        if (!a) {
                          n = r + 1;
                          break;
                        }
                      } else
                        (-1 === l && ((a = !1), (l = r + 1)),
                          o >= 0 &&
                            (s === t.charCodeAt(o)
                              ? -1 == --o && (i = r)
                              : ((o = -1), (i = l))));
                    }
                    return (
                      n === i ? (i = l) : -1 === i && (i = e.length),
                      e.slice(n, i)
                    );
                  }
                  for (r = e.length - 1; r >= 0; --r)
                    if (47 === e.charCodeAt(r)) {
                      if (!a) {
                        n = r + 1;
                        break;
                      }
                    } else -1 === i && ((a = !1), (i = r + 1));
                  return -1 === i ? "" : e.slice(n, i);
                },
                extname: function (e) {
                  assertPath(e);
                  for (
                    var t = -1, r = 0, n = -1, i = !0, a = 0, o = e.length - 1;
                    o >= 0;
                    --o
                  ) {
                    var l = e.charCodeAt(o);
                    if (47 === l) {
                      if (!i) {
                        r = o + 1;
                        break;
                      }
                      continue;
                    }
                    (-1 === n && ((i = !1), (n = o + 1)),
                      46 === l
                        ? -1 === t
                          ? (t = o)
                          : 1 !== a && (a = 1)
                        : -1 !== t && (a = -1));
                  }
                  return -1 === t ||
                    -1 === n ||
                    0 === a ||
                    (1 === a && t === n - 1 && t === r + 1)
                    ? ""
                    : e.slice(t, n);
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
                  assertPath(e);
                  var t,
                    r = { root: "", dir: "", base: "", ext: "", name: "" };
                  if (0 === e.length) return r;
                  var n = e.charCodeAt(0),
                    i = 47 === n;
                  i ? ((r.root = "/"), (t = 1)) : (t = 0);
                  for (
                    var a = -1, o = 0, l = -1, s = !0, c = e.length - 1, u = 0;
                    c >= t;
                    --c
                  ) {
                    if (47 === (n = e.charCodeAt(c))) {
                      if (!s) {
                        o = c + 1;
                        break;
                      }
                      continue;
                    }
                    (-1 === l && ((s = !1), (l = c + 1)),
                      46 === n
                        ? -1 === a
                          ? (a = c)
                          : 1 !== u && (u = 1)
                        : -1 !== a && (u = -1));
                  }
                  return (
                    -1 === a ||
                    -1 === l ||
                    0 === u ||
                    (1 === u && a === l - 1 && a === o + 1)
                      ? -1 !== l &&
                        (0 === o && i
                          ? (r.base = r.name = e.slice(1, l))
                          : (r.base = r.name = e.slice(o, l)))
                      : (0 === o && i
                          ? ((r.name = e.slice(1, a)), (r.base = e.slice(1, l)))
                          : ((r.name = e.slice(o, a)),
                            (r.base = e.slice(o, l))),
                        (r.ext = e.slice(a, l))),
                    o > 0 ? (r.dir = e.slice(0, o - 1)) : i && (r.dir = "/"),
                    r
                  );
                },
                sep: "/",
                delimiter: ":",
                win32: null,
                posix: null,
              };
              ((t.posix = t), (e.exports = t));
            },
          },
          r = {};
        function __nccwpck_require__(e) {
          var n = r[e];
          if (void 0 !== n) return n.exports;
          var i = (r[e] = { exports: {} }),
            a = !0;
          try {
            (t[e](i, i.exports, __nccwpck_require__), (a = !1));
          } finally {
            a && delete r[e];
          }
          return i.exports;
        }
        __nccwpck_require__.ab = "//";
        var n = __nccwpck_require__(114);
        e.exports = n;
      })();
    },
  },
  function (e) {
    (e.O(0, [46, 681, 882, 34, 249, 806, 774, 888, 179], function () {
      return e((e.s = 8193));
    }),
      (_N_E = e.O()));
  },
]);
