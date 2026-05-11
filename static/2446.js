"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2446],
  {
    30567: (e, l, t) => {
      t.d(l, { A: () => r });
      var i = t(2183);
      function r(e) {
        let { question: l, answer: t, onAnswerChange: r } = e;
        return (0, i.jsxs)("div", {
          className: "mb-6 flex items-center",
          children: [
            (0, i.jsx)("input", {
              id: ""
                .concat(l.fields.telemetryId, "-")
                .concat(t.fields.telemetryId, "-")
                .concat(t.fields.text),
              type: "radio",
              value: t.fields.telemetryId,
              name: "question-".concat(l.fields.telemetryId),
              className:
                "text-blue-600 dark:focus:ring-blue-600 h-4 w-4 border-gray-300 bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700",
              onChange: r,
            }),
            (0, i.jsx)("label", {
              htmlFor: ""
                .concat(l.fields.telemetryId, "-")
                .concat(t.fields.telemetryId, "-")
                .concat(t.fields.text),
              className: "ms-2 text-sm font-medium text-black",
              children: t.fields.text,
            }),
          ],
        });
      }
    },
    34905: (e, l, t) => {
      t.a(e, async (e, i) => {
        try {
          t.d(l, { A: () => f });
          var r = t(2183),
            s = t(36439),
            n = t(94536),
            a = t(63308),
            d = t(96006),
            u = t.n(d);
          (t(4197), t(92597), t(18855));
          var c = t(92446),
            o = e([c]);
          c = (o.then ? (await o)() : o)[0];
          let f = (e) => {
            let { gallery: l } = e,
              { items: t, showCaptions: i } = l,
              d = (0, s.useRef)([]),
              o = (0, s.useRef)([]);
            return (
              (0, s.useEffect)(() => {
                ((d.current = d.current.slice(
                  0,
                  null == t ? void 0 : t.length,
                )),
                  (o.current = o.current.slice(
                    0,
                    null == t ? void 0 : t.length,
                  )));
              }, [t]),
              (0, r.jsx)(n.RC, {
                modules: [a.Vx, a.dK],
                spaceBetween: 0,
                slidesPerView: 1,
                loop: !0,
                navigation: !0,
                pagination: { clickable: !0 },
                className: "article-media-gallery w-full",
                onSlideChange: () =>
                  void (d.current.forEach((e) => {
                    e && (e.pause(), (e.currentTime = 0));
                  }),
                  o.current.forEach((e) => {
                    if (e) {
                      var l;
                      null == (l = e.contentWindow) ||
                        l.postMessage(
                          '{"event":"command","func":"stopVideo","args":""}',
                          "*",
                        );
                    }
                  })),
                children:
                  null == t
                    ? void 0
                    : t.map((e, l) => {
                        var t, s, a, f, m, h, v, y, p, x;
                        if (!e) return null;
                        let g = !!e.fields.youTubeLink,
                          w =
                            !g &&
                            (null == (s = e.fields.media) ||
                            null == (t = s.fields.file)
                              ? void 0
                              : t.contentType.startsWith("video/"));
                        return (0, r.jsxs)(
                          n.qr,
                          {
                            children: [
                              (0, r.jsx)("div", {
                                className:
                                  "relative aspect-video w-full bg-black",
                                children:
                                  g && e.fields.youTubeLink
                                    ? (0, r.jsx)("iframe", {
                                        ref: (e) => {
                                          o.current[l] = e;
                                        },
                                        width: "100%",
                                        height: "100%",
                                        src: "https://www.youtube.com/embed/".concat(
                                          (function (e) {
                                            let l = e.match(
                                              /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/,
                                            );
                                            return l && 11 === l[2].length
                                              ? l[2]
                                              : "";
                                          })(e.fields.youTubeLink),
                                          "?enablejsapi=1",
                                        ),
                                        allow:
                                          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                        allowFullScreen: !0,
                                        className:
                                          "absolute inset-0 h-full w-full",
                                      })
                                    : w
                                      ? (0, r.jsxs)("video", {
                                          ref: (e) => {
                                            d.current[l] = e;
                                          },
                                          controls: !0,
                                          poster: (0, c._c)(
                                            null == (f = e.fields.media) ||
                                              null == (a = f.fields.file)
                                              ? void 0
                                              : a.url,
                                          ),
                                          className:
                                            "absolute inset-0 h-full w-full object-cover",
                                          children: [
                                            (0, r.jsx)("source", {
                                              src: (0, c._c)(
                                                null == (h = e.fields.media) ||
                                                  null == (m = h.fields.file)
                                                  ? void 0
                                                  : m.url,
                                              ),
                                              type:
                                                null == (y = e.fields.media) ||
                                                null == (v = y.fields.file)
                                                  ? void 0
                                                  : v.contentType,
                                            }),
                                            "Your browser does not support the video tag.",
                                          ],
                                        })
                                      : (0, r.jsx)(u(), {
                                          src:
                                            (0, c._c)(
                                              null == (x = e.fields.media) ||
                                                null == (p = x.fields.file)
                                                ? void 0
                                                : p.url,
                                            ) || "",
                                          alt:
                                            e.fields.caption ||
                                            "Gallery image ".concat(l + 1),
                                          fill: !0,
                                          className: "object-contain",
                                        }),
                              }),
                              i &&
                                e.fields.caption &&
                                (0, r.jsx)("div", {
                                  className: "my-2 text-center text-gray-600",
                                  children: e.fields.caption,
                                }),
                            ],
                          },
                          l,
                        );
                      }),
              })
            );
          };
          i();
        } catch (e) {
          i(e);
        }
      });
    },
    57146: (e, l, t) => {
      t.a(e, async (e, i) => {
        try {
          t.d(l, { A: () => v });
          var r = t(2183),
            s = t(78357),
            n = t(55109),
            a = t(36439),
            d = t(15711),
            u = t(18652),
            c = t(77752),
            o = t(99435),
            f = t(96006),
            m = t.n(f),
            h = e([s, n, o]);
          function v(e) {
            var l;
            let { survey: t } = e,
              i = (0, a.useMemo)(
                () =>
                  t.questions.map((e) => ({
                    questionTelemetryId: e.fields.telemetryId,
                    answerTelemetryId: null,
                  })),
                [t],
              ),
              f = (0, u.useRouter)(),
              { addAlert: h } = (0, c.Z)(),
              [v, y] = (0, a.useState)([...i]),
              [p, x] = (0, a.useState)(t.questions.map(() => null)),
              [g, w] = (0, a.useState)(null),
              [j, b] = (0, a.useState)(!1),
              {
                addCompletedSurvey: A,
                completedSurveys: N,
                emailData: I,
                resendVerification: E,
                unlockAvatar: T,
                rewards: D,
              } = (0, o.u)(),
              _ = (0, a.useMemo)(
                () =>
                  !t.requiresVerifiedAccount ||
                  (null == I ? void 0 : I.hasConfirmedEmail),
                [t, I],
              ),
              k = (0, a.useMemo)(() => N.includes(t.telemetryId), [N]),
              S = (0, a.useMemo)(() => {
                if (D.allAvatars && t) {
                  var e;
                  return null !=
                    (e = D.allAvatars.find(
                      (e) =>
                        e.friendlyId &&
                        e.friendlyId === t.unlockAvatarFriendlyId,
                    ))
                    ? e
                    : null;
                }
                return null;
              }, [D, t]),
              q = (e, l) => {
                y((t) =>
                  t.map((t) =>
                    t.questionTelemetryId === e
                      ? { ...t, answerTelemetryId: l }
                      : t,
                  ),
                );
              },
              C = async () => {
                if (
                  (() => {
                    let e = !0,
                      l = [...p];
                    return (
                      v.forEach((t, i) => {
                        t.answerTelemetryId
                          ? (l[i] = null)
                          : ((l[i] = "Please select an answer."), (e = !1));
                      }),
                      x(l),
                      w(
                        l.length > 0
                          ? "Please complete all questions to submit this survey."
                          : g,
                      ),
                      e
                    );
                  })()
                ) {
                  b(!0);
                  try {
                    let l = await (0, n.Q7)({
                      surveyTelemetryId: t.telemetryId,
                      questionAnswers: v.map((e) => ({
                        questionTelemetryId: e.questionTelemetryId,
                        answerTelemetryId: e.answerTelemetryId,
                      })),
                    });
                    if (l.error) w(l.error.errorMessage);
                    else {
                      if ((A(t.telemetryId), S)) {
                        var e;
                        T(null != (e = S.friendlyId) ? e : "");
                      }
                      (h({
                        title: "Survey Answers Submitted",
                        children: "Your survey answers have been submitted!",
                      }),
                        f.pathname.includes("/account/surveys") &&
                          f.replace("/account/surveys"));
                    }
                  } catch (e) {
                    w("An error occurred submitting your answers.");
                  }
                  b(!1);
                }
              };
            return (0, r.jsxs)("div", {
              className: "relative max-w-3xl",
              children: [
                (0, r.jsx)("h2", {
                  className: "mb-8 text-4xl text-black",
                  children: t.title,
                }),
                _
                  ? k
                    ? (0, r.jsx)("div", {
                        children: "Thank you for participating in this survey!",
                      })
                    : (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)("div", {
                            className: "max-w-2xl",
                            children: t.description,
                          }),
                          S &&
                            (0, r.jsxs)("div", {
                              className:
                                "flex flex-col gap-x-4 gap-y-2 pb-2 pt-6 sm:flex-row sm:items-center sm:gap-y-0",
                              children: [
                                (0, r.jsx)("div", {
                                  className: "relative h-16 w-16",
                                  children: (0, r.jsx)(m(), {
                                    alt: "avatar reward",
                                    className: "rounded-full object-cover",
                                    src: null != (l = S.imageUrl) ? l : "",
                                    fill: !0,
                                  }),
                                }),
                                (0, r.jsx)("div", {
                                  children:
                                    "You will unlock this avatar for completing the survey.",
                                }),
                              ],
                            }),
                          (0, r.jsx)("div", {
                            className: "pb-8",
                            children: t.questions.map((e, l) =>
                              (0, r.jsx)(
                                s.A,
                                {
                                  selectedAnswer: v[l],
                                  error: p[l],
                                  question: e,
                                  onAnswerChange: q,
                                },
                                null == e ? void 0 : e.fields.telemetryId,
                              ),
                            ),
                          }),
                          (0, r.jsx)("div", {
                            className: "",
                            children: (0, r.jsx)(d.A, {
                              loading: j,
                              variant: "dark",
                              onClick: C,
                              children: "Complete Survey",
                            }),
                          }),
                          g &&
                            (0, r.jsx)("p", {
                              className: "pt-2 text-red-500",
                              children: g,
                            }),
                        ],
                      })
                  : (0, r.jsxs)("div", {
                      children: [
                        "Please",
                        " ",
                        (0, r.jsx)("button", {
                          className: "hover:underline",
                          onClick: E,
                          type: "button",
                          children: "verify",
                        }),
                        " ",
                        "your email to access this survey.",
                      ],
                    }),
              ],
            });
          }
          (([s, n, o] = h.then ? (await h)() : h), i());
        } catch (e) {
          i(e);
        }
      });
    },
    59528: (e, l, t) => {
      t.d(l, { A: () => r });
      var i = t(2183);
      function r(e) {
        let { src: l } = e;
        return (0, i.jsx)("iframe", {
          src: l,
          title: "Embedded Youtube",
          className: "mb-8 aspect-[16/9] h-full w-full",
          allowFullScreen: !0,
        });
      }
    },
    78357: (e, l, t) => {
      t.a(e, async (e, i) => {
        try {
          t.d(l, { A: () => c });
          var r = t(2183),
            s = t(30567),
            n = t(96006),
            a = t.n(n),
            d = t(92446),
            u = e([d]);
          function c(e) {
            var l, t, i, n, u, c, o, f, m;
            let { question: h, onAnswerChange: v, error: y } = e;
            return (0, r.jsxs)("div", {
              className: "relative py-4",
              children: [
                (0, r.jsx)("div", {
                  className: "pb-4 font-bold",
                  children: h.fields.questionText,
                }),
                h.fields.image &&
                  (0, r.jsx)("div", {
                    className: "relative mb-6 h-auto w-full",
                    children: (0, r.jsx)(a(), {
                      width:
                        null == (t = h.fields.image.fields.file) ||
                        null == (l = t.details.image)
                          ? void 0
                          : l.width,
                      height:
                        null == (n = h.fields.image.fields.file) ||
                        null == (i = n.details.image)
                          ? void 0
                          : i.height,
                      src:
                        null !=
                        (f = (0, d._c)(
                          null == (c = h.fields.image) ||
                            null == (u = c.fields.file)
                            ? void 0
                            : u.url,
                        ))
                          ? f
                          : "",
                      alt:
                        null !=
                        (m =
                          null == (o = h.fields.image)
                            ? void 0
                            : o.fields.description)
                          ? m
                          : "",
                      sizes: "100vw",
                      className: "h-auto w-full",
                    }),
                  }),
                h.fields.answers.map((e) =>
                  (0, r.jsx)(
                    s.A,
                    {
                      answer: e,
                      question: h,
                      onAnswerChange: () =>
                        v(h.fields.telemetryId, e.fields.telemetryId),
                    },
                    e.fields.telemetryId,
                  ),
                ),
                y &&
                  (0, r.jsx)("p", {
                    className: "text-red-500",
                    children: "Please provide an answer to this question.",
                  }),
              ],
            });
          }
          ((d = (u.then ? (await u)() : u)[0]), i());
        } catch (e) {
          i(e);
        }
      });
    },
    83599: (e, l, t) => {
      t.d(l, { $g: () => s, AD: () => a, IV: () => n });
      var i = t(40235),
        r = t(22045);
      function s(e) {
        return e.nodeType === i.XD.ASSET_HYPERLINK;
      }
      function n(e) {
        return e.nodeType === i.nA.EMBEDDED_ENTRY;
      }
      function a(e) {
        return [".jpg", ".png", ".webp", ".gif", ".avif"].includes(
          r.parse(e.url).ext,
        );
      }
    },
    92446: (e, l, t) => {
      t.a(e, async (e, i) => {
        try {
          t.d(l, { Xx: () => x, _c: () => g, pO: () => w });
          var r = t(2183),
            s = t(96006),
            n = t.n(s),
            a = t(40235),
            d = t(59528),
            u = t(80707),
            c = t.n(u);
          t(36439);
          var o = t(95873),
            f = t(83599),
            m = t(75109),
            h = t(57146),
            v = t(34905),
            y = t(608),
            p = e([m, h, v]);
          [m, h, v] = p.then ? (await p)() : p;
          let g = (e) => (e ? "https:".concat(e) : ""),
            w = function (e, l) {
              var t, i, r, s, n, a, d, u;
              let c =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2],
                o =
                  !c &&
                  (null == e ||
                  null == (i = e.fields.videoThumbnail) ||
                  null == (t = i.fields.file)
                    ? void 0
                    : t.url) !== void 0 &&
                  (null == e ? void 0 : e.fields.videoUrl) !== void 0,
                f = g(
                  o
                    ? null == e ||
                      null == (s = e.fields.videoThumbnail) ||
                      null == (r = s.fields.file)
                      ? void 0
                      : r.url
                    : null == e ||
                        null == (a = e.fields.image) ||
                        null == (n = a.fields.file)
                      ? void 0
                      : n.url,
                );
              return {
                alt:
                  null !=
                  (u =
                    null == e || null == (d = e.fields.image)
                      ? void 0
                      : d.fields.description)
                    ? u
                    : "",
                url: f,
                isVideo: o,
                id: (null == e ? void 0 : e.sys.id)
                  ? "".concat(e.sys.id, "-").concat(l)
                  : l,
              };
            },
            j = function (e, l) {
              let t =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                i = l.split("".concat(e[0], "[").concat(e[2], "]"));
              return Array.from(new Set(i)).map((l, i) =>
                "" === l
                  ? (0, r.jsx)(
                      "span",
                      {
                        ...t,
                        style: { color: "".concat(e[2]) },
                        children: e[1],
                      },
                      "highlight-".concat(e[2], "-").concat(i),
                    )
                  : l,
              );
            },
            b = function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [];
              return Array.isArray(e)
                ? e.flatMap((e) => {
                    if ("string" == typeof e) {
                      let l = e.match(/\((.+)\)(?=\[(#\w+)])/);
                      if (l) return j(l, e);
                    }
                    return e;
                  })
                : b([e]);
            };
          function x(e, l) {
            return {
              renderNode: {
                [a.nA.HEADING_1]: (e, l) =>
                  (0, r.jsx)("h1", { children: b(l) }),
                [a.nA.HEADING_2]: (e, l) =>
                  (0, r.jsx)("h2", { children: b(l) }),
                [a.nA.HEADING_3]: (e, l) =>
                  (0, r.jsx)("h3", { children: b(l) }),
                [a.nA.HEADING_4]: (e, l) =>
                  (0, r.jsx)("h4", { children: b(l) }),
                [a.nA.HEADING_5]: (e, l) =>
                  (0, r.jsx)("h5", { children: b(l) }),
                [a.nA.HEADING_6]: (e, l) =>
                  (0, r.jsx)("h6", { children: b(l) }),
                [a.nA.PARAGRAPH]: (e, l) => (0, r.jsx)("p", { children: b(l) }),
                [a.nA.EMBEDDED_ASSET]: (l) => {
                  var t;
                  if (e) return (0, r.jsx)(r.Fragment, {});
                  let i = l.data.target;
                  if (
                    "string" !=
                    typeof (null == (t = i.fields.file) ? void 0 : t.url)
                  )
                    return (0, r.jsx)(r.Fragment, {});
                  let s =
                    i.fields.description ||
                    i.fields.title ||
                    i.fields.file.fileName;
                  "string" != typeof s && (s = "");
                  let a = i.fields.file;
                  if (a) {
                    if ((0, f.AD)(a)) {
                      let { width: e = 0, height: l = 0 } = a.details.image;
                      return (0, r.jsx)("div", {
                        className: "relative max-w-full",
                        children: (0, r.jsx)(n(), {
                          className: "mb-8 object-contain",
                          src: g(i.fields.file.url),
                          alt: s,
                          width: e,
                          height: l,
                        }),
                      });
                    }
                    return (0, r.jsx)("a", {
                      href: a.url,
                      children: a.fileName,
                    });
                  }
                },
                [a.XD.HYPERLINK]: (e, l) => {
                  var t;
                  let i =
                    (null == (t = c().first(e.content)) ? void 0 : t.value) ||
                    "";
                  if (
                    !(
                      ["EMBED", "EMBEDDED"].includes(i) &&
                      (e.data.uri.includes("youtube.com") ||
                        e.data.uri.includes("youtu.be"))
                    )
                  )
                    return (0, r.jsx)("a", { href: e.data.uri, children: l });
                  {
                    let l = (0, o.C)(e.data.uri);
                    return (0, r.jsx)(d.A, { src: l });
                  }
                },
                [a.XD.ASSET_HYPERLINK]: (e, l) => {
                  if ((0, f.$g)(e)) {
                    var t;
                    let i = e.data.target,
                      s = null == i || null == (t = i.fields) ? void 0 : t.file;
                    return (0, r.jsx)("a", {
                      href: g(null == s ? void 0 : s.url),
                      children: l,
                    });
                  }
                  return (0, r.jsxs)("span", {
                    children: [
                      "type: ",
                      e.nodeType,
                      ", id: ",
                      e.data.target.sys.id,
                      ",",
                    ],
                  });
                },
                [a.nA.EMBEDDED_ENTRY]: (e, t) => {
                  if ((0, f.IV)(e)) {
                    let t = e.data.target;
                    if ((0, m.na_)(t))
                      return l
                        ? (0, r.jsx)("div", {
                            className: "mb-16",
                            children: (0, r.jsx)(h.A, { survey: t.fields }),
                          })
                        : (0, r.jsxs)("p", {
                            children: [
                              "Please",
                              " ",
                              (0, r.jsx)("a", {
                                onClick: () => (0, y.d4)(window.location.href),
                                href: "/login",
                                children: "sign in",
                              }),
                              " ",
                              "to view this survey.",
                            ],
                          });
                    if ((0, m.kUt)(t))
                      return t.fields.html
                        ? (0, r.jsx)("span", {
                            dangerouslySetInnerHTML: { __html: t.fields.html },
                          })
                        : (console.warn(
                            "html unexpectedly empty! target =",
                            JSON.stringify(t),
                          ),
                          (0, r.jsx)(r.Fragment, {}));
                    if ((0, m.Fws)(t)) {
                      let e = t.fields;
                      return (0, r.jsx)(v.A, { gallery: e });
                    }
                  }
                  return (0, r.jsx)(r.Fragment, {});
                },
              },
            };
          }
          i();
        } catch (e) {
          i(e);
        }
      });
    },
    95873: (e, l, t) => {
      t.d(l, { C: () => s });
      var i = t(80707),
        r = t.n(i);
      function s(e) {
        if (e.includes("embed")) return e;
        if (e.includes("vimeo"))
          if (e.includes("player")) return e;
          else {
            let l = e.split("/");
            return "https://player.vimeo.com/video/" + r().last(l);
          }
        let l = e.split("/");
        return "https://www.youtube.com/embed/" + r().last(l);
      }
    },
  },
]);
