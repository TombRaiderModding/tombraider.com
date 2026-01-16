(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [996],
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
        l =
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
        s =
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
      var c = r(81173);
      Object.defineProperty(t, "INLINES", {
        enumerable: !0,
        get: function () {
          return c.INLINES;
        },
      });
      var d = r(73428);
      (Object.defineProperty(t, "MARKS", {
        enumerable: !0,
        get: function () {
          return s(d).default;
        },
      }),
        a(r(43406), t),
        a(r(54076), t),
        a(r(44611), t));
      var u = r(62949);
      Object.defineProperty(t, "EMPTY_DOCUMENT", {
        enumerable: !0,
        get: function () {
          return s(u).default;
        },
      });
      var f = l(r(31834));
      t.helpers = f;
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
      var l = r(55817),
        s = r(81173),
        o = a(r(73428));
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
          (((n = {})[l.BLOCKS.OL_LIST] = [l.BLOCKS.LIST_ITEM]),
          (n[l.BLOCKS.UL_LIST] = [l.BLOCKS.LIST_ITEM]),
          (n[l.BLOCKS.LIST_ITEM] = t.LIST_ITEM_BLOCKS),
          (n[l.BLOCKS.QUOTE] = [l.BLOCKS.PARAGRAPH]),
          (n[l.BLOCKS.TABLE] = [l.BLOCKS.TABLE_ROW]),
          (n[l.BLOCKS.TABLE_ROW] = [
            l.BLOCKS.TABLE_CELL,
            l.BLOCKS.TABLE_HEADER_CELL,
          ]),
          (n[l.BLOCKS.TABLE_CELL] = [l.BLOCKS.PARAGRAPH]),
          (n[l.BLOCKS.TABLE_HEADER_CELL] = [l.BLOCKS.PARAGRAPH]),
          n)),
        (t.HEADINGS = [
          l.BLOCKS.HEADING_1,
          l.BLOCKS.HEADING_2,
          l.BLOCKS.HEADING_3,
          l.BLOCKS.HEADING_4,
          l.BLOCKS.HEADING_5,
          l.BLOCKS.HEADING_6,
        ]),
        (t.TEXT_CONTAINERS = i([l.BLOCKS.PARAGRAPH], t.HEADINGS, !0)),
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
          s.INLINES.HYPERLINK,
          s.INLINES.ENTRY_HYPERLINK,
          s.INLINES.ASSET_HYPERLINK,
          s.INLINES.EMBEDDED_ENTRY,
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
    64527: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/data-deletion",
        function () {
          return r(11621);
        },
      ]);
    },
    64005: function (e, t, r) {
      "use strict";
      var n = r(97458),
        i = r(66426),
        a = r.n(i);
      t.Z = (e) => {
        let { href: t, children: r, className: i, ...l } = e,
          s = "string" == typeof t && t.startsWith("http");
        return s
          ? (0, n.jsx)("a", {
              href: t,
              target: "_blank",
              rel: "noopener noreferrer",
              className: i,
              ...l,
              children: r,
            })
          : (0, n.jsx)(a(), {
              legacyBehavior: !0,
              href: t,
              ...l,
              children: (0, n.jsx)("a", { className: i, children: r }),
            });
      };
    },
    96854: function (e, t, r) {
      "use strict";
      r.a(e, async function (e, n) {
        try {
          r.d(t, {
            Z: function () {
              return Footer;
            },
          });
          var i = r(97458),
            a = r(68956),
            l = r.n(a),
            s = r(66426),
            o = r.n(s),
            c = r(20102),
            d = r(64005),
            u = r(14790),
            f = e([c, u]);
          function Footer(e) {
            var t, r, n;
            let { websiteSingleton: a, navItems: s, footerSocialLinks: f } = e,
              { isLoggedIn: h, shopifyUrl: E } = (0, c.S)(),
              L = s.filter(
                (e) => e.showInFooter && !(h && e.hideForLoggedInUsers),
              ),
              _ = s.filter(
                (e) => e.showInSubFooter && !(h && e.hideForLoggedInUsers),
              );
            return (0, i.jsxs)("div", {
              className: "relative w-full bg-black px-8 text-white lg:px-32",
              children: [
                (0, i.jsxs)("div", {
                  className:
                    "flex flex-col items-center justify-center space-y-16 pb-16 pt-16 lg:flex-row lg:items-stretch lg:justify-between lg:space-y-0 lg:pt-32",
                  children: [
                    (0, i.jsx)("div", {
                      children: (0, i.jsx)(l(), {
                        src: (0, u.Wx)(
                          null === (r = a.footerLogo) || void 0 === r
                            ? void 0
                            : null === (t = r.fields.file) || void 0 === t
                              ? void 0
                              : t.url,
                        ),
                        width: 248,
                        height: 248,
                        alt: (0, u.Wx)(
                          null === (n = a.footerLogo) || void 0 === n
                            ? void 0
                            : n.fields.description,
                        ),
                        className: "w-40",
                      }),
                    }),
                    (0, i.jsxs)("div", {
                      className:
                        "flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-lg text-darkgray-500 ",
                      children: [
                        L.map((e) => {
                          let t = e.link;
                          return (
                            e.shouldReplaceWithGeneratedShopLink &&
                              E &&
                              (t = E),
                            (0, i.jsx)(
                              o(),
                              { href: t, children: e.name },
                              e.link + e.name,
                            )
                          );
                        }),
                        (0, i.jsx)("span", {
                          id: "accessibilityWidget",
                          className: "cursor-pointer",
                          children: "Accessibility",
                        }),
                        (0, i.jsx)("span", {
                          className: "cursor-pointer",
                          onClick: () => {
                            var e;
                            return null === (e = window.OneTrust) ||
                              void 0 === e
                              ? void 0
                              : e.ToggleInfoDisplay();
                          },
                          children:
                            "Do Not Sell or Share My Personal Information",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className:
                    "flex flex-col items-center justify-center space-y-16 pb-16 lg:flex-row lg:items-stretch lg:justify-between lg:space-y-0",
                  children: [
                    (0, i.jsx)("div", {
                      className: "text-center text-darkgray-500",
                      children: a.footerCopyright,
                    }),
                    (0, i.jsx)("div", {
                      className: "flex items-center space-x-4 text-white",
                      children: f.map((e) => {
                        var t, r, n, a;
                        return (0, i.jsx)(
                          d.Z,
                          {
                            href: e.link,
                            children: (0, i.jsx)(l(), {
                              src: (0, u.Wx)(
                                null === (r = e.icon) || void 0 === r
                                  ? void 0
                                  : null === (t = r.fields.file) || void 0 === t
                                    ? void 0
                                    : t.url,
                              ),
                              alt:
                                null !==
                                  (a =
                                    null === (n = e.icon) || void 0 === n
                                      ? void 0
                                      : n.fields.description) && void 0 !== a
                                  ? a
                                  : "",
                              width: 20,
                              height: 20,
                            }),
                          },
                          e.link,
                        );
                      }),
                    }),
                  ],
                }),
                (0, i.jsx)("div", { className: "h-[1px] bg-gray-500" }),
                (0, i.jsxs)("div", {
                  className:
                    "flew-col flex flex-col items-start justify-start gap-x-10 gap-y-10 py-12 text-gray-300 md:justify-between 2xl:flex-row ",
                  children: [
                    (0, i.jsx)("p", {
                      className:
                        "max-w-[1000px] text-center text-sm text-darkgray-300 lg:text-left",
                      children: a.footerLegalNotice,
                    }),
                    (0, i.jsx)("div", {
                      className:
                        "flex w-full flex-wrap items-center justify-center gap-x-10 gap-y-2 text-darkgray-500 md:flex-row md:gap-x-10 md:gap-y-0 lg:w-auto lg:justify-start",
                      children: _.map((e) =>
                        (0, i.jsx)(
                          "a",
                          { href: e.link, children: e.name },
                          e.link + e.name,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            });
          }
          (([c, u] = f.then ? (await f)() : f), n());
        } catch (e) {
          n(e);
        }
      });
    },
    11621: function (e, t, r) {
      "use strict";
      r.a(e, async function (e, n) {
        try {
          (r.r(t),
            r.d(t, {
              __N_SSG: function () {
                return d;
              },
              default: function () {
                return DataDeletionPage;
              },
            }));
          var i = r(97458),
            a = r(96854),
            l = r(14647),
            s = r(66426),
            o = r.n(s),
            c = e([a, l]);
          [a, l] = c.then ? (await c)() : c;
          var d = !0;
          function DataDeletionPage(e) {
            let {
              websiteSingleton: t,
              navItems: r,
              footerSocialLinks: n,
              surveys: s,
              signUpBanner: c,
            } = e;
            return (0, i.jsxs)("main", {
              className: "flex min-h-screen flex-col bg-white text-black",
              children: [
                (0, i.jsx)(l.ZP, { navItems: r, surveys: s, signUpBanner: c }),
                (0, i.jsxs)("div", {
                  className:
                    "mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-6 py-16 lg:px-12",
                  children: [
                    (0, i.jsx)("header", {
                      className: "space-y-4",
                      children: (0, i.jsx)("h1", {
                        className: "text-4xl font-bold",
                        children: "Facebook Data Deletion",
                      }),
                    }),
                    (0, i.jsxs)("section", {
                      className: "space-y-3",
                      children: [
                        (0, i.jsx)("h2", {
                          className: "text-2xl font-semibold",
                          children:
                            "Data we collect when you sign in with Facebook",
                        }),
                        (0, i.jsxs)("p", {
                          className: "text-lg text-darkgray-700",
                          children: [
                            "Our",
                            " ",
                            (0, i.jsx)(o(), {
                              className: "font-semibold underline",
                              href: "https://www.crystaldynamics.com/legal/privacy",
                              children: "Privacy Notice",
                            }),
                            " ",
                            "and",
                            " ",
                            (0, i.jsx)(o(), {
                              className: "font-semibold underline",
                              href: "https://www.crystaldynamics.com/legal/cookies",
                              children: "Cookie Notice",
                            }),
                            " ",
                            "describe certain categories of data that we collect from and about you. When you sign in to a Tomb Raider account using Facebook, we also collect:",
                          ],
                        }),
                        (0, i.jsxs)("ul", {
                          className:
                            "list-disc space-y-2 pl-5 text-lg text-darkgray-700",
                          children: [
                            (0, i.jsx)("li", {
                              children: "Your Facebook account ID.",
                            }),
                            (0, i.jsx)("li", {
                              children:
                                "The email address associated with your Facebook account.",
                            }),
                          ],
                        }),
                        (0, i.jsx)("p", {
                          className: "text-lg text-darkgray-700",
                          children:
                            "Note: We do not receive your Facebook friends list, posts, or other Facebook profile content when you sign in with Facebook.",
                        }),
                      ],
                    }),
                    (0, i.jsxs)("section", {
                      className: "space-y-3",
                      children: [
                        (0, i.jsx)("h2", {
                          className: "text-2xl font-semibold",
                          children: "Deleting your account",
                        }),
                        (0, i.jsx)("p", {
                          className: "text-lg text-darkgray-700",
                          children:
                            "You can remove Facebook-linked data by deleting your Tomb Raider account in settings.",
                        }),
                        (0, i.jsxs)("ol", {
                          className:
                            "list-decimal space-y-2 pl-5 text-lg text-darkgray-700",
                          children: [
                            (0, i.jsxs)("li", {
                              children: [
                                "Go to",
                                " ",
                                (0, i.jsx)(o(), {
                                  href: "/account/settings",
                                  className:
                                    "text-blue-600 font-semibold underline",
                                  children: "Account Settings",
                                }),
                                ".",
                              ],
                            }),
                            (0, i.jsx)("li", {
                              children: 'Select "Delete My Account."',
                            }),
                            (0, i.jsx)("li", {
                              children:
                                "Deletion begins immediately and removes your Tomb Raider account, the linked Facebook login ID, and data associated with your Tomb Raider profile.",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)("section", {
                      className: "space-y-3",
                      children: [
                        (0, i.jsx)("h2", {
                          className: "text-2xl font-semibold",
                          children: "What happens next",
                        }),
                        (0, i.jsxs)("ul", {
                          className:
                            "list-disc space-y-2 pl-5 text-lg text-darkgray-700",
                          children: [
                            (0, i.jsx)("li", {
                              children:
                                "We delete your Tomb Raider account and associated player data, which also removes the Facebook login link.",
                            }),
                            (0, i.jsx)("li", {
                              children:
                                "Account deletion removes rewards and progress and cannot be undone.",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsx)(o(), {
                      href: "/account/settings",
                      className:
                        "inline-flex max-w-fit rounded border border-black bg-black px-6 py-3 text-base font-semibold text-white hover:bg-gray-900",
                      children: "Go to Account Settings",
                    }),
                  ],
                }),
                (0, i.jsx)(a.Z, {
                  websiteSingleton: t,
                  navItems: r,
                  footerSocialLinks: n,
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
                  var r, n = "", i = 0, a = -1, l = 0, s = 0;
                  s <= e.length;
                  ++s
                ) {
                  if (s < e.length) r = e.charCodeAt(s);
                  else if (47 === r) break;
                  else r = 47;
                  if (47 === r) {
                    if (a === s - 1 || 1 === l);
                    else if (a !== s - 1 && 2 === l) {
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
                              (a = s),
                              (l = 0));
                            continue;
                          }
                        } else if (2 === n.length || 1 === n.length) {
                          ((n = ""), (i = 0), (a = s), (l = 0));
                          continue;
                        }
                      }
                      t && (n.length > 0 ? (n += "/..") : (n = ".."), (i = 2));
                    } else
                      (n.length > 0
                        ? (n += "/" + e.slice(a + 1, s))
                        : (n = e.slice(a + 1, s)),
                        (i = s - a - 1));
                    ((a = s), (l = 0));
                  } else 46 === r && -1 !== l ? ++l : (l = -1);
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
                    var i = e.length, a = i - n, l = 1;
                    l < r.length && 47 === r.charCodeAt(l);
                    ++l
                  );
                  for (
                    var s = r.length - l, o = a < s ? a : s, c = -1, d = 0;
                    d <= o;
                    ++d
                  ) {
                    if (d === o) {
                      if (s > o) {
                        if (47 === r.charCodeAt(l + d))
                          return r.slice(l + d + 1);
                        if (0 === d) return r.slice(l + d);
                      } else
                        a > o &&
                          (47 === e.charCodeAt(n + d)
                            ? (c = d)
                            : 0 === d && (c = 0));
                      break;
                    }
                    var u = e.charCodeAt(n + d);
                    if (u !== r.charCodeAt(l + d)) break;
                    47 === u && (c = d);
                  }
                  var f = "";
                  for (d = n + c + 1; d <= i; ++d)
                    (d === i || 47 === e.charCodeAt(d)) &&
                      (0 === f.length ? (f += "..") : (f += "/.."));
                  return f.length > 0
                    ? f + r.slice(l + c)
                    : ((l += c), 47 === r.charCodeAt(l) && ++l, r.slice(l));
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
                    var l = t.length - 1,
                      s = -1;
                    for (r = e.length - 1; r >= 0; --r) {
                      var o = e.charCodeAt(r);
                      if (47 === o) {
                        if (!a) {
                          n = r + 1;
                          break;
                        }
                      } else
                        (-1 === s && ((a = !1), (s = r + 1)),
                          l >= 0 &&
                            (o === t.charCodeAt(l)
                              ? -1 == --l && (i = r)
                              : ((l = -1), (i = s))));
                    }
                    return (
                      n === i ? (i = s) : -1 === i && (i = e.length),
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
                    var t = -1, r = 0, n = -1, i = !0, a = 0, l = e.length - 1;
                    l >= 0;
                    --l
                  ) {
                    var s = e.charCodeAt(l);
                    if (47 === s) {
                      if (!i) {
                        r = l + 1;
                        break;
                      }
                      continue;
                    }
                    (-1 === n && ((i = !1), (n = l + 1)),
                      46 === s
                        ? -1 === t
                          ? (t = l)
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
                    var a = -1, l = 0, s = -1, o = !0, c = e.length - 1, d = 0;
                    c >= t;
                    --c
                  ) {
                    if (47 === (n = e.charCodeAt(c))) {
                      if (!o) {
                        l = c + 1;
                        break;
                      }
                      continue;
                    }
                    (-1 === s && ((o = !1), (s = c + 1)),
                      46 === n
                        ? -1 === a
                          ? (a = c)
                          : 1 !== d && (d = 1)
                        : -1 !== a && (d = -1));
                  }
                  return (
                    -1 === a ||
                    -1 === s ||
                    0 === d ||
                    (1 === d && a === s - 1 && a === l + 1)
                      ? -1 !== s &&
                        (0 === l && i
                          ? (r.base = r.name = e.slice(1, s))
                          : (r.base = r.name = e.slice(l, s)))
                      : (0 === l && i
                          ? ((r.name = e.slice(1, a)), (r.base = e.slice(1, s)))
                          : ((r.name = e.slice(l, a)),
                            (r.base = e.slice(l, s))),
                        (r.ext = e.slice(a, s))),
                    l > 0 ? (r.dir = e.slice(0, l - 1)) : i && (r.dir = "/"),
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
      return e((e.s = 64527));
    }),
      (_N_E = e.O()));
  },
]);
