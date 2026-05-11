(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3550],
  {
    1934: (e, t, a) => {
      "use strict";
      a.a(e, async (e, l) => {
        try {
          a.d(t, { Q: () => u });
          var s = a(2183),
            r = a(75109),
            n = a(21943),
            i = a.n(n),
            d = a(36439),
            o = a(15711),
            c = a(55109),
            m = e([r, c]);
          [r, c] = m.then ? (await m)() : m;
          let x = ["ASSIGNED", "UNIQUE", "STATIC"];
          function u(e) {
            var t, a, l, n;
            let {
                campaigns: m,
                items: u,
                preselectedCampaign: p,
                onClose: g,
                onCreated: h,
              } = e,
              [b, f] = (0, d.useState)("STATIC"),
              [y, v] = (0, d.useState)(
                null !=
                  (l =
                    null != (a = null == p ? void 0 : p.id)
                      ? a
                      : null == (t = m[0])
                        ? void 0
                        : t.id)
                  ? l
                  : "",
              ),
              [j, N] = (0, d.useState)([]),
              [w, C] = (0, d.useState)(""),
              k = (0, d.useMemo)(
                () =>
                  w
                    .split(/[\n,]/)
                    .map((e) => e.trim())
                    .filter(Boolean),
                [w],
              ),
              [S, I] = (0, d.useState)(10),
              [A, E] = (0, d.useState)(""),
              F = (0, d.useMemo)(
                () =>
                  A.split(/[\n,]/)
                    .map((e) => e.trim().toUpperCase())
                    .filter(Boolean),
                [A],
              ),
              [R, L] = (0, d.useState)(!1),
              [D, M] = (0, d.useState)(null),
              [T, U] = (0, d.useState)(null),
              P = p || m.find((e) => e.id === y);
            async function B() {
              M(null);
              let e = j.map((e) => e.trim()).filter(Boolean);
              if (0 === e.length) return void M("Select at least one item");
              if (e.length > r.W4X)
                return void M(
                  "Select up to ".concat(r.W4X, " rewards per code"),
                );
              if (!y) return void M("Select a campaign");
              if ("ASSIGNED" === b && 0 === k.length)
                return void M("Enter at least one PlayFab ID");
              if ("UNIQUE" === b && (!S || S < 1))
                return void M("Count must be a positive integer");
              if ("STATIC" === b && 0 === F.length)
                return void M("Enter at least one code");
              let t =
                  "ASSIGNED" === b ? k.length : "UNIQUE" === b ? S : F.length,
                a = r.bfp[b],
                l =
                  "ASSIGNED" === b
                    ? i()(k, a).map((t) => ({
                        codeKind: "ASSIGNED",
                        userIds: t,
                        itemIds: e,
                        campaignId: y,
                      }))
                    : "UNIQUE" === b
                      ? (function (e, t) {
                          if (t <= 0 || e <= 0) return [];
                          let a = [],
                            l = e;
                          for (; l > 0; ) {
                            let e = Math.min(t, l);
                            (a.push(e), (l -= e));
                          }
                          return a;
                        })(S, a).map((t) => ({
                          codeKind: "UNIQUE",
                          count: t,
                          itemIds: e,
                          campaignId: y,
                        }))
                      : i()(F, a).map((t) => ({
                          codeKind: "STATIC",
                          codes: t,
                          itemIds: e,
                          campaignId: y,
                        }));
              (L(!0), U("Starting code creation…"));
              let s = 0;
              try {
                for (let e = 0; e < l.length; e += 1) {
                  var n, d, o, m;
                  U(
                    "Creating batch "
                      .concat(e + 1, " of ")
                      .concat(l.length, " (")
                      .concat(s.toLocaleString(), "/")
                      .concat(t.toLocaleString(), " codes created)…"),
                  );
                  let a = await (0, c.L7)(l[e]);
                  if (a.error)
                    return void M(
                      "Batch "
                        .concat(e + 1, " of ")
                        .concat(l.length, " failed: ")
                        .concat(
                          null != (o = a.error.errorMessage)
                            ? o
                            : "Failed to create codes",
                        ),
                    );
                  let r =
                    null !=
                    (m =
                      null == (d = a.data) || null == (n = d.codes)
                        ? void 0
                        : n.length)
                      ? m
                      : 0;
                  ((s += r),
                    U(
                      "Completed batch "
                        .concat(e + 1, " of ")
                        .concat(l.length, ": ")
                        .concat(s.toLocaleString(), "/")
                        .concat(t.toLocaleString(), " codes created"),
                    ));
                }
                (h(), g());
              } catch (e) {
                M(
                  e instanceof Error
                    ? e.message
                    : "Failed to create codes. Please retry.",
                );
              } finally {
                L(!1);
              }
            }
            return (0, s.jsx)("div", {
              className:
                "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3",
              role: "dialog",
              "aria-modal": "true",
              "aria-labelledby": "create-codes-title",
              children: (0, s.jsxs)("div", {
                className:
                  "max-h-[calc(100vh-4rem)] w-full max-w-2xl overflow-y-auto rounded bg-white p-4 text-gray-900 shadow-xl",
                children: [
                  (0, s.jsxs)("div", {
                    className: "mb-3 flex items-center justify-between",
                    children: [
                      (0, s.jsx)("h2", {
                        id: "create-codes-title",
                        className: "text-lg font-semibold",
                        children: "Create Codes",
                      }),
                      (0, s.jsx)(o.A, {
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
                  D &&
                    (0, s.jsx)("p", {
                      className: "text-red-500 mb-3 text-sm font-semibold",
                      role: "alert",
                      children: D,
                    }),
                  T &&
                    (0, s.jsx)("p", {
                      className: "mb-3 text-sm text-indigo-700",
                      role: "status",
                      "aria-live": "polite",
                      children: T,
                    }),
                  (0, s.jsxs)("div", {
                    className: "flex flex-col gap-3",
                    children: [
                      (0, s.jsxs)("div", {
                        children: [
                          (0, s.jsx)("label", {
                            htmlFor: "create-codes-campaign",
                            className: "mb-1 block text-sm font-medium",
                            children: "Campaign",
                          }),
                          P
                            ? (0, s.jsxs)("div", {
                                className:
                                  "rounded border border-gray-200 bg-gray-50 p-2 text-sm",
                                children: [
                                  (0, s.jsx)("div", {
                                    className: "font-medium",
                                    children:
                                      null != (n = P.name)
                                        ? n
                                        : "Unnamed Campaign",
                                  }),
                                  (0, s.jsx)("div", {
                                    className:
                                      "font-mono text-xs text-gray-500",
                                    children: P.id,
                                  }),
                                ],
                              })
                            : (0, s.jsxs)("select", {
                                id: "create-codes-campaign",
                                value: y,
                                onChange: (e) => v(e.target.value),
                                disabled: 0 === m.length,
                                className:
                                  "w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100",
                                "aria-invalid": (
                                  null == D ? void 0 : D.includes("campaign")
                                )
                                  ? "true"
                                  : "false",
                                children: [
                                  (0, s.jsx)("option", {
                                    value: "",
                                    disabled: !0,
                                    children: "Select a campaign…",
                                  }),
                                  m.map((e) =>
                                    (0, s.jsxs)(
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
                      (0, s.jsxs)("div", {
                        children: [
                          (0, s.jsx)("label", {
                            htmlFor: "create-codes-type",
                            className: "mb-1 block text-sm font-medium",
                            children: "Code Type",
                          }),
                          (0, s.jsxs)("select", {
                            id: "create-codes-type",
                            value: b,
                            onChange: (e) => {
                              let t = e.target.value;
                              x.some((e) => e === t) &&
                                (f(t), C(""), E(""), I(10));
                            },
                            className:
                              "w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none",
                            children: [
                              (0, s.jsx)("option", {
                                value: "ASSIGNED",
                                children: "Assigned",
                              }),
                              (0, s.jsx)("option", {
                                value: "UNIQUE",
                                children: "Unique",
                              }),
                              (0, s.jsx)("option", {
                                value: "STATIC",
                                children: "Static",
                              }),
                            ],
                          }),
                        ],
                      }),
                      "ASSIGNED" === b &&
                        (0, s.jsxs)("div", {
                          children: [
                            (0, s.jsx)("label", {
                              htmlFor: "create-codes-user-ids",
                              className: "mb-1 block text-sm font-medium",
                              children: "PlayFab User IDs",
                            }),
                            (0, s.jsx)("textarea", {
                              id: "create-codes-user-ids",
                              value: w,
                              onChange: (e) => C(e.target.value),
                              rows: 4,
                              placeholder: "One per line or comma-separated",
                              className:
                                "w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none",
                              "aria-invalid": (
                                null == D ? void 0 : D.includes("PlayFab ID")
                              )
                                ? "true"
                                : "false",
                            }),
                            (0, s.jsxs)("p", {
                              className: "mt-1 text-xs text-gray-500",
                              children: [
                                "Parsed ",
                                k.length.toLocaleString(),
                                " user ID",
                                1 === k.length ? "" : "s",
                                " (sending in batches of up to ",
                                r.bfp[b].toLocaleString(),
                                ")",
                              ],
                            }),
                          ],
                        }),
                      "UNIQUE" === b &&
                        (0, s.jsxs)("div", {
                          children: [
                            (0, s.jsx)("label", {
                              htmlFor: "create-codes-count",
                              className: "mb-1 block text-sm font-medium",
                              children: "Count",
                            }),
                            (0, s.jsx)("input", {
                              id: "create-codes-count",
                              type: "number",
                              min: 1,
                              value: Number.isNaN(S) ? "" : S,
                              onChange: (e) => I(parseInt(e.target.value, 10)),
                              className:
                                "w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none",
                              "aria-invalid": (
                                null == D ? void 0 : D.includes("Count")
                              )
                                ? "true"
                                : "false",
                            }),
                            (0, s.jsxs)("p", {
                              className: "mt-1 text-xs text-gray-500",
                              children: [
                                "Requests are sent in batches of up to",
                                " ",
                                r.bfp[b].toLocaleString(),
                                ". Single-use codes lock after redemption (enforced via lastRedeemedAt).",
                              ],
                            }),
                          ],
                        }),
                      "STATIC" === b &&
                        (0, s.jsxs)("div", {
                          children: [
                            (0, s.jsx)("label", {
                              htmlFor: "create-codes-static",
                              className: "mb-1 block text-sm font-medium",
                              children: "Codes",
                            }),
                            (0, s.jsx)("textarea", {
                              id: "create-codes-static",
                              value: A,
                              onChange: (e) => E(e.target.value.toUpperCase()),
                              rows: 4,
                              placeholder: "One per line or comma-separated",
                              className:
                                "w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none",
                              "aria-invalid": (
                                null == D ? void 0 : D.includes("code")
                              )
                                ? "true"
                                : "false",
                            }),
                            (0, s.jsxs)("p", {
                              className: "mt-1 text-xs text-gray-500",
                              children: [
                                "Parsed ",
                                F.length.toLocaleString(),
                                " code",
                                1 === F.length ? "" : "s",
                                " (sending in batches of up to ",
                                r.bfp[b].toLocaleString(),
                                ")",
                              ],
                            }),
                          ],
                        }),
                      (0, s.jsxs)("div", {
                        children: [
                          (0, s.jsx)("label", {
                            htmlFor: "create-codes-item",
                            className: "mb-1 block text-sm font-medium",
                            children: "Item(s)",
                          }),
                          (0, s.jsxs)("select", {
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
                              null == D ? void 0 : D.includes("item")
                            )
                              ? "true"
                              : "false",
                            children: [
                              (0, s.jsx)("option", {
                                value: "",
                                disabled: !0,
                                children: "Select an item…",
                              }),
                              u.map((e) => {
                                let t = [
                                  e.title,
                                  e.friendlyId
                                    ? "— ".concat(e.friendlyId)
                                    : null,
                                  "— ".concat(e.id),
                                ].filter(Boolean);
                                return (0, s.jsx)(
                                  "option",
                                  { value: e.id, children: t.join(" ") },
                                  e.id,
                                );
                              }),
                            ],
                          }),
                          (0, s.jsx)("p", {
                            className: "mt-1 text-xs text-gray-500",
                            children:
                              0 === j.length
                                ? "Select one or more rewards (Cmd/Ctrl + click to multi-select). Limit ".concat(
                                    r.W4X,
                                    ".",
                                  )
                                : ""
                                    .concat(j.length, " reward")
                                    .concat(
                                      1 === j.length ? "" : "s",
                                      " selected (max ",
                                    )
                                    .concat(r.W4X, ")"),
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "flex justify-end gap-2 pt-2",
                        children: [
                          (0, s.jsx)(o.A, {
                            type: "button",
                            variant: "dark",
                            onClick: g,
                            className:
                              "rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-100",
                            disabled: R,
                            children: "Cancel",
                          }),
                          (0, s.jsx)(o.A, {
                            type: "button",
                            variant: "darkBackground",
                            onClick: B,
                            disabled: R,
                            loading: R,
                            className:
                              "rounded border border-indigo-600 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed disabled:border-indigo-300 disabled:bg-indigo-100 disabled:text-indigo-700 disabled:opacity-100 disabled:shadow-none",
                            children: R ? "Creating…" : "Create Codes",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            });
          }
          l();
        } catch (e) {
          l(e);
        }
      });
    },
    7989: (e, t, a) => {
      "use strict";
      a.d(t, { v: () => n });
      var l = a(2183),
        s = a(15711),
        r = a(19608);
      function n(e) {
        var t;
        let {
          selectedCampaign: a,
          campaignRedemptions: n,
          campaignRedemptionsError: i,
          loadingCampaignRedemptions: d,
          loadingMoreCampaignRedemptions: o,
          campaignRedemptionsNextToken: c,
          onRefresh: m,
          onLoadMore: u,
          onOpenUser: x,
        } = e;
        return (0, l.jsxs)("div", {
          className:
            "mx-auto mt-4 max-w-7xl rounded-lg bg-white p-4 text-gray-900 shadow",
          children: [
            (0, l.jsxs)("div", {
              className:
                "mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",
              children: [
                (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsx)("h2", {
                      className: "text-2xl font-bold",
                      children: "Redemption History",
                    }),
                    a
                      ? (0, l.jsxs)("p", {
                          className: "text-sm text-gray-700",
                          children: [
                            "Campaign:",
                            " ",
                            (0, l.jsx)("span", {
                              className: "font-semibold",
                              children:
                                null != (t = a.name) ? t : "Unnamed Campaign",
                            }),
                            " ",
                            (0, l.jsxs)("span", {
                              className: "font-mono text-xs text-gray-500",
                              children: ["(", a.id, ")"],
                            }),
                          ],
                        })
                      : (0, l.jsx)("p", {
                          className: "text-sm text-gray-700",
                          children:
                            'Select "View Details" from a campaign to view recent activity.',
                        }),
                  ],
                }),
                a &&
                  (0, l.jsx)(s.A, {
                    type: "button",
                    variant: "dark",
                    onClick: m,
                    disabled: d || o,
                    loading: d,
                    className:
                      "self-start rounded border border-gray-300 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60 sm:self-auto",
                    children: d ? "Refreshing…" : "Refresh",
                  }),
              ],
            }),
            i
              ? (0, l.jsx)("p", {
                  className: "text-sm font-semibold text-red-500",
                  children: i,
                })
              : d
                ? (0, l.jsx)("p", {
                    className: "text-sm text-gray-700",
                    children: "Loading…",
                  })
                : a
                  ? 0 === n.length
                    ? (0, l.jsx)("p", {
                        className: "text-sm text-gray-700",
                        children: "No redemptions recorded for this campaign.",
                      })
                    : (0, l.jsx)(r.o, {
                        entries: n,
                        onOpenUser: x,
                        showCodeColumn: !0,
                        loadMore: c
                          ? {
                              hasMore: !0,
                              onLoadMore: u,
                              loading: o,
                              disabled: d,
                            }
                          : void 0,
                      })
                  : (0, l.jsx)("p", {
                      className: "text-sm text-gray-700",
                      children: "Choose a campaign to populate this table.",
                    }),
          ],
        });
      }
    },
    15711: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => d });
      var l = a(2183),
        s = a(36439),
        r = a(26974),
        n = a(96006),
        i = a.n(n);
      function d(e) {
        let {
            variant: t = "normal",
            full: a = !1,
            loading: n,
            disabled: d,
            startIcon: o,
            ...c
          } = e,
          m = (0, s.useMemo)(() => {
            var t;
            return null == (t = e.children) ? void 0 : t.toString();
          }, [e.children]),
          u = (e, a, l, s, r) =>
            "normal" === t
              ? e
              : "darkBackground" === t
                ? a
                : "dark" === t
                  ? l
                  : "green" === t
                    ? r
                    : s;
        return (0, l.jsxs)("button", {
          ...c,
          type: "submit",
          id: m,
          disabled: d,
          className:
            "border-radius-8 group relative inline-flex cursor-pointer items-center justify-center overflow-hidden "
              .concat(e.className, " ")
              .concat(a && "w-full", " ")
              .concat(
                u(
                  "border-yellow-500/50 bg-transparent",
                  "border-yellow-500/50 bg-black/90",
                  "border-black/20 bg-transparent",
                  "border-red-500/80 bg-transparent",
                  "border-teal-500 bg-transparent",
                ),
                " relative z-0 rounded-lg border-2 px-6 py-2 text-base ",
              )
              .concat(
                u(
                  "text-white",
                  "text-white",
                  "text-black",
                  "text-black",
                  "text-white",
                ),
                " transition duration-300 ",
              )
              .concat(
                u(
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
              (0, l.jsx)("div", {
                "html-for": m,
                className:
                  "canhover:group-hover:opacity-100 pointer-events-none absolute top-0 left-0 z-10 h-full w-full overflow-hidden border-transparent opacity-0 shadow-[0_0px_15px_0px_#F1C662] transition duration-300",
                children: (0, l.jsx)(i(), {
                  src: "/images/gold-button-texture-1.jpg",
                  fill: !0,
                  className: "object-cover",
                  alt: "Gold sheen",
                  sizes: "256px",
                }),
              }),
            "green" === t &&
              (0, l.jsxs)("div", {
                "html-for": m,
                className:
                  "pointer-events-none absolute top-0 left-0 z-10 h-full w-full overflow-hidden opacity-100 transition duration-300",
                children: [
                  (0, l.jsx)(i(), {
                    src: "/images/fabric-button-texture_teal-1.jpg",
                    fill: !0,
                    className:
                      "absolute inset-0 z-10 rounded-md transition duration-300 group-hover:brightness-90",
                    alt: "Green back",
                    sizes: "256px",
                  }),
                  (0, l.jsx)("div", {
                    className:
                      "pointer-events-none absolute inset-0 h-full w-full bg-teal-500",
                  }),
                ],
              }),
            "dark" === t &&
              (0, l.jsx)("div", {
                "html-for": m,
                className:
                  "canhover:group-hover:opacity-80 pointer-events-none absolute top-0 left-0 z-10 h-full w-full border-transparent bg-gradient-to-r from-black to-black opacity-0 transition duration-300",
              }),
            "error" === t &&
              (0, l.jsx)("div", {
                "html-for": m,
                className:
                  "canhover:group-hover:opacity-100 pointer-events-none absolute top-0 left-0 z-10 h-full w-full border-transparent bg-gradient-to-r from-red-500 to-red-500 opacity-0 transition duration-300",
              }),
            o &&
              (0, l.jsx)(i(), {
                width: 16,
                height: 16,
                alt: "Link icon",
                className:
                  "canhover:group-hover:invert relative z-10 mr-3 transition duration-300",
                src: o,
              }),
            (0, l.jsx)("span", {
              className: "relative z-20",
              children: e.children,
            }),
            n &&
              (0, l.jsx)("span", {
                className: "relative z-20 ml-3",
                children: (0, l.jsx)(r.A, {}),
              }),
          ],
        });
      }
    },
    19608: (e, t, a) => {
      "use strict";
      a.d(t, { o: () => r });
      var l = a(2183),
        s = a(15711);
      function r(e) {
        let {
          entries: t,
          onOpenUser: a,
          showCodeColumn: r = !0,
          summaryLabel: n,
          loadMore: i,
        } = e;
        return (0, l.jsxs)(l.Fragment, {
          children: [
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
                        r &&
                          (0, l.jsx)("th", {
                            className: "border-b px-3 py-2",
                            children: "Code",
                          }),
                        (0, l.jsx)("th", {
                          className: "border-b px-3 py-2",
                          children: "Redeemed At",
                        }),
                        (0, l.jsx)("th", {
                          className: "border-b px-3 py-2",
                          children: "Master Player ID",
                        }),
                      ],
                    }),
                  }),
                  (0, l.jsx)("tbody", {
                    children: t.map((e) =>
                      (0, l.jsxs)(
                        "tr",
                        {
                          className: "odd:bg-white even:bg-gray-50",
                          children: [
                            r &&
                              (0, l.jsx)("td", {
                                className:
                                  "border-b px-3 py-2 font-mono text-xs text-gray-700",
                                children: e.code,
                              }),
                            (0, l.jsx)("td", {
                              className: "border-b px-3 py-2 text-gray-700",
                              children: new Date(e.redeemedAt).toLocaleString(),
                            }),
                            (0, l.jsx)("td", {
                              className: "border-b px-3 py-2",
                              children: (0, l.jsx)(s.A, {
                                type: "button",
                                variant: "dark",
                                className:
                                  "text-blue-700 hover:text-blue-900 underline underline-offset-2",
                                onClick: () => a(e.masterPlayerId),
                                children: (0, l.jsx)("span", {
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
            (0, l.jsxs)("div", {
              className:
                "mt-3 flex items-center justify-between text-xs text-gray-500",
              children: [
                (0, l.jsx)("span", {
                  children:
                    null != n
                      ? n
                      : ""
                          .concat(t.length, " redemption")
                          .concat(1 === t.length ? "" : "s", " loaded"),
                }),
                (null == i ? void 0 : i.hasMore) &&
                  (0, l.jsx)(s.A, {
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
    21126: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => n });
      var l = a(2183),
        s = a(36439),
        r = a(15711);
      function n(e) {
        let {
            label: t,
            value: a,
            onChange: n,
            helperText: i,
            required: d = !1,
            disabled: o = !1,
          } = e,
          c = (0, s.useId)();
        return (0, l.jsxs)("div", {
          children: [
            (0, l.jsx)("label", {
              className: "mb-1 block text-sm font-medium",
              htmlFor: c,
              children: t,
            }),
            (0, l.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [
                (0, l.jsx)("input", {
                  id: c,
                  type: "datetime-local",
                  className:
                    "w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100",
                  value: (function (e) {
                    if (!e) return "";
                    let t = new Date(e),
                      a = t.getTimezoneOffset();
                    return new Date(t.getTime() - 60 * a * 1e3)
                      .toISOString()
                      .slice(0, 16);
                  })(a),
                  onChange: (e) =>
                    n(
                      (function (e) {
                        if (!e) return null;
                        let t = new Date(e);
                        return Number.isNaN(t.getTime()) ? null : t.getTime();
                      })(e.target.value),
                    ),
                  required: d,
                  disabled: o,
                }),
                null === a || o
                  ? null
                  : (0, l.jsx)(r.A, {
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
              ? (0, l.jsx)("p", {
                  className: "mt-1 text-xs text-gray-500",
                  children: i,
                })
              : null,
          ],
        });
      }
    },
    21408: (e, t, a) => {
      "use strict";
      a.a(e, async (e, l) => {
        try {
          a.d(t, { A: () => o });
          var s = a(2183),
            r = a(36439),
            n = a(55109),
            i = a(15711),
            d = e([n]);
          function o(e) {
            var t, a, l;
            let { playFabId: d, onClose: o } = e,
              [c, m] = (0, r.useState)(!1),
              [u, x] = (0, r.useState)(null);
            return ((0, r.useEffect)(() => {
              let e = !1;
              async function t() {
                if (!d) return;
                m(!0);
                let t = await (0, n.BS)(d);
                if (!e) {
                  var a;
                  (x(null != (a = t.data) ? a : null), m(!1));
                }
              }
              return (
                x(null),
                m(!1),
                t(),
                () => {
                  e = !0;
                }
              );
            }, [d]),
            d)
              ? (0, s.jsx)("div", {
                  className:
                    "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4",
                  children: (0, s.jsxs)("div", {
                    className: "w-full max-w-lg rounded bg-white p-4 shadow-lg",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "mb-3 flex items-center justify-between",
                        children: [
                          (0, s.jsx)("h2", {
                            className: "text-lg font-semibold text-gray-700",
                            children: "User Info",
                          }),
                          (0, s.jsx)(i.A, {
                            type: "button",
                            variant: "dark",
                            className: "text-gray-600 hover:text-gray-800",
                            onClick: o,
                            children: "Close",
                          }),
                        ],
                      }),
                      c
                        ? (0, s.jsx)("p", {
                            className: "text-sm text-gray-700",
                            children: "Loading…",
                          })
                        : u
                          ? (0, s.jsxs)("div", {
                              className: "space-y-1 text-sm text-gray-700",
                              children: [
                                (0, s.jsxs)("div", {
                                  children: [
                                    (0, s.jsx)("span", {
                                      className: "font-semibold",
                                      children: "PlayFab ID:",
                                    }),
                                    " ",
                                    u.playFabId,
                                  ],
                                }),
                                (0, s.jsxs)("div", {
                                  children: [
                                    (0, s.jsx)("span", {
                                      className: "font-semibold",
                                      children: "Display Name:",
                                    }),
                                    " ",
                                    null != (t = u.displayName) ? t : "—",
                                  ],
                                }),
                                (0, s.jsxs)("div", {
                                  children: [
                                    (0, s.jsx)("span", {
                                      className: "font-semibold",
                                      children: "Contact Email:",
                                    }),
                                    " ",
                                    u.contactEmail
                                      ? (0, s.jsx)("a", {
                                          href: "mailto:".concat(
                                            u.contactEmail,
                                          ),
                                          className:
                                            "text-blue-700 hover:text-blue-900 underline underline-offset-2",
                                          children: u.contactEmail,
                                        })
                                      : "—",
                                  ],
                                }),
                                (0, s.jsxs)("div", {
                                  children: [
                                    (0, s.jsx)("span", {
                                      className: "font-semibold",
                                      children: "Created:",
                                    }),
                                    " ",
                                    null != (a = u.created) ? a : "—",
                                  ],
                                }),
                                (0, s.jsxs)("div", {
                                  children: [
                                    (0, s.jsx)("span", {
                                      className: "font-semibold",
                                      children: "Last Login:",
                                    }),
                                    " ",
                                    null != (l = u.lastLogin) ? l : "—",
                                  ],
                                }),
                              ],
                            })
                          : (0, s.jsx)("p", {
                              className: "text-red-700 text-sm",
                              children: "Failed to load user info.",
                            }),
                    ],
                  }),
                })
              : null;
          }
          ((n = (d.then ? (await d)() : d)[0]), l());
        } catch (e) {
          l(e);
        }
      });
    },
    24296: (e, t, a) => {
      "use strict";
      a.d(t, { L: () => i, r: () => n });
      var l = a(80707),
        s = a.n(l),
        r = a(47996);
      function n(e) {
        return [...e].sort((e, t) =>
          e.updatedAt === t.updatedAt
            ? e.playFabItemId.localeCompare(t.playFabItemId)
            : t.updatedAt - e.updatedAt,
        );
      }
      function i(e) {
        var t, a;
        let l = (0, r.parse)(e, { skipEmptyLines: !1, delimiter: "," });
        if (l.errors.length > 0) {
          let [e] = l.errors;
          throw Error(
            null != (t = null == e ? void 0 : e.message)
              ? t
              : "Failed to parse CSV file.",
          );
        }
        let n = [],
          i = 0,
          d = 0;
        for (let e of l.data) {
          let t = null == (a = s().first(e)) ? void 0 : a.trim();
          if (!t) {
            d += 1;
            continue;
          }
          ((i += 1), n.push(t));
        }
        return {
          processedRows: i,
          trimmedCodes: n,
          ignoredCount: d,
          sampleRows: n.slice(0, 5),
        };
      }
    },
    26974: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => s });
      var l = a(2183);
      function s() {
        return (0, l.jsxs)("div", {
          role: "status",
          children: [
            (0, l.jsxs)("svg", {
              "aria-hidden": "true",
              className:
                "inline h-6 w-6 animate-spin fill-yellow-800 text-yellow-300",
              viewBox: "0 0 100 101",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, l.jsx)("path", {
                  d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                  fill: "currentColor",
                }),
                (0, l.jsx)("path", {
                  d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                  fill: "currentFill",
                }),
              ],
            }),
            (0, l.jsx)("span", {
              className: "sr-only",
              children: "Loading...",
            }),
          ],
        });
      }
    },
    30162: (e, t, a) => {
      "use strict";
      a.a(e, async (e, l) => {
        try {
          (a.r(t), a.d(t, { __N_SSP: () => j, default: () => N }));
          var s = a(2183),
            r = a(18652),
            n = a(36439),
            i = a(55109),
            d = a(21408),
            o = a(87287),
            c = a(99435),
            m = a(55656),
            u = a(77024),
            x = a(69196),
            p = a(43947),
            g = a(1934),
            h = a(93485),
            b = a(7989),
            f = a(55649),
            y = a(77752),
            v = e([i, d, o, c, m, u, x, p, g, h]);
          [i, d, o, c, m, u, x, p, g, h] = v.then ? (await v)() : v;
          var j = !0;
          function N(e) {
            let { items: t, campaignsPage: a, externalCodeRewards: l } = e,
              v = (0, r.useRouter)(),
              { addAlert: j } = (0, y.Z)(),
              [N, w] = (0, n.useState)(a.items),
              [C, k] = (0, n.useState)(a.nextPage),
              [S, I] = (0, n.useState)(!1),
              [A, E] = (0, n.useState)({}),
              [F, R] = (0, n.useState)(null),
              L = (0, n.useMemo)(() => {
                let e = {};
                return (
                  A.status && (e.status = A.status),
                  A.distinctCodeKind &&
                    (e.distinctCodeKind = A.distinctCodeKind),
                  e
                );
              }, [A]),
              D = (0, n.useCallback)((e) => {
                R((t) =>
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
            let M = (0, n.useMemo)(
                () => N.reduce((e, t) => ((e[t.id] = t), e), {}),
                [N],
              ),
              [T, U] = (0, n.useState)(!1),
              [P, B] = (0, n.useState)(null),
              [O, z] = (0, n.useState)(null),
              V = (0, n.useRef)(null),
              [_, K] = (0, n.useState)([]),
              [Q, G] = (0, n.useState)(null),
              [q, H] = (0, n.useState)(null),
              [X, W] = (0, n.useState)(!1),
              [Z, Y] = (0, n.useState)(!1),
              [J, $] = (0, n.useState)(null),
              [ee, et] = (0, n.useState)(null),
              [ea, el] = (0, n.useState)([]),
              es = (0, n.useCallback)(
                () =>
                  ""
                    .concat(Date.now().toString(36), "-")
                    .concat(Math.random().toString(36).slice(2, 8)),
                [],
              ),
              er = (0, n.useCallback)(
                (e) => {
                  let t = es();
                  return (
                    el((a) => {
                      var l;
                      return [
                        {
                          id: t,
                          campaignId: e.campaignId,
                          campaignName: e.campaignName,
                          action: e.action,
                          state: null != (l = e.state) ? l : "in-progress",
                          message: e.message,
                        },
                        ...a,
                      ];
                    }),
                    t
                  );
                },
                [es],
              ),
              en = (0, n.useCallback)((e, t, a) => {
                (el((l) =>
                  l.map((l) =>
                    l.id === e ? { ...l, state: t, message: a } : l,
                  ),
                ),
                  "in-progress" !== t &&
                    setTimeout(() => {
                      el((t) => t.filter((t) => t.id !== e));
                    }, 4500));
              }, []),
              ei = (0, n.useCallback)((e) => {
                el((t) => t.filter((t) => t.id !== e));
              }, []),
              ed = (0, n.useCallback)(
                (e, t, a) => {
                  (en(e, t, a),
                    "success" === t
                      ? j({ title: "Done", children: a })
                      : "error" === t &&
                        j({ title: "Action failed", children: a }));
                },
                [j, en],
              ),
              [eo, ec] = (0, n.useState)(!1),
              [em, eu] = (0, n.useState)(null),
              [ex, ep] = (0, n.useState)(null),
              [eg, eh] = (0, n.useState)(""),
              [eb, ef] = (0, n.useState)(!1),
              {
                rewards: ey,
                fetchRewards: ev,
                rewardsLoading: ej,
                rewardsError: eN,
              } = (0, c.u)(),
              ew = ey.externalCodes,
              [eC, ek] = (0, n.useState)(null),
              [eS, eI] = (0, n.useState)(null),
              eA = (0, n.useCallback)((e) => {
                eI(e);
              }, []),
              [eE, eF] = (0, n.useState)([]),
              [eR, eL] = (0, n.useState)(null),
              [eD, eM] = (0, n.useState)(!1),
              [eT, eU] = (0, n.useState)(!1),
              [eP, eB] = (0, n.useState)(null),
              eO = (0, n.useCallback)(async (e) => {
                var t, a, l;
                (K([]), G(null), H(null), W(!0), Y(!1));
                let s = await (0, i.KM)({ campaignId: e, limit: 50 });
                if (V.current === e) {
                  if (s.error)
                    (H(
                      null != (t = s.error.errorMessage)
                        ? t
                        : "Failed to load campaign codes",
                    ),
                      K([]),
                      G(null));
                  else {
                    let e = s.data;
                    (K(null != (a = null == e ? void 0 : e.items) ? a : []),
                      G(
                        null != (l = null == e ? void 0 : e.nextToken)
                          ? l
                          : null,
                      ));
                  }
                  V.current === e && W(!1);
                }
              }, []),
              ez = (0, n.useCallback)(async (e) => {
                var t, a, l;
                (eF([]), eL(null), eB(null), eM(!0), eU(!1));
                let s = await (0, i.i)({ campaignId: e, limit: 50 });
                if (V.current === e) {
                  if (s.error)
                    (eB(
                      null != (t = s.error.errorMessage)
                        ? t
                        : "Failed to load redemption history",
                    ),
                      eF([]),
                      eL(null));
                  else {
                    let e = s.data;
                    (eF(null != (a = null == e ? void 0 : e.items) ? a : []),
                      eL(
                        null != (l = null == e ? void 0 : e.nextToken)
                          ? l
                          : null,
                      ));
                  }
                  V.current === e && eM(!1);
                }
              }, []),
              eV = (0, n.useCallback)(
                async (e) => {
                  (z(e),
                    (V.current = e.id),
                    await Promise.allSettled([eO(e.id), ez(e.id)]));
                },
                [eO, ez],
              ),
              e_ = (0, n.useCallback)(
                async (e) => {
                  var t, a;
                  (et(null), $(e));
                  let l = null == (t = M[e]) ? void 0 : t.name,
                    s = er({
                      action: "export",
                      campaignId: e,
                      campaignName: l,
                      message: l
                        ? 'Exporting "'.concat(l, '" codes…')
                        : "Exporting campaign codes…",
                    });
                  try {
                    let t = await (0, i.p8)({ campaignId: e });
                    if (t.error) {
                      let e =
                        null != (a = t.error.errorMessage)
                          ? a
                          : "Failed to export campaign codes.";
                      (et(e),
                        en(s, "error", e),
                        j({ title: "Export failed", children: e }));
                      return;
                    }
                    (en(
                      s,
                      "success",
                      l
                        ? 'Export ready for "'.concat(
                            l,
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
                      en(s, "error", e),
                      j({ title: "Export failed", children: e }));
                  } finally {
                    $(null);
                  }
                },
                [j, er, M, en],
              ),
              eK = (0, n.useCallback)(async () => {
                var e, t;
                if (!O || !Q) return;
                let a = O.id;
                (Y(!0), H(null));
                let l = await (0, i.KM)({
                  campaignId: a,
                  limit: 50,
                  cursor: Q,
                });
                if (V.current === a) {
                  if (l.error)
                    H(
                      null != (e = l.error.errorMessage)
                        ? e
                        : "Failed to load more campaign codes",
                    );
                  else {
                    let e = l.data;
                    e &&
                      (K((t) => {
                        var a;
                        return [...t, ...(null != (a = e.items) ? a : [])];
                      }),
                      G(null != (t = e.nextToken) ? t : null));
                  }
                  V.current === a && Y(!1);
                }
              }, [Q, O]),
              eQ = (0, n.useCallback)(async () => {
                O && (await ez(O.id));
              }, [ez, O]),
              eG = (0, n.useCallback)(async () => {
                var e, t;
                if (!O || !eR) return;
                let a = O.id;
                eU(!0);
                let l = await (0, i.i)({
                  campaignId: a,
                  limit: 50,
                  cursor: eR,
                });
                if (V.current === a) {
                  if (l.error)
                    eB(
                      null != (e = l.error.errorMessage)
                        ? e
                        : "Failed to load redemption history",
                    );
                  else {
                    let e = l.data;
                    (eF((t) => {
                      var a;
                      return [
                        ...t,
                        ...(null != (a = null == e ? void 0 : e.items)
                          ? a
                          : []),
                      ];
                    }),
                      eL(
                        null != (t = null == e ? void 0 : e.nextToken)
                          ? t
                          : null,
                      ),
                      eB(null));
                  }
                  V.current === a && eU(!1);
                }
              }, [eR, O]),
              [eq, eH] = (0, n.useState)(null),
              eX = (0, n.useCallback)((e) => {
                eH(e);
              }, []),
              eW = (0, n.useCallback)(() => {
                eH(null);
              }, []),
              eZ = (0, n.useCallback)((e) => {
                eu(e);
              }, []),
              eY = (0, n.useCallback)((e) => {
                ep(e);
              }, []),
              eJ = (0, n.useCallback)(
                (e) => {
                  ((null == e ? void 0 : e.campaignId) && M[e.campaignId]
                    ? B(M[e.campaignId])
                    : B(null),
                    U(!0));
                },
                [M],
              ),
              e$ = (0, n.useRef)(!1),
              e0 = (0, n.useCallback)(async (e) => {
                let { filters: t, sort: a } = e,
                  l = await (0, i.HO)({
                    limit: 100,
                    ...(Object.keys(t).length > 0 ? { filters: t } : {}),
                    ...(a
                      ? { sortByColumn: a.column, sortByDirection: a.direction }
                      : {}),
                  });
                if (l.error) {
                  var s;
                  alert(
                    null != (s = l.error.errorMessage)
                      ? s
                      : "Failed to load campaigns",
                  );
                  return;
                }
                let r = l.data;
                r && (w(r.items), k(r.nextPage));
              }, []);
            (0, n.useEffect)(() => {
              if (!e$.current) {
                e$.current = !0;
                return;
              }
              e0({ filters: L, sort: F });
            }, [L, F, e0]);
            let e1 = (0, n.useCallback)(async () => {
                if (!C) return;
                I(!0);
                let e = await (0, i.HO)({
                  page: C,
                  limit: 100,
                  ...(Object.keys(L).length > 0 ? { filters: L } : {}),
                  ...(F
                    ? { sortByColumn: F.column, sortByDirection: F.direction }
                    : {}),
                });
                if (e.error) {
                  var t;
                  (alert(
                    null != (t = e.error.errorMessage)
                      ? t
                      : "Failed to load more campaigns",
                  ),
                    I(!1));
                  return;
                }
                let a = e.data;
                if (!a) return void I(!1);
                (w((e) => [...e, ...a.items]), k(a.nextPage), I(!1));
              }, [C, L, F]),
              e2 = (0, n.useCallback)(async () => {
                let e = eg.trim();
                if (!e) return void alert("Enter a code to redeem");
                ef(!0);
                let t = await (0, i.yM)({ code: e });
                if (t.error) {
                  var a;
                  (alert(
                    null != (a = t.error.errorMessage)
                      ? a
                      : "Failed to redeem code",
                  ),
                    ef(!1));
                  return;
                }
                (eh(""),
                  alert("Code redeemed successfully"),
                  await v.replace(v.asPath),
                  ef(!1));
              }, [eg, v]),
              e3 = (0, n.useCallback)(async () => {
                try {
                  await ev();
                } catch (e) {
                  e instanceof Error
                    ? alert(e.message)
                    : alert("Failed to load rewards");
                }
              }, [ev]),
              e5 = (0, n.useCallback)(
                async (e) => {
                  ek(e);
                  let t = await (0, i.p6)(e);
                  if (t.error) {
                    var a;
                    (alert(
                      null != (a = t.error.errorMessage)
                        ? a
                        : "Failed to reveal code",
                    ),
                      ek(null));
                    return;
                  }
                  (await ev().catch((e) => {
                    alert(
                      e instanceof Error ? e.message : "Failed to reveal code",
                    );
                  }),
                    ek(null));
                },
                [ev],
              );
            return (0, s.jsxs)("main", {
              className: "p-4",
              children: [
                (0, s.jsx)(m.k, { initialRewards: l, items: t }),
                (0, s.jsx)(h.z, {
                  campaigns: N,
                  campaignFilters: A,
                  setCampaignFilters: E,
                  campaignSort: F,
                  onCampaignSortClick: D,
                  onLoadMoreCampaigns: e1,
                  campaignsNextPage: C,
                  loadingMoreCampaigns: S,
                  onCreateCampaign: () => ec(!0),
                  campaignExportError: ee,
                  onCreateCodes: eJ,
                  onShowCampaignDetails: eV,
                  onExportCampaignCodes: e_,
                  exportingCampaignId: J,
                  onEditCampaign: eZ,
                  onDeleteCampaign: eY,
                  selectedCampaign: O,
                  campaignCodes: _,
                  campaignCodesError: q,
                  loadingCampaignCodes: X,
                  campaignsById: M,
                  items: t,
                  onOpenUser: eA,
                  onOpenRedemptionHistory: eX,
                  campaignCodesNextToken: Q,
                  loadMoreCampaignCodes: eK,
                  loadingMoreCampaignCodes: Z,
                  actionFeedback: ea,
                  onDismissActionFeedback: ei,
                }),
                (0, s.jsx)(b.v, {
                  selectedCampaign: O,
                  campaignRedemptions: eE,
                  campaignRedemptionsError: eP,
                  loadingCampaignRedemptions: eD,
                  loadingMoreCampaignRedemptions: eT,
                  campaignRedemptionsNextToken: eR,
                  onRefresh: eQ,
                  onLoadMore: eG,
                  onOpenUser: eA,
                }),
                eq &&
                  (0, s.jsx)(o.A, { code: eq, onClose: eW, onSelectUser: eA }),
                (0, s.jsx)(f.Z, {
                  redeemValue: eg,
                  onRedeemValueChange: (e) => eh(e),
                  onRedeemCode: e2,
                  redeeming: eb,
                  onListUserRewards: e3,
                  rewardsLoading: ej,
                  rewardsError: eN,
                  userRewards: ew,
                  onRevealUserReward: e5,
                  revealingItemId: eC,
                }),
                (0, s.jsx)(d.A, {
                  playFabId: eS,
                  onClose: () => {
                    eI(null);
                  },
                }),
                eo &&
                  (0, s.jsx)(u.S, {
                    onClose: () => ec(!1),
                    onCreated: async () => {
                      await v.replace(v.asPath);
                    },
                  }),
                em &&
                  (0, s.jsx)(x.S, {
                    campaign: em,
                    onClose: () => eu(null),
                    onUpdated: async () => {
                      await v.replace(v.asPath);
                    },
                  }),
                ex &&
                  (0, s.jsx)(p.V, {
                    campaign: ex,
                    onClose: () => ep(null),
                    onDeleted: async () => {
                      await v.replace(v.asPath);
                    },
                    onActionStart: er,
                    onActionResolve: ed,
                  }),
                T &&
                  (0, s.jsx)(g.Q, {
                    campaigns: N,
                    items: t,
                    preselectedCampaign: null != P ? P : void 0,
                    onClose: () => {
                      (U(!1), B(null));
                    },
                    onCreated: async () => {
                      (U(!1), B(null), await v.replace(v.asPath));
                    },
                  }),
              ],
            });
          }
          l();
        } catch (e) {
          l(e);
        }
      });
    },
    43947: (e, t, a) => {
      "use strict";
      a.a(e, async (e, l) => {
        try {
          a.d(t, { V: () => d });
          var s = a(2183),
            r = a(15711),
            n = a(55109),
            i = e([n]);
          function d(e) {
            var t, a, l;
            let {
                campaign: i,
                onClose: d,
                onDeleted: o,
                onActionStart: c,
                onActionResolve: m,
              } = e,
              u =
                (null != (t = i.staticCodeCount) ? t : 0) +
                (null != (a = i.uniqueCodeCount) ? a : 0) +
                (null != (l = i.assignedCodeCount) ? l : 0);
            async function x() {
              var e, t;
              let a =
                null !=
                (e =
                  null == c
                    ? void 0
                    : c({
                        action: "delete",
                        campaignId: i.id,
                        campaignName: i.name,
                        message: 'Deleting "'.concat(i.name, '"…'),
                      }))
                  ? e
                  : "";
              d();
              let l = await (0, n.K_)({ id: i.id });
              if (l.error) {
                let e =
                  null != (t = l.error.errorMessage)
                    ? t
                    : "Failed to delete campaign";
                a && (null == m || m(a, "error", e));
                return;
              }
              (a &&
                (null == m ||
                  m(a, "success", 'Deleted "'.concat(i.name, '".'))),
                o());
            }
            return (0, s.jsx)("div", {
              className:
                "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3",
              role: "dialog",
              "aria-modal": "true",
              "aria-labelledby": "delete-campaign-title",
              children: (0, s.jsxs)("div", {
                className:
                  "w-full max-w-lg rounded bg-white p-4 text-gray-900 shadow-xl",
                children: [
                  (0, s.jsxs)("div", {
                    className: "mb-3",
                    children: [
                      (0, s.jsx)("h2", {
                        id: "delete-campaign-title",
                        className: "text-lg font-semibold",
                        children: "Delete Campaign",
                      }),
                      (0, s.jsxs)("p", {
                        className: "mt-1 text-sm text-gray-700",
                        children: [
                          "Deleting ",
                          (0, s.jsx)("span", {
                            className: "font-semibold",
                            children: i.name,
                          }),
                          " will remove ",
                          u,
                          " code",
                          1 === u ? "" : "s",
                          ". This cannot be undone.",
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "flex justify-end gap-2",
                    children: [
                      (0, s.jsx)(r.A, {
                        type: "button",
                        variant: "dark",
                        onClick: d,
                        className:
                          "rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-100",
                        "aria-label": "Cancel delete campaign",
                        children: "Cancel",
                      }),
                      (0, s.jsx)(r.A, {
                        type: "button",
                        variant: "error",
                        onClick: x,
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
          ((n = (i.then ? (await i)() : i)[0]), l());
        } catch (e) {
          l(e);
        }
      });
    },
    51400: (e, t, a) => {
      "use strict";
      a.d(t, { y: () => n });
      var l = a(2183),
        s = a(15711),
        r = a(90454);
      function n(e) {
        var t;
        let {
          selectedCampaign: a,
          campaignCodes: n,
          campaignCodesError: i,
          loadingCampaignCodes: d,
          campaignsById: o,
          items: c,
          onOpenUser: m,
          onOpenRedemptionHistory: u,
          campaignCodesNextToken: x,
          loadMoreCampaignCodes: p,
          loadingMoreCampaignCodes: g,
          embedded: h = !1,
        } = e;
        return (0, l.jsxs)("div", {
          className: h
            ? "mt-4 text-gray-900"
            : "mx-auto mt-4 max-w-7xl rounded-lg bg-white p-4 text-gray-900 shadow",
          children: [
            (0, l.jsx)("div", {
              className:
                "mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",
              children: (0, l.jsxs)("div", {
                children: [
                  (0, l.jsx)("h2", {
                    className: "text-2xl font-bold",
                    children: "Codes",
                  }),
                  a
                    ? (0, l.jsxs)("p", {
                        className: "text-sm text-gray-700",
                        children: [
                          "Campaign:",
                          " ",
                          (0, l.jsx)("span", {
                            className: "font-semibold",
                            children:
                              null != (t = a.name) ? t : "Unnamed Campaign",
                          }),
                          " ",
                          (0, l.jsxs)("span", {
                            className: "font-mono text-xs text-gray-500",
                            children: ["(", a.id, ")"],
                          }),
                        ],
                      })
                    : (0, l.jsx)("p", {
                        className: "text-sm text-gray-700",
                        children:
                          'Select "View Details" from a campaign to view its codes.',
                      }),
                ],
              }),
            }),
            i &&
              n.length > 0 &&
              (0, l.jsx)("p", {
                className: "mb-3 text-sm font-semibold text-red-500",
                children: i,
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
                          children: "Code",
                        }),
                        (0, l.jsx)("th", {
                          className: "border-b px-3 py-2",
                          children: "Kind",
                        }),
                        (0, l.jsx)("th", {
                          className: "border-b px-3 py-2",
                          children: "Redemption Limit",
                        }),
                        (0, l.jsx)("th", {
                          className: "border-b px-3 py-2",
                          children: "Rewards",
                        }),
                        (0, l.jsx)("th", {
                          className: "border-b px-3 py-2",
                          children: "Campaign",
                        }),
                        (0, l.jsx)("th", {
                          className: "border-b px-3 py-2",
                          children: "Assigned To",
                        }),
                        (0, l.jsx)("th", {
                          className: "border-b px-3 py-2",
                          children: "Redemption History",
                        }),
                        (0, l.jsx)("th", {
                          className: "border-b px-3 py-2",
                          children: "Created",
                        }),
                        (0, l.jsx)("th", {
                          className: "border-b px-3 py-2",
                          children: "Campaign Starts",
                        }),
                        (0, l.jsx)("th", {
                          className: "border-b px-3 py-2",
                          children: "Campaign Ends",
                        }),
                        (0, l.jsx)("th", {
                          className: "border-b px-3 py-2",
                          children: "Last Redeemed At",
                        }),
                        (0, l.jsx)("th", {
                          className: "border-b px-3 py-2",
                          children: "Last Redeemed By",
                        }),
                      ],
                    }),
                  }),
                  (0, l.jsx)("tbody", {
                    children: d
                      ? (0, l.jsx)("tr", {
                          children: (0, l.jsx)("td", {
                            className: "border-b px-3 py-3",
                            colSpan: 12,
                            children: "Loading codes…",
                          }),
                        })
                      : a
                        ? 0 === n.length
                          ? (0, l.jsx)("tr", {
                              children: (0, l.jsx)("td", {
                                className: "border-b px-3 py-3",
                                colSpan: 12,
                                children: (0, l.jsx)("span", {
                                  className: i
                                    ? "font-semibold text-red-500"
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
                              let i = o[e.campaignId],
                                d =
                                  null != (t = null == i ? void 0 : i.startsAt)
                                    ? t
                                    : null,
                                x =
                                  null != (a = null == i ? void 0 : i.endsAt)
                                    ? a
                                    : null,
                                p = (
                                  e.itemIds ? Array.from(e.itemIds) : []
                                ).map((e) => ({
                                  id: e,
                                  item: c.find((t) => t.id === e),
                                }));
                              return (
                                "AQ8V9DW6" === e.code && console.log(e),
                                (0, l.jsxs)(
                                  "tr",
                                  {
                                    className:
                                      "odd:bg-white even:bg-gray-50 hover:bg-gray-100",
                                    children: [
                                      (0, l.jsx)("td", {
                                        className:
                                          "border-b px-3 py-2 font-mono",
                                        children: e.code,
                                      }),
                                      (0, l.jsx)("td", {
                                        className: "border-b px-3 py-2",
                                        children: e.codeKind,
                                      }),
                                      (0, l.jsx)("td", {
                                        className: "border-b px-3 py-2",
                                        children:
                                          null === e.redemptionLimit
                                            ? "∞"
                                            : e.redemptionLimit,
                                      }),
                                      (0, l.jsx)("td", {
                                        className: "border-b px-3 py-2",
                                        children: (0, l.jsx)("div", {
                                          className: "flex flex-col gap-2",
                                          children:
                                            p.length > 0
                                              ? p.map((e) => {
                                                  var t;
                                                  let { id: a, item: s } = e;
                                                  return (0, l.jsxs)(
                                                    "div",
                                                    {
                                                      className:
                                                        "flex flex-col",
                                                      children: [
                                                        (0, l.jsx)("span", {
                                                          children:
                                                            null !=
                                                            (t =
                                                              null == s
                                                                ? void 0
                                                                : s.title)
                                                              ? t
                                                              : "Unknown item",
                                                        }),
                                                        (0, l.jsx)("span", {
                                                          className:
                                                            "font-mono text-xs text-gray-500",
                                                          children: (
                                                            null == s
                                                              ? void 0
                                                              : s.friendlyId
                                                          )
                                                            ? ""
                                                                .concat(
                                                                  s.friendlyId,
                                                                  " ",
                                                                )
                                                                .concat(s.id)
                                                            : a,
                                                        }),
                                                      ],
                                                    },
                                                    a,
                                                  );
                                                })
                                              : (0, l.jsx)("span", {
                                                  className: "text-gray-500",
                                                  children: "—",
                                                }),
                                        }),
                                      }),
                                      (0, l.jsx)("td", {
                                        className: "border-b px-3 py-2",
                                        children: (0, l.jsxs)("div", {
                                          className: "flex flex-col",
                                          children: [
                                            (0, l.jsx)("span", {
                                              children:
                                                null !=
                                                (n =
                                                  null == i ? void 0 : i.name)
                                                  ? n
                                                  : "Unknown",
                                            }),
                                            (0, l.jsx)("span", {
                                              className:
                                                "font-mono text-xs text-gray-500",
                                              children: e.campaignId,
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, l.jsx)("td", {
                                        className: "border-b px-3 py-2",
                                        children: e.assignedToMasterPlayerId
                                          ? (0, l.jsx)(s.A, {
                                              type: "button",
                                              variant: "dark",
                                              className:
                                                "text-blue-700 hover:text-blue-900 underline underline-offset-2",
                                              onClick: () =>
                                                m(e.assignedToMasterPlayerId),
                                              children:
                                                e.assignedToMasterPlayerId,
                                            })
                                          : "—",
                                      }),
                                      (0, l.jsx)("td", {
                                        className: "border-b px-3 py-2",
                                        children: (0, l.jsx)(s.A, {
                                          type: "button",
                                          variant: "dark",
                                          "aria-label":
                                            "View redemption history for ".concat(
                                              e.code,
                                            ),
                                          className:
                                            "rounded border border-transparent p-1 text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500",
                                          onClick: () => u(e.code),
                                          children: (0, l.jsx)(r.A, {
                                            className: "h-5 w-5",
                                          }),
                                        }),
                                      }),
                                      (0, l.jsx)("td", {
                                        className: "border-b px-3 py-2",
                                        children: new Date(
                                          e.createdAt,
                                        ).toLocaleString(),
                                      }),
                                      (0, l.jsx)("td", {
                                        className: "border-b px-3 py-2",
                                        children: d
                                          ? new Date(d).toLocaleString()
                                          : "—",
                                      }),
                                      (0, l.jsx)("td", {
                                        className: "border-b px-3 py-2",
                                        children: x
                                          ? new Date(x).toLocaleString()
                                          : "—",
                                      }),
                                      (0, l.jsx)("td", {
                                        className: "border-b px-3 py-2",
                                        children: e.lastRedeemedAt
                                          ? new Date(
                                              e.lastRedeemedAt,
                                            ).toLocaleString()
                                          : "—",
                                      }),
                                      (0, l.jsx)("td", {
                                        className: "border-b px-3 py-2",
                                        children: e.lastRedeemedByMasterPlayerId
                                          ? (0, l.jsx)(s.A, {
                                              type: "button",
                                              variant: "dark",
                                              className:
                                                "text-blue-700 hover:text-blue-900 underline underline-offset-2",
                                              onClick: () =>
                                                m(
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
                        : (0, l.jsx)("tr", {
                            children: (0, l.jsx)("td", {
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
              (0, l.jsxs)("div", {
                className:
                  "mt-3 flex items-center justify-between text-xs text-gray-500",
                children: [
                  (0, l.jsxs)("span", {
                    children: [
                      n.length,
                      " code",
                      1 === n.length ? "" : "s",
                      " loaded",
                    ],
                  }),
                  x &&
                    (0, l.jsx)(s.A, {
                      type: "button",
                      variant: "dark",
                      onClick: p,
                      disabled: g || d,
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
    51472: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => s });
      var l = a(2183);
      function s(e) {
        let {
          children: t,
          variant: a = "normal",
          value: s,
          onChange: r,
          id: n,
        } = e;
        return (0, l.jsx)("div", {
          className: "relative",
          children: (0, l.jsxs)("label", {
            className: "main flex cursor-pointer items-center",
            children: [
              (0, l.jsx)("p", { className: "ml-8 select-none", children: t }),
              (0, l.jsx)("input", {
                id: n,
                checked: s,
                onChange: (e) => r(e.target.checked),
                type: "checkbox",
              }),
              (0, l.jsx)("span", {
                className: "geekmark backdrop-blur outline-none ".concat(
                  "normal" === a
                    ? "geekmark-light border-2 border-gray-300/20 bg-white/20 duration-200 hover:border-white/50 focus:border-white"
                    : "geekmark-dark border-2 border-gray-500/30 bg-gray-800/10 duration-200 hover:border-gray-800/60 focus:border-gray-800/80",
                ),
              }),
            ],
          }),
        });
      }
      a(36439);
    },
    55649: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => r });
      var l = a(2183),
        s = a(15711);
      function r(e) {
        let {
          redeemValue: t,
          onRedeemValueChange: a,
          onRedeemCode: r,
          redeeming: n,
          onListUserRewards: i,
          rewardsLoading: d,
          rewardsError: o,
          userRewards: c,
          onRevealUserReward: m,
          revealingItemId: u,
        } = e;
        return (0, l.jsxs)("div", {
          className:
            "mx-auto mt-4 max-w-7xl rounded-lg bg-white p-4 text-gray-900 shadow",
          children: [
            (0, l.jsx)("h2", {
              className: "mb-3 text-lg font-semibold",
              children: "Regular User Utilities",
            }),
            (0, l.jsxs)("div", {
              className: "flex flex-col gap-2 sm:flex-row sm:items-center",
              children: [
                (0, l.jsx)("input", {
                  value: t,
                  onChange: (e) => a(e.target.value),
                  placeholder: "Enter code to redeem",
                  className:
                    "w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none sm:max-w-xs",
                }),
                (0, l.jsx)(s.A, {
                  type: "button",
                  variant: "darkBackground",
                  onClick: r,
                  disabled: n,
                  loading: n,
                  className:
                    "rounded bg-indigo-600 px-3 py-2 text-sm text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60",
                  children: n ? "Redeeming…" : "Redeem Code",
                }),
              ],
            }),
            (0, l.jsxs)("div", {
              className: "mt-6 border-t border-gray-200 pt-4",
              children: [
                (0, l.jsx)("h3", {
                  className: "mb-2 text-base font-semibold",
                  children: "External Code Rewards",
                }),
                (0, l.jsx)("div", {
                  className: "flex flex-col gap-2 sm:flex-row sm:items-center",
                  children: (0, l.jsx)(s.A, {
                    type: "button",
                    variant: "darkBackground",
                    onClick: i,
                    disabled: d,
                    loading: d,
                    className:
                      "rounded bg-indigo-600 px-3 py-2 text-sm text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60",
                    children: d ? "Loading…" : "List My Rewards",
                  }),
                }),
                o &&
                  (0, l.jsx)("p", {
                    className: "text-red-500 mt-2 text-sm font-semibold",
                    children: o,
                  }),
                c.length > 0 &&
                  (0, l.jsx)("div", {
                    className: "mt-3 overflow-x-auto",
                    children: (0, l.jsxs)("table", {
                      className: "min-w-full text-left text-sm",
                      children: [
                        (0, l.jsx)("thead", {
                          className: "border-b bg-gray-50 text-gray-700",
                          children: (0, l.jsxs)("tr", {
                            children: [
                              (0, l.jsx)("th", {
                                className: "px-3 py-2",
                                children: "Item",
                              }),
                              (0, l.jsx)("th", {
                                className: "px-3 py-2",
                                children: "Item ID",
                              }),
                              (0, l.jsx)("th", {
                                className: "px-3 py-2",
                                children: "Status",
                              }),
                              (0, l.jsx)("th", {
                                className: "px-3 py-2",
                                children: "Code",
                              }),
                              (0, l.jsx)("th", { className: "px-3 py-2" }),
                            ],
                          }),
                        }),
                        (0, l.jsx)("tbody", {
                          children: c.map((e) => {
                            var t, a;
                            return (0, l.jsxs)(
                              "tr",
                              {
                                className: "border-b last:border-0",
                                children: [
                                  (0, l.jsx)("td", {
                                    className: "px-3 py-2",
                                    children: (0, l.jsxs)("div", {
                                      className: "flex flex-col",
                                      children: [
                                        (0, l.jsx)("span", {
                                          className: "font-medium",
                                          children:
                                            null !=
                                            (a =
                                              null != (t = e.title)
                                                ? t
                                                : e.friendlyId)
                                              ? a
                                              : "(Untitled)",
                                        }),
                                        e.friendlyId &&
                                          (0, l.jsx)("span", {
                                            className: "text-xs text-gray-600",
                                            children: e.friendlyId,
                                          }),
                                      ],
                                    }),
                                  }),
                                  (0, l.jsx)("td", {
                                    className: "px-3 py-2 text-gray-700",
                                    children: e.id,
                                  }),
                                  (0, l.jsx)("td", {
                                    className: "px-3 py-2",
                                    children: (0, l.jsx)("span", {
                                      className:
                                        "assigned" === e.status
                                          ? "bg-green-100 text-green-800 rounded px-2 py-1 text-xs font-semibold"
                                          : "rounded bg-yellow-100 px-2 py-1 text-xs font-semibold text-yellow-800",
                                      children: e.status,
                                    }),
                                  }),
                                  (0, l.jsx)("td", {
                                    className: "px-3 py-2 font-mono text-xs",
                                    children: e.code
                                      ? e.code
                                      : "assigned" === e.status
                                        ? "(hidden)"
                                        : "—",
                                  }),
                                  (0, l.jsx)("td", {
                                    className: "px-3 py-2 text-right",
                                    children:
                                      "available" === e.status
                                        ? (0, l.jsx)(s.A, {
                                            type: "button",
                                            variant: "darkBackground",
                                            onClick: () => m(e.id),
                                            disabled: u === e.id,
                                            loading: u === e.id,
                                            className:
                                              "rounded bg-indigo-600 px-3 py-1.5 text-xs text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60",
                                            children:
                                              u === e.id
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
    55656: (e, t, a) => {
      "use strict";
      a.a(e, async (e, l) => {
        try {
          a.d(t, { k: () => p });
          var s = a(2183),
            r = a(36439),
            n = a(15711),
            i = a(51472),
            d = a(55109),
            o = a(24296),
            c = a(99891),
            m = a(65984),
            u = a(74192),
            x = e([d, c, m, u]);
          function p(e) {
            let { initialRewards: t, items: a } = e,
              [l, x] = (0, r.useState)((0, o.r)(t)),
              [p, g] = (0, r.useState)(!1),
              [h, b] = (0, r.useState)(!1),
              [f, y] = (0, r.useState)(null),
              [v, j] = (0, r.useState)(null),
              [N, w] = (0, r.useState)(null),
              [C, k] = (0, r.useState)(!1),
              [S, I] = (0, r.useState)(null),
              [A, E] = (0, r.useState)(null),
              F = (0, r.useRef)(!1);
            (0, r.useEffect)(() => {
              x((0, o.r)(t));
            }, [t]);
            let R = (0, r.useMemo)(() => {
                let e = new Map();
                for (let t of a) e.set(t.id, t);
                return e;
              }, [a]),
              L = (0, r.useCallback)(async (e) => {
                var t, a, l;
                (b(!0), y(null));
                let s = await (0, d.qp)(e ? { lowStockOnly: !0 } : {});
                if (s.error) {
                  (y(
                    null != (a = s.error.errorMessage)
                      ? a
                      : "Failed to load external code rewards.",
                  ),
                    b(!1));
                  return;
                }
                let r =
                  null != (l = null == (t = s.data) ? void 0 : t.rewards)
                    ? l
                    : [];
                (x((0, o.r)(r)), b(!1));
              }, []);
            (0, r.useEffect)(() => {
              if (!F.current) {
                ((F.current = !0), p && L(!0));
                return;
              }
              L(p);
            }, [L, p]);
            let D = (0, r.useCallback)((e) => {
                (x((t) => {
                  let a = t.some((t) => t.playFabItemId === e.playFabItemId)
                    ? t.map((t) =>
                        t.playFabItemId === e.playFabItemId ? e : t,
                      )
                    : [e, ...t];
                  return (0, o.r)(a);
                }),
                  I((t) => {
                    var a, l, s;
                    return t && t.reward.playFabItemId === e.playFabItemId
                      ? {
                          reward: e,
                          redemptionInstructions: e.redemptionInstructions,
                          lowStockThreshold: String(e.lowStockThreshold),
                          internalNotes: null != (a = e.internalNotes) ? a : "",
                          provider: null != (l = e.provider) ? l : "",
                          providerSku: null != (s = e.providerSku) ? s : "",
                        }
                      : t;
                  }));
              }, []),
              M = (0, r.useMemo)(() => new Intl.NumberFormat(), []);
            function T() {
              I(null);
            }
            let U = (0, r.useCallback)(async (e) => {
              (j(null), w(e));
              try {
                let a = await (0, d.SV)({ playFabItemId: e });
                if (a.error) {
                  var t;
                  j(
                    null != (t = a.error.errorMessage)
                      ? t
                      : "Failed to export external codes.",
                  );
                }
              } finally {
                w(null);
              }
            }, []);
            return (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsxs)("div", {
                  className:
                    "mx-auto mb-4 max-w-7xl rounded-lg bg-white p-4 text-gray-900 shadow",
                  children: [
                    (0, s.jsxs)("div", {
                      className:
                        "mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",
                      children: [
                        (0, s.jsxs)("div", {
                          children: [
                            (0, s.jsx)("h1", {
                              className: "text-2xl font-bold",
                              children: "External Code Rewards",
                            }),
                            (0, s.jsx)("p", {
                              className: "text-sm text-gray-700",
                              children:
                                "Manage external code pools linked to PlayFab items.",
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "flex flex-col items-stretch gap-2 sm:flex-row sm:items-center",
                          children: [
                            (0, s.jsx)("label", {
                              className:
                                "flex items-center gap-2 text-sm text-gray-700",
                              children: (0, s.jsx)(i.A, {
                                value: p,
                                onChange: g,
                                children: "Low stock only",
                              }),
                            }),
                            (0, s.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, s.jsx)(n.A, {
                                  type: "button",
                                  variant: "dark",
                                  onClick: () => {
                                    L(p);
                                  },
                                  className:
                                    "rounded border border-gray-300 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100",
                                  disabled: h,
                                  loading: h,
                                  children: h ? "Refreshing…" : "Refresh",
                                }),
                                (0, s.jsx)(n.A, {
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
                      (0, s.jsx)("p", {
                        className: "text-red-500 mb-2 text-sm font-semibold",
                        children: f,
                      }),
                    (0, s.jsx)("div", {
                      className: "overflow-x-auto",
                      children: (0, s.jsxs)("table", {
                        className:
                          "min-w-full border border-gray-200 text-left text-sm",
                        children: [
                          (0, s.jsx)("thead", {
                            className: "bg-gray-50 text-gray-700",
                            children: (0, s.jsxs)("tr", {
                              children: [
                                (0, s.jsx)("th", {
                                  className: "border-b px-3 py-2",
                                  children: "PlayFab Item",
                                }),
                                (0, s.jsx)("th", {
                                  className: "border-b px-3 py-2",
                                  children: "Provider",
                                }),
                                (0, s.jsx)("th", {
                                  className: "border-b px-3 py-2",
                                  children: "Available / Total",
                                }),
                                (0, s.jsx)("th", {
                                  className: "border-b px-3 py-2",
                                  children: "Assigned",
                                }),
                                (0, s.jsx)("th", {
                                  className: "border-b px-3 py-2",
                                  children: "Delivered",
                                }),
                                (0, s.jsx)("th", {
                                  className: "border-b px-3 py-2",
                                  children: "Low Stock Threshold",
                                }),
                                (0, s.jsx)("th", {
                                  className: "border-b px-3 py-2",
                                  children: "Status",
                                }),
                                (0, s.jsx)("th", {
                                  className: "border-b px-3 py-2",
                                  children: "Last Upload",
                                }),
                                (0, s.jsx)("th", {
                                  className: "border-b px-3 py-2",
                                  children: "Updated",
                                }),
                                (0, s.jsx)("th", {
                                  className: "border-b px-3 py-2",
                                  children: "Actions",
                                }),
                              ],
                            }),
                          }),
                          (0, s.jsx)("tbody", {
                            children: h
                              ? (0, s.jsx)("tr", {
                                  children: (0, s.jsx)("td", {
                                    className: "px-3 py-3",
                                    colSpan: 10,
                                    children: "Loading external code rewards…",
                                  }),
                                })
                              : 0 === l.length
                                ? (0, s.jsx)("tr", {
                                    children: (0, s.jsx)("td", {
                                      className: "px-3 py-3",
                                      colSpan: 10,
                                      children:
                                        "No external code rewards found. Create one to begin uploading codes.",
                                    }),
                                  })
                                : l.map((e) => {
                                    let t = R.get(e.playFabItemId),
                                      a = t
                                        ? ""
                                            .concat(t.title)
                                            .concat(
                                              t.friendlyId
                                                ? " — ".concat(t.friendlyId)
                                                : "",
                                            )
                                        : e.playFabItemId;
                                    return (0, s.jsxs)(
                                      "tr",
                                      {
                                        className:
                                          "odd:bg-white even:bg-gray-50",
                                        children: [
                                          (0, s.jsx)("td", {
                                            className: "border-b px-3 py-2",
                                            children: (0, s.jsxs)("div", {
                                              className: "flex flex-col",
                                              children: [
                                                (0, s.jsx)("span", {
                                                  children: a,
                                                }),
                                                (0, s.jsx)("span", {
                                                  className:
                                                    "font-mono text-xs text-gray-500",
                                                  children: e.playFabItemId,
                                                }),
                                              ],
                                            }),
                                          }),
                                          (0, s.jsx)("td", {
                                            className: "border-b px-3 py-2",
                                            children: e.provider
                                              ? (0, s.jsxs)("div", {
                                                  className:
                                                    "flex flex-col gap-0.5",
                                                  children: [
                                                    (0, s.jsx)("span", {
                                                      children: e.provider,
                                                    }),
                                                    e.providerSku
                                                      ? (0, s.jsxs)("span", {
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
                                          (0, s.jsxs)("td", {
                                            className: "border-b px-3 py-2",
                                            children: [
                                              M.format(e.availableCount),
                                              " /",
                                              " ",
                                              M.format(e.totalCount),
                                            ],
                                          }),
                                          (0, s.jsx)("td", {
                                            className: "border-b px-3 py-2",
                                            children: M.format(e.assignedCount),
                                          }),
                                          (0, s.jsx)("td", {
                                            className: "border-b px-3 py-2",
                                            children: M.format(
                                              e.deliveredCount,
                                            ),
                                          }),
                                          (0, s.jsx)("td", {
                                            className: "border-b px-3 py-2",
                                            children: M.format(
                                              e.lowStockThreshold,
                                            ),
                                          }),
                                          (0, s.jsx)("td", {
                                            className: "border-b px-3 py-2",
                                            children: e.isLowStock
                                              ? (0, s.jsx)("span", {
                                                  className:
                                                    "bg-red-100 text-red-700 inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold uppercase tracking-wide",
                                                  children: "Low",
                                                })
                                              : (0, s.jsx)("span", {
                                                  className:
                                                    "bg-green-100 text-green-700 inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold uppercase tracking-wide",
                                                  children: "Healthy",
                                                }),
                                          }),
                                          (0, s.jsx)("td", {
                                            className: "border-b px-3 py-2",
                                            children: e.lastUploadAt
                                              ? new Date(
                                                  e.lastUploadAt,
                                                ).toLocaleString()
                                              : "—",
                                          }),
                                          (0, s.jsx)("td", {
                                            className: "border-b px-3 py-2",
                                            children: new Date(
                                              e.updatedAt,
                                            ).toLocaleString(),
                                          }),
                                          (0, s.jsx)("td", {
                                            className: "border-b px-3 py-2",
                                            children: (0, s.jsxs)("div", {
                                              className:
                                                "flex flex-col gap-2 sm:flex-row",
                                              children: [
                                                (0, s.jsx)(n.A, {
                                                  type: "button",
                                                  variant: "dark",
                                                  onClick: () => {
                                                    var t, a, l;
                                                    I({
                                                      reward: e,
                                                      redemptionInstructions:
                                                        e.redemptionInstructions,
                                                      lowStockThreshold: String(
                                                        e.lowStockThreshold,
                                                      ),
                                                      internalNotes:
                                                        null !=
                                                        (t = e.internalNotes)
                                                          ? t
                                                          : "",
                                                      provider:
                                                        null != (a = e.provider)
                                                          ? a
                                                          : "",
                                                      providerSku:
                                                        null !=
                                                        (l = e.providerSku)
                                                          ? l
                                                          : "",
                                                    });
                                                  },
                                                  className:
                                                    "rounded border border-gray-300 px-3 py-1 text-xs text-gray-700 hover:bg-gray-100",
                                                  children: "Manage",
                                                }),
                                                (0, s.jsx)(n.A, {
                                                  type: "button",
                                                  variant: "dark",
                                                  onClick: () => {
                                                    E(e);
                                                  },
                                                  className:
                                                    "rounded border border-indigo-600 px-3 py-1 text-xs font-semibold text-indigo-600 hover:bg-indigo-50",
                                                  children: "Upload Codes",
                                                }),
                                                (0, s.jsx)(n.A, {
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
                v &&
                  (0, s.jsx)("p", {
                    className: "text-red-500 mt-2 text-sm font-semibold",
                    children: v,
                  }),
                C &&
                  (0, s.jsx)(c.R, {
                    items: a,
                    onClose: () => k(!1),
                    onCreated: D,
                  }),
                S &&
                  (0, s.jsx)(m.A, {
                    manageState: S,
                    onClose: T,
                    onUpdate: I,
                    onRewardUpdated: D,
                    onOpenUpload: () => {
                      T();
                      let e = l.find(
                        (e) => e.playFabItemId === S.reward.playFabItemId,
                      );
                      e && E(e);
                    },
                  }),
                A &&
                  (0, s.jsx)(u.Q, {
                    reward: A,
                    onClose: function () {
                      E(null);
                    },
                    onUploaded: D,
                  }),
              ],
            });
          }
          (([d, c, m, u] = x.then ? (await x)() : x), l());
        } catch (e) {
          l(e);
        }
      });
    },
    65984: (e, t, a) => {
      "use strict";
      a.a(e, async (e, l) => {
        try {
          a.d(t, { A: () => o });
          var s = a(2183),
            r = a(36439),
            n = a(15711),
            i = a(55109),
            d = e([i]);
          function o(e) {
            let {
                manageState: t,
                onClose: a,
                onUpdate: l,
                onOpenUpload: d,
                onRewardUpdated: o,
              } = e,
              [c, m] = (0, r.useState)(null),
              [u, x] = (0, r.useState)(null),
              [p, g] = (0, r.useState)(!1),
              h = new Intl.NumberFormat();
            async function b() {
              var e, a, l, s, r;
              (m(null), x(null));
              let { reward: n } = t,
                d = t.redemptionInstructions.trim();
              if (!d) return void m("Redemption instructions cannot be empty.");
              let c = t.lowStockThreshold.trim(),
                u = Number.parseInt(c, 10);
              if ("" === c || !Number.isInteger(u) || u < 0)
                return void m(
                  "Low-stock threshold must be a non-negative integer.",
                );
              let p = {
                  playFabItemId: n.playFabItemId,
                  expectedAttributeVersion: n.attributeVersion,
                },
                h = !1;
              (d !== n.redemptionInstructions &&
                ((p.redemptionInstructions = d), (h = !0)),
                u !== n.lowStockThreshold &&
                  ((p.lowStockThreshold = u), (h = !0)));
              let b = t.internalNotes.trim(),
                f = null != (a = n.internalNotes) ? a : "";
              b !== f && ((p.internalNotes = b || null), (h = !0));
              let y = t.provider.trim(),
                v = null != (l = n.provider) ? l : "";
              y !== v && ((p.provider = y || null), (h = !0));
              let j = t.providerSku.trim(),
                N = null != (s = n.providerSku) ? s : "";
              if ((j !== N && ((p.providerSku = j || null), (h = !0)), !h))
                return void m("Make a change before saving.");
              g(!0);
              let w = await (0, i.VO)(p);
              if (w.error) {
                (m(
                  null != (r = w.error.errorMessage)
                    ? r
                    : "Failed to update external code reward.",
                ),
                  g(!1));
                return;
              }
              let C = null == (e = w.data) ? void 0 : e.reward;
              if (!C) {
                (m("Failed to update external code reward."), g(!1));
                return;
              }
              (o(C), x("Changes saved."), g(!1));
            }
            return (0, s.jsx)("div", {
              className:
                "fixed inset-0 z-40 flex items-center justify-center bg-black/50 p-4",
              children: (0, s.jsxs)("div", {
                className:
                  "max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-white p-6 text-gray-900 shadow-xl",
                children: [
                  (0, s.jsxs)("div", {
                    className: "flex items-start justify-between",
                    children: [
                      (0, s.jsxs)("div", {
                        children: [
                          (0, s.jsx)("h2", {
                            className: "text-xl font-semibold",
                            children: "Manage External Code Reward",
                          }),
                          (0, s.jsxs)("p", {
                            className: "text-sm text-gray-600",
                            children: [
                              "PlayFab Item ID:",
                              " ",
                              (0, s.jsx)("span", {
                                className: "font-mono text-xs text-gray-500",
                                children: t.reward.playFabItemId,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsx)(n.A, {
                        type: "button",
                        variant: "dark",
                        className:
                          "text-gray-500 transition hover:text-gray-700",
                        onClick: a,
                        children: "\xd7",
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "mt-4 grid gap-4 sm:grid-cols-2",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "rounded-md bg-gray-50 p-3",
                        children: [
                          (0, s.jsx)("p", {
                            className: "text-xs uppercase text-gray-500",
                            children: "Available Codes",
                          }),
                          (0, s.jsx)("p", {
                            className: "text-lg font-semibold",
                            children: h.format(t.reward.availableCount),
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "rounded-md bg-gray-50 p-3",
                        children: [
                          (0, s.jsx)("p", {
                            className: "text-xs uppercase text-gray-500",
                            children: "Total Codes",
                          }),
                          (0, s.jsx)("p", {
                            className: "text-lg font-semibold",
                            children: h.format(t.reward.totalCount),
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "rounded-md bg-gray-50 p-3",
                        children: [
                          (0, s.jsx)("p", {
                            className: "text-xs uppercase text-gray-500",
                            children: "Assigned",
                          }),
                          (0, s.jsx)("p", {
                            className: "text-lg font-semibold",
                            children: h.format(t.reward.assignedCount),
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "rounded-md bg-gray-50 p-3",
                        children: [
                          (0, s.jsx)("p", {
                            className: "text-xs uppercase text-gray-500",
                            children: "Delivered",
                          }),
                          (0, s.jsx)("p", {
                            className: "text-lg font-semibold",
                            children: h.format(t.reward.deliveredCount),
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "rounded-md bg-gray-50 p-3",
                        children: [
                          (0, s.jsx)("p", {
                            className: "text-xs uppercase text-gray-500",
                            children: "Low-stock Threshold",
                          }),
                          (0, s.jsx)("p", {
                            className: "text-lg font-semibold",
                            children: h.format(t.reward.lowStockThreshold),
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "rounded-md bg-gray-50 p-3",
                        children: [
                          (0, s.jsx)("p", {
                            className: "text-xs uppercase text-gray-500",
                            children: "Status",
                          }),
                          (0, s.jsx)("p", {
                            className: "text-sm font-semibold text-gray-800",
                            children: t.reward.isLowStock
                              ? "Low Stock"
                              : "Healthy",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "rounded-md bg-gray-50 p-3",
                        children: [
                          (0, s.jsx)("p", {
                            className: "text-xs uppercase text-gray-500",
                            children: "Last Upload",
                          }),
                          (0, s.jsx)("p", {
                            className: "text-sm text-gray-800",
                            children: t.reward.lastUploadAt
                              ? new Date(t.reward.lastUploadAt).toLocaleString()
                              : "—",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "rounded-md bg-gray-50 p-3",
                        children: [
                          (0, s.jsx)("p", {
                            className: "text-xs uppercase text-gray-500",
                            children: "Updated",
                          }),
                          (0, s.jsx)("p", {
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
                    (0, s.jsx)("p", {
                      className: "text-red-500 mt-3 text-sm font-semibold",
                      children: c,
                    }),
                  u &&
                    (0, s.jsx)("p", {
                      className: "text-green-600 mt-3 text-sm",
                      children: u,
                    }),
                  (0, s.jsxs)("div", {
                    className: "mt-4 flex flex-col gap-4",
                    children: [
                      (0, s.jsxs)("div", {
                        children: [
                          (0, s.jsx)("label", {
                            className:
                              "mb-1 block text-sm font-medium text-gray-700",
                            children: "Redemption Instructions",
                          }),
                          (0, s.jsx)("textarea", {
                            value: t.redemptionInstructions,
                            onChange: (e) => {
                              (m(null),
                                x(null),
                                l({
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
                      (0, s.jsxs)("div", {
                        className: "grid gap-4 sm:grid-cols-3",
                        children: [
                          (0, s.jsxs)("div", {
                            children: [
                              (0, s.jsx)("label", {
                                className:
                                  "mb-1 block text-sm font-medium text-gray-700",
                                children: "Low-stock Threshold",
                              }),
                              (0, s.jsx)("input", {
                                type: "number",
                                min: 0,
                                value: t.lowStockThreshold,
                                onChange: (e) => {
                                  (m(null),
                                    x(null),
                                    l({
                                      ...t,
                                      lowStockThreshold: e.target.value,
                                    }));
                                },
                                className:
                                  "w-full rounded border border-gray-300 p-2 text-sm focus:border-indigo-500 focus:outline-none",
                              }),
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            children: [
                              (0, s.jsx)("label", {
                                className:
                                  "mb-1 block text-sm font-medium text-gray-700",
                                children: "Provider (optional)",
                              }),
                              (0, s.jsx)("input", {
                                type: "text",
                                value: t.provider,
                                onChange: (e) => {
                                  (m(null),
                                    x(null),
                                    l({ ...t, provider: e.target.value }));
                                },
                                className:
                                  "w-full rounded border border-gray-300 p-2 text-sm focus:border-indigo-500 focus:outline-none",
                              }),
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            children: [
                              (0, s.jsx)("label", {
                                className:
                                  "mb-1 block text-sm font-medium text-gray-700",
                                children: "Provider SKU (optional)",
                              }),
                              (0, s.jsx)("input", {
                                type: "text",
                                value: t.providerSku,
                                onChange: (e) => {
                                  (m(null),
                                    x(null),
                                    l({ ...t, providerSku: e.target.value }));
                                },
                                className:
                                  "w-full rounded border border-gray-300 p-2 text-sm focus:border-indigo-500 focus:outline-none",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        children: [
                          (0, s.jsx)("label", {
                            className:
                              "mb-1 block text-sm font-medium text-gray-700",
                            children: "Internal Notes (optional)",
                          }),
                          (0, s.jsx)("textarea", {
                            value: t.internalNotes,
                            onChange: (e) => {
                              (m(null),
                                x(null),
                                l({ ...t, internalNotes: e.target.value }));
                            },
                            rows: 3,
                            className:
                              "w-full rounded border border-gray-300 p-2 text-sm focus:border-indigo-500 focus:outline-none",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className:
                      "mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
                    children: [
                      (0, s.jsx)(n.A, {
                        type: "button",
                        variant: "dark",
                        onClick: d,
                        className:
                          "self-start rounded px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100",
                        children: "Upload Codes",
                      }),
                      (0, s.jsxs)("div", {
                        className: "flex gap-2",
                        children: [
                          (0, s.jsx)(n.A, {
                            type: "button",
                            variant: "dark",
                            onClick: a,
                            className:
                              "rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-100",
                            disabled: p,
                            children: "Close",
                          }),
                          (0, s.jsx)(n.A, {
                            type: "button",
                            variant: "darkBackground",
                            onClick: () => void b(),
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
          ((i = (d.then ? (await d)() : d)[0]), l());
        } catch (e) {
          l(e);
        }
      });
    },
    69196: (e, t, a) => {
      "use strict";
      a.a(e, async (e, l) => {
        try {
          a.d(t, { S: () => m });
          var s = a(2183),
            r = a(36439),
            n = a(15711),
            i = a(51472),
            d = a(21126),
            o = a(55109),
            c = e([o]);
          function m(e) {
            var t, a, l;
            let { campaign: c, onClose: m, onUpdated: u } = e,
              [x, p] = (0, r.useState)(!1),
              [g, h] = (0, r.useState)(null),
              [b, f] = (0, r.useState)(c.name),
              [y, v] = (0, r.useState)(null != (t = c.description) ? t : ""),
              [j, N] = (0, r.useState)(null != (a = c.startsAt) ? a : null),
              [w, C] = (0, r.useState)(null != (l = c.endsAt) ? l : null),
              [k, S] = (0, r.useState)(c.isInactive);
            async function I() {
              var e, t, a;
              h(null);
              let l = b.trim(),
                s = y.trim(),
                r =
                  (null != (e = c.startsAt) ? e : null) !==
                  (null != j ? j : null),
                n =
                  (null != (t = c.endsAt) ? t : null) !==
                  (null != w ? w : null),
                i = l.length > 0 && l !== c.name,
                d = s !== c.description,
                x = k !== c.isInactive;
              if (null !== j && null !== w && j >= w)
                return void h("Start must be before end");
              if (!i && !d && !r && !n && !x)
                return void h("Make a change before saving");
              p(!0);
              let g = await (0, o.SX)({
                id: c.id,
                name: i ? l : void 0,
                description: d ? s : void 0,
                startsAt: r ? j : void 0,
                endsAt: n ? w : void 0,
                isInactive: x ? k : void 0,
              });
              if ((p(!1), g.error))
                return void h(
                  null != (a = g.error.errorMessage)
                    ? a
                    : "Failed to update campaign",
                );
              (u(), m());
            }
            return (0, s.jsx)("div", {
              className:
                "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3",
              role: "dialog",
              "aria-modal": "true",
              "aria-labelledby": "edit-campaign-title",
              children: (0, s.jsxs)("div", {
                className:
                  "w-full max-w-lg rounded bg-white p-4 text-gray-900 shadow-xl",
                children: [
                  (0, s.jsxs)("div", {
                    className: "mb-3 flex items-center justify-between",
                    children: [
                      (0, s.jsx)("h2", {
                        id: "edit-campaign-title",
                        className: "text-lg font-semibold",
                        children: "Edit Campaign",
                      }),
                      (0, s.jsx)(n.A, {
                        type: "button",
                        variant: "dark",
                        onClick: m,
                        className:
                          "rounded px-2 py-1 text-sm text-gray-600 hover:bg-gray-100",
                        "aria-label": "Close edit campaign modal",
                        children: "Close",
                      }),
                    ],
                  }),
                  g &&
                    (0, s.jsx)("p", {
                      className: "text-red-500 mb-3 text-sm font-semibold",
                      role: "alert",
                      children: g,
                    }),
                  (0, s.jsxs)("div", {
                    className: "space-y-3",
                    children: [
                      (0, s.jsxs)("div", {
                        children: [
                          (0, s.jsx)("label", {
                            htmlFor: "edit-campaign-name",
                            className: "mb-1 block text-sm font-medium",
                            children: "Name",
                          }),
                          (0, s.jsx)("input", {
                            id: "edit-campaign-name",
                            value: b,
                            onChange: (e) => f(e.target.value),
                            className:
                              "w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        children: [
                          (0, s.jsx)("label", {
                            htmlFor: "edit-campaign-description",
                            className: "mb-1 block text-sm font-medium",
                            children: "Description",
                          }),
                          (0, s.jsx)("textarea", {
                            id: "edit-campaign-description",
                            value: y,
                            onChange: (e) => v(e.target.value),
                            rows: 3,
                            className:
                              "w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none",
                          }),
                        ],
                      }),
                      (0, s.jsx)(d.A, {
                        label: "Starts",
                        value: j,
                        onChange: (e) => N(e),
                        helperText:
                          "Optional. Leave empty to start immediately.",
                      }),
                      (0, s.jsx)(d.A, {
                        label: "Ends",
                        value: w,
                        onChange: (e) => C(e),
                        helperText:
                          "Optional. Leave empty for a campaign that never ends.",
                      }),
                      (0, s.jsx)("div", {
                        children: (0, s.jsx)(i.A, {
                          value: k,
                          onChange: S,
                          children:
                            "Inactive (campaign is deactivated when checked)",
                        }),
                      }),
                      (0, s.jsxs)("div", {
                        className: "flex justify-end gap-2 pt-2",
                        children: [
                          (0, s.jsx)(n.A, {
                            type: "button",
                            variant: "dark",
                            onClick: m,
                            className:
                              "rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-100",
                            disabled: x,
                            children: "Cancel",
                          }),
                          (0, s.jsx)(n.A, {
                            type: "button",
                            variant: "darkBackground",
                            onClick: I,
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
          ((o = (c.then ? (await c)() : c)[0]), l());
        } catch (e) {
          l(e);
        }
      });
    },
    74192: (e, t, a) => {
      "use strict";
      a.a(e, async (e, l) => {
        try {
          a.d(t, { Q: () => m });
          var s = a(2183),
            r = a(36439),
            n = a(15711),
            i = a(51472),
            d = a(55109),
            o = a(24296),
            c = e([d]);
          function m(e) {
            let { reward: t, onClose: a, onUploaded: l } = e,
              [c, m] = (0, r.useState)({
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
              u = new Intl.NumberFormat();
            async function x() {
              if (!c.preview || 0 === c.preview.trimmedCodes.length)
                return void m((e) => ({
                  ...e,
                  uploadError: "Parse a CSV file before uploading.",
                }));
              if (!c.confirm)
                return void m((e) => ({
                  ...e,
                  uploadError: "Confirm the preview before uploading.",
                }));
              m((e) => ({ ...e, uploading: !0, uploadError: null }));
              let e = await (0, d.BD)({
                playFabItemId: t.playFabItemId,
                rows: c.preview.trimmedCodes.map((e) => ({ code: e })),
              });
              if (e.error)
                return void m((t) => {
                  var a;
                  return {
                    ...t,
                    uploading: !1,
                    uploadError:
                      null != (a = e.error.errorMessage)
                        ? a
                        : "Failed to upload external codes.",
                  };
                });
              let a = e.data;
              if (!a)
                return void m((e) => ({
                  ...e,
                  uploading: !1,
                  uploadError: "Failed to upload external codes.",
                }));
              (l(a.reward),
                m((e) => ({
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
            return (0, s.jsx)("div", {
              className:
                "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4",
              children: (0, s.jsxs)("div", {
                className:
                  "max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-white p-6 text-gray-900 shadow-xl",
                children: [
                  (0, s.jsxs)("div", {
                    className: "flex items-start justify-between",
                    children: [
                      (0, s.jsxs)("div", {
                        children: [
                          (0, s.jsx)("h2", {
                            className: "text-xl font-semibold",
                            children: "Upload External Codes",
                          }),
                          (0, s.jsxs)("p", {
                            className: "text-sm text-gray-600",
                            children: [
                              "PlayFab Item ID:",
                              " ",
                              (0, s.jsx)("span", {
                                className: "font-mono text-xs text-gray-500",
                                children: t.playFabItemId,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsx)(n.A, {
                        type: "button",
                        variant: "dark",
                        className:
                          "text-gray-500 transition hover:text-gray-700",
                        onClick: a,
                        children: "\xd7",
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "mt-4 space-y-3",
                    children: [
                      (0, s.jsxs)("div", {
                        children: [
                          (0, s.jsx)("label", {
                            className:
                              "mb-1 block text-sm font-medium text-gray-700",
                            children: "CSV File",
                          }),
                          (0, s.jsx)("input", {
                            type: "file",
                            accept: ".csv,text/csv",
                            onChange: (e) =>
                              (function (e) {
                                if (!e || 0 === e.length)
                                  return void m({
                                    ...c,
                                    fileName: null,
                                    preview: null,
                                    parseError: null,
                                    confirm: !1,
                                    uploadResult: null,
                                    uploadError: null,
                                  });
                                let t = e.item(0);
                                if (!t)
                                  return void m((e) => ({
                                    ...e,
                                    parsing: !1,
                                    parseError: "No file selected.",
                                    preview: null,
                                    confirm: !1,
                                    uploadResult: null,
                                    uploadError: null,
                                  }));
                                let a = new FileReader();
                                (m((e) => ({
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
                                      let t = (0, o.L)(e);
                                      m((e) => ({
                                        ...e,
                                        parsing: !1,
                                        parseError: null,
                                        preview: t,
                                        confirm: !1,
                                        uploadResult: null,
                                        uploadError: null,
                                      }));
                                    } catch (e) {
                                      m((t) => ({
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
                                    m((e) => ({
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
                            (0, s.jsxs)("p", {
                              className: "mt-1 text-xs text-gray-500",
                              children: ["Selected: ", c.fileName],
                            }),
                        ],
                      }),
                      c.parsing &&
                        (0, s.jsx)("p", {
                          className: "text-sm text-gray-700",
                          children: "Parsing CSV…",
                        }),
                      c.parseError &&
                        (0, s.jsx)("p", {
                          className: "text-red-500 text-sm font-semibold",
                          children: c.parseError,
                        }),
                      c.preview &&
                        (0, s.jsxs)("div", {
                          className:
                            "rounded border border-gray-200 p-3 text-sm",
                          children: [
                            (0, s.jsx)("p", {
                              className: "font-medium",
                              children: "Preview",
                            }),
                            (0, s.jsxs)("ul", {
                              className: "mt-2 space-y-1 text-gray-700",
                              children: [
                                (0, s.jsxs)("li", {
                                  children: [
                                    "Processed rows:",
                                    " ",
                                    u.format(c.preview.processedRows),
                                  ],
                                }),
                                (0, s.jsxs)("li", {
                                  children: [
                                    "Codes to upload:",
                                    " ",
                                    u.format(c.preview.trimmedCodes.length),
                                  ],
                                }),
                                (0, s.jsxs)("li", {
                                  children: [
                                    "Blank/invalid rows ignored:",
                                    " ",
                                    u.format(c.preview.ignoredCount),
                                  ],
                                }),
                              ],
                            }),
                            c.preview.sampleRows.length > 0 &&
                              (0, s.jsxs)("div", {
                                className: "mt-3",
                                children: [
                                  (0, s.jsx)("p", {
                                    className:
                                      "text-xs font-medium uppercase text-gray-500",
                                    children: "Sample Codes",
                                  }),
                                  (0, s.jsx)("ul", {
                                    className:
                                      "mt-1 space-y-1 font-mono text-xs text-gray-700",
                                    children: c.preview.sampleRows.map((e) =>
                                      (0, s.jsx)("li", { children: e }, e),
                                    ),
                                  }),
                                ],
                              }),
                          ],
                        }),
                      c.uploadResult &&
                        (0, s.jsxs)("div", {
                          className:
                            "border-green-200 bg-green-50 text-green-800 rounded border p-3 text-sm",
                          children: [
                            (0, s.jsx)("p", {
                              className: "font-semibold",
                              children: "Upload complete.",
                            }),
                            (0, s.jsxs)("ul", {
                              className: "mt-1 space-y-1",
                              children: [
                                (0, s.jsxs)("li", {
                                  children: [
                                    "Inserted:",
                                    " ",
                                    u.format(c.uploadResult.inserted),
                                  ],
                                }),
                                (0, s.jsxs)("li", {
                                  children: [
                                    "Skipped duplicates:",
                                    " ",
                                    u.format(c.uploadResult.skippedDuplicates),
                                  ],
                                }),
                                (0, s.jsxs)("li", {
                                  children: [
                                    "Rows processed:",
                                    " ",
                                    u.format(c.uploadResult.processedRows),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      c.uploadError &&
                        (0, s.jsx)("p", {
                          className: "text-red-500 text-sm font-semibold",
                          children: c.uploadError,
                        }),
                      (0, s.jsx)("label", {
                        className:
                          "flex items-center gap-2 text-sm text-gray-700",
                        children: (0, s.jsx)(i.A, {
                          value: c.confirm,
                          onChange: (e) => m((t) => ({ ...t, confirm: e })),
                          children:
                            "I confirm this preview matches the codes I expect to upload.",
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "mt-6 flex justify-end gap-2",
                    children: [
                      (0, s.jsx)(n.A, {
                        type: "button",
                        variant: "dark",
                        onClick: a,
                        className:
                          "rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-100",
                        disabled: c.uploading,
                        children: "Close",
                      }),
                      (0, s.jsx)(n.A, {
                        type: "button",
                        variant: "darkBackground",
                        onClick: () => void x(),
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
          ((d = (c.then ? (await c)() : c)[0]), l());
        } catch (e) {
          l(e);
        }
      });
    },
    77024: (e, t, a) => {
      "use strict";
      a.a(e, async (e, l) => {
        try {
          a.d(t, { S: () => m });
          var s = a(2183),
            r = a(36439),
            n = a(15711),
            i = a(51472),
            d = a(21126),
            o = a(55109),
            c = e([o]);
          function m(e) {
            let { onClose: t, onCreated: a } = e,
              [l, c] = (0, r.useState)(!1),
              [m, u] = (0, r.useState)(null),
              [x, p] = (0, r.useState)(""),
              [g, h] = (0, r.useState)(""),
              [b, f] = (0, r.useState)(null),
              [y, v] = (0, r.useState)(null),
              [j, N] = (0, r.useState)(!0);
            async function w() {
              if ((u(null), !x.trim())) return void u("Enter a campaign name");
              if (!g.trim()) return void u("Enter a campaign description");
              if (null !== b && null !== y && b >= y)
                return void u("Start must be before end");
              c(!0);
              let e = await (0, o.bi)({
                name: x.trim(),
                description: g.trim(),
                startsAt: null != b ? b : void 0,
                endsAt: null != y ? y : void 0,
                isInactive: j,
              });
              if ((c(!1), e.error)) {
                var l;
                u(
                  null != (l = e.error.errorMessage)
                    ? l
                    : "Failed to create campaign",
                );
                return;
              }
              (a(), t());
            }
            return (0, s.jsx)("div", {
              className:
                "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3",
              role: "dialog",
              "aria-modal": "true",
              "aria-labelledby": "create-campaign-title",
              children: (0, s.jsxs)("div", {
                className:
                  "w-full max-w-lg rounded bg-white p-4 text-gray-900 shadow-xl",
                children: [
                  (0, s.jsxs)("div", {
                    className: "mb-3 flex items-center justify-between",
                    children: [
                      (0, s.jsx)("h2", {
                        id: "create-campaign-title",
                        className: "text-lg font-semibold",
                        children: "Create Campaign",
                      }),
                      (0, s.jsx)(n.A, {
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
                  m &&
                    (0, s.jsx)("p", {
                      className: "text-red-500 mb-3 text-sm font-semibold",
                      role: "alert",
                      children: m,
                    }),
                  (0, s.jsxs)("div", {
                    className: "space-y-3",
                    children: [
                      (0, s.jsxs)("div", {
                        children: [
                          (0, s.jsx)("label", {
                            htmlFor: "campaign-name",
                            className: "mb-1 block text-sm font-medium",
                            children: "Name",
                          }),
                          (0, s.jsx)("input", {
                            id: "campaign-name",
                            value: x,
                            onChange: (e) => p(e.target.value),
                            className:
                              "w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none",
                            "aria-invalid": (
                              null == m ? void 0 : m.includes("name")
                            )
                              ? "true"
                              : "false",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        children: [
                          (0, s.jsx)("label", {
                            htmlFor: "campaign-description",
                            className: "mb-1 block text-sm font-medium",
                            children: "Description",
                          }),
                          (0, s.jsx)("textarea", {
                            id: "campaign-description",
                            value: g,
                            onChange: (e) => h(e.target.value),
                            rows: 3,
                            className:
                              "w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none",
                            "aria-invalid": (
                              null == m ? void 0 : m.includes("description")
                            )
                              ? "true"
                              : "false",
                          }),
                        ],
                      }),
                      (0, s.jsx)(d.A, {
                        label: "Starts",
                        value: b,
                        onChange: (e) => f(e),
                        helperText:
                          "Optional. Leave empty to start immediately.",
                      }),
                      (0, s.jsx)(d.A, {
                        label: "Ends",
                        value: y,
                        onChange: (e) => v(e),
                        helperText:
                          "Optional. Leave empty for a campaign that never ends.",
                      }),
                      (0, s.jsx)("div", {
                        children: (0, s.jsx)(i.A, {
                          value: j,
                          onChange: N,
                          children:
                            "Inactive (campaign is deactivated when checked)",
                        }),
                      }),
                      (0, s.jsxs)("div", {
                        className: "flex justify-end gap-2 pt-2",
                        children: [
                          (0, s.jsx)(n.A, {
                            type: "button",
                            variant: "dark",
                            onClick: t,
                            className:
                              "rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-100",
                            disabled: l,
                            children: "Cancel",
                          }),
                          (0, s.jsx)(n.A, {
                            type: "button",
                            variant: "darkBackground",
                            onClick: w,
                            disabled: l,
                            loading: l,
                            className:
                              "rounded bg-indigo-600 px-3 py-2 text-sm text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60",
                            children: l ? "Creating…" : "Create Campaign",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            });
          }
          ((o = (c.then ? (await c)() : c)[0]), l());
        } catch (e) {
          l(e);
        }
      });
    },
    87287: (e, t, a) => {
      "use strict";
      a.a(e, async (e, l) => {
        try {
          a.d(t, { A: () => c });
          var s = a(2183),
            r = a(36439),
            n = a(55109),
            i = a(15711),
            d = a(19608),
            o = e([n]);
          function c(e) {
            let { code: t, onClose: a, onSelectUser: l } = e,
              [o, c] = (0, r.useState)([]),
              [m, u] = (0, r.useState)(null),
              [x, p] = (0, r.useState)(!1),
              [g, h] = (0, r.useState)(!1),
              [b, f] = (0, r.useState)(null);
            (0, r.useEffect)(() => {
              if (!t) return;
              let e = !1;
              async function a(t) {
                var a, l, s;
                (p(!0), f(null));
                let r = await (0, n.Ir)({ code: t, limit: 25 });
                if (!e) {
                  if (r.error)
                    (f(
                      null != (a = r.error.errorMessage)
                        ? a
                        : "Failed to load redemption history",
                    ),
                      c([]),
                      u(null));
                  else {
                    let e = r.data;
                    (c(null != (l = null == e ? void 0 : e.items) ? l : []),
                      u(
                        null != (s = null == e ? void 0 : e.nextToken)
                          ? s
                          : null,
                      ));
                  }
                  e || p(!1);
                }
              }
              return (
                c([]),
                u(null),
                a(t),
                () => {
                  e = !0;
                }
              );
            }, [t]);
            let y = (0, r.useCallback)(async () => {
              var e, a;
              if (!m || !t) return;
              h(!0);
              let l = await (0, n.Ir)({ code: t, limit: 25, cursor: m });
              if (l.error)
                f(
                  null != (e = l.error.errorMessage)
                    ? e
                    : "Failed to load redemption history",
                );
              else {
                let e = l.data;
                (c((t) => {
                  var a;
                  return [
                    ...t,
                    ...(null != (a = null == e ? void 0 : e.items) ? a : []),
                  ];
                }),
                  u(null != (a = null == e ? void 0 : e.nextToken) ? a : null));
              }
              h(!1);
            }, [t, m]);
            return t
              ? (0, s.jsx)("div", {
                  className:
                    "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4",
                  children: (0, s.jsxs)("div", {
                    className:
                      "w-full max-w-3xl rounded bg-white p-5 shadow-lg",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "mb-4 flex items-start justify-between",
                        children: [
                          (0, s.jsxs)("div", {
                            children: [
                              (0, s.jsx)("h2", {
                                className: "text-2xl font-bold text-gray-900",
                                children: "Redemption History",
                              }),
                              (0, s.jsxs)("p", {
                                className: "text-sm text-gray-700",
                                children: [
                                  "Code:",
                                  " ",
                                  (0, s.jsx)("span", {
                                    className:
                                      "font-mono text-xs text-gray-500",
                                    children: t,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, s.jsx)(i.A, {
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
                        ? (0, s.jsx)("p", {
                            className: "text-red-500 text-sm font-semibold",
                            children: b,
                          })
                        : x
                          ? (0, s.jsx)("p", {
                              className: "text-sm text-gray-700",
                              children: "Loading…",
                            })
                          : 0 === o.length
                            ? (0, s.jsx)("p", {
                                className: "text-sm text-gray-700",
                                children: "No redemptions recorded.",
                              })
                            : (0, s.jsx)(d.o, {
                                entries: o,
                                onOpenUser: l,
                                showCodeColumn: !0,
                                summaryLabel: ""
                                  .concat(o.length, " redemption")
                                  .concat(1 === o.length ? "" : "s", " loaded"),
                                loadMore: m
                                  ? { hasMore: !0, onLoadMore: y, loading: g }
                                  : void 0,
                              }),
                    ],
                  }),
                })
              : null;
          }
          ((n = (o.then ? (await o)() : o)[0]), l());
        } catch (e) {
          l(e);
        }
      });
    },
    93485: (e, t, a) => {
      "use strict";
      a.a(e, async (e, l) => {
        try {
          a.d(t, { z: () => g });
          var s = a(2183),
            r = a(36439),
            n = a(72354),
            i = a(4198),
            d = a(96212),
            o = a(91593),
            c = a(88290),
            m = a(15711),
            u = a(75109),
            x = a(51400),
            p = e([u]);
          u = (p.then ? (await p)() : p)[0];
          let h = new Intl.NumberFormat(void 0, {
              style: "percent",
              minimumFractionDigits: 0,
              maximumFractionDigits: 1,
            }),
            b = ["NONE", "ASSIGNED", "UNIQUE", "STATIC"];
          function g(e) {
            var t, a;
            let {
                campaigns: l,
                campaignFilters: p,
                setCampaignFilters: g,
                campaignSort: f,
                onCampaignSortClick: y,
                onLoadMoreCampaigns: v,
                campaignsNextPage: j,
                loadingMoreCampaigns: N,
                onCreateCampaign: w,
                campaignExportError: C,
                onCreateCodes: k,
                onShowCampaignDetails: S,
                onExportCampaignCodes: I,
                exportingCampaignId: A,
                onEditCampaign: E,
                onDeleteCampaign: F,
                selectedCampaign: R,
                campaignCodes: L,
                campaignCodesError: D,
                loadingCampaignCodes: M,
                campaignsById: T,
                items: U,
                onOpenUser: P,
                onOpenRedemptionHistory: B,
                campaignCodesNextToken: O,
                loadMoreCampaignCodes: z,
                loadingMoreCampaignCodes: V,
                actionFeedback: _,
                onDismissActionFeedback: K,
              } = e,
              [Q, G] = (0, r.useState)(null),
              q = {
                "in-progress": {
                  container: "border-indigo-200 bg-indigo-50 text-indigo-900",
                  icon: (0, s.jsx)(i.A, {
                    className: "h-5 w-5 animate-spin text-indigo-600",
                  }),
                },
                success: {
                  container:
                    "border-emerald-200 bg-emerald-50 text-emerald-900",
                  icon: (0, s.jsx)(d.A, {
                    className: "h-5 w-5 text-emerald-600",
                  }),
                },
                error: {
                  container: "border-rose-200 bg-rose-50 text-rose-900",
                  icon: (0, s.jsx)(o.A, { className: "text-rose-600 h-5 w-5" }),
                },
              };
            return (
              (0, r.useEffect)(() => {
                function e(e) {
                  if (!(e.target instanceof Node)) return;
                  let t = document.getElementById("campaign-actions-menu");
                  (t && t.contains(e.target)) || G(null);
                }
                function t(e) {
                  "Escape" === e.key && G(null);
                }
                return (
                  window.addEventListener("mousedown", e),
                  window.addEventListener("keydown", t),
                  window.addEventListener("scroll", () => G(null), !0),
                  () => {
                    (window.removeEventListener("mousedown", e),
                      window.removeEventListener("keydown", t),
                      window.removeEventListener("scroll", () => G(null), !0));
                  }
                );
              }, []),
              (0, s.jsxs)("div", {
                className:
                  "mx-auto max-w-7xl rounded-lg bg-white p-4 text-gray-900 shadow",
                children: [
                  (0, s.jsxs)("div", {
                    className:
                      "mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",
                    children: [
                      (0, s.jsxs)("div", {
                        children: [
                          (0, s.jsx)("h1", {
                            className: "text-2xl font-bold",
                            children: "Campaigns",
                          }),
                          (0, s.jsx)("p", {
                            className: "text-sm text-gray-700",
                            children:
                              "Create campaigns and manage their details.",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className:
                          "flex flex-col items-stretch gap-2 sm:flex-row sm:items-center",
                        children: [
                          (0, s.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [
                              (0, s.jsx)("label", {
                                htmlFor: "campaign-status-filter",
                                className: "text-sm text-gray-700",
                                children: "Status",
                              }),
                              (0, s.jsxs)("select", {
                                id: "campaign-status-filter",
                                className:
                                  "rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none",
                                value: null != (t = p.status) ? t : "",
                                onChange: (e) => {
                                  let t = u.Q8C.safeParse(e.target.value);
                                  g((e) => {
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
                                  (0, s.jsx)("option", {
                                    value: "",
                                    children: "All",
                                  }),
                                  (0, s.jsx)("option", {
                                    value: "active",
                                    children: "Active",
                                  }),
                                  (0, s.jsx)("option", {
                                    value: "scheduled",
                                    children: "Scheduled",
                                  }),
                                  (0, s.jsx)("option", {
                                    value: "expired",
                                    children: "Expired",
                                  }),
                                  (0, s.jsx)("option", {
                                    value: "redeemed",
                                    children: "Redeemed",
                                  }),
                                  (0, s.jsx)("option", {
                                    value: "inactive",
                                    children: "Inactive",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [
                              (0, s.jsx)("label", {
                                htmlFor: "campaign-code-kind-filter",
                                className: "text-sm text-gray-700",
                                children: "Code Kind",
                              }),
                              (0, s.jsxs)("select", {
                                id: "campaign-code-kind-filter",
                                className:
                                  "rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none",
                                value:
                                  null != (a = p.distinctCodeKind) ? a : "",
                                onChange: (e) => {
                                  let t = e.target.value,
                                    a =
                                      t && b.some((e) => e === t) ? t : void 0;
                                  g((e) => {
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
                                  (0, s.jsx)("option", {
                                    value: "",
                                    children: "All",
                                  }),
                                  (0, s.jsx)("option", {
                                    value: "NONE",
                                    children: "None",
                                  }),
                                  (0, s.jsx)("option", {
                                    value: "ASSIGNED",
                                    children: "Assigned",
                                  }),
                                  (0, s.jsx)("option", {
                                    value: "UNIQUE",
                                    children: "Unique",
                                  }),
                                  (0, s.jsx)("option", {
                                    value: "STATIC",
                                    children: "Static",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            className: "flex gap-2",
                            children: [
                              (0, s.jsx)(m.A, {
                                type: "button",
                                variant: "dark",
                                onClick: v,
                                disabled: !j || N,
                                loading: N,
                                className:
                                  "rounded border border-gray-300 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60",
                                children: N ? "Loading…" : "Load More",
                              }),
                              (0, s.jsx)(m.A, {
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
                    (0, s.jsx)("div", {
                      className: "mb-3 space-y-2",
                      role: "status",
                      "aria-live": "polite",
                      "aria-atomic": "false",
                      children: _.map((e) => {
                        let t = q[e.state];
                        return (0, s.jsxs)(
                          "div",
                          {
                            className:
                              "flex items-start gap-3 rounded border px-3 py-2 text-sm shadow-sm ".concat(
                                t.container,
                              ),
                            children: [
                              (0, s.jsx)("span", {
                                className: "mt-0.5 flex-shrink-0",
                                children: t.icon,
                              }),
                              (0, s.jsxs)("div", {
                                className: "flex-1",
                                children: [
                                  (0, s.jsx)("p", {
                                    className: "font-semibold leading-5",
                                    children: e.message,
                                  }),
                                  (0, s.jsx)("p", {
                                    className: "text-xs text-gray-700",
                                    children:
                                      "export" === e.action
                                        ? "Exporting campaign codes."
                                        : "Deleting campaign and associated codes.",
                                  }),
                                ],
                              }),
                              "in-progress" !== e.state &&
                                (0, s.jsx)("button", {
                                  type: "button",
                                  onClick: () => K(e.id),
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
                    (0, s.jsx)("p", {
                      className: "mt-2 text-sm font-semibold text-red-500",
                      children: C,
                    }),
                  (0, s.jsx)("div", {
                    className: "overflow-x-auto overflow-y-visible",
                    children: (0, s.jsxs)("table", {
                      className:
                        "min-w-full border border-gray-200 text-left text-sm",
                      children: [
                        (0, s.jsx)("thead", {
                          className: "bg-gray-50 text-gray-700",
                          children: (0, s.jsxs)("tr", {
                            children: [
                              (0, s.jsx)("th", {
                                className: "border-b px-3 py-2",
                                children: "Name",
                              }),
                              (0, s.jsx)("th", {
                                className: "border-b px-3 py-2",
                                children: "Description",
                              }),
                              (0, s.jsx)("th", {
                                className: "border-b px-3 py-2",
                                children: "Statuses",
                              }),
                              (0, s.jsx)("th", {
                                className: "border-b px-3 py-2",
                                children: "Redeemed %",
                              }),
                              (0, s.jsx)("th", {
                                className: "border-b px-3 py-2",
                                children: "Code Kinds",
                              }),
                              (0, s.jsx)("th", {
                                className: "border-b px-3 py-2",
                                children: "Codes",
                              }),
                              (0, s.jsx)("th", {
                                className: "border-b px-3 py-2",
                                children: "Redeemed",
                              }),
                              (0, s.jsx)("th", {
                                className: "border-b px-3 py-2",
                                "aria-sort":
                                  (null == f ? void 0 : f.column) === "startsAt"
                                    ? "desc" === f.direction
                                      ? "descending"
                                      : "ascending"
                                    : "none",
                                children: (0, s.jsxs)(m.A, {
                                  type: "button",
                                  variant: "dark",
                                  onClick: () => y("startsAt"),
                                  className:
                                    "flex w-full items-center gap-1 text-left text-sm font-medium text-gray-700 hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                                  children: [
                                    "Starts",
                                    (null == f ? void 0 : f.column) ===
                                    "startsAt"
                                      ? (0, s.jsx)("span", {
                                          className: "text-xs",
                                          children:
                                            "desc" === f.direction ? "↓" : "↑",
                                        })
                                      : null,
                                  ],
                                }),
                              }),
                              (0, s.jsx)("th", {
                                className: "border-b px-3 py-2",
                                children: "Ends",
                              }),
                              (0, s.jsx)("th", {
                                className: "border-b px-3 py-2",
                                "aria-sort":
                                  (null == f ? void 0 : f.column) ===
                                  "createdAt"
                                    ? "desc" === f.direction
                                      ? "descending"
                                      : "ascending"
                                    : "none",
                                children: (0, s.jsxs)(m.A, {
                                  type: "button",
                                  variant: "dark",
                                  onClick: () => y("createdAt"),
                                  className:
                                    "flex w-full items-center gap-1 text-left text-sm font-medium text-gray-700 hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                                  children: [
                                    "Created",
                                    (null == f ? void 0 : f.column) ===
                                    "createdAt"
                                      ? (0, s.jsx)("span", {
                                          className: "text-xs",
                                          children:
                                            "desc" === f.direction ? "↓" : "↑",
                                        })
                                      : null,
                                  ],
                                }),
                              }),
                              (0, s.jsx)("th", {
                                className: "border-b px-3 py-2",
                                children: "Actions",
                              }),
                            ],
                          }),
                        }),
                        (0, s.jsx)("tbody", {
                          children:
                            0 === l.length
                              ? (0, s.jsx)("tr", {
                                  children: (0, s.jsx)("td", {
                                    className: "border-b px-3 py-3",
                                    colSpan: 11,
                                    children:
                                      "No campaigns found. Create one to begin assigning codes.",
                                  }),
                                })
                              : l.map((e) => {
                                  var t, a, l, r, n, i;
                                  let d =
                                      null != (t = e.staticCodeCount) ? t : 0,
                                    o = null != (a = e.uniqueCodeCount) ? a : 0,
                                    m =
                                      null != (l = e.assignedCodeCount) ? l : 0,
                                    u = d + o + m,
                                    x =
                                      null != (r = e.staticCodesRedeemedCount)
                                        ? r
                                        : 0,
                                    p =
                                      null != (n = e.uniqueCodesRedeemedCount)
                                        ? n
                                        : 0,
                                    g =
                                      null != (i = e.assignedCodesRedeemedCount)
                                        ? i
                                        : 0,
                                    b = x + p + g;
                                  return (0, s.jsxs)(
                                    "tr",
                                    {
                                      className: "odd:bg-white even:bg-gray-50",
                                      children: [
                                        (0, s.jsx)("td", {
                                          className: "border-b px-3 py-2",
                                          children: (0, s.jsxs)("div", {
                                            className: "flex flex-col",
                                            children: [
                                              (0, s.jsx)("span", {
                                                children: e.name,
                                              }),
                                              (0, s.jsx)("span", {
                                                className:
                                                  "font-mono text-xs text-gray-500",
                                                children: e.id,
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, s.jsx)("td", {
                                          className: "border-b px-3 py-2",
                                          children: e.description,
                                        }),
                                        (0, s.jsx)("td", {
                                          className: "border-b px-3 py-2",
                                          children:
                                            e.statuses && e.statuses.length > 0
                                              ? (0, s.jsx)("div", {
                                                  className:
                                                    "flex flex-wrap gap-1",
                                                  children: e.statuses.map(
                                                    (e) =>
                                                      (0, s.jsx)(
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
                                        (0, s.jsx)("td", {
                                          className: "border-b px-3 py-2",
                                          children:
                                            null == e.redeemedPercent
                                              ? "—"
                                              : h.format(e.redeemedPercent),
                                        }),
                                        (0, s.jsx)("td", {
                                          className: "border-b px-3 py-2",
                                          children:
                                            Array.isArray(
                                              e.distinctCodeKinds,
                                            ) && e.distinctCodeKinds.length > 0
                                              ? (0, s.jsx)("div", {
                                                  className:
                                                    "flex flex-wrap gap-1",
                                                  children:
                                                    e.distinctCodeKinds.map(
                                                      (e) =>
                                                        (0, s.jsx)(
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
                                        (0, s.jsx)("td", {
                                          className: "border-b px-3 py-2",
                                          children: (0, s.jsxs)("div", {
                                            className:
                                              "flex items-center gap-1",
                                            children: [
                                              (0, s.jsx)("span", {
                                                children: u.toLocaleString(),
                                              }),
                                              (0, s.jsx)(c.A, {
                                                className:
                                                  "h-4 w-4 cursor-help text-gray-500",
                                                title: "Static: "
                                                  .concat(
                                                    d.toLocaleString(),
                                                    "\nUnique: ",
                                                  )
                                                  .concat(
                                                    o.toLocaleString(),
                                                    "\nAssigned: ",
                                                  )
                                                  .concat(m.toLocaleString()),
                                                "aria-label":
                                                  "Code counts breakdown",
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, s.jsx)("td", {
                                          className: "border-b px-3 py-2",
                                          children: (0, s.jsxs)("div", {
                                            className:
                                              "flex items-center gap-1",
                                            children: [
                                              (0, s.jsx)("span", {
                                                children: b.toLocaleString(),
                                              }),
                                              (0, s.jsx)(c.A, {
                                                className:
                                                  "h-4 w-4 cursor-help text-gray-500",
                                                title: "Static: "
                                                  .concat(
                                                    x.toLocaleString(),
                                                    "\nUnique: ",
                                                  )
                                                  .concat(
                                                    p.toLocaleString(),
                                                    "\nAssigned: ",
                                                  )
                                                  .concat(g.toLocaleString()),
                                                "aria-label":
                                                  "Redeemed codes breakdown",
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, s.jsx)("td", {
                                          className: "border-b px-3 py-2",
                                          children: e.startsAt
                                            ? new Date(
                                                e.startsAt,
                                              ).toLocaleString()
                                            : "—",
                                        }),
                                        (0, s.jsx)("td", {
                                          className: "border-b px-3 py-2",
                                          children: e.endsAt
                                            ? new Date(
                                                e.endsAt,
                                              ).toLocaleString()
                                            : "—",
                                        }),
                                        (0, s.jsx)("td", {
                                          className: "border-b px-3 py-2",
                                          children: new Date(
                                            e.createdAt,
                                          ).toLocaleString(),
                                        }),
                                        (0, s.jsx)("td", {
                                          className:
                                            "border-b px-3 py-2 align-top",
                                          children: (0, s.jsx)("div", {
                                            className: "inline-block text-left",
                                            children: (0, s.jsxs)("button", {
                                              type: "button",
                                              onClick: (t) =>
                                                (function (e, t) {
                                                  let a =
                                                      e.currentTarget.getBoundingClientRect(),
                                                    l =
                                                      window.innerHeight -
                                                      a.bottom,
                                                    s =
                                                      a.right -
                                                      180 +
                                                      window.scrollX,
                                                    r =
                                                      l < 220
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
                                                          top: r,
                                                          left: s,
                                                        },
                                                  );
                                                })(t, e.id),
                                              className:
                                                "inline-flex items-center gap-1 rounded border border-gray-300 px-2 py-1 text-xs font-semibold text-gray-700 shadow-sm transition hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                                              children: [
                                                "Actions",
                                                (0, s.jsx)("span", {
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
                  Q &&
                    (0, n.createPortal)(
                      (0, s.jsx)("div", {
                        id: "campaign-actions-menu",
                        style: {
                          position: "absolute",
                          top: Q.top,
                          left: Q.left,
                          width: 180,
                        },
                        className:
                          "z-50 rounded-md border border-gray-200 bg-white shadow-xl",
                        children: (0, s.jsxs)("div", {
                          className: "flex flex-col divide-y divide-gray-100",
                          children: [
                            (0, s.jsx)("button", {
                              type: "button",
                              onClick: () => {
                                (k({ campaignId: Q.campaignId }), G(null));
                              },
                              className:
                                "px-3 py-2 text-left text-sm text-gray-800 transition hover:bg-gray-50",
                              children: "Create codes",
                            }),
                            (0, s.jsx)("button", {
                              type: "button",
                              onClick: () => {
                                var e;
                                (S({
                                  id: Q.campaignId,
                                  name:
                                    null == (e = T[Q.campaignId])
                                      ? void 0
                                      : e.name,
                                }),
                                  G(null));
                              },
                              className:
                                "px-3 py-2 text-left text-sm text-gray-800 transition hover:bg-gray-50",
                              children: "View details",
                            }),
                            (0, s.jsx)("button", {
                              type: "button",
                              onClick: () => {
                                (I(Q.campaignId), G(null));
                              },
                              disabled: A === Q.campaignId,
                              className:
                                "px-3 py-2 text-left text-sm text-gray-800 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60",
                              children:
                                A === Q.campaignId
                                  ? "Exporting…"
                                  : "Export CSV",
                            }),
                            (0, s.jsx)("button", {
                              type: "button",
                              onClick: () => {
                                let e = T[Q.campaignId];
                                (e && E(e), G(null));
                              },
                              className:
                                "px-3 py-2 text-left text-sm text-gray-800 transition hover:bg-gray-50",
                              children: "Edit",
                            }),
                            (0, s.jsx)("button", {
                              type: "button",
                              onClick: () => {
                                let e = T[Q.campaignId];
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
                  (0, s.jsx)("div", {
                    className: "mt-6 border-t border-gray-200 pt-4",
                    children: R
                      ? (0, s.jsx)(x.y, {
                          embedded: !0,
                          selectedCampaign: R,
                          campaignCodes: L,
                          campaignCodesError: D,
                          loadingCampaignCodes: M,
                          campaignsById: T,
                          items: U,
                          onOpenUser: P,
                          onOpenRedemptionHistory: B,
                          campaignCodesNextToken: O,
                          loadMoreCampaignCodes: z,
                          loadingMoreCampaignCodes: V,
                        })
                      : (0, s.jsx)("div", {
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
          l();
        } catch (e) {
          l(e);
        }
      });
    },
    96970: (e, t, a) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/admin/codes",
        function () {
          return a(30162);
        },
      ]);
    },
    99891: (e, t, a) => {
      "use strict";
      a.a(e, async (e, l) => {
        try {
          a.d(t, { R: () => c });
          var s = a(2183),
            r = a(75109),
            n = a(36439),
            i = a(15711),
            d = a(55109),
            o = e([r, d]);
          function c(e) {
            let { items: t, onClose: a, onCreated: l } = e,
              [o, c] = (0, n.useState)(null),
              [m, u] = (0, n.useState)(!1),
              [x, p] = (0, n.useState)({
                playFabItemId: "",
                redemptionInstructions: "",
                lowStockThreshold: "",
                internalNotes: "",
                provider: "",
                providerSku: "",
              });
            async function g() {
              var e, t;
              c(null);
              let s = x.playFabItemId.trim();
              if (!s) return void c("Select a PlayFab item.");
              let r = x.redemptionInstructions.trim();
              if (!r) return void c("Enter redemption instructions.");
              let n = x.lowStockThreshold.trim(),
                i = Number.parseInt(n, 10);
              if ("" === n || !Number.isInteger(i) || i < 0)
                return void c(
                  "Low-stock threshold must be a non-negative integer.",
                );
              let o = {
                playFabItemId: s,
                redemptionInstructions: r,
                lowStockThreshold: i,
                internalNotes: x.internalNotes.trim() || void 0,
                provider: x.provider.trim() || void 0,
                providerSku: x.providerSku.trim() || void 0,
              };
              u(!0);
              let m = await (0, d.Ck)(o);
              if (m.error) {
                (c(
                  null != (t = m.error.errorMessage)
                    ? t
                    : "Failed to create external code reward.",
                ),
                  u(!1));
                return;
              }
              let p = null == (e = m.data) ? void 0 : e.reward;
              if (p) {
                (l(p), a(), u(!1));
                return;
              }
              (c("Failed to create external code reward."), u(!1));
            }
            return (0, s.jsx)("div", {
              className:
                "fixed inset-0 z-40 flex items-center justify-center bg-black/50 p-4",
              children: (0, s.jsxs)("div", {
                className:
                  "max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white p-6 text-gray-900 shadow-xl",
                children: [
                  (0, s.jsxs)("div", {
                    className: "flex items-start justify-between",
                    children: [
                      (0, s.jsxs)("div", {
                        children: [
                          (0, s.jsx)("h2", {
                            className: "text-xl font-semibold",
                            children: "Create External Code Reward",
                          }),
                          (0, s.jsx)("p", {
                            className: "text-sm text-gray-600",
                            children:
                              "Define metadata for a new external code pool before uploading codes.",
                          }),
                        ],
                      }),
                      (0, s.jsx)(i.A, {
                        type: "button",
                        variant: "dark",
                        className:
                          "text-gray-500 transition hover:text-gray-700",
                        onClick: a,
                        children: "\xd7",
                      }),
                    ],
                  }),
                  o &&
                    (0, s.jsx)("p", {
                      className: "text-red-500 mt-3 text-sm font-semibold",
                      children: o,
                    }),
                  (0, s.jsxs)("div", {
                    className: "mt-4 flex flex-col gap-4",
                    children: [
                      (0, s.jsxs)("div", {
                        children: [
                          (0, s.jsx)("label", {
                            className:
                              "mb-1 block text-sm font-medium text-gray-700",
                            children: "PlayFab Item",
                          }),
                          (0, s.jsxs)("select", {
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
                              (0, s.jsx)("option", {
                                value: "",
                                disabled: !0,
                                children: "Select an item…",
                              }),
                              t
                                .filter(
                                  (e) => e.type === r.I5m.EXTERNAL_CODE_REWARD,
                                )
                                .map((e) =>
                                  (0, s.jsxs)(
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
                      (0, s.jsxs)("div", {
                        children: [
                          (0, s.jsx)("label", {
                            className:
                              "mb-1 block text-sm font-medium text-gray-700",
                            children: "Redemption Instructions",
                          }),
                          (0, s.jsx)("textarea", {
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
                      (0, s.jsxs)("div", {
                        className: "grid gap-4 sm:grid-cols-3",
                        children: [
                          (0, s.jsxs)("div", {
                            children: [
                              (0, s.jsx)("label", {
                                className:
                                  "mb-1 block text-sm font-medium text-gray-700",
                                children: "Low-stock Threshold",
                              }),
                              (0, s.jsx)("input", {
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
                          (0, s.jsxs)("div", {
                            children: [
                              (0, s.jsx)("label", {
                                className:
                                  "mb-1 block text-sm font-medium text-gray-700",
                                children: "Provider (optional)",
                              }),
                              (0, s.jsx)("input", {
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
                          (0, s.jsxs)("div", {
                            children: [
                              (0, s.jsx)("label", {
                                className:
                                  "mb-1 block text-sm font-medium text-gray-700",
                                children: "Provider SKU (optional)",
                              }),
                              (0, s.jsx)("input", {
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
                      (0, s.jsxs)("div", {
                        children: [
                          (0, s.jsx)("label", {
                            className:
                              "mb-1 block text-sm font-medium text-gray-700",
                            children: "Internal Notes (optional)",
                          }),
                          (0, s.jsx)("textarea", {
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
                  (0, s.jsxs)("div", {
                    className: "mt-6 flex justify-end gap-2",
                    children: [
                      (0, s.jsx)(i.A, {
                        type: "button",
                        variant: "dark",
                        onClick: a,
                        className:
                          "rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-100",
                        disabled: m,
                        children: "Cancel",
                      }),
                      (0, s.jsx)(i.A, {
                        type: "button",
                        variant: "darkBackground",
                        onClick: () => void g(),
                        className:
                          "rounded bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-indigo-300",
                        disabled: m,
                        loading: m,
                        children: m ? "Creating…" : "Create Reward",
                      }),
                    ],
                  }),
                ],
              }),
            });
          }
          (([r, d] = o.then ? (await o)() : o), l());
        } catch (e) {
          l(e);
        }
      });
    },
  },
  (e) => {
    (e.O(0, [6006, 9820, 636, 6593, 8792], () => e((e.s = 96970))),
      (_N_E = e.O()));
  },
]);
