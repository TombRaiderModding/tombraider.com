(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2336],
  {
    18707: (e, s, a) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/404",
        function () {
          return a(87589);
        },
      ]);
    },
    87589: (e, s, a) => {
      "use strict";
      a.a(e, async (e, t) => {
        try {
          (a.r(s), a.d(s, { __N_SSG: () => d, default: () => g }));
          var l = a(2183),
            n = a(15711),
            r = a(95216),
            o = a(96006),
            c = a.n(o),
            i = a(18652),
            u = a(92446),
            f = e([r, u]);
          [r, u] = f.then ? (await f)() : f;
          var d = !0;
          function g(e) {
            var s, a;
            let {
                navItems: t,
                surveys: o,
                websiteSingleton: f,
                signUpBanner: d,
              } = e,
              g = (0, i.useRouter)(),
              m = (0, u._c)(
                null == (a = f.pageNotFound404Background) ||
                  null == (s = a.fields.file)
                  ? void 0
                  : s.url,
              );
            return (0, l.jsxs)("main", {
              style: { background: "url('".concat(m, "')") },
              className:
                "relative flex h-screen w-full items-center justify-center bg-cover",
              children: [
                (0, l.jsx)(r.Ay, { surveys: o, navItems: t, signUpBanner: d }),
                (0, l.jsxs)("div", {
                  className:
                    "relative flex h-[50%] w-full flex-col items-center justify-center gap-y-8 px-4",
                  children: [
                    (0, l.jsx)(c(), {
                      fill: !0,
                      className: "absolute px-4",
                      src: "/images/404.svg",
                      alt: "404 image",
                    }),
                    (0, l.jsx)(c(), {
                      fill: !0,
                      className: "absolute px-4",
                      src: "/images/404_stroke.svg",
                      alt: "404 image",
                    }),
                    (0, l.jsx)("p", {
                      className: "text-center text-3xl",
                      children:
                        "Uh-oh! The page you are looking for does not exist.",
                    }),
                    (0, l.jsx)(n.A, {
                      onClick: () => g.back(),
                      children: "Go Back",
                    }),
                  ],
                }),
                (0, l.jsx)("div", {
                  className: "absolute bottom-0 h-[40%] w-full",
                  children: (0, l.jsx)(c(), {
                    fill: !0,
                    className: "object-cover object-top",
                    alt: "Bottom foliage border",
                    src: "/images/01_02_Transition 3.svg",
                  }),
                }),
                (0, l.jsx)("div", {
                  className:
                    "pointer-events-none absolute top-1/2 z-10 h-1/2 w-full bg-gradient-to-b from-transparent to-[rgba(24,24,24,0.60)]",
                }),
              ],
            });
          }
          t();
        } catch (e) {
          t(e);
        }
      });
    },
  },
  (e) => {
    (e.O(0, [9950, 6006, 1433, 1329, 1175, 5216, 2446, 636, 6593, 8792], () =>
      e((e.s = 18707)),
    ),
      (_N_E = e.O()));
  },
]);
