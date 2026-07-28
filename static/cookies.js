(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8019],
  {
    4243: (e, s, t) => {
      "use strict";
      t.a(e, async (e, o) => {
        try {
          t.d(s, { OU: () => l, Om: () => h, Q0: () => d, _8: () => c });
          var i = t(92446),
            r = t(2371),
            a = e([i]);
          i = (a.then ? (await a)() : a)[0];
          let u = "".concat(r.W, "/#organization"),
            p = "".concat(r.W, "/#website"),
            m = "Tomb Raider",
            f = "https://en.wikipedia.org/wiki/Tomb_Raider";
          function n(e) {
            var s, t;
            let o = (0, i._c)(
              null == (t = e.footerLogo) || null == (s = t.fields.file)
                ? void 0
                : s.url,
            );
            return o ? { logo: { "@type": "ImageObject", url: o } } : {};
          }
          function c(e, s) {
            return {
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": u,
              name: m,
              url: r.W,
              ...n(e),
              sameAs: [
                ...s.map((e) => e.link),
                f,
                "https://www.wikidata.org/wiki/Q270503",
              ],
            };
          }
          function l() {
            return {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": p,
              name: m,
              url: r.W,
              publisher: { "@id": u },
            };
          }
          function d(e, s) {
            var t, o, a, c;
            let l = ""
                .concat(r.W, "/news/")
                .concat(null == (t = e.category) ? void 0 : t.fields.slug, "/")
                .concat(e.slug),
              d = (0, i._c)(
                null == (a = e.headerImage) || null == (o = a.fields.file)
                  ? void 0
                  : o.url,
              ),
              h = { "@type": "Organization", "@id": u, name: m, ...n(s) };
            return {
              "@context": "https://schema.org",
              "@type": "NewsArticle",
              headline: e.title,
              description: e.excerpt || e.socialMediaShareDescription,
              ...(d ? { image: [d] } : {}),
              datePublished: e.publishDate,
              dateModified: null != (c = e.sysUpdatedAt) ? c : e.publishDate,
              url: l,
              mainEntityOfPage: { "@type": "WebPage", "@id": l },
              author: h,
              publisher: h,
            };
          }
          function h(e) {
            var s, t, o, a, n, c, l, d;
            let h = ""
                .concat(r.W, "/products/")
                .concat(null == (s = e.category) ? void 0 : s.fields.slug, "/")
                .concat(e.slug),
              u = (0, i._c)(
                null !=
                  (d =
                    null == (o = e.titleLogo) || null == (t = o.fields.file)
                      ? void 0
                      : t.url)
                  ? d
                  : null == (l = e.galleryEntries) ||
                      null == (c = l[0]) ||
                      null == (n = c.fields.image) ||
                      null == (a = n.fields.file)
                    ? void 0
                    : a.url,
              );
            return {
              "@context": "https://schema.org",
              "@type": "VideoGame",
              name: e.title,
              url: h,
              ...(e.shortDescription
                ? { description: e.shortDescription }
                : {}),
              ...(u ? { image: u } : {}),
              ...(e.releaseDate ? { datePublished: e.releaseDate } : {}),
              ...(e.publisher
                ? { publisher: { "@type": "Organization", name: e.publisher } }
                : {}),
              ...(e.esrbRating
                ? { contentRating: "ESRB ".concat(e.esrbRating) }
                : {}),
              isPartOf: {
                "@type": "VideoGameSeries",
                name: "Tomb Raider",
                sameAs: f,
              },
            };
          }
          o();
        } catch (e) {
          o(e);
        }
      });
    },
    7226: (e, s, t) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/legal/cookies",
        function () {
          return t(71411);
        },
      ]);
    },
    7345: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => a });
      var o = t(2183),
        i = t(11677),
        r = t.n(i);
      let a = (e) => {
        let { href: s, children: t, className: i, ...a } = e;
        return "string" == typeof s && s.startsWith("http")
          ? (0, o.jsx)("a", {
              href: s,
              target: "_blank",
              rel: "noopener noreferrer",
              className: i,
              ...a,
              children: t,
            })
          : (0, o.jsx)(r(), { className: i, href: s, ...a, children: t });
      };
    },
    71411: (e, s, t) => {
      "use strict";
      t.a(e, async (e, o) => {
        try {
          (t.r(s), t.d(s, { __N_SSG: () => l, default: () => d }));
          var i = t(2183),
            r = t(75894),
            a = t(95216),
            n = t(91134),
            c = e([r, a]);
          [r, a] = c.then ? (await c)() : c;
          var l = !0;
          function d(e) {
            let {
              websiteSingleton: s,
              navItems: t,
              footerSocialLinks: o,
              surveys: c,
              signUpBanner: l,
            } = e;
            return (0, i.jsxs)("main", {
              className: "flex w-full flex-col items-center",
              children: [
                (0, i.jsx)(n.A, {
                  description:
                    "Learn how the official Tomb Raider website uses cookies to enhance your browsing experience. Review our full cookie policy and manage your preferences here.",
                }),
                (0, i.jsx)(a.Ay, { surveys: c, navItems: t, signUpBanner: l }),
                (0, i.jsxs)("div", {
                  className:
                    "mx-auto flex w-full grow flex-col gap-y-6 py-32 lg:mx-0 lg:max-w-xl 2xl:max-w-4xl",
                  children: [
                    (0, i.jsx)("h1", {
                      className: "",
                      children: "COOKIE NOTICE",
                    }),
                    (0, i.jsx)("p", {
                      className: "has-normal-p-font-size",
                      children: "Last Updated: June 6, 2023",
                    }),
                    (0, i.jsxs)("p", {
                      className: "has-normal-p-font-size",
                      children: [
                        'This Cookie Notice describes how Crystal Dynamics, Inc. ("',
                        (0, i.jsx)("strong", { children: "we" }),
                        '," "',
                        (0, i.jsx)("strong", { children: "our" }),
                        '," or "',
                        (0, i.jsx)("strong", { children: "us" }),
                        '") use cookies and similar technologies (collectively "',
                        (0, i.jsx)("strong", { children: "cookies" }),
                        '") to collect and store information when you visit our websites and/or use our services.\xa0 It supplements our Privacy Notice',
                        (0, i.jsx)("strong", { children: " " }),
                        "at",
                        " ",
                        (0, i.jsx)("a", {
                          href: "http://www.crystald.com/privacy",
                          children: "http://www.crystald.com/privacy",
                        }),
                        ".",
                      ],
                    }),
                    (0, i.jsx)("p", {
                      className: "has-h-2-font-size",
                      children: "1. ABOUT COOKIES",
                    }),
                    (0, i.jsxs)("p", {
                      className: "has-normal-p-font-size",
                      children: [
                        "a. ",
                        (0, i.jsx)("strong", { children: "Cookies" }),
                        " are small text files that (depending on your browser settings) websites and other online services deposit on your computer, mobile phone, tablet, or other device. These small text files are placed on your device to store data that can be recalled by a server in the domain that placed the cookie. Some cookies are placed by third parties (acting on our behalf). We use cookies and similar technologies to store and remember your preferences and settings, enable you to sign in, combat fraud, analyze how our services perform and fulfil the other purposes described below. Additionally, our applications use other unique identifiers, such as advertising IDs, for similar purposes. Similar technologies include web beacons, Java Scripts, entity tags, and HTML5 local storage. We use cookies that remain on your device only as long as your browser is active (session cookies), as well as cookies and similar technologies that remain on your device longer (persistent cookies).",
                      ],
                    }),
                    (0, i.jsxs)("p", {
                      className: "has-normal-p-font-size",
                      children: [
                        "b. ",
                        (0, i.jsx)("strong", {
                          children: "Similar technologies",
                        }),
                        " are technologies which enable tracking user behaviour.",
                      ],
                    }),
                    (0, i.jsxs)("ul", {
                      children: [
                        (0, i.jsx)("li", {
                          children:
                            'Web Beacons – Web beacons are small, transparent images that are embedded in web pages, applications, and emails that are sometimes called "clear gifs", "single pixel gifs", "page tags" or "web bugs". We use web beacons in marketing emails to track and to test the effectiveness of marketing activities, and to find out if an email has been opened and acted on.\xa0',
                        }),
                        (0, i.jsx)("li", {
                          children:
                            "JavaScript – JavaScript are code snippets embedded in various parts of websites and applications that facilitate a variety of operations including accelerating the refresh speed of certain functionality or monitoring usage of various online components.",
                        }),
                        (0, i.jsx)("li", {
                          children:
                            'Entity Tags – Entity Tags are HTTP code mechanisms that allow portions of websites to be stored or "cached" within your browser and validates these caches when the website is opened, accelerating website performance since the web server does not need to send a full response if the content has not changed.',
                        }),
                        (0, i.jsx)("li", {
                          children:
                            'HTML5 Local Storage – HTML5 local storage allows data from websites to be stored or "cached" within your browser to store and retrieve data in HTML5 pages when the website is revisited.',
                        }),
                      ],
                    }),
                    (0, i.jsx)("p", {
                      className: "has-h-2-font-size",
                      children: "2. OUR USE OF COOKIES",
                    }),
                    (0, i.jsx)("p", {
                      className: "has-normal-p-font-size",
                      children:
                        "We use cookies for several purposes, depending on which of our websites you visit or use, and how you choose to use our websites and services. These purposes include:",
                    }),
                    (0, i.jsxs)("p", {
                      children: [
                        "a) ",
                        (0, i.jsx)("strong", {
                          children: "Storing your preferences and settings",
                        }),
                        " – We use cookies to remember your preferences and settings. For example, cookies can remember your preferred language to enhance your experience on our website. Saving your preferences means you won't have to reset your preferences every time you visit our websites.",
                      ],
                    }),
                    (0, i.jsxs)("p", {
                      children: [
                        "b) ",
                        (0, i.jsx)("strong", {
                          children: "Sign-in and authentication",
                        }),
                        " – We use some cookies to authenticate you. These cookies allow you, among other things, to move from page to page within our websites without having to sign into an account (such as a user account) on each page. Should you wish, you can also save your account sign-in information so you don't have to sign in every time you come back to our websites.",
                      ],
                    }),
                    (0, i.jsxs)("p", {
                      children: [
                        "c) ",
                        (0, i.jsx)("strong", {
                          children: "Security, detection, and investigation ",
                        }),
                        "– We use cookies to process information that can help secure and protect our services, as well as to detect and investigate illegal activities, fraud and abuse.",
                      ],
                    }),
                    (0, i.jsxs)("p", {
                      children: [
                        "d) ",
                        (0, i.jsx)("strong", { children: "Social media " }),
                        "– Our websites and services may use social media cookies, including cookies that help you share content to your social media accounts.",
                      ],
                    }),
                    (0, i.jsxs)("p", {
                      children: [
                        "e) ",
                        (0, i.jsx)("strong", {
                          children: "Interest-based advertising",
                        }),
                        " – We may use cookies to collect data about your online activity and identify your interests so that we can provide advertising that is most relevant to you.",
                      ],
                    }),
                    (0, i.jsxs)("p", {
                      children: [
                        "f) ",
                        (0, i.jsx)("strong", { children: "Analytics" }),
                        " – We use cookies and other unique identifiers to gather usage and performance data. For example, we use cookies to count the number of unique visitors to our websites or create animated heatmap representations of your usage of our websites to understand how our websites are being used and where errors may be occurring. We also use cookies and other unique identifiers to match your data across our websites and games to understand the effectiveness of marketing campaigns.",
                      ],
                    }),
                    (0, i.jsxs)("p", {
                      children: [
                        "g) ",
                        (0, i.jsx)("strong", { children: "Performance" }),
                        " – We use cookies to understand and improve how our products perform. For example, we use cookies to gather data that helps with load balancing (this helps ensure that our websites remain up and running).",
                      ],
                    }),
                    (0, i.jsxs)("p", {
                      className: "has-h-2-font-size",
                      children: [
                        "3. COOKIES COMMONLY USED ON TOMBRAIDER.COM",
                        " ",
                      ],
                    }),
                    (0, i.jsx)("div", { className: "uc-embed" }),
                    (0, i.jsx)("p", {
                      className: "has-h-2-font-size",
                      children: "4. SALE OF PERSONAL DATA (CALIFORNIA ONLY)",
                    }),
                    (0, i.jsxs)("p", {
                      className: "has-normal-p-font-size",
                      children: [
                        "If you are a California resident, under the California Consumer Privacy Act, you have the right to opt-out of the sale of your personal information to third parties, as further details in the U.S. Privacy Notice at",
                        " ",
                        (0, i.jsx)("a", {
                          href: "http://www.crystald.com/privacy",
                          children: "http://www.crystald.com/privacy",
                        }),
                        '. These cookies collect information for analytics and to personalize your experience with targeted ads. If you opt out we will not be able to offer you personalized ads and will not hand over your personal information to any third parties. Additionally, you may contact our legal department for further clarification about your rights as a California consumer by writing to us at the email address listed in the section "How to Contact Us." If you have enabled privacy controls on your browser (such as a plugin), we have to take that as a valid request to opt-out. Therefore we would not be able to track your activity through the web. This may affect our ability to personalize ads according to your preferences.',
                      ],
                    }),
                    (0, i.jsx)("p", {
                      children: "5. RESTRICTING, BLOCKING OR DELETING COOKIES",
                    }),
                    (0, i.jsx)("p", {
                      children:
                        "If you would rather restrict, block or delete cookies from Crystal Dynamics' websites you can click on the button below.",
                    }),
                    (0, i.jsx)("p", {
                      children: (0, i.jsx)("button", {
                        type: "button",
                        onClick: (e) => {
                          var s;
                          (e.preventDefault(),
                            null == (s = window.__ucCmp) ||
                              s.showSecondLayer());
                        },
                        children: "Cookie Settings",
                      }),
                    }),
                    (0, i.jsx)("p", {
                      children:
                        "Additionally, you can also use your browser or device's operating system to do so. We provide some recommended steps on how to do this below in the browser cookie management section. However, each browser and device manages cookies differently, so check the instructions for your browser or operating system.",
                    }),
                    (0, i.jsx)("p", {
                      className: "has-h-2-font-size",
                      children: "6. BROWSER COOKIE MANAGEMENT",
                    }),
                    (0, i.jsx)("p", {
                      children:
                        "Most web browsers and devices provide controls that allow you to choose whether to block browser cookies and to delete them. Controls vary by browser and the settings available and how they work may change. Below are links with instructions and further information on settings provided by some popular browsers. The following is not an exhaustive list and functionality may change as browsers and devices update. For more information on how to manage cookies with your browser and/or device, please refer to the instructions for that browser or device.",
                    }),
                    (0, i.jsxs)("p", {
                      children: [
                        (0, i.jsx)("a", {
                          href: "https://www.google.com/url?q=https://support.google.com/chrome/answer/95647&sa=D&source=docs&ust=1694131976618100&usg=AOvVaw1dZYcgJQjTnmm4xm1cGs6i",
                          children: "Google Chrome™ browser",
                        }),
                        (0, i.jsx)("br", {}),
                        (0, i.jsx)("a", {
                          href: "https://www.google.com/url?q=https://support.microsoft.com/en-us/search?query%3Denable%2520cookies%2520in%2520edge&sa=D&source=docs&ust=1694131976619204&usg=AOvVaw1_ABqa9mQquEZNSV8It9OL",
                          children: "Microsoft Edge browser",
                        }),
                        (0, i.jsx)("br", {}),
                        (0, i.jsx)("a", {
                          href: "https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop",
                          children: "Firefox browser",
                        }),
                        (0, i.jsx)("br", {}),
                        (0, i.jsx)("a", {
                          href: "https://support.apple.com/en-ie/guide/safari/sfri11471/mac",
                          children: "Apple iOS Safari browser",
                        }),
                        (0, i.jsx)("br", {}),
                        (0, i.jsx)("a", {
                          href: "https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DAndroid&hl=en&oco=0",
                          children: "Android",
                        }),
                      ],
                    }),
                    (0, i.jsx)("p", {
                      children:
                        "However, each browser and device manages cookies differently, and the locations and functionality of their options change frequently, so check the instructions for your browser or operating system.",
                    }),
                    (0, i.jsxs)("p", {
                      children: [
                        "The",
                        " ",
                        (0, i.jsx)("a", {
                          href: "https://optout.networkadvertising.org/",
                          children: "Network Advertising Initiative",
                        }),
                        " ",
                        "and",
                        " ",
                        (0, i.jsx)("a", {
                          href: "https://www.youronlinechoices.eu/",
                          children: "Your Online Choices",
                        }),
                        " ",
                        "websites provide mechanisms for opting-out of some advertising.",
                      ],
                    }),
                    (0, i.jsx)("p", {
                      className: "has-h-2-font-size",
                      children: "7. HOW TO CONTACT US",
                    }),
                    (0, i.jsx)("p", {
                      children:
                        "If you have any questions, please contact us at the following mailing address or email:\xa0\xa0",
                    }),
                    (0, i.jsxs)("p", {
                      children: [
                        "Crystal Dynamics, Inc.\xa0",
                        (0, i.jsx)("br", {}),
                        "Attention: Legal",
                        (0, i.jsx)("br", {}),
                        "2855 Campus Drive, Suite 200",
                        (0, i.jsx)("br", {}),
                        "San Mateo, CA 94403",
                        (0, i.jsx)("br", {}),
                        "United States of America",
                        (0, i.jsx)("br", {}),
                        "PrivacyNotice [at] crystald.com\xa0",
                      ],
                    }),
                    (0, i.jsx)("p", {
                      className: "has-h-2-font-size",
                      children: "8. CHANGES TO THIS COOKIES NOTICE",
                    }),
                    (0, i.jsx)("p", {
                      children:
                        "We may change this Cookies Notice from to time as our services and products change. You should check here regularly to see the current Cookies Notice that is in effect and any changes that may have been made to it.",
                    }),
                  ],
                }),
                (0, i.jsx)(r.A, {
                  websiteSingleton: s,
                  navItems: t,
                  footerSocialLinks: o,
                }),
              ],
            });
          }
          o();
        } catch (e) {
          o(e);
        }
      });
    },
    71429: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => a });
      var o = t(2183),
        i = t(14623),
        r = t.n(i);
      function a(e) {
        let { data: s } = e;
        return (0, o.jsx)(r(), {
          children: (0, o.jsx)("script", {
            type: "application/ld+json",
            dangerouslySetInnerHTML: { __html: JSON.stringify(s) },
          }),
        });
      }
    },
    75894: (e, s, t) => {
      "use strict";
      t.a(e, async (e, o) => {
        try {
          t.d(s, { A: () => f });
          var i = t(2183),
            r = t(96006),
            a = t.n(r),
            n = t(11677),
            c = t.n(n),
            l = t(99435),
            d = t(7345),
            h = t(71429),
            u = t(92446),
            p = t(4243),
            m = e([l, u, p]);
          function f(e) {
            var s, t, o;
            let { websiteSingleton: r, navItems: n, footerSocialLinks: m } = e,
              { isLoggedIn: f, shopifyUrl: g } = (0, l.u)(),
              y = n.filter(
                (e) => e.showInFooter && !(f && e.hideForLoggedInUsers),
              ),
              w = n.filter(
                (e) => e.showInSubFooter && !(f && e.hideForLoggedInUsers),
              );
            return (0, i.jsxs)("footer", {
              className: "relative w-full bg-black px-8 text-white lg:px-32",
              children: [
                (0, i.jsx)(h.A, { data: (0, p._8)(r, m) }),
                (0, i.jsx)(h.A, { data: (0, p.OU)() }),
                (0, i.jsxs)("div", {
                  className:
                    "flex flex-col items-center justify-center space-y-16 pt-16 pb-16 lg:flex-row lg:items-stretch lg:justify-between lg:space-y-0 lg:pt-32",
                  children: [
                    (0, i.jsx)("div", {
                      children: (0, i.jsx)(a(), {
                        src: (0, u._c)(
                          null == (t = r.footerLogo) ||
                            null == (s = t.fields.file)
                            ? void 0
                            : s.url,
                        ),
                        width: 248,
                        height: 248,
                        alt: (0, u._c)(
                          null == (o = r.footerLogo)
                            ? void 0
                            : o.fields.description,
                        ),
                        className: "w-40",
                      }),
                    }),
                    (0, i.jsxs)("nav", {
                      "aria-label": "Footer",
                      className:
                        "text-darkgray-500 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-lg",
                      children: [
                        y.map((e) => {
                          let s = e.link;
                          return (
                            e.shouldReplaceWithGeneratedShopLink &&
                              g &&
                              (s = g),
                            (0, i.jsx)(
                              c(),
                              { href: s, children: e.name },
                              e.link + e.name,
                            )
                          );
                        }),
                        (0, i.jsx)("span", {
                          id: "accessibilityWidget",
                          className: "cursor-pointer",
                          children: "Accessibility",
                        }),
                        (0, i.jsx)("a", {
                          href: "#",
                          className: "cursor-pointer",
                          onClick: (e) => {
                            var s;
                            (e.preventDefault(),
                              null == (s = window.__ucCmp) ||
                                s.showSecondLayer());
                          },
                          children:
                            "Do Not Sell or Share My Personal Information",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className:
                    "flex flex-col items-center justify-center space-y-16 pb-16 lg:flex-row lg:items-stretch lg:justify-between lg:space-y-0",
                  children: [
                    (0, i.jsx)("div", {
                      className: "text-darkgray-500 text-center",
                      children: r.footerCopyright,
                    }),
                    (0, i.jsx)("div", {
                      className: "flex items-center space-x-4 text-white",
                      children: m.map((e) => {
                        var s, t, o, r;
                        return (0, i.jsx)(
                          d.A,
                          {
                            href: e.link,
                            children: (0, i.jsx)(a(), {
                              src: (0, u._c)(
                                null == (t = e.icon) ||
                                  null == (s = t.fields.file)
                                  ? void 0
                                  : s.url,
                              ),
                              alt:
                                null !=
                                (r =
                                  null == (o = e.icon)
                                    ? void 0
                                    : o.fields.description)
                                  ? r
                                  : "",
                              width: 20,
                              height: 20,
                            }),
                          },
                          e.link,
                        );
                      }),
                    }),
                  ],
                }),
                (0, i.jsx)("div", { className: "h-px bg-gray-500" }),
                (0, i.jsxs)("div", {
                  className:
                    "flew-col flex flex-col items-start justify-start gap-x-10 gap-y-10 py-12 text-gray-300 md:justify-between 2xl:flex-row",
                  children: [
                    (0, i.jsx)("p", {
                      className:
                        "text-darkgray-300 max-w-250 text-center text-sm lg:text-left",
                      children: r.footerLegalNotice,
                    }),
                    (0, i.jsx)("nav", {
                      "aria-label": "Legal",
                      className:
                        "text-darkgray-500 flex w-full flex-wrap items-center justify-center gap-x-10 gap-y-2 md:flex-row md:gap-x-10 md:gap-y-0 lg:w-auto lg:justify-start",
                      children: w.map((e) =>
                        (0, i.jsx)(
                          "a",
                          { href: e.link, children: e.name },
                          e.link + e.name,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            });
          }
          (([l, u, p] = m.then ? (await m)() : m), o());
        } catch (e) {
          o(e);
        }
      });
    },
    91134: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => a });
      var o = t(2183),
        i = t(14623),
        r = t.n(i);
      function a(e) {
        let { description: s } = e;
        return (0, o.jsxs)(r(), {
          children: [
            (0, o.jsx)(
              "meta",
              { name: "description", content: s },
              "description",
            ),
            (0, o.jsx)(
              "meta",
              { property: "og:description", content: s },
              "og:description",
            ),
            (0, o.jsx)(
              "meta",
              { name: "twitter:description", content: s },
              "twitter:description",
            ),
          ],
        });
      }
    },
  },
  (e) => {
    (e.O(0, [9950, 6006, 1433, 1329, 1089, 5216, 2446, 636, 6593, 8792], () =>
      e((e.s = 7226)),
    ),
      (_N_E = e.O()));
  },
]);
