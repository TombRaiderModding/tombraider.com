"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [790],
  {
    24570: function (e, l, i) {
      i.a(e, async function (e, t) {
        try {
          var n = i(97458),
            r = i(52983),
            s = i(99288),
            a = i(4290),
            d = i(68956),
            o = i.n(d);
          (i(96193), i(35804), i(75090));
          var u = i(14790),
            c = e([u]);
          ((u = (c.then ? (await c)() : c)[0]),
            (l.Z = (e) => {
              let { gallery: l } = e,
                { items: i, showCaptions: t } = l,
                d = (0, r.useRef)([]),
                c = (0, r.useRef)([]);
              (0, r.useEffect)(() => {
                ((d.current = d.current.slice(
                  0,
                  null == i ? void 0 : i.length,
                )),
                  (c.current = c.current.slice(
                    0,
                    null == i ? void 0 : i.length,
                  )));
              }, [i]);
              let stopAllVideos = () => {
                (d.current.forEach((e) => {
                  e && (e.pause(), (e.currentTime = 0));
                }),
                  c.current.forEach((e) => {
                    if (e) {
                      var l;
                      null === (l = e.contentWindow) ||
                        void 0 === l ||
                        l.postMessage(
                          '{"event":"command","func":"stopVideo","args":""}',
                          "*",
                        );
                    }
                  }));
              };
              return (0, n.jsx)(s.tq, {
                modules: [a.W_, a.tl],
                spaceBetween: 0,
                slidesPerView: 1,
                loop: !0,
                navigation: !0,
                pagination: { clickable: !0 },
                className: "article-media-gallery w-full",
                onSlideChange: () => stopAllVideos(),
                children:
                  null == i
                    ? void 0
                    : i.map((e, l) => {
                        var i, r, a, f, v, m, h, y, p, x;
                        if (!e) return null;
                        let g = !!e.fields.youTubeLink,
                          w =
                            !g &&
                            (null === (r = e.fields.media) || void 0 === r
                              ? void 0
                              : null === (i = r.fields.file) || void 0 === i
                                ? void 0
                                : i.contentType.startsWith("video/"));
                        return (0, n.jsxs)(
                          s.o5,
                          {
                            children: [
                              (0, n.jsx)("div", {
                                className:
                                  "relative aspect-video w-full bg-black",
                                children:
                                  g && e.fields.youTubeLink
                                    ? (0, n.jsx)("iframe", {
                                        ref: (e) => (c.current[l] = e),
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
                                      ? (0, n.jsxs)("video", {
                                          ref: (e) => (d.current[l] = e),
                                          controls: !0,
                                          poster: (0, u.Wx)(
                                            null === (f = e.fields.media) ||
                                              void 0 === f
                                              ? void 0
                                              : null === (a = f.fields.file) ||
                                                  void 0 === a
                                                ? void 0
                                                : a.url,
                                          ),
                                          className:
                                            "absolute inset-0 h-full w-full object-cover",
                                          children: [
                                            (0, n.jsx)("source", {
                                              src: (0, u.Wx)(
                                                null === (m = e.fields.media) ||
                                                  void 0 === m
                                                  ? void 0
                                                  : null ===
                                                        (v = m.fields.file) ||
                                                      void 0 === v
                                                    ? void 0
                                                    : v.url,
                                              ),
                                              type:
                                                null === (y = e.fields.media) ||
                                                void 0 === y
                                                  ? void 0
                                                  : null ===
                                                        (h = y.fields.file) ||
                                                      void 0 === h
                                                    ? void 0
                                                    : h.contentType,
                                            }),
                                            "Your browser does not support the video tag.",
                                          ],
                                        })
                                      : (0, n.jsx)(o(), {
                                          src:
                                            (0, u.Wx)(
                                              null === (x = e.fields.media) ||
                                                void 0 === x
                                                ? void 0
                                                : null ===
                                                      (p = x.fields.file) ||
                                                    void 0 === p
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
                              t &&
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
              });
            }),
            t());
        } catch (e) {
          t(e);
        }
      });
    },
    38724: function (e, l, i) {
      i.d(l, {
        Z: function () {
          return IFrameContainer;
        },
      });
      var t = i(97458);
      function IFrameContainer(e) {
        let { src: l } = e;
        return (0, t.jsx)("iframe", {
          src: l,
          title: "Embedded Youtube",
          className: "mb-8 aspect-[16/9] h-full w-full",
          allowFullScreen: !0,
        });
      }
    },
    77113: function (e, l, i) {
      i.d(l, {
        Z: function () {
          return Link;
        },
      });
      var t = i(97458);
      function Link(e) {
        let { defaultUnderlined: l, bold: i, ...n } = e;
        return (0, t.jsx)("a", {
          className: ""
            .concat(l ? "underline hover:no-underline" : "hover:underline", " ")
            .concat(i && "font-bold"),
          ...n,
          children: e.children,
        });
      }
    },
    60380: function (e, l, i) {
      i.d(l, {
        Z: function () {
          return SurveyAnswer;
        },
      });
      var t = i(97458);
      function SurveyAnswer(e) {
        let { question: l, answer: i, onAnswerChange: n } = e;
        return (0, t.jsxs)("div", {
          className: "mb-6 flex items-center",
          children: [
            (0, t.jsx)("input", {
              id: ""
                .concat(l.fields.telemetryId, "-")
                .concat(i.fields.telemetryId, "-")
                .concat(i.fields.text),
              type: "radio",
              value: i.fields.telemetryId,
              name: "question-".concat(l.fields.telemetryId),
              className:
                "text-blue-600 dark:focus:ring-blue-600 h-4 w-4 border-gray-300 bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800",
              onChange: n,
            }),
            (0, t.jsx)("label", {
              htmlFor: ""
                .concat(l.fields.telemetryId, "-")
                .concat(i.fields.telemetryId, "-")
                .concat(i.fields.text),
              className: "ms-2 text-sm font-medium text-black",
              children: i.fields.text,
            }),
          ],
        });
      }
    },
    98245: function (e, l, i) {
      i.a(e, async function (e, t) {
        try {
          i.d(l, {
            Z: function () {
              return SurveyComponent;
            },
          });
          var n = i(97458),
            r = i(57600),
            s = i(24148),
            a = i(52983),
            d = i(42897),
            o = i(14322),
            u = i(16424),
            c = i(20102),
            f = i(68956),
            v = i.n(f),
            m = i(77113),
            h = e([r, s, c]);
          function SurveyComponent(e) {
            var l;
            let { survey: i } = e,
              t = (0, a.useMemo)(
                () =>
                  i.questions.map((e) => ({
                    questionTelemetryId: e.fields.telemetryId,
                    answerTelemetryId: null,
                  })),
                [i],
              ),
              f = (0, o.useRouter)(),
              { addAlert: h } = (0, u.Z)(),
              [y, p] = (0, a.useState)([...t]),
              [x, g] = (0, a.useState)(i.questions.map(() => null)),
              [w, j] = (0, a.useState)(null),
              [b, I] = (0, a.useState)(!1),
              {
                addCompletedSurvey: N,
                completedSurveys: E,
                emailData: S,
                resendVerification: A,
                unlockAvatar: T,
                rewards: C,
              } = (0, c.S)(),
              k = (0, a.useMemo)(
                () =>
                  !i.requiresVerifiedAccount ||
                  (null == S ? void 0 : S.hasConfirmedEmail),
                [i, S],
              ),
              L = (0, a.useMemo)(() => E.includes(i.telemetryId), [E]),
              F = (0, a.useMemo)(() => {
                if (C.allAvatars && i) {
                  var e;
                  return null !==
                    (e = C.allAvatars.find(
                      (e) =>
                        e.friendlyId &&
                        e.friendlyId === i.unlockAvatarFriendlyId,
                    )) && void 0 !== e
                    ? e
                    : null;
                }
                return null;
              }, [C, i]),
              handleAnswerChange = (e, l) => {
                p((i) =>
                  i.map((i) =>
                    i.questionTelemetryId === e
                      ? { ...i, answerTelemetryId: l }
                      : i,
                  ),
                );
              },
              validateAnswers = () => {
                let e = !0,
                  l = [...x];
                return (
                  y.forEach((i, t) => {
                    i.answerTelemetryId
                      ? (l[t] = null)
                      : ((l[t] = "Please select an answer."), (e = !1));
                  }),
                  g(l),
                  j(
                    l.length > 0
                      ? "Please complete all questions to submit this survey."
                      : w,
                  ),
                  e
                );
              },
              submitSurvey = async () => {
                if (validateAnswers()) {
                  I(!0);
                  try {
                    let l = await (0, s.Kd)({
                      surveyTelemetryId: i.telemetryId,
                      questionAnswers: y.map((e) => ({
                        questionTelemetryId: e.questionTelemetryId,
                        answerTelemetryId: e.answerTelemetryId,
                      })),
                    });
                    if (l.error) j(l.error.errorMessage);
                    else {
                      if ((N(i.telemetryId), F)) {
                        var e;
                        T(null !== (e = F.friendlyId) && void 0 !== e ? e : "");
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
                  I(!1);
                }
              };
            return (0, n.jsxs)("div", {
              className: "relative max-w-3xl",
              children: [
                (0, n.jsx)("h2", {
                  className: "mb-8 text-4xl text-black",
                  children: i.title,
                }),
                k
                  ? L
                    ? (0, n.jsx)("div", {
                        children: "Thank you for participating in this survey!",
                      })
                    : (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)("div", {
                            className: "max-w-2xl",
                            children: i.description,
                          }),
                          F &&
                            (0, n.jsxs)("div", {
                              className:
                                "flex flex-col gap-x-4 gap-y-2 pb-2 pt-6 sm:flex-row sm:items-center sm:gap-y-0",
                              children: [
                                (0, n.jsx)("div", {
                                  className: "relative h-16 w-16",
                                  children: (0, n.jsx)(v(), {
                                    alt: "avatar reward",
                                    className: "rounded-full object-cover",
                                    src:
                                      null !== (l = F.imageUrl) && void 0 !== l
                                        ? l
                                        : "",
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
                            children: i.questions.map((e, l) =>
                              (0, n.jsx)(
                                r.Z,
                                {
                                  selectedAnswer: y[l],
                                  error: x[l],
                                  question: e,
                                  onAnswerChange: handleAnswerChange,
                                },
                                null == e ? void 0 : e.fields.telemetryId,
                              ),
                            ),
                          }),
                          (0, n.jsx)("div", {
                            className: "",
                            children: (0, n.jsx)(d.Z, {
                              loading: b,
                              variant: "dark",
                              onClick: submitSurvey,
                              children: "Complete Survey",
                            }),
                          }),
                          w &&
                            (0, n.jsx)("p", {
                              className: "pt-2 text-red-500",
                              children: w,
                            }),
                        ],
                      })
                  : (0, n.jsxs)("div", {
                      children: [
                        "Please",
                        " ",
                        (0, n.jsx)(m.Z, {
                          onClick: A,
                          href: "javascript:void(0);",
                          children: "verify",
                        }),
                        " ",
                        "your email to access this survey.",
                      ],
                    }),
              ],
            });
          }
          (([r, s, c] = h.then ? (await h)() : h), t());
        } catch (e) {
          t(e);
        }
      });
    },
    57600: function (e, l, i) {
      i.a(e, async function (e, t) {
        try {
          i.d(l, {
            Z: function () {
              return SurveyQuestion;
            },
          });
          var n = i(97458),
            r = i(60380),
            s = i(68956),
            a = i.n(s),
            d = i(14790),
            o = e([d]);
          function SurveyQuestion(e) {
            var l, i, t, s, o, u, c, f, v;
            let { question: m, onAnswerChange: h, error: y } = e;
            return (0, n.jsxs)("div", {
              className: "relative py-4",
              children: [
                (0, n.jsx)("div", {
                  className: "pb-4 font-bold",
                  children: m.fields.questionText,
                }),
                m.fields.image &&
                  (0, n.jsx)("div", {
                    className: "relative mb-6 h-auto w-full",
                    children: (0, n.jsx)(a(), {
                      layout: "responsive",
                      width:
                        null === (i = m.fields.image.fields.file) ||
                        void 0 === i
                          ? void 0
                          : null === (l = i.details.image) || void 0 === l
                            ? void 0
                            : l.width,
                      height:
                        null === (s = m.fields.image.fields.file) ||
                        void 0 === s
                          ? void 0
                          : null === (t = s.details.image) || void 0 === t
                            ? void 0
                            : t.height,
                      src:
                        null !==
                          (f = (0, d.Wx)(
                            null === (u = m.fields.image) || void 0 === u
                              ? void 0
                              : null === (o = u.fields.file) || void 0 === o
                                ? void 0
                                : o.url,
                          )) && void 0 !== f
                          ? f
                          : "",
                      alt:
                        null !==
                          (v =
                            null === (c = m.fields.image) || void 0 === c
                              ? void 0
                              : c.fields.description) && void 0 !== v
                          ? v
                          : "",
                    }),
                  }),
                m.fields.answers.map((e) =>
                  (0, n.jsx)(
                    r.Z,
                    {
                      answer: e,
                      question: m,
                      onAnswerChange: () =>
                        h(m.fields.telemetryId, e.fields.telemetryId),
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
          ((d = (o.then ? (await o)() : o)[0]), t());
        } catch (e) {
          t(e);
        }
      });
    },
    87389: function (e, l, i) {
      i.d(l, {
        M9: function () {
          return nodeIsAssetHyperlink;
        },
        Nn: function () {
          return isImageAssetFile;
        },
        Wl: function () {
          return nodeIsBlockEmbeddedEntry;
        },
      });
      var t = i(16843),
        n = i(47025);
      function nodeIsAssetHyperlink(e) {
        return e.nodeType === t.INLINES.ASSET_HYPERLINK;
      }
      function nodeIsBlockEmbeddedEntry(e) {
        return e.nodeType === t.BLOCKS.EMBEDDED_ENTRY;
      }
      function isImageAssetFile(e) {
        let l = n.parse(e.url);
        return [".jpg", ".png", ".webp", ".gif", ".avif"].includes(l.ext);
      }
    },
    14790: function (e, l, i) {
      i.a(e, async function (e, t) {
        try {
          i.d(l, {
            Uj: function () {
              return galleryEntryToGalleryImage;
            },
            Wx: function () {
              return assetFileUrlToHttps;
            },
            m0: function () {
              return articleRenderOptions;
            },
          });
          var n = i(97458),
            r = i(68956),
            s = i.n(r),
            a = i(16843),
            d = i(38724),
            o = i(39378),
            u = i.n(o);
          i(52983);
          var c = i(50321),
            f = i(87389),
            v = i(96061),
            m = i(98245),
            h = i(24570),
            y = i(22668),
            p = e([v, m, h]);
          [v, m, h] = p.then ? (await p)() : p;
          let assetFileUrlToHttps = (e) => (e ? "https:".concat(e) : ""),
            galleryEntryToGalleryImage = function (e, l) {
              var i, t, n, r, s, a, d, o;
              let u =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2],
                c =
                  !u &&
                  (null == e
                    ? void 0
                    : null === (t = e.fields.videoThumbnail) || void 0 === t
                      ? void 0
                      : null === (i = t.fields.file) || void 0 === i
                        ? void 0
                        : i.url) !== void 0 &&
                  (null == e ? void 0 : e.fields.videoUrl) !== void 0,
                f = assetFileUrlToHttps(
                  c
                    ? null == e
                      ? void 0
                      : null === (r = e.fields.videoThumbnail) || void 0 === r
                        ? void 0
                        : null === (n = r.fields.file) || void 0 === n
                          ? void 0
                          : n.url
                    : null == e
                      ? void 0
                      : null === (a = e.fields.image) || void 0 === a
                        ? void 0
                        : null === (s = a.fields.file) || void 0 === s
                          ? void 0
                          : s.url,
                );
              return {
                alt:
                  null !==
                    (o =
                      null == e
                        ? void 0
                        : null === (d = e.fields.image) || void 0 === d
                          ? void 0
                          : d.fields.description) && void 0 !== o
                    ? o
                    : "",
                url: f,
                isVideo: c,
                id: (null == e ? void 0 : e.sys.id)
                  ? "".concat(e.sys.id, "-").concat(l)
                  : l,
              };
            },
            createSpanFromMatches = function (e, l) {
              let i =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                t = l.split("".concat(e[0], "[").concat(e[2], "]"));
              return Array.from(new Set(t)).map((l) =>
                "" === l
                  ? (0, n.jsx)("span", {
                      ...i,
                      style: { color: "".concat(e[2]) },
                      children: e[1],
                    })
                  : l,
              );
            },
            addColour = function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [];
              return Array.isArray(e)
                ? e.flatMap((e) => {
                    if ("string" == typeof e) {
                      let l = e.match(/\((.+)\)(?=\[(#\w+)])/);
                      if (l) return createSpanFromMatches(l, e);
                    }
                    return e;
                  })
                : addColour([e]);
            };
          function articleRenderOptions(e, l) {
            return {
              renderNode: {
                [a.BLOCKS.HEADING_1]: (e, l) =>
                  (0, n.jsx)("h1", { children: addColour(l) }),
                [a.BLOCKS.HEADING_2]: (e, l) =>
                  (0, n.jsx)("h2", { children: addColour(l) }),
                [a.BLOCKS.HEADING_3]: (e, l) =>
                  (0, n.jsx)("h3", { children: addColour(l) }),
                [a.BLOCKS.HEADING_4]: (e, l) =>
                  (0, n.jsx)("h4", { children: addColour(l) }),
                [a.BLOCKS.HEADING_5]: (e, l) =>
                  (0, n.jsx)("h5", { children: addColour(l) }),
                [a.BLOCKS.HEADING_6]: (e, l) =>
                  (0, n.jsx)("h6", { children: addColour(l) }),
                [a.BLOCKS.PARAGRAPH]: (e, l) =>
                  (0, n.jsx)("p", { children: addColour(l) }),
                [a.BLOCKS.EMBEDDED_ASSET]: (l) => {
                  var i;
                  if (e) return (0, n.jsx)(n.Fragment, {});
                  let t = l.data.target;
                  if (
                    "string" !=
                    typeof (null === (i = t.fields.file) || void 0 === i
                      ? void 0
                      : i.url)
                  )
                    return (0, n.jsx)(n.Fragment, {});
                  let r =
                    t.fields.description ||
                    t.fields.title ||
                    t.fields.file.fileName;
                  "string" != typeof r && (r = "");
                  let a = t.fields.file;
                  if (a) {
                    if ((0, f.Nn)(a)) {
                      let { width: e = 0, height: l = 0 } = a.details.image;
                      return (0, n.jsx)("div", {
                        className: "relative max-w-full",
                        children: (0, n.jsx)(s(), {
                          className: "mb-8 object-contain",
                          src: assetFileUrlToHttps(t.fields.file.url),
                          alt: r,
                          width: e,
                          height: l,
                        }),
                      });
                    }
                    return (0, n.jsx)("a", {
                      href: a.url,
                      children: a.fileName,
                    });
                  }
                },
                [a.INLINES.HYPERLINK]: (e, l) => {
                  var i;
                  let t =
                    (null === (i = u().first(e.content)) || void 0 === i
                      ? void 0
                      : i.value) || "";
                  if (
                    !(
                      ["EMBED", "EMBEDDED"].includes(t) &&
                      (e.data.uri.includes("youtube.com") ||
                        e.data.uri.includes("youtu.be"))
                    )
                  )
                    return (0, n.jsx)("a", { href: e.data.uri, children: l });
                  {
                    let l = (0, c.u)(e.data.uri);
                    return (0, n.jsx)(d.Z, { src: l });
                  }
                },
                [a.INLINES.ASSET_HYPERLINK]: (e, l) => {
                  if ((0, f.M9)(e)) {
                    var i;
                    let t = e.data.target,
                      r =
                        null == t
                          ? void 0
                          : null === (i = t.fields) || void 0 === i
                            ? void 0
                            : i.file;
                    return (0, n.jsx)("a", {
                      href: assetFileUrlToHttps(null == r ? void 0 : r.url),
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
                [a.BLOCKS.EMBEDDED_ENTRY]: (e, i) => {
                  if ((0, f.Wl)(e)) {
                    let i = e.data.target;
                    if ((0, v.hfp)(i))
                      return l
                        ? (0, n.jsx)("div", {
                            className: "mb-16",
                            children: (0, n.jsx)(m.Z, { survey: i.fields }),
                          })
                        : (0, n.jsxs)("p", {
                            children: [
                              "Please",
                              " ",
                              (0, n.jsx)("a", {
                                onClick: () => (0, y.OR)(window.location.href),
                                href: "/login",
                                children: "sign in",
                              }),
                              " ",
                              "to view this survey.",
                            ],
                          });
                    if ((0, v.LIU)(i))
                      return i.fields.html
                        ? (0, n.jsx)("span", {
                            dangerouslySetInnerHTML: { __html: i.fields.html },
                          })
                        : (console.warn(
                            "html unexpectedly empty! target =",
                            JSON.stringify(i),
                          ),
                          (0, n.jsx)(n.Fragment, {}));
                    if ((0, v.z0K)(i)) {
                      let e = i.fields;
                      return (0, n.jsx)(h.Z, { gallery: e });
                    }
                  }
                  return (0, n.jsx)(n.Fragment, {});
                },
              },
            };
          }
          t();
        } catch (e) {
          t(e);
        }
      });
    },
    50321: function (e, l, i) {
      i.d(l, {
        u: function () {
          return convertToEmbedLink;
        },
      });
      var t = i(39378),
        n = i.n(t);
      function convertToEmbedLink(e) {
        if (e.includes("embed")) return e;
        if (e.includes("vimeo")) {
          if (e.includes("player")) return e;
          {
            let l = e.split("/"),
              i = n().last(l);
            return "https://player.vimeo.com/video/" + i;
          }
        }
        let l = e.split("/"),
          i = n().last(l);
        return "https://www.youtube.com/embed/" + i;
      }
    },
  },
]);
