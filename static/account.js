(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9309],
  {
    15056: (e, t, l) => {
      "use strict";
      l.a(e, async (e, a) => {
        try {
          l.d(t, { A: () => m });
          var s = l(2183),
            n = l(36439),
            r = l(55507),
            c = l(55109),
            i = l(26974),
            d = l(99435),
            o = l(80707),
            u = l.n(o),
            h = e([r, c, d]);
          function m() {
            let {
                setUserData: e,
                userData: t,
                rewards: l,
                rewardsLoading: a,
                fetchRewards: o,
                minigameCompleted: h,
              } = (0, d.u)(),
              m = (0, n.useMemo)(
                () =>
                  [...l.avatars].sort((e, t) =>
                    e.title.localeCompare(t.title, void 0, {
                      sensitivity: "base",
                    }),
                  ),
                [l],
              ),
              x = async (l) => {
                var a, s;
                (0, c.nU)({ itemId: l.id });
                let n = u().clone(t);
                (null == n || null == (a = n.accountInfo)
                  ? void 0
                  : a.titleInfo) &&
                  ((n.accountInfo.titleInfo.avatarUrl =
                    null != (s = l.imageUrl) ? s : void 0),
                  e(n));
              };
            return (
              (0, n.useEffect)(() => {
                o();
              }, [h]),
              (0, s.jsx)("div", {
                className:
                  "flex flex-col gap-y-4 rounded-xl bg-lightgray-100 px-8 py-8",
                children: a
                  ? (0, s.jsx)("div", {
                      className: "flex justify-center",
                      children: (0, s.jsx)(i.A, {}),
                    })
                  : 0 === m.length
                    ? (0, s.jsx)("p", {
                        children: "You don't have any avatars unlocked.",
                      })
                    : m.map((e) =>
                        (0, s.jsx)(r.A, { onClick: x, avatar: e }, e.id),
                      ),
              })
            );
          }
          (([r, c, d] = h.then ? (await h)() : h), a());
        } catch (e) {
          a(e);
        }
      });
    },
    34714: (e, t, l) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/account",
        function () {
          return l(37749);
        },
      ]);
    },
    37749: (e, t, l) => {
      "use strict";
      l.a(e, async (e, a) => {
        try {
          (l.r(t), l.d(t, { __N_SSG: () => p, default: () => j }));
          var s = l(2183),
            n = l(56145),
            r = l(53017),
            c = l(88891),
            i = l(53808),
            d = l(15056),
            o = l(67603),
            u = l(41395),
            h = l(57e3),
            m = l(79294),
            x = l(36439),
            v = l(55109),
            g = l(99435),
            f = e([n, c, i, d, o, u, h, v, g]);
          [n, c, i, d, o, u, h, v, g] = f.then ? (await f)() : f;
          var p = !0;
          function j(e) {
            let { articles: t, navItems: l, surveys: a } = e,
              { setMinigameCompleted: f } = (0, g.u)();
            return (
              (0, x.useEffect)(() => {
                localStorage.getItem("minigame-completed-while-logged-out") &&
                  ((0, v.qu)({ action: "MINIGAME_COMPLETION" }),
                  localStorage.removeItem(
                    "minigame-completed-while-logged-out",
                  ),
                  f(!0));
              }, []),
              (0, s.jsx)(n.A, {
                children: (0, s.jsx)("main", {
                  className: " min-h-screen bg-white text-black",
                  children: (0, s.jsxs)("div", {
                    className: " ",
                    children: [
                      (0, s.jsx)(c.A, { surveys: a, navItems: l }),
                      (0, s.jsx)(r.A, {}),
                      (0, s.jsx)(m.A, {}),
                      (0, s.jsxs)("div", {
                        className: "px-6 py-12 lg:ml-[256px] lg:px-12",
                        children: [
                          (0, s.jsx)(i.A, {
                            surveys: a,
                            title: "Welcome, Raider!",
                          }),
                          (0, s.jsxs)("div", {
                            className:
                              "grid grid-cols-1 gap-6 pt-16 lg:grid-cols-2",
                            children: [
                              (0, s.jsxs)("div", {
                                children: [
                                  (0, s.jsx)("p", {
                                    className: "pb-4 text-3xl font-bold",
                                    children: "Avatars",
                                  }),
                                  (0, s.jsx)(d.A, {}),
                                  (0, s.jsx)("p", {
                                    className: "pb-4 pt-12 text-3xl font-bold",
                                    children: "Downloads",
                                  }),
                                  (0, s.jsx)(u.A, {}),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                children: [
                                  (0, s.jsx)("p", {
                                    className: "pb-4 text-3xl font-bold",
                                    children: "Society of Raider News",
                                  }),
                                  (0, s.jsx)(o.A, {
                                    articles: t.slice(0, Math.min(t.length, 3)),
                                  }),
                                  (0, s.jsx)("p", {
                                    className: "pb-4 pt-12 text-3xl font-bold",
                                    children: "Videos",
                                  }),
                                  (0, s.jsx)(h.A, {}),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              })
            );
          }
          a();
        } catch (e) {
          a(e);
        }
      });
    },
    40453: (e, t, l) => {
      "use strict";
      l.d(t, { i: () => d });
      var a = l(36439),
        s = l(40235);
      let n = {
          [s.nA.DOCUMENT]: (e, t) => t,
          [s.nA.PARAGRAPH]: (e, t) => a.createElement("p", null, t),
          [s.nA.HEADING_1]: (e, t) => a.createElement("h1", null, t),
          [s.nA.HEADING_2]: (e, t) => a.createElement("h2", null, t),
          [s.nA.HEADING_3]: (e, t) => a.createElement("h3", null, t),
          [s.nA.HEADING_4]: (e, t) => a.createElement("h4", null, t),
          [s.nA.HEADING_5]: (e, t) => a.createElement("h5", null, t),
          [s.nA.HEADING_6]: (e, t) => a.createElement("h6", null, t),
          [s.nA.EMBEDDED_ENTRY]: (e, t) => a.createElement("div", null, t),
          [s.nA.EMBEDDED_RESOURCE]: (e, t) => a.createElement("div", null, t),
          [s.nA.UL_LIST]: (e, t) => a.createElement("ul", null, t),
          [s.nA.OL_LIST]: (e, t) => a.createElement("ol", null, t),
          [s.nA.LIST_ITEM]: (e, t) => a.createElement("li", null, t),
          [s.nA.QUOTE]: (e, t) => a.createElement("blockquote", null, t),
          [s.nA.HR]: () => a.createElement("hr", null),
          [s.nA.TABLE]: (e, t) =>
            a.createElement("table", null, a.createElement("tbody", null, t)),
          [s.nA.TABLE_ROW]: (e, t) => a.createElement("tr", null, t),
          [s.nA.TABLE_HEADER_CELL]: (e, t) => a.createElement("th", null, t),
          [s.nA.TABLE_CELL]: (e, t) => a.createElement("td", null, t),
          [s.XD.ASSET_HYPERLINK]: (e) => c(s.XD.ASSET_HYPERLINK, e),
          [s.XD.ENTRY_HYPERLINK]: (e) => c(s.XD.ENTRY_HYPERLINK, e),
          [s.XD.RESOURCE_HYPERLINK]: (e) => i(s.XD.RESOURCE_HYPERLINK, e),
          [s.XD.EMBEDDED_ENTRY]: (e) => c(s.XD.EMBEDDED_ENTRY, e),
          [s.XD.EMBEDDED_RESOURCE]: (e, t) => i(s.XD.EMBEDDED_RESOURCE, e),
          [s.XD.HYPERLINK]: (e, t) =>
            a.createElement("a", { href: e.data.uri }, t),
        },
        r = {
          [s.j7.BOLD]: (e) => a.createElement("b", null, e),
          [s.j7.ITALIC]: (e) => a.createElement("i", null, e),
          [s.j7.UNDERLINE]: (e) => a.createElement("u", null, e),
          [s.j7.CODE]: (e) => a.createElement("code", null, e),
          [s.j7.SUPERSCRIPT]: (e) => a.createElement("sup", null, e),
          [s.j7.SUBSCRIPT]: (e) => a.createElement("sub", null, e),
          [s.j7.STRIKETHROUGH]: (e) => a.createElement("s", null, e),
        };
      function c(e, t) {
        return a.createElement(
          "span",
          { key: t.data.target.sys.id },
          "type: ",
          t.nodeType,
          " id: ",
          t.data.target.sys.id,
        );
      }
      function i(e, t) {
        return a.createElement(
          "span",
          { key: t.data.target.sys.urn },
          "type: ",
          t.nodeType,
          " urn: ",
          t.data.target.sys.urn,
        );
      }
      function d(e, t = {}) {
        if (!e) return null;
        let l = e;
        return (
          t.stripEmptyTrailingParagraph &&
            (l = s._$.stripEmptyTrailingParagraphFromDocument(e)),
          (function e(t, l) {
            let {
              renderNode: n,
              renderMark: r,
              renderText: c,
              preserveWhitespace: i,
            } = l;
            if (s._$.isText(t)) {
              let e = c ? c(t.value) : t.value;
              if (i && !c) {
                let t = (e = e.replace(/ {2,}/g, (e) =>
                    "\xa0".repeat(e.length),
                  )).split("\n"),
                  l = [];
                (t.forEach((e, s) => {
                  (l.push(e),
                    s !== t.length - 1 && l.push(a.createElement("br", null)));
                }),
                  (e = l));
              }
              return t.marks.reduce(
                (e, t) => (r[t.type] ? r[t.type](e) : e),
                e,
              );
            }
            {
              var d;
              let s =
                ((d = t.content),
                d.map((t, s) => {
                  var n;
                  return (
                    (n = e(t, l)),
                    (0, a.isValidElement)(n) && null === n.key
                      ? (0, a.cloneElement)(n, { key: s })
                      : n
                  );
                }));
              return t.nodeType && n[t.nodeType]
                ? n[t.nodeType](t, s)
                : a.createElement(a.Fragment, null, s);
            }
          })(l, {
            renderNode: { ...n, ...t.renderNode },
            renderMark: { ...r, ...t.renderMark },
            renderText: t.renderText,
            preserveWhitespace: t.preserveWhitespace,
          })
        );
      }
    },
    41395: (e, t, l) => {
      "use strict";
      l.a(e, async (e, a) => {
        try {
          l.d(t, { A: () => m });
          var s = l(2183),
            n = l(96006),
            r = l.n(n),
            c = l(36439),
            i = l(26974),
            d = l(11677),
            o = l.n(d),
            u = l(99435),
            h = e([u]);
          function m() {
            let { rewards: e, rewardsLoading: t } = (0, u.u)(),
              l = (0, c.useMemo)(
                () =>
                  [...e.fileDownloads].sort((e, t) =>
                    e.startDate && t.startDate
                      ? t.startDate.localeCompare(e.startDate)
                      : 0,
                  ),
                [e],
              );
            return (0, s.jsx)("div", {
              className:
                "flex flex-col gap-y-8 rounded-xl bg-lightgray-100 px-8 py-8",
              children: t
                ? (0, s.jsx)("div", {
                    className: "flex justify-center",
                    children: (0, s.jsx)(i.A, {}),
                  })
                : 0 === l.length
                  ? (0, s.jsx)("p", {
                      children: "You don't have any downloads unlocked.",
                    })
                  : l.map((e) => (0, s.jsx)(x, { item: e }, e.id)),
            });
          }
          function x(e) {
            var t;
            let { item: l } = e;
            return (0, s.jsx)(o(), {
              href: null != (t = l.fileUrl) ? t : "",
              children: (0, s.jsxs)("div", {
                className: "relative flex flex-col gap-y-2",
                children: [
                  (0, s.jsx)("div", {
                    className: "relative aspect-[16/9] w-full",
                    children: (0, s.jsx)(r(), {
                      fill: !0,
                      sizes:
                        "(max-width: 1024px) 100vw, (max-width: 1440px) 50vw, 33vw",
                      className: "object-cover",
                      alt: "downloadable image",
                      src: l.imageUrl,
                    }),
                  }),
                  (0, s.jsx)("p", {
                    className: "text-lg font-bold",
                    children: l.title,
                  }),
                ],
              }),
            });
          }
          ((u = (h.then ? (await h)() : h)[0]), a());
        } catch (e) {
          a(e);
        }
      });
    },
    53017: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => o });
      var a = l(2183),
        s = l(96006),
        n = l.n(s),
        r = l(11677),
        c = l.n(r),
        i = l(18652),
        d = l(36439);
      function o() {
        let e = (0, i.useRouter)(),
          [t, l] = (0, d.useState)("Dashboard");
        return (
          (0, d.useEffect)(() => {
            e.pathname.includes("settings")
              ? l("Settings")
              : e.pathname.includes("rewards")
                ? l("Rewards")
                : e.pathname.includes("surveys")
                  ? l("Surveys")
                  : l("Dashboard");
          }, [e, e.pathname]),
          (0, a.jsxs)("div", {
            className:
              "fixed left-0 top-0 z-[100] hidden h-screen w-[256px] flex-col items-center gap-y-6 border-r bg-white pt-8 lg:flex",
            children: [
              (0, a.jsx)(c(), {
                href: "/",
                children: (0, a.jsx)(n(), {
                  width: 87,
                  height: 40,
                  alt: "dark Tomb Raider logo",
                  src: "/images/tombraider-logo-dark.svg",
                  className: "pb-6",
                }),
              }),
              (0, a.jsx)(u, {
                selected: "Dashboard" === t,
                href: "/account",
                src: "/images/dashboard-icon.svg",
                children: "Dashboard",
              }),
              (0, a.jsx)(u, {
                selected: "Rewards" === t,
                href: "/account/rewards",
                src: "/images/rewards-icon.svg",
                children: "Rewards",
              }),
              (0, a.jsx)(u, {
                selected: "Surveys" === t,
                href: "/account/surveys",
                src: "/images/survey-icon.svg",
                children: "Surveys",
              }),
              (0, a.jsx)(u, {
                selected: "Settings" === t,
                href: "/account/settings",
                src: "/images/settings-icon.svg",
                children: "Settings",
              }),
            ],
          })
        );
      }
      function u(e) {
        let { src: t, children: l, selected: s, href: r } = e;
        return (0, a.jsx)(c(), {
          href: r,
          children: (0, a.jsxs)("div", {
            className: "flex w-32 cursor-pointer font-bold ".concat(
              s ? "opacity-100" : "opacity-50",
            ),
            children: [
              (0, a.jsx)(n(), {
                width: 24,
                height: 24,
                alt: "Logo",
                className: "mr-3",
                src: t,
              }),
              l,
            ],
          }),
        });
      }
    },
    53808: (e, t, l) => {
      "use strict";
      l.a(e, async (e, a) => {
        try {
          l.d(t, { A: () => h });
          var s = l(2183),
            n = l(96006),
            r = l.n(n),
            c = l(11677),
            i = l.n(c),
            d = l(99435),
            o = l(36439),
            u = e([d]);
          function h(e) {
            var t, l, a, n;
            let { title: c, surveys: u } = e,
              {
                userData: h,
                emailData: m,
                resendVerification: x,
                completedSurveys: v,
              } = (0, d.u)(),
              g = async () => {
                x();
              },
              f = (0, o.useMemo)(() => {
                var e;
                return null !=
                  (e =
                    null == u
                      ? void 0
                      : u.filter((e) => !v.includes(e.telemetryId)))
                  ? e
                  : [];
              }, [u, v]);
            return (0, s.jsxs)("div", {
              className: "flex flex-wrap items-center gap-x-8 gap-y-4",
              children: [
                (0, s.jsx)("div", {
                  className: "relative h-[108px] w-[108px]",
                  children: (0, s.jsx)(r(), {
                    fill: !0,
                    className: "rounded-full object-cover ".concat(
                      !(null == h ||
                      null == (l = h.accountInfo) ||
                      null == (t = l.titleInfo)
                        ? void 0
                        : t.avatarUrl) && "bg-gray-500 p-4",
                    ),
                    alt: "welcome-image",
                    sizes: "216px",
                    src:
                      (null == h ||
                      null == (n = h.accountInfo) ||
                      null == (a = n.titleInfo)
                        ? void 0
                        : a.avatarUrl) || "/images/question_mark.svg",
                  }),
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, s.jsx)("p", {
                      className: "mb-4 text-5xl",
                      children: c,
                    }),
                    m &&
                      !m.hasConfirmedEmail &&
                      (0, s.jsxs)("p", {
                        className: "mb-4 text-sm",
                        children: [
                          "You're almost done! Please check your email to verify your account.",
                          " ",
                          (0, s.jsx)("button", {
                            className: "font-bold underline hover:no-underline",
                            onClick: g,
                            type: "button",
                            children: "Resend verification email",
                          }),
                        ],
                      }),
                    f.length > 0 &&
                      (0, s.jsxs)("p", {
                        className: "text-sm",
                        children: [
                          (0, s.jsx)("span", {
                            className: "text-red-500",
                            children: "You have surveys to complete! ",
                          }),
                          (0, s.jsx)(i(), {
                            href: "/account/surveys",
                            className: "font-bold underline hover:no-underline",
                            children: "Visit surveys page",
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            });
          }
          ((d = (u.then ? (await u)() : u)[0]), a());
        } catch (e) {
          a(e);
        }
      });
    },
    55507: (e, t, l) => {
      "use strict";
      l.a(e, async (e, a) => {
        try {
          l.d(t, { A: () => o });
          var s = l(2183),
            n = l(96006),
            r = l.n(n),
            c = l(99435),
            i = l(36439),
            d = e([c]);
          function o(e) {
            var t, l, a;
            let { avatar: n, onClick: d } = e,
              { userData: o } = (0, c.u)(),
              u = (0, i.useMemo)(() => {
                var e, t;
                return (
                  (null == o ||
                  null == (t = o.accountInfo) ||
                  null == (e = t.titleInfo)
                    ? void 0
                    : e.avatarUrl) === n.imageUrl
                );
              }, [
                o,
                null == o ||
                null == (l = o.accountInfo) ||
                null == (t = l.titleInfo)
                  ? void 0
                  : t.avatarUrl,
              ]);
            return (0, s.jsxs)("div", {
              onClick: () => {
                n.isUnlocked && d(n);
              },
              className: "flex items-center gap-x-4 ".concat(
                n.isUnlocked ? "cursor-pointer opacity-100" : "opacity-50",
              ),
              children: [
                (0, s.jsxs)("div", {
                  className:
                    "relative aspect-square w-16 shrink-0 rounded-full",
                  children: [
                    (0, s.jsx)(r(), {
                      className: "rounded-full object-cover",
                      alt: n.title,
                      fill: !0,
                      sizes: "128px",
                      src:
                        null != (a = n.imageUrl)
                          ? a
                          : "/images/question_mark.svg",
                    }),
                    u &&
                      (0, s.jsx)("div", {
                        className:
                          "relative z-10 h-full w-full rounded-full bg-black/50",
                        children: (0, s.jsx)(r(), {
                          className: "object-cover p-4",
                          alt: "check",
                          src: "/images/check_white.svg",
                          fill: !0,
                        }),
                      }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, s.jsx)("p", {
                      className: "text-xl",
                      children: n.title,
                    }),
                    (0, s.jsx)("p", {
                      className: "text-md",
                      children: n.howToGetIt,
                    }),
                  ],
                }),
              ],
            });
          }
          ((c = (d.then ? (await d)() : d)[0]), a());
        } catch (e) {
          a(e);
        }
      });
    },
    56145: (e, t, l) => {
      "use strict";
      l.a(e, async (e, a) => {
        try {
          l.d(t, { A: () => i });
          var s = l(18652),
            n = l(36439),
            r = l(99435),
            c = e([r]);
          function i(e) {
            let { children: t } = e,
              l = (0, s.useRouter)(),
              { userData: a, cacheLoaded: c, loading: i } = (0, r.u)();
            return ((0, n.useEffect)(() => {
              i || !c || a || l.replace("/");
            }, [a, c, i, l]),
            a && c)
              ? t
              : null;
          }
          ((r = (c.then ? (await c)() : c)[0]), a());
        } catch (e) {
          a(e);
        }
      });
    },
    57e3: (e, t, l) => {
      "use strict";
      l.a(e, async (e, a) => {
        try {
          l.d(t, { A: () => u });
          var s = l(2183),
            n = l(59528),
            r = l(95873),
            c = l(36439),
            i = l(26974),
            d = l(99435),
            o = e([d]);
          function u() {
            let { rewards: e, rewardsLoading: t } = (0, d.u)(),
              l = (0, c.useMemo)(
                () =>
                  [...e.videoLinks].sort((e, t) =>
                    e.startDate && t.startDate
                      ? t.startDate.localeCompare(e.startDate)
                      : 0,
                  ),
                [e],
              );
            return (0, s.jsx)("div", {
              className:
                "flex flex-col gap-y-8 rounded-xl bg-lightgray-100 px-8 py-8",
              children: t
                ? (0, s.jsx)("div", {
                    className: "flex justify-center",
                    children: (0, s.jsx)(i.A, {}),
                  })
                : 0 === l.length
                  ? (0, s.jsx)("p", {
                      children: "You don't have any videos unlocked.",
                    })
                  : l.map((e) => (0, s.jsx)(h, { item: e }, e.id)),
            });
          }
          function h(e) {
            var t;
            let { item: l } = e;
            return (0, s.jsxs)("div", {
              className: "relative flex flex-col gap-y-2",
              children: [
                (0, s.jsx)("div", {
                  className: "relative aspect-[16/9] w-full",
                  children: (0, s.jsx)(n.A, {
                    src: (0, r.C)(null != (t = l.link) ? t : ""),
                  }),
                }),
                (0, s.jsx)("p", {
                  className: "text-lg font-bold",
                  children: l.title,
                }),
              ],
            });
          }
          ((d = (o.then ? (await o)() : o)[0]), a());
        } catch (e) {
          a(e);
        }
      });
    },
    67603: (e, t, l) => {
      "use strict";
      l.a(e, async (e, a) => {
        try {
          l.d(t, { A: () => h });
          var s = l(2183),
            n = l(15711),
            r = l(40453),
            c = l(11677),
            i = l.n(c),
            d = l(92446),
            o = l(99435),
            u = e([d, o]);
          function h(e) {
            let { articles: t } = e;
            return (0, s.jsx)("div", {
              className: "flex flex-col gap-y-4",
              children:
                null == t
                  ? void 0
                  : t.map((e) => (0, s.jsx)(m, { article: e }, e.slug)),
            });
          }
          function m(e) {
            var t;
            let { article: l } = e,
              { isLoggedIn: a } = (0, o.u)();
            return (0, s.jsxs)("div", {
              className:
                "text-md flex flex-col gap-y-4 rounded-xl bg-lightgray-100 px-8 py-8",
              children: [
                (0, s.jsx)("p", {
                  className: "text-2xl font-bold",
                  children: l.title,
                }),
                (0, s.jsx)("div", {
                  className: "line-clamp-3",
                  children: (0, r.i)(l.body, (0, d.Xx)(!0, a)),
                }),
                (0, s.jsx)("div", {
                  className: "pt-4",
                  children: (0, s.jsx)(i(), {
                    href: "/news/"
                      .concat(
                        null == (t = l.category) ? void 0 : t.fields.slug,
                        "/",
                      )
                      .concat(null == l ? void 0 : l.slug),
                    children: (0, s.jsx)(n.A, {
                      variant: "green",
                      children: "Read More",
                    }),
                  }),
                }),
              ],
            });
          }
          (([d, o] = u.then ? (await u)() : u), a());
        } catch (e) {
          a(e);
        }
      });
    },
    79294: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => o });
      var a = l(2183),
        s = l(96006),
        n = l.n(s),
        r = l(11677),
        c = l.n(r),
        i = l(18652),
        d = l(36439);
      function o() {
        let e = (0, i.useRouter)(),
          [t, l] = (0, d.useState)("Dashboard");
        return (
          (0, d.useEffect)(() => {
            e.pathname.includes("settings")
              ? l("Settings")
              : e.pathname.includes("rewards")
                ? l("Rewards")
                : e.pathname.includes("surveys")
                  ? l("Surveys")
                  : l("Dashboard");
          }, [e, e.pathname]),
          (0, a.jsxs)("div", {
            className:
              "fixed bottom-8 left-1/2 z-10 flex w-48 -translate-x-1/2 gap-x-6 rounded-xl bg-black/90 px-6 py-3 text-white lg:hidden",
            children: [
              (0, a.jsx)(u, {
                src: "/images/dashboard-icon.svg",
                href: "/account",
                active: "Dashboard" === t,
              }),
              (0, a.jsx)(u, {
                src: "/images/rewards-icon.svg",
                href: "/account/rewards",
                active: "Rewards" === t,
              }),
              (0, a.jsx)(u, {
                src: "/images/survey-icon.svg",
                href: "/account/surveys",
                active: "Surveys" === t,
              }),
              (0, a.jsx)(u, {
                src: "/images/settings-icon.svg",
                href: "/account/settings",
                active: "Settings" === t,
              }),
            ],
          })
        );
      }
      function u(e) {
        let { active: t, src: l, href: s } = e;
        return (0, a.jsx)(c(), {
          href: s,
          children: (0, a.jsx)(n(), {
            width: 32,
            height: 32,
            alt: "Logo",
            src: l,
            style: { opacity: t ? 1 : 0.5, color: "white", fill: "white" },
          }),
        });
      }
    },
    88891: (e, t, l) => {
      "use strict";
      l.a(e, async (e, a) => {
        try {
          l.d(t, { A: () => x });
          var s = l(2183),
            n = l(36439),
            r = l(3976),
            c = l(95216),
            i = l(96006),
            d = l.n(i),
            o = l(11677),
            u = l.n(o),
            h = l(99435),
            m = e([r, c, h]);
          function x(e) {
            let { navItems: t, surveys: l } = e,
              { isLoggedIn: a } = (0, h.u)(),
              [i, o] = (0, n.useState)(!1),
              m = () =>
                t
                  .filter(
                    (e) => e.showInHeader && (!e.hideForLoggedInUsers || a),
                  )
                  .map((e) =>
                    (0, s.jsx)(
                      c.jU,
                      { href: e.link, title: e.name, darkMode: !0 },
                      e.link,
                    ),
                  );
            return (0, s.jsxs)("header", {
              className:
                "lg:w-[calc(100% - 256px] relative sticky top-0 left-0 z-[20] bg-white px-12 pt-6 lg:ml-[256px]",
              children: [
                (0, s.jsx)("nav", {
                  "aria-label": "Global",
                  children: (0, s.jsxs)("div", {
                    className: "flex w-full justify-between",
                    children: [
                      (0, s.jsx)("div", {
                        className: "hidden items-center gap-x-4 lg:flex",
                        children: m(),
                      }),
                      (0, s.jsx)(d(), {
                        width: 48,
                        height: 48,
                        alt: "hamburger menu",
                        className:
                          "relative z-20 cursor-pointer invert lg:hidden",
                        src: i ? "/images/close.svg" : "/images/hamburger.svg",
                        onClick: () => o(!i),
                      }),
                      (0, s.jsx)(u(), {
                        href: "/",
                        children: (0, s.jsx)(d(), {
                          className: "relative h-10 w-auto lg:hidden",
                          priority: !0,
                          src: "/images/tombraider-logo-dark.svg",
                          alt: "Header Logo",
                          width: 48,
                          height: 48,
                        }),
                      }),
                      (0, s.jsx)(r.A, { surveys: l, darkMode: !0 }),
                    ],
                  }),
                }),
                (0, s.jsx)("div", {
                  className: "mt-4 h-[1px] w-full bg-gray-300/50",
                }),
                (0, s.jsx)("div", {
                  className:
                    "fixed top-0 left-0 z-10 w-full overflow-hidden bg-gray-100/90 transition duration-300 lg:hidden",
                  style: {
                    height: i ? "100vh" : "0",
                    transition: "height 0.3s ease",
                  },
                  children: (0, s.jsx)("div", {
                    className: "flex flex-col items-center gap-y-8 pt-32",
                    children: m(),
                  }),
                }),
              ],
            });
          }
          (([r, c, h] = m.then ? (await m)() : m), a());
        } catch (e) {
          a(e);
        }
      });
    },
  },
  (e) => {
    (e.O(0, [9950, 6006, 1433, 1329, 1175, 5216, 2446, 636, 6593, 8792], () =>
      e((e.s = 34714)),
    ),
      (_N_E = e.O()));
  },
]);
