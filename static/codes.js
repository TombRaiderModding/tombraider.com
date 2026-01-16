(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [107],
  {
    75505: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/admin/codes",
        function () {
          return a(19755);
        },
      ]);
    },
    42897: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return Button;
        },
      });
      var r = a(97458),
        l = a(52983),
        s = a(61373),
        n = a(68956),
        i = a.n(n);
      function Button(e) {
        let {
            variant: t = "normal",
            full: a = !1,
            loading: n,
            disabled: o,
            startIcon: d,
            ...c
          } = e,
          u = (0, l.useMemo)(() => {
            var t;
            return null === (t = e.children) || void 0 === t
              ? void 0
              : t.toString();
          }, [e.children]),
          classForVariant = (e, a, r, l, s) =>
            "normal" === t
              ? e
              : "darkBackground" === t
                ? a
                : "dark" === t
                  ? r
                  : "green" === t
                    ? s
                    : l;
        return (0, r.jsxs)("button", {
          ...c,
          type: "submit",
          id: u,
          disabled: o,
          className:
            "border-radius-8 group relative inline-flex items-center justify-center "
              .concat(e.className, " ")
              .concat(a && "w-full", " ")
              .concat(
                classForVariant(
                  "border-yellow-500 border-opacity-50 bg-transparent",
                  "border-yellow-500 border-opacity-50 bg-black/90",
                  "border-black border-opacity-20 bg-transparent",
                  "border-red-500 border-opacity-80 bg-transparent",
                  "border-teal-500 border-opacity-100 bg-transparent",
                ),
                " relative z-0 rounded-lg border-2 px-6 py-2 text-base ",
              )
              .concat(
                classForVariant(
                  "text-white",
                  "text-white",
                  "text-black",
                  "text-black",
                  "text-white",
                ),
                " transition duration-300 canhover:hover:border-opacity-90 ",
              )
              .concat(
                classForVariant(
                  "canhover:hover:text-black",
                  "canhover:hover:text-black",
                  "canhover:hover:text-white",
                  "canhover:hover:text-black",
                  "canhover:hover:text-white",
                ),
                " ",
              )
              .concat(a && "w-full"),
          children: [
            ("normal" === t || "darkBackground" === t) &&
              (0, r.jsx)("div", {
                "html-for": u,
                className:
                  "pointer-events-none absolute left-0 top-0 z-10 h-full w-full overflow-hidden border-transparent opacity-0 shadow-[0_0px_15px_0px_#F1C662] transition duration-300 canhover:group-hover:opacity-100",
                children: (0, r.jsx)(i(), {
                  src: "/images/gold-button-texture-1.jpg",
                  fill: !0,
                  className: "object-cover",
                  alt: "Gold sheen",
                  sizes: "256px",
                }),
              }),
            "green" === t &&
              (0, r.jsxs)("div", {
                "html-for": u,
                className:
                  "pointer-events-none absolute left-0 top-0 z-10 h-full w-full overflow-hidden border-transparent opacity-100 transition duration-300",
                children: [
                  (0, r.jsx)(i(), {
                    src: "/images/fabric-button-texture_teal-1.jpg",
                    fill: !0,
                    className: "object-cover",
                    alt: "Green back",
                    sizes: "256px",
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "pointer-events-none absolute left-0 top-0 h-full w-full bg-teal-500 opacity-0 transition duration-300 canhover:group-hover:opacity-100",
                  }),
                ],
              }),
            "dark" === t &&
              (0, r.jsx)("div", {
                "html-for": u,
                className:
                  "pointer-events-none absolute left-0 top-0 z-10 h-full w-full border-transparent bg-gradient-to-r from-black to-black opacity-0 transition duration-300 canhover:group-hover:opacity-80",
              }),
            "error" === t &&
              (0, r.jsx)("div", {
                "html-for": u,
                className:
                  "pointer-events-none absolute left-0 top-0 z-10 h-full w-full border-transparent bg-gradient-to-r from-red-500 to-red-500 opacity-0 transition duration-300 canhover:group-hover:opacity-100",
              }),
            d &&
              (0, r.jsx)(i(), {
                width: 16,
                height: 16,
                alt: "Link icon",
                className:
                  "relative z-10 mr-3 transition duration-300 canhover:group-hover:invert",
                src: d,
              }),
            (0, r.jsx)("span", {
              className: "relative z-20",
              children: e.children,
            }),
            n &&
              (0, r.jsx)("span", {
                className: "relative z-20 ml-3",
                children: (0, r.jsx)(s.Z, {}),
              }),
          ],
        });
      }
    },
    11750: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return Checkbox;
        },
      });
      var r = a(97458);
      function Checkbox(e) {
        let {
          children: t,
          variant: a = "normal",
          value: l,
          onChange: s,
          id: n,
        } = e;
        return (0, r.jsx)("div", {
          className: "relative",
          children: (0, r.jsxs)("label", {
            className: "main  flex cursor-pointer items-center",
            children: [
              (0, r.jsx)("p", { className: "ml-8 select-none", children: t }),
              (0, r.jsx)("input", {
                id: n,
                checked: l,
                onChange: (e) => s(e.target.checked),
                type: "checkbox",
              }),
              (0, r.jsx)("span", {
                className: "geekmark outline-none backdrop-blur ".concat(
                  "normal" === a
                    ? "geekmark-light border-2 border-gray-300 border-opacity-20 bg-white bg-opacity-20 duration-200 hover:border-white hover:border-opacity-50 focus:border-white focus:border-opacity-100"
                    : "geekmark-dark border-2 border-gray-500 border-opacity-30 bg-gray-800 bg-opacity-10 duration-200 hover:border-gray-800 hover:border-opacity-60 focus:border-gray-800 focus:border-opacity-80",
                ),
              }),
            ],
          }),
        });
      }
      a(52983);
    },
    61373: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return Spinner;
        },
      });
      var r = a(97458);
      function Spinner() {
        return (0, r.jsxs)("div", {
          role: "status",
          children: [
            (0, r.jsxs)("svg", {
              "aria-hidden": "true",
              className:
                "inline h-6 w-6 animate-spin fill-yellow-800 text-yellow-300",
              viewBox: "0 0 100 101",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, r.jsx)("path", {
                  d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                  fill: "currentColor",
                }),
                (0, r.jsx)("path", {
                  d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                  fill: "currentFill",
                }),
              ],
            }),
            (0, r.jsx)("span", {
              className: "sr-only",
              children: "Loading...",
            }),
          ],
        });
      }
    },
    86481: function (e, t, a) {
      "use strict";
      a.a(e, async function (e, r) {
        try {
          a.d(t, {
            Z: function () {
              return AdminCodeRedemptionHistoryModal;
            },
          });
          var l = a(97458),
            s = a(52983),
            n = a(24148),
            i = a(42897),
            o = a(9616),
            d = e([n]);
          function AdminCodeRedemptionHistoryModal(e) {
            let { code: t, onClose: a, onSelectUser: r } = e,
              [d, c] = (0, s.useState)([]),
              [u, m] = (0, s.useState)(null),
              [x, p] = (0, s.useState)(!1),
              [g, h] = (0, s.useState)(!1),
              [b, f] = (0, s.useState)(null);
            (0, s.useEffect)(() => {
              if (!t) return;
              let e = !1;
              async function loadInitial(t) {
                var a, r, l;
                (p(!0), f(null));
                let s = await (0, n.Iu)({ code: t, limit: 25 });
                if (!e) {
                  if (s.error)
                    (f(
                      null !== (a = s.error.errorMessage) && void 0 !== a
                        ? a
                        : "Failed to load redemption history",
                    ),
                      c([]),
                      m(null));
                  else {
                    let e = s.data;
                    (c(
                      null !== (r = null == e ? void 0 : e.items) &&
                        void 0 !== r
                        ? r
                        : [],
                    ),
                      m(
                        null !== (l = null == e ? void 0 : e.nextToken) &&
                          void 0 !== l
                          ? l
                          : null,
                      ));
                  }
                  e || p(!1);
                }
              }
              return (
                c([]),
                m(null),
                loadInitial(t),
                () => {
                  e = !0;
                }
              );
            }, [t]);
            let v = (0, s.useCallback)(async () => {
              var e, a;
              if (!u || !t) return;
              h(!0);
              let r = await (0, n.Iu)({ code: t, limit: 25, cursor: u });
              if (r.error)
                f(
                  null !== (e = r.error.errorMessage) && void 0 !== e
                    ? e
                    : "Failed to load redemption history",
                );
              else {
                let e = r.data;
                (c((t) => {
                  var a;
                  return [
                    ...t,
                    ...(null !== (a = null == e ? void 0 : e.items) &&
                    void 0 !== a
                      ? a
                      : []),
                  ];
                }),
                  m(
                    null !== (a = null == e ? void 0 : e.nextToken) &&
                      void 0 !== a
                      ? a
                      : null,
                  ));
              }
              h(!1);
            }, [t, u]);
            return t
              ? (0, l.jsx)("div", {
                  className:
                    "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4",
                  children: (0, l.jsxs)("div", {
                    className:
                      "w-full max-w-3xl rounded bg-white p-5 shadow-lg",
                    children: [
                      (0, l.jsxs)("div", {
                        className: "mb-4 flex items-start justify-between",
                        children: [
                          (0, l.jsxs)("div", {
                            children: [
                              (0, l.jsx)("h2", {
                                className: "text-2xl font-bold text-gray-900",
                                children: "Redemption History",
                              }),
                              (0, l.jsxs)("p", {
                                className: "text-sm text-gray-700",
                                children: [
                                  "Code:",
                                  " ",
                                  (0, l.jsx)("span", {
                                    className:
                                      "font-mono text-xs text-gray-500",
                                    children: t,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, l.jsx)(i.Z, {
                            type: "button",
                            variant: "dark",
                            className:
                              "rounded border border-gray-300 px-2 py-1 text-sm text-gray-700 hover:bg-gray-100",
                            onClick: a,
                            children: "Close",
                          }),
                        ],
                      }),
                      b
                        ? (0, l.jsx)("p", {
                            className: "text-red-500 text-sm font-semibold",
                            children: b,
                          })
                        : x
                          ? (0, l.jsx)("p", {
                              className: "text-sm text-gray-700",
                              children: "Loading…",
                            })
                          : 0 === d.length
                            ? (0, l.jsx)("p", {
                                className: "text-sm text-gray-700",
                                children: "No redemptions recorded.",
                              })
                            : (0, l.jsx)(o.T, {
                                entries: d,
                                onOpenUser: r,
                                showCodeColumn: !0,
                                summaryLabel: ""
                                  .concat(d.length, " redemption")
                                  .concat(1 === d.length ? "" : "s", " loaded"),
                                loadMore: u
                                  ? { hasMore: !0, onLoadMore: v, loading: g }
                                  : void 0,
                              }),
                    ],
                  }),
                })
              : null;
          }
          ((n = (d.then ? (await d)() : d)[0]), r());
        } catch (e) {
          r(e);
        }
      });
    },
    68820: function (e, t, a) {
      "use strict";
      a.a(e, async function (e, r) {
        try {
          a.d(t, {
            Z: function () {
              return AdminUserInfoModal;
            },
          });
          var l = a(97458),
            s = a(52983),
            n = a(24148),
            i = a(42897),
            o = e([n]);
          function AdminUserInfoModal(e) {
            var t, a, r;
            let { playFabId: o, onClose: d } = e,
              [c, u] = (0, s.useState)(!1),
              [m, x] = (0, s.useState)(null);
            return ((0, s.useEffect)(() => {
              let e = !1;
              async function load() {
                if (!o) return;
                u(!0);
                let t = await (0, n.N5)(o);
                if (!e) {
                  var a;
                  (x(null !== (a = t.data) && void 0 !== a ? a : null), u(!1));
                }
              }
              return (
                x(null),
                u(!1),
                load(),
                () => {
                  e = !0;
                }
              );
            }, [o]),
            o)
              ? (0, l.jsx)("div", {
                  className:
                    "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4",
                  children: (0, l.jsxs)("div", {
                    className: "w-full max-w-lg rounded bg-white p-4 shadow-lg",
                    children: [
                      (0, l.jsxs)("div", {
                        className: "mb-3 flex items-center justify-between",
                        children: [
                          (0, l.jsx)("h2", {
                            className: "text-lg font-semibold text-gray-700",
                            children: "User Info",
                          }),
                          (0, l.jsx)(i.Z, {
                            type: "button",
                            variant: "dark",
                            className: "text-gray-600 hover:text-gray-800",
                            onClick: d,
                            children: "Close",
                          }),
                        ],
                      }),
                      c
                        ? (0, l.jsx)("p", {
                            className: "text-sm text-gray-700",
                            children: "Loading…",
                          })
                        : m
                          ? (0, l.jsxs)("div", {
                              className: "space-y-1 text-sm text-gray-700",
                              children: [
                                (0, l.jsxs)("div", {
                                  children: [
                                    (0, l.jsx)("span", {
                                      className: "font-semibold",
                                      children: "PlayFab ID:",
                                    }),
                                    " ",
                                    m.playFabId,
                                  ],
                                }),
                                (0, l.jsxs)("div", {
                                  children: [
                                    (0, l.jsx)("span", {
                                      className: "font-semibold",
                                      children: "Display Name:",
                                    }),
                                    " ",
                                    null !== (t = m.displayName) && void 0 !== t
                                      ? t
                                      : "—",
                                  ],
                                }),
                                (0, l.jsxs)("div", {
                                  children: [
                                    (0, l.jsx)("span", {
                                      className: "font-semibold",
                                      children: "Contact Email:",
                                    }),
                                    " ",
                                    m.contactEmail
                                      ? (0, l.jsx)("a", {
                                          href: "mailto:".concat(
                                            m.contactEmail,
                                          ),
                                          className:
                                            "text-blue-700 hover:text-blue-900 underline underline-offset-2",
                                          children: m.contactEmail,
                                        })
                                      : "—",
                                  ],
                                }),
                                (0, l.jsxs)("div", {
                                  children: [
                                    (0, l.jsx)("span", {
                                      className: "font-semibold",
                                      children: "Created:",
                                    }),
                                    " ",
                                    null !== (a = m.created) && void 0 !== a
                                      ? a
                                      : "—",
                                  ],
                                }),
                                (0, l.jsxs)("div", {
                                  children: [
                                    (0, l.jsx)("span", {
                                      className: "font-semibold",
                                      children: "Last Login:",
                                    }),
                                    " ",
                                    null !== (r = m.lastLogin) && void 0 !== r
                                      ? r
                                      : "—",
                                  ],
                                }),
                              ],
                            })
                          : (0, l.jsx)("p", {
                              className: "text-red-700 text-sm",
                              children: "Failed to load user info.",
                            }),
                    ],
                  }),
                })
              : null;
          }
          ((n = (o.then ? (await o)() : o)[0]), r());
        } catch (e) {
          r(e);
        }
      });
    },
    3421: function (e, t, a) {
      "use strict";
      a.a(e, async function (e, r) {
        try {
          a.d(t, {
            S: function () {
              return CampaignsSection;
            },
          });
          var l = a(97458),
            s = a(52983),
            n = a(63730),
            i = a(11216),
            o = a(22817),
            d = a(3903),
            c = a(52708),
            u = a(42897),
            m = a(96061),
            x = a(72382),
            p = e([m]);
          m = (p.then ? (await p)() : p)[0];
          let g = new Intl.NumberFormat(void 0, {
              style: "percent",
              minimumFractionDigits: 0,
              maximumFractionDigits: 1,
            }),
            h = ["NONE", "ASSIGNED", "UNIQUE", "STATIC"];
          function CampaignsSection(e) {
            var t, a;
            let {
                campaigns: r,
                campaignFilters: p,
                setCampaignFilters: b,
                campaignSort: f,
                onCampaignSortClick: v,
                onLoadMoreCampaigns: y,
                campaignsNextPage: j,
                loadingMoreCampaigns: N,
                onCreateCampaign: w,
                campaignExportError: C,
                onCreateCodes: k,
                onShowCampaignDetails: S,
                onExportCampaignCodes: I,
                exportingCampaignId: E,
                onEditCampaign: R,
                onDeleteCampaign: F,
                selectedCampaign: A,
                campaignCodes: M,
                campaignCodesError: L,
                loadingCampaignCodes: D,
                campaignsById: U,
                items: T,
                onOpenUser: Z,
                onOpenRedemptionHistory: P,
                campaignCodesNextToken: B,
                loadMoreCampaignCodes: O,
                loadingMoreCampaignCodes: V,
                actionFeedback: _,
                onDismissActionFeedback: z,
              } = e,
              [K, G] = (0, s.useState)(null),
              Q = {
                "in-progress": {
                  container: "border-indigo-200 bg-indigo-50 text-indigo-900",
                  icon: (0, l.jsx)(i.Z, {
                    className: "h-5 w-5 animate-spin text-indigo-600",
                  }),
                },
                success: {
                  container:
                    "border-emerald-200 bg-emerald-50 text-emerald-900",
                  icon: (0, l.jsx)(o.Z, {
                    className: "h-5 w-5 text-emerald-600",
                  }),
                },
                error: {
                  container: "border-rose-200 bg-rose-50 text-rose-900",
                  icon: (0, l.jsx)(d.Z, { className: "text-rose-600 h-5 w-5" }),
                },
              };
            return (
              (0, s.useEffect)(() => {
                function handleGlobalClick(e) {
                  if (!(e.target instanceof Node)) return;
                  let t = document.getElementById("campaign-actions-menu");
                  (t && t.contains(e.target)) || G(null);
                }
                function handleEscape(e) {
                  "Escape" === e.key && G(null);
                }
                return (
                  window.addEventListener("mousedown", handleGlobalClick),
                  window.addEventListener("keydown", handleEscape),
                  window.addEventListener("scroll", () => G(null), !0),
                  () => {
                    (window.removeEventListener("mousedown", handleGlobalClick),
                      window.removeEventListener("keydown", handleEscape),
                      window.removeEventListener("scroll", () => G(null), !0));
                  }
                );
              }, []),
              (0, l.jsxs)("div", {
                className:
                  "mx-auto max-w-7xl rounded-lg bg-white p-4 text-gray-900 shadow",
                children: [
                  (0, l.jsxs)("div", {
                    className:
                      "mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",
                    children: [
                      (0, l.jsxs)("div", {
                        children: [
                          (0, l.jsx)("h1", {
                            className: "text-2xl font-bold",
                            children: "Campaigns",
                          }),
                          (0, l.jsx)("p", {
                            className: "text-sm text-gray-700",
                            children:
                              "Create campaigns and manage their details.",
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className:
                          "flex flex-col items-stretch gap-2 sm:flex-row sm:items-center",
                        children: [
                          (0, l.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [
                              (0, l.jsx)("label", {
                                htmlFor: "campaign-status-filter",
                                className: "text-sm text-gray-700",
                                children: "Status",
                              }),
                              (0, l.jsxs)("select", {
                                id: "campaign-status-filter",
                                className:
                                  "rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none",
                                value:
                                  null !== (t = p.status) && void 0 !== t
                                    ? t
                                    : "",
                                onChange: (e) => {
                                  let t = m.a8P.safeParse(e.target.value);
                                  b((e) => {
                                    let a = { ...e };
                                    return (
                                      t.success
                                        ? (a.status = t.data)
                                        : delete a.status,
                                      a
                                    );
                                  });
                                },
                                children: [
                                  (0, l.jsx)("option", {
                                    value: "",
                                    children: "All",
                                  }),
                                  (0, l.jsx)("option", {
                                    value: "active",
                                    children: "Active",
                                  }),
                                  (0, l.jsx)("option", {
                                    value: "scheduled",
                                    children: "Scheduled",
                                  }),
                                  (0, l.jsx)("option", {
                                    value: "expired",
                                    children: "Expired",
                                  }),
                                  (0, l.jsx)("option", {
                                    value: "redeemed",
                                    children: "Redeemed",
                                  }),
                                  (0, l.jsx)("option", {
                                    value: "inactive",
                                    children: "Inactive",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [
                              (0, l.jsx)("label", {
                                htmlFor: "campaign-code-kind-filter",
                                className: "text-sm text-gray-700",
                                children: "Code Kind",
                              }),
                              (0, l.jsxs)("select", {
                                id: "campaign-code-kind-filter",
                                className:
                                  "rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none",
                                value:
                                  null !== (a = p.distinctCodeKind) &&
                                  void 0 !== a
                                    ? a
                                    : "",
                                onChange: (e) => {
                                  let t = e.target.value,
                                    a =
                                      t && h.some((e) => e === t) ? t : void 0;
                                  b((e) => {
                                    let t = { ...e };
                                    return (
                                      a
                                        ? (t.distinctCodeKind = a)
                                        : delete t.distinctCodeKind,
                                      t
                                    );
                                  });
                                },
                                children: [
                                  (0, l.jsx)("option", {
                                    value: "",
                                    children: "All",
                                  }),
                                  (0, l.jsx)("option", {
                                    value: "NONE",
                                    children: "None",
                                  }),
                                  (0, l.jsx)("option", {
                                    value: "ASSIGNED",
                                    children: "Assigned",
                                  }),
                                  (0, l.jsx)("option", {
                                    value: "UNIQUE",
                                    children: "Unique",
                                  }),
                                  (0, l.jsx)("option", {
                                    value: "STATIC",
                                    children: "Static",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className: "flex gap-2",
                            children: [
                              (0, l.jsx)(u.Z, {
                                type: "button",
                                variant: "dark",
                                onClick: y,
                                disabled: !j || N,
                                loading: N,
                                className:
                                  "rounded border border-gray-300 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60",
                                children: N ? "Loading…" : "Load More",
                              }),
                              (0, l.jsx)(u.Z, {
                                type: "button",
                                variant: "darkBackground",
                                onClick: w,
                                className:
                                  "rounded bg-indigo-600 px-3 py-2 text-white hover:bg-indigo-700",
                                children: "Create Campaign",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  _.length > 0 &&
                    (0, l.jsx)("div", {
                      className: "mb-3 space-y-2",
                      role: "status",
                      "aria-live": "polite",
                      "aria-atomic": "false",
                      children: _.map((e) => {
                        let t = Q[e.state];
                        return (0, l.jsxs)(
                          "div",
                          {
                            className:
                              "flex items-start gap-3 rounded border px-3 py-2 text-sm shadow-sm ".concat(
                                t.container,
                              ),
                            children: [
                              (0, l.jsx)("span", {
                                className: "mt-0.5 flex-shrink-0",
                                children: t.icon,
                              }),
                              (0, l.jsxs)("div", {
                                className: "flex-1",
                                children: [
                                  (0, l.jsx)("p", {
                                    className: "font-semibold leading-5",
                                    children: e.message,
                                  }),
                                  (0, l.jsx)("p", {
                                    className: "text-xs text-gray-700",
                                    children:
                                      "export" === e.action
                                        ? "Exporting campaign codes."
                                        : "Deleting campaign and associated codes.",
                                  }),
                                ],
                              }),
                              "in-progress" !== e.state &&
                                (0, l.jsx)("button", {
                                  type: "button",
                                  onClick: () => z(e.id),
                                  className:
                                    "text-xs font-semibold text-gray-700 underline underline-offset-2 hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                                  "aria-label": "Dismiss action feedback",
                                  children: "Dismiss",
                                }),
                            ],
                          },
                          e.id,
                        );
                      }),
                    }),
                  C &&
                    (0, l.jsx)("p", {
                      className: "mt-2 text-sm font-semibold text-red-500",
                      children: C,
                    }),
                  (0, l.jsx)("div", {
                    className: "overflow-x-auto overflow-y-visible",
                    children: (0, l.jsxs)("table", {
                      className:
                        "min-w-full border border-gray-200 text-left text-sm",
                      children: [
                        (0, l.jsx)("thead", {
                          className: "bg-gray-50 text-gray-700",
                          children: (0, l.jsxs)("tr", {
                            children: [
                              (0, l.jsx)("th", {
                                className: "border-b px-3 py-2",
                                children: "Name",
                              }),
                              (0, l.jsx)("th", {
                                className: "border-b px-3 py-2",
                                children: "Description",
                              }),
                              (0, l.jsx)("th", {
                                className: "border-b px-3 py-2",
                                children: "Statuses",
                              }),
                              (0, l.jsx)("th", {
                                className: "border-b px-3 py-2",
                                children: "Redeemed %",
                              }),
                              (0, l.jsx)("th", {
                                className: "border-b px-3 py-2",
                                children: "Code Kinds",
                              }),
                              (0, l.jsx)("th", {
                                className: "border-b px-3 py-2",
                                children: "Codes",
                              }),
                              (0, l.jsx)("th", {
                                className: "border-b px-3 py-2",
                                children: "Redeemed",
                              }),
                              (0, l.jsx)("th", {
                                className: "border-b px-3 py-2",
                                "aria-sort":
                                  (null == f ? void 0 : f.column) === "startsAt"
                                    ? "desc" === f.direction
                                      ? "descending"
                                      : "ascending"
                                    : "none",
                                children: (0, l.jsxs)(u.Z, {
                                  type: "button",
                                  variant: "dark",
                                  onClick: () => v("startsAt"),
                                  className:
                                    "flex w-full items-center gap-1 text-left text-sm font-medium text-gray-700 hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                                  children: [
                                    "Starts",
                                    (null == f ? void 0 : f.column) ===
                                    "startsAt"
                                      ? (0, l.jsx)("span", {
                                          className: "text-xs",
                                          children:
                                            "desc" === f.direction ? "↓" : "↑",
                                        })
                                      : null,
                                  ],
                                }),
                              }),
                              (0, l.jsx)("th", {
                                className: "border-b px-3 py-2",
                                children: "Ends",
                              }),
                              (0, l.jsx)("th", {
                                className: "border-b px-3 py-2",
                                "aria-sort":
                                  (null == f ? void 0 : f.column) ===
                                  "createdAt"
                                    ? "desc" === f.direction
                                      ? "descending"
                                      : "ascending"
                                    : "none",
                                children: (0, l.jsxs)(u.Z, {
                                  type: "button",
                                  variant: "dark",
                                  onClick: () => v("createdAt"),
                                  className:
                                    "flex w-full items-center gap-1 text-left text-sm font-medium text-gray-700 hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                                  children: [
                                    "Created",
                                    (null == f ? void 0 : f.column) ===
                                    "createdAt"
                                      ? (0, l.jsx)("span", {
                                          className: "text-xs",
                                          children:
                                            "desc" === f.direction ? "↓" : "↑",
                                        })
                                      : null,
                                  ],
                                }),
                              }),
                              (0, l.jsx)("th", {
                                className: "border-b px-3 py-2",
                                children: "Actions",
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsx)("tbody", {
                          children:
                            0 === r.length
                              ? (0, l.jsx)("tr", {
                                  children: (0, l.jsx)("td", {
                                    className: "border-b px-3 py-3",
                                    colSpan: 11,
                                    children:
                                      "No campaigns found. Create one to begin assigning codes.",
                                  }),
                                })
                              : r.map((e) => {
                                  var t, a, r, s, n, i;
                                  let o =
                                      null !== (t = e.staticCodeCount) &&
                                      void 0 !== t
                                        ? t
                                        : 0,
                                    d =
                                      null !== (a = e.uniqueCodeCount) &&
                                      void 0 !== a
                                        ? a
                                        : 0,
                                    u =
                                      null !== (r = e.assignedCodeCount) &&
                                      void 0 !== r
                                        ? r
                                        : 0,
                                    m =
                                      null !==
                                        (s = e.staticCodesRedeemedCount) &&
                                      void 0 !== s
                                        ? s
                                        : 0,
                                    x =
                                      null !==
                                        (n = e.uniqueCodesRedeemedCount) &&
                                      void 0 !== n
                                        ? n
                                        : 0,
                                    p =
                                      null !==
                                        (i = e.assignedCodesRedeemedCount) &&
                                      void 0 !== i
                                        ? i
                                        : 0;
                                  return (0, l.jsxs)(
                                    "tr",
                                    {
                                      className: "odd:bg-white even:bg-gray-50",
                                      children: [
                                        (0, l.jsx)("td", {
                                          className: "border-b px-3 py-2",
                                          children: (0, l.jsxs)("div", {
                                            className: "flex flex-col",
                                            children: [
                                              (0, l.jsx)("span", {
                                                children: e.name,
                                              }),
                                              (0, l.jsx)("span", {
                                                className:
                                                  "font-mono text-xs text-gray-500",
                                                children: e.id,
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, l.jsx)("td", {
                                          className: "border-b px-3 py-2",
                                          children: e.description,
                                        }),
                                        (0, l.jsx)("td", {
                                          className: "border-b px-3 py-2",
                                          children:
                                            e.statuses && e.statuses.length > 0
                                              ? (0, l.jsx)("div", {
                                                  className:
                                                    "flex flex-wrap gap-1",
                                                  children: e.statuses.map(
                                                    (e) =>
                                                      (0, l.jsx)(
                                                        "span",
                                                        {
                                                          className:
                                                            "inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs capitalize text-gray-800 ring-1 ring-gray-300",
                                                          children: e,
                                                        },
                                                        e,
                                                      ),
                                                  ),
                                                })
                                              : "—",
                                        }),
                                        (0, l.jsx)("td", {
                                          className: "border-b px-3 py-2",
                                          children:
                                            null == e.redeemedPercent
                                              ? "—"
                                              : g.format(e.redeemedPercent),
                                        }),
                                        (0, l.jsx)("td", {
                                          className: "border-b px-3 py-2",
                                          children:
                                            Array.isArray(
                                              e.distinctCodeKinds,
                                            ) && e.distinctCodeKinds.length > 0
                                              ? (0, l.jsx)("div", {
                                                  className:
                                                    "flex flex-wrap gap-1",
                                                  children:
                                                    e.distinctCodeKinds.map(
                                                      (e) =>
                                                        (0, l.jsx)(
                                                          "span",
                                                          {
                                                            className:
                                                              "inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs capitalize text-gray-800 ring-1 ring-gray-300",
                                                            children: e,
                                                          },
                                                          e,
                                                        ),
                                                    ),
                                                })
                                              : "—",
                                        }),
                                        (0, l.jsx)("td", {
                                          className: "border-b px-3 py-2",
                                          children: (0, l.jsxs)("div", {
                                            className:
                                              "flex items-center gap-1",
                                            children: [
                                              (0, l.jsx)("span", {
                                                children: (
                                                  o +
                                                  d +
                                                  u
                                                ).toLocaleString(),
                                              }),
                                              (0, l.jsx)(c.Z, {
                                                className:
                                                  "h-4 w-4 cursor-help text-gray-500",
                                                title: "Static: "
                                                  .concat(
                                                    o.toLocaleString(),
                                                    "\nUnique: ",
                                                  )
                                                  .concat(
                                                    d.toLocaleString(),
                                                    "\nAssigned: ",
                                                  )
                                                  .concat(u.toLocaleString()),
                                                "aria-label":
                                                  "Code counts breakdown",
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, l.jsx)("td", {
                                          className: "border-b px-3 py-2",
                                          children: (0, l.jsxs)("div", {
                                            className:
                                              "flex items-center gap-1",
                                            children: [
                                              (0, l.jsx)("span", {
                                                children: (
                                                  m +
                                                  x +
                                                  p
                                                ).toLocaleString(),
                                              }),
                                              (0, l.jsx)(c.Z, {
                                                className:
                                                  "h-4 w-4 cursor-help text-gray-500",
                                                title: "Static: "
                                                  .concat(
                                                    m.toLocaleString(),
                                                    "\nUnique: ",
                                                  )
                                                  .concat(
                                                    x.toLocaleString(),
                                                    "\nAssigned: ",
                                                  )
                                                  .concat(p.toLocaleString()),
                                                "aria-label":
                                                  "Redeemed codes breakdown",
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, l.jsx)("td", {
                                          className: "border-b px-3 py-2",
                                          children: e.startsAt
                                            ? new Date(
                                                e.startsAt,
                                              ).toLocaleString()
                                            : "—",
                                        }),
                                        (0, l.jsx)("td", {
                                          className: "border-b px-3 py-2",
                                          children: e.endsAt
                                            ? new Date(
                                                e.endsAt,
                                              ).toLocaleString()
                                            : "—",
                                        }),
                                        (0, l.jsx)("td", {
                                          className: "border-b px-3 py-2",
                                          children: new Date(
                                            e.createdAt,
                                          ).toLocaleString(),
                                        }),
                                        (0, l.jsx)("td", {
                                          className:
                                            "border-b px-3 py-2 align-top",
                                          children: (0, l.jsx)("div", {
                                            className: "inline-block text-left",
                                            children: (0, l.jsxs)("button", {
                                              type: "button",
                                              onClick: (t) =>
                                                (function (e, t) {
                                                  let a =
                                                      e.currentTarget.getBoundingClientRect(),
                                                    r =
                                                      window.innerHeight -
                                                      a.bottom,
                                                    l =
                                                      a.right -
                                                      180 +
                                                      window.scrollX,
                                                    s =
                                                      r < 220
                                                        ? a.top -
                                                          220 +
                                                          window.scrollY -
                                                          8
                                                        : a.bottom +
                                                          window.scrollY +
                                                          8;
                                                  G((e) =>
                                                    e && e.campaignId === t
                                                      ? null
                                                      : {
                                                          campaignId: t,
                                                          top: s,
                                                          left: l,
                                                        },
                                                  );
                                                })(t, e.id),
                                              className:
                                                "inline-flex items-center gap-1 rounded border border-gray-300 px-2 py-1 text-xs font-semibold text-gray-700 shadow-sm transition hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                                              children: [
                                                "Actions",
                                                (0, l.jsx)("span", {
                                                  "aria-hidden": !0,
                                                  className:
                                                    "text-gray-500 transition-transform",
                                                  children: "▼",
                                                }),
                                              ],
                                            }),
                                          }),
                                        }),
                                      ],
                                    },
                                    e.id,
                                  );
                                }),
                        }),
                      ],
                    }),
                  }),
                  K &&
                    (0, n.createPortal)(
                      (0, l.jsx)("div", {
                        id: "campaign-actions-menu",
                        style: {
                          position: "absolute",
                          top: K.top,
                          left: K.left,
                          width: 180,
                        },
                        className:
                          "z-50 rounded-md border border-gray-200 bg-white shadow-xl",
                        children: (0, l.jsxs)("div", {
                          className: "flex flex-col divide-y divide-gray-100",
                          children: [
                            (0, l.jsx)("button", {
                              type: "button",
                              onClick: () => {
                                (k({ campaignId: K.campaignId }), G(null));
                              },
                              className:
                                "px-3 py-2 text-left text-sm text-gray-800 transition hover:bg-gray-50",
                              children: "Create codes",
                            }),
                            (0, l.jsx)("button", {
                              type: "button",
                              onClick: () => {
                                var e;
                                (S({
                                  id: K.campaignId,
                                  name:
                                    null === (e = U[K.campaignId]) ||
                                    void 0 === e
                                      ? void 0
                                      : e.name,
                                }),
                                  G(null));
                              },
                              className:
                                "px-3 py-2 text-left text-sm text-gray-800 transition hover:bg-gray-50",
                              children: "View details",
                            }),
                            (0, l.jsx)("button", {
                              type: "button",
                              onClick: () => {
                                (I(K.campaignId), G(null));
                              },
                              disabled: E === K.campaignId,
                              className:
                                "px-3 py-2 text-left text-sm text-gray-800 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60",
                              children:
                                E === K.campaignId
                                  ? "Exporting…"
                                  : "Export CSV",
                            }),
                            (0, l.jsx)("button", {
                              type: "button",
                              onClick: () => {
                                let e = U[K.campaignId];
                                (e && R(e), G(null));
                              },
                              className:
                                "px-3 py-2 text-left text-sm text-gray-800 transition hover:bg-gray-50",
                              children: "Edit",
                            }),
                            (0, l.jsx)("button", {
                              type: "button",
                              onClick: () => {
                                let e = U[K.campaignId];
                                (e && F(e), G(null));
                              },
                              className:
                                "hover:bg-red-50 px-3 py-2 text-left text-sm font-semibold text-red-500 transition",
                              children: "Delete",
                            }),
                          ],
                        }),
                      }),
                      document.body,
                    ),
                  (0, l.jsx)("div", {
                    className: "mt-6 border-t border-gray-200 pt-4",
                    children: A
                      ? (0, l.jsx)(x.G, {
                          embedded: !0,
                          selectedCampaign: A,
                          campaignCodes: M,
                          campaignCodesError: L,
                          loadingCampaignCodes: D,
                          campaignsById: U,
                          items: T,
                          onOpenUser: Z,
                          onOpenRedemptionHistory: P,
                          campaignCodesNextToken: B,
                          loadMoreCampaignCodes: O,
                          loadingMoreCampaignCodes: V,
                        })
                      : (0, l.jsx)("div", {
                          className:
                            "rounded border border-dashed border-gray-300 bg-gray-50 p-4 text-sm text-gray-700",
                          children:
                            'Select "View Details" on a campaign to view its codes.',
                        }),
                  }),
                ],
              })
            );
          }
          r();
        } catch (e) {
          r(e);
        }
      });
    },
    72382: function (e, t, a) {
      "use strict";
      a.d(t, {
        G: function () {
          return CodesSection;
        },
      });
      var r = a(97458),
        l = a(42897),
        s = a(5298);
      function CodesSection(e) {
        var t;
        let {
          selectedCampaign: a,
          campaignCodes: n,
          campaignCodesError: i,
          loadingCampaignCodes: o,
          campaignsById: d,
          items: c,
          onOpenUser: u,
          onOpenRedemptionHistory: m,
          campaignCodesNextToken: x,
          loadMoreCampaignCodes: p,
          loadingMoreCampaignCodes: g,
          embedded: h = !1,
        } = e;
        return (0, r.jsxs)("div", {
          className: h
            ? "mt-4 text-gray-900"
            : "mx-auto mt-4 max-w-7xl rounded-lg bg-white p-4 text-gray-900 shadow",
          children: [
            (0, r.jsx)("div", {
              className:
                "mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",
              children: (0, r.jsxs)("div", {
                children: [
                  (0, r.jsx)("h2", {
                    className: "text-2xl font-bold",
                    children: "Codes",
                  }),
                  a
                    ? (0, r.jsxs)("p", {
                        className: "text-sm text-gray-700",
                        children: [
                          "Campaign:",
                          " ",
                          (0, r.jsx)("span", {
                            className: "font-semibold",
                            children:
                              null !== (t = a.name) && void 0 !== t
                                ? t
                                : "Unnamed Campaign",
                          }),
                          " ",
                          (0, r.jsxs)("span", {
                            className: "font-mono text-xs text-gray-500",
                            children: ["(", a.id, ")"],
                          }),
                        ],
                      })
                    : (0, r.jsx)("p", {
                        className: "text-sm text-gray-700",
                        children:
                          'Select "View Details" from a campaign to view its codes.',
                      }),
                ],
              }),
            }),
            i &&
              n.length > 0 &&
              (0, r.jsx)("p", {
                className: "text-red-500 mb-3 text-sm font-semibold",
                children: i,
              }),
            (0, r.jsx)("div", {
              className: "overflow-x-auto",
              children: (0, r.jsxs)("table", {
                className:
                  "min-w-full border border-gray-200 text-left text-sm",
                children: [
                  (0, r.jsx)("thead", {
                    className: "bg-gray-50 text-gray-700",
                    children: (0, r.jsxs)("tr", {
                      children: [
                        (0, r.jsx)("th", {
                          className: "border-b px-3 py-2",
                          children: "Code",
                        }),
                        (0, r.jsx)("th", {
                          className: "border-b px-3 py-2",
                          children: "Kind",
                        }),
                        (0, r.jsx)("th", {
                          className: "border-b px-3 py-2",
                          children: "Redemption Limit",
                        }),
                        (0, r.jsx)("th", {
                          className: "border-b px-3 py-2",
                          children: "Rewards",
                        }),
                        (0, r.jsx)("th", {
                          className: "border-b px-3 py-2",
                          children: "Campaign",
                        }),
                        (0, r.jsx)("th", {
                          className: "border-b px-3 py-2",
                          children: "Assigned To",
                        }),
                        (0, r.jsx)("th", {
                          className: "border-b px-3 py-2",
                          children: "Redemption History",
                        }),
                        (0, r.jsx)("th", {
                          className: "border-b px-3 py-2",
                          children: "Created",
                        }),
                        (0, r.jsx)("th", {
                          className: "border-b px-3 py-2",
                          children: "Campaign Starts",
                        }),
                        (0, r.jsx)("th", {
                          className: "border-b px-3 py-2",
                          children: "Campaign Ends",
                        }),
                        (0, r.jsx)("th", {
                          className: "border-b px-3 py-2",
                          children: "Last Redeemed At",
                        }),
                        (0, r.jsx)("th", {
                          className: "border-b px-3 py-2",
                          children: "Last Redeemed By",
                        }),
                      ],
                    }),
                  }),
                  (0, r.jsx)("tbody", {
                    children: o
                      ? (0, r.jsx)("tr", {
                          children: (0, r.jsx)("td", {
                            className: "border-b px-3 py-3",
                            colSpan: 12,
                            children: "Loading codes…",
                          }),
                        })
                      : a
                        ? 0 === n.length
                          ? (0, r.jsx)("tr", {
                              children: (0, r.jsx)("td", {
                                className: "border-b px-3 py-3",
                                colSpan: 12,
                                children: (0, r.jsx)("span", {
                                  className: i
                                    ? "text-red-500 font-semibold"
                                    : void 0,
                                  children:
                                    null != i
                                      ? i
                                      : "No codes found for this campaign.",
                                }),
                              }),
                            })
                          : n.map((e) => {
                              var t, a, n;
                              let i = d[e.campaignId],
                                o =
                                  null !==
                                    (t = null == i ? void 0 : i.startsAt) &&
                                  void 0 !== t
                                    ? t
                                    : null,
                                x =
                                  null !==
                                    (a = null == i ? void 0 : i.endsAt) &&
                                  void 0 !== a
                                    ? a
                                    : null,
                                p = e.itemIds ? Array.from(e.itemIds) : [],
                                g = p.map((e) => ({
                                  id: e,
                                  item: c.find((t) => t.id === e),
                                }));
                              return (
                                "AQ8V9DW6" === e.code && console.log(e),
                                (0, r.jsxs)(
                                  "tr",
                                  {
                                    className:
                                      "odd:bg-white even:bg-gray-50 hover:bg-gray-100",
                                    children: [
                                      (0, r.jsx)("td", {
                                        className:
                                          "border-b px-3 py-2 font-mono",
                                        children: e.code,
                                      }),
                                      (0, r.jsx)("td", {
                                        className: "border-b px-3 py-2",
                                        children: e.codeKind,
                                      }),
                                      (0, r.jsx)("td", {
                                        className: "border-b px-3 py-2",
                                        children:
                                          null === e.redemptionLimit
                                            ? "∞"
                                            : e.redemptionLimit,
                                      }),
                                      (0, r.jsx)("td", {
                                        className: "border-b px-3 py-2",
                                        children: (0, r.jsx)("div", {
                                          className: "flex flex-col gap-2",
                                          children:
                                            g.length > 0
                                              ? g.map((e) => {
                                                  var t;
                                                  let { id: a, item: l } = e;
                                                  return (0, r.jsxs)(
                                                    "div",
                                                    {
                                                      className:
                                                        "flex flex-col",
                                                      children: [
                                                        (0, r.jsx)("span", {
                                                          children:
                                                            null !==
                                                              (t =
                                                                null == l
                                                                  ? void 0
                                                                  : l.title) &&
                                                            void 0 !== t
                                                              ? t
                                                              : "Unknown item",
                                                        }),
                                                        (0, r.jsx)("span", {
                                                          className:
                                                            "font-mono text-xs text-gray-500",
                                                          children: (
                                                            null == l
                                                              ? void 0
                                                              : l.friendlyId
                                                          )
                                                            ? ""
                                                                .concat(
                                                                  l.friendlyId,
                                                                  " ",
                                                                )
                                                                .concat(l.id)
                                                            : a,
                                                        }),
                                                      ],
                                                    },
                                                    a,
                                                  );
                                                })
                                              : (0, r.jsx)("span", {
                                                  className: "text-gray-500",
                                                  children: "—",
                                                }),
                                        }),
                                      }),
                                      (0, r.jsx)("td", {
                                        className: "border-b px-3 py-2",
                                        children: (0, r.jsxs)("div", {
                                          className: "flex flex-col",
                                          children: [
                                            (0, r.jsx)("span", {
                                              children:
                                                null !==
                                                  (n =
                                                    null == i
                                                      ? void 0
                                                      : i.name) && void 0 !== n
                                                  ? n
                                                  : "Unknown",
                                            }),
                                            (0, r.jsx)("span", {
                                              className:
                                                "font-mono text-xs text-gray-500",
                                              children: e.campaignId,
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, r.jsx)("td", {
                                        className: "border-b px-3 py-2",
                                        children: e.assignedToMasterPlayerId
                                          ? (0, r.jsx)(l.Z, {
                                              type: "button",
                                              variant: "dark",
                                              className:
                                                "text-blue-700 hover:text-blue-900 underline underline-offset-2",
                                              onClick: () =>
                                                u(e.assignedToMasterPlayerId),
                                              children:
                                                e.assignedToMasterPlayerId,
                                            })
                                          : "—",
                                      }),
                                      (0, r.jsx)("td", {
                                        className: "border-b px-3 py-2",
                                        children: (0, r.jsx)(l.Z, {
                                          type: "button",
                                          variant: "dark",
                                          "aria-label":
                                            "View redemption history for ".concat(
                                              e.code,
                                            ),
                                          className:
                                            "rounded border border-transparent p-1 text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500",
                                          onClick: () => m(e.code),
                                          children: (0, r.jsx)(s.Z, {
                                            className: "h-5 w-5",
                                          }),
                                        }),
                                      }),
                                      (0, r.jsx)("td", {
                                        className: "border-b px-3 py-2",
                                        children: new Date(
                                          e.createdAt,
                                        ).toLocaleString(),
                                      }),
                                      (0, r.jsx)("td", {
                                        className: "border-b px-3 py-2",
                                        children: o
                                          ? new Date(o).toLocaleString()
                                          : "—",
                                      }),
                                      (0, r.jsx)("td", {
                                        className: "border-b px-3 py-2",
                                        children: x
                                          ? new Date(x).toLocaleString()
                                          : "—",
                                      }),
                                      (0, r.jsx)("td", {
                                        className: "border-b px-3 py-2",
                                        children: e.lastRedeemedAt
                                          ? new Date(
                                              e.lastRedeemedAt,
                                            ).toLocaleString()
                                          : "—",
                                      }),
                                      (0, r.jsx)("td", {
                                        className: "border-b px-3 py-2",
                                        children: e.lastRedeemedByMasterPlayerId
                                          ? (0, r.jsx)(l.Z, {
                                              type: "button",
                                              variant: "dark",
                                              className:
                                                "text-blue-700 hover:text-blue-900 underline underline-offset-2",
                                              onClick: () =>
                                                u(
                                                  e.lastRedeemedByMasterPlayerId,
                                                ),
                                              children:
                                                e.lastRedeemedByMasterPlayerId,
                                            })
                                          : "—",
                                      }),
                                    ],
                                  },
                                  e.code,
                                )
                              );
                            })
                        : (0, r.jsx)("tr", {
                            children: (0, r.jsx)("td", {
                              className: "border-b px-3 py-3",
                              colSpan: 12,
                              children:
                                'Select "View Details" from a campaign to load its codes.',
                            }),
                          }),
                  }),
                ],
              }),
            }),
            a &&
              (0, r.jsxs)("div", {
                className:
                  "mt-3 flex items-center justify-between text-xs text-gray-500",
                children: [
                  (0, r.jsxs)("span", {
                    children: [
                      n.length,
                      " code",
                      1 === n.length ? "" : "s",
                      " loaded",
                    ],
                  }),
                  x &&
                    (0, r.jsx)(l.Z, {
                      type: "button",
                      variant: "dark",
                      onClick: p,
                      disabled: g || o,
                      loading: g,
                      className:
                        "rounded border border-gray-300 px-3 py-1 text-sm text-gray-700 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60",
                      children: g ? "Loading…" : "Load More",
                    }),
                ],
              }),
          ],
        });
      }
    },
    1189: function (e, t, a) {
      "use strict";
      a.a(e, async function (e, r) {
        try {
          a.d(t, {
            X: function () {
              return CreateCampaignModal;
            },
          });
          var l = a(97458),
            s = a(52983),
            n = a(42897),
            i = a(11750),
            o = a(67368),
            d = a(24148),
            c = e([d]);
          function CreateCampaignModal(e) {
            let { onClose: t, onCreated: a } = e,
              [r, c] = (0, s.useState)(!1),
              [u, m] = (0, s.useState)(null),
              [x, p] = (0, s.useState)(""),
              [g, h] = (0, s.useState)(""),
              [b, f] = (0, s.useState)(null),
              [v, y] = (0, s.useState)(null),
              [j, N] = (0, s.useState)(!0);
            async function handleCreateCampaign() {
              if ((m(null), !x.trim())) {
                m("Enter a campaign name");
                return;
              }
              if (!g.trim()) {
                m("Enter a campaign description");
                return;
              }
              if (null !== b && null !== v && b >= v) {
                m("Start must be before end");
                return;
              }
              c(!0);
              let e = await (0, d.mK)({
                name: x.trim(),
                description: g.trim(),
                startsAt: null != b ? b : void 0,
                endsAt: null != v ? v : void 0,
                isInactive: j,
              });
              if ((c(!1), e.error)) {
                var r;
                m(
                  null !== (r = e.error.errorMessage) && void 0 !== r
                    ? r
                    : "Failed to create campaign",
                );
                return;
              }
              (a(), t());
            }
            return (0, l.jsx)("div", {
              className:
                "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3",
              role: "dialog",
              "aria-modal": "true",
              "aria-labelledby": "create-campaign-title",
              children: (0, l.jsxs)("div", {
                className:
                  "w-full max-w-lg rounded bg-white p-4 text-gray-900 shadow-xl",
                children: [
                  (0, l.jsxs)("div", {
                    className: "mb-3 flex items-center justify-between",
                    children: [
                      (0, l.jsx)("h2", {
                        id: "create-campaign-title",
                        className: "text-lg font-semibold",
                        children: "Create Campaign",
                      }),
                      (0, l.jsx)(n.Z, {
                        type: "button",
                        variant: "dark",
                        onClick: t,
                        className:
                          "rounded px-2 py-1 text-sm text-gray-600 hover:bg-gray-100",
                        "aria-label": "Close create campaign modal",
                        children: "Close",
                      }),
                    ],
                  }),
                  u &&
                    (0, l.jsx)("p", {
                      className: "text-red-500 mb-3 text-sm font-semibold",
                      role: "alert",
                      children: u,
                    }),
                  (0, l.jsxs)("div", {
                    className: "space-y-3",
                    children: [
                      (0, l.jsxs)("div", {
                        children: [
                          (0, l.jsx)("label", {
                            htmlFor: "campaign-name",
                            className: "mb-1 block text-sm font-medium",
                            children: "Name",
                          }),
                          (0, l.jsx)("input", {
                            id: "campaign-name",
                            value: x,
                            onChange: (e) => p(e.target.value),
                            className:
                              "w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none",
                            "aria-invalid": (
                              null == u ? void 0 : u.includes("name")
                            )
                              ? "true"
                              : "false",
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        children: [
                          (0, l.jsx)("label", {
                            htmlFor: "campaign-description",
                            className: "mb-1 block text-sm font-medium",
                            children: "Description",
                          }),
                          (0, l.jsx)("textarea", {
                            id: "campaign-description",
                            value: g,
                            onChange: (e) => h(e.target.value),
                            rows: 3,
                            className:
                              "w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none",
                            "aria-invalid": (
                              null == u ? void 0 : u.includes("description")
                            )
                              ? "true"
                              : "false",
                          }),
                        ],
                      }),
                      (0, l.jsx)(o.Z, {
                        label: "Starts",
                        value: b,
                        onChange: (e) => f(e),
                        helperText:
                          "Optional. Leave empty to start immediately.",
                      }),
                      (0, l.jsx)(o.Z, {
                        label: "Ends",
                        value: v,
                        onChange: (e) => y(e),
                        helperText:
                          "Optional. Leave empty for a campaign that never ends.",
                      }),
                      (0, l.jsx)("div", {
                        children: (0, l.jsx)(i.Z, {
                          value: j,
                          onChange: N,
                          children:
                            "Inactive (campaign is deactivated when checked)",
                        }),
                      }),
                      (0, l.jsxs)("div", {
                        className: "flex justify-end gap-2 pt-2",
                        children: [
                          (0, l.jsx)(n.Z, {
                            type: "button",
                            variant: "dark",
                            onClick: t,
                            className:
                              "rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-100",
                            disabled: r,
                            children: "Cancel",
                          }),
                          (0, l.jsx)(n.Z, {
                            type: "button",
                            variant: "darkBackground",
                            onClick: handleCreateCampaign,
                            disabled: r,
                            loading: r,
                            className:
                              "rounded bg-indigo-600 px-3 py-2 text-sm text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60",
                            children: r ? "Creating…" : "Create Campaign",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            });
          }
          ((d = (c.then ? (await c)() : c)[0]), r());
        } catch (e) {
          r(e);
        }
      });
    },
    65503: function (e, t, a) {
      "use strict";
      a.a(e, async function (e, r) {
        try {
          a.d(t, {
            _: function () {
              return CreateCodesModal;
            },
          });
          var l = a(97458),
            s = a(96061),
            n = a(11286),
            i = a.n(n),
            o = a(52983),
            d = a(42897),
            c = a(24148),
            u = e([s, c]);
          [s, c] = u.then ? (await u)() : u;
          let m = ["ASSIGNED", "UNIQUE", "STATIC"];
          function CreateCodesModal(e) {
            var t, a, r, n;
            let {
                campaigns: u,
                items: x,
                preselectedCampaign: p,
                onClose: g,
                onCreated: h,
              } = e,
              [b, f] = (0, o.useState)("STATIC"),
              [v, y] = (0, o.useState)(
                null !==
                  (r =
                    null !== (a = null == p ? void 0 : p.id) && void 0 !== a
                      ? a
                      : null === (t = u[0]) || void 0 === t
                        ? void 0
                        : t.id) && void 0 !== r
                  ? r
                  : "",
              ),
              [j, N] = (0, o.useState)([]),
              [w, C] = (0, o.useState)(""),
              k = (0, o.useMemo)(
                () =>
                  w
                    .split(/[\n,]/)
                    .map((e) => e.trim())
                    .filter(Boolean),
                [w],
              ),
              [S, I] = (0, o.useState)(10),
              [E, R] = (0, o.useState)(""),
              F = (0, o.useMemo)(
                () =>
                  E.split(/[\n,]/)
                    .map((e) => e.trim().toUpperCase())
                    .filter(Boolean),
                [E],
              ),
              [A, M] = (0, o.useState)(!1),
              [L, D] = (0, o.useState)(null),
              [U, T] = (0, o.useState)(null),
              Z = p || u.find((e) => e.id === v);
            async function handleCreateCodes() {
              D(null);
              let e = j.map((e) => e.trim()).filter(Boolean);
              if (0 === e.length) {
                D("Select at least one item");
                return;
              }
              if (e.length > s.PQ$) {
                D("Select up to ".concat(s.PQ$, " rewards per code"));
                return;
              }
              if (!v) {
                D("Select a campaign");
                return;
              }
              if ("ASSIGNED" === b && 0 === k.length) {
                D("Enter at least one PlayFab ID");
                return;
              }
              if ("UNIQUE" === b && (!S || S < 1)) {
                D("Count must be a positive integer");
                return;
              }
              if ("STATIC" === b && 0 === F.length) {
                D("Enter at least one code");
                return;
              }
              let t =
                  "ASSIGNED" === b ? k.length : "UNIQUE" === b ? S : F.length,
                a = s.ftA[b],
                r =
                  "ASSIGNED" === b
                    ? i()(k, a).map((t) => ({
                        codeKind: "ASSIGNED",
                        userIds: t,
                        itemIds: e,
                        campaignId: v,
                      }))
                    : "UNIQUE" === b
                      ? (function (e, t) {
                          if (t <= 0 || e <= 0) return [];
                          let a = [],
                            r = e;
                          for (; r > 0; ) {
                            let e = Math.min(t, r);
                            (a.push(e), (r -= e));
                          }
                          return a;
                        })(S, a).map((t) => ({
                          codeKind: "UNIQUE",
                          count: t,
                          itemIds: e,
                          campaignId: v,
                        }))
                      : i()(F, a).map((t) => ({
                          codeKind: "STATIC",
                          codes: t,
                          itemIds: e,
                          campaignId: v,
                        }));
              (M(!0), T("Starting code creation…"));
              let l = 0;
              try {
                for (let e = 0; e < r.length; e += 1) {
                  var n, o, d, u;
                  T(
                    "Creating batch "
                      .concat(e + 1, " of ")
                      .concat(r.length, " (")
                      .concat(l.toLocaleString(), "/")
                      .concat(t.toLocaleString(), " codes created)…"),
                  );
                  let a = await (0, c.$F)(r[e]);
                  if (a.error) {
                    D(
                      "Batch "
                        .concat(e + 1, " of ")
                        .concat(r.length, " failed: ")
                        .concat(
                          null !== (d = a.error.errorMessage) && void 0 !== d
                            ? d
                            : "Failed to create codes",
                        ),
                    );
                    return;
                  }
                  let s =
                    null !==
                      (u =
                        null === (o = a.data) || void 0 === o
                          ? void 0
                          : null === (n = o.codes) || void 0 === n
                            ? void 0
                            : n.length) && void 0 !== u
                      ? u
                      : 0;
                  ((l += s),
                    T(
                      "Completed batch "
                        .concat(e + 1, " of ")
                        .concat(r.length, ": ")
                        .concat(l.toLocaleString(), "/")
                        .concat(t.toLocaleString(), " codes created"),
                    ));
                }
                (h(), g());
              } catch (e) {
                D(
                  e instanceof Error
                    ? e.message
                    : "Failed to create codes. Please retry.",
                );
              } finally {
                M(!1);
              }
            }
            return (0, l.jsx)("div", {
              className:
                "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3",
              role: "dialog",
              "aria-modal": "true",
              "aria-labelledby": "create-codes-title",
              children: (0, l.jsxs)("div", {
                className:
                  "max-h-[calc(100vh-4rem)] w-full max-w-2xl overflow-y-auto rounded bg-white p-4 text-gray-900 shadow-xl",
                children: [
                  (0, l.jsxs)("div", {
                    className: "mb-3 flex items-center justify-between",
                    children: [
                      (0, l.jsx)("h2", {
                        id: "create-codes-title",
                        className: "text-lg font-semibold",
                        children: "Create Codes",
                      }),
                      (0, l.jsx)(d.Z, {
                        type: "button",
                        variant: "dark",
                        onClick: g,
                        className:
                          "rounded px-2 py-1 text-sm text-gray-600 hover:bg-gray-100",
                        "aria-label": "Close create codes modal",
                        children: "Close",
                      }),
                    ],
                  }),
                  L &&
                    (0, l.jsx)("p", {
                      className: "text-red-500 mb-3 text-sm font-semibold",
                      role: "alert",
                      children: L,
                    }),
                  U &&
                    (0, l.jsx)("p", {
                      className: "mb-3 text-sm text-indigo-700",
                      role: "status",
                      "aria-live": "polite",
                      children: U,
                    }),
                  (0, l.jsxs)("div", {
                    className: "flex flex-col gap-3",
                    children: [
                      (0, l.jsxs)("div", {
                        children: [
                          (0, l.jsx)("label", {
                            htmlFor: "create-codes-campaign",
                            className: "mb-1 block text-sm font-medium",
                            children: "Campaign",
                          }),
                          Z
                            ? (0, l.jsxs)("div", {
                                className:
                                  "rounded border border-gray-200 bg-gray-50 p-2 text-sm",
                                children: [
                                  (0, l.jsx)("div", {
                                    className: "font-medium",
                                    children:
                                      null !== (n = Z.name) && void 0 !== n
                                        ? n
                                        : "Unnamed Campaign",
                                  }),
                                  (0, l.jsx)("div", {
                                    className:
                                      "font-mono text-xs text-gray-500",
                                    children: Z.id,
                                  }),
                                ],
                              })
                            : (0, l.jsxs)("select", {
                                id: "create-codes-campaign",
                                value: v,
                                onChange: (e) => y(e.target.value),
                                disabled: 0 === u.length,
                                className:
                                  "w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100",
                                "aria-invalid": (
                                  null == L ? void 0 : L.includes("campaign")
                                )
                                  ? "true"
                                  : "false",
                                children: [
                                  (0, l.jsx)("option", {
                                    value: "",
                                    disabled: !0,
                                    children: "Select a campaign…",
                                  }),
                                  u.map((e) =>
                                    (0, l.jsxs)(
                                      "option",
                                      {
                                        value: e.id,
                                        children: [e.name, " — ", e.id],
                                      },
                                      e.id,
                                    ),
                                  ),
                                ],
                              }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        children: [
                          (0, l.jsx)("label", {
                            htmlFor: "create-codes-type",
                            className: "mb-1 block text-sm font-medium",
                            children: "Code Type",
                          }),
                          (0, l.jsxs)("select", {
                            id: "create-codes-type",
                            value: b,
                            onChange: (e) => {
                              let t = e.target.value;
                              m.some((e) => e === t) &&
                                (f(t), C(""), R(""), I(10));
                            },
                            className:
                              "w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none",
                            children: [
                              (0, l.jsx)("option", {
                                value: "ASSIGNED",
                                children: "Assigned",
                              }),
                              (0, l.jsx)("option", {
                                value: "UNIQUE",
                                children: "Unique",
                              }),
                              (0, l.jsx)("option", {
                                value: "STATIC",
                                children: "Static",
                              }),
                            ],
                          }),
                        ],
                      }),
                      "ASSIGNED" === b &&
                        (0, l.jsxs)("div", {
                          children: [
                            (0, l.jsx)("label", {
                              htmlFor: "create-codes-user-ids",
                              className: "mb-1 block text-sm font-medium",
                              children: "PlayFab User IDs",
                            }),
                            (0, l.jsx)("textarea", {
                              id: "create-codes-user-ids",
                              value: w,
                              onChange: (e) => C(e.target.value),
                              rows: 4,
                              placeholder: "One per line or comma-separated",
                              className:
                                "w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none",
                              "aria-invalid": (
                                null == L ? void 0 : L.includes("PlayFab ID")
                              )
                                ? "true"
                                : "false",
                            }),
                            (0, l.jsxs)("p", {
                              className: "mt-1 text-xs text-gray-500",
                              children: [
                                "Parsed ",
                                k.length.toLocaleString(),
                                " user ID",
                                1 === k.length ? "" : "s",
                                " (sending in batches of up to ",
                                s.ftA[b].toLocaleString(),
                                ")",
                              ],
                            }),
                          ],
                        }),
                      "UNIQUE" === b &&
                        (0, l.jsxs)("div", {
                          children: [
                            (0, l.jsx)("label", {
                              htmlFor: "create-codes-count",
                              className: "mb-1 block text-sm font-medium",
                              children: "Count",
                            }),
                            (0, l.jsx)("input", {
                              id: "create-codes-count",
                              type: "number",
                              min: 1,
                              value: Number.isNaN(S) ? "" : S,
                              onChange: (e) => I(parseInt(e.target.value, 10)),
                              className:
                                "w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none",
                              "aria-invalid": (
                                null == L ? void 0 : L.includes("Count")
                              )
                                ? "true"
                                : "false",
                            }),
                            (0, l.jsxs)("p", {
                              className: "mt-1 text-xs text-gray-500",
                              children: [
                                "Requests are sent in batches of up to",
                                " ",
                                s.ftA[b].toLocaleString(),
                                ". Single-use codes lock after redemption (enforced via lastRedeemedAt).",
                              ],
                            }),
                          ],
                        }),
                      "STATIC" === b &&
                        (0, l.jsxs)("div", {
                          children: [
                            (0, l.jsx)("label", {
                              htmlFor: "create-codes-static",
                              className: "mb-1 block text-sm font-medium",
                              children: "Codes",
                            }),
                            (0, l.jsx)("textarea", {
                              id: "create-codes-static",
                              value: E,
                              onChange: (e) => R(e.target.value.toUpperCase()),
                              rows: 4,
                              placeholder: "One per line or comma-separated",
                              className:
                                "w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none",
                              "aria-invalid": (
                                null == L ? void 0 : L.includes("code")
                              )
                                ? "true"
                                : "false",
                            }),
                            (0, l.jsxs)("p", {
                              className: "mt-1 text-xs text-gray-500",
                              children: [
                                "Parsed ",
                                F.length.toLocaleString(),
                                " code",
                                1 === F.length ? "" : "s",
                                " (sending in batches of up to ",
                                s.ftA[b].toLocaleString(),
                                ")",
                              ],
                            }),
                          ],
                        }),
                      (0, l.jsxs)("div", {
                        children: [
                          (0, l.jsx)("label", {
                            htmlFor: "create-codes-item",
                            className: "mb-1 block text-sm font-medium",
                            children: "Item(s)",
                          }),
                          (0, l.jsxs)("select", {
                            id: "create-codes-item",
                            value: j,
                            multiple: !0,
                            onChange: (e) =>
                              N(
                                Array.from(e.currentTarget.selectedOptions).map(
                                  (e) => e.value,
                                ),
                              ),
                            className:
                              "w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none",
                            "aria-invalid": (
                              null == L ? void 0 : L.includes("item")
                            )
                              ? "true"
                              : "false",
                            children: [
                              (0, l.jsx)("option", {
                                value: "",
                                disabled: !0,
                                children: "Select an item…",
                              }),
                              x.map((e) => {
                                let t = [
                                  e.title,
                                  e.friendlyId
                                    ? "— ".concat(e.friendlyId)
                                    : null,
                                  "— ".concat(e.id),
                                ].filter(Boolean);
                                return (0, l.jsx)(
                                  "option",
                                  { value: e.id, children: t.join(" ") },
                                  e.id,
                                );
                              }),
                            ],
                          }),
                          (0, l.jsx)("p", {
                            className: "mt-1 text-xs text-gray-500",
                            children:
                              0 === j.length
                                ? "Select one or more rewards (Cmd/Ctrl + click to multi-select). Limit ".concat(
                                    s.PQ$,
                                    ".",
                                  )
                                : ""
                                    .concat(j.length, " reward")
                                    .concat(
                                      1 === j.length ? "" : "s",
                                      " selected (max ",
                                    )
                                    .concat(s.PQ$, ")"),
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className: "flex justify-end gap-2 pt-2",
                        children: [
                          (0, l.jsx)(d.Z, {
                            type: "button",
                            variant: "dark",
                            onClick: g,
                            className:
                              "rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-100",
                            disabled: A,
                            children: "Cancel",
                          }),
                          (0, l.jsx)(d.Z, {
                            type: "button",
                            variant: "darkBackground",
                            onClick: handleCreateCodes,
                            disabled: A,
                            loading: A,
                            className:
                              "rounded border border-indigo-600 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed disabled:border-indigo-300 disabled:bg-indigo-100 disabled:text-indigo-700 disabled:opacity-100 disabled:shadow-none",
                            children: A ? "Creating…" : "Create Codes",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            });
          }
          r();
        } catch (e) {
          r(e);
        }
      });
    },
    69918: function (e, t, a) {
      "use strict";
      a.a(e, async function (e, r) {
        try {
          a.d(t, {
            W: function () {
              return CreateExternalCodeRewardModal;
            },
          });
          var l = a(97458),
            s = a(96061),
            n = a(52983),
            i = a(42897),
            o = a(24148),
            d = e([s, o]);
          function CreateExternalCodeRewardModal(e) {
            let { items: t, onClose: a, onCreated: r } = e,
              [d, c] = (0, n.useState)(null),
              [u, m] = (0, n.useState)(!1),
              [x, p] = (0, n.useState)({
                playFabItemId: "",
                redemptionInstructions: "",
                lowStockThreshold: "",
                internalNotes: "",
                provider: "",
                providerSku: "",
              });
            async function handleCreateReward() {
              var e, t;
              c(null);
              let l = x.playFabItemId.trim();
              if (!l) {
                c("Select a PlayFab item.");
                return;
              }
              let s = x.redemptionInstructions.trim();
              if (!s) {
                c("Enter redemption instructions.");
                return;
              }
              let n = x.lowStockThreshold.trim(),
                i = Number.parseInt(n, 10);
              if ("" === n || !Number.isInteger(i) || i < 0) {
                c("Low-stock threshold must be a non-negative integer.");
                return;
              }
              let d = {
                playFabItemId: l,
                redemptionInstructions: s,
                lowStockThreshold: i,
                internalNotes: x.internalNotes.trim() || void 0,
                provider: x.provider.trim() || void 0,
                providerSku: x.providerSku.trim() || void 0,
              };
              m(!0);
              let u = await (0, o.QD)(d);
              if (u.error) {
                (c(
                  null !== (t = u.error.errorMessage) && void 0 !== t
                    ? t
                    : "Failed to create external code reward.",
                ),
                  m(!1));
                return;
              }
              let p = null === (e = u.data) || void 0 === e ? void 0 : e.reward;
              if (p) {
                (r(p), a(), m(!1));
                return;
              }
              (c("Failed to create external code reward."), m(!1));
            }
            return (0, l.jsx)("div", {
              className:
                "fixed inset-0 z-40 flex items-center justify-center bg-black/50 p-4",
              children: (0, l.jsxs)("div", {
                className:
                  "max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white p-6 text-gray-900 shadow-xl",
                children: [
                  (0, l.jsxs)("div", {
                    className: "flex items-start justify-between",
                    children: [
                      (0, l.jsxs)("div", {
                        children: [
                          (0, l.jsx)("h2", {
                            className: "text-xl font-semibold",
                            children: "Create External Code Reward",
                          }),
                          (0, l.jsx)("p", {
                            className: "text-sm text-gray-600",
                            children:
                              "Define metadata for a new external code pool before uploading codes.",
                          }),
                        ],
                      }),
                      (0, l.jsx)(i.Z, {
                        type: "button",
                        variant: "dark",
                        className:
                          "text-gray-500 transition hover:text-gray-700",
                        onClick: a,
                        children: "\xd7",
                      }),
                    ],
                  }),
                  d &&
                    (0, l.jsx)("p", {
                      className: "text-red-500 mt-3 text-sm font-semibold",
                      children: d,
                    }),
                  (0, l.jsxs)("div", {
                    className: "mt-4 flex flex-col gap-4",
                    children: [
                      (0, l.jsxs)("div", {
                        children: [
                          (0, l.jsx)("label", {
                            className:
                              "mb-1 block text-sm font-medium text-gray-700",
                            children: "PlayFab Item",
                          }),
                          (0, l.jsxs)("select", {
                            value: x.playFabItemId,
                            onChange: (e) => {
                              (c(null),
                                p((t) => ({
                                  ...t,
                                  playFabItemId: e.target.value,
                                })));
                            },
                            className:
                              "w-full rounded border border-gray-300 p-2 text-sm focus:border-indigo-500 focus:outline-none",
                            children: [
                              (0, l.jsx)("option", {
                                value: "",
                                disabled: !0,
                                children: "Select an item…",
                              }),
                              t
                                .filter(
                                  (e) => e.type === s.u2m.EXTERNAL_CODE_REWARD,
                                )
                                .map((e) =>
                                  (0, l.jsxs)(
                                    "option",
                                    {
                                      value: e.id,
                                      children: [
                                        e.title,
                                        e.friendlyId
                                          ? " — ".concat(e.friendlyId)
                                          : "",
                                        " — ",
                                        e.id,
                                      ],
                                    },
                                    e.id,
                                  ),
                                ),
                            ],
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        children: [
                          (0, l.jsx)("label", {
                            className:
                              "mb-1 block text-sm font-medium text-gray-700",
                            children: "Redemption Instructions",
                          }),
                          (0, l.jsx)("textarea", {
                            value: x.redemptionInstructions,
                            onChange: (e) => {
                              (c(null),
                                p((t) => ({
                                  ...t,
                                  redemptionInstructions: e.target.value,
                                })));
                            },
                            rows: 4,
                            className:
                              "w-full rounded border border-gray-300 p-2 text-sm focus:border-indigo-500 focus:outline-none",
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className: "grid gap-4 sm:grid-cols-3",
                        children: [
                          (0, l.jsxs)("div", {
                            children: [
                              (0, l.jsx)("label", {
                                className:
                                  "mb-1 block text-sm font-medium text-gray-700",
                                children: "Low-stock Threshold",
                              }),
                              (0, l.jsx)("input", {
                                type: "number",
                                min: 0,
                                value: x.lowStockThreshold,
                                onChange: (e) => {
                                  (c(null),
                                    p((t) => ({
                                      ...t,
                                      lowStockThreshold: e.target.value,
                                    })));
                                },
                                className:
                                  "w-full rounded border border-gray-300 p-2 text-sm focus:border-indigo-500 focus:outline-none",
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            children: [
                              (0, l.jsx)("label", {
                                className:
                                  "mb-1 block text-sm font-medium text-gray-700",
                                children: "Provider (optional)",
                              }),
                              (0, l.jsx)("input", {
                                type: "text",
                                value: x.provider,
                                onChange: (e) => {
                                  (c(null),
                                    p((t) => ({
                                      ...t,
                                      provider: e.target.value,
                                    })));
                                },
                                className:
                                  "w-full rounded border border-gray-300 p-2 text-sm focus:border-indigo-500 focus:outline-none",
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            children: [
                              (0, l.jsx)("label", {
                                className:
                                  "mb-1 block text-sm font-medium text-gray-700",
                                children: "Provider SKU (optional)",
                              }),
                              (0, l.jsx)("input", {
                                type: "text",
                                value: x.providerSku,
                                onChange: (e) => {
                                  (c(null),
                                    p((t) => ({
                                      ...t,
                                      providerSku: e.target.value,
                                    })));
                                },
                                className:
                                  "w-full rounded border border-gray-300 p-2 text-sm focus:border-indigo-500 focus:outline-none",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        children: [
                          (0, l.jsx)("label", {
                            className:
                              "mb-1 block text-sm font-medium text-gray-700",
                            children: "Internal Notes (optional)",
                          }),
                          (0, l.jsx)("textarea", {
                            value: x.internalNotes,
                            onChange: (e) => {
                              (c(null),
                                p((t) => ({
                                  ...t,
                                  internalNotes: e.target.value,
                                })));
                            },
                            rows: 3,
                            className:
                              "w-full rounded border border-gray-300 p-2 text-sm focus:border-indigo-500 focus:outline-none",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: "mt-6 flex justify-end gap-2",
                    children: [
                      (0, l.jsx)(i.Z, {
                        type: "button",
                        variant: "dark",
                        onClick: a,
                        className:
                          "rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-100",
                        disabled: u,
                        children: "Cancel",
                      }),
                      (0, l.jsx)(i.Z, {
                        type: "button",
                        variant: "darkBackground",
                        onClick: () => void handleCreateReward(),
                        className:
                          "rounded bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-indigo-300",
                        disabled: u,
                        loading: u,
                        children: u ? "Creating…" : "Create Reward",
                      }),
                    ],
                  }),
                ],
              }),
            });
          }
          (([s, o] = d.then ? (await d)() : d), r());
        } catch (e) {
          r(e);
        }
      });
    },
    67368: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return DateTimePicker;
        },
      });
      var r = a(97458),
        l = a(52983),
        s = a(42897);
      function DateTimePicker(e) {
        let {
            label: t,
            value: a,
            onChange: n,
            helperText: i,
            required: o = !1,
            disabled: d = !1,
          } = e,
          c = (0, l.useId)();
        return (0, r.jsxs)("div", {
          children: [
            (0, r.jsx)("label", {
              className: "mb-1 block text-sm font-medium",
              htmlFor: c,
              children: t,
            }),
            (0, r.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [
                (0, r.jsx)("input", {
                  id: c,
                  type: "datetime-local",
                  className:
                    "w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100",
                  value: (function (e) {
                    if (!e) return "";
                    let t = new Date(e),
                      a = t.getTimezoneOffset(),
                      r = new Date(t.getTime() - 6e4 * a);
                    return r.toISOString().slice(0, 16);
                  })(a),
                  onChange: (e) =>
                    n(
                      (function (e) {
                        if (!e) return null;
                        let t = new Date(e);
                        return Number.isNaN(t.getTime()) ? null : t.getTime();
                      })(e.target.value),
                    ),
                  required: o,
                  disabled: d,
                }),
                null === a || d
                  ? null
                  : (0, r.jsx)(s.Z, {
                      type: "button",
                      variant: "dark",
                      className:
                        "rounded border border-gray-300 px-2 py-1 text-xs text-gray-700 hover:bg-gray-100",
                      onClick: () => n(null),
                      children: "Clear",
                    }),
              ],
            }),
            i
              ? (0, r.jsx)("p", {
                  className: "mt-1 text-xs text-gray-500",
                  children: i,
                })
              : null,
          ],
        });
      }
    },
    61130: function (e, t, a) {
      "use strict";
      a.a(e, async function (e, r) {
        try {
          a.d(t, {
            E: function () {
              return DeleteCampaignModal;
            },
          });
          var l = a(97458),
            s = a(42897),
            n = a(24148),
            i = e([n]);
          function DeleteCampaignModal(e) {
            var t, a, r;
            let {
                campaign: i,
                onClose: o,
                onDeleted: d,
                onActionStart: c,
                onActionResolve: u,
              } = e,
              m =
                (null !== (t = i.staticCodeCount) && void 0 !== t ? t : 0) +
                (null !== (a = i.uniqueCodeCount) && void 0 !== a ? a : 0) +
                (null !== (r = i.assignedCodeCount) && void 0 !== r ? r : 0);
            async function handleDeleteCampaign() {
              var e, t;
              let a =
                null !==
                  (e =
                    null == c
                      ? void 0
                      : c({
                          action: "delete",
                          campaignId: i.id,
                          campaignName: i.name,
                          message: 'Deleting "'.concat(i.name, '"…'),
                        })) && void 0 !== e
                  ? e
                  : "";
              o();
              let r = await (0, n.bO)({ id: i.id });
              if (r.error) {
                let e =
                  null !== (t = r.error.errorMessage) && void 0 !== t
                    ? t
                    : "Failed to delete campaign";
                a && (null == u || u(a, "error", e));
                return;
              }
              (a &&
                (null == u ||
                  u(a, "success", 'Deleted "'.concat(i.name, '".'))),
                d());
            }
            return (0, l.jsx)("div", {
              className:
                "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3",
              role: "dialog",
              "aria-modal": "true",
              "aria-labelledby": "delete-campaign-title",
              children: (0, l.jsxs)("div", {
                className:
                  "w-full max-w-lg rounded bg-white p-4 text-gray-900 shadow-xl",
                children: [
                  (0, l.jsxs)("div", {
                    className: "mb-3",
                    children: [
                      (0, l.jsx)("h2", {
                        id: "delete-campaign-title",
                        className: "text-lg font-semibold",
                        children: "Delete Campaign",
                      }),
                      (0, l.jsxs)("p", {
                        className: "mt-1 text-sm text-gray-700",
                        children: [
                          "Deleting ",
                          (0, l.jsx)("span", {
                            className: "font-semibold",
                            children: i.name,
                          }),
                          " will remove ",
                          m,
                          " code",
                          1 === m ? "" : "s",
                          ". This cannot be undone.",
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: "flex justify-end gap-2",
                    children: [
                      (0, l.jsx)(s.Z, {
                        type: "button",
                        variant: "dark",
                        onClick: o,
                        className:
                          "rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-100",
                        "aria-label": "Cancel delete campaign",
                        children: "Cancel",
                      }),
                      (0, l.jsx)(s.Z, {
                        type: "button",
                        variant: "error",
                        onClick: handleDeleteCampaign,
                        className:
                          "border-red-600 bg-red-600 hover:bg-red-700 focus-visible:outline-red-600 disabled:bg-red-100 disabled:text-red-700 rounded border px-3 py-2 text-sm font-semibold shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:border-red-500 disabled:opacity-100 disabled:shadow-none",
                        children: "Delete",
                      }),
                    ],
                  }),
                ],
              }),
            });
          }
          ((n = (i.then ? (await i)() : i)[0]), r());
        } catch (e) {
          r(e);
        }
      });
    },
    80808: function (e, t, a) {
      "use strict";
      a.a(e, async function (e, r) {
        try {
          a.d(t, {
            u: function () {
              return EditCampaignModal;
            },
          });
          var l = a(97458),
            s = a(52983),
            n = a(42897),
            i = a(11750),
            o = a(67368),
            d = a(24148),
            c = e([d]);
          function EditCampaignModal(e) {
            var t, a, r;
            let { campaign: c, onClose: u, onUpdated: m } = e,
              [x, p] = (0, s.useState)(!1),
              [g, h] = (0, s.useState)(null),
              [b, f] = (0, s.useState)(c.name),
              [v, y] = (0, s.useState)(
                null !== (t = c.description) && void 0 !== t ? t : "",
              ),
              [j, N] = (0, s.useState)(
                null !== (a = c.startsAt) && void 0 !== a ? a : null,
              ),
              [w, C] = (0, s.useState)(
                null !== (r = c.endsAt) && void 0 !== r ? r : null,
              ),
              [k, S] = (0, s.useState)(c.isInactive);
            async function handleUpdateCampaign() {
              var e, t, a;
              h(null);
              let r = b.trim(),
                l = v.trim(),
                s =
                  (null !== (e = c.startsAt) && void 0 !== e ? e : null) !==
                  (null != j ? j : null),
                n =
                  (null !== (t = c.endsAt) && void 0 !== t ? t : null) !==
                  (null != w ? w : null),
                i = r.length > 0 && r !== c.name,
                o = l !== c.description,
                x = k !== c.isInactive;
              if (null !== j && null !== w && j >= w) {
                h("Start must be before end");
                return;
              }
              if (!i && !o && !s && !n && !x) {
                h("Make a change before saving");
                return;
              }
              p(!0);
              let g = await (0, d.hm)({
                id: c.id,
                name: i ? r : void 0,
                description: o ? l : void 0,
                startsAt: s ? j : void 0,
                endsAt: n ? w : void 0,
                isInactive: x ? k : void 0,
              });
              if ((p(!1), g.error)) {
                h(
                  null !== (a = g.error.errorMessage) && void 0 !== a
                    ? a
                    : "Failed to update campaign",
                );
                return;
              }
              (m(), u());
            }
            return (0, l.jsx)("div", {
              className:
                "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3",
              role: "dialog",
              "aria-modal": "true",
              "aria-labelledby": "edit-campaign-title",
              children: (0, l.jsxs)("div", {
                className:
                  "w-full max-w-lg rounded bg-white p-4 text-gray-900 shadow-xl",
                children: [
                  (0, l.jsxs)("div", {
                    className: "mb-3 flex items-center justify-between",
                    children: [
                      (0, l.jsx)("h2", {
                        id: "edit-campaign-title",
                        className: "text-lg font-semibold",
                        children: "Edit Campaign",
                      }),
                      (0, l.jsx)(n.Z, {
                        type: "button",
                        variant: "dark",
                        onClick: u,
                        className:
                          "rounded px-2 py-1 text-sm text-gray-600 hover:bg-gray-100",
                        "aria-label": "Close edit campaign modal",
                        children: "Close",
                      }),
                    ],
                  }),
                  g &&
                    (0, l.jsx)("p", {
                      className: "text-red-500 mb-3 text-sm font-semibold",
                      role: "alert",
                      children: g,
                    }),
                  (0, l.jsxs)("div", {
                    className: "space-y-3",
                    children: [
                      (0, l.jsxs)("div", {
                        children: [
                          (0, l.jsx)("label", {
                            htmlFor: "edit-campaign-name",
                            className: "mb-1 block text-sm font-medium",
                            children: "Name",
                          }),
                          (0, l.jsx)("input", {
                            id: "edit-campaign-name",
                            value: b,
                            onChange: (e) => f(e.target.value),
                            className:
                              "w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none",
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        children: [
                          (0, l.jsx)("label", {
                            htmlFor: "edit-campaign-description",
                            className: "mb-1 block text-sm font-medium",
                            children: "Description",
                          }),
                          (0, l.jsx)("textarea", {
                            id: "edit-campaign-description",
                            value: v,
                            onChange: (e) => y(e.target.value),
                            rows: 3,
                            className:
                              "w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none",
                          }),
                        ],
                      }),
                      (0, l.jsx)(o.Z, {
                        label: "Starts",
                        value: j,
                        onChange: (e) => N(e),
                        helperText:
                          "Optional. Leave empty to start immediately.",
                      }),
                      (0, l.jsx)(o.Z, {
                        label: "Ends",
                        value: w,
                        onChange: (e) => C(e),
                        helperText:
                          "Optional. Leave empty for a campaign that never ends.",
                      }),
                      (0, l.jsx)("div", {
                        children: (0, l.jsx)(i.Z, {
                          value: k,
                          onChange: S,
                          children:
                            "Inactive (campaign is deactivated when checked)",
                        }),
                      }),
                      (0, l.jsxs)("div", {
                        className: "flex justify-end gap-2 pt-2",
                        children: [
                          (0, l.jsx)(n.Z, {
                            type: "button",
                            variant: "dark",
                            onClick: u,
                            className:
                              "rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-100",
                            disabled: x,
                            children: "Cancel",
                          }),
                          (0, l.jsx)(n.Z, {
                            type: "button",
                            variant: "darkBackground",
                            onClick: handleUpdateCampaign,
                            disabled: x,
                            loading: x,
                            className:
                              "rounded bg-indigo-600 px-3 py-2 text-sm text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60",
                            children: x ? "Saving…" : "Save Changes",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            });
          }
          ((d = (c.then ? (await c)() : c)[0]), r());
        } catch (e) {
          r(e);
        }
      });
    },
    2505: function (e, t, a) {
      "use strict";
      a.a(e, async function (e, r) {
        try {
          a.d(t, {
            k: function () {
              return ExternalCodeRewardsSection;
            },
          });
          var l = a(97458),
            s = a(52983),
            n = a(42897),
            i = a(11750),
            o = a(24148),
            d = a(10296),
            c = a(69918),
            u = a(53081),
            m = a(37151),
            x = e([o, c, u, m]);
          function ExternalCodeRewardsSection(e) {
            let { initialRewards: t, items: a } = e,
              [r, x] = (0, s.useState)((0, d.p)(t)),
              [p, g] = (0, s.useState)(!1),
              [h, b] = (0, s.useState)(!1),
              [f, v] = (0, s.useState)(null),
              [y, j] = (0, s.useState)(null),
              [N, w] = (0, s.useState)(null),
              [C, k] = (0, s.useState)(!1),
              [S, I] = (0, s.useState)(null),
              [E, R] = (0, s.useState)(null),
              F = (0, s.useRef)(!1);
            (0, s.useEffect)(() => {
              x((0, d.p)(t));
            }, [t]);
            let A = (0, s.useMemo)(() => {
                let e = new Map();
                for (let t of a) e.set(t.id, t);
                return e;
              }, [a]),
              M = (0, s.useCallback)(async (e) => {
                var t, a, r;
                (b(!0), v(null));
                let l = await (0, o.xv)(e ? { lowStockOnly: !0 } : {});
                if (l.error) {
                  (v(
                    null !== (a = l.error.errorMessage) && void 0 !== a
                      ? a
                      : "Failed to load external code rewards.",
                  ),
                    b(!1));
                  return;
                }
                let s =
                  null !==
                    (r =
                      null === (t = l.data) || void 0 === t
                        ? void 0
                        : t.rewards) && void 0 !== r
                    ? r
                    : [];
                (x((0, d.p)(s)), b(!1));
              }, []);
            (0, s.useEffect)(() => {
              if (!F.current) {
                ((F.current = !0), p && M(!0));
                return;
              }
              M(p);
            }, [M, p]);
            let L = (0, s.useCallback)((e) => {
                (x((t) => {
                  let a = t.some((t) => t.playFabItemId === e.playFabItemId),
                    r = a
                      ? t.map((t) =>
                          t.playFabItemId === e.playFabItemId ? e : t,
                        )
                      : [e, ...t];
                  return (0, d.p)(r);
                }),
                  I((t) => {
                    var a, r, l;
                    return t && t.reward.playFabItemId === e.playFabItemId
                      ? {
                          reward: e,
                          redemptionInstructions: e.redemptionInstructions,
                          lowStockThreshold: String(e.lowStockThreshold),
                          internalNotes:
                            null !== (a = e.internalNotes) && void 0 !== a
                              ? a
                              : "",
                          provider:
                            null !== (r = e.provider) && void 0 !== r ? r : "",
                          providerSku:
                            null !== (l = e.providerSku) && void 0 !== l
                              ? l
                              : "",
                        }
                      : t;
                  }));
              }, []),
              D = (0, s.useMemo)(() => new Intl.NumberFormat(), []);
            function closeManageReward() {
              I(null);
            }
            let U = (0, s.useCallback)(async (e) => {
              (j(null), w(e));
              try {
                let a = await (0, o.CO)({ playFabItemId: e });
                if (a.error) {
                  var t;
                  j(
                    null !== (t = a.error.errorMessage) && void 0 !== t
                      ? t
                      : "Failed to export external codes.",
                  );
                }
              } finally {
                w(null);
              }
            }, []);
            return (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsxs)("div", {
                  className:
                    "mx-auto mb-4 max-w-7xl rounded-lg bg-white p-4 text-gray-900 shadow",
                  children: [
                    (0, l.jsxs)("div", {
                      className:
                        "mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",
                      children: [
                        (0, l.jsxs)("div", {
                          children: [
                            (0, l.jsx)("h1", {
                              className: "text-2xl font-bold",
                              children: "External Code Rewards",
                            }),
                            (0, l.jsx)("p", {
                              className: "text-sm text-gray-700",
                              children:
                                "Manage external code pools linked to PlayFab items.",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className:
                            "flex flex-col items-stretch gap-2 sm:flex-row sm:items-center",
                          children: [
                            (0, l.jsx)("label", {
                              className:
                                "flex items-center gap-2 text-sm text-gray-700",
                              children: (0, l.jsx)(i.Z, {
                                value: p,
                                onChange: g,
                                children: "Low stock only",
                              }),
                            }),
                            (0, l.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, l.jsx)(n.Z, {
                                  type: "button",
                                  variant: "dark",
                                  onClick: () => {
                                    M(p);
                                  },
                                  className:
                                    "rounded border border-gray-300 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100",
                                  disabled: h,
                                  loading: h,
                                  children: h ? "Refreshing…" : "Refresh",
                                }),
                                (0, l.jsx)(n.Z, {
                                  type: "button",
                                  variant: "darkBackground",
                                  onClick: () => {
                                    k(!0);
                                  },
                                  className:
                                    "rounded bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-700",
                                  children: "Create Reward",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    f &&
                      (0, l.jsx)("p", {
                        className: "text-red-500 mb-2 text-sm font-semibold",
                        children: f,
                      }),
                    (0, l.jsx)("div", {
                      className: "overflow-x-auto",
                      children: (0, l.jsxs)("table", {
                        className:
                          "min-w-full border border-gray-200 text-left text-sm",
                        children: [
                          (0, l.jsx)("thead", {
                            className: "bg-gray-50 text-gray-700",
                            children: (0, l.jsxs)("tr", {
                              children: [
                                (0, l.jsx)("th", {
                                  className: "border-b px-3 py-2",
                                  children: "PlayFab Item",
                                }),
                                (0, l.jsx)("th", {
                                  className: "border-b px-3 py-2",
                                  children: "Provider",
                                }),
                                (0, l.jsx)("th", {
                                  className: "border-b px-3 py-2",
                                  children: "Available / Total",
                                }),
                                (0, l.jsx)("th", {
                                  className: "border-b px-3 py-2",
                                  children: "Assigned",
                                }),
                                (0, l.jsx)("th", {
                                  className: "border-b px-3 py-2",
                                  children: "Delivered",
                                }),
                                (0, l.jsx)("th", {
                                  className: "border-b px-3 py-2",
                                  children: "Low Stock Threshold",
                                }),
                                (0, l.jsx)("th", {
                                  className: "border-b px-3 py-2",
                                  children: "Status",
                                }),
                                (0, l.jsx)("th", {
                                  className: "border-b px-3 py-2",
                                  children: "Last Upload",
                                }),
                                (0, l.jsx)("th", {
                                  className: "border-b px-3 py-2",
                                  children: "Updated",
                                }),
                                (0, l.jsx)("th", {
                                  className: "border-b px-3 py-2",
                                  children: "Actions",
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("tbody", {
                            children: h
                              ? (0, l.jsx)("tr", {
                                  children: (0, l.jsx)("td", {
                                    className: "px-3 py-3",
                                    colSpan: 10,
                                    children: "Loading external code rewards…",
                                  }),
                                })
                              : 0 === r.length
                                ? (0, l.jsx)("tr", {
                                    children: (0, l.jsx)("td", {
                                      className: "px-3 py-3",
                                      colSpan: 10,
                                      children:
                                        "No external code rewards found. Create one to begin uploading codes.",
                                    }),
                                  })
                                : r.map((e) => {
                                    let t = A.get(e.playFabItemId),
                                      a = t
                                        ? ""
                                            .concat(t.title)
                                            .concat(
                                              t.friendlyId
                                                ? " — ".concat(t.friendlyId)
                                                : "",
                                            )
                                        : e.playFabItemId;
                                    return (0, l.jsxs)(
                                      "tr",
                                      {
                                        className:
                                          "odd:bg-white even:bg-gray-50",
                                        children: [
                                          (0, l.jsx)("td", {
                                            className: "border-b px-3 py-2",
                                            children: (0, l.jsxs)("div", {
                                              className: "flex flex-col",
                                              children: [
                                                (0, l.jsx)("span", {
                                                  children: a,
                                                }),
                                                (0, l.jsx)("span", {
                                                  className:
                                                    "font-mono text-xs text-gray-500",
                                                  children: e.playFabItemId,
                                                }),
                                              ],
                                            }),
                                          }),
                                          (0, l.jsx)("td", {
                                            className: "border-b px-3 py-2",
                                            children: e.provider
                                              ? (0, l.jsxs)("div", {
                                                  className:
                                                    "flex flex-col gap-0.5",
                                                  children: [
                                                    (0, l.jsx)("span", {
                                                      children: e.provider,
                                                    }),
                                                    e.providerSku
                                                      ? (0, l.jsxs)("span", {
                                                          className:
                                                            "text-xs text-gray-500",
                                                          children: [
                                                            "SKU: ",
                                                            e.providerSku,
                                                          ],
                                                        })
                                                      : null,
                                                  ],
                                                })
                                              : "—",
                                          }),
                                          (0, l.jsxs)("td", {
                                            className: "border-b px-3 py-2",
                                            children: [
                                              D.format(e.availableCount),
                                              " /",
                                              " ",
                                              D.format(e.totalCount),
                                            ],
                                          }),
                                          (0, l.jsx)("td", {
                                            className: "border-b px-3 py-2",
                                            children: D.format(e.assignedCount),
                                          }),
                                          (0, l.jsx)("td", {
                                            className: "border-b px-3 py-2",
                                            children: D.format(
                                              e.deliveredCount,
                                            ),
                                          }),
                                          (0, l.jsx)("td", {
                                            className: "border-b px-3 py-2",
                                            children: D.format(
                                              e.lowStockThreshold,
                                            ),
                                          }),
                                          (0, l.jsx)("td", {
                                            className: "border-b px-3 py-2",
                                            children: e.isLowStock
                                              ? (0, l.jsx)("span", {
                                                  className:
                                                    "bg-red-100 text-red-700 inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold uppercase tracking-wide",
                                                  children: "Low",
                                                })
                                              : (0, l.jsx)("span", {
                                                  className:
                                                    "bg-green-100 text-green-700 inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold uppercase tracking-wide",
                                                  children: "Healthy",
                                                }),
                                          }),
                                          (0, l.jsx)("td", {
                                            className: "border-b px-3 py-2",
                                            children: e.lastUploadAt
                                              ? new Date(
                                                  e.lastUploadAt,
                                                ).toLocaleString()
                                              : "—",
                                          }),
                                          (0, l.jsx)("td", {
                                            className: "border-b px-3 py-2",
                                            children: new Date(
                                              e.updatedAt,
                                            ).toLocaleString(),
                                          }),
                                          (0, l.jsx)("td", {
                                            className: "border-b px-3 py-2",
                                            children: (0, l.jsxs)("div", {
                                              className:
                                                "flex flex-col gap-2 sm:flex-row",
                                              children: [
                                                (0, l.jsx)(n.Z, {
                                                  type: "button",
                                                  variant: "dark",
                                                  onClick: () => {
                                                    var t, a, r;
                                                    I({
                                                      reward: e,
                                                      redemptionInstructions:
                                                        e.redemptionInstructions,
                                                      lowStockThreshold: String(
                                                        e.lowStockThreshold,
                                                      ),
                                                      internalNotes:
                                                        null !==
                                                          (t =
                                                            e.internalNotes) &&
                                                        void 0 !== t
                                                          ? t
                                                          : "",
                                                      provider:
                                                        null !==
                                                          (a = e.provider) &&
                                                        void 0 !== a
                                                          ? a
                                                          : "",
                                                      providerSku:
                                                        null !==
                                                          (r = e.providerSku) &&
                                                        void 0 !== r
                                                          ? r
                                                          : "",
                                                    });
                                                  },
                                                  className:
                                                    "rounded border border-gray-300 px-3 py-1 text-xs text-gray-700 hover:bg-gray-100",
                                                  children: "Manage",
                                                }),
                                                (0, l.jsx)(n.Z, {
                                                  type: "button",
                                                  variant: "dark",
                                                  onClick: () => {
                                                    R(e);
                                                  },
                                                  className:
                                                    "rounded border border-indigo-600 px-3 py-1 text-xs font-semibold text-indigo-600 hover:bg-indigo-50",
                                                  children: "Upload Codes",
                                                }),
                                                (0, l.jsx)(n.Z, {
                                                  type: "button",
                                                  variant: "dark",
                                                  onClick: () =>
                                                    void U(e.playFabItemId),
                                                  disabled:
                                                    N === e.playFabItemId,
                                                  loading:
                                                    N === e.playFabItemId,
                                                  className:
                                                    "rounded border px-3 py-1 text-xs text-gray-700 hover:bg-gray-100",
                                                  children: "Export CSV",
                                                }),
                                              ],
                                            }),
                                          }),
                                        ],
                                      },
                                      e.playFabItemId,
                                    );
                                  }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                y &&
                  (0, l.jsx)("p", {
                    className: "text-red-500 mt-2 text-sm font-semibold",
                    children: y,
                  }),
                C &&
                  (0, l.jsx)(c.W, {
                    items: a,
                    onClose: () => k(!1),
                    onCreated: L,
                  }),
                S &&
                  (0, l.jsx)(u.j, {
                    manageState: S,
                    onClose: closeManageReward,
                    onUpdate: I,
                    onRewardUpdated: L,
                    onOpenUpload: () => {
                      closeManageReward();
                      let e = r.find(
                        (e) => e.playFabItemId === S.reward.playFabItemId,
                      );
                      e && R(e);
                    },
                  }),
                E &&
                  (0, l.jsx)(m.Z, {
                    reward: E,
                    onClose: function () {
                      R(null);
                    },
                    onUploaded: L,
                  }),
              ],
            });
          }
          (([o, c, u, m] = x.then ? (await x)() : x), r());
        } catch (e) {
          r(e);
        }
      });
    },
    53081: function (e, t, a) {
      "use strict";
      a.a(e, async function (e, r) {
        try {
          a.d(t, {
            j: function () {
              return ManageExternalCodeRewardModal;
            },
          });
          var l = a(97458),
            s = a(52983),
            n = a(42897),
            i = a(24148),
            o = e([i]);
          function ManageExternalCodeRewardModal(e) {
            let {
                manageState: t,
                onClose: a,
                onUpdate: r,
                onOpenUpload: o,
                onRewardUpdated: d,
              } = e,
              [c, u] = (0, s.useState)(null),
              [m, x] = (0, s.useState)(null),
              [p, g] = (0, s.useState)(!1),
              h = new Intl.NumberFormat();
            async function handleUpdateReward() {
              var e, a, r, l, s;
              (u(null), x(null));
              let { reward: n } = t,
                o = t.redemptionInstructions.trim();
              if (!o) {
                u("Redemption instructions cannot be empty.");
                return;
              }
              let c = t.lowStockThreshold.trim(),
                m = Number.parseInt(c, 10);
              if ("" === c || !Number.isInteger(m) || m < 0) {
                u("Low-stock threshold must be a non-negative integer.");
                return;
              }
              let p = {
                  playFabItemId: n.playFabItemId,
                  expectedAttributeVersion: n.attributeVersion,
                },
                h = !1;
              (o !== n.redemptionInstructions &&
                ((p.redemptionInstructions = o), (h = !0)),
                m !== n.lowStockThreshold &&
                  ((p.lowStockThreshold = m), (h = !0)));
              let b = t.internalNotes.trim(),
                f = null !== (a = n.internalNotes) && void 0 !== a ? a : "";
              b !== f && ((p.internalNotes = b || null), (h = !0));
              let v = t.provider.trim(),
                y = null !== (r = n.provider) && void 0 !== r ? r : "";
              v !== y && ((p.provider = v || null), (h = !0));
              let j = t.providerSku.trim(),
                N = null !== (l = n.providerSku) && void 0 !== l ? l : "";
              if ((j !== N && ((p.providerSku = j || null), (h = !0)), !h)) {
                u("Make a change before saving.");
                return;
              }
              g(!0);
              let w = await (0, i.rs)(p);
              if (w.error) {
                (u(
                  null !== (s = w.error.errorMessage) && void 0 !== s
                    ? s
                    : "Failed to update external code reward.",
                ),
                  g(!1));
                return;
              }
              let C = null === (e = w.data) || void 0 === e ? void 0 : e.reward;
              if (!C) {
                (u("Failed to update external code reward."), g(!1));
                return;
              }
              (d(C), x("Changes saved."), g(!1));
            }
            return (0, l.jsx)("div", {
              className:
                "fixed inset-0 z-40 flex items-center justify-center bg-black/50 p-4",
              children: (0, l.jsxs)("div", {
                className:
                  "max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-white p-6 text-gray-900 shadow-xl",
                children: [
                  (0, l.jsxs)("div", {
                    className: "flex items-start justify-between",
                    children: [
                      (0, l.jsxs)("div", {
                        children: [
                          (0, l.jsx)("h2", {
                            className: "text-xl font-semibold",
                            children: "Manage External Code Reward",
                          }),
                          (0, l.jsxs)("p", {
                            className: "text-sm text-gray-600",
                            children: [
                              "PlayFab Item ID:",
                              " ",
                              (0, l.jsx)("span", {
                                className: "font-mono text-xs text-gray-500",
                                children: t.reward.playFabItemId,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, l.jsx)(n.Z, {
                        type: "button",
                        variant: "dark",
                        className:
                          "text-gray-500 transition hover:text-gray-700",
                        onClick: a,
                        children: "\xd7",
                      }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: "mt-4 grid gap-4 sm:grid-cols-2",
                    children: [
                      (0, l.jsxs)("div", {
                        className: "rounded-md bg-gray-50 p-3",
                        children: [
                          (0, l.jsx)("p", {
                            className: "text-xs uppercase text-gray-500",
                            children: "Available Codes",
                          }),
                          (0, l.jsx)("p", {
                            className: "text-lg font-semibold",
                            children: h.format(t.reward.availableCount),
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className: "rounded-md bg-gray-50 p-3",
                        children: [
                          (0, l.jsx)("p", {
                            className: "text-xs uppercase text-gray-500",
                            children: "Total Codes",
                          }),
                          (0, l.jsx)("p", {
                            className: "text-lg font-semibold",
                            children: h.format(t.reward.totalCount),
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className: "rounded-md bg-gray-50 p-3",
                        children: [
                          (0, l.jsx)("p", {
                            className: "text-xs uppercase text-gray-500",
                            children: "Assigned",
                          }),
                          (0, l.jsx)("p", {
                            className: "text-lg font-semibold",
                            children: h.format(t.reward.assignedCount),
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className: "rounded-md bg-gray-50 p-3",
                        children: [
                          (0, l.jsx)("p", {
                            className: "text-xs uppercase text-gray-500",
                            children: "Delivered",
                          }),
                          (0, l.jsx)("p", {
                            className: "text-lg font-semibold",
                            children: h.format(t.reward.deliveredCount),
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className: "rounded-md bg-gray-50 p-3",
                        children: [
                          (0, l.jsx)("p", {
                            className: "text-xs uppercase text-gray-500",
                            children: "Low-stock Threshold",
                          }),
                          (0, l.jsx)("p", {
                            className: "text-lg font-semibold",
                            children: h.format(t.reward.lowStockThreshold),
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className: "rounded-md bg-gray-50 p-3",
                        children: [
                          (0, l.jsx)("p", {
                            className: "text-xs uppercase text-gray-500",
                            children: "Status",
                          }),
                          (0, l.jsx)("p", {
                            className: "text-sm font-semibold text-gray-800",
                            children: t.reward.isLowStock
                              ? "Low Stock"
                              : "Healthy",
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className: "rounded-md bg-gray-50 p-3",
                        children: [
                          (0, l.jsx)("p", {
                            className: "text-xs uppercase text-gray-500",
                            children: "Last Upload",
                          }),
                          (0, l.jsx)("p", {
                            className: "text-sm text-gray-800",
                            children: t.reward.lastUploadAt
                              ? new Date(t.reward.lastUploadAt).toLocaleString()
                              : "—",
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className: "rounded-md bg-gray-50 p-3",
                        children: [
                          (0, l.jsx)("p", {
                            className: "text-xs uppercase text-gray-500",
                            children: "Updated",
                          }),
                          (0, l.jsx)("p", {
                            className: "text-sm text-gray-800",
                            children: new Date(
                              t.reward.updatedAt,
                            ).toLocaleString(),
                          }),
                        ],
                      }),
                    ],
                  }),
                  c &&
                    (0, l.jsx)("p", {
                      className: "text-red-500 mt-3 text-sm font-semibold",
                      children: c,
                    }),
                  m &&
                    (0, l.jsx)("p", {
                      className: "text-green-600 mt-3 text-sm",
                      children: m,
                    }),
                  (0, l.jsxs)("div", {
                    className: "mt-4 flex flex-col gap-4",
                    children: [
                      (0, l.jsxs)("div", {
                        children: [
                          (0, l.jsx)("label", {
                            className:
                              "mb-1 block text-sm font-medium text-gray-700",
                            children: "Redemption Instructions",
                          }),
                          (0, l.jsx)("textarea", {
                            value: t.redemptionInstructions,
                            onChange: (e) => {
                              (u(null),
                                x(null),
                                r({
                                  ...t,
                                  redemptionInstructions: e.target.value,
                                }));
                            },
                            rows: 4,
                            className:
                              "w-full rounded border border-gray-300 p-2 text-sm focus:border-indigo-500 focus:outline-none",
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className: "grid gap-4 sm:grid-cols-3",
                        children: [
                          (0, l.jsxs)("div", {
                            children: [
                              (0, l.jsx)("label", {
                                className:
                                  "mb-1 block text-sm font-medium text-gray-700",
                                children: "Low-stock Threshold",
                              }),
                              (0, l.jsx)("input", {
                                type: "number",
                                min: 0,
                                value: t.lowStockThreshold,
                                onChange: (e) => {
                                  (u(null),
                                    x(null),
                                    r({
                                      ...t,
                                      lowStockThreshold: e.target.value,
                                    }));
                                },
                                className:
                                  "w-full rounded border border-gray-300 p-2 text-sm focus:border-indigo-500 focus:outline-none",
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            children: [
                              (0, l.jsx)("label", {
                                className:
                                  "mb-1 block text-sm font-medium text-gray-700",
                                children: "Provider (optional)",
                              }),
                              (0, l.jsx)("input", {
                                type: "text",
                                value: t.provider,
                                onChange: (e) => {
                                  (u(null),
                                    x(null),
                                    r({ ...t, provider: e.target.value }));
                                },
                                className:
                                  "w-full rounded border border-gray-300 p-2 text-sm focus:border-indigo-500 focus:outline-none",
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            children: [
                              (0, l.jsx)("label", {
                                className:
                                  "mb-1 block text-sm font-medium text-gray-700",
                                children: "Provider SKU (optional)",
                              }),
                              (0, l.jsx)("input", {
                                type: "text",
                                value: t.providerSku,
                                onChange: (e) => {
                                  (u(null),
                                    x(null),
                                    r({ ...t, providerSku: e.target.value }));
                                },
                                className:
                                  "w-full rounded border border-gray-300 p-2 text-sm focus:border-indigo-500 focus:outline-none",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        children: [
                          (0, l.jsx)("label", {
                            className:
                              "mb-1 block text-sm font-medium text-gray-700",
                            children: "Internal Notes (optional)",
                          }),
                          (0, l.jsx)("textarea", {
                            value: t.internalNotes,
                            onChange: (e) => {
                              (u(null),
                                x(null),
                                r({ ...t, internalNotes: e.target.value }));
                            },
                            rows: 3,
                            className:
                              "w-full rounded border border-gray-300 p-2 text-sm focus:border-indigo-500 focus:outline-none",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className:
                      "mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
                    children: [
                      (0, l.jsx)(n.Z, {
                        type: "button",
                        variant: "dark",
                        onClick: o,
                        className:
                          "self-start rounded px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100",
                        children: "Upload Codes",
                      }),
                      (0, l.jsxs)("div", {
                        className: "flex gap-2",
                        children: [
                          (0, l.jsx)(n.Z, {
                            type: "button",
                            variant: "dark",
                            onClick: a,
                            className:
                              "rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-100",
                            disabled: p,
                            children: "Close",
                          }),
                          (0, l.jsx)(n.Z, {
                            type: "button",
                            variant: "darkBackground",
                            onClick: () => void handleUpdateReward(),
                            className:
                              "rounded bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-indigo-300",
                            disabled: p,
                            loading: p,
                            children: p ? "Saving…" : "Save Changes",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            });
          }
          ((i = (o.then ? (await o)() : o)[0]), r());
        } catch (e) {
          r(e);
        }
      });
    },
    197: function (e, t, a) {
      "use strict";
      a.d(t, {
        a: function () {
          return RedemptionHistorySection;
        },
      });
      var r = a(97458),
        l = a(42897),
        s = a(9616);
      function RedemptionHistorySection(e) {
        var t;
        let {
          selectedCampaign: a,
          campaignRedemptions: n,
          campaignRedemptionsError: i,
          loadingCampaignRedemptions: o,
          loadingMoreCampaignRedemptions: d,
          campaignRedemptionsNextToken: c,
          onRefresh: u,
          onLoadMore: m,
          onOpenUser: x,
        } = e;
        return (0, r.jsxs)("div", {
          className:
            "mx-auto mt-4 max-w-7xl rounded-lg bg-white p-4 text-gray-900 shadow",
          children: [
            (0, r.jsxs)("div", {
              className:
                "mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",
              children: [
                (0, r.jsxs)("div", {
                  children: [
                    (0, r.jsx)("h2", {
                      className: "text-2xl font-bold",
                      children: "Redemption History",
                    }),
                    a
                      ? (0, r.jsxs)("p", {
                          className: "text-sm text-gray-700",
                          children: [
                            "Campaign:",
                            " ",
                            (0, r.jsx)("span", {
                              className: "font-semibold",
                              children:
                                null !== (t = a.name) && void 0 !== t
                                  ? t
                                  : "Unnamed Campaign",
                            }),
                            " ",
                            (0, r.jsxs)("span", {
                              className: "font-mono text-xs text-gray-500",
                              children: ["(", a.id, ")"],
                            }),
                          ],
                        })
                      : (0, r.jsx)("p", {
                          className: "text-sm text-gray-700",
                          children:
                            'Select "View Details" from a campaign to view recent activity.',
                        }),
                  ],
                }),
                a &&
                  (0, r.jsx)(l.Z, {
                    type: "button",
                    variant: "dark",
                    onClick: u,
                    disabled: o || d,
                    loading: o,
                    className:
                      "self-start rounded border border-gray-300 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60 sm:self-auto",
                    children: o ? "Refreshing…" : "Refresh",
                  }),
              ],
            }),
            i
              ? (0, r.jsx)("p", {
                  className: "text-red-500 text-sm font-semibold",
                  children: i,
                })
              : o
                ? (0, r.jsx)("p", {
                    className: "text-sm text-gray-700",
                    children: "Loading…",
                  })
                : a
                  ? 0 === n.length
                    ? (0, r.jsx)("p", {
                        className: "text-sm text-gray-700",
                        children: "No redemptions recorded for this campaign.",
                      })
                    : (0, r.jsx)(s.T, {
                        entries: n,
                        onOpenUser: x,
                        showCodeColumn: !0,
                        loadMore: c
                          ? {
                              hasMore: !0,
                              onLoadMore: m,
                              loading: d,
                              disabled: o,
                            }
                          : void 0,
                      })
                  : (0, r.jsx)("p", {
                      className: "text-sm text-gray-700",
                      children: "Choose a campaign to populate this table.",
                    }),
          ],
        });
      }
    },
    9616: function (e, t, a) {
      "use strict";
      a.d(t, {
        T: function () {
          return RedemptionHistoryTable;
        },
      });
      var r = a(97458),
        l = a(42897);
      function RedemptionHistoryTable(e) {
        let {
          entries: t,
          onOpenUser: a,
          showCodeColumn: s = !0,
          summaryLabel: n,
          loadMore: i,
        } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("div", {
              className: "overflow-x-auto",
              children: (0, r.jsxs)("table", {
                className:
                  "min-w-full border border-gray-200 text-left text-sm",
                children: [
                  (0, r.jsx)("thead", {
                    className: "bg-gray-50 text-gray-700",
                    children: (0, r.jsxs)("tr", {
                      children: [
                        s &&
                          (0, r.jsx)("th", {
                            className: "border-b px-3 py-2",
                            children: "Code",
                          }),
                        (0, r.jsx)("th", {
                          className: "border-b px-3 py-2",
                          children: "Redeemed At",
                        }),
                        (0, r.jsx)("th", {
                          className: "border-b px-3 py-2",
                          children: "Master Player ID",
                        }),
                      ],
                    }),
                  }),
                  (0, r.jsx)("tbody", {
                    children: t.map((e) =>
                      (0, r.jsxs)(
                        "tr",
                        {
                          className: "odd:bg-white even:bg-gray-50",
                          children: [
                            s &&
                              (0, r.jsx)("td", {
                                className:
                                  "border-b px-3 py-2 font-mono text-xs text-gray-700",
                                children: e.code,
                              }),
                            (0, r.jsx)("td", {
                              className: "border-b px-3 py-2 text-gray-700",
                              children: new Date(e.redeemedAt).toLocaleString(),
                            }),
                            (0, r.jsx)("td", {
                              className: "border-b px-3 py-2",
                              children: (0, r.jsx)(l.Z, {
                                type: "button",
                                variant: "dark",
                                className:
                                  "text-blue-700 hover:text-blue-900 underline underline-offset-2",
                                onClick: () => a(e.masterPlayerId),
                                children: (0, r.jsx)("span", {
                                  className: "font-mono text-xs text-gray-700",
                                  children: e.masterPlayerId,
                                }),
                              }),
                            }),
                          ],
                        },
                        ""
                          .concat(e.code, "-")
                          .concat(e.redeemedAt, "-")
                          .concat(e.masterPlayerId),
                      ),
                    ),
                  }),
                ],
              }),
            }),
            (0, r.jsxs)("div", {
              className:
                "mt-3 flex items-center justify-between text-xs text-gray-500",
              children: [
                (0, r.jsx)("span", {
                  children:
                    null != n
                      ? n
                      : ""
                          .concat(t.length, " redemption")
                          .concat(1 === t.length ? "" : "s", " loaded"),
                }),
                (null == i ? void 0 : i.hasMore) &&
                  (0, r.jsx)(l.Z, {
                    type: "button",
                    variant: "dark",
                    onClick: i.onLoadMore,
                    disabled: i.disabled || i.loading,
                    loading: i.loading,
                    className:
                      "rounded border border-gray-300 px-3 py-1 text-sm text-gray-700 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60",
                    children: i.loading ? "Loading…" : "Load More",
                  }),
              ],
            }),
          ],
        });
      }
    },
    3897: function (e, t, a) {
      "use strict";
      a.d(t, {
        G: function () {
          return RegularUserUtilitiesSection;
        },
      });
      var r = a(97458),
        l = a(42897);
      function RegularUserUtilitiesSection(e) {
        let {
          redeemValue: t,
          onRedeemValueChange: a,
          onRedeemCode: s,
          redeeming: n,
          onListUserRewards: i,
          rewardsLoading: o,
          rewardsError: d,
          userRewards: c,
          onRevealUserReward: u,
          revealingItemId: m,
        } = e;
        return (0, r.jsxs)("div", {
          className:
            "mx-auto mt-4 max-w-7xl rounded-lg bg-white p-4 text-gray-900 shadow",
          children: [
            (0, r.jsx)("h2", {
              className: "mb-3 text-lg font-semibold",
              children: "Regular User Utilities",
            }),
            (0, r.jsxs)("div", {
              className: "flex flex-col gap-2 sm:flex-row sm:items-center",
              children: [
                (0, r.jsx)("input", {
                  value: t,
                  onChange: (e) => a(e.target.value),
                  placeholder: "Enter code to redeem",
                  className:
                    "w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none sm:max-w-xs",
                }),
                (0, r.jsx)(l.Z, {
                  type: "button",
                  variant: "darkBackground",
                  onClick: s,
                  disabled: n,
                  loading: n,
                  className:
                    "rounded bg-indigo-600 px-3 py-2 text-sm text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60",
                  children: n ? "Redeeming…" : "Redeem Code",
                }),
              ],
            }),
            (0, r.jsxs)("div", {
              className: "mt-6 border-t border-gray-200 pt-4",
              children: [
                (0, r.jsx)("h3", {
                  className: "mb-2 text-base font-semibold",
                  children: "External Code Rewards",
                }),
                (0, r.jsx)("div", {
                  className: "flex flex-col gap-2 sm:flex-row sm:items-center",
                  children: (0, r.jsx)(l.Z, {
                    type: "button",
                    variant: "darkBackground",
                    onClick: i,
                    disabled: o,
                    loading: o,
                    className:
                      "rounded bg-indigo-600 px-3 py-2 text-sm text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60",
                    children: o ? "Loading…" : "List My Rewards",
                  }),
                }),
                d &&
                  (0, r.jsx)("p", {
                    className: "text-red-500 mt-2 text-sm font-semibold",
                    children: d,
                  }),
                c.length > 0 &&
                  (0, r.jsx)("div", {
                    className: "mt-3 overflow-x-auto",
                    children: (0, r.jsxs)("table", {
                      className: "min-w-full text-left text-sm",
                      children: [
                        (0, r.jsx)("thead", {
                          className: "border-b bg-gray-50 text-gray-700",
                          children: (0, r.jsxs)("tr", {
                            children: [
                              (0, r.jsx)("th", {
                                className: "px-3 py-2",
                                children: "Item",
                              }),
                              (0, r.jsx)("th", {
                                className: "px-3 py-2",
                                children: "Item ID",
                              }),
                              (0, r.jsx)("th", {
                                className: "px-3 py-2",
                                children: "Status",
                              }),
                              (0, r.jsx)("th", {
                                className: "px-3 py-2",
                                children: "Code",
                              }),
                              (0, r.jsx)("th", { className: "px-3 py-2" }),
                            ],
                          }),
                        }),
                        (0, r.jsx)("tbody", {
                          children: c.map((e) => {
                            var t, a;
                            return (0, r.jsxs)(
                              "tr",
                              {
                                className: "border-b last:border-0",
                                children: [
                                  (0, r.jsx)("td", {
                                    className: "px-3 py-2",
                                    children: (0, r.jsxs)("div", {
                                      className: "flex flex-col",
                                      children: [
                                        (0, r.jsx)("span", {
                                          className: "font-medium",
                                          children:
                                            null !==
                                              (a =
                                                null !== (t = e.title) &&
                                                void 0 !== t
                                                  ? t
                                                  : e.friendlyId) &&
                                            void 0 !== a
                                              ? a
                                              : "(Untitled)",
                                        }),
                                        e.friendlyId &&
                                          (0, r.jsx)("span", {
                                            className: "text-xs text-gray-600",
                                            children: e.friendlyId,
                                          }),
                                      ],
                                    }),
                                  }),
                                  (0, r.jsx)("td", {
                                    className: "px-3 py-2 text-gray-700",
                                    children: e.id,
                                  }),
                                  (0, r.jsx)("td", {
                                    className: "px-3 py-2",
                                    children: (0, r.jsx)("span", {
                                      className:
                                        "assigned" === e.status
                                          ? "bg-green-100 text-green-800 rounded px-2 py-1 text-xs font-semibold"
                                          : "rounded bg-yellow-100 px-2 py-1 text-xs font-semibold text-yellow-800",
                                      children: e.status,
                                    }),
                                  }),
                                  (0, r.jsx)("td", {
                                    className: "px-3 py-2 font-mono text-xs",
                                    children: e.code
                                      ? e.code
                                      : "assigned" === e.status
                                        ? "(hidden)"
                                        : "—",
                                  }),
                                  (0, r.jsx)("td", {
                                    className: "px-3 py-2 text-right",
                                    children:
                                      "available" === e.status
                                        ? (0, r.jsx)(l.Z, {
                                            type: "button",
                                            variant: "darkBackground",
                                            onClick: () => u(e.id),
                                            disabled: m === e.id,
                                            loading: m === e.id,
                                            className:
                                              "rounded bg-indigo-600 px-3 py-1.5 text-xs text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60",
                                            children:
                                              m === e.id
                                                ? "Revealing…"
                                                : "Reveal Code",
                                          })
                                        : null,
                                  }),
                                ],
                              },
                              e.id,
                            );
                          }),
                        }),
                      ],
                    }),
                  }),
              ],
            }),
          ],
        });
      }
    },
    37151: function (e, t, a) {
      "use strict";
      a.a(e, async function (e, r) {
        try {
          a.d(t, {
            Z: function () {
              return UploadExternalCodesModal;
            },
          });
          var l = a(97458),
            s = a(52983),
            n = a(42897),
            i = a(11750),
            o = a(24148),
            d = a(10296),
            c = e([o]);
          function UploadExternalCodesModal(e) {
            let { reward: t, onClose: a, onUploaded: r } = e,
              [c, u] = (0, s.useState)({
                rewardId: t.playFabItemId,
                fileName: null,
                preview: null,
                parsing: !1,
                parseError: null,
                confirm: !1,
                uploading: !1,
                uploadError: null,
                uploadResult: null,
              }),
              m = new Intl.NumberFormat();
            async function handleUploadCodes() {
              if (!c.preview || 0 === c.preview.trimmedCodes.length) {
                u((e) => ({
                  ...e,
                  uploadError: "Parse a CSV file before uploading.",
                }));
                return;
              }
              if (!c.confirm) {
                u((e) => ({
                  ...e,
                  uploadError: "Confirm the preview before uploading.",
                }));
                return;
              }
              u((e) => ({ ...e, uploading: !0, uploadError: null }));
              let e = await (0, o.Vp)({
                playFabItemId: t.playFabItemId,
                rows: c.preview.trimmedCodes.map((e) => ({ code: e })),
              });
              if (e.error) {
                u((t) => {
                  var a;
                  return {
                    ...t,
                    uploading: !1,
                    uploadError:
                      null !== (a = e.error.errorMessage) && void 0 !== a
                        ? a
                        : "Failed to upload external codes.",
                  };
                });
                return;
              }
              let a = e.data;
              if (!a) {
                u((e) => ({
                  ...e,
                  uploading: !1,
                  uploadError: "Failed to upload external codes.",
                }));
                return;
              }
              (r(a.reward),
                u((e) => ({
                  ...e,
                  uploading: !1,
                  uploadError: null,
                  preview: null,
                  confirm: !1,
                  uploadResult: {
                    inserted: a.inserted,
                    skippedDuplicates: a.skippedDuplicates,
                    processedRows: a.totalRows,
                  },
                })));
            }
            return (0, l.jsx)("div", {
              className:
                "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4",
              children: (0, l.jsxs)("div", {
                className:
                  "max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-white p-6 text-gray-900 shadow-xl",
                children: [
                  (0, l.jsxs)("div", {
                    className: "flex items-start justify-between",
                    children: [
                      (0, l.jsxs)("div", {
                        children: [
                          (0, l.jsx)("h2", {
                            className: "text-xl font-semibold",
                            children: "Upload External Codes",
                          }),
                          (0, l.jsxs)("p", {
                            className: "text-sm text-gray-600",
                            children: [
                              "PlayFab Item ID:",
                              " ",
                              (0, l.jsx)("span", {
                                className: "font-mono text-xs text-gray-500",
                                children: t.playFabItemId,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, l.jsx)(n.Z, {
                        type: "button",
                        variant: "dark",
                        className:
                          "text-gray-500 transition hover:text-gray-700",
                        onClick: a,
                        children: "\xd7",
                      }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: "mt-4 space-y-3",
                    children: [
                      (0, l.jsxs)("div", {
                        children: [
                          (0, l.jsx)("label", {
                            className:
                              "mb-1 block text-sm font-medium text-gray-700",
                            children: "CSV File",
                          }),
                          (0, l.jsx)("input", {
                            type: "file",
                            accept: ".csv,text/csv",
                            onChange: (e) =>
                              (function (e) {
                                if (!e || 0 === e.length) {
                                  u({
                                    ...c,
                                    fileName: null,
                                    preview: null,
                                    parseError: null,
                                    confirm: !1,
                                    uploadResult: null,
                                    uploadError: null,
                                  });
                                  return;
                                }
                                let t = e.item(0);
                                if (!t) {
                                  u((e) => ({
                                    ...e,
                                    parsing: !1,
                                    parseError: "No file selected.",
                                    preview: null,
                                    confirm: !1,
                                    uploadResult: null,
                                    uploadError: null,
                                  }));
                                  return;
                                }
                                let a = new FileReader();
                                (u((e) => ({
                                  ...e,
                                  fileName: t.name,
                                  parsing: !0,
                                  parseError: null,
                                  preview: null,
                                  confirm: !1,
                                  uploadResult: null,
                                  uploadError: null,
                                })),
                                  (a.onload = () => {
                                    let e =
                                      "string" == typeof a.result
                                        ? a.result
                                        : "";
                                    try {
                                      let t = (0, d.t)(e);
                                      u((e) => ({
                                        ...e,
                                        parsing: !1,
                                        parseError: null,
                                        preview: t,
                                        confirm: !1,
                                        uploadResult: null,
                                        uploadError: null,
                                      }));
                                    } catch (e) {
                                      u((t) => ({
                                        ...t,
                                        parsing: !1,
                                        parseError:
                                          e instanceof Error
                                            ? e.message
                                            : "Failed to parse CSV file.",
                                        preview: null,
                                        confirm: !1,
                                        uploadResult: null,
                                        uploadError: null,
                                      }));
                                    }
                                  }),
                                  (a.onerror = () => {
                                    u((e) => ({
                                      ...e,
                                      parsing: !1,
                                      parseError: "Failed to read file.",
                                      preview: null,
                                      confirm: !1,
                                      uploadResult: null,
                                      uploadError: null,
                                    }));
                                  }),
                                  a.readAsText(t));
                              })(e.target.files),
                            className:
                              "w-full rounded border border-gray-300 p-2 text-sm focus:border-indigo-500 focus:outline-none",
                          }),
                          c.fileName &&
                            (0, l.jsxs)("p", {
                              className: "mt-1 text-xs text-gray-500",
                              children: ["Selected: ", c.fileName],
                            }),
                        ],
                      }),
                      c.parsing &&
                        (0, l.jsx)("p", {
                          className: "text-sm text-gray-700",
                          children: "Parsing CSV…",
                        }),
                      c.parseError &&
                        (0, l.jsx)("p", {
                          className: "text-red-500 text-sm font-semibold",
                          children: c.parseError,
                        }),
                      c.preview &&
                        (0, l.jsxs)("div", {
                          className:
                            "rounded border border-gray-200 p-3 text-sm",
                          children: [
                            (0, l.jsx)("p", {
                              className: "font-medium",
                              children: "Preview",
                            }),
                            (0, l.jsxs)("ul", {
                              className: "mt-2 space-y-1 text-gray-700",
                              children: [
                                (0, l.jsxs)("li", {
                                  children: [
                                    "Processed rows:",
                                    " ",
                                    m.format(c.preview.processedRows),
                                  ],
                                }),
                                (0, l.jsxs)("li", {
                                  children: [
                                    "Codes to upload:",
                                    " ",
                                    m.format(c.preview.trimmedCodes.length),
                                  ],
                                }),
                                (0, l.jsxs)("li", {
                                  children: [
                                    "Blank/invalid rows ignored:",
                                    " ",
                                    m.format(c.preview.ignoredCount),
                                  ],
                                }),
                              ],
                            }),
                            c.preview.sampleRows.length > 0 &&
                              (0, l.jsxs)("div", {
                                className: "mt-3",
                                children: [
                                  (0, l.jsx)("p", {
                                    className:
                                      "text-xs font-medium uppercase text-gray-500",
                                    children: "Sample Codes",
                                  }),
                                  (0, l.jsx)("ul", {
                                    className:
                                      "mt-1 space-y-1 font-mono text-xs text-gray-700",
                                    children: c.preview.sampleRows.map((e) =>
                                      (0, l.jsx)("li", { children: e }, e),
                                    ),
                                  }),
                                ],
                              }),
                          ],
                        }),
                      c.uploadResult &&
                        (0, l.jsxs)("div", {
                          className:
                            "border-green-200 bg-green-50 text-green-800 rounded border p-3 text-sm",
                          children: [
                            (0, l.jsx)("p", {
                              className: "font-semibold",
                              children: "Upload complete.",
                            }),
                            (0, l.jsxs)("ul", {
                              className: "mt-1 space-y-1",
                              children: [
                                (0, l.jsxs)("li", {
                                  children: [
                                    "Inserted:",
                                    " ",
                                    m.format(c.uploadResult.inserted),
                                  ],
                                }),
                                (0, l.jsxs)("li", {
                                  children: [
                                    "Skipped duplicates:",
                                    " ",
                                    m.format(c.uploadResult.skippedDuplicates),
                                  ],
                                }),
                                (0, l.jsxs)("li", {
                                  children: [
                                    "Rows processed:",
                                    " ",
                                    m.format(c.uploadResult.processedRows),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      c.uploadError &&
                        (0, l.jsx)("p", {
                          className: "text-red-500 text-sm font-semibold",
                          children: c.uploadError,
                        }),
                      (0, l.jsx)("label", {
                        className:
                          "flex items-center gap-2 text-sm text-gray-700",
                        children: (0, l.jsx)(i.Z, {
                          value: c.confirm,
                          onChange: (e) => u((t) => ({ ...t, confirm: e })),
                          children:
                            "I confirm this preview matches the codes I expect to upload.",
                        }),
                      }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: "mt-6 flex justify-end gap-2",
                    children: [
                      (0, l.jsx)(n.Z, {
                        type: "button",
                        variant: "dark",
                        onClick: a,
                        className:
                          "rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-100",
                        disabled: c.uploading,
                        children: "Close",
                      }),
                      (0, l.jsx)(n.Z, {
                        type: "button",
                        variant: "darkBackground",
                        onClick: () => void handleUploadCodes(),
                        className:
                          "rounded bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-indigo-300",
                        disabled:
                          c.uploading ||
                          !c.preview ||
                          0 === c.preview.trimmedCodes.length ||
                          !c.confirm,
                        loading: c.uploading,
                        children: c.uploading ? "Uploading…" : "Upload Codes",
                      }),
                    ],
                  }),
                ],
              }),
            });
          }
          ((o = (c.then ? (await c)() : c)[0]), r());
        } catch (e) {
          r(e);
        }
      });
    },
    10296: function (e, t, a) {
      "use strict";
      a.d(t, {
        p: function () {
          return sortExternalCodeRewards;
        },
        t: function () {
          return parseExternalCodesCsv;
        },
      });
      var r = a(39378),
        l = a.n(r),
        s = a(4982);
      function sortExternalCodeRewards(e) {
        return [...e].sort((e, t) =>
          e.updatedAt === t.updatedAt
            ? e.playFabItemId.localeCompare(t.playFabItemId)
            : t.updatedAt - e.updatedAt,
        );
      }
      function parseExternalCodesCsv(e) {
        var t, a;
        let r = (0, s.parse)(e, { skipEmptyLines: !1, delimiter: "," });
        if (r.errors.length > 0) {
          let [e] = r.errors;
          throw Error(
            null !== (t = null == e ? void 0 : e.message) && void 0 !== t
              ? t
              : "Failed to parse CSV file.",
          );
        }
        let n = [],
          i = 0,
          o = 0;
        for (let e of r.data) {
          let t =
            null === (a = l().first(e)) || void 0 === a ? void 0 : a.trim();
          if (!t) {
            o += 1;
            continue;
          }
          ((i += 1), n.push(t));
        }
        return {
          processedRows: i,
          trimmedCodes: n,
          ignoredCount: o,
          sampleRows: n.slice(0, 5),
        };
      }
    },
    19755: function (e, t, a) {
      "use strict";
      a.a(e, async function (e, r) {
        try {
          (a.r(t),
            a.d(t, {
              __N_SSP: function () {
                return j;
              },
              default: function () {
                return AdminCodesPage;
              },
            }));
          var l = a(97458),
            s = a(14322),
            n = a(52983),
            i = a(24148),
            o = a(68820),
            d = a(86481),
            c = a(20102),
            u = a(2505),
            m = a(1189),
            x = a(80808),
            p = a(61130),
            g = a(65503),
            h = a(3421),
            b = a(197),
            f = a(3897),
            v = a(16424),
            y = e([i, o, d, c, u, m, x, p, g, h]);
          [i, o, d, c, u, m, x, p, g, h] = y.then ? (await y)() : y;
          var j = !0;
          function AdminCodesPage(e) {
            let { items: t, campaignsPage: a, externalCodeRewards: r } = e,
              y = (0, s.useRouter)(),
              { addAlert: j } = (0, v.Z)(),
              [N, w] = (0, n.useState)(a.items),
              [C, k] = (0, n.useState)(a.nextPage),
              [S, I] = (0, n.useState)(!1),
              [E, R] = (0, n.useState)({}),
              [F, A] = (0, n.useState)(null),
              M = (0, n.useMemo)(() => {
                let e = {};
                return (
                  E.status && (e.status = E.status),
                  E.distinctCodeKind &&
                    (e.distinctCodeKind = E.distinctCodeKind),
                  e
                );
              }, [E]),
              L = (0, n.useCallback)((e) => {
                A((t) =>
                  t && t.column === e
                    ? "desc" === t.direction
                      ? { column: e, direction: "asc" }
                      : null
                    : { column: e, direction: "desc" },
                );
              }, []);
            (0, n.useEffect)(() => {
              (w(a.items), k(a.nextPage));
            }, [a]);
            let D = (0, n.useMemo)(
                () => N.reduce((e, t) => ((e[t.id] = t), e), {}),
                [N],
              ),
              [U, T] = (0, n.useState)(!1),
              [Z, P] = (0, n.useState)(null),
              [B, O] = (0, n.useState)(null),
              V = (0, n.useRef)(null),
              [_, z] = (0, n.useState)([]),
              [K, G] = (0, n.useState)(null),
              [Q, H] = (0, n.useState)(null),
              [q, X] = (0, n.useState)(!1),
              [$, W] = (0, n.useState)(!1),
              [Y, J] = (0, n.useState)(null),
              [ee, et] = (0, n.useState)(null),
              [ea, er] = (0, n.useState)([]),
              el = (0, n.useCallback)(
                () =>
                  ""
                    .concat(Date.now().toString(36), "-")
                    .concat(Math.random().toString(36).slice(2, 8)),
                [],
              ),
              es = (0, n.useCallback)(
                (e) => {
                  let t = el();
                  return (
                    er((a) => {
                      var r;
                      return [
                        {
                          id: t,
                          campaignId: e.campaignId,
                          campaignName: e.campaignName,
                          action: e.action,
                          state:
                            null !== (r = e.state) && void 0 !== r
                              ? r
                              : "in-progress",
                          message: e.message,
                        },
                        ...a,
                      ];
                    }),
                    t
                  );
                },
                [el],
              ),
              en = (0, n.useCallback)((e, t, a) => {
                (er((r) =>
                  r.map((r) =>
                    r.id === e ? { ...r, state: t, message: a } : r,
                  ),
                ),
                  "in-progress" !== t &&
                    setTimeout(() => {
                      er((t) => t.filter((t) => t.id !== e));
                    }, 4500));
              }, []),
              ei = (0, n.useCallback)((e) => {
                er((t) => t.filter((t) => t.id !== e));
              }, []),
              eo = (0, n.useCallback)(
                (e, t, a) => {
                  (en(e, t, a),
                    "success" === t
                      ? j({ title: "Done", children: a })
                      : "error" === t &&
                        j({ title: "Action failed", children: a }));
                },
                [j, en],
              ),
              [ed, ec] = (0, n.useState)(!1),
              [eu, em] = (0, n.useState)(null),
              [ex, ep] = (0, n.useState)(null),
              [eg, eh] = (0, n.useState)(""),
              [eb, ef] = (0, n.useState)(!1),
              {
                rewards: ev,
                fetchRewards: ey,
                rewardsLoading: ej,
                rewardsError: eN,
              } = (0, c.S)(),
              ew = ev.externalCodes,
              [eC, ek] = (0, n.useState)(null),
              [eS, eI] = (0, n.useState)(null),
              eE = (0, n.useCallback)((e) => {
                eI(e);
              }, []),
              [eR, eF] = (0, n.useState)([]),
              [eA, eM] = (0, n.useState)(null),
              [eL, eD] = (0, n.useState)(!1),
              [eU, eT] = (0, n.useState)(!1),
              [eZ, eP] = (0, n.useState)(null),
              eB = (0, n.useCallback)(async (e) => {
                var t, a, r;
                (z([]), G(null), H(null), X(!0), W(!1));
                let l = await (0, i.bt)({ campaignId: e, limit: 50 });
                if (V.current === e) {
                  if (l.error)
                    (H(
                      null !== (t = l.error.errorMessage) && void 0 !== t
                        ? t
                        : "Failed to load campaign codes",
                    ),
                      z([]),
                      G(null));
                  else {
                    let e = l.data;
                    (z(
                      null !== (a = null == e ? void 0 : e.items) &&
                        void 0 !== a
                        ? a
                        : [],
                    ),
                      G(
                        null !== (r = null == e ? void 0 : e.nextToken) &&
                          void 0 !== r
                          ? r
                          : null,
                      ));
                  }
                  V.current === e && X(!1);
                }
              }, []),
              eO = (0, n.useCallback)(async (e) => {
                var t, a, r;
                (eF([]), eM(null), eP(null), eD(!0), eT(!1));
                let l = await (0, i.ml)({ campaignId: e, limit: 50 });
                if (V.current === e) {
                  if (l.error)
                    (eP(
                      null !== (t = l.error.errorMessage) && void 0 !== t
                        ? t
                        : "Failed to load redemption history",
                    ),
                      eF([]),
                      eM(null));
                  else {
                    let e = l.data;
                    (eF(
                      null !== (a = null == e ? void 0 : e.items) &&
                        void 0 !== a
                        ? a
                        : [],
                    ),
                      eM(
                        null !== (r = null == e ? void 0 : e.nextToken) &&
                          void 0 !== r
                          ? r
                          : null,
                      ));
                  }
                  V.current === e && eD(!1);
                }
              }, []),
              eV = (0, n.useCallback)(
                async (e) => {
                  (O(e),
                    (V.current = e.id),
                    await Promise.allSettled([eB(e.id), eO(e.id)]));
                },
                [eB, eO],
              ),
              e_ = (0, n.useCallback)(
                async (e) => {
                  var t, a;
                  (et(null), J(e));
                  let r = null === (t = D[e]) || void 0 === t ? void 0 : t.name,
                    l = es({
                      action: "export",
                      campaignId: e,
                      campaignName: r,
                      message: r
                        ? 'Exporting "'.concat(r, '" codes…')
                        : "Exporting campaign codes…",
                    });
                  try {
                    let t = await (0, i.xX)({ campaignId: e });
                    if (t.error) {
                      let e =
                        null !== (a = t.error.errorMessage) && void 0 !== a
                          ? a
                          : "Failed to export campaign codes.";
                      (et(e),
                        en(l, "error", e),
                        j({ title: "Export failed", children: e }));
                      return;
                    }
                    (en(
                      l,
                      "success",
                      r
                        ? 'Export ready for "'.concat(
                            r,
                            '". Download should start shortly.',
                          )
                        : "Export ready. Download should start shortly.",
                    ),
                      j({
                        title: "Export started",
                        children: "Your CSV download should start shortly.",
                      }));
                  } catch (t) {
                    let e =
                      t instanceof Error
                        ? t.message
                        : "Failed to export campaign codes.";
                    (et(e),
                      en(l, "error", e),
                      j({ title: "Export failed", children: e }));
                  } finally {
                    J(null);
                  }
                },
                [j, es, D, en],
              ),
              ez = (0, n.useCallback)(async () => {
                var e, t;
                if (!B || !K) return;
                let a = B.id;
                (W(!0), H(null));
                let r = await (0, i.bt)({
                  campaignId: a,
                  limit: 50,
                  cursor: K,
                });
                if (V.current === a) {
                  if (r.error)
                    H(
                      null !== (e = r.error.errorMessage) && void 0 !== e
                        ? e
                        : "Failed to load more campaign codes",
                    );
                  else {
                    let e = r.data;
                    e &&
                      (z((t) => {
                        var a;
                        return [
                          ...t,
                          ...(null !== (a = e.items) && void 0 !== a ? a : []),
                        ];
                      }),
                      G(null !== (t = e.nextToken) && void 0 !== t ? t : null));
                  }
                  V.current === a && W(!1);
                }
              }, [K, B]),
              eK = (0, n.useCallback)(async () => {
                B && (await eO(B.id));
              }, [eO, B]),
              eG = (0, n.useCallback)(async () => {
                var e, t;
                if (!B || !eA) return;
                let a = B.id;
                eT(!0);
                let r = await (0, i.ml)({
                  campaignId: a,
                  limit: 50,
                  cursor: eA,
                });
                if (V.current === a) {
                  if (r.error)
                    eP(
                      null !== (e = r.error.errorMessage) && void 0 !== e
                        ? e
                        : "Failed to load redemption history",
                    );
                  else {
                    let e = r.data;
                    (eF((t) => {
                      var a;
                      return [
                        ...t,
                        ...(null !== (a = null == e ? void 0 : e.items) &&
                        void 0 !== a
                          ? a
                          : []),
                      ];
                    }),
                      eM(
                        null !== (t = null == e ? void 0 : e.nextToken) &&
                          void 0 !== t
                          ? t
                          : null,
                      ),
                      eP(null));
                  }
                  V.current === a && eT(!1);
                }
              }, [eA, B]),
              [eQ, eH] = (0, n.useState)(null),
              eq = (0, n.useCallback)((e) => {
                eH(e);
              }, []),
              eX = (0, n.useCallback)(() => {
                eH(null);
              }, []),
              e$ = (0, n.useCallback)((e) => {
                em(e);
              }, []),
              eW = (0, n.useCallback)((e) => {
                ep(e);
              }, []),
              eY = (0, n.useCallback)(
                (e) => {
                  ((null == e ? void 0 : e.campaignId) && D[e.campaignId]
                    ? P(D[e.campaignId])
                    : P(null),
                    T(!0));
                },
                [D],
              ),
              eJ = (0, n.useRef)(!1),
              e0 = (0, n.useCallback)(async (e) => {
                let { filters: t, sort: a } = e,
                  r = await (0, i.EV)({
                    limit: 100,
                    ...(Object.keys(t).length > 0 ? { filters: t } : {}),
                    ...(a
                      ? { sortByColumn: a.column, sortByDirection: a.direction }
                      : {}),
                  });
                if (r.error) {
                  var l;
                  alert(
                    null !== (l = r.error.errorMessage) && void 0 !== l
                      ? l
                      : "Failed to load campaigns",
                  );
                  return;
                }
                let s = r.data;
                s && (w(s.items), k(s.nextPage));
              }, []);
            (0, n.useEffect)(() => {
              if (!eJ.current) {
                eJ.current = !0;
                return;
              }
              e0({ filters: M, sort: F });
            }, [M, F, e0]);
            let e2 = (0, n.useCallback)(async () => {
                if (!C) return;
                I(!0);
                let e = await (0, i.EV)({
                  page: C,
                  limit: 100,
                  ...(Object.keys(M).length > 0 ? { filters: M } : {}),
                  ...(F
                    ? { sortByColumn: F.column, sortByDirection: F.direction }
                    : {}),
                });
                if (e.error) {
                  var t;
                  (alert(
                    null !== (t = e.error.errorMessage) && void 0 !== t
                      ? t
                      : "Failed to load more campaigns",
                  ),
                    I(!1));
                  return;
                }
                let a = e.data;
                if (!a) {
                  I(!1);
                  return;
                }
                (w((e) => [...e, ...a.items]), k(a.nextPage), I(!1));
              }, [C, M, F]),
              e1 = (0, n.useCallback)(async () => {
                let e = eg.trim();
                if (!e) {
                  alert("Enter a code to redeem");
                  return;
                }
                ef(!0);
                let t = await (0, i.XT)({ code: e });
                if (t.error) {
                  var a;
                  (alert(
                    null !== (a = t.error.errorMessage) && void 0 !== a
                      ? a
                      : "Failed to redeem code",
                  ),
                    ef(!1));
                  return;
                }
                (eh(""),
                  alert("Code redeemed successfully"),
                  await y.replace(y.asPath),
                  ef(!1));
              }, [eg, y]),
              e3 = (0, n.useCallback)(async () => {
                try {
                  await ey();
                } catch (e) {
                  e instanceof Error
                    ? alert(e.message)
                    : alert("Failed to load rewards");
                }
              }, [ey]),
              e5 = (0, n.useCallback)(
                async (e) => {
                  ek(e);
                  let t = await (0, i.uh)(e);
                  if (t.error) {
                    var a;
                    (alert(
                      null !== (a = t.error.errorMessage) && void 0 !== a
                        ? a
                        : "Failed to reveal code",
                    ),
                      ek(null));
                    return;
                  }
                  (await ey().catch((e) => {
                    alert(
                      e instanceof Error ? e.message : "Failed to reveal code",
                    );
                  }),
                    ek(null));
                },
                [ey],
              );
            return (0, l.jsxs)("main", {
              className: "p-4",
              children: [
                (0, l.jsx)(u.k, { initialRewards: r, items: t }),
                (0, l.jsx)(h.S, {
                  campaigns: N,
                  campaignFilters: E,
                  setCampaignFilters: R,
                  campaignSort: F,
                  onCampaignSortClick: L,
                  onLoadMoreCampaigns: e2,
                  campaignsNextPage: C,
                  loadingMoreCampaigns: S,
                  onCreateCampaign: () => ec(!0),
                  campaignExportError: ee,
                  onCreateCodes: eY,
                  onShowCampaignDetails: eV,
                  onExportCampaignCodes: e_,
                  exportingCampaignId: Y,
                  onEditCampaign: e$,
                  onDeleteCampaign: eW,
                  selectedCampaign: B,
                  campaignCodes: _,
                  campaignCodesError: Q,
                  loadingCampaignCodes: q,
                  campaignsById: D,
                  items: t,
                  onOpenUser: eE,
                  onOpenRedemptionHistory: eq,
                  campaignCodesNextToken: K,
                  loadMoreCampaignCodes: ez,
                  loadingMoreCampaignCodes: $,
                  actionFeedback: ea,
                  onDismissActionFeedback: ei,
                }),
                (0, l.jsx)(b.a, {
                  selectedCampaign: B,
                  campaignRedemptions: eR,
                  campaignRedemptionsError: eZ,
                  loadingCampaignRedemptions: eL,
                  loadingMoreCampaignRedemptions: eU,
                  campaignRedemptionsNextToken: eA,
                  onRefresh: eK,
                  onLoadMore: eG,
                  onOpenUser: eE,
                }),
                eQ &&
                  (0, l.jsx)(d.Z, { code: eQ, onClose: eX, onSelectUser: eE }),
                (0, l.jsx)(f.G, {
                  redeemValue: eg,
                  onRedeemValueChange: (e) => eh(e),
                  onRedeemCode: e1,
                  redeeming: eb,
                  onListUserRewards: e3,
                  rewardsLoading: ej,
                  rewardsError: eN,
                  userRewards: ew,
                  onRevealUserReward: e5,
                  revealingItemId: eC,
                }),
                (0, l.jsx)(o.Z, {
                  playFabId: eS,
                  onClose: () => {
                    eI(null);
                  },
                }),
                ed &&
                  (0, l.jsx)(m.X, {
                    onClose: () => ec(!1),
                    onCreated: async () => {
                      await y.replace(y.asPath);
                    },
                  }),
                eu &&
                  (0, l.jsx)(x.u, {
                    campaign: eu,
                    onClose: () => em(null),
                    onUpdated: async () => {
                      await y.replace(y.asPath);
                    },
                  }),
                ex &&
                  (0, l.jsx)(p.E, {
                    campaign: ex,
                    onClose: () => ep(null),
                    onDeleted: async () => {
                      await y.replace(y.asPath);
                    },
                    onActionStart: es,
                    onActionResolve: eo,
                  }),
                U &&
                  (0, l.jsx)(g._, {
                    campaigns: N,
                    items: t,
                    preselectedCampaign: null != Z ? Z : void 0,
                    onClose: () => {
                      (T(!1), P(null));
                    },
                    onCreated: async () => {
                      (T(!1), P(null), await y.replace(y.asPath));
                    },
                  }),
              ],
            });
          }
          r();
        } catch (e) {
          r(e);
        }
      });
    },
  },
  function (e) {
    (e.O(0, [956, 596, 774, 888, 179], function () {
      return e((e.s = 75505));
    }),
      (_N_E = e.O()));
  },
]);
