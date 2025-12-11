(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [235],
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
      var o = r(55817),
        s = {
          nodeType: o.BLOCKS.DOCUMENT,
          data: {},
          content: [
            {
              nodeType: o.BLOCKS.PARAGRAPH,
              data: {},
              content: [{ nodeType: "text", value: "", marks: [], data: {} }],
            },
          ],
        };
      t.default = s;
    },
    31834: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isText = t.isBlock = t.isInline = void 0));
      var o = r(55817),
        s = r(81173);
      function hasValue(e, t) {
        for (var r = 0, o = Object.keys(e); r < o.length; r++)
          if (t === e[o[r]]) return !0;
        return !1;
      }
      ((t.isInline = function (e) {
        return hasValue(s.INLINES, e.nodeType);
      }),
        (t.isBlock = function (e) {
          return hasValue(o.BLOCKS, e.nodeType);
        }),
        (t.isText = function (e) {
          return "text" === e.nodeType;
        }));
    },
    16843: function (e, t, r) {
      "use strict";
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, o) {
                void 0 === o && (o = r);
                var s = Object.getOwnPropertyDescriptor(t, r);
                ((!s ||
                  ("get" in s
                    ? !t.__esModule
                    : s.writable || s.configurable)) &&
                  (s = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  }),
                  Object.defineProperty(e, o, s));
              }
            : function (e, t, r, o) {
                (void 0 === o && (o = r), (e[o] = t[r]));
              }),
        s =
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
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e)
              "default" === r ||
                Object.prototype.hasOwnProperty.call(t, r) ||
                o(t, e, r);
          },
        n =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.prototype.hasOwnProperty.call(e, r) &&
                  o(t, e, r);
            return (s(t, e), t);
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
      var c = r(55817);
      Object.defineProperty(t, "BLOCKS", {
        enumerable: !0,
        get: function () {
          return c.BLOCKS;
        },
      });
      var l = r(81173);
      Object.defineProperty(t, "INLINES", {
        enumerable: !0,
        get: function () {
          return l.INLINES;
        },
      });
      var d = r(73428);
      (Object.defineProperty(t, "MARKS", {
        enumerable: !0,
        get: function () {
          return a(d).default;
        },
      }),
        i(r(43406), t),
        i(r(54076), t),
        i(r(44611), t));
      var u = r(62949);
      Object.defineProperty(t, "EMPTY_DOCUMENT", {
        enumerable: !0,
        get: function () {
          return a(u).default;
        },
      });
      var h = n(r(31834));
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
      var r, o;
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        ((o = r || (r = {})).BOLD = "bold"),
        (o.ITALIC = "italic"),
        (o.UNDERLINE = "underline"),
        (o.CODE = "code"),
        (o.SUPERSCRIPT = "superscript"),
        (o.SUBSCRIPT = "subscript"),
        (t.default = r));
    },
    44611: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    43406: function (e, t, r) {
      "use strict";
      var o,
        s =
          (this && this.__spreadArray) ||
          function (e, t, r) {
            if (r || 2 == arguments.length)
              for (var o, s = 0, i = t.length; s < i; s++)
                (!o && s in t) ||
                  (o || (o = Array.prototype.slice.call(t, 0, s)),
                  (o[s] = t[s]));
            return e.concat(o || Array.prototype.slice.call(t));
          },
        i =
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
      var n = r(55817),
        a = r(81173),
        c = i(r(73428));
      ((t.TOP_LEVEL_BLOCKS = [
        n.BLOCKS.PARAGRAPH,
        n.BLOCKS.HEADING_1,
        n.BLOCKS.HEADING_2,
        n.BLOCKS.HEADING_3,
        n.BLOCKS.HEADING_4,
        n.BLOCKS.HEADING_5,
        n.BLOCKS.HEADING_6,
        n.BLOCKS.OL_LIST,
        n.BLOCKS.UL_LIST,
        n.BLOCKS.HR,
        n.BLOCKS.QUOTE,
        n.BLOCKS.EMBEDDED_ENTRY,
        n.BLOCKS.EMBEDDED_ASSET,
        n.BLOCKS.EMBEDDED_RESOURCE,
        n.BLOCKS.TABLE,
      ]),
        (t.LIST_ITEM_BLOCKS = [
          n.BLOCKS.PARAGRAPH,
          n.BLOCKS.HEADING_1,
          n.BLOCKS.HEADING_2,
          n.BLOCKS.HEADING_3,
          n.BLOCKS.HEADING_4,
          n.BLOCKS.HEADING_5,
          n.BLOCKS.HEADING_6,
          n.BLOCKS.OL_LIST,
          n.BLOCKS.UL_LIST,
          n.BLOCKS.HR,
          n.BLOCKS.QUOTE,
          n.BLOCKS.EMBEDDED_ENTRY,
          n.BLOCKS.EMBEDDED_ASSET,
          n.BLOCKS.EMBEDDED_RESOURCE,
        ]),
        (t.TABLE_BLOCKS = [
          n.BLOCKS.TABLE,
          n.BLOCKS.TABLE_ROW,
          n.BLOCKS.TABLE_CELL,
          n.BLOCKS.TABLE_HEADER_CELL,
        ]),
        (t.VOID_BLOCKS = [
          n.BLOCKS.HR,
          n.BLOCKS.EMBEDDED_ENTRY,
          n.BLOCKS.EMBEDDED_ASSET,
          n.BLOCKS.EMBEDDED_RESOURCE,
        ]),
        (t.CONTAINERS =
          (((o = {})[n.BLOCKS.OL_LIST] = [n.BLOCKS.LIST_ITEM]),
          (o[n.BLOCKS.UL_LIST] = [n.BLOCKS.LIST_ITEM]),
          (o[n.BLOCKS.LIST_ITEM] = t.LIST_ITEM_BLOCKS),
          (o[n.BLOCKS.QUOTE] = [n.BLOCKS.PARAGRAPH]),
          (o[n.BLOCKS.TABLE] = [n.BLOCKS.TABLE_ROW]),
          (o[n.BLOCKS.TABLE_ROW] = [
            n.BLOCKS.TABLE_CELL,
            n.BLOCKS.TABLE_HEADER_CELL,
          ]),
          (o[n.BLOCKS.TABLE_CELL] = [n.BLOCKS.PARAGRAPH]),
          (o[n.BLOCKS.TABLE_HEADER_CELL] = [n.BLOCKS.PARAGRAPH]),
          o)),
        (t.HEADINGS = [
          n.BLOCKS.HEADING_1,
          n.BLOCKS.HEADING_2,
          n.BLOCKS.HEADING_3,
          n.BLOCKS.HEADING_4,
          n.BLOCKS.HEADING_5,
          n.BLOCKS.HEADING_6,
        ]),
        (t.TEXT_CONTAINERS = s([n.BLOCKS.PARAGRAPH], t.HEADINGS, !0)),
        (t.V1_NODE_TYPES = [
          n.BLOCKS.DOCUMENT,
          n.BLOCKS.PARAGRAPH,
          n.BLOCKS.HEADING_1,
          n.BLOCKS.HEADING_2,
          n.BLOCKS.HEADING_3,
          n.BLOCKS.HEADING_4,
          n.BLOCKS.HEADING_5,
          n.BLOCKS.HEADING_6,
          n.BLOCKS.OL_LIST,
          n.BLOCKS.UL_LIST,
          n.BLOCKS.LIST_ITEM,
          n.BLOCKS.HR,
          n.BLOCKS.QUOTE,
          n.BLOCKS.EMBEDDED_ENTRY,
          n.BLOCKS.EMBEDDED_ASSET,
          a.INLINES.HYPERLINK,
          a.INLINES.ENTRY_HYPERLINK,
          a.INLINES.ASSET_HYPERLINK,
          a.INLINES.EMBEDDED_ENTRY,
          "text",
        ]),
        (t.V1_MARKS = [
          c.default.BOLD,
          c.default.CODE,
          c.default.ITALIC,
          c.default.UNDERLINE,
        ]));
    },
    54076: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    45566: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/legal/cookies",
        function () {
          return r(2075);
        },
      ]);
    },
    7365: function (e, t, r) {
      "use strict";
      var o = r(97458),
        s = r(10821),
        i = r.n(s);
      t.Z = (e) => {
        let { href: t, children: r, className: s, ...n } = e,
          a = "string" == typeof t && t.startsWith("http");
        return a
          ? (0, o.jsx)("a", {
              href: t,
              target: "_blank",
              rel: "noopener noreferrer",
              className: s,
              ...n,
              children: r,
            })
          : (0, o.jsx)(i(), {
              legacyBehavior: !0,
              href: t,
              ...n,
              children: (0, o.jsx)("a", { className: s, children: r }),
            });
      };
    },
    99915: function (e, t, r) {
      "use strict";
      r.a(e, async function (e, o) {
        try {
          r.d(t, {
            Z: function () {
              return Footer;
            },
          });
          var s = r(97458),
            i = r(47681),
            n = r.n(i),
            a = r(10821),
            c = r.n(a),
            l = r(2300),
            d = r(7365),
            u = r(91806),
            h = e([l, u]);
          function Footer(e) {
            var t, r, o;
            let { websiteSingleton: i, navItems: a, footerSocialLinks: h } = e,
              { isLoggedIn: f, shopifyUrl: p } = (0, l.S)(),
              g = a.filter(
                (e) => e.showInFooter && !(f && e.hideForLoggedInUsers),
              ),
              m = a.filter(
                (e) => e.showInSubFooter && !(f && e.hideForLoggedInUsers),
              );
            return (0, s.jsxs)("div", {
              className: "relative w-full bg-black px-8 text-white lg:px-32",
              children: [
                (0, s.jsxs)("div", {
                  className:
                    "flex flex-col items-center justify-center space-y-16 pb-16 pt-16 lg:flex-row lg:items-stretch lg:justify-between lg:space-y-0 lg:pt-32",
                  children: [
                    (0, s.jsx)(n(), {
                      src: (0, u.Wx)(
                        null === (r = i.footerLogo) || void 0 === r
                          ? void 0
                          : null === (t = r.fields.file) || void 0 === t
                            ? void 0
                            : t.url,
                      ),
                      width: 248,
                      height: 248,
                      alt: (0, u.Wx)(
                        null === (o = i.footerLogo) || void 0 === o
                          ? void 0
                          : o.fields.description,
                      ),
                      className: "h-auto w-40",
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-lg text-darkgray-500 ",
                      children: [
                        g.map((e) => {
                          let t = e.link;
                          return (
                            e.shouldReplaceWithGeneratedShopLink &&
                              p &&
                              (t = p),
                            (0, s.jsx)(
                              c(),
                              { href: t, children: e.name },
                              e.link + e.name,
                            )
                          );
                        }),
                        (0, s.jsx)("span", {
                          id: "accessibilityWidget",
                          className: "cursor-pointer",
                          children: "Accessibility",
                        }),
                        (0, s.jsx)("span", {
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
                (0, s.jsxs)("div", {
                  className:
                    "flex flex-col items-center justify-center space-y-16 pb-16 lg:flex-row lg:items-stretch lg:justify-between lg:space-y-0",
                  children: [
                    (0, s.jsx)("div", {
                      className: "text-center text-darkgray-500",
                      children: i.footerCopyright,
                    }),
                    (0, s.jsx)("div", {
                      className: "flex items-center space-x-4 text-white",
                      children: h.map((e) => {
                        var t, r, o, i;
                        return (0, s.jsx)(
                          d.Z,
                          {
                            href: e.link,
                            children: (0, s.jsx)(n(), {
                              src: (0, u.Wx)(
                                null === (r = e.icon) || void 0 === r
                                  ? void 0
                                  : null === (t = r.fields.file) || void 0 === t
                                    ? void 0
                                    : t.url,
                              ),
                              alt:
                                null !==
                                  (i =
                                    null === (o = e.icon) || void 0 === o
                                      ? void 0
                                      : o.fields.description) && void 0 !== i
                                  ? i
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
                (0, s.jsx)("div", { className: "h-[1px] bg-gray-500" }),
                (0, s.jsxs)("div", {
                  className:
                    "flew-col flex flex-col items-start justify-start gap-x-10 gap-y-10 py-12 text-gray-300 md:justify-between 2xl:flex-row ",
                  children: [
                    (0, s.jsx)("p", {
                      className:
                        "max-w-[1000px] text-center text-sm text-darkgray-300 lg:text-left",
                      children: i.footerLegalNotice,
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "flex w-full flex-wrap items-center justify-center gap-x-10 gap-y-2 text-darkgray-500 md:flex-row md:gap-x-10 md:gap-y-0 lg:w-auto lg:justify-start",
                      children: m.map((e) =>
                        (0, s.jsx)(
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
          (([l, u] = h.then ? (await h)() : h), o());
        } catch (e) {
          o(e);
        }
      });
    },
    2075: function (e, t, r) {
      "use strict";
      r.a(e, async function (e, o) {
        try {
          (r.r(t),
            r.d(t, {
              __N_SSG: function () {
                return c;
              },
              default: function () {
                return CookiePolicy;
              },
            }));
          var s = r(97458),
            i = r(99915),
            n = r(87249),
            a = e([i, n]);
          [i, n] = a.then ? (await a)() : a;
          var c = !0;
          function CookiePolicy(e) {
            let {
              websiteSingleton: t,
              navItems: r,
              footerSocialLinks: o,
              surveys: a,
              signUpBanner: c,
            } = e;
            return (0, s.jsxs)("main", {
              className: "flex w-full flex-col items-center",
              children: [
                (0, s.jsx)(n.ZP, { surveys: a, navItems: r, signUpBanner: c }),
                (0, s.jsxs)("div", {
                  className:
                    "mx-auto flex w-full flex-grow flex-col gap-y-6 py-32 lg:mx-0 lg:max-w-xl 2xl:max-w-4xl",
                  children: [
                    (0, s.jsx)("h1", {
                      className: "",
                      children: "COOKIE NOTICE",
                    }),
                    (0, s.jsx)("p", {
                      className: "has-normal-p-font-size",
                      children: "Last Updated: June 6, 2023",
                    }),
                    (0, s.jsxs)("p", {
                      className: "has-normal-p-font-size",
                      children: [
                        'This Cookie Notice describes how Crystal Dynamics, Inc. ("',
                        (0, s.jsx)("strong", { children: "we" }),
                        '," "',
                        (0, s.jsx)("strong", { children: "our" }),
                        '," or "',
                        (0, s.jsx)("strong", { children: "us" }),
                        '") use cookies and similar technologies (collectively "',
                        (0, s.jsx)("strong", { children: "cookies" }),
                        '") to collect and store information when you visit our websites and/or use our services.\xa0 It supplements our Privacy Notice',
                        (0, s.jsx)("strong", { children: " " }),
                        "at",
                        " ",
                        (0, s.jsx)("a", {
                          href: "http://www.crystald.com/privacy",
                          children: "http://www.crystald.com/privacy",
                        }),
                        ".",
                      ],
                    }),
                    (0, s.jsx)("p", {
                      className: "has-h-2-font-size",
                      children: "1. ABOUT COOKIES",
                    }),
                    (0, s.jsxs)("p", {
                      className: "has-normal-p-font-size",
                      children: [
                        "a. ",
                        (0, s.jsx)("strong", { children: "Cookies" }),
                        " are small text files that (depending on your browser settings) websites and other online services deposit on your computer, mobile phone, tablet, or other device. These small text files are placed on your device to store data that can be recalled by a server in the domain that placed the cookie. Some cookies are placed by third parties (acting on our behalf). We use cookies and similar technologies to store and remember your preferences and settings, enable you to sign in, combat fraud, analyze how our services perform and fulfil the other purposes described below. Additionally, our applications use other unique identifiers, such as advertising IDs, for similar purposes. Similar technologies include web beacons, Java Scripts, entity tags, and HTML5 local storage. We use cookies that remain on your device only as long as your browser is active (session cookies), as well as cookies and similar technologies that remain on your device longer (persistent cookies).",
                      ],
                    }),
                    (0, s.jsxs)("p", {
                      className: "has-normal-p-font-size",
                      children: [
                        "b. ",
                        (0, s.jsx)("strong", {
                          children: "Similar technologies",
                        }),
                        " are technologies which enable tracking user behaviour.",
                      ],
                    }),
                    (0, s.jsxs)("ul", {
                      children: [
                        (0, s.jsx)("li", {
                          children:
                            'Web Beacons – Web beacons are small, transparent images that are embedded in web pages, applications, and emails that are sometimes called "clear gifs", "single pixel gifs", "page tags" or "web bugs". We use web beacons in marketing emails to track and to test the effectiveness of marketing activities, and to find out if an email has been opened and acted on.\xa0',
                        }),
                        (0, s.jsx)("li", {
                          children:
                            "JavaScript – JavaScript are code snippets embedded in various parts of websites and applications that facilitate a variety of operations including accelerating the refresh speed of certain functionality or monitoring usage of various online components.",
                        }),
                        (0, s.jsx)("li", {
                          children:
                            'Entity Tags – Entity Tags are HTTP code mechanisms that allow portions of websites to be stored or "cached" within your browser and validates these caches when the website is opened, accelerating website performance since the web server does not need to send a full response if the content has not changed.',
                        }),
                        (0, s.jsx)("li", {
                          children:
                            'HTML5 Local Storage – HTML5 local storage allows data from websites to be stored or "cached" within your browser to store and retrieve data in HTML5 pages when the website is revisited.',
                        }),
                      ],
                    }),
                    (0, s.jsx)("p", {
                      className: "has-h-2-font-size",
                      children: "2. OUR USE OF COOKIES",
                    }),
                    (0, s.jsx)("p", {
                      className: "has-normal-p-font-size",
                      children:
                        "We use cookies for several purposes, depending on which of our websites you visit or use, and how you choose to use our websites and services. These purposes include:",
                    }),
                    (0, s.jsxs)("p", {
                      children: [
                        "a) ",
                        (0, s.jsx)("strong", {
                          children: "Storing your preferences and settings",
                        }),
                        " – We use cookies to remember your preferences and settings. For example, cookies can remember your preferred language to enhance your experience on our website. Saving your preferences means you won't have to reset your preferences every time you visit our websites.",
                      ],
                    }),
                    (0, s.jsxs)("p", {
                      children: [
                        "b) ",
                        (0, s.jsx)("strong", {
                          children: "Sign-in and authentication",
                        }),
                        " – We use some cookies to authenticate you. These cookies allow you, among other things, to move from page to page within our websites without having to sign into an account (such as a user account) on each page. Should you wish, you can also save your account sign-in information so you don't have to sign in every time you come back to our websites.",
                      ],
                    }),
                    (0, s.jsxs)("p", {
                      children: [
                        "c) ",
                        (0, s.jsx)("strong", {
                          children: "Security, detection, and investigation ",
                        }),
                        "– We use cookies to process information that can help secure and protect our services, as well as to detect and investigate illegal activities, fraud and abuse.",
                      ],
                    }),
                    (0, s.jsxs)("p", {
                      children: [
                        "d) ",
                        (0, s.jsx)("strong", { children: "Social media " }),
                        "– Our websites and services may use social media cookies, including cookies that help you share content to your social media accounts.",
                      ],
                    }),
                    (0, s.jsxs)("p", {
                      children: [
                        "e) ",
                        (0, s.jsx)("strong", {
                          children: "Interest-based advertising",
                        }),
                        " – We may use cookies to collect data about your online activity and identify your interests so that we can provide advertising that is most relevant to you.",
                      ],
                    }),
                    (0, s.jsxs)("p", {
                      children: [
                        "f) ",
                        (0, s.jsx)("strong", { children: "Analytics" }),
                        " – We use cookies and other unique identifiers to gather usage and performance data. For example, we use cookies to count the number of unique visitors to our websites or create animated heatmap representations of your usage of our websites to understand how our websites are being used and where errors may be occurring. We also use cookies and other unique identifiers to match your data across our websites and games to understand the effectiveness of marketing campaigns.",
                      ],
                    }),
                    (0, s.jsxs)("p", {
                      children: [
                        "g) ",
                        (0, s.jsx)("strong", { children: "Performance" }),
                        " – We use cookies to understand and improve how our products perform. For example, we use cookies to gather data that helps with load balancing (this helps ensure that our websites remain up and running).",
                      ],
                    }),
                    (0, s.jsxs)("p", {
                      className: "has-h-2-font-size",
                      children: [
                        "3. COOKIES COMMONLY USED ON TOMBRAIDER.COM",
                        " ",
                      ],
                    }),
                    (0, s.jsx)("div", { id: "ot-sdk-cookie-policy" }),
                    (0, s.jsx)("p", {
                      className: "has-h-2-font-size",
                      children: "4. SALE OF PERSONAL DATA (CALIFORNIA ONLY)",
                    }),
                    (0, s.jsxs)("p", {
                      className: "has-normal-p-font-size",
                      children: [
                        "If you are a California resident, under the California Consumer Privacy Act, you have the right to opt-out of the sale of your personal information to third parties, as further details in the U.S. Privacy Notice at",
                        " ",
                        (0, s.jsx)("a", {
                          href: "http://www.crystald.com/privacy",
                          children: "http://www.crystald.com/privacy",
                        }),
                        '. These cookies collect information for analytics and to personalize your experience with targeted ads. If you opt out we will not be able to offer you personalized ads and will not hand over your personal information to any third parties. Additionally, you may contact our legal department for further clarification about your rights as a California consumer by writing to us at the email address listed in the section "How to Contact Us." If you have enabled privacy controls on your browser (such as a plugin), we have to take that as a valid request to opt-out. Therefore we would not be able to track your activity through the web. This may affect our ability to personalize ads according to your preferences.',
                      ],
                    }),
                    (0, s.jsx)("p", {
                      children: "5. RESTRICTING, BLOCKING OR DELETING COOKIES",
                    }),
                    (0, s.jsx)("p", {
                      children:
                        "If you would rather restrict, block or delete cookies from Crystal Dynamics' websites you can click on the button below.",
                    }),
                    (0, s.jsx)("p", {
                      children: (0, s.jsx)("button", {
                        id: "ot-sdk-btn",
                        className: "ot-sdk-show-settings",
                        children: "Cookie Settings",
                      }),
                    }),
                    (0, s.jsx)("p", {
                      children:
                        "Additionally, you can also use your browser or device's operating system to do so. We provide some recommended steps on how to do this below in the browser cookie management section. However, each browser and device manages cookies differently, so check the instructions for your browser or operating system.",
                    }),
                    (0, s.jsx)("p", {
                      className: "has-h-2-font-size",
                      children: "6. BROWSER COOKIE MANAGEMENT",
                    }),
                    (0, s.jsx)("p", {
                      children:
                        "Most web browsers and devices provide controls that allow you to choose whether to block browser cookies and to delete them. Controls vary by browser and the settings available and how they work may change. Below are links with instructions and further information on settings provided by some popular browsers. The following is not an exhaustive list and functionality may change as browsers and devices update. For more information on how to manage cookies with your browser and/or device, please refer to the instructions for that browser or device.",
                    }),
                    (0, s.jsxs)("p", {
                      children: [
                        (0, s.jsx)("a", {
                          href: "https://www.google.com/url?q=https://support.google.com/chrome/answer/95647&sa=D&source=docs&ust=1694131976618100&usg=AOvVaw1dZYcgJQjTnmm4xm1cGs6i",
                          children: "Google Chrome™ browser",
                        }),
                        (0, s.jsx)("br", {}),
                        (0, s.jsx)("a", {
                          href: "https://www.google.com/url?q=https://support.microsoft.com/en-us/search?query%3Denable%2520cookies%2520in%2520edge&sa=D&source=docs&ust=1694131976619204&usg=AOvVaw1_ABqa9mQquEZNSV8It9OL",
                          children: "Microsoft Edge browser",
                        }),
                        (0, s.jsx)("br", {}),
                        (0, s.jsx)("a", {
                          href: "https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop",
                          children: "Firefox browser",
                        }),
                        (0, s.jsx)("br", {}),
                        (0, s.jsx)("a", {
                          href: "https://support.apple.com/en-ie/guide/safari/sfri11471/mac",
                          children: "Apple iOS Safari browser",
                        }),
                        (0, s.jsx)("br", {}),
                        (0, s.jsx)("a", {
                          href: "https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DAndroid&hl=en&oco=0",
                          children: "Android",
                        }),
                      ],
                    }),
                    (0, s.jsx)("p", {
                      children:
                        "However, each browser and device manages cookies differently, and the locations and functionality of their options change frequently, so check the instructions for your browser or operating system.",
                    }),
                    (0, s.jsxs)("p", {
                      children: [
                        "The",
                        " ",
                        (0, s.jsx)("a", {
                          href: "https://optout.networkadvertising.org/",
                          children: "Network Advertising Initiative",
                        }),
                        " ",
                        "and",
                        " ",
                        (0, s.jsx)("a", {
                          href: "https://www.youronlinechoices.eu/",
                          children: "Your Online Choices",
                        }),
                        " ",
                        "websites provide mechanisms for opting-out of some advertising.",
                      ],
                    }),
                    (0, s.jsx)("p", {
                      className: "has-h-2-font-size",
                      children: "7. HOW TO CONTACT US",
                    }),
                    (0, s.jsx)("p", {
                      children:
                        "If you have any questions, please contact us at the following mailing address or email:\xa0\xa0",
                    }),
                    (0, s.jsxs)("p", {
                      children: [
                        "Crystal Dynamics, Inc.\xa0",
                        (0, s.jsx)("br", {}),
                        "Attention: Legal",
                        (0, s.jsx)("br", {}),
                        "2855 Campus Drive, Suite 200",
                        (0, s.jsx)("br", {}),
                        "San Mateo, CA 94403",
                        (0, s.jsx)("br", {}),
                        "United States of America",
                        (0, s.jsx)("br", {}),
                        "PrivacyNotice [at] crystald.com\xa0",
                      ],
                    }),
                    (0, s.jsx)("p", {
                      className: "has-h-2-font-size",
                      children: "8. CHANGES TO THIS COOKIES NOTICE",
                    }),
                    (0, s.jsx)("p", {
                      children:
                        "We may change this Cookies Notice from to time as our services and products change. You should check here regularly to see the current Cookies Notice that is in effect and any changes that may have been made to it.",
                    }),
                  ],
                }),
                (0, s.jsx)(i.Z, {
                  websiteSingleton: t,
                  navItems: r,
                  footerSocialLinks: o,
                }),
              ],
            });
          }
          o();
        } catch (e) {
          o(e);
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
                  var r, o = "", s = 0, i = -1, n = 0, a = 0;
                  a <= e.length;
                  ++a
                ) {
                  if (a < e.length) r = e.charCodeAt(a);
                  else if (47 === r) break;
                  else r = 47;
                  if (47 === r) {
                    if (i === a - 1 || 1 === n);
                    else if (i !== a - 1 && 2 === n) {
                      if (
                        o.length < 2 ||
                        2 !== s ||
                        46 !== o.charCodeAt(o.length - 1) ||
                        46 !== o.charCodeAt(o.length - 2)
                      ) {
                        if (o.length > 2) {
                          var c = o.lastIndexOf("/");
                          if (c !== o.length - 1) {
                            (-1 === c
                              ? ((o = ""), (s = 0))
                              : (s =
                                  (o = o.slice(0, c)).length -
                                  1 -
                                  o.lastIndexOf("/")),
                              (i = a),
                              (n = 0));
                            continue;
                          }
                        } else if (2 === o.length || 1 === o.length) {
                          ((o = ""), (s = 0), (i = a), (n = 0));
                          continue;
                        }
                      }
                      t && (o.length > 0 ? (o += "/..") : (o = ".."), (s = 2));
                    } else
                      (o.length > 0
                        ? (o += "/" + e.slice(i + 1, a))
                        : (o = e.slice(i + 1, a)),
                        (s = a - i - 1));
                    ((i = a), (n = 0));
                  } else 46 === r && -1 !== n ? ++n : (n = -1);
                }
                return o;
              }
              var t = {
                resolve: function () {
                  for (
                    var e, t, r = "", o = !1, s = arguments.length - 1;
                    s >= -1 && !o;
                    s--
                  )
                    (s >= 0
                      ? (t = arguments[s])
                      : (void 0 === e && (e = ""), (t = e)),
                      assertPath(t),
                      0 !== t.length &&
                        ((r = t + "/" + r), (o = 47 === t.charCodeAt(0))));
                  return ((r = normalizeStringPosix(r, !o)), o)
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
                    var o = arguments[r];
                    (assertPath(o),
                      o.length > 0 &&
                        (void 0 === e ? (e = o) : (e += "/" + o)));
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
                  for (var o = 1; o < e.length && 47 === e.charCodeAt(o); ++o);
                  for (
                    var s = e.length, i = s - o, n = 1;
                    n < r.length && 47 === r.charCodeAt(n);
                    ++n
                  );
                  for (
                    var a = r.length - n, c = i < a ? i : a, l = -1, d = 0;
                    d <= c;
                    ++d
                  ) {
                    if (d === c) {
                      if (a > c) {
                        if (47 === r.charCodeAt(n + d))
                          return r.slice(n + d + 1);
                        if (0 === d) return r.slice(n + d);
                      } else
                        i > c &&
                          (47 === e.charCodeAt(o + d)
                            ? (l = d)
                            : 0 === d && (l = 0));
                      break;
                    }
                    var u = e.charCodeAt(o + d);
                    if (u !== r.charCodeAt(n + d)) break;
                    47 === u && (l = d);
                  }
                  var h = "";
                  for (d = o + l + 1; d <= s; ++d)
                    (d === s || 47 === e.charCodeAt(d)) &&
                      (0 === h.length ? (h += "..") : (h += "/.."));
                  return h.length > 0
                    ? h + r.slice(n + l)
                    : ((n += l), 47 === r.charCodeAt(n) && ++n, r.slice(n));
                },
                _makeLong: function (e) {
                  return e;
                },
                dirname: function (e) {
                  if ((assertPath(e), 0 === e.length)) return ".";
                  for (
                    var t = e.charCodeAt(0),
                      r = 47 === t,
                      o = -1,
                      s = !0,
                      i = e.length - 1;
                    i >= 1;
                    --i
                  )
                    if (47 === (t = e.charCodeAt(i))) {
                      if (!s) {
                        o = i;
                        break;
                      }
                    } else s = !1;
                  return -1 === o
                    ? r
                      ? "/"
                      : "."
                    : r && 1 === o
                      ? "//"
                      : e.slice(0, o);
                },
                basename: function (e, t) {
                  if (void 0 !== t && "string" != typeof t)
                    throw TypeError('"ext" argument must be a string');
                  assertPath(e);
                  var r,
                    o = 0,
                    s = -1,
                    i = !0;
                  if (void 0 !== t && t.length > 0 && t.length <= e.length) {
                    if (t.length === e.length && t === e) return "";
                    var n = t.length - 1,
                      a = -1;
                    for (r = e.length - 1; r >= 0; --r) {
                      var c = e.charCodeAt(r);
                      if (47 === c) {
                        if (!i) {
                          o = r + 1;
                          break;
                        }
                      } else
                        (-1 === a && ((i = !1), (a = r + 1)),
                          n >= 0 &&
                            (c === t.charCodeAt(n)
                              ? -1 == --n && (s = r)
                              : ((n = -1), (s = a))));
                    }
                    return (
                      o === s ? (s = a) : -1 === s && (s = e.length),
                      e.slice(o, s)
                    );
                  }
                  for (r = e.length - 1; r >= 0; --r)
                    if (47 === e.charCodeAt(r)) {
                      if (!i) {
                        o = r + 1;
                        break;
                      }
                    } else -1 === s && ((i = !1), (s = r + 1));
                  return -1 === s ? "" : e.slice(o, s);
                },
                extname: function (e) {
                  assertPath(e);
                  for (
                    var t = -1, r = 0, o = -1, s = !0, i = 0, n = e.length - 1;
                    n >= 0;
                    --n
                  ) {
                    var a = e.charCodeAt(n);
                    if (47 === a) {
                      if (!s) {
                        r = n + 1;
                        break;
                      }
                      continue;
                    }
                    (-1 === o && ((s = !1), (o = n + 1)),
                      46 === a
                        ? -1 === t
                          ? (t = n)
                          : 1 !== i && (i = 1)
                        : -1 !== t && (i = -1));
                  }
                  return -1 === t ||
                    -1 === o ||
                    0 === i ||
                    (1 === i && t === o - 1 && t === r + 1)
                    ? ""
                    : e.slice(t, o);
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
                  var o = e.charCodeAt(0),
                    s = 47 === o;
                  s ? ((r.root = "/"), (t = 1)) : (t = 0);
                  for (
                    var i = -1, n = 0, a = -1, c = !0, l = e.length - 1, d = 0;
                    l >= t;
                    --l
                  ) {
                    if (47 === (o = e.charCodeAt(l))) {
                      if (!c) {
                        n = l + 1;
                        break;
                      }
                      continue;
                    }
                    (-1 === a && ((c = !1), (a = l + 1)),
                      46 === o
                        ? -1 === i
                          ? (i = l)
                          : 1 !== d && (d = 1)
                        : -1 !== i && (d = -1));
                  }
                  return (
                    -1 === i ||
                    -1 === a ||
                    0 === d ||
                    (1 === d && i === a - 1 && i === n + 1)
                      ? -1 !== a &&
                        (0 === n && s
                          ? (r.base = r.name = e.slice(1, a))
                          : (r.base = r.name = e.slice(n, a)))
                      : (0 === n && s
                          ? ((r.name = e.slice(1, i)), (r.base = e.slice(1, a)))
                          : ((r.name = e.slice(n, i)),
                            (r.base = e.slice(n, a))),
                        (r.ext = e.slice(i, a))),
                    n > 0 ? (r.dir = e.slice(0, n - 1)) : s && (r.dir = "/"),
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
          var o = r[e];
          if (void 0 !== o) return o.exports;
          var s = (r[e] = { exports: {} }),
            i = !0;
          try {
            (t[e](s, s.exports, __nccwpck_require__), (i = !1));
          } finally {
            i && delete r[e];
          }
          return s.exports;
        }
        __nccwpck_require__.ab = "//";
        var o = __nccwpck_require__(114);
        e.exports = o;
      })();
    },
  },
  function (e) {
    (e.O(0, [46, 681, 882, 34, 249, 806, 774, 888, 179], function () {
      return e((e.s = 45566));
    }),
      (_N_E = e.O()));
  },
]);
