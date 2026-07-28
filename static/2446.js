"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2446],
  {
    30567: (e, l, t) => {
      t.d(l, { A: () => n });
      var i = t(2183);
      function n(e) {
        let { question: l, answer: t, onAnswerChange: n } = e;
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
              onChange: n,
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
          var n = t(2183),
            r = t(36439),
            s = t(94536),
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
              d = (0, r.useRef)([]),
              o = (0, r.useRef)([]);
            return (
              (0, r.useEffect)(() => {
                ((d.current = d.current.slice(
                  0,
                  null == t ? void 0 : t.length,
                )),
                  (o.current = o.current.slice(
                    0,
                    null == t ? void 0 : t.length,
                  )));
              }, [t]),
              (0, n.jsx)(s.RC, {
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
                        var t, r, a, f, m, h, v, y, p, x;
                        if (!e) return null;
                        let g = !!e.fields.youTubeLink,
                          j =
                            !g &&
                            (null == (r = e.fields.media) ||
                            null == (t = r.fields.file)
                              ? void 0
                              : t.contentType.startsWith("video/"));
                        return (0, n.jsxs)(
                          s.qr,
                          {
                            children: [
                              (0, n.jsx)("div", {
                                className:
                                  "relative aspect-video w-full bg-black",
                                children:
                                  g && e.fields.youTubeLink
                                    ? (0, n.jsx)("iframe", {
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
                                    : j
                                      ? (0, n.jsxs)("video", {
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
                                            (0, n.jsx)("source", {
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
                                      : (0, n.jsx)(u(), {
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
                                (0, n.jsx)("div", {
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
          var n = t(2183),
            r = t(78357),
            s = t(55109),
            a = t(36439),
            d = t(15711),
            u = t(18652),
            c = t(77752),
            o = t(99435),
            f = t(96006),
            m = t.n(f),
            h = e([r, s, o]);
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
              [g, j] = (0, a.useState)(null),
              [w, b] = (0, a.useState)(!1),
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
                      j(
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
                    let l = await (0, s.Q7)({
                      surveyTelemetryId: t.telemetryId,
                      questionAnswers: v.map((e) => ({
                        questionTelemetryId: e.questionTelemetryId,
                        answerTelemetryId: e.answerTelemetryId,
                      })),
                    });
                    if (l.error) j(l.error.errorMessage);
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
                    j("An error occurred submitting your answers.");
                  }
                  b(!1);
                }
              };
            return (0, n.jsxs)("div", {
              className: "relative max-w-3xl",
              children: [
                (0, n.jsx)("h2", {
                  className: "mb-8 text-4xl text-black",
                  children: t.title,
                }),
                _
                  ? k
                    ? (0, n.jsx)("div", {
                        children: "Thank you for participating in this survey!",
                      })
                    : (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)("div", {
                            className: "max-w-2xl",
                            children: t.description,
                          }),
                          S &&
                            (0, n.jsxs)("div", {
                              className:
                                "flex flex-col gap-x-4 gap-y-2 pb-2 pt-6 sm:flex-row sm:items-center sm:gap-y-0",
                              children: [
                                (0, n.jsx)("div", {
                                  className: "relative h-16 w-16",
                                  children: (0, n.jsx)(m(), {
                                    alt: "avatar reward",
                                    className: "rounded-full object-cover",
                                    src: null != (l = S.imageUrl) ? l : "",
                                    fill: !0,
                                  }),
                                }),
                                (0, n.jsx)("div", {
                                  children:
                                    "You will unlock this avatar for completing the survey.",
                                }),
                              ],
                            }),
                          (0, n.jsx)("div", {
                            className: "pb-8",
                            children: t.questions.map((e, l) =>
                              (0, n.jsx)(
                                r.A,
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
                          (0, n.jsx)("div", {
                            className: "",
                            children: (0, n.jsx)(d.A, {
                              loading: w,
                              variant: "dark",
                              onClick: C,
                              children: "Complete Survey",
                            }),
                          }),
                          g &&
                            (0, n.jsx)("p", {
                              className: "pt-2 text-red-500",
                              children: g,
                            }),
                        ],
                      })
                  : (0, n.jsxs)("div", {
                      children: [
                        "Please",
                        " ",
                        (0, n.jsx)("button", {
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
          (([r, s, o] = h.then ? (await h)() : h), i());
        } catch (e) {
          i(e);
        }
      });
    },
    59528: (e, l, t) => {
      t.d(l, { A: () => n });
      var i = t(2183);
      function n(e) {
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
          var n = t(2183),
            r = t(30567),
            s = t(96006),
            a = t.n(s),
            d = t(92446),
            u = e([d]);
          function c(e) {
            var l, t, i, s, u, c, o, f, m;
            let { question: h, onAnswerChange: v, error: y } = e;
            return (0, n.jsxs)("div", {
              className: "relative py-4",
              children: [
                (0, n.jsx)("div", {
                  className: "pb-4 font-bold",
                  children: h.fields.questionText,
                }),
                h.fields.image &&
                  (0, n.jsx)("div", {
                    className: "relative mb-6 h-auto w-full",
                    children: (0, n.jsx)(a(), {
                      width:
                        null == (t = h.fields.image.fields.file) ||
                        null == (l = t.details.image)
                          ? void 0
                          : l.width,
                      height:
                        null == (s = h.fields.image.fields.file) ||
                        null == (i = s.details.image)
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
                  (0, n.jsx)(
                    r.A,
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
                  (0, n.jsx)("p", {
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
      t.d(l, { $g: () => r, AD: () => a, IV: () => s });
      var i = t(40235),
        n = t(22045);
      function r(e) {
        return e.nodeType === i.XD.ASSET_HYPERLINK;
      }
      function s(e) {
        return e.nodeType === i.nA.EMBEDDED_ENTRY;
      }
      function a(e) {
        return [".jpg", ".png", ".webp", ".gif", ".avif"].includes(
          n.parse(e.url).ext,
        );
      }
    },
    92446: (e, l, t) => {
      t.a(e, async (e, i) => {
        try {
          t.d(l, { Xx: () => w, _c: () => b, pO: () => A, sk: () => j });
          var n = t(2183),
            r = t(96006),
            s = t.n(r),
            a = t(40453),
            d = t(40235),
            u = t(59528),
            c = t(80707),
            o = t.n(c),
            f = t(36439),
            m = t(95873),
            h = t(83599),
            v = t(75109),
            y = t(57146),
            p = t(34905),
            x = t(608),
            g = e([v, y, p]);
          [v, y, p] = g.then ? (await g)() : g;
          let b = (e) => (e ? "https:".concat(e) : ""),
            A = function (e, l) {
              var t, i, n, r, s, a, d, u;
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
                f = b(
                  o
                    ? null == e ||
                      null == (r = e.fields.videoThumbnail) ||
                      null == (n = r.fields.file)
                      ? void 0
                      : n.url
                    : null == e ||
                        null == (a = e.fields.image) ||
                        null == (s = a.fields.file)
                      ? void 0
                      : s.url,
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
            N = function (e, l) {
              let t =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                i = l.split("".concat(e[0], "[").concat(e[2], "]"));
              return Array.from(new Set(i)).map((l, i) =>
                "" === l
                  ? (0, n.jsx)(
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
            I = function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [];
              return Array.isArray(e)
                ? e.flatMap((e) => {
                    if ("string" == typeof e) {
                      let l = e.match(/\((.+)\)(?=\[(#\w+)])/);
                      if (l) return N(l, e);
                    }
                    return e;
                  })
                : I([e]);
            };
          function j(e, l) {
            let t = [],
              i = [];
            for (let l of e.content)
              l.nodeType === d.nA.HEADING_2
                ? (i.length > 0 && t.push(i), (i = [l]))
                : i.push(l);
            return (
              i.length > 0 && t.push(i),
              t.map((t, i) => {
                let r = (0, a.i)({ ...e, content: t }, l);
                return t[0].nodeType === d.nA.HEADING_2
                  ? (0, n.jsx)("section", { children: r }, i)
                  : (0, n.jsx)(f.Fragment, { children: r }, i);
              })
            );
          }
          function w(e, l) {
            return {
              renderNode: {
                [d.nA.HEADING_1]: (e, l) =>
                  (0, n.jsx)("h1", { children: I(l) }),
                [d.nA.HEADING_2]: (e, l) =>
                  (0, n.jsx)("h2", { children: I(l) }),
                [d.nA.HEADING_3]: (e, l) =>
                  (0, n.jsx)("h3", { children: I(l) }),
                [d.nA.HEADING_4]: (e, l) =>
                  (0, n.jsx)("h4", { children: I(l) }),
                [d.nA.HEADING_5]: (e, l) =>
                  (0, n.jsx)("h5", { children: I(l) }),
                [d.nA.HEADING_6]: (e, l) =>
                  (0, n.jsx)("h6", { children: I(l) }),
                [d.nA.PARAGRAPH]: (e, l) => (0, n.jsx)("p", { children: I(l) }),
                [d.nA.EMBEDDED_ASSET]: (l) => {
                  var t;
                  if (e) return (0, n.jsx)(n.Fragment, {});
                  let i = l.data.target;
                  if (
                    "string" !=
                    typeof (null == (t = i.fields.file) ? void 0 : t.url)
                  )
                    return (0, n.jsx)(n.Fragment, {});
                  let r =
                    i.fields.description ||
                    i.fields.title ||
                    i.fields.file.fileName;
                  "string" != typeof r && (r = "");
                  let a = i.fields.file;
                  if (a) {
                    if ((0, h.AD)(a)) {
                      let { width: e = 0, height: l = 0 } = a.details.image,
                        t =
                          "string" == typeof i.fields.description
                            ? i.fields.description
                            : "";
                      return (0, n.jsxs)("figure", {
                        className: "relative max-w-full",
                        children: [
                          (0, n.jsx)(s(), {
                            className: t
                              ? "object-contain"
                              : "mb-8 object-contain",
                            src: b(i.fields.file.url),
                            alt: r,
                            width: e,
                            height: l,
                          }),
                          t &&
                            (0, n.jsx)("figcaption", {
                              className: "mt-2 mb-8 text-sm text-gray-500",
                              children: t,
                            }),
                        ],
                      });
                    }
                    return (0, n.jsx)("a", {
                      href: a.url,
                      children: a.fileName,
                    });
                  }
                },
                [d.XD.HYPERLINK]: (e, l) => {
                  var t;
                  let i =
                    (null == (t = o().first(e.content)) ? void 0 : t.value) ||
                    "";
                  if (
                    !(
                      ["EMBED", "EMBEDDED"].includes(i) &&
                      (e.data.uri.includes("youtube.com") ||
                        e.data.uri.includes("youtu.be"))
                    )
                  )
                    return (0, n.jsx)("a", { href: e.data.uri, children: l });
                  {
                    let l = (0, m.C)(e.data.uri);
                    return (0, n.jsx)(u.A, { src: l });
                  }
                },
                [d.XD.ASSET_HYPERLINK]: (e, l) => {
                  if ((0, h.$g)(e)) {
                    var t;
                    let i = e.data.target,
                      r = null == i || null == (t = i.fields) ? void 0 : t.file;
                    return (0, n.jsx)("a", {
                      href: b(null == r ? void 0 : r.url),
                      children: l,
                    });
                  }
                  return (0, n.jsxs)("span", {
                    children: [
                      "type: ",
                      e.nodeType,
                      ", id: ",
                      e.data.target.sys.id,
                      ",",
                    ],
                  });
                },
                [d.nA.EMBEDDED_ENTRY]: (e, t) => {
                  if ((0, h.IV)(e)) {
                    let t = e.data.target;
                    if ((0, v.na_)(t))
                      return l
                        ? (0, n.jsx)("div", {
                            className: "mb-16",
                            children: (0, n.jsx)(y.A, { survey: t.fields }),
                          })
                        : (0, n.jsxs)("p", {
                            children: [
                              "Please",
                              " ",
                              (0, n.jsx)("a", {
                                onClick: () => (0, x.d4)(window.location.href),
                                href: "/login",
                                children: "sign in",
                              }),
                              " ",
                              "to view this survey.",
                            ],
                          });
                    if ((0, v.kUt)(t))
                      return t.fields.html
                        ? (0, n.jsx)("span", {
                            dangerouslySetInnerHTML: { __html: t.fields.html },
                          })
                        : (console.warn(
                            "html unexpectedly empty! target =",
                            JSON.stringify(t),
                          ),
                          (0, n.jsx)(n.Fragment, {}));
                    if ((0, v.Fws)(t)) {
                      let e = t.fields;
                      return (0, n.jsx)(p.A, { gallery: e });
                    }
                  }
                  return (0, n.jsx)(n.Fragment, {});
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
      t.d(l, { C: () => r });
      var i = t(80707),
        n = t.n(i);
      function r(e) {
        if (e.includes("embed")) return e;
        if (e.includes("vimeo"))
          if (e.includes("player")) return e;
          else {
            let l = e.split("/");
            return "https://player.vimeo.com/video/" + n().last(l);
          }
        let l = e.split("/");
        return "https://www.youtube.com/embed/" + n().last(l);
      }
    },
  },
]);
