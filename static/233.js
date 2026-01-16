(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [233, 972],
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
      var u = n(55817),
        a = {
          nodeType: u.BLOCKS.DOCUMENT,
          data: {},
          content: [
            {
              nodeType: u.BLOCKS.PARAGRAPH,
              data: {},
              content: [{ nodeType: "text", value: "", marks: [], data: {} }],
            },
          ],
        };
      r.default = a;
    },
    31834: function (e, r, n) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.isText = r.isBlock = r.isInline = void 0));
      var u = n(55817),
        a = n(81173);
      function hasValue(e, r) {
        for (var n = 0, u = Object.keys(e); n < u.length; n++)
          if (r === e[u[n]]) return !0;
        return !1;
      }
      ((r.isInline = function (e) {
        return hasValue(a.INLINES, e.nodeType);
      }),
        (r.isBlock = function (e) {
          return hasValue(u.BLOCKS, e.nodeType);
        }),
        (r.isText = function (e) {
          return "text" === e.nodeType;
        }));
    },
    16843: function (e, r, n) {
      "use strict";
      var u =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, r, n, u) {
                void 0 === u && (u = n);
                var a = Object.getOwnPropertyDescriptor(r, n);
                ((!a ||
                  ("get" in a
                    ? !r.__esModule
                    : a.writable || a.configurable)) &&
                  (a = {
                    enumerable: !0,
                    get: function () {
                      return r[n];
                    },
                  }),
                  Object.defineProperty(e, u, a));
              }
            : function (e, r, n, u) {
                (void 0 === u && (u = n), (e[u] = r[n]));
              }),
        a =
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
                u(r, e, n);
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
                  u(r, e, n);
            return (a(r, e), r);
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
      var p = n(73428);
      (Object.defineProperty(r, "MARKS", {
        enumerable: !0,
        get: function () {
          return c(p).default;
        },
      }),
        l(n(43406), r),
        l(n(54076), r),
        l(n(44611), r));
      var E = n(62949);
      Object.defineProperty(r, "EMPTY_DOCUMENT", {
        enumerable: !0,
        get: function () {
          return c(E).default;
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
      var n, u;
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        ((u = n || (n = {})).BOLD = "bold"),
        (u.ITALIC = "italic"),
        (u.UNDERLINE = "underline"),
        (u.CODE = "code"),
        (u.SUPERSCRIPT = "superscript"),
        (u.SUBSCRIPT = "subscript"),
        (r.default = n));
    },
    44611: function (e, r) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 });
    },
    43406: function (e, r, n) {
      "use strict";
      var u,
        a =
          (this && this.__spreadArray) ||
          function (e, r, n) {
            if (n || 2 == arguments.length)
              for (var u, a = 0, l = r.length; a < l; a++)
                (!u && a in r) ||
                  (u || (u = Array.prototype.slice.call(r, 0, a)),
                  (u[a] = r[a]));
            return e.concat(u || Array.prototype.slice.call(r));
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
          (((u = {})[s.BLOCKS.OL_LIST] = [s.BLOCKS.LIST_ITEM]),
          (u[s.BLOCKS.UL_LIST] = [s.BLOCKS.LIST_ITEM]),
          (u[s.BLOCKS.LIST_ITEM] = r.LIST_ITEM_BLOCKS),
          (u[s.BLOCKS.QUOTE] = [s.BLOCKS.PARAGRAPH]),
          (u[s.BLOCKS.TABLE] = [s.BLOCKS.TABLE_ROW]),
          (u[s.BLOCKS.TABLE_ROW] = [
            s.BLOCKS.TABLE_CELL,
            s.BLOCKS.TABLE_HEADER_CELL,
          ]),
          (u[s.BLOCKS.TABLE_CELL] = [s.BLOCKS.PARAGRAPH]),
          (u[s.BLOCKS.TABLE_HEADER_CELL] = [s.BLOCKS.PARAGRAPH]),
          u)),
        (r.HEADINGS = [
          s.BLOCKS.HEADING_1,
          s.BLOCKS.HEADING_2,
          s.BLOCKS.HEADING_3,
          s.BLOCKS.HEADING_4,
          s.BLOCKS.HEADING_5,
          s.BLOCKS.HEADING_6,
        ]),
        (r.TEXT_CONTAINERS = a([s.BLOCKS.PARAGRAPH], r.HEADINGS, !0)),
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
    72404: function (e, r) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "createAsyncLocalStorage", {
          enumerable: !0,
          get: function () {
            return createAsyncLocalStorage;
          },
        }));
      let n = Error(
        "Invariant: AsyncLocalStorage accessed in runtime where it is not available",
      );
      let FakeAsyncLocalStorage = class FakeAsyncLocalStorage {
        disable() {
          throw n;
        }
        getStore() {}
        run() {
          throw n;
        }
        exit() {
          throw n;
        }
        enterWith() {
          throw n;
        }
      };
      let u = globalThis.AsyncLocalStorage;
      function createAsyncLocalStorage() {
        return u ? new u() : new FakeAsyncLocalStorage();
      }
      ("function" == typeof r.default ||
        ("object" == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, "__esModule", { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    97091: function (e, r, n) {
      "use strict";
      function clientHookInServerComponentError(e) {}
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "clientHookInServerComponentError", {
          enumerable: !0,
          get: function () {
            return clientHookInServerComponentError;
          },
        }),
        n(83166),
        n(52983),
        ("function" == typeof r.default ||
          ("object" == typeof r.default && null !== r.default)) &&
          void 0 === r.default.__esModule &&
          (Object.defineProperty(r.default, "__esModule", { value: !0 }),
          Object.assign(r.default, r),
          (e.exports = r.default)));
    },
    56298: function (e, r, n) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (function (e, r) {
          for (var n in r)
            Object.defineProperty(e, n, { enumerable: !0, get: r[n] });
        })(r, {
          ReadonlyURLSearchParams: function () {
            return ReadonlyURLSearchParams;
          },
          useSearchParams: function () {
            return useSearchParams;
          },
          usePathname: function () {
            return usePathname;
          },
          ServerInsertedHTMLContext: function () {
            return d.ServerInsertedHTMLContext;
          },
          useServerInsertedHTML: function () {
            return d.useServerInsertedHTML;
          },
          useRouter: function () {
            return useRouter;
          },
          useParams: function () {
            return useParams;
          },
          useSelectedLayoutSegments: function () {
            return useSelectedLayoutSegments;
          },
          useSelectedLayoutSegment: function () {
            return useSelectedLayoutSegment;
          },
          redirect: function () {
            return f.redirect;
          },
          permanentRedirect: function () {
            return f.permanentRedirect;
          },
          RedirectType: function () {
            return f.RedirectType;
          },
          notFound: function () {
            return p.notFound;
          },
        }));
      let u = n(52983),
        a = n(76608),
        l = n(92053),
        s = n(97091),
        c = n(46520),
        d = n(85304),
        f = n(20982),
        p = n(19125),
        E = Symbol("internal for urlsearchparams readonly");
      function readonlyURLSearchParamsError() {
        return Error("ReadonlyURLSearchParams cannot be modified");
      }
      let ReadonlyURLSearchParams = class ReadonlyURLSearchParams {
        [Symbol.iterator]() {
          return this[E][Symbol.iterator]();
        }
        append() {
          throw readonlyURLSearchParamsError();
        }
        delete() {
          throw readonlyURLSearchParamsError();
        }
        set() {
          throw readonlyURLSearchParamsError();
        }
        sort() {
          throw readonlyURLSearchParamsError();
        }
        constructor(e) {
          ((this[E] = e),
            (this.entries = e.entries.bind(e)),
            (this.forEach = e.forEach.bind(e)),
            (this.get = e.get.bind(e)),
            (this.getAll = e.getAll.bind(e)),
            (this.has = e.has.bind(e)),
            (this.keys = e.keys.bind(e)),
            (this.values = e.values.bind(e)),
            (this.toString = e.toString.bind(e)),
            (this.size = e.size));
        }
      };
      function useSearchParams() {
        (0, s.clientHookInServerComponentError)("useSearchParams");
        let e = (0, u.useContext)(l.SearchParamsContext),
          r = (0, u.useMemo)(
            () => (e ? new ReadonlyURLSearchParams(e) : null),
            [e],
          );
        return r;
      }
      function usePathname() {
        return (
          (0, s.clientHookInServerComponentError)("usePathname"),
          (0, u.useContext)(l.PathnameContext)
        );
      }
      function useRouter() {
        (0, s.clientHookInServerComponentError)("useRouter");
        let e = (0, u.useContext)(a.AppRouterContext);
        if (null === e)
          throw Error("invariant expected app router to be mounted");
        return e;
      }
      function useParams() {
        (0, s.clientHookInServerComponentError)("useParams");
        let e = (0, u.useContext)(a.GlobalLayoutRouterContext),
          r = (0, u.useContext)(l.PathParamsContext);
        return (0, u.useMemo)(
          () =>
            (null == e ? void 0 : e.tree)
              ? (function getSelectedParams(e, r) {
                  void 0 === r && (r = {});
                  let n = e[1];
                  for (let e of Object.values(n)) {
                    let n = e[0],
                      u = Array.isArray(n),
                      a = u ? n[1] : n;
                    if (!a || a.startsWith("__PAGE__")) continue;
                    let l = u && ("c" === n[2] || "oc" === n[2]);
                    (l ? (r[n[0]] = n[1].split("/")) : u && (r[n[0]] = n[1]),
                      (r = getSelectedParams(e, r)));
                  }
                  return r;
                })(e.tree)
              : r,
          [null == e ? void 0 : e.tree, r],
        );
      }
      function useSelectedLayoutSegments(e) {
        (void 0 === e && (e = "children"),
          (0, s.clientHookInServerComponentError)("useSelectedLayoutSegments"));
        let { tree: r } = (0, u.useContext)(a.LayoutRouterContext);
        return (function getSelectedLayoutSegmentPath(e, r, n, u) {
          let a;
          if ((void 0 === n && (n = !0), void 0 === u && (u = []), n))
            a = e[1][r];
          else {
            var l;
            let r = e[1];
            a = null != (l = r.children) ? l : Object.values(r)[0];
          }
          if (!a) return u;
          let s = a[0],
            d = (0, c.getSegmentValue)(s);
          return !d || d.startsWith("__PAGE__")
            ? u
            : (u.push(d), getSelectedLayoutSegmentPath(a, r, !1, u));
        })(r, e);
      }
      function useSelectedLayoutSegment(e) {
        (void 0 === e && (e = "children"),
          (0, s.clientHookInServerComponentError)("useSelectedLayoutSegment"));
        let r = useSelectedLayoutSegments(e);
        return 0 === r.length ? null : r[0];
      }
      ("function" == typeof r.default ||
        ("object" == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, "__esModule", { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    19125: function (e, r) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (function (e, r) {
          for (var n in r)
            Object.defineProperty(e, n, { enumerable: !0, get: r[n] });
        })(r, {
          notFound: function () {
            return notFound;
          },
          isNotFoundError: function () {
            return isNotFoundError;
          },
        }));
      let n = "NEXT_NOT_FOUND";
      function notFound() {
        let e = Error(n);
        throw ((e.digest = n), e);
      }
      function isNotFoundError(e) {
        return (null == e ? void 0 : e.digest) === n;
      }
      ("function" == typeof r.default ||
        ("object" == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, "__esModule", { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    20982: function (e, r, n) {
      "use strict";
      var u, a;
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (function (e, r) {
          for (var n in r)
            Object.defineProperty(e, n, { enumerable: !0, get: r[n] });
        })(r, {
          RedirectType: function () {
            return u;
          },
          getRedirectError: function () {
            return getRedirectError;
          },
          redirect: function () {
            return redirect;
          },
          permanentRedirect: function () {
            return permanentRedirect;
          },
          isRedirectError: function () {
            return isRedirectError;
          },
          getURLFromRedirectError: function () {
            return getURLFromRedirectError;
          },
          getRedirectTypeFromError: function () {
            return getRedirectTypeFromError;
          },
        }));
      let l = n(76501),
        s = "NEXT_REDIRECT";
      function getRedirectError(e, r, n) {
        void 0 === n && (n = !1);
        let u = Error(s);
        u.digest = s + ";" + r + ";" + e + ";" + n;
        let a = l.requestAsyncStorage.getStore();
        return (a && (u.mutableCookies = a.mutableCookies), u);
      }
      function redirect(e, r) {
        throw (void 0 === r && (r = "replace"), getRedirectError(e, r, !1));
      }
      function permanentRedirect(e, r) {
        throw (void 0 === r && (r = "replace"), getRedirectError(e, r, !0));
      }
      function isRedirectError(e) {
        if ("string" != typeof (null == e ? void 0 : e.digest)) return !1;
        let [r, n, u, a] = e.digest.split(";", 4);
        return (
          r === s &&
          ("replace" === n || "push" === n) &&
          "string" == typeof u &&
          ("true" === a || "false" === a)
        );
      }
      function getURLFromRedirectError(e) {
        return isRedirectError(e) ? e.digest.split(";", 3)[2] : null;
      }
      function getRedirectTypeFromError(e) {
        if (!isRedirectError(e)) throw Error("Not a redirect error");
        return e.digest.split(";", 3)[1];
      }
      (((a = u || (u = {})).push = "push"),
        (a.replace = "replace"),
        ("function" == typeof r.default ||
          ("object" == typeof r.default && null !== r.default)) &&
          void 0 === r.default.__esModule &&
          (Object.defineProperty(r.default, "__esModule", { value: !0 }),
          Object.assign(r.default, r),
          (e.exports = r.default)));
    },
    76501: function (e, r, n) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "requestAsyncStorage", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }));
      let u = n(72404),
        a = (0, u.createAsyncLocalStorage)();
      ("function" == typeof r.default ||
        ("object" == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, "__esModule", { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    46520: function (e, r) {
      "use strict";
      function getSegmentValue(e) {
        return Array.isArray(e) ? e[1] : e;
      }
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "getSegmentValue", {
          enumerable: !0,
          get: function () {
            return getSegmentValue;
          },
        }),
        ("function" == typeof r.default ||
          ("object" == typeof r.default && null !== r.default)) &&
          void 0 === r.default.__esModule &&
          (Object.defineProperty(r.default, "__esModule", { value: !0 }),
          Object.assign(r.default, r),
          (e.exports = r.default)));
    },
    85304: function (e, r, n) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (function (e, r) {
          for (var n in r)
            Object.defineProperty(e, n, { enumerable: !0, get: r[n] });
        })(r, {
          ServerInsertedHTMLContext: function () {
            return l;
          },
          useServerInsertedHTML: function () {
            return useServerInsertedHTML;
          },
        }));
      let u = n(44925),
        a = u._(n(52983)),
        l = a.default.createContext(null);
      function useServerInsertedHTML(e) {
        let r = (0, a.useContext)(l);
        r && r(e);
      }
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
                  var n, u = "", a = 0, l = -1, s = 0, c = 0;
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
                        u.length < 2 ||
                        2 !== a ||
                        46 !== u.charCodeAt(u.length - 1) ||
                        46 !== u.charCodeAt(u.length - 2)
                      ) {
                        if (u.length > 2) {
                          var d = u.lastIndexOf("/");
                          if (d !== u.length - 1) {
                            (-1 === d
                              ? ((u = ""), (a = 0))
                              : (a =
                                  (u = u.slice(0, d)).length -
                                  1 -
                                  u.lastIndexOf("/")),
                              (l = c),
                              (s = 0));
                            continue;
                          }
                        } else if (2 === u.length || 1 === u.length) {
                          ((u = ""), (a = 0), (l = c), (s = 0));
                          continue;
                        }
                      }
                      r && (u.length > 0 ? (u += "/..") : (u = ".."), (a = 2));
                    } else
                      (u.length > 0
                        ? (u += "/" + e.slice(l + 1, c))
                        : (u = e.slice(l + 1, c)),
                        (a = c - l - 1));
                    ((l = c), (s = 0));
                  } else 46 === n && -1 !== s ? ++s : (s = -1);
                }
                return u;
              }
              var r = {
                resolve: function () {
                  for (
                    var e, r, n = "", u = !1, a = arguments.length - 1;
                    a >= -1 && !u;
                    a--
                  )
                    (a >= 0
                      ? (r = arguments[a])
                      : (void 0 === e && (e = ""), (r = e)),
                      assertPath(r),
                      0 !== r.length &&
                        ((n = r + "/" + n), (u = 47 === r.charCodeAt(0))));
                  return ((n = normalizeStringPosix(n, !u)), u)
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
                    var u = arguments[n];
                    (assertPath(u),
                      u.length > 0 &&
                        (void 0 === e ? (e = u) : (e += "/" + u)));
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
                  for (var u = 1; u < e.length && 47 === e.charCodeAt(u); ++u);
                  for (
                    var a = e.length, l = a - u, s = 1;
                    s < n.length && 47 === n.charCodeAt(s);
                    ++s
                  );
                  for (
                    var c = n.length - s, d = l < c ? l : c, f = -1, p = 0;
                    p <= d;
                    ++p
                  ) {
                    if (p === d) {
                      if (c > d) {
                        if (47 === n.charCodeAt(s + p))
                          return n.slice(s + p + 1);
                        if (0 === p) return n.slice(s + p);
                      } else
                        l > d &&
                          (47 === e.charCodeAt(u + p)
                            ? (f = p)
                            : 0 === p && (f = 0));
                      break;
                    }
                    var E = e.charCodeAt(u + p);
                    if (E !== n.charCodeAt(s + p)) break;
                    47 === E && (f = p);
                  }
                  var S = "";
                  for (p = u + f + 1; p <= a; ++p)
                    (p === a || 47 === e.charCodeAt(p)) &&
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
                      u = -1,
                      a = !0,
                      l = e.length - 1;
                    l >= 1;
                    --l
                  )
                    if (47 === (r = e.charCodeAt(l))) {
                      if (!a) {
                        u = l;
                        break;
                      }
                    } else a = !1;
                  return -1 === u
                    ? n
                      ? "/"
                      : "."
                    : n && 1 === u
                      ? "//"
                      : e.slice(0, u);
                },
                basename: function (e, r) {
                  if (void 0 !== r && "string" != typeof r)
                    throw TypeError('"ext" argument must be a string');
                  assertPath(e);
                  var n,
                    u = 0,
                    a = -1,
                    l = !0;
                  if (void 0 !== r && r.length > 0 && r.length <= e.length) {
                    if (r.length === e.length && r === e) return "";
                    var s = r.length - 1,
                      c = -1;
                    for (n = e.length - 1; n >= 0; --n) {
                      var d = e.charCodeAt(n);
                      if (47 === d) {
                        if (!l) {
                          u = n + 1;
                          break;
                        }
                      } else
                        (-1 === c && ((l = !1), (c = n + 1)),
                          s >= 0 &&
                            (d === r.charCodeAt(s)
                              ? -1 == --s && (a = n)
                              : ((s = -1), (a = c))));
                    }
                    return (
                      u === a ? (a = c) : -1 === a && (a = e.length),
                      e.slice(u, a)
                    );
                  }
                  for (n = e.length - 1; n >= 0; --n)
                    if (47 === e.charCodeAt(n)) {
                      if (!l) {
                        u = n + 1;
                        break;
                      }
                    } else -1 === a && ((l = !1), (a = n + 1));
                  return -1 === a ? "" : e.slice(u, a);
                },
                extname: function (e) {
                  assertPath(e);
                  for (
                    var r = -1, n = 0, u = -1, a = !0, l = 0, s = e.length - 1;
                    s >= 0;
                    --s
                  ) {
                    var c = e.charCodeAt(s);
                    if (47 === c) {
                      if (!a) {
                        n = s + 1;
                        break;
                      }
                      continue;
                    }
                    (-1 === u && ((a = !1), (u = s + 1)),
                      46 === c
                        ? -1 === r
                          ? (r = s)
                          : 1 !== l && (l = 1)
                        : -1 !== r && (l = -1));
                  }
                  return -1 === r ||
                    -1 === u ||
                    0 === l ||
                    (1 === l && r === u - 1 && r === n + 1)
                    ? ""
                    : e.slice(r, u);
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
                  var u = e.charCodeAt(0),
                    a = 47 === u;
                  a ? ((n.root = "/"), (r = 1)) : (r = 0);
                  for (
                    var l = -1, s = 0, c = -1, d = !0, f = e.length - 1, p = 0;
                    f >= r;
                    --f
                  ) {
                    if (47 === (u = e.charCodeAt(f))) {
                      if (!d) {
                        s = f + 1;
                        break;
                      }
                      continue;
                    }
                    (-1 === c && ((d = !1), (c = f + 1)),
                      46 === u
                        ? -1 === l
                          ? (l = f)
                          : 1 !== p && (p = 1)
                        : -1 !== l && (p = -1));
                  }
                  return (
                    -1 === l ||
                    -1 === c ||
                    0 === p ||
                    (1 === p && l === c - 1 && l === s + 1)
                      ? -1 !== c &&
                        (0 === s && a
                          ? (n.base = n.name = e.slice(1, c))
                          : (n.base = n.name = e.slice(s, c)))
                      : (0 === s && a
                          ? ((n.name = e.slice(1, l)), (n.base = e.slice(1, c)))
                          : ((n.name = e.slice(s, l)),
                            (n.base = e.slice(s, c))),
                        (n.ext = e.slice(l, c))),
                    s > 0 ? (n.dir = e.slice(0, s - 1)) : a && (n.dir = "/"),
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
          var u = n[e];
          if (void 0 !== u) return u.exports;
          var a = (n[e] = { exports: {} }),
            l = !0;
          try {
            (r[e](a, a.exports, __nccwpck_require__), (l = !1));
          } finally {
            l && delete n[e];
          }
          return a.exports;
        }
        __nccwpck_require__.ab = "//";
        var u = __nccwpck_require__(114);
        e.exports = u;
      })();
    },
    96133: function (e, r, n) {
      e.exports = n(56298);
    },
    30721: function (e, r, n) {
      "use strict";
      n.d(r, {
        v: function () {
          return H;
        },
      });
      var u,
        a,
        l,
        s,
        c = n(52983),
        d = n(59438),
        f = n(23285),
        p = n(20140),
        E = n(14940),
        S = n(31083),
        v = n(85682),
        m = n(14305),
        L = n(170),
        _ =
          (((u = _ || {})[(u.First = 0)] = "First"),
          (u[(u.Previous = 1)] = "Previous"),
          (u[(u.Next = 2)] = "Next"),
          (u[(u.Last = 3)] = "Last"),
          (u[(u.Specific = 4)] = "Specific"),
          (u[(u.Nothing = 5)] = "Nothing"),
          u),
        h = n(54376),
        g = n(93373),
        y = n(80213),
        I = n(38795),
        C = n(25874);
      function i(e) {
        var r;
        if (e.type) return e.type;
        let n = null != (r = e.as) ? r : "button";
        if ("string" == typeof n && "button" === n.toLowerCase())
          return "button";
      }
      var b = n(26917),
        R = n(7556);
      function t(e) {
        return [e.screenX, e.screenY];
      }
      let A =
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
      function o(e) {
        var r, n;
        let u = null != (r = e.innerText) ? r : "",
          a = e.cloneNode(!0);
        if (!(a instanceof HTMLElement)) return u;
        let l = !1;
        for (let e of a.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
          (e.remove(), (l = !0));
        let s = l ? (null != (n = a.innerText) ? n : "") : u;
        return (A.test(s) && (s = s.replace(A, "")), s);
      }
      var P =
          (((a = P || {})[(a.Open = 0)] = "Open"),
          (a[(a.Closed = 1)] = "Closed"),
          a),
        T =
          (((l = T || {})[(l.Pointer = 0)] = "Pointer"),
          (l[(l.Other = 1)] = "Other"),
          l),
        D =
          (((s = D || {})[(s.OpenMenu = 0)] = "OpenMenu"),
          (s[(s.CloseMenu = 1)] = "CloseMenu"),
          (s[(s.GoToItem = 2)] = "GoToItem"),
          (s[(s.Search = 3)] = "Search"),
          (s[(s.ClearSearch = 4)] = "ClearSearch"),
          (s[(s.RegisterItem = 5)] = "RegisterItem"),
          (s[(s.UnregisterItem = 6)] = "UnregisterItem"),
          s);
      function w(e, r = (e) => e) {
        let n = null !== e.activeItemIndex ? e.items[e.activeItemIndex] : null,
          u = (0, g.z2)(
            r(e.items.slice()),
            (e) => e.dataRef.current.domRef.current,
          ),
          a = n ? u.indexOf(n) : null;
        return (-1 === a && (a = null), { items: u, activeItemIndex: a });
      }
      let B = {
          1: (e) =>
            1 === e.menuState
              ? e
              : { ...e, activeItemIndex: null, menuState: 1 },
          0: (e) =>
            0 === e.menuState ? e : { ...e, __demoMode: !1, menuState: 0 },
          2: (e, r) => {
            var n;
            let u = w(e),
              a = (function (e, r) {
                let n = r.resolveItems();
                if (n.length <= 0) return null;
                let u = r.resolveActiveIndex(),
                  a = null != u ? u : -1,
                  l = (() => {
                    switch (e.focus) {
                      case 0:
                        return n.findIndex((e) => !r.resolveDisabled(e));
                      case 1: {
                        let e = n
                          .slice()
                          .reverse()
                          .findIndex(
                            (e, n, u) =>
                              (-1 === a || !(u.length - n - 1 >= a)) &&
                              !r.resolveDisabled(e),
                          );
                        return -1 === e ? e : n.length - 1 - e;
                      }
                      case 2:
                        return n.findIndex(
                          (e, n) => !(n <= a) && !r.resolveDisabled(e),
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
                return -1 === l ? u : l;
              })(r, {
                resolveItems: () => u.items,
                resolveActiveIndex: () => u.activeItemIndex,
                resolveId: (e) => e.id,
                resolveDisabled: (e) => e.dataRef.current.disabled,
              });
            return {
              ...e,
              ...u,
              searchQuery: "",
              activeItemIndex: a,
              activationTrigger: null != (n = r.trigger) ? n : 1,
            };
          },
          3: (e, r) => {
            let n = "" !== e.searchQuery ? 0 : 1,
              u = e.searchQuery + r.value.toLowerCase(),
              a = (
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
                    : r.startsWith(u)) && !e.dataRef.current.disabled
                );
              }),
              l = a ? e.items.indexOf(a) : -1;
            return -1 === l || l === e.activeItemIndex
              ? { ...e, searchQuery: u }
              : {
                  ...e,
                  searchQuery: u,
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
        M = (0, c.createContext)(null);
      function O(e) {
        let r = (0, c.useContext)(M);
        if (null === r) {
          let r = Error(`<${e} /> is missing a parent <Menu /> component.`);
          throw (Error.captureStackTrace && Error.captureStackTrace(r, O), r);
        }
        return r;
      }
      function ye(e, r) {
        return (0, d.E)(r.type, B, e, r);
      }
      M.displayName = "MenuContext";
      let N = c.Fragment,
        K = f.AN.RenderStrategy | f.AN.Static,
        x = c.Fragment,
        H = Object.assign(
          (0, f.yV)(function (e, r) {
            let { __demoMode: n = !1, ...u } = e,
              a = (0, c.useReducer)(ye, {
                __demoMode: n,
                menuState: n ? 0 : 1,
                buttonRef: (0, c.createRef)(),
                itemsRef: (0, c.createRef)(),
                items: [],
                searchQuery: "",
                activeItemIndex: null,
                activationTrigger: 1,
              }),
              [{ menuState: l, itemsRef: s, buttonRef: p }, E] = a,
              S = (0, v.T)(r);
            (0, y.O)(
              [p, s],
              (e, r) => {
                var n;
                (E({ type: 1 }),
                  (0, g.sP)(r, g.tJ.Loose) ||
                    (e.preventDefault(), null == (n = p.current) || n.focus()));
              },
              0 === l,
            );
            let m = (0, R.z)(() => {
                E({ type: 1 });
              }),
              L = (0, c.useMemo)(() => ({ open: 0 === l, close: m }), [l, m]);
            return c.createElement(
              M.Provider,
              { value: a },
              c.createElement(
                C.up,
                { value: (0, d.E)(l, { 0: C.ZM.Open, 1: C.ZM.Closed }) },
                (0, f.sY)({
                  ourProps: { ref: S },
                  theirProps: u,
                  slot: L,
                  defaultTag: N,
                  name: "Menu",
                }),
              ),
            );
          }),
          {
            Button: (0, f.yV)(function (e, r) {
              var n;
              let u = (0, m.M)(),
                { id: a = `headlessui-menu-button-${u}`, ...l } = e,
                [s, d] = O("Menu.Button"),
                p = (0, v.T)(s.buttonRef, r),
                g = (0, E.G)(),
                y = (0, R.z)((e) => {
                  switch (e.key) {
                    case L.R.Space:
                    case L.R.Enter:
                    case L.R.ArrowDown:
                      (e.preventDefault(),
                        e.stopPropagation(),
                        d({ type: 0 }),
                        g.nextFrame(() => d({ type: 2, focus: _.First })));
                      break;
                    case L.R.ArrowUp:
                      (e.preventDefault(),
                        e.stopPropagation(),
                        d({ type: 0 }),
                        g.nextFrame(() => d({ type: 2, focus: _.Last })));
                  }
                }),
                I = (0, R.z)((e) => {
                  e.key === L.R.Space && e.preventDefault();
                }),
                C = (0, R.z)((r) => {
                  if ((0, h.P)(r.currentTarget)) return r.preventDefault();
                  e.disabled ||
                    (0 === s.menuState
                      ? (d({ type: 1 }),
                        g.nextFrame(() => {
                          var e;
                          return null == (e = s.buttonRef.current)
                            ? void 0
                            : e.focus({ preventScroll: !0 });
                        }))
                      : (r.preventDefault(), d({ type: 0 })));
                }),
                b = (0, c.useMemo)(() => ({ open: 0 === s.menuState }), [s]),
                A = {
                  ref: p,
                  id: a,
                  type: (function (e, r) {
                    let [n, u] = (0, c.useState)(() => i(e));
                    return (
                      (0, S.e)(() => {
                        u(i(e));
                      }, [e.type, e.as]),
                      (0, S.e)(() => {
                        n ||
                          (r.current &&
                            r.current instanceof HTMLButtonElement &&
                            !r.current.hasAttribute("type") &&
                            u("button"));
                      }, [n, r]),
                      n
                    );
                  })(e, s.buttonRef),
                  "aria-haspopup": "menu",
                  "aria-controls":
                    null == (n = s.itemsRef.current) ? void 0 : n.id,
                  "aria-expanded": 0 === s.menuState,
                  onKeyDown: y,
                  onKeyUp: I,
                  onClick: C,
                };
              return (0, f.sY)({
                ourProps: A,
                theirProps: l,
                slot: b,
                defaultTag: "button",
                name: "Menu.Button",
              });
            }),
            Items: (0, f.yV)(function (e, r) {
              var n, u;
              let a = (0, m.M)(),
                { id: l = `headlessui-menu-items-${a}`, ...s } = e,
                [d, h] = O("Menu.Items"),
                y = (0, v.T)(d.itemsRef, r),
                A = (0, b.i)(d.itemsRef),
                P = (0, E.G)(),
                T = (0, C.oJ)(),
                D =
                  null !== T
                    ? (T & C.ZM.Open) === C.ZM.Open
                    : 0 === d.menuState;
              ((0, c.useEffect)(() => {
                let e = d.itemsRef.current;
                e &&
                  0 === d.menuState &&
                  e !== (null == A ? void 0 : A.activeElement) &&
                  e.focus({ preventScroll: !0 });
              }, [d.menuState, d.itemsRef, A]),
                (function ({
                  container: e,
                  accept: r,
                  walk: n,
                  enabled: u = !0,
                }) {
                  let a = (0, c.useRef)(r),
                    l = (0, c.useRef)(n);
                  ((0, c.useEffect)(() => {
                    ((a.current = r), (l.current = n));
                  }, [r, n]),
                    (0, S.e)(() => {
                      if (!e || !u) return;
                      let r = (0, I.r)(e);
                      if (!r) return;
                      let n = a.current,
                        s = l.current,
                        c = Object.assign((e) => n(e), { acceptNode: n }),
                        d = r.createTreeWalker(
                          e,
                          NodeFilter.SHOW_ELEMENT,
                          c,
                          !1,
                        );
                      for (; d.nextNode(); ) s(d.currentNode);
                    }, [e, u, a, l]));
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
              let B = (0, R.z)((e) => {
                  var r, n;
                  switch ((P.dispose(), e.key)) {
                    case L.R.Space:
                      if ("" !== d.searchQuery)
                        return (
                          e.preventDefault(),
                          e.stopPropagation(),
                          h({ type: 3, value: e.key })
                        );
                    case L.R.Enter:
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
                      (0, g.wI)(d.buttonRef.current);
                      break;
                    case L.R.ArrowDown:
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        h({ type: 2, focus: _.Next })
                      );
                    case L.R.ArrowUp:
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        h({ type: 2, focus: _.Previous })
                      );
                    case L.R.Home:
                    case L.R.PageUp:
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        h({ type: 2, focus: _.First })
                      );
                    case L.R.End:
                    case L.R.PageDown:
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        h({ type: 2, focus: _.Last })
                      );
                    case L.R.Escape:
                      (e.preventDefault(),
                        e.stopPropagation(),
                        h({ type: 1 }),
                        (0, p.k)().nextFrame(() => {
                          var e;
                          return null == (e = d.buttonRef.current)
                            ? void 0
                            : e.focus({ preventScroll: !0 });
                        }));
                      break;
                    case L.R.Tab:
                      (e.preventDefault(),
                        e.stopPropagation(),
                        h({ type: 1 }),
                        (0, p.k)().nextFrame(() => {
                          (0, g.EO)(
                            d.buttonRef.current,
                            e.shiftKey ? g.TO.Previous : g.TO.Next,
                          );
                        }));
                      break;
                    default:
                      1 === e.key.length &&
                        (h({ type: 3, value: e.key }),
                        P.setTimeout(() => h({ type: 4 }), 350));
                  }
                }),
                M = (0, R.z)((e) => {
                  e.key === L.R.Space && e.preventDefault();
                }),
                N = (0, c.useMemo)(() => ({ open: 0 === d.menuState }), [d]),
                x = {
                  "aria-activedescendant":
                    null === d.activeItemIndex ||
                    null == (n = d.items[d.activeItemIndex])
                      ? void 0
                      : n.id,
                  "aria-labelledby":
                    null == (u = d.buttonRef.current) ? void 0 : u.id,
                  id: l,
                  onKeyDown: B,
                  onKeyUp: M,
                  role: "menu",
                  tabIndex: 0,
                  ref: y,
                };
              return (0, f.sY)({
                ourProps: x,
                theirProps: s,
                slot: N,
                defaultTag: "div",
                features: K,
                visible: D,
                name: "Menu.Items",
              });
            }),
            Item: (0, f.yV)(function (e, r) {
              let n,
                u,
                a,
                l = (0, m.M)(),
                {
                  id: s = `headlessui-menu-item-${l}`,
                  disabled: d = !1,
                  ...E
                } = e,
                [L, h] = O("Menu.Item"),
                y =
                  null !== L.activeItemIndex &&
                  L.items[L.activeItemIndex].id === s,
                I = (0, c.useRef)(null),
                C = (0, v.T)(r, I);
              (0, S.e)(() => {
                if (
                  L.__demoMode ||
                  0 !== L.menuState ||
                  !y ||
                  0 === L.activationTrigger
                )
                  return;
                let e = (0, p.k)();
                return (
                  e.requestAnimationFrame(() => {
                    var e, r;
                    null ==
                      (r =
                        null == (e = I.current) ? void 0 : e.scrollIntoView) ||
                      r.call(e, { block: "nearest" });
                  }),
                  e.dispose
                );
              }, [
                L.__demoMode,
                I,
                y,
                L.menuState,
                L.activationTrigger,
                L.activeItemIndex,
              ]);
              let b =
                  ((n = (0, c.useRef)("")),
                  (u = (0, c.useRef)("")),
                  (0, R.z)(() => {
                    let e = I.current;
                    if (!e) return "";
                    let r = e.innerText;
                    if (n.current === r) return u.current;
                    let a = (function (e) {
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
                    return ((n.current = r), (u.current = a), a);
                  })),
                A = (0, c.useRef)({
                  disabled: d,
                  domRef: I,
                  get textValue() {
                    return b();
                  },
                });
              ((0, S.e)(() => {
                A.current.disabled = d;
              }, [A, d]),
                (0, S.e)(
                  () => (
                    h({ type: 5, id: s, dataRef: A }),
                    () => h({ type: 6, id: s })
                  ),
                  [A, s],
                ));
              let P = (0, R.z)(() => {
                  h({ type: 1 });
                }),
                T = (0, R.z)((e) => {
                  if (d) return e.preventDefault();
                  (h({ type: 1 }), (0, g.wI)(L.buttonRef.current));
                }),
                D = (0, R.z)(() => {
                  if (d) return h({ type: 2, focus: _.Nothing });
                  h({ type: 2, focus: _.Specific, id: s });
                }),
                B =
                  ((a = (0, c.useRef)([-1, -1])),
                  {
                    wasMoved(e) {
                      let r = t(e);
                      return (
                        (a.current[0] !== r[0] || a.current[1] !== r[1]) &&
                        ((a.current = r), !0)
                      );
                    },
                    update(e) {
                      a.current = t(e);
                    },
                  }),
                M = (0, R.z)((e) => B.update(e)),
                N = (0, R.z)((e) => {
                  B.wasMoved(e) &&
                    (d ||
                      y ||
                      h({ type: 2, focus: _.Specific, id: s, trigger: 0 }));
                }),
                K = (0, R.z)((e) => {
                  B.wasMoved(e) &&
                    (d || (y && h({ type: 2, focus: _.Nothing })));
                }),
                H = (0, c.useMemo)(
                  () => ({ active: y, disabled: d, close: P }),
                  [y, d, P],
                );
              return (0, f.sY)({
                ourProps: {
                  id: s,
                  ref: C,
                  role: "menuitem",
                  tabIndex: !0 === d ? void 0 : -1,
                  "aria-disabled": !0 === d || void 0,
                  disabled: void 0,
                  onClick: T,
                  onFocus: D,
                  onPointerEnter: M,
                  onMouseEnter: M,
                  onPointerMove: N,
                  onMouseMove: N,
                  onPointerLeave: K,
                  onMouseLeave: K,
                },
                theirProps: E,
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
