(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2336],
  {
    3409: (e, s, a) => {
      "use strict";
      a.a(e, async (e, t) => {
        try {
          (a.r(s), a.d(s, { __N_SSG: () => g, default: () => m }));
          var l = a(2183),
            r = a(64171),
            n = a(49980),
            o = a(15013),
            c = a.n(o),
            i = a(31153),
            u = a(92642),
            f = e([n, u]);
          [n, u] = f.then ? (await f)() : f;
          var g = !0;
          function m({
            navItems: e,
            surveys: s,
            websiteSingleton: a,
            signUpBanner: t,
          }) {
            let o = (0, i.useRouter)(),
              f = (0, u._c)(a.pageNotFound404Background?.fields.file?.url);
            return (0, l.jsxs)("main", {
              style: { background: `url('${f}')` },
              className:
                "relative flex h-screen w-full items-center justify-center bg-cover",
              children: [
                (0, l.jsx)(n.Ay, { surveys: s, navItems: e, signUpBanner: t }),
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
                    (0, l.jsx)(r.A, {
                      onClick: () => o.back(),
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
    77302: (e, s, a) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/404",
        function () {
          return a(3409);
        },
      ]);
    },
  },
  (e) => {
    (e.O(0, [9950, 5013, 2696, 1329, 6342, 9980, 2642, 636, 6593, 8792], () =>
      e((e.s = 77302)),
    ),
      (_N_E = e.O()));
  },
]);
