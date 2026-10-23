(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3550],
  {
    5327: (e, t, a) => {
      "use strict";
      a.a(e, async (e, s) => {
        try {
          a.d(t, { V: () => d });
          var r = a(2183),
            l = a(64171),
            n = a(83737),
            i = e([n]);
          function d({
            campaign: e,
            onClose: t,
            onDeleted: a,
            onActionStart: s,
            onActionResolve: i,
          }) {
            let o =
              (e.staticCodeCount ?? 0) +
              (e.uniqueCodeCount ?? 0) +
              (e.assignedCodeCount ?? 0);
            async function c() {
              let r =
                s?.({
                  action: "delete",
                  campaignId: e.id,
                  campaignName: e.name,
                  message: `Deleting "${e.name}"…`,
                }) ?? "";
              t();
              let l = await (0, n.K_)({ id: e.id });
              if (l.error) {
                let e = l.error.errorMessage ?? "Failed to delete campaign";
                r && i?.(r, "error", e);
                return;
              }
              (r && i?.(r, "success", `Deleted "${e.name}".`), a());
            }
            return (0, r.jsx)("div", {
              className:
                "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3",
              role: "dialog",
              "aria-modal": "true",
              "aria-labelledby": "delete-campaign-title",
              children: (0, r.jsxs)("div", {
                className:
                  "w-full max-w-lg rounded bg-white p-4 text-gray-900 shadow-xl",
                children: [
                  (0, r.jsxs)("div", {
                    className: "mb-3",
                    children: [
                      (0, r.jsx)("h2", {
                        id: "delete-campaign-title",
                        className: "text-lg font-semibold",
                        children: "Delete Campaign",
                      }),
                      (0, r.jsxs)("p", {
                        className: "mt-1 text-sm text-gray-700",
                        children: [
                          "Deleting ",
                          (0, r.jsx)("span", {
                            className: "font-semibold",
                            children: e.name,
                          }),
                          " will remove ",
                          o,
                          " code",
                          1 === o ? "" : "s",
                          ". This cannot be undone.",
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: "flex justify-end gap-2",
                    children: [
                      (0, r.jsx)(l.A, {
                        type: "button",
                        variant: "dark",
                        onClick: t,
                        className:
                          "rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-100",
                        "aria-label": "Cancel delete campaign",
                        children: "Cancel",
                      }),
                      (0, r.jsx)(l.A, {
                        type: "button",
                        variant: "error",
                        onClick: c,
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
          ((n = (i.then ? (await i)() : i)[0]), s());
        } catch (e) {
          s(e);
        }
      });
    },
    7828: (e, t, a) => {
      "use strict";
      a.d(t, { L: () => i, r: () => n });
      var s = a(80707),
        r = a.n(s),
        l = a(47996);
      function n(e) {
        return [...e].sort((e, t) =>
          e.updatedAt === t.updatedAt
            ? e.playFabItemId.localeCompare(t.playFabItemId)
            : t.updatedAt - e.updatedAt,
        );
      }
      function i(e) {
        let t = (0, l.parse)(e, { skipEmptyLines: !1, delimiter: "," });
        if (t.errors.length > 0) {
          let [e] = t.errors;
          throw Error(e?.message ?? "Failed to parse CSV file.");
        }
        let a = [],
          s = 0,
          n = 0;
        for (let e of t.data) {
          let t = r().first(e)?.trim();
          if (!t) {
            n += 1;
            continue;
          }
          ((s += 1), a.push(t));
        }
        return {
          processedRows: s,
          trimmedCodes: a,
          ignoredCount: n,
          sampleRows: a.slice(0, 5),
        };
      }
    },
    12401: (e, t, a) => {
      "use strict";
      a.d(t, { v: () => n });
      var s = a(2183),
        r = a(64171),
        l = a(95196);
      function n({
        selectedCampaign: e,
        campaignRedemptions: t,
        campaignRedemptionsError: a,
        loadingCampaignRedemptions: i,
        loadingMoreCampaignRedemptions: d,
        campaignRedemptionsNextToken: o,
        onRefresh: c,
        onLoadMore: m,
        onOpenUser: x,
      }) {
        return (0, s.jsxs)("div", {
          className:
            "mx-auto mt-4 max-w-7xl rounded-lg bg-white p-4 text-gray-900 shadow",
          children: [
            (0, s.jsxs)("div", {
              className:
                "mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",
              children: [
                (0, s.jsxs)("div", {
                  children: [
                    (0, s.jsx)("h2", {
                      className: "text-2xl font-bold",
                      children: "Redemption History",
                    }),
                    e
                      ? (0, s.jsxs)("p", {
                          className: "text-sm text-gray-700",
                          children: [
                            "Campaign:",
                            " ",
                            (0, s.jsx)("span", {
                              className: "font-semibold",
                              children: e.name ?? "Unnamed Campaign",
                            }),
                            " ",
                            (0, s.jsxs)("span", {
                              className: "font-mono text-xs text-gray-500",
                              children: ["(", e.id, ")"],
                            }),
                          ],
                        })
                      : (0, s.jsx)("p", {
                          className: "text-sm text-gray-700",
                          children:
                            'Select "View Details" from a campaign to view recent activity.',
                        }),
                  ],
                }),
                e &&
                  (0, s.jsx)(r.A, {
                    type: "button",
                    variant: "dark",
                    onClick: c,
                    disabled: i || d,
                    loading: i,
                    className:
                      "self-start rounded border border-gray-300 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60 sm:self-auto",
                    children: i ? "Refreshing…" : "Refresh",
                  }),
              ],
            }),
            a
              ? (0, s.jsx)("p", {
                  className: "text-sm font-semibold text-red-500",
                  children: a,
                })
              : i
                ? (0, s.jsx)("p", {
                    className: "text-sm text-gray-700",
                    children: "Loading…",
                  })
                : e
                  ? 0 === t.length
                    ? (0, s.jsx)("p", {
                        className: "text-sm text-gray-700",
                        children: "No redemptions recorded for this campaign.",
                      })
                    : (0, s.jsx)(l.o, {
                        entries: t,
                        onOpenUser: x,
                        showCodeColumn: !0,
                        loadMore: o
                          ? {
                              hasMore: !0,
                              onLoadMore: m,
                              loading: d,
                              disabled: i,
                            }
                          : void 0,
                      })
                  : (0, s.jsx)("p", {
                      className: "text-sm text-gray-700",
                      children: "Choose a campaign to populate this table.",
                    }),
          ],
        });
      }
    },
    14628: (e, t, a) => {
      "use strict";
      a.a(e, async (e, s) => {
        try {
          a.d(t, { k: () => p });
          var r = a(2183),
            l = a(36439),
            n = a(64171),
            i = a(39188),
            d = a(83737),
            o = a(7828),
            c = a(73055),
            m = a(79860),
            x = a(52804),
            u = e([d, c, m, x]);
          function p({ initialRewards: e, items: t }) {
            let [a, s] = (0, l.useState)((0, o.r)(e)),
              [u, g] = (0, l.useState)(!1),
              [h, b] = (0, l.useState)(!1),
              [f, y] = (0, l.useState)(null),
              [v, j] = (0, l.useState)(null),
              [N, w] = (0, l.useState)(null),
              [C, k] = (0, l.useState)(!1),
              [S, I] = (0, l.useState)(null),
              [A, E] = (0, l.useState)(null),
              F = (0, l.useRef)(!1);
            (0, l.useEffect)(() => {
              s((0, o.r)(e));
            }, [e]);
            let R = (0, l.useMemo)(() => {
                let e = new Map();
                for (let a of t) e.set(a.id, a);
                return e;
              }, [t]),
              L = (0, l.useCallback)(async (e) => {
                (b(!0), y(null));
                let t = await (0, d.qp)(e ? { lowStockOnly: !0 } : {});
                if (t.error) {
                  (y(
                    t.error.errorMessage ??
                      "Failed to load external code rewards.",
                  ),
                    b(!1));
                  return;
                }
                let a = t.data?.rewards ?? [];
                (s((0, o.r)(a)), b(!1));
              }, []);
            (0, l.useEffect)(() => {
              if (!F.current) {
                ((F.current = !0), u && L(!0));
                return;
              }
              L(u);
            }, [L, u]);
            let D = (0, l.useCallback)((e) => {
                (s((t) => {
                  let a = t.some((t) => t.playFabItemId === e.playFabItemId)
                    ? t.map((t) =>
                        t.playFabItemId === e.playFabItemId ? e : t,
                      )
                    : [e, ...t];
                  return (0, o.r)(a);
                }),
                  I((t) =>
                    t && t.reward.playFabItemId === e.playFabItemId
                      ? {
                          reward: e,
                          redemptionInstructions: e.redemptionInstructions,
                          lowStockThreshold: String(e.lowStockThreshold),
                          internalNotes: e.internalNotes ?? "",
                          provider: e.provider ?? "",
                          providerSku: e.providerSku ?? "",
                        }
                      : t,
                  ));
              }, []),
              M = (0, l.useMemo)(() => new Intl.NumberFormat(), []);
            function T() {
              I(null);
            }
            let U = (0, l.useCallback)(async (e) => {
              (j(null), w(e));
              try {
                let t = await (0, d.SV)({ playFabItemId: e });
                t.error &&
                  j(t.error.errorMessage ?? "Failed to export external codes.");
              } finally {
                w(null);
              }
            }, []);
            return (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsxs)("div", {
                  className:
                    "mx-auto mb-4 max-w-7xl rounded-lg bg-white p-4 text-gray-900 shadow",
                  children: [
                    (0, r.jsxs)("div", {
                      className:
                        "mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",
                      children: [
                        (0, r.jsxs)("div", {
                          children: [
                            (0, r.jsx)("h1", {
                              className: "text-2xl font-bold",
                              children: "External Code Rewards",
                            }),
                            (0, r.jsx)("p", {
                              className: "text-sm text-gray-700",
                              children:
                                "Manage external code pools linked to PlayFab items.",
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className:
                            "flex flex-col items-stretch gap-2 sm:flex-row sm:items-center",
                          children: [
                            (0, r.jsx)("label", {
                              className:
                                "flex items-center gap-2 text-sm text-gray-700",
                              children: (0, r.jsx)(i.A, {
                                value: u,
                                onChange: g,
                                children: "Low stock only",
                              }),
                            }),
                            (0, r.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, r.jsx)(n.A, {
                                  type: "button",
                                  variant: "dark",
                                  onClick: () => {
                                    L(u);
                                  },
                                  className:
                                    "rounded border border-gray-300 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100",
                                  disabled: h,
                                  loading: h,
                                  children: h ? "Refreshing…" : "Refresh",
                                }),
                                (0, r.jsx)(n.A, {
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
                      (0, r.jsx)("p", {
                        className: "text-red-500 mb-2 text-sm font-semibold",
                        children: f,
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
                                  children: "PlayFab Item",
                                }),
                                (0, r.jsx)("th", {
                                  className: "border-b px-3 py-2",
                                  children: "Provider",
                                }),
                                (0, r.jsx)("th", {
                                  className: "border-b px-3 py-2",
                                  children: "Available / Total",
                                }),
                                (0, r.jsx)("th", {
                                  className: "border-b px-3 py-2",
                                  children: "Assigned",
                                }),
                                (0, r.jsx)("th", {
                                  className: "border-b px-3 py-2",
                                  children: "Delivered",
                                }),
                                (0, r.jsx)("th", {
                                  className: "border-b px-3 py-2",
                                  children: "Low Stock Threshold",
                                }),
                                (0, r.jsx)("th", {
                                  className: "border-b px-3 py-2",
                                  children: "Status",
                                }),
                                (0, r.jsx)("th", {
                                  className: "border-b px-3 py-2",
                                  children: "Last Upload",
                                }),
                                (0, r.jsx)("th", {
                                  className: "border-b px-3 py-2",
                                  children: "Updated",
                                }),
                                (0, r.jsx)("th", {
                                  className: "border-b px-3 py-2",
                                  children: "Actions",
                                }),
                              ],
                            }),
                          }),
                          (0, r.jsx)("tbody", {
                            children: h
                              ? (0, r.jsx)("tr", {
                                  children: (0, r.jsx)("td", {
                                    className: "px-3 py-3",
                                    colSpan: 10,
                                    children: "Loading external code rewards…",
                                  }),
                                })
                              : 0 === a.length
                                ? (0, r.jsx)("tr", {
                                    children: (0, r.jsx)("td", {
                                      className: "px-3 py-3",
                                      colSpan: 10,
                                      children:
                                        "No external code rewards found. Create one to begin uploading codes.",
                                    }),
                                  })
                                : a.map((e) => {
                                    let t = R.get(e.playFabItemId),
                                      a = t
                                        ? `${t.title}${t.friendlyId ? ` — ${t.friendlyId}` : ""}`
                                        : e.playFabItemId;
                                    return (0, r.jsxs)(
                                      "tr",
                                      {
                                        className:
                                          "odd:bg-white even:bg-gray-50",
                                        children: [
                                          (0, r.jsx)("td", {
                                            className: "border-b px-3 py-2",
                                            children: (0, r.jsxs)("div", {
                                              className: "flex flex-col",
                                              children: [
                                                (0, r.jsx)("span", {
                                                  children: a,
                                                }),
                                                (0, r.jsx)("span", {
                                                  className:
                                                    "font-mono text-xs text-gray-500",
                                                  children: e.playFabItemId,
                                                }),
                                              ],
                                            }),
                                          }),
                                          (0, r.jsx)("td", {
                                            className: "border-b px-3 py-2",
                                            children: e.provider
                                              ? (0, r.jsxs)("div", {
                                                  className:
                                                    "flex flex-col gap-0.5",
                                                  children: [
                                                    (0, r.jsx)("span", {
                                                      children: e.provider,
                                                    }),
                                                    e.providerSku
                                                      ? (0, r.jsxs)("span", {
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
                                          (0, r.jsxs)("td", {
                                            className: "border-b px-3 py-2",
                                            children: [
                                              M.format(e.availableCount),
                                              " /",
                                              " ",
                                              M.format(e.totalCount),
                                            ],
                                          }),
                                          (0, r.jsx)("td", {
                                            className: "border-b px-3 py-2",
                                            children: M.format(e.assignedCount),
                                          }),
                                          (0, r.jsx)("td", {
                                            className: "border-b px-3 py-2",
                                            children: M.format(
                                              e.deliveredCount,
                                            ),
                                          }),
                                          (0, r.jsx)("td", {
                                            className: "border-b px-3 py-2",
                                            children: M.format(
                                              e.lowStockThreshold,
                                            ),
                                          }),
                                          (0, r.jsx)("td", {
                                            className: "border-b px-3 py-2",
                                            children: e.isLowStock
                                              ? (0, r.jsx)("span", {
                                                  className:
                                                    "bg-red-100 text-red-700 inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold uppercase tracking-wide",
                                                  children: "Low",
                                                })
                                              : (0, r.jsx)("span", {
                                                  className:
                                                    "bg-green-100 text-green-700 inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold uppercase tracking-wide",
                                                  children: "Healthy",
                                                }),
                                          }),
                                          (0, r.jsx)("td", {
                                            className: "border-b px-3 py-2",
                                            children: e.lastUploadAt
                                              ? new Date(
                                                  e.lastUploadAt,
                                                ).toLocaleString()
                                              : "—",
                                          }),
                                          (0, r.jsx)("td", {
                                            className: "border-b px-3 py-2",
                                            children: new Date(
                                              e.updatedAt,
                                            ).toLocaleString(),
                                          }),
                                          (0, r.jsx)("td", {
                                            className: "border-b px-3 py-2",
                                            children: (0, r.jsxs)("div", {
                                              className:
                                                "flex flex-col gap-2 sm:flex-row",
                                              children: [
                                                (0, r.jsx)(n.A, {
                                                  type: "button",
                                                  variant: "dark",
                                                  onClick: () => {
                                                    I({
                                                      reward: e,
                                                      redemptionInstructions:
                                                        e.redemptionInstructions,
                                                      lowStockThreshold: String(
                                                        e.lowStockThreshold,
                                                      ),
                                                      internalNotes:
                                                        e.internalNotes ?? "",
                                                      provider:
                                                        e.provider ?? "",
                                                      providerSku:
                                                        e.providerSku ?? "",
                                                    });
                                                  },
                                                  className:
                                                    "rounded border border-gray-300 px-3 py-1 text-xs text-gray-700 hover:bg-gray-100",
                                                  children: "Manage",
                                                }),
                                                (0, r.jsx)(n.A, {
                                                  type: "button",
                                                  variant: "dark",
                                                  onClick: () => {
                                                    E(e);
                                                  },
                                                  className:
                                                    "rounded border border-indigo-600 px-3 py-1 text-xs font-semibold text-indigo-600 hover:bg-indigo-50",
                                                  children: "Upload Codes",
                                                }),
                                                (0, r.jsx)(n.A, {
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
                  (0, r.jsx)("p", {
                    className: "text-red-500 mt-2 text-sm font-semibold",
                    children: v,
                  }),
                C &&
                  (0, r.jsx)(c.R, {
                    items: t,
                    onClose: () => k(!1),
                    onCreated: D,
                  }),
                S &&
                  (0, r.jsx)(m.A, {
                    manageState: S,
                    onClose: T,
                    onUpdate: I,
                    onRewardUpdated: D,
                    onOpenUpload: () => {
                      T();
                      let e = a.find(
                        (e) => e.playFabItemId === S.reward.playFabItemId,
                      );
                      e && E(e);
                    },
                  }),
                A &&
                  (0, r.jsx)(x.Q, {
                    reward: A,
                    onClose: function () {
                      E(null);
                    },
                    onUploaded: D,
                  }),
              ],
            });
          }
          (([d, c, m, x] = u.then ? (await u)() : u), s());
        } catch (e) {
          s(e);
        }
      });
    },
    16917: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => l });
      var s = a(2183),
        r = a(64171);
      function l({
        redeemValue: e,
        onRedeemValueChange: t,
        onRedeemCode: a,
        redeeming: n,
        onListUserRewards: i,
        rewardsLoading: d,
        rewardsError: o,
        userRewards: c,
        onRevealUserReward: m,
        revealingItemId: x,
      }) {
        return (0, s.jsxs)("div", {
          className:
            "mx-auto mt-4 max-w-7xl rounded-lg bg-white p-4 text-gray-900 shadow",
          children: [
            (0, s.jsx)("h2", {
              className: "mb-3 text-lg font-semibold",
              children: "Regular User Utilities",
            }),
            (0, s.jsxs)("div", {
              className: "flex flex-col gap-2 sm:flex-row sm:items-center",
              children: [
                (0, s.jsx)("input", {
                  value: e,
                  onChange: (e) => t(e.target.value),
                  placeholder: "Enter code to redeem",
                  className:
                    "w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none sm:max-w-xs",
                }),
                (0, s.jsx)(r.A, {
                  type: "button",
                  variant: "darkBackground",
                  onClick: a,
                  disabled: n,
                  loading: n,
                  className:
                    "rounded bg-indigo-600 px-3 py-2 text-sm text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60",
                  children: n ? "Redeeming…" : "Redeem Code",
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: "mt-6 border-t border-gray-200 pt-4",
              children: [
                (0, s.jsx)("h3", {
                  className: "mb-2 text-base font-semibold",
                  children: "External Code Rewards",
                }),
                (0, s.jsx)("div", {
                  className: "flex flex-col gap-2 sm:flex-row sm:items-center",
                  children: (0, s.jsx)(r.A, {
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
                  (0, s.jsx)("p", {
                    className: "text-red-500 mt-2 text-sm font-semibold",
                    children: o,
                  }),
                c.length > 0 &&
                  (0, s.jsx)("div", {
                    className: "mt-3 overflow-x-auto",
                    children: (0, s.jsxs)("table", {
                      className: "min-w-full text-left text-sm",
                      children: [
                        (0, s.jsx)("thead", {
                          className: "border-b bg-gray-50 text-gray-700",
                          children: (0, s.jsxs)("tr", {
                            children: [
                              (0, s.jsx)("th", {
                                className: "px-3 py-2",
                                children: "Item",
                              }),
                              (0, s.jsx)("th", {
                                className: "px-3 py-2",
                                children: "Item ID",
                              }),
                              (0, s.jsx)("th", {
                                className: "px-3 py-2",
                                children: "Status",
                              }),
                              (0, s.jsx)("th", {
                                className: "px-3 py-2",
                                children: "Code",
                              }),
                              (0, s.jsx)("th", { className: "px-3 py-2" }),
                            ],
                          }),
                        }),
                        (0, s.jsx)("tbody", {
                          children: c.map((e) =>
                            (0, s.jsxs)(
                              "tr",
                              {
                                className: "border-b last:border-0",
                                children: [
                                  (0, s.jsx)("td", {
                                    className: "px-3 py-2",
                                    children: (0, s.jsxs)("div", {
                                      className: "flex flex-col",
                                      children: [
                                        (0, s.jsx)("span", {
                                          className: "font-medium",
                                          children:
                                            e.title ??
                                            e.friendlyId ??
                                            "(Untitled)",
                                        }),
                                        e.friendlyId &&
                                          (0, s.jsx)("span", {
                                            className: "text-xs text-gray-600",
                                            children: e.friendlyId,
                                          }),
                                      ],
                                    }),
                                  }),
                                  (0, s.jsx)("td", {
                                    className: "px-3 py-2 text-gray-700",
                                    children: e.id,
                                  }),
                                  (0, s.jsx)("td", {
                                    className: "px-3 py-2",
                                    children: (0, s.jsx)("span", {
                                      className:
                                        "assigned" === e.status
                                          ? "bg-green-100 text-green-800 rounded px-2 py-1 text-xs font-semibold"
                                          : "rounded bg-yellow-100 px-2 py-1 text-xs font-semibold text-yellow-800",
                                      children: e.status,
                                    }),
                                  }),
                                  (0, s.jsx)("td", {
                                    className: "px-3 py-2 font-mono text-xs",
                                    children: e.code
                                      ? e.code
                                      : "assigned" === e.status
                                        ? "(hidden)"
                                        : "—",
                                  }),
                                  (0, s.jsx)("td", {
                                    className: "px-3 py-2 text-right",
                                    children:
                                      "available" === e.status
                                        ? (0, s.jsx)(r.A, {
                                            type: "button",
                                            variant: "darkBackground",
                                            onClick: () => m(e.id),
                                            disabled: x === e.id,
                                            loading: x === e.id,
                                            className:
                                              "rounded bg-indigo-600 px-3 py-1.5 text-xs text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60",
                                            children:
                                              x === e.id
                                                ? "Revealing…"
                                                : "Reveal Code",
                                          })
                                        : null,
                                  }),
                                ],
                              },
                              e.id,
                            ),
                          ),
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
    18028: (e, t, a) => {
      "use strict";
      a.a(e, async (e, s) => {
        try {
          a.d(t, { S: () => m });
          var r = a(2183),
            l = a(36439),
            n = a(64171),
            i = a(39188),
            d = a(80050),
            o = a(83737),
            c = e([o]);
          function m({ onClose: e, onCreated: t }) {
            let [a, s] = (0, l.useState)(!1),
              [c, x] = (0, l.useState)(null),
              [u, p] = (0, l.useState)(""),
              [g, h] = (0, l.useState)(""),
              [b, f] = (0, l.useState)(null),
              [y, v] = (0, l.useState)(null),
              [j, N] = (0, l.useState)(!0);
            async function w() {
              if ((x(null), !u.trim())) return void x("Enter a campaign name");
              if (!g.trim()) return void x("Enter a campaign description");
              if (null !== b && null !== y && b >= y)
                return void x("Start must be before end");
              s(!0);
              let a = await (0, o.bi)({
                name: u.trim(),
                description: g.trim(),
                startsAt: b ?? void 0,
                endsAt: y ?? void 0,
                isInactive: j,
              });
              (s(!1), a.error)
                ? x(a.error.errorMessage ?? "Failed to create campaign")
                : (t(), e());
            }
            return (0, r.jsx)("div", {
              className:
                "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3",
              role: "dialog",
              "aria-modal": "true",
              "aria-labelledby": "create-campaign-title",
              children: (0, r.jsxs)("div", {
                className:
                  "w-full max-w-lg rounded bg-white p-4 text-gray-900 shadow-xl",
                children: [
                  (0, r.jsxs)("div", {
                    className: "mb-3 flex items-center justify-between",
                    children: [
                      (0, r.jsx)("h2", {
                        id: "create-campaign-title",
                        className: "text-lg font-semibold",
                        children: "Create Campaign",
                      }),
                      (0, r.jsx)(n.A, {
                        type: "button",
                        variant: "dark",
                        onClick: e,
                        className:
                          "rounded px-2 py-1 text-sm text-gray-600 hover:bg-gray-100",
                        "aria-label": "Close create campaign modal",
                        children: "Close",
                      }),
                    ],
                  }),
                  c &&
                    (0, r.jsx)("p", {
                      className: "text-red-500 mb-3 text-sm font-semibold",
                      role: "alert",
                      children: c,
                    }),
                  (0, r.jsxs)("div", {
                    className: "space-y-3",
                    children: [
                      (0, r.jsxs)("div", {
                        children: [
                          (0, r.jsx)("label", {
                            htmlFor: "campaign-name",
                            className: "mb-1 block text-sm font-medium",
                            children: "Name",
                          }),
                          (0, r.jsx)("input", {
                            id: "campaign-name",
                            value: u,
                            onChange: (e) => p(e.target.value),
                            className:
                              "w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none",
                            "aria-invalid": c?.includes("name")
                              ? "true"
                              : "false",
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        children: [
                          (0, r.jsx)("label", {
                            htmlFor: "campaign-description",
                            className: "mb-1 block text-sm font-medium",
                            children: "Description",
                          }),
                          (0, r.jsx)("textarea", {
                            id: "campaign-description",
                            value: g,
                            onChange: (e) => h(e.target.value),
                            rows: 3,
                            className:
                              "w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none",
                            "aria-invalid": c?.includes("description")
                              ? "true"
                              : "false",
                          }),
                        ],
                      }),
                      (0, r.jsx)(d.A, {
                        label: "Starts",
                        value: b,
                        onChange: (e) => f(e),
                        helperText:
                          "Optional. Leave empty to start immediately.",
                      }),
                      (0, r.jsx)(d.A, {
                        label: "Ends",
                        value: y,
                        onChange: (e) => v(e),
                        helperText:
                          "Optional. Leave empty for a campaign that never ends.",
                      }),
                      (0, r.jsx)("div", {
                        children: (0, r.jsx)(i.A, {
                          value: j,
                          onChange: N,
                          children:
                            "Inactive (campaign is deactivated when checked)",
                        }),
                      }),
                      (0, r.jsxs)("div", {
                        className: "flex justify-end gap-2 pt-2",
                        children: [
                          (0, r.jsx)(n.A, {
                            type: "button",
                            variant: "dark",
                            onClick: e,
                            className:
                              "rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-100",
                            disabled: a,
                            children: "Cancel",
                          }),
                          (0, r.jsx)(n.A, {
                            type: "button",
                            variant: "darkBackground",
                            onClick: w,
                            disabled: a,
                            loading: a,
                            className:
                              "rounded bg-indigo-600 px-3 py-2 text-sm text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60",
                            children: a ? "Creating…" : "Create Campaign",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            });
          }
          ((o = (c.then ? (await c)() : c)[0]), s());
        } catch (e) {
          s(e);
        }
      });
    },
    22121: (e, t, a) => {
      "use strict";
      a.a(e, async (e, s) => {
        try {
          a.d(t, { z: () => g });
          var r = a(2183),
            l = a(36439),
            n = a(72354),
            i = a(4198),
            d = a(96212),
            o = a(91593),
            c = a(88290),
            m = a(64171),
            x = a(75109),
            u = a(84580),
            p = e([x]);
          x = (p.then ? (await p)() : p)[0];
          let h = new Intl.NumberFormat(void 0, {
              style: "percent",
              minimumFractionDigits: 0,
              maximumFractionDigits: 1,
            }),
            b = ["NONE", "ASSIGNED", "UNIQUE", "STATIC"];
          function g({
            campaigns: e,
            campaignFilters: t,
            setCampaignFilters: a,
            campaignSort: s,
            onCampaignSortClick: p,
            onLoadMoreCampaigns: f,
            campaignsNextPage: y,
            loadingMoreCampaigns: v,
            onCreateCampaign: j,
            campaignExportError: N,
            onCreateCodes: w,
            onShowCampaignDetails: C,
            onExportCampaignCodes: k,
            exportingCampaignId: S,
            onEditCampaign: I,
            onDeleteCampaign: A,
            selectedCampaign: E,
            campaignCodes: F,
            campaignCodesError: R,
            loadingCampaignCodes: L,
            campaignsById: D,
            items: M,
            onOpenUser: T,
            onOpenRedemptionHistory: U,
            campaignCodesNextToken: $,
            loadMoreCampaignCodes: P,
            loadingMoreCampaignCodes: B,
            actionFeedback: O,
            onDismissActionFeedback: z,
          }) {
            let [V, _] = (0, l.useState)(null),
              K = {
                "in-progress": {
                  container: "border-indigo-200 bg-indigo-50 text-indigo-900",
                  icon: (0, r.jsx)(i.A, {
                    className: "h-5 w-5 animate-spin text-indigo-600",
                  }),
                },
                success: {
                  container:
                    "border-emerald-200 bg-emerald-50 text-emerald-900",
                  icon: (0, r.jsx)(d.A, {
                    className: "h-5 w-5 text-emerald-600",
                  }),
                },
                error: {
                  container: "border-rose-200 bg-rose-50 text-rose-900",
                  icon: (0, r.jsx)(o.A, { className: "text-rose-600 h-5 w-5" }),
                },
              };
            return (
              (0, l.useEffect)(() => {
                function e(e) {
                  if (!(e.target instanceof Node)) return;
                  let t = document.getElementById("campaign-actions-menu");
                  (t && t.contains(e.target)) || _(null);
                }
                function t(e) {
                  "Escape" === e.key && _(null);
                }
                return (
                  window.addEventListener("mousedown", e),
                  window.addEventListener("keydown", t),
                  window.addEventListener("scroll", () => _(null), !0),
                  () => {
                    (window.removeEventListener("mousedown", e),
                      window.removeEventListener("keydown", t),
                      window.removeEventListener("scroll", () => _(null), !0));
                  }
                );
              }, []),
              (0, r.jsxs)("div", {
                className:
                  "mx-auto max-w-7xl rounded-lg bg-white p-4 text-gray-900 shadow",
                children: [
                  (0, r.jsxs)("div", {
                    className:
                      "mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",
                    children: [
                      (0, r.jsxs)("div", {
                        children: [
                          (0, r.jsx)("h1", {
                            className: "text-2xl font-bold",
                            children: "Campaigns",
                          }),
                          (0, r.jsx)("p", {
                            className: "text-sm text-gray-700",
                            children:
                              "Create campaigns and manage their details.",
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "flex flex-col items-stretch gap-2 sm:flex-row sm:items-center",
                        children: [
                          (0, r.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [
                              (0, r.jsx)("label", {
                                htmlFor: "campaign-status-filter",
                                className: "text-sm text-gray-700",
                                children: "Status",
                              }),
                              (0, r.jsxs)("select", {
                                id: "campaign-status-filter",
                                className:
                                  "rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none",
                                value: t.status ?? "",
                                onChange: (e) => {
                                  let t = x.Q8C.safeParse(e.target.value);
                                  a((e) => {
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
                                  (0, r.jsx)("option", {
                                    value: "",
                                    children: "All",
                                  }),
                                  (0, r.jsx)("option", {
                                    value: "active",
                                    children: "Active",
                                  }),
                                  (0, r.jsx)("option", {
                                    value: "scheduled",
                                    children: "Scheduled",
                                  }),
                                  (0, r.jsx)("option", {
                                    value: "expired",
                                    children: "Expired",
                                  }),
                                  (0, r.jsx)("option", {
                                    value: "redeemed",
                                    children: "Redeemed",
                                  }),
                                  (0, r.jsx)("option", {
                                    value: "inactive",
                                    children: "Inactive",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, r.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [
                              (0, r.jsx)("label", {
                                htmlFor: "campaign-code-kind-filter",
                                className: "text-sm text-gray-700",
                                children: "Code Kind",
                              }),
                              (0, r.jsxs)("select", {
                                id: "campaign-code-kind-filter",
                                className:
                                  "rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none",
                                value: t.distinctCodeKind ?? "",
                                onChange: (e) => {
                                  let t = e.target.value,
                                    s =
                                      t && b.some((e) => e === t) ? t : void 0;
                                  a((e) => {
                                    let t = { ...e };
                                    return (
                                      s
                                        ? (t.distinctCodeKind = s)
                                        : delete t.distinctCodeKind,
                                      t
                                    );
                                  });
                                },
                                children: [
                                  (0, r.jsx)("option", {
                                    value: "",
                                    children: "All",
                                  }),
                                  (0, r.jsx)("option", {
                                    value: "NONE",
                                    children: "None",
                                  }),
                                  (0, r.jsx)("option", {
                                    value: "ASSIGNED",
                                    children: "Assigned",
                                  }),
                                  (0, r.jsx)("option", {
                                    value: "UNIQUE",
                                    children: "Unique",
                                  }),
                                  (0, r.jsx)("option", {
                                    value: "STATIC",
                                    children: "Static",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, r.jsxs)("div", {
                            className: "flex gap-2",
                            children: [
                              (0, r.jsx)(m.A, {
                                type: "button",
                                variant: "dark",
                                onClick: f,
                                disabled: !y || v,
                                loading: v,
                                className:
                                  "rounded border border-gray-300 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60",
                                children: v ? "Loading…" : "Load More",
                              }),
                              (0, r.jsx)(m.A, {
                                type: "button",
                                variant: "darkBackground",
                                onClick: j,
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
                  O.length > 0 &&
                    (0, r.jsx)("div", {
                      className: "mb-3 space-y-2",
                      role: "status",
                      "aria-live": "polite",
                      "aria-atomic": "false",
                      children: O.map((e) => {
                        let t = K[e.state];
                        return (0, r.jsxs)(
                          "div",
                          {
                            className: `flex items-start gap-3 rounded border px-3 py-2 text-sm shadow-sm ${t.container}`,
                            children: [
                              (0, r.jsx)("span", {
                                className: "mt-0.5 flex-shrink-0",
                                children: t.icon,
                              }),
                              (0, r.jsxs)("div", {
                                className: "flex-1",
                                children: [
                                  (0, r.jsx)("p", {
                                    className: "font-semibold leading-5",
                                    children: e.message,
                                  }),
                                  (0, r.jsx)("p", {
                                    className: "text-xs text-gray-700",
                                    children:
                                      "export" === e.action
                                        ? "Exporting campaign codes."
                                        : "Deleting campaign and associated codes.",
                                  }),
                                ],
                              }),
                              "in-progress" !== e.state &&
                                (0, r.jsx)("button", {
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
                  N &&
                    (0, r.jsx)("p", {
                      className: "mt-2 text-sm font-semibold text-red-500",
                      children: N,
                    }),
                  (0, r.jsx)("div", {
                    className: "overflow-x-auto overflow-y-visible",
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
                                children: "Name",
                              }),
                              (0, r.jsx)("th", {
                                className: "border-b px-3 py-2",
                                children: "Description",
                              }),
                              (0, r.jsx)("th", {
                                className: "border-b px-3 py-2",
                                children: "Statuses",
                              }),
                              (0, r.jsx)("th", {
                                className: "border-b px-3 py-2",
                                children: "Redeemed %",
                              }),
                              (0, r.jsx)("th", {
                                className: "border-b px-3 py-2",
                                children: "Code Kinds",
                              }),
                              (0, r.jsx)("th", {
                                className: "border-b px-3 py-2",
                                children: "Codes",
                              }),
                              (0, r.jsx)("th", {
                                className: "border-b px-3 py-2",
                                children: "Redeemed",
                              }),
                              (0, r.jsx)("th", {
                                className: "border-b px-3 py-2",
                                "aria-sort":
                                  s?.column === "startsAt"
                                    ? "desc" === s.direction
                                      ? "descending"
                                      : "ascending"
                                    : "none",
                                children: (0, r.jsxs)(m.A, {
                                  type: "button",
                                  variant: "dark",
                                  onClick: () => p("startsAt"),
                                  className:
                                    "flex w-full items-center gap-1 text-left text-sm font-medium text-gray-700 hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                                  children: [
                                    "Starts",
                                    s?.column === "startsAt"
                                      ? (0, r.jsx)("span", {
                                          className: "text-xs",
                                          children:
                                            "desc" === s.direction ? "↓" : "↑",
                                        })
                                      : null,
                                  ],
                                }),
                              }),
                              (0, r.jsx)("th", {
                                className: "border-b px-3 py-2",
                                children: "Ends",
                              }),
                              (0, r.jsx)("th", {
                                className: "border-b px-3 py-2",
                                "aria-sort":
                                  s?.column === "createdAt"
                                    ? "desc" === s.direction
                                      ? "descending"
                                      : "ascending"
                                    : "none",
                                children: (0, r.jsxs)(m.A, {
                                  type: "button",
                                  variant: "dark",
                                  onClick: () => p("createdAt"),
                                  className:
                                    "flex w-full items-center gap-1 text-left text-sm font-medium text-gray-700 hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                                  children: [
                                    "Created",
                                    s?.column === "createdAt"
                                      ? (0, r.jsx)("span", {
                                          className: "text-xs",
                                          children:
                                            "desc" === s.direction ? "↓" : "↑",
                                        })
                                      : null,
                                  ],
                                }),
                              }),
                              (0, r.jsx)("th", {
                                className: "border-b px-3 py-2",
                                children: "Actions",
                              }),
                            ],
                          }),
                        }),
                        (0, r.jsx)("tbody", {
                          children:
                            0 === e.length
                              ? (0, r.jsx)("tr", {
                                  children: (0, r.jsx)("td", {
                                    className: "border-b px-3 py-3",
                                    colSpan: 11,
                                    children:
                                      "No campaigns found. Create one to begin assigning codes.",
                                  }),
                                })
                              : e.map((e) => {
                                  let t = e.staticCodeCount ?? 0,
                                    a = e.uniqueCodeCount ?? 0,
                                    s = e.assignedCodeCount ?? 0,
                                    l = t + a + s,
                                    n = e.staticCodesRedeemedCount ?? 0,
                                    i = e.uniqueCodesRedeemedCount ?? 0,
                                    d = e.assignedCodesRedeemedCount ?? 0,
                                    o = n + i + d;
                                  return (0, r.jsxs)(
                                    "tr",
                                    {
                                      className: "odd:bg-white even:bg-gray-50",
                                      children: [
                                        (0, r.jsx)("td", {
                                          className: "border-b px-3 py-2",
                                          children: (0, r.jsxs)("div", {
                                            className: "flex flex-col",
                                            children: [
                                              (0, r.jsx)("span", {
                                                children: e.name,
                                              }),
                                              (0, r.jsx)("span", {
                                                className:
                                                  "font-mono text-xs text-gray-500",
                                                children: e.id,
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, r.jsx)("td", {
                                          className: "border-b px-3 py-2",
                                          children: e.description,
                                        }),
                                        (0, r.jsx)("td", {
                                          className: "border-b px-3 py-2",
                                          children:
                                            e.statuses && e.statuses.length > 0
                                              ? (0, r.jsx)("div", {
                                                  className:
                                                    "flex flex-wrap gap-1",
                                                  children: e.statuses.map(
                                                    (e) =>
                                                      (0, r.jsx)(
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
                                        (0, r.jsx)("td", {
                                          className: "border-b px-3 py-2",
                                          children:
                                            null == e.redeemedPercent
                                              ? "—"
                                              : h.format(e.redeemedPercent),
                                        }),
                                        (0, r.jsx)("td", {
                                          className: "border-b px-3 py-2",
                                          children:
                                            Array.isArray(
                                              e.distinctCodeKinds,
                                            ) && e.distinctCodeKinds.length > 0
                                              ? (0, r.jsx)("div", {
                                                  className:
                                                    "flex flex-wrap gap-1",
                                                  children:
                                                    e.distinctCodeKinds.map(
                                                      (e) =>
                                                        (0, r.jsx)(
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
                                        (0, r.jsx)("td", {
                                          className: "border-b px-3 py-2",
                                          children: (0, r.jsxs)("div", {
                                            className:
                                              "flex items-center gap-1",
                                            children: [
                                              (0, r.jsx)("span", {
                                                children: l.toLocaleString(),
                                              }),
                                              (0, r.jsx)(c.A, {
                                                className:
                                                  "h-4 w-4 cursor-help text-gray-500",
                                                title: `Static: ${t.toLocaleString()}
Unique: ${a.toLocaleString()}
Assigned: ${s.toLocaleString()}`,
                                                "aria-label":
                                                  "Code counts breakdown",
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, r.jsx)("td", {
                                          className: "border-b px-3 py-2",
                                          children: (0, r.jsxs)("div", {
                                            className:
                                              "flex items-center gap-1",
                                            children: [
                                              (0, r.jsx)("span", {
                                                children: o.toLocaleString(),
                                              }),
                                              (0, r.jsx)(c.A, {
                                                className:
                                                  "h-4 w-4 cursor-help text-gray-500",
                                                title: `Static: ${n.toLocaleString()}
Unique: ${i.toLocaleString()}
Assigned: ${d.toLocaleString()}`,
                                                "aria-label":
                                                  "Redeemed codes breakdown",
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, r.jsx)("td", {
                                          className: "border-b px-3 py-2",
                                          children: e.startsAt
                                            ? new Date(
                                                e.startsAt,
                                              ).toLocaleString()
                                            : "—",
                                        }),
                                        (0, r.jsx)("td", {
                                          className: "border-b px-3 py-2",
                                          children: e.endsAt
                                            ? new Date(
                                                e.endsAt,
                                              ).toLocaleString()
                                            : "—",
                                        }),
                                        (0, r.jsx)("td", {
                                          className: "border-b px-3 py-2",
                                          children: new Date(
                                            e.createdAt,
                                          ).toLocaleString(),
                                        }),
                                        (0, r.jsx)("td", {
                                          className:
                                            "border-b px-3 py-2 align-top",
                                          children: (0, r.jsx)("div", {
                                            className: "inline-block text-left",
                                            children: (0, r.jsxs)("button", {
                                              type: "button",
                                              onClick: (t) => {
                                                var a;
                                                let s, r, l, n;
                                                return (
                                                  (a = e.id),
                                                  (s =
                                                    t.currentTarget.getBoundingClientRect()),
                                                  (r =
                                                    window.innerHeight -
                                                    s.bottom),
                                                  (l =
                                                    s.right -
                                                    180 +
                                                    window.scrollX),
                                                  (n =
                                                    r < 220
                                                      ? s.top -
                                                        220 +
                                                        window.scrollY -
                                                        8
                                                      : s.bottom +
                                                        window.scrollY +
                                                        8),
                                                  void _((e) =>
                                                    e && e.campaignId === a
                                                      ? null
                                                      : {
                                                          campaignId: a,
                                                          top: n,
                                                          left: l,
                                                        },
                                                  )
                                                );
                                              },
                                              className:
                                                "inline-flex items-center gap-1 rounded border border-gray-300 px-2 py-1 text-xs font-semibold text-gray-700 shadow-sm transition hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                                              children: [
                                                "Actions",
                                                (0, r.jsx)("span", {
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
                  V &&
                    (0, n.createPortal)(
                      (0, r.jsx)("div", {
                        id: "campaign-actions-menu",
                        style: {
                          position: "absolute",
                          top: V.top,
                          left: V.left,
                          width: 180,
                        },
                        className:
                          "z-50 rounded-md border border-gray-200 bg-white shadow-xl",
                        children: (0, r.jsxs)("div", {
                          className: "flex flex-col divide-y divide-gray-100",
                          children: [
                            (0, r.jsx)("button", {
                              type: "button",
                              onClick: () => {
                                (w({ campaignId: V.campaignId }), _(null));
                              },
                              className:
                                "px-3 py-2 text-left text-sm text-gray-800 transition hover:bg-gray-50",
                              children: "Create codes",
                            }),
                            (0, r.jsx)("button", {
                              type: "button",
                              onClick: () => {
                                (C({
                                  id: V.campaignId,
                                  name: D[V.campaignId]?.name,
                                }),
                                  _(null));
                              },
                              className:
                                "px-3 py-2 text-left text-sm text-gray-800 transition hover:bg-gray-50",
                              children: "View details",
                            }),
                            (0, r.jsx)("button", {
                              type: "button",
                              onClick: () => {
                                (k(V.campaignId), _(null));
                              },
                              disabled: S === V.campaignId,
                              className:
                                "px-3 py-2 text-left text-sm text-gray-800 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60",
                              children:
                                S === V.campaignId
                                  ? "Exporting…"
                                  : "Export CSV",
                            }),
                            (0, r.jsx)("button", {
                              type: "button",
                              onClick: () => {
                                let e = D[V.campaignId];
                                (e && I(e), _(null));
                              },
                              className:
                                "px-3 py-2 text-left text-sm text-gray-800 transition hover:bg-gray-50",
                              children: "Edit",
                            }),
                            (0, r.jsx)("button", {
                              type: "button",
                              onClick: () => {
                                let e = D[V.campaignId];
                                (e && A(e), _(null));
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
                  (0, r.jsx)("div", {
                    className: "mt-6 border-t border-gray-200 pt-4",
                    children: E
                      ? (0, r.jsx)(u.y, {
                          embedded: !0,
                          selectedCampaign: E,
                          campaignCodes: F,
                          campaignCodesError: R,
                          loadingCampaignCodes: L,
                          campaignsById: D,
                          items: M,
                          onOpenUser: T,
                          onOpenRedemptionHistory: U,
                          campaignCodesNextToken: $,
                          loadMoreCampaignCodes: P,
                          loadingMoreCampaignCodes: B,
                        })
                      : (0, r.jsx)("div", {
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
          s();
        } catch (e) {
          s(e);
        }
      });
    },
    31078: (e, t, a) => {
      "use strict";
      a.a(e, async (e, s) => {
        try {
          (a.r(t), a.d(t, { __N_SSP: () => j, default: () => N }));
          var r = a(2183),
            l = a(31153),
            n = a(36439),
            i = a(83737),
            d = a(68164),
            o = a(67467),
            c = a(9751),
            m = a(14628),
            x = a(18028),
            u = a(33960),
            p = a(5327),
            g = a(97842),
            h = a(22121),
            b = a(12401),
            f = a(16917),
            y = a(23988),
            v = e([i, d, o, c, m, x, u, p, g, h]);
          [i, d, o, c, m, x, u, p, g, h] = v.then ? (await v)() : v;
          var j = !0;
          function N({ items: e, campaignsPage: t, externalCodeRewards: a }) {
            let s = (0, l.useRouter)(),
              { addAlert: v } = (0, y.Z)(),
              [j, w] = (0, n.useState)(t.items),
              [C, k] = (0, n.useState)(t.nextPage),
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
              (w(t.items), k(t.nextPage));
            }, [t]);
            let M = (0, n.useMemo)(
                () => j.reduce((e, t) => ((e[t.id] = t), e), {}),
                [j],
              ),
              [T, U] = (0, n.useState)(!1),
              [$, P] = (0, n.useState)(null),
              [B, O] = (0, n.useState)(null),
              z = (0, n.useRef)(null),
              [V, _] = (0, n.useState)([]),
              [K, Q] = (0, n.useState)(null),
              [G, q] = (0, n.useState)(null),
              [H, X] = (0, n.useState)(!1),
              [W, Z] = (0, n.useState)(!1),
              [Y, J] = (0, n.useState)(null),
              [ee, et] = (0, n.useState)(null),
              [ea, es] = (0, n.useState)([]),
              er = (0, n.useCallback)(
                () =>
                  `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
                [],
              ),
              el = (0, n.useCallback)(
                (e) => {
                  let t = er();
                  return (
                    es((a) => [
                      {
                        id: t,
                        campaignId: e.campaignId,
                        campaignName: e.campaignName,
                        action: e.action,
                        state: e.state ?? "in-progress",
                        message: e.message,
                      },
                      ...a,
                    ]),
                    t
                  );
                },
                [er],
              ),
              en = (0, n.useCallback)((e, t, a) => {
                (es((s) =>
                  s.map((s) =>
                    s.id === e ? { ...s, state: t, message: a } : s,
                  ),
                ),
                  "in-progress" !== t &&
                    setTimeout(() => {
                      es((t) => t.filter((t) => t.id !== e));
                    }, 4500));
              }, []),
              ei = (0, n.useCallback)((e) => {
                es((t) => t.filter((t) => t.id !== e));
              }, []),
              ed = (0, n.useCallback)(
                (e, t, a) => {
                  (en(e, t, a),
                    "success" === t
                      ? v({ title: "Done", children: a })
                      : "error" === t &&
                        v({ title: "Action failed", children: a }));
                },
                [v, en],
              ),
              [eo, ec] = (0, n.useState)(!1),
              [em, ex] = (0, n.useState)(null),
              [eu, ep] = (0, n.useState)(null),
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
              [e$, eP] = (0, n.useState)(null),
              eB = (0, n.useCallback)(async (e) => {
                (_([]), Q(null), q(null), X(!0), Z(!1));
                let t = await (0, i.KM)({ campaignId: e, limit: 50 });
                if (z.current === e) {
                  if (t.error)
                    (q(t.error.errorMessage ?? "Failed to load campaign codes"),
                      _([]),
                      Q(null));
                  else {
                    let e = t.data;
                    (_(e?.items ?? []), Q(e?.nextToken ?? null));
                  }
                  z.current === e && X(!1);
                }
              }, []),
              eO = (0, n.useCallback)(async (e) => {
                (eF([]), eL(null), eP(null), eM(!0), eU(!1));
                let t = await (0, i.i)({ campaignId: e, limit: 50 });
                if (z.current === e) {
                  if (t.error)
                    (eP(
                      t.error.errorMessage ??
                        "Failed to load redemption history",
                    ),
                      eF([]),
                      eL(null));
                  else {
                    let e = t.data;
                    (eF(e?.items ?? []), eL(e?.nextToken ?? null));
                  }
                  z.current === e && eM(!1);
                }
              }, []),
              ez = (0, n.useCallback)(
                async (e) => {
                  (O(e),
                    (z.current = e.id),
                    await Promise.allSettled([eB(e.id), eO(e.id)]));
                },
                [eB, eO],
              ),
              eV = (0, n.useCallback)(
                async (e) => {
                  (et(null), J(e));
                  let t = M[e]?.name,
                    a = el({
                      action: "export",
                      campaignId: e,
                      campaignName: t,
                      message: t
                        ? `Exporting "${t}" codes…`
                        : "Exporting campaign codes…",
                    });
                  try {
                    let s = await (0, i.p8)({ campaignId: e });
                    if (s.error) {
                      let e =
                        s.error.errorMessage ??
                        "Failed to export campaign codes.";
                      (et(e),
                        en(a, "error", e),
                        v({ title: "Export failed", children: e }));
                      return;
                    }
                    (en(
                      a,
                      "success",
                      t
                        ? `Export ready for "${t}". Download should start shortly.`
                        : "Export ready. Download should start shortly.",
                    ),
                      v({
                        title: "Export started",
                        children: "Your CSV download should start shortly.",
                      }));
                  } catch (t) {
                    let e =
                      t instanceof Error
                        ? t.message
                        : "Failed to export campaign codes.";
                    (et(e),
                      en(a, "error", e),
                      v({ title: "Export failed", children: e }));
                  } finally {
                    J(null);
                  }
                },
                [v, el, M, en],
              ),
              e_ = (0, n.useCallback)(async () => {
                if (!B || !K) return;
                let e = B.id;
                (Z(!0), q(null));
                let t = await (0, i.KM)({
                  campaignId: e,
                  limit: 50,
                  cursor: K,
                });
                if (z.current === e) {
                  if (t.error)
                    q(
                      t.error.errorMessage ??
                        "Failed to load more campaign codes",
                    );
                  else {
                    let e = t.data;
                    e &&
                      (_((t) => [...t, ...(e.items ?? [])]),
                      Q(e.nextToken ?? null));
                  }
                  z.current === e && Z(!1);
                }
              }, [K, B]),
              eK = (0, n.useCallback)(async () => {
                B && (await eO(B.id));
              }, [eO, B]),
              eQ = (0, n.useCallback)(async () => {
                if (!B || !eR) return;
                let e = B.id;
                eU(!0);
                let t = await (0, i.i)({
                  campaignId: e,
                  limit: 50,
                  cursor: eR,
                });
                if (z.current === e) {
                  if (t.error)
                    eP(
                      t.error.errorMessage ??
                        "Failed to load redemption history",
                    );
                  else {
                    let e = t.data;
                    (eF((t) => [...t, ...(e?.items ?? [])]),
                      eL(e?.nextToken ?? null),
                      eP(null));
                  }
                  z.current === e && eU(!1);
                }
              }, [eR, B]),
              [eG, eq] = (0, n.useState)(null),
              eH = (0, n.useCallback)((e) => {
                eq(e);
              }, []),
              eX = (0, n.useCallback)(() => {
                eq(null);
              }, []),
              eW = (0, n.useCallback)((e) => {
                ex(e);
              }, []),
              eZ = (0, n.useCallback)((e) => {
                ep(e);
              }, []),
              eY = (0, n.useCallback)(
                (e) => {
                  (e?.campaignId && M[e.campaignId]
                    ? P(M[e.campaignId])
                    : P(null),
                    U(!0));
                },
                [M],
              ),
              eJ = (0, n.useRef)(!1),
              e0 = (0, n.useCallback)(async ({ filters: e, sort: t }) => {
                let a = await (0, i.HO)({
                  limit: 100,
                  ...(Object.keys(e).length > 0 ? { filters: e } : {}),
                  ...(t
                    ? { sortByColumn: t.column, sortByDirection: t.direction }
                    : {}),
                });
                if (a.error)
                  return void alert(
                    a.error.errorMessage ?? "Failed to load campaigns",
                  );
                let s = a.data;
                s && (w(s.items), k(s.nextPage));
              }, []);
            (0, n.useEffect)(() => {
              if (!eJ.current) {
                eJ.current = !0;
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
                  (alert(
                    e.error.errorMessage ?? "Failed to load more campaigns",
                  ),
                    I(!1));
                  return;
                }
                let t = e.data;
                (t && (w((e) => [...e, ...t.items]), k(t.nextPage)), I(!1));
              }, [C, L, F]),
              e2 = (0, n.useCallback)(async () => {
                let e = eg.trim();
                if (!e) return void alert("Enter a code to redeem");
                ef(!0);
                let t = await (0, i.yM)({ code: e });
                if (t.error) {
                  (alert(t.error.errorMessage ?? "Failed to redeem code"),
                    ef(!1));
                  return;
                }
                (eh(""),
                  alert("Code redeemed successfully"),
                  await s.replace(s.asPath),
                  ef(!1));
              }, [eg, s]),
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
                    (alert(t.error.errorMessage ?? "Failed to reveal code"),
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
            return (0, r.jsxs)("main", {
              className: "p-4",
              children: [
                (0, r.jsx)(m.k, { initialRewards: a, items: e }),
                (0, r.jsx)(h.z, {
                  campaigns: j,
                  campaignFilters: A,
                  setCampaignFilters: E,
                  campaignSort: F,
                  onCampaignSortClick: D,
                  onLoadMoreCampaigns: e1,
                  campaignsNextPage: C,
                  loadingMoreCampaigns: S,
                  onCreateCampaign: () => ec(!0),
                  campaignExportError: ee,
                  onCreateCodes: eY,
                  onShowCampaignDetails: ez,
                  onExportCampaignCodes: eV,
                  exportingCampaignId: Y,
                  onEditCampaign: eW,
                  onDeleteCampaign: eZ,
                  selectedCampaign: B,
                  campaignCodes: V,
                  campaignCodesError: G,
                  loadingCampaignCodes: H,
                  campaignsById: M,
                  items: e,
                  onOpenUser: eA,
                  onOpenRedemptionHistory: eH,
                  campaignCodesNextToken: K,
                  loadMoreCampaignCodes: e_,
                  loadingMoreCampaignCodes: W,
                  actionFeedback: ea,
                  onDismissActionFeedback: ei,
                }),
                (0, r.jsx)(b.v, {
                  selectedCampaign: B,
                  campaignRedemptions: eE,
                  campaignRedemptionsError: e$,
                  loadingCampaignRedemptions: eD,
                  loadingMoreCampaignRedemptions: eT,
                  campaignRedemptionsNextToken: eR,
                  onRefresh: eK,
                  onLoadMore: eQ,
                  onOpenUser: eA,
                }),
                eG &&
                  (0, r.jsx)(o.A, { code: eG, onClose: eX, onSelectUser: eA }),
                (0, r.jsx)(f.Z, {
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
                (0, r.jsx)(d.A, {
                  playFabId: eS,
                  onClose: () => {
                    eI(null);
                  },
                }),
                eo &&
                  (0, r.jsx)(x.S, {
                    onClose: () => ec(!1),
                    onCreated: async () => {
                      await s.replace(s.asPath);
                    },
                  }),
                em &&
                  (0, r.jsx)(u.S, {
                    campaign: em,
                    onClose: () => ex(null),
                    onUpdated: async () => {
                      await s.replace(s.asPath);
                    },
                  }),
                eu &&
                  (0, r.jsx)(p.V, {
                    campaign: eu,
                    onClose: () => ep(null),
                    onDeleted: async () => {
                      await s.replace(s.asPath);
                    },
                    onActionStart: el,
                    onActionResolve: ed,
                  }),
                T &&
                  (0, r.jsx)(g.Q, {
                    campaigns: j,
                    items: e,
                    preselectedCampaign: $ ?? void 0,
                    onClose: () => {
                      (U(!1), P(null));
                    },
                    onCreated: async () => {
                      (U(!1), P(null), await s.replace(s.asPath));
                    },
                  }),
              ],
            });
          }
          s();
        } catch (e) {
          s(e);
        }
      });
    },
    33960: (e, t, a) => {
      "use strict";
      a.a(e, async (e, s) => {
        try {
          a.d(t, { S: () => m });
          var r = a(2183),
            l = a(36439),
            n = a(64171),
            i = a(39188),
            d = a(80050),
            o = a(83737),
            c = e([o]);
          function m({ campaign: e, onClose: t, onUpdated: a }) {
            let [s, c] = (0, l.useState)(!1),
              [x, u] = (0, l.useState)(null),
              [p, g] = (0, l.useState)(e.name),
              [h, b] = (0, l.useState)(e.description ?? ""),
              [f, y] = (0, l.useState)(e.startsAt ?? null),
              [v, j] = (0, l.useState)(e.endsAt ?? null),
              [N, w] = (0, l.useState)(e.isInactive);
            async function C() {
              u(null);
              let s = p.trim(),
                r = h.trim(),
                l = (e.startsAt ?? null) !== (f ?? null),
                n = (e.endsAt ?? null) !== (v ?? null),
                i = s.length > 0 && s !== e.name,
                d = r !== e.description,
                m = N !== e.isInactive;
              if (null !== f && null !== v && f >= v)
                return void u("Start must be before end");
              if (!i && !d && !l && !n && !m)
                return void u("Make a change before saving");
              c(!0);
              let x = await (0, o.SX)({
                id: e.id,
                name: i ? s : void 0,
                description: d ? r : void 0,
                startsAt: l ? f : void 0,
                endsAt: n ? v : void 0,
                isInactive: m ? N : void 0,
              });
              (c(!1), x.error)
                ? u(x.error.errorMessage ?? "Failed to update campaign")
                : (a(), t());
            }
            return (0, r.jsx)("div", {
              className:
                "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3",
              role: "dialog",
              "aria-modal": "true",
              "aria-labelledby": "edit-campaign-title",
              children: (0, r.jsxs)("div", {
                className:
                  "w-full max-w-lg rounded bg-white p-4 text-gray-900 shadow-xl",
                children: [
                  (0, r.jsxs)("div", {
                    className: "mb-3 flex items-center justify-between",
                    children: [
                      (0, r.jsx)("h2", {
                        id: "edit-campaign-title",
                        className: "text-lg font-semibold",
                        children: "Edit Campaign",
                      }),
                      (0, r.jsx)(n.A, {
                        type: "button",
                        variant: "dark",
                        onClick: t,
                        className:
                          "rounded px-2 py-1 text-sm text-gray-600 hover:bg-gray-100",
                        "aria-label": "Close edit campaign modal",
                        children: "Close",
                      }),
                    ],
                  }),
                  x &&
                    (0, r.jsx)("p", {
                      className: "text-red-500 mb-3 text-sm font-semibold",
                      role: "alert",
                      children: x,
                    }),
                  (0, r.jsxs)("div", {
                    className: "space-y-3",
                    children: [
                      (0, r.jsxs)("div", {
                        children: [
                          (0, r.jsx)("label", {
                            htmlFor: "edit-campaign-name",
                            className: "mb-1 block text-sm font-medium",
                            children: "Name",
                          }),
                          (0, r.jsx)("input", {
                            id: "edit-campaign-name",
                            value: p,
                            onChange: (e) => g(e.target.value),
                            className:
                              "w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none",
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        children: [
                          (0, r.jsx)("label", {
                            htmlFor: "edit-campaign-description",
                            className: "mb-1 block text-sm font-medium",
                            children: "Description",
                          }),
                          (0, r.jsx)("textarea", {
                            id: "edit-campaign-description",
                            value: h,
                            onChange: (e) => b(e.target.value),
                            rows: 3,
                            className:
                              "w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none",
                          }),
                        ],
                      }),
                      (0, r.jsx)(d.A, {
                        label: "Starts",
                        value: f,
                        onChange: (e) => y(e),
                        helperText:
                          "Optional. Leave empty to start immediately.",
                      }),
                      (0, r.jsx)(d.A, {
                        label: "Ends",
                        value: v,
                        onChange: (e) => j(e),
                        helperText:
                          "Optional. Leave empty for a campaign that never ends.",
                      }),
                      (0, r.jsx)("div", {
                        children: (0, r.jsx)(i.A, {
                          value: N,
                          onChange: w,
                          children:
                            "Inactive (campaign is deactivated when checked)",
                        }),
                      }),
                      (0, r.jsxs)("div", {
                        className: "flex justify-end gap-2 pt-2",
                        children: [
                          (0, r.jsx)(n.A, {
                            type: "button",
                            variant: "dark",
                            onClick: t,
                            className:
                              "rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-100",
                            disabled: s,
                            children: "Cancel",
                          }),
                          (0, r.jsx)(n.A, {
                            type: "button",
                            variant: "darkBackground",
                            onClick: C,
                            disabled: s,
                            loading: s,
                            className:
                              "rounded bg-indigo-600 px-3 py-2 text-sm text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60",
                            children: s ? "Saving…" : "Save Changes",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            });
          }
          ((o = (c.then ? (await c)() : c)[0]), s());
        } catch (e) {
          s(e);
        }
      });
    },
    39188: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => r });
      var s = a(2183);
      function r(e) {
        let {
          children: t,
          variant: a = "normal",
          value: r,
          onChange: l,
          id: n,
        } = e;
        return (0, s.jsx)("div", {
          className: "relative",
          children: (0, s.jsxs)("label", {
            className: "main flex cursor-pointer items-center",
            children: [
              (0, s.jsx)("p", { className: "ml-8 select-none", children: t }),
              (0, s.jsx)("input", {
                id: n,
                checked: r,
                onChange: (e) => l(e.target.checked),
                type: "checkbox",
              }),
              (0, s.jsx)("span", {
                className: `geekmark backdrop-blur outline-none ${"normal" === a ? "geekmark-light border-2 border-gray-300/20 bg-white/20 duration-200 hover:border-white/50 focus:border-white" : "geekmark-dark border-2 border-gray-500/30 bg-gray-800/10 duration-200 hover:border-gray-800/60 focus:border-gray-800/80"}`,
              }),
            ],
          }),
        });
      }
      a(36439);
    },
    52804: (e, t, a) => {
      "use strict";
      a.a(e, async (e, s) => {
        try {
          a.d(t, { Q: () => m });
          var r = a(2183),
            l = a(36439),
            n = a(64171),
            i = a(39188),
            d = a(83737),
            o = a(7828),
            c = e([d]);
          function m({ reward: e, onClose: t, onUploaded: a }) {
            let [s, c] = (0, l.useState)({
                rewardId: e.playFabItemId,
                fileName: null,
                preview: null,
                parsing: !1,
                parseError: null,
                confirm: !1,
                uploading: !1,
                uploadError: null,
                uploadResult: null,
              }),
              x = new Intl.NumberFormat();
            async function u() {
              if (!s.preview || 0 === s.preview.trimmedCodes.length)
                return void c((e) => ({
                  ...e,
                  uploadError: "Parse a CSV file before uploading.",
                }));
              if (!s.confirm)
                return void c((e) => ({
                  ...e,
                  uploadError: "Confirm the preview before uploading.",
                }));
              c((e) => ({ ...e, uploading: !0, uploadError: null }));
              let t = await (0, d.BD)({
                playFabItemId: e.playFabItemId,
                rows: s.preview.trimmedCodes.map((e) => ({ code: e })),
              });
              if (t.error)
                return void c((e) => ({
                  ...e,
                  uploading: !1,
                  uploadError:
                    t.error.errorMessage ?? "Failed to upload external codes.",
                }));
              let r = t.data;
              r
                ? (a(r.reward),
                  c((e) => ({
                    ...e,
                    uploading: !1,
                    uploadError: null,
                    preview: null,
                    confirm: !1,
                    uploadResult: {
                      inserted: r.inserted,
                      skippedDuplicates: r.skippedDuplicates,
                      processedRows: r.totalRows,
                    },
                  })))
                : c((e) => ({
                    ...e,
                    uploading: !1,
                    uploadError: "Failed to upload external codes.",
                  }));
            }
            return (0, r.jsx)("div", {
              className:
                "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4",
              children: (0, r.jsxs)("div", {
                className:
                  "max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-white p-6 text-gray-900 shadow-xl",
                children: [
                  (0, r.jsxs)("div", {
                    className: "flex items-start justify-between",
                    children: [
                      (0, r.jsxs)("div", {
                        children: [
                          (0, r.jsx)("h2", {
                            className: "text-xl font-semibold",
                            children: "Upload External Codes",
                          }),
                          (0, r.jsxs)("p", {
                            className: "text-sm text-gray-600",
                            children: [
                              "PlayFab Item ID:",
                              " ",
                              (0, r.jsx)("span", {
                                className: "font-mono text-xs text-gray-500",
                                children: e.playFabItemId,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsx)(n.A, {
                        type: "button",
                        variant: "dark",
                        className:
                          "text-gray-500 transition hover:text-gray-700",
                        onClick: t,
                        children: "\xd7",
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: "mt-4 space-y-3",
                    children: [
                      (0, r.jsxs)("div", {
                        children: [
                          (0, r.jsx)("label", {
                            className:
                              "mb-1 block text-sm font-medium text-gray-700",
                            children: "CSV File",
                          }),
                          (0, r.jsx)("input", {
                            type: "file",
                            accept: ".csv,text/csv",
                            onChange: (e) =>
                              (function (e) {
                                if (!e || 0 === e.length)
                                  return void c({
                                    ...s,
                                    fileName: null,
                                    preview: null,
                                    parseError: null,
                                    confirm: !1,
                                    uploadResult: null,
                                    uploadError: null,
                                  });
                                let t = e.item(0);
                                if (!t)
                                  return void c((e) => ({
                                    ...e,
                                    parsing: !1,
                                    parseError: "No file selected.",
                                    preview: null,
                                    confirm: !1,
                                    uploadResult: null,
                                    uploadError: null,
                                  }));
                                let a = new FileReader();
                                (c((e) => ({
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
                                      c((e) => ({
                                        ...e,
                                        parsing: !1,
                                        parseError: null,
                                        preview: t,
                                        confirm: !1,
                                        uploadResult: null,
                                        uploadError: null,
                                      }));
                                    } catch (e) {
                                      c((t) => ({
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
                                    c((e) => ({
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
                          s.fileName &&
                            (0, r.jsxs)("p", {
                              className: "mt-1 text-xs text-gray-500",
                              children: ["Selected: ", s.fileName],
                            }),
                        ],
                      }),
                      s.parsing &&
                        (0, r.jsx)("p", {
                          className: "text-sm text-gray-700",
                          children: "Parsing CSV…",
                        }),
                      s.parseError &&
                        (0, r.jsx)("p", {
                          className: "text-red-500 text-sm font-semibold",
                          children: s.parseError,
                        }),
                      s.preview &&
                        (0, r.jsxs)("div", {
                          className:
                            "rounded border border-gray-200 p-3 text-sm",
                          children: [
                            (0, r.jsx)("p", {
                              className: "font-medium",
                              children: "Preview",
                            }),
                            (0, r.jsxs)("ul", {
                              className: "mt-2 space-y-1 text-gray-700",
                              children: [
                                (0, r.jsxs)("li", {
                                  children: [
                                    "Processed rows:",
                                    " ",
                                    x.format(s.preview.processedRows),
                                  ],
                                }),
                                (0, r.jsxs)("li", {
                                  children: [
                                    "Codes to upload:",
                                    " ",
                                    x.format(s.preview.trimmedCodes.length),
                                  ],
                                }),
                                (0, r.jsxs)("li", {
                                  children: [
                                    "Blank/invalid rows ignored:",
                                    " ",
                                    x.format(s.preview.ignoredCount),
                                  ],
                                }),
                              ],
                            }),
                            s.preview.sampleRows.length > 0 &&
                              (0, r.jsxs)("div", {
                                className: "mt-3",
                                children: [
                                  (0, r.jsx)("p", {
                                    className:
                                      "text-xs font-medium uppercase text-gray-500",
                                    children: "Sample Codes",
                                  }),
                                  (0, r.jsx)("ul", {
                                    className:
                                      "mt-1 space-y-1 font-mono text-xs text-gray-700",
                                    children: s.preview.sampleRows.map((e) =>
                                      (0, r.jsx)("li", { children: e }, e),
                                    ),
                                  }),
                                ],
                              }),
                          ],
                        }),
                      s.uploadResult &&
                        (0, r.jsxs)("div", {
                          className:
                            "border-green-200 bg-green-50 text-green-800 rounded border p-3 text-sm",
                          children: [
                            (0, r.jsx)("p", {
                              className: "font-semibold",
                              children: "Upload complete.",
                            }),
                            (0, r.jsxs)("ul", {
                              className: "mt-1 space-y-1",
                              children: [
                                (0, r.jsxs)("li", {
                                  children: [
                                    "Inserted:",
                                    " ",
                                    x.format(s.uploadResult.inserted),
                                  ],
                                }),
                                (0, r.jsxs)("li", {
                                  children: [
                                    "Skipped duplicates:",
                                    " ",
                                    x.format(s.uploadResult.skippedDuplicates),
                                  ],
                                }),
                                (0, r.jsxs)("li", {
                                  children: [
                                    "Rows processed:",
                                    " ",
                                    x.format(s.uploadResult.processedRows),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      s.uploadError &&
                        (0, r.jsx)("p", {
                          className: "text-red-500 text-sm font-semibold",
                          children: s.uploadError,
                        }),
                      (0, r.jsx)("label", {
                        className:
                          "flex items-center gap-2 text-sm text-gray-700",
                        children: (0, r.jsx)(i.A, {
                          value: s.confirm,
                          onChange: (e) => c((t) => ({ ...t, confirm: e })),
                          children:
                            "I confirm this preview matches the codes I expect to upload.",
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: "mt-6 flex justify-end gap-2",
                    children: [
                      (0, r.jsx)(n.A, {
                        type: "button",
                        variant: "dark",
                        onClick: t,
                        className:
                          "rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-100",
                        disabled: s.uploading,
                        children: "Close",
                      }),
                      (0, r.jsx)(n.A, {
                        type: "button",
                        variant: "darkBackground",
                        onClick: () => void u(),
                        className:
                          "rounded bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-indigo-300",
                        disabled:
                          s.uploading ||
                          !s.preview ||
                          0 === s.preview.trimmedCodes.length ||
                          !s.confirm,
                        loading: s.uploading,
                        children: s.uploading ? "Uploading…" : "Upload Codes",
                      }),
                    ],
                  }),
                ],
              }),
            });
          }
          ((d = (c.then ? (await c)() : c)[0]), s());
        } catch (e) {
          s(e);
        }
      });
    },
    64171: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => d });
      var s = a(2183),
        r = a(36439),
        l = a(97698),
        n = a(15013),
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
          m = (0, r.useMemo)(() => e.children?.toString(), [e.children]),
          x = (e, a, s, r, l) =>
            "normal" === t
              ? e
              : "darkBackground" === t
                ? a
                : "dark" === t
                  ? s
                  : "green" === t
                    ? l
                    : r;
        return (0, s.jsxs)("button", {
          ...c,
          type: "submit",
          id: m,
          disabled: d,
          className: `border-radius-8 group relative inline-flex cursor-pointer items-center justify-center overflow-hidden ${e.className} ${a && "w-full"} ${x("border-yellow-500/50 bg-transparent", "border-yellow-500/50 bg-black/90", "border-black/20 bg-transparent", "border-red-500/80 bg-transparent", "border-teal-500 bg-transparent")} relative z-0 rounded-lg border-2 px-6 py-2 text-base ${x("text-white", "text-white", "text-black", "text-black", "text-white")} transition duration-300 ${x("canhover:hover:text-black", "canhover:hover:text-black", "canhover:hover:text-white", "canhover:hover:text-black", "canhover:hover:text-white")} ${a && "w-full"}`,
          children: [
            ("normal" === t || "darkBackground" === t) &&
              (0, s.jsx)("div", {
                "html-for": m,
                className:
                  "canhover:group-hover:opacity-100 pointer-events-none absolute top-0 left-0 z-10 h-full w-full overflow-hidden border-transparent opacity-0 shadow-[0_0px_15px_0px_#F1C662] transition duration-300",
                children: (0, s.jsx)(i(), {
                  src: "/images/gold-button-texture-1.jpg",
                  fill: !0,
                  className: "object-cover",
                  alt: "Gold sheen",
                  sizes: "256px",
                }),
              }),
            "green" === t &&
              (0, s.jsxs)("div", {
                "html-for": m,
                className:
                  "pointer-events-none absolute top-0 left-0 z-10 h-full w-full overflow-hidden opacity-100 transition duration-300",
                children: [
                  (0, s.jsx)(i(), {
                    src: "/images/fabric-button-texture_teal-1.jpg",
                    fill: !0,
                    className:
                      "absolute inset-0 z-10 rounded-md transition duration-300 group-hover:brightness-90",
                    alt: "Green back",
                    sizes: "256px",
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "pointer-events-none absolute inset-0 h-full w-full bg-teal-500",
                  }),
                ],
              }),
            "dark" === t &&
              (0, s.jsx)("div", {
                "html-for": m,
                className:
                  "canhover:group-hover:opacity-80 pointer-events-none absolute top-0 left-0 z-10 h-full w-full border-transparent bg-gradient-to-r from-black to-black opacity-0 transition duration-300",
              }),
            "error" === t &&
              (0, s.jsx)("div", {
                "html-for": m,
                className:
                  "canhover:group-hover:opacity-100 pointer-events-none absolute top-0 left-0 z-10 h-full w-full border-transparent bg-gradient-to-r from-red-500 to-red-500 opacity-0 transition duration-300",
              }),
            o &&
              (0, s.jsx)(i(), {
                width: 16,
                height: 16,
                alt: "Link icon",
                className:
                  "canhover:group-hover:invert relative z-10 mr-3 transition duration-300",
                src: o,
              }),
            (0, s.jsx)("span", {
              className: "relative z-20",
              children: e.children,
            }),
            n &&
              (0, s.jsx)("span", {
                className: "relative z-20 ml-3",
                children: (0, s.jsx)(l.A, {}),
              }),
          ],
        });
      }
    },
    67467: (e, t, a) => {
      "use strict";
      a.a(e, async (e, s) => {
        try {
          a.d(t, { A: () => c });
          var r = a(2183),
            l = a(36439),
            n = a(83737),
            i = a(64171),
            d = a(95196),
            o = e([n]);
          function c({ code: e, onClose: t, onSelectUser: a }) {
            let [s, o] = (0, l.useState)([]),
              [m, x] = (0, l.useState)(null),
              [u, p] = (0, l.useState)(!1),
              [g, h] = (0, l.useState)(!1),
              [b, f] = (0, l.useState)(null);
            (0, l.useEffect)(() => {
              if (!e) return;
              let t = !1;
              async function a(e) {
                (p(!0), f(null));
                let a = await (0, n.Ir)({ code: e, limit: 25 });
                if (!t) {
                  if (a.error)
                    (f(
                      a.error.errorMessage ??
                        "Failed to load redemption history",
                    ),
                      o([]),
                      x(null));
                  else {
                    let e = a.data;
                    (o(e?.items ?? []), x(e?.nextToken ?? null));
                  }
                  t || p(!1);
                }
              }
              return (
                o([]),
                x(null),
                a(e),
                () => {
                  t = !0;
                }
              );
            }, [e]);
            let y = (0, l.useCallback)(async () => {
              if (!m || !e) return;
              h(!0);
              let t = await (0, n.Ir)({ code: e, limit: 25, cursor: m });
              if (t.error)
                f(t.error.errorMessage ?? "Failed to load redemption history");
              else {
                let e = t.data;
                (o((t) => [...t, ...(e?.items ?? [])]),
                  x(e?.nextToken ?? null));
              }
              h(!1);
            }, [e, m]);
            return e
              ? (0, r.jsx)("div", {
                  className:
                    "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4",
                  children: (0, r.jsxs)("div", {
                    className:
                      "w-full max-w-3xl rounded bg-white p-5 shadow-lg",
                    children: [
                      (0, r.jsxs)("div", {
                        className: "mb-4 flex items-start justify-between",
                        children: [
                          (0, r.jsxs)("div", {
                            children: [
                              (0, r.jsx)("h2", {
                                className: "text-2xl font-bold text-gray-900",
                                children: "Redemption History",
                              }),
                              (0, r.jsxs)("p", {
                                className: "text-sm text-gray-700",
                                children: [
                                  "Code:",
                                  " ",
                                  (0, r.jsx)("span", {
                                    className:
                                      "font-mono text-xs text-gray-500",
                                    children: e,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, r.jsx)(i.A, {
                            type: "button",
                            variant: "dark",
                            className:
                              "rounded border border-gray-300 px-2 py-1 text-sm text-gray-700 hover:bg-gray-100",
                            onClick: t,
                            children: "Close",
                          }),
                        ],
                      }),
                      b
                        ? (0, r.jsx)("p", {
                            className: "text-red-500 text-sm font-semibold",
                            children: b,
                          })
                        : u
                          ? (0, r.jsx)("p", {
                              className: "text-sm text-gray-700",
                              children: "Loading…",
                            })
                          : 0 === s.length
                            ? (0, r.jsx)("p", {
                                className: "text-sm text-gray-700",
                                children: "No redemptions recorded.",
                              })
                            : (0, r.jsx)(d.o, {
                                entries: s,
                                onOpenUser: a,
                                showCodeColumn: !0,
                                summaryLabel: `${s.length} redemption${1 === s.length ? "" : "s"} loaded`,
                                loadMore: m
                                  ? { hasMore: !0, onLoadMore: y, loading: g }
                                  : void 0,
                              }),
                    ],
                  }),
                })
              : null;
          }
          ((n = (o.then ? (await o)() : o)[0]), s());
        } catch (e) {
          s(e);
        }
      });
    },
    68164: (e, t, a) => {
      "use strict";
      a.a(e, async (e, s) => {
        try {
          a.d(t, { A: () => o });
          var r = a(2183),
            l = a(36439),
            n = a(83737),
            i = a(64171),
            d = e([n]);
          function o({ playFabId: e, onClose: t }) {
            let [a, s] = (0, l.useState)(!1),
              [d, c] = (0, l.useState)(null);
            return ((0, l.useEffect)(() => {
              let t = !1;
              async function a() {
                if (!e) return;
                s(!0);
                let a = await (0, n.BS)(e);
                t || (c(a.data ?? null), s(!1));
              }
              return (
                c(null),
                s(!1),
                a(),
                () => {
                  t = !0;
                }
              );
            }, [e]),
            e)
              ? (0, r.jsx)("div", {
                  className:
                    "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4",
                  children: (0, r.jsxs)("div", {
                    className: "w-full max-w-lg rounded bg-white p-4 shadow-lg",
                    children: [
                      (0, r.jsxs)("div", {
                        className: "mb-3 flex items-center justify-between",
                        children: [
                          (0, r.jsx)("h2", {
                            className: "text-lg font-semibold text-gray-700",
                            children: "User Info",
                          }),
                          (0, r.jsx)(i.A, {
                            type: "button",
                            variant: "dark",
                            className: "text-gray-600 hover:text-gray-800",
                            onClick: t,
                            children: "Close",
                          }),
                        ],
                      }),
                      a
                        ? (0, r.jsx)("p", {
                            className: "text-sm text-gray-700",
                            children: "Loading…",
                          })
                        : d
                          ? (0, r.jsxs)("div", {
                              className: "space-y-1 text-sm text-gray-700",
                              children: [
                                (0, r.jsxs)("div", {
                                  children: [
                                    (0, r.jsx)("span", {
                                      className: "font-semibold",
                                      children: "PlayFab ID:",
                                    }),
                                    " ",
                                    d.playFabId,
                                  ],
                                }),
                                (0, r.jsxs)("div", {
                                  children: [
                                    (0, r.jsx)("span", {
                                      className: "font-semibold",
                                      children: "Display Name:",
                                    }),
                                    " ",
                                    d.displayName ?? "—",
                                  ],
                                }),
                                (0, r.jsxs)("div", {
                                  children: [
                                    (0, r.jsx)("span", {
                                      className: "font-semibold",
                                      children: "Contact Email:",
                                    }),
                                    " ",
                                    d.contactEmail
                                      ? (0, r.jsx)("a", {
                                          href: `mailto:${d.contactEmail}`,
                                          className:
                                            "text-blue-700 hover:text-blue-900 underline underline-offset-2",
                                          children: d.contactEmail,
                                        })
                                      : "—",
                                  ],
                                }),
                                (0, r.jsxs)("div", {
                                  children: [
                                    (0, r.jsx)("span", {
                                      className: "font-semibold",
                                      children: "Created:",
                                    }),
                                    " ",
                                    d.created ?? "—",
                                  ],
                                }),
                                (0, r.jsxs)("div", {
                                  children: [
                                    (0, r.jsx)("span", {
                                      className: "font-semibold",
                                      children: "Last Login:",
                                    }),
                                    " ",
                                    d.lastLogin ?? "—",
                                  ],
                                }),
                              ],
                            })
                          : (0, r.jsx)("p", {
                              className: "text-red-700 text-sm",
                              children: "Failed to load user info.",
                            }),
                    ],
                  }),
                })
              : null;
          }
          ((n = (d.then ? (await d)() : d)[0]), s());
        } catch (e) {
          s(e);
        }
      });
    },
    73055: (e, t, a) => {
      "use strict";
      a.a(e, async (e, s) => {
        try {
          a.d(t, { R: () => c });
          var r = a(2183),
            l = a(75109),
            n = a(36439),
            i = a(64171),
            d = a(83737),
            o = e([l, d]);
          function c({ items: e, onClose: t, onCreated: a }) {
            let [s, o] = (0, n.useState)(null),
              [m, x] = (0, n.useState)(!1),
              [u, p] = (0, n.useState)({
                playFabItemId: "",
                redemptionInstructions: "",
                lowStockThreshold: "",
                internalNotes: "",
                provider: "",
                providerSku: "",
              });
            async function g() {
              o(null);
              let e = u.playFabItemId.trim();
              if (!e) return void o("Select a PlayFab item.");
              let s = u.redemptionInstructions.trim();
              if (!s) return void o("Enter redemption instructions.");
              let r = u.lowStockThreshold.trim(),
                l = Number.parseInt(r, 10);
              if ("" === r || !Number.isInteger(l) || l < 0)
                return void o(
                  "Low-stock threshold must be a non-negative integer.",
                );
              let n = {
                playFabItemId: e,
                redemptionInstructions: s,
                lowStockThreshold: l,
                internalNotes: u.internalNotes.trim() || void 0,
                provider: u.provider.trim() || void 0,
                providerSku: u.providerSku.trim() || void 0,
              };
              x(!0);
              let i = await (0, d.Ck)(n);
              if (i.error) {
                (o(
                  i.error.errorMessage ??
                    "Failed to create external code reward.",
                ),
                  x(!1));
                return;
              }
              let c = i.data?.reward;
              if (c) {
                (a(c), t(), x(!1));
                return;
              }
              (o("Failed to create external code reward."), x(!1));
            }
            return (0, r.jsx)("div", {
              className:
                "fixed inset-0 z-40 flex items-center justify-center bg-black/50 p-4",
              children: (0, r.jsxs)("div", {
                className:
                  "max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white p-6 text-gray-900 shadow-xl",
                children: [
                  (0, r.jsxs)("div", {
                    className: "flex items-start justify-between",
                    children: [
                      (0, r.jsxs)("div", {
                        children: [
                          (0, r.jsx)("h2", {
                            className: "text-xl font-semibold",
                            children: "Create External Code Reward",
                          }),
                          (0, r.jsx)("p", {
                            className: "text-sm text-gray-600",
                            children:
                              "Define metadata for a new external code pool before uploading codes.",
                          }),
                        ],
                      }),
                      (0, r.jsx)(i.A, {
                        type: "button",
                        variant: "dark",
                        className:
                          "text-gray-500 transition hover:text-gray-700",
                        onClick: t,
                        children: "\xd7",
                      }),
                    ],
                  }),
                  s &&
                    (0, r.jsx)("p", {
                      className: "text-red-500 mt-3 text-sm font-semibold",
                      children: s,
                    }),
                  (0, r.jsxs)("div", {
                    className: "mt-4 flex flex-col gap-4",
                    children: [
                      (0, r.jsxs)("div", {
                        children: [
                          (0, r.jsx)("label", {
                            className:
                              "mb-1 block text-sm font-medium text-gray-700",
                            children: "PlayFab Item",
                          }),
                          (0, r.jsxs)("select", {
                            value: u.playFabItemId,
                            onChange: (e) => {
                              (o(null),
                                p((t) => ({
                                  ...t,
                                  playFabItemId: e.target.value,
                                })));
                            },
                            className:
                              "w-full rounded border border-gray-300 p-2 text-sm focus:border-indigo-500 focus:outline-none",
                            children: [
                              (0, r.jsx)("option", {
                                value: "",
                                disabled: !0,
                                children: "Select an item…",
                              }),
                              e
                                .filter(
                                  (e) => e.type === l.I5m.EXTERNAL_CODE_REWARD,
                                )
                                .map((e) =>
                                  (0, r.jsxs)(
                                    "option",
                                    {
                                      value: e.id,
                                      children: [
                                        e.title,
                                        e.friendlyId
                                          ? ` — ${e.friendlyId}`
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
                      (0, r.jsxs)("div", {
                        children: [
                          (0, r.jsx)("label", {
                            className:
                              "mb-1 block text-sm font-medium text-gray-700",
                            children: "Redemption Instructions",
                          }),
                          (0, r.jsx)("textarea", {
                            value: u.redemptionInstructions,
                            onChange: (e) => {
                              (o(null),
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
                      (0, r.jsxs)("div", {
                        className: "grid gap-4 sm:grid-cols-3",
                        children: [
                          (0, r.jsxs)("div", {
                            children: [
                              (0, r.jsx)("label", {
                                className:
                                  "mb-1 block text-sm font-medium text-gray-700",
                                children: "Low-stock Threshold",
                              }),
                              (0, r.jsx)("input", {
                                type: "number",
                                min: 0,
                                value: u.lowStockThreshold,
                                onChange: (e) => {
                                  (o(null),
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
                          (0, r.jsxs)("div", {
                            children: [
                              (0, r.jsx)("label", {
                                className:
                                  "mb-1 block text-sm font-medium text-gray-700",
                                children: "Provider (optional)",
                              }),
                              (0, r.jsx)("input", {
                                type: "text",
                                value: u.provider,
                                onChange: (e) => {
                                  (o(null),
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
                          (0, r.jsxs)("div", {
                            children: [
                              (0, r.jsx)("label", {
                                className:
                                  "mb-1 block text-sm font-medium text-gray-700",
                                children: "Provider SKU (optional)",
                              }),
                              (0, r.jsx)("input", {
                                type: "text",
                                value: u.providerSku,
                                onChange: (e) => {
                                  (o(null),
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
                      (0, r.jsxs)("div", {
                        children: [
                          (0, r.jsx)("label", {
                            className:
                              "mb-1 block text-sm font-medium text-gray-700",
                            children: "Internal Notes (optional)",
                          }),
                          (0, r.jsx)("textarea", {
                            value: u.internalNotes,
                            onChange: (e) => {
                              (o(null),
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
                  (0, r.jsxs)("div", {
                    className: "mt-6 flex justify-end gap-2",
                    children: [
                      (0, r.jsx)(i.A, {
                        type: "button",
                        variant: "dark",
                        onClick: t,
                        className:
                          "rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-100",
                        disabled: m,
                        children: "Cancel",
                      }),
                      (0, r.jsx)(i.A, {
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
          (([l, d] = o.then ? (await o)() : o), s());
        } catch (e) {
          s(e);
        }
      });
    },
    79860: (e, t, a) => {
      "use strict";
      a.a(e, async (e, s) => {
        try {
          a.d(t, { A: () => o });
          var r = a(2183),
            l = a(36439),
            n = a(64171),
            i = a(83737),
            d = e([i]);
          function o({
            manageState: e,
            onClose: t,
            onUpdate: a,
            onOpenUpload: s,
            onRewardUpdated: d,
          }) {
            let [c, m] = (0, l.useState)(null),
              [x, u] = (0, l.useState)(null),
              [p, g] = (0, l.useState)(!1),
              h = new Intl.NumberFormat();
            async function b() {
              (m(null), u(null));
              let { reward: t } = e,
                a = e.redemptionInstructions.trim();
              if (!a) return void m("Redemption instructions cannot be empty.");
              let s = e.lowStockThreshold.trim(),
                r = Number.parseInt(s, 10);
              if ("" === s || !Number.isInteger(r) || r < 0)
                return void m(
                  "Low-stock threshold must be a non-negative integer.",
                );
              let l = {
                  playFabItemId: t.playFabItemId,
                  expectedAttributeVersion: t.attributeVersion,
                },
                n = !1;
              (a !== t.redemptionInstructions &&
                ((l.redemptionInstructions = a), (n = !0)),
                r !== t.lowStockThreshold &&
                  ((l.lowStockThreshold = r), (n = !0)));
              let o = e.internalNotes.trim();
              o !== (t.internalNotes ?? "") &&
                ((l.internalNotes = o || null), (n = !0));
              let c = e.provider.trim();
              c !== (t.provider ?? "") && ((l.provider = c || null), (n = !0));
              let x = e.providerSku.trim();
              if (
                (x !== (t.providerSku ?? "") &&
                  ((l.providerSku = x || null), (n = !0)),
                !n)
              )
                return void m("Make a change before saving.");
              g(!0);
              let p = await (0, i.VO)(l);
              if (p.error) {
                (m(
                  p.error.errorMessage ??
                    "Failed to update external code reward.",
                ),
                  g(!1));
                return;
              }
              let h = p.data?.reward;
              if (!h) {
                (m("Failed to update external code reward."), g(!1));
                return;
              }
              (d(h), u("Changes saved."), g(!1));
            }
            return (0, r.jsx)("div", {
              className:
                "fixed inset-0 z-40 flex items-center justify-center bg-black/50 p-4",
              children: (0, r.jsxs)("div", {
                className:
                  "max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-white p-6 text-gray-900 shadow-xl",
                children: [
                  (0, r.jsxs)("div", {
                    className: "flex items-start justify-between",
                    children: [
                      (0, r.jsxs)("div", {
                        children: [
                          (0, r.jsx)("h2", {
                            className: "text-xl font-semibold",
                            children: "Manage External Code Reward",
                          }),
                          (0, r.jsxs)("p", {
                            className: "text-sm text-gray-600",
                            children: [
                              "PlayFab Item ID:",
                              " ",
                              (0, r.jsx)("span", {
                                className: "font-mono text-xs text-gray-500",
                                children: e.reward.playFabItemId,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsx)(n.A, {
                        type: "button",
                        variant: "dark",
                        className:
                          "text-gray-500 transition hover:text-gray-700",
                        onClick: t,
                        children: "\xd7",
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: "mt-4 grid gap-4 sm:grid-cols-2",
                    children: [
                      (0, r.jsxs)("div", {
                        className: "rounded-md bg-gray-50 p-3",
                        children: [
                          (0, r.jsx)("p", {
                            className: "text-xs uppercase text-gray-500",
                            children: "Available Codes",
                          }),
                          (0, r.jsx)("p", {
                            className: "text-lg font-semibold",
                            children: h.format(e.reward.availableCount),
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "rounded-md bg-gray-50 p-3",
                        children: [
                          (0, r.jsx)("p", {
                            className: "text-xs uppercase text-gray-500",
                            children: "Total Codes",
                          }),
                          (0, r.jsx)("p", {
                            className: "text-lg font-semibold",
                            children: h.format(e.reward.totalCount),
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "rounded-md bg-gray-50 p-3",
                        children: [
                          (0, r.jsx)("p", {
                            className: "text-xs uppercase text-gray-500",
                            children: "Assigned",
                          }),
                          (0, r.jsx)("p", {
                            className: "text-lg font-semibold",
                            children: h.format(e.reward.assignedCount),
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "rounded-md bg-gray-50 p-3",
                        children: [
                          (0, r.jsx)("p", {
                            className: "text-xs uppercase text-gray-500",
                            children: "Delivered",
                          }),
                          (0, r.jsx)("p", {
                            className: "text-lg font-semibold",
                            children: h.format(e.reward.deliveredCount),
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "rounded-md bg-gray-50 p-3",
                        children: [
                          (0, r.jsx)("p", {
                            className: "text-xs uppercase text-gray-500",
                            children: "Low-stock Threshold",
                          }),
                          (0, r.jsx)("p", {
                            className: "text-lg font-semibold",
                            children: h.format(e.reward.lowStockThreshold),
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "rounded-md bg-gray-50 p-3",
                        children: [
                          (0, r.jsx)("p", {
                            className: "text-xs uppercase text-gray-500",
                            children: "Status",
                          }),
                          (0, r.jsx)("p", {
                            className: "text-sm font-semibold text-gray-800",
                            children: e.reward.isLowStock
                              ? "Low Stock"
                              : "Healthy",
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "rounded-md bg-gray-50 p-3",
                        children: [
                          (0, r.jsx)("p", {
                            className: "text-xs uppercase text-gray-500",
                            children: "Last Upload",
                          }),
                          (0, r.jsx)("p", {
                            className: "text-sm text-gray-800",
                            children: e.reward.lastUploadAt
                              ? new Date(e.reward.lastUploadAt).toLocaleString()
                              : "—",
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "rounded-md bg-gray-50 p-3",
                        children: [
                          (0, r.jsx)("p", {
                            className: "text-xs uppercase text-gray-500",
                            children: "Updated",
                          }),
                          (0, r.jsx)("p", {
                            className: "text-sm text-gray-800",
                            children: new Date(
                              e.reward.updatedAt,
                            ).toLocaleString(),
                          }),
                        ],
                      }),
                    ],
                  }),
                  c &&
                    (0, r.jsx)("p", {
                      className: "text-red-500 mt-3 text-sm font-semibold",
                      children: c,
                    }),
                  x &&
                    (0, r.jsx)("p", {
                      className: "text-green-600 mt-3 text-sm",
                      children: x,
                    }),
                  (0, r.jsxs)("div", {
                    className: "mt-4 flex flex-col gap-4",
                    children: [
                      (0, r.jsxs)("div", {
                        children: [
                          (0, r.jsx)("label", {
                            className:
                              "mb-1 block text-sm font-medium text-gray-700",
                            children: "Redemption Instructions",
                          }),
                          (0, r.jsx)("textarea", {
                            value: e.redemptionInstructions,
                            onChange: (t) => {
                              (m(null),
                                u(null),
                                a({
                                  ...e,
                                  redemptionInstructions: t.target.value,
                                }));
                            },
                            rows: 4,
                            className:
                              "w-full rounded border border-gray-300 p-2 text-sm focus:border-indigo-500 focus:outline-none",
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "grid gap-4 sm:grid-cols-3",
                        children: [
                          (0, r.jsxs)("div", {
                            children: [
                              (0, r.jsx)("label", {
                                className:
                                  "mb-1 block text-sm font-medium text-gray-700",
                                children: "Low-stock Threshold",
                              }),
                              (0, r.jsx)("input", {
                                type: "number",
                                min: 0,
                                value: e.lowStockThreshold,
                                onChange: (t) => {
                                  (m(null),
                                    u(null),
                                    a({
                                      ...e,
                                      lowStockThreshold: t.target.value,
                                    }));
                                },
                                className:
                                  "w-full rounded border border-gray-300 p-2 text-sm focus:border-indigo-500 focus:outline-none",
                              }),
                            ],
                          }),
                          (0, r.jsxs)("div", {
                            children: [
                              (0, r.jsx)("label", {
                                className:
                                  "mb-1 block text-sm font-medium text-gray-700",
                                children: "Provider (optional)",
                              }),
                              (0, r.jsx)("input", {
                                type: "text",
                                value: e.provider,
                                onChange: (t) => {
                                  (m(null),
                                    u(null),
                                    a({ ...e, provider: t.target.value }));
                                },
                                className:
                                  "w-full rounded border border-gray-300 p-2 text-sm focus:border-indigo-500 focus:outline-none",
                              }),
                            ],
                          }),
                          (0, r.jsxs)("div", {
                            children: [
                              (0, r.jsx)("label", {
                                className:
                                  "mb-1 block text-sm font-medium text-gray-700",
                                children: "Provider SKU (optional)",
                              }),
                              (0, r.jsx)("input", {
                                type: "text",
                                value: e.providerSku,
                                onChange: (t) => {
                                  (m(null),
                                    u(null),
                                    a({ ...e, providerSku: t.target.value }));
                                },
                                className:
                                  "w-full rounded border border-gray-300 p-2 text-sm focus:border-indigo-500 focus:outline-none",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        children: [
                          (0, r.jsx)("label", {
                            className:
                              "mb-1 block text-sm font-medium text-gray-700",
                            children: "Internal Notes (optional)",
                          }),
                          (0, r.jsx)("textarea", {
                            value: e.internalNotes,
                            onChange: (t) => {
                              (m(null),
                                u(null),
                                a({ ...e, internalNotes: t.target.value }));
                            },
                            rows: 3,
                            className:
                              "w-full rounded border border-gray-300 p-2 text-sm focus:border-indigo-500 focus:outline-none",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
                    children: [
                      (0, r.jsx)(n.A, {
                        type: "button",
                        variant: "dark",
                        onClick: s,
                        className:
                          "self-start rounded px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100",
                        children: "Upload Codes",
                      }),
                      (0, r.jsxs)("div", {
                        className: "flex gap-2",
                        children: [
                          (0, r.jsx)(n.A, {
                            type: "button",
                            variant: "dark",
                            onClick: t,
                            className:
                              "rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-100",
                            disabled: p,
                            children: "Close",
                          }),
                          (0, r.jsx)(n.A, {
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
          ((i = (d.then ? (await d)() : d)[0]), s());
        } catch (e) {
          s(e);
        }
      });
    },
    80050: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => n });
      var s = a(2183),
        r = a(36439),
        l = a(64171);
      function n({
        label: e,
        value: t,
        onChange: a,
        helperText: i,
        required: d = !1,
        disabled: o = !1,
      }) {
        let c = (0, r.useId)();
        return (0, s.jsxs)("div", {
          children: [
            (0, s.jsx)("label", {
              className: "mb-1 block text-sm font-medium",
              htmlFor: c,
              children: e,
            }),
            (0, s.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [
                (0, s.jsx)("input", {
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
                  })(t),
                  onChange: (e) =>
                    a(
                      (function (e) {
                        if (!e) return null;
                        let t = new Date(e);
                        return Number.isNaN(t.getTime()) ? null : t.getTime();
                      })(e.target.value),
                    ),
                  required: d,
                  disabled: o,
                }),
                null === t || o
                  ? null
                  : (0, s.jsx)(l.A, {
                      type: "button",
                      variant: "dark",
                      className:
                        "rounded border border-gray-300 px-2 py-1 text-xs text-gray-700 hover:bg-gray-100",
                      onClick: () => a(null),
                      children: "Clear",
                    }),
              ],
            }),
            i
              ? (0, s.jsx)("p", {
                  className: "mt-1 text-xs text-gray-500",
                  children: i,
                })
              : null,
          ],
        });
      }
    },
    84580: (e, t, a) => {
      "use strict";
      a.d(t, { y: () => n });
      var s = a(2183),
        r = a(64171),
        l = a(90454);
      function n({
        selectedCampaign: e,
        campaignCodes: t,
        campaignCodesError: a,
        loadingCampaignCodes: i,
        campaignsById: d,
        items: o,
        onOpenUser: c,
        onOpenRedemptionHistory: m,
        campaignCodesNextToken: x,
        loadMoreCampaignCodes: u,
        loadingMoreCampaignCodes: p,
        embedded: g = !1,
      }) {
        return (0, s.jsxs)("div", {
          className: g
            ? "mt-4 text-gray-900"
            : "mx-auto mt-4 max-w-7xl rounded-lg bg-white p-4 text-gray-900 shadow",
          children: [
            (0, s.jsx)("div", {
              className:
                "mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",
              children: (0, s.jsxs)("div", {
                children: [
                  (0, s.jsx)("h2", {
                    className: "text-2xl font-bold",
                    children: "Codes",
                  }),
                  e
                    ? (0, s.jsxs)("p", {
                        className: "text-sm text-gray-700",
                        children: [
                          "Campaign:",
                          " ",
                          (0, s.jsx)("span", {
                            className: "font-semibold",
                            children: e.name ?? "Unnamed Campaign",
                          }),
                          " ",
                          (0, s.jsxs)("span", {
                            className: "font-mono text-xs text-gray-500",
                            children: ["(", e.id, ")"],
                          }),
                        ],
                      })
                    : (0, s.jsx)("p", {
                        className: "text-sm text-gray-700",
                        children:
                          'Select "View Details" from a campaign to view its codes.',
                      }),
                ],
              }),
            }),
            a &&
              t.length > 0 &&
              (0, s.jsx)("p", {
                className: "mb-3 text-sm font-semibold text-red-500",
                children: a,
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
                          children: "Code",
                        }),
                        (0, s.jsx)("th", {
                          className: "border-b px-3 py-2",
                          children: "Kind",
                        }),
                        (0, s.jsx)("th", {
                          className: "border-b px-3 py-2",
                          children: "Redemption Limit",
                        }),
                        (0, s.jsx)("th", {
                          className: "border-b px-3 py-2",
                          children: "Rewards",
                        }),
                        (0, s.jsx)("th", {
                          className: "border-b px-3 py-2",
                          children: "Campaign",
                        }),
                        (0, s.jsx)("th", {
                          className: "border-b px-3 py-2",
                          children: "Assigned To",
                        }),
                        (0, s.jsx)("th", {
                          className: "border-b px-3 py-2",
                          children: "Redemption History",
                        }),
                        (0, s.jsx)("th", {
                          className: "border-b px-3 py-2",
                          children: "Created",
                        }),
                        (0, s.jsx)("th", {
                          className: "border-b px-3 py-2",
                          children: "Campaign Starts",
                        }),
                        (0, s.jsx)("th", {
                          className: "border-b px-3 py-2",
                          children: "Campaign Ends",
                        }),
                        (0, s.jsx)("th", {
                          className: "border-b px-3 py-2",
                          children: "Last Redeemed At",
                        }),
                        (0, s.jsx)("th", {
                          className: "border-b px-3 py-2",
                          children: "Last Redeemed By",
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsx)("tbody", {
                    children: i
                      ? (0, s.jsx)("tr", {
                          children: (0, s.jsx)("td", {
                            className: "border-b px-3 py-3",
                            colSpan: 12,
                            children: "Loading codes…",
                          }),
                        })
                      : e
                        ? 0 === t.length
                          ? (0, s.jsx)("tr", {
                              children: (0, s.jsx)("td", {
                                className: "border-b px-3 py-3",
                                colSpan: 12,
                                children: (0, s.jsx)("span", {
                                  className: a
                                    ? "font-semibold text-red-500"
                                    : void 0,
                                  children:
                                    a ?? "No codes found for this campaign.",
                                }),
                              }),
                            })
                          : t.map((e) => {
                              let t = d[e.campaignId],
                                a = t?.startsAt ?? null,
                                n = t?.endsAt ?? null,
                                i = (
                                  e.itemIds ? Array.from(e.itemIds) : []
                                ).map((e) => ({
                                  id: e,
                                  item: o.find((t) => t.id === e),
                                }));
                              return (
                                "AQ8V9DW6" === e.code && console.log(e),
                                (0, s.jsxs)(
                                  "tr",
                                  {
                                    className:
                                      "odd:bg-white even:bg-gray-50 hover:bg-gray-100",
                                    children: [
                                      (0, s.jsx)("td", {
                                        className:
                                          "border-b px-3 py-2 font-mono",
                                        children: e.code,
                                      }),
                                      (0, s.jsx)("td", {
                                        className: "border-b px-3 py-2",
                                        children: e.codeKind,
                                      }),
                                      (0, s.jsx)("td", {
                                        className: "border-b px-3 py-2",
                                        children:
                                          null === e.redemptionLimit
                                            ? "∞"
                                            : e.redemptionLimit,
                                      }),
                                      (0, s.jsx)("td", {
                                        className: "border-b px-3 py-2",
                                        children: (0, s.jsx)("div", {
                                          className: "flex flex-col gap-2",
                                          children:
                                            i.length > 0
                                              ? i.map(({ id: e, item: t }) =>
                                                  (0, s.jsxs)(
                                                    "div",
                                                    {
                                                      className:
                                                        "flex flex-col",
                                                      children: [
                                                        (0, s.jsx)("span", {
                                                          children:
                                                            t?.title ??
                                                            "Unknown item",
                                                        }),
                                                        (0, s.jsx)("span", {
                                                          className:
                                                            "font-mono text-xs text-gray-500",
                                                          children:
                                                            t?.friendlyId
                                                              ? `${t.friendlyId} ${t.id}`
                                                              : e,
                                                        }),
                                                      ],
                                                    },
                                                    e,
                                                  ),
                                                )
                                              : (0, s.jsx)("span", {
                                                  className: "text-gray-500",
                                                  children: "—",
                                                }),
                                        }),
                                      }),
                                      (0, s.jsx)("td", {
                                        className: "border-b px-3 py-2",
                                        children: (0, s.jsxs)("div", {
                                          className: "flex flex-col",
                                          children: [
                                            (0, s.jsx)("span", {
                                              children: t?.name ?? "Unknown",
                                            }),
                                            (0, s.jsx)("span", {
                                              className:
                                                "font-mono text-xs text-gray-500",
                                              children: e.campaignId,
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, s.jsx)("td", {
                                        className: "border-b px-3 py-2",
                                        children: e.assignedToMasterPlayerId
                                          ? (0, s.jsx)(r.A, {
                                              type: "button",
                                              variant: "dark",
                                              className:
                                                "text-blue-700 hover:text-blue-900 underline underline-offset-2",
                                              onClick: () =>
                                                c(e.assignedToMasterPlayerId),
                                              children:
                                                e.assignedToMasterPlayerId,
                                            })
                                          : "—",
                                      }),
                                      (0, s.jsx)("td", {
                                        className: "border-b px-3 py-2",
                                        children: (0, s.jsx)(r.A, {
                                          type: "button",
                                          variant: "dark",
                                          "aria-label": `View redemption history for ${e.code}`,
                                          className:
                                            "rounded border border-transparent p-1 text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500",
                                          onClick: () => m(e.code),
                                          children: (0, s.jsx)(l.A, {
                                            className: "h-5 w-5",
                                          }),
                                        }),
                                      }),
                                      (0, s.jsx)("td", {
                                        className: "border-b px-3 py-2",
                                        children: new Date(
                                          e.createdAt,
                                        ).toLocaleString(),
                                      }),
                                      (0, s.jsx)("td", {
                                        className: "border-b px-3 py-2",
                                        children: a
                                          ? new Date(a).toLocaleString()
                                          : "—",
                                      }),
                                      (0, s.jsx)("td", {
                                        className: "border-b px-3 py-2",
                                        children: n
                                          ? new Date(n).toLocaleString()
                                          : "—",
                                      }),
                                      (0, s.jsx)("td", {
                                        className: "border-b px-3 py-2",
                                        children: e.lastRedeemedAt
                                          ? new Date(
                                              e.lastRedeemedAt,
                                            ).toLocaleString()
                                          : "—",
                                      }),
                                      (0, s.jsx)("td", {
                                        className: "border-b px-3 py-2",
                                        children: e.lastRedeemedByMasterPlayerId
                                          ? (0, s.jsx)(r.A, {
                                              type: "button",
                                              variant: "dark",
                                              className:
                                                "text-blue-700 hover:text-blue-900 underline underline-offset-2",
                                              onClick: () =>
                                                c(
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
                        : (0, s.jsx)("tr", {
                            children: (0, s.jsx)("td", {
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
            e &&
              (0, s.jsxs)("div", {
                className:
                  "mt-3 flex items-center justify-between text-xs text-gray-500",
                children: [
                  (0, s.jsxs)("span", {
                    children: [
                      t.length,
                      " code",
                      1 === t.length ? "" : "s",
                      " loaded",
                    ],
                  }),
                  x &&
                    (0, s.jsx)(r.A, {
                      type: "button",
                      variant: "dark",
                      onClick: u,
                      disabled: p || i,
                      loading: p,
                      className:
                        "rounded border border-gray-300 px-3 py-1 text-sm text-gray-700 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60",
                      children: p ? "Loading…" : "Load More",
                    }),
                ],
              }),
          ],
        });
      }
    },
    87791: (e, t, a) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/admin/codes",
        function () {
          return a(31078);
        },
      ]);
    },
    95196: (e, t, a) => {
      "use strict";
      a.d(t, { o: () => l });
      var s = a(2183),
        r = a(64171);
      function l({
        entries: e,
        onOpenUser: t,
        showCodeColumn: a = !0,
        summaryLabel: n,
        loadMore: i,
      }) {
        return (0, s.jsxs)(s.Fragment, {
          children: [
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
                        a &&
                          (0, s.jsx)("th", {
                            className: "border-b px-3 py-2",
                            children: "Code",
                          }),
                        (0, s.jsx)("th", {
                          className: "border-b px-3 py-2",
                          children: "Redeemed At",
                        }),
                        (0, s.jsx)("th", {
                          className: "border-b px-3 py-2",
                          children: "Master Player ID",
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsx)("tbody", {
                    children: e.map((e) =>
                      (0, s.jsxs)(
                        "tr",
                        {
                          className: "odd:bg-white even:bg-gray-50",
                          children: [
                            a &&
                              (0, s.jsx)("td", {
                                className:
                                  "border-b px-3 py-2 font-mono text-xs text-gray-700",
                                children: e.code,
                              }),
                            (0, s.jsx)("td", {
                              className: "border-b px-3 py-2 text-gray-700",
                              children: new Date(e.redeemedAt).toLocaleString(),
                            }),
                            (0, s.jsx)("td", {
                              className: "border-b px-3 py-2",
                              children: (0, s.jsx)(r.A, {
                                type: "button",
                                variant: "dark",
                                className:
                                  "text-blue-700 hover:text-blue-900 underline underline-offset-2",
                                onClick: () => t(e.masterPlayerId),
                                children: (0, s.jsx)("span", {
                                  className: "font-mono text-xs text-gray-700",
                                  children: e.masterPlayerId,
                                }),
                              }),
                            }),
                          ],
                        },
                        `${e.code}-${e.redeemedAt}-${e.masterPlayerId}`,
                      ),
                    ),
                  }),
                ],
              }),
            }),
            (0, s.jsxs)("div", {
              className:
                "mt-3 flex items-center justify-between text-xs text-gray-500",
              children: [
                (0, s.jsx)("span", {
                  children:
                    n ??
                    `${e.length} redemption${1 === e.length ? "" : "s"} loaded`,
                }),
                i?.hasMore &&
                  (0, s.jsx)(r.A, {
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
    97698: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => r });
      var s = a(2183);
      function r() {
        return (0, s.jsxs)("div", {
          role: "status",
          children: [
            (0, s.jsxs)("svg", {
              "aria-hidden": "true",
              className:
                "inline h-6 w-6 animate-spin fill-yellow-800 text-yellow-300",
              viewBox: "0 0 100 101",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, s.jsx)("path", {
                  d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                  fill: "currentColor",
                }),
                (0, s.jsx)("path", {
                  d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                  fill: "currentFill",
                }),
              ],
            }),
            (0, s.jsx)("span", {
              className: "sr-only",
              children: "Loading...",
            }),
          ],
        });
      }
    },
    97842: (e, t, a) => {
      "use strict";
      a.a(e, async (e, s) => {
        try {
          a.d(t, { Q: () => x });
          var r = a(2183),
            l = a(75109),
            n = a(21943),
            i = a.n(n),
            d = a(36439),
            o = a(64171),
            c = a(83737),
            m = e([l, c]);
          [l, c] = m.then ? (await m)() : m;
          let u = ["ASSIGNED", "UNIQUE", "STATIC"];
          function x({
            campaigns: e,
            items: t,
            preselectedCampaign: a,
            onClose: s,
            onCreated: n,
          }) {
            let [m, p] = (0, d.useState)("STATIC"),
              [g, h] = (0, d.useState)(a?.id ?? e[0]?.id ?? ""),
              [b, f] = (0, d.useState)([]),
              [y, v] = (0, d.useState)(""),
              j = (0, d.useMemo)(
                () =>
                  y
                    .split(/[\n,]/)
                    .map((e) => e.trim())
                    .filter(Boolean),
                [y],
              ),
              [N, w] = (0, d.useState)(10),
              [C, k] = (0, d.useState)(""),
              S = (0, d.useMemo)(
                () =>
                  C.split(/[\n,]/)
                    .map((e) => e.trim().toUpperCase())
                    .filter(Boolean),
                [C],
              ),
              [I, A] = (0, d.useState)(!1),
              [E, F] = (0, d.useState)(null),
              [R, L] = (0, d.useState)(null),
              D = a || e.find((e) => e.id === g);
            async function M() {
              F(null);
              let e = b.map((e) => e.trim()).filter(Boolean);
              if (0 === e.length) return void F("Select at least one item");
              if (e.length > l.W4X)
                return void F(`Select up to ${l.W4X} rewards per code`);
              if (!g) return void F("Select a campaign");
              if ("ASSIGNED" === m && 0 === j.length)
                return void F("Enter at least one PlayFab ID");
              if ("UNIQUE" === m && (!N || N < 1))
                return void F("Count must be a positive integer");
              if ("STATIC" === m && 0 === S.length)
                return void F("Enter at least one code");
              let t =
                  "ASSIGNED" === m ? j.length : "UNIQUE" === m ? N : S.length,
                a = l.bfp[m],
                r =
                  "ASSIGNED" === m
                    ? i()(j, a).map((t) => ({
                        codeKind: "ASSIGNED",
                        userIds: t,
                        itemIds: e,
                        campaignId: g,
                      }))
                    : "UNIQUE" === m
                      ? (function (e, t) {
                          if (t <= 0 || e <= 0) return [];
                          let a = [],
                            s = e;
                          for (; s > 0; ) {
                            let e = Math.min(t, s);
                            (a.push(e), (s -= e));
                          }
                          return a;
                        })(N, a).map((t) => ({
                          codeKind: "UNIQUE",
                          count: t,
                          itemIds: e,
                          campaignId: g,
                        }))
                      : i()(S, a).map((t) => ({
                          codeKind: "STATIC",
                          codes: t,
                          itemIds: e,
                          campaignId: g,
                        }));
              (A(!0), L("Starting code creation…"));
              let d = 0;
              try {
                for (let e = 0; e < r.length; e += 1) {
                  L(
                    `Creating batch ${e + 1} of ${r.length} (${d.toLocaleString()}/${t.toLocaleString()} codes created)…`,
                  );
                  let a = await (0, c.L7)(r[e]);
                  if (a.error)
                    return void F(
                      `Batch ${e + 1} of ${r.length} failed: ${a.error.errorMessage ?? "Failed to create codes"}`,
                    );
                  let s = a.data?.codes?.length ?? 0;
                  ((d += s),
                    L(
                      `Completed batch ${e + 1} of ${r.length}: ${d.toLocaleString()}/${t.toLocaleString()} codes created`,
                    ));
                }
                (n(), s());
              } catch (e) {
                F(
                  e instanceof Error
                    ? e.message
                    : "Failed to create codes. Please retry.",
                );
              } finally {
                A(!1);
              }
            }
            return (0, r.jsx)("div", {
              className:
                "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3",
              role: "dialog",
              "aria-modal": "true",
              "aria-labelledby": "create-codes-title",
              children: (0, r.jsxs)("div", {
                className:
                  "max-h-[calc(100vh-4rem)] w-full max-w-2xl overflow-y-auto rounded bg-white p-4 text-gray-900 shadow-xl",
                children: [
                  (0, r.jsxs)("div", {
                    className: "mb-3 flex items-center justify-between",
                    children: [
                      (0, r.jsx)("h2", {
                        id: "create-codes-title",
                        className: "text-lg font-semibold",
                        children: "Create Codes",
                      }),
                      (0, r.jsx)(o.A, {
                        type: "button",
                        variant: "dark",
                        onClick: s,
                        className:
                          "rounded px-2 py-1 text-sm text-gray-600 hover:bg-gray-100",
                        "aria-label": "Close create codes modal",
                        children: "Close",
                      }),
                    ],
                  }),
                  E &&
                    (0, r.jsx)("p", {
                      className: "text-red-500 mb-3 text-sm font-semibold",
                      role: "alert",
                      children: E,
                    }),
                  R &&
                    (0, r.jsx)("p", {
                      className: "mb-3 text-sm text-indigo-700",
                      role: "status",
                      "aria-live": "polite",
                      children: R,
                    }),
                  (0, r.jsxs)("div", {
                    className: "flex flex-col gap-3",
                    children: [
                      (0, r.jsxs)("div", {
                        children: [
                          (0, r.jsx)("label", {
                            htmlFor: "create-codes-campaign",
                            className: "mb-1 block text-sm font-medium",
                            children: "Campaign",
                          }),
                          D
                            ? (0, r.jsxs)("div", {
                                className:
                                  "rounded border border-gray-200 bg-gray-50 p-2 text-sm",
                                children: [
                                  (0, r.jsx)("div", {
                                    className: "font-medium",
                                    children: D.name ?? "Unnamed Campaign",
                                  }),
                                  (0, r.jsx)("div", {
                                    className:
                                      "font-mono text-xs text-gray-500",
                                    children: D.id,
                                  }),
                                ],
                              })
                            : (0, r.jsxs)("select", {
                                id: "create-codes-campaign",
                                value: g,
                                onChange: (e) => h(e.target.value),
                                disabled: 0 === e.length,
                                className:
                                  "w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100",
                                "aria-invalid": E?.includes("campaign")
                                  ? "true"
                                  : "false",
                                children: [
                                  (0, r.jsx)("option", {
                                    value: "",
                                    disabled: !0,
                                    children: "Select a campaign…",
                                  }),
                                  e.map((e) =>
                                    (0, r.jsxs)(
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
                      (0, r.jsxs)("div", {
                        children: [
                          (0, r.jsx)("label", {
                            htmlFor: "create-codes-type",
                            className: "mb-1 block text-sm font-medium",
                            children: "Code Type",
                          }),
                          (0, r.jsxs)("select", {
                            id: "create-codes-type",
                            value: m,
                            onChange: (e) => {
                              let t = e.target.value;
                              u.some((e) => e === t) &&
                                (p(t), v(""), k(""), w(10));
                            },
                            className:
                              "w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none",
                            children: [
                              (0, r.jsx)("option", {
                                value: "ASSIGNED",
                                children: "Assigned",
                              }),
                              (0, r.jsx)("option", {
                                value: "UNIQUE",
                                children: "Unique",
                              }),
                              (0, r.jsx)("option", {
                                value: "STATIC",
                                children: "Static",
                              }),
                            ],
                          }),
                        ],
                      }),
                      "ASSIGNED" === m &&
                        (0, r.jsxs)("div", {
                          children: [
                            (0, r.jsx)("label", {
                              htmlFor: "create-codes-user-ids",
                              className: "mb-1 block text-sm font-medium",
                              children: "PlayFab User IDs",
                            }),
                            (0, r.jsx)("textarea", {
                              id: "create-codes-user-ids",
                              value: y,
                              onChange: (e) => v(e.target.value),
                              rows: 4,
                              placeholder: "One per line or comma-separated",
                              className:
                                "w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none",
                              "aria-invalid": E?.includes("PlayFab ID")
                                ? "true"
                                : "false",
                            }),
                            (0, r.jsxs)("p", {
                              className: "mt-1 text-xs text-gray-500",
                              children: [
                                "Parsed ",
                                j.length.toLocaleString(),
                                " user ID",
                                1 === j.length ? "" : "s",
                                " (sending in batches of up to ",
                                l.bfp[m].toLocaleString(),
                                ")",
                              ],
                            }),
                          ],
                        }),
                      "UNIQUE" === m &&
                        (0, r.jsxs)("div", {
                          children: [
                            (0, r.jsx)("label", {
                              htmlFor: "create-codes-count",
                              className: "mb-1 block text-sm font-medium",
                              children: "Count",
                            }),
                            (0, r.jsx)("input", {
                              id: "create-codes-count",
                              type: "number",
                              min: 1,
                              value: Number.isNaN(N) ? "" : N,
                              onChange: (e) => w(parseInt(e.target.value, 10)),
                              className:
                                "w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none",
                              "aria-invalid": E?.includes("Count")
                                ? "true"
                                : "false",
                            }),
                            (0, r.jsxs)("p", {
                              className: "mt-1 text-xs text-gray-500",
                              children: [
                                "Requests are sent in batches of up to",
                                " ",
                                l.bfp[m].toLocaleString(),
                                ". Single-use codes lock after redemption (enforced via lastRedeemedAt).",
                              ],
                            }),
                          ],
                        }),
                      "STATIC" === m &&
                        (0, r.jsxs)("div", {
                          children: [
                            (0, r.jsx)("label", {
                              htmlFor: "create-codes-static",
                              className: "mb-1 block text-sm font-medium",
                              children: "Codes",
                            }),
                            (0, r.jsx)("textarea", {
                              id: "create-codes-static",
                              value: C,
                              onChange: (e) => k(e.target.value.toUpperCase()),
                              rows: 4,
                              placeholder: "One per line or comma-separated",
                              className:
                                "w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none",
                              "aria-invalid": E?.includes("code")
                                ? "true"
                                : "false",
                            }),
                            (0, r.jsxs)("p", {
                              className: "mt-1 text-xs text-gray-500",
                              children: [
                                "Parsed ",
                                S.length.toLocaleString(),
                                " code",
                                1 === S.length ? "" : "s",
                                " (sending in batches of up to ",
                                l.bfp[m].toLocaleString(),
                                ")",
                              ],
                            }),
                          ],
                        }),
                      (0, r.jsxs)("div", {
                        children: [
                          (0, r.jsx)("label", {
                            htmlFor: "create-codes-item",
                            className: "mb-1 block text-sm font-medium",
                            children: "Item(s)",
                          }),
                          (0, r.jsxs)("select", {
                            id: "create-codes-item",
                            value: b,
                            multiple: !0,
                            onChange: (e) =>
                              f(
                                Array.from(e.currentTarget.selectedOptions).map(
                                  (e) => e.value,
                                ),
                              ),
                            className:
                              "w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none",
                            "aria-invalid": E?.includes("item")
                              ? "true"
                              : "false",
                            children: [
                              (0, r.jsx)("option", {
                                value: "",
                                disabled: !0,
                                children: "Select an item…",
                              }),
                              t.map((e) => {
                                let t = [
                                  e.title,
                                  e.friendlyId ? `— ${e.friendlyId}` : null,
                                  `— ${e.id}`,
                                ].filter(Boolean);
                                return (0, r.jsx)(
                                  "option",
                                  { value: e.id, children: t.join(" ") },
                                  e.id,
                                );
                              }),
                            ],
                          }),
                          (0, r.jsx)("p", {
                            className: "mt-1 text-xs text-gray-500",
                            children:
                              0 === b.length
                                ? `Select one or more rewards (Cmd/Ctrl + click to multi-select). Limit ${l.W4X}.`
                                : `${b.length} reward${1 === b.length ? "" : "s"} selected (max ${l.W4X})`,
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "flex justify-end gap-2 pt-2",
                        children: [
                          (0, r.jsx)(o.A, {
                            type: "button",
                            variant: "dark",
                            onClick: s,
                            className:
                              "rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-100",
                            disabled: I,
                            children: "Cancel",
                          }),
                          (0, r.jsx)(o.A, {
                            type: "button",
                            variant: "darkBackground",
                            onClick: M,
                            disabled: I,
                            loading: I,
                            className:
                              "rounded border border-indigo-600 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed disabled:border-indigo-300 disabled:bg-indigo-100 disabled:text-indigo-700 disabled:opacity-100 disabled:shadow-none",
                            children: I ? "Creating…" : "Create Codes",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            });
          }
          s();
        } catch (e) {
          s(e);
        }
      });
    },
  },
  (e) => {
    (e.O(0, [5013, 9820, 636, 6593, 8792], () => e((e.s = 87791))),
      (_N_E = e.O()));
  },
]);
