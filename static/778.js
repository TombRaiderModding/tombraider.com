(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [778],
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
        o =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e)
              "default" === r ||
                Object.prototype.hasOwnProperty.call(t, r) ||
                n(t, e, r);
          },
        s =
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
          return a(u).default;
        },
      }),
        o(r(43406), t),
        o(r(54076), t),
        o(r(44611), t));
      var p = r(62949);
      Object.defineProperty(t, "EMPTY_DOCUMENT", {
        enumerable: !0,
        get: function () {
          return a(p).default;
        },
      });
      var d = s(r(31834));
      t.helpers = d;
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
              for (var n, i = 0, o = t.length; i < o; i++)
                (!n && i in t) ||
                  (n || (n = Array.prototype.slice.call(t, 0, i)),
                  (n[i] = t[i]));
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
      var s = r(55817),
        a = r(81173),
        l = o(r(73428));
      ((t.TOP_LEVEL_BLOCKS = [
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
        (t.LIST_ITEM_BLOCKS = [
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
        (t.TABLE_BLOCKS = [
          s.BLOCKS.TABLE,
          s.BLOCKS.TABLE_ROW,
          s.BLOCKS.TABLE_CELL,
          s.BLOCKS.TABLE_HEADER_CELL,
        ]),
        (t.VOID_BLOCKS = [
          s.BLOCKS.HR,
          s.BLOCKS.EMBEDDED_ENTRY,
          s.BLOCKS.EMBEDDED_ASSET,
          s.BLOCKS.EMBEDDED_RESOURCE,
        ]),
        (t.CONTAINERS =
          (((n = {})[s.BLOCKS.OL_LIST] = [s.BLOCKS.LIST_ITEM]),
          (n[s.BLOCKS.UL_LIST] = [s.BLOCKS.LIST_ITEM]),
          (n[s.BLOCKS.LIST_ITEM] = t.LIST_ITEM_BLOCKS),
          (n[s.BLOCKS.QUOTE] = [s.BLOCKS.PARAGRAPH]),
          (n[s.BLOCKS.TABLE] = [s.BLOCKS.TABLE_ROW]),
          (n[s.BLOCKS.TABLE_ROW] = [
            s.BLOCKS.TABLE_CELL,
            s.BLOCKS.TABLE_HEADER_CELL,
          ]),
          (n[s.BLOCKS.TABLE_CELL] = [s.BLOCKS.PARAGRAPH]),
          (n[s.BLOCKS.TABLE_HEADER_CELL] = [s.BLOCKS.PARAGRAPH]),
          n)),
        (t.HEADINGS = [
          s.BLOCKS.HEADING_1,
          s.BLOCKS.HEADING_2,
          s.BLOCKS.HEADING_3,
          s.BLOCKS.HEADING_4,
          s.BLOCKS.HEADING_5,
          s.BLOCKS.HEADING_6,
        ]),
        (t.TEXT_CONTAINERS = i([s.BLOCKS.PARAGRAPH], t.HEADINGS, !0)),
        (t.V1_NODE_TYPES = [
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
    67392: function (e, t) {
      !(function (e) {
        "use strict";
        var t,
          r,
          n,
          i,
          o,
          s,
          a,
          l,
          c,
          u = "transform",
          p = u + "Origin",
          _setDoc = function (e) {
            var o = e.ownerDocument || e;
            for (
              !(u in e.style) &&
              ("msTransform" in e.style) &&
              (p = (u = "msTransform") + "Origin");
              o.parentNode && (o = o.parentNode);
            );
            if (((r = window), (a = new g()), o)) {
              ((t = o),
                (n = o.documentElement),
                (i = o.body),
                ((l = t.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "g",
                )).style.transform = "none"));
              var s = o.createElement("div"),
                d = o.createElement("div"),
                h = o && (o.body || o.firstElementChild);
              h &&
                h.appendChild &&
                (h.appendChild(s),
                s.appendChild(d),
                s.setAttribute(
                  "style",
                  "position:static;transform:translate3d(0,0,1px)",
                ),
                (c = d.offsetParent !== s),
                h.removeChild(s));
            }
            return o;
          },
          _forceNonZeroScale = function (e) {
            for (var t, r; e && e !== i; )
              ((r = e._gsap) && r.uncache && r.get(e, "x"),
                r &&
                  !r.scaleX &&
                  !r.scaleY &&
                  r.renderTransform &&
                  ((r.scaleX = r.scaleY = 1e-4),
                  r.renderTransform(1, r),
                  t ? t.push(r) : (t = [r])),
                (e = e.parentNode));
            return t;
          },
          d = [],
          h = [],
          _getDocScrollTop = function () {
            return (
              r.pageYOffset || t.scrollTop || n.scrollTop || i.scrollTop || 0
            );
          },
          _getDocScrollLeft = function () {
            return (
              r.pageXOffset || t.scrollLeft || n.scrollLeft || i.scrollLeft || 0
            );
          },
          _svgOwner = function (e) {
            return (
              e.ownerSVGElement ||
              ("svg" === (e.tagName + "").toLowerCase() ? e : null)
            );
          },
          _createSibling = function _createSibling(e, r) {
            if (e.parentNode && (t || _setDoc(e))) {
              var n = _svgOwner(e),
                i = n
                  ? n.getAttribute("xmlns") || "http://www.w3.org/2000/svg"
                  : "http://www.w3.org/1999/xhtml",
                a = n ? (r ? "rect" : "g") : "div",
                l = 2 !== r ? 0 : 100,
                c = 3 === r ? 100 : 0,
                u =
                  "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
                p = t.createElementNS
                  ? t.createElementNS(i.replace(/^https/, "http"), a)
                  : t.createElement(a);
              return (
                r &&
                  (n
                    ? (s || (s = _createSibling(e)),
                      p.setAttribute("width", 0.01),
                      p.setAttribute("height", 0.01),
                      p.setAttribute(
                        "transform",
                        "translate(" + l + "," + c + ")",
                      ),
                      s.appendChild(p))
                    : (o || ((o = _createSibling(e)).style.cssText = u),
                      (p.style.cssText =
                        u +
                        "width:0.1px;height:0.1px;top:" +
                        c +
                        "px;left:" +
                        l +
                        "px"),
                      o.appendChild(p))),
                p
              );
            }
            throw "Need document and parent.";
          },
          _consolidate = function (e) {
            for (var t = new g(), r = 0; r < e.numberOfItems; r++)
              t.multiply(e.getItem(r).matrix);
            return t;
          },
          _getCTM = function (e) {
            var t,
              r = e.getCTM();
            return (
              r ||
                ((t = e.style[u]),
                (e.style[u] = "none"),
                e.appendChild(l),
                (r = l.getCTM()),
                e.removeChild(l),
                t
                  ? (e.style[u] = t)
                  : e.style.removeProperty(
                      u.replace(/([A-Z])/g, "-$1").toLowerCase(),
                    )),
              r || a.clone()
            );
          },
          _placeSiblings = function (e, t) {
            var n,
              i,
              l,
              _,
              m,
              v,
              y = _svgOwner(e),
              S = e === y,
              x = y ? d : h,
              b = e.parentNode,
              w =
                b && !y && b.shadowRoot && b.shadowRoot.appendChild
                  ? b.shadowRoot
                  : b;
            if (e === r) return e;
            if (
              (x.length ||
                x.push(
                  _createSibling(e, 1),
                  _createSibling(e, 2),
                  _createSibling(e, 3),
                ),
              (n = y ? s : o),
              y)
            )
              (S
                ? ((_ = -(l = _getCTM(e)).e / l.a), (m = -l.f / l.d), (i = a))
                : e.getBBox
                  ? ((l = e.getBBox()),
                    (_ =
                      (i = (i = e.transform ? e.transform.baseVal : {})
                        .numberOfItems
                        ? i.numberOfItems > 1
                          ? _consolidate(i)
                          : i.getItem(0).matrix
                        : a).a *
                        l.x +
                      i.c * l.y),
                    (m = i.b * l.x + i.d * l.y))
                  : ((i = new g()), (_ = m = 0)),
                t && "g" === e.tagName.toLowerCase() && (_ = m = 0),
                (S ? y : b).appendChild(n),
                n.setAttribute(
                  "transform",
                  "matrix(" +
                    i.a +
                    "," +
                    i.b +
                    "," +
                    i.c +
                    "," +
                    i.d +
                    "," +
                    (i.e + _) +
                    "," +
                    (i.f + m) +
                    ")",
                ));
            else {
              if (((_ = m = 0), c))
                for (
                  i = e.offsetParent, l = e;
                  l && (l = l.parentNode) && l !== i && l.parentNode;
                )
                  (r.getComputedStyle(l)[u] + "").length > 4 &&
                    ((_ = l.offsetLeft), (m = l.offsetTop), (l = 0));
              if (
                "absolute" !== (v = r.getComputedStyle(e)).position &&
                "fixed" !== v.position
              )
                for (i = e.offsetParent; b && b !== i; )
                  ((_ += b.scrollLeft || 0),
                    (m += b.scrollTop || 0),
                    (b = b.parentNode));
              (((l = n.style).top = e.offsetTop - m + "px"),
                (l.left = e.offsetLeft - _ + "px"),
                (l[u] = v[u]),
                (l[p] = v[p]),
                (l.position = "fixed" === v.position ? "fixed" : "absolute"),
                w.appendChild(n));
            }
            return n;
          },
          _setMatrix = function (e, t, r, n, i, o, s) {
            return (
              (e.a = t),
              (e.b = r),
              (e.c = n),
              (e.d = i),
              (e.e = o),
              (e.f = s),
              e
            );
          },
          g = (function () {
            function Matrix2D(e, t, r, n, i, o) {
              (void 0 === e && (e = 1),
                void 0 === t && (t = 0),
                void 0 === r && (r = 0),
                void 0 === n && (n = 1),
                void 0 === i && (i = 0),
                void 0 === o && (o = 0),
                _setMatrix(this, e, t, r, n, i, o));
            }
            var e = Matrix2D.prototype;
            return (
              (e.inverse = function () {
                var e = this.a,
                  t = this.b,
                  r = this.c,
                  n = this.d,
                  i = this.e,
                  o = this.f,
                  s = e * n - t * r || 1e-10;
                return _setMatrix(
                  this,
                  n / s,
                  -t / s,
                  -r / s,
                  e / s,
                  (r * o - n * i) / s,
                  -(e * o - t * i) / s,
                );
              }),
              (e.multiply = function (e) {
                var t = this.a,
                  r = this.b,
                  n = this.c,
                  i = this.d,
                  o = this.e,
                  s = this.f,
                  a = e.a,
                  l = e.c,
                  c = e.b,
                  u = e.d,
                  p = e.e,
                  d = e.f;
                return _setMatrix(
                  this,
                  a * t + c * n,
                  a * r + c * i,
                  l * t + u * n,
                  l * r + u * i,
                  o + p * t + d * n,
                  s + p * r + d * i,
                );
              }),
              (e.clone = function () {
                return new Matrix2D(
                  this.a,
                  this.b,
                  this.c,
                  this.d,
                  this.e,
                  this.f,
                );
              }),
              (e.equals = function (e) {
                var t = this.a,
                  r = this.b,
                  n = this.c,
                  i = this.d,
                  o = this.e,
                  s = this.f;
                return (
                  t === e.a &&
                  r === e.b &&
                  n === e.c &&
                  i === e.d &&
                  o === e.e &&
                  s === e.f
                );
              }),
              (e.apply = function (e, t) {
                void 0 === t && (t = {});
                var r = e.x,
                  n = e.y,
                  i = this.a,
                  o = this.b,
                  s = this.c,
                  a = this.d,
                  l = this.e,
                  c = this.f;
                return (
                  (t.x = r * i + n * s + l || 0),
                  (t.y = r * o + n * a + c || 0),
                  t
                );
              }),
              Matrix2D
            );
          })();
        function getGlobalMatrix(e, n, i, o) {
          if (!e || !e.parentNode || (t || _setDoc(e)).documentElement === e)
            return new g();
          var s = _forceNonZeroScale(e),
            a = _svgOwner(e) ? d : h,
            l = _placeSiblings(e, i),
            c = a[0].getBoundingClientRect(),
            u = a[1].getBoundingClientRect(),
            p = a[2].getBoundingClientRect(),
            _ = l.parentNode,
            m =
              !o &&
              (function _isFixed(e) {
                return (
                  "fixed" === r.getComputedStyle(e).position ||
                  ((e = e.parentNode) && 1 === e.nodeType
                    ? _isFixed(e)
                    : void 0)
                );
              })(e),
            v = new g(
              (u.left - c.left) / 100,
              (u.top - c.top) / 100,
              (p.left - c.left) / 100,
              (p.top - c.top) / 100,
              c.left + (m ? 0 : _getDocScrollLeft()),
              c.top + (m ? 0 : _getDocScrollTop()),
            );
          if ((_.removeChild(l), s))
            for (c = s.length; c--; )
              (((u = s[c]).scaleX = u.scaleY = 0), u.renderTransform(1, u));
          return n ? v.inverse() : v;
        }
        /*!
         * Flip 3.13.0
         * https://gsap.com
         *
         * @license Copyright 2008-2025, GreenSock. All rights reserved.
         * Subject to the terms at https://gsap.com/standard-license
         * @author: Jack Doyle, jack@greensock.com
         */ var _,
          m,
          v,
          y,
          S,
          x,
          b,
          w,
          T = 1,
          _forEachBatch = function (e, t) {
            return e.actions.forEach(function (e) {
              return e.vars[t] && e.vars[t](e);
            });
          },
          C = {},
          E = 180 / Math.PI,
          P = Math.PI / 180,
          O = {},
          L = {},
          A = {},
          _listToArray = function (e) {
            return "string" == typeof e ? e.split(" ").join("").split(",") : e;
          },
          k = _listToArray(
            "onStart,onUpdate,onComplete,onReverseComplete,onInterrupt",
          ),
          M = _listToArray(
            "transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight",
          ),
          _getEl = function (e) {
            return _(e)[0] || console.warn("Element not found:", e);
          },
          _round = function (e) {
            return Math.round(1e4 * e) / 1e4 || 0;
          },
          _toggleClass = function (e, t, r) {
            return e.forEach(function (e) {
              return e.classList[r](t);
            });
          },
          B = {
            zIndex: 1,
            kill: 1,
            simple: 1,
            spin: 1,
            clearProps: 1,
            targets: 1,
            toggleClass: 1,
            onComplete: 1,
            onUpdate: 1,
            onInterrupt: 1,
            onStart: 1,
            delay: 1,
            repeat: 1,
            repeatDelay: 1,
            yoyo: 1,
            scale: 1,
            fade: 1,
            absolute: 1,
            props: 1,
            onEnter: 1,
            onLeave: 1,
            custom: 1,
            paused: 1,
            nested: 1,
            prune: 1,
            absoluteOnLeave: 1,
          },
          D = {
            zIndex: 1,
            simple: 1,
            clearProps: 1,
            scale: 1,
            absolute: 1,
            fitChild: 1,
            getVars: 1,
            props: 1,
          },
          _camelToDashed = function (e) {
            return e.replace(/([A-Z])/g, "-$1").toLowerCase();
          },
          _copy = function (e, t) {
            var r,
              n = {};
            for (r in e) t[r] || (n[r] = e[r]);
            return n;
          },
          N = {},
          _memoizeProps = function (e) {
            var t = (N[e] = _listToArray(e));
            return ((A[e] = t.concat(M)), t);
          },
          _getInverseGlobalMatrix = function (e) {
            var t = e._gsap || m.core.getCache(e);
            return t.gmCache === m.ticker.frame
              ? t.gMatrix
              : ((t.gmCache = m.ticker.frame),
                (t.gMatrix = getGlobalMatrix(e, !0, !1, !0)));
          },
          _getDOMDepth = function _getDOMDepth(e, t, r) {
            void 0 === r && (r = 0);
            for (
              var n = e.parentNode,
                i = 1e3 * Math.pow(10, r) * (t ? -1 : 1),
                o = t ? -(900 * i) : 0;
              e;
            )
              ((o += i), (e = e.previousSibling));
            return n ? o + _getDOMDepth(n, t, r + 1) : o;
          },
          _orderByDOMDepth = function (e, t, r) {
            return (
              e.forEach(function (e) {
                return (e.d = _getDOMDepth(r ? e.element : e.t, t));
              }),
              e.sort(function (e, t) {
                return e.d - t.d;
              }),
              e
            );
          },
          _recordInlineStyles = function (e, t) {
            for (
              var r,
                n,
                i = e.element.style,
                o = (e.css = e.css || []),
                s = t.length;
              s--;
            )
              ((n = i[(r = t[s])] || i.getPropertyValue(r)),
                o.push(n ? r : L[r] || (L[r] = _camelToDashed(r)), n));
            return i;
          },
          _applyInlineStyles = function (e) {
            var t = e.css,
              r = e.element.style,
              n = 0;
            for (e.cache.uncache = 1; n < t.length; n += 2)
              t[n + 1] ? (r[t[n]] = t[n + 1]) : r.removeProperty(t[n]);
            !t[t.indexOf("transform") + 1] &&
              r.translate &&
              (r.removeProperty("translate"),
              r.removeProperty("scale"),
              r.removeProperty("rotate"));
          },
          _setFinalStates = function (e, t) {
            (e.forEach(function (e) {
              return (e.a.cache.uncache = 1);
            }),
              t || e.finalStates.forEach(_applyInlineStyles));
          },
          R =
            "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(
              ",",
            ),
          _makeAbsolute = function (e, t, r) {
            var n,
              i,
              o,
              s = e.element,
              a = e.width,
              l = e.height,
              c = e.uncache,
              u = e.getProp,
              p = s.style,
              d = 4;
            if (("object" != typeof t && (t = e), v && 1 !== r))
              return (
                v._abs.push({ t: s, b: e, a: e, sd: 0 }),
                v._final.push(function () {
                  return ((e.cache.uncache = 1), _applyInlineStyles(e));
                }),
                s
              );
            for (
              i = "none" === u("display"),
                (!e.isVisible || i) &&
                  (i &&
                    (_recordInlineStyles(e, ["display"]).display = t.display),
                  (e.matrix = t.matrix),
                  (e.width = a = e.width || t.width),
                  (e.height = l = e.height || t.height)),
                _recordInlineStyles(e, R),
                o = window.getComputedStyle(s);
              d--;
            )
              p[R[d]] = o[R[d]];
            if (
              ((p.gridArea = "1 / 1 / 1 / 1"),
              (p.transition = "none"),
              (p.position = "absolute"),
              (p.width = a + "px"),
              (p.height = l + "px"),
              p.top || (p.top = "0px"),
              p.left || (p.left = "0px"),
              c)
            )
              n = new H(s);
            else if ((((n = _copy(e, O)).position = "absolute"), e.simple)) {
              var h = s.getBoundingClientRect();
              n.matrix = new g(
                1,
                0,
                0,
                1,
                h.left + _getDocScrollLeft(),
                h.top + _getDocScrollTop(),
              );
            } else n.matrix = getGlobalMatrix(s, !1, !1, !0);
            return (
              (n = _fit(n, e, !0)),
              (e.x = x(n.x, 0.01)),
              (e.y = x(n.y, 0.01)),
              s
            );
          },
          _filterComps = function (e, t) {
            return (
              !0 !== t &&
                ((t = _(t)),
                (e = e.filter(function (e) {
                  if (-1 !== t.indexOf((e.sd < 0 ? e.b : e.a).element))
                    return !0;
                  (e.t._gsap.renderTransform(1),
                    e.b.isVisible &&
                      ((e.t.style.width = e.b.width + "px"),
                      (e.t.style.height = e.b.height + "px")));
                }))),
              e
            );
          },
          _makeCompsAbsolute = function (e) {
            return _orderByDOMDepth(e, !0).forEach(function (e) {
              return (
                (e.a.isVisible || e.b.isVisible) &&
                _makeAbsolute(e.sd < 0 ? e.b : e.a, e.b, 1)
              );
            });
          },
          _parseElementState = function (e, t, r, n) {
            return e instanceof H
              ? e
              : e instanceof V
                ? (n && e.idLookup[_parseElementState(n).id]) ||
                  e.elementStates[0]
                : new H(
                    "string" == typeof e
                      ? _getEl(e) || console.warn(e + " not found")
                      : e,
                    t,
                    r,
                  );
          },
          _recordProps = function (e, t) {
            for (
              var r = m.getProperty(e.element, null, "native"),
                n = (e.props = {}),
                i = t.length;
              i--;
            )
              n[t[i]] = (r(t[i]) + "").trim();
            return (n.zIndex && (n.zIndex = parseFloat(n.zIndex) || 0), e);
          },
          _applyProps = function (e, t) {
            var r,
              n = e.style || e;
            for (r in t) n[r] = t[r];
          },
          _getID = function (e) {
            var t = e.getAttribute("data-flip-id");
            return (
              t || e.setAttribute("data-flip-id", (t = "auto-" + T++)),
              t
            );
          },
          _elementsFromElementStates = function (e) {
            return e.map(function (e) {
              return e.element;
            });
          },
          _handleCallback = function (e, t, r) {
            return (
              e &&
              t.length &&
              r.add(e(_elementsFromElementStates(t), r, new V(t, 0, !0)), 0)
            );
          },
          _fit = function (e, t, r, n, i, o) {
            var s,
              a,
              l,
              c,
              u,
              p,
              d,
              h = e.element,
              g = e.cache,
              v = e.parent,
              y = e.x,
              S = e.y,
              w = t.width,
              T = t.height,
              C = t.scaleX,
              O = t.scaleY,
              L = t.rotation,
              A = t.bounds,
              k = o && b && b(h, "transform,width,height"),
              M = e,
              B = t.matrix,
              D = B.e,
              N = B.f,
              R =
                e.bounds.width !== A.width ||
                e.bounds.height !== A.height ||
                e.scaleX !== C ||
                e.scaleY !== O ||
                e.rotation !== L,
              I = !R && e.simple && t.simple && !i;
            return (
              I || !v
                ? ((C = O = 1), (L = s = 0))
                : ((L = _round(
                    Math.atan2(
                      (p = (u = _getInverseGlobalMatrix(v))
                        .clone()
                        .multiply(
                          t.ctm ? t.matrix.clone().multiply(t.ctm) : t.matrix,
                        )).b,
                      p.a,
                    ) * E,
                  )),
                  (s = _round(Math.atan2(p.c, p.d) * E + L) % 360),
                  (C = Math.sqrt(Math.pow(p.a, 2) + Math.pow(p.b, 2))),
                  (O =
                    Math.sqrt(Math.pow(p.c, 2) + Math.pow(p.d, 2)) *
                    Math.cos(s * P)),
                  i &&
                    ((i = _(i)[0]),
                    (c = m.getProperty(i)),
                    (d =
                      i.getBBox &&
                      "function" == typeof i.getBBox &&
                      i.getBBox()),
                    (M = {
                      scaleX: c("scaleX"),
                      scaleY: c("scaleY"),
                      width: d
                        ? d.width
                        : Math.ceil(parseFloat(c("width", "px"))),
                      height: d ? d.height : parseFloat(c("height", "px")),
                    })),
                  (g.rotation = L + "deg"),
                  (g.skewX = s + "deg")),
              r
                ? ((C *= w !== M.width && M.width ? w / M.width : 1),
                  (O *= T !== M.height && M.height ? T / M.height : 1),
                  (g.scaleX = C),
                  (g.scaleY = O))
                : ((w = x((w * C) / M.scaleX, 0)),
                  (T = x((T * O) / M.scaleY, 0)),
                  (h.style.width = w + "px"),
                  (h.style.height = T + "px")),
              n && _applyProps(h, t.props),
              I || !v
                ? ((y += D - e.matrix.e), (S += N - e.matrix.f))
                : R || v !== t.parent
                  ? (g.renderTransform(1, g),
                    (p = getGlobalMatrix(i || h, !1, !1, !0)),
                    (a = u.apply({ x: p.e, y: p.f })),
                    (y += (l = u.apply({ x: D, y: N })).x - a.x),
                    (S += l.y - a.y))
                  : ((u.e = u.f = 0),
                    (y += (l = u.apply({
                      x: D - e.matrix.e,
                      y: N - e.matrix.f,
                    })).x),
                    (S += l.y)),
              (y = x(y, 0.02)),
              (S = x(S, 0.02)),
              !o || o instanceof H
                ? ((g.x = y + "px"), (g.y = S + "px"), g.renderTransform(1, g))
                : k && k.revert(),
              o &&
                ((o.x = y),
                (o.y = S),
                (o.rotation = L),
                (o.skewX = s),
                r
                  ? ((o.scaleX = C), (o.scaleY = O))
                  : ((o.width = w), (o.height = T))),
              o || g
            );
          },
          _parseState = function (e, t) {
            return e instanceof V ? e : new V(e, t);
          },
          _getChangingElState = function (e, t, r) {
            var n = e.idLookup[r],
              i = e.alt[r];
            return !i.isVisible ||
              ((t.getElementState(i.element) || i).isVisible && n.isVisible)
              ? n
              : i;
          },
          I = [],
          F = "width,height,overflowX,overflowY".split(","),
          _lockBodyScroll = function (e) {
            if (e !== w) {
              var t = S.style,
                r = S.clientWidth === window.outerWidth,
                n = S.clientHeight === window.outerHeight,
                i = 4;
              if (e && (r || n)) {
                for (; i--; ) I[i] = t[F[i]];
                (r &&
                  ((t.width = S.clientWidth + "px"), (t.overflowY = "hidden")),
                  n &&
                    ((t.height = S.clientHeight + "px"),
                    (t.overflowX = "hidden")),
                  (w = e));
              } else if (w) {
                for (; i--; )
                  I[i]
                    ? (t[F[i]] = I[i])
                    : t.removeProperty(_camelToDashed(F[i]));
                w = e;
              }
            }
          },
          _fromTo = function (e, t, r, n) {
            (e instanceof V && t instanceof V) ||
              console.warn("Not a valid state object.");
            var i,
              o,
              s,
              a,
              l,
              c,
              u,
              p,
              d,
              h,
              g,
              _,
              y,
              S,
              x,
              b = (r = r || {}),
              w = b.clearProps,
              T = b.onEnter,
              C = b.onLeave,
              E = b.absolute,
              P = b.absoluteOnLeave,
              O = b.custom,
              L = b.delay,
              R = b.paused,
              I = b.repeat,
              F = b.repeatDelay,
              K = b.yoyo,
              Y = b.toggleClass,
              z = b.nested,
              G = b.zIndex,
              X = b.scale,
              W = b.fade,
              j = b.stagger,
              U = b.spin,
              $ = b.prune,
              q = ("props" in r ? r : e).props,
              Z = _copy(r, B),
              Q = m.timeline({
                delay: L,
                paused: R,
                repeat: I,
                repeatDelay: F,
                yoyo: K,
                data: "isFlip",
              }),
              J = Z,
              ee = [],
              et = [],
              er = [],
              en = [],
              ei = !0 === U ? 1 : U || 0,
              eo =
                "function" == typeof U
                  ? U
                  : function () {
                      return ei;
                    },
              es = e.interrupted || t.interrupted,
              ea = Q[1 !== n ? "to" : "from"];
            for (s in t.idLookup)
              ((c = (_ = t.alt[s]
                ? _getChangingElState(t, e, s)
                : t.idLookup[s]).element),
                (g = e.idLookup[s]),
                e.alt[s] &&
                  c === g.element &&
                  (e.alt[s].isVisible || !_.isVisible) &&
                  (g = e.alt[s]),
                g
                  ? ((u = {
                      t: c,
                      b: g,
                      a: _,
                      sd: g.element === c ? 0 : _.isVisible ? 1 : -1,
                    }),
                    er.push(u),
                    u.sd &&
                      (u.sd < 0 && ((u.b = _), (u.a = g)),
                      es && _recordInlineStyles(u.b, q ? A[q] : M),
                      W &&
                        er.push(
                          (u.swap = {
                            t: g.element,
                            b: u.b,
                            a: u.a,
                            sd: -u.sd,
                            swap: u,
                          }),
                        )),
                    (c._flip = g.element._flip = v ? v.timeline : Q))
                  : _.isVisible &&
                    (er.push({
                      t: c,
                      b: _copy(_, { isVisible: 1 }),
                      a: _,
                      sd: 0,
                      entering: 1,
                    }),
                    (c._flip = v ? v.timeline : Q)));
            (q &&
              (N[q] || _memoizeProps(q)).forEach(function (e) {
                return (Z[e] = function (t) {
                  return er[t].a.props[e];
                });
              }),
              (er.finalStates = h = []),
              (y = function () {
                for (
                  _orderByDOMDepth(er), _lockBodyScroll(!0), l = 0;
                  l < er.length;
                  l++
                )
                  ((S = (u = er[l]).a),
                    (x = u.b),
                    !$ || S.isDifferent(x) || u.entering
                      ? ((c = u.t),
                        z &&
                          !(u.sd < 0) &&
                          l &&
                          (S.matrix = getGlobalMatrix(c, !1, !1, !0)),
                        x.isVisible && S.isVisible
                          ? (u.sd < 0
                              ? (_fit(
                                  (p = new H(c, q, e.simple)),
                                  S,
                                  X,
                                  0,
                                  0,
                                  p,
                                ),
                                (p.matrix = getGlobalMatrix(c, !1, !1, !0)),
                                (p.css = u.b.css),
                                (u.a = S = p),
                                W &&
                                  (c.style.opacity = es
                                    ? x.opacity
                                    : S.opacity),
                                j && en.push(c))
                              : u.sd > 0 &&
                                W &&
                                (c.style.opacity = es
                                  ? S.opacity - x.opacity
                                  : "0"),
                            _fit(S, x, X, q))
                          : x.isVisible !== S.isVisible &&
                            (x.isVisible
                              ? !S.isVisible &&
                                ((x.css = S.css),
                                et.push(x),
                                er.splice(l--, 1),
                                E && z && _fit(S, x, X, q))
                              : (S.isVisible && ee.push(S), er.splice(l--, 1))),
                        X ||
                          ((c.style.maxWidth =
                            Math.max(S.width, x.width) + "px"),
                          (c.style.maxHeight =
                            Math.max(S.height, x.height) + "px"),
                          (c.style.minWidth =
                            Math.min(S.width, x.width) + "px"),
                          (c.style.minHeight =
                            Math.min(S.height, x.height) + "px")),
                        z && Y && c.classList.add(Y))
                      : er.splice(l--, 1),
                    h.push(S));
                if (
                  (Y &&
                    ((t = h.map(function (e) {
                      return e.element;
                    })),
                    z &&
                      t.forEach(function (e) {
                        return e.classList.remove(Y);
                      })),
                  _lockBodyScroll(!1),
                  X
                    ? ((Z.scaleX = function (e) {
                        return er[e].a.scaleX;
                      }),
                      (Z.scaleY = function (e) {
                        return er[e].a.scaleY;
                      }))
                    : ((Z.width = function (e) {
                        return er[e].a.width + "px";
                      }),
                      (Z.height = function (e) {
                        return er[e].a.height + "px";
                      }),
                      (Z.autoRound = r.autoRound || !1)),
                  (Z.x = function (e) {
                    return er[e].a.x + "px";
                  }),
                  (Z.y = function (e) {
                    return er[e].a.y + "px";
                  }),
                  (Z.rotation = function (e) {
                    return er[e].a.rotation + (U ? 360 * eo(e, d[e], d) : 0);
                  }),
                  (Z.skewX = function (e) {
                    return er[e].a.skewX;
                  }),
                  (d = er.map(function (e) {
                    return e.t;
                  })),
                  (G || 0 === G) &&
                    ((Z.modifiers = {
                      zIndex: function () {
                        return G;
                      },
                    }),
                    (Z.zIndex = G),
                    (Z.immediateRender = !1 !== r.immediateRender)),
                  W &&
                    (Z.opacity = function (e) {
                      return er[e].sd < 0
                        ? 0
                        : er[e].sd > 0
                          ? er[e].a.opacity
                          : "+=0";
                    }),
                  en.length)
                ) {
                  j = m.utils.distribute(j);
                  var t,
                    n = d.slice(en.length);
                  Z.stagger = function (e, t) {
                    return j(
                      ~en.indexOf(t) ? d.indexOf(er[e].swap.t) : e,
                      t,
                      n,
                    );
                  };
                }
                if (
                  (k.forEach(function (e) {
                    return r[e] && Q.eventCallback(e, r[e], r[e + "Params"]);
                  }),
                  O && d.length)
                )
                  for (s in ((J = _copy(Z, B)),
                  "scale" in O &&
                    ((O.scaleX = O.scaleY = O.scale), delete O.scale),
                  O))
                    (((o = _copy(O[s], D))[s] = Z[s]),
                      !("duration" in o) &&
                        "duration" in Z &&
                        (o.duration = Z.duration),
                      (o.stagger = Z.stagger),
                      ea.call(Q, d, o, 0),
                      delete J[s]);
                ((d.length || et.length || ee.length) &&
                  (Y &&
                    Q.add(function () {
                      return _toggleClass(
                        t,
                        Y,
                        Q._zTime < 0 ? "remove" : "add",
                      );
                    }, 0) &&
                    !R &&
                    _toggleClass(t, Y, "add"),
                  d.length && ea.call(Q, d, J, 0)),
                  _handleCallback(T, ee, Q),
                  _handleCallback(C, et, Q));
                var i = v && v.timeline;
                (i &&
                  (i.add(Q, 0),
                  v._final.push(function () {
                    return _setFinalStates(er, !w);
                  })),
                  (a = Q.duration()),
                  Q.call(function () {
                    var e = Q.time() >= a;
                    (e && !i && _setFinalStates(er, !w),
                      Y && _toggleClass(t, Y, e ? "remove" : "add"));
                  }));
              }),
              P &&
                (E = er
                  .filter(function (e) {
                    return !e.sd && !e.a.isVisible && e.b.isVisible;
                  })
                  .map(function (e) {
                    return e.a.element;
                  })),
              v
                ? (E && (i = v._abs).push.apply(i, _filterComps(er, E)),
                  v._run.push(y))
                : (E && _makeCompsAbsolute(_filterComps(er, E)), y()));
            var el = v ? v.timeline : Q;
            return (
              (el.revert = function () {
                return _killFlip(el, 1, 1);
              }),
              el
            );
          },
          _interrupt = function _interrupt(e) {
            (e.vars.onInterrupt &&
              e.vars.onInterrupt.apply(e, e.vars.onInterruptParams || []),
              e.getChildren(!0, !1, !0).forEach(_interrupt));
          },
          _killFlip = function (e, t, r) {
            if (e && 1 > e.progress() && (!e.paused() || r))
              return (
                t && (_interrupt(e), t < 2 && e.progress(1), e.kill()),
                !0
              );
          },
          _createLookup = function (e) {
            for (
              var t,
                r = (e.idLookup = {}),
                n = (e.alt = {}),
                i = e.elementStates,
                o = i.length;
              o--;
            )
              r[(t = i[o]).id] ? (n[t.id] = t) : (r[t.id] = t);
          },
          V = (function () {
            function FlipState(e, t, r) {
              if (
                ((this.props = t && t.props),
                (this.simple = !!(t && t.simple)),
                r)
              )
                ((this.targets = _elementsFromElementStates(e)),
                  (this.elementStates = e),
                  _createLookup(this));
              else {
                this.targets = _(e);
                var n = t && (!1 === t.kill || (t.batch && !t.kill));
                (v && !n && v._kill.push(this), this.update(n || !!v));
              }
            }
            var e = FlipState.prototype;
            return (
              (e.update = function (e) {
                var t = this;
                return (
                  (this.elementStates = this.targets.map(function (e) {
                    return new H(e, t.props, t.simple);
                  })),
                  _createLookup(this),
                  this.interrupt(e),
                  this.recordInlineStyles(),
                  this
                );
              }),
              (e.clear = function () {
                return (
                  (this.targets.length = this.elementStates.length = 0),
                  _createLookup(this),
                  this
                );
              }),
              (e.fit = function (e, t, r) {
                for (
                  var n,
                    i,
                    o = _orderByDOMDepth(this.elementStates.slice(0), !1, !0),
                    s = (e || this).idLookup,
                    a = 0;
                  a < o.length;
                  a++
                )
                  ((n = o[a]),
                    r && (n.matrix = getGlobalMatrix(n.element, !1, !1, !0)),
                    (i = s[n.id]) && _fit(n, i, t, !0, 0, n),
                    (n.matrix = getGlobalMatrix(n.element, !1, !1, !0)));
                return this;
              }),
              (e.getProperty = function (e, t) {
                var r = this.getElementState(e) || O;
                return (t in r ? r : r.props || O)[t];
              }),
              (e.add = function (e) {
                for (
                  var t,
                    r,
                    n,
                    i = e.targets.length,
                    o = this.idLookup,
                    s = this.alt;
                  i--;
                )
                  (n = o[(r = e.elementStates[i]).id]) &&
                  (r.element === n.element ||
                    (s[r.id] && s[r.id].element === r.element))
                    ? ((t = this.elementStates.indexOf(
                        r.element === n.element ? n : s[r.id],
                      )),
                      this.targets.splice(t, 1, e.targets[i]),
                      this.elementStates.splice(t, 1, r))
                    : (this.targets.push(e.targets[i]),
                      this.elementStates.push(r));
                return (
                  e.interrupted && (this.interrupted = !0),
                  e.simple || (this.simple = !1),
                  _createLookup(this),
                  this
                );
              }),
              (e.compare = function (e) {
                var t,
                  r,
                  n,
                  i,
                  o,
                  s,
                  a,
                  l,
                  c = e.idLookup,
                  u = this.idLookup,
                  p = [],
                  d = [],
                  h = [],
                  g = [],
                  _ = [],
                  m = e.alt,
                  v = this.alt,
                  place = function (e, t, r) {
                    return (
                      (e.isVisible !== t.isVisible
                        ? e.isVisible
                          ? h
                          : g
                        : e.isVisible
                          ? d
                          : p
                      ).push(r) && _.push(r)
                    );
                  },
                  placeIfDoesNotExist = function (e, t, r) {
                    return 0 > _.indexOf(r) && place(e, t, r);
                  };
                for (n in c)
                  ((o = m[n]),
                    (s = v[n]),
                    (i = (t = o ? _getChangingElState(e, this, n) : c[n])
                      .element),
                    (r = u[n]),
                    s
                      ? ((l =
                          r.isVisible || (!s.isVisible && i === r.element)
                            ? r
                            : s),
                        (a =
                          !o ||
                          t.isVisible ||
                          o.isVisible ||
                          l.element !== o.element
                            ? t
                            : o).isVisible &&
                        l.isVisible &&
                        a.element !== l.element
                          ? ((a.isDifferent(l) ? d : p).push(
                              a.element,
                              l.element,
                            ),
                            _.push(a.element, l.element))
                          : place(a, l, a.element),
                        o && a.element === o.element && (o = c[n]),
                        placeIfDoesNotExist(
                          a.element !== r.element && o ? o : a,
                          r,
                          r.element,
                        ),
                        placeIfDoesNotExist(
                          o && o.element === s.element ? o : a,
                          s,
                          s.element,
                        ),
                        o &&
                          placeIfDoesNotExist(
                            o,
                            s.element === o.element ? s : r,
                            o.element,
                          ))
                      : (r
                          ? r.isDifferent(t)
                            ? place(t, r, i)
                            : p.push(i)
                          : h.push(i),
                        o && placeIfDoesNotExist(o, r, o.element)));
                for (n in u)
                  !c[n] && (g.push(u[n].element), v[n] && g.push(v[n].element));
                return { changed: d, unchanged: p, enter: h, leave: g };
              }),
              (e.recordInlineStyles = function () {
                for (
                  var e = A[this.props] || M, t = this.elementStates.length;
                  t--;
                )
                  _recordInlineStyles(this.elementStates[t], e);
              }),
              (e.interrupt = function (e) {
                var t = this,
                  r = [];
                (this.targets.forEach(function (n) {
                  var i = n._flip,
                    o = _killFlip(i, e ? 0 : 1);
                  (e &&
                    o &&
                    0 > r.indexOf(i) &&
                    i.add(function () {
                      return t.updateVisibility();
                    }),
                    o && r.push(i));
                }),
                  !e && r.length && this.updateVisibility(),
                  this.interrupted || (this.interrupted = !!r.length));
              }),
              (e.updateVisibility = function () {
                this.elementStates.forEach(function (e) {
                  var t = e.element.getBoundingClientRect();
                  ((e.isVisible = !!(t.width || t.height || t.top || t.left)),
                    (e.uncache = 1));
                });
              }),
              (e.getElementState = function (e) {
                return this.elementStates[this.targets.indexOf(_getEl(e))];
              }),
              (e.makeAbsolute = function () {
                return _orderByDOMDepth(
                  this.elementStates.slice(0),
                  !0,
                  !0,
                ).map(_makeAbsolute);
              }),
              FlipState
            );
          })(),
          H = (function () {
            function ElementState(e, t, r) {
              ((this.element = e), this.update(t, r));
            }
            var e = ElementState.prototype;
            return (
              (e.isDifferent = function (e) {
                var t = this.bounds,
                  r = e.bounds;
                return (
                  t.top !== r.top ||
                  t.left !== r.left ||
                  t.width !== r.width ||
                  t.height !== r.height ||
                  !this.matrix.equals(e.matrix) ||
                  this.opacity !== e.opacity ||
                  (this.props &&
                    e.props &&
                    JSON.stringify(this.props) !== JSON.stringify(e.props))
                );
              }),
              (e.update = function (e, t) {
                var r = this.element,
                  n = m.getProperty(r),
                  i = m.core.getCache(r),
                  o = r.getBoundingClientRect(),
                  s =
                    r.getBBox &&
                    "function" == typeof r.getBBox &&
                    "svg" !== r.nodeName.toLowerCase() &&
                    r.getBBox(),
                  a = t
                    ? new g(
                        1,
                        0,
                        0,
                        1,
                        o.left + _getDocScrollLeft(),
                        o.top + _getDocScrollTop(),
                      )
                    : getGlobalMatrix(r, !1, !1, !0);
                ((i.uncache = 1),
                  (this.getProp = n),
                  (this.element = r),
                  (this.id = _getID(r)),
                  (this.matrix = a),
                  (this.cache = i),
                  (this.bounds = o),
                  (this.isVisible = !!(o.width || o.height || o.left || o.top)),
                  (this.display = n("display")),
                  (this.position = n("position")),
                  (this.parent = r.parentNode),
                  (this.x = n("x")),
                  (this.y = n("y")),
                  (this.scaleX = i.scaleX),
                  (this.scaleY = i.scaleY),
                  (this.rotation = n("rotation")),
                  (this.skewX = n("skewX")),
                  (this.opacity = n("opacity")),
                  (this.width = s ? s.width : x(n("width", "px"), 0.04)),
                  (this.height = s ? s.height : x(n("height", "px"), 0.04)),
                  e && _recordProps(this, N[e] || _memoizeProps(e)),
                  (this.ctm =
                    r.getCTM &&
                    "svg" === r.nodeName.toLowerCase() &&
                    _getCTM(r).inverse()),
                  (this.simple =
                    t ||
                    (1 === _round(a.a) &&
                      !_round(a.b) &&
                      !_round(a.c) &&
                      1 === _round(a.d))),
                  (this.uncache = 0));
              }),
              ElementState
            );
          })(),
          K = (function () {
            function FlipAction(e, t) {
              ((this.vars = e),
                (this.batch = t),
                (this.states = []),
                (this.timeline = t.timeline));
            }
            var e = FlipAction.prototype;
            return (
              (e.getStateById = function (e) {
                for (var t = this.states.length; t--; )
                  if (this.states[t].idLookup[e]) return this.states[t];
              }),
              (e.kill = function () {
                this.batch.remove(this);
              }),
              FlipAction
            );
          })(),
          Y = (function () {
            function FlipBatch(e) {
              ((this.id = e),
                (this.actions = []),
                (this._kill = []),
                (this._final = []),
                (this._abs = []),
                (this._run = []),
                (this.data = {}),
                (this.state = new V()),
                (this.timeline = m.timeline()));
            }
            var e = FlipBatch.prototype;
            return (
              (e.add = function (e) {
                var t = this.actions.filter(function (t) {
                  return t.vars === e;
                });
                return t.length
                  ? t[0]
                  : ((t = new K(
                      "function" == typeof e ? { animate: e } : e,
                      this,
                    )),
                    this.actions.push(t),
                    t);
              }),
              (e.remove = function (e) {
                var t = this.actions.indexOf(e);
                return (t >= 0 && this.actions.splice(t, 1), this);
              }),
              (e.getState = function (e) {
                var t = this,
                  r = v,
                  n = y;
                return (
                  (v = this),
                  this.state.clear(),
                  (this._kill.length = 0),
                  this.actions.forEach(function (r) {
                    (r.vars.getState &&
                      ((r.states.length = 0),
                      (y = r),
                      (r.state = r.vars.getState(r))),
                      e &&
                        r.states.forEach(function (e) {
                          return t.state.add(e);
                        }));
                  }),
                  (y = n),
                  (v = r),
                  this.killConflicts(),
                  this
                );
              }),
              (e.animate = function () {
                var e,
                  t,
                  r = this,
                  n = v,
                  i = this.timeline,
                  o = this.actions.length;
                for (
                  v = this,
                    i.clear(),
                    this._abs.length =
                      this._final.length =
                      this._run.length =
                        0,
                    this.actions.forEach(function (e) {
                      e.vars.animate && e.vars.animate(e);
                      var t,
                        r,
                        n = e.vars.onEnter,
                        i = e.vars.onLeave,
                        o = e.targets;
                      o &&
                        o.length &&
                        (n || i) &&
                        ((t = new V()),
                        e.states.forEach(function (e) {
                          return t.add(e);
                        }),
                        (r = t.compare(z.getState(o))).enter.length &&
                          n &&
                          n(r.enter),
                        r.leave.length && i && i(r.leave));
                    }),
                    _makeCompsAbsolute(this._abs),
                    this._run.forEach(function (e) {
                      return e();
                    }),
                    t = i.duration(),
                    e = this._final.slice(0),
                    i.add(function () {
                      t <= i.time() &&
                        (e.forEach(function (e) {
                          return e();
                        }),
                        _forEachBatch(r, "onComplete"));
                    }),
                    v = n;
                  o--;
                )
                  this.actions[o].vars.once && this.actions[o].kill();
                return (_forEachBatch(this, "onStart"), i.restart(), this);
              }),
              (e.loadState = function (e) {
                e ||
                  (e = function () {
                    return 0;
                  });
                var t = [];
                return (
                  this.actions.forEach(function (r) {
                    if (r.vars.loadState) {
                      var n,
                        f = function f(i) {
                          (i && (r.targets = i),
                            ~(n = t.indexOf(f)) &&
                              (t.splice(n, 1), t.length || e()));
                        };
                      (t.push(f), r.vars.loadState(f));
                    }
                  }),
                  t.length || e(),
                  this
                );
              }),
              (e.setState = function () {
                return (
                  this.actions.forEach(function (e) {
                    return (e.targets = e.vars.setState && e.vars.setState(e));
                  }),
                  this
                );
              }),
              (e.killConflicts = function (e) {
                return (
                  this.state.interrupt(e),
                  this._kill.forEach(function (t) {
                    return t.interrupt(e);
                  }),
                  this
                );
              }),
              (e.run = function (e, t) {
                var r = this;
                return (
                  this !== v &&
                    (e || this.getState(t),
                    this.loadState(function () {
                      r._killed || (r.setState(), r.animate());
                    })),
                  this
                );
              }),
              (e.clear = function (e) {
                (this.state.clear(), e || (this.actions.length = 0));
              }),
              (e.getStateById = function (e) {
                for (var t, r = this.actions.length; r--; )
                  if ((t = this.actions[r].getStateById(e))) return t;
                return this.state.idLookup[e] && this.state;
              }),
              (e.kill = function () {
                ((this._killed = 1), this.clear(), delete C[this.id]);
              }),
              FlipBatch
            );
          })(),
          z = (function () {
            function Flip() {}
            return (
              (Flip.getState = function (e, t) {
                var r = _parseState(e, t);
                return (
                  y && y.states.push(r),
                  t && t.batch && Flip.batch(t.batch).state.add(r),
                  r
                );
              }),
              (Flip.from = function (e, t) {
                return (
                  "clearProps" in (t = t || {}) || (t.clearProps = !0),
                  _fromTo(
                    e,
                    _parseState(t.targets || e.targets, {
                      props: t.props || e.props,
                      simple: t.simple,
                      kill: !!t.kill,
                    }),
                    t,
                    -1,
                  )
                );
              }),
              (Flip.to = function (e, t) {
                return _fromTo(
                  e,
                  _parseState(t.targets || e.targets, {
                    props: t.props || e.props,
                    simple: t.simple,
                    kill: !!t.kill,
                  }),
                  t,
                  1,
                );
              }),
              (Flip.fromTo = function (e, t, r) {
                return _fromTo(e, t, r);
              }),
              (Flip.fit = function (e, t, r) {
                var n = r ? _copy(r, D) : {},
                  i = r || n,
                  o = i.absolute,
                  s = i.scale,
                  a = i.getVars,
                  l = i.props,
                  c = i.runBackwards,
                  u = i.onComplete,
                  p = i.simple,
                  d = r && r.fitChild && _getEl(r.fitChild),
                  h = _parseElementState(t, l, p, e),
                  g = _parseElementState(e, 0, p, h),
                  _ = l ? A[l] : M,
                  v = m.context();
                return (
                  l && _applyProps(n, h.props),
                  _recordInlineStyles(g, _),
                  c &&
                    ("immediateRender" in n || (n.immediateRender = !0),
                    (n.onComplete = function () {
                      (_applyInlineStyles(g), u && u.apply(this, arguments));
                    })),
                  o && _makeAbsolute(g, h),
                  (n = _fit(
                    g,
                    h,
                    s || d,
                    !n.duration && l,
                    d,
                    n.duration || a ? n : 0,
                  )),
                  "object" == typeof r &&
                    "zIndex" in r &&
                    (n.zIndex = r.zIndex),
                  v &&
                    !a &&
                    v.add(function () {
                      return function () {
                        return _applyInlineStyles(g);
                      };
                    }),
                  a ? n : n.duration ? m.to(g.element, n) : null
                );
              }),
              (Flip.makeAbsolute = function (e, t) {
                return (e instanceof V ? e : new V(e, t)).makeAbsolute();
              }),
              (Flip.batch = function (e) {
                return (e || (e = "default"), C[e] || (C[e] = new Y(e)));
              }),
              (Flip.killFlipsOf = function (e, t) {
                (e instanceof V ? e.targets : _(e)).forEach(function (e) {
                  return e && _killFlip(e._flip, !1 !== t ? 1 : 2);
                });
              }),
              (Flip.isFlipping = function (e) {
                var t = Flip.getByTarget(e);
                return !!t && t.isActive();
              }),
              (Flip.getByTarget = function (e) {
                return (_getEl(e) || O)._flip;
              }),
              (Flip.getElementState = function (e, t) {
                return new H(_getEl(e), t);
              }),
              (Flip.convertCoordinates = function (e, t, r) {
                var n = getGlobalMatrix(t, !0, !0).multiply(getGlobalMatrix(e));
                return r ? n.apply(r) : n;
              }),
              (Flip.register = function (e) {
                if ((S = "undefined" != typeof document && document.body)) {
                  ((m = e),
                    _setDoc(S),
                    (_ = m.utils.toArray),
                    (b = m.core.getStyleSaver));
                  var t = m.utils.snap(0.1);
                  x = function (e, r) {
                    return t(parseFloat(e) + r);
                  };
                }
              }),
              Flip
            );
          })();
        ((z.version = "3.13.0"),
          "undefined" != typeof window &&
            window.gsap &&
            window.gsap.registerPlugin(z),
          (e.Flip = z),
          (e.default = z),
          Object.defineProperty(e, "__esModule", { value: !0 }));
      })(t);
    },
    63686: function (e, t) {
      !(function (e) {
        "use strict";
        function _defineProperties(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            ((n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n));
          }
        }
        /*!
         * ScrollSmoother 3.13.0
         * https://gsap.com
         *
         * @license Copyright 2008-2025, GreenSock. All rights reserved.
         * Subject to the terms at https://gsap.com/standard-license
         * @author: Jack Doyle, jack@greensock.com
         */ var t,
          r,
          n,
          i,
          o,
          s,
          a,
          l,
          c,
          u,
          p,
          d,
          h,
          g,
          _,
          _windowExists = function () {
            return "undefined" != typeof window;
          },
          _getGSAP = function () {
            return (
              t ||
              (_windowExists() && (t = window.gsap) && t.registerPlugin && t)
            );
          },
          _maxScroll = function (e) {
            return c.maxScroll(e || n);
          },
          _autoDistance = function (e, t) {
            var r,
              i,
              s = e.parentNode || o,
              a = e.getBoundingClientRect(),
              l = s.getBoundingClientRect(),
              c = l.top - a.top,
              u = l.bottom - a.bottom,
              p = (Math.abs(c) > Math.abs(u) ? c : u) / (1 - t),
              d = -p * t;
            return (
              p > 0 &&
                ((i =
                  0.5 == (r = l.height / (n.innerHeight + l.height))
                    ? 2 * l.height
                    : 2 *
                      Math.min(l.height, Math.abs((-p * r) / (2 * r - 1))) *
                      (t || 1)),
                (d += t ? -i * t : -i / 2),
                (p += i)),
              { change: p, offset: d }
            );
          },
          _wrap = function (e) {
            var t = i.querySelector(".ScrollSmoother-wrapper");
            return (
              t ||
                ((t = i.createElement("div")).classList.add(
                  "ScrollSmoother-wrapper",
                ),
                e.parentNode.insertBefore(t, e),
                t.appendChild(e)),
              t
            );
          },
          m = (function () {
            var e;
            function ScrollSmoother(e) {
              var m = this;
              (r ||
                ScrollSmoother.register(t) ||
                console.warn("Please gsap.registerPlugin(ScrollSmoother)"),
                (e = this.vars = e || {}),
                u && u.kill(),
                (u = this),
                g(this));
              var v,
                y,
                S,
                x,
                b,
                w,
                T,
                C,
                E,
                P,
                O,
                L,
                A,
                k,
                M,
                B,
                D = e,
                N = D.smoothTouch,
                R = D.onUpdate,
                I = D.onStop,
                F = D.smooth,
                V = D.onFocusIn,
                H = D.normalizeScroll,
                K = D.wholePixels,
                Y = this,
                z = e.effectsPrefix || "",
                G = c.getScrollFunc(n),
                X =
                  1 === c.isTouch
                    ? !0 === N
                      ? 0.8
                      : parseFloat(N) || 0
                    : 0 === F || !1 === F
                      ? 0
                      : parseFloat(F) || 0.8,
                W = (X && +e.speed) || 1,
                j = 0,
                U = 0,
                $ = 1,
                q = d(0),
                updateVelocity = function () {
                  return q.update(-j);
                },
                Z = { y: 0 },
                removeScroll = function () {
                  return (v.style.overflow = "visible");
                },
                killScrub = function (e) {
                  e.update();
                  var t = e.getTween();
                  (t && (t.pause(), (t._time = t._dur), (t._tTime = t._tDur)),
                    (M = !1),
                    e.animation.progress(e.progress, !0));
                },
                render = function (e, t) {
                  ((e !== j && !P) || t) &&
                    (K && (e = Math.round(e)),
                    X &&
                      ((v.style.transform =
                        "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                        e +
                        ", 0, 1)"),
                      (v._gsap.y = e + "px")),
                    (U = e - j),
                    (j = e),
                    c.isUpdating || ScrollSmoother.isRefreshing || c.update());
                },
                scrollTop = function (e) {
                  return arguments.length
                    ? (e < 0 && (e = 0),
                      (Z.y = -e),
                      (M = !0),
                      P ? (j = -e) : render(-e),
                      c.isRefreshing ? x.update() : G(e / W),
                      this)
                    : -j;
                },
                Q =
                  "undefined" != typeof ResizeObserver &&
                  !1 !== e.autoResize &&
                  new ResizeObserver(function () {
                    if (!c.isRefreshing) {
                      var e = _maxScroll(y) * W;
                      (e < -j && scrollTop(e), _.restart(!0));
                    }
                  }),
                _onFocusIn = function (e) {
                  ((y.scrollTop = 0),
                    (e.target.contains && e.target.contains(y)) ||
                      (V && !1 === V(m, e)) ||
                      (c.isInViewport(e.target) ||
                        e.target === B ||
                        m.scrollTo(e.target, !1, "center center"),
                      (B = e.target)));
                },
                _transformPosition = function (e, t) {
                  if (e < t.start) return e;
                  var r = isNaN(t.ratio) ? 1 : t.ratio,
                    n = t.end - t.start,
                    i = e - t.start,
                    o = t.offset || 0,
                    s = t.pins || [],
                    a = s.offset || 0,
                    l =
                      (t._startClamp && t.start <= 0) ||
                      (t.pins && t.pins.offset)
                        ? 0
                        : t._endClamp && t.end === _maxScroll()
                          ? 1
                          : 0.5;
                  return (
                    s.forEach(function (t) {
                      ((n -= t.distance),
                        t.nativeStart <= e && (i -= t.distance));
                    }),
                    a && (i *= (n - a / r) / n),
                    e + (i - o * l) / r - i
                  );
                },
                adjustEffectRelatedTriggers =
                  function adjustEffectRelatedTriggers(e, r, n) {
                    n || (e.pins.length = e.pins.offset = 0);
                    var i,
                      o,
                      s,
                      a,
                      l,
                      c,
                      u,
                      p,
                      d = e.pins,
                      h = e.markers;
                    for (u = 0; u < r.length; u++)
                      if (
                        ((p = r[u]),
                        e.trigger &&
                          p.trigger &&
                          e !== p &&
                          (p.trigger === e.trigger ||
                            p.pinnedContainer === e.trigger ||
                            e.trigger.contains(p.trigger)) &&
                          ((l = p._startNative || p._startClamp || p.start),
                          (c = p._endNative || p._endClamp || p.end),
                          (s = _transformPosition(l, e)),
                          (a =
                            p.pin && c > 0
                              ? s + (c - l)
                              : _transformPosition(c, e)),
                          p.setPositions(
                            s,
                            a,
                            !0,
                            (p._startClamp ? Math.max(0, s) : s) - l,
                          ),
                          p.markerStart &&
                            h.push(
                              t.quickSetter(
                                [p.markerStart, p.markerEnd],
                                "y",
                                "px",
                              ),
                            ),
                          p.pin && p.end > 0 && !n))
                      ) {
                        if (
                          ((i = p.end - p.start),
                          (o = e._startClamp && p.start < 0))
                        ) {
                          if (e.start > 0) {
                            (e.setPositions(
                              0,
                              e.end + (e._startNative - e.start),
                              !0,
                            ),
                              adjustEffectRelatedTriggers(e, r));
                            return;
                          }
                          ((i += p.start), (d.offset = -p.start));
                        }
                        (d.push({
                          start: p.start,
                          nativeStart: l,
                          end: p.end,
                          distance: i,
                          trig: p,
                        }),
                          e.setPositions(
                            e.start,
                            e.end + (o ? -p.start : i),
                            !0,
                          ));
                      }
                  },
                adjustParallaxPosition = function (e, t) {
                  b.forEach(function (r) {
                    return adjustEffectRelatedTriggers(r, e, t);
                  });
                },
                onRefresh = function () {
                  ((o = i.documentElement),
                    (s = i.body),
                    removeScroll(),
                    requestAnimationFrame(removeScroll),
                    b &&
                      (c.getAll().forEach(function (e) {
                        ((e._startNative = e.start), (e._endNative = e.end));
                      }),
                      b.forEach(function (e) {
                        var t = e._startClamp || e.start,
                          r = e.autoSpeed
                            ? Math.min(_maxScroll(), e.end)
                            : t + Math.abs((e.end - t) / e.ratio),
                          n = r - e.end;
                        if ((t -= n / 2) > (r -= n / 2)) {
                          var i = t;
                          ((t = r), (r = i));
                        }
                        (e._startClamp && t < 0
                          ? ((n =
                              (r =
                                e.ratio < 0 ? _maxScroll() : e.end / e.ratio) -
                              e.end),
                            (t = 0))
                          : (e.ratio < 0 ||
                              (e._endClamp && r >= _maxScroll())) &&
                            ((r = _maxScroll()),
                            (t =
                              e.ratio < 0
                                ? 0
                                : e.ratio > 1
                                  ? 0
                                  : r - (r - e.start) / e.ratio),
                            (n = (r - t) * e.ratio - (e.end - e.start))),
                          (e.offset = n || 1e-4),
                          (e.pins.length = e.pins.offset = 0),
                          e.setPositions(t, r, !0));
                      }),
                      adjustParallaxPosition(c.sort())),
                    q.reset());
                },
                addOnRefresh = function () {
                  return c.addEventListener("refresh", onRefresh);
                },
                restoreEffects = function () {
                  return (
                    b &&
                    b.forEach(function (e) {
                      return e.vars.onRefresh(e);
                    })
                  );
                },
                revertEffects = function () {
                  return (
                    b &&
                      b.forEach(function (e) {
                        return e.vars.onRefreshInit(e);
                      }),
                    restoreEffects
                  );
                },
                effectValueGetter = function (e, t, r, n) {
                  return function () {
                    var i = "function" == typeof t ? t(r, n) : t;
                    (i ||
                      0 === i ||
                      (i =
                        n.getAttribute("data-" + z + e) ||
                        ("speed" === e ? 1 : 0)),
                      n.setAttribute("data-" + z + e, i));
                    var o = "clamp(" === (i + "").substr(0, 6);
                    return {
                      clamp: o,
                      value: o ? i.substr(6, i.length - 7) : i,
                    };
                  };
                },
                createEffect = function (e, r, n, i, o) {
                  o = ("function" == typeof o ? o(i, e) : o) || 0;
                  var s,
                    a,
                    u,
                    d,
                    h,
                    g,
                    _ = effectValueGetter("speed", r, i, e),
                    m = effectValueGetter("lag", n, i, e),
                    v = t.getProperty(e, "y"),
                    S = e._gsap,
                    x = [],
                    initDynamicValues = function () {
                      ((r = _()),
                        (n = parseFloat(m().value)),
                        (s = parseFloat(r.value) || 1),
                        (h =
                          (u = "auto" === r.value) ||
                          (a && a._startClamp && a.start <= 0) ||
                          x.offset
                            ? 0
                            : a && a._endClamp && a.end === _maxScroll()
                              ? 1
                              : 0.5),
                        d && d.kill(),
                        (d =
                          n &&
                          t.to(e, {
                            ease: p,
                            overwrite: !1,
                            y: "+=0",
                            duration: n,
                          })),
                        a && ((a.ratio = s), (a.autoSpeed = u)));
                    },
                    revert = function () {
                      ((S.y = v + "px"),
                        S.renderTransform(1),
                        initDynamicValues());
                    },
                    w = [],
                    T = 0,
                    updateChange = function (t) {
                      if (u) {
                        revert();
                        var r = _autoDistance(
                          e,
                          l(0, 1, -t.start / (t.end - t.start)),
                        );
                        ((T = r.change), (g = r.offset));
                      } else
                        ((g = x.offset || 0),
                          (T = (t.end - t.start - g) * (1 - s)));
                      (x.forEach(function (e) {
                        return (T -= e.distance * (1 - s));
                      }),
                        (t.offset = T || 0.001),
                        t.vars.onUpdate(t),
                        d && d.progress(1));
                    };
                  return (
                    initDynamicValues(),
                    (1 !== s || u || d) &&
                      ((a = c.create({
                        trigger: u ? e.parentNode : e,
                        start: function () {
                          return r.clamp
                            ? "clamp(top bottom+=" + o + ")"
                            : "top bottom+=" + o;
                        },
                        end: function () {
                          return r.value < 0
                            ? "max"
                            : r.clamp
                              ? "clamp(bottom top-=" + o + ")"
                              : "bottom top-=" + o;
                        },
                        scroller: y,
                        scrub: !0,
                        refreshPriority: -999,
                        onRefreshInit: revert,
                        onRefresh: updateChange,
                        onKill: function (e) {
                          var t = b.indexOf(e);
                          (t >= 0 && b.splice(t, 1), revert());
                        },
                        onUpdate: function (e) {
                          var r,
                            n,
                            i,
                            o = v + T * (e.progress - h),
                            s = x.length,
                            a = 0;
                          if (e.offset) {
                            if (s) {
                              for (n = -j, i = e.end; s--; ) {
                                if (
                                  (r = x[s]).trig.isActive ||
                                  (n >= r.start && n <= r.end)
                                ) {
                                  d &&
                                    ((r.trig.progress +=
                                      r.trig.direction < 0 ? 0.001 : -0.001),
                                    r.trig.update(0, 0, 1),
                                    d.resetTo("y", parseFloat(S.y), -U, !0),
                                    $ && d.progress(1));
                                  return;
                                }
                                (n > r.end && (a += r.distance),
                                  (i -= r.distance));
                              }
                              o =
                                v +
                                a +
                                T *
                                  ((t.utils.clamp(e.start, e.end, n) -
                                    e.start -
                                    a) /
                                    (i - e.start) -
                                    h);
                            }
                            (w.length &&
                              !u &&
                              w.forEach(function (e) {
                                return e(o - a);
                              }),
                              (o = Math.round(1e5 * (o + g)) / 1e5 || 0),
                              d
                                ? (d.resetTo("y", o, -U, !0),
                                  $ && d.progress(1))
                                : ((S.y = o + "px"), S.renderTransform(1)));
                          }
                        },
                      })),
                      updateChange(a),
                      (t.core.getCache(a.trigger).stRevert = revertEffects),
                      (a.startY = v),
                      (a.pins = x),
                      (a.markers = w),
                      (a.ratio = s),
                      (a.autoSpeed = u),
                      (e.style.willChange = "transform")),
                    a
                  );
                };
              function refreshHeight() {
                return (
                  (S = v.clientHeight),
                  (v.style.overflow = "visible"),
                  (s.style.height =
                    n.innerHeight + (S - n.innerHeight) / W + "px"),
                  S - n.innerHeight
                );
              }
              (addOnRefresh(),
                c.addEventListener("killAll", addOnRefresh),
                t.delayedCall(0.5, function () {
                  return ($ = 0);
                }),
                (this.scrollTop = scrollTop),
                (this.scrollTo = function (e, r, n) {
                  var i = t.utils.clamp(
                    0,
                    _maxScroll(),
                    isNaN(e) ? m.offset(e, n, !!r && !P) : +e,
                  );
                  r
                    ? P
                      ? t.to(m, {
                          duration: X,
                          scrollTop: i,
                          overwrite: "auto",
                          ease: p,
                        })
                      : G(i)
                    : scrollTop(i);
                }),
                (this.offset = function (e, r, n) {
                  var i,
                    o = (e = a(e)[0]).style.cssText,
                    s = c.create({ trigger: e, start: r || "top top" });
                  return (
                    b && ($ ? c.refresh() : adjustParallaxPosition([s], !0)),
                    (i = s.start / (n ? W : 1)),
                    s.kill(!1),
                    (e.style.cssText = o),
                    (t.core.getCache(e).uncache = 1),
                    i
                  );
                }),
                (this.content = function (e) {
                  if (arguments.length) {
                    var r =
                      a(e || "#smooth-content")[0] ||
                      console.warn(
                        "ScrollSmoother needs a valid content element.",
                      ) ||
                      s.children[0];
                    return (
                      r !== v &&
                        ((E = (v = r).getAttribute("style") || ""),
                        Q && Q.observe(v),
                        t.set(v, {
                          overflow: "visible",
                          width: "100%",
                          boxSizing: "border-box",
                          y: "+=0",
                        }),
                        X || t.set(v, { clearProps: "transform" })),
                      this
                    );
                  }
                  return v;
                }),
                (this.wrapper = function (e) {
                  return arguments.length
                    ? ((C =
                        (y =
                          a(e || "#smooth-wrapper")[0] ||
                          _wrap(v)).getAttribute("style") || ""),
                      refreshHeight(),
                      t.set(
                        y,
                        X
                          ? {
                              overflow: "hidden",
                              position: "fixed",
                              height: "100%",
                              width: "100%",
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                            }
                          : {
                              overflow: "visible",
                              position: "relative",
                              width: "100%",
                              height: "auto",
                              top: "auto",
                              bottom: "auto",
                              left: "auto",
                              right: "auto",
                            },
                      ),
                      this)
                    : y;
                }),
                (this.effects = function (e, t) {
                  if ((b || (b = []), !e)) return b.slice(0);
                  (e = a(e)).forEach(function (e) {
                    for (var t = b.length; t--; )
                      b[t].trigger === e && b[t].kill();
                  });
                  var r,
                    n,
                    i,
                    o = (t = t || {}),
                    s = o.speed,
                    l = o.lag,
                    u = o.effectsPadding,
                    p = [];
                  for (n = 0; n < e.length; n++)
                    (i = createEffect(e[n], s, l, n, u)) && p.push(i);
                  return (
                    (r = b).push.apply(r, p),
                    !1 !== t.refresh && c.refresh(),
                    p
                  );
                }),
                (this.sections = function (e, t) {
                  if ((w || (w = []), !e)) return w.slice(0);
                  var r,
                    n = a(e).map(function (e) {
                      return c.create({
                        trigger: e,
                        start: "top 120%",
                        end: "bottom -20%",
                        onToggle: function (t) {
                          ((e.style.opacity = t.isActive ? "1" : "0"),
                            (e.style.pointerEvents = t.isActive
                              ? "all"
                              : "none"));
                        },
                      });
                    });
                  return (
                    t && t.add ? (r = w).push.apply(r, n) : (w = n.slice(0)),
                    n
                  );
                }),
                this.content(e.content),
                this.wrapper(e.wrapper),
                (this.render = function (e) {
                  return render(e || 0 === e ? e : j);
                }),
                (this.getVelocity = function () {
                  return q.getVelocity(-j);
                }),
                c.scrollerProxy(y, {
                  scrollTop: scrollTop,
                  scrollHeight: function () {
                    return refreshHeight() && s.scrollHeight;
                  },
                  fixedMarkers: !1 !== e.fixedMarkers && !!X,
                  content: v,
                  getBoundingClientRect: function () {
                    return {
                      top: 0,
                      left: 0,
                      width: n.innerWidth,
                      height: n.innerHeight,
                    };
                  },
                }),
                c.defaults({ scroller: y }));
              var J = c.getAll().filter(function (e) {
                return e.scroller === n || e.scroller === y;
              });
              (J.forEach(function (e) {
                return e.revert(!0, !0);
              }),
                (x = c.create({
                  animation: t.fromTo(
                    Z,
                    {
                      y: function () {
                        return ((k = 0), 0);
                      },
                    },
                    {
                      y: function () {
                        return ((k = 1), -refreshHeight());
                      },
                      immediateRender: !1,
                      ease: "none",
                      data: "ScrollSmoother",
                      duration: 100,
                      onUpdate: function () {
                        if (k) {
                          var e = M;
                          (e && (killScrub(x), (Z.y = j)),
                            render(Z.y, e),
                            updateVelocity(),
                            R && !P && R(Y));
                        }
                      },
                    },
                  ),
                  onRefreshInit: function (e) {
                    if (!ScrollSmoother.isRefreshing) {
                      if (((ScrollSmoother.isRefreshing = !0), b)) {
                        var t = c.getAll().filter(function (e) {
                          return !!e.pin;
                        });
                        b.forEach(function (e) {
                          e.vars.pinnedContainer ||
                            t.forEach(function (t) {
                              if (t.pin.contains(e.trigger)) {
                                var r = e.vars;
                                ((r.pinnedContainer = t.pin),
                                  (e.vars = null),
                                  e.init(r, e.animation));
                              }
                            });
                        });
                      }
                      var r = e.getTween();
                      ((A = r && r._end > r._dp._time),
                        (L = j),
                        (Z.y = 0),
                        X &&
                          (1 === c.isTouch && (y.style.position = "absolute"),
                          (y.scrollTop = 0),
                          1 === c.isTouch && (y.style.position = "fixed")));
                    }
                  },
                  onRefresh: function (e) {
                    (e.animation.invalidate(),
                      e.setPositions(e.start, refreshHeight() / W),
                      A || killScrub(e),
                      (Z.y = -G() * W),
                      render(Z.y),
                      $ ||
                        (A && (M = !1),
                        e.animation.progress(
                          t.utils.clamp(0, 1, -(L / W / e.end)),
                        )),
                      A && ((e.progress -= 0.001), e.update()),
                      (ScrollSmoother.isRefreshing = !1));
                  },
                  id: "ScrollSmoother",
                  scroller: n,
                  invalidateOnRefresh: !0,
                  start: 0,
                  refreshPriority: -9999,
                  end: function () {
                    return refreshHeight() / W;
                  },
                  onScrubComplete: function () {
                    (q.reset(), I && I(m));
                  },
                  scrub: X || !0,
                })),
                (this.smooth = function (t) {
                  return (
                    arguments.length &&
                      ((W = ((X = t || 0) && +e.speed) || 1),
                      x.scrubDuration(t)),
                    x.getTween() ? x.getTween().duration() : 0
                  );
                }),
                x.getTween() && (x.getTween().vars.ease = e.ease || p),
                (this.scrollTrigger = x),
                e.effects &&
                  this.effects(
                    !0 === e.effects
                      ? "[data-" + z + "speed], [data-" + z + "lag]"
                      : e.effects,
                    { effectsPadding: e.effectsPadding, refresh: !1 },
                  ),
                e.sections &&
                  this.sections(
                    !0 === e.sections ? "[data-section]" : e.sections,
                  ),
                J.forEach(function (e) {
                  ((e.vars.scroller = y),
                    e.revert(!1, !0),
                    e.init(e.vars, e.animation));
                }),
                (this.paused = function (e, t) {
                  return arguments.length
                    ? (!!P !== e &&
                        (e
                          ? (x.getTween() && x.getTween().pause(),
                            G(-j / W),
                            q.reset(),
                            (O = c.normalizeScroll()) && O.disable(),
                            ((P = c.observe({
                              preventDefault: !0,
                              type: "wheel,touch,scroll",
                              debounce: !1,
                              allowClicks: !0,
                              onChangeY: function () {
                                return scrollTop(-j);
                              },
                            })).nested = h(
                              o,
                              "wheel,touch,scroll",
                              !0,
                              !1 !== t,
                            )))
                          : (P.nested.kill(),
                            P.kill(),
                            (P = 0),
                            O && O.enable(),
                            (x.progress =
                              (-j / W - x.start) / (x.end - x.start)),
                            killScrub(x))),
                      this)
                    : !!P;
                }),
                (this.kill = this.revert =
                  function () {
                    (m.paused(!1), killScrub(x), x.kill());
                    for (var e = (b || []).concat(w || []), t = e.length; t--; )
                      e[t].kill();
                    (c.scrollerProxy(y),
                      c.removeEventListener("killAll", addOnRefresh),
                      c.removeEventListener("refresh", onRefresh),
                      (y.style.cssText = C),
                      (v.style.cssText = E));
                    var r = c.defaults({});
                    (r && r.scroller === y && c.defaults({ scroller: n }),
                      m.normalizer && c.normalizeScroll(!1),
                      clearInterval(T),
                      (u = null),
                      Q && Q.disconnect(),
                      s.style.removeProperty("height"),
                      n.removeEventListener("focusin", _onFocusIn));
                  }),
                (this.refresh = function (e, t) {
                  return x.refresh(e, t);
                }),
                H &&
                  (this.normalizer = c.normalizeScroll(
                    !0 === H ? { debounce: !0, content: !X && v } : H,
                  )),
                c.config(e),
                "scrollBehavior" in n.getComputedStyle(s) &&
                  t.set([s, o], { scrollBehavior: "auto" }),
                n.addEventListener("focusin", _onFocusIn),
                (T = setInterval(updateVelocity, 250)),
                "loading" === i.readyState ||
                  requestAnimationFrame(function () {
                    return c.refresh();
                  }));
            }
            return (
              (ScrollSmoother.register = function (e) {
                return (
                  !r &&
                    ((t = e || _getGSAP()),
                    _windowExists() &&
                      window.document &&
                      ((n = window),
                      (o = (i = document).documentElement),
                      (s = i.body)),
                    t &&
                      ((a = t.utils.toArray),
                      (l = t.utils.clamp),
                      (p = t.parseEase("expo")),
                      (g = t.core.context || function () {}),
                      (c = t.core.globals().ScrollTrigger),
                      t.core.globals("ScrollSmoother", ScrollSmoother),
                      s &&
                        c &&
                        ((_ = t
                          .delayedCall(0.2, function () {
                            return c.isRefreshing || (u && u.refresh());
                          })
                          .pause()),
                        (d = c.core._getVelocityProp),
                        (h = c.core._inputObserver),
                        (ScrollSmoother.refresh = c.refresh),
                        (r = 1)))),
                  r
                );
              }),
              _defineProperties(ScrollSmoother.prototype, [
                {
                  key: "progress",
                  get: function () {
                    return this.scrollTrigger
                      ? this.scrollTrigger.animation._time / 100
                      : 0;
                  },
                },
              ]),
              e && _defineProperties(ScrollSmoother, e),
              ScrollSmoother
            );
          })();
        ((m.version = "3.13.0"),
          (m.create = function (e) {
            return u && e && u.content() === a(e.content)[0] ? u : new m(e);
          }),
          (m.get = function () {
            return u;
          }),
          _getGSAP() && t.registerPlugin(m),
          (e.ScrollSmoother = m),
          (e.default = m),
          "undefined" == typeof window || window !== e
            ? Object.defineProperty(e, "__esModule", { value: !0 })
            : delete window.default);
      })(t);
    },
    29333: function (e, t) {
      var r, n, i, o, s, a, l, c, u, p, d, h, g, _, m, v, y, S, x;
      ((u = function () {
        return "undefined" != typeof window;
      }),
        (p = function () {
          return r || (u() && (r = window.gsap) && r.registerPlugin && r);
        }),
        (d = function (e) {
          return "string" == typeof e;
        }),
        (h = function (e) {
          return "function" == typeof e;
        }),
        (g = function (e, t) {
          var r = "x" === t ? "Width" : "Height",
            n = "scroll" + r,
            a = "client" + r;
          return e === i || e === o || e === s
            ? Math.max(o[n], s[n]) - (i["inner" + r] || o[a] || s[a])
            : e[n] - e["offset" + r];
        }),
        (_ = function (e, t) {
          var r = "scroll" + ("x" === t ? "Left" : "Top");
          return (
            e === i &&
              (null != e.pageXOffset
                ? (r = "page" + t.toUpperCase() + "Offset")
                : (e = null != o[r] ? o : s)),
            function () {
              return e[r];
            }
          );
        }),
        (m = function (e, t, r, n) {
          if ((h(e) && (e = e(t, r, n)), "object" != typeof e))
            return d(e) && "max" !== e && "=" !== e.charAt(1)
              ? { x: e, y: e }
              : { y: e };
          if (e.nodeType) return { y: e, x: e };
          var i,
            o = {};
          for (i in e)
            o[i] = "onAutoKill" !== i && h(e[i]) ? e[i](t, r, n) : e[i];
          return o;
        }),
        (v = function (e, t) {
          if (!(e = a(e)[0]) || !e.getBoundingClientRect)
            return (
              console.warn("scrollTo target doesn't exist. Using 0") || {
                x: 0,
                y: 0,
              }
            );
          var r = e.getBoundingClientRect(),
            n = !t || t === i || t === s,
            l = n
              ? {
                  top:
                    o.clientTop -
                    (i.pageYOffset || o.scrollTop || s.scrollTop || 0),
                  left:
                    o.clientLeft -
                    (i.pageXOffset || o.scrollLeft || s.scrollLeft || 0),
                }
              : t.getBoundingClientRect(),
            c = { x: r.left - l.left, y: r.top - l.top };
          return (!n && t && ((c.x += _(t, "x")()), (c.y += _(t, "y")())), c);
        }),
        (y = function (e, t, r, n, i) {
          return isNaN(e) || "object" == typeof e
            ? d(e) && "=" === e.charAt(1)
              ? parseFloat(e.substr(2)) * ("-" === e.charAt(0) ? -1 : 1) + n - i
              : "max" === e
                ? g(t, r) - i
                : Math.min(g(t, r), v(e, t)[r] - i)
            : parseFloat(e) - i;
        }),
        (S = function () {
          ((r = p()),
            u() &&
              r &&
              "undefined" != typeof document &&
              document.body &&
              ((i = window),
              (s = document.body),
              (o = document.documentElement),
              (a = r.utils.toArray),
              r.config({ autoKillThreshold: 7 }),
              (l = r.config()),
              (n = 1)));
        }),
        ((x = {
          version: "3.13.0",
          name: "scrollTo",
          rawVars: 1,
          register: function (e) {
            ((r = e), S());
          },
          init: function (e, t, o, s, a) {
            n || S();
            var u = r.getProperty(e, "scrollSnapType");
            ((this.isWin = e === i),
              (this.target = e),
              (this.tween = o),
              (t = m(t, s, e, a)),
              (this.vars = t),
              (this.autoKill = !!("autoKill" in t ? t : l).autoKill),
              (this.getX = _(e, "x")),
              (this.getY = _(e, "y")),
              (this.x = this.xPrev = this.getX()),
              (this.y = this.yPrev = this.getY()),
              c || (c = r.core.globals().ScrollTrigger),
              "smooth" === r.getProperty(e, "scrollBehavior") &&
                r.set(e, { scrollBehavior: "auto" }),
              u &&
                "none" !== u &&
                ((this.snap = 1),
                (this.snapInline = e.style.scrollSnapType),
                (e.style.scrollSnapType = "none")),
              null != t.x
                ? (this.add(
                    this,
                    "x",
                    this.x,
                    y(t.x, e, "x", this.x, t.offsetX || 0),
                    s,
                    a,
                  ),
                  this._props.push("scrollTo_x"))
                : (this.skipX = 1),
              null != t.y
                ? (this.add(
                    this,
                    "y",
                    this.y,
                    y(t.y, e, "y", this.y, t.offsetY || 0),
                    s,
                    a,
                  ),
                  this._props.push("scrollTo_y"))
                : (this.skipY = 1));
          },
          render: function (e, t) {
            for (
              var r,
                n,
                o,
                s,
                a,
                u = t._pt,
                p = t.target,
                d = t.tween,
                h = t.autoKill,
                _ = t.xPrev,
                m = t.yPrev,
                v = t.isWin,
                y = t.snap,
                S = t.snapInline;
              u;
            )
              (u.r(e, u.d), (u = u._next));
            ((r = v || !t.skipX ? t.getX() : _),
              (o = (n = v || !t.skipY ? t.getY() : m) - m),
              (s = r - _),
              (a = l.autoKillThreshold),
              t.x < 0 && (t.x = 0),
              t.y < 0 && (t.y = 0),
              h &&
                (!t.skipX &&
                  (s > a || s < -a) &&
                  r < g(p, "x") &&
                  (t.skipX = 1),
                !t.skipY && (o > a || o < -a) && n < g(p, "y") && (t.skipY = 1),
                t.skipX &&
                  t.skipY &&
                  (d.kill(),
                  t.vars.onAutoKill &&
                    t.vars.onAutoKill.apply(d, t.vars.onAutoKillParams || []))),
              v
                ? i.scrollTo(t.skipX ? r : t.x, t.skipY ? n : t.y)
                : (t.skipY || (p.scrollTop = t.y),
                  t.skipX || (p.scrollLeft = t.x)),
              y &&
                (1 === e || 0 === e) &&
                ((n = p.scrollTop),
                (r = p.scrollLeft),
                S
                  ? (p.style.scrollSnapType = S)
                  : p.style.removeProperty("scroll-snap-type"),
                (p.scrollTop = n + 1),
                (p.scrollLeft = r + 1),
                (p.scrollTop = n),
                (p.scrollLeft = r)),
              (t.xPrev = t.x),
              (t.yPrev = t.y),
              c && c.update());
          },
          kill: function (e) {
            var t = "scrollTo" === e,
              r = this._props.indexOf(e);
            return (
              (t || "scrollTo_x" === e) && (this.skipX = 1),
              (t || "scrollTo_y" === e) && (this.skipY = 1),
              r > -1 && this._props.splice(r, 1),
              !this._props.length
            );
          },
        }).max = g),
        (x.getOffset = v),
        (x.buildGetter = _),
        (x.config = function (e) {
          for (var t in (l || S() || (l = r.config()), e)) l[t] = e[t];
        }),
        p() && r.registerPlugin(x),
        (t.ScrollToPlugin = x),
        (t.default = x),
        Object.defineProperty(t, "__esModule", { value: !0 }));
    },
    63982: function (e, t) {
      !(function (e) {
        "use strict";
        function _defineProperties(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            ((n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n));
          }
        }
        /*!
         * Observer 3.13.0
         * https://gsap.com
         *
         * @license Copyright 2008-2025, GreenSock. All rights reserved.
         * Subject to the terms at https://gsap.com/standard-license
         * @author: Jack Doyle, jack@greensock.com
         */ var t,
          r,
          n,
          i,
          o,
          s,
          a,
          l,
          c,
          u,
          p,
          d,
          h,
          _getGSAP = function () {
            return (
              t ||
              ("undefined" != typeof window &&
                (t = window.gsap) &&
                t.registerPlugin &&
                t)
            );
          },
          g = 1,
          _ = [],
          m = [],
          v = [],
          y = Date.now,
          _bridge = function (e, t) {
            return t;
          },
          _integrate = function () {
            var e = c.core,
              t = e.bridge || {},
              r = e._scrollers,
              n = e._proxies;
            (r.push.apply(r, m),
              n.push.apply(n, v),
              (m = r),
              (v = n),
              (_bridge = function (e, r) {
                return t[e](r);
              }));
          },
          _getProxyProp = function (e, t) {
            return ~v.indexOf(e) && v[v.indexOf(e) + 1][t];
          },
          _isViewport = function (e) {
            return !!~u.indexOf(e);
          },
          _addListener = function (e, t, r, n, i) {
            return e.addEventListener(t, r, {
              passive: !1 !== n,
              capture: !!i,
            });
          },
          _removeListener = function (e, t, r, n) {
            return e.removeEventListener(t, r, !!n);
          },
          S = "scrollLeft",
          x = "scrollTop",
          _onScroll = function () {
            return (p && p.isPressed) || m.cache++;
          },
          _scrollCacheFunc = function (e, t) {
            var cachingFunc = function cachingFunc(r) {
              if (r || 0 === r) {
                g && (n.history.scrollRestoration = "manual");
                var i = p && p.isPressed;
                (e((r = cachingFunc.v = Math.round(r) || (p && p.iOS ? 1 : 0))),
                  (cachingFunc.cacheID = m.cache),
                  i && _bridge("ss", r));
              } else
                (t || m.cache !== cachingFunc.cacheID || _bridge("ref")) &&
                  ((cachingFunc.cacheID = m.cache), (cachingFunc.v = e()));
              return cachingFunc.v + cachingFunc.offset;
            };
            return ((cachingFunc.offset = 0), e && cachingFunc);
          },
          b = {
            s: S,
            p: "left",
            p2: "Left",
            os: "right",
            os2: "Right",
            d: "width",
            d2: "Width",
            a: "x",
            sc: _scrollCacheFunc(function (e) {
              return arguments.length
                ? n.scrollTo(e, w.sc())
                : n.pageXOffset || i[S] || o[S] || s[S] || 0;
            }),
          },
          w = {
            s: x,
            p: "top",
            p2: "Top",
            os: "bottom",
            os2: "Bottom",
            d: "height",
            d2: "Height",
            a: "y",
            op: b,
            sc: _scrollCacheFunc(function (e) {
              return arguments.length
                ? n.scrollTo(b.sc(), e)
                : n.pageYOffset || i[x] || o[x] || s[x] || 0;
            }),
          },
          _getTarget = function (e, r) {
            return (
              ((r && r._ctx && r._ctx.selector) || t.utils.toArray)(e)[0] ||
              ("string" == typeof e && !1 !== t.config().nullTargetWarn
                ? console.warn("Element not found:", e)
                : null)
            );
          },
          _isWithin = function (e, t) {
            for (var r = t.length; r--; )
              if (t[r] === e || t[r].contains(e)) return !0;
            return !1;
          },
          _getScrollFunc = function (e, r) {
            var n = r.s,
              s = r.sc;
            _isViewport(e) && (e = i.scrollingElement || o);
            var a = m.indexOf(e),
              l = s === w.sc ? 1 : 2;
            (~a || (a = m.push(e) - 1),
              m[a + l] || _addListener(e, "scroll", _onScroll));
            var c = m[a + l],
              u =
                c ||
                (m[a + l] =
                  _scrollCacheFunc(_getProxyProp(e, n), !0) ||
                  (_isViewport(e)
                    ? s
                    : _scrollCacheFunc(function (t) {
                        return arguments.length ? (e[n] = t) : e[n];
                      })));
            return (
              (u.target = e),
              c || (u.smooth = "smooth" === t.getProperty(e, "scrollBehavior")),
              u
            );
          },
          _getVelocityProp = function (e, t, r) {
            var n = e,
              i = e,
              o = y(),
              s = o,
              a = t || 50,
              l = Math.max(500, 3 * a),
              update = function (e, t) {
                var l = y();
                t || l - o > a
                  ? ((i = n), (n = e), (s = o), (o = l))
                  : r
                    ? (n += e)
                    : (n = i + ((e - i) / (l - s)) * (o - s));
              };
            return {
              update: update,
              reset: function () {
                ((i = n = r ? 0 : n), (s = o = 0));
              },
              getVelocity: function (e) {
                var t = s,
                  a = i,
                  c = y();
                return (
                  (e || 0 === e) && e !== n && update(e),
                  o === s || c - s > l
                    ? 0
                    : ((n + (r ? a : -a)) / ((r ? c : o) - t)) * 1e3
                );
              },
            };
          },
          _getEvent = function (e, t) {
            return (
              t && !e._gsapAllow && e.preventDefault(),
              e.changedTouches ? e.changedTouches[0] : e
            );
          },
          _getAbsoluteMax = function (e) {
            var t = Math.max.apply(Math, e),
              r = Math.min.apply(Math, e);
            return Math.abs(t) >= Math.abs(r) ? t : r;
          },
          _setScrollTrigger = function () {
            (c = t.core.globals().ScrollTrigger) && c.core && _integrate();
          },
          _initCore = function (e) {
            return (
              (t = e || _getGSAP()),
              !r &&
                t &&
                "undefined" != typeof document &&
                document.body &&
                ((n = window),
                (o = (i = document).documentElement),
                (s = i.body),
                (u = [n, i, o, s]),
                t.utils.clamp,
                (h = t.core.context || function () {}),
                (l = "onpointerenter" in s ? "pointer" : "mouse"),
                (a = T.isTouch =
                  n.matchMedia &&
                  n.matchMedia("(hover: none), (pointer: coarse)").matches
                    ? 1
                    : "ontouchstart" in n ||
                        navigator.maxTouchPoints > 0 ||
                        navigator.msMaxTouchPoints > 0
                      ? 2
                      : 0),
                (d = T.eventTypes =
                  (
                    "ontouchstart" in o
                      ? "touchstart,touchmove,touchcancel,touchend"
                      : "onpointerdown" in o
                        ? "pointerdown,pointermove,pointercancel,pointerup"
                        : "mousedown,mousemove,mouseup,mouseup"
                  ).split(",")),
                setTimeout(function () {
                  return (g = 0);
                }, 500),
                _setScrollTrigger(),
                (r = 1)),
              r
            );
          };
        ((b.op = w), (m.cache = 0));
        var T = (function () {
          var e;
          function Observer(e) {
            this.init(e);
          }
          return (
            (Observer.prototype.init = function (e) {
              (r ||
                _initCore(t) ||
                console.warn("Please gsap.registerPlugin(Observer)"),
                c || _setScrollTrigger());
              var u = e.tolerance,
                g = e.dragMinimum,
                m = e.type,
                v = e.target,
                S = e.lineHeight,
                x = e.debounce,
                T = e.preventDefault,
                C = e.onStop,
                E = e.onStopDelay,
                P = e.ignore,
                O = e.wheelSpeed,
                L = e.event,
                A = e.onDragStart,
                k = e.onDragEnd,
                M = e.onDrag,
                B = e.onPress,
                D = e.onRelease,
                N = e.onRight,
                R = e.onLeft,
                I = e.onUp,
                F = e.onDown,
                V = e.onChangeX,
                H = e.onChangeY,
                K = e.onChange,
                Y = e.onToggleX,
                z = e.onToggleY,
                G = e.onHover,
                X = e.onHoverEnd,
                W = e.onMove,
                j = e.ignoreCheck,
                U = e.isNormalizer,
                $ = e.onGestureStart,
                q = e.onGestureEnd,
                Z = e.onWheel,
                Q = e.onEnable,
                J = e.onDisable,
                ee = e.onClick,
                et = e.scrollSpeed,
                er = e.capture,
                en = e.allowClicks,
                ei = e.lockAxis,
                eo = e.onLockAxis;
              ((this.target = v = _getTarget(v) || o),
                (this.vars = e),
                P && (P = t.utils.toArray(P)),
                (u = u || 1e-9),
                (g = g || 0),
                (O = O || 1),
                (et = et || 1),
                (m = m || "wheel,touch,pointer"),
                (x = !1 !== x),
                S || (S = parseFloat(n.getComputedStyle(s).lineHeight) || 22));
              var es,
                ea,
                el,
                ec,
                eu,
                ep,
                ef,
                ed = this,
                eh = 0,
                eg = 0,
                e_ = e.passive || (!T && !1 !== e.passive),
                em = _getScrollFunc(v, b),
                ev = _getScrollFunc(v, w),
                ey = em(),
                eS = ev(),
                ex =
                  ~m.indexOf("touch") &&
                  !~m.indexOf("pointer") &&
                  "pointerdown" === d[0],
                eb = _isViewport(v),
                ew = v.ownerDocument || i,
                eT = [0, 0, 0],
                eC = [0, 0, 0],
                eE = 0,
                clickCapture = function () {
                  return (eE = y());
                },
                _ignoreCheck = function (e, t) {
                  return (
                    ((ed.event = e) && P && _isWithin(e.target, P)) ||
                    (t && ex && "touch" !== e.pointerType) ||
                    (j && j(e, t))
                  );
                },
                update = function () {
                  var e = (ed.deltaX = _getAbsoluteMax(eT)),
                    t = (ed.deltaY = _getAbsoluteMax(eC)),
                    r = Math.abs(e) >= u,
                    n = Math.abs(t) >= u;
                  (K && (r || n) && K(ed, e, t, eT, eC),
                    r &&
                      (N && ed.deltaX > 0 && N(ed),
                      R && ed.deltaX < 0 && R(ed),
                      V && V(ed),
                      Y && ed.deltaX < 0 != eh < 0 && Y(ed),
                      (eh = ed.deltaX),
                      (eT[0] = eT[1] = eT[2] = 0)),
                    n &&
                      (F && ed.deltaY > 0 && F(ed),
                      I && ed.deltaY < 0 && I(ed),
                      H && H(ed),
                      z && ed.deltaY < 0 != eg < 0 && z(ed),
                      (eg = ed.deltaY),
                      (eC[0] = eC[1] = eC[2] = 0)),
                    (ec || el) &&
                      (W && W(ed),
                      el && (A && 1 === el && A(ed), M && M(ed), (el = 0)),
                      (ec = !1)),
                    ep && ((ep = !1), 1) && eo && eo(ed),
                    eu && (Z(ed), (eu = !1)),
                    (es = 0));
                },
                onDelta = function (e, t, r) {
                  ((eT[r] += e),
                    (eC[r] += t),
                    ed._vx.update(e),
                    ed._vy.update(t),
                    x ? es || (es = requestAnimationFrame(update)) : update());
                },
                onTouchOrPointerDelta = function (e, t) {
                  (ei &&
                    !ef &&
                    ((ed.axis = ef = Math.abs(e) > Math.abs(t) ? "x" : "y"),
                    (ep = !0)),
                    "y" !== ef && ((eT[2] += e), ed._vx.update(e, !0)),
                    "x" !== ef && ((eC[2] += t), ed._vy.update(t, !0)),
                    x ? es || (es = requestAnimationFrame(update)) : update());
                },
                _onDrag = function (e) {
                  if (!_ignoreCheck(e, 1)) {
                    var t = (e = _getEvent(e, T)).clientX,
                      r = e.clientY,
                      n = t - ed.x,
                      i = r - ed.y,
                      o = ed.isDragging;
                    ((ed.x = t),
                      (ed.y = r),
                      (o ||
                        ((n || i) &&
                          (Math.abs(ed.startX - t) >= g ||
                            Math.abs(ed.startY - r) >= g))) &&
                        ((el = o ? 2 : 1),
                        o || (ed.isDragging = !0),
                        onTouchOrPointerDelta(n, i)));
                  }
                },
                eP = (ed.onPress = function (e) {
                  _ignoreCheck(e, 1) ||
                    (e && e.button) ||
                    ((ed.axis = ef = null),
                    ea.pause(),
                    (ed.isPressed = !0),
                    (e = _getEvent(e)),
                    (eh = eg = 0),
                    (ed.startX = ed.x = e.clientX),
                    (ed.startY = ed.y = e.clientY),
                    ed._vx.reset(),
                    ed._vy.reset(),
                    _addListener(U ? v : ew, d[1], _onDrag, e_, !0),
                    (ed.deltaX = ed.deltaY = 0),
                    B && B(ed));
                }),
                eO = (ed.onRelease = function (e) {
                  if (!_ignoreCheck(e, 1)) {
                    _removeListener(U ? v : ew, d[1], _onDrag, !0);
                    var r = !isNaN(ed.y - ed.startY),
                      i = ed.isDragging,
                      o =
                        i &&
                        (Math.abs(ed.x - ed.startX) > 3 ||
                          Math.abs(ed.y - ed.startY) > 3),
                      s = _getEvent(e);
                    (!o &&
                      r &&
                      (ed._vx.reset(),
                      ed._vy.reset(),
                      T &&
                        en &&
                        t.delayedCall(0.08, function () {
                          if (y() - eE > 300 && !e.defaultPrevented) {
                            if (e.target.click) e.target.click();
                            else if (ew.createEvent) {
                              var t = ew.createEvent("MouseEvents");
                              (t.initMouseEvent(
                                "click",
                                !0,
                                !0,
                                n,
                                1,
                                s.screenX,
                                s.screenY,
                                s.clientX,
                                s.clientY,
                                !1,
                                !1,
                                !1,
                                !1,
                                0,
                                null,
                              ),
                                e.target.dispatchEvent(t));
                            }
                          }
                        })),
                      (ed.isDragging = ed.isGesturing = ed.isPressed = !1),
                      C && i && !U && ea.restart(!0),
                      el && update(),
                      k && i && k(ed),
                      D && D(ed, o));
                  }
                }),
                _onGestureStart = function (e) {
                  return (
                    e.touches &&
                    e.touches.length > 1 &&
                    (ed.isGesturing = !0) &&
                    $(e, ed.isDragging)
                  );
                },
                _onGestureEnd = function () {
                  return ((ed.isGesturing = !1), q(ed));
                },
                onScroll = function (e) {
                  if (!_ignoreCheck(e)) {
                    var t = em(),
                      r = ev();
                    (onDelta((t - ey) * et, (r - eS) * et, 1),
                      (ey = t),
                      (eS = r),
                      C && ea.restart(!0));
                  }
                },
                _onWheel = function (e) {
                  if (!_ignoreCheck(e)) {
                    ((e = _getEvent(e, T)), Z && (eu = !0));
                    var t =
                      (1 === e.deltaMode
                        ? S
                        : 2 === e.deltaMode
                          ? n.innerHeight
                          : 1) * O;
                    (onDelta(e.deltaX * t, e.deltaY * t, 0),
                      C && !U && ea.restart(!0));
                  }
                },
                _onMove = function (e) {
                  if (!_ignoreCheck(e)) {
                    var t = e.clientX,
                      r = e.clientY,
                      n = t - ed.x,
                      i = r - ed.y;
                    ((ed.x = t),
                      (ed.y = r),
                      (ec = !0),
                      C && ea.restart(!0),
                      (n || i) && onTouchOrPointerDelta(n, i));
                  }
                },
                _onHover = function (e) {
                  ((ed.event = e), G(ed));
                },
                _onHoverEnd = function (e) {
                  ((ed.event = e), X(ed));
                },
                _onClick = function (e) {
                  return _ignoreCheck(e) || (_getEvent(e, T) && ee(ed));
                };
              ((ea = ed._dc =
                t
                  .delayedCall(E || 0.25, function () {
                    (ed._vx.reset(), ed._vy.reset(), ea.pause(), C && C(ed));
                  })
                  .pause()),
                (ed.deltaX = ed.deltaY = 0),
                (ed._vx = _getVelocityProp(0, 50, !0)),
                (ed._vy = _getVelocityProp(0, 50, !0)),
                (ed.scrollX = em),
                (ed.scrollY = ev),
                (ed.isDragging = ed.isGesturing = ed.isPressed = !1),
                h(this),
                (ed.enable = function (e) {
                  return (
                    !ed.isEnabled &&
                      (_addListener(eb ? ew : v, "scroll", _onScroll),
                      m.indexOf("scroll") >= 0 &&
                        _addListener(eb ? ew : v, "scroll", onScroll, e_, er),
                      m.indexOf("wheel") >= 0 &&
                        _addListener(v, "wheel", _onWheel, e_, er),
                      ((m.indexOf("touch") >= 0 && a) ||
                        m.indexOf("pointer") >= 0) &&
                        (_addListener(v, d[0], eP, e_, er),
                        _addListener(ew, d[2], eO),
                        _addListener(ew, d[3], eO),
                        en && _addListener(v, "click", clickCapture, !0, !0),
                        ee && _addListener(v, "click", _onClick),
                        $ && _addListener(ew, "gesturestart", _onGestureStart),
                        q && _addListener(ew, "gestureend", _onGestureEnd),
                        G && _addListener(v, l + "enter", _onHover),
                        X && _addListener(v, l + "leave", _onHoverEnd),
                        W && _addListener(v, l + "move", _onMove)),
                      (ed.isEnabled = !0),
                      (ed.isDragging =
                        ed.isGesturing =
                        ed.isPressed =
                        ec =
                        el =
                          !1),
                      ed._vx.reset(),
                      ed._vy.reset(),
                      (ey = em()),
                      (eS = ev()),
                      e && e.type && eP(e),
                      Q && Q(ed)),
                    ed
                  );
                }),
                (ed.disable = function () {
                  ed.isEnabled &&
                    (_.filter(function (e) {
                      return e !== ed && _isViewport(e.target);
                    }).length ||
                      _removeListener(eb ? ew : v, "scroll", _onScroll),
                    ed.isPressed &&
                      (ed._vx.reset(),
                      ed._vy.reset(),
                      _removeListener(U ? v : ew, d[1], _onDrag, !0)),
                    _removeListener(eb ? ew : v, "scroll", onScroll, er),
                    _removeListener(v, "wheel", _onWheel, er),
                    _removeListener(v, d[0], eP, er),
                    _removeListener(ew, d[2], eO),
                    _removeListener(ew, d[3], eO),
                    _removeListener(v, "click", clickCapture, !0),
                    _removeListener(v, "click", _onClick),
                    _removeListener(ew, "gesturestart", _onGestureStart),
                    _removeListener(ew, "gestureend", _onGestureEnd),
                    _removeListener(v, l + "enter", _onHover),
                    _removeListener(v, l + "leave", _onHoverEnd),
                    _removeListener(v, l + "move", _onMove),
                    (ed.isEnabled = ed.isPressed = ed.isDragging = !1),
                    J && J(ed));
                }),
                (ed.kill = ed.revert =
                  function () {
                    ed.disable();
                    var e = _.indexOf(ed);
                    (e >= 0 && _.splice(e, 1), p === ed && (p = 0));
                  }),
                _.push(ed),
                U && _isViewport(v) && (p = ed),
                ed.enable(L));
            }),
            _defineProperties(Observer.prototype, [
              {
                key: "velocityX",
                get: function () {
                  return this._vx.getVelocity();
                },
              },
              {
                key: "velocityY",
                get: function () {
                  return this._vy.getVelocity();
                },
              },
            ]),
            e && _defineProperties(Observer, e),
            Observer
          );
        })();
        ((T.version = "3.13.0"),
          (T.create = function (e) {
            return new T(e);
          }),
          (T.register = _initCore),
          (T.getAll = function () {
            return _.slice();
          }),
          (T.getById = function (e) {
            return _.filter(function (t) {
              return t.vars.id === e;
            })[0];
          }),
          _getGSAP() && t.registerPlugin(T));
        /*!
         * ScrollTrigger 3.13.0
         * https://gsap.com
         *
         * @license Copyright 2008-2025, GreenSock. All rights reserved.
         * Subject to the terms at https://gsap.com/standard-license
         * @author: Jack Doyle, jack@greensock.com
         */ var C,
          E,
          P,
          O,
          L,
          A,
          k,
          M,
          B,
          D,
          N,
          R,
          I,
          F,
          V,
          H,
          K,
          Y,
          z,
          G,
          X,
          W,
          j,
          U,
          $,
          q,
          Z,
          Q,
          J,
          ee,
          et,
          er,
          en,
          ei,
          eo,
          es,
          ea,
          el,
          ec = 1,
          eu = Date.now,
          ep = eu(),
          ef = 0,
          ed = 0,
          _parseClamp = function (e, t, r) {
            var n =
              _isString(e) &&
              ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
            return (
              (r["_" + t + "Clamp"] = n),
              n ? e.substr(6, e.length - 7) : e
            );
          },
          _keepClamp = function (e, t) {
            return t && (!_isString(e) || "clamp(" !== e.substr(0, 6))
              ? "clamp(" + e + ")"
              : e;
          },
          _pointerDownHandler = function () {
            return (F = 1);
          },
          _pointerUpHandler = function () {
            return (F = 0);
          },
          _passThrough = function (e) {
            return e;
          },
          _round = function (e) {
            return Math.round(1e5 * e) / 1e5 || 0;
          },
          _windowExists = function () {
            return "undefined" != typeof window;
          },
          _getGSAP$1 = function () {
            return (
              C ||
              (_windowExists() && (C = window.gsap) && C.registerPlugin && C)
            );
          },
          _isViewport$1 = function (e) {
            return !!~k.indexOf(e);
          },
          _getViewportDimension = function (e) {
            return (
              ("Height" === e ? et : P["inner" + e]) ||
              L["client" + e] ||
              A["client" + e]
            );
          },
          _getBoundsFunc = function (e) {
            return (
              _getProxyProp(e, "getBoundingClientRect") ||
              (_isViewport$1(e)
                ? function () {
                    return ((eK.width = P.innerWidth), (eK.height = et), eK);
                  }
                : function () {
                    return _getBounds(e);
                  })
            );
          },
          _getSizeFunc = function (e, t, r) {
            var n = r.d,
              i = r.d2,
              o = r.a;
            return (o = _getProxyProp(e, "getBoundingClientRect"))
              ? function () {
                  return o()[n];
                }
              : function () {
                  return (t ? _getViewportDimension(i) : e["client" + i]) || 0;
                };
          },
          _maxScroll = function (e, t) {
            var r = t.s,
              n = t.d2,
              i = t.d,
              o = t.a;
            return Math.max(
              0,
              (o = _getProxyProp(e, (r = "scroll" + n)))
                ? o() - _getBoundsFunc(e)()[i]
                : _isViewport$1(e)
                  ? (L[r] || A[r]) - _getViewportDimension(n)
                  : e[r] - e["offset" + n],
            );
          },
          _iterateAutoRefresh = function (e, t) {
            for (var r = 0; r < z.length; r += 3)
              (!t || ~t.indexOf(z[r + 1])) && e(z[r], z[r + 1], z[r + 2]);
          },
          _isString = function (e) {
            return "string" == typeof e;
          },
          _isFunction = function (e) {
            return "function" == typeof e;
          },
          _isNumber = function (e) {
            return "number" == typeof e;
          },
          _isObject = function (e) {
            return "object" == typeof e;
          },
          _endAnimation = function (e, t, r) {
            return e && e.progress(t ? 0 : 1) && r && e.pause();
          },
          _callback = function (e, t) {
            if (e.enabled) {
              var r = e._ctx
                ? e._ctx.add(function () {
                    return t(e);
                  })
                : t(e);
              r && r.totalTime && (e.callbackAnimation = r);
            }
          },
          eh = Math.abs,
          eg = "left",
          e_ = "right",
          em = "bottom",
          ev = "width",
          ey = "height",
          eS = "Right",
          ex = "Left",
          eb = "Bottom",
          ew = "padding",
          eT = "margin",
          eC = "Width",
          eE = "Height",
          _getComputedStyle = function (e) {
            return P.getComputedStyle(e);
          },
          _makePositionable = function (e) {
            var t = _getComputedStyle(e).position;
            e.style.position =
              "absolute" === t || "fixed" === t ? t : "relative";
          },
          _setDefaults = function (e, t) {
            for (var r in t) r in e || (e[r] = t[r]);
            return e;
          },
          _getBounds = function (e, t) {
            var r =
                t &&
                "matrix(1, 0, 0, 1, 0, 0)" !== _getComputedStyle(e)[V] &&
                C.to(e, {
                  x: 0,
                  y: 0,
                  xPercent: 0,
                  yPercent: 0,
                  rotation: 0,
                  rotationX: 0,
                  rotationY: 0,
                  scale: 1,
                  skewX: 0,
                  skewY: 0,
                }).progress(1),
              n = e.getBoundingClientRect();
            return (r && r.progress(0).kill(), n);
          },
          _getSize = function (e, t) {
            var r = t.d2;
            return e["offset" + r] || e["client" + r] || 0;
          },
          _getLabelRatioArray = function (e) {
            var t,
              r = [],
              n = e.labels,
              i = e.duration();
            for (t in n) r.push(n[t] / i);
            return r;
          },
          _snapDirectional = function (e) {
            var t = C.utils.snap(e),
              r =
                Array.isArray(e) &&
                e.slice(0).sort(function (e, t) {
                  return e - t;
                });
            return r
              ? function (e, n, i) {
                  var o;
                  if ((void 0 === i && (i = 0.001), !n)) return t(e);
                  if (n > 0) {
                    for (e -= i, o = 0; o < r.length; o++)
                      if (r[o] >= e) return r[o];
                    return r[o - 1];
                  }
                  for (o = r.length, e += i; o--; ) if (r[o] <= e) return r[o];
                  return r[0];
                }
              : function (r, n, i) {
                  void 0 === i && (i = 0.001);
                  var o = t(r);
                  return !n || Math.abs(o - r) < i || o - r < 0 == n < 0
                    ? o
                    : t(n < 0 ? r - e : r + e);
                };
          },
          _multiListener = function (e, t, r, n) {
            return r.split(",").forEach(function (r) {
              return e(t, r, n);
            });
          },
          _addListener$1 = function (e, t, r, n, i) {
            return e.addEventListener(t, r, { passive: !n, capture: !!i });
          },
          _removeListener$1 = function (e, t, r, n) {
            return e.removeEventListener(t, r, !!n);
          },
          _wheelListener = function (e, t, r) {
            (r = r && r.wheelHandler) &&
              (e(t, "wheel", r), e(t, "touchmove", r));
          },
          eP = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal",
          },
          eO = { toggleActions: "play", anticipatePin: 0 },
          eL = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
          _offsetToPx = function (e, t) {
            if (_isString(e)) {
              var r = e.indexOf("="),
                n = ~r
                  ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1))
                  : 0;
              (~r &&
                (e.indexOf("%") > r && (n *= t / 100),
                (e = e.substr(0, r - 1))),
                (e =
                  n +
                  (e in eL
                    ? eL[e] * t
                    : ~e.indexOf("%")
                      ? (parseFloat(e) * t) / 100
                      : parseFloat(e) || 0)));
            }
            return e;
          },
          _createMarker = function (e, t, r, n, i, o, s, a) {
            var l = i.startColor,
              c = i.endColor,
              u = i.fontSize,
              p = i.indent,
              d = i.fontWeight,
              h = O.createElement("div"),
              g = _isViewport$1(r) || "fixed" === _getProxyProp(r, "pinType"),
              _ = -1 !== e.indexOf("scroller"),
              m = g ? A : r,
              v = -1 !== e.indexOf("start"),
              y = v ? l : c,
              S =
                "border-color:" +
                y +
                ";font-size:" +
                u +
                ";color:" +
                y +
                ";font-weight:" +
                d +
                ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
            return (
              (S += "position:" + ((_ || a) && g ? "fixed;" : "absolute;")),
              (_ || a || !g) &&
                (S += (n === w ? e_ : em) + ":" + (o + parseFloat(p)) + "px;"),
              s &&
                (S +=
                  "box-sizing:border-box;text-align:left;width:" +
                  s.offsetWidth +
                  "px;"),
              (h._isStart = v),
              h.setAttribute(
                "class",
                "gsap-marker-" + e + (t ? " marker-" + t : ""),
              ),
              (h.style.cssText = S),
              (h.innerText = t || 0 === t ? e + "-" + t : e),
              m.children[0]
                ? m.insertBefore(h, m.children[0])
                : m.appendChild(h),
              (h._offset = h["offset" + n.op.d2]),
              _positionMarker(h, 0, n, v),
              h
            );
          },
          _positionMarker = function (e, t, r, n) {
            var i = { display: "block" },
              o = r[n ? "os2" : "p2"],
              s = r[n ? "p2" : "os2"];
            ((e._isFlipped = n),
              (i[r.a + "Percent"] = n ? -100 : 0),
              (i[r.a] = n ? "1px" : 0),
              (i["border" + o + eC] = 1),
              (i["border" + s + eC] = 0),
              (i[r.p] = t + "px"),
              C.set(e, i));
          },
          eA = [],
          ek = {},
          _sync = function () {
            return (
              eu() - ef > 34 && (eo || (eo = requestAnimationFrame(_updateAll)))
            );
          },
          _onScroll$1 = function () {
            (j && j.isPressed && !(j.startX > A.clientWidth)) ||
              (m.cache++,
              j ? eo || (eo = requestAnimationFrame(_updateAll)) : _updateAll(),
              ef || _dispatch("scrollStart"),
              (ef = eu()));
          },
          _setBaseDimensions = function () {
            ((q = P.innerWidth), ($ = P.innerHeight));
          },
          _onResize = function (e) {
            (m.cache++,
              (!0 === e ||
                (!I &&
                  !W &&
                  !O.fullscreenElement &&
                  !O.webkitFullscreenElement &&
                  (!U ||
                    q !== P.innerWidth ||
                    Math.abs(P.innerHeight - $) > 0.25 * P.innerHeight))) &&
                M.restart(!0));
          },
          eM = {},
          eB = [],
          _softRefresh = function _softRefresh() {
            return (
              _removeListener$1(ez, "scrollEnd", _softRefresh) ||
              _refreshAll(!0)
            );
          },
          _dispatch = function (e) {
            return (
              (eM[e] &&
                eM[e].map(function (e) {
                  return e();
                })) ||
              eB
            );
          },
          eD = [],
          _revertRecorded = function (e) {
            for (var t = 0; t < eD.length; t += 5)
              (!e || (eD[t + 4] && eD[t + 4].query === e)) &&
                ((eD[t].style.cssText = eD[t + 1]),
                eD[t].getBBox &&
                  eD[t].setAttribute("transform", eD[t + 2] || ""),
                (eD[t + 3].uncache = 1));
          },
          _revertAll = function (e, t) {
            var r;
            for (H = 0; H < eA.length; H++)
              (r = eA[H]) &&
                (!t || r._ctx === t) &&
                (e ? r.kill(1) : r.revert(!0, !0));
            ((er = !0), t && _revertRecorded(t), t || _dispatch("revert"));
          },
          _clearScrollMemory = function (e, t) {
            (m.cache++,
              (t || !es) &&
                m.forEach(function (e) {
                  return _isFunction(e) && e.cacheID++ && (e.rec = 0);
                }),
              _isString(e) && (P.history.scrollRestoration = J = e));
          },
          eN = 0,
          _queueRefreshAll = function () {
            if (ea !== eN) {
              var e = (ea = eN);
              requestAnimationFrame(function () {
                return e === eN && _refreshAll(!0);
              });
            }
          },
          _refresh100vh = function () {
            (A.appendChild(ee),
              (et = (!j && ee.offsetHeight) || P.innerHeight),
              A.removeChild(ee));
          },
          _hideAllMarkers = function (e) {
            return B(
              ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end",
            ).forEach(function (t) {
              return (t.style.display = e ? "none" : "block");
            });
          },
          _refreshAll = function (e, t) {
            if (
              ((L = O.documentElement),
              (A = O.body),
              (k = [P, O, L, A]),
              ef && !e && !er)
            ) {
              _addListener$1(ez, "scrollEnd", _softRefresh);
              return;
            }
            (_refresh100vh(),
              (es = ez.isRefreshing = !0),
              m.forEach(function (e) {
                return _isFunction(e) && ++e.cacheID && (e.rec = e());
              }));
            var r = _dispatch("refreshInit");
            (G && ez.sort(),
              t || _revertAll(),
              m.forEach(function (e) {
                _isFunction(e) &&
                  (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
              }),
              eA.slice(0).forEach(function (e) {
                return e.refresh();
              }),
              (er = !1),
              eA.forEach(function (e) {
                if (e._subPinOffset && e.pin) {
                  var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                    r = e.pin[t];
                  (e.revert(!0, 1),
                    e.adjustPinSpacing(e.pin[t] - r),
                    e.refresh());
                }
              }),
              (en = 1),
              _hideAllMarkers(!0),
              eA.forEach(function (e) {
                var t = _maxScroll(e.scroller, e._dir),
                  r = "max" === e.vars.end || (e._endClamp && e.end > t),
                  n = e._startClamp && e.start >= t;
                (r || n) &&
                  e.setPositions(
                    n ? t - 1 : e.start,
                    r ? Math.max(n ? t : e.start + 1, t) : e.end,
                    !0,
                  );
              }),
              _hideAllMarkers(!1),
              (en = 0),
              r.forEach(function (e) {
                return e && e.render && e.render(-1);
              }),
              m.forEach(function (e) {
                _isFunction(e) &&
                  (e.smooth &&
                    requestAnimationFrame(function () {
                      return (e.target.style.scrollBehavior = "smooth");
                    }),
                  e.rec && e(e.rec));
              }),
              _clearScrollMemory(J, 1),
              M.pause(),
              eN++,
              (es = 2),
              _updateAll(2),
              eA.forEach(function (e) {
                return _isFunction(e.vars.onRefresh) && e.vars.onRefresh(e);
              }),
              (es = ez.isRefreshing = !1),
              _dispatch("refresh"));
          },
          eR = 0,
          eI = 1,
          _updateAll = function (e) {
            if (2 === e || (!es && !er)) {
              ((ez.isUpdating = !0), el && el.update(0));
              var t = eA.length,
                r = eu(),
                n = r - ep >= 50,
                i = t && eA[0].scroll();
              if (
                ((eI = eR > i ? -1 : 1),
                es || (eR = i),
                n &&
                  (ef &&
                    !F &&
                    r - ef > 200 &&
                    ((ef = 0), _dispatch("scrollEnd")),
                  (N = ep),
                  (ep = r)),
                eI < 0)
              ) {
                for (H = t; H-- > 0; ) eA[H] && eA[H].update(0, n);
                eI = 1;
              } else for (H = 0; H < t; H++) eA[H] && eA[H].update(0, n);
              ez.isUpdating = !1;
            }
            eo = 0;
          },
          eF = [
            eg,
            "top",
            em,
            e_,
            eT + eb,
            eT + eS,
            eT + "Top",
            eT + ex,
            "display",
            "flexShrink",
            "float",
            "zIndex",
            "gridColumnStart",
            "gridColumnEnd",
            "gridRowStart",
            "gridRowEnd",
            "gridArea",
            "justifySelf",
            "alignSelf",
            "placeSelf",
            "order",
          ],
          eV = eF.concat([
            ev,
            ey,
            "boxSizing",
            "max" + eC,
            "max" + eE,
            "position",
            eT,
            ew,
            ew + "Top",
            ew + eS,
            ew + eb,
            ew + ex,
          ]),
          _swapPinOut = function (e, t, r) {
            _setState(r);
            var n = e._gsap;
            if (n.spacerIsNative) _setState(n.spacerState);
            else if (e._gsap.swappedIn) {
              var i = t.parentNode;
              i && (i.insertBefore(e, t), i.removeChild(t));
            }
            e._gsap.swappedIn = !1;
          },
          _swapPinIn = function (e, t, r, n) {
            if (!e._gsap.swappedIn) {
              for (var i, o = eF.length, s = t.style, a = e.style; o--; )
                s[(i = eF[o])] = r[i];
              ((s.position =
                "absolute" === r.position ? "absolute" : "relative"),
                "inline" === r.display && (s.display = "inline-block"),
                (a[em] = a[e_] = "auto"),
                (s.flexBasis = r.flexBasis || "auto"),
                (s.overflow = "visible"),
                (s.boxSizing = "border-box"),
                (s[ev] = _getSize(e, b) + "px"),
                (s[ey] = _getSize(e, w) + "px"),
                (s[ew] = a[eT] = a.top = a[eg] = "0"),
                _setState(n),
                (a[ev] = a["max" + eC] = r[ev]),
                (a[ey] = a["max" + eE] = r[ey]),
                (a[ew] = r[ew]),
                e.parentNode !== t &&
                  (e.parentNode.insertBefore(t, e), t.appendChild(e)),
                (e._gsap.swappedIn = !0));
            }
          },
          eH = /([A-Z])/g,
          _setState = function (e) {
            if (e) {
              var t,
                r,
                n = e.t.style,
                i = e.length,
                o = 0;
              for (
                (e.t._gsap || C.core.getCache(e.t)).uncache = 1;
                o < i;
                o += 2
              )
                ((r = e[o + 1]),
                  (t = e[o]),
                  r
                    ? (n[t] = r)
                    : n[t] &&
                      n.removeProperty(t.replace(eH, "-$1").toLowerCase()));
            }
          },
          _getState = function (e) {
            for (var t = eV.length, r = e.style, n = [], i = 0; i < t; i++)
              n.push(eV[i], r[eV[i]]);
            return ((n.t = e), n);
          },
          _copyState = function (e, t, r) {
            for (var n, i = [], o = e.length, s = r ? 8 : 0; s < o; s += 2)
              ((n = e[s]), i.push(n, n in t ? t[n] : e[s + 1]));
            return ((i.t = e.t), i);
          },
          eK = { left: 0, top: 0 },
          _parsePosition = function (e, t, r, n, i, o, s, a, l, c, u, p, d, h) {
            (_isFunction(e) && (e = e(a)),
              _isString(e) &&
                "max" === e.substr(0, 3) &&
                (e =
                  p +
                  ("=" === e.charAt(4)
                    ? _offsetToPx("0" + e.substr(3), r)
                    : 0)));
            var g,
              _,
              m,
              v = d ? d.time() : 0;
            if ((d && d.seek(0), isNaN(e) || (e = +e), _isNumber(e)))
              (d &&
                (e = C.utils.mapRange(
                  d.scrollTrigger.start,
                  d.scrollTrigger.end,
                  0,
                  p,
                  e,
                )),
                s && _positionMarker(s, r, n, !0));
            else {
              _isFunction(t) && (t = t(a));
              var y,
                S,
                x,
                b,
                w = (e || "0").split(" ");
              ((y = _getBounds((m = _getTarget(t, a) || A)) || {}).left ||
                y.top ||
                "none" !== _getComputedStyle(m).display ||
                ((b = m.style.display),
                (m.style.display = "block"),
                (y = _getBounds(m)),
                b ? (m.style.display = b) : m.style.removeProperty("display")),
                (S = _offsetToPx(w[0], y[n.d])),
                (x = _offsetToPx(w[1] || "0", r)),
                (e = y[n.p] - l[n.p] - c + S + i - x),
                s &&
                  _positionMarker(
                    s,
                    x,
                    n,
                    r - x < 20 || (s._isStart && x > 20),
                  ),
                (r -= r - x));
            }
            if ((h && ((a[h] = e || -0.001), e < 0 && (e = 0)), o)) {
              var T = e + r,
                E = o._isStart;
              ((g = "scroll" + n.d2),
                _positionMarker(
                  o,
                  T,
                  n,
                  (E && T > 20) ||
                    (!E &&
                      (u ? Math.max(A[g], L[g]) : o.parentNode[g]) <= T + 1),
                ),
                u &&
                  ((l = _getBounds(s)),
                  u &&
                    (o.style[n.op.p] = l[n.op.p] - n.op.m - o._offset + "px")));
            }
            return (
              d &&
                m &&
                ((g = _getBounds(m)),
                d.seek(p),
                (_ = _getBounds(m)),
                (d._caScrollDist = g[n.p] - _[n.p]),
                (e = (e / d._caScrollDist) * p)),
              d && d.seek(v),
              d ? e : Math.round(e)
            );
          },
          eY = /(webkit|moz|length|cssText|inset)/i,
          _reparent = function (e, t, r, n) {
            if (e.parentNode !== t) {
              var i,
                o,
                s = e.style;
              if (t === A) {
                for (i in ((e._stOrig = s.cssText), (o = _getComputedStyle(e))))
                  +i ||
                    eY.test(i) ||
                    !o[i] ||
                    "string" != typeof s[i] ||
                    "0" === i ||
                    (s[i] = o[i]);
                ((s.top = r), (s.left = n));
              } else s.cssText = e._stOrig;
              ((C.core.getCache(e).uncache = 1), t.appendChild(e));
            }
          },
          _interruptionTracker = function (e, t, r) {
            var n = t,
              i = n;
            return function (t) {
              var o = Math.round(e());
              return (
                o !== n &&
                  o !== i &&
                  Math.abs(o - n) > 3 &&
                  Math.abs(o - i) > 3 &&
                  ((t = o), r && r()),
                (i = n),
                (n = Math.round(t))
              );
            };
          },
          _shiftMarker = function (e, t, r) {
            var n = {};
            ((n[t.p] = "+=" + r), C.set(e, n));
          },
          _getTweenCreator = function (e, t) {
            var r = _getScrollFunc(e, t),
              n = "_scroll" + t.p2,
              getTween = function getTween(t, i, o, s, a) {
                var l = getTween.tween,
                  c = i.onComplete,
                  u = {};
                o = o || r();
                var p = _interruptionTracker(r, o, function () {
                  (l.kill(), (getTween.tween = 0));
                });
                return (
                  (a = (s && a) || 0),
                  (s = s || t - o),
                  l && l.kill(),
                  (i[n] = t),
                  (i.inherit = !1),
                  (i.modifiers = u),
                  (u[n] = function () {
                    return p(o + s * l.ratio + a * l.ratio * l.ratio);
                  }),
                  (i.onUpdate = function () {
                    (m.cache++, getTween.tween && _updateAll());
                  }),
                  (i.onComplete = function () {
                    ((getTween.tween = 0), c && c.call(l));
                  }),
                  (l = getTween.tween = C.to(e, i))
                );
              };
            return (
              (e[n] = r),
              (r.wheelHandler = function () {
                return (
                  getTween.tween &&
                  getTween.tween.kill() &&
                  (getTween.tween = 0)
                );
              }),
              _addListener$1(e, "wheel", r.wheelHandler),
              ez.isTouch && _addListener$1(e, "touchmove", r.wheelHandler),
              getTween
            );
          },
          ez = (function () {
            function ScrollTrigger(e, t) {
              (E ||
                ScrollTrigger.register(C) ||
                console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
                Q(this),
                this.init(e, t));
            }
            return (
              (ScrollTrigger.prototype.init = function (e, t) {
                if (
                  ((this.progress = this.start = 0),
                  this.vars && this.kill(!0, !0),
                  !ed)
                ) {
                  this.update = this.refresh = this.kill = _passThrough;
                  return;
                }
                var r,
                  n,
                  i,
                  o,
                  s,
                  a,
                  l,
                  c,
                  u,
                  p,
                  d,
                  h,
                  g,
                  _,
                  y,
                  S,
                  x,
                  T,
                  E,
                  k,
                  M,
                  R,
                  V,
                  K,
                  Y,
                  z,
                  W,
                  j,
                  U,
                  $,
                  q,
                  Z,
                  Q,
                  J,
                  ee,
                  et,
                  er,
                  eo,
                  ea,
                  ep,
                  eg,
                  e_ = (e = _setDefaults(
                    _isString(e) || _isNumber(e) || e.nodeType
                      ? { trigger: e }
                      : e,
                    eO,
                  )),
                  em = e_.onUpdate,
                  eL = e_.toggleClass,
                  eM = e_.id,
                  eB = e_.onToggle,
                  eD = e_.onRefresh,
                  eN = e_.scrub,
                  eR = e_.trigger,
                  eF = e_.pin,
                  eV = e_.pinSpacing,
                  eH = e_.invalidateOnRefresh,
                  eY = e_.anticipatePin,
                  ez = e_.onScrubComplete,
                  eG = e_.onSnapComplete,
                  eX = e_.once,
                  eW = e_.snap,
                  ej = e_.pinReparent,
                  eU = e_.pinSpacer,
                  e$ = e_.containerAnimation,
                  eq = e_.fastScrollEnd,
                  eZ = e_.preventOverlaps,
                  eQ =
                    e.horizontal ||
                    (e.containerAnimation && !1 !== e.horizontal)
                      ? b
                      : w,
                  eJ = !eN && 0 !== eN,
                  e0 = _getTarget(e.scroller || P),
                  e1 = C.core.getCache(e0),
                  e2 = _isViewport$1(e0),
                  e3 =
                    ("pinType" in e
                      ? e.pinType
                      : _getProxyProp(e0, "pinType") || (e2 && "fixed")) ===
                    "fixed",
                  e4 = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
                  e5 = eJ && e.toggleActions.split(" "),
                  e6 = "markers" in e ? e.markers : eO.markers,
                  e7 = e2
                    ? 0
                    : parseFloat(
                        _getComputedStyle(e0)["border" + eQ.p2 + eC],
                      ) || 0,
                  e8 = this,
                  e9 =
                    e.onRefreshInit &&
                    function () {
                      return e.onRefreshInit(e8);
                    },
                  te = _getSizeFunc(e0, e2, eQ),
                  tt =
                    !e2 || ~v.indexOf(e0)
                      ? _getBoundsFunc(e0)
                      : function () {
                          return eK;
                        },
                  tr = 0,
                  tn = 0,
                  ti = 0,
                  to = _getScrollFunc(e0, eQ);
                if (
                  ((e8._startClamp = e8._endClamp = !1),
                  (e8._dir = eQ),
                  (eY *= 45),
                  (e8.scroller = e0),
                  (e8.scroll = e$ ? e$.time.bind(e$) : to),
                  (a = to()),
                  (e8.vars = e),
                  (t = t || e.animation),
                  "refreshPriority" in e &&
                    ((G = 1), -9999 === e.refreshPriority && (el = e8)),
                  (e1.tweenScroll = e1.tweenScroll || {
                    top: _getTweenCreator(e0, w),
                    left: _getTweenCreator(e0, b),
                  }),
                  (e8.tweenTo = i = e1.tweenScroll[eQ.p]),
                  (e8.scrubDuration = function (e) {
                    (ee = _isNumber(e) && e)
                      ? J
                        ? J.duration(e)
                        : (J = C.to(t, {
                            ease: "expo",
                            totalProgress: "+=0",
                            inherit: !1,
                            duration: ee,
                            paused: !0,
                            onComplete: function () {
                              return ez && ez(e8);
                            },
                          }))
                      : (J && J.progress(1).kill(), (J = 0));
                  }),
                  t &&
                    ((t.vars.lazy = !1),
                    (t._initted && !e8.isReverted) ||
                      (!1 !== t.vars.immediateRender &&
                        !1 !== e.immediateRender &&
                        t.duration() &&
                        t.render(0, !0, !0)),
                    (e8.animation = t.pause()),
                    (t.scrollTrigger = e8),
                    e8.scrubDuration(eN),
                    (Z = 0),
                    eM || (eM = t.vars.id)),
                  eW &&
                    ((!_isObject(eW) || eW.push) && (eW = { snapTo: eW }),
                    "scrollBehavior" in A.style &&
                      C.set(e2 ? [A, L] : e0, { scrollBehavior: "auto" }),
                    m.forEach(function (e) {
                      return (
                        _isFunction(e) &&
                        e.target === (e2 ? O.scrollingElement || L : e0) &&
                        (e.smooth = !1)
                      );
                    }),
                    (s = _isFunction(eW.snapTo)
                      ? eW.snapTo
                      : "labels" === eW.snapTo
                        ? ((r = t),
                          function (e) {
                            return C.utils.snap(_getLabelRatioArray(r), e);
                          })
                        : "labelsDirectional" === eW.snapTo
                          ? ((n = t),
                            function (e, t) {
                              return _snapDirectional(_getLabelRatioArray(n))(
                                e,
                                t.direction,
                              );
                            })
                          : !1 !== eW.directional
                            ? function (e, t) {
                                return _snapDirectional(eW.snapTo)(
                                  e,
                                  eu() - tn < 500 ? 0 : t.direction,
                                );
                              }
                            : C.utils.snap(eW.snapTo)),
                    (et = _isObject((et = eW.duration || { min: 0.1, max: 2 }))
                      ? D(et.min, et.max)
                      : D(et, et)),
                    (er = C.delayedCall(eW.delay || ee / 2 || 0.1, function () {
                      var e = to(),
                        r = eu() - tn < 500,
                        n = i.tween;
                      if (
                        (r || 10 > Math.abs(e8.getVelocity())) &&
                        !n &&
                        !F &&
                        tr !== e
                      ) {
                        var o,
                          a,
                          l = (e - c) / S,
                          p = t && !eJ ? t.totalProgress() : l,
                          d = r ? 0 : ((p - Q) / (eu() - N)) * 1e3 || 0,
                          h = C.utils.clamp(-l, 1 - l, (eh(d / 2) * d) / 0.185),
                          g = l + (!1 === eW.inertia ? 0 : h),
                          _ = eW,
                          m = _.onStart,
                          v = _.onInterrupt,
                          y = _.onComplete;
                        if (
                          (_isNumber((o = s(g, e8))) || (o = g),
                          (a = Math.max(0, Math.round(c + o * S))),
                          e <= u && e >= c && a !== e)
                        ) {
                          if (n && !n._initted && n.data <= eh(a - e)) return;
                          (!1 === eW.inertia && (h = o - l),
                            i(
                              a,
                              {
                                duration: et(
                                  eh(
                                    (0.185 * Math.max(eh(g - p), eh(o - p))) /
                                      d /
                                      0.05 || 0,
                                  ),
                                ),
                                ease: eW.ease || "power3",
                                data: eh(a - e),
                                onInterrupt: function () {
                                  return er.restart(!0) && v && v(e8);
                                },
                                onComplete: function () {
                                  (e8.update(),
                                    (tr = to()),
                                    t &&
                                      !eJ &&
                                      (J
                                        ? J.resetTo(
                                            "totalProgress",
                                            o,
                                            t._tTime / t._tDur,
                                          )
                                        : t.progress(o)),
                                    (Z = Q =
                                      t && !eJ
                                        ? t.totalProgress()
                                        : e8.progress),
                                    eG && eG(e8),
                                    y && y(e8));
                                },
                              },
                              e,
                              h * S,
                              a - e - h * S,
                            ),
                            m && m(e8, i.tween));
                        }
                      } else e8.isActive && tr !== e && er.restart(!0);
                    }).pause())),
                  eM && (ek[eM] = e8),
                  (eg =
                    (eR = e8.trigger = _getTarget(eR || (!0 !== eF && eF))) &&
                    eR._gsap &&
                    eR._gsap.stRevert) && (eg = eg(e8)),
                  (eF = !0 === eF ? eR : _getTarget(eF)),
                  _isString(eL) && (eL = { targets: eR, className: eL }),
                  eF &&
                    (!1 === eV ||
                      eV === eT ||
                      (eV =
                        (!!eV ||
                          !eF.parentNode ||
                          !eF.parentNode.style ||
                          "flex" !==
                            _getComputedStyle(eF.parentNode).display) &&
                        ew),
                    (e8.pin = eF),
                    (o = C.core.getCache(eF)).spacer
                      ? (x = o.pinState)
                      : (eU &&
                          ((eU = _getTarget(eU)) &&
                            !eU.nodeType &&
                            (eU = eU.current || eU.nativeElement),
                          (o.spacerIsNative = !!eU),
                          eU && (o.spacerState = _getState(eU))),
                        (o.spacer = k = eU || O.createElement("div")),
                        k.classList.add("pin-spacer"),
                        eM && k.classList.add("pin-spacer-" + eM),
                        (o.pinState = x = _getState(eF))),
                    !1 !== e.force3D && C.set(eF, { force3D: !0 }),
                    (e8.spacer = k = o.spacer),
                    (z = (q = _getComputedStyle(eF))[eV + eQ.os2]),
                    (R = C.getProperty(eF)),
                    (V = C.quickSetter(eF, eQ.a, "px")),
                    _swapPinIn(eF, k, q),
                    (E = _getState(eF))),
                  e6)
                ) {
                  ((_ = _isObject(e6) ? _setDefaults(e6, eP) : eP),
                    (h = _createMarker("scroller-start", eM, e0, eQ, _, 0)),
                    (g = _createMarker("scroller-end", eM, e0, eQ, _, 0, h)),
                    (M = h["offset" + eQ.op.d2]));
                  var ts = _getTarget(_getProxyProp(e0, "content") || e0);
                  ((p = this.markerStart =
                    _createMarker("start", eM, ts, eQ, _, M, 0, e$)),
                    (d = this.markerEnd =
                      _createMarker("end", eM, ts, eQ, _, M, 0, e$)),
                    e$ && (ep = C.quickSetter([p, d], eQ.a, "px")),
                    e3 ||
                      (v.length && !0 === _getProxyProp(e0, "fixedMarkers")) ||
                      (_makePositionable(e2 ? A : e0),
                      C.set([h, g], { force3D: !0 }),
                      (j = C.quickSetter(h, eQ.a, "px")),
                      ($ = C.quickSetter(g, eQ.a, "px"))));
                }
                if (e$) {
                  var ta = e$.vars.onUpdate,
                    tl = e$.vars.onUpdateParams;
                  e$.eventCallback("onUpdate", function () {
                    (e8.update(0, 0, 1), ta && ta.apply(e$, tl || []));
                  });
                }
                if (
                  ((e8.previous = function () {
                    return eA[eA.indexOf(e8) - 1];
                  }),
                  (e8.next = function () {
                    return eA[eA.indexOf(e8) + 1];
                  }),
                  (e8.revert = function (e, r) {
                    if (!r) return e8.kill(!0);
                    var n = !1 !== e || !e8.enabled,
                      i = I;
                    n !== e8.isReverted &&
                      (n &&
                        ((eo = Math.max(to(), e8.scroll.rec || 0)),
                        (ti = e8.progress),
                        (ea = t && t.progress())),
                      p &&
                        [p, d, h, g].forEach(function (e) {
                          return (e.style.display = n ? "none" : "block");
                        }),
                      n && ((I = e8), e8.update(n)),
                      !eF ||
                        (ej && e8.isActive) ||
                        (n
                          ? _swapPinOut(eF, k, x)
                          : _swapPinIn(eF, k, _getComputedStyle(eF), W)),
                      n || e8.update(n),
                      (I = i),
                      (e8.isReverted = n));
                  }),
                  (e8.refresh = function (r, n, o, s) {
                    if ((!I && e8.enabled) || n) {
                      if (eF && r && ef) {
                        _addListener$1(
                          ScrollTrigger,
                          "scrollEnd",
                          _softRefresh,
                        );
                        return;
                      }
                      (!es && e9 && e9(e8),
                        (I = e8),
                        i.tween && !o && (i.tween.kill(), (i.tween = 0)),
                        J && J.pause(),
                        eH &&
                          t &&
                          (t.revert({ kill: !1 }).invalidate(),
                          t.getChildren &&
                            t.getChildren(!0, !0, !1).forEach(function (e) {
                              return (
                                e.vars.immediateRender && e.render(0, !0, !0)
                              );
                            })),
                        e8.isReverted || e8.revert(!0, !0),
                        (e8._subPinOffset = !1));
                      var _,
                        m,
                        v,
                        P,
                        M,
                        B,
                        D,
                        N,
                        F,
                        V,
                        H,
                        z,
                        G,
                        j = te(),
                        $ = tt(),
                        q = e$ ? e$.duration() : _maxScroll(e0, eQ),
                        Z = S <= 0.01 || !S,
                        Q = 0,
                        ee = s || 0,
                        et = _isObject(o) ? o.end : e.end,
                        ei = e.endTrigger || eR,
                        el = _isObject(o)
                          ? o.start
                          : e.start ||
                            (0 !== e.start && eR ? (eF ? "0 0" : "0 100%") : 0),
                        ec = (e8.pinnedContainer =
                          e.pinnedContainer &&
                          _getTarget(e.pinnedContainer, e8)),
                        ep = (eR && Math.max(0, eA.indexOf(e8))) || 0,
                        ed = ep;
                      for (
                        e6 &&
                        _isObject(o) &&
                        ((z = C.getProperty(h, eQ.p)),
                        (G = C.getProperty(g, eQ.p)));
                        ed-- > 0;
                      )
                        ((B = eA[ed]).end || B.refresh(0, 1) || (I = e8),
                          (D = B.pin) &&
                            (D === eR || D === eF || D === ec) &&
                            !B.isReverted &&
                            (V || (V = []), V.unshift(B), B.revert(!0, !0)),
                          B !== eA[ed] && (ep--, ed--));
                      for (
                        _isFunction(el) && (el = el(e8)),
                          c =
                            _parsePosition(
                              (el = _parseClamp(el, "start", e8)),
                              eR,
                              j,
                              eQ,
                              to(),
                              p,
                              h,
                              e8,
                              $,
                              e7,
                              e3,
                              q,
                              e$,
                              e8._startClamp && "_startClamp",
                            ) || (eF ? -0.001 : 0),
                          _isFunction(et) && (et = et(e8)),
                          _isString(et) &&
                            !et.indexOf("+=") &&
                            (~et.indexOf(" ")
                              ? (et =
                                  (_isString(el) ? el.split(" ")[0] : "") + et)
                              : ((Q = _offsetToPx(et.substr(2), j)),
                                (et = _isString(el)
                                  ? el
                                  : (e$
                                      ? C.utils.mapRange(
                                          0,
                                          e$.duration(),
                                          e$.scrollTrigger.start,
                                          e$.scrollTrigger.end,
                                          c,
                                        )
                                      : c) + Q),
                                (ei = eR))),
                          et = _parseClamp(et, "end", e8),
                          u =
                            Math.max(
                              c,
                              _parsePosition(
                                et || (ei ? "100% 0" : q),
                                ei,
                                j,
                                eQ,
                                to() + Q,
                                d,
                                g,
                                e8,
                                $,
                                e7,
                                e3,
                                q,
                                e$,
                                e8._endClamp && "_endClamp",
                              ),
                            ) || -0.001,
                          Q = 0,
                          ed = ep;
                        ed--;
                      )
                        (D = (B = eA[ed]).pin) &&
                          B.start - B._pinPush <= c &&
                          !e$ &&
                          B.end > 0 &&
                          ((_ =
                            B.end -
                            (e8._startClamp ? Math.max(0, B.start) : B.start)),
                          ((D === eR && B.start - B._pinPush < c) ||
                            D === ec) &&
                            isNaN(el) &&
                            (Q += _ * (1 - B.progress)),
                          D === eF && (ee += _));
                      if (
                        ((c += Q),
                        (u += Q),
                        e8._startClamp && (e8._startClamp += Q),
                        e8._endClamp &&
                          !es &&
                          ((e8._endClamp = u || -0.001),
                          (u = Math.min(u, _maxScroll(e0, eQ)))),
                        (S = u - c || ((c -= 0.01) && 0.001)),
                        Z &&
                          (ti = C.utils.clamp(
                            0,
                            1,
                            C.utils.normalize(c, u, eo),
                          )),
                        (e8._pinPush = ee),
                        p &&
                          Q &&
                          (((_ = {})[eQ.a] = "+=" + Q),
                          ec && (_[eQ.p] = "-=" + to()),
                          C.set([p, d], _)),
                        eF && !(en && e8.end >= _maxScroll(e0, eQ)))
                      )
                        ((_ = _getComputedStyle(eF)),
                          (P = eQ === w),
                          (v = to()),
                          (K = parseFloat(R(eQ.a)) + ee),
                          !q &&
                            u > 1 &&
                            ((H = {
                              style: (H = (e2 ? O.scrollingElement || L : e0)
                                .style),
                              value: H["overflow" + eQ.a.toUpperCase()],
                            }),
                            e2 &&
                              "scroll" !==
                                _getComputedStyle(A)[
                                  "overflow" + eQ.a.toUpperCase()
                                ] &&
                              (H.style["overflow" + eQ.a.toUpperCase()] =
                                "scroll")),
                          _swapPinIn(eF, k, _),
                          (E = _getState(eF)),
                          (m = _getBounds(eF, !0)),
                          (N = e3 && _getScrollFunc(e0, P ? b : w)()),
                          eV
                            ? (((W = [eV + eQ.os2, S + ee + "px"]).t = k),
                              (ed =
                                eV === ew ? _getSize(eF, eQ) + S + ee : 0) &&
                                (W.push(eQ.d, ed + "px"),
                                "auto" !== k.style.flexBasis &&
                                  (k.style.flexBasis = ed + "px")),
                              _setState(W),
                              ec &&
                                eA.forEach(function (e) {
                                  e.pin === ec &&
                                    !1 !== e.vars.pinSpacing &&
                                    (e._subPinOffset = !0);
                                }),
                              e3 && to(eo))
                            : (ed = _getSize(eF, eQ)) &&
                              "auto" !== k.style.flexBasis &&
                              (k.style.flexBasis = ed + "px"),
                          e3 &&
                            (((M = {
                              top: m.top + (P ? v - c : N) + "px",
                              left: m.left + (P ? N : v - c) + "px",
                              boxSizing: "border-box",
                              position: "fixed",
                            })[ev] = M["max" + eC] =
                              Math.ceil(m.width) + "px"),
                            (M[ey] = M["max" + eE] =
                              Math.ceil(m.height) + "px"),
                            (M[eT] =
                              M[eT + "Top"] =
                              M[eT + eS] =
                              M[eT + eb] =
                              M[eT + ex] =
                                "0"),
                            (M[ew] = _[ew]),
                            (M[ew + "Top"] = _[ew + "Top"]),
                            (M[ew + eS] = _[ew + eS]),
                            (M[ew + eb] = _[ew + eb]),
                            (M[ew + ex] = _[ew + ex]),
                            (T = _copyState(x, M, ej)),
                            es && to(0)),
                          t
                            ? ((F = t._initted),
                              X(1),
                              t.render(t.duration(), !0, !0),
                              (Y = R(eQ.a) - K + S + ee),
                              (U = Math.abs(S - Y) > 1),
                              e3 && U && T.splice(T.length - 2, 2),
                              t.render(0, !0, !0),
                              F || t.invalidate(!0),
                              t.parent || t.totalTime(t.totalTime()),
                              X(0))
                            : (Y = S),
                          H &&
                            (H.value
                              ? (H.style["overflow" + eQ.a.toUpperCase()] =
                                  H.value)
                              : H.style.removeProperty("overflow-" + eQ.a)));
                      else if (eR && to() && !e$)
                        for (m = eR.parentNode; m && m !== A; )
                          (m._pinOffset &&
                            ((c -= m._pinOffset), (u -= m._pinOffset)),
                            (m = m.parentNode));
                      (V &&
                        V.forEach(function (e) {
                          return e.revert(!1, !0);
                        }),
                        (e8.start = c),
                        (e8.end = u),
                        (a = l = es ? eo : to()),
                        e$ || es || (a < eo && to(eo), (e8.scroll.rec = 0)),
                        e8.revert(!1, !0),
                        (tn = eu()),
                        er && ((tr = -1), er.restart(!0)),
                        (I = 0),
                        t &&
                          eJ &&
                          (t._initted || ea) &&
                          t.progress() !== ea &&
                          t.progress(ea || 0, !0).render(t.time(), !0, !0),
                        (Z ||
                          ti !== e8.progress ||
                          e$ ||
                          eH ||
                          (t && !t._initted)) &&
                          (t &&
                            !eJ &&
                            (t._initted ||
                              ti ||
                              !1 !== t.vars.immediateRender) &&
                            t.totalProgress(
                              e$ && c < -0.001 && !ti
                                ? C.utils.normalize(c, u, 0)
                                : ti,
                              !0,
                            ),
                          (e8.progress = Z || (a - c) / S === ti ? 0 : ti)),
                        eF &&
                          eV &&
                          (k._pinOffset = Math.round(e8.progress * Y)),
                        J && J.invalidate(),
                        isNaN(z) ||
                          ((z -= C.getProperty(h, eQ.p)),
                          (G -= C.getProperty(g, eQ.p)),
                          _shiftMarker(h, eQ, z),
                          _shiftMarker(p, eQ, z - (s || 0)),
                          _shiftMarker(g, eQ, G),
                          _shiftMarker(d, eQ, G - (s || 0))),
                        Z && !es && e8.update(),
                        !eD || es || y || ((y = !0), eD(e8), (y = !1)));
                    }
                  }),
                  (e8.getVelocity = function () {
                    return ((to() - l) / (eu() - N)) * 1e3 || 0;
                  }),
                  (e8.endAnimation = function () {
                    (_endAnimation(e8.callbackAnimation),
                      t &&
                        (J
                          ? J.progress(1)
                          : t.paused()
                            ? eJ || _endAnimation(t, e8.direction < 0, 1)
                            : _endAnimation(t, t.reversed())));
                  }),
                  (e8.labelToScroll = function (e) {
                    return (
                      (t &&
                        t.labels &&
                        (c || e8.refresh() || c) +
                          (t.labels[e] / t.duration()) * S) ||
                      0
                    );
                  }),
                  (e8.getTrailing = function (e) {
                    var t = eA.indexOf(e8),
                      r =
                        e8.direction > 0
                          ? eA.slice(0, t).reverse()
                          : eA.slice(t + 1);
                    return (
                      _isString(e)
                        ? r.filter(function (t) {
                            return t.vars.preventOverlaps === e;
                          })
                        : r
                    ).filter(function (e) {
                      return e8.direction > 0 ? e.end <= c : e.start >= u;
                    });
                  }),
                  (e8.update = function (e, r, n) {
                    if (!e$ || n || e) {
                      var o,
                        s,
                        p,
                        d,
                        g,
                        _,
                        m,
                        v = !0 === es ? eo : e8.scroll(),
                        y = e ? 0 : (v - c) / S,
                        x = y < 0 ? 0 : y > 1 ? 1 : y || 0,
                        b = e8.progress;
                      if (
                        (r &&
                          ((l = a),
                          (a = e$ ? to() : v),
                          eW &&
                            ((Q = Z), (Z = t && !eJ ? t.totalProgress() : x))),
                        eY &&
                          eF &&
                          !I &&
                          !ec &&
                          ef &&
                          (!x && c < v + ((v - l) / (eu() - N)) * eY
                            ? (x = 1e-4)
                            : 1 === x &&
                              u > v + ((v - l) / (eu() - N)) * eY &&
                              (x = 0.9999)),
                        x !== b && e8.enabled)
                      ) {
                        if (
                          ((d =
                            (g =
                              (o = e8.isActive = !!x && x < 1) !=
                              (!!b && b < 1)) || !!x != !!b),
                          (e8.direction = x > b ? 1 : -1),
                          (e8.progress = x),
                          d &&
                            !I &&
                            ((s = x && !b ? 0 : 1 === x ? 1 : 1 === b ? 2 : 3),
                            eJ &&
                              ((p =
                                (!g && "none" !== e5[s + 1] && e5[s + 1]) ||
                                e5[s]),
                              (m =
                                t &&
                                ("complete" === p ||
                                  "reset" === p ||
                                  p in t)))),
                          eZ &&
                            (g || m) &&
                            (m || eN || !t) &&
                            (_isFunction(eZ)
                              ? eZ(e8)
                              : e8.getTrailing(eZ).forEach(function (e) {
                                  return e.endAnimation();
                                })),
                          !eJ &&
                            (!J || I || ec
                              ? t && t.totalProgress(x, !!(I && (tn || e)))
                              : (J._dp._time - J._start !== J._time &&
                                  J.render(J._dp._time - J._start),
                                J.resetTo
                                  ? J.resetTo(
                                      "totalProgress",
                                      x,
                                      t._tTime / t._tDur,
                                    )
                                  : ((J.vars.totalProgress = x),
                                    J.invalidate().restart()))),
                          eF)
                        ) {
                          if ((e && eV && (k.style[eV + eQ.os2] = z), e3)) {
                            if (d) {
                              if (
                                ((_ =
                                  !e &&
                                  x > b &&
                                  u + 1 > v &&
                                  v + 1 >= _maxScroll(e0, eQ)),
                                ej)
                              ) {
                                if (!e && (o || _)) {
                                  var C = _getBounds(eF, !0),
                                    P = v - c;
                                  _reparent(
                                    eF,
                                    A,
                                    C.top + (eQ === w ? P : 0) + "px",
                                    C.left + (eQ === w ? 0 : P) + "px",
                                  );
                                } else _reparent(eF, k);
                              }
                              (_setState(o || _ ? T : E),
                                (U && x < 1 && o) ||
                                  V(K + (1 !== x || _ ? 0 : Y)));
                            }
                          } else V(_round(K + Y * x));
                        }
                        (!eW || i.tween || I || ec || er.restart(!0),
                          eL &&
                            (g || (eX && x && (x < 1 || !ei))) &&
                            B(eL.targets).forEach(function (e) {
                              return e.classList[o || eX ? "add" : "remove"](
                                eL.className,
                              );
                            }),
                          !em || eJ || e || em(e8),
                          d && !I
                            ? (eJ &&
                                (m &&
                                  ("complete" === p
                                    ? t.pause().totalProgress(1)
                                    : "reset" === p
                                      ? t.restart(!0).pause()
                                      : "restart" === p
                                        ? t.restart(!0)
                                        : t[p]()),
                                em && em(e8)),
                              (g || !ei) &&
                                (eB && g && _callback(e8, eB),
                                e4[s] && _callback(e8, e4[s]),
                                eX && (1 === x ? e8.kill(!1, 1) : (e4[s] = 0)),
                                !g &&
                                  e4[(s = 1 === x ? 1 : 3)] &&
                                  _callback(e8, e4[s])),
                              eq &&
                                !o &&
                                Math.abs(e8.getVelocity()) >
                                  (_isNumber(eq) ? eq : 2500) &&
                                (_endAnimation(e8.callbackAnimation),
                                J
                                  ? J.progress(1)
                                  : _endAnimation(
                                      t,
                                      "reverse" === p ? 1 : !x,
                                      1,
                                    )))
                            : eJ && em && !I && em(e8));
                      }
                      if ($) {
                        var O = e$
                          ? (v / e$.duration()) * (e$._caScrollDist || 0)
                          : v;
                        (j(O + (h._isFlipped ? 1 : 0)), $(O));
                      }
                      ep && ep((-v / e$.duration()) * (e$._caScrollDist || 0));
                    }
                  }),
                  (e8.enable = function (e, t) {
                    e8.enabled ||
                      ((e8.enabled = !0),
                      _addListener$1(e0, "resize", _onResize),
                      e2 || _addListener$1(e0, "scroll", _onScroll$1),
                      e9 && _addListener$1(ScrollTrigger, "refreshInit", e9),
                      !1 !== e && ((e8.progress = ti = 0), (a = l = tr = to())),
                      !1 !== t && e8.refresh());
                  }),
                  (e8.getTween = function (e) {
                    return e && i ? i.tween : J;
                  }),
                  (e8.setPositions = function (e, t, r, n) {
                    if (e$) {
                      var i = e$.scrollTrigger,
                        o = e$.duration(),
                        s = i.end - i.start;
                      ((e = i.start + (s * e) / o),
                        (t = i.start + (s * t) / o));
                    }
                    (e8.refresh(
                      !1,
                      !1,
                      {
                        start: _keepClamp(e, r && !!e8._startClamp),
                        end: _keepClamp(t, r && !!e8._endClamp),
                      },
                      n,
                    ),
                      e8.update());
                  }),
                  (e8.adjustPinSpacing = function (e) {
                    if (W && e) {
                      var t = W.indexOf(eQ.d) + 1;
                      ((W[t] = parseFloat(W[t]) + e + "px"),
                        (W[1] = parseFloat(W[1]) + e + "px"),
                        _setState(W));
                    }
                  }),
                  (e8.disable = function (e, t) {
                    if (
                      e8.enabled &&
                      (!1 !== e && e8.revert(!0, !0),
                      (e8.enabled = e8.isActive = !1),
                      t || (J && J.pause()),
                      (eo = 0),
                      o && (o.uncache = 1),
                      e9 && _removeListener$1(ScrollTrigger, "refreshInit", e9),
                      er &&
                        (er.pause(),
                        i.tween && i.tween.kill() && (i.tween = 0)),
                      !e2)
                    ) {
                      for (var r = eA.length; r--; )
                        if (eA[r].scroller === e0 && eA[r] !== e8) return;
                      (_removeListener$1(e0, "resize", _onResize),
                        e2 || _removeListener$1(e0, "scroll", _onScroll$1));
                    }
                  }),
                  (e8.kill = function (r, n) {
                    (e8.disable(r, n),
                      J && !n && J.kill(),
                      eM && delete ek[eM]);
                    var i = eA.indexOf(e8);
                    (i >= 0 && eA.splice(i, 1),
                      i === H && eI > 0 && H--,
                      (i = 0),
                      eA.forEach(function (e) {
                        return e.scroller === e8.scroller && (i = 1);
                      }),
                      i || es || (e8.scroll.rec = 0),
                      t &&
                        ((t.scrollTrigger = null),
                        r && t.revert({ kill: !1 }),
                        n || t.kill()),
                      p &&
                        [p, d, h, g].forEach(function (e) {
                          return e.parentNode && e.parentNode.removeChild(e);
                        }),
                      el === e8 && (el = 0),
                      eF &&
                        (o && (o.uncache = 1),
                        (i = 0),
                        eA.forEach(function (e) {
                          return e.pin === eF && i++;
                        }),
                        i || (o.spacer = 0)),
                      e.onKill && e.onKill(e8));
                  }),
                  eA.push(e8),
                  e8.enable(!1, !1),
                  eg && eg(e8),
                  t && t.add && !S)
                ) {
                  var tc = e8.update;
                  ((e8.update = function () {
                    ((e8.update = tc), m.cache++, c || u || e8.refresh());
                  }),
                    C.delayedCall(0.01, e8.update),
                    (S = 0.01),
                    (c = u = 0));
                } else e8.refresh();
                eF && _queueRefreshAll();
              }),
              (ScrollTrigger.register = function (e) {
                return (
                  E ||
                    ((C = e || _getGSAP$1()),
                    _windowExists() &&
                      window.document &&
                      ScrollTrigger.enable(),
                    (E = ed)),
                  E
                );
              }),
              (ScrollTrigger.defaults = function (e) {
                if (e) for (var t in e) eO[t] = e[t];
                return eO;
              }),
              (ScrollTrigger.disable = function (e, t) {
                ((ed = 0),
                  eA.forEach(function (r) {
                    return r[t ? "kill" : "disable"](e);
                  }),
                  _removeListener$1(P, "wheel", _onScroll$1),
                  _removeListener$1(O, "scroll", _onScroll$1),
                  clearInterval(R),
                  _removeListener$1(O, "touchcancel", _passThrough),
                  _removeListener$1(A, "touchstart", _passThrough),
                  _multiListener(
                    _removeListener$1,
                    O,
                    "pointerdown,touchstart,mousedown",
                    _pointerDownHandler,
                  ),
                  _multiListener(
                    _removeListener$1,
                    O,
                    "pointerup,touchend,mouseup",
                    _pointerUpHandler,
                  ),
                  M.kill(),
                  _iterateAutoRefresh(_removeListener$1));
                for (var r = 0; r < m.length; r += 3)
                  (_wheelListener(_removeListener$1, m[r], m[r + 1]),
                    _wheelListener(_removeListener$1, m[r], m[r + 2]));
              }),
              (ScrollTrigger.enable = function () {
                if (
                  ((P = window),
                  (L = (O = document).documentElement),
                  (A = O.body),
                  C &&
                    ((B = C.utils.toArray),
                    (D = C.utils.clamp),
                    (Q = C.core.context || _passThrough),
                    (X = C.core.suppressOverwrites || _passThrough),
                    (J = P.history.scrollRestoration || "auto"),
                    (eR = P.pageYOffset || 0),
                    C.core.globals("ScrollTrigger", ScrollTrigger),
                    A))
                ) {
                  ((ed = 1),
                    ((ee = document.createElement("div")).style.height =
                      "100vh"),
                    (ee.style.position = "absolute"),
                    _refresh100vh(),
                    (function _rafBugFix() {
                      return ed && requestAnimationFrame(_rafBugFix);
                    })(),
                    T.register(C),
                    (ScrollTrigger.isTouch = T.isTouch),
                    (Z =
                      T.isTouch &&
                      /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                    (U = 1 === T.isTouch),
                    _addListener$1(P, "wheel", _onScroll$1),
                    (k = [P, O, L, A]),
                    C.matchMedia
                      ? ((ScrollTrigger.matchMedia = function (e) {
                          var t,
                            r = C.matchMedia();
                          for (t in e) r.add(t, e[t]);
                          return r;
                        }),
                        C.addEventListener("matchMediaInit", function () {
                          return _revertAll();
                        }),
                        C.addEventListener("matchMediaRevert", function () {
                          return _revertRecorded();
                        }),
                        C.addEventListener("matchMedia", function () {
                          (_refreshAll(0, 1), _dispatch("matchMedia"));
                        }),
                        C.matchMedia().add(
                          "(orientation: portrait)",
                          function () {
                            return (_setBaseDimensions(), _setBaseDimensions);
                          },
                        ))
                      : console.warn("Requires GSAP 3.11.0 or later"),
                    _setBaseDimensions(),
                    _addListener$1(O, "scroll", _onScroll$1));
                  var e,
                    t,
                    r = A.hasAttribute("style"),
                    n = A.style,
                    i = n.borderTopStyle,
                    o = C.core.Animation.prototype;
                  for (
                    o.revert ||
                      Object.defineProperty(o, "revert", {
                        value: function () {
                          return this.time(-0.01, !0);
                        },
                      }),
                      n.borderTopStyle = "solid",
                      e = _getBounds(A),
                      w.m = Math.round(e.top + w.sc()) || 0,
                      b.m = Math.round(e.left + b.sc()) || 0,
                      i
                        ? (n.borderTopStyle = i)
                        : n.removeProperty("border-top-style"),
                      r ||
                        (A.setAttribute("style", ""),
                        A.removeAttribute("style")),
                      R = setInterval(_sync, 250),
                      C.delayedCall(0.5, function () {
                        return (ec = 0);
                      }),
                      _addListener$1(O, "touchcancel", _passThrough),
                      _addListener$1(A, "touchstart", _passThrough),
                      _multiListener(
                        _addListener$1,
                        O,
                        "pointerdown,touchstart,mousedown",
                        _pointerDownHandler,
                      ),
                      _multiListener(
                        _addListener$1,
                        O,
                        "pointerup,touchend,mouseup",
                        _pointerUpHandler,
                      ),
                      V = C.utils.checkPrefix("transform"),
                      eV.push(V),
                      E = eu(),
                      M = C.delayedCall(0.2, _refreshAll).pause(),
                      z = [
                        O,
                        "visibilitychange",
                        function () {
                          var e = P.innerWidth,
                            t = P.innerHeight;
                          O.hidden
                            ? ((K = e), (Y = t))
                            : (K !== e || Y !== t) && _onResize();
                        },
                        O,
                        "DOMContentLoaded",
                        _refreshAll,
                        P,
                        "load",
                        _refreshAll,
                        P,
                        "resize",
                        _onResize,
                      ],
                      _iterateAutoRefresh(_addListener$1),
                      eA.forEach(function (e) {
                        return e.enable(0, 1);
                      }),
                      t = 0;
                    t < m.length;
                    t += 3
                  )
                    (_wheelListener(_removeListener$1, m[t], m[t + 1]),
                      _wheelListener(_removeListener$1, m[t], m[t + 2]));
                }
              }),
              (ScrollTrigger.config = function (e) {
                "limitCallbacks" in e && (ei = !!e.limitCallbacks);
                var t = e.syncInterval;
                ((t && clearInterval(R)) || ((R = t) && setInterval(_sync, t)),
                  "ignoreMobileResize" in e &&
                    (U = 1 === ScrollTrigger.isTouch && e.ignoreMobileResize),
                  "autoRefreshEvents" in e &&
                    (_iterateAutoRefresh(_removeListener$1) ||
                      _iterateAutoRefresh(
                        _addListener$1,
                        e.autoRefreshEvents || "none",
                      ),
                    (W = -1 === (e.autoRefreshEvents + "").indexOf("resize"))));
              }),
              (ScrollTrigger.scrollerProxy = function (e, t) {
                var r = _getTarget(e),
                  n = m.indexOf(r),
                  i = _isViewport$1(r);
                (~n && m.splice(n, i ? 6 : 2),
                  t && (i ? v.unshift(P, t, A, t, L, t) : v.unshift(r, t)));
              }),
              (ScrollTrigger.clearMatchMedia = function (e) {
                eA.forEach(function (t) {
                  return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0);
                });
              }),
              (ScrollTrigger.isInViewport = function (e, t, r) {
                var n = (
                    _isString(e) ? _getTarget(e) : e
                  ).getBoundingClientRect(),
                  i = n[r ? ev : ey] * t || 0;
                return r
                  ? n.right - i > 0 && n.left + i < P.innerWidth
                  : n.bottom - i > 0 && n.top + i < P.innerHeight;
              }),
              (ScrollTrigger.positionInViewport = function (e, t, r) {
                _isString(e) && (e = _getTarget(e));
                var n = e.getBoundingClientRect(),
                  i = n[r ? ev : ey],
                  o =
                    null == t
                      ? i / 2
                      : t in eL
                        ? eL[t] * i
                        : ~t.indexOf("%")
                          ? (parseFloat(t) * i) / 100
                          : parseFloat(t) || 0;
                return r
                  ? (n.left + o) / P.innerWidth
                  : (n.top + o) / P.innerHeight;
              }),
              (ScrollTrigger.killAll = function (e) {
                if (
                  (eA.slice(0).forEach(function (e) {
                    return "ScrollSmoother" !== e.vars.id && e.kill();
                  }),
                  !0 !== e)
                ) {
                  var t = eM.killAll || [];
                  ((eM = {}),
                    t.forEach(function (e) {
                      return e();
                    }));
                }
              }),
              ScrollTrigger
            );
          })();
        ((ez.version = "3.13.0"),
          (ez.saveStyles = function (e) {
            return e
              ? B(e).forEach(function (e) {
                  if (e && e.style) {
                    var t = eD.indexOf(e);
                    (t >= 0 && eD.splice(t, 5),
                      eD.push(
                        e,
                        e.style.cssText,
                        e.getBBox && e.getAttribute("transform"),
                        C.core.getCache(e),
                        Q(),
                      ));
                  }
                })
              : eD;
          }),
          (ez.revert = function (e, t) {
            return _revertAll(!e, t);
          }),
          (ez.create = function (e, t) {
            return new ez(e, t);
          }),
          (ez.refresh = function (e) {
            return e ? _onResize(!0) : (E || ez.register()) && _refreshAll(!0);
          }),
          (ez.update = function (e) {
            return ++m.cache && _updateAll(!0 === e ? 2 : 0);
          }),
          (ez.clearScrollMemory = _clearScrollMemory),
          (ez.maxScroll = function (e, t) {
            return _maxScroll(e, t ? b : w);
          }),
          (ez.getScrollFunc = function (e, t) {
            return _getScrollFunc(_getTarget(e), t ? b : w);
          }),
          (ez.getById = function (e) {
            return ek[e];
          }),
          (ez.getAll = function () {
            return eA.filter(function (e) {
              return "ScrollSmoother" !== e.vars.id;
            });
          }),
          (ez.isScrolling = function () {
            return !!ef;
          }),
          (ez.snapDirectional = _snapDirectional),
          (ez.addEventListener = function (e, t) {
            var r = eM[e] || (eM[e] = []);
            ~r.indexOf(t) || r.push(t);
          }),
          (ez.removeEventListener = function (e, t) {
            var r = eM[e],
              n = r && r.indexOf(t);
            n >= 0 && r.splice(n, 1);
          }),
          (ez.batch = function (e, t) {
            var r,
              n = [],
              i = {},
              o = t.interval || 0.016,
              s = t.batchMax || 1e9,
              proxyCallback = function (e, t) {
                var r = [],
                  n = [],
                  i = C.delayedCall(o, function () {
                    (t(r, n), (r = []), (n = []));
                  }).pause();
                return function (e) {
                  (r.length || i.restart(!0),
                    r.push(e.trigger),
                    n.push(e),
                    s <= r.length && i.progress(1));
                };
              };
            for (r in t)
              i[r] =
                "on" === r.substr(0, 2) &&
                _isFunction(t[r]) &&
                "onRefreshInit" !== r
                  ? proxyCallback(r, t[r])
                  : t[r];
            return (
              _isFunction(s) &&
                ((s = s()),
                _addListener$1(ez, "refresh", function () {
                  return (s = t.batchMax());
                })),
              B(e).forEach(function (e) {
                var t = {};
                for (r in i) t[r] = i[r];
                ((t.trigger = e), n.push(ez.create(t)));
              }),
              n
            );
          }));
        var eG,
          _clampScrollAndGetDurationMultiplier = function (e, t, r, n) {
            return (
              t > n ? e(n) : t < 0 && e(0),
              r > n ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1
            );
          },
          _allowNativePanning = function _allowNativePanning(e, t) {
            (!0 === t
              ? e.style.removeProperty("touch-action")
              : (e.style.touchAction =
                  !0 === t
                    ? "auto"
                    : t
                      ? "pan-" + t + (T.isTouch ? " pinch-zoom" : "")
                      : "none"),
              e === L && _allowNativePanning(A, t));
          },
          eX = { auto: 1, scroll: 1 },
          _nestedScroll = function (e) {
            var t,
              r = e.event,
              n = e.target,
              i = e.axis,
              o = (r.changedTouches ? r.changedTouches[0] : r).target,
              s = o._gsap || C.core.getCache(o),
              a = eu();
            if (!s._isScrollT || a - s._isScrollT > 2e3) {
              for (
                ;
                o &&
                o !== A &&
                ((o.scrollHeight <= o.clientHeight &&
                  o.scrollWidth <= o.clientWidth) ||
                  !(
                    eX[(t = _getComputedStyle(o)).overflowY] || eX[t.overflowX]
                  ));
              )
                o = o.parentNode;
              ((s._isScroll =
                o &&
                o !== n &&
                !_isViewport$1(o) &&
                (eX[(t = _getComputedStyle(o)).overflowY] || eX[t.overflowX])),
                (s._isScrollT = a));
            }
            (s._isScroll || "x" === i) &&
              (r.stopPropagation(), (r._gsapAllow = !0));
          },
          _inputObserver = function (e, t, r, n) {
            return T.create({
              target: e,
              capture: !0,
              debounce: !1,
              lockAxis: !0,
              type: t,
              onWheel: (n = n && _nestedScroll),
              onPress: n,
              onDrag: n,
              onScroll: n,
              onEnable: function () {
                return (
                  r &&
                  _addListener$1(O, T.eventTypes[0], _captureInputs, !1, !0)
                );
              },
              onDisable: function () {
                return _removeListener$1(
                  O,
                  T.eventTypes[0],
                  _captureInputs,
                  !0,
                );
              },
            });
          },
          eW = /(input|label|select|textarea)/i,
          _captureInputs = function (e) {
            var t = eW.test(e.target.tagName);
            (t || eG) && ((e._gsapAllow = !0), (eG = t));
          },
          _getScrollNormalizer = function (e) {
            (_isObject(e) || (e = {}),
              (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
              e.type || (e.type = "wheel,touch"),
              (e.debounce = !!e.debounce),
              (e.id = e.id || "normalizer"));
            var t,
              r,
              n,
              i,
              o,
              s,
              a,
              l,
              c = e,
              u = c.normalizeScrollX,
              p = c.momentum,
              d = c.allowNestedScroll,
              h = c.onRelease,
              g = _getTarget(e.target) || L,
              _ = C.core.globals().ScrollSmoother,
              v = _ && _.get(),
              y =
                Z &&
                ((e.content && _getTarget(e.content)) ||
                  (v && !1 !== e.content && !v.smooth() && v.content())),
              S = _getScrollFunc(g, w),
              x = _getScrollFunc(g, b),
              E = 1,
              O =
                (T.isTouch && P.visualViewport
                  ? P.visualViewport.scale * P.visualViewport.width
                  : P.outerWidth) / P.innerWidth,
              A = 0,
              k = _isFunction(p)
                ? function () {
                    return p(t);
                  }
                : function () {
                    return p || 2.8;
                  },
              M = _inputObserver(g, e.type, !0, d),
              resumeTouchMove = function () {
                return (i = !1);
              },
              B = _passThrough,
              N = _passThrough,
              updateClamps = function () {
                ((r = _maxScroll(g, w)),
                  (N = D(Z ? 1 : 0, r)),
                  u && (B = D(0, _maxScroll(g, b))),
                  (n = eN));
              },
              removeContentOffset = function () {
                ((y._gsap.y = _round(parseFloat(y._gsap.y) + S.offset) + "px"),
                  (y.style.transform =
                    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                    parseFloat(y._gsap.y) +
                    ", 0, 1)"),
                  (S.offset = S.cacheID = 0));
              },
              ignoreDrag = function () {
                if (i) {
                  requestAnimationFrame(resumeTouchMove);
                  var e = _round(t.deltaY / 2),
                    r = N(S.v - e);
                  if (y && r !== S.v + S.offset) {
                    S.offset = r - S.v;
                    var n = _round(
                      (parseFloat(y && y._gsap.y) || 0) - S.offset,
                    );
                    ((y.style.transform =
                      "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                      n +
                      ", 0, 1)"),
                      (y._gsap.y = n + "px"),
                      (S.cacheID = m.cache),
                      _updateAll());
                  }
                  return !0;
                }
                (S.offset && removeContentOffset(), (i = !0));
              },
              onResize = function () {
                (updateClamps(),
                  o.isActive() &&
                    o.vars.scrollY > r &&
                    (S() > r
                      ? o.progress(1) && S(r)
                      : o.resetTo("scrollY", r)));
              };
            return (
              y && C.set(y, { y: "+=0" }),
              (e.ignoreCheck = function (e) {
                return (
                  (Z && "touchmove" === e.type && ignoreDrag()) ||
                  (E > 1.05 && "touchstart" !== e.type) ||
                  t.isGesturing ||
                  (e.touches && e.touches.length > 1)
                );
              }),
              (e.onPress = function () {
                i = !1;
                var e = E;
                ((E = _round(
                  ((P.visualViewport && P.visualViewport.scale) || 1) / O,
                )),
                  o.pause(),
                  e !== E && _allowNativePanning(g, E > 1.01 || (!u && "x")),
                  (s = x()),
                  (a = S()),
                  updateClamps(),
                  (n = eN));
              }),
              (e.onRelease = e.onGestureStart =
                function (e, t) {
                  if ((S.offset && removeContentOffset(), t)) {
                    m.cache++;
                    var n,
                      i,
                      s = k();
                    (u &&
                      ((i = (n = x()) + -(0.05 * s * e.velocityX) / 0.227),
                      (s *= _clampScrollAndGetDurationMultiplier(
                        x,
                        n,
                        i,
                        _maxScroll(g, b),
                      )),
                      (o.vars.scrollX = B(i))),
                      (i = (n = S()) + -(0.05 * s * e.velocityY) / 0.227),
                      (s *= _clampScrollAndGetDurationMultiplier(
                        S,
                        n,
                        i,
                        _maxScroll(g, w),
                      )),
                      (o.vars.scrollY = N(i)),
                      o.invalidate().duration(s).play(0.01),
                      ((Z && o.vars.scrollY >= r) || n >= r - 1) &&
                        C.to({}, { onUpdate: onResize, duration: s }));
                  } else l.restart(!0);
                  h && h(e);
                }),
              (e.onWheel = function () {
                (o._ts && o.pause(), eu() - A > 1e3 && ((n = 0), (A = eu())));
              }),
              (e.onChange = function (e, t, r, i, o) {
                if (
                  (eN !== n && updateClamps(),
                  t &&
                    u &&
                    x(B(i[2] === t ? s + (e.startX - e.x) : x() + t - i[1])),
                  r)
                ) {
                  S.offset && removeContentOffset();
                  var l = o[2] === r,
                    c = l ? a + e.startY - e.y : S() + r - o[1],
                    p = N(c);
                  (l && c !== p && (a += p - c), S(p));
                }
                (r || t) && _updateAll();
              }),
              (e.onEnable = function () {
                (_allowNativePanning(g, !u && "x"),
                  ez.addEventListener("refresh", onResize),
                  _addListener$1(P, "resize", onResize),
                  S.smooth &&
                    ((S.target.style.scrollBehavior = "auto"),
                    (S.smooth = x.smooth = !1)),
                  M.enable());
              }),
              (e.onDisable = function () {
                (_allowNativePanning(g, !0),
                  _removeListener$1(P, "resize", onResize),
                  ez.removeEventListener("refresh", onResize),
                  M.kill());
              }),
              (e.lockAxis = !1 !== e.lockAxis),
              ((t = new T(e)).iOS = Z),
              Z && !S() && S(1),
              Z && C.ticker.add(_passThrough),
              (l = t._dc),
              (o = C.to(t, {
                ease: "power4",
                paused: !0,
                inherit: !1,
                scrollX: u ? "+=0.1" : "+=0",
                scrollY: "+=0.1",
                modifiers: {
                  scrollY: _interruptionTracker(S, S(), function () {
                    return o.pause();
                  }),
                },
                onUpdate: _updateAll,
                onComplete: l.vars.onComplete,
              })),
              t
            );
          };
        ((ez.sort = function (e) {
          if (_isFunction(e)) return eA.sort(e);
          var t = P.pageYOffset || 0;
          return (
            ez.getAll().forEach(function (e) {
              return (e._sortY = e.trigger
                ? t + e.trigger.getBoundingClientRect().top
                : e.start + P.innerHeight);
            }),
            eA.sort(
              e ||
                function (e, t) {
                  return (
                    -1e6 * (e.vars.refreshPriority || 0) +
                    (e.vars.containerAnimation ? 1e6 : e._sortY) -
                    ((t.vars.containerAnimation ? 1e6 : t._sortY) +
                      -1e6 * (t.vars.refreshPriority || 0))
                  );
                },
            )
          );
        }),
          (ez.observe = function (e) {
            return new T(e);
          }),
          (ez.normalizeScroll = function (e) {
            if (void 0 === e) return j;
            if (!0 === e && j) return j.enable();
            if (!1 === e) {
              (j && j.kill(), (j = e));
              return;
            }
            var t = e instanceof T ? e : _getScrollNormalizer(e);
            return (
              j && j.target === t.target && j.kill(),
              _isViewport$1(t.target) && (j = t),
              t
            );
          }),
          (ez.core = {
            _getVelocityProp: _getVelocityProp,
            _inputObserver: _inputObserver,
            _scrollers: m,
            _proxies: v,
            bridge: {
              ss: function () {
                (ef || _dispatch("scrollStart"), (ef = eu()));
              },
              ref: function () {
                return I;
              },
            },
          }),
          _getGSAP$1() && C.registerPlugin(ez),
          (e.ScrollTrigger = ez),
          (e.default = ez),
          "undefined" == typeof window || window !== e
            ? Object.defineProperty(e, "__esModule", { value: !0 })
            : delete window.default);
      })(t);
    },
    38725: function (e, t) {
      /*!
       * SplitText 3.13.0
       * https://gsap.com
       *
       * @license Copyright 2025, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
       * @author: Jack Doyle
       */ !(function (e) {
        "use strict";
        let t,
          r,
          n,
          _initIfNecessary = () => n || u.register(window.gsap),
          i = "undefined" != typeof Intl ? new Intl.Segmenter() : 0,
          _toArray = (e) =>
            "string" == typeof e
              ? _toArray(document.querySelectorAll(e))
              : "length" in e
                ? Array.from(e)
                : [e],
          _elements = (e) =>
            _toArray(e).filter((e) => e instanceof HTMLElement),
          o = [],
          _context = function () {},
          s = /\s+/g,
          a = RegExp(
            "\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.",
            "gu",
          ),
          l = { left: 0, top: 0, width: 0, height: 0 },
          _stretchToFitSpecialChars = (e, t) => {
            if (t) {
              let r = new Set(e.join("").match(t) || o),
                n = e.length,
                i,
                s,
                a,
                l;
              if (r.size) {
                for (; --n > -1; )
                  for (a of ((s = e[n]), r))
                    if (a.startsWith(s) && a.length > s.length) {
                      for (
                        i = 0, l = s;
                        a.startsWith((l += e[n + ++i])) && l.length < a.length;
                      );
                      if (i && l.length === a.length) {
                        ((e[n] = a), e.splice(n + 1, i));
                        break;
                      }
                    }
              }
            }
            return e;
          },
          _disallowInline = (e) =>
            "inline" === window.getComputedStyle(e).display &&
            (e.style.display = "inline-block"),
          _insertNodeBefore = (e, t, r) =>
            t.insertBefore(
              "string" == typeof e ? document.createTextNode(e) : e,
              r,
            ),
          _getWrapper = (e, t, r) => {
            let n = t[e + "sClass"] || "",
              { tag: i = "div", aria: o = "auto", propIndex: s = !1 } = t,
              a = "line" === e ? "block" : "inline-block",
              l = n.indexOf("++") > -1,
              wrapper = (t) => {
                let c = document.createElement(i),
                  u = r.length + 1;
                return (
                  n && (c.className = n + (l ? " " + n + u : "")),
                  s && c.style.setProperty("--" + e, u + ""),
                  "none" !== o && c.setAttribute("aria-hidden", "true"),
                  "span" !== i &&
                    ((c.style.position = "relative"), (c.style.display = a)),
                  (c.textContent = t),
                  r.push(c),
                  c
                );
              };
            return (
              l && (n = n.replace("++", "")),
              (wrapper.collection = r),
              wrapper
            );
          },
          _getLineWrapper = (e, t, r, n) => {
            let i = _getWrapper("line", r, n),
              o = window.getComputedStyle(e).textAlign || "left";
            return (r, n) => {
              let s = i("");
              for (s.style.textAlign = o, e.insertBefore(s, t[r]); r < n; r++)
                s.appendChild(t[r]);
              s.normalize();
            };
          },
          _splitWordsAndCharsRecursively = (e, t, r, n, a, l, c, u, p, d) => {
            var h;
            let g = Array.from(e.childNodes),
              _ = 0,
              {
                wordDelimiter: m,
                reduceWhiteSpace: v = !0,
                prepareText: y,
              } = t,
              S = e.getBoundingClientRect(),
              x = S,
              b =
                !v &&
                "pre" === window.getComputedStyle(e).whiteSpace.substring(0, 3),
              w = 0,
              T = r.collection,
              C,
              E,
              P,
              O,
              L,
              A,
              k,
              M,
              B,
              D,
              N,
              R,
              I,
              F,
              V,
              H,
              K,
              Y;
            for (
              "object" == typeof m
                ? ((P = m.delimiter || m), (E = m.replaceWith || ""))
                : (E = "" === m ? "" : m || " "),
                C = " " !== E;
              _ < g.length;
              _++
            )
              if (3 === (O = g[_]).nodeType) {
                for (
                  V = O.textContent || "",
                    v
                      ? (V = V.replace(s, " "))
                      : b && (V = V.replace(/\n/g, E + "\n")),
                    y && (V = y(V, e)),
                    O.textContent = V,
                    K = (L = E || P ? V.split(P || E) : V.match(u) || o)[
                      L.length - 1
                    ],
                    M = C ? " " === K.slice(-1) : !K,
                    K || L.pop(),
                    x = S,
                    (k = C ? " " === L[0].charAt(0) : !L[0]) &&
                      _insertNodeBefore(" ", e, O),
                    L[0] || L.shift(),
                    _stretchToFitSpecialChars(L, p),
                    (l && d) || (O.textContent = ""),
                    B = 1;
                  B <= L.length;
                  B++
                )
                  if (
                    ((H = L[B - 1]),
                    !v &&
                      b &&
                      "\n" === H.charAt(0) &&
                      (null == (h = O.previousSibling) || h.remove(),
                      _insertNodeBefore(document.createElement("br"), e, O),
                      (H = H.slice(1))),
                    v || "" !== H)
                  ) {
                    if (" " === H)
                      e.insertBefore(document.createTextNode(" "), O);
                    else {
                      if (
                        (C &&
                          " " === H.charAt(0) &&
                          _insertNodeBefore(" ", e, O),
                        w && 1 === B && !k && T.indexOf(w.parentNode) > -1
                          ? (A = T[T.length - 1]).appendChild(
                              document.createTextNode(n ? "" : H),
                            )
                          : (_insertNodeBefore((A = r(n ? "" : H)), e, O),
                            w &&
                              1 === B &&
                              !k &&
                              A.insertBefore(w, A.firstChild)),
                        n)
                      )
                        for (
                          Y = 0,
                            N = i
                              ? _stretchToFitSpecialChars(
                                  [...i.segment(H)].map((e) => e.segment),
                                  p,
                                )
                              : H.match(u) || o;
                          Y < N.length;
                          Y++
                        )
                          A.appendChild(
                            " " === N[Y]
                              ? document.createTextNode(" ")
                              : n(N[Y]),
                          );
                      if (l && d) {
                        if (
                          ((V = O.textContent =
                            V.substring(H.length + 1, V.length)),
                          (D = A.getBoundingClientRect()).top > x.top &&
                            D.left <= x.left)
                        ) {
                          for (
                            R = e.cloneNode(), I = e.childNodes[0];
                            I && I !== A;
                          )
                            ((F = I), (I = I.nextSibling), R.appendChild(F));
                          (e.parentNode.insertBefore(R, e),
                            a && _disallowInline(R));
                        }
                        x = D;
                      }
                      (B < L.length || M) &&
                        _insertNodeBefore(
                          B >= L.length
                            ? " "
                            : C && " " === H.slice(-1)
                              ? " " + E
                              : E,
                          e,
                          O,
                        );
                    }
                  } else _insertNodeBefore(E, e, O);
                (e.removeChild(O), (w = 0));
              } else
                1 === O.nodeType &&
                  (c && c.indexOf(O) > -1
                    ? (T.indexOf(O.previousSibling) > -1 &&
                        T[T.length - 1].appendChild(O),
                      (w = O))
                    : (_splitWordsAndCharsRecursively(
                        O,
                        t,
                        r,
                        n,
                        a,
                        l,
                        c,
                        u,
                        p,
                        !0,
                      ),
                      (w = 0)),
                  a && _disallowInline(O));
          },
          c = class _SplitText {
            constructor(e, t) {
              ((this.isSplit = !1),
                _initIfNecessary(),
                (this.elements = _elements(e)),
                (this.chars = []),
                (this.words = []),
                (this.lines = []),
                (this.masks = []),
                (this.vars = t),
                (this._split = () => this.isSplit && this.split(this.vars)));
              let r = [],
                n,
                checkWidths = () => {
                  let e = r.length,
                    t;
                  for (; e--; ) {
                    let n = (t = r[e]).element.offsetWidth;
                    if (n !== t.width) {
                      ((t.width = n), this._split());
                      return;
                    }
                  }
                };
              ((this._data = {
                orig: r,
                obs:
                  "undefined" != typeof ResizeObserver &&
                  new ResizeObserver(() => {
                    (clearTimeout(n), (n = setTimeout(checkWidths, 200)));
                  }),
              }),
                _context(this),
                this.split(t));
            }
            split(e) {
              (this.isSplit && this.revert(),
                (this.vars = e = e || this.vars || {}));
              let {
                  type: t = "chars,words,lines",
                  aria: n = "auto",
                  deepSlice: i = !0,
                  smartWrap: o,
                  onSplit: s,
                  autoSplit: c = !1,
                  specialChars: u,
                  mask: p,
                } = this.vars,
                d = t.indexOf("lines") > -1,
                h = t.indexOf("chars") > -1,
                g = t.indexOf("words") > -1,
                _ = h && !g && !d,
                m =
                  u &&
                  ("push" in u ? RegExp("(?:" + u.join("|") + ")", "gu") : u),
                v = m ? RegExp(m.source + "|" + a.source, "gu") : a,
                y = !!e.ignore && _elements(e.ignore),
                { orig: S, animTime: x, obs: b } = this._data,
                w;
              return (
                (h || g || d) &&
                  (this.elements.forEach((t, r) => {
                    ((S[r] = {
                      element: t,
                      html: t.innerHTML,
                      ariaL: t.getAttribute("aria-label"),
                      ariaH: t.getAttribute("aria-hidden"),
                    }),
                      "auto" === n
                        ? t.setAttribute(
                            "aria-label",
                            (t.textContent || "").trim(),
                          )
                        : "hidden" === n &&
                          t.setAttribute("aria-hidden", "true"));
                    let s = [],
                      a = [],
                      c = [],
                      u = h ? _getWrapper("char", e, s) : null,
                      p = _getWrapper("word", e, a),
                      x,
                      b,
                      w,
                      T;
                    if (
                      (_splitWordsAndCharsRecursively(
                        t,
                        e,
                        p,
                        u,
                        _,
                        i && (d || _),
                        y,
                        v,
                        m,
                        !1,
                      ),
                      d)
                    ) {
                      let r = _toArray(t.childNodes),
                        n = _getLineWrapper(t, r, e, c),
                        i,
                        o = [],
                        s = 0,
                        a = r.map((e) =>
                          1 === e.nodeType ? e.getBoundingClientRect() : l,
                        ),
                        u = l;
                      for (x = 0; x < r.length; x++)
                        1 === (i = r[x]).nodeType &&
                          ("BR" === i.nodeName
                            ? (o.push(i), n(s, x + 1), (u = a[(s = x + 1)]))
                            : (x &&
                                a[x].top > u.top &&
                                a[x].left <= u.left &&
                                (n(s, x), (s = x)),
                              (u = a[x])));
                      (s < x && n(s, x),
                        o.forEach((e) => {
                          var t;
                          return null == (t = e.parentNode)
                            ? void 0
                            : t.removeChild(e);
                        }));
                    }
                    if (!g) {
                      for (x = 0; x < a.length; x++)
                        if (
                          ((b = a[x]),
                          h || !b.nextSibling || 3 !== b.nextSibling.nodeType)
                        ) {
                          if (o && !d) {
                            for (
                              (w =
                                document.createElement(
                                  "span",
                                )).style.whiteSpace = "nowrap";
                              b.firstChild;
                            )
                              w.appendChild(b.firstChild);
                            b.replaceWith(w);
                          } else b.replaceWith(...b.childNodes);
                        } else
                          (T = b.nextSibling) &&
                            3 === T.nodeType &&
                            ((T.textContent =
                              (b.textContent || "") + (T.textContent || "")),
                            b.remove());
                      ((a.length = 0), t.normalize());
                    }
                    (this.lines.push(...c),
                      this.words.push(...a),
                      this.chars.push(...s));
                  }),
                  p &&
                    this[p] &&
                    this.masks.push(
                      ...this[p].map((e) => {
                        let t = e.cloneNode();
                        return (
                          e.replaceWith(t),
                          t.appendChild(e),
                          e.className &&
                            (t.className = e.className.replace(
                              /(\b\w+\b)/g,
                              "$1-mask",
                            )),
                          (t.style.overflow = "clip"),
                          t
                        );
                      }),
                    )),
                (this.isSplit = !0),
                r &&
                  (c
                    ? r.addEventListener("loadingdone", this._split)
                    : "loading" === r.status &&
                      console.warn("SplitText called before fonts loaded")),
                (w = s && s(this)) &&
                  w.totalTime &&
                  (this._data.anim = x ? w.totalTime(x) : w),
                d &&
                  c &&
                  this.elements.forEach((e, t) => {
                    ((S[t].width = e.offsetWidth), b && b.observe(e));
                  }),
                this
              );
            }
            revert() {
              var e, t;
              let { orig: n, anim: i, obs: o } = this._data;
              return (
                o && o.disconnect(),
                n.forEach(({ element: e, html: t, ariaL: r, ariaH: n }) => {
                  ((e.innerHTML = t),
                    r
                      ? e.setAttribute("aria-label", r)
                      : e.removeAttribute("aria-label"),
                    n
                      ? e.setAttribute("aria-hidden", n)
                      : e.removeAttribute("aria-hidden"));
                }),
                (this.chars.length =
                  this.words.length =
                  this.lines.length =
                  n.length =
                  this.masks.length =
                    0),
                (this.isSplit = !1),
                null == r || r.removeEventListener("loadingdone", this._split),
                i && ((this._data.animTime = i.totalTime()), i.revert()),
                null == (t = (e = this.vars).onRevert) || t.call(e, this),
                this
              );
            }
            static create(e, t) {
              return new _SplitText(e, t);
            }
            static register(e) {
              ((t = t || e || window.gsap) &&
                ((_toArray = t.utils.toArray),
                (_context = t.core.context || _context)),
                !n &&
                  window.innerWidth > 0 &&
                  ((r = document.fonts), (n = !0)));
            }
          };
        c.version = "3.13.0";
        let u = c;
        ((e.SplitText = u),
          (e.default = u),
          Object.defineProperty(e, "__esModule", { value: !0 }));
      })(t);
    },
    6616: function (e, t, r) {
      "use strict";
      r.d(t, {
        ZP: function () {
          return D;
        },
        p8: function () {
          return D;
        },
      });
      var n,
        i,
        o,
        s,
        a,
        l,
        c,
        u,
        p,
        d,
        h = r(54912),
        g = {},
        _ = 180 / Math.PI,
        m = Math.PI / 180,
        v = Math.atan2,
        y = /([A-Z])/g,
        S = /(left|right|width|margin|padding|x)/i,
        x = /[\s,\(]\S/,
        b = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity",
        },
        _renderCSSProp = function (e, t) {
          return t.set(
            t.t,
            t.p,
            Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
            t,
          );
        },
        _renderPropWithEnd = function (e, t) {
          return t.set(
            t.t,
            t.p,
            1 === e ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
            t,
          );
        },
        _renderCSSPropWithBeginning = function (e, t) {
          return t.set(
            t.t,
            t.p,
            e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
            t,
          );
        },
        _renderRoundedCSSProp = function (e, t) {
          var r = t.s + t.c * e;
          t.set(t.t, t.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + t.u, t);
        },
        _renderNonTweeningValue = function (e, t) {
          return t.set(t.t, t.p, e ? t.e : t.b, t);
        },
        _renderNonTweeningValueOnlyAtEnd = function (e, t) {
          return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t);
        },
        _setterCSSStyle = function (e, t, r) {
          return (e.style[t] = r);
        },
        _setterCSSProp = function (e, t, r) {
          return e.style.setProperty(t, r);
        },
        _setterTransform = function (e, t, r) {
          return (e._gsap[t] = r);
        },
        _setterScale = function (e, t, r) {
          return (e._gsap.scaleX = e._gsap.scaleY = r);
        },
        _setterScaleWithRender = function (e, t, r, n, i) {
          var o = e._gsap;
          ((o.scaleX = o.scaleY = r), o.renderTransform(i, o));
        },
        _setterTransformWithRender = function (e, t, r, n, i) {
          var o = e._gsap;
          ((o[t] = r), o.renderTransform(i, o));
        },
        w = "transform",
        T = w + "Origin",
        _saveStyle = function _saveStyle(e, t) {
          var r = this,
            n = this.target,
            i = n.style,
            o = n._gsap;
          if (e in g && i) {
            if (((this.tfm = this.tfm || {}), "transform" === e))
              return b.transform.split(",").forEach(function (e) {
                return _saveStyle.call(r, e, t);
              });
            if (
              (~(e = b[e] || e).indexOf(",")
                ? e.split(",").forEach(function (e) {
                    return (r.tfm[e] = _get(n, e));
                  })
                : (this.tfm[e] = o.x ? o[e] : _get(n, e)),
              e === T && (this.tfm.zOrigin = o.zOrigin),
              this.props.indexOf(w) >= 0)
            )
              return;
            (o.svg &&
              ((this.svgo = n.getAttribute("data-svg-origin")),
              this.props.push(T, t, "")),
              (e = w));
          }
          (i || t) && this.props.push(e, t, i[e]);
        },
        _removeIndependentTransforms = function (e) {
          e.translate &&
            (e.removeProperty("translate"),
            e.removeProperty("scale"),
            e.removeProperty("rotate"));
        },
        _revertStyle = function () {
          var e,
            t,
            r = this.props,
            n = this.target,
            i = n.style,
            o = n._gsap;
          for (e = 0; e < r.length; e += 3)
            r[e + 1]
              ? 2 === r[e + 1]
                ? n[r[e]](r[e + 2])
                : (n[r[e]] = r[e + 2])
              : r[e + 2]
                ? (i[r[e]] = r[e + 2])
                : i.removeProperty(
                    "--" === r[e].substr(0, 2)
                      ? r[e]
                      : r[e].replace(y, "-$1").toLowerCase(),
                  );
          if (this.tfm) {
            for (t in this.tfm) o[t] = this.tfm[t];
            (o.svg &&
              (o.renderTransform(),
              n.setAttribute("data-svg-origin", this.svgo || "")),
              ((e = p()) && e.isStart) ||
                i[w] ||
                (_removeIndependentTransforms(i),
                o.zOrigin &&
                  i[T] &&
                  ((i[T] += " " + o.zOrigin + "px"),
                  (o.zOrigin = 0),
                  o.renderTransform()),
                (o.uncache = 1)));
          }
        },
        _getStyleSaver = function (e, t) {
          var r = {
            target: e,
            props: [],
            revert: _revertStyle,
            save: _saveStyle,
          };
          return (
            e._gsap || h.p8.core.getCache(e),
            t &&
              e.style &&
              e.nodeType &&
              t.split(",").forEach(function (e) {
                return r.save(e);
              }),
            r
          );
        },
        _createElement = function (e, t) {
          var r = s.createElementNS
            ? s.createElementNS(
                (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
                e,
              )
            : s.createElement(e);
          return r && r.style ? r : s.createElement(e);
        },
        _getComputedProperty = function _getComputedProperty(e, t, r) {
          var n = getComputedStyle(e);
          return (
            n[t] ||
            n.getPropertyValue(t.replace(y, "-$1").toLowerCase()) ||
            n.getPropertyValue(t) ||
            (!r && _getComputedProperty(e, _checkPropPrefix(t) || t, 1)) ||
            ""
          );
        },
        C = "O,Moz,ms,Ms,Webkit".split(","),
        _checkPropPrefix = function (e, t, r) {
          var n = (t || c).style,
            i = 5;
          if (e in n && !r) return e;
          for (
            e = e.charAt(0).toUpperCase() + e.substr(1);
            i-- && !(C[i] + e in n);
          );
          return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? C[i] : "") + e;
        },
        _initCore = function () {
          "undefined" != typeof window &&
            window.document &&
            ((a = (s = window.document).documentElement),
            (c = _createElement("div") || { style: {} }),
            _createElement("div"),
            (T = (w = _checkPropPrefix(w)) + "Origin"),
            (c.style.cssText =
              "border-width:0;line-height:0;position:absolute;padding:0"),
            (d = !!_checkPropPrefix("perspective")),
            (p = h.p8.core.reverting),
            (l = 1));
        },
        _getReparentedCloneBBox = function (e) {
          var t,
            r = e.ownerSVGElement,
            n = _createElement(
              "svg",
              (r && r.getAttribute("xmlns")) || "http://www.w3.org/2000/svg",
            ),
            i = e.cloneNode(!0);
          ((i.style.display = "block"), n.appendChild(i), a.appendChild(n));
          try {
            t = i.getBBox();
          } catch (e) {}
          return (n.removeChild(i), a.removeChild(n), t);
        },
        _getAttributeFallbacks = function (e, t) {
          for (var r = t.length; r--; )
            if (e.hasAttribute(t[r])) return e.getAttribute(t[r]);
        },
        _getBBox = function (e) {
          var t, r;
          try {
            t = e.getBBox();
          } catch (n) {
            ((t = _getReparentedCloneBBox(e)), (r = 1));
          }
          return (
            (t && (t.width || t.height)) ||
              r ||
              (t = _getReparentedCloneBBox(e)),
            !t || t.width || t.x || t.y
              ? t
              : {
                  x: +_getAttributeFallbacks(e, ["x", "cx", "x1"]) || 0,
                  y: +_getAttributeFallbacks(e, ["y", "cy", "y1"]) || 0,
                  width: 0,
                  height: 0,
                }
          );
        },
        _isSVG = function (e) {
          return !!(
            e.getCTM &&
            (!e.parentNode || e.ownerSVGElement) &&
            _getBBox(e)
          );
        },
        _removeProperty = function (e, t) {
          if (t) {
            var r,
              n = e.style;
            (t in g && t !== T && (t = w),
              n.removeProperty
                ? (("ms" === (r = t.substr(0, 2)) ||
                    "webkit" === t.substr(0, 6)) &&
                    (t = "-" + t),
                  n.removeProperty(
                    "--" === r ? t : t.replace(y, "-$1").toLowerCase(),
                  ))
                : n.removeAttribute(t));
          }
        },
        _addNonTweeningPT = function (e, t, r, n, i, o) {
          var s = new h.Fo(
            e._pt,
            t,
            r,
            0,
            1,
            o ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue,
          );
          return ((e._pt = s), (s.b = n), (s.e = i), e._props.push(r), s);
        },
        E = { deg: 1, rad: 1, turn: 1 },
        P = { grid: 1, flex: 1 },
        _convertToUnit = function _convertToUnit(e, t, r, n) {
          var i,
            o,
            a,
            l,
            u = parseFloat(r) || 0,
            p = (r + "").trim().substr((u + "").length) || "px",
            d = c.style,
            _ = S.test(t),
            m = "svg" === e.tagName.toLowerCase(),
            v = (m ? "client" : "offset") + (_ ? "Width" : "Height"),
            y = "px" === n,
            x = "%" === n;
          if (n === p || !u || E[n] || E[p]) return u;
          if (
            ("px" === p || y || (u = _convertToUnit(e, t, r, "px")),
            (l = e.getCTM && _isSVG(e)),
            (x || "%" === p) && (g[t] || ~t.indexOf("adius")))
          )
            return (
              (i = l ? e.getBBox()[_ ? "width" : "height"] : e[v]),
              (0, h.Pr)(x ? (u / i) * 100 : (u / 100) * i)
            );
          if (
            ((d[_ ? "width" : "height"] = 100 + (y ? p : n)),
            (o =
              ("rem" !== n && ~t.indexOf("adius")) ||
              ("em" === n && e.appendChild && !m)
                ? e
                : e.parentNode),
            l && (o = (e.ownerSVGElement || {}).parentNode),
            (o && o !== s && o.appendChild) || (o = s.body),
            (a = o._gsap) &&
              x &&
              a.width &&
              _ &&
              a.time === h.xr.time &&
              !a.uncache)
          )
            return (0, h.Pr)((u / a.width) * 100);
          if (x && ("height" === t || "width" === t)) {
            var b = e.style[t];
            ((e.style[t] = 100 + n),
              (i = e[v]),
              b ? (e.style[t] = b) : _removeProperty(e, t));
          } else
            ((x || "%" === p) &&
              !P[_getComputedProperty(o, "display")] &&
              (d.position = _getComputedProperty(e, "position")),
              o === e && (d.position = "static"),
              o.appendChild(c),
              (i = c[v]),
              o.removeChild(c),
              (d.position = "absolute"));
          return (
            _ && x && (((a = (0, h.DY)(o)).time = h.xr.time), (a.width = o[v])),
            (0, h.Pr)(y ? (i * u) / 100 : i && u ? (100 / i) * u : 0)
          );
        },
        _get = function (e, t, r, n) {
          var i;
          return (
            l || _initCore(),
            t in b &&
              "transform" !== t &&
              ~(t = b[t]).indexOf(",") &&
              (t = t.split(",")[0]),
            g[t] && "transform" !== t
              ? ((i = _parseTransform(e, n)),
                (i =
                  "transformOrigin" !== t
                    ? i[t]
                    : i.svg
                      ? i.origin
                      : _firstTwoOnly(_getComputedProperty(e, T)) +
                        " " +
                        i.zOrigin +
                        "px"))
              : (!(i = e.style[t]) ||
                  "auto" === i ||
                  n ||
                  ~(i + "").indexOf("calc(")) &&
                (i =
                  (L[t] && L[t](e, t, r)) ||
                  _getComputedProperty(e, t) ||
                  (0, h.Ok)(e, t) ||
                  ("opacity" === t ? 1 : 0)),
            r && !~(i + "").trim().indexOf(" ")
              ? _convertToUnit(e, t, i, r) + r
              : i
          );
        },
        _tweenComplexCSSString = function (e, t, r, n) {
          if (!r || "none" === r) {
            var i = _checkPropPrefix(t, e, 1),
              o = i && _getComputedProperty(e, i, 1);
            o && o !== r
              ? ((t = i), (r = o))
              : "borderColor" === t &&
                (r = _getComputedProperty(e, "borderTopColor"));
          }
          var s,
            a,
            l,
            c,
            u,
            p,
            d,
            g,
            _,
            m,
            v,
            y = new h.Fo(this._pt, e.style, t, 0, 1, h.Ks),
            S = 0,
            x = 0;
          if (
            ((y.b = r),
            (y.e = n),
            (r += ""),
            "var(--" === (n += "").substring(0, 6) &&
              (n = _getComputedProperty(e, n.substring(4, n.indexOf(")")))),
            "auto" === n &&
              ((p = e.style[t]),
              (e.style[t] = n),
              (n = _getComputedProperty(e, t) || n),
              p ? (e.style[t] = p) : _removeProperty(e, t)),
            (s = [r, n]),
            (0, h.kr)(s),
            (r = s[0]),
            (n = s[1]),
            (l = r.match(h.d4) || []),
            (n.match(h.d4) || []).length)
          ) {
            for (; (a = h.d4.exec(n)); )
              ((d = a[0]),
                (_ = n.substring(S, a.index)),
                u
                  ? (u = (u + 1) % 5)
                  : ("rgba(" === _.substr(-5) || "hsla(" === _.substr(-5)) &&
                    (u = 1),
                d !== (p = l[x++] || "") &&
                  ((c = parseFloat(p) || 0),
                  (v = p.substr((c + "").length)),
                  "=" === d.charAt(1) && (d = (0, h.cy)(c, d) + v),
                  (g = parseFloat(d)),
                  (m = d.substr((g + "").length)),
                  (S = h.d4.lastIndex - m.length),
                  m ||
                    ((m = m || h.Fc.units[t] || v),
                    S !== n.length || ((n += m), (y.e += m))),
                  v !== m && (c = _convertToUnit(e, t, p, m) || 0),
                  (y._pt = {
                    _next: y._pt,
                    p: _ || 1 === x ? _ : ",",
                    s: c,
                    c: g - c,
                    m: (u && u < 4) || "zIndex" === t ? Math.round : 0,
                  })));
            y.c = S < n.length ? n.substring(S, n.length) : "";
          } else
            y.r =
              "display" === t && "none" === n
                ? _renderNonTweeningValueOnlyAtEnd
                : _renderNonTweeningValue;
          return (h.bQ.test(n) && (y.e = 0), (this._pt = y), y);
        },
        O = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%",
        },
        _convertKeywordsToPercentages = function (e) {
          var t = e.split(" "),
            r = t[0],
            n = t[1] || "50%";
          return (
            ("top" === r || "bottom" === r || "left" === n || "right" === n) &&
              ((e = r), (r = n), (n = e)),
            (t[0] = O[r] || r),
            (t[1] = O[n] || n),
            t.join(" ")
          );
        },
        _renderClearProps = function (e, t) {
          if (t.tween && t.tween._time === t.tween._dur) {
            var r,
              n,
              i,
              o = t.t,
              s = o.style,
              a = t.u,
              l = o._gsap;
            if ("all" === a || !0 === a) ((s.cssText = ""), (n = 1));
            else
              for (i = (a = a.split(",")).length; --i > -1; )
                (g[(r = a[i])] &&
                  ((n = 1), (r = "transformOrigin" === r ? T : w)),
                  _removeProperty(o, r));
            n &&
              (_removeProperty(o, w),
              l &&
                (l.svg && o.removeAttribute("transform"),
                (s.scale = s.rotate = s.translate = "none"),
                _parseTransform(o, 1),
                (l.uncache = 1),
                _removeIndependentTransforms(s)));
          }
        },
        L = {
          clearProps: function (e, t, r, n, i) {
            if ("isFromStart" !== i.data) {
              var o = (e._pt = new h.Fo(e._pt, t, r, 0, 0, _renderClearProps));
              return (
                (o.u = n),
                (o.pr = -10),
                (o.tween = i),
                e._props.push(r),
                1
              );
            }
          },
        },
        A = [1, 0, 0, 1, 0, 0],
        k = {},
        _isNullTransform = function (e) {
          return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e;
        },
        _getComputedTransformMatrixAsArray = function (e) {
          var t = _getComputedProperty(e, w);
          return _isNullTransform(t) ? A : t.substr(7).match(h.SI).map(h.Pr);
        },
        _getMatrix = function (e, t) {
          var r,
            n,
            i,
            o,
            s = e._gsap || (0, h.DY)(e),
            l = e.style,
            c = _getComputedTransformMatrixAsArray(e);
          return s.svg && e.getAttribute("transform")
            ? "1,0,0,1,0,0" ===
              (c = [
                (i = e.transform.baseVal.consolidate().matrix).a,
                i.b,
                i.c,
                i.d,
                i.e,
                i.f,
              ]).join(",")
              ? A
              : c
            : (c !== A ||
                e.offsetParent ||
                e === a ||
                s.svg ||
                ((i = l.display),
                (l.display = "block"),
                ((r = e.parentNode) &&
                  (e.offsetParent || e.getBoundingClientRect().width)) ||
                  ((o = 1), (n = e.nextElementSibling), a.appendChild(e)),
                (c = _getComputedTransformMatrixAsArray(e)),
                i ? (l.display = i) : _removeProperty(e, "display"),
                o &&
                  (n
                    ? r.insertBefore(e, n)
                    : r
                      ? r.appendChild(e)
                      : a.removeChild(e))),
              t && c.length > 6 ? [c[0], c[1], c[4], c[5], c[12], c[13]] : c);
        },
        _applySVGOrigin = function (e, t, r, n, i, o) {
          var s,
            a,
            l,
            c,
            u = e._gsap,
            p = i || _getMatrix(e, !0),
            d = u.xOrigin || 0,
            h = u.yOrigin || 0,
            g = u.xOffset || 0,
            _ = u.yOffset || 0,
            m = p[0],
            v = p[1],
            y = p[2],
            S = p[3],
            x = p[4],
            b = p[5],
            w = t.split(" "),
            C = parseFloat(w[0]) || 0,
            E = parseFloat(w[1]) || 0;
          (r
            ? p !== A &&
              (a = m * S - v * y) &&
              ((l = C * (S / a) + E * (-y / a) + (y * b - S * x) / a),
              (c = C * (-v / a) + E * (m / a) - (m * b - v * x) / a),
              (C = l),
              (E = c))
            : ((C =
                (s = _getBBox(e)).x +
                (~w[0].indexOf("%") ? (C / 100) * s.width : C)),
              (E =
                s.y +
                (~(w[1] || w[0]).indexOf("%") ? (E / 100) * s.height : E))),
            n || (!1 !== n && u.smooth)
              ? ((x = C - d),
                (b = E - h),
                (u.xOffset = g + (x * m + b * y) - x),
                (u.yOffset = _ + (x * v + b * S) - b))
              : (u.xOffset = u.yOffset = 0),
            (u.xOrigin = C),
            (u.yOrigin = E),
            (u.smooth = !!n),
            (u.origin = t),
            (u.originIsAbsolute = !!r),
            (e.style[T] = "0px 0px"),
            o &&
              (_addNonTweeningPT(o, u, "xOrigin", d, C),
              _addNonTweeningPT(o, u, "yOrigin", h, E),
              _addNonTweeningPT(o, u, "xOffset", g, u.xOffset),
              _addNonTweeningPT(o, u, "yOffset", _, u.yOffset)),
            e.setAttribute("data-svg-origin", C + " " + E));
        },
        _parseTransform = function (e, t) {
          var r = e._gsap || new h.l1(e);
          if ("x" in r && !t && !r.uncache) return r;
          var n,
            i,
            o,
            s,
            a,
            l,
            c,
            u,
            p,
            g,
            y,
            S,
            x,
            b,
            C,
            E,
            P,
            O,
            L,
            k,
            M,
            B,
            D,
            N,
            R,
            I,
            F,
            V,
            H,
            K,
            Y,
            z,
            G = e.style,
            X = r.scaleX < 0,
            W = getComputedStyle(e),
            j = _getComputedProperty(e, T) || "0";
          return (
            (n = i = o = l = c = u = p = g = y = 0),
            (s = a = 1),
            (r.svg = !!(e.getCTM && _isSVG(e))),
            W.translate &&
              (("none" !== W.translate ||
                "none" !== W.scale ||
                "none" !== W.rotate) &&
                (G[w] =
                  ("none" !== W.translate
                    ? "translate3d(" +
                      (W.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                      ") "
                    : "") +
                  ("none" !== W.rotate ? "rotate(" + W.rotate + ") " : "") +
                  ("none" !== W.scale
                    ? "scale(" + W.scale.split(" ").join(",") + ") "
                    : "") +
                  ("none" !== W[w] ? W[w] : "")),
              (G.scale = G.rotate = G.translate = "none")),
            (b = _getMatrix(e, r.svg)),
            r.svg &&
              (r.uncache
                ? ((R = e.getBBox()),
                  (j = r.xOrigin - R.x + "px " + (r.yOrigin - R.y) + "px"),
                  (N = ""))
                : (N = !t && e.getAttribute("data-svg-origin")),
              _applySVGOrigin(
                e,
                N || j,
                !!N || r.originIsAbsolute,
                !1 !== r.smooth,
                b,
              )),
            (S = r.xOrigin || 0),
            (x = r.yOrigin || 0),
            b !== A &&
              ((O = b[0]),
              (L = b[1]),
              (k = b[2]),
              (M = b[3]),
              (n = B = b[4]),
              (i = D = b[5]),
              6 === b.length
                ? ((s = Math.sqrt(O * O + L * L)),
                  (a = Math.sqrt(M * M + k * k)),
                  (l = O || L ? v(L, O) * _ : 0),
                  (p = k || M ? v(k, M) * _ + l : 0) &&
                    (a *= Math.abs(Math.cos(p * m))),
                  r.svg &&
                    ((n -= S - (S * O + x * k)), (i -= x - (S * L + x * M))))
                : ((z = b[6]),
                  (K = b[7]),
                  (F = b[8]),
                  (V = b[9]),
                  (H = b[10]),
                  (Y = b[11]),
                  (n = b[12]),
                  (i = b[13]),
                  (o = b[14]),
                  (c = (C = v(z, H)) * _),
                  C &&
                    ((N = B * (E = Math.cos(-C)) + F * (P = Math.sin(-C))),
                    (R = D * E + V * P),
                    (I = z * E + H * P),
                    (F = -(B * P) + F * E),
                    (V = -(D * P) + V * E),
                    (H = -(z * P) + H * E),
                    (Y = -(K * P) + Y * E),
                    (B = N),
                    (D = R),
                    (z = I)),
                  (u = (C = v(-k, H)) * _),
                  C &&
                    ((N = O * (E = Math.cos(-C)) - F * (P = Math.sin(-C))),
                    (R = L * E - V * P),
                    (I = k * E - H * P),
                    (Y = M * P + Y * E),
                    (O = N),
                    (L = R),
                    (k = I)),
                  (l = (C = v(L, O)) * _),
                  C &&
                    ((N = O * (E = Math.cos(C)) + L * (P = Math.sin(C))),
                    (R = B * E + D * P),
                    (L = L * E - O * P),
                    (D = D * E - B * P),
                    (O = N),
                    (B = R)),
                  c &&
                    Math.abs(c) + Math.abs(l) > 359.9 &&
                    ((c = l = 0), (u = 180 - u)),
                  (s = (0, h.Pr)(Math.sqrt(O * O + L * L + k * k))),
                  (a = (0, h.Pr)(Math.sqrt(D * D + z * z))),
                  (p = Math.abs((C = v(B, D))) > 2e-4 ? C * _ : 0),
                  (y = Y ? 1 / (Y < 0 ? -Y : Y) : 0)),
              r.svg &&
                ((N = e.getAttribute("transform")),
                (r.forceCSS =
                  e.setAttribute("transform", "") ||
                  !_isNullTransform(_getComputedProperty(e, w))),
                N && e.setAttribute("transform", N))),
            Math.abs(p) > 90 &&
              270 > Math.abs(p) &&
              (X
                ? ((s *= -1),
                  (p += l <= 0 ? 180 : -180),
                  (l += l <= 0 ? 180 : -180))
                : ((a *= -1), (p += p <= 0 ? 180 : -180))),
            (t = t || r.uncache),
            (r.x =
              n -
              ((r.xPercent =
                n &&
                ((!t && r.xPercent) ||
                  (Math.round(e.offsetWidth / 2) === Math.round(-n) ? -50 : 0)))
                ? (e.offsetWidth * r.xPercent) / 100
                : 0) +
              "px"),
            (r.y =
              i -
              ((r.yPercent =
                i &&
                ((!t && r.yPercent) ||
                  (Math.round(e.offsetHeight / 2) === Math.round(-i)
                    ? -50
                    : 0)))
                ? (e.offsetHeight * r.yPercent) / 100
                : 0) +
              "px"),
            (r.z = o + "px"),
            (r.scaleX = (0, h.Pr)(s)),
            (r.scaleY = (0, h.Pr)(a)),
            (r.rotation = (0, h.Pr)(l) + "deg"),
            (r.rotationX = (0, h.Pr)(c) + "deg"),
            (r.rotationY = (0, h.Pr)(u) + "deg"),
            (r.skewX = p + "deg"),
            (r.skewY = g + "deg"),
            (r.transformPerspective = y + "px"),
            (r.zOrigin =
              parseFloat(j.split(" ")[2]) || (!t && r.zOrigin) || 0) &&
              (G[T] = _firstTwoOnly(j)),
            (r.xOffset = r.yOffset = 0),
            (r.force3D = h.Fc.force3D),
            (r.renderTransform = r.svg
              ? _renderSVGTransforms
              : d
                ? _renderCSSTransforms
                : _renderNon3DTransforms),
            (r.uncache = 0),
            r
          );
        },
        _firstTwoOnly = function (e) {
          return (e = e.split(" "))[0] + " " + e[1];
        },
        _addPxTranslate = function (e, t, r) {
          var n = (0, h.Wy)(t);
          return (
            (0, h.Pr)(
              parseFloat(t) + parseFloat(_convertToUnit(e, "x", r + "px", n)),
            ) + n
          );
        },
        _renderNon3DTransforms = function (e, t) {
          ((t.z = "0px"),
            (t.rotationY = t.rotationX = "0deg"),
            (t.force3D = 0),
            _renderCSSTransforms(e, t));
        },
        M = "0deg",
        _renderCSSTransforms = function (e, t) {
          var r = t || this,
            n = r.xPercent,
            i = r.yPercent,
            o = r.x,
            s = r.y,
            a = r.z,
            l = r.rotation,
            c = r.rotationY,
            u = r.rotationX,
            p = r.skewX,
            d = r.skewY,
            h = r.scaleX,
            g = r.scaleY,
            _ = r.transformPerspective,
            v = r.force3D,
            y = r.target,
            S = r.zOrigin,
            x = "",
            b = ("auto" === v && e && 1 !== e) || !0 === v;
          if (S && (u !== M || c !== M)) {
            var T,
              C = parseFloat(c) * m,
              E = Math.sin(C),
              P = Math.cos(C);
            ((o = _addPxTranslate(
              y,
              o,
              -(E * (T = Math.cos((C = parseFloat(u) * m))) * S),
            )),
              (s = _addPxTranslate(y, s, -(-Math.sin(C) * S))),
              (a = _addPxTranslate(y, a, -(P * T * S) + S)));
          }
          ("0px" !== _ && (x += "perspective(" + _ + ") "),
            (n || i) && (x += "translate(" + n + "%, " + i + "%) "),
            (b || "0px" !== o || "0px" !== s || "0px" !== a) &&
              (x +=
                "0px" !== a || b
                  ? "translate3d(" + o + ", " + s + ", " + a + ") "
                  : "translate(" + o + ", " + s + ") "),
            l !== M && (x += "rotate(" + l + ") "),
            c !== M && (x += "rotateY(" + c + ") "),
            u !== M && (x += "rotateX(" + u + ") "),
            (p !== M || d !== M) && (x += "skew(" + p + ", " + d + ") "),
            (1 !== h || 1 !== g) && (x += "scale(" + h + ", " + g + ") "),
            (y.style[w] = x || "translate(0, 0)"));
        },
        _renderSVGTransforms = function (e, t) {
          var r,
            n,
            i,
            o,
            s,
            a = t || this,
            l = a.xPercent,
            c = a.yPercent,
            u = a.x,
            p = a.y,
            d = a.rotation,
            g = a.skewX,
            _ = a.skewY,
            v = a.scaleX,
            y = a.scaleY,
            S = a.target,
            x = a.xOrigin,
            b = a.yOrigin,
            T = a.xOffset,
            C = a.yOffset,
            E = a.forceCSS,
            P = parseFloat(u),
            O = parseFloat(p);
          ((d = parseFloat(d)),
            (g = parseFloat(g)),
            (_ = parseFloat(_)) && ((g += _ = parseFloat(_)), (d += _)),
            d || g
              ? ((d *= m),
                (g *= m),
                (r = Math.cos(d) * v),
                (n = Math.sin(d) * v),
                (i = -(Math.sin(d - g) * y)),
                (o = Math.cos(d - g) * y),
                g &&
                  ((_ *= m),
                  (i *= s = Math.sqrt(1 + (s = Math.tan(g - _)) * s)),
                  (o *= s),
                  _ &&
                    ((r *= s = Math.sqrt(1 + (s = Math.tan(_)) * s)),
                    (n *= s))),
                (r = (0, h.Pr)(r)),
                (n = (0, h.Pr)(n)),
                (i = (0, h.Pr)(i)),
                (o = (0, h.Pr)(o)))
              : ((r = v), (o = y), (n = i = 0)),
            ((P && !~(u + "").indexOf("px")) ||
              (O && !~(p + "").indexOf("px"))) &&
              ((P = _convertToUnit(S, "x", u, "px")),
              (O = _convertToUnit(S, "y", p, "px"))),
            (x || b || T || C) &&
              ((P = (0, h.Pr)(P + x - (x * r + b * i) + T)),
              (O = (0, h.Pr)(O + b - (x * n + b * o) + C))),
            (l || c) &&
              ((s = S.getBBox()),
              (P = (0, h.Pr)(P + (l / 100) * s.width)),
              (O = (0, h.Pr)(O + (c / 100) * s.height))),
            (s =
              "matrix(" +
              r +
              "," +
              n +
              "," +
              i +
              "," +
              o +
              "," +
              P +
              "," +
              O +
              ")"),
            S.setAttribute("transform", s),
            E && (S.style[w] = s));
        },
        _addRotationalPropTween = function (e, t, r, n, i) {
          var o,
            s,
            a = (0, h.r9)(i),
            l = parseFloat(i) * (a && ~i.indexOf("rad") ? _ : 1) - n,
            c = n + l + "deg";
          return (
            a &&
              ("short" === (o = i.split("_")[1]) &&
                (l %= 360) != l % 180 &&
                (l += l < 0 ? 360 : -360),
              "cw" === o && l < 0
                ? (l = ((l + 36e9) % 360) - 360 * ~~(l / 360))
                : "ccw" === o &&
                  l > 0 &&
                  (l = ((l - 36e9) % 360) - 360 * ~~(l / 360))),
            (e._pt = s = new h.Fo(e._pt, t, r, n, l, _renderPropWithEnd)),
            (s.e = c),
            (s.u = "deg"),
            e._props.push(r),
            s
          );
        },
        _assign = function (e, t) {
          for (var r in t) e[r] = t[r];
          return e;
        },
        _addRawTransformPTs = function (e, t, r) {
          var n,
            i,
            o,
            s,
            a,
            l,
            c,
            u = _assign({}, r._gsap),
            p = r.style;
          for (i in (u.svg
            ? ((o = r.getAttribute("transform")),
              r.setAttribute("transform", ""),
              (p[w] = t),
              (n = _parseTransform(r, 1)),
              _removeProperty(r, w),
              r.setAttribute("transform", o))
            : ((o = getComputedStyle(r)[w]),
              (p[w] = t),
              (n = _parseTransform(r, 1)),
              (p[w] = o)),
          g))
            (o = u[i]) !== (s = n[i]) &&
              0 > "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) &&
              ((a =
                (0, h.Wy)(o) !== (c = (0, h.Wy)(s))
                  ? _convertToUnit(r, i, o, c)
                  : parseFloat(o)),
              (l = parseFloat(s)),
              (e._pt = new h.Fo(e._pt, n, i, a, l - a, _renderCSSProp)),
              (e._pt.u = c || 0),
              e._props.push(i));
          _assign(n, u);
        };
      (0, h.fS)("padding,margin,Width,Radius", function (e, t) {
        var r = "Right",
          n = "Bottom",
          i = "Left",
          o = (
            t < 3 ? ["Top", r, n, i] : ["Top" + i, "Top" + r, n + r, n + i]
          ).map(function (r) {
            return t < 2 ? e + r : "border" + r + e;
          });
        L[t > 1 ? "border" + e : e] = function (e, t, r, n, i) {
          var s, a;
          if (arguments.length < 4)
            return 5 ===
              (a = (s = o.map(function (t) {
                return _get(e, t, r);
              })).join(" ")).split(s[0]).length
              ? s[0]
              : a;
          ((s = (n + "").split(" ")),
            (a = {}),
            o.forEach(function (e, t) {
              return (a[e] = s[t] = s[t] || s[((t - 1) / 2) | 0]);
            }),
            e.init(t, a, i));
        };
      });
      var B = {
        name: "css",
        register: _initCore,
        targetTest: function (e) {
          return e.style && e.nodeType;
        },
        init: function (e, t, r, n, i) {
          var o,
            s,
            a,
            c,
            u,
            p,
            d,
            _,
            m,
            v,
            y,
            S,
            C,
            E,
            P,
            O,
            A = this._props,
            M = e.style,
            B = r.vars.startAt;
          for (d in (l || _initCore(),
          (this.styles = this.styles || _getStyleSaver(e)),
          (O = this.styles.props),
          (this.tween = r),
          t))
            if (
              "autoRound" !== d &&
              ((s = t[d]), !(h.$i[d] && (0, h.if)(d, t, r, n, e, i)))
            ) {
              if (
                ((u = typeof s),
                (p = L[d]),
                "function" === u && (u = typeof (s = s.call(r, n, e, i))),
                "string" === u && ~s.indexOf("random(") && (s = (0, h.UI)(s)),
                p)
              )
                p(this, e, d, s, r) && (P = 1);
              else if ("--" === d.substr(0, 2))
                ((o = (getComputedStyle(e).getPropertyValue(d) + "").trim()),
                  (s += ""),
                  (h.GN.lastIndex = 0),
                  h.GN.test(o) || ((_ = (0, h.Wy)(o)), (m = (0, h.Wy)(s))),
                  m
                    ? _ !== m && (o = _convertToUnit(e, d, o, m) + m)
                    : _ && (s += _),
                  this.add(M, "setProperty", o, s, n, i, 0, 0, d),
                  A.push(d),
                  O.push(d, 0, M[d]));
              else if ("undefined" !== u) {
                if (
                  (B && d in B
                    ? ((o =
                        "function" == typeof B[d]
                          ? B[d].call(r, n, e, i)
                          : B[d]),
                      (0, h.r9)(o) &&
                        ~o.indexOf("random(") &&
                        (o = (0, h.UI)(o)),
                      (0, h.Wy)(o + "") ||
                        "auto" === o ||
                        (o += h.Fc.units[d] || (0, h.Wy)(_get(e, d)) || ""),
                      "=" === (o + "").charAt(1) && (o = _get(e, d)))
                    : (o = _get(e, d)),
                  (c = parseFloat(o)),
                  (v =
                    "string" === u && "=" === s.charAt(1) && s.substr(0, 2)) &&
                    (s = s.substr(2)),
                  (a = parseFloat(s)),
                  d in b &&
                    ("autoAlpha" === d &&
                      (1 === c &&
                        "hidden" === _get(e, "visibility") &&
                        a &&
                        (c = 0),
                      O.push("visibility", 0, M.visibility),
                      _addNonTweeningPT(
                        this,
                        M,
                        "visibility",
                        c ? "inherit" : "hidden",
                        a ? "inherit" : "hidden",
                        !a,
                      )),
                    "scale" !== d &&
                      "transform" !== d &&
                      ~(d = b[d]).indexOf(",") &&
                      (d = d.split(",")[0])),
                  (y = d in g))
                ) {
                  if (
                    (this.styles.save(d),
                    "string" === u &&
                      "var(--" === s.substring(0, 6) &&
                      (a = parseFloat(
                        (s = _getComputedProperty(
                          e,
                          s.substring(4, s.indexOf(")")),
                        )),
                      )),
                    S ||
                      (((C = e._gsap).renderTransform && !t.parseTransform) ||
                        _parseTransform(e, t.parseTransform),
                      (E = !1 !== t.smoothOrigin && C.smooth),
                      ((S = this._pt =
                        new h.Fo(
                          this._pt,
                          M,
                          w,
                          0,
                          1,
                          C.renderTransform,
                          C,
                          0,
                          -1,
                        )).dep = 1)),
                    "scale" === d)
                  )
                    ((this._pt = new h.Fo(
                      this._pt,
                      C,
                      "scaleY",
                      C.scaleY,
                      (v ? (0, h.cy)(C.scaleY, v + a) : a) - C.scaleY || 0,
                      _renderCSSProp,
                    )),
                      (this._pt.u = 0),
                      A.push("scaleY", d),
                      (d += "X"));
                  else if ("transformOrigin" === d) {
                    (O.push(T, 0, M[T]),
                      (s = _convertKeywordsToPercentages(s)),
                      C.svg
                        ? _applySVGOrigin(e, s, 0, E, 0, this)
                        : ((m = parseFloat(s.split(" ")[2]) || 0) !==
                            C.zOrigin &&
                            _addNonTweeningPT(this, C, "zOrigin", C.zOrigin, m),
                          _addNonTweeningPT(
                            this,
                            M,
                            d,
                            _firstTwoOnly(o),
                            _firstTwoOnly(s),
                          )));
                    continue;
                  } else if ("svgOrigin" === d) {
                    _applySVGOrigin(e, s, 1, E, 0, this);
                    continue;
                  } else if (d in k) {
                    _addRotationalPropTween(
                      this,
                      C,
                      d,
                      c,
                      v ? (0, h.cy)(c, v + s) : s,
                    );
                    continue;
                  } else if ("smoothOrigin" === d) {
                    _addNonTweeningPT(this, C, "smooth", C.smooth, s);
                    continue;
                  } else if ("force3D" === d) {
                    C[d] = s;
                    continue;
                  } else if ("transform" === d) {
                    _addRawTransformPTs(this, s, e);
                    continue;
                  }
                } else d in M || (d = _checkPropPrefix(d) || d);
                if (
                  y ||
                  ((a || 0 === a) && (c || 0 === c) && !x.test(s) && d in M)
                )
                  ((_ = (o + "").substr((c + "").length)),
                    a || (a = 0),
                    (m = (0, h.Wy)(s) || (d in h.Fc.units ? h.Fc.units[d] : _)),
                    _ !== m && (c = _convertToUnit(e, d, o, m)),
                    (this._pt = new h.Fo(
                      this._pt,
                      y ? C : M,
                      d,
                      c,
                      (v ? (0, h.cy)(c, v + a) : a) - c,
                      y || ("px" !== m && "zIndex" !== d) || !1 === t.autoRound
                        ? _renderCSSProp
                        : _renderRoundedCSSProp,
                    )),
                    (this._pt.u = m || 0),
                    _ !== m &&
                      "%" !== m &&
                      ((this._pt.b = o),
                      (this._pt.r = _renderCSSPropWithBeginning)));
                else if (d in M)
                  _tweenComplexCSSString.call(this, e, d, o, v ? v + s : s);
                else if (d in e) this.add(e, d, o || e[d], v ? v + s : s, n, i);
                else if ("parseTransform" !== d) {
                  (0, h.lC)(d, s);
                  continue;
                }
                (y ||
                  (d in M
                    ? O.push(d, 0, M[d])
                    : "function" == typeof e[d]
                      ? O.push(d, 2, e[d]())
                      : O.push(d, 1, o || e[d])),
                  A.push(d));
              }
            }
          P && (0, h.JV)(this);
        },
        render: function (e, t) {
          if (t.tween._time || !p())
            for (var r = t._pt; r; ) (r.r(e, r.d), (r = r._next));
          else t.styles.revert();
        },
        get: _get,
        aliases: b,
        getSetter: function (e, t, r) {
          var n = b[t];
          return (
            n && 0 > n.indexOf(",") && (t = n),
            t in g && t !== T && (e._gsap.x || _get(e, "x"))
              ? r && u === r
                ? "scale" === t
                  ? _setterScale
                  : _setterTransform
                : ((u = r || {}),
                  "scale" === t
                    ? _setterScaleWithRender
                    : _setterTransformWithRender)
              : e.style && !(0, h.m2)(e.style[t])
                ? _setterCSSStyle
                : ~t.indexOf("-")
                  ? _setterCSSProp
                  : (0, h.S5)(e, t)
          );
        },
        core: { _removeProperty: _removeProperty, _getMatrix: _getMatrix },
      };
      ((h.p8.utils.checkPrefix = _checkPropPrefix),
        (h.p8.core.getStyleSaver = _getStyleSaver),
        (n = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent"),
        (i = "rotation,rotationX,rotationY,skewX,skewY"),
        (o = (0, h.fS)(
          n +
            "," +
            i +
            ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
          function (e) {
            g[e] = 1;
          },
        )),
        (0, h.fS)(i, function (e) {
          ((h.Fc.units[e] = "deg"), (k[e] = 1));
        }),
        (b[o[13]] = n + "," + i),
        (0, h.fS)(
          "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
          function (e) {
            var t = e.split(":");
            b[t[1]] = o[t[0]];
          },
        ),
        (0, h.fS)(
          "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
          function (e) {
            h.Fc.units[e] = "px";
          },
        ),
        h.p8.registerPlugin(B));
      var D = h.p8.registerPlugin(B) || h.p8;
      D.core.Tween;
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
                          var l = n.lastIndexOf("/");
                          if (l !== n.length - 1) {
                            (-1 === l
                              ? ((n = ""), (i = 0))
                              : (i =
                                  (n = n.slice(0, l)).length -
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
                    var i = e.length, o = i - n, s = 1;
                    s < r.length && 47 === r.charCodeAt(s);
                    ++s
                  );
                  for (
                    var a = r.length - s, l = o < a ? o : a, c = -1, u = 0;
                    u <= l;
                    ++u
                  ) {
                    if (u === l) {
                      if (a > l) {
                        if (47 === r.charCodeAt(s + u))
                          return r.slice(s + u + 1);
                        if (0 === u) return r.slice(s + u);
                      } else
                        o > l &&
                          (47 === e.charCodeAt(n + u)
                            ? (c = u)
                            : 0 === u && (c = 0));
                      break;
                    }
                    var p = e.charCodeAt(n + u);
                    if (p !== r.charCodeAt(s + u)) break;
                    47 === p && (c = u);
                  }
                  var d = "";
                  for (u = n + c + 1; u <= i; ++u)
                    (u === i || 47 === e.charCodeAt(u)) &&
                      (0 === d.length ? (d += "..") : (d += "/.."));
                  return d.length > 0
                    ? d + r.slice(s + c)
                    : ((s += c), 47 === r.charCodeAt(s) && ++s, r.slice(s));
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
                      o = e.length - 1;
                    o >= 1;
                    --o
                  )
                    if (47 === (t = e.charCodeAt(o))) {
                      if (!i) {
                        n = o;
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
                    o = !0;
                  if (void 0 !== t && t.length > 0 && t.length <= e.length) {
                    if (t.length === e.length && t === e) return "";
                    var s = t.length - 1,
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
                          s >= 0 &&
                            (l === t.charCodeAt(s)
                              ? -1 == --s && (i = r)
                              : ((s = -1), (i = a))));
                    }
                    return (
                      n === i ? (i = a) : -1 === i && (i = e.length),
                      e.slice(n, i)
                    );
                  }
                  for (r = e.length - 1; r >= 0; --r)
                    if (47 === e.charCodeAt(r)) {
                      if (!o) {
                        n = r + 1;
                        break;
                      }
                    } else -1 === i && ((o = !1), (i = r + 1));
                  return -1 === i ? "" : e.slice(n, i);
                },
                extname: function (e) {
                  assertPath(e);
                  for (
                    var t = -1, r = 0, n = -1, i = !0, o = 0, s = e.length - 1;
                    s >= 0;
                    --s
                  ) {
                    var a = e.charCodeAt(s);
                    if (47 === a) {
                      if (!i) {
                        r = s + 1;
                        break;
                      }
                      continue;
                    }
                    (-1 === n && ((i = !1), (n = s + 1)),
                      46 === a
                        ? -1 === t
                          ? (t = s)
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
                    i = 47 === n;
                  i ? ((r.root = "/"), (t = 1)) : (t = 0);
                  for (
                    var o = -1, s = 0, a = -1, l = !0, c = e.length - 1, u = 0;
                    c >= t;
                    --c
                  ) {
                    if (47 === (n = e.charCodeAt(c))) {
                      if (!l) {
                        s = c + 1;
                        break;
                      }
                      continue;
                    }
                    (-1 === a && ((l = !1), (a = c + 1)),
                      46 === n
                        ? -1 === o
                          ? (o = c)
                          : 1 !== u && (u = 1)
                        : -1 !== o && (u = -1));
                  }
                  return (
                    -1 === o ||
                    -1 === a ||
                    0 === u ||
                    (1 === u && o === a - 1 && o === s + 1)
                      ? -1 !== a &&
                        (0 === s && i
                          ? (r.base = r.name = e.slice(1, a))
                          : (r.base = r.name = e.slice(s, a)))
                      : (0 === s && i
                          ? ((r.name = e.slice(1, o)), (r.base = e.slice(1, a)))
                          : ((r.name = e.slice(s, o)),
                            (r.base = e.slice(s, a))),
                        (r.ext = e.slice(o, a))),
                    s > 0 ? (r.dir = e.slice(0, s - 1)) : i && (r.dir = "/"),
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
            o = !0;
          try {
            (t[e](i, i.exports, __nccwpck_require__), (o = !1));
          } finally {
            o && delete r[e];
          }
          return i.exports;
        }
        __nccwpck_require__.ab = "//";
        var n = __nccwpck_require__(114);
        e.exports = n;
      })();
    },
  },
]);
