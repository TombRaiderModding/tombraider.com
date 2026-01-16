(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [169],
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
        c =
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
      var o = r(55817);
      Object.defineProperty(t, "BLOCKS", {
        enumerable: !0,
        get: function () {
          return o.BLOCKS;
        },
      });
      var l = r(81173);
      Object.defineProperty(t, "INLINES", {
        enumerable: !0,
        get: function () {
          return l.INLINES;
        },
      });
      var u = r(73428);
      (Object.defineProperty(t, "MARKS", {
        enumerable: !0,
        get: function () {
          return c(u).default;
        },
      }),
        a(r(43406), t),
        a(r(54076), t),
        a(r(44611), t));
      var d = r(62949);
      Object.defineProperty(t, "EMPTY_DOCUMENT", {
        enumerable: !0,
        get: function () {
          return c(d).default;
        },
      });
      var h = s(r(31834));
      t.helpers = h;
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
      var s = r(55817),
        c = r(81173),
        o = a(r(73428));
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
          c.INLINES.HYPERLINK,
          c.INLINES.ENTRY_HYPERLINK,
          c.INLINES.ASSET_HYPERLINK,
          c.INLINES.EMBEDDED_ENTRY,
          "text",
        ]),
        (t.V1_MARKS = [
          o.default.BOLD,
          o.default.CODE,
          o.default.ITALIC,
          o.default.UNDERLINE,
        ]));
    },
    54076: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    14040: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/account/surveys/[survey]",
        function () {
          return r(74970);
        },
      ]);
    },
    43733: function (e, t, r) {
      "use strict";
      r.a(e, async function (e, n) {
        try {
          r.d(t, {
            Z: function () {
              return AccountHeader;
            },
          });
          var i = r(97458),
            a = r(52983),
            s = r(21925),
            c = r(14647),
            o = r(68956),
            l = r.n(o),
            u = r(66426),
            d = r.n(u),
            h = r(20102),
            E = e([s, c, h]);
          function AccountHeader(e) {
            let { navItems: t, surveys: r } = e,
              { isLoggedIn: n } = (0, h.S)(),
              [o, u] = (0, a.useState)(!1),
              getTabs = () =>
                t
                  .filter(
                    (e) => e.showInHeader && (!e.hideForLoggedInUsers || n),
                  )
                  .map((e) =>
                    (0, i.jsx)(c.Ax, {
                      href: e.link,
                      title: e.name,
                      darkMode: !0,
                    }),
                  );
            return (0, i.jsxs)("header", {
              className:
                "lg:w-[calc(100% - 256px] relative sticky left-0 top-0 z-[20]  bg-white px-12 pt-6 lg:ml-[256px]",
              children: [
                (0, i.jsx)("nav", {
                  "aria-label": "Global",
                  children: (0, i.jsxs)("div", {
                    className: " flex w-full justify-between",
                    children: [
                      (0, i.jsx)("div", {
                        className: "hidden items-center gap-x-4 lg:flex",
                        children: getTabs(),
                      }),
                      (0, i.jsx)(l(), {
                        width: 48,
                        height: 48,
                        alt: "hamburger menu",
                        className:
                          "relative z-20 cursor-pointer invert filter lg:hidden",
                        src: o ? "/images/close.svg" : "/images/hamburger.svg",
                        onClick: () => u(!o),
                      }),
                      (0, i.jsx)(d(), {
                        href: "/",
                        children: (0, i.jsx)(l(), {
                          className: "relative h-10 w-auto lg:hidden",
                          priority: !0,
                          src: "/images/tombraider-logo-dark.svg",
                          alt: "Header Logo",
                          width: 48,
                          height: 48,
                        }),
                      }),
                      (0, i.jsx)(s.Z, { surveys: r, darkMode: !0 }),
                    ],
                  }),
                }),
                (0, i.jsx)("div", {
                  className: " mt-4 h-[1px] w-full bg-gray-300/50",
                }),
                (0, i.jsx)("div", {
                  className:
                    "fixed left-0 top-0 z-10  w-full    overflow-hidden bg-gray-100 bg-opacity-90 transition duration-300 lg:hidden",
                  style: {
                    height: o ? "100vh" : "0",
                    transition: "height 0.3s ease",
                  },
                  children: (0, i.jsx)("div", {
                    className: "flex flex-col items-center gap-y-8 pt-32",
                    children: getTabs(),
                  }),
                }),
              ],
            });
          }
          (([s, c, h] = E.then ? (await E)() : E), n());
        } catch (e) {
          n(e);
        }
      });
    },
    78486: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return AccountMobileTray;
        },
      });
      var n = r(97458),
        i = r(68956),
        a = r.n(i),
        s = r(66426),
        c = r.n(s),
        o = r(14322),
        l = r(52983);
      function AccountMobileTray() {
        let e = (0, o.useRouter)(),
          [t, r] = (0, l.useState)("Dashboard");
        return (
          (0, l.useEffect)(() => {
            e.pathname.includes("settings")
              ? r("Settings")
              : e.pathname.includes("rewards")
                ? r("Rewards")
                : e.pathname.includes("surveys")
                  ? r("Surveys")
                  : r("Dashboard");
          }, [e, e.pathname]),
          (0, n.jsxs)("div", {
            className:
              "fixed bottom-8 left-1/2 z-10 flex w-48 -translate-x-1/2 transform gap-x-6 rounded-xl bg-black/90  px-6 py-3 text-white lg:hidden",
            children: [
              (0, n.jsx)(TrayItem, {
                src: "/images/dashboard-icon.svg",
                href: "/account",
                active: "Dashboard" === t,
              }),
              (0, n.jsx)(TrayItem, {
                src: "/images/rewards-icon.svg",
                href: "/account/rewards",
                active: "Rewards" === t,
              }),
              (0, n.jsx)(TrayItem, {
                src: "/images/survey-icon.svg",
                href: "/account/surveys",
                active: "Surveys" === t,
              }),
              (0, n.jsx)(TrayItem, {
                src: "/images/settings-icon.svg",
                href: "/account/settings",
                active: "Settings" === t,
              }),
            ],
          })
        );
      }
      function TrayItem(e) {
        let { active: t, src: r, href: i } = e;
        return (0, n.jsx)(c(), {
          href: i,
          children: (0, n.jsx)(a(), {
            width: 32,
            height: 32,
            alt: "Logo",
            src: r,
            style: { opacity: t ? 1 : 0.5, color: "white", fill: "white" },
          }),
        });
      }
    },
    12305: function (e, t, r) {
      "use strict";
      r.a(e, async function (e, n) {
        try {
          r.d(t, {
            Z: function () {
              return AuthenticatedWrapper;
            },
          });
          var i = r(14322),
            a = r(52983),
            s = r(20102),
            c = e([s]);
          function AuthenticatedWrapper(e) {
            let { children: t } = e,
              r = (0, i.useRouter)(),
              { userData: n, cacheLoaded: c, loading: o } = (0, s.S)();
            return ((0, a.useEffect)(() => {
              o || !c || n || r.replace("/");
            }, [n, c, o, r]),
            n && c)
              ? t
              : null;
          }
          ((s = (c.then ? (await c)() : c)[0]), n());
        } catch (e) {
          n(e);
        }
      });
    },
    10055: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return Sidebar;
        },
      });
      var n = r(97458),
        i = r(68956),
        a = r.n(i),
        s = r(66426),
        c = r.n(s),
        o = r(14322),
        l = r(52983);
      function Sidebar() {
        let e = (0, o.useRouter)(),
          [t, r] = (0, l.useState)("Dashboard");
        return (
          (0, l.useEffect)(() => {
            e.pathname.includes("settings")
              ? r("Settings")
              : e.pathname.includes("rewards")
                ? r("Rewards")
                : e.pathname.includes("surveys")
                  ? r("Surveys")
                  : r("Dashboard");
          }, [e, e.pathname]),
          (0, n.jsxs)("div", {
            className:
              "fixed left-0 top-0 z-[100] hidden h-screen w-[256px] flex-col items-center gap-y-6 border-r bg-white pt-8 lg:flex",
            children: [
              (0, n.jsx)(c(), {
                href: "/",
                children: (0, n.jsx)(a(), {
                  width: 87,
                  height: 40,
                  alt: "dark Tomb Raider logo",
                  src: "/images/tombraider-logo-dark.svg",
                  className: "pb-6",
                }),
              }),
              (0, n.jsx)(SidebarItem, {
                selected: "Dashboard" === t,
                href: "/account",
                src: "/images/dashboard-icon.svg",
                children: "Dashboard",
              }),
              (0, n.jsx)(SidebarItem, {
                selected: "Rewards" === t,
                href: "/account/rewards",
                src: "/images/rewards-icon.svg",
                children: "Rewards",
              }),
              (0, n.jsx)(SidebarItem, {
                selected: "Surveys" === t,
                href: "/account/surveys",
                src: "/images/survey-icon.svg",
                children: "Surveys",
              }),
              (0, n.jsx)(SidebarItem, {
                selected: "Settings" === t,
                href: "/account/settings",
                src: "/images/settings-icon.svg",
                children: "Settings",
              }),
            ],
          })
        );
      }
      function SidebarItem(e) {
        let { src: t, children: r, selected: i, href: s } = e;
        return (0, n.jsx)(c(), {
          href: s,
          children: (0, n.jsxs)("div", {
            className: "flex w-32 cursor-pointer font-bold ".concat(
              i ? "opacity-100" : "opacity-50",
            ),
            children: [
              (0, n.jsx)(a(), {
                width: 24,
                height: 24,
                alt: "Logo",
                className: "mr-3",
                src: t,
              }),
              r,
            ],
          }),
        });
      }
    },
    74970: function (e, t, r) {
      "use strict";
      r.a(e, async function (e, n) {
        try {
          (r.r(t),
            r.d(t, {
              __N_SSG: function () {
                return h;
              },
              default: function () {
                return Survey;
              },
            }));
          var i = r(97458),
            a = r(43733),
            s = r(78486),
            c = r(12305),
            o = r(10055),
            l = r(98245),
            u = r(14322),
            d = e([a, c, l]);
          [a, c, l] = d.then ? (await d)() : d;
          var h = !0;
          function Survey(e) {
            let { navItems: t, survey: r, surveys: n } = e,
              d = (0, u.useRouter)();
            return r
              ? (0, i.jsx)(c.Z, {
                  children: (0, i.jsx)("main", {
                    className: " min-h-screen bg-white text-black",
                    children: (0, i.jsxs)("div", {
                      className: " ",
                      children: [
                        (0, i.jsx)(a.Z, { surveys: n, navItems: t }),
                        (0, i.jsx)(o.Z, {}),
                        (0, i.jsx)(s.Z, {}),
                        (0, i.jsx)("div", {
                          className:
                            "px-6 py-12 pb-32 md:pb-16 lg:ml-[256px] lg:px-12",
                          children: (0, i.jsx)(l.Z, { survey: r }),
                        }),
                      ],
                    }),
                  }),
                })
              : (d.push("/404"), null);
          }
          n();
        } catch (e) {
          n(e);
        }
      });
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
                  var r, n = "", i = 0, a = -1, s = 0, c = 0;
                  c <= e.length;
                  ++c
                ) {
                  if (c < e.length) r = e.charCodeAt(c);
                  else if (47 === r) break;
                  else r = 47;
                  if (47 === r) {
                    if (a === c - 1 || 1 === s);
                    else if (a !== c - 1 && 2 === s) {
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
                              (a = c),
                              (s = 0));
                            continue;
                          }
                        } else if (2 === n.length || 1 === n.length) {
                          ((n = ""), (i = 0), (a = c), (s = 0));
                          continue;
                        }
                      }
                      t && (n.length > 0 ? (n += "/..") : (n = ".."), (i = 2));
                    } else
                      (n.length > 0
                        ? (n += "/" + e.slice(a + 1, c))
                        : (n = e.slice(a + 1, c)),
                        (i = c - a - 1));
                    ((a = c), (s = 0));
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
                    var i = e.length, a = i - n, s = 1;
                    s < r.length && 47 === r.charCodeAt(s);
                    ++s
                  );
                  for (
                    var c = r.length - s, o = a < c ? a : c, l = -1, u = 0;
                    u <= o;
                    ++u
                  ) {
                    if (u === o) {
                      if (c > o) {
                        if (47 === r.charCodeAt(s + u))
                          return r.slice(s + u + 1);
                        if (0 === u) return r.slice(s + u);
                      } else
                        a > o &&
                          (47 === e.charCodeAt(n + u)
                            ? (l = u)
                            : 0 === u && (l = 0));
                      break;
                    }
                    var d = e.charCodeAt(n + u);
                    if (d !== r.charCodeAt(s + u)) break;
                    47 === d && (l = u);
                  }
                  var h = "";
                  for (u = n + l + 1; u <= i; ++u)
                    (u === i || 47 === e.charCodeAt(u)) &&
                      (0 === h.length ? (h += "..") : (h += "/.."));
                  return h.length > 0
                    ? h + r.slice(s + l)
                    : ((s += l), 47 === r.charCodeAt(s) && ++s, r.slice(s));
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
                    var s = t.length - 1,
                      c = -1;
                    for (r = e.length - 1; r >= 0; --r) {
                      var o = e.charCodeAt(r);
                      if (47 === o) {
                        if (!a) {
                          n = r + 1;
                          break;
                        }
                      } else
                        (-1 === c && ((a = !1), (c = r + 1)),
                          s >= 0 &&
                            (o === t.charCodeAt(s)
                              ? -1 == --s && (i = r)
                              : ((s = -1), (i = c))));
                    }
                    return (
                      n === i ? (i = c) : -1 === i && (i = e.length),
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
                    var t = -1, r = 0, n = -1, i = !0, a = 0, s = e.length - 1;
                    s >= 0;
                    --s
                  ) {
                    var c = e.charCodeAt(s);
                    if (47 === c) {
                      if (!i) {
                        r = s + 1;
                        break;
                      }
                      continue;
                    }
                    (-1 === n && ((i = !1), (n = s + 1)),
                      46 === c
                        ? -1 === t
                          ? (t = s)
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
                    var a = -1, s = 0, c = -1, o = !0, l = e.length - 1, u = 0;
                    l >= t;
                    --l
                  ) {
                    if (47 === (n = e.charCodeAt(l))) {
                      if (!o) {
                        s = l + 1;
                        break;
                      }
                      continue;
                    }
                    (-1 === c && ((o = !1), (c = l + 1)),
                      46 === n
                        ? -1 === a
                          ? (a = l)
                          : 1 !== u && (u = 1)
                        : -1 !== a && (u = -1));
                  }
                  return (
                    -1 === a ||
                    -1 === c ||
                    0 === u ||
                    (1 === u && a === c - 1 && a === s + 1)
                      ? -1 !== c &&
                        (0 === s && i
                          ? (r.base = r.name = e.slice(1, c))
                          : (r.base = r.name = e.slice(s, c)))
                      : (0 === s && i
                          ? ((r.name = e.slice(1, a)), (r.base = e.slice(1, c)))
                          : ((r.name = e.slice(s, a)),
                            (r.base = e.slice(s, c))),
                        (r.ext = e.slice(a, c))),
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
    (e.O(0, [46, 956, 672, 34, 647, 790, 774, 888, 179], function () {
      return e((e.s = 14040));
    }),
      (_N_E = e.O()));
  },
]);
