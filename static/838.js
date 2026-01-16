(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [838],
  {
    15491: function (e, t, r) {
      "use strict";
      var n,
        E,
        o = r(52983),
        u = o && "object" == typeof o && "default" in o ? o.default : o,
        __assign = function () {
          return (__assign =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var E in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, E) && (e[E] = t[E]);
              return e;
            }).apply(this, arguments);
        },
        a =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
              ? window
              : void 0 !== r.g
                ? r.g
                : "undefined" != typeof self
                  ? self
                  : {};
      function unwrapExports(e) {
        return e &&
          e.__esModule &&
          Object.prototype.hasOwnProperty.call(e, "default")
          ? e.default
          : e;
      }
      function createCommonjsModule(e, t) {
        return (e((t = { exports: {} }), t.exports), t.exports);
      }
      var l = createCommonjsModule(function (e, t) {
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
      });
      (unwrapExports(l), l.BLOCKS);
      var i = createCommonjsModule(function (e, t) {
        var r;
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.INLINES = void 0),
          ((r = t.INLINES || (t.INLINES = {})).HYPERLINK = "hyperlink"),
          (r.ENTRY_HYPERLINK = "entry-hyperlink"),
          (r.ASSET_HYPERLINK = "asset-hyperlink"),
          (r.RESOURCE_HYPERLINK = "resource-hyperlink"),
          (r.EMBEDDED_ENTRY = "embedded-entry-inline"),
          (r.EMBEDDED_RESOURCE = "embedded-resource-inline"));
      });
      (unwrapExports(i), i.INLINES);
      var L = createCommonjsModule(function (e, t) {
        var r, n;
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          ((n = r || (r = {})).BOLD = "bold"),
          (n.ITALIC = "italic"),
          (n.UNDERLINE = "underline"),
          (n.CODE = "code"),
          (n.SUPERSCRIPT = "superscript"),
          (n.SUBSCRIPT = "subscript"),
          (t.default = r));
      });
      unwrapExports(L);
      var _ = createCommonjsModule(function (e, t) {
        var r,
          n =
            (a && a.__spreadArray) ||
            function (e, t, r) {
              if (r || 2 == arguments.length)
                for (var n, E = 0, o = t.length; E < o; E++)
                  (!n && E in t) ||
                    (n || (n = Array.prototype.slice.call(t, 0, E)),
                    (n[E] = t[E]));
              return e.concat(n || Array.prototype.slice.call(t));
            },
          E =
            (a && a.__importDefault) ||
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
        var o = E(L);
        ((t.TOP_LEVEL_BLOCKS = [
          l.BLOCKS.PARAGRAPH,
          l.BLOCKS.HEADING_1,
          l.BLOCKS.HEADING_2,
          l.BLOCKS.HEADING_3,
          l.BLOCKS.HEADING_4,
          l.BLOCKS.HEADING_5,
          l.BLOCKS.HEADING_6,
          l.BLOCKS.OL_LIST,
          l.BLOCKS.UL_LIST,
          l.BLOCKS.HR,
          l.BLOCKS.QUOTE,
          l.BLOCKS.EMBEDDED_ENTRY,
          l.BLOCKS.EMBEDDED_ASSET,
          l.BLOCKS.EMBEDDED_RESOURCE,
          l.BLOCKS.TABLE,
        ]),
          (t.LIST_ITEM_BLOCKS = [
            l.BLOCKS.PARAGRAPH,
            l.BLOCKS.HEADING_1,
            l.BLOCKS.HEADING_2,
            l.BLOCKS.HEADING_3,
            l.BLOCKS.HEADING_4,
            l.BLOCKS.HEADING_5,
            l.BLOCKS.HEADING_6,
            l.BLOCKS.OL_LIST,
            l.BLOCKS.UL_LIST,
            l.BLOCKS.HR,
            l.BLOCKS.QUOTE,
            l.BLOCKS.EMBEDDED_ENTRY,
            l.BLOCKS.EMBEDDED_ASSET,
            l.BLOCKS.EMBEDDED_RESOURCE,
          ]),
          (t.TABLE_BLOCKS = [
            l.BLOCKS.TABLE,
            l.BLOCKS.TABLE_ROW,
            l.BLOCKS.TABLE_CELL,
            l.BLOCKS.TABLE_HEADER_CELL,
          ]),
          (t.VOID_BLOCKS = [
            l.BLOCKS.HR,
            l.BLOCKS.EMBEDDED_ENTRY,
            l.BLOCKS.EMBEDDED_ASSET,
            l.BLOCKS.EMBEDDED_RESOURCE,
          ]),
          (t.CONTAINERS =
            (((r = {})[l.BLOCKS.OL_LIST] = [l.BLOCKS.LIST_ITEM]),
            (r[l.BLOCKS.UL_LIST] = [l.BLOCKS.LIST_ITEM]),
            (r[l.BLOCKS.LIST_ITEM] = t.LIST_ITEM_BLOCKS),
            (r[l.BLOCKS.QUOTE] = [l.BLOCKS.PARAGRAPH]),
            (r[l.BLOCKS.TABLE] = [l.BLOCKS.TABLE_ROW]),
            (r[l.BLOCKS.TABLE_ROW] = [
              l.BLOCKS.TABLE_CELL,
              l.BLOCKS.TABLE_HEADER_CELL,
            ]),
            (r[l.BLOCKS.TABLE_CELL] = [l.BLOCKS.PARAGRAPH]),
            (r[l.BLOCKS.TABLE_HEADER_CELL] = [l.BLOCKS.PARAGRAPH]),
            r)),
          (t.HEADINGS = [
            l.BLOCKS.HEADING_1,
            l.BLOCKS.HEADING_2,
            l.BLOCKS.HEADING_3,
            l.BLOCKS.HEADING_4,
            l.BLOCKS.HEADING_5,
            l.BLOCKS.HEADING_6,
          ]),
          (t.TEXT_CONTAINERS = n([l.BLOCKS.PARAGRAPH], t.HEADINGS, !0)),
          (t.V1_NODE_TYPES = [
            l.BLOCKS.DOCUMENT,
            l.BLOCKS.PARAGRAPH,
            l.BLOCKS.HEADING_1,
            l.BLOCKS.HEADING_2,
            l.BLOCKS.HEADING_3,
            l.BLOCKS.HEADING_4,
            l.BLOCKS.HEADING_5,
            l.BLOCKS.HEADING_6,
            l.BLOCKS.OL_LIST,
            l.BLOCKS.UL_LIST,
            l.BLOCKS.LIST_ITEM,
            l.BLOCKS.HR,
            l.BLOCKS.QUOTE,
            l.BLOCKS.EMBEDDED_ENTRY,
            l.BLOCKS.EMBEDDED_ASSET,
            i.INLINES.HYPERLINK,
            i.INLINES.ENTRY_HYPERLINK,
            i.INLINES.ASSET_HYPERLINK,
            i.INLINES.EMBEDDED_ENTRY,
            "text",
          ]),
          (t.V1_MARKS = [
            o.default.BOLD,
            o.default.CODE,
            o.default.ITALIC,
            o.default.UNDERLINE,
          ]));
      });
      (unwrapExports(_),
        _.V1_MARKS,
        _.V1_NODE_TYPES,
        _.TEXT_CONTAINERS,
        _.HEADINGS,
        _.CONTAINERS,
        _.VOID_BLOCKS,
        _.TABLE_BLOCKS,
        _.LIST_ITEM_BLOCKS,
        _.TOP_LEVEL_BLOCKS);
      var c = createCommonjsModule(function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 });
      });
      unwrapExports(c);
      var S = createCommonjsModule(function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 });
      });
      unwrapExports(S);
      var O = createCommonjsModule(function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = {
          nodeType: l.BLOCKS.DOCUMENT,
          data: {},
          content: [
            {
              nodeType: l.BLOCKS.PARAGRAPH,
              data: {},
              content: [{ nodeType: "text", value: "", marks: [], data: {} }],
            },
          ],
        };
        t.default = r;
      });
      unwrapExports(O);
      var C = createCommonjsModule(function (e, t) {
        function hasValue(e, t) {
          for (var r = 0, n = Object.keys(e); r < n.length; r++)
            if (t === e[n[r]]) return !0;
          return !1;
        }
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isText = t.isBlock = t.isInline = void 0),
          (t.isInline = function (e) {
            return hasValue(i.INLINES, e.nodeType);
          }),
          (t.isBlock = function (e) {
            return hasValue(l.BLOCKS, e.nodeType);
          }),
          (t.isText = function (e) {
            return "text" === e.nodeType;
          }));
      });
      (unwrapExports(C), C.isText, C.isBlock, C.isInline);
      var s = createCommonjsModule(function (e, t) {
        var r =
            (a && a.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r);
                  var E = Object.getOwnPropertyDescriptor(t, r);
                  ((!E ||
                    ("get" in E
                      ? !t.__esModule
                      : E.writable || E.configurable)) &&
                    (E = {
                      enumerable: !0,
                      get: function () {
                        return t[r];
                      },
                    }),
                    Object.defineProperty(e, n, E));
                }
              : function (e, t, r, n) {
                  (void 0 === n && (n = r), (e[n] = t[r]));
                }),
          n =
            (a && a.__setModuleDefault) ||
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
          E =
            (a && a.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  r(t, e, n);
            },
          o =
            (a && a.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var E in e)
                  "default" !== E &&
                    Object.prototype.hasOwnProperty.call(e, E) &&
                    r(t, e, E);
              return (n(t, e), t);
            },
          u =
            (a && a.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.helpers =
            t.EMPTY_DOCUMENT =
            t.MARKS =
            t.INLINES =
            t.BLOCKS =
              void 0),
          Object.defineProperty(t, "BLOCKS", {
            enumerable: !0,
            get: function () {
              return l.BLOCKS;
            },
          }),
          Object.defineProperty(t, "INLINES", {
            enumerable: !0,
            get: function () {
              return i.INLINES;
            },
          }),
          Object.defineProperty(t, "MARKS", {
            enumerable: !0,
            get: function () {
              return u(L).default;
            },
          }),
          E(_, t),
          E(c, t),
          E(S, t),
          Object.defineProperty(t, "EMPTY_DOCUMENT", {
            enumerable: !0,
            get: function () {
              return u(O).default;
            },
          }));
        var s = o(C);
        t.helpers = s;
      });
      unwrapExports(s);
      var d = s.helpers;
      s.EMPTY_DOCUMENT;
      var B = s.MARKS,
        f = s.INLINES,
        A = s.BLOCKS,
        I =
          (((n = {})[A.DOCUMENT] = function (e, t) {
            return t;
          }),
          (n[A.PARAGRAPH] = function (e, t) {
            return u.createElement("p", null, t);
          }),
          (n[A.HEADING_1] = function (e, t) {
            return u.createElement("h1", null, t);
          }),
          (n[A.HEADING_2] = function (e, t) {
            return u.createElement("h2", null, t);
          }),
          (n[A.HEADING_3] = function (e, t) {
            return u.createElement("h3", null, t);
          }),
          (n[A.HEADING_4] = function (e, t) {
            return u.createElement("h4", null, t);
          }),
          (n[A.HEADING_5] = function (e, t) {
            return u.createElement("h5", null, t);
          }),
          (n[A.HEADING_6] = function (e, t) {
            return u.createElement("h6", null, t);
          }),
          (n[A.EMBEDDED_ENTRY] = function (e, t) {
            return u.createElement("div", null, t);
          }),
          (n[A.EMBEDDED_RESOURCE] = function (e, t) {
            return u.createElement("div", null, t);
          }),
          (n[A.UL_LIST] = function (e, t) {
            return u.createElement("ul", null, t);
          }),
          (n[A.OL_LIST] = function (e, t) {
            return u.createElement("ol", null, t);
          }),
          (n[A.LIST_ITEM] = function (e, t) {
            return u.createElement("li", null, t);
          }),
          (n[A.QUOTE] = function (e, t) {
            return u.createElement("blockquote", null, t);
          }),
          (n[A.HR] = function () {
            return u.createElement("hr", null);
          }),
          (n[A.TABLE] = function (e, t) {
            return u.createElement(
              "table",
              null,
              u.createElement("tbody", null, t),
            );
          }),
          (n[A.TABLE_ROW] = function (e, t) {
            return u.createElement("tr", null, t);
          }),
          (n[A.TABLE_HEADER_CELL] = function (e, t) {
            return u.createElement("th", null, t);
          }),
          (n[A.TABLE_CELL] = function (e, t) {
            return u.createElement("td", null, t);
          }),
          (n[f.ASSET_HYPERLINK] = function (e) {
            return defaultInline(f.ASSET_HYPERLINK, e);
          }),
          (n[f.ENTRY_HYPERLINK] = function (e) {
            return defaultInline(f.ENTRY_HYPERLINK, e);
          }),
          (n[f.RESOURCE_HYPERLINK] = function (e) {
            return defaultInlineResource(f.RESOURCE_HYPERLINK, e);
          }),
          (n[f.EMBEDDED_ENTRY] = function (e) {
            return defaultInline(f.EMBEDDED_ENTRY, e);
          }),
          (n[f.EMBEDDED_RESOURCE] = function (e, t) {
            return defaultInlineResource(f.EMBEDDED_RESOURCE, e);
          }),
          (n[f.HYPERLINK] = function (e, t) {
            return u.createElement("a", { href: e.data.uri }, t);
          }),
          n),
        D =
          (((E = {})[B.BOLD] = function (e) {
            return u.createElement("b", null, e);
          }),
          (E[B.ITALIC] = function (e) {
            return u.createElement("i", null, e);
          }),
          (E[B.UNDERLINE] = function (e) {
            return u.createElement("u", null, e);
          }),
          (E[B.CODE] = function (e) {
            return u.createElement("code", null, e);
          }),
          (E[B.SUPERSCRIPT] = function (e) {
            return u.createElement("sup", null, e);
          }),
          (E[B.SUBSCRIPT] = function (e) {
            return u.createElement("sub", null, e);
          }),
          E);
      function defaultInline(e, t) {
        return u.createElement(
          "span",
          { key: t.data.target.sys.id },
          "type: ",
          t.nodeType,
          " id: ",
          t.data.target.sys.id,
        );
      }
      function defaultInlineResource(e, t) {
        return u.createElement(
          "span",
          { key: t.data.target.sys.urn },
          "type: ",
          t.nodeType,
          " urn: ",
          t.data.target.sys.urn,
        );
      }
      t.h = function (e, t) {
        return (void 0 === t && (t = {}), e)
          ? (function nodeToReactComponent(e, t) {
              var r = t.renderNode,
                n = t.renderMark,
                E = t.renderText,
                a = t.preserveWhitespace;
              if (d.isText(e)) {
                var l = E ? E(e.value) : e.value;
                if (a) {
                  var i = (l = l.replace(/ {2,}/g, function (e) {
                      return "&nbsp;".repeat(e.length);
                    })).split("\n"),
                    L = [];
                  (i.forEach(function (e, t) {
                    (L.push(e),
                      t !== i.length - 1 &&
                        L.push(u.createElement("br", null)));
                  }),
                    (l = L));
                }
                return e.marks.reduce(function (e, t) {
                  return n[t.type] ? n[t.type](e) : e;
                }, l);
              }
              var _ = e.content.map(function (e, r) {
                var n;
                return (
                  (n = nodeToReactComponent(e, t)),
                  o.isValidElement(n) && null === n.key
                    ? o.cloneElement(n, { key: r })
                    : n
                );
              });
              return e.nodeType && r[e.nodeType]
                ? r[e.nodeType](e, _)
                : u.createElement(u.Fragment, null, _);
            })(e, {
              renderNode: __assign(__assign({}, I), t.renderNode),
              renderMark: __assign(__assign({}, D), t.renderMark),
              renderText: t.renderText,
              preserveWhitespace: t.preserveWhitespace,
            })
          : null;
      };
    },
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
        E = {
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
      t.default = E;
    },
    31834: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isText = t.isBlock = t.isInline = void 0));
      var n = r(55817),
        E = r(81173);
      function hasValue(e, t) {
        for (var r = 0, n = Object.keys(e); r < n.length; r++)
          if (t === e[n[r]]) return !0;
        return !1;
      }
      ((t.isInline = function (e) {
        return hasValue(E.INLINES, e.nodeType);
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
                var E = Object.getOwnPropertyDescriptor(t, r);
                ((!E ||
                  ("get" in E
                    ? !t.__esModule
                    : E.writable || E.configurable)) &&
                  (E = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  }),
                  Object.defineProperty(e, n, E));
              }
            : function (e, t, r, n) {
                (void 0 === n && (n = r), (e[n] = t[r]));
              }),
        E =
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
        o =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e)
              "default" === r ||
                Object.prototype.hasOwnProperty.call(t, r) ||
                n(t, e, r);
          },
        u =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.prototype.hasOwnProperty.call(e, r) &&
                  n(t, e, r);
            return (E(t, e), t);
          },
        a =
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
      var l = r(55817);
      Object.defineProperty(t, "BLOCKS", {
        enumerable: !0,
        get: function () {
          return l.BLOCKS;
        },
      });
      var i = r(81173);
      Object.defineProperty(t, "INLINES", {
        enumerable: !0,
        get: function () {
          return i.INLINES;
        },
      });
      var L = r(73428);
      (Object.defineProperty(t, "MARKS", {
        enumerable: !0,
        get: function () {
          return a(L).default;
        },
      }),
        o(r(43406), t),
        o(r(54076), t),
        o(r(44611), t));
      var _ = r(62949);
      Object.defineProperty(t, "EMPTY_DOCUMENT", {
        enumerable: !0,
        get: function () {
          return a(_).default;
        },
      });
      var c = u(r(31834));
      t.helpers = c;
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
        E =
          (this && this.__spreadArray) ||
          function (e, t, r) {
            if (r || 2 == arguments.length)
              for (var n, E = 0, o = t.length; E < o; E++)
                (!n && E in t) ||
                  (n || (n = Array.prototype.slice.call(t, 0, E)),
                  (n[E] = t[E]));
            return e.concat(n || Array.prototype.slice.call(t));
          },
        o =
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
      var u = r(55817),
        a = r(81173),
        l = o(r(73428));
      ((t.TOP_LEVEL_BLOCKS = [
        u.BLOCKS.PARAGRAPH,
        u.BLOCKS.HEADING_1,
        u.BLOCKS.HEADING_2,
        u.BLOCKS.HEADING_3,
        u.BLOCKS.HEADING_4,
        u.BLOCKS.HEADING_5,
        u.BLOCKS.HEADING_6,
        u.BLOCKS.OL_LIST,
        u.BLOCKS.UL_LIST,
        u.BLOCKS.HR,
        u.BLOCKS.QUOTE,
        u.BLOCKS.EMBEDDED_ENTRY,
        u.BLOCKS.EMBEDDED_ASSET,
        u.BLOCKS.EMBEDDED_RESOURCE,
        u.BLOCKS.TABLE,
      ]),
        (t.LIST_ITEM_BLOCKS = [
          u.BLOCKS.PARAGRAPH,
          u.BLOCKS.HEADING_1,
          u.BLOCKS.HEADING_2,
          u.BLOCKS.HEADING_3,
          u.BLOCKS.HEADING_4,
          u.BLOCKS.HEADING_5,
          u.BLOCKS.HEADING_6,
          u.BLOCKS.OL_LIST,
          u.BLOCKS.UL_LIST,
          u.BLOCKS.HR,
          u.BLOCKS.QUOTE,
          u.BLOCKS.EMBEDDED_ENTRY,
          u.BLOCKS.EMBEDDED_ASSET,
          u.BLOCKS.EMBEDDED_RESOURCE,
        ]),
        (t.TABLE_BLOCKS = [
          u.BLOCKS.TABLE,
          u.BLOCKS.TABLE_ROW,
          u.BLOCKS.TABLE_CELL,
          u.BLOCKS.TABLE_HEADER_CELL,
        ]),
        (t.VOID_BLOCKS = [
          u.BLOCKS.HR,
          u.BLOCKS.EMBEDDED_ENTRY,
          u.BLOCKS.EMBEDDED_ASSET,
          u.BLOCKS.EMBEDDED_RESOURCE,
        ]),
        (t.CONTAINERS =
          (((n = {})[u.BLOCKS.OL_LIST] = [u.BLOCKS.LIST_ITEM]),
          (n[u.BLOCKS.UL_LIST] = [u.BLOCKS.LIST_ITEM]),
          (n[u.BLOCKS.LIST_ITEM] = t.LIST_ITEM_BLOCKS),
          (n[u.BLOCKS.QUOTE] = [u.BLOCKS.PARAGRAPH]),
          (n[u.BLOCKS.TABLE] = [u.BLOCKS.TABLE_ROW]),
          (n[u.BLOCKS.TABLE_ROW] = [
            u.BLOCKS.TABLE_CELL,
            u.BLOCKS.TABLE_HEADER_CELL,
          ]),
          (n[u.BLOCKS.TABLE_CELL] = [u.BLOCKS.PARAGRAPH]),
          (n[u.BLOCKS.TABLE_HEADER_CELL] = [u.BLOCKS.PARAGRAPH]),
          n)),
        (t.HEADINGS = [
          u.BLOCKS.HEADING_1,
          u.BLOCKS.HEADING_2,
          u.BLOCKS.HEADING_3,
          u.BLOCKS.HEADING_4,
          u.BLOCKS.HEADING_5,
          u.BLOCKS.HEADING_6,
        ]),
        (t.TEXT_CONTAINERS = E([u.BLOCKS.PARAGRAPH], t.HEADINGS, !0)),
        (t.V1_NODE_TYPES = [
          u.BLOCKS.DOCUMENT,
          u.BLOCKS.PARAGRAPH,
          u.BLOCKS.HEADING_1,
          u.BLOCKS.HEADING_2,
          u.BLOCKS.HEADING_3,
          u.BLOCKS.HEADING_4,
          u.BLOCKS.HEADING_5,
          u.BLOCKS.HEADING_6,
          u.BLOCKS.OL_LIST,
          u.BLOCKS.UL_LIST,
          u.BLOCKS.LIST_ITEM,
          u.BLOCKS.HR,
          u.BLOCKS.QUOTE,
          u.BLOCKS.EMBEDDED_ENTRY,
          u.BLOCKS.EMBEDDED_ASSET,
          a.INLINES.HYPERLINK,
          a.INLINES.ENTRY_HYPERLINK,
          a.INLINES.ASSET_HYPERLINK,
          a.INLINES.EMBEDDED_ENTRY,
          "text",
        ]),
        (t.V1_MARKS = [
          l.default.BOLD,
          l.default.CODE,
          l.default.ITALIC,
          l.default.UNDERLINE,
        ]));
    },
    54076: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    47025: function (e) {
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
                  var r, n = "", E = 0, o = -1, u = 0, a = 0;
                  a <= e.length;
                  ++a
                ) {
                  if (a < e.length) r = e.charCodeAt(a);
                  else if (47 === r) break;
                  else r = 47;
                  if (47 === r) {
                    if (o === a - 1 || 1 === u);
                    else if (o !== a - 1 && 2 === u) {
                      if (
                        n.length < 2 ||
                        2 !== E ||
                        46 !== n.charCodeAt(n.length - 1) ||
                        46 !== n.charCodeAt(n.length - 2)
                      ) {
                        if (n.length > 2) {
                          var l = n.lastIndexOf("/");
                          if (l !== n.length - 1) {
                            (-1 === l
                              ? ((n = ""), (E = 0))
                              : (E =
                                  (n = n.slice(0, l)).length -
                                  1 -
                                  n.lastIndexOf("/")),
                              (o = a),
                              (u = 0));
                            continue;
                          }
                        } else if (2 === n.length || 1 === n.length) {
                          ((n = ""), (E = 0), (o = a), (u = 0));
                          continue;
                        }
                      }
                      t && (n.length > 0 ? (n += "/..") : (n = ".."), (E = 2));
                    } else
                      (n.length > 0
                        ? (n += "/" + e.slice(o + 1, a))
                        : (n = e.slice(o + 1, a)),
                        (E = a - o - 1));
                    ((o = a), (u = 0));
                  } else 46 === r && -1 !== u ? ++u : (u = -1);
                }
                return n;
              }
              var t = {
                resolve: function () {
                  for (
                    var e, t, r = "", n = !1, E = arguments.length - 1;
                    E >= -1 && !n;
                    E--
                  )
                    (E >= 0
                      ? (t = arguments[E])
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
                    var E = e.length, o = E - n, u = 1;
                    u < r.length && 47 === r.charCodeAt(u);
                    ++u
                  );
                  for (
                    var a = r.length - u, l = o < a ? o : a, i = -1, L = 0;
                    L <= l;
                    ++L
                  ) {
                    if (L === l) {
                      if (a > l) {
                        if (47 === r.charCodeAt(u + L))
                          return r.slice(u + L + 1);
                        if (0 === L) return r.slice(u + L);
                      } else
                        o > l &&
                          (47 === e.charCodeAt(n + L)
                            ? (i = L)
                            : 0 === L && (i = 0));
                      break;
                    }
                    var _ = e.charCodeAt(n + L);
                    if (_ !== r.charCodeAt(u + L)) break;
                    47 === _ && (i = L);
                  }
                  var c = "";
                  for (L = n + i + 1; L <= E; ++L)
                    (L === E || 47 === e.charCodeAt(L)) &&
                      (0 === c.length ? (c += "..") : (c += "/.."));
                  return c.length > 0
                    ? c + r.slice(u + i)
                    : ((u += i), 47 === r.charCodeAt(u) && ++u, r.slice(u));
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
                      E = !0,
                      o = e.length - 1;
                    o >= 1;
                    --o
                  )
                    if (47 === (t = e.charCodeAt(o))) {
                      if (!E) {
                        n = o;
                        break;
                      }
                    } else E = !1;
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
                    E = -1,
                    o = !0;
                  if (void 0 !== t && t.length > 0 && t.length <= e.length) {
                    if (t.length === e.length && t === e) return "";
                    var u = t.length - 1,
                      a = -1;
                    for (r = e.length - 1; r >= 0; --r) {
                      var l = e.charCodeAt(r);
                      if (47 === l) {
                        if (!o) {
                          n = r + 1;
                          break;
                        }
                      } else
                        (-1 === a && ((o = !1), (a = r + 1)),
                          u >= 0 &&
                            (l === t.charCodeAt(u)
                              ? -1 == --u && (E = r)
                              : ((u = -1), (E = a))));
                    }
                    return (
                      n === E ? (E = a) : -1 === E && (E = e.length),
                      e.slice(n, E)
                    );
                  }
                  for (r = e.length - 1; r >= 0; --r)
                    if (47 === e.charCodeAt(r)) {
                      if (!o) {
                        n = r + 1;
                        break;
                      }
                    } else -1 === E && ((o = !1), (E = r + 1));
                  return -1 === E ? "" : e.slice(n, E);
                },
                extname: function (e) {
                  assertPath(e);
                  for (
                    var t = -1, r = 0, n = -1, E = !0, o = 0, u = e.length - 1;
                    u >= 0;
                    --u
                  ) {
                    var a = e.charCodeAt(u);
                    if (47 === a) {
                      if (!E) {
                        r = u + 1;
                        break;
                      }
                      continue;
                    }
                    (-1 === n && ((E = !1), (n = u + 1)),
                      46 === a
                        ? -1 === t
                          ? (t = u)
                          : 1 !== o && (o = 1)
                        : -1 !== t && (o = -1));
                  }
                  return -1 === t ||
                    -1 === n ||
                    0 === o ||
                    (1 === o && t === n - 1 && t === r + 1)
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
                    E = 47 === n;
                  E ? ((r.root = "/"), (t = 1)) : (t = 0);
                  for (
                    var o = -1, u = 0, a = -1, l = !0, i = e.length - 1, L = 0;
                    i >= t;
                    --i
                  ) {
                    if (47 === (n = e.charCodeAt(i))) {
                      if (!l) {
                        u = i + 1;
                        break;
                      }
                      continue;
                    }
                    (-1 === a && ((l = !1), (a = i + 1)),
                      46 === n
                        ? -1 === o
                          ? (o = i)
                          : 1 !== L && (L = 1)
                        : -1 !== o && (L = -1));
                  }
                  return (
                    -1 === o ||
                    -1 === a ||
                    0 === L ||
                    (1 === L && o === a - 1 && o === u + 1)
                      ? -1 !== a &&
                        (0 === u && E
                          ? (r.base = r.name = e.slice(1, a))
                          : (r.base = r.name = e.slice(u, a)))
                      : (0 === u && E
                          ? ((r.name = e.slice(1, o)), (r.base = e.slice(1, a)))
                          : ((r.name = e.slice(u, o)),
                            (r.base = e.slice(u, a))),
                        (r.ext = e.slice(o, a))),
                    u > 0 ? (r.dir = e.slice(0, u - 1)) : E && (r.dir = "/"),
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
          var E = (r[e] = { exports: {} }),
            o = !0;
          try {
            (t[e](E, E.exports, __nccwpck_require__), (o = !1));
          } finally {
            o && delete r[e];
          }
          return E.exports;
        }
        __nccwpck_require__.ab = "//";
        var n = __nccwpck_require__(114);
        e.exports = n;
      })();
    },
  },
]);
