"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2642],
  {
    11862: (e, t, l) => {
      l.d(t, { A: () => i });
      var s = l(2183);
      let i = (0, l(36439).memo)(function ({ html: e }) {
        return (0, s.jsx)("span", { dangerouslySetInnerHTML: { __html: e } });
      });
    },
    31382: (e, t, l) => {
      l.a(e, async (e, s) => {
        try {
          l.d(t, { A: () => y });
          var i = l(2183),
            r = l(64105),
            n = l(83737),
            a = l(36439),
            d = l(64171),
            c = l(31153),
            u = l(23988),
            o = l(9751),
            f = l(15013),
            m = l.n(f),
            h = e([r, n, o]);
          function y({ survey: e }) {
            let t = (0, a.useMemo)(
                () =>
                  e.questions.map((e) => ({
                    questionTelemetryId: e.fields.telemetryId,
                    answerTelemetryId: null,
                  })),
                [e],
              ),
              l = (0, c.useRouter)(),
              { addAlert: s } = (0, u.Z)(),
              [f, h] = (0, a.useState)([...t]),
              [p, x] = (0, a.useState)(e.questions.map(() => null)),
              [g, v] = (0, a.useState)(null),
              [j, w] = (0, a.useState)(!1),
              {
                addCompletedSurvey: b,
                completedSurveys: A,
                emailData: N,
                resendVerification: I,
                unlockAvatar: E,
                rewards: T,
              } = (0, o.u)(),
              D = (0, a.useMemo)(
                () => !e.requiresVerifiedAccount || N?.hasConfirmedEmail,
                [e, N],
              ),
              _ = (0, a.useMemo)(() => A.includes(e.telemetryId), [A]),
              k = (0, a.useMemo)(
                () =>
                  T.allAvatars && e
                    ? (T.allAvatars.find(
                        (t) =>
                          t.friendlyId &&
                          t.friendlyId === e.unlockAvatarFriendlyId,
                      ) ?? null)
                    : null,
                [T, e],
              ),
              S = (e, t) => {
                h((l) =>
                  l.map((l) =>
                    l.questionTelemetryId === e
                      ? { ...l, answerTelemetryId: t }
                      : l,
                  ),
                );
              },
              $ = async () => {
                let t, i;
                if (
                  ((t = !0),
                  (i = [...p]),
                  f.forEach((e, l) => {
                    e.answerTelemetryId
                      ? (i[l] = null)
                      : ((i[l] = "Please select an answer."), (t = !1));
                  }),
                  x(i),
                  v(
                    i.length > 0
                      ? "Please complete all questions to submit this survey."
                      : g,
                  ),
                  t)
                ) {
                  w(!0);
                  try {
                    let t = await (0, n.Q7)({
                      surveyTelemetryId: e.telemetryId,
                      questionAnswers: f.map((e) => ({
                        questionTelemetryId: e.questionTelemetryId,
                        answerTelemetryId: e.answerTelemetryId,
                      })),
                    });
                    t.error
                      ? v(t.error.errorMessage)
                      : (b(e.telemetryId),
                        k && E(k.friendlyId ?? ""),
                        s({
                          title: "Survey Answers Submitted",
                          children: "Your survey answers have been submitted!",
                        }),
                        l.pathname.includes("/account/surveys") &&
                          l.replace("/account/surveys"));
                  } catch {
                    v("An error occurred submitting your answers.");
                  }
                  w(!1);
                }
              };
            return (0, i.jsxs)("div", {
              className: "relative max-w-3xl",
              children: [
                (0, i.jsx)("h2", {
                  className: "mb-8 text-4xl text-black",
                  children: e.title,
                }),
                D
                  ? _
                    ? (0, i.jsx)("div", {
                        children: "Thank you for participating in this survey!",
                      })
                    : (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)("div", {
                            className: "max-w-2xl",
                            children: e.description,
                          }),
                          k &&
                            (0, i.jsxs)("div", {
                              className:
                                "flex flex-col gap-x-4 gap-y-2 pb-2 pt-6 sm:flex-row sm:items-center sm:gap-y-0",
                              children: [
                                (0, i.jsx)("div", {
                                  className: "relative h-16 w-16",
                                  children: (0, i.jsx)(m(), {
                                    alt: "avatar reward",
                                    className: "rounded-full object-cover",
                                    src: k.imageUrl ?? "",
                                    fill: !0,
                                  }),
                                }),
                                (0, i.jsx)("div", {
                                  children:
                                    "You will unlock this avatar for completing the survey.",
                                }),
                              ],
                            }),
                          (0, i.jsx)("div", {
                            className: "pb-8",
                            children: e.questions.map((e, t) =>
                              (0, i.jsx)(
                                r.A,
                                {
                                  selectedAnswer: f[t],
                                  error: p[t],
                                  question: e,
                                  onAnswerChange: S,
                                },
                                e?.fields.telemetryId,
                              ),
                            ),
                          }),
                          (0, i.jsx)("div", {
                            className: "",
                            children: (0, i.jsx)(d.A, {
                              loading: j,
                              variant: "dark",
                              onClick: $,
                              children: "Complete Survey",
                            }),
                          }),
                          g &&
                            (0, i.jsx)("p", {
                              className: "pt-2 text-red-500",
                              children: g,
                            }),
                        ],
                      })
                  : (0, i.jsxs)("div", {
                      children: [
                        "Please",
                        " ",
                        (0, i.jsx)("button", {
                          className: "hover:underline",
                          onClick: I,
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
          (([r, n, o] = h.then ? (await h)() : h), s());
        } catch (e) {
          s(e);
        }
      });
    },
    52475: (e, t, l) => {
      l.d(t, { A: () => i });
      var s = l(2183);
      function i({ question: e, answer: t, onAnswerChange: l }) {
        return (0, s.jsxs)("div", {
          className: "mb-6 flex items-center",
          children: [
            (0, s.jsx)("input", {
              id: `${e.fields.telemetryId}-${t.fields.telemetryId}-${t.fields.text}`,
              type: "radio",
              value: t.fields.telemetryId,
              name: `question-${e.fields.telemetryId}`,
              className:
                "text-blue-600 dark:focus:ring-blue-600 h-4 w-4 border-gray-300 bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700",
              onChange: l,
            }),
            (0, s.jsx)("label", {
              htmlFor: `${e.fields.telemetryId}-${t.fields.telemetryId}-${t.fields.text}`,
              className: "ms-2 text-sm font-medium text-black",
              children: t.fields.text,
            }),
          ],
        });
      }
    },
    64105: (e, t, l) => {
      l.a(e, async (e, s) => {
        try {
          l.d(t, { A: () => u });
          var i = l(2183),
            r = l(52475),
            n = l(15013),
            a = l.n(n),
            d = l(92642),
            c = e([d]);
          function u({ question: e, onAnswerChange: t, error: l }) {
            return (0, i.jsxs)("div", {
              className: "relative py-4",
              children: [
                (0, i.jsx)("div", {
                  className: "pb-4 font-bold",
                  children: e.fields.questionText,
                }),
                e.fields.image &&
                  (0, i.jsx)("div", {
                    className: "relative mb-6 h-auto w-full",
                    children: (0, i.jsx)(a(), {
                      width: e.fields.image.fields.file?.details.image?.width,
                      height: e.fields.image.fields.file?.details.image?.height,
                      src: (0, d._c)(e.fields.image?.fields.file?.url) ?? "",
                      alt: e.fields.image?.fields.description ?? "",
                      sizes: "100vw",
                      className: "h-auto w-full",
                    }),
                  }),
                e.fields.answers.map((l) =>
                  (0, i.jsx)(
                    r.A,
                    {
                      answer: l,
                      question: e,
                      onAnswerChange: () =>
                        t(e.fields.telemetryId, l.fields.telemetryId),
                    },
                    l.fields.telemetryId,
                  ),
                ),
                l &&
                  (0, i.jsx)("p", {
                    className: "text-red-500",
                    children: "Please provide an answer to this question.",
                  }),
              ],
            });
          }
          ((d = (c.then ? (await c)() : c)[0]), s());
        } catch (e) {
          s(e);
        }
      });
    },
    71813: (e, t, l) => {
      l.a(e, async (e, s) => {
        try {
          l.d(t, { A: () => f });
          var i = l(2183),
            r = l(36439),
            n = l(94536),
            a = l(63308),
            d = l(15013),
            c = l.n(d);
          (l(65277), l(21325), l(7295));
          var u = l(92642),
            o = e([u]);
          u = (o.then ? (await o)() : o)[0];
          let f = ({ gallery: e }) => {
            let { items: t, showCaptions: l } = e,
              s = (0, r.useRef)([]),
              d = (0, r.useRef)([]);
            return (
              (0, r.useEffect)(() => {
                ((s.current = s.current.slice(0, t?.length)),
                  (d.current = d.current.slice(0, t?.length)));
              }, [t]),
              (0, i.jsx)(n.RC, {
                modules: [a.Vx, a.dK],
                spaceBetween: 0,
                slidesPerView: 1,
                loop: !0,
                navigation: !0,
                pagination: { clickable: !0 },
                className: "article-media-gallery w-full",
                onSlideChange: () =>
                  void (s.current.forEach((e) => {
                    e && (e.pause(), (e.currentTime = 0));
                  }),
                  d.current.forEach((e) => {
                    e &&
                      e.contentWindow?.postMessage(
                        '{"event":"command","func":"stopVideo","args":""}',
                        "*",
                      );
                  })),
                children: t?.map((e, t) => {
                  let r;
                  if (!e) return null;
                  let a = !!e.fields.youTubeLink,
                    o =
                      !a &&
                      e.fields.media?.fields.file?.contentType.startsWith(
                        "video/",
                      );
                  return (0, i.jsxs)(
                    n.qr,
                    {
                      children: [
                        (0, i.jsx)("div", {
                          className: "relative aspect-video w-full bg-black",
                          children:
                            a && e.fields.youTubeLink
                              ? (0, i.jsx)("iframe", {
                                  ref: (e) => {
                                    d.current[t] = e;
                                  },
                                  width: "100%",
                                  height: "100%",
                                  src: `https://www.youtube.com/embed/${(r = e.fields.youTubeLink.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/)) && 11 === r[2].length ? r[2] : ""}?enablejsapi=1`,
                                  allow:
                                    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                  allowFullScreen: !0,
                                  className: "absolute inset-0 h-full w-full",
                                })
                              : o
                                ? (0, i.jsxs)("video", {
                                    ref: (e) => {
                                      s.current[t] = e;
                                    },
                                    controls: !0,
                                    poster: (0, u._c)(
                                      e.fields.media?.fields.file?.url,
                                    ),
                                    className:
                                      "absolute inset-0 h-full w-full object-cover",
                                    children: [
                                      (0, i.jsx)("source", {
                                        src: (0, u._c)(
                                          e.fields.media?.fields.file?.url,
                                        ),
                                        type: e.fields.media?.fields.file
                                          ?.contentType,
                                      }),
                                      "Your browser does not support the video tag.",
                                    ],
                                  })
                                : (0, i.jsx)(c(), {
                                    src:
                                      (0, u._c)(
                                        e.fields.media?.fields.file?.url,
                                      ) || "",
                                    alt:
                                      e.fields.caption ||
                                      `Gallery image ${t + 1}`,
                                    fill: !0,
                                    className: "object-contain",
                                  }),
                        }),
                        l &&
                          e.fields.caption &&
                          (0, i.jsx)("div", {
                            className: "my-2 text-center text-gray-600",
                            children: e.fields.caption,
                          }),
                      ],
                    },
                    t,
                  );
                }),
              })
            );
          };
          s();
        } catch (e) {
          s(e);
        }
      });
    },
    72931: (e, t, l) => {
      l.d(t, { $g: () => r, AD: () => a, IV: () => n });
      var s = l(40235),
        i = l(38514);
      function r(e) {
        return e.nodeType === s.XD.ASSET_HYPERLINK;
      }
      function n(e) {
        return e.nodeType === s.nA.EMBEDDED_ENTRY;
      }
      function a(e) {
        return [".jpg", ".png", ".webp", ".gif", ".avif"].includes(
          i.parse(e.url).ext,
        );
      }
    },
    73309: (e, t, l) => {
      l.d(t, { C: () => r });
      var s = l(80707),
        i = l.n(s);
      function r(e) {
        if (e.includes("embed")) return e;
        if (e.includes("vimeo"))
          if (e.includes("player")) return e;
          else {
            let t = e.split("/");
            return "https://player.vimeo.com/video/" + i().last(t);
          }
        let t = e.split("/");
        return "https://www.youtube.com/embed/" + i().last(t);
      }
    },
    92642: (e, t, l) => {
      l.a(e, async (e, s) => {
        try {
          l.d(t, { Xx: () => b, _c: () => A, pO: () => N, sk: () => w });
          var i = l(2183),
            r = l(15013),
            n = l.n(r),
            a = l(40453),
            d = l(40235),
            c = l(99556),
            u = l(80707),
            o = l.n(u),
            f = l(36439),
            m = l(73309),
            h = l(72931),
            y = l(75109),
            p = l(31382),
            x = l(71813),
            g = l(11862),
            v = l(43948),
            j = e([y, p, x]);
          [y, p, x] = j.then ? (await j)() : j;
          let A = (e) => (e ? `https:${e}` : ""),
            N = (e, t, l = !1) => {
              let s =
                  !l &&
                  e?.fields.videoThumbnail?.fields.file?.url !== void 0 &&
                  e?.fields.videoUrl !== void 0,
                i = A(
                  s
                    ? e?.fields.videoThumbnail?.fields.file?.url
                    : e?.fields.image?.fields.file?.url,
                );
              return {
                alt: e?.fields.image?.fields.description ?? "",
                url: i,
                isVideo: s,
                id: e?.sys.id ? `${e.sys.id}-${t}` : t,
              };
            },
            I = (e = []) =>
              Array.isArray(e)
                ? e.flatMap((e) => {
                    if ("string" == typeof e) {
                      let t = e.match(/\((.+)\)(?=\[(#\w+)])/);
                      if (t)
                        return ((e, t, l = {}) =>
                          Array.from(new Set(t.split(`${e[0]}[${e[2]}]`))).map(
                            (t, s) =>
                              "" === t
                                ? (0, i.jsx)(
                                    "span",
                                    {
                                      ...l,
                                      style: { color: `${e[2]}` },
                                      children: e[1],
                                    },
                                    `highlight-${e[2]}-${s}`,
                                  )
                                : t,
                          ))(t, e);
                    }
                    return e;
                  })
                : I([e]);
          function w(e, t) {
            let l = [],
              s = [];
            for (let t of e.content)
              t.nodeType === d.nA.HEADING_2
                ? (s.length > 0 && l.push(s), (s = [t]))
                : s.push(t);
            return (
              s.length > 0 && l.push(s),
              l.map((l, s) => {
                let r = (0, a.i)({ ...e, content: l }, t);
                return l[0].nodeType === d.nA.HEADING_2
                  ? (0, i.jsx)("section", { children: r }, s)
                  : (0, i.jsx)(f.Fragment, { children: r }, s);
              })
            );
          }
          function b(e, t) {
            return {
              renderNode: {
                [d.nA.HEADING_1]: (e, t) =>
                  (0, i.jsx)("h1", { children: I(t) }),
                [d.nA.HEADING_2]: (e, t) =>
                  (0, i.jsx)("h2", { children: I(t) }),
                [d.nA.HEADING_3]: (e, t) =>
                  (0, i.jsx)("h3", { children: I(t) }),
                [d.nA.HEADING_4]: (e, t) =>
                  (0, i.jsx)("h4", { children: I(t) }),
                [d.nA.HEADING_5]: (e, t) =>
                  (0, i.jsx)("h5", { children: I(t) }),
                [d.nA.HEADING_6]: (e, t) =>
                  (0, i.jsx)("h6", { children: I(t) }),
                [d.nA.PARAGRAPH]: (e, t) => (0, i.jsx)("p", { children: I(t) }),
                [d.nA.EMBEDDED_ASSET]: (t) => {
                  if (e) return (0, i.jsx)(i.Fragment, {});
                  let l = t.data.target;
                  if ("string" != typeof l.fields.file?.url)
                    return (0, i.jsx)(i.Fragment, {});
                  let s =
                    l.fields.description ||
                    l.fields.title ||
                    l.fields.file.fileName;
                  "string" != typeof s && (s = "");
                  let r = l.fields.file;
                  if (r) {
                    if ((0, h.AD)(r)) {
                      let { width: e = 0, height: t = 0 } = r.details.image,
                        a =
                          "string" == typeof l.fields.description
                            ? l.fields.description
                            : "";
                      return (0, i.jsxs)("figure", {
                        className: "relative max-w-full",
                        children: [
                          (0, i.jsx)(n(), {
                            className: a
                              ? "object-contain"
                              : "mb-8 object-contain",
                            src: A(l.fields.file.url),
                            alt: s,
                            width: e,
                            height: t,
                          }),
                          a &&
                            (0, i.jsx)("figcaption", {
                              className: "mt-2 mb-8 text-sm text-gray-500",
                              children: a,
                            }),
                        ],
                      });
                    }
                    return (0, i.jsx)("a", {
                      href: r.url,
                      children: r.fileName,
                    });
                  }
                },
                [d.XD.HYPERLINK]: (e, t) => {
                  if (
                    !(
                      ["EMBED", "EMBEDDED"].includes(
                        o().first(e.content)?.value || "",
                      ) &&
                      (e.data.uri.includes("youtube.com") ||
                        e.data.uri.includes("youtu.be"))
                    )
                  )
                    return (0, i.jsx)("a", { href: e.data.uri, children: t });
                  {
                    let t = (0, m.C)(e.data.uri);
                    return (0, i.jsx)(c.A, { src: t });
                  }
                },
                [d.XD.ASSET_HYPERLINK]: (e, t) => {
                  if ((0, h.$g)(e)) {
                    let l = e.data.target,
                      s = l?.fields?.file;
                    return (0, i.jsx)("a", { href: A(s?.url), children: t });
                  }
                  return (0, i.jsxs)("span", {
                    children: [
                      "type: ",
                      e.nodeType,
                      ", id: ",
                      e.data.target.sys.id,
                      ",",
                    ],
                  });
                },
                [d.nA.EMBEDDED_ENTRY]: (e, l) => {
                  if ((0, h.IV)(e)) {
                    let l = e.data.target;
                    if ((0, y.na_)(l))
                      return t
                        ? (0, i.jsx)("div", {
                            className: "mb-16",
                            children: (0, i.jsx)(p.A, { survey: l.fields }),
                          })
                        : (0, i.jsxs)("p", {
                            children: [
                              "Please",
                              " ",
                              (0, i.jsx)("a", {
                                onClick: () => (0, v.d4)(window.location.href),
                                href: "/login",
                                children: "sign in",
                              }),
                              " ",
                              "to view this survey.",
                            ],
                          });
                    if ((0, y.kUt)(l))
                      return "string" == typeof l.fields.html && l.fields.html
                        ? (0, i.jsx)(g.A, { html: l.fields.html })
                        : (console.warn(
                            "html unexpectedly empty! target =",
                            JSON.stringify(l),
                          ),
                          (0, i.jsx)(i.Fragment, {}));
                    if ((0, y.Fws)(l)) {
                      let e = l.fields;
                      return (0, i.jsx)(x.A, { gallery: e });
                    }
                  }
                  return (0, i.jsx)(i.Fragment, {});
                },
              },
            };
          }
          s();
        } catch (e) {
          s(e);
        }
      });
    },
    99556: (e, t, l) => {
      l.d(t, { A: () => i });
      var s = l(2183);
      function i({ src: e }) {
        return (0, s.jsx)("iframe", {
          src: e,
          title: "Embedded Youtube",
          className: "mb-8 aspect-[16/9] h-full w-full",
          allowFullScreen: !0,
        });
      }
    },
  },
]);
